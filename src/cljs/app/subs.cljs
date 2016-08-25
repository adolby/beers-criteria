(ns app.subs
  "Application re-frame subscriptions"
  (:require [re-frame.core :refer [reg-sub]]))

;; Subscription for showing search results
(reg-sub
  :results
  (fn [db _]
    (:results db)))
