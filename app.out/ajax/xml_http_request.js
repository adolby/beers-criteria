// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__7190 = e.target.readyState;
var fexpr__7189 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__7189.cljs$core$IFn$_invoke$arity$1 ? fexpr__7189.cljs$core$IFn$_invoke$arity$1(G__7190) : fexpr__7189.call(null,G__7190));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7192,handler){
var map__7193 = p__7192;
var map__7193__$1 = (((((!((map__7193 == null))))?(((((map__7193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7193):map__7193);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7193__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7193__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7193__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7193__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7193__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7193__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7193__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7193,map__7193__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7191_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__7191_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__7193,map__7193__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___7211 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___7211)){
var response_type_7212 = temp__5720__auto___7211;
this$__$1.responseType = cljs.core.name(response_type_7212);
} else {
}

var seq__7195_7213 = cljs.core.seq(headers);
var chunk__7196_7214 = null;
var count__7197_7215 = (0);
var i__7198_7216 = (0);
while(true){
if((i__7198_7216 < count__7197_7215)){
var vec__7205_7217 = chunk__7196_7214.cljs$core$IIndexed$_nth$arity$2(null,i__7198_7216);
var k_7218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7205_7217,(0),null);
var v_7219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7205_7217,(1),null);
this$__$1.setRequestHeader(k_7218,v_7219);


var G__7220 = seq__7195_7213;
var G__7221 = chunk__7196_7214;
var G__7222 = count__7197_7215;
var G__7223 = (i__7198_7216 + (1));
seq__7195_7213 = G__7220;
chunk__7196_7214 = G__7221;
count__7197_7215 = G__7222;
i__7198_7216 = G__7223;
continue;
} else {
var temp__5720__auto___7224 = cljs.core.seq(seq__7195_7213);
if(temp__5720__auto___7224){
var seq__7195_7225__$1 = temp__5720__auto___7224;
if(cljs.core.chunked_seq_QMARK_(seq__7195_7225__$1)){
var c__4550__auto___7226 = cljs.core.chunk_first(seq__7195_7225__$1);
var G__7227 = cljs.core.chunk_rest(seq__7195_7225__$1);
var G__7228 = c__4550__auto___7226;
var G__7229 = cljs.core.count(c__4550__auto___7226);
var G__7230 = (0);
seq__7195_7213 = G__7227;
chunk__7196_7214 = G__7228;
count__7197_7215 = G__7229;
i__7198_7216 = G__7230;
continue;
} else {
var vec__7208_7231 = cljs.core.first(seq__7195_7225__$1);
var k_7232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208_7231,(0),null);
var v_7233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7208_7231,(1),null);
this$__$1.setRequestHeader(k_7232,v_7233);


var G__7234 = cljs.core.next(seq__7195_7225__$1);
var G__7235 = null;
var G__7236 = (0);
var G__7237 = (0);
seq__7195_7213 = G__7234;
chunk__7196_7214 = G__7235;
count__7197_7215 = G__7236;
i__7198_7216 = G__7237;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
