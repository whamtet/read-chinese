// Compiled by ClojureScript 0.0-2138
goog.provide('rc_cljs.root');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('rc_cljs.core');
goog.require('rc_cljs.core');
rc_cljs.root.p = (function p(p1__5295_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__5295_SHARP_));
});
rc_cljs.root.file_selector_changed = (function file_selector_changed(){return $("#selector-form").submit();
});
rc_cljs.root.jyutping_QMARK_ = reagent.core.atom.call(null,true);
rc_cljs.root.content = (function content(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Texts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),(function (){var jyutping_QMARK_ = cljs.core.deref.call(null,rc_cljs.root.jyutping_QMARK_);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(function (){var iter__4119__auto__ = (function iter__5300(s__5301){return (new cljs.core.LazySeq(null,(function (){var s__5301__$1 = s__5301;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5301__$1);if(temp__4092__auto__)
{var s__5301__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5301__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5301__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5303 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5302 = 0;while(true){
if((i__5302 < size__4118__auto__))
{var text = cljs.core._nth.call(null,c__4117__auto__,i__5302);cljs.core.chunk_append.call(null,b__5303,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/reference",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("ref"),cljs.core.str(text)].join('')], null)));
{
var G__5304 = (i__5302 + 1);
i__5302 = G__5304;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5303),iter__5300.call(null,cljs.core.chunk_rest.call(null,s__5301__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5303),null);
}
} else
{var text = cljs.core.first.call(null,s__5301__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/reference",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("ref"),cljs.core.str(text)].join('')], null)),iter__5300.call(null,cljs.core.rest.call(null,s__5301__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,cljs.core.deref.call(null,rc_cljs.root.reference_texts));
})()], null)], null);
})()], null)], null)], null);
});
rc_cljs.root.main = (function main(){return rc_cljs.core.page2.call(null,rc_cljs.root.content);
});
rc_cljs.root.t = (function t(){return cljs.core.println.call(null,cljs.core.deref.call(null,rc_cljs.root.jyutping));
});
