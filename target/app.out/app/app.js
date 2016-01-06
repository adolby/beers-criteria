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
if(cljs.core.seq(new_results)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cache,key], null),new_results);
} else {
return null;
}
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
var ch18661 = kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.header,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.nav,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.ul,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"brand",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Beers Criteria"], null))))], null))))], null))))], null))))], null)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.main,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.section,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,"search-section",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.input,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$className,"search-field",cljs.core.cst$kw$id,"search",cljs.core.cst$kw$type,"search",cljs.core.cst$kw$placeholder,"Eg: Digoxin",cljs.core.cst$kw$required,"",cljs.core.cst$kw$autoFocus,"",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(cljs.core.PersistentVector.EMPTY))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.label,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$className,"search-label",cljs.core.cst$kw$htmlFor,"search",cljs.core.cst$kw$style,null], null)),kioo.util.flatten_nodes(kioo.util.flatten_nodes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Search"], null))))], null)))),kioo.core.handle_wrapper(kioo.reagent.make_dom).call(null,(function (){var G__18663 = app.app.result_cards();
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
var c__12674__auto___18830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18830,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18830,out){
return (function (state_18813){
var state_val_18814 = (state_18813[(1)]);
if((state_val_18814 === (1))){
var state_18813__$1 = state_18813;
var statearr_18815_18831 = state_18813__$1;
(statearr_18815_18831[(2)] = null);

(statearr_18815_18831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18814 === (2))){
var state_18813__$1 = state_18813;
var statearr_18816_18832 = state_18813__$1;
(statearr_18816_18832[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18814 === (3))){
var inst_18811 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18813__$1,inst_18811);
} else {
if((state_val_18814 === (4))){
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18813__$1,(7),in$);
} else {
if((state_val_18814 === (5))){
var state_18813__$1 = state_18813;
var statearr_18818_18833 = state_18813__$1;
(statearr_18818_18833[(2)] = null);

(statearr_18818_18833[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18814 === (6))){
var inst_18809 = (state_18813[(2)]);
var state_18813__$1 = state_18813;
var statearr_18819_18834 = state_18813__$1;
(statearr_18819_18834[(2)] = inst_18809);

(statearr_18819_18834[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18814 === (7))){
var inst_18790 = (state_18813[(7)]);
var inst_18788 = (state_18813[(2)]);
var inst_18789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18788,(0),null);
var inst_18790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18788,(1),null);
var inst_18791 = [cljs.core.cst$kw$query_DASH_params];
var inst_18792 = ["q"];
var inst_18793 = [cljs.core.str("category-drugs:"),cljs.core.str(inst_18790__$1)].join('');
var inst_18794 = [inst_18793];
var inst_18795 = cljs.core.PersistentHashMap.fromArrays(inst_18792,inst_18794);
var inst_18796 = [inst_18795];
var inst_18797 = cljs.core.PersistentHashMap.fromArrays(inst_18791,inst_18796);
var inst_18798 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_18789,cljs.core.array_seq([inst_18797], 0));
var state_18813__$1 = (function (){var statearr_18820 = state_18813;
(statearr_18820[(7)] = inst_18790__$1);

return statearr_18820;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18813__$1,(8),inst_18798);
} else {
if((state_val_18814 === (8))){
var inst_18790 = (state_18813[(7)]);
var inst_18800 = (state_18813[(2)]);
var inst_18801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18802 = [inst_18790,inst_18800];
var inst_18803 = (new cljs.core.PersistentVector(null,2,(5),inst_18801,inst_18802,null));
var state_18813__$1 = state_18813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18813__$1,(9),out,inst_18803);
} else {
if((state_val_18814 === (9))){
var inst_18805 = (state_18813[(2)]);
var state_18813__$1 = (function (){var statearr_18821 = state_18813;
(statearr_18821[(8)] = inst_18805);

return statearr_18821;
})();
var statearr_18822_18835 = state_18813__$1;
(statearr_18822_18835[(2)] = null);

(statearr_18822_18835[(1)] = (2));


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
});})(c__12674__auto___18830,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18830,out){
return (function() {
var app$app$get_results_$_state_machine__12561__auto__ = null;
var app$app$get_results_$_state_machine__12561__auto____0 = (function (){
var statearr_18826 = [null,null,null,null,null,null,null,null,null];
(statearr_18826[(0)] = app$app$get_results_$_state_machine__12561__auto__);

(statearr_18826[(1)] = (1));

return statearr_18826;
});
var app$app$get_results_$_state_machine__12561__auto____1 = (function (state_18813){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18813);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18827){if((e18827 instanceof Object)){
var ex__12564__auto__ = e18827;
var statearr_18828_18836 = state_18813;
(statearr_18828_18836[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18813);

return cljs.core.cst$kw$recur;
} else {
throw e18827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18837 = state_18813;
state_18813 = G__18837;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$get_results_$_state_machine__12561__auto__ = function(state_18813){
switch(arguments.length){
case 0:
return app$app$get_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$get_results_$_state_machine__12561__auto____1.call(this,state_18813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$get_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$get_results_$_state_machine__12561__auto____0;
app$app$get_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$get_results_$_state_machine__12561__auto____1;
return app$app$get_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18830,out))
})();
var state__12676__auto__ = (function (){var statearr_18829 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18830);

return statearr_18829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18830,out))
);


return out;
});
app.app.extract_hits = (function app$app$extract_hits(in$){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___18916 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___18916,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___18916,out){
return (function (state_18900){
var state_val_18901 = (state_18900[(1)]);
if((state_val_18901 === (1))){
var state_18900__$1 = state_18900;
var statearr_18902_18917 = state_18900__$1;
(statearr_18902_18917[(2)] = null);

(statearr_18902_18917[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18901 === (2))){
var state_18900__$1 = state_18900;
var statearr_18903_18918 = state_18900__$1;
(statearr_18903_18918[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18901 === (3))){
var inst_18898 = (state_18900[(2)]);
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18900__$1,inst_18898);
} else {
if((state_val_18901 === (4))){
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18900__$1,(7),in$);
} else {
if((state_val_18901 === (5))){
var state_18900__$1 = state_18900;
var statearr_18905_18919 = state_18900__$1;
(statearr_18905_18919[(2)] = null);

(statearr_18905_18919[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18901 === (6))){
var inst_18896 = (state_18900[(2)]);
var state_18900__$1 = state_18900;
var statearr_18906_18920 = state_18900__$1;
(statearr_18906_18920[(2)] = inst_18896);

(statearr_18906_18920[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18901 === (7))){
var inst_18881 = (state_18900[(2)]);
var inst_18882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18881,(0),null);
var inst_18883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18881,(1),null);
var inst_18884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18885 = [cljs.core.cst$kw$body,cljs.core.cst$kw$hits,cljs.core.cst$kw$hits];
var inst_18886 = (new cljs.core.PersistentVector(null,3,(5),inst_18884,inst_18885,null));
var inst_18887 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_18883,inst_18886);
var inst_18888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18889 = [inst_18882,inst_18887];
var inst_18890 = (new cljs.core.PersistentVector(null,2,(5),inst_18888,inst_18889,null));
var state_18900__$1 = state_18900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18900__$1,(8),out,inst_18890);
} else {
if((state_val_18901 === (8))){
var inst_18892 = (state_18900[(2)]);
var state_18900__$1 = (function (){var statearr_18907 = state_18900;
(statearr_18907[(7)] = inst_18892);

return statearr_18907;
})();
var statearr_18908_18921 = state_18900__$1;
(statearr_18908_18921[(2)] = null);

(statearr_18908_18921[(1)] = (2));


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
});})(c__12674__auto___18916,out))
;
return ((function (switch__12560__auto__,c__12674__auto___18916,out){
return (function() {
var app$app$extract_hits_$_state_machine__12561__auto__ = null;
var app$app$extract_hits_$_state_machine__12561__auto____0 = (function (){
var statearr_18912 = [null,null,null,null,null,null,null,null];
(statearr_18912[(0)] = app$app$extract_hits_$_state_machine__12561__auto__);

(statearr_18912[(1)] = (1));

return statearr_18912;
});
var app$app$extract_hits_$_state_machine__12561__auto____1 = (function (state_18900){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18900);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18913){if((e18913 instanceof Object)){
var ex__12564__auto__ = e18913;
var statearr_18914_18922 = state_18900;
(statearr_18914_18922[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18900);

return cljs.core.cst$kw$recur;
} else {
throw e18913;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__18923 = state_18900;
state_18900 = G__18923;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$extract_hits_$_state_machine__12561__auto__ = function(state_18900){
switch(arguments.length){
case 0:
return app$app$extract_hits_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$extract_hits_$_state_machine__12561__auto____1.call(this,state_18900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$extract_hits_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$extract_hits_$_state_machine__12561__auto____0;
app$app$extract_hits_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$extract_hits_$_state_machine__12561__auto____1;
return app$app$extract_hits_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___18916,out))
})();
var state__12676__auto__ = (function (){var statearr_18915 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_18915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___18916);

return statearr_18915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___18916,out))
);


return out;
});
app.app.flatten_structure = (function app$app$flatten_structure(in$){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__12674__auto___19001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___19001,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___19001,out){
return (function (state_18985){
var state_val_18986 = (state_18985[(1)]);
if((state_val_18986 === (1))){
var state_18985__$1 = state_18985;
var statearr_18987_19002 = state_18985__$1;
(statearr_18987_19002[(2)] = null);

(statearr_18987_19002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18986 === (2))){
var state_18985__$1 = state_18985;
var statearr_18988_19003 = state_18985__$1;
(statearr_18988_19003[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18986 === (3))){
var inst_18983 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18985__$1,inst_18983);
} else {
if((state_val_18986 === (4))){
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18985__$1,(7),in$);
} else {
if((state_val_18986 === (5))){
var state_18985__$1 = state_18985;
var statearr_18990_19004 = state_18985__$1;
(statearr_18990_19004[(2)] = null);

(statearr_18990_19004[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18986 === (6))){
var inst_18981 = (state_18985[(2)]);
var state_18985__$1 = state_18985;
var statearr_18991_19005 = state_18985__$1;
(statearr_18991_19005[(2)] = inst_18981);

(statearr_18991_19005[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18986 === (7))){
var inst_18967 = (state_18985[(2)]);
var inst_18968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967,(0),null);
var inst_18969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18967,(1),null);
var inst_18970 = (function (){var vec__18965 = inst_18967;
var search_text = inst_18968;
var mid_results = inst_18969;
return ((function (vec__18965,search_text,mid_results,inst_18967,inst_18968,inst_18969,state_val_18986,c__12674__auto___19001,out){
return (function (p1__18924_SHARP_){
return cljs.core.cst$kw$_source.cljs$core$IFn$_invoke$arity$1(p1__18924_SHARP_);
});
;})(vec__18965,search_text,mid_results,inst_18967,inst_18968,inst_18969,state_val_18986,c__12674__auto___19001,out))
})();
var inst_18971 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_18970,inst_18969);
var inst_18972 = cljs.core.vec(inst_18971);
var inst_18973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18974 = [inst_18968,inst_18972];
var inst_18975 = (new cljs.core.PersistentVector(null,2,(5),inst_18973,inst_18974,null));
var state_18985__$1 = state_18985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18985__$1,(8),out,inst_18975);
} else {
if((state_val_18986 === (8))){
var inst_18977 = (state_18985[(2)]);
var state_18985__$1 = (function (){var statearr_18992 = state_18985;
(statearr_18992[(7)] = inst_18977);

return statearr_18992;
})();
var statearr_18993_19006 = state_18985__$1;
(statearr_18993_19006[(2)] = null);

(statearr_18993_19006[(1)] = (2));


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
});})(c__12674__auto___19001,out))
;
return ((function (switch__12560__auto__,c__12674__auto___19001,out){
return (function() {
var app$app$flatten_structure_$_state_machine__12561__auto__ = null;
var app$app$flatten_structure_$_state_machine__12561__auto____0 = (function (){
var statearr_18997 = [null,null,null,null,null,null,null,null];
(statearr_18997[(0)] = app$app$flatten_structure_$_state_machine__12561__auto__);

(statearr_18997[(1)] = (1));

return statearr_18997;
});
var app$app$flatten_structure_$_state_machine__12561__auto____1 = (function (state_18985){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_18985);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e18998){if((e18998 instanceof Object)){
var ex__12564__auto__ = e18998;
var statearr_18999_19007 = state_18985;
(statearr_18999_19007[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18985);

return cljs.core.cst$kw$recur;
} else {
throw e18998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19008 = state_18985;
state_18985 = G__19008;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$flatten_structure_$_state_machine__12561__auto__ = function(state_18985){
switch(arguments.length){
case 0:
return app$app$flatten_structure_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$flatten_structure_$_state_machine__12561__auto____1.call(this,state_18985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$flatten_structure_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$flatten_structure_$_state_machine__12561__auto____0;
app$app$flatten_structure_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$flatten_structure_$_state_machine__12561__auto____1;
return app$app$flatten_structure_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___19001,out))
})();
var state__12676__auto__ = (function (){var statearr_19000 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___19001);

return statearr_19000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___19001,out))
);


return out;
});
app.app.update_query_results = (function app$app$update_query_results(in$){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_19057){
var state_val_19058 = (state_19057[(1)]);
if((state_val_19058 === (1))){
var state_19057__$1 = state_19057;
var statearr_19059_19073 = state_19057__$1;
(statearr_19059_19073[(2)] = null);

(statearr_19059_19073[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19058 === (2))){
var state_19057__$1 = state_19057;
var statearr_19060_19074 = state_19057__$1;
(statearr_19060_19074[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19058 === (3))){
var inst_19055 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19057__$1,inst_19055);
} else {
if((state_val_19058 === (4))){
var state_19057__$1 = state_19057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19057__$1,(7),in$);
} else {
if((state_val_19058 === (5))){
var state_19057__$1 = state_19057;
var statearr_19062_19075 = state_19057__$1;
(statearr_19062_19075[(2)] = null);

(statearr_19062_19075[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19058 === (6))){
var inst_19053 = (state_19057[(2)]);
var state_19057__$1 = state_19057;
var statearr_19063_19076 = state_19057__$1;
(statearr_19063_19076[(2)] = inst_19053);

(statearr_19063_19076[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19058 === (7))){
var inst_19045 = (state_19057[(2)]);
var inst_19046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19045,(0),null);
var inst_19047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19045,(1),null);
var inst_19048 = app.app.update_cache(inst_19046,inst_19047);
var inst_19049 = app.app.update_results(inst_19047);
var state_19057__$1 = (function (){var statearr_19064 = state_19057;
(statearr_19064[(7)] = inst_19048);

(statearr_19064[(8)] = inst_19049);

return statearr_19064;
})();
var statearr_19065_19077 = state_19057__$1;
(statearr_19065_19077[(2)] = null);

(statearr_19065_19077[(1)] = (2));


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
var statearr_19069 = [null,null,null,null,null,null,null,null,null];
(statearr_19069[(0)] = app$app$update_query_results_$_state_machine__12561__auto__);

(statearr_19069[(1)] = (1));

return statearr_19069;
});
var app$app$update_query_results_$_state_machine__12561__auto____1 = (function (state_19057){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19057);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19070){if((e19070 instanceof Object)){
var ex__12564__auto__ = e19070;
var statearr_19071_19078 = state_19057;
(statearr_19071_19078[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19057);

return cljs.core.cst$kw$recur;
} else {
throw e19070;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19079 = state_19057;
state_19057 = G__19079;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$update_query_results_$_state_machine__12561__auto__ = function(state_19057){
switch(arguments.length){
case 0:
return app$app$update_query_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$update_query_results_$_state_machine__12561__auto____1.call(this,state_19057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$update_query_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$update_query_results_$_state_machine__12561__auto____0;
app$app$update_query_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$update_query_results_$_state_machine__12561__auto____1;
return app$app$update_query_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_19072 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19072;
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
return (function (state_19126){
var state_val_19127 = (state_19126[(1)]);
if((state_val_19127 === (1))){
var state_19126__$1 = state_19126;
var statearr_19128_19142 = state_19126__$1;
(statearr_19128_19142[(2)] = null);

(statearr_19128_19142[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (2))){
var state_19126__$1 = state_19126;
var statearr_19129_19143 = state_19126__$1;
(statearr_19129_19143[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (3))){
var inst_19124 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19126__$1,inst_19124);
} else {
if((state_val_19127 === (4))){
var state_19126__$1 = state_19126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19126__$1,(7),in$);
} else {
if((state_val_19127 === (5))){
var state_19126__$1 = state_19126;
var statearr_19131_19144 = state_19126__$1;
(statearr_19131_19144[(2)] = null);

(statearr_19131_19144[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (6))){
var inst_19122 = (state_19126[(2)]);
var state_19126__$1 = state_19126;
var statearr_19132_19145 = state_19126__$1;
(statearr_19132_19145[(2)] = inst_19122);

(statearr_19132_19145[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19127 === (7))){
var inst_19114 = (state_19126[(2)]);
var inst_19115 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19116 = cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(inst_19115);
var inst_19117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19116,inst_19114);
var inst_19118 = app.app.update_results(inst_19117);
var state_19126__$1 = (function (){var statearr_19133 = state_19126;
(statearr_19133[(7)] = inst_19118);

return statearr_19133;
})();
var statearr_19134_19146 = state_19126__$1;
(statearr_19134_19146[(2)] = null);

(statearr_19134_19146[(1)] = (2));


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
var statearr_19138 = [null,null,null,null,null,null,null,null];
(statearr_19138[(0)] = app$app$update_cache_results_$_state_machine__12561__auto__);

(statearr_19138[(1)] = (1));

return statearr_19138;
});
var app$app$update_cache_results_$_state_machine__12561__auto____1 = (function (state_19126){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19126);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19139){if((e19139 instanceof Object)){
var ex__12564__auto__ = e19139;
var statearr_19140_19147 = state_19126;
(statearr_19140_19147[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19126);

return cljs.core.cst$kw$recur;
} else {
throw e19139;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19148 = state_19126;
state_19126 = G__19148;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$update_cache_results_$_state_machine__12561__auto__ = function(state_19126){
switch(arguments.length){
case 0:
return app$app$update_cache_results_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$update_cache_results_$_state_machine__12561__auto____1.call(this,state_19126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$update_cache_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$update_cache_results_$_state_machine__12561__auto____0;
app$app$update_cache_results_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$update_cache_results_$_state_machine__12561__auto____1;
return app$app$update_cache_results_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_19141 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19141;
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
var G__19153_19156 = el;
var G__19154_19157 = type;
var G__19155_19158 = ((function (G__19153_19156,G__19154_19157,out){
return (function (p1__19149_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__19149_SHARP_);
});})(G__19153_19156,G__19154_19157,out))
;
goog.events.listen(G__19153_19156,G__19154_19157,G__19155_19158);

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
return (function (state_19250){
var state_val_19251 = (state_19250[(1)]);
if((state_val_19251 === (7))){
var inst_19224 = (state_19250[(7)]);
var inst_19220 = (state_19250[(2)]);
var inst_19221 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19222 = cljs.core.cst$kw$cache.cljs$core$IFn$_invoke$arity$1(inst_19221);
var inst_19223 = app.app.search_field();
var inst_19224__$1 = inst_19223.value;
var inst_19225 = clojure.string.blank_QMARK_(inst_19224__$1);
var state_19250__$1 = (function (){var statearr_19252 = state_19250;
(statearr_19252[(7)] = inst_19224__$1);

(statearr_19252[(8)] = inst_19222);

(statearr_19252[(9)] = inst_19220);

return statearr_19252;
})();
if(inst_19225){
var statearr_19253_19275 = state_19250__$1;
(statearr_19253_19275[(1)] = (8));

} else {
var statearr_19254_19276 = state_19250__$1;
(statearr_19254_19276[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (1))){
var state_19250__$1 = state_19250;
var statearr_19255_19277 = state_19250__$1;
(statearr_19255_19277[(2)] = null);

(statearr_19255_19277[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (4))){
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19250__$1,(7),input);
} else {
if((state_val_19251 === (13))){
var inst_19240 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
var statearr_19256_19278 = state_19250__$1;
(statearr_19256_19278[(2)] = inst_19240);

(statearr_19256_19278[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (6))){
var inst_19246 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
var statearr_19257_19279 = state_19250__$1;
(statearr_19257_19279[(2)] = inst_19246);

(statearr_19257_19279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (3))){
var inst_19248 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19250__$1,inst_19248);
} else {
if((state_val_19251 === (12))){
var inst_19224 = (state_19250[(7)]);
var inst_19235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19236 = [app.app.query_url,inst_19224];
var inst_19237 = (new cljs.core.PersistentVector(null,2,(5),inst_19235,inst_19236,null));
var inst_19238 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.app.query_chan,inst_19237);
var state_19250__$1 = state_19250;
var statearr_19258_19280 = state_19250__$1;
(statearr_19258_19280[(2)] = inst_19238);

(statearr_19258_19280[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (2))){
var state_19250__$1 = state_19250;
var statearr_19259_19281 = state_19250__$1;
(statearr_19259_19281[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (11))){
var inst_19224 = (state_19250[(7)]);
var inst_19233 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.app.cache_chan,inst_19224);
var state_19250__$1 = state_19250;
var statearr_19261_19282 = state_19250__$1;
(statearr_19261_19282[(2)] = inst_19233);

(statearr_19261_19282[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (9))){
var inst_19224 = (state_19250[(7)]);
var inst_19222 = (state_19250[(8)]);
var inst_19231 = cljs.core.contains_QMARK_(inst_19222,inst_19224);
var state_19250__$1 = state_19250;
if(inst_19231){
var statearr_19262_19283 = state_19250__$1;
(statearr_19262_19283[(1)] = (11));

} else {
var statearr_19263_19284 = state_19250__$1;
(statearr_19263_19284[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (5))){
var state_19250__$1 = state_19250;
var statearr_19264_19285 = state_19250__$1;
(statearr_19264_19285[(2)] = null);

(statearr_19264_19285[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (10))){
var inst_19242 = (state_19250[(2)]);
var state_19250__$1 = (function (){var statearr_19265 = state_19250;
(statearr_19265[(10)] = inst_19242);

return statearr_19265;
})();
var statearr_19266_19286 = state_19250__$1;
(statearr_19266_19286[(2)] = null);

(statearr_19266_19286[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19251 === (8))){
var inst_19227 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.app.state) : cljs.core.deref.call(null,app.app.state));
var inst_19228 = cljs.core.cst$kw$all_DASH_results.cljs$core$IFn$_invoke$arity$1(inst_19227);
var inst_19229 = app.app.update_results(inst_19228);
var state_19250__$1 = state_19250;
var statearr_19267_19287 = state_19250__$1;
(statearr_19267_19287[(2)] = inst_19229);

(statearr_19267_19287[(1)] = (10));


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
var statearr_19271 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19271[(0)] = app$app$listen_search_input_$_state_machine__12561__auto__);

(statearr_19271[(1)] = (1));

return statearr_19271;
});
var app$app$listen_search_input_$_state_machine__12561__auto____1 = (function (state_19250){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_19250);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e19272){if((e19272 instanceof Object)){
var ex__12564__auto__ = e19272;
var statearr_19273_19288 = state_19250;
(statearr_19273_19288[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19250);

return cljs.core.cst$kw$recur;
} else {
throw e19272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__19289 = state_19250;
state_19250 = G__19289;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
app$app$listen_search_input_$_state_machine__12561__auto__ = function(state_19250){
switch(arguments.length){
case 0:
return app$app$listen_search_input_$_state_machine__12561__auto____0.call(this);
case 1:
return app$app$listen_search_input_$_state_machine__12561__auto____1.call(this,state_19250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$app$listen_search_input_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = app$app$listen_search_input_$_state_machine__12561__auto____0;
app$app$listen_search_input_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = app$app$listen_search_input_$_state_machine__12561__auto____1;
return app$app$listen_search_input_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__,input))
})();
var state__12676__auto__ = (function (){var statearr_19274 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_19274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_19274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__,input))
);

return c__12674__auto__;
});
app.app.init = (function app$app$init(){
app.app.load_all_results(app.app.all_results_url);

var G__19292_19294 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.app.page], null);
var G__19293_19295 = document.body;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__19292_19294,G__19293_19295) : reagent.core.render_component.call(null,G__19292_19294,G__19293_19295));

return app.app.listen_search_input();
});
