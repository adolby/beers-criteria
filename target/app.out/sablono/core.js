// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__16997__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__16996 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996,(0),null);
var body = cljs.core.nthnext(vec__16996,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16997 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16998__i = 0, G__16998__a = new Array(arguments.length -  0);
while (G__16998__i < G__16998__a.length) {G__16998__a[G__16998__i] = arguments[G__16998__i + 0]; ++G__16998__i;}
  args = new cljs.core.IndexedSeq(G__16998__a,0);
} 
return G__16997__delegate.call(this,args);};
G__16997.cljs$lang$maxFixedArity = 0;
G__16997.cljs$lang$applyTo = (function (arglist__16999){
var args = cljs.core.seq(arglist__16999);
return G__16997__delegate(args);
});
G__16997.cljs$core$IFn$_invoke$arity$variadic = G__16997__delegate;
return G__16997;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5940__auto__ = (function sablono$core$update_arglists_$_iter__17006(s__17007){
return (new cljs.core.LazySeq(null,(function (){
var s__17007__$1 = s__17007;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17007__$1);
if(temp__4425__auto__){
var s__17007__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17007__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17007__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17009 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17008 = (0);
while(true){
if((i__17008 < size__5939__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17008);
cljs.core.chunk_append(b__17009,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__17012 = (i__17008 + (1));
i__17008 = G__17012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17009),sablono$core$update_arglists_$_iter__17006(cljs.core.chunk_rest(s__17007__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17009),null);
}
} else {
var args = cljs.core.first(s__17007__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__17006(cljs.core.rest(s__17007__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17020 = arguments.length;
var i__6227__auto___17021 = (0);
while(true){
if((i__6227__auto___17021 < len__6226__auto___17020)){
args__6233__auto__.push((arguments[i__6227__auto___17021]));

var G__17022 = (i__6227__auto___17021 + (1));
i__6227__auto___17021 = G__17022;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5940__auto__ = (function sablono$core$iter__17014(s__17015){
return (new cljs.core.LazySeq(null,(function (){
var s__17015__$1 = s__17015;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17015__$1);
if(temp__4425__auto__){
var s__17015__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17015__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17015__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17017 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17016 = (0);
while(true){
if((i__17016 < size__5939__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17016);
cljs.core.chunk_append(b__17017,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__17023 = (i__17016 + (1));
i__17016 = G__17023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17017),sablono$core$iter__17014(cljs.core.chunk_rest(s__17015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17017),null);
}
} else {
var style = cljs.core.first(s__17015__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__17014(cljs.core.rest(s__17015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17013){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17013));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__17028 = goog.dom.getDocument().body;
var G__17029 = (function (){var G__17030 = "script";
var G__17031 = {"src": src};
return goog.dom.createDom(G__17030,G__17031);
})();
return goog.dom.appendChild(G__17028,G__17029);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17032 = (function sablono$core$link_to17032(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17035 = arguments.length;
var i__6227__auto___17036 = (0);
while(true){
if((i__6227__auto___17036 < len__6226__auto___17035)){
args__6233__auto__.push((arguments[i__6227__auto___17036]));

var G__17037 = (i__6227__auto___17036 + (1));
i__6227__auto___17036 = G__17037;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.link_to17032.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.link_to17032.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to17032.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17032.cljs$lang$applyTo = (function (seq17033){
var G__17034 = cljs.core.first(seq17033);
var seq17033__$1 = cljs.core.next(seq17033);
return sablono.core.link_to17032.cljs$core$IFn$_invoke$arity$variadic(G__17034,seq17033__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to17032);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17038 = (function sablono$core$mail_to17038(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17043 = arguments.length;
var i__6227__auto___17044 = (0);
while(true){
if((i__6227__auto___17044 < len__6226__auto___17043)){
args__6233__auto__.push((arguments[i__6227__auto___17044]));

var G__17045 = (i__6227__auto___17044 + (1));
i__6227__auto___17044 = G__17045;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17038.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.mail_to17038.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17041){
var vec__17042 = p__17041;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17042,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5168__auto__ = content;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17038.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17038.cljs$lang$applyTo = (function (seq17039){
var G__17040 = cljs.core.first(seq17039);
var seq17039__$1 = cljs.core.next(seq17039);
return sablono.core.mail_to17038.cljs$core$IFn$_invoke$arity$variadic(G__17040,seq17039__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to17038);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17046 = (function sablono$core$unordered_list17046(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5940__auto__ = (function sablono$core$unordered_list17046_$_iter__17053(s__17054){
return (new cljs.core.LazySeq(null,(function (){
var s__17054__$1 = s__17054;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17054__$1);
if(temp__4425__auto__){
var s__17054__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17054__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17054__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17056 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17055 = (0);
while(true){
if((i__17055 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17055);
cljs.core.chunk_append(b__17056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__17059 = (i__17055 + (1));
i__17055 = G__17059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17056),sablono$core$unordered_list17046_$_iter__17053(cljs.core.chunk_rest(s__17054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17056),null);
}
} else {
var x = cljs.core.first(s__17054__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list17046_$_iter__17053(cljs.core.rest(s__17054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list17046);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17060 = (function sablono$core$ordered_list17060(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5940__auto__ = (function sablono$core$ordered_list17060_$_iter__17067(s__17068){
return (new cljs.core.LazySeq(null,(function (){
var s__17068__$1 = s__17068;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17068__$1);
if(temp__4425__auto__){
var s__17068__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17068__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17068__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17070 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17069 = (0);
while(true){
if((i__17069 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17069);
cljs.core.chunk_append(b__17070,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__17073 = (i__17069 + (1));
i__17069 = G__17073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17070),sablono$core$ordered_list17060_$_iter__17067(cljs.core.chunk_rest(s__17068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17070),null);
}
} else {
var x = cljs.core.first(s__17068__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list17060_$_iter__17067(cljs.core.rest(s__17068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list17060);
/**
 * Create an image element.
 */
sablono.core.image17074 = (function sablono$core$image17074(var_args){
var args17075 = [];
var len__6226__auto___17078 = arguments.length;
var i__6227__auto___17079 = (0);
while(true){
if((i__6227__auto___17079 < len__6226__auto___17078)){
args17075.push((arguments[i__6227__auto___17079]));

var G__17080 = (i__6227__auto___17079 + (1));
i__6227__auto___17079 = G__17080;
continue;
} else {
}
break;
}

var G__17077 = args17075.length;
switch (G__17077) {
case 1:
return sablono.core.image17074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17075.length)].join('')));

}
});

sablono.core.image17074.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image17074.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image17074.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image17074);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17082_SHARP_,p2__17083_SHARP_){
return [cljs.core.str(p1__17082_SHARP_),cljs.core.str("["),cljs.core.str(p2__17083_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__17084_SHARP_,p2__17085_SHARP_){
return [cljs.core.str(p1__17084_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17085_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17086 = (function sablono$core$color_field17086(var_args){
var args17087 = [];
var len__6226__auto___17154 = arguments.length;
var i__6227__auto___17155 = (0);
while(true){
if((i__6227__auto___17155 < len__6226__auto___17154)){
args17087.push((arguments[i__6227__auto___17155]));

var G__17156 = (i__6227__auto___17155 + (1));
i__6227__auto___17155 = G__17156;
continue;
} else {
}
break;
}

var G__17089 = args17087.length;
switch (G__17089) {
case 1:
return sablono.core.color_field17086.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17086.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17087.length)].join('')));

}
});

sablono.core.color_field17086.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.color_field17086.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.color_field17086.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.color_field17086.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field17086);

/**
 * Creates a date input field.
 */
sablono.core.date_field17090 = (function sablono$core$date_field17090(var_args){
var args17091 = [];
var len__6226__auto___17158 = arguments.length;
var i__6227__auto___17159 = (0);
while(true){
if((i__6227__auto___17159 < len__6226__auto___17158)){
args17091.push((arguments[i__6227__auto___17159]));

var G__17160 = (i__6227__auto___17159 + (1));
i__6227__auto___17159 = G__17160;
continue;
} else {
}
break;
}

var G__17093 = args17091.length;
switch (G__17093) {
case 1:
return sablono.core.date_field17090.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17090.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17091.length)].join('')));

}
});

sablono.core.date_field17090.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.date_field17090.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.date_field17090.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.date_field17090.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field17090);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17094 = (function sablono$core$datetime_field17094(var_args){
var args17095 = [];
var len__6226__auto___17162 = arguments.length;
var i__6227__auto___17163 = (0);
while(true){
if((i__6227__auto___17163 < len__6226__auto___17162)){
args17095.push((arguments[i__6227__auto___17163]));

var G__17164 = (i__6227__auto___17163 + (1));
i__6227__auto___17163 = G__17164;
continue;
} else {
}
break;
}

var G__17097 = args17095.length;
switch (G__17097) {
case 1:
return sablono.core.datetime_field17094.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17095.length)].join('')));

}
});

sablono.core.datetime_field17094.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.datetime_field17094.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.datetime_field17094.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.datetime_field17094.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field17094);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17098 = (function sablono$core$datetime_local_field17098(var_args){
var args17099 = [];
var len__6226__auto___17166 = arguments.length;
var i__6227__auto___17167 = (0);
while(true){
if((i__6227__auto___17167 < len__6226__auto___17166)){
args17099.push((arguments[i__6227__auto___17167]));

var G__17168 = (i__6227__auto___17167 + (1));
i__6227__auto___17167 = G__17168;
continue;
} else {
}
break;
}

var G__17101 = args17099.length;
switch (G__17101) {
case 1:
return sablono.core.datetime_local_field17098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17099.length)].join('')));

}
});

sablono.core.datetime_local_field17098.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.datetime_local_field17098.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.datetime_local_field17098.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.datetime_local_field17098.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field17098);

/**
 * Creates a email input field.
 */
sablono.core.email_field17102 = (function sablono$core$email_field17102(var_args){
var args17103 = [];
var len__6226__auto___17170 = arguments.length;
var i__6227__auto___17171 = (0);
while(true){
if((i__6227__auto___17171 < len__6226__auto___17170)){
args17103.push((arguments[i__6227__auto___17171]));

var G__17172 = (i__6227__auto___17171 + (1));
i__6227__auto___17171 = G__17172;
continue;
} else {
}
break;
}

var G__17105 = args17103.length;
switch (G__17105) {
case 1:
return sablono.core.email_field17102.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17102.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17103.length)].join('')));

}
});

sablono.core.email_field17102.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.email_field17102.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.email_field17102.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.email_field17102.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field17102);

/**
 * Creates a file input field.
 */
sablono.core.file_field17106 = (function sablono$core$file_field17106(var_args){
var args17107 = [];
var len__6226__auto___17174 = arguments.length;
var i__6227__auto___17175 = (0);
while(true){
if((i__6227__auto___17175 < len__6226__auto___17174)){
args17107.push((arguments[i__6227__auto___17175]));

var G__17176 = (i__6227__auto___17175 + (1));
i__6227__auto___17175 = G__17176;
continue;
} else {
}
break;
}

var G__17109 = args17107.length;
switch (G__17109) {
case 1:
return sablono.core.file_field17106.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17106.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17107.length)].join('')));

}
});

sablono.core.file_field17106.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.file_field17106.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.file_field17106.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.file_field17106.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field17106);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17110 = (function sablono$core$hidden_field17110(var_args){
var args17111 = [];
var len__6226__auto___17178 = arguments.length;
var i__6227__auto___17179 = (0);
while(true){
if((i__6227__auto___17179 < len__6226__auto___17178)){
args17111.push((arguments[i__6227__auto___17179]));

var G__17180 = (i__6227__auto___17179 + (1));
i__6227__auto___17179 = G__17180;
continue;
} else {
}
break;
}

var G__17113 = args17111.length;
switch (G__17113) {
case 1:
return sablono.core.hidden_field17110.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17110.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17111.length)].join('')));

}
});

sablono.core.hidden_field17110.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.hidden_field17110.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.hidden_field17110.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.hidden_field17110.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field17110);

/**
 * Creates a month input field.
 */
sablono.core.month_field17114 = (function sablono$core$month_field17114(var_args){
var args17115 = [];
var len__6226__auto___17182 = arguments.length;
var i__6227__auto___17183 = (0);
while(true){
if((i__6227__auto___17183 < len__6226__auto___17182)){
args17115.push((arguments[i__6227__auto___17183]));

var G__17184 = (i__6227__auto___17183 + (1));
i__6227__auto___17183 = G__17184;
continue;
} else {
}
break;
}

var G__17117 = args17115.length;
switch (G__17117) {
case 1:
return sablono.core.month_field17114.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17114.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17115.length)].join('')));

}
});

sablono.core.month_field17114.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.month_field17114.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.month_field17114.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.month_field17114.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field17114);

/**
 * Creates a number input field.
 */
sablono.core.number_field17118 = (function sablono$core$number_field17118(var_args){
var args17119 = [];
var len__6226__auto___17186 = arguments.length;
var i__6227__auto___17187 = (0);
while(true){
if((i__6227__auto___17187 < len__6226__auto___17186)){
args17119.push((arguments[i__6227__auto___17187]));

var G__17188 = (i__6227__auto___17187 + (1));
i__6227__auto___17187 = G__17188;
continue;
} else {
}
break;
}

var G__17121 = args17119.length;
switch (G__17121) {
case 1:
return sablono.core.number_field17118.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17118.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17119.length)].join('')));

}
});

sablono.core.number_field17118.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.number_field17118.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.number_field17118.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.number_field17118.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field17118);

/**
 * Creates a password input field.
 */
sablono.core.password_field17122 = (function sablono$core$password_field17122(var_args){
var args17123 = [];
var len__6226__auto___17190 = arguments.length;
var i__6227__auto___17191 = (0);
while(true){
if((i__6227__auto___17191 < len__6226__auto___17190)){
args17123.push((arguments[i__6227__auto___17191]));

var G__17192 = (i__6227__auto___17191 + (1));
i__6227__auto___17191 = G__17192;
continue;
} else {
}
break;
}

var G__17125 = args17123.length;
switch (G__17125) {
case 1:
return sablono.core.password_field17122.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17122.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17123.length)].join('')));

}
});

sablono.core.password_field17122.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.password_field17122.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.password_field17122.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.password_field17122.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field17122);

/**
 * Creates a range input field.
 */
sablono.core.range_field17126 = (function sablono$core$range_field17126(var_args){
var args17127 = [];
var len__6226__auto___17194 = arguments.length;
var i__6227__auto___17195 = (0);
while(true){
if((i__6227__auto___17195 < len__6226__auto___17194)){
args17127.push((arguments[i__6227__auto___17195]));

var G__17196 = (i__6227__auto___17195 + (1));
i__6227__auto___17195 = G__17196;
continue;
} else {
}
break;
}

var G__17129 = args17127.length;
switch (G__17129) {
case 1:
return sablono.core.range_field17126.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17126.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17127.length)].join('')));

}
});

sablono.core.range_field17126.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.range_field17126.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.range_field17126.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.range_field17126.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field17126);

/**
 * Creates a search input field.
 */
sablono.core.search_field17130 = (function sablono$core$search_field17130(var_args){
var args17131 = [];
var len__6226__auto___17198 = arguments.length;
var i__6227__auto___17199 = (0);
while(true){
if((i__6227__auto___17199 < len__6226__auto___17198)){
args17131.push((arguments[i__6227__auto___17199]));

var G__17200 = (i__6227__auto___17199 + (1));
i__6227__auto___17199 = G__17200;
continue;
} else {
}
break;
}

var G__17133 = args17131.length;
switch (G__17133) {
case 1:
return sablono.core.search_field17130.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17130.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17131.length)].join('')));

}
});

sablono.core.search_field17130.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.search_field17130.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.search_field17130.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.search_field17130.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field17130);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17134 = (function sablono$core$tel_field17134(var_args){
var args17135 = [];
var len__6226__auto___17202 = arguments.length;
var i__6227__auto___17203 = (0);
while(true){
if((i__6227__auto___17203 < len__6226__auto___17202)){
args17135.push((arguments[i__6227__auto___17203]));

var G__17204 = (i__6227__auto___17203 + (1));
i__6227__auto___17203 = G__17204;
continue;
} else {
}
break;
}

var G__17137 = args17135.length;
switch (G__17137) {
case 1:
return sablono.core.tel_field17134.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17134.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17135.length)].join('')));

}
});

sablono.core.tel_field17134.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.tel_field17134.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.tel_field17134.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.tel_field17134.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field17134);

/**
 * Creates a text input field.
 */
sablono.core.text_field17138 = (function sablono$core$text_field17138(var_args){
var args17139 = [];
var len__6226__auto___17206 = arguments.length;
var i__6227__auto___17207 = (0);
while(true){
if((i__6227__auto___17207 < len__6226__auto___17206)){
args17139.push((arguments[i__6227__auto___17207]));

var G__17208 = (i__6227__auto___17207 + (1));
i__6227__auto___17207 = G__17208;
continue;
} else {
}
break;
}

var G__17141 = args17139.length;
switch (G__17141) {
case 1:
return sablono.core.text_field17138.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17138.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17139.length)].join('')));

}
});

sablono.core.text_field17138.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.text_field17138.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.text_field17138.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.text_field17138.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field17138);

/**
 * Creates a time input field.
 */
sablono.core.time_field17142 = (function sablono$core$time_field17142(var_args){
var args17143 = [];
var len__6226__auto___17210 = arguments.length;
var i__6227__auto___17211 = (0);
while(true){
if((i__6227__auto___17211 < len__6226__auto___17210)){
args17143.push((arguments[i__6227__auto___17211]));

var G__17212 = (i__6227__auto___17211 + (1));
i__6227__auto___17211 = G__17212;
continue;
} else {
}
break;
}

var G__17145 = args17143.length;
switch (G__17145) {
case 1:
return sablono.core.time_field17142.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17142.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17143.length)].join('')));

}
});

sablono.core.time_field17142.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.time_field17142.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.time_field17142.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.time_field17142.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field17142);

/**
 * Creates a url input field.
 */
sablono.core.url_field17146 = (function sablono$core$url_field17146(var_args){
var args17147 = [];
var len__6226__auto___17214 = arguments.length;
var i__6227__auto___17215 = (0);
while(true){
if((i__6227__auto___17215 < len__6226__auto___17214)){
args17147.push((arguments[i__6227__auto___17215]));

var G__17216 = (i__6227__auto___17215 + (1));
i__6227__auto___17215 = G__17216;
continue;
} else {
}
break;
}

var G__17149 = args17147.length;
switch (G__17149) {
case 1:
return sablono.core.url_field17146.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17146.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17147.length)].join('')));

}
});

sablono.core.url_field17146.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.url_field17146.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.url_field17146.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.url_field17146.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field17146);

/**
 * Creates a week input field.
 */
sablono.core.week_field17150 = (function sablono$core$week_field17150(var_args){
var args17151 = [];
var len__6226__auto___17218 = arguments.length;
var i__6227__auto___17219 = (0);
while(true){
if((i__6227__auto___17219 < len__6226__auto___17218)){
args17151.push((arguments[i__6227__auto___17219]));

var G__17220 = (i__6227__auto___17219 + (1));
i__6227__auto___17219 = G__17220;
continue;
} else {
}
break;
}

var G__17153 = args17151.length;
switch (G__17153) {
case 1:
return sablono.core.week_field17150.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17150.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17151.length)].join('')));

}
});

sablono.core.week_field17150.cljs$core$IFn$_invoke$arity$1 = (function (name__16915__auto__){
return sablono.core.week_field17150.cljs$core$IFn$_invoke$arity$2(name__16915__auto__,null);
});

sablono.core.week_field17150.cljs$core$IFn$_invoke$arity$2 = (function (name__16915__auto__,value__16916__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__16915__auto__,value__16916__auto__);
});

sablono.core.week_field17150.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field17150);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17222 = (function sablono$core$check_box17222(var_args){
var args17223 = [];
var len__6226__auto___17226 = arguments.length;
var i__6227__auto___17227 = (0);
while(true){
if((i__6227__auto___17227 < len__6226__auto___17226)){
args17223.push((arguments[i__6227__auto___17227]));

var G__17228 = (i__6227__auto___17227 + (1));
i__6227__auto___17227 = G__17228;
continue;
} else {
}
break;
}

var G__17225 = args17223.length;
switch (G__17225) {
case 1:
return sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17223.length)].join('')));

}
});

sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box17222.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box17222.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box17222);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17230 = (function sablono$core$radio_button17230(var_args){
var args17231 = [];
var len__6226__auto___17234 = arguments.length;
var i__6227__auto___17235 = (0);
while(true){
if((i__6227__auto___17235 < len__6226__auto___17234)){
args17231.push((arguments[i__6227__auto___17235]));

var G__17236 = (i__6227__auto___17235 + (1));
i__6227__auto___17235 = G__17236;
continue;
} else {
}
break;
}

var G__17233 = args17231.length;
switch (G__17233) {
case 1:
return sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17231.length)].join('')));

}
});

sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button17230.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button17230.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button17230);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17238 = (function sablono$core$select_options17238(var_args){
var args17239 = [];
var len__6226__auto___17252 = arguments.length;
var i__6227__auto___17253 = (0);
while(true){
if((i__6227__auto___17253 < len__6226__auto___17252)){
args17239.push((arguments[i__6227__auto___17253]));

var G__17254 = (i__6227__auto___17253 + (1));
i__6227__auto___17253 = G__17254;
continue;
} else {
}
break;
}

var G__17241 = args17239.length;
switch (G__17241) {
case 1:
return sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17239.length)].join('')));

}
});

sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$2(coll,null);
});

sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5940__auto__ = (function sablono$core$iter__17242(s__17243){
return (new cljs.core.LazySeq(null,(function (){
var s__17243__$1 = s__17243;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__17243__$1);
if(temp__4425__auto__){
var s__17243__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17243__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__17243__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__17245 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__17244 = (0);
while(true){
if((i__17244 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__17244);
cljs.core.chunk_append(b__17245,((cljs.core.sequential_QMARK_(x))?(function (){var vec__17250 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17250,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__17256 = (i__17244 + (1));
i__17244 = G__17256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17245),sablono$core$iter__17242(cljs.core.chunk_rest(s__17243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17245),null);
}
} else {
var x = cljs.core.first(s__17243__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__17251 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17251,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17251,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17251,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options17238.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),sablono$core$iter__17242(cljs.core.rest(s__17243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
});

sablono.core.select_options17238.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options17238);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17257 = (function sablono$core$drop_down17257(var_args){
var args17258 = [];
var len__6226__auto___17261 = arguments.length;
var i__6227__auto___17262 = (0);
while(true){
if((i__6227__auto___17262 < len__6226__auto___17261)){
args17258.push((arguments[i__6227__auto___17262]));

var G__17263 = (i__6227__auto___17262 + (1));
i__6227__auto___17262 = G__17263;
continue;
} else {
}
break;
}

var G__17260 = args17258.length;
switch (G__17260) {
case 2:
return sablono.core.drop_down17257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17257.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17258.length)].join('')));

}
});

sablono.core.drop_down17257.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17257.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down17257.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down17257.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down17257);
/**
 * Creates a text area element.
 */
sablono.core.text_area17265 = (function sablono$core$text_area17265(var_args){
var args17266 = [];
var len__6226__auto___17269 = arguments.length;
var i__6227__auto___17270 = (0);
while(true){
if((i__6227__auto___17270 < len__6226__auto___17269)){
args17266.push((arguments[i__6227__auto___17270]));

var G__17271 = (i__6227__auto___17270 + (1));
i__6227__auto___17270 = G__17271;
continue;
} else {
}
break;
}

var G__17268 = args17266.length;
switch (G__17268) {
case 1:
return sablono.core.text_area17265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17266.length)].join('')));

}
});

sablono.core.text_area17265.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17265.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area17265.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area17265.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area17265);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17273 = (function sablono$core$label17273(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label17273);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17274 = (function sablono$core$submit_button17274(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button17274);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17275 = (function sablono$core$reset_button17275(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button17275);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17276 = (function sablono$core$form_to17276(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17281 = arguments.length;
var i__6227__auto___17282 = (0);
while(true){
if((i__6227__auto___17282 < len__6226__auto___17281)){
args__6233__auto__.push((arguments[i__6227__auto___17282]));

var G__17283 = (i__6227__auto___17282 + (1));
i__6227__auto___17282 = G__17283;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.form_to17276.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.form_to17276.cljs$core$IFn$_invoke$arity$variadic = (function (p__17279,body){
var vec__17280 = p__17279;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17280,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17280,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
});

sablono.core.form_to17276.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17276.cljs$lang$applyTo = (function (seq17277){
var G__17278 = cljs.core.first(seq17277);
var seq17277__$1 = cljs.core.next(seq17277);
return sablono.core.form_to17276.cljs$core$IFn$_invoke$arity$variadic(G__17278,seq17277__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to17276);
