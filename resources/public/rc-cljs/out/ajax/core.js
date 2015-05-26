// Compiled by ClojureScript 0.0-2138
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.json.Serializer');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri.QueryData');
goog.require('goog.events');
goog.require('goog.net.XhrManager');
goog.require('cljs.reader');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.net.ErrorCode');
goog.require('goog.Uri.QueryData');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.structs');
goog.require('cljs.reader');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.Uri');
ajax.core.AjaxImpl = (function (){var obj6369 = {};return obj6369;
})();
ajax.core._js_ajax_request = (function _js_ajax_request(this$,uri,method,body,headers,handler,opts){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else
{return and__3396__auto__;
}
})())
{return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (ajax.core._js_ajax_request["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});
ajax.core.AjaxRequest = (function (){var obj6371 = {};return obj6371;
})();
ajax.core._abort = (function _abort(this$,error_code){if((function (){var and__3396__auto__ = this$;if(and__3396__auto__)
{return this$.ajax$core$AjaxRequest$_abort$arity$2;
} else
{return and__3396__auto__;
}
})())
{return this$.ajax$core$AjaxRequest$_abort$arity$2(this$,error_code);
} else
{var x__4029__auto__ = (((this$ == null))?null:this$);return (function (){var or__3408__auto__ = (ajax.core._abort[goog.typeOf(x__4029__auto__)]);if(or__3408__auto__)
{return or__3408__auto__;
} else
{var or__3408__auto____$1 = (ajax.core._abort["_"]);if(or__3408__auto____$1)
{return or__3408__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$,error_code);
}
});
(ajax.core.AjaxImpl["null"] = true);
(ajax.core._js_ajax_request["null"] = (function (this$,uri,method,body,headers,handler,p__6372){var map__6373 = p__6372;var map__6373__$1 = ((cljs.core.seq_QMARK_.call(null,map__6373))?cljs.core.apply.call(null,cljs.core.hash_map,map__6373):map__6373);var timeout = cljs.core.get.call(null,map__6373__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var G__6374 = (new goog.net.XhrIo());goog.events.listen(G__6374,goog.net.EventType.COMPLETE,handler);
G__6374.setTimeoutInterval((function (){var or__3408__auto__ = timeout;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return 0;
}
})());
G__6374.send(uri,method,body,headers);
return G__6374;
}));
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;
goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$2 = (function (this$,error_code){var this$__$1 = this;return this$__$1.abort(error_code);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__6375){var map__6376 = p__6375;var map__6376__$1 = ((cljs.core.seq_QMARK_.call(null,map__6376))?cljs.core.apply.call(null,cljs.core.hash_map,map__6376):map__6376);var max_retries = cljs.core.get.call(null,map__6376__$1,new cljs.core.Keyword(null,"max-retries","max-retries",902021455));var priority = cljs.core.get.call(null,map__6376__$1,new cljs.core.Keyword(null,"priority","priority",4143410454));var timeout = cljs.core.get.call(null,map__6376__$1,new cljs.core.Keyword(null,"timeout","timeout",3994960083));var id = cljs.core.get.call(null,map__6376__$1,new cljs.core.Keyword(null,"id","id",1013907597));var this$__$1 = this;return this$__$1.send(id,uri,method,body,headers,priority,handler,max_retries);
});
ajax.core.abort = (function abort(this$){return ajax.core._abort.call(null,this$,goog.net.ErrorCode.ABORT);
});
ajax.core.success_QMARK_ = (function success_QMARK_(status){return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [200,201,202,204,205,206], null));
});
ajax.core.read_edn = (function read_edn(xhrio){return cljs.reader.read_string.call(null,xhrio.getResponseText());
});
ajax.core.edn_response_format = (function edn_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",3584325486),"EDN"], null);
});
ajax.core.edn_request_format = (function edn_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/edn"], null);
});
ajax.core.params_to_str = (function params_to_str(params){if(cljs.core.truth_(params))
{return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else
{return null;
}
});
ajax.core.read_text = (function read_text(xhrio){return xhrio.getResponseText();
});
ajax.core.url_request_format = (function url_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function raw_response_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),ajax.core.read_text,new cljs.core.Keyword(null,"description","description",3584325486),"raw text"], null);
});
ajax.core.write_json = (function write_json(data){return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function json_request_format(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",1127304017),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",1799574400),"application/json"], null);
});
/**
* Returns a JSON response format.  Options include
* :keywords? Returns the keys as keywords
* :prefix A prefix that needs to be stripped off.  This is to
* combat JSON hijacking.  If you're using JSON with GET request,
* you should use this.
* http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
* http://haacked.com/archive/2009/06/24/json-hijacking.aspx
*/
ajax.core.json_response_format = (function json_response_format(p__6377){var map__6379 = p__6377;var map__6379__$1 = ((cljs.core.seq_QMARK_.call(null,map__6379))?cljs.core.apply.call(null,cljs.core.hash_map,map__6379):map__6379);var keywords_QMARK_ = cljs.core.get.call(null,map__6379__$1,new cljs.core.Keyword(null,"keywords?","keywords?",4346628423));var prefix = cljs.core.get.call(null,map__6379__$1,new cljs.core.Keyword(null,"prefix","prefix",4328760836));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function read_json(xhrio){var json = xhrio.getResponseJson(prefix);return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),keywords_QMARK_);
}),new cljs.core.Keyword(null,"description","description",3584325486),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join('')], null);
});
ajax.core.get_default_format = (function get_default_format(xhrio){var ct = (function (){var or__3408__auto__ = xhrio.getResponseHeader("Content-Type");if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return "";
}
})();var detect = (function detect(s){return (ct.indexOf(s) >= 0);
});
return cljs.core.update_in.call(null,((detect.call(null,"application/json"))?ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY):((detect.call(null,"application/edn"))?ajax.core.edn_response_format.call(null):((detect.call(null,"text/plain"))?ajax.core.raw_response_format.call(null):((detect.call(null,"text/html"))?ajax.core.raw_response_format.call(null):((new cljs.core.Keyword(null,"else","else",1017020587))?ajax.core.edn_response_format.call(null):null))))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",3584325486)], null),(function (p1__6380_SHARP_){return [cljs.core.str(p1__6380_SHARP_),cljs.core.str(" (default)")].join('');
}));
});
ajax.core.use_content_type = (function use_content_type(format){return cljs.core.dissoc.call(null,format,new cljs.core.Keyword(null,"write","write",1127304017));
});
ajax.core.get_format = (function get_format(format){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),format,new cljs.core.Keyword(null,"description","description",3584325486),"custom"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
});
ajax.core.exception_response = (function exception_response(e,status,p__6381,xhrio){var map__6383 = p__6381;var map__6383__$1 = ((cljs.core.seq_QMARK_.call(null,map__6383))?cljs.core.apply.call(null,cljs.core.hash_map,map__6383):map__6383);var description = cljs.core.get.call(null,map__6383__$1,new cljs.core.Keyword(null,"description","description",3584325486));var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"response","response",673580979),null], null);var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),status_text,new cljs.core.Keyword(null,"is-parse-error","is-parse-error",4116943293),true,new cljs.core.Keyword(null,"original-text","original-text",2831108891),xhrio.getResponseText());if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return parse_error;
} else
{return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"parse-error","parse-error",3528843744),parse_error);
}
});
ajax.core.interpret_response = (function interpret_response(format,response,get_default_format){try{var xhrio = response.target;var status = xhrio.getStatus();if(cljs.core._EQ_.call(null,-1,status))
{if(cljs.core._EQ_.call(null,xhrio.getLastErrorCode(),goog.net.ErrorCode.ABORT))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),-1,new cljs.core.Keyword(null,"status-text","status-text",4371493274),"Request aborted by client.",new cljs.core.Keyword(null,"aborted?","aborted?",2630502850),true], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),-1,new cljs.core.Keyword(null,"status-text","status-text",4371493274),"Request timed out.",new cljs.core.Keyword(null,"timeout?","timeout?",3232322160),true], null)], null);
}
} else
{var format__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format))?format:get_default_format.call(null,xhrio));var parse = new cljs.core.Keyword(null,"read","read",1017400584).cljs$core$IFn$_invoke$arity$1(format__$1);try{var response__$1 = parse.call(null,xhrio);if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),status,new cljs.core.Keyword(null,"status-text","status-text",4371493274),xhrio.getStatusText(),new cljs.core.Keyword(null,"response","response",673580979),response__$1], null)], null);
}
}catch (e6387){if((e6387 instanceof Object))
{var e = e6387;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6387;
} else
{return null;
}
}
}}
}catch (e6386){if((e6386 instanceof Object))
{var e = e6386;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),0,new cljs.core.Keyword(null,"status-text","status-text",4371493274),e.message,new cljs.core.Keyword(null,"response","response",673580979),null], null)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6386;
} else
{return null;
}
}
}});
ajax.core.no_format = (function no_format(xhrio){throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function uri_with_params(uri,params){if(cljs.core.truth_(params))
{return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else
{return uri;
}
});
ajax.core.process_inputs = (function process_inputs(uri,method,p__6388,p__6389){var map__6393 = p__6388;var map__6393__$1 = ((cljs.core.seq_QMARK_.call(null,map__6393))?cljs.core.apply.call(null,cljs.core.hash_map,map__6393):map__6393);var format = map__6393__$1;var content_type = cljs.core.get.call(null,map__6393__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write = cljs.core.get.call(null,map__6393__$1,new cljs.core.Keyword(null,"write","write",1127304017));var map__6394 = p__6389;var map__6394__$1 = ((cljs.core.seq_QMARK_.call(null,map__6394))?cljs.core.apply.call(null,cljs.core.hash_map,map__6394):map__6394);var headers = cljs.core.get.call(null,map__6394__$1,new cljs.core.Keyword(null,"headers","headers",1809212152));var params = cljs.core.get.call(null,map__6394__$1,new cljs.core.Keyword(null,"params","params",4313443576));if(cljs.core._EQ_.call(null,method,"GET"))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers], null);
} else
{var map__6395 = format;var map__6395__$1 = ((cljs.core.seq_QMARK_.call(null,map__6395))?cljs.core.apply.call(null,cljs.core.hash_map,map__6395):map__6395);var content_type__$1 = cljs.core.get.call(null,map__6395__$1,new cljs.core.Keyword(null,"content-type","content-type",1799574400));var write__$1 = cljs.core.get.call(null,map__6395__$1,new cljs.core.Keyword(null,"write","write",1127304017));var body = write__$1.call(null,params);var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);var headers__$1 = cljs.core.merge.call(null,(function (){var or__3408__auto__ = headers;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),content_type__$2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$1], null);
}
});
ajax.core.normalize_method = (function normalize_method(method){if((method instanceof cljs.core.Keyword))
{return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else
{return method;
}
});
ajax.core.base_handler = (function base_handler(format,p__6396){var map__6398 = p__6396;var map__6398__$1 = ((cljs.core.seq_QMARK_.call(null,map__6398))?cljs.core.apply.call(null,cljs.core.hash_map,map__6398):map__6398);var get_default_format = cljs.core.get.call(null,map__6398__$1,new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996));var handler = cljs.core.get.call(null,map__6398__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));if(cljs.core.truth_(handler))
{return (function (xhrio){return handler.call(null,ajax.core.interpret_response.call(null,format,xhrio,(function (){var or__3408__auto__ = get_default_format;if(cljs.core.truth_(or__3408__auto__))
{return or__3408__auto__;
} else
{return ajax.core.no_format;
}
})()));
});
} else
{throw (new Error("No ajax handler provided."));
}
});
/**
* @param {...*} var_args
*/
ajax.core.ajax_request = (function() {
var ajax_request = null;
var ajax_request__1 = (function (p__6399){var map__6402 = p__6399;var map__6402__$1 = ((cljs.core.seq_QMARK_.call(null,map__6402))?cljs.core.apply.call(null,cljs.core.hash_map,map__6402):map__6402);var opts = map__6402__$1;var manager = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"manager","manager",1849164575));var format = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"format","format",4040092521));var method = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"method","method",4231316563));var uri = cljs.core.get.call(null,map__6402__$1,new cljs.core.Keyword(null,"uri","uri",1014020318));var format__$1 = ajax.core.get_format.call(null,format);var method__$1 = ajax.core.normalize_method.call(null,method);var vec__6403 = ajax.core.process_inputs.call(null,uri,method__$1,format__$1,opts);var uri__$1 = cljs.core.nth.call(null,vec__6403,0,null);var body = cljs.core.nth.call(null,vec__6403,1,null);var headers = cljs.core.nth.call(null,vec__6403,2,null);var handler = ajax.core.base_handler.call(null,format__$1,opts);return ajax.core._js_ajax_request.call(null,manager,uri__$1,method__$1,body,cljs.core.clj__GT_js.call(null,headers),handler,opts);
});
var ajax_request__3 = (function() { 
var G__6404__delegate = function (uri,method,args){var f = cljs.core.first.call(null,args);var opts = (((f instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,args):f);return ajax_request.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",1014020318),uri,new cljs.core.Keyword(null,"method","method",4231316563),method));
};
var G__6404 = function (uri,method,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6404__delegate.call(this,uri,method,args);};
G__6404.cljs$lang$maxFixedArity = 2;
G__6404.cljs$lang$applyTo = (function (arglist__6405){
var uri = cljs.core.first(arglist__6405);
arglist__6405 = cljs.core.next(arglist__6405);
var method = cljs.core.first(arglist__6405);
var args = cljs.core.rest(arglist__6405);
return G__6404__delegate(uri,method,args);
});
G__6404.cljs$core$IFn$_invoke$arity$variadic = G__6404__delegate;
return G__6404;
})()
;
ajax_request = function(uri,method,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return ajax_request__1.call(this,uri);
default:
return ajax_request__3.cljs$core$IFn$_invoke$arity$variadic(uri,method, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax_request.cljs$lang$maxFixedArity = 2;
ajax_request.cljs$lang$applyTo = ajax_request__3.cljs$lang$applyTo;
ajax_request.cljs$core$IFn$_invoke$arity$1 = ajax_request__1;
ajax_request.cljs$core$IFn$_invoke$arity$variadic = ajax_request__3.cljs$core$IFn$_invoke$arity$variadic;
return ajax_request;
})()
;
ajax.core.json_format = (function json_format(format_params){return cljs.core.merge.call(null,ajax.core.json_request_format.call(null),ajax.core.json_response_format.call(null,format_params));
});
ajax.core.edn_format = (function edn_format(){return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),ajax.core.edn_response_format.call(null));
});
ajax.core.raw_format = (function raw_format(){return cljs.core.merge.call(null,ajax.core.url_request_format.call(null),ajax.core.raw_response_format.call(null));
});
ajax.core.keyword_request_format = (function keyword_request_format(format,format_params){var G__6407 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"url","url",1014020321),G__6407))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__6407))
{return ajax.core.url_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__6407))
{return ajax.core.edn_request_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__6407))
{return ajax.core.json_request_format.call(null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')));
} else
{return null;
}
}
}
}
}
});
ajax.core.keyword_response_format = (function keyword_response_format(format,format_params){if(cljs.core.map_QMARK_.call(null,format))
{return format;
} else
{if(cljs.core.ifn_QMARK_.call(null,format))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),format,new cljs.core.Keyword(null,"description","description",3584325486),"custom"], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var G__6409 = format;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"raw","raw",1014016922),G__6409))
{return ajax.core.raw_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edn","edn",1014004513),G__6409))
{return ajax.core.edn_response_format.call(null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"json","json",1017176154),G__6409))
{return ajax.core.json_response_format.call(null,format_params);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
} else
{return null;
}
}
}
});
ajax.core.transform_handler = (function transform_handler(p__6410){var map__6415 = p__6410;var map__6415__$1 = ((cljs.core.seq_QMARK_.call(null,map__6415))?cljs.core.apply.call(null,cljs.core.hash_map,map__6415):map__6415);var finally$ = cljs.core.get.call(null,map__6415__$1,new cljs.core.Keyword(null,"finally","finally",4455611637));var error_handler = cljs.core.get.call(null,map__6415__$1,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671));var handler = cljs.core.get.call(null,map__6415__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));return (function easy_handler(p__6416){var vec__6418 = p__6416;var ok = cljs.core.nth.call(null,vec__6418,0,null);var result = cljs.core.nth.call(null,vec__6418,1,null);var temp__4090__auto___6419 = (cljs.core.truth_(ok)?handler:error_handler);if(cljs.core.truth_(temp__4090__auto___6419))
{var h_6420 = temp__4090__auto___6419;h_6420.call(null,result);
} else
{}
if(cljs.core.fn_QMARK_.call(null,finally$))
{return finally$.call(null);
} else
{return null;
}
});
});
ajax.core.transform_format = (function transform_format(p__6421){var map__6423 = p__6421;var map__6423__$1 = ((cljs.core.seq_QMARK_.call(null,map__6423))?cljs.core.apply.call(null,cljs.core.hash_map,map__6423):map__6423);var opts = map__6423__$1;var response_format = cljs.core.get.call(null,map__6423__$1,new cljs.core.Keyword(null,"response-format","response-format",4250805877));var format = cljs.core.get.call(null,map__6423__$1,new cljs.core.Keyword(null,"format","format",4040092521));var rf = ajax.core.keyword_response_format.call(null,response_format,opts);if((format == null))
{return cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),rf);
} else
{if((format instanceof cljs.core.Keyword))
{return cljs.core.merge.call(null,ajax.core.keyword_request_format.call(null,format,opts),rf);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return format;
} else
{return null;
}
}
}
});
ajax.core.transform_opts = (function transform_opts(opts){return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",1706707644),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",4040092521),ajax.core.transform_format.call(null,opts),new cljs.core.Keyword(null,"get-default-format","get-default-format",1021569996),ajax.core.get_default_format);
});
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.GET = (function() { 
var GET__delegate = function (uri,p__6424){var vec__6426 = p__6424;var opts = cljs.core.nth.call(null,vec__6426,0,null);return ajax.core.ajax_request.call(null,uri,"GET",ajax.core.transform_opts.call(null,opts));
};
var GET = function (uri,var_args){
var p__6424 = null;if (arguments.length > 1) {
  p__6424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,uri,p__6424);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__6427){
var uri = cljs.core.first(arglist__6427);
var p__6424 = cljs.core.rest(arglist__6427);
return GET__delegate(uri,p__6424);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.HEAD = (function() { 
var HEAD__delegate = function (uri,p__6428){var vec__6430 = p__6428;var opts = cljs.core.nth.call(null,vec__6430,0,null);return ajax.core.ajax_request.call(null,uri,"HEAD",ajax.core.transform_opts.call(null,opts));
};
var HEAD = function (uri,var_args){
var p__6428 = null;if (arguments.length > 1) {
  p__6428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return HEAD__delegate.call(this,uri,p__6428);};
HEAD.cljs$lang$maxFixedArity = 1;
HEAD.cljs$lang$applyTo = (function (arglist__6431){
var uri = cljs.core.first(arglist__6431);
var p__6428 = cljs.core.rest(arglist__6431);
return HEAD__delegate(uri,p__6428);
});
HEAD.cljs$core$IFn$_invoke$arity$variadic = HEAD__delegate;
return HEAD;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.POST = (function() { 
var POST__delegate = function (uri,p__6432){var vec__6434 = p__6432;var opts = cljs.core.nth.call(null,vec__6434,0,null);return ajax.core.ajax_request.call(null,uri,"POST",ajax.core.transform_opts.call(null,opts));
};
var POST = function (uri,var_args){
var p__6432 = null;if (arguments.length > 1) {
  p__6432 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,uri,p__6432);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__6435){
var uri = cljs.core.first(arglist__6435);
var p__6432 = cljs.core.rest(arglist__6435);
return POST__delegate(uri,p__6432);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.PUT = (function() { 
var PUT__delegate = function (uri,p__6436){var vec__6438 = p__6436;var opts = cljs.core.nth.call(null,vec__6438,0,null);return ajax.core.ajax_request.call(null,uri,"PUT",ajax.core.transform_opts.call(null,opts));
};
var PUT = function (uri,var_args){
var p__6436 = null;if (arguments.length > 1) {
  p__6436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return PUT__delegate.call(this,uri,p__6436);};
PUT.cljs$lang$maxFixedArity = 1;
PUT.cljs$lang$applyTo = (function (arglist__6439){
var uri = cljs.core.first(arglist__6439);
var p__6436 = cljs.core.rest(arglist__6439);
return PUT__delegate(uri,p__6436);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.DELETE = (function() { 
var DELETE__delegate = function (uri,p__6440){var vec__6442 = p__6440;var opts = cljs.core.nth.call(null,vec__6442,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__6440 = null;if (arguments.length > 1) {
  p__6440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__6440);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__6443){
var uri = cljs.core.first(arglist__6443);
var p__6440 = cljs.core.rest(arglist__6443);
return DELETE__delegate(uri,p__6440);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.OPTIONS = (function() { 
var OPTIONS__delegate = function (uri,p__6444){var vec__6446 = p__6444;var opts = cljs.core.nth.call(null,vec__6446,0,null);return ajax.core.ajax_request.call(null,uri,"OPTIONS",ajax.core.transform_opts.call(null,opts));
};
var OPTIONS = function (uri,var_args){
var p__6444 = null;if (arguments.length > 1) {
  p__6444 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return OPTIONS__delegate.call(this,uri,p__6444);};
OPTIONS.cljs$lang$maxFixedArity = 1;
OPTIONS.cljs$lang$applyTo = (function (arglist__6447){
var uri = cljs.core.first(arglist__6447);
var p__6444 = cljs.core.rest(arglist__6447);
return OPTIONS__delegate(uri,p__6444);
});
OPTIONS.cljs$core$IFn$_invoke$arity$variadic = OPTIONS__delegate;
return OPTIONS;
})()
;
/**
* accepts the URI and an optional map of options, options include:
* :handler - the handler function for successful operation
* should accept a single parameter which is the
* deserialized response
* :error-handler - the handler function for errors, should accept a
* map with keys :status and :status-text
* :format - the format for the request
* :response-format - the format for the response
* :params - a map of parameters that will be sent with the request
* @param {...*} var_args
*/
ajax.core.TRACE = (function() { 
var TRACE__delegate = function (uri,p__6448){var vec__6450 = p__6448;var opts = cljs.core.nth.call(null,vec__6450,0,null);return ajax.core.ajax_request.call(null,uri,"TRACE",ajax.core.transform_opts.call(null,opts));
};
var TRACE = function (uri,var_args){
var p__6448 = null;if (arguments.length > 1) {
  p__6448 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return TRACE__delegate.call(this,uri,p__6448);};
TRACE.cljs$lang$maxFixedArity = 1;
TRACE.cljs$lang$applyTo = (function (arglist__6451){
var uri = cljs.core.first(arglist__6451);
var p__6448 = cljs.core.rest(arglist__6451);
return TRACE__delegate(uri,p__6448);
});
TRACE.cljs$core$IFn$_invoke$arity$variadic = TRACE__delegate;
return TRACE;
})()
;
