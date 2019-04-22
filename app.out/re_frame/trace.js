// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__6507){
var map__6508 = p__6507;
var map__6508__$1 = (((((!((map__6508 == null))))?(((((map__6508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__6508):map__6508);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6508__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6508__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6508__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6508__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__6510_6534 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__6511_6535 = null;
var count__6512_6536 = (0);
var i__6513_6537 = (0);
while(true){
if((i__6513_6537 < count__6512_6536)){
var vec__6524_6538 = chunk__6511_6535.cljs$core$IIndexed$_nth$arity$2(null,i__6513_6537);
var k_6539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524_6538,(0),null);
var cb_6540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6524_6538,(1),null);
try{var G__6528_6541 = cljs.core.deref(re_frame.trace.traces);
(cb_6540.cljs$core$IFn$_invoke$arity$1 ? cb_6540.cljs$core$IFn$_invoke$arity$1(G__6528_6541) : cb_6540.call(null,G__6528_6541));
}catch (e6527){var e_6542 = e6527;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6539,"while storing",cljs.core.deref(re_frame.trace.traces),e_6542], 0));
}

var G__6543 = seq__6510_6534;
var G__6544 = chunk__6511_6535;
var G__6545 = count__6512_6536;
var G__6546 = (i__6513_6537 + (1));
seq__6510_6534 = G__6543;
chunk__6511_6535 = G__6544;
count__6512_6536 = G__6545;
i__6513_6537 = G__6546;
continue;
} else {
var temp__5720__auto___6547 = cljs.core.seq(seq__6510_6534);
if(temp__5720__auto___6547){
var seq__6510_6548__$1 = temp__5720__auto___6547;
if(cljs.core.chunked_seq_QMARK_(seq__6510_6548__$1)){
var c__4550__auto___6549 = cljs.core.chunk_first(seq__6510_6548__$1);
var G__6550 = cljs.core.chunk_rest(seq__6510_6548__$1);
var G__6551 = c__4550__auto___6549;
var G__6552 = cljs.core.count(c__4550__auto___6549);
var G__6553 = (0);
seq__6510_6534 = G__6550;
chunk__6511_6535 = G__6551;
count__6512_6536 = G__6552;
i__6513_6537 = G__6553;
continue;
} else {
var vec__6529_6554 = cljs.core.first(seq__6510_6548__$1);
var k_6555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6529_6554,(0),null);
var cb_6556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6529_6554,(1),null);
try{var G__6533_6557 = cljs.core.deref(re_frame.trace.traces);
(cb_6556.cljs$core$IFn$_invoke$arity$1 ? cb_6556.cljs$core$IFn$_invoke$arity$1(G__6533_6557) : cb_6556.call(null,G__6533_6557));
}catch (e6532){var e_6558 = e6532;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_6555,"while storing",cljs.core.deref(re_frame.trace.traces),e_6558], 0));
}

var G__6559 = cljs.core.next(seq__6510_6548__$1);
var G__6560 = null;
var G__6561 = (0);
var G__6562 = (0);
seq__6510_6534 = G__6559;
chunk__6511_6535 = G__6560;
count__6512_6536 = G__6561;
i__6513_6537 = G__6562;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
