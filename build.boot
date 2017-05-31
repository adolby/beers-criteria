(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies
 '[[org.clojure/clojure "1.8.0"]
   [org.clojure/clojurescript "1.9.562"]
   [org.clojure/core.async "0.2.395"]
   [cljs-ajax "0.6.0"]
   [reagent "0.6.2"]
   [re-frame "0.9.3"]
   [day8.re-frame/http-fx "0.1.3"]
   [cljsjs/fuse "2.6.2-0"]
   [com.taoensso/timbre "4.10.0"]

   [adzerk/boot-cljs "2.0.0" :scope "test"]
   [adzerk/boot-reload "0.5.1" :scope "test"]
   [adzerk/boot-test "1.2.0" :scope "test"]
   [adzerk/boot-cljs-repl "0.3.3"]
   [com.cemerick/piggieback "0.2.1"  :scope "test"]
   [weasel "0.7.0"  :scope "test"]
   [org.clojure/tools.nrepl "0.2.12" :scope "test"]
   [pandeiro/boot-http "0.8.3" :scope "test"]])

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[adzerk.boot-test :refer [test]]
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
