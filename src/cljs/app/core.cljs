(ns app.core
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [goog.style :as style]
            [clojure.string :as string :refer [blank?]]
            [cljs.core.async :refer [<! >! put! close! chan
                                     timeout sliding-buffer]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http]
            [app.pipelines
              :as pipelines
              :refer [throttle get-results extract-hits
                      flatten-structure]])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(def all-results-url "data/beers-2015.json")

;; ElasticSearch API URL
;;(def query-url "http://168.235.155.245/beers/2015/_search")
(def query-url "search_test.json")

;; Application state
(def state (reagent/atom {:all-results {} :results {} :cache {}}))

(defn update-results
  [results]
  (swap! state assoc :results results))

(defn update-cache
  [key new-results]
  (when (seq new-results)
    (swap! state assoc-in [:cache key] new-results)))

(defn load-all-results
  [url]
  (go
    (swap! state assoc :all-results (:body (<! (http/get url))))
    (update-results (:all-results @state))))

;; Templating
(def labels
  {:category-drugs "Therapeutic Category: Drug(s)"
   :organ-system "Organ System"
   :rationale "Rationale"
   :recommendation "Recommendation"
   :quality-of-evidence "Quality Of Evidence"
   :strength-of-recommendation "Strength of Recommendation"
   :evidence "Evidence"})

(defsnippet result-data "templates/results.html" [:.row] [[k v]]
  {[:.row] (kioo/content [:li (k labels)] [:li v])})

(defsnippet result-card "templates/results.html" [:.card] [results]
  {[:.card] (kioo/content (map result-data results))})

(deftemplate result-cards "templates/results.html" []
  {[:.cards] (kioo/content (map result-card
                             (:results @state)))})

(deftemplate page "index.html" []
  {[:.results] (kioo/content (result-cards))})

;; Pipelines

(defn update-query-results
  "Update latest results"
  [in]
  (go
    (while true
      (let [[search-text query-results] (<! in)]
        (update-cache search-text query-results)
        (update-results query-results)
        (style/setElementShown
          (dom/getElementByClass "busy-indicator")
          false)))))

(defn update-cache-results
  "Update cached results"
  [in]
  (go
    (while true
      (let [query-result (<! in)]
        (update-results (get (:cache @state) query-result))))))

;; Query process pipeline
;; Sliding buffer is used to complete throttling
(def query-chan (chan (sliding-buffer 1)))
(def throttled-query-chan (throttle query-chan 3000))
(def get-results-out (get-results throttled-query-chan))
(def extract-hits-out (extract-hits get-results-out))
(def flatten-structure-out (flatten-structure extract-hits-out))
(update-query-results flatten-structure-out)

;; Cache pipeline
(def cache-chan (chan))
(update-cache-results cache-chan)

;; Creates and returns a channel to listen to events specified by type parameter
(defn listen
  [el type]
  (let [out (chan)]
    (events/listen el type #(put! out %))
    out))

(defn search-field
  []
  (dom/getElementByClass "search-field"))

(defn listen-search-input
  []
  (let [input (listen (search-field) "keyup")]
    (go
      (while true
        (<! input)
        (let [cache (:cache @state)
              query-text (.-value (search-field))]
          (if (blank? query-text)
            (update-results (:all-results @state))
            (if (contains? cache query-text)
              (put! cache-chan query-text)
              (let [busy-indicator (dom/getElementByClass "busy-indicator")]
                (style/setElementShown busy-indicator true)
                (put! query-chan (vector query-url query-text))))))))))

(defn init
  []
  (load-all-results all-results-url)
  (reagent/render-component [page] (.-body js/document))
  (style/setElementShown (dom/getElementByClass "busy-indicator") false)
  (listen-search-input))
