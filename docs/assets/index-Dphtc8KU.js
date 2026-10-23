(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function DE(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var wd={exports:{}},gl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function NE(){if(F_)return gl;F_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return gl.Fragment=t,gl.jsx=i,gl.jsxs=i,gl}var H_;function UE(){return H_||(H_=1,wd.exports=NE()),wd.exports}var le=UE(),Dd={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function LE(){if(G_)return _e;G_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),y=Symbol.iterator;function b(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function D(F,gt,Ut){this.props=F,this.context=gt,this.refs=S,this.updater=Ut||w}D.prototype.isReactComponent={},D.prototype.setState=function(F,gt){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,gt,"setState")},D.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function B(){}B.prototype=D.prototype;function C(F,gt,Ut){this.props=F,this.context=gt,this.refs=S,this.updater=Ut||w}var N=C.prototype=new B;N.constructor=C,M(N,D.prototype),N.isPureReactComponent=!0;var L=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function z(F,gt,Ut){var K=Ut.ref;return{$$typeof:o,type:F,key:gt,ref:K!==void 0?K:null,props:Ut}}function V(F,gt){return z(F.type,gt,F.props)}function J(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function rt(F){var gt={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ut){return gt[Ut]})}var q=/\/+/g;function Z(F,gt){return typeof F=="object"&&F!==null&&F.key!=null?rt(""+F.key):gt.toString(36)}function k(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(gt){F.status==="pending"&&(F.status="fulfilled",F.value=gt)},function(gt){F.status==="pending"&&(F.status="rejected",F.reason=gt)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function W(F,gt,Ut,K,ht){var Rt=typeof F;(Rt==="undefined"||Rt==="boolean")&&(F=null);var Ht=!1;if(F===null)Ht=!0;else switch(Rt){case"bigint":case"string":case"number":Ht=!0;break;case"object":switch(F.$$typeof){case o:case t:Ht=!0;break;case _:return Ht=F._init,W(Ht(F._payload),gt,Ut,K,ht)}}if(Ht)return ht=ht(F),Ht=K===""?"."+Z(F,0):K,L(ht)?(Ut="",Ht!=null&&(Ut=Ht.replace(q,"$&/")+"/"),W(ht,gt,Ut,"",function(Ee){return Ee})):ht!=null&&(J(ht)&&(ht=V(ht,Ut+(ht.key==null||F&&F.key===ht.key?"":(""+ht.key).replace(q,"$&/")+"/")+Ht)),gt.push(ht)),1;Ht=0;var _t=K===""?".":K+":";if(L(F))for(var Dt=0;Dt<F.length;Dt++)K=F[Dt],Rt=_t+Z(K,Dt),Ht+=W(K,gt,Ut,Rt,ht);else if(Dt=b(F),typeof Dt=="function")for(F=Dt.call(F),Dt=0;!(K=F.next()).done;)K=K.value,Rt=_t+Z(K,Dt++),Ht+=W(K,gt,Ut,Rt,ht);else if(Rt==="object"){if(typeof F.then=="function")return W(k(F),gt,Ut,K,ht);throw gt=String(F),Error("Objects are not valid as a React child (found: "+(gt==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":gt)+"). If you meant to render a collection of children, use an array instead.")}return Ht}function ct(F,gt,Ut){if(F==null)return F;var K=[],ht=0;return W(F,K,"","",function(Rt){return gt.call(Ut,Rt,ht++)}),K}function st(F){if(F._status===-1){var gt=F._result,Ut=gt();Ut.then(function(K){(F._status===0||F._status===-1)&&(F._status=1,F._result=K,Ut.status===void 0&&(Ut.status="fulfilled",Ut.value=K))},function(K){(F._status===0||F._status===-1)&&(F._status=2,F._result=K,Ut.status===void 0&&(Ut.status="rejected",Ut.reason=K))}),F._status===-1&&(F._status=0,F._result=Ut)}if(F._status===1)return F._result.default;throw F._result}var pt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var gt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(gt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function xt(F){var gt=T.T,Ut={};Ut.types=gt!==null?gt.types:null,T.T=Ut;try{var K=F(),ht=T.S;ht!==null&&ht(Ut,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(P,pt)}catch(Rt){pt(Rt)}finally{gt!==null&&Ut.types!==null&&(gt.types=Ut.types),T.T=gt}}function Pt(F){var gt=T.T;if(gt!==null){var Ut=gt.types;Ut===null?gt.types=[F]:Ut.indexOf(F)===-1&&Ut.push(F)}else xt(Pt.bind(null,F))}var qt={map:ct,forEach:function(F,gt,Ut){ct(F,function(){gt.apply(this,arguments)},Ut)},count:function(F){var gt=0;return ct(F,function(){gt++}),gt},toArray:function(F){return ct(F,function(gt){return gt})||[]},only:function(F){if(!J(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return _e.Activity=g,_e.Children=qt,_e.Component=D,_e.Fragment=i,_e.Profiler=l,_e.PureComponent=C,_e.StrictMode=r,_e.Suspense=p,_e.ViewTransition=v,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,_e.__COMPILER_RUNTIME={__proto__:null,c:function(F){return T.H.useMemoCache(F)}},_e.addTransitionType=Pt,_e.cache=function(F){return function(){return F.apply(null,arguments)}},_e.cacheSignal=function(){return null},_e.cloneElement=function(F,gt,Ut){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var K=M({},F.props),ht=F.key;if(gt!=null)for(Rt in gt.key!==void 0&&(ht=""+gt.key),gt)!O.call(gt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&gt.ref===void 0||(K[Rt]=gt[Rt]);var Rt=arguments.length-2;if(Rt===1)K.children=Ut;else if(1<Rt){for(var Ht=Array(Rt),_t=0;_t<Rt;_t++)Ht[_t]=arguments[_t+2];K.children=Ht}return z(F.type,ht,K)},_e.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:u,_context:F},F},_e.createElement=function(F,gt,Ut){var K,ht={},Rt=null;if(gt!=null)for(K in gt.key!==void 0&&(Rt=""+gt.key),gt)O.call(gt,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(ht[K]=gt[K]);var Ht=arguments.length-2;if(Ht===1)ht.children=Ut;else if(1<Ht){for(var _t=Array(Ht),Dt=0;Dt<Ht;Dt++)_t[Dt]=arguments[Dt+2];ht.children=_t}if(F&&F.defaultProps)for(K in Ht=F.defaultProps,Ht)ht[K]===void 0&&(ht[K]=Ht[K]);return z(F,Rt,ht)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(F){return{$$typeof:d,render:F}},_e.isValidElement=J,_e.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:st}},_e.memo=function(F,gt){return{$$typeof:m,type:F,compare:gt===void 0?null:gt}},_e.startTransition=xt,_e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},_e.use=function(F){return T.H.use(F)},_e.useActionState=function(F,gt,Ut){return T.H.useActionState(F,gt,Ut)},_e.useCallback=function(F,gt){return T.H.useCallback(F,gt)},_e.useContext=function(F){return T.H.useContext(F)},_e.useDebugValue=function(){},_e.useDeferredValue=function(F,gt){return T.H.useDeferredValue(F,gt)},_e.useEffect=function(F,gt){return T.H.useEffect(F,gt)},_e.useEffectEvent=function(F){return T.H.useEffectEvent(F)},_e.useId=function(){return T.H.useId()},_e.useImperativeHandle=function(F,gt,Ut){return T.H.useImperativeHandle(F,gt,Ut)},_e.useInsertionEffect=function(F,gt){return T.H.useInsertionEffect(F,gt)},_e.useLayoutEffect=function(F,gt){return T.H.useLayoutEffect(F,gt)},_e.useMemo=function(F,gt){return T.H.useMemo(F,gt)},_e.useOptimistic=function(F,gt){return T.H.useOptimistic(F,gt)},_e.useReducer=function(F,gt,Ut){return T.H.useReducer(F,gt,Ut)},_e.useRef=function(F){return T.H.useRef(F)},_e.useState=function(F){return T.H.useState(F)},_e.useSyncExternalStore=function(F,gt,Ut){return T.H.useSyncExternalStore(F,gt,Ut)},_e.useTransition=function(){return T.H.useTransition()},_e.version="19.3.1",_e}var V_;function lm(){return V_||(V_=1,Dd.exports=LE()),Dd.exports}var rn=lm();const OE=DE(rn);var Nd={exports:{}},vl={},Ud={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function PE(){return X_||(X_=1,(function(o){function t(k,W){var ct=k.length;k.push(W);t:for(;0<ct;){var st=ct-1>>>1,pt=k[st];if(0<l(pt,W))k[st]=W,k[ct]=pt,ct=st;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var W=k[0],ct=k.pop();if(ct!==W){k[0]=ct;t:for(var st=0,pt=k.length,xt=pt>>>1;st<xt;){var Pt=2*(st+1)-1,qt=k[Pt],F=Pt+1,gt=k[F];if(0>l(qt,ct))F<pt&&0>l(gt,qt)?(k[st]=gt,k[F]=ct,st=F):(k[st]=qt,k[Pt]=ct,st=Pt);else if(F<pt&&0>l(gt,ct))k[st]=gt,k[F]=ct,st=F;else break t}}return W}function l(k,W){var ct=k.sortIndex-W.sortIndex;return ct!==0?ct:k.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,v=3,y=!1,b=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var W=i(m);W!==null;){if(W.callback===null)r(m);else if(W.startTime<=k)r(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function N(k){if(w=!1,C(k),!b)if(i(p)!==null)b=!0,L||(L=!0,J());else{var W=i(m);W!==null&&Z(N,W.startTime-k)}}var L=!1,P=-1,T=5,O=-1;function z(){return M?!0:!(o.unstable_now()-O<T)}function V(){if(M=!1,L){var k=o.unstable_now();O=k;var W=!0;try{t:{b=!1,w&&(w=!1,D(P),P=-1),y=!0;var ct=v;try{e:{for(C(k),g=i(p);g!==null&&!(g.expirationTime>k&&z());){var st=g.callback;if(typeof st=="function"){g.callback=null,v=g.priorityLevel;var pt=st(g.expirationTime<=k);if(k=o.unstable_now(),typeof pt=="function"){g.callback=pt,C(k),W=!0;break e}g===i(p)&&r(p),C(k)}else r(p);g=i(p)}if(g!==null)W=!0;else{var xt=i(m);xt!==null&&Z(N,xt.startTime-k),W=!1}}break t}finally{g=null,v=ct,y=!1}W=void 0}}finally{W?J():L=!1}}}var J;if(typeof B=="function")J=function(){B(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,q=rt.port2;rt.port1.onmessage=V,J=function(){q.postMessage(null)}}else J=function(){S(V,0)};function Z(k,W){P=S(function(){k(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(k){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var ct=v;v=W;try{return k()}finally{v=ct}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,W){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ct=v;v=k;try{return W()}finally{v=ct}},o.unstable_scheduleCallback=function(k,W,ct){var st=o.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?st+ct:st):ct=st,k){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=ct+pt,k={id:_++,callback:W,priorityLevel:k,startTime:ct,expirationTime:pt,sortIndex:-1},ct>st?(k.sortIndex=ct,t(m,k),i(p)===null&&k===i(m)&&(w?(D(P),P=-1):w=!0,Z(N,ct-st))):(k.sortIndex=pt,t(p,k),b||y||(b=!0,L||(L=!0,J()))),k},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(k){var W=v;return function(){var ct=v;v=W;try{return k.apply(this,arguments)}finally{v=ct}}}})(Ld)),Ld}var k_;function IE(){return k_||(k_=1,Ud.exports=PE()),Ud.exports}var Od={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function zE(){if(W_)return On;W_=1;var o=lm();function t(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:_,containerInfo:g,implementation:v}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.browser=function(_){return{$$typeof:u,_reason:_}},On.createPortal=function(_,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(_,g,null,v)},On.flushSync=function(_){var g=p.T,v=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=v,r.d.f()}},On.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},On.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},On.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:w}):v==="script"&&r.d.X(_,{crossOrigin:y,integrity:b,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},On.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},On.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,y=m(v,g.crossOrigin);r.d.L(_,v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},On.preloadModule=function(_,g){if(typeof _=="string")if(g){var v=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},On.requestFormReset=function(_){r.d.r(_)},On.unstable_batchedUpdates=function(_,g){return _(g)},On.useFormState=function(_,g,v){return p.H.useFormState(_,g,v)},On.useFormStatus=function(){return p.H.useHostTransitionStatus()},On.version="19.3.1",On}var q_;function BE(){if(q_)return Od.exports;q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Od.exports=zE(),Od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function FE(){if(Y_)return vl;Y_=1;var o=IE(),t=lm(),i=BE();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===s)return p(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,s=f;break}if(R===s){x=!0,s=c,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,s=c;break}if(R===s){x=!0,s=f,a=c;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,s,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,s,c,f))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function b(e){var n=[null,null],a=v(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var S=null,D=null;function B(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(S=e),!0):!1}function N(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var f=n;f;f=a(f))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),O=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),xt=Symbol.for("react.activity"),Pt=Symbol.for("react.legacy_hidden"),qt=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),gt=Symbol.for("react.recoverable"),Ut=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=Ut&&e[Ut]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case rt:return"Profiler";case J:return"StrictMode";case W:return"Suspense";case ct:return"SuspenseList";case xt:return"Activity";case F:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case Z:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case st:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case pt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var Ht=Array.isArray,_t=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ee={pending:!1,data:null,method:null,action:null},Tt=[],wt=-1;function Ct(e){return{current:e}}function bt(e){0>wt||(e.current=Tt[wt],Tt[wt]=null,wt--)}function At(e,n){wt++,Tt[wt]=e.current,e.current=n}var ee=Ct(null),ne=Ct(null),ae=Ct(null),fe=Ct(null);function H(e,n){switch(At(ae,n),At(ne,e),At(ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Zv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Zv(n),e=Kv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}bt(ee),At(ee,e)}function Me(){bt(ee),bt(ne),bt(ae)}function ge(e){var n=e.memoizedState;n!==null&&(Vs._currentValue=n.memoizedState,At(fe,e)),n=ee.current;var a=Kv(n,e.type);n!==a&&(At(ne,e),At(ee,a))}function U(e){ne.current===e&&(bt(ee),bt(ne)),fe.current===e&&(bt(fe),Vs._currentValue=Ee)}var E,nt;function it(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+nt}var mt=!1;function Nt(e,n){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(kt){var Q=kt}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(kt){Q=kt}Et=!1;try{var ut=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Et=!0,new e}finally{Et&&(ut!==void 0?Object.defineProperty(e.prototype,"props",ut):delete e.prototype.props)}}}else{try{throw Error()}catch(kt){Q=kt}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(kt){if(kt&&Q&&typeof kt.stack=="string")return[kt.stack,Q.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var I=x.split(`
`),et=R.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===et.length)for(s=I.length-1,c=et.length-1;1<=s&&0<=c&&I[s]!==et[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==et[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==et[c]){var ft=`
`+I[s].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=s&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?it(a):""}function Bt(e,n){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return e.child!==n&&n!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return Nt(e.type,!1);case 11:return Nt(e.type.render,!1);case 1:return Nt(e.type,!0);case 31:return it("Activity");case 30:return it("ViewTransition");default:return""}}function vt(e){try{var n="",a=null;do n+=Bt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Mt=Object.prototype.hasOwnProperty,zt=o.unstable_scheduleCallback,re=o.unstable_cancelCallback,Vt=o.unstable_shouldYield,It=o.unstable_requestPaint,Qt=o.unstable_now,ce=o.unstable_getCurrentPriorityLevel,de=o.unstable_ImmediatePriority,Y=o.unstable_UserBlockingPriority,Ft=o.unstable_NormalPriority,St=o.unstable_LowPriority,Gt=o.unstable_IdlePriority,Yt=o.log,$=o.unstable_setDisableYieldValue,Ot=null,Lt=null;function xe(e){if(typeof Yt=="function"&&$(e),Lt&&typeof Lt.setStrictMode=="function")try{Lt.setStrictMode(Ot,e)}catch{}}var ve=Math.clz32?Math.clz32:af,ei=Math.log,vi=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(ei(e)/vi|0)|0}var as=256,xr=262144,Ba=4194304;function ha(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sr(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~f,s!==0?c=ha(s):(x&=R,x!==0?c=ha(x):a||(a=R&~e,a!==0&&(c=ha(a))))):(R=s&~f,R!==0?c=ha(R):x!==0?c=ha(x):a||(a=s&~e,a!==0&&(c=ha(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Fa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Xi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-ve(a),c=1<<s;n|=e[s],a&=~c}return n}function Mo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eo(){var e=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),e}function rs(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wl(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-ve(a),Et=1<<ft;R[ft]=0,I[ft]=-1;var Q=et[ft];if(Q!==null)for(et[ft]=null,ft=0;ft<Q.length;ft++){var ut=Q[ft];ut!==null&&(ut.lane&=-536870913)}a&=~Et}s!==0&&yr(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function yr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function To(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-ve(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function bo(e,n){var a=n&-n;return a=(a&42)!==0?1:Ao(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ao(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ro(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ql(){var e=Dt.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function Yl(e,n){var a=Dt.p;try{return Dt.p=e,n()}finally{Dt.p=a}}var _i=Math.random().toString(36).slice(2),A="__reactFiber$"+_i,G="__reactProps$"+_i,dt="__reactContainer$"+_i,ot="__reactEvents$"+_i,lt="__reactListeners$"+_i,Zt="__reactHandles$"+_i,jt="__reactResources$"+_i,Xt="__reactMarker$"+_i,ie="__reactLoad$"+_i;function se(e){delete e[A],delete e[G],delete e[lt],delete e[Zt]}function pe(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[dt]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=h_(e);e!==null;){if(a=e[A])return a;e=h_(e)}return n}e=a,a=e.parentNode}return null}function Se(e){if(e=e[A]||e[dt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function $t(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ne(e){var n=e[jt];return n||(n=e[jt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Re(e){e[Xt]=!0}function Qe(e){e[ie]=void 0}var We=new Set,yn={};function Kt(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(yn[e]=n,e=0;e<n.length;e++)We.add(n[e])}var ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vn={},ni={};function Wi(e){return Mt.call(ni,e)?!0:Mt.call(Vn,e)?!1:ze.test(e)?ni[e]=!0:(Vn[e]=!0,!1)}var Ce=!1;function Ve(){var e=Ce;return Ce=!1,e}function en(e,n,a){if(Wi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ii(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Oe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function da(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zl(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rf(e){if(!e._valueTracker){var n=da(e)?"checked":"value";e._valueTracker=Zl(e,n,""+e[n])}}function Im(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=da(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var QS=/[\n"\\]/g;function xi(e){return e.replace(QS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function sf(e,n,a,s,c,f,x,R){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fn(n)):e.value!==""+fn(n)&&(e.value=""+fn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?of(e,fn(e.value)):of(e,fn(n)):a!=null?of(e,fn(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+fn(R):e.removeAttribute("name")}function zm(e,n,a,s,c,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){rf(e);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),rf(e)}function of(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ss(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Bm(e,n,a){if(n!=null&&(n=""+fn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fn(a):""}function Fm(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(Ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fn(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),rf(e)}function os(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var jS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hm(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||jS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Gm(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",Ce=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Hm(e,c,s),Ce=!0)}else for(var f in n)n.hasOwnProperty(f)&&Hm(e,f,n[f])}function lf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $S=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return ty.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function qi(){}var uf=null;function cf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,us=null;function Vm(e){var n=Se(e);if(n&&(e=n.stateNode)){var a=e[G]||null;t:switch(e=n.stateNode,n.type){case"input":if(sf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[G]||null;if(!c)throw Error(r(90));sf(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Im(s)}break t;case"textarea":Bm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ss(e,!!a.multiple,n,!1)}}}var ff=!1;function Xm(e,n,a){if(ff)return e(n,a);ff=!0;try{var s=e(n);return s}finally{if(ff=!1,(ls!==null||us!==null)&&(Ku(),ls&&(n=ls,e=us,us=ls=null,Vm(n),e)))for(n=0;n<e.length;n++)Vm(e[n])}}function Co(e,n){var a=e.stateNode;if(a===null)return null;var s=a[G]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hf=!1;if(pa)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{hf=!1}var Ha=null,df=null,Jl=null;function km(){if(Jl)return Jl;var e,n=df,a=n.length,s,c="value"in Ha?Ha.value:Ha.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Jl=c.slice(e,1<s?1-s:void 0)}function Ql(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jl(){return!0}function Wm(){return!1}function Xn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jl:Wm,this.isPropagationStopped=Wm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Xn(Ga),Do=P({},Ga,{view:0,detail:0}),ey=Xn(Do),pf,mf,No,tu=P({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==No&&(No&&e.type==="mousemove"?(pf=e.screenX-No.screenX,mf=e.screenY-No.screenY):mf=pf=0,No=e),pf)},movementY:function(e){return"movementY"in e?e.movementY:mf}}),qm=Xn(tu),ny=P({},tu,{dataTransfer:0}),iy=Xn(ny),ay=P({},Do,{relatedTarget:0}),gf=Xn(ay),ry=P({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),sy=Xn(ry),oy=P({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ly=Xn(oy),uy=P({},Ga,{data:0}),Ym=Xn(uy),cy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hy[e])?!!n[e]:!1}function vf(){return dy}var py=P({},Do,{key:function(e){if(e.key){var n=cy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vf,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),my=Xn(py),gy=P({},tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Xn(gy),vy=P({},Ga,{submitter:0}),_y=Xn(vy),xy=P({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vf}),Sy=Xn(xy),yy=P({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=Xn(yy),Ey=P({},tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ty=Xn(Ey),by=P({},Ga,{newState:0,oldState:0,source:0}),Ay=Xn(by),Ry=[9,13,27,32],_f=pa&&"CompositionEvent"in window,Uo=null;pa&&"documentMode"in document&&(Uo=document.documentMode);var Cy=pa&&"TextEvent"in window&&!Uo,Km=pa&&(!_f||Uo&&8<Uo&&11>=Uo),Jm=" ",Qm=!1;function jm(e,n){switch(e){case"keyup":return Ry.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cs=!1;function wy(e,n){switch(e){case"compositionend":return $m(n);case"keypress":return n.which!==32?null:(Qm=!0,Jm);case"textInput":return e=n.data,e===Jm&&Qm?null:e;default:return null}}function Dy(e,n){if(cs)return e==="compositionend"||!_f&&jm(e,n)?(e=km(),Jl=df=Ha=null,cs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Km&&n.locale!=="ko"?null:n.data;default:return null}}var Ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ny[e.type]:n==="textarea"}function e0(e,n,a,s){ls?us?us.push(s):us=[s]:ls=s,n=ec(n,"onChange"),0<n.length&&(a=new $l("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Lo=null,Oo=null;function Uy(e){Vv(e,0)}function eu(e){var n=$t(e);if(Im(n))return e}function n0(e,n){if(e==="change")return n}var i0=!1;if(pa){var xf;if(pa){var Sf="oninput"in document;if(!Sf){var a0=document.createElement("div");a0.setAttribute("oninput","return;"),Sf=typeof a0.oninput=="function"}xf=Sf}else xf=!1;i0=xf&&(!document.documentMode||9<document.documentMode)}function r0(){Lo&&(Lo.detachEvent("onpropertychange",s0),Oo=Lo=null)}function s0(e){if(e.propertyName==="value"&&eu(Oo)){var n=[];e0(n,Oo,e,cf(e)),Xm(Uy,n)}}function Ly(e,n,a){e==="focusin"?(r0(),Lo=n,Oo=a,Lo.attachEvent("onpropertychange",s0)):e==="focusout"&&r0()}function Oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return eu(Oo)}function Py(e,n){if(e==="click")return eu(n)}function Iy(e,n){if(e==="input"||e==="change")return eu(n)}function zy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ai=typeof Object.is=="function"?Object.is:zy;function Po(e,n){if(ai(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Mt.call(n,c)||!ai(e[c],n[c]))return!1}return!0}function yf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function o0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function l0(e,n){var a=o0(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=o0(a)}}function u0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?u0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function c0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yf(e.document)}return n}function Mf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var By=pa&&"documentMode"in document&&11>=document.documentMode,fs=null,Ef=null,Io=null,Tf=!1;function f0(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tf||fs==null||fs!==yf(s)||(s=fs,"selectionStart"in s&&Mf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Io&&Po(Io,s)||(Io=s,s=ec(Ef,"onSelect"),0<s.length&&(n=new $l("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=fs)))}function Mr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var hs={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},bf={},h0={};pa&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Er(e){if(bf[e])return bf[e];if(!hs[e])return e;var n=hs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in h0)return bf[e]=n[a];return e}var d0=Er("animationend"),p0=Er("animationiteration"),m0=Er("animationstart"),Fy=Er("transitionrun"),Hy=Er("transitionstart"),Gy=Er("transitioncancel"),g0=Er("transitionend"),v0=new Map,Af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Af.push("scrollEnd");function wi(e,n){v0.set(e,n),Kt(n,[e])}var Vy=0;function ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Li.identifierPrefix;var a=Vy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function _0(e){if(e==null||typeof e=="string")return e;var n=null,a=Us;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ga(e,n){return e=_0(e),n=_0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var nu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],ds=0,Rf=0;function iu(){for(var e=ds,n=Rf=ds=0;n<e;){var a=Si[n];Si[n++]=null;var s=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var f=Si[n];if(Si[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&x0(a,c,f)}}function au(e,n,a,s){Si[ds++]=e,Si[ds++]=n,Si[ds++]=a,Si[ds++]=s,Rf|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Cf(e,n,a,s){return au(e,n,a,s),ru(e)}function Tr(e,n){return au(e,null,null,n),ru(e)}function x0(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-ve(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function ru(e){if(50<al)throw al=0,Zu=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ps={};function Xy(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,s){return new Xy(e,n,a,s)}function wf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function S0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function su(e,n,a,s,c,f){var x=0;if(s=e,typeof s=="function")wf(s)&&(x=1);else if(typeof s=="string")x=vE(e,a,ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(s){case xt:return e=Jn(31,a,n,c),e.elementType=xt,e.lanes=f,e;case V:return br(a.children,c,f,n);case J:x=8,c|=24;break;case rt:return e=Jn(12,a,n,c|2),e.elementType=rt,e.lanes=f,e;case W:return e=Jn(13,a,n,c),e.elementType=W,e.lanes=f,e;case ct:return e=Jn(19,a,n,c),e.elementType=ct,e.lanes=f,e;case Pt:case F:return e=c|32,e=Jn(30,a,n,e),e.elementType=F,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case Z:x=10;break t;case q:x=9;break t;case k:x=11;break t;case st:x=14;break t;case pt:x=16,s=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Jn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function br(e,n,a,s){return e=Jn(7,e,s,n),e.lanes=a,e}function Df(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function y0(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Nf(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var M0=new WeakMap;function yi(e,n){if(typeof e=="object"&&e!==null){var a=M0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},M0.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var ms=[],gs=0,ou=null,zo=0,Mi=[],Ei=0,Va=null,Yi=1,Zi="";function _a(e,n){ms[gs++]=zo,ms[gs++]=ou,ou=e,zo=n}function E0(e,n,a){Mi[Ei++]=Yi,Mi[Ei++]=Zi,Mi[Ei++]=Va,Va=e;var s=Yi;e=Zi;var c=32-ve(s)-1;s&=~(1<<c),a+=1;var f=32-ve(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Yi=1<<32-ve(n)+c|a<<c|s,Zi=f+e}else Yi=1<<f|a<<c|s,Zi=e}function lu(e){e.return!==null&&(_a(e,1),E0(e,1,0))}function Uf(e){for(;e===ou;)ou=ms[--gs],ms[gs]=null,zo=ms[--gs],ms[gs]=null;for(;e===Va;)Va=Mi[--Ei],Mi[Ei]=null,Zi=Mi[--Ei],Mi[Ei]=null,Yi=Mi[--Ei],Mi[Ei]=null}function T0(e,n){Mi[Ei++]=Yi,Mi[Ei++]=Zi,Mi[Ei++]=Va,Yi=n.id,Zi=n.overflow,Va=e}var bn=null,nn=null,we=!1,Xa=null,Ti=!1,Lf=Error(r(519));function ka(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(yi(n,e)),Lf}function b0(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[A]=e,n[G]=s,a){case"dialog":Le("cancel",n),Le("close",n);break;case"iframe":case"object":case"embed":Le("load",n);break;case"video":case"audio":for(a=0;a<sl.length;a++)Le(sl[a],n);break;case"source":Le("error",n);break;case"img":case"image":case"link":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"input":Le("invalid",n),zm(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Le("invalid",n);break;case"textarea":Le("invalid",n),Fm(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||qv(n.textContent,a)?(s.popover!=null&&(Le("beforetoggle",n),Le("toggle",n)),s.onScroll!=null&&Le("scroll",n),s.onScrollEnd!=null&&Le("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||ka(e,!0)}function uu(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:bn=bn.return}}function vs(e){if(e!==bn)return!1;if(!we)return uu(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ud(e.type,e.memoizedProps)),a=!a),a&&nn&&ka(e),uu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=f_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));nn=f_(e)}else n===27?(n=nn,sr(e.type)?(e=_d,_d=null,nn=e):nn=n):nn=bn?Ai(e.stateNode.nextSibling):null;return!0}function Ar(){nn=bn=null,we=!1}function Of(){var e=Xa;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Xa=null),e}function Bo(e){Xa===null?Xa=[e]:Xa.push(e)}var Pf=Ct(null),Rr=null,xa=null;function Wa(e,n,a){At(Pf,n._currentValue),n._currentValue=a}function Sa(e){e._currentValue=Pf.current,bt(Pf)}function cu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function If(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=c;for(var I=0;I<n.length;I++)if(R.context===n[I]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),cu(f.return,a,e),s||(x=null);break t}f=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),cu(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),cu(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Cr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=c.type;ai(c.pendingProps.value,x.value)||(e!==null?e.push(R):e=[R])}}else if(c===fe.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Vs):e=[Vs])}c=c.return}return e!==null&&If(n,e,a,s),n.flags|=262144,e!==null}function fu(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wr(e){Rr=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return A0(Rr,e)}function hu(e,n){return Rr===null&&wr(e),A0(e,n)}function A0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(r(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Wy=o.unstable_scheduleCallback,qy=o.unstable_NormalPriority,mn={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zf(){return{controller:new ky,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&Wy(qy,function(){e.controller.abort()})}function R0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Ho=null;function Yy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Go=null,Bf=0,Dr=0,_s=null;function Zy(e,n){if(Go===null){var a=Go=[];Bf=0,Dr=td(),_s={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Bf++,n.then(C0,C0),n}function C0(){if(--Bf===0&&(Ho=null,Go!==null)){_s!==null&&(_s.status="fulfilled");var e=Go;Go=null,Dr=0,_s=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ky(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var w0=_t.S;_t.S=function(e,n){if(yv=Qt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zy(e,n),Ho!==null)for(var a=Is;a!==null;)R0(a,Ho),a=a.next;if(a=e.types,a!==null){for(var s=Is;s!==null;)R0(s,a),s=s.next;if(Dr!==0){s=Ho,s===null&&(s=Ho=[]);for(var c=0;c<a.length;c++){var f=a[c];s.indexOf(f)===-1&&s.push(f)}}}w0!==null&&w0(e,n)};var Nr=Ct(null);function Ff(){var e=Nr.current;return e!==null?e:$e.pooledCache}function du(e,n){n===null?At(Nr,Nr.current):At(Nr,n.pool)}function D0(){var e=Ff();return e===null?null:{parent:mn._currentValue,pool:e}}var xs=Error(r(460)),Hf=Error(r(474)),pu=Error(r(542)),mu={then:function(){}};function N0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function U0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,O0(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(qi,qi);else{if(e=$e,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,O0(e),e}throw Lr=n,xs}}function Ur(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Lr=a,xs):a}}var Lr=null;function L0(){if(Lr===null)throw Error(r(459));var e=Lr;return Lr=null,e}function O0(e){if(e===xs||e===pu)throw Error(r(483))}var Ss=null,Vo=0;function gu(e){var n=Vo;return Vo+=1,Ss===null&&(Ss=[]),U0(Ss,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vu(e,n){throw n.$$typeof===T?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function P0(e){function n(tt,X){if(e){var at=tt.deletions;at===null?(tt.deletions=[X],tt.flags|=16):at.push(X)}}function a(tt,X){if(!e)return null;for(;X!==null;)n(tt,X),X=X.sibling;return null}function s(tt){for(var X=new Map;tt!==null;)tt.key===null?X.set(tt.index,tt):X.set(tt.key,tt),tt=tt.sibling;return X}function c(tt,X){return tt=va(tt,X),tt.index=0,tt.sibling=null,tt}function f(tt,X,at){return tt.index=at,e?(at=tt.alternate,at!==null?(at=at.index,at<X?(tt.flags|=2,X):at):(tt.flags|=134217730,X)):(tt.flags|=1048576,X)}function x(tt){return e&&tt.alternate===null&&(tt.flags|=134217730),tt}function R(tt,X,at,yt){return X===null||X.tag!==6?(X=Df(at,tt.mode,yt),X.return=tt,X):(X=c(X,at),X.return=tt,X)}function I(tt,X,at,yt){var te=at.type;return te===V?(tt=ft(tt,X,at.props.children,yt,at.key),qa(tt,at),tt):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===pt&&Ur(te)===X.type)?(X=c(X,at.props),qa(X,at),X.return=tt,X):(X=su(at.type,at.key,at.props,null,tt.mode,yt),qa(X,at),X.return=tt,X)}function et(tt,X,at,yt){return X===null||X.tag!==4||X.stateNode.containerInfo!==at.containerInfo||X.stateNode.implementation!==at.implementation?(X=Nf(at,tt.mode,yt),X.return=tt,X):(X=c(X,at.children||[]),X.return=tt,X)}function ft(tt,X,at,yt,te){return X===null||X.tag!==7?(X=br(at,tt.mode,yt,te),X.return=tt,X):(X=c(X,at),X.return=tt,X)}function Et(tt,X,at){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Df(""+X,tt.mode,at),X.return=tt,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case O:return at=su(X.type,X.key,X.props,null,tt.mode,at),qa(at,X),at.return=tt,at;case z:return X=Nf(X,tt.mode,at),X.return=tt,X;case pt:return X=Ur(X),Et(tt,X,at)}if(Ht(X)||K(X))return X=br(X,tt.mode,at,null),X.return=tt,X;if(typeof X.then=="function")return Et(tt,gu(X),at);if(X.$$typeof===Z)return Et(tt,hu(tt,X),at);vu(tt,X)}return null}function Q(tt,X,at,yt){var te=X!==null?X.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return te!==null?null:R(tt,X,""+at,yt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case O:return at.key===te?I(tt,X,at,yt):null;case z:return at.key===te?et(tt,X,at,yt):null;case pt:return at=Ur(at),Q(tt,X,at,yt)}if(Ht(at)||K(at))return te!==null?null:ft(tt,X,at,yt,null);if(typeof at.then=="function")return Q(tt,X,gu(at),yt);if(at.$$typeof===Z)return Q(tt,X,hu(tt,at),yt);vu(tt,at)}return null}function ut(tt,X,at,yt,te){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return tt=tt.get(at)||null,R(X,tt,""+yt,te);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case O:return tt=tt.get(yt.key===null?at:yt.key)||null,I(X,tt,yt,te);case z:return tt=tt.get(yt.key===null?at:yt.key)||null,et(X,tt,yt,te);case pt:return yt=Ur(yt),ut(tt,X,at,yt,te)}if(Ht(yt)||K(yt))return tt=tt.get(at)||null,ft(X,tt,yt,te,null);if(typeof yt.then=="function")return ut(tt,X,at,gu(yt),te);if(yt.$$typeof===Z)return ut(tt,X,at,hu(X,yt),te);vu(X,yt)}return null}function kt(tt,X,at,yt){for(var te=null,Ie=null,ue=X,he=X=0,_n=null;ue!==null&&he<at.length;he++){ue.index>he?(_n=ue,ue=null):_n=ue.sibling;var He=Q(tt,ue,at[he],yt);if(He===null){ue===null&&(ue=_n);break}e&&ue&&He.alternate===null&&n(tt,ue),X=f(He,X,he),Ie===null?te=He:Ie.sibling=He,Ie=He,ue=_n}if(he===at.length)return a(tt,ue),we&&_a(tt,he),te;if(ue===null){for(;he<at.length;he++)ue=Et(tt,at[he],yt),ue!==null&&(X=f(ue,X,he),Ie===null?te=ue:Ie.sibling=ue,Ie=ue);return we&&_a(tt,he),te}for(ue=s(ue);he<at.length;he++)_n=ut(ue,tt,he,at[he],yt),_n!==null&&(e&&(He=_n.alternate,He!==null&&ue.delete(He.key===null?he:He.key)),X=f(_n,X,he),Ie===null?te=_n:Ie.sibling=_n,Ie=_n);return e&&ue.forEach(function(fr){return n(tt,fr)}),we&&_a(tt,he),te}function oe(tt,X,at,yt){if(at==null)throw Error(r(151));for(var te=null,Ie=null,ue=X,he=X=0,_n=null,He=at.next();ue!==null&&!He.done;he++,He=at.next()){ue.index>he?(_n=ue,ue=null):_n=ue.sibling;var fr=Q(tt,ue,He.value,yt);if(fr===null){ue===null&&(ue=_n);break}e&&ue&&fr.alternate===null&&n(tt,ue),X=f(fr,X,he),Ie===null?te=fr:Ie.sibling=fr,Ie=fr,ue=_n}if(He.done)return a(tt,ue),we&&_a(tt,he),te;if(ue===null){for(;!He.done;he++,He=at.next())He=Et(tt,He.value,yt),He!==null&&(X=f(He,X,he),Ie===null?te=He:Ie.sibling=He,Ie=He);return we&&_a(tt,he),te}for(ue=s(ue);!He.done;he++,He=at.next())He=ut(ue,tt,he,He.value,yt),He!==null&&(e&&(_n=He.alternate,_n!==null&&ue.delete(_n.key===null?he:_n.key)),X=f(He,X,he),Ie===null?te=He:Ie.sibling=He,Ie=He);return e&&ue.forEach(function(wE){return n(tt,wE)}),we&&_a(tt,he),te}function be(tt,X,at,yt){if(typeof at=="object"&&at!==null&&at.type===V&&at.key===null&&at.props.ref===void 0&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case O:t:{for(var te=at.key;X!==null;){if(X.key===te){if(te=at.type,te===V){if(X.tag===7){a(tt,X.sibling),yt=c(X,at.props.children),qa(yt,at),yt.return=tt,tt=yt;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===pt&&Ur(te)===X.type){a(tt,X.sibling),yt=c(X,at.props),qa(yt,at),yt.return=tt,tt=yt;break t}a(tt,X);break}else n(tt,X);X=X.sibling}at.type===V?(yt=br(at.props.children,tt.mode,yt,at.key),qa(yt,at),yt.return=tt,tt=yt):(yt=su(at.type,at.key,at.props,null,tt.mode,yt),qa(yt,at),yt.return=tt,tt=yt)}return x(tt);case z:t:{for(te=at.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===at.containerInfo&&X.stateNode.implementation===at.implementation){a(tt,X.sibling),yt=c(X,at.children||[]),yt.return=tt,tt=yt;break t}else{a(tt,X);break}else n(tt,X);X=X.sibling}yt=Nf(at,tt.mode,yt),yt.return=tt,tt=yt}return x(tt);case pt:return at=Ur(at),be(tt,X,at,yt)}if(Ht(at))return kt(tt,X,at,yt);if(K(at)){if(te=K(at),typeof te!="function")throw Error(r(150));return at=te.call(at),oe(tt,X,at,yt)}if(typeof at.then=="function")return be(tt,X,gu(at),yt);if(at.$$typeof===Z)return be(tt,X,hu(tt,at),yt);vu(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,X!==null&&X.tag===6?(a(tt,X.sibling),yt=c(X,at),yt.return=tt,tt=yt):(a(tt,X),yt=Df(at,tt.mode,yt),yt.return=tt,tt=yt),x(tt)):a(tt,X)}return function(tt,X,at,yt){try{Vo=0;var te=be(tt,X,at,yt);return Ss=null,te}catch(ue){if(ue===xs||ue===pu)throw ue;var Ie=Jn(29,ue,null,tt.mode);return Ie.lanes=yt,Ie.return=tt,Ie}finally{}}}var Or=P0(!0),I0=P0(!1),Ya=!1;function Gf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Xe&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ru(e),x0(e,null,a),n}return au(e,s,n,a),ru(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,To(e,a)}}function Xf(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var kf=!1;function ko(){if(kf){var e=_s;if(e!==null)throw e}}function Wo(e,n,a,s){kf=!1;var c=e.updateQueue;Ya=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var I=R,et=I.next;I.next=null,x===null?f=et:x.next=et,x=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,R=ft.lastBaseUpdate,R!==x&&(R===null?ft.firstBaseUpdate=et:R.next=et,ft.lastBaseUpdate=I))}if(f!==null){var Et=c.baseState;x=0,ft=et=I=null,R=f;do{var Q=R.lane&-536870913,ut=Q!==R.lane;if(ut?(Pe&Q)===Q:(s&Q)===Q){Q!==0&&Q===Dr&&(kf=!0),ft!==null&&(ft=ft.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var kt=e,oe=R;Q=n;var be=a;switch(oe.tag){case 1:if(kt=oe.payload,typeof kt=="function"){Et=kt.call(be,Et,Q);break t}Et=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=oe.payload,Q=typeof kt=="function"?kt.call(be,Et,Q):kt,Q==null)break t;Et=P({},Et,Q);break t;case 2:Ya=!0}}Q=R.callback,Q!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=c.callbacks,ut===null?c.callbacks=[Q]:ut.push(Q))}else ut={lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ft===null?(et=ft=ut,I=Et):ft=ft.next=ut,x|=Q;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ut=R,R=ut.next,ut.next=null,c.lastBaseUpdate=ut,c.shared.pending=null}}while(!0);ft===null&&(I=Et),c.baseState=I,c.firstBaseUpdate=et,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),nr|=x,e.lanes=x,e.memoizedState=Et}}function z0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function B0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)z0(a[e],n)}var Ja=Ct(null),_u=Ct(0);function F0(e,n){e=ba,At(_u,e),At(Ja,n),ba=e|n.baseLanes}function Wf(){At(_u,ba),At(Ja,Ja.current)}function qf(){ba=_u.current,bt(Ja),bt(_u)}var Dn=Ct(null),zn=null;function Qa(e){var n=e.alternate;At(Nn,Nn.current&1),At(Dn,e),zn===null&&(n===null||Ja.current!==null||n.memoizedState!==null)&&(zn=e)}function Yf(e){At(Nn,Nn.current),At(Dn,e),zn===null&&(zn=e)}function H0(e){e.tag===22?(At(Nn,Nn.current),At(Dn,e),zn===null&&(zn=e)):ja()}function ja(){At(Nn,Nn.current),At(Dn,Dn.current)}function ri(e){bt(Dn),zn===e&&(zn=null),bt(Nn)}var Nn=Ct(0);function qo(e,n){At(Dn,Dn.current),At(Nn,n)}function Zf(e){bt(Nn),bt(Dn),zn===e&&(zn=null)}function xu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||gd(a)||vd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,Te=null,je=null,gn=null,Su=!1,ys=!1,Pr=!1,yu=0,Yo=0,Ms=null,Jy=0;function hn(){throw Error(r(321))}function Kf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ai(e[a],n[a]))return!1;return!0}function Jf(e,n,a,s,c,f){return ya=f,Te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=e===null||e.memoizedState===null?Eg:Tg,Pr=!1,f=a(s,c),Pr=!1,ys&&(f=V0(n,a,s,c)),G0(e),f}function G0(e){_t.H=Cu;var n=je!==null&&je.next!==null;if(ya=0,gn=je=Te=null,Su=!1,Yo=0,Ms=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&fu(e)&&(vn=!0))}function V0(e,n,a,s){Te=e;var c=0;do{if(ys&&(Ms=null),Yo=0,ys=!1,25<=c)throw Error(r(301));if(c+=1,gn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_t.H=aM,f=n(a,s)}while(ys);return f}function Qy(){var e=_t.H,n=e.useState()[0];return n=typeof n.then=="function"?Zo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(Te.flags|=1024),n}function Qf(){var e=yu!==0;return yu=0,e}function jf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $f(e){if(Su){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Su=!1}ya=0,gn=je=Te=null,ys=!1,Yo=yu=0,Ms=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Te.memoizedState=gn=e:gn=gn.next=e,gn}function pn(){if(je===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?Te.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw Te.alternate===null?Error(r(467)):Error(r(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?Te.memoizedState=gn=e:gn=gn.next=e}return gn}function Mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var n=Yo;return Yo+=1,Ms===null&&(Ms=[]),e=U0(Ms,e,n),n=Te,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?Eg:Tg),e}function Eu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===gt)return;if(e.$$typeof===Z)return wn(e)}throw Error(r(438,String(e)))}function th(e){var n=null,a=Te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=Te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Mu(),Te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=qt;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function Tu(e){var n=pn();return eh(n,je,e)}function eh(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var R=x=null,I=null,et=n,ft=!1;do{var Et=et.lane&-536870913;if(Et!==et.lane?(Pe&Et)===Et:(ya&Et)===Et){var Q=et.revertLane;if(Q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),Et===Dr&&(ft=!0);else if((ya&Q)===Q){et=et.next,Q===Dr&&(ft=!0);continue}else Et={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(R=I=Et,x=f):I=I.next=Et,Te.lanes|=Q,nr|=Q;Et=et.action,Pr&&a(f,Et),f=et.hasEagerState?et.eagerState:a(f,Et)}else Q={lane:Et,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(R=I=Q,x=f):I=I.next=Q,Te.lanes|=Et,nr|=Et;et=et.next}while(et!==null&&et!==n);if(I===null?x=f:I.next=R,!ai(f,e.memoizedState)&&(vn=!0,ft&&(a=_s,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function nh(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);ai(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function X0(e,n,a){var s=Te,c=pn(),f=we;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!ai((je||c).memoizedState,a);if(x&&(c.memoizedState=a,vn=!0),c=c.queue,rh(q0.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,Es(e?9:8,{destroy:void 0},W0.bind(null,s,c,a,n),null),e){if(s.flags|=2048,$e===null)throw Error(r(349));f||(ya&127)!==0||k0(s,n,a)}return a}function k0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Te.updateQueue,n===null?(n=Mu(),Te.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function W0(e,n,a,s){n.value=a,n.getSnapshot=s,Y0(n)&&Z0(e)}function q0(e,n,a){return a(function(){Y0(n)&&Z0(e)})}function Y0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ai(e,a)}catch{return!0}}function Z0(e){var n=Tr(e,2);n!==null&&ti(n,e,2)}function ih(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Pr){xe(!0);try{a()}finally{xe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function K0(e,n,a,s){return e.baseState=a,eh(e,je,typeof s=="function"?s:Ma)}function jy(e,n,a,s,c){if(Ru(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};_t.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,J0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function J0(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=_t.T,x={};x.types=f!==null?f.types:null,_t.T=x;try{var R=a(c,s),I=_t.S;I!==null&&I(x,R),Q0(e,n,R)}catch(et){ah(e,n,et)}finally{f!==null&&x.types!==null&&(f.types=x.types),_t.T=f}}else try{f=a(c,s),Q0(e,n,f)}catch(et){ah(e,n,et)}}function Q0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){j0(e,n,s)},function(s){return ah(e,n,s)}):j0(e,n,a)}function j0(e,n,a){n.status="fulfilled",n.value=a,$0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,J0(e,a)))}function ah(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,$0(n),n=n.next;while(n!==s)}e.action=null}function $0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tg(e,n){return n}function eg(e,n){if(we){var a=$e.formState;if(a!==null){t:{var s=Te;if(we){if(nn){e:{for(var c=nn,f=Ti;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ai(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Ai(c.nextSibling),s=c.data==="F!";break t}}ka(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tg,lastRenderedState:n},a.queue=s,a=Sg.bind(null,Te,s),s.dispatch=a,s=ih(!1),f=ch.bind(null,Te,!1,s.queue),s=kn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=jy.bind(null,Te,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function ng(e){var n=pn();return ig(n,je,e)}function ig(e,n,a){if(n=eh(e,n,tg)[0],e=Tu(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zo(n)}catch(x){throw x===xs?pu:x}else s=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(Te.flags|=2048,Es(9,{destroy:void 0},$y.bind(null,c,a),null)),[s,f,e]}function $y(e,n){e.action=n}function ag(e){var n=pn(),a=je;if(a!==null)return ig(n,a,e);pn(),n=n.memoizedState,a=pn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Es(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=Te.updateQueue,n===null&&(n=Mu(),Te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function rg(){return pn().memoizedState}function bu(e,n,a,s){var c=kn();Te.flags|=e,c.memoizedState=Es(1|n,{destroy:void 0},a,s===void 0?null:s)}function Au(e,n,a,s){var c=pn();s=s===void 0?null:s;var f=c.memoizedState.inst;je!==null&&s!==null&&Kf(s,je.memoizedState.deps)?c.memoizedState=Es(n,f,a,s):(Te.flags|=e,c.memoizedState=Es(1|n,f,a,s))}function sg(e,n){bu(8390656,8,e,n)}function rh(e,n){Au(2048,8,e,n)}function tM(e){Te.flags|=4;var n=Te.updateQueue;if(n===null)n=Mu(),Te.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function og(e){var n=pn().memoizedState;return tM({ref:n,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function lg(e,n){return Au(4,2,e,n)}function ug(e,n){return Au(4,4,e,n)}function cg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function fg(e,n,a){a=a!=null?a.concat([e]):null,Au(4,4,cg.bind(null,n,e),a)}function sh(){}function hg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Kf(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function dg(e,n){var a=pn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Kf(n,s[1]))return s[0];if(s=e(),Pr){xe(!0);try{e()}finally{xe(!1)}}return a.memoizedState=[s,n],s}function oh(e,n,a){return a===void 0||(ya&1073741824)!==0&&(Pe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Ev(),Te.lanes|=e,nr|=e,a)}function pg(e,n,a,s){return ai(a,n)?a:Ja.current!==null?(e=oh(e,a,s),ai(e,n)||(vn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(Pe&261930)===0?(vn=!0,e.memoizedState=a):(e=Ev(),Te.lanes|=e,nr|=e,n)}function mg(e,n,a,s,c){var f=Dt.p;Dt.p=f!==0&&8>f?f:8;var x=_t.T,R={};R.types=x!==null?x.types:null,_t.T=R,ch(e,!1,n,a);try{var I=c(),et=_t.S;if(et!==null&&et(R,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=Ky(I,s);Ko(e,n,ft,ui(e))}else Ko(e,n,s,ui(e))}catch(Et){Ko(e,n,{then:function(){},status:"rejected",reason:Et},ui())}finally{Dt.p=f,x!==null&&R.types!==null&&(x.types=R.types),_t.T=x}}function eM(){}function lh(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=gg(e).queue;mg(e,c,n,Ee,a===null?eM:function(){return vg(e),a(s)})}function gg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Ee,baseState:Ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function vg(e){var n=gg(e);n.next===null&&(n=e.alternate.memoizedState),Ko(e,n.next.queue,{},ui())}function uh(){return wn(Vs)}function _g(){return pn().memoizedState}function xg(){return pn().memoizedState}function nM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=Za(a);var s=Ka(n,e,a);s!==null&&(ti(s,n,a),Xo(s,n,a)),n={cache:zf()},e.payload=n;return}n=n.return}}function iM(e,n,a){var s=ui();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ru(e)?yg(n,a):(a=Cf(e,n,a,s),a!==null&&(ti(a,e,s),Mg(a,n,s)))}function Sg(e,n,a){var s=ui();Ko(e,n,a,s)}function Ko(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))yg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(c.hasEagerState=!0,c.eagerState=R,ai(R,x))return au(e,n,c,0),$e===null&&iu(),!1}catch{}finally{}if(a=Cf(e,n,c,s),a!==null)return ti(a,e,s),Mg(a,n,s),!0}return!1}function ch(e,n,a,s){if(s={lane:2,revertLane:td(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ru(e)){if(n)throw Error(r(479))}else n=Cf(e,a,s,2),n!==null&&ti(n,e,2)}function Ru(e){var n=e.alternate;return e===Te||n!==null&&n===Te}function yg(e,n){ys=Su=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mg(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,To(e,a)}}var Cu={readContext:wn,use:Eu,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn,useEffectEvent:hn},Eg={readContext:wn,use:Eu,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:sg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bu(4194308,4,cg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bu(4194308,4,e,n)},useInsertionEffect:function(e,n){bu(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var s=e();if(Pr){xe(!0);try{e()}finally{xe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=kn();if(a!==void 0){var c=a(n);if(Pr){xe(!0);try{a(n)}finally{xe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=iM.bind(null,Te,e),[s.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=ih(e);var n=e.queue,a=Sg.bind(null,Te,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:sh,useDeferredValue:function(e,n){var a=kn();return oh(a,e,n)},useTransition:function(){var e=ih(!1);return e=mg.bind(null,Te,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=Te,c=kn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$e===null)throw Error(r(349));(Pe&127)!==0||k0(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,sg(q0.bind(null,s,f,e),[e]),s.flags|=2048,Es(9,{destroy:void 0},W0.bind(null,s,f,a,n),null),a},useId:function(){var e=kn(),n=$e.identifierPrefix;if(we){var a=Zi,s=Yi;a=(s&~(1<<32-ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:uh,useFormState:eg,useActionState:eg,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ch.bind(null,Te,!0,a),a.dispatch=n,[e,n]},useMemoCache:th,useCacheRefresh:function(){return kn().memoizedState=nM.bind(null,Te)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Tg={readContext:wn,use:Eu,useCallback:hg,useContext:wn,useEffect:rh,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:Tu,useRef:rg,useState:function(){return Tu(Ma)},useDebugValue:sh,useDeferredValue:function(e,n){var a=pn();return pg(a,je.memoizedState,e,n)},useTransition:function(){var e=Tu(Ma)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:X0,useId:_g,useHostTransitionStatus:uh,useFormState:ng,useActionState:ng,useOptimistic:function(e,n){var a=pn();return K0(a,je,e,n)},useMemoCache:th,useCacheRefresh:xg,useEffectEvent:og},aM={readContext:wn,use:Eu,useCallback:hg,useContext:wn,useEffect:rh,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:ug,useMemo:dg,useReducer:nh,useRef:rg,useState:function(){return nh(Ma)},useDebugValue:sh,useDeferredValue:function(e,n){var a=pn();return je===null?oh(a,e,n):pg(a,je.memoizedState,e,n)},useTransition:function(){var e=nh(Ma)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:X0,useId:_g,useHostTransitionStatus:uh,useFormState:ag,useActionState:ag,useOptimistic:function(e,n){var a=pn();return je!==null?K0(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:th,useCacheRefresh:xg,useEffectEvent:og};function fh(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hh={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ui(),c=Za(s);c.payload=n,a!=null&&(c.callback=a),n=Ka(e,c,s),n!==null&&(ti(n,e,s),Xo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ui(),c=Za(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ka(e,c,s),n!==null&&(ti(n,e,s),Xo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),s=Za(a);s.tag=2,n!=null&&(s.callback=n),n=Ka(e,s,a),n!==null&&(ti(n,e,a),Xo(n,e,a))}};function bg(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Po(a,s)||!Po(c,f):!0}function Ag(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&hh.enqueueReplaceState(n,n.state,null)}function Ir(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Rg(e){nu(e)}function Cg(e){console.error(e)}function wg(e){nu(e)}function wu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Dg(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function dh(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){wu(e,n)},a}function Ng(e){return e=Za(e),e.tag=3,e}function Ug(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){Dg(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Dg(n,a,s),typeof c!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function rM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Cr(n,a,c,!0),a=Dn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return zn===null?Ju():a.alternate===null&&dn===0&&(dn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Qh(e,s,c)),!1;case 22:return a.flags|=65536,s===mu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Qh(e,s,c)),!1}throw Error(r(435,a.tag))}return Qh(e,s,c),Ju(),!1}if(we)return n=Dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Lf&&(e=Error(r(422),{cause:s}),Bo(yi(e,a)))):(s!==Lf&&(n=Error(r(423),{cause:s}),Bo(yi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=yi(s,a),c=dh(e.stateNode,s,c),Xf(e,c),dn!==4&&(dn=2)),!1;var f=Error(r(520),{cause:s});if(f=yi(f,a),il===null?il=[f]:il.push(f),dn!==4&&(dn=2),n===null)return!0;s=yi(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=dh(a.stateNode,s,e),Xf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ir===null||!ir.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ng(c),Ug(c,e,a,s),Xf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ph=Error(r(461)),vn=!1;function Mn(e,n,a,s){n.child=e===null?I0(n,null,a,s):Or(n,e.child,a,s)}function Lg(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var R in s)R!=="ref"&&(x[R]=s[R])}else x=s;return wr(n),s=Jf(e,n,a,x,f,c),R=Qf(),e!==null&&!vn?(jf(e,n,c),Ea(e,n,c)):(we&&R&&lu(n),n.flags|=1,Mn(e,n,s,c),n.child)}function Og(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!wf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pg(e,n,f,s,c)):(e=su(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mh(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Po,a(x,s)&&e.ref===n.ref)return Ea(e,n,c)}return n.flags|=1,e=va(f,s),e.ref=n.ref,e.return=n,n.child=e}function Pg(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Po(f,s)&&e.ref===n.ref)if(vn=!1,n.pendingProps=s=f,Mh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Ea(e,n,c)}return mh(e,n,a,s,c)}function Ig(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return zg(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&du(n,f!==null?f.cachePool:null),f!==null?F0(n,f):Wf(),H0(n);else return s=n.lanes=536870912,zg(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(du(n,f.cachePool),F0(n,f),ja(),n.memoizedState=null):(e!==null&&du(n,null),Wf(),ja());return Mn(e,n,c,a),n.child}function Jo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function zg(e,n,a,s,c){var f=Ff();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&du(n,null),Wf(),H0(n),e!==null&&Cr(e,n,s,!0),n.childLanes=c,null}function Du(e,n){return n=Nu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Bg(e,n,a){return Or(n,e.child,null,a),e=Du(n,n.pendingProps),e.flags|=2,ri(n),n.memoizedState=null,e}function sM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(s.mode==="hidden")return e=Du(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Jo(null,e);if(Yf(n),(e=nn)?(e=c_(e,Ti),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=y0(e),a.return=n,n.child=a,bn=n,nn=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return Du(n,s)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Yf(n),c)if(n.flags&256)n.flags&=-257,n=Bg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(vn||Cr(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(Ja.current===null){if(s=$e,s!==null&&(x=bo(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Tr(e,x),ti(s,e,x),ph;Ju()}n=Bg(e,n,a)}else e=f.treeContext,nn=Ai(x.nextSibling),bn=n,we=!0,Xa=null,Ti=!1,e!==null&&T0(n,e),n=Du(n,s),n.flags|=134221824;return n}return e=va(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ts(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mh(e,n,a,s,c){return wr(n),a=Jf(e,n,a,s,void 0,c),s=Qf(),e!==null&&!vn?(jf(e,n,c),Ea(e,n,c)):(we&&s&&lu(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Fg(e,n,a,s,c,f){return wr(n),n.updateQueue=null,a=V0(n,s,a,c),G0(e),s=Qf(),e!==null&&!vn?(jf(e,n,f),Ea(e,n,f)):(we&&s&&lu(n),n.flags|=1,Mn(e,n,a,f),n.child)}function Hg(e,n,a,s,c){if(wr(n),n.stateNode===null){var f=ps,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Gf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):ps,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(fh(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&hh.enqueueReplaceState(f,f.state,null),Wo(n,s,f,c),ko(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,I=Ir(a,R);f.props=I;var et=f.context,ft=a.contextType;x=ps,typeof ft=="object"&&ft!==null&&(x=wn(ft));var Et=a.getDerivedStateFromProps;ft=typeof Et=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||et!==x)&&Ag(n,f,s,x),Ya=!1;var Q=n.memoizedState;f.state=Q,Wo(n,s,f,c),ko(),et=n.memoizedState,R||Q!==et||Ya?(typeof Et=="function"&&(fh(n,a,Et,s),et=n.memoizedState),(I=Ya||bg(n,a,I,s,Q,et,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=x,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Vf(e,n),x=n.memoizedProps,ft=Ir(a,x),f.props=ft,Et=n.pendingProps,Q=f.context,et=a.contextType,I=ps,typeof et=="object"&&et!==null&&(I=wn(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Et||Q!==I)&&Ag(n,f,s,I),Ya=!1,Q=n.memoizedState,f.state=Q,Wo(n,s,f,c),ko();var ut=n.memoizedState;x!==Et||Q!==ut||Ya||e!==null&&e.dependencies!==null&&fu(e.dependencies)?(typeof R=="function"&&(fh(n,a,R,s),ut=n.memoizedState),(ft=Ya||bg(n,a,ft,s,Q,ut,I)||e!==null&&e.dependencies!==null&&fu(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ut,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ut,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ut),f.props=s,f.state=ut,f.context=I,s=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ts(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=Or(n,e.child,null,c),n.child=Or(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Ea(e,n,c),e}function Gg(e,n,a,s){return Ar(),n.flags|=256,Mn(e,n,a,s),n.child}var gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vh(e){return{baseLanes:e,cachePool:D0()}}function _h(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=li),e}function Vg(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Nn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(c?Qa(n):ja(),(e=nn)?(e=c_(e,Ti),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=y0(e),a.return=n,n.child=a,bn=n,nn=null)):e=null,e===null)throw ka(n);return vd(e)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,c?(ja(),c=n.mode,f=Nu({mode:"hidden",children:f},c),s=br(s,c,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=vh(a),s.childLanes=_h(e,x,a),n.memoizedState=gh,Jo(null,s)):(Qa(n),xh(n,f))}var R=e.memoizedState;if(R!==null){var I=R.dehydrated;if(I!==null)return oM(e,n,f,x,s,I,R,a)}return c?(ja(),c=s.fallback,f=n.mode,R=e.child,I=R.sibling,s=va(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,I!==null?c=va(I,c):(c=br(c,f,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Jo(null,s),s=n.child,c=e.child.memoizedState,c===null?c=vh(a):(f=c.cachePool,f!==null?(R=mn._currentValue,f=f.parent!==R?{parent:R,pool:R}:f):f=D0(),c={baseLanes:c.baseLanes|a,cachePool:f}),s.memoizedState=c,s.childLanes=_h(e,x,a),n.memoizedState=gh,Jo(e.child,s)):(Qa(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function xh(e,n){return n=Nu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Nu(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Uu(e,n,a){return Or(n,e.child,null,a),e=xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function oM(e,n,a,s,c,f,x,R){if(a)return n.flags&256?(Qa(n),n.flags&=-257,Uu(e,n,R)):n.memoizedState!==null?(ja(),n.child=e.child,n.flags|=128,null):(ja(),f=c.fallback,x=n.mode,c=Nu({mode:"visible",children:c.children},x),f=br(f,x,R,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Or(n,e.child,null,R),c=n.child,c.memoizedState=vh(R),c.childLanes=_h(e,s,R),n.memoizedState=gh,Jo(null,c));if(Qa(n),vd(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var I=s.dgst;return s=I,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Bo({value:c,source:null,stack:null})),Uu(e,n,R)}if(vn||Cr(e,n,R,!1),s=(R&e.childLanes)!==0,vn||s){if(Ja.current!==null)return Uu(e,n,R);if(s=$e,s!==null&&(c=bo(s,R),c!==0&&c!==x.retryLane))throw x.retryLane=c,Tr(e,c),ti(s,e,c),ph;return gd(f)||Ju(),Uu(e,n,R)}return gd(f)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,nn=Ai(f.nextSibling),bn=n,we=!0,Xa=null,Ti=!1,e!==null&&T0(n,e),n=xh(n,c.children),n.flags|=134221824,n)}function Xg(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),cu(e.return,n,a)}function kg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&xu(a)===null&&(n=e),e=e.sibling}return n}function Lu(e,n,a,s,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function Sh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function yh(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=Nn.current;if(n.flags&128)return qo(n,x),null;var R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,qo(n,x),c==="backwards"&&e!==null?(Sh(e),Mn(e,n,s,a),Sh(e)):Mn(e,n,s,a),s=we?zo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xg(e,a,n);else if(e.tag===19)Xg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=kg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Sh(n)),Lu(n,!0,c,null,f,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&xu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Lu(n,!0,a,null,f,s);break;case"together":Lu(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=kg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Lu(n,!1,c,a,f,s)}return n.child}function Wg(e,n,a){var s=n.pendingProps;return Wa(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),nr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fu(e)))}function lM(e,n,a){switch(n.tag){case 3:H(n,n.stateNode.containerInfo),Wa(n,mn,e.memoizedState.cache),Ar();break;case 27:case 5:ge(n);break;case 4:H(n,n.stateNode.containerInfo);break;case 10:Wa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Yf(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Qa(n),n.flags|=128,null;s=Cr(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?Vg(e,n,a):(Qa(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return yh(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Cr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return yh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),qo(n,Nn.current),s)break;return null;case 22:return n.lanes=0,Ig(e,n,a,n.pendingProps);case 24:Wa(n,mn,e.memoizedState.cache)}return Ea(e,n,a)}function qg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Mh(e,a)&&(n.flags&128)===0)return vn=!1,lM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,we&&(n.flags&1048576)!==0&&E0(n,zo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=Ur(n.elementType),n.type=e,typeof e=="function")wf(e)?(s=Ir(e,s),n.tag=1,n=Hg(null,n,e,s,a)):(n.tag=0,n=mh(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===k){n.tag=11,n=Lg(null,n,e,s,a);break t}else if(c===st){n.tag=14,n=Og(null,n,e,s,a);break t}else if(c===Z){n.tag=10,n.type=e,n=Wg(null,n,a);break t}}throw n=Rt(e)||e,Error(r(306,n,""))}}return n;case 0:return mh(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ir(s,n.pendingProps),Hg(e,n,s,c,a);case 3:t:{if(H(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,Vf(e,n),Wo(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Wa(n,mn,s),s!==f.cache&&If(n,[mn],a,!0),ko(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Gg(e,n,s,a);break t}else if(s!==c){c=yi(Error(r(424)),n),Bo(c),n=Gg(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Ai(e.firstChild),bn=n,we=!0,Xa=null,Ti=!0,a=I0(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ar(),s===c){n=Ea(e,n,a);break t}Mn(e,n,s,a)}n=n.child}return n;case 26:return Ts(e,n),e===null?(a=v_(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(n.stateNode=Jv(n.type,n.pendingProps,ae.current,n)):n.memoizedState=v_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ge(n),e===null&&we&&(s=n.stateNode=d_(n.type,n.pendingProps,ae.current),bn=n,Ti=!0,c=nn,sr(n.type)?(_d=c,nn=Ai(s.firstChild)):nn=c),Mn(e,n,n.pendingProps.children,a),Ts(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((c=s=nn)&&(s=nE(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,bn=n,nn=Ai(s.firstChild),Ti=!1,c=!0):c=!1),c||ka(n)),ge(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,ud(c,f)?s=null:x!==null&&ud(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Jf(e,n,Qy,null,null,a),Vs._currentValue=c),Ts(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&we&&((e=a=nn)&&(a=iE(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,bn=n,nn=null,e=!0):e=!1),e||ka(n)),null;case 13:return Vg(e,n,a);case 4:return H(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Or(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return Lg(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ts(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return Wg(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,wr(n),c=wn(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return Og(e,n,n.type,n.pendingProps,a);case 15:return Pg(e,n,n.type,n.pendingProps,a);case 19:return yh(e,n,a);case 31:return sM(e,n,a);case 22:return Ig(e,n,a,n.pendingProps);case 24:return wr(n),s=wn(mn),e===null?(c=Ff(),c===null&&(c=$e,f=zf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Gf(n),Wa(n,mn,c)):((e.lanes&a)!==0&&(Vf(e,n),Wo(n,null,null,a),ko()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Wa(n,mn,s)):(s=f.cache,Wa(n,mn,s),s!==c.cache&&If(n,[mn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:we&&lu(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Ts(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ta(e){e.flags|=4}function Eh(e,n,a,s,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?y_(n,s):y_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Rv())e.flags|=8192;else throw Lr=mu,Hf}else e.flags&=-16777217}function Yg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(n))if(Rv())e.flags|=8192;else throw Lr=mu,Hf}function Ou(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Eo():536870912,e.lanes|=n,ws|=n)}function Qo(e,n){if(!we)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function uM(e,n,a){var s=n.pendingProps;switch(Uf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Sa(mn),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(vs(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Of())),an(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ta(n),f!==null?(an(n),Yg(n,f)):(an(n),Eh(n,c,null,s,a))):f?f!==e.memoizedState?(Ta(n),an(n),Yg(n,f)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ta(n),an(n),Eh(n,c,e,s,a)),null;case 27:if(U(n),a=ae.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}e=ee.current,vs(n)?b0(n):(e=d_(c,s,a),n.stateNode=e,Ta(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(U(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return an(n),n.subtreeFlags&=-33554433,null}if(f=ee.current,vs(n))b0(n);else{var x=ll(ae.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[A]=n,f[G]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Ln(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ta(n)}}return an(n),n.subtreeFlags&=-33554433,Eh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ta(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ae.current,vs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=bn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||qv(e.nodeValue,a)),e||ka(n,!0)}else e=ll(e).createTextNode(s),e[A]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=vs(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[A]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=Of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(r(558))}return an(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=vs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[A]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),c=!1}else c=Of(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ou(n,n.updateQueue),an(n),null);case 4:return Me(),e===null&&ad(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return Sa(n.type),an(n),null;case 19:if(Zf(n),s=n.memoizedState,s===null)return an(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)Qo(s,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xu(e),f!==null){for(n.flags|=128,Qo(s,!1),e=f.updateQueue,n.updateQueue=e,Ou(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)S0(a,e),a=a.sibling;return qo(n,Nn.current&1|2),we&&_a(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&Qt()>qu&&(n.flags|=128,c=!0,Qo(s,!1),n.lanes=4194304)}else{if(!c)if(e=xu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ou(n,e),Qo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!we)return an(n),null}else 2*Qt()-s.renderingStartTime>qu&&a!==536870912&&(n.flags|=128,c=!0,Qo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){e=s.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Qt(),e.sibling=null,f=Nn.current,f=c?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||we?qo(n,f):(a=f,At(Dn,n),At(Nn,a),zn===null&&(zn=n)),we&&_a(n,s.treeForkCount),e}return an(n),null;case 22:case 23:return ri(n),qf(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Ou(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&bt(Nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(mn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(r(156,n.tag))}function cM(e,n){switch(Uf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sa(mn),Me(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return U(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(r(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ri(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Zf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Me(),null;case 10:return Sa(n.type),null;case 22:case 23:return ri(n),qf(),e!==null&&bt(Nr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sa(mn),null;case 25:return null;default:return null}}function Zg(e,n){switch(Uf(n),n.tag){case 3:Sa(mn),Me();break;case 26:case 27:case 5:U(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Zf(n);break;case 10:Sa(n.type);break;case 22:case 23:ri(n),qf(),e!==null&&bt(Nr);break;case 24:Sa(mn)}}function jo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(R){Ze(n,n.return,R)}}function $a(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var I=a,et=R;try{et()}catch(ft){Ze(c,I,ft)}}}s=s.next}while(s!==f)}}catch(ft){Ze(n,n.return,ft)}}function Kg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{B0(n,a)}catch(s){Ze(e,e.return,s)}}}function Jg(e,n,a){a.props=Ir(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ze(e,n,s)}}function Ki(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,f=ma(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=i_(f)),s=c.ref;break;case 7:if(e.stateNode===null){var x=new ci(e);g(e.child,!1,tE,x,void 0,void 0),e.stateNode=x}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){Ze(e,n,R)}}function Un(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ze(e,n,c)}else a.current=null}function Pu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)u_(e.stateNode,n[a])}function Qg(e){for(var n=e.return;n!==null&&(bh(n)&&u_(e.stateNode,n.stateNode),!Th(n));)n=n.return}function $o(e){for(var n=e.return;n!==null&&(bh(n)&&eE(e.stateNode,n.stateNode),!Th(n));)n=n.return}function Th(e){return e.tag===5||e.tag===3||e.tag===27}function bh(e){return e&&e.tag===7&&e.stateNode!==null}function Ah(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Ze(e,e.return,c)}}function Rh(e,n,a){try{var s=e.stateNode;IM(s,e.type,a,n),s[G]=n}catch(c){Ze(e,e.return,c)}}function jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sr(e.type)||e.tag===4}function Ch(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wh(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Pu(e,s),Ce=!0;else if(c!==4&&(c===27&&(Pu(e,s),s=null,sr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(wh(e,n,a,s),e=e.sibling;e!==null;)wh(e,n,a,s),e=e.sibling}function Iu(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Pu(e,s),Ce=!0;else if(c!==4&&(c===27&&(Pu(e,s),s=null,sr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Iu(e,n,a,s),e=e.sibling;e!==null;)Iu(e,n,a,s),e=e.sibling}function $g(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Ln(n,s,a),n[A]=e,n[G]=a}catch(f){Ze(e,e.return,f)}}var zu=!1,si=null;function tv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(zu=!0)}var Ji=null;function ev(){var e=Ji;return Ji=null,e}var Qn=0;function bs(e,n,a,s,c){return Qn=0,nv(e.child,n,a,s,c)}function nv(e,n,a,s,c){for(var f=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(s!==null){var R=hd(x);s.push(R),R.view&&(f=!0)}else f||hd(x).view&&(f=!0);zu=!0,e_(x,Qn===0?n:n+"_"+Qn,a),Qn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||nv(e.child,n,a,s,c)&&(f=!0));e=e.sibling}return f}function Qi(e,n){for(;e!==null;)e.tag===5?n_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Qi(e.child,n)),e=e.sibling}function Bu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Bu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(bs(e,a,n,null,!1)||Qi(e.child,!1))}e=e.sibling}}function Dh(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=ma(s,a),f=ga(s.default,a.paired?s.share:s.enter);f!=="none"?bs(e,c,f,null,!1)?(Bu(e),a.paired||n||Ls(e,s.onEnter)):Qi(e.child,!1):Bu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Dh(e,n),e=e.sibling;else Bu(e)}function Nh(e){if(si!==null&&si.size!==0){var n=si;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var f=ga(a.default,a.share);if(f!=="none"&&(bs(e,s,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Ls(e,a.onShare)):Qi(e.child,!1)),n.delete(s),n.size===0)break}}}Nh(e)}e=e.sibling}}}function Uh(e){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode),s=si!==null?si.get(a):void 0,c=ga(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(bs(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,si.delete(a),Ls(e,n.onShare)):Ls(e,n.onExit):Qi(e.child,!1)),si!==null&&Nh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Uh(e),e=e.sibling;else si!==null&&Nh(e)}function iv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode);n=ga(n.default,n.update),e.flags&=-5,n!=="none"&&bs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&iv(e);e=e.sibling}}function Lh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Qi(e.child,!1))}Lh(e)}e=e.sibling}}function Fu(e){if(e.tag===30)e.stateNode.paired=null,Qi(e.child,!1),Lh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Fu(e),e=e.sibling;else Lh(e)}function av(e){for(e=e.child;e!==null;)e.tag===30?Qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&av(e),e=e.sibling}function Oh(e,n,a,s,c,f,x){for(var R=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(f!==null&&Qn<f.length){var et=f[Qn],ft=hd(I);(et.view||ft.view)&&(R=!0);var Et;if(Et=(e.flags&4)===0)if(ft.clip)Et=!0;else{Et=et.rect;var Q=ft.rect;Et=Et.y!==Q.y||Et.x!==Q.x||Et.height!==Q.height||Et.width!==Q.width}Et&&(e.flags|=4),ft.abs?ft=!et.abs:(et=et.rect,ft=ft.rect,ft=et.height!==ft.height||et.width!==ft.width),ft&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&e_(I,Qn===0?a:a+"_"+Qn,c),R&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(I,Qn===0?s:s+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Oh(e,n.child,a,s,c,f,x)&&(R=!0));n=n.sibling}return R}function rv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=ma(a,s),f=ga(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;Qn=0,c=Oh(s,R,c,c,f,x,!1),(e.flags&4)!==0&&c&&Ls(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&rv(e);e=e.sibling}}var An=!1,qe=!1,ji=!1,Ph=!1,sv=typeof WeakSet=="function"?WeakSet:Set,Rn=null,$i=!1,tl=!1,Hu=!1,Ih=!1;function fM(e,n,a){if(e=e.containerInfo,od=Xs,e=c0(e),Mf(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break t}var R=0,I=-1,et=-1,ft=0,Et=0,Q=e,ut=null;e:for(;;){for(var kt;Q!==s||f!==0&&Q.nodeType!==3||(I=R+f),Q!==x||c!==0&&Q.nodeType!==3||(et=R+c),Q.nodeType===3&&(R+=Q.nodeValue.length),(kt=Q.firstChild)!==null;)ut=Q,Q=kt;for(;;){if(Q===e)break e;if(ut===s&&++ft===f&&(I=R),ut===x&&++Et===c&&(et=R),(kt=Q.nextSibling)!==null)break;Q=ut,ut=Q.parentNode}Q=kt}s=I===-1||et===-1?null:{start:I,end:et}}else s=null}s=s||{start:0,end:0}}else s=null;for(ld={focusedElem:e,selectionRange:s},Xs=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(s=e.deletions,s!==null))for(f=0;f<s.length;f++)a&&Uh(s[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&tv(e),Gu(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Uh(s),Gu(a);continue}else if(s!==null&&s.memoizedState!==null){a&&tv(e),Gu(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Rn=s):(a&&iv(e),Gu(a))}}si=null}function Gu(e){for(;Rn!==null;){var n=Rn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var x=Ir(n.type,c);a=f.getSnapshotBeforeUpdate(x,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(R){Ze(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)md(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":md(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=ma(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=ga(c.default,c.update),c!=="none"&&bs(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Rn=s;break}Rn=n.return}}function ov(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),s&4&&jo(5,a);break;case 1:if(ta(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ze(a,a.return,x)}else{var c=Ir(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ze(a,a.return,x)}}s&64&&Kg(a),s&512&&Ki(a,a.return);break;case 3:if(ta(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{B0(e,n)}catch(x){Ze(a,a.return,x)}}break;case 27:n===null&&s&4&&$g(a);case 26:case 5:ta(e,a),n===null&&s&4&&Ah(a),s&512&&Ki(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),s&4&&fv(e,a);break;case 13:ta(e,a),s&4&&hv(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=EM.bind(null,a),aE(e,a))));break;case 22:if(s=a.memoizedState!==null||An,!s){var f=n!==null&&n.memoizedState!==null||qe;n=An,c=qe,An=s,(qe=f)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Ui(e,a,s)):ta(e,a),An=n,qe=c}break;case 30:ta(e,a),s&512&&Ki(a,a.return);break;case 7:s&512&&Ki(a,a.return);default:ta(e,a)}}function zh(e,n){for(e=e.child;e!==null;)lv(e,n),e=e.sibling}function lv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,x=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){Ze(e,e.return,I)}Bh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ce=!0}catch(I){Ze(e,e.return,I)}break;case 18:try{var R=e.stateNode;n?t_(R,!0):t_(e.stateNode,!1)}catch(I){Ze(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&zh(e,n);break;default:zh(e,n)}}function Bh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,s=n;switch(a.tag){case 4:lv(a,s);break t;case 22:a.memoizedState===null&&Bh(a,s);break t;default:Bh(a,s)}}e=e.sibling}}function uv(e){var n=e.alternate;n!==null&&(e.alternate=null,uv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&se(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,jn=!1;function Di(e,n,a){for(a=a.child;a!==null;)cv(e,n,a),a=a.sibling}function cv(e,n,a){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Ot,a)}catch{}switch(a.tag){case 26:qe||Un(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qe&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qe||Un(a,n),$o(a);var s=sn,c=jn;sr(a.type)&&(sn=a.stateNode,jn=!1),Di(e,n,a),p_(a.stateNode,a.type,a.memoizedProps),sn=s,jn=c;break;case 5:qe||Un(a,n),$o(a);case 6:if(a.tag===6&&$o(a),s=sn,c=jn,sn=null,Di(e,n,a),sn=s,jn=c,sn!==null)if(jn)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),Ce=!0}catch(f){Ze(a,n,f)}else try{sn.removeChild(a.stateNode),Ce=!0}catch(f){Ze(a,n,f)}break;case 18:sn!==null&&(jn?(e=sn,$v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ks(e)):$v(sn,a.stateNode));break;case 4:s=sn,c=jn,sn=a.stateNode.containerInfo,jn=!0,Di(e,n,a),sn=s,jn=c;break;case 0:case 11:case 14:case 15:$a(2,a,n),qe||$a(4,a,n),Di(e,n,a);break;case 1:qe||(Un(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Jg(a,n,s)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:qe=(s=qe)||a.memoizedState!==null,Di(e,n,a),qe=s;break;case 30:Un(a,n),Di(e,n,a);break;case 7:qe||Un(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function fv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ks(e)}catch(a){Ze(n,n.return,a)}}}function hv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ks(e)}catch(a){Ze(n,n.return,a)}}function hM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new sv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new sv),n;default:throw Error(r(435,e.tag))}}function Vu(e,n){var a=hM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=TM.bind(null,e,s);s.then(c,c)}})}function Wn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],x=e,R=n,I=R;t:for(;I!==null;){switch(I.tag){case 27:if(sr(I.type)){sn=I.stateNode,jn=!1;break t}break;case 5:sn=I.stateNode,jn=!1;break t;case 3:case 4:sn=I.stateNode.containerInfo,jn=!0;break t}I=I.return}if(sn===null)throw Error(r(160));cv(x,R,f),sn=null,jn=!1,x=f.alternate,x!==null&&(x.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)dv(n,e,a),n=n.sibling}var Ni=null;function dv(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var x=s[f];x.ref.impl=x.nextImpl}Wn(n,e,a),qn(e),c&4&&($a(3,e,e.return),jo(3,e),$a(5,e,e.return));break;case 1:Wn(n,e,a),qn(e),c&512&&(qe||s===null||Un(s,s.return)),c&64&&An&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ni,Wn(n,e,a),qn(e),c&512&&(qe||s===null||Un(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(An)e.stateNode=Jv(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[Xt]||s[A]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),Ln(s,n,a),s[A]=e,Re(s),n=s;break t;case"link":if(f=S_("link","href",c).get(n+(a.href||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(x,1);break e}}s=c.createElement(n),Ln(s,n,a),c.head.appendChild(s);break;case"meta":if(f=S_("meta","content",c).get(n+(a.content||""))){for(x=0;x<f.length;x++)if(s=f[x],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(x,1);break e}}s=c.createElement(n),Ln(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[A]=e,Re(s),n=s}e.stateNode=n}else An||Md(f,e.type,e.stateNode);else e.stateNode=x_(f,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||qe||n.parentNode.removeChild(n)):c.count--,a===null?An||Md(f,e.type,e.stateNode):x_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Rh(e,e.memoizedProps,s.memoizedProps);break;case 27:Wn(n,e,a),qn(e),c&512&&(qe||s===null||Un(s,s.return)),s!==null&&c&4&&Rh(e,e.memoizedProps,s.memoizedProps);break;case 5:if(f=ji,ji=!1,Wn(n,e,a),ji=f,qn(e),c&512&&(qe||s===null||Un(s,s.return)),e.flags&32){n=e.stateNode;try{os(n,""),Ce=!0}catch(ft){Ze(e,e.return,ft)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Rh(e,n,s!==null?s.memoizedProps:n)),c&1024&&(Ph=!0);break;case 6:if(Wn(n,e,a),qn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ce=!0}catch(ft){Ze(e,e.return,ft)}}break;case 3:if(Ce=!1,ic=null,f=Ni,Ni=ul(n.containerInfo),Wn(n,e,a),Ni=f,qn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{ks(n.containerInfo)}catch(ft){Ze(e,e.return,ft)}Ph&&(Ph=!1,pv(e)),Ce=!1;break;case 4:c=ji,ji=An,s=Ve(),f=Ni,Ni=ul(e.stateNode.containerInfo),Wn(n,e,a),qn(e),Ni=f,Ce&&tl&&(Hu=!0),Ce=s,ji=c;break;case 12:Wn(n,e,a),qn(e);break;case 31:Wn(n,e,a),qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vu(e,n)));break;case 13:Wn(n,e,a),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Wu=Qt()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vu(e,n)));break;case 22:f=e.memoizedState!==null,x=s!==null&&s.memoizedState!==null;var R=An,I=qe,et=ji;An=R||f,ji=et||f,qe=I||x,Wn(n,e,a),qe=I,ji=et,An=R,qn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||x||An||qe||(n=x||qe,a=An,s=qe,An=f||An,qe=n,tr(e,2),An=a,qe=s),!f&&ji||zh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Vu(e,a))));break;case 19:Wn(n,e,a),qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Vu(e,n)));break;case 30:c&512&&(qe||s===null||Un(s,s.return)),c=Ve(),f=tl,x=(a&335544064)===a,R=e.memoizedProps,tl=x&&ga(R.default,R.update)!=="none",Wn(n,e,a),qn(e),x&&s!==null&&Ce&&(e.flags|=4),tl=f,Ce=c;break;case 21:break;case 7:c&512&&(qe||s===null||Un(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Wn(n,e,a),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(jg(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(bh(c)){var f=c.stateNode;s===null?s=[f]:s.push(f)}if(Th(c))break;c=c.return}var x=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,I=Ch(e);Iu(e,I,R,x);break;case 5:var et=a.stateNode;a.flags&32&&(os(et,""),a.flags&=-33);var ft=Ch(e);Iu(e,ft,et,x);break;case 3:case 4:var Et=a.stateNode.containerInfo,Q=Ch(e);wh(e,Q,Et,x);break;default:throw Error(r(161))}}catch(ut){Ze(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;pv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xs=!0,n.reset(),Xs=!1),e=e.sibling}}function As(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)mv(n,e),n=n.sibling;else rv(n)}function mv(e,n){var a=e.alternate;if(a===null)Dh(e,!1);else switch(e.tag){case 3:if(Ih=$i=!1,ev(),As(n,e),!$i&&!Hu){if(e=Ji,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];n_(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ih=!0}Ji=null;break;case 5:As(n,e);break;case 4:s=$i,$i=!1,As(n,e),$i&&(Hu=!0),$i=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Dh(e,!1):As(n,e));break;case 30:s=$i,c=ev(),$i=!1,As(n,e),$i&&(e.flags|=4);var f=e.memoizedProps,x=e.stateNode;n=ma(f,x),x=ma(a.memoizedProps,x);var R=ga(f.default,f.update);R==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,Qn=0,n=Oh(e,a,n,x,R,f,!0),Qn!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Ls(e,e.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),$i=(e.flags&32)!==0?!0:s;break;default:As(n,e)}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ov(e,n.alternate,n),n=n.sibling}function tr(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),tr(a,s);break;case 1:Un(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Jg(a,a.return,c),tr(a,s);break;case 27:(s&2)!==0&&p_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||$o(a),tr(a,s);break;case 6:$o(a);break;case 26:Un(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||qe||c.parentNode.removeChild(c),tr(a,s);break;case 22:a.memoizedState===null&&tr(a,s);break;case 30:Un(a,a.return),tr(a,s);break;case 7:Un(a,a.return);default:tr(a,s)}e=e.sibling}}function Ui(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags,R=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Ui(c,f,a),jo(4,f);break;case 1:if(Ui(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ft){Ze(s,s.return,ft)}if(s=f,c=s.updateQueue,c!==null){var I=s.stateNode;try{var et=c.shared.hiddenCallbacks;if(et!==null)for(c.shared.hiddenCallbacks=null,c=0;c<et.length;c++)z0(et[c],I)}catch(ft){Ze(s,s.return,ft)}}R&&x&64&&Kg(f),Ki(f,f.return);break;case 27:(a&2)!==0&&$g(f);case 5:f.tag!==5&&f.tag!==27||Qg(f),Ui(c,f,a),R&&s===null&&x&4&&Ah(f),Ki(f,f.return);break;case 6:Qg(f);break;case 26:I=f.stateNode,f.memoizedState!==null||I===null||An||Md(ul(I.ownerDocument),f.type,I),Ui(c,f,a),R&&s===null&&x&4&&Ah(f),Ki(f,f.return);break;case 12:Ui(c,f,a);break;case 31:Ui(c,f,a),R&&x&4&&fv(c,f);break;case 13:Ui(c,f,a),R&&x&4&&hv(c,f);break;case 22:f.memoizedState===null&&Ui(c,f,a),Ki(f,f.return);break;case 30:Ui(c,f,a),Ki(f,f.return);break;case 7:Ki(f,f.return);default:Ui(c,f,a)}n=n.sibling}}function Fh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fo(a))}function Hh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fo(e))}function bi(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)gv(e,n,a,s),n=n.sibling;else c&&av(n)}function gv(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Fu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,s),f&2048&&jo(9,n);break;case 1:bi(e,n,a,s);break;case 3:bi(e,n,a,s),c&&Ih&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Fo(f)));break;case 12:if(f&2048){bi(e,n,a,s),f=n.stateNode;try{var x=n.memoizedProps,R=x.id,I=x.onPostCommit;typeof I=="function"&&I(R,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){Ze(n,n.return,et)}}else bi(e,n,a,s);break;case 31:bi(e,n,a,s);break;case 13:bi(e,n,a,s);break;case 23:break;case 22:x=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Fu(R),x._visibility&2?bi(e,n,a,s):el(e,n)):(c&&R!==null&&R.memoizedState!==null&&Fu(n),x._visibility&2?bi(e,n,a,s):(x._visibility|=2,Rs(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&Fh(R,n);break;case 24:bi(e,n,a,s),f&2048&&Hh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(Qi(f.child,!0),Qi(n.child,!0))),bi(e,n,a,s);break;default:bi(e,n,a,s)}}function Rs(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,R=a,I=s,et=x.flags;switch(x.tag){case 0:case 11:case 15:Rs(f,x,R,I,c),jo(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?Rs(f,x,R,I,c):el(f,x):(ft._visibility|=2,Rs(f,x,R,I,c)),c&&et&2048&&Fh(x.alternate,x);break;case 24:Rs(f,x,R,I,c),c&&et&2048&&Hh(x.alternate,x);break;default:Rs(f,x,R,I,c)}n=n.sibling}}function el(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:el(a,s),c&2048&&Fh(s.alternate,s);break;case 24:el(a,s),c&2048&&Hh(s.alternate,s);break;default:el(a,s)}n=n.sibling}}var zr=8192;function Br(e,n,a){if(e.subtreeFlags&zr)for(e=e.child;e!==null;)vv(e,n,a),e=e.sibling}function vv(e,n,a){switch(e.tag){case 26:Br(e,n,a),e.flags&zr&&(e.memoizedState!==null?_E(a,Ni,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&T_(a,e)));break;case 5:Br(e,n,a),e.flags&zr&&(e=e.stateNode,(n&335544128)===n&&T_(a,e));break;case 3:case 4:var s=Ni;Ni=ul(e.stateNode.containerInfo),Br(e,n,a),Ni=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=zr,zr=16777216,Br(e,n,a),zr=s):Br(e,n,a));break;case 30:if((e.flags&zr)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,si===null&&(si=new Map),si.set(s,c)}Br(e,n,a);break;default:Br(e,n,a)}}function _v(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,Sv(s,e)}_v(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xv(e),e=e.sibling}function xv(e){switch(e.tag){case 0:case 11:case 15:nl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:nl(e);break;case 12:nl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xu(e)):nl(e);break;default:nl(e)}}function Xu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Rn=s,Sv(s,e)}_v(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Xu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xu(n));break;default:Xu(n)}e=e.sibling}}function Sv(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Fo(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Rn=s;else t:for(a=e;Rn!==null;){s=Rn;var c=s.sibling,f=s.return;if(uv(s),s===a){Rn=null;break t}if(c!==null){c.return=f,Rn=c;break t}Rn=f}}}var dM={getCacheForType:function(e){var n=wn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(mn).controller.signal}},pM=typeof WeakMap=="function"?WeakMap:Map,Xe=0,$e=null,Ue=null,Pe=0,Ye=0,oi=null,er=!1,Cs=!1,Gh=!1,ba=0,dn=0,nr=0,Fr=0,ku=0,li=0,ws=0,il=null,$n=null,Vh=!1,Wu=0,yv=0,qu=1/0,Yu=null,ir=null,on=0,Li=null,Hr=null,ea=0,Xh=0,kh=null,Mv=null,Ds=null,Ns=null,Us=null,al=0,Zu=null;function ui(){return(Xe&2)!==0&&Pe!==0?Pe&-Pe:_t.T!==null?td():ql()}function Ev(){if(li===0)if((Pe&536870912)===0||we){var e=xr;xr<<=1,(xr&3932160)===0&&(xr=262144),li=e}else li=536870912;return e=Dn.current,e!==null&&(e.flags|=32),li}function Ls(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=i_(ma(e.memoizedProps,a))),Ns===null&&(Ns=[]),Ns.push(n.bind(null,s))}}function ti(e,n,a){(e===$e&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Os(e,0),ar(e,Pe,li,!1)),ki(e,a),((Xe&2)===0||e!==$e)&&(e===$e&&((Xe&2)===0&&(Fr|=a),dn===4&&ar(e,Pe,li,!1)),na(e))}function Tv(e,n,a){if((Xe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Fa(e,n),c=s?vM(e,n):qh(e,n,!0),f=s;do{if(c===0){Cs&&!s&&ar(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mM(a)){c=qh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var R=e;c=il;var I=R.current.memoizedState.isDehydrated;if(I&&(Os(R,x).flags|=256),x=qh(R,x,!1),x!==2&&x!==6){if(Gh&&!I){R.errorRecoveryDisabledLanes|=f,Fr|=f,c=4;break t}f=$n,$n=c,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Os(e,0),ar(e,n,0,!0);break}t:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ar(s,n,li,!er);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Wu+300-Qt(),10<c)){if(ar(s,n,li,!er),Sr(s,0,!0)!==0)break t;ea=n,s.timeoutHandle=fd(bv.bind(null,s,a,$n,Yu,Vh,n,li,Fr,ws,er,f,"Throttled",-0,0),c);break t}bv(s,a,$n,Yu,Vh,n,li,Fr,ws,er,f,null,-0,0)}}break}while(!0);na(e)}function bv(e,n,a,s,c,f,x,R,I,et,ft,Et,Q,ut){e.timeoutHandle=-1;var kt=n.subtreeFlags,oe=(f&335544064)===f;if(Et=null,(oe||kt&8192||(kt&16785408)===16785408)&&(Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},si=null,vv(n,f,Et),oe&&(kt=Et,oe=e.containerInfo,oe=(oe.nodeType===9?oe:oe.ownerDocument).__reactViewTransition,oe!=null&&(kt.count++,kt.waitingForViewTransition=!0,kt=hl.bind(kt),oe.finished.then(kt,kt))),kt=(f&62914560)===f?Wu-Qt():(f&4194048)===f?yv-Qt():0,kt=xE(Et,kt),kt!==null)){ea=f,e.cancelPendingCommit=kt(Lv.bind(null,e,n,f,a,s,c,x,R,I,et,ft,Et,null,Q,ut)),ar(e,f,x,!et);return}Lv(e,n,f,a,s,c,x,R,I,et,ft,Et)}function mM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!ai(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ar(e,n,a,s){n=Xi(e,n),n&=~ku,n&=~Fr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-ve(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&yr(e,a,n)}function Ku(){return(Xe&6)===0?(rl(0),!1):!0}function Wh(){if(Ue!==null){if(Ye===0)var e=Ue.return;else e=Ue,xa=Rr=null,$f(e),Ss=null,Vo=0,e=Ue;for(;e!==null;)Zg(e.alternate,e),e=e.return;Ue=null}}function Os(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,FM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Wh(),$e=e,Ue=a=va(e.current,null),Pe=n,Ye=0,oi=null,er=!1,Cs=Fa(e,n),Gh=!1,ws=li=ku=Fr=nr=dn=0,$n=il=null,Vh=!1,ba=Xi(e,n),iu(),a}function Av(e,n){Te=null,_t.H=Cu,n===xs||n===pu?(n=L0(),Ye=3):n===Hf?(n=L0(),Ye=4):Ye=n===ph?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Ue===null&&(dn=1,wu(e,yi(n,e.current)))}function Rv(){var e=Dn.current;return e===null?!0:(Pe&4194048)===Pe?zn===null:(Pe&62914560)===Pe||(Pe&536870912)!==0?e===zn:!1}function Cv(){var e=_t.H;return _t.H=Cu,e===null?Cu:e}function wv(){var e=_t.A;return _t.A=dM,e}function Ju(){dn=4,er||(Pe&4194048)!==Pe&&Dn.current!==null||(Cs=!0),(nr&134217727)===0&&(Fr&134217727)===0||$e===null||ar($e,Pe,li,!1)}function qh(e,n,a){var s=Xe;Xe|=2;var c=Cv(),f=wv();($e!==e||Pe!==n)&&(Yu=null,Os(e,n)),n=!1;var x=dn;t:do try{if(Ye!==0&&Ue!==null){var R=Ue,I=oi;switch(Ye){case 8:Wh(),x=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(n=!0);var et=Ye;if(Ye=0,oi=null,Ps(e,R,I,et),a&&Cs){x=0;break t}break;default:et=Ye,Ye=0,oi=null,Ps(e,R,I,et)}}gM(),x=dn;break}catch(ft){Av(e,ft)}while(!0);return n&&e.shellSuspendCounter++,xa=Rr=null,Xe=s,_t.H=c,_t.A=f,Ue===null&&($e=null,Pe=0,iu()),x}function gM(){for(;Ue!==null;)Dv(Ue)}function vM(e,n){var a=Xe;Xe|=2;var s=Cv(),c=wv();$e!==e||Pe!==n?(Yu=null,qu=Qt()+500,Os(e,n)):Cs=Fa(e,n);t:do try{if(Ye!==0&&Ue!==null){n=Ue;var f=oi;e:switch(Ye){case 1:Ye=0,oi=null,Ps(e,n,f,1);break;case 2:case 9:if(N0(f)){Ye=0,oi=null,Nv(n);break}n=function(){Ye!==2&&Ye!==9||$e!==e||(Ye=7),na(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:N0(f)?(Ye=0,oi=null,Nv(n)):(Ye=0,oi=null,Ps(e,n,f,7));break;case 5:var x=null;switch(Ue.tag){case 26:x=Ue.memoizedState;case 5:case 27:var R=Ue;if(x?M_(x):R.stateNode.complete){Ye=0,oi=null;var I=R.sibling;if(I!==null)Ue=I;else{var et=R.return;et!==null?(Ue=et,Qu(et)):Ue=null}break e}}Ye=0,oi=null,Ps(e,n,f,5);break;case 6:Ye=0,oi=null,Ps(e,n,f,6);break;case 8:Wh(),dn=6;break t;default:throw Error(r(462))}}_M();break}catch(ft){Av(e,ft)}while(!0);return xa=Rr=null,_t.H=s,_t.A=c,Xe=a,Ue!==null?0:($e=null,Pe=0,iu(),dn)}function _M(){for(;Ue!==null&&!Vt();)Dv(Ue)}function Dv(e){var n=qg(e.alternate,e,ba);e.memoizedProps=e.pendingProps,n===null?Qu(e):Ue=n}function Nv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Fg(a,n,n.pendingProps,n.type,void 0,Pe);break;case 11:n=Fg(a,n,n.pendingProps,n.type.render,n.ref,Pe);break;case 5:$f(n);var s=n;s===bn&&(we?(uu(s),s.tag===5&&s.stateNode!=null&&(nn=s.stateNode)):(uu(s),we=!0));default:Zg(a,n),n=Ue=S0(n,ba),n=qg(a,n,ba)}e.memoizedProps=e.pendingProps,n===null?Qu(e):Ue=n}function Ps(e,n,a,s){xa=Rr=null,$f(n),Ss=null,Vo=0;var c=n.return;try{if(rM(e,c,n,a,Pe)){dn=1,wu(e,yi(a,e.current)),Ue=null;return}}catch(f){if(c!==null)throw Ue=c,f;dn=1,wu(e,yi(a,e.current)),Ue=null;return}n.flags&32768?(we||s===1?e=!0:Cs||(Pe&536870912)!==0?e=!1:(er=e=!0,(s===2||s===9||s===3||s===6)&&(s=Dn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Uv(n,e)):Qu(n)}function Qu(e){var n=e;do{if((n.flags&32768)!==0){Uv(n,er);return}e=n.return;var a=uM(n.alternate,n,ba);if(a!==null){Ue=a;return}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=e}while(n!==null);dn===0&&(dn=5)}function Uv(e,n){do{var a=cM(e.alternate,e);if(a!==null){a.flags&=32767,Ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ue=e;return}Ue=e=a}while(e!==null);dn=6,Ue=null}function Lv(e,n,a,s,c,f,x,R,I,et,ft,Et){e.cancelPendingCommit=null;do ju();while(on!==0);if((Xe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===$e&&(Ue=$e=null,Pe=0),Hr=n,Li=e,ea=a,kh=c,Mv=s,xM(e,n,a,x,R,I,Et)}}function xM(e,n,a,s,c,f,x){var R=n.lanes|n.childLanes;if(Xh=R,R|=Rf,Wl(e,a,R,s,c,f),Ns=null,(a&335544064)===a?(Us=Yy(e),s=10262):(Us=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,bM(Ft,function(){return Jh(),null})):(e.callbackNode=null,e.callbackPriority=0),zu=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=_t.T,_t.T=null,c=Dt.p,Dt.p=2,f=Xe,Xe|=4;try{fM(e,n,a)}finally{Xe=f,Dt.p=c,_t.T=s}}on=1,zu?Ds=WM(x,e.containerInfo,Us,Yh,Zh,yM,Kh,Jh,SM):(Yh(),Zh(),Kh())}function SM(e){if(on!==0){var n=Li.onRecoverableError;n(e,{componentStack:null})}}function yM(){on===3&&(on=0,mv(Hr,Li),on=4)}function Yh(){if(on===1){on=0;var e=Li,n=Hr,a=ea,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=_t.T,_t.T=null;var c=Dt.p;Dt.p=2;var f=Xe;Xe|=4;try{tl=Hu=!1,dv(n,e,a),a=ld;var x=c0(e.containerInfo),R=a.focusedElem,I=a.selectionRange;if(x!==R&&R&&R.ownerDocument&&u0(R.ownerDocument.documentElement,R)){if(I!==null&&Mf(R)){var et=I.start,ft=I.end;if(ft===void 0&&(ft=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(ft,R.value.length);else{var Et=R.ownerDocument||document,Q=Et&&Et.defaultView||window;if(Q.getSelection){var ut=Q.getSelection(),kt=R.textContent.length,oe=Math.min(I.start,kt),be=I.end===void 0?oe:Math.min(I.end,kt);!ut.extend&&oe>be&&(x=be,be=oe,oe=x);var tt=l0(R,oe),X=l0(R,be);if(tt&&X&&(ut.rangeCount!==1||ut.anchorNode!==tt.node||ut.anchorOffset!==tt.offset||ut.focusNode!==X.node||ut.focusOffset!==X.offset)){var at=Et.createRange();at.setStart(tt.node,tt.offset),ut.removeAllRanges(),oe>be?(ut.addRange(at),ut.extend(X.node,X.offset)):(at.setEnd(X.node,X.offset),ut.addRange(at))}}}}for(Et=[],ut=R;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Et.length;R++){var yt=Et[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}Xs=!!od,ld=od=null}finally{Xe=f,Dt.p=c,_t.T=s}}e.current=n,on=2}}function Zh(){if(on===2){on=0;var e=Li,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var s=Dt.p;Dt.p=2;var c=Xe;Xe|=4;try{ov(e,n.alternate,n)}finally{Xe=c,Dt.p=s,_t.T=a}}on=3}}function Kh(){if(on===4||on===3){on=0;var e=Ds;Ds=null,It();var n=Li,a=Hr,s=ea,c=Mv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?on=5:(on=0,Hr=Li=null,Ov(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ir=null),Ro(s),a=a.stateNode,Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Ot,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=_t.T,f=Dt.p,Dt.p=2,_t.T=null;try{for(var x=n.onRecoverableError,R=0;R<c.length;R++){var I=c[R];x(I.value,{componentStack:I.stack})}}finally{_t.T=a,Dt.p=f}}if(c=Ns,x=Us,Us=null,c!==null&&(Ns=null,x===null&&(x=[]),e!==null))for(I=0;I<c.length;I++)a=(0,c[I])(x),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&ju(),na(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Zu?al++:(al=0,Zu=n):(al=0,Zu=null),rl(0)}}function Ov(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fo(n)))}function ju(){return Ds!==null&&(Ds.skipTransition(),Ds=null),Yh(),Zh(),Kh(),Jh()}function Jh(){if(on!==5)return!1;var e=Li,n=Xh;Xh=0;var a=Ro(ea),s=_t.T,c=Dt.p;try{Dt.p=32>a?32:a,_t.T=null,a=kh,kh=null;var f=Li,x=ea;if(on=0,Hr=Li=null,ea=0,(Xe&6)!==0)throw Error(r(331));var R=Xe;if(Xe|=4,xv(f.current),gv(f,f.current,x,a),Xe=R,rl(0,!1),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Ot,f)}catch{}return!0}finally{Dt.p=c,_t.T=s,Ov(e,n)}}function Pv(e,n,a){n=yi(a,n),n=dh(e.stateNode,n,2),e=Ka(e,n,2),e!==null&&(ki(e,2),na(e))}function Ze(e,n,a){if(e.tag===3)Pv(e,e,a);else for(;n!==null;){if(n.tag===3){Pv(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ir===null||!ir.has(s))){e=yi(a,e),a=Ng(2),s=Ka(n,a,2),s!==null&&(Ug(a,s,n,e),ki(s,2),na(s));break}}n=n.return}}function Qh(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new pM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gh=!0,c.add(a),e=MM.bind(null,e,n,a),n.then(e,e))}function MM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,$e===e&&(Pe&a)===a&&((dn===4||dn===3&&(Pe&62914560)===Pe&&300>Qt()-Wu)&&(Xe&2)===0?Os(e,0):ku|=a,ws===Pe&&(ws=0)),na(e)}function Iv(e,n){n===0&&(n=Eo()),e=Tr(e,n),e!==null&&(ki(e,n),na(e))}function EM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Iv(e,a)}function TM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Iv(e,a)}function bM(e,n){return zt(e,n)}var Is=null,zs=null,jh=!1,$u=!1,$h=!1,rr=0;function na(e){e!==zs&&e.next===null&&(zs===null?Is=zs=e:zs=zs.next=e),$u=!0,jh||(jh=!0,RM())}function rl(e,n){if(!$h&&$u){$h=!0;do for(var a=!1,s=Is;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,R=s.pingedLanes;f=(1<<31-ve(42|e)+1)-1,f&=c&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Hv(s,f))}else f=Pe,f=Sr(s,s===$e?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Fa(s,f)||(a=!0,Hv(s,f));s=s.next}while(a);$h=!1}}function AM(){zv()}function zv(){$u=jh=!1;var e=0;rr!==0&&BM()&&(e=rr);for(var n=Qt(),a=null,s=Is;s!==null;){var c=s.next,f=Bv(s,n);f===0?(s.next=null,a===null?Is=c:a.next=c,c===null&&(zs=a)):(a=s,(e!==0||(f&3)!==0)&&($u=!0)),s=c}on!==0&&on!==5||rl(e),rr!==0&&(rr=0)}function Bv(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-ve(f),R=1<<x,I=c[x];I===-1?((R&a)===0||(R&s)!==0)&&(c[x]=Mo(R,n)):I<=n&&(e.expiredLanes|=R),f&=~R}if(n=$e,a=Pe,a=Sr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&re(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&re(s),Ro(a)){case 2:case 8:a=Y;break;case 32:a=Ft;break;case 268435456:a=Gt;break;default:a=Ft}return s=Fv.bind(null,e),a=zt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&re(s),e.callbackPriority=2,e.callbackNode=null,2}function Fv(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ju()&&e.callbackNode!==a)return null;var s=Pe;return s=Sr(e,e===$e?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Tv(e,s,n),Bv(e,Qt()),e.callbackNode!=null&&e.callbackNode===a?Fv.bind(null,e):null)}function Hv(e,n){if(ju())return null;Tv(e,n,!0)}function RM(){HM(function(){(Xe&6)!==0?zt(de,AM):zv()})}function td(){if(rr===0){var e=Dr;e===0&&(e=as,as<<=1,(as&261888)===0&&(as=256)),rr=e}return rr}function Gv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(e)}function CM(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Gv((c[G]||null).action),x=s.submitter;x&&(n=(n=x[G]||null)?Gv(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new $l("action","action",null,s,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(rr!==0){var I=new FormData(c,x);lh(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(R.preventDefault(),I=new FormData(c,x),lh(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var ed=0;ed<Af.length;ed++){var nd=Af[ed],wM=nd.toLowerCase(),DM=nd[0].toUpperCase()+nd.slice(1);wi(wM,"on"+DM)}wi(d0,"onAnimationEnd"),wi(p0,"onAnimationIteration"),wi(m0,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(Fy,"onTransitionRun"),wi(Hy,"onTransitionStart"),wi(Gy,"onTransitionCancel"),wi(g0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function Vv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var R=s[x],I=R.instance,et=R.currentTarget;if(R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=et;try{f(c)}catch(ft){nu(ft)}c.currentTarget=null,f=I}else for(x=0;x<s.length;x++){if(R=s[x],I=R.instance,et=R.currentTarget,R=R.listener,I!==f&&c.isPropagationStopped())break t;f=R,c.currentTarget=et;try{f(c)}catch(ft){nu(ft)}c.currentTarget=null,f=I}}}}function Le(e,n){var a=n[ot];a===void 0&&(a=n[ot]=new Set);var s=e+"__bubble";a.has(s)||(Xv(n,e,2,!1),a.add(s))}function id(e,n,a){var s=0;n&&(s|=4),Xv(a,e,s,n)}var tc="_reactListening"+Math.random().toString(36).slice(2);function ad(e){if(!e[tc]){e[tc]=!0,We.forEach(function(a){a!=="selectionchange"&&(NM.has(a)||id(a,!1,e),id(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tc]||(n[tc]=!0,id("selectionchange",!1,n))}}function Xv(e,n,a,s){switch(U_(n)){case 2:var c=EE;break;case 8:c=TE;break;default:c=Td}a=c.bind(null,n,a,e),c=void 0,!hf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function rd(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var R=s.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=s.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=pe(R),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){s=f=x;continue t}R=R.parentNode}}s=s.return}Xm(function(){var et=f,ft=cf(a),Et=[];t:{var Q=v0.get(e);if(Q!==void 0){var ut=$l,kt=e;switch(e){case"keypress":if(Ql(a)===0)break t;case"keydown":case"keyup":ut=my;break;case"focusin":kt="focus",ut=gf;break;case"focusout":kt="blur",ut=gf;break;case"beforeblur":case"afterblur":ut=gf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Sy;break;case d0:case p0:case m0:ut=sy;break;case g0:ut=My;break;case"scroll":case"scrollend":ut=ey;break;case"wheel":ut=Ty;break;case"copy":case"cut":case"paste":ut=ly;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Zm;break;case"submit":ut=_y;break;case"toggle":case"beforetoggle":ut=Ay}var oe=(n&4)!==0,be=!oe&&(e==="scroll"||e==="scrollend"),tt=oe?Q!==null?Q+"Capture":null:Q;oe=[];for(var X=et,at;X!==null;){var yt=X;if(at=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||at===null||tt===null||(yt=Co(X,tt),yt!=null&&oe.push(ol(X,yt,at))),be)break;X=X.return}0<oe.length&&(Q=new ut(Q,kt,null,a,ft),Et.push({event:Q,listeners:oe}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",ut&&a!==uf&&(kt=a.relatedTarget||a.fromElement)&&(pe(kt)||kt[dt]))break t;(Q||ut)&&(kt=ft.window===ft?ft:(ut=ft.ownerDocument)?ut.defaultView||ut.parentWindow:window,Q?(ut=a.relatedTarget||a.toElement,Q=et,ut=ut?pe(ut):null,ut!==null&&(be=u(ut),oe=ut.tag,ut!==be||oe!==5&&oe!==27&&oe!==6)&&(ut=null)):(Q=null,ut=et),Q!==ut&&(oe=qm,yt="onMouseLeave",tt="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Zm,yt="onPointerLeave",tt="onPointerEnter",X="pointer"),be=Q==null?kt:$t(Q),at=ut==null?kt:$t(ut),kt=new oe(yt,X+"leave",Q,a,ft),kt.target=be,kt.relatedTarget=at,yt=null,pe(ft)===et&&(oe=new oe(tt,X+"enter",ut,a,ft),oe.target=at,oe.relatedTarget=be,yt=oe),be=yt,oe=Q&&ut?L(Q,ut,UM):null,Q!==null&&kv(Et,kt,Q,oe,!1),ut!==null&&be!==null&&kv(Et,be,ut,oe,!0)))}t:{if(Q=et?$t(et):window,ut=Q.nodeName&&Q.nodeName.toLowerCase(),ut==="select"||ut==="input"&&Q.type==="file")var te=n0;else if(t0(Q))if(i0)te=Iy;else{te=Oy;var Ie=Ly}else ut=Q.nodeName,!ut||ut.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?et&&lf(et.elementType)&&(te=n0):te=Py;if(te&&(te=te(e,et))){e0(Et,te,a,ft);break t}Ie&&Ie(e,Q,et)}switch(Ie=et?$t(et):window,e){case"focusin":(t0(Ie)||Ie.contentEditable==="true")&&(fs=Ie,Ef=et,Io=null);break;case"focusout":Io=Ef=fs=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,f0(Et,a,ft);break;case"selectionchange":if(By)break;case"keydown":case"keyup":f0(Et,a,ft)}var ue;if(_f)t:{switch(e){case"compositionstart":var he="onCompositionStart";break t;case"compositionend":he="onCompositionEnd";break t;case"compositionupdate":he="onCompositionUpdate";break t}he=void 0}else cs?jm(e,a)&&(he="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(he="onCompositionStart");he&&(Km&&a.locale!=="ko"&&(cs||he!=="onCompositionStart"?he==="onCompositionEnd"&&cs&&(ue=km()):(Ha=ft,df="value"in Ha?Ha.value:Ha.textContent,cs=!0)),Ie=ec(et,he),0<Ie.length&&(he=new Ym(he,e,null,a,ft),Et.push({event:he,listeners:Ie}),ue?he.data=ue:(ue=$m(a),ue!==null&&(he.data=ue)))),(ue=Cy?wy(e,a):Dy(e,a))&&(he=ec(et,"onBeforeInput"),0<he.length&&(Ie=new Ym("onBeforeInput","beforeinput",null,a,ft),Et.push({event:Ie,listeners:he}),Ie.data=ue)),CM(Et,e,et,a,ft)}Vv(Et,n)})}function ol(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ec(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Co(e,a),c!=null&&s.unshift(ol(e,c,f)),c=Co(e,n),c!=null&&s.push(ol(e,c,f))),e.tag===3)return s;e=e.return}return[]}function UM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kv(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var R=a,I=R.alternate,et=R.stateNode;if(R=R.tag,I!==null&&I===s)break;R!==5&&R!==26&&R!==27||et===null||(I=et,c?(et=Co(a,f),et!=null&&x.unshift(ol(a,et,I))):c||(et=Co(a,f),et!=null&&x.push(ol(a,et,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var LM=/\r\n?/g,OM=/\u0000|\uFFFD/g;function Wv(e){return(typeof e=="string"?e:""+e).replace(LM,`
`).replace(OM,"")}function qv(e,n){return n=Wv(n),Wv(e)===n}function Ke(e,n,a,s,c,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||os(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&os(e,""+s);else return;break;case"className":ii(e,"class",s);break;case"tabIndex":ii(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ii(e,a,s);break;case"style":Gm(e,s,f);return;case"data":if(n!=="object"){ii(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Kl(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ke(e,n,"name",c.name,c,null),Ke(e,n,"formEncType",c.formEncType,c,null),Ke(e,n,"formMethod",c.formMethod,c,null),Ke(e,n,"formTarget",c.formTarget,c,null)):(Ke(e,n,"encType",c.encType,c,null),Ke(e,n,"method",c.method,c,null),Ke(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Kl(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=qi);return;case"onScroll":s!=null&&Le("scroll",e);return;case"onScrollEnd":s!=null&&Le("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Kl(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Le("beforetoggle",e),Le("toggle",e),en(e,"popover",s);break;case"xlinkActuate":Oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":en(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=$S.get(a)||a,en(e,a,s);else return}Ce=!0}function sd(e,n,a,s,c,f){switch(a){case"style":Gm(e,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")os(e,s);else if(typeof s=="number"||typeof s=="bigint")os(e,""+s);else return;break;case"onScroll":s!=null&&Le("scroll",e);return;case"onScrollEnd":s!=null&&Le("scrollend",e);return;case"onClick":s!=null&&(e.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[G]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,s,c);break t}Ce=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):en(e,a,s)}return}Ce=!0}function Ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(e,n,f,x,a,null)}}c&&Ke(e,n,"srcSet",a.srcSet,a,null),s&&Ke(e,n,"src",a.src,a,null);return;case"input":Le("invalid",e);var R=f=x=c=null,I=null,et=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":x=ft;break;case"checked":I=ft;break;case"defaultChecked":et=ft;break;case"value":f=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ke(e,n,s,ft,a,null)}}zm(e,f,R,I,et,x,c,!1);return;case"select":Le("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":s=R;default:Ke(e,n,c,R,a,null)}n=f,a=x,e.multiple=!!s,n!=null?ss(e,!!s,n,!1):a!=null&&ss(e,!!s,a,!0);return;case"textarea":Le("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":s=R;break;case"defaultValue":c=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ke(e,n,x,R,a,null)}Fm(e,s,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ke(e,n,I,s,a,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(s=0;s<sl.length;s++)Le(sl[s],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(s=a[et],s!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ke(e,n,et,s,a,null)}return;default:if(lf(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&sd(e,n,ft,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&Ke(e,n,R,s,a,null))}var PM={};function IM(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,R=null,I=null,et=null,ft=null;for(ut in a){var Et=a[ut];if(a.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":I=Et;default:s.hasOwnProperty(ut)||Ke(e,n,ut,null,s,Et)}}for(var Q in s){var ut=s[Q];if(Et=a[Q],s.hasOwnProperty(Q)&&(ut!=null||Et!=null))switch(Q){case"type":ut!==Et&&(Ce=!0),f=ut;break;case"name":ut!==Et&&(Ce=!0),c=ut;break;case"checked":ut!==Et&&(Ce=!0),et=ut;break;case"defaultChecked":ut!==Et&&(Ce=!0),ft=ut;break;case"value":ut!==Et&&(Ce=!0),x=ut;break;case"defaultValue":ut!==Et&&(Ce=!0),R=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:ut!==Et&&Ke(e,n,Q,ut,s,Et)}}sf(e,x,R,I,et,ft,f,c);return;case"select":ut=x=R=Q=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":ut=I;default:s.hasOwnProperty(f)||Ke(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":f!==I&&(Ce=!0),Q=f;break;case"defaultValue":f!==I&&(Ce=!0),R=f;break;case"multiple":f!==I&&(Ce=!0),x=f;default:f!==I&&Ke(e,n,c,f,s,I)}n=R,a=x,s=ut,Q!=null?ss(e,!!a,Q,!1):!!s!=!!a&&(n!=null?ss(e,!!a,n,!0):ss(e,!!a,a?[]:"",!1));return;case"textarea":ut=Q=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ke(e,n,R,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":c!==f&&(Ce=!0),Q=c;break;case"defaultValue":c!==f&&(Ce=!0),ut=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ke(e,n,x,c,s,f)}Bm(e,Q,ut);return;case"option":for(var kt in a)if(Q=a[kt],a.hasOwnProperty(kt)&&Q!=null&&!s.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:Ke(e,n,kt,null,s,Q)}for(I in s)if(Q=s[I],ut=a[I],s.hasOwnProperty(I)&&Q!==ut&&(Q!=null||ut!=null))switch(I){case"selected":Q!==ut&&(Ce=!0),e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Ke(e,n,I,Q,s,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)Q=a[oe],a.hasOwnProperty(oe)&&Q!=null&&!s.hasOwnProperty(oe)&&Ke(e,n,oe,null,s,Q);for(et in s)if(Q=s[et],ut=a[et],s.hasOwnProperty(et)&&Q!==ut&&(Q!=null||ut!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(r(137,n));break;default:Ke(e,n,et,Q,s,ut)}return;default:if(lf(n)){for(var be in a)Q=a[be],a.hasOwnProperty(be)&&Q!==void 0&&!s.hasOwnProperty(be)&&sd(e,n,be,void 0,s,Q);for(ft in s)Q=s[ft],ut=a[ft],!s.hasOwnProperty(ft)||Q===ut||Q===void 0&&ut===void 0||sd(e,n,ft,Q,s,ut);return}}for(var tt in a)Q=a[tt],a.hasOwnProperty(tt)&&Q!=null&&!s.hasOwnProperty(tt)&&Ke(e,n,tt,null,s,Q);for(Et in s)Q=s[Et],ut=a[Et],!s.hasOwnProperty(Et)||Q===ut||Q==null&&ut==null||Ke(e,n,Et,Q,s,ut)}function Yv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,R=c.duration;if(f&&R&&Yv(x)){for(x=0,R=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],et=I.startTime;if(et>R)break;var ft=I.transferSize,Et=I.initiatorType;ft&&Yv(Et)&&(I=I.responseEnd,x+=ft*(I<R?1:(R-et)/(I-et)))}if(--s,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var od=null,ld=null;function ll(e){return e.nodeType===9?e:e.ownerDocument}function Zv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jv(e,n,a,s){return a=ll(a).createElement(e),a[A]=s,a[G]=n,Ln(a,e,n),Re(a),a}function ud(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function BM(){var e=window.event;return e&&e.type==="popstate"?e===cd?!1:(cd=e,!0):(cd=null,!1)}var fd=typeof setTimeout=="function"?setTimeout:void 0,FM=typeof clearTimeout=="function"?clearTimeout:void 0,Qv=typeof Promise=="function"?Promise:void 0,jv=typeof requestAnimationFrame=="function"?requestAnimationFrame:fd,HM=typeof queueMicrotask=="function"?queueMicrotask:typeof Qv<"u"?function(e){return Qv.resolve(null).then(e).catch(GM)}:fd;function GM(e){setTimeout(function(){throw e})}function sr(e){return e==="head"}function $v(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),ks(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xd(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Xt]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&xd(e.ownerDocument.body);a=c}while(a);ks(n)}function t_(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function e_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function n_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function VM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function hd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return VM(n,a,e)}function XM(e){return e.documentElement.clientHeight}function kM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function WM(e,n,a,s,c,f,x,R,I){var et=n.nodeType===9?n:n.ownerDocument;try{var ft=et.startViewTransition({update:function(){var Q=et.defaultView,ut=Q.navigation&&Q.navigation.transition,kt=et.fonts.status;s();var oe=[];if(kt==="loaded"&&(XM(et),et.fonts.status==="loading"&&oe.push(et.fonts.ready)),kt=oe.length,e!==null)for(var be=e.suspenseyImages,tt=0,X=0;X<be.length;X++){var at=be[X];if(!at.complete){var yt=at.getBoundingClientRect();if(0<yt.bottom&&0<yt.right&&yt.top<Q.innerHeight&&yt.left<Q.innerWidth){if(tt+=E_(at),tt>ac){oe.length=kt;break}at=new Promise(kM.bind(at)),oe.push(at)}}}if(0<oe.length)return Q=Promise.race([Promise.all(oe),new Promise(function(te){return setTimeout(te,500)})]).then(c,c),(ut?Promise.allSettled([ut.finished,Q]):Q).then(f,f);if(c(),ut)return ut.finished.then(f,f);f()},types:a});et.__reactViewTransition=ft;var Et=[];return ft.ready.then(function(){for(var Q=et.documentElement.getAnimations({subtree:!0}),ut=0;ut<Q.length;ut++){var kt=Q[ut],oe=kt.effect,be=oe.pseudoElement;if(be!=null&&be.startsWith("::view-transition")){Et.push(kt),kt=oe.getKeyframes();for(var tt=be=void 0,X=!0,at=0;at<kt.length;at++){var yt=kt[at],te=yt.width;if(be===void 0)be=te;else if(be!==te){X=!1;break}if(te=yt.height,tt===void 0)tt=te;else if(tt!==te){X=!1;break}delete yt.width,delete yt.height,yt.transform==="none"&&delete yt.transform}X&&be!==void 0&&tt!==void 0&&(oe.setKeyframes(kt),X=getComputedStyle(oe.target,oe.pseudoElement),X.width!==be||X.height!==tt)&&(X=kt[0],X.width=be,X.height=tt,X=kt[kt.length-1],X.width=be,X.height=tt,oe.setKeyframes(kt))}}x()},function(Q){et.__reactViewTransition===ft&&(et.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&I(Q)}finally{s(),c(),x()}}),ft.finished.finally(function(){for(var Q=0;Q<Et.length;Q++)Et[Q].cancel();et.__reactViewTransition===ft&&(et.__reactViewTransition=null),R()}),ft}catch{return s(),c(),x(),null}}function Gr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Gr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Gr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&s.push(a[c])}return s},Gr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function i_(e){return{name:e,group:new Gr("group",e),imagePair:new Gr("image-pair",e),old:new Gr("old",e),new:new Gr("new",e)}}function ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(r_(f,e,n,a)===-1){var x=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(I){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),s!==null&&(c=x.removeEventListener.bind(x,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=Bs(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),g(this._fragmentFiber.child,!1,qM,e,R,s)}this._eventListeners=f}};function qM(e,n,a,s){return M(e).addEventListener(n,a,s),!1}ci.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=r_(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var f=c.cleanup;c=Bs(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,YM,e,a,c),s.splice(n,1),f!==null&&f()}};function YM(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function Bs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function a_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function r_(e,n,a,s){if(e.length===0)return-1;s=a_(s);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&a_(f.optionsOrUseCapture)===s)return c}return-1}ci.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];s.addEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],s.removeEventListener(f.type,f.attachedListener,Bs(f.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},ci.prototype.focus=function(e){g(this._fragmentFiber.child,!0,s_,e,void 0,void 0)};function s_(e,n){return e.tag===6?!1:(e=M(e),rE(e,n))}ci.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,dd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!s_(n[a],e);a--);};function dd(e,n){return n.push(e),!1}ci.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=M(e),e=ll(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,ZM,e,void 0,void 0))};function ZM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,KM,e,void 0,void 0)};function KM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}ci.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,JM,e,void 0,void 0);for(var a=n=0;a<Oi.length;a++){var s=Oi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Oi[n++]=s}Oi.length=n}};function JM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Oi=[],pd=!1;function QM(e,n,a){Oi.push({fragmentInstance:e,observer:n,instance:a}),pd||(pd=!0,sE(function(){pd=!1;var s=Oi;Oi=[];for(var c=0;c<s.length;c++){var f=s[c];f.observer.unobserve(f.instance)}}))}ci.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,jM,e,void 0,void 0),e};function jM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}ci.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},ci.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,dd,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&f&&x&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||f&&c===e||I||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$M(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $M(e,n,a,s,c){var f=pe(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=v(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=L(a,f,N),n===null?n=!1:(g(n,!0,B,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=L(s,f,N),n===null?n=!1:(g(n,!0,C,f,s),f=S,D=S=null,n=f!==null)),n):!1}function o_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,dd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=b(this._fragmentFiber);if(s=a?s[1]||s[0]||v(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),o_(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),o_(c,a)):M(c).scrollIntoView(e),s+=a?-1:1}};function tE(e,n){return e=M(e),l_(e,n),!1}function l_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function u_(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,Bs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var x=0,R=0;R<Oi.length;R++){var I=Oi[R];(I.fragmentInstance!==n||I.observer!==f||I.instance!==e)&&(Oi[x++]=I)}Oi.length=x,f.observe(e)}),l_(e,n))}function eE(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,Bs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?QM(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function md(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":md(a),se(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function nE(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Xt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function iE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function c_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function gd(e){return e.data==="$?"||e.data==="$~"}function vd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var _d=null;function f_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function h_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function rE(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function sE(e){jv(function(){jv(function(n){return e(n)})})}function d_(e,n,a){switch(n=ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function p_(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&Ke(e,n,s,null,PM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===qi&&(e.onclick=null),se(e)}function xd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);se(e)}var Ri=new Map,m_=new Set;function ul(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Aa=Dt.d;Dt.d={f:oE,r:lE,D:uE,C:cE,L:fE,m:hE,X:pE,S:dE,M:mE};function oE(){var e=Aa.f(),n=Ku();return e||n}function lE(e){var n=Se(e);n!==null&&n.tag===5&&n.type==="form"?vg(n):Aa.r(e)}var Fs=typeof document>"u"?null:document;function g_(e,n,a){var s=Fs;if(s&&typeof n=="string"&&n){var c=xi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),m_.has(c)||(m_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Ln(n,"link",e),Re(n),s.head.appendChild(n)))}}function uE(e){Aa.D(e),g_("dns-prefetch",e,null)}function cE(e,n){Aa.C(e,n),g_("preconnect",e,n)}function fE(e,n,a){Aa.L(e,n,a);var s=Fs;if(s&&e&&n){var c='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xi(a.imageSizes)+'"]')):c+='[href="'+xi(e)+'"]';var f=c;switch(n){case"style":f=Hs(e);break;case"script":f=Gs(e)}if(!(Ri.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(cl(f))||n==="script"&&s.querySelector(fl(f))))){var x=s.createElement("link");Ln(x,"link",e),n==="style"&&(x[ie]=!0,x.onload=x.onerror=function(){Qe(x)}),Re(x),s.head.appendChild(x)}}}function hE(e,n){Aa.m(e,n);var a=Fs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xi(s)+'"][href="'+xi(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Gs(e)}if(!Ri.has(f)&&(e=P({rel:"modulepreload",href:e},n),Ri.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(f)))return}s=a.createElement("link"),Ln(s,"link",e),Re(s),a.head.appendChild(s)}}}function dE(e,n,a){Aa.S(e,n,a);var s=Fs;if(s&&e){var c=Ne(s).hoistableStyles,f=Hs(e);n=n||"default";var x=c.get(f);if(!x){var R={loading:0,preload:null};if(x=s.querySelector(cl(f)))R.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(f))&&Sd(e,a);var I=x=s.createElement("link");Re(I),Ln(I,"link",e),I._p=new Promise(function(et,ft){I.onload=et,I.onerror=ft}),I.addEventListener("load",function(){R.loading|=1}),I.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(f,x)}}}function pE(e,n){Aa.X(e,n);var a=Fs;if(a&&e){var s=Ne(a).hoistableScripts,c=Gs(e),f=s.get(c);f||(f=a.querySelector(fl(c)),f||(e=P({src:e,async:!0},n),(n=Ri.get(c))&&yd(e,n),f=a.createElement("script"),Re(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function mE(e,n){Aa.M(e,n);var a=Fs;if(a&&e){var s=Ne(a).hoistableScripts,c=Gs(e),f=s.get(c);f||(f=a.querySelector(fl(c)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Ri.get(c))&&yd(e,n),f=a.createElement("script"),Re(f),Ln(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function v_(e,n,a,s){var c=(c=ae.current)?ul(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Hs(a.href),n=Ne(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Hs(a.href);var f=Ne(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(cl(e)))?f._p||(x.instance=f,x.state.loading=5):(f=Ri.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,f)),gE(c,e,f,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Gs(a),n=Ne(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Hs(e){return'href="'+xi(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function __(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function gE(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ie]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[ie]=!0,n.onload=n.onerror=Qe.bind(null,n),Ln(n,"link",a),Re(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Gs(e){return'[src="'+xi(e)+'"]'}function fl(e){return"script[async]"+e}function x_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+xi(a.href)+'"]');if(s)return n.instance=s,Re(s),s;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Re(s),Ln(s,"style",c),nc(s,a.precedence,e),n.instance=s;case"stylesheet":c=Hs(a.href);var f=e.querySelector(cl(c));if(f)return n.state.loading|=4,n.instance=f,Re(f),f;s=__(a),(c=Ri.get(c))&&Sd(s,c),f=(e.ownerDocument||e).createElement("link"),Re(f);var x=f;return x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),Ln(f,"link",s),n.state.loading|=4,nc(f,a.precedence,e),n.instance=f;case"script":return f=Gs(a.src),(c=e.querySelector(fl(f)))?(n.instance=c,Re(c),c):(s=a,(c=Ri.get(f))&&(s=P({},a),yd(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Re(c),Ln(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,nc(s,a.precedence,e));return n.instance}function nc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var R=s[x];if(R.dataset.precedence===n)f=R;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Sd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ic=null;function S_(e,n,a){if(ic===null){var s=new Map,c=ic=new Map;c.set(a,s)}else c=ic,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Xt]||f[A]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var R=s.get(x);R?R.push(f):s.set(x,[f])}}return s}function Md(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function y_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function E_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function T_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=E_(n),e.suspenseyImages.push(n)),e=SE.bind(e),n.decode().then(e,e))}function _E(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Hs(s.href),f=n.querySelector(cl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Re(f);return}f=n.ownerDocument||n,s=__(s),(c=Ri.get(c))&&Sd(s,c),f=f.createElement("link"),Re(f);var x=f;x._p=new Promise(function(R,I){x.onload=R,x.onerror=I}),Ln(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ac=0;function xE(e,n){return e.stylesheets&&e.count===0&&sc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ac===0&&(ac=62500*zM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ac?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function b_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)sc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function hl(){this.count--,b_(this)}function SE(){this.imgCount--,b_(this)}var rc=null;function sc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(yE,e),rc=null,hl.call(e))}function yE(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var s=a.get(null);else{a=new Map,rc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=hl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Vs={$$typeof:Z,Provider:null,Consumer:null,_currentValue:Ee,_currentValue2:Ee,_threadCount:0};function ME(e,n,a,s,c,f,x,R,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rs(0),this.hiddenUpdates=rs(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function A_(e,n,a,s,c,f,x,R,I,et,ft,Et){return e=new ME(e,n,a,x,I,et,ft,Et,R),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),e.current=f,f.stateNode=e,n=zf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Gf(f),e}function R_(e){return e?(e=ps,e):ps}function C_(e,n,a,s,c,f){c=R_(c),s.context===null?s.context=c:s.pendingContext=c,s=Za(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ka(e,s,n),a!==null&&(ti(a,e,n),Xo(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ed(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function D_(e){if(e.tag===13||e.tag===31){var n=Tr(e,67108864);n!==null&&ti(n,e,67108864),Ed(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var n=ui();n=Ao(n);var a=Tr(e,n);a!==null&&ti(a,e,n),Ed(e,n)}}var Xs=!0;function EE(e,n,a,s){var c=_t.T;_t.T=null;var f=Dt.p;try{Dt.p=2,Td(e,n,a,s)}finally{Dt.p=f,_t.T=c}}function TE(e,n,a,s){var c=_t.T;_t.T=null;var f=Dt.p;try{Dt.p=8,Td(e,n,a,s)}finally{Dt.p=f,_t.T=c}}function Td(e,n,a,s){if(Xs){var c=bd(s);if(c===null)rd(e,n,s,oc,a),L_(e,s);else if(AE(c,e,n,a,s))s.stopPropagation();else if(L_(e,s),n&4&&-1<bE.indexOf(e)){for(;c!==null;){var f=Se(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ha(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var I=1<<31-ve(x);R.entanglements[1]|=I,x&=~I}na(f),(Xe&6)===0&&(qu=Qt()+500,rl(0))}}break;case 31:case 13:R=Tr(f,2),R!==null&&ti(R,f,2),Ku(),Ed(f,2)}if(f=bd(s),f===null&&rd(e,n,s,oc,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else rd(e,n,s,null,a)}}function bd(e){return e=cf(e),Ad(e)}var oc=null;function Ad(e){if(oc=null,e=pe(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case de:return 2;case Y:return 8;case Ft:case St:return 32;case Gt:return 268435456;default:return 32}default:return 32}}var Rd=!1,or=null,lr=null,ur=null,dl=new Map,pl=new Map,cr=[],bE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,n){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":dl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(n.pointerId)}}function ml(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Se(n),n!==null&&D_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function AE(e,n,a,s,c){switch(n){case"focusin":return or=ml(or,e,n,a,s,c),!0;case"dragenter":return lr=ml(lr,e,n,a,s,c),!0;case"mouseover":return ur=ml(ur,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return dl.set(f,ml(dl.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,pl.set(f,ml(pl.get(f)||null,e,n,a,s,c)),!0}return!1}function O_(e){var n=pe(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Yl(e.priority,function(){N_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Yl(e.priority,function(){N_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);uf=s,a.target.dispatchEvent(s),uf=null}else return n=Se(a),n!==null&&D_(n),e.blockedOn=a,!1;n.shift()}return!0}function P_(e,n,a){lc(e)&&a.delete(n)}function RE(){Rd=!1,or!==null&&lc(or)&&(or=null),lr!==null&&lc(lr)&&(lr=null),ur!==null&&lc(ur)&&(ur=null),dl.forEach(P_),pl.forEach(P_)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,Rd||(Rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,RE)))}var cc=null;function I_(e){cc!==e&&(cc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Ad(s||a)===null)continue;break}var f=Se(a);f!==null&&(e.splice(n,3),n-=3,lh(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ks(e){function n(I){return uc(I,e)}or!==null&&uc(or,e),lr!==null&&uc(lr,e),ur!==null&&uc(ur,e),dl.forEach(n),pl.forEach(n);for(var a=0;a<cr.length;a++){var s=cr[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)O_(a),a.blockedOn===null&&cr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[G]||null;if(typeof f=="function")x||I_(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[G]||null)R=x.formAction;else if(Ad(c)!==null)continue}else R=x.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),I_(a)}}}function z_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Cd(e){this._internalRoot=e}fc.prototype.render=Cd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ui();C_(a,s,e,n,null,null)},fc.prototype.unmount=Cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;C_(e.current,2,null,e,null,null),Ku(),n[dt]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ql();e={blockedOn:null,target:e,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,e),a===0&&O_(e)}};var B_=t.version;if(B_!=="19.3.1")throw Error(r(527,B_,"19.3.1"));Dt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var CE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Ot=hc.inject(CE),Lt=hc}catch{}}return vl.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=Rg,f=Cg,x=wg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=A_(e,1,!1,null,null,a,s,null,c,f,x,z_),e[dt]=n.current,ad(e),new Cd(n)},vl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=Rg,x=Cg,R=wg,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=A_(e,1,!0,n,a??null,s,c,I,f,x,R,z_),n.context=R_(null),a=n.current,s=ui(),s=Ao(s),c=Za(s),c.callback=null,Ka(a,c,s),a=s,n.current.lanes=a,ki(n,a),na(n),e[dt]=n.current,ad(e),new fc(n)},vl.version="19.3.1",vl}var Z_;function HE(){if(Z_)return Nd.exports;Z_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Nd.exports=FE(),Nd.exports}var GE=HE();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="186",VE=0,K_=1,XE=2,Fc=1,kE=2,Rl=3,Jr=0,Kn=1,Ua=2,Oa=0,Dl=1,J_=2,Q_=3,j_=4,WE=5,so=100,qE=101,YE=102,ZE=103,KE=104,JE=200,QE=201,jE=202,$E=203,sS=204,oS=205,tT=206,eT=207,nT=208,iT=209,aT=210,rT=211,sT=212,oT=213,lT=214,mp=0,gp=1,vp=2,Pl=3,_p=4,xp=5,Sp=6,yp=7,cm=0,uT=1,cT=2,oa=0,lS=1,uS=2,cS=3,fm=4,fS=5,hS=6,dS=7,pS=300,Qr=301,mo=302,Pd=303,Id=304,$c=306,Mp=1e3,La=1001,Ep=1002,Pn=1003,fT=1004,dc=1005,Hn=1006,zd=1007,Zr=1008,mi=1009,mS=1010,gS=1011,Il=1012,hm=1013,ua=1014,Fi=1015,ca=1016,dm=1017,pm=1018,zl=1020,vS=35902,_S=35899,xS=1021,SS=1022,Hi=1023,Ia=1026,Kr=1027,mm=1028,gm=1029,jr=1030,vm=1031,_m=1033,Hc=33776,Gc=33777,Vc=33778,Xc=33779,Tp=35840,bp=35841,Ap=35842,Rp=35843,Cp=36196,wp=37492,Dp=37496,Np=37488,Up=37489,Wc=37490,Lp=37491,Op=37808,Pp=37809,Ip=37810,zp=37811,Bp=37812,Fp=37813,Hp=37814,Gp=37815,Vp=37816,Xp=37817,kp=37818,Wp=37819,qp=37820,Yp=37821,Zp=36492,Kp=36494,Jp=36495,Qp=36283,jp=36284,qc=36285,$p=36286,hT=3200,Yc=0,dT=1,_r="",di="srgb",Zc="srgb-linear",Kc="linear",Je="srgb",Bd=7680,pT=519,mT=512,gT=513,vT=514,xm=515,_T=516,xT=517,Sm=518,ST=519,yT=35044,$_="300 es",sa=2e3,Bl=2001;function MT(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ET(){const o=Jc("canvas");return o.style.display="block",o}const tx={};function ex(...o){const t="THREE."+o.shift();console.log(t,...o)}function yS(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function me(...o){o=yS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ge(...o){o=yS(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function ho(...o){const t=o.join(" ");t in tx||(tx[t]=!0,me(...o))}function TT(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const bT={[mp]:gp,[vp]:Sp,[_p]:yp,[Pl]:xp,[gp]:mp,[Sp]:vp,[yp]:_p,[xp]:Pl};class ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nx=1234567;const Nl=Math.PI/180,Fl=180/Math.PI;function es(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function ym(o,t){return(o%t+t)%t}function AT(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function RT(o,t,i){return o!==t?(i-o)/(t-o):0}function Ul(o,t,i){return(1-i)*o+i*t}function CT(o,t,i,r){return Ul(o,t,1-Math.exp(-i*r))}function wT(o,t=1){return t-Math.abs(ym(o,t*2)-t)}function DT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function NT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function UT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function LT(o,t){return o+Math.random()*(t-o)}function OT(o){return o*(.5-Math.random())}function PT(o){o!==void 0&&(nx=o);let t=nx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function IT(o){return o*Nl}function zT(o){return o*Fl}function BT(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function FT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function HT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function GT(o,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),m=u((t+r)/2),_=h((t+r)/2),g=u((t-r)/2),v=h((t-r)/2),y=u((r-t)/2),b=h((r-t)/2);switch(l){case"XYX":o.set(d*_,p*g,p*v,d*m);break;case"YZY":o.set(p*v,d*_,p*g,d*m);break;case"ZXZ":o.set(p*g,p*v,d*_,d*m);break;case"XZX":o.set(d*_,p*b,p*y,d*m);break;case"YXY":o.set(p*y,d*_,p*b,d*m);break;case"ZYZ":o.set(p*b,p*y,d*_,d*m);break;default:me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const _l={DEG2RAD:Nl,RAD2DEG:Fl,generateUUID:es,clamp:De,euclideanModulo:ym,mapLinear:AT,inverseLerp:RT,lerp:Ul,damp:CT,pingpong:wT,smoothstep:DT,smootherstep:NT,randInt:UT,randFloat:LT,randFloatSpread:OT,seededRandom:PT,degToRad:IT,radToDeg:zT,isPowerOfTwo:BT,ceilPowerOfTwo:FT,floorPowerOfTwo:HT,setQuaternionFromProperEuler:GT,normalize:Yn,denormalize:oo},Nm=class Nm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nm.prototype.isVector2=!0;let Wt=Nm;class xo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],g=r[l+3],v=u[h+0],y=u[h+1],b=u[h+2],w=u[h+3];if(g!==w||p!==v||m!==y||_!==b){let M=p*v+m*y+_*b+g*w;M<0&&(v=-v,y=-y,b=-b,w=-w,M=-M);let S=1-d;if(M<.9995){const D=Math.acos(M),B=Math.sin(D);S=Math.sin(S*D)/B,d=Math.sin(d*D)/B,p=p*S+v*d,m=m*S+y*d,_=_*S+b*d,g=g*S+w*d}else{p=p*S+v*d,m=m*S+y*d,_=_*S+b*d,g=g*S+w*d;const D=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=D,m*=D,_*=D,g*=D}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],g=u[h],v=u[h+1],y=u[h+2],b=u[h+3];return t[i]=d*b+_*g+p*y-m*v,t[i+1]=p*b+_*v+m*g-d*y,t[i+2]=m*b+_*y+d*v-p*g,t[i+3]=_*b-d*g-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),g=d(u/2),v=p(r/2),y=p(l/2),b=p(u/2);switch(h){case"XYZ":this._x=v*_*g+m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g-v*y*b;break;case"YXZ":this._x=v*_*g+m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g+v*y*b;break;case"ZXY":this._x=v*_*g-m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g-v*y*b;break;case"ZYX":this._x=v*_*g-m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g+v*y*b;break;case"YZX":this._x=v*_*g+m*y*b,this._y=m*y*g+v*_*b,this._z=m*_*b-v*y*g,this._w=m*_*g-v*y*b;break;case"XZY":this._x=v*_*g-m*y*b,this._y=m*y*g-v*_*b,this._z=m*_*b+v*y*g,this._w=m*_*g+v*y*b;break;default:me("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],v=r+d+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-m)*y,this._z=(h-l)*y}else if(r>d&&r>g){const y=2*Math.sqrt(1+r-d-g);this._w=(_-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+m)/y}else if(d>g){const y=2*Math.sqrt(1+d-r-g);this._w=(u-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-r-d);this._w=(h-l)/y,this._x=(u+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-u*p,this._y=l*_+h*p+u*d-r*m,this._z=u*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,u=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,u=-u,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+u*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Um=class Um{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ix.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ix.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,m=2*(h*l-d*r),_=2*(d*i-u*l),g=2*(u*r-h*i);return this.x=i+p*m+h*g-d*_,this.y=r+p*_+d*m-u*g,this.z=l+p*g+u*_-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-r*p,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(De(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Um.prototype.isVector3=!0;let j=Um;const Fd=new j,ix=new xo,Lm=class Lm{constructor(t,i,r,l,u,h,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m)}set(t,i,r,l,u,h,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],g=r[7],v=r[2],y=r[5],b=r[8],w=l[0],M=l[3],S=l[6],D=l[1],B=l[4],C=l[7],N=l[2],L=l[5],P=l[8];return u[0]=h*w+d*D+p*N,u[3]=h*M+d*B+p*L,u[6]=h*S+d*C+p*P,u[1]=m*w+_*D+g*N,u[4]=m*M+_*B+g*L,u[7]=m*S+_*C+g*P,u[2]=v*w+y*D+b*N,u[5]=v*M+y*B+b*L,u[8]=v*S+y*C+b*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*h*_-i*d*m-r*u*_+r*d*p+l*u*m-l*h*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=_*h-d*m,v=d*p-_*u,y=m*u-h*p,b=i*g+r*v+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=g*w,t[1]=(l*m-_*r)*w,t[2]=(d*r-l*h)*w,t[3]=v*w,t[4]=(_*i-l*p)*w,t[5]=(l*u-d*i)*w,t[6]=y*w,t[7]=(r*p-m*i)*w,t[8]=(h*i-r*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*h+m*d)+h+t,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(t,i){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hd.makeScale(t,i)),this}rotate(t){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hd.makeRotation(-t)),this}translate(t,i){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lm.prototype.isMatrix3=!0;let ye=Lm;const Hd=new ye,ax=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rx=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VT(){const o={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Je&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Je&&(l.r=po(l.r),l.g=po(l.g),l.b=po(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_r?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Zc]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:ax,fromXYZ:rx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:r,transfer:Je,toXYZ:ax,fromXYZ:rx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Be=VT();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function po(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ws;class XT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Ws===void 0&&(Ws=Jc("canvas")),Ws.width=t.width,Ws.height=t.height;const l=Ws.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Ws}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Pa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Pa(i[r]/255)*255):i[r]=Pa(i[r]);return{data:i,width:t.width,height:t.height}}else return me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kT=0;class Mm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Gd(l[h].image)):u.push(Gd(l[h]))}else u=Gd(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?XT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(me("Texture: Unable to serialize Texture."),{})}let WT=0;const Vd=new j;class Gn extends ts{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,r=La,l=La,u=Hn,h=Zr,d=Hi,p=mi,m=Gn.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=es(),this.name="",this.source=new Mm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mp:t.x=t.x-Math.floor(t.x);break;case La:t.x=t.x<0?0:1;break;case Ep:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mp:t.y=t.y-Math.floor(t.y);break;case La:t.y=t.y<0?0:1;break;case Ep:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=pS;Gn.DEFAULT_ANISOTROPY=1;const Om=class Om{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],_=p[4],g=p[8],v=p[1],y=p[5],b=p[9],w=p[2],M=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+w)<.1&&Math.abs(b+M)<.1&&Math.abs(m+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(m+1)/2,C=(y+1)/2,N=(S+1)/2,L=(_+v)/4,P=(g+w)/4,T=(b+M)/4;return B>C&&B>N?B<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(B),l=L/r,u=P/r):C>N?C<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(C),r=L/l,u=T/l):N<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(N),r=P/u,l=T/u),this.set(r,l,u,i),this}let D=Math.sqrt((M-b)*(M-b)+(g-w)*(g-w)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(g-w)/D,this.z=(v-_)/D,this.w=Math.acos((m+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(De(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Om.prototype.isVector4=!0;let ln=Om;class qT extends ts{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:r.depth},u=new Gn(l),h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends qT{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class MS extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class YT extends Gn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=La,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const jc=class jc{constructor(t,i,r,l,u,h,d,p,m,_,g,v,y,b,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,p,m,_,g,v,y,b,w,M)}set(t,i,r,l,u,h,d,p,m,_,g,v,y,b,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=h,S[9]=d,S[13]=p,S[2]=m,S[6]=_,S[10]=g,S[14]=v,S[3]=y,S[7]=b,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/qs.setFromMatrixColumn(t,0).length(),u=1/qs.setFromMatrixColumn(t,1).length(),h=1/qs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=h*_,y=h*g,b=d*_,w=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=y+b*m,i[5]=v-w*m,i[9]=-d*p,i[2]=w-v*m,i[6]=b+y*m,i[10]=h*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,b=m*_,w=m*g;i[0]=v+w*d,i[4]=b*d-y,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=w+v*d,i[10]=h*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,b=m*_,w=m*g;i[0]=v-w*d,i[4]=-h*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=w-v*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const v=h*_,y=h*g,b=d*_,w=d*g;i[0]=p*_,i[4]=b*m-y,i[8]=v*m+w,i[1]=p*g,i[5]=w*m+v,i[9]=y*m-b,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const v=h*p,y=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=w-v*g,i[8]=b*g+y,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=y*g+b,i[10]=v-w*g}else if(t.order==="XZY"){const v=h*p,y=h*m,b=d*p,w=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=v*g+w,i[5]=h*_,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*_,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ZT,t,KT)}lookAt(t,i,r){const l=this.elements;return fi.subVectors(t,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),hr.crossVectors(r,fi),hr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),hr.crossVectors(r,fi)),hr.normalize(),pc.crossVectors(fi,hr),l[0]=hr.x,l[4]=pc.x,l[8]=fi.x,l[1]=hr.y,l[5]=pc.y,l[9]=fi.y,l[2]=hr.z,l[6]=pc.z,l[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],g=r[5],v=r[9],y=r[13],b=r[2],w=r[6],M=r[10],S=r[14],D=r[3],B=r[7],C=r[11],N=r[15],L=l[0],P=l[4],T=l[8],O=l[12],z=l[1],V=l[5],J=l[9],rt=l[13],q=l[2],Z=l[6],k=l[10],W=l[14],ct=l[3],st=l[7],pt=l[11],xt=l[15];return u[0]=h*L+d*z+p*q+m*ct,u[4]=h*P+d*V+p*Z+m*st,u[8]=h*T+d*J+p*k+m*pt,u[12]=h*O+d*rt+p*W+m*xt,u[1]=_*L+g*z+v*q+y*ct,u[5]=_*P+g*V+v*Z+y*st,u[9]=_*T+g*J+v*k+y*pt,u[13]=_*O+g*rt+v*W+y*xt,u[2]=b*L+w*z+M*q+S*ct,u[6]=b*P+w*V+M*Z+S*st,u[10]=b*T+w*J+M*k+S*pt,u[14]=b*O+w*rt+M*W+S*xt,u[3]=D*L+B*z+C*q+N*ct,u[7]=D*P+B*V+C*Z+N*st,u[11]=D*T+B*J+C*k+N*pt,u[15]=D*O+B*rt+C*W+N*xt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],m=t[13],_=t[2],g=t[6],v=t[10],y=t[14],b=t[3],w=t[7],M=t[11],S=t[15],D=p*y-m*v,B=d*y-m*g,C=d*v-p*g,N=h*y-m*_,L=h*v-p*_,P=h*g-d*_;return i*(w*D-M*B+S*C)-r*(b*D-M*N+S*L)+l*(b*B-w*N+S*P)-u*(b*C-w*L+M*P)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],m=t[6],_=t[10];return i*(h*_-d*m)-r*(u*_-d*p)+l*(u*m-h*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],m=t[7],_=t[8],g=t[9],v=t[10],y=t[11],b=t[12],w=t[13],M=t[14],S=t[15],D=i*d-r*h,B=i*p-l*h,C=i*m-u*h,N=r*p-l*d,L=r*m-u*d,P=l*m-u*p,T=_*w-g*b,O=_*M-v*b,z=_*S-y*b,V=g*M-v*w,J=g*S-y*w,rt=v*S-y*M,q=D*rt-B*J+C*V+N*z-L*O+P*T;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/q;return t[0]=(d*rt-p*J+m*V)*Z,t[1]=(l*J-r*rt-u*V)*Z,t[2]=(w*P-M*L+S*N)*Z,t[3]=(v*L-g*P-y*N)*Z,t[4]=(p*z-h*rt-m*O)*Z,t[5]=(i*rt-l*z+u*O)*Z,t[6]=(M*C-b*P-S*B)*Z,t[7]=(_*P-v*C+y*B)*Z,t[8]=(h*J-d*z+m*T)*Z,t[9]=(r*z-i*J-u*T)*Z,t[10]=(b*L-w*C+S*D)*Z,t[11]=(g*C-_*L-y*D)*Z,t[12]=(d*O-h*V-p*T)*Z,t[13]=(i*V-r*O+l*T)*Z,t[14]=(w*B-b*N-M*D)*Z,t[15]=(_*N-g*B+v*D)*Z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,p=t.z,m=u*h,_=u*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,m=u+u,_=h+h,g=d+d,v=u*m,y=u*_,b=u*g,w=h*_,M=h*g,S=d*g,D=p*m,B=p*_,C=p*g,N=r.x,L=r.y,P=r.z;return l[0]=(1-(w+S))*N,l[1]=(y+C)*N,l[2]=(b-B)*N,l[3]=0,l[4]=(y-C)*L,l[5]=(1-(v+S))*L,l[6]=(M+D)*L,l[7]=0,l[8]=(b+B)*P,l[9]=(M-D)*P,l[10]=(1-(v+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let h=qs.set(l[0],l[1],l[2]).length();const d=qs.set(l[4],l[5],l[6]).length(),p=qs.set(l[8],l[9],l[10]).length();u<0&&(h=-h),Pi.copy(this);const m=1/h,_=1/d,g=1/p;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=_,Pi.elements[5]*=_,Pi.elements[6]*=_,Pi.elements[8]*=g,Pi.elements[9]*=g,Pi.elements[10]*=g,i.setFromRotationMatrix(Pi),r.x=h,r.y=d,r.z=p,this}makePerspective(t,i,r,l,u,h,d=sa,p=!1){const m=this.elements,_=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let b,w;if(p)b=u/(h-u),w=h*u/(h-u);else if(d===sa)b=-(h+u)/(h-u),w=-2*h*u/(h-u);else if(d===Bl)b=-h/(h-u),w=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=sa,p=!1){const m=this.elements,_=2/(i-t),g=2/(r-l),v=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,w;if(p)b=1/(h-u),w=h/(h-u);else if(d===sa)b=-2/(h-u),w=-(h+u)/(h-u);else if(d===Bl)b=-1/(h-u),w=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=g,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};jc.prototype.isMatrix4=!0;let tn=jc;const qs=new j,Pi=new tn,ZT=new j(0,0,0),KT=new j(1,1,1),hr=new j,pc=new j,fi=new j,sx=new tn,ox=new xo;class za{constructor(t=0,i=0,r=0,l=za.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-De(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return sx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ox.setFromEuler(this),this.setFromQuaternion(ox,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}za.DEFAULT_ORDER="XYZ";class Em{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let JT=0;const lx=new j,Ys=new xo,Ra=new tn,mc=new j,xl=new j,QT=new j,jT=new xo,ux=new j(1,0,0),cx=new j(0,1,0),fx=new j(0,0,1),hx={type:"added"},$T={type:"removed"},Zs={type:"childadded",child:null},Xd={type:"childremoved",child:null};class In extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JT++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new j,i=new za,r=new xo,l=new j(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ye}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Em,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(t,i){return Ys.setFromAxisAngle(t,i),this.quaternion.premultiply(Ys),this}rotateX(t){return this.rotateOnAxis(ux,t)}rotateY(t){return this.rotateOnAxis(cx,t)}rotateZ(t){return this.rotateOnAxis(fx,t)}translateOnAxis(t,i){return lx.copy(t).applyQuaternion(this.quaternion),this.position.add(lx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ux,t)}translateY(t){return this.translateOnAxis(cx,t)}translateZ(t){return this.translateOnAxis(fx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?mc.copy(t):mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(xl,mc,this.up):Ra.lookAt(mc,xl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),Ys.setFromRotationMatrix(Ra),this.quaternion.premultiply(Ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hx),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($T),Xd.child=t,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hx),Zs.child=t,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,t,QT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,jT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let h=0,d=u.length;h<d;h++)u[h].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),m=h(t.textures),_=h(t.images),g=h(t.shapes),v=h(t.skeletons),y=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}In.DEFAULT_UP=new j(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t1={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),S=this._getHandJoint(m,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,b=.005;m.inputState.pinching&&v>y+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(t1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new lo;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const ES={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},gc={h:0,s:0,l:0};function Wd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Be.workingColorSpace){return this.r=t,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Be.workingColorSpace){if(t=ym(t,1),i=De(i,0,1),r=De(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Wd(h,u,t+1/3),this.g=Wd(h,u,t),this.b=Wd(h,u,t-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function r(u){u!==void 0&&parseFloat(u)<1&&me("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:me("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);me("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const r=ES[t.toLowerCase()];return r!==void 0?this.setHex(r,i):me("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Be.workingToColorSpace(Fn.copy(this),t),Math.round(De(Fn.r*255,0,255))*65536+Math.round(De(Fn.g*255,0,255))*256+Math.round(De(Fn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Be.workingColorSpace){Be.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,u=Fn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-r)/g+2;break;case u:p=(r-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Be.workingColorSpace){return Be.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=di){Be.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,r=Fn.g,l=Fn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(dr),this.setHSL(dr.h+t,dr.s+i,dr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(dr),t.getHSL(gc);const r=Ul(dr.h,gc.h,i),l=Ul(dr.s,gc.s,i),u=Ul(dr.l,gc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Fe;Fe.NAMES=ES;class TS extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new za,this.environmentIntensity=1,this.environmentRotation=new za,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new j,Ca=new j,qd=new j,wa=new j,Ks=new j,Js=new j,dx=new j,Yd=new j,Zd=new j,Kd=new j,Jd=new ln,Qd=new ln,jd=new ln;class Bi{constructor(t=new j,i=new j,r=new j){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ii.subVectors(t,i),l.cross(Ii);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ii.subVectors(l,i),Ca.subVectors(r,i),qd.subVectors(t,i);const h=Ii.dot(Ii),d=Ii.dot(Ca),p=Ii.dot(qd),m=Ca.dot(Ca),_=Ca.dot(qd),g=h*m-d*d;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(m*p-d*_)*v,b=(h*_-d*p)*v;return u.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,i,r,l,u,h,d,p){return this.getBarycoord(t,i,r,l,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,wa.x),p.addScaledVector(h,wa.y),p.addScaledVector(d,wa.z),p)}static getInterpolatedAttribute(t,i,r,l,u,h){return Jd.setScalar(0),Qd.setScalar(0),jd.setScalar(0),Jd.fromBufferAttribute(t,i),Qd.fromBufferAttribute(t,r),jd.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Jd,u.x),h.addScaledVector(Qd,u.y),h.addScaledVector(jd,u.z),h}static isFrontFacing(t,i,r,l){return Ii.subVectors(r,i),Ca.subVectors(t,i),Ii.cross(Ca).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Ii.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;Ks.subVectors(l,r),Js.subVectors(u,r),Yd.subVectors(t,r);const p=Ks.dot(Yd),m=Js.dot(Yd);if(p<=0&&m<=0)return i.copy(r);Zd.subVectors(t,l);const _=Ks.dot(Zd),g=Js.dot(Zd);if(_>=0&&g<=_)return i.copy(l);const v=p*g-_*m;if(v<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(Ks,h);Kd.subVectors(t,u);const y=Ks.dot(Kd),b=Js.dot(Kd);if(b>=0&&y<=b)return i.copy(u);const w=y*m-p*b;if(w<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(r).addScaledVector(Js,d);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return dx.subVectors(u,l),d=(g-_)/(g-_+(y-b)),i.copy(l).addScaledVector(dx,d);const S=1/(M+w+v);return h=w*S,d=v*S,i.copy(r).addScaledVector(Ks,h).addScaledVector(Js,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ns{constructor(t=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(zi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,zi):zi.fromBufferAttribute(u,h),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vc.copy(r.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),_c.subVectors(this.max,Sl),Qs.subVectors(t.a,Sl),js.subVectors(t.b,Sl),$s.subVectors(t.c,Sl),pr.subVectors(js,Qs),mr.subVectors($s,js),Vr.subVectors(Qs,$s);let i=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Vr.z,Vr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Vr.z,0,-Vr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Vr.y,Vr.x,0];return!$d(i,Qs,js,$s,_c)||(i=[1,0,0,0,1,0,0,0,1],!$d(i,Qs,js,$s,_c))?!1:(xc.crossVectors(pr,mr),i=[xc.x,xc.y,xc.z],$d(i,Qs,js,$s,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new j,new j,new j,new j,new j,new j,new j,new j],zi=new j,vc=new ns,Qs=new j,js=new j,$s=new j,pr=new j,mr=new j,Vr=new j,Sl=new j,_c=new j,xc=new j,Xr=new j;function $d(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){Xr.fromArray(o,u);const d=l.x*Math.abs(Xr.x)+l.y*Math.abs(Xr.y)+l.z*Math.abs(Xr.z),p=t.dot(Xr),m=i.dot(Xr),_=r.dot(Xr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const xn=new j,Sc=new Wt;let e1=0;class la extends ts{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=yT,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=oo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class bS extends la{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class AS extends la{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Sn extends la{constructor(t,i,r){super(new Float32Array(t),i,r)}}const n1=new ns,yl=new j,tp=new j;class kl{constructor(t=new j,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):n1.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yl.subVectors(t,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yl.copy(t.center).add(tp)),this.expandByPoint(yl.copy(t.center).sub(tp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let i1=0;const Ci=new tn,ep=new In,to=new j,hi=new ns,Ml=new ns,Cn=new j;class gi extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(MT(t)?AS:bS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ye().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,i,r){return Ci.makeTranslation(t,i,r),this.applyMatrix4(Ci),this}scale(t,i,r){return Ci.makeScale(t,i,r),this.applyMatrix4(Ci),this}lookAt(t){return ep.lookAt(t),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];hi.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ml.setFromBufferAttribute(d),this.morphTargetsRelative?(Cn.addVectors(hi.min,Ml.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Ml.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Ml.min),hi.expandByPoint(Ml.max))}hi.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)Cn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(Cn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Cn.fromBufferAttribute(d,m),p&&(to.fromBufferAttribute(t,m),Cn.add(to)),l=Math.max(l,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new la(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const d=[],p=[];for(let T=0;T<r.count;T++)d[T]=new j,p[T]=new j;const m=new j,_=new j,g=new j,v=new Wt,y=new Wt,b=new Wt,w=new j,M=new j;function S(T,O,z){m.fromBufferAttribute(r,T),_.fromBufferAttribute(r,O),g.fromBufferAttribute(r,z),v.fromBufferAttribute(u,T),y.fromBufferAttribute(u,O),b.fromBufferAttribute(u,z),_.sub(m),g.sub(m),y.sub(v),b.sub(v);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),d[T].add(w),d[O].add(w),d[z].add(w),p[T].add(M),p[O].add(M),p[z].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let T=0,O=D.length;T<O;++T){const z=D[T],V=z.start,J=z.count;for(let rt=V,q=V+J;rt<q;rt+=3)S(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const B=new j,C=new j,N=new j,L=new j;function P(T){N.fromBufferAttribute(l,T),L.copy(N);const O=d[T];B.copy(O),B.sub(N.multiplyScalar(N.dot(O))).normalize(),C.crossVectors(L,O);const V=C.dot(p[T])<0?-1:1;h.setXYZW(T,B.x,B.y,B.z,V)}for(let T=0,O=D.length;T<O;++T){const z=D[T],V=z.start,J=z.count;for(let rt=V,q=V+J;rt<q;rt+=3)P(t.getX(rt+0)),P(t.getX(rt+1)),P(t.getX(rt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new la(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new j,u=new j,h=new j,d=new j,p=new j,m=new j,_=new j,g=new j;if(t)for(let v=0,y=t.count;v<y;v+=3){const b=t.getX(v+0),w=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),d.add(_),p.add(_),m.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,g=d.normalized,v=new m.constructor(p.length*_);let y=0,b=0;for(let w=0,M=p.length;w<M;w++){d.isInterleavedBufferAttribute?y=p[w]*d.data.stride+d.offset:y=p[w]*_;for(let S=0;S<_;S++)v[b++]=m[y++]}return new la(v,_,g)}if(this.index===null)return me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let _=0,g=m.length;_<g;_++){const v=m[_],y=t(v,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,v=m.length;g<v;g++){const y=m[g];_.push(y.toJSON(t.data))}_.length>0&&(l[p]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const u=t.morphAttributes;for(const m in u){const _=[],g=u[m];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const np=new j,a1=new j,r1=new ye;class vr{constructor(t=new j(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=np.subVectors(r,i).cross(a1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(np),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/u;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||r1.getNormalMatrix(t),l=this.coplanarPoint(np).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let s1=0;class So extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Dl,this.side=Jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sS,this.blendDst=oS,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bd,this.stencilZFail=Bd,this.stencilZPass=Bd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){me(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){me(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new vr().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Wt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Na=new j,ip=new j,yc=new j,Mc=new j;class RS{constructor(t=new j,i=new j(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){ip.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Mc.copy(this.origin).sub(ip);const u=t.distanceTo(i)*.5,h=-this.direction.dot(yc),d=Mc.dot(this.direction),p=-Mc.dot(yc),m=Mc.lengthSq(),_=Math.abs(1-h*h);let g,v,y,b;if(_>0)if(g=h*p-d,v=h*d-p,b=u*_,g>=0)if(v>=-b)if(v<=b){const w=1/_;g*=w,v*=w,y=g*(g+h*v+2*d)+v*(h*g+v+2*p)+m}else v=u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v=-u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;else v<=-b?(g=Math.max(0,-(-h*u+d)),v=g>0?-u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+m):v<=b?(g=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+m):(g=Math.max(0,-(h*u+d)),v=g>0?u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+m);else v=h>0?-u:u,g=Math.max(0,-(h*v+d)),y=-g*g+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ip).addScaledVector(yc,v),y}intersectSphere(t,i){if(t.radius<0)return null;Na.subVectors(t.center,this.origin);const r=Na.dot(this.direction),l=Na.dot(Na)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),_>=0?(u=(t.min.y-v.y)*_,h=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,h=(t.min.y-v.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(d=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Na)!==null}intersectTriangle(t,i,r,l,u){const h=this.origin,d=this.direction,p=d.x,m=d.y,_=d.z,g=t.x-h.x,v=t.y-h.y,y=t.z-h.z,b=i.x-h.x,w=i.y-h.y,M=i.z-h.z,S=r.x-h.x,D=r.y-h.y,B=r.z-h.z,C=Math.abs(p),N=Math.abs(m),L=Math.abs(_);let P,T,O,z,V,J,rt,q,Z,k,W,ct;if(C>=N&&C>=L?(O=p,J=g,Z=b,ct=S,p>=0?(P=m,T=_,z=v,V=y,rt=w,q=M,k=D,W=B):(P=_,T=m,z=y,V=v,rt=M,q=w,k=B,W=D)):N>=L?(O=m,J=v,Z=w,ct=D,m>=0?(P=_,T=p,z=y,V=g,rt=M,q=b,k=B,W=S):(P=p,T=_,z=g,V=y,rt=b,q=M,k=S,W=B)):(O=_,J=y,Z=M,ct=B,_>=0?(P=p,T=m,z=g,V=v,rt=b,q=w,k=S,W=D):(P=m,T=p,z=v,V=g,rt=w,q=b,k=D,W=S)),O===0)return null;const st=P/O,pt=T/O,xt=1/O,Pt=z-st*J,qt=V-pt*J,F=rt-st*Z,gt=q-pt*Z,Ut=k-st*ct,K=W-pt*ct,ht=Ut*gt-K*F,Rt=Pt*K-qt*Ut,Ht=F*qt-gt*Pt;if(l){if(ht<0||Rt<0||Ht<0)return null}else if((ht<0||Rt<0||Ht<0)&&(ht>0||Rt>0||Ht>0))return null;const _t=ht+Rt+Ht;if(_t===0)return null;const Dt=xt*(ht*J+Rt*Z+Ht*ct);return(_t>0?Dt<0:Dt>0)?null:this.at(Dt/_t,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qc extends So{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const px=new tn,kr=new RS,Ec=new kl,mx=new j,Tc=new j,bc=new j,Ac=new j,ap=new j,Rc=new j,gx=new j,Cc=new j;class ke extends In{constructor(t=new gi,i=new Qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Rc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const _=d[p],g=u[p];_!==0&&(ap.fromBufferAttribute(g,t),h?Rc.addScaledVector(ap,_):Rc.addScaledVector(ap.sub(i),_))}i.add(Rc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ec.copy(r.boundingSphere),Ec.applyMatrix4(u),kr.copy(t.ray).recast(t.near),!(Ec.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Ec,mx)===null||kr.origin.distanceToSquared(mx)>(t.far-t.near)**2))&&(px.copy(u).invert(),kr.copy(t.ray).applyMatrix4(px),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,kr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const M=v[b],S=h[M.materialIndex],D=Math.max(M.start,y.start),B=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=D,N=B;C<N;C+=3){const L=d.getX(C),P=d.getX(C+1),T=d.getX(C+2);l=wc(this,S,t,r,m,_,g,L,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=b,S=w;M<S;M+=3){const D=d.getX(M),B=d.getX(M+1),C=d.getX(M+2);l=wc(this,h,t,r,m,_,g,D,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const M=v[b],S=h[M.materialIndex],D=Math.max(M.start,y.start),B=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let C=D,N=B;C<N;C+=3){const L=C,P=C+1,T=C+2;l=wc(this,S,t,r,m,_,g,L,P,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let M=b,S=w;M<S;M+=3){const D=M,B=M+1,C=M+2;l=wc(this,h,t,r,m,_,g,D,B,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function o1(o,t,i,r,l,u,h,d){let p;if(t.side===Kn?p=r.intersectTriangle(h,u,l,!0,d):p=r.intersectTriangle(l,u,h,t.side===Jr,d),p===null)return null;Cc.copy(d),Cc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Cc);return m<i.near||m>i.far?null:{distance:m,point:Cc.clone(),object:o}}function wc(o,t,i,r,l,u,h,d,p,m){o.getVertexPosition(d,Tc),o.getVertexPosition(p,bc),o.getVertexPosition(m,Ac);const _=o1(o,t,i,r,Tc,bc,Ac,gx);if(_){const g=new j;Bi.getBarycoord(gx,Tc,bc,Ac,g),l&&(_.uv=Bi.getInterpolatedAttribute(l,d,p,m,g,new Wt)),u&&(_.uv1=Bi.getInterpolatedAttribute(u,d,p,m,g,new Wt)),h&&(_.normal=Bi.getInterpolatedAttribute(h,d,p,m,g,new j),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new j,materialIndex:0};Bi.getNormal(Tc,bc,Ac,v.normal),_.face=v,_.barycoord=g}return _}class CS extends Gn{constructor(t=null,i=1,r=1,l,u,h,d,p,m=Pn,_=Pn,g,v){super(null,h,d,p,m,_,l,u,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vx extends la{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const eo=new tn,_x=new tn,Dc=[],xx=new ns,l1=new tn,El=new ke,Tl=new kl;class u1 extends ke{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new vx(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,l1)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ns),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,eo),xx.copy(t.boundingBox).applyMatrix4(eo),this.boundingBox.union(xx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new kl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,eo),Tl.copy(t.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(Tl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=r.length+1,h=t*u+1;for(let d=0;d<r.length;d++)r[d]=l[h+d]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(r),t.ray.intersectsSphere(Tl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,eo),_x.multiplyMatrices(r,eo),El.matrixWorld=_x,El.raycast(t,Dc);for(let h=0,d=Dc.length;h<d;h++){const p=Dc[h];p.instanceId=u,p.object=this,i.push(p)}Dc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new vx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new CS(new Float32Array(l*this.count),l,this.count,mm,Fi));const u=this.morphTexture.source.data.data;let h=0;for(let m=0;m<r.length;m++)h+=r[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;return u[p]=d,u.set(r,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wr=new kl,c1=new Wt(.5,.5),Nc=new j;class Tm{constructor(t=new vr,i=new vr,r=new vr,l=new vr,u=new vr,h=new vr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=sa,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],m=u[3],_=u[4],g=u[5],v=u[6],y=u[7],b=u[8],w=u[9],M=u[10],S=u[11],D=u[12],B=u[13],C=u[14],N=u[15];if(l[0].setComponents(m-h,y-_,S-b,N-D).normalize(),l[1].setComponents(m+h,y+_,S+b,N+D).normalize(),l[2].setComponents(m+d,y+g,S+w,N+B).normalize(),l[3].setComponents(m-d,y-g,S-w,N-B).normalize(),r)l[4].setComponents(p,v,M,C).normalize(),l[5].setComponents(m-p,y-v,S-M,N-C).normalize();else if(l[4].setComponents(m-p,y-v,S-M,N-C).normalize(),i===sa)l[5].setComponents(m+p,y+v,S+M,N+C).normalize();else if(i===Bl)l[5].setComponents(p,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const i=c1.distanceTo(t.center);return Wr.radius=.7071067811865476+i,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Nc.x=l.normal.x>0?t.max.x:t.min.x,Nc.y=l.normal.y>0?t.max.y:t.min.y,Nc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wS extends Gn{constructor(t=[],i=Qr,r,l,u,h,d,p,m,_){super(t,i,r,l,u,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sx extends Gn{constructor(t,i,r,l,u,h,d,p,m){super(t,i,r,l,u,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hl extends Gn{constructor(t,i,r=ua,l,u,h,d=Pn,p=Pn,m,_=Ia,g=1){if(_!==Ia&&_!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,u,h,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class f1 extends Hl{constructor(t,i=ua,r=Qr,l,u,h=Pn,d=Pn,p,m=Ia){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,i,r,l,u,h,d,p,m),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class DS extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class is extends gi{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],m=[],_=[],g=[];let v=0,y=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(g,2));function b(w,M,S,D,B,C,N,L,P,T,O){const z=C/P,V=N/T,J=C/2,rt=N/2,q=L/2,Z=P+1,k=T+1;let W=0,ct=0;const st=new j;for(let pt=0;pt<k;pt++){const xt=pt*V-rt;for(let Pt=0;Pt<Z;Pt++){const qt=Pt*z-J;st[w]=qt*D,st[M]=xt*B,st[S]=q,m.push(st.x,st.y,st.z),st[w]=0,st[M]=0,st[S]=L>0?1:-1,_.push(st.x,st.y,st.z),g.push(Pt/P),g.push(1-pt/T),W+=1}}for(let pt=0;pt<T;pt++)for(let xt=0;xt<P;xt++){const Pt=v+xt+Z*pt,qt=v+xt+Z*(pt+1),F=v+(xt+1)+Z*(pt+1),gt=v+(xt+1)+Z*pt;p.push(Pt,qt,gt),p.push(qt,F,gt),ct+=6}d.addGroup(y,ct,O),y+=ct,v+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class tf extends gi{constructor(t=1,i=1,r=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const _=[],g=[],v=[],y=[];let b=0;const w=[],M=r/2;let S=0;D(),h===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(_),this.setAttribute("position",new Sn(g,3)),this.setAttribute("normal",new Sn(v,3)),this.setAttribute("uv",new Sn(y,2));function D(){const C=new j,N=new j;let L=0;const P=(i-t)/r;for(let T=0;T<=u;T++){const O=[],z=T/u,V=z*(i-t)+t;for(let J=0;J<=l;J++){const rt=J/l,q=rt*p+d,Z=Math.sin(q),k=Math.cos(q);N.x=V*Z,N.y=-z*r+M,N.z=V*k,g.push(N.x,N.y,N.z),C.set(Z,P,k).normalize(),v.push(C.x,C.y,C.z),y.push(rt,1-z),O.push(b++)}w.push(O)}for(let T=0;T<l;T++)for(let O=0;O<u;O++){const z=w[O][T],V=w[O+1][T],J=w[O+1][T+1],rt=w[O][T+1];(t>0||O!==0)&&(_.push(z,V,rt),L+=3),(i>0||O!==u-1)&&(_.push(V,J,rt),L+=3)}m.addGroup(S,L,0),S+=L}function B(C){const N=b,L=new Wt,P=new j;let T=0;const O=C===!0?t:i,z=C===!0?1:-1;for(let J=1;J<=l;J++)g.push(0,M*z,0),v.push(0,z,0),y.push(.5,.5),b++;const V=b;for(let J=0;J<=l;J++){const q=J/l*p+d,Z=Math.cos(q),k=Math.sin(q);P.x=O*k,P.y=M*z,P.z=O*Z,g.push(P.x,P.y,P.z),v.push(0,z,0),L.x=Z*.5+.5,L.y=k*.5*z+.5,y.push(L.x,L.y),b++}for(let J=0;J<l;J++){const rt=N+J,q=V+J;C===!0?_.push(q,q+1,rt):_.push(q+1,q,rt),T+=3}m.addGroup(S,T,C===!0?1:2),S+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){me("Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)r=this.getPoint(h/t),u+=r.distanceTo(l),i.push(u),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const u=r.length;let h;i?h=i:h=t*r[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-h,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===h)return l/(u-1);const _=r[l],v=r[l+1]-_,y=(h-_)/v;return(l+y)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Wt:new j);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new j,l=[],u=[],h=[],d=new j,p=new tn;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new j)}u[0]=new j,h[0]=new j;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);_<=m&&(m=_,r.set(1,0,0)),g<=m&&(m=g,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let y=1;y<=t;y++){if(u[y]=u[y-1].clone(),h[y]=h[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(De(l[y-1].dot(l[y]),-1,1));u[y].applyMatrix4(p.makeRotationAxis(d,b))}h[y].crossVectors(l[y],u[y])}if(i===!0){let y=Math.acos(De(u[0].dot(u[t]),-1,1));y/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(y=-y);for(let b=1;b<=t;b++)u[b].applyMatrix4(p.makeRotationAxis(l[b],y*b)),h[b].crossVectors(l[b],u[b])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bm extends fa{constructor(t=0,i=0,r=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Wt){const r=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=p-this.aX,y=m-this.aY;p=v*_-y*g+this.aX,m=v*g+y*_+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class h1 extends bm{constructor(t,i,r,l,u,h){super(t,i,r,r,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Am(){let o=0,t=0,i=0,r=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,r=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,m){l(h,d,m*(d-u),m*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,m,_,g){let v=(h-u)/m-(d-u)/(m+_)+(d-h)/_,y=(d-h)/_-(p-h)/(_+g)+(p-d)/g;v*=_,y*=_,l(h,d,v,y)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+r*d}}}const yx=new j,Mx=new j,rp=new Am,sp=new Am,op=new Am;class d1 extends fa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new j){const r=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,_;this.closed||d>0?m=l[(d-1)%u]:(Mx.subVectors(l[0],l[1]).add(l[0]),m=Mx);const g=l[d%u],v=l[(d+1)%u];if(this.closed||d+2<u?_=l[(d+2)%u]:(yx.subVectors(l[u-1],l[u-2]).add(l[u-1]),_=yx),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(m.distanceToSquared(g),y),w=Math.pow(g.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(_),y);w<1e-4&&(w=1),b<1e-4&&(b=w),M<1e-4&&(M=w),rp.initNonuniformCatmullRom(m.x,g.x,v.x,_.x,b,w,M),sp.initNonuniformCatmullRom(m.y,g.y,v.y,_.y,b,w,M),op.initNonuniformCatmullRom(m.z,g.z,v.z,_.z,b,w,M)}else this.curveType==="catmullrom"&&(rp.initCatmullRom(m.x,g.x,v.x,_.x,this.tension),sp.initCatmullRom(m.y,g.y,v.y,_.y,this.tension),op.initCatmullRom(m.z,g.z,v.z,_.z,this.tension));return r.set(rp.calc(p),sp.calc(p),op.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new j().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ex(o,t,i,r,l){const u=(r-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+u+h)*p+(-3*i+3*r-2*u-h)*d+u*o+i}function p1(o,t){const i=1-o;return i*i*t}function m1(o,t){return 2*(1-o)*o*t}function g1(o,t){return o*o*t}function Ll(o,t,i,r){return p1(o,t)+m1(o,i)+g1(o,r)}function v1(o,t){const i=1-o;return i*i*i*t}function _1(o,t){const i=1-o;return 3*i*i*o*t}function x1(o,t){return 3*(1-o)*o*o*t}function S1(o,t){return o*o*o*t}function Ol(o,t,i,r,l){return v1(o,t)+_1(o,i)+x1(o,r)+S1(o,l)}class NS extends fa{constructor(t=new Wt,i=new Wt,r=new Wt,l=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Wt){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Ol(t,l.x,u.x,h.x,d.x),Ol(t,l.y,u.y,h.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y1 extends fa{constructor(t=new j,i=new j,r=new j,l=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new j){const r=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return r.set(Ol(t,l.x,u.x,h.x,d.x),Ol(t,l.y,u.y,h.y,d.y),Ol(t,l.z,u.z,h.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class US extends fa{constructor(t=new Wt,i=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Wt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Wt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M1 extends fa{constructor(t=new j,i=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new j){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new j){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class LS extends fa{constructor(t=new Wt,i=new Wt,r=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Wt){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ll(t,l.x,u.x,h.x),Ll(t,l.y,u.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E1 extends fa{constructor(t=new j,i=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new j){const r=i,l=this.v0,u=this.v1,h=this.v2;return r.set(Ll(t,l.x,u.x,h.x),Ll(t,l.y,u.y,h.y),Ll(t,l.z,u.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class OS extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Wt){const r=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],m=l[h],_=l[h>l.length-2?l.length-1:h+1],g=l[h>l.length-3?l.length-1:h+2];return r.set(Ex(d,p.x,m.x,_.x,g.x),Ex(d,p.y,m.y,_.y,g.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Wt().fromArray(l))}return this}}var tm=Object.freeze({__proto__:null,ArcCurve:h1,CatmullRomCurve3:d1,CubicBezierCurve:NS,CubicBezierCurve3:y1,EllipseCurve:bm,LineCurve:US,LineCurve3:M1,QuadraticBezierCurve:LS,QuadraticBezierCurve3:E1,SplineCurve:OS});class T1 extends fa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tm[r](i,t))}return this}getPoint(t,i){const r=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=r){const h=l[u]-r,d=this.curves[u],p=d.getLength(),m=p===0?0:1-h/p;return d.getPointAt(m,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let r=0,l=this.curves.length;r<l;r++)i+=this.curves[r].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let r;for(let l=0,u=this.curves;l<u.length;l++){const h=u[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,p=h.getPoints(d);for(let m=0;m<p.length;m++){const _=p[m];r&&r.equals(_)||(i.push(_),r=_)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,r=this.curves.length;i<r;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,r=t.curves.length;i<r;i++){const l=t.curves[i];this.curves.push(new tm[l.type]().fromJSON(l))}return this}}class em extends T1{constructor(t){super(),this.type="Path",this.currentPoint=new Wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,r=t.length;i<r;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const r=new US(this.currentPoint.clone(),new Wt(t,i));return this.curves.push(r),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,r,l){const u=new LS(this.currentPoint.clone(),new Wt(t,i),new Wt(r,l));return this.curves.push(u),this.currentPoint.set(r,l),this}bezierCurveTo(t,i,r,l,u,h){const d=new NS(this.currentPoint.clone(),new Wt(t,i),new Wt(r,l),new Wt(u,h));return this.curves.push(d),this.currentPoint.set(u,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),r=new OS(i);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,r,l,u,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,r,l,u,h),this}absarc(t,i,r,l,u,h){return this.absellipse(t,i,r,r,l,u,h),this}ellipse(t,i,r,l,u,h,d,p){const m=this.currentPoint.x,_=this.currentPoint.y;return this.absellipse(t+m,i+_,r,l,u,h,d,p),this}absellipse(t,i,r,l,u,h,d,p){const m=new bm(t,i,r,l,u,h,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const _=m.getPoint(1);return this.currentPoint.copy(_),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class PS extends em{constructor(t){super(t),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let r=0,l=this.holes.length;r<l;r++)i[r]=this.holes[r].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,r=this.holes.length;i<r;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,r=t.holes.length;i<r;i++){const l=t.holes[i];this.holes.push(new em().fromJSON(l))}return this}}function b1(o,t,i=2){const r=t&&t.length,l=r?t[0]*i:o.length;let u=IS(o,0,l,i,!0);const h=[];if(!u||u.next===u.prev)return h;let d,p,m;if(r&&(u=D1(o,t,u,i)),o.length>80*i){d=o[0],p=o[1];let _=d,g=p;for(let v=i;v<l;v+=i){const y=o[v],b=o[v+1];y<d&&(d=y),b<p&&(p=b),y>_&&(_=y),b>g&&(g=b)}m=Math.max(_-d,g-p),m=m!==0?32767/m:0}return Gl(u,h,i,d,p,m,0),h}function IS(o,t,i,r,l){let u;if(l===G1(o,t,i,r)>0)for(let h=t;h<i;h+=r)u=Tx(h/r|0,o[h],o[h+1],u);else for(let h=i-r;h>=t;h-=r)u=Tx(h/r|0,o[h],o[h+1],u);return u&&go(u,u.next)&&(Xl(u),u=u.next),u}function $r(o,t){if(!o)return o;t||(t=o);let i=o,r;do if(r=!1,!i.steiner&&(go(i,i.next)||un(i.prev,i,i.next)===0)){if(Xl(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Gl(o,t,i,r,l,u,h){if(!o)return;!h&&u&&P1(o,r,l,u);let d=o;for(;o.prev!==o.next;){const p=o.prev,m=o.next;if(u?R1(o,r,l,u):A1(o)){t.push(p.i,o.i,m.i),Xl(o),o=m.next,d=m.next;continue}if(o=m,o===d){h?h===1?(o=C1($r(o),t),Gl(o,t,i,r,l,u,2)):h===2&&w1(o,t,i,r,l,u):Gl($r(o),t,i,r,l,u,1);break}}}function A1(o){const t=o.prev,i=o,r=o.next;if(un(t,i,r)>=0)return!1;const l=t.x,u=i.x,h=r.x,d=t.y,p=i.y,m=r.y,_=Math.min(l,u,h),g=Math.min(d,p,m),v=Math.max(l,u,h),y=Math.max(d,p,m);let b=r.next;for(;b!==t;){if(b.x>=_&&b.x<=v&&b.y>=g&&b.y<=y&&Cl(l,d,u,p,h,m,b.x,b.y)&&un(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function R1(o,t,i,r){const l=o.prev,u=o,h=o.next;if(un(l,u,h)>=0)return!1;const d=l.x,p=u.x,m=h.x,_=l.y,g=u.y,v=h.y,y=Math.min(d,p,m),b=Math.min(_,g,v),w=Math.max(d,p,m),M=Math.max(_,g,v),S=nm(y,b,t,i,r),D=nm(w,M,t,i,r);let B=o.prevZ,C=o.nextZ;for(;B&&B.z>=S&&C&&C.z<=D;){if(B.x>=y&&B.x<=w&&B.y>=b&&B.y<=M&&B!==l&&B!==h&&Cl(d,_,p,g,m,v,B.x,B.y)&&un(B.prev,B,B.next)>=0||(B=B.prevZ,C.x>=y&&C.x<=w&&C.y>=b&&C.y<=M&&C!==l&&C!==h&&Cl(d,_,p,g,m,v,C.x,C.y)&&un(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;B&&B.z>=S;){if(B.x>=y&&B.x<=w&&B.y>=b&&B.y<=M&&B!==l&&B!==h&&Cl(d,_,p,g,m,v,B.x,B.y)&&un(B.prev,B,B.next)>=0)return!1;B=B.prevZ}for(;C&&C.z<=D;){if(C.x>=y&&C.x<=w&&C.y>=b&&C.y<=M&&C!==l&&C!==h&&Cl(d,_,p,g,m,v,C.x,C.y)&&un(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function C1(o,t){let i=o;do{const r=i.prev,l=i.next.next;!go(r,l)&&BS(r,i,i.next,l)&&Vl(r,l)&&Vl(l,r)&&(t.push(r.i,i.i,l.i),Xl(i),Xl(i.next),i=o=l),i=i.next}while(i!==o);return $r(i)}function w1(o,t,i,r,l,u){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&B1(h,d)){let p=FS(h,d);h=$r(h,h.next),p=$r(p,p.next),Gl(h,t,i,r,l,u,0),Gl(p,t,i,r,l,u,0);return}d=d.next}h=h.next}while(h!==o)}function D1(o,t,i,r){const l=[];for(let u=0,h=t.length;u<h;u++){const d=t[u]*r,p=u<h-1?t[u+1]*r:o.length,m=IS(o,d,p,r,!1);m===m.next&&(m.steiner=!0),l.push(z1(m))}l.sort(N1);for(let u=0;u<l.length;u++)i=U1(l[u],i);return i}function N1(o,t){let i=o.x-t.x;if(i===0&&(i=o.y-t.y,i===0)){const r=(o.next.y-o.y)/(o.next.x-o.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=r-l}return i}function U1(o,t){const i=L1(o,t);if(!i)return t;const r=FS(i,o);return $r(r,r.next),$r(i,i.next)}function L1(o,t){let i=t;const r=o.x,l=o.y;let u=-1/0,h;if(go(o,i))return i;do{if(go(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=r&&g>u&&(u=g,h=i.x<i.next.x?i:i.next,g===r))return h}i=i.next}while(i!==t);if(!h)return null;const d=h,p=h.x,m=h.y;let _=1/0;i=h;do{if(r>=i.x&&i.x>=p&&r!==i.x&&zS(l<m?r:u,l,p,m,l<m?u:r,l,i.x,i.y)){const g=Math.abs(l-i.y)/(r-i.x);Vl(i,o)&&(g<_||g===_&&(i.x>h.x||i.x===h.x&&O1(h,i)))&&(h=i,_=g)}i=i.next}while(i!==d);return h}function O1(o,t){return un(o.prev,o,t.prev)<0&&un(t.next,o,o.next)<0}function P1(o,t,i,r){let l=o;do l.z===0&&(l.z=nm(l.x,l.y,t,i,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,I1(l)}function I1(o){let t,i=1;do{let r=o,l;o=null;let u=null;for(t=0;r;){t++;let h=r,d=0;for(let m=0;m<i&&(d++,h=h.nextZ,!!h);m++);let p=i;for(;d>0||p>0&&h;)d!==0&&(p===0||!h||r.z<=h.z)?(l=r,r=r.nextZ,d--):(l=h,h=h.nextZ,p--),u?u.nextZ=l:o=l,l.prevZ=u,u=l;r=h}u.nextZ=null,i*=2}while(t>1);return o}function nm(o,t,i,r,l){return o=(o-i)*l|0,t=(t-r)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function z1(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function zS(o,t,i,r,l,u,h,d){return(l-h)*(t-d)>=(o-h)*(u-d)&&(o-h)*(r-d)>=(i-h)*(t-d)&&(i-h)*(u-d)>=(l-h)*(r-d)}function Cl(o,t,i,r,l,u,h,d){return!(o===h&&t===d)&&zS(o,t,i,r,l,u,h,d)}function B1(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!F1(o,t)&&(Vl(o,t)&&Vl(t,o)&&H1(o,t)&&(un(o.prev,o,t.prev)||un(o,t.prev,t))||go(o,t)&&un(o.prev,o,o.next)>0&&un(t.prev,t,t.next)>0)}function un(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function go(o,t){return o.x===t.x&&o.y===t.y}function BS(o,t,i,r){const l=Lc(un(o,t,i)),u=Lc(un(o,t,r)),h=Lc(un(i,r,o)),d=Lc(un(i,r,t));return!!(l!==u&&h!==d||l===0&&Uc(o,i,t)||u===0&&Uc(o,r,t)||h===0&&Uc(i,o,r)||d===0&&Uc(i,t,r))}function Uc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function Lc(o){return o>0?1:o<0?-1:0}function F1(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&BS(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function Vl(o,t){return un(o.prev,o,o.next)<0?un(o,t,o.next)>=0&&un(o,o.prev,t)>=0:un(o,t,o.prev)<0||un(o,o.next,t)<0}function H1(o,t){let i=o,r=!1;const l=(o.x+t.x)/2,u=(o.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==o);return r}function FS(o,t){const i=im(o.i,o.x,o.y),r=im(t.i,t.x,t.y),l=o.next,u=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,r.next=i,i.prev=r,u.next=r,r.prev=u,r}function Tx(o,t,i,r){const l=im(o,t,i);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Xl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function im(o,t,i){return{i:o,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G1(o,t,i,r){let l=0;for(let u=t,h=i-r;u<i;u+=r)l+=(o[h]-o[u])*(o[u+1]+o[h+1]),h=u;return l}class V1{static triangulate(t,i,r=2){return b1(t,i,r)}}class uo{static area(t){const i=t.length;let r=0;for(let l=i-1,u=0;u<i;l=u++)r+=t[l].x*t[u].y-t[u].x*t[l].y;return r*.5}static isClockWise(t){return uo.area(t)<0}static triangulateShape(t,i){const r=[],l=[],u=[];bx(t),Ax(r,t);let h=t.length;i.forEach(bx);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,Ax(r,i[p]);const d=V1.triangulate(r,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function bx(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Ax(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class Rm extends gi{constructor(t=new PS([new Wt(.5,.5),new Wt(-.5,.5),new Wt(-.5,-.5),new Wt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const r=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];h(m)}this.setAttribute("position",new Sn(l,3)),this.setAttribute("uv",new Sn(u,2)),this.computeVertexNormals();function h(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,_=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let v=i.bevelEnabled!==void 0?i.bevelEnabled:!0,y=i.bevelThickness!==void 0?i.bevelThickness:.2,b=i.bevelSize!==void 0?i.bevelSize:y-.1,w=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const S=i.extrudePath,D=i.UVGenerator!==void 0?i.UVGenerator:X1;let B,C=!1,N,L,P,T;if(S){B=S.getSpacedPoints(_),C=!0,v=!1;const Tt=S.isCatmullRomCurve3?S.closed:!1;N=S.computeFrenetFrames(_,Tt),L=new j,P=new j,T=new j}v||(M=0,y=0,b=0,w=0);const O=d.extractPoints(m);let z=O.shape;const V=O.holes;if(!uo.isClockWise(z)){z=z.reverse();for(let Tt=0,wt=V.length;Tt<wt;Tt++){const Ct=V[Tt];uo.isClockWise(Ct)&&(V[Tt]=Ct.reverse())}}function rt(Tt){const Ct=10000000000000001e-36;let bt=Tt[0];for(let At=1;At<=Tt.length;At++){const ee=At%Tt.length,ne=Tt[ee],ae=ne.x-bt.x,fe=ne.y-bt.y,H=ae*ae+fe*fe,Me=Math.max(Math.abs(ne.x),Math.abs(ne.y),Math.abs(bt.x),Math.abs(bt.y)),ge=Ct*Me*Me;if(H<=ge){Tt.splice(ee,1),At--;continue}bt=ne}}rt(z),V.forEach(rt);const q=V.length,Z=z;for(let Tt=0;Tt<q;Tt++){const wt=V[Tt];z=z.concat(wt)}function k(Tt,wt,Ct){return wt||Ge("ExtrudeGeometry: vec does not exist"),Tt.clone().addScaledVector(wt,Ct)}const W=z.length;function ct(Tt,wt,Ct){let bt,At,ee;const ne=Tt.x-wt.x,ae=Tt.y-wt.y,fe=Ct.x-Tt.x,H=Ct.y-Tt.y,Me=ne*ne+ae*ae,ge=ne*H-ae*fe;if(Math.abs(ge)>Number.EPSILON){const U=Math.sqrt(Me),E=Math.sqrt(fe*fe+H*H),nt=wt.x-ae/U,it=wt.y+ne/U,mt=Ct.x-H/E,Nt=Ct.y+fe/E,Bt=((mt-nt)*H-(Nt-it)*fe)/(ne*H-ae*fe);bt=nt+ne*Bt-Tt.x,At=it+ae*Bt-Tt.y;const vt=bt*bt+At*At;if(vt<=2)return new Wt(bt,At);ee=Math.sqrt(vt/2)}else{let U=!1;ne>Number.EPSILON?fe>Number.EPSILON&&(U=!0):ne<-Number.EPSILON?fe<-Number.EPSILON&&(U=!0):Math.sign(ae)===Math.sign(H)&&(U=!0),U?(bt=-ae,At=ne,ee=Math.sqrt(Me)):(bt=ne,At=ae,ee=Math.sqrt(Me/2))}return new Wt(bt/ee,At/ee)}const st=[];for(let Tt=0,wt=Z.length,Ct=wt-1,bt=Tt+1;Tt<wt;Tt++,Ct++,bt++)Ct===wt&&(Ct=0),bt===wt&&(bt=0),st[Tt]=ct(Z[Tt],Z[Ct],Z[bt]);const pt=[];let xt,Pt=st.concat();for(let Tt=0,wt=q;Tt<wt;Tt++){const Ct=V[Tt];xt=[];for(let bt=0,At=Ct.length,ee=At-1,ne=bt+1;bt<At;bt++,ee++,ne++)ee===At&&(ee=0),ne===At&&(ne=0),xt[bt]=ct(Ct[bt],Ct[ee],Ct[ne]);pt.push(xt),Pt=Pt.concat(xt)}let qt;if(M===0)qt=uo.triangulateShape(Z,V);else{const Tt=[],wt=[];for(let Ct=0;Ct<M;Ct++){const bt=Ct/M,At=y*Math.cos(bt*Math.PI/2),ee=b*Math.sin(bt*Math.PI/2)+w;for(let ne=0,ae=Z.length;ne<ae;ne++){const fe=k(Z[ne],st[ne],ee);Rt(fe.x,fe.y,-At),bt===0&&Tt.push(fe)}for(let ne=0,ae=q;ne<ae;ne++){const fe=V[ne];xt=pt[ne];const H=[];for(let Me=0,ge=fe.length;Me<ge;Me++){const U=k(fe[Me],xt[Me],ee);Rt(U.x,U.y,-At),bt===0&&H.push(U)}bt===0&&wt.push(H)}}qt=uo.triangulateShape(Tt,wt)}const F=qt.length,gt=b+w;for(let Tt=0;Tt<W;Tt++){const wt=v?k(z[Tt],Pt[Tt],gt):z[Tt];C?(P.copy(N.normals[0]).multiplyScalar(wt.x),L.copy(N.binormals[0]).multiplyScalar(wt.y),T.copy(B[0]).add(P).add(L),Rt(T.x,T.y,T.z)):Rt(wt.x,wt.y,0)}for(let Tt=1;Tt<=_;Tt++)for(let wt=0;wt<W;wt++){const Ct=v?k(z[wt],Pt[wt],gt):z[wt];C?(P.copy(N.normals[Tt]).multiplyScalar(Ct.x),L.copy(N.binormals[Tt]).multiplyScalar(Ct.y),T.copy(B[Tt]).add(P).add(L),Rt(T.x,T.y,T.z)):Rt(Ct.x,Ct.y,g/_*Tt)}for(let Tt=M-1;Tt>=0;Tt--){const wt=Tt/M,Ct=y*Math.cos(wt*Math.PI/2),bt=b*Math.sin(wt*Math.PI/2)+w;for(let At=0,ee=Z.length;At<ee;At++){const ne=k(Z[At],st[At],bt);Rt(ne.x,ne.y,g+Ct)}for(let At=0,ee=V.length;At<ee;At++){const ne=V[At];xt=pt[At];for(let ae=0,fe=ne.length;ae<fe;ae++){const H=k(ne[ae],xt[ae],bt);C?Rt(H.x,H.y+B[_-1].y,B[_-1].x+Ct):Rt(H.x,H.y,g+Ct)}}}Ut(),K();function Ut(){const Tt=l.length/3;if(v){let wt=0,Ct=W*wt;for(let bt=0;bt<F;bt++){const At=qt[bt];Ht(At[2]+Ct,At[1]+Ct,At[0]+Ct)}wt=_+M*2,Ct=W*wt;for(let bt=0;bt<F;bt++){const At=qt[bt];Ht(At[0]+Ct,At[1]+Ct,At[2]+Ct)}}else{for(let wt=0;wt<F;wt++){const Ct=qt[wt];Ht(Ct[2],Ct[1],Ct[0])}for(let wt=0;wt<F;wt++){const Ct=qt[wt];Ht(Ct[0]+W*_,Ct[1]+W*_,Ct[2]+W*_)}}r.addGroup(Tt,l.length/3-Tt,0)}function K(){const Tt=l.length/3;let wt=0;ht(Z,wt),wt+=Z.length;for(let Ct=0,bt=V.length;Ct<bt;Ct++){const At=V[Ct];ht(At,wt),wt+=At.length}r.addGroup(Tt,l.length/3-Tt,1)}function ht(Tt,wt){let Ct=Tt.length;for(;--Ct>=0;){const bt=Ct;let At=Ct-1;At<0&&(At=Tt.length-1);for(let ee=0,ne=_+M*2;ee<ne;ee++){const ae=W*ee,fe=W*(ee+1),H=wt+bt+ae,Me=wt+At+ae,ge=wt+At+fe,U=wt+bt+fe;_t(H,Me,ge,U)}}}function Rt(Tt,wt,Ct){p.push(Tt),p.push(wt),p.push(Ct)}function Ht(Tt,wt,Ct){Dt(Tt),Dt(wt),Dt(Ct);const bt=l.length/3,At=D.generateTopUV(r,l,bt-3,bt-2,bt-1);Ee(At[0]),Ee(At[1]),Ee(At[2])}function _t(Tt,wt,Ct,bt){Dt(Tt),Dt(wt),Dt(bt),Dt(wt),Dt(Ct),Dt(bt);const At=l.length/3,ee=D.generateSideWallUV(r,l,At-6,At-3,At-2,At-1);Ee(ee[0]),Ee(ee[1]),Ee(ee[3]),Ee(ee[1]),Ee(ee[2]),Ee(ee[3])}function Dt(Tt){l.push(p[Tt*3+0]),l.push(p[Tt*3+1]),l.push(p[Tt*3+2])}function Ee(Tt){u.push(Tt.x),u.push(Tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return k1(i,r,t)}static fromJSON(t,i){const r=[];for(let u=0,h=t.shapes.length;u<h;u++){const d=i[t.shapes[u]];r.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new tm[l.type]().fromJSON(l)),new Rm(r,t.options)}}const X1={generateTopUV:function(o,t,i,r,l){const u=t[i*3],h=t[i*3+1],d=t[r*3],p=t[r*3+1],m=t[l*3],_=t[l*3+1];return[new Wt(u,h),new Wt(d,p),new Wt(m,_)]},generateSideWallUV:function(o,t,i,r,l,u){const h=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[r*3],_=t[r*3+1],g=t[r*3+2],v=t[l*3],y=t[l*3+1],b=t[l*3+2],w=t[u*3],M=t[u*3+1],S=t[u*3+2];return Math.abs(d-_)<Math.abs(h-m)?[new Wt(h,1-p),new Wt(m,1-g),new Wt(v,1-b),new Wt(w,1-S)]:[new Wt(d,1-p),new Wt(_,1-g),new Wt(y,1-b),new Wt(M,1-S)]}};function k1(o,t,i){if(i.shapes=[],Array.isArray(o))for(let r=0,l=o.length;r<l;r++){const u=o[r];i.shapes.push(u.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class vo extends gi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,g=t/d,v=i/p,y=[],b=[],w=[],M=[];for(let S=0;S<_;S++){const D=S*v-h;for(let B=0;B<m;B++){const C=B*g-u;b.push(C,-D,0),w.push(0,0,1),M.push(B/d),M.push(1-S/p)}}for(let S=0;S<p;S++)for(let D=0;D<d;D++){const B=D+m*S,C=D+m*(S+1),N=D+1+m*(S+1),L=D+1+m*S;y.push(B,C,L),y.push(C,N,L)}this.setIndex(y),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(w,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yr extends gi{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const _=[],g=new j,v=new j,y=[],b=[],w=[],M=[];for(let S=0;S<=r;S++){const D=[],B=S/r,C=h+B*d,N=t*Math.cos(C),L=Math.sqrt(t*t-N*N);let P=0;S===0&&h===0?P=.5/i:S===r&&p===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const O=T/i,z=l+O*u;g.x=-L*Math.cos(z),g.y=N,g.z=L*Math.sin(z),b.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),M.push(O+P,1-B),D.push(m++)}_.push(D)}for(let S=0;S<r;S++)for(let D=0;D<i;D++){const B=_[S][D+1],C=_[S][D],N=_[S+1][D],L=_[S+1][D+1];(S!==0||h>0)&&y.push(B,C,L),(S!==r-1||p<Math.PI)&&y.push(C,N,L)}this.setIndex(y),this.setAttribute("position",new Sn(b,3)),this.setAttribute("normal",new Sn(w,3)),this.setAttribute("uv",new Sn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cm extends gi{constructor(t=1,i=.4,r=12,l=48,u=Math.PI*2,h=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:u,thetaStart:h,thetaLength:d},r=Math.floor(r),l=Math.floor(l);const p=[],m=[],_=[],g=[],v=new j,y=new j,b=new j;for(let w=0;w<=r;w++){const M=h+w/r*d;for(let S=0;S<=l;S++){const D=S/l*u;y.x=(t+i*Math.cos(M))*Math.cos(D),y.y=(t+i*Math.cos(M))*Math.sin(D),y.z=i*Math.sin(M),m.push(y.x,y.y,y.z),v.x=t*Math.cos(D),v.y=t*Math.sin(D),b.subVectors(y,v).normalize(),_.push(b.x,b.y,b.z),g.push(S/l),g.push(w/r)}}for(let w=1;w<=r;w++)for(let M=1;M<=l;M++){const S=(l+1)*w+M-1,D=(l+1)*(w-1)+M-1,B=(l+1)*(w-1)+M,C=(l+1)*w+M;p.push(S,D,C),p.push(D,B,C)}this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(_,3)),this.setAttribute("uv",new Sn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function _o(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(Rx(l))l.isRenderTargetTexture?(me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(Rx(l[0])){const u=[];for(let h=0,d=l.length;h<d;h++)u[h]=l[h].clone();t[i][r]=u}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Zn(o){const t={};for(let i=0;i<o.length;i++){const r=_o(o[i]);for(const l in r)t[l]=r[l]}return t}function Rx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function W1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function HS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const q1={clone:_o,merge:Zn};var Y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends So{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y1,this.fragmentShader=Z1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=W1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Fe().setHex(l.value);break;case"v2":this.uniforms[r].value=new Wt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new j().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new ye().fromArray(l.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class K1 extends Vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class co extends So{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class J1 extends So{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new za,this.combine=cm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Q1 extends So{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j1 extends So{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wm extends In{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const lp=new tn,Cx=new j,wx=new j;class GS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tm,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Cx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Cx),wx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(wx),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,l){lp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(lp,t.coordinateSystem,t.reversedDepth);const u=this._frameExtents,h=l?l.z/u.x:1,d=l?l.w/u.y:1,p=l?l.x/u.x:0,m=l?l.y/u.y:0;t.coordinateSystem===Bl||t.reversedDepth?i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),i.multiply(lp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Oc=new j,Pc=new xo,ia=new j;class VS extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oc,Pc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,ia.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Oc,Pc,ia),ia.x===1&&ia.y===1&&ia.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,ia.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new j,Dx=new Wt,Nx=new Wt;class pi extends VS{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fl*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,i){return this.getViewBounds(t,Dx,Nx),i.subVectors(Nx,Dx)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Nl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class $1 extends GS{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class tb extends wm{constructor(t,i,r=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new $1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Dm extends VS{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,h=u+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eb extends GS{constructor(){super(new Dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nb extends wm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new eb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class ib extends wm{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const no=-90,io=1;class ab extends In{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(no,io,t,i);l.layers=this.layers,this.add(l);const u=new pi(no,io,t,i);u.layers=this.layers,this.add(u);const h=new pi(no,io,t,i);h.layers=this.layers,this.add(h);const d=new pi(no,io,t,i);d.layers=this.layers,this.add(d);const p=new pi(no,io,t,i);p.layers=this.layers,this.add(p);const m=new pi(no,io,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,p]=i;for(const m of i)this.remove(m);if(t===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,m,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,u),t.setRenderTarget(r,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(g,v,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class rb extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ux=new tn;class sb{constructor(t,i,r=0,l=1/0){this.ray=new RS(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Em,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ge("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Ux.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ux),this}intersectObject(t,i=!0,r=[]){return am(t,this,r,i),r.sort(Lx),r}intersectObjects(t,i=!0,r=[]){for(let l=0,u=t.length;l<u;l++)am(t[l],this,r,i);return r.sort(Lx),r}}function Lx(o,t){return o.distance-t.distance}function am(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const u=o.children;for(let h=0,d=u.length;h<d;h++)am(u[h],t,i,!0)}}const Pm=class Pm{constructor(t,i,r,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,l){const u=this.elements;return u[0]=t,u[2]=i,u[1]=r,u[3]=l,this}};Pm.prototype.isMatrix2=!0;let Ox=Pm;function Px(o,t,i,r){const l=ob(r);switch(i){case xS:return o*t;case mm:return o*t/l.components*l.byteLength;case gm:return o*t/l.components*l.byteLength;case jr:return o*t*2/l.components*l.byteLength;case vm:return o*t*2/l.components*l.byteLength;case SS:return o*t*3/l.components*l.byteLength;case Hi:return o*t*4/l.components*l.byteLength;case _m:return o*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bp:case Rp:return Math.max(o,16)*Math.max(t,8)/4;case Tp:case Ap:return Math.max(o,8)*Math.max(t,8)/2;case Cp:case wp:case Np:case Up:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Dp:case Wc:case Lp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case zp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Vp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case kp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case qp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Yp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Zp:case Kp:case Jp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Qp:case jp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case qc:case $p:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ob(o){switch(o){case mi:case mS:return{byteLength:1,components:1};case Il:case gS:case ca:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case ua:case hm:case Fi:return{byteLength:4,components:1};case vS:case _S:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XS(){let o=null,t=!1,i=null,r=null;function l(u,h){r=o.requestAnimationFrame(l),i(u,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function lb(o){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,m,_),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const _=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,_);else{g.sort((y,b)=>y.start-b.start);let v=0;for(let y=1;y<g.length;y++){const b=g[v],w=g[y];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,g[v]=w)}g.length=v+1;for(let y=0,b=g.length;y<b;y++){const w=g[y];o.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:h}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,db=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,UA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,FA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_R=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ER=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ae={alphahash_fragment:ub,alphahash_pars_fragment:cb,alphamap_fragment:fb,alphamap_pars_fragment:hb,alphatest_fragment:db,alphatest_pars_fragment:pb,aomap_fragment:mb,aomap_pars_fragment:gb,batching_pars_vertex:vb,batching_vertex:_b,begin_vertex:xb,beginnormal_vertex:Sb,bsdfs:yb,iridescence_fragment:Mb,bumpmap_pars_fragment:Eb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:wb,color_pars_vertex:Db,color_vertex:Nb,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ib,emissivemap_fragment:zb,emissivemap_pars_fragment:Bb,colorspace_fragment:Fb,colorspace_pars_fragment:Hb,envmap_fragment:Gb,envmap_common_pars_fragment:Vb,envmap_pars_fragment:Xb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:eA,envmap_vertex:Wb,fog_vertex:qb,fog_pars_vertex:Yb,fog_fragment:Zb,fog_pars_fragment:Kb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Qb,lights_lambert_fragment:jb,lights_lambert_pars_fragment:$b,lights_pars_begin:tA,lights_toon_fragment:nA,lights_toon_pars_fragment:iA,lights_phong_fragment:aA,lights_phong_pars_fragment:rA,lights_physical_fragment:sA,lights_physical_pars_fragment:oA,lights_fragment_begin:lA,lights_fragment_maps:uA,lights_fragment_end:cA,lightprobes_pars_fragment:fA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:dA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:mA,map_fragment:gA,map_pars_fragment:vA,map_particle_fragment:_A,map_particle_pars_fragment:xA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:yA,morphinstance_vertex:MA,morphcolor_vertex:EA,morphnormal_vertex:TA,morphtarget_pars_vertex:bA,morphtarget_vertex:AA,normal_fragment_begin:RA,normal_fragment_maps:CA,normal_pars_fragment:wA,normal_pars_vertex:DA,normal_vertex:NA,normalmap_pars_fragment:UA,clearcoat_normal_fragment_begin:LA,clearcoat_normal_fragment_maps:OA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:IA,opaque_fragment:zA,packing:BA,premultiplied_alpha_fragment:FA,project_vertex:HA,dithering_fragment:GA,dithering_pars_fragment:VA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:kA,shadowmap_pars_fragment:WA,shadowmap_pars_vertex:qA,shadowmap_vertex:YA,shadowmask_pars_fragment:ZA,skinbase_vertex:KA,skinning_pars_vertex:JA,skinning_vertex:QA,skinnormal_vertex:jA,specularmap_fragment:$A,specularmap_pars_fragment:tR,tonemapping_fragment:eR,tonemapping_pars_fragment:nR,transmission_fragment:iR,transmission_pars_fragment:aR,uv_pars_fragment:rR,uv_pars_vertex:sR,uv_vertex:oR,worldpos_vertex:lR,background_vert:uR,background_frag:cR,backgroundCube_vert:fR,backgroundCube_frag:hR,cube_vert:dR,cube_frag:pR,depth_vert:mR,depth_frag:gR,distance_vert:vR,distance_frag:_R,equirect_vert:xR,equirect_frag:SR,linedashed_vert:yR,linedashed_frag:MR,meshbasic_vert:ER,meshbasic_frag:TR,meshlambert_vert:bR,meshlambert_frag:AR,meshmatcap_vert:RR,meshmatcap_frag:CR,meshnormal_vert:wR,meshnormal_frag:DR,meshphong_vert:NR,meshphong_frag:UR,meshphysical_vert:LR,meshphysical_frag:OR,meshtoon_vert:PR,meshtoon_frag:IR,points_vert:zR,points_frag:BR,shadow_vert:FR,shadow_frag:HR,sprite_vert:GR,sprite_frag:VR},Jt={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ra={basic:{uniforms:Zn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:Zn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:Zn([Jt.common,Jt.specularmap,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,Jt.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:Zn([Jt.common,Jt.envmap,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.roughnessmap,Jt.metalnessmap,Jt.fog,Jt.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:Zn([Jt.common,Jt.aomap,Jt.lightmap,Jt.emissivemap,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.gradientmap,Jt.fog,Jt.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:Zn([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,Jt.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:Zn([Jt.points,Jt.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:Zn([Jt.common,Jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:Zn([Jt.common,Jt.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:Zn([Jt.common,Jt.bumpmap,Jt.normalmap,Jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:Zn([Jt.sprite,Jt.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Ae.backgroundCube_vert,fragmentShader:Ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distance:{uniforms:Zn([Jt.common,Jt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distance_vert,fragmentShader:Ae.distance_frag},shadow:{uniforms:Zn([Jt.lights,Jt.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};ra.physical={uniforms:Zn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};const Ic={r:0,b:0,g:0},XR=new tn,kS=new ye;kS.set(-1,0,0,0,1,0,0,0,1);function kR(o,t,i,r,l,u){const h=new Fe(0);let d=l===!0?0:1,p,m,_=null,g=0,v=null;function y(D){let B=D.isScene===!0?D.background:null;if(B&&B.isTexture){const C=D.backgroundBlurriness>0;B=t.get(B,C)}return B}function b(D){let B=!1;const C=y(D);C===null?M(h,d):C&&C.isColor&&(M(C,1),B=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(o.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(D,B){const C=y(B);C&&(C.isCubeTexture||C.mapping===$c)?(m===void 0&&(m=new ke(new is(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:_o(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=C,m.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(XR.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(kS),m.material.toneMapped=Be.getTransfer(C.colorSpace)!==Je,(_!==C||g!==C.version||v!==o.toneMapping)&&(m.material.needsUpdate=!0,_=C,g=C.version,v=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new ke(new vo(2,2),new Vi({name:"BackgroundMaterial",uniforms:_o(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Be.getTransfer(C.colorSpace)!==Je,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||g!==C.version||v!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,g=C.version,v=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function M(D,B){D.getRGB(Ic,HS(o)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,B,u)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,B=1){h.set(D),d=B,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(h,d)},render:b,addToRenderList:w,dispose:S}}function WR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(V,J,rt,q,Z){let k=!1;const W=g(V,q,rt,J);u!==W&&(u=W,m(u.object)),k=y(V,q,rt,Z),k&&b(V,q,rt,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,C(V,J,rt,q),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return o.createVertexArray()}function m(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function g(V,J,rt,q){const Z=q.wireframe===!0;let k=r[J.id];k===void 0&&(k={},r[J.id]=k);const W=V.isInstancedMesh===!0?V.id:0;let ct=k[W];ct===void 0&&(ct={},k[W]=ct);let st=ct[rt.id];st===void 0&&(st={},ct[rt.id]=st);let pt=st[Z];return pt===void 0&&(pt=v(p()),st[Z]=pt),pt}function v(V){const J=[],rt=[],q=[];for(let Z=0;Z<i;Z++)J[Z]=0,rt[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:rt,attributeDivisors:q,object:V,attributes:{},index:null}}function y(V,J,rt,q){const Z=u.attributes,k=J.attributes;let W=0;const ct=rt.getAttributes();for(const st in ct)if(ct[st].location>=0){const xt=Z[st];let Pt=k[st];if(Pt===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(Pt=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(Pt=V.instanceColor)),xt===void 0||xt.attribute!==Pt||Pt&&xt.data!==Pt.data)return!0;W++}return u.attributesNum!==W||u.index!==q}function b(V,J,rt,q){const Z={},k=J.attributes;let W=0;const ct=rt.getAttributes();for(const st in ct)if(ct[st].location>=0){let xt=k[st];xt===void 0&&(st==="instanceMatrix"&&V.instanceMatrix&&(xt=V.instanceMatrix),st==="instanceColor"&&V.instanceColor&&(xt=V.instanceColor));const Pt={};Pt.attribute=xt,xt&&xt.data&&(Pt.data=xt.data),Z[st]=Pt,W++}u.attributes=Z,u.attributesNum=W,u.index=q}function w(){const V=u.newAttributes;for(let J=0,rt=V.length;J<rt;J++)V[J]=0}function M(V){S(V,0)}function S(V,J){const rt=u.newAttributes,q=u.enabledAttributes,Z=u.attributeDivisors;rt[V]=1,q[V]===0&&(o.enableVertexAttribArray(V),q[V]=1),Z[V]!==J&&(o.vertexAttribDivisor(V,J),Z[V]=J)}function D(){const V=u.newAttributes,J=u.enabledAttributes;for(let rt=0,q=J.length;rt<q;rt++)J[rt]!==V[rt]&&(o.disableVertexAttribArray(rt),J[rt]=0)}function B(V,J,rt,q,Z,k,W){W===!0?o.vertexAttribIPointer(V,J,rt,Z,k):o.vertexAttribPointer(V,J,rt,q,Z,k)}function C(V,J,rt,q){w();const Z=q.attributes,k=rt.getAttributes(),W=J.defaultAttributeValues;for(const ct in k){const st=k[ct];if(st.location>=0){let pt=Z[ct];if(pt===void 0&&(ct==="instanceMatrix"&&V.instanceMatrix&&(pt=V.instanceMatrix),ct==="instanceColor"&&V.instanceColor&&(pt=V.instanceColor)),pt!==void 0){const xt=pt.normalized,Pt=pt.itemSize,qt=t.get(pt);if(qt===void 0)continue;const F=qt.buffer,gt=qt.type,Ut=qt.bytesPerElement,K=gt===o.INT||gt===o.UNSIGNED_INT||pt.gpuType===hm;if(pt.isInterleavedBufferAttribute){const ht=pt.data,Rt=ht.stride,Ht=pt.offset;if(ht.isInstancedInterleavedBuffer){for(let _t=0;_t<st.locationSize;_t++)S(st.location+_t,ht.meshPerAttribute);V.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let _t=0;_t<st.locationSize;_t++)M(st.location+_t);o.bindBuffer(o.ARRAY_BUFFER,F);for(let _t=0;_t<st.locationSize;_t++)B(st.location+_t,Pt/st.locationSize,gt,xt,Rt*Ut,(Ht+Pt/st.locationSize*_t)*Ut,K)}else{if(pt.isInstancedBufferAttribute){for(let ht=0;ht<st.locationSize;ht++)S(st.location+ht,pt.meshPerAttribute);V.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ht=0;ht<st.locationSize;ht++)M(st.location+ht);o.bindBuffer(o.ARRAY_BUFFER,F);for(let ht=0;ht<st.locationSize;ht++)B(st.location+ht,Pt/st.locationSize,gt,xt,Pt*Ut,Pt/st.locationSize*ht*Ut,K)}}else if(W!==void 0){const xt=W[ct];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(st.location,xt);break;case 3:o.vertexAttrib3fv(st.location,xt);break;case 4:o.vertexAttrib4fv(st.location,xt);break;default:o.vertexAttrib1fv(st.location,xt)}}}}D()}function N(){O();for(const V in r){const J=r[V];for(const rt in J){const q=J[rt];for(const Z in q){const k=q[Z];for(const W in k)_(k[W].object),delete k[W];delete q[Z]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const J=r[V.id];for(const rt in J){const q=J[rt];for(const Z in q){const k=q[Z];for(const W in k)_(k[W].object),delete k[W];delete q[Z]}}delete r[V.id]}function P(V){for(const J in r){const rt=r[J];for(const q in rt){const Z=rt[q];if(Z[V.id]===void 0)continue;const k=Z[V.id];for(const W in k)_(k[W].object),delete k[W];delete Z[V.id]}}}function T(V){for(const J in r){const rt=r[J],q=V.isInstancedMesh===!0?V.id:0,Z=rt[q];if(Z!==void 0){for(const k in Z){const W=Z[k];for(const ct in W)_(W[ct].object),delete W[ct];delete Z[k]}delete rt[q],Object.keys(rt).length===0&&delete r[J]}}}function O(){z(),h=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:z,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function qR(o,t,i){let r;function l(p){r=p}function u(p,m){o.drawArrays(r,p,m),i.update(m,r,1)}function h(p,m,_){_!==0&&(o.drawArraysInstanced(r,p,m,_),i.update(m,r,_))}function d(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let v=0;for(let y=0;y<_;y++)v+=m[y];i.update(v,r,1)}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function YR(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Hi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const T=P===ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==mi&&P!==Fi&&!T&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(me("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&me("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:D,maxVaryings:B,maxFragmentUniforms:C,maxSamples:N,samples:L}}function ZR(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new vr,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||r!==0||l;return l=v,r=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,y){const b=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,S=o.get(g);if(!l||b===null||b.length===0||u&&!M)u?_(null):m();else{const D=u?0:r,B=D*4;let C=S.clippingState||null;p.value=C,C=_(b,v,B,y);for(let N=0;N!==B;++N)C[N]=i[N];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,v,y,b){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=p.value,b!==!0||M===null){const S=y+w*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<S)&&(M=new Float32Array(S));for(let B=0,C=y;B!==w;++B,C+=4)h.copy(g[B]).applyMatrix4(D,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const fo=4,KR=6,JR=20,QR=256,bl=new Dm,Ix=new Fe;let up=null,cp=0,fp=0,hp=!1;const jR=new j,qr=new j;class rm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=jR}=u;up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(up,cp,fp),this._renderer.xr.enabled=hp,t.scissorTest=!1,ao(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qr||t.mapping===mo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),up=this._renderer.getRenderTarget(),cp=this._renderer.getActiveCubeFace(),fp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:ca,format:Hi,colorSpace:Zc,depthBuffer:!1},l=zx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$R(u)),this._blurMaterial=e3(u,t,i),this._ggxMaterial=t3(u,t,i)}return l}_compileMaterial(t){const i=new ke(new gi,t);this._renderer.compile(i,bl)}_sceneToCubeUV(t,i,r,l,u){const p=new pi(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(Ix),g.toneMapping=oa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new is,new Qc({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const D=t.background;D?D.isColor&&(M.color.copy(D),t.background=null,S=!0):(M.color.copy(Ix),S=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[B],u.y,u.z)):C===1?(p.up.set(0,0,m[B]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[B],u.z)):(p.up.set(0,m[B],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[B]));const N=this._cubeSize;ao(l,C*N,B>2?N:0,N,N),g.setRenderTarget(l),S&&g.render(w,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=D}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Qr||t.mapping===mo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bx());const u=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=u;const d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;ao(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,bl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(m*m-_*_),v=m*1.25,y=g*v,{_lodMax:b}=this,w=this._sizeLods[r],M=3*w*(r>b-fo?r-b+fo:0),S=4*(this._cubeSize-w);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=b-i,ao(u,M,S,3*w,2*w),l.setRenderTarget(u),l.render(d,bl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=b-r,ao(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,bl)}_blur(t,i,r,l){const u=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,u,i,r,h),this._blurPass(u,t,r,r,h)}_blurPass(t,i,r,l,u){const h=this._renderer,d=this._blurMaterial,p=this._lodMeshes[l];p.material=d;const m=d.uniforms;m.envMap.value=t.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const _=this._sizeLods[l],g=3*_*(l>this._lodMax-fo?l-this._lodMax+fo:0),v=4*(this._cubeSize-_);ao(i,g,v,3*_,2*_),h.setRenderTarget(i),h.render(p,bl)}}function $R(o){const t=[],i=[];let r=o;const l=o-fo+1+KR;for(let u=0;u<l;u++){const h=Math.pow(2,r);t.push(h);const d=1/(h-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],g=6,v=6,y=3,b=new Float32Array(y*v*g),w=new Float32Array(y*v*g);for(let S=0;S<g;S++){const D=S%3*2/3-1,B=S>2?0:-1,C=[D,B,0,D+2/3,B,0,D+2/3,B+1,0,D,B,0,D+2/3,B+1,0,D,B+1,0];b.set(C,y*v*S);for(let N=0;N<v;N++){const L=_[N*2]*2-1,P=_[N*2+1]*2-1;S===0?qr.set(1,P,L):S===1?qr.set(-L,1,-P):S===2?qr.set(-L,P,1):S===3?qr.set(-1,P,-L):S===4?qr.set(-L,-1,P):qr.set(L,P,-1),qr.toArray(w,(S*v+N)*y)}}const M=new gi;M.setAttribute("position",new la(b,y)),M.setAttribute("outputDirection",new la(w,y)),i.push(new ke(M,null)),r>fo&&r--}return{lodMeshes:i,sizeLods:t}}function zx(o,t,i){const r=new Gi(o,t,i);return r.texture.mapping=$c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function t3(o,t,i){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function e3(o,t,i){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:JR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ef(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Bx(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Fx(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function ef(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class WS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new wS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new is(5,5,5),u=new Vi({name:"CubemapFromEquirect",uniforms:_o(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Oa});u.uniforms.tEquirect.value=i;const h=new ke(l,u),d=i.minFilter;return i.minFilter===Zr&&(i.minFilter=Hn),new ab(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}function n3(o){let t=new WeakMap,i=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?h(v):u(v)}function u(v){if(v&&v.isTexture){const y=v.mapping;if(y===Pd||y===Id)if(t.has(v)){const b=t.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new WS(b.height);return w.fromEquirectangularTexture(o,v),t.set(v,w),v.addEventListener("dispose",m),d(w.texture,v.mapping)}else return null}}return v}function h(v){if(v&&v.isTexture){const y=v.mapping,b=y===Pd||y===Id,w=y===Qr||y===mo;if(b||w){let M=i.get(v);const S=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return r===null&&(r=new rm(o)),M=b?r.fromEquirectangular(v,M):r.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const D=v.image;return b&&D&&D.height>0||w&&D&&p(D)?(r===null&&(r=new rm(o)),M=b?r.fromEquirectangular(v):r.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",_),M.texture):null}}}return v}function d(v,y){return y===Pd?v.mapping=Qr:y===Id&&(v.mapping=mo),v}function p(v){let y=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&y++;return y===b}function m(v){const y=v.target;y.removeEventListener("dispose",m);const b=t.get(y);b!==void 0&&(t.delete(y),b.dispose())}function _(v){const y=v.target;y.removeEventListener("dispose",_);const b=i.get(y);b!==void 0&&(i.delete(y),b.dispose())}function g(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:g}}function i3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ho("WebGLRenderer: "+r+" extension not supported."),l}}}function a3(o,t,i,r){const l={},u=new WeakMap;function h(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function m(g){const v=[],y=g.index,b=g.attributes.position;let w=0;if(b===void 0)return;if(y!==null){const D=y.array;w=y.version;for(let B=0,C=D.length;B<C;B+=3){const N=D[B+0],L=D[B+1],P=D[B+2];v.push(N,L,L,P,P,N)}}else{const D=b.array;w=b.version;for(let B=0,C=D.length/3-1;B<C;B+=3){const N=B+0,L=B+1,P=B+2;v.push(N,L,L,P,P,N)}}const M=new(b.count>=65535?AS:bS)(v,1);M.version=w;const S=u.get(g);S&&t.remove(S),u.set(g,M)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function r3(o,t,i){let r;function l(g){r=g}let u,h;function d(g){u=g.type,h=g.bytesPerElement}function p(g,v){o.drawElements(r,v,u,g*h),i.update(v,r,1)}function m(g,v,y){y!==0&&(o.drawElementsInstanced(r,v,u,g*h,y),i.update(v,r,y))}function _(g,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,u,g,0,y);let w=0;for(let M=0;M<y;M++)w+=v[M];i.update(w,r,1)}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function s3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:Ge("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function o3(o,t,i){const r=new WeakMap,l=new ln;function u(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let z=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var y=z;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let N=d.attributes.position.count*C,L=1;N>t.maxTextureSize&&(L=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const P=new Float32Array(N*L*4*g),T=new MS(P,N,L,g);T.type=Fi,T.needsUpdate=!0;const O=C*4;for(let V=0;V<g;V++){const J=S[V],rt=D[V],q=B[V],Z=N*L*4*V;for(let k=0;k<J.count;k++){const W=k*O;b===!0&&(l.fromBufferAttribute(J,k),P[Z+W+0]=l.x,P[Z+W+1]=l.y,P[Z+W+2]=l.z,P[Z+W+3]=0),w===!0&&(l.fromBufferAttribute(rt,k),P[Z+W+4]=l.x,P[Z+W+5]=l.y,P[Z+W+6]=l.z,P[Z+W+7]=0),M===!0&&(l.fromBufferAttribute(q,k),P[Z+W+8]=l.x,P[Z+W+9]=l.y,P[Z+W+10]=l.z,P[Z+W+11]=q.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new Wt(N,L)},r.set(d,v),d.addEventListener("dispose",z)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<m.length;M++)b+=m[M];const w=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function l3(o,t,i,r,l){let u=new WeakMap;function h(m){const _=l.render.frame,g=m.geometry,v=t.get(m,g);if(u.get(v)!==_&&(t.update(v),u.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==_&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),u.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;u.get(y)!==_&&(y.update(),u.set(y,_))}return v}function d(){u=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:h,dispose:d}}const u3={[lS]:"LINEAR_TONE_MAPPING",[uS]:"REINHARD_TONE_MAPPING",[cS]:"CINEON_TONE_MAPPING",[fm]:"ACES_FILMIC_TONE_MAPPING",[hS]:"AGX_TONE_MAPPING",[dS]:"NEUTRAL_TONE_MAPPING",[fS]:"CUSTOM_TONE_MAPPING"};function c3(o,t,i,r,l,u){const h=new Gi(t,i,{type:o,depthBuffer:l,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new gi;m.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const _=new K1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new ke(m,_),v=new Dm(-1,1,1,-1,0,1);let y=null,b=null,w=!1,M,S=null,D=[],B=!1;this.setSize=function(C,N){h.setSize(C,N),d!==null&&d.setSize(C,N),p!==null&&p.setSize(C,N);for(let L=0;L<D.length;L++){const P=D[L];P.setSize&&P.setSize(C,N)}},this.setEffects=function(C){D=C,B=D.length>0&&D[0].isRenderPass===!0;const N=h.width,L=h.height;D.length>0&&d===null&&(d=new Gi(N,L,{type:ca,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(N,L,{type:ca,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<D.length;P++){const T=D[P];T.setSize&&T.setSize(N,L)}},this.begin=function(C,N){if(w||C.toneMapping===oa&&D.length===0)return!1;if(S=N,N!==null){const L=N.width,P=N.height;(h.width!==L||h.height!==P)&&this.setSize(L,P)}return B===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=oa,!0},this.hasRenderPass=function(){return B},this.end=function(C,N){C.toneMapping=M,w=!0;let L=h,P=d;for(let T=0;T<D.length;T++){const O=D[T];O.enabled!==!1&&(O.render(C,P,L,N),O.needsSwap!==!1&&(L=P,P=P===d?p:d))}if(y!==C.outputColorSpace||b!==C.toneMapping){y=C.outputColorSpace,b=C.toneMapping,_.defines={},Be.getTransfer(y)===Je&&(_.defines.SRGB_TRANSFER="");const T=u3[b];T&&(_.defines[T]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(S),C.render(g,v),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const qS=new Gn,sm=new Hl(1,1),YS=new MS,ZS=new YT,KS=new wS,Hx=[],Gx=[],Vx=new Float32Array(16),Xx=new Float32Array(9),kx=new Float32Array(4);function yo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Hx[l];if(u===void 0&&(u=new Float32Array(l),Hx[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function En(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function nf(o,t){let i=Gx[t];i===void 0&&(i=new Int32Array(t),Gx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function f3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function h3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function d3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(En(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function m3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;kx.set(r),o.uniformMatrix2fv(this.addr,!1,kx),Tn(i,r)}}function g3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Xx.set(r),o.uniformMatrix3fv(this.addr,!1,Xx),Tn(i,r)}}function v3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(En(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(En(i,r))return;Vx.set(r),o.uniformMatrix4fv(this.addr,!1,Vx),Tn(i,r)}}function _3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function x3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function M3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function E3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(En(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(En(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function b3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(En(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function A3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(sm.compareFunction=i.isReversedDepthBuffer()?Sm:xm,u=sm):u=qS,i.setTexture2D(t||u,l)}function R3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||ZS,l)}function C3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||KS,l)}function w3(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||YS,l)}function D3(o){switch(o){case 5126:return f3;case 35664:return h3;case 35665:return d3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return v3;case 5124:case 35670:return _3;case 35667:case 35671:return x3;case 35668:case 35672:return S3;case 35669:case 35673:return y3;case 5125:return M3;case 36294:return E3;case 36295:return T3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return w3}}function N3(o,t){o.uniform1fv(this.addr,t)}function U3(o,t){const i=yo(t,this.size,2);o.uniform2fv(this.addr,i)}function L3(o,t){const i=yo(t,this.size,3);o.uniform3fv(this.addr,i)}function O3(o,t){const i=yo(t,this.size,4);o.uniform4fv(this.addr,i)}function P3(o,t){const i=yo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function I3(o,t){const i=yo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function z3(o,t){const i=yo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function B3(o,t){o.uniform1iv(this.addr,t)}function F3(o,t){o.uniform2iv(this.addr,t)}function H3(o,t){o.uniform3iv(this.addr,t)}function G3(o,t){o.uniform4iv(this.addr,t)}function V3(o,t){o.uniform1uiv(this.addr,t)}function X3(o,t){o.uniform2uiv(this.addr,t)}function k3(o,t){o.uniform3uiv(this.addr,t)}function W3(o,t){o.uniform4uiv(this.addr,t)}function q3(o,t,i){const r=this.cache,l=t.length,u=nf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));let h;this.type===o.SAMPLER_2D_SHADOW?h=sm:h=qS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,u[d])}function Y3(o,t,i){const r=this.cache,l=t.length,u=nf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ZS,u[h])}function Z3(o,t,i){const r=this.cache,l=t.length,u=nf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||KS,u[h])}function K3(o,t,i){const r=this.cache,l=t.length,u=nf(i,l);En(r,u)||(o.uniform1iv(this.addr,u),Tn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||YS,u[h])}function J3(o){switch(o){case 5126:return N3;case 35664:return U3;case 35665:return L3;case 35666:return O3;case 35674:return P3;case 35675:return I3;case 35676:return z3;case 5124:case 35670:return B3;case 35667:case 35671:return F3;case 35668:case 35672:return H3;case 35669:case 35673:return G3;case 5125:return V3;case 36294:return X3;case 36295:return k3;case 36296:return W3;case 35678:case 36198:case 36298:case 36306:case 35682:return q3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return K3}}class Q3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=D3(i.type)}}class j3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=J3(i.type)}}class $3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const dp=/(\w+)(\])?(\[|\.)?/g;function Wx(o,t){o.seq.push(t),o.map[t.id]=t}function tC(o,t,i){const r=o.name,l=r.length;for(dp.lastIndex=0;;){const u=dp.exec(r),h=dp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){Wx(i,m===void 0?new Q3(d,o,t):new j3(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new $3(d),Wx(i,g)),i=g}}}class kc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=t.getActiveUniform(i,h),p=t.getUniformLocation(i,d.name);tC(d,p,this)}const l=[],u=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):u.push(h);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function qx(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const eC=37297;let nC=0;function iC(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Yx=new ye;function aC(o){Be._getMatrix(Yx,Be.workingColorSpace,o);const t=`mat3( ${Yx.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case Kc:return[t,"LinearTransferOETF"];case Je:return[t,"sRGBTransferOETF"];default:return me("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Zx(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+iC(o.getShaderSource(t),d)}else return u}function rC(o,t){const i=aC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sC={[lS]:"Linear",[uS]:"Reinhard",[cS]:"Cineon",[fm]:"ACESFilmic",[hS]:"AgX",[dS]:"Neutral",[fS]:"Custom"};function oC(o,t){const i=sC[t];return i===void 0?(me("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new j;function lC(){Be.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),t=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function cC(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function fC(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function wl(o){return o!==""}function Kx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hC=/^[ \t]*#include +<([\w\d./]+)>/gm;function om(o){return o.replace(hC,pC)}const dC=new Map;function pC(o,t){let i=Ae[t];if(i===void 0){const r=dC.get(t);if(r!==void 0)i=Ae[r],me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return om(i)}const mC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qx(o){return o.replace(mC,gC)}function gC(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function jx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const vC={[Fc]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function _C(o){return vC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xC={[Qr]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[$c]:"ENVMAP_TYPE_CUBE_UV"};function SC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":xC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const yC={[mo]:"ENVMAP_MODE_REFRACTION"};function MC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":yC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const EC={[cm]:"ENVMAP_BLENDING_MULTIPLY",[uT]:"ENVMAP_BLENDING_MIX",[cT]:"ENVMAP_BLENDING_ADD"};function TC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":EC[o.combine]||"ENVMAP_BLENDING_NONE"}function bC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function AC(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=_C(i),m=SC(i),_=MC(i),g=TC(i),v=bC(i),y=uC(i),b=cC(u),w=l.createProgram();let M,S,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wl).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(wl).join(`
`),S.length>0&&(S+=`
`)):(M=[jx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),S=[jx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?Ae.tonemapping_pars_fragment:"",i.toneMapping!==oa?oC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ae.colorspace_pars_fragment,rC("linearToOutputTexel",i.outputColorSpace),lC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wl).join(`
`)),h=om(h),h=Kx(h,i),h=Jx(h,i),d=om(d),d=Kx(d,i),d=Jx(d,i),h=Qx(h),d=Qx(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const B=D+M+h,C=D+S+d,N=qx(l,l.VERTEX_SHADER,B),L=qx(l,l.FRAGMENT_SHADER,C);l.attachShader(w,N),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(V){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",rt=l.getShaderInfoLog(N)||"",q=l.getShaderInfoLog(L)||"",Z=J.trim(),k=rt.trim(),W=q.trim();let ct=!0,st=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,N,L);else{const pt=Zx(l,N,"vertex"),xt=Zx(l,L,"fragment");Ge("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+pt+`
`+xt)}else Z!==""?me("WebGLProgram: Program Info Log:",Z):(k===""||W==="")&&(st=!1);st&&(V.diagnostics={runnable:ct,programLog:Z,vertexShader:{log:k,prefix:M},fragmentShader:{log:W,prefix:S}})}l.deleteShader(N),l.deleteShader(L),T=new kc(l,w),O=fC(l,w)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let z=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=l.getProgramParameter(w,eC)),z},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nC++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=L,this}let RC=0;class CC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new wC(t),i.set(t,r)),r}}class wC{constructor(t){this.id=RC++,this.code=t,this.usedTimes=0}}function DC(o){return o===jr||o===Wc||o===qc}function NC(o,t,i,r,l,u){const h=new Em,d=new CC,p=new Set,m=[],_=new Map,g=r.logarithmicDepthBuffer;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return p.add(T),T===0?"uv":`uv${T}`}function w(T,O,z,V,J,rt){const q=V.fog,Z=J.geometry,k=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,W=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ct=t.get(T.envMap||k,W),st=ct&&ct.mapping===$c?ct.image.height:null,pt=y[T.type];T.precision!==null&&(v=r.getMaxPrecision(T.precision),v!==T.precision&&me("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const xt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=xt!==void 0?xt.length:0;let qt=0;Z.morphAttributes.position!==void 0&&(qt=1),Z.morphAttributes.normal!==void 0&&(qt=2),Z.morphAttributes.color!==void 0&&(qt=3);let F,gt,Ut,K;if(pt){const xe=ra[pt];F=xe.vertexShader,gt=xe.fragmentShader}else{F=T.vertexShader,gt=T.fragmentShader;const xe=d.getVertexShaderStage(T),ve=d.getFragmentShaderStage(T);d.update(T,xe,ve),Ut=xe.id,K=ve.id}const ht=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Ht=J.isInstancedMesh===!0,_t=J.isBatchedMesh===!0,Dt=!!T.map,Ee=!!T.matcap,Tt=!!ct,wt=!!T.aoMap,Ct=!!T.lightMap,bt=!!T.bumpMap&&T.wireframe===!1,At=!!T.normalMap,ee=!!T.displacementMap,ne=!!T.emissiveMap,ae=!!T.metalnessMap,fe=!!T.roughnessMap,H=T.anisotropy>0,Me=T.clearcoat>0,ge=T.dispersion>0,U=T.retroreflectivity>0,E=T.iridescence>0,nt=T.sheen>0,it=T.transmission>0,mt=H&&!!T.anisotropyMap,Nt=Me&&!!T.clearcoatMap,Bt=Me&&!!T.clearcoatNormalMap,vt=Me&&!!T.clearcoatRoughnessMap,Mt=E&&!!T.iridescenceMap,zt=E&&!!T.iridescenceThicknessMap,re=nt&&!!T.sheenColorMap,Vt=nt&&!!T.sheenRoughnessMap,It=!!T.specularMap,Qt=!!T.specularColorMap,ce=!!T.specularIntensityMap,de=it&&!!T.transmissionMap,Y=it&&!!T.thicknessMap,Ft=!!T.gradientMap,St=!!T.alphaMap,Gt=T.alphaTest>0,Yt=!!T.alphaHash,$=!!T.extensions;let Ot=oa;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ot=o.toneMapping);const Lt={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:F,fragmentShader:gt,defines:T.defines,customVertexShaderID:Ut,customFragmentShaderID:K,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:_t,batchingColor:_t&&J._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&J.instanceColor!==null,instancingMorph:Ht&&J.morphTexture!==null,outputColorSpace:ht===null?o.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Dt,matcap:Ee,envMap:Tt,envMapMode:Tt&&ct.mapping,envMapCubeUVHeight:st,aoMap:wt,lightMap:Ct,bumpMap:bt,normalMap:At,displacementMap:ee,emissiveMap:ne,normalMapObjectSpace:At&&T.normalMapType===dT,normalMapTangentSpace:At&&T.normalMapType===Yc,packedNormalMap:At&&T.normalMapType===Yc&&DC(T.normalMap.format),metalnessMap:ae,roughnessMap:fe,anisotropy:H,anisotropyMap:mt,clearcoat:Me,clearcoatMap:Nt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:vt,dispersion:ge,retroreflection:U,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:zt,sheen:nt,sheenColorMap:re,sheenRoughnessMap:Vt,specularMap:It,specularColorMap:Qt,specularIntensityMap:ce,transmission:it,transmissionMap:de,thicknessMap:Y,gradientMap:Ft,opaque:T.transparent===!1&&T.blending===Dl&&T.alphaToCoverage===!1,alphaMap:St,alphaTest:Gt,alphaHash:Yt,combine:T.combine,mapUv:Dt&&b(T.map.channel),aoMapUv:wt&&b(T.aoMap.channel),lightMapUv:Ct&&b(T.lightMap.channel),bumpMapUv:bt&&b(T.bumpMap.channel),normalMapUv:At&&b(T.normalMap.channel),displacementMapUv:ee&&b(T.displacementMap.channel),emissiveMapUv:ne&&b(T.emissiveMap.channel),metalnessMapUv:ae&&b(T.metalnessMap.channel),roughnessMapUv:fe&&b(T.roughnessMap.channel),anisotropyMapUv:mt&&b(T.anisotropyMap.channel),clearcoatMapUv:Nt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:re&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(T.sheenRoughnessMap.channel),specularMapUv:It&&b(T.specularMap.channel),specularColorMapUv:Qt&&b(T.specularColorMap.channel),specularIntensityMapUv:ce&&b(T.specularIntensityMap.channel),transmissionMapUv:de&&b(T.transmissionMap.channel),thicknessMapUv:Y&&b(T.thicknessMap.channel),alphaMapUv:St&&b(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(At||H),vertexNormals:!!Z.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!Z.attributes.uv&&(Dt||St),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&At===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Rt,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:qt,numSunLights:O.sun.length,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numSunLightShadows:O.sunShadowMap.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:rt.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&T.map.isVideoTexture===!0&&Be.getTransfer(T.map.colorSpace)===Je,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Be.getTransfer(T.emissiveMap.colorSpace)===Je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ua,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&T.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Lt.vertexUv1s=p.has(1),Lt.vertexUv2s=p.has(2),Lt.vertexUv3s=p.has(3),p.clear(),Lt}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)O.push(z),O.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(O,T),D(O,T),O.push(o.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numSunLights),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numSunLightShadows),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){h.disableAll(),O.instancing&&h.enable(0),O.instancingColor&&h.enable(1),O.instancingMorph&&h.enable(2),O.matcap&&h.enable(3),O.envMap&&h.enable(4),O.normalMapObjectSpace&&h.enable(5),O.normalMapTangentSpace&&h.enable(6),O.clearcoat&&h.enable(7),O.iridescence&&h.enable(8),O.alphaTest&&h.enable(9),O.vertexColors&&h.enable(10),O.vertexAlphas&&h.enable(11),O.vertexUv1s&&h.enable(12),O.vertexUv2s&&h.enable(13),O.vertexUv3s&&h.enable(14),O.vertexTangents&&h.enable(15),O.anisotropy&&h.enable(16),O.alphaHash&&h.enable(17),O.batching&&h.enable(18),O.dispersion&&h.enable(19),O.retroreflection&&h.enable(24),O.batchingColor&&h.enable(20),O.gradientMap&&h.enable(21),O.packedNormalMap&&h.enable(22),O.vertexNormals&&h.enable(23),T.push(h.mask),h.disableAll(),O.fog&&h.enable(0),O.useFog&&h.enable(1),O.flatShading&&h.enable(2),O.logarithmicDepthBuffer&&h.enable(3),O.reversedDepthBuffer&&h.enable(4),O.skinning&&h.enable(5),O.morphTargets&&h.enable(6),O.morphNormals&&h.enable(7),O.morphColors&&h.enable(8),O.premultipliedAlpha&&h.enable(9),O.shadowMapEnabled&&h.enable(10),O.doubleSided&&h.enable(11),O.flipSided&&h.enable(12),O.useDepthPacking&&h.enable(13),O.dithering&&h.enable(14),O.transmission&&h.enable(15),O.sheen&&h.enable(16),O.opaque&&h.enable(17),O.pointsUvs&&h.enable(18),O.decodeVideoTexture&&h.enable(19),O.decodeVideoTextureEmissive&&h.enable(20),O.alphaToCoverage&&h.enable(21),O.numLightProbeGrids>0&&h.enable(22),O.hasPositionAttribute&&h.enable(23),T.push(h.mask)}function B(T){const O=y[T.type];let z;if(O){const V=ra[O];z=q1.clone(V.uniforms)}else z=T.uniforms;return z}function C(T,O){let z=_.get(O);return z!==void 0?++z.usedTimes:(z=new AC(o,O,T,l),m.push(z),_.set(O,z)),z}function N(T){if(--T.usedTimes===0){const O=m.indexOf(T);m[O]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){d.remove(T)}function P(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:B,acquireProgram:C,releaseProgram:N,releaseShaderCache:L,programs:m,dispose:P}}function UC(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function LC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function $x(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function tS(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function d(v,y,b,w,M,S){let D=o[t];return D===void 0?(D={id:v.id,object:v,geometry:y,material:b,materialVariant:h(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:S},o[t]=D):(D.id=v.id,D.object=v,D.geometry=y,D.material=b,D.materialVariant=h(v),D.groupOrder=w,D.renderOrder=v.renderOrder,D.z=M,D.group=S),t++,D}function p(v,y,b,w,M,S,D){D.reversedDepth===!0&&(M=-M);const B=d(v,y,b,w,M,S);b.transmission>0?r.push(B):b.transparent===!0?l.push(B):i.push(B)}function m(v,y,b,w,M,S){const D=d(v,y,b,w,M,S);b.transmission>0?r.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function _(v,y){i.length>1&&i.sort(v||LC),r.length>1&&r.sort(y||$x),l.length>1&&l.sort(y||$x)}function g(){for(let v=t,y=o.length;v<y;v++){const b=o[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:p,unshift:m,finish:g,sort:_}}function OC(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new tS,o.set(r,[h])):l>=u.length?(h=new tS,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function PC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new j,color:new Fe};break;case"SpotLight":i={position:new j,direction:new j,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":i={color:new Fe,position:new j,halfWidth:new j,halfHeight:new j};break}return o[t.id]=i,i}}}function IC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let zC=0;function BC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function FC(o){const t=new PC,i=IC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new j);const l=new j,u=new tn,h=new tn;function d(m){let _=0,g=0,v=0;for(let J=0;J<9;J++)r.probe[J].set(0,0,0);let y=0,b=0,w=0,M=0,S=0,D=0,B=0,C=0,N=0,L=0,P=0,T=0,O=0,z=0;m.sort(BC);for(let J=0,rt=m.length;J<rt;J++){const q=m[J],Z=q.color,k=q.intensity,W=q.distance;let ct=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===jr?ct=q.shadow.map.texture:ct=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)_+=Z.r*k,g+=Z.g*k,v+=Z.b*k;else if(q.isLightProbe){for(let st=0;st<9;st++)r.probe[st].addScaledVector(q.sh.coefficients[st],k);z++}else if(q.isSunLight){const st=t.get(q);if(st.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const pt=q.shadow,xt=i.get(q);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),r.sunShadow[b]=xt,r.sunShadowMap[b]=ct;const Pt=pt.getViewportCount();for(let qt=0;qt<Pt;qt++)r.sunShadowMatrix[w+qt]=pt.getMatrix(qt),r.sunShadowCascade[w+qt]=pt._cascadeData[qt];w+=Pt,b++}r.sun[y]=st,y++}else if(q.isDirectionalLight){const st=t.get(q);if(st.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const pt=q.shadow,xt=i.get(q);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,r.directionalShadow[M]=xt,r.directionalShadowMap[M]=ct,r.directionalShadowMatrix[M]=q.shadow.matrix,N++}r.directional[M]=st,M++}else if(q.isSpotLight){const st=t.get(q);st.position.setFromMatrixPosition(q.matrixWorld),st.color.copy(Z).multiplyScalar(k),st.distance=W,st.coneCos=Math.cos(q.angle),st.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),st.decay=q.decay,r.spot[D]=st;const pt=q.shadow;if(q.map&&(r.spotLightMap[T]=q.map,T++,pt.updateMatrices(q),q.castShadow&&O++),r.spotLightMatrix[D]=pt.matrix,q.castShadow){const xt=i.get(q);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,r.spotShadow[D]=xt,r.spotShadowMap[D]=ct,P++}D++}else if(q.isRectAreaLight){const st=t.get(q);st.color.copy(Z).multiplyScalar(k),st.halfWidth.set(q.width*.5,0,0),st.halfHeight.set(0,q.height*.5,0),r.rectArea[B]=st,B++}else if(q.isPointLight){const st=t.get(q);if(st.color.copy(q.color).multiplyScalar(q.intensity),st.distance=q.distance,st.decay=q.decay,q.castShadow){const pt=q.shadow,xt=i.get(q);xt.shadowIntensity=pt.intensity,xt.shadowBias=pt.bias,xt.shadowNormalBias=pt.normalBias,xt.shadowRadius=pt.radius,xt.shadowMapSize=pt.mapSize,xt.shadowCameraNear=pt.camera.near,xt.shadowCameraFar=pt.camera.far,r.pointShadow[S]=xt,r.pointShadowMap[S]=ct,r.pointShadowMatrix[S]=q.shadow.matrix,L++}r.point[S]=st,S++}else if(q.isHemisphereLight){const st=t.get(q);st.skyColor.copy(q.color).multiplyScalar(k),st.groundColor.copy(q.groundColor).multiplyScalar(k),r.hemi[C]=st,C++}}B>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Jt.LTC_FLOAT_1,r.rectAreaLTC2=Jt.LTC_FLOAT_2):(r.rectAreaLTC1=Jt.LTC_HALF_1,r.rectAreaLTC2=Jt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=v;const V=r.hash;(V.sunLength!==y||V.directionalLength!==M||V.pointLength!==S||V.spotLength!==D||V.rectAreaLength!==B||V.hemiLength!==C||V.numSunShadows!==b||V.numDirectionalShadows!==N||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==T||V.numLightProbes!==z)&&(r.sun.length=y,r.directional.length=M,r.spot.length=D,r.rectArea.length=B,r.point.length=S,r.hemi.length=C,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.directionalShadowMatrix.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.spotLightMatrix.length=P+T-O,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=z,V.sunLength=y,V.directionalLength=M,V.pointLength=S,V.spotLength=D,V.rectAreaLength=B,V.hemiLength=C,V.numSunShadows=b,V.numDirectionalShadows=N,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=T,V.numLightProbes=z,r.version=zC++)}function p(m,_){let g=0,v=0,y=0,b=0,w=0,M=0;const S=_.matrixWorldInverse;for(let D=0,B=m.length;D<B;D++){const C=m[D];if(C.isSunLight){const N=r.sun[g];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),g++}else if(C.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),v++}else if(C.isSpotLight){const N=r.spot[b];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),b++}else if(C.isRectAreaLight){const N=r.rectArea[w];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),h.identity(),u.copy(C.matrixWorld),u.premultiply(S),h.extractRotation(u),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),w++}else if(C.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const N=r.hemi[M];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(S),M++}}}return{setup:d,setupView:p,state:r}}function eS(o){const t=new FC(o),i=[],r=[],l=[];function u(v){g.camera=v,i.length=0,r.length=0,l.length=0}function h(v){i.push(v)}function d(v){r.push(v)}function p(v){l.push(v)}function m(){t.setup(i)}function _(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:g,setupLights:m,setupLightsView:_,pushLight:h,pushShadow:d,pushLightProbeGrid:p}}function HC(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new eS(o),t.set(l,[d])):u>=h.length?(d=new eS(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const GC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XC=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],kC=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],nS=new tn,Al=new j,pp=new j;function WC(o,t,i){let r=new Tm;const l=new Wt,u=new Wt,h=new ln,d=new Q1,p=new j1,m={},_=i.maxTextureSize,g={[Jr]:Kn,[Kn]:Jr,[Ua]:Ua},v=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:GC,fragmentShader:VC}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const b=new gi;b.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ke(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let S=this.type;this.render=function(L,P,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===kE&&(me("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fc);const O=o.getRenderTarget(),z=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),J=o.state;J.setBlending(Oa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const rt=S!==this.type;rt&&P.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Z=>Z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Z=L.length;q<Z;q++){const k=L[q],W=k.shadow;if(W===void 0){me("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ct=W.getFrameExtents();l.multiply(ct),u.copy(W.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ct.x),l.x=u.x*ct.x,W.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ct.y),l.y=u.y*ct.y,W.mapSize.y=u.y));const st=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=st,W.map===null||rt===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Rl){if(k.isPointLight){me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Gi(l.x,l.y,{format:jr,type:ca,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),W.map.texture.name=k.name+".shadowMap",W.map.depthTexture=new Hl(l.x,l.y,Fi),W.map.depthTexture.name=k.name+".shadowMapDepth",W.map.depthTexture.format=Ia,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pn,W.map.depthTexture.magFilter=Pn}else k.isPointLight?(W.map=new WS(l.x),W.map.depthTexture=new f1(l.x,ua)):(W.map=new Gi(l.x,l.y),W.map.depthTexture=new Hl(l.x,l.y,ua)),W.map.depthTexture.name=k.name+".shadowMap",W.map.depthTexture.format=Ia,this.type===Fc?(W.map.depthTexture.compareFunction=st?Sm:xm,W.map.depthTexture.minFilter=Hn,W.map.depthTexture.magFilter=Hn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Pn,W.map.depthTexture.magFilter=Pn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==l.x||W.map.height!==l.y)&&W.map.setSize(l.x,l.y);const pt=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();k.isPointLight!==!0&&W.updateMatrices(k,T);for(let xt=0;xt<pt;xt++){const Pt=W.getCamera(xt);if(k.isPointLight){const qt=W.camera,F=W.matrix,gt=k.distance||qt.far;gt!==qt.far&&(qt.far=gt,qt.updateProjectionMatrix()),Al.setFromMatrixPosition(k.matrixWorld),qt.position.copy(Al),pp.copy(qt.position),pp.add(XC[xt]),qt.up.copy(kC[xt]),qt.lookAt(pp),qt.updateMatrixWorld(),F.makeTranslation(-Al.x,-Al.y,-Al.z),nS.multiplyMatrices(qt.projectionMatrix,qt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(nS,qt.coordinateSystem,qt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(W.map),o.clear());const qt=W.getViewport(xt);h.set(u.x*qt.x,u.y*qt.y,u.x*qt.z,u.y*qt.w),J.viewport(h)}r=W.getFrustum(xt),C(P,T,Pt,k,this.type)}W.isPointLightShadow!==!0&&this.type===Rl&&D(W,T),W.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(O,z,V)};function D(L,P){const T=t.update(w);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null?L.mapPass=new Gi(l.x,l.y,{format:jr,type:ca}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value.set(L.map.width,L.map.height),v.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(P,null,T,v,w,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value.set(L.map.width,L.map.height),y.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(P,null,T,y,w,null)}function B(L,P,T,O){let z=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)z=V;else if(z=T.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const J=z.uuid,rt=P.uuid;let q=m[J];q===void 0&&(q={},m[J]=q);let Z=q[rt];Z===void 0&&(Z=z.clone(),q[rt]=Z,P.addEventListener("dispose",N)),z=Z}if(z.visible=P.visible,z.wireframe=P.wireframe,O===Rl?z.side=P.shadowSide!==null?P.shadowSide:P.side:z.side=P.shadowSide!==null?P.shadowSide:g[P.side],z.alphaMap=P.alphaMap,z.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,z.map=P.map,z.clipShadows=P.clipShadows,z.clippingPlanes=P.clippingPlanes,z.clipIntersection=P.clipIntersection,z.displacementMap=P.displacementMap,z.displacementScale=P.displacementScale,z.displacementBias=P.displacementBias,z.wireframeLinewidth=P.wireframeLinewidth,z.linewidth=P.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const J=o.properties.get(z);J.light=T}return z}function C(L,P,T,O,z){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===Rl)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const rt=t.update(L),q=L.material;if(Array.isArray(q)){const Z=rt.groups;for(let k=0,W=Z.length;k<W;k++){const ct=Z[k],st=q[ct.materialIndex];if(st&&st.visible){const pt=B(L,st,O,z);L.onBeforeShadow(o,L,P,T,rt,pt,ct),o.renderBufferDirect(T,null,rt,pt,L,ct),L.onAfterShadow(o,L,P,T,rt,pt,ct)}}}else if(q.visible){const Z=B(L,q,O,z);L.onBeforeShadow(o,L,P,T,rt,Z,null),o.renderBufferDirect(T,null,rt,Z,L,null),L.onAfterShadow(o,L,P,T,rt,Z,null)}}const J=L.children;for(let rt=0,q=J.length;rt<q;rt++)C(J[rt],P,T,O,z)}function N(L){L.target.removeEventListener("dispose",N);for(const T in m){const O=m[T],z=L.target.uuid;z in O&&(O[z].dispose(),delete O[z])}}}function qC(o,t){function i(){let Y=!1;const Ft=new ln;let St=null;const Gt=new ln(0,0,0,0);return{setMask:function(Yt){St!==Yt&&!Y&&(o.colorMask(Yt,Yt,Yt,Yt),St=Yt)},setLocked:function(Yt){Y=Yt},setClear:function(Yt,$,Ot,Lt,xe){xe===!0&&(Yt*=Lt,$*=Lt,Ot*=Lt),Ft.set(Yt,$,Ot,Lt),Gt.equals(Ft)===!1&&(o.clearColor(Yt,$,Ot,Lt),Gt.copy(Ft))},reset:function(){Y=!1,St=null,Gt.set(-1,0,0,0)}}}function r(){let Y=!1,Ft=!1,St=null,Gt=null,Yt=null;return{setReversed:function($){if(Ft!==$){const Ot=t.get("EXT_clip_control");$?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Ft=$;const Lt=Yt;Yt=null,this.setClear(Lt)}},getReversed:function(){return Ft},setTest:function($){$?ht(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function($){St!==$&&!Y&&(o.depthMask($),St=$)},setFunc:function($){if(Ft&&($=bT[$]),Gt!==$){switch($){case mp:o.depthFunc(o.NEVER);break;case gp:o.depthFunc(o.ALWAYS);break;case vp:o.depthFunc(o.LESS);break;case Pl:o.depthFunc(o.LEQUAL);break;case _p:o.depthFunc(o.EQUAL);break;case xp:o.depthFunc(o.GEQUAL);break;case Sp:o.depthFunc(o.GREATER);break;case yp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=$}},setLocked:function($){Y=$},setClear:function($){Yt!==$&&(Yt=$,Ft&&($=1-$),o.clearDepth($))},reset:function(){Y=!1,St=null,Gt=null,Yt=null,Ft=!1}}}function l(){let Y=!1,Ft=null,St=null,Gt=null,Yt=null,$=null,Ot=null,Lt=null,xe=null;return{setTest:function(ve){Y||(ve?ht(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(ve){Ft!==ve&&!Y&&(o.stencilMask(ve),Ft=ve)},setFunc:function(ve,ei,vi){(St!==ve||Gt!==ei||Yt!==vi)&&(o.stencilFunc(ve,ei,vi),St=ve,Gt=ei,Yt=vi)},setOp:function(ve,ei,vi){($!==ve||Ot!==ei||Lt!==vi)&&(o.stencilOp(ve,ei,vi),$=ve,Ot=ei,Lt=vi)},setLocked:function(ve){Y=ve},setClear:function(ve){xe!==ve&&(o.clearStencil(ve),xe=ve)},reset:function(){Y=!1,Ft=null,St=null,Gt=null,Yt=null,$=null,Ot=null,Lt=null,xe=null}}}const u=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},v={},y=new WeakMap,b=[],w=null,M=!1,S=null,D=null,B=null,C=null,N=null,L=null,P=null,T=new Fe(0,0,0),O=0,z=!1,V=null,J=null,rt=null,q=null,Z=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ct=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(st)[1]),W=ct>=1):st.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),W=ct>=2);let pt=null,xt={};const Pt=o.getParameter(o.SCISSOR_BOX),qt=o.getParameter(o.VIEWPORT),F=new ln().fromArray(Pt),gt=new ln().fromArray(qt);function Ut(Y,Ft,St,Gt){const Yt=new Uint8Array(4),$=o.createTexture();o.bindTexture(Y,$),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ot=0;Ot<St;Ot++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(Ft,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,Yt):o.texImage2D(Ft+Ot,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Yt);return $}const K={};K[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(o.DEPTH_TEST),h.setFunc(Pl),bt(!1),At(K_),ht(o.CULL_FACE),wt(Oa);function ht(Y){_[Y]!==!0&&(o.enable(Y),_[Y]=!0)}function Rt(Y){_[Y]!==!1&&(o.disable(Y),_[Y]=!1)}function Ht(Y,Ft){return v[Y]!==Ft?(o.bindFramebuffer(Y,Ft),v[Y]=Ft,Y===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ft),Y===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ft),!0):!1}function _t(Y,Ft){let St=b,Gt=!1;if(Y){St=y.get(Ft),St===void 0&&(St=[],y.set(Ft,St));const Yt=Y.textures;if(St.length!==Yt.length||St[0]!==o.COLOR_ATTACHMENT0){for(let $=0,Ot=Yt.length;$<Ot;$++)St[$]=o.COLOR_ATTACHMENT0+$;St.length=Yt.length,Gt=!0}}else St[0]!==o.BACK&&(St[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(St)}function Dt(Y){return w!==Y?(o.useProgram(Y),w=Y,!0):!1}const Ee={[so]:o.FUNC_ADD,[qE]:o.FUNC_SUBTRACT,[YE]:o.FUNC_REVERSE_SUBTRACT};Ee[ZE]=o.MIN,Ee[KE]=o.MAX;const Tt={[JE]:o.ZERO,[QE]:o.ONE,[jE]:o.SRC_COLOR,[sS]:o.SRC_ALPHA,[aT]:o.SRC_ALPHA_SATURATE,[nT]:o.DST_COLOR,[tT]:o.DST_ALPHA,[$E]:o.ONE_MINUS_SRC_COLOR,[oS]:o.ONE_MINUS_SRC_ALPHA,[iT]:o.ONE_MINUS_DST_COLOR,[eT]:o.ONE_MINUS_DST_ALPHA,[rT]:o.CONSTANT_COLOR,[sT]:o.ONE_MINUS_CONSTANT_COLOR,[oT]:o.CONSTANT_ALPHA,[lT]:o.ONE_MINUS_CONSTANT_ALPHA};function wt(Y,Ft,St,Gt,Yt,$,Ot,Lt,xe,ve){if(Y===Oa){M===!0&&(Rt(o.BLEND),M=!1);return}if(M===!1&&(ht(o.BLEND),M=!0),Y!==WE){if(Y!==S||ve!==z){if((D!==so||N!==so)&&(o.blendEquation(o.FUNC_ADD),D=so,N=so),ve)switch(Y){case Dl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case J_:o.blendFunc(o.ONE,o.ONE);break;case Q_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case j_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ge("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Dl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case J_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Q_:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",Y);break}B=null,C=null,L=null,P=null,T.set(0,0,0),O=0,S=Y,z=ve}return}Yt=Yt||Ft,$=$||St,Ot=Ot||Gt,(Ft!==D||Yt!==N)&&(o.blendEquationSeparate(Ee[Ft],Ee[Yt]),D=Ft,N=Yt),(St!==B||Gt!==C||$!==L||Ot!==P)&&(o.blendFuncSeparate(Tt[St],Tt[Gt],Tt[$],Tt[Ot]),B=St,C=Gt,L=$,P=Ot),(Lt.equals(T)===!1||xe!==O)&&(o.blendColor(Lt.r,Lt.g,Lt.b,xe),T.copy(Lt),O=xe),S=Y,z=!1}function Ct(Y,Ft){Y.side===Ua?Rt(o.CULL_FACE):ht(o.CULL_FACE);let St=Y.side===Kn;Ft&&(St=!St),bt(St),Y.blending===Dl&&Y.transparent===!1?wt(Oa):wt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Gt=Y.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ne(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ht(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Y){V!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),V=Y)}function At(Y){Y!==VE?(ht(o.CULL_FACE),Y!==J&&(Y===K_?o.cullFace(o.BACK):Y===XE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),J=Y}function ee(Y){Y!==rt&&(W&&o.lineWidth(Y),rt=Y)}function ne(Y,Ft,St){Y?(ht(o.POLYGON_OFFSET_FILL),(q!==Ft||Z!==St)&&(q=Ft,Z=St,h.getReversed()&&(Ft=-Ft),o.polygonOffset(Ft,St))):Rt(o.POLYGON_OFFSET_FILL)}function ae(Y){Y?ht(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function fe(Y){Y===void 0&&(Y=o.TEXTURE0+k-1),pt!==Y&&(o.activeTexture(Y),pt=Y)}function H(Y,Ft,St){St===void 0&&(pt===null?St=o.TEXTURE0+k-1:St=pt);let Gt=xt[St];Gt===void 0&&(Gt={type:void 0,texture:void 0},xt[St]=Gt),(Gt.type!==Y||Gt.texture!==Ft)&&(pt!==St&&(o.activeTexture(St),pt=St),o.bindTexture(Y,Ft||K[Y]),Gt.type=Y,Gt.texture=Ft)}function Me(){const Y=xt[pt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ge(){try{o.compressedTexImage2D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function U(){try{o.compressedTexImage3D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function E(){try{o.texSubImage2D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function nt(){try{o.texSubImage3D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function it(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function mt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function Nt(){try{o.texStorage2D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function Bt(){try{o.texStorage3D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function vt(){try{o.texImage2D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function Mt(){try{o.texImage3D(...arguments)}catch(Y){Ge("WebGLState:",Y)}}function zt(Y){return g[Y]!==void 0?g[Y]:o.getParameter(Y)}function re(Y,Ft){g[Y]!==Ft&&(o.pixelStorei(Y,Ft),g[Y]=Ft)}function Vt(Y){F.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),F.copy(Y))}function It(Y){gt.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),gt.copy(Y))}function Qt(Y,Ft){let St=m.get(Ft);St===void 0&&(St=new WeakMap,m.set(Ft,St));let Gt=St.get(Y);Gt===void 0&&(Gt=o.getUniformBlockIndex(Ft,Y.name),St.set(Y,Gt))}function ce(Y,Ft){const Gt=m.get(Ft).get(Y);p.get(Ft)!==Gt&&(o.uniformBlockBinding(Ft,Gt,Y.__bindingPointIndex),p.set(Ft,Gt))}function de(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},g={},pt=null,xt={},v={},y=new WeakMap,b=[],w=null,M=!1,S=null,D=null,B=null,C=null,N=null,L=null,P=null,T=new Fe(0,0,0),O=0,z=!1,V=null,J=null,rt=null,q=null,Z=null,F.set(0,0,o.canvas.width,o.canvas.height),gt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:ht,disable:Rt,bindFramebuffer:Ht,drawBuffers:_t,useProgram:Dt,setBlending:wt,setMaterial:Ct,setFlipSided:bt,setCullFace:At,setLineWidth:ee,setPolygonOffset:ne,setScissorTest:ae,activeTexture:fe,bindTexture:H,unbindTexture:Me,compressedTexImage2D:ge,compressedTexImage3D:U,texImage2D:vt,texImage3D:Mt,pixelStorei:re,getParameter:zt,updateUBOMapping:Qt,uniformBlockBinding:ce,texStorage2D:Nt,texStorage3D:Bt,texSubImage2D:E,texSubImage3D:nt,compressedTexSubImage2D:it,compressedTexSubImage3D:mt,scissor:Vt,viewport:It,reset:de}}function YC(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Wt,_=new WeakMap,g=new Set;let v;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return b?new OffscreenCanvas(U,E):Jc("canvas")}function M(U,E,nt){let it=1;const mt=ge(U);if((mt.width>nt||mt.height>nt)&&(it=nt/Math.max(mt.width,mt.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Nt=Math.floor(it*mt.width),Bt=Math.floor(it*mt.height);v===void 0&&(v=w(Nt,Bt));const vt=E?w(Nt,Bt):v;return vt.width=Nt,vt.height=Bt,vt.getContext("2d").drawImage(U,0,0,Nt,Bt),me("WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+Nt+"x"+Bt+")."),vt}else return"data"in U&&me("WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),U;return U}function S(U){return U.generateMipmaps}function D(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(U,E,nt,it,mt,Nt=!1){if(U!==null){if(o[U]!==void 0)return o[U];me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Bt;it&&(Bt=t.get("EXT_texture_norm16"),Bt||me("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=E;if(E===o.RED&&(nt===o.FLOAT&&(vt=o.R32F),nt===o.HALF_FLOAT&&(vt=o.R16F),nt===o.UNSIGNED_BYTE&&(vt=o.R8),nt===o.UNSIGNED_SHORT&&Bt&&(vt=Bt.R16_EXT),nt===o.SHORT&&Bt&&(vt=Bt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.R8UI),nt===o.UNSIGNED_SHORT&&(vt=o.R16UI),nt===o.UNSIGNED_INT&&(vt=o.R32UI),nt===o.BYTE&&(vt=o.R8I),nt===o.SHORT&&(vt=o.R16I),nt===o.INT&&(vt=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(vt=o.RG32F),nt===o.HALF_FLOAT&&(vt=o.RG16F),nt===o.UNSIGNED_BYTE&&(vt=o.RG8),nt===o.UNSIGNED_SHORT&&Bt&&(vt=Bt.RG16_EXT),nt===o.SHORT&&Bt&&(vt=Bt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RG16UI),nt===o.UNSIGNED_INT&&(vt=o.RG32UI),nt===o.BYTE&&(vt=o.RG8I),nt===o.SHORT&&(vt=o.RG16I),nt===o.INT&&(vt=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),nt===o.UNSIGNED_INT&&(vt=o.RGB32UI),nt===o.BYTE&&(vt=o.RGB8I),nt===o.SHORT&&(vt=o.RGB16I),nt===o.INT&&(vt=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(vt=o.RGBA32UI),nt===o.BYTE&&(vt=o.RGBA8I),nt===o.SHORT&&(vt=o.RGBA16I),nt===o.INT&&(vt=o.RGBA32I)),E===o.RGB&&(nt===o.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGB16_EXT),nt===o.SHORT&&Bt&&(vt=Bt.RGB16_SNORM_EXT),nt===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=Nt?Kc:Be.getTransfer(mt);nt===o.FLOAT&&(vt=o.RGBA32F),nt===o.HALF_FLOAT&&(vt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(vt=Mt===Je?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT&&Bt&&(vt=Bt.RGBA16_EXT),nt===o.SHORT&&Bt&&(vt=Bt.RGBA16_SNORM_EXT),nt===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function N(U,E){let nt;return U?E===null||E===ua||E===zl?nt=o.DEPTH24_STENCIL8:E===Fi?nt=o.DEPTH32F_STENCIL8:E===Il&&(nt=o.DEPTH24_STENCIL8,me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ua||E===zl?nt=o.DEPTH_COMPONENT24:E===Fi?nt=o.DEPTH_COMPONENT32F:E===Il&&(nt=o.DEPTH_COMPONENT16),nt}function L(U,E){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Pn&&U.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function P(U){const E=U.target;E.removeEventListener("dispose",P),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&g.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),V(E)}function O(U){const E=r.get(U);if(E.__webglInit===void 0)return;const nt=U.source,it=y.get(nt);if(it){const mt=it[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&z(U),Object.keys(it).length===0&&y.delete(nt)}r.remove(U)}function z(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const nt=U.source,it=y.get(nt);delete it[E.__cacheKey],h.memory.textures--}function V(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(E.__webglFramebuffer[it]))for(let mt=0;mt<E.__webglFramebuffer[it].length;mt++)o.deleteFramebuffer(E.__webglFramebuffer[it][mt]);else o.deleteFramebuffer(E.__webglFramebuffer[it]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[it])}else{if(Array.isArray(E.__webglFramebuffer))for(let it=0;it<E.__webglFramebuffer.length;it++)o.deleteFramebuffer(E.__webglFramebuffer[it]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let it=0;it<E.__webglColorRenderbuffer.length;it++)E.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[it]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=U.textures;for(let it=0,mt=nt.length;it<mt;it++){const Nt=r.get(nt[it]);Nt.__webglTexture&&(o.deleteTexture(Nt.__webglTexture),h.memory.textures--),r.remove(nt[it])}r.remove(U)}let J=0;function rt(){J=0}function q(){return J}function Z(U){J=U}function k(){const U=J;return U>=l.maxTextures&&me("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+l.maxTextures),J+=1,U}function W(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ct(U,E){const nt=r.get(U);if(U.isVideoTexture&&H(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){const it=U.image;if(it===null)me("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)me("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(nt,U,E);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function st(U,E){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Rt(nt,U,E);return}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function pt(U,E){const nt=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){Rt(nt,U,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function xt(U,E){const nt=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&nt.__version!==U.version){Ht(nt,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const Pt={[Mp]:o.REPEAT,[La]:o.CLAMP_TO_EDGE,[Ep]:o.MIRRORED_REPEAT},qt={[Pn]:o.NEAREST,[fT]:o.NEAREST_MIPMAP_NEAREST,[dc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[zd]:o.LINEAR_MIPMAP_NEAREST,[Zr]:o.LINEAR_MIPMAP_LINEAR},F={[mT]:o.NEVER,[ST]:o.ALWAYS,[gT]:o.LESS,[xm]:o.LEQUAL,[vT]:o.EQUAL,[Sm]:o.GEQUAL,[_T]:o.GREATER,[xT]:o.NOTEQUAL};function gt(U,E){if(E.type===Fi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===zd||E.magFilter===dc||E.magFilter===Zr||E.minFilter===Hn||E.minFilter===zd||E.minFilter===dc||E.minFilter===Zr)&&me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,Pt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,Pt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,Pt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,qt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,qt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==dc&&E.minFilter!==Zr||E.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ut(U,E){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",P));const it=E.source;let mt=y.get(it);mt===void 0&&(mt={},y.set(it,mt));const Nt=W(E);if(Nt!==U.__cacheKey){mt[Nt]===void 0&&(mt[Nt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),mt[Nt].usedTimes++;const Bt=mt[U.__cacheKey];Bt!==void 0&&(mt[U.__cacheKey].usedTimes--,Bt.usedTimes===0&&z(E)),U.__cacheKey=Nt,U.__webglTexture=mt[Nt].texture}return nt}function K(U,E,nt){return Math.floor(Math.floor(U/nt)/E)}function ht(U,E,nt,it){const Nt=U.updateRanges;if(Nt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,it,E.data);else{Nt.sort((re,Vt)=>re.start-Vt.start);let Bt=0;for(let re=1;re<Nt.length;re++){const Vt=Nt[Bt],It=Nt[re],Qt=Vt.start+Vt.count,ce=K(It.start,E.width,4),de=K(Vt.start,E.width,4);It.start<=Qt+1&&ce===de&&K(It.start+It.count-1,E.width,4)===ce?Vt.count=Math.max(Vt.count,It.start+It.count-Vt.start):(++Bt,Nt[Bt]=It)}Nt.length=Bt+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),zt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let re=0,Vt=Nt.length;re<Vt;re++){const It=Nt[re],Qt=Math.floor(It.start/4),ce=Math.ceil(It.count/4),de=Qt%E.width,Y=Math.floor(Qt/E.width),Ft=ce,St=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,de),i.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,de,Y,Ft,St,nt,it,E.data)}U.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,zt)}}function Rt(U,E,nt){let it=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(it=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(it=o.TEXTURE_3D);const mt=Ut(U,E),Nt=E.source;i.bindTexture(it,U.__webglTexture,o.TEXTURE0+nt);const Bt=r.get(Nt);if(Nt.version!==Bt.__version||mt===!0){if(i.activeTexture(o.TEXTURE0+nt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const St=Be.getPrimaries(Be.workingColorSpace),Gt=E.colorSpace===_r?null:Be.getPrimaries(E.colorSpace),Yt=E.colorSpace===_r||St===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,l.maxTextureSize);Mt=Me(E,Mt);const zt=u.convert(E.format,E.colorSpace),re=u.convert(E.type);let Vt=C(E.internalFormat,zt,re,E.normalized,E.colorSpace,E.isVideoTexture);gt(it,E);let It;const Qt=E.mipmaps,ce=E.isVideoTexture!==!0,de=Bt.__version===void 0||mt===!0,Y=Nt.dataReady,Ft=L(E,Mt);if(E.isDepthTexture)Vt=N(E.format===Kr,E.type),de&&(ce?i.texStorage2D(o.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,zt,re,null));else if(E.isDataTexture)if(Qt.length>0){ce&&de&&i.texStorage2D(o.TEXTURE_2D,Ft,Vt,Qt[0].width,Qt[0].height);for(let St=0,Gt=Qt.length;St<Gt;St++)It=Qt[St],ce?Y&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,It.width,It.height,zt,re,It.data):i.texImage2D(o.TEXTURE_2D,St,Vt,It.width,It.height,0,zt,re,It.data);E.generateMipmaps=!1}else ce?(de&&i.texStorage2D(o.TEXTURE_2D,Ft,Vt,Mt.width,Mt.height),Y&&ht(E,Mt,zt,re)):i.texImage2D(o.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,zt,re,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ce&&de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Vt,Qt[0].width,Qt[0].height,Mt.depth);for(let St=0,Gt=Qt.length;St<Gt;St++)if(It=Qt[St],E.format!==Hi)if(zt!==null)if(ce){if(Y)if(E.layerUpdates.size>0){const Yt=Px(It.width,It.height,E.format,E.type);for(const $ of E.layerUpdates){const Ot=It.data.subarray($*Yt/It.data.BYTES_PER_ELEMENT,($+1)*Yt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,$,It.width,It.height,1,zt,Ot)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,It.width,It.height,Mt.depth,zt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,St,Vt,It.width,It.height,Mt.depth,0,It.data,0,0);else me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,St,0,0,0,It.width,It.height,Mt.depth,zt,re,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,St,Vt,It.width,It.height,Mt.depth,0,zt,re,It.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ce&&de&&i.texStorage2D(o.TEXTURE_2D,Ft,Vt,Qt[0].width,Qt[0].height);for(let St=0,Gt=Qt.length;St<Gt;St++)It=Qt[St],E.format!==Hi?zt!==null?ce?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,St,0,0,It.width,It.height,zt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,St,Vt,It.width,It.height,0,It.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Y&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,It.width,It.height,zt,re,It.data):i.texImage2D(o.TEXTURE_2D,St,Vt,It.width,It.height,0,zt,re,It.data)}else if(E.isDataArrayTexture)if(ce){if(de&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Vt,Mt.width,Mt.height,Mt.depth),Y)if(E.layerUpdates.size>0){const St=Px(Mt.width,Mt.height,E.format,E.type);for(const Gt of E.layerUpdates){const Yt=Mt.data.subarray(Gt*St/Mt.data.BYTES_PER_ELEMENT,(Gt+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Gt,Mt.width,Mt.height,1,zt,re,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,re,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,zt,re,Mt.data);else if(E.isData3DTexture)ce?(de&&i.texStorage3D(o.TEXTURE_3D,Ft,Vt,Mt.width,Mt.height,Mt.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,zt,re,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,zt,re,Mt.data);else if(E.isFramebufferTexture){if(de)if(ce)i.texStorage2D(o.TEXTURE_2D,Ft,Vt,Mt.width,Mt.height);else{let St=Mt.width,Gt=Mt.height;for(let Yt=0;Yt<Ft;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,Vt,St,Gt,0,zt,re,null),St>>=1,Gt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const St=o.canvas;if(St.hasAttribute("layoutsubtree")||St.setAttribute("layoutsubtree","true"),Mt.parentNode!==St){St.appendChild(Mt),g.add(E),St.onpaint=Gt=>{const Yt=Gt.changedElements;for(const $ of g)Yt.includes($.image)&&($.needsUpdate=!0)},St.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Yt=o.RGBA,$=o.RGBA,Ot=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Yt,$,Ot,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Qt.length>0){if(ce&&de){const St=ge(Qt[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Vt,St.width,St.height)}for(let St=0,Gt=Qt.length;St<Gt;St++)It=Qt[St],ce?Y&&i.texSubImage2D(o.TEXTURE_2D,St,0,0,zt,re,It):i.texImage2D(o.TEXTURE_2D,St,Vt,zt,re,It);E.generateMipmaps=!1}else if(ce){if(de){const St=ge(Mt);i.texStorage2D(o.TEXTURE_2D,Ft,Vt,St.width,St.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,re,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Vt,zt,re,Mt);S(E)&&D(it),Bt.__version=Nt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ht(U,E,nt){if(E.image.length!==6)return;const it=Ut(U,E),mt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const Nt=r.get(mt);if(mt.version!==Nt.__version||it===!0){i.activeTexture(o.TEXTURE0+nt);const Bt=Be.getPrimaries(Be.workingColorSpace),vt=E.colorSpace===_r?null:Be.getPrimaries(E.colorSpace),Mt=E.colorSpace===_r||Bt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const zt=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,Vt=[];for(let $=0;$<6;$++)!zt&&!re?Vt[$]=M(E.image[$],!0,l.maxCubemapSize):Vt[$]=re?E.image[$].image:E.image[$],Vt[$]=Me(E,Vt[$]);const It=Vt[0],Qt=u.convert(E.format,E.colorSpace),ce=u.convert(E.type),de=C(E.internalFormat,Qt,ce,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,Ft=Nt.__version===void 0||it===!0,St=mt.dataReady;let Gt=L(E,It);gt(o.TEXTURE_CUBE_MAP,E);let Yt;if(zt){Y&&Ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,de,It.width,It.height);for(let $=0;$<6;$++){Yt=Vt[$].mipmaps;for(let Ot=0;Ot<Yt.length;Ot++){const Lt=Yt[Ot];E.format!==Hi?Qt!==null?Y?St&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot,0,0,Lt.width,Lt.height,Qt,Lt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot,de,Lt.width,Lt.height,0,Lt.data):me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot,0,0,Lt.width,Lt.height,Qt,ce,Lt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot,de,Lt.width,Lt.height,0,Qt,ce,Lt.data)}}}else{if(Yt=E.mipmaps,Y&&Ft){Yt.length>0&&Gt++;const $=ge(Vt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,de,$.width,$.height)}for(let $=0;$<6;$++)if(re){Y?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Vt[$].width,Vt[$].height,Qt,ce,Vt[$].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,de,Vt[$].width,Vt[$].height,0,Qt,ce,Vt[$].data);for(let Ot=0;Ot<Yt.length;Ot++){const xe=Yt[Ot].image[$].image;Y?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot+1,0,0,xe.width,xe.height,Qt,ce,xe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot+1,de,xe.width,xe.height,0,Qt,ce,xe.data)}}else{Y?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Qt,ce,Vt[$]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,de,Qt,ce,Vt[$]);for(let Ot=0;Ot<Yt.length;Ot++){const Lt=Yt[Ot];Y?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot+1,0,0,Qt,ce,Lt.image[$]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ot+1,de,Qt,ce,Lt.image[$])}}}S(E)&&D(o.TEXTURE_CUBE_MAP),Nt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function _t(U,E,nt,it,mt,Nt){const Bt=u.convert(nt.format,nt.colorSpace),vt=u.convert(nt.type),Mt=C(nt.internalFormat,Bt,vt,nt.normalized,nt.colorSpace),zt=r.get(E),re=r.get(nt);if(re.__renderTarget=E,!zt.__hasExternalTextures){const Vt=Math.max(1,E.width>>Nt),It=Math.max(1,E.height>>Nt);mt===o.TEXTURE_3D||mt===o.TEXTURE_2D_ARRAY?i.texImage3D(mt,Nt,Mt,Vt,It,E.depth,0,Bt,vt,null):i.texImage2D(mt,Nt,Mt,Vt,It,0,Bt,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,it,mt,re.__webglTexture,0,ae(E)):(mt===o.TEXTURE_2D||mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,it,mt,re.__webglTexture,Nt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(U,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const it=E.depthTexture,mt=it&&it.isDepthTexture?it.type:null,Nt=N(E.stencilBuffer,mt),Bt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;fe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ae(E),Nt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ae(E),Nt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Bt,o.RENDERBUFFER,U)}else{const it=E.textures;for(let mt=0;mt<it.length;mt++){const Nt=it[mt],Bt=u.convert(Nt.format,Nt.colorSpace),vt=u.convert(Nt.type),Mt=C(Nt.internalFormat,Bt,vt,Nt.normalized,Nt.colorSpace);fe(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ae(E),Mt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,ae(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(U,E,nt){const it=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const mt=r.get(E.depthTexture);if(mt.__renderTarget=E,(!mt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),it){if(mt.__webglInit===void 0&&(mt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),mt.__webglTexture===void 0){mt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),gt(o.TEXTURE_CUBE_MAP,E.depthTexture);const zt=u.convert(E.depthTexture.format),re=u.convert(E.depthTexture.type);let Vt;E.depthTexture.format===Ia?Vt=o.DEPTH_COMPONENT24:E.depthTexture.format===Kr&&(Vt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Vt,E.width,E.height,0,zt,re,null)}}else ct(E.depthTexture,0);const Nt=mt.__webglTexture,Bt=ae(E),vt=it?o.TEXTURE_CUBE_MAP_POSITIVE_X+nt:o.TEXTURE_2D,Mt=E.depthTexture.format===Kr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ia)fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,Nt,0,Bt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,Nt,0);else if(E.depthTexture.format===Kr)fe(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,Nt,0,Bt):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,Nt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(U){const E=r.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const it=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),it){const mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,it.removeEventListener("dispose",mt)};it.addEventListener("dispose",mt),E.__depthDisposeCallback=mt}E.__boundDepthTexture=it}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(nt)for(let it=0;it<6;it++)Ee(E.__webglFramebuffer[it],U,it);else{const it=U.texture.mipmaps;it&&it.length>0?Ee(E.__webglFramebuffer[0],U,0):Ee(E.__webglFramebuffer,U,0)}else if(nt){E.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[it]),E.__webglDepthbuffer[it]===void 0)E.__webglDepthbuffer[it]=o.createRenderbuffer(),Dt(E.__webglDepthbuffer[it],U,!1);else{const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer[it];o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,Nt)}}else{const it=U.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Dt(E.__webglDepthbuffer,U,!1);else{const mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Nt),o.framebufferRenderbuffer(o.FRAMEBUFFER,mt,o.RENDERBUFFER,Nt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(U,E,nt){const it=r.get(U);E!==void 0&&_t(it.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Tt(U)}function Ct(U){const E=U.texture,nt=r.get(U),it=r.get(E);U.addEventListener("dispose",T);const mt=U.textures,Nt=U.isWebGLCubeRenderTarget===!0,Bt=mt.length>1;if(Bt||(it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture()),it.__version=E.version,h.memory.textures++),Nt){nt.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)nt.__webglFramebuffer[vt][Mt]=o.createFramebuffer()}else nt.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)nt.__webglFramebuffer[vt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Bt)for(let vt=0,Mt=mt.length;vt<Mt;vt++){const zt=r.get(mt[vt]);zt.__webglTexture===void 0&&(zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&fe(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let vt=0;vt<mt.length;vt++){const Mt=mt[vt];nt.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[vt]);const zt=u.convert(Mt.format,Mt.colorSpace),re=u.convert(Mt.type),Vt=C(Mt.internalFormat,zt,re,Mt.normalized,Mt.colorSpace,U.isXRRenderTarget===!0),It=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Vt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(nt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Nt){i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture),gt(o.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[vt][Mt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else _t(nt.__webglFramebuffer[vt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);S(E)&&D(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Bt){for(let vt=0,Mt=mt.length;vt<Mt;vt++){const zt=mt[vt],re=r.get(zt);let Vt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Vt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Vt,re.__webglTexture),gt(Vt,zt),_t(nt.__webglFramebuffer,U,zt,o.COLOR_ATTACHMENT0+vt,Vt,0),S(zt)&&D(Vt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(vt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,it.__webglTexture),gt(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[Mt],U,E,o.COLOR_ATTACHMENT0,vt,Mt);else _t(nt.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,vt,0);S(E)&&D(vt),i.unbindTexture()}U.depthBuffer&&Tt(U)}function bt(U){const E=U.textures;for(let nt=0,it=E.length;nt<it;nt++){const mt=E[nt];if(S(mt)){const Nt=B(U),Bt=r.get(mt).__webglTexture;i.bindTexture(Nt,Bt),D(Nt),i.unbindTexture()}}}const At=[],ee=[];function ne(U){if(U.samples>0){if(fe(U)===!1){const E=U.textures,nt=U.width,it=U.height;let mt=o.COLOR_BUFFER_BIT;const Nt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=r.get(U),vt=E.length>1;if(vt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Mt=U.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(mt|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[zt]);const re=r.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,re,0)}o.blitFramebuffer(0,0,nt,it,0,0,nt,it,mt,o.NEAREST),p===!0&&(At.length=0,ee.length=0,At.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(At.push(Nt),ee.push(Nt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,At))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Bt.__webglColorRenderbuffer[zt]);const re=r.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Bt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,re,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ae(U){return Math.min(l.maxSamples,U.samples)}function fe(U){const E=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function H(U){const E=h.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Me(U,E){const nt=U.colorSpace,it=U.format,mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==Zc&&nt!==_r&&(Be.getTransfer(nt)===Je?(it!==Hi||mt!==mi)&&me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",nt)),E}function ge(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=k,this.resetTextureUnits=rt,this.getTextureUnits=q,this.setTextureUnits=Z,this.setTexture2D=ct,this.setTexture2DArray=st,this.setTexture3D=pt,this.setTextureCube=xt,this.rebindTextures=wt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ZC(o,t){function i(r,l=_r){let u;const h=Be.getTransfer(l);if(r===mi)return o.UNSIGNED_BYTE;if(r===dm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===pm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===vS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===_S)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===mS)return o.BYTE;if(r===gS)return o.SHORT;if(r===Il)return o.UNSIGNED_SHORT;if(r===hm)return o.INT;if(r===ua)return o.UNSIGNED_INT;if(r===Fi)return o.FLOAT;if(r===ca)return o.HALF_FLOAT;if(r===xS)return o.ALPHA;if(r===SS)return o.RGB;if(r===Hi)return o.RGBA;if(r===Ia)return o.DEPTH_COMPONENT;if(r===Kr)return o.DEPTH_STENCIL;if(r===mm)return o.RED;if(r===gm)return o.RED_INTEGER;if(r===jr)return o.RG;if(r===vm)return o.RG_INTEGER;if(r===_m)return o.RGBA_INTEGER;if(r===Hc||r===Gc||r===Vc||r===Xc)if(h===Je)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Tp||r===bp||r===Ap||r===Rp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Tp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ap)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Rp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cp||r===wp||r===Dp||r===Np||r===Up||r===Wc||r===Lp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Cp||r===wp)return h===Je?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Dp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Np)return u.COMPRESSED_R11_EAC;if(r===Up)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Wc)return u.COMPRESSED_RG11_EAC;if(r===Lp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Op||r===Pp||r===Ip||r===zp||r===Bp||r===Fp||r===Hp||r===Gp||r===Vp||r===Xp||r===kp||r===Wp||r===qp||r===Yp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Op)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ip)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yp)return h===Je?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zp||r===Kp||r===Jp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Zp)return h===Je?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qp||r===jp||r===qc||r===$p)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Qp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===jp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$p)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const KC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class QC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new DS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Vi({vertexShader:KC,fragmentShader:JC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ke(new vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jC extends ts{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,v=null,y=null,b=null;const w=typeof XRWebGLBinding<"u",M=new QC,S={},D=i.getContextAttributes();let B=null,C=null;const N=[],L=[],P=new Wt;let T=null,O=null;const z=new pi;z.viewport=new ln;const V=new pi;V.viewport=new ln;const J=[z,V],rt=new rb;let q=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ht=N[K];return ht===void 0&&(ht=new kd,N[K]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(K){let ht=N[K];return ht===void 0&&(ht=new kd,N[K]=ht),ht.getGripSpace()},this.getHand=function(K){let ht=N[K];return ht===void 0&&(ht=new kd,N[K]=ht),ht.getHandSpace()};function k(K){const ht=L.indexOf(K.inputSource);if(ht===-1)return;const Rt=N[ht];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,m||h),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",ct);for(let K=0;K<N.length;K++){const ht=L[K];ht!==null&&(L[K]=null,N[K].disconnect(ht))}q=null,Z=null,M.reset();for(const K in S)delete S[K];if(t.setRenderTarget(B),y=null,v=null,g=null,l=null,C=null,Ut.stop(),r.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),O!==null){const K=O.camera;K.fov=O.fov,K.zoom=O.zoom,K.updateProjectionMatrix(),O=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){u=K,r.isPresenting===!0&&me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(B=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",W),l.addEventListener("inputsourceschange",ct),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Ht=null,_t=null;D.depth&&(_t=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Rt=D.stencil?Kr:Ia,Ht=D.stencil?zl:ua);const Dt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(Dt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new Gi(v.textureWidth,v.textureHeight,{format:Hi,type:mi,depthTexture:new Hl(v.textureWidth,v.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Rt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Rt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Hi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ct(K){for(let ht=0;ht<K.removed.length;ht++){const Rt=K.removed[ht],Ht=L.indexOf(Rt);Ht>=0&&(L[Ht]=null,N[Ht].disconnect(Rt))}for(let ht=0;ht<K.added.length;ht++){const Rt=K.added[ht];let Ht=L.indexOf(Rt);if(Ht===-1){for(let Dt=0;Dt<N.length;Dt++)if(Dt>=L.length){L.push(Rt),Ht=Dt;break}else if(L[Dt]===null){L[Dt]=Rt,Ht=Dt;break}if(Ht===-1)break}const _t=N[Ht];_t&&_t.connect(Rt)}}const st=new j,pt=new j;function xt(K,ht,Rt){st.setFromMatrixPosition(ht.matrixWorld),pt.setFromMatrixPosition(Rt.matrixWorld);const Ht=st.distanceTo(pt),_t=ht.projectionMatrix.elements,Dt=Rt.projectionMatrix.elements,Ee=_t[14]/(_t[10]-1),Tt=_t[14]/(_t[10]+1),wt=(_t[9]+1)/_t[5],Ct=(_t[9]-1)/_t[5],bt=(_t[8]-1)/_t[0],At=(Dt[8]+1)/Dt[0],ee=Ee*bt,ne=Ee*At,ae=Ht/(-bt+At),fe=ae*-bt;if(ht.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const H=Ee+ae,Me=Tt+ae,ge=ee-fe,U=ne+(Ht-fe),E=wt*Tt/Me*H,nt=Ct*Tt/Me*H;K.projectionMatrix.makePerspective(ge,U,E,nt,H,Me),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Pt(K,ht){ht===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ht.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ht=K.near,Rt=K.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Rt=M.depthFar)),rt.near=V.near=z.near=ht,rt.far=V.far=z.far=Rt,(q!==rt.near||Z!==rt.far)&&(l.updateRenderState({depthNear:rt.near,depthFar:rt.far}),q=rt.near,Z=rt.far),rt.layers.mask=K.layers.mask|6,z.layers.mask=rt.layers.mask&-5,V.layers.mask=rt.layers.mask&-3;const Ht=K.parent,_t=rt.cameras;Pt(rt,Ht);for(let Dt=0;Dt<_t.length;Dt++)Pt(_t[Dt],Ht);_t.length===2?xt(rt,z,V):rt.projectionMatrix.copy(z.projectionMatrix),O===null&&K.isPerspectiveCamera&&(O={camera:K,fov:K.fov,zoom:K.zoom}),qt(K,rt,Ht)};function qt(K,ht,Rt){Rt===null?K.matrix.copy(ht.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ht.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ht.projectionMatrix),K.projectionMatrixInverse.copy(ht.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return rt},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(K){p=K,v!==null&&(v.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(rt)},this.getCameraTexture=function(K){return S[K]};let F=null;function gt(K,ht){if(_=ht.getViewerPose(m||h),b=ht,_!==null){const Rt=_.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Ht=!1;Rt.length!==rt.cameras.length&&(rt.cameras.length=0,Ht=!0);for(let Tt=0;Tt<Rt.length;Tt++){const wt=Rt[Tt];let Ct=null;if(y!==null)Ct=y.getViewport(wt);else{const At=g.getViewSubImage(v,wt);Ct=At.viewport,Tt===0&&(t.setRenderTargetTextures(C,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(C))}let bt=J[Tt];bt===void 0&&(bt=new pi,bt.layers.enable(Tt),bt.viewport=new ln,J[Tt]=bt),bt.matrix.fromArray(wt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(wt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Tt===0&&(rt.matrix.copy(bt.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale)),Ht===!0&&rt.cameras.push(bt)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const Tt=g.getDepthInformation(Rt[0]);Tt&&Tt.isValid&&Tt.texture&&M.init(Tt,l.renderState)}if(_t&&_t.includes("camera-access")&&w){t.state.unbindTexture(),g=r.getBinding();for(let Tt=0;Tt<Rt.length;Tt++){const wt=Rt[Tt].camera;if(wt){let Ct=S[wt];Ct||(Ct=new DS,S[wt]=Ct);const bt=g.getCameraImage(wt);Ct.sourceTexture=bt}}}}for(let Rt=0;Rt<N.length;Rt++){const Ht=L[Rt],_t=N[Rt];Ht!==null&&_t!==void 0&&_t.update(Ht,ht,m||h)}F&&F(K,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),b=null}const Ut=new XS;Ut.setAnimationLoop(gt),this.setAnimationLoop=function(K){F=K},this.dispose=function(){}}}const $C=new tn,JS=new ye;JS.set(-1,0,0,0,1,0,0,0,1);function tw(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function r(M,S){S.color.getRGB(M.fogColor.value,HS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,D,B,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?u(M,S):S.isMeshLambertMaterial?(u(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),_(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(u(M,S),v(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(u(M,S),b(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),w(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?p(M,S,D,B):S.isSpriteMaterial?m(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const D=t.get(S),B=D.envMap,C=D.envMapRotation;B&&(M.envMap.value=B,M.envMapRotation.value.setFromMatrix4($C.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(JS),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function p(M,S,D,B){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*D,M.scale.value=B*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function m(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function _(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function v(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,D){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const D=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ew(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const L=N.program;r.uniformBlockBinding(C,L)}function m(C,N){let L=l[C.id];L===void 0&&(M(C),L=_(C),l[C.id]=L,C.addEventListener("dispose",D));const P=N.program;r.updateUBOMapping(C,P);const T=t.render.frame;u[C.id]!==T&&(v(C),u[C.id]=T)}function _(C){const N=g();C.__bindingPointIndex=N;const L=o.createBuffer(),P=C.__size,T=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,L),L}function g(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=l[C.id],L=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let T=0,O=L.length;T<O;T++){const z=L[T];if(Array.isArray(z))for(let V=0,J=z.length;V<J;V++)y(z[V],T,V,P);else y(z,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,N,L,P){if(w(C,N,L,P)===!0){const T=C.__offset,O=C.value;if(Array.isArray(O)){let z=0;for(let V=0;V<O.length;V++){const J=O[V],rt=S(J);b(J,C.__data,z),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(z+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,C.__data)}}function b(C,N,L){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,L)}function w(C,N,L,P){const T=C.value,O=N+"_"+L;if(P[O]===void 0)return typeof T=="number"||typeof T=="boolean"?P[O]=T:ArrayBuffer.isView(T)?P[O]=T.slice():P[O]=T.clone(),!0;{const z=P[O];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return P[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function M(C){const N=C.uniforms;let L=0;const P=16;for(let O=0,z=N.length;O<z;O++){const V=Array.isArray(N[O])?N[O]:[N[O]];for(let J=0,rt=V.length;J<rt;J++){const q=V[J],Z=Array.isArray(q.value)?q.value:[q.value];for(let k=0,W=Z.length;k<W;k++){const ct=Z[k],st=S(ct),pt=L%P,xt=pt%st.boundary,Pt=pt+xt;L+=xt,Pt!==0&&P-Pt<st.storage&&(L+=P-Pt),q.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=L,L+=st.storage}}}const T=L%P;return T>0&&(L+=P-T),C.__size=L,C.__cache={},this}function S(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):me("WebGLRenderer: Unsupported uniform value type.",C),N}function D(C){const N=C.target;N.removeEventListener("dispose",D);const L=h.indexOf(N.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function B(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},u={}}return{bind:p,update:m,dispose:B}}const nw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let aa=null;function iw(){return aa===null&&(aa=new CS(nw,16,16,jr,ca),aa.name="DFG_LUT",aa.minFilter=Hn,aa.magFilter=Hn,aa.wrapS=La,aa.wrapT=La,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class aw{constructor(t={}){const{canvas:i=ET(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=mi}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=h;const w=y,M=new Set([_m,vm,gm]),S=new Set([mi,ua,Il,zl,dm,pm]),D=new Uint32Array(4),B=new Int32Array(4),C=new j;let N=null,L=null;const P=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,J=null,rt=null,q=null,Z=null;this._outputColorSpace=di;let k=0,W=0,ct=null,st=-1,pt=null;const xt=new ln,Pt=new ln;let qt=null;const F=new Fe(0);let gt=0,Ut=i.width,K=i.height,ht=1,Rt=null,Ht=null;const _t=new ln(0,0,Ut,K),Dt=new ln(0,0,Ut,K);let Ee=!1;const Tt=new Tm;let wt=!1,Ct=!1;const bt=new tn,At=new j,ee=new ln,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function fe(){return ct===null?ht:1}let H=r;function Me(A,G){return i.getContext(A,G)}let ge,U,E,nt,it,mt,Nt,Bt,vt,Mt,zt,re,Vt,It,Qt,ce,de,Y,Ft,St,Gt,Yt,$;try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${um}`),i.addEventListener("webglcontextlost",xe,!1),i.addEventListener("webglcontextrestored",ve,!1),i.addEventListener("webglcontextcreationerror",ei,!1),H===null){const G="webgl2";if(H=Me(G,A),H===null)throw Me(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(A){throw i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),Ge("WebGLRenderer: "+A.message),A}function Ot(){ge=new i3(H),ge.init(),Gt=new ZC(H,ge),U=new YR(H,ge,t,Gt),E=new qC(H,ge),U.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),rt=H.createFramebuffer(),q=H.createFramebuffer(),Z=H.createFramebuffer(),nt=new s3(H),it=new UC,mt=new YC(H,ge,E,it,U,Gt,nt),Nt=new n3(z),Bt=new lb(H),Yt=new WR(H,Bt),vt=new a3(H,Bt,nt,Yt),Mt=new l3(H,vt,Bt,Yt,nt),Y=new o3(H,U,mt),Qt=new ZR(it),zt=new NC(z,Nt,ge,U,Yt,Qt),re=new tw(z,it),Vt=new OC,It=new HC(ge),de=new kR(z,Nt,E,Mt,b,p),ce=new WC(z,Mt,U),$=new ew(H,nt,U,E),Ft=new qR(H,ge,nt),St=new r3(H,ge,nt),nt.programs=zt.programs,z.capabilities=U,z.extensions=ge,z.properties=it,z.renderLists=Vt,z.shadowMap=ce,z.state=E,z.info=nt}w!==mi&&(O=new c3(w,i.width,i.height,d,l,u));const Lt=new jC(z,H);this.xr=Lt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ge.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ge.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(A){A!==void 0&&(ht=A,this.setSize(Ut,K,!1))},this.getSize=function(A){return A.set(Ut,K)},this.setSize=function(A,G,dt=!0){if(Lt.isPresenting){me("WebGLRenderer: Can't change size while VR device is presenting.");return}Ut=A,K=G,i.width=Math.floor(A*ht),i.height=Math.floor(G*ht),dt===!0&&(i.style.width=A+"px",i.style.height=G+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(Ut*ht,K*ht).floor()},this.setDrawingBufferSize=function(A,G,dt){Ut=A,K=G,ht=dt,i.width=Math.floor(A*dt),i.height=Math.floor(G*dt),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(w===mi){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){me("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(xt)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,G,dt,ot){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,G,dt,ot),E.viewport(xt.copy(_t).multiplyScalar(ht).round())},this.getScissor=function(A){return A.copy(Dt)},this.setScissor=function(A,G,dt,ot){A.isVector4?Dt.set(A.x,A.y,A.z,A.w):Dt.set(A,G,dt,ot),E.scissor(Pt.copy(Dt).multiplyScalar(ht).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(A){E.setScissorTest(Ee=A)},this.setOpaqueSort=function(A){Rt=A},this.setTransparentSort=function(A){Ht=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,dt=!0){let ot=0;if(A){let lt=!1;if(ct!==null){const Zt=ct.texture.format;lt=M.has(Zt)}if(lt){const Zt=ct.texture.type,jt=S.has(Zt),Xt=de.getClearColor(),ie=de.getClearAlpha(),se=Xt.r,pe=Xt.g,Se=Xt.b;jt?(D[0]=se,D[1]=pe,D[2]=Se,D[3]=ie,H.clearBufferuiv(H.COLOR,0,D)):(B[0]=se,B[1]=pe,B[2]=Se,B[3]=ie,H.clearBufferiv(H.COLOR,0,B))}else ot|=H.COLOR_BUFFER_BIT}G&&(ot|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),dt&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",xe,!1),i.removeEventListener("webglcontextrestored",ve,!1),i.removeEventListener("webglcontextcreationerror",ei,!1),de.dispose(),Vt.dispose(),It.dispose(),it.dispose(),Nt.dispose(),Mt.dispose(),Yt.dispose(),$.dispose(),zt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Sr),Lt.removeEventListener("sessionend",Fa),Xi.stop()};function xe(A){A.preventDefault(),ex("WebGLRenderer: Context Lost."),V=!0}function ve(){ex("WebGLRenderer: Context Restored."),V=!1;const A=nt.autoReset,G=ce.enabled,dt=ce.autoUpdate,ot=ce.needsUpdate,lt=ce.type;Ot(),nt.autoReset=A,ce.enabled=G,ce.autoUpdate=dt,ce.needsUpdate=ot,ce.type=lt}function ei(A){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function vi(A){const G=A.target;G.removeEventListener("dispose",vi),af(G)}function af(A){as(A),it.remove(A)}function as(A){const G=it.get(A).programs;G!==void 0&&(G.forEach(function(dt){zt.releaseProgram(dt)}),A.isShaderMaterial&&zt.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,dt,ot,lt,Zt){G===null&&(G=ne);const jt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Xt=Ro(A,G,dt,ot,lt);E.setMaterial(ot,jt);let ie=dt.index,se=1;if(ot.wireframe===!0){if(ie=vt.getWireframeAttribute(dt),ie===void 0)return;se=2}const pe=dt.drawRange,Se=dt.attributes.position;let $t=pe.start*se,Ne=(pe.start+pe.count)*se;Zt!==null&&($t=Math.max($t,Zt.start*se),Ne=Math.min(Ne,(Zt.start+Zt.count)*se)),ie!==null?($t=Math.max($t,0),Ne=Math.min(Ne,ie.count)):Se!=null&&($t=Math.max($t,0),Ne=Math.min(Ne,Se.count));const Re=Ne-$t;if(Re<0||Re===1/0)return;Yt.setup(lt,ot,Xt,dt,ie);let Qe,We=Ft;if(ie!==null&&(Qe=Bt.get(ie),We=St,We.setIndex(Qe)),lt.isMesh)ot.wireframe===!0?(E.setLineWidth(ot.wireframeLinewidth*fe()),We.setMode(H.LINES)):We.setMode(H.TRIANGLES);else if(lt.isLine){let yn=ot.linewidth;yn===void 0&&(yn=1),E.setLineWidth(yn*fe()),lt.isLineSegments?We.setMode(H.LINES):lt.isLineLoop?We.setMode(H.LINE_LOOP):We.setMode(H.LINE_STRIP)}else lt.isPoints?We.setMode(H.POINTS):lt.isSprite&&We.setMode(H.TRIANGLES);if(lt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))We.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{const yn=lt._multiDrawStarts,Kt=lt._multiDrawCounts,cn=lt._multiDrawCount,ze=ie?Bt.get(ie).bytesPerElement:1,Vn=it.get(ot).currentProgram.getUniforms();for(let ni=0;ni<cn;ni++)Vn.setValue(H,"_gl_DrawID",ni),We.render(yn[ni]/ze,Kt[ni])}else if(lt.isInstancedMesh)We.renderInstances($t,Re,lt.count);else if(dt.isInstancedBufferGeometry){const yn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Kt=Math.min(dt.instanceCount,yn);We.renderInstances($t,Re,Kt)}else We.render($t,Re)};function xr(A,G,dt,ot){J!==null&&A.isNodeMaterial&&J.setObject(ot,A),wt===!0&&Qt.setState(A,dt,!1),A.transparent===!0&&A.side===Ua&&A.forceSinglePass===!1?(A.side=Kn,A.needsUpdate=!0,yr(A,G,ot),A.side=Jr,A.needsUpdate=!0,yr(A,G,ot),A.side=Ua):yr(A,G,ot)}this.compile=function(A,G,dt=null){dt===null&&(dt=A),J!==null&&J.renderStart(A,G,dt),L=It.get(dt),L.init(G),T.push(L),dt.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),A!==dt&&A.traverseVisible(function(lt){lt.isLight&&lt.layers.test(G.layers)&&(L.pushLight(lt),lt.castShadow&&L.pushShadow(lt))}),L.setupLights(),J!==null&&J.updateLights(L.state.lightsArray),Ct=this.localClippingEnabled,wt=Qt.init(this.clippingPlanes,Ct),wt===!0&&Qt.setGlobalState(this.clippingPlanes,G),J!==null&&ce.render(L.state.shadowsArray,dt,G);const ot=new Set;return A.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;const Zt=lt.material;if(Zt)if(Array.isArray(Zt))for(let jt=0;jt<Zt.length;jt++){const Xt=Zt[jt];xr(Xt,dt,G,lt),ot.add(Xt)}else xr(Zt,dt,G,lt),ot.add(Zt)}),L=T.pop(),J!==null&&J.renderEnd(),ot},this.compileAsync=function(A,G,dt=null){const ot=this.compile(A,G,dt);return new Promise(lt=>{function Zt(){if(ot.forEach(function(jt){const ie=it.get(jt).currentProgram;(ie===void 0||ie.isReady())&&ot.delete(jt)}),ot.size===0){lt(A);return}setTimeout(Zt,10)}ge.get("KHR_parallel_shader_compile")!==null?Zt():setTimeout(Zt,10)})};let Ba=null;function ha(A){Ba&&Ba(A)}function Sr(){Xi.stop()}function Fa(){Xi.start()}const Xi=new XS;Xi.setAnimationLoop(ha),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(A){Ba=A,Lt.setAnimationLoop(A),A===null?Xi.stop():Xi.start()},Lt.addEventListener("sessionstart",Sr),Lt.addEventListener("sessionend",Fa),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(A,G);const dt=Lt.enabled===!0&&Lt.isPresenting===!0,ot=O!==null&&(ct===null||dt)&&O.begin(z,ct);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(G),G=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,G,ct),L=It.get(A,T.length),L.init(G),L.state.textureUnits=mt.getTextureUnits(),T.push(L),bt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Tt.setFromProjectionMatrix(bt,sa,G.reversedDepth),Ct=this.localClippingEnabled,wt=Qt.init(this.clippingPlanes,Ct),N=Vt.get(A,P.length),N.init(),P.push(N),Lt.enabled===!0&&Lt.isPresenting===!0){const jt=z.xr.getDepthSensingMesh();jt!==null&&Mo(jt,G,-1/0,z.sortObjects)}Mo(A,G,0,z.sortObjects),N.finish(),J!==null&&J.updateLights(L.state.lightsArray),z.sortObjects===!0&&N.sort(Rt,Ht),ae=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,ae&&de.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),wt===!0&&Qt.beginShadows();const lt=L.state.shadowsArray;if(ce.render(lt,A,G),wt===!0&&Qt.endShadows(),(ot&&O.hasRenderPass())===!1){const jt=N.opaque,Xt=N.transmissive;if(L.setupLights(),G.isArrayCamera){const ie=G.cameras;if(Xt.length>0)for(let se=0,pe=ie.length;se<pe;se++){const Se=ie[se];rs(jt,Xt,A,Se)}ae&&de.render(A);for(let se=0,pe=ie.length;se<pe;se++){const Se=ie[se];Eo(N,A,Se,Se.viewport)}}else Xt.length>0&&rs(jt,Xt,A,G),ae&&de.render(A),Eo(N,A,G)}ct!==null&&W===0&&(mt.updateMultisampleRenderTarget(ct),mt.updateRenderTargetMipmap(ct)),ot&&O.end(z),A.isScene===!0&&A.onAfterRender(z,A,G),Yt.resetDefaultState(),st=-1,pt=null,T.pop(),T.length>0?(L=T[T.length-1],mt.setTextureUnits(L.state.textureUnits),wt===!0&&Qt.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?N=P[P.length-1]:N=null,J!==null&&J.renderEnd()};function Mo(A,G,dt,ot){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)dt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Tt)){ot&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const jt=Mt.update(A),Xt=A.material;Xt.visible&&N.push(A,jt,Xt,dt,ee.z,null,G)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Tt))){const jt=Mt.update(A),Xt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ee.copy(A.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),ee.copy(jt.boundingSphere.center)),ee.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(Xt)){const ie=jt.groups;for(let se=0,pe=ie.length;se<pe;se++){const Se=ie[se],$t=Xt[Se.materialIndex];$t&&$t.visible&&N.push(A,jt,$t,dt,ee.z,Se,G)}}else Xt.visible&&N.push(A,jt,Xt,dt,ee.z,null,G)}}const Zt=A.children;for(let jt=0,Xt=Zt.length;jt<Xt;jt++)Mo(Zt[jt],G,dt,ot)}function Eo(A,G,dt,ot){const{opaque:lt,transmissive:Zt,transparent:jt}=A;L.setupLightsView(dt),wt===!0&&Qt.setGlobalState(z.clippingPlanes,dt),ot&&E.viewport(xt.copy(ot)),lt.length>0&&ki(lt,G,dt),Zt.length>0&&ki(Zt,G,dt),jt.length>0&&ki(jt,G,dt),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rs(A,G,dt,ot){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ot.id]===void 0){const $t=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ot.id]=new Gi(1,1,{generateMipmaps:!0,type:$t?ca:mi,minFilter:Zr,samples:Math.max(4,U.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}const Zt=L.state.transmissionRenderTarget[ot.id],jt=ot.viewport||xt;Zt.setSize(jt.z*z.transmissionResolutionScale,jt.w*z.transmissionResolutionScale);const Xt=z.getRenderTarget(),ie=z.getActiveCubeFace(),se=z.getActiveMipmapLevel();z.setRenderTarget(Zt),z.getClearColor(F),gt=z.getClearAlpha(),gt<1&&z.setClearColor(16777215,.5),z.clear(),ae&&de.render(dt);const pe=z.toneMapping;z.toneMapping=oa;const Se=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),L.setupLightsView(ot),wt===!0&&Qt.setGlobalState(z.clippingPlanes,ot),ki(A,dt,ot),mt.updateMultisampleRenderTarget(Zt),mt.updateRenderTargetMipmap(Zt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ne=0,Re=G.length;Ne<Re;Ne++){const Qe=G[Ne],{object:We,geometry:yn,material:Kt,group:cn}=Qe;if(Kt.side===Ua&&We.layers.test(ot.layers)){const ze=Kt.side;Kt.side=Kn,Kt.needsUpdate=!0,Wl(We,dt,ot,yn,Kt,cn),Kt.side=ze,Kt.needsUpdate=!0,$t=!0}}$t===!0&&(mt.updateMultisampleRenderTarget(Zt),mt.updateRenderTargetMipmap(Zt))}z.setRenderTarget(Xt,ie,se),z.setClearColor(F,gt),Se!==void 0&&(ot.viewport=Se),z.toneMapping=pe}function ki(A,G,dt){const ot=G.isScene===!0?G.overrideMaterial:null;for(let lt=0,Zt=A.length;lt<Zt;lt++){const jt=A[lt],{object:Xt,geometry:ie,group:se}=jt;let pe=jt.material;pe.allowOverride===!0&&ot!==null&&(pe=ot),Xt.layers.test(dt.layers)&&Wl(Xt,G,dt,ie,pe,se)}}function Wl(A,G,dt,ot,lt,Zt){J!==null&&lt.isNodeMaterial&&J.setObject(A,lt),A.onBeforeRender(z,G,dt,ot,lt,Zt),A.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),lt.onBeforeRender(z,G,dt,ot,A,Zt),lt.transparent===!0&&lt.side===Ua&&lt.forceSinglePass===!1?(lt.side=Kn,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,A,Zt),lt.side=Jr,lt.needsUpdate=!0,z.renderBufferDirect(dt,G,ot,lt,A,Zt),lt.side=Ua):z.renderBufferDirect(dt,G,ot,lt,A,Zt),A.onAfterRender(z,G,dt,ot,lt,Zt)}function yr(A,G,dt){G.isScene!==!0&&(G=ne);const ot=it.get(A),lt=L.state.lights,Zt=L.state.shadowsArray,jt=lt.state.version,Xt=zt.getParameters(A,lt.state,Zt,G,dt,L.state.lightProbeGridArray),ie=zt.getProgramCacheKey(Xt);let se=ot.programs;ot.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,ot.fog=G.fog;const pe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ot.envMap=Nt.get(A.envMap||ot.environment,pe),ot.envMapRotation=ot.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,se===void 0&&(A.addEventListener("dispose",vi),se=new Map,ot.programs=se);let Se=se.get(ie);if(Se!==void 0){if(ot.currentProgram===Se&&ot.lightsStateVersion===jt)return bo(A,Xt),Se}else Xt.uniforms=zt.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,dt,Xt),A.onBeforeCompile(Xt,z),Se=zt.acquireProgram(Xt,ie),se.set(ie,Se),ot.uniforms=Xt.uniforms;const $t=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=Qt.uniform),bo(A,Xt),ot.needsLights=Yl(A),ot.lightsStateVersion=jt,ot.needsLights&&($t.ambientLightColor.value=lt.state.ambient,$t.lightProbe.value=lt.state.probe,$t.sunLights.value=lt.state.sun,$t.sunLightShadows.value=lt.state.sunShadow,$t.directionalLights.value=lt.state.directional,$t.directionalLightShadows.value=lt.state.directionalShadow,$t.spotLights.value=lt.state.spot,$t.spotLightShadows.value=lt.state.spotShadow,$t.rectAreaLights.value=lt.state.rectArea,$t.ltc_1.value=lt.state.rectAreaLTC1,$t.ltc_2.value=lt.state.rectAreaLTC2,$t.pointLights.value=lt.state.point,$t.pointLightShadows.value=lt.state.pointShadow,$t.hemisphereLights.value=lt.state.hemi,$t.sunShadowMatrix.value=lt.state.sunShadowMatrix,$t.sunShadowCascade.value=lt.state.sunShadowCascade,$t.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,$t.spotLightMatrix.value=lt.state.spotLightMatrix,$t.spotLightMap.value=lt.state.spotLightMap,$t.pointShadowMatrix.value=lt.state.pointShadowMatrix),ot.lightProbeGrid=L.state.lightProbeGridArray.length>0,ot.currentProgram=Se,ot.uniformsList=null,Se}function To(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function bo(A,G){const dt=it.get(A);dt.outputColorSpace=G.outputColorSpace,dt.batching=G.batching,dt.batchingColor=G.batchingColor,dt.instancing=G.instancing,dt.instancingColor=G.instancingColor,dt.instancingMorph=G.instancingMorph,dt.skinning=G.skinning,dt.morphTargets=G.morphTargets,dt.morphNormals=G.morphNormals,dt.morphColors=G.morphColors,dt.morphTargetsCount=G.morphTargetsCount,dt.numClippingPlanes=G.numClippingPlanes,dt.numIntersection=G.numClipIntersection,dt.vertexAlphas=G.vertexAlphas,dt.vertexTangents=G.vertexTangents,dt.toneMapping=G.toneMapping}function Ao(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let dt=0,ot=A.length;dt<ot;dt++){const lt=A[dt];if(lt.texture!==null&&lt.boundingBox.containsPoint(C))return lt}return null}function Ro(A,G,dt,ot,lt){G.isScene!==!0&&(G=ne),mt.resetTextureUnits();const Zt=G.fog,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?G.environment:null,Xt=ct===null?z.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Be.workingColorSpace,ie=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,se=Nt.get(ot.envMap||jt,ie),pe=ot.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Se=!!dt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),$t=!!dt.morphAttributes.position,Ne=!!dt.morphAttributes.normal,Re=!!dt.morphAttributes.color;let Qe=oa;ot.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Qe=z.toneMapping);const We=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,yn=We!==void 0?We.length:0,Kt=it.get(ot),cn=L.state.lights;if(wt===!0&&(Ct===!0||A!==pt)){const Oe=A===pt&&ot.id===st;Qt.setState(ot,A,Oe)}let ze=!1;ot.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==cn.state.version||Kt.outputColorSpace!==Xt||lt.isBatchedMesh&&Kt.batching===!1||!lt.isBatchedMesh&&Kt.batching===!0||lt.isBatchedMesh&&Kt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Kt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Kt.instancing===!1||!lt.isInstancedMesh&&Kt.instancing===!0||lt.isSkinnedMesh&&Kt.skinning===!1||!lt.isSkinnedMesh&&Kt.skinning===!0||lt.isInstancedMesh&&Kt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Kt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Kt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Kt.instancingMorph===!1&&lt.morphTexture!==null||Kt.envMap!==se||ot.fog===!0&&Kt.fog!==Zt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Qt.numPlanes||Kt.numIntersection!==Qt.numIntersection)||Kt.vertexAlphas!==pe||Kt.vertexTangents!==Se||Kt.morphTargets!==$t||Kt.morphNormals!==Ne||Kt.morphColors!==Re||Kt.toneMapping!==Qe||Kt.morphTargetsCount!==yn||!!Kt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ze=!0):(ze=!0,Kt.__version=ot.version);let Vn=Kt.currentProgram;ze===!0&&(Vn=yr(ot,G,lt),J&&ot.isNodeMaterial&&J.onUpdateProgram(ot,Vn,Kt));let ni=!1,Wi=!1,Ce=!1;const Ve=Vn.getUniforms(),en=Kt.uniforms;if(E.useProgram(Vn.program)&&(ni=!0,Wi=!0,Ce=!0),ot.id!==st&&(st=ot.id,Wi=!0),Kt.needsLights){const Oe=Ao(L.state.lightProbeGridArray,lt);Kt.lightProbeGrid!==Oe&&(Kt.lightProbeGrid=Oe,Wi=!0)}if(ni||pt!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(H,"projectionMatrix",A.projectionMatrix),Ve.setValue(H,"viewMatrix",A.matrixWorldInverse);const fn=Ve.map.cameraPosition;fn!==void 0&&fn.setValue(H,At.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Ve.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ve.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),pt!==A&&(pt=A,Wi=!0,Ce=!0)}if(Kt.needsLights&&(cn.state.sunShadowMap.length>0&&Ve.setValue(H,"sunShadowMap",cn.state.sunShadowMap,mt),cn.state.directionalShadowMap.length>0&&Ve.setValue(H,"directionalShadowMap",cn.state.directionalShadowMap,mt),cn.state.spotShadowMap.length>0&&Ve.setValue(H,"spotShadowMap",cn.state.spotShadowMap,mt),cn.state.pointShadowMap.length>0&&Ve.setValue(H,"pointShadowMap",cn.state.pointShadowMap,mt)),lt.isSkinnedMesh){Ve.setOptional(H,lt,"bindMatrix"),Ve.setOptional(H,lt,"bindMatrixInverse");const Oe=lt.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ve.setValue(H,"boneTexture",Oe.boneTexture,mt))}lt.isBatchedMesh&&(Ve.setOptional(H,lt,"batchingTexture"),Ve.setValue(H,"batchingTexture",lt._matricesTexture,mt),Ve.setOptional(H,lt,"batchingIdTexture"),Ve.setValue(H,"batchingIdTexture",lt._indirectTexture,mt),Ve.setOptional(H,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Ve.setValue(H,"batchingColorTexture",lt._colorsTexture,mt));const ii=dt.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Y.update(lt,dt,Vn),(Wi||Kt.receiveShadow!==lt.receiveShadow)&&(Kt.receiveShadow=lt.receiveShadow,Ve.setValue(H,"receiveShadow",lt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&G.environment!==null&&(en.envMapIntensity.value=G.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=iw()),Wi){if(Ve.setValue(H,"toneMappingExposure",z.toneMappingExposure),Kt.needsLights&&ql(en,Ce),Zt&&ot.fog===!0&&re.refreshFogUniforms(en,Zt),re.refreshMaterialUniforms(en,ot,ht,K,L.state.transmissionRenderTarget[A.id]),Kt.needsLights&&Kt.lightProbeGrid){const Oe=Kt.lightProbeGrid;en.probesSH.value=Oe.texture,en.probesMin.value.copy(Oe.boundingBox.min),en.probesMax.value.copy(Oe.boundingBox.max),en.probesResolution.value.copy(Oe.resolution)}kc.upload(H,To(Kt),en,mt)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(kc.upload(H,To(Kt),en,mt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ve.setValue(H,"center",lt.center),Ve.setValue(H,"modelViewMatrix",lt.modelViewMatrix),Ve.setValue(H,"normalMatrix",lt.normalMatrix),Ve.setValue(H,"modelMatrix",lt.matrixWorld),ot.uniformsGroups!==void 0){const Oe=ot.uniformsGroups;for(let fn=0,da=Oe.length;fn<da;fn++){const Zl=Oe[fn];$.update(Zl,Vn),$.bind(Zl,Vn)}}return Vn}function ql(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.sunLights.needsUpdate=G,A.sunLightShadows.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function Yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(A,G,dt){const ot=it.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),it.get(A.texture).__webglTexture=G,it.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:dt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const dt=it.get(A);dt.__webglFramebuffer=G,dt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,dt=0){ct=A,k=G,W=dt;let ot=null,lt=!1,Zt=!1;if(A){const Xt=it.get(A);if(Xt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(H.FRAMEBUFFER,Xt.__webglFramebuffer),xt.copy(A.viewport),Pt.copy(A.scissor),qt=A.scissorTest,E.viewport(xt),E.scissor(Pt),E.setScissorTest(qt),st=-1;return}else if(Xt.__webglFramebuffer===void 0)mt.setupRenderTarget(A);else if(Xt.__hasExternalTextures)mt.rebindTextures(A,it.get(A.texture).__webglTexture,it.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pe=A.depthTexture;if(Xt.__boundDepthTexture!==pe){if(pe!==null&&it.has(pe)&&(A.width!==pe.image.width||A.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(A)}}const ie=A.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Zt=!0);const se=it.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[G])?ot=se[G][dt]:ot=se[G],lt=!0):A.samples>0&&mt.useMultisampledRTT(A)===!1?ot=it.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?ot=se[dt]:ot=se,xt.copy(A.viewport),Pt.copy(A.scissor),qt=A.scissorTest}else xt.copy(_t).multiplyScalar(ht).floor(),Pt.copy(Dt).multiplyScalar(ht).floor(),qt=Ee;if(dt!==0&&(ot=rt),E.bindFramebuffer(H.FRAMEBUFFER,ot)&&E.drawBuffers(A,ot),E.viewport(xt),E.scissor(Pt),E.setScissorTest(qt),lt){const Xt=it.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Xt.__webglTexture,dt)}else if(Zt){const Xt=G;for(let ie=0;ie<A.textures.length;ie++){const se=it.get(A.textures[ie]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ie,se.__webglTexture,dt,Xt)}}else if(A!==null&&dt!==0){const Xt=it.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xt.__webglTexture,dt)}st=-1};function _i(A){const G=it.get(A);return(G.__readFormat!==A.format||G.__readType!==A.type)&&(G.__readFormat=A.format,G.__readType=A.type,G.__formatReadable=U.textureFormatReadable(A.format),G.__typeReadable=U.textureTypeReadable(A.type)),G}this.readRenderTargetPixels=function(A,G,dt,ot,lt,Zt,jt,Xt=0){if(!(A&&A.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(ie=ie[jt]),ie){E.bindFramebuffer(H.FRAMEBUFFER,ie);try{const se=A.textures[Xt],pe=se.format,Se=se.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xt);const $t=_i(se);if($t.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-ot&&dt>=0&&dt<=A.height-lt&&H.readPixels(G,dt,ot,lt,Gt.convert(pe),Gt.convert(Se),Zt)}finally{const se=ct!==null?it.get(ct).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(A,G,dt,ot,lt,Zt,jt,Xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=it.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&jt!==void 0&&(ie=ie[jt]),ie)if(G>=0&&G<=A.width-ot&&dt>=0&&dt<=A.height-lt){E.bindFramebuffer(H.FRAMEBUFFER,ie);const se=A.textures[Xt],pe=se.format,Se=se.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Xt);const $t=_i(se);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ne=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.bufferData(H.PIXEL_PACK_BUFFER,Zt.byteLength,H.STREAM_READ),H.readPixels(G,dt,ot,lt,Gt.convert(pe),Gt.convert(Se),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);const Re=ct!==null?it.get(ct).__webglFramebuffer:null;E.bindFramebuffer(H.FRAMEBUFFER,Re);const Qe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await TT(H,Qe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ne),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Zt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Ne),H.deleteSync(Qe),Zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,dt=0){const ot=Math.pow(2,-dt),lt=Math.floor(A.image.width*ot),Zt=Math.floor(A.image.height*ot),jt=G!==null?G.x:0,Xt=G!==null?G.y:0;mt.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,dt,0,0,jt,Xt,lt,Zt),E.unbindTexture()},this.copyTextureToTexture=function(A,G,dt=null,ot=null,lt=0,Zt=0){let jt,Xt,ie,se,pe,Se,$t,Ne,Re;const Qe=A.isCompressedTexture?A.mipmaps[Zt]:A.image;if(dt!==null)jt=dt.max.x-dt.min.x,Xt=dt.max.y-dt.min.y,ie=dt.isBox3?dt.max.z-dt.min.z:1,se=dt.min.x,pe=dt.min.y,Se=dt.isBox3?dt.min.z:0;else{const en=Math.pow(2,-lt);jt=Math.floor(Qe.width*en),Xt=Math.floor(Qe.height*en),A.isDataArrayTexture?ie=Qe.depth:A.isData3DTexture?ie=Math.floor(Qe.depth*en):ie=1,se=0,pe=0,Se=0}ot!==null?($t=ot.x,Ne=ot.y,Re=ot.z):($t=0,Ne=0,Re=0);const We=Gt.convert(G.format),yn=Gt.convert(G.type);let Kt;G.isData3DTexture?(mt.setTexture3D(G,0),Kt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(mt.setTexture2DArray(G,0),Kt=H.TEXTURE_2D_ARRAY):(mt.setTexture2D(G,0),Kt=H.TEXTURE_2D),E.activeTexture(H.TEXTURE0),E.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),E.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),E.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const cn=E.getParameter(H.UNPACK_ROW_LENGTH),ze=E.getParameter(H.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(H.UNPACK_SKIP_PIXELS),ni=E.getParameter(H.UNPACK_SKIP_ROWS),Wi=E.getParameter(H.UNPACK_SKIP_IMAGES);E.pixelStorei(H.UNPACK_ROW_LENGTH,Qe.width),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Qe.height),E.pixelStorei(H.UNPACK_SKIP_PIXELS,se),E.pixelStorei(H.UNPACK_SKIP_ROWS,pe),E.pixelStorei(H.UNPACK_SKIP_IMAGES,Se);const Ce=A.isDataArrayTexture||A.isData3DTexture,Ve=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const en=it.get(A),ii=it.get(G),Oe=it.get(en.__renderTarget),fn=it.get(ii.__renderTarget);E.bindFramebuffer(H.READ_FRAMEBUFFER,Oe.__webglFramebuffer),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,fn.__webglFramebuffer);for(let da=0;da<ie;da++)Ce&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(A).__webglTexture,lt,Se+da),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,it.get(G).__webglTexture,Zt,Re+da)),H.blitFramebuffer(se,pe,jt,Xt,$t,Ne,jt,Xt,H.DEPTH_BUFFER_BIT,H.NEAREST);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(lt!==0||A.isRenderTargetTexture||it.has(A)){const en=it.get(A),ii=it.get(G);E.bindFramebuffer(H.READ_FRAMEBUFFER,q),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,Z);for(let Oe=0;Oe<ie;Oe++)Ce?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,lt,Se+Oe):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,lt),Ve?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ii.__webglTexture,Zt,Re+Oe):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ii.__webglTexture,Zt),lt!==0?H.blitFramebuffer(se,pe,jt,Xt,$t,Ne,jt,Xt,H.COLOR_BUFFER_BIT,H.NEAREST):Ve?H.copyTexSubImage3D(Kt,Zt,$t,Ne,Re+Oe,se,pe,jt,Xt):H.copyTexSubImage2D(Kt,Zt,$t,Ne,se,pe,jt,Xt);E.bindFramebuffer(H.READ_FRAMEBUFFER,null),E.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ve?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Kt,Zt,$t,Ne,Re,jt,Xt,ie,We,yn,Qe.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Kt,Zt,$t,Ne,Re,jt,Xt,ie,We,Qe.data):H.texSubImage3D(Kt,Zt,$t,Ne,Re,jt,Xt,ie,We,yn,Qe):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Zt,$t,Ne,jt,Xt,We,yn,Qe.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Zt,$t,Ne,Qe.width,Qe.height,We,Qe.data):H.texSubImage2D(H.TEXTURE_2D,Zt,$t,Ne,jt,Xt,We,yn,Qe);E.pixelStorei(H.UNPACK_ROW_LENGTH,cn),E.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ze),E.pixelStorei(H.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(H.UNPACK_SKIP_ROWS,ni),E.pixelStorei(H.UNPACK_SKIP_IMAGES,Wi),Zt===0&&G.generateMipmaps&&H.generateMipmap(Kt),E.unbindTexture()},this.initRenderTarget=function(A){it.get(A).__webglFramebuffer===void 0&&mt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?mt.setTextureCube(A,0):A.isData3DTexture?mt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?mt.setTexture2DArray(A,0):mt.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){k=0,W=0,ct=null,E.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),i.unpackColorSpace=Be._getUnpackColorSpace()}}const iS="./intro/dreamcore-stairwell-wide.webp",rw="./intro/dreamcore-stairwell-seedance.mp4";function sw(){const o=rn.useRef(null),[t,i]=rn.useState(!1);return rn.useEffect(()=>{const r=o.current,l=matchMedia("(prefers-reduced-motion: reduce)"),u=()=>{document.hidden||l.matches?r.pause():r.play().catch(()=>{})};return u(),document.addEventListener("visibilitychange",u),l.addEventListener("change",u),document.addEventListener("WeixinJSBridgeReady",u),document.addEventListener("pointerdown",u,{once:!0}),()=>{document.removeEventListener("WeixinJSBridgeReady",u),document.removeEventListener("pointerdown",u),r.pause(),document.removeEventListener("visibilitychange",u),l.removeEventListener("change",u)}},[]),le.jsxs("div",{className:"intro-studio-background tape-room-background dreamcore-room-background","aria-hidden":"true",children:[le.jsx("img",{className:"tape-room-poster",src:iS,alt:""}),le.jsx("video",{ref:o,className:`tape-room-video ${t?"ready":""}`,src:rw,poster:iS,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",onCanPlay:()=>i(!0),onError:()=>i(!1)})]})}class ow extends TS{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new is;t.deleteAttribute("uv");const i=new co({side:Kn}),r=new co,l=new tb(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const u=new ke(t,i);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const h=new u1(t,r,6),d=new In;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new ke(t,ro(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new ke(t,ro(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const _=new ke(t,ro(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new ke(t,ro(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const v=new ke(t,ro(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const y=new ke(t,ro(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function ro(o){return new J1({color:0,emissive:16777215,emissiveIntensity:o})}function aS(o,t,i){const r=new PS,l=-o/2,u=-t/2;return r.moveTo(l+i,u),r.lineTo(l+o-i,u),r.quadraticCurveTo(l+o,u,l+o,u+i),r.lineTo(l+o,u+t-i),r.quadraticCurveTo(l+o,u+t,l+o-i,u+t),r.lineTo(l+i,u+t),r.quadraticCurveTo(l,u+t,l,u+t-i),r.lineTo(l,u+i),r.quadraticCurveTo(l,u,l+i,u),r}function rS(o,t,i,r,l,u,h){const d=aS(o,t,i);return d.holes.push(new em(aS(r,l,u).getPoints(48))),new ke(new Rm(d,{depth:.065,bevelEnabled:!0,bevelSegments:4,bevelSize:.035,bevelThickness:.035,curveSegments:32}),h)}function Bc(o,t,i,r){const l=new j(...o),u=new j(...t),h=u.clone().sub(l),d=new ke(new tf(i,i,h.length(),12),r);return d.position.copy(l).add(u).multiplyScalar(.5),d.quaternion.setFromUnitVectors(new j(0,1,0),h.normalize()),d}const lw="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",uw="uniform sampler2D title;uniform float time;uniform float power;uniform float motion;uniform float shutter;varying vec2 vUv;float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){if(abs(vUv.y-.5)>max(.001,shutter)*.5){gl_FragColor=vec4(.005,.009,.008,1.);return;}vec2 uv=vec2(vUv.x,(vUv.y-.5)/max(.001,shutter)+.5);float t=time*motion;float band=exp(-pow((uv.y-fract(t*.13+.2))*45.,2.));float event=step(.994,sin(t*1.73)*.5+.5);uv.x+=sin(uv.y*82.+t*34.)*.0012+event*sin(uv.y*19.+t*31.)*.009;vec3 ink=texture2D(title,uv).rgb;float grain=hash(floor(vUv*vec2(900.,600.))+floor(t*19.));float scan=.84+.16*sin(vUv.y*1200.);float edge=pow(max(0.,1.-length((vUv-.5)*vec2(1.25,1.3))),.35);vec3 col=vec3(.06,.095,.10)+(grain-.5)*.065;col+=ink*vec3(.8,.91,.86)*scan*edge*(.85+.03*sin(t*31.));col+=vec3(.12,.17,.17)*band+event*.11;col+=exp(-pow((vUv.x-.28)*1.3,2.)-pow((vUv.y-.84)*5.,2.))*.045;gl_FragColor=vec4(mix(vec3(.018,.024,.025),col,power),1.);}";function cw({onStart:o,leaving:t=!1}){const i=rn.useRef(o),r=rn.useRef(t);i.current=o,r.current=t;const l=rn.useRef(null),u=rn.useRef(()=>{}),h=rn.useRef(!0),d=rn.useRef(null),[p,m]=rn.useState(!0),[_,g]=rn.useState(!1),[v,y]=rn.useState(!1),[b,w]=rn.useState(!1);rn.useEffect(()=>{h.current=p},[p]),rn.useEffect(()=>{const S=l.current;let D;try{D=new aw({antialias:!0,alpha:!0})}catch{y(!0);return}const B=new TS,C=new pi(34,1,.1,100),N=matchMedia("(prefers-reduced-motion: reduce)").matches;D.setPixelRatio(Math.min(devicePixelRatio,1.8)),D.toneMapping=fm,D.toneMappingExposure=1.28,S.appendChild(D.domElement);const L=new rm(D),P=new ow,T=L.fromScene(P,.05);B.environment=T.texture,P.dispose(),B.add(new ib("#d5d5ba",1.3));for(const[$,Ot,Lt]of[["#fff0ce",4,[-4,5,6]],["#c3d8df",2.6,[5,1,3]],["#f0a98c",1.2,[-2,1,-4]]]){const xe=new nb($,Ot);xe.position.set(...Lt),B.add(xe)}const O=new lo;B.add(O);const z=new lo;O.add(z),O.rotation.set(0,N?0:-.16,N?0:.18);let V=null,J=!N;z.position.y=.4,z.rotation.set(0,0,0);const rt=new co({color:"#b4b4a9",metalness:.87,roughness:.27}),q=new co({color:"#bfc3bd",metalness:1,roughness:.18}),Z=new co({color:"#121818",metalness:.45,roughness:.27}),k=new co({color:"#333b37",metalness:.7,roughness:.45}),W=new ke(new Yr(1,96,64),rt);W.scale.set(2.09,1.36,1.12),W.position.set(0,.12,-.23),z.add(W);const ct=new ke(new Cm(1,.012,8,128),k);ct.rotation.x=Math.PI/2,ct.scale.set(2.075,1.1,1),ct.position.y=.12,ct.visible=!1,z.add(ct);const st=rS(3.92,2.49,.82,3.7,2.27,.73,q);st.position.set(0,.13,.62),z.add(st);const pt=rS(3.7,2.27,.73,3.37,1.96,.6,Z);pt.position.set(0,.13,.73),z.add(pt);const xt=document.createElement("canvas");xt.width=1536,xt.height=896;const Pt=xt.getContext("2d");Pt.fillStyle="#000",Pt.fillRect(0,0,1536,896),Pt.fillStyle="#d8e0d7",Pt.textAlign="center",Pt.font="30px Courier New",Pt.fillText("F U  S H I J I E   /   V I S U A L  A R C H I V E",768,235),Pt.font="italic 190px Georgia",Pt.shadowBlur=9,Pt.shadowColor="#8cbdac",Pt.fillText("Portfolio",768,475),Pt.shadowBlur=0,Pt.fillStyle="#899d93",Pt.font="500 62px Microsoft YaHei, sans-serif",Pt.fillStyle="#bccfc2",Pt.fillText("点击开始",768,640),Pt.strokeStyle="#53645b",Pt.beginPath(),Pt.moveTo(440,555),Pt.lineTo(1096,555),Pt.stroke();const qt=new Sx(xt);qt.colorSpace=di;const F={title:{value:qt},time:{value:0},power:{value:1},motion:{value:N?0:1},shutter:{value:1}},gt=new Vi({uniforms:F,vertexShader:lw,fragmentShader:uw}),Ut=new vo(3.37,1.96,100,64),K=Ut.attributes.position;for(let $=0;$<K.count;$++){let Ot=K.getX($),Lt=K.getY($),xe=Lt/.98;Ot*=Math.sqrt(1-Math.pow(Math.abs(xe),6)*.14);const ve=Ot/1.685;K.setXYZ($,Ot,Lt,.15*(1-ve*ve)*(1-xe*xe))}Ut.computeVertexNormals();const ht=new ke(Ut,gt);ht.position.set(0,.13,.83),z.add(ht),z.add(Bc([0,-1.12,-.1],[0,-1.7,-.1],.12,q));const Rt=new ke(new Yr(.17,24,16),q);Rt.position.set(0,-1.65,-.1),z.add(Rt);for(const[$,Ot]of[[-1.12,.72],[1.12,.72],[0,-1.05]]){z.add(Bc([0,-1.6,-.1],[$,-1.94,Ot],.055,q));const Lt=new ke(new Yr(.06,16,12),Z);Lt.position.set($,-1.94,Ot),z.add(Lt)}z.add(Bc([-.9,1.26,-.3],[-1.5,2.66,-.5],.013,q)),z.add(Bc([-.9,1.26,-.3],[-1.08,1.82,-.36],.025,rt));const Ht=new ke(new Yr(.024,12,8),q);Ht.position.set(-1.5,2.66,-.5),z.add(Ht);for(let $=0;$<2;$++){const Ot=new ke(new tf(.105,.105,.09,32),Z);Ot.rotation.x=Math.PI/2,Ot.position.set(1.15-$*.3,-1.03,.66),z.add(Ot)}for(let $=0;$<14;$++){const Ot=new ke(new is(.025,.42,.025),Z);Ot.position.set(($-6.5)*.095,.15,-1.332+Math.abs($-6.5)*.006),z.add(Ot)}const _t=document.createElement("canvas");_t.width=512,_t.height=64;const Dt=_t.getContext("2d");Dt.fillStyle="#242c2a",Dt.fillRect(0,0,512,64),Dt.fillStyle="#c3c4b3",Dt.font="22px Georgia",Dt.textAlign="center",Dt.fillText("F U  S H I J I E",256,41);const Ee=new Sx(_t),Tt=new ke(new vo(.65,.08),new Qc({map:Ee}));Tt.position.set(0,-1.015,.855),z.add(Tt);const wt=new ke(new Yr(.024,12,8),new Qc({color:"#f4a352"}));wt.position.set(-1.12,-1.03,.71),z.add(wt);let Ct=0,bt=0,At=0,ee=0,ne=0,ae=0,fe=0,H=!0,Me=!1,ge=-1,U=0,E=0,nt=0,it=0,mt=0,Nt=!1;const Bt=new sb,vt=new Wt,Mt=$=>{var Lt;const Ot=D.domElement.getBoundingClientRect();return vt.set(($.clientX-Ot.left)/Ot.width*2-1,-($.clientY-Ot.top)/Ot.height*2+1),Bt.setFromCamera(vt,C),((Lt=Bt.intersectObject(z,!0)[0])==null?void 0:Lt.object)===ht},zt=()=>{Ct=_l.clamp(At+ne,-.6,.6),bt=ee+ae},re=$=>{if(!r.current){if(Me){if($.pointerId!==ge)return;mt=Math.max(mt,Math.hypot($.clientX-nt,$.clientY-it)),ee+=($.clientX-U)*.006,At=_l.clamp(At+($.clientY-E)*.004,-.55,.55),U=$.clientX,E=$.clientY,zt();return}N||$.pointerType==="touch"||(ae=_l.clamp($.clientX/window.innerWidth*2-1,-1,1)*.11,ne=_l.clamp($.clientY/window.innerHeight*2-1,-1,1)*.07,zt())}},Vt=$=>{$.button!==0||!$.isPrimary||r.current||(nt=$.clientX,it=$.clientY,mt=0,Nt=Mt($),J=!1,O.rotation.set(0,0,0),Me=!0,ge=$.pointerId,U=$.clientX,E=$.clientY,At=Ct,ee=bt,ne=ae=0,D.domElement.setPointerCapture($.pointerId),S.classList.add("dragging"),S.focus({preventScroll:!0}),$.preventDefault())},It=$=>{if($&&$.pointerId!==ge)return;const Ot=($==null?void 0:$.type)==="pointerup"&&Nt&&mt<7&&Math.hypot($.clientX-nt,$.clientY-it)<7&&h.current&&!r.current,Lt=ge;Me=!1,ge=-1,Nt=!1,S.classList.remove("dragging"),Lt>=0&&D.domElement.hasPointerCapture(Lt)&&D.domElement.releasePointerCapture(Lt),Ot&&i.current()},Qt=()=>{It(),ne=ae=0,zt()},ce=()=>{J=!1,O.rotation.set(0,0,0),It(),At=ee=ne=ae=0,zt()},de=$=>{!$.relatedTarget&&!Me&&(ne=ae=0,zt())};D.domElement.addEventListener("pointerdown",Vt),window.addEventListener("pointerup",It),window.addEventListener("pointercancel",It),D.domElement.addEventListener("lostpointercapture",It);const Y=()=>{C.aspect=S.clientWidth/S.clientHeight,C.position.set(0,.42,C.aspect<.8?10.4:C.aspect<1.2?8.2:7.4),C.lookAt(0,.4,0),C.updateProjectionMatrix(),D.setSize(S.clientWidth,S.clientHeight)},Ft=new ResizeObserver(Y);Ft.observe(S),Y(),window.addEventListener("pointermove",re),window.addEventListener("pointerout",de),window.addEventListener("blur",Qt),u.current=ce;const St=$=>{if(($.key==="Enter"||$.key===" ")&&h.current&&!r.current){$.preventDefault(),i.current();return}["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home"].includes($.key)&&($.preventDefault(),$.key==="ArrowLeft"&&(bt=Math.max(-.11,bt-.015)),$.key==="ArrowRight"&&(bt=Math.min(.11,bt+.015)),$.key==="ArrowUp"&&(Ct=Math.max(-.07,Ct-.01)),$.key==="ArrowDown"&&(Ct=Math.min(.07,Ct+.01)),$.key==="Home"&&ce())};S.addEventListener("keydown",St);const Gt=$=>{if(fe=requestAnimationFrame(Gt),!H)return;if(V===null&&(V=$),J){const Lt=_l.clamp(($-V-220)/1450,0,1),xe=Math.pow(1-Lt,3);O.rotation.z=.18*xe,O.rotation.y=-.16*xe,Lt===1&&(J=!1)}const Ot=Me?.16:.045;z.rotation.y+=(bt-z.rotation.y)*Ot,z.rotation.x+=(Ct-z.rotation.x)*Ot,F.time.value=$*.001,F.shutter.value+=((r.current?0:1)-F.shutter.value)*.19,F.power.value+=(Number(h.current)-F.power.value)*.16,wt.visible=h.current,D.render(B,C)};fe=requestAnimationFrame(Gt),g(!0);const Yt=()=>{H=!document.hidden};return document.addEventListener("visibilitychange",Yt),()=>{cancelAnimationFrame(fe),Ft.disconnect(),window.removeEventListener("pointermove",re),window.removeEventListener("pointerout",de),window.removeEventListener("blur",Qt),D.domElement.removeEventListener("pointerdown",Vt),window.removeEventListener("pointerup",It),window.removeEventListener("pointercancel",It),D.domElement.removeEventListener("lostpointercapture",It),S.removeEventListener("keydown",St),document.removeEventListener("visibilitychange",Yt),B.traverse($=>{$ instanceof ke&&($.geometry.dispose(),(Array.isArray($.material)?$.material:[$.material]).forEach(Ot=>Ot.dispose()))}),qt.dispose(),Ee.dispose(),T.dispose(),L.dispose(),D.dispose(),D.domElement.remove()}},[]);async function M(){if(d.current){await d.current.close(),d.current=null,w(!1);return}const S=new AudioContext,D=S.createBuffer(1,S.sampleRate*2,S.sampleRate),B=D.getChannelData(0);for(let P=0;P<B.length;P++)B[P]=(Math.random()*2-1)*.08;const C=S.createBufferSource();C.buffer=D,C.loop=!0;const N=S.createBiquadFilter();N.type="lowpass",N.frequency.value=800;const L=S.createGain();L.gain.value=.12,C.connect(N).connect(L).connect(S.destination),C.start(),d.current=S,w(!0)}return rn.useEffect(()=>()=>{var S;(S=d.current)==null||S.close()},[]),le.jsxs("main",{className:`orbit-page quiet-intro ${p?"":"powered-off"}`,children:[le.jsx(sw,{}),le.jsx("div",{className:"film-grain","aria-hidden":"true"}),le.jsxs("header",{className:"orbit-header",children:[le.jsxs("a",{href:"#",className:"orbit-name",children:["付世杰",le.jsx("span",{children:"Fu Shijie"})]}),le.jsx("span",{className:"header-note",children:"图像、时间，与一些想象。"}),le.jsxs("button",{className:"sound-toggle","aria-pressed":b,onClick:M,children:[le.jsxs("span",{className:b?"sound-bars active":"sound-bars",children:[le.jsx("i",{}),le.jsx("i",{}),le.jsx("i",{}),le.jsx("i",{})]}),"声音",b?"开":"关"]})]}),le.jsxs("div",{className:"scene-caption",children:[le.jsx("span",{className:"live-dot"})," 正在接收灵感信号"]}),le.jsx("div",{className:"tv-shadow"}),le.jsx("div",{ref:l,className:"television-stage",role:"button",tabIndex:0,"aria-label":"点击开始，进入二级界面；也可拖动电视旋转"}),!_&&!v&&le.jsx("div",{className:"booting",children:"正在接通信号…"}),v&&le.jsxs("button",{className:"webgl-fallback",onClick:o,children:[le.jsx("span",{children:"Portfolio"}),le.jsx("p",{children:"点击开始"})]}),le.jsxs("div",{className:"scene-controls",children:[le.jsx("button",{onClick:()=>u.current(),children:"↺ 复位"}),le.jsx("span",{children:"鼠标跟随 · 按住拖动"}),le.jsxs("button",{onClick:()=>m(!p),"aria-pressed":p,children:["⏻ 电视",p?"开":"关"]})]}),le.jsxs("footer",{className:"orbit-footer",children:[le.jsx("span",{children:"视觉 / 动态 / 影像"}),le.jsx("span",{children:"保持好奇，继续创作。"})]})]})}function fw({phase:o,onBack:t}){const i=rn.useRef(null),r=rn.useRef(null);return rn.useEffect(()=>{var v;const l=i.current,u=l.getContext("2d",{alpha:!1});l.width=320,l.height=240;const h=matchMedia("(prefers-reduced-motion: reduce)").matches,d=u.createImageData(320,240);let p=0,m=0,_=0;const g=y=>{if(_=requestAnimationFrame(g),document.hidden||y-m<65)return;m=y;const b=h?0:y*.001;for(let S=0;S<d.data.length;S+=4){const D=Math.random()*22-11;d.data[S]=25+D*.55,d.data[S+1]=45+D*.65,d.data[S+2]=42+D*.65,d.data[S+3]=255}u.putImageData(d,0,0);const w=b*18%340-50,M=u.createLinearGradient(0,w-30,0,w+30);M.addColorStop(0,"rgba(160,207,206,0)"),M.addColorStop(.5,"rgba(160,207,206,.09)"),M.addColorStop(1,"rgba(160,207,206,0)"),u.fillStyle=M,u.fillRect(0,w-30,320,60),u.fillStyle="rgba(6,30,32,.13)";for(let S=0;S<240;S+=3)u.fillRect(0,S,320,1);!h&&p%113===0&&(u.fillStyle="rgba(186,220,208,.13)",u.fillRect(0,p*7%240,320,2)),p++};return _=requestAnimationFrame(g),(v=r.current)==null||v.focus({preventScroll:!0}),()=>cancelAnimationFrame(_)},[]),le.jsx("main",{ref:r,tabIndex:-1,className:"studio-page","aria-label":"二级界面，满屏复古电视",children:le.jsxs("div",{className:"crt-cabinet",children:[le.jsx("button",{className:"studio-back",onClick:t,children:"〈 返回开场"}),le.jsx("div",{className:`crt-screen-well ${o==="on"?"switching-on":""} ${o==="off"?"switching-off":""}`,children:le.jsxs("div",{className:"crt-display-surface",children:[le.jsx("canvas",{ref:i,"aria-hidden":"true"}),le.jsx("div",{className:"crt-content","aria-label":"电视信息展示区"}),le.jsx("div",{className:"crt-vignette","aria-hidden":"true"}),le.jsx("div",{className:"crt-glass","aria-hidden":"true"}),le.jsx("div",{className:"crt-reflection","aria-hidden":"true"})]})}),le.jsx("div",{className:"crt-lower-bezel","aria-hidden":"true",children:le.jsx("span",{className:"crt-nameplate",children:"FU SHIJIE"})}),le.jsxs("div",{className:"crt-hardware","aria-hidden":"true",children:[le.jsx("div",{className:"crt-speaker crt-speaker-left"}),le.jsx("div",{className:"crt-speaker crt-speaker-right"}),le.jsx("div",{className:"crt-vhs-surround",children:le.jsx("div",{className:"crt-vhs-door",children:le.jsx("span",{children:"VHS HQ"})})}),le.jsxs("div",{className:"crt-small-controls",children:[le.jsx("i",{}),le.jsx("i",{}),le.jsx("i",{}),le.jsx("i",{}),le.jsx("i",{})]}),le.jsx("div",{className:"crt-power",children:le.jsx("i",{})})]})]})})}function hw(){const[o,t]=rn.useState(location.hash==="#screen"?"studio":"intro"),[i,r]=rn.useState("idle"),l=rn.useRef(!1),u=rn.useRef([]),h=(p,m=!0)=>{if(l.current||p===o)return;l.current=!0,r("off");const _=matchMedia("(prefers-reduced-motion: reduce)").matches;u.current.push(setTimeout(()=>{t(p),r("on"),m&&history.pushState(null,"",p==="studio"?"#screen":location.pathname+location.search)},_?120:700)),u.current.push(setTimeout(()=>{r("idle"),l.current=!1},_?300:1600))},d=rn.useRef(h);return d.current=h,rn.useEffect(()=>{const p=()=>d.current(location.hash==="#screen"?"studio":"intro",!1);return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p),u.current.forEach(clearTimeout)}},[]),le.jsxs("div",{className:`portfolio-app phase-${i}`,"aria-busy":i!=="idle",children:[o==="intro"?le.jsx(cw,{onStart:()=>h("studio"),leaving:i==="off"}):le.jsx(fw,{phase:i,onBack:()=>h("intro")}),i!=="idle"&&le.jsx("div",{className:`crt-transition crt-transition-${i}`,"aria-hidden":"true",children:le.jsx("span",{})},`${o}-${i}`)]})}GE.createRoot(document.getElementById("root")).render(le.jsx(OE.StrictMode,{children:le.jsx(hw,{})}));
