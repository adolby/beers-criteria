(ns app.pipelines
  "Application go routine pipelines, currently only for throttling
   user text input."
  (:require [cljs.core.async :refer [<! >! put! close! chan
                                     timeout sliding-buffer]]
            [re-frame.core :refer [dispatch]]
            [taoensso.timbre :as timbre :refer-macros [info]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(defn throttle
  "Throttle input"
  [in ms-delay]
  (let [out (chan)]
    (go
      (while true
        (>! out (<! in))
        (<! (timeout ms-delay))))
    out))

(defn send-results
  "Send latest results to event processor"
  [in]
  (go
    (while true
      (let [text (<! in)]
        (dispatch [:search-results text])))))

;; Pipeline
(def input-chan (chan (sliding-buffer 1)))
(def throttled-chan (throttle input-chan 200))
(send-results throttled-chan)
