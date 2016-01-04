// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__11164_11168 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__11165_11169 = null;
var count__11166_11170 = (0);
var i__11167_11171 = (0);
while(true){
if((i__11167_11171 < count__11166_11170)){
var k_11172 = chunk__11165_11169.cljs$core$IIndexed$_nth$arity$2(null,i__11167_11171);
var v_11173 = (b[k_11172]);
(a[k_11172] = v_11173);

var G__11174 = seq__11164_11168;
var G__11175 = chunk__11165_11169;
var G__11176 = count__11166_11170;
var G__11177 = (i__11167_11171 + (1));
seq__11164_11168 = G__11174;
chunk__11165_11169 = G__11175;
count__11166_11170 = G__11176;
i__11167_11171 = G__11177;
continue;
} else {
var temp__4425__auto___11178 = cljs.core.seq(seq__11164_11168);
if(temp__4425__auto___11178){
var seq__11164_11179__$1 = temp__4425__auto___11178;
if(cljs.core.chunked_seq_QMARK_(seq__11164_11179__$1)){
var c__5971__auto___11180 = cljs.core.chunk_first(seq__11164_11179__$1);
var G__11181 = cljs.core.chunk_rest(seq__11164_11179__$1);
var G__11182 = c__5971__auto___11180;
var G__11183 = cljs.core.count(c__5971__auto___11180);
var G__11184 = (0);
seq__11164_11168 = G__11181;
chunk__11165_11169 = G__11182;
count__11166_11170 = G__11183;
i__11167_11171 = G__11184;
continue;
} else {
var k_11185 = cljs.core.first(seq__11164_11179__$1);
var v_11186 = (b[k_11185]);
(a[k_11185] = v_11186);

var G__11187 = cljs.core.next(seq__11164_11179__$1);
var G__11188 = null;
var G__11189 = (0);
var G__11190 = (0);
seq__11164_11168 = G__11187;
chunk__11165_11169 = G__11188;
count__11166_11170 = G__11189;
i__11167_11171 = G__11190;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args11191 = [];
var len__6226__auto___11196 = arguments.length;
var i__6227__auto___11197 = (0);
while(true){
if((i__6227__auto___11197 < len__6226__auto___11196)){
args11191.push((arguments[i__6227__auto___11197]));

var G__11198 = (i__6227__auto___11197 + (1));
i__6227__auto___11197 = G__11198;
continue;
} else {
}
break;
}

var G__11193 = args11191.length;
switch (G__11193) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11191.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__11194 = cljs.core.name(type);
var G__11195 = cognitect.transit.opts_merge({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__11194){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__11194))
,":",((function (G__11194){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__11194))
,"set",((function (G__11194){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__11194))
,"list",((function (G__11194){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__11194))
,"cmap",((function (G__11194){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__11200 = (i + (2));
var G__11201 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__11200;
ret = G__11201;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__11194))
], null),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__11194,G__11195) : com.cognitect.transit.reader.call(null,G__11194,G__11195));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11202_11206 = cljs.core.seq(v);
var chunk__11203_11207 = null;
var count__11204_11208 = (0);
var i__11205_11209 = (0);
while(true){
if((i__11205_11209 < count__11204_11208)){
var x_11210 = chunk__11203_11207.cljs$core$IIndexed$_nth$arity$2(null,i__11205_11209);
ret.push(x_11210);

var G__11211 = seq__11202_11206;
var G__11212 = chunk__11203_11207;
var G__11213 = count__11204_11208;
var G__11214 = (i__11205_11209 + (1));
seq__11202_11206 = G__11211;
chunk__11203_11207 = G__11212;
count__11204_11208 = G__11213;
i__11205_11209 = G__11214;
continue;
} else {
var temp__4425__auto___11215 = cljs.core.seq(seq__11202_11206);
if(temp__4425__auto___11215){
var seq__11202_11216__$1 = temp__4425__auto___11215;
if(cljs.core.chunked_seq_QMARK_(seq__11202_11216__$1)){
var c__5971__auto___11217 = cljs.core.chunk_first(seq__11202_11216__$1);
var G__11218 = cljs.core.chunk_rest(seq__11202_11216__$1);
var G__11219 = c__5971__auto___11217;
var G__11220 = cljs.core.count(c__5971__auto___11217);
var G__11221 = (0);
seq__11202_11206 = G__11218;
chunk__11203_11207 = G__11219;
count__11204_11208 = G__11220;
i__11205_11209 = G__11221;
continue;
} else {
var x_11222 = cljs.core.first(seq__11202_11216__$1);
ret.push(x_11222);

var G__11223 = cljs.core.next(seq__11202_11216__$1);
var G__11224 = null;
var G__11225 = (0);
var G__11226 = (0);
seq__11202_11206 = G__11223;
chunk__11203_11207 = G__11224;
count__11204_11208 = G__11225;
i__11205_11209 = G__11226;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11227_11231 = cljs.core.seq(v);
var chunk__11228_11232 = null;
var count__11229_11233 = (0);
var i__11230_11234 = (0);
while(true){
if((i__11230_11234 < count__11229_11233)){
var x_11235 = chunk__11228_11232.cljs$core$IIndexed$_nth$arity$2(null,i__11230_11234);
ret.push(x_11235);

var G__11236 = seq__11227_11231;
var G__11237 = chunk__11228_11232;
var G__11238 = count__11229_11233;
var G__11239 = (i__11230_11234 + (1));
seq__11227_11231 = G__11236;
chunk__11228_11232 = G__11237;
count__11229_11233 = G__11238;
i__11230_11234 = G__11239;
continue;
} else {
var temp__4425__auto___11240 = cljs.core.seq(seq__11227_11231);
if(temp__4425__auto___11240){
var seq__11227_11241__$1 = temp__4425__auto___11240;
if(cljs.core.chunked_seq_QMARK_(seq__11227_11241__$1)){
var c__5971__auto___11242 = cljs.core.chunk_first(seq__11227_11241__$1);
var G__11243 = cljs.core.chunk_rest(seq__11227_11241__$1);
var G__11244 = c__5971__auto___11242;
var G__11245 = cljs.core.count(c__5971__auto___11242);
var G__11246 = (0);
seq__11227_11231 = G__11243;
chunk__11228_11232 = G__11244;
count__11229_11233 = G__11245;
i__11230_11234 = G__11246;
continue;
} else {
var x_11247 = cljs.core.first(seq__11227_11241__$1);
ret.push(x_11247);

var G__11248 = cljs.core.next(seq__11227_11241__$1);
var G__11249 = null;
var G__11250 = (0);
var G__11251 = (0);
seq__11227_11231 = G__11248;
chunk__11228_11232 = G__11249;
count__11229_11233 = G__11250;
i__11230_11234 = G__11251;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11252_11256 = cljs.core.seq(v);
var chunk__11253_11257 = null;
var count__11254_11258 = (0);
var i__11255_11259 = (0);
while(true){
if((i__11255_11259 < count__11254_11258)){
var x_11260 = chunk__11253_11257.cljs$core$IIndexed$_nth$arity$2(null,i__11255_11259);
ret.push(x_11260);

var G__11261 = seq__11252_11256;
var G__11262 = chunk__11253_11257;
var G__11263 = count__11254_11258;
var G__11264 = (i__11255_11259 + (1));
seq__11252_11256 = G__11261;
chunk__11253_11257 = G__11262;
count__11254_11258 = G__11263;
i__11255_11259 = G__11264;
continue;
} else {
var temp__4425__auto___11265 = cljs.core.seq(seq__11252_11256);
if(temp__4425__auto___11265){
var seq__11252_11266__$1 = temp__4425__auto___11265;
if(cljs.core.chunked_seq_QMARK_(seq__11252_11266__$1)){
var c__5971__auto___11267 = cljs.core.chunk_first(seq__11252_11266__$1);
var G__11268 = cljs.core.chunk_rest(seq__11252_11266__$1);
var G__11269 = c__5971__auto___11267;
var G__11270 = cljs.core.count(c__5971__auto___11267);
var G__11271 = (0);
seq__11252_11256 = G__11268;
chunk__11253_11257 = G__11269;
count__11254_11258 = G__11270;
i__11255_11259 = G__11271;
continue;
} else {
var x_11272 = cljs.core.first(seq__11252_11266__$1);
ret.push(x_11272);

var G__11273 = cljs.core.next(seq__11252_11266__$1);
var G__11274 = null;
var G__11275 = (0);
var G__11276 = (0);
seq__11252_11256 = G__11273;
chunk__11253_11257 = G__11274;
count__11254_11258 = G__11275;
i__11255_11259 = G__11276;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args11277 = [];
var len__6226__auto___11290 = arguments.length;
var i__6227__auto___11291 = (0);
while(true){
if((i__6227__auto___11291 < len__6226__auto___11290)){
args11277.push((arguments[i__6227__auto___11291]));

var G__11292 = (i__6227__auto___11291 + (1));
i__6227__auto___11291 = G__11292;
continue;
} else {
}
break;
}

var G__11279 = args11277.length;
switch (G__11279) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11277.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),cljs.core.cst$kw$handlers.cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__11280 = cljs.core.name(type);
var G__11281 = cognitect.transit.opts_merge({"objectBuilder": ((function (G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__11282 = obj;
G__11282.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__11282;
});})(G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x11283 = cljs.core.clone(handlers);
x11283.forEach = ((function (x11283,G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__11284 = cljs.core.seq(coll);
var chunk__11285 = null;
var count__11286 = (0);
var i__11287 = (0);
while(true){
if((i__11287 < count__11286)){
var vec__11288 = chunk__11285.cljs$core$IIndexed$_nth$arity$2(null,i__11287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11288,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11288,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__11294 = seq__11284;
var G__11295 = chunk__11285;
var G__11296 = count__11286;
var G__11297 = (i__11287 + (1));
seq__11284 = G__11294;
chunk__11285 = G__11295;
count__11286 = G__11296;
i__11287 = G__11297;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11284);
if(temp__4425__auto__){
var seq__11284__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11284__$1)){
var c__5971__auto__ = cljs.core.chunk_first(seq__11284__$1);
var G__11298 = cljs.core.chunk_rest(seq__11284__$1);
var G__11299 = c__5971__auto__;
var G__11300 = cljs.core.count(c__5971__auto__);
var G__11301 = (0);
seq__11284 = G__11298;
chunk__11285 = G__11299;
count__11286 = G__11300;
i__11287 = G__11301;
continue;
} else {
var vec__11289 = cljs.core.first(seq__11284__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11289,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__11302 = cljs.core.next(seq__11284__$1);
var G__11303 = null;
var G__11304 = (0);
var G__11305 = (0);
seq__11284 = G__11302;
chunk__11285 = G__11303;
count__11286 = G__11304;
i__11287 = G__11305;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11283,G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x11283;
})(), "unpack": ((function (G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__11280,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$handlers)));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__11280,G__11281) : com.cognitect.transit.writer.call(null,G__11280,G__11281));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args11306 = [];
var len__6226__auto___11312 = arguments.length;
var i__6227__auto___11313 = (0);
while(true){
if((i__6227__auto___11313 < len__6226__auto___11312)){
args11306.push((arguments[i__6227__auto___11313]));

var G__11314 = (i__6227__auto___11313 + (1));
i__6227__auto___11313 = G__11314;
continue;
} else {
}
break;
}

var G__11308 = args11306.length;
switch (G__11308) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11306.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit11309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit11309 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta11310){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta11310 = meta11310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit11309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11311,meta11310__$1){
var self__ = this;
var _11311__$1 = this;
return (new cognitect.transit.t_cognitect$transit11309(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta11310__$1));
});

cognitect.transit.t_cognitect$transit11309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11311){
var self__ = this;
var _11311__$1 = this;
return self__.meta11310;
});

cognitect.transit.t_cognitect$transit11309.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit11309.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t_cognitect$transit11309.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11309.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit11309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$tag_DASH_fn,cljs.core.cst$sym$rep_DASH_fn,cljs.core.cst$sym$str_DASH_rep_DASH_fn,cljs.core.cst$sym$verbose_DASH_handler_DASH_fn,cljs.core.cst$sym$meta11310], null);
});

cognitect.transit.t_cognitect$transit11309.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit11309.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit11309";

cognitect.transit.t_cognitect$transit11309.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cognitect.transit/t_cognitect$transit11309");
});

cognitect.transit.__GT_t_cognitect$transit11309 = (function cognitect$transit$__GT_t_cognitect$transit11309(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11310){
return (new cognitect.transit.t_cognitect$transit11309(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11310));
});

}

return (new cognitect.transit.t_cognitect$transit11309(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(tag,rep) : com.cognitect.transit.types.taggedValue.call(null,tag,rep));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isTaggedValue.call(null,x));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.intValue.call(null,s));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isInteger.call(null,x));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigInteger.call(null,s));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigInteger.call(null,x));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigDecimalValue.call(null,s));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigDecimal.call(null,x));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uri.call(null,s));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isURI.call(null,x));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uuid.call(null,s));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isUUID.call(null,x));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.binary.call(null,s));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBinary.call(null,x));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.quoted.call(null,x));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isQuoted.call(null,x));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.link.call(null,x));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isLink.call(null,x));
});
