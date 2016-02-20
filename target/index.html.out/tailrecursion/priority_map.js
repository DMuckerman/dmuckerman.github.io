// Compiled by ClojureScript 1.7.228 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cljs.core.val.call(null,f)),cljs.core.key.call(null,f)], null);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__7227__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__7681(s__7682){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__7682__$1 = s__7682;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7682__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__7688 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__7688,(0),null);
var item_set = cljs.core.nth.call(null,vec__7688,(1),null);
var iterys__7223__auto__ = ((function (s__7682__$1,vec__7688,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__7681_$_iter__7683(s__7684){
return (new cljs.core.LazySeq(null,((function (s__7682__$1,vec__7688,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1){
return (function (){
var s__7684__$1 = s__7684;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__7684__$1);
if(temp__4425__auto____$1){
var s__7684__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7684__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__7684__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__7686 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__7685 = (0);
while(true){
if((i__7685 < size__7226__auto__)){
var item = cljs.core._nth.call(null,c__7225__auto__,i__7685);
cljs.core.chunk_append.call(null,b__7686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__7705 = (i__7685 + (1));
i__7685 = G__7705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7686),tailrecursion$priority_map$iter__7681_$_iter__7683.call(null,cljs.core.chunk_rest.call(null,s__7684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7686),null);
}
} else {
var item = cljs.core.first.call(null,s__7684__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__7681_$_iter__7683.call(null,cljs.core.rest.call(null,s__7684__$2)));
}
} else {
return null;
}
break;
}
});})(s__7682__$1,vec__7688,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
,null,null));
});})(s__7682__$1,vec__7688,priority,item_set,xs__4977__auto__,temp__4425__auto__,coll__$1))
;
var fs__7224__auto__ = cljs.core.seq.call(null,iterys__7223__auto__.call(null,item_set));
if(fs__7224__auto__){
return cljs.core.concat.call(null,fs__7224__auto__,tailrecursion$priority_map$iter__7681.call(null,cljs.core.rest.call(null,s__7682__$1)));
} else {
var G__7706 = cljs.core.rest.call(null,s__7682__$1);
s__7682__$1 = G__7706;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__7227__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__6890__auto__ = self__.__hash;
if(!((h__6890__auto__ == null))){
return h__6890__auto__;
} else {
var h__6890__auto____$1 = cljs.core.hash_imap.call(null,this$__$1);
self__.__hash = h__6890__auto____$1;

return h__6890__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var item_set = self__.priority__GT_set_of_items.call(null,priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__4423__auto__)){
var current_priority = temp__4423__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority),item),priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
}
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,(function (){var iter__7227__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__7689(s__7690){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__7690__$1 = s__7690;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7690__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__7696 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__7696,(0),null);
var item_set = cljs.core.nth.call(null,vec__7696,(1),null);
var iterys__7223__auto__ = ((function (s__7690__$1,vec__7696,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__7689_$_iter__7691(s__7692){
return (new cljs.core.LazySeq(null,((function (s__7690__$1,vec__7696,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__7692__$1 = s__7692;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__7692__$1);
if(temp__4425__auto____$1){
var s__7692__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7692__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__7692__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__7694 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__7693 = (0);
while(true){
if((i__7693 < size__7226__auto__)){
var item = cljs.core._nth.call(null,c__7225__auto__,i__7693);
cljs.core.chunk_append.call(null,b__7694,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__7707 = (i__7693 + (1));
i__7693 = G__7707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7694),tailrecursion$priority_map$iter__7689_$_iter__7691.call(null,cljs.core.chunk_rest.call(null,s__7692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7694),null);
}
} else {
var item = cljs.core.first.call(null,s__7692__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__7689_$_iter__7691.call(null,cljs.core.rest.call(null,s__7692__$2)));
}
} else {
return null;
}
break;
}
});})(s__7690__$1,vec__7696,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__7690__$1,vec__7696,priority,item_set,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq.call(null,iterys__7223__auto__.call(null,item_set));
if(fs__7224__auto__){
return cljs.core.concat.call(null,fs__7224__auto__,tailrecursion$priority_map$iter__7689.call(null,cljs.core.rest.call(null,s__7690__$1)));
} else {
var G__7708 = cljs.core.rest.call(null,s__7690__$1);
s__7690__$1 = G__7708;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__7227__auto__.call(null,self__.priority__GT_set_of_items);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__7709 = null;
var G__7709__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__7709__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__7709 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__7709__2.call(this,self__,item);
case 3:
return G__7709__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__7709.cljs$core$IFn$_invoke$arity$2 = G__7709__2;
G__7709.cljs$core$IFn$_invoke$arity$3 = G__7709__3;
return G__7709;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args7680){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7680)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
return cljs.core.seq.call(null,(function (){var iter__7227__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__7697(s__7698){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__7698__$1 = s__7698;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7698__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__7704 = cljs.core.first.call(null,xs__4977__auto__);
var priority = cljs.core.nth.call(null,vec__7704,(0),null);
var item_set = cljs.core.nth.call(null,vec__7704,(1),null);
var iterys__7223__auto__ = ((function (s__7698__$1,vec__7704,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__7697_$_iter__7699(s__7700){
return (new cljs.core.LazySeq(null,((function (s__7698__$1,vec__7704,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1){
return (function (){
var s__7700__$1 = s__7700;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__7700__$1);
if(temp__4425__auto____$1){
var s__7700__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7700__$2)){
var c__7225__auto__ = cljs.core.chunk_first.call(null,s__7700__$2);
var size__7226__auto__ = cljs.core.count.call(null,c__7225__auto__);
var b__7702 = cljs.core.chunk_buffer.call(null,size__7226__auto__);
if((function (){var i__7701 = (0);
while(true){
if((i__7701 < size__7226__auto__)){
var item = cljs.core._nth.call(null,c__7225__auto__,i__7701);
cljs.core.chunk_append.call(null,b__7702,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__7710 = (i__7701 + (1));
i__7701 = G__7710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7702),tailrecursion$priority_map$iter__7697_$_iter__7699.call(null,cljs.core.chunk_rest.call(null,s__7700__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7702),null);
}
} else {
var item = cljs.core.first.call(null,s__7700__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__7697_$_iter__7699.call(null,cljs.core.rest.call(null,s__7700__$2)));
}
} else {
return null;
}
break;
}
});})(s__7698__$1,vec__7704,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
,null,null));
});})(s__7698__$1,vec__7704,priority,item_set,xs__4977__auto__,temp__4425__auto__,sets,this$__$1))
;
var fs__7224__auto__ = cljs.core.seq.call(null,iterys__7223__auto__.call(null,item_set));
if(fs__7224__auto__){
return cljs.core.concat.call(null,fs__7224__auto__,tailrecursion$priority_map$iter__7697.call(null,cljs.core.rest.call(null,s__7698__$1)));
} else {
var G__7711 = cljs.core.rest.call(null,s__7698__$1);
s__7698__$1 = G__7711;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__7227__auto__.call(null,sets);
})());
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.val.call(null,entry);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null));
});
tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
return cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__7520__auto__ = [];
var len__7513__auto___7713 = arguments.length;
var i__7514__auto___7714 = (0);
while(true){
if((i__7514__auto___7714 < len__7513__auto___7713)){
args__7520__auto__.push((arguments[i__7514__auto___7714]));

var G__7715 = (i__7514__auto___7714 + (1));
i__7514__auto___7714 = G__7715;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((0) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((0)),(0))):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__7716 = cljs.core.nnext.call(null,in$);
var G__7717 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__7716;
out = G__7717;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq7712){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7712));
});
/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__7520__auto__ = [];
var len__7513__auto___7720 = arguments.length;
var i__7514__auto___7721 = (0);
while(true){
if((i__7514__auto___7721 < len__7513__auto___7720)){
args__7520__auto__.push((arguments[i__7514__auto___7721]));

var G__7722 = (i__7514__auto___7721 + (1));
i__7514__auto___7721 = G__7722;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__7723 = cljs.core.nnext.call(null,in$);
var G__7724 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__7723;
out = G__7724;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq7718){
var G__7719 = cljs.core.first.call(null,seq7718);
var seq7718__$1 = cljs.core.next.call(null,seq7718);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic(G__7719,seq7718__$1);
});

//# sourceMappingURL=priority_map.js.map