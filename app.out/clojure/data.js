// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25196){
var vec__25197 = p__25196;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25197,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25200 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25200,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25200,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25200,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25204 = arguments.length;
switch (G__25204) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25206_25230 = clojure.data.equality_partition;
var G__25207_25231 = "null";
var G__25208_25232 = ((function (G__25206_25230,G__25207_25231){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25206_25230,G__25207_25231))
;
goog.object.set(G__25206_25230,G__25207_25231,G__25208_25232);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25209_25233 = clojure.data.equality_partition;
var G__25210_25234 = "string";
var G__25211_25235 = ((function (G__25209_25233,G__25210_25234){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25209_25233,G__25210_25234))
;
goog.object.set(G__25209_25233,G__25210_25234,G__25211_25235);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25212_25236 = clojure.data.equality_partition;
var G__25213_25237 = "number";
var G__25214_25238 = ((function (G__25212_25236,G__25213_25237){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25212_25236,G__25213_25237))
;
goog.object.set(G__25212_25236,G__25213_25237,G__25214_25238);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25215_25239 = clojure.data.equality_partition;
var G__25216_25240 = "array";
var G__25217_25241 = ((function (G__25215_25239,G__25216_25240){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__25215_25239,G__25216_25240))
;
goog.object.set(G__25215_25239,G__25216_25240,G__25217_25241);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25218_25242 = clojure.data.equality_partition;
var G__25219_25243 = "function";
var G__25220_25244 = ((function (G__25218_25242,G__25219_25243){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25218_25242,G__25219_25243))
;
goog.object.set(G__25218_25242,G__25219_25243,G__25220_25244);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25221_25245 = clojure.data.equality_partition;
var G__25222_25246 = "boolean";
var G__25223_25247 = ((function (G__25221_25245,G__25222_25246){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__25221_25245,G__25222_25246))
;
goog.object.set(G__25221_25245,G__25222_25246,G__25223_25247);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25224_25248 = clojure.data.equality_partition;
var G__25225_25249 = "_";
var G__25226_25250 = ((function (G__25224_25248,G__25225_25249){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__25224_25248,G__25225_25249))
;
goog.object.set(G__25224_25248,G__25225_25249,G__25226_25250);
goog.object.set(clojure.data.Diff,"null",true);

var G__25251_25275 = clojure.data.diff_similar;
var G__25252_25276 = "null";
var G__25253_25277 = ((function (G__25251_25275,G__25252_25276){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25251_25275,G__25252_25276))
;
goog.object.set(G__25251_25275,G__25252_25276,G__25253_25277);

goog.object.set(clojure.data.Diff,"string",true);

var G__25254_25278 = clojure.data.diff_similar;
var G__25255_25279 = "string";
var G__25256_25280 = ((function (G__25254_25278,G__25255_25279){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25254_25278,G__25255_25279))
;
goog.object.set(G__25254_25278,G__25255_25279,G__25256_25280);

goog.object.set(clojure.data.Diff,"number",true);

var G__25257_25281 = clojure.data.diff_similar;
var G__25258_25282 = "number";
var G__25259_25283 = ((function (G__25257_25281,G__25258_25282){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25257_25281,G__25258_25282))
;
goog.object.set(G__25257_25281,G__25258_25282,G__25259_25283);

goog.object.set(clojure.data.Diff,"array",true);

var G__25260_25284 = clojure.data.diff_similar;
var G__25261_25285 = "array";
var G__25262_25286 = ((function (G__25260_25284,G__25261_25285){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25260_25284,G__25261_25285))
;
goog.object.set(G__25260_25284,G__25261_25285,G__25262_25286);

goog.object.set(clojure.data.Diff,"function",true);

var G__25263_25287 = clojure.data.diff_similar;
var G__25264_25288 = "function";
var G__25265_25289 = ((function (G__25263_25287,G__25264_25288){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25263_25287,G__25264_25288))
;
goog.object.set(G__25263_25287,G__25264_25288,G__25265_25289);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25266_25290 = clojure.data.diff_similar;
var G__25267_25291 = "boolean";
var G__25268_25292 = ((function (G__25266_25290,G__25267_25291){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25266_25290,G__25267_25291))
;
goog.object.set(G__25266_25290,G__25267_25291,G__25268_25292);

goog.object.set(clojure.data.Diff,"_",true);

var G__25269_25293 = clojure.data.diff_similar;
var G__25270_25294 = "_";
var G__25271_25295 = ((function (G__25269_25293,G__25270_25294){
return (function (a,b){
var fexpr__25273 = (function (){var G__25274 = clojure.data.equality_partition(a);
var G__25274__$1 = (((G__25274 instanceof cljs.core.Keyword))?G__25274.fqn:null);
switch (G__25274__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25274__$1)].join('')));

}
})();
return (fexpr__25273.cljs$core$IFn$_invoke$arity$2 ? fexpr__25273.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25273.call(null,a,b));
});})(G__25269_25293,G__25270_25294))
;
goog.object.set(G__25269_25293,G__25270_25294,G__25271_25295);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
