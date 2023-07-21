(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function th(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wd={exports:{}},Ki={},Vd={exports:{}},I={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),nh=Symbol.for("react.portal"),rh=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),lh=Symbol.for("react.provider"),sh=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ch=Symbol.for("react.memo"),dh=Symbol.for("react.lazy"),Qu=Symbol.iterator;function fh(e){return e===null||typeof e!="object"?null:(e=Qu&&e[Qu]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qd=Object.assign,Gd={};function kr(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Xd}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yd(){}Yd.prototype=kr.prototype;function Na(e,t,n){this.props=e,this.context=t,this.refs=Gd,this.updater=n||Xd}var ba=Na.prototype=new Yd;ba.constructor=Na;Qd(ba,kr.prototype);ba.isPureReactComponent=!0;var Gu=Array.isArray,Kd=Object.prototype.hasOwnProperty,Aa={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Kd.call(t,r)&&!qd.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:jo,type:e,key:i,ref:l,props:o,_owner:Aa.current}}function ph(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function mh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Yu=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mh(""+e.key):t.toString(36)}function ni(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case jo:case nh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Bl(l,0):r,Gu(o)?(n="",e!=null&&(n=e.replace(Yu,"$&/")+"/"),ni(o,t,n,"",function(u){return u})):o!=null&&(Ia(o)&&(o=ph(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Yu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Gu(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Bl(i,s);l+=ni(i,t,n,a,o)}else if(a=fh(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Bl(i,s++),l+=ni(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Oo(e,t,n){if(e==null)return e;var r=[],o=0;return ni(e,r,"","",function(i){return t.call(n,i,o++)}),r}function hh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},ri={transition:null},gh={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:ri,ReactCurrentOwner:Aa};I.Children={map:Oo,forEach:function(e,t,n){Oo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Oo(e,function(){t++}),t},toArray:function(e){return Oo(e,function(t){return t})||[]},only:function(e){if(!Ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};I.Component=kr;I.Fragment=rh;I.Profiler=ih;I.PureComponent=Na;I.StrictMode=oh;I.Suspense=uh;I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gh;I.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Aa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Kd.call(t,a)&&!qd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:jo,type:e.type,key:o,ref:i,props:r,_owner:l}};I.createContext=function(e){return e={$$typeof:sh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lh,_context:e},e.Consumer=e};I.createElement=Jd;I.createFactory=function(e){var t=Jd.bind(null,e);return t.type=e,t};I.createRef=function(){return{current:null}};I.forwardRef=function(e){return{$$typeof:ah,render:e}};I.isValidElement=Ia;I.lazy=function(e){return{$$typeof:dh,_payload:{_status:-1,_result:e},_init:hh}};I.memo=function(e,t){return{$$typeof:ch,type:e,compare:t===void 0?null:t}};I.startTransition=function(e){var t=ri.transition;ri.transition={};try{e()}finally{ri.transition=t}};I.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};I.useCallback=function(e,t){return Se.current.useCallback(e,t)};I.useContext=function(e){return Se.current.useContext(e)};I.useDebugValue=function(){};I.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};I.useEffect=function(e,t){return Se.current.useEffect(e,t)};I.useId=function(){return Se.current.useId()};I.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};I.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};I.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};I.useMemo=function(e,t){return Se.current.useMemo(e,t)};I.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};I.useRef=function(e){return Se.current.useRef(e)};I.useState=function(e){return Se.current.useState(e)};I.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};I.useTransition=function(){return Se.current.useTransition()};I.version="18.2.0";Vd.exports=I;var O=Vd.exports;const Sn=th(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh=O,yh=Symbol.for("react.element"),wh=Symbol.for("react.fragment"),xh=Object.prototype.hasOwnProperty,Sh=vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kh={key:!0,ref:!0,__self:!0,__source:!0};function Zd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)xh.call(t,r)&&!kh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:yh,type:e,key:i,ref:l,props:o,_owner:Sh.current}}Ki.Fragment=wh;Ki.jsx=Zd;Ki.jsxs=Zd;Wd.exports=Ki;var c=Wd.exports,_s={},ef={exports:{}},Ae={},tf={exports:{}},nf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var b=_.length;_.push(R);e:for(;0<b;){var H=b-1>>>1,W=_[H];if(0<o(W,R))_[H]=R,_[b]=W,b=H;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],b=_.pop();if(b!==R){_[0]=b;e:for(var H=0,W=_.length,an=W>>>1;H<an;){var Xe=2*(H+1)-1,Et=_[Xe],Te=Xe+1,pt=_[Te];if(0>o(Et,b))Te<W&&0>o(pt,Et)?(_[H]=pt,_[Te]=b,H=Te):(_[H]=Et,_[Xe]=b,H=Xe);else if(Te<W&&0>o(pt,b))_[H]=pt,_[Te]=b,H=Te;else break e}}return R}function o(_,R){var b=_.sortIndex-R.sortIndex;return b!==0?b:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],p=1,g=null,m=3,v=!1,y=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,t(a,R);else break;R=n(u)}}function S(_){if(w=!1,h(_),!y)if(n(a)!==null)y=!0,Pr(j);else{var R=n(u);R!==null&&_r(S,R.startTime-_)}}function j(_,R){y=!1,w&&(w=!1,f(z),z=-1),v=!0;var b=m;try{for(h(R),g=n(a);g!==null&&(!(g.expirationTime>R)||_&&!oe());){var H=g.callback;if(typeof H=="function"){g.callback=null,m=g.priorityLevel;var W=H(g.expirationTime<=R);R=e.unstable_now(),typeof W=="function"?g.callback=W:g===n(a)&&r(a),h(R)}else r(a);g=n(a)}if(g!==null)var an=!0;else{var Xe=n(u);Xe!==null&&_r(S,Xe.startTime-R),an=!1}return an}finally{g=null,m=b,v=!1}}var C=!1,k=null,z=-1,D=5,N=-1;function oe(){return!(e.unstable_now()-N<D)}function ln(){if(k!==null){var _=e.unstable_now();N=_;var R=!0;try{R=k(!0,_)}finally{R?sn():(C=!1,k=null)}}else C=!1}var sn;if(typeof d=="function")sn=function(){d(ln)};else if(typeof MessageChannel<"u"){var To=new MessageChannel,Ml=To.port2;To.port1.onmessage=ln,sn=function(){Ml.postMessage(null)}}else sn=function(){P(ln,0)};function Pr(_){k=_,C||(C=!0,sn())}function _r(_,R){z=P(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Pr(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(_){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var b=m;m=R;try{return _()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var b=m;m=_;try{return R()}finally{m=b}},e.unstable_scheduleCallback=function(_,R,b){var H=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?H+b:H):b=H,_){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=b+W,_={id:p++,callback:R,priorityLevel:_,startTime:b,expirationTime:W,sortIndex:-1},b>H?(_.sortIndex=b,t(u,_),n(a)===null&&_===n(u)&&(w?(f(z),z=-1):w=!0,_r(S,b-H))):(_.sortIndex=W,t(a,_),y||v||(y=!0,Pr(j))),_},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(_){var R=m;return function(){var b=m;m=R;try{return _.apply(this,arguments)}finally{m=b}}}})(nf);tf.exports=nf;var jh=tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=O,Ne=jh;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var of=new Set,to={};function _n(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(to[e]=t,e=0;e<t.length;e++)of.add(t[e])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ts=Object.prototype.hasOwnProperty,$h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ku={},qu={};function Ch(e){return Ts.call(qu,e)?!0:Ts.call(Ku,e)?!1:$h.test(e)?qu[e]=!0:(Ku[e]=!0,!1)}function Eh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ph(e,t,n,r){if(t===null||typeof t>"u"||Eh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var La=/[\-:]([a-z])/g;function Da(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(La,Da);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(La,Da);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(La,Da);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ma(e,t,n,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ph(t,n,o,r)&&(n=null),r||o===null?Ch(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ct=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),Fa=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),sf=Symbol.for("react.context"),Ba=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),Rs=Symbol.for("react.suspense_list"),Ua=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),Ju=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Ju&&e[Ju]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Ul;function Mr(e){if(Ul===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ul=t&&t[1]||""}return`
`+Ul+e}var Hl=!1;function Wl(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mr(e):""}function _h(e){switch(e.tag){case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 2:case 15:return e=Wl(e.type,!1),e;case 11:return e=Wl(e.type.render,!1),e;case 1:return e=Wl(e.type,!0),e;default:return""}}function Ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case Bn:return"Portal";case zs:return"Profiler";case Fa:return"StrictMode";case Os:return"Suspense";case Rs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sf:return(e.displayName||"Context")+".Consumer";case lf:return(e._context.displayName||"Context")+".Provider";case Ba:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ua:return t=e.displayName||null,t!==null?t:Ns(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return Ns(e(t))}catch{}}return null}function Th(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ns(t);case 8:return t===Fa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zh(e){var t=uf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function No(e){e._valueTracker||(e._valueTracker=zh(e))}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bs(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function df(e,t){t=t.checked,t!=null&&Ma(e,"checked",t,!1)}function As(e,t){df(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Is(e,t.type,n):t.hasOwnProperty("defaultValue")&&Is(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ec(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Is(e,t,n){(t!=="number"||yi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ls(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Fr(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function ff(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,mf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function no(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oh=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){Oh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Rh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ms(e,t){if(t){if(Rh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Fs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bs=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,tr=null,nr=null;function rc(e){if(e=Eo(e)){if(typeof Us!="function")throw Error($(280));var t=e.stateNode;t&&(t=tl(t),Us(e.stateNode,e.type,t))}}function vf(e){tr?nr?nr.push(e):nr=[e]:tr=e}function yf(){if(tr){var e=tr,t=nr;if(nr=tr=null,rc(e),t)for(e=0;e<t.length;e++)rc(t[e])}}function wf(e,t){return e(t)}function xf(){}var Vl=!1;function Sf(e,t,n){if(Vl)return e(t,n);Vl=!0;try{return wf(e,t,n)}finally{Vl=!1,(tr!==null||nr!==null)&&(xf(),yf())}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var r=tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Hs=!1;if(xt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Hs=!1}function Nh(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Xr=!1,wi=null,xi=!1,Ws=null,bh={onError:function(e){Xr=!0,wi=e}};function Ah(e,t,n,r,o,i,l,s,a){Xr=!1,wi=null,Nh.apply(bh,arguments)}function Ih(e,t,n,r,o,i,l,s,a){if(Ah.apply(this,arguments),Xr){if(Xr){var u=wi;Xr=!1,wi=null}else throw Error($(198));xi||(xi=!0,Ws=u)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oc(e){if(Tn(e)!==e)throw Error($(188))}function Lh(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return oc(o),e;if(i===r)return oc(o),t;i=i.sibling}throw Error($(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function jf(e){return e=Lh(e),e!==null?$f(e):null}function $f(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$f(e);if(t!==null)return t;e=e.sibling}return null}var Cf=Ne.unstable_scheduleCallback,ic=Ne.unstable_cancelCallback,Dh=Ne.unstable_shouldYield,Mh=Ne.unstable_requestPaint,te=Ne.unstable_now,Fh=Ne.unstable_getCurrentPriorityLevel,Wa=Ne.unstable_ImmediatePriority,Ef=Ne.unstable_UserBlockingPriority,Si=Ne.unstable_NormalPriority,Bh=Ne.unstable_LowPriority,Pf=Ne.unstable_IdlePriority,qi=null,ut=null;function Uh(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Vh,Hh=Math.log,Wh=Math.LN2;function Vh(e){return e>>>=0,e===0?32:31-(Hh(e)/Wh|0)|0}var Ao=64,Io=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=Br(s):(i&=l,i!==0&&(r=Br(i)))}else l=n&~o,l!==0?r=Br(l):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function Xh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Je(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=Xh(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),e}function Xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $o(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Gh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Va(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,Xa,Of,Rf,Nf,Xs=!1,Lo=[],Bt=null,Ut=null,Ht=null,oo=new Map,io=new Map,It=[],Yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(t.pointerId)}}function Rr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Eo(t),t!==null&&Xa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Kh(e,t,n,r,o){switch(t){case"focusin":return Bt=Rr(Bt,e,t,n,r,o),!0;case"dragenter":return Ut=Rr(Ut,e,t,n,r,o),!0;case"mouseover":return Ht=Rr(Ht,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return oo.set(i,Rr(oo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,io.set(i,Rr(io.get(i)||null,e,t,n,r,o)),!0}return!1}function bf(e){var t=pn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=kf(n),t!==null){e.blockedOn=t,Nf(e.priority,function(){Of(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bs=r,n.target.dispatchEvent(r),Bs=null}else return t=Eo(n),t!==null&&Xa(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){oi(e)&&n.delete(t)}function qh(){Xs=!1,Bt!==null&&oi(Bt)&&(Bt=null),Ut!==null&&oi(Ut)&&(Ut=null),Ht!==null&&oi(Ht)&&(Ht=null),oo.forEach(sc),io.forEach(sc)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,qh)))}function lo(e){function t(o){return Nr(o,e)}if(0<Lo.length){Nr(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&Nr(Bt,e),Ut!==null&&Nr(Ut,e),Ht!==null&&Nr(Ht,e),oo.forEach(t),io.forEach(t),n=0;n<It.length;n++)r=It[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<It.length&&(n=It[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&It.shift()}var rr=Ct.ReactCurrentBatchConfig,ji=!0;function Jh(e,t,n,r){var o=F,i=rr.transition;rr.transition=null;try{F=1,Qa(e,t,n,r)}finally{F=o,rr.transition=i}}function Zh(e,t,n,r){var o=F,i=rr.transition;rr.transition=null;try{F=4,Qa(e,t,n,r)}finally{F=o,rr.transition=i}}function Qa(e,t,n,r){if(ji){var o=Qs(e,t,n,r);if(o===null)ns(e,t,r,$i,n),lc(e,r);else if(Kh(o,e,t,n,r))r.stopPropagation();else if(lc(e,r),t&4&&-1<Yh.indexOf(e)){for(;o!==null;){var i=Eo(o);if(i!==null&&zf(i),i=Qs(e,t,n,r),i===null&&ns(e,t,r,$i,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ns(e,t,r,null,n)}}var $i=null;function Qs(e,t,n,r){if($i=null,e=Ha(r),e=pn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function Af(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fh()){case Wa:return 1;case Ef:return 4;case Si:case Bh:return 16;case Pf:return 536870912;default:return 16}default:return 16}}var Mt=null,Ga=null,ii=null;function If(){if(ii)return ii;var e,t=Ga,n=t.length,r,o="value"in Mt?Mt.value:Mt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return ii=o.slice(e,1<r?1-r:void 0)}function li(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function ac(){return!1}function Ie(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:ac,this.isPropagationStopped=ac,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ya=Ie(jr),Co=Z({},jr,{view:0,detail:0}),eg=Ie(Co),Ql,Gl,br,Ji=Z({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Ql=e.screenX-br.screenX,Gl=e.screenY-br.screenY):Gl=Ql=0,br=e),Ql)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),uc=Ie(Ji),tg=Z({},Ji,{dataTransfer:0}),ng=Ie(tg),rg=Z({},Co,{relatedTarget:0}),Yl=Ie(rg),og=Z({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),ig=Ie(og),lg=Z({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=Ie(lg),ag=Z({},jr,{data:0}),cc=Ie(ag),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=dg[e])?!!t[e]:!1}function Ka(){return fg}var pg=Z({},Co,{key:function(e){if(e.key){var t=ug[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=li(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?li(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?li(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=Ie(pg),hg=Z({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dc=Ie(hg),gg=Z({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),vg=Ie(gg),yg=Z({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wg=Ie(yg),xg=Z({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Ie(xg),kg=[9,13,27,32],qa=xt&&"CompositionEvent"in window,Qr=null;xt&&"documentMode"in document&&(Qr=document.documentMode);var jg=xt&&"TextEvent"in window&&!Qr,Lf=xt&&(!qa||Qr&&8<Qr&&11>=Qr),fc=String.fromCharCode(32),pc=!1;function Df(e,t){switch(e){case"keyup":return kg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function $g(e,t){switch(e){case"compositionend":return Mf(t);case"keypress":return t.which!==32?null:(pc=!0,fc);case"textInput":return e=t.data,e===fc&&pc?null:e;default:return null}}function Cg(e,t){if(Hn)return e==="compositionend"||!qa&&Df(e,t)?(e=If(),ii=Ga=Mt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lf&&t.locale!=="ko"?null:t.data;default:return null}}var Eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Eg[e.type]:t==="textarea"}function Ff(e,t,n,r){vf(r),t=Ci(t,"onChange"),0<t.length&&(n=new Ya("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gr=null,so=null;function Pg(e){qf(e,0)}function Zi(e){var t=Xn(e);if(cf(t))return e}function _g(e,t){if(e==="change")return t}var Bf=!1;if(xt){var Kl;if(xt){var ql="oninput"in document;if(!ql){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),ql=typeof hc.oninput=="function"}Kl=ql}else Kl=!1;Bf=Kl&&(!document.documentMode||9<document.documentMode)}function gc(){Gr&&(Gr.detachEvent("onpropertychange",Uf),so=Gr=null)}function Uf(e){if(e.propertyName==="value"&&Zi(so)){var t=[];Ff(t,so,e,Ha(e)),Sf(Pg,t)}}function Tg(e,t,n){e==="focusin"?(gc(),Gr=t,so=n,Gr.attachEvent("onpropertychange",Uf)):e==="focusout"&&gc()}function zg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(so)}function Og(e,t){if(e==="click")return Zi(t)}function Rg(e,t){if(e==="input"||e==="change")return Zi(t)}function Ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Ng;function ao(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ts.call(t,o)||!tt(e[o],t[o]))return!1}return!0}function vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yc(e,t){var n=vc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vc(n)}}function Hf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wf(){for(var e=window,t=yi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=yi(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bg(e){var t=Wf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hf(n.ownerDocument.documentElement,n)){if(r!==null&&Ja(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=yc(n,i);var l=yc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=xt&&"documentMode"in document&&11>=document.documentMode,Wn=null,Gs=null,Yr=null,Ys=!1;function wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ys||Wn==null||Wn!==yi(r)||(r=Wn,"selectionStart"in r&&Ja(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ao(Yr,r)||(Yr=r,r=Ci(Gs,"onSelect"),0<r.length&&(t=new Ya("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Jl={},Vf={};xt&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function el(e){if(Jl[e])return Jl[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vf)return Jl[e]=t[n];return e}var Xf=el("animationend"),Qf=el("animationiteration"),Gf=el("animationstart"),Yf=el("transitionend"),Kf=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){Kf.set(e,t),_n(t,[e])}for(var Zl=0;Zl<xc.length;Zl++){var es=xc[Zl],Ig=es.toLowerCase(),Lg=es[0].toUpperCase()+es.slice(1);tn(Ig,"on"+Lg)}tn(Xf,"onAnimationEnd");tn(Qf,"onAnimationIteration");tn(Gf,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(Yf,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Sc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ih(r,t,void 0,e),e.currentTarget=null}function qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Sc(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Sc(o,s,u),i=a}}}if(xi)throw e=Ws,xi=!1,Ws=null,e}function X(e,t){var n=t[ea];n===void 0&&(n=t[ea]=new Set);var r=e+"__bubble";n.has(r)||(Jf(t,e,2,!1),n.add(r))}function ts(e,t,n){var r=0;t&&(r|=4),Jf(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function uo(e){if(!e[Fo]){e[Fo]=!0,of.forEach(function(n){n!=="selectionchange"&&(Dg.has(n)||ts(n,!1,e),ts(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,ts("selectionchange",!1,t))}}function Jf(e,t,n,r){switch(Af(t)){case 1:var o=Jh;break;case 4:o=Zh;break;default:o=Qa}n=o.bind(null,t,n,e),o=void 0,!Hs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ns(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=pn(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Sf(function(){var u=i,p=Ha(n),g=[];e:{var m=Kf.get(e);if(m!==void 0){var v=Ya,y=e;switch(e){case"keypress":if(li(n)===0)break e;case"keydown":case"keyup":v=mg;break;case"focusin":y="focus",v=Yl;break;case"focusout":y="blur",v=Yl;break;case"beforeblur":case"afterblur":v=Yl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=vg;break;case Xf:case Qf:case Gf:v=ig;break;case Yf:v=wg;break;case"scroll":v=eg;break;case"wheel":v=Sg;break;case"copy":case"cut":case"paste":v=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dc}var w=(t&4)!==0,P=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var d=u,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,f!==null&&(S=ro(d,f),S!=null&&w.push(co(d,S,h)))),P)break;d=d.return}0<w.length&&(m=new v(m,y,null,n,p),g.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&n!==Bs&&(y=n.relatedTarget||n.fromElement)&&(pn(y)||y[St]))break e;if((v||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=u,y=y?pn(y):null,y!==null&&(P=Tn(y),y!==P||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(w=uc,S="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=dc,S="onPointerLeave",f="onPointerEnter",d="pointer"),P=v==null?m:Xn(v),h=y==null?m:Xn(y),m=new w(S,d+"leave",v,n,p),m.target=P,m.relatedTarget=h,S=null,pn(p)===u&&(w=new w(f,d+"enter",y,n,p),w.target=h,w.relatedTarget=P,S=w),P=S,v&&y)t:{for(w=v,f=y,d=0,h=w;h;h=zn(h))d++;for(h=0,S=f;S;S=zn(S))h++;for(;0<d-h;)w=zn(w),d--;for(;0<h-d;)f=zn(f),h--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=zn(w),f=zn(f)}w=null}else w=null;v!==null&&kc(g,m,v,w,!1),y!==null&&P!==null&&kc(g,P,y,w,!0)}}e:{if(m=u?Xn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var j=_g;else if(mc(m))if(Bf)j=Rg;else{j=zg;var C=Tg}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Og);if(j&&(j=j(e,u))){Ff(g,j,n,p);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Is(m,"number",m.value)}switch(C=u?Xn(u):window,e){case"focusin":(mc(C)||C.contentEditable==="true")&&(Wn=C,Gs=u,Yr=null);break;case"focusout":Yr=Gs=Wn=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,wc(g,n,p);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":wc(g,n,p)}var k;if(qa)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Hn?Df(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Lf&&n.locale!=="ko"&&(Hn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Hn&&(k=If()):(Mt=p,Ga="value"in Mt?Mt.value:Mt.textContent,Hn=!0)),C=Ci(u,z),0<C.length&&(z=new cc(z,e,null,n,p),g.push({event:z,listeners:C}),k?z.data=k:(k=Mf(n),k!==null&&(z.data=k)))),(k=jg?$g(e,n):Cg(e,n))&&(u=Ci(u,"onBeforeInput"),0<u.length&&(p=new cc("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:u}),p.data=k))}qf(g,t)})}function co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ro(e,n),i!=null&&r.unshift(co(e,i,o)),i=ro(e,t),i!=null&&r.push(co(e,i,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function kc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=ro(n,i),a!=null&&l.unshift(co(n,a,s))):o||(a=ro(n,i),a!=null&&l.push(co(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Mg=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function jc(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace(Fg,"")}function Bo(e,t,n){if(t=jc(t),jc(e)!==t&&n)throw Error($(425))}function Ei(){}var Ks=null,qs=null;function Js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zs=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,$c=typeof Promise=="function"?Promise:void 0,Ug=typeof queueMicrotask=="function"?queueMicrotask:typeof $c<"u"?function(e){return $c.resolve(null).then(e).catch(Hg)}:Zs;function Hg(e){setTimeout(function(){throw e})}function rs(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lo(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $r=Math.random().toString(36).slice(2),at="__reactFiber$"+$r,fo="__reactProps$"+$r,St="__reactContainer$"+$r,ea="__reactEvents$"+$r,Wg="__reactListeners$"+$r,Vg="__reactHandles$"+$r;function pn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[St]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cc(e);e!==null;){if(n=e[at])return n;e=Cc(e)}return t}e=n,n=e.parentNode}return null}function Eo(e){return e=e[at]||e[St],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function tl(e){return e[fo]||null}var ta=[],Qn=-1;function nn(e){return{current:e}}function G(e){0>Qn||(e.current=ta[Qn],ta[Qn]=null,Qn--)}function V(e,t){Qn++,ta[Qn]=e.current,e.current=t}var Jt={},ye=nn(Jt),Ee=nn(!1),kn=Jt;function ur(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Pe(e){return e=e.childContextTypes,e!=null}function Pi(){G(Ee),G(ye)}function Ec(e,t,n){if(ye.current!==Jt)throw Error($(168));V(ye,t),V(Ee,n)}function Zf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error($(108,Th(e)||"Unknown",o));return Z({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,kn=ye.current,V(ye,e),V(Ee,Ee.current),!0}function Pc(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Zf(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(ye),V(ye,e)):G(Ee),V(Ee,n)}var gt=null,nl=!1,os=!1;function ep(e){gt===null?gt=[e]:gt.push(e)}function Xg(e){nl=!0,ep(e)}function rn(){if(!os&&gt!==null){os=!0;var e=0,t=F;try{var n=gt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,nl=!1}catch(o){throw gt!==null&&(gt=gt.slice(e+1)),Cf(Wa,rn),o}finally{F=t,os=!1}}return null}var Gn=[],Yn=0,Ti=null,zi=0,De=[],Me=0,jn=null,vt=1,yt="";function cn(e,t){Gn[Yn++]=zi,Gn[Yn++]=Ti,Ti=e,zi=t}function tp(e,t,n){De[Me++]=vt,De[Me++]=yt,De[Me++]=jn,jn=e;var r=vt;e=yt;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var i=32-Je(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,vt=1<<32-Je(t)+o|n<<o|r,yt=i+e}else vt=1<<i|n<<o|r,yt=e}function Za(e){e.return!==null&&(cn(e,1),tp(e,1,0))}function eu(e){for(;e===Ti;)Ti=Gn[--Yn],Gn[Yn]=null,zi=Gn[--Yn],Gn[Yn]=null;for(;e===jn;)jn=De[--Me],De[Me]=null,yt=De[--Me],De[Me]=null,vt=De[--Me],De[Me]=null}var Re=null,Oe=null,K=!1,Ke=null;function np(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Oe=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Oe=null,!0):!1;default:return!1}}function na(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ra(e){if(K){var t=Oe;if(t){var n=t;if(!_c(e,t)){if(na(e))throw Error($(418));t=Wt(n.nextSibling);var r=Re;t&&_c(e,t)?np(r,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(na(e))throw Error($(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Uo(e){if(e!==Re)return!1;if(!K)return Tc(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Js(e.type,e.memoizedProps)),t&&(t=Oe)){if(na(e))throw rp(),Error($(418));for(;t;)np(e,t),t=Wt(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Re?Wt(e.stateNode.nextSibling):null;return!0}function rp(){for(var e=Oe;e;)e=Wt(e.nextSibling)}function cr(){Oe=Re=null,K=!1}function tu(e){Ke===null?Ke=[e]:Ke.push(e)}var Qg=Ct.ReactCurrentBatchConfig;function Ge(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oi=nn(null),Ri=null,Kn=null,nu=null;function ru(){nu=Kn=Ri=null}function ou(e){var t=Oi.current;G(Oi),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function or(e,t){Ri=e,nu=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(nu!==e)if(e={context:e,memoizedValue:t,next:null},Kn===null){if(Ri===null)throw Error($(308));Kn=e,Ri.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return t}var mn=null;function iu(e){mn===null?mn=[e]:mn.push(e)}function op(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,iu(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,iu(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function si(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}function zc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ni(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=a))}if(i!==null){var g=o.baseState;l=0,p=u=a=null,s=i;do{var m=s.lane,v=s.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,w=s;switch(m=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){g=y.call(v,g,m);break e}g=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,m=typeof y=="function"?y.call(v,g,m):y,m==null)break e;g=Z({},g,m);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else v={eventTime:v,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=v,a=g):p=p.next=v,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(p===null&&(a=g),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Cn|=l,e.lanes=l,e.memoizedState=g}}function Oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error($(191,o));o.call(r)}}}var lp=new rf.Component().refs;function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var rl={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Qt(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(Ze(t,e,o,r),si(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),o=Qt(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Vt(e,i,o),t!==null&&(Ze(t,e,o,r),si(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=Qt(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Vt(e,o,r),t!==null&&(Ze(t,e,r,n),si(t,e,r))}};function Rc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!ao(n,r)||!ao(o,i):!0}function sp(e,t,n){var r=!1,o=Jt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(o=Pe(t)?kn:ye.current,r=t.contextTypes,i=(r=r!=null)?ur(e,o):Jt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Nc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rl.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=lp,lu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ue(i):(i=Pe(t)?kn:ye.current,o.context=ur(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ia(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&rl.enqueueReplaceState(o,o.state,null),Ni(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===lp&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bc(e){var t=e._init;return t(e._payload)}function ap(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Gt(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,S){return d===null||d.tag!==6?(d=ds(h,f.mode,S),d.return=f,d):(d=o(d,h),d.return=f,d)}function a(f,d,h,S){var j=h.type;return j===Un?p(f,d,h.props.children,S,h.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bt&&bc(j)===d.type)?(S=o(d,h.props),S.ref=Ar(f,d,h),S.return=f,S):(S=pi(h.type,h.key,h.props,null,f.mode,S),S.ref=Ar(f,d,h),S.return=f,S)}function u(f,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=fs(h,f.mode,S),d.return=f,d):(d=o(d,h.children||[]),d.return=f,d)}function p(f,d,h,S,j){return d===null||d.tag!==7?(d=yn(h,f.mode,S,j),d.return=f,d):(d=o(d,h),d.return=f,d)}function g(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ds(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ro:return h=pi(d.type,d.key,d.props,null,f.mode,h),h.ref=Ar(f,null,d),h.return=f,h;case Bn:return d=fs(d,f.mode,h),d.return=f,d;case bt:var S=d._init;return g(f,S(d._payload),h)}if(Fr(d)||zr(d))return d=yn(d,f.mode,h,null),d.return=f,d;Ho(f,d)}return null}function m(f,d,h,S){var j=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:s(f,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:return h.key===j?a(f,d,h,S):null;case Bn:return h.key===j?u(f,d,h,S):null;case bt:return j=h._init,m(f,d,j(h._payload),S)}if(Fr(h)||zr(h))return j!==null?null:p(f,d,h,S,null);Ho(f,h)}return null}function v(f,d,h,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(h)||null,s(d,f,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return f=f.get(S.key===null?h:S.key)||null,a(d,f,S,j);case Bn:return f=f.get(S.key===null?h:S.key)||null,u(d,f,S,j);case bt:var C=S._init;return v(f,d,h,C(S._payload),j)}if(Fr(S)||zr(S))return f=f.get(h)||null,p(d,f,S,j,null);Ho(d,S)}return null}function y(f,d,h,S){for(var j=null,C=null,k=d,z=d=0,D=null;k!==null&&z<h.length;z++){k.index>z?(D=k,k=null):D=k.sibling;var N=m(f,k,h[z],S);if(N===null){k===null&&(k=D);break}e&&k&&N.alternate===null&&t(f,k),d=i(N,d,z),C===null?j=N:C.sibling=N,C=N,k=D}if(z===h.length)return n(f,k),K&&cn(f,z),j;if(k===null){for(;z<h.length;z++)k=g(f,h[z],S),k!==null&&(d=i(k,d,z),C===null?j=k:C.sibling=k,C=k);return K&&cn(f,z),j}for(k=r(f,k);z<h.length;z++)D=v(k,f,z,h[z],S),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?z:D.key),d=i(D,d,z),C===null?j=D:C.sibling=D,C=D);return e&&k.forEach(function(oe){return t(f,oe)}),K&&cn(f,z),j}function w(f,d,h,S){var j=zr(h);if(typeof j!="function")throw Error($(150));if(h=j.call(h),h==null)throw Error($(151));for(var C=j=null,k=d,z=d=0,D=null,N=h.next();k!==null&&!N.done;z++,N=h.next()){k.index>z?(D=k,k=null):D=k.sibling;var oe=m(f,k,N.value,S);if(oe===null){k===null&&(k=D);break}e&&k&&oe.alternate===null&&t(f,k),d=i(oe,d,z),C===null?j=oe:C.sibling=oe,C=oe,k=D}if(N.done)return n(f,k),K&&cn(f,z),j;if(k===null){for(;!N.done;z++,N=h.next())N=g(f,N.value,S),N!==null&&(d=i(N,d,z),C===null?j=N:C.sibling=N,C=N);return K&&cn(f,z),j}for(k=r(f,k);!N.done;z++,N=h.next())N=v(k,f,z,N.value,S),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?z:N.key),d=i(N,d,z),C===null?j=N:C.sibling=N,C=N);return e&&k.forEach(function(ln){return t(f,ln)}),K&&cn(f,z),j}function P(f,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Un&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ro:e:{for(var j=h.key,C=d;C!==null;){if(C.key===j){if(j=h.type,j===Un){if(C.tag===7){n(f,C.sibling),d=o(C,h.props.children),d.return=f,f=d;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bt&&bc(j)===C.type){n(f,C.sibling),d=o(C,h.props),d.ref=Ar(f,C,h),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===Un?(d=yn(h.props.children,f.mode,S,h.key),d.return=f,f=d):(S=pi(h.type,h.key,h.props,null,f.mode,S),S.ref=Ar(f,d,h),S.return=f,f=S)}return l(f);case Bn:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=o(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=fs(h,f.mode,S),d.return=f,f=d}return l(f);case bt:return C=h._init,P(f,d,C(h._payload),S)}if(Fr(h))return y(f,d,h,S);if(zr(h))return w(f,d,h,S);Ho(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,h),d.return=f,f=d):(n(f,d),d=ds(h,f.mode,S),d.return=f,f=d),l(f)):n(f,d)}return P}var dr=ap(!0),up=ap(!1),Po={},ct=nn(Po),po=nn(Po),mo=nn(Po);function hn(e){if(e===Po)throw Error($(174));return e}function su(e,t){switch(V(mo,t),V(po,e),V(ct,Po),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ds(t,e)}G(ct),V(ct,t)}function fr(){G(ct),G(po),G(mo)}function cp(e){hn(mo.current);var t=hn(ct.current),n=Ds(t,e.type);t!==n&&(V(po,e),V(ct,n))}function au(e){po.current===e&&(G(ct),G(po))}var q=nn(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var is=[];function uu(){for(var e=0;e<is.length;e++)is[e]._workInProgressVersionPrimary=null;is.length=0}var ai=Ct.ReactCurrentDispatcher,ls=Ct.ReactCurrentBatchConfig,$n=0,J=null,ie=null,se=null,Ai=!1,Kr=!1,ho=0,Gg=0;function me(){throw Error($(321))}function cu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function du(e,t,n,r,o,i){if($n=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=e===null||e.memoizedState===null?Jg:Zg,e=n(r,o),Kr){i=0;do{if(Kr=!1,ho=0,25<=i)throw Error($(301));i+=1,se=ie=null,t.updateQueue=null,ai.current=ev,e=n(r,o)}while(Kr)}if(ai.current=Ii,t=ie!==null&&ie.next!==null,$n=0,se=ie=J=null,Ai=!1,t)throw Error($(300));return e}function fu(){var e=ho!==0;return ho=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function He(){if(ie===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=se===null?J.memoizedState:se.next;if(t!==null)se=t,ie=e;else{if(e===null)throw Error($(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function go(e,t){return typeof t=="function"?t(e):t}function ss(e){var t=He(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ie,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var p=u.lane;if(($n&p)===p)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,J.lanes|=p,Cn|=p}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,tt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,Cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function as(e){var t=He(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);tt(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function dp(){}function fp(e,t){var n=J,r=He(),o=t(),i=!tt(r.memoizedState,o);if(i&&(r.memoizedState=o,$e=!0),r=r.queue,pu(hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,vo(9,mp.bind(null,n,r,o,t),void 0,null),ue===null)throw Error($(349));$n&30||pp(n,t,o)}return o}function pp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mp(e,t,n,r){t.value=n,t.getSnapshot=r,gp(t)&&vp(e)}function hp(e,t,n){return n(function(){gp(t)&&vp(e)})}function gp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function vp(e){var t=kt(e,1);t!==null&&Ze(t,e,1,-1)}function Ac(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:e},t.queue=e,e=e.dispatch=qg.bind(null,J,e),[t.memoizedState,e]}function vo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function yp(){return He().memoizedState}function ui(e,t,n,r){var o=lt();J.flags|=e,o.memoizedState=vo(1|t,n,void 0,r===void 0?null:r)}function ol(e,t,n,r){var o=He();r=r===void 0?null:r;var i=void 0;if(ie!==null){var l=ie.memoizedState;if(i=l.destroy,r!==null&&cu(r,l.deps)){o.memoizedState=vo(t,n,i,r);return}}J.flags|=e,o.memoizedState=vo(1|t,n,i,r)}function Ic(e,t){return ui(8390656,8,e,t)}function pu(e,t){return ol(2048,8,e,t)}function wp(e,t){return ol(4,2,e,t)}function xp(e,t){return ol(4,4,e,t)}function Sp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,ol(4,4,Sp.bind(null,t,e),n)}function mu(){}function jp(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $p(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cp(e,t,n){return $n&21?(tt(n,t)||(n=_f(),J.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Yg(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=ls.transition;ls.transition={};try{e(!1),t()}finally{F=n,ls.transition=r}}function Ep(){return He().memoizedState}function Kg(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pp(e))_p(t,n);else if(n=op(e,t,n,r),n!==null){var o=xe();Ze(n,e,r,o),Tp(n,t,r)}}function qg(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pp(e))_p(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,tt(s,l)){var a=t.interleaved;a===null?(o.next=o,iu(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=op(e,t,o,r),n!==null&&(o=xe(),Ze(n,e,r,o),Tp(n,t,r))}}function Pp(e){var t=e.alternate;return e===J||t!==null&&t===J}function _p(e,t){Kr=Ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Va(e,n)}}var Ii={readContext:Ue,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Jg={readContext:Ue,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Ic,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ui(4194308,4,Sp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){return ui(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kg.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Ac,useDebugValue:mu,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Ac(!1),t=e[0];return e=Yg.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=lt();if(K){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ue===null)throw Error($(349));$n&30||pp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ic(hp.bind(null,r,i,e),[e]),r.flags|=2048,vo(9,mp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=ue.identifierPrefix;if(K){var n=yt,r=vt;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ho++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:Ue,useCallback:jp,useContext:Ue,useEffect:pu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:xp,useMemo:$p,useReducer:ss,useRef:yp,useState:function(){return ss(go)},useDebugValue:mu,useDeferredValue:function(e){var t=He();return Cp(t,ie.memoizedState,e)},useTransition:function(){var e=ss(go)[0],t=He().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:fp,useId:Ep,unstable_isNewReconciler:!1},ev={readContext:Ue,useCallback:jp,useContext:Ue,useEffect:pu,useImperativeHandle:kp,useInsertionEffect:wp,useLayoutEffect:xp,useMemo:$p,useReducer:as,useRef:yp,useState:function(){return as(go)},useDebugValue:mu,useDeferredValue:function(e){var t=He();return ie===null?t.memoizedState=e:Cp(t,ie.memoizedState,e)},useTransition:function(){var e=as(go)[0],t=He().memoizedState;return[e,t]},useMutableSource:dp,useSyncExternalStore:fp,useId:Ep,unstable_isNewReconciler:!1};function pr(e,t){try{var n="",r=t;do n+=_h(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function us(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function zp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Di||(Di=!0,va=r),sa(e,t)},n}function Op(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){sa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){sa(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hv.bind(null,e,t,n),t.then(e,e))}function Dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var nv=Ct.ReactCurrentOwner,$e=!1;function we(e,t,n,r){t.child=e===null?up(t,null,n,r):dr(t,e.child,n,r)}function Fc(e,t,n,r,o){n=n.render;var i=t.ref;return or(t,o),r=du(e,t,n,r,i,o),n=fu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(K&&n&&Za(t),t.flags|=1,we(e,t,r,o),t.child)}function Bc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ku(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rp(e,t,i,r,o)):(e=pi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(l,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=Gt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ao(i,r)&&e.ref===t.ref)if($e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,jt(e,t,o)}return aa(e,t,n,r,o)}function Np(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Jn,ze),ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Jn,ze),ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Jn,ze),ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Jn,ze),ze|=r;return we(e,t,o,n),t.child}function bp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,o){var i=Pe(n)?kn:ye.current;return i=ur(t,i),or(t,o),n=du(e,t,n,r,i,o),r=fu(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(K&&r&&Za(t),t.flags|=1,we(e,t,n,o),t.child)}function Uc(e,t,n,r,o){if(Pe(n)){var i=!0;_i(t)}else i=!1;if(or(t,o),t.stateNode===null)ci(e,t),sp(t,n,r),la(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Pe(n)?kn:ye.current,u=ur(t,u));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&Nc(t,l,r,u),At=!1;var m=t.memoizedState;l.state=m,Ni(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Ee.current||At?(typeof p=="function"&&(ia(t,n,p,r),a=t.memoizedState),(s=At||Rc(t,n,s,r,m,a,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ip(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ge(t.type,s),l.props=u,g=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Pe(n)?kn:ye.current,a=ur(t,a));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==a)&&Nc(t,l,r,a),At=!1,m=t.memoizedState,l.state=m,Ni(t,r,l,o);var y=t.memoizedState;s!==g||m!==y||Ee.current||At?(typeof v=="function"&&(ia(t,n,v,r),y=t.memoizedState),(u=At||Rc(t,n,u,r,m,y,a)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ua(e,t,n,r,i,o)}function ua(e,t,n,r,o,i){bp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Pc(t,n,!1),jt(e,t,i);r=t.stateNode,nv.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=dr(t,e.child,null,i),t.child=dr(t,null,s,i)):we(e,t,s,i),t.memoizedState=r.state,o&&Pc(t,n,!0),t.child}function Ap(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),su(e,t.containerInfo)}function Hc(e,t,n,r,o){return cr(),tu(o),t.flags|=256,we(e,t,n,r),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ip(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(q,o&1),e===null)return ra(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=sl(l,r,0,null),e=yn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=da(n),t.memoizedState=ca,e):hu(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return rv(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Gt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Gt(s,i):(i=yn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?da(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ca,r}return i=e.child,e=i.sibling,r=Gt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hu(e,t){return t=sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&tu(r),dr(t,e.child,null,n),e=hu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=us(Error($(422))),Wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=sl({mode:"visible",children:r.children},o,0,null),i=yn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&dr(t,e.child,null,l),t.child.memoizedState=da(l),t.memoizedState=ca,i);if(!(t.mode&1))return Wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error($(419)),r=us(i,r,void 0),Wo(e,t,l,r)}if(s=(l&e.childLanes)!==0,$e||s){if(r=ue,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),Ze(r,e,o,-1))}return Su(),r=us(Error($(421))),Wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gv.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=Wt(o.nextSibling),Re=t,K=!0,Ke=null,e!==null&&(De[Me++]=vt,De[Me++]=yt,De[Me++]=jn,vt=e.id,yt=e.overflow,jn=t),t=hu(t,r.children),t.flags|=4096,t)}function Wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function cs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Lp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(we(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wc(e,n,t);else if(e.tag===19)Wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),cs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}cs(t,!0,n,null,i);break;case"together":cs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ci(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ov(e,t,n){switch(t.tag){case 3:Ap(t),cr();break;case 5:cp(t);break;case 1:Pe(t.type)&&_i(t);break;case 4:su(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Ip(e,t,n):(V(q,q.current&1),e=jt(e,t,n),e!==null?e.sibling:null);V(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,n)}return jt(e,t,n)}var Dp,fa,Mp,Fp;Dp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};Mp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(ct.current);var i=null;switch(n){case"input":o=bs(e,o),r=bs(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Ls(e,o),r=Ls(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}Ms(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(to.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(to.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ir(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function iv(e,t,n){var r=t.pendingProps;switch(eu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Pe(t.type)&&Pi(),he(t),null;case 3:return r=t.stateNode,fr(),G(Ee),G(ye),uu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Uo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(xa(Ke),Ke=null))),fa(e,t),he(t),null;case 5:au(t);var o=hn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)Mp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return he(t),null}if(e=hn(ct.current),Uo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[fo]=i,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(o=0;o<Ur.length;o++)X(Ur[o],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Zu(r,i),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},X("invalid",r);break;case"textarea":tc(r,i),X("invalid",r)}Ms(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,s,e),o=["children",""+s]):to.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&X("scroll",r)}switch(n){case"input":No(r),ec(r,i,!0);break;case"textarea":No(r),nc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[fo]=r,Dp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fs(n,r),n){case"dialog":X("cancel",e),X("close",e),o=r;break;case"iframe":case"object":case"embed":X("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ur.length;o++)X(Ur[o],e);o=r;break;case"source":X("error",e),o=r;break;case"img":case"image":case"link":X("error",e),X("load",e),o=r;break;case"details":X("toggle",e),o=r;break;case"input":Zu(e,r),o=bs(e,r),X("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),X("invalid",e);break;case"textarea":tc(e,r),o=Ls(e,r),X("invalid",e);break;default:o=r}Ms(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?gf(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mf(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&no(e,a):typeof a=="number"&&no(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?a!=null&&i==="onScroll"&&X("scroll",e):a!=null&&Ma(e,i,a,l))}switch(n){case"input":No(e),ec(e,r,!1);break;case"textarea":No(e),nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?er(e,!!r.multiple,i,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=hn(mo.current),hn(ct.current),Uo(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return he(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Oe!==null&&t.mode&1&&!(t.flags&128))rp(),cr(),t.flags|=98560,i=!1;else if(i=Uo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error($(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error($(317));i[at]=t}else cr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),i=!1}else Ke!==null&&(xa(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):Su())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return fr(),fa(e,t),e===null&&uo(t.stateNode.containerInfo),he(t),null;case 10:return ou(t.type._context),he(t),null;case 17:return Pe(t.type)&&Pi(),he(t),null;case 19:if(G(q),i=t.memoizedState,i===null)return he(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Ir(i,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=bi(e),l!==null){for(t.flags|=128,Ir(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&te()>mr&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ir(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*te()-i.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,Ir(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,n=q.current,V(q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ze&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function lv(e,t){switch(eu(t),t.tag){case 1:return Pe(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),G(Ee),G(ye),uu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return au(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));cr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return fr(),null;case 10:return ou(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var Vo=!1,ve=!1,sv=typeof WeakSet=="function"?WeakSet:Set,T=null;function qn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function pa(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Vc=!1;function av(e,t){if(Ks=ji,e=Wf(),Ja(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,p=0,g=e,m=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)m=g,g=v;for(;;){if(g===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++p===r&&(a=l),(v=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(qs={focusedElem:e,selectionRange:n},ji=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,P=y.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ge(t.type,w),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return y=Vc,Vc=!1,y}function qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pa(t,n,i)}o=o.next}while(o!==r)}}function il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bp(e){var t=e.alternate;t!==null&&(e.alternate=null,Bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[fo],delete t[ea],delete t[Wg],delete t[Vg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Up(e){return e.tag===5||e.tag===3||e.tag===4}function Xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Up(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ga(e,t,n),e=e.sibling;e!==null;)ga(e,t,n),e=e.sibling}var de=null,Ye=!1;function _t(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 5:ve||qn(n,t);case 6:var r=de,o=Ye;de=null,_t(e,t,n),de=r,Ye=o,de!==null&&(Ye?(e=de,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):de.removeChild(n.stateNode));break;case 18:de!==null&&(Ye?(e=de,n=n.stateNode,e.nodeType===8?rs(e.parentNode,n):e.nodeType===1&&rs(e,n),lo(e)):rs(de,n.stateNode));break;case 4:r=de,o=Ye,de=n.stateNode.containerInfo,Ye=!0,_t(e,t,n),de=r,Ye=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&pa(n,t,l),o=o.next}while(o!==r)}_t(e,t,n);break;case 1:if(!ve&&(qn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ee(n,t,s)}_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,_t(e,t,n),ve=r):_t(e,t,n);break;default:_t(e,t,n)}}function Qc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sv),t.forEach(function(r){var o=vv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:de=s.stateNode,Ye=!1;break e;case 3:de=s.stateNode.containerInfo,Ye=!0;break e;case 4:de=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(de===null)throw Error($(160));Hp(i,l,o),de=null,Ye=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ee(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wp(t,e),t=t.sibling}function Wp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),nt(e),r&4){try{qr(3,e,e.return),il(3,e)}catch(w){ee(e,e.return,w)}try{qr(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Qe(t,e),nt(e),r&512&&n!==null&&qn(n,n.return);break;case 5:if(Qe(t,e),nt(e),r&512&&n!==null&&qn(n,n.return),e.flags&32){var o=e.stateNode;try{no(o,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&df(o,i),Fs(s,l);var u=Fs(s,i);for(l=0;l<a.length;l+=2){var p=a[l],g=a[l+1];p==="style"?gf(o,g):p==="dangerouslySetInnerHTML"?mf(o,g):p==="children"?no(o,g):Ma(o,p,g,u)}switch(s){case"input":As(o,i);break;case"textarea":ff(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?er(o,!!i.multiple,v,!1):m!==!!i.multiple&&(i.defaultValue!=null?er(o,!!i.multiple,i.defaultValue,!0):er(o,!!i.multiple,i.multiple?[]:"",!1))}o[fo]=i}catch(w){ee(e,e.return,w)}}break;case 6:if(Qe(t,e),nt(e),r&4){if(e.stateNode===null)throw Error($(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ee(e,e.return,w)}}break;case 3:if(Qe(t,e),nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Qe(t,e),nt(e);break;case 13:Qe(t,e),nt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(yu=te())),r&4&&Qc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(u=ve)||p,Qe(t,e),ve=u):Qe(t,e),nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(T=e,p=e.child;p!==null;){for(g=T=p;T!==null;){switch(m=T,v=m.child,m.tag){case 0:case 11:case 14:case 15:qr(4,m,m.return);break;case 1:qn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:qn(m,m.return);break;case 22:if(m.memoizedState!==null){Yc(g);continue}}v!==null?(v.return=m,T=v):Yc(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=hf("display",l))}catch(w){ee(e,e.return,w)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(w){ee(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Qe(t,e),nt(e),r&4&&Qc(e);break;case 21:break;default:Qe(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Up(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(no(o,""),r.flags&=-33);var i=Xc(e);ga(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Xc(e);ha(e,s,l);break;default:throw Error($(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function uv(e,t,n){T=e,Vp(e)}function Vp(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var o=T,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Vo;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||ve;s=Vo;var u=ve;if(Vo=l,(ve=a)&&!u)for(T=o;T!==null;)l=T,a=l.child,l.tag===22&&l.memoizedState!==null?Kc(o):a!==null?(a.return=l,T=a):Kc(o);for(;i!==null;)T=i,Vp(i),i=i.sibling;T=o,Vo=s,ve=u}Gc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,T=i):Gc(e)}}function Gc(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ge(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Oc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oc(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&lo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}ve||t.flags&512&&ma(t)}catch(m){ee(t,t.return,m)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function Yc(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Kc(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{il(4,t)}catch(a){ee(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ee(t,o,a)}}var i=t.return;try{ma(t)}catch(a){ee(t,i,a)}break;case 5:var l=t.return;try{ma(t)}catch(a){ee(t,l,a)}}}catch(a){ee(t,t.return,a)}if(t===e){T=null;break}var s=t.sibling;if(s!==null){s.return=t.return,T=s;break}T=t.return}}var cv=Math.ceil,Li=Ct.ReactCurrentDispatcher,gu=Ct.ReactCurrentOwner,Be=Ct.ReactCurrentBatchConfig,L=0,ue=null,re=null,fe=0,ze=0,Jn=nn(0),le=0,yo=null,Cn=0,ll=0,vu=0,Jr=null,je=null,yu=0,mr=1/0,mt=null,Di=!1,va=null,Xt=null,Xo=!1,Ft=null,Mi=0,Zr=0,ya=null,di=-1,fi=0;function xe(){return L&6?te():di!==-1?di:di=te()}function Qt(e){return e.mode&1?L&2&&fe!==0?fe&-fe:Qg.transition!==null?(fi===0&&(fi=_f()),fi):(e=F,e!==0||(e=window.event,e=e===void 0?16:Af(e.type)),e):1}function Ze(e,t,n,r){if(50<Zr)throw Zr=0,ya=null,Error($(185));$o(e,n,r),(!(L&2)||e!==ue)&&(e===ue&&(!(L&2)&&(ll|=n),le===4&&Lt(e,fe)),_e(e,r),n===1&&L===0&&!(t.mode&1)&&(mr=te()+500,nl&&rn()))}function _e(e,t){var n=e.callbackNode;Qh(e,t);var r=ki(e,e===ue?fe:0);if(r===0)n!==null&&ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ic(n),t===1)e.tag===0?Xg(qc.bind(null,e)):ep(qc.bind(null,e)),Ug(function(){!(L&6)&&rn()}),n=null;else{switch(Tf(r)){case 1:n=Wa;break;case 4:n=Ef;break;case 16:n=Si;break;case 536870912:n=Pf;break;default:n=Si}n=Zp(n,Xp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xp(e,t){if(di=-1,fi=0,L&6)throw Error($(327));var n=e.callbackNode;if(ir()&&e.callbackNode!==n)return null;var r=ki(e,e===ue?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fi(e,r);else{t=r;var o=L;L|=2;var i=Gp();(ue!==e||fe!==t)&&(mt=null,mr=te()+500,vn(e,t));do try{pv();break}catch(s){Qp(e,s)}while(1);ru(),Li.current=i,L=o,re!==null?t=0:(ue=null,fe=0,t=le)}if(t!==0){if(t===2&&(o=Vs(e),o!==0&&(r=o,t=wa(e,o))),t===1)throw n=yo,vn(e,0),Lt(e,r),_e(e,te()),n;if(t===6)Lt(e,r);else{if(o=e.current.alternate,!(r&30)&&!dv(o)&&(t=Fi(e,r),t===2&&(i=Vs(e),i!==0&&(r=i,t=wa(e,i))),t===1))throw n=yo,vn(e,0),Lt(e,r),_e(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:dn(e,je,mt);break;case 3:if(Lt(e,r),(r&130023424)===r&&(t=yu+500-te(),10<t)){if(ki(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zs(dn.bind(null,e,je,mt),t);break}dn(e,je,mt);break;case 4:if(Lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Je(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cv(r/1960))-r,10<r){e.timeoutHandle=Zs(dn.bind(null,e,je,mt),r);break}dn(e,je,mt);break;case 5:dn(e,je,mt);break;default:throw Error($(329))}}}return _e(e,te()),e.callbackNode===n?Xp.bind(null,e):null}function wa(e,t){var n=Jr;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Fi(e,t),e!==2&&(t=je,je=n,t!==null&&xa(t)),e}function xa(e){je===null?je=e:je.push.apply(je,e)}function dv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lt(e,t){for(t&=~vu,t&=~ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function qc(e){if(L&6)throw Error($(327));ir();var t=ki(e,0);if(!(t&1))return _e(e,te()),null;var n=Fi(e,t);if(e.tag!==0&&n===2){var r=Vs(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=yo,vn(e,0),Lt(e,t),_e(e,te()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,je,mt),_e(e,te()),null}function wu(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(mr=te()+500,nl&&rn())}}function En(e){Ft!==null&&Ft.tag===0&&!(L&6)&&ir();var t=L;L|=1;var n=Be.transition,r=F;try{if(Be.transition=null,F=1,e)return e()}finally{F=r,Be.transition=n,L=t,!(L&6)&&rn()}}function xu(){ze=Jn.current,G(Jn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:fr(),G(Ee),G(ye),uu();break;case 5:au(r);break;case 4:fr();break;case 13:G(q);break;case 19:G(q);break;case 10:ou(r.type._context);break;case 22:case 23:xu()}n=n.return}if(ue=e,re=e=Gt(e.current,null),fe=ze=t,le=0,yo=null,vu=ll=Cn=0,je=Jr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}mn=null}return e}function Qp(e,t){do{var n=re;try{if(ru(),ai.current=Ii,Ai){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ai=!1}if($n=0,se=ie=J=null,Kr=!1,ho=0,gu.current=null,n===null||n.return===null){le=1,yo=t,re=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=fe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,p=s,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Dc(l);if(v!==null){v.flags&=-257,Mc(v,l,s,i,t),v.mode&1&&Lc(i,u,t),t=v,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){Lc(i,u,t),Su();break e}a=Error($(426))}}else if(K&&s.mode&1){var P=Dc(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Mc(P,l,s,i,t),tu(pr(a,s));break e}}i=a=pr(a,s),le!==4&&(le=2),Jr===null?Jr=[i]:Jr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=zp(i,a,t);zc(i,f);break e;case 1:s=a;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xt===null||!Xt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Op(i,s,t);zc(i,S);break e}}i=i.return}while(i!==null)}Kp(n)}catch(j){t=j,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Gp(){var e=Li.current;return Li.current=Ii,e===null?Ii:e}function Su(){(le===0||le===3||le===2)&&(le=4),ue===null||!(Cn&268435455)&&!(ll&268435455)||Lt(ue,fe)}function Fi(e,t){var n=L;L|=2;var r=Gp();(ue!==e||fe!==t)&&(mt=null,vn(e,t));do try{fv();break}catch(o){Qp(e,o)}while(1);if(ru(),L=n,Li.current=r,re!==null)throw Error($(261));return ue=null,fe=0,le}function fv(){for(;re!==null;)Yp(re)}function pv(){for(;re!==null&&!Dh();)Yp(re)}function Yp(e){var t=Jp(e.alternate,e,ze);e.memoizedProps=e.pendingProps,t===null?Kp(e):re=t,gu.current=null}function Kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=lv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,re=null;return}}else if(n=iv(n,t,ze),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);le===0&&(le=5)}function dn(e,t,n){var r=F,o=Be.transition;try{Be.transition=null,F=1,mv(e,t,n,r)}finally{Be.transition=o,F=r}return null}function mv(e,t,n,r){do ir();while(Ft!==null);if(L&6)throw Error($(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gh(e,i),e===ue&&(re=ue=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,Zp(Si,function(){return ir(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Be.transition,Be.transition=null;var l=F;F=1;var s=L;L|=4,gu.current=null,av(e,n),Wp(n,e),bg(qs),ji=!!Ks,qs=Ks=null,e.current=n,uv(n),Mh(),L=s,F=l,Be.transition=i}else e.current=n;if(Xo&&(Xo=!1,Ft=e,Mi=o),i=e.pendingLanes,i===0&&(Xt=null),Uh(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Di)throw Di=!1,e=va,va=null,e;return Mi&1&&e.tag!==0&&ir(),i=e.pendingLanes,i&1?e===ya?Zr++:(Zr=0,ya=e):Zr=0,rn(),null}function ir(){if(Ft!==null){var e=Tf(Mi),t=Be.transition,n=F;try{if(Be.transition=null,F=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Mi=0,L&6)throw Error($(331));var o=L;for(L|=4,T=e.current;T!==null;){var i=T,l=i.child;if(T.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var p=T;switch(p.tag){case 0:case 11:case 15:qr(8,p,i)}var g=p.child;if(g!==null)g.return=p,T=g;else for(;T!==null;){p=T;var m=p.sibling,v=p.return;if(Bp(p),p===u){T=null;break}if(m!==null){m.return=v,T=m;break}T=v}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}T=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,T=l;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,T=f;break e}T=i.return}}var d=e.current;for(T=d;T!==null;){l=T;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,T=h;else e:for(l=d;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:il(9,s)}}catch(j){ee(s,s.return,j)}if(s===l){T=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,T=S;break e}T=s.return}}if(L=o,rn(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{F=n,Be.transition=t}}return!1}function Jc(e,t,n){t=pr(n,t),t=zp(e,t,1),e=Vt(e,t,1),t=xe(),e!==null&&($o(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)Jc(e,e,n);else for(;t!==null;){if(t.tag===3){Jc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=pr(n,e),e=Op(t,e,1),t=Vt(t,e,1),e=xe(),t!==null&&($o(t,1,e),_e(t,e));break}}t=t.return}}function hv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,ue===e&&(fe&n)===n&&(le===4||le===3&&(fe&130023424)===fe&&500>te()-yu?vn(e,0):vu|=n),_e(e,t)}function qp(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=xe();e=kt(e,t),e!==null&&($o(e,t,n),_e(e,n))}function gv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qp(e,n)}function vv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),qp(e,n)}var Jp;Jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,ov(e,t,n);$e=!!(e.flags&131072)}else $e=!1,K&&t.flags&1048576&&tp(t,zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ci(e,t),e=t.pendingProps;var o=ur(t,ye.current);or(t,n),o=du(null,t,r,e,o,n);var i=fu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(i=!0,_i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,lu(t),o.updater=rl,t.stateNode=o,o._reactInternals=t,la(t,r,e,n),t=ua(null,t,r,!0,i,n)):(t.tag=0,K&&i&&Za(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ci(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=wv(r),e=Ge(r,e),o){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Uc(null,t,r,e,n);break e;case 11:t=Fc(null,t,r,e,n);break e;case 14:t=Bc(null,t,r,Ge(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Uc(e,t,r,o,n);case 3:e:{if(Ap(t),e===null)throw Error($(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ip(e,t),Ni(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=pr(Error($(423)),t),t=Hc(e,t,r,n,o);break e}else if(r!==o){o=pr(Error($(424)),t),t=Hc(e,t,r,n,o);break e}else for(Oe=Wt(t.stateNode.containerInfo.firstChild),Re=t,K=!0,Ke=null,n=up(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===o){t=jt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return cp(t),e===null&&ra(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Js(r,o)?l=null:i!==null&&Js(r,i)&&(t.flags|=32),bp(e,t),we(e,t,l,n),t.child;case 6:return e===null&&ra(t),null;case 13:return Ip(e,t,n);case 4:return su(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=dr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),Fc(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(Oi,r._currentValue),r._currentValue=l,i!==null)if(tt(i.value,l)){if(i.children===o.children&&!Ee.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=wt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?a.next=a:(a.next=p.next,p.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),oa(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error($(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),oa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,or(t,n),o=Ue(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Ge(r,t.pendingProps),o=Ge(r.type,o),Bc(e,t,r,o,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ge(r,o),ci(e,t),t.tag=1,Pe(r)?(e=!0,_i(t)):e=!1,or(t,n),sp(t,r,o),la(t,r,o,n),ua(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Np(e,t,n)}throw Error($(156,t.tag))};function Zp(e,t){return Cf(e,t)}function yv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,r){return new yv(e,t,n,r)}function ku(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wv(e){if(typeof e=="function")return ku(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ba)return 11;if(e===Ua)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")ku(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Un:return yn(n.children,o,i,t);case Fa:l=8,o|=8;break;case zs:return e=Fe(12,n,t,o|2),e.elementType=zs,e.lanes=i,e;case Os:return e=Fe(13,n,t,o),e.elementType=Os,e.lanes=i,e;case Rs:return e=Fe(19,n,t,o),e.elementType=Rs,e.lanes=i,e;case af:return sl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lf:l=10;break e;case sf:l=9;break e;case Ba:l=11;break e;case Ua:l=14;break e;case bt:l=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=Fe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function yn(e,t,n,r){return e=Fe(7,e,r,t),e.lanes=n,e}function sl(e,t,n,r){return e=Fe(22,e,r,t),e.elementType=af,e.lanes=n,e.stateNode={isHidden:!1},e}function ds(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function fs(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xv(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ju(e,t,n,r,o,i,l,s,a){return e=new xv(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Fe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(i),e}function Sv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function em(e){if(!e)return Jt;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Zf(e,n,t)}return t}function tm(e,t,n,r,o,i,l,s,a){return e=ju(n,r,!0,e,o,i,l,s,a),e.context=em(null),n=e.current,r=xe(),o=Qt(n),i=wt(r,o),i.callback=t??null,Vt(n,i,o),e.current.lanes=o,$o(e,o,r),_e(e,r),e}function al(e,t,n,r){var o=t.current,i=xe(),l=Qt(o);return n=em(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Vt(o,t,l),e!==null&&(Ze(e,o,l,i),si(e,o,l)),l}function Bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $u(e,t){Zc(e,t),(e=e.alternate)&&Zc(e,t)}function kv(){return null}var nm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Cu(e){this._internalRoot=e}ul.prototype.render=Cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));al(e,t,null,null)};ul.prototype.unmount=Cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){al(null,e,null,null)}),t[St]=null}};function ul(e){this._internalRoot=e}ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<It.length&&t!==0&&t<It[n].priority;n++);It.splice(n,0,e),n===0&&bf(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function jv(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Bi(l);i.call(u)}}var l=tm(t,r,e,0,null,!1,!1,"",ed);return e._reactRootContainer=l,e[St]=l.current,uo(e.nodeType===8?e.parentNode:e),En(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Bi(a);s.call(u)}}var a=ju(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=a,e[St]=a.current,uo(e.nodeType===8?e.parentNode:e),En(function(){al(t,a,n,r)}),a}function dl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=Bi(l);s.call(a)}}al(t,l,e,o)}else l=jv(n,t,e,o,r);return Bi(l)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(Va(t,n|1),_e(t,te()),!(L&6)&&(mr=te()+500,rn()))}break;case 13:En(function(){var r=kt(e,1);if(r!==null){var o=xe();Ze(r,e,1,o)}}),$u(e,1)}};Xa=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=xe();Ze(t,e,134217728,n)}$u(e,134217728)}};Of=function(e){if(e.tag===13){var t=Qt(e),n=kt(e,t);if(n!==null){var r=xe();Ze(n,e,t,r)}$u(e,t)}};Rf=function(){return F};Nf=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Us=function(e,t,n){switch(t){case"input":if(As(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=tl(r);if(!o)throw Error($(90));cf(r),As(r,o)}}}break;case"textarea":ff(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};wf=wu;xf=En;var $v={usingClientEntryPoint:!1,Events:[Eo,Xn,tl,vf,yf,wu]},Lr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Cv={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jf(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{qi=Qo.inject(Cv),ut=Qo}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(t))throw Error($(200));return Sv(e,t,null,n)};Ae.createRoot=function(e,t){if(!Eu(e))throw Error($(299));var n=!1,r="",o=nm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ju(e,1,!1,null,null,n,!1,r,o),e[St]=t.current,uo(e.nodeType===8?e.parentNode:e),new Cu(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=jf(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return En(e)};Ae.hydrate=function(e,t,n){if(!cl(t))throw Error($(200));return dl(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!Eu(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=nm;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tm(t,null,e,1,n??null,o,!1,i,l),e[St]=t.current,uo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ul(t)};Ae.render=function(e,t,n){if(!cl(t))throw Error($(200));return dl(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!cl(e))throw Error($(40));return e._reactRootContainer?(En(function(){dl(null,null,e,!1,function(){e._reactRootContainer=null,e[St]=null})}),!0):!1};Ae.unstable_batchedUpdates=wu;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!cl(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return dl(e,t,n,!1,r)};Ae.version="18.2.0-next-9e3b772b8-20220608";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(e){console.error(e)}}rm(),ef.exports=Ae;var om=ef.exports,td=om;_s.createRoot=td.createRoot,_s.hydrateRoot=td.hydrateRoot;var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function Ui(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Q="-ms-",eo="-moz-",M="-webkit-",im="comm",fl="rule",Pu="decl",Ev="@import",lm="@keyframes",Pv="@layer",_v=Math.abs,_u=String.fromCharCode,Sa=Object.assign;function Tv(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function sm(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function mi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function hr(e,t,n){return e.slice(t,n)}function st(e){return e.length}function am(e){return e.length}function Hr(e,t){return t.push(e),e}function zv(e,t){return e.map(t).join("")}function nd(e,t){return e.filter(function(n){return!ht(n,t)})}var pl=1,gr=1,um=0,We=0,ne=0,Cr="";function ml(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:pl,column:gr,length:l,return:"",siblings:s}}function Nt(e,t){return Sa(ml("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Nt(e.root,{children:[e]});Hr(e,e.siblings)}function Ov(){return ne}function Rv(){return ne=We>0?ae(Cr,--We):0,gr--,ne===10&&(gr=1,pl--),ne}function et(){return ne=We<um?ae(Cr,We++):0,gr++,ne===10&&(gr=1,pl++),ne}function wn(){return ae(Cr,We)}function hi(){return We}function hl(e,t){return hr(Cr,e,t)}function ka(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Nv(e){return pl=gr=1,um=st(Cr=e),We=0,[]}function bv(e){return Cr="",e}function ps(e){return sm(hl(We-1,ja(e===91?e+2:e===40?e+1:e)))}function Av(e){for(;(ne=wn())&&ne<33;)et();return ka(e)>2||ka(ne)>3?"":" "}function Iv(e,t){for(;--t&&et()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return hl(e,hi()+(t<6&&wn()==32&&et()==32))}function ja(e){for(;et();)switch(ne){case e:return We;case 34:case 39:e!==34&&e!==39&&ja(ne);break;case 40:e===41&&ja(e);break;case 92:et();break}return We}function Lv(e,t){for(;et()&&e+ne!==47+10;)if(e+ne===42+42&&wn()===47)break;return"/*"+hl(t,We-1)+"*"+_u(e===47?e:et())}function Dv(e){for(;!ka(wn());)et();return hl(e,We)}function Mv(e){return bv(gi("",null,null,null,[""],e=Nv(e),0,[0],e))}function gi(e,t,n,r,o,i,l,s,a){for(var u=0,p=0,g=l,m=0,v=0,y=0,w=1,P=1,f=1,d=0,h="",S=o,j=i,C=r,k=h;P;)switch(y=d,d=et()){case 40:if(y!=108&&ae(k,g-1)==58){mi(k+=A(ps(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=ps(d);break;case 9:case 10:case 13:case 32:k+=Av(y);break;case 92:k+=Iv(hi()-1,7);continue;case 47:switch(wn()){case 42:case 47:Hr(Fv(Lv(et(),hi()),t,n,a),a);break;default:k+="/"}break;case 123*w:s[u++]=st(k)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+p:f==-1&&(k=A(k,/\f/g,"")),v>0&&st(k)-g&&Hr(v>32?od(k+";",r,n,g-1,a):od(A(k," ","")+";",r,n,g-2,a),a);break;case 59:k+=";";default:if(Hr(C=rd(k,t,n,u,p,o,s,h,S=[],j=[],g,i),i),d===123)if(p===0)gi(k,t,C,C,S,i,g,s,j);else switch(m===99&&ae(k,3)===110?100:m){case 100:case 108:case 109:case 115:gi(e,C,C,r&&Hr(rd(e,C,C,0,0,o,s,h,o,S=[],g,j),j),o,j,g,s,r?S:j);break;default:gi(k,C,C,C,[""],j,0,s,j)}}u=p=v=0,w=f=1,h=k="",g=l;break;case 58:g=1+st(k),v=y;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&Rv()==125)continue}switch(k+=_u(d),d*w){case 38:f=p>0?1:(k+="\f",-1);break;case 44:s[u++]=(st(k)-1)*f,f=1;break;case 64:wn()===45&&(k+=ps(et())),m=wn(),p=g=st(h=k+=Dv(hi())),d++;break;case 45:y===45&&st(k)==2&&(w=0)}}return i}function rd(e,t,n,r,o,i,l,s,a,u,p,g){for(var m=o-1,v=o===0?i:[""],y=am(v),w=0,P=0,f=0;w<r;++w)for(var d=0,h=hr(e,m+1,m=_v(P=l[w])),S=e;d<y;++d)(S=sm(P>0?v[d]+" "+h:A(h,/&\f/g,v[d])))&&(a[f++]=S);return ml(e,t,n,o===0?fl:s,a,u,p,g)}function Fv(e,t,n,r){return ml(e,t,n,im,_u(Ov()),hr(e,2,-2),0,r)}function od(e,t,n,r,o){return ml(e,t,n,Pu,hr(e,0,r),hr(e,r+1,-1),r,o)}function cm(e,t,n){switch(Tv(e,t)){case 5103:return M+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+e+e;case 4789:return eo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return M+e+eo+e+Q+e+e;case 5936:switch(ae(e,t+11)){case 114:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return M+e+Q+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return M+e+Q+e+e;case 6165:return M+e+Q+"flex-"+e+e;case 5187:return M+e+A(e,/(\w+).+(:[^]+)/,M+"box-$1$2"+Q+"flex-$1$2")+e;case 5443:return M+e+Q+"flex-item-"+A(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":Q+"grid-row-"+A(e,/flex-|-self/g,""))+e;case 4675:return M+e+Q+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return M+e+Q+A(e,"shrink","negative")+e;case 5292:return M+e+Q+A(e,"basis","preferred-size")+e;case 6060:return M+"box-"+A(e,"-grow","")+M+e+Q+A(e,"grow","positive")+e;case 4554:return M+A(e,/([^-])(transform)/g,"$1"+M+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+Q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+e+e;case 4200:if(!ht(e,/flex-|baseline/))return Q+"grid-column-align"+hr(e,t)+e;break;case 2592:case 3360:return Q+A(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ht(r.props,/grid-\w+-end/)})?~mi(e+(n=n[t].value),"span")?e:Q+A(e,"-start","")+e+Q+"grid-row-span:"+(~mi(n,"span")?ht(n,/\d+/):+ht(n,/\d+/)-+ht(e,/\d+/))+";":Q+A(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:Q+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,M+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+eo+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~mi(e,"stretch")?cm(A(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return Q+o+":"+i+u+(l?Q+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return A(e,":",":"+M)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+M+(ae(e,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+Q+"$2box$3")+e;case 100:return A(e,":",":"+Q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function Hi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bv(e,t,n,r){switch(e.type){case Pv:if(e.children.length)break;case Ev:case Pu:return e.return=e.return||e.value;case im:return"";case lm:return e.return=e.value+"{"+Hi(e.children,r)+"}";case fl:if(!st(e.value=e.props.join(",")))return""}return st(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Uv(e){var t=am(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Hv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Pu:e.return=cm(e.value,e.length,n);return;case lm:return Hi([Nt(e,{value:A(e.value,"@","@"+M)})],r);case fl:if(e.length)return zv(n=e.props,function(o){switch(ht(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Nt(e,{props:[A(o,/:(read-\w+)/,":"+eo+"$1")]})),On(Nt(e,{props:[o]})),Sa(e,{props:nd(n,r)});break;case"::placeholder":On(Nt(e,{props:[A(o,/:(plac\w+)/,":"+M+"input-$1")]})),On(Nt(e,{props:[A(o,/:(plac\w+)/,":"+eo+"$1")]})),On(Nt(e,{props:[A(o,/:(plac\w+)/,Q+"input-$1")]})),On(Nt(e,{props:[o]})),Sa(e,{props:nd(n,r)});break}return""})}}var Vv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Tu=typeof window<"u"&&"HTMLElement"in window,Xv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),zu=Object.freeze([]),yr=Object.freeze({});function Qv(e,t,n){return n===void 0&&(n=yr),e.theme!==n.theme&&e.theme||t||n.theme}var dm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Gv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yv=/(^-|-$)/g;function id(e){return e.replace(Gv,"-").replace(Yv,"")}var Kv=/(a)(d)/gi,ld=function(e){return String.fromCharCode(e+(e>25?39:97))};function $a(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ld(t%52)+n;return(ld(t%52)+n).replace(Kv,"$1-$2")}var ms,Zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fm=function(e){return Zn(5381,e)};function qv(e){return $a(fm(e)>>>0)}function Jv(e){return e.displayName||e.name||"Component"}function hs(e){return typeof e=="string"&&!0}var pm=typeof Symbol=="function"&&Symbol.for,mm=pm?Symbol.for("react.memo"):60115,Zv=pm?Symbol.for("react.forward_ref"):60112,ey={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ty={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ny=((ms={})[Zv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ms[mm]=hm,ms);function sd(e){return("type"in(t=e)&&t.type.$$typeof)===mm?hm:"$$typeof"in e?ny[e.$$typeof]:ey;var t}var ry=Object.defineProperty,oy=Object.getOwnPropertyNames,ad=Object.getOwnPropertySymbols,iy=Object.getOwnPropertyDescriptor,ly=Object.getPrototypeOf,ud=Object.prototype;function gm(e,t,n){if(typeof t!="string"){if(ud){var r=ly(t);r&&r!==ud&&gm(e,r,n)}var o=oy(t);ad&&(o=o.concat(ad(t)));for(var i=sd(e),l=sd(t),s=0;s<o.length;++s){var a=o[s];if(!(a in ty||n&&n[a]||l&&a in l||i&&a in i)){var u=iy(t,a);try{ry(e,a,u)}catch{}}}}return e}function wr(e){return typeof e=="function"}function Ou(e){return typeof e=="object"&&"styledComponentId"in e}function gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function cd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ca(e,t,n){if(n===void 0&&(n=!1),!n&&!wo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ca(e[r],t[r]);else if(wo(t))for(var r in t)e[r]=Ca(e[r],t[r]);return e}function Ru(e,t){Object.defineProperty(e,"toString",{value:t})}function _o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw _o(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),vi=new Map,Wi=new Map,gs=1,Go=function(e){if(vi.has(e))return vi.get(e);for(;Wi.has(gs);)gs++;var t=gs++;return vi.set(e,t),Wi.set(t,e),t},ay=function(e,t){vi.set(e,t),Wi.set(t,e)},uy="style[".concat(vr,"][").concat("data-styled-version",'="').concat("6.0.1",'"]'),cy=new RegExp("^".concat(vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dy=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},fy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(cy);if(a){var u=0|parseInt(a[1],10),p=a[2];u!==0&&(ay(p,u),dy(e,p,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function py(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){return Array.from(s.querySelectorAll("style[".concat(vr,"]"))).at(-1)}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(vr,"active"),r.setAttribute("data-styled-version","6.0.1");var l=py();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},my=function(){function e(t){this.element=vm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw _o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),hy=function(){function e(t){this.element=vm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dd=Tu,vy={isServer:!Tu,useCSSOMInjection:!Xv},ym=function(){function e(t,n,r){t===void 0&&(t=yr),n===void 0&&(n={});var o=this;this.options=Ce(Ce({},vy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tu&&dd&&(dd=!1,function(i){for(var l=document.querySelectorAll(uy),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(vr)!=="active"&&(fy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ru(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(g){var m=function(f){return Wi.get(f)}(g);if(m===void 0)return"continue";var v=i.names.get(m),y=l.getGroup(g);if(v===void 0||y.length===0)return"continue";var w="".concat(vr,".g").concat(g,'[id="').concat(m,'"]'),P="";v!==void 0&&v.forEach(function(f){f.length>0&&(P+="".concat(f,","))}),a+="".concat(y).concat(w,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},p=0;p<s;p++)u(p);return a}(o)})}return e.registerId=function(t){return Go(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new gy(o):r?new my(o):new hy(o)}(this.options),new sy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),yy=/&/g,wy=/^\s*\/\/.*$/gm;function wm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wm(n.children,t)),n})}function xy(e){var t,n,r,o=e===void 0?yr:e,i=o.options,l=i===void 0?yr:i,s=o.plugins,a=s===void 0?zu:s,u=function(m,v,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},p=a.slice();p.push(function(m){m.type===fl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(yy,n).replace(r,u))}),l.prefix&&p.push(Wv),p.push(Bv);var g=function(m,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var P=m.replace(wy,""),f=Mv(y||v?"".concat(y," ").concat(v," { ").concat(P," }"):P);l.namespace&&(f=wm(f,l.namespace));var d=[];return Hi(f,Uv(p.concat(Hv(function(h){return d.push(h)})))),d};return g.hash=a.length?a.reduce(function(m,v){return v.name||_o(15),Zn(m,v.name)},5381).toString():"",g}var Sy=new ym,Ea=xy(),xm=Sn.createContext({shouldForwardProp:void 0,styleSheet:Sy,stylis:Ea});xm.Consumer;Sn.createContext(void 0);function fd(){return O.useContext(xm)}var ky=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ea);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ru(this,function(){throw _o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ea),this.name+t.hash},e}(),jy=function(e){return e>="A"&&e<="Z"};function pd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;jy(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sm=function(e){return e==null||e===!1||e===""},km=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Sm(i)&&(Array.isArray(i)&&i.isCss||wr(i)?r.push("".concat(pd(o),":"),i,";"):wo(i)?r.push.apply(r,Ui(Ui(["".concat(o," {")],km(i),!1),["}"],!1)):r.push("".concat(pd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Vv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(Sm(e))return[];if(Ou(e))return[".".concat(e.styledComponentId)];if(wr(e)){if(!wr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return xn(o,t,n,r)}var i;return e instanceof ky?n?(e.inject(n,r),[e.getName(r)]):[e]:wo(e)?km(e):Array.isArray(e)?e.flatMap(function(l){return xn(l,t,n,r)}):[e.toString()]}function $y(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wr(n)&&!Ou(n))return!1}return!0}var Cy=fm("6.0.1"),Ey=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$y(t),this.componentId=n,this.baseHash=Zn(Cy,n),this.baseStyle=r,ym.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=gn(o,this.staticRulesId);else{var i=cd(xn(this.rules,t,n,r)),l=$a(Zn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=gn(o,l),this.staticRulesId=l}else{for(var a=Zn(this.baseHash,r.hash),u="",p=0;p<this.rules.length;p++){var g=this.rules[p];if(typeof g=="string")u+=g;else if(g){var m=cd(xn(g,t,n,r));a=Zn(a,m),u+=m}}if(u){var v=$a(a>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=gn(o,v)}}return o},e}(),jm=Sn.createContext(void 0);jm.Consumer;var vs={};function Py(e,t,n){var r=Ou(e),o=e,i=!hs(e),l=t.attrs,s=l===void 0?zu:l,a=t.componentId,u=a===void 0?function(S,j){var C=typeof S!="string"?"sc":id(S);vs[C]=(vs[C]||0)+1;var k="".concat(C,"-").concat(qv("6.0.1"+C+vs[C]));return j?"".concat(j,"-").concat(k):k}(t.displayName,t.parentComponentId):a,p=t.displayName,g=p===void 0?function(S){return hs(S)?"styled.".concat(S):"Styled(".concat(Jv(S),")")}(e):p,m=t.displayName&&t.componentId?"".concat(id(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;y=function(S,j){return w(S,j)&&P(S,j)}}else y=w}var f=new Ey(n,m,r?o.componentStyle:void 0);f.isStatic&&s.length;function d(S,j){return function(C,k,z,D){var N=C.attrs,oe=C.componentStyle,ln=C.defaultProps,sn=C.foldedComponentIds,To=C.styledComponentId,Ml=C.target,Pr=Sn.useContext(jm),_r=fd(),_=C.shouldForwardProp||_r.shouldForwardProp,R=function(Et,Te,pt){for(var Tr,un=Ce(Ce({},Te),{className:void 0,theme:pt}),Fl=0;Fl<Et.length;Fl+=1){var zo=wr(Tr=Et[Fl])?Tr(un):Tr;for(var Pt in zo)un[Pt]=Pt==="className"?gn(un[Pt],zo[Pt]):Pt==="style"?Ce(Ce({},un[Pt]),zo[Pt]):zo[Pt]}return Te.className&&(un.className=gn(un.className,Te.className)),un}(N,k,Qv(k,Pr,ln)||yr),b=R.as||Ml,H={};for(var W in R)R[W]===void 0||W[0]==="$"||W==="as"||W==="theme"||(W==="forwardedAs"?H.as=R.forwardedAs:_&&!_(W,b)||(H[W]=R[W]));var an=function(Et,Te){var pt=fd(),Tr=Et.generateAndInjectStyles(Te,pt.styleSheet,pt.stylis);return Tr}(oe,R),Xe=gn(sn,To);return an&&(Xe+=" "+an),R.className&&(Xe+=" "+R.className),H[hs(b)&&!dm.has(b)?"class":"className"]=Xe,H.ref=z,O.createElement(b,H)}(h,S,j)}d.displayName=g;var h=Sn.forwardRef(d);return h.attrs=v,h.componentStyle=f,h.displayName=g,h.shouldForwardProp=y,h.foldedComponentIds=r?gn(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=m,h.target=r?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(j){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var z=0,D=C;z<D.length;z++)Ca(j,D[z],!0);return j}({},o.defaultProps,S):S}}),Ru(h,function(){return".".concat(h.styledComponentId)}),i&&gm(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function md(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var hd=function(e){return Object.assign(e,{isCss:!0})};function Nu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wr(e)||wo(e)){var r=e;return hd(xn(md(zu,Ui([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?xn(o):hd(xn(md(o,t)))}function Pa(e,t,n){if(n===void 0&&(n=yr),!t)throw _o(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Nu.apply(void 0,Ui([o],i,!1)))};return r.attrs=function(o){return Pa(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Pa(e,t,Ce(Ce({},n),o))},r}var $m=function(e){return Pa(Py,e)},x=$m;dm.forEach(function(e){x[e]=$m(e)});const Cm=O.createContext("ThemeContext"),_y=({children:e})=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),n=window.matchMedia("(prefers-color-scheme: light)"),[r,o]=O.useState(t.matches);return O.useEffect(()=>{document.documentElement.setAttribute("data-theme",r?"dark":"light")},[r]),O.useEffect(()=>{const i=s=>s.matches&&o(!0),l=s=>s.matches&&o(!1);return t.addEventListener("change",i),n.addEventListener("change",l),()=>{t.removeEventListener("change",i),n.removeEventListener("change",l)}}),c.jsx(Cm.Provider,{value:[r,o],children:e})};var Em={exports:{}},Pm={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xr=O;function Ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zy=typeof Object.is=="function"?Object.is:Ty,Oy=xr.useState,Ry=xr.useEffect,Ny=xr.useLayoutEffect,by=xr.useDebugValue;function Ay(e,t){var n=t(),r=Oy({inst:{value:n,getSnapshot:t}}),o=r[0].inst,i=r[1];return Ny(function(){o.value=n,o.getSnapshot=t,ys(o)&&i({inst:o})},[e,n,t]),Ry(function(){return ys(o)&&i({inst:o}),e(function(){ys(o)&&i({inst:o})})},[e]),by(n),n}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zy(e,n)}catch{return!0}}function Iy(e,t){return t()}var Ly=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Iy:Ay;Pm.useSyncExternalStore=xr.useSyncExternalStore!==void 0?xr.useSyncExternalStore:Ly;Em.exports=Pm;var Dy=Em.exports,_m={exports:{}},Tm={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=O,My=Dy;function Fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var By=typeof Object.is=="function"?Object.is:Fy,Uy=My.useSyncExternalStore,Hy=gl.useRef,Wy=gl.useEffect,Vy=gl.useMemo,Xy=gl.useDebugValue;Tm.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var i=Hy(null);if(i.current===null){var l={hasValue:!1,value:null};i.current=l}else l=i.current;i=Vy(function(){function a(v){if(!u){if(u=!0,p=v,v=r(v),o!==void 0&&l.hasValue){var y=l.value;if(o(y,v))return g=y}return g=v}if(y=g,By(p,v))return y;var w=r(v);return o!==void 0&&o(y,w)?y:(p=v,g=w)}var u=!1,p,g,m=n===void 0?null:n;return[function(){return a(t())},m===null?void 0:function(){return a(m())}]},[t,n,r,o]);var s=Uy(e,i[0],i[1]);return Wy(function(){l.hasValue=!0,l.value=s},[s]),Xy(s),s};_m.exports=Tm;var Qy=_m.exports;function Gy(e){e()}let zm=Gy;const Yy=e=>zm=e,Ky=()=>zm,gd=Symbol.for(`react-redux-context-${O.version}`),vd=globalThis;function qy(){let e=vd[gd];return e||(e=O.createContext(null),vd[gd]=e),e}const Zt=new Proxy({},new Proxy({},{get(e,t){const n=qy();return(r,...o)=>Reflect[t](n,...o)}}));function bu(e=Zt){return function(){return O.useContext(e)}}const Om=bu(),Jy=()=>{throw new Error("uSES not initialized!")};let Rm=Jy;const Zy=e=>{Rm=e},e0=(e,t)=>e===t;function t0(e=Zt){const t=e===Zt?Om:bu(e);return function(r,o={}){const{equalityFn:i=e0,stabilityCheck:l=void 0,noopCheck:s=void 0}=typeof o=="function"?{equalityFn:o}:o,{store:a,subscription:u,getServerState:p,stabilityCheck:g,noopCheck:m}=t();O.useRef(!0);const v=O.useCallback({[r.name](w){return r(w)}}[r.name],[r,g,l]),y=Rm(u.addNestedSub,a.getState,p||a.getState,v,i);return O.useDebugValue(y),y}}const ft=t0();var Nm={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Au=ce?Symbol.for("react.element"):60103,Iu=ce?Symbol.for("react.portal"):60106,vl=ce?Symbol.for("react.fragment"):60107,yl=ce?Symbol.for("react.strict_mode"):60108,wl=ce?Symbol.for("react.profiler"):60114,xl=ce?Symbol.for("react.provider"):60109,Sl=ce?Symbol.for("react.context"):60110,Lu=ce?Symbol.for("react.async_mode"):60111,kl=ce?Symbol.for("react.concurrent_mode"):60111,jl=ce?Symbol.for("react.forward_ref"):60112,$l=ce?Symbol.for("react.suspense"):60113,n0=ce?Symbol.for("react.suspense_list"):60120,Cl=ce?Symbol.for("react.memo"):60115,El=ce?Symbol.for("react.lazy"):60116,r0=ce?Symbol.for("react.block"):60121,o0=ce?Symbol.for("react.fundamental"):60117,i0=ce?Symbol.for("react.responder"):60118,l0=ce?Symbol.for("react.scope"):60119;function Le(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Au:switch(e=e.type,e){case Lu:case kl:case vl:case wl:case yl:case $l:return e;default:switch(e=e&&e.$$typeof,e){case Sl:case jl:case El:case Cl:case xl:return e;default:return t}}case Iu:return t}}}function bm(e){return Le(e)===kl}B.AsyncMode=Lu;B.ConcurrentMode=kl;B.ContextConsumer=Sl;B.ContextProvider=xl;B.Element=Au;B.ForwardRef=jl;B.Fragment=vl;B.Lazy=El;B.Memo=Cl;B.Portal=Iu;B.Profiler=wl;B.StrictMode=yl;B.Suspense=$l;B.isAsyncMode=function(e){return bm(e)||Le(e)===Lu};B.isConcurrentMode=bm;B.isContextConsumer=function(e){return Le(e)===Sl};B.isContextProvider=function(e){return Le(e)===xl};B.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Au};B.isForwardRef=function(e){return Le(e)===jl};B.isFragment=function(e){return Le(e)===vl};B.isLazy=function(e){return Le(e)===El};B.isMemo=function(e){return Le(e)===Cl};B.isPortal=function(e){return Le(e)===Iu};B.isProfiler=function(e){return Le(e)===wl};B.isStrictMode=function(e){return Le(e)===yl};B.isSuspense=function(e){return Le(e)===$l};B.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vl||e===kl||e===wl||e===yl||e===$l||e===n0||typeof e=="object"&&e!==null&&(e.$$typeof===El||e.$$typeof===Cl||e.$$typeof===xl||e.$$typeof===Sl||e.$$typeof===jl||e.$$typeof===o0||e.$$typeof===i0||e.$$typeof===l0||e.$$typeof===r0)};B.typeOf=Le;Nm.exports=B;var s0=Nm.exports,Am=s0,a0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Im={};Im[Am.ForwardRef]=a0;Im[Am.Memo]=u0;var U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),Mu=Symbol.for("react.portal"),Pl=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),Tl=Symbol.for("react.profiler"),zl=Symbol.for("react.provider"),Ol=Symbol.for("react.context"),c0=Symbol.for("react.server_context"),Rl=Symbol.for("react.forward_ref"),Nl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),Il=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Lm;Lm=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Du:switch(e=e.type,e){case Pl:case Tl:case _l:case Nl:case bl:return e;default:switch(e=e&&e.$$typeof,e){case c0:case Ol:case Rl:case Il:case Al:case zl:return e;default:return t}}case Mu:return t}}}U.ContextConsumer=Ol;U.ContextProvider=zl;U.Element=Du;U.ForwardRef=Rl;U.Fragment=Pl;U.Lazy=Il;U.Memo=Al;U.Portal=Mu;U.Profiler=Tl;U.StrictMode=_l;U.Suspense=Nl;U.SuspenseList=bl;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Ve(e)===Ol};U.isContextProvider=function(e){return Ve(e)===zl};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du};U.isForwardRef=function(e){return Ve(e)===Rl};U.isFragment=function(e){return Ve(e)===Pl};U.isLazy=function(e){return Ve(e)===Il};U.isMemo=function(e){return Ve(e)===Al};U.isPortal=function(e){return Ve(e)===Mu};U.isProfiler=function(e){return Ve(e)===Tl};U.isStrictMode=function(e){return Ve(e)===_l};U.isSuspense=function(e){return Ve(e)===Nl};U.isSuspenseList=function(e){return Ve(e)===bl};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pl||e===Tl||e===_l||e===Nl||e===bl||e===d0||typeof e=="object"&&e!==null&&(e.$$typeof===Il||e.$$typeof===Al||e.$$typeof===zl||e.$$typeof===Ol||e.$$typeof===Rl||e.$$typeof===Lm||e.getModuleId!==void 0)};U.typeOf=Ve;function f0(){const e=Ky();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const yd={notify(){},get:()=>[]};function p0(e,t){let n,r=yd;function o(g){return a(),r.subscribe(g)}function i(){r.notify()}function l(){p.onStateChange&&p.onStateChange()}function s(){return!!n}function a(){n||(n=t?t.addNestedSub(l):e.subscribe(l),r=f0())}function u(){n&&(n(),n=void 0,r.clear(),r=yd)}const p={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:l,isSubscribed:s,trySubscribe:a,tryUnsubscribe:u,getListeners:()=>r};return p}const m0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",h0=m0?O.useLayoutEffect:O.useEffect;function g0({store:e,context:t,children:n,serverState:r,stabilityCheck:o="once",noopCheck:i="once"}){const l=O.useMemo(()=>{const u=p0(e);return{store:e,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:o,noopCheck:i}},[e,r,o,i]),s=O.useMemo(()=>e.getState(),[e]);h0(()=>{const{subscription:u}=l;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[l,s]);const a=t||Zt;return Sn.createElement(a.Provider,{value:l},n)}function Dm(e=Zt){const t=e===Zt?Om:bu(e);return function(){const{store:r}=t();return r}}const v0=Dm();function y0(e=Zt){const t=e===Zt?v0:Dm(e);return function(){return t().dispatch}}const Ll=y0();Zy(Qy.useSyncExternalStoreWithSelector);Yy(om.unstable_batchedUpdates);function qe(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function en(e){return!!e&&!!e[Y]}function $t(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===P0}(e)||Array.isArray(e)||!!e[Cd]||!!(!((t=e.constructor)===null||t===void 0)&&t[Cd])||Fu(e)||Bu(e))}function Pn(e,t,n){n===void 0&&(n=!1),Er(e)===0?(n?Object.keys:sr)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function Er(e){var t=e[Y];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Fu(e)?2:Bu(e)?3:0}function lr(e,t){return Er(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function w0(e,t){return Er(e)===2?e.get(t):e[t]}function Mm(e,t,n){var r=Er(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Fm(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Fu(e){return C0&&e instanceof Map}function Bu(e){return E0&&e instanceof Set}function fn(e){return e.o||e.t}function Uu(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Um(e);delete t[Y];for(var n=sr(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function Hu(e,t){return t===void 0&&(t=!1),Wu(e)||en(e)||!$t(e)||(Er(e)>1&&(e.set=e.add=e.clear=e.delete=x0),Object.freeze(e),t&&Pn(e,function(n,r){return Hu(r,!0)},!0)),e}function x0(){qe(2)}function Wu(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function dt(e){var t=Oa[e];return t||qe(18,e),t}function S0(e,t){Oa[e]||(Oa[e]=t)}function _a(){return xo}function ws(e,t){t&&(dt("Patches"),e.u=[],e.s=[],e.v=t)}function Vi(e){Ta(e),e.p.forEach(k0),e.p=null}function Ta(e){e===xo&&(xo=e.l)}function wd(e){return xo={p:[],l:xo,h:e,m:!0,_:0}}function k0(e){var t=e[Y];t.i===0||t.i===1?t.j():t.g=!0}function xs(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.O||dt("ES5").S(t,e,r),r?(n[Y].P&&(Vi(t),qe(4)),$t(e)&&(e=Xi(t,e),t.l||Qi(t,e)),t.u&&dt("Patches").M(n[Y].t,e,t.u,t.s)):e=Xi(t,n,[]),Vi(t),t.u&&t.v(t.u,t.s),e!==Bm?e:void 0}function Xi(e,t,n){if(Wu(t))return t;var r=t[Y];if(!r)return Pn(t,function(s,a){return xd(e,r,t,s,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return Qi(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=Uu(r.k):r.o,i=o,l=!1;r.i===3&&(i=new Set(o),o.clear(),l=!0),Pn(i,function(s,a){return xd(e,r,o,s,a,n,l)}),Qi(e,o,!1),n&&e.u&&dt("Patches").N(r,n,e.u,e.s)}return r.o}function xd(e,t,n,r,o,i,l){if(en(o)){var s=Xi(e,o,i&&t&&t.i!==3&&!lr(t.R,r)?i.concat(r):void 0);if(Mm(n,r,s),!en(s))return;e.m=!1}else l&&n.add(o);if($t(o)&&!Wu(o)){if(!e.h.D&&e._<1)return;Xi(e,o),t&&t.A.l||Qi(e,o)}}function Qi(e,t,n){n===void 0&&(n=!1),!e.l&&e.h.D&&e.m&&Hu(t,n)}function Ss(e,t){var n=e[Y];return(n?fn(n):e)[t]}function Sd(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function Dt(e){e.P||(e.P=!0,e.l&&Dt(e.l))}function ks(e){e.o||(e.o=Uu(e.t))}function za(e,t,n){var r=Fu(t)?dt("MapSet").F(t,n):Bu(t)?dt("MapSet").T(t,n):e.O?function(o,i){var l=Array.isArray(o),s={i:l?1:0,A:i?i.A:_a(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},a=s,u=So;l&&(a=[s],u=Wr);var p=Proxy.revocable(a,u),g=p.revoke,m=p.proxy;return s.k=m,s.j=g,m}(t,n):dt("ES5").J(t,n);return(n?n.A:_a()).p.push(r),r}function j0(e){return en(e)||qe(22,e),function t(n){if(!$t(n))return n;var r,o=n[Y],i=Er(n);if(o){if(!o.P&&(o.i<4||!dt("ES5").K(o)))return o.t;o.I=!0,r=kd(n,i),o.I=!1}else r=kd(n,i);return Pn(r,function(l,s){o&&w0(o.t,l)===s||Mm(r,l,t(s))}),i===3?new Set(r):r}(e)}function kd(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Uu(e)}function $0(){function e(i,l){var s=o[i];return s?s.enumerable=l:o[i]=s={configurable:!0,enumerable:l,get:function(){var a=this[Y];return So.get(a,i)},set:function(a){var u=this[Y];So.set(u,i,a)}},s}function t(i){for(var l=i.length-1;l>=0;l--){var s=i[l][Y];if(!s.P)switch(s.i){case 5:r(s)&&Dt(s);break;case 4:n(s)&&Dt(s)}}}function n(i){for(var l=i.t,s=i.k,a=sr(s),u=a.length-1;u>=0;u--){var p=a[u];if(p!==Y){var g=l[p];if(g===void 0&&!lr(l,p))return!0;var m=s[p],v=m&&m[Y];if(v?v.t!==g:!Fm(m,g))return!0}}var y=!!l[Y];return a.length!==sr(l).length+(y?0:1)}function r(i){var l=i.k;if(l.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(l,l.length-1);if(s&&!s.get)return!0;for(var a=0;a<l.length;a++)if(!l.hasOwnProperty(a))return!0;return!1}var o={};S0("ES5",{J:function(i,l){var s=Array.isArray(i),a=function(p,g){if(p){for(var m=Array(g.length),v=0;v<g.length;v++)Object.defineProperty(m,""+v,e(v,!0));return m}var y=Um(g);delete y[Y];for(var w=sr(y),P=0;P<w.length;P++){var f=w[P];y[f]=e(f,p||!!y[f].enumerable)}return Object.create(Object.getPrototypeOf(g),y)}(s,i),u={i:s?5:4,A:l?l.A:_a(),P:!1,I:!1,R:{},l,t:i,k:a,o:null,g:!1,C:!1};return Object.defineProperty(a,Y,{value:u,writable:!0}),a},S:function(i,l,s){s?en(l)&&l[Y].A===i&&t(i.p):(i.u&&function a(u){if(u&&typeof u=="object"){var p=u[Y];if(p){var g=p.t,m=p.k,v=p.R,y=p.i;if(y===4)Pn(m,function(h){h!==Y&&(g[h]!==void 0||lr(g,h)?v[h]||a(m[h]):(v[h]=!0,Dt(p)))}),Pn(g,function(h){m[h]!==void 0||lr(m,h)||(v[h]=!1,Dt(p))});else if(y===5){if(r(p)&&(Dt(p),v.length=!0),m.length<g.length)for(var w=m.length;w<g.length;w++)v[w]=!1;else for(var P=g.length;P<m.length;P++)v[P]=!0;for(var f=Math.min(m.length,g.length),d=0;d<f;d++)m.hasOwnProperty(d)||(v[d]=!0),v[d]===void 0&&a(m[d])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var jd,xo,Vu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",C0=typeof Map<"u",E0=typeof Set<"u",$d=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Bm=Vu?Symbol.for("immer-nothing"):((jd={})["immer-nothing"]=!0,jd),Cd=Vu?Symbol.for("immer-draftable"):"__$immer_draftable",Y=Vu?Symbol.for("immer-state"):"__$immer_state",P0=""+Object.prototype.constructor,sr=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Um=Object.getOwnPropertyDescriptors||function(e){var t={};return sr(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},Oa={},So={get:function(e,t){if(t===Y)return e;var n=fn(e);if(!lr(n,t))return function(o,i,l){var s,a=Sd(i,l);return a?"value"in a?a.value:(s=a.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!$t(r)?r:r===Ss(e.t,t)?(ks(e),e.o[t]=za(e.A.h,r,e)):r},has:function(e,t){return t in fn(e)},ownKeys:function(e){return Reflect.ownKeys(fn(e))},set:function(e,t,n){var r=Sd(fn(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=Ss(fn(e),t),i=o==null?void 0:o[Y];if(i&&i.t===n)return e.o[t]=n,e.R[t]=!1,!0;if(Fm(n,o)&&(n!==void 0||lr(e.t,t)))return!0;ks(e),Dt(e)}return e.o[t]===n&&(n!==void 0||t in e.o)||Number.isNaN(n)&&Number.isNaN(e.o[t])||(e.o[t]=n,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ss(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,ks(e),Dt(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=fn(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){qe(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){qe(12)}},Wr={};Pn(So,function(e,t){Wr[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Wr.deleteProperty=function(e,t){return Wr.set.call(this,e,t,void 0)},Wr.set=function(e,t,n){return So.set.call(this,e[0],t,n,e[0])};var _0=function(){function e(n){var r=this;this.O=$d,this.D=!0,this.produce=function(o,i,l){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var a=r;return function(w){var P=this;w===void 0&&(w=s);for(var f=arguments.length,d=Array(f>1?f-1:0),h=1;h<f;h++)d[h-1]=arguments[h];return a.produce(w,function(S){var j;return(j=i).call.apply(j,[P,S].concat(d))})}}var u;if(typeof i!="function"&&qe(6),l!==void 0&&typeof l!="function"&&qe(7),$t(o)){var p=wd(r),g=za(r,o,void 0),m=!0;try{u=i(g),m=!1}finally{m?Vi(p):Ta(p)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(w){return ws(p,l),xs(w,p)},function(w){throw Vi(p),w}):(ws(p,l),xs(u,p))}if(!o||typeof o!="object"){if((u=i(o))===void 0&&(u=o),u===Bm&&(u=void 0),r.D&&Hu(u,!0),l){var v=[],y=[];dt("Patches").M(o,u,v,y),l(v,y)}return u}qe(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(u){for(var p=arguments.length,g=Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];return r.produceWithPatches(u,function(v){return o.apply(void 0,[v].concat(g))})};var l,s,a=r.produce(o,i,function(u,p){l=u,s=p});return typeof Promise<"u"&&a instanceof Promise?a.then(function(u){return[u,l,s]}):[a,l,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){$t(n)||qe(8),en(n)&&(n=j0(n));var r=wd(this),o=za(this,n,void 0);return o[Y].C=!0,Ta(r),o},t.finishDraft=function(n,r){var o=n&&n[Y],i=o.A;return ws(i,r),xs(void 0,i)},t.setAutoFreeze=function(n){this.D=n},t.setUseProxies=function(n){n&&!$d&&qe(20),this.O=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var l=dt("Patches").$;return en(n)?l(n,r):this.produce(n,function(s){return l(s,r)})},e}(),be=new _0,Hm=be.produce;be.produceWithPatches.bind(be);be.setAutoFreeze.bind(be);be.setUseProxies.bind(be);be.applyPatches.bind(be);be.createDraft.bind(be);be.finishDraft.bind(be);function ko(e){"@babel/helpers - typeof";return ko=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ko(e)}function T0(e,t){if(ko(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ko(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function z0(e){var t=T0(e,"string");return ko(t)==="symbol"?t:String(t)}function O0(e,t,n){return t=z0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ed(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function Pd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ed(Object(n),!0).forEach(function(r){O0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ed(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ge(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var _d=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),js=function(){return Math.random().toString(36).substring(7).split("").join(".")},Gi={INIT:"@@redux/INIT"+js(),REPLACE:"@@redux/REPLACE"+js(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+js()}};function R0(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Wm(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ge(1));return n(Wm)(e,t)}if(typeof e!="function")throw new Error(ge(2));var o=e,i=t,l=[],s=l,a=!1;function u(){s===l&&(s=l.slice())}function p(){if(a)throw new Error(ge(3));return i}function g(w){if(typeof w!="function")throw new Error(ge(4));if(a)throw new Error(ge(5));var P=!0;return u(),s.push(w),function(){if(P){if(a)throw new Error(ge(6));P=!1,u();var d=s.indexOf(w);s.splice(d,1),l=null}}}function m(w){if(!R0(w))throw new Error(ge(7));if(typeof w.type>"u")throw new Error(ge(8));if(a)throw new Error(ge(9));try{a=!0,i=o(i,w)}finally{a=!1}for(var P=l=s,f=0;f<P.length;f++){var d=P[f];d()}return w}function v(w){if(typeof w!="function")throw new Error(ge(10));o=w,m({type:Gi.REPLACE})}function y(){var w,P=g;return w={subscribe:function(d){if(typeof d!="object"||d===null)throw new Error(ge(11));function h(){d.next&&d.next(p())}h();var S=P(h);return{unsubscribe:S}}},w[_d]=function(){return this},w}return m({type:Gi.INIT}),r={dispatch:m,subscribe:g,getState:p,replaceReducer:v},r[_d]=y,r}function N0(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Gi.INIT});if(typeof r>"u")throw new Error(ge(12));if(typeof n(void 0,{type:Gi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function b0(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),l;try{N0(n)}catch(s){l=s}return function(a,u){if(a===void 0&&(a={}),l)throw l;for(var p=!1,g={},m=0;m<i.length;m++){var v=i[m],y=n[v],w=a[v],P=y(w,u);if(typeof P>"u")throw u&&u.type,new Error(ge(14));g[v]=P,p=p||P!==w}return p=p||i.length!==Object.keys(a).length,p?g:a}}function Yi(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function A0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(ge(15))},l={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(a){return a(l)});return i=Yi.apply(void 0,s)(o.dispatch),Pd(Pd({},o),{},{dispatch:i})}}}function Vm(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(l){return function(s){return typeof s=="function"?s(o,i,e):l(s)}}};return t}var Xm=Vm();Xm.withExtraArgument=Vm;const Td=Xm;var Qm=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),I0=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(p){return a([u,p])}}function a(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,o=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(p){u=[6,p],o=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Sr=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},L0=Object.defineProperty,D0=Object.defineProperties,M0=Object.getOwnPropertyDescriptors,zd=Object.getOwnPropertySymbols,F0=Object.prototype.hasOwnProperty,B0=Object.prototype.propertyIsEnumerable,Od=function(e,t,n){return t in e?L0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},Yt=function(e,t){for(var n in t||(t={}))F0.call(t,n)&&Od(e,n,t[n]);if(zd)for(var r=0,o=zd(t);r<o.length;r++){var n=o[r];B0.call(t,n)&&Od(e,n,t[n])}return e},$s=function(e,t){return D0(e,M0(t))},U0=function(e,t,n){return new Promise(function(r,o){var i=function(a){try{s(n.next(a))}catch(u){o(u)}},l=function(a){try{s(n.throw(a))}catch(u){o(u)}},s=function(a){return a.done?r(a.value):Promise.resolve(a.value).then(i,l)};s((n=n.apply(e,t)).next())})},H0=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Yi:Yi.apply(null,arguments)};function W0(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var V0=function(e){Qm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Sr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Sr([void 0],n.concat(this))))},t}(Array),X0=function(e){Qm(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,Sr([void 0],n[0].concat(this)))):new(t.bind.apply(t,Sr([void 0],n.concat(this))))},t}(Array);function Ra(e){return $t(e)?Hm(e,function(){}):e}function Q0(e){return typeof e=="boolean"}function G0(){return function(t){return Y0(t)}}function Y0(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new V0;return n&&(Q0(n)?r.push(Td):r.push(Td.withExtraArgument(n.extraArgument))),r}var K0=!0;function q0(e){var t=G0(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,l=i===void 0?t():i,s=n.devTools,a=s===void 0?!0:s,u=n.preloadedState,p=u===void 0?void 0:u,g=n.enhancers,m=g===void 0?void 0:g,v;if(typeof o=="function")v=o;else if(W0(o))v=b0(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var y=l;typeof y=="function"&&(y=y(t));var w=A0.apply(void 0,y),P=Yi;a&&(P=H0(Yt({trace:!K0},typeof a=="object"&&a)));var f=new X0(w),d=f;Array.isArray(m)?d=Sr([w],m):typeof m=="function"&&(d=m(f));var h=P.apply(void 0,d);return Wm(v,p,h)}function Kt(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return Yt(Yt({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Gm(e){var t={},n=[],r,o={addCase:function(i,l){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=l,o},addMatcher:function(i,l){return n.push({matcher:i,reducer:l}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function J0(e){return typeof e=="function"}function Z0(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?Gm(t):[t,n,r],i=o[0],l=o[1],s=o[2],a;if(J0(e))a=function(){return Ra(e())};else{var u=Ra(e);a=function(){return u}}function p(g,m){g===void 0&&(g=a());var v=Sr([i[m.type]],l.filter(function(y){var w=y.matcher;return w(m)}).map(function(y){var w=y.reducer;return w}));return v.filter(function(y){return!!y}).length===0&&(v=[s]),v.reduce(function(y,w){if(w)if(en(y)){var P=y,f=w(P,m);return f===void 0?y:f}else{if($t(y))return Hm(y,function(d){return w(d,m)});var f=w(y,m);if(f===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return f}return y},g)}return p.getInitialState=a,p}function e1(e,t){return e+"/"+t}function t1(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Ra(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},l={},s={};o.forEach(function(p){var g=r[p],m=e1(t,p),v,y;"reducer"in g?(v=g.reducer,y=g.prepare):v=g,i[p]=v,l[m]=v,s[p]=y?Kt(m,y):Kt(m)});function a(){var p=typeof e.extraReducers=="function"?Gm(e.extraReducers):[e.extraReducers],g=p[0],m=g===void 0?{}:g,v=p[1],y=v===void 0?[]:v,w=p[2],P=w===void 0?void 0:w,f=Yt(Yt({},m),l);return Z0(n,function(d){for(var h in f)d.addCase(h,f[h]);for(var S=0,j=y;S<j.length;S++){var C=j[S];d.addMatcher(C.matcher,C.reducer)}P&&d.addDefaultCase(P)})}var u;return{name:t,reducer:function(p,g){return u||(u=a()),u(p,g)},actions:s,caseReducers:i,getInitialState:function(){return u||(u=a()),u.getInitialState()}}}var n1="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",r1=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=n1[Math.random()*64|0];return t},o1=["name","message","stack","code"],Cs=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Rd=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),i1=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=o1;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,n,r){var o=Kt(t+"/fulfilled",function(u,p,g,m){return{payload:u,meta:$s(Yt({},m||{}),{arg:g,requestId:p,requestStatus:"fulfilled"})}}),i=Kt(t+"/pending",function(u,p,g){return{payload:void 0,meta:$s(Yt({},g||{}),{arg:p,requestId:u,requestStatus:"pending"})}}),l=Kt(t+"/rejected",function(u,p,g,m,v){return{payload:m,error:(r&&r.serializeError||i1)(u||"Rejected"),meta:$s(Yt({},v||{}),{arg:g,requestId:p,rejectedWithValue:!!m,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function a(u){return function(p,g,m){var v=r!=null&&r.idGenerator?r.idGenerator(u):r1(),y=new s,w;function P(d){w=d,y.abort()}var f=function(){return U0(this,null,function(){var d,h,S,j,C,k,z;return I0(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),j=(d=r==null?void 0:r.condition)==null?void 0:d.call(r,u,{getState:g,extra:m}),s1(j)?[4,j]:[3,2];case 1:j=D.sent(),D.label=2;case 2:if(j===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return C=new Promise(function(N,oe){return y.signal.addEventListener("abort",function(){return oe({name:"AbortError",message:w||"Aborted"})})}),p(i(v,u,(h=r==null?void 0:r.getPendingMeta)==null?void 0:h.call(r,{requestId:v,arg:u},{getState:g,extra:m}))),[4,Promise.race([C,Promise.resolve(n(u,{dispatch:p,getState:g,extra:m,requestId:v,signal:y.signal,abort:P,rejectWithValue:function(N,oe){return new Cs(N,oe)},fulfillWithValue:function(N,oe){return new Rd(N,oe)}})).then(function(N){if(N instanceof Cs)throw N;return N instanceof Rd?o(N.payload,v,u,N.meta):o(N,v,u)})])];case 3:return S=D.sent(),[3,5];case 4:return k=D.sent(),S=k instanceof Cs?l(null,v,u,k.payload,k.meta):l(k,v,u),[3,5];case 5:return z=r&&!r.dispatchConditionRejection&&l.match(S)&&S.meta.condition,z||p(S),[2,S]}})})}();return Object.assign(f,{abort:P,requestId:v,arg:u,unwrap:function(){return f.then(l1)}})}}return Object.assign(a,{pending:i,rejected:l,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function l1(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function s1(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xu="listenerMiddleware";Kt(Xu+"/add");Kt(Xu+"/removeAll");Kt(Xu+"/remove");var Nd;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);$0();const a1=e=>document.getElementById(e).scrollIntoView({behavior:"smooth"}),Ym=t1({name:"scrollReducer",initialState:{current:"Home1"},reducers:{change:(e,t)=>{e.current=t.payload},scroll:(e,t)=>{a1(t.payload)}}}),{change:u1,scroll:Km}=Ym.actions,c1=Ym.reducer,E="768px",d1="1000px";var f1;const p1=()=>{const[e,t]=O.useState(!1),[n,r]=O.useContext(Cm),o=ft(u=>u.scrollReducer).current,i=Ll(),l=O.useCallback(u=>{clearTimeout(f1),setTimeout(()=>t(!1),u)},[]),s=O.useCallback(u=>{if(u.target.checked){t(!0);return}l(0)},[]),a=O.useCallback(u=>{i(Km(u))});return O.useEffect(()=>{e&&l(1500)},[o]),c.jsxs(v1,{children:[c.jsx(m1,{isDark:n,onChange:u=>r(!u.target.checked)}),c.jsx(h1,{mobileMenuShown:e,onChange:s}),c.jsxs(y1,{$mobileMenuShown:e,children:[c.jsx(Dr,{section:"Home",label:"Home",currentSection:o,onClick:a}),c.jsx(Dr,{section:"Experiences",label:"Skills",currentSection:o,onClick:a}),c.jsx(Dr,{section:"Projects",label:"Projects",currentSection:o,onClick:a}),c.jsx(Dr,{section:"Contact",label:"Contact",currentSection:o,onClick:a}),c.jsx(Dr,{section:"Resume",label:"Resume",currentSection:"",onClick:()=>open("/assets/Resume.pdf","_blank")})]})]})},Dr=({section:e,label:t,currentSection:n,onClick:r})=>c.jsx(w1,{selected:n.startsWith(e),onClick:()=>r(e),children:t}),m1=({isDark:e,onChange:t})=>c.jsx("div",{className:"toggle-switch",children:c.jsxs("label",{className:"switch-label",children:[c.jsx("input",{type:"checkbox",className:"checkbox",checked:!e,onChange:t}),c.jsx("span",{className:"slider"})]})}),h1=({mobileMenuShown:e,onChange:t})=>c.jsxs(g1,{className:"container",children:[c.jsx("input",{type:"checkbox",checked:e,onChange:t}),c.jsxs("div",{className:"checkmark",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]}),g1=x.label`
    opacity: 0;
    position: absolute;
    visibility: hidden;
    @media (max-width: ${E}){
        position: static;
        visibility: visible;
        position: relative;
        opacity: 1;
        transition: opacity 1s ease;
    }
`,v1=x.nav`
    position: relative;
    display: flex;
    gap: .5rem;
    align-items: center;

`,y1=x.nav`
    display: flex;
    gap: .5rem;
    align-items: center;

    @media (max-width: ${E}){

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
`,w1=x.span`
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

    @media (max-width: ${E}){
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
`;var bd;const x1=()=>{const[e,t]=O.useState(!1),[n,r]=O.useState(!1);O.useState({visible:!0,text:"Portfolio"}),ft(i=>i.scrollReducer).current;const o=O.useCallback(i=>{t(!0),clearTimeout(bd),bd=setTimeout(()=>t(!1),1200)},[]);return O.useEffect(()=>{const i=document.getElementById("vertical-stack");return i.addEventListener("scroll",o),setTimeout(()=>r(!0),1e3),()=>i.removeEventListener("scroll",o)},[]),c.jsxs(j1,{$shouldAppear:n,$shouldBlur:e,children:[c.jsx($1,{children:"Portfolio"}),c.jsx(p1,{})]})},S1=Nu`
    background-color: var(--header-background);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
`,k1=Nu`
    background-color: var(--header-background-transparent);
    box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
    `,j1=x.header`
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
    ${e=>e.$shouldBlur?k1:S1}
    transition: all .7s ease;
`,$1=x.span`
    /* Dimensions */
    font-size: 1rem;
    font-weight: bold;
`;function on(e){const t=O.useRef(),n=Ll(),r=O.useMemo(()=>new IntersectionObserver(([o])=>o.isIntersecting&&n(u1(e)),{threshold:.8}),[t]);return O.useEffect(()=>(r.observe(t.current),()=>r.disconnect()),[]),t}const C1="/assets/profile-55e6f7b3.jpg",E1="/assets/technologies-nolabel-8d4a8bca.png",P1=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e)},[i]),c.jsx(_1,{ref:o,id:e,children:c.jsxs(T1,{children:[c.jsxs(z1,{$visible:n,children:[c.jsx(Ad,{children:"Hello,"}),c.jsx("br",{}),c.jsx(O1,{children:"Great to see "}),c.jsx(Ad,{children:"You Here!"})]}),c.jsx(Id,{$visible:n}),c.jsxs(R1,{$visible:n,children:[c.jsx(N1,{src:C1,alt:"Nazim's Profile Image"}),c.jsxs("div",{children:[c.jsx(A1,{children:"I'm"})," ",c.jsx(I1,{children:"Nazim"}),c.jsx("br",{}),c.jsxs(b1,{children:["A Passionate Learner, Meticulous in Details, and Enthusiast in ",c.jsx("br",{}),"Software Development"]})]})]}),c.jsx(Id,{$visible:n}),c.jsx(L1,{src:E1,$visible:n,alt:"Main Technology Stack"})]})})},_1=x.section`
  position: relative;
`,T1=x.article`
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
`,z1=x.div`
  color: var(--primary-text-color);
  font-size: 1.5rem;

  /* Display */
  transition-delay: ${e=>e.$visible?".1s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};

  @media (max-width: ${E}) {
    font-size: 1.2rem;
  }
`,O1=x.span`
  font-weight: 300;
`,Ad=x.span`
  font-weight: bold;
`,Id=x.div`
  height: .2rem;
  width: 1rem;
  background-color: var(--separator-color);
  border-radius: 1rem;

  /* Display */
  transition-delay: ${e=>e.$visible?"1.3s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
`,R1=x.div`
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

  @media (max-width: ${E}) {
    max-width: calc(100vw - 5rem);
  }
`,N1=x.img`
  max-height: 9rem;;
  border-radius: 37%;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${E}) {
    max-width: 7rem;
  }
`,b1=x.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: .5rem;
  line-height: 1.5;
  @media (max-width: ${E}) {
    font-size: 1.1rem;
  }
`,A1=x.span`
  font-size: 1.8rem;
  font-weight: 500;
  @media (max-width: ${E}) {
    font-size: 1.3rem;
  }
  `,I1=x.span`
  font-weight: 700;
  font-size: 1.8rem;
  color: var(--primary-color);
  @media (max-width: ${E}) {
    font-size: 1.3rem;
  }
`,L1=x.img`
  max-width: 20rem;
  width: calc(100vw / 2);

  /* Display */
  transition-delay: ${e=>e.$visible?"1.8s":"0"};
  transition-property: opacity;
  opacity: ${e=>e.$visible?"1":"0"};
  
  @media (max-width: ${E}) {
    max-width: 16rem;
    width: 90%;
  }
`,D1="/assets/Python-c66002c1.png",M1="/assets/JavaScript-e323aa50.png",F1="/assets/Django-c4cb7efd.png",B1="/assets/Postgresql-11433c8a.png",U1="/assets/HTML-b866745b.png",H1="/assets/CSS-4caa5335.png",W1="/assets/NGINX-57734961.png",V1="/assets/React-e05d3e8d.png",X1="/assets/Redis-107a7fc9.png",Q1="/assets/Docker-3a53ff2c.png",Ld=({title:e,text:t})=>c.jsx(G1,{children:c.jsx(Y1,{children:t})}),G1=x.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${E}){
      text-align: start;
  }
  `;x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 

    @media (min-width: ${E}){
      font-size: 1rem;
    }
`;const Y1=x.p`
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${E}){
      font-size: .9rem;
    }

`,Dl=({title:e="Technologies",technologies:t=[]})=>c.jsxs(K1,{children:[c.jsx(q1,{children:e}),c.jsx(J1,{children:t.map((n,r)=>c.jsx(Z1,{children:n},r))})]}),K1=x.div`
  position: relative;
  font-size: .8rem;
  `,q1=x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

    /* @media (min-width: ${E}){
      text-align: center;
    } */
    
`,J1=x.div`
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  gap: .5rem;
  white-space: nowrap;
/* 
  @media (min-width: ${E}){
      justify-content: center;
  }

  @media (max-width: ${E}){
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: 1fr 1fr;
    overflow-x: auto;
  } */
`,Z1=x.div`
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
    @media (min-width: ${E}){

      &:nth-child(odd) {
        color: var(--primary-color);
        background-color: var(--background-tags-color);
       }
    &:nth-child(even) {
        color: var(--secondary-text-color);
        background-color: var(--background-tags-color);
      }
  } */

`,Dd=({startingYear:e,endingYear:t,title:n,company:r})=>c.jsxs(ew,{children:[c.jsxs(tw,{children:[c.jsx(Md,{children:e}),c.jsx(nw,{}),c.jsx(Md,{children:t})]}),c.jsx(rw,{children:n}),c.jsx(ow,{children:r})]}),ew=x.div`
  position: relative;
  font-size: .8rem;
  text-align: center;

  @media (max-width: ${E}){
      text-align: start;
  }
`,tw=x.div`
    display: flex;
    align-items: center;
    gap: .4rem;
    justify-content: center;

    @media (max-width: ${E}){
      justify-content: start;
  }
    `,Md=x.span`
    color: var(--primary-color);
    font-weight: 600;
`,nw=x.div`
    height: .1rem;
    width: 1rem;
    border-radius: 99rem;
    background-color: var(--primary-color);
`,rw=x.p`
    font-size: 1.2rem;
    font-weight: 700;

`,ow=x.p`
    font-size: .8rem;
    color: var(--primary-color);
    font-weight: 600;
`;x.div`
  position: relative;
  font-size: .8rem;
  `;x.p`
    color: var(--primary-text-color);
    font-weight: 600;
    font-size: .8rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`;x.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
`;x.div`
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

`;const iw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(lw,{ref:o,id:e,$visible:n,children:[c.jsxs(sw,{children:[c.jsx(aw,{children:"Skills & Experience"}),c.jsxs(Fd,{children:["With expertise in ",c.jsx(Tt,{children:"HTML"}),", ",c.jsx(Tt,{children:"CSS"}),", ",c.jsx(Tt,{children:"JavaScript"}),",  ",c.jsx(Tt,{children:"React"}),",  ",c.jsx(Tt,{children:"Python"}),",  ",c.jsx(Tt,{children:"Django"}),",  ",c.jsx(Tt,{children:"Redis"})," and ",c.jsx(Tt,{children:"Docker"}),", I specialize in creating captivating user interfaces that seamlessly integrate with the robust APIs and well-managed databases I craft."]}),c.jsxs(Fd,{children:["Visit my ",c.jsx(uw,{href:"https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",target:"_blank",children:"Linkedin"})," for more details."]})]}),c.jsxs(fw,{children:[c.jsxs(rt,{children:[c.jsx(ot,{src:B1,alt:"Postgresql Logo"}),c.jsx(it,{children:"Postgresql"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:D1,alt:"Python Logo"}),c.jsx(it,{children:"Python"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:F1,alt:"Django Logo"}),c.jsx(it,{children:"Django"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:X1,alt:"Redis Logo"}),c.jsx(it,{children:"Redis"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:U1,alt:"HTML Logo"}),c.jsx(it,{children:"HTML"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:H1,alt:"CSS Logo"}),c.jsx(it,{children:"CSS"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:M1,alt:"JavaScript Logo"}),c.jsx(it,{children:"JavaScript"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:V1,alt:"ReactJS Logo"}),c.jsx(it,{children:"React"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:W1,alt:"NGINX Logo"}),c.jsx(it,{children:"NGINX"})]}),c.jsxs(rt,{children:[c.jsx(ot,{src:Q1,alt:"Docker Logo"}),c.jsx(it,{children:"Docker"})]})]}),c.jsxs(cw,{children:[c.jsxs(Bd,{children:[c.jsx(Dd,{startingYear:"2019",endingYear:"2023",title:"Software Developer",company:"Anep Communication & Signalétique - Algiers"}),c.jsx(Ld,{title:"Projects & Goals",text:"Two projects were undertaken: one to design and develop a tailored information system for automating and streamlining business processes across departments, and the other to enhance the existing system by adding applications and features. The focus was on improving functionality, seamless integration, and delivering an enhanced user experience, increased productivity, and smoother operations across departments."})]}),c.jsxs(Bd,{children:[c.jsx(Dd,{startingYear:"2022",endingYear:"2023",title:"Full Stack Developer",company:"Lilium Pharma Algérie - Algiers"}),c.jsx(Ld,{title:"Projects & Goals",text:"The focus was centered on designing and developing features and applications to enhance the company's technology and information system. These innovations were aimed at optimizing processes, improving efficiency, and driving growth. By streamlining operations and reducing manual tasks, the company was able to accelerate decision-making. Additionally, the introduction of new features further enhanced the user experience, ultimately strengthening the company's competitive edge."})]})]})]})},lw=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;


  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 3rem;
      padding-bottom: 1rem;
  }

`,sw=x.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${E}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,aw=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,Fd=x.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${E}){
      font-size: .8rem;

  }
`,Tt=x.span`
    color: var(--primary-color);
`,uw=x.a`
    color: var(--primary-color);
`,cw=x.div`
  display: flex;
  gap: 1.1rem;
  height: fit-content;
  width: 80vw;
  align-self: center;

  @media (max-width: ${E}){
      max-width: 100%;
      width: 100%;
      flex-direction: column;
      padding-bottom: 3rem;
  }
  
`,dw=x.article`
  height: 100%;

  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;
`,Bd=x(dw)`

  display: flex;
  flex-direction: column;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

`,fw=x.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  width: fit-content;
  justify-content: center;
  align-self: center;
  column-gap: 2.5rem;
  row-gap: 1.5rem;

  @media (max-width: ${E}) {
    gap: 1.5rem;
    width: 90vw;
    margin-block: 1rem;

  }
`,rt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: .6;
  gap:.3rem;
`,ot=x.img`
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
`,it=x.label`
    color: var(--primary-text-color);
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: ${E}) {
        font-size: .7rem;
  }
`,qm="/assets/RestaurantApp-f940ef41.png",Jm="/assets/SmartHomeApp-988004dc.png",Zm="/assets/SoundBOXApp-a94d5b27.png",eh="/assets/ChatBOXApp-1de61a32.png",pw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(a=>a.scrollReducer).current,l=Ll(),s=a=>l(Km(a));return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(mw,{ref:o,id:e,$visible:n,children:[c.jsxs(hw,{children:[c.jsx(gw,{children:"Projects"}),c.jsx(vw,{children:"Let me show you an overview of some of my personal projects before getting into details, tap on any to see details or scroll down to browse."})]}),c.jsxs(yw,{children:[c.jsxs(Yo,{onClick:()=>s("Projects/Restaurant"),children:[c.jsx(Jo,{src:qm,alt:"Restaurant App Icon"}),c.jsx(Ko,{children:"Restaurant App"}),c.jsx(qo,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management."}),c.jsx(Zo,{children:"Go to Details"})]}),c.jsxs(Yo,{onClick:()=>s("Projects/SoundBOX"),children:[c.jsx(Jo,{src:Zm,alt:"SoundBOX App Icon"}),c.jsx(Ko,{children:"SoundBOX"}),c.jsx(qo,{children:"A web app that lets users stream YouTube audio without video playback, with a user-friendly interface. It offers playback controls and a Favorite list for managing preferred tracks."}),c.jsx(Zo,{children:"Go to Details"})]}),c.jsxs(Yo,{onClick:()=>s("Projects/ChatBOX"),children:[c.jsx(Jo,{src:eh,alt:"ChatBOX App Icon"}),c.jsx(Ko,{children:"ChatBOX"}),c.jsx(qo,{children:"An app that provides a minimalist and focused chatting experience, prioritizing real-time, text-based interactions within a respectful and user-friendly environment."}),c.jsx(Zo,{children:"Go to Details"})]}),c.jsxs(Yo,{onClick:()=>s("Projects/SmartHome"),children:[c.jsx(Jo,{src:Jm,alt:"SmartHome App Icon"}),c.jsx(Ko,{children:"SmartHome"}),c.jsx(qo,{children:"Sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights."}),c.jsx(Zo,{children:"Go to Details"})]})]})]})},mw=x.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 3rem;

  }

`,hw=x.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;


  @media (max-width: ${E}){
      max-width: 90vw;
      width: 100%;

      
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
  

`,gw=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;

`,vw=x.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${E}){
      font-size: .8rem;

  }
`,yw=x.div`
  display: flex;
  gap: .8rem;
  align-self: center;
 
  border-radius: 1rem;

  width: 90vw;
  max-width: 80rem;

  @media (max-width: ${E}){
      flex-direction: column;
      width: 100%;

  }

  @media (min-width: ${E}) and (max-width: ${d1}){
      display: grid;
      grid-template-columns:1fr 1fr;
  }

`,Yo=x.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .8rem;
  flex: 1;
  
  background-color: var(--card-bg-color);
  border-radius: 1rem;
  padding: 1rem;

  @media (max-width: ${E}){   
    /* align-items: start; */
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);


  }

`,Ko=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1rem;

`,qo=x.p`

    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: .8rem;
    line-height: 1.8;
    text-align: center;
    margin-block: .3rem;
    
    @media (max-width: ${E}){
      font-size: .8rem;
      max-width: 95%;
    }
`,Jo=x.img`
  max-width: 3.6rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){

    max-width: 4rem;

  }
`,Zo=x.button`
margin-top: auto;
  color: var(--button-text-color);
  background-color: var(--primary-color);
  border: none;
  padding-block: .8rem;
  padding-inline: 2rem;
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: ${E}){

    /* width: 100%;
    max-width: 90%; */
    display: none;

}
`,ww="/assets/Restaurant-S1-ce332388.png",xw="/assets/Restaurant-S2-132eafe1.png",Sw="/assets/Restaurant-S3-95ab878c.png",kw="/assets/Restaurant-S4-b62a7391.png",jw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs($w,{ref:o,id:e,$visible:n,children:[c.jsxs(bw,{children:[c.jsxs(Aw,{children:[c.jsx(Lw,{src:qm,alt:"Restaurant App Icon"}),c.jsx(Iw,{children:"Restaurant App"})]}),c.jsx(Dw,{href:"http://129.146.60.95:4001/",target:"_blank",children:"Preview"})]}),c.jsxs(Pw,{children:[c.jsxs(_w,{children:[c.jsxs(Tw,{children:[c.jsx(zw,{children:"Description"}),c.jsx(Ow,{children:"An all-in-one restaurant app that seamlessly handles recipes, commands, invoices, customer loyalty, menu customization, discounts based on points, and stock management. Simplify the restaurant operations, engage customers, and optimize inventory."})]}),c.jsxs(Rw,{children:[c.jsx(Nw,{children:"Features"}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Recipe Management"}),c.jsx(Rt,{children:"Streamline recipe creation, storage, and organization for consistent quality."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Order Management"}),c.jsx(Rt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Ticketing"}),c.jsx(Rt,{children:"User-friendly ticketing feature that enables clients to obtain physical tickets for their dining experience."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Mixtures"}),c.jsx(Rt,{children:"Empower users to create new ingredients by combining multiple existing ingredients, allowing for innovative and customizable recipes."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Menu Customization"}),c.jsx(Rt,{children:"Easily create and modify menus based on customer preferences, seasonality, and occasions."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Order Management"}),c.jsx(Rt,{children:"Take orders using a intuitive interface, minimizing errors and reducing wait times."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Discounts based on Points"}),c.jsx(Rt,{children:"Loyalty program that allows customers to earn and redeem points for discounts."})]}),c.jsxs(zt,{children:[c.jsx(Ot,{children:"Stock Management"}),c.jsx(Rt,{children:"Efficiently track inventory levels, monitor ingredient usage, and receive low stock notifications."})]})]}),c.jsx(Dl,{title:"Technologies Used",technologies:["mySQL","HTML","CSS","Tabler","JavaScript","jQuery","AJAX","Django","Docker"]})]}),c.jsx(Ew,{children:c.jsxs(Cw,{children:[c.jsx(ei,{src:ww,alt:"Restaurant App Screenshot 1"}),c.jsx(ei,{src:xw,alt:"Restaurant App Screenshot 2"}),c.jsx(ei,{src:Sw,alt:"Restaurant App Screenshot 3"}),c.jsx(ei,{src:kw,alt:"Restaurant App Screenshot 4"})]})})]})]})},$w=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 2rem;
  }

`,ei=x.img`
  width: 100%;
  object-fit: contain;
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;


  @media (max-width: ${E}){

    width: 100%;

  }
`,Cw=x.div`
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
    
`,Ew=x.div`
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

  @media (max-width: ${E}){
    margin-top: 1rem;
  }

`,Pw=x.div`
  display: flex;
  gap: 1rem;
  flex: 1;

  @media (max-width: ${E}){
    display: block;
  }
`,_w=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1.5;
`,Tw=x.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${E}){
      text-align: start;
  }
  `,zw=x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

  
`,Ow=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${E}){
      font-size: .9rem;
  }
`,Rw=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${E}){
    grid-template-columns: repeat(1, 1fr);

  }
`,Nw=x.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,zt=x.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Ot=x.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Rt=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,bw=x.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Aw=x.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${E}){
    flex-direction: row;
    align-items: center;
  }
`,Iw=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Lw=x.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){

    max-width: 4rem;

  }
`,Dw=x.a`
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

  @media (max-width: ${E}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Mw="/assets/SmartHome-S1-c276a7c5.png",Fw=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(Bw,{ref:o,id:e,$visible:n,children:[c.jsxs(Jw,{children:[c.jsxs(Zw,{children:[c.jsx(tx,{src:Jm,alt:"SmartHome App Icon"}),c.jsx(ex,{children:"SmartHome"})]}),c.jsx(nx,{href:"http://129.146.60.95:3006/40rgghbzr0",target:"_blank",children:"Preview"})]}),c.jsxs(Vw,{children:[c.jsxs(Xw,{children:[c.jsxs(Qw,{children:[c.jsx(Gw,{children:"Description"}),c.jsx(Yw,{children:'Introducing "SmartHome," the sleek and intuitive app designed to simplify home management experience by controlling a custom-programmed microcontroller chip for tasks such as opening doors and turning on lights. SmartHome transforms your smartphone into a powerful remote control for your home, providing convenience and peace of mind at your fingertips.'})]}),c.jsxs(Kw,{children:[c.jsx(qw,{children:"Features"}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"Door Control"}),c.jsx(bn,{children:"Gain full control over your home's entry points. With a tap on your phone, unlock and lock your doors remotely."})]}),c.jsxs(Rn,{children:[c.jsx(Es,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"Schedule and Timers"}),c.jsx(bn,{children:"Set up schedules and timers to automate your door and lighting functions. Configure your app to automatically lock doors at a specific time each day or turn on lights just before you arrive home in the evening."})]}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"Lighting Management"}),c.jsx(bn,{children:"Enjoy the convenience of controlling your home's lighting system with  ease. Effortlessly turn lights on or off."})]}),c.jsxs(Rn,{children:[c.jsx(Es,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"Customization and Personalization"}),c.jsx(bn,{children:"SmartHome lets you customize and personalize your control preferences. Assign unique names and icons to your equipments for easy identification."})]}),c.jsxs(Rn,{children:[c.jsx(Nn,{children:"User-Friendly Interface"}),c.jsx(bn,{children:"SmartHome combines sleek design with intuitive controls, ensuring a seamless and enjoyable user experience for simplified home management."})]}),c.jsxs(Rn,{children:[c.jsx(Es,{children:"Upcoming Feature"}),c.jsx(Nn,{children:"User Management"}),c.jsx(bn,{children:"Manage access permissions for different users within your household. Create individual profiles for family members or trusted individuals, allowing them to control doors and lights through their own smartphones."})]})]}),c.jsx(Dl,{title:"Technologies Used",technologies:["JSON","HTML","CSS","JavaScript","React","Python","FastAPI","MicroPython","ESP32"]})]}),c.jsx(Ww,{children:c.jsx(Hw,{children:c.jsx(Uw,{src:Mw})})})]})]})},Bw=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 2rem;
  }

`,Uw=x.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){
    width: 100%;
  }
`,Hw=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* max-height: 60vh; */
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,Ww=x.div`
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

  @media (max-width: ${E}){
    margin-top: 1rem;
  }

`,Vw=x.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${E}){
    display: block;
  }
`,Xw=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,Qw=x.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${E}){
      text-align: start;
  }
  `,Gw=x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;

`,Yw=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${E}){
      font-size: .9rem;
  }

`,Kw=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${E}){
    grid-template-columns: repeat(1, 1fr);

  }
`,qw=x.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Rn=x.div`
  position: relative;

  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Nn=x.p`
    max-width: 60%;
    font-size: .9rem;
    font-weight: 600;
    color: var(--primary-color);
    margin-bottom: .2rem;
`,Es=x.span`
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
  
`,bn=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Jw=x.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Zw=x.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${E}){
    flex-direction: row;
    align-items: center;
  }
`,ex=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,tx=x.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){

    max-width: 4rem;

  }
`,nx=x.a`
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

  @media (max-width: ${E}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,rx="/assets/SoundBOX-S1-d0ca63da.png",ox="/assets/SoundBOX-S2-f124f3db.png",ix="/assets/SoundBOX-S3-3afadd42.png",lx=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(sx,{ref:o,id:e,$visible:n,children:[c.jsxs(vx,{children:[c.jsxs(yx,{children:[c.jsx(xx,{src:Zm,alt:"SoundBOX App Icon"}),c.jsx(wx,{children:"SoundBOX"})]}),c.jsx(Sx,{href:"http://129.146.60.95:4420/",target:"_blank",children:"Preview"})]}),c.jsxs(cx,{children:[c.jsxs(dx,{children:[c.jsxs(fx,{children:[c.jsx(px,{children:"Description"}),c.jsx(mx,{children:"SoundBOX is a web app that lets you stream audio from YouTube without video playback. It has a user-friendly interface with a search bar for easy content discovery. The app plays only the audio stream, conserving bandwidth. It offers playback controls and a Favorite list where users can gather and manage their preferred tracks. SoundBOX is a Progressive Web App (PWA) making it highly portable and easy to install on any compatible device. Users can simply add the app to their device's home screen or app drawer, allowing them to access SoundBOX with a single tap, just like a native application."})]}),c.jsxs(hx,{children:[c.jsx(gx,{children:"Features"}),c.jsxs(An,{children:[c.jsx(In,{children:"Audio Streaming"}),c.jsx(Ln,{children:"Allows users to stream audio from YouTube without video playback."})]}),c.jsxs(An,{children:[c.jsx(In,{children:"User-Friendly Interface"}),c.jsx(Ln,{children:"The app features a user-friendly interface with a search bar for easy content discovery."})]}),c.jsxs(An,{children:[c.jsx(In,{children:"Bandwidth Optimization"}),c.jsx(Ln,{children:"SoundBOX plays only the audio stream, conserving bandwidth and optimizing the listening experience."})]}),c.jsxs(An,{children:[c.jsx(In,{children:"Background Play"}),c.jsx(Ln,{children:"The app supports background play on mobile devices, allowing users to continue listening while using other apps or when their device's screen is locked."})]}),c.jsxs(An,{children:[c.jsx(In,{children:"Cross-Devices"}),c.jsx(Ln,{children:"SoundBOX is a Progressive Web Application (PWA) that can be easily installed on various devices and it has been designed to be responsive, adapting seamlessly to different screen sizes and orientations."})]}),c.jsxs(An,{children:[c.jsx(In,{children:"High-Quality Streaming"}),c.jsx(Ln,{children:"SoundBOX streams audio content from YouTube at the highest available quality."})]})]}),c.jsx(Dl,{title:"Technologies Used",technologies:["HTML","CSS","TailwindCSS","JavaScript","React","Python","FastAPI"]})]}),c.jsx(ux,{children:c.jsxs(ax,{children:[c.jsx(Ps,{src:rx}),c.jsx(Ps,{src:ox}),c.jsx(Ps,{src:ix})]})})]})]})},sx=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 2rem;
  }

`,Ps=x.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){
    width: 100%;
  }
`,ax=x.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,ux=x.div`
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

  @media (max-width: ${E}){
    margin-top: 1rem;
  }

`,cx=x.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${E}){
    display: block;
  }
`,dx=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,fx=x.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${E}){
      text-align: start;
  }
  `,px=x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,mx=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${E}){
      font-size: .9rem;
  }

`,hx=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${E}){
    grid-template-columns: repeat(1, 1fr);

  }
`,gx=x.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,An=x.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,In=x.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Ln=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,vx=x.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,yx=x.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${E}){
    flex-direction: row;
    align-items: center;
  }
`,wx=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,xx=x.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){

    max-width: 4rem;

  }
`,Sx=x.a`
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

  @media (max-width: ${E}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,kx="/assets/ChatBOX-S1-c05ad71e.png",jx="/assets/ChatBOX-S2-cd16cac4.png",$x=({name:e,color:t})=>{const[n,r]=O.useState(!1),o=on(e),i=ft(l=>l.scrollReducer).current;return O.useEffect(()=>{r(i===e),e!==i&&setTimeout(()=>o.current.scrollTo({top:0,behavior:"smooth"}),300)},[i]),c.jsxs(Cx,{ref:o,id:e,$visible:n,children:[c.jsxs(Ax,{children:[c.jsxs(Ix,{children:[c.jsx(Dx,{src:eh,alt:"ChatBOX App Icon"}),c.jsx(Lx,{children:"ChatBOX"})]}),c.jsx(Mx,{href:"http://129.146.60.95:5173/",target:"_blank",children:"Preview"})]}),c.jsxs(_x,{children:[c.jsxs(Tx,{children:[c.jsxs(zx,{children:[c.jsx(Ox,{children:"Description"}),c.jsx(Rx,{children:"ChatBOX is a web app that lets you stream audio from YouTube without video playback. It has a user-friendly interface with a search bar for easy content discovery. The app plays only the audio stream, conserving bandwidth. It offers playback controls and a Favorite list where users can gather and manage their preferred tracks. ChatBOX is a Progressive Web App (PWA) making it highly portable and easy to install on any compatible device. Users can simply add the app to their device's home screen or app drawer, allowing them to access ChatBOX with a single tap, just like a native application."})]}),c.jsxs(Nx,{children:[c.jsx(bx,{children:"Features"}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"Public Room with Custom Username"}),c.jsx(Fn,{children:"Users can enter the public chat room with a custom username of their choice. This allows them to participate in the conversations while maintaining their desired identity."})]}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"Active User Indicator"}),c.jsx(Fn,{children:" The app displays the number of active users and also lists those when some one joins or leave. This helps identify who is currently online and actively participating in the conversation."})]}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"Welcome and Be Respectful Message"}),c.jsx(Fn,{children:'When a new member joins a chat room, a warm "Welcome to ChatBOX!" message is automatically displayed, along with a reminder to be respectful towards others in the conversation. This encourages a friendly and respectful atmosphere within the community.'})]}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"No Sign-Up Required"}),c.jsx(Fn,{children:"ChatBOX doesn't require users to sign up or create accounts. Users can join public rooms immediately after opening the app, making it quick and easy to get started."})]}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"Text-Only Communication"}),c.jsx(Fn,{children:"The app focuses solely on text-based communication. Users can send and receive messages, fostering a distraction-free and straightforward chatting experience."})]}),c.jsxs(Dn,{children:[c.jsx(Mn,{children:"Message Deletion"}),c.jsx(Fn,{children:"Messages sent in the chat rooms are not saved in the app's database or server. This ensures that conversations are ephemeral and do not leave a lasting digital footprint, promoting privacy and data security."})]})]}),c.jsx(Dl,{title:"Technologies Used",technologies:["React","Styled Components","NodeJS","Express.js","Socket.IO","WebSocket"]})]}),c.jsx(Px,{children:c.jsxs(Ex,{children:[c.jsx(Ud,{src:kx}),c.jsx(Ud,{src:jx})]})})]})]})},Cx=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 2rem;
  }

`,Ud=x.img`
  width: 23vw;
  max-width: 20rem;
  height: auto;
  /* object-fit: contain; */
  box-shadow: 0 0 .5rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){
    width: 100%;
  }
`,Ex=x.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow-y: scroll;
    gap: 1rem;

    background-color: var(--card-bg-color);
    border-radius: .7rem;
    padding: 1rem;
    
`,Px=x.div`
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

  @media (max-width: ${E}){
    margin-top: 1rem;
  }

`,_x=x.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${E}){
    display: block;
  }
`,Tx=x.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`,zx=x.div`
  position: relative;
  font-size: .8rem;

  @media (max-width: ${E}){
      text-align: start;
  }
  `,Ox=x.p`
    color: var(--secondary-text-color);
    font-weight: 600;
    font-size: .7rem;
    text-transform: uppercase; 
    margin-bottom: .3rem;
`,Rx=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);

    @media (min-width: ${E}){
      font-size: .9rem;
  }

`,Nx=x.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: ${E}){
    grid-template-columns: repeat(1, 1fr);

  }
`,bx=x.p`
  grid-column: 1/-1;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: .7rem;
  text-transform: uppercase; 
`,Dn=x.div`
  font-size: .8rem;
  background-color: var(--card-bg-color);
  border-radius: .7rem;
  padding: 1rem;

`,Mn=x.p`
    font-size: .9rem;

    font-weight: 600;
    color: var(--primary-color);
`,Fn=x.p`
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.7;
    color: var(--lighter-primary-text-color);
    
`,Ax=x.div`

  display: flex;
  gap: .6rem;
  text-align: center;
  justify-content: space-between;

`,Ix=x.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  @media (min-width: ${E}){
    flex-direction: row;
    align-items: center;
  }
`,Lx=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 1.3rem;

`,Dx=x.img`
  max-width: 4rem;
  object-fit: contain;
  box-shadow: 0 0 1rem .1rem rgba(0, 0, 0, 0.1);
  border-radius: .8rem;

  @media (max-width: ${E}){

    max-width: 4rem;

  }
`,Mx=x.a`
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

  @media (max-width: ${E}){
    font-size: .8rem;
    padding-block: .6rem;
    padding-inline: .9rem;
  }
`,Fx="/assets/stackoverflow-ec34f2f1.png",Bx="/assets/twitter-16936b2e.png",Ux="/assets/linkedin-b2cdfb91.png",Hx="/assets/github-d83ddf4e.png",Hd="boukabousalinazim@gmail.com",Wx="https://www.linkedin.com/in/nazim-a-boukabous-34371727a/",Vx="https://github.com/Ali-Nazim",Xx="https://twitter.com/AliNazimB",Qx="https://stackoverflow.com/users/7823800/nazim-a",Gx=({name:e})=>{const[t,n]=O.useState(!1),[r,o]=O.useState(!1),i=on(e),l=ft(a=>a.scrollReducer).current;Ll();const s=O.useCallback(()=>{navigator.clipboard.writeText(Hd).then(function(){o(!0),setTimeout(()=>o(!1),1500)},function(a){})},[]);return O.useEffect(()=>{n(l===e),e!==l&&setTimeout(()=>i.current.scrollTo({top:0,behavior:"smooth"}),300)},[l]),c.jsxs(Yx,{ref:i,id:e,$visible:t,children:[c.jsxs(Kx,{children:[c.jsx(qx,{children:"Contact"}),c.jsx(Jx,{children:"I have a strong passion for continuous learning and sharing my knowledge. I can't wait to connect with you, so please don't hesitate to reach out."}),c.jsxs(Zx,{children:["Click to copy",c.jsx(eS,{onClick:s,$copied:r,children:"boukabousalinazim@gmail.com"})]}),c.jsx(tS,{href:`mailto:${Hd}`,children:"Contact Me"})]}),c.jsxs(nS,{children:[c.jsx(ti,{onClick:()=>open(Vx,"_blank"),src:Hx,alt:"Github Logo"}),c.jsx(ti,{onClick:()=>open(Xx,"_blank"),src:Bx,alt:"Twitter Logo"}),c.jsx(ti,{onClick:()=>open(Wx,"_blank"),src:Ux,alt:"Linkedin Logo"}),c.jsx(ti,{onClick:()=>open(Qx,"_blank"),src:Fx,alt:"Stackoverflow Logo"})]}),c.jsxs(rS,{children:["Thank You for visiting, Until next time!",c.jsx("br",{})]})]})},Yx=x.section`
  /* background-color: ${e=>e.$color}; */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-y: scroll;
  padding-bottom: 10vh;
  padding-top: 4rem;

  opacity: ${e=>e.$visible?"1":"0"};
  transition: opacity .5s ease;

  @media (min-width: ${E}){
      gap: 3rem;
     justify-content: center;

  }
`,Kx=x.div`

  display: flex;
  flex-direction: column;
  gap: .6rem;
  text-align: center;
  align-self: center;
  width: calc(100vw * 2/3);
  max-width: 40rem;

  @media (min-width: ${E}){
    align-items: center;
  }
  @media (max-width: ${E}){
      max-width: 90vw;
      width: 100%;
      font-size: .8rem;
      text-align: start;
      align-self: start;
  }
`,qx=x.h1`
    color: var(--primary-text-color);
    font-weight: 700;
    font-size: 2rem;
`,Jx=x.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    
    @media (max-width: ${E}){
      font-size: .8rem;
  }
`,Zx=x.div`
    display: flex;
    font-size: .9rem;

    color: var(--secondary-text-color);
    align-items: center;

`,eS=x.p`
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
`,tS=x.a`
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

  @media (max-width: ${E}){
      width: 100%;
      align-self: center;
  }

`,nS=x.div`
  display: flex;
  align-items: center;
  opacity: .6;
  gap: 2rem;
  align-self: center;
`,ti=x.img`
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
`,rS=x.p`
    color: var(--lighter-primary-text-color);
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.8;
    opacity: .6;
    
    @media (min-width: ${E}){
      text-align: center;
  }
    @media (max-width: ${E}){
      font-size: .8rem;
  }
`;function oS(){return c.jsxs(iS,{id:"vertical-stack",children:[c.jsx(x1,{}),c.jsx(P1,{name:"Home",color:"#48b50e"}),c.jsx(iw,{name:"Experiences",color:"#148ebe"}),c.jsx(pw,{name:"Projects",color:"#dd0000"}),c.jsx(jw,{name:"Projects/Restaurant",color:"#dd0000"}),c.jsx(lx,{name:"Projects/SoundBOX",color:"#dd0000"}),c.jsx($x,{name:"Projects/ChatBOX",color:"#dd0000"}),c.jsx(Fw,{name:"Projects/SmartHome",color:"#dd0000"}),c.jsx(Gx,{name:"Contact"})]})}const iS=x.div`

  /* Dimensions */
  height: 100vh;
  width: 100vw;
  
  /* Display */
  scroll-snap-type: y mandatory;

  /* Overflow */
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;const lS=q0({reducer:{scrollReducer:c1}});_s.createRoot(document.getElementById("root")).render(c.jsx(Sn.StrictMode,{children:c.jsx(g0,{store:lS,children:c.jsx(_y,{children:c.jsx(oS,{})})})}));
