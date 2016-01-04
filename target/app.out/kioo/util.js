// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kioo.util');
goog.require('cljs.core');
goog.require('clojure.string');
kioo.util._STAR_component_STAR_ = null;
/**
 * Wrapper component used to mix-in lifecycle methods
 * This was modified from a similar setup in quiescent
 */
kioo.util.WrapComponent = React.createFactory(React.createClass({"componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["didUpdate"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (this$.props["onUpdate"]);
if(cljs.core.truth_(or__5168__auto____$1)){
return or__5168__auto____$1;
} else {
return (this$.props["onRender"]);
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17286 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : f.call(null,this$,prev_props,prev_state));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17286;
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["willUnmount"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (this$.props["onUnmount"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17287 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17287;
}} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["willReceiveProps"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (this$.props["onWillReceiveProps"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17288 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,next_props) : f.call(null,this$,next_props));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17288;
}} else {
return null;
}
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var temp__4423__auto__ = (this$.props["shouldUpdate"]);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
var _STAR_component_STAR_17289 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : f.call(null,this$,next_props,next_state));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17289;
}} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((this$.props["node"]),(next_props["node"]));
}
}), "render": (function (){
var this$ = this;
var dom_fn = (this$.props["dom-fn"]);
var node = (this$.props["node"]);
return (dom_fn.cljs$core$IFn$_invoke$arity$1 ? dom_fn.cljs$core$IFn$_invoke$arity$1(node) : dom_fn.call(null,node));
}), "componentWillUpdate": (function (next_props,next_state){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["willUpdate"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (this$.props["onWillUpdate"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17290 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : f.call(null,this$,next_props,next_state));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17290;
}} else {
return null;
}
}), "getInitialState": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["initState"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17291 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17291;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["didMount"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
var or__5168__auto____$1 = (this$.props["onMount"]);
if(cljs.core.truth_(or__5168__auto____$1)){
return or__5168__auto____$1;
} else {
return (this$.props["onRender"]);
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17292 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17292;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = (function (){var or__5168__auto__ = (this$.props["willMount"]);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return (this$.props["onWillMount"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_17293 = kioo.util._STAR_component_STAR_;
kioo.util._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}finally {kioo.util._STAR_component_STAR_ = _STAR_component_STAR_17293;
}} else {
return null;
}
})}));
kioo.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
kioo.util.camel_case = (function kioo$util$camel_case(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name(dashed);
var vec__17295 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name_str,/-/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17295,(0),null);
var parts = cljs.core.nthnext(vec__17295,(1));
if(cljs.core.truth_((kioo.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1 ? kioo.util.dont_camel_case.cljs$core$IFn$_invoke$arity$1(start) : kioo.util.dont_camel_case.call(null,start)))){
return name_str;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,start,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,parts));
}
}
});
kioo.util.attribute_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17296_SHARP_,p2__17297_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17296_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__17297_SHARP_).toLowerCase()),p2__17297_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.fromArray([cljs.core.cst$kw$accessKey,cljs.core.cst$kw$allowFullScreen,cljs.core.cst$kw$allowTransparency,cljs.core.cst$kw$autoComplete,cljs.core.cst$kw$autoFocus,cljs.core.cst$kw$autoPlay,cljs.core.cst$kw$cellPadding,cljs.core.cst$kw$cellSpacing,cljs.core.cst$kw$charSet,cljs.core.cst$kw$colSpan,cljs.core.cst$kw$contentEditable,cljs.core.cst$kw$contextMenu,cljs.core.cst$kw$dateTime,cljs.core.cst$kw$encType,cljs.core.cst$kw$formEncType,cljs.core.cst$kw$formNoValidate,cljs.core.cst$kw$frameBorder,cljs.core.cst$kw$httpEquiv,cljs.core.cst$kw$itemProp,cljs.core.cst$kw$itemScope,cljs.core.cst$kw$itemType,cljs.core.cst$kw$maxLength,cljs.core.cst$kw$noValidate,cljs.core.cst$kw$radioGroup,cljs.core.cst$kw$readOnly,cljs.core.cst$kw$rowSpan,cljs.core.cst$kw$scrollLeft,cljs.core.cst$kw$scrollTop,cljs.core.cst$kw$spellCheck,cljs.core.cst$kw$srcDoc,cljs.core.cst$kw$tabIndex,cljs.core.cst$kw$gradientTransform,cljs.core.cst$kw$gradientUnits,cljs.core.cst$kw$spreadMethod,cljs.core.cst$kw$stopColor,cljs.core.cst$kw$stopOpacity,cljs.core.cst$kw$strokeLinecap,cljs.core.cst$kw$strokeWidth,cljs.core.cst$kw$textAnchor,cljs.core.cst$kw$viewBox], true)),cljs.core.cst$kw$accept_DASH_charset,cljs.core.cst$kw$acceptCharset,cljs.core.array_seq([cljs.core.cst$kw$class,cljs.core.cst$kw$className,cljs.core.cst$kw$for,cljs.core.cst$kw$htmlFor], 0));
kioo.util.transform_keys = (function kioo$util$transform_keys(attrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__17300){
var vec__17301 = p__17300;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17301,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(function (){var or__5168__auto__ = (kioo.util.attribute_map.cljs$core$IFn$_invoke$arity$1 ? kioo.util.attribute_map.cljs$core$IFn$_invoke$arity$1(k) : kioo.util.attribute_map.call(null,k));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return k;
}
})(),v);
}),cljs.core.PersistentArrayMap.EMPTY,attrs);
});
kioo.util.convert_attrs = (function kioo$util$convert_attrs(attrs){
var style = (cljs.core.truth_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(attrs))?(function (){var vals = cljs.core.re_seq(/\s*([^:;]*)[:][\s]*([^;]+)/,cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(attrs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vals){
return (function (m,p__17304){
var vec__17305 = p__17304;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17305,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17305,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17305,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v.trim());
});})(vals))
,cljs.core.PersistentArrayMap.EMPTY,vals);
})():null);
var class_name = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kioo.util.transform_keys(attrs),cljs.core.cst$kw$style,style);
});
kioo.util.flatten_nodes = (function kioo$util$flatten_nodes(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17307_SHARP_,p2__17306_SHARP_){
if(cljs.core.seq_QMARK_(p2__17306_SHARP_)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p2__17306_SHARP_,p1__17307_SHARP_);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17307_SHARP_,p2__17306_SHARP_);
}
}),cljs.core.List.EMPTY,cljs.core.reverse(nodes));
});
/**
 * Returns a regular expression that matches the HTML attribute `attr`
 *   and it's value.
 */
kioo.util.attr_pattern = (function kioo$util$attr_pattern(attr){
return cljs.core.re_pattern([cljs.core.str("\\s+"),cljs.core.str(cljs.core.name(attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
 * Strip the HTML attribute `attr` and it's value from the string `s`.
 */
kioo.util.strip_attr = (function kioo$util$strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace(s,kioo.util.attr_pattern(attr),"");
} else {
return null;
}
});
