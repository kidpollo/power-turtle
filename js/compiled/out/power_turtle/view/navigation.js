// Compiled by ClojureScript 1.9.908 {}
goog.provide('power_turtle.view.navigation');
goog.require('cljs.core');
goog.require('power_turtle.model');
goog.require('power_turtle.view.about');
goog.require('power_turtle.view.forum');
goog.require('power_turtle.view.lesson');
goog.require('power_turtle.view.lessons');
goog.require('power_turtle.view.workspace');
goog.require('bidi.bidi');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('soda_ash.core');
goog.require('goog.History');
if(typeof power_turtle.view.navigation.route !== 'undefined'){
} else {
power_turtle.view.navigation.route = reagent.core.atom.call(null,null);
}
power_turtle.view.navigation.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.Var(function(){return power_turtle.view.about.about_page;},new cljs.core.Symbol("power-turtle.view.about","about-page","power-turtle.view.about/about-page",-2065413349,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.about","power-turtle.view.about",708400572,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/power_turtle/view/about.cljs",17,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.about.about_page)?power_turtle.view.about.about_page.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lessons",new cljs.core.Var(function(){return power_turtle.view.lessons.lessons_view;},new cljs.core.Symbol("power-turtle.view.lessons","lessons-view","power-turtle.view.lessons/lessons-view",1764111512,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.lessons","power-turtle.view.lessons",-1782383081,null),new cljs.core.Symbol(null,"lessons-view","lessons-view",-918282492,null),"/home/timothy/git/power-turtle/src/power_turtle/view/lessons.cljs",19,1,28,28,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.lessons.lessons_view)?power_turtle.view.lessons.lessons_view.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lesson",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/.*/,new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null),new cljs.core.Var(function(){return power_turtle.view.lesson.lesson_view;},new cljs.core.Symbol("power-turtle.view.lesson","lesson-view","power-turtle.view.lesson/lesson-view",1616874149,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.lesson","power-turtle.view.lesson",491546340,null),new cljs.core.Symbol(null,"lesson-view","lesson-view",1837620078,null),"src/power_turtle/view/lesson.cljs",18,1,43,43,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"route-params","route-params",-543024714,null)], null)),null,(cljs.core.truth_(power_turtle.view.lesson.lesson_view)?power_turtle.view.lesson.lesson_view.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["freestyle",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Var(function(){return power_turtle.view.workspace.workspace;},new cljs.core.Symbol("power-turtle.view.workspace","workspace","power-turtle.view.workspace/workspace",475457232,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.workspace","power-turtle.view.workspace",-1224365668,null),new cljs.core.Symbol(null,"workspace","workspace",543795818,null),"src/power_turtle/view/workspace.cljs",16,1,41,41,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"canvas-name","canvas-name",1626596110,null)], null)),null,(cljs.core.truth_(power_turtle.view.workspace.workspace)?power_turtle.view.workspace.workspace.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["forum",new cljs.core.Var(function(){return power_turtle.view.forum.forum;},new cljs.core.Symbol("power-turtle.view.forum","forum","power-turtle.view.forum/forum",1674754505,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.forum","power-turtle.view.forum",-2004582052,null),new cljs.core.Symbol(null,"forum","forum",155617167,null),"src/power_turtle/view/forum.cljs",12,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(power_turtle.view.forum.forum)?power_turtle.view.forum.forum.cljs$lang$test:null)]))], null)], null)], null);
power_turtle.view.navigation.links = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about","lessons","freestyle","forum"], null);
power_turtle.view.navigation.match = (function power_turtle$view$navigation$match(s){
return bidi.bidi.match_route.call(null,power_turtle.view.navigation.routes,s);
});
power_turtle.view.navigation.navigate = (function power_turtle$view$navigation$navigate(event){
return cljs.core.reset_BANG_.call(null,power_turtle.view.navigation.route,event.token);
});
power_turtle.view.navigation.languages = new cljs.core.PersistentArrayMap(null, 5, ["ko","\uD55C\uAD6D\uC5B4","id","Bahasa Indonesia","ta","\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD","es","Espa\u00F1ol","en","English"], null);
power_turtle.view.navigation.language_selector = (function power_turtle$view$navigation$language_selector(){
return (function power_turtle$view$navigation$language_selector_$_a_language_selector(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuMenu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"right"], null),cljs.core.doall.call(null,(function (){var iter__28947__auto__ = (function power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__39676(s__39677){
return (new cljs.core.LazySeq(null,(function (){
var s__39677__$1 = s__39677;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39677__$1);
if(temp__4657__auto__){
var s__39677__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39677__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__39677__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__39679 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__39678 = (0);
while(true){
if((i__39678 < size__28946__auto__)){
var vec__39680 = cljs.core._nth.call(null,c__28945__auto__,i__39678);
var language_id = cljs.core.nth.call(null,vec__39680,(0),null);
var language_name = cljs.core.nth.call(null,vec__39680,(1),null);
cljs.core.chunk_append.call(null,b__39679,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,power_turtle.model.current_language),language_id),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__39678,vec__39680,language_id,language_name,c__28945__auto__,size__28946__auto__,b__39679,s__39677__$2,temp__4657__auto__){
return (function power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__39676_$_language_click(e){
return cljs.core.reset_BANG_.call(null,power_turtle.model.current_language,language_id);
});})(i__39678,vec__39680,language_id,language_name,c__28945__auto__,size__28946__auto__,b__39679,s__39677__$2,temp__4657__auto__))
], null),language_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),language_id], null)));

var G__39686 = (i__39678 + (1));
i__39678 = G__39686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39679),power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__39676.call(null,cljs.core.chunk_rest.call(null,s__39677__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39679),null);
}
} else {
var vec__39683 = cljs.core.first.call(null,s__39677__$2);
var language_id = cljs.core.nth.call(null,vec__39683,(0),null);
var language_name = cljs.core.nth.call(null,vec__39683,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,power_turtle.model.current_language),language_id),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__39683,language_id,language_name,s__39677__$2,temp__4657__auto__){
return (function power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__39676_$_language_click(e){
return cljs.core.reset_BANG_.call(null,power_turtle.model.current_language,language_id);
});})(vec__39683,language_id,language_name,s__39677__$2,temp__4657__auto__))
], null),language_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),language_id], null)),power_turtle$view$navigation$language_selector_$_a_language_selector_$_iter__39676.call(null,cljs.core.rest.call(null,s__39677__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,cljs.core.sort.call(null,power_turtle.view.navigation.languages));
})())], null);
});
});
power_turtle.view.navigation.menu_bar = (function power_turtle$view$navigation$menu_bar(route){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.Menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inverted","inverted",-310592290),true], null),cljs.core.doall.call(null,(function (){var iter__28947__auto__ = (function power_turtle$view$navigation$menu_bar_$_iter__39687(s__39688){
return (new cljs.core.LazySeq(null,(function (){
var s__39688__$1 = s__39688;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__39688__$1);
if(temp__4657__auto__){
var s__39688__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39688__$2)){
var c__28945__auto__ = cljs.core.chunk_first.call(null,s__39688__$2);
var size__28946__auto__ = cljs.core.count.call(null,c__28945__auto__);
var b__39690 = cljs.core.chunk_buffer.call(null,size__28946__auto__);
if((function (){var i__39689 = (0);
while(true){
if((i__39689 < size__28946__auto__)){
var link = cljs.core._nth.call(null,c__28945__auto__,i__39689);
cljs.core.chunk_append.call(null,b__39690,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),"a",new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,route),link)], null),link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)));

var G__39691 = (i__39689 + (1));
i__39689 = G__39691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39690),power_turtle$view$navigation$menu_bar_$_iter__39687.call(null,cljs.core.chunk_rest.call(null,s__39688__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39690),null);
}
} else {
var link = cljs.core.first.call(null,s__39688__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [soda_ash.core.MenuItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"as","as",1148689641),"a",new cljs.core.Keyword(null,"href","href",-793805698),["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join(''),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,cljs.core.deref.call(null,route),link)], null),link], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),link], null)),power_turtle$view$navigation$menu_bar_$_iter__39687.call(null,cljs.core.rest.call(null,s__39688__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28947__auto__.call(null,power_turtle.view.navigation.links);
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.navigation.language_selector], null)], null);
});
power_turtle.view.navigation.current_page = (function power_turtle$view$navigation$current_page(){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,power_turtle.view.navigation.route),"logo")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.workspace.canvas_repl,"turtle"], null);
} else {
return (function power_turtle$view$navigation$current_page_$_the_current_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_turtle.view.navigation.menu_bar,power_turtle.view.navigation.route], null),(function (){var map__39692 = power_turtle.view.navigation.match.call(null,cljs.core.deref.call(null,power_turtle.view.navigation.route));
var map__39692__$1 = ((((!((map__39692 == null)))?((((map__39692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39692):map__39692);
var handler = cljs.core.get.call(null,map__39692__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__39692__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__28139__auto__ = handler;
if(cljs.core.truth_(or__28139__auto__)){
return or__28139__auto__;
} else {
return power_turtle.view.about.about_page;
}
})(),route_params], null);
})()], null);
});
}
});
if(typeof power_turtle.view.navigation.history !== 'undefined'){
} else {
power_turtle.view.navigation.history = (function (){var G__39694 = (new goog.History());
goog.events.removeAll(G__39694);

goog.events.listen(G__39694,goog.history.EventType.NAVIGATE,((function (G__39694){
return (function power_turtle$view$navigation$on_navigate(e){
return new cljs.core.Var(function(){return power_turtle.view.navigation.navigate;},new cljs.core.Symbol("power-turtle.view.navigation","navigate","power-turtle.view.navigation/navigate",-908562981,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"power-turtle.view.navigation","power-turtle.view.navigation",389207177,null),new cljs.core.Symbol(null,"navigate","navigate",-1996838964,null),"/home/timothy/git/power-turtle/src/power_turtle/view/navigation.cljs",15,1,38,38,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event","event",1941966969,null)], null)),null,(cljs.core.truth_(power_turtle.view.navigation.navigate)?power_turtle.view.navigation.navigate.cljs$lang$test:null)])).call(null,e);
});})(G__39694))
);

G__39694.setEnabled(true);

return G__39694;
})();
}

//# sourceMappingURL=navigation.js.map?rel=1506931526041
