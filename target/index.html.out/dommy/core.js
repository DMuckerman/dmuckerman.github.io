// Compiled by ClojureScript 1.7.228 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__6455__auto__ = elem.textContent;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args8838 = [];
var len__7513__auto___8841 = arguments.length;
var i__7514__auto___8842 = (0);
while(true){
if((i__7514__auto___8842 < len__7513__auto___8841)){
args8838.push((arguments[i__7514__auto___8842]));

var G__8843 = (i__7514__auto___8842 + (1));
i__7514__auto___8842 = G__8843;
continue;
} else {
}
break;
}

var G__8840 = args8838.length;
switch (G__8840) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8838.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;
dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto__ = elem.classList;
if(cljs.core.truth_(temp__4423__auto__)){
var class_list = temp__4423__auto__;
return class_list.contains(c__$1);
} else {
var temp__4425__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4425__auto__)){
var class_name = temp__4425__auto__;
var temp__4425__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4425__auto____$1)){
var i = temp__4425__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args8845 = [];
var len__7513__auto___8848 = arguments.length;
var i__7514__auto___8849 = (0);
while(true){
if((i__7514__auto___8849 < len__7513__auto___8848)){
args8845.push((arguments[i__7514__auto___8849]));

var G__8850 = (i__7514__auto___8849 + (1));
i__7514__auto___8849 = G__8850;
continue;
} else {
}
break;
}

var G__8847 = args8845.length;
switch (G__8847) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8845.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;
/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args8853 = [];
var len__7513__auto___8856 = arguments.length;
var i__7514__auto___8857 = (0);
while(true){
if((i__7514__auto___8857 < len__7513__auto___8856)){
args8853.push((arguments[i__7514__auto___8857]));

var G__8858 = (i__7514__auto___8857 + (1));
i__7514__auto___8857 = G__8858;
continue;
} else {
}
break;
}

var G__8855 = args8853.length;
switch (G__8855) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8853.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__8852_SHARP_){
return !((p1__8852_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;
/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8868 = arguments.length;
var i__7514__auto___8869 = (0);
while(true){
if((i__7514__auto___8869 < len__7513__auto___8868)){
args__7520__auto__.push((arguments[i__7514__auto___8869]));

var G__8870 = (i__7514__auto___8869 + (1));
i__7514__auto___8869 = G__8870;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var style = elem.style;
var seq__8862_8871 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8863_8872 = null;
var count__8864_8873 = (0);
var i__8865_8874 = (0);
while(true){
if((i__8865_8874 < count__8864_8873)){
var vec__8866_8875 = cljs.core._nth.call(null,chunk__8863_8872,i__8865_8874);
var k_8876 = cljs.core.nth.call(null,vec__8866_8875,(0),null);
var v_8877 = cljs.core.nth.call(null,vec__8866_8875,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_8876),v_8877);

var G__8878 = seq__8862_8871;
var G__8879 = chunk__8863_8872;
var G__8880 = count__8864_8873;
var G__8881 = (i__8865_8874 + (1));
seq__8862_8871 = G__8878;
chunk__8863_8872 = G__8879;
count__8864_8873 = G__8880;
i__8865_8874 = G__8881;
continue;
} else {
var temp__4425__auto___8882 = cljs.core.seq.call(null,seq__8862_8871);
if(temp__4425__auto___8882){
var seq__8862_8883__$1 = temp__4425__auto___8882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8862_8883__$1)){
var c__7258__auto___8884 = cljs.core.chunk_first.call(null,seq__8862_8883__$1);
var G__8885 = cljs.core.chunk_rest.call(null,seq__8862_8883__$1);
var G__8886 = c__7258__auto___8884;
var G__8887 = cljs.core.count.call(null,c__7258__auto___8884);
var G__8888 = (0);
seq__8862_8871 = G__8885;
chunk__8863_8872 = G__8886;
count__8864_8873 = G__8887;
i__8865_8874 = G__8888;
continue;
} else {
var vec__8867_8889 = cljs.core.first.call(null,seq__8862_8883__$1);
var k_8890 = cljs.core.nth.call(null,vec__8867_8889,(0),null);
var v_8891 = cljs.core.nth.call(null,vec__8867_8889,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_8890),v_8891);

var G__8892 = cljs.core.next.call(null,seq__8862_8883__$1);
var G__8893 = null;
var G__8894 = (0);
var G__8895 = (0);
seq__8862_8871 = G__8892;
chunk__8863_8872 = G__8893;
count__8864_8873 = G__8894;
i__8865_8874 = G__8895;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8860){
var G__8861 = cljs.core.first.call(null,seq8860);
var seq8860__$1 = cljs.core.next.call(null,seq8860);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8861,seq8860__$1);
});
/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8902 = arguments.length;
var i__7514__auto___8903 = (0);
while(true){
if((i__7514__auto___8903 < len__7513__auto___8902)){
args__7520__auto__.push((arguments[i__7514__auto___8903]));

var G__8904 = (i__7514__auto___8903 + (1));
i__7514__auto___8903 = G__8904;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__8898_8905 = cljs.core.seq.call(null,keywords);
var chunk__8899_8906 = null;
var count__8900_8907 = (0);
var i__8901_8908 = (0);
while(true){
if((i__8901_8908 < count__8900_8907)){
var kw_8909 = cljs.core._nth.call(null,chunk__8899_8906,i__8901_8908);
style.removeProperty(dommy.utils.as_str.call(null,kw_8909));

var G__8910 = seq__8898_8905;
var G__8911 = chunk__8899_8906;
var G__8912 = count__8900_8907;
var G__8913 = (i__8901_8908 + (1));
seq__8898_8905 = G__8910;
chunk__8899_8906 = G__8911;
count__8900_8907 = G__8912;
i__8901_8908 = G__8913;
continue;
} else {
var temp__4425__auto___8914 = cljs.core.seq.call(null,seq__8898_8905);
if(temp__4425__auto___8914){
var seq__8898_8915__$1 = temp__4425__auto___8914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8898_8915__$1)){
var c__7258__auto___8916 = cljs.core.chunk_first.call(null,seq__8898_8915__$1);
var G__8917 = cljs.core.chunk_rest.call(null,seq__8898_8915__$1);
var G__8918 = c__7258__auto___8916;
var G__8919 = cljs.core.count.call(null,c__7258__auto___8916);
var G__8920 = (0);
seq__8898_8905 = G__8917;
chunk__8899_8906 = G__8918;
count__8900_8907 = G__8919;
i__8901_8908 = G__8920;
continue;
} else {
var kw_8921 = cljs.core.first.call(null,seq__8898_8915__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_8921));

var G__8922 = cljs.core.next.call(null,seq__8898_8915__$1);
var G__8923 = null;
var G__8924 = (0);
var G__8925 = (0);
seq__8898_8905 = G__8922;
chunk__8899_8906 = G__8923;
count__8900_8907 = G__8924;
i__8901_8908 = G__8925;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq8896){
var G__8897 = cljs.core.first.call(null,seq8896);
var seq8896__$1 = cljs.core.next.call(null,seq8896);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8897,seq8896__$1);
});
dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8934 = arguments.length;
var i__7514__auto___8935 = (0);
while(true){
if((i__7514__auto___8935 < len__7513__auto___8934)){
args__7520__auto__.push((arguments[i__7514__auto___8935]));

var G__8936 = (i__7514__auto___8935 + (1));
i__7514__auto___8935 = G__8936;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__8928_8937 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__8929_8938 = null;
var count__8930_8939 = (0);
var i__8931_8940 = (0);
while(true){
if((i__8931_8940 < count__8930_8939)){
var vec__8932_8941 = cljs.core._nth.call(null,chunk__8929_8938,i__8931_8940);
var k_8942 = cljs.core.nth.call(null,vec__8932_8941,(0),null);
var v_8943 = cljs.core.nth.call(null,vec__8932_8941,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_8942,[cljs.core.str(v_8943),cljs.core.str("px")].join(''));

var G__8944 = seq__8928_8937;
var G__8945 = chunk__8929_8938;
var G__8946 = count__8930_8939;
var G__8947 = (i__8931_8940 + (1));
seq__8928_8937 = G__8944;
chunk__8929_8938 = G__8945;
count__8930_8939 = G__8946;
i__8931_8940 = G__8947;
continue;
} else {
var temp__4425__auto___8948 = cljs.core.seq.call(null,seq__8928_8937);
if(temp__4425__auto___8948){
var seq__8928_8949__$1 = temp__4425__auto___8948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8928_8949__$1)){
var c__7258__auto___8950 = cljs.core.chunk_first.call(null,seq__8928_8949__$1);
var G__8951 = cljs.core.chunk_rest.call(null,seq__8928_8949__$1);
var G__8952 = c__7258__auto___8950;
var G__8953 = cljs.core.count.call(null,c__7258__auto___8950);
var G__8954 = (0);
seq__8928_8937 = G__8951;
chunk__8929_8938 = G__8952;
count__8930_8939 = G__8953;
i__8931_8940 = G__8954;
continue;
} else {
var vec__8933_8955 = cljs.core.first.call(null,seq__8928_8949__$1);
var k_8956 = cljs.core.nth.call(null,vec__8933_8955,(0),null);
var v_8957 = cljs.core.nth.call(null,vec__8933_8955,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_8956,[cljs.core.str(v_8957),cljs.core.str("px")].join(''));

var G__8958 = cljs.core.next.call(null,seq__8928_8949__$1);
var G__8959 = null;
var G__8960 = (0);
var G__8961 = (0);
seq__8928_8937 = G__8958;
chunk__8929_8938 = G__8959;
count__8930_8939 = G__8960;
i__8931_8940 = G__8961;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq8926){
var G__8927 = cljs.core.first.call(null,seq8926);
var seq8926__$1 = cljs.core.next.call(null,seq8926);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8927,seq8926__$1);
});
/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args8962 = [];
var len__7513__auto___8977 = arguments.length;
var i__7514__auto___8978 = (0);
while(true){
if((i__7514__auto___8978 < len__7513__auto___8977)){
args8962.push((arguments[i__7514__auto___8978]));

var G__8979 = (i__7514__auto___8978 + (1));
i__7514__auto___8978 = G__8979;
continue;
} else {
}
break;
}

var G__8968 = args8962.length;
switch (G__8968) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args8962.slice((3)),(0)));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7532__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__8969 = elem;
(G__8969[k__$1] = v);

return G__8969;
} else {
var G__8970 = elem;
G__8970.setAttribute(k__$1,v);

return G__8970;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

var seq__8971_8981 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__8972_8982 = null;
var count__8973_8983 = (0);
var i__8974_8984 = (0);
while(true){
if((i__8974_8984 < count__8973_8983)){
var vec__8975_8985 = cljs.core._nth.call(null,chunk__8972_8982,i__8974_8984);
var k_8986__$1 = cljs.core.nth.call(null,vec__8975_8985,(0),null);
var v_8987__$1 = cljs.core.nth.call(null,vec__8975_8985,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_8986__$1,v_8987__$1);

var G__8988 = seq__8971_8981;
var G__8989 = chunk__8972_8982;
var G__8990 = count__8973_8983;
var G__8991 = (i__8974_8984 + (1));
seq__8971_8981 = G__8988;
chunk__8972_8982 = G__8989;
count__8973_8983 = G__8990;
i__8974_8984 = G__8991;
continue;
} else {
var temp__4425__auto___8992 = cljs.core.seq.call(null,seq__8971_8981);
if(temp__4425__auto___8992){
var seq__8971_8993__$1 = temp__4425__auto___8992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8971_8993__$1)){
var c__7258__auto___8994 = cljs.core.chunk_first.call(null,seq__8971_8993__$1);
var G__8995 = cljs.core.chunk_rest.call(null,seq__8971_8993__$1);
var G__8996 = c__7258__auto___8994;
var G__8997 = cljs.core.count.call(null,c__7258__auto___8994);
var G__8998 = (0);
seq__8971_8981 = G__8995;
chunk__8972_8982 = G__8996;
count__8973_8983 = G__8997;
i__8974_8984 = G__8998;
continue;
} else {
var vec__8976_8999 = cljs.core.first.call(null,seq__8971_8993__$1);
var k_9000__$1 = cljs.core.nth.call(null,vec__8976_8999,(0),null);
var v_9001__$1 = cljs.core.nth.call(null,vec__8976_8999,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_9000__$1,v_9001__$1);

var G__9002 = cljs.core.next.call(null,seq__8971_8993__$1);
var G__9003 = null;
var G__9004 = (0);
var G__9005 = (0);
seq__8971_8981 = G__9002;
chunk__8972_8982 = G__9003;
count__8973_8983 = G__9004;
i__8974_8984 = G__9005;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq8963){
var G__8964 = cljs.core.first.call(null,seq8963);
var seq8963__$1 = cljs.core.next.call(null,seq8963);
var G__8965 = cljs.core.first.call(null,seq8963__$1);
var seq8963__$2 = cljs.core.next.call(null,seq8963__$1);
var G__8966 = cljs.core.first.call(null,seq8963__$2);
var seq8963__$3 = cljs.core.next.call(null,seq8963__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8964,G__8965,G__8966,seq8963__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args9006 = [];
var len__7513__auto___9016 = arguments.length;
var i__7514__auto___9017 = (0);
while(true){
if((i__7514__auto___9017 < len__7513__auto___9016)){
args9006.push((arguments[i__7514__auto___9017]));

var G__9018 = (i__7514__auto___9017 + (1));
i__7514__auto___9017 = G__9018;
continue;
} else {
}
break;
}

var G__9011 = args9006.length;
switch (G__9011) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args9006.slice((2)),(0)));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_9020__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_9020__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_9020__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__9012_9021 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__9013_9022 = null;
var count__9014_9023 = (0);
var i__9015_9024 = (0);
while(true){
if((i__9015_9024 < count__9014_9023)){
var k_9025__$1 = cljs.core._nth.call(null,chunk__9013_9022,i__9015_9024);
dommy.core.remove_attr_BANG_.call(null,elem,k_9025__$1);

var G__9026 = seq__9012_9021;
var G__9027 = chunk__9013_9022;
var G__9028 = count__9014_9023;
var G__9029 = (i__9015_9024 + (1));
seq__9012_9021 = G__9026;
chunk__9013_9022 = G__9027;
count__9014_9023 = G__9028;
i__9015_9024 = G__9029;
continue;
} else {
var temp__4425__auto___9030 = cljs.core.seq.call(null,seq__9012_9021);
if(temp__4425__auto___9030){
var seq__9012_9031__$1 = temp__4425__auto___9030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9012_9031__$1)){
var c__7258__auto___9032 = cljs.core.chunk_first.call(null,seq__9012_9031__$1);
var G__9033 = cljs.core.chunk_rest.call(null,seq__9012_9031__$1);
var G__9034 = c__7258__auto___9032;
var G__9035 = cljs.core.count.call(null,c__7258__auto___9032);
var G__9036 = (0);
seq__9012_9021 = G__9033;
chunk__9013_9022 = G__9034;
count__9014_9023 = G__9035;
i__9015_9024 = G__9036;
continue;
} else {
var k_9037__$1 = cljs.core.first.call(null,seq__9012_9031__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_9037__$1);

var G__9038 = cljs.core.next.call(null,seq__9012_9031__$1);
var G__9039 = null;
var G__9040 = (0);
var G__9041 = (0);
seq__9012_9021 = G__9038;
chunk__9013_9022 = G__9039;
count__9014_9023 = G__9040;
i__9015_9024 = G__9041;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq9007){
var G__9008 = cljs.core.first.call(null,seq9007);
var seq9007__$1 = cljs.core.next.call(null,seq9007);
var G__9009 = cljs.core.first.call(null,seq9007__$1);
var seq9007__$2 = cljs.core.next.call(null,seq9007__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9008,G__9009,seq9007__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args9042 = [];
var len__7513__auto___9045 = arguments.length;
var i__7514__auto___9046 = (0);
while(true){
if((i__7514__auto___9046 < len__7513__auto___9045)){
args9042.push((arguments[i__7514__auto___9046]));

var G__9047 = (i__7514__auto___9046 + (1));
i__7514__auto___9046 = G__9047;
continue;
} else {
}
break;
}

var G__9044 = args9042.length;
switch (G__9044) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9042.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args9049 = [];
var len__7513__auto___9067 = arguments.length;
var i__7514__auto___9068 = (0);
while(true){
if((i__7514__auto___9068 < len__7513__auto___9067)){
args9049.push((arguments[i__7514__auto___9068]));

var G__9069 = (i__7514__auto___9068 + (1));
i__7514__auto___9068 = G__9069;
continue;
} else {
}
break;
}

var G__9054 = args9049.length;
switch (G__9054) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args9049.slice((2)),(0)));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4423__auto___9071 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___9071)){
var class_list_9072 = temp__4423__auto___9071;
var seq__9055_9073 = cljs.core.seq.call(null,classes__$1);
var chunk__9056_9074 = null;
var count__9057_9075 = (0);
var i__9058_9076 = (0);
while(true){
if((i__9058_9076 < count__9057_9075)){
var c_9077 = cljs.core._nth.call(null,chunk__9056_9074,i__9058_9076);
class_list_9072.add(c_9077);

var G__9078 = seq__9055_9073;
var G__9079 = chunk__9056_9074;
var G__9080 = count__9057_9075;
var G__9081 = (i__9058_9076 + (1));
seq__9055_9073 = G__9078;
chunk__9056_9074 = G__9079;
count__9057_9075 = G__9080;
i__9058_9076 = G__9081;
continue;
} else {
var temp__4425__auto___9082 = cljs.core.seq.call(null,seq__9055_9073);
if(temp__4425__auto___9082){
var seq__9055_9083__$1 = temp__4425__auto___9082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9055_9083__$1)){
var c__7258__auto___9084 = cljs.core.chunk_first.call(null,seq__9055_9083__$1);
var G__9085 = cljs.core.chunk_rest.call(null,seq__9055_9083__$1);
var G__9086 = c__7258__auto___9084;
var G__9087 = cljs.core.count.call(null,c__7258__auto___9084);
var G__9088 = (0);
seq__9055_9073 = G__9085;
chunk__9056_9074 = G__9086;
count__9057_9075 = G__9087;
i__9058_9076 = G__9088;
continue;
} else {
var c_9089 = cljs.core.first.call(null,seq__9055_9083__$1);
class_list_9072.add(c_9089);

var G__9090 = cljs.core.next.call(null,seq__9055_9083__$1);
var G__9091 = null;
var G__9092 = (0);
var G__9093 = (0);
seq__9055_9073 = G__9090;
chunk__9056_9074 = G__9091;
count__9057_9075 = G__9092;
i__9058_9076 = G__9093;
continue;
}
} else {
}
}
break;
}
} else {
var seq__9059_9094 = cljs.core.seq.call(null,classes__$1);
var chunk__9060_9095 = null;
var count__9061_9096 = (0);
var i__9062_9097 = (0);
while(true){
if((i__9062_9097 < count__9061_9096)){
var c_9098 = cljs.core._nth.call(null,chunk__9060_9095,i__9062_9097);
var class_name_9099 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_9099,c_9098))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_9099 === ""))?c_9098:[cljs.core.str(class_name_9099),cljs.core.str(" "),cljs.core.str(c_9098)].join('')));
}

var G__9100 = seq__9059_9094;
var G__9101 = chunk__9060_9095;
var G__9102 = count__9061_9096;
var G__9103 = (i__9062_9097 + (1));
seq__9059_9094 = G__9100;
chunk__9060_9095 = G__9101;
count__9061_9096 = G__9102;
i__9062_9097 = G__9103;
continue;
} else {
var temp__4425__auto___9104 = cljs.core.seq.call(null,seq__9059_9094);
if(temp__4425__auto___9104){
var seq__9059_9105__$1 = temp__4425__auto___9104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9059_9105__$1)){
var c__7258__auto___9106 = cljs.core.chunk_first.call(null,seq__9059_9105__$1);
var G__9107 = cljs.core.chunk_rest.call(null,seq__9059_9105__$1);
var G__9108 = c__7258__auto___9106;
var G__9109 = cljs.core.count.call(null,c__7258__auto___9106);
var G__9110 = (0);
seq__9059_9094 = G__9107;
chunk__9060_9095 = G__9108;
count__9061_9096 = G__9109;
i__9062_9097 = G__9110;
continue;
} else {
var c_9111 = cljs.core.first.call(null,seq__9059_9105__$1);
var class_name_9112 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_9112,c_9111))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_9112 === ""))?c_9111:[cljs.core.str(class_name_9112),cljs.core.str(" "),cljs.core.str(c_9111)].join('')));
}

var G__9113 = cljs.core.next.call(null,seq__9059_9105__$1);
var G__9114 = null;
var G__9115 = (0);
var G__9116 = (0);
seq__9059_9094 = G__9113;
chunk__9060_9095 = G__9114;
count__9061_9096 = G__9115;
i__9062_9097 = G__9116;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__9063_9117 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__9064_9118 = null;
var count__9065_9119 = (0);
var i__9066_9120 = (0);
while(true){
if((i__9066_9120 < count__9065_9119)){
var c_9121 = cljs.core._nth.call(null,chunk__9064_9118,i__9066_9120);
dommy.core.add_class_BANG_.call(null,elem,c_9121);

var G__9122 = seq__9063_9117;
var G__9123 = chunk__9064_9118;
var G__9124 = count__9065_9119;
var G__9125 = (i__9066_9120 + (1));
seq__9063_9117 = G__9122;
chunk__9064_9118 = G__9123;
count__9065_9119 = G__9124;
i__9066_9120 = G__9125;
continue;
} else {
var temp__4425__auto___9126 = cljs.core.seq.call(null,seq__9063_9117);
if(temp__4425__auto___9126){
var seq__9063_9127__$1 = temp__4425__auto___9126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9063_9127__$1)){
var c__7258__auto___9128 = cljs.core.chunk_first.call(null,seq__9063_9127__$1);
var G__9129 = cljs.core.chunk_rest.call(null,seq__9063_9127__$1);
var G__9130 = c__7258__auto___9128;
var G__9131 = cljs.core.count.call(null,c__7258__auto___9128);
var G__9132 = (0);
seq__9063_9117 = G__9129;
chunk__9064_9118 = G__9130;
count__9065_9119 = G__9131;
i__9066_9120 = G__9132;
continue;
} else {
var c_9133 = cljs.core.first.call(null,seq__9063_9127__$1);
dommy.core.add_class_BANG_.call(null,elem,c_9133);

var G__9134 = cljs.core.next.call(null,seq__9063_9127__$1);
var G__9135 = null;
var G__9136 = (0);
var G__9137 = (0);
seq__9063_9117 = G__9134;
chunk__9064_9118 = G__9135;
count__9065_9119 = G__9136;
i__9066_9120 = G__9137;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq9050){
var G__9051 = cljs.core.first.call(null,seq9050);
var seq9050__$1 = cljs.core.next.call(null,seq9050);
var G__9052 = cljs.core.first.call(null,seq9050__$1);
var seq9050__$2 = cljs.core.next.call(null,seq9050__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9051,G__9052,seq9050__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args9138 = [];
var len__7513__auto___9148 = arguments.length;
var i__7514__auto___9149 = (0);
while(true){
if((i__7514__auto___9149 < len__7513__auto___9148)){
args9138.push((arguments[i__7514__auto___9149]));

var G__9150 = (i__7514__auto___9149 + (1));
i__7514__auto___9149 = G__9150;
continue;
} else {
}
break;
}

var G__9143 = args9138.length;
switch (G__9143) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args9138.slice((2)),(0)));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___9152 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___9152)){
var class_list_9153 = temp__4423__auto___9152;
class_list_9153.remove(c__$1);
} else {
var class_name_9154 = dommy.core.class$.call(null,elem);
var new_class_name_9155 = dommy.utils.remove_class_str.call(null,class_name_9154,c__$1);
if((class_name_9154 === new_class_name_9155)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_9155);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__9144 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__9145 = null;
var count__9146 = (0);
var i__9147 = (0);
while(true){
if((i__9147 < count__9146)){
var c = cljs.core._nth.call(null,chunk__9145,i__9147);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__9156 = seq__9144;
var G__9157 = chunk__9145;
var G__9158 = count__9146;
var G__9159 = (i__9147 + (1));
seq__9144 = G__9156;
chunk__9145 = G__9157;
count__9146 = G__9158;
i__9147 = G__9159;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9144);
if(temp__4425__auto__){
var seq__9144__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9144__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__9144__$1);
var G__9160 = cljs.core.chunk_rest.call(null,seq__9144__$1);
var G__9161 = c__7258__auto__;
var G__9162 = cljs.core.count.call(null,c__7258__auto__);
var G__9163 = (0);
seq__9144 = G__9160;
chunk__9145 = G__9161;
count__9146 = G__9162;
i__9147 = G__9163;
continue;
} else {
var c = cljs.core.first.call(null,seq__9144__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__9164 = cljs.core.next.call(null,seq__9144__$1);
var G__9165 = null;
var G__9166 = (0);
var G__9167 = (0);
seq__9144 = G__9164;
chunk__9145 = G__9165;
count__9146 = G__9166;
i__9147 = G__9167;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq9139){
var G__9140 = cljs.core.first.call(null,seq9139);
var seq9139__$1 = cljs.core.next.call(null,seq9139);
var G__9141 = cljs.core.first.call(null,seq9139__$1);
var seq9139__$2 = cljs.core.next.call(null,seq9139__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9140,G__9141,seq9139__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args9168 = [];
var len__7513__auto___9171 = arguments.length;
var i__7514__auto___9172 = (0);
while(true){
if((i__7514__auto___9172 < len__7513__auto___9171)){
args9168.push((arguments[i__7514__auto___9172]));

var G__9173 = (i__7514__auto___9172 + (1));
i__7514__auto___9172 = G__9173;
continue;
} else {
}
break;
}

var G__9170 = args9168.length;
switch (G__9170) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9168.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4423__auto___9175 = elem.classList;
if(cljs.core.truth_(temp__4423__auto___9175)){
var class_list_9176 = temp__4423__auto___9175;
class_list_9176.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args9177 = [];
var len__7513__auto___9180 = arguments.length;
var i__7514__auto___9181 = (0);
while(true){
if((i__7514__auto___9181 < len__7513__auto___9180)){
args9177.push((arguments[i__7514__auto___9181]));

var G__9182 = (i__7514__auto___9181 + (1));
i__7514__auto___9181 = G__9182;
continue;
} else {
}
break;
}

var G__9179 = args9177.length;
switch (G__9179) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9177.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args9184 = [];
var len__7513__auto___9187 = arguments.length;
var i__7514__auto___9188 = (0);
while(true){
if((i__7514__auto___9188 < len__7513__auto___9187)){
args9184.push((arguments[i__7514__auto___9188]));

var G__9189 = (i__7514__auto___9188 + (1));
i__7514__auto___9188 = G__9189;
continue;
} else {
}
break;
}

var G__9186 = args9184.length;
switch (G__9186) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9184.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;
dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args9191 = [];
var len__7513__auto___9202 = arguments.length;
var i__7514__auto___9203 = (0);
while(true){
if((i__7514__auto___9203 < len__7513__auto___9202)){
args9191.push((arguments[i__7514__auto___9203]));

var G__9204 = (i__7514__auto___9203 + (1));
i__7514__auto___9203 = G__9204;
continue;
} else {
}
break;
}

var G__9196 = args9191.length;
switch (G__9196) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args9191.slice((2)),(0)));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9197 = parent;
G__9197.appendChild(child);

return G__9197;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9198_9206 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__9199_9207 = null;
var count__9200_9208 = (0);
var i__9201_9209 = (0);
while(true){
if((i__9201_9209 < count__9200_9208)){
var c_9210 = cljs.core._nth.call(null,chunk__9199_9207,i__9201_9209);
dommy.core.append_BANG_.call(null,parent,c_9210);

var G__9211 = seq__9198_9206;
var G__9212 = chunk__9199_9207;
var G__9213 = count__9200_9208;
var G__9214 = (i__9201_9209 + (1));
seq__9198_9206 = G__9211;
chunk__9199_9207 = G__9212;
count__9200_9208 = G__9213;
i__9201_9209 = G__9214;
continue;
} else {
var temp__4425__auto___9215 = cljs.core.seq.call(null,seq__9198_9206);
if(temp__4425__auto___9215){
var seq__9198_9216__$1 = temp__4425__auto___9215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9198_9216__$1)){
var c__7258__auto___9217 = cljs.core.chunk_first.call(null,seq__9198_9216__$1);
var G__9218 = cljs.core.chunk_rest.call(null,seq__9198_9216__$1);
var G__9219 = c__7258__auto___9217;
var G__9220 = cljs.core.count.call(null,c__7258__auto___9217);
var G__9221 = (0);
seq__9198_9206 = G__9218;
chunk__9199_9207 = G__9219;
count__9200_9208 = G__9220;
i__9201_9209 = G__9221;
continue;
} else {
var c_9222 = cljs.core.first.call(null,seq__9198_9216__$1);
dommy.core.append_BANG_.call(null,parent,c_9222);

var G__9223 = cljs.core.next.call(null,seq__9198_9216__$1);
var G__9224 = null;
var G__9225 = (0);
var G__9226 = (0);
seq__9198_9206 = G__9223;
chunk__9199_9207 = G__9224;
count__9200_9208 = G__9225;
i__9201_9209 = G__9226;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq9192){
var G__9193 = cljs.core.first.call(null,seq9192);
var seq9192__$1 = cljs.core.next.call(null,seq9192);
var G__9194 = cljs.core.first.call(null,seq9192__$1);
var seq9192__$2 = cljs.core.next.call(null,seq9192__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9193,G__9194,seq9192__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args9227 = [];
var len__7513__auto___9238 = arguments.length;
var i__7514__auto___9239 = (0);
while(true){
if((i__7514__auto___9239 < len__7513__auto___9238)){
args9227.push((arguments[i__7514__auto___9239]));

var G__9240 = (i__7514__auto___9239 + (1));
i__7514__auto___9239 = G__9240;
continue;
} else {
}
break;
}

var G__9232 = args9227.length;
switch (G__9232) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args9227.slice((2)),(0)));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7532__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__9233 = parent;
G__9233.insertBefore(child,parent.firstChild);

return G__9233;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__9234_9242 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__9235_9243 = null;
var count__9236_9244 = (0);
var i__9237_9245 = (0);
while(true){
if((i__9237_9245 < count__9236_9244)){
var c_9246 = cljs.core._nth.call(null,chunk__9235_9243,i__9237_9245);
dommy.core.prepend_BANG_.call(null,parent,c_9246);

var G__9247 = seq__9234_9242;
var G__9248 = chunk__9235_9243;
var G__9249 = count__9236_9244;
var G__9250 = (i__9237_9245 + (1));
seq__9234_9242 = G__9247;
chunk__9235_9243 = G__9248;
count__9236_9244 = G__9249;
i__9237_9245 = G__9250;
continue;
} else {
var temp__4425__auto___9251 = cljs.core.seq.call(null,seq__9234_9242);
if(temp__4425__auto___9251){
var seq__9234_9252__$1 = temp__4425__auto___9251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9234_9252__$1)){
var c__7258__auto___9253 = cljs.core.chunk_first.call(null,seq__9234_9252__$1);
var G__9254 = cljs.core.chunk_rest.call(null,seq__9234_9252__$1);
var G__9255 = c__7258__auto___9253;
var G__9256 = cljs.core.count.call(null,c__7258__auto___9253);
var G__9257 = (0);
seq__9234_9242 = G__9254;
chunk__9235_9243 = G__9255;
count__9236_9244 = G__9256;
i__9237_9245 = G__9257;
continue;
} else {
var c_9258 = cljs.core.first.call(null,seq__9234_9252__$1);
dommy.core.prepend_BANG_.call(null,parent,c_9258);

var G__9259 = cljs.core.next.call(null,seq__9234_9252__$1);
var G__9260 = null;
var G__9261 = (0);
var G__9262 = (0);
seq__9234_9242 = G__9259;
chunk__9235_9243 = G__9260;
count__9236_9244 = G__9261;
i__9237_9245 = G__9262;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq9228){
var G__9229 = cljs.core.first.call(null,seq9228);
var seq9228__$1 = cljs.core.next.call(null,seq9228);
var G__9230 = cljs.core.first.call(null,seq9228__$1);
var seq9228__$2 = cljs.core.next.call(null,seq9228__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9229,G__9230,seq9228__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4423__auto___9263 = other.nextSibling;
if(cljs.core.truth_(temp__4423__auto___9263)){
var next_9264 = temp__4423__auto___9263;
dommy.core.insert_before_BANG_.call(null,elem,next_9264);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args9265 = [];
var len__7513__auto___9269 = arguments.length;
var i__7514__auto___9270 = (0);
while(true){
if((i__7514__auto___9270 < len__7513__auto___9269)){
args9265.push((arguments[i__7514__auto___9270]));

var G__9271 = (i__7514__auto___9270 + (1));
i__7514__auto___9270 = G__9271;
continue;
} else {
}
break;
}

var G__9267 = args9265.length;
switch (G__9267) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9265.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null)))].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__9268 = p;
G__9268.removeChild(elem);

return G__9268;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9273){
var vec__9274 = p__9273;
var special_mouse_event = cljs.core.nth.call(null,vec__9274,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__9274,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__9274,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__9274,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__6455__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__6443__auto__ = related_target;
if(cljs.core.truth_(and__6443__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__6443__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__9274,special_mouse_event,real_mouse_event))
});})(vec__9274,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__6443__auto__ = selected_target;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__6443__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__6455__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9278 = arguments.length;
var i__7514__auto___9279 = (0);
while(true){
if((i__7514__auto___9279 < len__7513__auto___9278)){
args__7520__auto__.push((arguments[i__7514__auto___9279]));

var G__9280 = (i__7514__auto___9279 + (1));
i__7514__auto___9279 = G__9280;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((2) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((2)),(0))):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7521__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq9275){
var G__9276 = cljs.core.first.call(null,seq9275);
var seq9275__$1 = cljs.core.next.call(null,seq9275);
var G__9277 = cljs.core.first.call(null,seq9275__$1);
var seq9275__$2 = cljs.core.next.call(null,seq9275__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9276,G__9277,seq9275__$2);
});
dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9306 = arguments.length;
var i__7514__auto___9307 = (0);
while(true){
if((i__7514__auto___9307 < len__7513__auto___9306)){
args__7520__auto__.push((arguments[i__7514__auto___9307]));

var G__9308 = (i__7514__auto___9307 + (1));
i__7514__auto___9307 = G__9308;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__9283_9309 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9310 = cljs.core.nth.call(null,vec__9283_9309,(0),null);
var selector_9311 = cljs.core.nth.call(null,vec__9283_9309,(1),null);
var seq__9284_9312 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9291_9313 = null;
var count__9292_9314 = (0);
var i__9293_9315 = (0);
while(true){
if((i__9293_9315 < count__9292_9314)){
var vec__9300_9316 = cljs.core._nth.call(null,chunk__9291_9313,i__9293_9315);
var orig_type_9317 = cljs.core.nth.call(null,vec__9300_9316,(0),null);
var f_9318 = cljs.core.nth.call(null,vec__9300_9316,(1),null);
var seq__9294_9319 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9317,cljs.core.PersistentArrayMap.fromArray([orig_type_9317,cljs.core.identity], true, false)));
var chunk__9296_9320 = null;
var count__9297_9321 = (0);
var i__9298_9322 = (0);
while(true){
if((i__9298_9322 < count__9297_9321)){
var vec__9301_9323 = cljs.core._nth.call(null,chunk__9296_9320,i__9298_9322);
var actual_type_9324 = cljs.core.nth.call(null,vec__9301_9323,(0),null);
var factory_9325 = cljs.core.nth.call(null,vec__9301_9323,(1),null);
var canonical_f_9326 = (cljs.core.truth_(selector_9311)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9310,selector_9311):cljs.core.identity).call(null,factory_9325.call(null,f_9318));
dommy.core.update_event_listeners_BANG_.call(null,elem_9310,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9311,actual_type_9324,f_9318], null),canonical_f_9326);

if(cljs.core.truth_(elem_9310.addEventListener)){
elem_9310.addEventListener(cljs.core.name.call(null,actual_type_9324),canonical_f_9326);
} else {
elem_9310.attachEvent(cljs.core.name.call(null,actual_type_9324),canonical_f_9326);
}

var G__9327 = seq__9294_9319;
var G__9328 = chunk__9296_9320;
var G__9329 = count__9297_9321;
var G__9330 = (i__9298_9322 + (1));
seq__9294_9319 = G__9327;
chunk__9296_9320 = G__9328;
count__9297_9321 = G__9329;
i__9298_9322 = G__9330;
continue;
} else {
var temp__4425__auto___9331 = cljs.core.seq.call(null,seq__9294_9319);
if(temp__4425__auto___9331){
var seq__9294_9332__$1 = temp__4425__auto___9331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9294_9332__$1)){
var c__7258__auto___9333 = cljs.core.chunk_first.call(null,seq__9294_9332__$1);
var G__9334 = cljs.core.chunk_rest.call(null,seq__9294_9332__$1);
var G__9335 = c__7258__auto___9333;
var G__9336 = cljs.core.count.call(null,c__7258__auto___9333);
var G__9337 = (0);
seq__9294_9319 = G__9334;
chunk__9296_9320 = G__9335;
count__9297_9321 = G__9336;
i__9298_9322 = G__9337;
continue;
} else {
var vec__9302_9338 = cljs.core.first.call(null,seq__9294_9332__$1);
var actual_type_9339 = cljs.core.nth.call(null,vec__9302_9338,(0),null);
var factory_9340 = cljs.core.nth.call(null,vec__9302_9338,(1),null);
var canonical_f_9341 = (cljs.core.truth_(selector_9311)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9310,selector_9311):cljs.core.identity).call(null,factory_9340.call(null,f_9318));
dommy.core.update_event_listeners_BANG_.call(null,elem_9310,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9311,actual_type_9339,f_9318], null),canonical_f_9341);

if(cljs.core.truth_(elem_9310.addEventListener)){
elem_9310.addEventListener(cljs.core.name.call(null,actual_type_9339),canonical_f_9341);
} else {
elem_9310.attachEvent(cljs.core.name.call(null,actual_type_9339),canonical_f_9341);
}

var G__9342 = cljs.core.next.call(null,seq__9294_9332__$1);
var G__9343 = null;
var G__9344 = (0);
var G__9345 = (0);
seq__9294_9319 = G__9342;
chunk__9296_9320 = G__9343;
count__9297_9321 = G__9344;
i__9298_9322 = G__9345;
continue;
}
} else {
}
}
break;
}

var G__9346 = seq__9284_9312;
var G__9347 = chunk__9291_9313;
var G__9348 = count__9292_9314;
var G__9349 = (i__9293_9315 + (1));
seq__9284_9312 = G__9346;
chunk__9291_9313 = G__9347;
count__9292_9314 = G__9348;
i__9293_9315 = G__9349;
continue;
} else {
var temp__4425__auto___9350 = cljs.core.seq.call(null,seq__9284_9312);
if(temp__4425__auto___9350){
var seq__9284_9351__$1 = temp__4425__auto___9350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9284_9351__$1)){
var c__7258__auto___9352 = cljs.core.chunk_first.call(null,seq__9284_9351__$1);
var G__9353 = cljs.core.chunk_rest.call(null,seq__9284_9351__$1);
var G__9354 = c__7258__auto___9352;
var G__9355 = cljs.core.count.call(null,c__7258__auto___9352);
var G__9356 = (0);
seq__9284_9312 = G__9353;
chunk__9291_9313 = G__9354;
count__9292_9314 = G__9355;
i__9293_9315 = G__9356;
continue;
} else {
var vec__9303_9357 = cljs.core.first.call(null,seq__9284_9351__$1);
var orig_type_9358 = cljs.core.nth.call(null,vec__9303_9357,(0),null);
var f_9359 = cljs.core.nth.call(null,vec__9303_9357,(1),null);
var seq__9285_9360 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9358,cljs.core.PersistentArrayMap.fromArray([orig_type_9358,cljs.core.identity], true, false)));
var chunk__9287_9361 = null;
var count__9288_9362 = (0);
var i__9289_9363 = (0);
while(true){
if((i__9289_9363 < count__9288_9362)){
var vec__9304_9364 = cljs.core._nth.call(null,chunk__9287_9361,i__9289_9363);
var actual_type_9365 = cljs.core.nth.call(null,vec__9304_9364,(0),null);
var factory_9366 = cljs.core.nth.call(null,vec__9304_9364,(1),null);
var canonical_f_9367 = (cljs.core.truth_(selector_9311)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9310,selector_9311):cljs.core.identity).call(null,factory_9366.call(null,f_9359));
dommy.core.update_event_listeners_BANG_.call(null,elem_9310,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9311,actual_type_9365,f_9359], null),canonical_f_9367);

if(cljs.core.truth_(elem_9310.addEventListener)){
elem_9310.addEventListener(cljs.core.name.call(null,actual_type_9365),canonical_f_9367);
} else {
elem_9310.attachEvent(cljs.core.name.call(null,actual_type_9365),canonical_f_9367);
}

var G__9368 = seq__9285_9360;
var G__9369 = chunk__9287_9361;
var G__9370 = count__9288_9362;
var G__9371 = (i__9289_9363 + (1));
seq__9285_9360 = G__9368;
chunk__9287_9361 = G__9369;
count__9288_9362 = G__9370;
i__9289_9363 = G__9371;
continue;
} else {
var temp__4425__auto___9372__$1 = cljs.core.seq.call(null,seq__9285_9360);
if(temp__4425__auto___9372__$1){
var seq__9285_9373__$1 = temp__4425__auto___9372__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9285_9373__$1)){
var c__7258__auto___9374 = cljs.core.chunk_first.call(null,seq__9285_9373__$1);
var G__9375 = cljs.core.chunk_rest.call(null,seq__9285_9373__$1);
var G__9376 = c__7258__auto___9374;
var G__9377 = cljs.core.count.call(null,c__7258__auto___9374);
var G__9378 = (0);
seq__9285_9360 = G__9375;
chunk__9287_9361 = G__9376;
count__9288_9362 = G__9377;
i__9289_9363 = G__9378;
continue;
} else {
var vec__9305_9379 = cljs.core.first.call(null,seq__9285_9373__$1);
var actual_type_9380 = cljs.core.nth.call(null,vec__9305_9379,(0),null);
var factory_9381 = cljs.core.nth.call(null,vec__9305_9379,(1),null);
var canonical_f_9382 = (cljs.core.truth_(selector_9311)?cljs.core.partial.call(null,dommy.core.live_listener,elem_9310,selector_9311):cljs.core.identity).call(null,factory_9381.call(null,f_9359));
dommy.core.update_event_listeners_BANG_.call(null,elem_9310,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9311,actual_type_9380,f_9359], null),canonical_f_9382);

if(cljs.core.truth_(elem_9310.addEventListener)){
elem_9310.addEventListener(cljs.core.name.call(null,actual_type_9380),canonical_f_9382);
} else {
elem_9310.attachEvent(cljs.core.name.call(null,actual_type_9380),canonical_f_9382);
}

var G__9383 = cljs.core.next.call(null,seq__9285_9373__$1);
var G__9384 = null;
var G__9385 = (0);
var G__9386 = (0);
seq__9285_9360 = G__9383;
chunk__9287_9361 = G__9384;
count__9288_9362 = G__9385;
i__9289_9363 = G__9386;
continue;
}
} else {
}
}
break;
}

var G__9387 = cljs.core.next.call(null,seq__9284_9351__$1);
var G__9388 = null;
var G__9389 = (0);
var G__9390 = (0);
seq__9284_9312 = G__9387;
chunk__9291_9313 = G__9388;
count__9292_9314 = G__9389;
i__9293_9315 = G__9390;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq9281){
var G__9282 = cljs.core.first.call(null,seq9281);
var seq9281__$1 = cljs.core.next.call(null,seq9281);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9282,seq9281__$1);
});
/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9416 = arguments.length;
var i__7514__auto___9417 = (0);
while(true){
if((i__7514__auto___9417 < len__7513__auto___9416)){
args__7520__auto__.push((arguments[i__7514__auto___9417]));

var G__9418 = (i__7514__auto___9417 + (1));
i__7514__auto___9417 = G__9418;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__9393_9419 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9420 = cljs.core.nth.call(null,vec__9393_9419,(0),null);
var selector_9421 = cljs.core.nth.call(null,vec__9393_9419,(1),null);
var seq__9394_9422 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9401_9423 = null;
var count__9402_9424 = (0);
var i__9403_9425 = (0);
while(true){
if((i__9403_9425 < count__9402_9424)){
var vec__9410_9426 = cljs.core._nth.call(null,chunk__9401_9423,i__9403_9425);
var orig_type_9427 = cljs.core.nth.call(null,vec__9410_9426,(0),null);
var f_9428 = cljs.core.nth.call(null,vec__9410_9426,(1),null);
var seq__9404_9429 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9427,cljs.core.PersistentArrayMap.fromArray([orig_type_9427,cljs.core.identity], true, false)));
var chunk__9406_9430 = null;
var count__9407_9431 = (0);
var i__9408_9432 = (0);
while(true){
if((i__9408_9432 < count__9407_9431)){
var vec__9411_9433 = cljs.core._nth.call(null,chunk__9406_9430,i__9408_9432);
var actual_type_9434 = cljs.core.nth.call(null,vec__9411_9433,(0),null);
var __9435 = cljs.core.nth.call(null,vec__9411_9433,(1),null);
var keys_9436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9421,actual_type_9434,f_9428], null);
var canonical_f_9437 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9420),keys_9436);
dommy.core.update_event_listeners_BANG_.call(null,elem_9420,dommy.utils.dissoc_in,keys_9436);

if(cljs.core.truth_(elem_9420.removeEventListener)){
elem_9420.removeEventListener(cljs.core.name.call(null,actual_type_9434),canonical_f_9437);
} else {
elem_9420.detachEvent(cljs.core.name.call(null,actual_type_9434),canonical_f_9437);
}

var G__9438 = seq__9404_9429;
var G__9439 = chunk__9406_9430;
var G__9440 = count__9407_9431;
var G__9441 = (i__9408_9432 + (1));
seq__9404_9429 = G__9438;
chunk__9406_9430 = G__9439;
count__9407_9431 = G__9440;
i__9408_9432 = G__9441;
continue;
} else {
var temp__4425__auto___9442 = cljs.core.seq.call(null,seq__9404_9429);
if(temp__4425__auto___9442){
var seq__9404_9443__$1 = temp__4425__auto___9442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9404_9443__$1)){
var c__7258__auto___9444 = cljs.core.chunk_first.call(null,seq__9404_9443__$1);
var G__9445 = cljs.core.chunk_rest.call(null,seq__9404_9443__$1);
var G__9446 = c__7258__auto___9444;
var G__9447 = cljs.core.count.call(null,c__7258__auto___9444);
var G__9448 = (0);
seq__9404_9429 = G__9445;
chunk__9406_9430 = G__9446;
count__9407_9431 = G__9447;
i__9408_9432 = G__9448;
continue;
} else {
var vec__9412_9449 = cljs.core.first.call(null,seq__9404_9443__$1);
var actual_type_9450 = cljs.core.nth.call(null,vec__9412_9449,(0),null);
var __9451 = cljs.core.nth.call(null,vec__9412_9449,(1),null);
var keys_9452 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9421,actual_type_9450,f_9428], null);
var canonical_f_9453 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9420),keys_9452);
dommy.core.update_event_listeners_BANG_.call(null,elem_9420,dommy.utils.dissoc_in,keys_9452);

if(cljs.core.truth_(elem_9420.removeEventListener)){
elem_9420.removeEventListener(cljs.core.name.call(null,actual_type_9450),canonical_f_9453);
} else {
elem_9420.detachEvent(cljs.core.name.call(null,actual_type_9450),canonical_f_9453);
}

var G__9454 = cljs.core.next.call(null,seq__9404_9443__$1);
var G__9455 = null;
var G__9456 = (0);
var G__9457 = (0);
seq__9404_9429 = G__9454;
chunk__9406_9430 = G__9455;
count__9407_9431 = G__9456;
i__9408_9432 = G__9457;
continue;
}
} else {
}
}
break;
}

var G__9458 = seq__9394_9422;
var G__9459 = chunk__9401_9423;
var G__9460 = count__9402_9424;
var G__9461 = (i__9403_9425 + (1));
seq__9394_9422 = G__9458;
chunk__9401_9423 = G__9459;
count__9402_9424 = G__9460;
i__9403_9425 = G__9461;
continue;
} else {
var temp__4425__auto___9462 = cljs.core.seq.call(null,seq__9394_9422);
if(temp__4425__auto___9462){
var seq__9394_9463__$1 = temp__4425__auto___9462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9394_9463__$1)){
var c__7258__auto___9464 = cljs.core.chunk_first.call(null,seq__9394_9463__$1);
var G__9465 = cljs.core.chunk_rest.call(null,seq__9394_9463__$1);
var G__9466 = c__7258__auto___9464;
var G__9467 = cljs.core.count.call(null,c__7258__auto___9464);
var G__9468 = (0);
seq__9394_9422 = G__9465;
chunk__9401_9423 = G__9466;
count__9402_9424 = G__9467;
i__9403_9425 = G__9468;
continue;
} else {
var vec__9413_9469 = cljs.core.first.call(null,seq__9394_9463__$1);
var orig_type_9470 = cljs.core.nth.call(null,vec__9413_9469,(0),null);
var f_9471 = cljs.core.nth.call(null,vec__9413_9469,(1),null);
var seq__9395_9472 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9470,cljs.core.PersistentArrayMap.fromArray([orig_type_9470,cljs.core.identity], true, false)));
var chunk__9397_9473 = null;
var count__9398_9474 = (0);
var i__9399_9475 = (0);
while(true){
if((i__9399_9475 < count__9398_9474)){
var vec__9414_9476 = cljs.core._nth.call(null,chunk__9397_9473,i__9399_9475);
var actual_type_9477 = cljs.core.nth.call(null,vec__9414_9476,(0),null);
var __9478 = cljs.core.nth.call(null,vec__9414_9476,(1),null);
var keys_9479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9421,actual_type_9477,f_9471], null);
var canonical_f_9480 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9420),keys_9479);
dommy.core.update_event_listeners_BANG_.call(null,elem_9420,dommy.utils.dissoc_in,keys_9479);

if(cljs.core.truth_(elem_9420.removeEventListener)){
elem_9420.removeEventListener(cljs.core.name.call(null,actual_type_9477),canonical_f_9480);
} else {
elem_9420.detachEvent(cljs.core.name.call(null,actual_type_9477),canonical_f_9480);
}

var G__9481 = seq__9395_9472;
var G__9482 = chunk__9397_9473;
var G__9483 = count__9398_9474;
var G__9484 = (i__9399_9475 + (1));
seq__9395_9472 = G__9481;
chunk__9397_9473 = G__9482;
count__9398_9474 = G__9483;
i__9399_9475 = G__9484;
continue;
} else {
var temp__4425__auto___9485__$1 = cljs.core.seq.call(null,seq__9395_9472);
if(temp__4425__auto___9485__$1){
var seq__9395_9486__$1 = temp__4425__auto___9485__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9395_9486__$1)){
var c__7258__auto___9487 = cljs.core.chunk_first.call(null,seq__9395_9486__$1);
var G__9488 = cljs.core.chunk_rest.call(null,seq__9395_9486__$1);
var G__9489 = c__7258__auto___9487;
var G__9490 = cljs.core.count.call(null,c__7258__auto___9487);
var G__9491 = (0);
seq__9395_9472 = G__9488;
chunk__9397_9473 = G__9489;
count__9398_9474 = G__9490;
i__9399_9475 = G__9491;
continue;
} else {
var vec__9415_9492 = cljs.core.first.call(null,seq__9395_9486__$1);
var actual_type_9493 = cljs.core.nth.call(null,vec__9415_9492,(0),null);
var __9494 = cljs.core.nth.call(null,vec__9415_9492,(1),null);
var keys_9495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_9421,actual_type_9493,f_9471], null);
var canonical_f_9496 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_9420),keys_9495);
dommy.core.update_event_listeners_BANG_.call(null,elem_9420,dommy.utils.dissoc_in,keys_9495);

if(cljs.core.truth_(elem_9420.removeEventListener)){
elem_9420.removeEventListener(cljs.core.name.call(null,actual_type_9493),canonical_f_9496);
} else {
elem_9420.detachEvent(cljs.core.name.call(null,actual_type_9493),canonical_f_9496);
}

var G__9497 = cljs.core.next.call(null,seq__9395_9486__$1);
var G__9498 = null;
var G__9499 = (0);
var G__9500 = (0);
seq__9395_9472 = G__9497;
chunk__9397_9473 = G__9498;
count__9398_9474 = G__9499;
i__9399_9475 = G__9500;
continue;
}
} else {
}
}
break;
}

var G__9501 = cljs.core.next.call(null,seq__9394_9463__$1);
var G__9502 = null;
var G__9503 = (0);
var G__9504 = (0);
seq__9394_9422 = G__9501;
chunk__9401_9423 = G__9502;
count__9402_9424 = G__9503;
i__9403_9425 = G__9504;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq9391){
var G__9392 = cljs.core.first.call(null,seq9391);
var seq9391__$1 = cljs.core.next.call(null,seq9391);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9392,seq9391__$1);
});
/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9514 = arguments.length;
var i__7514__auto___9515 = (0);
while(true){
if((i__7514__auto___9515 < len__7513__auto___9514)){
args__7520__auto__.push((arguments[i__7514__auto___9515]));

var G__9516 = (i__7514__auto___9515 + (1));
i__7514__auto___9515 = G__9516;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null)))))].join('')));
}

var vec__9507_9517 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_9518 = cljs.core.nth.call(null,vec__9507_9517,(0),null);
var selector_9519 = cljs.core.nth.call(null,vec__9507_9517,(1),null);
var seq__9508_9520 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__9509_9521 = null;
var count__9510_9522 = (0);
var i__9511_9523 = (0);
while(true){
if((i__9511_9523 < count__9510_9522)){
var vec__9512_9524 = cljs.core._nth.call(null,chunk__9509_9521,i__9511_9523);
var type_9525 = cljs.core.nth.call(null,vec__9512_9524,(0),null);
var f_9526 = cljs.core.nth.call(null,vec__9512_9524,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_9525,((function (seq__9508_9520,chunk__9509_9521,count__9510_9522,i__9511_9523,vec__9512_9524,type_9525,f_9526,vec__9507_9517,elem_9518,selector_9519){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_9525,dommy$core$this_fn);

return f_9526.call(null,e);
});})(seq__9508_9520,chunk__9509_9521,count__9510_9522,i__9511_9523,vec__9512_9524,type_9525,f_9526,vec__9507_9517,elem_9518,selector_9519))
);

var G__9527 = seq__9508_9520;
var G__9528 = chunk__9509_9521;
var G__9529 = count__9510_9522;
var G__9530 = (i__9511_9523 + (1));
seq__9508_9520 = G__9527;
chunk__9509_9521 = G__9528;
count__9510_9522 = G__9529;
i__9511_9523 = G__9530;
continue;
} else {
var temp__4425__auto___9531 = cljs.core.seq.call(null,seq__9508_9520);
if(temp__4425__auto___9531){
var seq__9508_9532__$1 = temp__4425__auto___9531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9508_9532__$1)){
var c__7258__auto___9533 = cljs.core.chunk_first.call(null,seq__9508_9532__$1);
var G__9534 = cljs.core.chunk_rest.call(null,seq__9508_9532__$1);
var G__9535 = c__7258__auto___9533;
var G__9536 = cljs.core.count.call(null,c__7258__auto___9533);
var G__9537 = (0);
seq__9508_9520 = G__9534;
chunk__9509_9521 = G__9535;
count__9510_9522 = G__9536;
i__9511_9523 = G__9537;
continue;
} else {
var vec__9513_9538 = cljs.core.first.call(null,seq__9508_9532__$1);
var type_9539 = cljs.core.nth.call(null,vec__9513_9538,(0),null);
var f_9540 = cljs.core.nth.call(null,vec__9513_9538,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_9539,((function (seq__9508_9520,chunk__9509_9521,count__9510_9522,i__9511_9523,vec__9513_9538,type_9539,f_9540,seq__9508_9532__$1,temp__4425__auto___9531,vec__9507_9517,elem_9518,selector_9519){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_9539,dommy$core$this_fn);

return f_9540.call(null,e);
});})(seq__9508_9520,chunk__9509_9521,count__9510_9522,i__9511_9523,vec__9513_9538,type_9539,f_9540,seq__9508_9532__$1,temp__4425__auto___9531,vec__9507_9517,elem_9518,selector_9519))
);

var G__9541 = cljs.core.next.call(null,seq__9508_9532__$1);
var G__9542 = null;
var G__9543 = (0);
var G__9544 = (0);
seq__9508_9520 = G__9541;
chunk__9509_9521 = G__9542;
count__9510_9522 = G__9543;
i__9511_9523 = G__9544;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq9505){
var G__9506 = cljs.core.first.call(null,seq9505);
var seq9505__$1 = cljs.core.next.call(null,seq9505);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9506,seq9505__$1);
});

//# sourceMappingURL=core.js.map