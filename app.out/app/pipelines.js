// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('app.pipelines');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('re_frame.core');
goog.require('taoensso.timbre');
/**
 * Throttle input
 */
app.pipelines.throttle = (function app$pipelines$throttle(in$,ms_delay){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__9347__auto___25577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___25577,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___25577,out){
return (function (state_25563){
var state_val_25564 = (state_25563[(1)]);
if((state_val_25564 === (7))){
var inst_25552 = (state_25563[(2)]);
var inst_25553 = cljs.core.async.timeout(ms_delay);
var state_25563__$1 = (function (){var statearr_25565 = state_25563;
(statearr_25565[(7)] = inst_25552);

return statearr_25565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25563__$1,(9),inst_25553);
} else {
if((state_val_25564 === (1))){
var state_25563__$1 = state_25563;
var statearr_25566_25578 = state_25563__$1;
(statearr_25566_25578[(2)] = null);

(statearr_25566_25578[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25564 === (4))){
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25563__$1,(8),in$);
} else {
if((state_val_25564 === (6))){
var inst_25559 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
var statearr_25567_25579 = state_25563__$1;
(statearr_25567_25579[(2)] = inst_25559);

(statearr_25567_25579[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25564 === (3))){
var inst_25561 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25563__$1,inst_25561);
} else {
if((state_val_25564 === (2))){
var state_25563__$1 = state_25563;
var statearr_25568_25580 = state_25563__$1;
(statearr_25568_25580[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_25564 === (9))){
var inst_25555 = (state_25563[(2)]);
var state_25563__$1 = (function (){var statearr_25570 = state_25563;
(statearr_25570[(8)] = inst_25555);

return statearr_25570;
})();
var statearr_25571_25581 = state_25563__$1;
(statearr_25571_25581[(2)] = null);

(statearr_25571_25581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25564 === (5))){
var state_25563__$1 = state_25563;
var statearr_25572_25582 = state_25563__$1;
(statearr_25572_25582[(2)] = null);

(statearr_25572_25582[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25564 === (8))){
var inst_25550 = (state_25563[(2)]);
var state_25563__$1 = state_25563;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25563__$1,(7),out,inst_25550);
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
});})(c__9347__auto___25577,out))
;
return ((function (switch__9240__auto__,c__9347__auto___25577,out){
return (function() {
var app$pipelines$throttle_$_state_machine__9241__auto__ = null;
var app$pipelines$throttle_$_state_machine__9241__auto____0 = (function (){
var statearr_25573 = [null,null,null,null,null,null,null,null,null];
(statearr_25573[(0)] = app$pipelines$throttle_$_state_machine__9241__auto__);

(statearr_25573[(1)] = (1));

return statearr_25573;
});
var app$pipelines$throttle_$_state_machine__9241__auto____1 = (function (state_25563){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_25563);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e25574){if((e25574 instanceof Object)){
var ex__9244__auto__ = e25574;
var statearr_25575_25583 = state_25563;
(statearr_25575_25583[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25563);

return cljs.core.cst$kw$recur;
} else {
throw e25574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__25584 = state_25563;
state_25563 = G__25584;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
app$pipelines$throttle_$_state_machine__9241__auto__ = function(state_25563){
switch(arguments.length){
case 0:
return app$pipelines$throttle_$_state_machine__9241__auto____0.call(this);
case 1:
return app$pipelines$throttle_$_state_machine__9241__auto____1.call(this,state_25563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$pipelines$throttle_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = app$pipelines$throttle_$_state_machine__9241__auto____0;
app$pipelines$throttle_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = app$pipelines$throttle_$_state_machine__9241__auto____1;
return app$pipelines$throttle_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___25577,out))
})();
var state__9349__auto__ = (function (){var statearr_25576 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_25576[(6)] = c__9347__auto___25577);

return statearr_25576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___25577,out))
);


return out;
});
/**
 * Send latest results to event processor
 */
app.pipelines.send_results = (function app$pipelines$send_results(in$){
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__){
return (function (state_25600){
var state_val_25601 = (state_25600[(1)]);
if((state_val_25601 === (1))){
var state_25600__$1 = state_25600;
var statearr_25602_25613 = state_25600__$1;
(statearr_25602_25613[(2)] = null);

(statearr_25602_25613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25601 === (2))){
var state_25600__$1 = state_25600;
var statearr_25603_25614 = state_25600__$1;
(statearr_25603_25614[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_25601 === (3))){
var inst_25598 = (state_25600[(2)]);
var state_25600__$1 = state_25600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25600__$1,inst_25598);
} else {
if((state_val_25601 === (4))){
var state_25600__$1 = state_25600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25600__$1,(7),in$);
} else {
if((state_val_25601 === (5))){
var state_25600__$1 = state_25600;
var statearr_25605_25615 = state_25600__$1;
(statearr_25605_25615[(2)] = null);

(statearr_25605_25615[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25601 === (6))){
var inst_25596 = (state_25600[(2)]);
var state_25600__$1 = state_25600;
var statearr_25606_25616 = state_25600__$1;
(statearr_25606_25616[(2)] = inst_25596);

(statearr_25606_25616[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25601 === (7))){
var inst_25588 = (state_25600[(2)]);
var inst_25589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25590 = [cljs.core.cst$kw$search_DASH_results,inst_25588];
var inst_25591 = (new cljs.core.PersistentVector(null,2,(5),inst_25589,inst_25590,null));
var inst_25592 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_25591) : re_frame.core.dispatch.call(null,inst_25591));
var state_25600__$1 = (function (){var statearr_25607 = state_25600;
(statearr_25607[(7)] = inst_25592);

return statearr_25607;
})();
var statearr_25608_25617 = state_25600__$1;
(statearr_25608_25617[(2)] = null);

(statearr_25608_25617[(1)] = (2));


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
});})(c__9347__auto__))
;
return ((function (switch__9240__auto__,c__9347__auto__){
return (function() {
var app$pipelines$send_results_$_state_machine__9241__auto__ = null;
var app$pipelines$send_results_$_state_machine__9241__auto____0 = (function (){
var statearr_25609 = [null,null,null,null,null,null,null,null];
(statearr_25609[(0)] = app$pipelines$send_results_$_state_machine__9241__auto__);

(statearr_25609[(1)] = (1));

return statearr_25609;
});
var app$pipelines$send_results_$_state_machine__9241__auto____1 = (function (state_25600){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_25600);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e25610){if((e25610 instanceof Object)){
var ex__9244__auto__ = e25610;
var statearr_25611_25618 = state_25600;
(statearr_25611_25618[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25600);

return cljs.core.cst$kw$recur;
} else {
throw e25610;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__25619 = state_25600;
state_25600 = G__25619;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
app$pipelines$send_results_$_state_machine__9241__auto__ = function(state_25600){
switch(arguments.length){
case 0:
return app$pipelines$send_results_$_state_machine__9241__auto____0.call(this);
case 1:
return app$pipelines$send_results_$_state_machine__9241__auto____1.call(this,state_25600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$pipelines$send_results_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = app$pipelines$send_results_$_state_machine__9241__auto____0;
app$pipelines$send_results_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = app$pipelines$send_results_$_state_machine__9241__auto____1;
return app$pipelines$send_results_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__))
})();
var state__9349__auto__ = (function (){var statearr_25612 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_25612[(6)] = c__9347__auto__);

return statearr_25612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__))
);

return c__9347__auto__;
});
app.pipelines.input_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
app.pipelines.throttled_chan = app.pipelines.throttle(app.pipelines.input_chan,(200));
app.pipelines.send_results(app.pipelines.throttled_chan);
