(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [cljs-http "0.1.37"]
                 [reagent "0.5.1"]
                 [bidi "1.21.1"]
                 [kioo "0.4.1"]
                 [alandipert/storage-atom "1.2.4"]
                 [boot/core "2.4.0" :scope "test"]
                 [adzerk/boot-cljs "1.7.48-6" :scope "test"]
                 [adzerk/boot-reload "0.4.1" :scope "test"]
                 [pandeiro/boot-http "0.7.0-SNAPSHOT" :scope "test"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[pandeiro.boot-http :refer [serve]])

(deftask build []
  (cljs))

(deftask run []
  (comp (serve)
        (watch)
        (reload)
        (speak)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
   identity)

(deftask development []
  (task-options! cljs {:optimizations :none
                       :unified-mode true
                       :source-map true}
                 reload {:on-jsload 'app.app/init})
   identity)

(deftask dev []
  (comp (development)
        (run)))

(deftask produce []
  (comp (production)
        (build)))
