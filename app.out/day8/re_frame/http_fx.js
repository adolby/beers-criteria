// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__26952){
var vec__26953 = p__26952;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26953,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26953,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,xhrio.getLastUri(),cljs.core.cst$kw$last_DASH_method,xhrio.lastMethod_,cljs.core.cst$kw$last_DASH_error,xhrio.getLastError(),cljs.core.cst$kw$last_DASH_error_DASH_code,xhrio.getLastErrorCode(),cljs.core.cst$kw$debug_DASH_message,(function (){var G__26956 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__26956);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__26959){
var map__26960 = p__26959;
var map__26960__$1 = (((((!((map__26960 == null))))?(((((map__26960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26960):map__26960);
var request = map__26960__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26960__$1,cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_success], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26960__$1,cljs.core.cst$kw$on_DASH_failure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$http_DASH_no_DASH_on_DASH_failure], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$api,api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$handler,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__26960,map__26960__$1,request,on_success,on_failure){
return (function (p1__26957_SHARP_){
var G__26962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__26957_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26962) : re_frame.core.dispatch.call(null,G__26962));
});})(api,map__26960,map__26960__$1,request,on_success,on_failure))
,((function (api,map__26960,map__26960__$1,request,on_success,on_failure){
return (function (p1__26958_SHARP_){
var G__26963 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__26958_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__26963) : re_frame.core.dispatch.call(null,G__26963));
});})(api,map__26960,map__26960__$1,request,on_success,on_failure))
,api)], 0)),cljs.core.cst$kw$on_DASH_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_failure], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__26964 = cljs.core.seq(seq_request_maps);
var chunk__26965 = null;
var count__26966 = (0);
var i__26967 = (0);
while(true){
if((i__26967 < count__26966)){
var request__$1 = chunk__26965.cljs$core$IIndexed$_nth$arity$2(null,i__26967);
var G__26970_26972 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__26970_26972) : ajax.core.ajax_request.call(null,G__26970_26972));


var G__26973 = seq__26964;
var G__26974 = chunk__26965;
var G__26975 = count__26966;
var G__26976 = (i__26967 + (1));
seq__26964 = G__26973;
chunk__26965 = G__26974;
count__26966 = G__26975;
i__26967 = G__26976;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__26964);
if(temp__5720__auto__){
var seq__26964__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26964__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26964__$1);
var G__26977 = cljs.core.chunk_rest(seq__26964__$1);
var G__26978 = c__4550__auto__;
var G__26979 = cljs.core.count(c__4550__auto__);
var G__26980 = (0);
seq__26964 = G__26977;
chunk__26965 = G__26978;
count__26966 = G__26979;
i__26967 = G__26980;
continue;
} else {
var request__$1 = cljs.core.first(seq__26964__$1);
var G__26971_26981 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__26971_26981) : ajax.core.ajax_request.call(null,G__26971_26981));


var G__26982 = cljs.core.next(seq__26964__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26964 = G__26982;
chunk__26965 = G__26983;
count__26966 = G__26984;
i__26967 = G__26985;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__26986_26988 = cljs.core.cst$kw$http_DASH_xhrio;
var G__26987_26989 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__26986_26988,G__26987_26989) : re_frame.core.reg_fx.call(null,G__26986_26988,G__26987_26989));
