// Compiled by ClojureScript 0.0-2138
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.debug');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('reagent.impl.component');
goog.require('clojure.string');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"className",new cljs.core.Keyword(null,"for","for",1014005819),"htmlFor",new cljs.core.Keyword(null,"charset","charset",1752978622),"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (reagent.impl.util.clj_ifn_QMARK_.call(null,x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){if(typeof v === 'string')
{return v;
} else
{if(typeof v === 'number')
{return v;
} else
{if((v instanceof cljs.core.Keyword))
{return cljs.core.name.call(null,v);
} else
{if((v instanceof cljs.core.Symbol))
{return [cljs.core.str(v)].join('');
} else
{if(cljs.core.coll_QMARK_.call(null,v))
{return cljs.core.clj__GT_js.call(null,v);
} else
{if(cljs.core.ifn_QMARK_.call(null,v))
{return (function() { 
var G__6643__delegate = function (args){return cljs.core.apply.call(null,v,args);
};
var G__6643 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6643__delegate.call(this,args);};
G__6643.cljs$lang$maxFixedArity = 0;
G__6643.cljs$lang$applyTo = (function (arglist__6644){
var args = cljs.core.seq(arglist__6644);
return G__6643__delegate(args);
});
G__6643.cljs$core$IFn$_invoke$arity$variadic = G__6643__delegate;
return G__6643;
})()
;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return v;
} else
{return null;
}
}
}
}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3408__auto__ = reagent.impl.template.attr_aliases.call(null,n);if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return reagent.impl.util.dash_to_camel.call(null,n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1.call(null,reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){if(typeof x === 'string')
{return x;
} else
{if(typeof x === 'number')
{return x;
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.reduce_kv.call(null,(function (o,k,v){var G__6646 = o;(G__6646[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.to_js_val.call(null,v));
return G__6646;
}),{},x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return reagent.impl.template.to_js_val.call(null,x);
} else
{return null;
}
}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__6647){var vec__6649 = p__6647;var id = cljs.core.nth.call(null,vec__6649,0,null);var class$ = cljs.core.nth.call(null,vec__6649,1,null);var pid = (props["id"]);(props["id"] = ((!((pid == null)))?pid:id));
if((class$ == null))
{return null;
} else
{var old = (props["className"]);return (props["className"] = ((!((old == null)))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join(''):class$));
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){if((cljs.core.empty_QMARK_.call(null,props)) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type.call(null,props) === Object))
{return props;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var objprops = cljs.core.reduce_kv.call(null,(function (o,k,v){var pname_6650 = reagent.impl.template.cached_prop_name.call(null,k);if(!((pname_6650 === "key")))
{(o[pname_6650] = reagent.impl.template.convert_prop_value.call(null,v));
} else
{}
return o;
}),{},props);if((id_class == null))
{} else
{reagent.impl.template.set_id_class.call(null,objprops,id_class);
}
return objprops;
} else
{return null;
}
}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){var res = on_change.call(null,e);reagent.impl.batching.queue_render.call(null,this$);
return res;
});
reagent.impl.template.input_did_update = (function input_did_update(this$){var value = (this$["cljsInputValue"]);if((value == null))
{return null;
} else
{var node = (this$["getDOMNode"])();if(cljs.core.not_EQ_.call(null,value,(node["value"])))
{return (node["value"] = value);
} else
{return null;
}
}
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){var on_change = (jsprops["onChange"]);var value = (((on_change == null))?null:(jsprops["value"]));(this$["cljsInputValue"] = value);
if((value == null))
{return null;
} else
{reagent.impl.batching.mark_rendered.call(null,this$);
var G__6653 = jsprops;(G__6653["defaultValue"] = value);
(G__6653["value"] = null);
(G__6653["onChange"] = (function (p1__6651_SHARP_){return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__6651_SHARP_);
}));
return G__6653;
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){var DOM = (React["DOM"]);return ((x === (DOM["input"]))) || ((x === (DOM["textarea"])));
});
reagent.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class,input_setup){var inprops = (this$["props"]);var argv = (inprops["argv"]);var props = cljs.core.nth.call(null,argv,1,null);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsargs = reagent.impl.template.convert_args.call(null,argv,((hasprops)?2:1),((inprops["level"]) + 1));var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),id_class);if((input_setup == null))
{} else
{input_setup.call(null,this$,jsprops);
}
(jsargs[0] = jsprops);
return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function wrapped_should_update(c,nextprops,nextstate){var or__3408__auto__ = reagent.impl.util._STAR_always_update_STAR_;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{var a1 = (c["props"]["argv"]);var a2 = (nextprops["argv"]);return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,a1,a2));
}
});
reagent.impl.template.add_input_methods = (function add_input_methods(spec){var G__6655 = spec;(G__6655["componentDidUpdate"] = (function (){var c = this;return reagent.impl.template.input_did_update.call(null,c);
}));
(G__6655["componentWillUnmount"] = (function (){var c = this;return reagent.impl.batching.dispose.call(null,c);
}));
return G__6655;
});
reagent.impl.template.wrap_component = (function wrap_component(comp,extras,name){var input_QMARK_ = reagent.impl.template.input_component_QMARK_.call(null,comp);var input_setup = ((input_QMARK_)?reagent.impl.template.input_render_setup:null);var spec = {"displayName": (function (){var or__3408__auto__ = name;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return "ComponentWrapper";
}
})(), "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__6656_SHARP_,p2__6657_SHARP_){var C = this;return reagent.impl.template.wrapped_should_update.call(null,C,p1__6656_SHARP_,p2__6657_SHARP_);
});})(input_QMARK_,input_setup))
, "render": ((function (input_QMARK_,input_setup){
return (function (){var C = this;return reagent.impl.template.wrapped_render.call(null,C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
};if(input_QMARK_)
{reagent.impl.template.add_input_methods.call(null,spec);
} else
{}
return (React["createClass"])(spec);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){var vec__6659 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));var tag = cljs.core.nth.call(null,vec__6659,0,null);var id = cljs.core.nth.call(null,vec__6659,1,null);var class$ = cljs.core.nth.call(null,vec__6659,2,null);var comp = ((React["DOM"])[tag]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1637472056,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3408__auto__ = id;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function get_wrapper(tag){var vec__6661 = reagent.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__6661,0,null);var id_class = cljs.core.nth.call(null,vec__6661,1,null);return reagent.impl.template.wrap_component.call(null,comp,id_class,[cljs.core.str(tag)].join(''));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1.call(null,reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"component-function","component-function",4698348058),f);var res = reagent.impl.template.create_class.call(null,withrender);var wrapf = reagent.impl.util.cached_react_class.call(null,res);reagent.impl.util.cache_react_class.call(null,f,wrapf);
return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag))
{return reagent.impl.template.cached_wrapper.call(null,tag);
} else
{var cached_class = reagent.impl.util.cached_react_class.call(null,tag);if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_((React["isValidClass"])(tag)))
{return reagent.impl.util.cache_react_class.call(null,tag,reagent.impl.template.wrap_component.call(null,tag,null,null));
} else
{return reagent.impl.template.fn_to_class.call(null,tag);
}
}
}
});
reagent.impl.template.get_key = (function get_key(x){if(cljs.core.map_QMARK_.call(null,x))
{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",1014010321));
} else
{return null;
}
});
reagent.impl.template.vec_to_comp = (function vec_to_comp(v,level){if((cljs.core.count.call(null,v) > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"v","v",-1640531409,null)))))].join('')));
}
if(reagent.impl.template.valid_tag_QMARK_.call(null,cljs.core.nth.call(null,v,0)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.call(null,v))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",-1732125489,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",-1640422117,null),new cljs.core.Symbol(null,"v","v",-1640531409,null),0))))].join('')));
}
var c = reagent.impl.template.as_class.call(null,cljs.core.nth.call(null,v,0));var jsprops = {"level": level, "argv": v};var k_6662 = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));var k_SINGLEQUOTE__6663 = (((k_6662 == null))?reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,1,null)):k_6662);if((k_SINGLEQUOTE__6663 == null))
{} else
{(jsprops["key"] = k_SINGLEQUOTE__6663);
}
return c.call(null,jsprops);
});
reagent.impl.template.seq_ctx = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){if(cljs.core.truth_((reagent.impl.template.seq_ctx["warned"])))
{return null;
} else
{if(typeof console !== 'undefined')
{console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.call(null,x));
} else
{}
return (reagent.impl.template.seq_ctx["warned"] = true);
}
});
reagent.impl.template.as_component = (function() {
var as_component = null;
var as_component__1 = (function (x){return as_component.call(null,x,0);
});
var as_component__2 = (function (x,level){if(typeof x === 'string')
{return x;
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return reagent.impl.template.vec_to_comp.call(null,x,level);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null))))
{return reagent.impl.template.expand_seq.call(null,x,level);
} else
{var s = reagent.ratom.capture_derefed.call(null,(function (){return reagent.impl.template.expand_seq.call(null,x,level);
}),reagent.impl.template.seq_ctx);if(cljs.core.truth_(reagent.ratom.captured.call(null,reagent.impl.template.seq_ctx)))
{reagent.impl.template.warn_on_deref.call(null,x);
} else
{}
return s;
}
} else
{if(true)
{return x;
} else
{return null;
}
}
}
}
});
as_component = function(x,level){
switch(arguments.length){
case 1:
return as_component__1.call(this,x);
case 2:
return as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_component.cljs$core$IFn$_invoke$arity$1 = as_component__1;
as_component.cljs$core$IFn$_invoke$arity$2 = as_component__2;
return as_component;
})()
;
reagent.impl.template.create_class = (function create_class(spec){return reagent.impl.component.create_class.call(null,spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function expand_seq(s,level){var a = cljs.core.into_array.call(null,s);var level_SINGLEQUOTE_ = (level + 1);var n__4250__auto___6664 = a.length;var i_6665 = 0;while(true){
if((i_6665 < n__4250__auto___6664))
{(a[i_6665] = reagent.impl.template.as_component.call(null,(a[i_6665]),level_SINGLEQUOTE_));
{
var G__6666 = (i_6665 + 1);
i_6665 = G__6666;
continue;
}
} else
{}
break;
}
return a;
});
reagent.impl.template.convert_args = (function convert_args(argv,first_child,level){if((cljs.core.count.call(null,argv) === (first_child + 1)))
{return [null,reagent.impl.template.as_component.call(null,cljs.core.nth.call(null,argv,first_child),level)];
} else
{return cljs.core.reduce_kv.call(null,(function (a,k,v){if((k >= first_child))
{a.push(reagent.impl.template.as_component.call(null,v,level));
} else
{}
return a;
}),[null],argv);
}
});
