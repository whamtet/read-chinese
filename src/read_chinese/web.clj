(ns read-chinese.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [routes.index :as index]
            [ring.util.response :as response]
            [read-chinese.translate :as translate]
            ))

(import java.io.File)

(defn pr-response [x]
  (response/response (pr-str x)))

(defonce recent-texts (atom {}))

(def slurp-resource #(slurp (clojure.java.io/resource %)))

#_(defn reference-files []
  (for [f (file-seq (File. "resources/reference"))
        :when (.isFile f)]
    (.getName f)))

(defn reference-files []
  (seq (.split (slurp-resource "resource-list.txt") "\n")))

(defroutes app
  (GET "/" []
       (index/blank-page "root" {"recent_texts" (pr-str (keys @recent-texts))
                                 "reference_texts" (pr-str (reference-files))
                                 }))
  (ANY "/translate" [file-selector text title jyutping]
       (let [
             {:keys [size tempfile]} file-selector
             text (if text (.trim text))
             to-translate
             (cond
              (and size (not= 0 size)) (slurp tempfile)
              (not-empty text) text
              :default (slurp "resources/sample.txt"))
             jyutping? (= "true" jyutping)
             phrases (translate/translate2 to-translate jyutping?)
             title (if (and title (not= "" (.trim title)))
                     title
                     "<blank>")
             ]
         (if (or (and size (not= 0 size)) (not-empty text))
           (swap! recent-texts assoc title phrases))
         (index/blank-page "translate"
                           {"phrases" (pr-str phrases)})))
  (ANY "/recent" [k]
       (if-let [phrases (@recent-texts k)]
         (index/blank-page "translate"
                           {"phrases" (pr-str phrases)})
         (response/redirect "/")))
  (ANY "/reference" [k jyutping]
       (index/blank-page "translate"
                         {"phrases"
                          (slurp (str "resources/translated/" k))
                          #_(pr-str (translate/translate2
                                             (slurp-resource (str "reference/" k))
                                             (= "true" jyutping)
                                             ))}))
  (ANY "/jyutping" []
       (index/blank-page "jyutping"
                         {"m" (pr-str translate/jyutping-map)}))
  (route/resources "/")
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(defn wrap-error-page [handler]
  (fn [req]
    (try (handler req)
      (catch Exception e
        {:status 500
         :headers {"Content-Type" "text/html"}
         :body (slurp (io/resource "500.html"))}))))

(defonce store (cookie/cookie-store))

(defn wrap-app [app]
  (-> app
      ((if (env :production)
         wrap-error-page
         trace/wrap-stacktrace))
      (site {:session {:store store}})))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 5000))]
    (jetty/run-jetty (wrap-app #'app) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
;; (def server (-main))
