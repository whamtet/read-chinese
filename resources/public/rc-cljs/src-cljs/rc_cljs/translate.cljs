(ns rc-cljs.translate
  (:require
   [rc-cljs.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   ))

(def p #(-> % pr-str println))
(def phrase-i (atom 0))
(def mode (atom "review"))
(def input (atom ""))

(defn advance-char
  "advance char if matches"
  []
  (when (and
       (= @input (first (nth (seq @phrases) @phrase-i)))
       (< @phrase-i (dec (count @phrases))))
    (swap! phrase-i inc)
    (reset! input "")
    ))

(defn main-pane
  "pane that shows or takes user input"
  []
  (let [
        [char [pinyin translations]] (nth (seq @phrases) @phrase-i)
        ]
    [:table
     [:tr
      [:td
       [:table
        [:tr [:td pinyin]]
        [:tr
         (if (= "review" @mode)
           [:td {:style {:font-size "3em"}} char]
           [:td
            [:input {:type "text"
                     :value @input
                     :on-change #(reset! input (-> % .-target .-value))}][:br][:br]
            [:input {:type "button"
                     :value "Next"
                     :on-click advance-char}]])]]]
      [:td
       [:table
        [:tbody
         (for [translation translations]
           ^{:key (str "translation row" translation)}
           [:tr [:td translation]])]]]]]))

(defn mode-pane []
  [:div
   [:input {:type "radio" :name "mode-selector"
            :checked (= "review" @mode)
            :on-change #(reset! mode "review")}] " Review "
   [:input {:type "radio" :name "mode-selector"
            :checked (= "test" @mode)
            :on-change #(reset! mode "test")}] " Test"])

(defn content []
  (let [
        phrase-i-val @phrase-i
        ]
    [:div
     [:table
      [:tbody
       [:tr
        [:td [mode-pane]]
        [:td]]
       [:tr
        [:td
         [:div {:style {:height "450px" :overflow-y "scroll"}}
          [:table
           (map-indexed
            (fn [i [char [pinyin translations]]]
              ^{:key (str pinyin "selector")}
              [:tr [:td
                    [:input {:type "radio" :name "phrase-selector"
                             :checked (= i phrase-i-val)
                             :on-change #(reset! phrase-i i)
                             }] pinyin]]) @phrases)]]]
        [:td [main-pane]]]]]]))

(defn main []
  (core/page2 content))
