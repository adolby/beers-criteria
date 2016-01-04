// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__15475 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15475) : cljs.core.atom.call(null,G__15475));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__15478){
var vec__15479 = p__15478;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15479,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__15481 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__15481)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__15481)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__15481)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__15481)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__15481)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15481)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__15482){
var map__15486 = p__15482;
var map__15486__$1 = ((((!((map__15486 == null)))?((((map__15486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15486):map__15486);
var request = map__15486__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15486__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15486__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15486__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__5168__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__15488 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__15488,default_headers);

cljs_http.core.apply_response_type_BANG_(G__15488,response_type);

G__15488.setTimeoutInterval(timeout);

G__15488.setWithCredentials(send_credentials);

return G__15488;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__15489){
var map__15517 = p__15489;
var map__15517__$1 = ((((!((map__15517 == null)))?((((map__15517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15517):map__15517);
var request = map__15517__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5168__auto__ = request_method;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__15519 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__15519) : cljs_http.core.error_kw.call(null,G__15519));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__12674__auto___15544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_15530){
var state_val_15531 = (state_15530[(1)]);
if((state_val_15531 === (1))){
var state_15530__$1 = state_15530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15530__$1,(2),cancel);
} else {
if((state_val_15531 === (2))){
var inst_15521 = (state_15530[(2)]);
var inst_15522 = xhr__$1.isComplete();
var inst_15523 = cljs.core.not(inst_15522);
var state_15530__$1 = (function (){var statearr_15532 = state_15530;
(statearr_15532[(7)] = inst_15521);

return statearr_15532;
})();
if(inst_15523){
var statearr_15533_15545 = state_15530__$1;
(statearr_15533_15545[(1)] = (3));

} else {
var statearr_15534_15546 = state_15530__$1;
(statearr_15534_15546[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15531 === (3))){
var inst_15525 = xhr__$1.abort();
var state_15530__$1 = state_15530;
var statearr_15535_15547 = state_15530__$1;
(statearr_15535_15547[(2)] = inst_15525);

(statearr_15535_15547[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15531 === (4))){
var state_15530__$1 = state_15530;
var statearr_15536_15548 = state_15530__$1;
(statearr_15536_15548[(2)] = null);

(statearr_15536_15548[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15531 === (5))){
var inst_15528 = (state_15530[(2)]);
var state_15530__$1 = state_15530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15530__$1,inst_15528);
} else {
return null;
}
}
}
}
}
});})(c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__12560__auto__,c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__12561__auto__ = null;
var cljs_http$core$xhr_$_state_machine__12561__auto____0 = (function (){
var statearr_15540 = [null,null,null,null,null,null,null,null];
(statearr_15540[(0)] = cljs_http$core$xhr_$_state_machine__12561__auto__);

(statearr_15540[(1)] = (1));

return statearr_15540;
});
var cljs_http$core$xhr_$_state_machine__12561__auto____1 = (function (state_15530){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15530);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15541){if((e15541 instanceof Object)){
var ex__12564__auto__ = e15541;
var statearr_15542_15549 = state_15530;
(statearr_15542_15549[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15530);

return cljs.core.cst$kw$recur;
} else {
throw e15541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15550 = state_15530;
state_15530 = G__15550;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__12561__auto__ = function(state_15530){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__12561__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__12561__auto____1.call(this,state_15530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__12561__auto____0;
cljs_http$core$xhr_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__12561__auto____1;
return cljs_http$core$xhr_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__12676__auto__ = (function (){var statearr_15543 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___15544);

return statearr_15543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___15544,channel,request_url,method,headers__$1,xhr__$1,map__15517,map__15517__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__15551){
var map__15568 = p__15551;
var map__15568__$1 = ((((!((map__15568 == null)))?((((map__15568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15568):map__15568);
var request = map__15568__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15568__$1,cljs.core.cst$kw$cancel);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_15584 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_15584], null));

if(cljs.core.truth_(cancel)){
var c__12674__auto___15585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel){
return (function (state_15574){
var state_val_15575 = (state_15574[(1)]);
if((state_val_15575 === (1))){
var state_15574__$1 = state_15574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15574__$1,(2),cancel);
} else {
if((state_val_15575 === (2))){
var inst_15571 = (state_15574[(2)]);
var inst_15572 = jsonp__$1.cancel(req_15584);
var state_15574__$1 = (function (){var statearr_15576 = state_15574;
(statearr_15576[(7)] = inst_15571);

return statearr_15576;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15574__$1,inst_15572);
} else {
return null;
}
}
});})(c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__12560__auto__,c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__12561__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__12561__auto____0 = (function (){
var statearr_15580 = [null,null,null,null,null,null,null,null];
(statearr_15580[(0)] = cljs_http$core$jsonp_$_state_machine__12561__auto__);

(statearr_15580[(1)] = (1));

return statearr_15580;
});
var cljs_http$core$jsonp_$_state_machine__12561__auto____1 = (function (state_15574){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15574);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15581){if((e15581 instanceof Object)){
var ex__12564__auto__ = e15581;
var statearr_15582_15586 = state_15574;
(statearr_15582_15586[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15574);

return cljs.core.cst$kw$recur;
} else {
throw e15581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15587 = state_15574;
state_15574 = G__15587;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__12561__auto__ = function(state_15574){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__12561__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__12561__auto____1.call(this,state_15574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__12561__auto____0;
cljs_http$core$jsonp_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__12561__auto____1;
return cljs_http$core$jsonp_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel))
})();
var state__12676__auto__ = (function (){var statearr_15583 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___15585);

return statearr_15583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___15585,req_15584,channel,jsonp__$1,map__15568,map__15568__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__15588){
var map__15591 = p__15588;
var map__15591__$1 = ((((!((map__15591 == null)))?((((map__15591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15591):map__15591);
var request__$1 = map__15591__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15591__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
