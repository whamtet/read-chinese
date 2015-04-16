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

(defn content []
  [:div
   "Select File to Translate, Paste or " [:a {:href "/translate"} "Example"][:br][:br]
   [:form {
           :id "selector-form"
           :action "/translate"
           :method "POST"
           :enc-type "multipart/form-data"
           }
    "Title " [:input {:type "text" :name "title"}][:br][:br]
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
   (for [text @recent-texts]
     ^{:key text}
     [:div [:a {:href (core/url "/recent" {"k" text})} text]])
   ])

   (defn main []
     (core/page2 content))
