(ns app.core
  "Application core"
  (:require [re-frame.core :refer [dispatch dispatch-sync]]
            [app.views :as views]
            [app.events :as events]
            [app.subs :as subs]))

(def criteria-url "data/beers-2015-metadata-merged.json")

(defn ^:export main
  "Application entry point"
  []
  (dispatch-sync [:initialize-db])
  (views/render-results)
  (dispatch [:load-criteria criteria-url])
  (views/listen-search-input))
