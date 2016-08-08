(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [cljs-http "0.1.38"]
                 [reagent "0.5.1"]
                 [bidi "1.23.1"]
                 [kioo "0.4.1"]
                 [boot/core "2.4.2" :scope "test"]
                 [adzerk/boot-cljs "1.7.170-3" :scope "test"]
                 [adzerk/boot-reload "0.4.2" :scope "test"]
                 [pandeiro/boot-http "0.7.1-SNAPSHOT" :scope "test"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[pandeiro.boot-http :refer [serve]])

(deftask dev []
  (comp (serve)
        (watch)
        (speak)
        (reload)
        (cljs :optimizations :none :source-map true)
        (target)))

(deftask prod []
  (comp (cljs :optimizations :advanced)
        (target)))
