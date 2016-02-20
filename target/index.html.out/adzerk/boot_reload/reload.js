// Compiled by ClojureScript 1.7.228 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9628_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9628_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9633 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9634 = null;
var count__9635 = (0);
var i__9636 = (0);
while(true){
if((i__9636 < count__9635)){
var s = cljs.core._nth.call(null,chunk__9634,i__9636);
var temp__4425__auto___9637 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9637)){
var sheet_9638 = temp__4425__auto___9637;
var temp__4425__auto___9639__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9638.href,changed);
if(cljs.core.truth_(temp__4425__auto___9639__$1)){
var href_uri_9640 = temp__4425__auto___9639__$1;
sheet_9638.ownerNode.href = href_uri_9640.makeUnique().toString();
} else {
}
} else {
}

var G__9641 = seq__9633;
var G__9642 = chunk__9634;
var G__9643 = count__9635;
var G__9644 = (i__9636 + (1));
seq__9633 = G__9641;
chunk__9634 = G__9642;
count__9635 = G__9643;
i__9636 = G__9644;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9633);
if(temp__4425__auto__){
var seq__9633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9633__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9633__$1);
var G__9645 = cljs.core.chunk_rest.call(null,seq__9633__$1);
var G__9646 = c__7258__auto__;
var G__9647 = cljs.core.count.call(null,c__7258__auto__);
var G__9648 = (0);
seq__9633 = G__9645;
chunk__9634 = G__9646;
count__9635 = G__9647;
i__9636 = G__9648;
continue;
} else {
var s = cljs.core.first.call(null,seq__9633__$1);
var temp__4425__auto___9649__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9649__$1)){
var sheet_9650 = temp__4425__auto___9649__$1;
var temp__4425__auto___9651__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9650.href,changed);
if(cljs.core.truth_(temp__4425__auto___9651__$2)){
var href_uri_9652 = temp__4425__auto___9651__$2;
sheet_9650.ownerNode.href = href_uri_9652.makeUnique().toString();
} else {
}
} else {
}

var G__9653 = cljs.core.next.call(null,seq__9633__$1);
var G__9654 = null;
var G__9655 = (0);
var G__9656 = (0);
seq__9633 = G__9653;
chunk__9634 = G__9654;
count__9635 = G__9655;
i__9636 = G__9656;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9661 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9662 = null;
var count__9663 = (0);
var i__9664 = (0);
while(true){
if((i__9664 < count__9663)){
var s = cljs.core._nth.call(null,chunk__9662,i__9664);
var temp__4425__auto___9665 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9665)){
var image_9666 = temp__4425__auto___9665;
var temp__4425__auto___9667__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9666.src,changed);
if(cljs.core.truth_(temp__4425__auto___9667__$1)){
var href_uri_9668 = temp__4425__auto___9667__$1;
image_9666.src = href_uri_9668.makeUnique().toString();
} else {
}
} else {
}

var G__9669 = seq__9661;
var G__9670 = chunk__9662;
var G__9671 = count__9663;
var G__9672 = (i__9664 + (1));
seq__9661 = G__9669;
chunk__9662 = G__9670;
count__9663 = G__9671;
i__9664 = G__9672;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9661);
if(temp__4425__auto__){
var seq__9661__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9661__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9661__$1);
var G__9673 = cljs.core.chunk_rest.call(null,seq__9661__$1);
var G__9674 = c__7258__auto__;
var G__9675 = cljs.core.count.call(null,c__7258__auto__);
var G__9676 = (0);
seq__9661 = G__9673;
chunk__9662 = G__9674;
count__9663 = G__9675;
i__9664 = G__9676;
continue;
} else {
var s = cljs.core.first.call(null,seq__9661__$1);
var temp__4425__auto___9677__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9677__$1)){
var image_9678 = temp__4425__auto___9677__$1;
var temp__4425__auto___9679__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9678.src,changed);
if(cljs.core.truth_(temp__4425__auto___9679__$2)){
var href_uri_9680 = temp__4425__auto___9679__$2;
image_9678.src = href_uri_9680.makeUnique().toString();
} else {
}
} else {
}

var G__9681 = cljs.core.next.call(null,seq__9661__$1);
var G__9682 = null;
var G__9683 = (0);
var G__9684 = (0);
seq__9661 = G__9681;
chunk__9662 = G__9682;
count__9663 = G__9683;
i__9664 = G__9684;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9687){
var map__9690 = p__9687;
var map__9690__$1 = ((((!((map__9690 == null)))?((((map__9690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9690):map__9690);
var on_jsload = cljs.core.get.call(null,map__9690__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9690,map__9690__$1,on_jsload){
return (function (p1__9685_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9685_SHARP_,".js");
});})(map__9690,map__9690__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9690,map__9690__$1,on_jsload){
return (function (p1__9686_SHARP_){
return goog.Uri.parse(p1__9686_SHARP_).makeUnique();
});})(js_files,map__9690,map__9690__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9690,map__9690__$1,on_jsload){
return (function() { 
var G__9692__delegate = function (_){
return on_jsload.call(null);
};
var G__9692 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9693__i = 0, G__9693__a = new Array(arguments.length -  0);
while (G__9693__i < G__9693__a.length) {G__9693__a[G__9693__i] = arguments[G__9693__i + 0]; ++G__9693__i;}
  _ = new cljs.core.IndexedSeq(G__9693__a,0);
} 
return G__9692__delegate.call(this,_);};
G__9692.cljs$lang$maxFixedArity = 0;
G__9692.cljs$lang$applyTo = (function (arglist__9694){
var _ = cljs.core.seq(arglist__9694);
return G__9692__delegate(_);
});
G__9692.cljs$core$IFn$_invoke$arity$variadic = G__9692__delegate;
return G__9692;
})()
;})(js_files,map__9690,map__9690__$1,on_jsload))
,((function (js_files,map__9690,map__9690__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9690,map__9690__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9699_9703 = cljs.core.seq.call(null,things_to_log);
var chunk__9700_9704 = null;
var count__9701_9705 = (0);
var i__9702_9706 = (0);
while(true){
if((i__9702_9706 < count__9701_9705)){
var t_9707 = cljs.core._nth.call(null,chunk__9700_9704,i__9702_9706);
console.log(t_9707);

var G__9708 = seq__9699_9703;
var G__9709 = chunk__9700_9704;
var G__9710 = count__9701_9705;
var G__9711 = (i__9702_9706 + (1));
seq__9699_9703 = G__9708;
chunk__9700_9704 = G__9709;
count__9701_9705 = G__9710;
i__9702_9706 = G__9711;
continue;
} else {
var temp__4425__auto___9712 = cljs.core.seq.call(null,seq__9699_9703);
if(temp__4425__auto___9712){
var seq__9699_9713__$1 = temp__4425__auto___9712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9699_9713__$1)){
var c__7258__auto___9714 = cljs.core.chunk_first.call(null,seq__9699_9713__$1);
var G__9715 = cljs.core.chunk_rest.call(null,seq__9699_9713__$1);
var G__9716 = c__7258__auto___9714;
var G__9717 = cljs.core.count.call(null,c__7258__auto___9714);
var G__9718 = (0);
seq__9699_9703 = G__9715;
chunk__9700_9704 = G__9716;
count__9701_9705 = G__9717;
i__9702_9706 = G__9718;
continue;
} else {
var t_9719 = cljs.core.first.call(null,seq__9699_9713__$1);
console.log(t_9719);

var G__9720 = cljs.core.next.call(null,seq__9699_9713__$1);
var G__9721 = null;
var G__9722 = (0);
var G__9723 = (0);
seq__9699_9703 = G__9720;
chunk__9700_9704 = G__9721;
count__9701_9705 = G__9722;
i__9702_9706 = G__9723;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__9724_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__9724_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__9726 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__9726);

adzerk.boot_reload.reload.reload_css.call(null,G__9726);

adzerk.boot_reload.reload.reload_img.call(null,G__9726);

return G__9726;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map