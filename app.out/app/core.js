// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.core');
goog.require('app.views');
goog.require('app.events');
goog.require('app.subs');
/**
 * Application entry point
 */
app.core.main = (function app$core$main(){
var G__27008_27010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__27008_27010) : re_frame.core.dispatch_sync.call(null,G__27008_27010));

var criteria_url_27011 = "data/beers-2015-metadata-merged.json";
var G__27009_27012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$load_DASH_criteria,criteria_url_27011], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27009_27012) : re_frame.core.dispatch.call(null,G__27009_27012));

app.views.render_results();

return app.views.listen_search_input();
});
goog.exportSymbol('app.core.main', app.core.main);
