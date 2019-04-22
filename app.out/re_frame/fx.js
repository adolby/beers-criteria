// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__6665 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__6666 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__6666;

try{try{var seq__6667 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6668 = null;
var count__6669 = (0);
var i__6670 = (0);
while(true){
if((i__6670 < count__6669)){
var vec__6677 = chunk__6668.cljs$core$IIndexed$_nth$arity$2(null,i__6670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6677,(1),null);
var temp__5718__auto___6699 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6699)){
var effect_fn_6700 = temp__5718__auto___6699;
(effect_fn_6700.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6700.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6700.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6701 = seq__6667;
var G__6702 = chunk__6668;
var G__6703 = count__6669;
var G__6704 = (i__6670 + (1));
seq__6667 = G__6701;
chunk__6668 = G__6702;
count__6669 = G__6703;
i__6670 = G__6704;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6667);
if(temp__5720__auto__){
var seq__6667__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6667__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6667__$1);
var G__6705 = cljs.core.chunk_rest(seq__6667__$1);
var G__6706 = c__4550__auto__;
var G__6707 = cljs.core.count(c__4550__auto__);
var G__6708 = (0);
seq__6667 = G__6705;
chunk__6668 = G__6706;
count__6669 = G__6707;
i__6670 = G__6708;
continue;
} else {
var vec__6680 = cljs.core.first(seq__6667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6680,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6680,(1),null);
var temp__5718__auto___6709 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6709)){
var effect_fn_6710 = temp__5718__auto___6709;
(effect_fn_6710.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6710.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6710.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6711 = cljs.core.next(seq__6667__$1);
var G__6712 = null;
var G__6713 = (0);
var G__6714 = (0);
seq__6667 = G__6711;
chunk__6668 = G__6712;
count__6669 = G__6713;
i__6670 = G__6714;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__6485__auto___6715 = re_frame.interop.now();
var duration__6486__auto___6716 = (end__6485__auto___6715 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__6486__auto___6716,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__6485__auto___6715);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__6665;
}} else {
var seq__6683 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__6684 = null;
var count__6685 = (0);
var i__6686 = (0);
while(true){
if((i__6686 < count__6685)){
var vec__6693 = chunk__6684.cljs$core$IIndexed$_nth$arity$2(null,i__6686);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6693,(1),null);
var temp__5718__auto___6717 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6717)){
var effect_fn_6718 = temp__5718__auto___6717;
(effect_fn_6718.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6718.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6718.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6719 = seq__6683;
var G__6720 = chunk__6684;
var G__6721 = count__6685;
var G__6722 = (i__6686 + (1));
seq__6683 = G__6719;
chunk__6684 = G__6720;
count__6685 = G__6721;
i__6686 = G__6722;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6683);
if(temp__5720__auto__){
var seq__6683__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6683__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6683__$1);
var G__6723 = cljs.core.chunk_rest(seq__6683__$1);
var G__6724 = c__4550__auto__;
var G__6725 = cljs.core.count(c__4550__auto__);
var G__6726 = (0);
seq__6683 = G__6723;
chunk__6684 = G__6724;
count__6685 = G__6725;
i__6686 = G__6726;
continue;
} else {
var vec__6696 = cljs.core.first(seq__6683__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6696,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6696,(1),null);
var temp__5718__auto___6727 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___6727)){
var effect_fn_6728 = temp__5718__auto___6727;
(effect_fn_6728.cljs$core$IFn$_invoke$arity$1 ? effect_fn_6728.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_6728.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__6729 = cljs.core.next(seq__6683__$1);
var G__6730 = null;
var G__6731 = (0);
var G__6732 = (0);
seq__6683 = G__6729;
chunk__6684 = G__6730;
count__6685 = G__6731;
i__6686 = G__6732;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__6733 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6734 = null;
var count__6735 = (0);
var i__6736 = (0);
while(true){
if((i__6736 < count__6735)){
var map__6741 = chunk__6734.cljs$core$IIndexed$_nth$arity$2(null,i__6736);
var map__6741__$1 = (((((!((map__6741 == null))))?(((((map__6741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6741):map__6741);
var effect = map__6741__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6741__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6741__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6733,chunk__6734,count__6735,i__6736,map__6741,map__6741__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6733,chunk__6734,count__6735,i__6736,map__6741,map__6741__$1,effect,ms,dispatch))
,ms);
}


var G__6745 = seq__6733;
var G__6746 = chunk__6734;
var G__6747 = count__6735;
var G__6748 = (i__6736 + (1));
seq__6733 = G__6745;
chunk__6734 = G__6746;
count__6735 = G__6747;
i__6736 = G__6748;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6733);
if(temp__5720__auto__){
var seq__6733__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6733__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6733__$1);
var G__6749 = cljs.core.chunk_rest(seq__6733__$1);
var G__6750 = c__4550__auto__;
var G__6751 = cljs.core.count(c__4550__auto__);
var G__6752 = (0);
seq__6733 = G__6749;
chunk__6734 = G__6750;
count__6735 = G__6751;
i__6736 = G__6752;
continue;
} else {
var map__6743 = cljs.core.first(seq__6733__$1);
var map__6743__$1 = (((((!((map__6743 == null))))?(((((map__6743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6743):map__6743);
var effect = map__6743__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6743__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6743__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__6733,chunk__6734,count__6735,i__6736,map__6743,map__6743__$1,effect,ms,dispatch,seq__6733__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__6733,chunk__6734,count__6735,i__6736,map__6743,map__6743__$1,effect,ms,dispatch,seq__6733__$1,temp__5720__auto__))
,ms);
}


var G__6753 = cljs.core.next(seq__6733__$1);
var G__6754 = null;
var G__6755 = (0);
var G__6756 = (0);
seq__6733 = G__6753;
chunk__6734 = G__6754;
count__6735 = G__6755;
i__6736 = G__6756;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__6757 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__6758 = null;
var count__6759 = (0);
var i__6760 = (0);
while(true){
if((i__6760 < count__6759)){
var event = chunk__6758.cljs$core$IIndexed$_nth$arity$2(null,i__6760);
re_frame.router.dispatch(event);


var G__6761 = seq__6757;
var G__6762 = chunk__6758;
var G__6763 = count__6759;
var G__6764 = (i__6760 + (1));
seq__6757 = G__6761;
chunk__6758 = G__6762;
count__6759 = G__6763;
i__6760 = G__6764;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6757);
if(temp__5720__auto__){
var seq__6757__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6757__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6757__$1);
var G__6765 = cljs.core.chunk_rest(seq__6757__$1);
var G__6766 = c__4550__auto__;
var G__6767 = cljs.core.count(c__4550__auto__);
var G__6768 = (0);
seq__6757 = G__6765;
chunk__6758 = G__6766;
count__6759 = G__6767;
i__6760 = G__6768;
continue;
} else {
var event = cljs.core.first(seq__6757__$1);
re_frame.router.dispatch(event);


var G__6769 = cljs.core.next(seq__6757__$1);
var G__6770 = null;
var G__6771 = (0);
var G__6772 = (0);
seq__6757 = G__6769;
chunk__6758 = G__6770;
count__6759 = G__6771;
i__6760 = G__6772;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__6773 = cljs.core.seq(value);
var chunk__6774 = null;
var count__6775 = (0);
var i__6776 = (0);
while(true){
if((i__6776 < count__6775)){
var event = chunk__6774.cljs$core$IIndexed$_nth$arity$2(null,i__6776);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6777 = seq__6773;
var G__6778 = chunk__6774;
var G__6779 = count__6775;
var G__6780 = (i__6776 + (1));
seq__6773 = G__6777;
chunk__6774 = G__6778;
count__6775 = G__6779;
i__6776 = G__6780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__6773);
if(temp__5720__auto__){
var seq__6773__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6773__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__6773__$1);
var G__6781 = cljs.core.chunk_rest(seq__6773__$1);
var G__6782 = c__4550__auto__;
var G__6783 = cljs.core.count(c__4550__auto__);
var G__6784 = (0);
seq__6773 = G__6781;
chunk__6774 = G__6782;
count__6775 = G__6783;
i__6776 = G__6784;
continue;
} else {
var event = cljs.core.first(seq__6773__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__6785 = cljs.core.next(seq__6773__$1);
var G__6786 = null;
var G__6787 = (0);
var G__6788 = (0);
seq__6773 = G__6785;
chunk__6774 = G__6786;
count__6775 = G__6787;
i__6776 = G__6788;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
