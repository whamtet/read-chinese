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
rc_cljs.core.value_filter = (function value_filter(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__5266(s__5267){return (new cljs.core.LazySeq(null,(function (){var s__5267__$1 = s__5267;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5267__$1);if(temp__4092__auto__)
{var s__5267__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5267__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5267__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5269 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5268 = 0;while(true){
if((i__5268 < size__4118__auto__))
{var vec__5272 = cljs.core._nth.call(null,c__4117__auto__,i__5268);var k = cljs.core.nth.call(null,vec__5272,0,null);var v = cljs.core.nth.call(null,vec__5272,1,null);if(cljs.core.truth_(f.call(null,v)))
{cljs.core.chunk_append.call(null,b__5269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__5274 = (i__5268 + 1);
i__5268 = G__5274;
continue;
}
} else
{{
var G__5275 = (i__5268 + 1);
i__5268 = G__5275;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5269),iter__5266.call(null,cljs.core.chunk_rest.call(null,s__5267__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5269),null);
}
} else
{var vec__5273 = cljs.core.first.call(null,s__5267__$2);var k = cljs.core.nth.call(null,vec__5273,0,null);var v = cljs.core.nth.call(null,vec__5273,1,null);if(cljs.core.truth_(f.call(null,v)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__5266.call(null,cljs.core.rest.call(null,s__5267__$2)));
} else
{{
var G__5276 = cljs.core.rest.call(null,s__5267__$2);
s__5267__$1 = G__5276;
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
rc_cljs.core.key_filter = (function key_filter(f,m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4119__auto__ = (function iter__5285(s__5286){return (new cljs.core.LazySeq(null,(function (){var s__5286__$1 = s__5286;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5286__$1);if(temp__4092__auto__)
{var s__5286__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5286__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5286__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5288 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5287 = 0;while(true){
if((i__5287 < size__4118__auto__))
{var vec__5291 = cljs.core._nth.call(null,c__4117__auto__,i__5287);var k = cljs.core.nth.call(null,vec__5291,0,null);var v = cljs.core.nth.call(null,vec__5291,1,null);if(cljs.core.truth_(f.call(null,k)))
{cljs.core.chunk_append.call(null,b__5288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__5293 = (i__5287 + 1);
i__5287 = G__5293;
continue;
}
} else
{{
var G__5294 = (i__5287 + 1);
i__5287 = G__5294;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5288),iter__5285.call(null,cljs.core.chunk_rest.call(null,s__5286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5288),null);
}
} else
{var vec__5292 = cljs.core.first.call(null,s__5286__$2);var k = cljs.core.nth.call(null,vec__5292,0,null);var v = cljs.core.nth.call(null,vec__5292,1,null);if(cljs.core.truth_(f.call(null,k)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__5285.call(null,cljs.core.rest.call(null,s__5286__$2)));
} else
{{
var G__5295 = cljs.core.rest.call(null,s__5286__$2);
s__5286__$1 = G__5295;
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
var G__5296 = s__$1.replace("%s",current);
var G__5297 = cljs.core.first.call(null,todo);
var G__5298 = cljs.core.rest.call(null,todo);
s__$1 = G__5296;
current = G__5297;
todo = G__5298;
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
format.cljs$lang$applyTo = (function (arglist__5299){
var s = cljs.core.first(arglist__5299);
var subs = cljs.core.rest(arglist__5299);
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
var G__5300 = a__$1.replace(b,c);
a__$1 = G__5300;
continue;
}
}
break;
}
});
rc_cljs.core.safe_name = (function safe_name(x){if(cljs.core.truth_(x))
{return cljs.core.name.call(null,x);
} else
{return "";
}
});
rc_cljs.core.url = (function url(host,m){return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,host,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__5303){var vec__5304 = p__5303;var k = cljs.core.nth.call(null,vec__5304,0,null);var v = cljs.core.nth.call(null,vec__5304,1,null);return [cljs.core.str(rc_cljs.core.safe_name.call(null,k)),cljs.core.str("="),cljs.core.str(rc_cljs.core.replace_all.call(null,rc_cljs.core.safe_name.call(null,v)," ","%20"))].join('');
}),m))))].join('');
});
rc_cljs.core.value_map = (function value_map(f,m){return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
