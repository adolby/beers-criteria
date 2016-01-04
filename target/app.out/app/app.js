// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('app.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('kioo.reagent');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
app.app.all_results_url = "data/beers-2015.json";
app.app.query_url = "http://168.235.155.245/beers/2015/_search";
app.app.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$all_DASH_results,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$results,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$cache,cljs.core.PersistentArrayMap.EMPTY], null));
app.app.update_results = (function app$app$update_results(results){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.app.state,cljs.core.assoc,cljs.core.cst$kw$results,results);
});
app.app.update_cache = (function app$app$update_cache(key,new_results){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cache,key], null),new_results);
});
app.app.load_all_results = (function app$app$load_all_results(url){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_18635){
var state_val_18636 = (state_18635[(1)]);
if((state_val_18636 === (1))){
var inst_18626 = cljs_http.client.get(url);
var state_18635__$1 = state_18635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18635__$1,(2),inst_18626);
} else {
if((state_val_18636 === (2))){
var inst_18628 = (state_18635[(2)]);
var inst_18629 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(inst_18628);
var inst_18630 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.app.state,cljs.core.assoc,cljs.core.cst$kw$all_DASH_results,inst_18629);
var inst_18631 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_18632 = cljs.core.cst$kw$all_DASH_results.cljs$core$IFn$_invoke$arity$1(inst_18631);
var inst_18633 = app.app.update_results(inst_18632);
var state_18635__$1 = (function (){var statearr_18637 = state_18635;
(statearr_18637[(7)] = inst_18630);

return statearr_18637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18635__$1,inst_18633);
} else {
return null;
}
}
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var app$app$load_all_results_$_state_machine__12561__auto__ = null;
var app$app$load_all_results_$_state_machine__12561__auto____0 = (function (){
var statearr_18641 = [null,null,null,null,null,null,null,null];
(statearr_18641[(0)] = app$app$load_all_results_$_state_machine__12561__auto__);

(statearr_18641[(1)] = (1));

return statearr_18641;
});
var app$app$load_all_results_$_state_machine__12561__auto____1 = (function (state_18635){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18635);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18642){if((e18642 instanceof Object)){
var ex__12564__auto__ = e18642;
var statearr_18643_18645 = state_18635;
(statearr_18643_18645[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18635);

return cljs.core.cst$kw$recur;
} else {
throw e18642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18646 = state_18635;
state_18635 = G__18646;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$load_all_results_$_state_machine__12561__auto__ = function(state_18635){
switch(arguments.length){
case 0:
return app$app$load_all_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$load_all_results_$_state_machine__12561__auto____1.call(this,state_18635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$load_all_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$load_all_results_$_state_machine__12561__auto____0;
app$app$load_all_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$load_all_results_$_state_machine__12561__auto____1;
return app$app$load_all_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_18644 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_18644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});
app.app.labels = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$category_DASH_drugs,"Therapeutic Category: Drug(s)",cljs.core.cst$kw$organ_DASH_system,"Organ System",cljs.core.cst$kw$rationale,"Rationale",cljs.core.cst$kw$recommendation,"Recommendation",cljs.core.cst$kw$quality_DASH_of_DASH_evidence,"Quality Of Evidence",cljs.core.cst$kw$strength_DASH_of_DASH_recommendation,"Strength of Recommendation",cljs.core.cst$kw$evidence,"Evidence"], null);
app.app.result_data = (function app$app$result_data(p__18648){
var vec__18652 = p__18648;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18652,(1),null);
var ch18647 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper(kioo.reagent.make_dom).call(null,(function (){var G__18653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(app.app.labels) : k.call(null,app.app.labels))], null);
var G__18654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,v], null);
return (kioo.reagent.content.cljs$core$IFn$_invoke$arity$2 ? kioo.reagent.content.cljs$core$IFn$_invoke$arity$2(G__18653,G__18654) : kioo.reagent.content.call(null,G__18653,G__18654));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"row",cljs.core.cst$kw$style,null], null),cljs.core.cst$kw$tag,cljs.core.cst$kw$ul,cljs.core.cst$kw$content,kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Category"], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value"], null))))], null))], null)))], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ch18647))){
return cljs.core.first(ch18647);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,null,ch18647);
}
});
app.app.result_card = (function app$app$result_card(results){
var ch18655 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper(kioo.reagent.make_dom).call(null,(function (){var G__18657 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.app.result_data,results);
return (kioo.reagent.content.cljs$core$IFn$_invoke$arity$1 ? kioo.reagent.content.cljs$core$IFn$_invoke$arity$1(G__18657) : kioo.reagent.content.call(null,G__18657));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"card",cljs.core.cst$kw$style,null], null),cljs.core.cst$kw$tag,cljs.core.cst$kw$div,cljs.core.cst$kw$content,kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"row",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Category"], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value"], null))))], null))))], null))], null)))], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ch18655))){
return cljs.core.first(ch18655);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,null,ch18655);
}
});
app.app.result_cards = (function app$app$result_cards(){
var ch18658 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.handle_wrapper(kioo.reagent.make_dom).call(null,(function (){var G__18660 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.app.result_card,cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state))));
return (kioo.reagent.content.cljs$core$IFn$_invoke$arity$1 ? kioo.reagent.content.cljs$core$IFn$_invoke$arity$1(G__18660) : kioo.reagent.content.call(null,G__18660));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"cards",cljs.core.cst$kw$style,null], null),cljs.core.cst$kw$tag,cljs.core.cst$kw$section,cljs.core.cst$kw$content,kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"card",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"row",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Category"], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Value"], null))))], null))))], null))))], null))], null)))], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ch18658))){
return cljs.core.first(ch18658);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,null,ch18658);
}
});
app.app.page = (function app$app$page(){
var ch18661 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.header,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.nav,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"brand",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beers Criteria"], null))))], null))))], null))))], null))))], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.main,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"search-section",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.input,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$className,"search-field",cljs.core.cst$kw$type,"search",cljs.core.cst$kw$required,"",cljs.core.cst$kw$autoFocus,"",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"search-label",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"search-label-content",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Search Drug or Theraupeutic Category"], null))))], null))))], null)))),kioo.core.handle_wrapper(kioo.reagent.make_dom).call(null,(function (){var G__18663 = app.app.result_cards();
return (kioo.reagent.content.cljs$core$IFn$_invoke$arity$1 ? kioo.reagent.content.cljs$core$IFn$_invoke$arity$1(G__18663) : kioo.reagent.content.call(null,G__18663));
})().call(null,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"results",cljs.core.cst$kw$style,null], null),cljs.core.cst$kw$tag,cljs.core.cst$kw$div,cljs.core.cst$kw$content,kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY)], null)))], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.footer,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.script,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$src,"app.js",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY)))], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ch18661))){
return cljs.core.first(ch18661);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,null,ch18661);
}
});
app.app.throttle = (function app$app$throttle(in$,ms_delay){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___18730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18730,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18730,out){
return (function (state_18713){
var state_val_18714 = (state_18713[(1)]);
if((state_val_18714 === (1))){
var state_18713__$1 = state_18713;
var statearr_18715_18731 = state_18713__$1;
(statearr_18715_18731[(2)] = null);

(statearr_18715_18731[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18714 === (2))){
var state_18713__$1 = state_18713;
var statearr_18716_18732 = state_18713__$1;
(statearr_18716_18732[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18714 === (3))){
var inst_18711 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18713__$1,inst_18711);
} else {
if((state_val_18714 === (4))){
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18713__$1,(8),in$);
} else {
if((state_val_18714 === (5))){
var state_18713__$1 = state_18713;
var statearr_18718_18733 = state_18713__$1;
(statearr_18718_18733[(2)] = null);

(statearr_18718_18733[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18714 === (6))){
var inst_18709 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
var statearr_18719_18734 = state_18713__$1;
(statearr_18719_18734[(2)] = inst_18709);

(statearr_18719_18734[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18714 === (7))){
var inst_18702 = (state_18713[(2)]);
var inst_18703 = cljs.core.async.timeout(ms_delay);
var state_18713__$1 = (function (){var statearr_18720 = state_18713;
(statearr_18720[(7)] = inst_18702);

return statearr_18720;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18713__$1,(9),inst_18703);
} else {
if((state_val_18714 === (8))){
var inst_18700 = (state_18713[(2)]);
var state_18713__$1 = state_18713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18713__$1,(7),out,inst_18700);
} else {
if((state_val_18714 === (9))){
var inst_18705 = (state_18713[(2)]);
var state_18713__$1 = (function (){var statearr_18721 = state_18713;
(statearr_18721[(8)] = inst_18705);

return statearr_18721;
})();
var statearr_18722_18735 = state_18713__$1;
(statearr_18722_18735[(2)] = null);

(statearr_18722_18735[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__12674__auto___18730,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18730,out){
return (function() {
var app$app$throttle_$_state_machine__12561__auto__ = null;
var app$app$throttle_$_state_machine__12561__auto____0 = (function (){
var statearr_18726 = [null,null,null,null,null,null,null,null,null];
(statearr_18726[(0)] = app$app$throttle_$_state_machine__12561__auto__);

(statearr_18726[(1)] = (1));

return statearr_18726;
});
var app$app$throttle_$_state_machine__12561__auto____1 = (function (state_18713){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18713);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18727){if((e18727 instanceof Object)){
var ex__12564__auto__ = e18727;
var statearr_18728_18736 = state_18713;
(statearr_18728_18736[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18713);

return cljs.core.cst$kw$recur;
} else {
throw e18727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18737 = state_18713;
state_18713 = G__18737;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$throttle_$_state_machine__12561__auto__ = function(state_18713){
switch(arguments.length){
case 0:
return app$app$throttle_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$throttle_$_state_machine__12561__auto____1.call(this,state_18713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$throttle_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$throttle_$_state_machine__12561__auto____0;
app$app$throttle_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$throttle_$_state_machine__12561__auto____1;
return app$app$throttle_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18730,out))
})();
var state__12676__auto__ = (function (){var statearr_18729 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18730);

return statearr_18729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18730,out))
);


return out;
});
app.app.get_results = (function app$app$get_results(in$){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___18828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18828,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18828,out){
return (function (state_18811){
var state_val_18812 = (state_18811[(1)]);
if((state_val_18812 === (1))){
var state_18811__$1 = state_18811;
var statearr_18813_18829 = state_18811__$1;
(statearr_18813_18829[(2)] = null);

(statearr_18813_18829[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18812 === (2))){
var state_18811__$1 = state_18811;
var statearr_18814_18830 = state_18811__$1;
(statearr_18814_18830[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18812 === (3))){
var inst_18809 = (state_18811[(2)]);
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18811__$1,inst_18809);
} else {
if((state_val_18812 === (4))){
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18811__$1,(7),in$);
} else {
if((state_val_18812 === (5))){
var state_18811__$1 = state_18811;
var statearr_18816_18831 = state_18811__$1;
(statearr_18816_18831[(2)] = null);

(statearr_18816_18831[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18812 === (6))){
var inst_18807 = (state_18811[(2)]);
var state_18811__$1 = state_18811;
var statearr_18817_18832 = state_18811__$1;
(statearr_18817_18832[(2)] = inst_18807);

(statearr_18817_18832[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18812 === (7))){
var inst_18789 = (state_18811[(7)]);
var inst_18787 = (state_18811[(2)]);
var inst_18788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18787,(0),null);
var inst_18789__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18787,(1),null);
var inst_18790 = [cljs.core.cst$kw$query_DASH_params];
var inst_18791 = ["q"];
var inst_18792 = [inst_18789__$1];
var inst_18793 = cljs.core.PersistentHashMap.fromArrays(inst_18791,inst_18792);
var inst_18794 = [inst_18793];
var inst_18795 = cljs.core.PersistentHashMap.fromArrays(inst_18790,inst_18794);
var inst_18796 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18788,cljs.core.array_seq([inst_18795], 0));
var state_18811__$1 = (function (){var statearr_18818 = state_18811;
(statearr_18818[(7)] = inst_18789__$1);

return statearr_18818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18811__$1,(8),inst_18796);
} else {
if((state_val_18812 === (8))){
var inst_18789 = (state_18811[(7)]);
var inst_18798 = (state_18811[(2)]);
var inst_18799 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18800 = [inst_18789,inst_18798];
var inst_18801 = (new cljs.core.PersistentVector(null,2,(5),inst_18799,inst_18800,null));
var state_18811__$1 = state_18811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18811__$1,(9),out,inst_18801);
} else {
if((state_val_18812 === (9))){
var inst_18803 = (state_18811[(2)]);
var state_18811__$1 = (function (){var statearr_18819 = state_18811;
(statearr_18819[(8)] = inst_18803);

return statearr_18819;
})();
var statearr_18820_18833 = state_18811__$1;
(statearr_18820_18833[(2)] = null);

(statearr_18820_18833[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__12674__auto___18828,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18828,out){
return (function() {
var app$app$get_results_$_state_machine__12561__auto__ = null;
var app$app$get_results_$_state_machine__12561__auto____0 = (function (){
var statearr_18824 = [null,null,null,null,null,null,null,null,null];
(statearr_18824[(0)] = app$app$get_results_$_state_machine__12561__auto__);

(statearr_18824[(1)] = (1));

return statearr_18824;
});
var app$app$get_results_$_state_machine__12561__auto____1 = (function (state_18811){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18811);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18825){if((e18825 instanceof Object)){
var ex__12564__auto__ = e18825;
var statearr_18826_18834 = state_18811;
(statearr_18826_18834[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18811);

return cljs.core.cst$kw$recur;
} else {
throw e18825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18835 = state_18811;
state_18811 = G__18835;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$get_results_$_state_machine__12561__auto__ = function(state_18811){
switch(arguments.length){
case 0:
return app$app$get_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$get_results_$_state_machine__12561__auto____1.call(this,state_18811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$get_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$get_results_$_state_machine__12561__auto____0;
app$app$get_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$get_results_$_state_machine__12561__auto____1;
return app$app$get_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18828,out))
})();
var state__12676__auto__ = (function (){var statearr_18827 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18828);

return statearr_18827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18828,out))
);


return out;
});
app.app.extract_hits = (function app$app$extract_hits(in$){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___18914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18914,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18914,out){
return (function (state_18898){
var state_val_18899 = (state_18898[(1)]);
if((state_val_18899 === (1))){
var state_18898__$1 = state_18898;
var statearr_18900_18915 = state_18898__$1;
(statearr_18900_18915[(2)] = null);

(statearr_18900_18915[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18899 === (2))){
var state_18898__$1 = state_18898;
var statearr_18901_18916 = state_18898__$1;
(statearr_18901_18916[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18899 === (3))){
var inst_18896 = (state_18898[(2)]);
var state_18898__$1 = state_18898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18898__$1,inst_18896);
} else {
if((state_val_18899 === (4))){
var state_18898__$1 = state_18898;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18898__$1,(7),in$);
} else {
if((state_val_18899 === (5))){
var state_18898__$1 = state_18898;
var statearr_18903_18917 = state_18898__$1;
(statearr_18903_18917[(2)] = null);

(statearr_18903_18917[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18899 === (6))){
var inst_18894 = (state_18898[(2)]);
var state_18898__$1 = state_18898;
var statearr_18904_18918 = state_18898__$1;
(statearr_18904_18918[(2)] = inst_18894);

(statearr_18904_18918[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18899 === (7))){
var inst_18879 = (state_18898[(2)]);
var inst_18880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18879,(0),null);
var inst_18881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18879,(1),null);
var inst_18882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18883 = [cljs.core.cst$kw$body,cljs.core.cst$kw$hits,cljs.core.cst$kw$hits];
var inst_18884 = (new cljs.core.PersistentVector(null,3,(5),inst_18882,inst_18883,null));
var inst_18885 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18881,inst_18884);
var inst_18886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18887 = [inst_18880,inst_18885];
var inst_18888 = (new cljs.core.PersistentVector(null,2,(5),inst_18886,inst_18887,null));
var state_18898__$1 = state_18898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18898__$1,(8),out,inst_18888);
} else {
if((state_val_18899 === (8))){
var inst_18890 = (state_18898[(2)]);
var state_18898__$1 = (function (){var statearr_18905 = state_18898;
(statearr_18905[(7)] = inst_18890);

return statearr_18905;
})();
var statearr_18906_18919 = state_18898__$1;
(statearr_18906_18919[(2)] = null);

(statearr_18906_18919[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__12674__auto___18914,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18914,out){
return (function() {
var app$app$extract_hits_$_state_machine__12561__auto__ = null;
var app$app$extract_hits_$_state_machine__12561__auto____0 = (function (){
var statearr_18910 = [null,null,null,null,null,null,null,null];
(statearr_18910[(0)] = app$app$extract_hits_$_state_machine__12561__auto__);

(statearr_18910[(1)] = (1));

return statearr_18910;
});
var app$app$extract_hits_$_state_machine__12561__auto____1 = (function (state_18898){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18898);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18911){if((e18911 instanceof Object)){
var ex__12564__auto__ = e18911;
var statearr_18912_18920 = state_18898;
(statearr_18912_18920[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18898);

return cljs.core.cst$kw$recur;
} else {
throw e18911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18921 = state_18898;
state_18898 = G__18921;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$extract_hits_$_state_machine__12561__auto__ = function(state_18898){
switch(arguments.length){
case 0:
return app$app$extract_hits_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$extract_hits_$_state_machine__12561__auto____1.call(this,state_18898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$extract_hits_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$extract_hits_$_state_machine__12561__auto____0;
app$app$extract_hits_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$extract_hits_$_state_machine__12561__auto____1;
return app$app$extract_hits_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18914,out))
})();
var state__12676__auto__ = (function (){var statearr_18913 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18914);

return statearr_18913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18914,out))
);


return out;
});
app.app.flatten_structure = (function app$app$flatten_structure(in$){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___18999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18999,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18999,out){
return (function (state_18983){
var state_val_18984 = (state_18983[(1)]);
if((state_val_18984 === (1))){
var state_18983__$1 = state_18983;
var statearr_18985_19000 = state_18983__$1;
(statearr_18985_19000[(2)] = null);

(statearr_18985_19000[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18984 === (2))){
var state_18983__$1 = state_18983;
var statearr_18986_19001 = state_18983__$1;
(statearr_18986_19001[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18984 === (3))){
var inst_18981 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18983__$1,inst_18981);
} else {
if((state_val_18984 === (4))){
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18983__$1,(7),in$);
} else {
if((state_val_18984 === (5))){
var state_18983__$1 = state_18983;
var statearr_18988_19002 = state_18983__$1;
(statearr_18988_19002[(2)] = null);

(statearr_18988_19002[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18984 === (6))){
var inst_18979 = (state_18983[(2)]);
var state_18983__$1 = state_18983;
var statearr_18989_19003 = state_18983__$1;
(statearr_18989_19003[(2)] = inst_18979);

(statearr_18989_19003[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18984 === (7))){
var inst_18965 = (state_18983[(2)]);
var inst_18966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18965,(0),null);
var inst_18967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18965,(1),null);
var inst_18968 = (function (){var vec__18963 = inst_18965;
var search_text = inst_18966;
var mid_results = inst_18967;
return ((function (vec__18963,search_text,mid_results,inst_18965,inst_18966,inst_18967,state_val_18984,c__12674__auto___18999,out){
return (function (p1__18922_SHARP_){
return cljs.core.cst$kw$_source.cljs$core$IFn$_invoke$arity$1(p1__18922_SHARP_);
});
;})(vec__18963,search_text,mid_results,inst_18965,inst_18966,inst_18967,state_val_18984,c__12674__auto___18999,out))
})();
var inst_18969 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_18968,inst_18967);
var inst_18970 = cljs.core.vec(inst_18969);
var inst_18971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18972 = [inst_18966,inst_18970];
var inst_18973 = (new cljs.core.PersistentVector(null,2,(5),inst_18971,inst_18972,null));
var state_18983__$1 = state_18983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18983__$1,(8),out,inst_18973);
} else {
if((state_val_18984 === (8))){
var inst_18975 = (state_18983[(2)]);
var state_18983__$1 = (function (){var statearr_18990 = state_18983;
(statearr_18990[(7)] = inst_18975);

return statearr_18990;
})();
var statearr_18991_19004 = state_18983__$1;
(statearr_18991_19004[(2)] = null);

(statearr_18991_19004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__12674__auto___18999,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18999,out){
return (function() {
var app$app$flatten_structure_$_state_machine__12561__auto__ = null;
var app$app$flatten_structure_$_state_machine__12561__auto____0 = (function (){
var statearr_18995 = [null,null,null,null,null,null,null,null];
(statearr_18995[(0)] = app$app$flatten_structure_$_state_machine__12561__auto__);

(statearr_18995[(1)] = (1));

return statearr_18995;
});
var app$app$flatten_structure_$_state_machine__12561__auto____1 = (function (state_18983){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18983);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18996){if((e18996 instanceof Object)){
var ex__12564__auto__ = e18996;
var statearr_18997_19005 = state_18983;
(statearr_18997_19005[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18983);

return cljs.core.cst$kw$recur;
} else {
throw e18996;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19006 = state_18983;
state_18983 = G__19006;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$flatten_structure_$_state_machine__12561__auto__ = function(state_18983){
switch(arguments.length){
case 0:
return app$app$flatten_structure_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$flatten_structure_$_state_machine__12561__auto____1.call(this,state_18983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$flatten_structure_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$flatten_structure_$_state_machine__12561__auto____0;
app$app$flatten_structure_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$flatten_structure_$_state_machine__12561__auto____1;
return app$app$flatten_structure_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18999,out))
})();
var state__12676__auto__ = (function (){var statearr_18998 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18999);

return statearr_18998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18999,out))
);


return out;
});
app.app.update_query_results = (function app$app$update_query_results(in$){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_19055){
var state_val_19056 = (state_19055[(1)]);
if((state_val_19056 === (1))){
var state_19055__$1 = state_19055;
var statearr_19057_19071 = state_19055__$1;
(statearr_19057_19071[(2)] = null);

(statearr_19057_19071[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (2))){
var state_19055__$1 = state_19055;
var statearr_19058_19072 = state_19055__$1;
(statearr_19058_19072[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (3))){
var inst_19053 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19055__$1,inst_19053);
} else {
if((state_val_19056 === (4))){
var state_19055__$1 = state_19055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19055__$1,(7),in$);
} else {
if((state_val_19056 === (5))){
var state_19055__$1 = state_19055;
var statearr_19060_19073 = state_19055__$1;
(statearr_19060_19073[(2)] = null);

(statearr_19060_19073[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (6))){
var inst_19051 = (state_19055[(2)]);
var state_19055__$1 = state_19055;
var statearr_19061_19074 = state_19055__$1;
(statearr_19061_19074[(2)] = inst_19051);

(statearr_19061_19074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19056 === (7))){
var inst_19043 = (state_19055[(2)]);
var inst_19044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19043,(0),null);
var inst_19045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19043,(1),null);
var inst_19046 = app.app.update_cache(inst_19044,inst_19045);
var inst_19047 = app.app.update_results(inst_19045);
var state_19055__$1 = (function (){var statearr_19062 = state_19055;
(statearr_19062[(7)] = inst_19047);

(statearr_19062[(8)] = inst_19046);

return statearr_19062;
})();
var statearr_19063_19075 = state_19055__$1;
(statearr_19063_19075[(2)] = null);

(statearr_19063_19075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var app$app$update_query_results_$_state_machine__12561__auto__ = null;
var app$app$update_query_results_$_state_machine__12561__auto____0 = (function (){
var statearr_19067 = [null,null,null,null,null,null,null,null,null];
(statearr_19067[(0)] = app$app$update_query_results_$_state_machine__12561__auto__);

(statearr_19067[(1)] = (1));

return statearr_19067;
});
var app$app$update_query_results_$_state_machine__12561__auto____1 = (function (state_19055){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19055);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19068){if((e19068 instanceof Object)){
var ex__12564__auto__ = e19068;
var statearr_19069_19076 = state_19055;
(statearr_19069_19076[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19055);

return cljs.core.cst$kw$recur;
} else {
throw e19068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19077 = state_19055;
state_19055 = G__19077;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$update_query_results_$_state_machine__12561__auto__ = function(state_19055){
switch(arguments.length){
case 0:
return app$app$update_query_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$update_query_results_$_state_machine__12561__auto____1.call(this,state_19055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$update_query_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$update_query_results_$_state_machine__12561__auto____0;
app$app$update_query_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$update_query_results_$_state_machine__12561__auto____1;
return app$app$update_query_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_19070 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});
app.app.query_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
app.app.throttled_query_chan = app.app.throttle(app.app.query_chan,(3000));
app.app.get_results_out = app.app.get_results(app.app.throttled_query_chan);
app.app.extract_hits_out = app.app.extract_hits(app.app.get_results_out);
app.app.flatten_structure_out = app.app.flatten_structure(app.app.extract_hits_out);
app.app.update_query_results(app.app.flatten_structure_out);
app.app.update_cache_results = (function app$app$update_cache_results(in$){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_19124){
var state_val_19125 = (state_19124[(1)]);
if((state_val_19125 === (1))){
var state_19124__$1 = state_19124;
var statearr_19126_19140 = state_19124__$1;
(statearr_19126_19140[(2)] = null);

(statearr_19126_19140[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (2))){
var state_19124__$1 = state_19124;
var statearr_19127_19141 = state_19124__$1;
(statearr_19127_19141[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (3))){
var inst_19122 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19124__$1,inst_19122);
} else {
if((state_val_19125 === (4))){
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19124__$1,(7),in$);
} else {
if((state_val_19125 === (5))){
var state_19124__$1 = state_19124;
var statearr_19129_19142 = state_19124__$1;
(statearr_19129_19142[(2)] = null);

(statearr_19129_19142[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (6))){
var inst_19120 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
var statearr_19130_19143 = state_19124__$1;
(statearr_19130_19143[(2)] = inst_19120);

(statearr_19130_19143[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19125 === (7))){
var inst_19112 = (state_19124[(2)]);
var inst_19113 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19114 = cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(inst_19113);
var inst_19115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19114,inst_19112);
var inst_19116 = app.app.update_results(inst_19115);
var state_19124__$1 = (function (){var statearr_19131 = state_19124;
(statearr_19131[(7)] = inst_19116);

return statearr_19131;
})();
var statearr_19132_19144 = state_19124__$1;
(statearr_19132_19144[(2)] = null);

(statearr_19132_19144[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var app$app$update_cache_results_$_state_machine__12561__auto__ = null;
var app$app$update_cache_results_$_state_machine__12561__auto____0 = (function (){
var statearr_19136 = [null,null,null,null,null,null,null,null];
(statearr_19136[(0)] = app$app$update_cache_results_$_state_machine__12561__auto__);

(statearr_19136[(1)] = (1));

return statearr_19136;
});
var app$app$update_cache_results_$_state_machine__12561__auto____1 = (function (state_19124){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19124);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19137){if((e19137 instanceof Object)){
var ex__12564__auto__ = e19137;
var statearr_19138_19145 = state_19124;
(statearr_19138_19145[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19124);

return cljs.core.cst$kw$recur;
} else {
throw e19137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19146 = state_19124;
state_19124 = G__19146;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$update_cache_results_$_state_machine__12561__auto__ = function(state_19124){
switch(arguments.length){
case 0:
return app$app$update_cache_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$update_cache_results_$_state_machine__12561__auto____1.call(this,state_19124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$update_cache_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$update_cache_results_$_state_machine__12561__auto____0;
app$app$update_cache_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$update_cache_results_$_state_machine__12561__auto____1;
return app$app$update_cache_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_19139 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});
app.app.cache_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
app.app.update_cache_results(app.app.cache_chan);
app.app.listen = (function app$app$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__19151_19154 = el;
var G__19152_19155 = type;
var G__19153_19156 = ((function (G__19151_19154,G__19152_19155,out){
return (function (p1__19147_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__19147_SHARP_);
});})(G__19151_19154,G__19152_19155,out))
;
goog.events.listen(G__19151_19154,G__19152_19155,G__19153_19156);

return out;
});
app.app.search_field = (function app$app$search_field(){
return goog.dom.getElementByClass("search-field");
});
app.app.listen_search_input = (function app$app$listen_search_input(){
var input = app.app.listen(app.app.search_field(),"keyup");
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__,input){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__,input){
return (function (state_19248){
var state_val_19249 = (state_19248[(1)]);
if((state_val_19249 === (7))){
var inst_19222 = (state_19248[(7)]);
var inst_19218 = (state_19248[(2)]);
var inst_19219 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19220 = cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(inst_19219);
var inst_19221 = app.app.search_field();
var inst_19222__$1 = inst_19221.value;
var inst_19223 = clojure.string.blank_QMARK_(inst_19222__$1);
var state_19248__$1 = (function (){var statearr_19250 = state_19248;
(statearr_19250[(8)] = inst_19218);

(statearr_19250[(7)] = inst_19222__$1);

(statearr_19250[(9)] = inst_19220);

return statearr_19250;
})();
if(inst_19223){
var statearr_19251_19273 = state_19248__$1;
(statearr_19251_19273[(1)] = (8));

} else {
var statearr_19252_19274 = state_19248__$1;
(statearr_19252_19274[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (1))){
var state_19248__$1 = state_19248;
var statearr_19253_19275 = state_19248__$1;
(statearr_19253_19275[(2)] = null);

(statearr_19253_19275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (4))){
var state_19248__$1 = state_19248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19248__$1,(7),input);
} else {
if((state_val_19249 === (13))){
var inst_19238 = (state_19248[(2)]);
var state_19248__$1 = state_19248;
var statearr_19254_19276 = state_19248__$1;
(statearr_19254_19276[(2)] = inst_19238);

(statearr_19254_19276[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (6))){
var inst_19244 = (state_19248[(2)]);
var state_19248__$1 = state_19248;
var statearr_19255_19277 = state_19248__$1;
(statearr_19255_19277[(2)] = inst_19244);

(statearr_19255_19277[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (3))){
var inst_19246 = (state_19248[(2)]);
var state_19248__$1 = state_19248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19248__$1,inst_19246);
} else {
if((state_val_19249 === (12))){
var inst_19222 = (state_19248[(7)]);
var inst_19233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19234 = [app.app.query_url,inst_19222];
var inst_19235 = (new cljs.core.PersistentVector(null,2,(5),inst_19233,inst_19234,null));
var inst_19236 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.app.query_chan,inst_19235);
var state_19248__$1 = state_19248;
var statearr_19256_19278 = state_19248__$1;
(statearr_19256_19278[(2)] = inst_19236);

(statearr_19256_19278[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (2))){
var state_19248__$1 = state_19248;
var statearr_19257_19279 = state_19248__$1;
(statearr_19257_19279[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (11))){
var inst_19222 = (state_19248[(7)]);
var inst_19231 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.app.cache_chan,inst_19222);
var state_19248__$1 = state_19248;
var statearr_19259_19280 = state_19248__$1;
(statearr_19259_19280[(2)] = inst_19231);

(statearr_19259_19280[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (9))){
var inst_19222 = (state_19248[(7)]);
var inst_19220 = (state_19248[(9)]);
var inst_19229 = cljs.core.contains_QMARK_(inst_19220,inst_19222);
var state_19248__$1 = state_19248;
if(inst_19229){
var statearr_19260_19281 = state_19248__$1;
(statearr_19260_19281[(1)] = (11));

} else {
var statearr_19261_19282 = state_19248__$1;
(statearr_19261_19282[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (5))){
var state_19248__$1 = state_19248;
var statearr_19262_19283 = state_19248__$1;
(statearr_19262_19283[(2)] = null);

(statearr_19262_19283[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (10))){
var inst_19240 = (state_19248[(2)]);
var state_19248__$1 = (function (){var statearr_19263 = state_19248;
(statearr_19263[(10)] = inst_19240);

return statearr_19263;
})();
var statearr_19264_19284 = state_19248__$1;
(statearr_19264_19284[(2)] = null);

(statearr_19264_19284[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19249 === (8))){
var inst_19225 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19226 = cljs.core.cst$kw$all_DASH_results.cljs$core$IFn$_invoke$arity$1(inst_19225);
var inst_19227 = app.app.update_results(inst_19226);
var state_19248__$1 = state_19248;
var statearr_19265_19285 = state_19248__$1;
(statearr_19265_19285[(2)] = inst_19227);

(statearr_19265_19285[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12674__auto__,input))
;
return ((function (switch__12560__auto__,c__12674__auto__,input){
return (function() {
var app$app$listen_search_input_$_state_machine__12561__auto__ = null;
var app$app$listen_search_input_$_state_machine__12561__auto____0 = (function (){
var statearr_19269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19269[(0)] = app$app$listen_search_input_$_state_machine__12561__auto__);

(statearr_19269[(1)] = (1));

return statearr_19269;
});
var app$app$listen_search_input_$_state_machine__12561__auto____1 = (function (state_19248){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19248);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19270){if((e19270 instanceof Object)){
var ex__12564__auto__ = e19270;
var statearr_19271_19286 = state_19248;
(statearr_19271_19286[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19248);

return cljs.core.cst$kw$recur;
} else {
throw e19270;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19287 = state_19248;
state_19248 = G__19287;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$listen_search_input_$_state_machine__12561__auto__ = function(state_19248){
switch(arguments.length){
case 0:
return app$app$listen_search_input_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$listen_search_input_$_state_machine__12561__auto____1.call(this,state_19248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$listen_search_input_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$listen_search_input_$_state_machine__12561__auto____0;
app$app$listen_search_input_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$listen_search_input_$_state_machine__12561__auto____1;
return app$app$listen_search_input_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__,input))
})();
var state__12676__auto__ = (function (){var statearr_19272 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__,input))
);

return c__12674__auto__;
});
app.app.init = (function app$app$init(){
app.app.load_all_results(app.app.all_results_url);

var G__19290_19292 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.page], null);
var G__19291_19293 = document.body;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__19290_19292,G__19291_19293) : reagent.core.render_component.call(null,G__19290_19292,G__19291_19293));

return app.app.listen_search_input();
});
