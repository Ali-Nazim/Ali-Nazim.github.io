(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Km(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},Ui={},Uf={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=Symbol.for("react.element"),Zm=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),Jm=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),nh=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ih=Symbol.for("react.memo"),lh=Symbol.for("react.lazy"),Vu=Symbol.iterator;function sh(e){return e===null||typeof e!="object"?null:(e=Vu&&e[Vu]||e["@@iterator"],typeof e=="function"?e:null)}var Hf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vf=Object.assign,Wf={};function wr(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Hf}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=wr.prototype;function Ta(e,t,n){this.props=e,this.context=t,this.refs=Wf,this.updater=n||Hf}var za=Ta.prototype=new Qf;za.constructor=Ta;Vf(za,wr.prototype);za.isPureReactComponent=!0;var Wu=Array.isArray,Gf=Object.prototype.hasOwnProperty,Oa={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Yf(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Gf.call(t,r)&&!Xf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:wo,type:e,key:i,ref:l,props:o,_owner:Oa.current}}function ah(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ra(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function uh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qu=/\/+/g;function Rl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uh(""+e.key):t.toString(36)}function Xo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case wo:case Zm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Rl(l,0):r,Wu(o)?(n="",e!=null&&(n=e.replace(Qu,"$&/")+"/"),Xo(o,t,n,"",function(u){return u})):o!=null&&(Ra(o)&&(o=ah(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Qu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Wu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Rl(i,s);l+=Xo(i,t,n,a,o)}else if(a=sh(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Rl(i,s++),l+=Xo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Po(e,t,n){if(e==null)return e;var r=[],o=0;return Xo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},Yo={transition:null},fh={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Oa};L.Children={map:Po,forEach:function(e,t,n){Po(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Po(e,function(){t++}),t},toArray:function(e){return Po(e,function(t){return t})||[]},only:function(e){if(!Ra(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=wr;L.Fragment=qm;L.Profiler=eh;L.PureComponent=Ta;L.StrictMode=Jm;L.Suspense=oh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Gf.call(t,a)&&!Xf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:wo,type:e.type,key:o,ref:i,props:r,_owner:l}};L.createContext=function(e){return e={$$typeof:nh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:th,_context:e},e.Consumer=e};L.createElement=Yf;L.createFactory=function(e){var t=Yf.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:rh,render:e}};L.isValidElement=Ra;L.lazy=function(e){return{$$typeof:lh,_payload:{_status:-1,_result:e},_init:ch}};L.memo=function(e,t){return{$$typeof:ih,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return Se.current.useCallback(e,t)};L.useContext=function(e){return Se.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};L.useEffect=function(e,t){return Se.current.useEffect(e,t)};L.useId=function(){return Se.current.useId()};L.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return Se.current.useMemo(e,t)};L.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};L.useRef=function(e){return Se.current.useRef(e)};L.useState=function(e){return Se.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return Se.current.useTransition()};L.version="18.2.0";Uf.exports=L;var O=Uf.exports;const xn=Km(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh=O,ph=Symbol.for("react.element"),mh=Symbol.for("react.fragment"),hh=Object.prototype.hasOwnProperty,gh=dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vh={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)hh.call(t,r)&&!vh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ph,type:e,key:i,ref:l,props:o,_owner:gh.current}}Ui.Fragment=mh;Ui.jsx=Kf;Ui.jsxs=Kf;Bf.exports=Ui;var c=Bf.exports,js={},Zf={exports:{}},Ae={},qf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,R){var I=P.length;P.push(R);e:for(;0<I;){var H=I-1>>>1,V=P[H];if(0<o(V,R))P[H]=R,P[I]=V,I=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var R=P[0],I=P.pop();if(I!==R){P[0]=I;e:for(var H=0,V=P.length,sn=V>>>1;H<sn;){var Qe=2*(H+1)-1,$t=P[Qe],Te=Qe+1,dt=P[Te];if(0>o($t,I))Te<V&&0>o(dt,$t)?(P[H]=dt,P[Te]=I,H=Te):(P[H]=$t,P[Qe]=I,H=Qe);else if(Te<V&&0>o(dt,I))P[H]=dt,P[Te]=I,H=Te;else break e}}return R}function o(P,R){var I=P.sortIndex-R.sortIndex;return I!==0?I:P.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,g=null,m=3,v=!1,y=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(P){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=P)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function x(P){if(w=!1,h(P),!y)if(n(a)!==null)y=!0,jr(E);else{var R=n(u);R!==null&&Cr(x,R.startTime-P)}}function E(P,R){y=!1,w&&(w=!1,d(z),z=-1),v=!0;var I=m;try{for(h(R),g=n(a);g!==null&&(!(g.expirationTime>R)||P&&!oe());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var V=H(g.expirationTime<=R);R=e.unstable_now(),typeof V=="function"?g.callback=V:g===n(a)&&r(a),h(R)}else r(a);g=n(a)}if(g!==null)var sn=!0;else{var Qe=n(u);Qe!==null&&Cr(x,Qe.startTime-R),sn=!1}return sn}finally{g=null,m=I,v=!1}}var C=!1,k=null,z=-1,D=5,N=-1;function oe(){return!(e.unstable_now()-N<D)}function on(){if(k!==null){var P=e.unstable_now();N=P;var R=!0;try{R=k(!0,P)}finally{R?ln():(C=!1,k=null)}}else C=!1}var ln;if(typeof f=="function")ln=function(){f(on)};else if(typeof MessageChannel<"u"){var Co=new MessageChannel,zl=Co.port2;Co.port1.onmessage=on,ln=function(){zl.postMessage(null)}}else ln=function(){$(on,0)};function jr(P){k=P,C||(C=!0,ln())}function Cr(P,R){z=$(function(){P(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,jr(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var I=m;m=R;try{return P()}finally{m=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,R){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=m;m=P;try{return R()}finally{m=I}},e.unstable_scheduleCallback=function(P,R,I){var H=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?H+I:H):I=H,P){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=I+V,P={id:p++,callback:R,priorityLevel:P,startTime:I,expirationTime:V,sortIndex:-1},I>H?(P.sortIndex=I,t(u,P),n(a)===null&&P===n(u)&&(w?(d(z),z=-1):w=!0,Cr(x,I-H))):(P.sortIndex=V,t(a,P),y||v||(y=!0,jr(E))),P},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(P){var R=m;return function(){var I=m;m=R;try{return P.apply(this,arguments)}finally{m=I}}}})(Jf);qf.exports=Jf;var yh=qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed=O,Ne=yh;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var td=new Set,Zr={};function Pn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Zr[e]=t,e=0;e<t.length;e++)td.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cs=Object.prototype.hasOwnProperty,wh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gu={},Xu={};function xh(e){return Cs.call(Xu,e)?!0:Cs.call(Gu,e)?!1:wh.test(e)?Xu[e]=!0:(Gu[e]=!0,!1)}function Sh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kh(e,t,n,r){if(t===null||typeof t>"u"||Sh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Na=/[\-:]([a-z])/g;function Ia(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Na,Ia);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Na,Ia);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Na,Ia);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Aa(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kh(t,n,o,r)&&(n=null),r||o===null?xh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var jt=ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),La=Symbol.for("react.strict_mode"),$s=Symbol.for("react.profiler"),nd=Symbol.for("react.provider"),rd=Symbol.for("react.context"),Ma=Symbol.for("react.forward_ref"),Ps=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),Da=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),od=Symbol.for("react.offscreen"),Yu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=Yu&&e[Yu]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Nl;function Ar(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Il=!1;function Al(e,t){if(!e||Il)return"";Il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ar(e):""}function Eh(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function Ts(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case Dn:return"Portal";case $s:return"Profiler";case La:return"StrictMode";case Ps:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rd:return(e.displayName||"Context")+".Consumer";case nd:return(e._context.displayName||"Context")+".Provider";case Ma:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Da:return t=e.displayName||null,t!==null?t:Ts(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return Ts(e(t))}catch{}}return null}function jh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ts(t);case 8:return t===La?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e){var t=id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=Ch(e))}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zs(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sd(e,t){t=t.checked,t!=null&&Aa(e,"checked",t,!1)}function Os(e,t){sd(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rs(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rs(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rs(e,t,n){(t!=="number"||ci(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Lr(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function ad(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$h=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){$h.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function fd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function dd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=fd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ph=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function As(e,t){if(t){if(Ph[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ls(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ms=null;function ba(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,qn=null,Jn=null;function ec(e){if(e=ko(e)){if(typeof Ds!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Gi(t),Ds(e.stateNode,e.type,t))}}function pd(e){qn?Jn?Jn.push(e):Jn=[e]:qn=e}function md(){if(qn){var e=qn,t=Jn;if(Jn=qn=null,ec(e),t)for(e=0;e<t.length;e++)ec(t[e])}}function hd(e,t){return e(t)}function gd(){}var Ll=!1;function vd(e,t,n){if(Ll)return e(t,n);Ll=!0;try{return hd(e,t,n)}finally{Ll=!1,(qn!==null||Jn!==null)&&(gd(),md())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var bs=!1;if(wt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){bs=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{bs=!1}function _h(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Ur=!1,fi=null,di=!1,Fs=null,Th={onError:function(e){Ur=!0,fi=e}};function zh(e,t,n,r,o,i,l,s,a){Ur=!1,fi=null,_h.apply(Th,arguments)}function Oh(e,t,n,r,o,i,l,s,a){if(zh.apply(this,arguments),Ur){if(Ur){var u=fi;Ur=!1,fi=null}else throw Error(j(198));di||(di=!0,Fs=u)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tc(e){if(_n(e)!==e)throw Error(j(188))}function Rh(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return tc(o),e;if(i===r)return tc(o),t;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function wd(e){return e=Rh(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=Ne.unstable_scheduleCallback,nc=Ne.unstable_cancelCallback,Nh=Ne.unstable_shouldYield,Ih=Ne.unstable_requestPaint,te=Ne.unstable_now,Ah=Ne.unstable_getCurrentPriorityLevel,Fa=Ne.unstable_ImmediatePriority,kd=Ne.unstable_UserBlockingPriority,pi=Ne.unstable_NormalPriority,Lh=Ne.unstable_LowPriority,Ed=Ne.unstable_IdlePriority,Hi=null,ut=null;function Mh(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Hi,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Fh,Dh=Math.log,bh=Math.LN2;function Fh(e){return e>>>=0,e===0?32:31-(Dh(e)/bh|0)|0}var Oo=64,Ro=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Mr(s):(i&=l,i!==0&&(r=Mr(i)))}else l=n&~o,l!==0?r=Mr(l):i!==0&&(r=Mr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function Bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-qe(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Bh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Bs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jd(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function xo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Hh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ba(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Cd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $d,Ua,Pd,_d,Td,Us=!1,No=[],Bt=null,Ut=null,Ht=null,eo=new Map,to=new Map,Lt=[],Vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rc(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function Tr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ko(t),t!==null&&Ua(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Wh(e,t,n,r,o){switch(t){case"focusin":return Bt=Tr(Bt,e,t,n,r,o),!0;case"dragenter":return Ut=Tr(Ut,e,t,n,r,o),!0;case"mouseover":return Ht=Tr(Ht,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return eo.set(i,Tr(eo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,to.set(i,Tr(to.get(i)||null,e,t,n,r,o)),!0}return!1}function zd(e){var t=dn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=yd(n),t!==null){e.blockedOn=t,Td(e.priority,function(){Pd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ms=r,n.target.dispatchEvent(r),Ms=null}else return t=ko(n),t!==null&&Ua(t),e.blockedOn=n,!1;t.shift()}return!0}function oc(e,t,n){Ko(e)&&n.delete(t)}function Qh(){Us=!1,Bt!==null&&Ko(Bt)&&(Bt=null),Ut!==null&&Ko(Ut)&&(Ut=null),Ht!==null&&Ko(Ht)&&(Ht=null),eo.forEach(oc),to.forEach(oc)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Us||(Us=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Qh)))}function no(e){function t(o){return zr(o,e)}if(0<No.length){zr(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&zr(Bt,e),Ut!==null&&zr(Ut,e),Ht!==null&&zr(Ht,e),eo.forEach(t),to.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)zd(n),n.blockedOn===null&&Lt.shift()}var er=jt.ReactCurrentBatchConfig,hi=!0;function Gh(e,t,n,r){var o=F,i=er.transition;er.transition=null;try{F=1,Ha(e,t,n,r)}finally{F=o,er.transition=i}}function Xh(e,t,n,r){var o=F,i=er.transition;er.transition=null;try{F=4,Ha(e,t,n,r)}finally{F=o,er.transition=i}}function Ha(e,t,n,r){if(hi){var o=Hs(e,t,n,r);if(o===null)Gl(e,t,r,gi,n),rc(e,r);else if(Wh(o,e,t,n,r))r.stopPropagation();else if(rc(e,r),t&4&&-1<Vh.indexOf(e)){for(;o!==null;){var i=ko(o);if(i!==null&&$d(i),i=Hs(e,t,n,r),i===null&&Gl(e,t,r,gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Gl(e,t,r,null,n)}}var gi=null;function Hs(e,t,n,r){if(gi=null,e=ba(r),e=dn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function Od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ah()){case Fa:return 1;case kd:return 4;case pi:case Lh:return 16;case Ed:return 536870912;default:return 16}default:return 16}}var bt=null,Va=null,Zo=null;function Rd(){if(Zo)return Zo;var e,t=Va,n=t.length,r,o="value"in bt?bt.value:bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Zo=o.slice(e,1<r?1-r:void 0)}function qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function ic(){return!1}function Le(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:ic,this.isPropagationStopped=ic,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wa=Le(xr),So=J({},xr,{view:0,detail:0}),Yh=Le(So),Dl,bl,Or,Vi=J({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Dl=e.screenX-Or.screenX,bl=e.screenY-Or.screenY):bl=Dl=0,Or=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:bl}}),lc=Le(Vi),Kh=J({},Vi,{dataTransfer:0}),Zh=Le(Kh),qh=J({},So,{relatedTarget:0}),Fl=Le(qh),Jh=J({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),eg=Le(Jh),tg=J({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=Le(tg),rg=J({},xr,{data:0}),sc=Le(rg),og={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Qa(){return sg}var ag=J({},So,{key:function(e){if(e.key){var t=og[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=Le(ag),cg=J({},Vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=Le(cg),fg=J({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),dg=Le(fg),pg=J({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mg=Le(pg),hg=J({},Vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gg=Le(hg),vg=[9,13,27,32],Ga=wt&&"CompositionEvent"in window,Hr=null;wt&&"documentMode"in document&&(Hr=document.documentMode);var yg=wt&&"TextEvent"in window&&!Hr,Nd=wt&&(!Ga||Hr&&8<Hr&&11>=Hr),uc=String.fromCharCode(32),cc=!1;function Id(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function wg(e,t){switch(e){case"compositionend":return Ad(t);case"keypress":return t.which!==32?null:(cc=!0,uc);case"textInput":return e=t.data,e===uc&&cc?null:e;default:return null}}function xg(e,t){if(Fn)return e==="compositionend"||!Ga&&Id(e,t)?(e=Rd(),Zo=Va=bt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sg[e.type]:t==="textarea"}function Ld(e,t,n,r){pd(r),t=vi(t,"onChange"),0<t.length&&(n=new Wa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Vr=null,ro=null;function kg(e){Gd(e,0)}function Wi(e){var t=Hn(e);if(ld(t))return e}function Eg(e,t){if(e==="change")return t}var Md=!1;if(wt){var Bl;if(wt){var Ul="oninput"in document;if(!Ul){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Ul=typeof dc.oninput=="function"}Bl=Ul}else Bl=!1;Md=Bl&&(!document.documentMode||9<document.documentMode)}function pc(){Vr&&(Vr.detachEvent("onpropertychange",Dd),ro=Vr=null)}function Dd(e){if(e.propertyName==="value"&&Wi(ro)){var t=[];Ld(t,ro,e,ba(e)),vd(kg,t)}}function jg(e,t,n){e==="focusin"?(pc(),Vr=t,ro=n,Vr.attachEvent("onpropertychange",Dd)):e==="focusout"&&pc()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(ro)}function $g(e,t){if(e==="click")return Wi(t)}function Pg(e,t){if(e==="input"||e==="change")return Wi(t)}function _g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:_g;function oo(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Cs.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mc(n)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fd(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=Fd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(r!==null&&Xa(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=hc(n,i);var l=hc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zg=wt&&"documentMode"in document&&11>=document.documentMode,Bn=null,Vs=null,Wr=null,Ws=!1;function gc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ws||Bn==null||Bn!==ci(r)||(r=Bn,"selectionStart"in r&&Xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&oo(Wr,r)||(Wr=r,r=vi(Vs,"onSelect"),0<r.length&&(t=new Wa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Hl={},Bd={};wt&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function Qi(e){if(Hl[e])return Hl[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bd)return Hl[e]=t[n];return e}var Ud=Qi("animationend"),Hd=Qi("animationiteration"),Vd=Qi("animationstart"),Wd=Qi("transitionend"),Qd=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Qd.set(e,t),Pn(t,[e])}for(var Vl=0;Vl<vc.length;Vl++){var Wl=vc[Vl],Og=Wl.toLowerCase(),Rg=Wl[0].toUpperCase()+Wl.slice(1);tn(Og,"on"+Rg)}tn(Ud,"onAnimationEnd");tn(Hd,"onAnimationIteration");tn(Vd,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Wd,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Oh(r,t,void 0,e),e.currentTarget=null}function Gd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;yc(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;yc(o,s,u),i=a}}}if(di)throw e=Fs,di=!1,Fs=null,e}function Q(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(Xd(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),Xd(n,e,r,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[Lo]){e[Lo]=!0,td.forEach(function(n){n!=="selectionchange"&&(Ng.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,Ql("selectionchange",!1,t))}}function Xd(e,t,n,r){switch(Od(t)){case 1:var o=Gh;break;case 4:o=Xh;break;default:o=Ha}n=o.bind(null,t,n,e),o=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Gl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=dn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}vd(function(){var u=i,p=ba(n),g=[];e:{var m=Qd.get(e);if(m!==void 0){var v=Wa,y=e;switch(e){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":v=ug;break;case"focusin":y="focus",v=Fl;break;case"focusout":y="blur",v=Fl;break;case"beforeblur":case"afterblur":v=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=dg;break;case Ud:case Hd:case Vd:v=eg;break;case Wd:v=mg;break;case"scroll":v=Yh;break;case"wheel":v=gg;break;case"copy":case"cut":case"paste":v=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ac}var w=(t&4)!==0,$=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var f=u,h;f!==null;){h=f;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,d!==null&&(x=Jr(f,d),x!=null&&w.push(lo(f,x,h)))),$)break;f=f.return}0<w.length&&(m=new v(m,y,null,n,p),g.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Ms&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[xt]))break e;if((v||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?dn(y):null,y!==null&&($=_n(y),y!==$||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=lc,x="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=ac,x="onPointerLeave",d="onPointerEnter",f="pointer"),$=v==null?m:Hn(v),h=y==null?m:Hn(y),m=new w(x,f+"leave",v,n,p),m.target=$,m.relatedTarget=h,x=null,dn(p)===u&&(w=new w(d,f+"enter",y,n,p),w.target=h,w.relatedTarget=$,x=w),$=x,v&&y)t:{for(w=v,d=y,f=0,h=w;h;h=zn(h))f++;for(h=0,x=d;x;x=zn(x))h++;for(;0<f-h;)w=zn(w),f--;for(;0<h-f;)d=zn(d),h--;for(;f--;){if(w===d||d!==null&&w===d.alternate)break t;w=zn(w),d=zn(d)}w=null}else w=null;v!==null&&wc(g,m,v,w,!1),y!==null&&$!==null&&wc(g,$,y,w,!0)}}e:{if(m=u?Hn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var E=Eg;else if(fc(m))if(Md)E=Pg;else{E=Cg;var C=jg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(E=$g);if(E&&(E=E(e,u))){Ld(g,E,n,p);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Rs(m,"number",m.value)}switch(C=u?Hn(u):window,e){case"focusin":(fc(C)||C.contentEditable==="true")&&(Bn=C,Vs=u,Wr=null);break;case"focusout":Wr=Vs=Bn=null;break;case"mousedown":Ws=!0;break;case"contextmenu":case"mouseup":case"dragend":Ws=!1,gc(g,n,p);break;case"selectionchange":if(zg)break;case"keydown":case"keyup":gc(g,n,p)}var k;if(Ga)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Fn?Id(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Nd&&n.locale!=="ko"&&(Fn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Fn&&(k=Rd()):(bt=p,Va="value"in bt?bt.value:bt.textContent,Fn=!0)),C=vi(u,z),0<C.length&&(z=new sc(z,e,null,n,p),g.push({event:z,listeners:C}),k?z.data=k:(k=Ad(n),k!==null&&(z.data=k)))),(k=yg?wg(e,n):xg(e,n))&&(u=vi(u,"onBeforeInput"),0<u.length&&(p=new sc("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=k))}Gd(g,t)})}function lo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jr(e,n),i!=null&&r.unshift(lo(e,i,o)),i=Jr(e,t),i!=null&&r.push(lo(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Jr(n,i),a!=null&&l.unshift(lo(n,a,s))):o||(a=Jr(n,i),a!=null&&l.push(lo(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Ig=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function xc(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Ag,"")}function Mo(e,t,n){if(t=xc(t),xc(e)!==t&&n)throw Error(j(425))}function yi(){}var Qs=null,Gs=null;function Xs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ys=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(Dg)}:Ys;function Dg(e){setTimeout(function(){throw e})}function Xl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),no(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);no(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),at="__reactFiber$"+Sr,so="__reactProps$"+Sr,xt="__reactContainer$"+Sr,Ks="__reactEvents$"+Sr,bg="__reactListeners$"+Sr,Fg="__reactHandles$"+Sr;function dn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kc(e);e!==null;){if(n=e[at])return n;e=kc(e)}return t}e=n,n=e.parentNode}return null}function ko(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Gi(e){return e[so]||null}var Zs=[],Vn=-1;function nn(e){return{current:e}}function X(e){0>Vn||(e.current=Zs[Vn],Zs[Vn]=null,Vn--)}function W(e,t){Vn++,Zs[Vn]=e.current,e.current=t}var qt={},ye=nn(qt),$e=nn(!1),Sn=qt;function lr(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function wi(){X($e),X(ye)}function Ec(e,t,n){if(ye.current!==qt)throw Error(j(168));W(ye,t),W($e,n)}function Yd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(j(108,jh(e)||"Unknown",o));return J({},n,r)}function xi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,Sn=ye.current,W(ye,e),W($e,$e.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Yd(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,X($e),X(ye),W(ye,e)):X($e),W($e,n)}var ht=null,Xi=!1,Yl=!1;function Kd(e){ht===null?ht=[e]:ht.push(e)}function Bg(e){Xi=!0,Kd(e)}function rn(){if(!Yl&&ht!==null){Yl=!0;var e=0,t=F;try{var n=ht;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ht=null,Xi=!1}catch(o){throw ht!==null&&(ht=ht.slice(e+1)),Sd(Fa,rn),o}finally{F=t,Yl=!1}}return null}var Wn=[],Qn=0,Si=null,ki=0,De=[],be=0,kn=null,gt=1,vt="";function un(e,t){Wn[Qn++]=ki,Wn[Qn++]=Si,Si=e,ki=t}function Zd(e,t,n){De[be++]=gt,De[be++]=vt,De[be++]=kn,kn=e;var r=gt;e=vt;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var i=32-qe(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,gt=1<<32-qe(t)+o|n<<o|r,vt=i+e}else gt=1<<i|n<<o|r,vt=e}function Ya(e){e.return!==null&&(un(e,1),Zd(e,1,0))}function Ka(e){for(;e===Si;)Si=Wn[--Qn],Wn[Qn]=null,ki=Wn[--Qn],Wn[Qn]=null;for(;e===kn;)kn=De[--be],De[be]=null,vt=De[--be],De[be]=null,gt=De[--be],De[be]=null}var Re=null,Oe=null,K=!1,Ke=null;function qd(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Oe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:gt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Oe=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Js(e){if(K){var t=Oe;if(t){var n=t;if(!Cc(e,t)){if(qs(e))throw Error(j(418));t=Vt(n.nextSibling);var r=Re;t&&Cc(e,t)?qd(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(qs(e))throw Error(j(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function $c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Do(e){if(e!==Re)return!1;if(!K)return $c(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xs(e.type,e.memoizedProps)),t&&(t=Oe)){if(qs(e))throw Jd(),Error(j(418));for(;t;)qd(e,t),t=Vt(t.nextSibling)}if($c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Re?Vt(e.stateNode.nextSibling):null;return!0}function Jd(){for(var e=Oe;e;)e=Vt(e.nextSibling)}function sr(){Oe=Re=null,K=!1}function Za(e){Ke===null?Ke=[e]:Ke.push(e)}var Ug=jt.ReactCurrentBatchConfig;function Xe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ei=nn(null),ji=null,Gn=null,qa=null;function Ja(){qa=Gn=ji=null}function eu(e){var t=Ei.current;X(Ei),e._currentValue=t}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tr(e,t){ji=e,qa=Gn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(qa!==e)if(e={context:e,memoizedValue:t,next:null},Gn===null){if(ji===null)throw Error(j(308));Gn=e,ji.dependencies={lanes:0,firstContext:e}}else Gn=Gn.next=e;return t}var pn=null;function tu(e){pn===null?pn=[e]:pn.push(e)}function ep(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,tu(t)):(n.next=o.next,o.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,St(e,n)}return o=r.interleaved,o===null?(t.next=t,tu(r)):(t.next=o.next,o.next=t),r.interleaved=t,St(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}function Pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ci(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var g=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(m=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){g=y.call(v,g,m);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(v,g,m):y,m==null)break e;g=J({},g,m);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=v,a=g):p=p.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(p===null&&(a=g),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);jn|=l,e.lanes=l,e.memoizedState=g}}function _c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(j(191,o));o.call(r)}}}var np=new ed.Component().refs;function ta(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Gt(e),i=yt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Je(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Gt(e),i=yt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(Je(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Gt(e),o=yt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(Je(t,e,r,n),Jo(t,e,r))}};function Tc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!oo(n,r)||!oo(o,i):!0}function rp(e,t,n){var r=!1,o=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Pe(t)?Sn:ye.current,r=t.contextTypes,i=(r=r!=null)?lr(e,o):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function na(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=np,nu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Pe(t)?Sn:ye.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ta(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yi.enqueueReplaceState(o,o.state,null),Ci(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===np&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oc(e){var t=e._init;return t(e._payload)}function op(e){function t(d,f){if(e){var h=d.deletions;h===null?(d.deletions=[f],d.flags|=16):h.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function o(d,f){return d=Xt(d,f),d.index=0,d.sibling=null,d}function i(d,f,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<f?(d.flags|=2,f):h):(d.flags|=2,f)):(d.flags|=1048576,f)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,f,h,x){return f===null||f.tag!==6?(f=ns(h,d.mode,x),f.return=d,f):(f=o(f,h),f.return=d,f)}function a(d,f,h,x){var E=h.type;return E===bn?p(d,f,h.props.children,x,h.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===It&&Oc(E)===f.type)?(x=o(f,h.props),x.ref=Rr(d,f,h),x.return=d,x):(x=ii(h.type,h.key,h.props,null,d.mode,x),x.ref=Rr(d,f,h),x.return=d,x)}function u(d,f,h,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=rs(h,d.mode,x),f.return=d,f):(f=o(f,h.children||[]),f.return=d,f)}function p(d,f,h,x,E){return f===null||f.tag!==7?(f=vn(h,d.mode,x,E),f.return=d,f):(f=o(f,h),f.return=d,f)}function g(d,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ns(""+f,d.mode,h),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return h=ii(f.type,f.key,f.props,null,d.mode,h),h.ref=Rr(d,null,f),h.return=d,h;case Dn:return f=rs(f,d.mode,h),f.return=d,f;case It:var x=f._init;return g(d,x(f._payload),h)}if(Lr(f)||Pr(f))return f=vn(f,d.mode,h,null),f.return=d,f;bo(d,f)}return null}function m(d,f,h,x){var E=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(d,f,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case _o:return h.key===E?a(d,f,h,x):null;case Dn:return h.key===E?u(d,f,h,x):null;case It:return E=h._init,m(d,f,E(h._payload),x)}if(Lr(h)||Pr(h))return E!==null?null:p(d,f,h,x,null);bo(d,h)}return null}function v(d,f,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(h)||null,s(f,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _o:return d=d.get(x.key===null?h:x.key)||null,a(f,d,x,E);case Dn:return d=d.get(x.key===null?h:x.key)||null,u(f,d,x,E);case It:var C=x._init;return v(d,f,h,C(x._payload),E)}if(Lr(x)||Pr(x))return d=d.get(h)||null,p(f,d,x,E,null);bo(f,x)}return null}function y(d,f,h,x){for(var E=null,C=null,k=f,z=f=0,D=null;k!==null&&z<h.length;z++){k.index>z?(D=k,k=null):D=k.sibling;var N=m(d,k,h[z],x);if(N===null){k===null&&(k=D);break}e&&k&&N.alternate===null&&t(d,k),f=i(N,f,z),C===null?E=N:C.sibling=N,C=N,k=D}if(z===h.length)return n(d,k),K&&un(d,z),E;if(k===null){for(;z<h.length;z++)k=g(d,h[z],x),k!==null&&(f=i(k,f,z),C===null?E=k:C.sibling=k,C=k);return K&&un(d,z),E}for(k=r(d,k);z<h.length;z++)D=v(k,d,z,h[z],x),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?z:D.key),f=i(D,f,z),C===null?E=D:C.sibling=D,C=D);return e&&k.forEach(function(oe){return t(d,oe)}),K&&un(d,z),E}function w(d,f,h,x){var E=Pr(h);if(typeof E!="function")throw Error(j(150));if(h=E.call(h),h==null)throw Error(j(151));for(var C=E=null,k=f,z=f=0,D=null,N=h.next();k!==null&&!N.done;z++,N=h.next()){k.index>z?(D=k,k=null):D=k.sibling;var oe=m(d,k,N.value,x);if(oe===null){k===null&&(k=D);break}e&&k&&oe.alternate===null&&t(d,k),f=i(oe,f,z),C===null?E=oe:C.sibling=oe,C=oe,k=D}if(N.done)return n(d,k),K&&un(d,z),E;if(k===null){for(;!N.done;z++,N=h.next())N=g(d,N.value,x),N!==null&&(f=i(N,f,z),C===null?E=N:C.sibling=N,C=N);return K&&un(d,z),E}for(k=r(d,k);!N.done;z++,N=h.next())N=v(k,d,z,N.value,x),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?z:N.key),f=i(N,f,z),C===null?E=N:C.sibling=N,C=N);return e&&k.forEach(function(on){return t(d,on)}),K&&un(d,z),E}function $(d,f,h,x){if(typeof h=="object"&&h!==null&&h.type===bn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case _o:e:{for(var E=h.key,C=f;C!==null;){if(C.key===E){if(E=h.type,E===bn){if(C.tag===7){n(d,C.sibling),f=o(C,h.props.children),f.return=d,d=f;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===It&&Oc(E)===C.type){n(d,C.sibling),f=o(C,h.props),f.ref=Rr(d,C,h),f.return=d,d=f;break e}n(d,C);break}else t(d,C);C=C.sibling}h.type===bn?(f=vn(h.props.children,d.mode,x,h.key),f.return=d,d=f):(x=ii(h.type,h.key,h.props,null,d.mode,x),x.ref=Rr(d,f,h),x.return=d,d=x)}return l(d);case Dn:e:{for(C=h.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(d,f.sibling),f=o(f,h.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=rs(h,d.mode,x),f.return=d,d=f}return l(d);case It:return C=h._init,$(d,f,C(h._payload),x)}if(Lr(h))return y(d,f,h,x);if(Pr(h))return w(d,f,h,x);bo(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(d,f.sibling),f=o(f,h),f.return=d,d=f):(n(d,f),f=ns(h,d.mode,x),f.return=d,d=f),l(d)):n(d,f)}return $}var ar=op(!0),ip=op(!1),Eo={},ct=nn(Eo),ao=nn(Eo),uo=nn(Eo);function mn(e){if(e===Eo)throw Error(j(174));return e}function ru(e,t){switch(W(uo,t),W(ao,e),W(ct,Eo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Is(t,e)}X(ct),W(ct,t)}function ur(){X(ct),X(ao),X(uo)}function lp(e){mn(uo.current);var t=mn(ct.current),n=Is(t,e.type);t!==n&&(W(ao,e),W(ct,n))}function ou(e){ao.current===e&&(X(ct),X(ao))}var Z=nn(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function iu(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var ei=jt.ReactCurrentDispatcher,Zl=jt.ReactCurrentBatchConfig,En=0,q=null,ie=null,se=null,Pi=!1,Qr=!1,co=0,Hg=0;function me(){throw Error(j(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function su(e,t,n,r,o,i){if(En=i,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ei.current=e===null||e.memoizedState===null?Gg:Xg,e=n(r,o),Qr){i=0;do{if(Qr=!1,co=0,25<=i)throw Error(j(301));i+=1,se=ie=null,t.updateQueue=null,ei.current=Yg,e=n(r,o)}while(Qr)}if(ei.current=_i,t=ie!==null&&ie.next!==null,En=0,se=ie=q=null,Pi=!1,t)throw Error(j(300));return e}function au(){var e=co!==0;return co=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?q.memoizedState=se=e:se=se.next=e,se}function He(){if(ie===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?q.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error(j(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?q.memoizedState=se=e:se=se.next=e}return se}function fo(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=He(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if((En&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,q.lanes|=p,jn|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,tt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,q.lanes|=i,jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=He(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function sp(){}function ap(e,t){var n=q,r=He(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,uu(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,po(9,cp.bind(null,n,r,o,t),void 0,null),ue===null)throw Error(j(349));En&30||up(n,t,o)}return o}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,dp(t)&&pp(e)}function fp(e,t,n){return n(function(){dp(t)&&pp(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function pp(e){var t=St(e,1);t!==null&&Je(t,e,1,-1)}function Rc(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e},t.queue=e,e=e.dispatch=Qg.bind(null,q,e),[t.memoizedState,e]}function po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mp(){return He().memoizedState}function ti(e,t,n,r){var o=lt();q.flags|=e,o.memoizedState=po(1|t,n,void 0,r===void 0?null:r)}function Ki(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&lu(r,l.deps)){o.memoizedState=po(t,n,i,r);return}}q.flags|=e,o.memoizedState=po(1|t,n,i,r)}function Nc(e,t){return ti(8390656,8,e,t)}function uu(e,t){return Ki(2048,8,e,t)}function hp(e,t){return Ki(4,2,e,t)}function gp(e,t){return Ki(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yp(e,t,n){return n=n!=null?n.concat([e]):null,Ki(4,4,vp.bind(null,t,e),n)}function cu(){}function wp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sp(e,t,n){return En&21?(tt(n,t)||(n=jd(),q.lanes|=n,jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Vg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{F=n,Zl.transition=r}}function kp(){return He().memoizedState}function Wg(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ep(e))jp(t,n);else if(n=ep(e,t,n,r),n!==null){var o=xe();Je(n,e,r,o),Cp(n,t,r)}}function Qg(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ep(e))jp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,tt(s,l)){var a=t.interleaved;a===null?(o.next=o,tu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=ep(e,t,o,r),n!==null&&(o=xe(),Je(n,e,r,o),Cp(n,t,r))}}function Ep(e){var t=e.alternate;return e===q||t!==null&&t===q}function jp(e,t){Qr=Pi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ba(e,n)}}var _i={readContext:Ue,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Gg={readContext:Ue,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Nc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ti(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return ti(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wg.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Rc,useDebugValue:cu,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Rc(!1),t=e[0];return e=Vg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,o=lt();if(K){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ue===null)throw Error(j(349));En&30||up(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Nc(fp.bind(null,r,i,e),[e]),r.flags|=2048,po(9,cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=ue.identifierPrefix;if(K){var n=vt,r=gt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xg={readContext:Ue,useCallback:wp,useContext:Ue,useEffect:uu,useImperativeHandle:yp,useInsertionEffect:hp,useLayoutEffect:gp,useMemo:xp,useReducer:ql,useRef:mp,useState:function(){return ql(fo)},useDebugValue:cu,useDeferredValue:function(e){var t=He();return Sp(t,ie.memoizedState,e)},useTransition:function(){var e=ql(fo)[0],t=He().memoizedState;return[e,t]},useMutableSource:sp,useSyncExternalStore:ap,useId:kp,unstable_isNewReconciler:!1},Yg={readContext:Ue,useCallback:wp,useContext:Ue,useEffect:uu,useImperativeHandle:yp,useInsertionEffect:hp,useLayoutEffect:gp,useMemo:xp,useReducer:Jl,useRef:mp,useState:function(){return Jl(fo)},useDebugValue:cu,useDeferredValue:function(e){var t=He();return ie===null?t.memoizedState=e:Sp(t,ie.memoizedState,e)},useTransition:function(){var e=Jl(fo)[0],t=He().memoizedState;return[e,t]},useMutableSource:sp,useSyncExternalStore:ap,useId:kp,unstable_isNewReconciler:!1};function cr(e,t){try{var n="",r=t;do n+=Eh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function es(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ra(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function $p(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,pa=r),ra(e,t)},n}function Pp(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ra(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ra(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ic(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=cv.bind(null,e,t,n),t.then(e,e))}function Ac(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e)}var Zg=jt.ReactCurrentOwner,je=!1;function we(e,t,n,r){t.child=e===null?ip(t,null,n,r):ar(t,e.child,n,r)}function Mc(e,t,n,r,o){n=n.render;var i=t.ref;return tr(t,o),r=su(e,t,n,r,i,o),n=au(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(K&&n&&Ya(t),t.flags|=1,we(e,t,r,o),t.child)}function Dc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_p(e,t,i,r,o)):(e=ii(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(l,r)&&e.ref===t.ref)return kt(e,t,o)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function _p(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oo(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,kt(e,t,o)}return oa(e,t,n,r,o)}function Tp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Yn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Yn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(Yn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(Yn,ze),ze|=r;return we(e,t,o,n),t.child}function zp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oa(e,t,n,r,o){var i=Pe(n)?Sn:ye.current;return i=lr(t,i),tr(t,o),n=su(e,t,n,r,i,o),r=au(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(K&&r&&Ya(t),t.flags|=1,we(e,t,n,o),t.child)}function bc(e,t,n,r,o){if(Pe(n)){var i=!0;xi(t)}else i=!1;if(tr(t,o),t.stateNode===null)ni(e,t),rp(t,n,r),na(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Pe(n)?Sn:ye.current,u=lr(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&zc(t,l,r,u),At=!1;var m=t.memoizedState;l.state=m,Ci(t,r,l,o),a=t.memoizedState,s!==r||m!==a||$e.current||At?(typeof p=="function"&&(ta(t,n,p,r),a=t.memoizedState),(s=At||Tc(t,n,s,r,m,a,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,tp(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Xe(t.type,s),l.props=u,g=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Pe(n)?Sn:ye.current,a=lr(t,a));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==a)&&zc(t,l,r,a),At=!1,m=t.memoizedState,l.state=m,Ci(t,r,l,o);var y=t.memoizedState;s!==g||m!==y||$e.current||At?(typeof v=="function"&&(ta(t,n,v,r),y=t.memoizedState),(u=At||Tc(t,n,u,r,m,y,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ia(e,t,n,r,i,o)}function ia(e,t,n,r,o,i){zp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&jc(t,n,!1),kt(e,t,i);r=t.stateNode,Zg.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&jc(t,n,!0),t.child}function Op(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),ru(e,t.containerInfo)}function Fc(e,t,n,r,o){return sr(),Za(o),t.flags|=256,we(e,t,n,r),t.child}var la={dehydrated:null,treeContext:null,retryLane:0};function sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Rp(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Z,o&1),e===null)return Js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ji(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=sa(n),t.memoizedState=la,e):fu(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return qg(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Xt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Xt(s,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?sa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=la,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fu(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&Za(r),ar(t,e.child,null,n),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=es(Error(j(422))),Fo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ji({mode:"visible",children:r.children},o,0,null),i=vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ar(t,e.child,null,l),t.child.memoizedState=sa(l),t.memoizedState=la,i);if(!(t.mode&1))return Fo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(j(419)),r=es(i,r,void 0),Fo(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,St(e,o),Je(r,e,o,-1))}return vu(),r=es(Error(j(421))),Fo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=fv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Vt(o.nextSibling),Re=t,K=!0,Ke=null,e!==null&&(De[be++]=gt,De[be++]=vt,De[be++]=kn,gt=e.id,vt=e.overflow,kn=t),t=fu(t,r.children),t.flags|=4096,t)}function Bc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function ts(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Np(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bc(e,n,t);else if(e.tag===19)Bc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ts(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$i(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ts(t,!0,n,null,i);break;case"together":ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ni(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jg(e,t,n){switch(t.tag){case 3:Op(t),sr();break;case 5:lp(t);break;case 1:Pe(t.type)&&xi(t);break;case 4:ru(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Ei,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?Rp(e,t,n):(W(Z,Z.current&1),e=kt(e,t,n),e!==null?e.sibling:null);W(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Np(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Tp(e,t,n)}return kt(e,t,n)}var Ip,aa,Ap,Lp;Ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};aa=function(){};Ap=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,mn(ct.current);var i=null;switch(n){case"input":o=zs(e,o),r=zs(e,r),i=[];break;case"select":o=J({},o,{value:void 0}),r=J({},r,{value:void 0}),i=[];break;case"textarea":o=Ns(e,o),r=Ns(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yi)}As(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Q("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Lp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ev(e,t,n){var r=t.pendingProps;switch(Ka(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Pe(t.type)&&wi(),he(t),null;case 3:return r=t.stateNode,ur(),X($e),X(ye),iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Do(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(ga(Ke),Ke=null))),aa(e,t),he(t),null;case 5:ou(t);var o=mn(uo.current);if(n=t.type,e!==null&&t.stateNode!=null)Ap(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return he(t),null}if(e=mn(ct.current),Do(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[so]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Dr.length;o++)Q(Dr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":Ku(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":qu(r,i),Q("invalid",r)}As(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,s,e),o=["children",""+s]):Zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":To(r),Zu(r,i,!0);break;case"textarea":To(r),Ju(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=yi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[so]=r,Ip(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ls(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Dr.length;o++)Q(Dr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":Ku(e,r),o=zs(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=J({},r,{value:void 0}),Q("invalid",e);break;case"textarea":qu(e,r),o=Ns(e,r),Q("invalid",e);break;default:o=r}As(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?dd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qr(e,a):typeof a=="number"&&qr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&Q("scroll",e):a!=null&&Aa(e,i,a,l))}switch(n){case"input":To(e),Zu(e,r,!1);break;case"textarea":To(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Lp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=mn(uo.current),mn(ct.current),Do(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return he(t),null;case 13:if(X(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Oe!==null&&t.mode&1&&!(t.flags&128))Jd(),sr(),t.flags|=98560,i=!1;else if(i=Do(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(j(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[at]=t}else sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ke!==null&&(ga(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?le===0&&(le=3):vu())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return ur(),aa(e,t),e===null&&io(t.stateNode.containerInfo),he(t),null;case 10:return eu(t.type._context),he(t),null;case 17:return Pe(t.type)&&wi(),he(t),null;case 19:if(X(Z),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Nr(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=$i(e),l!==null){for(t.flags|=128,Nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>fr&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=$i(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*te()-i.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=Z.current,W(Z,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function tv(e,t){switch(Ka(t),t.tag){case 1:return Pe(t.type)&&wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),X($e),X(ye),iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ou(t),null;case 13:if(X(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(Z),null;case 4:return ur(),null;case 10:return eu(t.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var Bo=!1,ve=!1,nv=typeof WeakSet=="function"?WeakSet:Set,T=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function ua(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Uc=!1;function rv(e,t){if(Qs=hi,e=Fd(),Xa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,g=e,m=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gs={focusedElem:e,selectionRange:n},hi=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,$=y.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Xe(t.type,w),$);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){ee(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=Uc,Uc=!1,y}function Gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ua(t,n,i)}o=o.next}while(o!==r)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Mp(e){var t=e.alternate;t!==null&&(e.alternate=null,Mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[so],delete t[Ks],delete t[bg],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function Hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yi));else if(r!==4&&(e=e.child,e!==null))for(fa(e,t,n),e=e.sibling;e!==null;)fa(e,t,n),e=e.sibling}function da(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(da(e,t,n),e=e.sibling;e!==null;)da(e,t,n),e=e.sibling}var fe=null,Ye=!1;function _t(e,t,n){for(n=n.child;n!==null;)bp(e,t,n),n=n.sibling}function bp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Hi,n)}catch{}switch(n.tag){case 5:ve||Xn(n,t);case 6:var r=fe,o=Ye;fe=null,_t(e,t,n),fe=r,Ye=o,fe!==null&&(Ye?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ye?(e=fe,n=n.stateNode,e.nodeType===8?Xl(e.parentNode,n):e.nodeType===1&&Xl(e,n),no(e)):Xl(fe,n.stateNode));break;case 4:r=fe,o=Ye,fe=n.stateNode.containerInfo,Ye=!0,_t(e,t,n),fe=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&ua(n,t,l),o=o.next}while(o!==r)}_t(e,t,n);break;case 1:if(!ve&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,_t(e,t,n),ve=r):_t(e,t,n);break;default:_t(e,t,n)}}function Vc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nv),t.forEach(function(r){var o=dv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,Ye=!1;break e;case 3:fe=s.stateNode.containerInfo,Ye=!0;break e;case 4:fe=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(fe===null)throw Error(j(160));bp(i,l,o),fe=null,Ye=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fp(t,e),t=t.sibling}function Fp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),nt(e),r&4){try{Gr(3,e,e.return),Zi(3,e)}catch(w){ee(e,e.return,w)}try{Gr(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ge(t,e),nt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(Ge(t,e),nt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sd(o,i),Ls(s,l);var u=Ls(s,i);for(l=0;l<a.length;l+=2){var p=a[l],g=a[l+1];p==="style"?dd(o,g):p==="dangerouslySetInnerHTML"?cd(o,g):p==="children"?qr(o,g):Aa(o,p,g,u)}switch(s){case"input":Os(o,i);break;case"textarea":ad(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Zn(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?Zn(o,!!i.multiple,i.defaultValue,!0):Zn(o,!!i.multiple,i.multiple?[]:"",!1))}o[so]=i}catch(w){ee(e,e.return,w)}}break;case 6:if(Ge(t,e),nt(e),r&4){if(e.stateNode===null)throw Error(j(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ee(e,e.return,w)}}break;case 3:if(Ge(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ge(t,e),nt(e);break;case 13:Ge(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(mu=te())),r&4&&Vc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||p,Ge(t,e),ve=u):Ge(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(g=T=p;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:Gr(4,m,m.return);break;case 1:Xn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){Qc(g);continue}}v!==null?(v.return=m,T=v):Qc(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=fd("display",l))}catch(w){ee(e,e.return,w)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(w){ee(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ge(t,e),nt(e),r&4&&Vc(e);break;case 21:break;default:Ge(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=Hc(e);da(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Hc(e);fa(e,s,l);break;default:throw Error(j(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ov(e,t,n){T=e,Bp(e)}function Bp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Bo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=Bo;var u=ve;if(Bo=l,(ve=a)&&!u)for(T=o;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Gc(o):a!==null?(a.return=l,T=a):Gc(o);for(;i!==null;)T=i,Bp(i),i=i.sibling;T=o,Bo=s,ve=u}Wc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Wc(e)}}function Wc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&_c(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_c(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&no(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ve||t.flags&512&&ca(t)}catch(m){ee(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Qc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Gc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{ca(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{ca(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var iv=Math.ceil,Ti=jt.ReactCurrentDispatcher,du=jt.ReactCurrentOwner,Be=jt.ReactCurrentBatchConfig,M=0,ue=null,re=null,de=0,ze=0,Yn=nn(0),le=0,mo=null,jn=0,qi=0,pu=0,Xr=null,Ee=null,mu=0,fr=1/0,pt=null,zi=!1,pa=null,Qt=null,Uo=!1,Ft=null,Oi=0,Yr=0,ma=null,ri=-1,oi=0;function xe(){return M&6?te():ri!==-1?ri:ri=te()}function Gt(e){return e.mode&1?M&2&&de!==0?de&-de:Ug.transition!==null?(oi===0&&(oi=jd()),oi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Od(e.type)),e):1}function Je(e,t,n,r){if(50<Yr)throw Yr=0,ma=null,Error(j(185));xo(e,n,r),(!(M&2)||e!==ue)&&(e===ue&&(!(M&2)&&(qi|=n),le===4&&Mt(e,de)),_e(e,r),n===1&&M===0&&!(t.mode&1)&&(fr=te()+500,Xi&&rn()))}function _e(e,t){var n=e.callbackNode;Uh(e,t);var r=mi(e,e===ue?de:0);if(r===0)n!==null&&nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nc(n),t===1)e.tag===0?Bg(Xc.bind(null,e)):Kd(Xc.bind(null,e)),Mg(function(){!(M&6)&&rn()}),n=null;else{switch(Cd(r)){case 1:n=Fa;break;case 4:n=kd;break;case 16:n=pi;break;case 536870912:n=Ed;break;default:n=pi}n=Yp(n,Up.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Up(e,t){if(ri=-1,oi=0,M&6)throw Error(j(327));var n=e.callbackNode;if(nr()&&e.callbackNode!==n)return null;var r=mi(e,e===ue?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ri(e,r);else{t=r;var o=M;M|=2;var i=Vp();(ue!==e||de!==t)&&(pt=null,fr=te()+500,gn(e,t));do try{av();break}catch(s){Hp(e,s)}while(1);Ja(),Ti.current=i,M=o,re!==null?t=0:(ue=null,de=0,t=le)}if(t!==0){if(t===2&&(o=Bs(e),o!==0&&(r=o,t=ha(e,o))),t===1)throw n=mo,gn(e,0),Mt(e,r),_e(e,te()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!lv(o)&&(t=Ri(e,r),t===2&&(i=Bs(e),i!==0&&(r=i,t=ha(e,i))),t===1))throw n=mo,gn(e,0),Mt(e,r),_e(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:cn(e,Ee,pt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=mu+500-te(),10<t)){if(mi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ys(cn.bind(null,e,Ee,pt),t);break}cn(e,Ee,pt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-qe(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iv(r/1960))-r,10<r){e.timeoutHandle=Ys(cn.bind(null,e,Ee,pt),r);break}cn(e,Ee,pt);break;case 5:cn(e,Ee,pt);break;default:throw Error(j(329))}}}return _e(e,te()),e.callbackNode===n?Up.bind(null,e):null}function ha(e,t){var n=Xr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Ri(e,t),e!==2&&(t=Ee,Ee=n,t!==null&&ga(t)),e}function ga(e){Ee===null?Ee=e:Ee.push.apply(Ee,e)}function lv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~pu,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function Xc(e){if(M&6)throw Error(j(327));nr();var t=mi(e,0);if(!(t&1))return _e(e,te()),null;var n=Ri(e,t);if(e.tag!==0&&n===2){var r=Bs(e);r!==0&&(t=r,n=ha(e,r))}if(n===1)throw n=mo,gn(e,0),Mt(e,t),_e(e,te()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ee,pt),_e(e,te()),null}function hu(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(fr=te()+500,Xi&&rn())}}function Cn(e){Ft!==null&&Ft.tag===0&&!(M&6)&&nr();var t=M;M|=1;var n=Be.transition,r=F;try{if(Be.transition=null,F=1,e)return e()}finally{F=r,Be.transition=n,M=t,!(M&6)&&rn()}}function gu(){ze=Yn.current,X(Yn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lg(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Ka(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wi();break;case 3:ur(),X($e),X(ye),iu();break;case 5:ou(r);break;case 4:ur();break;case 13:X(Z);break;case 19:X(Z);break;case 10:eu(r.type._context);break;case 22:case 23:gu()}n=n.return}if(ue=e,re=e=Xt(e.current,null),de=ze=t,le=0,mo=null,pu=qi=jn=0,Ee=Xr=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}pn=null}return e}function Hp(e,t){do{var n=re;try{if(Ja(),ei.current=_i,Pi){for(var r=q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pi=!1}if(En=0,se=ie=q=null,Qr=!1,co=0,du.current=null,n===null||n.return===null){le=1,mo=t,re=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=de,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Ac(l);if(v!==null){v.flags&=-257,Lc(v,l,s,i,t),v.mode&1&&Ic(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Ic(i,u,t),vu();break e}a=Error(j(426))}}else if(K&&s.mode&1){var $=Ac(l);if($!==null){!($.flags&65536)&&($.flags|=256),Lc($,l,s,i,t),Za(cr(a,s));break e}}i=a=cr(a,s),le!==4&&(le=2),Xr===null?Xr=[i]:Xr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=$p(i,a,t);Pc(i,d);break e;case 1:s=a;var f=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qt===null||!Qt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Pp(i,s,t);Pc(i,x);break e}}i=i.return}while(i!==null)}Qp(n)}catch(E){t=E,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Vp(){var e=Ti.current;return Ti.current=_i,e===null?_i:e}function vu(){(le===0||le===3||le===2)&&(le=4),ue===null||!(jn&268435455)&&!(qi&268435455)||Mt(ue,de)}function Ri(e,t){var n=M;M|=2;var r=Vp();(ue!==e||de!==t)&&(pt=null,gn(e,t));do try{sv();break}catch(o){Hp(e,o)}while(1);if(Ja(),M=n,Ti.current=r,re!==null)throw Error(j(261));return ue=null,de=0,le}function sv(){for(;re!==null;)Wp(re)}function av(){for(;re!==null&&!Nh();)Wp(re)}function Wp(e){var t=Xp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Qp(e):re=t,du.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(n=ev(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function cn(e,t,n){var r=F,o=Be.transition;try{Be.transition=null,F=1,uv(e,t,n,r)}finally{Be.transition=o,F=r}return null}function uv(e,t,n,r){do nr();while(Ft!==null);if(M&6)throw Error(j(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hh(e,i),e===ue&&(re=ue=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,Yp(pi,function(){return nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=F;F=1;var s=M;M|=4,du.current=null,rv(e,n),Fp(n,e),Tg(Gs),hi=!!Qs,Gs=Qs=null,e.current=n,ov(n),Ih(),M=s,F=l,Be.transition=i}else e.current=n;if(Uo&&(Uo=!1,Ft=e,Oi=o),i=e.pendingLanes,i===0&&(Qt=null),Mh(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=pa,pa=null,e;return Oi&1&&e.tag!==0&&nr(),i=e.pendingLanes,i&1?e===ma?Yr++:(Yr=0,ma=e):Yr=0,rn(),null}function nr(){if(Ft!==null){var e=Cd(Oi),t=Be.transition,n=F;try{if(Be.transition=null,F=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Oi=0,M&6)throw Error(j(331));var o=M;for(M|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:Gr(8,p,i)}var g=p.child;if(g!==null)g.return=p,T=g;else for(;T!==null;){p=T;var m=p.sibling,v=p.return;if(Mp(p),p===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,T=d;break e}T=i.return}}var f=e.current;for(T=f;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=f;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zi(9,s)}}catch(E){ee(s,s.return,E)}if(s===l){T=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,T=x;break e}T=s.return}}if(M=o,rn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Hi,e)}catch{}r=!0}return r}finally{F=n,Be.transition=t}}return!1}function Yc(e,t,n){t=cr(n,t),t=$p(e,t,1),e=Wt(e,t,1),t=xe(),e!==null&&(xo(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)Yc(e,e,n);else for(;t!==null;){if(t.tag===3){Yc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=cr(n,e),e=Pp(t,e,1),t=Wt(t,e,1),e=xe(),t!==null&&(xo(t,1,e),_e(t,e));break}}t=t.return}}function cv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(de&n)===n&&(le===4||le===3&&(de&130023424)===de&&500>te()-mu?gn(e,0):pu|=n),_e(e,t)}function Gp(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=xe();e=St(e,t),e!==null&&(xo(e,t,n),_e(e,n))}function fv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gp(e,n)}function dv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Gp(e,n)}var Xp;Xp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Jg(e,t,n);je=!!(e.flags&131072)}else je=!1,K&&t.flags&1048576&&Zd(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ni(e,t),e=t.pendingProps;var o=lr(t,ye.current);tr(t,n),o=su(null,t,r,e,o,n);var i=au();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,xi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,nu(t),o.updater=Yi,t.stateNode=o,o._reactInternals=t,na(t,r,e,n),t=ia(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Ya(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ni(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=mv(r),e=Xe(r,e),o){case 0:t=oa(null,t,r,e,n);break e;case 1:t=bc(null,t,r,e,n);break e;case 11:t=Mc(null,t,r,e,n);break e;case 14:t=Dc(null,t,r,Xe(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),oa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),bc(e,t,r,o,n);case 3:e:{if(Op(t),e===null)throw Error(j(387));r=t.pendingProps,i=t.memoizedState,o=i.element,tp(e,t),Ci(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(j(423)),t),t=Fc(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(j(424)),t),t=Fc(e,t,r,n,o);break e}else for(Oe=Vt(t.stateNode.containerInfo.firstChild),Re=t,K=!0,Ke=null,n=ip(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===o){t=kt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return lp(t),e===null&&Js(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Xs(r,o)?l=null:i!==null&&Xs(r,i)&&(t.flags|=32),zp(e,t),we(e,t,l,n),t.child;case 6:return e===null&&Js(t),null;case 13:return Rp(e,t,n);case 4:return ru(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),Mc(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,W(Ei,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!$e.current){t=kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=yt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ea(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(j(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),ea(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,tr(t,n),o=Ue(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Xe(r,t.pendingProps),o=Xe(r.type,o),Dc(e,t,r,o,n);case 15:return _p(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Xe(r,o),ni(e,t),t.tag=1,Pe(r)?(e=!0,xi(t)):e=!1,tr(t,n),rp(t,r,o),na(t,r,o,n),ia(null,t,r,!0,e,n);case 19:return Np(e,t,n);case 22:return Tp(e,t,n)}throw Error(j(156,t.tag))};function Yp(e,t){return Sd(e,t)}function pv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new pv(e,t,n,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mv(e){if(typeof e=="function")return yu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ma)return 11;if(e===Da)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ii(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")yu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bn:return vn(n.children,o,i,t);case La:l=8,o|=8;break;case $s:return e=Fe(12,n,t,o|2),e.elementType=$s,e.lanes=i,e;case Ps:return e=Fe(13,n,t,o),e.elementType=Ps,e.lanes=i,e;case _s:return e=Fe(19,n,t,o),e.elementType=_s,e.lanes=i,e;case od:return Ji(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nd:l=10;break e;case rd:l=9;break e;case Ma:l=11;break e;case Da:l=14;break e;case It:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=od,e.lanes=n,e.stateNode={isHidden:!1},e}function ns(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function rs(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wu(e,t,n,r,o,i,l,s,a){return e=new hv(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(i),e}function gv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kp(e){if(!e)return qt;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Yd(e,n,t)}return t}function Zp(e,t,n,r,o,i,l,s,a){return e=wu(n,r,!0,e,o,i,l,s,a),e.context=Kp(null),n=e.current,r=xe(),o=Gt(n),i=yt(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,xo(e,o,r),_e(e,r),e}function el(e,t,n,r){var o=t.current,i=xe(),l=Gt(o);return n=Kp(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,l),e!==null&&(Je(e,o,l,i),Jo(e,o,l)),l}function Ni(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xu(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function vv(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Su(e){this._internalRoot=e}tl.prototype.render=Su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));el(e,t,null,null)};tl.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){el(null,e,null,null)}),t[xt]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=_d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&zd(e)}};function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function yv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ni(l);i.call(u)}}var l=Zp(t,r,e,0,null,!1,!1,"",Zc);return e._reactRootContainer=l,e[xt]=l.current,io(e.nodeType===8?e.parentNode:e),Cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Ni(a);s.call(u)}}var a=wu(e,0,!1,null,null,!1,!1,"",Zc);return e._reactRootContainer=a,e[xt]=a.current,io(e.nodeType===8?e.parentNode:e),Cn(function(){el(t,a,n,r)}),a}function rl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Ni(l);s.call(a)}}el(t,l,e,o)}else l=yv(n,t,e,o,r);return Ni(l)}$d=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(Ba(t,n|1),_e(t,te()),!(M&6)&&(fr=te()+500,rn()))}break;case 13:Cn(function(){var r=St(e,1);if(r!==null){var o=xe();Je(r,e,1,o)}}),xu(e,1)}};Ua=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=xe();Je(t,e,134217728,n)}xu(e,134217728)}};Pd=function(e){if(e.tag===13){var t=Gt(e),n=St(e,t);if(n!==null){var r=xe();Je(n,e,t,r)}xu(e,t)}};_d=function(){return F};Td=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Ds=function(e,t,n){switch(t){case"input":if(Os(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gi(r);if(!o)throw Error(j(90));ld(r),Os(r,o)}}}break;case"textarea":ad(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};hd=hu;gd=Cn;var wv={usingClientEntryPoint:!1,Events:[ko,Hn,Gi,pd,md,hu]},Ir={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xv={bundleType:Ir.bundleType,version:Ir.version,rendererPackageName:Ir.rendererPackageName,rendererConfig:Ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ir.findFiberByHostInstance||vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{Hi=Ho.inject(xv),ut=Ho}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(t))throw Error(j(200));return gv(e,t,null,n)};Ae.createRoot=function(e,t){if(!ku(e))throw Error(j(299));var n=!1,r="",o=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wu(e,1,!1,null,null,n,!1,r,o),e[xt]=t.current,io(e.nodeType===8?e.parentNode:e),new Su(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=wd(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return Cn(e)};Ae.hydrate=function(e,t,n){if(!nl(t))throw Error(j(200));return rl(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ku(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=qp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zp(t,null,e,1,n??null,o,!1,i,l),e[xt]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new tl(t)};Ae.render=function(e,t,n){if(!nl(t))throw Error(j(200));return rl(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!nl(e))throw Error(j(40));return e._reactRootContainer?(Cn(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Ae.unstable_batchedUpdates=hu;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return rl(e,t,n,!1,r)};Ae.version="18.2.0-next-9e3b772b8-20220608";function Jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)}catch(e){console.error(e)}}Jp(),Zf.exports=Ae;var em=Zf.exports,qc=em;js.createRoot=qc.createRoot,js.hydrateRoot=qc.hydrateRoot;var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function Ii(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var G="-ms-",Kr="-moz-",b="-webkit-",tm="comm",ol="rule",Eu="decl",Sv="@import",nm="@keyframes",kv="@layer",Ev=Math.abs,ju=String.fromCharCode,va=Object.assign;function jv(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function rm(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function li(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function dr(e,t,n){return e.slice(t,n)}function st(e){return e.length}function om(e){return e.length}function br(e,t){return t.push(e),e}function Cv(e,t){return e.map(t).join("")}function Jc(e,t){return e.filter(function(n){return!mt(n,t)})}var il=1,pr=1,im=0,Ve=0,ne=0,kr="";function ll(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:il,column:pr,length:l,return:"",siblings:s}}function Nt(e,t){return va(ll("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Nt(e.root,{children:[e]});br(e,e.siblings)}function $v(){return ne}function Pv(){return ne=Ve>0?ae(kr,--Ve):0,pr--,ne===10&&(pr=1,il--),ne}function et(){return ne=Ve<im?ae(kr,Ve++):0,pr++,ne===10&&(pr=1,il++),ne}function yn(){return ae(kr,Ve)}function si(){return Ve}function sl(e,t){return dr(kr,e,t)}function ya(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _v(e){return il=pr=1,im=st(kr=e),Ve=0,[]}function Tv(e){return kr="",e}function os(e){return rm(sl(Ve-1,wa(e===91?e+2:e===40?e+1:e)))}function zv(e){for(;(ne=yn())&&ne<33;)et();return ya(e)>2||ya(ne)>3?"":" "}function Ov(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return sl(e,si()+(t<6&&yn()==32&&et()==32))}function wa(e){for(;et();)switch(ne){case e:return Ve;case 34:case 39:e!==34&&e!==39&&wa(ne);break;case 40:e===41&&wa(e);break;case 92:et();break}return Ve}function Rv(e,t){for(;et()&&e+ne!==47+10;)if(e+ne===42+42&&yn()===47)break;return"/*"+sl(t,Ve-1)+"*"+ju(e===47?e:et())}function Nv(e){for(;!ya(yn());)et();return sl(e,Ve)}function Iv(e){return Tv(ai("",null,null,null,[""],e=_v(e),0,[0],e))}function ai(e,t,n,r,o,i,l,s,a){for(var u=0,p=0,g=l,m=0,v=0,y=0,w=1,$=1,d=1,f=0,h="",x=o,E=i,C=r,k=h;$;)switch(y=f,f=et()){case 40:if(y!=108&&ae(k,g-1)==58){li(k+=A(os(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=os(f);break;case 9:case 10:case 13:case 32:k+=zv(y);break;case 92:k+=Ov(si()-1,7);continue;case 47:switch(yn()){case 42:case 47:br(Av(Rv(et(),si()),t,n,a),a);break;default:k+="/"}break;case 123*w:s[u++]=st(k)*d;case 125*w:case 59:case 0:switch(f){case 0:case 125:$=0;case 59+p:d==-1&&(k=A(k,/\f/g,"")),v>0&&st(k)-g&&br(v>32?tf(k+";",r,n,g-1,a):tf(A(k," ","")+";",r,n,g-2,a),a);break;case 59:k+=";";default:if(br(C=ef(k,t,n,u,p,o,s,h,x=[],E=[],g,i),i),f===123)if(p===0)ai(k,t,C,C,x,i,g,s,E);else switch(m===99&&ae(k,3)===110?100:m){case 100:case 108:case 109:case 115:ai(e,C,C,r&&br(ef(e,C,C,0,0,o,s,h,o,x=[],g,E),E),o,E,g,s,r?x:E);break;default:ai(k,C,C,C,[""],E,0,s,E)}}u=p=v=0,w=d=1,h=k="",g=l;break;case 58:g=1+st(k),v=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Pv()==125)continue}switch(k+=ju(f),f*w){case 38:d=p>0?1:(k+="\f",-1);break;case 44:s[u++]=(st(k)-1)*d,d=1;break;case 64:yn()===45&&(k+=os(et())),m=yn(),p=g=st(h=k+=Nv(si())),f++;break;case 45:y===45&&st(k)==2&&(w=0)}}return i}function ef(e,t,n,r,o,i,l,s,a,u,p,g){for(var m=o-1,v=o===0?i:[""],y=om(v),w=0,$=0,d=0;w<r;++w)for(var f=0,h=dr(e,m+1,m=Ev($=l[w])),x=e;f<y;++f)(x=rm($>0?v[f]+" "+h:A(h,/&\f/g,v[f])))&&(a[d++]=x);return ll(e,t,n,o===0?ol:s,a,u,p,g)}function Av(e,t,n,r){return ll(e,t,n,tm,ju($v()),dr(e,2,-2),0,r)}function tf(e,t,n,r,o){return ll(e,t,n,Eu,dr(e,0,r),dr(e,r+1,-1),r,o)}function lm(e,t,n){switch(jv(e,t)){case 5103:return b+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return b+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return b+e+Kr+e+G+e+e;case 5936:switch(ae(e,t+11)){case 114:return b+e+G+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return b+e+G+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return b+e+G+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return b+e+G+e+e;case 6165:return b+e+G+"flex-"+e+e;case 5187:return b+e+A(e,/(\w+).+(:[^]+)/,b+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return b+e+G+"flex-item-"+A(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":G+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return b+e+G+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return b+e+G+A(e,"shrink","negative")+e;case 5292:return b+e+G+A(e,"basis","preferred-size")+e;case 6060:return b+"box-"+A(e,"-grow","")+b+e+G+A(e,"grow","positive")+e;case 4554:return b+A(e,/([^-])(transform)/g,"$1"+b+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,b+"$1"),/(image-set)/,b+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,b+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,b+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+b+e+e;case 4200:if(!mt(e,/flex-|baseline/))return G+"grid-column-align"+dr(e,t)+e;break;case 2592:case 3360:return G+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,mt(r.props,/grid-\w+-end/)})?~li(e+(n=n[t].value),"span")?e:G+A(e,"-start","")+e+G+"grid-row-span:"+(~li(n,"span")?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":G+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:G+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,b+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+b+"$2-$3$1"+Kr+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~li(e,"stretch")?lm(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return G+o+":"+i+u+(l?G+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return A(e,":",":"+b)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+b+(ae(e,14)===45?"inline-":"")+"box$3$1"+b+"$2$3$1"+G+"$2box$3")+e;case 100:return A(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Ai(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Lv(e,t,n,r){switch(e.type){case kv:if(e.children.length)break;case Sv:case Eu:return e.return=e.return||e.value;case tm:return"";case nm:return e.return=e.value+"{"+Ai(e.children,r)+"}";case ol:if(!st(e.value=e.props.join(",")))return""}return st(n=Ai(e.children,r))?e.return=e.value+"{"+n+"}":""}function Mv(e){var t=om(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Dv(e){return function(t){t.root||(t=t.return)&&e(t)}}function bv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Eu:e.return=lm(e.value,e.length,n);return;case nm:return Ai([Nt(e,{value:A(e.value,"@","@"+b)})],r);case ol:if(e.length)return Cv(n=e.props,function(o){switch(mt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Nt(e,{props:[A(o,/:(read-\w+)/,":"+Kr+"$1")]})),On(Nt(e,{props:[o]})),va(e,{props:Jc(n,r)});break;case"::placeholder":On(Nt(e,{props:[A(o,/:(plac\w+)/,":"+b+"input-$1")]})),On(Nt(e,{props:[A(o,/:(plac\w+)/,":"+Kr+"$1")]})),On(Nt(e,{props:[A(o,/:(plac\w+)/,G+"input-$1")]})),On(Nt(e,{props:[o]})),va(e,{props:Jc(n,r)});break}return""})}}var Fv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Cu=typeof window<"u"&&"HTMLElement"in window,Bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),$u=Object.freeze([]),hr=Object.freeze({});function Uv(e,t,n){return n===void 0&&(n=hr),e.theme!==n.theme&&e.theme||t||n.theme}var sm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Hv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vv=/(^-|-$)/g;function nf(e){return e.replace(Hv,"-").replace(Vv,"")}var Wv=/(a)(d)/gi,rf=function(e){return String.fromCharCode(e+(e>25?39:97))};function xa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=rf(t%52)+n;return(rf(t%52)+n).replace(Wv,"$1-$2")}var is,Kn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},am=function(e){return Kn(5381,e)};function Qv(e){return xa(am(e)>>>0)}function Gv(e){return e.displayName||e.name||"Component"}function ls(e){return typeof e=="string"&&!0}var um=typeof Symbol=="function"&&Symbol.for,cm=um?Symbol.for("react.memo"):60115,Xv=um?Symbol.for("react.forward_ref"):60112,Yv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zv=((is={})[Xv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},is[cm]=fm,is);function of(e){return("type"in(t=e)&&t.type.$$typeof)===cm?fm:"$$typeof"in e?Zv[e.$$typeof]:Yv;var t}var qv=Object.defineProperty,Jv=Object.getOwnPropertyNames,lf=Object.getOwnPropertySymbols,ey=Object.getOwnPropertyDescriptor,ty=Object.getPrototypeOf,sf=Object.prototype;function dm(e,t,n){if(typeof t!="string"){if(sf){var r=ty(t);r&&r!==sf&&dm(e,r,n)}var o=Jv(t);lf&&(o=o.concat(lf(t)));for(var i=of(e),l=of(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Kv||n&&n[a]||l&&a in l||i&&a in i)){var u=ey(t,a);try{qv(e,a,u)}catch{}}}}return e}function gr(e){return typeof e=="function"}function Pu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function af(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ho(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sa(e,t,n){if(n===void 0&&(n=!1),!n&&!ho(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sa(e[r],t[r]);else if(ho(t))for(var r in t)e[r]=Sa(e[r],t[r]);return e}function _u(e,t){Object.defineProperty(e,"toString",{value:t})}function jo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ny=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw jo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),ui=new Map,Li=new Map,ss=1,Vo=function(e){if(ui.has(e))return ui.get(e);for(;Li.has(ss);)ss++;var t=ss++;return ui.set(e,t),Li.set(t,e),t},ry=function(e,t){ui.set(e,t),Li.set(t,e)},oy="style[".concat(mr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),iy=new RegExp("^".concat(mr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ly=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},sy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(iy);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(ry(p,u),ly(e,p,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function ay(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){return Array.from(s.querySelectorAll("style[".concat(mr,"]"))).at(-1)}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(mr,"active"),r.setAttribute("data-styled-version","6.0.1");var l=ay();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},uy=function(){function e(t){this.element=pm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw jo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),cy=function(){function e(t){this.element=pm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),uf=Cu,dy={isServer:!Cu,useCSSOMInjection:!Bv},mm=function(){function e(t,n,r){t===void 0&&(t=hr),n===void 0&&(n={});var o=this;this.options=Ce(Ce({},dy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Cu&&uf&&(uf=!1,function(i){for(var l=document.querySelectorAll(oy),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(mr)!=="active"&&(sy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),_u(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(g){var m=function(d){return Li.get(d)}(g);if(m===void 0)return"continue";var v=i.names.get(m),y=l.getGroup(g);if(v===void 0||y.length===0)return"continue";var w="".concat(mr,".g").concat(g,'[id="').concat(m,'"]'),$="";v!==void 0&&v.forEach(function(d){d.length>0&&($+="".concat(d,","))}),a+="".concat(y).concat(w,'{content:"').concat($,'"}').concat(`/*!sc*/
`)},p=0;p<s;p++)u(p);return a}(o)})}return e.registerId=function(t){return Vo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new fy(o):r?new uy(o):new cy(o)}(this.options),new ny(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Vo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Vo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Vo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),py=/&/g,my=/^\s*\/\/.*$/gm;function hm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hm(n.children,t)),n})}function hy(e){var t,n,r,o=e===void 0?hr:e,i=o.options,l=i===void 0?hr:i,s=o.plugins,a=s===void 0?$u:s,u=function(m,v,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},p=a.slice();p.push(function(m){m.type===ol&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(py,n).replace(r,u))}),l.prefix&&p.push(bv),p.push(Lv);var g=function(m,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var $=m.replace(my,""),d=Iv(y||v?"".concat(y," ").concat(v," { ").concat($," }"):$);l.namespace&&(d=hm(d,l.namespace));var f=[];return Ai(d,Mv(p.concat(Dv(function(h){return f.push(h)})))),f};return g.hash=a.length?a.reduce(function(m,v){return v.name||jo(15),Kn(m,v.name)},5381).toString():"",g}var gy=new mm,ka=hy(),gm=xn.createContext({shouldForwardProp:void 0,styleSheet:gy,stylis:ka});gm.Consumer;xn.createContext(void 0);function cf(){return O.useContext(gm)}var vy=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ka);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,_u(this,function(){throw jo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ka),this.name+t.hash},e}(),yy=function(e){return e>="A"&&e<="Z"};function ff(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;yy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vm=function(e){return e==null||e===!1||e===""},ym=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!vm(i)&&(Array.isArray(i)&&i.isCss||gr(i)?r.push("".concat(ff(o),":"),i,";"):ho(i)?r.push.apply(r,Ii(Ii(["".concat(o," {")],ym(i),!1),["}"],!1)):r.push("".concat(ff(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Fv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function wn(e,t,n,r){if(vm(e))return[];if(Pu(e))return[".".concat(e.styledComponentId)];if(gr(e)){if(!gr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return wn(o,t,n,r)}var i;return e instanceof vy?n?(e.inject(n,r),[e.getName(r)]):[e]:ho(e)?ym(e):Array.isArray(e)?e.flatMap(function(l){return wn(l,t,n,r)}):[e.toString()]}function wy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(gr(n)&&!Pu(n))return!1}return!0}var xy=am("6.0.1"),Sy=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&wy(t),this.componentId=n,this.baseHash=Kn(xy,n),this.baseStyle=r,mm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=af(wn(this.rules,t,n,r)),l=xa(Kn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=hn(o,l),this.staticRulesId=l}else{for(var a=Kn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")u+=g;else if(g){var m=af(wn(g,t,n,r));a=Kn(a,m),u+=m}}if(u){var v=xa(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=hn(o,v)}}return o},e}(),wm=xn.createContext(void 0);wm.Consumer;var as={};function ky(e,t,n){var r=Pu(e),o=e,i=!ls(e),l=t.attrs,s=l===void 0?$u:l,a=t.componentId,u=a===void 0?function(x,E){var C=typeof x!="string"?"sc":nf(x);as[C]=(as[C]||0)+1;var k="".concat(C,"-").concat(Qv("6.0.1"+C+as[C]));return E?"".concat(E,"-").concat(k):k}(t.displayName,t.parentComponentId):a,p=t.displayName,g=p===void 0?function(x){return ls(x)?"styled.".concat(x):"Styled(".concat(Gv(x),")")}(e):p,m=t.displayName&&t.componentId?"".concat(nf(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;y=function(x,E){return w(x,E)&&$(x,E)}}else y=w}var d=new Sy(n,m,r?o.componentStyle:void 0);d.isStatic&&s.length;function f(x,E){return function(C,k,z,D){var N=C.attrs,oe=C.componentStyle,on=C.defaultProps,ln=C.foldedComponentIds,Co=C.styledComponentId,zl=C.target,jr=xn.useContext(wm),Cr=cf(),P=C.shouldForwardProp||Cr.shouldForwardProp,R=function($t,Te,dt){for(var $r,an=Ce(Ce({},Te),{className:void 0,theme:dt}),Ol=0;Ol<$t.length;Ol+=1){var $o=gr($r=$t[Ol])?$r(an):$r;for(var Pt in $o)an[Pt]=Pt==="className"?hn(an[Pt],$o[Pt]):Pt==="style"?Ce(Ce({},an[Pt]),$o[Pt]):$o[Pt]}return Te.className&&(an.className=hn(an.className,Te.className)),an}(N,k,Uv(k,jr,on)||hr),I=R.as||zl,H={};for(var V in R)R[V]===void 0||V[0]==="$"||V==="as"||V==="theme"||(V==="forwardedAs"?H.as=R.forwardedAs:P&&!P(V,I)||(H[V]=R[V]));var sn=function($t,Te){var dt=cf(),$r=$t.generateAndInjectStyles(Te,dt.styleSheet,dt.stylis);return $r}(oe,R),Qe=hn(ln,Co);return sn&&(Qe+=" "+sn),R.className&&(Qe+=" "+R.className),H[ls(I)&&!sm.has(I)?"class":"className"]=Qe,H.ref=z,O.createElement(I,H)}(h,x,E)}f.displayName=g;var h=xn.forwardRef(f);return h.attrs=v,h.componentStyle=d,h.displayName=g,h.shouldForwardProp=y,h.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=m,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(E){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var z=0,D=C;z<D.length;z++)Sa(E,D[z],!0);return E}({},o.defaultProps,x):x}}),_u(h,function(){return".".concat(h.styledComponentId)}),i&&dm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function df(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var pf=function(e){return Object.assign(e,{isCss:!0})};function Tu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(gr(e)||ho(e)){var r=e;return pf(wn(df($u,Ii([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?wn(o):pf(wn(df(o,t)))}function Ea(e,t,n){if(n===void 0&&(n=hr),!t)throw jo(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Tu.apply(void 0,Ii([o],i,!1)))};return r.attrs=function(o){return Ea(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ea(e,t,Ce(Ce({},n),o))},r}var xm=function(e){return Ea(ky,e)},S=xm;sm.forEach(function(e){S[e]=xm(e)});const Sm=O.createContext("ThemeContext"),Ey=({children:e})=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),n=window.matchMedia("(prefers-color-scheme: light)"),[r,o]=O.useState(t.matches);return O.useEffect(()=>{document.documentElement.setAttribute("data-theme",r?"dark":"light")},[r]),O.useEffect(()=>{const i=s=>s.matches&&o(!0),l=s=>s.matches&&o(!1);return t.addEventListener("change",i),n.addEventListener("change",l),()=>{t.removeEventListener("change",i),n.removeEventListener("change",l)}}),c.jsx(Sm.Provider,{value:[r,o],children:e})};var km={exports:{}},Em={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vr=O;function jy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Cy=typeof Object.is=="function"?Object.is:jy,$y=vr.useState,Py=vr.useEffect,_y=vr.useLayoutEffect,Ty=vr.useDebugValue;function zy(e,t){var n=t(),r=$y({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return _y(function(){o.value=n,o.getSnapshot=t,us(o)&&i({inst:o})},[e,n,t]),Py(function(){return us(o)&&i({inst:o}),e(function(){us(o)&&i({inst:o})})},[e]),Ty(n),n}function us(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cy(e,n)}catch{return!0}}function Oy(e,t){return t()}var Ry=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Oy:zy;Em.useSyncExternalStore=vr.useSyncExternalStore!==void 0?vr.useSyncExternalStore:Ry;km.exports=Em;var Ny=km.exports,jm={exports:{}},Cm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=O,Iy=Ny;function Ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ly=typeof Object.is=="function"?Object.is:Ay,My=Iy.useSyncExternalStore,Dy=al.useRef,by=al.useEffect,Fy=al.useMemo,By=al.useDebugValue;Cm.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Dy(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=Fy(function(){function a(v){if(!u){if(u=!0,p=v,v=r(v),o!==void 0&&l.hasValue){var y=l.value;if(o(y,v))return g=y}return g=v}if(y=g,Ly(p,v))return y;var w=r(v);return o!==void 0&&o(y,w)?y:(p=v,g=w)}var u=!1,p,g,m=n===void 0?null:n;return[function(){return a(t())},m===null?void 0:function(){return a(m())}]},[t,n,r,o]);var s=My(e,i[0],i[1]);return by(function(){l.hasValue=!0,l.value=s},[s]),By(s),s};jm.exports=Cm;var Uy=jm.exports;function Hy(e){e()}let $m=Hy;const Vy=e=>$m=e,Wy=()=>$m,mf=Symbol.for(`react-redux-context-${O.version}`),hf=globalThis;function Qy(){let e=hf[mf];return e||(e=O.createContext(null),hf[mf]=e),e}const Jt=new Proxy({},new Proxy({},{get(e,t){const n=Qy();return(r,...o)=>Reflect[t](n,...o)}}));function zu(e=Jt){return function(){return O.useContext(e)}}const Pm=zu(),Gy=()=>{throw new Error("uSES not initialized!")};let _m=Gy;const Xy=e=>{_m=e},Yy=(e,t)=>e===t;function Ky(e=Jt){const t=e===Jt?Pm:zu(e);return function(r,o={}){const{equalityFn:i=Yy,stabilityCheck:l=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:u,getServerState:p,stabilityCheck:g,noopCheck:m}=t();O.useRef(!0);const v=O.useCallback({[r.name](w){return r(w)}}[r.name],[r,g,l]),y=_m(u.addNestedSub,a.getState,p||a.getState,v,i);return O.useDebugValue(y),y}}const Ct=Ky();var Tm={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Ou=ce?Symbol.for("react.element"):60103,Ru=ce?Symbol.for("react.portal"):60106,ul=ce?Symbol.for("react.fragment"):60107,cl=ce?Symbol.for("react.strict_mode"):60108,fl=ce?Symbol.for("react.profiler"):60114,dl=ce?Symbol.for("react.provider"):60109,pl=ce?Symbol.for("react.context"):60110,Nu=ce?Symbol.for("react.async_mode"):60111,ml=ce?Symbol.for("react.concurrent_mode"):60111,hl=ce?Symbol.for("react.forward_ref"):60112,gl=ce?Symbol.for("react.suspense"):60113,Zy=ce?Symbol.for("react.suspense_list"):60120,vl=ce?Symbol.for("react.memo"):60115,yl=ce?Symbol.for("react.lazy"):60116,qy=ce?Symbol.for("react.block"):60121,Jy=ce?Symbol.for("react.fundamental"):60117,e0=ce?Symbol.for("react.responder"):60118,t0=ce?Symbol.for("react.scope"):60119;function Me(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ou:switch(e=e.type,e){case Nu:case ml:case ul:case fl:case cl:case gl:return e;default:switch(e=e&&e.$$typeof,e){case pl:case hl:case yl:case vl:case dl:return e;default:return t}}case Ru:return t}}}function zm(e){return Me(e)===ml}B.AsyncMode=Nu;B.ConcurrentMode=ml;B.ContextConsumer=pl;B.ContextProvider=dl;B.Element=Ou;B.ForwardRef=hl;B.Fragment=ul;B.Lazy=yl;B.Memo=vl;B.Portal=Ru;B.Profiler=fl;B.StrictMode=cl;B.Suspense=gl;B.isAsyncMode=function(e){return zm(e)||Me(e)===Nu};B.isConcurrentMode=zm;B.isContextConsumer=function(e){return Me(e)===pl};B.isContextProvider=function(e){return Me(e)===dl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ou};B.isForwardRef=function(e){return Me(e)===hl};B.isFragment=function(e){return Me(e)===ul};B.isLazy=function(e){return Me(e)===yl};B.isMemo=function(e){return Me(e)===vl};B.isPortal=function(e){return Me(e)===Ru};B.isProfiler=function(e){return Me(e)===fl};B.isStrictMode=function(e){return Me(e)===cl};B.isSuspense=function(e){return Me(e)===gl};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ul||e===ml||e===fl||e===cl||e===gl||e===Zy||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===vl||e.$$typeof===dl||e.$$typeof===pl||e.$$typeof===hl||e.$$typeof===Jy||e.$$typeof===e0||e.$$typeof===t0||e.$$typeof===qy)};B.typeOf=Me;Tm.exports=B;var n0=Tm.exports,Om=n0,r0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rm={};Rm[Om.ForwardRef]=r0;Rm[Om.Memo]=o0;var U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),Au=Symbol.for("react.portal"),wl=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),kl=Symbol.for("react.provider"),El=Symbol.for("react.context"),i0=Symbol.for("react.server_context"),jl=Symbol.for("react.forward_ref"),Cl=Symbol.for("react.suspense"),$l=Symbol.for("react.suspense_list"),Pl=Symbol.for("react.memo"),_l=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),Nm;Nm=Symbol.for("react.module.reference");function We(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Iu:switch(e=e.type,e){case wl:case Sl:case xl:case Cl:case $l:return e;default:switch(e=e&&e.$$typeof,e){case i0:case El:case jl:case _l:case Pl:case kl:return e;default:return t}}case Au:return t}}}U.ContextConsumer=El;U.ContextProvider=kl;U.Element=Iu;U.ForwardRef=jl;U.Fragment=wl;U.Lazy=_l;U.Memo=Pl;U.Portal=Au;U.Profiler=Sl;U.StrictMode=xl;U.Suspense=Cl;U.SuspenseList=$l;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return We(e)===El};U.isContextProvider=function(e){return We(e)===kl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Iu};U.isForwardRef=function(e){return We(e)===jl};U.isFragment=function(e){return We(e)===wl};U.isLazy=function(e){return We(e)===_l};U.isMemo=function(e){return We(e)===Pl};U.isPortal=function(e){return We(e)===Au};U.isProfiler=function(e){return We(e)===Sl};U.isStrictMode=function(e){return We(e)===xl};U.isSuspense=function(e){return We(e)===Cl};U.isSuspenseList=function(e){return We(e)===$l};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===wl||e===Sl||e===xl||e===Cl||e===$l||e===l0||typeof e=="object"&&e!==null&&(e.$$typeof===_l||e.$$typeof===Pl||e.$$typeof===kl||e.$$typeof===El||e.$$typeof===jl||e.$$typeof===Nm||e.getModuleId!==void 0)};U.typeOf=We;function s0(){const e=Wy();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const gf={notify(){},get:()=>[]};function a0(e,t){let n,r=gf;function o(g){return a(),r.subscribe(g)}function i(){r.notify()}function l(){p.onStateChange&&p.onStateChange()}function s(){return!!n}function a(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=s0())}function u(){n&&(n(),n=void 0,r.clear(),r=gf)}const p={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:s,trySubscribe:a,tryUnsubscribe:u,getListeners:()=>r};return p}const u0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",c0=u0?O.useLayoutEffect:O.useEffect;function f0({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const l=O.useMemo(()=>{const u=a0(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=O.useMemo(()=>e.getState(),[e]);c0(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,s]);const a=t||Jt;return xn.createElement(a.Provider,{value:l},n)}function Im(e=Jt){const t=e===Jt?Pm:zu(e);return function(){const{store:r}=t();return r}}const d0=Im();function p0(e=Jt){const t=e===Jt?d0:Im(e);return function(){return t().dispatch}}const Tl=p0();Xy(Uy.useSyncExternalStoreWithSelector);Vy(em.unstable_batchedUpdates);function Ze(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function en(e){return!!e&&!!e[Y]}function Et(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===k0}(e)||Array.isArray(e)||!!e[Ef]||!!(!((t=e.constructor)===null||t===void 0)&&t[Ef])||Lu(e)||Mu(e))}function $n(e,t,n){n===void 0&&(n=!1),Er(e)===0?(n?Object.keys:or)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Er(e){var t=e[Y];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Lu(e)?2:Mu(e)?3:0}function rr(e,t){return Er(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function m0(e,t){return Er(e)===2?e.get(t):e[t]}function Am(e,t,n){var r=Er(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Lm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Lu(e){return x0&&e instanceof Map}function Mu(e){return S0&&e instanceof Set}function fn(e){return e.o||e.t}function Du(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Dm(e);delete t[Y];for(var n=or(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function bu(e,t){return t===void 0&&(t=!1),Fu(e)||en(e)||!Et(e)||(Er(e)>1&&(e.set=e.add=e.clear=e.delete=h0),Object.freeze(e),t&&$n(e,function(n,r){return bu(r,!0)},!0)),e}function h0(){Ze(2)}function Fu(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function ft(e){var t=Pa[e];return t||Ze(18,e),t}function g0(e,t){Pa[e]||(Pa[e]=t)}function ja(){return go}function cs(e,t){t&&(ft("Patches"),e.u=[],e.s=[],e.v=t)}function Mi(e){Ca(e),e.p.forEach(v0),e.p=null}function Ca(e){e===go&&(go=e.l)}function vf(e){return go={p:[],l:go,h:e,m:!0,_:0}}function v0(e){var t=e[Y];t.i===0||t.i===1?t.j():t.g=!0}function fs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||ft("ES5").S(t,e,r),r?(n[Y].P&&(Mi(t),Ze(4)),Et(e)&&(e=Di(t,e),t.l||bi(t,e)),t.u&&ft("Patches").M(n[Y].t,e,t.u,t.s)):e=Di(t,n,[]),Mi(t),t.u&&t.v(t.u,t.s),e!==Mm?e:void 0}function Di(e,t,n){if(Fu(t))return t;var r=t[Y];if(!r)return $n(t,function(s,a){return yf(e,r,t,s,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return bi(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Du(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),$n(i,function(s,a){return yf(e,r,o,s,a,n,l)}),bi(e,o,!1),n&&e.u&&ft("Patches").N(r,n,e.u,e.s)}return r.o}function yf(e,t,n,r,o,i,l){if(en(o)){var s=Di(e,o,i&&t&&t.i!==3&&!rr(t.R,r)?i.concat(r):void 0);if(Am(n,r,s),!en(s))return;e.m=!1}else l&&n.add(o);if(Et(o)&&!Fu(o)){if(!e.h.D&&e._<1)return;Di(e,o),t&&t.A.l||bi(e,o)}}function bi(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&bu(t,n)}function ds(e,t){var n=e[Y];return(n?fn(n):e)[t]}function wf(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dt(e){e.P||(e.P=!0,e.l&&Dt(e.l))}function ps(e){e.o||(e.o=Du(e.t))}function $a(e,t,n){var r=Lu(t)?ft("MapSet").F(t,n):Mu(t)?ft("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),s={i:l?1:0,A:i?i.A:ja(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},a=s,u=vo;l&&(a=[s],u=Fr);var p=Proxy.revocable(a,u),g=p.revoke,m=p.proxy;return s.k=m,s.j=g,m}(t,n):ft("ES5").J(t,n);return(n?n.A:ja()).p.push(r),r}function y0(e){return en(e)||Ze(22,e),function t(n){if(!Et(n))return n;var r,o=n[Y],i=Er(n);if(o){if(!o.P&&(o.i<4||!ft("ES5").K(o)))return o.t;o.I=!0,r=xf(n,i),o.I=!1}else r=xf(n,i);return $n(r,function(l,s){o&&m0(o.t,l)===s||Am(r,l,t(s))}),i===3?new Set(r):r}(e)}function xf(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Du(e)}function w0(){function e(i,l){var s=o[i];return s?s.enumerable=l:o[i]=s={configurable:!0,enumerable:l,get:function(){var a=this[Y];return vo.get(a,i)},set:function(a){var u=this[Y];vo.set(u,i,a)}},s}function t(i){for(var l=i.length-1;l>=0;l--){var s=i[l][Y];if(!s.P)switch(s.i){case 5:r(s)&&Dt(s);break;case 4:n(s)&&Dt(s)}}}function n(i){for(var l=i.t,s=i.k,a=or(s),u=a.length-1;u>=0;u--){var p=a[u];if(p!==Y){var g=l[p];if(g===void 0&&!rr(l,p))return!0;var m=s[p],v=m&&m[Y];if(v?v.t!==g:!Lm(m,g))return!0}}var y=!!l[Y];return a.length!==or(l).length+(y?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(l,l.length-1);if(s&&!s.get)return!0;for(var a=0;a<l.length;a++)if(!l.hasOwnProperty(a))return!0;return!1}var o={};g0("ES5",{J:function(i,l){var s=Array.isArray(i),a=function(p,g){if(p){for(var m=Array(g.length),v=0;v<g.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var y=Dm(g);delete y[Y];for(var w=or(y),$=0;$<w.length;$++){var d=w[$];y[d]=e(d,p||!!y[d].enumerable)}return Object.create(Object.getPrototypeOf(g),y)}(s,i),u={i:s?5:4,A:l?l.A:ja(),P:!1,I:!1,R:{},l,t:i,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,Y,{value:u,writable:!0}),a},S:function(i,l,s){s?en(l)&&l[Y].A===i&&t(i.p):(i.u&&function a(u){if(u&&typeof u=="object"){var p=u[Y];if(p){var g=p.t,m=p.k,v=p.R,y=p.i;if(y===4)$n(m,function(h){h!==Y&&(g[h]!==void 0||rr(g,h)?v[h]||a(m[h]):(v[h]=!0,Dt(p)))}),$n(g,function(h){m[h]!==void 0||rr(m,h)||(v[h]=!1,Dt(p))});else if(y===5){if(r(p)&&(Dt(p),v.length=!0),m.length<g.length)for(var w=m.length;w<g.length;w++)v[w]=!1;else for(var $=g.length;$<m.length;$++)v[$]=!0;for(var d=Math.min(m.length,g.length),f=0;f<d;f++)m.hasOwnProperty(f)||(v[f]=!0),v[f]===void 0&&a(m[f])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var Sf,go,Bu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",x0=typeof Map<"u",S0=typeof Set<"u",kf=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Mm=Bu?Symbol.for("immer-nothing"):((Sf={})["immer-nothing"]=!0,Sf),Ef=Bu?Symbol.for("immer-draftable"):"__$immer_draftable",Y=Bu?Symbol.for("immer-state"):"__$immer_state",k0=""+Object.prototype.constructor,or=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Dm=Object.getOwnPropertyDescriptors||function(e){var t={};return or(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Pa={},vo={get:function(e,t){if(t===Y)return e;var n=fn(e);if(!rr(n,t))return function(o,i,l){var s,a=wf(i,l);return a?"value"in a?a.value:(s=a.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Et(r)?r:r===ds(e.t,t)?(ps(e),e.o[t]=$a(e.A.h,r,e)):r},has:function(e,t){return t in fn(e)},ownKeys:function(e){return Reflect.ownKeys(fn(e))},set:function(e,t,n){var r=wf(fn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=ds(fn(e),t),i=o==null?void 0:o[Y];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Lm(n,o)&&(n!==void 0||rr(e.t,t)))return!0;ps(e),Dt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return ds(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ps(e),Dt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=fn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ze(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ze(12)}},Fr={};$n(vo,function(e,t){Fr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Fr.deleteProperty=function(e,t){return Fr.set.call(this,e,t,void 0)},Fr.set=function(e,t,n){return vo.set.call(this,e[0],t,n,e[0])};var E0=function(){function e(n){var r=this;this.O=kf,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var a=r;return function(w){var $=this;w===void 0&&(w=s);for(var d=arguments.length,f=Array(d>1?d-1:0),h=1;h<d;h++)f[h-1]=arguments[h];return a.produce(w,function(x){var E;return(E=i).call.apply(E,[$,x].concat(f))})}}var u;if(typeof i!="function"&&Ze(6),l!==void 0&&typeof l!="function"&&Ze(7),Et(o)){var p=vf(r),g=$a(r,o,void 0),m=!0;try{u=i(g),m=!1}finally{m?Mi(p):Ca(p)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(w){return cs(p,l),fs(w,p)},function(w){throw Mi(p),w}):(cs(p,l),fs(u,p))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===Mm&&(u=void 0),r.D&&bu(u,!0),l){var v=[],y=[];ft("Patches").M(o,u,v,y),l(v,y)}return u}Ze(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var p=arguments.length,g=Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(g))})};var l,s,a=r.produce(o,i,function(u,p){l=u,s=p});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,l,s]}):[a,l,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Et(n)||Ze(8),en(n)&&(n=y0(n));var r=vf(this),o=$a(this,n,void 0);return o[Y].C=!0,Ca(r),o},t.finishDraft=function(n,r){var o=n&&n[Y],i=o.A;return cs(i,r),fs(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!kf&&Ze(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=ft("Patches").$;return en(n)?l(n,r):this.produce(n,function(s){return l(s,r)})},e}(),Ie=new E0,bm=Ie.produce;Ie.produceWithPatches.bind(Ie);Ie.setAutoFreeze.bind(Ie);Ie.setUseProxies.bind(Ie);Ie.applyPatches.bind(Ie);Ie.createDraft.bind(Ie);Ie.finishDraft.bind(Ie);function yo(e){"@babel/helpers - typeof";return yo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yo(e)}function j0(e,t){if(yo(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(yo(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function C0(e){var t=j0(e,"string");return yo(t)==="symbol"?t:String(t)}function $0(e,t,n){return t=C0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Cf(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jf(Object(n),!0).forEach(function(r){$0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ge(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var $f=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ms=function(){return Math.random().toString(36).substring(7).split("").join(".")},Fi={INIT:"@@redux/INIT"+ms(),REPLACE:"@@redux/REPLACE"+ms(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ms()}};function P0(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Fm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ge(1));return n(Fm)(e,t)}if(typeof e!="function")throw new Error(ge(2));var o=e,i=t,l=[],s=l,a=!1;function u(){s===l&&(s=l.slice())}function p(){if(a)throw new Error(ge(3));return i}function g(w){if(typeof w!="function")throw new Error(ge(4));if(a)throw new Error(ge(5));var $=!0;return u(),s.push(w),function(){if($){if(a)throw new Error(ge(6));$=!1,u();var f=s.indexOf(w);s.splice(f,1),l=null}}}function m(w){if(!P0(w))throw new Error(ge(7));if(typeof w.type>"u")throw new Error(ge(8));if(a)throw new Error(ge(9));try{a=!0,i=o(i,w)}finally{a=!1}for(var $=l=s,d=0;d<$.length;d++){var f=$[d];f()}return w}function v(w){if(typeof w!="function")throw new Error(ge(10));o=w,m({type:Fi.REPLACE})}function y(){var w,$=g;return w={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(ge(11));function h(){f.next&&f.next(p())}h();var x=$(h);return{unsubscribe:x}}},w[$f]=function(){return this},w}return m({type:Fi.INIT}),r={dispatch:m,subscribe:g,getState:p,replaceReducer:v},r[$f]=y,r}function _0(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Fi.INIT});if(typeof r>"u")throw new Error(ge(12));if(typeof n(void 0,{type:Fi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function T0(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{_0(n)}catch(s){l=s}return function(a,u){if(a===void 0&&(a={}),l)throw l;for(var p=!1,g={},m=0;m<i.length;m++){var v=i[m],y=n[v],w=a[v],$=y(w,u);if(typeof $>"u")throw u&&u.type,new Error(ge(14));g[v]=$,p=p||$!==w}return p=p||i.length!==Object.keys(a).length,p?g:a}}function Bi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function z0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(ge(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(a){return a(l)});return i=Bi.apply(void 0,s)(o.dispatch),Cf(Cf({},o),{},{dispatch:i})}}}function Bm(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(s){return typeof s=="function"?s(o,i,e):l(s)}}};return t}var Um=Bm();Um.withExtraArgument=Bm;const Pf=Um;var Hm=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),O0=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(p){return a([u,p])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(p){u=[6,p],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},yr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},R0=Object.defineProperty,N0=Object.defineProperties,I0=Object.getOwnPropertyDescriptors,_f=Object.getOwnPropertySymbols,A0=Object.prototype.hasOwnProperty,L0=Object.prototype.propertyIsEnumerable,Tf=function(e,t,n){return t in e?R0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Yt=function(e,t){for(var n in t||(t={}))A0.call(t,n)&&Tf(e,n,t[n]);if(_f)for(var r=0,o=_f(t);r<o.length;r++){var n=o[r];L0.call(t,n)&&Tf(e,n,t[n])}return e},hs=function(e,t){return N0(e,I0(t))},M0=function(e,t,n){return new Promise(function(r,o){var i=function(a){try{s(n.next(a))}catch(u){o(u)}},l=function(a){try{s(n.throw(a))}catch(u){o(u)}},s=function(a){return a.done?r(a.value):Promise.resolve(a.value).then(i,l)};s((n=n.apply(e,t)).next())})},D0=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Bi:Bi.apply(null,arguments)};function b0(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var F0=function(e){Hm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,yr([void 0],n[0].concat(this)))):new(t.bind.apply(t,yr([void 0],n.concat(this))))},t}(Array),B0=function(e){Hm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,yr([void 0],n[0].concat(this)))):new(t.bind.apply(t,yr([void 0],n.concat(this))))},t}(Array);function _a(e){return Et(e)?bm(e,function(){}):e}function U0(e){return typeof e=="boolean"}function H0(){return function(t){return V0(t)}}function V0(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new F0;return n&&(U0(n)?r.push(Pf):r.push(Pf.withExtraArgument(n.extraArgument))),r}var W0=!0;function Q0(e){var t=H0(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,s=n.devTools,a=s===void 0?!0:s,u=n.preloadedState,p=u===void 0?void 0:u,g=n.enhancers,m=g===void 0?void 0:g,v;if(typeof o=="function")v=o;else if(b0(o))v=T0(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=l;typeof y=="function"&&(y=y(t));var w=z0.apply(void 0,y),$=Bi;a&&($=D0(Yt({trace:!W0},typeof a=="object"&&a)));var d=new B0(w),f=d;Array.isArray(m)?f=yr([w],m):typeof m=="function"&&(f=m(d));var h=$.apply(void 0,f);return Fm(v,p,h)}function Kt(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return Yt(Yt({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Vm(e){var t={},n=[],r,o={addCase:function(i,l){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function G0(e){return typeof e=="function"}function X0(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Vm(t):[t,n,r],i=o[0],l=o[1],s=o[2],a;if(G0(e))a=function(){return _a(e())};else{var u=_a(e);a=function(){return u}}function p(g,m){g===void 0&&(g=a());var v=yr([i[m.type]],l.filter(function(y){var w=y.matcher;return w(m)}).map(function(y){var w=y.reducer;return w}));return v.filter(function(y){return!!y}).length===0&&(v=[s]),v.reduce(function(y,w){if(w)if(en(y)){var $=y,d=w($,m);return d===void 0?y:d}else{if(Et(y))return bm(y,function(f){return w(f,m)});var d=w(y,m);if(d===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return d}return y},g)}return p.getInitialState=a,p}function Y0(e,t){return e+"/"+t}function K0(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:_a(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},s={};o.forEach(function(p){var g=r[p],m=Y0(t,p),v,y;"reducer"in g?(v=g.reducer,y=g.prepare):v=g,i[p]=v,l[m]=v,s[p]=y?Kt(m,y):Kt(m)});function a(){var p=typeof e.extraReducers=="function"?Vm(e.extraReducers):[e.extraReducers],g=p[0],m=g===void 0?{}:g,v=p[1],y=v===void 0?[]:v,w=p[2],$=w===void 0?void 0:w,d=Yt(Yt({},m),l);return X0(n,function(f){for(var h in d)f.addCase(h,d[h]);for(var x=0,E=y;x<E.length;x++){var C=E[x];f.addMatcher(C.matcher,C.reducer)}$&&f.addDefaultCase($)})}var u;return{name:t,reducer:function(p,g){return u||(u=a()),u(p,g)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var Z0="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",q0=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Z0[Math.random()*64|0];return t},J0=["name","message","stack","code"],gs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),zf=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),e1=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=J0;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Kt(t+"/fulfilled",function(u,p,g,m){return{payload:u,meta:hs(Yt({},m||{}),{arg:g,requestId:p,requestStatus:"fulfilled"})}}),i=Kt(t+"/pending",function(u,p,g){return{payload:void 0,meta:hs(Yt({},g||{}),{arg:p,requestId:u,requestStatus:"pending"})}}),l=Kt(t+"/rejected",function(u,p,g,m,v){return{payload:m,error:(r&&r.serializeError||e1)(u||"Rejected"),meta:hs(Yt({},v||{}),{arg:g,requestId:p,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function a(u){return function(p,g,m){var v=r!=null&&r.idGenerator?r.idGenerator(u):q0(),y=new s,w;function $(f){w=f,y.abort()}var d=function(){return M0(this,null,function(){var f,h,x,E,C,k,z;return O0(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),E=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:g,extra:m}),n1(E)?[4,E]:[3,2];case 1:E=D.sent(),D.label=2;case 2:if(E===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(N,oe){return y.signal.addEventListener("abort",function(){return oe({name:"AbortError",message:w||"Aborted"})})}),p(i(v,u,(h=r==null?void 0:r.getPendingMeta)==null?void 0:h.call(r,{requestId:v,arg:u},{getState:g,extra:m}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:p,getState:g,extra:m,requestId:v,signal:y.signal,abort:$,rejectWithValue:function(N,oe){return new gs(N,oe)},fulfillWithValue:function(N,oe){return new zf(N,oe)}})).then(function(N){if(N instanceof gs)throw N;return N instanceof zf?o(N.payload,v,u,N.meta):o(N,v,u)})])];case 3:return x=D.sent(),[3,5];case 4:return k=D.sent(),x=k instanceof gs?l(null,v,u,k.payload,k.meta):l(k,v,u),[3,5];case 5:return z=r&&!r.dispatchConditionRejection&&l.match(x)&&x.meta.condition,z||p(x),[2,x]}})})}();return Object.assign(d,{abort:$,requestId:v,arg:u,unwrap:function(){return d.then(t1)}})}}return Object.assign(a,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function t1(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function n1(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Uu="listenerMiddleware";Kt(Uu+"/add");Kt(Uu+"/removeAll");Kt(Uu+"/remove");var Of;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);w0();const r1=e=>document.getElementById(e).scrollIntoView({behavior:"smooth"}),Wm=K0({name:"scrollReducer",initialState:{current:"Home1"},reducers:{change:(e,t)=>{e.current=t.payload},scroll:(e,t)=>{r1(t.payload)}}}),{change:o1,scroll:Qm}=Wm.actions,i1=Wm.reducer,_="768px";var l1;const s1=()=>{const[e,t]=O.useState(!1),[n,r]=O.useContext(Sm),o=Ct(u=>u.scrollReducer).current,i=Tl(),l=O.useCallback(u=>{clearTimeout(l1),setTimeout(()=>t(!1),u)},[]),s=O.useCallback(u=>{if(u.target.checked){t(!0);return}l(0)},[]),a=O.useCallback(u=>{i(Qm(u))});return O.useEffect(()=>{e&&l(1500)},[o]),c.jsxs(f1,{children:[c.jsx(a1,{isDark:n,onChange:u=>r(!u.target.checked)}),c.jsx(u1,{mobileMenuShown:e,onChange:s}),c.jsxs(d1,{$mobileMenuShown:e,children:[c.jsx(Wo,{section:"Home",label:"Home",currentSection:o,onClick:a}),c.jsx(Wo,{section:"Experiences",label:"Skills",currentSection:o,onClick:a}),c.jsx(Wo,{section:"Projects",label:"Projects",currentSection:o,onClick:a}),c.jsx(Wo,{section:"Contact",label:"Contact",currentSection:o,onClick:a})]})]})},Wo=({section:e,label:t,currentSection:n,onClick:r})=>c.jsx(p1,{selected:n.startsWith(e),onClick:()=>r(e),children:t}),a1=({isDark:e,onChange:t})=>c.jsx("div",{className:"toggle-switch",children:c.jsxs("label",{className:"switch-label",children:[c.jsx("input",{type:"checkbox",className:"checkbox",checked:!e,onChange:t}),c.jsx("span",{className:"slider"})]})}),u1=({mobileMenuShown:e,onChange:t})=>c.jsxs(c1,{className:"container",children:[c.jsx("input",{type:"checkbox",checked:e,onChange:t}),c.jsxs("div",{className:"checkmark",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),c1=S.label`
    opacity: 0;
    position: absolute;
    visibility: hidden;
    @media (max-width: ${_}){
        position: static;
        visibility: visible;
        position: relative;
        opacity: 1;
        transition: opacity 1s ease;
    }
`,f1=S.nav`
    position: relative;
    display: flex;
    gap: .5rem;
    align-items: center;

`,d1=S.nav`
    display: flex;
    gap: .5rem;
    align-items: center;

    @media (max-width: ${_}){

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
`,p1=S.span`
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

    @media (max-width: ${_}){
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
`;var Rf;const m1=()=>{const[e,t]=O.useState(!1),[n,r]=O.useState(!1);O.useState({visible:!0,text:"Portfolio"}),Ct(i=>i.scrollReducer).current;const o=O.useCallback(i=>{t(!0),clearTimeout(Rf),Rf=setTimeout(()=>t(!1),1200)},[]);return O.useEffect(()=>{const i=document.getElementById("vertical-stack");return i.addEventListener("scroll",o),setTimeout(()=>r(!0),1e3),()=>i.removeEventListener("scroll",o)},[]),c.jsxs(v1,{$shouldAppear:n,$shouldBlur:e,children:[c.jsx(y1,{children:"Portfolio"}),c.jsx(s1,{})]})},h1=Tu`
    background-color: var(--header-background);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`,g1=Tu`
    background-color: var(--header-background-transparent);
    box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
    `,v1=S.header`
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
    ${e=>e.$shouldBlur?g1:h1}
    transition: all .7s ease;
`,y1=S.span`
    /* Dimensions */
    font-size: 1rem;
    font-weight: bold;
`;function Tn(e){const t=O.useRef(),n=Tl(),r=O.useMemo(()=>new IntersectionObserver(([o])=>o.isIntersecting&&n(o1(e)),{threshold:.8}),[t]);return O.useEffect(()=>(r.observe(t.current),()=>r.disconnect()),[]),t}const w1="/assets/profile-0be43a27.jpg",x1="/assets/technologies-nolabel-8d4a8bca.png",S1=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e)},[i]),c.jsx(k1,{ref:o,id:e,children:c.jsxs(E1,{children:[c.jsxs(j1,{$visible:n,children:[c.jsx(Nf,{children:"Hello,"}),c.jsx("br",{}),c.jsx(C1,{children:"Great to see "}),c.jsx(Nf,{children:"You Here!"})]}),c.jsx(If,{$visible:n}),c.jsxs($1,{$visible:n,children:[c.jsx(P1,{src:w1,alt:"Nazim's Profile Image"}),c.jsxs("div",{children:[c.jsx(T1,{children:"I'm"})," ",c.jsx(z1,{children:"Nazim"}),c.jsx("br",{}),c.jsxs(_1,{children:["A Passionate Learner, Meticulous in Details, and Enthusiast in ",c.jsx("br",{}),"Software Development"]})]})]}),c.jsx(If,{$visible:n}),c.jsx(O1,{src:x1,$visible:n,alt:"Main Technology Stack"})]})})},k1=S.section`
  position: relative;
`,E1=S.article`
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
`,j1=S.div`
  color: var(--primary-text-color);
  font-size: 1.5rem;

  /* Display */
  transition-delay: ${e=>e.$visible?".1s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};

  @media (max-width: ${_}) {
    font-size: 1.2rem;
  }
`,C1=S.span`
  font-weight: 300;
`,Nf=S.span`
  font-weight: bold;
`,If=S.div`
  height: .2rem;
  width: 1rem;
  background-color: var(--separator-color);
  border-radius: 1rem;

  /* Display */
  transition-delay: ${e=>e.$visible?"1.3s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
`,$1=S.div`
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

  @media (max-width: ${_}) {
    max-width: calc(100vw - 5rem);
  }
`,P1=S.img`
  max-width: 9rem;;
  border-radius: 35%;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${_}) {
    max-width: 7rem;
  }
`,_1=S.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: .5rem;
  line-height: 1.5;
  @media (max-width: ${_}) {
    font-size: 1.1rem;
  }
`,T1=S.span`
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: ${_}) {
    font-size: 1.3rem;
  }
  `,z1=S.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary-color);
  @media (max-width: ${_}) {
    font-size: 1.3rem;
  }
`,O1=S.img`
  max-width: 20rem;
  width: calc(100vw / 2);

  /* Display */
  transition-delay: ${e=>e.$visible?"1.8s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
  
  @media (max-width: ${_}) {
    max-width: 16rem;
    width: 90%;
  }
`,R1="/assets/Python-c66002c1.png",N1="/assets/JavaScript-e323aa50.png",I1="/assets/Django-c4cb7efd.png",A1="/assets/Postgresql-11433c8a.png",L1="/assets/HTML-b866745b.png",M1="/assets/CSS-4caa5335.png",D1="/assets/NGINX-57734961.png",b1="/assets/React-e05d3e8d.png",F1="/assets/Redis-107a7fc9.png",B1="/assets/Docker-3a53ff2c.png",Af=({title:e,text:t})=>c.jsx(U1,{children:c.jsx(H1,{children:t})}),U1=S.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${_}){
      text-align: start;
  }
  `;S.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
`;const H1=S.p`
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

`,Hu=({title:e="Technologies",technologies:t=[]})=>c.jsxs(V1,{children:[c.jsx(W1,{children:e}),c.jsx(Q1,{children:t.map((n,r)=>c.jsx(G1,{children:n},r))})]}),V1=S.div`
  position: relative;
  font-size: .8rem;
  `,W1=S.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

    /* @media (min-width: ${_}){
      text-align: center;
    } */
    
`,Q1=S.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  gap: .5rem;
  white-space: nowrap;
/* 
  @media (min-width: ${_}){
      justify-content: center;
  }

  @media (max-width: ${_}){
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    overflow-x: auto;
  } */
`,G1=S.div`
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
    @media (min-width: ${_}){

      &:nth-child(odd) {
        color: var(--primary-color);
        background-color: var(--background-tags-color);
       }
    &:nth-child(even) {
        color: var(--secondary-text-color);
        background-color: var(--background-tags-color);
      }
  } */

`,Lf=({startingYear:e,endingYear:t,title:n,company:r})=>c.jsxs(X1,{children:[c.jsxs(Y1,{children:[c.jsx(Mf,{children:e}),c.jsx(K1,{}),c.jsx(Mf,{children:t})]}),c.jsx(Z1,{children:n}),c.jsx(q1,{children:r})]}),X1=S.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${_}){
      text-align: start;
  }
`,Y1=S.div`
    display: flex;
    align-items: center;
    gap: .4rem;
    justify-content: center;

    @media (max-width: ${_}){
      justify-content: start;
  }
    `,Mf=S.span`
    color: var(--primary-color);
    font-weight: 600;
`,K1=S.div`
    height: .1rem;
    width: 1rem;
    border-radius: 99rem;
    background-color: var(--primary-color);
`,Z1=S.p`
    font-size: 1.2rem;
    font-weight: 700;

`,q1=S.p`
    font-size: .8rem;
    color: var(--primary-color);
    font-weight: 600;
`;S.div`
  position: relative;
  font-size: .8rem;
  `;S.p`
    color: var(--primary-text-color);
    font-weight: 600;
    font-size: .8rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`;S.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;S.div`
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

`;const J1=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(ew,{ref:o,id:e,$visible:n,children:[c.jsxs(tw,{children:[c.jsx(nw,{children:"Skills & Experience"}),c.jsxs(Df,{children:["With expertise in ",c.jsx(Tt,{children:"HTML"}),", ",c.jsx(Tt,{children:"CSS"}),", ",c.jsx(Tt,{children:"JavaScript"}),",  ",c.jsx(Tt,{children:"React"}),",  ",c.jsx(Tt,{children:"Python"}),",  ",c.jsx(Tt,{children:"Django"}),",  ",c.jsx(Tt,{children:"Redis"})," and ",c.jsx(Tt,{children:"Docker"}),", I specialize in creating captivating user interfaces that seamlessly integrate with the robust APIs and well-managed databases I craft."]}),c.jsxs(Df,{children:["Visit my ",c.jsx(rw,{href:"https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",target:"_blank",children:"Linkedin"})," for more details."]})]}),c.jsxs(lw,{children:[c.jsxs(rt,{children:[c.jsx(ot,{src:A1,alt:"Postgresql Logo"}),c.jsx(it,{children:"Postgresql"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:R1,alt:"Python Logo"}),c.jsx(it,{children:"Python"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:I1,alt:"Django Logo"}),c.jsx(it,{children:"Django"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:F1,alt:"Redis Logo"}),c.jsx(it,{children:"Redis"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:L1,alt:"HTML Logo"}),c.jsx(it,{children:"HTML"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:M1,alt:"CSS Logo"}),c.jsx(it,{children:"CSS"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:N1,alt:"JavaScript Logo"}),c.jsx(it,{children:"JavaScript"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:b1,alt:"ReactJS Logo"}),c.jsx(it,{children:"React"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:D1,alt:"NGINX Logo"}),c.jsx(it,{children:"NGINX"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:B1,alt:"Docker Logo"}),c.jsx(it,{children:"Docker"})]})]}),c.jsxs(ow,{children:[c.jsxs(bf,{children:[c.jsx(Lf,{startingYear:"2019",endingYear:"2023",title:"Software Developer",company:"Anep Communication & Signalétique - Algiers"}),c.jsx(Af,{title:"Projects & Goals",text:"Two projects were undertaken: one to design and develop a tailored information system for automating and streamlining business processes across departments, and the other to enhance the existing system by adding applications and features. The focus was on improving functionality, seamless integration, and delivering an enhanced user experience, increased productivity, and smoother operations across departments."})]}),c.jsxs(bf,{children:[c.jsx(Lf,{startingYear:"2022",endingYear:"2023",title:"Full Stack Developer",company:"Lilium Pharma Algérie - Algiers"}),c.jsx(Af,{title:"Projects & Goals",text:"The focus was centered on designing and developing features and applications to enhance the company's technology and information system. These innovations were aimed at optimizing processes, improving efficiency, and driving growth. By streamlining operations and reducing manual tasks, the company was able to accelerate decision-making. Additionally, the introduction of new features further enhanced the user experience, ultimately strengthening the company's competitive edge."})]})]})]})},ew=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;


  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 3rem;
      padding-bottom: 1rem;
  }

`,tw=S.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${_}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,nw=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,Df=S.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${_}){
      font-size: .8rem;

  }
`,Tt=S.span`
    color: var(--primary-color);
`,rw=S.a`
    color: var(--primary-color);
`,ow=S.div`
  display: flex;
  gap: 1.1rem;
  height: fit-content;
  width: 80vw;
  align-self: center;

  @media (max-width: ${_}){
      max-width: 100%;
      width: 100%;
      flex-direction: column;
      padding-bottom: 3rem;
  }
  
`,iw=S.article`
  height: 100%;

  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;
`,bf=S(iw)`

  display: flex;
  flex-direction: column;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

`,lw=S.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  width: fit-content;
  justify-content: center;
  align-self: center;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media (max-width: ${_}) {
    gap: 1.5rem;
    width: 90vw;
    margin-block: 1rem;

  }
`,rt=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: .6;
  gap:.3rem;
`,ot=S.img`
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
`,it=S.label`
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: ${_}) {
        font-size: .7rem;
  }
`,Gm="/assets/RestaurantApp-f940ef41.png",Xm="/assets/SmartHomeApp-988004dc.png",Ym="/assets/SoundBOXApp-a94d5b27.png",sw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(a=>a.scrollReducer).current,l=Tl(),s=a=>l(Qm(a));return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(aw,{ref:o,id:e,$visible:n,children:[c.jsxs(uw,{children:[c.jsx(cw,{children:"Projects"}),c.jsx(fw,{children:"Let me show you an overview of some of my personal projects before getting into details, tap on any to see details or scroll down to browse."})]}),c.jsxs(dw,{children:[c.jsxs(vs,{onClick:()=>s("Projects/Restaurant"),children:[c.jsx(xs,{src:Gm,alt:"Restaurant App Icon"}),c.jsx(ys,{children:"Restaurant App"}),c.jsx(ws,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management."}),c.jsx(Ss,{children:"Go to Details"})]}),c.jsxs(vs,{onClick:()=>s("Projects/SmartHome"),children:[c.jsx(xs,{src:Xm,alt:"SmartHome App Icon"}),c.jsx(ys,{children:"SmartHome"}),c.jsx(ws,{children:"Sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights."}),c.jsx(Ss,{children:"Go to Details"})]}),c.jsxs(vs,{onClick:()=>s("Projects/SoundBOX"),children:[c.jsx(xs,{src:Ym,alt:"SoundBOX App Icon"}),c.jsx(ys,{children:"SoundBOX"}),c.jsx(ws,{children:"A web app that lets users stream YouTube audio without video playback, with a user-friendly interface. It offers playback controls and a Favorite list for managing preferred tracks."}),c.jsx(Ss,{children:"Go to Details"})]})]})]})},aw=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 3rem;

  }

`,uw=S.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${_}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,cw=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,fw=S.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${_}){
      font-size: .8rem;

  }
`,dw=S.div`
  display: flex;
  gap: .8rem;
  align-self: center;
 
  border-radius: 1rem;

  width: 90vw;
  max-width: 80rem;

  @media (max-width: ${_}){
      flex-direction: column;
      width: 100%;

  }

`,vs=S.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: ${_}){   
    /* align-items: start; */
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);


  }

`,ys=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1rem;

`,ws=S.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: .8rem;
    line-height: 1.8;
    text-align: center;
    margin-block: .3rem;
    
    @media (max-width: ${_}){
      font-size: .8rem;
      max-width: 95%;
    }
`,xs=S.img`
  max-width: 3.6rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){

    max-width: 4rem;

  }
`,Ss=S.button`
margin-top: auto;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  padding-block: .8rem;
  padding-inline: 2rem;
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: ${_}){

    /* width: 100%;
    max-width: 90%; */
    display: none;

}
`,pw="/assets/Restaurant-S1-ce332388.png",mw="/assets/Restaurant-S2-132eafe1.png",hw="/assets/Restaurant-S3-95ab878c.png",gw="/assets/Restaurant-S4-b62a7391.png",vw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(yw,{ref:o,id:e,$visible:n,children:[c.jsxs(_w,{children:[c.jsxs(Tw,{children:[c.jsx(Ow,{src:Gm,alt:"Restaurant App Icon"}),c.jsx(zw,{children:"Restaurant App"})]}),c.jsx(Rw,{href:"http://129.146.60.95:4001/",target:"_blank",children:"Preview"})]}),c.jsxs(Sw,{children:[c.jsxs(kw,{children:[c.jsxs(Ew,{children:[c.jsx(jw,{children:"Description"}),c.jsx(Cw,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management. Simplify the restaurant operations, engage customers, and optimize inventory."})]}),c.jsxs($w,{children:[c.jsx(Pw,{children:"Features"}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Recipe Management"}),c.jsx(Rt,{children:"Streamline recipe creation, storage, and organization for consistent quality."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Order Management"}),c.jsx(Rt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Ticketing"}),c.jsx(Rt,{children:"User-friendly ticketing feature that enables clients to obtain physical tickets for their dining experience."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Mixtures"}),c.jsx(Rt,{children:"Empower users to create new ingredients by combining multiple existing ingredients, allowing for innovative and customizable recipes."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Menu Customization"}),c.jsx(Rt,{children:"Easily create and modify menus based on customer preferences, seasonality, and occasions."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Order Management"}),c.jsx(Rt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Discounts based on Points"}),c.jsx(Rt,{children:"Loyalty program that allows customers to earn and redeem points for discounts."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Stock Management"}),c.jsx(Rt,{children:"Efficiently track inventory levels, monitor ingredient usage, and receive low stock notifications."})]})]}),c.jsx(Hu,{title:"Technologies Used",technologies:["mySQL","HTML","CSS","Tabler","JavaScript","jQuery","AJAX","Django","Docker"]})]}),c.jsx(xw,{children:c.jsxs(ww,{children:[c.jsx(Qo,{src:pw,alt:"Restaurant App Screenshot 1"}),c.jsx(Qo,{src:mw,alt:"Restaurant App Screenshot 2"}),c.jsx(Qo,{src:hw,alt:"Restaurant App Screenshot 3"}),c.jsx(Qo,{src:gw,alt:"Restaurant App Screenshot 4"})]})})]})]})},yw=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 2rem;
  }

`,Qo=S.img`
  width: 100%;
  object-fit: contain;
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;


  @media (max-width: ${_}){

    width: 100%;

  }
`,ww=S.div`
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
    
`,xw=S.div`
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

  @media (max-width: ${_}){
    margin-top: 1rem;
  }

`,Sw=S.div`
  display: flex;
  gap: 1rem;
  flex: 1;

  @media (max-width: ${_}){
    display: block;
  }
`,kw=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1.5;
`,Ew=S.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${_}){
      text-align: start;
  }
  `,jw=S.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

  
`,Cw=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${_}){
      font-size: .9rem;
  }
`,$w=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${_}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Pw=S.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,zt=S.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Ot=S.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Rt=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,_w=S.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Tw=S.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${_}){
    flex-direction: row;
    align-items: center;
  }
`,zw=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Ow=S.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){

    max-width: 4rem;

  }
`,Rw=S.a`
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

  @media (max-width: ${_}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Nw="/assets/SmartHome-S1-c276a7c5.png",Iw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(Aw,{ref:o,id:e,$visible:n,children:[c.jsxs(Qw,{children:[c.jsxs(Gw,{children:[c.jsx(Yw,{src:Xm,alt:"SmartHome App Icon"}),c.jsx(Xw,{children:"SmartHome"})]}),c.jsx(Kw,{href:"http://129.146.60.95:3006/40rgghbzr0",target:"_blank",children:"Preview"})]}),c.jsxs(bw,{children:[c.jsxs(Fw,{children:[c.jsxs(Bw,{children:[c.jsx(Uw,{children:"Description"}),c.jsx(Hw,{children:'Introducing "SmartHome," the sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights. SmartHome transforms your smartphone into a powerful remote control for your home, providing convenience and peace of mind at your fingertips.'})]}),c.jsxs(Vw,{children:[c.jsx(Ww,{children:"Features"}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"Door Control"}),c.jsx(In,{children:"Gain full control over your home's entry points. With a tap on your phone, unlock and lock your doors remotely."})]}),c.jsxs(Rn,{children:[c.jsx(ks,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"Schedule and Timers"}),c.jsx(In,{children:"Set up schedules and timers to automate your door and lighting functions. Configure your app to automatically lock doors at a specific time each day or turn on lights just before you arrive home in the evening."})]}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"Lighting Management"}),c.jsx(In,{children:"Enjoy the convenience of controlling your home's lighting system with  ease. Effortlessly turn lights on or off."})]}),c.jsxs(Rn,{children:[c.jsx(ks,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"Customization and Personalization"}),c.jsx(In,{children:"SmartHome lets you customize and personalize your control preferences. Assign unique names and icons to your equipments for easy identification."})]}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"User-Friendly Interface"}),c.jsx(In,{children:"SmartHome combines sleek design with intuitive controls, ensuring a seamless and enjoyable user experience for simplified home management."})]}),c.jsxs(Rn,{children:[c.jsx(ks,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"User Management"}),c.jsx(In,{children:"Manage access permissions for different users within your household. Create individual profiles for family members or trusted individuals, allowing them to control doors and lights through their own smartphones."})]})]}),c.jsx(Hu,{title:"Technologies Used",technologies:["JSON","HTML","CSS","JavaScript","React","Python","FastAPI","MicroPython","ESP32"]})]}),c.jsx(Dw,{children:c.jsx(Mw,{children:c.jsx(Lw,{src:Nw})})})]})]})},Aw=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 2rem;
  }

`,Lw=S.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){
    width: 100%;
  }
`,Mw=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* max-height: 60vh; */
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,Dw=S.div`
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

  @media (max-width: ${_}){
    margin-top: 1rem;
  }

`,bw=S.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${_}){
    display: block;
  }
`,Fw=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,Bw=S.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${_}){
      text-align: start;
  }
  `,Uw=S.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

`,Hw=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${_}){
      font-size: .9rem;
  }

`,Vw=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${_}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Ww=S.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Rn=S.div`
  position: relative;

  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Nn=S.p`
    max-width: 60%;
    font-size: .9rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: .2rem;
`,ks=S.span`
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
  
`,In=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Qw=S.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Gw=S.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${_}){
    flex-direction: row;
    align-items: center;
  }
`,Xw=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Yw=S.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){

    max-width: 4rem;

  }
`,Kw=S.a`
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

  @media (max-width: ${_}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Zw="/assets/SoundBOX-S1-d0ca63da.png",qw="/assets/SoundBOX-S2-f124f3db.png",Jw="/assets/SoundBOX-S3-3afadd42.png",ex=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=Tn(e),i=Ct(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(tx,{ref:o,id:e,$visible:n,children:[c.jsxs(fx,{children:[c.jsxs(dx,{children:[c.jsx(mx,{src:Ym,alt:"SoundBOX App Icon"}),c.jsx(px,{children:"SoundBOX"})]}),c.jsx(hx,{href:"http://129.146.60.95:4420/",target:"_blank",children:"Preview"})]}),c.jsxs(ox,{children:[c.jsxs(ix,{children:[c.jsxs(lx,{children:[c.jsx(sx,{children:"Description"}),c.jsx(ax,{children:"SoundBOX is a web app that lets you stream audio from YouTube without video playback. It has a user-friendly interface with a search bar for easy content discovery. The app plays only the audio stream, conserving bandwidth. It offers playback controls and a Favorite list where users can gather and manage their preferred tracks. SoundBOX is a Progressive Web App (PWA) making it highly portable and easy to install on any compatible device. Users can simply add the app to their device's home screen or app drawer, allowing them to access SoundBOX with a single tap, just like a native application."})]}),c.jsxs(ux,{children:[c.jsx(cx,{children:"Features"}),c.jsxs(An,{children:[c.jsx(Ln,{children:"Audio Streaming"}),c.jsx(Mn,{children:"Allows users to stream audio from YouTube without video playback."})]}),c.jsxs(An,{children:[c.jsx(Ln,{children:"User-Friendly Interface"}),c.jsx(Mn,{children:"The app features a user-friendly interface with a search bar for easy content discovery."})]}),c.jsxs(An,{children:[c.jsx(Ln,{children:"Bandwidth Optimization"}),c.jsx(Mn,{children:"SoundBOX plays only the audio stream, conserving bandwidth and optimizing the listening experience."})]}),c.jsxs(An,{children:[c.jsx(Ln,{children:"Background Play"}),c.jsx(Mn,{children:"The app supports background play on mobile devices, allowing users to continue listening while using other apps or when their device's screen is locked."})]}),c.jsxs(An,{children:[c.jsx(Ln,{children:"Cross-Devices"}),c.jsx(Mn,{children:"SoundBOX is a Progressive Web Application (PWA) that can be easily installed on various devices and it has been designed to be responsive, adapting seamlessly to different screen sizes and orientations."})]}),c.jsxs(An,{children:[c.jsx(Ln,{children:"High-Quality Streaming"}),c.jsx(Mn,{children:"SoundBOX streams audio content from YouTube at the highest available quality."})]})]}),c.jsx(Hu,{title:"Technologies Used",technologies:["HTML","CSS","TailwindCSS","JavaScript","React","Python","FastAPI"]})]}),c.jsx(rx,{children:c.jsxs(nx,{children:[c.jsx(Es,{src:Zw}),c.jsx(Es,{src:qw}),c.jsx(Es,{src:Jw})]})})]})]})},tx=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 2rem;
  }

`,Es=S.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){
    width: 100%;
  }
`,nx=S.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,rx=S.div`
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

  @media (max-width: ${_}){
    margin-top: 1rem;
  }

`,ox=S.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${_}){
    display: block;
  }
`,ix=S.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,lx=S.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${_}){
      text-align: start;
  }
  `,sx=S.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,ax=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${_}){
      font-size: .9rem;
  }

`,ux=S.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${_}){
    grid-template-columns: repeat(1, 1fr);

  }
`,cx=S.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,An=S.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Ln=S.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Mn=S.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,fx=S.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,dx=S.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${_}){
    flex-direction: row;
    align-items: center;
  }
`,px=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,mx=S.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${_}){

    max-width: 4rem;

  }
`,hx=S.a`
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

  @media (max-width: ${_}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,gx="/assets/stackoverflow-ec34f2f1.png",vx="/assets/twitter-16936b2e.png",yx="/assets/linkedin-b2cdfb91.png",wx="/assets/github-d83ddf4e.png",Ff="boukabousalinazim@gmail.com",xx="https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",Sx="https://github.com/Ali-Nazim",kx="https://twitter.com/AliNazimB",Ex="https://stackoverflow.com/users/7823800/nazim-a",jx=({name:e})=>{const[t,n]=O.useState(!1),[r,o]=O.useState(!1),i=Tn(e),l=Ct(a=>a.scrollReducer).current;Tl();const s=O.useCallback(()=>{navigator.clipboard.writeText(Ff).then(function(){o(!0),setTimeout(()=>o(!1),1500)},function(a){})},[]);return O.useEffect(()=>{n(l===e),e!==l&&setTimeout(()=>i.current.scrollTo({top:0,behavior:"smooth"}),300)},[l]),c.jsxs(Cx,{ref:i,id:e,$visible:t,children:[c.jsxs($x,{children:[c.jsx(Px,{children:"Contact"}),c.jsx(_x,{children:"I have a strong passion for continuous learning and sharing my knowledge. I can't wait to connect with you, so please don't hesitate to reach out."}),c.jsxs(Tx,{children:["Click to copy",c.jsx(zx,{onClick:s,$copied:r,children:"boukabousalinazim@gmail.com"})]}),c.jsx(Ox,{href:`mailto:${Ff}`,children:"Contact Me"})]}),c.jsxs(Rx,{children:[c.jsx(Go,{onClick:()=>open(Sx,"_blank"),src:wx,alt:"Github Logo"}),c.jsx(Go,{onClick:()=>open(kx,"_blank"),src:vx,alt:"Twitter Logo"}),c.jsx(Go,{onClick:()=>open(xx,"_blank"),src:yx,alt:"Linkedin Logo"}),c.jsx(Go,{onClick:()=>open(Ex,"_blank"),src:gx,alt:"Stackoverflow Logo"})]}),c.jsxs(Nx,{children:["Thank You for visiting, Until next time!",c.jsx("br",{})]})]})},Cx=S.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${_}){
      gap: 3rem;
     justify-content: center;

  }
`,$x=S.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;

  @media (min-width: ${_}){
    align-items: center;
  }
  @media (max-width: ${_}){
      max-width: 90vw;
      width: 100%;
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
`,Px=S.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;
`,_x=S.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${_}){
      font-size: .8rem;
  }
`,Tx=S.div`
    display: flex;
    font-size: .9rem;

    color: var(--secondary-text-color);
    align-items: center;

`,zx=S.p`
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
`,Ox=S.a`
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

  @media (max-width: ${_}){
      width: 100%;
      align-self: center;
  }

`,Rx=S.div`
  display: flex;
  align-items: center;
  opacity: .6;
  gap: 2rem;
  align-self: center;
`,Go=S.img`
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
`,Nx=S.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    opacity: .6;
    
    @media (min-width: ${_}){
      text-align: center;
  }
    @media (max-width: ${_}){
      font-size: .8rem;
  }
`;function Ix(){return c.jsxs(Ax,{id:"vertical-stack",children:[c.jsx(m1,{}),c.jsx(S1,{name:"Home",color:"#48b50e"}),c.jsx(J1,{name:"Experiences",color:"#148ebe"}),c.jsx(sw,{name:"Projects",color:"#dd0000"}),c.jsx(vw,{name:"Projects/Restaurant",color:"#dd0000"}),c.jsx(Iw,{name:"Projects/SmartHome",color:"#dd0000"}),c.jsx(ex,{name:"Projects/SoundBOX",color:"#dd0000"}),c.jsx(jx,{name:"Contact"})]})}const Ax=S.div`

  /* Dimensions */
  height: 100vh;
  width: 100vw;
  
  /* Display */
  scroll-snap-type: y mandatory;

  /* Overflow */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;const Lx=Q0({reducer:{scrollReducer:i1}});js.createRoot(document.getElementById("root")).render(c.jsx(xn.StrictMode,{children:c.jsx(f0,{store:Lx,children:c.jsx(Ey,{children:c.jsx(Ix,{})})})}));
