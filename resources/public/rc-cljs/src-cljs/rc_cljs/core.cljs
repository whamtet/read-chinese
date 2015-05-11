(ns rc-cljs.core
  (:use [jayq.core :only [$ val attr replace-with append add-class remove-class]]
        [cljs.reader :only [read-string]]
        )
  (:require
   [crate.core :as crate]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   ))

(enable-console-print!)

(defn space-interpose [s]
  (apply str (interpose " " s)))

(defn apply-interpose [i s]
  (apply str (interpose i s)))

(defn value-filter [f m]
  (into {} (for [[k v] m :when (f v)] [k v])))

(defn key-filter [f m]
  (into {} (for [[k v] m :when (f k)] [k v])))

(defn p [x] (println (pr-str x)))


(defn page2 [contents]
  (reagent/render-component
   [:div [contents]]
   (first ($ "#content"))))

(defn str-contains? [a b]
  (not= -1 (.indexOf a b)))

(defn format [s & subs]
  (loop [
         s s
         current (first subs)
         todo (rest subs)
         ]
    (if (and (str-contains? s "%s") current)
      (recur (.replace s "%s" current) (first todo) (rest todo))
      s)))


(defn link-to [url2 m]
  (set! (.-location js/document) (url url2 m)))

(defn link-to2 [url2 m new-window?]
  (if new-window?
    (.open js/window (url url2 m) "_blank")
    (set! (.-location js/document) (url url2 m))))

(defn replace-all [a b c]
  (loop [a a]
    (if (= -1 (.indexOf a b)) a (recur (.replace a b c)))))

(defn safe-name [x]
  (cond
   (= true x) (str x)
   (= false x) "false"
   x (name x)
   :default ""))

(defn url [host m]
  (str (apply str host "?" (interpose "&" (map (fn [[k v]] (str (safe-name k) "=" (replace-all (safe-name v) " " "%20"))) m)))))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))
