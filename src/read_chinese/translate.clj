(ns read-chinese.translate
  (:require [clj-http.client :as client]
            clj-http.cookies))

(import java.net.URLEncoder)
(require 'clojure.string)
(import net.sourceforge.pinyin4j.format.HanyuPinyinOutputFormat)
(import net.sourceforge.pinyin4j.PinyinHelper)

;for jyutping
(def jyutping-map
  (into {}
        (for [line (.split (slurp "resources/IdxJyutping.txt") "\n")
              :let [[[a] b] (.split line ":")]
              ]
          [a b])))

(def simplified->trad
  (into {}
        (for [line (.split (slurp "resources/IdxTraditional.txt") "\n")
              :let [
                    [[a b] c] (.split line ":")
                    ]
              :when (not b)
              ]
          [a c])))

(def p #(-> % pr-str println))

(defn han-only
  "removes non-han characters"
  [s]
  (clojure.string/replace s #"[^\p{script=Han}]" ""))

(defn include-split
  "splits s on x, including x at the end of each item"
  [s x]
  (let [
        s (.trim s)
        s (if (.endsWith s x) (apply str (butlast s)) s)
        ]
    (map #(str % x) (.split s x))))

(defn han? [c]
  (re-find #"\p{script=Han}" (str c)))

(def path "https://translate.google.com/translate_a/single?client=t&sl=auto&tl=en&hl=en&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&dt=at&ie=UTF-8&oe=UTF-8&pc=1&otf=1&ssel=0&tsel=0&tk=519404|591318&q=")

(defonce cookie-store
  (try
    (let [cookie-store (clj-http.cookies/cookie-store)]
      (client/get "https://translate.google.com" {:cookie-store cookie-store})
      cookie-store)
  (catch Exception e (println e))))


(defn translate-section
  "hacks google translate"
  [q]
  (let [
        s
        (->
         (client/get (str path (URLEncoder/encode q "UTF8"))
                     {:cookie-store cookie-store})
         :body)]
    (read-string s)))

(defn partition-text
  "partitions into sentences as close as possible to 150 chars in total"
  [q]
  (let [
        sentences (include-split q "。")
        split-sentence (fn [sentence] (map #(apply str %) (partition-all 150 sentence)))
        sentences (mapcat split-sentence sentences); sentences are no longer than 150
        ]
    (loop [
           todo sentences
           latest-word ""
           done []
           ]
      (if-let [sentence (first todo)]
        (let [
              new-word (str latest-word sentence)
              ]
          (if (<= (count new-word) 150)
            (recur (rest todo) new-word done)
            (recur todo "" (conj done latest-word))))
        (if (not-empty latest-word)
          (conj done latest-word)
          done)))))

(def output-format
  (doto (HanyuPinyinOutputFormat.)
    (.setToneType net.sourceforge.pinyin4j.format.HanyuPinyinToneType/WITH_TONE_MARK)
    (.setVCharType net.sourceforge.pinyin4j.format.HanyuPinyinVCharType/WITH_U_UNICODE)))

(defn han->pinyin [^Character c]
  (first
   (PinyinHelper/toHanyuPinyinStringArray
    c output-format)))

(defn parse-resp [d jyutping?]
  (let [
        details (nth d 2)
        ]
    (into {}
          (for [detail details
                :let [
                      char (han-only (first detail))
                      ]
                :when (not-empty char)
                :let [
                      translations (map first (nth detail 2))
                      pinyinizer (if jyutping? jyutping-map han->pinyin)
                      pinyin (apply str (map pinyinizer char))
                      char (if jyutping?
                             (apply str (map #(simplified->trad % %) char))
                             char)
                      ]
                ]
            [char [pinyin translations]]))))

(defn translate
  "takes chinese text and outputs a map of phrases to vectors of [pinyin english-translation]"
  [q jyutping?]
  (apply merge (pmap #(parse-resp (translate-section %) jyutping?) (partition-text q))))

(def translate2 (memoize translate))

(defn translate-f [f]
  (spit
   (str "resources/translated/" f)
   (pr-str
    (translate
     (slurp (str "resources/reference/" f)) true))))

;(translate-f "lesson-10-11-12")
