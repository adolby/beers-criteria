// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
goog.require('app.pipelines');
app.views.search_field = (function app$views$search_field(){
return goog.dom.getElementByClass("search-field");
});
/**
 * Creates and returns a channel to listen to events specified by type
 * parameter
 */
app.views.listen = (function app$views$listen(el,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var G__25623_25626 = el;
var G__25624_25627 = type;
var G__25625_25628 = ((function (G__25623_25626,G__25624_25627,out){
return (function (p1__25622_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__25622_SHARP_);
});})(G__25623_25626,G__25624_25627,out))
;
goog.events.listen(G__25623_25626,G__25624_25627,G__25625_25628);

return out;
});
/**
 * Listen to search input and output its value to the search pipeline
 */
app.views.listen_search_input = (function app$views$listen_search_input(){
var input = app.views.listen(app.views.search_field(),"keyup");
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__,input){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__,input){
return (function (state_25643){
var state_val_25644 = (state_25643[(1)]);
if((state_val_25644 === (1))){
var state_25643__$1 = state_25643;
var statearr_25645_25656 = state_25643__$1;
(statearr_25645_25656[(2)] = null);

(statearr_25645_25656[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (2))){
var state_25643__$1 = state_25643;
var statearr_25646_25657 = state_25643__$1;
(statearr_25646_25657[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (3))){
var inst_25641 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25643__$1,inst_25641);
} else {
if((state_val_25644 === (4))){
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25643__$1,(7),input);
} else {
if((state_val_25644 === (5))){
var state_25643__$1 = state_25643;
var statearr_25648_25658 = state_25643__$1;
(statearr_25648_25658[(2)] = null);

(statearr_25648_25658[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (6))){
var inst_25639 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25649_25659 = state_25643__$1;
(statearr_25649_25659[(2)] = inst_25639);

(statearr_25649_25659[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25644 === (7))){
var inst_25632 = (state_25643[(2)]);
var inst_25633 = app.views.search_field();
var inst_25634 = inst_25633.value;
var inst_25635 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(app.pipelines.input_chan,inst_25634);
var state_25643__$1 = (function (){var statearr_25650 = state_25643;
(statearr_25650[(7)] = inst_25632);

(statearr_25650[(8)] = inst_25635);

return statearr_25650;
})();
var statearr_25651_25660 = state_25643__$1;
(statearr_25651_25660[(2)] = null);

(statearr_25651_25660[(1)] = (2));


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
});})(c__9347__auto__,input))
;
return ((function (switch__9240__auto__,c__9347__auto__,input){
return (function() {
var app$views$listen_search_input_$_state_machine__9241__auto__ = null;
var app$views$listen_search_input_$_state_machine__9241__auto____0 = (function (){
var statearr_25652 = [null,null,null,null,null,null,null,null,null];
(statearr_25652[(0)] = app$views$listen_search_input_$_state_machine__9241__auto__);

(statearr_25652[(1)] = (1));

return statearr_25652;
});
var app$views$listen_search_input_$_state_machine__9241__auto____1 = (function (state_25643){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_25643);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e25653){if((e25653 instanceof Object)){
var ex__9244__auto__ = e25653;
var statearr_25654_25661 = state_25643;
(statearr_25654_25661[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25643);

return cljs.core.cst$kw$recur;
} else {
throw e25653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__25662 = state_25643;
state_25643 = G__25662;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
app$views$listen_search_input_$_state_machine__9241__auto__ = function(state_25643){
switch(arguments.length){
case 0:
return app$views$listen_search_input_$_state_machine__9241__auto____0.call(this);
case 1:
return app$views$listen_search_input_$_state_machine__9241__auto____1.call(this,state_25643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$views$listen_search_input_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = app$views$listen_search_input_$_state_machine__9241__auto____0;
app$views$listen_search_input_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = app$views$listen_search_input_$_state_machine__9241__auto____1;
return app$views$listen_search_input_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__,input))
})();
var state__9349__auto__ = (function (){var statearr_25655 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_25655[(6)] = c__9347__auto__);

return statearr_25655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__,input))
);

return c__9347__auto__;
});
app.views.labels = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$category_DASH_drugs,"Therapeutic Category: Drug(s)",cljs.core.cst$kw$organ_DASH_system,"Organ System",cljs.core.cst$kw$rationale,"Rationale",cljs.core.cst$kw$recommendation,"Recommendation",cljs.core.cst$kw$quality_DASH_of_DASH_evidence,"Quality Of Evidence",cljs.core.cst$kw$strength_DASH_of_DASH_recommendation,"Strength of Recommendation",cljs.core.cst$kw$evidence,"Evidence"], null);
/**
 * Render the results to card form with Reagent
 */
app.views.result_cards = (function app$views$result_cards(){
var results = (function (){var G__25663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$results], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25663) : re_frame.core.subscribe.call(null,G__25663));
})();
return ((function (results){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section$cards,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (results){
return (function (card_idx,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_idx)].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (results){
return (function (row_idx,p__25664){
var vec__25665 = p__25664;
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25665,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25665,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_idx),"-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_idx)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.views.labels,label)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,value], null)], null);
});})(results))
,result)], null);
});})(results))
,cljs.core.deref(results))], null);
});
;})(results))
});
/**
 * Entry point for Reagent
 */
app.views.render_results = (function app$views$render_results(){
var G__25668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.result_cards], null);
var G__25669 = document.getElementById("results");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__25668,G__25669) : reagent.core.render_component.call(null,G__25668,G__25669));
});
