// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args12719 = [];
var len__6226__auto___12725 = arguments.length;
var i__6227__auto___12726 = (0);
while(true){
if((i__6227__auto___12726 < len__6226__auto___12725)){
args12719.push((arguments[i__6227__auto___12726]));

var G__12727 = (i__6227__auto___12726 + (1));
i__6227__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var G__12721 = args12719.length;
switch (G__12721) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12719.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12722 = (function (f,blockable,meta12723){
this.f = f;
this.blockable = blockable;
this.meta12723 = meta12723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12724,meta12723__$1){
var self__ = this;
var _12724__$1 = this;
return (new cljs.core.async.t_cljs$core$async12722(self__.f,self__.blockable,meta12723__$1));
});

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12724){
var self__ = this;
var _12724__$1 = this;
return self__.meta12723;
});

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta12723], null);
});

cljs.core.async.t_cljs$core$async12722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12722";

cljs.core.async.t_cljs$core$async12722.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async12722");
});

cljs.core.async.__GT_t_cljs$core$async12722 = (function cljs$core$async$__GT_t_cljs$core$async12722(f__$1,blockable__$1,meta12723){
return (new cljs.core.async.t_cljs$core$async12722(f__$1,blockable__$1,meta12723));
});

}

return (new cljs.core.async.t_cljs$core$async12722(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args12731 = [];
var len__6226__auto___12734 = arguments.length;
var i__6227__auto___12735 = (0);
while(true){
if((i__6227__auto___12735 < len__6226__auto___12734)){
args12731.push((arguments[i__6227__auto___12735]));

var G__12736 = (i__6227__auto___12735 + (1));
i__6227__auto___12735 = G__12736;
continue;
} else {
}
break;
}

var G__12733 = args12731.length;
switch (G__12733) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12731.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$buf_DASH_or_DASH_n], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args12738 = [];
var len__6226__auto___12741 = arguments.length;
var i__6227__auto___12742 = (0);
while(true){
if((i__6227__auto___12742 < len__6226__auto___12741)){
args12738.push((arguments[i__6227__auto___12742]));

var G__12743 = (i__6227__auto___12742 + (1));
i__6227__auto___12742 = G__12743;
continue;
} else {
}
break;
}

var G__12740 = args12738.length;
switch (G__12740) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12738.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args12745 = [];
var len__6226__auto___12748 = arguments.length;
var i__6227__auto___12749 = (0);
while(true){
if((i__6227__auto___12749 < len__6226__auto___12748)){
args12745.push((arguments[i__6227__auto___12749]));

var G__12750 = (i__6227__auto___12749 + (1));
i__6227__auto___12749 = G__12750;
continue;
} else {
}
break;
}

var G__12747 = args12745.length;
switch (G__12747) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12745.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_12752 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12752) : fn1.call(null,val_12752));
} else {
cljs.core.async.impl.dispatch.run(((function (val_12752,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_12752) : fn1.call(null,val_12752));
});})(val_12752,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args12753 = [];
var len__6226__auto___12756 = arguments.length;
var i__6227__auto___12757 = (0);
while(true){
if((i__6227__auto___12757 < len__6226__auto___12756)){
args12753.push((arguments[i__6227__auto___12757]));

var G__12758 = (i__6227__auto___12757 + (1));
i__6227__auto___12757 = G__12758;
continue;
} else {
}
break;
}

var G__12755 = args12753.length;
switch (G__12755) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12753.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6071__auto___12760 = n;
var x_12761 = (0);
while(true){
if((x_12761 < n__6071__auto___12760)){
(a[x_12761] = (0));

var G__12762 = (x_12761 + (1));
x_12761 = G__12762;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__12763 = (i + (1));
i = G__12763;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async12767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12767 = (function (alt_flag,flag,meta12768){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12768 = meta12768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12769,meta12768__$1){
var self__ = this;
var _12769__$1 = this;
return (new cljs.core.async.t_cljs$core$async12767(self__.alt_flag,self__.flag,meta12768__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12769){
var self__ = this;
var _12769__$1 = this;
return self__.meta12768;
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta12768], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12767";

cljs.core.async.t_cljs$core$async12767.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async12767");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12767 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12767(alt_flag__$1,flag__$1,meta12768){
return (new cljs.core.async.t_cljs$core$async12767(alt_flag__$1,flag__$1,meta12768));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12767(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12773 = (function (alt_handler,flag,cb,meta12774){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12774 = meta12774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12775,meta12774__$1){
var self__ = this;
var _12775__$1 = this;
return (new cljs.core.async.t_cljs$core$async12773(self__.alt_handler,self__.flag,self__.cb,meta12774__$1));
});

cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12775){
var self__ = this;
var _12775__$1 = this;
return self__.meta12774;
});

cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12773.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta12774], null);
});

cljs.core.async.t_cljs$core$async12773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12773";

cljs.core.async.t_cljs$core$async12773.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async12773");
});

cljs.core.async.__GT_t_cljs$core$async12773 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12773(alt_handler__$1,flag__$1,cb__$1,meta12774){
return (new cljs.core.async.t_cljs$core$async12773(alt_handler__$1,flag__$1,cb__$1,meta12774));
});

}

return (new cljs.core.async.t_cljs$core$async12773(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12776_SHARP_){
var G__12780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12776_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12780) : fret.call(null,G__12780));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12777_SHARP_){
var G__12781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12777_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__12781) : fret.call(null,G__12781));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__5168__auto__ = wport;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12782 = (i + (1));
i = G__12782;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5168__auto__ = ret;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4425__auto__ = (function (){var and__5156__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5156__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___12788 = arguments.length;
var i__6227__auto___12789 = (0);
while(true){
if((i__6227__auto___12789 < len__6226__auto___12788)){
args__6233__auto__.push((arguments[i__6227__auto___12789]));

var G__12790 = (i__6227__auto___12789 + (1));
i__6227__auto___12789 = G__12790;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12785){
var map__12786 = p__12785;
var map__12786__$1 = ((((!((map__12786 == null)))?((((map__12786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12786):map__12786);
var opts = map__12786__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12783){
var G__12784 = cljs.core.first(seq12783);
var seq12783__$1 = cljs.core.next(seq12783);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12784,seq12783__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args12791 = [];
var len__6226__auto___12841 = arguments.length;
var i__6227__auto___12842 = (0);
while(true){
if((i__6227__auto___12842 < len__6226__auto___12841)){
args12791.push((arguments[i__6227__auto___12842]));

var G__12843 = (i__6227__auto___12842 + (1));
i__6227__auto___12842 = G__12843;
continue;
} else {
}
break;
}

var G__12793 = args12791.length;
switch (G__12793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12791.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12674__auto___12845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___12845){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___12845){
return (function (state_12817){
var state_val_12818 = (state_12817[(1)]);
if((state_val_12818 === (7))){
var inst_12813 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
var statearr_12819_12846 = state_12817__$1;
(statearr_12819_12846[(2)] = inst_12813);

(statearr_12819_12846[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (1))){
var state_12817__$1 = state_12817;
var statearr_12820_12847 = state_12817__$1;
(statearr_12820_12847[(2)] = null);

(statearr_12820_12847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (4))){
var inst_12796 = (state_12817[(7)]);
var inst_12796__$1 = (state_12817[(2)]);
var inst_12797 = (inst_12796__$1 == null);
var state_12817__$1 = (function (){var statearr_12821 = state_12817;
(statearr_12821[(7)] = inst_12796__$1);

return statearr_12821;
})();
if(cljs.core.truth_(inst_12797)){
var statearr_12822_12848 = state_12817__$1;
(statearr_12822_12848[(1)] = (5));

} else {
var statearr_12823_12849 = state_12817__$1;
(statearr_12823_12849[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (13))){
var state_12817__$1 = state_12817;
var statearr_12824_12850 = state_12817__$1;
(statearr_12824_12850[(2)] = null);

(statearr_12824_12850[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (6))){
var inst_12796 = (state_12817[(7)]);
var state_12817__$1 = state_12817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12817__$1,(11),to,inst_12796);
} else {
if((state_val_12818 === (3))){
var inst_12815 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_12817__$1,inst_12815);
} else {
if((state_val_12818 === (12))){
var state_12817__$1 = state_12817;
var statearr_12825_12851 = state_12817__$1;
(statearr_12825_12851[(2)] = null);

(statearr_12825_12851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (2))){
var state_12817__$1 = state_12817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12817__$1,(4),from);
} else {
if((state_val_12818 === (11))){
var inst_12806 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
if(cljs.core.truth_(inst_12806)){
var statearr_12826_12852 = state_12817__$1;
(statearr_12826_12852[(1)] = (12));

} else {
var statearr_12827_12853 = state_12817__$1;
(statearr_12827_12853[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (9))){
var state_12817__$1 = state_12817;
var statearr_12828_12854 = state_12817__$1;
(statearr_12828_12854[(2)] = null);

(statearr_12828_12854[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (5))){
var state_12817__$1 = state_12817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12829_12855 = state_12817__$1;
(statearr_12829_12855[(1)] = (8));

} else {
var statearr_12830_12856 = state_12817__$1;
(statearr_12830_12856[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (14))){
var inst_12811 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
var statearr_12831_12857 = state_12817__$1;
(statearr_12831_12857[(2)] = inst_12811);

(statearr_12831_12857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (10))){
var inst_12803 = (state_12817[(2)]);
var state_12817__$1 = state_12817;
var statearr_12832_12858 = state_12817__$1;
(statearr_12832_12858[(2)] = inst_12803);

(statearr_12832_12858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_12818 === (8))){
var inst_12800 = cljs.core.async.close_BANG_(to);
var state_12817__$1 = state_12817;
var statearr_12833_12859 = state_12817__$1;
(statearr_12833_12859[(2)] = inst_12800);

(statearr_12833_12859[(1)] = (10));


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
}
});})(c__12674__auto___12845))
;
return ((function (switch__12560__auto__,c__12674__auto___12845){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_12837 = [null,null,null,null,null,null,null,null];
(statearr_12837[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_12837[(1)] = (1));

return statearr_12837;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_12817){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_12817);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e12838){if((e12838 instanceof Object)){
var ex__12564__auto__ = e12838;
var statearr_12839_12860 = state_12817;
(statearr_12839_12860[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_12817);

return cljs.core.cst$kw$recur;
} else {
throw e12838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__12861 = state_12817;
state_12817 = G__12861;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_12817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_12817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___12845))
})();
var state__12676__auto__ = (function (){var statearr_12840 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_12840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___12845);

return statearr_12840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___12845))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$n)], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__13045){
var vec__13046 = p__13045;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(1),null);
var job = vec__13046;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__12674__auto___13228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results){
return (function (state_13051){
var state_val_13052 = (state_13051[(1)]);
if((state_val_13052 === (1))){
var state_13051__$1 = state_13051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13051__$1,(2),res,v);
} else {
if((state_val_13052 === (2))){
var inst_13048 = (state_13051[(2)]);
var inst_13049 = cljs.core.async.close_BANG_(res);
var state_13051__$1 = (function (){var statearr_13053 = state_13051;
(statearr_13053[(7)] = inst_13048);

return statearr_13053;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13051__$1,inst_13049);
} else {
return null;
}
}
});})(c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results))
;
return ((function (switch__12560__auto__,c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_13057 = [null,null,null,null,null,null,null,null];
(statearr_13057[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__);

(statearr_13057[(1)] = (1));

return statearr_13057;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1 = (function (state_13051){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13051);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13058){if((e13058 instanceof Object)){
var ex__12564__auto__ = e13058;
var statearr_13059_13229 = state_13051;
(statearr_13059_13229[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13051);

return cljs.core.cst$kw$recur;
} else {
throw e13058;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13230 = state_13051;
state_13051 = G__13230;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = function(state_13051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1.call(this,state_13051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results))
})();
var state__12676__auto__ = (function (){var statearr_13060 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13228);

return statearr_13060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___13228,res,vec__13046,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13061){
var vec__13062 = p__13061;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13062,(1),null);
var job = vec__13062;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6071__auto___13231 = n;
var __13232 = (0);
while(true){
if((__13232 < n__6071__auto___13231)){
var G__13063_13233 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13063_13233) {
case "compute":
var c__12674__auto___13235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13232,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (__13232,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function (state_13076){
var state_val_13077 = (state_13076[(1)]);
if((state_val_13077 === (1))){
var state_13076__$1 = state_13076;
var statearr_13078_13236 = state_13076__$1;
(statearr_13078_13236[(2)] = null);

(statearr_13078_13236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13077 === (2))){
var state_13076__$1 = state_13076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13076__$1,(4),jobs);
} else {
if((state_val_13077 === (3))){
var inst_13074 = (state_13076[(2)]);
var state_13076__$1 = state_13076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13076__$1,inst_13074);
} else {
if((state_val_13077 === (4))){
var inst_13066 = (state_13076[(2)]);
var inst_13067 = process(inst_13066);
var state_13076__$1 = state_13076;
if(cljs.core.truth_(inst_13067)){
var statearr_13079_13237 = state_13076__$1;
(statearr_13079_13237[(1)] = (5));

} else {
var statearr_13080_13238 = state_13076__$1;
(statearr_13080_13238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13077 === (5))){
var state_13076__$1 = state_13076;
var statearr_13081_13239 = state_13076__$1;
(statearr_13081_13239[(2)] = null);

(statearr_13081_13239[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13077 === (6))){
var state_13076__$1 = state_13076;
var statearr_13082_13240 = state_13076__$1;
(statearr_13082_13240[(2)] = null);

(statearr_13082_13240[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13077 === (7))){
var inst_13072 = (state_13076[(2)]);
var state_13076__$1 = state_13076;
var statearr_13083_13241 = state_13076__$1;
(statearr_13083_13241[(2)] = inst_13072);

(statearr_13083_13241[(1)] = (3));


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
});})(__13232,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
;
return ((function (__13232,switch__12560__auto__,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_13087 = [null,null,null,null,null,null,null];
(statearr_13087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__);

(statearr_13087[(1)] = (1));

return statearr_13087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1 = (function (state_13076){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13076);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13088){if((e13088 instanceof Object)){
var ex__12564__auto__ = e13088;
var statearr_13089_13242 = state_13076;
(statearr_13089_13242[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13076);

return cljs.core.cst$kw$recur;
} else {
throw e13088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13243 = state_13076;
state_13076 = G__13243;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = function(state_13076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1.call(this,state_13076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__;
})()
;})(__13232,switch__12560__auto__,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
})();
var state__12676__auto__ = (function (){var statearr_13090 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13235);

return statearr_13090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(__13232,c__12674__auto___13235,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
);


break;
case "async":
var c__12674__auto___13244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__13232,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (__13232,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function (state_13103){
var state_val_13104 = (state_13103[(1)]);
if((state_val_13104 === (1))){
var state_13103__$1 = state_13103;
var statearr_13105_13245 = state_13103__$1;
(statearr_13105_13245[(2)] = null);

(statearr_13105_13245[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13104 === (2))){
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13103__$1,(4),jobs);
} else {
if((state_val_13104 === (3))){
var inst_13101 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13103__$1,inst_13101);
} else {
if((state_val_13104 === (4))){
var inst_13093 = (state_13103[(2)]);
var inst_13094 = async(inst_13093);
var state_13103__$1 = state_13103;
if(cljs.core.truth_(inst_13094)){
var statearr_13106_13246 = state_13103__$1;
(statearr_13106_13246[(1)] = (5));

} else {
var statearr_13107_13247 = state_13103__$1;
(statearr_13107_13247[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13104 === (5))){
var state_13103__$1 = state_13103;
var statearr_13108_13248 = state_13103__$1;
(statearr_13108_13248[(2)] = null);

(statearr_13108_13248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13104 === (6))){
var state_13103__$1 = state_13103;
var statearr_13109_13249 = state_13103__$1;
(statearr_13109_13249[(2)] = null);

(statearr_13109_13249[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13104 === (7))){
var inst_13099 = (state_13103[(2)]);
var state_13103__$1 = state_13103;
var statearr_13110_13250 = state_13103__$1;
(statearr_13110_13250[(2)] = inst_13099);

(statearr_13110_13250[(1)] = (3));


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
});})(__13232,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
;
return ((function (__13232,switch__12560__auto__,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_13114 = [null,null,null,null,null,null,null];
(statearr_13114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__);

(statearr_13114[(1)] = (1));

return statearr_13114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1 = (function (state_13103){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13103);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13115){if((e13115 instanceof Object)){
var ex__12564__auto__ = e13115;
var statearr_13116_13251 = state_13103;
(statearr_13116_13251[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13103);

return cljs.core.cst$kw$recur;
} else {
throw e13115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13252 = state_13103;
state_13103 = G__13252;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = function(state_13103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1.call(this,state_13103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__;
})()
;})(__13232,switch__12560__auto__,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
})();
var state__12676__auto__ = (function (){var statearr_13117 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13244);

return statearr_13117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(__13232,c__12674__auto___13244,G__13063_13233,n__6071__auto___13231,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13253 = (__13232 + (1));
__13232 = G__13253;
continue;
} else {
}
break;
}

var c__12674__auto___13254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___13254,jobs,results,process,async){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___13254,jobs,results,process,async){
return (function (state_13139){
var state_val_13140 = (state_13139[(1)]);
if((state_val_13140 === (1))){
var state_13139__$1 = state_13139;
var statearr_13141_13255 = state_13139__$1;
(statearr_13141_13255[(2)] = null);

(statearr_13141_13255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13140 === (2))){
var state_13139__$1 = state_13139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13139__$1,(4),from);
} else {
if((state_val_13140 === (3))){
var inst_13137 = (state_13139[(2)]);
var state_13139__$1 = state_13139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13139__$1,inst_13137);
} else {
if((state_val_13140 === (4))){
var inst_13120 = (state_13139[(7)]);
var inst_13120__$1 = (state_13139[(2)]);
var inst_13121 = (inst_13120__$1 == null);
var state_13139__$1 = (function (){var statearr_13142 = state_13139;
(statearr_13142[(7)] = inst_13120__$1);

return statearr_13142;
})();
if(cljs.core.truth_(inst_13121)){
var statearr_13143_13256 = state_13139__$1;
(statearr_13143_13256[(1)] = (5));

} else {
var statearr_13144_13257 = state_13139__$1;
(statearr_13144_13257[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13140 === (5))){
var inst_13123 = cljs.core.async.close_BANG_(jobs);
var state_13139__$1 = state_13139;
var statearr_13145_13258 = state_13139__$1;
(statearr_13145_13258[(2)] = inst_13123);

(statearr_13145_13258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13140 === (6))){
var inst_13120 = (state_13139[(7)]);
var inst_13125 = (state_13139[(8)]);
var inst_13125__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_13126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13127 = [inst_13120,inst_13125__$1];
var inst_13128 = (new cljs.core.PersistentVector(null,2,(5),inst_13126,inst_13127,null));
var state_13139__$1 = (function (){var statearr_13146 = state_13139;
(statearr_13146[(8)] = inst_13125__$1);

return statearr_13146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13139__$1,(8),jobs,inst_13128);
} else {
if((state_val_13140 === (7))){
var inst_13135 = (state_13139[(2)]);
var state_13139__$1 = state_13139;
var statearr_13147_13259 = state_13139__$1;
(statearr_13147_13259[(2)] = inst_13135);

(statearr_13147_13259[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13140 === (8))){
var inst_13125 = (state_13139[(8)]);
var inst_13130 = (state_13139[(2)]);
var state_13139__$1 = (function (){var statearr_13148 = state_13139;
(statearr_13148[(9)] = inst_13130);

return statearr_13148;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13139__$1,(9),results,inst_13125);
} else {
if((state_val_13140 === (9))){
var inst_13132 = (state_13139[(2)]);
var state_13139__$1 = (function (){var statearr_13149 = state_13139;
(statearr_13149[(10)] = inst_13132);

return statearr_13149;
})();
var statearr_13150_13260 = state_13139__$1;
(statearr_13150_13260[(2)] = null);

(statearr_13150_13260[(1)] = (2));


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
});})(c__12674__auto___13254,jobs,results,process,async))
;
return ((function (switch__12560__auto__,c__12674__auto___13254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_13154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__);

(statearr_13154[(1)] = (1));

return statearr_13154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1 = (function (state_13139){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13139);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13155){if((e13155 instanceof Object)){
var ex__12564__auto__ = e13155;
var statearr_13156_13261 = state_13139;
(statearr_13156_13261[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13139);

return cljs.core.cst$kw$recur;
} else {
throw e13155;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13262 = state_13139;
state_13139 = G__13262;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = function(state_13139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1.call(this,state_13139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___13254,jobs,results,process,async))
})();
var state__12676__auto__ = (function (){var statearr_13157 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13254);

return statearr_13157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___13254,jobs,results,process,async))
);


var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__,jobs,results,process,async){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__,jobs,results,process,async){
return (function (state_13195){
var state_val_13196 = (state_13195[(1)]);
if((state_val_13196 === (7))){
var inst_13191 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13197_13263 = state_13195__$1;
(statearr_13197_13263[(2)] = inst_13191);

(statearr_13197_13263[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (20))){
var state_13195__$1 = state_13195;
var statearr_13198_13264 = state_13195__$1;
(statearr_13198_13264[(2)] = null);

(statearr_13198_13264[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (1))){
var state_13195__$1 = state_13195;
var statearr_13199_13265 = state_13195__$1;
(statearr_13199_13265[(2)] = null);

(statearr_13199_13265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (4))){
var inst_13160 = (state_13195[(7)]);
var inst_13160__$1 = (state_13195[(2)]);
var inst_13161 = (inst_13160__$1 == null);
var state_13195__$1 = (function (){var statearr_13200 = state_13195;
(statearr_13200[(7)] = inst_13160__$1);

return statearr_13200;
})();
if(cljs.core.truth_(inst_13161)){
var statearr_13201_13266 = state_13195__$1;
(statearr_13201_13266[(1)] = (5));

} else {
var statearr_13202_13267 = state_13195__$1;
(statearr_13202_13267[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (15))){
var inst_13173 = (state_13195[(8)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13195__$1,(18),to,inst_13173);
} else {
if((state_val_13196 === (21))){
var inst_13186 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13203_13268 = state_13195__$1;
(statearr_13203_13268[(2)] = inst_13186);

(statearr_13203_13268[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (13))){
var inst_13188 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13204 = state_13195;
(statearr_13204[(9)] = inst_13188);

return statearr_13204;
})();
var statearr_13205_13269 = state_13195__$1;
(statearr_13205_13269[(2)] = null);

(statearr_13205_13269[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (6))){
var inst_13160 = (state_13195[(7)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13195__$1,(11),inst_13160);
} else {
if((state_val_13196 === (17))){
var inst_13181 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
if(cljs.core.truth_(inst_13181)){
var statearr_13206_13270 = state_13195__$1;
(statearr_13206_13270[(1)] = (19));

} else {
var statearr_13207_13271 = state_13195__$1;
(statearr_13207_13271[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (3))){
var inst_13193 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13195__$1,inst_13193);
} else {
if((state_val_13196 === (12))){
var inst_13170 = (state_13195[(10)]);
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13195__$1,(14),inst_13170);
} else {
if((state_val_13196 === (2))){
var state_13195__$1 = state_13195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13195__$1,(4),results);
} else {
if((state_val_13196 === (19))){
var state_13195__$1 = state_13195;
var statearr_13208_13272 = state_13195__$1;
(statearr_13208_13272[(2)] = null);

(statearr_13208_13272[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (11))){
var inst_13170 = (state_13195[(2)]);
var state_13195__$1 = (function (){var statearr_13209 = state_13195;
(statearr_13209[(10)] = inst_13170);

return statearr_13209;
})();
var statearr_13210_13273 = state_13195__$1;
(statearr_13210_13273[(2)] = null);

(statearr_13210_13273[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (9))){
var state_13195__$1 = state_13195;
var statearr_13211_13274 = state_13195__$1;
(statearr_13211_13274[(2)] = null);

(statearr_13211_13274[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (5))){
var state_13195__$1 = state_13195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13212_13275 = state_13195__$1;
(statearr_13212_13275[(1)] = (8));

} else {
var statearr_13213_13276 = state_13195__$1;
(statearr_13213_13276[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (14))){
var inst_13173 = (state_13195[(8)]);
var inst_13175 = (state_13195[(11)]);
var inst_13173__$1 = (state_13195[(2)]);
var inst_13174 = (inst_13173__$1 == null);
var inst_13175__$1 = cljs.core.not(inst_13174);
var state_13195__$1 = (function (){var statearr_13214 = state_13195;
(statearr_13214[(8)] = inst_13173__$1);

(statearr_13214[(11)] = inst_13175__$1);

return statearr_13214;
})();
if(inst_13175__$1){
var statearr_13215_13277 = state_13195__$1;
(statearr_13215_13277[(1)] = (15));

} else {
var statearr_13216_13278 = state_13195__$1;
(statearr_13216_13278[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (16))){
var inst_13175 = (state_13195[(11)]);
var state_13195__$1 = state_13195;
var statearr_13217_13279 = state_13195__$1;
(statearr_13217_13279[(2)] = inst_13175);

(statearr_13217_13279[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (10))){
var inst_13167 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13218_13280 = state_13195__$1;
(statearr_13218_13280[(2)] = inst_13167);

(statearr_13218_13280[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (18))){
var inst_13178 = (state_13195[(2)]);
var state_13195__$1 = state_13195;
var statearr_13219_13281 = state_13195__$1;
(statearr_13219_13281[(2)] = inst_13178);

(statearr_13219_13281[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13196 === (8))){
var inst_13164 = cljs.core.async.close_BANG_(to);
var state_13195__$1 = state_13195;
var statearr_13220_13282 = state_13195__$1;
(statearr_13220_13282[(2)] = inst_13164);

(statearr_13220_13282[(1)] = (10));


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
}
}
}
}
}
}
}
}
});})(c__12674__auto__,jobs,results,process,async))
;
return ((function (switch__12560__auto__,c__12674__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_13224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__);

(statearr_13224[(1)] = (1));

return statearr_13224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1 = (function (state_13195){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13195);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13225){if((e13225 instanceof Object)){
var ex__12564__auto__ = e13225;
var statearr_13226_13283 = state_13195;
(statearr_13226_13283[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13195);

return cljs.core.cst$kw$recur;
} else {
throw e13225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13284 = state_13195;
state_13195 = G__13284;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__ = function(state_13195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1.call(this,state_13195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__,jobs,results,process,async))
})();
var state__12676__auto__ = (function (){var statearr_13227 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_13227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__,jobs,results,process,async))
);

return c__12674__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13285 = [];
var len__6226__auto___13288 = arguments.length;
var i__6227__auto___13289 = (0);
while(true){
if((i__6227__auto___13289 < len__6226__auto___13288)){
args13285.push((arguments[i__6227__auto___13289]));

var G__13290 = (i__6227__auto___13289 + (1));
i__6227__auto___13289 = G__13290;
continue;
} else {
}
break;
}

var G__13287 = args13285.length;
switch (G__13287) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13285.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13292 = [];
var len__6226__auto___13295 = arguments.length;
var i__6227__auto___13296 = (0);
while(true){
if((i__6227__auto___13296 < len__6226__auto___13295)){
args13292.push((arguments[i__6227__auto___13296]));

var G__13297 = (i__6227__auto___13296 + (1));
i__6227__auto___13296 = G__13297;
continue;
} else {
}
break;
}

var G__13294 = args13292.length;
switch (G__13294) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13292.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13299 = [];
var len__6226__auto___13352 = arguments.length;
var i__6227__auto___13353 = (0);
while(true){
if((i__6227__auto___13353 < len__6226__auto___13352)){
args13299.push((arguments[i__6227__auto___13353]));

var G__13354 = (i__6227__auto___13353 + (1));
i__6227__auto___13353 = G__13354;
continue;
} else {
}
break;
}

var G__13301 = args13299.length;
switch (G__13301) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13299.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__12674__auto___13356 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___13356,tc,fc){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___13356,tc,fc){
return (function (state_13327){
var state_val_13328 = (state_13327[(1)]);
if((state_val_13328 === (7))){
var inst_13323 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
var statearr_13329_13357 = state_13327__$1;
(statearr_13329_13357[(2)] = inst_13323);

(statearr_13329_13357[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (1))){
var state_13327__$1 = state_13327;
var statearr_13330_13358 = state_13327__$1;
(statearr_13330_13358[(2)] = null);

(statearr_13330_13358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (4))){
var inst_13304 = (state_13327[(7)]);
var inst_13304__$1 = (state_13327[(2)]);
var inst_13305 = (inst_13304__$1 == null);
var state_13327__$1 = (function (){var statearr_13331 = state_13327;
(statearr_13331[(7)] = inst_13304__$1);

return statearr_13331;
})();
if(cljs.core.truth_(inst_13305)){
var statearr_13332_13359 = state_13327__$1;
(statearr_13332_13359[(1)] = (5));

} else {
var statearr_13333_13360 = state_13327__$1;
(statearr_13333_13360[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (13))){
var state_13327__$1 = state_13327;
var statearr_13334_13361 = state_13327__$1;
(statearr_13334_13361[(2)] = null);

(statearr_13334_13361[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (6))){
var inst_13304 = (state_13327[(7)]);
var inst_13310 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_13304) : p.call(null,inst_13304));
var state_13327__$1 = state_13327;
if(cljs.core.truth_(inst_13310)){
var statearr_13335_13362 = state_13327__$1;
(statearr_13335_13362[(1)] = (9));

} else {
var statearr_13336_13363 = state_13327__$1;
(statearr_13336_13363[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (3))){
var inst_13325 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13327__$1,inst_13325);
} else {
if((state_val_13328 === (12))){
var state_13327__$1 = state_13327;
var statearr_13337_13364 = state_13327__$1;
(statearr_13337_13364[(2)] = null);

(statearr_13337_13364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (2))){
var state_13327__$1 = state_13327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13327__$1,(4),ch);
} else {
if((state_val_13328 === (11))){
var inst_13304 = (state_13327[(7)]);
var inst_13314 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13327__$1,(8),inst_13314,inst_13304);
} else {
if((state_val_13328 === (9))){
var state_13327__$1 = state_13327;
var statearr_13338_13365 = state_13327__$1;
(statearr_13338_13365[(2)] = tc);

(statearr_13338_13365[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (5))){
var inst_13307 = cljs.core.async.close_BANG_(tc);
var inst_13308 = cljs.core.async.close_BANG_(fc);
var state_13327__$1 = (function (){var statearr_13339 = state_13327;
(statearr_13339[(8)] = inst_13307);

return statearr_13339;
})();
var statearr_13340_13366 = state_13327__$1;
(statearr_13340_13366[(2)] = inst_13308);

(statearr_13340_13366[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (14))){
var inst_13321 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
var statearr_13341_13367 = state_13327__$1;
(statearr_13341_13367[(2)] = inst_13321);

(statearr_13341_13367[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (10))){
var state_13327__$1 = state_13327;
var statearr_13342_13368 = state_13327__$1;
(statearr_13342_13368[(2)] = fc);

(statearr_13342_13368[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13328 === (8))){
var inst_13316 = (state_13327[(2)]);
var state_13327__$1 = state_13327;
if(cljs.core.truth_(inst_13316)){
var statearr_13343_13369 = state_13327__$1;
(statearr_13343_13369[(1)] = (12));

} else {
var statearr_13344_13370 = state_13327__$1;
(statearr_13344_13370[(1)] = (13));

}

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
}
});})(c__12674__auto___13356,tc,fc))
;
return ((function (switch__12560__auto__,c__12674__auto___13356,tc,fc){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_13348 = [null,null,null,null,null,null,null,null,null];
(statearr_13348[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_13348[(1)] = (1));

return statearr_13348;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_13327){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13327);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13349){if((e13349 instanceof Object)){
var ex__12564__auto__ = e13349;
var statearr_13350_13371 = state_13327;
(statearr_13350_13371[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13327);

return cljs.core.cst$kw$recur;
} else {
throw e13349;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13372 = state_13327;
state_13327 = G__13372;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_13327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_13327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___13356,tc,fc))
})();
var state__12676__auto__ = (function (){var statearr_13351 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13356);

return statearr_13351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___13356,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_13436){
var state_val_13437 = (state_13436[(1)]);
if((state_val_13437 === (7))){
var inst_13432 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
var statearr_13438_13459 = state_13436__$1;
(statearr_13438_13459[(2)] = inst_13432);

(statearr_13438_13459[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (1))){
var inst_13416 = init;
var state_13436__$1 = (function (){var statearr_13439 = state_13436;
(statearr_13439[(7)] = inst_13416);

return statearr_13439;
})();
var statearr_13440_13460 = state_13436__$1;
(statearr_13440_13460[(2)] = null);

(statearr_13440_13460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (4))){
var inst_13419 = (state_13436[(8)]);
var inst_13419__$1 = (state_13436[(2)]);
var inst_13420 = (inst_13419__$1 == null);
var state_13436__$1 = (function (){var statearr_13441 = state_13436;
(statearr_13441[(8)] = inst_13419__$1);

return statearr_13441;
})();
if(cljs.core.truth_(inst_13420)){
var statearr_13442_13461 = state_13436__$1;
(statearr_13442_13461[(1)] = (5));

} else {
var statearr_13443_13462 = state_13436__$1;
(statearr_13443_13462[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (6))){
var inst_13423 = (state_13436[(9)]);
var inst_13419 = (state_13436[(8)]);
var inst_13416 = (state_13436[(7)]);
var inst_13423__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_13416,inst_13419) : f.call(null,inst_13416,inst_13419));
var inst_13424 = cljs.core.reduced_QMARK_(inst_13423__$1);
var state_13436__$1 = (function (){var statearr_13444 = state_13436;
(statearr_13444[(9)] = inst_13423__$1);

return statearr_13444;
})();
if(inst_13424){
var statearr_13445_13463 = state_13436__$1;
(statearr_13445_13463[(1)] = (8));

} else {
var statearr_13446_13464 = state_13436__$1;
(statearr_13446_13464[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (3))){
var inst_13434 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13436__$1,inst_13434);
} else {
if((state_val_13437 === (2))){
var state_13436__$1 = state_13436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13436__$1,(4),ch);
} else {
if((state_val_13437 === (9))){
var inst_13423 = (state_13436[(9)]);
var inst_13416 = inst_13423;
var state_13436__$1 = (function (){var statearr_13447 = state_13436;
(statearr_13447[(7)] = inst_13416);

return statearr_13447;
})();
var statearr_13448_13465 = state_13436__$1;
(statearr_13448_13465[(2)] = null);

(statearr_13448_13465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (5))){
var inst_13416 = (state_13436[(7)]);
var state_13436__$1 = state_13436;
var statearr_13449_13466 = state_13436__$1;
(statearr_13449_13466[(2)] = inst_13416);

(statearr_13449_13466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (10))){
var inst_13430 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
var statearr_13450_13467 = state_13436__$1;
(statearr_13450_13467[(2)] = inst_13430);

(statearr_13450_13467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13437 === (8))){
var inst_13423 = (state_13436[(9)]);
var inst_13426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_13423) : cljs.core.deref.call(null,inst_13423));
var state_13436__$1 = state_13436;
var statearr_13451_13468 = state_13436__$1;
(statearr_13451_13468[(2)] = inst_13426);

(statearr_13451_13468[(1)] = (10));


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
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12561__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12561__auto____0 = (function (){
var statearr_13455 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13455[(0)] = cljs$core$async$reduce_$_state_machine__12561__auto__);

(statearr_13455[(1)] = (1));

return statearr_13455;
});
var cljs$core$async$reduce_$_state_machine__12561__auto____1 = (function (state_13436){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13436);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13456){if((e13456 instanceof Object)){
var ex__12564__auto__ = e13456;
var statearr_13457_13469 = state_13436;
(statearr_13457_13469[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13436);

return cljs.core.cst$kw$recur;
} else {
throw e13456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13470 = state_13436;
state_13436 = G__13470;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12561__auto__ = function(state_13436){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12561__auto____1.call(this,state_13436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12561__auto____0;
cljs$core$async$reduce_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12561__auto____1;
return cljs$core$async$reduce_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_13458 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_13458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13471 = [];
var len__6226__auto___13523 = arguments.length;
var i__6227__auto___13524 = (0);
while(true){
if((i__6227__auto___13524 < len__6226__auto___13523)){
args13471.push((arguments[i__6227__auto___13524]));

var G__13525 = (i__6227__auto___13524 + (1));
i__6227__auto___13524 = G__13525;
continue;
} else {
}
break;
}

var G__13473 = args13471.length;
switch (G__13473) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13471.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_13498){
var state_val_13499 = (state_13498[(1)]);
if((state_val_13499 === (7))){
var inst_13480 = (state_13498[(2)]);
var state_13498__$1 = state_13498;
var statearr_13500_13527 = state_13498__$1;
(statearr_13500_13527[(2)] = inst_13480);

(statearr_13500_13527[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (1))){
var inst_13474 = cljs.core.seq(coll);
var inst_13475 = inst_13474;
var state_13498__$1 = (function (){var statearr_13501 = state_13498;
(statearr_13501[(7)] = inst_13475);

return statearr_13501;
})();
var statearr_13502_13528 = state_13498__$1;
(statearr_13502_13528[(2)] = null);

(statearr_13502_13528[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (4))){
var inst_13475 = (state_13498[(7)]);
var inst_13478 = cljs.core.first(inst_13475);
var state_13498__$1 = state_13498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13498__$1,(7),ch,inst_13478);
} else {
if((state_val_13499 === (13))){
var inst_13492 = (state_13498[(2)]);
var state_13498__$1 = state_13498;
var statearr_13503_13529 = state_13498__$1;
(statearr_13503_13529[(2)] = inst_13492);

(statearr_13503_13529[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (6))){
var inst_13483 = (state_13498[(2)]);
var state_13498__$1 = state_13498;
if(cljs.core.truth_(inst_13483)){
var statearr_13504_13530 = state_13498__$1;
(statearr_13504_13530[(1)] = (8));

} else {
var statearr_13505_13531 = state_13498__$1;
(statearr_13505_13531[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (3))){
var inst_13496 = (state_13498[(2)]);
var state_13498__$1 = state_13498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13498__$1,inst_13496);
} else {
if((state_val_13499 === (12))){
var state_13498__$1 = state_13498;
var statearr_13506_13532 = state_13498__$1;
(statearr_13506_13532[(2)] = null);

(statearr_13506_13532[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (2))){
var inst_13475 = (state_13498[(7)]);
var state_13498__$1 = state_13498;
if(cljs.core.truth_(inst_13475)){
var statearr_13507_13533 = state_13498__$1;
(statearr_13507_13533[(1)] = (4));

} else {
var statearr_13508_13534 = state_13498__$1;
(statearr_13508_13534[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (11))){
var inst_13489 = cljs.core.async.close_BANG_(ch);
var state_13498__$1 = state_13498;
var statearr_13509_13535 = state_13498__$1;
(statearr_13509_13535[(2)] = inst_13489);

(statearr_13509_13535[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (9))){
var state_13498__$1 = state_13498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13510_13536 = state_13498__$1;
(statearr_13510_13536[(1)] = (11));

} else {
var statearr_13511_13537 = state_13498__$1;
(statearr_13511_13537[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (5))){
var inst_13475 = (state_13498[(7)]);
var state_13498__$1 = state_13498;
var statearr_13512_13538 = state_13498__$1;
(statearr_13512_13538[(2)] = inst_13475);

(statearr_13512_13538[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (10))){
var inst_13494 = (state_13498[(2)]);
var state_13498__$1 = state_13498;
var statearr_13513_13539 = state_13498__$1;
(statearr_13513_13539[(2)] = inst_13494);

(statearr_13513_13539[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13499 === (8))){
var inst_13475 = (state_13498[(7)]);
var inst_13485 = cljs.core.next(inst_13475);
var inst_13475__$1 = inst_13485;
var state_13498__$1 = (function (){var statearr_13514 = state_13498;
(statearr_13514[(7)] = inst_13475__$1);

return statearr_13514;
})();
var statearr_13515_13540 = state_13498__$1;
(statearr_13515_13540[(2)] = null);

(statearr_13515_13540[(1)] = (2));


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
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_13519 = [null,null,null,null,null,null,null,null];
(statearr_13519[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_13519[(1)] = (1));

return statearr_13519;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_13498){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13498);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13520){if((e13520 instanceof Object)){
var ex__12564__auto__ = e13520;
var statearr_13521_13541 = state_13498;
(statearr_13521_13541[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13498);

return cljs.core.cst$kw$recur;
} else {
throw e13520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__13542 = state_13498;
state_13498 = G__13542;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_13498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_13498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_13522 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_13522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5823__auto__ = (((_ == null))?null:_);
var m__5824__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto__.call(null,_));
} else {
var m__5824__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5824__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5824__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__13767 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13767) : cljs.core.atom.call(null,G__13767));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async13768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13768 = (function (mult,ch,cs,meta13769){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13769 = meta13769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13770,meta13769__$1){
var self__ = this;
var _13770__$1 = this;
return (new cljs.core.async.t_cljs$core$async13768(self__.mult,self__.ch,self__.cs,meta13769__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13770){
var self__ = this;
var _13770__$1 = this;
return self__.meta13769;
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__13771_13991 = self__.cs;
var G__13772_13992 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13771_13991,G__13772_13992) : cljs.core.reset_BANG_.call(null,G__13771_13991,G__13772_13992));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta13769], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13768";

cljs.core.async.t_cljs$core$async13768.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async13768");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13768 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13768(mult__$1,ch__$1,cs__$1,meta13769){
return (new cljs.core.async.t_cljs$core$async13768(mult__$1,ch__$1,cs__$1,meta13769));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13768(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12674__auto___13993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___13993,cs,m,dchan,dctr,done){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___13993,cs,m,dchan,dctr,done){
return (function (state_13903){
var state_val_13904 = (state_13903[(1)]);
if((state_val_13904 === (7))){
var inst_13899 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13905_13994 = state_13903__$1;
(statearr_13905_13994[(2)] = inst_13899);

(statearr_13905_13994[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (20))){
var inst_13804 = (state_13903[(7)]);
var inst_13814 = cljs.core.first(inst_13804);
var inst_13815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13814,(0),null);
var inst_13816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13814,(1),null);
var state_13903__$1 = (function (){var statearr_13906 = state_13903;
(statearr_13906[(8)] = inst_13815);

return statearr_13906;
})();
if(cljs.core.truth_(inst_13816)){
var statearr_13907_13995 = state_13903__$1;
(statearr_13907_13995[(1)] = (22));

} else {
var statearr_13908_13996 = state_13903__$1;
(statearr_13908_13996[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (27))){
var inst_13775 = (state_13903[(9)]);
var inst_13844 = (state_13903[(10)]);
var inst_13851 = (state_13903[(11)]);
var inst_13846 = (state_13903[(12)]);
var inst_13851__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13844,inst_13846);
var inst_13852 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13851__$1,inst_13775,done);
var state_13903__$1 = (function (){var statearr_13909 = state_13903;
(statearr_13909[(11)] = inst_13851__$1);

return statearr_13909;
})();
if(cljs.core.truth_(inst_13852)){
var statearr_13910_13997 = state_13903__$1;
(statearr_13910_13997[(1)] = (30));

} else {
var statearr_13911_13998 = state_13903__$1;
(statearr_13911_13998[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (1))){
var state_13903__$1 = state_13903;
var statearr_13912_13999 = state_13903__$1;
(statearr_13912_13999[(2)] = null);

(statearr_13912_13999[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (24))){
var inst_13804 = (state_13903[(7)]);
var inst_13821 = (state_13903[(2)]);
var inst_13822 = cljs.core.next(inst_13804);
var inst_13784 = inst_13822;
var inst_13785 = null;
var inst_13786 = (0);
var inst_13787 = (0);
var state_13903__$1 = (function (){var statearr_13913 = state_13903;
(statearr_13913[(13)] = inst_13821);

(statearr_13913[(14)] = inst_13785);

(statearr_13913[(15)] = inst_13786);

(statearr_13913[(16)] = inst_13784);

(statearr_13913[(17)] = inst_13787);

return statearr_13913;
})();
var statearr_13914_14000 = state_13903__$1;
(statearr_13914_14000[(2)] = null);

(statearr_13914_14000[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (39))){
var state_13903__$1 = state_13903;
var statearr_13918_14001 = state_13903__$1;
(statearr_13918_14001[(2)] = null);

(statearr_13918_14001[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (4))){
var inst_13775 = (state_13903[(9)]);
var inst_13775__$1 = (state_13903[(2)]);
var inst_13776 = (inst_13775__$1 == null);
var state_13903__$1 = (function (){var statearr_13919 = state_13903;
(statearr_13919[(9)] = inst_13775__$1);

return statearr_13919;
})();
if(cljs.core.truth_(inst_13776)){
var statearr_13920_14002 = state_13903__$1;
(statearr_13920_14002[(1)] = (5));

} else {
var statearr_13921_14003 = state_13903__$1;
(statearr_13921_14003[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (15))){
var inst_13785 = (state_13903[(14)]);
var inst_13786 = (state_13903[(15)]);
var inst_13784 = (state_13903[(16)]);
var inst_13787 = (state_13903[(17)]);
var inst_13800 = (state_13903[(2)]);
var inst_13801 = (inst_13787 + (1));
var tmp13915 = inst_13785;
var tmp13916 = inst_13786;
var tmp13917 = inst_13784;
var inst_13784__$1 = tmp13917;
var inst_13785__$1 = tmp13915;
var inst_13786__$1 = tmp13916;
var inst_13787__$1 = inst_13801;
var state_13903__$1 = (function (){var statearr_13922 = state_13903;
(statearr_13922[(14)] = inst_13785__$1);

(statearr_13922[(15)] = inst_13786__$1);

(statearr_13922[(18)] = inst_13800);

(statearr_13922[(16)] = inst_13784__$1);

(statearr_13922[(17)] = inst_13787__$1);

return statearr_13922;
})();
var statearr_13923_14004 = state_13903__$1;
(statearr_13923_14004[(2)] = null);

(statearr_13923_14004[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (21))){
var inst_13825 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13927_14005 = state_13903__$1;
(statearr_13927_14005[(2)] = inst_13825);

(statearr_13927_14005[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (31))){
var inst_13851 = (state_13903[(11)]);
var inst_13855 = done(null);
var inst_13856 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13851);
var state_13903__$1 = (function (){var statearr_13928 = state_13903;
(statearr_13928[(19)] = inst_13855);

return statearr_13928;
})();
var statearr_13929_14006 = state_13903__$1;
(statearr_13929_14006[(2)] = inst_13856);

(statearr_13929_14006[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (32))){
var inst_13844 = (state_13903[(10)]);
var inst_13845 = (state_13903[(20)]);
var inst_13846 = (state_13903[(12)]);
var inst_13843 = (state_13903[(21)]);
var inst_13858 = (state_13903[(2)]);
var inst_13859 = (inst_13846 + (1));
var tmp13924 = inst_13844;
var tmp13925 = inst_13845;
var tmp13926 = inst_13843;
var inst_13843__$1 = tmp13926;
var inst_13844__$1 = tmp13924;
var inst_13845__$1 = tmp13925;
var inst_13846__$1 = inst_13859;
var state_13903__$1 = (function (){var statearr_13930 = state_13903;
(statearr_13930[(10)] = inst_13844__$1);

(statearr_13930[(20)] = inst_13845__$1);

(statearr_13930[(12)] = inst_13846__$1);

(statearr_13930[(21)] = inst_13843__$1);

(statearr_13930[(22)] = inst_13858);

return statearr_13930;
})();
var statearr_13931_14007 = state_13903__$1;
(statearr_13931_14007[(2)] = null);

(statearr_13931_14007[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (40))){
var inst_13871 = (state_13903[(23)]);
var inst_13875 = done(null);
var inst_13876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_13871);
var state_13903__$1 = (function (){var statearr_13932 = state_13903;
(statearr_13932[(24)] = inst_13875);

return statearr_13932;
})();
var statearr_13933_14008 = state_13903__$1;
(statearr_13933_14008[(2)] = inst_13876);

(statearr_13933_14008[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (33))){
var inst_13862 = (state_13903[(25)]);
var inst_13864 = cljs.core.chunked_seq_QMARK_(inst_13862);
var state_13903__$1 = state_13903;
if(inst_13864){
var statearr_13934_14009 = state_13903__$1;
(statearr_13934_14009[(1)] = (36));

} else {
var statearr_13935_14010 = state_13903__$1;
(statearr_13935_14010[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (13))){
var inst_13794 = (state_13903[(26)]);
var inst_13797 = cljs.core.async.close_BANG_(inst_13794);
var state_13903__$1 = state_13903;
var statearr_13936_14011 = state_13903__$1;
(statearr_13936_14011[(2)] = inst_13797);

(statearr_13936_14011[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (22))){
var inst_13815 = (state_13903[(8)]);
var inst_13818 = cljs.core.async.close_BANG_(inst_13815);
var state_13903__$1 = state_13903;
var statearr_13937_14012 = state_13903__$1;
(statearr_13937_14012[(2)] = inst_13818);

(statearr_13937_14012[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (36))){
var inst_13862 = (state_13903[(25)]);
var inst_13866 = cljs.core.chunk_first(inst_13862);
var inst_13867 = cljs.core.chunk_rest(inst_13862);
var inst_13868 = cljs.core.count(inst_13866);
var inst_13843 = inst_13867;
var inst_13844 = inst_13866;
var inst_13845 = inst_13868;
var inst_13846 = (0);
var state_13903__$1 = (function (){var statearr_13938 = state_13903;
(statearr_13938[(10)] = inst_13844);

(statearr_13938[(20)] = inst_13845);

(statearr_13938[(12)] = inst_13846);

(statearr_13938[(21)] = inst_13843);

return statearr_13938;
})();
var statearr_13939_14013 = state_13903__$1;
(statearr_13939_14013[(2)] = null);

(statearr_13939_14013[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (41))){
var inst_13862 = (state_13903[(25)]);
var inst_13878 = (state_13903[(2)]);
var inst_13879 = cljs.core.next(inst_13862);
var inst_13843 = inst_13879;
var inst_13844 = null;
var inst_13845 = (0);
var inst_13846 = (0);
var state_13903__$1 = (function (){var statearr_13940 = state_13903;
(statearr_13940[(10)] = inst_13844);

(statearr_13940[(20)] = inst_13845);

(statearr_13940[(27)] = inst_13878);

(statearr_13940[(12)] = inst_13846);

(statearr_13940[(21)] = inst_13843);

return statearr_13940;
})();
var statearr_13941_14014 = state_13903__$1;
(statearr_13941_14014[(2)] = null);

(statearr_13941_14014[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (43))){
var state_13903__$1 = state_13903;
var statearr_13942_14015 = state_13903__$1;
(statearr_13942_14015[(2)] = null);

(statearr_13942_14015[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (29))){
var inst_13887 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13943_14016 = state_13903__$1;
(statearr_13943_14016[(2)] = inst_13887);

(statearr_13943_14016[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (44))){
var inst_13896 = (state_13903[(2)]);
var state_13903__$1 = (function (){var statearr_13944 = state_13903;
(statearr_13944[(28)] = inst_13896);

return statearr_13944;
})();
var statearr_13945_14017 = state_13903__$1;
(statearr_13945_14017[(2)] = null);

(statearr_13945_14017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (6))){
var inst_13835 = (state_13903[(29)]);
var inst_13834 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_13835__$1 = cljs.core.keys(inst_13834);
var inst_13836 = cljs.core.count(inst_13835__$1);
var inst_13837 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_13836) : cljs.core.reset_BANG_.call(null,dctr,inst_13836));
var inst_13842 = cljs.core.seq(inst_13835__$1);
var inst_13843 = inst_13842;
var inst_13844 = null;
var inst_13845 = (0);
var inst_13846 = (0);
var state_13903__$1 = (function (){var statearr_13946 = state_13903;
(statearr_13946[(30)] = inst_13837);

(statearr_13946[(10)] = inst_13844);

(statearr_13946[(29)] = inst_13835__$1);

(statearr_13946[(20)] = inst_13845);

(statearr_13946[(12)] = inst_13846);

(statearr_13946[(21)] = inst_13843);

return statearr_13946;
})();
var statearr_13947_14018 = state_13903__$1;
(statearr_13947_14018[(2)] = null);

(statearr_13947_14018[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (28))){
var inst_13862 = (state_13903[(25)]);
var inst_13843 = (state_13903[(21)]);
var inst_13862__$1 = cljs.core.seq(inst_13843);
var state_13903__$1 = (function (){var statearr_13948 = state_13903;
(statearr_13948[(25)] = inst_13862__$1);

return statearr_13948;
})();
if(inst_13862__$1){
var statearr_13949_14019 = state_13903__$1;
(statearr_13949_14019[(1)] = (33));

} else {
var statearr_13950_14020 = state_13903__$1;
(statearr_13950_14020[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (25))){
var inst_13845 = (state_13903[(20)]);
var inst_13846 = (state_13903[(12)]);
var inst_13848 = (inst_13846 < inst_13845);
var inst_13849 = inst_13848;
var state_13903__$1 = state_13903;
if(cljs.core.truth_(inst_13849)){
var statearr_13951_14021 = state_13903__$1;
(statearr_13951_14021[(1)] = (27));

} else {
var statearr_13952_14022 = state_13903__$1;
(statearr_13952_14022[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (34))){
var state_13903__$1 = state_13903;
var statearr_13953_14023 = state_13903__$1;
(statearr_13953_14023[(2)] = null);

(statearr_13953_14023[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (17))){
var state_13903__$1 = state_13903;
var statearr_13954_14024 = state_13903__$1;
(statearr_13954_14024[(2)] = null);

(statearr_13954_14024[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (3))){
var inst_13901 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13903__$1,inst_13901);
} else {
if((state_val_13904 === (12))){
var inst_13830 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13955_14025 = state_13903__$1;
(statearr_13955_14025[(2)] = inst_13830);

(statearr_13955_14025[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (2))){
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13903__$1,(4),ch);
} else {
if((state_val_13904 === (23))){
var state_13903__$1 = state_13903;
var statearr_13956_14026 = state_13903__$1;
(statearr_13956_14026[(2)] = null);

(statearr_13956_14026[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (35))){
var inst_13885 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13957_14027 = state_13903__$1;
(statearr_13957_14027[(2)] = inst_13885);

(statearr_13957_14027[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (19))){
var inst_13804 = (state_13903[(7)]);
var inst_13808 = cljs.core.chunk_first(inst_13804);
var inst_13809 = cljs.core.chunk_rest(inst_13804);
var inst_13810 = cljs.core.count(inst_13808);
var inst_13784 = inst_13809;
var inst_13785 = inst_13808;
var inst_13786 = inst_13810;
var inst_13787 = (0);
var state_13903__$1 = (function (){var statearr_13958 = state_13903;
(statearr_13958[(14)] = inst_13785);

(statearr_13958[(15)] = inst_13786);

(statearr_13958[(16)] = inst_13784);

(statearr_13958[(17)] = inst_13787);

return statearr_13958;
})();
var statearr_13959_14028 = state_13903__$1;
(statearr_13959_14028[(2)] = null);

(statearr_13959_14028[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (11))){
var inst_13804 = (state_13903[(7)]);
var inst_13784 = (state_13903[(16)]);
var inst_13804__$1 = cljs.core.seq(inst_13784);
var state_13903__$1 = (function (){var statearr_13960 = state_13903;
(statearr_13960[(7)] = inst_13804__$1);

return statearr_13960;
})();
if(inst_13804__$1){
var statearr_13961_14029 = state_13903__$1;
(statearr_13961_14029[(1)] = (16));

} else {
var statearr_13962_14030 = state_13903__$1;
(statearr_13962_14030[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (9))){
var inst_13832 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13963_14031 = state_13903__$1;
(statearr_13963_14031[(2)] = inst_13832);

(statearr_13963_14031[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (5))){
var inst_13782 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_13783 = cljs.core.seq(inst_13782);
var inst_13784 = inst_13783;
var inst_13785 = null;
var inst_13786 = (0);
var inst_13787 = (0);
var state_13903__$1 = (function (){var statearr_13964 = state_13903;
(statearr_13964[(14)] = inst_13785);

(statearr_13964[(15)] = inst_13786);

(statearr_13964[(16)] = inst_13784);

(statearr_13964[(17)] = inst_13787);

return statearr_13964;
})();
var statearr_13965_14032 = state_13903__$1;
(statearr_13965_14032[(2)] = null);

(statearr_13965_14032[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (14))){
var state_13903__$1 = state_13903;
var statearr_13966_14033 = state_13903__$1;
(statearr_13966_14033[(2)] = null);

(statearr_13966_14033[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (45))){
var inst_13893 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13967_14034 = state_13903__$1;
(statearr_13967_14034[(2)] = inst_13893);

(statearr_13967_14034[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (26))){
var inst_13835 = (state_13903[(29)]);
var inst_13889 = (state_13903[(2)]);
var inst_13890 = cljs.core.seq(inst_13835);
var state_13903__$1 = (function (){var statearr_13968 = state_13903;
(statearr_13968[(31)] = inst_13889);

return statearr_13968;
})();
if(inst_13890){
var statearr_13969_14035 = state_13903__$1;
(statearr_13969_14035[(1)] = (42));

} else {
var statearr_13970_14036 = state_13903__$1;
(statearr_13970_14036[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (16))){
var inst_13804 = (state_13903[(7)]);
var inst_13806 = cljs.core.chunked_seq_QMARK_(inst_13804);
var state_13903__$1 = state_13903;
if(inst_13806){
var statearr_13971_14037 = state_13903__$1;
(statearr_13971_14037[(1)] = (19));

} else {
var statearr_13972_14038 = state_13903__$1;
(statearr_13972_14038[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (38))){
var inst_13882 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13973_14039 = state_13903__$1;
(statearr_13973_14039[(2)] = inst_13882);

(statearr_13973_14039[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (30))){
var state_13903__$1 = state_13903;
var statearr_13974_14040 = state_13903__$1;
(statearr_13974_14040[(2)] = null);

(statearr_13974_14040[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (10))){
var inst_13785 = (state_13903[(14)]);
var inst_13787 = (state_13903[(17)]);
var inst_13793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_13785,inst_13787);
var inst_13794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13793,(0),null);
var inst_13795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_13793,(1),null);
var state_13903__$1 = (function (){var statearr_13975 = state_13903;
(statearr_13975[(26)] = inst_13794);

return statearr_13975;
})();
if(cljs.core.truth_(inst_13795)){
var statearr_13976_14041 = state_13903__$1;
(statearr_13976_14041[(1)] = (13));

} else {
var statearr_13977_14042 = state_13903__$1;
(statearr_13977_14042[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (18))){
var inst_13828 = (state_13903[(2)]);
var state_13903__$1 = state_13903;
var statearr_13978_14043 = state_13903__$1;
(statearr_13978_14043[(2)] = inst_13828);

(statearr_13978_14043[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (42))){
var state_13903__$1 = state_13903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13903__$1,(45),dchan);
} else {
if((state_val_13904 === (37))){
var inst_13775 = (state_13903[(9)]);
var inst_13862 = (state_13903[(25)]);
var inst_13871 = (state_13903[(23)]);
var inst_13871__$1 = cljs.core.first(inst_13862);
var inst_13872 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_13871__$1,inst_13775,done);
var state_13903__$1 = (function (){var statearr_13979 = state_13903;
(statearr_13979[(23)] = inst_13871__$1);

return statearr_13979;
})();
if(cljs.core.truth_(inst_13872)){
var statearr_13980_14044 = state_13903__$1;
(statearr_13980_14044[(1)] = (39));

} else {
var statearr_13981_14045 = state_13903__$1;
(statearr_13981_14045[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_13904 === (8))){
var inst_13786 = (state_13903[(15)]);
var inst_13787 = (state_13903[(17)]);
var inst_13789 = (inst_13787 < inst_13786);
var inst_13790 = inst_13789;
var state_13903__$1 = state_13903;
if(cljs.core.truth_(inst_13790)){
var statearr_13982_14046 = state_13903__$1;
(statearr_13982_14046[(1)] = (10));

} else {
var statearr_13983_14047 = state_13903__$1;
(statearr_13983_14047[(1)] = (11));

}

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
}
}
}
}
}
}
});})(c__12674__auto___13993,cs,m,dchan,dctr,done))
;
return ((function (switch__12560__auto__,c__12674__auto___13993,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12561__auto__ = null;
var cljs$core$async$mult_$_state_machine__12561__auto____0 = (function (){
var statearr_13987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13987[(0)] = cljs$core$async$mult_$_state_machine__12561__auto__);

(statearr_13987[(1)] = (1));

return statearr_13987;
});
var cljs$core$async$mult_$_state_machine__12561__auto____1 = (function (state_13903){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_13903);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e13988){if((e13988 instanceof Object)){
var ex__12564__auto__ = e13988;
var statearr_13989_14048 = state_13903;
(statearr_13989_14048[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_13903);

return cljs.core.cst$kw$recur;
} else {
throw e13988;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14049 = state_13903;
state_13903 = G__14049;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12561__auto__ = function(state_13903){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12561__auto____1.call(this,state_13903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12561__auto____0;
cljs$core$async$mult_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12561__auto____1;
return cljs$core$async$mult_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___13993,cs,m,dchan,dctr,done))
})();
var state__12676__auto__ = (function (){var statearr_13990 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_13990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___13993);

return statearr_13990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___13993,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14050 = [];
var len__6226__auto___14053 = arguments.length;
var i__6227__auto___14054 = (0);
while(true){
if((i__6227__auto___14054 < len__6226__auto___14053)){
args14050.push((arguments[i__6227__auto___14054]));

var G__14055 = (i__6227__auto___14054 + (1));
i__6227__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var G__14052 = args14050.length;
switch (G__14052) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14050.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto__.call(null,m,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5824__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto__.call(null,m));
} else {
var m__5824__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5824__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto__.call(null,m,state_map));
} else {
var m__5824__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5824__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5823__auto__ = (((m == null))?null:m);
var m__5824__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto__.call(null,m,mode));
} else {
var m__5824__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5824__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6233__auto__ = [];
var len__6226__auto___14067 = arguments.length;
var i__6227__auto___14068 = (0);
while(true){
if((i__6227__auto___14068 < len__6226__auto___14067)){
args__6233__auto__.push((arguments[i__6227__auto___14068]));

var G__14069 = (i__6227__auto___14068 + (1));
i__6227__auto___14068 = G__14069;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((3) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6234__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14061){
var map__14062 = p__14061;
var map__14062__$1 = ((((!((map__14062 == null)))?((((map__14062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14062):map__14062);
var opts = map__14062__$1;
var statearr_14064_14070 = state;
(statearr_14064_14070[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__14062,map__14062__$1,opts){
return (function (val){
var statearr_14065_14071 = state;
(statearr_14065_14071[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__14062,map__14062__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14066_14072 = state;
(statearr_14066_14072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14057){
var G__14058 = cljs.core.first(seq14057);
var seq14057__$1 = cljs.core.next(seq14057);
var G__14059 = cljs.core.first(seq14057__$1);
var seq14057__$2 = cljs.core.next(seq14057__$1);
var G__14060 = cljs.core.first(seq14057__$2);
var seq14057__$3 = cljs.core.next(seq14057__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14058,G__14059,G__14060,seq14057__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__14239 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14239) : cljs.core.atom.call(null,G__14239));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14240 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14241){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14241 = meta14241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14242,meta14241__$1){
var self__ = this;
var _14242__$1 = this;
return (new cljs.core.async.t_cljs$core$async14240(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14241__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14242){
var self__ = this;
var _14242__$1 = this;
return self__.meta14241;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14243_14405 = self__.cs;
var G__14244_14406 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14243_14405,G__14244_14406) : cljs.core.reset_BANG_.call(null,G__14243_14405,G__14244_14406));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$mode)], 0)))].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta14241], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14240";

cljs.core.async.t_cljs$core$async14240.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14240");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14240 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14241){
return (new cljs.core.async.t_cljs$core$async14240(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14241));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14240(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12674__auto___14407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14342){
var state_val_14343 = (state_14342[(1)]);
if((state_val_14343 === (7))){
var inst_14260 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14344_14408 = state_14342__$1;
(statearr_14344_14408[(2)] = inst_14260);

(statearr_14344_14408[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (20))){
var inst_14272 = (state_14342[(7)]);
var state_14342__$1 = state_14342;
var statearr_14345_14409 = state_14342__$1;
(statearr_14345_14409[(2)] = inst_14272);

(statearr_14345_14409[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (27))){
var state_14342__$1 = state_14342;
var statearr_14346_14410 = state_14342__$1;
(statearr_14346_14410[(2)] = null);

(statearr_14346_14410[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (1))){
var inst_14248 = (state_14342[(8)]);
var inst_14248__$1 = calc_state();
var inst_14250 = (inst_14248__$1 == null);
var inst_14251 = cljs.core.not(inst_14250);
var state_14342__$1 = (function (){var statearr_14347 = state_14342;
(statearr_14347[(8)] = inst_14248__$1);

return statearr_14347;
})();
if(inst_14251){
var statearr_14348_14411 = state_14342__$1;
(statearr_14348_14411[(1)] = (2));

} else {
var statearr_14349_14412 = state_14342__$1;
(statearr_14349_14412[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (24))){
var inst_14316 = (state_14342[(9)]);
var inst_14302 = (state_14342[(10)]);
var inst_14295 = (state_14342[(11)]);
var inst_14316__$1 = (inst_14295.cljs$core$IFn$_invoke$arity$1 ? inst_14295.cljs$core$IFn$_invoke$arity$1(inst_14302) : inst_14295.call(null,inst_14302));
var state_14342__$1 = (function (){var statearr_14350 = state_14342;
(statearr_14350[(9)] = inst_14316__$1);

return statearr_14350;
})();
if(cljs.core.truth_(inst_14316__$1)){
var statearr_14351_14413 = state_14342__$1;
(statearr_14351_14413[(1)] = (29));

} else {
var statearr_14352_14414 = state_14342__$1;
(statearr_14352_14414[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (4))){
var inst_14263 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14263)){
var statearr_14353_14415 = state_14342__$1;
(statearr_14353_14415[(1)] = (8));

} else {
var statearr_14354_14416 = state_14342__$1;
(statearr_14354_14416[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (15))){
var inst_14289 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14289)){
var statearr_14355_14417 = state_14342__$1;
(statearr_14355_14417[(1)] = (19));

} else {
var statearr_14356_14418 = state_14342__$1;
(statearr_14356_14418[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (21))){
var inst_14294 = (state_14342[(12)]);
var inst_14294__$1 = (state_14342[(2)]);
var inst_14295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14294__$1,cljs.core.cst$kw$solos);
var inst_14296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14294__$1,cljs.core.cst$kw$mutes);
var inst_14297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14294__$1,cljs.core.cst$kw$reads);
var state_14342__$1 = (function (){var statearr_14357 = state_14342;
(statearr_14357[(12)] = inst_14294__$1);

(statearr_14357[(13)] = inst_14296);

(statearr_14357[(11)] = inst_14295);

return statearr_14357;
})();
return cljs.core.async.ioc_alts_BANG_(state_14342__$1,(22),inst_14297);
} else {
if((state_val_14343 === (31))){
var inst_14324 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14324)){
var statearr_14358_14419 = state_14342__$1;
(statearr_14358_14419[(1)] = (32));

} else {
var statearr_14359_14420 = state_14342__$1;
(statearr_14359_14420[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (32))){
var inst_14301 = (state_14342[(14)]);
var state_14342__$1 = state_14342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14342__$1,(35),out,inst_14301);
} else {
if((state_val_14343 === (33))){
var inst_14294 = (state_14342[(12)]);
var inst_14272 = inst_14294;
var state_14342__$1 = (function (){var statearr_14360 = state_14342;
(statearr_14360[(7)] = inst_14272);

return statearr_14360;
})();
var statearr_14361_14421 = state_14342__$1;
(statearr_14361_14421[(2)] = null);

(statearr_14361_14421[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (13))){
var inst_14272 = (state_14342[(7)]);
var inst_14279 = inst_14272.cljs$lang$protocol_mask$partition0$;
var inst_14280 = (inst_14279 & (64));
var inst_14281 = inst_14272.cljs$core$ISeq$;
var inst_14282 = (inst_14280) || (inst_14281);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14282)){
var statearr_14362_14422 = state_14342__$1;
(statearr_14362_14422[(1)] = (16));

} else {
var statearr_14363_14423 = state_14342__$1;
(statearr_14363_14423[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (22))){
var inst_14301 = (state_14342[(14)]);
var inst_14302 = (state_14342[(10)]);
var inst_14300 = (state_14342[(2)]);
var inst_14301__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14300,(0),null);
var inst_14302__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14300,(1),null);
var inst_14303 = (inst_14301__$1 == null);
var inst_14304 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14302__$1,change);
var inst_14305 = (inst_14303) || (inst_14304);
var state_14342__$1 = (function (){var statearr_14364 = state_14342;
(statearr_14364[(14)] = inst_14301__$1);

(statearr_14364[(10)] = inst_14302__$1);

return statearr_14364;
})();
if(cljs.core.truth_(inst_14305)){
var statearr_14365_14424 = state_14342__$1;
(statearr_14365_14424[(1)] = (23));

} else {
var statearr_14366_14425 = state_14342__$1;
(statearr_14366_14425[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (36))){
var inst_14294 = (state_14342[(12)]);
var inst_14272 = inst_14294;
var state_14342__$1 = (function (){var statearr_14367 = state_14342;
(statearr_14367[(7)] = inst_14272);

return statearr_14367;
})();
var statearr_14368_14426 = state_14342__$1;
(statearr_14368_14426[(2)] = null);

(statearr_14368_14426[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (29))){
var inst_14316 = (state_14342[(9)]);
var state_14342__$1 = state_14342;
var statearr_14369_14427 = state_14342__$1;
(statearr_14369_14427[(2)] = inst_14316);

(statearr_14369_14427[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (6))){
var state_14342__$1 = state_14342;
var statearr_14370_14428 = state_14342__$1;
(statearr_14370_14428[(2)] = false);

(statearr_14370_14428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (28))){
var inst_14312 = (state_14342[(2)]);
var inst_14313 = calc_state();
var inst_14272 = inst_14313;
var state_14342__$1 = (function (){var statearr_14371 = state_14342;
(statearr_14371[(7)] = inst_14272);

(statearr_14371[(15)] = inst_14312);

return statearr_14371;
})();
var statearr_14372_14429 = state_14342__$1;
(statearr_14372_14429[(2)] = null);

(statearr_14372_14429[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (25))){
var inst_14338 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14373_14430 = state_14342__$1;
(statearr_14373_14430[(2)] = inst_14338);

(statearr_14373_14430[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (34))){
var inst_14336 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14374_14431 = state_14342__$1;
(statearr_14374_14431[(2)] = inst_14336);

(statearr_14374_14431[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (17))){
var state_14342__$1 = state_14342;
var statearr_14375_14432 = state_14342__$1;
(statearr_14375_14432[(2)] = false);

(statearr_14375_14432[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (3))){
var state_14342__$1 = state_14342;
var statearr_14376_14433 = state_14342__$1;
(statearr_14376_14433[(2)] = false);

(statearr_14376_14433[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (12))){
var inst_14340 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14342__$1,inst_14340);
} else {
if((state_val_14343 === (2))){
var inst_14248 = (state_14342[(8)]);
var inst_14253 = inst_14248.cljs$lang$protocol_mask$partition0$;
var inst_14254 = (inst_14253 & (64));
var inst_14255 = inst_14248.cljs$core$ISeq$;
var inst_14256 = (inst_14254) || (inst_14255);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14256)){
var statearr_14377_14434 = state_14342__$1;
(statearr_14377_14434[(1)] = (5));

} else {
var statearr_14378_14435 = state_14342__$1;
(statearr_14378_14435[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (23))){
var inst_14301 = (state_14342[(14)]);
var inst_14307 = (inst_14301 == null);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14307)){
var statearr_14379_14436 = state_14342__$1;
(statearr_14379_14436[(1)] = (26));

} else {
var statearr_14380_14437 = state_14342__$1;
(statearr_14380_14437[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (35))){
var inst_14327 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
if(cljs.core.truth_(inst_14327)){
var statearr_14381_14438 = state_14342__$1;
(statearr_14381_14438[(1)] = (36));

} else {
var statearr_14382_14439 = state_14342__$1;
(statearr_14382_14439[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (19))){
var inst_14272 = (state_14342[(7)]);
var inst_14291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14272);
var state_14342__$1 = state_14342;
var statearr_14383_14440 = state_14342__$1;
(statearr_14383_14440[(2)] = inst_14291);

(statearr_14383_14440[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (11))){
var inst_14272 = (state_14342[(7)]);
var inst_14276 = (inst_14272 == null);
var inst_14277 = cljs.core.not(inst_14276);
var state_14342__$1 = state_14342;
if(inst_14277){
var statearr_14384_14441 = state_14342__$1;
(statearr_14384_14441[(1)] = (13));

} else {
var statearr_14385_14442 = state_14342__$1;
(statearr_14385_14442[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (9))){
var inst_14248 = (state_14342[(8)]);
var state_14342__$1 = state_14342;
var statearr_14386_14443 = state_14342__$1;
(statearr_14386_14443[(2)] = inst_14248);

(statearr_14386_14443[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (5))){
var state_14342__$1 = state_14342;
var statearr_14387_14444 = state_14342__$1;
(statearr_14387_14444[(2)] = true);

(statearr_14387_14444[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (14))){
var state_14342__$1 = state_14342;
var statearr_14388_14445 = state_14342__$1;
(statearr_14388_14445[(2)] = false);

(statearr_14388_14445[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (26))){
var inst_14302 = (state_14342[(10)]);
var inst_14309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14302);
var state_14342__$1 = state_14342;
var statearr_14389_14446 = state_14342__$1;
(statearr_14389_14446[(2)] = inst_14309);

(statearr_14389_14446[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (16))){
var state_14342__$1 = state_14342;
var statearr_14390_14447 = state_14342__$1;
(statearr_14390_14447[(2)] = true);

(statearr_14390_14447[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (38))){
var inst_14332 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14391_14448 = state_14342__$1;
(statearr_14391_14448[(2)] = inst_14332);

(statearr_14391_14448[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (30))){
var inst_14296 = (state_14342[(13)]);
var inst_14302 = (state_14342[(10)]);
var inst_14295 = (state_14342[(11)]);
var inst_14319 = cljs.core.empty_QMARK_(inst_14295);
var inst_14320 = (inst_14296.cljs$core$IFn$_invoke$arity$1 ? inst_14296.cljs$core$IFn$_invoke$arity$1(inst_14302) : inst_14296.call(null,inst_14302));
var inst_14321 = cljs.core.not(inst_14320);
var inst_14322 = (inst_14319) && (inst_14321);
var state_14342__$1 = state_14342;
var statearr_14392_14449 = state_14342__$1;
(statearr_14392_14449[(2)] = inst_14322);

(statearr_14392_14449[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (10))){
var inst_14248 = (state_14342[(8)]);
var inst_14268 = (state_14342[(2)]);
var inst_14269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14268,cljs.core.cst$kw$solos);
var inst_14270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14268,cljs.core.cst$kw$mutes);
var inst_14271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14268,cljs.core.cst$kw$reads);
var inst_14272 = inst_14248;
var state_14342__$1 = (function (){var statearr_14393 = state_14342;
(statearr_14393[(7)] = inst_14272);

(statearr_14393[(16)] = inst_14270);

(statearr_14393[(17)] = inst_14271);

(statearr_14393[(18)] = inst_14269);

return statearr_14393;
})();
var statearr_14394_14450 = state_14342__$1;
(statearr_14394_14450[(2)] = null);

(statearr_14394_14450[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (18))){
var inst_14286 = (state_14342[(2)]);
var state_14342__$1 = state_14342;
var statearr_14395_14451 = state_14342__$1;
(statearr_14395_14451[(2)] = inst_14286);

(statearr_14395_14451[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (37))){
var state_14342__$1 = state_14342;
var statearr_14396_14452 = state_14342__$1;
(statearr_14396_14452[(2)] = null);

(statearr_14396_14452[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14343 === (8))){
var inst_14248 = (state_14342[(8)]);
var inst_14265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_14248);
var state_14342__$1 = state_14342;
var statearr_14397_14453 = state_14342__$1;
(statearr_14397_14453[(2)] = inst_14265);

(statearr_14397_14453[(1)] = (10));


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
});})(c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12560__auto__,c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12561__auto__ = null;
var cljs$core$async$mix_$_state_machine__12561__auto____0 = (function (){
var statearr_14401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14401[(0)] = cljs$core$async$mix_$_state_machine__12561__auto__);

(statearr_14401[(1)] = (1));

return statearr_14401;
});
var cljs$core$async$mix_$_state_machine__12561__auto____1 = (function (state_14342){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14342);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14402){if((e14402 instanceof Object)){
var ex__12564__auto__ = e14402;
var statearr_14403_14454 = state_14342;
(statearr_14403_14454[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14342);

return cljs.core.cst$kw$recur;
} else {
throw e14402;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14455 = state_14342;
state_14342 = G__14455;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12561__auto__ = function(state_14342){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12561__auto____1.call(this,state_14342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12561__auto____0;
cljs$core$async$mix_$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12561__auto____1;
return cljs$core$async$mix_$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12676__auto__ = (function (){var statearr_14404 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14407);

return statearr_14404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5824__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5824__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto__.call(null,p,v,ch));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5824__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14456 = [];
var len__6226__auto___14459 = arguments.length;
var i__6227__auto___14460 = (0);
while(true){
if((i__6227__auto___14460 < len__6226__auto___14459)){
args14456.push((arguments[i__6227__auto___14460]));

var G__14461 = (i__6227__auto___14460 + (1));
i__6227__auto___14460 = G__14461;
continue;
} else {
}
break;
}

var G__14458 = args14456.length;
switch (G__14458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14456.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto__.call(null,p));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5824__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5823__auto__ = (((p == null))?null:p);
var m__5824__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5823__auto__)]);
if(!((m__5824__auto__ == null))){
return (m__5824__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto__.call(null,p,v));
} else {
var m__5824__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5824__auto____$1 == null))){
return (m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5824__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5824__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14464 = [];
var len__6226__auto___14592 = arguments.length;
var i__6227__auto___14593 = (0);
while(true){
if((i__6227__auto___14593 < len__6226__auto___14592)){
args14464.push((arguments[i__6227__auto___14593]));

var G__14594 = (i__6227__auto___14593 + (1));
i__6227__auto___14593 = G__14594;
continue;
} else {
}
break;
}

var G__14466 = args14464.length;
switch (G__14466) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14464.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__14467 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14467) : cljs.core.atom.call(null,G__14467));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__5168__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5168__auto__,mults){
return (function (p1__14463_SHARP_){
if(cljs.core.truth_((p1__14463_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14463_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14463_SHARP_.call(null,topic)))){
return p1__14463_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14463_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5168__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14468 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14469){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14469 = meta14469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14470,meta14469__$1){
var self__ = this;
var _14470__$1 = this;
return (new cljs.core.async.t_cljs$core$async14468(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14469__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14470){
var self__ = this;
var _14470__$1 = this;
return self__.meta14469;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__14471 = self__.mults;
var G__14472 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14471,G__14472) : cljs.core.reset_BANG_.call(null,G__14471,G__14472));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta14469], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14468";

cljs.core.async.t_cljs$core$async14468.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14468");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14468 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14469){
return (new cljs.core.async.t_cljs$core$async14468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14469));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14468(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12674__auto___14596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14596,mults,ensure_mult,p){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14596,mults,ensure_mult,p){
return (function (state_14544){
var state_val_14545 = (state_14544[(1)]);
if((state_val_14545 === (7))){
var inst_14540 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14546_14597 = state_14544__$1;
(statearr_14546_14597[(2)] = inst_14540);

(statearr_14546_14597[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (20))){
var state_14544__$1 = state_14544;
var statearr_14547_14598 = state_14544__$1;
(statearr_14547_14598[(2)] = null);

(statearr_14547_14598[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (1))){
var state_14544__$1 = state_14544;
var statearr_14548_14599 = state_14544__$1;
(statearr_14548_14599[(2)] = null);

(statearr_14548_14599[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (24))){
var inst_14523 = (state_14544[(7)]);
var inst_14532 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14523);
var state_14544__$1 = state_14544;
var statearr_14549_14600 = state_14544__$1;
(statearr_14549_14600[(2)] = inst_14532);

(statearr_14549_14600[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (4))){
var inst_14475 = (state_14544[(8)]);
var inst_14475__$1 = (state_14544[(2)]);
var inst_14476 = (inst_14475__$1 == null);
var state_14544__$1 = (function (){var statearr_14550 = state_14544;
(statearr_14550[(8)] = inst_14475__$1);

return statearr_14550;
})();
if(cljs.core.truth_(inst_14476)){
var statearr_14551_14601 = state_14544__$1;
(statearr_14551_14601[(1)] = (5));

} else {
var statearr_14552_14602 = state_14544__$1;
(statearr_14552_14602[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (15))){
var inst_14517 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14553_14603 = state_14544__$1;
(statearr_14553_14603[(2)] = inst_14517);

(statearr_14553_14603[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (21))){
var inst_14537 = (state_14544[(2)]);
var state_14544__$1 = (function (){var statearr_14554 = state_14544;
(statearr_14554[(9)] = inst_14537);

return statearr_14554;
})();
var statearr_14555_14604 = state_14544__$1;
(statearr_14555_14604[(2)] = null);

(statearr_14555_14604[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (13))){
var inst_14499 = (state_14544[(10)]);
var inst_14501 = cljs.core.chunked_seq_QMARK_(inst_14499);
var state_14544__$1 = state_14544;
if(inst_14501){
var statearr_14556_14605 = state_14544__$1;
(statearr_14556_14605[(1)] = (16));

} else {
var statearr_14557_14606 = state_14544__$1;
(statearr_14557_14606[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (22))){
var inst_14529 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
if(cljs.core.truth_(inst_14529)){
var statearr_14558_14607 = state_14544__$1;
(statearr_14558_14607[(1)] = (23));

} else {
var statearr_14559_14608 = state_14544__$1;
(statearr_14559_14608[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (6))){
var inst_14525 = (state_14544[(11)]);
var inst_14475 = (state_14544[(8)]);
var inst_14523 = (state_14544[(7)]);
var inst_14523__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14475) : topic_fn.call(null,inst_14475));
var inst_14524 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14524,inst_14523__$1);
var state_14544__$1 = (function (){var statearr_14560 = state_14544;
(statearr_14560[(11)] = inst_14525__$1);

(statearr_14560[(7)] = inst_14523__$1);

return statearr_14560;
})();
if(cljs.core.truth_(inst_14525__$1)){
var statearr_14561_14609 = state_14544__$1;
(statearr_14561_14609[(1)] = (19));

} else {
var statearr_14562_14610 = state_14544__$1;
(statearr_14562_14610[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (25))){
var inst_14534 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14563_14611 = state_14544__$1;
(statearr_14563_14611[(2)] = inst_14534);

(statearr_14563_14611[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (17))){
var inst_14499 = (state_14544[(10)]);
var inst_14508 = cljs.core.first(inst_14499);
var inst_14509 = cljs.core.async.muxch_STAR_(inst_14508);
var inst_14510 = cljs.core.async.close_BANG_(inst_14509);
var inst_14511 = cljs.core.next(inst_14499);
var inst_14485 = inst_14511;
var inst_14486 = null;
var inst_14487 = (0);
var inst_14488 = (0);
var state_14544__$1 = (function (){var statearr_14564 = state_14544;
(statearr_14564[(12)] = inst_14487);

(statearr_14564[(13)] = inst_14510);

(statearr_14564[(14)] = inst_14486);

(statearr_14564[(15)] = inst_14485);

(statearr_14564[(16)] = inst_14488);

return statearr_14564;
})();
var statearr_14565_14612 = state_14544__$1;
(statearr_14565_14612[(2)] = null);

(statearr_14565_14612[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (3))){
var inst_14542 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14544__$1,inst_14542);
} else {
if((state_val_14545 === (12))){
var inst_14519 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14566_14613 = state_14544__$1;
(statearr_14566_14613[(2)] = inst_14519);

(statearr_14566_14613[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (2))){
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14544__$1,(4),ch);
} else {
if((state_val_14545 === (23))){
var state_14544__$1 = state_14544;
var statearr_14567_14614 = state_14544__$1;
(statearr_14567_14614[(2)] = null);

(statearr_14567_14614[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (19))){
var inst_14525 = (state_14544[(11)]);
var inst_14475 = (state_14544[(8)]);
var inst_14527 = cljs.core.async.muxch_STAR_(inst_14525);
var state_14544__$1 = state_14544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14544__$1,(22),inst_14527,inst_14475);
} else {
if((state_val_14545 === (11))){
var inst_14485 = (state_14544[(15)]);
var inst_14499 = (state_14544[(10)]);
var inst_14499__$1 = cljs.core.seq(inst_14485);
var state_14544__$1 = (function (){var statearr_14568 = state_14544;
(statearr_14568[(10)] = inst_14499__$1);

return statearr_14568;
})();
if(inst_14499__$1){
var statearr_14569_14615 = state_14544__$1;
(statearr_14569_14615[(1)] = (13));

} else {
var statearr_14570_14616 = state_14544__$1;
(statearr_14570_14616[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (9))){
var inst_14521 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14571_14617 = state_14544__$1;
(statearr_14571_14617[(2)] = inst_14521);

(statearr_14571_14617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (5))){
var inst_14482 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_14483 = cljs.core.vals(inst_14482);
var inst_14484 = cljs.core.seq(inst_14483);
var inst_14485 = inst_14484;
var inst_14486 = null;
var inst_14487 = (0);
var inst_14488 = (0);
var state_14544__$1 = (function (){var statearr_14572 = state_14544;
(statearr_14572[(12)] = inst_14487);

(statearr_14572[(14)] = inst_14486);

(statearr_14572[(15)] = inst_14485);

(statearr_14572[(16)] = inst_14488);

return statearr_14572;
})();
var statearr_14573_14618 = state_14544__$1;
(statearr_14573_14618[(2)] = null);

(statearr_14573_14618[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (14))){
var state_14544__$1 = state_14544;
var statearr_14577_14619 = state_14544__$1;
(statearr_14577_14619[(2)] = null);

(statearr_14577_14619[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (16))){
var inst_14499 = (state_14544[(10)]);
var inst_14503 = cljs.core.chunk_first(inst_14499);
var inst_14504 = cljs.core.chunk_rest(inst_14499);
var inst_14505 = cljs.core.count(inst_14503);
var inst_14485 = inst_14504;
var inst_14486 = inst_14503;
var inst_14487 = inst_14505;
var inst_14488 = (0);
var state_14544__$1 = (function (){var statearr_14578 = state_14544;
(statearr_14578[(12)] = inst_14487);

(statearr_14578[(14)] = inst_14486);

(statearr_14578[(15)] = inst_14485);

(statearr_14578[(16)] = inst_14488);

return statearr_14578;
})();
var statearr_14579_14620 = state_14544__$1;
(statearr_14579_14620[(2)] = null);

(statearr_14579_14620[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (10))){
var inst_14487 = (state_14544[(12)]);
var inst_14486 = (state_14544[(14)]);
var inst_14485 = (state_14544[(15)]);
var inst_14488 = (state_14544[(16)]);
var inst_14493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_14486,inst_14488);
var inst_14494 = cljs.core.async.muxch_STAR_(inst_14493);
var inst_14495 = cljs.core.async.close_BANG_(inst_14494);
var inst_14496 = (inst_14488 + (1));
var tmp14574 = inst_14487;
var tmp14575 = inst_14486;
var tmp14576 = inst_14485;
var inst_14485__$1 = tmp14576;
var inst_14486__$1 = tmp14575;
var inst_14487__$1 = tmp14574;
var inst_14488__$1 = inst_14496;
var state_14544__$1 = (function (){var statearr_14580 = state_14544;
(statearr_14580[(12)] = inst_14487__$1);

(statearr_14580[(14)] = inst_14486__$1);

(statearr_14580[(15)] = inst_14485__$1);

(statearr_14580[(17)] = inst_14495);

(statearr_14580[(16)] = inst_14488__$1);

return statearr_14580;
})();
var statearr_14581_14621 = state_14544__$1;
(statearr_14581_14621[(2)] = null);

(statearr_14581_14621[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (18))){
var inst_14514 = (state_14544[(2)]);
var state_14544__$1 = state_14544;
var statearr_14582_14622 = state_14544__$1;
(statearr_14582_14622[(2)] = inst_14514);

(statearr_14582_14622[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14545 === (8))){
var inst_14487 = (state_14544[(12)]);
var inst_14488 = (state_14544[(16)]);
var inst_14490 = (inst_14488 < inst_14487);
var inst_14491 = inst_14490;
var state_14544__$1 = state_14544;
if(cljs.core.truth_(inst_14491)){
var statearr_14583_14623 = state_14544__$1;
(statearr_14583_14623[(1)] = (10));

} else {
var statearr_14584_14624 = state_14544__$1;
(statearr_14584_14624[(1)] = (11));

}

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
});})(c__12674__auto___14596,mults,ensure_mult,p))
;
return ((function (switch__12560__auto__,c__12674__auto___14596,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_14588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14588[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_14588[(1)] = (1));

return statearr_14588;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_14544){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14544);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14589){if((e14589 instanceof Object)){
var ex__12564__auto__ = e14589;
var statearr_14590_14625 = state_14544;
(statearr_14590_14625[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14544);

return cljs.core.cst$kw$recur;
} else {
throw e14589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14626 = state_14544;
state_14544 = G__14626;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_14544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_14544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14596,mults,ensure_mult,p))
})();
var state__12676__auto__ = (function (){var statearr_14591 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14596);

return statearr_14591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14596,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14627 = [];
var len__6226__auto___14630 = arguments.length;
var i__6227__auto___14631 = (0);
while(true){
if((i__6227__auto___14631 < len__6226__auto___14630)){
args14627.push((arguments[i__6227__auto___14631]));

var G__14632 = (i__6227__auto___14631 + (1));
i__6227__auto___14631 = G__14632;
continue;
} else {
}
break;
}

var G__14629 = args14627.length;
switch (G__14629) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14627.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14634 = [];
var len__6226__auto___14637 = arguments.length;
var i__6227__auto___14638 = (0);
while(true){
if((i__6227__auto___14638 < len__6226__auto___14637)){
args14634.push((arguments[i__6227__auto___14638]));

var G__14639 = (i__6227__auto___14638 + (1));
i__6227__auto___14638 = G__14639;
continue;
} else {
}
break;
}

var G__14636 = args14634.length;
switch (G__14636) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14634.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14641 = [];
var len__6226__auto___14712 = arguments.length;
var i__6227__auto___14713 = (0);
while(true){
if((i__6227__auto___14713 < len__6226__auto___14712)){
args14641.push((arguments[i__6227__auto___14713]));

var G__14714 = (i__6227__auto___14713 + (1));
i__6227__auto___14713 = G__14714;
continue;
} else {
}
break;
}

var G__14643 = args14641.length;
switch (G__14643) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14641.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__12674__auto___14716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14682){
var state_val_14683 = (state_14682[(1)]);
if((state_val_14683 === (7))){
var state_14682__$1 = state_14682;
var statearr_14684_14717 = state_14682__$1;
(statearr_14684_14717[(2)] = null);

(statearr_14684_14717[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (1))){
var state_14682__$1 = state_14682;
var statearr_14685_14718 = state_14682__$1;
(statearr_14685_14718[(2)] = null);

(statearr_14685_14718[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (4))){
var inst_14646 = (state_14682[(7)]);
var inst_14648 = (inst_14646 < cnt);
var state_14682__$1 = state_14682;
if(cljs.core.truth_(inst_14648)){
var statearr_14686_14719 = state_14682__$1;
(statearr_14686_14719[(1)] = (6));

} else {
var statearr_14687_14720 = state_14682__$1;
(statearr_14687_14720[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (15))){
var inst_14678 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
var statearr_14688_14721 = state_14682__$1;
(statearr_14688_14721[(2)] = inst_14678);

(statearr_14688_14721[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (13))){
var inst_14671 = cljs.core.async.close_BANG_(out);
var state_14682__$1 = state_14682;
var statearr_14689_14722 = state_14682__$1;
(statearr_14689_14722[(2)] = inst_14671);

(statearr_14689_14722[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (6))){
var state_14682__$1 = state_14682;
var statearr_14690_14723 = state_14682__$1;
(statearr_14690_14723[(2)] = null);

(statearr_14690_14723[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (3))){
var inst_14680 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14682__$1,inst_14680);
} else {
if((state_val_14683 === (12))){
var inst_14668 = (state_14682[(8)]);
var inst_14668__$1 = (state_14682[(2)]);
var inst_14669 = cljs.core.some(cljs.core.nil_QMARK_,inst_14668__$1);
var state_14682__$1 = (function (){var statearr_14691 = state_14682;
(statearr_14691[(8)] = inst_14668__$1);

return statearr_14691;
})();
if(cljs.core.truth_(inst_14669)){
var statearr_14692_14724 = state_14682__$1;
(statearr_14692_14724[(1)] = (13));

} else {
var statearr_14693_14725 = state_14682__$1;
(statearr_14693_14725[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (2))){
var inst_14645 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_14646 = (0);
var state_14682__$1 = (function (){var statearr_14694 = state_14682;
(statearr_14694[(7)] = inst_14646);

(statearr_14694[(9)] = inst_14645);

return statearr_14694;
})();
var statearr_14695_14726 = state_14682__$1;
(statearr_14695_14726[(2)] = null);

(statearr_14695_14726[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (11))){
var inst_14646 = (state_14682[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_14682,(10),Object,null,(9));
var inst_14655 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_14646) : chs__$1.call(null,inst_14646));
var inst_14656 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_14646) : done.call(null,inst_14646));
var inst_14657 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_14655,inst_14656);
var state_14682__$1 = state_14682;
var statearr_14696_14727 = state_14682__$1;
(statearr_14696_14727[(2)] = inst_14657);


cljs.core.async.impl.ioc_helpers.process_exception(state_14682__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (9))){
var inst_14646 = (state_14682[(7)]);
var inst_14659 = (state_14682[(2)]);
var inst_14660 = (inst_14646 + (1));
var inst_14646__$1 = inst_14660;
var state_14682__$1 = (function (){var statearr_14697 = state_14682;
(statearr_14697[(7)] = inst_14646__$1);

(statearr_14697[(10)] = inst_14659);

return statearr_14697;
})();
var statearr_14698_14728 = state_14682__$1;
(statearr_14698_14728[(2)] = null);

(statearr_14698_14728[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (5))){
var inst_14666 = (state_14682[(2)]);
var state_14682__$1 = (function (){var statearr_14699 = state_14682;
(statearr_14699[(11)] = inst_14666);

return statearr_14699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14682__$1,(12),dchan);
} else {
if((state_val_14683 === (14))){
var inst_14668 = (state_14682[(8)]);
var inst_14673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_14668);
var state_14682__$1 = state_14682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14682__$1,(16),out,inst_14673);
} else {
if((state_val_14683 === (16))){
var inst_14675 = (state_14682[(2)]);
var state_14682__$1 = (function (){var statearr_14700 = state_14682;
(statearr_14700[(12)] = inst_14675);

return statearr_14700;
})();
var statearr_14701_14729 = state_14682__$1;
(statearr_14701_14729[(2)] = null);

(statearr_14701_14729[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (10))){
var inst_14650 = (state_14682[(2)]);
var inst_14651 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_14682__$1 = (function (){var statearr_14702 = state_14682;
(statearr_14702[(13)] = inst_14650);

return statearr_14702;
})();
var statearr_14703_14730 = state_14682__$1;
(statearr_14703_14730[(2)] = inst_14651);


cljs.core.async.impl.ioc_helpers.process_exception(state_14682__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_14683 === (8))){
var inst_14664 = (state_14682[(2)]);
var state_14682__$1 = state_14682;
var statearr_14704_14731 = state_14682__$1;
(statearr_14704_14731[(2)] = inst_14664);

(statearr_14704_14731[(1)] = (5));


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
}
}
}
});})(c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12560__auto__,c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_14708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14708[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_14708[(1)] = (1));

return statearr_14708;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_14682){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14682);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14709){if((e14709 instanceof Object)){
var ex__12564__auto__ = e14709;
var statearr_14710_14732 = state_14682;
(statearr_14710_14732[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14682);

return cljs.core.cst$kw$recur;
} else {
throw e14709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14733 = state_14682;
state_14682 = G__14733;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_14682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_14682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12676__auto__ = (function (){var statearr_14711 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14716);

return statearr_14711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14716,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args14735 = [];
var len__6226__auto___14791 = arguments.length;
var i__6227__auto___14792 = (0);
while(true){
if((i__6227__auto___14792 < len__6226__auto___14791)){
args14735.push((arguments[i__6227__auto___14792]));

var G__14793 = (i__6227__auto___14792 + (1));
i__6227__auto___14792 = G__14793;
continue;
} else {
}
break;
}

var G__14737 = args14735.length;
switch (G__14737) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14735.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___14795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14795,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14795,out){
return (function (state_14767){
var state_val_14768 = (state_14767[(1)]);
if((state_val_14768 === (7))){
var inst_14747 = (state_14767[(7)]);
var inst_14746 = (state_14767[(8)]);
var inst_14746__$1 = (state_14767[(2)]);
var inst_14747__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14746__$1,(0),null);
var inst_14748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14746__$1,(1),null);
var inst_14749 = (inst_14747__$1 == null);
var state_14767__$1 = (function (){var statearr_14769 = state_14767;
(statearr_14769[(7)] = inst_14747__$1);

(statearr_14769[(8)] = inst_14746__$1);

(statearr_14769[(9)] = inst_14748);

return statearr_14769;
})();
if(cljs.core.truth_(inst_14749)){
var statearr_14770_14796 = state_14767__$1;
(statearr_14770_14796[(1)] = (8));

} else {
var statearr_14771_14797 = state_14767__$1;
(statearr_14771_14797[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (1))){
var inst_14738 = cljs.core.vec(chs);
var inst_14739 = inst_14738;
var state_14767__$1 = (function (){var statearr_14772 = state_14767;
(statearr_14772[(10)] = inst_14739);

return statearr_14772;
})();
var statearr_14773_14798 = state_14767__$1;
(statearr_14773_14798[(2)] = null);

(statearr_14773_14798[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (4))){
var inst_14739 = (state_14767[(10)]);
var state_14767__$1 = state_14767;
return cljs.core.async.ioc_alts_BANG_(state_14767__$1,(7),inst_14739);
} else {
if((state_val_14768 === (6))){
var inst_14763 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14774_14799 = state_14767__$1;
(statearr_14774_14799[(2)] = inst_14763);

(statearr_14774_14799[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (3))){
var inst_14765 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14767__$1,inst_14765);
} else {
if((state_val_14768 === (2))){
var inst_14739 = (state_14767[(10)]);
var inst_14741 = cljs.core.count(inst_14739);
var inst_14742 = (inst_14741 > (0));
var state_14767__$1 = state_14767;
if(cljs.core.truth_(inst_14742)){
var statearr_14776_14800 = state_14767__$1;
(statearr_14776_14800[(1)] = (4));

} else {
var statearr_14777_14801 = state_14767__$1;
(statearr_14777_14801[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (11))){
var inst_14739 = (state_14767[(10)]);
var inst_14756 = (state_14767[(2)]);
var tmp14775 = inst_14739;
var inst_14739__$1 = tmp14775;
var state_14767__$1 = (function (){var statearr_14778 = state_14767;
(statearr_14778[(11)] = inst_14756);

(statearr_14778[(10)] = inst_14739__$1);

return statearr_14778;
})();
var statearr_14779_14802 = state_14767__$1;
(statearr_14779_14802[(2)] = null);

(statearr_14779_14802[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (9))){
var inst_14747 = (state_14767[(7)]);
var state_14767__$1 = state_14767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14767__$1,(11),out,inst_14747);
} else {
if((state_val_14768 === (5))){
var inst_14761 = cljs.core.async.close_BANG_(out);
var state_14767__$1 = state_14767;
var statearr_14780_14803 = state_14767__$1;
(statearr_14780_14803[(2)] = inst_14761);

(statearr_14780_14803[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (10))){
var inst_14759 = (state_14767[(2)]);
var state_14767__$1 = state_14767;
var statearr_14781_14804 = state_14767__$1;
(statearr_14781_14804[(2)] = inst_14759);

(statearr_14781_14804[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14768 === (8))){
var inst_14747 = (state_14767[(7)]);
var inst_14746 = (state_14767[(8)]);
var inst_14739 = (state_14767[(10)]);
var inst_14748 = (state_14767[(9)]);
var inst_14751 = (function (){var cs = inst_14739;
var vec__14744 = inst_14746;
var v = inst_14747;
var c = inst_14748;
return ((function (cs,vec__14744,v,c,inst_14747,inst_14746,inst_14739,inst_14748,state_val_14768,c__12674__auto___14795,out){
return (function (p1__14734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__14734_SHARP_);
});
;})(cs,vec__14744,v,c,inst_14747,inst_14746,inst_14739,inst_14748,state_val_14768,c__12674__auto___14795,out))
})();
var inst_14752 = cljs.core.filterv(inst_14751,inst_14739);
var inst_14739__$1 = inst_14752;
var state_14767__$1 = (function (){var statearr_14782 = state_14767;
(statearr_14782[(10)] = inst_14739__$1);

return statearr_14782;
})();
var statearr_14783_14805 = state_14767__$1;
(statearr_14783_14805[(2)] = null);

(statearr_14783_14805[(1)] = (2));


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
});})(c__12674__auto___14795,out))
;
return ((function (switch__12560__auto__,c__12674__auto___14795,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_14787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14787[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_14787[(1)] = (1));

return statearr_14787;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_14767){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14767);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14788){if((e14788 instanceof Object)){
var ex__12564__auto__ = e14788;
var statearr_14789_14806 = state_14767;
(statearr_14789_14806[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14767);

return cljs.core.cst$kw$recur;
} else {
throw e14788;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14807 = state_14767;
state_14767 = G__14807;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_14767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_14767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14795,out))
})();
var state__12676__auto__ = (function (){var statearr_14790 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14795);

return statearr_14790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14795,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args14808 = [];
var len__6226__auto___14857 = arguments.length;
var i__6227__auto___14858 = (0);
while(true){
if((i__6227__auto___14858 < len__6226__auto___14857)){
args14808.push((arguments[i__6227__auto___14858]));

var G__14859 = (i__6227__auto___14858 + (1));
i__6227__auto___14858 = G__14859;
continue;
} else {
}
break;
}

var G__14810 = args14808.length;
switch (G__14810) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14808.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___14861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14861,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14861,out){
return (function (state_14834){
var state_val_14835 = (state_14834[(1)]);
if((state_val_14835 === (7))){
var inst_14816 = (state_14834[(7)]);
var inst_14816__$1 = (state_14834[(2)]);
var inst_14817 = (inst_14816__$1 == null);
var inst_14818 = cljs.core.not(inst_14817);
var state_14834__$1 = (function (){var statearr_14836 = state_14834;
(statearr_14836[(7)] = inst_14816__$1);

return statearr_14836;
})();
if(inst_14818){
var statearr_14837_14862 = state_14834__$1;
(statearr_14837_14862[(1)] = (8));

} else {
var statearr_14838_14863 = state_14834__$1;
(statearr_14838_14863[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (1))){
var inst_14811 = (0);
var state_14834__$1 = (function (){var statearr_14839 = state_14834;
(statearr_14839[(8)] = inst_14811);

return statearr_14839;
})();
var statearr_14840_14864 = state_14834__$1;
(statearr_14840_14864[(2)] = null);

(statearr_14840_14864[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (4))){
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14834__$1,(7),ch);
} else {
if((state_val_14835 === (6))){
var inst_14829 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14841_14865 = state_14834__$1;
(statearr_14841_14865[(2)] = inst_14829);

(statearr_14841_14865[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (3))){
var inst_14831 = (state_14834[(2)]);
var inst_14832 = cljs.core.async.close_BANG_(out);
var state_14834__$1 = (function (){var statearr_14842 = state_14834;
(statearr_14842[(9)] = inst_14831);

return statearr_14842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14834__$1,inst_14832);
} else {
if((state_val_14835 === (2))){
var inst_14811 = (state_14834[(8)]);
var inst_14813 = (inst_14811 < n);
var state_14834__$1 = state_14834;
if(cljs.core.truth_(inst_14813)){
var statearr_14843_14866 = state_14834__$1;
(statearr_14843_14866[(1)] = (4));

} else {
var statearr_14844_14867 = state_14834__$1;
(statearr_14844_14867[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (11))){
var inst_14811 = (state_14834[(8)]);
var inst_14821 = (state_14834[(2)]);
var inst_14822 = (inst_14811 + (1));
var inst_14811__$1 = inst_14822;
var state_14834__$1 = (function (){var statearr_14845 = state_14834;
(statearr_14845[(10)] = inst_14821);

(statearr_14845[(8)] = inst_14811__$1);

return statearr_14845;
})();
var statearr_14846_14868 = state_14834__$1;
(statearr_14846_14868[(2)] = null);

(statearr_14846_14868[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (9))){
var state_14834__$1 = state_14834;
var statearr_14847_14869 = state_14834__$1;
(statearr_14847_14869[(2)] = null);

(statearr_14847_14869[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (5))){
var state_14834__$1 = state_14834;
var statearr_14848_14870 = state_14834__$1;
(statearr_14848_14870[(2)] = null);

(statearr_14848_14870[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (10))){
var inst_14826 = (state_14834[(2)]);
var state_14834__$1 = state_14834;
var statearr_14849_14871 = state_14834__$1;
(statearr_14849_14871[(2)] = inst_14826);

(statearr_14849_14871[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14835 === (8))){
var inst_14816 = (state_14834[(7)]);
var state_14834__$1 = state_14834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14834__$1,(11),out,inst_14816);
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
});})(c__12674__auto___14861,out))
;
return ((function (switch__12560__auto__,c__12674__auto___14861,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_14853 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14853[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_14853[(1)] = (1));

return statearr_14853;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_14834){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14834);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14854){if((e14854 instanceof Object)){
var ex__12564__auto__ = e14854;
var statearr_14855_14872 = state_14834;
(statearr_14855_14872[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14834);

return cljs.core.cst$kw$recur;
} else {
throw e14854;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14873 = state_14834;
state_14834 = G__14873;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_14834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_14834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14861,out))
})();
var state__12676__auto__ = (function (){var statearr_14856 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14861);

return statearr_14856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14861,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14883 = (function (map_LT_,f,ch,meta14884){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14884 = meta14884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14885,meta14884__$1){
var self__ = this;
var _14885__$1 = this;
return (new cljs.core.async.t_cljs$core$async14883(self__.map_LT_,self__.f,self__.ch,meta14884__$1));
});

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14885){
var self__ = this;
var _14885__$1 = this;
return self__.meta14884;
});

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14886 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14886 = (function (map_LT_,f,ch,meta14884,_,fn1,meta14887){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14884 = meta14884;
this._ = _;
this.fn1 = fn1;
this.meta14887 = meta14887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14888,meta14887__$1){
var self__ = this;
var _14888__$1 = this;
return (new cljs.core.async.t_cljs$core$async14886(self__.map_LT_,self__.f,self__.ch,self__.meta14884,self__._,self__.fn1,meta14887__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14888){
var self__ = this;
var _14888__$1 = this;
return self__.meta14887;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14874_SHARP_){
var G__14889 = (((p1__14874_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__14874_SHARP_) : self__.f.call(null,p1__14874_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__14889) : f1.call(null,G__14889));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14884,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async14883], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta14887], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14886";

cljs.core.async.t_cljs$core$async14886.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14886");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14886 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14886(map_LT___$1,f__$1,ch__$1,meta14884__$1,___$2,fn1__$1,meta14887){
return (new cljs.core.async.t_cljs$core$async14886(map_LT___$1,f__$1,ch__$1,meta14884__$1,___$2,fn1__$1,meta14887));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14886(self__.map_LT_,self__.f,self__.ch,self__.meta14884,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5156__auto__ = ret;
if(cljs.core.truth_(and__5156__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__5156__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__14890 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__14890) : self__.f.call(null,G__14890));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14883.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14884], null);
});

cljs.core.async.t_cljs$core$async14883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14883";

cljs.core.async.t_cljs$core$async14883.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14883");
});

cljs.core.async.__GT_t_cljs$core$async14883 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14883(map_LT___$1,f__$1,ch__$1,meta14884){
return (new cljs.core.async.t_cljs$core$async14883(map_LT___$1,f__$1,ch__$1,meta14884));
});

}

return (new cljs.core.async.t_cljs$core$async14883(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14894 = (function (map_GT_,f,ch,meta14895){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14895 = meta14895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14896,meta14895__$1){
var self__ = this;
var _14896__$1 = this;
return (new cljs.core.async.t_cljs$core$async14894(self__.map_GT_,self__.f,self__.ch,meta14895__$1));
});

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14896){
var self__ = this;
var _14896__$1 = this;
return self__.meta14895;
});

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async14894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14895], null);
});

cljs.core.async.t_cljs$core$async14894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14894";

cljs.core.async.t_cljs$core$async14894.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14894");
});

cljs.core.async.__GT_t_cljs$core$async14894 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14894(map_GT___$1,f__$1,ch__$1,meta14895){
return (new cljs.core.async.t_cljs$core$async14894(map_GT___$1,f__$1,ch__$1,meta14895));
});

}

return (new cljs.core.async.t_cljs$core$async14894(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14900 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14900 = (function (filter_GT_,p,ch,meta14901){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14901 = meta14901;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14902,meta14901__$1){
var self__ = this;
var _14902__$1 = this;
return (new cljs.core.async.t_cljs$core$async14900(self__.filter_GT_,self__.p,self__.ch,meta14901__$1));
});

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14902){
var self__ = this;
var _14902__$1 = this;
return self__.meta14901;
});

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14900.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14900.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta14901], null);
});

cljs.core.async.t_cljs$core$async14900.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14900";

cljs.core.async.t_cljs$core$async14900.cljs$lang$ctorPrWriter = (function (this__5766__auto__,writer__5767__auto__,opt__5768__auto__){
return cljs.core._write(writer__5767__auto__,"cljs.core.async/t_cljs$core$async14900");
});

cljs.core.async.__GT_t_cljs$core$async14900 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14900(filter_GT___$1,p__$1,ch__$1,meta14901){
return (new cljs.core.async.t_cljs$core$async14900(filter_GT___$1,p__$1,ch__$1,meta14901));
});

}

return (new cljs.core.async.t_cljs$core$async14900(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args14903 = [];
var len__6226__auto___14947 = arguments.length;
var i__6227__auto___14948 = (0);
while(true){
if((i__6227__auto___14948 < len__6226__auto___14947)){
args14903.push((arguments[i__6227__auto___14948]));

var G__14949 = (i__6227__auto___14948 + (1));
i__6227__auto___14948 = G__14949;
continue;
} else {
}
break;
}

var G__14905 = args14903.length;
switch (G__14905) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14903.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___14951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___14951,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___14951,out){
return (function (state_14926){
var state_val_14927 = (state_14926[(1)]);
if((state_val_14927 === (7))){
var inst_14922 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14928_14952 = state_14926__$1;
(statearr_14928_14952[(2)] = inst_14922);

(statearr_14928_14952[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (1))){
var state_14926__$1 = state_14926;
var statearr_14929_14953 = state_14926__$1;
(statearr_14929_14953[(2)] = null);

(statearr_14929_14953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (4))){
var inst_14908 = (state_14926[(7)]);
var inst_14908__$1 = (state_14926[(2)]);
var inst_14909 = (inst_14908__$1 == null);
var state_14926__$1 = (function (){var statearr_14930 = state_14926;
(statearr_14930[(7)] = inst_14908__$1);

return statearr_14930;
})();
if(cljs.core.truth_(inst_14909)){
var statearr_14931_14954 = state_14926__$1;
(statearr_14931_14954[(1)] = (5));

} else {
var statearr_14932_14955 = state_14926__$1;
(statearr_14932_14955[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (6))){
var inst_14908 = (state_14926[(7)]);
var inst_14913 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14908) : p.call(null,inst_14908));
var state_14926__$1 = state_14926;
if(cljs.core.truth_(inst_14913)){
var statearr_14933_14956 = state_14926__$1;
(statearr_14933_14956[(1)] = (8));

} else {
var statearr_14934_14957 = state_14926__$1;
(statearr_14934_14957[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (3))){
var inst_14924 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14926__$1,inst_14924);
} else {
if((state_val_14927 === (2))){
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14926__$1,(4),ch);
} else {
if((state_val_14927 === (11))){
var inst_14916 = (state_14926[(2)]);
var state_14926__$1 = state_14926;
var statearr_14935_14958 = state_14926__$1;
(statearr_14935_14958[(2)] = inst_14916);

(statearr_14935_14958[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (9))){
var state_14926__$1 = state_14926;
var statearr_14936_14959 = state_14926__$1;
(statearr_14936_14959[(2)] = null);

(statearr_14936_14959[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (5))){
var inst_14911 = cljs.core.async.close_BANG_(out);
var state_14926__$1 = state_14926;
var statearr_14937_14960 = state_14926__$1;
(statearr_14937_14960[(2)] = inst_14911);

(statearr_14937_14960[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (10))){
var inst_14919 = (state_14926[(2)]);
var state_14926__$1 = (function (){var statearr_14938 = state_14926;
(statearr_14938[(8)] = inst_14919);

return statearr_14938;
})();
var statearr_14939_14961 = state_14926__$1;
(statearr_14939_14961[(2)] = null);

(statearr_14939_14961[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14927 === (8))){
var inst_14908 = (state_14926[(7)]);
var state_14926__$1 = state_14926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14926__$1,(11),out,inst_14908);
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
});})(c__12674__auto___14951,out))
;
return ((function (switch__12560__auto__,c__12674__auto___14951,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_14943 = [null,null,null,null,null,null,null,null,null];
(statearr_14943[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_14943[(1)] = (1));

return statearr_14943;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_14926){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_14926);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e14944){if((e14944 instanceof Object)){
var ex__12564__auto__ = e14944;
var statearr_14945_14962 = state_14926;
(statearr_14945_14962[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14926);

return cljs.core.cst$kw$recur;
} else {
throw e14944;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__14963 = state_14926;
state_14926 = G__14963;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_14926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_14926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___14951,out))
})();
var state__12676__auto__ = (function (){var statearr_14946 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_14946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___14951);

return statearr_14946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___14951,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14964 = [];
var len__6226__auto___14967 = arguments.length;
var i__6227__auto___14968 = (0);
while(true){
if((i__6227__auto___14968 < len__6226__auto___14967)){
args14964.push((arguments[i__6227__auto___14968]));

var G__14969 = (i__6227__auto___14968 + (1));
i__6227__auto___14968 = G__14969;
continue;
} else {
}
break;
}

var G__14966 = args14964.length;
switch (G__14966) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14964.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__12674__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto__){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto__){
return (function (state_15136){
var state_val_15137 = (state_15136[(1)]);
if((state_val_15137 === (7))){
var inst_15132 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15138_15179 = state_15136__$1;
(statearr_15138_15179[(2)] = inst_15132);

(statearr_15138_15179[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (20))){
var inst_15102 = (state_15136[(7)]);
var inst_15113 = (state_15136[(2)]);
var inst_15114 = cljs.core.next(inst_15102);
var inst_15088 = inst_15114;
var inst_15089 = null;
var inst_15090 = (0);
var inst_15091 = (0);
var state_15136__$1 = (function (){var statearr_15139 = state_15136;
(statearr_15139[(8)] = inst_15088);

(statearr_15139[(9)] = inst_15089);

(statearr_15139[(10)] = inst_15090);

(statearr_15139[(11)] = inst_15113);

(statearr_15139[(12)] = inst_15091);

return statearr_15139;
})();
var statearr_15140_15180 = state_15136__$1;
(statearr_15140_15180[(2)] = null);

(statearr_15140_15180[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (1))){
var state_15136__$1 = state_15136;
var statearr_15141_15181 = state_15136__$1;
(statearr_15141_15181[(2)] = null);

(statearr_15141_15181[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (4))){
var inst_15077 = (state_15136[(13)]);
var inst_15077__$1 = (state_15136[(2)]);
var inst_15078 = (inst_15077__$1 == null);
var state_15136__$1 = (function (){var statearr_15142 = state_15136;
(statearr_15142[(13)] = inst_15077__$1);

return statearr_15142;
})();
if(cljs.core.truth_(inst_15078)){
var statearr_15143_15182 = state_15136__$1;
(statearr_15143_15182[(1)] = (5));

} else {
var statearr_15144_15183 = state_15136__$1;
(statearr_15144_15183[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (15))){
var state_15136__$1 = state_15136;
var statearr_15148_15184 = state_15136__$1;
(statearr_15148_15184[(2)] = null);

(statearr_15148_15184[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (21))){
var state_15136__$1 = state_15136;
var statearr_15149_15185 = state_15136__$1;
(statearr_15149_15185[(2)] = null);

(statearr_15149_15185[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (13))){
var inst_15088 = (state_15136[(8)]);
var inst_15089 = (state_15136[(9)]);
var inst_15090 = (state_15136[(10)]);
var inst_15091 = (state_15136[(12)]);
var inst_15098 = (state_15136[(2)]);
var inst_15099 = (inst_15091 + (1));
var tmp15145 = inst_15088;
var tmp15146 = inst_15089;
var tmp15147 = inst_15090;
var inst_15088__$1 = tmp15145;
var inst_15089__$1 = tmp15146;
var inst_15090__$1 = tmp15147;
var inst_15091__$1 = inst_15099;
var state_15136__$1 = (function (){var statearr_15150 = state_15136;
(statearr_15150[(8)] = inst_15088__$1);

(statearr_15150[(9)] = inst_15089__$1);

(statearr_15150[(14)] = inst_15098);

(statearr_15150[(10)] = inst_15090__$1);

(statearr_15150[(12)] = inst_15091__$1);

return statearr_15150;
})();
var statearr_15151_15186 = state_15136__$1;
(statearr_15151_15186[(2)] = null);

(statearr_15151_15186[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (22))){
var state_15136__$1 = state_15136;
var statearr_15152_15187 = state_15136__$1;
(statearr_15152_15187[(2)] = null);

(statearr_15152_15187[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (6))){
var inst_15077 = (state_15136[(13)]);
var inst_15086 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15077) : f.call(null,inst_15077));
var inst_15087 = cljs.core.seq(inst_15086);
var inst_15088 = inst_15087;
var inst_15089 = null;
var inst_15090 = (0);
var inst_15091 = (0);
var state_15136__$1 = (function (){var statearr_15153 = state_15136;
(statearr_15153[(8)] = inst_15088);

(statearr_15153[(9)] = inst_15089);

(statearr_15153[(10)] = inst_15090);

(statearr_15153[(12)] = inst_15091);

return statearr_15153;
})();
var statearr_15154_15188 = state_15136__$1;
(statearr_15154_15188[(2)] = null);

(statearr_15154_15188[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (17))){
var inst_15102 = (state_15136[(7)]);
var inst_15106 = cljs.core.chunk_first(inst_15102);
var inst_15107 = cljs.core.chunk_rest(inst_15102);
var inst_15108 = cljs.core.count(inst_15106);
var inst_15088 = inst_15107;
var inst_15089 = inst_15106;
var inst_15090 = inst_15108;
var inst_15091 = (0);
var state_15136__$1 = (function (){var statearr_15155 = state_15136;
(statearr_15155[(8)] = inst_15088);

(statearr_15155[(9)] = inst_15089);

(statearr_15155[(10)] = inst_15090);

(statearr_15155[(12)] = inst_15091);

return statearr_15155;
})();
var statearr_15156_15189 = state_15136__$1;
(statearr_15156_15189[(2)] = null);

(statearr_15156_15189[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (3))){
var inst_15134 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15136__$1,inst_15134);
} else {
if((state_val_15137 === (12))){
var inst_15122 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15157_15190 = state_15136__$1;
(statearr_15157_15190[(2)] = inst_15122);

(statearr_15157_15190[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (2))){
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15136__$1,(4),in$);
} else {
if((state_val_15137 === (23))){
var inst_15130 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15158_15191 = state_15136__$1;
(statearr_15158_15191[(2)] = inst_15130);

(statearr_15158_15191[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (19))){
var inst_15117 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15159_15192 = state_15136__$1;
(statearr_15159_15192[(2)] = inst_15117);

(statearr_15159_15192[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (11))){
var inst_15102 = (state_15136[(7)]);
var inst_15088 = (state_15136[(8)]);
var inst_15102__$1 = cljs.core.seq(inst_15088);
var state_15136__$1 = (function (){var statearr_15160 = state_15136;
(statearr_15160[(7)] = inst_15102__$1);

return statearr_15160;
})();
if(inst_15102__$1){
var statearr_15161_15193 = state_15136__$1;
(statearr_15161_15193[(1)] = (14));

} else {
var statearr_15162_15194 = state_15136__$1;
(statearr_15162_15194[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (9))){
var inst_15124 = (state_15136[(2)]);
var inst_15125 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15136__$1 = (function (){var statearr_15163 = state_15136;
(statearr_15163[(15)] = inst_15124);

return statearr_15163;
})();
if(cljs.core.truth_(inst_15125)){
var statearr_15164_15195 = state_15136__$1;
(statearr_15164_15195[(1)] = (21));

} else {
var statearr_15165_15196 = state_15136__$1;
(statearr_15165_15196[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (5))){
var inst_15080 = cljs.core.async.close_BANG_(out);
var state_15136__$1 = state_15136;
var statearr_15166_15197 = state_15136__$1;
(statearr_15166_15197[(2)] = inst_15080);

(statearr_15166_15197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (14))){
var inst_15102 = (state_15136[(7)]);
var inst_15104 = cljs.core.chunked_seq_QMARK_(inst_15102);
var state_15136__$1 = state_15136;
if(inst_15104){
var statearr_15167_15198 = state_15136__$1;
(statearr_15167_15198[(1)] = (17));

} else {
var statearr_15168_15199 = state_15136__$1;
(statearr_15168_15199[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (16))){
var inst_15120 = (state_15136[(2)]);
var state_15136__$1 = state_15136;
var statearr_15169_15200 = state_15136__$1;
(statearr_15169_15200[(2)] = inst_15120);

(statearr_15169_15200[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15137 === (10))){
var inst_15089 = (state_15136[(9)]);
var inst_15091 = (state_15136[(12)]);
var inst_15096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15089,inst_15091);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15136__$1,(13),out,inst_15096);
} else {
if((state_val_15137 === (18))){
var inst_15102 = (state_15136[(7)]);
var inst_15111 = cljs.core.first(inst_15102);
var state_15136__$1 = state_15136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15136__$1,(20),out,inst_15111);
} else {
if((state_val_15137 === (8))){
var inst_15090 = (state_15136[(10)]);
var inst_15091 = (state_15136[(12)]);
var inst_15093 = (inst_15091 < inst_15090);
var inst_15094 = inst_15093;
var state_15136__$1 = state_15136;
if(cljs.core.truth_(inst_15094)){
var statearr_15170_15201 = state_15136__$1;
(statearr_15170_15201[(1)] = (10));

} else {
var statearr_15171_15202 = state_15136__$1;
(statearr_15171_15202[(1)] = (11));

}

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
});})(c__12674__auto__))
;
return ((function (switch__12560__auto__,c__12674__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____0 = (function (){
var statearr_15175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15175[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__);

(statearr_15175[(1)] = (1));

return statearr_15175;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____1 = (function (state_15136){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15136);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15176){if((e15176 instanceof Object)){
var ex__12564__auto__ = e15176;
var statearr_15177_15203 = state_15136;
(statearr_15177_15203[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15136);

return cljs.core.cst$kw$recur;
} else {
throw e15176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15204 = state_15136;
state_15136 = G__15204;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__ = function(state_15136){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____1.call(this,state_15136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12561__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto__))
})();
var state__12676__auto__ = (function (){var statearr_15178 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto__);

return statearr_15178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto__))
);

return c__12674__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15205 = [];
var len__6226__auto___15208 = arguments.length;
var i__6227__auto___15209 = (0);
while(true){
if((i__6227__auto___15209 < len__6226__auto___15208)){
args15205.push((arguments[i__6227__auto___15209]));

var G__15210 = (i__6227__auto___15209 + (1));
i__6227__auto___15209 = G__15210;
continue;
} else {
}
break;
}

var G__15207 = args15205.length;
switch (G__15207) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15205.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15212 = [];
var len__6226__auto___15215 = arguments.length;
var i__6227__auto___15216 = (0);
while(true){
if((i__6227__auto___15216 < len__6226__auto___15215)){
args15212.push((arguments[i__6227__auto___15216]));

var G__15217 = (i__6227__auto___15216 + (1));
i__6227__auto___15216 = G__15217;
continue;
} else {
}
break;
}

var G__15214 = args15212.length;
switch (G__15214) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15212.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15219 = [];
var len__6226__auto___15270 = arguments.length;
var i__6227__auto___15271 = (0);
while(true){
if((i__6227__auto___15271 < len__6226__auto___15270)){
args15219.push((arguments[i__6227__auto___15271]));

var G__15272 = (i__6227__auto___15271 + (1));
i__6227__auto___15271 = G__15272;
continue;
} else {
}
break;
}

var G__15221 = args15219.length;
switch (G__15221) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15219.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___15274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___15274,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___15274,out){
return (function (state_15245){
var state_val_15246 = (state_15245[(1)]);
if((state_val_15246 === (7))){
var inst_15240 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
var statearr_15247_15275 = state_15245__$1;
(statearr_15247_15275[(2)] = inst_15240);

(statearr_15247_15275[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (1))){
var inst_15222 = null;
var state_15245__$1 = (function (){var statearr_15248 = state_15245;
(statearr_15248[(7)] = inst_15222);

return statearr_15248;
})();
var statearr_15249_15276 = state_15245__$1;
(statearr_15249_15276[(2)] = null);

(statearr_15249_15276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (4))){
var inst_15225 = (state_15245[(8)]);
var inst_15225__$1 = (state_15245[(2)]);
var inst_15226 = (inst_15225__$1 == null);
var inst_15227 = cljs.core.not(inst_15226);
var state_15245__$1 = (function (){var statearr_15250 = state_15245;
(statearr_15250[(8)] = inst_15225__$1);

return statearr_15250;
})();
if(inst_15227){
var statearr_15251_15277 = state_15245__$1;
(statearr_15251_15277[(1)] = (5));

} else {
var statearr_15252_15278 = state_15245__$1;
(statearr_15252_15278[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (6))){
var state_15245__$1 = state_15245;
var statearr_15253_15279 = state_15245__$1;
(statearr_15253_15279[(2)] = null);

(statearr_15253_15279[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (3))){
var inst_15242 = (state_15245[(2)]);
var inst_15243 = cljs.core.async.close_BANG_(out);
var state_15245__$1 = (function (){var statearr_15254 = state_15245;
(statearr_15254[(9)] = inst_15242);

return statearr_15254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15245__$1,inst_15243);
} else {
if((state_val_15246 === (2))){
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15245__$1,(4),ch);
} else {
if((state_val_15246 === (11))){
var inst_15225 = (state_15245[(8)]);
var inst_15234 = (state_15245[(2)]);
var inst_15222 = inst_15225;
var state_15245__$1 = (function (){var statearr_15255 = state_15245;
(statearr_15255[(7)] = inst_15222);

(statearr_15255[(10)] = inst_15234);

return statearr_15255;
})();
var statearr_15256_15280 = state_15245__$1;
(statearr_15256_15280[(2)] = null);

(statearr_15256_15280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (9))){
var inst_15225 = (state_15245[(8)]);
var state_15245__$1 = state_15245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15245__$1,(11),out,inst_15225);
} else {
if((state_val_15246 === (5))){
var inst_15225 = (state_15245[(8)]);
var inst_15222 = (state_15245[(7)]);
var inst_15229 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15225,inst_15222);
var state_15245__$1 = state_15245;
if(inst_15229){
var statearr_15258_15281 = state_15245__$1;
(statearr_15258_15281[(1)] = (8));

} else {
var statearr_15259_15282 = state_15245__$1;
(statearr_15259_15282[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (10))){
var inst_15237 = (state_15245[(2)]);
var state_15245__$1 = state_15245;
var statearr_15260_15283 = state_15245__$1;
(statearr_15260_15283[(2)] = inst_15237);

(statearr_15260_15283[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15246 === (8))){
var inst_15222 = (state_15245[(7)]);
var tmp15257 = inst_15222;
var inst_15222__$1 = tmp15257;
var state_15245__$1 = (function (){var statearr_15261 = state_15245;
(statearr_15261[(7)] = inst_15222__$1);

return statearr_15261;
})();
var statearr_15262_15284 = state_15245__$1;
(statearr_15262_15284[(2)] = null);

(statearr_15262_15284[(1)] = (2));


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
});})(c__12674__auto___15274,out))
;
return ((function (switch__12560__auto__,c__12674__auto___15274,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_15266 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15266[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_15266[(1)] = (1));

return statearr_15266;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_15245){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15245);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15267){if((e15267 instanceof Object)){
var ex__12564__auto__ = e15267;
var statearr_15268_15285 = state_15245;
(statearr_15268_15285[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15245);

return cljs.core.cst$kw$recur;
} else {
throw e15267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15286 = state_15245;
state_15245 = G__15286;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_15245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_15245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___15274,out))
})();
var state__12676__auto__ = (function (){var statearr_15269 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___15274);

return statearr_15269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___15274,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15287 = [];
var len__6226__auto___15357 = arguments.length;
var i__6227__auto___15358 = (0);
while(true){
if((i__6227__auto___15358 < len__6226__auto___15357)){
args15287.push((arguments[i__6227__auto___15358]));

var G__15359 = (i__6227__auto___15358 + (1));
i__6227__auto___15358 = G__15359;
continue;
} else {
}
break;
}

var G__15289 = args15287.length;
switch (G__15289) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15287.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___15361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___15361,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___15361,out){
return (function (state_15327){
var state_val_15328 = (state_15327[(1)]);
if((state_val_15328 === (7))){
var inst_15323 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15329_15362 = state_15327__$1;
(statearr_15329_15362[(2)] = inst_15323);

(statearr_15329_15362[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (1))){
var inst_15290 = (new Array(n));
var inst_15291 = inst_15290;
var inst_15292 = (0);
var state_15327__$1 = (function (){var statearr_15330 = state_15327;
(statearr_15330[(7)] = inst_15291);

(statearr_15330[(8)] = inst_15292);

return statearr_15330;
})();
var statearr_15331_15363 = state_15327__$1;
(statearr_15331_15363[(2)] = null);

(statearr_15331_15363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (4))){
var inst_15295 = (state_15327[(9)]);
var inst_15295__$1 = (state_15327[(2)]);
var inst_15296 = (inst_15295__$1 == null);
var inst_15297 = cljs.core.not(inst_15296);
var state_15327__$1 = (function (){var statearr_15332 = state_15327;
(statearr_15332[(9)] = inst_15295__$1);

return statearr_15332;
})();
if(inst_15297){
var statearr_15333_15364 = state_15327__$1;
(statearr_15333_15364[(1)] = (5));

} else {
var statearr_15334_15365 = state_15327__$1;
(statearr_15334_15365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (15))){
var inst_15317 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15335_15366 = state_15327__$1;
(statearr_15335_15366[(2)] = inst_15317);

(statearr_15335_15366[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (13))){
var state_15327__$1 = state_15327;
var statearr_15336_15367 = state_15327__$1;
(statearr_15336_15367[(2)] = null);

(statearr_15336_15367[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (6))){
var inst_15292 = (state_15327[(8)]);
var inst_15313 = (inst_15292 > (0));
var state_15327__$1 = state_15327;
if(cljs.core.truth_(inst_15313)){
var statearr_15337_15368 = state_15327__$1;
(statearr_15337_15368[(1)] = (12));

} else {
var statearr_15338_15369 = state_15327__$1;
(statearr_15338_15369[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (3))){
var inst_15325 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15327__$1,inst_15325);
} else {
if((state_val_15328 === (12))){
var inst_15291 = (state_15327[(7)]);
var inst_15315 = cljs.core.vec(inst_15291);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(15),out,inst_15315);
} else {
if((state_val_15328 === (2))){
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15327__$1,(4),ch);
} else {
if((state_val_15328 === (11))){
var inst_15307 = (state_15327[(2)]);
var inst_15308 = (new Array(n));
var inst_15291 = inst_15308;
var inst_15292 = (0);
var state_15327__$1 = (function (){var statearr_15339 = state_15327;
(statearr_15339[(7)] = inst_15291);

(statearr_15339[(10)] = inst_15307);

(statearr_15339[(8)] = inst_15292);

return statearr_15339;
})();
var statearr_15340_15370 = state_15327__$1;
(statearr_15340_15370[(2)] = null);

(statearr_15340_15370[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (9))){
var inst_15291 = (state_15327[(7)]);
var inst_15305 = cljs.core.vec(inst_15291);
var state_15327__$1 = state_15327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15327__$1,(11),out,inst_15305);
} else {
if((state_val_15328 === (5))){
var inst_15291 = (state_15327[(7)]);
var inst_15300 = (state_15327[(11)]);
var inst_15292 = (state_15327[(8)]);
var inst_15295 = (state_15327[(9)]);
var inst_15299 = (inst_15291[inst_15292] = inst_15295);
var inst_15300__$1 = (inst_15292 + (1));
var inst_15301 = (inst_15300__$1 < n);
var state_15327__$1 = (function (){var statearr_15341 = state_15327;
(statearr_15341[(12)] = inst_15299);

(statearr_15341[(11)] = inst_15300__$1);

return statearr_15341;
})();
if(cljs.core.truth_(inst_15301)){
var statearr_15342_15371 = state_15327__$1;
(statearr_15342_15371[(1)] = (8));

} else {
var statearr_15343_15372 = state_15327__$1;
(statearr_15343_15372[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (14))){
var inst_15320 = (state_15327[(2)]);
var inst_15321 = cljs.core.async.close_BANG_(out);
var state_15327__$1 = (function (){var statearr_15345 = state_15327;
(statearr_15345[(13)] = inst_15320);

return statearr_15345;
})();
var statearr_15346_15373 = state_15327__$1;
(statearr_15346_15373[(2)] = inst_15321);

(statearr_15346_15373[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (10))){
var inst_15311 = (state_15327[(2)]);
var state_15327__$1 = state_15327;
var statearr_15347_15374 = state_15327__$1;
(statearr_15347_15374[(2)] = inst_15311);

(statearr_15347_15374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15328 === (8))){
var inst_15291 = (state_15327[(7)]);
var inst_15300 = (state_15327[(11)]);
var tmp15344 = inst_15291;
var inst_15291__$1 = tmp15344;
var inst_15292 = inst_15300;
var state_15327__$1 = (function (){var statearr_15348 = state_15327;
(statearr_15348[(7)] = inst_15291__$1);

(statearr_15348[(8)] = inst_15292);

return statearr_15348;
})();
var statearr_15349_15375 = state_15327__$1;
(statearr_15349_15375[(2)] = null);

(statearr_15349_15375[(1)] = (2));


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
}
}
});})(c__12674__auto___15361,out))
;
return ((function (switch__12560__auto__,c__12674__auto___15361,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_15353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15353[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_15353[(1)] = (1));

return statearr_15353;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_15327){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15327);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15354){if((e15354 instanceof Object)){
var ex__12564__auto__ = e15354;
var statearr_15355_15376 = state_15327;
(statearr_15355_15376[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15327);

return cljs.core.cst$kw$recur;
} else {
throw e15354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15377 = state_15327;
state_15327 = G__15377;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_15327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_15327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___15361,out))
})();
var state__12676__auto__ = (function (){var statearr_15356 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___15361);

return statearr_15356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___15361,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15378 = [];
var len__6226__auto___15452 = arguments.length;
var i__6227__auto___15453 = (0);
while(true){
if((i__6227__auto___15453 < len__6226__auto___15452)){
args15378.push((arguments[i__6227__auto___15453]));

var G__15454 = (i__6227__auto___15453 + (1));
i__6227__auto___15453 = G__15454;
continue;
} else {
}
break;
}

var G__15380 = args15378.length;
switch (G__15380) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15378.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__12674__auto___15456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__12674__auto___15456,out){
return (function (){
var f__12675__auto__ = (function (){var switch__12560__auto__ = ((function (c__12674__auto___15456,out){
return (function (state_15422){
var state_val_15423 = (state_15422[(1)]);
if((state_val_15423 === (7))){
var inst_15418 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15424_15457 = state_15422__$1;
(statearr_15424_15457[(2)] = inst_15418);

(statearr_15424_15457[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (1))){
var inst_15381 = [];
var inst_15382 = inst_15381;
var inst_15383 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_15422__$1 = (function (){var statearr_15425 = state_15422;
(statearr_15425[(7)] = inst_15383);

(statearr_15425[(8)] = inst_15382);

return statearr_15425;
})();
var statearr_15426_15458 = state_15422__$1;
(statearr_15426_15458[(2)] = null);

(statearr_15426_15458[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (4))){
var inst_15386 = (state_15422[(9)]);
var inst_15386__$1 = (state_15422[(2)]);
var inst_15387 = (inst_15386__$1 == null);
var inst_15388 = cljs.core.not(inst_15387);
var state_15422__$1 = (function (){var statearr_15427 = state_15422;
(statearr_15427[(9)] = inst_15386__$1);

return statearr_15427;
})();
if(inst_15388){
var statearr_15428_15459 = state_15422__$1;
(statearr_15428_15459[(1)] = (5));

} else {
var statearr_15429_15460 = state_15422__$1;
(statearr_15429_15460[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (15))){
var inst_15412 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15430_15461 = state_15422__$1;
(statearr_15430_15461[(2)] = inst_15412);

(statearr_15430_15461[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (13))){
var state_15422__$1 = state_15422;
var statearr_15431_15462 = state_15422__$1;
(statearr_15431_15462[(2)] = null);

(statearr_15431_15462[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (6))){
var inst_15382 = (state_15422[(8)]);
var inst_15407 = inst_15382.length;
var inst_15408 = (inst_15407 > (0));
var state_15422__$1 = state_15422;
if(cljs.core.truth_(inst_15408)){
var statearr_15432_15463 = state_15422__$1;
(statearr_15432_15463[(1)] = (12));

} else {
var statearr_15433_15464 = state_15422__$1;
(statearr_15433_15464[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (3))){
var inst_15420 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15422__$1,inst_15420);
} else {
if((state_val_15423 === (12))){
var inst_15382 = (state_15422[(8)]);
var inst_15410 = cljs.core.vec(inst_15382);
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15422__$1,(15),out,inst_15410);
} else {
if((state_val_15423 === (2))){
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15422__$1,(4),ch);
} else {
if((state_val_15423 === (11))){
var inst_15386 = (state_15422[(9)]);
var inst_15390 = (state_15422[(10)]);
var inst_15400 = (state_15422[(2)]);
var inst_15401 = [];
var inst_15402 = inst_15401.push(inst_15386);
var inst_15382 = inst_15401;
var inst_15383 = inst_15390;
var state_15422__$1 = (function (){var statearr_15434 = state_15422;
(statearr_15434[(7)] = inst_15383);

(statearr_15434[(11)] = inst_15400);

(statearr_15434[(8)] = inst_15382);

(statearr_15434[(12)] = inst_15402);

return statearr_15434;
})();
var statearr_15435_15465 = state_15422__$1;
(statearr_15435_15465[(2)] = null);

(statearr_15435_15465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (9))){
var inst_15382 = (state_15422[(8)]);
var inst_15398 = cljs.core.vec(inst_15382);
var state_15422__$1 = state_15422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15422__$1,(11),out,inst_15398);
} else {
if((state_val_15423 === (5))){
var inst_15386 = (state_15422[(9)]);
var inst_15383 = (state_15422[(7)]);
var inst_15390 = (state_15422[(10)]);
var inst_15390__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15386) : f.call(null,inst_15386));
var inst_15391 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15390__$1,inst_15383);
var inst_15392 = cljs.core.keyword_identical_QMARK_(inst_15383,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_15393 = (inst_15391) || (inst_15392);
var state_15422__$1 = (function (){var statearr_15436 = state_15422;
(statearr_15436[(10)] = inst_15390__$1);

return statearr_15436;
})();
if(cljs.core.truth_(inst_15393)){
var statearr_15437_15466 = state_15422__$1;
(statearr_15437_15466[(1)] = (8));

} else {
var statearr_15438_15467 = state_15422__$1;
(statearr_15438_15467[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (14))){
var inst_15415 = (state_15422[(2)]);
var inst_15416 = cljs.core.async.close_BANG_(out);
var state_15422__$1 = (function (){var statearr_15440 = state_15422;
(statearr_15440[(13)] = inst_15415);

return statearr_15440;
})();
var statearr_15441_15468 = state_15422__$1;
(statearr_15441_15468[(2)] = inst_15416);

(statearr_15441_15468[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (10))){
var inst_15405 = (state_15422[(2)]);
var state_15422__$1 = state_15422;
var statearr_15442_15469 = state_15422__$1;
(statearr_15442_15469[(2)] = inst_15405);

(statearr_15442_15469[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15423 === (8))){
var inst_15386 = (state_15422[(9)]);
var inst_15390 = (state_15422[(10)]);
var inst_15382 = (state_15422[(8)]);
var inst_15395 = inst_15382.push(inst_15386);
var tmp15439 = inst_15382;
var inst_15382__$1 = tmp15439;
var inst_15383 = inst_15390;
var state_15422__$1 = (function (){var statearr_15443 = state_15422;
(statearr_15443[(7)] = inst_15383);

(statearr_15443[(14)] = inst_15395);

(statearr_15443[(8)] = inst_15382__$1);

return statearr_15443;
})();
var statearr_15444_15470 = state_15422__$1;
(statearr_15444_15470[(2)] = null);

(statearr_15444_15470[(1)] = (2));


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
}
}
});})(c__12674__auto___15456,out))
;
return ((function (switch__12560__auto__,c__12674__auto___15456,out){
return (function() {
var cljs$core$async$state_machine__12561__auto__ = null;
var cljs$core$async$state_machine__12561__auto____0 = (function (){
var statearr_15448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15448[(0)] = cljs$core$async$state_machine__12561__auto__);

(statearr_15448[(1)] = (1));

return statearr_15448;
});
var cljs$core$async$state_machine__12561__auto____1 = (function (state_15422){
while(true){
var ret_value__12562__auto__ = (function (){try{while(true){
var result__12563__auto__ = switch__12560__auto__(state_15422);
if(cljs.core.keyword_identical_QMARK_(result__12563__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__12563__auto__;
}
break;
}
}catch (e15449){if((e15449 instanceof Object)){
var ex__12564__auto__ = e15449;
var statearr_15450_15471 = state_15422;
(statearr_15450_15471[(5)] = ex__12564__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15422);

return cljs.core.cst$kw$recur;
} else {
throw e15449;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12562__auto__,cljs.core.cst$kw$recur)){
var G__15472 = state_15422;
state_15422 = G__15472;
continue;
} else {
return ret_value__12562__auto__;
}
break;
}
});
cljs$core$async$state_machine__12561__auto__ = function(state_15422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12561__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12561__auto____1.call(this,state_15422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12561__auto____0;
cljs$core$async$state_machine__12561__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12561__auto____1;
return cljs$core$async$state_machine__12561__auto__;
})()
;})(switch__12560__auto__,c__12674__auto___15456,out))
})();
var state__12676__auto__ = (function (){var statearr_15451 = (f__12675__auto__.cljs$core$IFn$_invoke$arity$0 ? f__12675__auto__.cljs$core$IFn$_invoke$arity$0() : f__12675__auto__.call(null));
(statearr_15451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12674__auto___15456);

return statearr_15451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12676__auto__);
});})(c__12674__auto___15456,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
