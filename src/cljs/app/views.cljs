(ns app.views
  "Application views implemented with Reagent"
  (:require [goog.events :as event]
            [goog.dom :refer [getElementByClass]]
            [clojure.string :as str :refer [blank?]]
            [cljs.core.async :refer [<! put! chan]]
            [reagent.core :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [taoensso.timbre :as timbre :refer-macros [info]]
            [app.pipelines :as pipelines])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn search-field
  []
  (getElementByClass "search-field"))

(defn listen
  "Creates and returns a channel to listen to events specified by type
   parameter"
  [el type]
  (let [out (chan)]
    (event/listen el type #(put! out %))
    out))

(defn listen-search-input
  "Listen to search input and output its value to the search pipeline"
  []
  (let [input (listen (search-field) "keyup")]
    (go
      (while true
        (<! input)
        (let [query-text (.-value (search-field))]
          (put! pipelines/input-chan query-text))))))

(def labels
  {:category-drugs "Therapeutic Category: Drug(s)"
   :organ-system "Organ System"
   :rationale "Rationale"
   :recommendation "Recommendation"
   :quality-of-evidence "Quality Of Evidence"
   :strength-of-recommendation "Strength of Recommendation"
   :evidence "Evidence"})

(defn result-cards
  "Render the results to card form with Reagent"
  []
  (let [results (subscribe [:results])]
    (fn []
      [:section.cards
        (map-indexed
          (fn [card-idx result]
            [:div.card
              {:key (str "card-" card-idx)}
              (map-indexed
                (fn [row-idx [label value]]
                  [:ul.row
                    {:key (str "card-" card-idx "-row-" row-idx)}
                    [:li (get labels label)]
                    [:li value]])
                result)])
          @results)])))

(defn render-results
  "Entry point for Reagent"
  []
  (reagent/render-component
    [result-cards]
    (.getElementById js/document "results")))
