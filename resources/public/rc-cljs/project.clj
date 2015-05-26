(defproject rc-cljs "0.0.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}

  :min-lein-version "2.3.4"

  ;; We need to add src-cljs too, because cljsbuild does not add its
  ;; source-paths to the project source-paths
  :source-paths ["src-cljs" "src"]

  :dependencies [
                 [org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [crate "0.2.4"]
                 [jayq "2.5.1"]
                 [cljs-ajax "0.2.6"]
                 [reagent "0.4.3"]
                 ]

  :plugins [[lein-cljsbuild "1.0.1"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {
            :rc-cljs
            {:source-paths ["src-cljs"]
             :compiler
             {:output-to "rc_cljs.js"
              :output-dir "out"
              :optimizations :simple
              :pretty-print true
              :preamble ["reagent/react.js"]
              }}}}
  )
