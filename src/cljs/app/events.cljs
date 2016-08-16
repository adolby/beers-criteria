(ns app.events
  (:require
    [clojure.string :as str]
    [cljs.spec :as s]
    [cljs.core.async :refer [<!]]
    [cljs-http.client :as http]
    [re-frame.core :refer [reg-event-db path trim-v after debug
                           dispatch]]
    [cljsjs.fuse]
    [taoensso.timbre :as timbre :refer-macros [info]]
    [app.db :refer [default-value]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn check-and-throw
  "Throw an exception if db doesn't match the spec"
  [a-spec db]
  (when-not (s/valid? a-spec db)
    (throw (ex-info "spec check failed: "
             {:problems (s/explain-str a-spec db)}))))

(def check-spec-interceptor
  (after (partial check-and-throw :app.db/db)))

(reg-event-db
  :initialize-db
  check-spec-interceptor
  (fn [_ _]
    default-value))

;; Load criteria from file and intialize criteria and results on
;; startup
(reg-event-db
  :load-criteria
  check-spec-interceptor
  (fn [db [_ url]]
    (go
      (let [data (:body (<! (http/get url)))
            criteria (data :criteria)]
        (dispatch [:update-criteria criteria])
        (dispatch [:update-results criteria])))
    db))

;; Update criteria in the DB and send signal to update Fuse object
(reg-event-db
  :update-criteria
  [check-spec-interceptor (path :criteria) trim-v]
  (fn [_ [new-criteria]]
    (dispatch [:update-fuse])
    new-criteria))

;; Update results in the DB
(reg-event-db
  :update-results
  [check-spec-interceptor (path :results) trim-v]
  (fn [_ [new-results]]
    (let [filtered-results
          (mapv
            (fn [result]
              (dissoc result :category :drugs))
            new-results)]
      filtered-results)))

;; Update Fuse.js object in the DB
(reg-event-db
  :update-fuse
  [check-spec-interceptor]
  (fn [db [_ _]]
    (let [criteria (db :criteria)
          dictionary (clj->js criteria)
          options (clj->js
                    {:keys [{:name "drugs" :weight 0.7}
                            {:name "category" :weight 0.2}
                            {:name "organ-system" :weight 0.1}]})
          fuse (js/Fuse. dictionary options)]
      (assoc db :fuse fuse))))

;; Do the term search with Fuse.js and store results in the DB
(reg-event-db
  :search-results
  [check-spec-interceptor]
  (fn [db [_ match-text]]
    (let [criteria (db :criteria)]
      (if (str/blank? match-text)
        (dispatch [:update-results criteria])
        (let [fuse (db :fuse)
              results (js->clj (.search fuse match-text)
                               :keywordize-keys true)]
          (dispatch [:update-results results]))))
    db))
