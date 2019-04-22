// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__9407 = arguments.length;
switch (G__9407) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9408 = (function (f,blockable,meta9409){
this.f = f;
this.blockable = blockable;
this.meta9409 = meta9409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9410,meta9409__$1){
var self__ = this;
var _9410__$1 = this;
return (new cljs.core.async.t_cljs$core$async9408(self__.f,self__.blockable,meta9409__$1));
});

cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9410){
var self__ = this;
var _9410__$1 = this;
return self__.meta9409;
});

cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9408.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta9409], null);
});

cljs.core.async.t_cljs$core$async9408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9408";

cljs.core.async.t_cljs$core$async9408.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9408");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9408.
 */
cljs.core.async.__GT_t_cljs$core$async9408 = (function cljs$core$async$__GT_t_cljs$core$async9408(f__$1,blockable__$1,meta9409){
return (new cljs.core.async.t_cljs$core$async9408(f__$1,blockable__$1,meta9409));
});

}

return (new cljs.core.async.t_cljs$core$async9408(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__9414 = arguments.length;
switch (G__9414) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__9417 = arguments.length;
switch (G__9417) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__9420 = arguments.length;
switch (G__9420) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_9422 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9422) : fn1.call(null,val_9422));
} else {
cljs.core.async.impl.dispatch.run(((function (val_9422,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_9422) : fn1.call(null,val_9422));
});})(val_9422,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__9424 = arguments.length;
switch (G__9424) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___9426 = n;
var x_9427 = (0);
while(true){
if((x_9427 < n__4607__auto___9426)){
(a[x_9427] = (0));

var G__9428 = (x_9427 + (1));
x_9427 = G__9428;
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

var G__9429 = (i + (1));
i = G__9429;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9430 = (function (flag,meta9431){
this.flag = flag;
this.meta9431 = meta9431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9432,meta9431__$1){
var self__ = this;
var _9432__$1 = this;
return (new cljs.core.async.t_cljs$core$async9430(self__.flag,meta9431__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9432){
var self__ = this;
var _9432__$1 = this;
return self__.meta9431;
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta9431], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9430";

cljs.core.async.t_cljs$core$async9430.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9430");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9430.
 */
cljs.core.async.__GT_t_cljs$core$async9430 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9430(flag__$1,meta9431){
return (new cljs.core.async.t_cljs$core$async9430(flag__$1,meta9431));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9430(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9433 = (function (flag,cb,meta9434){
this.flag = flag;
this.cb = cb;
this.meta9434 = meta9434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9435,meta9434__$1){
var self__ = this;
var _9435__$1 = this;
return (new cljs.core.async.t_cljs$core$async9433(self__.flag,self__.cb,meta9434__$1));
});

cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9435){
var self__ = this;
var _9435__$1 = this;
return self__.meta9434;
});

cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta9434], null);
});

cljs.core.async.t_cljs$core$async9433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9433";

cljs.core.async.t_cljs$core$async9433.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9433");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9433.
 */
cljs.core.async.__GT_t_cljs$core$async9433 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9433(flag__$1,cb__$1,meta9434){
return (new cljs.core.async.t_cljs$core$async9433(flag__$1,cb__$1,meta9434));
});

}

return (new cljs.core.async.t_cljs$core$async9433(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9436_SHARP_){
var G__9438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9436_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9438) : fret.call(null,G__9438));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9437_SHARP_){
var G__9439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9437_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__9439) : fret.call(null,G__9439));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9440 = (i + (1));
i = G__9440;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___9446 = arguments.length;
var i__4731__auto___9447 = (0);
while(true){
if((i__4731__auto___9447 < len__4730__auto___9446)){
args__4736__auto__.push((arguments[i__4731__auto___9447]));

var G__9448 = (i__4731__auto___9447 + (1));
i__4731__auto___9447 = G__9448;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9443){
var map__9444 = p__9443;
var map__9444__$1 = (((((!((map__9444 == null))))?(((((map__9444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9444):map__9444);
var opts = map__9444__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9441){
var G__9442 = cljs.core.first(seq9441);
var seq9441__$1 = cljs.core.next(seq9441);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9442,seq9441__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
return cljs.core.deref(ret);
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
var G__9450 = arguments.length;
switch (G__9450) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9347__auto___9496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___9496){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___9496){
return (function (state_9474){
var state_val_9475 = (state_9474[(1)]);
if((state_val_9475 === (7))){
var inst_9470 = (state_9474[(2)]);
var state_9474__$1 = state_9474;
var statearr_9476_9497 = state_9474__$1;
(statearr_9476_9497[(2)] = inst_9470);

(statearr_9476_9497[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (1))){
var state_9474__$1 = state_9474;
var statearr_9477_9498 = state_9474__$1;
(statearr_9477_9498[(2)] = null);

(statearr_9477_9498[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (4))){
var inst_9453 = (state_9474[(7)]);
var inst_9453__$1 = (state_9474[(2)]);
var inst_9454 = (inst_9453__$1 == null);
var state_9474__$1 = (function (){var statearr_9478 = state_9474;
(statearr_9478[(7)] = inst_9453__$1);

return statearr_9478;
})();
if(cljs.core.truth_(inst_9454)){
var statearr_9479_9499 = state_9474__$1;
(statearr_9479_9499[(1)] = (5));

} else {
var statearr_9480_9500 = state_9474__$1;
(statearr_9480_9500[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (13))){
var state_9474__$1 = state_9474;
var statearr_9481_9501 = state_9474__$1;
(statearr_9481_9501[(2)] = null);

(statearr_9481_9501[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (6))){
var inst_9453 = (state_9474[(7)]);
var state_9474__$1 = state_9474;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9474__$1,(11),to,inst_9453);
} else {
if((state_val_9475 === (3))){
var inst_9472 = (state_9474[(2)]);
var state_9474__$1 = state_9474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9474__$1,inst_9472);
} else {
if((state_val_9475 === (12))){
var state_9474__$1 = state_9474;
var statearr_9482_9502 = state_9474__$1;
(statearr_9482_9502[(2)] = null);

(statearr_9482_9502[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (2))){
var state_9474__$1 = state_9474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9474__$1,(4),from);
} else {
if((state_val_9475 === (11))){
var inst_9463 = (state_9474[(2)]);
var state_9474__$1 = state_9474;
if(cljs.core.truth_(inst_9463)){
var statearr_9483_9503 = state_9474__$1;
(statearr_9483_9503[(1)] = (12));

} else {
var statearr_9484_9504 = state_9474__$1;
(statearr_9484_9504[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (9))){
var state_9474__$1 = state_9474;
var statearr_9485_9505 = state_9474__$1;
(statearr_9485_9505[(2)] = null);

(statearr_9485_9505[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (5))){
var state_9474__$1 = state_9474;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9486_9506 = state_9474__$1;
(statearr_9486_9506[(1)] = (8));

} else {
var statearr_9487_9507 = state_9474__$1;
(statearr_9487_9507[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (14))){
var inst_9468 = (state_9474[(2)]);
var state_9474__$1 = state_9474;
var statearr_9488_9508 = state_9474__$1;
(statearr_9488_9508[(2)] = inst_9468);

(statearr_9488_9508[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (10))){
var inst_9460 = (state_9474[(2)]);
var state_9474__$1 = state_9474;
var statearr_9489_9509 = state_9474__$1;
(statearr_9489_9509[(2)] = inst_9460);

(statearr_9489_9509[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9475 === (8))){
var inst_9457 = cljs.core.async.close_BANG_(to);
var state_9474__$1 = state_9474;
var statearr_9490_9510 = state_9474__$1;
(statearr_9490_9510[(2)] = inst_9457);

(statearr_9490_9510[(1)] = (10));


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
});})(c__9347__auto___9496))
;
return ((function (switch__9240__auto__,c__9347__auto___9496){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_9491 = [null,null,null,null,null,null,null,null];
(statearr_9491[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_9491[(1)] = (1));

return statearr_9491;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_9474){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9474);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9492){if((e9492 instanceof Object)){
var ex__9244__auto__ = e9492;
var statearr_9493_9511 = state_9474;
(statearr_9493_9511[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9474);

return cljs.core.cst$kw$recur;
} else {
throw e9492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9512 = state_9474;
state_9474 = G__9512;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_9474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_9474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___9496))
})();
var state__9349__auto__ = (function (){var statearr_9494 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9494[(6)] = c__9347__auto___9496);

return statearr_9494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___9496))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__9513){
var vec__9514 = p__9513;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9514,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9514,(1),null);
var job = vec__9514;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__9347__auto___9685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results){
return (function (state_9521){
var state_val_9522 = (state_9521[(1)]);
if((state_val_9522 === (1))){
var state_9521__$1 = state_9521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9521__$1,(2),res,v);
} else {
if((state_val_9522 === (2))){
var inst_9518 = (state_9521[(2)]);
var inst_9519 = cljs.core.async.close_BANG_(res);
var state_9521__$1 = (function (){var statearr_9523 = state_9521;
(statearr_9523[(7)] = inst_9518);

return statearr_9523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_9521__$1,inst_9519);
} else {
return null;
}
}
});})(c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results))
;
return ((function (switch__9240__auto__,c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_9524 = [null,null,null,null,null,null,null,null];
(statearr_9524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__);

(statearr_9524[(1)] = (1));

return statearr_9524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1 = (function (state_9521){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9521);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9525){if((e9525 instanceof Object)){
var ex__9244__auto__ = e9525;
var statearr_9526_9686 = state_9521;
(statearr_9526_9686[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9521);

return cljs.core.cst$kw$recur;
} else {
throw e9525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9687 = state_9521;
state_9521 = G__9687;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = function(state_9521){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1.call(this,state_9521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results))
})();
var state__9349__auto__ = (function (){var statearr_9527 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9527[(6)] = c__9347__auto___9685);

return statearr_9527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___9685,res,vec__9514,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9528){
var vec__9529 = p__9528;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9529,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9529,(1),null);
var job = vec__9529;
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
var n__4607__auto___9688 = n;
var __9689 = (0);
while(true){
if((__9689 < n__4607__auto___9688)){
var G__9532_9690 = type;
var G__9532_9691__$1 = (((G__9532_9690 instanceof cljs.core.Keyword))?G__9532_9690.fqn:null);
switch (G__9532_9691__$1) {
case "compute":
var c__9347__auto___9693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9689,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (__9689,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function (state_9545){
var state_val_9546 = (state_9545[(1)]);
if((state_val_9546 === (1))){
var state_9545__$1 = state_9545;
var statearr_9547_9694 = state_9545__$1;
(statearr_9547_9694[(2)] = null);

(statearr_9547_9694[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9546 === (2))){
var state_9545__$1 = state_9545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9545__$1,(4),jobs);
} else {
if((state_val_9546 === (3))){
var inst_9543 = (state_9545[(2)]);
var state_9545__$1 = state_9545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9545__$1,inst_9543);
} else {
if((state_val_9546 === (4))){
var inst_9535 = (state_9545[(2)]);
var inst_9536 = process(inst_9535);
var state_9545__$1 = state_9545;
if(cljs.core.truth_(inst_9536)){
var statearr_9548_9695 = state_9545__$1;
(statearr_9548_9695[(1)] = (5));

} else {
var statearr_9549_9696 = state_9545__$1;
(statearr_9549_9696[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9546 === (5))){
var state_9545__$1 = state_9545;
var statearr_9550_9697 = state_9545__$1;
(statearr_9550_9697[(2)] = null);

(statearr_9550_9697[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9546 === (6))){
var state_9545__$1 = state_9545;
var statearr_9551_9698 = state_9545__$1;
(statearr_9551_9698[(2)] = null);

(statearr_9551_9698[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9546 === (7))){
var inst_9541 = (state_9545[(2)]);
var state_9545__$1 = state_9545;
var statearr_9552_9699 = state_9545__$1;
(statearr_9552_9699[(2)] = inst_9541);

(statearr_9552_9699[(1)] = (3));


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
});})(__9689,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
;
return ((function (__9689,switch__9240__auto__,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_9553 = [null,null,null,null,null,null,null];
(statearr_9553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__);

(statearr_9553[(1)] = (1));

return statearr_9553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1 = (function (state_9545){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9545);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9554){if((e9554 instanceof Object)){
var ex__9244__auto__ = e9554;
var statearr_9555_9700 = state_9545;
(statearr_9555_9700[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9545);

return cljs.core.cst$kw$recur;
} else {
throw e9554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9701 = state_9545;
state_9545 = G__9701;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = function(state_9545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1.call(this,state_9545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__;
})()
;})(__9689,switch__9240__auto__,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
})();
var state__9349__auto__ = (function (){var statearr_9556 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9556[(6)] = c__9347__auto___9693);

return statearr_9556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(__9689,c__9347__auto___9693,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
);


break;
case "async":
var c__9347__auto___9702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__9689,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (__9689,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function (state_9569){
var state_val_9570 = (state_9569[(1)]);
if((state_val_9570 === (1))){
var state_9569__$1 = state_9569;
var statearr_9571_9703 = state_9569__$1;
(statearr_9571_9703[(2)] = null);

(statearr_9571_9703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9570 === (2))){
var state_9569__$1 = state_9569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9569__$1,(4),jobs);
} else {
if((state_val_9570 === (3))){
var inst_9567 = (state_9569[(2)]);
var state_9569__$1 = state_9569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9569__$1,inst_9567);
} else {
if((state_val_9570 === (4))){
var inst_9559 = (state_9569[(2)]);
var inst_9560 = async(inst_9559);
var state_9569__$1 = state_9569;
if(cljs.core.truth_(inst_9560)){
var statearr_9572_9704 = state_9569__$1;
(statearr_9572_9704[(1)] = (5));

} else {
var statearr_9573_9705 = state_9569__$1;
(statearr_9573_9705[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9570 === (5))){
var state_9569__$1 = state_9569;
var statearr_9574_9706 = state_9569__$1;
(statearr_9574_9706[(2)] = null);

(statearr_9574_9706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9570 === (6))){
var state_9569__$1 = state_9569;
var statearr_9575_9707 = state_9569__$1;
(statearr_9575_9707[(2)] = null);

(statearr_9575_9707[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9570 === (7))){
var inst_9565 = (state_9569[(2)]);
var state_9569__$1 = state_9569;
var statearr_9576_9708 = state_9569__$1;
(statearr_9576_9708[(2)] = inst_9565);

(statearr_9576_9708[(1)] = (3));


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
});})(__9689,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
;
return ((function (__9689,switch__9240__auto__,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_9577 = [null,null,null,null,null,null,null];
(statearr_9577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__);

(statearr_9577[(1)] = (1));

return statearr_9577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1 = (function (state_9569){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9569);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9578){if((e9578 instanceof Object)){
var ex__9244__auto__ = e9578;
var statearr_9579_9709 = state_9569;
(statearr_9579_9709[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9569);

return cljs.core.cst$kw$recur;
} else {
throw e9578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9710 = state_9569;
state_9569 = G__9710;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = function(state_9569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1.call(this,state_9569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__;
})()
;})(__9689,switch__9240__auto__,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
})();
var state__9349__auto__ = (function (){var statearr_9580 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9580[(6)] = c__9347__auto___9702);

return statearr_9580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(__9689,c__9347__auto___9702,G__9532_9690,G__9532_9691__$1,n__4607__auto___9688,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9532_9691__$1)].join('')));

}

var G__9711 = (__9689 + (1));
__9689 = G__9711;
continue;
} else {
}
break;
}

var c__9347__auto___9712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___9712,jobs,results,process,async){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___9712,jobs,results,process,async){
return (function (state_9602){
var state_val_9603 = (state_9602[(1)]);
if((state_val_9603 === (7))){
var inst_9598 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
var statearr_9604_9713 = state_9602__$1;
(statearr_9604_9713[(2)] = inst_9598);

(statearr_9604_9713[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9603 === (1))){
var state_9602__$1 = state_9602;
var statearr_9605_9714 = state_9602__$1;
(statearr_9605_9714[(2)] = null);

(statearr_9605_9714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9603 === (4))){
var inst_9583 = (state_9602[(7)]);
var inst_9583__$1 = (state_9602[(2)]);
var inst_9584 = (inst_9583__$1 == null);
var state_9602__$1 = (function (){var statearr_9606 = state_9602;
(statearr_9606[(7)] = inst_9583__$1);

return statearr_9606;
})();
if(cljs.core.truth_(inst_9584)){
var statearr_9607_9715 = state_9602__$1;
(statearr_9607_9715[(1)] = (5));

} else {
var statearr_9608_9716 = state_9602__$1;
(statearr_9608_9716[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9603 === (6))){
var inst_9588 = (state_9602[(8)]);
var inst_9583 = (state_9602[(7)]);
var inst_9588__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_9589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9590 = [inst_9583,inst_9588__$1];
var inst_9591 = (new cljs.core.PersistentVector(null,2,(5),inst_9589,inst_9590,null));
var state_9602__$1 = (function (){var statearr_9609 = state_9602;
(statearr_9609[(8)] = inst_9588__$1);

return statearr_9609;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9602__$1,(8),jobs,inst_9591);
} else {
if((state_val_9603 === (3))){
var inst_9600 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9602__$1,inst_9600);
} else {
if((state_val_9603 === (2))){
var state_9602__$1 = state_9602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9602__$1,(4),from);
} else {
if((state_val_9603 === (9))){
var inst_9595 = (state_9602[(2)]);
var state_9602__$1 = (function (){var statearr_9610 = state_9602;
(statearr_9610[(9)] = inst_9595);

return statearr_9610;
})();
var statearr_9611_9717 = state_9602__$1;
(statearr_9611_9717[(2)] = null);

(statearr_9611_9717[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9603 === (5))){
var inst_9586 = cljs.core.async.close_BANG_(jobs);
var state_9602__$1 = state_9602;
var statearr_9612_9718 = state_9602__$1;
(statearr_9612_9718[(2)] = inst_9586);

(statearr_9612_9718[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9603 === (8))){
var inst_9588 = (state_9602[(8)]);
var inst_9593 = (state_9602[(2)]);
var state_9602__$1 = (function (){var statearr_9613 = state_9602;
(statearr_9613[(10)] = inst_9593);

return statearr_9613;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9602__$1,(9),results,inst_9588);
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
});})(c__9347__auto___9712,jobs,results,process,async))
;
return ((function (switch__9240__auto__,c__9347__auto___9712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_9614 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__);

(statearr_9614[(1)] = (1));

return statearr_9614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1 = (function (state_9602){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9602);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9615){if((e9615 instanceof Object)){
var ex__9244__auto__ = e9615;
var statearr_9616_9719 = state_9602;
(statearr_9616_9719[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9602);

return cljs.core.cst$kw$recur;
} else {
throw e9615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9720 = state_9602;
state_9602 = G__9720;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = function(state_9602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1.call(this,state_9602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___9712,jobs,results,process,async))
})();
var state__9349__auto__ = (function (){var statearr_9617 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9617[(6)] = c__9347__auto___9712);

return statearr_9617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___9712,jobs,results,process,async))
);


var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__,jobs,results,process,async){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__,jobs,results,process,async){
return (function (state_9655){
var state_val_9656 = (state_9655[(1)]);
if((state_val_9656 === (7))){
var inst_9651 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
var statearr_9657_9721 = state_9655__$1;
(statearr_9657_9721[(2)] = inst_9651);

(statearr_9657_9721[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (20))){
var state_9655__$1 = state_9655;
var statearr_9658_9722 = state_9655__$1;
(statearr_9658_9722[(2)] = null);

(statearr_9658_9722[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (1))){
var state_9655__$1 = state_9655;
var statearr_9659_9723 = state_9655__$1;
(statearr_9659_9723[(2)] = null);

(statearr_9659_9723[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (4))){
var inst_9620 = (state_9655[(7)]);
var inst_9620__$1 = (state_9655[(2)]);
var inst_9621 = (inst_9620__$1 == null);
var state_9655__$1 = (function (){var statearr_9660 = state_9655;
(statearr_9660[(7)] = inst_9620__$1);

return statearr_9660;
})();
if(cljs.core.truth_(inst_9621)){
var statearr_9661_9724 = state_9655__$1;
(statearr_9661_9724[(1)] = (5));

} else {
var statearr_9662_9725 = state_9655__$1;
(statearr_9662_9725[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (15))){
var inst_9633 = (state_9655[(8)]);
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9655__$1,(18),to,inst_9633);
} else {
if((state_val_9656 === (21))){
var inst_9646 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
var statearr_9663_9726 = state_9655__$1;
(statearr_9663_9726[(2)] = inst_9646);

(statearr_9663_9726[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (13))){
var inst_9648 = (state_9655[(2)]);
var state_9655__$1 = (function (){var statearr_9664 = state_9655;
(statearr_9664[(9)] = inst_9648);

return statearr_9664;
})();
var statearr_9665_9727 = state_9655__$1;
(statearr_9665_9727[(2)] = null);

(statearr_9665_9727[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (6))){
var inst_9620 = (state_9655[(7)]);
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9655__$1,(11),inst_9620);
} else {
if((state_val_9656 === (17))){
var inst_9641 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
if(cljs.core.truth_(inst_9641)){
var statearr_9666_9728 = state_9655__$1;
(statearr_9666_9728[(1)] = (19));

} else {
var statearr_9667_9729 = state_9655__$1;
(statearr_9667_9729[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (3))){
var inst_9653 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9655__$1,inst_9653);
} else {
if((state_val_9656 === (12))){
var inst_9630 = (state_9655[(10)]);
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9655__$1,(14),inst_9630);
} else {
if((state_val_9656 === (2))){
var state_9655__$1 = state_9655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9655__$1,(4),results);
} else {
if((state_val_9656 === (19))){
var state_9655__$1 = state_9655;
var statearr_9668_9730 = state_9655__$1;
(statearr_9668_9730[(2)] = null);

(statearr_9668_9730[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (11))){
var inst_9630 = (state_9655[(2)]);
var state_9655__$1 = (function (){var statearr_9669 = state_9655;
(statearr_9669[(10)] = inst_9630);

return statearr_9669;
})();
var statearr_9670_9731 = state_9655__$1;
(statearr_9670_9731[(2)] = null);

(statearr_9670_9731[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (9))){
var state_9655__$1 = state_9655;
var statearr_9671_9732 = state_9655__$1;
(statearr_9671_9732[(2)] = null);

(statearr_9671_9732[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (5))){
var state_9655__$1 = state_9655;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9672_9733 = state_9655__$1;
(statearr_9672_9733[(1)] = (8));

} else {
var statearr_9673_9734 = state_9655__$1;
(statearr_9673_9734[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (14))){
var inst_9635 = (state_9655[(11)]);
var inst_9633 = (state_9655[(8)]);
var inst_9633__$1 = (state_9655[(2)]);
var inst_9634 = (inst_9633__$1 == null);
var inst_9635__$1 = cljs.core.not(inst_9634);
var state_9655__$1 = (function (){var statearr_9674 = state_9655;
(statearr_9674[(11)] = inst_9635__$1);

(statearr_9674[(8)] = inst_9633__$1);

return statearr_9674;
})();
if(inst_9635__$1){
var statearr_9675_9735 = state_9655__$1;
(statearr_9675_9735[(1)] = (15));

} else {
var statearr_9676_9736 = state_9655__$1;
(statearr_9676_9736[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (16))){
var inst_9635 = (state_9655[(11)]);
var state_9655__$1 = state_9655;
var statearr_9677_9737 = state_9655__$1;
(statearr_9677_9737[(2)] = inst_9635);

(statearr_9677_9737[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (10))){
var inst_9627 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
var statearr_9678_9738 = state_9655__$1;
(statearr_9678_9738[(2)] = inst_9627);

(statearr_9678_9738[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (18))){
var inst_9638 = (state_9655[(2)]);
var state_9655__$1 = state_9655;
var statearr_9679_9739 = state_9655__$1;
(statearr_9679_9739[(2)] = inst_9638);

(statearr_9679_9739[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9656 === (8))){
var inst_9624 = cljs.core.async.close_BANG_(to);
var state_9655__$1 = state_9655;
var statearr_9680_9740 = state_9655__$1;
(statearr_9680_9740[(2)] = inst_9624);

(statearr_9680_9740[(1)] = (10));


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
});})(c__9347__auto__,jobs,results,process,async))
;
return ((function (switch__9240__auto__,c__9347__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_9681 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9681[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__);

(statearr_9681[(1)] = (1));

return statearr_9681;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1 = (function (state_9655){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9655);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9682){if((e9682 instanceof Object)){
var ex__9244__auto__ = e9682;
var statearr_9683_9741 = state_9655;
(statearr_9683_9741[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9655);

return cljs.core.cst$kw$recur;
} else {
throw e9682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9742 = state_9655;
state_9655 = G__9742;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__ = function(state_9655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1.call(this,state_9655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__,jobs,results,process,async))
})();
var state__9349__auto__ = (function (){var statearr_9684 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9684[(6)] = c__9347__auto__);

return statearr_9684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__,jobs,results,process,async))
);

return c__9347__auto__;
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
var G__9744 = arguments.length;
switch (G__9744) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__9747 = arguments.length;
switch (G__9747) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__9750 = arguments.length;
switch (G__9750) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__9347__auto___9799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___9799,tc,fc){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___9799,tc,fc){
return (function (state_9776){
var state_val_9777 = (state_9776[(1)]);
if((state_val_9777 === (7))){
var inst_9772 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
var statearr_9778_9800 = state_9776__$1;
(statearr_9778_9800[(2)] = inst_9772);

(statearr_9778_9800[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (1))){
var state_9776__$1 = state_9776;
var statearr_9779_9801 = state_9776__$1;
(statearr_9779_9801[(2)] = null);

(statearr_9779_9801[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (4))){
var inst_9753 = (state_9776[(7)]);
var inst_9753__$1 = (state_9776[(2)]);
var inst_9754 = (inst_9753__$1 == null);
var state_9776__$1 = (function (){var statearr_9780 = state_9776;
(statearr_9780[(7)] = inst_9753__$1);

return statearr_9780;
})();
if(cljs.core.truth_(inst_9754)){
var statearr_9781_9802 = state_9776__$1;
(statearr_9781_9802[(1)] = (5));

} else {
var statearr_9782_9803 = state_9776__$1;
(statearr_9782_9803[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (13))){
var state_9776__$1 = state_9776;
var statearr_9783_9804 = state_9776__$1;
(statearr_9783_9804[(2)] = null);

(statearr_9783_9804[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (6))){
var inst_9753 = (state_9776[(7)]);
var inst_9759 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_9753) : p.call(null,inst_9753));
var state_9776__$1 = state_9776;
if(cljs.core.truth_(inst_9759)){
var statearr_9784_9805 = state_9776__$1;
(statearr_9784_9805[(1)] = (9));

} else {
var statearr_9785_9806 = state_9776__$1;
(statearr_9785_9806[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (3))){
var inst_9774 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9776__$1,inst_9774);
} else {
if((state_val_9777 === (12))){
var state_9776__$1 = state_9776;
var statearr_9786_9807 = state_9776__$1;
(statearr_9786_9807[(2)] = null);

(statearr_9786_9807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (2))){
var state_9776__$1 = state_9776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9776__$1,(4),ch);
} else {
if((state_val_9777 === (11))){
var inst_9753 = (state_9776[(7)]);
var inst_9763 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9776__$1,(8),inst_9763,inst_9753);
} else {
if((state_val_9777 === (9))){
var state_9776__$1 = state_9776;
var statearr_9787_9808 = state_9776__$1;
(statearr_9787_9808[(2)] = tc);

(statearr_9787_9808[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (5))){
var inst_9756 = cljs.core.async.close_BANG_(tc);
var inst_9757 = cljs.core.async.close_BANG_(fc);
var state_9776__$1 = (function (){var statearr_9788 = state_9776;
(statearr_9788[(8)] = inst_9756);

return statearr_9788;
})();
var statearr_9789_9809 = state_9776__$1;
(statearr_9789_9809[(2)] = inst_9757);

(statearr_9789_9809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (14))){
var inst_9770 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
var statearr_9790_9810 = state_9776__$1;
(statearr_9790_9810[(2)] = inst_9770);

(statearr_9790_9810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (10))){
var state_9776__$1 = state_9776;
var statearr_9791_9811 = state_9776__$1;
(statearr_9791_9811[(2)] = fc);

(statearr_9791_9811[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9777 === (8))){
var inst_9765 = (state_9776[(2)]);
var state_9776__$1 = state_9776;
if(cljs.core.truth_(inst_9765)){
var statearr_9792_9812 = state_9776__$1;
(statearr_9792_9812[(1)] = (12));

} else {
var statearr_9793_9813 = state_9776__$1;
(statearr_9793_9813[(1)] = (13));

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
});})(c__9347__auto___9799,tc,fc))
;
return ((function (switch__9240__auto__,c__9347__auto___9799,tc,fc){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_9794 = [null,null,null,null,null,null,null,null,null];
(statearr_9794[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_9794[(1)] = (1));

return statearr_9794;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_9776){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9776);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9795){if((e9795 instanceof Object)){
var ex__9244__auto__ = e9795;
var statearr_9796_9814 = state_9776;
(statearr_9796_9814[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9776);

return cljs.core.cst$kw$recur;
} else {
throw e9795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9815 = state_9776;
state_9776 = G__9815;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_9776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_9776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___9799,tc,fc))
})();
var state__9349__auto__ = (function (){var statearr_9797 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9797[(6)] = c__9347__auto___9799);

return statearr_9797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___9799,tc,fc))
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
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__){
return (function (state_9836){
var state_val_9837 = (state_9836[(1)]);
if((state_val_9837 === (7))){
var inst_9832 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
var statearr_9838_9856 = state_9836__$1;
(statearr_9838_9856[(2)] = inst_9832);

(statearr_9838_9856[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (1))){
var inst_9816 = init;
var state_9836__$1 = (function (){var statearr_9839 = state_9836;
(statearr_9839[(7)] = inst_9816);

return statearr_9839;
})();
var statearr_9840_9857 = state_9836__$1;
(statearr_9840_9857[(2)] = null);

(statearr_9840_9857[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (4))){
var inst_9819 = (state_9836[(8)]);
var inst_9819__$1 = (state_9836[(2)]);
var inst_9820 = (inst_9819__$1 == null);
var state_9836__$1 = (function (){var statearr_9841 = state_9836;
(statearr_9841[(8)] = inst_9819__$1);

return statearr_9841;
})();
if(cljs.core.truth_(inst_9820)){
var statearr_9842_9858 = state_9836__$1;
(statearr_9842_9858[(1)] = (5));

} else {
var statearr_9843_9859 = state_9836__$1;
(statearr_9843_9859[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (6))){
var inst_9819 = (state_9836[(8)]);
var inst_9823 = (state_9836[(9)]);
var inst_9816 = (state_9836[(7)]);
var inst_9823__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_9816,inst_9819) : f.call(null,inst_9816,inst_9819));
var inst_9824 = cljs.core.reduced_QMARK_(inst_9823__$1);
var state_9836__$1 = (function (){var statearr_9844 = state_9836;
(statearr_9844[(9)] = inst_9823__$1);

return statearr_9844;
})();
if(inst_9824){
var statearr_9845_9860 = state_9836__$1;
(statearr_9845_9860[(1)] = (8));

} else {
var statearr_9846_9861 = state_9836__$1;
(statearr_9846_9861[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (3))){
var inst_9834 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9836__$1,inst_9834);
} else {
if((state_val_9837 === (2))){
var state_9836__$1 = state_9836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9836__$1,(4),ch);
} else {
if((state_val_9837 === (9))){
var inst_9823 = (state_9836[(9)]);
var inst_9816 = inst_9823;
var state_9836__$1 = (function (){var statearr_9847 = state_9836;
(statearr_9847[(7)] = inst_9816);

return statearr_9847;
})();
var statearr_9848_9862 = state_9836__$1;
(statearr_9848_9862[(2)] = null);

(statearr_9848_9862[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (5))){
var inst_9816 = (state_9836[(7)]);
var state_9836__$1 = state_9836;
var statearr_9849_9863 = state_9836__$1;
(statearr_9849_9863[(2)] = inst_9816);

(statearr_9849_9863[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (10))){
var inst_9830 = (state_9836[(2)]);
var state_9836__$1 = state_9836;
var statearr_9850_9864 = state_9836__$1;
(statearr_9850_9864[(2)] = inst_9830);

(statearr_9850_9864[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9837 === (8))){
var inst_9823 = (state_9836[(9)]);
var inst_9826 = cljs.core.deref(inst_9823);
var state_9836__$1 = state_9836;
var statearr_9851_9865 = state_9836__$1;
(statearr_9851_9865[(2)] = inst_9826);

(statearr_9851_9865[(1)] = (10));


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
});})(c__9347__auto__))
;
return ((function (switch__9240__auto__,c__9347__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9241__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9241__auto____0 = (function (){
var statearr_9852 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9852[(0)] = cljs$core$async$reduce_$_state_machine__9241__auto__);

(statearr_9852[(1)] = (1));

return statearr_9852;
});
var cljs$core$async$reduce_$_state_machine__9241__auto____1 = (function (state_9836){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9836);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9853){if((e9853 instanceof Object)){
var ex__9244__auto__ = e9853;
var statearr_9854_9866 = state_9836;
(statearr_9854_9866[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9836);

return cljs.core.cst$kw$recur;
} else {
throw e9853;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9867 = state_9836;
state_9836 = G__9867;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9241__auto__ = function(state_9836){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9241__auto____1.call(this,state_9836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9241__auto____0;
cljs$core$async$reduce_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9241__auto____1;
return cljs$core$async$reduce_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__))
})();
var state__9349__auto__ = (function (){var statearr_9855 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9855[(6)] = c__9347__auto__);

return statearr_9855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__))
);

return c__9347__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__,f__$1){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__,f__$1){
return (function (state_9873){
var state_val_9874 = (state_9873[(1)]);
if((state_val_9874 === (1))){
var inst_9868 = cljs.core.async.reduce(f__$1,init,ch);
var state_9873__$1 = state_9873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_9873__$1,(2),inst_9868);
} else {
if((state_val_9874 === (2))){
var inst_9870 = (state_9873[(2)]);
var inst_9871 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_9870) : f__$1.call(null,inst_9870));
var state_9873__$1 = state_9873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9873__$1,inst_9871);
} else {
return null;
}
}
});})(c__9347__auto__,f__$1))
;
return ((function (switch__9240__auto__,c__9347__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9241__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9241__auto____0 = (function (){
var statearr_9875 = [null,null,null,null,null,null,null];
(statearr_9875[(0)] = cljs$core$async$transduce_$_state_machine__9241__auto__);

(statearr_9875[(1)] = (1));

return statearr_9875;
});
var cljs$core$async$transduce_$_state_machine__9241__auto____1 = (function (state_9873){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9873);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9876){if((e9876 instanceof Object)){
var ex__9244__auto__ = e9876;
var statearr_9877_9879 = state_9873;
(statearr_9877_9879[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9873);

return cljs.core.cst$kw$recur;
} else {
throw e9876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9880 = state_9873;
state_9873 = G__9880;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9241__auto__ = function(state_9873){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9241__auto____1.call(this,state_9873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9241__auto____0;
cljs$core$async$transduce_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9241__auto____1;
return cljs$core$async$transduce_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__,f__$1))
})();
var state__9349__auto__ = (function (){var statearr_9878 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9878[(6)] = c__9347__auto__);

return statearr_9878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__,f__$1))
);

return c__9347__auto__;
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
var G__9882 = arguments.length;
switch (G__9882) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__){
return (function (state_9907){
var state_val_9908 = (state_9907[(1)]);
if((state_val_9908 === (7))){
var inst_9889 = (state_9907[(2)]);
var state_9907__$1 = state_9907;
var statearr_9909_9930 = state_9907__$1;
(statearr_9909_9930[(2)] = inst_9889);

(statearr_9909_9930[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (1))){
var inst_9883 = cljs.core.seq(coll);
var inst_9884 = inst_9883;
var state_9907__$1 = (function (){var statearr_9910 = state_9907;
(statearr_9910[(7)] = inst_9884);

return statearr_9910;
})();
var statearr_9911_9931 = state_9907__$1;
(statearr_9911_9931[(2)] = null);

(statearr_9911_9931[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (4))){
var inst_9884 = (state_9907[(7)]);
var inst_9887 = cljs.core.first(inst_9884);
var state_9907__$1 = state_9907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_9907__$1,(7),ch,inst_9887);
} else {
if((state_val_9908 === (13))){
var inst_9901 = (state_9907[(2)]);
var state_9907__$1 = state_9907;
var statearr_9912_9932 = state_9907__$1;
(statearr_9912_9932[(2)] = inst_9901);

(statearr_9912_9932[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (6))){
var inst_9892 = (state_9907[(2)]);
var state_9907__$1 = state_9907;
if(cljs.core.truth_(inst_9892)){
var statearr_9913_9933 = state_9907__$1;
(statearr_9913_9933[(1)] = (8));

} else {
var statearr_9914_9934 = state_9907__$1;
(statearr_9914_9934[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (3))){
var inst_9905 = (state_9907[(2)]);
var state_9907__$1 = state_9907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_9907__$1,inst_9905);
} else {
if((state_val_9908 === (12))){
var state_9907__$1 = state_9907;
var statearr_9915_9935 = state_9907__$1;
(statearr_9915_9935[(2)] = null);

(statearr_9915_9935[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (2))){
var inst_9884 = (state_9907[(7)]);
var state_9907__$1 = state_9907;
if(cljs.core.truth_(inst_9884)){
var statearr_9916_9936 = state_9907__$1;
(statearr_9916_9936[(1)] = (4));

} else {
var statearr_9917_9937 = state_9907__$1;
(statearr_9917_9937[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (11))){
var inst_9898 = cljs.core.async.close_BANG_(ch);
var state_9907__$1 = state_9907;
var statearr_9918_9938 = state_9907__$1;
(statearr_9918_9938[(2)] = inst_9898);

(statearr_9918_9938[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (9))){
var state_9907__$1 = state_9907;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9919_9939 = state_9907__$1;
(statearr_9919_9939[(1)] = (11));

} else {
var statearr_9920_9940 = state_9907__$1;
(statearr_9920_9940[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (5))){
var inst_9884 = (state_9907[(7)]);
var state_9907__$1 = state_9907;
var statearr_9921_9941 = state_9907__$1;
(statearr_9921_9941[(2)] = inst_9884);

(statearr_9921_9941[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (10))){
var inst_9903 = (state_9907[(2)]);
var state_9907__$1 = state_9907;
var statearr_9922_9942 = state_9907__$1;
(statearr_9922_9942[(2)] = inst_9903);

(statearr_9922_9942[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_9908 === (8))){
var inst_9884 = (state_9907[(7)]);
var inst_9894 = cljs.core.next(inst_9884);
var inst_9884__$1 = inst_9894;
var state_9907__$1 = (function (){var statearr_9923 = state_9907;
(statearr_9923[(7)] = inst_9884__$1);

return statearr_9923;
})();
var statearr_9924_9943 = state_9907__$1;
(statearr_9924_9943[(2)] = null);

(statearr_9924_9943[(1)] = (2));


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
});})(c__9347__auto__))
;
return ((function (switch__9240__auto__,c__9347__auto__){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_9925 = [null,null,null,null,null,null,null,null];
(statearr_9925[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_9925[(1)] = (1));

return statearr_9925;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_9907){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_9907);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e9926){if((e9926 instanceof Object)){
var ex__9244__auto__ = e9926;
var statearr_9927_9944 = state_9907;
(statearr_9927_9944[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_9907);

return cljs.core.cst$kw$recur;
} else {
throw e9926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__9945 = state_9907;
state_9907 = G__9945;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_9907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_9907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__))
})();
var state__9349__auto__ = (function (){var statearr_9928 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_9928[(6)] = c__9347__auto__);

return statearr_9928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__))
);

return c__9347__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async9946 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9946 = (function (ch,cs,meta9947){
this.ch = ch;
this.cs = cs;
this.meta9947 = meta9947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_9948,meta9947__$1){
var self__ = this;
var _9948__$1 = this;
return (new cljs.core.async.t_cljs$core$async9946(self__.ch,self__.cs,meta9947__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_9948){
var self__ = this;
var _9948__$1 = this;
return self__.meta9947;
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta9947], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async9946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9946";

cljs.core.async.t_cljs$core$async9946.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async9946");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async9946.
 */
cljs.core.async.__GT_t_cljs$core$async9946 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async9946(ch__$1,cs__$1,meta9947){
return (new cljs.core.async.t_cljs$core$async9946(ch__$1,cs__$1,meta9947));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async9946(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__9347__auto___10168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10168,cs,m,dchan,dctr,done){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10168,cs,m,dchan,dctr,done){
return (function (state_10083){
var state_val_10084 = (state_10083[(1)]);
if((state_val_10084 === (7))){
var inst_10079 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10085_10169 = state_10083__$1;
(statearr_10085_10169[(2)] = inst_10079);

(statearr_10085_10169[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (20))){
var inst_9982 = (state_10083[(7)]);
var inst_9994 = cljs.core.first(inst_9982);
var inst_9995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9994,(0),null);
var inst_9996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9994,(1),null);
var state_10083__$1 = (function (){var statearr_10086 = state_10083;
(statearr_10086[(8)] = inst_9995);

return statearr_10086;
})();
if(cljs.core.truth_(inst_9996)){
var statearr_10087_10170 = state_10083__$1;
(statearr_10087_10170[(1)] = (22));

} else {
var statearr_10088_10171 = state_10083__$1;
(statearr_10088_10171[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (27))){
var inst_10031 = (state_10083[(9)]);
var inst_10024 = (state_10083[(10)]);
var inst_10026 = (state_10083[(11)]);
var inst_9951 = (state_10083[(12)]);
var inst_10031__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10024,inst_10026);
var inst_10032 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10031__$1,inst_9951,done);
var state_10083__$1 = (function (){var statearr_10089 = state_10083;
(statearr_10089[(9)] = inst_10031__$1);

return statearr_10089;
})();
if(cljs.core.truth_(inst_10032)){
var statearr_10090_10172 = state_10083__$1;
(statearr_10090_10172[(1)] = (30));

} else {
var statearr_10091_10173 = state_10083__$1;
(statearr_10091_10173[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (1))){
var state_10083__$1 = state_10083;
var statearr_10092_10174 = state_10083__$1;
(statearr_10092_10174[(2)] = null);

(statearr_10092_10174[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (24))){
var inst_9982 = (state_10083[(7)]);
var inst_10001 = (state_10083[(2)]);
var inst_10002 = cljs.core.next(inst_9982);
var inst_9960 = inst_10002;
var inst_9961 = null;
var inst_9962 = (0);
var inst_9963 = (0);
var state_10083__$1 = (function (){var statearr_10093 = state_10083;
(statearr_10093[(13)] = inst_9963);

(statearr_10093[(14)] = inst_9962);

(statearr_10093[(15)] = inst_9961);

(statearr_10093[(16)] = inst_9960);

(statearr_10093[(17)] = inst_10001);

return statearr_10093;
})();
var statearr_10094_10175 = state_10083__$1;
(statearr_10094_10175[(2)] = null);

(statearr_10094_10175[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (39))){
var state_10083__$1 = state_10083;
var statearr_10098_10176 = state_10083__$1;
(statearr_10098_10176[(2)] = null);

(statearr_10098_10176[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (4))){
var inst_9951 = (state_10083[(12)]);
var inst_9951__$1 = (state_10083[(2)]);
var inst_9952 = (inst_9951__$1 == null);
var state_10083__$1 = (function (){var statearr_10099 = state_10083;
(statearr_10099[(12)] = inst_9951__$1);

return statearr_10099;
})();
if(cljs.core.truth_(inst_9952)){
var statearr_10100_10177 = state_10083__$1;
(statearr_10100_10177[(1)] = (5));

} else {
var statearr_10101_10178 = state_10083__$1;
(statearr_10101_10178[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (15))){
var inst_9963 = (state_10083[(13)]);
var inst_9962 = (state_10083[(14)]);
var inst_9961 = (state_10083[(15)]);
var inst_9960 = (state_10083[(16)]);
var inst_9978 = (state_10083[(2)]);
var inst_9979 = (inst_9963 + (1));
var tmp10095 = inst_9962;
var tmp10096 = inst_9961;
var tmp10097 = inst_9960;
var inst_9960__$1 = tmp10097;
var inst_9961__$1 = tmp10096;
var inst_9962__$1 = tmp10095;
var inst_9963__$1 = inst_9979;
var state_10083__$1 = (function (){var statearr_10102 = state_10083;
(statearr_10102[(18)] = inst_9978);

(statearr_10102[(13)] = inst_9963__$1);

(statearr_10102[(14)] = inst_9962__$1);

(statearr_10102[(15)] = inst_9961__$1);

(statearr_10102[(16)] = inst_9960__$1);

return statearr_10102;
})();
var statearr_10103_10179 = state_10083__$1;
(statearr_10103_10179[(2)] = null);

(statearr_10103_10179[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (21))){
var inst_10005 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10107_10180 = state_10083__$1;
(statearr_10107_10180[(2)] = inst_10005);

(statearr_10107_10180[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (31))){
var inst_10031 = (state_10083[(9)]);
var inst_10035 = done(null);
var inst_10036 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10031);
var state_10083__$1 = (function (){var statearr_10108 = state_10083;
(statearr_10108[(19)] = inst_10035);

return statearr_10108;
})();
var statearr_10109_10181 = state_10083__$1;
(statearr_10109_10181[(2)] = inst_10036);

(statearr_10109_10181[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (32))){
var inst_10024 = (state_10083[(10)]);
var inst_10026 = (state_10083[(11)]);
var inst_10023 = (state_10083[(20)]);
var inst_10025 = (state_10083[(21)]);
var inst_10038 = (state_10083[(2)]);
var inst_10039 = (inst_10026 + (1));
var tmp10104 = inst_10024;
var tmp10105 = inst_10023;
var tmp10106 = inst_10025;
var inst_10023__$1 = tmp10105;
var inst_10024__$1 = tmp10104;
var inst_10025__$1 = tmp10106;
var inst_10026__$1 = inst_10039;
var state_10083__$1 = (function (){var statearr_10110 = state_10083;
(statearr_10110[(10)] = inst_10024__$1);

(statearr_10110[(11)] = inst_10026__$1);

(statearr_10110[(22)] = inst_10038);

(statearr_10110[(20)] = inst_10023__$1);

(statearr_10110[(21)] = inst_10025__$1);

return statearr_10110;
})();
var statearr_10111_10182 = state_10083__$1;
(statearr_10111_10182[(2)] = null);

(statearr_10111_10182[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (40))){
var inst_10051 = (state_10083[(23)]);
var inst_10055 = done(null);
var inst_10056 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_10051);
var state_10083__$1 = (function (){var statearr_10112 = state_10083;
(statearr_10112[(24)] = inst_10055);

return statearr_10112;
})();
var statearr_10113_10183 = state_10083__$1;
(statearr_10113_10183[(2)] = inst_10056);

(statearr_10113_10183[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (33))){
var inst_10042 = (state_10083[(25)]);
var inst_10044 = cljs.core.chunked_seq_QMARK_(inst_10042);
var state_10083__$1 = state_10083;
if(inst_10044){
var statearr_10114_10184 = state_10083__$1;
(statearr_10114_10184[(1)] = (36));

} else {
var statearr_10115_10185 = state_10083__$1;
(statearr_10115_10185[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (13))){
var inst_9972 = (state_10083[(26)]);
var inst_9975 = cljs.core.async.close_BANG_(inst_9972);
var state_10083__$1 = state_10083;
var statearr_10116_10186 = state_10083__$1;
(statearr_10116_10186[(2)] = inst_9975);

(statearr_10116_10186[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (22))){
var inst_9995 = (state_10083[(8)]);
var inst_9998 = cljs.core.async.close_BANG_(inst_9995);
var state_10083__$1 = state_10083;
var statearr_10117_10187 = state_10083__$1;
(statearr_10117_10187[(2)] = inst_9998);

(statearr_10117_10187[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (36))){
var inst_10042 = (state_10083[(25)]);
var inst_10046 = cljs.core.chunk_first(inst_10042);
var inst_10047 = cljs.core.chunk_rest(inst_10042);
var inst_10048 = cljs.core.count(inst_10046);
var inst_10023 = inst_10047;
var inst_10024 = inst_10046;
var inst_10025 = inst_10048;
var inst_10026 = (0);
var state_10083__$1 = (function (){var statearr_10118 = state_10083;
(statearr_10118[(10)] = inst_10024);

(statearr_10118[(11)] = inst_10026);

(statearr_10118[(20)] = inst_10023);

(statearr_10118[(21)] = inst_10025);

return statearr_10118;
})();
var statearr_10119_10188 = state_10083__$1;
(statearr_10119_10188[(2)] = null);

(statearr_10119_10188[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (41))){
var inst_10042 = (state_10083[(25)]);
var inst_10058 = (state_10083[(2)]);
var inst_10059 = cljs.core.next(inst_10042);
var inst_10023 = inst_10059;
var inst_10024 = null;
var inst_10025 = (0);
var inst_10026 = (0);
var state_10083__$1 = (function (){var statearr_10120 = state_10083;
(statearr_10120[(10)] = inst_10024);

(statearr_10120[(11)] = inst_10026);

(statearr_10120[(27)] = inst_10058);

(statearr_10120[(20)] = inst_10023);

(statearr_10120[(21)] = inst_10025);

return statearr_10120;
})();
var statearr_10121_10189 = state_10083__$1;
(statearr_10121_10189[(2)] = null);

(statearr_10121_10189[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (43))){
var state_10083__$1 = state_10083;
var statearr_10122_10190 = state_10083__$1;
(statearr_10122_10190[(2)] = null);

(statearr_10122_10190[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (29))){
var inst_10067 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10123_10191 = state_10083__$1;
(statearr_10123_10191[(2)] = inst_10067);

(statearr_10123_10191[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (44))){
var inst_10076 = (state_10083[(2)]);
var state_10083__$1 = (function (){var statearr_10124 = state_10083;
(statearr_10124[(28)] = inst_10076);

return statearr_10124;
})();
var statearr_10125_10192 = state_10083__$1;
(statearr_10125_10192[(2)] = null);

(statearr_10125_10192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (6))){
var inst_10015 = (state_10083[(29)]);
var inst_10014 = cljs.core.deref(cs);
var inst_10015__$1 = cljs.core.keys(inst_10014);
var inst_10016 = cljs.core.count(inst_10015__$1);
var inst_10017 = cljs.core.reset_BANG_(dctr,inst_10016);
var inst_10022 = cljs.core.seq(inst_10015__$1);
var inst_10023 = inst_10022;
var inst_10024 = null;
var inst_10025 = (0);
var inst_10026 = (0);
var state_10083__$1 = (function (){var statearr_10126 = state_10083;
(statearr_10126[(30)] = inst_10017);

(statearr_10126[(10)] = inst_10024);

(statearr_10126[(11)] = inst_10026);

(statearr_10126[(20)] = inst_10023);

(statearr_10126[(21)] = inst_10025);

(statearr_10126[(29)] = inst_10015__$1);

return statearr_10126;
})();
var statearr_10127_10193 = state_10083__$1;
(statearr_10127_10193[(2)] = null);

(statearr_10127_10193[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (28))){
var inst_10042 = (state_10083[(25)]);
var inst_10023 = (state_10083[(20)]);
var inst_10042__$1 = cljs.core.seq(inst_10023);
var state_10083__$1 = (function (){var statearr_10128 = state_10083;
(statearr_10128[(25)] = inst_10042__$1);

return statearr_10128;
})();
if(inst_10042__$1){
var statearr_10129_10194 = state_10083__$1;
(statearr_10129_10194[(1)] = (33));

} else {
var statearr_10130_10195 = state_10083__$1;
(statearr_10130_10195[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (25))){
var inst_10026 = (state_10083[(11)]);
var inst_10025 = (state_10083[(21)]);
var inst_10028 = (inst_10026 < inst_10025);
var inst_10029 = inst_10028;
var state_10083__$1 = state_10083;
if(cljs.core.truth_(inst_10029)){
var statearr_10131_10196 = state_10083__$1;
(statearr_10131_10196[(1)] = (27));

} else {
var statearr_10132_10197 = state_10083__$1;
(statearr_10132_10197[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (34))){
var state_10083__$1 = state_10083;
var statearr_10133_10198 = state_10083__$1;
(statearr_10133_10198[(2)] = null);

(statearr_10133_10198[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (17))){
var state_10083__$1 = state_10083;
var statearr_10134_10199 = state_10083__$1;
(statearr_10134_10199[(2)] = null);

(statearr_10134_10199[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (3))){
var inst_10081 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10083__$1,inst_10081);
} else {
if((state_val_10084 === (12))){
var inst_10010 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10135_10200 = state_10083__$1;
(statearr_10135_10200[(2)] = inst_10010);

(statearr_10135_10200[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (2))){
var state_10083__$1 = state_10083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10083__$1,(4),ch);
} else {
if((state_val_10084 === (23))){
var state_10083__$1 = state_10083;
var statearr_10136_10201 = state_10083__$1;
(statearr_10136_10201[(2)] = null);

(statearr_10136_10201[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (35))){
var inst_10065 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10137_10202 = state_10083__$1;
(statearr_10137_10202[(2)] = inst_10065);

(statearr_10137_10202[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (19))){
var inst_9982 = (state_10083[(7)]);
var inst_9986 = cljs.core.chunk_first(inst_9982);
var inst_9987 = cljs.core.chunk_rest(inst_9982);
var inst_9988 = cljs.core.count(inst_9986);
var inst_9960 = inst_9987;
var inst_9961 = inst_9986;
var inst_9962 = inst_9988;
var inst_9963 = (0);
var state_10083__$1 = (function (){var statearr_10138 = state_10083;
(statearr_10138[(13)] = inst_9963);

(statearr_10138[(14)] = inst_9962);

(statearr_10138[(15)] = inst_9961);

(statearr_10138[(16)] = inst_9960);

return statearr_10138;
})();
var statearr_10139_10203 = state_10083__$1;
(statearr_10139_10203[(2)] = null);

(statearr_10139_10203[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (11))){
var inst_9982 = (state_10083[(7)]);
var inst_9960 = (state_10083[(16)]);
var inst_9982__$1 = cljs.core.seq(inst_9960);
var state_10083__$1 = (function (){var statearr_10140 = state_10083;
(statearr_10140[(7)] = inst_9982__$1);

return statearr_10140;
})();
if(inst_9982__$1){
var statearr_10141_10204 = state_10083__$1;
(statearr_10141_10204[(1)] = (16));

} else {
var statearr_10142_10205 = state_10083__$1;
(statearr_10142_10205[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (9))){
var inst_10012 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10143_10206 = state_10083__$1;
(statearr_10143_10206[(2)] = inst_10012);

(statearr_10143_10206[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (5))){
var inst_9958 = cljs.core.deref(cs);
var inst_9959 = cljs.core.seq(inst_9958);
var inst_9960 = inst_9959;
var inst_9961 = null;
var inst_9962 = (0);
var inst_9963 = (0);
var state_10083__$1 = (function (){var statearr_10144 = state_10083;
(statearr_10144[(13)] = inst_9963);

(statearr_10144[(14)] = inst_9962);

(statearr_10144[(15)] = inst_9961);

(statearr_10144[(16)] = inst_9960);

return statearr_10144;
})();
var statearr_10145_10207 = state_10083__$1;
(statearr_10145_10207[(2)] = null);

(statearr_10145_10207[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (14))){
var state_10083__$1 = state_10083;
var statearr_10146_10208 = state_10083__$1;
(statearr_10146_10208[(2)] = null);

(statearr_10146_10208[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (45))){
var inst_10073 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10147_10209 = state_10083__$1;
(statearr_10147_10209[(2)] = inst_10073);

(statearr_10147_10209[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (26))){
var inst_10015 = (state_10083[(29)]);
var inst_10069 = (state_10083[(2)]);
var inst_10070 = cljs.core.seq(inst_10015);
var state_10083__$1 = (function (){var statearr_10148 = state_10083;
(statearr_10148[(31)] = inst_10069);

return statearr_10148;
})();
if(inst_10070){
var statearr_10149_10210 = state_10083__$1;
(statearr_10149_10210[(1)] = (42));

} else {
var statearr_10150_10211 = state_10083__$1;
(statearr_10150_10211[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (16))){
var inst_9982 = (state_10083[(7)]);
var inst_9984 = cljs.core.chunked_seq_QMARK_(inst_9982);
var state_10083__$1 = state_10083;
if(inst_9984){
var statearr_10151_10212 = state_10083__$1;
(statearr_10151_10212[(1)] = (19));

} else {
var statearr_10152_10213 = state_10083__$1;
(statearr_10152_10213[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (38))){
var inst_10062 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10153_10214 = state_10083__$1;
(statearr_10153_10214[(2)] = inst_10062);

(statearr_10153_10214[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (30))){
var state_10083__$1 = state_10083;
var statearr_10154_10215 = state_10083__$1;
(statearr_10154_10215[(2)] = null);

(statearr_10154_10215[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (10))){
var inst_9963 = (state_10083[(13)]);
var inst_9961 = (state_10083[(15)]);
var inst_9971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_9961,inst_9963);
var inst_9972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9971,(0),null);
var inst_9973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_9971,(1),null);
var state_10083__$1 = (function (){var statearr_10155 = state_10083;
(statearr_10155[(26)] = inst_9972);

return statearr_10155;
})();
if(cljs.core.truth_(inst_9973)){
var statearr_10156_10216 = state_10083__$1;
(statearr_10156_10216[(1)] = (13));

} else {
var statearr_10157_10217 = state_10083__$1;
(statearr_10157_10217[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (18))){
var inst_10008 = (state_10083[(2)]);
var state_10083__$1 = state_10083;
var statearr_10158_10218 = state_10083__$1;
(statearr_10158_10218[(2)] = inst_10008);

(statearr_10158_10218[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (42))){
var state_10083__$1 = state_10083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10083__$1,(45),dchan);
} else {
if((state_val_10084 === (37))){
var inst_10051 = (state_10083[(23)]);
var inst_10042 = (state_10083[(25)]);
var inst_9951 = (state_10083[(12)]);
var inst_10051__$1 = cljs.core.first(inst_10042);
var inst_10052 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_10051__$1,inst_9951,done);
var state_10083__$1 = (function (){var statearr_10159 = state_10083;
(statearr_10159[(23)] = inst_10051__$1);

return statearr_10159;
})();
if(cljs.core.truth_(inst_10052)){
var statearr_10160_10219 = state_10083__$1;
(statearr_10160_10219[(1)] = (39));

} else {
var statearr_10161_10220 = state_10083__$1;
(statearr_10161_10220[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10084 === (8))){
var inst_9963 = (state_10083[(13)]);
var inst_9962 = (state_10083[(14)]);
var inst_9965 = (inst_9963 < inst_9962);
var inst_9966 = inst_9965;
var state_10083__$1 = state_10083;
if(cljs.core.truth_(inst_9966)){
var statearr_10162_10221 = state_10083__$1;
(statearr_10162_10221[(1)] = (10));

} else {
var statearr_10163_10222 = state_10083__$1;
(statearr_10163_10222[(1)] = (11));

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
});})(c__9347__auto___10168,cs,m,dchan,dctr,done))
;
return ((function (switch__9240__auto__,c__9347__auto___10168,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9241__auto__ = null;
var cljs$core$async$mult_$_state_machine__9241__auto____0 = (function (){
var statearr_10164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10164[(0)] = cljs$core$async$mult_$_state_machine__9241__auto__);

(statearr_10164[(1)] = (1));

return statearr_10164;
});
var cljs$core$async$mult_$_state_machine__9241__auto____1 = (function (state_10083){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10083);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10165){if((e10165 instanceof Object)){
var ex__9244__auto__ = e10165;
var statearr_10166_10223 = state_10083;
(statearr_10166_10223[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10083);

return cljs.core.cst$kw$recur;
} else {
throw e10165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10224 = state_10083;
state_10083 = G__10224;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9241__auto__ = function(state_10083){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9241__auto____1.call(this,state_10083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9241__auto____0;
cljs$core$async$mult_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9241__auto____1;
return cljs$core$async$mult_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10168,cs,m,dchan,dctr,done))
})();
var state__9349__auto__ = (function (){var statearr_10167 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10167[(6)] = c__9347__auto___10168);

return statearr_10167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10168,cs,m,dchan,dctr,done))
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
var G__10226 = arguments.length;
switch (G__10226) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10238 = arguments.length;
var i__4731__auto___10239 = (0);
while(true){
if((i__4731__auto___10239 < len__4730__auto___10238)){
args__4736__auto__.push((arguments[i__4731__auto___10239]));

var G__10240 = (i__4731__auto___10239 + (1));
i__4731__auto___10239 = G__10240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10232){
var map__10233 = p__10232;
var map__10233__$1 = (((((!((map__10233 == null))))?(((((map__10233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10233):map__10233);
var opts = map__10233__$1;
var statearr_10235_10241 = state;
(statearr_10235_10241[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__10233,map__10233__$1,opts){
return (function (val){
var statearr_10236_10242 = state;
(statearr_10236_10242[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__10233,map__10233__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_10237_10243 = state;
(statearr_10237_10243[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10228){
var G__10229 = cljs.core.first(seq10228);
var seq10228__$1 = cljs.core.next(seq10228);
var G__10230 = cljs.core.first(seq10228__$1);
var seq10228__$2 = cljs.core.next(seq10228__$1);
var G__10231 = cljs.core.first(seq10228__$2);
var seq10228__$3 = cljs.core.next(seq10228__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10229,G__10230,G__10231,seq10228__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
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
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10244 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10245){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10245 = meta10245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10246,meta10245__$1){
var self__ = this;
var _10246__$1 = this;
return (new cljs.core.async.t_cljs$core$async10244(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10245__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10246){
var self__ = this;
var _10246__$1 = this;
return self__.meta10245;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta10245], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10244";

cljs.core.async.t_cljs$core$async10244.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10244");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10244.
 */
cljs.core.async.__GT_t_cljs$core$async10244 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10244(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10245){
return (new cljs.core.async.t_cljs$core$async10244(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10245));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10244(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9347__auto___10408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10348){
var state_val_10349 = (state_10348[(1)]);
if((state_val_10349 === (7))){
var inst_10263 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
var statearr_10350_10409 = state_10348__$1;
(statearr_10350_10409[(2)] = inst_10263);

(statearr_10350_10409[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (20))){
var inst_10275 = (state_10348[(7)]);
var state_10348__$1 = state_10348;
var statearr_10351_10410 = state_10348__$1;
(statearr_10351_10410[(2)] = inst_10275);

(statearr_10351_10410[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (27))){
var state_10348__$1 = state_10348;
var statearr_10352_10411 = state_10348__$1;
(statearr_10352_10411[(2)] = null);

(statearr_10352_10411[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (1))){
var inst_10250 = (state_10348[(8)]);
var inst_10250__$1 = calc_state();
var inst_10252 = (inst_10250__$1 == null);
var inst_10253 = cljs.core.not(inst_10252);
var state_10348__$1 = (function (){var statearr_10353 = state_10348;
(statearr_10353[(8)] = inst_10250__$1);

return statearr_10353;
})();
if(inst_10253){
var statearr_10354_10412 = state_10348__$1;
(statearr_10354_10412[(1)] = (2));

} else {
var statearr_10355_10413 = state_10348__$1;
(statearr_10355_10413[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (24))){
var inst_10322 = (state_10348[(9)]);
var inst_10308 = (state_10348[(10)]);
var inst_10299 = (state_10348[(11)]);
var inst_10322__$1 = (inst_10299.cljs$core$IFn$_invoke$arity$1 ? inst_10299.cljs$core$IFn$_invoke$arity$1(inst_10308) : inst_10299.call(null,inst_10308));
var state_10348__$1 = (function (){var statearr_10356 = state_10348;
(statearr_10356[(9)] = inst_10322__$1);

return statearr_10356;
})();
if(cljs.core.truth_(inst_10322__$1)){
var statearr_10357_10414 = state_10348__$1;
(statearr_10357_10414[(1)] = (29));

} else {
var statearr_10358_10415 = state_10348__$1;
(statearr_10358_10415[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (4))){
var inst_10266 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10266)){
var statearr_10359_10416 = state_10348__$1;
(statearr_10359_10416[(1)] = (8));

} else {
var statearr_10360_10417 = state_10348__$1;
(statearr_10360_10417[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (15))){
var inst_10293 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10293)){
var statearr_10361_10418 = state_10348__$1;
(statearr_10361_10418[(1)] = (19));

} else {
var statearr_10362_10419 = state_10348__$1;
(statearr_10362_10419[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (21))){
var inst_10298 = (state_10348[(12)]);
var inst_10298__$1 = (state_10348[(2)]);
var inst_10299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10298__$1,cljs.core.cst$kw$solos);
var inst_10300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10298__$1,cljs.core.cst$kw$mutes);
var inst_10301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10298__$1,cljs.core.cst$kw$reads);
var state_10348__$1 = (function (){var statearr_10363 = state_10348;
(statearr_10363[(11)] = inst_10299);

(statearr_10363[(13)] = inst_10300);

(statearr_10363[(12)] = inst_10298__$1);

return statearr_10363;
})();
return cljs.core.async.ioc_alts_BANG_(state_10348__$1,(22),inst_10301);
} else {
if((state_val_10349 === (31))){
var inst_10330 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10330)){
var statearr_10364_10420 = state_10348__$1;
(statearr_10364_10420[(1)] = (32));

} else {
var statearr_10365_10421 = state_10348__$1;
(statearr_10365_10421[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (32))){
var inst_10307 = (state_10348[(14)]);
var state_10348__$1 = state_10348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10348__$1,(35),out,inst_10307);
} else {
if((state_val_10349 === (33))){
var inst_10298 = (state_10348[(12)]);
var inst_10275 = inst_10298;
var state_10348__$1 = (function (){var statearr_10366 = state_10348;
(statearr_10366[(7)] = inst_10275);

return statearr_10366;
})();
var statearr_10367_10422 = state_10348__$1;
(statearr_10367_10422[(2)] = null);

(statearr_10367_10422[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (13))){
var inst_10275 = (state_10348[(7)]);
var inst_10282 = inst_10275.cljs$lang$protocol_mask$partition0$;
var inst_10283 = (inst_10282 & (64));
var inst_10284 = inst_10275.cljs$core$ISeq$;
var inst_10285 = (cljs.core.PROTOCOL_SENTINEL === inst_10284);
var inst_10286 = ((inst_10283) || (inst_10285));
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10286)){
var statearr_10368_10423 = state_10348__$1;
(statearr_10368_10423[(1)] = (16));

} else {
var statearr_10369_10424 = state_10348__$1;
(statearr_10369_10424[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (22))){
var inst_10308 = (state_10348[(10)]);
var inst_10307 = (state_10348[(14)]);
var inst_10306 = (state_10348[(2)]);
var inst_10307__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10306,(0),null);
var inst_10308__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10306,(1),null);
var inst_10309 = (inst_10307__$1 == null);
var inst_10310 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_10308__$1,change);
var inst_10311 = ((inst_10309) || (inst_10310));
var state_10348__$1 = (function (){var statearr_10370 = state_10348;
(statearr_10370[(10)] = inst_10308__$1);

(statearr_10370[(14)] = inst_10307__$1);

return statearr_10370;
})();
if(cljs.core.truth_(inst_10311)){
var statearr_10371_10425 = state_10348__$1;
(statearr_10371_10425[(1)] = (23));

} else {
var statearr_10372_10426 = state_10348__$1;
(statearr_10372_10426[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (36))){
var inst_10298 = (state_10348[(12)]);
var inst_10275 = inst_10298;
var state_10348__$1 = (function (){var statearr_10373 = state_10348;
(statearr_10373[(7)] = inst_10275);

return statearr_10373;
})();
var statearr_10374_10427 = state_10348__$1;
(statearr_10374_10427[(2)] = null);

(statearr_10374_10427[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (29))){
var inst_10322 = (state_10348[(9)]);
var state_10348__$1 = state_10348;
var statearr_10375_10428 = state_10348__$1;
(statearr_10375_10428[(2)] = inst_10322);

(statearr_10375_10428[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (6))){
var state_10348__$1 = state_10348;
var statearr_10376_10429 = state_10348__$1;
(statearr_10376_10429[(2)] = false);

(statearr_10376_10429[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (28))){
var inst_10318 = (state_10348[(2)]);
var inst_10319 = calc_state();
var inst_10275 = inst_10319;
var state_10348__$1 = (function (){var statearr_10377 = state_10348;
(statearr_10377[(15)] = inst_10318);

(statearr_10377[(7)] = inst_10275);

return statearr_10377;
})();
var statearr_10378_10430 = state_10348__$1;
(statearr_10378_10430[(2)] = null);

(statearr_10378_10430[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (25))){
var inst_10344 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
var statearr_10379_10431 = state_10348__$1;
(statearr_10379_10431[(2)] = inst_10344);

(statearr_10379_10431[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (34))){
var inst_10342 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
var statearr_10380_10432 = state_10348__$1;
(statearr_10380_10432[(2)] = inst_10342);

(statearr_10380_10432[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (17))){
var state_10348__$1 = state_10348;
var statearr_10381_10433 = state_10348__$1;
(statearr_10381_10433[(2)] = false);

(statearr_10381_10433[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (3))){
var state_10348__$1 = state_10348;
var statearr_10382_10434 = state_10348__$1;
(statearr_10382_10434[(2)] = false);

(statearr_10382_10434[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (12))){
var inst_10346 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10348__$1,inst_10346);
} else {
if((state_val_10349 === (2))){
var inst_10250 = (state_10348[(8)]);
var inst_10255 = inst_10250.cljs$lang$protocol_mask$partition0$;
var inst_10256 = (inst_10255 & (64));
var inst_10257 = inst_10250.cljs$core$ISeq$;
var inst_10258 = (cljs.core.PROTOCOL_SENTINEL === inst_10257);
var inst_10259 = ((inst_10256) || (inst_10258));
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10259)){
var statearr_10383_10435 = state_10348__$1;
(statearr_10383_10435[(1)] = (5));

} else {
var statearr_10384_10436 = state_10348__$1;
(statearr_10384_10436[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (23))){
var inst_10307 = (state_10348[(14)]);
var inst_10313 = (inst_10307 == null);
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10313)){
var statearr_10385_10437 = state_10348__$1;
(statearr_10385_10437[(1)] = (26));

} else {
var statearr_10386_10438 = state_10348__$1;
(statearr_10386_10438[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (35))){
var inst_10333 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
if(cljs.core.truth_(inst_10333)){
var statearr_10387_10439 = state_10348__$1;
(statearr_10387_10439[(1)] = (36));

} else {
var statearr_10388_10440 = state_10348__$1;
(statearr_10388_10440[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (19))){
var inst_10275 = (state_10348[(7)]);
var inst_10295 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10275);
var state_10348__$1 = state_10348;
var statearr_10389_10441 = state_10348__$1;
(statearr_10389_10441[(2)] = inst_10295);

(statearr_10389_10441[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (11))){
var inst_10275 = (state_10348[(7)]);
var inst_10279 = (inst_10275 == null);
var inst_10280 = cljs.core.not(inst_10279);
var state_10348__$1 = state_10348;
if(inst_10280){
var statearr_10390_10442 = state_10348__$1;
(statearr_10390_10442[(1)] = (13));

} else {
var statearr_10391_10443 = state_10348__$1;
(statearr_10391_10443[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (9))){
var inst_10250 = (state_10348[(8)]);
var state_10348__$1 = state_10348;
var statearr_10392_10444 = state_10348__$1;
(statearr_10392_10444[(2)] = inst_10250);

(statearr_10392_10444[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (5))){
var state_10348__$1 = state_10348;
var statearr_10393_10445 = state_10348__$1;
(statearr_10393_10445[(2)] = true);

(statearr_10393_10445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (14))){
var state_10348__$1 = state_10348;
var statearr_10394_10446 = state_10348__$1;
(statearr_10394_10446[(2)] = false);

(statearr_10394_10446[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (26))){
var inst_10308 = (state_10348[(10)]);
var inst_10315 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_10308);
var state_10348__$1 = state_10348;
var statearr_10395_10447 = state_10348__$1;
(statearr_10395_10447[(2)] = inst_10315);

(statearr_10395_10447[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (16))){
var state_10348__$1 = state_10348;
var statearr_10396_10448 = state_10348__$1;
(statearr_10396_10448[(2)] = true);

(statearr_10396_10448[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (38))){
var inst_10338 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
var statearr_10397_10449 = state_10348__$1;
(statearr_10397_10449[(2)] = inst_10338);

(statearr_10397_10449[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (30))){
var inst_10308 = (state_10348[(10)]);
var inst_10299 = (state_10348[(11)]);
var inst_10300 = (state_10348[(13)]);
var inst_10325 = cljs.core.empty_QMARK_(inst_10299);
var inst_10326 = (inst_10300.cljs$core$IFn$_invoke$arity$1 ? inst_10300.cljs$core$IFn$_invoke$arity$1(inst_10308) : inst_10300.call(null,inst_10308));
var inst_10327 = cljs.core.not(inst_10326);
var inst_10328 = ((inst_10325) && (inst_10327));
var state_10348__$1 = state_10348;
var statearr_10398_10450 = state_10348__$1;
(statearr_10398_10450[(2)] = inst_10328);

(statearr_10398_10450[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (10))){
var inst_10250 = (state_10348[(8)]);
var inst_10271 = (state_10348[(2)]);
var inst_10272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10271,cljs.core.cst$kw$solos);
var inst_10273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10271,cljs.core.cst$kw$mutes);
var inst_10274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10271,cljs.core.cst$kw$reads);
var inst_10275 = inst_10250;
var state_10348__$1 = (function (){var statearr_10399 = state_10348;
(statearr_10399[(16)] = inst_10272);

(statearr_10399[(17)] = inst_10273);

(statearr_10399[(7)] = inst_10275);

(statearr_10399[(18)] = inst_10274);

return statearr_10399;
})();
var statearr_10400_10451 = state_10348__$1;
(statearr_10400_10451[(2)] = null);

(statearr_10400_10451[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (18))){
var inst_10290 = (state_10348[(2)]);
var state_10348__$1 = state_10348;
var statearr_10401_10452 = state_10348__$1;
(statearr_10401_10452[(2)] = inst_10290);

(statearr_10401_10452[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (37))){
var state_10348__$1 = state_10348;
var statearr_10402_10453 = state_10348__$1;
(statearr_10402_10453[(2)] = null);

(statearr_10402_10453[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10349 === (8))){
var inst_10250 = (state_10348[(8)]);
var inst_10268 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_10250);
var state_10348__$1 = state_10348;
var statearr_10403_10454 = state_10348__$1;
(statearr_10403_10454[(2)] = inst_10268);

(statearr_10403_10454[(1)] = (10));


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
});})(c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9240__auto__,c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9241__auto__ = null;
var cljs$core$async$mix_$_state_machine__9241__auto____0 = (function (){
var statearr_10404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10404[(0)] = cljs$core$async$mix_$_state_machine__9241__auto__);

(statearr_10404[(1)] = (1));

return statearr_10404;
});
var cljs$core$async$mix_$_state_machine__9241__auto____1 = (function (state_10348){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10348);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10405){if((e10405 instanceof Object)){
var ex__9244__auto__ = e10405;
var statearr_10406_10455 = state_10348;
(statearr_10406_10455[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10348);

return cljs.core.cst$kw$recur;
} else {
throw e10405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10456 = state_10348;
state_10348 = G__10456;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9241__auto__ = function(state_10348){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9241__auto____1.call(this,state_10348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9241__auto____0;
cljs$core$async$mix_$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9241__auto____1;
return cljs$core$async$mix_$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9349__auto__ = (function (){var statearr_10407 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10407[(6)] = c__9347__auto___10408);

return statearr_10407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__10458 = arguments.length;
switch (G__10458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
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
var G__10462 = arguments.length;
switch (G__10462) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__10460_SHARP_){
if(cljs.core.truth_((p1__10460_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__10460_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__10460_SHARP_.call(null,topic)))){
return p1__10460_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__10460_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10463 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10464){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10464 = meta10464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10465,meta10464__$1){
var self__ = this;
var _10465__$1 = this;
return (new cljs.core.async.t_cljs$core$async10463(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10464__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10465){
var self__ = this;
var _10465__$1 = this;
return self__.meta10464;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta10464], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10463";

cljs.core.async.t_cljs$core$async10463.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10463");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10463.
 */
cljs.core.async.__GT_t_cljs$core$async10463 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10464){
return (new cljs.core.async.t_cljs$core$async10463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10464));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10463(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9347__auto___10583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10583,mults,ensure_mult,p){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10583,mults,ensure_mult,p){
return (function (state_10537){
var state_val_10538 = (state_10537[(1)]);
if((state_val_10538 === (7))){
var inst_10533 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10539_10584 = state_10537__$1;
(statearr_10539_10584[(2)] = inst_10533);

(statearr_10539_10584[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (20))){
var state_10537__$1 = state_10537;
var statearr_10540_10585 = state_10537__$1;
(statearr_10540_10585[(2)] = null);

(statearr_10540_10585[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (1))){
var state_10537__$1 = state_10537;
var statearr_10541_10586 = state_10537__$1;
(statearr_10541_10586[(2)] = null);

(statearr_10541_10586[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (24))){
var inst_10516 = (state_10537[(7)]);
var inst_10525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_10516);
var state_10537__$1 = state_10537;
var statearr_10542_10587 = state_10537__$1;
(statearr_10542_10587[(2)] = inst_10525);

(statearr_10542_10587[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (4))){
var inst_10468 = (state_10537[(8)]);
var inst_10468__$1 = (state_10537[(2)]);
var inst_10469 = (inst_10468__$1 == null);
var state_10537__$1 = (function (){var statearr_10543 = state_10537;
(statearr_10543[(8)] = inst_10468__$1);

return statearr_10543;
})();
if(cljs.core.truth_(inst_10469)){
var statearr_10544_10588 = state_10537__$1;
(statearr_10544_10588[(1)] = (5));

} else {
var statearr_10545_10589 = state_10537__$1;
(statearr_10545_10589[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (15))){
var inst_10510 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10546_10590 = state_10537__$1;
(statearr_10546_10590[(2)] = inst_10510);

(statearr_10546_10590[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (21))){
var inst_10530 = (state_10537[(2)]);
var state_10537__$1 = (function (){var statearr_10547 = state_10537;
(statearr_10547[(9)] = inst_10530);

return statearr_10547;
})();
var statearr_10548_10591 = state_10537__$1;
(statearr_10548_10591[(2)] = null);

(statearr_10548_10591[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (13))){
var inst_10492 = (state_10537[(10)]);
var inst_10494 = cljs.core.chunked_seq_QMARK_(inst_10492);
var state_10537__$1 = state_10537;
if(inst_10494){
var statearr_10549_10592 = state_10537__$1;
(statearr_10549_10592[(1)] = (16));

} else {
var statearr_10550_10593 = state_10537__$1;
(statearr_10550_10593[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (22))){
var inst_10522 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
if(cljs.core.truth_(inst_10522)){
var statearr_10551_10594 = state_10537__$1;
(statearr_10551_10594[(1)] = (23));

} else {
var statearr_10552_10595 = state_10537__$1;
(statearr_10552_10595[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (6))){
var inst_10518 = (state_10537[(11)]);
var inst_10516 = (state_10537[(7)]);
var inst_10468 = (state_10537[(8)]);
var inst_10516__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_10468) : topic_fn.call(null,inst_10468));
var inst_10517 = cljs.core.deref(mults);
var inst_10518__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_10517,inst_10516__$1);
var state_10537__$1 = (function (){var statearr_10553 = state_10537;
(statearr_10553[(11)] = inst_10518__$1);

(statearr_10553[(7)] = inst_10516__$1);

return statearr_10553;
})();
if(cljs.core.truth_(inst_10518__$1)){
var statearr_10554_10596 = state_10537__$1;
(statearr_10554_10596[(1)] = (19));

} else {
var statearr_10555_10597 = state_10537__$1;
(statearr_10555_10597[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (25))){
var inst_10527 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10556_10598 = state_10537__$1;
(statearr_10556_10598[(2)] = inst_10527);

(statearr_10556_10598[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (17))){
var inst_10492 = (state_10537[(10)]);
var inst_10501 = cljs.core.first(inst_10492);
var inst_10502 = cljs.core.async.muxch_STAR_(inst_10501);
var inst_10503 = cljs.core.async.close_BANG_(inst_10502);
var inst_10504 = cljs.core.next(inst_10492);
var inst_10478 = inst_10504;
var inst_10479 = null;
var inst_10480 = (0);
var inst_10481 = (0);
var state_10537__$1 = (function (){var statearr_10557 = state_10537;
(statearr_10557[(12)] = inst_10480);

(statearr_10557[(13)] = inst_10479);

(statearr_10557[(14)] = inst_10503);

(statearr_10557[(15)] = inst_10478);

(statearr_10557[(16)] = inst_10481);

return statearr_10557;
})();
var statearr_10558_10599 = state_10537__$1;
(statearr_10558_10599[(2)] = null);

(statearr_10558_10599[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (3))){
var inst_10535 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10537__$1,inst_10535);
} else {
if((state_val_10538 === (12))){
var inst_10512 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10559_10600 = state_10537__$1;
(statearr_10559_10600[(2)] = inst_10512);

(statearr_10559_10600[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (2))){
var state_10537__$1 = state_10537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10537__$1,(4),ch);
} else {
if((state_val_10538 === (23))){
var state_10537__$1 = state_10537;
var statearr_10560_10601 = state_10537__$1;
(statearr_10560_10601[(2)] = null);

(statearr_10560_10601[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (19))){
var inst_10518 = (state_10537[(11)]);
var inst_10468 = (state_10537[(8)]);
var inst_10520 = cljs.core.async.muxch_STAR_(inst_10518);
var state_10537__$1 = state_10537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10537__$1,(22),inst_10520,inst_10468);
} else {
if((state_val_10538 === (11))){
var inst_10492 = (state_10537[(10)]);
var inst_10478 = (state_10537[(15)]);
var inst_10492__$1 = cljs.core.seq(inst_10478);
var state_10537__$1 = (function (){var statearr_10561 = state_10537;
(statearr_10561[(10)] = inst_10492__$1);

return statearr_10561;
})();
if(inst_10492__$1){
var statearr_10562_10602 = state_10537__$1;
(statearr_10562_10602[(1)] = (13));

} else {
var statearr_10563_10603 = state_10537__$1;
(statearr_10563_10603[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (9))){
var inst_10514 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10564_10604 = state_10537__$1;
(statearr_10564_10604[(2)] = inst_10514);

(statearr_10564_10604[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (5))){
var inst_10475 = cljs.core.deref(mults);
var inst_10476 = cljs.core.vals(inst_10475);
var inst_10477 = cljs.core.seq(inst_10476);
var inst_10478 = inst_10477;
var inst_10479 = null;
var inst_10480 = (0);
var inst_10481 = (0);
var state_10537__$1 = (function (){var statearr_10565 = state_10537;
(statearr_10565[(12)] = inst_10480);

(statearr_10565[(13)] = inst_10479);

(statearr_10565[(15)] = inst_10478);

(statearr_10565[(16)] = inst_10481);

return statearr_10565;
})();
var statearr_10566_10605 = state_10537__$1;
(statearr_10566_10605[(2)] = null);

(statearr_10566_10605[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (14))){
var state_10537__$1 = state_10537;
var statearr_10570_10606 = state_10537__$1;
(statearr_10570_10606[(2)] = null);

(statearr_10570_10606[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (16))){
var inst_10492 = (state_10537[(10)]);
var inst_10496 = cljs.core.chunk_first(inst_10492);
var inst_10497 = cljs.core.chunk_rest(inst_10492);
var inst_10498 = cljs.core.count(inst_10496);
var inst_10478 = inst_10497;
var inst_10479 = inst_10496;
var inst_10480 = inst_10498;
var inst_10481 = (0);
var state_10537__$1 = (function (){var statearr_10571 = state_10537;
(statearr_10571[(12)] = inst_10480);

(statearr_10571[(13)] = inst_10479);

(statearr_10571[(15)] = inst_10478);

(statearr_10571[(16)] = inst_10481);

return statearr_10571;
})();
var statearr_10572_10607 = state_10537__$1;
(statearr_10572_10607[(2)] = null);

(statearr_10572_10607[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (10))){
var inst_10480 = (state_10537[(12)]);
var inst_10479 = (state_10537[(13)]);
var inst_10478 = (state_10537[(15)]);
var inst_10481 = (state_10537[(16)]);
var inst_10486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10479,inst_10481);
var inst_10487 = cljs.core.async.muxch_STAR_(inst_10486);
var inst_10488 = cljs.core.async.close_BANG_(inst_10487);
var inst_10489 = (inst_10481 + (1));
var tmp10567 = inst_10480;
var tmp10568 = inst_10479;
var tmp10569 = inst_10478;
var inst_10478__$1 = tmp10569;
var inst_10479__$1 = tmp10568;
var inst_10480__$1 = tmp10567;
var inst_10481__$1 = inst_10489;
var state_10537__$1 = (function (){var statearr_10573 = state_10537;
(statearr_10573[(12)] = inst_10480__$1);

(statearr_10573[(13)] = inst_10479__$1);

(statearr_10573[(15)] = inst_10478__$1);

(statearr_10573[(17)] = inst_10488);

(statearr_10573[(16)] = inst_10481__$1);

return statearr_10573;
})();
var statearr_10574_10608 = state_10537__$1;
(statearr_10574_10608[(2)] = null);

(statearr_10574_10608[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (18))){
var inst_10507 = (state_10537[(2)]);
var state_10537__$1 = state_10537;
var statearr_10575_10609 = state_10537__$1;
(statearr_10575_10609[(2)] = inst_10507);

(statearr_10575_10609[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10538 === (8))){
var inst_10480 = (state_10537[(12)]);
var inst_10481 = (state_10537[(16)]);
var inst_10483 = (inst_10481 < inst_10480);
var inst_10484 = inst_10483;
var state_10537__$1 = state_10537;
if(cljs.core.truth_(inst_10484)){
var statearr_10576_10610 = state_10537__$1;
(statearr_10576_10610[(1)] = (10));

} else {
var statearr_10577_10611 = state_10537__$1;
(statearr_10577_10611[(1)] = (11));

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
});})(c__9347__auto___10583,mults,ensure_mult,p))
;
return ((function (switch__9240__auto__,c__9347__auto___10583,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_10578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10578[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_10578[(1)] = (1));

return statearr_10578;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_10537){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10537);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10579){if((e10579 instanceof Object)){
var ex__9244__auto__ = e10579;
var statearr_10580_10612 = state_10537;
(statearr_10580_10612[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10537);

return cljs.core.cst$kw$recur;
} else {
throw e10579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10613 = state_10537;
state_10537 = G__10613;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_10537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_10537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10583,mults,ensure_mult,p))
})();
var state__9349__auto__ = (function (){var statearr_10581 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10581[(6)] = c__9347__auto___10583);

return statearr_10581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10583,mults,ensure_mult,p))
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
var G__10615 = arguments.length;
switch (G__10615) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__10618 = arguments.length;
switch (G__10618) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__10621 = arguments.length;
switch (G__10621) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
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
var c__9347__auto___10688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10660){
var state_val_10661 = (state_10660[(1)]);
if((state_val_10661 === (7))){
var state_10660__$1 = state_10660;
var statearr_10662_10689 = state_10660__$1;
(statearr_10662_10689[(2)] = null);

(statearr_10662_10689[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (1))){
var state_10660__$1 = state_10660;
var statearr_10663_10690 = state_10660__$1;
(statearr_10663_10690[(2)] = null);

(statearr_10663_10690[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (4))){
var inst_10624 = (state_10660[(7)]);
var inst_10626 = (inst_10624 < cnt);
var state_10660__$1 = state_10660;
if(cljs.core.truth_(inst_10626)){
var statearr_10664_10691 = state_10660__$1;
(statearr_10664_10691[(1)] = (6));

} else {
var statearr_10665_10692 = state_10660__$1;
(statearr_10665_10692[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (15))){
var inst_10656 = (state_10660[(2)]);
var state_10660__$1 = state_10660;
var statearr_10666_10693 = state_10660__$1;
(statearr_10666_10693[(2)] = inst_10656);

(statearr_10666_10693[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (13))){
var inst_10649 = cljs.core.async.close_BANG_(out);
var state_10660__$1 = state_10660;
var statearr_10667_10694 = state_10660__$1;
(statearr_10667_10694[(2)] = inst_10649);

(statearr_10667_10694[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (6))){
var state_10660__$1 = state_10660;
var statearr_10668_10695 = state_10660__$1;
(statearr_10668_10695[(2)] = null);

(statearr_10668_10695[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (3))){
var inst_10658 = (state_10660[(2)]);
var state_10660__$1 = state_10660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10660__$1,inst_10658);
} else {
if((state_val_10661 === (12))){
var inst_10646 = (state_10660[(8)]);
var inst_10646__$1 = (state_10660[(2)]);
var inst_10647 = cljs.core.some(cljs.core.nil_QMARK_,inst_10646__$1);
var state_10660__$1 = (function (){var statearr_10669 = state_10660;
(statearr_10669[(8)] = inst_10646__$1);

return statearr_10669;
})();
if(cljs.core.truth_(inst_10647)){
var statearr_10670_10696 = state_10660__$1;
(statearr_10670_10696[(1)] = (13));

} else {
var statearr_10671_10697 = state_10660__$1;
(statearr_10671_10697[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (2))){
var inst_10623 = cljs.core.reset_BANG_(dctr,cnt);
var inst_10624 = (0);
var state_10660__$1 = (function (){var statearr_10672 = state_10660;
(statearr_10672[(9)] = inst_10623);

(statearr_10672[(7)] = inst_10624);

return statearr_10672;
})();
var statearr_10673_10698 = state_10660__$1;
(statearr_10673_10698[(2)] = null);

(statearr_10673_10698[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (11))){
var inst_10624 = (state_10660[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_10660,(10),Object,null,(9));
var inst_10633 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_10624) : chs__$1.call(null,inst_10624));
var inst_10634 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_10624) : done.call(null,inst_10624));
var inst_10635 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_10633,inst_10634);
var state_10660__$1 = state_10660;
var statearr_10674_10699 = state_10660__$1;
(statearr_10674_10699[(2)] = inst_10635);


cljs.core.async.impl.ioc_helpers.process_exception(state_10660__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (9))){
var inst_10624 = (state_10660[(7)]);
var inst_10637 = (state_10660[(2)]);
var inst_10638 = (inst_10624 + (1));
var inst_10624__$1 = inst_10638;
var state_10660__$1 = (function (){var statearr_10675 = state_10660;
(statearr_10675[(10)] = inst_10637);

(statearr_10675[(7)] = inst_10624__$1);

return statearr_10675;
})();
var statearr_10676_10700 = state_10660__$1;
(statearr_10676_10700[(2)] = null);

(statearr_10676_10700[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (5))){
var inst_10644 = (state_10660[(2)]);
var state_10660__$1 = (function (){var statearr_10677 = state_10660;
(statearr_10677[(11)] = inst_10644);

return statearr_10677;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10660__$1,(12),dchan);
} else {
if((state_val_10661 === (14))){
var inst_10646 = (state_10660[(8)]);
var inst_10651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_10646);
var state_10660__$1 = state_10660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10660__$1,(16),out,inst_10651);
} else {
if((state_val_10661 === (16))){
var inst_10653 = (state_10660[(2)]);
var state_10660__$1 = (function (){var statearr_10678 = state_10660;
(statearr_10678[(12)] = inst_10653);

return statearr_10678;
})();
var statearr_10679_10701 = state_10660__$1;
(statearr_10679_10701[(2)] = null);

(statearr_10679_10701[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (10))){
var inst_10628 = (state_10660[(2)]);
var inst_10629 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_10660__$1 = (function (){var statearr_10680 = state_10660;
(statearr_10680[(13)] = inst_10628);

return statearr_10680;
})();
var statearr_10681_10702 = state_10660__$1;
(statearr_10681_10702[(2)] = inst_10629);


cljs.core.async.impl.ioc_helpers.process_exception(state_10660__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_10661 === (8))){
var inst_10642 = (state_10660[(2)]);
var state_10660__$1 = state_10660;
var statearr_10682_10703 = state_10660__$1;
(statearr_10682_10703[(2)] = inst_10642);

(statearr_10682_10703[(1)] = (5));


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
});})(c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9240__auto__,c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_10683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10683[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_10683[(1)] = (1));

return statearr_10683;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_10660){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10660);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10684){if((e10684 instanceof Object)){
var ex__9244__auto__ = e10684;
var statearr_10685_10704 = state_10660;
(statearr_10685_10704[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10660);

return cljs.core.cst$kw$recur;
} else {
throw e10684;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10705 = state_10660;
state_10660 = G__10705;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_10660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_10660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9349__auto__ = (function (){var statearr_10686 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10686[(6)] = c__9347__auto___10688);

return statearr_10686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10688,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__10708 = arguments.length;
switch (G__10708) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___10762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10762,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10762,out){
return (function (state_10740){
var state_val_10741 = (state_10740[(1)]);
if((state_val_10741 === (7))){
var inst_10720 = (state_10740[(7)]);
var inst_10719 = (state_10740[(8)]);
var inst_10719__$1 = (state_10740[(2)]);
var inst_10720__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10719__$1,(0),null);
var inst_10721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_10719__$1,(1),null);
var inst_10722 = (inst_10720__$1 == null);
var state_10740__$1 = (function (){var statearr_10742 = state_10740;
(statearr_10742[(7)] = inst_10720__$1);

(statearr_10742[(8)] = inst_10719__$1);

(statearr_10742[(9)] = inst_10721);

return statearr_10742;
})();
if(cljs.core.truth_(inst_10722)){
var statearr_10743_10763 = state_10740__$1;
(statearr_10743_10763[(1)] = (8));

} else {
var statearr_10744_10764 = state_10740__$1;
(statearr_10744_10764[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (1))){
var inst_10709 = cljs.core.vec(chs);
var inst_10710 = inst_10709;
var state_10740__$1 = (function (){var statearr_10745 = state_10740;
(statearr_10745[(10)] = inst_10710);

return statearr_10745;
})();
var statearr_10746_10765 = state_10740__$1;
(statearr_10746_10765[(2)] = null);

(statearr_10746_10765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (4))){
var inst_10710 = (state_10740[(10)]);
var state_10740__$1 = state_10740;
return cljs.core.async.ioc_alts_BANG_(state_10740__$1,(7),inst_10710);
} else {
if((state_val_10741 === (6))){
var inst_10736 = (state_10740[(2)]);
var state_10740__$1 = state_10740;
var statearr_10747_10766 = state_10740__$1;
(statearr_10747_10766[(2)] = inst_10736);

(statearr_10747_10766[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (3))){
var inst_10738 = (state_10740[(2)]);
var state_10740__$1 = state_10740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10740__$1,inst_10738);
} else {
if((state_val_10741 === (2))){
var inst_10710 = (state_10740[(10)]);
var inst_10712 = cljs.core.count(inst_10710);
var inst_10713 = (inst_10712 > (0));
var state_10740__$1 = state_10740;
if(cljs.core.truth_(inst_10713)){
var statearr_10749_10767 = state_10740__$1;
(statearr_10749_10767[(1)] = (4));

} else {
var statearr_10750_10768 = state_10740__$1;
(statearr_10750_10768[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (11))){
var inst_10710 = (state_10740[(10)]);
var inst_10729 = (state_10740[(2)]);
var tmp10748 = inst_10710;
var inst_10710__$1 = tmp10748;
var state_10740__$1 = (function (){var statearr_10751 = state_10740;
(statearr_10751[(10)] = inst_10710__$1);

(statearr_10751[(11)] = inst_10729);

return statearr_10751;
})();
var statearr_10752_10769 = state_10740__$1;
(statearr_10752_10769[(2)] = null);

(statearr_10752_10769[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (9))){
var inst_10720 = (state_10740[(7)]);
var state_10740__$1 = state_10740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10740__$1,(11),out,inst_10720);
} else {
if((state_val_10741 === (5))){
var inst_10734 = cljs.core.async.close_BANG_(out);
var state_10740__$1 = state_10740;
var statearr_10753_10770 = state_10740__$1;
(statearr_10753_10770[(2)] = inst_10734);

(statearr_10753_10770[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (10))){
var inst_10732 = (state_10740[(2)]);
var state_10740__$1 = state_10740;
var statearr_10754_10771 = state_10740__$1;
(statearr_10754_10771[(2)] = inst_10732);

(statearr_10754_10771[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10741 === (8))){
var inst_10710 = (state_10740[(10)]);
var inst_10720 = (state_10740[(7)]);
var inst_10719 = (state_10740[(8)]);
var inst_10721 = (state_10740[(9)]);
var inst_10724 = (function (){var cs = inst_10710;
var vec__10715 = inst_10719;
var v = inst_10720;
var c = inst_10721;
return ((function (cs,vec__10715,v,c,inst_10710,inst_10720,inst_10719,inst_10721,state_val_10741,c__9347__auto___10762,out){
return (function (p1__10706_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__10706_SHARP_);
});
;})(cs,vec__10715,v,c,inst_10710,inst_10720,inst_10719,inst_10721,state_val_10741,c__9347__auto___10762,out))
})();
var inst_10725 = cljs.core.filterv(inst_10724,inst_10710);
var inst_10710__$1 = inst_10725;
var state_10740__$1 = (function (){var statearr_10755 = state_10740;
(statearr_10755[(10)] = inst_10710__$1);

return statearr_10755;
})();
var statearr_10756_10772 = state_10740__$1;
(statearr_10756_10772[(2)] = null);

(statearr_10756_10772[(1)] = (2));


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
});})(c__9347__auto___10762,out))
;
return ((function (switch__9240__auto__,c__9347__auto___10762,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_10757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10757[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_10757[(1)] = (1));

return statearr_10757;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_10740){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10740);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10758){if((e10758 instanceof Object)){
var ex__9244__auto__ = e10758;
var statearr_10759_10773 = state_10740;
(statearr_10759_10773[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10740);

return cljs.core.cst$kw$recur;
} else {
throw e10758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10774 = state_10740;
state_10740 = G__10774;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_10740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_10740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10762,out))
})();
var state__9349__auto__ = (function (){var statearr_10760 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10760[(6)] = c__9347__auto___10762);

return statearr_10760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10762,out))
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
var G__10776 = arguments.length;
switch (G__10776) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___10821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10821,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10821,out){
return (function (state_10800){
var state_val_10801 = (state_10800[(1)]);
if((state_val_10801 === (7))){
var inst_10782 = (state_10800[(7)]);
var inst_10782__$1 = (state_10800[(2)]);
var inst_10783 = (inst_10782__$1 == null);
var inst_10784 = cljs.core.not(inst_10783);
var state_10800__$1 = (function (){var statearr_10802 = state_10800;
(statearr_10802[(7)] = inst_10782__$1);

return statearr_10802;
})();
if(inst_10784){
var statearr_10803_10822 = state_10800__$1;
(statearr_10803_10822[(1)] = (8));

} else {
var statearr_10804_10823 = state_10800__$1;
(statearr_10804_10823[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (1))){
var inst_10777 = (0);
var state_10800__$1 = (function (){var statearr_10805 = state_10800;
(statearr_10805[(8)] = inst_10777);

return statearr_10805;
})();
var statearr_10806_10824 = state_10800__$1;
(statearr_10806_10824[(2)] = null);

(statearr_10806_10824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (4))){
var state_10800__$1 = state_10800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10800__$1,(7),ch);
} else {
if((state_val_10801 === (6))){
var inst_10795 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10807_10825 = state_10800__$1;
(statearr_10807_10825[(2)] = inst_10795);

(statearr_10807_10825[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (3))){
var inst_10797 = (state_10800[(2)]);
var inst_10798 = cljs.core.async.close_BANG_(out);
var state_10800__$1 = (function (){var statearr_10808 = state_10800;
(statearr_10808[(9)] = inst_10797);

return statearr_10808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_10800__$1,inst_10798);
} else {
if((state_val_10801 === (2))){
var inst_10777 = (state_10800[(8)]);
var inst_10779 = (inst_10777 < n);
var state_10800__$1 = state_10800;
if(cljs.core.truth_(inst_10779)){
var statearr_10809_10826 = state_10800__$1;
(statearr_10809_10826[(1)] = (4));

} else {
var statearr_10810_10827 = state_10800__$1;
(statearr_10810_10827[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (11))){
var inst_10777 = (state_10800[(8)]);
var inst_10787 = (state_10800[(2)]);
var inst_10788 = (inst_10777 + (1));
var inst_10777__$1 = inst_10788;
var state_10800__$1 = (function (){var statearr_10811 = state_10800;
(statearr_10811[(10)] = inst_10787);

(statearr_10811[(8)] = inst_10777__$1);

return statearr_10811;
})();
var statearr_10812_10828 = state_10800__$1;
(statearr_10812_10828[(2)] = null);

(statearr_10812_10828[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (9))){
var state_10800__$1 = state_10800;
var statearr_10813_10829 = state_10800__$1;
(statearr_10813_10829[(2)] = null);

(statearr_10813_10829[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (5))){
var state_10800__$1 = state_10800;
var statearr_10814_10830 = state_10800__$1;
(statearr_10814_10830[(2)] = null);

(statearr_10814_10830[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (10))){
var inst_10792 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10815_10831 = state_10800__$1;
(statearr_10815_10831[(2)] = inst_10792);

(statearr_10815_10831[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10801 === (8))){
var inst_10782 = (state_10800[(7)]);
var state_10800__$1 = state_10800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10800__$1,(11),out,inst_10782);
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
});})(c__9347__auto___10821,out))
;
return ((function (switch__9240__auto__,c__9347__auto___10821,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_10816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10816[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_10816[(1)] = (1));

return statearr_10816;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_10800){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10800);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10817){if((e10817 instanceof Object)){
var ex__9244__auto__ = e10817;
var statearr_10818_10832 = state_10800;
(statearr_10818_10832[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10800);

return cljs.core.cst$kw$recur;
} else {
throw e10817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10833 = state_10800;
state_10800 = G__10833;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_10800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_10800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10821,out))
})();
var state__9349__auto__ = (function (){var statearr_10819 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10819[(6)] = c__9347__auto___10821);

return statearr_10819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10821,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10835 = (function (f,ch,meta10836){
this.f = f;
this.ch = ch;
this.meta10836 = meta10836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10837,meta10836__$1){
var self__ = this;
var _10837__$1 = this;
return (new cljs.core.async.t_cljs$core$async10835(self__.f,self__.ch,meta10836__$1));
});

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10837){
var self__ = this;
var _10837__$1 = this;
return self__.meta10836;
});

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10838 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10838 = (function (f,ch,meta10836,_,fn1,meta10839){
this.f = f;
this.ch = ch;
this.meta10836 = meta10836;
this._ = _;
this.fn1 = fn1;
this.meta10839 = meta10839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_10840,meta10839__$1){
var self__ = this;
var _10840__$1 = this;
return (new cljs.core.async.t_cljs$core$async10838(self__.f,self__.ch,self__.meta10836,self__._,self__.fn1,meta10839__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_10840){
var self__ = this;
var _10840__$1 = this;
return self__.meta10839;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__10834_SHARP_){
var G__10841 = (((p1__10834_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10834_SHARP_) : self__.f.call(null,p1__10834_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__10841) : f1.call(null,G__10841));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10836,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async10835], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta10839], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async10838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10838";

cljs.core.async.t_cljs$core$async10838.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10838");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10838.
 */
cljs.core.async.__GT_t_cljs$core$async10838 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10838(f__$1,ch__$1,meta10836__$1,___$2,fn1__$1,meta10839){
return (new cljs.core.async.t_cljs$core$async10838(f__$1,ch__$1,meta10836__$1,___$2,fn1__$1,meta10839));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async10838(self__.f,self__.ch,self__.meta10836,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__10842 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__10842) : self__.f.call(null,G__10842));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10835.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async10835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10836], null);
});

cljs.core.async.t_cljs$core$async10835.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10835";

cljs.core.async.t_cljs$core$async10835.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10835");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10835.
 */
cljs.core.async.__GT_t_cljs$core$async10835 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async10835(f__$1,ch__$1,meta10836){
return (new cljs.core.async.t_cljs$core$async10835(f__$1,ch__$1,meta10836));
});

}

return (new cljs.core.async.t_cljs$core$async10835(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10843 = (function (f,ch,meta10844){
this.f = f;
this.ch = ch;
this.meta10844 = meta10844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10845,meta10844__$1){
var self__ = this;
var _10845__$1 = this;
return (new cljs.core.async.t_cljs$core$async10843(self__.f,self__.ch,meta10844__$1));
});

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10845){
var self__ = this;
var _10845__$1 = this;
return self__.meta10844;
});

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async10843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10844], null);
});

cljs.core.async.t_cljs$core$async10843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10843";

cljs.core.async.t_cljs$core$async10843.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10843");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10843.
 */
cljs.core.async.__GT_t_cljs$core$async10843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async10843(f__$1,ch__$1,meta10844){
return (new cljs.core.async.t_cljs$core$async10843(f__$1,ch__$1,meta10844));
});

}

return (new cljs.core.async.t_cljs$core$async10843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async10846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10846 = (function (p,ch,meta10847){
this.p = p;
this.ch = ch;
this.meta10847 = meta10847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10848,meta10847__$1){
var self__ = this;
var _10848__$1 = this;
return (new cljs.core.async.t_cljs$core$async10846(self__.p,self__.ch,meta10847__$1));
});

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10848){
var self__ = this;
var _10848__$1 = this;
return self__.meta10847;
});

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async10846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta10847], null);
});

cljs.core.async.t_cljs$core$async10846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10846";

cljs.core.async.t_cljs$core$async10846.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async10846");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async10846.
 */
cljs.core.async.__GT_t_cljs$core$async10846 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async10846(p__$1,ch__$1,meta10847){
return (new cljs.core.async.t_cljs$core$async10846(p__$1,ch__$1,meta10847));
});

}

return (new cljs.core.async.t_cljs$core$async10846(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__10850 = arguments.length;
switch (G__10850) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___10890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___10890,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___10890,out){
return (function (state_10871){
var state_val_10872 = (state_10871[(1)]);
if((state_val_10872 === (7))){
var inst_10867 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
var statearr_10873_10891 = state_10871__$1;
(statearr_10873_10891[(2)] = inst_10867);

(statearr_10873_10891[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (1))){
var state_10871__$1 = state_10871;
var statearr_10874_10892 = state_10871__$1;
(statearr_10874_10892[(2)] = null);

(statearr_10874_10892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (4))){
var inst_10853 = (state_10871[(7)]);
var inst_10853__$1 = (state_10871[(2)]);
var inst_10854 = (inst_10853__$1 == null);
var state_10871__$1 = (function (){var statearr_10875 = state_10871;
(statearr_10875[(7)] = inst_10853__$1);

return statearr_10875;
})();
if(cljs.core.truth_(inst_10854)){
var statearr_10876_10893 = state_10871__$1;
(statearr_10876_10893[(1)] = (5));

} else {
var statearr_10877_10894 = state_10871__$1;
(statearr_10877_10894[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (6))){
var inst_10853 = (state_10871[(7)]);
var inst_10858 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10853) : p.call(null,inst_10853));
var state_10871__$1 = state_10871;
if(cljs.core.truth_(inst_10858)){
var statearr_10878_10895 = state_10871__$1;
(statearr_10878_10895[(1)] = (8));

} else {
var statearr_10879_10896 = state_10871__$1;
(statearr_10879_10896[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (3))){
var inst_10869 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10871__$1,inst_10869);
} else {
if((state_val_10872 === (2))){
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10871__$1,(4),ch);
} else {
if((state_val_10872 === (11))){
var inst_10861 = (state_10871[(2)]);
var state_10871__$1 = state_10871;
var statearr_10880_10897 = state_10871__$1;
(statearr_10880_10897[(2)] = inst_10861);

(statearr_10880_10897[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (9))){
var state_10871__$1 = state_10871;
var statearr_10881_10898 = state_10871__$1;
(statearr_10881_10898[(2)] = null);

(statearr_10881_10898[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (5))){
var inst_10856 = cljs.core.async.close_BANG_(out);
var state_10871__$1 = state_10871;
var statearr_10882_10899 = state_10871__$1;
(statearr_10882_10899[(2)] = inst_10856);

(statearr_10882_10899[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (10))){
var inst_10864 = (state_10871[(2)]);
var state_10871__$1 = (function (){var statearr_10883 = state_10871;
(statearr_10883[(8)] = inst_10864);

return statearr_10883;
})();
var statearr_10884_10900 = state_10871__$1;
(statearr_10884_10900[(2)] = null);

(statearr_10884_10900[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10872 === (8))){
var inst_10853 = (state_10871[(7)]);
var state_10871__$1 = state_10871;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10871__$1,(11),out,inst_10853);
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
});})(c__9347__auto___10890,out))
;
return ((function (switch__9240__auto__,c__9347__auto___10890,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_10885 = [null,null,null,null,null,null,null,null,null];
(statearr_10885[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_10885[(1)] = (1));

return statearr_10885;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_10871){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10871);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e10886){if((e10886 instanceof Object)){
var ex__9244__auto__ = e10886;
var statearr_10887_10901 = state_10871;
(statearr_10887_10901[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10871);

return cljs.core.cst$kw$recur;
} else {
throw e10886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__10902 = state_10871;
state_10871 = G__10902;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_10871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_10871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___10890,out))
})();
var state__9349__auto__ = (function (){var statearr_10888 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_10888[(6)] = c__9347__auto___10890);

return statearr_10888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___10890,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__10904 = arguments.length;
switch (G__10904) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__9347__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto__){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto__){
return (function (state_10967){
var state_val_10968 = (state_10967[(1)]);
if((state_val_10968 === (7))){
var inst_10963 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10969_11007 = state_10967__$1;
(statearr_10969_11007[(2)] = inst_10963);

(statearr_10969_11007[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (20))){
var inst_10933 = (state_10967[(7)]);
var inst_10944 = (state_10967[(2)]);
var inst_10945 = cljs.core.next(inst_10933);
var inst_10919 = inst_10945;
var inst_10920 = null;
var inst_10921 = (0);
var inst_10922 = (0);
var state_10967__$1 = (function (){var statearr_10970 = state_10967;
(statearr_10970[(8)] = inst_10921);

(statearr_10970[(9)] = inst_10920);

(statearr_10970[(10)] = inst_10944);

(statearr_10970[(11)] = inst_10919);

(statearr_10970[(12)] = inst_10922);

return statearr_10970;
})();
var statearr_10971_11008 = state_10967__$1;
(statearr_10971_11008[(2)] = null);

(statearr_10971_11008[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (1))){
var state_10967__$1 = state_10967;
var statearr_10972_11009 = state_10967__$1;
(statearr_10972_11009[(2)] = null);

(statearr_10972_11009[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (4))){
var inst_10908 = (state_10967[(13)]);
var inst_10908__$1 = (state_10967[(2)]);
var inst_10909 = (inst_10908__$1 == null);
var state_10967__$1 = (function (){var statearr_10973 = state_10967;
(statearr_10973[(13)] = inst_10908__$1);

return statearr_10973;
})();
if(cljs.core.truth_(inst_10909)){
var statearr_10974_11010 = state_10967__$1;
(statearr_10974_11010[(1)] = (5));

} else {
var statearr_10975_11011 = state_10967__$1;
(statearr_10975_11011[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (15))){
var state_10967__$1 = state_10967;
var statearr_10979_11012 = state_10967__$1;
(statearr_10979_11012[(2)] = null);

(statearr_10979_11012[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (21))){
var state_10967__$1 = state_10967;
var statearr_10980_11013 = state_10967__$1;
(statearr_10980_11013[(2)] = null);

(statearr_10980_11013[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (13))){
var inst_10921 = (state_10967[(8)]);
var inst_10920 = (state_10967[(9)]);
var inst_10919 = (state_10967[(11)]);
var inst_10922 = (state_10967[(12)]);
var inst_10929 = (state_10967[(2)]);
var inst_10930 = (inst_10922 + (1));
var tmp10976 = inst_10921;
var tmp10977 = inst_10920;
var tmp10978 = inst_10919;
var inst_10919__$1 = tmp10978;
var inst_10920__$1 = tmp10977;
var inst_10921__$1 = tmp10976;
var inst_10922__$1 = inst_10930;
var state_10967__$1 = (function (){var statearr_10981 = state_10967;
(statearr_10981[(8)] = inst_10921__$1);

(statearr_10981[(14)] = inst_10929);

(statearr_10981[(9)] = inst_10920__$1);

(statearr_10981[(11)] = inst_10919__$1);

(statearr_10981[(12)] = inst_10922__$1);

return statearr_10981;
})();
var statearr_10982_11014 = state_10967__$1;
(statearr_10982_11014[(2)] = null);

(statearr_10982_11014[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (22))){
var state_10967__$1 = state_10967;
var statearr_10983_11015 = state_10967__$1;
(statearr_10983_11015[(2)] = null);

(statearr_10983_11015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (6))){
var inst_10908 = (state_10967[(13)]);
var inst_10917 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10908) : f.call(null,inst_10908));
var inst_10918 = cljs.core.seq(inst_10917);
var inst_10919 = inst_10918;
var inst_10920 = null;
var inst_10921 = (0);
var inst_10922 = (0);
var state_10967__$1 = (function (){var statearr_10984 = state_10967;
(statearr_10984[(8)] = inst_10921);

(statearr_10984[(9)] = inst_10920);

(statearr_10984[(11)] = inst_10919);

(statearr_10984[(12)] = inst_10922);

return statearr_10984;
})();
var statearr_10985_11016 = state_10967__$1;
(statearr_10985_11016[(2)] = null);

(statearr_10985_11016[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (17))){
var inst_10933 = (state_10967[(7)]);
var inst_10937 = cljs.core.chunk_first(inst_10933);
var inst_10938 = cljs.core.chunk_rest(inst_10933);
var inst_10939 = cljs.core.count(inst_10937);
var inst_10919 = inst_10938;
var inst_10920 = inst_10937;
var inst_10921 = inst_10939;
var inst_10922 = (0);
var state_10967__$1 = (function (){var statearr_10986 = state_10967;
(statearr_10986[(8)] = inst_10921);

(statearr_10986[(9)] = inst_10920);

(statearr_10986[(11)] = inst_10919);

(statearr_10986[(12)] = inst_10922);

return statearr_10986;
})();
var statearr_10987_11017 = state_10967__$1;
(statearr_10987_11017[(2)] = null);

(statearr_10987_11017[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (3))){
var inst_10965 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10967__$1,inst_10965);
} else {
if((state_val_10968 === (12))){
var inst_10953 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10988_11018 = state_10967__$1;
(statearr_10988_11018[(2)] = inst_10953);

(statearr_10988_11018[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (2))){
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10967__$1,(4),in$);
} else {
if((state_val_10968 === (23))){
var inst_10961 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10989_11019 = state_10967__$1;
(statearr_10989_11019[(2)] = inst_10961);

(statearr_10989_11019[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (19))){
var inst_10948 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_10990_11020 = state_10967__$1;
(statearr_10990_11020[(2)] = inst_10948);

(statearr_10990_11020[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (11))){
var inst_10933 = (state_10967[(7)]);
var inst_10919 = (state_10967[(11)]);
var inst_10933__$1 = cljs.core.seq(inst_10919);
var state_10967__$1 = (function (){var statearr_10991 = state_10967;
(statearr_10991[(7)] = inst_10933__$1);

return statearr_10991;
})();
if(inst_10933__$1){
var statearr_10992_11021 = state_10967__$1;
(statearr_10992_11021[(1)] = (14));

} else {
var statearr_10993_11022 = state_10967__$1;
(statearr_10993_11022[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (9))){
var inst_10955 = (state_10967[(2)]);
var inst_10956 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_10967__$1 = (function (){var statearr_10994 = state_10967;
(statearr_10994[(15)] = inst_10955);

return statearr_10994;
})();
if(cljs.core.truth_(inst_10956)){
var statearr_10995_11023 = state_10967__$1;
(statearr_10995_11023[(1)] = (21));

} else {
var statearr_10996_11024 = state_10967__$1;
(statearr_10996_11024[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (5))){
var inst_10911 = cljs.core.async.close_BANG_(out);
var state_10967__$1 = state_10967;
var statearr_10997_11025 = state_10967__$1;
(statearr_10997_11025[(2)] = inst_10911);

(statearr_10997_11025[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (14))){
var inst_10933 = (state_10967[(7)]);
var inst_10935 = cljs.core.chunked_seq_QMARK_(inst_10933);
var state_10967__$1 = state_10967;
if(inst_10935){
var statearr_10998_11026 = state_10967__$1;
(statearr_10998_11026[(1)] = (17));

} else {
var statearr_10999_11027 = state_10967__$1;
(statearr_10999_11027[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (16))){
var inst_10951 = (state_10967[(2)]);
var state_10967__$1 = state_10967;
var statearr_11000_11028 = state_10967__$1;
(statearr_11000_11028[(2)] = inst_10951);

(statearr_11000_11028[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_10968 === (10))){
var inst_10920 = (state_10967[(9)]);
var inst_10922 = (state_10967[(12)]);
var inst_10927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10920,inst_10922);
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10967__$1,(13),out,inst_10927);
} else {
if((state_val_10968 === (18))){
var inst_10933 = (state_10967[(7)]);
var inst_10942 = cljs.core.first(inst_10933);
var state_10967__$1 = state_10967;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10967__$1,(20),out,inst_10942);
} else {
if((state_val_10968 === (8))){
var inst_10921 = (state_10967[(8)]);
var inst_10922 = (state_10967[(12)]);
var inst_10924 = (inst_10922 < inst_10921);
var inst_10925 = inst_10924;
var state_10967__$1 = state_10967;
if(cljs.core.truth_(inst_10925)){
var statearr_11001_11029 = state_10967__$1;
(statearr_11001_11029[(1)] = (10));

} else {
var statearr_11002_11030 = state_10967__$1;
(statearr_11002_11030[(1)] = (11));

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
});})(c__9347__auto__))
;
return ((function (switch__9240__auto__,c__9347__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____0 = (function (){
var statearr_11003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11003[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__);

(statearr_11003[(1)] = (1));

return statearr_11003;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____1 = (function (state_10967){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_10967);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e11004){if((e11004 instanceof Object)){
var ex__9244__auto__ = e11004;
var statearr_11005_11031 = state_10967;
(statearr_11005_11031[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10967);

return cljs.core.cst$kw$recur;
} else {
throw e11004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__11032 = state_10967;
state_10967 = G__11032;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__ = function(state_10967){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____1.call(this,state_10967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9241__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto__))
})();
var state__9349__auto__ = (function (){var statearr_11006 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_11006[(6)] = c__9347__auto__);

return statearr_11006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto__))
);

return c__9347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__11034 = arguments.length;
switch (G__11034) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__11037 = arguments.length;
switch (G__11037) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__11040 = arguments.length;
switch (G__11040) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___11087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___11087,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___11087,out){
return (function (state_11064){
var state_val_11065 = (state_11064[(1)]);
if((state_val_11065 === (7))){
var inst_11059 = (state_11064[(2)]);
var state_11064__$1 = state_11064;
var statearr_11066_11088 = state_11064__$1;
(statearr_11066_11088[(2)] = inst_11059);

(statearr_11066_11088[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (1))){
var inst_11041 = null;
var state_11064__$1 = (function (){var statearr_11067 = state_11064;
(statearr_11067[(7)] = inst_11041);

return statearr_11067;
})();
var statearr_11068_11089 = state_11064__$1;
(statearr_11068_11089[(2)] = null);

(statearr_11068_11089[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (4))){
var inst_11044 = (state_11064[(8)]);
var inst_11044__$1 = (state_11064[(2)]);
var inst_11045 = (inst_11044__$1 == null);
var inst_11046 = cljs.core.not(inst_11045);
var state_11064__$1 = (function (){var statearr_11069 = state_11064;
(statearr_11069[(8)] = inst_11044__$1);

return statearr_11069;
})();
if(inst_11046){
var statearr_11070_11090 = state_11064__$1;
(statearr_11070_11090[(1)] = (5));

} else {
var statearr_11071_11091 = state_11064__$1;
(statearr_11071_11091[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (6))){
var state_11064__$1 = state_11064;
var statearr_11072_11092 = state_11064__$1;
(statearr_11072_11092[(2)] = null);

(statearr_11072_11092[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (3))){
var inst_11061 = (state_11064[(2)]);
var inst_11062 = cljs.core.async.close_BANG_(out);
var state_11064__$1 = (function (){var statearr_11073 = state_11064;
(statearr_11073[(9)] = inst_11061);

return statearr_11073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_11064__$1,inst_11062);
} else {
if((state_val_11065 === (2))){
var state_11064__$1 = state_11064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11064__$1,(4),ch);
} else {
if((state_val_11065 === (11))){
var inst_11044 = (state_11064[(8)]);
var inst_11053 = (state_11064[(2)]);
var inst_11041 = inst_11044;
var state_11064__$1 = (function (){var statearr_11074 = state_11064;
(statearr_11074[(10)] = inst_11053);

(statearr_11074[(7)] = inst_11041);

return statearr_11074;
})();
var statearr_11075_11093 = state_11064__$1;
(statearr_11075_11093[(2)] = null);

(statearr_11075_11093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (9))){
var inst_11044 = (state_11064[(8)]);
var state_11064__$1 = state_11064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11064__$1,(11),out,inst_11044);
} else {
if((state_val_11065 === (5))){
var inst_11041 = (state_11064[(7)]);
var inst_11044 = (state_11064[(8)]);
var inst_11048 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11044,inst_11041);
var state_11064__$1 = state_11064;
if(inst_11048){
var statearr_11077_11094 = state_11064__$1;
(statearr_11077_11094[(1)] = (8));

} else {
var statearr_11078_11095 = state_11064__$1;
(statearr_11078_11095[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (10))){
var inst_11056 = (state_11064[(2)]);
var state_11064__$1 = state_11064;
var statearr_11079_11096 = state_11064__$1;
(statearr_11079_11096[(2)] = inst_11056);

(statearr_11079_11096[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11065 === (8))){
var inst_11041 = (state_11064[(7)]);
var tmp11076 = inst_11041;
var inst_11041__$1 = tmp11076;
var state_11064__$1 = (function (){var statearr_11080 = state_11064;
(statearr_11080[(7)] = inst_11041__$1);

return statearr_11080;
})();
var statearr_11081_11097 = state_11064__$1;
(statearr_11081_11097[(2)] = null);

(statearr_11081_11097[(1)] = (2));


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
});})(c__9347__auto___11087,out))
;
return ((function (switch__9240__auto__,c__9347__auto___11087,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_11082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11082[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_11082[(1)] = (1));

return statearr_11082;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_11064){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_11064);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e11083){if((e11083 instanceof Object)){
var ex__9244__auto__ = e11083;
var statearr_11084_11098 = state_11064;
(statearr_11084_11098[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11064);

return cljs.core.cst$kw$recur;
} else {
throw e11083;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__11099 = state_11064;
state_11064 = G__11099;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_11064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_11064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___11087,out))
})();
var state__9349__auto__ = (function (){var statearr_11085 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_11085[(6)] = c__9347__auto___11087);

return statearr_11085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___11087,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__11101 = arguments.length;
switch (G__11101) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___11167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___11167,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___11167,out){
return (function (state_11139){
var state_val_11140 = (state_11139[(1)]);
if((state_val_11140 === (7))){
var inst_11135 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
var statearr_11141_11168 = state_11139__$1;
(statearr_11141_11168[(2)] = inst_11135);

(statearr_11141_11168[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (1))){
var inst_11102 = (new Array(n));
var inst_11103 = inst_11102;
var inst_11104 = (0);
var state_11139__$1 = (function (){var statearr_11142 = state_11139;
(statearr_11142[(7)] = inst_11103);

(statearr_11142[(8)] = inst_11104);

return statearr_11142;
})();
var statearr_11143_11169 = state_11139__$1;
(statearr_11143_11169[(2)] = null);

(statearr_11143_11169[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (4))){
var inst_11107 = (state_11139[(9)]);
var inst_11107__$1 = (state_11139[(2)]);
var inst_11108 = (inst_11107__$1 == null);
var inst_11109 = cljs.core.not(inst_11108);
var state_11139__$1 = (function (){var statearr_11144 = state_11139;
(statearr_11144[(9)] = inst_11107__$1);

return statearr_11144;
})();
if(inst_11109){
var statearr_11145_11170 = state_11139__$1;
(statearr_11145_11170[(1)] = (5));

} else {
var statearr_11146_11171 = state_11139__$1;
(statearr_11146_11171[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (15))){
var inst_11129 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
var statearr_11147_11172 = state_11139__$1;
(statearr_11147_11172[(2)] = inst_11129);

(statearr_11147_11172[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (13))){
var state_11139__$1 = state_11139;
var statearr_11148_11173 = state_11139__$1;
(statearr_11148_11173[(2)] = null);

(statearr_11148_11173[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (6))){
var inst_11104 = (state_11139[(8)]);
var inst_11125 = (inst_11104 > (0));
var state_11139__$1 = state_11139;
if(cljs.core.truth_(inst_11125)){
var statearr_11149_11174 = state_11139__$1;
(statearr_11149_11174[(1)] = (12));

} else {
var statearr_11150_11175 = state_11139__$1;
(statearr_11150_11175[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (3))){
var inst_11137 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11139__$1,inst_11137);
} else {
if((state_val_11140 === (12))){
var inst_11103 = (state_11139[(7)]);
var inst_11127 = cljs.core.vec(inst_11103);
var state_11139__$1 = state_11139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11139__$1,(15),out,inst_11127);
} else {
if((state_val_11140 === (2))){
var state_11139__$1 = state_11139;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11139__$1,(4),ch);
} else {
if((state_val_11140 === (11))){
var inst_11119 = (state_11139[(2)]);
var inst_11120 = (new Array(n));
var inst_11103 = inst_11120;
var inst_11104 = (0);
var state_11139__$1 = (function (){var statearr_11151 = state_11139;
(statearr_11151[(7)] = inst_11103);

(statearr_11151[(10)] = inst_11119);

(statearr_11151[(8)] = inst_11104);

return statearr_11151;
})();
var statearr_11152_11176 = state_11139__$1;
(statearr_11152_11176[(2)] = null);

(statearr_11152_11176[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (9))){
var inst_11103 = (state_11139[(7)]);
var inst_11117 = cljs.core.vec(inst_11103);
var state_11139__$1 = state_11139;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11139__$1,(11),out,inst_11117);
} else {
if((state_val_11140 === (5))){
var inst_11103 = (state_11139[(7)]);
var inst_11107 = (state_11139[(9)]);
var inst_11112 = (state_11139[(11)]);
var inst_11104 = (state_11139[(8)]);
var inst_11111 = (inst_11103[inst_11104] = inst_11107);
var inst_11112__$1 = (inst_11104 + (1));
var inst_11113 = (inst_11112__$1 < n);
var state_11139__$1 = (function (){var statearr_11153 = state_11139;
(statearr_11153[(12)] = inst_11111);

(statearr_11153[(11)] = inst_11112__$1);

return statearr_11153;
})();
if(cljs.core.truth_(inst_11113)){
var statearr_11154_11177 = state_11139__$1;
(statearr_11154_11177[(1)] = (8));

} else {
var statearr_11155_11178 = state_11139__$1;
(statearr_11155_11178[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (14))){
var inst_11132 = (state_11139[(2)]);
var inst_11133 = cljs.core.async.close_BANG_(out);
var state_11139__$1 = (function (){var statearr_11157 = state_11139;
(statearr_11157[(13)] = inst_11132);

return statearr_11157;
})();
var statearr_11158_11179 = state_11139__$1;
(statearr_11158_11179[(2)] = inst_11133);

(statearr_11158_11179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (10))){
var inst_11123 = (state_11139[(2)]);
var state_11139__$1 = state_11139;
var statearr_11159_11180 = state_11139__$1;
(statearr_11159_11180[(2)] = inst_11123);

(statearr_11159_11180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11140 === (8))){
var inst_11103 = (state_11139[(7)]);
var inst_11112 = (state_11139[(11)]);
var tmp11156 = inst_11103;
var inst_11103__$1 = tmp11156;
var inst_11104 = inst_11112;
var state_11139__$1 = (function (){var statearr_11160 = state_11139;
(statearr_11160[(7)] = inst_11103__$1);

(statearr_11160[(8)] = inst_11104);

return statearr_11160;
})();
var statearr_11161_11181 = state_11139__$1;
(statearr_11161_11181[(2)] = null);

(statearr_11161_11181[(1)] = (2));


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
});})(c__9347__auto___11167,out))
;
return ((function (switch__9240__auto__,c__9347__auto___11167,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_11162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11162[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_11162[(1)] = (1));

return statearr_11162;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_11139){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_11139);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e11163){if((e11163 instanceof Object)){
var ex__9244__auto__ = e11163;
var statearr_11164_11182 = state_11139;
(statearr_11164_11182[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11139);

return cljs.core.cst$kw$recur;
} else {
throw e11163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__11183 = state_11139;
state_11139 = G__11183;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_11139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_11139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___11167,out))
})();
var state__9349__auto__ = (function (){var statearr_11165 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_11165[(6)] = c__9347__auto___11167);

return statearr_11165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___11167,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__11185 = arguments.length;
switch (G__11185) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__9347__auto___11255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__9347__auto___11255,out){
return (function (){
var f__9348__auto__ = (function (){var switch__9240__auto__ = ((function (c__9347__auto___11255,out){
return (function (state_11227){
var state_val_11228 = (state_11227[(1)]);
if((state_val_11228 === (7))){
var inst_11223 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
var statearr_11229_11256 = state_11227__$1;
(statearr_11229_11256[(2)] = inst_11223);

(statearr_11229_11256[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (1))){
var inst_11186 = [];
var inst_11187 = inst_11186;
var inst_11188 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_11227__$1 = (function (){var statearr_11230 = state_11227;
(statearr_11230[(7)] = inst_11188);

(statearr_11230[(8)] = inst_11187);

return statearr_11230;
})();
var statearr_11231_11257 = state_11227__$1;
(statearr_11231_11257[(2)] = null);

(statearr_11231_11257[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (4))){
var inst_11191 = (state_11227[(9)]);
var inst_11191__$1 = (state_11227[(2)]);
var inst_11192 = (inst_11191__$1 == null);
var inst_11193 = cljs.core.not(inst_11192);
var state_11227__$1 = (function (){var statearr_11232 = state_11227;
(statearr_11232[(9)] = inst_11191__$1);

return statearr_11232;
})();
if(inst_11193){
var statearr_11233_11258 = state_11227__$1;
(statearr_11233_11258[(1)] = (5));

} else {
var statearr_11234_11259 = state_11227__$1;
(statearr_11234_11259[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (15))){
var inst_11217 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
var statearr_11235_11260 = state_11227__$1;
(statearr_11235_11260[(2)] = inst_11217);

(statearr_11235_11260[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (13))){
var state_11227__$1 = state_11227;
var statearr_11236_11261 = state_11227__$1;
(statearr_11236_11261[(2)] = null);

(statearr_11236_11261[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (6))){
var inst_11187 = (state_11227[(8)]);
var inst_11212 = inst_11187.length;
var inst_11213 = (inst_11212 > (0));
var state_11227__$1 = state_11227;
if(cljs.core.truth_(inst_11213)){
var statearr_11237_11262 = state_11227__$1;
(statearr_11237_11262[(1)] = (12));

} else {
var statearr_11238_11263 = state_11227__$1;
(statearr_11238_11263[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (3))){
var inst_11225 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11227__$1,inst_11225);
} else {
if((state_val_11228 === (12))){
var inst_11187 = (state_11227[(8)]);
var inst_11215 = cljs.core.vec(inst_11187);
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11227__$1,(15),out,inst_11215);
} else {
if((state_val_11228 === (2))){
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11227__$1,(4),ch);
} else {
if((state_val_11228 === (11))){
var inst_11195 = (state_11227[(10)]);
var inst_11191 = (state_11227[(9)]);
var inst_11205 = (state_11227[(2)]);
var inst_11206 = [];
var inst_11207 = inst_11206.push(inst_11191);
var inst_11187 = inst_11206;
var inst_11188 = inst_11195;
var state_11227__$1 = (function (){var statearr_11239 = state_11227;
(statearr_11239[(7)] = inst_11188);

(statearr_11239[(11)] = inst_11205);

(statearr_11239[(12)] = inst_11207);

(statearr_11239[(8)] = inst_11187);

return statearr_11239;
})();
var statearr_11240_11264 = state_11227__$1;
(statearr_11240_11264[(2)] = null);

(statearr_11240_11264[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (9))){
var inst_11187 = (state_11227[(8)]);
var inst_11203 = cljs.core.vec(inst_11187);
var state_11227__$1 = state_11227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11227__$1,(11),out,inst_11203);
} else {
if((state_val_11228 === (5))){
var inst_11188 = (state_11227[(7)]);
var inst_11195 = (state_11227[(10)]);
var inst_11191 = (state_11227[(9)]);
var inst_11195__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_11191) : f.call(null,inst_11191));
var inst_11196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11195__$1,inst_11188);
var inst_11197 = cljs.core.keyword_identical_QMARK_(inst_11188,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_11198 = ((inst_11196) || (inst_11197));
var state_11227__$1 = (function (){var statearr_11241 = state_11227;
(statearr_11241[(10)] = inst_11195__$1);

return statearr_11241;
})();
if(cljs.core.truth_(inst_11198)){
var statearr_11242_11265 = state_11227__$1;
(statearr_11242_11265[(1)] = (8));

} else {
var statearr_11243_11266 = state_11227__$1;
(statearr_11243_11266[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (14))){
var inst_11220 = (state_11227[(2)]);
var inst_11221 = cljs.core.async.close_BANG_(out);
var state_11227__$1 = (function (){var statearr_11245 = state_11227;
(statearr_11245[(13)] = inst_11220);

return statearr_11245;
})();
var statearr_11246_11267 = state_11227__$1;
(statearr_11246_11267[(2)] = inst_11221);

(statearr_11246_11267[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (10))){
var inst_11210 = (state_11227[(2)]);
var state_11227__$1 = state_11227;
var statearr_11247_11268 = state_11227__$1;
(statearr_11247_11268[(2)] = inst_11210);

(statearr_11247_11268[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_11228 === (8))){
var inst_11187 = (state_11227[(8)]);
var inst_11195 = (state_11227[(10)]);
var inst_11191 = (state_11227[(9)]);
var inst_11200 = inst_11187.push(inst_11191);
var tmp11244 = inst_11187;
var inst_11187__$1 = tmp11244;
var inst_11188 = inst_11195;
var state_11227__$1 = (function (){var statearr_11248 = state_11227;
(statearr_11248[(7)] = inst_11188);

(statearr_11248[(14)] = inst_11200);

(statearr_11248[(8)] = inst_11187__$1);

return statearr_11248;
})();
var statearr_11249_11269 = state_11227__$1;
(statearr_11249_11269[(2)] = null);

(statearr_11249_11269[(1)] = (2));


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
});})(c__9347__auto___11255,out))
;
return ((function (switch__9240__auto__,c__9347__auto___11255,out){
return (function() {
var cljs$core$async$state_machine__9241__auto__ = null;
var cljs$core$async$state_machine__9241__auto____0 = (function (){
var statearr_11250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11250[(0)] = cljs$core$async$state_machine__9241__auto__);

(statearr_11250[(1)] = (1));

return statearr_11250;
});
var cljs$core$async$state_machine__9241__auto____1 = (function (state_11227){
while(true){
var ret_value__9242__auto__ = (function (){try{while(true){
var result__9243__auto__ = switch__9240__auto__(state_11227);
if(cljs.core.keyword_identical_QMARK_(result__9243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__9243__auto__;
}
break;
}
}catch (e11251){if((e11251 instanceof Object)){
var ex__9244__auto__ = e11251;
var statearr_11252_11270 = state_11227;
(statearr_11252_11270[(5)] = ex__9244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11227);

return cljs.core.cst$kw$recur;
} else {
throw e11251;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__9242__auto__,cljs.core.cst$kw$recur)){
var G__11271 = state_11227;
state_11227 = G__11271;
continue;
} else {
return ret_value__9242__auto__;
}
break;
}
});
cljs$core$async$state_machine__9241__auto__ = function(state_11227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9241__auto____1.call(this,state_11227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9241__auto____0;
cljs$core$async$state_machine__9241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9241__auto____1;
return cljs$core$async$state_machine__9241__auto__;
})()
;})(switch__9240__auto__,c__9347__auto___11255,out))
})();
var state__9349__auto__ = (function (){var statearr_11253 = (f__9348__auto__.cljs$core$IFn$_invoke$arity$0 ? f__9348__auto__.cljs$core$IFn$_invoke$arity$0() : f__9348__auto__.call(null));
(statearr_11253[(6)] = c__9347__auto___11255);

return statearr_11253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__9349__auto__);
});})(c__9347__auto___11255,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

