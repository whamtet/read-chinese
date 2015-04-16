(ns routes.index)

(require '[hiccup.page :as hiccup])
(require 'hiccup.core)
(import java.io.File)

(def p #(-> % pr-str println))

(defn- response [& body]
  {:status 200
   :headers {"Content-Type" "Content-Type: text/html; charset=utf-8"}
   :body
   (hiccup/html5
    [:header
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:charset "UTF-8"}]
     [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]
     [:link {:rel "stylesheet" :type "text/css" :href "/jquery-ui.css"}]
     [:script {:src "/jquery.js"}]
     [:script {:src "/rc-cljs/out/goog/base.js"}]
     [:script {:src "/rc-cljs/rc_cljs.js"}]
     [:script {:src "/react-0.9.0.js"}]
     [:script "
      goog.require('rc_cljs.root')
      goog.require('rc_cljs.translate')
      $(function() {
      })
      "]
     [:script {:src "/rc.js"}]
     [:script {:src "/jquery-ui.js"}]
     ]
    [:body
     body
     ]
    )})

(defn map-str [f & s] (apply str (interpose "\n" (apply map f s))))

(defn blank-page [class kvs]
  (let [
        kvs (assoc kvs "all" (pr-str (keys kvs)))
        ]
    (response
     [:div {:id "content"}]
     [:div {:id "test"}]
     (map (fn [[k v]] [:input {:type "hidden" :id k :value v}]) kvs)
     [:script (format "%s rc_cljs.%s.main();"
                      (map-str #(format "bind_variable('%s', '%s', true);" class %) (keys kvs)) class)]
     )))
