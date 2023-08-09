(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function hh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},il={},rf={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),gh=Symbol.for("react.portal"),vh=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),wh=Symbol.for("react.provider"),Sh=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),jh=Symbol.for("react.suspense"),$h=Symbol.for("react.memo"),Ch=Symbol.for("react.lazy"),tc=Symbol.iterator;function Eh(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lf=Object.assign,sf={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||of}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function af(){}af.prototype=Ar.prototype;function Ba(e,t,n){this.props=e,this.context=t,this.refs=sf,this.updater=n||of}var Ua=Ba.prototype=new af;Ua.constructor=Ba;lf(Ua,Ar.prototype);Ua.isPureReactComponent=!0;var nc=Array.isArray,uf=Object.prototype.hasOwnProperty,Ha={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)uf.call(t,r)&&!cf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Io,type:e,key:i,ref:l,props:o,_owner:Ha.current}}function Ph(e,t){return{$$typeof:Io,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Io}function bh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function Yl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bh(""+e.key):t.toString(36)}function di(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Io:case gh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Yl(l,0):r,nc(o)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),di(o,t,n,"",function(c){return c})):o!=null&&(Wa(o)&&(o=Ph(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(rc,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",nc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Yl(i,s);l+=di(i,t,n,u,o)}else if(u=Eh(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Yl(i,s++),l+=di(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vo(e,t,n){if(e==null)return e;var r=[],o=0;return di(e,r,"","",function(i){return t.call(n,i,o++)}),r}function _h(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},fi={transition:null},Th={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:fi,ReactCurrentOwner:Ha};L.Children={map:Vo,forEach:function(e,t,n){Vo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vo(e,function(){t++}),t},toArray:function(e){return Vo(e,function(t){return t})||[]},only:function(e){if(!Wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Ar;L.Fragment=vh;L.Profiler=xh;L.PureComponent=Ba;L.StrictMode=yh;L.Suspense=jh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Th;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ha.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)uf.call(t,u)&&!cf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Io,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:Sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wh,_context:e},e.Consumer=e};L.createElement=df;L.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:kh,render:e}};L.isValidElement=Wa;L.lazy=function(e){return{$$typeof:Ch,_payload:{_status:-1,_result:e},_init:_h}};L.memo=function(e,t){return{$$typeof:$h,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=fi.transition;fi.transition={};try{e()}finally{fi.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return Se.current.useCallback(e,t)};L.useContext=function(e){return Se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};L.useEffect=function(e,t){return Se.current.useEffect(e,t)};L.useId=function(){return Se.current.useId()};L.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};L.useRef=function(e){return Se.current.useRef(e)};L.useState=function(e){return Se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Se.current.useTransition()};L.version="18.2.0";rf.exports=L;var z=rf.exports;const Cn=hh(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh=z,Oh=Symbol.for("react.element"),Rh=Symbol.for("react.fragment"),Nh=Object.prototype.hasOwnProperty,Ah=zh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lh={key:!0,ref:!0,__self:!0,__source:!0};function ff(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Nh.call(t,r)&&!Lh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Oh,type:e,key:i,ref:l,props:o,_owner:Ah.current}}il.Fragment=Rh;il.jsx=ff;il.jsxs=ff;nf.exports=il;var a=nf.exports,Ls={},pf={exports:{}},Le={},mf={exports:{}},hf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,O){var N=b.length;b.push(O);e:for(;0<N;){var H=N-1>>>1,W=b[H];if(0<o(W,O))b[H]=O,b[N]=W,N=H;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var O=b[0],N=b.pop();if(N!==O){b[0]=N;e:for(var H=0,W=b.length,fn=W>>>1;H<fn;){var Qe=2*(H+1)-1,bt=b[Qe],Te=Qe+1,ht=b[Te];if(0>o(bt,N))Te<W&&0>o(ht,bt)?(b[H]=ht,b[Te]=N,H=Te):(b[H]=bt,b[Qe]=N,H=Qe);else if(Te<W&&0>o(ht,N))b[H]=ht,b[Te]=N,H=Te;else break e}}return O}function o(b,O){var N=b.sortIndex-O.sortIndex;return N!==0?N:b.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],p=1,g=null,m=3,y=!1,x=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(b){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=b)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function S(b){if(w=!1,h(b),!x)if(n(u)!==null)x=!0,Br($);else{var O=n(c);O!==null&&Ur(S,O.startTime-b)}}function $(b,O){x=!1,w&&(w=!1,f(T),T=-1),y=!0;var N=m;try{for(h(O),g=n(u);g!==null&&(!(g.expirationTime>O)||b&&!oe());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var W=H(g.expirationTime<=O);O=e.unstable_now(),typeof W=="function"?g.callback=W:g===n(u)&&r(u),h(O)}else r(u);g=n(u)}if(g!==null)var fn=!0;else{var Qe=n(c);Qe!==null&&Ur(S,Qe.startTime-O),fn=!1}return fn}finally{g=null,m=N,y=!1}}var E=!1,j=null,T=-1,M=5,R=-1;function oe(){return!(e.unstable_now()-R<M)}function cn(){if(j!==null){var b=e.unstable_now();R=b;var O=!0;try{O=j(!0,b)}finally{O?dn():(E=!1,j=null)}}else E=!1}var dn;if(typeof d=="function")dn=function(){d(cn)};else if(typeof MessageChannel<"u"){var Ho=new MessageChannel,Xl=Ho.port2;Ho.port1.onmessage=cn,dn=function(){Xl.postMessage(null)}}else dn=function(){P(cn,0)};function Br(b){j=b,E||(E=!0,dn())}function Ur(b,O){T=P(function(){b(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Br($))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var N=m;m=O;try{return b()}finally{m=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,O){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var N=m;m=b;try{return O()}finally{m=N}},e.unstable_scheduleCallback=function(b,O,N){var H=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?H+N:H):N=H,b){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=N+W,b={id:p++,callback:O,priorityLevel:b,startTime:N,expirationTime:W,sortIndex:-1},N>H?(b.sortIndex=N,t(c,b),n(u)===null&&b===n(c)&&(w?(f(T),T=-1):w=!0,Ur(S,N-H))):(b.sortIndex=W,t(u,b),x||y||(x=!0,Br($))),b},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(b){var O=m;return function(){var N=m;m=O;try{return b.apply(this,arguments)}finally{m=N}}}})(hf);mf.exports=hf;var Ih=mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=z,Ne=Ih;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vf=new Set,go={};function On(e,t){Sr(e,t),Sr(e+"Capture",t)}function Sr(e,t){for(go[e]=t,e=0;e<t.length;e++)vf.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Is=Object.prototype.hasOwnProperty,Mh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},ic={};function Dh(e){return Is.call(ic,e)?!0:Is.call(oc,e)?!1:Mh.test(e)?ic[e]=!0:(oc[e]=!0,!1)}function Fh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bh(e,t,n,r){if(t===null||typeof t>"u"||Fh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ga(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Va,Ga);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Va,Ga);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Va,Ga);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xa(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bh(t,n,o,r)&&(n=null),r||o===null?Dh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Go=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Ms=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),xf=Symbol.for("react.context"),Ya=Symbol.for("react.forward_ref"),Ds=Symbol.for("react.suspense"),Fs=Symbol.for("react.suspense_list"),Ka=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),wf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Kl;function Zr(e){if(Kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Kl=t&&t[1]||""}return`
`+Kl+e}var ql=!1;function Jl(e,t){if(!e||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function Uh(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=Jl(e.type,!1),e;case 11:return e=Jl(e.type.render,!1),e;case 1:return e=Jl(e.type,!0),e;default:return""}}function Bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tr:return"Fragment";case er:return"Portal";case Ms:return"Profiler";case Qa:return"StrictMode";case Ds:return"Suspense";case Fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case Ya:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ka:return t=e.displayName||null,t!==null?t:Bs(e.type)||"Memo";case Dt:t=e._payload,e=e._init;try{return Bs(e(t))}catch{}}return null}function Hh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bs(t);case 8:return t===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wh(e){var t=Sf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xo(e){e._valueTracker||(e._valueTracker=Wh(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Us(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jf(e,t){t=t.checked,t!=null&&Xa(e,"checked",t,!1)}function Hs(e,t){jf(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ws(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ws(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ac(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ws(e,t,n){(t!=="number"||Pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(eo(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function $f(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qo,Ef=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(e){Vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),io[t]=io[e]})});function Pf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||io.hasOwnProperty(e)&&io[e]?(""+t).trim():t+"px"}function bf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Pf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Gh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xs(e,t){if(t){if(Gh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ys=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ks=null,mr=null,hr=null;function dc(e){if(e=Fo(e)){if(typeof Ks!="function")throw Error(C(280));var t=e.stateNode;t&&(t=cl(t),Ks(e.stateNode,e.type,t))}}function _f(e){mr?hr?hr.push(e):hr=[e]:mr=e}function Tf(){if(mr){var e=mr,t=hr;if(hr=mr=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function zf(e,t){return e(t)}function Of(){}var Zl=!1;function Rf(e,t,n){if(Zl)return e(t,n);Zl=!0;try{return zf(e,t,n)}finally{Zl=!1,(mr!==null||hr!==null)&&(Of(),Tf())}}function yo(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var qs=!1;if(kt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){qs=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{qs=!1}function Xh(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var lo=!1,bi=null,_i=!1,Js=null,Qh={onError:function(e){lo=!0,bi=e}};function Yh(e,t,n,r,o,i,l,s,u){lo=!1,bi=null,Xh.apply(Qh,arguments)}function Kh(e,t,n,r,o,i,l,s,u){if(Yh.apply(this,arguments),lo){if(lo){var c=bi;lo=!1,bi=null}else throw Error(C(198));_i||(_i=!0,Js=c)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(Rn(e)!==e)throw Error(C(188))}function qh(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fc(o),e;if(i===r)return fc(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Af(e){return e=qh(e),e!==null?Lf(e):null}function Lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lf(e);if(t!==null)return t;e=e.sibling}return null}var If=Ne.unstable_scheduleCallback,pc=Ne.unstable_cancelCallback,Jh=Ne.unstable_shouldYield,Zh=Ne.unstable_requestPaint,te=Ne.unstable_now,eg=Ne.unstable_getCurrentPriorityLevel,Ja=Ne.unstable_ImmediatePriority,Mf=Ne.unstable_UserBlockingPriority,Ti=Ne.unstable_NormalPriority,tg=Ne.unstable_LowPriority,Df=Ne.unstable_IdlePriority,ll=null,dt=null;function ng(e){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ll,e,void 0,(e.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:ig,rg=Math.log,og=Math.LN2;function ig(e){return e>>>=0,e===0?32:31-(rg(e)/og|0)|0}var Yo=64,Ko=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=to(s):(i&=l,i!==0&&(r=to(i)))}else l=n&~o,l!==0?r=to(l):i!==0&&(r=to(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-et(t),o=1<<n,r|=e[n],t&=~o;return r}function lg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-et(i),s=1<<l,u=o[l];u===-1?(!(s&n)||s&r)&&(o[l]=lg(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ff(){var e=Yo;return Yo<<=1,!(Yo&4194240)&&(Yo=64),e}function es(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Mo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-et(t),e[t]=n}function ag(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-et(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Za(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Uf,eu,Hf,Wf,Vf,ea=!1,qo=[],Gt=null,Xt=null,Qt=null,xo=new Map,wo=new Map,Bt=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(t.pointerId)}}function Gr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Fo(t),t!==null&&eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cg(e,t,n,r,o){switch(t){case"focusin":return Gt=Gr(Gt,e,t,n,r,o),!0;case"dragenter":return Xt=Gr(Xt,e,t,n,r,o),!0;case"mouseover":return Qt=Gr(Qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return xo.set(i,Gr(xo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,wo.set(i,Gr(wo.get(i)||null,e,t,n,r,o)),!0}return!1}function Gf(e){var t=vn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=Nf(n),t!==null){e.blockedOn=t,Vf(e.priority,function(){Hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ta(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ys=r,n.target.dispatchEvent(r),Ys=null}else return t=Fo(n),t!==null&&eu(t),e.blockedOn=n,!1;t.shift()}return!0}function hc(e,t,n){pi(e)&&n.delete(t)}function dg(){ea=!1,Gt!==null&&pi(Gt)&&(Gt=null),Xt!==null&&pi(Xt)&&(Xt=null),Qt!==null&&pi(Qt)&&(Qt=null),xo.forEach(hc),wo.forEach(hc)}function Xr(e,t){e.blockedOn===t&&(e.blockedOn=null,ea||(ea=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,dg)))}function So(e){function t(o){return Xr(o,e)}if(0<qo.length){Xr(qo[0],e);for(var n=1;n<qo.length;n++){var r=qo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Xr(Gt,e),Xt!==null&&Xr(Xt,e),Qt!==null&&Xr(Qt,e),xo.forEach(t),wo.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Gf(n),n.blockedOn===null&&Bt.shift()}var gr=Pt.ReactCurrentBatchConfig,Oi=!0;function fg(e,t,n,r){var o=F,i=gr.transition;gr.transition=null;try{F=1,tu(e,t,n,r)}finally{F=o,gr.transition=i}}function pg(e,t,n,r){var o=F,i=gr.transition;gr.transition=null;try{F=4,tu(e,t,n,r)}finally{F=o,gr.transition=i}}function tu(e,t,n,r){if(Oi){var o=ta(e,t,n,r);if(o===null)cs(e,t,r,Ri,n),mc(e,r);else if(cg(o,e,t,n,r))r.stopPropagation();else if(mc(e,r),t&4&&-1<ug.indexOf(e)){for(;o!==null;){var i=Fo(o);if(i!==null&&Uf(i),i=ta(e,t,n,r),i===null&&cs(e,t,r,Ri,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else cs(e,t,r,null,n)}}var Ri=null;function ta(e,t,n,r){if(Ri=null,e=qa(r),e=vn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ri=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eg()){case Ja:return 1;case Mf:return 4;case Ti:case tg:return 16;case Df:return 536870912;default:return 16}default:return 16}}var Wt=null,nu=null,mi=null;function Qf(){if(mi)return mi;var e,t=nu,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return mi=o.slice(e,1<r?1-r:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function gc(){return!1}function Ie(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jo:gc,this.isPropagationStopped=gc,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=Ie(Lr),Do=Z({},Lr,{view:0,detail:0}),mg=Ie(Do),ts,ns,Qr,sl=Z({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(ts=e.screenX-Qr.screenX,ns=e.screenY-Qr.screenY):ns=ts=0,Qr=e),ts)},movementY:function(e){return"movementY"in e?e.movementY:ns}}),vc=Ie(sl),hg=Z({},sl,{dataTransfer:0}),gg=Ie(hg),vg=Z({},Do,{relatedTarget:0}),rs=Ie(vg),yg=Z({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=Ie(yg),wg=Z({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sg=Ie(wg),kg=Z({},Lr,{data:0}),yc=Ie(kg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cg[e])?!!t[e]:!1}function ou(){return Eg}var Pg=Z({},Do,{key:function(e){if(e.key){var t=jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bg=Ie(Pg),_g=Z({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=Ie(_g),Tg=Z({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),zg=Ie(Tg),Og=Z({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Ie(Og),Ng=Z({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=Ie(Ng),Lg=[9,13,27,32],iu=kt&&"CompositionEvent"in window,so=null;kt&&"documentMode"in document&&(so=document.documentMode);var Ig=kt&&"TextEvent"in window&&!so,Yf=kt&&(!iu||so&&8<so&&11>=so),wc=String.fromCharCode(32),Sc=!1;function Kf(e,t){switch(e){case"keyup":return Lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function Mg(e,t){switch(e){case"compositionend":return qf(t);case"keypress":return t.which!==32?null:(Sc=!0,wc);case"textInput":return e=t.data,e===wc&&Sc?null:e;default:return null}}function Dg(e,t){if(nr)return e==="compositionend"||!iu&&Kf(e,t)?(e=Qf(),mi=nu=Wt=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yf&&t.locale!=="ko"?null:t.data;default:return null}}var Fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fg[e.type]:t==="textarea"}function Jf(e,t,n,r){_f(r),t=Ni(t,"onChange"),0<t.length&&(n=new ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,ko=null;function Bg(e){up(e,0)}function al(e){var t=ir(e);if(kf(t))return e}function Ug(e,t){if(e==="change")return t}var Zf=!1;if(kt){var os;if(kt){var is="oninput"in document;if(!is){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),is=typeof jc.oninput=="function"}os=is}else os=!1;Zf=os&&(!document.documentMode||9<document.documentMode)}function $c(){ao&&(ao.detachEvent("onpropertychange",ep),ko=ao=null)}function ep(e){if(e.propertyName==="value"&&al(ko)){var t=[];Jf(t,ko,e,qa(e)),Rf(Bg,t)}}function Hg(e,t,n){e==="focusin"?($c(),ao=t,ko=n,ao.attachEvent("onpropertychange",ep)):e==="focusout"&&$c()}function Wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(ko)}function Vg(e,t){if(e==="click")return al(t)}function Gg(e,t){if(e==="input"||e==="change")return al(t)}function Xg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:Xg;function jo(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Is.call(t,o)||!rt(e[o],t[o]))return!1}return!0}function Cc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var n=Cc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=Pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pi(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Qg(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ec(n,i);var l=Ec(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yg=kt&&"documentMode"in document&&11>=document.documentMode,rr=null,na=null,uo=null,ra=!1;function Pc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ra||rr==null||rr!==Pi(r)||(r=rr,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&jo(uo,r)||(uo=r,r=Ni(na,"onSelect"),0<r.length&&(t=new ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function Zo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var or={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},ls={},rp={};kt&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function ul(e){if(ls[e])return ls[e];if(!or[e])return e;var t=or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return ls[e]=t[n];return e}var op=ul("animationend"),ip=ul("animationiteration"),lp=ul("animationstart"),sp=ul("transitionend"),ap=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){ap.set(e,t),On(t,[e])}for(var ss=0;ss<bc.length;ss++){var as=bc[ss],Kg=as.toLowerCase(),qg=as[0].toUpperCase()+as.slice(1);sn(Kg,"on"+qg)}sn(op,"onAnimationEnd");sn(ip,"onAnimationIteration");sn(lp,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(sp,"onTransitionEnd");Sr("onMouseEnter",["mouseout","mouseover"]);Sr("onMouseLeave",["mouseout","mouseover"]);Sr("onPointerEnter",["pointerout","pointerover"]);Sr("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function _c(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kh(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;_c(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;_c(o,s,c),i=u}}}if(_i)throw e=Js,_i=!1,Js=null,e}function G(e,t){var n=t[aa];n===void 0&&(n=t[aa]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function us(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var ei="_reactListening"+Math.random().toString(36).slice(2);function $o(e){if(!e[ei]){e[ei]=!0,vf.forEach(function(n){n!=="selectionchange"&&(Jg.has(n)||us(n,!1,e),us(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ei]||(t[ei]=!0,us("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Xf(t)){case 1:var o=fg;break;case 4:o=pg;break;default:o=tu}n=o.bind(null,t,n,e),o=void 0,!qs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function cs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=vn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Rf(function(){var c=i,p=qa(n),g=[];e:{var m=ap.get(e);if(m!==void 0){var y=ru,x=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":y=bg;break;case"focusin":x="focus",y=rs;break;case"focusout":x="blur",y=rs;break;case"beforeblur":case"afterblur":y=rs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=zg;break;case op:case ip:case lp:y=xg;break;case sp:y=Rg;break;case"scroll":y=mg;break;case"wheel":y=Ag;break;case"copy":case"cut":case"paste":y=Sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xc}var w=(t&4)!==0,P=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,f!==null&&(S=yo(d,f),S!=null&&w.push(Co(d,S,h)))),P)break;d=d.return}0<w.length&&(m=new y(m,x,null,n,p),g.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Ys&&(x=n.relatedTarget||n.fromElement)&&(vn(x)||x[jt]))break e;if((y||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?vn(x):null,x!==null&&(P=Rn(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=vc,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=xc,S="onPointerLeave",f="onPointerEnter",d="pointer"),P=y==null?m:ir(y),h=x==null?m:ir(x),m=new w(S,d+"leave",y,n,p),m.target=P,m.relatedTarget=h,S=null,vn(p)===c&&(w=new w(f,d+"enter",x,n,p),w.target=h,w.relatedTarget=P,S=w),P=S,y&&x)t:{for(w=y,f=x,d=0,h=w;h;h=Nn(h))d++;for(h=0,S=f;S;S=Nn(S))h++;for(;0<d-h;)w=Nn(w),d--;for(;0<h-d;)f=Nn(f),h--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Nn(w),f=Nn(f)}w=null}else w=null;y!==null&&Tc(g,m,y,w,!1),x!==null&&P!==null&&Tc(g,P,x,w,!0)}}e:{if(m=c?ir(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var $=Ug;else if(kc(m))if(Zf)$=Gg;else{$=Wg;var E=Hg}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&($=Vg);if($&&($=$(e,c))){Jf(g,$,n,p);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&Ws(m,"number",m.value)}switch(E=c?ir(c):window,e){case"focusin":(kc(E)||E.contentEditable==="true")&&(rr=E,na=c,uo=null);break;case"focusout":uo=na=rr=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Pc(g,n,p);break;case"selectionchange":if(Yg)break;case"keydown":case"keyup":Pc(g,n,p)}var j;if(iu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else nr?Kf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Yf&&n.locale!=="ko"&&(nr||T!=="onCompositionStart"?T==="onCompositionEnd"&&nr&&(j=Qf()):(Wt=p,nu="value"in Wt?Wt.value:Wt.textContent,nr=!0)),E=Ni(c,T),0<E.length&&(T=new yc(T,e,null,n,p),g.push({event:T,listeners:E}),j?T.data=j:(j=qf(n),j!==null&&(T.data=j)))),(j=Ig?Mg(e,n):Dg(e,n))&&(c=Ni(c,"onBeforeInput"),0<c.length&&(p=new yc("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=j))}up(g,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ni(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=yo(e,n),i!=null&&r.unshift(Co(e,i,o)),i=yo(e,t),i!=null&&r.push(Co(e,i,o))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=yo(n,i),u!=null&&l.unshift(Co(n,u,s))):o||(u=yo(n,i),u!=null&&l.push(Co(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zg=/\r\n?/g,ev=/\u0000|\uFFFD/g;function zc(e){return(typeof e=="string"?e:""+e).replace(Zg,`
`).replace(ev,"")}function ti(e,t,n){if(t=zc(t),zc(e)!==t&&n)throw Error(C(425))}function Ai(){}var oa=null,ia=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sa=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Oc=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Oc<"u"?function(e){return Oc.resolve(null).then(e).catch(rv)}:sa;function rv(e){setTimeout(function(){throw e})}function ds(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),So(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);So(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),ct="__reactFiber$"+Ir,Eo="__reactProps$"+Ir,jt="__reactContainer$"+Ir,aa="__reactEvents$"+Ir,ov="__reactListeners$"+Ir,iv="__reactHandles$"+Ir;function vn(e){var t=e[ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rc(e);e!==null;){if(n=e[ct])return n;e=Rc(e)}return t}e=n,n=e.parentNode}return null}function Fo(e){return e=e[ct]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function cl(e){return e[Eo]||null}var ua=[],lr=-1;function an(e){return{current:e}}function Q(e){0>lr||(e.current=ua[lr],ua[lr]=null,lr--)}function V(e,t){lr++,ua[lr]=e.current,e.current=t}var rn={},ye=an(rn),Pe=an(!1),En=rn;function kr(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function be(e){return e=e.childContextTypes,e!=null}function Li(){Q(Pe),Q(ye)}function Nc(e,t,n){if(ye.current!==rn)throw Error(C(168));V(ye,t),V(Pe,n)}function dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Hh(e)||"Unknown",o));return Z({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,En=ye.current,V(ye,e),V(Pe,Pe.current),!0}function Ac(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=dp(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,Q(Pe),Q(ye),V(ye,e)):Q(Pe),V(Pe,n)}var yt=null,dl=!1,fs=!1;function fp(e){yt===null?yt=[e]:yt.push(e)}function lv(e){dl=!0,fp(e)}function un(){if(!fs&&yt!==null){fs=!0;var e=0,t=F;try{var n=yt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,dl=!1}catch(o){throw yt!==null&&(yt=yt.slice(e+1)),If(Ja,un),o}finally{F=t,fs=!1}}return null}var sr=[],ar=0,Mi=null,Di=0,De=[],Fe=0,Pn=null,xt=1,wt="";function mn(e,t){sr[ar++]=Di,sr[ar++]=Mi,Mi=e,Di=t}function pp(e,t,n){De[Fe++]=xt,De[Fe++]=wt,De[Fe++]=Pn,Pn=e;var r=xt;e=wt;var o=32-et(r)-1;r&=~(1<<o),n+=1;var i=32-et(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,xt=1<<32-et(t)+o|n<<o|r,wt=i+e}else xt=1<<i|n<<o|r,wt=e}function su(e){e.return!==null&&(mn(e,1),pp(e,1,0))}function au(e){for(;e===Mi;)Mi=sr[--ar],sr[ar]=null,Di=sr[--ar],sr[ar]=null;for(;e===Pn;)Pn=De[--Fe],De[Fe]=null,wt=De[--Fe],De[Fe]=null,xt=De[--Fe],De[Fe]=null}var Re=null,Oe=null,K=!1,Je=null;function mp(e,t){var n=Be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Lc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Oe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pn!==null?{id:xt,overflow:wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Oe=null,!0):!1;default:return!1}}function ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function da(e){if(K){var t=Oe;if(t){var n=t;if(!Lc(e,t)){if(ca(e))throw Error(C(418));t=Yt(n.nextSibling);var r=Re;t&&Lc(e,t)?mp(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(ca(e))throw Error(C(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ni(e){if(e!==Re)return!1;if(!K)return Ic(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Oe)){if(ca(e))throw hp(),Error(C(418));for(;t;)mp(e,t),t=Yt(t.nextSibling)}if(Ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Re?Yt(e.stateNode.nextSibling):null;return!0}function hp(){for(var e=Oe;e;)e=Yt(e.nextSibling)}function jr(){Oe=Re=null,K=!1}function uu(e){Je===null?Je=[e]:Je.push(e)}var sv=Pt.ReactCurrentBatchConfig;function Ke(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Fi=an(null),Bi=null,ur=null,cu=null;function du(){cu=ur=Bi=null}function fu(e){var t=Fi.current;Q(Fi),e._currentValue=t}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vr(e,t){Bi=e,cu=ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(cu!==e)if(e={context:e,memoizedValue:t,next:null},ur===null){if(Bi===null)throw Error(C(308));ur=e,Bi.dependencies={lanes:0,firstContext:e}}else ur=ur.next=e;return t}var yn=null;function pu(e){yn===null?yn=[e]:yn.push(e)}function gp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,pu(t)):(n.next=o.next,o.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,$t(e,n)}return o=r.interleaved,o===null?(t.next=t,pu(r)):(t.next=o.next,o.next=t),r.interleaved=t,$t(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}function Mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ui(e,t,n,r){var o=e.updateQueue;Ft=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(i!==null){var g=o.baseState;l=0,p=c=u=null,s=i;do{var m=s.lane,y=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(m=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){g=x.call(y,g,m);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(y,g,m):x,m==null)break e;g=Z({},g,m);break e;case 2:Ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else y={eventTime:y,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=y,u=g):p=p.next=y,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(p===null&&(u=g),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);_n|=l,e.lanes=l,e.memoizedState=g}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var yp=new gf.Component().refs;function pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fl={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),o=Jt(e),i=St(r,o);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(tt(t,e,o,r),gi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),o=Jt(e),i=St(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,o),t!==null&&(tt(t,e,o,r),gi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Jt(e),o=St(n,r);o.tag=2,t!=null&&(o.callback=t),t=Kt(e,o,r),t!==null&&(tt(t,e,r,n),gi(t,e,r))}};function Fc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!jo(n,r)||!jo(o,i):!0}function xp(e,t,n){var r=!1,o=rn,i=t.contextType;return typeof i=="object"&&i!==null?i=He(i):(o=be(t)?En:ye.current,r=t.contextTypes,i=(r=r!=null)?kr(e,o):rn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fl.enqueueReplaceState(t,t.state,null)}function ma(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=yp,mu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=He(i):(i=be(t)?En:ye.current,o.context=kr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(pa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fl.enqueueReplaceState(o,o.state,null),Ui(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===yp&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function ri(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Uc(e){var t=e._init;return t(e._payload)}function wp(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Zt(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,S){return d===null||d.tag!==6?(d=xs(h,f.mode,S),d.return=f,d):(d=o(d,h),d.return=f,d)}function u(f,d,h,S){var $=h.type;return $===tr?p(f,d,h.props.children,S,h.key):d!==null&&(d.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Dt&&Uc($)===d.type)?(S=o(d,h.props),S.ref=Yr(f,d,h),S.return=f,S):(S=ki(h.type,h.key,h.props,null,f.mode,S),S.ref=Yr(f,d,h),S.return=f,S)}function c(f,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ws(h,f.mode,S),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function p(f,d,h,S,$){return d===null||d.tag!==7?(d=kn(h,f.mode,S,$),d.return=f,d):(d=o(d,h),d.return=f,d)}function g(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=xs(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Go:return h=ki(d.type,d.key,d.props,null,f.mode,h),h.ref=Yr(f,null,d),h.return=f,h;case er:return d=ws(d,f.mode,h),d.return=f,d;case Dt:var S=d._init;return g(f,S(d._payload),h)}if(eo(d)||Wr(d))return d=kn(d,f.mode,h,null),d.return=f,d;ri(f,d)}return null}function m(f,d,h,S){var $=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return $!==null?null:s(f,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Go:return h.key===$?u(f,d,h,S):null;case er:return h.key===$?c(f,d,h,S):null;case Dt:return $=h._init,m(f,d,$(h._payload),S)}if(eo(h)||Wr(h))return $!==null?null:p(f,d,h,S,null);ri(f,h)}return null}function y(f,d,h,S,$){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(h)||null,s(d,f,""+S,$);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Go:return f=f.get(S.key===null?h:S.key)||null,u(d,f,S,$);case er:return f=f.get(S.key===null?h:S.key)||null,c(d,f,S,$);case Dt:var E=S._init;return y(f,d,h,E(S._payload),$)}if(eo(S)||Wr(S))return f=f.get(h)||null,p(d,f,S,$,null);ri(d,S)}return null}function x(f,d,h,S){for(var $=null,E=null,j=d,T=d=0,M=null;j!==null&&T<h.length;T++){j.index>T?(M=j,j=null):M=j.sibling;var R=m(f,j,h[T],S);if(R===null){j===null&&(j=M);break}e&&j&&R.alternate===null&&t(f,j),d=i(R,d,T),E===null?$=R:E.sibling=R,E=R,j=M}if(T===h.length)return n(f,j),K&&mn(f,T),$;if(j===null){for(;T<h.length;T++)j=g(f,h[T],S),j!==null&&(d=i(j,d,T),E===null?$=j:E.sibling=j,E=j);return K&&mn(f,T),$}for(j=r(f,j);T<h.length;T++)M=y(j,f,T,h[T],S),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?T:M.key),d=i(M,d,T),E===null?$=M:E.sibling=M,E=M);return e&&j.forEach(function(oe){return t(f,oe)}),K&&mn(f,T),$}function w(f,d,h,S){var $=Wr(h);if(typeof $!="function")throw Error(C(150));if(h=$.call(h),h==null)throw Error(C(151));for(var E=$=null,j=d,T=d=0,M=null,R=h.next();j!==null&&!R.done;T++,R=h.next()){j.index>T?(M=j,j=null):M=j.sibling;var oe=m(f,j,R.value,S);if(oe===null){j===null&&(j=M);break}e&&j&&oe.alternate===null&&t(f,j),d=i(oe,d,T),E===null?$=oe:E.sibling=oe,E=oe,j=M}if(R.done)return n(f,j),K&&mn(f,T),$;if(j===null){for(;!R.done;T++,R=h.next())R=g(f,R.value,S),R!==null&&(d=i(R,d,T),E===null?$=R:E.sibling=R,E=R);return K&&mn(f,T),$}for(j=r(f,j);!R.done;T++,R=h.next())R=y(j,f,T,R.value,S),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?T:R.key),d=i(R,d,T),E===null?$=R:E.sibling=R,E=R);return e&&j.forEach(function(cn){return t(f,cn)}),K&&mn(f,T),$}function P(f,d,h,S){if(typeof h=="object"&&h!==null&&h.type===tr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Go:e:{for(var $=h.key,E=d;E!==null;){if(E.key===$){if($=h.type,$===tr){if(E.tag===7){n(f,E.sibling),d=o(E,h.props.children),d.return=f,f=d;break e}}else if(E.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Dt&&Uc($)===E.type){n(f,E.sibling),d=o(E,h.props),d.ref=Yr(f,E,h),d.return=f,f=d;break e}n(f,E);break}else t(f,E);E=E.sibling}h.type===tr?(d=kn(h.props.children,f.mode,S,h.key),d.return=f,f=d):(S=ki(h.type,h.key,h.props,null,f.mode,S),S.ref=Yr(f,d,h),S.return=f,f=S)}return l(f);case er:e:{for(E=h.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ws(h,f.mode,S),d.return=f,f=d}return l(f);case Dt:return E=h._init,P(f,d,E(h._payload),S)}if(eo(h))return x(f,d,h,S);if(Wr(h))return w(f,d,h,S);ri(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=xs(h,f.mode,S),d.return=f,f=d),l(f)):n(f,d)}return P}var $r=wp(!0),Sp=wp(!1),Bo={},ft=an(Bo),Po=an(Bo),bo=an(Bo);function xn(e){if(e===Bo)throw Error(C(174));return e}function hu(e,t){switch(V(bo,t),V(Po,e),V(ft,Bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gs(t,e)}Q(ft),V(ft,t)}function Cr(){Q(ft),Q(Po),Q(bo)}function kp(e){xn(bo.current);var t=xn(ft.current),n=Gs(t,e.type);t!==n&&(V(Po,e),V(ft,n))}function gu(e){Po.current===e&&(Q(ft),Q(Po))}var q=an(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ps=[];function vu(){for(var e=0;e<ps.length;e++)ps[e]._workInProgressVersionPrimary=null;ps.length=0}var vi=Pt.ReactCurrentDispatcher,ms=Pt.ReactCurrentBatchConfig,bn=0,J=null,ie=null,se=null,Wi=!1,co=!1,_o=0,av=0;function me(){throw Error(C(321))}function yu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function xu(e,t,n,r,o,i){if(bn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vi.current=e===null||e.memoizedState===null?fv:pv,e=n(r,o),co){i=0;do{if(co=!1,_o=0,25<=i)throw Error(C(301));i+=1,se=ie=null,t.updateQueue=null,vi.current=mv,e=n(r,o)}while(co)}if(vi.current=Vi,t=ie!==null&&ie.next!==null,bn=0,se=ie=J=null,Wi=!1,t)throw Error(C(300));return e}function wu(){var e=_o!==0;return _o=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function We(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(C(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function To(e,t){return typeof t=="function"?t(e):t}function hs(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var p=c.lane;if((bn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,J.lanes|=p,_n|=p}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,rt(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,_n|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function gs(e){var t=We(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);rt(i,t.memoizedState)||(Ce=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function jp(){}function $p(e,t){var n=J,r=We(),o=t(),i=!rt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ce=!0),r=r.queue,Su(Pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,zo(9,Ep.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(C(349));bn&30||Cp(n,t,o)}return o}function Cp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ep(e,t,n,r){t.value=n,t.getSnapshot=r,bp(t)&&_p(e)}function Pp(e,t,n){return n(function(){bp(t)&&_p(e)})}function bp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function _p(e){var t=$t(e,1);t!==null&&tt(t,e,1,-1)}function Hc(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=dv.bind(null,J,e),[t.memoizedState,e]}function zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Tp(){return We().memoizedState}function yi(e,t,n,r){var o=at();J.flags|=e,o.memoizedState=zo(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var o=We();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&yu(r,l.deps)){o.memoizedState=zo(t,n,i,r);return}}J.flags|=e,o.memoizedState=zo(1|t,n,i,r)}function Wc(e,t){return yi(8390656,8,e,t)}function Su(e,t){return pl(2048,8,e,t)}function zp(e,t){return pl(4,2,e,t)}function Op(e,t){return pl(4,4,e,t)}function Rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Rp.bind(null,t,e),n)}function ku(){}function Ap(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Lp(e,t){var n=We();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ip(e,t,n){return bn&21?(rt(n,t)||(n=Ff(),J.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function uv(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ms.transition;ms.transition={};try{e(!1),t()}finally{F=n,ms.transition=r}}function Mp(){return We().memoizedState}function cv(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Dp(e))Fp(t,n);else if(n=gp(e,t,n,r),n!==null){var o=we();tt(n,e,r,o),Bp(n,t,r)}}function dv(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dp(e))Fp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,rt(s,l)){var u=t.interleaved;u===null?(o.next=o,pu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=gp(e,t,o,r),n!==null&&(o=we(),tt(n,e,r,o),Bp(n,t,r))}}function Dp(e){var t=e.alternate;return e===J||t!==null&&t===J}function Fp(e,t){co=Wi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Za(e,n)}}var Vi={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},fv={readContext:He,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yi(4194308,4,Rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return yi(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=at();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cv.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Hc,useDebugValue:ku,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Hc(!1),t=e[0];return e=uv.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=at();if(K){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ue===null)throw Error(C(349));bn&30||Cp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Wc(Pp.bind(null,r,i,e),[e]),r.flags|=2048,zo(9,Ep.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=at(),t=ue.identifierPrefix;if(K){var n=wt,r=xt;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_o++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=av++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pv={readContext:He,useCallback:Ap,useContext:He,useEffect:Su,useImperativeHandle:Np,useInsertionEffect:zp,useLayoutEffect:Op,useMemo:Lp,useReducer:hs,useRef:Tp,useState:function(){return hs(To)},useDebugValue:ku,useDeferredValue:function(e){var t=We();return Ip(t,ie.memoizedState,e)},useTransition:function(){var e=hs(To)[0],t=We().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:$p,useId:Mp,unstable_isNewReconciler:!1},mv={readContext:He,useCallback:Ap,useContext:He,useEffect:Su,useImperativeHandle:Np,useInsertionEffect:zp,useLayoutEffect:Op,useMemo:Lp,useReducer:gs,useRef:Tp,useState:function(){return gs(To)},useDebugValue:ku,useDeferredValue:function(e){var t=We();return ie===null?t.memoizedState=e:Ip(t,ie.memoizedState,e)},useTransition:function(){var e=gs(To)[0],t=We().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:$p,useId:Mp,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=Uh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function vs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ha(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xi||(Xi=!0,Ca=r),ha(e,t)},n}function Hp(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ha(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ha(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=_v.bind(null,e,t,n),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var gv=Pt.ReactCurrentOwner,Ce=!1;function xe(e,t,n,r){t.child=e===null?Sp(t,null,n,r):$r(t,e.child,n,r)}function Qc(e,t,n,r,o){n=n.render;var i=t.ref;return vr(t,o),r=xu(e,t,n,r,i,o),n=wu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(K&&n&&su(t),t.flags|=1,xe(e,t,r,o),t.child)}function Yc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Wp(e,t,i,r,o)):(e=ki(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(l,r)&&e.ref===t.ref)return Ct(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Wp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(jo(i,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,Ct(e,t,o)}return ga(e,t,n,r,o)}function Vp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(dr,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(dr,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(dr,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(dr,ze),ze|=r;return xe(e,t,o,n),t.child}function Gp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ga(e,t,n,r,o){var i=be(n)?En:ye.current;return i=kr(t,i),vr(t,o),n=xu(e,t,n,r,i,o),r=wu(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ct(e,t,o)):(K&&r&&su(t),t.flags|=1,xe(e,t,n,o),t.child)}function Kc(e,t,n,r,o){if(be(n)){var i=!0;Ii(t)}else i=!1;if(vr(t,o),t.stateNode===null)xi(e,t),xp(t,n,r),ma(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=be(n)?En:ye.current,c=kr(t,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Bc(t,l,r,c),Ft=!1;var m=t.memoizedState;l.state=m,Ui(t,r,l,o),u=t.memoizedState,s!==r||m!==u||Pe.current||Ft?(typeof p=="function"&&(pa(t,n,p,r),u=t.memoizedState),(s=Ft||Fc(t,n,s,r,m,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,vp(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ke(t.type,s),l.props=c,g=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=He(u):(u=be(n)?En:ye.current,u=kr(t,u));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Bc(t,l,r,u),Ft=!1,m=t.memoizedState,l.state=m,Ui(t,r,l,o);var x=t.memoizedState;s!==g||m!==x||Pe.current||Ft?(typeof y=="function"&&(pa(t,n,y,r),x=t.memoizedState),(c=Ft||Fc(t,n,c,r,m,x,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return va(e,t,n,r,i,o)}function va(e,t,n,r,o,i){Gp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ac(t,n,!1),Ct(e,t,i);r=t.stateNode,gv.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,s,i)):xe(e,t,s,i),t.memoizedState=r.state,o&&Ac(t,n,!0),t.child}function Xp(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),hu(e,t.containerInfo)}function qc(e,t,n,r,o){return jr(),uu(o),t.flags|=256,xe(e,t,n,r),t.child}var ya={dehydrated:null,treeContext:null,retryLane:0};function xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qp(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(q,o&1),e===null)return da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=gl(l,r,0,null),e=kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xa(n),t.memoizedState=ya,e):ju(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return vv(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Zt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Zt(s,i):(i=kn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?xa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ya,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&uu(r),$r(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=vs(Error(C(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=gl({mode:"visible",children:r.children},o,0,null),i=kn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&$r(t,e.child,null,l),t.child.memoizedState=xa(l),t.memoizedState=ya,i);if(!(t.mode&1))return oi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=vs(i,r,void 0),oi(e,t,l,r)}if(s=(l&e.childLanes)!==0,Ce||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$t(e,o),tt(r,e,o,-1))}return _u(),r=vs(Error(C(421))),oi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Tv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Yt(o.nextSibling),Re=t,K=!0,Je=null,e!==null&&(De[Fe++]=xt,De[Fe++]=wt,De[Fe++]=Pn,xt=e.id,wt=e.overflow,Pn=t),t=ju(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function ys(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ys(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Hi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ys(t,!0,n,null,i);break;case"together":ys(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ct(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yv(e,t,n){switch(t.tag){case 3:Xp(t),jr();break;case 5:kp(t);break;case 1:be(t.type)&&Ii(t);break;case 4:hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Fi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Qp(e,t,n):(V(q,q.current&1),e=Ct(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Vp(e,t,n)}return Ct(e,t,n)}var Kp,wa,qp,Jp;Kp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wa=function(){};qp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,xn(ft.current);var i=null;switch(n){case"input":o=Us(e,o),r=Us(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Vs(e,o),r=Vs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}Xs(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(go.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(go.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&G("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Jp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xv(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return be(t.type)&&Li(),he(t),null;case 3:return r=t.stateNode,Cr(),Q(Pe),Q(ye),vu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Je!==null&&(ba(Je),Je=null))),wa(e,t),he(t),null;case 5:gu(t);var o=xn(bo.current);if(n=t.type,e!==null&&t.stateNode!=null)qp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return he(t),null}if(e=xn(ft.current),ni(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ct]=t,r[Eo]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<no.length;o++)G(no[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":sc(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":uc(r,i),G("invalid",r)}Xs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ti(r.textContent,s,e),o=["children",""+s]):go.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&G("scroll",r)}switch(n){case"input":Xo(r),ac(r,i,!0);break;case"textarea":Xo(r),cc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ai)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ct]=t,e[Eo]=r,Kp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Qs(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<no.length;o++)G(no[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":sc(e,r),o=Us(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),G("invalid",e);break;case"textarea":uc(e,r),o=Vs(e,r),G("invalid",e);break;default:o=r}Xs(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?bf(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ef(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&vo(e,u):typeof u=="number"&&vo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(go.hasOwnProperty(i)?u!=null&&i==="onScroll"&&G("scroll",e):u!=null&&Xa(e,i,u,l))}switch(n){case"input":Xo(e),ac(e,r,!1);break;case"textarea":Xo(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ai)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Jp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=xn(bo.current),xn(ft.current),ni(t)){if(r=t.stateNode,n=t.memoizedProps,r[ct]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ti(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=t,t.stateNode=r}return he(t),null;case 13:if(Q(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Oe!==null&&t.mode&1&&!(t.flags&128))hp(),jr(),t.flags|=98560,i=!1;else if(i=ni(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[ct]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Je!==null&&(ba(Je),Je=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):_u())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Cr(),wa(e,t),e===null&&$o(t.stateNode.containerInfo),he(t),null;case 10:return fu(t.type._context),he(t),null;case 17:return be(t.type)&&Li(),he(t),null;case 19:if(Q(q),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Kr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,Kr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>Pr&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*te()-i.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,Kr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function wv(e,t){switch(au(t),t.tag){case 1:return be(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cr(),Q(Pe),Q(ye),vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return gu(t),null;case 13:if(Q(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(q),null;case 4:return Cr(),null;case 10:return fu(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var ii=!1,ve=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,_=null;function cr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Sa(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Zc=!1;function kv(e,t){if(oa=Oi,e=np(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,p=0,g=e,m=null;t:for(;;){for(var y;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(y=g.firstChild)!==null;)m=g,g=y;for(;;){if(g===e)break t;if(m===n&&++c===o&&(s=l),m===i&&++p===r&&(u=l),(y=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ia={focusedElem:e,selectionRange:n},Oi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,P=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ke(t.type,w),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Zc,Zc=!1,x}function fo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Sa(t,n,i)}o=o.next}while(o!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Zp(e){var t=e.alternate;t!==null&&(e.alternate=null,Zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ct],delete t[Eo],delete t[aa],delete t[ov],delete t[iv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function em(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var de=null,qe=!1;function Tt(e,t,n){for(n=n.child;n!==null;)tm(e,t,n),n=n.sibling}function tm(e,t,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ll,n)}catch{}switch(n.tag){case 5:ve||cr(n,t);case 6:var r=de,o=qe;de=null,Tt(e,t,n),de=r,qe=o,de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(qe?(e=de,n=n.stateNode,e.nodeType===8?ds(e.parentNode,n):e.nodeType===1&&ds(e,n),So(e)):ds(de,n.stateNode));break;case 4:r=de,o=qe,de=n.stateNode.containerInfo,qe=!0,Tt(e,t,n),de=r,qe=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Sa(n,t,l),o=o.next}while(o!==r)}Tt(e,t,n);break;case 1:if(!ve&&(cr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Tt(e,t,n),ve=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sv),t.forEach(function(r){var o=zv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,qe=!1;break e;case 3:de=s.stateNode.containerInfo,qe=!0;break e;case 4:de=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(de===null)throw Error(C(160));tm(i,l,o),de=null,qe=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nm(t,e),t=t.sibling}function nm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),ot(e),r&4){try{fo(3,e,e.return),ml(3,e)}catch(w){ee(e,e.return,w)}try{fo(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ye(t,e),ot(e),r&512&&n!==null&&cr(n,n.return);break;case 5:if(Ye(t,e),ot(e),r&512&&n!==null&&cr(n,n.return),e.flags&32){var o=e.stateNode;try{vo(o,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&jf(o,i),Qs(s,l);var c=Qs(s,i);for(l=0;l<u.length;l+=2){var p=u[l],g=u[l+1];p==="style"?bf(o,g):p==="dangerouslySetInnerHTML"?Ef(o,g):p==="children"?vo(o,g):Xa(o,p,g,c)}switch(s){case"input":Hs(o,i);break;case"textarea":$f(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?pr(o,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?pr(o,!!i.multiple,i.defaultValue,!0):pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Eo]=i}catch(w){ee(e,e.return,w)}}break;case 6:if(Ye(t,e),ot(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ee(e,e.return,w)}}break;case 3:if(Ye(t,e),ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ye(t,e),ot(e);break;case 13:Ye(t,e),ot(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Eu=te())),r&4&&td(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||p,Ye(t,e),ve=c):Ye(t,e),ot(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(g=_=p;_!==null;){switch(m=_,y=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:cr(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:cr(m,m.return);break;case 22:if(m.memoizedState!==null){rd(g);continue}}y!==null?(y.return=m,_=y):rd(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Pf("display",l))}catch(w){ee(e,e.return,w)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(w){ee(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ye(t,e),ot(e),r&4&&td(e);break;case 21:break;default:Ye(t,e),ot(e)}}function ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(em(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vo(o,""),r.flags&=-33);var i=ed(e);$a(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=ed(e);ja(e,s,l);break;default:throw Error(C(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jv(e,t,n){_=e,rm(e)}function rm(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ii;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ve;s=ii;var c=ve;if(ii=l,(ve=u)&&!c)for(_=o;_!==null;)l=_,u=l.child,l.tag===22&&l.memoizedState!==null?od(o):u!==null?(u.return=l,_=u):od(o);for(;i!==null;)_=i,rm(i),i=i.sibling;_=o,ii=s,ve=c}nd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):nd(e)}}function nd(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ke(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&So(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ve||t.flags&512&&ka(t)}catch(m){ee(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function rd(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function od(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{ka(t)}catch(u){ee(t,i,u)}break;case 5:var l=t.return;try{ka(t)}catch(u){ee(t,l,u)}}}catch(u){ee(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var $v=Math.ceil,Gi=Pt.ReactCurrentDispatcher,$u=Pt.ReactCurrentOwner,Ue=Pt.ReactCurrentBatchConfig,I=0,ue=null,re=null,fe=0,ze=0,dr=an(0),le=0,Oo=null,_n=0,hl=0,Cu=0,po=null,$e=null,Eu=0,Pr=1/0,gt=null,Xi=!1,Ca=null,qt=null,li=!1,Vt=null,Qi=0,mo=0,Ea=null,wi=-1,Si=0;function we(){return I&6?te():wi!==-1?wi:wi=te()}function Jt(e){return e.mode&1?I&2&&fe!==0?fe&-fe:sv.transition!==null?(Si===0&&(Si=Ff()),Si):(e=F,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function tt(e,t,n,r){if(50<mo)throw mo=0,Ea=null,Error(C(185));Mo(e,n,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(hl|=n),le===4&&Ut(e,fe)),_e(e,r),n===1&&I===0&&!(t.mode&1)&&(Pr=te()+500,dl&&un()))}function _e(e,t){var n=e.callbackNode;sg(e,t);var r=zi(e,e===ue?fe:0);if(r===0)n!==null&&pc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pc(n),t===1)e.tag===0?lv(id.bind(null,e)):fp(id.bind(null,e)),nv(function(){!(I&6)&&un()}),n=null;else{switch(Bf(r)){case 1:n=Ja;break;case 4:n=Mf;break;case 16:n=Ti;break;case 536870912:n=Df;break;default:n=Ti}n=dm(n,om.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function om(e,t){if(wi=-1,Si=0,I&6)throw Error(C(327));var n=e.callbackNode;if(yr()&&e.callbackNode!==n)return null;var r=zi(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yi(e,r);else{t=r;var o=I;I|=2;var i=lm();(ue!==e||fe!==t)&&(gt=null,Pr=te()+500,Sn(e,t));do try{Pv();break}catch(s){im(e,s)}while(1);du(),Gi.current=i,I=o,re!==null?t=0:(ue=null,fe=0,t=le)}if(t!==0){if(t===2&&(o=Zs(e),o!==0&&(r=o,t=Pa(e,o))),t===1)throw n=Oo,Sn(e,0),Ut(e,r),_e(e,te()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!Cv(o)&&(t=Yi(e,r),t===2&&(i=Zs(e),i!==0&&(r=i,t=Pa(e,i))),t===1))throw n=Oo,Sn(e,0),Ut(e,r),_e(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:hn(e,$e,gt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Eu+500-te(),10<t)){if(zi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=sa(hn.bind(null,e,$e,gt),t);break}hn(e,$e,gt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-et(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$v(r/1960))-r,10<r){e.timeoutHandle=sa(hn.bind(null,e,$e,gt),r);break}hn(e,$e,gt);break;case 5:hn(e,$e,gt);break;default:throw Error(C(329))}}}return _e(e,te()),e.callbackNode===n?om.bind(null,e):null}function Pa(e,t){var n=po;return e.current.memoizedState.isDehydrated&&(Sn(e,t).flags|=256),e=Yi(e,t),e!==2&&(t=$e,$e=n,t!==null&&ba(t)),e}function ba(e){$e===null?$e=e:$e.push.apply($e,e)}function Cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!rt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Cu,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-et(t),r=1<<n;e[n]=-1,t&=~r}}function id(e){if(I&6)throw Error(C(327));yr();var t=zi(e,0);if(!(t&1))return _e(e,te()),null;var n=Yi(e,t);if(e.tag!==0&&n===2){var r=Zs(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=Oo,Sn(e,0),Ut(e,t),_e(e,te()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,$e,gt),_e(e,te()),null}function Pu(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Pr=te()+500,dl&&un())}}function Tn(e){Vt!==null&&Vt.tag===0&&!(I&6)&&yr();var t=I;I|=1;var n=Ue.transition,r=F;try{if(Ue.transition=null,F=1,e)return e()}finally{F=r,Ue.transition=n,I=t,!(I&6)&&un()}}function bu(){ze=dr.current,Q(dr)}function Sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tv(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:Cr(),Q(Pe),Q(ye),vu();break;case 5:gu(r);break;case 4:Cr();break;case 13:Q(q);break;case 19:Q(q);break;case 10:fu(r.type._context);break;case 22:case 23:bu()}n=n.return}if(ue=e,re=e=Zt(e.current,null),fe=ze=t,le=0,Oo=null,Cu=hl=_n=0,$e=po=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}yn=null}return e}function im(e,t){do{var n=re;try{if(du(),vi.current=Vi,Wi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Wi=!1}if(bn=0,se=ie=J=null,co=!1,_o=0,$u.current=null,n===null||n.return===null){le=1,Oo=t,re=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=fe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Gc(l);if(y!==null){y.flags&=-257,Xc(y,l,s,i,t),y.mode&1&&Vc(i,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){Vc(i,c,t),_u();break e}u=Error(C(426))}}else if(K&&s.mode&1){var P=Gc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Xc(P,l,s,i,t),uu(Er(u,s));break e}}i=u=Er(u,s),le!==4&&(le=2),po===null?po=[i]:po.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Up(i,u,t);Mc(i,f);break e;case 1:s=u;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qt===null||!qt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Hp(i,s,t);Mc(i,S);break e}}i=i.return}while(i!==null)}am(n)}catch($){t=$,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function lm(){var e=Gi.current;return Gi.current=Vi,e===null?Vi:e}function _u(){(le===0||le===3||le===2)&&(le=4),ue===null||!(_n&268435455)&&!(hl&268435455)||Ut(ue,fe)}function Yi(e,t){var n=I;I|=2;var r=lm();(ue!==e||fe!==t)&&(gt=null,Sn(e,t));do try{Ev();break}catch(o){im(e,o)}while(1);if(du(),I=n,Gi.current=r,re!==null)throw Error(C(261));return ue=null,fe=0,le}function Ev(){for(;re!==null;)sm(re)}function Pv(){for(;re!==null&&!Jh();)sm(re)}function sm(e){var t=cm(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?am(e):re=t,$u.current=null}function am(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(n=xv(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function hn(e,t,n){var r=F,o=Ue.transition;try{Ue.transition=null,F=1,bv(e,t,n,r)}finally{Ue.transition=o,F=r}return null}function bv(e,t,n,r){do yr();while(Vt!==null);if(I&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ag(e,i),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||li||(li=!0,dm(Ti,function(){return yr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var l=F;F=1;var s=I;I|=4,$u.current=null,kv(e,n),nm(n,e),Qg(ia),Oi=!!oa,ia=oa=null,e.current=n,jv(n),Zh(),I=s,F=l,Ue.transition=i}else e.current=n;if(li&&(li=!1,Vt=e,Qi=o),i=e.pendingLanes,i===0&&(qt=null),ng(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xi)throw Xi=!1,e=Ca,Ca=null,e;return Qi&1&&e.tag!==0&&yr(),i=e.pendingLanes,i&1?e===Ea?mo++:(mo=0,Ea=e):mo=0,un(),null}function yr(){if(Vt!==null){var e=Bf(Qi),t=Ue.transition,n=F;try{if(Ue.transition=null,F=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Qi=0,I&6)throw Error(C(331));var o=I;for(I|=4,_=e.current;_!==null;){var i=_,l=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(_=c;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:fo(8,p,i)}var g=p.child;if(g!==null)g.return=p,_=g;else for(;_!==null;){p=_;var m=p.sibling,y=p.return;if(Zp(p),p===c){_=null;break}if(m!==null){m.return=y,_=m;break}_=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}_=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,_=l;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fo(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,_=f;break e}_=i.return}}var d=e.current;for(_=d;_!==null;){l=_;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,_=h;else e:for(l=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch($){ee(s,s.return,$)}if(s===l){_=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,_=S;break e}_=s.return}}if(I=o,un(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ll,e)}catch{}r=!0}return r}finally{F=n,Ue.transition=t}}return!1}function ld(e,t,n){t=Er(n,t),t=Up(e,t,1),e=Kt(e,t,1),t=we(),e!==null&&(Mo(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=Er(n,e),e=Hp(t,e,1),t=Kt(t,e,1),e=we(),t!==null&&(Mo(t,1,e),_e(t,e));break}}t=t.return}}function _v(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>te()-Eu?Sn(e,0):Cu|=n),_e(e,t)}function um(e,t){t===0&&(e.mode&1?(t=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):t=1);var n=we();e=$t(e,t),e!==null&&(Mo(e,t,n),_e(e,n))}function Tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),um(e,n)}function zv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),um(e,n)}var cm;cm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,yv(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,K&&t.flags&1048576&&pp(t,Di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var o=kr(t,ye.current);vr(t,n),o=xu(null,t,r,e,o,n);var i=wu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,be(r)?(i=!0,Ii(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mu(t),o.updater=fl,t.stateNode=o,o._reactInternals=t,ma(t,r,e,n),t=va(null,t,r,!0,i,n)):(t.tag=0,K&&i&&su(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Rv(r),e=Ke(r,e),o){case 0:t=ga(null,t,r,e,n);break e;case 1:t=Kc(null,t,r,e,n);break e;case 11:t=Qc(null,t,r,e,n);break e;case 14:t=Yc(null,t,r,Ke(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),ga(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Kc(e,t,r,o,n);case 3:e:{if(Xp(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,vp(e,t),Ui(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Er(Error(C(423)),t),t=qc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(C(424)),t),t=qc(e,t,r,n,o);break e}else for(Oe=Yt(t.stateNode.containerInfo.firstChild),Re=t,K=!0,Je=null,n=Sp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===o){t=Ct(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return kp(t),e===null&&da(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,la(r,o)?l=null:i!==null&&la(r,i)&&(t.flags|=32),Gp(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&da(t),null;case 13:return Qp(e,t,n);case 4:return hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),Qc(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(Fi,r._currentValue),r._currentValue=l,i!==null)if(rt(i.value,l)){if(i.children===o.children&&!Pe.current){t=Ct(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=St(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),fa(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),fa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,vr(t,n),o=He(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=Ke(r,t.pendingProps),o=Ke(r.type,o),Yc(e,t,r,o,n);case 15:return Wp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ke(r,o),xi(e,t),t.tag=1,be(r)?(e=!0,Ii(t)):e=!1,vr(t,n),xp(t,r,o),ma(t,r,o,n),va(null,t,r,!0,e,n);case 19:return Yp(e,t,n);case 22:return Vp(e,t,n)}throw Error(C(156,t.tag))};function dm(e,t){return If(e,t)}function Ov(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,n,r){return new Ov(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rv(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ya)return 11;if(e===Ka)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ki(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case tr:return kn(n.children,o,i,t);case Qa:l=8,o|=8;break;case Ms:return e=Be(12,n,t,o|2),e.elementType=Ms,e.lanes=i,e;case Ds:return e=Be(13,n,t,o),e.elementType=Ds,e.lanes=i,e;case Fs:return e=Be(19,n,t,o),e.elementType=Fs,e.lanes=i,e;case wf:return gl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:l=10;break e;case xf:l=9;break e;case Ya:l=11;break e;case Ka:l=14;break e;case Dt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Be(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function kn(e,t,n,r){return e=Be(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Be(22,e,r,t),e.elementType=wf,e.lanes=n,e.stateNode={isHidden:!1},e}function xs(e,t,n){return e=Be(6,e,null,t),e.lanes=n,e}function ws(e,t,n){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Nv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=es(0),this.expirationTimes=es(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=es(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function zu(e,t,n,r,o,i,l,s,u){return e=new Nv(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(i),e}function Av(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fm(e){if(!e)return rn;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(be(n))return dp(e,n,t)}return t}function pm(e,t,n,r,o,i,l,s,u){return e=zu(n,r,!0,e,o,i,l,s,u),e.context=fm(null),n=e.current,r=we(),o=Jt(n),i=St(r,o),i.callback=t??null,Kt(n,i,o),e.current.lanes=o,Mo(e,o,r),_e(e,r),e}function vl(e,t,n,r){var o=t.current,i=we(),l=Jt(o);return n=fm(n),t.context===null?t.context=n:t.pendingContext=n,t=St(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(o,t,l),e!==null&&(tt(e,o,l,i),gi(e,o,l)),l}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ou(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Lv(){return null}var mm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}yl.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));vl(e,t,null,null)};yl.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tn(function(){vl(null,e,null,null)}),t[jt]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Gf(e)}};function Nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ad(){}function Iv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ki(l);i.call(c)}}var l=pm(t,r,e,0,null,!1,!1,"",ad);return e._reactRootContainer=l,e[jt]=l.current,$o(e.nodeType===8?e.parentNode:e),Tn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=Ki(u);s.call(c)}}var u=zu(e,0,!1,null,null,!1,!1,"",ad);return e._reactRootContainer=u,e[jt]=u.current,$o(e.nodeType===8?e.parentNode:e),Tn(function(){vl(t,u,n,r)}),u}function wl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=Ki(l);s.call(u)}}vl(t,l,e,o)}else l=Iv(n,t,e,o,r);return Ki(l)}Uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(Za(t,n|1),_e(t,te()),!(I&6)&&(Pr=te()+500,un()))}break;case 13:Tn(function(){var r=$t(e,1);if(r!==null){var o=we();tt(r,e,1,o)}}),Ou(e,1)}};eu=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=we();tt(t,e,134217728,n)}Ou(e,134217728)}};Hf=function(e){if(e.tag===13){var t=Jt(e),n=$t(e,t);if(n!==null){var r=we();tt(n,e,t,r)}Ou(e,t)}};Wf=function(){return F};Vf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ks=function(e,t,n){switch(t){case"input":if(Hs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=cl(r);if(!o)throw Error(C(90));kf(r),Hs(r,o)}}}break;case"textarea":$f(e,n);break;case"select":t=n.value,t!=null&&pr(e,!!n.multiple,t,!1)}};zf=Pu;Of=Tn;var Mv={usingClientEntryPoint:!1,Events:[Fo,ir,cl,_f,Tf,Pu]},qr={findFiberByHostInstance:vn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Dv={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Af(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||Lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{ll=si.inject(Dv),dt=si}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(t))throw Error(C(200));return Av(e,t,null,n)};Le.createRoot=function(e,t){if(!Nu(e))throw Error(C(299));var n=!1,r="",o=mm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=zu(e,1,!1,null,null,n,!1,r,o),e[jt]=t.current,$o(e.nodeType===8?e.parentNode:e),new Ru(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Af(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return Tn(e)};Le.hydrate=function(e,t,n){if(!xl(t))throw Error(C(200));return wl(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!Nu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=mm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=pm(t,null,e,1,n??null,o,!1,i,l),e[jt]=t.current,$o(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new yl(t)};Le.render=function(e,t,n){if(!xl(t))throw Error(C(200));return wl(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!xl(e))throw Error(C(40));return e._reactRootContainer?(Tn(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Le.unstable_batchedUpdates=Pu;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return wl(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hm)}catch(e){console.error(e)}}hm(),pf.exports=Le;var gm=pf.exports,ud=gm;Ls.createRoot=ud.createRoot,Ls.hydrateRoot=ud.hydrateRoot;var Ee=function(){return Ee=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ee.apply(this,arguments)};function qi(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var X="-ms-",ho="-moz-",D="-webkit-",vm="comm",Sl="rule",Au="decl",Fv="@import",ym="@keyframes",Bv="@layer",Uv=Math.abs,Lu=String.fromCharCode,_a=Object.assign;function Hv(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function xm(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function ji(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function ut(e){return e.length}function wm(e){return e.length}function ro(e,t){return t.push(e),e}function Wv(e,t){return e.map(t).join("")}function cd(e,t){return e.filter(function(n){return!vt(n,t)})}var kl=1,_r=1,Sm=0,Ve=0,ne=0,Mr="";function jl(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:kl,column:_r,length:l,return:"",siblings:s}}function Mt(e,t){return _a(jl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function An(e){for(;e.root;)e=Mt(e.root,{children:[e]});ro(e,e.siblings)}function Vv(){return ne}function Gv(){return ne=Ve>0?ae(Mr,--Ve):0,_r--,ne===10&&(_r=1,kl--),ne}function nt(){return ne=Ve<Sm?ae(Mr,Ve++):0,_r++,ne===10&&(_r=1,kl++),ne}function jn(){return ae(Mr,Ve)}function $i(){return Ve}function $l(e,t){return br(Mr,e,t)}function Ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xv(e){return kl=_r=1,Sm=ut(Mr=e),Ve=0,[]}function Qv(e){return Mr="",e}function Ss(e){return xm($l(Ve-1,za(e===91?e+2:e===40?e+1:e)))}function Yv(e){for(;(ne=jn())&&ne<33;)nt();return Ta(e)>2||Ta(ne)>3?"":" "}function Kv(e,t){for(;--t&&nt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return $l(e,$i()+(t<6&&jn()==32&&nt()==32))}function za(e){for(;nt();)switch(ne){case e:return Ve;case 34:case 39:e!==34&&e!==39&&za(ne);break;case 40:e===41&&za(e);break;case 92:nt();break}return Ve}function qv(e,t){for(;nt()&&e+ne!==47+10;)if(e+ne===42+42&&jn()===47)break;return"/*"+$l(t,Ve-1)+"*"+Lu(e===47?e:nt())}function Jv(e){for(;!Ta(jn());)nt();return $l(e,Ve)}function Zv(e){return Qv(Ci("",null,null,null,[""],e=Xv(e),0,[0],e))}function Ci(e,t,n,r,o,i,l,s,u){for(var c=0,p=0,g=l,m=0,y=0,x=0,w=1,P=1,f=1,d=0,h="",S=o,$=i,E=r,j=h;P;)switch(x=d,d=nt()){case 40:if(x!=108&&ae(j,g-1)==58){ji(j+=A(Ss(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:j+=Ss(d);break;case 9:case 10:case 13:case 32:j+=Yv(x);break;case 92:j+=Kv($i()-1,7);continue;case 47:switch(jn()){case 42:case 47:ro(ey(qv(nt(),$i()),t,n,u),u);break;default:j+="/"}break;case 123*w:s[c++]=ut(j)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+p:f==-1&&(j=A(j,/\f/g,"")),y>0&&ut(j)-g&&ro(y>32?fd(j+";",r,n,g-1,u):fd(A(j," ","")+";",r,n,g-2,u),u);break;case 59:j+=";";default:if(ro(E=dd(j,t,n,c,p,o,s,h,S=[],$=[],g,i),i),d===123)if(p===0)Ci(j,t,E,E,S,i,g,s,$);else switch(m===99&&ae(j,3)===110?100:m){case 100:case 108:case 109:case 115:Ci(e,E,E,r&&ro(dd(e,E,E,0,0,o,s,h,o,S=[],g,$),$),o,$,g,s,r?S:$);break;default:Ci(j,E,E,E,[""],$,0,s,$)}}c=p=y=0,w=f=1,h=j="",g=l;break;case 58:g=1+ut(j),y=x;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&Gv()==125)continue}switch(j+=Lu(d),d*w){case 38:f=p>0?1:(j+="\f",-1);break;case 44:s[c++]=(ut(j)-1)*f,f=1;break;case 64:jn()===45&&(j+=Ss(nt())),m=jn(),p=g=ut(h=j+=Jv($i())),d++;break;case 45:x===45&&ut(j)==2&&(w=0)}}return i}function dd(e,t,n,r,o,i,l,s,u,c,p,g){for(var m=o-1,y=o===0?i:[""],x=wm(y),w=0,P=0,f=0;w<r;++w)for(var d=0,h=br(e,m+1,m=Uv(P=l[w])),S=e;d<x;++d)(S=xm(P>0?y[d]+" "+h:A(h,/&\f/g,y[d])))&&(u[f++]=S);return jl(e,t,n,o===0?Sl:s,u,c,p,g)}function ey(e,t,n,r){return jl(e,t,n,vm,Lu(Vv()),br(e,2,-2),0,r)}function fd(e,t,n,r,o){return jl(e,t,n,Au,br(e,0,r),br(e,r+1,-1),r,o)}function km(e,t,n){switch(Hv(e,t)){case 5103:return D+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return D+e+e;case 4789:return ho+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return D+e+ho+e+X+e+e;case 5936:switch(ae(e,t+11)){case 114:return D+e+X+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return D+e+X+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return D+e+X+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return D+e+X+e+e;case 6165:return D+e+X+"flex-"+e+e;case 5187:return D+e+A(e,/(\w+).+(:[^]+)/,D+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return D+e+X+"flex-item-"+A(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":X+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return D+e+X+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return D+e+X+A(e,"shrink","negative")+e;case 5292:return D+e+X+A(e,"basis","preferred-size")+e;case 6060:return D+"box-"+A(e,"-grow","")+D+e+X+A(e,"grow","positive")+e;case 4554:return D+A(e,/([^-])(transform)/g,"$1"+D+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,D+"$1"),/(image-set)/,D+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,D+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,D+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+D+e+e;case 4200:if(!vt(e,/flex-|baseline/))return X+"grid-column-align"+br(e,t)+e;break;case 2592:case 3360:return X+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vt(r.props,/grid-\w+-end/)})?~ji(e+(n=n[t].value),"span")?e:X+A(e,"-start","")+e+X+"grid-row-span:"+(~ji(n,"span")?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":X+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:X+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,D+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ut(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+D+"$2-$3$1"+ho+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ji(e,"stretch")?km(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,u,c){return X+o+":"+i+c+(l?X+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(ae(e,t+6)===121)return A(e,":",":"+D)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+D+(ae(e,14)===45?"inline-":"")+"box$3$1"+D+"$2$3$1"+X+"$2box$3")+e;case 100:return A(e,":",":"+X)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ji(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ty(e,t,n,r){switch(e.type){case Bv:if(e.children.length)break;case Fv:case Au:return e.return=e.return||e.value;case vm:return"";case ym:return e.return=e.value+"{"+Ji(e.children,r)+"}";case Sl:if(!ut(e.value=e.props.join(",")))return""}return ut(n=Ji(e.children,r))?e.return=e.value+"{"+n+"}":""}function ny(e){var t=wm(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function ry(e){return function(t){t.root||(t=t.return)&&e(t)}}function oy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Au:e.return=km(e.value,e.length,n);return;case ym:return Ji([Mt(e,{value:A(e.value,"@","@"+D)})],r);case Sl:if(e.length)return Wv(n=e.props,function(o){switch(vt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(Mt(e,{props:[A(o,/:(read-\w+)/,":"+ho+"$1")]})),An(Mt(e,{props:[o]})),_a(e,{props:cd(n,r)});break;case"::placeholder":An(Mt(e,{props:[A(o,/:(plac\w+)/,":"+D+"input-$1")]})),An(Mt(e,{props:[A(o,/:(plac\w+)/,":"+ho+"$1")]})),An(Mt(e,{props:[A(o,/:(plac\w+)/,X+"input-$1")]})),An(Mt(e,{props:[o]})),_a(e,{props:cd(n,r)});break}return""})}}var iy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Iu=typeof window<"u"&&"HTMLElement"in window,ly=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Mu=Object.freeze([]),zr=Object.freeze({});function sy(e,t,n){return n===void 0&&(n=zr),e.theme!==n.theme&&e.theme||t||n.theme}var jm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uy=/(^-|-$)/g;function pd(e){return e.replace(ay,"-").replace(uy,"")}var cy=/(a)(d)/gi,md=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=md(t%52)+n;return(md(t%52)+n).replace(cy,"$1-$2")}var ks,fr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$m=function(e){return fr(5381,e)};function dy(e){return Oa($m(e)>>>0)}function fy(e){return e.displayName||e.name||"Component"}function js(e){return typeof e=="string"&&!0}var Cm=typeof Symbol=="function"&&Symbol.for,Em=Cm?Symbol.for("react.memo"):60115,py=Cm?Symbol.for("react.forward_ref"):60112,my={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gy=((ks={})[py]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ks[Em]=Pm,ks);function hd(e){return("type"in(t=e)&&t.type.$$typeof)===Em?Pm:"$$typeof"in e?gy[e.$$typeof]:my;var t}var vy=Object.defineProperty,yy=Object.getOwnPropertyNames,gd=Object.getOwnPropertySymbols,xy=Object.getOwnPropertyDescriptor,wy=Object.getPrototypeOf,vd=Object.prototype;function bm(e,t,n){if(typeof t!="string"){if(vd){var r=wy(t);r&&r!==vd&&bm(e,r,n)}var o=yy(t);gd&&(o=o.concat(gd(t)));for(var i=hd(e),l=hd(t),s=0;s<o.length;++s){var u=o[s];if(!(u in hy||n&&n[u]||l&&u in l||i&&u in i)){var c=xy(t,u);try{vy(e,u,c)}catch{}}}}return e}function Or(e){return typeof e=="function"}function Du(e){return typeof e=="object"&&"styledComponentId"in e}function wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function yd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ro(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ra(e,t,n){if(n===void 0&&(n=!1),!n&&!Ro(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ra(e[r],t[r]);else if(Ro(t))for(var r in t)e[r]=Ra(e[r],t[r]);return e}function Fu(e,t){Object.defineProperty(e,"toString",{value:t})}function Uo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Sy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Uo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),Ei=new Map,Zi=new Map,$s=1,ai=function(e){if(Ei.has(e))return Ei.get(e);for(;Zi.has($s);)$s++;var t=$s++;return Ei.set(e,t),Zi.set(t,e),t},ky=function(e,t){Ei.set(e,t),Zi.set(t,e)},jy="style[".concat(Tr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),$y=new RegExp("^".concat(Tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cy=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Ey=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var u=s.match($y);if(u){var c=0|parseInt(u[1],10),p=u[2];c!==0&&(ky(p,c),Cy(e,p,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}};function Py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _m=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){return Array.from(s.querySelectorAll("style[".concat(Tr,"]"))).at(-1)}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Tr,"active"),r.setAttribute("data-styled-version","6.0.1");var l=Py();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},by=function(){function e(t){this.element=_m(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Uo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),_y=function(){function e(t){this.element=_m(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Ty=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xd=Iu,zy={isServer:!Iu,useCSSOMInjection:!ly},Tm=function(){function e(t,n,r){t===void 0&&(t=zr),n===void 0&&(n={});var o=this;this.options=Ee(Ee({},zy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Iu&&xd&&(xd=!1,function(i){for(var l=document.querySelectorAll(jy),s=0,u=l.length;s<u;s++){var c=l[s];c&&c.getAttribute(Tr)!=="active"&&(Ey(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Fu(this,function(){return function(i){for(var l=i.getTag(),s=l.length,u="",c=function(g){var m=function(f){return Zi.get(f)}(g);if(m===void 0)return"continue";var y=i.names.get(m),x=l.getGroup(g);if(y===void 0||x.length===0)return"continue";var w="".concat(Tr,".g").concat(g,'[id="').concat(m,'"]'),P="";y!==void 0&&y.forEach(function(f){f.length>0&&(P+="".concat(f,","))}),u+="".concat(x).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},p=0;p<s;p++)c(p);return u}(o)})}return e.registerId=function(t){return ai(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ee(Ee({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Ty(o):r?new by(o):new _y(o)}(this.options),new Sy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ai(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ai(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ai(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Oy=/&/g,Ry=/^\s*\/\/.*$/gm;function zm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zm(n.children,t)),n})}function Ny(e){var t,n,r,o=e===void 0?zr:e,i=o.options,l=i===void 0?zr:i,s=o.plugins,u=s===void 0?Mu:s,c=function(m,y,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):m},p=u.slice();p.push(function(m){m.type===Sl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Oy,n).replace(r,c))}),l.prefix&&p.push(oy),p.push(ty);var g=function(m,y,x,w){y===void 0&&(y=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(Ry,""),f=Zv(x||y?"".concat(x," ").concat(y," { ").concat(P," }"):P);l.namespace&&(f=zm(f,l.namespace));var d=[];return Ji(f,ny(p.concat(ry(function(h){return d.push(h)})))),d};return g.hash=u.length?u.reduce(function(m,y){return y.name||Uo(15),fr(m,y.name)},5381).toString():"",g}var Ay=new Tm,Na=Ny(),Om=Cn.createContext({shouldForwardProp:void 0,styleSheet:Ay,stylis:Na});Om.Consumer;Cn.createContext(void 0);function wd(){return z.useContext(Om)}var Ly=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Na);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Fu(this,function(){throw Uo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Na),this.name+t.hash},e}(),Iy=function(e){return e>="A"&&e<="Z"};function Sd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Iy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Rm=function(e){return e==null||e===!1||e===""},Nm=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Rm(i)&&(Array.isArray(i)&&i.isCss||Or(i)?r.push("".concat(Sd(o),":"),i,";"):Ro(i)?r.push.apply(r,qi(qi(["".concat(o," {")],Nm(i),!1),["}"],!1)):r.push("".concat(Sd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in iy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $n(e,t,n,r){if(Rm(e))return[];if(Du(e))return[".".concat(e.styledComponentId)];if(Or(e)){if(!Or(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return $n(o,t,n,r)}var i;return e instanceof Ly?n?(e.inject(n,r),[e.getName(r)]):[e]:Ro(e)?Nm(e):Array.isArray(e)?e.flatMap(function(l){return $n(l,t,n,r)}):[e.toString()]}function My(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Du(n))return!1}return!0}var Dy=$m("6.0.1"),Fy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&My(t),this.componentId=n,this.baseHash=fr(Dy,n),this.baseStyle=r,Tm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=wn(o,this.staticRulesId);else{var i=yd($n(this.rules,t,n,r)),l=Oa(fr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=wn(o,l),this.staticRulesId=l}else{for(var u=fr(this.baseHash,r.hash),c="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")c+=g;else if(g){var m=yd($n(g,t,n,r));u=fr(u,m),c+=m}}if(c){var y=Oa(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),o=wn(o,y)}}return o},e}(),Am=Cn.createContext(void 0);Am.Consumer;var Cs={};function By(e,t,n){var r=Du(e),o=e,i=!js(e),l=t.attrs,s=l===void 0?Mu:l,u=t.componentId,c=u===void 0?function(S,$){var E=typeof S!="string"?"sc":pd(S);Cs[E]=(Cs[E]||0)+1;var j="".concat(E,"-").concat(dy("6.0.1"+E+Cs[E]));return $?"".concat($,"-").concat(j):j}(t.displayName,t.parentComponentId):u,p=t.displayName,g=p===void 0?function(S){return js(S)?"styled.".concat(S):"Styled(".concat(fy(S),")")}(e):p,m=t.displayName&&t.componentId?"".concat(pd(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;x=function(S,$){return w(S,$)&&P(S,$)}}else x=w}var f=new Fy(n,m,r?o.componentStyle:void 0);f.isStatic&&s.length;function d(S,$){return function(E,j,T,M){var R=E.attrs,oe=E.componentStyle,cn=E.defaultProps,dn=E.foldedComponentIds,Ho=E.styledComponentId,Xl=E.target,Br=Cn.useContext(Am),Ur=wd(),b=E.shouldForwardProp||Ur.shouldForwardProp,O=function(bt,Te,ht){for(var Hr,pn=Ee(Ee({},Te),{className:void 0,theme:ht}),Ql=0;Ql<bt.length;Ql+=1){var Wo=Or(Hr=bt[Ql])?Hr(pn):Hr;for(var _t in Wo)pn[_t]=_t==="className"?wn(pn[_t],Wo[_t]):_t==="style"?Ee(Ee({},pn[_t]),Wo[_t]):Wo[_t]}return Te.className&&(pn.className=wn(pn.className,Te.className)),pn}(R,j,sy(j,Br,cn)||zr),N=O.as||Xl,H={};for(var W in O)O[W]===void 0||W[0]==="$"||W==="as"||W==="theme"||(W==="forwardedAs"?H.as=O.forwardedAs:b&&!b(W,N)||(H[W]=O[W]));var fn=function(bt,Te){var ht=wd(),Hr=bt.generateAndInjectStyles(Te,ht.styleSheet,ht.stylis);return Hr}(oe,O),Qe=wn(dn,Ho);return fn&&(Qe+=" "+fn),O.className&&(Qe+=" "+O.className),H[js(N)&&!jm.has(N)?"class":"className"]=Qe,H.ref=T,z.createElement(N,H)}(h,S,$)}d.displayName=g;var h=Cn.forwardRef(d);return h.attrs=y,h.componentStyle=f,h.displayName=g,h.shouldForwardProp=x,h.foldedComponentIds=r?wn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=m,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function($){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var T=0,M=E;T<M.length;T++)Ra($,M[T],!0);return $}({},o.defaultProps,S):S}}),Fu(h,function(){return".".concat(h.styledComponentId)}),i&&bm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function kd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var jd=function(e){return Object.assign(e,{isCss:!0})};function Bu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Or(e)||Ro(e)){var r=e;return jd($n(kd(Mu,qi([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?$n(o):jd($n(kd(o,t)))}function Aa(e,t,n){if(n===void 0&&(n=zr),!t)throw Uo(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Bu.apply(void 0,qi([o],i,!1)))};return r.attrs=function(o){return Aa(e,t,Ee(Ee({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Aa(e,t,Ee(Ee({},n),o))},r}var Lm=function(e){return Aa(By,e)},v=Lm;jm.forEach(function(e){v[e]=Lm(e)});const Im=z.createContext("ThemeContext"),Uy=({children:e})=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),n=window.matchMedia("(prefers-color-scheme: light)"),[r,o]=z.useState(t.matches);return z.useEffect(()=>{document.documentElement.setAttribute("data-theme",r?"dark":"light")},[r]),z.useEffect(()=>{const i=s=>s.matches&&o(!0),l=s=>s.matches&&o(!1);return t.addEventListener("change",i),n.addEventListener("change",l),()=>{t.removeEventListener("change",i),n.removeEventListener("change",l)}}),a.jsx(Im.Provider,{value:[r,o],children:e})};var Mm={exports:{}},Dm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rr=z;function Hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wy=typeof Object.is=="function"?Object.is:Hy,Vy=Rr.useState,Gy=Rr.useEffect,Xy=Rr.useLayoutEffect,Qy=Rr.useDebugValue;function Yy(e,t){var n=t(),r=Vy({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Xy(function(){o.value=n,o.getSnapshot=t,Es(o)&&i({inst:o})},[e,n,t]),Gy(function(){return Es(o)&&i({inst:o}),e(function(){Es(o)&&i({inst:o})})},[e]),Qy(n),n}function Es(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wy(e,n)}catch{return!0}}function Ky(e,t){return t()}var qy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ky:Yy;Dm.useSyncExternalStore=Rr.useSyncExternalStore!==void 0?Rr.useSyncExternalStore:qy;Mm.exports=Dm;var Jy=Mm.exports,Fm={exports:{}},Bm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=z,Zy=Jy;function e0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var t0=typeof Object.is=="function"?Object.is:e0,n0=Zy.useSyncExternalStore,r0=Cl.useRef,o0=Cl.useEffect,i0=Cl.useMemo,l0=Cl.useDebugValue;Bm.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=r0(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=i0(function(){function u(y){if(!c){if(c=!0,p=y,y=r(y),o!==void 0&&l.hasValue){var x=l.value;if(o(x,y))return g=x}return g=y}if(x=g,t0(p,y))return x;var w=r(y);return o!==void 0&&o(x,w)?x:(p=y,g=w)}var c=!1,p,g,m=n===void 0?null:n;return[function(){return u(t())},m===null?void 0:function(){return u(m())}]},[t,n,r,o]);var s=n0(e,i[0],i[1]);return o0(function(){l.hasValue=!0,l.value=s},[s]),l0(s),s};Fm.exports=Bm;var s0=Fm.exports;function a0(e){e()}let Um=a0;const u0=e=>Um=e,c0=()=>Um,$d=Symbol.for(`react-redux-context-${z.version}`),Cd=globalThis;function d0(){let e=Cd[$d];return e||(e=z.createContext(null),Cd[$d]=e),e}const on=new Proxy({},new Proxy({},{get(e,t){const n=d0();return(r,...o)=>Reflect[t](n,...o)}}));function Uu(e=on){return function(){return z.useContext(e)}}const Hm=Uu(),f0=()=>{throw new Error("uSES not initialized!")};let Wm=f0;const p0=e=>{Wm=e},m0=(e,t)=>e===t;function h0(e=on){const t=e===on?Hm:Uu(e);return function(r,o={}){const{equalityFn:i=m0,stabilityCheck:l=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:u,subscription:c,getServerState:p,stabilityCheck:g,noopCheck:m}=t();z.useRef(!0);const y=z.useCallback({[r.name](w){return r(w)}}[r.name],[r,g,l]),x=Wm(c.addNestedSub,u.getState,p||u.getState,y,i);return z.useDebugValue(x),x}}const Ge=h0();var Vm={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Hu=ce?Symbol.for("react.element"):60103,Wu=ce?Symbol.for("react.portal"):60106,El=ce?Symbol.for("react.fragment"):60107,Pl=ce?Symbol.for("react.strict_mode"):60108,bl=ce?Symbol.for("react.profiler"):60114,_l=ce?Symbol.for("react.provider"):60109,Tl=ce?Symbol.for("react.context"):60110,Vu=ce?Symbol.for("react.async_mode"):60111,zl=ce?Symbol.for("react.concurrent_mode"):60111,Ol=ce?Symbol.for("react.forward_ref"):60112,Rl=ce?Symbol.for("react.suspense"):60113,g0=ce?Symbol.for("react.suspense_list"):60120,Nl=ce?Symbol.for("react.memo"):60115,Al=ce?Symbol.for("react.lazy"):60116,v0=ce?Symbol.for("react.block"):60121,y0=ce?Symbol.for("react.fundamental"):60117,x0=ce?Symbol.for("react.responder"):60118,w0=ce?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Hu:switch(e=e.type,e){case Vu:case zl:case El:case bl:case Pl:case Rl:return e;default:switch(e=e&&e.$$typeof,e){case Tl:case Ol:case Al:case Nl:case _l:return e;default:return t}}case Wu:return t}}}function Gm(e){return Me(e)===zl}B.AsyncMode=Vu;B.ConcurrentMode=zl;B.ContextConsumer=Tl;B.ContextProvider=_l;B.Element=Hu;B.ForwardRef=Ol;B.Fragment=El;B.Lazy=Al;B.Memo=Nl;B.Portal=Wu;B.Profiler=bl;B.StrictMode=Pl;B.Suspense=Rl;B.isAsyncMode=function(e){return Gm(e)||Me(e)===Vu};B.isConcurrentMode=Gm;B.isContextConsumer=function(e){return Me(e)===Tl};B.isContextProvider=function(e){return Me(e)===_l};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hu};B.isForwardRef=function(e){return Me(e)===Ol};B.isFragment=function(e){return Me(e)===El};B.isLazy=function(e){return Me(e)===Al};B.isMemo=function(e){return Me(e)===Nl};B.isPortal=function(e){return Me(e)===Wu};B.isProfiler=function(e){return Me(e)===bl};B.isStrictMode=function(e){return Me(e)===Pl};B.isSuspense=function(e){return Me(e)===Rl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===El||e===zl||e===bl||e===Pl||e===Rl||e===g0||typeof e=="object"&&e!==null&&(e.$$typeof===Al||e.$$typeof===Nl||e.$$typeof===_l||e.$$typeof===Tl||e.$$typeof===Ol||e.$$typeof===y0||e.$$typeof===x0||e.$$typeof===w0||e.$$typeof===v0)};B.typeOf=Me;Vm.exports=B;var S0=Vm.exports,Xm=S0,k0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},j0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qm={};Qm[Xm.ForwardRef]=k0;Qm[Xm.Memo]=j0;var U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gu=Symbol.for("react.element"),Xu=Symbol.for("react.portal"),Ll=Symbol.for("react.fragment"),Il=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Dl=Symbol.for("react.provider"),Fl=Symbol.for("react.context"),$0=Symbol.for("react.server_context"),Bl=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),Wl=Symbol.for("react.memo"),Vl=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),Ym;Ym=Symbol.for("react.module.reference");function Xe(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gu:switch(e=e.type,e){case Ll:case Ml:case Il:case Ul:case Hl:return e;default:switch(e=e&&e.$$typeof,e){case $0:case Fl:case Bl:case Vl:case Wl:case Dl:return e;default:return t}}case Xu:return t}}}U.ContextConsumer=Fl;U.ContextProvider=Dl;U.Element=Gu;U.ForwardRef=Bl;U.Fragment=Ll;U.Lazy=Vl;U.Memo=Wl;U.Portal=Xu;U.Profiler=Ml;U.StrictMode=Il;U.Suspense=Ul;U.SuspenseList=Hl;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Xe(e)===Fl};U.isContextProvider=function(e){return Xe(e)===Dl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gu};U.isForwardRef=function(e){return Xe(e)===Bl};U.isFragment=function(e){return Xe(e)===Ll};U.isLazy=function(e){return Xe(e)===Vl};U.isMemo=function(e){return Xe(e)===Wl};U.isPortal=function(e){return Xe(e)===Xu};U.isProfiler=function(e){return Xe(e)===Ml};U.isStrictMode=function(e){return Xe(e)===Il};U.isSuspense=function(e){return Xe(e)===Ul};U.isSuspenseList=function(e){return Xe(e)===Hl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ll||e===Ml||e===Il||e===Ul||e===Hl||e===C0||typeof e=="object"&&e!==null&&(e.$$typeof===Vl||e.$$typeof===Wl||e.$$typeof===Dl||e.$$typeof===Fl||e.$$typeof===Bl||e.$$typeof===Ym||e.getModuleId!==void 0)};U.typeOf=Xe;function E0(){const e=c0();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Ed={notify(){},get:()=>[]};function P0(e,t){let n,r=Ed;function o(g){return u(),r.subscribe(g)}function i(){r.notify()}function l(){p.onStateChange&&p.onStateChange()}function s(){return!!n}function u(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=E0())}function c(){n&&(n(),n=void 0,r.clear(),r=Ed)}const p={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:s,trySubscribe:u,tryUnsubscribe:c,getListeners:()=>r};return p}const b0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_0=b0?z.useLayoutEffect:z.useEffect;function T0({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const l=z.useMemo(()=>{const c=P0(e);return{store:e,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=z.useMemo(()=>e.getState(),[e]);_0(()=>{const{subscription:c}=l;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[l,s]);const u=t||on;return Cn.createElement(u.Provider,{value:l},n)}function Km(e=on){const t=e===on?Hm:Uu(e);return function(){const{store:r}=t();return r}}const z0=Km();function O0(e=on){const t=e===on?z0:Km(e);return function(){return t().dispatch}}const Gl=O0();p0(s0.useSyncExternalStoreWithSelector);u0(gm.unstable_batchedUpdates);function Ze(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ln(e){return!!e&&!!e[Y]}function Et(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===B0}(e)||Array.isArray(e)||!!e[Rd]||!!(!((t=e.constructor)===null||t===void 0)&&t[Rd])||Qu(e)||Yu(e))}function zn(e,t,n){n===void 0&&(n=!1),Dr(e)===0?(n?Object.keys:wr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Dr(e){var t=e[Y];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Qu(e)?2:Yu(e)?3:0}function xr(e,t){return Dr(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function R0(e,t){return Dr(e)===2?e.get(t):e[t]}function qm(e,t,n){var r=Dr(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Jm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Qu(e){return D0&&e instanceof Map}function Yu(e){return F0&&e instanceof Set}function gn(e){return e.o||e.t}function Ku(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=eh(e);delete t[Y];for(var n=wr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function qu(e,t){return t===void 0&&(t=!1),Ju(e)||ln(e)||!Et(e)||(Dr(e)>1&&(e.set=e.add=e.clear=e.delete=N0),Object.freeze(e),t&&zn(e,function(n,r){return qu(r,!0)},!0)),e}function N0(){Ze(2)}function Ju(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function pt(e){var t=Da[e];return t||Ze(18,e),t}function A0(e,t){Da[e]||(Da[e]=t)}function La(){return No}function Ps(e,t){t&&(pt("Patches"),e.u=[],e.s=[],e.v=t)}function el(e){Ia(e),e.p.forEach(L0),e.p=null}function Ia(e){e===No&&(No=e.l)}function Pd(e){return No={p:[],l:No,h:e,m:!0,_:0}}function L0(e){var t=e[Y];t.i===0||t.i===1?t.j():t.g=!0}function bs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||pt("ES5").S(t,e,r),r?(n[Y].P&&(el(t),Ze(4)),Et(e)&&(e=tl(t,e),t.l||nl(t,e)),t.u&&pt("Patches").M(n[Y].t,e,t.u,t.s)):e=tl(t,n,[]),el(t),t.u&&t.v(t.u,t.s),e!==Zm?e:void 0}function tl(e,t,n){if(Ju(t))return t;var r=t[Y];if(!r)return zn(t,function(s,u){return bd(e,r,t,s,u,n)},!0),t;if(r.A!==e)return t;if(!r.P)return nl(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Ku(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),zn(i,function(s,u){return bd(e,r,o,s,u,n,l)}),nl(e,o,!1),n&&e.u&&pt("Patches").N(r,n,e.u,e.s)}return r.o}function bd(e,t,n,r,o,i,l){if(ln(o)){var s=tl(e,o,i&&t&&t.i!==3&&!xr(t.R,r)?i.concat(r):void 0);if(qm(n,r,s),!ln(s))return;e.m=!1}else l&&n.add(o);if(Et(o)&&!Ju(o)){if(!e.h.D&&e._<1)return;tl(e,o),t&&t.A.l||nl(e,o)}}function nl(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&qu(t,n)}function _s(e,t){var n=e[Y];return(n?gn(n):e)[t]}function _d(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Ht(e){e.P||(e.P=!0,e.l&&Ht(e.l))}function Ts(e){e.o||(e.o=Ku(e.t))}function Ma(e,t,n){var r=Qu(t)?pt("MapSet").F(t,n):Yu(t)?pt("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),s={i:l?1:0,A:i?i.A:La(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},u=s,c=Ao;l&&(u=[s],c=oo);var p=Proxy.revocable(u,c),g=p.revoke,m=p.proxy;return s.k=m,s.j=g,m}(t,n):pt("ES5").J(t,n);return(n?n.A:La()).p.push(r),r}function I0(e){return ln(e)||Ze(22,e),function t(n){if(!Et(n))return n;var r,o=n[Y],i=Dr(n);if(o){if(!o.P&&(o.i<4||!pt("ES5").K(o)))return o.t;o.I=!0,r=Td(n,i),o.I=!1}else r=Td(n,i);return zn(r,function(l,s){o&&R0(o.t,l)===s||qm(r,l,t(s))}),i===3?new Set(r):r}(e)}function Td(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ku(e)}function M0(){function e(i,l){var s=o[i];return s?s.enumerable=l:o[i]=s={configurable:!0,enumerable:l,get:function(){var u=this[Y];return Ao.get(u,i)},set:function(u){var c=this[Y];Ao.set(c,i,u)}},s}function t(i){for(var l=i.length-1;l>=0;l--){var s=i[l][Y];if(!s.P)switch(s.i){case 5:r(s)&&Ht(s);break;case 4:n(s)&&Ht(s)}}}function n(i){for(var l=i.t,s=i.k,u=wr(s),c=u.length-1;c>=0;c--){var p=u[c];if(p!==Y){var g=l[p];if(g===void 0&&!xr(l,p))return!0;var m=s[p],y=m&&m[Y];if(y?y.t!==g:!Jm(m,g))return!0}}var x=!!l[Y];return u.length!==wr(l).length+(x?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(l,l.length-1);if(s&&!s.get)return!0;for(var u=0;u<l.length;u++)if(!l.hasOwnProperty(u))return!0;return!1}var o={};A0("ES5",{J:function(i,l){var s=Array.isArray(i),u=function(p,g){if(p){for(var m=Array(g.length),y=0;y<g.length;y++)Object.defineProperty(m,""+y,e(y,!0));return m}var x=eh(g);delete x[Y];for(var w=wr(x),P=0;P<w.length;P++){var f=w[P];x[f]=e(f,p||!!x[f].enumerable)}return Object.create(Object.getPrototypeOf(g),x)}(s,i),c={i:s?5:4,A:l?l.A:La(),P:!1,I:!1,R:{},l,t:i,k:u,o:null,g:!1,C:!1};return Object.defineProperty(u,Y,{value:c,writable:!0}),u},S:function(i,l,s){s?ln(l)&&l[Y].A===i&&t(i.p):(i.u&&function u(c){if(c&&typeof c=="object"){var p=c[Y];if(p){var g=p.t,m=p.k,y=p.R,x=p.i;if(x===4)zn(m,function(h){h!==Y&&(g[h]!==void 0||xr(g,h)?y[h]||u(m[h]):(y[h]=!0,Ht(p)))}),zn(g,function(h){m[h]!==void 0||xr(m,h)||(y[h]=!1,Ht(p))});else if(x===5){if(r(p)&&(Ht(p),y.length=!0),m.length<g.length)for(var w=m.length;w<g.length;w++)y[w]=!1;else for(var P=g.length;P<m.length;P++)y[P]=!0;for(var f=Math.min(m.length,g.length),d=0;d<f;d++)m.hasOwnProperty(d)||(y[d]=!0),y[d]===void 0&&u(m[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var zd,No,Zu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",D0=typeof Map<"u",F0=typeof Set<"u",Od=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Zm=Zu?Symbol.for("immer-nothing"):((zd={})["immer-nothing"]=!0,zd),Rd=Zu?Symbol.for("immer-draftable"):"__$immer_draftable",Y=Zu?Symbol.for("immer-state"):"__$immer_state",B0=""+Object.prototype.constructor,wr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,eh=Object.getOwnPropertyDescriptors||function(e){var t={};return wr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Da={},Ao={get:function(e,t){if(t===Y)return e;var n=gn(e);if(!xr(n,t))return function(o,i,l){var s,u=_d(i,l);return u?"value"in u?u.value:(s=u.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Et(r)?r:r===_s(e.t,t)?(Ts(e),e.o[t]=Ma(e.A.h,r,e)):r},has:function(e,t){return t in gn(e)},ownKeys:function(e){return Reflect.ownKeys(gn(e))},set:function(e,t,n){var r=_d(gn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=_s(gn(e),t),i=o==null?void 0:o[Y];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Jm(n,o)&&(n!==void 0||xr(e.t,t)))return!0;Ts(e),Ht(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return _s(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Ts(e),Ht(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=gn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ze(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ze(12)}},oo={};zn(Ao,function(e,t){oo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),oo.deleteProperty=function(e,t){return oo.set.call(this,e,t,void 0)},oo.set=function(e,t,n){return Ao.set.call(this,e[0],t,n,e[0])};var U0=function(){function e(n){var r=this;this.O=Od,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var u=r;return function(w){var P=this;w===void 0&&(w=s);for(var f=arguments.length,d=Array(f>1?f-1:0),h=1;h<f;h++)d[h-1]=arguments[h];return u.produce(w,function(S){var $;return($=i).call.apply($,[P,S].concat(d))})}}var c;if(typeof i!="function"&&Ze(6),l!==void 0&&typeof l!="function"&&Ze(7),Et(o)){var p=Pd(r),g=Ma(r,o,void 0),m=!0;try{c=i(g),m=!1}finally{m?el(p):Ia(p)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(w){return Ps(p,l),bs(w,p)},function(w){throw el(p),w}):(Ps(p,l),bs(c,p))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===Zm&&(c=void 0),r.D&&qu(c,!0),l){var y=[],x=[];pt("Patches").M(o,c,y,x),l(y,x)}return c}Ze(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var p=arguments.length,g=Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];return r.produceWithPatches(c,function(y){return o.apply(void 0,[y].concat(g))})};var l,s,u=r.produce(o,i,function(c,p){l=c,s=p});return typeof Promise<"u"&&u instanceof Promise?u.then(function(c){return[c,l,s]}):[u,l,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Et(n)||Ze(8),ln(n)&&(n=I0(n));var r=Pd(this),o=Ma(this,n,void 0);return o[Y].C=!0,Ia(r),o},t.finishDraft=function(n,r){var o=n&&n[Y],i=o.A;return Ps(i,r),bs(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!Od&&Ze(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=pt("Patches").$;return ln(n)?l(n,r):this.produce(n,function(s){return l(s,r)})},e}(),Ae=new U0,th=Ae.produce;Ae.produceWithPatches.bind(Ae);Ae.setAutoFreeze.bind(Ae);Ae.setUseProxies.bind(Ae);Ae.applyPatches.bind(Ae);Ae.createDraft.bind(Ae);Ae.finishDraft.bind(Ae);function Lo(e){"@babel/helpers - typeof";return Lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Lo(e)}function H0(e,t){if(Lo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Lo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function W0(e){var t=H0(e,"string");return Lo(t)==="symbol"?t:String(t)}function V0(e,t,n){return t=W0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Ad(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nd(Object(n),!0).forEach(function(r){V0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ge(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ld=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),zs=function(){return Math.random().toString(36).substring(7).split("").join(".")},rl={INIT:"@@redux/INIT"+zs(),REPLACE:"@@redux/REPLACE"+zs(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+zs()}};function G0(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function nh(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ge(1));return n(nh)(e,t)}if(typeof e!="function")throw new Error(ge(2));var o=e,i=t,l=[],s=l,u=!1;function c(){s===l&&(s=l.slice())}function p(){if(u)throw new Error(ge(3));return i}function g(w){if(typeof w!="function")throw new Error(ge(4));if(u)throw new Error(ge(5));var P=!0;return c(),s.push(w),function(){if(P){if(u)throw new Error(ge(6));P=!1,c();var d=s.indexOf(w);s.splice(d,1),l=null}}}function m(w){if(!G0(w))throw new Error(ge(7));if(typeof w.type>"u")throw new Error(ge(8));if(u)throw new Error(ge(9));try{u=!0,i=o(i,w)}finally{u=!1}for(var P=l=s,f=0;f<P.length;f++){var d=P[f];d()}return w}function y(w){if(typeof w!="function")throw new Error(ge(10));o=w,m({type:rl.REPLACE})}function x(){var w,P=g;return w={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(ge(11));function h(){d.next&&d.next(p())}h();var S=P(h);return{unsubscribe:S}}},w[Ld]=function(){return this},w}return m({type:rl.INIT}),r={dispatch:m,subscribe:g,getState:p,replaceReducer:y},r[Ld]=x,r}function X0(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:rl.INIT});if(typeof r>"u")throw new Error(ge(12));if(typeof n(void 0,{type:rl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function Q0(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{X0(n)}catch(s){l=s}return function(u,c){if(u===void 0&&(u={}),l)throw l;for(var p=!1,g={},m=0;m<i.length;m++){var y=i[m],x=n[y],w=u[y],P=x(w,c);if(typeof P>"u")throw c&&c.type,new Error(ge(14));g[y]=P,p=p||P!==w}return p=p||i.length!==Object.keys(u).length,p?g:u}}function ol(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function Y0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(ge(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(u){return u(l)});return i=ol.apply(void 0,s)(o.dispatch),Ad(Ad({},o),{},{dispatch:i})}}}function rh(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(s){return typeof s=="function"?s(o,i,e):l(s)}}};return t}var oh=rh();oh.withExtraArgument=rh;const Id=oh;var ih=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),K0=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(c){return function(p){return u([c,p])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(p){c=[6,p],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},Nr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},q0=Object.defineProperty,J0=Object.defineProperties,Z0=Object.getOwnPropertyDescriptors,Md=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,Dd=function(e,t,n){return t in e?q0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},en=function(e,t){for(var n in t||(t={}))e1.call(t,n)&&Dd(e,n,t[n]);if(Md)for(var r=0,o=Md(t);r<o.length;r++){var n=o[r];t1.call(t,n)&&Dd(e,n,t[n])}return e},Os=function(e,t){return J0(e,Z0(t))},n1=function(e,t,n){return new Promise(function(r,o){var i=function(u){try{s(n.next(u))}catch(c){o(c)}},l=function(u){try{s(n.throw(u))}catch(c){o(c)}},s=function(u){return u.done?r(u.value):Promise.resolve(u.value).then(i,l)};s((n=n.apply(e,t)).next())})},r1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ol:ol.apply(null,arguments)};function o1(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var i1=function(e){ih(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nr([void 0],n.concat(this))))},t}(Array),l1=function(e){ih(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Nr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Nr([void 0],n.concat(this))))},t}(Array);function Fa(e){return Et(e)?th(e,function(){}):e}function s1(e){return typeof e=="boolean"}function a1(){return function(t){return u1(t)}}function u1(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new i1;return n&&(s1(n)?r.push(Id):r.push(Id.withExtraArgument(n.extraArgument))),r}var c1=!0;function d1(e){var t=a1(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,s=n.devTools,u=s===void 0?!0:s,c=n.preloadedState,p=c===void 0?void 0:c,g=n.enhancers,m=g===void 0?void 0:g,y;if(typeof o=="function")y=o;else if(o1(o))y=Q0(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var x=l;typeof x=="function"&&(x=x(t));var w=Y0.apply(void 0,x),P=ol;u&&(P=r1(en({trace:!c1},typeof u=="object"&&u)));var f=new l1(w),d=f;Array.isArray(m)?d=Nr([w],m):typeof m=="function"&&(d=m(f));var h=P.apply(void 0,d);return nh(y,p,h)}function tn(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return en(en({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function lh(e){var t={},n=[],r,o={addCase:function(i,l){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function f1(e){return typeof e=="function"}function p1(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?lh(t):[t,n,r],i=o[0],l=o[1],s=o[2],u;if(f1(e))u=function(){return Fa(e())};else{var c=Fa(e);u=function(){return c}}function p(g,m){g===void 0&&(g=u());var y=Nr([i[m.type]],l.filter(function(x){var w=x.matcher;return w(m)}).map(function(x){var w=x.reducer;return w}));return y.filter(function(x){return!!x}).length===0&&(y=[s]),y.reduce(function(x,w){if(w)if(ln(x)){var P=x,f=w(P,m);return f===void 0?x:f}else{if(Et(x))return th(x,function(d){return w(d,m)});var f=w(x,m);if(f===void 0){if(x===null)return x;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}return x},g)}return p.getInitialState=u,p}function m1(e,t){return e+"/"+t}function h1(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Fa(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},s={};o.forEach(function(p){var g=r[p],m=m1(t,p),y,x;"reducer"in g?(y=g.reducer,x=g.prepare):y=g,i[p]=y,l[m]=y,s[p]=x?tn(m,x):tn(m)});function u(){var p=typeof e.extraReducers=="function"?lh(e.extraReducers):[e.extraReducers],g=p[0],m=g===void 0?{}:g,y=p[1],x=y===void 0?[]:y,w=p[2],P=w===void 0?void 0:w,f=en(en({},m),l);return p1(n,function(d){for(var h in f)d.addCase(h,f[h]);for(var S=0,$=x;S<$.length;S++){var E=$[S];d.addMatcher(E.matcher,E.reducer)}P&&d.addDefaultCase(P)})}var c;return{name:t,reducer:function(p,g){return c||(c=u()),c(p,g)},actions:s,caseReducers:i,getInitialState:function(){return c||(c=u()),c.getInitialState()}}}var g1="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",v1=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=g1[Math.random()*64|0];return t},y1=["name","message","stack","code"],Rs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Fd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),x1=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=y1;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=tn(t+"/fulfilled",function(c,p,g,m){return{payload:c,meta:Os(en({},m||{}),{arg:g,requestId:p,requestStatus:"fulfilled"})}}),i=tn(t+"/pending",function(c,p,g){return{payload:void 0,meta:Os(en({},g||{}),{arg:p,requestId:c,requestStatus:"pending"})}}),l=tn(t+"/rejected",function(c,p,g,m,y){return{payload:m,error:(r&&r.serializeError||x1)(c||"Rejected"),meta:Os(en({},y||{}),{arg:g,requestId:p,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function u(c){return function(p,g,m){var y=r!=null&&r.idGenerator?r.idGenerator(c):v1(),x=new s,w;function P(d){w=d,x.abort()}var f=function(){return n1(this,null,function(){var d,h,S,$,E,j,T;return K0(this,function(M){switch(M.label){case 0:return M.trys.push([0,4,,5]),$=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,c,{getState:g,extra:m}),S1($)?[4,$]:[3,2];case 1:$=M.sent(),M.label=2;case 2:if($===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return E=new Promise(function(R,oe){return x.signal.addEventListener("abort",function(){return oe({name:"AbortError",message:w||"Aborted"})})}),p(i(y,c,(h=r==null?void 0:r.getPendingMeta)==null?void 0:h.call(r,{requestId:y,arg:c},{getState:g,extra:m}))),[4,Promise.race([E,Promise.resolve(n(c,{dispatch:p,getState:g,extra:m,requestId:y,signal:x.signal,abort:P,rejectWithValue:function(R,oe){return new Rs(R,oe)},fulfillWithValue:function(R,oe){return new Fd(R,oe)}})).then(function(R){if(R instanceof Rs)throw R;return R instanceof Fd?o(R.payload,y,c,R.meta):o(R,y,c)})])];case 3:return S=M.sent(),[3,5];case 4:return j=M.sent(),S=j instanceof Rs?l(null,y,c,j.payload,j.meta):l(j,y,c),[3,5];case 5:return T=r&&!r.dispatchConditionRejection&&l.match(S)&&S.meta.condition,T||p(S),[2,S]}})})}();return Object.assign(f,{abort:P,requestId:y,arg:c,unwrap:function(){return f.then(w1)}})}}return Object.assign(u,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function w1(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function S1(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ec="listenerMiddleware";tn(ec+"/add");tn(ec+"/removeAll");tn(ec+"/remove");var Bd;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);M0();const k1=e=>document.getElementById(e).scrollIntoView({behavior:"smooth"}),sh=h1({name:"scrollReducer",initialState:{current:"Home1"},reducers:{change:(e,t)=>{e.current=t.payload},scroll:(e,t)=>{k1(t.payload)}}}),{change:j1,scroll:ah}=sh.actions,$1=sh.reducer,k="768px",C1="1000px";var E1;const P1=()=>{const[e,t]=z.useState(!1),[n,r]=z.useContext(Im),o=Ge(c=>c.scrollReducer).current,i=Gl(),l=z.useCallback(c=>{clearTimeout(E1),setTimeout(()=>t(!1),c)},[]),s=z.useCallback(c=>{if(c.target.checked){t(!0);return}l(0)},[]),u=z.useCallback(c=>{i(ah(c))});return z.useEffect(()=>{e&&l(1500)},[o]),a.jsxs(z1,{children:[a.jsx(b1,{isDark:n,onChange:c=>r(!c.target.checked)}),a.jsx(_1,{mobileMenuShown:e,onChange:s}),a.jsxs(O1,{$mobileMenuShown:e,children:[a.jsx(Jr,{section:"Home",label:"Home",currentSection:o,onClick:u}),a.jsx(Jr,{section:"Experiences",label:"Skills",currentSection:o,onClick:u}),a.jsx(Jr,{section:"Projects",label:"Projects",currentSection:o,onClick:u}),a.jsx(Jr,{section:"Contact",label:"Contact",currentSection:o,onClick:u}),a.jsx(Jr,{section:"Resume",label:"Resume",currentSection:"",onClick:()=>open("/assets/Resume.pdf","_blank")})]})]})},Jr=({section:e,label:t,currentSection:n,onClick:r})=>a.jsx(R1,{selected:n.startsWith(e),onClick:()=>r(e),children:t}),b1=({isDark:e,onChange:t})=>a.jsx("div",{className:"toggle-switch",children:a.jsxs("label",{className:"switch-label",children:[a.jsx("input",{type:"checkbox",className:"checkbox",checked:!e,onChange:t}),a.jsx("span",{className:"slider"})]})}),_1=({mobileMenuShown:e,onChange:t})=>a.jsxs(T1,{className:"container",children:[a.jsx("input",{type:"checkbox",checked:e,onChange:t}),a.jsxs("div",{className:"checkmark",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]}),T1=v.label`
    opacity: 0;
    position: absolute;
    visibility: hidden;
    @media (max-width: ${k}){
        position: static;
        visibility: visible;
        position: relative;
        opacity: 1;
        transition: opacity 1s ease;
    }
`,z1=v.nav`
    position: relative;
    display: flex;
    gap: .5rem;
    align-items: center;

`,O1=v.nav`
    display: flex;
    gap: .5rem;
    align-items: center;

    @media (max-width: ${k}){

        /* Display */
        transition-delay: ${e=>e.$mobileMenuShown?"0s":"8s"};
        transition-property: visibility;
        visibility: ${e=>e.$mobileMenuShown?"visible":"hidden"};

        transition: all .7s ease;
        opacity: ${e=>e.$mobileMenuShown?"1":"0"};

        flex-direction: column;
        align-items: start;
        position: absolute;
        top: 2.5rem;
        right: 0;

        border-radius: 1rem;
        padding: .8rem;
        
        /* Background */
        backdrop-filter: blur(1rem);
        -webkit-backdrop-filter: blur(1rem);
        background-color: var(--menu-background-transparent);
        box-shadow: 0 0 1.3rem .1rem rgba(0, 0, 0, 0.2);


    }
`,R1=v.span`
    /* Dimensions */
    font-size: .9rem;
    position: relative;

    /* Spacing */
    padding-inline: .5rem;
    padding-block: .3rem;

    /* Behavior */
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        height: .1rem;
        width: .7rem;
        border-radius: 3rem;
        bottom: 0;
        left: 50%;
        background-color: var(--primary-color);
        transform: translateX(-50%);
        box-shadow: 7px -10px 30px 7px var(--primary-color-shadow), -7px -10px 30px 7px var(--primary-color-shadow);
        opacity: ${e=>e.selected?"1":"0"};
        transition: all .8s ease;
    }

    @media (max-width: ${k}){
    font-size: .95rem;

        &:before {
            content: "";
            position: absolute;
            height: .7rem;
            width: .1rem;
            border-radius: 3rem;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background-color: var(--primary-color);
            box-shadow: 12px 1px 30px 7px var(--primary-color-shadow),  12px -1px  30px 7px var(--primary-color-shadow);

        }
        
    }
`;var Ud;const N1=()=>{const[e,t]=z.useState(!1),[n,r]=z.useState(!1);z.useState({visible:!0,text:"Portfolio"}),Ge(i=>i.scrollReducer).current;const o=z.useCallback(i=>{t(!0),clearTimeout(Ud),Ud=setTimeout(()=>t(!1),1200)},[]);return z.useEffect(()=>{const i=document.getElementById("vertical-stack");return i.addEventListener("scroll",o),setTimeout(()=>r(!0),1e3),()=>i.removeEventListener("scroll",o)},[]),a.jsxs(I1,{$shouldAppear:n,$shouldBlur:e,children:[a.jsx(M1,{children:"Portfolio"}),a.jsx(P1,{})]})},A1=Bu`
    background-color: var(--header-background);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`,L1=Bu`
    background-color: var(--header-background-transparent);
    box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
    `,I1=v.header`
    /* Position */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    /* Dimensions */
    max-height: 3rem;
    
    /* Spacing */
    padding: var(--global-padding);
    
    /* Display */
    opacity: ${e=>e.$shouldAppear?"1":"0"};
    display: flex;
    justify-content: space-between;
    
    
    /* Background */
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    ${e=>e.$shouldBlur?L1:A1}
    transition: all .7s ease;
`,M1=v.span`
    /* Dimensions */
    font-size: 1rem;
    font-weight: bold;
`;function mt(e){const t=z.useRef(),n=Gl(),r=z.useMemo(()=>new IntersectionObserver(([o])=>o.isIntersecting&&n(j1(e)),{threshold:.8}),[t]);return z.useEffect(()=>(r.observe(t.current),()=>r.disconnect()),[]),t}const D1="/assets/profile-55e6f7b3.jpg",F1="/assets/technologies-nolabel-8d4a8bca.png",B1=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e)},[o]),a.jsx(U1,{ref:r,id:e,children:a.jsxs(H1,{children:[a.jsxs(W1,{$visible:t,children:[a.jsx(Hd,{children:"Hello,"}),a.jsx("br",{}),a.jsx(V1,{children:"Great to see "}),a.jsx(Hd,{children:"You Here!"})]}),a.jsx(Wd,{$visible:t}),a.jsxs(G1,{$visible:t,children:[a.jsx(X1,{src:D1,alt:"Nazim's Profile Image"}),a.jsxs("div",{children:[a.jsx(Y1,{children:"I'm"})," ",a.jsx(K1,{children:"Nazim"}),a.jsx("br",{}),a.jsxs(Q1,{children:["A Passionate Learner, Meticulous in Details, and Enthusiast in ",a.jsx("br",{}),"Software Development"]})]})]}),a.jsx(Wd,{$visible:t}),a.jsx(q1,{src:F1,$visible:t,alt:"Main Technology Stack"})]})})},U1=v.section`
  position: relative;
`,H1=v.article`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: calc(7vh);

  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`,W1=v.div`
  color: var(--primary-text-color);
  font-size: 1.5rem;

  /* Display */
  transition-delay: ${e=>e.$visible?".1s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};

  @media (max-width: ${k}) {
    font-size: 1.2rem;
  }
`,V1=v.span`
  font-weight: 300;
`,Hd=v.span`
  font-weight: bold;
`,Wd=v.div`
  height: .2rem;
  width: 1rem;
  background-color: var(--separator-color);
  border-radius: 1rem;

  /* Display */
  transition-delay: ${e=>e.$visible?"1.3s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
`,G1=v.div`
  max-width: calc(100vw * 3/4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap:1.5rem;

  /* Display */
  transition-delay: ${e=>e.$visible?"1.5s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};

  @media (max-width: ${k}) {
    max-width: calc(100vw - 5rem);
  }
`,X1=v.img`
  max-height: 9rem;;
  border-radius: 37%;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${k}) {
    max-width: 7rem;
  }
`,Q1=v.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: .5rem;
  line-height: 1.5;
  @media (max-width: ${k}) {
    font-size: 1.1rem;
  }
`,Y1=v.span`
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: ${k}) {
    font-size: 1.3rem;
  }
  `,K1=v.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary-color);
  @media (max-width: ${k}) {
    font-size: 1.3rem;
  }
`,q1=v.img`
  max-width: 20rem;
  width: calc(100vw / 2);

  /* Display */
  transition-delay: ${e=>e.$visible?"1.8s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
  
  @media (max-width: ${k}) {
    max-width: 16rem;
    width: 90%;
  }
`,J1="/assets/Python-c66002c1.png",Z1="/assets/JavaScript-e323aa50.png",ex="/assets/Django-c4cb7efd.png",tx="/assets/Postgresql-11433c8a.png",nx="/assets/HTML-b866745b.png",rx="/assets/CSS-4caa5335.png",ox="/assets/NGINX-57734961.png",ix="/assets/React-e05d3e8d.png",lx="/assets/Redis-107a7fc9.png",sx="/assets/Docker-3a53ff2c.png",Vd=({title:e,text:t})=>a.jsx(ax,{children:a.jsx(ux,{children:t})}),ax=v.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${k}){
      text-align: start;
  }
  `;v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 

    @media (min-width: ${k}){
      font-size: 1rem;
    }
`;const ux=v.p`
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
    }

`,Fr=({title:e="Technologies",technologies:t=[]})=>a.jsxs(cx,{children:[a.jsx(dx,{children:e}),a.jsx(fx,{children:t.map((n,r)=>a.jsx(px,{children:n},r))})]}),cx=v.div`
  position: relative;
  font-size: .8rem;
  `,dx=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

    /* @media (min-width: ${k}){
      text-align: center;
    } */
    
`,fx=v.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  gap: .5rem;
  white-space: nowrap;
/* 
  @media (min-width: ${k}){
      justify-content: center;
  }

  @media (max-width: ${k}){
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    overflow-x: auto;
  } */
`,px=v.div`
    display: inline-block;
    align-self: center;
    text-align: center;
    
    font-weight: 400;
    
    border-radius: 99rem;
    padding-inline: .7rem;
    padding-block: .4rem;

    color: var(--primary-color);
    background-color: var(--background-tags-color);

    

/* 
    @media (min-width: ${k}){

      &:nth-child(odd) {
        color: var(--primary-color);
        background-color: var(--background-tags-color);
       }
    &:nth-child(even) {
        color: var(--secondary-text-color);
        background-color: var(--background-tags-color);
      }
  } */

`,Gd=({startingYear:e,endingYear:t,title:n,company:r})=>a.jsxs(mx,{children:[a.jsxs(hx,{children:[a.jsx(Xd,{children:e}),a.jsx(gx,{}),a.jsx(Xd,{children:t})]}),a.jsx(vx,{children:n}),a.jsx(yx,{children:r})]}),mx=v.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${k}){
      text-align: start;
  }
`,hx=v.div`
    display: flex;
    align-items: center;
    gap: .4rem;
    justify-content: center;

    @media (max-width: ${k}){
      justify-content: start;
  }
    `,Xd=v.span`
    color: var(--primary-color);
    font-weight: 600;
`,gx=v.div`
    height: .1rem;
    width: 1rem;
    border-radius: 99rem;
    background-color: var(--primary-color);
`,vx=v.p`
    font-size: 1.2rem;
    font-weight: 700;

`,yx=v.p`
    font-size: .8rem;
    color: var(--primary-color);
    font-weight: 600;
`;v.div`
  position: relative;
  font-size: .8rem;
  `;v.p`
    color: var(--primary-text-color);
    font-weight: 600;
    font-size: .8rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`;v.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;v.div`
    display: inline-block;
    
    font-weight: 400;
    color: var(--primary-color);

    border: 1px solid var(--primary-color);
    border-radius: 99rem;
    padding-inline: .7rem;
    padding-block: .4rem;
/* 
    &:nth-child(odd) {
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
    }
    &:nth-child(even) {
      color: var(--secondary-text-color);
      border: 1px solid var(--secondary-text-color);
    } */

`;const xx=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(wx,{ref:r,id:e,$visible:t,children:[a.jsxs(Sx,{children:[a.jsx(kx,{children:"Skills & Experience"}),a.jsxs(Qd,{children:["With expertise in ",a.jsx(zt,{children:"HTML"}),", ",a.jsx(zt,{children:"CSS"}),", ",a.jsx(zt,{children:"JavaScript"}),",  ",a.jsx(zt,{children:"React"}),",  ",a.jsx(zt,{children:"Python"}),",  ",a.jsx(zt,{children:"Django"}),",  ",a.jsx(zt,{children:"Redis"})," and ",a.jsx(zt,{children:"Docker"}),", I specialize in creating captivating user interfaces that seamlessly integrate with the robust APIs and well-managed databases I craft."]}),a.jsxs(Qd,{children:["Visit my ",a.jsx(jx,{href:"https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",target:"_blank",children:"Linkedin"})," for more details."]})]}),a.jsxs(Ex,{children:[a.jsxs(it,{children:[a.jsx(lt,{src:tx,alt:"Postgresql Logo"}),a.jsx(st,{children:"Postgresql"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:J1,alt:"Python Logo"}),a.jsx(st,{children:"Python"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:ex,alt:"Django Logo"}),a.jsx(st,{children:"Django"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:lx,alt:"Redis Logo"}),a.jsx(st,{children:"Redis"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:nx,alt:"HTML Logo"}),a.jsx(st,{children:"HTML"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:rx,alt:"CSS Logo"}),a.jsx(st,{children:"CSS"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:Z1,alt:"JavaScript Logo"}),a.jsx(st,{children:"JavaScript"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:ix,alt:"ReactJS Logo"}),a.jsx(st,{children:"React"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:ox,alt:"NGINX Logo"}),a.jsx(st,{children:"NGINX"})]}),a.jsxs(it,{children:[a.jsx(lt,{src:sx,alt:"Docker Logo"}),a.jsx(st,{children:"Docker"})]})]}),a.jsxs($x,{children:[a.jsxs(Yd,{children:[a.jsx(Gd,{startingYear:"2019",endingYear:"2023",title:"Software Developer",company:"Anep Communication & Signalétique - Algiers"}),a.jsx(Vd,{title:"Projects & Goals",text:"Two projects were undertaken: one to design and develop a tailored information system for automating and streamlining business processes across departments, and the other to enhance the existing system by adding applications and features. The focus was on improving functionality, seamless integration, and delivering an enhanced user experience, increased productivity, and smoother operations across departments."})]}),a.jsxs(Yd,{children:[a.jsx(Gd,{startingYear:"2022",endingYear:"2023",title:"Full Stack Developer",company:"Lilium Pharma Algérie - Algiers"}),a.jsx(Vd,{title:"Projects & Goals",text:"The focus was centered on designing and developing features and applications to enhance the company's technology and information system. These innovations were aimed at optimizing processes, improving efficiency, and driving growth. By streamlining operations and reducing manual tasks, the company was able to accelerate decision-making. Additionally, the introduction of new features further enhanced the user experience, ultimately strengthening the company's competitive edge."})]})]})]})},wx=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;


  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${k}){
      gap: 3rem;
      padding-bottom: 1rem;
  }

`,Sx=v.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${k}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,kx=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,Qd=v.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${k}){
      font-size: .8rem;

  }
`,zt=v.span`
    color: var(--primary-color);
`,jx=v.a`
    color: var(--primary-color);
`,$x=v.div`
  display: flex;
  gap: 1.1rem;
  height: fit-content;
  width: 80vw;
  align-self: center;

  @media (max-width: ${k}){
      max-width: 100%;
      width: 100%;
      flex-direction: column;
      padding-bottom: 3rem;
  }
  
`,Cx=v.article`
  height: 100%;

  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;
`,Yd=v(Cx)`

  display: flex;
  flex-direction: column;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

`,Ex=v.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  width: fit-content;
  justify-content: center;
  align-self: center;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media (max-width: ${k}) {
    gap: 1.5rem;
    width: 90vw;
    margin-block: 1rem;

  }
`,it=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: .6;
  gap:.3rem;
`,lt=v.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  align-self: center;
  filter: invert(var(--png-filter));

  -webkit-transition: .5s -webkit-filter linear;
  -moz-transition: .5s -moz-filter linear;
  -moz-transition: .5s filter linear;
  -ms-transition: .5s -ms-filter linear;
  -o-transition: .5s -o-filter linear;
  transition: .5s filter linear, .5s -webkit-filter linear;
`,st=v.label`
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: ${k}) {
        font-size: .7rem;
  }
`,uh="/assets/RestaurantApp-f940ef41.png",ch="/assets/SmartHomeApp-988004dc.png",dh="/assets/SoundBOXApp-a94d5b27.png",fh="/assets/ChatBOXApp-1de61a32.png",ph="/assets/BillboardLocatorApp-e664fcd9.png",mh="/assets/LeavesManagerApp-e266c7af.png",Px=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(s=>s.scrollReducer).current,i=Gl(),l=s=>i(ah(s));return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(bx,{ref:r,id:e,$visible:t,children:[a.jsxs(Kd,{children:[a.jsx(qd,{children:"Personal Projects"}),a.jsx(Jd,{children:"Let me show you an overview of some of my personal projects before getting into details, tap on any to see details or scroll down to browse."})]}),a.jsxs(Zd,{children:[a.jsxs(Ln,{onClick:()=>l("Projects/Restaurant"),children:[a.jsx(Dn,{src:uh,alt:"Restaurant App Icon"}),a.jsx(In,{children:"Restaurant App"}),a.jsx(Mn,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management."}),a.jsx(Fn,{children:"Go to Details"})]}),a.jsxs(Ln,{onClick:()=>l("Projects/SoundBOX"),children:[a.jsx(Dn,{src:dh,alt:"SoundBOX App Icon"}),a.jsx(In,{children:"SoundBOX"}),a.jsx(Mn,{children:"A web app that lets users stream YouTube audio without video playback, with a user-friendly interface. It offers playback controls and a Favorite list for managing preferred tracks."}),a.jsx(Fn,{children:"Go to Details"})]}),a.jsxs(Ln,{onClick:()=>l("Projects/ChatBOX"),children:[a.jsx(Dn,{src:fh,alt:"ChatBOX App Icon"}),a.jsx(In,{children:"ChatBOX"}),a.jsx(Mn,{children:"An app that provides a minimalist and focused chatting experience, prioritizing real-time, text-based interactions within a respectful and user-friendly environment."}),a.jsx(Fn,{children:"Go to Details"})]}),a.jsxs(Ln,{onClick:()=>l("Projects/SmartHome"),children:[a.jsx(Dn,{src:ch,alt:"SmartHome App Icon"}),a.jsx(In,{children:"SmartHome"}),a.jsx(Mn,{children:"Sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights."}),a.jsx(Fn,{children:"Go to Details"})]})]}),a.jsxs(Kd,{children:[a.jsx(qd,{children:"Company Projects"}),a.jsx(Jd,{children:"Let me show you an overview of some in company projects I made before getting into details, tap on any to see details or scroll down to browse."})]}),a.jsxs(Zd,{children:[a.jsxs(Ln,{onClick:()=>l("Projects/BillboardLocator"),children:[a.jsx(Dn,{src:ph,alt:"Billboard Locator App Icon"}),a.jsx(In,{children:"Billboard Locator"}),a.jsx(Mn,{children:"This Android app serves as a comprehensive tool to streamline the process of locating billboards, updating their information, and managing their visual content for the company Anep I previously worked for."}),a.jsx(Fn,{children:"Go to Details"})]}),a.jsxs(Ln,{onClick:()=>l("Projects/LeavesManager"),children:[a.jsx(Dn,{src:mh,alt:"Leaves & Absences Manager App Icon"}),a.jsx(In,{children:"Leaves & Absences Manager"}),a.jsx(Mn,{children:"This app optimizes Lilium Pharma Algérie's leave management. Request leaves, validate presence, and justify absences seamlessly. Effortless mobile and web access, plus integration with calendars and HR systems."}),a.jsx(Fn,{children:"Go to Details"})]})]})]})},bx=v.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${k}){
      gap: 3rem;

  }

`,Kd=v.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${k}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,qd=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,Jd=v.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${k}){
      font-size: .8rem;

  }
`,Zd=v.div`
  display: flex;
  gap: .8rem;
  align-self: center;
 
  border-radius: 1rem;

  width: 90vw;
  max-width: 80rem;

  @media (max-width: ${k}){
      flex-direction: column;
      width: 100%;

  }

  @media (min-width: ${k}) and (max-width: ${C1}){
      display: grid;
      grid-template-columns:1fr 1fr;
  }

`,Ln=v.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: ${k}){   
    /* align-items: start; */
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);


  }

`,In=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1rem;

`,Mn=v.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: .8rem;
    line-height: 1.8;
    text-align: center;
    margin-block: .3rem;
    
    @media (max-width: ${k}){
      font-size: .8rem;
      max-width: 95%;
    }
`,Dn=v.img`
  max-width: 3.6rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,Fn=v.button`
margin-top: auto;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  padding-block: .8rem;
  padding-inline: 2rem;
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: ${k}){

    /* width: 100%;
    max-width: 90%; */
    display: none;

}
`,_x="/assets/Restaurant-S1-ce332388.png",Tx="/assets/Restaurant-S2-132eafe1.png",zx="/assets/Restaurant-S3-95ab878c.png",Ox="/assets/Restaurant-S4-b62a7391.png",Rx=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(Nx,{ref:r,id:e,$visible:t,children:[a.jsxs(Wx,{children:[a.jsxs(Vx,{children:[a.jsx(Xx,{src:uh,alt:"Restaurant App Icon"}),a.jsx(Gx,{children:"Restaurant App"})]}),a.jsx(Qx,{href:"http://129.146.60.95:4001/",target:"_blank",children:"Preview"})]}),a.jsxs(Ix,{children:[a.jsxs(Mx,{children:[a.jsxs(Dx,{children:[a.jsx(Fx,{children:"Description"}),a.jsx(Bx,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management. Simplify the restaurant operations, engage customers, and optimize inventory."})]}),a.jsxs(Ux,{children:[a.jsx(Hx,{children:"Features"}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Recipe Management"}),a.jsx(Nt,{children:"Streamline recipe creation, storage, and organization for consistent quality."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Order Management"}),a.jsx(Nt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Ticketing"}),a.jsx(Nt,{children:"User-friendly ticketing feature that enables clients to obtain physical tickets for their dining experience."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Mixtures"}),a.jsx(Nt,{children:"Empower users to create new ingredients by combining multiple existing ingredients, allowing for innovative and customizable recipes."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Menu Customization"}),a.jsx(Nt,{children:"Easily create and modify menus based on customer preferences, seasonality, and occasions."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Order Management"}),a.jsx(Nt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Discounts based on Points"}),a.jsx(Nt,{children:"Loyalty program that allows customers to earn and redeem points for discounts."})]}),a.jsxs(Ot,{children:[a.jsx(Rt,{children:"Stock Management"}),a.jsx(Nt,{children:"Efficiently track inventory levels, monitor ingredient usage, and receive low stock notifications."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["mySQL","HTML","CSS","Tabler","JavaScript","jQuery","AJAX","Django","Docker"]})]}),a.jsx(Lx,{children:a.jsxs(Ax,{children:[a.jsx(ui,{src:_x,alt:"Restaurant App Screenshot 1"}),a.jsx(ui,{src:Tx,alt:"Restaurant App Screenshot 2"}),a.jsx(ui,{src:zx,alt:"Restaurant App Screenshot 3"}),a.jsx(ui,{src:Ox,alt:"Restaurant App Screenshot 4"})]})})]})]})},Nx=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,ui=v.img`
  width: 100%;
  object-fit: contain;
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;


  @media (max-width: ${k}){

    width: 100%;

  }
`,Ax=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 60vh;
    overflow-y: scroll;
    flex: 1;
    gap: 1rem;


  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;
    
`,Lx=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;

  &:before {
    content: "Screenshots - Scroll Vertically to browse";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,Ix=v.div`
  display: flex;
  gap: 1rem;
  flex: 1;

  @media (max-width: ${k}){
    display: block;
  }
`,Mx=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1.5;
`,Dx=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,Fx=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

  
`,Bx=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }
`,Ux=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Hx=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Ot=v.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Rt=v.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Nt=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Wx=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Vx=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,Gx=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Xx=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,Qx=v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Yx="/assets/SmartHome-S1-c276a7c5.png",Kx=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(qx,{ref:r,id:e,$visible:t,children:[a.jsxs(aw,{children:[a.jsxs(uw,{children:[a.jsx(dw,{src:ch,alt:"SmartHome App Icon"}),a.jsx(cw,{children:"SmartHome"})]}),a.jsx(fw,{href:"http://129.146.60.95:3006/40rgghbzr0",target:"_blank",children:"Preview"})]}),a.jsxs(tw,{children:[a.jsxs(nw,{children:[a.jsxs(rw,{children:[a.jsx(ow,{children:"Description"}),a.jsx(iw,{children:'Introducing "SmartHome," the sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights. SmartHome transforms your smartphone into a powerful remote control for your home, providing convenience and peace of mind at your fingertips.'})]}),a.jsxs(lw,{children:[a.jsx(sw,{children:"Features"}),a.jsxs(Bn,{children:[a.jsx(Un,{children:"Door Control"}),a.jsx(Hn,{children:"Gain full control over your home's entry points. With a tap on your phone, unlock and lock your doors remotely."})]}),a.jsxs(Bn,{children:[a.jsx(Ns,{children:"Upcoming Feature"}),a.jsx(Un,{children:"Schedule and Timers"}),a.jsx(Hn,{children:"Set up schedules and timers to automate your door and lighting functions. Configure your app to automatically lock doors at a specific time each day or turn on lights just before you arrive home in the evening."})]}),a.jsxs(Bn,{children:[a.jsx(Un,{children:"Lighting Management"}),a.jsx(Hn,{children:"Enjoy the convenience of controlling your home's lighting system with  ease. Effortlessly turn lights on or off."})]}),a.jsxs(Bn,{children:[a.jsx(Ns,{children:"Upcoming Feature"}),a.jsx(Un,{children:"Customization and Personalization"}),a.jsx(Hn,{children:"SmartHome lets you customize and personalize your control preferences. Assign unique names and icons to your equipments for easy identification."})]}),a.jsxs(Bn,{children:[a.jsx(Un,{children:"User-Friendly Interface"}),a.jsx(Hn,{children:"SmartHome combines sleek design with intuitive controls, ensuring a seamless and enjoyable user experience for simplified home management."})]}),a.jsxs(Bn,{children:[a.jsx(Ns,{children:"Upcoming Feature"}),a.jsx(Un,{children:"User Management"}),a.jsx(Hn,{children:"Manage access permissions for different users within your household. Create individual profiles for family members or trusted individuals, allowing them to control doors and lights through their own smartphones."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["JSON","HTML","CSS","JavaScript","React","Python","FastAPI","MicroPython","ESP32"]})]}),a.jsx(ew,{children:a.jsx(Zx,{children:a.jsx(Jx,{src:Yx})})})]})]})},qx=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,Jx=v.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){
    width: 100%;
  }
`,Zx=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* max-height: 60vh; */
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,ew=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:before {
    content: "Screenshot";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,tw=v.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${k}){
    display: block;
  }
`,nw=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,rw=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,ow=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

`,iw=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }

`,lw=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,sw=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Bn=v.div`
  position: relative;

  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Un=v.p`
    max-width: 60%;
    font-size: .9rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: .2rem;
`,Ns=v.span`
    position: absolute;
    right: 1rem;
    display: inline-block;
    margin-bottom: .5rem;
    border: 1px solid orange;
    color: orange;
    font-weight: 600;
    font-size: .5rem;
    border-radius: 99rem;
    padding-block: .3rem;
    padding-inline: .6rem;
  
`,Hn=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,aw=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,uw=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,cw=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,dw=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,fw=v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,pw="/assets/SoundBOX-S1-d0ca63da.png",mw="/assets/SoundBOX-S2-f124f3db.png",hw="/assets/SoundBOX-S3-3afadd42.png",gw=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(vw,{ref:r,id:e,$visible:t,children:[a.jsxs(Pw,{children:[a.jsxs(bw,{children:[a.jsx(Tw,{src:dh,alt:"SoundBOX App Icon"}),a.jsx(_w,{children:"SoundBOX"})]}),a.jsx(zw,{href:"http://129.146.60.95:4420/",target:"_blank",children:"Preview"})]}),a.jsxs(ww,{children:[a.jsxs(Sw,{children:[a.jsxs(kw,{children:[a.jsx(jw,{children:"Description"}),a.jsx($w,{children:"SoundBOX is a web app that lets you stream audio from YouTube without video playback. It has a user-friendly interface with a search bar for easy content discovery. The app plays only the audio stream, conserving bandwidth. It offers playback controls and a Favorite list where users can gather and manage their preferred tracks. SoundBOX is a Progressive Web App (PWA) making it highly portable and easy to install on any compatible device. Users can simply add the app to their device's home screen or app drawer, allowing them to access SoundBOX with a single tap, just like a native application."})]}),a.jsxs(Cw,{children:[a.jsx(Ew,{children:"Features"}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"Audio Streaming"}),a.jsx(Gn,{children:"Allows users to stream audio from YouTube without video playback."})]}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"User-Friendly Interface"}),a.jsx(Gn,{children:"The app features a user-friendly interface with a search bar for easy content discovery."})]}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"Bandwidth Optimization"}),a.jsx(Gn,{children:"SoundBOX plays only the audio stream, conserving bandwidth and optimizing the listening experience."})]}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"Background Play"}),a.jsx(Gn,{children:"The app supports background play on mobile devices, allowing users to continue listening while using other apps or when their device's screen is locked."})]}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"Cross-Devices"}),a.jsx(Gn,{children:"SoundBOX is a Progressive Web Application (PWA) that can be easily installed on various devices and it has been designed to be responsive, adapting seamlessly to different screen sizes and orientations."})]}),a.jsxs(Wn,{children:[a.jsx(Vn,{children:"High-Quality Streaming"}),a.jsx(Gn,{children:"SoundBOX streams audio content from YouTube at the highest available quality."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["HTML","CSS","TailwindCSS","JavaScript","React","Python","FastAPI"]})]}),a.jsx(xw,{children:a.jsxs(yw,{children:[a.jsx(As,{src:pw}),a.jsx(As,{src:mw}),a.jsx(As,{src:hw})]})})]})]})},vw=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,As=v.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){
    width: 100%;
  }
`,yw=v.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,xw=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:before {
    content: "Screenshot";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,ww=v.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${k}){
    display: block;
  }
`,Sw=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,kw=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,jw=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,$w=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }

`,Cw=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Ew=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Wn=v.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Vn=v.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Gn=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Pw=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,bw=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,_w=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Tw=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,zw=v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Ow="/assets/ChatBOX-S1-c05ad71e.png",Rw="/assets/ChatBOX-S2-cd16cac4.png",Nw=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(Aw,{ref:r,id:e,$visible:t,children:[a.jsxs(Vw,{children:[a.jsxs(Gw,{children:[a.jsx(Qw,{src:fh,alt:"ChatBOX App Icon"}),a.jsx(Xw,{children:"ChatBOX"})]}),a.jsx(Yw,{href:"http://129.146.60.95:5173/",target:"_blank",children:"Preview"})]}),a.jsxs(Mw,{children:[a.jsxs(Dw,{children:[a.jsxs(Fw,{children:[a.jsx(Bw,{children:"Description"}),a.jsx(Uw,{children:"ChatBOX is a web app that lets you stream audio from YouTube without video playback. It has a user-friendly interface with a search bar for easy content discovery. The app plays only the audio stream, conserving bandwidth. It offers playback controls and a Favorite list where users can gather and manage their preferred tracks. ChatBOX is a Progressive Web App (PWA) making it highly portable and easy to install on any compatible device. Users can simply add the app to their device's home screen or app drawer, allowing them to access ChatBOX with a single tap, just like a native application."})]}),a.jsxs(Hw,{children:[a.jsx(Ww,{children:"Features"}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"Public Room with Custom Username"}),a.jsx(Yn,{children:"Users can enter the public chat room with a custom username of their choice. This allows them to participate in the conversations while maintaining their desired identity."})]}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"Active User Indicator"}),a.jsx(Yn,{children:" The app displays the number of active users and also lists those when some one joins or leave. This helps identify who is currently online and actively participating in the conversation."})]}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"Welcome and Be Respectful Message"}),a.jsx(Yn,{children:'When a new member joins a chat room, a warm "Welcome to ChatBOX!" message is automatically displayed, along with a reminder to be respectful towards others in the conversation. This encourages a friendly and respectful atmosphere within the community.'})]}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"No Sign-Up Required"}),a.jsx(Yn,{children:"ChatBOX doesn't require users to sign up or create accounts. Users can join public rooms immediately after opening the app, making it quick and easy to get started."})]}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"Text-Only Communication"}),a.jsx(Yn,{children:"The app focuses solely on text-based communication. Users can send and receive messages, fostering a distraction-free and straightforward chatting experience."})]}),a.jsxs(Xn,{children:[a.jsx(Qn,{children:"Message Deletion"}),a.jsx(Yn,{children:"Messages sent in the chat rooms are not saved in the app's database or server. This ensures that conversations are ephemeral and do not leave a lasting digital footprint, promoting privacy and data security."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["React","Styled Components","NodeJS","Express.js","Socket.IO","WebSocket"]})]}),a.jsx(Iw,{children:a.jsxs(Lw,{children:[a.jsx(ef,{src:Ow}),a.jsx(ef,{src:Rw})]})})]})]})},Aw=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,ef=v.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){
    width: 100%;
  }
`,Lw=v.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,Iw=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:before {
    content: "Screenshot";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,Mw=v.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${k}){
    display: block;
  }
`,Dw=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,Fw=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,Bw=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,Uw=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }

`,Hw=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Ww=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Xn=v.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Qn=v.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Yn=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Vw=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Gw=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,Xw=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Qw=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,Yw=v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Kw="/assets/stackoverflow-ec34f2f1.png",qw="/assets/twitter-16936b2e.png",Jw="/assets/linkedin-b2cdfb91.png",Zw="/assets/github-d83ddf4e.png",tf="boukabousalinazim@gmail.com",eS="https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",tS="https://github.com/Ali-Nazim",nS="https://twitter.com/AliNazimB",rS="https://stackoverflow.com/users/7823800/nazim-a",oS=({name:e})=>{const[t,n]=z.useState(!1),[r,o]=z.useState(!1),i=mt(e),l=Ge(u=>u.scrollReducer).current;Gl();const s=z.useCallback(()=>{navigator.clipboard.writeText(tf).then(function(){o(!0),setTimeout(()=>o(!1),1500)},function(u){})},[]);return z.useEffect(()=>{n(l===e),e!==l&&setTimeout(()=>i.current.scrollTo({top:0,behavior:"smooth"}),300)},[l]),a.jsxs(iS,{ref:i,id:e,$visible:t,children:[a.jsxs(lS,{children:[a.jsx(sS,{children:"Contact"}),a.jsx(aS,{children:"I have a strong passion for continuous learning and sharing my knowledge. I can't wait to connect with you, so please don't hesitate to reach out."}),a.jsxs(uS,{children:["Click to copy",a.jsx(cS,{onClick:s,$copied:r,children:"boukabousalinazim@gmail.com"})]}),a.jsx(dS,{href:`mailto:${tf}`,children:"Contact Me"})]}),a.jsxs(fS,{children:[a.jsx(ci,{onClick:()=>open(tS,"_blank"),src:Zw,alt:"Github Logo"}),a.jsx(ci,{onClick:()=>open(nS,"_blank"),src:qw,alt:"Twitter Logo"}),a.jsx(ci,{onClick:()=>open(eS,"_blank"),src:Jw,alt:"Linkedin Logo"}),a.jsx(ci,{onClick:()=>open(rS,"_blank"),src:Kw,alt:"Stackoverflow Logo"})]}),a.jsxs(pS,{children:["Thank You for visiting, Until next time!",a.jsx("br",{})]})]})},iS=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${k}){
      gap: 3rem;
     justify-content: center;

  }
`,lS=v.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;

  @media (min-width: ${k}){
    align-items: center;
  }
  @media (max-width: ${k}){
      max-width: 90vw;
      width: 100%;
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
`,sS=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;
`,aS=v.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${k}){
      font-size: .8rem;
  }
`,uS=v.div`
    display: flex;
    font-size: .9rem;

    color: var(--secondary-text-color);
    align-items: center;

`,cS=v.p`
    position: relative;
    color: var(--primary-color);
    font-weight: 500;
    font-size: .9rem;
    cursor: pointer;   
    padding: .4rem;
    
    &:after {
      position: absolute;
      content: "Copied!";
      color: #03a303;
      margin-left: .5rem;
      opacity: ${e=>e.$copied?"1":"0"};
      transition: opacity .3s ease;
    }
`,dS=v.a`
  margin-top: 1rem;;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  font-size: .9rem;
  text-decoration: none;
  padding-block: .8rem;
  padding-inline: 2rem;
  border-radius: .5rem;
  width: fit-content;
  cursor: pointer;
  text-align: center;

  @media (max-width: ${k}){
      width: 100%;
      align-self: center;
  }

`,fS=v.div`
  display: flex;
  align-items: center;
  opacity: .6;
  gap: 2rem;
  align-self: center;
`,ci=v.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  align-self: center;
  filter: invert(var(--png-filter));
  cursor: pointer;

  -webkit-transition: .5s -webkit-filter linear;
  -moz-transition: .5s -moz-filter linear;
  -moz-transition: .5s filter linear;
  -ms-transition: .5s -ms-filter linear;
  -o-transition: .5s -o-filter linear;
  transition: .5s filter linear, .5s -webkit-filter linear;
`,pS=v.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    opacity: .6;
    
    @media (min-width: ${k}){
      text-align: center;
  }
    @media (max-width: ${k}){
      font-size: .8rem;
  }
`,mS="/assets/1-ba552b26.png",hS="/assets/2-3de6c12f.png",gS="/assets/3-79da1d47.png",vS="/assets/4-25070c22.png",yS="/assets/5-6f5a76ec.png",xS="/assets/6-841444b5.png",wS="/assets/7-b5505322.png",SS="/assets/8-0401412b.png",kS="/assets/9-bb5bc0d9.png",jS="/assets/10-3be700f0.png",$S="/assets/11-444bb176.png",CS="/assets/12-b19e3b2a.png",ES="/assets/13-8adc6629.png",PS="/assets/14-eec7033f.png",bS=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(_S,{ref:r,id:e,$visible:t,children:[a.jsxs(DS,{children:[a.jsxs(FS,{children:[a.jsx(US,{src:ph,alt:"Billboard Locator App Icon"}),a.jsx(BS,{children:"Billboard Locator"})]}),a.jsx(HS,{href:"/assets/BillboardLocator_UserGuide.pdf",target:"_blank",children:"User Guide"})]}),a.jsxs(OS,{children:[a.jsxs(RS,{children:[a.jsxs(NS,{children:[a.jsx(AS,{children:"Description"}),a.jsx(LS,{children:"Billboard Locator developed for Anep Communication et Signalétique revolutionizes billboard campaign management by seamlessly integrating with external systems to centralize and optimize the oversight of a vast network of 640 billboards. With real-time geolocation, intuitive interface, and advanced photo updating, the app ensures precise billboard representation. Offering customizable permissions, offline access, and top-tier security, it prioritizes user experience."})]}),a.jsxs(IS,{children:[a.jsx(MS,{children:"Features"}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"Campaign Integration"}),a.jsx(Jn,{children:"Seamlessly import selected billboards and campaign details from the external management app."})]}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"Billboard Information"}),a.jsx(Jn,{children:"Maintain a comprehensive database of billboard details, including location, dimensions, type, and historical data."})]}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"Geolocation"}),a.jsx(Jn,{children:"Use GPS technology to locate and map all imported billboards on a digital map."})]}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"Photo Updates"}),a.jsx(Jn,{children:"Upload and update billboard photos to reflect the latest advertisements, with the ability to match campaign visuals."})]}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"Offline Mode"}),a.jsx(Jn,{children:"Allow users to access and update billboard information for the imported billboards even when offline, with changes syncing once a connection is re-established."})]}),a.jsxs(Kn,{children:[a.jsx(qn,{children:"User-Friendly Interface"}),a.jsx(Jn,{children:"Intuitive and easy-to-navigate interface with tooltips and guides for a positive user experience, helping users get the most out of the app."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["Sketch","Java","Android Studio","Apache","PHP","mySQL"]})]}),a.jsx(zS,{children:a.jsxs(TS,{children:[a.jsx(je,{src:PS}),a.jsx(je,{src:ES}),a.jsx(je,{src:gS}),a.jsx(je,{src:CS}),a.jsx(je,{src:$S}),a.jsx(je,{src:jS}),a.jsx(je,{src:kS}),a.jsx(je,{src:SS}),a.jsx(je,{src:wS}),a.jsx(je,{src:xS}),a.jsx(je,{src:yS}),a.jsx(je,{src:vS}),a.jsx(je,{src:hS}),a.jsx(je,{src:mS})]})})]})]})},_S=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,je=v.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){
    width: 100%;
  }
`,TS=v.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,zS=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:before {
    content: "Screenshot";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,OS=v.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${k}){
    display: block;
  }
`,RS=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,NS=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,AS=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,LS=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }

`,IS=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,MS=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Kn=v.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,qn=v.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Jn=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,DS=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,FS=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,BS=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,US=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`,HS=v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,WS="/assets/1-8ca6e16c.png",VS="/assets/2-9799fe2a.png",GS="/assets/3-3e3d7467.png",XS="/assets/4-87f71846.png",QS="/assets/5-18b91f00.png",YS="/assets/6-96083b84.png",KS=({name:e})=>{const[t,n]=z.useState(!1),r=mt(e),o=Ge(i=>i.scrollReducer).current;return z.useEffect(()=>{n(o===e),e!==o&&setTimeout(()=>r.current.scrollTo({top:0,behavior:"smooth"}),300)},[o]),a.jsxs(qS,{ref:r,id:e,$visible:t,children:[a.jsx(sk,{children:a.jsxs(ak,{children:[a.jsx(ck,{src:mh,alt:"Leaves & Absences Manager App Icon"}),a.jsx(uk,{children:"Leaves & Absences Manager"})]})}),a.jsxs(ek,{children:[a.jsxs(tk,{children:[a.jsxs(nk,{children:[a.jsx(rk,{children:"Description"}),a.jsx(ok,{children:"This app empowers Lilium Pharma Algérie employees to effortlessly request leaves, attaching necessary files for verification. Daily user reports ensure work presence, with automated checks prompting absent users to provide justifications. The app offers a clear dashboard, notifications, and manager approvals for leave requests. It supports various leave types, robust reporting, secure document management, and role-based access. With a user-friendly interface, mobile and web access, and integration with calendars and HR systems, the app optimizes leave management while promoting accountability and streamlined communication."})]}),a.jsxs(ik,{children:[a.jsx(lk,{children:"Features"}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Leave Requests"}),a.jsx(It,{children:"Lilium employees can easily submit leave requests through the app, including details like leave type, duration, reason, and location. They can also attach supporting files for verification."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"User Reports"}),a.jsx(It,{children:"Every day, employees are required to create reports to confirm their work presence. Automated daily checks ensure compliance, and those failing to submit reports receive absence notifications."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Absence Justification"}),a.jsx(It,{children:"Users who receive absence notifications can provide justifications by attaching relevant documents and adding comments."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Dashboard and Notifications"}),a.jsx(It,{children:"The app features a comprehensive dashboard displaying leave balances, request statuses, and absence alerts. Email notifications keep users informed about request updates."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Manager Approvals"}),a.jsx(It,{children:"Managers have the authority to review leave requests, assess attached proofs, and make informed decisions to approve or deny requests."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Integration with HR Systems"}),a.jsx(It,{children:"Seamless integration with Lilium's existing HR systems ensures data flow and consistency across platforms."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Excel Export"}),a.jsx(It,{children:"Export data to Excel for further analysis."})]}),a.jsxs(At,{children:[a.jsx(Lt,{children:"Compatible and Intuitive UI/UX"}),a.jsx(It,{children:"User-friendly interface adaptable for web and mobile devices for easy interaction."})]})]}),a.jsx(Fr,{title:"Technologies Used",technologies:["Figma","JavaScript","React","TailwindCSS","NGINX","Django","Django REST","PostgreSQL","Docker"]})]}),a.jsx(ZS,{children:a.jsxs(JS,{children:[a.jsx(Zn,{src:WS}),a.jsx(Zn,{src:VS}),a.jsx(Zn,{src:GS}),a.jsx(Zn,{src:XS}),a.jsx(Zn,{src:QS}),a.jsx(Zn,{src:YS})]})})]})]})},qS=v.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (max-width: ${k}){
    padding-top: 5rem;

  }

  @media (min-width: ${k}){
      gap: 2rem;
  }

`,Zn=v.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){
    width: 100%;
  }
`,JS=v.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,ZS=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &:before {
    content: "Screenshot";
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    align-self: start;
  }

  @media (max-width: ${k}){
    margin-top: 1rem;
  }

`,ek=v.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${k}){
    display: block;
  }
`,tk=v.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,nk=v.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${k}){
      text-align: start;
  }
  `,rk=v.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,ok=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${k}){
      font-size: .9rem;
  }

`,ik=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${k}){
    grid-template-columns: repeat(1, 1fr);

  }
`,lk=v.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,At=v.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Lt=v.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,It=v.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,sk=v.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,ak=v.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${k}){
    flex-direction: row;
    align-items: center;
  }
`,uk=v.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,ck=v.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${k}){

    max-width: 4rem;

  }
`;v.a`
  font-size: .9rem;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  text-decoration: none;
  padding-block: .5rem;
  padding-inline: 1rem;
  border-radius: .5rem;
  cursor: pointer;
  align-self: start;

  @media (max-width: ${k}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`;function dk(){return a.jsxs(fk,{id:"vertical-stack",children:[a.jsx(N1,{}),a.jsx(B1,{name:"Home"}),a.jsx(xx,{name:"Experiences"}),a.jsx(Px,{name:"Projects"}),a.jsx(Rx,{name:"Projects/Restaurant"}),a.jsx(gw,{name:"Projects/SoundBOX"}),a.jsx(Nw,{name:"Projects/ChatBOX"}),a.jsx(Kx,{name:"Projects/SmartHome"}),a.jsx(bS,{name:"Projects/BillboardLocator"}),a.jsx(KS,{name:"Projects/LeavesManager"}),a.jsx(oS,{name:"Contact"})]})}const fk=v.div`

  /* Dimensions */
  height: 100vh;
  width: 100vw;
  
  /* Display */
  scroll-snap-type: y mandatory;

  /* Overflow */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;const pk=d1({reducer:{scrollReducer:$1}});Ls.createRoot(document.getElementById("root")).render(a.jsx(Cn.StrictMode,{children:a.jsx(T0,{store:pk,children:a.jsx(Uy,{children:a.jsx(dk,{})})})}));
