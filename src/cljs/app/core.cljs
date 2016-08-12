(ns app.core
  (:require [re-frame.core :refer [dispatch dispatch-sync]]
            [app.views :as views]
            [app.events :as events]
            [app.subs :as subs]))

(def criteria-url "data/beers-2015.json")

(defn ^:export main
  []
  (dispatch-sync [:initialize-db])
  (views/render-page)
  (dispatch [:load-criteria criteria-url])
  (views/listen-search-input))
