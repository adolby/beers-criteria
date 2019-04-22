// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('ajax.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('taoensso.timbre');
goog.require('app.db');
/**
 * Throw an exception if db doesn't match the spec
 */
app.events.check_and_throw = (function app$events$check_and_throw(a_spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(a_spec,db)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("spec check failed: ",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$problems,cljs.spec.alpha.explain_str(a_spec,db)], null));
}
});
app.events.check_spec_interceptor = (function (){var G__26992 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.events.check_and_throw,cljs.core.cst$kw$app$db_SLASH_db);
return (re_frame.core.after.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.after.cljs$core$IFn$_invoke$arity$1(G__26992) : re_frame.core.after.call(null,G__26992));
})();
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_db,app.events.check_spec_interceptor,(function (_,___$1){
return app.db.default_value;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$load_DASH_criteria,(function (_,p__26993){
var vec__26994 = p__26993;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26994,(0),null);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26994,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$http_DASH_xhrio,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$uri,url,cljs.core.cst$kw$timeout,(8000),cljs.core.cst$kw$response_DASH_format,(function (){var G__26997 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__26997) : ajax.core.json_response_format.call(null,G__26997));
})(),cljs.core.cst$kw$on_DASH_success,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_criteria], null)], null)], null);
}));
/**
 * Filter out metadata from results
 */
app.events.filter_results = (function app$events$filter_results(results){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (result){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(result,cljs.core.cst$kw$category,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$drugs], 0));
}),results);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialize_DASH_criteria,app.events.check_spec_interceptor,(function (db,p__26998){
var vec__26999 = p__26998;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26999,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26999,(1),null);
var criteria = cljs.core.cst$kw$criteria.cljs$core$IFn$_invoke$arity$1(result);
var dictionary = cljs.core.clj__GT_js(criteria);
var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"drugs",cljs.core.cst$kw$weight,0.7], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"category",cljs.core.cst$kw$weight,0.2], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"organ-system",cljs.core.cst$kw$weight,0.1], null)], null)], null));
var fuse = (new Fuse(dictionary,options));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.cst$kw$criteria,criteria,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fuse,fuse,cljs.core.cst$kw$results,app.events.filter_results(criteria)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$search_DASH_results,app.events.check_spec_interceptor,(function (db,p__27002){
var vec__27003 = p__27002;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27003,(0),null);
var match_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27003,(1),null);
var search_results = ((clojure.string.blank_QMARK_(match_text))?(function (){var criteria = cljs.core.cst$kw$criteria.cljs$core$IFn$_invoke$arity$1(db);
return criteria;
})():(function (){var fuse = cljs.core.cst$kw$fuse.cljs$core$IFn$_invoke$arity$1(db);
var results = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(fuse.search(match_text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return results;
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$results,app.events.filter_results(search_results));
}));
