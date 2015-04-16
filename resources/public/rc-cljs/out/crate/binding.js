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
var this$__$1 = this;var seq__6916 = cljs.core.seq.call(null,self__.watches);var chunk__6917 = null;var count__6918 = 0;var i__6919 = 0;while(true){
if((i__6919 < count__6918))
{var vec__6920 = cljs.core._nth.call(null,chunk__6917,i__6919);var key__$1 = cljs.core.nth.call(null,vec__6920,0,null);var f = cljs.core.nth.call(null,vec__6920,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6922 = seq__6916;
var G__6923 = chunk__6917;
var G__6924 = count__6918;
var G__6925 = (i__6919 + 1);
seq__6916 = G__6922;
chunk__6917 = G__6923;
count__6918 = G__6924;
i__6919 = G__6925;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6916);if(temp__4092__auto__)
{var seq__6916__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6916__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6916__$1);{
var G__6926 = cljs.core.chunk_rest.call(null,seq__6916__$1);
var G__6927 = c__4150__auto__;
var G__6928 = cljs.core.count.call(null,c__4150__auto__);
var G__6929 = 0;
seq__6916 = G__6926;
chunk__6917 = G__6927;
count__6918 = G__6928;
i__6919 = G__6929;
continue;
}
} else
{var vec__6921 = cljs.core.first.call(null,seq__6916__$1);var key__$1 = cljs.core.nth.call(null,vec__6921,0,null);var f = cljs.core.nth.call(null,vec__6921,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6930 = cljs.core.next.call(null,seq__6916__$1);
var G__6931 = null;
var G__6932 = 0;
var G__6933 = 0;
seq__6916 = G__6930;
chunk__6917 = G__6931;
count__6918 = G__6932;
i__6919 = G__6933;
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
crate.binding.subatom = (function subatom(atm,path){var path__$1 = ((cljs.core.coll_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));var vec__6935 = (((atm instanceof crate.binding.SubAtom))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm.atm,cljs.core.concat.call(null,atm.path,path__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atm,path__$1], null));var atm__$1 = cljs.core.nth.call(null,vec__6935,0,null);var path__$2 = cljs.core.nth.call(null,vec__6935,1,null);var k = cljs.core.gensym.call(null,"subatom");var sa = (new crate.binding.SubAtom(atm__$1,path__$2,cljs.core.hash.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,atm__$1),path__$2)),null,k));cljs.core.add_watch.call(null,atm__$1,k,(function (_,___$1,ov,nv){var latest = cljs.core.get_in.call(null,nv,path__$2);var prev = cljs.core.get_in.call(null,ov,path__$2);var latest_hash = cljs.core.hash.call(null,latest);if((cljs.core.not_EQ_.call(null,sa.prevhash,latest_hash)) && (cljs.core.not_EQ_.call(null,prev,latest)))
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
var G__6936__delegate = function (sa,f,x,y,z,more){return crate.binding.sub_reset_BANG_.call(null,sa,cljs.core.apply.call(null,f,cljs.core.deref.call(null,sa),x,y,z,more));
};
var G__6936 = function (sa,f,x,y,z,var_args){
var more = null;if (arguments.length > 5) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__6936__delegate.call(this,sa,f,x,y,z,more);};
G__6936.cljs$lang$maxFixedArity = 5;
G__6936.cljs$lang$applyTo = (function (arglist__6937){
var sa = cljs.core.first(arglist__6937);
arglist__6937 = cljs.core.next(arglist__6937);
var f = cljs.core.first(arglist__6937);
arglist__6937 = cljs.core.next(arglist__6937);
var x = cljs.core.first(arglist__6937);
arglist__6937 = cljs.core.next(arglist__6937);
var y = cljs.core.first(arglist__6937);
arglist__6937 = cljs.core.next(arglist__6937);
var z = cljs.core.first(arglist__6937);
var more = cljs.core.rest(arglist__6937);
return G__6936__delegate(sa,f,x,y,z,more);
});
G__6936.cljs$core$IFn$_invoke$arity$variadic = G__6936__delegate;
return G__6936;
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
crate.binding.computable = (function (){var obj6939 = {};return obj6939;
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
var this$__$1 = this;var seq__6940 = cljs.core.seq.call(null,self__.watches);var chunk__6941 = null;var count__6942 = 0;var i__6943 = 0;while(true){
if((i__6943 < count__6942))
{var vec__6944 = cljs.core._nth.call(null,chunk__6941,i__6943);var key__$1 = cljs.core.nth.call(null,vec__6944,0,null);var f = cljs.core.nth.call(null,vec__6944,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6946 = seq__6940;
var G__6947 = chunk__6941;
var G__6948 = count__6942;
var G__6949 = (i__6943 + 1);
seq__6940 = G__6946;
chunk__6941 = G__6947;
count__6942 = G__6948;
i__6943 = G__6949;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6940);if(temp__4092__auto__)
{var seq__6940__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6940__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6940__$1);{
var G__6950 = cljs.core.chunk_rest.call(null,seq__6940__$1);
var G__6951 = c__4150__auto__;
var G__6952 = cljs.core.count.call(null,c__4150__auto__);
var G__6953 = 0;
seq__6940 = G__6950;
chunk__6941 = G__6951;
count__6942 = G__6952;
i__6943 = G__6953;
continue;
}
} else
{var vec__6945 = cljs.core.first.call(null,seq__6940__$1);var key__$1 = cljs.core.nth.call(null,vec__6945,0,null);var f = cljs.core.nth.call(null,vec__6945,1,null);f.call(null,key__$1,this$__$1,oldval,newval);
{
var G__6954 = cljs.core.next.call(null,seq__6940__$1);
var G__6955 = null;
var G__6956 = 0;
var G__6957 = 0;
seq__6940 = G__6954;
chunk__6941 = G__6955;
count__6942 = G__6956;
i__6943 = G__6957;
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
var seq__6962_6966 = cljs.core.seq.call(null,atms);var chunk__6963_6967 = null;var count__6964_6968 = 0;var i__6965_6969 = 0;while(true){
if((i__6965_6969 < count__6964_6968))
{var atm_6970 = cljs.core._nth.call(null,chunk__6963_6967,i__6965_6969);cljs.core.add_watch.call(null,atm_6970,k,((function (seq__6962_6966,chunk__6963_6967,count__6964_6968,i__6965_6969,atm_6970){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6962_6966,chunk__6963_6967,count__6964_6968,i__6965_6969,atm_6970))
);
{
var G__6971 = seq__6962_6966;
var G__6972 = chunk__6963_6967;
var G__6973 = count__6964_6968;
var G__6974 = (i__6965_6969 + 1);
seq__6962_6966 = G__6971;
chunk__6963_6967 = G__6972;
count__6964_6968 = G__6973;
i__6965_6969 = G__6974;
continue;
}
} else
{var temp__4092__auto___6975 = cljs.core.seq.call(null,seq__6962_6966);if(temp__4092__auto___6975)
{var seq__6962_6976__$1 = temp__4092__auto___6975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6962_6976__$1))
{var c__4150__auto___6977 = cljs.core.chunk_first.call(null,seq__6962_6976__$1);{
var G__6978 = cljs.core.chunk_rest.call(null,seq__6962_6976__$1);
var G__6979 = c__4150__auto___6977;
var G__6980 = cljs.core.count.call(null,c__4150__auto___6977);
var G__6981 = 0;
seq__6962_6966 = G__6978;
chunk__6963_6967 = G__6979;
count__6964_6968 = G__6980;
i__6965_6969 = G__6981;
continue;
}
} else
{var atm_6982 = cljs.core.first.call(null,seq__6962_6976__$1);cljs.core.add_watch.call(null,atm_6982,k,((function (seq__6962_6966,chunk__6963_6967,count__6964_6968,i__6965_6969,atm_6982,seq__6962_6976__$1,temp__4092__auto___6975){
return (function (_,___$1,___$2,___$3){return crate.binding._compute.call(null,neue);
});})(seq__6962_6966,chunk__6963_6967,count__6964_6968,i__6965_6969,atm_6982,seq__6962_6976__$1,temp__4092__auto___6975))
);
{
var G__6983 = cljs.core.next.call(null,seq__6962_6976__$1);
var G__6984 = null;
var G__6985 = 0;
var G__6986 = 0;
seq__6962_6966 = G__6983;
chunk__6963_6967 = G__6984;
count__6964_6968 = G__6985;
i__6965_6969 = G__6986;
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
crate.binding.r = crate.binding.computed.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.y], null),(function (y){return cljs.core.filter.call(null,(function (p1__6987_SHARP_){return (p1__6987_SHARP_ > 100);
}),y);
}));
cljs.core.swap_BANG_.call(null,crate.binding.z,cljs.core.conj,1340);
cljs.core.deref.call(null,crate.binding.y);
cljs.core.deref.call(null,crate.binding.r);
crate.binding.notify = (function notify(w,o,v){return cljs.core._notify_watches.call(null,w,o,v);
});
crate.binding.bindable_coll = (function (){var obj6989 = {};return obj6989;
})();
crate.binding.bindable = (function (){var obj6991 = {};return obj6991;
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
var this$__$1 = this;var seq__6992 = cljs.core.seq.call(null,self__.watches);var chunk__6993 = null;var count__6994 = 0;var i__6995 = 0;while(true){
if((i__6995 < count__6994))
{var vec__6996 = cljs.core._nth.call(null,chunk__6993,i__6995);var key = cljs.core.nth.call(null,vec__6996,0,null);var f = cljs.core.nth.call(null,vec__6996,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__6998 = seq__6992;
var G__6999 = chunk__6993;
var G__7000 = count__6994;
var G__7001 = (i__6995 + 1);
seq__6992 = G__6998;
chunk__6993 = G__6999;
count__6994 = G__7000;
i__6995 = G__7001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6992);if(temp__4092__auto__)
{var seq__6992__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6992__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6992__$1);{
var G__7002 = cljs.core.chunk_rest.call(null,seq__6992__$1);
var G__7003 = c__4150__auto__;
var G__7004 = cljs.core.count.call(null,c__4150__auto__);
var G__7005 = 0;
seq__6992 = G__7002;
chunk__6993 = G__7003;
count__6994 = G__7004;
i__6995 = G__7005;
continue;
}
} else
{var vec__6997 = cljs.core.first.call(null,seq__6992__$1);var key = cljs.core.nth.call(null,vec__6997,0,null);var f = cljs.core.nth.call(null,vec__6997,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7006 = cljs.core.next.call(null,seq__6992__$1);
var G__7007 = null;
var G__7008 = 0;
var G__7009 = 0;
seq__6992 = G__7006;
chunk__6993 = G__7007;
count__6994 = G__7008;
i__6995 = G__7009;
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
var this$__$1 = this;return cljs.core.add_watch.call(null,self__.notif,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,p__7010){var vec__7011 = p__7010;var event = cljs.core.nth.call(null,vec__7011,0,null);var el = cljs.core.nth.call(null,vec__7011,1,null);var v = cljs.core.nth.call(null,vec__7011,2,null);return func.call(null,event,el,v);
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
__GT_path.cljs$lang$applyTo = (function (arglist__7012){
var bc = cljs.core.first(arglist__7012);
var segs = cljs.core.rest(arglist__7012);
return __GT_path__delegate(bc,segs);
});
__GT_path.cljs$core$IFn$_invoke$arity$variadic = __GT_path__delegate;
return __GT_path;
})()
;
crate.binding.bc_compare = (function bc_compare(bc,neue){var prev = bc.stuff;var pset = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,prev));var nset = crate.binding.__GT_keyed.call(null,neue,crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433)));var added = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,nset,pset));var removed = cljs.core.into.call(null,cljs.core.sorted_set.call(null),clojure.set.difference.call(null,pset,nset));var seq__7021_7029 = cljs.core.seq.call(null,added);var chunk__7022_7030 = null;var count__7023_7031 = 0;var i__7024_7032 = 0;while(true){
if((i__7024_7032 < count__7023_7031))
{var a_7033 = cljs.core._nth.call(null,chunk__7022_7030,i__7024_7032);crate.binding.bc_add.call(null,bc,a_7033,a_7033);
{
var G__7034 = seq__7021_7029;
var G__7035 = chunk__7022_7030;
var G__7036 = count__7023_7031;
var G__7037 = (i__7024_7032 + 1);
seq__7021_7029 = G__7034;
chunk__7022_7030 = G__7035;
count__7023_7031 = G__7036;
i__7024_7032 = G__7037;
continue;
}
} else
{var temp__4092__auto___7038 = cljs.core.seq.call(null,seq__7021_7029);if(temp__4092__auto___7038)
{var seq__7021_7039__$1 = temp__4092__auto___7038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7021_7039__$1))
{var c__4150__auto___7040 = cljs.core.chunk_first.call(null,seq__7021_7039__$1);{
var G__7041 = cljs.core.chunk_rest.call(null,seq__7021_7039__$1);
var G__7042 = c__4150__auto___7040;
var G__7043 = cljs.core.count.call(null,c__4150__auto___7040);
var G__7044 = 0;
seq__7021_7029 = G__7041;
chunk__7022_7030 = G__7042;
count__7023_7031 = G__7043;
i__7024_7032 = G__7044;
continue;
}
} else
{var a_7045 = cljs.core.first.call(null,seq__7021_7039__$1);crate.binding.bc_add.call(null,bc,a_7045,a_7045);
{
var G__7046 = cljs.core.next.call(null,seq__7021_7039__$1);
var G__7047 = null;
var G__7048 = 0;
var G__7049 = 0;
seq__7021_7029 = G__7046;
chunk__7022_7030 = G__7047;
count__7023_7031 = G__7048;
i__7024_7032 = G__7049;
continue;
}
}
} else
{}
}
break;
}
var seq__7025 = cljs.core.seq.call(null,removed);var chunk__7026 = null;var count__7027 = 0;var i__7028 = 0;while(true){
if((i__7028 < count__7027))
{var r = cljs.core._nth.call(null,chunk__7026,i__7028);crate.binding.bc_remove.call(null,bc,r);
{
var G__7050 = seq__7025;
var G__7051 = chunk__7026;
var G__7052 = count__7027;
var G__7053 = (i__7028 + 1);
seq__7025 = G__7050;
chunk__7026 = G__7051;
count__7027 = G__7052;
i__7028 = G__7053;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7025);if(temp__4092__auto__)
{var seq__7025__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7025__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__7025__$1);{
var G__7054 = cljs.core.chunk_rest.call(null,seq__7025__$1);
var G__7055 = c__4150__auto__;
var G__7056 = cljs.core.count.call(null,c__4150__auto__);
var G__7057 = 0;
seq__7025 = G__7054;
chunk__7026 = G__7055;
count__7027 = G__7056;
i__7028 = G__7057;
continue;
}
} else
{var r = cljs.core.first.call(null,seq__7025__$1);crate.binding.bc_remove.call(null,bc,r);
{
var G__7058 = cljs.core.next.call(null,seq__7025__$1);
var G__7059 = null;
var G__7060 = 0;
var G__7061 = 0;
seq__7025 = G__7058;
chunk__7026 = G__7059;
count__7027 = G__7060;
i__7028 = G__7061;
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
var bound_coll__delegate = function (atm,p__7062){var vec__7065 = p__7062;var path = cljs.core.nth.call(null,vec__7065,0,null);var opts = cljs.core.nth.call(null,vec__7065,1,null);var vec__7066 = (cljs.core.truth_(opts)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,opts], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,path], null));var path__$1 = cljs.core.nth.call(null,vec__7066,0,null);var opts__$1 = cljs.core.nth.call(null,vec__7066,1,null);var atm__$1 = ((cljs.core.not.call(null,path__$1))?atm:crate.binding.subatom.call(null,atm,path__$1));var opts__$2 = cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"path","path",1017337751),path__$1);var opts__$3 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2)))?cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$2,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$2),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$3,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var bound_coll = function (atm,var_args){
var p__7062 = null;if (arguments.length > 1) {
  p__7062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound_coll__delegate.call(this,atm,p__7062);};
bound_coll.cljs$lang$maxFixedArity = 1;
bound_coll.cljs$lang$applyTo = (function (arglist__7067){
var atm = cljs.core.first(arglist__7067);
var p__7062 = cljs.core.rest(arglist__7067);
return bound_coll__delegate(atm,p__7062);
});
bound_coll.cljs$core$IFn$_invoke$arity$variadic = bound_coll__delegate;
return bound_coll;
})()
;
/**
* @param {...*} var_args
*/
crate.binding.map_bound = (function() { 
var map_bound__delegate = function (as,atm,p__7068){var vec__7070 = p__7068;var opts = cljs.core.nth.call(null,vec__7070,0,null);var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"as","as",1013907364),as);var atm__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)))?atm:crate.binding.subatom.call(null,atm,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(opts__$1)));var opts__$2 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1)))?cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.first):cljs.core.assoc.call(null,opts__$1,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433),cljs.core.comp.call(null,new cljs.core.Keyword(null,"keyfn","keyfn",1115849433).cljs$core$IFn$_invoke$arity$1(opts__$1),cljs.core.second)));var bc = (new crate.binding.bound_collection(atm__$1,(new crate.binding.notifier(null)),opts__$2,cljs.core.sorted_map.call(null)));cljs.core.add_watch.call(null,atm__$1,cljs.core.gensym.call(null,"bound-coll"),(function (_,___$1,___$2,neue){return crate.binding.bc_compare.call(null,bc,neue);
}));
crate.binding.bc_compare.call(null,bc,cljs.core.deref.call(null,atm__$1));
return bc;
};
var map_bound = function (as,atm,var_args){
var p__7068 = null;if (arguments.length > 2) {
  p__7068 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_bound__delegate.call(this,as,atm,p__7068);};
map_bound.cljs$lang$maxFixedArity = 2;
map_bound.cljs$lang$applyTo = (function (arglist__7071){
var as = cljs.core.first(arglist__7071);
arglist__7071 = cljs.core.next(arglist__7071);
var atm = cljs.core.first(arglist__7071);
var p__7068 = cljs.core.rest(arglist__7071);
return map_bound__delegate(as,atm,p__7068);
});
map_bound.cljs$core$IFn$_invoke$arity$variadic = map_bound__delegate;
return map_bound;
})()
;
crate.binding.binding_QMARK_ = (function binding_QMARK_(b){var G__7073 = b;if(G__7073)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7073.crate$binding$bindable$;
}
})()))
{return true;
} else
{if((!G__7073.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable,G__7073);
}
});
crate.binding.binding_coll_QMARK_ = (function binding_coll_QMARK_(b){var G__7075 = b;if(G__7075)
{var bit__4052__auto__ = null;if(cljs.core.truth_((function (){var or__3408__auto__ = bit__4052__auto__;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return G__7075.crate$binding$bindable_coll$;
}
})()))
{return true;
} else
{if((!G__7075.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7075);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,crate.binding.bindable_coll,G__7075);
}
});
crate.binding.deref_QMARK_ = (function deref_QMARK_(atm){var G__7077 = atm;if(G__7077)
{var bit__4052__auto__ = (G__7077.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__4052__auto__) || (G__7077.cljs$core$IDeref$))
{return true;
} else
{if((!G__7077.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7077);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__7077);
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
var bound__delegate = function (atm,p__7078){var vec__7080 = p__7078;var func = cljs.core.nth.call(null,vec__7080,0,null);var func__$1 = (function (){var or__3408__auto__ = func;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.identity;
}
})();return (new crate.binding.atom_binding(atm,func__$1));
};
var bound = function (atm,var_args){
var p__7078 = null;if (arguments.length > 1) {
  p__7078 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return bound__delegate.call(this,atm,p__7078);};
bound.cljs$lang$maxFixedArity = 1;
bound.cljs$lang$applyTo = (function (arglist__7081){
var atm = cljs.core.first(arglist__7081);
var p__7078 = cljs.core.rest(arglist__7081);
return bound__delegate(atm,p__7078);
});
bound.cljs$core$IFn$_invoke$arity$variadic = bound__delegate;
return bound;
})()
;
