(ns app.subs
  (:require [reagent.core :as reagent]
            [re-frame.core :refer [reg-sub subscribe]]))

(reg-sub
  :results
  (fn [db _]
    (:results db)))
