(ns hoplon.app-pages._index_DOT_html (:require [dommy.core :as dommy :refer-macros [sel sel1]] [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.core :refer [form audio input hgroup do! timeout $text base h1 embed h3 body keygen progress main cite on-page-load object i p nav ruby check-val! a menu blockquote img $comment span track data u dl select html thead del eventsource fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table acronym frame applet html-var add-initfn! pre ul dir replace-child! html-time html-map sup dfn sub mark script big button wbr insert-before! strong li dt frameset td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced article isindex abbr command prerendering? <!-- source output basefont route-cell header datalist tfoot s ins footer title h5 canvas param font div option ensure-kids! summary samp center small style textarea loop-tpl* strike h4 tt head set-attribute! ol details col label rt when-dom h6 link page-load colgroup meter html-meta static-elements text-val! bdo --> b code noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]] [hoplon.core :refer [text elem+ cache-key with-timeout defelem+ static sexp defelem elem def-values with-page-load with-dom loop-tpl with-interval with-init!]]))



(with-init!
  (println js/retina))

;; iMessage fanciness
;; Only works on iOS and Mac, obviously. I hope to later present an alternative here for other platforms.

;; To avoid the "protocol not supported" alert, fail must open another app.
(def mac "imessage:danielmuckerman@me.com")
(def iphone "sms:danielmuckerman@me.com")

;; Launches iMessage when option is clicked
(defn applink []
  (let [iOS (re-find #"(iPad|iPhone|iPod)" (js/eval "navigator.userAgent"))
        OSX (re-find #"(Macintosh)" (js/eval "navigator.userAgent"))]
    (if iOS
      (set! (.-location js/window) iphone)
      (if OSX
        (set! (.-location js/window) mac)
        ;; Safety case, in case an incompatible device exposes the link
        (js/alert "Sorry, this option only works on iOS 5.0+ and OSX 10.8+!\nIf you want to contact me, try email!")))))

;; Ensures iMessage option only shows up on available platforms
(defn appleCheck []
  (let [iOS (re-find #"(iPad|iPhone|iPod)" (js/eval "navigator.userAgent"))
        OSX (re-find #"(Macintosh)" (js/eval "navigator.userAgent"))]
    (if (and (not iOS) (not OSX))
      (-> (sel1 :#imessage)
          (dommy/set-attr! :hidden)))))

(set! (.-onload js/window) appleCheck)

(html
 (head
  (title "Daniel Muckerman")

  ;; SEO
  (html-meta :name "description" :content "Computer Science major, nerd, otaku.")
  (html-meta :name "keywords" :content "Computer Science ,CS, nerd, otaku, App, Mac, Emacs")
  (html-meta :name "viewport" :content "width-450, maximum-scale=1")

  ;; Favicon
  (link :rel "shortcut icon" :href "favicon.ico?289349832")
  
  ;; CSS
  (link :href "style.css" :rel "stylesheet")
  (link :href "css-tooltips.css" :rel "stylesheet")
  (link :href "animate.css" :rel "stylesheet")
  (link :href "social/style.css" :rel "stylesheet")

  ;; Javascript
  

  ;; Fonts
  (link :href "http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700" :rel "stylesheet")
  (link :href "http://fonts.googleapis.com/css?family=Dancing+Script:400,700" :rel "stylesheet"))
 (body
  (div :id "wrap"
       (div :id "contain"
            ;; Hero title
            (div :class "animated fadeIn" :id "content"
                 (div :id "header"
                      (h1 "Daniel")

                      ;; Talk about yourself here
                      (p :id "intro"
                         (text "Hi, I'm Daniel Muckerman. I'm a Computer Science major at ")
                         (a :href "http://www.ycp.edu" :class "link" "York College of Pennsylvania")
                         (text "."))

                      ;; Links
                      (p :class "animated fadeInUp" :id "networks"
                         (a :data-tip "Twitter" :href "http://twitter.com/flamwenco" :class "twitter" "\ue003")
                         (a :data-tip "Github" :href "http://github.com/dmuckerman" :class "github" "\ue601")
                         ;;(a :data-tip "Tumblr" :href "http://dmuckerman.tumblr.com" :class "tumblr" "\ue604")
                         (a :data-tip "iMessage" :href "#" :click applink :id "imessage" :class "imessage" "\ue603")
                         (a :data-tip "Email" :href "mailto:danielmuckerman@me.com" :class "mail" "\ue030"))))))))
