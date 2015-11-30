(ns app.app
  (:require [cljs.core.async :as async :refer [<!]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go]]))

(def query-results (reagent/atom {}))

; Get JSON search result data
(defn download-json [json-url terms]
  (go
    (let [{{{hits-vector :hits} :hits} :body} (<! (http/get json-url {:query-params {"q" terms}}))]
      (swap! query-results hits-vector)
      (prn query-results))))

; Templating
; (defn sub-map [amap keyseq]
;   (reduce #(assoc %1 %2 ())))

(defsnippet result "templates/results.html" [:.card] [result-map]
  ; (let [{drugs :drugs rationale :rationale recommendation :recommendation
  ;       quality-of-evidence :quality-of-evidence
  ;       strength-of-recommendation :strength-of-recommendation
  ;       evidence :evidence}]
  {[:.list-column] (kioo/content [:li [:ul [:li ] [:li ]]])})

(deftemplate results "templates/results.html" []
  {[:.card] (map result @query-results)})

(deftemplate page "index.html" []
  {[:.results] (kioo/content (beers-results))})

(defn init []
  (let [json-url "http://168.235.155.245:9200/beers/2015/_search", terms "cardiovascular"]
    (download-json json-url terms))
  (reagent/render-component [page] (.-body js/document)))
