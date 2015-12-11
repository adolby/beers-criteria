(ns app.app
  (:require [cljs.core.async :as async :refer [<!]]
            [reagent.core :as reagent]
            [kioo.reagent :as kioo]
            [cljs-http.client :as http])
  (:require-macros [kioo.reagent :refer [defsnippet deftemplate]]
                   [cljs.core.async.macros :refer [go]]))

; ElasticSearch API URL
(def query-url "http://168.235.155.245/beers/2015/_search")

; Application state
(def query-results (reagent/atom {}))

(defn get-results [in]
  (let [out (chan)]
    (go
      (while true
        (>! out (<! (http/get query-url {:query-params {"q" (<! in)}})))))))

(defn extract-hits [in]
  (let [out (chan)]
    (go
      (while true
        (>! out {{{hits-vector :hits} :hits} :body} (<! in))))))

(defn )

(defn update-results-state [in]
  (go
    (while true
      (swap! @query-results (<! in)))))

; Process pipeline
(def query-chan (chan))
(def get-results-out (get-results query-chan))
(def extract-hits-out (extract-hits get-results-out))
(update-results-state extract-hits-out)

; Templating
(defsnippet result-data "templates/results.html" [:.list-row] [result-element]
  {[:list-row] (kioo/content [:li (first result-element)] [:li (second result-element)])})

(defsnippet result-card "templates/results.html" [:.card] [result-map]
  {[:.list-column] (kioo/content [:li
                                   [:ul {:class "list-row"}
                                     (map result-data {:_source} result-map)]])})

(deftemplate result-cards "templates/results.html" []
  {[:.card] (map result-card @query-results)})

(deftemplate page "index.html" []
  {[:.search-field] (kioo/listen :on-change #(>!! query-chan .-value))}
  {[:.results] (result-cards)})

(defn init []
  (reagent/render-component [page] (.-body js/document)))

  ; (let [query-url "http://168.235.155.245/beers/2015/_search"
  ;       terms "cardiovascular"]
  ;   (execute-query query-url terms))


  ; (let [{drugs :drugs rationale :rationale recommendation :recommendation
  ;       quality-of-evidence :quality-of-evidence
  ;       strength-of-recommendation :strength-of-recommendation
  ;       evidence :evidence}]
