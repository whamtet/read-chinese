(ns rc-cljs.root
  (:require
   [rc-cljs.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   )
  ;  (:require-macros [rc-cljs.macros :as m])
  )

(def p #(-> % pr-str println))

(defn file-selector-changed []
  (.submit (js/$ "#selector-form")))

(def jyutping? (atom true))

(defn content []
  [:div
   "Select File to Translate, Paste or " [:a {:href "/translate"} "Example"][:br][:br]
   [:form {
           :id "selector-form"
           :action "/translate"
           :method "POST"
           :enc-type "multipart/form-data"
           }
    "Title " [:input {:type "text" :name "title"}]
    " Jyutping " [:input {:type "checkbox"
                          :name "jyutping"
                          :checked @jyutping?
                          :on-change #(reset! jyutping? (-> % .-target .-checked))
                          }]
    [:br][:br]
    [:input {:type "file"
             :name "file-selector"
             :on-change file-selector-changed
             }][:br][:br]
    [:textarea {:name "text"
                :style {:width "90%"}
                :rows 20
                }][:br]
    [:input {:type "submit"}]
    ]
   [:h2 "Recent"]
   [:table
    [:tbody
     (let [
           jyutping? @jyutping?
           ]
       [:tr
        [:td
         (for [text @recent-texts]
           ^{:key text}
           [:div [:a {:href (core/url "/recent" {"k" text "jyutping" jyutping?})} text]])]
        [:td
         (for [text @reference-texts]
           ^{:key (str "ref" text)}
           [:div [:a {:href (core/url "/reference" {"k" text "jyutping" jyutping?})} text]])
         ]])]]
   ])

(defn main []
  (core/page2 content))

(defn t []
  (println @jyutping))
