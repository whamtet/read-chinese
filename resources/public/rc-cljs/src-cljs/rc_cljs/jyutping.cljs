(ns rc-cljs.jyutping
  (:require
   [rc-cljs.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   ))

(def input (atom ""))
(def output (atom ""))

(defn content []
  [:div
   [:input {:type "text"
            :value @input
            :on-change #(reset! input (-> % .-target .-value))}]
   [:input {:type "button"
            :value "Convert"
            :on-click #(when-let [o (@m @input)]
                         (reset! input "")
                         (reset! output o))}]
   [:div @output]
   ])

(defn main []
  (core/page2 content))
