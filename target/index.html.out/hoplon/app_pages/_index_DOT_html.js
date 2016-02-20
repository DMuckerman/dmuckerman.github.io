// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.add_initfn_BANG_.call(null,(function (){
return cljs.core.println.call(null,retina);
}));
hoplon.app_pages._index_DOT_html.mac = "imessage:danielmuckerman@me.com";
hoplon.app_pages._index_DOT_html.iphone = "sms:danielmuckerman@me.com";
hoplon.app_pages._index_DOT_html.applink = (function hoplon$app_pages$_index_DOT_html$applink(){
var iOS = cljs.core.re_find.call(null,/(iPad|iPhone|iPod)/,eval("navigator.userAgent"));
var OSX = cljs.core.re_find.call(null,/(Macintosh)/,eval("navigator.userAgent"));
if(cljs.core.truth_(iOS)){
return window.location = hoplon.app_pages._index_DOT_html.iphone;
} else {
if(cljs.core.truth_(OSX)){
return window.location = hoplon.app_pages._index_DOT_html.mac;
} else {
return alert("Sorry, this option only works on iOS 5.0+ and OSX 10.8+!\nIf you want to contact me, try email!");
}
}
});
hoplon.app_pages._index_DOT_html.appleCheck = (function hoplon$app_pages$_index_DOT_html$appleCheck(){
var iOS = cljs.core.re_find.call(null,/(iPad|iPhone|iPod)/,eval("navigator.userAgent"));
var OSX = cljs.core.re_find.call(null,/(Macintosh)/,eval("navigator.userAgent"));
if((cljs.core.not.call(null,iOS)) && (cljs.core.not.call(null,OSX))){
return dommy.core.set_attr_BANG_.call(null,document.getElementById("imessage"),new cljs.core.Keyword(null,"hidden","hidden",-312506092));
} else {
return null;
}
});
window.onload = hoplon.app_pages._index_DOT_html.appleCheck;
hoplon.core.html.call(null,hoplon.core.head.call(null,hoplon.core.title.call(null,"Daniel Muckerman"),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"description",new cljs.core.Keyword(null,"content","content",15833224),"Computer Science major, nerd, otaku."),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"keywords",new cljs.core.Keyword(null,"content","content",15833224),"Computer Science ,CS, nerd, otaku, App, Mac, Emacs"),hoplon.core.html_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177),"viewport",new cljs.core.Keyword(null,"content","content",15833224),"width-450, maximum-scale=1"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"rel","rel",1378823488),"shortcut icon",new cljs.core.Keyword(null,"href","href",-793805698),"favicon.ico?289349832"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"style.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"css-tooltips.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"animate.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"social/style.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"),hoplon.core.link.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"http://fonts.googleapis.com/css?family=Dancing+Script:400,700",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet")),hoplon.core.body.call(null,hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"wrap",hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"contain",hoplon.core.div.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"animated fadeIn",new cljs.core.Keyword(null,"id","id",-1388402092),"content",hoplon.core.div.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"header",hoplon.core.h1.call(null,"Daniel"),hoplon.core.p.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),"intro",document.createTextNode("Hi, I'm Daniel Muckerman. I'm a Computer Science major at "),hoplon.core.a.call(null,new cljs.core.Keyword(null,"href","href",-793805698),"http://www.ycp.edu",new cljs.core.Keyword(null,"class","class",-2030961996),"link","York College of Pennsylvania"),document.createTextNode(".")),hoplon.core.p.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),"animated fadeInUp",new cljs.core.Keyword(null,"id","id",-1388402092),"networks",hoplon.core.a.call(null,new cljs.core.Keyword(null,"data-tip","data-tip",-581061709),"Twitter",new cljs.core.Keyword(null,"href","href",-793805698),"http://twitter.com/flamwenco",new cljs.core.Keyword(null,"class","class",-2030961996),"twitter","\uE003"),hoplon.core.a.call(null,new cljs.core.Keyword(null,"data-tip","data-tip",-581061709),"Github",new cljs.core.Keyword(null,"href","href",-793805698),"http://github.com/dmuckerman",new cljs.core.Keyword(null,"class","class",-2030961996),"github","\uE601"),hoplon.core.a.call(null,new cljs.core.Keyword(null,"data-tip","data-tip",-581061709),"iMessage",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"click","click",1912301393),hoplon.app_pages._index_DOT_html.applink,new cljs.core.Keyword(null,"id","id",-1388402092),"imessage",new cljs.core.Keyword(null,"class","class",-2030961996),"imessage","\uE603"),hoplon.core.a.call(null,new cljs.core.Keyword(null,"data-tip","data-tip",-581061709),"Email",new cljs.core.Keyword(null,"href","href",-793805698),"mailto:danielmuckerman@me.com",new cljs.core.Keyword(null,"class","class",-2030961996),"mail","\uE030"))))))));

//# sourceMappingURL=_index_DOT_html.js.map