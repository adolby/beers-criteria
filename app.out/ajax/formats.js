// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ajax.formats');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.interceptors');
goog.require('ajax.util');
goog.require('ajax.protocols');
/**
 * This will literally return whatever the underlying implementation
 * considers has been sent. Obviously, this is highly implementation
 * dependent, gives different results depending on your platform but
 * is nonetheless really rather useful.
 */
ajax.formats.raw_response_format = (function ajax$formats$raw_response_format(var_args){
var G__7162 = arguments.length;
switch (G__7162) {
case 0:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.formats.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.formats.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.formats.text_request_format = (function ajax$formats$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.util.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain; charset=utf-8"], null);
});
ajax.formats.text_response_format = ajax.formats.raw_response_format;
ajax.formats.get_format = (function ajax$formats$get_format(var_args){
var G__7165 = arguments.length;
switch (G__7165) {
case 2:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_(format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.formats.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){

if((((format_entry == null)) || (cljs.core.map_QMARK_(format_entry)))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.formats.get_format.cljs$lang$maxFixedArity = 2;

ajax.formats.get_accept_entries = (function ajax$formats$get_accept_entries(var_args){
var G__7168 = arguments.length;
switch (G__7168) {
case 2:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.formats.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.formats.content_type_matches = (function ajax$formats$content_type_matches(var_args){
var G__7171 = arguments.length;
switch (G__7171) {
case 2:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});

ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0))));
});
});

ajax.formats.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.formats.detect_content_type = (function ajax$formats$detect_content_type(var_args){
var G__7174 = arguments.length;
switch (G__7174) {
case 3:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.formats.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.formats.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.formats.get_default_format = (function ajax$formats$get_default_format(response,p__7176){
var map__7177 = p__7176;
var map__7177__$1 = (((((!((map__7177 == null))))?(((((map__7177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7177):map__7177);
var request = map__7177__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7177__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.formats.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.util.get_content_type(response),request);
return ajax.formats.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.formats.detect_response_format_read = (function ajax$formats$detect_response_format_read(var_args){
var G__7180 = arguments.length;
switch (G__7180) {
case 2:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.formats.get_default_format(response,request);
var fexpr__7181 = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__7181.cljs$core$IFn$_invoke$arity$1 ? fexpr__7181.cljs$core$IFn$_invoke$arity$1(response) : fexpr__7181.call(null,response));
});

ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.formats.get_default_format(response,request);
var fexpr__7182 = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__7182.cljs$core$IFn$_invoke$arity$1 ? fexpr__7182.cljs$core$IFn$_invoke$arity$1(response) : fexpr__7182.call(null,response));
});
});

ajax.formats.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.formats.accept_header = (function ajax$formats$accept_header(p__7184){
var map__7185 = p__7184;
var map__7185__$1 = (((((!((map__7185 == null))))?(((((map__7185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7185):map__7185);
var request = map__7185__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7185__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_format], 0));
} else {
return ajax.formats.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.formats.detect_response_format = (function ajax$formats$detect_response_format(opts){

var accept = ajax.formats.accept_header(opts);
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.formats.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,["(from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),")"].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});
