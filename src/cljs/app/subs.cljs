(ns app.subs
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [reg-sub subscribe]]))

;; Subscription for showing search results
(reg-sub
  :results
  (fn [db _]
    (:results db)))
