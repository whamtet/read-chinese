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
rc_cljs.root.p = (function p(p1__5305_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__5305_SHARP_));
});
rc_cljs.root.file_selector_changed = (function file_selector_changed(){return $("#selector-form").submit();
});
rc_cljs.root.jyutping_QMARK_ = reagent.core.atom.call(null,true);
rc_cljs.root.content = (function content(){return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),"Select File to Translate, Paste or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"/translate"], null),"Example"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"selector-form",new cljs.core.Keyword(null,"action","action",3885920680),"/translate",new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"enc-type","enc-type",2664666047),"multipart/form-data"], null),"Title ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"name","name",1017277949),"title"], null)], null)," Jyutping ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),"jyutping",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core.deref.call(null,rc_cljs.root.jyutping_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5306_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.root.jyutping_QMARK_,p1__5306_SHARP_.target.checked);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"file",new cljs.core.Keyword(null,"name","name",1017277949),"file-selector",new cljs.core.Keyword(null,"on-change","on-change",606853840),rc_cljs.root.file_selector_changed], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"text",new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),"90%"], null),new cljs.core.Keyword(null,"rows","rows",1017410891),20], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"submit"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Recent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),(function (){var jyutping_QMARK_ = cljs.core.deref.call(null,rc_cljs.root.jyutping_QMARK_);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(function (){var iter__4119__auto__ = (function iter__5315(s__5316){return (new cljs.core.LazySeq(null,(function (){var s__5316__$1 = s__5316;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5316__$1);if(temp__4092__auto__)
{var s__5316__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5316__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5316__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5318 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5317 = 0;while(true){
if((i__5317 < size__4118__auto__))
{var text = cljs.core._nth.call(null,c__4117__auto__,i__5317);cljs.core.chunk_append.call(null,b__5318,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/recent",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),text], null)));
{
var G__5323 = (i__5317 + 1);
i__5317 = G__5323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5318),iter__5315.call(null,cljs.core.chunk_rest.call(null,s__5316__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5318),null);
}
} else
{var text = cljs.core.first.call(null,s__5316__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/recent",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),text], null)),iter__5315.call(null,cljs.core.rest.call(null,s__5316__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,cljs.core.deref.call(null,rc_cljs.root.recent_texts));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),(function (){var iter__4119__auto__ = (function iter__5319(s__5320){return (new cljs.core.LazySeq(null,(function (){var s__5320__$1 = s__5320;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5320__$1);if(temp__4092__auto__)
{var s__5320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5320__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5320__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5322 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5321 = 0;while(true){
if((i__5321 < size__4118__auto__))
{var text = cljs.core._nth.call(null,c__4117__auto__,i__5321);cljs.core.chunk_append.call(null,b__5322,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/reference",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("ref"),cljs.core.str(text)].join('')], null)));
{
var G__5324 = (i__5321 + 1);
i__5321 = G__5324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5322),iter__5319.call(null,cljs.core.chunk_rest.call(null,s__5320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5322),null);
}
} else
{var text = cljs.core.first.call(null,s__5320__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),rc_cljs.core.url.call(null,"/reference",new cljs.core.PersistentArrayMap(null, 2, ["k",text,"jyutping",jyutping_QMARK_], null))], null),text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("ref"),cljs.core.str(text)].join('')], null)),iter__5319.call(null,cljs.core.rest.call(null,s__5320__$2)));
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
