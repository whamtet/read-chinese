// Compiled by ClojureScript 0.0-2138
goog.provide('crate.compiler');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('crate.binding');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
crate.compiler.xmlns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989),"http://www.w3.org/1999/xhtml",new cljs.core.Keyword(null,"svg","svg",1014018518),"http://www.w3.org/2000/svg"], null);
crate.compiler.group_id = cljs.core.atom.call(null,0);
crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
crate.compiler.capture_binding = (function capture_binding(tag,b){return cljs.core.swap_BANG_.call(null,crate.compiler.bindings,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,b], null));
});
crate.compiler.as_content = (function as_content(parent,content){var seq__6774 = cljs.core.seq.call(null,content);var chunk__6775 = null;var count__6776 = 0;var i__6777 = 0;while(true){
if((i__6777 < count__6776))
{var c = cljs.core._nth.call(null,chunk__6775,i__6777);var child_6778 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_6778))
{goog.dom.appendChild(parent,child_6778);
} else
{}
{
var G__6779 = seq__6774;
var G__6780 = chunk__6775;
var G__6781 = count__6776;
var G__6782 = (i__6777 + 1);
seq__6774 = G__6779;
chunk__6775 = G__6780;
count__6776 = G__6781;
i__6777 = G__6782;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6774);if(temp__4092__auto__)
{var seq__6774__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6774__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6774__$1);{
var G__6783 = cljs.core.chunk_rest.call(null,seq__6774__$1);
var G__6784 = c__4150__auto__;
var G__6785 = cljs.core.count.call(null,c__4150__auto__);
var G__6786 = 0;
seq__6774 = G__6783;
chunk__6775 = G__6784;
count__6776 = G__6785;
i__6777 = G__6786;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6774__$1);var child_6787 = (((c == null))?null:((cljs.core.map_QMARK_.call(null,c))?(function(){throw "Maps cannot be used as content"})():((typeof c === 'string')?goog.dom.createTextNode(c):((cljs.core.vector_QMARK_.call(null,c))?crate.compiler.elem_factory.call(null,c):((cljs.core.seq_QMARK_.call(null,c))?as_content.call(null,parent,c):((crate.binding.binding_coll_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"coll","coll",1016963678),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():((crate.binding.binding_QMARK_.call(null,c))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"text","text",1017460895),c);
return as_content.call(null,parent,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [crate.binding.value.call(null,c)], null));
})():(cljs.core.truth_(c.nodeName)?c:(cljs.core.truth_(c.get)?c.get(0):((new cljs.core.Keyword(null,"else","else",1017020587))?goog.dom.createTextNode([cljs.core.str(c)].join('')):null))))))))));if(cljs.core.truth_(child_6787))
{goog.dom.appendChild(parent,child_6787);
} else
{}
{
var G__6788 = cljs.core.next.call(null,seq__6774__$1);
var G__6789 = null;
var G__6790 = 0;
var G__6791 = 0;
seq__6774 = G__6788;
chunk__6775 = G__6789;
count__6776 = G__6790;
i__6777 = G__6791;
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
crate.compiler.dom_binding = (function (){var method_table__4260__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4264__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("dom-binding",(function (type,_,___$1){return type;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4264__auto__,method_table__4260__auto__,prefer_table__4261__auto__,method_cache__4262__auto__,cached_hierarchy__4263__auto__));
})();
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"text","text",1017460895),(function (_,b,elem){return crate.binding.on_change.call(null,b,(function (v){goog.dom.removeChildren(elem);
return crate.compiler.as_content.call(null,elem,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (_,p__6792,elem){var vec__6793 = p__6792;var k = cljs.core.nth.call(null,vec__6793,0,null);var b = cljs.core.nth.call(null,vec__6793,1,null);return crate.binding.on_change.call(null,b,(function (v){return crate.compiler.dom_attr.call(null,elem,k,v);
}));
}));
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"style","style",1123684643),(function (_,p__6794,elem){var vec__6795 = p__6794;var k = cljs.core.nth.call(null,vec__6795,0,null);var b = cljs.core.nth.call(null,vec__6795,1,null);return crate.binding.on_change.call(null,b,(function (v){if(cljs.core.truth_(k))
{return crate.compiler.dom_style.call(null,elem,k,v);
} else
{return crate.compiler.dom_style.call(null,elem,v);
}
}));
}));
crate.compiler.dom_add = (function dom_add(bc,parent,elem,v){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"add","add",1014000659));if(cljs.core.truth_(temp__4090__auto__))
{var adder = temp__4090__auto__;return adder.call(null,parent,elem,v);
} else
{return goog.dom.appendChild(parent,elem);
}
});
crate.compiler.dom_remove = (function dom_remove(bc,elem){var temp__4090__auto__ = crate.binding.opt.call(null,bc,new cljs.core.Keyword(null,"remove","remove",4374260726));if(cljs.core.truth_(temp__4090__auto__))
{var remover = temp__4090__auto__;return remover.call(null,elem);
} else
{return goog.dom.removeNode(elem);
}
});
cljs.core._add_method.call(null,crate.compiler.dom_binding,new cljs.core.Keyword(null,"coll","coll",1016963678),(function (_,bc,parent){return crate.binding.on_change.call(null,bc,(function (type,elem,v){var pred__6796 = cljs.core._EQ_;var expr__6797 = type;if(cljs.core.truth_(pred__6796.call(null,new cljs.core.Keyword(null,"add","add",1014000659),expr__6797)))
{return crate.compiler.dom_add.call(null,bc,parent,elem,v);
} else
{if(cljs.core.truth_(pred__6796.call(null,new cljs.core.Keyword(null,"remove","remove",4374260726),expr__6797)))
{return crate.compiler.dom_remove.call(null,bc,elem);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__6797)].join('')));
}
}
}));
}));
crate.compiler.handle_bindings = (function handle_bindings(bs,elem){var seq__6805 = cljs.core.seq.call(null,bs);var chunk__6806 = null;var count__6807 = 0;var i__6808 = 0;while(true){
if((i__6808 < count__6807))
{var vec__6809 = cljs.core._nth.call(null,chunk__6806,i__6808);var type = cljs.core.nth.call(null,vec__6809,0,null);var b = cljs.core.nth.call(null,vec__6809,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__6811 = seq__6805;
var G__6812 = chunk__6806;
var G__6813 = count__6807;
var G__6814 = (i__6808 + 1);
seq__6805 = G__6811;
chunk__6806 = G__6812;
count__6807 = G__6813;
i__6808 = G__6814;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6805);if(temp__4092__auto__)
{var seq__6805__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6805__$1))
{var c__4150__auto__ = cljs.core.chunk_first.call(null,seq__6805__$1);{
var G__6815 = cljs.core.chunk_rest.call(null,seq__6805__$1);
var G__6816 = c__4150__auto__;
var G__6817 = cljs.core.count.call(null,c__4150__auto__);
var G__6818 = 0;
seq__6805 = G__6815;
chunk__6806 = G__6816;
count__6807 = G__6817;
i__6808 = G__6818;
continue;
}
} else
{var vec__6810 = cljs.core.first.call(null,seq__6805__$1);var type = cljs.core.nth.call(null,vec__6810,0,null);var b = cljs.core.nth.call(null,vec__6810,1,null);crate.compiler.dom_binding.call(null,type,b,elem);
{
var G__6819 = cljs.core.next.call(null,seq__6805__$1);
var G__6820 = null;
var G__6821 = 0;
var G__6822 = 0;
seq__6805 = G__6819;
chunk__6806 = G__6820;
count__6807 = G__6821;
i__6808 = G__6822;
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
crate.compiler.dom_style = (function() {
var dom_style = null;
var dom_style__2 = (function (elem,v){if(typeof v === 'string')
{elem.setAttribute("style",v);
} else
{if(cljs.core.map_QMARK_.call(null,v))
{var seq__6829_6835 = cljs.core.seq.call(null,v);var chunk__6830_6836 = null;var count__6831_6837 = 0;var i__6832_6838 = 0;while(true){
if((i__6832_6838 < count__6831_6837))
{var vec__6833_6839 = cljs.core._nth.call(null,chunk__6830_6836,i__6832_6838);var k_6840 = cljs.core.nth.call(null,vec__6833_6839,0,null);var v_6841__$1 = cljs.core.nth.call(null,vec__6833_6839,1,null);dom_style.call(null,elem,k_6840,v_6841__$1);
{
var G__6842 = seq__6829_6835;
var G__6843 = chunk__6830_6836;
var G__6844 = count__6831_6837;
var G__6845 = (i__6832_6838 + 1);
seq__6829_6835 = G__6842;
chunk__6830_6836 = G__6843;
count__6831_6837 = G__6844;
i__6832_6838 = G__6845;
continue;
}
} else
{var temp__4092__auto___6846 = cljs.core.seq.call(null,seq__6829_6835);if(temp__4092__auto___6846)
{var seq__6829_6847__$1 = temp__4092__auto___6846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6829_6847__$1))
{var c__4150__auto___6848 = cljs.core.chunk_first.call(null,seq__6829_6847__$1);{
var G__6849 = cljs.core.chunk_rest.call(null,seq__6829_6847__$1);
var G__6850 = c__4150__auto___6848;
var G__6851 = cljs.core.count.call(null,c__4150__auto___6848);
var G__6852 = 0;
seq__6829_6835 = G__6849;
chunk__6830_6836 = G__6850;
count__6831_6837 = G__6851;
i__6832_6838 = G__6852;
continue;
}
} else
{var vec__6834_6853 = cljs.core.first.call(null,seq__6829_6847__$1);var k_6854 = cljs.core.nth.call(null,vec__6834_6853,0,null);var v_6855__$1 = cljs.core.nth.call(null,vec__6834_6853,1,null);dom_style.call(null,elem,k_6854,v_6855__$1);
{
var G__6856 = cljs.core.next.call(null,seq__6829_6847__$1);
var G__6857 = null;
var G__6858 = 0;
var G__6859 = 0;
seq__6829_6835 = G__6856;
chunk__6830_6836 = G__6857;
count__6831_6837 = G__6858;
i__6832_6838 = G__6859;
continue;
}
}
} else
{}
}
break;
}
} else
{if(crate.binding.binding_QMARK_.call(null,v))
{crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null));
dom_style.call(null,elem,crate.binding.value.call(null,v));
} else
{}
}
}
return elem;
});
var dom_style__3 = (function (elem,k,v){var v__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);return goog.style.setStyle(elem,cljs.core.name.call(null,k),v__$1);
});
dom_style = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_style__2.call(this,elem,k);
case 3:
return dom_style__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_style.cljs$core$IFn$_invoke$arity$2 = dom_style__2;
dom_style.cljs$core$IFn$_invoke$arity$3 = dom_style__3;
return dom_style;
})()
;
crate.compiler.dom_attr = (function() {
var dom_attr = null;
var dom_attr__2 = (function (elem,attrs){if(cljs.core.truth_(elem))
{if(!(cljs.core.map_QMARK_.call(null,attrs)))
{return elem.getAttribute(cljs.core.name.call(null,attrs));
} else
{var seq__6866_6872 = cljs.core.seq.call(null,attrs);var chunk__6867_6873 = null;var count__6868_6874 = 0;var i__6869_6875 = 0;while(true){
if((i__6869_6875 < count__6868_6874))
{var vec__6870_6876 = cljs.core._nth.call(null,chunk__6867_6873,i__6869_6875);var k_6877 = cljs.core.nth.call(null,vec__6870_6876,0,null);var v_6878 = cljs.core.nth.call(null,vec__6870_6876,1,null);dom_attr.call(null,elem,k_6877,v_6878);
{
var G__6879 = seq__6866_6872;
var G__6880 = chunk__6867_6873;
var G__6881 = count__6868_6874;
var G__6882 = (i__6869_6875 + 1);
seq__6866_6872 = G__6879;
chunk__6867_6873 = G__6880;
count__6868_6874 = G__6881;
i__6869_6875 = G__6882;
continue;
}
} else
{var temp__4092__auto___6883 = cljs.core.seq.call(null,seq__6866_6872);if(temp__4092__auto___6883)
{var seq__6866_6884__$1 = temp__4092__auto___6883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6866_6884__$1))
{var c__4150__auto___6885 = cljs.core.chunk_first.call(null,seq__6866_6884__$1);{
var G__6886 = cljs.core.chunk_rest.call(null,seq__6866_6884__$1);
var G__6887 = c__4150__auto___6885;
var G__6888 = cljs.core.count.call(null,c__4150__auto___6885);
var G__6889 = 0;
seq__6866_6872 = G__6886;
chunk__6867_6873 = G__6887;
count__6868_6874 = G__6888;
i__6869_6875 = G__6889;
continue;
}
} else
{var vec__6871_6890 = cljs.core.first.call(null,seq__6866_6884__$1);var k_6891 = cljs.core.nth.call(null,vec__6871_6890,0,null);var v_6892 = cljs.core.nth.call(null,vec__6871_6890,1,null);dom_attr.call(null,elem,k_6891,v_6892);
{
var G__6893 = cljs.core.next.call(null,seq__6866_6884__$1);
var G__6894 = null;
var G__6895 = 0;
var G__6896 = 0;
seq__6866_6872 = G__6893;
chunk__6867_6873 = G__6894;
count__6868_6874 = G__6895;
i__6869_6875 = G__6896;
continue;
}
}
} else
{}
}
break;
}
return elem;
}
} else
{return null;
}
});
var dom_attr__3 = (function (elem,k,v){if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))
{crate.compiler.dom_style.call(null,elem,v);
} else
{var v_6897__$1 = ((crate.binding.binding_QMARK_.call(null,v))?(function (){crate.compiler.capture_binding.call(null,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
return crate.binding.value.call(null,v);
})():v);elem.setAttribute(cljs.core.name.call(null,k),v_6897__$1);
}
return elem;
});
dom_attr = function(elem,k,v){
switch(arguments.length){
case 2:
return dom_attr__2.call(this,elem,k);
case 3:
return dom_attr__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_attr.cljs$core$IFn$_invoke$arity$2 = dom_attr__2;
dom_attr.cljs$core$IFn$_invoke$arity$3 = dom_attr__3;
return dom_attr;
})()
;
/**
* Regular expression that parses a CSS-style id and class from a tag name.
*/
crate.compiler.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
crate.compiler.normalize_map_attrs = (function normalize_map_attrs(map_attrs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6900){var vec__6901 = p__6900;var n = cljs.core.nth.call(null,vec__6901,0,null);var v = cljs.core.nth.call(null,vec__6901,1,null);if(v === true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,cljs.core.name.call(null,n)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,v], null);
}
}),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.boolean$,cljs.core.second),map_attrs)));
});
/**
* Ensure a tag vector is of the form [tag-name attrs content].
*/
crate.compiler.normalize_element = (function normalize_element(p__6903){var vec__6908 = p__6903;var tag = cljs.core.nth.call(null,vec__6908,0,null);var content = cljs.core.nthnext.call(null,vec__6908,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw [cljs.core.str(tag),cljs.core.str(" is not a valid tag name.")].join('');
} else
{}
var vec__6909 = cljs.core.re_matches.call(null,crate.compiler.re_tag,cljs.core.name.call(null,tag));var _ = cljs.core.nth.call(null,vec__6909,0,null);var tag__$1 = cljs.core.nth.call(null,vec__6909,1,null);var id = cljs.core.nth.call(null,vec__6909,2,null);var class$ = cljs.core.nth.call(null,vec__6909,3,null);var vec__6910 = (function (){var vec__6911 = clojure.string.split.call(null,tag__$1,/:/);var nsp = cljs.core.nth.call(null,vec__6911,0,null);var t = cljs.core.nth.call(null,vec__6911,1,null);var ns_xmlns = crate.compiler.xmlns.call(null,cljs.core.keyword.call(null,nsp));if(cljs.core.truth_(t))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3408__auto__ = ns_xmlns;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return nsp;
}
})(),t], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xhtml","xhtml",1127939989).cljs$core$IFn$_invoke$arity$1(crate.compiler.xmlns),nsp], null);
}
})();var nsp = cljs.core.nth.call(null,vec__6910,0,null);var tag__$2 = cljs.core.nth.call(null,vec__6910,1,null);var tag_attrs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (vec__6909,_,tag__$1,id,class$,vec__6910,nsp,tag__$2){
return (function (p1__6902_SHARP_){return !((cljs.core.second.call(null,p1__6902_SHARP_) == null));
});})(vec__6909,_,tag__$1,id,class$,vec__6910,nsp,tag__$2))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(function (){var or__3408__auto__ = id;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return null;
}
})(),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null)], null)));var map_attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,map_attrs))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,cljs.core.merge.call(null,tag_attrs,crate.compiler.normalize_map_attrs.call(null,map_attrs)),cljs.core.next.call(null,content)], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [nsp,tag__$2,tag_attrs,content], null);
}
});
crate.compiler.parse_content = (function parse_content(elem,content){var attrs = cljs.core.first.call(null,content);if(cljs.core.map_QMARK_.call(null,attrs))
{crate.compiler.dom_attr.call(null,elem,attrs);
return cljs.core.rest.call(null,content);
} else
{return content;
}
});
crate.compiler.create_elem = (cljs.core.truth_(document.createElementNS)?(function (nsp,tag){return document.createElementNS(nsp,tag);
}):(function (_,tag){return document.createElement(tag);
}));
crate.compiler.elem_factory = (function elem_factory(tag_def){var bindings6914 = crate.compiler.bindings;try{crate.compiler.bindings = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var vec__6915 = crate.compiler.normalize_element.call(null,tag_def);var nsp = cljs.core.nth.call(null,vec__6915,0,null);var tag = cljs.core.nth.call(null,vec__6915,1,null);var attrs = cljs.core.nth.call(null,vec__6915,2,null);var content = cljs.core.nth.call(null,vec__6915,3,null);var elem = crate.compiler.create_elem.call(null,nsp,tag);crate.compiler.dom_attr.call(null,elem,attrs);
crate.compiler.as_content.call(null,elem,content);
crate.compiler.handle_bindings.call(null,cljs.core.deref.call(null,crate.compiler.bindings),elem);
return elem;
}finally {crate.compiler.bindings = bindings6914;
}});
/**
* Add an optional attribute argument to a function that returns a vector tag.
*/
crate.compiler.add_optional_attrs = (function add_optional_attrs(func){return (function() { 
var G__6918__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__6917 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__6917,0,null);var body = cljs.core.nthnext.call(null,vec__6917,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__6918 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__6918__delegate.call(this,args);};
G__6918.cljs$lang$maxFixedArity = 0;
G__6918.cljs$lang$applyTo = (function (arglist__6919){
var args = cljs.core.seq(arglist__6919);
return G__6918__delegate(args);
});
G__6918.cljs$core$IFn$_invoke$arity$variadic = G__6918__delegate;
return G__6918;
})()
;
});
