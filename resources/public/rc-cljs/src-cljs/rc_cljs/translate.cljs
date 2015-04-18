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
(def definition-input (atom ""))
(def alphabetic? (atom false))
(def sorted-phrases (atom nil))

(defn advance-char
  "advance char if matches"
  []
  (when (and
         (= @input (first (nth (seq @phrases) @phrase-i)))
         (< @phrase-i (dec (count @phrases))))
    (swap! phrase-i inc)
    (reset! input "")
    ))

(defn advance-definition
  "advance char if at least one definition matches"
  [translations]
  (when (and
         ((set (map #(.toLowerCase %) translations)) @definition-input)
         (< @phrase-i (dec (count @phrases))))
    (swap! phrase-i inc)
    (reset! definition-input "")))

(defn main-pane
  "pane that shows or takes user input"
  []
  (let [
        l (if @alphabetic? @sorted-phrases @phrases)
        [char [pinyin translations]] (nth (seq l) @phrase-i)
        ]
    [:table
     [:tbody
      [:tr
       [:td
        [:table
         [:tbody
          [:tr [:td pinyin]]
          [:tr
           (if (not= @mode "characters")
             [:td {:style {:font-size "3em"}} char]
             [:td
              [:input {:type "text"
                       :value @input
                       :on-change #(reset! input (-> % .-target .-value))}][:br][:br]
              [:input {:type "button"
                       :value "Next"
                       :on-click advance-char}]])]]]]]
      [:td
       (if (not= @mode "definitions")
         [:table
          [:tbody
           (for [translation translations]
             ^{:key (str "translation row" translation)}
             [:tr [:td translation]])]]
         [:div
          [:input {:type "text"
                   :value @definition-input
                   :on-change #(reset! definition-input (-> % .-target .-value))}][:br][:br]
          [:input {:type "button"
                   :value "Next"
                   :on-click #(advance-definition translations)}]
          ])]]]))

(defn mode-pane []
  [:div
   [:input {:type "radio" :name "mode-selector"
            :checked (= "review" @mode)
            :on-change #(reset! mode "review")}] " Review "
   [:input {:type "radio" :name "mode-selector"
            :checked (= "characters" @mode)
            :on-change #(reset! mode "characters")}] " Characters "
   [:input {:type "radio" :name "mode-selector"
            :checked (= "definitions" @mode)
            :on-change #(reset! mode "definitions")}] " Definitions "
   [:input {:type "checkbox"
            :checked @alphabetic?
            :on-change #(reset! alphabetic? (-> % .-target .-checked))}] " Order? "
   ])

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
           [:tbody
            (map-indexed
             (fn [i [char [pinyin translations]]]
               ^{:key (str pinyin "selector")}
               [:tr [:td
                     [:input {:type "radio" :name "phrase-selector"
                              :checked (= i phrase-i-val)
                              :on-change #(reset! phrase-i i)
                              }] pinyin]])
             (if @alphabetic?
               @sorted-phrases
               @phrases))]]]]
        [:td [main-pane]]]]]]))

(defn main []
  (reset! sorted-phrases (sort-by #(-> % second first) compare @phrases))
  (core/page2 content))
