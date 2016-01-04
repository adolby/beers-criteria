// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kioo.core');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('hickory.core');
goog.require('sablono.core');
goog.require('kioo.common');
kioo.core.value_component = (function kioo$core$value_component(renderer){
var react_component = React.createClass({"shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["value"]),(next_props["value"]));
}), "render": (function (){
var this$ = this;
var _STAR_component_STAR_17390 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17390;
}})});
var factory = React.createFactory(react_component);
return ((function (react_component,factory){
return (function() { 
var G__17392__delegate = function (value,static_args){
var G__17391 = {"value": value, "statics": static_args};
return (factory.cljs$core$IFn$_invoke$arity$1 ? factory.cljs$core$IFn$_invoke$arity$1(G__17391) : factory.call(null,G__17391));
};
var G__17392 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__17393__i = 0, G__17393__a = new Array(arguments.length -  1);
while (G__17393__i < G__17393__a.length) {G__17393__a[G__17393__i] = arguments[G__17393__i + 1]; ++G__17393__i;}
  static_args = new cljs.core.IndexedSeq(G__17393__a,0);
} 
return G__17392__delegate.call(this,value,static_args);};
G__17392.cljs$lang$maxFixedArity = 1;
G__17392.cljs$lang$applyTo = (function (arglist__17394){
var value = cljs.core.first(arglist__17394);
var static_args = cljs.core.rest(arglist__17394);
return G__17392__delegate(value,static_args);
});
G__17392.cljs$core$IFn$_invoke$arity$variadic = G__17392__delegate;
return G__17392;
})()
;
;})(react_component,factory))
});
kioo.core.make_dom = (function kioo$core$make_dom(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$sym.cljs$core$IFn$_invoke$arity$1(node),cljs.core.clj__GT_js(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node)),kioo.util.flatten_nodes(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node)));
} else {
return node;
}
});
kioo.core.to_list = (function kioo$core$to_list(vals){
if(cljs.core.seq_QMARK_(vals)){
return vals;
} else {
return cljs.core._conj(cljs.core.List.EMPTY,vals);
}
});
kioo.core.handle_wrapper = (function kioo$core$handle_wrapper(dom_fn){
return (function() { 
var kioo$core$handle_wrapper_$_hw__delegate = function (node,body){
var rnode = ((cljs.core.seq_QMARK_(node))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kioo$core$handle_wrapper_$_hw,node):(((cljs.core.map_QMARK_(node)) && (!(cljs.core.empty_QMARK_(cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(node)))))?(function (){var revents = cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(node);
var props = (function (){var G__17398 = cljs.core.clj__GT_js(revents);
(G__17398["dom-fn"] = dom_fn);

(G__17398["node"] = node);

return G__17398;
})();
return (kioo.util.WrapComponent.cljs$core$IFn$_invoke$arity$1 ? kioo.util.WrapComponent.cljs$core$IFn$_invoke$arity$1(props) : kioo.util.WrapComponent.call(null,props));
})():(dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(node) : dom_fn.call(null,node))
));
if(cljs.core.empty_QMARK_(body)){
return rnode;
} else {
return cljs.core.cons(rnode,kioo.core.to_list(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(kioo$core$handle_wrapper_$_hw,body)));
}
};
var kioo$core$handle_wrapper_$_hw = function (node,var_args){
var body = null;
if (arguments.length > 1) {
var G__17399__i = 0, G__17399__a = new Array(arguments.length -  1);
while (G__17399__i < G__17399__a.length) {G__17399__a[G__17399__i] = arguments[G__17399__i + 1]; ++G__17399__i;}
  body = new cljs.core.IndexedSeq(G__17399__a,0);
} 
return kioo$core$handle_wrapper_$_hw__delegate.call(this,node,body);};
kioo$core$handle_wrapper_$_hw.cljs$lang$maxFixedArity = 1;
kioo$core$handle_wrapper_$_hw.cljs$lang$applyTo = (function (arglist__17400){
var node = cljs.core.first(arglist__17400);
var body = cljs.core.rest(arglist__17400);
return kioo$core$handle_wrapper_$_hw__delegate(node,body);
});
kioo$core$handle_wrapper_$_hw.cljs$core$IFn$_invoke$arity$variadic = kioo$core$handle_wrapper_$_hw__delegate;
return kioo$core$handle_wrapper_$_hw;
})()
;
});
kioo.core.content = kioo.common.content;
kioo.core.append = kioo.common.append;
kioo.core.prepend = kioo.common.prepend;
kioo.core.after = (function kioo$core$after(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17402 = arguments.length;
var i__6227__auto___17403 = (0);
while(true){
if((i__6227__auto___17403 < len__6226__auto___17402)){
args__6233__auto__.push((arguments[i__6227__auto___17403]));

var G__17404 = (i__6227__auto___17403 + (1));
i__6227__auto___17403 = G__17404;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.core.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(node,body);
} else {
return cljs.core.cons(kioo.core.make_dom(node),body);
}
});
});

kioo.core.after.cljs$lang$maxFixedArity = (0);

kioo.core.after.cljs$lang$applyTo = (function (seq17401){
return kioo.core.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17401));
});
kioo.core.before = (function kioo$core$before(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17406 = arguments.length;
var i__6227__auto___17407 = (0);
while(true){
if((i__6227__auto___17407 < len__6226__auto___17406)){
args__6233__auto__.push((arguments[i__6227__auto___17407]));

var G__17408 = (i__6227__auto___17407 + (1));
i__6227__auto___17407 = G__17408;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.core.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,node);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom(node)], null));
}
});
});

kioo.core.before.cljs$lang$maxFixedArity = (0);

kioo.core.before.cljs$lang$applyTo = (function (seq17405){
return kioo.core.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17405));
});
kioo.core.substitute = kioo.common.substitute;
kioo.core.set_attr = kioo.common.set_attr;
kioo.core.remove_attr = kioo.common.remove_attr;
kioo.core.do__GT_ = kioo.common.do__GT_;
kioo.core.set_style = kioo.common.set_style;
kioo.core.remove_style = kioo.common.remove_style;
kioo.core.set_class = kioo.common.set_class;
kioo.core.add_class = kioo.common.add_class;
kioo.core.remove_class = kioo.common.remove_class;
kioo.core.wrap = (function kioo$core$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$sym,(React.DOM[cljs.core.name(tag)]),cljs.core.cst$kw$attrs,kioo.util.convert_attrs(attrs),cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.core.make_dom(node)], null)], null);
});
});
kioo.core.unwrap = kioo.common.unwrap;
kioo.core.html = (function kioo$core$html(content){
return sablono.interpreter.interpret(content);
});
kioo.core.html_content = (function kioo$core$html_content(content){
return (function (node){
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17409_SHARP_){
return sablono.interpreter.interpret(hickory.core.as_hiccup(p1__17409_SHARP_));
}),hickory.core.parse_fragment(content));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,children);
});
});
kioo.core.listen_react_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["onRender",null,"onUpdate",null,"onWillMount",null,"onMount",null,"onWillUpdate",null,"onWillReceiveProps",null], null), null);
kioo.core.listen = (function kioo$core$listen(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17418 = arguments.length;
var i__6227__auto___17419 = (0);
while(true){
if((i__6227__auto___17419 < len__6226__auto___17418)){
args__6233__auto__.push((arguments[i__6227__auto___17419]));

var G__17420 = (i__6227__auto___17419 + (1));
i__6227__auto___17419 = G__17420;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (events_PLUS_fns){
var pairs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17412){
var vec__17413 = p__17412;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17413,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case(k),v], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),events_PLUS_fns));
var vec__17411 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pairs){
return (function (p__17414,p__17415){
var vec__17416 = p__17414;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17416,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17416,(1),null);
var vec__17417 = p__17415;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17417,(1),null);
if(cljs.core.truth_((kioo.core.listen_react_events.cljs$core$IFn$_invoke$arity$1 ? kioo.core.listen_react_events.cljs$core$IFn$_invoke$arity$1(k) : kioo.core.listen_react_events.call(null,k)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v),s], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,v)], null);
}
});})(pairs))
,cljs.core.PersistentVector.EMPTY,pairs);
var rev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(0),null);
var sev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17411,(1),null);
return ((function (pairs,vec__17411,rev,sev){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$attrs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node),sev], 0)),cljs.core.array_seq([cljs.core.cst$kw$events,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(node),rev], 0))], 0));
});
;})(pairs,vec__17411,rev,sev))
});

kioo.core.listen.cljs$lang$maxFixedArity = (0);

kioo.core.listen.cljs$lang$applyTo = (function (seq17410){
return kioo.core.listen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17410));
});
kioo.core.lifecycle_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["willMount",null,"willUpdate",null,"willReceiveProps",null,"initState",null,"willUnmount",null,"defaultProps",null,"shouldUpdate",null,"didMount",null,"didUpdate",null], null), null);
/**
 * this transform allows you to wrap the componet in react lifecycle methods.
 * the methods are passed in as a map of key functions pairs.
 * {:init-state (fn [this] ...)
 *  :default-props (fn [this] ...)
 *  :should-update (fn [this next-props next-state] ...)
 *  :will-mount (fn [this] ...)
 *  :did-mount (fn [this] ...)
 *  :will-unmount (fn [this] ...)
 *  :will-receive-props (fn [this next-props] ...)
 *  :will-update (fn [this next-props next-state] ...)
 *  :did-update (fn [this prev-props prev-state] ...)}
 */
kioo.core.lifecycle = (function kioo$core$lifecycle(events_fns){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$events,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$events.cljs$core$IFn$_invoke$arity$1(node),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5940__auto__ = (function kioo$core$lifecycle_$_iter__17431(s__17432){
return (new cljs.core.LazySeq(null,(function (){
var s__17432__$1 = s__17432;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17432__$1);
if(temp__4425__auto__){
var s__17432__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17432__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17432__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17434 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17433 = (0);
while(true){
if((i__17433 < size__5939__auto__)){
var vec__17439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17433);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(1),null);
cljs.core.chunk_append(b__17434,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case(k),v], null));

var G__17441 = (i__17433 + (1));
i__17433 = G__17441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17434),kioo$core$lifecycle_$_iter__17431(cljs.core.chunk_rest(s__17432__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17434),null);
}
} else {
var vec__17440 = cljs.core.first(s__17432__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17440,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17440,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kioo.util.camel_case(k),v], null),kioo$core$lifecycle_$_iter__17431(cljs.core.rest(s__17432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(events_fns);
})())], 0)));
});
});
kioo.core.render = (function kioo$core$render(component,node){
return React.render(component,node);
});
