// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = cljs.core.atom.call(null,0);
reagent.ratom.running = (function running(){return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){obj.cljsCaptured = null;
var _STAR_ratom_context_STAR_6470 = reagent.ratom._STAR_ratom_context_STAR_;try{reagent.ratom._STAR_ratom_context_STAR_ = obj;
return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_6470;
}});
reagent.ratom.captured = (function captured(obj){var c = obj.cljsCaptured;obj.cljsCaptured = null;
return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){var obj = reagent.ratom._STAR_ratom_context_STAR_;if((obj == null))
{return null;
} else
{var captured = obj.cljsCaptured;return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.RAtom.cljs$lang$type = true;
reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";
reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/RAtom");
});
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,this$__$1,oldval,newval);
return null;
}),null,self__.watches);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$ = true;
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});
reagent.ratom.RAtom.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});
reagent.ratom.RAtom.prototype.reagent$ratom$IReset$ = true;
reagent.ratom.RAtom.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;if((self__.validator == null))
{} else
{if(cljs.core.truth_(self__.validator.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",1544652043,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null))))].join('')));
}
}
var old_value = self__.state;self__.state = new_value;
if((self__.watches == null))
{} else
{cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}
return new_value;
});
reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RAtom.prototype.reagent$ratom$IAtom$ = true;
reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new reagent.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__6474__delegate = function (x,p__6471){var map__6473 = p__6471;var map__6473__$1 = ((cljs.core.seq_QMARK_.call(null,map__6473))?cljs.core.apply.call(null,cljs.core.hash_map,map__6473):map__6473);var validator = cljs.core.get.call(null,map__6473__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__6473__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__6474 = function (x,var_args){
var p__6471 = null;if (arguments.length > 1) {
  p__6471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__6474__delegate.call(this,x,p__6471);};
G__6474.cljs$lang$maxFixedArity = 1;
G__6474.cljs$lang$applyTo = (function (arglist__6475){
var x = cljs.core.first(arglist__6475);
var p__6471 = cljs.core.rest(arglist__6475);
return G__6474__delegate(x,p__6471);
});
G__6474.cljs$core$IFn$_invoke$arity$variadic = G__6474__delegate;
return G__6474;
})()
;
atom = function(x,var_args){
var p__6471 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.RCursor.cljs$lang$type = true;
reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";
reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/RCursor");
});
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;return cljs.core._notify_watches.call(null,self__.ratom,oldval,newval);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return cljs.core._add_watch.call(null,self__.ratom,key,f);
});
reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return cljs.core._remove_watch.call(null,self__.ratom,key);
});
reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Cursor: ");
cljs.core.pr_writer.call(null,self__.path,writer,opts);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,self__.ratom,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core._meta.call(null,self__.ratom);
});
reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$ = true;
reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f);
});
reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x);
});
reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y);
});
reagent.ratom.RCursor.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.update_in,self__.path,f,x,y,more);
});
reagent.ratom.RCursor.prototype.reagent$ratom$IReset$ = true;
reagent.ratom.RCursor.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});
reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});
reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.RCursor.prototype.reagent$ratom$IAtom$ = true;
reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){return (new reagent.ratom.RCursor(path,ratom));
});
reagent.ratom.cursor = (function cursor(path,ra){return (new reagent.ratom.RCursor(path,ra));
});
reagent.ratom.IDisposable = (function (){var obj6477 = {};return obj6477;
})();
reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IRunnable = (function (){var obj6479 = {};return obj6479;
})();
reagent.ratom.run = (function run(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IRunnable$run$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom.run[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom.run["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
reagent.ratom.IComputedImpl = (function (){var obj6481 = {};return obj6481;
})();
reagent.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._update_watching["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3396__auto__ = k;if(and__3396__auto__)
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3396__auto__;
}
})())
{return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4029__auto__ = (((k == null))?null:k);return (function (){var or__3408__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (reagent.ratom._handle_change["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){return cljs.core.reduce_kv.call(null,(function (_,key,f){f.call(null,key,obs,oldval,newval);
return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
reagent.ratom.Reaction.cljs$lang$type = true;
reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";
reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"reagent.ratom/Reaction");
});
reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});
reagent.ratom.Reaction.prototype.reagent$ratom$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){var self__ = this;
var a__$1 = this;return reagent.ratom._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});
reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__4942__auto___6494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);if(typeof console !== 'undefined')
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__4942__auto___6494))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return reagent.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3396__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3396__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3396__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3408__auto__ = self__.auto_run;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__6482_6495 = cljs.core.seq.call(null,derefed);var chunk__6483_6496 = null;var count__6484_6497 = 0;var i__6485_6498 = 0;while(true){
if((i__6485_6498 < count__6484_6497))
{var w_6499 = cljs.core._nth.call(null,chunk__6483_6496,i__6485_6498);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6499))
{} else
{cljs.core.add_watch.call(null,w_6499,this$__$1,reagent.ratom._handle_change);
}
{
var G__6500 = seq__6482_6495;
var G__6501 = chunk__6483_6496;
var G__6502 = count__6484_6497;
var G__6503 = (i__6485_6498 + 1);
seq__6482_6495 = G__6500;
chunk__6483_6496 = G__6501;
count__6484_6497 = G__6502;
i__6485_6498 = G__6503;
continue;
}
} else
{var temp__4092__auto___6504 = cljs.core.seq.call(null,seq__6482_6495);if(temp__4092__auto___6504)
{var seq__6482_6505__$1 = temp__4092__auto___6504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6482_6505__$1))
{var c__4150__auto___6506 = cljs.core.chunk_first.call(null,seq__6482_6505__$1);{
var G__6507 = cljs.core.chunk_rest.call(null,seq__6482_6505__$1);
var G__6508 = c__4150__auto___6506;
var G__6509 = cljs.core.count.call(null,c__4150__auto___6506);
var G__6510 = 0;
seq__6482_6495 = G__6507;
chunk__6483_6496 = G__6508;
count__6484_6497 = G__6509;
i__6485_6498 = G__6510;
continue;
}
} else
{var w_6511 = cljs.core.first.call(null,seq__6482_6505__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_6511))
{} else
{cljs.core.add_watch.call(null,w_6511,this$__$1,reagent.ratom._handle_change);
}
{
var G__6512 = cljs.core.next.call(null,seq__6482_6505__$1);
var G__6513 = null;
var G__6514 = 0;
var G__6515 = 0;
seq__6482_6495 = G__6512;
chunk__6483_6496 = G__6513;
count__6484_6497 = G__6514;
i__6485_6498 = G__6515;
continue;
}
}
} else
{}
}
break;
}
var seq__6486_6516 = cljs.core.seq.call(null,self__.watching);var chunk__6487_6517 = null;var count__6488_6518 = 0;var i__6489_6519 = 0;while(true){
if((i__6489_6519 < count__6488_6518))
{var w_6520 = cljs.core._nth.call(null,chunk__6487_6517,i__6489_6519);if(cljs.core.contains_QMARK_.call(null,derefed,w_6520))
{} else
{cljs.core.remove_watch.call(null,w_6520,this$__$1);
}
{
var G__6521 = seq__6486_6516;
var G__6522 = chunk__6487_6517;
var G__6523 = count__6488_6518;
var G__6524 = (i__6489_6519 + 1);
seq__6486_6516 = G__6521;
chunk__6487_6517 = G__6522;
count__6488_6518 = G__6523;
i__6489_6519 = G__6524;
continue;
}
} else
{var temp__4092__auto___6525 = cljs.core.seq.call(null,seq__6486_6516);if(temp__4092__auto___6525)
{var seq__6486_6526__$1 = temp__4092__auto___6525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6486_6526__$1))
{var c__4150__auto___6527 = cljs.core.chunk_first.call(null,seq__6486_6526__$1);{
var G__6528 = cljs.core.chunk_rest.call(null,seq__6486_6526__$1);
var G__6529 = c__4150__auto___6527;
var G__6530 = cljs.core.count.call(null,c__4150__auto___6527);
var G__6531 = 0;
seq__6486_6516 = G__6528;
chunk__6487_6517 = G__6529;
count__6488_6518 = G__6530;
i__6489_6519 = G__6531;
continue;
}
} else
{var w_6532 = cljs.core.first.call(null,seq__6486_6526__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_6532))
{} else
{cljs.core.remove_watch.call(null,w_6532,this$__$1);
}
{
var G__6533 = cljs.core.next.call(null,seq__6486_6526__$1);
var G__6534 = null;
var G__6535 = 0;
var G__6536 = 0;
seq__6486_6516 = G__6533;
chunk__6487_6517 = G__6534;
count__6488_6518 = G__6535;
i__6489_6519 = G__6536;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__6490_6537 = cljs.core.seq.call(null,self__.watching);var chunk__6491_6538 = null;var count__6492_6539 = 0;var i__6493_6540 = 0;while(true){
if((i__6493_6540 < count__6492_6539))
{var w_6541 = cljs.core._nth.call(null,chunk__6491_6538,i__6493_6540);cljs.core.remove_watch.call(null,w_6541,this$__$1);
{
var G__6542 = seq__6490_6537;
var G__6543 = chunk__6491_6538;
var G__6544 = count__6492_6539;
var G__6545 = (i__6493_6540 + 1);
seq__6490_6537 = G__6542;
chunk__6491_6538 = G__6543;
count__6492_6539 = G__6544;
i__6493_6540 = G__6545;
continue;
}
} else
{var temp__4092__auto___6546 = cljs.core.seq.call(null,seq__6490_6537);if(temp__4092__auto___6546)
{var seq__6490_6547__$1 = temp__4092__auto___6546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6490_6547__$1))
{var c__4150__auto___6548 = cljs.core.chunk_first.call(null,seq__6490_6547__$1);{
var G__6549 = cljs.core.chunk_rest.call(null,seq__6490_6547__$1);
var G__6550 = c__4150__auto___6548;
var G__6551 = cljs.core.count.call(null,c__4150__auto___6548);
var G__6552 = 0;
seq__6490_6537 = G__6549;
chunk__6491_6538 = G__6550;
count__6492_6539 = G__6551;
i__6493_6540 = G__6552;
continue;
}
} else
{var w_6553 = cljs.core.first.call(null,seq__6490_6547__$1);cljs.core.remove_watch.call(null,w_6553,this$__$1);
{
var G__6554 = cljs.core.next.call(null,seq__6490_6547__$1);
var G__6555 = null;
var G__6556 = 0;
var G__6557 = 0;
seq__6490_6537 = G__6554;
chunk__6491_6538 = G__6555;
count__6492_6539 = G__6556;
i__6493_6540 = G__6557;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else
{}
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);var derefed = reagent.ratom.captured.call(null,this$__$1);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
reagent.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IReset$ = true;
reagent.ratom.Reaction.prototype.reagent$ratom$IReset$_reset_BANG_$arity$2 = (function (a,new_value){var self__ = this;
var a__$1 = this;var old_value = self__.state;self__.state = new_value;
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
return new_value;
});
reagent.ratom.Reaction.prototype.reagent$ratom$IAtom$ = true;
reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__6558){var map__6560 = p__6558;var map__6560__$1 = ((cljs.core.seq_QMARK_.call(null,map__6560))?cljs.core.apply.call(null,cljs.core.hash_map,map__6560):map__6560);var derefed = cljs.core.get.call(null,map__6560__$1,new cljs.core.Keyword(null,"derefed","derefed",2569894915));var on_dispose = cljs.core.get.call(null,map__6560__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__6560__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__6560__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);var active = !((derefed == null));var dirty = !(active);var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));if((derefed == null))
{} else
{if(cljs.core.truth_(reagent.ratom.debug))
{cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else
{}
reagent.ratom._update_watching.call(null,reaction,derefed);
}
return reaction;
};
var make_reaction = function (f,var_args){
var p__6558 = null;if (arguments.length > 1) {
  p__6558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__6558);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__6561){
var f = cljs.core.first(arglist__6561);
var p__6558 = cljs.core.rest(arglist__6561);
return make_reaction__delegate(f,p__6558);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
