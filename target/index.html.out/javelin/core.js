// Compiled by ClojureScript 1.7.228 {}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,javelin$core$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__7984 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7982_SHARP_,p2__7983_SHARP_){
return cljs.core.assoc.call(null,p1__7982_SHARP_,p2__7983_SHARP_,p2__7983_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7984;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.call(null,javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e7986){if((e7986 instanceof Error)){
var _ = e7986;
return null;
} else {
throw e7986;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__7989 = c;
javelin.core.add_sync_BANG_.call(null,G__7989);

return G__7989;
} else {
var G__7990 = c;
javelin.core.propagate_STAR_.call(null,javelin.core.cell__GT_pm.call(null,G__7990));

return G__7990;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___7999 = arguments.length;
var i__7514__auto___8000 = (0);
while(true){
if((i__7514__auto___8000 < len__7513__auto___7999)){
args__7520__auto__.push((arguments[i__7514__auto___8000]));

var G__8001 = (i__7514__auto___8000 + (1));
i__7514__auto___8000 = G__8001;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7993){
var vec__7994 = p__7993;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7994,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7995 = cljs.core.seq.call(null,srcs);
var chunk__7996 = null;
var count__7997 = (0);
var i__7998 = (0);
while(true){
if((i__7998 < count__7997)){
var src = cljs.core._nth.call(null,chunk__7996,i__7998);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8002 = seq__7995;
var G__8003 = chunk__7996;
var G__8004 = count__7997;
var G__8005 = (i__7998 + (1));
seq__7995 = G__8002;
chunk__7996 = G__8003;
count__7997 = G__8004;
i__7998 = G__8005;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7995);
if(temp__4425__auto__){
var seq__7995__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7995__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__7995__$1);
var G__8006 = cljs.core.chunk_rest.call(null,seq__7995__$1);
var G__8007 = c__7258__auto__;
var G__8008 = cljs.core.count.call(null,c__7258__auto__);
var G__8009 = (0);
seq__7995 = G__8006;
chunk__7996 = G__8007;
count__7997 = G__8008;
i__7998 = G__8009;
continue;
} else {
var src = cljs.core.first.call(null,seq__7995__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__8010 = cljs.core.next.call(null,seq__7995__$1);
var G__8011 = null;
var G__8012 = (0);
var G__8013 = (0);
seq__7995 = G__8010;
chunk__7996 = G__8011;
count__7997 = G__8012;
i__7998 = G__8013;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7991){
var G__7992 = cljs.core.first.call(null,seq7991);
var seq7991__$1 = cljs.core.next.call(null,seq7991);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7992,seq7991__$1);
});
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8032 = arguments.length;
var i__7514__auto___8033 = (0);
while(true){
if((i__7514__auto___8033 < len__7513__auto___8032)){
args__7520__auto__.push((arguments[i__7514__auto___8033]));

var G__8034 = (i__7514__auto___8033 + (1));
i__7514__auto___8033 = G__8034;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__8018){
var vec__8019 = p__8018;
var f = cljs.core.nth.call(null,vec__8019,(0),null);
var sources = cljs.core.nth.call(null,vec__8019,(1),null);
javelin.core.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__8020_8035 = cljs.core.seq.call(null,this$.sources);
var chunk__8021_8036 = null;
var count__8022_8037 = (0);
var i__8023_8038 = (0);
while(true){
if((i__8023_8038 < count__8022_8037)){
var source_8039 = cljs.core._nth.call(null,chunk__8021_8036,i__8023_8038);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8039))){
source_8039.sinks = cljs.core.conj.call(null,source_8039.sinks,this$);

if((source_8039.rank > this$.rank)){
var seq__8024_8040 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8020_8035,chunk__8021_8036,count__8022_8037,i__8023_8038,source_8039,vec__8019,f,sources){
return (function (p1__8014_SHARP_){
return p1__8014_SHARP_.sinks;
});})(seq__8020_8035,chunk__8021_8036,count__8022_8037,i__8023_8038,source_8039,vec__8019,f,sources))
,source_8039));
var chunk__8025_8041 = null;
var count__8026_8042 = (0);
var i__8027_8043 = (0);
while(true){
if((i__8027_8043 < count__8026_8042)){
var dep_8044 = cljs.core._nth.call(null,chunk__8025_8041,i__8027_8043);
dep_8044.rank = javelin.core.next_rank.call(null);

var G__8045 = seq__8024_8040;
var G__8046 = chunk__8025_8041;
var G__8047 = count__8026_8042;
var G__8048 = (i__8027_8043 + (1));
seq__8024_8040 = G__8045;
chunk__8025_8041 = G__8046;
count__8026_8042 = G__8047;
i__8027_8043 = G__8048;
continue;
} else {
var temp__4425__auto___8049 = cljs.core.seq.call(null,seq__8024_8040);
if(temp__4425__auto___8049){
var seq__8024_8050__$1 = temp__4425__auto___8049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8024_8050__$1)){
var c__7258__auto___8051 = cljs.core.chunk_first.call(null,seq__8024_8050__$1);
var G__8052 = cljs.core.chunk_rest.call(null,seq__8024_8050__$1);
var G__8053 = c__7258__auto___8051;
var G__8054 = cljs.core.count.call(null,c__7258__auto___8051);
var G__8055 = (0);
seq__8024_8040 = G__8052;
chunk__8025_8041 = G__8053;
count__8026_8042 = G__8054;
i__8027_8043 = G__8055;
continue;
} else {
var dep_8056 = cljs.core.first.call(null,seq__8024_8050__$1);
dep_8056.rank = javelin.core.next_rank.call(null);

var G__8057 = cljs.core.next.call(null,seq__8024_8050__$1);
var G__8058 = null;
var G__8059 = (0);
var G__8060 = (0);
seq__8024_8040 = G__8057;
chunk__8025_8041 = G__8058;
count__8026_8042 = G__8059;
i__8027_8043 = G__8060;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8061 = seq__8020_8035;
var G__8062 = chunk__8021_8036;
var G__8063 = count__8022_8037;
var G__8064 = (i__8023_8038 + (1));
seq__8020_8035 = G__8061;
chunk__8021_8036 = G__8062;
count__8022_8037 = G__8063;
i__8023_8038 = G__8064;
continue;
} else {
var temp__4425__auto___8065 = cljs.core.seq.call(null,seq__8020_8035);
if(temp__4425__auto___8065){
var seq__8020_8066__$1 = temp__4425__auto___8065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8020_8066__$1)){
var c__7258__auto___8067 = cljs.core.chunk_first.call(null,seq__8020_8066__$1);
var G__8068 = cljs.core.chunk_rest.call(null,seq__8020_8066__$1);
var G__8069 = c__7258__auto___8067;
var G__8070 = cljs.core.count.call(null,c__7258__auto___8067);
var G__8071 = (0);
seq__8020_8035 = G__8068;
chunk__8021_8036 = G__8069;
count__8022_8037 = G__8070;
i__8023_8038 = G__8071;
continue;
} else {
var source_8072 = cljs.core.first.call(null,seq__8020_8066__$1);
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,source_8072))){
source_8072.sinks = cljs.core.conj.call(null,source_8072.sinks,this$);

if((source_8072.rank > this$.rank)){
var seq__8028_8073 = cljs.core.seq.call(null,javelin.core.bf_seq.call(null,cljs.core.identity,((function (seq__8020_8035,chunk__8021_8036,count__8022_8037,i__8023_8038,source_8072,seq__8020_8066__$1,temp__4425__auto___8065,vec__8019,f,sources){
return (function (p1__8014_SHARP_){
return p1__8014_SHARP_.sinks;
});})(seq__8020_8035,chunk__8021_8036,count__8022_8037,i__8023_8038,source_8072,seq__8020_8066__$1,temp__4425__auto___8065,vec__8019,f,sources))
,source_8072));
var chunk__8029_8074 = null;
var count__8030_8075 = (0);
var i__8031_8076 = (0);
while(true){
if((i__8031_8076 < count__8030_8075)){
var dep_8077 = cljs.core._nth.call(null,chunk__8029_8074,i__8031_8076);
dep_8077.rank = javelin.core.next_rank.call(null);

var G__8078 = seq__8028_8073;
var G__8079 = chunk__8029_8074;
var G__8080 = count__8030_8075;
var G__8081 = (i__8031_8076 + (1));
seq__8028_8073 = G__8078;
chunk__8029_8074 = G__8079;
count__8030_8075 = G__8080;
i__8031_8076 = G__8081;
continue;
} else {
var temp__4425__auto___8082__$1 = cljs.core.seq.call(null,seq__8028_8073);
if(temp__4425__auto___8082__$1){
var seq__8028_8083__$1 = temp__4425__auto___8082__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8028_8083__$1)){
var c__7258__auto___8084 = cljs.core.chunk_first.call(null,seq__8028_8083__$1);
var G__8085 = cljs.core.chunk_rest.call(null,seq__8028_8083__$1);
var G__8086 = c__7258__auto___8084;
var G__8087 = cljs.core.count.call(null,c__7258__auto___8084);
var G__8088 = (0);
seq__8028_8073 = G__8085;
chunk__8029_8074 = G__8086;
count__8030_8075 = G__8087;
i__8031_8076 = G__8088;
continue;
} else {
var dep_8089 = cljs.core.first.call(null,seq__8028_8083__$1);
dep_8089.rank = javelin.core.next_rank.call(null);

var G__8090 = cljs.core.next.call(null,seq__8028_8083__$1);
var G__8091 = null;
var G__8092 = (0);
var G__8093 = (0);
seq__8028_8073 = G__8090;
chunk__8029_8074 = G__8091;
count__8030_8075 = G__8092;
i__8031_8076 = G__8093;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__8094 = cljs.core.next.call(null,seq__8020_8066__$1);
var G__8095 = null;
var G__8096 = (0);
var G__8097 = (0);
seq__8020_8035 = G__8094;
chunk__8021_8036 = G__8095;
count__8022_8037 = G__8096;
i__8023_8038 = G__8097;
continue;
}
} else {
}
}
break;
}

var compute_8098 = ((function (vec__8019,f,sources){
return (function (p1__8015_SHARP_){
return cljs.core.apply.call(null,javelin.core.deref_STAR_.call(null,cljs.core.peek.call(null,p1__8015_SHARP_)),cljs.core.map.call(null,javelin.core.deref_STAR_,cljs.core.pop.call(null,p1__8015_SHARP_)));
});})(vec__8019,f,sources))
;
this$.thunk = ((function (compute_8098,vec__8019,f,sources){
return (function (){
return this$.state = compute_8098.call(null,this$.sources);
});})(compute_8098,vec__8019,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_.call(null,this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq8016){
var G__8017 = cljs.core.first.call(null,seq8016);
var seq8016__$1 = cljs.core.next.call(null,seq8016);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8017,seq8016__$1);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(javelin.core.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

javelin.core.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__8099 = cljs.core.seq.call(null,self__.watches);
var chunk__8100 = null;
var count__8101 = (0);
var i__8102 = (0);
while(true){
if((i__8102 < count__8101)){
var vec__8103 = cljs.core._nth.call(null,chunk__8100,i__8102);
var key = cljs.core.nth.call(null,vec__8103,(0),null);
var f = cljs.core.nth.call(null,vec__8103,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8105 = seq__8099;
var G__8106 = chunk__8100;
var G__8107 = count__8101;
var G__8108 = (i__8102 + (1));
seq__8099 = G__8105;
chunk__8100 = G__8106;
count__8101 = G__8107;
i__8102 = G__8108;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8099);
if(temp__4425__auto__){
var seq__8099__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8099__$1)){
var c__7258__auto__ = cljs.core.chunk_first.call(null,seq__8099__$1);
var G__8109 = cljs.core.chunk_rest.call(null,seq__8099__$1);
var G__8110 = c__7258__auto__;
var G__8111 = cljs.core.count.call(null,c__7258__auto__);
var G__8112 = (0);
seq__8099 = G__8109;
chunk__8100 = G__8110;
count__8101 = G__8111;
i__8102 = G__8112;
continue;
} else {
var vec__8104 = cljs.core.first.call(null,seq__8099__$1);
var key = cljs.core.nth.call(null,vec__8104,(0),null);
var f = cljs.core.nth.call(null,vec__8104,(1),null);
f.call(null,key,this$__$1,o,n);

var G__8113 = cljs.core.next.call(null,seq__8099__$1);
var G__8114 = null;
var G__8115 = (0);
var G__8116 = (0);
seq__8099 = G__8113;
chunk__8100 = G__8114;
count__8101 = G__8115;
i__8102 = G__8116;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return c.thunk;
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return c.update;
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6443__auto__ = javelin.core.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.not.call(null,javelin.core.formula_QMARK_.call(null,c));
} else {
return and__6443__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.call(null,c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__8117__delegate = function (sources){
return javelin.core.set_formula_BANG_.call(null,javelin.core.cell.call(null,new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)),f,sources);
};
var G__8117 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__8118__i = 0, G__8118__a = new Array(arguments.length -  0);
while (G__8118__i < G__8118__a.length) {G__8118__a[G__8118__i] = arguments[G__8118__i + 0]; ++G__8118__i;}
  sources = new cljs.core.IndexedSeq(G__8118__a,0);
} 
return G__8117__delegate.call(this,sources);};
G__8117.cljs$lang$maxFixedArity = 0;
G__8117.cljs$lang$applyTo = (function (arglist__8119){
var sources = cljs.core.seq(arglist__8119);
return G__8117__delegate(sources);
});
G__8117.cljs$core$IFn$_invoke$arity$variadic = G__8117__delegate;
return G__8117;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args8120 = [];
var len__7513__auto___8128 = arguments.length;
var i__7514__auto___8129 = (0);
while(true){
if((i__7514__auto___8129 < len__7513__auto___8128)){
args8120.push((arguments[i__7514__auto___8129]));

var G__8130 = (i__7514__auto___8129 + (1));
i__7514__auto___8129 = G__8130;
continue;
} else {
}
break;
}

var G__8124 = args8120.length;
switch (G__8124) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7532__auto__ = (new cljs.core.IndexedSeq(args8120.slice((1)),(0)));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7532__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(null,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__8125){
var map__8126 = p__8125;
var map__8126__$1 = ((((!((map__8126 == null)))?((((map__8126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8126):map__8126);
var meta = cljs.core.get.call(null,map__8126__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return javelin.core.set_formula_BANG_.call(null,(new javelin.core.Cell(meta,x,javelin.core.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq8121){
var G__8122 = cljs.core.first.call(null,seq8121);
var seq8121__$1 = cljs.core.next.call(null,seq8121);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__8122,seq8121__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);
javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__8132_SHARP_){
var _STAR_tx_STAR_8135 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__8132_SHARP_.call(null);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8135;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_);
var _STAR_tx_STAR_8136 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_.call(null,tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_8136;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___8143 = arguments.length;
var i__7514__auto___8144 = (0);
while(true){
if((i__7514__auto___8144 < len__7513__auto___8143)){
args__7520__auto__.push((arguments[i__7514__auto___8144]));

var G__8145 = (i__7514__auto___8144 + (1));
i__7514__auto___8144 = G__8145;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("javelin.core","none","javelin.core/none",1150337088)));
var tag_neq = ((function (olds){
return (function (p1__8137_SHARP_,p2__8138_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__8137_SHARP_,p2__8138_SHARP_),p2__8138_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__8140_SHARP_,p2__8139_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__8140_SHARP_,p2__8139_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__8146__delegate = function (rest__8141_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__8141_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__8141_SHARP_);

return news;
};
var G__8146 = function (var_args){
var rest__8141_SHARP_ = null;
if (arguments.length > 0) {
var G__8147__i = 0, G__8147__a = new Array(arguments.length -  0);
while (G__8147__i < G__8147__a.length) {G__8147__a[G__8147__i] = arguments[G__8147__i + 0]; ++G__8147__i;}
  rest__8141_SHARP_ = new cljs.core.IndexedSeq(G__8147__a,0);
} 
return G__8146__delegate.call(this,rest__8141_SHARP_);};
G__8146.cljs$lang$maxFixedArity = 0;
G__8146.cljs$lang$applyTo = (function (arglist__8148){
var rest__8141_SHARP_ = cljs.core.seq(arglist__8148);
return G__8146__delegate(rest__8141_SHARP_);
});
G__8146.cljs$core$IFn$_invoke$arity$variadic = G__8146__delegate;
return G__8146;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,javelin.core.formula.call(null,proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq8142){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8142));
});
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__8149_SHARP_){
return javelin.core.formula.call(null,cljs.core.comp.call(null,f,javelin.core.safe_nth)).call(null,cseq,p1__8149_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.call(null,(0));
var cur_count = javelin.core.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__8150_SHARP_){
return javelin.core.formula.call(null,javelin.core.safe_nth).call(null,items_seq,p1__8150_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__8155_8159 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__8156_8160 = null;
var count__8157_8161 = (0);
var i__8158_8162 = (0);
while(true){
if((i__8158_8162 < count__8157_8161)){
var i_8163 = cljs.core._nth.call(null,chunk__8156_8160,i__8158_8162);
f__$1.call(null,ith_item__$1.call(null,i_8163));

var G__8164 = seq__8155_8159;
var G__8165 = chunk__8156_8160;
var G__8166 = count__8157_8161;
var G__8167 = (i__8158_8162 + (1));
seq__8155_8159 = G__8164;
chunk__8156_8160 = G__8165;
count__8157_8161 = G__8166;
i__8158_8162 = G__8167;
continue;
} else {
var temp__4425__auto___8168 = cljs.core.seq.call(null,seq__8155_8159);
if(temp__4425__auto___8168){
var seq__8155_8169__$1 = temp__4425__auto___8168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8155_8169__$1)){
var c__7258__auto___8170 = cljs.core.chunk_first.call(null,seq__8155_8169__$1);
var G__8171 = cljs.core.chunk_rest.call(null,seq__8155_8169__$1);
var G__8172 = c__7258__auto___8170;
var G__8173 = cljs.core.count.call(null,c__7258__auto___8170);
var G__8174 = (0);
seq__8155_8159 = G__8171;
chunk__8156_8160 = G__8172;
count__8157_8161 = G__8173;
i__8158_8162 = G__8174;
continue;
} else {
var i_8175 = cljs.core.first.call(null,seq__8155_8169__$1);
f__$1.call(null,ith_item__$1.call(null,i_8175));

var G__8176 = cljs.core.next.call(null,seq__8155_8169__$1);
var G__8177 = null;
var G__8178 = (0);
var G__8179 = (0);
seq__8155_8159 = G__8176;
chunk__8156_8160 = G__8177;
count__8157_8161 = G__8178;
i__8158_8162 = G__8179;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=core.js.map