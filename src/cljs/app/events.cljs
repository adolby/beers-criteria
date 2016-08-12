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

(reg-event-db
  :load-criteria
  check-spec-interceptor
  (fn [db [_ url]]
    (go
      (let [data (:body (<! (http/get url)))
            criteria (:criteria data)
            meta-data (:meta-data data)]
        (dispatch [:update-meta-data meta-data])
        (dispatch [:update-criteria criteria])
        (dispatch [:update-results criteria])))
    db))

(reg-event-db
  :update-criteria
  [check-spec-interceptor (path :criteria) trim-v]
  (fn [_ [new-criteria]]
    (dispatch [:update-fuse])
    new-criteria))

(reg-event-db
  :update-results
  [check-spec-interceptor (path :results) trim-v]
  (fn [_ [new-results]]
    new-results))

(reg-event-db
  :update-meta-data
  [check-spec-interceptor (path :meta-data) trim-v]
  (fn [_ [new-meta-data]]
    new-meta-data))

(reg-event-db
  :update-fuse
  [check-spec-interceptor]
  (fn [db [_ _]]
    (let [criteria (db :criteria)
          meta-data (db :meta-data)
          search-dict
          (mapv
            (fn [criterion meta-datum]
              (merge criterion
                     meta-datum))
            criteria
            meta-data)
          dictionary (clj->js search-dict)
          options (clj->js
                    {:keys [{:name "drugs" :weight 0.7}
                            {:name "category" :weight 0.2}
                            {:name "organ-system" :weight 0.1}]})
          fuse (js/Fuse. dictionary options)]
      (assoc db :fuse fuse))))

(reg-event-db
  :search-results
  [check-spec-interceptor]
  (fn [db [_ match-text]]
    (let [criteria (db :criteria)]
      (if (str/blank? match-text)
        (dispatch [:update-results criteria])
        (let [fuse (db :fuse)
              search-results (js->clj (.search fuse match-text)
                                      :keywordize-keys true)
              results
              (mapv
                (fn [search-result]
                  (dissoc search-result :category :drugs))
                search-results)]
          (dispatch [:update-results results]))))
    db))
