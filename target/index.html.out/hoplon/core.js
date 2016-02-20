// Compiled by ClojureScript 1.7.228 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljsjs.jquery');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8454_SHARP_,p2__8455_SHARP_){
return cljs.core.assoc.call(null,p1__8454_SHARP_,p2__8455_SHARP_.getAttribute("static-id"),p2__8455_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8456 = [];
var len__7513__auto___8459 = arguments.length;
var i__7514__auto___8460 = (0);
while(true){
if((i__7514__auto___8460 < len__7513__auto___8459)){
args8456.push((arguments[i__7514__auto___8460]));

var G__8461 = (i__7514__auto___8460 + (1));
i__7514__auto___8460 = G__8461;
continue;
} else {
}
break;
}

var G__8458 = args8456.length;
switch (G__8458) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8456.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return hoplon.core.do_watch.call(null,atom,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8465 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__8465,(0),null);
var more = cljs.core.nthnext.call(null,vec__8465,(1));
var vec__8466 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8466,(0),null);
var f2 = cljs.core.nth.call(null,vec__8466,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("cd568e43721e4710ad703862f8c38df2")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__6455__auto__ = (function (){var and__6443__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__6443__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var G__8467 = (i + (1));
var G__8468 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8467;
ret = G__8468;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return hoplon.core.$text.call(null,x);
} else {
if(typeof x === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(x)].join(''));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core._STAR_preserve_event_handlers_STAR_ = false;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8479 = new$__$1;
var vec__8481 = G__8479;
var x = cljs.core.nth.call(null,vec__8481,(0),null);
var xs = cljs.core.nthnext.call(null,vec__8481,(1));
var G__8480 = hoplon.core.child_vec.call(null,this$);
var vec__8482 = G__8480;
var k = cljs.core.nth.call(null,vec__8482,(0),null);
var ks = cljs.core.nthnext.call(null,vec__8482,(1));
var kids = vec__8482;
var G__8479__$1 = G__8479;
var G__8480__$1 = G__8480;
while(true){
var vec__8483 = G__8479__$1;
var x__$1 = cljs.core.nth.call(null,vec__8483,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__8483,(1));
var vec__8484 = G__8480__$1;
var k__$1 = cljs.core.nth.call(null,vec__8484,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__8484,(1));
var kids__$1 = vec__8484;
if(cljs.core.truth_((function (){var or__6455__auto__ = x__$1;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return k__$1;
}
})())){
var G__8485 = xs__$1;
var G__8486 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
var n_8487 = hoplon.core.__GT_node.call(null,k__$1);
hoplon.core.removeChild.call(this$,n_8487);

if(cljs.core.truth_(hoplon.core._STAR_preserve_event_handlers_STAR_)){
} else {
jQuery(n_8487).remove();
}
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node.call(null,x__$1),hoplon.core.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__8479__$1 = G__8485;
G__8480__$1 = G__8486;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_8488 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8488;

hoplon.core.do_watch.call(null,kids_8488,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8493 = kidfn.call(null,this$__$1);
var i_8494 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8493));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
var preserve_QMARK__8495 = new cljs.core.Keyword(null,"preserve-event-handlers","preserve-event-handlers",682680806).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x__$1));
hoplon.core.do_watch.call(null,x__$1,((function (preserve_QMARK__8495,kids_8493,i_8494,x__$1,this$__$1){
return (function (p1__8490_SHARP_,p2__8489_SHARP_){
var _STAR_preserve_event_handlers_STAR_8492 = hoplon.core._STAR_preserve_event_handlers_STAR_;
hoplon.core._STAR_preserve_event_handlers_STAR_ = preserve_QMARK__8495;

try{return cljs.core.swap_BANG_.call(null,kids_8493,cljs.core.assoc,i_8494,p2__8489_SHARP_);
}finally {hoplon.core._STAR_preserve_event_handlers_STAR_ = _STAR_preserve_event_handlers_STAR_8492;
}});})(preserve_QMARK__8495,kids_8493,i_8494,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8493,cljs.core.assoc,i_8494,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8496_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8496_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8497_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8497_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8498_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8498_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8499 = cljs.core.keyword.call(null,k);
var attr_8500 = attrfn.call(null,this$__$1);
var has_QMARK__8501 = (function (){var and__6443__auto__ = attr_8500;
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8500),kk_8499);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8501)){
cljs.core.swap_BANG_.call(null,attr_8500,cljs.core.assoc,kk_8499,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8502_SHARP_){
return p1__8502_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8503_SHARP_){
return p1__8503_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8504_SHARP_){
return p1__8504_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8505_SHARP_){
return p1__8505_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attribute_BANG_ = (function hoplon$core$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._set_attribute_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,k,v);
} else {
var m__7111__auto____$1 = (hoplon.core._set_attribute_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,child);
} else {
var m__7111__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,child);
} else {
var m__7111__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,new$,existing);
} else {
var m__7111__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7110__auto__ = (((this$ == null))?null:this$);
var m__7111__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,this$,new$,existing);
} else {
var m__7111__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.set_attribute_BANG_ = (function hoplon$core$set_attribute_BANG_(this$,k,v){
return hoplon.core._set_attribute_BANG_.call(null,this$,k,v);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not.call(null,(window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8506_SHARP_){
return (p1__8506_SHARP_ instanceof Node);
}):(function (p1__8507_SHARP_){
try{return p1__8507_SHARP_.nodeType;
}catch (e8508){if((e8508 instanceof Error)){
var _ = e8508;
return null;
} else {
throw e8508;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8509_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8509_SHARP_);
}catch (e8510){if((e8510 instanceof Error)){
var _ = e8510;
return null;
} else {
throw e8510;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8511_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8511_SHARP_);
}catch (e8512){if((e8512 instanceof Error)){
var _ = e8512;
return null;
} else {
throw e8512;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args8513 = [];
var len__7513__auto___8517 = arguments.length;
var i__7514__auto___8518 = (0);
while(true){
if((i__7514__auto___8518 < len__7513__auto___8517)){
args8513.push((arguments[i__7514__auto___8518]));

var G__8519 = (i__7514__auto___8518 + (1));
i__7514__auto___8518 = G__8519;
continue;
} else {
}
break;
}

var G__8515 = args8513.length;
switch (G__8515) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8513.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8516){if((e8516 instanceof Error)){
var _ = e8516;
return not_found;
} else {
throw e8516;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args8521 = [];
var len__7513__auto___8524 = arguments.length;
var i__7514__auto___8525 = (0);
while(true){
if((i__7514__auto___8525 < len__7513__auto___8524)){
args8521.push((arguments[i__7514__auto___8525]));

var G__8526 = (i__7514__auto___8525 + (1));
i__7514__auto___8525 = G__8526;
continue;
} else {
}
break;
}

var G__8523 = args8521.length;
switch (G__8523) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8521.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;
hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__8536 = args;
var vec__8537 = G__8536;
var arg = cljs.core.nth.call(null,vec__8537,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__8537,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__8536__$1 = G__8536;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__8538 = G__8536__$1;
var arg__$1 = cljs.core.nth.call(null,vec__8538,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__8538,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__8539 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__8536__$1,attr__$2,kids__$2,vec__8538,arg__$1,args__$2,attr,kids,G__8536,vec__8537,arg,args__$1){
return (function (p1__8528_SHARP_,p2__8529_SHARP_,p3__8530_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__8528_SHARP_,p2__8529_SHARP_,p3__8530_SHARP_);
});})(attr__$1,kids__$1,G__8536__$1,attr__$2,kids__$2,vec__8538,arg__$1,args__$2,attr,kids,G__8536,vec__8537,arg,args__$1))
,attr__$2,arg__$1);
var G__8540 = kids__$2;
var G__8541 = args__$2;
attr__$1 = G__8539;
kids__$1 = G__8540;
G__8536__$1 = G__8541;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__8542 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__8543 = kids__$2;
var G__8544 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__8542;
kids__$1 = G__8543;
G__8536__$1 = G__8544;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__8545 = attr__$2;
var G__8546 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8547 = args__$2;
attr__$1 = G__8545;
kids__$1 = G__8546;
G__8536__$1 = G__8547;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__8548 = attr__$2;
var G__8549 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__8550 = args__$2;
attr__$1 = G__8548;
kids__$1 = G__8549;
G__8536__$1 = G__8550;
continue;
} else {
var G__8551 = attr__$2;
var G__8552 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__8553 = args__$2;
attr__$1 = G__8551;
kids__$1 = G__8552;
G__8536__$1 = G__8553;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,v))){
hoplon.core.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__8555_SHARP_,p2__8554_SHARP_){
return hoplon.core.do_BANG_.call(null,this$__$3,k,p2__8554_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
hoplon.core.on_BANG_.call(null,this$__$3,k,v);
} else {
hoplon.core.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__8557){
var vec__8563 = p__8557;
var child_cell = cljs.core.nth.call(null,vec__8563,(0),null);
var _ = cljs.core.nthnext.call(null,vec__8563,(1));
var kids = vec__8563;
var this$__$1 = this$;
var node_8568 = ((function (this$__$1,vec__8563,child_cell,_,kids){
return (function (p1__8556_SHARP_){
if(typeof p1__8556_SHARP_ === 'string'){
return hoplon.core.$text.call(null,p1__8556_SHARP_);
} else {
if(typeof p1__8556_SHARP_ === 'number'){
return hoplon.core.$text.call(null,[cljs.core.str(p1__8556_SHARP_)].join(''));
} else {
return p1__8556_SHARP_;

}
}
});})(this$__$1,vec__8563,child_cell,_,kids))
;
var seq__8564_8569 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__8565_8570 = null;
var count__8566_8571 = (0);
var i__8567_8572 = (0);
while(true){
if((i__8567_8572 < count__8566_8571)){
var x_8573 = cljs.core._nth.call(null,chunk__8565_8570,i__8567_8572);
var temp__4425__auto___8574 = node_8568.call(null,x_8573);
if(cljs.core.truth_(temp__4425__auto___8574)){
var x_8575__$1 = temp__4425__auto___8574;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8575__$1);
} else {
}

var G__8576 = seq__8564_8569;
var G__8577 = chunk__8565_8570;
var G__8578 = count__8566_8571;
var G__8579 = (i__8567_8572 + (1));
seq__8564_8569 = G__8576;
chunk__8565_8570 = G__8577;
count__8566_8571 = G__8578;
i__8567_8572 = G__8579;
continue;
} else {
var temp__4425__auto___8580 = cljs.core.seq.call(null,seq__8564_8569);
if(temp__4425__auto___8580){
var seq__8564_8581__$1 = temp__4425__auto___8580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8564_8581__$1)){
var c__7258__auto___8582 = cljs.core.chunk_first.call(null,seq__8564_8581__$1);
var G__8583 = cljs.core.chunk_rest.call(null,seq__8564_8581__$1);
var G__8584 = c__7258__auto___8582;
var G__8585 = cljs.core.count.call(null,c__7258__auto___8582);
var G__8586 = (0);
seq__8564_8569 = G__8583;
chunk__8565_8570 = G__8584;
count__8566_8571 = G__8585;
i__8567_8572 = G__8586;
continue;
} else {
var x_8587 = cljs.core.first.call(null,seq__8564_8581__$1);
var temp__4425__auto___8588__$1 = node_8568.call(null,x_8587);
if(cljs.core.truth_(temp__4425__auto___8588__$1)){
var x_8589__$1 = temp__4425__auto___8588__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_8589__$1);
} else {
}

var G__8590 = cljs.core.next.call(null,seq__8564_8581__$1);
var G__8591 = null;
var G__8592 = (0);
var G__8593 = (0);
seq__8564_8569 = G__8590;
chunk__8565_8570 = G__8591;
count__8566_8571 = G__8592;
i__8567_8572 = G__8593;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__8600__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__8595 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8595,(0),null);
var kids = cljs.core.nth.call(null,vec__8595,(1),null);
var G__8596 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8596,attr);

hoplon.core.add_children_BANG_.call(null,G__8596,kids);

return G__8596;
};
var G__8600 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__8601__i = 0, G__8601__a = new Array(arguments.length -  1);
while (G__8601__i < G__8601__a.length) {G__8601__a[G__8601__i] = arguments[G__8601__i + 1]; ++G__8601__i;}
  args = new cljs.core.IndexedSeq(G__8601__a,0);
} 
return G__8600__delegate.call(this,self__,args);};
G__8600.cljs$lang$maxFixedArity = 1;
G__8600.cljs$lang$applyTo = (function (arglist__8602){
var self__ = cljs.core.first(arglist__8602);
var args = cljs.core.rest(arglist__8602);
return G__8600__delegate(self__,args);
});
G__8600.cljs$core$IFn$_invoke$arity$variadic = G__8600__delegate;
return G__8600;
})()
;

Element.prototype.apply = (function (self__,args8594){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8594)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__8603__delegate = function (args){
var this$ = this;
var vec__8597 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__8597,(0),null);
var kids = cljs.core.nth.call(null,vec__8597,(1),null);
var G__8598 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__8598,attr);

hoplon.core.add_children_BANG_.call(null,G__8598,kids);

return G__8598;
};
var G__8603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8604__i = 0, G__8604__a = new Array(arguments.length -  0);
while (G__8604__i < G__8604__a.length) {G__8604__a[G__8604__i] = arguments[G__8604__i + 0]; ++G__8604__i;}
  args = new cljs.core.IndexedSeq(G__8604__a,0);
} 
return G__8603__delegate.call(this,args);};
G__8603.cljs$lang$maxFixedArity = 0;
G__8603.cljs$lang$applyTo = (function (arglist__8605){
var args = cljs.core.seq(arglist__8605);
return G__8603__delegate(args);
});
G__8603.cljs$core$IFn$_invoke$arity$variadic = G__8603__delegate;
return G__8603;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_8606__$1 = cljs.core.name.call(null,k);
var e_8607 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_8607.removeAttr(k_8606__$1);
} else {
e_8607.attr(k_8606__$1,((cljs.core._EQ_.call(null,true,v))?k_8606__$1:v));
}

return _;
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e8599){if((e8599 instanceof Error)){
var _ = e8599;
return null;
} else {
throw e8599;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__8610__delegate = function (args){
var vec__8609 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8609,(0),null);
var kids = cljs.core.nth.call(null,vec__8609,(1),null);
var elem = hoplon.core.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__8610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8611__i = 0, G__8611__a = new Array(arguments.length -  0);
while (G__8611__i < G__8611__a.length) {G__8611__a[G__8611__i] = arguments[G__8611__i + 0]; ++G__8611__i;}
  args = new cljs.core.IndexedSeq(G__8611__a,0);
} 
return G__8610__delegate.call(this,args);};
G__8610.cljs$lang$maxFixedArity = 0;
G__8610.cljs$lang$applyTo = (function (arglist__8612){
var args = cljs.core.seq(arglist__8612);
return G__8610__delegate(args);
});
G__8610.cljs$core$IFn$_invoke$arity$variadic = G__8610__delegate;
return G__8610;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__8613__delegate = function (args){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__8613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8614__i = 0, G__8614__a = new Array(arguments.length -  0);
while (G__8614__i < G__8614__a.length) {G__8614__a[G__8614__i] = arguments[G__8614__i + 0]; ++G__8614__i;}
  args = new cljs.core.IndexedSeq(G__8614__a,0);
} 
return G__8613__delegate.call(this,args);};
G__8613.cljs$lang$maxFixedArity = 0;
G__8613.cljs$lang$applyTo = (function (arglist__8615){
var args = cljs.core.seq(arglist__8615);
return G__8613__delegate(args);
});
G__8613.cljs$core$IFn$_invoke$arity$variadic = G__8613__delegate;
return G__8613;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8618 = arguments.length;
var i__7514__auto___8619 = (0);
while(true){
if((i__7514__auto___8619 < len__7513__auto___8618)){
args__7520__auto__.push((arguments[i__7514__auto___8619]));

var G__8620 = (i__7514__auto___8619 + (1));
i__7514__auto___8619 = G__8620;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__8617 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__8617,(0),null);
var _ = cljs.core.nth.call(null,vec__8617,(1),null);
return hoplon.core.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq8616){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8616));
});
hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,"body");
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,"head");
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor.call(null,"acronym");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.applet = hoplon.core.make_elem_ctor.call(null,"applet");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.basefont = hoplon.core.make_elem_ctor.call(null,"basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.big = hoplon.core.make_elem_ctor.call(null,"big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.center = hoplon.core.make_elem_ctor.call(null,"center");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor.call(null,"command");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dir = hoplon.core.make_elem_ctor.call(null,"dir");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor.call(null,"eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.font = hoplon.core.make_elem_ctor.call(null,"font");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.frame = hoplon.core.make_elem_ctor.call(null,"frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor.call(null,"frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor.call(null,"isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strike = hoplon.core.make_elem_ctor.call(null,"strike");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.tt = hoplon.core.make_elem_ctor.call(null,"tt");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__8621_SHARP_){
return document.createTextNode(p1__8621_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__8622_SHARP_){
return document.createComment(p1__8622_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return jQuery(f);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__8623_SHARP_){
var e = jQuery(p1__8623_SHARP_.target);
if(cljs.core.truth_((function (){var or__6455__auto__ = e.attr("action");
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__8623_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args8624 = [];
var len__7513__auto___8627 = arguments.length;
var i__7514__auto___8628 = (0);
while(true){
if((i__7514__auto___8628 < len__7513__auto___8627)){
args8624.push((arguments[i__7514__auto___8628]));

var G__8629 = (i__7514__auto___8628 + (1));
i__7514__auto___8628 = G__8629;
continue;
} else {
}
break;
}

var G__8626 = args8624.length;
switch (G__8626) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8624.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.core.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;
hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args8631 = [];
var len__7513__auto___8634 = arguments.length;
var i__7514__auto___8635 = (0);
while(true){
if((i__7514__auto___8635 < len__7513__auto___8634)){
args8631.push((arguments[i__7514__auto___8635]));

var G__8636 = (i__7514__auto___8635 + (1));
i__7514__auto___8635 = G__8636;
continue;
} else {
}
break;
}

var G__8633 = args8631.length;
switch (G__8633) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8631.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7372__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (elem,key,val){
return key;
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__8638__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__8638 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__8639__i = 0, G__8639__a = new Array(arguments.length -  2);
while (G__8639__i < G__8639__a.length) {G__8639__a[G__8639__i] = arguments[G__8639__i + 2]; ++G__8639__i;}
  args = new cljs.core.IndexedSeq(G__8639__a,0);
} 
return G__8638__delegate.call(this,elem,_,args);};
G__8638.cljs$lang$maxFixedArity = 2;
G__8638.cljs$lang$applyTo = (function (arglist__8640){
var elem = cljs.core.first(arglist__8640);
arglist__8640 = cljs.core.next(arglist__8640);
var _ = cljs.core.first(arglist__8640);
var args = cljs.core.rest(arglist__8640);
return G__8638__delegate(elem,_,args);
});
G__8638.cljs$core$IFn$_invoke$arity$variadic = G__8638__delegate;
return G__8638;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8641 = cljs.core.seq.call(null,kvs);
var chunk__8642 = null;
var count__8643 = (0);
var i__8644 = (0);
while(true){
if((i__8644 < count__8643)){
var vec__8645 = cljs.core._nth.call(null,chunk__8642,i__8644);
var k = cljs.core.nth.call(null,vec__8645,(0),null);
var v = cljs.core.nth.call(null,vec__8645,(1),null);
var k_8647__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8647__$1);
} else {
e.attr(k_8647__$1,((cljs.core._EQ_.call(null,true,v))?k_8647__$1:v));
}

var G__8648 = seq__8641;
var G__8649 = chunk__8642;
var G__8650 = count__8643;
var G__8651 = (i__8644 + (1));
seq__8641 = G__8648;
chunk__8642 = G__8649;
count__8643 = G__8650;
i__8644 = G__8651;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8641);
if(temp__4425__auto__){
var seq__8641__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8641__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8641__$1);
var G__8652 = cljs.core.chunk_rest.call(null,seq__8641__$1);
var G__8653 = c__7258__auto__;
var G__8654 = cljs.core.count.call(null,c__7258__auto__);
var G__8655 = (0);
seq__8641 = G__8652;
chunk__8642 = G__8653;
count__8643 = G__8654;
i__8644 = G__8655;
continue;
} else {
var vec__8646 = cljs.core.first.call(null,seq__8641__$1);
var k = cljs.core.nth.call(null,vec__8646,(0),null);
var v = cljs.core.nth.call(null,vec__8646,(1),null);
var k_8656__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_8656__$1);
} else {
e.attr(k_8656__$1,((cljs.core._EQ_.call(null,true,v))?k_8656__$1:v));
}

var G__8657 = cljs.core.next.call(null,seq__8641__$1);
var G__8658 = null;
var G__8659 = (0);
var G__8660 = (0);
seq__8641 = G__8657;
chunk__8642 = G__8658;
count__8643 = G__8659;
i__8644 = G__8660;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__8661_SHARP_){
return cljs.core.zipmap.call(null,p1__8661_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__8662 = cljs.core.seq.call(null,clmap);
var chunk__8663 = null;
var count__8664 = (0);
var i__8665 = (0);
while(true){
if((i__8665 < count__8664)){
var vec__8666 = cljs.core._nth.call(null,chunk__8663,i__8665);
var c = cljs.core.nth.call(null,vec__8666,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8666,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8668 = seq__8662;
var G__8669 = chunk__8663;
var G__8670 = count__8664;
var G__8671 = (i__8665 + (1));
seq__8662 = G__8668;
chunk__8663 = G__8669;
count__8664 = G__8670;
i__8665 = G__8671;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8662);
if(temp__4425__auto__){
var seq__8662__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8662__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8662__$1);
var G__8672 = cljs.core.chunk_rest.call(null,seq__8662__$1);
var G__8673 = c__7258__auto__;
var G__8674 = cljs.core.count.call(null,c__7258__auto__);
var G__8675 = (0);
seq__8662 = G__8672;
chunk__8663 = G__8673;
count__8664 = G__8674;
i__8665 = G__8675;
continue;
} else {
var vec__8667 = cljs.core.first.call(null,seq__8662__$1);
var c = cljs.core.nth.call(null,vec__8667,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__8667,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__8676 = cljs.core.next.call(null,seq__8662__$1);
var G__8677 = null;
var G__8678 = (0);
var G__8679 = (0);
seq__8662 = G__8676;
chunk__8663 = G__8677;
count__8664 = G__8678;
i__8665 = G__8679;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__8680 = cljs.core.seq.call(null,kvs);
var chunk__8681 = null;
var count__8682 = (0);
var i__8683 = (0);
while(true){
if((i__8683 < count__8682)){
var vec__8684 = cljs.core._nth.call(null,chunk__8681,i__8683);
var k = cljs.core.nth.call(null,vec__8684,(0),null);
var v = cljs.core.nth.call(null,vec__8684,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8686 = seq__8680;
var G__8687 = chunk__8681;
var G__8688 = count__8682;
var G__8689 = (i__8683 + (1));
seq__8680 = G__8686;
chunk__8681 = G__8687;
count__8682 = G__8688;
i__8683 = G__8689;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8680);
if(temp__4425__auto__){
var seq__8680__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8680__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8680__$1);
var G__8690 = cljs.core.chunk_rest.call(null,seq__8680__$1);
var G__8691 = c__7258__auto__;
var G__8692 = cljs.core.count.call(null,c__7258__auto__);
var G__8693 = (0);
seq__8680 = G__8690;
chunk__8681 = G__8691;
count__8682 = G__8692;
i__8683 = G__8693;
continue;
} else {
var vec__8685 = cljs.core.first.call(null,seq__8680__$1);
var k = cljs.core.nth.call(null,vec__8685,(0),null);
var v = cljs.core.nth.call(null,vec__8685,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__8694 = cljs.core.next.call(null,seq__8680__$1);
var G__8695 = null;
var G__8696 = (0);
var G__8697 = (0);
seq__8680 = G__8694;
chunk__8681 = G__8695;
count__8682 = G__8696;
i__8683 = G__8697;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7370__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7371__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7372__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__,hierarchy__7372__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7372__auto__,method_table__7368__auto__,prefer_table__7369__auto__,method_cache__7370__auto__,cached_hierarchy__7371__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__8709,G__8710){
return G__8709.call(null,G__8710);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__8698_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__8712,G__8713,G__8711){
return G__8711.call(null,G__8712,G__8713);
});})(on_deck,items_seq))
).call(null,items_seq,p1__8698_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__8699_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__8699_SHARP_));
cljs.core.swap_BANG_.call(null,p1__8699_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = cljs.core.with_meta.call(null,javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-event-handlers","preserve-event-handlers",682680806),true], null));
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__8714 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__8715 = null;
var count__8716 = (0);
var i__8717 = (0);
while(true){
if((i__8717 < count__8716)){
var i = cljs.core._nth.call(null,chunk__8715,i__8717);
var e_8718 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8718);

var G__8719 = seq__8714;
var G__8720 = chunk__8715;
var G__8721 = count__8716;
var G__8722 = (i__8717 + (1));
seq__8714 = G__8719;
chunk__8715 = G__8720;
count__8716 = G__8721;
i__8717 = G__8722;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8714);
if(temp__4425__auto__){
var seq__8714__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8714__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8714__$1);
var G__8723 = cljs.core.chunk_rest.call(null,seq__8714__$1);
var G__8724 = c__7258__auto__;
var G__8725 = cljs.core.count.call(null,c__7258__auto__);
var G__8726 = (0);
seq__8714 = G__8723;
chunk__8715 = G__8724;
count__8716 = G__8725;
i__8717 = G__8726;
continue;
} else {
var i = cljs.core.first.call(null,seq__8714__$1);
var e_8727 = (function (){var or__6455__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_8727);

var G__8728 = cljs.core.next.call(null,seq__8714__$1);
var G__8729 = null;
var G__8730 = (0);
var G__8731 = (0);
seq__8714 = G__8728;
chunk__8715 = G__8729;
count__8716 = G__8730;
i__8717 = G__8731;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7358__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7358__auto__)){
var e_8732 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_8732);

var G__8733 = (_ + (1));
_ = G__8733;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8740 = arguments.length;
var i__7514__auto___8741 = (0);
while(true){
if((i__7514__auto___8741 < len__7513__auto___8740)){
args__7520__auto__.push((arguments[i__7514__auto___8741]));

var G__8742 = (i__7514__auto___8741 + (1));
i__7514__auto___8741 = G__8742;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__8735){
var vec__8736 = p__8735;
var default$ = cljs.core.nth.call(null,vec__8736,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__8736,default$){
return (function (G__8737,G__8739,G__8738){
var or__6455__auto__ = (function (){var and__6443__auto__ = G__8737.call(null,G__8738);
if(cljs.core.truth_(and__6443__auto__)){
return G__8738;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return G__8739;
}
});})(c,vec__8736,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__8736,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__8736,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq8734){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8734));
});

//# sourceMappingURL=core.js.map