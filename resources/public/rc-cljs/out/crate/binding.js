// Compiled by ClojureScript 0.0-2138
goog.provide('crate.binding');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
*/
crate.binding.SubAtom = (function (atm,path,prevhash,watches,key){
this.atm = atm;
this.path = path;
this.prevhash = prevhash;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.SubAtom.cljs$lang$type = true;
crate.binding.SubAtom.cljs$lang$ctorStr = "crate.binding/SubAtom";
crate.binding.SubAtom.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"crate.binding/SubAtom");
});
crate.binding.SubAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6920 = cljs.core.seq.call(null,self__.watches);var chunk__6921 = null;var count__6922 = 0;var i__6923 = 0;while(true){
if((i__6923 < count__6922))
{var vec__6924 = cljs.core._nth.call(null,chunk__6921,i__6923);var key__$1 = cljs.core.nth.call(null,vec__6924,0,null);var f = cljs.core.nth.call(null,vec__6924,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6926 = seq__6920;
var G__6927 = chunk__6921;
var G__6928 = count__6922;
var G__6929 = (i__6923 + 1);
seq__6920 = G__6926;
chunk__6921 = G__6927;
count__6922 = G__6928;
i__6923 = G__6929;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6920);if(temp__4092__auto__)
{var seq__6920__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6920__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6920__$1);{
var G__6930 = cljs.core.chunk_rest.call(null,seq__6920__$1);
var G__6931 = c__4150__auto__;
var G__6932 = cljs.core.count.call(null,c__4150__auto__);
var G__6933 = 0;
seq__6920 = G__6930;
chunk__6921 = G__6931;
count__6922 = G__6932;
i__6923 = G__6933;
continue;
}
} else
{var vec__6925 = cljs.core.first.call(null,seq__6920__$1);var key__$1 = cljs.core.nth.call(null,vec__6925,0,null);var f = cljs.core.nth.call(null,vec__6925,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6934 = cljs.core.next.call(null,seq__6920__$1);
var G__6935 = null;
var G__6936 = 0;
var G__6937 = 0;
seq__6920 = G__6934;
chunk__6921 = G__6935;
count__6922 = G__6936;
i__6923 = G__6937;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.SubAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.SubAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<SubAtom: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path))),cljs.core.str(">")].join(''));
});
crate.binding.SubAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.atm),self__.path);
});
crate.binding.SubAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_SubAtom = (function __GT_SubAtom(atm,path,prevhash,watches,key){return (new crate.binding.SubAtom(atm,path,prevhash,watches,key));
});
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__6939 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__6939,0,null);var path__$2 = cljs.core.nth.call(null,vec__6939,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
{sa.prevhash = latest_hash;
return cljs.core._notify_watches.call(null,sa,cljs.core.get_in.call(null,ov,path__$2),latest);
} else
{return null;
}
}));
return sa;
});
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
crate.binding.sub_reset_BANG_ = (function sub_reset_BANG_(sa,new_value){cljs.core.swap_BANG_.call(null,sa.atm,cljs.core.assoc_in,sa.path,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
crate.binding.sub_swap_BANG_ = (function() {
var sub_swap_BANG_ = null;
var sub_swap_BANG___2 = (function (sa,f){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa)));
});
var sub_swap_BANG___3 = (function (sa,f,x){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x));
});
var sub_swap_BANG___4 = (function (sa,f,x,y){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y));
});
var sub_swap_BANG___5 = (function (sa,f,x,y,z){return crate.binding.sub_reset_BANG_.call(null,sa,f.call(null,cljs.core.deref.call(null,sa),x,y,z));
});
var sub_swap_BANG___6 = (function() { 
var G__6940__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6940 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6940__delegate.call(this,sa,f,x,y,z,more);};
G__6940.cljs$lang$maxFixedArity = 5;
G__6940.cljs$lang$applyTo = (function (arglist__6941){
var sa = cljs.core.first(arglist__6941);
arglist__6941 = cljs.core.next(arglist__6941);
var f = cljs.core.first(arglist__6941);
arglist__6941 = cljs.core.next(arglist__6941);
var x = cljs.core.first(arglist__6941);
arglist__6941 = cljs.core.next(arglist__6941);
var y = cljs.core.first(arglist__6941);
arglist__6941 = cljs.core.next(arglist__6941);
var z = cljs.core.first(arglist__6941);
var more = cljs.core.rest(arglist__6941);
return G__6940__delegate(sa,f,x,y,z,more);
});
G__6940.cljs$core$IFn$_invoke$arity$variadic = G__6940__delegate;
return G__6940;
})()
;
sub_swap_BANG_ = function(sa,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return sub_swap_BANG___2.call(this,sa,f);
case 3:
return sub_swap_BANG___3.call(this,sa,f,x);
case 4:
return sub_swap_BANG___4.call(this,sa,f,x,y);
case 5:
return sub_swap_BANG___5.call(this,sa,f,x,y,z);
default:
return sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic(sa,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub_swap_BANG_.cljs$lang$maxFixedArity = 5;
sub_swap_BANG_.cljs$lang$applyTo = sub_swap_BANG___6.cljs$lang$applyTo;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = sub_swap_BANG___2;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$3 = sub_swap_BANG___3;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$4 = sub_swap_BANG___4;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$5 = sub_swap_BANG___5;
sub_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = sub_swap_BANG___6.cljs$core$IFn$_invoke$arity$variadic;
return sub_swap_BANG_;
})()
;
crate.binding.sub_destroy_BANG_ = (function sub_destroy_BANG_(sa){cljs.core.remove_watch.call(null,sa.atm,sa.key);
sa.watches = null;
return sa.atm = null;
});
crate.binding.computable = (function (){var obj6943 = {};return obj6943;
})();
crate.binding._compute = (function _compute(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.crate$binding$computable$_compute$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.crate$binding$computable$_compute$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (crate.binding._compute[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (crate.binding._compute["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"computable.-compute",this$);
}
}
})().call(null,this$);
}
});

/**
* @constructor
*/
crate.binding.Computed = (function (atms,value,func,watches,key){
this.atms = atms;
this.value = value;
this.func = func;
this.watches = watches;
this.key = key;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.Computed.cljs$lang$type = true;
crate.binding.Computed.cljs$lang$ctorStr = "crate.binding/Computed";
crate.binding.Computed.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"crate.binding/Computed");
});
crate.binding.Computed.prototype.crate$binding$computable$ = true;
crate.binding.Computed.prototype.crate$binding$computable$_compute$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var old = this$__$1.value;this$__$1.value = cljs.core.apply.call(null,self__.func,cljs.core.map.call(null,cljs.core.deref,self__.atms));
return cljs.core._notify_watches.call(null,this$__$1,old,this$__$1.value);
});
crate.binding.Computed.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6944 = cljs.core.seq.call(null,self__.watches);var chunk__6945 = null;var count__6946 = 0;var i__6947 = 0;while(true){
if((i__6947 < count__6946))
{var vec__6948 = cljs.core._nth.call(null,chunk__6945,i__6947);var key__$1 = cljs.core.nth.call(null,vec__6948,0,null);var f = cljs.core.nth.call(null,vec__6948,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6950 = seq__6944;
var G__6951 = chunk__6945;
var G__6952 = count__6946;
var G__6953 = (i__6947 + 1);
seq__6944 = G__6950;
chunk__6945 = G__6951;
count__6946 = G__6952;
i__6947 = G__6953;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6944);if(temp__4092__auto__)
{var seq__6944__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6944__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6944__$1);{
var G__6954 = cljs.core.chunk_rest.call(null,seq__6944__$1);
var G__6955 = c__4150__auto__;
var G__6956 = cljs.core.count.call(null,c__4150__auto__);
var G__6957 = 0;
seq__6944 = G__6954;
chunk__6945 = G__6955;
count__6946 = G__6956;
i__6947 = G__6957;
continue;
}
} else
{var vec__6949 = cljs.core.first.call(null,seq__6944__$1);var key__$1 = cljs.core.nth.call(null,vec__6949,0,null);var f = cljs.core.nth.call(null,vec__6949,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6958 = cljs.core.next.call(null,seq__6944__$1);
var G__6959 = null;
var G__6960 = 0;
var G__6961 = 0;
seq__6944 = G__6958;
chunk__6945 = G__6959;
count__6946 = G__6960;
i__6947 = G__6961;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key__$1,f){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(f))
{return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key__$1,f);
} else
{return null;
}
});
crate.binding.Computed.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key__$1){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key__$1);
});
crate.binding.Computed.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write.call(null,writer,[cljs.core.str("#<Computed: "),cljs.core.str(cljs.core.pr_str.call(null,self__.value)),cljs.core.str(">")].join(''));
});
crate.binding.Computed.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
crate.binding.Computed.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
crate.binding.__GT_Computed = (function __GT_Computed(atms,value,func,watches,key){return (new crate.binding.Computed(atms,value,func,watches,key));
});
crate.binding.computed = (function computed(atms,func){var k = cljs.core.gensym.call(null,"computed");var neue = (new crate.binding.Computed(atms,null,func,null,k));crate.binding._compute.call(null,neue);
var seq__6966_6970 = cljs.core.seq.call(null,atms);var chunk__6967_6971 = null;var count__6968_6972 = 0;var i__6969_6973 = 0;while(true){
if((i__6969_6973 < count__6968_6972))
{var atm_6974 = cljs.core._nth.call(null,chunk__6967_6971,i__6969_6973);cljs.core.add_watch.call(null,atm_6974,k,((function (seq__6966_6970,chunk__6967_6971,count__6968_6972,i__6969_6973,atm_6974){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6966_6970,chunk__6967_6971,count__6968_6972,i__6969_6973,atm_6974))
);
{
var G__6975 = seq__6966_6970;
var G__6976 = chunk__6967_6971;
var G__6977 = count__6968_6972;
var G__6978 = (i__6969_6973 + 1);
seq__6966_6970 = G__6975;
chunk__6967_6971 = G__6976;
count__6968_6972 = G__6977;
i__6969_6973 = G__6978;
continue;
}
} else
{var temp__4092__auto___6979 = cljs.core.seq.call(null,seq__6966_6970);if(temp__4092__auto___6979)
{var seq__6966_6980__$1 = temp__4092__auto___6979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6966_6980__$1))
{var c__4150__auto___6981 = cljs.core.chunk_first.call(null,seq__6966_6980__$1);{
var G__6982 = cljs.core.chunk_rest.call(null,seq__6966_6980__$1);
var G__6983 = c__4150__auto___6981;
var G__6984 = cljs.core.count.call(null,c__4150__auto___6981);
var G__6985 = 0;
seq__6966_6970 = G__6982;
chunk__6967_6971 = G__6983;
count__6968_6972 = G__6984;
i__6969_6973 = G__6985;
continue;
}
} else
{var atm_6986 = cljs.core.first.call(null,seq__6966_6980__$1);cljs.core.add_watch.call(null,atm_6986,k,((function (seq__6966_6970,chunk__6967_6971,count__6968_6972,i__6969_6973,atm_6986,seq__6966_6980__$1,temp__4092__auto___6979){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6966_6970,chunk__6967_6971,count__6968_6972,i__6969_6973,atm_6986,seq__6966_6980__$1,temp__4092__auto___6979))
);
{
var G__6987 = cljs.core.next.call(null,seq__6966_6980__$1);
var G__6988 = null;
var G__6989 = 0;
var G__6990 = 0;
seq__6966_6970 = G__6987;
chunk__6967_6971 = G__6988;
count__6968_6972 = G__6989;
i__6969_6973 = G__6990;
continue;
}
}
} else
{}
}
break;
}
return neue;
});
crate.binding.z = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.binding.y = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.z], null),(function (z){return cljs.core.filter.call(null,cljs.core.even_QMARK_,z);
}));
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__6991_SHARP_){return (p1__6991_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj6993 = {};return obj6993;
})();
crate.binding.bindable = (function (){var obj6995 = {};return obj6995;
})();
crate.binding._value = (function _value(this$){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.crate$binding$bindable$_value$arity$1;
} else
{return and__3396__auto__;
}
})())
{return this$.crate$binding$bindable$_value$arity$1(this$);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (crate.binding._value[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (crate.binding._value["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-value",this$);
}
}
})().call(null,this$);
}
});
crate.binding._on_change = (function _on_change(this$,func){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.crate$binding$bindable$_on_change$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.crate$binding$bindable$_on_change$arity$2(this$,func);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (crate.binding._on_change[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (crate.binding._on_change["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"bindable.-on-change",this$);
}
}
})().call(null,this$,func);
}
});

/**
* @constructor
*/
crate.binding.atom_binding = (function (atm,value_func){
this.atm = atm;
this.value_func = value_func;
})
crate.binding.atom_binding.cljs$lang$type = true;
crate.binding.atom_binding.cljs$lang$ctorStr = "crate.binding/atom-binding";
crate.binding.atom_binding.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"crate.binding/atom-binding");
});
crate.binding.atom_binding.prototype.crate$binding$bindable$ = true;
crate.binding.atom_binding.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.value_func.call(null,cljs.core.deref.call(null,self__.atm));
});
crate.binding.atom_binding.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.atm,cljs.core.gensym.call(null,"atom-binding"),(function (){return func.call(null,crate.binding._value.call(null,this$__$1));
}));
});
crate.binding.__GT_atom_binding = (function __GT_atom_binding(atm,value_func){return (new crate.binding.atom_binding(atm,value_func));
});

/**
* @constructor
*/
crate.binding.notifier = (function (watches){
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 0;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
crate.binding.notifier.cljs$lang$type = true;
crate.binding.notifier.cljs$lang$ctorStr = "crate.binding/notifier";
crate.binding.notifier.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"crate.binding/notifier");
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__6996 = cljs.core.seq.call(null,self__.watches);var chunk__6997 = null;var count__6998 = 0;var i__6999 = 0;while(true){
if((i__6999 < count__6998))
{var vec__7000 = cljs.core._nth.call(null,chunk__6997,i__6999);var key = cljs.core.nth.call(null,vec__7000,0,null);var f = cljs.core.nth.call(null,vec__7000,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7002 = seq__6996;
var G__7003 = chunk__6997;
var G__7004 = count__6998;
var G__7005 = (i__6999 + 1);
seq__6996 = G__7002;
chunk__6997 = G__7003;
count__6998 = G__7004;
i__6999 = G__7005;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6996);if(temp__4092__auto__)
{var seq__6996__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6996__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6996__$1);{
var G__7006 = cljs.core.chunk_rest.call(null,seq__6996__$1);
var G__7007 = c__4150__auto__;
var G__7008 = cljs.core.count.call(null,c__4150__auto__);
var G__7009 = 0;
seq__6996 = G__7006;
chunk__6997 = G__7007;
count__6998 = G__7008;
i__6999 = G__7009;
continue;
}
} else
{var vec__7001 = cljs.core.first.call(null,seq__6996__$1);var key = cljs.core.nth.call(null,vec__7001,0,null);var f = cljs.core.nth.call(null,vec__7001,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7010 = cljs.core.next.call(null,seq__6996__$1);
var G__7011 = null;
var G__7012 = 0;
var G__7013 = 0;
seq__6996 = G__7010;
chunk__6997 = G__7011;
count__6998 = G__7012;
i__6999 = G__7013;
continue;
}
}
} else
{return null;
}
}
break;
}
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
crate.binding.notifier.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
crate.binding.__GT_notifier = (function __GT_notifier(watches){return (new crate.binding.notifier(watches));
});

/**
* @constructor
*/
crate.binding.bound_collection = (function (atm,notif,opts,stuff){
this.atm = atm;
this.notif = notif;
this.opts = opts;
this.stuff = stuff;
})
crate.binding.bound_collection.cljs$lang$type = true;
crate.binding.bound_collection.cljs$lang$ctorStr = "crate.binding/bound-collection";
crate.binding.bound_collection.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"crate.binding/bound-collection");
});
crate.binding.bound_collection.prototype.crate$binding$bindable$ = true;
crate.binding.bound_collection.prototype.crate$binding$bindable$_value$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.map.call(null,new cljs.core.Keyword(null,"elem","elem",1017020161),cljs.core.vals.call(null,this$__$1.stuff));
});
crate.binding.bound_collection.prototype.crate$binding$bindable$_on_change$arity$2 = (function (this$,func){var self__ = this;
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__7014){var vec__7015 = p__7014;var event = cljs.core.nth.call(null,vec__7015,0,null);var el = cljs.core.nth.call(null,vec__7015,1,null);var v = cljs.core.nth.call(null,vec__7015,2,null);return func.call(null,event,el,v);
}));
});
crate.binding.bound_collection.prototype.crate$binding$bindable_coll$ = true;
crate.binding.__GT_bound_collection = (function __GT_bound_collection(atm,notif,opts,stuff){return (new crate.binding.bound_collection(atm,notif,opts,stuff));
});
crate.binding.opt = (function opt(bc,k){return bc.opts.call(null,k);
});
crate.binding.bc_add = (function bc_add(bc,path,key){var sa = crate.binding.subatom.call(null,bc.atm,path);var elem = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"as","as",1013907364)).call(null,sa);bc.stuff = cljs.core.assoc.call(null,bc.stuff,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elem","elem",1017020161),elem,new cljs.core.Keyword(null,"subatom","subatom",3440732931),sa], null));
return crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add","add",1014000659),elem,cljs.core.deref.call(null,sa)], null));
});
crate.binding.bc_remove = (function bc_remove(bc,key){var notif = bc.notif;var prev = bc.stuff.call(null,key);bc.stuff = cljs.core.dissoc.call(null,bc.stuff,key);
crate.binding.notify.call(null,bc.notif,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove","remove",4374260726),new cljs.core.Keyword(null,"elem","elem",1017020161).cljs$core$IFn$_invoke$arity$1(prev),null], null));
return crate.binding.sub_destroy_BANG_.call(null,new cljs.core.Keyword(null,"subatom","subatom",3440732931).cljs$core$IFn$_invoke$arity$1(prev));
});
crate.binding.__GT_indexed = (function __GT_indexed(coll){if(cljs.core.map_QMARK_.call(null,coll))
{return cljs.core.seq.call(null,coll);
} else
{if(cljs.core.set_QMARK_.call(null,coll))
{return cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,cljs.core.identity),coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
} else
{return null;
}
}
}
});
crate.binding.__GT_keyed = (function __GT_keyed(coll,keyfn){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,keyfn,crate.binding.__GT_indexed.call(null,coll)));
});
/**
* @param {...*} var_args
*/
crate.binding.__GT_path = (function() { 
var __GT_path__delegate = function (bc,segs){return cljs.core.concat.call(null,(function (){var or__3408__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"path","path",1017337751));if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),segs);
};
var __GT_path = function (bc,var_args){
var segs = null;if (arguments.length > 1) {
  segs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __GT_path__delegate.call(this,bc,segs);};
__GT_path.cljs$lang$maxFixedArity = 1;
__GT_path.cljs$lang$applyTo = (function (arglist__7016){
var bc = cljs.core.first(arglist__7016);
var segs = cljs.core.rest(arglist__7016);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__7025_7033 = cljs.core.seq.call(null,added);var chunk__7026_7034 = null;var count__7027_7035 = 0;var i__7028_7036 = 0;while(true){
if((i__7028_7036 < count__7027_7035))
{var a_7037 = cljs.core._nth.call(null,chunk__7026_7034,i__7028_7036);crate.binding.bc_add.call(null,bc,a_7037,a_7037);
{
var G__7038 = seq__7025_7033;
var G__7039 = chunk__7026_7034;
var G__7040 = count__7027_7035;
var G__7041 = (i__7028_7036 + 1);
seq__7025_7033 = G__7038;
chunk__7026_7034 = G__7039;
count__7027_7035 = G__7040;
i__7028_7036 = G__7041;
continue;
}
} else
{var temp__4092__auto___7042 = cljs.core.seq.call(null,seq__7025_7033);if(temp__4092__auto___7042)
{var seq__7025_7043__$1 = temp__4092__auto___7042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7025_7043__$1))
{var c__4150__auto___7044 = cljs.core.chunk_first.call(null,seq__7025_7043__$1);{
var G__7045 = cljs.core.chunk_rest.call(null,seq__7025_7043__$1);
var G__7046 = c__4150__auto___7044;
var G__7047 = cljs.core.count.call(null,c__4150__auto___7044);
var G__7048 = 0;
seq__7025_7033 = G__7045;
chunk__7026_7034 = G__7046;
count__7027_7035 = G__7047;
i__7028_7036 = G__7048;
continue;
}
} else
{var a_7049 = cljs.core.first.call(null,seq__7025_7043__$1);crate.binding.bc_add.call(null,bc,a_7049,a_7049);
{
var G__7050 = cljs.core.next.call(null,seq__7025_7043__$1);
var G__7051 = null;
var G__7052 = 0;
var G__7053 = 0;
seq__7025_7033 = G__7050;
chunk__7026_7034 = G__7051;
count__7027_7035 = G__7052;
i__7028_7036 = G__7053;
continue;
}
}
} else
{}
}
break;
}
var seq__7029 = cljs.core.seq.call(null,removed);var chunk__7030 = null;var count__7031 = 0;var i__7032 = 0;while(true){
if((i__7032 < count__7031))
{var r = cljs.core._nth.call(null,chunk__7030,i__7032);crate.binding.bc_remove.call(null,bc,r);
{
var G__7054 = seq__7029;
var G__7055 = chunk__7030;
var G__7056 = count__7031;
var G__7057 = (i__7032 + 1);
seq__7029 = G__7054;
chunk__7030 = G__7055;
count__7031 = G__7056;
i__7032 = G__7057;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7029);if(temp__4092__auto__)
{var seq__7029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7029__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7029__$1);{
var G__7058 = cljs.core.chunk_rest.call(null,seq__7029__$1);
var G__7059 = c__4150__auto__;
var G__7060 = cljs.core.count.call(null,c__4150__auto__);
var G__7061 = 0;
seq__7029 = G__7058;
chunk__7030 = G__7059;
count__7031 = G__7060;
i__7032 = G__7061;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__7029__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__7062 = cljs.core.next.call(null,seq__7029__$1);
var G__7063 = null;
var G__7064 = 0;
var G__7065 = 0;
seq__7029 = G__7062;
chunk__7030 = G__7063;
count__7031 = G__7064;
i__7032 = G__7065;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
crate.binding.bound_coll = (function() { 
var bound_coll__delegate = function (atm,p__7066){var vec__7069 = p__7066;var path = cljs.core.nth.call(null,vec__7069,0,null);var opts = cljs.core.nth.call(null,vec__7069,1,null);var vec__7070 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__7070,0,null);var opts__$1 = cljs.core.nth.call(null,vec__7070,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__7066 = null;if (arguments.length > 1) {
  p__7066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__7066);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__7071){
var atm = cljs.core.first(arglist__7071);
var p__7066 = cljs.core.rest(arglist__7071);
return bound_coll__delegate(atm,p__7066);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__7072){var vec__7074 = p__7072;var opts = cljs.core.nth.call(null,vec__7074,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__7072 = null;if (arguments.length > 2) {
  p__7072 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__7072);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__7075){
var as = cljs.core.first(arglist__7075);
arglist__7075 = cljs.core.next(arglist__7075);
var atm = cljs.core.first(arglist__7075);
var p__7072 = cljs.core.rest(arglist__7075);
return map_bound__delegate(as,atm,p__7072);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__7077 = b;if(G__7077)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7077.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__7077.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7077);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__7079 = b;if(G__7079)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7079.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__7079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7079);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__7081 = atm;if(G__7081)
{var bit__4052__auto__ = (G__7081.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4052__auto__) || (G__7081.cljs$core$IDeref$))
{return true;
} else
{if((!G__7081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7081);
}
});
crate.binding.value = (function value(b){return crate.binding._value.call(null,b);
});
crate.binding.index = (function index(sub_atom){return cljs.core.last.call(null,sub_atom.path);
});
crate.binding.on_change = (function on_change(b,func){return crate.binding._on_change.call(null,b,func);
});
/**
* @param {...*} var_args
*/
crate.binding.bound = (function() { 
var bound__delegate = function (atm,p__7082){var vec__7084 = p__7082;var func = cljs.core.nth.call(null,vec__7084,0,null);var func__$1 = (function (){var or__3408__auto__ = func;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__7082 = null;if (arguments.length > 1) {
  p__7082 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__7082);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__7085){
var atm = cljs.core.first(arglist__7085);
var p__7082 = cljs.core.rest(arglist__7085);
return bound__delegate(atm,p__7082);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
