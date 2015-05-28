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
rc_cljs.translate.p = (function p(p1__5326_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__5326_SHARP_));
});
rc_cljs.translate.phrase_i = reagent.core.atom.call(null,0);
rc_cljs.translate.mode = reagent.core.atom.call(null,"review");
rc_cljs.translate.input = reagent.core.atom.call(null,"");
rc_cljs.translate.definition_input = reagent.core.atom.call(null,"");
rc_cljs.translate.alphabetic_QMARK_ = reagent.core.atom.call(null,false);
rc_cljs.translate.sorted_phrases = reagent.core.atom.call(null,null);
/**
* advance char if matches
*/
rc_cljs.translate.advance_char = (function advance_char(){if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,rc_cljs.translate.input),cljs.core.first.call(null,cljs.core.nth.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)),cljs.core.deref.call(null,rc_cljs.translate.phrase_i))))) && ((cljs.core.deref.call(null,rc_cljs.translate.phrase_i) < (cljs.core.count.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)) - 1))))
{cljs.core.swap_BANG_.call(null,rc_cljs.translate.phrase_i,cljs.core.inc);
return cljs.core.reset_BANG_.call(null,rc_cljs.translate.input,"");
} else
{return null;
}
});
/**
* advance char if at least one definition matches
*/
rc_cljs.translate.advance_definition = (function advance_definition(translations){if(cljs.core.truth_((function (){var and__3396__auto__ = cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__5327_SHARP_){return p1__5327_SHARP_.toLowerCase();
}),translations)).call(null,cljs.core.deref.call(null,rc_cljs.translate.definition_input));if(cljs.core.truth_(and__3396__auto__))
{return (cljs.core.deref.call(null,rc_cljs.translate.phrase_i) < (cljs.core.count.call(null,cljs.core.deref.call(null,rc_cljs.translate.phrases)) - 1));
} else
{return and__3396__auto__;
}
})()))
{cljs.core.swap_BANG_.call(null,rc_cljs.translate.phrase_i,cljs.core.inc);
return cljs.core.reset_BANG_.call(null,rc_cljs.translate.definition_input,"");
} else
{return null;
}
});
/**
* pane that shows or takes user input
*/
rc_cljs.translate.main_pane = (function main_pane(){var l = (cljs.core.truth_(cljs.core.deref.call(null,rc_cljs.translate.alphabetic_QMARK_))?cljs.core.deref.call(null,rc_cljs.translate.sorted_phrases):cljs.core.deref.call(null,rc_cljs.translate.phrases));var vec__5336 = cljs.core.nth.call(null,cljs.core.seq.call(null,l),cljs.core.deref.call(null,rc_cljs.translate.phrase_i));var char$ = cljs.core.nth.call(null,vec__5336,0,null);var vec__5337 = cljs.core.nth.call(null,vec__5336,1,null);var pinyin = cljs.core.nth.call(null,vec__5337,0,null);var translations = cljs.core.nth.call(null,vec__5337,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),pinyin], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,rc_cljs.translate.mode),"characters"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",3722789425),"3em"], null)], null),char$], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,rc_cljs.translate.input),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5328_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.input,p1__5328_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),"Next",new cljs.core.Keyword(null,"on-click","on-click",1416542092),rc_cljs.translate.advance_char], null)], null)], null))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),((cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,rc_cljs.translate.mode),"definitions"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),(function (){var iter__4119__auto__ = (function iter__5338(s__5339){return (new cljs.core.LazySeq(null,(function (){var s__5339__$1 = s__5339;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__5339__$1);if(temp__4092__auto__)
{var s__5339__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5339__$2))
{var c__4117__auto__ = cljs.core.chunk_first.call(null,s__5339__$2);var size__4118__auto__ = cljs.core.count.call(null,c__4117__auto__);var b__5341 = cljs.core.chunk_buffer.call(null,size__4118__auto__);if((function (){var i__5340 = 0;while(true){
if((i__5340 < size__4118__auto__))
{var translation = cljs.core._nth.call(null,c__4117__auto__,i__5340);cljs.core.chunk_append.call(null,b__5341,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),translation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("translation row"),cljs.core.str(translation)].join('')], null)));
{
var G__5342 = (i__5340 + 1);
i__5340 = G__5342;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5341),iter__5338.call(null,cljs.core.chunk_rest.call(null,s__5339__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5341),null);
}
} else
{var translation = cljs.core.first.call(null,s__5339__$2);return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),translation], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("translation row"),cljs.core.str(translation)].join('')], null)),iter__5338.call(null,cljs.core.rest.call(null,s__5339__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4119__auto__.call(null,translations);
})()], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,rc_cljs.translate.definition_input),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5329_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.definition_input,p1__5329_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),"Next",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return rc_cljs.translate.advance_definition.call(null,translations);
})], null)], null)], null))], null)], null)], null);
});
rc_cljs.translate.mode_pane = (function mode_pane(){return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"mode-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,"review",cljs.core.deref.call(null,rc_cljs.translate.mode)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.mode,"review");
})], null)], null)," Review ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"mode-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,"characters",cljs.core.deref.call(null,rc_cljs.translate.mode)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.mode,"characters");
})], null)], null)," Characters ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"mode-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,"definitions",cljs.core.deref.call(null,rc_cljs.translate.mode)),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.mode,"definitions");
})], null)], null)," Definitions ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core.deref.call(null,rc_cljs.translate.alphabetic_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__5343_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.alphabetic_QMARK_,p1__5343_SHARP_.target.checked);
})], null)], null)," Order? "], null);
});
rc_cljs.translate.content = (function content(){var phrase_i_val = cljs.core.deref.call(null,rc_cljs.translate.phrase_i);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rc_cljs.translate.mode_pane], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",4087841945),"450px",new cljs.core.Keyword(null,"overflow-y","overflow-y",3194205408),"scroll"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",1124020032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",1124062088),cljs.core.map_indexed.call(null,(function (i,p__5347){var vec__5348 = p__5347;var char$ = cljs.core.nth.call(null,vec__5348,0,null);var vec__5349 = cljs.core.nth.call(null,vec__5348,1,null);var pinyin = cljs.core.nth.call(null,vec__5349,0,null);var translations = cljs.core.nth.call(null,vec__5349,1,null);return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",1013907952),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"phrase-selector",new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,i,phrase_i_val),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,rc_cljs.translate.phrase_i,i);
})], null)], null),pinyin], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(pinyin),cljs.core.str("selector")].join('')], null));
}),(cljs.core.truth_(cljs.core.deref.call(null,rc_cljs.translate.alphabetic_QMARK_))?cljs.core.deref.call(null,rc_cljs.translate.sorted_phrases):cljs.core.deref.call(null,rc_cljs.translate.phrases)))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rc_cljs.translate.main_pane], null)], null)], null)], null)], null)], null);
});
rc_cljs.translate.main = (function main(){cljs.core.reset_BANG_.call(null,rc_cljs.translate.sorted_phrases,cljs.core.sort_by.call(null,(function (p1__5350_SHARP_){return cljs.core.first.call(null,cljs.core.second.call(null,p1__5350_SHARP_));
}),cljs.core.compare,cljs.core.deref.call(null,rc_cljs.translate.phrases)));
return rc_cljs.core.page2.call(null,rc_cljs.translate.content);
});
