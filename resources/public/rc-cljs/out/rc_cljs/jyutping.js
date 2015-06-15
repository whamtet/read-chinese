// Compiled by ClojureScript 0.0-2138
goog.provide('rc_cljs.jyutping');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('rc_cljs.core');
goog.require('rc_cljs.core');
rc_cljs.jyutping.input = reagent.core.atom.call(null,"");
rc_cljs.jyutping.output = reagent.core.atom.call(null,"");
rc_cljs.jyutping.content = (function content(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.deref.call(null,rc_cljs.jyutping.input),new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (p1__7205_SHARP_){return cljs.core.reset_BANG_.call(null,rc_cljs.jyutping.input,p1__7205_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"button",new cljs.core.Keyword(null,"value","value",1125876963),"Convert",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){var temp__4092__auto__ = cljs.core.deref.call(null,rc_cljs.jyutping.m).call(null,cljs.core.deref.call(null,rc_cljs.jyutping.input));if(cljs.core.truth_(temp__4092__auto__))
{var o = temp__4092__auto__;cljs.core.reset_BANG_.call(null,rc_cljs.jyutping.input,"");
return cljs.core.reset_BANG_.call(null,rc_cljs.jyutping.output,o);
} else
{return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),cljs.core.deref.call(null,rc_cljs.jyutping.output)], null)], null);
});
rc_cljs.jyutping.main = (function main(){return rc_cljs.core.page2.call(null,rc_cljs.jyutping.content);
});
