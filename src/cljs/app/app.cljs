(ns app.app
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :as async :refer [<! >! put! close! chan
                                               timeout sliding-buffer]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go go-loop]]))

; ElasticSearch API URL
(def query-url "http://168.235.155.245/beers/2015/_search")

; Application state
(def state (reagent/atom {}))

(defn get-results [in]
  (let [out (chan)]
    (go-loop []
      (>! out (<! (http/get query-url {:query-params {"q" (<! in)}}))))
    out))

(defn extract-hits [in]
  (let [out (chan)]
    (go-loop []
      (>! out (get-in (<! in) [:body :hits :hits])))
    out))

(defn update-results-state [in]
  (go-loop []
    (.log js/console (swap! state assoc :results (<! in)))))

(defn throttle [c ms]
  (let [c' (chan)]
    (go-loop []
      ; Take from the input channel and pass through.
      (>! c' (<! c))

      ; Park while trying to take from an unused channel. The channel receives
      ; no input, and will time out, delaying the above take from the input
      ; channel.
      (<! (timeout ms)))
    c'))

; Process pipeline entry point
(def query-chan (chan (sliding-buffer 1)))
(def throttled-query-chan (throttle query-chan 1000))

; Rest of process pipeline
(def get-results-out (get-results throttled-query-chan))
(def extract-hits-out (extract-hits get-results-out))
(update-results-state extract-hits-out)

; Templating
(def labels
  {:category-drugs "Therapeutic Category: Drug(s)"
   :organ-system "Organ System"
   :rationale "Rationale"
   :recommendation "Recommendation"
   :quality-of-evidence "Quality Of Evidence"
   :strength-of-recommendation "Strength of Recommendation"
   :evidence "Evidence"})

(defsnippet result-data "templates/results.html" [:.list-column] [[k v]]
  {[:.list-row] (kioo/content [:li (k labels)]
                              [:li v])})

(defsnippet result-card "templates/results.html" [:.card] [results]
  {[:.list-column] (kioo/content [:li
                                   [:ul {:class "list-row"}
                                     (map result-data results)]])})

(deftemplate result-cards "templates/results.html" []
  {[:.card] (kioo/content (map result-card
                            (get-in @state [:results :_source])))})

(deftemplate page "index.html" []
  {[:.search-field] (kioo/listen :on-key-press
                      (fn []
                        (go
                          (.log js/console "Press")
                          (>! query-chan (.-value (dom/getElement "search-field"))))))

   [:.results] (kioo/content (result-cards))})

(defn init []
  (reagent/render-component [page] (.-body js/document)))
