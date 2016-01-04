// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('kioo.common');
goog.require('cljs.core');
goog.require('kioo.util');
goog.require('clojure.string');
kioo.common.content = (function kioo$common$content(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17311 = arguments.length;
var i__6227__auto___17312 = (0);
while(true){
if((i__6227__auto___17312 < len__6226__auto___17311)){
args__6233__auto__.push((arguments[i__6227__auto___17312]));

var G__17313 = (i__6227__auto___17312 + (1));
i__6227__auto___17312 = G__17313;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.content.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,body);
});
});

kioo.common.content.cljs$lang$maxFixedArity = (0);

kioo.common.content.cljs$lang$applyTo = (function (seq17310){
return kioo.common.content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17310));
});
kioo.common.append = (function kioo$common$append(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17315 = arguments.length;
var i__6227__auto___17316 = (0);
while(true){
if((i__6227__auto___17316 < len__6226__auto___17315)){
args__6233__auto__.push((arguments[i__6227__auto___17316]));

var G__17317 = (i__6227__auto___17316 + (1));
i__6227__auto___17316 = G__17317;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.append.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.append.cljs$lang$maxFixedArity = (0);

kioo.common.append.cljs$lang$applyTo = (function (seq17314){
return kioo.common.append.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17314));
});
kioo.common.prepend = (function kioo$common$prepend(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17319 = arguments.length;
var i__6227__auto___17320 = (0);
while(true){
if((i__6227__auto___17320 < len__6226__auto___17319)){
args__6233__auto__.push((arguments[i__6227__auto___17320]));

var G__17321 = (i__6227__auto___17320 + (1));
i__6227__auto___17320 = G__17321;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$content,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(body,cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node)));
});
});

kioo.common.prepend.cljs$lang$maxFixedArity = (0);

kioo.common.prepend.cljs$lang$applyTo = (function (seq17318){
return kioo.common.prepend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17318));
});
kioo.common.substitute = (function kioo$common$substitute(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17323 = arguments.length;
var i__6227__auto___17324 = (0);
while(true){
if((i__6227__auto___17324 < len__6226__auto___17323)){
args__6233__auto__.push((arguments[i__6227__auto___17324]));

var G__17325 = (i__6227__auto___17324 + (1));
i__6227__auto___17324 = G__17325;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return body;
});
});

kioo.common.substitute.cljs$lang$maxFixedArity = (0);

kioo.common.substitute.cljs$lang$applyTo = (function (seq17322){
return kioo.common.substitute.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17322));
});
kioo.common.set_attr = (function kioo$common$set_attr(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17329 = arguments.length;
var i__6227__auto___17330 = (0);
while(true){
if((i__6227__auto___17330 < len__6226__auto___17329)){
args__6233__auto__.push((arguments[i__6227__auto___17330]));

var G__17331 = (i__6227__auto___17330 + (1));
i__6227__auto___17330 = G__17331;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),body);
return ((function (els){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$attrs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (els){
return (function (n,p__17327){
var vec__17328 = p__17327;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17328,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,k,v);
});})(els))
,cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node),els));
});
;})(els))
});

kioo.common.set_attr.cljs$lang$maxFixedArity = (0);

kioo.common.set_attr.cljs$lang$applyTo = (function (seq17326){
return kioo.common.set_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17326));
});
kioo.common.remove_attr = (function kioo$common$remove_attr(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17333 = arguments.length;
var i__6227__auto___17334 = (0);
while(true){
if((i__6227__auto___17334 < len__6226__auto___17333)){
args__6233__auto__.push((arguments[i__6227__auto___17334]));

var G__17335 = (i__6227__auto___17334 + (1));
i__6227__auto___17334 = G__17335;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$attrs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (n,k){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(n,k);
}),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(node),body));
});
});

kioo.common.remove_attr.cljs$lang$maxFixedArity = (0);

kioo.common.remove_attr.cljs$lang$applyTo = (function (seq17332){
return kioo.common.remove_attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17332));
});
kioo.common.do__GT_ = (function kioo$common$do__GT_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17339 = arguments.length;
var i__6227__auto___17340 = (0);
while(true){
if((i__6227__auto___17340 < len__6226__auto___17339)){
args__6233__auto__.push((arguments[i__6227__auto___17340]));

var G__17341 = (i__6227__auto___17340 + (1));
i__6227__auto___17340 = G__17341;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17337_SHARP_,p2__17336_SHARP_){
return (p2__17336_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__17336_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__17337_SHARP_) : p2__17336_SHARP_.call(null,p1__17337_SHARP_));
}),node,body);
});
});

kioo.common.do__GT_.cljs$lang$maxFixedArity = (0);

kioo.common.do__GT_.cljs$lang$applyTo = (function (seq17338){
return kioo.common.do__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17338));
});
kioo.common.set_style = (function kioo$common$set_style(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17346 = arguments.length;
var i__6227__auto___17347 = (0);
while(true){
if((i__6227__auto___17347 < len__6226__auto___17346)){
args__6233__auto__.push((arguments[i__6227__auto___17347]));

var G__17348 = (i__6227__auto___17347 + (1));
i__6227__auto___17347 = G__17348;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var els = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),body);
var mp = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (els){
return (function (m,p__17344){
var vec__17345 = p__17344;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17345,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17345,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
});})(els))
,cljs.core.PersistentArrayMap.EMPTY,els);
return ((function (els,mp){
return (function (node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$style], null),((function (els,mp){
return (function (p1__17342_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17342_SHARP_,mp], 0));
});})(els,mp))
);
});
;})(els,mp))
});

kioo.common.set_style.cljs$lang$maxFixedArity = (0);

kioo.common.set_style.cljs$lang$applyTo = (function (seq17343){
return kioo.common.set_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17343));
});
kioo.common.remove_style = (function kioo$common$remove_style(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17352 = arguments.length;
var i__6227__auto___17353 = (0);
while(true){
if((i__6227__auto___17353 < len__6226__auto___17352)){
args__6233__auto__.push((arguments[i__6227__auto___17353]));

var G__17354 = (i__6227__auto___17353 + (1));
i__6227__auto___17353 = G__17354;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic = (function (body){
return (function (node){
var style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17349_SHARP_,p2__17350_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__17349_SHARP_,cljs.core.name(p2__17350_SHARP_),cljs.core.array_seq([p2__17350_SHARP_], 0));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$style], null)),body);
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$style], null),style);
});
});

kioo.common.remove_style.cljs$lang$maxFixedArity = (0);

kioo.common.remove_style.cljs$lang$applyTo = (function (seq17351){
return kioo.common.remove_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17351));
});
kioo.common.get_class_regex = (function kioo$common$get_class_regex(cls){
return (new RegExp([cljs.core.str("(\\s|^)"),cljs.core.str(cls),cljs.core.str("(\\s|$)")].join('')));
});
kioo.common.has_class_QMARK_ = (function kioo$common$has_class_QMARK_(cur_cls,cls){
var and__5156__auto__ = cur_cls;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.re_find(kioo.common.get_class_regex(cls),cur_cls);
} else {
return and__5156__auto__;
}
});
kioo.common.set_class = (function kioo$common$set_class(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17358 = arguments.length;
var i__6227__auto___17359 = (0);
while(true){
if((i__6227__auto___17359 < len__6226__auto___17358)){
args__6233__auto__.push((arguments[i__6227__auto___17359]));

var G__17360 = (i__6227__auto___17359 + (1));
i__6227__auto___17359 = G__17360;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17355_SHARP_,p2__17356_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__17355_SHARP_,p2__17356_SHARP_))){
return p1__17355_SHARP_;
} else {
return [cljs.core.str(p1__17355_SHARP_),cljs.core.str(" "),cljs.core.str(p2__17356_SHARP_)].join('');
}
}),"",values);
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$className], null),new_class);
});
});

kioo.common.set_class.cljs$lang$maxFixedArity = (0);

kioo.common.set_class.cljs$lang$applyTo = (function (seq17357){
return kioo.common.set_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17357));
});
kioo.common.add_class = (function kioo$common$add_class(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17364 = arguments.length;
var i__6227__auto___17365 = (0);
while(true){
if((i__6227__auto___17365 < len__6226__auto___17364)){
args__6233__auto__.push((arguments[i__6227__auto___17365]));

var G__17366 = (i__6227__auto___17365 + (1));
i__6227__auto___17365 = G__17366;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17361_SHARP_,p2__17362_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__17361_SHARP_,p2__17362_SHARP_))){
return p1__17361_SHARP_;
} else {
return [cljs.core.str(p1__17361_SHARP_),cljs.core.str(" "),cljs.core.str(p2__17362_SHARP_)].join('');
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$className], null)),values);
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$className], null),new_class);
});
});

kioo.common.add_class.cljs$lang$maxFixedArity = (0);

kioo.common.add_class.cljs$lang$applyTo = (function (seq17363){
return kioo.common.add_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17363));
});
kioo.common.remove_class = (function kioo$common$remove_class(var_args){
var args__6233__auto__ = [];
var len__6226__auto___17370 = arguments.length;
var i__6227__auto___17371 = (0);
while(true){
if((i__6227__auto___17371 < len__6226__auto___17370)){
args__6233__auto__.push((arguments[i__6227__auto___17371]));

var G__17372 = (i__6227__auto___17371 + (1));
i__6227__auto___17371 = G__17372;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return (function (node){
var new_class = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17367_SHARP_,p2__17368_SHARP_){
if(cljs.core.truth_(kioo.common.has_class_QMARK_(p1__17367_SHARP_,p2__17368_SHARP_))){
return clojure.string.replace(p1__17367_SHARP_,kioo.common.get_class_regex(p2__17368_SHARP_)," ");
} else {
return p1__17367_SHARP_;
}
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$className], null)),values);
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$className], null),new_class);
});
});

kioo.common.remove_class.cljs$lang$maxFixedArity = (0);

kioo.common.remove_class.cljs$lang$applyTo = (function (seq17369){
return kioo.common.remove_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17369));
});
kioo.common.unwrap = (function kioo$common$unwrap(node){
return cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(node);
});
