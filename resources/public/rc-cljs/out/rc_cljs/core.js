// Compiled by ClojureScript 0.0-2138
goog.provide('rc_cljs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('ajax.core');
goog.require('jayq.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('crate.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('jayq.core');
cljs.core.enable_console_print_BANG_.call(null);
rc_cljs.core.space_interpose = (function space_interpose(s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",s));
});
rc_cljs.core.apply_interpose = (function apply_interpose(i,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
rc_cljs.core.value_filter = (function value_filter(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__5473(s__5474){return (new cljs.core.LazySeq(null,(function (){var s__5474__$1 = s__5474;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5474__$1);if(temp__4092__auto__)
{var s__5474__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5474__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5474__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5476 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5475 = 0;while(true){
if((i__5475 < size__4118__auto__))
{var vec__5479 = cljs.core._nth.call(null,c__4117__auto__,i__5475);var k = cljs.core.nth.call(null,vec__5479,0,null);var v = cljs.core.nth.call(null,vec__5479,1,null);if(cljs.core.truth_(f.call(null,v)))
{cljs.core.chunk_append.call(null,b__5476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__5481 = (i__5475 + 1);
i__5475 = G__5481;
continue;
}
} else
{{
var G__5482 = (i__5475 + 1);
i__5475 = G__5482;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5476),iter__5473.call(null,cljs.core.chunk_rest.call(null,s__5474__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5476),null);
}
} else
{var vec__5480 = cljs.core.first.call(null,s__5474__$2);var k = cljs.core.nth.call(null,vec__5480,0,null);var v = cljs.core.nth.call(null,vec__5480,1,null);if(cljs.core.truth_(f.call(null,v)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__5473.call(null,cljs.core.rest.call(null,s__5474__$2)));
} else
{{
var G__5483 = cljs.core.rest.call(null,s__5474__$2);
s__5474__$1 = G__5483;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,m);
})());
});
rc_cljs.core.key_filter = (function key_filter(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__5492(s__5493){return (new cljs.core.LazySeq(null,(function (){var s__5493__$1 = s__5493;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5493__$1);if(temp__4092__auto__)
{var s__5493__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5493__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5493__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5495 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5494 = 0;while(true){
if((i__5494 < size__4118__auto__))
{var vec__5498 = cljs.core._nth.call(null,c__4117__auto__,i__5494);var k = cljs.core.nth.call(null,vec__5498,0,null);var v = cljs.core.nth.call(null,vec__5498,1,null);if(cljs.core.truth_(f.call(null,k)))
{cljs.core.chunk_append.call(null,b__5495,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__5500 = (i__5494 + 1);
i__5494 = G__5500;
continue;
}
} else
{{
var G__5501 = (i__5494 + 1);
i__5494 = G__5501;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5495),iter__5492.call(null,cljs.core.chunk_rest.call(null,s__5493__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5495),null);
}
} else
{var vec__5499 = cljs.core.first.call(null,s__5493__$2);var k = cljs.core.nth.call(null,vec__5499,0,null);var v = cljs.core.nth.call(null,vec__5499,1,null);if(cljs.core.truth_(f.call(null,k)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__5492.call(null,cljs.core.rest.call(null,s__5493__$2)));
} else
{{
var G__5502 = cljs.core.rest.call(null,s__5493__$2);
s__5493__$1 = G__5502;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,m);
})());
});
rc_cljs.core.p = (function p(x){return cljs.core.println.call(null,cljs.core.pr_str.call(null,x));
});
rc_cljs.core.page2 = (function page2(contents){return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contents], null)], null),cljs.core.first.call(null,jayq.core.$.call(null,"#content")));
});
rc_cljs.core.str_contains_QMARK_ = (function str_contains_QMARK_(a,b){return cljs.core.not_EQ_.call(null,-1,a.indexOf(b));
});
/**
* @param {...*} var_args
*/
rc_cljs.core.format = (function() { 
var format__delegate = function (s,subs){var s__$1 = s;var current = cljs.core.first.call(null,subs);var todo = cljs.core.rest.call(null,subs);while(true){
if(cljs.core.truth_((function (){var and__3396__auto__ = rc_cljs.core.str_contains_QMARK_.call(null,s__$1,"%s");if(and__3396__auto__)
{return current;
} else
{return and__3396__auto__;
}
})()))
{{
var G__5503 = s__$1.replace("%s",current);
var G__5504 = cljs.core.first.call(null,todo);
var G__5505 = cljs.core.rest.call(null,todo);
s__$1 = G__5503;
current = G__5504;
todo = G__5505;
continue;
}
} else
{return s__$1;
}
break;
}
};
var format = function (s,var_args){
var subs = null;if (arguments.length > 1) {
  subs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format__delegate.call(this,s,subs);};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__5506){
var s = cljs.core.first(arglist__5506);
var subs = cljs.core.rest(arglist__5506);
return format__delegate(s,subs);
});
format.cljs$core$IFn$_invoke$arity$variadic = format__delegate;
return format;
})()
;
rc_cljs.core.link_to = (function link_to(url2,m){return document.location = rc_cljs.core.url.call(null,url2,m);
});
rc_cljs.core.link_to2 = (function link_to2(url2,m,new_window_QMARK_){if(cljs.core.truth_(new_window_QMARK_))
{return window.open(rc_cljs.core.url.call(null,url2,m),"_blank");
} else
{return document.location = rc_cljs.core.url.call(null,url2,m);
}
});
rc_cljs.core.replace_all = (function replace_all(a,b,c){var a__$1 = a;while(true){
if(cljs.core._EQ_.call(null,-1,a__$1.indexOf(b)))
{return a__$1;
} else
{{
var G__5507 = a__$1.replace(b,c);
a__$1 = G__5507;
continue;
}
}
break;
}
});
rc_cljs.core.safe_name = (function safe_name(x){if(cljs.core._EQ_.call(null,true,x))
{return [cljs.core.str(x)].join('');
} else
{if(cljs.core._EQ_.call(null,false,x))
{return "false";
} else
{if(cljs.core.truth_(x))
{return cljs.core.name.call(null,x);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return "";
} else
{return null;
}
}
}
}
});
rc_cljs.core.url = (function url(host,m){return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,host,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__5510){var vec__5511 = p__5510;var k = cljs.core.nth.call(null,vec__5511,0,null);var v = cljs.core.nth.call(null,vec__5511,1,null);return [cljs.core.str(rc_cljs.core.safe_name.call(null,k)),cljs.core.str("="),cljs.core.str(rc_cljs.core.replace_all.call(null,rc_cljs.core.safe_name.call(null,v)," ","%20"))].join('');
}),m))))].join('');
});
rc_cljs.core.value_map = (function value_map(f,m){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
