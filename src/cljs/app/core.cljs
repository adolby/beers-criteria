(ns app.core
  "Application core"
  (:require [re-frame.core :refer [dispatch dispatch-sync]]
            [app.views :as views]
            [app.events :as events]
            [app.subs :as subs]))

(defn ^:export main
  "Application entry point"
  []
  (dispatch-sync [:initialize-db])
  (let [criteria-url "data/beers-2015-metadata-merged.json"]
    (dispatch [:load-criteria criteria-url]))
  (views/render-results)
  (views/listen-search-input))
