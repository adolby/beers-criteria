(ns app.pipelines
  (:require [cljs.core.async :refer [<! >! put! close! chan
                                     timeout sliding-buffer]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

;; Query pipeline

(defn throttle
  "Throttle input"
  [in ms-delay]
  (let [out (chan)]
    (go
      (while true
        (>! out (<! in))
        (<! (timeout ms-delay))))
    out))

(defn get-results
  "Get results from search library"
  [in]
  (let [out (chan)]
    (go
      (while true
        (let [[url search-text] (<! in)
              response
              (<! (http/get url {:query-params
                                 {"q" (str "category-drugs:"
                                           search-text)}}))]
          (>! out (vector search-text response)))))
    out))

(defn extract-hits
  "Extract the hits from search library response"
  [in]
  (let [out (chan)]
    (go
      (while true
        (let [[search-text mid-results] (<! in)
              output (get-in mid-results [:body :hits :hits])]
          (>! out (vector search-text output)))))
    out))

(defn flatten-structure
  "Flatten the search library response"
  [in]
  (let [out (chan)]
    (go
      (while true
        (let [[search-text mid-results] (<! in)
              output (vec (map #(:_source %) mid-results))]
          (>! out (vector search-text output)))))
    out))
