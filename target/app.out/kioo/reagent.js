// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kioo.reagent');
goog.require('cljs.core');
goog.require('kioo.core');
goog.require('kioo.util');
goog.require('reagent.core');
kioo.reagent.make_dom = (function kioo$reagent$make_dom(node){
var rnode = ((cljs.core.map_QMARK_(node))?(function (){var c = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.vector_QMARK_(c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node),(reagent.core.as_component.cljs$core$IFn$_invoke$arity$1 ? reagent.core.as_component.cljs$core$IFn$_invoke$arity$1(c) : reagent.core.as_component.call(null,c))], null);
} else {
if(cljs.core.seq_QMARK_(c)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (c){
return (function (p1__17444_SHARP_,p2__17445_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__17444_SHARP_,(reagent.core.as_component.cljs$core$IFn$_invoke$arity$1 ? reagent.core.as_component.cljs$core$IFn$_invoke$arity$1(p2__17445_SHARP_) : reagent.core.as_component.call(null,p2__17445_SHARP_)));
});})(c))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node)], null),c);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(node),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node),c], null);

}
}
})():node);
return (reagent.core.as_component.cljs$core$IFn$_invoke$arity$1 ? reagent.core.as_component.cljs$core$IFn$_invoke$arity$1(rnode) : reagent.core.as_component.call(null,rnode));
});
kioo.reagent.content = kioo.core.content;
kioo.reagent.append = kioo.core.append;
kioo.reagent.prepend = kioo.core.prepend;
kioo.reagent.after = (function kioo$reagent$after(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17447 = arguments.length;
var i__6227__auto___17448 = (0);
while(true){
if((i__6227__auto___17448 < len__6226__auto___17447)){
args__6233__auto__.push((arguments[i__6227__auto___17448]));

var G__17449 = (i__6227__auto___17448 + (1));
i__6227__auto___17448 = G__17449;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(node,body);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,node);
}
});
});

kioo.reagent.after.cljs$lang$maxFixedArity = (0);

kioo.reagent.after.cljs$lang$applyTo = (function (seq17446){
return kioo.reagent.after.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17446));
});
kioo.reagent.before = (function kioo$reagent$before(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17451 = arguments.length;
var i__6227__auto___17452 = (0);
while(true){
if((i__6227__auto___17452 < len__6226__auto___17451)){
args__6233__auto__.push((arguments[i__6227__auto___17452]));

var G__17453 = (i__6227__auto___17452 + (1));
i__6227__auto___17452 = G__17453;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,node);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,cljs.core._conj(cljs.core.List.EMPTY,node));
}
});
});

kioo.reagent.before.cljs$lang$maxFixedArity = (0);

kioo.reagent.before.cljs$lang$applyTo = (function (seq17450){
return kioo.reagent.before.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17450));
});
kioo.reagent.substitute = kioo.core.substitute;
kioo.reagent.set_attr = kioo.core.set_attr;
kioo.reagent.remove_attr = kioo.core.remove_attr;
kioo.reagent.do__GT_ = kioo.core.do__GT_;
kioo.reagent.set_style = kioo.core.set_style;
kioo.reagent.remove_style = kioo.core.remove_style;
kioo.reagent.set_class = kioo.core.set_class;
kioo.reagent.add_class = kioo.core.add_class;
kioo.reagent.remove_class = kioo.core.remove_class;
kioo.reagent.wrap = (function kioo$reagent$wrap(tag,attrs){
return (function (node){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$attrs,attrs,cljs.core.cst$kw$content,kioo.reagent.make_dom(node)], null);
});
});
kioo.reagent.unwrap = kioo.core.unwrap;
kioo.reagent.html = kioo.core.html;
kioo.reagent.html_content = kioo.core.html_content;
kioo.reagent.listen = kioo.core.listen;
kioo.reagent.lifecycle = kioo.core.lifecycle;
