(ns app.app
  (:require [goog.dom :as dom]
            [clojure.string :as string :refer [blank?]]
            [cljs.core.async :refer [<! >! put! close! chan
                                     timeout sliding-buffer]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go go-loop]]))

(def data-url "data/beers-data.json")

; ElasticSearch API URL
(def query-url "http://168.235.155.245/beers/2015/_search")

; Application state
(def state (reagent/atom {:results {}}))

(defn init-state []
  (go
    (swap! state assoc :results
      (get (<! (http/get data-url)) :body))))

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

(defn flatten-structure [in]
  (let [out (chan)]
    (go-loop []
      (>! out (for [el (<! in)]
                (get el :_source))))
    out))

(defn update-results-state [in]
  (go-loop []
    (swap! state assoc :results (<! in))))

(defn throttle [in ms-delay]
  (let [out (chan)]
    (go-loop []
      ; Take from the input channel and pass through.
      (>! out (<! in))

      ; Park while trying to take from an unused channel. The channel receives
      ; no input, and will time out, delaying the above take from the input
      ; channel.
      (<! (timeout ms-delay)))
    out))

; Process pipeline entry point
(def query-chan (chan (sliding-buffer 1)))
(def throttled-query-chan (throttle query-chan 1000))

; Rest of process pipeline
(def get-results-out (get-results throttled-query-chan))
(def extract-hits-out (extract-hits get-results-out))
(def flatten-structure-out (extract-hits extract-hits-out))
(update-results-state flatten-structure-out)

(def second-chan (chan))
(def second-path (update-results-state second-chan))

; Templating
(def labels
  {:category-drugs "Therapeutic Category: Drug(s)"
   :organ-system "Organ System"
   :rationale "Rationale"
   :recommendation "Recommendation"
   :quality-of-evidence "Quality Of Evidence"
   :strength-of-recommendation "Strength of Recommendation"
   :evidence "Evidence"})

; (defsnippet result-data "templates/results.html" [:.list-row] [[k v]]
;   {[:.list-row] (kioo/content [:li (k labels)]
;                               [:li v])})
;
; (defsnippet result-card "templates/results.html" [:.card] [results]
;   {[:.list-column] (kioo/content [:li
;                                    [:ul {:class "list-row"}
;                                      (map result-data results)]])})
;
; (deftemplate result-cards "templates/results.html" []
;   {[:.cards] (kioo/content (map result-card
;                              (:results @state)))})

(defsnippet result-data "templates/results.html" [:.row] [[k v]]
  {[:.row] (kioo/content [:li (k labels)] [:li v])})

(defsnippet result-card "templates/results.html" [:.card] [results]
  {[:.card] (kioo/content (map result-data results))})

(deftemplate result-cards "templates/results.html" []
  {[:.cards] (kioo/content (map result-card
                             (:results @state)))})

(deftemplate page "index.html" []
  {[:.search-field] (kioo/listen :on-key-down
                      (fn [_]
                        (let [input (.-value (dom/getElement "search-field"))]
                          (if (blank? input)
                            (init-state)
                            (put! query-chan input)))))

   [:.test-button] (kioo/listen :on-click
                     (fn [_]
                       (.log js/console (clj->js (:results @state)))))

   [:.test-state-push] (kioo/listen :on-click
                         (fn [_]
                           (put! second-chan
                             [{
                               :category-drugs "-generation antihistamines: Brompheniramine, Carbinoxamine, Chlorpheniramine, Clemastine, Cyproheptadine, Dexbrompheniramine, Dexchlorpheniramine, Dimenhydrinate, Diphenhydramine (oral), Doxylamine, Hydroxyzine, Meclizine, Promethazine, Triprolidine",
                               :organ-system "Anticholinergics",
                               :rationale "Highly anticholinergic; clearance reduced with advanced age, and tolerance develops when used as hypnotic; risk of confusion, dry mouth, constipation, and other anticholinergic effects or toxicity. Use of diphenhydramine in situations such as acute treatment of severe allergic reaction may be appropriate",
                               :recommendation "Avoid",
                               :quality-of-evidence "Moderate",
                               :strength-of-recommendation "Strong",
                               :evidence "2015 Criteria: Duran 2013, Fox 2014, Kalisch Ellet 2014. From previous criteria: Agostini 2001, Boustani 2007, Guaiana 2010, Han 2001, Rudolph 2008"
                              },
                              {
                               :category-drugs "Antiparkinsonian agents: Benztropine (oral), Trihexyphenidyl",
                               :organ-system "Anticholinergics",
                               :rationale "Not recommended for prevention of extrapyramidal symptoms with antipsychotics; more effective agents available for treatment of Parkinson disease.",
                               :recommendation "Avoid",
                               :quality-of-evidence "Moderate",
                               :strength-of-recommendation "Strong",
                               :evidence "Rudolph 2008"
                              }])))

   [:.results] (kioo/content (result-cards))})

(defn init []
  (init-state)
  (reagent/render-component [page] (.-body js/document)))
