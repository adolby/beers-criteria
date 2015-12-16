(ns app.app
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :as async :refer [<! >! put! close! chan
                                               timeout sliding-buffer]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go-loop]]))

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

; (defn timeout [ms]
;   (let [c (chan)]
;     (js/setTimeout (fn [] (close! c)) ms)
;     c))

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
(def query-chan (chan))
(def throttled-query-chan (throttle query-chan 1000))

; Rest of process pipeline
(def get-results-out (get-results throttled-query-chan))
(def extract-hits-out (extract-hits get-results-out))
(update-results-state extract-hits-out)

; Use channels instead of callbacks for DOM interaction. Taken from
; David Nolen's Clojurescript 101:
; http://swannodette.github.io/2013/11/07/clojurescript-101/
(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn search-field []
  (dom/getElement "search-field"))

; Capture keypresses on search field and perform searches as user types,
; throttled to an interval
(defn query-input-loop []
  (let [typing (listen (search-field) "keypress")]
    (go-loop []
      (<! typing)
      (>! query-chan (.-value (search-field))))))

; Templating
(defsnippet result-data "templates/results.html" [:.list-row] [result-element]
  {[:.list-row] (kioo/content [:li (first result-element)]
                              [:li (second result-element)])})

(defsnippet result-card "templates/results.html" [:.card] [result-map]
  {[:.list-column] (kioo/content [:li
                                   [:ul {:class "list-row"}
                                     (map result-data
                                       (get result-map :_source))]])})

(deftemplate result-cards "templates/results.html" []
  {[:.card] (map result-card (get @state :results))})

(deftemplate page "index.html" []
  {[:.results] (result-cards)})

(defn init []
  (reagent/render-component [page] (.-body js/document))
  (query-input-loop))

; (let [query-url "http://168.235.155.245/beers/2015/_search"
;       terms "cardiovascular"]
;   (execute-query query-url terms))

; (let [{drugs :drugs rationale :rationale recommendation :recommendation
;        quality-of-evidence :quality-of-evidence
;        strength-of-recommendation :strength-of-recommendation
;        evidence :evidence}]
