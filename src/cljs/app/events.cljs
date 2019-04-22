(ns app.events
  "Application re-frame events"
  (:require
    [clojure.string :as str]
    [clojure.spec.alpha :as spec]
    [ajax.core :as ajax]
    [re-frame.core
      :refer [reg-event-db reg-event-fx path trim-v after
              dispatch]]
    [day8.re-frame.http-fx]
    [cljsjs.fuse]
    [taoensso.timbre :as timbre :refer-macros [info]]
    [app.db :refer [default-value]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; Interceptors

(defn check-and-throw
  "Throw an exception if db doesn't match the spec"
  [a-spec db]
  (when-not (spec/valid? a-spec db)
    (throw (ex-info "spec check failed: "
             {:problems (spec/explain-str a-spec db)}))))

(def check-spec-interceptor
  (after (partial check-and-throw :app.db/db)))

;; Handlers

(reg-event-db
  :initialize-db
  check-spec-interceptor
  (fn [_ _]
    default-value))

;; Load criteria from file and intialize criteria and results on
;; startup
(reg-event-fx
  :load-criteria
  (fn [_ [_ url]]
    {:http-xhrio {:method :get
                  :uri url
                  :timeout 8000
                  :response-format (ajax/json-response-format
                                     {:keywords? true})
                  :on-success [:initialize-criteria]}}))

(defn filter-results
  "Filter out metadata from results"
  [results]
  (mapv
    (fn [result]
      (dissoc result :category :drugs))
    results))

;; On successfully receiving criteria, proceed to analysis
(reg-event-db
  :initialize-criteria
  check-spec-interceptor
  (fn [db [_ result]]
    (let [criteria (:criteria result)
          dictionary (clj->js criteria)
          options (clj->js
                    {:keys [{:name "drugs" :weight 0.7}
                            {:name "category" :weight 0.2}
                            {:name "organ-system" :weight 0.1}]})
          fuse (js/Fuse. dictionary options)]
      (assoc db :criteria criteria
                :fuse fuse
                :results (filter-results criteria)))))

;; Do the term search with Fuse.js and store results in the DB
(reg-event-db
  :search-results
  check-spec-interceptor
  (fn [db [_ match-text]]
    (let [search-results
          (if (str/blank? match-text)
            (let [criteria (:criteria db)]
              criteria)
            (let [fuse (:fuse db)
                  results (js->clj
                            (.search fuse match-text)
                            :keywordize-keys true)]
              results))]
      (assoc db :results (filter-results search-results)))))
