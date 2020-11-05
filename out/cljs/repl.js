// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26591){
var map__26592 = p__26591;
var map__26592__$1 = (((((!((map__26592 == null))))?(((((map__26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26592):map__26592);
var m = map__26592__$1;
var n = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5743__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5743__auto__)){
var ns = temp__5743__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26594_26626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26595_26627 = null;
var count__26596_26628 = (0);
var i__26597_26629 = (0);
while(true){
if((i__26597_26629 < count__26596_26628)){
var f_26630 = cljs.core._nth.call(null,chunk__26595_26627,i__26597_26629);
cljs.core.println.call(null,"  ",f_26630);


var G__26631 = seq__26594_26626;
var G__26632 = chunk__26595_26627;
var G__26633 = count__26596_26628;
var G__26634 = (i__26597_26629 + (1));
seq__26594_26626 = G__26631;
chunk__26595_26627 = G__26632;
count__26596_26628 = G__26633;
i__26597_26629 = G__26634;
continue;
} else {
var temp__5743__auto___26635 = cljs.core.seq.call(null,seq__26594_26626);
if(temp__5743__auto___26635){
var seq__26594_26636__$1 = temp__5743__auto___26635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26594_26636__$1)){
var c__4556__auto___26637 = cljs.core.chunk_first.call(null,seq__26594_26636__$1);
var G__26638 = cljs.core.chunk_rest.call(null,seq__26594_26636__$1);
var G__26639 = c__4556__auto___26637;
var G__26640 = cljs.core.count.call(null,c__4556__auto___26637);
var G__26641 = (0);
seq__26594_26626 = G__26638;
chunk__26595_26627 = G__26639;
count__26596_26628 = G__26640;
i__26597_26629 = G__26641;
continue;
} else {
var f_26642 = cljs.core.first.call(null,seq__26594_26636__$1);
cljs.core.println.call(null,"  ",f_26642);


var G__26643 = cljs.core.next.call(null,seq__26594_26636__$1);
var G__26644 = null;
var G__26645 = (0);
var G__26646 = (0);
seq__26594_26626 = G__26643;
chunk__26595_26627 = G__26644;
count__26596_26628 = G__26645;
i__26597_26629 = G__26646;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26647 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26647);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26647)))?cljs.core.second.call(null,arglists_26647):arglists_26647));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26598_26648 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26599_26649 = null;
var count__26600_26650 = (0);
var i__26601_26651 = (0);
while(true){
if((i__26601_26651 < count__26600_26650)){
var vec__26612_26652 = cljs.core._nth.call(null,chunk__26599_26649,i__26601_26651);
var name_26653 = cljs.core.nth.call(null,vec__26612_26652,(0),null);
var map__26615_26654 = cljs.core.nth.call(null,vec__26612_26652,(1),null);
var map__26615_26655__$1 = (((((!((map__26615_26654 == null))))?(((((map__26615_26654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26615_26654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26615_26654):map__26615_26654);
var doc_26656 = cljs.core.get.call(null,map__26615_26655__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26657 = cljs.core.get.call(null,map__26615_26655__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26653);

cljs.core.println.call(null," ",arglists_26657);

if(cljs.core.truth_(doc_26656)){
cljs.core.println.call(null," ",doc_26656);
} else {
}


var G__26658 = seq__26598_26648;
var G__26659 = chunk__26599_26649;
var G__26660 = count__26600_26650;
var G__26661 = (i__26601_26651 + (1));
seq__26598_26648 = G__26658;
chunk__26599_26649 = G__26659;
count__26600_26650 = G__26660;
i__26601_26651 = G__26661;
continue;
} else {
var temp__5743__auto___26662 = cljs.core.seq.call(null,seq__26598_26648);
if(temp__5743__auto___26662){
var seq__26598_26663__$1 = temp__5743__auto___26662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26598_26663__$1)){
var c__4556__auto___26664 = cljs.core.chunk_first.call(null,seq__26598_26663__$1);
var G__26665 = cljs.core.chunk_rest.call(null,seq__26598_26663__$1);
var G__26666 = c__4556__auto___26664;
var G__26667 = cljs.core.count.call(null,c__4556__auto___26664);
var G__26668 = (0);
seq__26598_26648 = G__26665;
chunk__26599_26649 = G__26666;
count__26600_26650 = G__26667;
i__26601_26651 = G__26668;
continue;
} else {
var vec__26617_26669 = cljs.core.first.call(null,seq__26598_26663__$1);
var name_26670 = cljs.core.nth.call(null,vec__26617_26669,(0),null);
var map__26620_26671 = cljs.core.nth.call(null,vec__26617_26669,(1),null);
var map__26620_26672__$1 = (((((!((map__26620_26671 == null))))?(((((map__26620_26671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26620_26671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26620_26671):map__26620_26671);
var doc_26673 = cljs.core.get.call(null,map__26620_26672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26674 = cljs.core.get.call(null,map__26620_26672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26670);

cljs.core.println.call(null," ",arglists_26674);

if(cljs.core.truth_(doc_26673)){
cljs.core.println.call(null," ",doc_26673);
} else {
}


var G__26675 = cljs.core.next.call(null,seq__26598_26663__$1);
var G__26676 = null;
var G__26677 = (0);
var G__26678 = (0);
seq__26598_26648 = G__26675;
chunk__26599_26649 = G__26676;
count__26600_26650 = G__26677;
i__26601_26651 = G__26678;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5743__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5743__auto__)){
var fnspec = temp__5743__auto__;
cljs.core.print.call(null,"Spec");

var seq__26622 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26623 = null;
var count__26624 = (0);
var i__26625 = (0);
while(true){
if((i__26625 < count__26624)){
var role = cljs.core._nth.call(null,chunk__26623,i__26625);
var temp__5743__auto___26679__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___26679__$1)){
var spec_26680 = temp__5743__auto___26679__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26680));
} else {
}


var G__26681 = seq__26622;
var G__26682 = chunk__26623;
var G__26683 = count__26624;
var G__26684 = (i__26625 + (1));
seq__26622 = G__26681;
chunk__26623 = G__26682;
count__26624 = G__26683;
i__26625 = G__26684;
continue;
} else {
var temp__5743__auto____$1 = cljs.core.seq.call(null,seq__26622);
if(temp__5743__auto____$1){
var seq__26622__$1 = temp__5743__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26622__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__26622__$1);
var G__26685 = cljs.core.chunk_rest.call(null,seq__26622__$1);
var G__26686 = c__4556__auto__;
var G__26687 = cljs.core.count.call(null,c__4556__auto__);
var G__26688 = (0);
seq__26622 = G__26685;
chunk__26623 = G__26686;
count__26624 = G__26687;
i__26625 = G__26688;
continue;
} else {
var role = cljs.core.first.call(null,seq__26622__$1);
var temp__5743__auto___26689__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5743__auto___26689__$2)){
var spec_26690 = temp__5743__auto___26689__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26690));
} else {
}


var G__26691 = cljs.core.next.call(null,seq__26622__$1);
var G__26692 = null;
var G__26693 = (0);
var G__26694 = (0);
seq__26622 = G__26691;
chunk__26623 = G__26692;
count__26624 = G__26693;
i__26625 = G__26694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5743__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5743__auto__)){
var msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5743__auto__)){
var ed = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26695 = cljs.core.conj.call(null,via,t);
var G__26696 = cljs.core.ex_cause.call(null,t);
via = G__26695;
t = G__26696;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5743__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5743__auto__)){
var root_msg = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5743__auto__)){
var data = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5743__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5743__auto__)){
var phase = temp__5743__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26699 = datafied_throwable;
var map__26699__$1 = (((((!((map__26699 == null))))?(((((map__26699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26699):map__26699);
var via = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26699__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26700 = cljs.core.last.call(null,via);
var map__26700__$1 = (((((!((map__26700 == null))))?(((((map__26700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26700):map__26700);
var type = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26700__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26701 = data;
var map__26701__$1 = (((((!((map__26701 == null))))?(((((map__26701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26701):map__26701);
var problems = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26702 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26702__$1 = (((((!((map__26702 == null))))?(((((map__26702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26702):map__26702);
var top_data = map__26702__$1;
var source = cljs.core.get.call(null,map__26702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26707 = phase;
var G__26707__$1 = (((G__26707 instanceof cljs.core.Keyword))?G__26707.fqn:null);
switch (G__26707__$1) {
case "read-source":
var map__26708 = data;
var map__26708__$1 = (((((!((map__26708 == null))))?(((((map__26708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26708):map__26708);
var line = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26708__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26710 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26710__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26710,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26710);
var G__26710__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26710__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26710__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26710__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26711 = top_data;
var G__26711__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26711,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26711);
var G__26711__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26711__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26711__$1);
var G__26711__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26711__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26711__$2);
var G__26711__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26711__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26711__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26711__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26711__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26712 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26712,(0),null);
var method = cljs.core.nth.call(null,vec__26712,(1),null);
var file = cljs.core.nth.call(null,vec__26712,(2),null);
var line = cljs.core.nth.call(null,vec__26712,(3),null);
var G__26715 = top_data;
var G__26715__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26715,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26715);
var G__26715__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26715__$1);
var G__26715__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__26715__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26715__$2);
var G__26715__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26715__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26715__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26715__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26715__$4;
}

break;
case "execution":
var vec__26716 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26716,(0),null);
var method = cljs.core.nth.call(null,vec__26716,(1),null);
var file = cljs.core.nth.call(null,vec__26716,(2),null);
var line = cljs.core.nth.call(null,vec__26716,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__26698_SHARP_){
var or__4126__auto__ = (p1__26698_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26698_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__26719 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26719__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26719,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26719);
var G__26719__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26719__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26719__$1);
var G__26719__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26719__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26719__$2);
var G__26719__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26719__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26719__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26719__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26719__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26707__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26723){
var map__26724 = p__26723;
var map__26724__$1 = (((((!((map__26724 == null))))?(((((map__26724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26724):map__26724);
var triage_data = map__26724__$1;
var phase = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26724__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26726 = phase;
var G__26726__$1 = (((G__26726 instanceof cljs.core.Keyword))?G__26726.fqn:null);
switch (G__26726__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26727_26736 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26728_26737 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26729_26738 = true;
var _STAR_print_fn_STAR__temp_val__26730_26739 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26729_26738);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26730_26739);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26721_SHARP_){
return cljs.core.dissoc.call(null,p1__26721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26728_26737);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26727_26736);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26731_26740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26732_26741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26733_26742 = true;
var _STAR_print_fn_STAR__temp_val__26734_26743 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26733_26742);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26734_26743);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__26722_SHARP_){
return cljs.core.dissoc.call(null,p1__26722_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26732_26741);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26731_26740);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26726__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
