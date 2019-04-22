(ns app.db
  "Application re-frame database"
  (:require [cljs.reader]
            [clojure.spec.alpha :as spec]))

(spec/def ::db (spec/keys :req-un [::results ::criteria ::fuse]))

(def default-value
  {:results {}
   :criteria {}
   :fuse {}})
