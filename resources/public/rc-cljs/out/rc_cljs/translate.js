// Compiled by ClojureScript 0.0-2138
goog.provide('rc_cljs.translate');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('rc_cljs.core');
goog.require('rc_cljs.core');
rc_cljs.translate.p = (function p(p1__8326_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__8326_SHARP_));
});
rc_cljs.translate.phrase_i = reagent.core.atom.call(null,0);
rc_cljs.translate.mode = reagent.core.atom.call(null,"review");
rc_cljs.translate.input = reagent.core.atom.call(null,"");
/**
* advance char if matches
*/
rc_cljs.translate.advance_char = (function advance_char(){if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,rc_cljs.translate.input),cljs.core.first.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)),cljs.core.deref.call(null,rc_cljs.translate.phrase_i))))) && ((cljs.core.deref.call(null,rc_cljs.translate.phrase_i) < (cljs.core.count.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)) - 1))))
{return cljs.core.swap_BANG_.call(null,rc_cljs.translate.phrase_i,cljs.core.inc);
} else
{return null;
}
});
/**
* pane that shows or takes user input
*/
rc_cljs.translate.main_pane = (function main_pane(){var vec__8334 = cljs.core.nth.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)),cljs.core.deref.call(null,rc_cljs.translate.phrase_i));var char$ = cljs.core.nth.call(null,vec__8334,0,null);var vec__8335 = cljs.core.nth.call(null,vec__8334,1,null);var pinyin = cljs.core.nth.call(null,vec__8335,0,null);var translations = cljs.core.nth.call(null,vec__8335,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),pinyin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),((cljs.core._EQ_.call(null,"review",cljs.core.deref.call(null,rc_cljs.translate.mode)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",3722789425),"3em"], null)], null),char$], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,rc_cljs.translate.input),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__8327_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.input,p1__8327_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),"Next",new cljs.core.Keyword(null,"on-click","on-click",1416542092),rc_cljs.translate.advance_char], null)], null)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),(function (){var iter__4119__auto__ = (function iter__8336(s__8337){return (new cljs.core.LazySeq(null,(function (){var s__8337__$1 = s__8337;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8337__$1);if(temp__4092__auto__)
{var s__8337__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8337__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__8337__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__8339 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__8338 = 0;while(true){
if((i__8338 < size__4118__auto__))
{var translation = cljs.core._nth.call(null,c__4117__auto__,i__8338);cljs.core.chunk_append.call(null,b__8339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),translation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("translation row"),cljs.core.str(translation)].join('')], null)));
{
var G__8340 = (i__8338 + 1);
i__8338 = G__8340;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8339),iter__8336.call(null,cljs.core.chunk_rest.call(null,s__8337__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8339),null);
}
} else
{var translation = cljs.core.first.call(null,s__8337__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),translation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("translation row"),cljs.core.str(translation)].join('')], null)),iter__8336.call(null,cljs.core.rest.call(null,s__8337__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,translations);
})()], null)], null)], null)], null)], null);
});
rc_cljs.translate.mode_pane = (function mode_pane(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"mode-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,"review",cljs.core.deref.call(null,rc_cljs.translate.mode)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.mode,"review");
})], null)], null)," Review ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"mode-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,"test",cljs.core.deref.call(null,rc_cljs.translate.mode)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.mode,"test");
})], null)], null)," Test"], null);
});
rc_cljs.translate.content = (function content(){var phrase_i_val = cljs.core.deref.call(null,rc_cljs.translate.phrase_i);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rc_cljs.translate.mode_pane], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",4087841945),"450px",new cljs.core.Keyword(null,"overflow-y","overflow-y",3194205408),"scroll"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),cljs.core.map_indexed.call(null,(function (i,p__8344){var vec__8345 = p__8344;var char$ = cljs.core.nth.call(null,vec__8345,0,null);var vec__8346 = cljs.core.nth.call(null,vec__8345,1,null);var pinyin = cljs.core.nth.call(null,vec__8346,0,null);var translations = cljs.core.nth.call(null,vec__8346,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"phrase-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,i,phrase_i_val),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.phrase_i,i);
})], null)], null),pinyin], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(pinyin),cljs.core.str("selector")].join('')], null));
}),cljs.core.deref.call(null,rc_cljs.translate.phrases))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rc_cljs.translate.main_pane], null)], null)], null)], null)], null)], null);
});
rc_cljs.translate.main = (function main(){return rc_cljs.core.page2.call(null,rc_cljs.translate.content);
});
