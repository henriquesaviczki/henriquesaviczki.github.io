(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();var bP={exports:{}},aw={},CP={exports:{}},F={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var zr=Symbol.for("react.element"),yj=Symbol.for("react.portal"),pj=Symbol.for("react.fragment"),kj=Symbol.for("react.strict_mode"),mj=Symbol.for("react.profiler"),fj=Symbol.for("react.provider"),gj=Symbol.for("react.context"),vj=Symbol.for("react.forward_ref"),Mj=Symbol.for("react.suspense"),xj=Symbol.for("react.memo"),wj=Symbol.for("react.lazy"),$C=Symbol.iterator;function Lj(e){return e===null||typeof e!="object"?null:(e=$C&&e[$C]||e["@@iterator"],typeof e=="function"?e:null)}var SP={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IP=Object.assign,PP={};function gn(e,t,a){this.props=e,this.context=t,this.refs=PP,this.updater=a||SP}gn.prototype.isReactComponent={};gn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function AP(){}AP.prototype=gn.prototype;function wb(e,t,a){this.props=e,this.context=t,this.refs=PP,this.updater=a||SP}var Lb=wb.prototype=new AP;Lb.constructor=wb;IP(Lb,gn.prototype);Lb.isPureReactComponent=!0;var QC=Array.isArray,qP=Object.prototype.hasOwnProperty,bb={current:null},zP={key:!0,ref:!0,__self:!0,__source:!0};function jP(e,t,a){var n,o={},i=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(i=""+t.key),t)qP.call(t,n)&&!zP.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=a;else if(1<l){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:zr,type:e,key:i,ref:c,props:o,_owner:bb.current}}function bj(e,t){return{$$typeof:zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cb(e){return typeof e=="object"&&e!==null&&e.$$typeof===zr}function Cj(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var YC=/\/+/g;function Sw(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cj(""+e.key):t.toString(36)}function so(e,t,a,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case zr:case yj:c=!0}}if(c)return c=e,o=o(c),e=n===""?"."+Sw(c,0):n,QC(o)?(a="",e!=null&&(a=e.replace(YC,"$&/")+"/"),so(o,t,a,"",function(d){return d})):o!=null&&(Cb(o)&&(o=bj(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(YC,"$&/")+"/")+e)),t.push(o)),1;if(c=0,n=n===""?".":n+":",QC(e))for(var l=0;l<e.length;l++){i=e[l];var s=n+Sw(i,l);c+=so(i,t,a,s,o)}else if(s=Lj(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=n+Sw(i,l++),c+=so(i,t,a,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function Ur(e,t,a){if(e==null)return e;var n=[],o=0;return so(e,n,"","",function(i){return t.call(a,i,o++)}),n}function Sj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},ho={transition:null},Ij={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ho,ReactCurrentOwner:bb};function HP(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Ur,forEach:function(e,t,a){Ur(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Ur(e,function(){t++}),t},toArray:function(e){return Ur(e,function(t){return t})||[]},only:function(e){if(!Cb(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=gn;F.Fragment=pj;F.Profiler=mj;F.PureComponent=wb;F.StrictMode=kj;F.Suspense=Mj;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ij;F.act=HP;F.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=IP({},e.props),o=e.key,i=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,c=bb.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)qP.call(t,s)&&!zP.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){l=Array(s);for(var d=0;d<s;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:zr,type:e.type,key:o,ref:i,props:n,_owner:c}};F.createContext=function(e){return e={$$typeof:gj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fj,_context:e},e.Consumer=e};F.createElement=jP;F.createFactory=function(e){var t=jP.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:vj,render:e}};F.isValidElement=Cb;F.lazy=function(e){return{$$typeof:wj,_payload:{_status:-1,_result:e},_init:Sj}};F.memo=function(e,t){return{$$typeof:xj,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};F.unstable_act=HP;F.useCallback=function(e,t){return Me.current.useCallback(e,t)};F.useContext=function(e){return Me.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};F.useEffect=function(e,t){return Me.current.useEffect(e,t)};F.useId=function(){return Me.current.useId()};F.useImperativeHandle=function(e,t,a){return Me.current.useImperativeHandle(e,t,a)};F.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return Me.current.useMemo(e,t)};F.useReducer=function(e,t,a){return Me.current.useReducer(e,t,a)};F.useRef=function(e){return Me.current.useRef(e)};F.useState=function(e){return Me.current.useState(e)};F.useSyncExternalStore=function(e,t,a){return Me.current.useSyncExternalStore(e,t,a)};F.useTransition=function(){return Me.current.useTransition()};F.version="18.3.1";CP.exports=F;var S=CP.exports;/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Pj=S,Aj=Symbol.for("react.element"),qj=Symbol.for("react.fragment"),zj=Object.prototype.hasOwnProperty,jj=Pj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hj={key:!0,ref:!0,__self:!0,__source:!0};function TP(e,t,a){var n,o={},i=null,c=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)zj.call(t,n)&&!Hj.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Aj,type:e,key:i,ref:c,props:o,_owner:jj.current}}aw.Fragment=qj;aw.jsx=TP;aw.jsxs=TP;bP.exports=aw;var f=bP.exports,VP={exports:{}},Te={},FP={exports:{}},DP={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(A,H){var V=A.length;A.push(H);e:for(;0<V;){var Q=V-1>>>1,ne=A[Q];if(0<o(ne,H))A[Q]=H,A[V]=ne,V=Q;else break e}}function a(A){return A.length===0?null:A[0]}function n(A){if(A.length===0)return null;var H=A[0],V=A.pop();if(V!==H){A[0]=V;e:for(var Q=0,ne=A.length,Er=ne>>>1;Q<Er;){var Xt=2*(Q+1)-1,Cw=A[Xt],Kt=Xt+1,Or=A[Kt];if(0>o(Cw,V))Kt<ne&&0>o(Or,Cw)?(A[Q]=Or,A[Kt]=V,Q=Kt):(A[Q]=Cw,A[Xt]=V,Q=Xt);else if(Kt<ne&&0>o(Or,V))A[Q]=Or,A[Kt]=V,Q=Kt;else break e}}return H}function o(A,H){var V=A.sortIndex-H.sortIndex;return V!==0?V:A.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var c=Date,l=c.now();e.unstable_now=function(){return c.now()-l}}var s=[],d=[],h=1,u=null,y=3,g=!1,v=!1,M=!1,L=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var H=a(d);H!==null;){if(H.callback===null)n(d);else if(H.startTime<=A)n(d),H.sortIndex=H.expirationTime,t(s,H);else break;H=a(d)}}function x(A){if(M=!1,m(A),!v)if(a(s)!==null)v=!0,Fe(w);else{var H=a(d);H!==null&&Gt(x,H.startTime-A)}}function w(A,H){v=!1,M&&(M=!1,k(b),b=-1),g=!0;var V=y;try{for(m(H),u=a(s);u!==null&&(!(u.expirationTime>H)||A&&!ie());){var Q=u.callback;if(typeof Q=="function"){u.callback=null,y=u.priorityLevel;var ne=Q(u.expirationTime<=H);H=e.unstable_now(),typeof ne=="function"?u.callback=ne:u===a(s)&&n(s),m(H)}else n(s);u=a(s)}if(u!==null)var Er=!0;else{var Xt=a(d);Xt!==null&&Gt(x,Xt.startTime-H),Er=!1}return Er}finally{u=null,y=V,g=!1}}var I=!1,P=null,b=-1,T=5,j=-1;function ie(){return!(e.unstable_now()-j<T)}function xt(){if(P!==null){var A=e.unstable_now();j=A;var H=!0;try{H=P(!0,A)}finally{H?_t():(I=!1,P=null)}}else I=!1}var _t;if(typeof p=="function")_t=function(){p(xt)};else if(typeof MessageChannel<"u"){var Ln=new MessageChannel,ce=Ln.port2;Ln.port1.onmessage=xt,_t=function(){ce.postMessage(null)}}else _t=function(){L(xt,0)};function Fe(A){P=A,I||(I=!0,_t())}function Gt(A,H){b=L(function(){A(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,Fe(w))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return a(s)},e.unstable_next=function(A){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var V=y;y=H;try{return A()}finally{y=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,H){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var V=y;y=A;try{return H()}finally{y=V}},e.unstable_scheduleCallback=function(A,H,V){var Q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,A){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=V+ne,A={id:h++,callback:H,priorityLevel:A,startTime:V,expirationTime:ne,sortIndex:-1},V>Q?(A.sortIndex=V,t(d,A),a(s)===null&&A===a(d)&&(M?(k(b),b=-1):M=!0,Gt(x,V-Q))):(A.sortIndex=ne,t(s,A),v||g||(v=!0,Fe(w))),A},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(A){var H=y;return function(){var V=y;y=H;try{return A.apply(this,arguments)}finally{y=V}}}})(DP);FP.exports=DP;var Tj=FP.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Vj=S,je=Tj;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RP=new Set,sr={};function A1(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(sr[e]=t,e=0;e<t.length;e++)RP.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yL=Object.prototype.hasOwnProperty,Fj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,JC={},eS={};function Dj(e){return yL.call(eS,e)?!0:yL.call(JC,e)?!1:Fj.test(e)?eS[e]=!0:(JC[e]=!0,!1)}function Rj(e,t,a,n){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bj(e,t,a,n){if(t===null||typeof t>"u"||Rj(e,t,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,a,n,o,i,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=c}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sb=/[\-:]([a-z])/g;function Ib(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Sb,Ib);he[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Sb,Ib);he[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Sb,Ib);he[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pb(e,t,a,n){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bj(t,a,o,n)&&(a=null),n||o===null?Dj(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,n=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,n?e.setAttributeNS(n,t,a):e.setAttribute(t,a))))}var Mt=Vj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nr=Symbol.for("react.element"),H1=Symbol.for("react.portal"),T1=Symbol.for("react.fragment"),Ab=Symbol.for("react.strict_mode"),pL=Symbol.for("react.profiler"),BP=Symbol.for("react.provider"),EP=Symbol.for("react.context"),qb=Symbol.for("react.forward_ref"),kL=Symbol.for("react.suspense"),mL=Symbol.for("react.suspense_list"),zb=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),OP=Symbol.for("react.offscreen"),tS=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=tS&&e[tS]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,Iw;function Hn(e){if(Iw===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Iw=t&&t[1]||""}return`
`+Iw+e}var Pw=!1;function Aw(e,t){if(!e||Pw)return"";Pw=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=n.stack.split(`
`),c=o.length-1,l=i.length-1;1<=c&&0<=l&&o[c]!==i[l];)l--;for(;1<=c&&0<=l;c--,l--)if(o[c]!==i[l]){if(c!==1||l!==1)do if(c--,l--,0>l||o[c]!==i[l]){var s=`
`+o[c].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=c&&0<=l);break}}}finally{Pw=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Hn(e):""}function Ej(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=Aw(e.type,!1),e;case 11:return e=Aw(e.type.render,!1),e;case 1:return e=Aw(e.type,!0),e;default:return""}}function fL(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T1:return"Fragment";case H1:return"Portal";case pL:return"Profiler";case Ab:return"StrictMode";case kL:return"Suspense";case mL:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case EP:return(e.displayName||"Context")+".Consumer";case BP:return(e._context.displayName||"Context")+".Provider";case qb:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zb:return t=e.displayName||null,t!==null?t:fL(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return fL(e(t))}catch{}}return null}function Oj(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fL(t);case 8:return t===Ab?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function UP(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Uj(e){var t=UP(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){n=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Uj(e))}function NP(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=UP(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function bx(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gL(e,t){var a=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function aS(e,t){var a=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;a=Rt(t.value!=null?t.value:a),e._wrapperState={initialChecked:n,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ZP(e,t){t=t.checked,t!=null&&Pb(e,"checked",t,!1)}function vL(e,t){ZP(e,t);var a=Rt(t.value),n=t.type;if(a!=null)n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ML(e,t.type,a):t.hasOwnProperty("defaultValue")&&ML(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nS(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function ML(e,t,a){(t!=="number"||bx(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Tn=Array.isArray;function $1(e,t,a,n){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Rt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function xL(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rS(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(C(92));if(Tn(a)){if(1<a.length)throw Error(C(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Rt(a)}}function WP(e,t){var a=Rt(t.value),n=Rt(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),n!=null&&(e.defaultValue=""+n)}function oS(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _P(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wL(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_P(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,GP=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function dr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nj=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Nj.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function XP(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function KP(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var n=a.indexOf("--")===0,o=XP(a,t[a],n);a==="float"&&(a="cssFloat"),n?e.setProperty(a,o):e[a]=o}}var Zj=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function LL(e,t){if(t){if(Zj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function bL(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var CL=null;function jb(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var SL=null,Q1=null,Y1=null;function iS(e){if(e=Tr(e)){if(typeof SL!="function")throw Error(C(280));var t=e.stateNode;t&&(t=cw(t),SL(e.stateNode,e.type,t))}}function $P(e){Q1?Y1?Y1.push(e):Y1=[e]:Q1=e}function QP(){if(Q1){var e=Q1,t=Y1;if(Y1=Q1=null,iS(e),t)for(e=0;e<t.length;e++)iS(t[e])}}function YP(e,t){return e(t)}function JP(){}var qw=!1;function eA(e,t,a){if(qw)return e(t,a);qw=!0;try{return YP(e,t,a)}finally{qw=!1,(Q1!==null||Y1!==null)&&(JP(),QP())}}function hr(e,t){var a=e.stateNode;if(a===null)return null;var n=cw(a);if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,t,typeof a));return a}var IL=!1;if(kt)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){IL=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{IL=!1}function Wj(e,t,a,n,o,i,c,l,s){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(h){this.onError(h)}}var On=!1,Cx=null,Sx=!1,PL=null,_j={onError:function(e){On=!0,Cx=e}};function Gj(e,t,a,n,o,i,c,l,s){On=!1,Cx=null,Wj.apply(_j,arguments)}function Xj(e,t,a,n,o,i,c,l,s){if(Gj.apply(this,arguments),On){if(On){var d=Cx;On=!1,Cx=null}else throw Error(C(198));Sx||(Sx=!0,PL=d)}}function q1(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function tA(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cS(e){if(q1(e)!==e)throw Error(C(188))}function Kj(e){var t=e.alternate;if(!t){if(t=q1(e),t===null)throw Error(C(188));return t!==e?null:e}for(var a=e,n=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){a=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return cS(o),e;if(i===n)return cS(o),t;i=i.sibling}throw Error(C(188))}if(a.return!==n.return)a=o,n=i;else{for(var c=!1,l=o.child;l;){if(l===a){c=!0,a=o,n=i;break}if(l===n){c=!0,n=o,a=i;break}l=l.sibling}if(!c){for(l=i.child;l;){if(l===a){c=!0,a=i,n=o;break}if(l===n){c=!0,n=i,a=o;break}l=l.sibling}if(!c)throw Error(C(189))}}if(a.alternate!==n)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:t}function aA(e){return e=Kj(e),e!==null?nA(e):null}function nA(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nA(e);if(t!==null)return t;e=e.sibling}return null}var rA=je.unstable_scheduleCallback,lS=je.unstable_cancelCallback,$j=je.unstable_shouldYield,Qj=je.unstable_requestPaint,J=je.unstable_now,Yj=je.unstable_getCurrentPriorityLevel,Hb=je.unstable_ImmediatePriority,oA=je.unstable_UserBlockingPriority,Ix=je.unstable_NormalPriority,Jj=je.unstable_LowPriority,iA=je.unstable_IdlePriority,nw=null,rt=null;function eH(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(nw,e,void 0,(e.current.flags&128)===128)}catch{}}var $e=Math.clz32?Math.clz32:nH,tH=Math.log,aH=Math.LN2;function nH(e){return e>>>=0,e===0?32:31-(tH(e)/aH|0)|0}var _r=64,Gr=4194304;function Vn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Px(e,t){var a=e.pendingLanes;if(a===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,c=a&268435455;if(c!==0){var l=c&~o;l!==0?n=Vn(l):(i&=c,i!==0&&(n=Vn(i)))}else c=a&~o,c!==0?n=Vn(c):i!==0&&(n=Vn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)a=31-$e(t),o=1<<a,n|=e[a],t&=~o;return n}function rH(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oH(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var c=31-$e(i),l=1<<c,s=o[c];s===-1?(!(l&a)||l&n)&&(o[c]=rH(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function AL(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cA(){var e=_r;return _r<<=1,!(_r&4194240)&&(_r=64),e}function zw(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function jr(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$e(t),e[t]=a}function iH(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-$e(a),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,a&=~i}}function Tb(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-$e(a),o=1<<n;o&t|e[n]&t&&(e[n]|=t),a&=~o}}var R=0;function lA(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sA,Vb,dA,hA,uA,qL=!1,Xr=[],qt=null,zt=null,jt=null,ur=new Map,yr=new Map,St=[],cH="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sS(e,t){switch(e){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yr.delete(t.pointerId)}}function Sn(e,t,a,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Tr(t),t!==null&&Vb(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function lH(e,t,a,n,o){switch(t){case"focusin":return qt=Sn(qt,e,t,a,n,o),!0;case"dragenter":return zt=Sn(zt,e,t,a,n,o),!0;case"mouseover":return jt=Sn(jt,e,t,a,n,o),!0;case"pointerover":var i=o.pointerId;return ur.set(i,Sn(ur.get(i)||null,e,t,a,n,o)),!0;case"gotpointercapture":return i=o.pointerId,yr.set(i,Sn(yr.get(i)||null,e,t,a,n,o)),!0}return!1}function yA(e){var t=f1(e.target);if(t!==null){var a=q1(t);if(a!==null){if(t=a.tag,t===13){if(t=tA(a),t!==null){e.blockedOn=t,uA(e.priority,function(){dA(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zL(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);CL=n,a.target.dispatchEvent(n),CL=null}else return t=Tr(a),t!==null&&Vb(t),e.blockedOn=a,!1;t.shift()}return!0}function dS(e,t,a){uo(e)&&a.delete(t)}function sH(){qL=!1,qt!==null&&uo(qt)&&(qt=null),zt!==null&&uo(zt)&&(zt=null),jt!==null&&uo(jt)&&(jt=null),ur.forEach(dS),yr.forEach(dS)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,qL||(qL=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,sH)))}function pr(e){function t(o){return In(o,e)}if(0<Xr.length){In(Xr[0],e);for(var a=1;a<Xr.length;a++){var n=Xr[a];n.blockedOn===e&&(n.blockedOn=null)}}for(qt!==null&&In(qt,e),zt!==null&&In(zt,e),jt!==null&&In(jt,e),ur.forEach(t),yr.forEach(t),a=0;a<St.length;a++)n=St[a],n.blockedOn===e&&(n.blockedOn=null);for(;0<St.length&&(a=St[0],a.blockedOn===null);)yA(a),a.blockedOn===null&&St.shift()}var J1=Mt.ReactCurrentBatchConfig,Ax=!0;function dH(e,t,a,n){var o=R,i=J1.transition;J1.transition=null;try{R=1,Fb(e,t,a,n)}finally{R=o,J1.transition=i}}function hH(e,t,a,n){var o=R,i=J1.transition;J1.transition=null;try{R=4,Fb(e,t,a,n)}finally{R=o,J1.transition=i}}function Fb(e,t,a,n){if(Ax){var o=zL(e,t,a,n);if(o===null)Ow(e,t,n,qx,a),sS(e,n);else if(lH(o,e,t,a,n))n.stopPropagation();else if(sS(e,n),t&4&&-1<cH.indexOf(e)){for(;o!==null;){var i=Tr(o);if(i!==null&&sA(i),i=zL(e,t,a,n),i===null&&Ow(e,t,n,qx,a),i===o)break;o=i}o!==null&&n.stopPropagation()}else Ow(e,t,n,null,a)}}var qx=null;function zL(e,t,a,n){if(qx=null,e=jb(n),e=f1(e),e!==null)if(t=q1(e),t===null)e=null;else if(a=t.tag,a===13){if(e=tA(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qx=e,null}function pA(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yj()){case Hb:return 1;case oA:return 4;case Ix:case Jj:return 16;case iA:return 536870912;default:return 16}default:return 16}}var Pt=null,Db=null,yo=null;function kA(){if(yo)return yo;var e,t=Db,a=t.length,n,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var c=a-e;for(n=1;n<=c&&t[a-n]===o[i-n];n++);return yo=o.slice(e,1<n?1-n:void 0)}function po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function hS(){return!1}function Ve(e){function t(a,n,o,i,c){this._reactName=a,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(a=e[l],this[l]=a?a(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Kr:hS,this.isPropagationStopped=hS,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rb=Ve(vn),Hr=X({},vn,{view:0,detail:0}),uH=Ve(Hr),jw,Hw,Pn,rw=X({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bb,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(jw=e.screenX-Pn.screenX,Hw=e.screenY-Pn.screenY):Hw=jw=0,Pn=e),jw)},movementY:function(e){return"movementY"in e?e.movementY:Hw}}),uS=Ve(rw),yH=X({},rw,{dataTransfer:0}),pH=Ve(yH),kH=X({},Hr,{relatedTarget:0}),Tw=Ve(kH),mH=X({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),fH=Ve(mH),gH=X({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vH=Ve(gH),MH=X({},vn,{data:0}),yS=Ve(MH),xH={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wH={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},LH={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bH(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=LH[e])?!!t[e]:!1}function Bb(){return bH}var CH=X({},Hr,{key:function(e){if(e.key){var t=xH[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wH[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bb,charCode:function(e){return e.type==="keypress"?po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),SH=Ve(CH),IH=X({},rw,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pS=Ve(IH),PH=X({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bb}),AH=Ve(PH),qH=X({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zH=Ve(qH),jH=X({},rw,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),HH=Ve(jH),TH=[9,13,27,32],Eb=kt&&"CompositionEvent"in window,Un=null;kt&&"documentMode"in document&&(Un=document.documentMode);var VH=kt&&"TextEvent"in window&&!Un,mA=kt&&(!Eb||Un&&8<Un&&11>=Un),kS=" ",mS=!1;function fA(e,t){switch(e){case"keyup":return TH.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gA(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var V1=!1;function FH(e,t){switch(e){case"compositionend":return gA(t);case"keypress":return t.which!==32?null:(mS=!0,kS);case"textInput":return e=t.data,e===kS&&mS?null:e;default:return null}}function DH(e,t){if(V1)return e==="compositionend"||!Eb&&fA(e,t)?(e=kA(),yo=Db=Pt=null,V1=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mA&&t.locale!=="ko"?null:t.data;default:return null}}var RH={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fS(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!RH[e.type]:t==="textarea"}function vA(e,t,a,n){$P(n),t=zx(t,"onChange"),0<t.length&&(a=new Rb("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Nn=null,kr=null;function BH(e){qA(e,0)}function ow(e){var t=R1(e);if(NP(t))return e}function EH(e,t){if(e==="change")return t}var MA=!1;if(kt){var Vw;if(kt){var Fw="oninput"in document;if(!Fw){var gS=document.createElement("div");gS.setAttribute("oninput","return;"),Fw=typeof gS.oninput=="function"}Vw=Fw}else Vw=!1;MA=Vw&&(!document.documentMode||9<document.documentMode)}function vS(){Nn&&(Nn.detachEvent("onpropertychange",xA),kr=Nn=null)}function xA(e){if(e.propertyName==="value"&&ow(kr)){var t=[];vA(t,kr,e,jb(e)),eA(BH,t)}}function OH(e,t,a){e==="focusin"?(vS(),Nn=t,kr=a,Nn.attachEvent("onpropertychange",xA)):e==="focusout"&&vS()}function UH(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ow(kr)}function NH(e,t){if(e==="click")return ow(t)}function ZH(e,t){if(e==="input"||e==="change")return ow(t)}function WH(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:WH;function mr(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var o=a[n];if(!yL.call(t,o)||!Ye(e[o],t[o]))return!1}return!0}function MS(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xS(e,t){var a=MS(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=MS(a)}}function wA(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wA(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function LA(){for(var e=window,t=bx();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=bx(e.document)}return t}function Ob(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _H(e){var t=LA(),a=e.focusedElem,n=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&wA(a.ownerDocument.documentElement,a)){if(n!==null&&Ob(a)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=xS(a,i);var c=xS(a,n);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var GH=kt&&"documentMode"in document&&11>=document.documentMode,F1=null,jL=null,Zn=null,HL=!1;function wS(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;HL||F1==null||F1!==bx(n)||(n=F1,"selectionStart"in n&&Ob(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Zn&&mr(Zn,n)||(Zn=n,n=zx(jL,"onSelect"),0<n.length&&(t=new Rb("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=F1)))}function $r(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var D1={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionend:$r("Transition","TransitionEnd")},Dw={},bA={};kt&&(bA=document.createElement("div").style,"AnimationEvent"in window||(delete D1.animationend.animation,delete D1.animationiteration.animation,delete D1.animationstart.animation),"TransitionEvent"in window||delete D1.transitionend.transition);function iw(e){if(Dw[e])return Dw[e];if(!D1[e])return e;var t=D1[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bA)return Dw[e]=t[a];return e}var CA=iw("animationend"),SA=iw("animationiteration"),IA=iw("animationstart"),PA=iw("transitionend"),AA=new Map,LS="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){AA.set(e,t),A1(t,[e])}for(var Rw=0;Rw<LS.length;Rw++){var Bw=LS[Rw],XH=Bw.toLowerCase(),KH=Bw[0].toUpperCase()+Bw.slice(1);Ut(XH,"on"+KH)}Ut(CA,"onAnimationEnd");Ut(SA,"onAnimationIteration");Ut(IA,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(PA,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);A1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));A1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));A1("onBeforeInput",["compositionend","keypress","textInput","paste"]);A1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));A1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));A1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$H=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function bS(e,t,a){var n=e.type||"unknown-event";e.currentTarget=a,Xj(n,t,void 0,e),e.currentTarget=null}function qA(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var c=n.length-1;0<=c;c--){var l=n[c],s=l.instance,d=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;bS(o,l,d),i=s}else for(c=0;c<n.length;c++){if(l=n[c],s=l.instance,d=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;bS(o,l,d),i=s}}}if(Sx)throw e=PL,Sx=!1,PL=null,e}function E(e,t){var a=t[RL];a===void 0&&(a=t[RL]=new Set);var n=e+"__bubble";a.has(n)||(zA(t,e,2,!1),a.add(n))}function Ew(e,t,a){var n=0;t&&(n|=4),zA(a,e,n,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Qr]){e[Qr]=!0,RP.forEach(function(a){a!=="selectionchange"&&($H.has(a)||Ew(a,!1,e),Ew(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,Ew("selectionchange",!1,t))}}function zA(e,t,a,n){switch(pA(t)){case 1:var o=dH;break;case 4:o=hH;break;default:o=Fb}a=o.bind(null,t,a,e),o=void 0,!IL||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Ow(e,t,a,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(c===4)for(c=n.return;c!==null;){var s=c.tag;if((s===3||s===4)&&(s=c.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;c=c.return}for(;l!==null;){if(c=f1(l),c===null)return;if(s=c.tag,s===5||s===6){n=i=c;continue e}l=l.parentNode}}n=n.return}eA(function(){var d=i,h=jb(a),u=[];e:{var y=AA.get(e);if(y!==void 0){var g=Rb,v=e;switch(e){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":g=SH;break;case"focusin":v="focus",g=Tw;break;case"focusout":v="blur",g=Tw;break;case"beforeblur":case"afterblur":g=Tw;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=uS;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=pH;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=AH;break;case CA:case SA:case IA:g=fH;break;case PA:g=zH;break;case"scroll":g=uH;break;case"wheel":g=HH;break;case"copy":case"cut":case"paste":g=vH;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=pS}var M=(t&4)!==0,L=!M&&e==="scroll",k=M?y!==null?y+"Capture":null:y;M=[];for(var p=d,m;p!==null;){m=p;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,k!==null&&(x=hr(p,k),x!=null&&M.push(gr(p,x,m)))),L)break;p=p.return}0<M.length&&(y=new g(y,v,null,a,h),u.push({event:y,listeners:M}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&a!==CL&&(v=a.relatedTarget||a.fromElement)&&(f1(v)||v[mt]))break e;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(v=a.relatedTarget||a.toElement,g=d,v=v?f1(v):null,v!==null&&(L=q1(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(M=uS,x="onMouseLeave",k="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(M=pS,x="onPointerLeave",k="onPointerEnter",p="pointer"),L=g==null?y:R1(g),m=v==null?y:R1(v),y=new M(x,p+"leave",g,a,h),y.target=L,y.relatedTarget=m,x=null,f1(h)===d&&(M=new M(k,p+"enter",v,a,h),M.target=m,M.relatedTarget=L,x=M),L=x,g&&v)t:{for(M=g,k=v,p=0,m=M;m;m=j1(m))p++;for(m=0,x=k;x;x=j1(x))m++;for(;0<p-m;)M=j1(M),p--;for(;0<m-p;)k=j1(k),m--;for(;p--;){if(M===k||k!==null&&M===k.alternate)break t;M=j1(M),k=j1(k)}M=null}else M=null;g!==null&&CS(u,y,g,M,!1),v!==null&&L!==null&&CS(u,L,v,M,!0)}}e:{if(y=d?R1(d):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var w=EH;else if(fS(y))if(MA)w=ZH;else{w=UH;var I=OH}else(g=y.nodeName)&&g.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(w=NH);if(w&&(w=w(e,d))){vA(u,w,a,h);break e}I&&I(e,y,d),e==="focusout"&&(I=y._wrapperState)&&I.controlled&&y.type==="number"&&ML(y,"number",y.value)}switch(I=d?R1(d):window,e){case"focusin":(fS(I)||I.contentEditable==="true")&&(F1=I,jL=d,Zn=null);break;case"focusout":Zn=jL=F1=null;break;case"mousedown":HL=!0;break;case"contextmenu":case"mouseup":case"dragend":HL=!1,wS(u,a,h);break;case"selectionchange":if(GH)break;case"keydown":case"keyup":wS(u,a,h)}var P;if(Eb)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else V1?fA(e,a)&&(b="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(b="onCompositionStart");b&&(mA&&a.locale!=="ko"&&(V1||b!=="onCompositionStart"?b==="onCompositionEnd"&&V1&&(P=kA()):(Pt=h,Db="value"in Pt?Pt.value:Pt.textContent,V1=!0)),I=zx(d,b),0<I.length&&(b=new yS(b,e,null,a,h),u.push({event:b,listeners:I}),P?b.data=P:(P=gA(a),P!==null&&(b.data=P)))),(P=VH?FH(e,a):DH(e,a))&&(d=zx(d,"onBeforeInput"),0<d.length&&(h=new yS("onBeforeInput","beforeinput",null,a,h),u.push({event:h,listeners:d}),h.data=P))}qA(u,t)})}function gr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function zx(e,t){for(var a=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=hr(e,a),i!=null&&n.unshift(gr(e,i,o)),i=hr(e,t),i!=null&&n.push(gr(e,i,o))),e=e.return}return n}function j1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function CS(e,t,a,n,o){for(var i=t._reactName,c=[];a!==null&&a!==n;){var l=a,s=l.alternate,d=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&d!==null&&(l=d,o?(s=hr(a,i),s!=null&&c.unshift(gr(a,s,l))):o||(s=hr(a,i),s!=null&&c.push(gr(a,s,l)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var QH=/\r\n?/g,YH=/\u0000|\uFFFD/g;function SS(e){return(typeof e=="string"?e:""+e).replace(QH,`
`).replace(YH,"")}function Yr(e,t,a){if(t=SS(t),SS(e)!==t&&a)throw Error(C(425))}function jx(){}var TL=null,VL=null;function FL(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var DL=typeof setTimeout=="function"?setTimeout:void 0,JH=typeof clearTimeout=="function"?clearTimeout:void 0,IS=typeof Promise=="function"?Promise:void 0,eT=typeof queueMicrotask=="function"?queueMicrotask:typeof IS<"u"?function(e){return IS.resolve(null).then(e).catch(tT)}:DL;function tT(e){setTimeout(function(){throw e})}function Uw(e,t){var a=t,n=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(n===0){e.removeChild(o),pr(t);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=o}while(a);pr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function PS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Mn,vr="__reactProps$"+Mn,mt="__reactContainer$"+Mn,RL="__reactEvents$"+Mn,aT="__reactListeners$"+Mn,nT="__reactHandles$"+Mn;function f1(e){var t=e[nt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[mt]||a[nt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=PS(e);e!==null;){if(a=e[nt])return a;e=PS(e)}return t}e=a,a=e.parentNode}return null}function Tr(e){return e=e[nt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function R1(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function cw(e){return e[vr]||null}var BL=[],B1=-1;function Nt(e){return{current:e}}function U(e){0>B1||(e.current=BL[B1],BL[B1]=null,B1--)}function B(e,t){B1++,BL[B1]=e.current,e.current=t}var Bt={},fe=Nt(Bt),be=Nt(!1),b1=Bt;function ln(e,t){var a=e.type.contextTypes;if(!a)return Bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function Hx(){U(be),U(fe)}function AS(e,t,a){if(fe.current!==Bt)throw Error(C(168));B(fe,t),B(be,a)}function jA(e,t,a){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(C(108,Oj(e)||"Unknown",o));return X({},a,n)}function Tx(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,b1=fe.current,B(fe,e),B(be,be.current),!0}function qS(e,t,a){var n=e.stateNode;if(!n)throw Error(C(169));a?(e=jA(e,t,b1),n.__reactInternalMemoizedMergedChildContext=e,U(be),U(fe),B(fe,e)):U(be),B(be,a)}var st=null,lw=!1,Nw=!1;function HA(e){st===null?st=[e]:st.push(e)}function rT(e){lw=!0,HA(e)}function Zt(){if(!Nw&&st!==null){Nw=!0;var e=0,t=R;try{var a=st;for(R=1;e<a.length;e++){var n=a[e];do n=n(!0);while(n!==null)}st=null,lw=!1}catch(o){throw st!==null&&(st=st.slice(e+1)),rA(Hb,Zt),o}finally{R=t,Nw=!1}}return null}var E1=[],O1=0,Vx=null,Fx=0,Be=[],Ee=0,C1=null,dt=1,ht="";function Qt(e,t){E1[O1++]=Fx,E1[O1++]=Vx,Vx=e,Fx=t}function TA(e,t,a){Be[Ee++]=dt,Be[Ee++]=ht,Be[Ee++]=C1,C1=e;var n=dt;e=ht;var o=32-$e(n)-1;n&=~(1<<o),a+=1;var i=32-$e(t)+o;if(30<i){var c=o-o%5;i=(n&(1<<c)-1).toString(32),n>>=c,o-=c,dt=1<<32-$e(t)+o|a<<o|n,ht=i+e}else dt=1<<i|a<<o|n,ht=e}function Ub(e){e.return!==null&&(Qt(e,1),TA(e,1,0))}function Nb(e){for(;e===Vx;)Vx=E1[--O1],E1[O1]=null,Fx=E1[--O1],E1[O1]=null;for(;e===C1;)C1=Be[--Ee],Be[Ee]=null,ht=Be[--Ee],Be[Ee]=null,dt=Be[--Ee],Be[Ee]=null}var qe=null,Ae=null,Z=!1,Ke=null;function VA(e,t){var a=Oe(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function zS(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ae=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ae=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=C1!==null?{id:dt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Oe(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,qe=e,Ae=null,!0):!1;default:return!1}}function EL(e){return(e.mode&1)!==0&&(e.flags&128)===0}function OL(e){if(Z){var t=Ae;if(t){var a=t;if(!zS(e,t)){if(EL(e))throw Error(C(418));t=Ht(a.nextSibling);var n=qe;t&&zS(e,t)?VA(n,a):(e.flags=e.flags&-4097|2,Z=!1,qe=e)}}else{if(EL(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,qe=e}}}function jS(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Jr(e){if(e!==qe)return!1;if(!Z)return jS(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!FL(e.type,e.memoizedProps)),t&&(t=Ae)){if(EL(e))throw FA(),Error(C(418));for(;t;)VA(e,t),t=Ht(t.nextSibling)}if(jS(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Ae=Ht(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Ae=null}}else Ae=qe?Ht(e.stateNode.nextSibling):null;return!0}function FA(){for(var e=Ae;e;)e=Ht(e.nextSibling)}function sn(){Ae=qe=null,Z=!1}function Zb(e){Ke===null?Ke=[e]:Ke.push(e)}var oT=Mt.ReactCurrentBatchConfig;function An(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(C(309));var n=a.stateNode}if(!n)throw Error(C(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(c){var l=o.refs;c===null?delete l[i]:l[i]=c},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!a._owner)throw Error(C(290,e))}return e}function eo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function HS(e){var t=e._init;return t(e._payload)}function DA(e){function t(k,p){if(e){var m=k.deletions;m===null?(k.deletions=[p],k.flags|=16):m.push(p)}}function a(k,p){if(!e)return null;for(;p!==null;)t(k,p),p=p.sibling;return null}function n(k,p){for(k=new Map;p!==null;)p.key!==null?k.set(p.key,p):k.set(p.index,p),p=p.sibling;return k}function o(k,p){return k=Dt(k,p),k.index=0,k.sibling=null,k}function i(k,p,m){return k.index=m,e?(m=k.alternate,m!==null?(m=m.index,m<p?(k.flags|=2,p):m):(k.flags|=2,p)):(k.flags|=1048576,p)}function c(k){return e&&k.alternate===null&&(k.flags|=2),k}function l(k,p,m,x){return p===null||p.tag!==6?(p=$w(m,k.mode,x),p.return=k,p):(p=o(p,m),p.return=k,p)}function s(k,p,m,x){var w=m.type;return w===T1?h(k,p,m.props.children,x,m.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&HS(w)===p.type)?(x=o(p,m.props),x.ref=An(k,p,m),x.return=k,x):(x=xo(m.type,m.key,m.props,null,k.mode,x),x.ref=An(k,p,m),x.return=k,x)}function d(k,p,m,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Qw(m,k.mode,x),p.return=k,p):(p=o(p,m.children||[]),p.return=k,p)}function h(k,p,m,x,w){return p===null||p.tag!==7?(p=w1(m,k.mode,x,w),p.return=k,p):(p=o(p,m),p.return=k,p)}function u(k,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=$w(""+p,k.mode,m),p.return=k,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nr:return m=xo(p.type,p.key,p.props,null,k.mode,m),m.ref=An(k,null,p),m.return=k,m;case H1:return p=Qw(p,k.mode,m),p.return=k,p;case bt:var x=p._init;return u(k,x(p._payload),m)}if(Tn(p)||bn(p))return p=w1(p,k.mode,m,null),p.return=k,p;eo(k,p)}return null}function y(k,p,m,x){var w=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:l(k,p,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Nr:return m.key===w?s(k,p,m,x):null;case H1:return m.key===w?d(k,p,m,x):null;case bt:return w=m._init,y(k,p,w(m._payload),x)}if(Tn(m)||bn(m))return w!==null?null:h(k,p,m,x,null);eo(k,m)}return null}function g(k,p,m,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return k=k.get(m)||null,l(p,k,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Nr:return k=k.get(x.key===null?m:x.key)||null,s(p,k,x,w);case H1:return k=k.get(x.key===null?m:x.key)||null,d(p,k,x,w);case bt:var I=x._init;return g(k,p,m,I(x._payload),w)}if(Tn(x)||bn(x))return k=k.get(m)||null,h(p,k,x,w,null);eo(p,x)}return null}function v(k,p,m,x){for(var w=null,I=null,P=p,b=p=0,T=null;P!==null&&b<m.length;b++){P.index>b?(T=P,P=null):T=P.sibling;var j=y(k,P,m[b],x);if(j===null){P===null&&(P=T);break}e&&P&&j.alternate===null&&t(k,P),p=i(j,p,b),I===null?w=j:I.sibling=j,I=j,P=T}if(b===m.length)return a(k,P),Z&&Qt(k,b),w;if(P===null){for(;b<m.length;b++)P=u(k,m[b],x),P!==null&&(p=i(P,p,b),I===null?w=P:I.sibling=P,I=P);return Z&&Qt(k,b),w}for(P=n(k,P);b<m.length;b++)T=g(P,k,b,m[b],x),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?b:T.key),p=i(T,p,b),I===null?w=T:I.sibling=T,I=T);return e&&P.forEach(function(ie){return t(k,ie)}),Z&&Qt(k,b),w}function M(k,p,m,x){var w=bn(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var I=w=null,P=p,b=p=0,T=null,j=m.next();P!==null&&!j.done;b++,j=m.next()){P.index>b?(T=P,P=null):T=P.sibling;var ie=y(k,P,j.value,x);if(ie===null){P===null&&(P=T);break}e&&P&&ie.alternate===null&&t(k,P),p=i(ie,p,b),I===null?w=ie:I.sibling=ie,I=ie,P=T}if(j.done)return a(k,P),Z&&Qt(k,b),w;if(P===null){for(;!j.done;b++,j=m.next())j=u(k,j.value,x),j!==null&&(p=i(j,p,b),I===null?w=j:I.sibling=j,I=j);return Z&&Qt(k,b),w}for(P=n(k,P);!j.done;b++,j=m.next())j=g(P,k,b,j.value,x),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?b:j.key),p=i(j,p,b),I===null?w=j:I.sibling=j,I=j);return e&&P.forEach(function(xt){return t(k,xt)}),Z&&Qt(k,b),w}function L(k,p,m,x){if(typeof m=="object"&&m!==null&&m.type===T1&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Nr:e:{for(var w=m.key,I=p;I!==null;){if(I.key===w){if(w=m.type,w===T1){if(I.tag===7){a(k,I.sibling),p=o(I,m.props.children),p.return=k,k=p;break e}}else if(I.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===bt&&HS(w)===I.type){a(k,I.sibling),p=o(I,m.props),p.ref=An(k,I,m),p.return=k,k=p;break e}a(k,I);break}else t(k,I);I=I.sibling}m.type===T1?(p=w1(m.props.children,k.mode,x,m.key),p.return=k,k=p):(x=xo(m.type,m.key,m.props,null,k.mode,x),x.ref=An(k,p,m),x.return=k,k=x)}return c(k);case H1:e:{for(I=m.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){a(k,p.sibling),p=o(p,m.children||[]),p.return=k,k=p;break e}else{a(k,p);break}else t(k,p);p=p.sibling}p=Qw(m,k.mode,x),p.return=k,k=p}return c(k);case bt:return I=m._init,L(k,p,I(m._payload),x)}if(Tn(m))return v(k,p,m,x);if(bn(m))return M(k,p,m,x);eo(k,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(a(k,p.sibling),p=o(p,m),p.return=k,k=p):(a(k,p),p=$w(m,k.mode,x),p.return=k,k=p),c(k)):a(k,p)}return L}var dn=DA(!0),RA=DA(!1),Dx=Nt(null),Rx=null,U1=null,Wb=null;function _b(){Wb=U1=Rx=null}function Gb(e){var t=Dx.current;U(Dx),e._currentValue=t}function UL(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function en(e,t){Rx=e,Wb=U1=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Ne(e){var t=e._currentValue;if(Wb!==e)if(e={context:e,memoizedValue:t,next:null},U1===null){if(Rx===null)throw Error(C(308));U1=e,Rx.dependencies={lanes:0,firstContext:e}}else U1=U1.next=e;return t}var g1=null;function Xb(e){g1===null?g1=[e]:g1.push(e)}function BA(e,t,a,n){var o=t.interleaved;return o===null?(a.next=a,Xb(t)):(a.next=o.next,o.next=a),t.interleaved=a,ft(e,n)}function ft(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var Ct=!1;function Kb(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function EA(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tt(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,D&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,ft(e,a)}return o=n.interleaved,o===null?(t.next=t,Xb(n)):(t.next=o.next,o.next=t),n.interleaved=t,ft(e,a)}function ko(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Tb(e,a)}}function TS(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Bx(e,t,a,n){var o=e.updateQueue;Ct=!1;var i=o.firstBaseUpdate,c=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,d=s.next;s.next=null,c===null?i=d:c.next=d,c=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==c&&(l===null?h.firstBaseUpdate=d:l.next=d,h.lastBaseUpdate=s))}if(i!==null){var u=o.baseState;c=0,h=d=s=null,l=i;do{var y=l.lane,g=l.eventTime;if((n&y)===y){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,M=l;switch(y=t,g=a,M.tag){case 1:if(v=M.payload,typeof v=="function"){u=v.call(g,u,y);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,y=typeof v=="function"?v.call(g,u,y):v,y==null)break e;u=X({},u,y);break e;case 2:Ct=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,y=o.effects,y===null?o.effects=[l]:y.push(l))}else g={eventTime:g,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(d=h=g,s=u):h=h.next=g,c|=y;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;y=l,l=y.next,y.next=null,o.lastBaseUpdate=y,o.shared.pending=null}}while(!0);if(h===null&&(s=u),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);I1|=c,e.lanes=c,e.memoizedState=u}}function VS(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=a,typeof o!="function")throw Error(C(191,o));o.call(n)}}}var Vr={},ot=Nt(Vr),Mr=Nt(Vr),xr=Nt(Vr);function v1(e){if(e===Vr)throw Error(C(174));return e}function $b(e,t){switch(B(xr,t),B(Mr,e),B(ot,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wL(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wL(t,e)}U(ot),B(ot,t)}function hn(){U(ot),U(Mr),U(xr)}function OA(e){v1(xr.current);var t=v1(ot.current),a=wL(t,e.type);t!==a&&(B(Mr,e),B(ot,a))}function Qb(e){Mr.current===e&&(U(ot),U(Mr))}var W=Nt(0);function Ex(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zw=[];function Yb(){for(var e=0;e<Zw.length;e++)Zw[e]._workInProgressVersionPrimary=null;Zw.length=0}var mo=Mt.ReactCurrentDispatcher,Ww=Mt.ReactCurrentBatchConfig,S1=0,G=null,te=null,re=null,Ox=!1,Wn=!1,wr=0,iT=0;function ue(){throw Error(C(321))}function Jb(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ye(e[a],t[a]))return!1;return!0}function eC(e,t,a,n,o,i){if(S1=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,mo.current=e===null||e.memoizedState===null?dT:hT,e=a(n,o),Wn){i=0;do{if(Wn=!1,wr=0,25<=i)throw Error(C(301));i+=1,re=te=null,t.updateQueue=null,mo.current=uT,e=a(n,o)}while(Wn)}if(mo.current=Ux,t=te!==null&&te.next!==null,S1=0,re=te=G=null,Ox=!1,t)throw Error(C(300));return e}function tC(){var e=wr!==0;return wr=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?G.memoizedState=re=e:re=re.next=e,re}function Ze(){if(te===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=re===null?G.memoizedState:re.next;if(t!==null)re=t,te=e;else{if(e===null)throw Error(C(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},re===null?G.memoizedState=re=e:re=re.next=e}return re}function Lr(e,t){return typeof t=="function"?t(e):t}function _w(e){var t=Ze(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var n=te,o=n.baseQueue,i=a.pending;if(i!==null){if(o!==null){var c=o.next;o.next=i.next,i.next=c}n.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=c=null,s=null,d=i;do{var h=d.lane;if((S1&h)===h)s!==null&&(s=s.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var u={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};s===null?(l=s=u,c=n):s=s.next=u,G.lanes|=h,I1|=h}d=d.next}while(d!==null&&d!==i);s===null?c=n:s.next=l,Ye(n,t.memoizedState)||(Le=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=s,a.lastRenderedState=n}if(e=a.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,I1|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Gw(e){var t=Ze(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var n=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var c=o=o.next;do i=e(i,c.action),c=c.next;while(c!==o);Ye(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function UA(){}function NA(e,t){var a=G,n=Ze(),o=t(),i=!Ye(n.memoizedState,o);if(i&&(n.memoizedState=o,Le=!0),n=n.queue,aC(_A.bind(null,a,n,e),[e]),n.getSnapshot!==t||i||re!==null&&re.memoizedState.tag&1){if(a.flags|=2048,br(9,WA.bind(null,a,n,o,t),void 0,null),oe===null)throw Error(C(349));S1&30||ZA(a,t,o)}return o}function ZA(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function WA(e,t,a,n){t.value=a,t.getSnapshot=n,GA(t)&&XA(e)}function _A(e,t,a){return a(function(){GA(t)&&XA(e)})}function GA(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ye(e,a)}catch{return!0}}function XA(e){var t=ft(e,1);t!==null&&Qe(t,e,1,-1)}function FS(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=sT.bind(null,G,e),[t.memoizedState,e]}function br(e,t,a,n){return e={tag:e,create:t,destroy:a,deps:n,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e)),e}function KA(){return Ze().memoizedState}function fo(e,t,a,n){var o=at();G.flags|=e,o.memoizedState=br(1|t,a,void 0,n===void 0?null:n)}function sw(e,t,a,n){var o=Ze();n=n===void 0?null:n;var i=void 0;if(te!==null){var c=te.memoizedState;if(i=c.destroy,n!==null&&Jb(n,c.deps)){o.memoizedState=br(t,a,i,n);return}}G.flags|=e,o.memoizedState=br(1|t,a,i,n)}function DS(e,t){return fo(8390656,8,e,t)}function aC(e,t){return sw(2048,8,e,t)}function $A(e,t){return sw(4,2,e,t)}function QA(e,t){return sw(4,4,e,t)}function YA(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function JA(e,t,a){return a=a!=null?a.concat([e]):null,sw(4,4,YA.bind(null,t,e),a)}function nC(){}function eq(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&Jb(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function tq(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;return n!==null&&t!==null&&Jb(t,n[1])?n[0]:(e=e(),a.memoizedState=[e,t],e)}function aq(e,t,a){return S1&21?(Ye(a,t)||(a=cA(),G.lanes|=a,I1|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=a)}function cT(e,t){var a=R;R=a!==0&&4>a?a:4,e(!0);var n=Ww.transition;Ww.transition={};try{e(!1),t()}finally{R=a,Ww.transition=n}}function nq(){return Ze().memoizedState}function lT(e,t,a){var n=Ft(e);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},rq(e))oq(t,a);else if(a=BA(e,t,a,n),a!==null){var o=ve();Qe(a,e,n,o),iq(a,t,n)}}function sT(e,t,a){var n=Ft(e),o={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(rq(e))oq(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,l=i(c,a);if(o.hasEagerState=!0,o.eagerState=l,Ye(l,c)){var s=t.interleaved;s===null?(o.next=o,Xb(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}a=BA(e,t,o,n),a!==null&&(o=ve(),Qe(a,e,n,o),iq(a,t,n))}}function rq(e){var t=e.alternate;return e===G||t!==null&&t===G}function oq(e,t){Wn=Ox=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function iq(e,t,a){if(a&4194240){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Tb(e,a)}}var Ux={readContext:Ne,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},dT={readContext:Ne,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:Ne,useEffect:DS,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,fo(4194308,4,YA.bind(null,t,e),a)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var a=at();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var n=at();return t=a!==void 0?a(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=lT.bind(null,G,e),[n.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:FS,useDebugValue:nC,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=FS(!1),t=e[0];return e=cT.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var n=G,o=at();if(Z){if(a===void 0)throw Error(C(407));a=a()}else{if(a=t(),oe===null)throw Error(C(349));S1&30||ZA(n,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,DS(_A.bind(null,n,i,e),[e]),n.flags|=2048,br(9,WA.bind(null,n,i,a,t),void 0,null),a},useId:function(){var e=at(),t=oe.identifierPrefix;if(Z){var a=ht,n=dt;a=(n&~(1<<32-$e(n)-1)).toString(32)+a,t=":"+t+"R"+a,a=wr++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=iT++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hT={readContext:Ne,useCallback:eq,useContext:Ne,useEffect:aC,useImperativeHandle:JA,useInsertionEffect:$A,useLayoutEffect:QA,useMemo:tq,useReducer:_w,useRef:KA,useState:function(){return _w(Lr)},useDebugValue:nC,useDeferredValue:function(e){var t=Ze();return aq(t,te.memoizedState,e)},useTransition:function(){var e=_w(Lr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:UA,useSyncExternalStore:NA,useId:nq,unstable_isNewReconciler:!1},uT={readContext:Ne,useCallback:eq,useContext:Ne,useEffect:aC,useImperativeHandle:JA,useInsertionEffect:$A,useLayoutEffect:QA,useMemo:tq,useReducer:Gw,useRef:KA,useState:function(){return Gw(Lr)},useDebugValue:nC,useDeferredValue:function(e){var t=Ze();return te===null?t.memoizedState=e:aq(t,te.memoizedState,e)},useTransition:function(){var e=Gw(Lr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:UA,useSyncExternalStore:NA,useId:nq,unstable_isNewReconciler:!1};function Ge(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function NL(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:X({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var dw={isMounted:function(e){return(e=e._reactInternals)?q1(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ve(),o=Ft(e),i=ut(n,o);i.payload=t,a!=null&&(i.callback=a),t=Tt(e,i,o),t!==null&&(Qe(t,e,o,n),ko(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ve(),o=Ft(e),i=ut(n,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Tt(e,i,o),t!==null&&(Qe(t,e,o,n),ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ve(),n=Ft(e),o=ut(a,n);o.tag=2,t!=null&&(o.callback=t),t=Tt(e,o,n),t!==null&&(Qe(t,e,n,a),ko(t,e,n))}};function RS(e,t,a,n,o,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,c):t.prototype&&t.prototype.isPureReactComponent?!mr(a,n)||!mr(o,i):!0}function cq(e,t,a){var n=!1,o=Bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ne(i):(o=Ce(t)?b1:fe.current,n=t.contextTypes,i=(n=n!=null)?ln(e,o):Bt),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dw,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function BS(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&dw.enqueueReplaceState(t,t.state,null)}function ZL(e,t,a,n){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Kb(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ne(i):(i=Ce(t)?b1:fe.current,o.context=ln(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(NL(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&dw.enqueueReplaceState(o,o.state,null),Bx(e,a,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var a="",n=t;do a+=Ej(n),n=n.return;while(n);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Xw(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function WL(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var yT=typeof WeakMap=="function"?WeakMap:Map;function lq(e,t,a){a=ut(-1,a),a.tag=3,a.payload={element:null};var n=t.value;return a.callback=function(){Zx||(Zx=!0,eb=n),WL(e,t)},a}function sq(e,t,a){a=ut(-1,a),a.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;a.payload=function(){return n(o)},a.callback=function(){WL(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){WL(e,t),typeof n!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),a}function ES(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new yT;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(a)||(o.add(a),e=IT.bind(null,e,t,a),t.then(e,e))}function OS(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function US(e,t,a,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=ut(-1,1),t.tag=2,Tt(a,t,1))),a.lanes|=1),e)}var pT=Mt.ReactCurrentOwner,Le=!1;function ge(e,t,a,n){t.child=e===null?RA(t,null,a,n):dn(t,e.child,a,n)}function NS(e,t,a,n,o){a=a.render;var i=t.ref;return en(t,o),n=eC(e,t,a,n,i,o),a=tC(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(Z&&a&&Ub(t),t.flags|=1,ge(e,t,n,o),t.child)}function ZS(e,t,a,n,o){if(e===null){var i=a.type;return typeof i=="function"&&!hC(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,dq(e,t,i,n,o)):(e=xo(a.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:mr,a(c,n)&&e.ref===t.ref)return gt(e,t,o)}return t.flags|=1,e=Dt(i,n),e.ref=t.ref,e.return=t,t.child=e}function dq(e,t,a,n,o){if(e!==null){var i=e.memoizedProps;if(mr(i,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,gt(e,t,o)}return _L(e,t,a,n,o)}function hq(e,t,a){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(Z1,Pe),Pe|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(Z1,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:a,B(Z1,Pe),Pe|=n}else i!==null?(n=i.baseLanes|a,t.memoizedState=null):n=a,B(Z1,Pe),Pe|=n;return ge(e,t,o,a),t.child}function uq(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function _L(e,t,a,n,o){var i=Ce(a)?b1:fe.current;return i=ln(t,i),en(t,o),a=eC(e,t,a,n,i,o),n=tC(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gt(e,t,o)):(Z&&n&&Ub(t),t.flags|=1,ge(e,t,a,o),t.child)}function WS(e,t,a,n,o){if(Ce(a)){var i=!0;Tx(t)}else i=!1;if(en(t,o),t.stateNode===null)go(e,t),cq(t,a,n),ZL(t,a,n,o),n=!0;else if(e===null){var c=t.stateNode,l=t.memoizedProps;c.props=l;var s=c.context,d=a.contextType;typeof d=="object"&&d!==null?d=Ne(d):(d=Ce(a)?b1:fe.current,d=ln(t,d));var h=a.getDerivedStateFromProps,u=typeof h=="function"||typeof c.getSnapshotBeforeUpdate=="function";u||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(l!==n||s!==d)&&BS(t,c,n,d),Ct=!1;var y=t.memoizedState;c.state=y,Bx(t,n,c,o),s=t.memoizedState,l!==n||y!==s||be.current||Ct?(typeof h=="function"&&(NL(t,a,h,n),s=t.memoizedState),(l=Ct||RS(t,a,l,n,y,s,d))?(u||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),c.props=n,c.state=s,c.context=d,n=l):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,EA(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ge(t.type,l),c.props=d,u=t.pendingProps,y=c.context,s=a.contextType,typeof s=="object"&&s!==null?s=Ne(s):(s=Ce(a)?b1:fe.current,s=ln(t,s));var g=a.getDerivedStateFromProps;(h=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(l!==u||y!==s)&&BS(t,c,n,s),Ct=!1,y=t.memoizedState,c.state=y,Bx(t,n,c,o);var v=t.memoizedState;l!==u||y!==v||be.current||Ct?(typeof g=="function"&&(NL(t,a,g,n),v=t.memoizedState),(d=Ct||RS(t,a,d,n,y,v,s)||!1)?(h||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,v,s),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,v,s)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),c.props=n,c.state=v,c.context=s,n=d):(typeof c.componentDidUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),n=!1)}return GL(e,t,a,n,i,o)}function GL(e,t,a,n,o,i){uq(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return o&&qS(t,a,!1),gt(e,t,i);n=t.stateNode,pT.current=t;var l=c&&typeof a.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=dn(t,e.child,null,i),t.child=dn(t,null,l,i)):ge(e,t,l,i),t.memoizedState=n.state,o&&qS(t,a,!0),t.child}function yq(e){var t=e.stateNode;t.pendingContext?AS(e,t.pendingContext,t.pendingContext!==t.context):t.context&&AS(e,t.context,!1),$b(e,t.containerInfo)}function _S(e,t,a,n,o){return sn(),Zb(o),t.flags|=256,ge(e,t,a,n),t.child}var XL={dehydrated:null,treeContext:null,retryLane:0};function KL(e){return{baseLanes:e,cachePool:null,transitions:null}}function pq(e,t,a){var n=t.pendingProps,o=W.current,i=!1,c=(t.flags&128)!==0,l;if((l=c)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(W,o&1),e===null)return OL(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=n.children,e=n.fallback,i?(n=t.mode,i=t.child,c={mode:"hidden",children:c},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=c):i=yw(c,n,0,null),e=w1(e,n,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=KL(a),t.memoizedState=XL,e):rC(t,c));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return kT(e,t,c,n,l,o,a);if(i){i=n.fallback,c=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:n.children};return!(c&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=Dt(o,s),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Dt(l,i):(i=w1(i,c,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,c=e.child.memoizedState,c=c===null?KL(a):{baseLanes:c.baseLanes|a,cachePool:null,transitions:c.transitions},i.memoizedState=c,i.childLanes=e.childLanes&~a,t.memoizedState=XL,n}return i=e.child,e=i.sibling,n=Dt(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=a),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n}function rC(e,t){return t=yw({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,a,n){return n!==null&&Zb(n),dn(t,e.child,null,a),e=rC(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kT(e,t,a,n,o,i,c){if(a)return t.flags&256?(t.flags&=-257,n=Xw(Error(C(422))),to(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=yw({mode:"visible",children:n.children},o,0,null),i=w1(i,o,c,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&dn(t,e.child,null,c),t.child.memoizedState=KL(c),t.memoizedState=XL,i);if(!(t.mode&1))return to(e,t,c,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(C(419)),n=Xw(i,n,void 0),to(e,t,c,n)}if(l=(c&e.childLanes)!==0,Le||l){if(n=oe,n!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|c)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,ft(e,o),Qe(n,e,o,-1))}return dC(),n=Xw(Error(C(421))),to(e,t,c,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=PT.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ae=Ht(o.nextSibling),qe=t,Z=!0,Ke=null,e!==null&&(Be[Ee++]=dt,Be[Ee++]=ht,Be[Ee++]=C1,dt=e.id,ht=e.overflow,C1=t),t=rC(t,n.children),t.flags|=4096,t)}function GS(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),UL(e.return,t,a)}function Kw(e,t,a,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=a,i.tailMode=o)}function kq(e,t,a){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(ge(e,t,n.children,a),n=W.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&GS(e,a,t);else if(e.tag===19)GS(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(B(W,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Ex(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Kw(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ex(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Kw(t,!0,a,null,i);break;case"together":Kw(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function go(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),I1|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,a=Dt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Dt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function mT(e,t,a){switch(t.tag){case 3:yq(t),sn();break;case 5:OA(t);break;case 1:Ce(t.type)&&Tx(t);break;case 4:$b(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;B(Dx,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(B(W,W.current&1),t.flags|=128,null):a&t.child.childLanes?pq(e,t,a):(B(W,W.current&1),e=gt(e,t,a),e!==null?e.sibling:null);B(W,W.current&1);break;case 19:if(n=(a&t.childLanes)!==0,e.flags&128){if(n)return kq(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(W,W.current),n)break;return null;case 22:case 23:return t.lanes=0,hq(e,t,a)}return gt(e,t,a)}var mq,$L,fq,gq;mq=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};$L=function(){};fq=function(e,t,a,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,v1(ot.current);var i=null;switch(a){case"input":o=gL(e,o),n=gL(e,n),i=[];break;case"select":o=X({},o,{value:void 0}),n=X({},n,{value:void 0}),i=[];break;case"textarea":o=xL(e,o),n=xL(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=jx)}LL(a,n);var c;a=null;for(d in o)if(!n.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(c in l)l.hasOwnProperty(c)&&(a||(a={}),a[c]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(sr.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var s=n[d];if(l=o!=null?o[d]:void 0,n.hasOwnProperty(d)&&s!==l&&(s!=null||l!=null))if(d==="style")if(l){for(c in l)!l.hasOwnProperty(c)||s&&s.hasOwnProperty(c)||(a||(a={}),a[c]="");for(c in s)s.hasOwnProperty(c)&&l[c]!==s[c]&&(a||(a={}),a[c]=s[c])}else a||(i||(i=[]),i.push(d,a)),a=s;else d==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(d,s)):d==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(d,""+s):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(sr.hasOwnProperty(d)?(s!=null&&d==="onScroll"&&E("scroll",e),i||l===s||(i=[])):(i=i||[]).push(d,s))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};gq=function(e,t,a,n){a!==n&&(t.flags|=4)};function qn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function fT(e,t,a){var n=t.pendingProps;switch(Nb(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ce(t.type)&&Hx(),ye(t),null;case 3:return n=t.stateNode,hn(),U(be),U(fe),Yb(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(nb(Ke),Ke=null))),$L(e,t),ye(t),null;case 5:Qb(t);var o=v1(xr.current);if(a=t.type,e!==null&&t.stateNode!=null)fq(e,t,a,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(C(166));return ye(t),null}if(e=v1(ot.current),Jr(t)){n=t.stateNode,a=t.type;var i=t.memoizedProps;switch(n[nt]=t,n[vr]=i,e=(t.mode&1)!==0,a){case"dialog":E("cancel",n),E("close",n);break;case"iframe":case"object":case"embed":E("load",n);break;case"video":case"audio":for(o=0;o<Fn.length;o++)E(Fn[o],n);break;case"source":E("error",n);break;case"img":case"image":case"link":E("error",n),E("load",n);break;case"details":E("toggle",n);break;case"input":aS(n,i),E("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},E("invalid",n);break;case"textarea":rS(n,i),E("invalid",n)}LL(a,i),o=null;for(var c in i)if(i.hasOwnProperty(c)){var l=i[c];c==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Yr(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Yr(n.textContent,l,e),o=["children",""+l]):sr.hasOwnProperty(c)&&l!=null&&c==="onScroll"&&E("scroll",n)}switch(a){case"input":Zr(n),nS(n,i,!0);break;case"textarea":Zr(n),oS(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=jx)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_P(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(a,{is:n.is}):(e=c.createElement(a),a==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,a),e[nt]=t,e[vr]=n,mq(e,t,!1,!1),t.stateNode=e;e:{switch(c=bL(a,n),a){case"dialog":E("cancel",e),E("close",e),o=n;break;case"iframe":case"object":case"embed":E("load",e),o=n;break;case"video":case"audio":for(o=0;o<Fn.length;o++)E(Fn[o],e);o=n;break;case"source":E("error",e),o=n;break;case"img":case"image":case"link":E("error",e),E("load",e),o=n;break;case"details":E("toggle",e),o=n;break;case"input":aS(e,n),o=gL(e,n),E("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=X({},n,{value:void 0}),E("invalid",e);break;case"textarea":rS(e,n),o=xL(e,n),E("invalid",e);break;default:o=n}LL(a,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?KP(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&GP(e,s)):i==="children"?typeof s=="string"?(a!=="textarea"||s!=="")&&dr(e,s):typeof s=="number"&&dr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(sr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&E("scroll",e):s!=null&&Pb(e,i,s,c))}switch(a){case"input":Zr(e),nS(e,n,!1);break;case"textarea":Zr(e),oS(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Rt(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?$1(e,!!n.multiple,i,!1):n.defaultValue!=null&&$1(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jx)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)gq(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(C(166));if(a=v1(xr.current),v1(ot.current),Jr(t)){if(n=t.stateNode,a=t.memoizedProps,n[nt]=t,(i=n.nodeValue!==a)&&(e=qe,e!==null))switch(e.tag){case 3:Yr(n.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yr(n.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return ye(t),null;case 13:if(U(W),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ae!==null&&t.mode&1&&!(t.flags&128))FA(),sn(),t.flags|=98560,i=!1;else if(i=Jr(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[nt]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),i=!1}else Ke!==null&&(nb(Ke),Ke=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?ae===0&&(ae=3):dC())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return hn(),$L(e,t),e===null&&fr(t.stateNode.containerInfo),ye(t),null;case 10:return Gb(t.type._context),ye(t),null;case 17:return Ce(t.type)&&Hx(),ye(t),null;case 19:if(U(W),i=t.memoizedState,i===null)return ye(t),null;if(n=(t.flags&128)!==0,c=i.rendering,c===null)if(n)qn(i,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Ex(e),c!==null){for(t.flags|=128,qn(i,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=a,a=t.child;a!==null;)i=a,e=n,i.flags&=14680066,c=i.alternate,c===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=c.childLanes,i.lanes=c.lanes,i.child=c.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=c.memoizedProps,i.memoizedState=c.memoizedState,i.updateQueue=c.updateQueue,i.type=c.type,e=c.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return B(W,W.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>yn&&(t.flags|=128,n=!0,qn(i,!1),t.lanes=4194304)}else{if(!n)if(e=Ex(c),e!==null){if(t.flags|=128,n=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Z)return ye(t),null}else 2*J()-i.renderingStartTime>yn&&a!==1073741824&&(t.flags|=128,n=!0,qn(i,!1),t.lanes=4194304);i.isBackwards?(c.sibling=t.child,t.child=c):(a=i.last,a!==null?a.sibling=c:t.child=c,i.last=c)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,a=W.current,B(W,n?a&1|2:a&1),t):(ye(t),null);case 22:case 23:return sC(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Pe&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function gT(e,t){switch(Nb(t),t.tag){case 1:return Ce(t.type)&&Hx(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hn(),U(be),U(fe),Yb(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qb(t),null;case 13:if(U(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(W),null;case 4:return hn(),null;case 10:return Gb(t.type._context),null;case 22:case 23:return sC(),null;case 24:return null;default:return null}}var ao=!1,ke=!1,vT=typeof WeakSet=="function"?WeakSet:Set,q=null;function N1(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){$(e,t,n)}else a.current=null}function vq(e,t,a){try{a()}catch(n){$(e,t,n)}}var XS=!1;function MT(e,t){if(TL=Ax,e=LA(),Ob(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,l=-1,s=-1,d=0,h=0,u=e,y=null;t:for(;;){for(var g;u!==a||o!==0&&u.nodeType!==3||(l=c+o),u!==i||n!==0&&u.nodeType!==3||(s=c+n),u.nodeType===3&&(c+=u.nodeValue.length),(g=u.firstChild)!==null;)y=u,u=g;for(;;){if(u===e)break t;if(y===a&&++d===o&&(l=c),y===i&&++h===n&&(s=c),(g=u.nextSibling)!==null)break;u=y,y=u.parentNode}u=g}a=l===-1||s===-1?null:{start:l,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(VL={focusedElem:e,selectionRange:a},Ax=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,L=v.memoizedState,k=t.stateNode,p=k.getSnapshotBeforeUpdate(t.elementType===t.type?M:Ge(t.type,M),L);k.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){$(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return v=XS,XS=!1,v}function _n(e,t,a){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&vq(t,a,i)}o=o.next}while(o!==n)}}function hw(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var n=a.create;a.destroy=n()}a=a.next}while(a!==t)}}function QL(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Mq(e){var t=e.alternate;t!==null&&(e.alternate=null,Mq(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[vr],delete t[RL],delete t[aT],delete t[nT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xq(e){return e.tag===5||e.tag===3||e.tag===4}function KS(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xq(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function YL(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=jx));else if(n!==4&&(e=e.child,e!==null))for(YL(e,t,a),e=e.sibling;e!==null;)YL(e,t,a),e=e.sibling}function JL(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(JL(e,t,a),e=e.sibling;e!==null;)JL(e,t,a),e=e.sibling}var le=null,Xe=!1;function wt(e,t,a){for(a=a.child;a!==null;)wq(e,t,a),a=a.sibling}function wq(e,t,a){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(nw,a)}catch{}switch(a.tag){case 5:ke||N1(a,t);case 6:var n=le,o=Xe;le=null,wt(e,t,a),le=n,Xe=o,le!==null&&(Xe?(e=le,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):le.removeChild(a.stateNode));break;case 18:le!==null&&(Xe?(e=le,a=a.stateNode,e.nodeType===8?Uw(e.parentNode,a):e.nodeType===1&&Uw(e,a),pr(e)):Uw(le,a.stateNode));break;case 4:n=le,o=Xe,le=a.stateNode.containerInfo,Xe=!0,wt(e,t,a),le=n,Xe=o;break;case 0:case 11:case 14:case 15:if(!ke&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,c=i.destroy;i=i.tag,c!==void 0&&(i&2||i&4)&&vq(a,t,c),o=o.next}while(o!==n)}wt(e,t,a);break;case 1:if(!ke&&(N1(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(l){$(a,t,l)}wt(e,t,a);break;case 21:wt(e,t,a);break;case 22:a.mode&1?(ke=(n=ke)||a.memoizedState!==null,wt(e,t,a),ke=n):wt(e,t,a);break;default:wt(e,t,a)}}function $S(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new vT),t.forEach(function(n){var o=AT.bind(null,e,n);a.has(n)||(a.add(n),n.then(o,o))})}}function We(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var o=a[n];try{var i=e,c=t,l=c;e:for(;l!==null;){switch(l.tag){case 5:le=l.stateNode,Xe=!1;break e;case 3:le=l.stateNode.containerInfo,Xe=!0;break e;case 4:le=l.stateNode.containerInfo,Xe=!0;break e}l=l.return}if(le===null)throw Error(C(160));wq(i,c,o),le=null,Xe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(d){$(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lq(t,e),t=t.sibling}function Lq(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),Je(e),n&4){try{_n(3,e,e.return),hw(3,e)}catch(M){$(e,e.return,M)}try{_n(5,e,e.return)}catch(M){$(e,e.return,M)}}break;case 1:We(t,e),Je(e),n&512&&a!==null&&N1(a,a.return);break;case 5:if(We(t,e),Je(e),n&512&&a!==null&&N1(a,a.return),e.flags&32){var o=e.stateNode;try{dr(o,"")}catch(M){$(e,e.return,M)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,c=a!==null?a.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ZP(o,i),bL(l,c);var d=bL(l,i);for(c=0;c<s.length;c+=2){var h=s[c],u=s[c+1];h==="style"?KP(o,u):h==="dangerouslySetInnerHTML"?GP(o,u):h==="children"?dr(o,u):Pb(o,h,u,d)}switch(l){case"input":vL(o,i);break;case"textarea":WP(o,i);break;case"select":var y=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?$1(o,!!i.multiple,g,!1):y!==!!i.multiple&&(i.defaultValue!=null?$1(o,!!i.multiple,i.defaultValue,!0):$1(o,!!i.multiple,i.multiple?[]:"",!1))}o[vr]=i}catch(M){$(e,e.return,M)}}break;case 6:if(We(t,e),Je(e),n&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(M){$(e,e.return,M)}}break;case 3:if(We(t,e),Je(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(M){$(e,e.return,M)}break;case 4:We(t,e),Je(e);break;case 13:We(t,e),Je(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(cC=J())),n&4&&$S(e);break;case 22:if(h=a!==null&&a.memoizedState!==null,e.mode&1?(ke=(d=ke)||h,We(t,e),ke=d):We(t,e),Je(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(q=e,h=e.child;h!==null;){for(u=q=h;q!==null;){switch(y=q,g=y.child,y.tag){case 0:case 11:case 14:case 15:_n(4,y,y.return);break;case 1:N1(y,y.return);var v=y.stateNode;if(typeof v.componentWillUnmount=="function"){n=y,a=y.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(M){$(n,a,M)}}break;case 5:N1(y,y.return);break;case 22:if(y.memoizedState!==null){YS(u);continue}}g!==null?(g.return=y,q=g):YS(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{o=u.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=u.stateNode,s=u.memoizedProps.style,c=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=XP("display",c))}catch(M){$(e,e.return,M)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=d?"":u.memoizedProps}catch(M){$(e,e.return,M)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:We(t,e),Je(e),n&4&&$S(e);break;case 21:break;default:We(t,e),Je(e)}}function Je(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(xq(a)){var n=a;break e}a=a.return}throw Error(C(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(dr(o,""),n.flags&=-33);var i=KS(e);JL(e,i,o);break;case 3:case 4:var c=n.stateNode.containerInfo,l=KS(e);YL(e,l,c);break;default:throw Error(C(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xT(e,t,a){q=e,bq(e)}function bq(e,t,a){for(var n=(e.mode&1)!==0;q!==null;){var o=q,i=o.child;if(o.tag===22&&n){var c=o.memoizedState!==null||ao;if(!c){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ke;l=ao;var d=ke;if(ao=c,(ke=s)&&!d)for(q=o;q!==null;)c=q,s=c.child,c.tag===22&&c.memoizedState!==null?JS(o):s!==null?(s.return=c,q=s):JS(o);for(;i!==null;)q=i,bq(i),i=i.sibling;q=o,ao=l,ke=d}QS(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,q=i):QS(e)}}function QS(e){for(;q!==null;){var t=q;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||hw(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ke)if(a===null)n.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:Ge(t.type,a.memoizedProps);n.componentDidUpdate(o,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&VS(t,i,n);break;case 3:var c=t.updateQueue;if(c!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}VS(t,c,a)}break;case 5:var l=t.stateNode;if(a===null&&t.flags&4){a=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break;case"img":s.src&&(a.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&pr(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ke||t.flags&512&&QL(t)}catch(y){$(t,t.return,y)}}if(t===e){q=null;break}if(a=t.sibling,a!==null){a.return=t.return,q=a;break}q=t.return}}function YS(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var a=t.sibling;if(a!==null){a.return=t.return,q=a;break}q=t.return}}function JS(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{hw(4,t)}catch(s){$(t,a,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(s){$(t,o,s)}}var i=t.return;try{QL(t)}catch(s){$(t,i,s)}break;case 5:var c=t.return;try{QL(t)}catch(s){$(t,c,s)}}}catch(s){$(t,t.return,s)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var wT=Math.ceil,Nx=Mt.ReactCurrentDispatcher,oC=Mt.ReactCurrentOwner,Ue=Mt.ReactCurrentBatchConfig,D=0,oe=null,ee=null,de=0,Pe=0,Z1=Nt(0),ae=0,Cr=null,I1=0,uw=0,iC=0,Gn=null,we=null,cC=0,yn=1/0,lt=null,Zx=!1,eb=null,Vt=null,no=!1,At=null,Wx=0,Xn=0,tb=null,vo=-1,Mo=0;function ve(){return D&6?J():vo!==-1?vo:vo=J()}function Ft(e){return e.mode&1?D&2&&de!==0?de&-de:oT.transition!==null?(Mo===0&&(Mo=cA()),Mo):(e=R,e!==0||(e=window.event,e=e===void 0?16:pA(e.type)),e):1}function Qe(e,t,a,n){if(50<Xn)throw Xn=0,tb=null,Error(C(185));jr(e,a,n),(!(D&2)||e!==oe)&&(e===oe&&(!(D&2)&&(uw|=a),ae===4&&It(e,de)),Se(e,n),a===1&&D===0&&!(t.mode&1)&&(yn=J()+500,lw&&Zt()))}function Se(e,t){var a=e.callbackNode;oH(e,t);var n=Px(e,e===oe?de:0);if(n===0)a!==null&&lS(a),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(a!=null&&lS(a),t===1)e.tag===0?rT(eI.bind(null,e)):HA(eI.bind(null,e)),eT(function(){!(D&6)&&Zt()}),a=null;else{switch(lA(n)){case 1:a=Hb;break;case 4:a=oA;break;case 16:a=Ix;break;case 536870912:a=iA;break;default:a=Ix}a=jq(a,Cq.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Cq(e,t){if(vo=-1,Mo=0,D&6)throw Error(C(327));var a=e.callbackNode;if(tn()&&e.callbackNode!==a)return null;var n=Px(e,e===oe?de:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=_x(e,n);else{t=n;var o=D;D|=2;var i=Iq();(oe!==e||de!==t)&&(lt=null,yn=J()+500,x1(e,t));do try{CT();break}catch(l){Sq(e,l)}while(!0);_b(),Nx.current=i,D=o,ee!==null?t=0:(oe=null,de=0,t=ae)}if(t!==0){if(t===2&&(o=AL(e),o!==0&&(n=o,t=ab(e,o))),t===1)throw a=Cr,x1(e,0),It(e,n),Se(e,J()),a;if(t===6)It(e,n);else{if(o=e.current.alternate,!(n&30)&&!LT(o)&&(t=_x(e,n),t===2&&(i=AL(e),i!==0&&(n=i,t=ab(e,i))),t===1))throw a=Cr,x1(e,0),It(e,n),Se(e,J()),a;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(C(345));case 2:Yt(e,we,lt);break;case 3:if(It(e,n),(n&130023424)===n&&(t=cC+500-J(),10<t)){if(Px(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){ve(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=DL(Yt.bind(null,e,we,lt),t);break}Yt(e,we,lt);break;case 4:if(It(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var c=31-$e(n);i=1<<c,c=t[c],c>o&&(o=c),n&=~i}if(n=o,n=J()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*wT(n/1960))-n,10<n){e.timeoutHandle=DL(Yt.bind(null,e,we,lt),n);break}Yt(e,we,lt);break;case 5:Yt(e,we,lt);break;default:throw Error(C(329))}}}return Se(e,J()),e.callbackNode===a?Cq.bind(null,e):null}function ab(e,t){var a=Gn;return e.current.memoizedState.isDehydrated&&(x1(e,t).flags|=256),e=_x(e,t),e!==2&&(t=we,we=a,t!==null&&nb(t)),e}function nb(e){we===null?we=e:we.push.apply(we,e)}function LT(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var o=a[n],i=o.getSnapshot;o=o.value;try{if(!Ye(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~iC,t&=~uw,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-$e(t),n=1<<a;e[a]=-1,t&=~n}}function eI(e){if(D&6)throw Error(C(327));tn();var t=Px(e,0);if(!(t&1))return Se(e,J()),null;var a=_x(e,t);if(e.tag!==0&&a===2){var n=AL(e);n!==0&&(t=n,a=ab(e,n))}if(a===1)throw a=Cr,x1(e,0),It(e,t),Se(e,J()),a;if(a===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,we,lt),Se(e,J()),null}function lC(e,t){var a=D;D|=1;try{return e(t)}finally{D=a,D===0&&(yn=J()+500,lw&&Zt())}}function P1(e){At!==null&&At.tag===0&&!(D&6)&&tn();var t=D;D|=1;var a=Ue.transition,n=R;try{if(Ue.transition=null,R=1,e)return e()}finally{R=n,Ue.transition=a,D=t,!(D&6)&&Zt()}}function sC(){Pe=Z1.current,U(Z1)}function x1(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,JH(a)),ee!==null)for(a=ee.return;a!==null;){var n=a;switch(Nb(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Hx();break;case 3:hn(),U(be),U(fe),Yb();break;case 5:Qb(n);break;case 4:hn();break;case 13:U(W);break;case 19:U(W);break;case 10:Gb(n.type._context);break;case 22:case 23:sC()}a=a.return}if(oe=e,ee=e=Dt(e.current,null),de=Pe=t,ae=0,Cr=null,iC=uw=I1=0,we=Gn=null,g1!==null){for(t=0;t<g1.length;t++)if(a=g1[t],n=a.interleaved,n!==null){a.interleaved=null;var o=n.next,i=a.pending;if(i!==null){var c=i.next;i.next=o,n.next=c}a.pending=n}g1=null}return e}function Sq(e,t){do{var a=ee;try{if(_b(),mo.current=Ux,Ox){for(var n=G.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Ox=!1}if(S1=0,re=te=G=null,Wn=!1,wr=0,oC.current=null,a===null||a.return===null){ae=1,Cr=t,ee=null;break}e:{var i=e,c=a.return,l=a,s=t;if(t=de,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var d=s,h=l,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=OS(c);if(g!==null){g.flags&=-257,US(g,c,l,i,t),g.mode&1&&ES(i,d,t),t=g,s=d;var v=t.updateQueue;if(v===null){var M=new Set;M.add(s),t.updateQueue=M}else v.add(s);break e}else{if(!(t&1)){ES(i,d,t),dC();break e}s=Error(C(426))}}else if(Z&&l.mode&1){var L=OS(c);if(L!==null){!(L.flags&65536)&&(L.flags|=256),US(L,c,l,i,t),Zb(un(s,l));break e}}i=s=un(s,l),ae!==4&&(ae=2),Gn===null?Gn=[i]:Gn.push(i),i=c;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var k=lq(i,s,t);TS(i,k);break e;case 1:l=s;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=sq(i,l,t);TS(i,x);break e}}i=i.return}while(i!==null)}Aq(a)}catch(w){t=w,ee===a&&a!==null&&(ee=a=a.return);continue}break}while(!0)}function Iq(){var e=Nx.current;return Nx.current=Ux,e===null?Ux:e}function dC(){(ae===0||ae===3||ae===2)&&(ae=4),oe===null||!(I1&268435455)&&!(uw&268435455)||It(oe,de)}function _x(e,t){var a=D;D|=2;var n=Iq();(oe!==e||de!==t)&&(lt=null,x1(e,t));do try{bT();break}catch(o){Sq(e,o)}while(!0);if(_b(),D=a,Nx.current=n,ee!==null)throw Error(C(261));return oe=null,de=0,ae}function bT(){for(;ee!==null;)Pq(ee)}function CT(){for(;ee!==null&&!$j();)Pq(ee)}function Pq(e){var t=zq(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Aq(e):ee=t,oC.current=null}function Aq(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=gT(a,t),a!==null){a.flags&=32767,ee=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ee=null;return}}else if(a=fT(a,t,Pe),a!==null){ee=a;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ae===0&&(ae=5)}function Yt(e,t,a){var n=R,o=Ue.transition;try{Ue.transition=null,R=1,ST(e,t,a,n)}finally{Ue.transition=o,R=n}return null}function ST(e,t,a,n){do tn();while(At!==null);if(D&6)throw Error(C(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(iH(e,i),e===oe&&(ee=oe=null,de=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||no||(no=!0,jq(Ix,function(){return tn(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=Ue.transition,Ue.transition=null;var c=R;R=1;var l=D;D|=4,oC.current=null,MT(e,a),Lq(a,e),_H(VL),Ax=!!TL,VL=TL=null,e.current=a,xT(a),Qj(),D=l,R=c,Ue.transition=i}else e.current=a;if(no&&(no=!1,At=e,Wx=o),i=e.pendingLanes,i===0&&(Vt=null),eH(a.stateNode),Se(e,J()),t!==null)for(n=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],n(o.value,{componentStack:o.stack,digest:o.digest});if(Zx)throw Zx=!1,e=eb,eb=null,e;return Wx&1&&e.tag!==0&&tn(),i=e.pendingLanes,i&1?e===tb?Xn++:(Xn=0,tb=e):Xn=0,Zt(),null}function tn(){if(At!==null){var e=lA(Wx),t=Ue.transition,a=R;try{if(Ue.transition=null,R=16>e?16:e,At===null)var n=!1;else{if(e=At,At=null,Wx=0,D&6)throw Error(C(331));var o=D;for(D|=4,q=e.current;q!==null;){var i=q,c=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var d=l[s];for(q=d;q!==null;){var h=q;switch(h.tag){case 0:case 11:case 15:_n(8,h,i)}var u=h.child;if(u!==null)u.return=h,q=u;else for(;q!==null;){h=q;var y=h.sibling,g=h.return;if(Mq(h),h===d){q=null;break}if(y!==null){y.return=g,q=y;break}q=g}}}var v=i.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var L=M.sibling;M.sibling=null,M=L}while(M!==null)}}q=i}}if(i.subtreeFlags&2064&&c!==null)c.return=i,q=c;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_n(9,i,i.return)}var k=i.sibling;if(k!==null){k.return=i.return,q=k;break e}q=i.return}}var p=e.current;for(q=p;q!==null;){c=q;var m=c.child;if(c.subtreeFlags&2064&&m!==null)m.return=c,q=m;else e:for(c=p;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hw(9,l)}}catch(w){$(l,l.return,w)}if(l===c){q=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,q=x;break e}q=l.return}}if(D=o,Zt(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(nw,e)}catch{}n=!0}return n}finally{R=a,Ue.transition=t}}return!1}function tI(e,t,a){t=un(a,t),t=lq(e,t,1),e=Tt(e,t,1),t=ve(),e!==null&&(jr(e,1,t),Se(e,t))}function $(e,t,a){if(e.tag===3)tI(e,e,a);else for(;t!==null;){if(t.tag===3){tI(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Vt===null||!Vt.has(n))){e=un(a,e),e=sq(t,e,1),t=Tt(t,e,1),e=ve(),t!==null&&(jr(t,1,e),Se(t,e));break}}t=t.return}}function IT(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&a,oe===e&&(de&a)===a&&(ae===4||ae===3&&(de&130023424)===de&&500>J()-cC?x1(e,0):iC|=a),Se(e,t)}function qq(e,t){t===0&&(e.mode&1?(t=Gr,Gr<<=1,!(Gr&130023424)&&(Gr=4194304)):t=1);var a=ve();e=ft(e,t),e!==null&&(jr(e,t,a),Se(e,a))}function PT(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),qq(e,a)}function AT(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(t),qq(e,a)}var zq;zq=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Le=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return Le=!1,mT(e,t,a);Le=!!(e.flags&131072)}else Le=!1,Z&&t.flags&1048576&&TA(t,Fx,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;go(e,t),e=t.pendingProps;var o=ln(t,fe.current);en(t,a),o=eC(null,t,n,e,o,a);var i=tC();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(n)?(i=!0,Tx(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Kb(t),o.updater=dw,t.stateNode=o,o._reactInternals=t,ZL(t,n,e,a),t=GL(null,t,n,!0,i,a)):(t.tag=0,Z&&i&&Ub(t),ge(null,t,o,a),t=t.child),t;case 16:n=t.elementType;e:{switch(go(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=zT(n),e=Ge(n,e),o){case 0:t=_L(null,t,n,e,a);break e;case 1:t=WS(null,t,n,e,a);break e;case 11:t=NS(null,t,n,e,a);break e;case 14:t=ZS(null,t,n,Ge(n.type,e),a);break e}throw Error(C(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ge(n,o),_L(e,t,n,o,a);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ge(n,o),WS(e,t,n,o,a);case 3:e:{if(yq(t),e===null)throw Error(C(387));n=t.pendingProps,i=t.memoizedState,o=i.element,EA(e,t),Bx(t,n,null,a);var c=t.memoizedState;if(n=c.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=un(Error(C(423)),t),t=_S(e,t,n,a,o);break e}else if(n!==o){o=un(Error(C(424)),t),t=_S(e,t,n,a,o);break e}else for(Ae=Ht(t.stateNode.containerInfo.firstChild),qe=t,Z=!0,Ke=null,a=RA(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(sn(),n===o){t=gt(e,t,a);break e}ge(e,t,n,a)}t=t.child}return t;case 5:return OA(t),e===null&&OL(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,c=o.children,FL(n,o)?c=null:i!==null&&FL(n,i)&&(t.flags|=32),uq(e,t),ge(e,t,c,a),t.child;case 6:return e===null&&OL(t),null;case 13:return pq(e,t,a);case 4:return $b(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=dn(t,null,n,a):ge(e,t,n,a),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ge(n,o),NS(e,t,n,o,a);case 7:return ge(e,t,t.pendingProps,a),t.child;case 8:return ge(e,t,t.pendingProps.children,a),t.child;case 12:return ge(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,c=o.value,B(Dx,n._currentValue),n._currentValue=c,i!==null)if(Ye(i.value,c)){if(i.children===o.children&&!be.current){t=gt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){c=i.child;for(var s=l.firstContext;s!==null;){if(s.context===n){if(i.tag===1){s=ut(-1,a&-a),s.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?s.next=s:(s.next=h.next,h.next=s),d.pending=s}}i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),UL(i.return,a,t),l.lanes|=a;break}s=s.next}}else if(i.tag===10)c=i.type===t.type?null:i.child;else if(i.tag===18){if(c=i.return,c===null)throw Error(C(341));c.lanes|=a,l=c.alternate,l!==null&&(l.lanes|=a),UL(c,a,t),c=i.sibling}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===t){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}ge(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,en(t,a),o=Ne(o),n=n(o),t.flags|=1,ge(e,t,n,a),t.child;case 14:return n=t.type,o=Ge(n,t.pendingProps),o=Ge(n.type,o),ZS(e,t,n,o,a);case 15:return dq(e,t,t.type,t.pendingProps,a);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ge(n,o),go(e,t),t.tag=1,Ce(n)?(e=!0,Tx(t)):e=!1,en(t,a),cq(t,n,o),ZL(t,n,o,a),GL(null,t,n,!0,e,a);case 19:return kq(e,t,a);case 22:return hq(e,t,a)}throw Error(C(156,t.tag))};function jq(e,t){return rA(e,t)}function qT(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,a,n){return new qT(e,t,a,n)}function hC(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zT(e){if(typeof e=="function")return hC(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qb)return 11;if(e===zb)return 14}return 2}function Dt(e,t){var a=e.alternate;return a===null?(a=Oe(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function xo(e,t,a,n,o,i){var c=2;if(n=e,typeof e=="function")hC(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case T1:return w1(a.children,o,i,t);case Ab:c=8,o|=8;break;case pL:return e=Oe(12,a,t,o|2),e.elementType=pL,e.lanes=i,e;case kL:return e=Oe(13,a,t,o),e.elementType=kL,e.lanes=i,e;case mL:return e=Oe(19,a,t,o),e.elementType=mL,e.lanes=i,e;case OP:return yw(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case BP:c=10;break e;case EP:c=9;break e;case qb:c=11;break e;case zb:c=14;break e;case bt:c=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Oe(c,a,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function w1(e,t,a,n){return e=Oe(7,e,n,t),e.lanes=a,e}function yw(e,t,a,n){return e=Oe(22,e,n,t),e.elementType=OP,e.lanes=a,e.stateNode={isHidden:!1},e}function $w(e,t,a){return e=Oe(6,e,null,t),e.lanes=a,e}function Qw(e,t,a){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function jT(e,t,a,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zw(0),this.expirationTimes=zw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zw(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function uC(e,t,a,n,o,i,c,l,s){return e=new jT(e,t,a,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kb(i),e}function HT(e,t,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H1,key:n==null?null:""+n,children:e,containerInfo:t,implementation:a}}function Hq(e){if(!e)return Bt;e=e._reactInternals;e:{if(q1(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var a=e.type;if(Ce(a))return jA(e,a,t)}return t}function Tq(e,t,a,n,o,i,c,l,s){return e=uC(a,n,!0,e,o,i,c,l,s),e.context=Hq(null),a=e.current,n=ve(),o=Ft(a),i=ut(n,o),i.callback=t??null,Tt(a,i,o),e.current.lanes=o,jr(e,o,n),Se(e,n),e}function pw(e,t,a,n){var o=t.current,i=ve(),c=Ft(o);return a=Hq(a),t.context===null?t.context=a:t.pendingContext=a,t=ut(i,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Tt(o,t,c),e!==null&&(Qe(e,o,c,i),ko(e,o,c)),c}function Gx(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function aI(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function yC(e,t){aI(e,t),(e=e.alternate)&&aI(e,t)}function TT(){return null}var Vq=typeof reportError=="function"?reportError:function(e){console.error(e)};function pC(e){this._internalRoot=e}kw.prototype.render=pC.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));pw(e,t,null,null)};kw.prototype.unmount=pC.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;P1(function(){pw(null,e,null,null)}),t[mt]=null}};function kw(e){this._internalRoot=e}kw.prototype.unstable_scheduleHydration=function(e){if(e){var t=hA();e={blockedOn:null,target:e,priority:t};for(var a=0;a<St.length&&t!==0&&t<St[a].priority;a++);St.splice(a,0,e),a===0&&yA(e)}};function kC(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mw(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nI(){}function VT(e,t,a,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var d=Gx(c);i.call(d)}}var c=Tq(t,n,e,0,null,!1,!1,"",nI);return e._reactRootContainer=c,e[mt]=c.current,fr(e.nodeType===8?e.parentNode:e),P1(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var d=Gx(s);l.call(d)}}var s=uC(e,0,!1,null,null,!1,!1,"",nI);return e._reactRootContainer=s,e[mt]=s.current,fr(e.nodeType===8?e.parentNode:e),P1(function(){pw(t,s,a,n)}),s}function fw(e,t,a,n,o){var i=a._reactRootContainer;if(i){var c=i;if(typeof o=="function"){var l=o;o=function(){var s=Gx(c);l.call(s)}}pw(t,c,e,o)}else c=VT(a,t,e,o,n);return Gx(c)}sA=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Vn(t.pendingLanes);a!==0&&(Tb(t,a|1),Se(t,J()),!(D&6)&&(yn=J()+500,Zt()))}break;case 13:P1(function(){var n=ft(e,1);if(n!==null){var o=ve();Qe(n,e,1,o)}}),yC(e,1)}};Vb=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var a=ve();Qe(t,e,134217728,a)}yC(e,134217728)}};dA=function(e){if(e.tag===13){var t=Ft(e),a=ft(e,t);if(a!==null){var n=ve();Qe(a,e,t,n)}yC(e,t)}};hA=function(){return R};uA=function(e,t){var a=R;try{return R=e,t()}finally{R=a}};SL=function(e,t,a){switch(t){case"input":if(vL(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var o=cw(n);if(!o)throw Error(C(90));NP(n),vL(n,o)}}}break;case"textarea":WP(e,a);break;case"select":t=a.value,t!=null&&$1(e,!!a.multiple,t,!1)}};YP=lC;JP=P1;var FT={usingClientEntryPoint:!1,Events:[Tr,R1,cw,$P,QP,lC]},zn={findFiberByHostInstance:f1,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DT={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=aA(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||TT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ro.isDisabled&&ro.supportsFiber)try{nw=ro.inject(DT),rt=ro}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;Te.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kC(t))throw Error(C(200));return HT(e,t,null,a)};Te.createRoot=function(e,t){if(!kC(e))throw Error(C(299));var a=!1,n="",o=Vq;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=uC(e,1,!1,null,null,a,!1,n,o),e[mt]=t.current,fr(e.nodeType===8?e.parentNode:e),new pC(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=aA(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return P1(e)};Te.hydrate=function(e,t,a){if(!mw(t))throw Error(C(200));return fw(null,e,t,!0,a)};Te.hydrateRoot=function(e,t,a){if(!kC(e))throw Error(C(405));var n=a!=null&&a.hydratedSources||null,o=!1,i="",c=Vq;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(c=a.onRecoverableError)),t=Tq(t,null,e,1,a??null,o,!1,i,c),e[mt]=t.current,fr(e),n)for(e=0;e<n.length;e++)a=n[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new kw(t)};Te.render=function(e,t,a){if(!mw(t))throw Error(C(200));return fw(null,e,t,!1,a)};Te.unmountComponentAtNode=function(e){if(!mw(e))throw Error(C(40));return e._reactRootContainer?(P1(function(){fw(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Te.unstable_batchedUpdates=lC;Te.unstable_renderSubtreeIntoContainer=function(e,t,a,n){if(!mw(a))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return fw(e,t,a,!1,n)};Te.version="18.3.1-next-f1338f8080-20240426";function Fq(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fq)}catch(e){console.error(e)}}Fq(),VP.exports=Te;var RT=VP.exports,Dq,rI=RT;Dq=rI.createRoot,rI.hydrateRoot;const mC=S.createContext({});function fC(e){const t=S.useRef(null);return t.current===null&&(t.current=e()),t.current}const gw=S.createContext(null),gC=S.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class BT extends S.Component{getSnapshotBeforeUpdate(t){const a=this.props.childRef.current;if(a&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=a.offsetHeight||0,n.width=a.offsetWidth||0,n.top=a.offsetTop,n.left=a.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ET({children:e,isPresent:t}){const a=S.useId(),n=S.useRef(null),o=S.useRef({width:0,height:0,top:0,left:0}),{nonce:i}=S.useContext(gC);return S.useInsertionEffect(()=>{const{width:c,height:l,top:s,left:d}=o.current;if(t||!n.current||!c||!l)return;n.current.dataset.motionPopId=a;const h=document.createElement("style");return i&&(h.nonce=i),document.head.appendChild(h),h.sheet&&h.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${l}px !important;
            top: ${s}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(h)}},[t]),f.jsx(BT,{isPresent:t,childRef:n,sizeRef:o,children:S.cloneElement(e,{ref:n})})}const OT=({children:e,initial:t,isPresent:a,onExitComplete:n,custom:o,presenceAffectsLayout:i,mode:c})=>{const l=fC(UT),s=S.useId(),d=S.useCallback(u=>{l.set(u,!0);for(const y of l.values())if(!y)return;n&&n()},[l,n]),h=S.useMemo(()=>({id:s,initial:t,isPresent:a,custom:o,onExitComplete:d,register:u=>(l.set(u,!1),()=>l.delete(u))}),i?[Math.random(),d]:[a,d]);return S.useMemo(()=>{l.forEach((u,y)=>l.set(y,!1))},[a]),S.useEffect(()=>{!a&&!l.size&&n&&n()},[a]),c==="popLayout"&&(e=f.jsx(ET,{isPresent:a,children:e})),f.jsx(gw.Provider,{value:h,children:e})};function UT(){return new Map}function Rq(e=!0){const t=S.useContext(gw);if(t===null)return[!0,null];const{isPresent:a,onExitComplete:n,register:o}=t,i=S.useId();S.useEffect(()=>{e&&o(i)},[e]);const c=S.useCallback(()=>e&&n&&n(i),[i,n,e]);return!a&&n?[!1,c]:[!0]}const oo=e=>e.key||"";function oI(e){const t=[];return S.Children.forEach(e,a=>{S.isValidElement(a)&&t.push(a)}),t}const vC=typeof window<"u",Bq=vC?S.useLayoutEffect:S.useEffect,Xx=({children:e,custom:t,initial:a=!0,onExitComplete:n,presenceAffectsLayout:o=!0,mode:i="sync",propagate:c=!1})=>{const[l,s]=Rq(c),d=S.useMemo(()=>oI(e),[e]),h=c&&!l?[]:d.map(oo),u=S.useRef(!0),y=S.useRef(d),g=fC(()=>new Map),[v,M]=S.useState(d),[L,k]=S.useState(d);Bq(()=>{u.current=!1,y.current=d;for(let x=0;x<L.length;x++){const w=oo(L[x]);h.includes(w)?g.delete(w):g.get(w)!==!0&&g.set(w,!1)}},[L,h.length,h.join("-")]);const p=[];if(d!==v){let x=[...d];for(let w=0;w<L.length;w++){const I=L[w],P=oo(I);h.includes(P)||(x.splice(w,0,I),p.push(I))}i==="wait"&&p.length&&(x=p),k(oI(x)),M(d);return}const{forceRender:m}=S.useContext(mC);return f.jsx(f.Fragment,{children:L.map(x=>{const w=oo(x),I=c&&!l?!1:d===L||h.includes(w),P=()=>{if(g.has(w))g.set(w,!0);else return;let b=!0;g.forEach(T=>{T||(b=!1)}),b&&(m==null||m(),k(y.current),c&&(s==null||s()),n&&n())};return f.jsx(OT,{isPresent:I,initial:!u.current||a?void 0:!1,custom:I?void 0:t,presenceAffectsLayout:o,mode:i,onExitComplete:I?void 0:P,children:x},w)})})},ze=e=>e;let rb=ze;function MC(e){let t;return()=>(t===void 0&&(t=e()),t)}const pn=(e,t,a)=>{const n=t-e;return n===0?1:(a-e)/n},yt=e=>e*1e3,pt=e=>e/1e3,NT={skipAnimations:!1,useManualTiming:!1};function ZT(e){let t=new Set,a=new Set,n=!1,o=!1;const i=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function l(d){i.has(d)&&(s.schedule(d),e()),d(c)}const s={schedule:(d,h=!1,u=!1)=>{const y=u&&n?t:a;return h&&i.add(d),y.has(d)||y.add(d),d},cancel:d=>{a.delete(d),i.delete(d)},process:d=>{if(c=d,n){o=!0;return}n=!0,[t,a]=[a,t],t.forEach(l),t.clear(),n=!1,o&&(o=!1,s.process(d))}};return s}const io=["read","resolveKeyframes","update","preRender","render","postRender"],WT=40;function Eq(e,t){let a=!1,n=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>a=!0,c=io.reduce((M,L)=>(M[L]=ZT(i),M),{}),{read:l,resolveKeyframes:s,update:d,preRender:h,render:u,postRender:y}=c,g=()=>{const M=performance.now();a=!1,o.delta=n?1e3/60:Math.max(Math.min(M-o.timestamp,WT),1),o.timestamp=M,o.isProcessing=!0,l.process(o),s.process(o),d.process(o),h.process(o),u.process(o),y.process(o),o.isProcessing=!1,a&&t&&(n=!1,e(g))},v=()=>{a=!0,n=!0,o.isProcessing||e(g)};return{schedule:io.reduce((M,L)=>{const k=c[L];return M[L]=(p,m=!1,x=!1)=>(a||v(),k.schedule(p,m,x)),M},{}),cancel:M=>{for(let L=0;L<io.length;L++)c[io[L]].cancel(M)},state:o,steps:c}}const{schedule:N,cancel:Et,state:se,steps:Yw}=Eq(typeof requestAnimationFrame<"u"?requestAnimationFrame:ze,!0),Oq=S.createContext({strict:!1}),iI={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},kn={};for(const e in iI)kn[e]={isEnabled:t=>iI[e].some(a=>!!t[a])};function _T(e){for(const t in e)kn[t]={...kn[t],...e[t]}}const GT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kx(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||GT.has(e)}let Uq=e=>!Kx(e);function XT(e){e&&(Uq=t=>t.startsWith("on")?!Kx(t):e(t))}try{XT(require("@emotion/is-prop-valid").default)}catch{}function KT(e,t,a){const n={};for(const o in e)o==="values"&&typeof e.values=="object"||(Uq(o)||a===!0&&Kx(o)||!t&&!Kx(o)||e.draggable&&o.startsWith("onDrag"))&&(n[o]=e[o]);return n}function $T(e){if(typeof Proxy>"u")return e;const t=new Map,a=(...n)=>e(...n);return new Proxy(a,{get:(n,o)=>o==="create"?e:(t.has(o)||t.set(o,e(o)),t.get(o))})}const vw=S.createContext({});function Sr(e){return typeof e=="string"||Array.isArray(e)}function Mw(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const xC=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wC=["initial",...xC];function xw(e){return Mw(e.animate)||wC.some(t=>Sr(e[t]))}function Nq(e){return!!(xw(e)||e.variants)}function QT(e,t){if(xw(e)){const{initial:a,animate:n}=e;return{initial:a===!1||Sr(a)?a:void 0,animate:Sr(n)?n:void 0}}return e.inherit!==!1?t:{}}function YT(e){const{initial:t,animate:a}=QT(e,S.useContext(vw));return S.useMemo(()=>({initial:t,animate:a}),[cI(t),cI(a)])}function cI(e){return Array.isArray(e)?e.join(" "):e}const JT=Symbol.for("motionComponentSymbol");function W1(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function eV(e,t,a){return S.useCallback(n=>{n&&e.onMount&&e.onMount(n),t&&(n?t.mount(n):t.unmount()),a&&(typeof a=="function"?a(n):W1(a)&&(a.current=n))},[t])}const LC=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),tV="framerAppearId",Zq="data-"+LC(tV),{schedule:bC,cancel:qB}=Eq(queueMicrotask,!1),Wq=S.createContext({});function aV(e,t,a,n,o){var i,c;const{visualElement:l}=S.useContext(vw),s=S.useContext(Oq),d=S.useContext(gw),h=S.useContext(gC).reducedMotion,u=S.useRef(null);n=n||s.renderer,!u.current&&n&&(u.current=n(e,{visualState:t,parent:l,props:a,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:h}));const y=u.current,g=S.useContext(Wq);y&&!y.projection&&o&&(y.type==="html"||y.type==="svg")&&nV(u.current,a,o,g);const v=S.useRef(!1);S.useInsertionEffect(()=>{y&&v.current&&y.update(a,d)});const M=a[Zq],L=S.useRef(!!M&&!(!((i=window.MotionHandoffIsComplete)===null||i===void 0)&&i.call(window,M))&&((c=window.MotionHasOptimisedAnimation)===null||c===void 0?void 0:c.call(window,M)));return Bq(()=>{y&&(v.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),bC.render(y.render),L.current&&y.animationState&&y.animationState.animateChanges())}),S.useEffect(()=>{y&&(!L.current&&y.animationState&&y.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)===null||k===void 0||k.call(window,M)}),L.current=!1))}),y}function nV(e,t,a,n){const{layoutId:o,layout:i,drag:c,dragConstraints:l,layoutScroll:s,layoutRoot:d}=t;e.projection=new a(e.latestValues,t["data-framer-portal-id"]?void 0:_q(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:!!c||l&&W1(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:n,layoutScroll:s,layoutRoot:d})}function _q(e){if(e)return e.options.allowProjection!==!1?e.projection:_q(e.parent)}function rV({preloadedFeatures:e,createVisualElement:t,useRender:a,useVisualState:n,Component:o}){var i,c;e&&_T(e);function l(d,h){let u;const y={...S.useContext(gC),...d,layoutId:oV(d)},{isStatic:g}=y,v=YT(d),M=n(d,g);if(!g&&vC){iV();const L=cV(y);u=L.MeasureLayout,v.visualElement=aV(o,M,y,t,L.ProjectionNode)}return f.jsxs(vw.Provider,{value:v,children:[u&&v.visualElement?f.jsx(u,{visualElement:v.visualElement,...y}):null,a(o,d,eV(M,v.visualElement,h),M,g,v.visualElement)]})}l.displayName=`motion.${typeof o=="string"?o:`create(${(c=(i=o.displayName)!==null&&i!==void 0?i:o.name)!==null&&c!==void 0?c:""})`}`;const s=S.forwardRef(l);return s[JT]=o,s}function oV({layoutId:e}){const t=S.useContext(mC).id;return t&&e!==void 0?t+"-"+e:e}function iV(e,t){S.useContext(Oq).strict}function cV(e){const{drag:t,layout:a}=kn;if(!t&&!a)return{};const n={...t,...a};return{MeasureLayout:t!=null&&t.isEnabled(e)||a!=null&&a.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}const lV=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function CC(e){return typeof e!="string"||e.includes("-")?!1:!!(lV.indexOf(e)>-1||/[A-Z]/u.test(e))}function lI(e){const t=[{},{}];return e==null||e.values.forEach((a,n)=>{t[0][n]=a.get(),t[1][n]=a.getVelocity()}),t}function SC(e,t,a,n){if(typeof t=="function"){const[o,i]=lI(n);t=t(a!==void 0?a:e.custom,o,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[o,i]=lI(n);t=t(a!==void 0?a:e.custom,o,i)}return t}const ob=e=>Array.isArray(e),sV=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),dV=e=>ob(e)?e[e.length-1]||0:e,me=e=>!!(e&&e.getVelocity);function wo(e){const t=me(e)?e.get():e;return sV(t)?t.toValue():t}function hV({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:a},n,o,i){const c={latestValues:uV(n,o,i,e),renderState:t()};return a&&(c.onMount=l=>a({props:n,current:l,...c}),c.onUpdate=l=>a(l)),c}const Gq=e=>(t,a)=>{const n=S.useContext(vw),o=S.useContext(gw),i=()=>hV(e,t,n,o);return a?i():fC(i)};function uV(e,t,a,n){const o={},i=n(e,{});for(const y in i)o[y]=wo(i[y]);let{initial:c,animate:l}=e;const s=xw(e),d=Nq(e);t&&d&&!s&&e.inherit!==!1&&(c===void 0&&(c=t.initial),l===void 0&&(l=t.animate));let h=a?a.initial===!1:!1;h=h||c===!1;const u=h?l:c;if(u&&typeof u!="boolean"&&!Mw(u)){const y=Array.isArray(u)?u:[u];for(let g=0;g<y.length;g++){const v=SC(e,y[g]);if(v){const{transitionEnd:M,transition:L,...k}=v;for(const p in k){let m=k[p];if(Array.isArray(m)){const x=h?m.length-1:0;m=m[x]}m!==null&&(o[p]=m)}for(const p in M)o[p]=M[p]}}}return o}const xn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],z1=new Set(xn),Xq=e=>t=>typeof t=="string"&&t.startsWith(e),Kq=Xq("--"),yV=Xq("var(--"),IC=e=>yV(e)?pV.test(e.split("/*")[0].trim()):!1,pV=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$q=(e,t)=>t&&typeof e=="number"?t.transform(e):e,vt=(e,t,a)=>a>t?t:a<e?e:a,wn={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ir={...wn,transform:e=>vt(0,1,e)},co={...wn,default:1},Fr=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Lt=Fr("deg"),it=Fr("%"),z=Fr("px"),kV=Fr("vh"),mV=Fr("vw"),sI={...it,parse:e=>it.parse(e)/100,transform:e=>it.transform(e*100)},fV={borderWidth:z,borderTopWidth:z,borderRightWidth:z,borderBottomWidth:z,borderLeftWidth:z,borderRadius:z,radius:z,borderTopLeftRadius:z,borderTopRightRadius:z,borderBottomRightRadius:z,borderBottomLeftRadius:z,width:z,maxWidth:z,height:z,maxHeight:z,top:z,right:z,bottom:z,left:z,padding:z,paddingTop:z,paddingRight:z,paddingBottom:z,paddingLeft:z,margin:z,marginTop:z,marginRight:z,marginBottom:z,marginLeft:z,backgroundPositionX:z,backgroundPositionY:z},gV={rotate:Lt,rotateX:Lt,rotateY:Lt,rotateZ:Lt,scale:co,scaleX:co,scaleY:co,scaleZ:co,skew:Lt,skewX:Lt,skewY:Lt,distance:z,translateX:z,translateY:z,translateZ:z,x:z,y:z,z,perspective:z,transformPerspective:z,opacity:Ir,originX:sI,originY:sI,originZ:z},dI={...wn,transform:Math.round},PC={...fV,...gV,zIndex:dI,size:z,fillOpacity:Ir,strokeOpacity:Ir,numOctaves:dI},vV={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},MV=xn.length;function xV(e,t,a){let n="",o=!0;for(let i=0;i<MV;i++){const c=xn[i],l=e[c];if(l===void 0)continue;let s=!0;if(typeof l=="number"?s=l===(c.startsWith("scale")?1:0):s=parseFloat(l)===0,!s||a){const d=$q(l,PC[c]);if(!s){o=!1;const h=vV[c]||c;n+=`${h}(${d}) `}a&&(t[c]=d)}}return n=n.trim(),a?n=a(t,o?"":n):o&&(n="none"),n}function AC(e,t,a){const{style:n,vars:o,transformOrigin:i}=e;let c=!1,l=!1;for(const s in t){const d=t[s];if(z1.has(s)){c=!0;continue}else if(Kq(s)){o[s]=d;continue}else{const h=$q(d,PC[s]);s.startsWith("origin")?(l=!0,i[s]=h):n[s]=h}}if(t.transform||(c||a?n.transform=xV(t,e.transform,a):n.transform&&(n.transform="none")),l){const{originX:s="50%",originY:d="50%",originZ:h=0}=i;n.transformOrigin=`${s} ${d} ${h}`}}const wV={offset:"stroke-dashoffset",array:"stroke-dasharray"},LV={offset:"strokeDashoffset",array:"strokeDasharray"};function bV(e,t,a=1,n=0,o=!0){e.pathLength=1;const i=o?wV:LV;e[i.offset]=z.transform(-n);const c=z.transform(t),l=z.transform(a);e[i.array]=`${c} ${l}`}function hI(e,t,a){return typeof e=="string"?e:z.transform(t+a*e)}function CV(e,t,a){const n=hI(t,e.x,e.width),o=hI(a,e.y,e.height);return`${n} ${o}`}function qC(e,{attrX:t,attrY:a,attrScale:n,originX:o,originY:i,pathLength:c,pathSpacing:l=1,pathOffset:s=0,...d},h,u){if(AC(e,d,u),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:y,style:g,dimensions:v}=e;y.transform&&(v&&(g.transform=y.transform),delete y.transform),v&&(o!==void 0||i!==void 0||g.transform)&&(g.transformOrigin=CV(v,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(y.x=t),a!==void 0&&(y.y=a),n!==void 0&&(y.scale=n),c!==void 0&&bV(y,c,l,s,!1)}const zC=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Qq=()=>({...zC(),attrs:{}}),jC=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Yq(e,{style:t,vars:a},n,o){Object.assign(e.style,t,o&&o.getProjectionStyles(n));for(const i in a)e.style.setProperty(i,a[i])}const Jq=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ez(e,t,a,n){Yq(e,t,void 0,n);for(const o in t.attrs)e.setAttribute(Jq.has(o)?o:LC(o),t.attrs[o])}const $x={};function SV(e){Object.assign($x,e)}function tz(e,{layout:t,layoutId:a}){return z1.has(e)||e.startsWith("origin")||(t||a!==void 0)&&(!!$x[e]||e==="opacity")}function HC(e,t,a){var n;const{style:o}=e,i={};for(const c in o)(me(o[c])||t.style&&me(t.style[c])||tz(c,e)||((n=a==null?void 0:a.getValue(c))===null||n===void 0?void 0:n.liveStyle)!==void 0)&&(i[c]=o[c]);return i}function az(e,t,a){const n=HC(e,t,a);for(const o in e)if(me(e[o])||me(t[o])){const i=xn.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;n[i]=e[o]}return n}function IV(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const uI=["x","y","width","height","cx","cy","r"],PV={useVisualState:Gq({scrapeMotionValuesFromProps:az,createRenderState:Qq,onUpdate:({props:e,prevProps:t,current:a,renderState:n,latestValues:o})=>{if(!a)return;let i=!!e.drag;if(!i){for(const l in o)if(z1.has(l)){i=!0;break}}if(!i)return;let c=!t;if(t)for(let l=0;l<uI.length;l++){const s=uI[l];e[s]!==t[s]&&(c=!0)}c&&N.read(()=>{IV(a,n),N.render(()=>{qC(n,o,jC(a.tagName),e.transformTemplate),ez(a,n)})})}})},AV={useVisualState:Gq({scrapeMotionValuesFromProps:HC,createRenderState:zC})};function nz(e,t,a){for(const n in t)!me(t[n])&&!tz(n,a)&&(e[n]=t[n])}function qV({transformTemplate:e},t){return S.useMemo(()=>{const a=zC();return AC(a,t,e),Object.assign({},a.vars,a.style)},[t])}function zV(e,t){const a=e.style||{},n={};return nz(n,a,e),Object.assign(n,qV(e,t)),n}function jV(e,t){const a={},n=zV(e,t);return e.drag&&e.dragListener!==!1&&(a.draggable=!1,n.userSelect=n.WebkitUserSelect=n.WebkitTouchCallout="none",n.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(a.tabIndex=0),a.style=n,a}function HV(e,t,a,n){const o=S.useMemo(()=>{const i=Qq();return qC(i,t,jC(n),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};nz(i,e.style,e),o.style={...i,...o.style}}return o}function TV(e=!1){return(t,a,n,{latestValues:o},i)=>{const c=(CC(t)?HV:jV)(a,o,i,t),l=KT(a,typeof t=="string",e),s=t!==S.Fragment?{...l,...c,ref:n}:{},{children:d}=a,h=S.useMemo(()=>me(d)?d.get():d,[d]);return S.createElement(t,{...s,children:h})}}function VV(e,t){return function(a,{forwardMotionProps:n}={forwardMotionProps:!1}){const o={...CC(a)?PV:AV,preloadedFeatures:e,useRender:TV(n),createVisualElement:t,Component:a};return rV(o)}}function rz(e,t){if(!Array.isArray(t))return!1;const a=t.length;if(a!==e.length)return!1;for(let n=0;n<a;n++)if(t[n]!==e[n])return!1;return!0}function ww(e,t,a){const n=e.getProps();return SC(n,t,a!==void 0?a:n.custom,e)}const FV=MC(()=>window.ScrollTimeline!==void 0);class DV{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,a){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=a}attachTimeline(t,a){const n=this.animations.map(o=>{if(FV()&&o.attachTimeline)return o.attachTimeline(t);if(typeof a=="function")return a(o)});return()=>{n.forEach((o,i)=>{o&&o(),this.animations[i].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let a=0;a<this.animations.length;a++)t=Math.max(t,this.animations[a].duration);return t}runAll(t){this.animations.forEach(a=>a[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class RV extends DV{then(t,a){return Promise.all(this.animations).then(t).catch(a)}}function TC(e,t){return e?e[t]||e.default||e:void 0}const ib=2e4;function oz(e){let t=0;const a=50;let n=e.next(t);for(;!n.done&&t<ib;)t+=a,n=e.next(t);return t>=ib?1/0:t}function VC(e){return typeof e=="function"}function yI(e,t){e.timeline=t,e.onfinish=null}const FC=e=>Array.isArray(e)&&typeof e[0]=="number",BV={linearEasing:void 0};function EV(e,t){const a=MC(e);return()=>{var n;return(n=BV[t])!==null&&n!==void 0?n:a()}}const Qx=EV(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),iz=(e,t,a=10)=>{let n="";const o=Math.max(Math.round(t/a),2);for(let i=0;i<o;i++)n+=e(pn(0,o-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function cz(e){return!!(typeof e=="function"&&Qx()||!e||typeof e=="string"&&(e in cb||Qx())||FC(e)||Array.isArray(e)&&e.every(cz))}const Dn=([e,t,a,n])=>`cubic-bezier(${e}, ${t}, ${a}, ${n})`,cb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Dn([0,.65,.55,1]),circOut:Dn([.55,0,1,.45]),backIn:Dn([.31,.01,.66,-.59]),backOut:Dn([.33,1.53,.69,.99])};function lz(e,t){if(e)return typeof e=="function"&&Qx()?iz(e,t):FC(e)?Dn(e):Array.isArray(e)?e.map(a=>lz(a,t)||cb.easeOut):cb[e]}const _e={x:!1,y:!1};function sz(){return _e.x||_e.y}function OV(e,t,a){var n;if(e instanceof Element)return[e];if(typeof e=="string"){let o=document;const i=(n=void 0)!==null&&n!==void 0?n:o.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function dz(e,t){const a=OV(e),n=new AbortController,o={passive:!0,...t,signal:n.signal};return[a,o,()=>n.abort()]}function pI(e){return t=>{t.pointerType==="touch"||sz()||e(t)}}function UV(e,t,a={}){const[n,o,i]=dz(e,a),c=pI(l=>{const{target:s}=l,d=t(l);if(typeof d!="function"||!s)return;const h=pI(u=>{d(u),s.removeEventListener("pointerleave",h)});s.addEventListener("pointerleave",h,o)});return n.forEach(l=>{l.addEventListener("pointerenter",c,o)}),i}const hz=(e,t)=>t?e===t?!0:hz(e,t.parentElement):!1,DC=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,NV=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function ZV(e){return NV.has(e.tagName)||e.tabIndex!==-1}const Rn=new WeakSet;function kI(e){return t=>{t.key==="Enter"&&e(t)}}function Jw(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const WV=(e,t)=>{const a=e.currentTarget;if(!a)return;const n=kI(()=>{if(Rn.has(a))return;Jw(a,"down");const o=kI(()=>{Jw(a,"up")}),i=()=>Jw(a,"cancel");a.addEventListener("keyup",o,t),a.addEventListener("blur",i,t)});a.addEventListener("keydown",n,t),a.addEventListener("blur",()=>a.removeEventListener("keydown",n),t)};function mI(e){return DC(e)&&!sz()}function _V(e,t,a={}){const[n,o,i]=dz(e,a),c=l=>{const s=l.currentTarget;if(!mI(l)||Rn.has(s))return;Rn.add(s);const d=t(l),h=(g,v)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",y),!(!mI(g)||!Rn.has(s))&&(Rn.delete(s),typeof d=="function"&&d(g,{success:v}))},u=g=>{h(g,a.useGlobalTarget||hz(s,g.target))},y=g=>{h(g,!1)};window.addEventListener("pointerup",u,o),window.addEventListener("pointercancel",y,o)};return n.forEach(l=>{!ZV(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(a.useGlobalTarget?window:l).addEventListener("pointerdown",c,o),l.addEventListener("focus",s=>WV(s,o),o)}),i}function GV(e){return e==="x"||e==="y"?_e[e]?null:(_e[e]=!0,()=>{_e[e]=!1}):_e.x||_e.y?null:(_e.x=_e.y=!0,()=>{_e.x=_e.y=!1})}const uz=new Set(["width","height","top","left","right","bottom",...xn]);let Lo;function XV(){Lo=void 0}const ct={now:()=>(Lo===void 0&&ct.set(se.isProcessing||NT.useManualTiming?se.timestamp:performance.now()),Lo),set:e=>{Lo=e,queueMicrotask(XV)}};function RC(e,t){e.indexOf(t)===-1&&e.push(t)}function BC(e,t){const a=e.indexOf(t);a>-1&&e.splice(a,1)}class EC{constructor(){this.subscriptions=[]}add(t){return RC(this.subscriptions,t),()=>BC(this.subscriptions,t)}notify(t,a,n){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,a,n);else for(let i=0;i<o;i++){const c=this.subscriptions[i];c&&c(t,a,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function yz(e,t){return t?e*(1e3/t):0}const fI=30,KV=e=>!isNaN(parseFloat(e));class $V{constructor(t,a={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(n,o=!0)=>{const i=ct.now();this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(n),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=a.owner}setCurrent(t){this.current=t,this.updatedAt=ct.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=KV(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,a){this.events[t]||(this.events[t]=new EC);const n=this.events[t].add(a);return t==="change"?()=>{n(),N.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,a){this.passiveEffect=t,this.stopPassiveEffect=a}set(t,a=!0){!a||!this.passiveEffect?this.updateAndNotify(t,a):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,a,n){this.set(a),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,a=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>fI)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,fI);return yz(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(t){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=t(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Pr(e,t){return new $V(e,t)}function QV(e,t,a){e.hasValue(t)?e.getValue(t).set(a):e.addValue(t,Pr(a))}function YV(e,t){const a=ww(e,t);let{transitionEnd:n={},transition:o={},...i}=a||{};i={...i,...n};for(const c in i){const l=dV(i[c]);QV(e,c,l)}}function JV(e){return!!(me(e)&&e.add)}function lb(e,t){const a=e.getValue("willChange");if(JV(a))return a.add(t)}function pz(e){return e.props[Zq]}const kz=(e,t,a)=>(((1-3*a+3*t)*e+(3*a-6*t))*e+3*t)*e,eF=1e-7,tF=12;function aF(e,t,a,n,o){let i,c,l=0;do c=t+(a-t)/2,i=kz(c,n,o)-e,i>0?a=c:t=c;while(Math.abs(i)>eF&&++l<tF);return c}function Dr(e,t,a,n){if(e===t&&a===n)return ze;const o=i=>aF(i,0,1,e,a);return i=>i===0||i===1?i:kz(o(i),t,n)}const mz=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fz=e=>t=>1-e(1-t),gz=Dr(.33,1.53,.69,.99),OC=fz(gz),vz=mz(OC),Mz=e=>(e*=2)<1?.5*OC(e):.5*(2-Math.pow(2,-10*(e-1))),UC=e=>1-Math.sin(Math.acos(e)),xz=fz(UC),wz=mz(UC),Lz=e=>/^0[^.\s]+$/u.test(e);function nF(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Lz(e):!0}const Kn=e=>Math.round(e*1e5)/1e5,NC=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rF(e){return e==null}const oF=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ZC=(e,t)=>a=>!!(typeof a=="string"&&oF.test(a)&&a.startsWith(e)||t&&!rF(a)&&Object.prototype.hasOwnProperty.call(a,t)),bz=(e,t,a)=>n=>{if(typeof n!="string")return n;const[o,i,c,l]=n.match(NC);return{[e]:parseFloat(o),[t]:parseFloat(i),[a]:parseFloat(c),alpha:l!==void 0?parseFloat(l):1}},iF=e=>vt(0,255,e),eL={...wn,transform:e=>Math.round(iF(e))},M1={test:ZC("rgb","red"),parse:bz("red","green","blue"),transform:({red:e,green:t,blue:a,alpha:n=1})=>"rgba("+eL.transform(e)+", "+eL.transform(t)+", "+eL.transform(a)+", "+Kn(Ir.transform(n))+")"};function cF(e){let t="",a="",n="",o="";return e.length>5?(t=e.substring(1,3),a=e.substring(3,5),n=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),a=e.substring(2,3),n=e.substring(3,4),o=e.substring(4,5),t+=t,a+=a,n+=n,o+=o),{red:parseInt(t,16),green:parseInt(a,16),blue:parseInt(n,16),alpha:o?parseInt(o,16)/255:1}}const sb={test:ZC("#"),parse:cF,transform:M1.transform},_1={test:ZC("hsl","hue"),parse:bz("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:a,alpha:n=1})=>"hsla("+Math.round(e)+", "+it.transform(Kn(t))+", "+it.transform(Kn(a))+", "+Kn(Ir.transform(n))+")"},pe={test:e=>M1.test(e)||sb.test(e)||_1.test(e),parse:e=>M1.test(e)?M1.parse(e):_1.test(e)?_1.parse(e):sb.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?M1.transform(e):_1.transform(e)},lF=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sF(e){var t,a;return isNaN(e)&&typeof e=="string"&&(((t=e.match(NC))===null||t===void 0?void 0:t.length)||0)+(((a=e.match(lF))===null||a===void 0?void 0:a.length)||0)>0}const Cz="number",Sz="color",dF="var",hF="var(",gI="${}",uF=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ar(e){const t=e.toString(),a=[],n={color:[],number:[],var:[]},o=[];let i=0;const c=t.replace(uF,l=>(pe.test(l)?(n.color.push(i),o.push(Sz),a.push(pe.parse(l))):l.startsWith(hF)?(n.var.push(i),o.push(dF),a.push(l)):(n.number.push(i),o.push(Cz),a.push(parseFloat(l))),++i,gI)).split(gI);return{values:a,split:c,indexes:n,types:o}}function Iz(e){return Ar(e).values}function Pz(e){const{split:t,types:a}=Ar(e),n=t.length;return o=>{let i="";for(let c=0;c<n;c++)if(i+=t[c],o[c]!==void 0){const l=a[c];l===Cz?i+=Kn(o[c]):l===Sz?i+=pe.transform(o[c]):i+=o[c]}return i}}const yF=e=>typeof e=="number"?0:e;function pF(e){const t=Iz(e);return Pz(e)(t.map(yF))}const Ot={test:sF,parse:Iz,createTransformer:Pz,getAnimatableNone:pF},kF=new Set(["brightness","contrast","saturate","opacity"]);function mF(e){const[t,a]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[n]=a.match(NC)||[];if(!n)return e;const o=a.replace(n,"");let i=kF.has(t)?1:0;return n!==a&&(i*=100),t+"("+i+o+")"}const fF=/\b([a-z-]*)\(.*?\)/gu,db={...Ot,getAnimatableNone:e=>{const t=e.match(fF);return t?t.map(mF).join(" "):e}},gF={...PC,color:pe,backgroundColor:pe,outlineColor:pe,fill:pe,stroke:pe,borderColor:pe,borderTopColor:pe,borderRightColor:pe,borderBottomColor:pe,borderLeftColor:pe,filter:db,WebkitFilter:db},WC=e=>gF[e];function Az(e,t){let a=WC(e);return a!==db&&(a=Ot),a.getAnimatableNone?a.getAnimatableNone(t):void 0}const vF=new Set(["auto","none","0"]);function MF(e,t,a){let n=0,o;for(;n<e.length&&!o;){const i=e[n];typeof i=="string"&&!vF.has(i)&&Ar(i).values.length&&(o=e[n]),n++}if(o&&a)for(const i of t)e[i]=Az(a,o)}const vI=e=>e===wn||e===z,MI=(e,t)=>parseFloat(e.split(", ")[t]),xI=(e,t)=>(a,{transform:n})=>{if(n==="none"||!n)return 0;const o=n.match(/^matrix3d\((.+)\)$/u);if(o)return MI(o[1],t);{const i=n.match(/^matrix\((.+)\)$/u);return i?MI(i[1],e):0}},xF=new Set(["x","y","z"]),wF=xn.filter(e=>!xF.has(e));function LF(e){const t=[];return wF.forEach(a=>{const n=e.getValue(a);n!==void 0&&(t.push([a,n.get()]),n.set(a.startsWith("scale")?1:0))}),t}const mn={width:({x:e},{paddingLeft:t="0",paddingRight:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),height:({y:e},{paddingTop:t="0",paddingBottom:a="0"})=>e.max-e.min-parseFloat(t)-parseFloat(a),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:xI(4,13),y:xI(5,14)};mn.translateX=mn.x;mn.translateY=mn.y;const L1=new Set;let hb=!1,ub=!1;function qz(){if(ub){const e=Array.from(L1).filter(n=>n.needsMeasurement),t=new Set(e.map(n=>n.element)),a=new Map;t.forEach(n=>{const o=LF(n);o.length&&(a.set(n,o),n.render())}),e.forEach(n=>n.measureInitialState()),t.forEach(n=>{n.render();const o=a.get(n);o&&o.forEach(([i,c])=>{var l;(l=n.getValue(i))===null||l===void 0||l.set(c)})}),e.forEach(n=>n.measureEndState()),e.forEach(n=>{n.suspendedScrollY!==void 0&&window.scrollTo(0,n.suspendedScrollY)})}ub=!1,hb=!1,L1.forEach(e=>e.complete()),L1.clear()}function zz(){L1.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ub=!0)})}function bF(){zz(),qz()}class _C{constructor(t,a,n,o,i,c=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=a,this.name=n,this.motionValue=o,this.element=i,this.isAsync=c}scheduleResolve(){this.isScheduled=!0,this.isAsync?(L1.add(this),hb||(hb=!0,N.read(zz),N.resolveKeyframes(qz))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:a,element:n,motionValue:o}=this;for(let i=0;i<t.length;i++)if(t[i]===null)if(i===0){const c=o==null?void 0:o.get(),l=t[t.length-1];if(c!==void 0)t[0]=c;else if(n&&a){const s=n.readValue(a,l);s!=null&&(t[0]=s)}t[0]===void 0&&(t[0]=l),o&&c===void 0&&o.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),L1.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,L1.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const jz=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),CF=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function SF(e){const t=CF.exec(e);if(!t)return[,];const[,a,n,o]=t;return[`--${a??n}`,o]}function Hz(e,t,a=1){const[n,o]=SF(e);if(!n)return;const i=window.getComputedStyle(t).getPropertyValue(n);if(i){const c=i.trim();return jz(c)?parseFloat(c):c}return IC(o)?Hz(o,t,a+1):o}const Tz=e=>t=>t.test(e),IF={test:e=>e==="auto",parse:e=>e},Vz=[wn,z,it,Lt,mV,kV,IF],wI=e=>Vz.find(Tz(e));class Fz extends _C{constructor(t,a,n,o,i){super(t,a,n,o,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:a,name:n}=this;if(!a||!a.current)return;super.readKeyframes();for(let s=0;s<t.length;s++){let d=t[s];if(typeof d=="string"&&(d=d.trim(),IC(d))){const h=Hz(d,a.current);h!==void 0&&(t[s]=h),s===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!uz.has(n)||t.length!==2)return;const[o,i]=t,c=wI(o),l=wI(i);if(c!==l)if(vI(c)&&vI(l))for(let s=0;s<t.length;s++){const d=t[s];typeof d=="string"&&(t[s]=parseFloat(d))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:a}=this,n=[];for(let o=0;o<t.length;o++)nF(t[o])&&n.push(o);n.length&&MF(t,n,a)}measureInitialState(){const{element:t,unresolvedKeyframes:a,name:n}=this;if(!t||!t.current)return;n==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=mn[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&t.getValue(n,o).jump(o,!1)}measureEndState(){var t;const{element:a,name:n,unresolvedKeyframes:o}=this;if(!a||!a.current)return;const i=a.getValue(n);i&&i.jump(this.measuredOrigin,!1);const c=o.length-1,l=o[c];o[c]=mn[n](a.measureViewportBox(),window.getComputedStyle(a.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([s,d])=>{a.getValue(s).set(d)}),this.resolveNoneKeyframes()}}const LI=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ot.test(e)||e==="0")&&!e.startsWith("url("));function PF(e){const t=e[0];if(e.length===1)return!0;for(let a=0;a<e.length;a++)if(e[a]!==t)return!0}function AF(e,t,a,n){const o=e[0];if(o===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],c=LI(o,t),l=LI(i,t);return!c||!l?!1:PF(e)||(a==="spring"||VC(a))&&n}const qF=e=>e!==null;function Lw(e,{repeat:t,repeatType:a="loop"},n){const o=e.filter(qF),i=t&&a!=="loop"&&t%2===1?0:o.length-1;return!i||n===void 0?o[i]:n}const zF=40;class Dz{constructor({autoplay:t=!0,delay:a=0,type:n="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:c="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ct.now(),this.options={autoplay:t,delay:a,type:n,repeat:o,repeatDelay:i,repeatType:c,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>zF?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&bF(),this._resolved}onKeyframesResolved(t,a){this.resolvedAt=ct.now(),this.hasAttemptedResolve=!0;const{name:n,type:o,velocity:i,delay:c,onComplete:l,onUpdate:s,isGenerator:d}=this.options;if(!d&&!AF(t,n,o,i))if(c)this.options.duration=0;else{s&&s(Lw(t,this.options,a)),l&&l(),this.resolveFinishedPromise();return}const h=this.initPlayback(t,a);h!==!1&&(this._resolved={keyframes:t,finalKeyframe:a,...h},this.onPostResolved())}onPostResolved(){}then(t,a){return this.currentFinishedPromise.then(t,a)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const _=(e,t,a)=>e+(t-e)*a;function tL(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+(t-e)*6*a:a<1/2?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function jF({hue:e,saturation:t,lightness:a,alpha:n}){e/=360,t/=100,a/=100;let o=0,i=0,c=0;if(!t)o=i=c=a;else{const l=a<.5?a*(1+t):a+t-a*t,s=2*a-l;o=tL(s,l,e+1/3),i=tL(s,l,e),c=tL(s,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(c*255),alpha:n}}function Yx(e,t){return a=>a>0?t:e}const aL=(e,t,a)=>{const n=e*e,o=a*(t*t-n)+n;return o<0?0:Math.sqrt(o)},HF=[sb,M1,_1],TF=e=>HF.find(t=>t.test(e));function bI(e){const t=TF(e);if(!t)return!1;let a=t.parse(e);return t===_1&&(a=jF(a)),a}const CI=(e,t)=>{const a=bI(e),n=bI(t);if(!a||!n)return Yx(e,t);const o={...a};return i=>(o.red=aL(a.red,n.red,i),o.green=aL(a.green,n.green,i),o.blue=aL(a.blue,n.blue,i),o.alpha=_(a.alpha,n.alpha,i),M1.transform(o))},VF=(e,t)=>a=>t(e(a)),Rr=(...e)=>e.reduce(VF),yb=new Set(["none","hidden"]);function FF(e,t){return yb.has(e)?a=>a<=0?e:t:a=>a>=1?t:e}function DF(e,t){return a=>_(e,t,a)}function GC(e){return typeof e=="number"?DF:typeof e=="string"?IC(e)?Yx:pe.test(e)?CI:EF:Array.isArray(e)?Rz:typeof e=="object"?pe.test(e)?CI:RF:Yx}function Rz(e,t){const a=[...e],n=a.length,o=e.map((i,c)=>GC(i)(i,t[c]));return i=>{for(let c=0;c<n;c++)a[c]=o[c](i);return a}}function RF(e,t){const a={...e,...t},n={};for(const o in a)e[o]!==void 0&&t[o]!==void 0&&(n[o]=GC(e[o])(e[o],t[o]));return o=>{for(const i in n)a[i]=n[i](o);return a}}function BF(e,t){var a;const n=[],o={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const c=t.types[i],l=e.indexes[c][o[c]],s=(a=e.values[l])!==null&&a!==void 0?a:0;n[i]=s,o[c]++}return n}const EF=(e,t)=>{const a=Ot.createTransformer(t),n=Ar(e),o=Ar(t);return n.indexes.var.length===o.indexes.var.length&&n.indexes.color.length===o.indexes.color.length&&n.indexes.number.length>=o.indexes.number.length?yb.has(e)&&!o.values.length||yb.has(t)&&!n.values.length?FF(e,t):Rr(Rz(BF(n,o),o.values),a):Yx(e,t)};function Bz(e,t,a){return typeof e=="number"&&typeof t=="number"&&typeof a=="number"?_(e,t,a):GC(e)(e,t)}const OF=5;function Ez(e,t,a){const n=Math.max(t-OF,0);return yz(a-e(n),t-n)}const K={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},nL=.001;function UF({duration:e=K.duration,bounce:t=K.bounce,velocity:a=K.velocity,mass:n=K.mass}){let o,i,c=1-t;c=vt(K.minDamping,K.maxDamping,c),e=vt(K.minDuration,K.maxDuration,pt(e)),c<1?(o=d=>{const h=d*c,u=h*e,y=h-a,g=pb(d,c),v=Math.exp(-u);return nL-y/g*v},i=d=>{const h=d*c*e,u=h*a+a,y=Math.pow(c,2)*Math.pow(d,2)*e,g=Math.exp(-h),v=pb(Math.pow(d,2),c);return(-o(d)+nL>0?-1:1)*((u-y)*g)/v}):(o=d=>{const h=Math.exp(-d*e),u=(d-a)*e+1;return-nL+h*u},i=d=>{const h=Math.exp(-d*e),u=(a-d)*(e*e);return h*u});const l=5/e,s=ZF(o,i,l);if(e=yt(e),isNaN(s))return{stiffness:K.stiffness,damping:K.damping,duration:e};{const d=Math.pow(s,2)*n;return{stiffness:d,damping:c*2*Math.sqrt(n*d),duration:e}}}const NF=12;function ZF(e,t,a){let n=a;for(let o=1;o<NF;o++)n=n-e(n)/t(n);return n}function pb(e,t){return e*Math.sqrt(1-t*t)}const WF=["duration","bounce"],_F=["stiffness","damping","mass"];function SI(e,t){return t.some(a=>e[a]!==void 0)}function GF(e){let t={velocity:K.velocity,stiffness:K.stiffness,damping:K.damping,mass:K.mass,isResolvedFromDuration:!1,...e};if(!SI(e,_F)&&SI(e,WF))if(e.visualDuration){const a=e.visualDuration,n=2*Math.PI/(a*1.2),o=n*n,i=2*vt(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:K.mass,stiffness:o,damping:i}}else{const a=UF(e);t={...t,...a,mass:K.mass},t.isResolvedFromDuration=!0}return t}function Oz(e=K.visualDuration,t=K.bounce){const a=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:n,restDelta:o}=a;const i=a.keyframes[0],c=a.keyframes[a.keyframes.length-1],l={done:!1,value:i},{stiffness:s,damping:d,mass:h,duration:u,velocity:y,isResolvedFromDuration:g}=GF({...a,velocity:-pt(a.velocity||0)}),v=y||0,M=d/(2*Math.sqrt(s*h)),L=c-i,k=pt(Math.sqrt(s/h)),p=Math.abs(L)<5;n||(n=p?K.restSpeed.granular:K.restSpeed.default),o||(o=p?K.restDelta.granular:K.restDelta.default);let m;if(M<1){const w=pb(k,M);m=I=>{const P=Math.exp(-M*k*I);return c-P*((v+M*k*L)/w*Math.sin(w*I)+L*Math.cos(w*I))}}else if(M===1)m=w=>c-Math.exp(-k*w)*(L+(v+k*L)*w);else{const w=k*Math.sqrt(M*M-1);m=I=>{const P=Math.exp(-M*k*I),b=Math.min(w*I,300);return c-P*((v+M*k*L)*Math.sinh(b)+w*L*Math.cosh(b))/w}}const x={calculatedDuration:g&&u||null,next:w=>{const I=m(w);if(g)l.done=w>=u;else{let P=0;M<1&&(P=w===0?yt(v):Ez(m,w,I));const b=Math.abs(P)<=n,T=Math.abs(c-I)<=o;l.done=b&&T}return l.value=l.done?c:I,l},toString:()=>{const w=Math.min(oz(x),ib),I=iz(P=>x.next(w*P).value,w,30);return w+"ms "+I}};return x}function II({keyframes:e,velocity:t=0,power:a=.8,timeConstant:n=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:c,min:l,max:s,restDelta:d=.5,restSpeed:h}){const u=e[0],y={done:!1,value:u},g=b=>l!==void 0&&b<l||s!==void 0&&b>s,v=b=>l===void 0?s:s===void 0||Math.abs(l-b)<Math.abs(s-b)?l:s;let M=a*t;const L=u+M,k=c===void 0?L:c(L);k!==L&&(M=k-u);const p=b=>-M*Math.exp(-b/n),m=b=>k+p(b),x=b=>{const T=p(b),j=m(b);y.done=Math.abs(T)<=d,y.value=y.done?k:j};let w,I;const P=b=>{g(y.value)&&(w=b,I=Oz({keyframes:[y.value,v(y.value)],velocity:Ez(m,b,y.value),damping:o,stiffness:i,restDelta:d,restSpeed:h}))};return P(0),{calculatedDuration:null,next:b=>{let T=!1;return!I&&w===void 0&&(T=!0,x(b),P(b)),w!==void 0&&b>=w?I.next(b-w):(!T&&x(b),y)}}}const XF=Dr(.42,0,1,1),KF=Dr(0,0,.58,1),Uz=Dr(.42,0,.58,1),$F=e=>Array.isArray(e)&&typeof e[0]!="number",PI={linear:ze,easeIn:XF,easeInOut:Uz,easeOut:KF,circIn:UC,circInOut:wz,circOut:xz,backIn:OC,backInOut:vz,backOut:gz,anticipate:Mz},AI=e=>{if(FC(e)){rb(e.length===4);const[t,a,n,o]=e;return Dr(t,a,n,o)}else if(typeof e=="string")return rb(PI[e]!==void 0),PI[e];return e};function QF(e,t,a){const n=[],o=a||Bz,i=e.length-1;for(let c=0;c<i;c++){let l=o(e[c],e[c+1]);if(t){const s=Array.isArray(t)?t[c]||ze:t;l=Rr(s,l)}n.push(l)}return n}function YF(e,t,{clamp:a=!0,ease:n,mixer:o}={}){const i=e.length;if(rb(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const c=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=QF(t,n,o),s=l.length,d=h=>{if(c&&h<e[0])return t[0];let u=0;if(s>1)for(;u<e.length-2&&!(h<e[u+1]);u++);const y=pn(e[u],e[u+1],h);return l[u](y)};return a?h=>d(vt(e[0],e[i-1],h)):d}function JF(e,t){const a=e[e.length-1];for(let n=1;n<=t;n++){const o=pn(0,t,n);e.push(_(a,1,o))}}function eD(e){const t=[0];return JF(t,e.length-1),t}function tD(e,t){return e.map(a=>a*t)}function aD(e,t){return e.map(()=>t||Uz).splice(0,e.length-1)}function Jx({duration:e=300,keyframes:t,times:a,ease:n="easeInOut"}){const o=$F(n)?n.map(AI):AI(n),i={done:!1,value:t[0]},c=tD(a&&a.length===t.length?a:eD(t),e),l=YF(c,t,{ease:Array.isArray(o)?o:aD(t,o)});return{calculatedDuration:e,next:s=>(i.value=l(s),i.done=s>=e,i)}}const nD=e=>{const t=({timestamp:a})=>e(a);return{start:()=>N.update(t,!0),stop:()=>Et(t),now:()=>se.isProcessing?se.timestamp:ct.now()}},rD={decay:II,inertia:II,tween:Jx,keyframes:Jx,spring:Oz},oD=e=>e/100;class XC extends Dz{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:s}=this.options;s&&s()};const{name:a,motionValue:n,element:o,keyframes:i}=this.options,c=(o==null?void 0:o.KeyframeResolver)||_C,l=(s,d)=>this.onKeyframesResolved(s,d);this.resolver=new c(i,l,a,n,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:a="keyframes",repeat:n=0,repeatDelay:o=0,repeatType:i,velocity:c=0}=this.options,l=VC(a)?a:rD[a]||Jx;let s,d;l!==Jx&&typeof t[0]!="number"&&(s=Rr(oD,Bz(t[0],t[1])),t=[0,100]);const h=l({...this.options,keyframes:t});i==="mirror"&&(d=l({...this.options,keyframes:[...t].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=oz(h));const{calculatedDuration:u}=h,y=u+o,g=y*(n+1)-o;return{generator:h,mirroredGenerator:d,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:y,totalDuration:g}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,a=!1){const{resolved:n}=this;if(!n){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:o,generator:i,mirroredGenerator:c,mapPercentToKeyframes:l,keyframes:s,calculatedDuration:d,totalDuration:h,resolvedDuration:u}=n;if(this.startTime===null)return i.next(0);const{delay:y,repeat:g,repeatType:v,repeatDelay:M,onUpdate:L}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-h/this.speed,this.startTime)),a?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const k=this.currentTime-y*(this.speed>=0?1:-1),p=this.speed>=0?k<0:k>h;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=h);let m=this.currentTime,x=i;if(g){const b=Math.min(this.currentTime,h)/u;let T=Math.floor(b),j=b%1;!j&&b>=1&&(j=1),j===1&&T--,T=Math.min(T,g+1),T%2&&(v==="reverse"?(j=1-j,M&&(j-=M/u)):v==="mirror"&&(x=c)),m=vt(0,1,j)*u}const w=p?{done:!1,value:s[0]}:x.next(m);l&&(w.value=l(w.value));let{done:I}=w;!p&&d!==null&&(I=this.speed>=0?this.currentTime>=h:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return P&&o!==void 0&&(w.value=Lw(s,this.options,o)),L&&L(w.value),P&&this.finish(),w}get duration(){const{resolved:t}=this;return t?pt(t.calculatedDuration):0}get time(){return pt(this.currentTime)}set time(t){t=yt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const a=this.playbackSpeed!==t;this.playbackSpeed=t,a&&(this.time=pt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=nD,onPlay:a,startTime:n}=this.options;this.driver||(this.driver=t(i=>this.tick(i))),a&&a();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=n??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const iD=new Set(["opacity","clipPath","filter","transform"]);function cD(e,t,a,{delay:n=0,duration:o=300,repeat:i=0,repeatType:c="loop",ease:l="easeInOut",times:s}={}){const d={[t]:a};s&&(d.offset=s);const h=lz(l,o);return Array.isArray(h)&&(d.easing=h),e.animate(d,{delay:n,duration:o,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:c==="reverse"?"alternate":"normal"})}const lD=MC(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ew=10,sD=2e4;function dD(e){return VC(e.type)||e.type==="spring"||!cz(e.ease)}function hD(e,t){const a=new XC({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let n={done:!1,value:e[0]};const o=[];let i=0;for(;!n.done&&i<sD;)n=a.sample(i),o.push(n.value),i+=ew;return{times:void 0,keyframes:o,duration:i-ew,ease:"linear"}}const Nz={anticipate:Mz,backInOut:vz,circInOut:wz};function uD(e){return e in Nz}class qI extends Dz{constructor(t){super(t);const{name:a,motionValue:n,element:o,keyframes:i}=this.options;this.resolver=new Fz(i,(c,l)=>this.onKeyframesResolved(c,l),a,n,o),this.resolver.scheduleResolve()}initPlayback(t,a){let{duration:n=300,times:o,ease:i,type:c,motionValue:l,name:s,startTime:d}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof i=="string"&&Qx()&&uD(i)&&(i=Nz[i]),dD(this.options)){const{onComplete:u,onUpdate:y,motionValue:g,element:v,...M}=this.options,L=hD(t,M);t=L.keyframes,t.length===1&&(t[1]=t[0]),n=L.duration,o=L.times,i=L.ease,c="keyframes"}const h=cD(l.owner.current,s,t,{...this.options,duration:n,times:o,ease:i});return h.startTime=d??this.calcStartTime(),this.pendingTimeline?(yI(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:u}=this.options;l.set(Lw(t,this.options,a)),u&&u(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:n,times:o,type:c,ease:i,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:a}=t;return pt(a)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:a}=t;return pt(a.currentTime||0)}set time(t){const{resolved:a}=this;if(!a)return;const{animation:n}=a;n.currentTime=yt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:a}=t;return a.playbackRate}set speed(t){const{resolved:a}=this;if(!a)return;const{animation:n}=a;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:a}=t;return a.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:a}=t;return a.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:a}=this;if(!a)return ze;const{animation:n}=a;yI(n,t)}return ze}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:a}=t;a.playState==="finished"&&this.updateFinishedPromise(),a.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:a}=t;a.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:a,keyframes:n,duration:o,type:i,ease:c,times:l}=t;if(a.playState==="idle"||a.playState==="finished")return;if(this.time){const{motionValue:d,onUpdate:h,onComplete:u,element:y,...g}=this.options,v=new XC({...g,keyframes:n,duration:o,type:i,ease:c,times:l,isGenerator:!0}),M=yt(this.time);d.setWithVelocity(v.sample(M-ew).value,v.sample(M).value,ew)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:a,name:n,repeatDelay:o,repeatType:i,damping:c,type:l}=t;if(!a||!a.owner||!(a.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:d}=a.owner.getProps();return lD()&&n&&iD.has(n)&&!s&&!d&&!o&&i!=="mirror"&&c!==0&&l!=="inertia"}}const yD={type:"spring",stiffness:500,damping:25,restSpeed:10},pD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),kD={type:"keyframes",duration:.8},mD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fD=(e,{keyframes:t})=>t.length>2?kD:z1.has(e)?e.startsWith("scale")?pD(t[1]):yD:mD;function gD({when:e,delay:t,delayChildren:a,staggerChildren:n,staggerDirection:o,repeat:i,repeatType:c,repeatDelay:l,from:s,elapsed:d,...h}){return!!Object.keys(h).length}const KC=(e,t,a,n={},o,i)=>c=>{const l=TC(n,e)||{},s=l.delay||n.delay||0;let{elapsed:d=0}=n;d=d-yt(s);let h={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:y=>{t.set(y),l.onUpdate&&l.onUpdate(y)},onComplete:()=>{c(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:o};gD(l)||(h={...h,...fD(e,h)}),h.duration&&(h.duration=yt(h.duration)),h.repeatDelay&&(h.repeatDelay=yt(h.repeatDelay)),h.from!==void 0&&(h.keyframes[0]=h.from);let u=!1;if((h.type===!1||h.duration===0&&!h.repeatDelay)&&(h.duration=0,h.delay===0&&(u=!0)),u&&!i&&t.get()!==void 0){const y=Lw(h.keyframes,l);if(y!==void 0)return N.update(()=>{h.onUpdate(y),h.onComplete()}),new RV([])}return!i&&qI.supports(h)?new qI(h):new XC(h)};function vD({protectedKeys:e,needsAnimating:t},a){const n=e.hasOwnProperty(a)&&t[a]!==!0;return t[a]=!1,n}function Zz(e,t,{delay:a=0,transitionOverride:n,type:o}={}){var i;let{transition:c=e.getDefaultTransition(),transitionEnd:l,...s}=t;n&&(c=n);const d=[],h=o&&e.animationState&&e.animationState.getState()[o];for(const u in s){const y=e.getValue(u,(i=e.latestValues[u])!==null&&i!==void 0?i:null),g=s[u];if(g===void 0||h&&vD(h,u))continue;const v={delay:a,...TC(c||{},u)};let M=!1;if(window.MotionHandoffAnimation){const k=pz(e);if(k){const p=window.MotionHandoffAnimation(k,u,N);p!==null&&(v.startTime=p,M=!0)}}lb(e,u),y.start(KC(u,y,g,e.shouldReduceMotion&&uz.has(u)?{type:!1}:v,e,M));const L=y.animation;L&&d.push(L)}return l&&Promise.all(d).then(()=>{N.update(()=>{l&&YV(e,l)})}),d}function kb(e,t,a={}){var n;const o=ww(e,t,a.type==="exit"?(n=e.presenceContext)===null||n===void 0?void 0:n.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=o||{};a.transitionOverride&&(i=a.transitionOverride);const c=o?()=>Promise.all(Zz(e,o,a)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:u,staggerDirection:y}=i;return MD(e,t,h+d,u,y,a)}:()=>Promise.resolve(),{when:s}=i;if(s){const[d,h]=s==="beforeChildren"?[c,l]:[l,c];return d().then(()=>h())}else return Promise.all([c(),l(a.delay)])}function MD(e,t,a=0,n=0,o=1,i){const c=[],l=(e.variantChildren.size-1)*n,s=o===1?(d=0)=>d*n:(d=0)=>l-d*n;return Array.from(e.variantChildren).sort(xD).forEach((d,h)=>{d.notify("AnimationStart",t),c.push(kb(d,t,{...i,delay:a+s(h)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(c)}function xD(e,t){return e.sortNodePosition(t)}function wD(e,t,a={}){e.notify("AnimationStart",t);let n;if(Array.isArray(t)){const o=t.map(i=>kb(e,i,a));n=Promise.all(o)}else if(typeof t=="string")n=kb(e,t,a);else{const o=typeof t=="function"?ww(e,t,a.custom):t;n=Promise.all(Zz(e,o,a))}return n.then(()=>{e.notify("AnimationComplete",t)})}const LD=wC.length;function Wz(e){if(!e)return;if(!e.isControllingVariants){const a=e.parent?Wz(e.parent)||{}:{};return e.props.initial!==void 0&&(a.initial=e.props.initial),a}const t={};for(let a=0;a<LD;a++){const n=wC[a],o=e.props[n];(Sr(o)||o===!1)&&(t[n]=o)}return t}const bD=[...xC].reverse(),CD=xC.length;function SD(e){return t=>Promise.all(t.map(({animation:a,options:n})=>wD(e,a,n)))}function ID(e){let t=SD(e),a=zI(),n=!0;const o=s=>(d,h)=>{var u;const y=ww(e,h,s==="exit"?(u=e.presenceContext)===null||u===void 0?void 0:u.custom:void 0);if(y){const{transition:g,transitionEnd:v,...M}=y;d={...d,...M,...v}}return d};function i(s){t=s(e)}function c(s){const{props:d}=e,h=Wz(e.parent)||{},u=[],y=new Set;let g={},v=1/0;for(let L=0;L<CD;L++){const k=bD[L],p=a[k],m=d[k]!==void 0?d[k]:h[k],x=Sr(m),w=k===s?p.isActive:null;w===!1&&(v=L);let I=m===h[k]&&m!==d[k]&&x;if(I&&n&&e.manuallyAnimateOnMount&&(I=!1),p.protectedKeys={...g},!p.isActive&&w===null||!m&&!p.prevProp||Mw(m)||typeof m=="boolean")continue;const P=PD(p.prevProp,m);let b=P||k===s&&p.isActive&&!I&&x||L>v&&x,T=!1;const j=Array.isArray(m)?m:[m];let ie=j.reduce(o(k),{});w===!1&&(ie={});const{prevResolvedValues:xt={}}=p,_t={...xt,...ie},Ln=ce=>{b=!0,y.has(ce)&&(T=!0,y.delete(ce)),p.needsAnimating[ce]=!0;const Fe=e.getValue(ce);Fe&&(Fe.liveStyle=!1)};for(const ce in _t){const Fe=ie[ce],Gt=xt[ce];if(g.hasOwnProperty(ce))continue;let A=!1;ob(Fe)&&ob(Gt)?A=!rz(Fe,Gt):A=Fe!==Gt,A?Fe!=null?Ln(ce):y.add(ce):Fe!==void 0&&y.has(ce)?Ln(ce):p.protectedKeys[ce]=!0}p.prevProp=m,p.prevResolvedValues=ie,p.isActive&&(g={...g,...ie}),n&&e.blockInitialAnimation&&(b=!1),b&&(!(I&&P)||T)&&u.push(...j.map(ce=>({animation:ce,options:{type:k}})))}if(y.size){const L={};y.forEach(k=>{const p=e.getBaseTarget(k),m=e.getValue(k);m&&(m.liveStyle=!0),L[k]=p??null}),u.push({animation:L})}let M=!!u.length;return n&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(M=!1),n=!1,M?t(u):Promise.resolve()}function l(s,d){var h;if(a[s].isActive===d)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(y=>{var g;return(g=y.animationState)===null||g===void 0?void 0:g.setActive(s,d)}),a[s].isActive=d;const u=c(s);for(const y in a)a[y].protectedKeys={};return u}return{animateChanges:c,setActive:l,setAnimateFunction:i,getState:()=>a,reset:()=>{a=zI(),n=!0}}}function PD(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!rz(t,e):!1}function $t(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zI(){return{animate:$t(!0),whileInView:$t(),whileHover:$t(),whileTap:$t(),whileDrag:$t(),whileFocus:$t(),exit:$t()}}class Wt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class AD extends Wt{constructor(t){super(t),t.animationState||(t.animationState=ID(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Mw(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:a}=this.node.prevProps||{};t!==a&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let qD=0;class zD extends Wt{constructor(){super(...arguments),this.id=qD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:a}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===n)return;const o=this.node.animationState.setActive("exit",!t);a&&!t&&o.then(()=>a(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const jD={animation:{Feature:AD},exit:{Feature:zD}};function qr(e,t,a,n={passive:!0}){return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a)}function Br(e){return{point:{x:e.pageX,y:e.pageY}}}const HD=e=>t=>DC(t)&&e(t,Br(t));function $n(e,t,a,n){return qr(e,t,HD(a),n)}const jI=(e,t)=>Math.abs(e-t);function TD(e,t){const a=jI(e.x,t.x),n=jI(e.y,t.y);return Math.sqrt(a**2+n**2)}class _z{constructor(t,a,{transformPagePoint:n,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=oL(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,g=TD(u.offset,{x:0,y:0})>=3;if(!y&&!g)return;const{point:v}=u,{timestamp:M}=se;this.history.push({...v,timestamp:M});const{onStart:L,onMove:k}=this.handlers;y||(L&&L(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),k&&k(this.lastMoveEvent,u)},this.handlePointerMove=(u,y)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=rL(y,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(u,y)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:M}=this.handlers;if(this.dragSnapToOrigin&&M&&M(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=oL(u.type==="pointercancel"?this.lastMoveEventInfo:rL(y,this.transformPagePoint),this.history);this.startEvent&&g&&g(u,L),v&&v(u,L)},!DC(t))return;this.dragSnapToOrigin=i,this.handlers=a,this.transformPagePoint=n,this.contextWindow=o||window;const c=Br(t),l=rL(c,this.transformPagePoint),{point:s}=l,{timestamp:d}=se;this.history=[{...s,timestamp:d}];const{onSessionStart:h}=a;h&&h(t,oL(l,this.history)),this.removeListeners=Rr($n(this.contextWindow,"pointermove",this.handlePointerMove),$n(this.contextWindow,"pointerup",this.handlePointerUp),$n(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Et(this.updatePoint)}}function rL(e,t){return t?{point:t(e.point)}:e}function HI(e,t){return{x:e.x-t.x,y:e.y-t.y}}function oL({point:e},t){return{point:e,delta:HI(e,Gz(t)),offset:HI(e,VD(t)),velocity:FD(t,.1)}}function VD(e){return e[0]}function Gz(e){return e[e.length-1]}function FD(e,t){if(e.length<2)return{x:0,y:0};let a=e.length-1,n=null;const o=Gz(e);for(;a>=0&&(n=e[a],!(o.timestamp-n.timestamp>yt(t)));)a--;if(!n)return{x:0,y:0};const i=pt(o.timestamp-n.timestamp);if(i===0)return{x:0,y:0};const c={x:(o.x-n.x)/i,y:(o.y-n.y)/i};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}const Xz=1e-4,DD=1-Xz,RD=1+Xz,Kz=.01,BD=0-Kz,ED=0+Kz;function He(e){return e.max-e.min}function OD(e,t,a){return Math.abs(e-t)<=a}function TI(e,t,a,n=.5){e.origin=n,e.originPoint=_(t.min,t.max,e.origin),e.scale=He(a)/He(t),e.translate=_(a.min,a.max,e.origin)-e.originPoint,(e.scale>=DD&&e.scale<=RD||isNaN(e.scale))&&(e.scale=1),(e.translate>=BD&&e.translate<=ED||isNaN(e.translate))&&(e.translate=0)}function Qn(e,t,a,n){TI(e.x,t.x,a.x,n?n.originX:void 0),TI(e.y,t.y,a.y,n?n.originY:void 0)}function VI(e,t,a){e.min=a.min+t.min,e.max=e.min+He(t)}function UD(e,t,a){VI(e.x,t.x,a.x),VI(e.y,t.y,a.y)}function FI(e,t,a){e.min=t.min-a.min,e.max=e.min+He(t)}function Yn(e,t,a){FI(e.x,t.x,a.x),FI(e.y,t.y,a.y)}function ND(e,{min:t,max:a},n){return t!==void 0&&e<t?e=n?_(t,e,n.min):Math.max(e,t):a!==void 0&&e>a&&(e=n?_(a,e,n.max):Math.min(e,a)),e}function DI(e,t,a){return{min:t!==void 0?e.min+t:void 0,max:a!==void 0?e.max+a-(e.max-e.min):void 0}}function ZD(e,{top:t,left:a,bottom:n,right:o}){return{x:DI(e.x,a,o),y:DI(e.y,t,n)}}function RI(e,t){let a=t.min-e.min,n=t.max-e.max;return t.max-t.min<e.max-e.min&&([a,n]=[n,a]),{min:a,max:n}}function WD(e,t){return{x:RI(e.x,t.x),y:RI(e.y,t.y)}}function _D(e,t){let a=.5;const n=He(e),o=He(t);return o>n?a=pn(t.min,t.max-n,e.min):n>o&&(a=pn(e.min,e.max-o,t.min)),vt(0,1,a)}function GD(e,t){const a={};return t.min!==void 0&&(a.min=t.min-e.min),t.max!==void 0&&(a.max=t.max-e.min),a}const mb=.35;function XD(e=mb){return e===!1?e=0:e===!0&&(e=mb),{x:BI(e,"left","right"),y:BI(e,"top","bottom")}}function BI(e,t,a){return{min:EI(e,t),max:EI(e,a)}}function EI(e,t){return typeof e=="number"?e:e[t]||0}const OI=()=>({translate:0,scale:1,origin:0,originPoint:0}),G1=()=>({x:OI(),y:OI()}),UI=()=>({min:0,max:0}),Y=()=>({x:UI(),y:UI()});function Re(e){return[e("x"),e("y")]}function $z({top:e,left:t,right:a,bottom:n}){return{x:{min:t,max:a},y:{min:e,max:n}}}function KD({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function $D(e,t){if(!t)return e;const a=t({x:e.left,y:e.top}),n=t({x:e.right,y:e.bottom});return{top:a.y,left:a.x,bottom:n.y,right:n.x}}function iL(e){return e===void 0||e===1}function fb({scale:e,scaleX:t,scaleY:a}){return!iL(e)||!iL(t)||!iL(a)}function Jt(e){return fb(e)||Qz(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Qz(e){return NI(e.x)||NI(e.y)}function NI(e){return e&&e!=="0%"}function tw(e,t,a){const n=e-a,o=t*n;return a+o}function ZI(e,t,a,n,o){return o!==void 0&&(e=tw(e,o,n)),tw(e,a,n)+t}function gb(e,t=0,a=1,n,o){e.min=ZI(e.min,t,a,n,o),e.max=ZI(e.max,t,a,n,o)}function Yz(e,{x:t,y:a}){gb(e.x,t.translate,t.scale,t.originPoint),gb(e.y,a.translate,a.scale,a.originPoint)}const WI=.999999999999,_I=1.0000000000001;function QD(e,t,a,n=!1){const o=a.length;if(!o)return;t.x=t.y=1;let i,c;for(let l=0;l<o;l++){i=a[l],c=i.projectionDelta;const{visualElement:s}=i.options;s&&s.props.style&&s.props.style.display==="contents"||(n&&i.options.layoutScroll&&i.scroll&&i!==i.root&&K1(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,Yz(e,c)),n&&Jt(i.latestValues)&&K1(e,i.latestValues))}t.x<_I&&t.x>WI&&(t.x=1),t.y<_I&&t.y>WI&&(t.y=1)}function X1(e,t){e.min=e.min+t,e.max=e.max+t}function GI(e,t,a,n,o=.5){const i=_(e.min,e.max,o);gb(e,t,a,i,n)}function K1(e,t){GI(e.x,t.x,t.scaleX,t.scale,t.originX),GI(e.y,t.y,t.scaleY,t.scale,t.originY)}function Jz(e,t){return $z($D(e.getBoundingClientRect(),t))}function YD(e,t,a){const n=Jz(e,a),{scroll:o}=t;return o&&(X1(n.x,o.offset.x),X1(n.y,o.offset.y)),n}const ej=({current:e})=>e?e.ownerDocument.defaultView:null,JD=new WeakMap;class eR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Y(),this.visualElement=t}start(t,{snapToCursor:a=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const o=h=>{const{dragSnapToOrigin:u}=this.getProps();u?this.pauseAnimation():this.stopAnimation(),a&&this.snapToCursor(Br(h).point)},i=(h,u)=>{const{drag:y,dragPropagation:g,onDragStart:v}=this.getProps();if(y&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=GV(y),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Re(L=>{let k=this.getAxisMotionValue(L).get()||0;if(it.test(k)){const{projection:p}=this.visualElement;if(p&&p.layout){const m=p.layout.layoutBox[L];m&&(k=He(m)*(parseFloat(k)/100))}}this.originPoint[L]=k}),v&&N.postRender(()=>v(h,u)),lb(this.visualElement,"transform");const{animationState:M}=this.visualElement;M&&M.setActive("whileDrag",!0)},c=(h,u)=>{const{dragPropagation:y,dragDirectionLock:g,onDirectionLock:v,onDrag:M}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:L}=u;if(g&&this.currentDirection===null){this.currentDirection=tR(L),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",u.point,L),this.updateAxis("y",u.point,L),this.visualElement.render(),M&&M(h,u)},l=(h,u)=>this.stop(h,u),s=()=>Re(h=>{var u;return this.getAnimationState(h)==="paused"&&((u=this.getAxisMotionValue(h).animation)===null||u===void 0?void 0:u.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new _z(t,{onSessionStart:o,onStart:i,onMove:c,onSessionEnd:l,resumeAnimation:s},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:ej(this.visualElement)})}stop(t,a){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:o}=a;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&N.postRender(()=>i(t,a))}cancel(){this.isDragging=!1;const{projection:t,animationState:a}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}updateAxis(t,a,n){const{drag:o}=this.getProps();if(!n||!lo(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let c=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(c=ND(c,this.constraints[t],this.elastic[t])),i.set(c)}resolveConstraints(){var t;const{dragConstraints:a,dragElastic:n}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;a&&W1(a)?this.constraints||(this.constraints=this.resolveRefConstraints()):a&&o?this.constraints=ZD(o.layoutBox,a):this.constraints=!1,this.elastic=XD(n),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Re(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=GD(o.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:a}=this.getProps();if(!t||!W1(t))return!1;const n=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=YD(n,o.root,this.visualElement.getTransformPagePoint());let c=WD(o.layout.layoutBox,i);if(a){const l=a(KD(c));this.hasMutatedConstraints=!!l,l&&(c=$z(l))}return c}startAnimation(t){const{drag:a,dragMomentum:n,dragElastic:o,dragTransition:i,dragSnapToOrigin:c,onDragTransitionEnd:l}=this.getProps(),s=this.constraints||{},d=Re(h=>{if(!lo(h,a,this.currentDirection))return;let u=s&&s[h]||{};c&&(u={min:0,max:0});const y=o?200:1e6,g=o?40:1e7,v={type:"inertia",velocity:n?t[h]:0,bounceStiffness:y,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...u};return this.startAxisValueAnimation(h,v)});return Promise.all(d).then(l)}startAxisValueAnimation(t,a){const n=this.getAxisMotionValue(t);return lb(this.visualElement,t),n.start(KC(t,n,0,a,this.visualElement,!1))}stopAnimation(){Re(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Re(t=>{var a;return(a=this.getAxisMotionValue(t).animation)===null||a===void 0?void 0:a.pause()})}getAnimationState(t){var a;return(a=this.getAxisMotionValue(t).animation)===null||a===void 0?void 0:a.state}getAxisMotionValue(t){const a=`_drag${t.toUpperCase()}`,n=this.visualElement.getProps();return n[a]||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){Re(a=>{const{drag:n}=this.getProps();if(!lo(a,n,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(a);if(o&&o.layout){const{min:c,max:l}=o.layout.layoutBox[a];i.set(t[a]-_(c,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:a}=this.getProps(),{projection:n}=this.visualElement;if(!W1(a)||!n||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Re(c=>{const l=this.getAxisMotionValue(c);if(l&&this.constraints!==!1){const s=l.get();o[c]=_D({min:s,max:s},this.constraints[c])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Re(c=>{if(!lo(c,t,null))return;const l=this.getAxisMotionValue(c),{min:s,max:d}=this.constraints[c];l.set(_(s,d,o[c]))})}addListeners(){if(!this.visualElement.current)return;JD.set(this.visualElement,this);const t=this.visualElement.current,a=$n(t,"pointerdown",s=>{const{drag:d,dragListener:h=!0}=this.getProps();d&&h&&this.start(s)}),n=()=>{const{dragConstraints:s}=this.getProps();W1(s)&&s.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",n);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),N.read(n);const c=qr(window,"resize",()=>this.scalePositionWithinConstraints()),l=o.addEventListener("didUpdate",({delta:s,hasLayoutChanged:d})=>{this.isDragging&&d&&(Re(h=>{const u=this.getAxisMotionValue(h);u&&(this.originPoint[h]+=s[h].translate,u.set(u.get()+s[h].translate))}),this.visualElement.render())});return()=>{c(),a(),i(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:n=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:c=mb,dragMomentum:l=!0}=t;return{...t,drag:a,dragDirectionLock:n,dragPropagation:o,dragConstraints:i,dragElastic:c,dragMomentum:l}}}function lo(e,t,a){return(t===!0||t===e)&&(a===null||a===e)}function tR(e,t=10){let a=null;return Math.abs(e.y)>t?a="y":Math.abs(e.x)>t&&(a="x"),a}class aR extends Wt{constructor(t){super(t),this.removeGroupControls=ze,this.removeListeners=ze,this.controls=new eR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const XI=e=>(t,a)=>{e&&N.postRender(()=>e(t,a))};class nR extends Wt{constructor(){super(...arguments),this.removePointerDownListener=ze}onPointerDown(t){this.session=new _z(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ej(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:a,onPan:n,onPanEnd:o}=this.node.getProps();return{onSessionStart:XI(t),onStart:XI(a),onMove:n,onEnd:(i,c)=>{delete this.session,o&&N.postRender(()=>o(i,c))}}}mount(){this.removePointerDownListener=$n(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function KI(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const jn={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(z.test(e))e=parseFloat(e);else return e;const a=KI(e,t.target.x),n=KI(e,t.target.y);return`${a}% ${n}%`}},rR={correct:(e,{treeScale:t,projectionDelta:a})=>{const n=e,o=Ot.parse(e);if(o.length>5)return n;const i=Ot.createTransformer(e),c=typeof o[0]!="number"?1:0,l=a.x.scale*t.x,s=a.y.scale*t.y;o[0+c]/=l,o[1+c]/=s;const d=_(l,s,.5);return typeof o[2+c]=="number"&&(o[2+c]/=d),typeof o[3+c]=="number"&&(o[3+c]/=d),i(o)}};class oR extends S.Component{componentDidMount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:n,layoutId:o}=this.props,{projection:i}=t;SV(iR),i&&(a.group&&a.group.add(i),n&&n.register&&o&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),bo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:a,visualElement:n,drag:o,isPresent:i}=this.props,c=n.projection;return c&&(c.isPresent=i,o||t.layoutDependency!==a||a===void 0?c.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?c.promote():c.relegate()||N.postRender(()=>{const l=c.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),bC.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:a,switchLayoutGroup:n}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),n&&n.deregister&&n.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function tj(e){const[t,a]=Rq(),n=S.useContext(mC);return f.jsx(oR,{...e,layoutGroup:n,switchLayoutGroup:S.useContext(Wq),isPresent:t,safeToRemove:a})}const iR={borderRadius:{...jn,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jn,borderTopRightRadius:jn,borderBottomLeftRadius:jn,borderBottomRightRadius:jn,boxShadow:rR};function cR(e,t,a){const n=me(e)?e:Pr(e);return n.start(KC("",n,t,a)),n.animation}function lR(e){return e instanceof SVGElement&&e.tagName!=="svg"}const sR=(e,t)=>e.depth-t.depth;class dR{constructor(){this.children=[],this.isDirty=!1}add(t){RC(this.children,t),this.isDirty=!0}remove(t){BC(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(sR),this.isDirty=!1,this.children.forEach(t)}}function hR(e,t){const a=ct.now(),n=({timestamp:o})=>{const i=o-a;i>=t&&(Et(n),e(i-t))};return N.read(n,!0),()=>Et(n)}const aj=["TopLeft","TopRight","BottomLeft","BottomRight"],uR=aj.length,$I=e=>typeof e=="string"?parseFloat(e):e,QI=e=>typeof e=="number"||z.test(e);function yR(e,t,a,n,o,i){o?(e.opacity=_(0,a.opacity!==void 0?a.opacity:1,pR(n)),e.opacityExit=_(t.opacity!==void 0?t.opacity:1,0,kR(n))):i&&(e.opacity=_(t.opacity!==void 0?t.opacity:1,a.opacity!==void 0?a.opacity:1,n));for(let c=0;c<uR;c++){const l=`border${aj[c]}Radius`;let s=YI(t,l),d=YI(a,l);s===void 0&&d===void 0||(s||(s=0),d||(d=0),s===0||d===0||QI(s)===QI(d)?(e[l]=Math.max(_($I(s),$I(d),n),0),(it.test(d)||it.test(s))&&(e[l]+="%")):e[l]=d)}(t.rotate||a.rotate)&&(e.rotate=_(t.rotate||0,a.rotate||0,n))}function YI(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const pR=nj(0,.5,xz),kR=nj(.5,.95,ze);function nj(e,t,a){return n=>n<e?0:n>t?1:a(pn(e,t,n))}function JI(e,t){e.min=t.min,e.max=t.max}function De(e,t){JI(e.x,t.x),JI(e.y,t.y)}function eP(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function tP(e,t,a,n,o){return e-=t,e=tw(e,1/a,n),o!==void 0&&(e=tw(e,1/o,n)),e}function mR(e,t=0,a=1,n=.5,o,i=e,c=e){if(it.test(t)&&(t=parseFloat(t),t=_(c.min,c.max,t/100)-c.min),typeof t!="number")return;let l=_(i.min,i.max,n);e===i&&(l-=t),e.min=tP(e.min,t,a,l,o),e.max=tP(e.max,t,a,l,o)}function aP(e,t,[a,n,o],i,c){mR(e,t[a],t[n],t[o],t.scale,i,c)}const fR=["x","scaleX","originX"],gR=["y","scaleY","originY"];function nP(e,t,a,n){aP(e.x,t,fR,a?a.x:void 0,n?n.x:void 0),aP(e.y,t,gR,a?a.y:void 0,n?n.y:void 0)}function rP(e){return e.translate===0&&e.scale===1}function rj(e){return rP(e.x)&&rP(e.y)}function oP(e,t){return e.min===t.min&&e.max===t.max}function vR(e,t){return oP(e.x,t.x)&&oP(e.y,t.y)}function iP(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function oj(e,t){return iP(e.x,t.x)&&iP(e.y,t.y)}function cP(e){return He(e.x)/He(e.y)}function lP(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class MR{constructor(){this.members=[]}add(t){RC(this.members,t),t.scheduleRender()}remove(t){if(BC(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(t){const a=this.members.findIndex(o=>t===o);if(a===0)return!1;let n;for(let o=a;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){n=i;break}}return n?(this.promote(n),!0):!1}promote(t,a){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,a&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:a,resumingFrom:n}=t;a.onExitComplete&&a.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function xR(e,t,a){let n="";const o=e.x.translate/t.x,i=e.y.translate/t.y,c=(a==null?void 0:a.z)||0;if((o||i||c)&&(n=`translate3d(${o}px, ${i}px, ${c}px) `),(t.x!==1||t.y!==1)&&(n+=`scale(${1/t.x}, ${1/t.y}) `),a){const{transformPerspective:d,rotate:h,rotateX:u,rotateY:y,skewX:g,skewY:v}=a;d&&(n=`perspective(${d}px) ${n}`),h&&(n+=`rotate(${h}deg) `),u&&(n+=`rotateX(${u}deg) `),y&&(n+=`rotateY(${y}deg) `),g&&(n+=`skewX(${g}deg) `),v&&(n+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,s=e.y.scale*t.y;return(l!==1||s!==1)&&(n+=`scale(${l}, ${s})`),n||"none"}const ea={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Bn=typeof window<"u"&&window.MotionDebug!==void 0,cL=["","X","Y","Z"],wR={visibility:"hidden"},sP=1e3;let LR=0;function lL(e,t,a,n){const{latestValues:o}=t;o[e]&&(a[e]=o[e],t.setStaticValue(e,0),n&&(n[e]=0))}function ij(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const a=pz(t);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(a,"transform",N,!(o||i))}const{parent:n}=e;n&&!n.hasCheckedOptimisedAppear&&ij(n)}function cj({attachResizeListener:e,defaultParent:t,measureScroll:a,checkIsScrollRoot:n,resetTransform:o}){return class{constructor(i={},c=t==null?void 0:t()){this.id=LR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Bn&&(ea.totalNodes=ea.resolvedTargetDeltas=ea.recalculatedProjection=0),this.nodes.forEach(SR),this.nodes.forEach(zR),this.nodes.forEach(jR),this.nodes.forEach(IR),Bn&&window.MotionDebug.record(ea)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=i,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new dR)}addEventListener(i,c){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new EC),this.eventHandlers.get(i).add(c)}notifyListeners(i,...c){const l=this.eventHandlers.get(i);l&&l.notify(...c)}hasListeners(i){return this.eventHandlers.has(i)}mount(i,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=lR(i),this.instance=i;const{layoutId:l,layout:s,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(s||l)&&(this.isLayoutDirty=!0),e){let h;const u=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=hR(u,250),bo.hasAnimatedSinceResize&&(bo.hasAnimatedSinceResize=!1,this.nodes.forEach(hP))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||s)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:u,hasRelativeTargetChanged:y,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||DR,{onLayoutAnimationStart:M,onLayoutAnimationComplete:L}=d.getProps(),k=!this.targetLayout||!oj(this.targetLayout,g)||y,p=!u&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||u&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,p);const m={...TC(v,"layout"),onPlay:M,onComplete:L};(d.shouldReduceMotion||this.options.layoutRoot)&&(m.delay=0,m.type=!1),this.startAnimation(m)}else u||hP(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const i=this.getStack();i&&i.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HR),this.animationId++)}getTransformTemplate(){const{visualElement:i}=this.options;return i&&i.getProps().transformTemplate}willUpdate(i=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ij(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const h=this.path[d];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:c,layout:l}=this.options;if(c===void 0&&!l)return;const s=this.getTransformTemplate();this.prevTransformTemplateValue=s?s(this.latestValues,""):void 0,this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dP);return}this.isUpdating||this.nodes.forEach(AR),this.isUpdating=!1,this.nodes.forEach(qR),this.nodes.forEach(bR),this.nodes.forEach(CR),this.clearAllSnapshots();const i=ct.now();se.delta=vt(0,1e3/60,i-se.timestamp),se.timestamp=i,se.isProcessing=!0,Yw.update.process(se),Yw.preRender.process(se),Yw.render.process(se),se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bC.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PR),this.sharedNodes.forEach(TR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const i=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Y(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,i?i.layoutBox:void 0)}updateScroll(i="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(c=!1),c){const l=n(this.instance);this.scroll={animationId:this.root.animationId,phase:i,isRoot:l,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!o)return;const i=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!rj(this.projectionDelta),l=this.getTransformTemplate(),s=l?l(this.latestValues,""):void 0,d=s!==this.prevTransformTemplateValue;i&&(c||Jt(this.latestValues)||d)&&(o(this.instance,s),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const c=this.measurePageBox();let l=this.removeElementScroll(c);return i&&(l=this.removeTransform(l)),RR(l),{animationId:this.root.animationId,measuredBox:c,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var i;const{visualElement:c}=this.options;if(!c)return Y();const l=c.measureViewportBox();if(!(!((i=this.scroll)===null||i===void 0)&&i.wasRoot||this.path.some(BR))){const{scroll:s}=this.root;s&&(X1(l.x,s.offset.x),X1(l.y,s.offset.y))}return l}removeElementScroll(i){var c;const l=Y();if(De(l,i),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return l;for(let s=0;s<this.path.length;s++){const d=this.path[s],{scroll:h,options:u}=d;d!==this.root&&h&&u.layoutScroll&&(h.wasRoot&&De(l,i),X1(l.x,h.offset.x),X1(l.y,h.offset.y))}return l}applyTransform(i,c=!1){const l=Y();De(l,i);for(let s=0;s<this.path.length;s++){const d=this.path[s];!c&&d.options.layoutScroll&&d.scroll&&d!==d.root&&K1(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Jt(d.latestValues)&&K1(l,d.latestValues)}return Jt(this.latestValues)&&K1(l,this.latestValues),l}removeTransform(i){const c=Y();De(c,i);for(let l=0;l<this.path.length;l++){const s=this.path[l];if(!s.instance||!Jt(s.latestValues))continue;fb(s.latestValues)&&s.updateSnapshot();const d=Y(),h=s.measurePageBox();De(d,h),nP(c,s.latestValues,s.snapshot?s.snapshot.layoutBox:void 0,d)}return Jt(this.latestValues)&&nP(c,this.latestValues),c}setTargetDelta(i){this.targetDelta=i,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(i=!1){var c;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const s=!!this.resumingFrom||this!==l;if(!(i||s&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=se.timestamp,!this.targetDelta&&!this.relativeTarget){const u=this.getClosestProjectingParent();u&&u.layout&&this.animationProgress!==1?(this.relativeParent=u,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),Yn(this.relativeTargetOrigin,this.layout.layoutBox,u.layout.layoutBox),De(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Y(),this.targetWithTransforms=Y()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),UD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):De(this.target,this.layout.layoutBox),Yz(this.target,this.targetDelta)):De(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const u=this.getClosestProjectingParent();u&&!!u.resumingFrom==!!this.resumingFrom&&!u.options.layoutScroll&&u.target&&this.animationProgress!==1?(this.relativeParent=u,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Y(),this.relativeTargetOrigin=Y(),Yn(this.relativeTargetOrigin,this.target,u.target),De(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Bn&&ea.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||fb(this.parent.latestValues)||Qz(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var i;const c=this.getLead(),l=!!this.resumingFrom||this!==c;let s=!0;if((this.isProjectionDirty||!((i=this.parent)===null||i===void 0)&&i.isProjectionDirty)&&(s=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(s=!1),this.resolvedRelativeTargetAt===se.timestamp&&(s=!1),s)return;const{layout:d,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||h))return;De(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,y=this.treeScale.y;QD(this.layoutCorrected,this.treeScale,this.path,l),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Y());const{target:g}=c;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(eP(this.prevProjectionDelta.x,this.projectionDelta.x),eP(this.prevProjectionDelta.y,this.projectionDelta.y)),Qn(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==y||!lP(this.projectionDelta.x,this.prevProjectionDelta.x)||!lP(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),Bn&&ea.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),i){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=G1(),this.projectionDelta=G1(),this.projectionDeltaWithTransform=G1()}setAnimationOrigin(i,c=!1){const l=this.snapshot,s=l?l.latestValues:{},d={...this.latestValues},h=G1();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const u=Y(),y=l?l.source:void 0,g=this.layout?this.layout.source:void 0,v=y!==g,M=this.getStack(),L=!M||M.members.length<=1,k=!!(v&&!L&&this.options.crossfade===!0&&!this.path.some(FR));this.animationProgress=0;let p;this.mixTargetDelta=m=>{const x=m/1e3;uP(h.x,i.x,x),uP(h.y,i.y,x),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yn(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),VR(this.relativeTarget,this.relativeTargetOrigin,u,x),p&&vR(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=Y()),De(p,this.relativeTarget)),v&&(this.animationValues=d,yR(d,s,this.latestValues,x,k,L)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(i){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=N.update(()=>{bo.hasAnimatedSinceResize=!0,this.currentAnimation=cR(0,sP,{...i,onUpdate:c=>{this.mixTargetDelta(c),i.onUpdate&&i.onUpdate(c)},onComplete:()=>{i.onComplete&&i.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const i=this.getStack();i&&i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(sP),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:c,target:l,layout:s,latestValues:d}=i;if(!(!c||!l||!s)){if(this!==i&&this.layout&&s&&lj(this.options.animationType,this.layout.layoutBox,s.layoutBox)){l=this.target||Y();const h=He(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+h;const u=He(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+u}De(c,l),K1(c,d),Qn(this.projectionDeltaWithTransform,this.layoutCorrected,c,d)}}registerSharedNode(i,c){this.sharedNodes.has(i)||this.sharedNodes.set(i,new MR),this.sharedNodes.get(i).add(c);const l=c.options.initialPromotionConfig;c.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(c):void 0})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:c}=this.options;return c?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:c}=this.options;return c?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:c,preserveFollowOpacity:l}={}){const s=this.getStack();s&&s.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetSkewAndRotation(){const{visualElement:i}=this.options;if(!i)return;let c=!1;const{latestValues:l}=i;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(c=!0),!c)return;const s={};l.z&&lL("z",i,s,this.animationValues);for(let d=0;d<cL.length;d++)lL(`rotate${cL[d]}`,i,s,this.animationValues),lL(`skew${cL[d]}`,i,s,this.animationValues);i.render();for(const d in s)i.setStaticValue(d,s[d]),this.animationValues&&(this.animationValues[d]=s[d]);i.scheduleRender()}getProjectionStyles(i){var c,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wR;const s={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,s.opacity="",s.pointerEvents=wo(i==null?void 0:i.pointerEvents)||"",s.transform=d?d(this.latestValues,""):"none",s;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=wo(i==null?void 0:i.pointerEvents)||""),this.hasProjected&&!Jt(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const u=h.animationValues||h.latestValues;this.applyTransformsToTarget(),s.transform=xR(this.projectionDeltaWithTransform,this.treeScale,u),d&&(s.transform=d(u,s.transform));const{x:y,y:g}=this.projectionDelta;s.transformOrigin=`${y.origin*100}% ${g.origin*100}% 0`,h.animationValues?s.opacity=h===this?(l=(c=u.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:s.opacity=h===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const v in $x){if(u[v]===void 0)continue;const{correct:M,applyTo:L}=$x[v],k=s.transform==="none"?u[v]:M(u[v],h);if(L){const p=L.length;for(let m=0;m<p;m++)s[L[m]]=k}else s[v]=k}return this.options.layoutId&&(s.pointerEvents=h===this?wo(i==null?void 0:i.pointerEvents)||"":"none"),s}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var c;return(c=i.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(dP),this.root.sharedNodes.clear()}}}function bR(e){e.updateLayout()}function CR(e){var t;const a=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&a&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:o}=e.layout,{animationType:i}=e.options,c=a.source!==e.layout.source;i==="size"?Re(u=>{const y=c?a.measuredBox[u]:a.layoutBox[u],g=He(y);y.min=n[u].min,y.max=y.min+g}):lj(i,a.layoutBox,n)&&Re(u=>{const y=c?a.measuredBox[u]:a.layoutBox[u],g=He(n[u]);y.max=y.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[u].max=e.relativeTarget[u].min+g)});const l=G1();Qn(l,n,a.layoutBox);const s=G1();c?Qn(s,e.applyTransform(o,!0),a.measuredBox):Qn(s,n,a.layoutBox);const d=!rj(l);let h=!1;if(!e.resumeFrom){const u=e.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:y,layout:g}=u;if(y&&g){const v=Y();Yn(v,a.layoutBox,y.layoutBox);const M=Y();Yn(M,n,g.layoutBox),oj(v,M)||(h=!0),u.options.layoutRoot&&(e.relativeTarget=M,e.relativeTargetOrigin=v,e.relativeParent=u)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:a,delta:s,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function SR(e){Bn&&ea.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function IR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function PR(e){e.clearSnapshot()}function dP(e){e.clearMeasurements()}function AR(e){e.isLayoutDirty=!1}function qR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function hP(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zR(e){e.resolveTargetDelta()}function jR(e){e.calcProjection()}function HR(e){e.resetSkewAndRotation()}function TR(e){e.removeLeadSnapshot()}function uP(e,t,a){e.translate=_(t.translate,0,a),e.scale=_(t.scale,1,a),e.origin=t.origin,e.originPoint=t.originPoint}function yP(e,t,a,n){e.min=_(t.min,a.min,n),e.max=_(t.max,a.max,n)}function VR(e,t,a,n){yP(e.x,t.x,a.x,n),yP(e.y,t.y,a.y,n)}function FR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const DR={duration:.45,ease:[.4,0,.1,1]},pP=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),kP=pP("applewebkit/")&&!pP("chrome/")?Math.round:ze;function mP(e){e.min=kP(e.min),e.max=kP(e.max)}function RR(e){mP(e.x),mP(e.y)}function lj(e,t,a){return e==="position"||e==="preserve-aspect"&&!OD(cP(t),cP(a),.2)}function BR(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const ER=cj({attachResizeListener:(e,t)=>qr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sL={current:void 0},sj=cj({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!sL.current){const e=new ER({});e.mount(window),e.setOptions({layoutScroll:!0}),sL.current=e}return sL.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),OR={pan:{Feature:nR},drag:{Feature:aR,ProjectionNode:sj,MeasureLayout:tj}};function fP(e,t,a){const{props:n}=e;e.animationState&&n.whileHover&&e.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,i=n[o];i&&N.postRender(()=>i(t,Br(t)))}class UR extends Wt{mount(){const{current:t}=this.node;t&&(this.unmount=UV(t,a=>(fP(this.node,a,"Start"),n=>fP(this.node,n,"End"))))}unmount(){}}class NR extends Wt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Rr(qr(this.node.current,"focus",()=>this.onFocus()),qr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gP(e,t,a){const{props:n}=e;e.animationState&&n.whileTap&&e.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),i=n[o];i&&N.postRender(()=>i(t,Br(t)))}class ZR extends Wt{mount(){const{current:t}=this.node;t&&(this.unmount=_V(t,a=>(gP(this.node,a,"Start"),(n,{success:o})=>gP(this.node,n,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const vb=new WeakMap,dL=new WeakMap,WR=e=>{const t=vb.get(e.target);t&&t(e)},_R=e=>{e.forEach(WR)};function GR({root:e,...t}){const a=e||document;dL.has(a)||dL.set(a,{});const n=dL.get(a),o=JSON.stringify(t);return n[o]||(n[o]=new IntersectionObserver(_R,{root:e,...t})),n[o]}function XR(e,t,a){const n=GR(t);return vb.set(e,a),n.observe(e),()=>{vb.delete(e),n.unobserve(e)}}const KR={some:0,all:1};class $R extends Wt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:a,margin:n,amount:o="some",once:i}=t,c={root:a?a.current:void 0,rootMargin:n,threshold:typeof o=="number"?o:KR[o]},l=s=>{const{isIntersecting:d}=s;if(this.isInView===d||(this.isInView=d,i&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:h,onViewportLeave:u}=this.node.getProps(),y=d?h:u;y&&y(s)};return XR(this.node.current,c,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:a}=this.node;["amount","margin","root"].some(QR(t,a))&&this.startObserver()}unmount(){}}function QR({viewport:e={}},{viewport:t={}}={}){return a=>e[a]!==t[a]}const YR={inView:{Feature:$R},tap:{Feature:ZR},focus:{Feature:NR},hover:{Feature:UR}},JR={layout:{ProjectionNode:sj,MeasureLayout:tj}},Mb={current:null},dj={current:!1};function eB(){if(dj.current=!0,!!vC)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Mb.current=e.matches;e.addListener(t),t()}else Mb.current=!1}const tB=[...Vz,pe,Ot],aB=e=>tB.find(Tz(e)),vP=new WeakMap;function nB(e,t,a){for(const n in t){const o=t[n],i=a[n];if(me(o))e.addValue(n,o);else if(me(i))e.addValue(n,Pr(o,{owner:e}));else if(i!==o)if(e.hasValue(n)){const c=e.getValue(n);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=e.getStaticValue(n);e.addValue(n,Pr(c!==void 0?c:o,{owner:e}))}}for(const n in a)t[n]===void 0&&e.removeValue(n);return t}const MP=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class rB{scrapeMotionValuesFromProps(t,a,n){return{}}constructor({parent:t,props:a,presenceContext:n,reducedMotionConfig:o,blockInitialAnimation:i,visualState:c},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=_C,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const g=ct.now();this.renderScheduledAt<g&&(this.renderScheduledAt=g,N.render(this.render,!1,!0))};const{latestValues:s,renderState:d,onUpdate:h}=c;this.onUpdate=h,this.latestValues=s,this.baseTarget={...s},this.initialValues=a.initial?{...s}:{},this.renderState=d,this.parent=t,this.props=a,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=l,this.blockInitialAnimation=!!i,this.isControllingVariants=xw(a),this.isVariantNode=Nq(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...y}=this.scrapeMotionValuesFromProps(a,{},this);for(const g in y){const v=y[g];s[g]!==void 0&&me(v)&&v.set(s[g],!1)}}mount(t){this.current=t,vP.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,n)=>this.bindToMotionValue(n,a)),dj.current||eB(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Mb.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){vP.delete(this.current),this.projection&&this.projection.unmount(),Et(this.notifyUpdate),Et(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const a=this.features[t];a&&(a.unmount(),a.isMounted=!1)}this.current=null}bindToMotionValue(t,a){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=z1.has(t),o=a.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&N.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=a.on("renderRequest",this.scheduleRender);let c;window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,t,a)),this.valueSubscriptions.set(t,()=>{o(),i(),c&&c(),a.owner&&a.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in kn){const a=kn[t];if(!a)continue;const{isEnabled:n,Feature:o}=a;if(!this.features[t]&&o&&n(this.props)&&(this.features[t]=new o(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Y()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,a){this.latestValues[t]=a}update(t,a){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let n=0;n<MP.length;n++){const o=MP[n];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i="on"+o,c=t[i];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=nB(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(t),()=>a.variantChildren.delete(t)}addValue(t,a){const n=this.values.get(t);a!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,a),this.values.set(t,a),this.latestValues[t]=a.get())}removeValue(t){this.values.delete(t);const a=this.valueSubscriptions.get(t);a&&(a(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,a){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return n===void 0&&a!==void 0&&(n=Pr(a===null?void 0:a,{owner:this}),this.addValue(t,n)),n}readValue(t,a){var n;let o=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options);return o!=null&&(typeof o=="string"&&(jz(o)||Lz(o))?o=parseFloat(o):!aB(o)&&Ot.test(a)&&(o=Az(t,a)),this.setBaseTarget(t,me(o)?o.get():o)),me(o)?o.get():o}setBaseTarget(t,a){this.baseTarget[t]=a}getBaseTarget(t){var a;const{initial:n}=this.props;let o;if(typeof n=="string"||typeof n=="object"){const c=SC(this.props,n,(a=this.presenceContext)===null||a===void 0?void 0:a.custom);c&&(o=c[t])}if(n&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!me(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,a){return this.events[t]||(this.events[t]=new EC),this.events[t].add(a)}notify(t,...a){this.events[t]&&this.events[t].notify(...a)}}class hj extends rB{constructor(){super(...arguments),this.KeyframeResolver=Fz}sortInstanceNodePosition(t,a){return t.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(t,a){return t.style?t.style[a]:void 0}removeValueFromRenderState(t,{vars:a,style:n}){delete a[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;me(t)&&(this.childSubscription=t.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}function oB(e){return window.getComputedStyle(e)}class iB extends hj{constructor(){super(...arguments),this.type="html",this.renderInstance=Yq}readValueFromInstance(t,a){if(z1.has(a)){const n=WC(a);return n&&n.default||0}else{const n=oB(t),o=(Kq(a)?n.getPropertyValue(a):n[a])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:a}){return Jz(t,a)}build(t,a,n){AC(t,a,n.transformTemplate)}scrapeMotionValuesFromProps(t,a,n){return HC(t,a,n)}}class cB extends hj{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Y}getBaseTargetFromProps(t,a){return t[a]}readValueFromInstance(t,a){if(z1.has(a)){const n=WC(a);return n&&n.default||0}return a=Jq.has(a)?a:LC(a),t.getAttribute(a)}scrapeMotionValuesFromProps(t,a,n){return az(t,a,n)}build(t,a,n){qC(t,a,this.isSVGTag,n.transformTemplate)}renderInstance(t,a,n,o){ez(t,a,n,o)}mount(t){this.isSVGTag=jC(t.tagName),super.mount(t)}}const lB=(e,t)=>CC(e)?new cB(t):new iB(t,{allowProjection:e!==S.Fragment}),sB=VV({...jD,...YR,...OR,...JR},lB),O=$T(sB);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/var dB={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hB=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),r=(e,t)=>{const a=S.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:l="",children:s,...d},h)=>S.createElement("svg",{ref:h,...dB,width:o,height:o,stroke:n,strokeWidth:c?Number(i)*24/Number(o):i,className:["lucide",`lucide-${hB(e)}`,l].join(" "),...d},[...t.map(([u,y])=>S.createElement(u,y)),...Array.isArray(s)?s:[s]]));return a.displayName=`${e}`,a};/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Co=r("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const So=r("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Io=r("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Po=r("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ao=r("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qo=r("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zo=r("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jo=r("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ta=r("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const aa=r("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ho=r("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const na=r("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const To=r("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vo=r("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fo=r("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Do=r("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ro=r("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bo=r("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Eo=r("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oo=r("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uo=r("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const No=r("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zo=r("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wo=r("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _o=r("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Go=r("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xo=r("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ko=r("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $o=r("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qo=r("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yo=r("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jo=r("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ei=r("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ti=r("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ai=r("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ni=r("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ri=r("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oi=r("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ii=r("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ci=r("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const li=r("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const si=r("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const di=r("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hi=r("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ui=r("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yi=r("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pi=r("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ki=r("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mi=r("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fi=r("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gi=r("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vi=r("Anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mi=r("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xi=r("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wi=r("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Li=r("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bi=r("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ci=r("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Si=r("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ii=r("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pi=r("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ai=r("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qi=r("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zi=r("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ji=r("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hi=r("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ti=r("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vi=r("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fi=r("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Di=r("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ra=r("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ri=r("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bi=r("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ei=r("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oi=r("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ui=r("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ni=r("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zi=r("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wi=r("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _i=r("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gi=r("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xi=r("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ki=r("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $i=r("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qi=r("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yi=r("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oa=r("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ia=r("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ji=r("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e2=r("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t2=r("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a2=r("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n2=r("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r2=r("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o2=r("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i2=r("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c2=r("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l2=r("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s2=r("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d2=r("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h2=r("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u2=r("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y2=r("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ca=r("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p2=r("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k2=r("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m2=r("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f2=r("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g2=r("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v2=r("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M2=r("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x2=r("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const la=r("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w2=r("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L2=r("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b2=r("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C2=r("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S2=r("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I2=r("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P2=r("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sa=r("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A2=r("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q2=r("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const da=r("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z2=r("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j2=r("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H2=r("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T2=r("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V2=r("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F2=r("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D2=r("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ha=r("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R2=r("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B2=r("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E2=r("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O2=r("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ua=r("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U2=r("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N2=r("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z2=r("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W2=r("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _2=r("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G2=r("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X2=r("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K2=r("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $2=r("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q2=r("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y2=r("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J2=r("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ec=r("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tc=r("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ac=r("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nc=r("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rc=r("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oc=r("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ic=r("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cc=r("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lc=r("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sc=r("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dc=r("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hc=r("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uc=r("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yc=r("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pc=r("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kc=r("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mc=r("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fc=r("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gc=r("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vc=r("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mc=r("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xc=r("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wc=r("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lc=r("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bc=r("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cc=r("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sc=r("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ic=r("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pc=r("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ac=r("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qc=r("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zc=r("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jc=r("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hc=r("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tc=r("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vc=r("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fc=r("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ya=r("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pa=r("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dc=r("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rc=r("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bc=r("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ec=r("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oc=r("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uc=r("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nc=r("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zc=r("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wc=r("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _c=r("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gc=r("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xc=r("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kc=r("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $c=r("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qc=r("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yc=r("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jc=r("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const el=r("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tl=r("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const al=r("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nl=r("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rl=r("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ka=r("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ol=r("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const il=r("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cl=r("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ll=r("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sl=r("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dl=r("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hl=r("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ul=r("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yl=r("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pl=r("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kl=r("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ml=r("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fl=r("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gl=r("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vl=r("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ml=r("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xl=r("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wl=r("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ll=r("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bl=r("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cl=r("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sl=r("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Il=r("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pl=r("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Al=r("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ql=r("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zl=r("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jl=r("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hl=r("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tl=r("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ma=r("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vl=r("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fl=r("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dl=r("BrainCog",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rl=r("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bl=r("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const El=r("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ol=r("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ul=r("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nl=r("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zl=r("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wl=r("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _l=r("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gl=r("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xl=r("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kl=r("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $l=r("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ql=r("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yl=r("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jl=r("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const es=r("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ts=r("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const as=r("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ns=r("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rs=r("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const os=r("CalendarFold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const is=r("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cs=r("CalendarMinus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ls=r("CalendarMinus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ss=r("CalendarOff",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ds=r("CalendarPlus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hs=r("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const us=r("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ys=r("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ps=r("CalendarX2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ks=r("CalendarX",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ms=r("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fs=r("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gs=r("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vs=r("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ms=r("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xs=r("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ws=r("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ls=r("CaptionsOff",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fa=r("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bs=r("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cs=r("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ss=r("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Is=r("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ps=r("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const As=r("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qs=r("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zs=r("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const js=r("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hs=r("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ts=r("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vs=r("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fs=r("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ds=r("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rs=r("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const an=r("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bs=r("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Es=r("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Os=r("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Us=r("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ns=r("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zs=r("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ws=r("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jn=r("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _s=r("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gs=r("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xs=r("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ks=r("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $s=r("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qs=r("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ys=r("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Js=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e0=r("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t0=r("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const er=r("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a0=r("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n0=r("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r0=r("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o0=r("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i0=r("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c0=r("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l0=r("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s0=r("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d0=r("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h0=r("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u0=r("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y0=r("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p0=r("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k0=r("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m0=r("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f0=r("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g0=r("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v0=r("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M0=r("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x0=r("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ga=r("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tr=r("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const va=r("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ma=r("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w0=r("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L0=r("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b0=r("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C0=r("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S0=r("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I0=r("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P0=r("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A0=r("ClipboardMinus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q0=r("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xa=r("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wa=r("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z0=r("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j0=r("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H0=r("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T0=r("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V0=r("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F0=r("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D0=r("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R0=r("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B0=r("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E0=r("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O0=r("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U0=r("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N0=r("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z0=r("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W0=r("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _0=r("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G0=r("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X0=r("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K0=r("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $0=r("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q0=r("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y0=r("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J0=r("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ed=r("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const td=r("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ad=r("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nd=r("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rd=r("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const od=r("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const id=r("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cd=r("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ld=r("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sd=r("Clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dd=r("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hd=r("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const La=r("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ar=r("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ud=r("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yd=r("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pd=r("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kd=r("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const md=r("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ba=r("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ca=r("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fd=r("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gd=r("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vd=r("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Md=r("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xd=r("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wd=r("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ld=r("ConciergeBell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bd=r("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cd=r("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sd=r("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Id=r("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pd=r("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ad=r("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qd=r("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zd=r("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jd=r("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hd=r("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Td=r("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vd=r("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fd=r("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dd=r("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rd=r("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bd=r("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ed=r("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Od=r("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ud=r("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nd=r("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zd=r("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wd=r("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _d=r("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gd=r("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xd=r("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kd=r("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $d=r("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qd=r("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yd=r("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jd=r("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eh=r("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const th=r("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ah=r("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nh=r("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rh=r("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oh=r("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ih=r("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ch=r("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lh=r("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sh=r("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dh=r("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hh=r("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uh=r("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yh=r("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ph=r("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kh=r("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mh=r("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fh=r("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gh=r("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vh=r("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mh=r("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xh=r("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wh=r("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lh=r("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bh=r("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ch=r("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sh=r("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ih=r("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ph=r("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ah=r("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qh=r("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zh=r("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jh=r("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hh=r("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Th=r("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sa=r("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vh=r("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fh=r("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dh=r("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rh=r("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bh=r("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Eh=r("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oh=r("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uh=r("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nh=r("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zh=r("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wh=r("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _h=r("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gh=r("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xh=r("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kh=r("EarthLock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ia=r("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $h=r("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qh=r("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yh=r("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jh=r("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eu=r("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pa=r("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tu=r("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const au=r("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nu=r("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ru=r("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nr=r("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ou=r("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iu=r("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cu=r("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lu=r("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const su=r("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const du=r("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hu=r("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uu=r("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yu=r("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pu=r("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ku=r("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mu=r("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fu=r("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Aa=r("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gu=r("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vu=r("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mu=r("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xu=r("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wu=r("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lu=r("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bu=r("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cu=r("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Su=r("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Iu=r("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qa=r("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pu=r("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Au=r("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qu=r("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zu=r("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ju=r("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hu=r("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tu=r("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vu=r("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fu=r("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Du=r("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ru=r("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bu=r("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Eu=r("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ou=r("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uu=r("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nu=r("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zu=r("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const za=r("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ja=r("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wu=r("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _u=r("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gu=r("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xu=r("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ku=r("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $u=r("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qu=r("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yu=r("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ju=r("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ey=r("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ty=r("FileSymlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ay=r("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ny=r("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ry=r("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oy=r("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iy=r("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cy=r("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ly=r("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sy=r("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dy=r("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hy=r("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uy=r("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yy=r("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const py=r("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ky=r("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const my=r("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fy=r("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gy=r("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vy=r("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const My=r("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xy=r("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wy=r("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ly=r("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const by=r("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cy=r("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sy=r("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Iy=r("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Py=r("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ay=r("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qy=r("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zy=r("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jy=r("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hy=r("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ty=r("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vy=r("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fy=r("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dy=r("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ry=r("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const By=r("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ey=r("Flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oy=r("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uy=r("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ny=r("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zy=r("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wy=r("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _y=r("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gy=r("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ha=r("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xy=r("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ky=r("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $y=r("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qy=r("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yy=r("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jy=r("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ep=r("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tp=r("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ap=r("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const np=r("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rp=r("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const op=r("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ip=r("FolderOutput",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ta=r("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cp=r("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lp=r("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sp=r("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dp=r("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hp=r("FolderSymlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const up=r("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yp=r("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pp=r("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kp=r("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mp=r("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fp=r("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gp=r("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vp=r("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mp=r("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xp=r("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wp=r("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lp=r("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bp=r("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cp=r("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sp=r("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ip=r("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pp=r("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ap=r("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qp=r("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zp=r("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jp=r("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hp=r("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tp=r("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const et=r("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vp=r("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fp=r("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dp=r("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rp=r("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bp=r("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ep=r("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Op=r("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Up=r("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Np=r("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Va=r("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zp=r("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wp=r("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _p=r("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gp=r("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xp=r("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kp=r("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $p=r("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qp=r("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yp=r("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jp=r("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ek=r("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tk=r("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rr=r("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ak=r("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nk=r("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rk=r("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ok=r("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ik=r("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ck=r("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lk=r("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sk=r("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dk=r("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fa=r("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tt=r("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hk=r("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uk=r("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yk=r("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pk=r("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kk=r("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mk=r("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fk=r("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gk=r("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Da=r("HandHelping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vk=r("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mk=r("HandPlatter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xk=r("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wk=r("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lk=r("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bk=r("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ck=r("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sk=r("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ik=r("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pk=r("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ak=r("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qk=r("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zk=r("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jk=r("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hk=r("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tk=r("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vk=r("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fk=r("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dk=r("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rk=r("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bk=r("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ek=r("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ok=r("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uk=r("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nk=r("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zk=r("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wk=r("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _k=r("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gk=r("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xk=r("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kk=r("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $k=r("HopOff",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qk=r("Hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yk=r("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jk=r("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e4=r("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t4=r("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a4=r("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n4=r("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r4=r("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o4=r("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i4=r("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c4=r("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l4=r("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s4=r("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d4=r("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h4=r("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u4=r("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y4=r("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p4=r("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k4=r("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m4=r("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f4=r("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g4=r("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v4=r("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M4=r("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x4=r("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ra=r("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ba=r("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w4=r("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L4=r("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b4=r("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C4=r("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S4=r("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I4=r("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P4=r("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A4=r("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q4=r("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z4=r("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j4=r("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H4=r("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T4=r("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V4=r("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F4=r("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D4=r("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R4=r("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B4=r("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E4=r("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O4=r("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U4=r("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N4=r("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z4=r("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W4=r("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _4=r("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G4=r("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X4=r("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K4=r("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $4=r("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q4=r("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y4=r("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J4=r("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e5=r("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t5=r("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a5=r("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n5=r("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r5=r("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o5=r("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i5=r("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c5=r("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l5=r("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s5=r("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d5=r("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h5=r("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u5=r("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y5=r("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p5=r("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k5=r("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m5=r("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f5=r("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g5=r("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v5=r("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M5=r("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x5=r("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w5=r("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L5=r("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b5=r("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C5=r("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S5=r("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I5=r("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P5=r("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A5=r("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q5=r("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z5=r("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j5=r("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H5=r("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T5=r("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V5=r("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F5=r("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D5=r("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R5=r("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B5=r("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E5=r("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O5=r("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U5=r("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N5=r("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z5=r("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W5=r("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _5=r("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const or=r("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G5=r("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X5=r("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K5=r("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $5=r("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q5=r("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y5=r("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J5=r("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e3=r("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t3=r("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a3=r("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n3=r("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r3=r("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o3=r("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i3=r("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c3=r("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ir=r("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l3=r("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s3=r("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d3=r("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h3=r("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u3=r("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y3=r("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p3=r("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k3=r("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m3=r("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f3=r("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g3=r("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v3=r("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M3=r("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x3=r("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w3=r("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L3=r("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b3=r("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C3=r("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S3=r("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I3=r("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P3=r("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A3=r("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q3=r("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z3=r("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j3=r("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H3=r("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T3=r("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V3=r("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F3=r("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D3=r("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R3=r("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B3=r("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E3=r("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O3=r("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U3=r("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N3=r("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z3=r("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W3=r("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _3=r("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G3=r("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X3=r("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K3=r("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $3=r("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q3=r("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y3=r("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J3=r("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const em=r("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tm=r("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const am=r("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nm=r("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rm=r("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const om=r("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const im=r("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cm=r("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nn=r("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lm=r("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sm=r("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dm=r("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hm=r("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const um=r("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ym=r("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pm=r("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ea=r("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const km=r("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mm=r("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Oa=r("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fm=r("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gm=r("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vm=r("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mm=r("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xm=r("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wm=r("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lm=r("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bm=r("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cm=r("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sm=r("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Im=r("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pm=r("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Am=r("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qm=r("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zm=r("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jm=r("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hm=r("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tm=r("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vm=r("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fm=r("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dm=r("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rm=r("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bm=r("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Em=r("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Om=r("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Um=r("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nm=r("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zm=r("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wm=r("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _m=r("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gm=r("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xm=r("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Km=r("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $m=r("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qm=r("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ym=r("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jm=r("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ef=r("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tf=r("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const af=r("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nf=r("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rf=r("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const of=r("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cf=r("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lf=r("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sf=r("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const df=r("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hf=r("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uf=r("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yf=r("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pf=r("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ua=r("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kf=r("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mf=r("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Na=r("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Za=r("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wa=r("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _a=r("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ff=r("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ga=r("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gf=r("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vf=r("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mf=r("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xa=r("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xf=r("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wf=r("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lf=r("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bf=r("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ka=r("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cf=r("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sf=r("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const If=r("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pf=r("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Af=r("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qf=r("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zf=r("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jf=r("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hf=r("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tf=r("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vf=r("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ff=r("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Df=r("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $a=r("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rf=r("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qa=r("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bf=r("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ef=r("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Of=r("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uf=r("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nf=r("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zf=r("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wf=r("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _f=r("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gf=r("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xf=r("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kf=r("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $f=r("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qf=r("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yf=r("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jf=r("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cr=r("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e6=r("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t6=r("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a6=r("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n6=r("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r6=r("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o6=r("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i6=r("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c6=r("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l6=r("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s6=r("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d6=r("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h6=r("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u6=r("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y6=r("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p6=r("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k6=r("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m6=r("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f6=r("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g6=r("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v6=r("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M6=r("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x6=r("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w6=r("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L6=r("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b6=r("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C6=r("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S6=r("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I6=r("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P6=r("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A6=r("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q6=r("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z6=r("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j6=r("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H6=r("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T6=r("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V6=r("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F6=r("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D6=r("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R6=r("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B6=r("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E6=r("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O6=r("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U6=r("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N6=r("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z6=r("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W6=r("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _6=r("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G6=r("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X6=r("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K6=r("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $6=r("Radical",[["path",{d:"M3 12h4l3 9 4-17h7",key:"bpxjrx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q6=r("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y6=r("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J6=r("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e8=r("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t8=r("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a8=r("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n8=r("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r8=r("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o8=r("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i8=r("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c8=r("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l8=r("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s8=r("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d8=r("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h8=r("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u8=r("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y8=r("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p8=r("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k8=r("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m8=r("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f8=r("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g8=r("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v8=r("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M8=r("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x8=r("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w8=r("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L8=r("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b8=r("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C8=r("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S8=r("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I8=r("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P8=r("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A8=r("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q8=r("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z8=r("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j8=r("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H8=r("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T8=r("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V8=r("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F8=r("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D8=r("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R8=r("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ya=r("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B8=r("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E8=r("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O8=r("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U8=r("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N8=r("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ja=r("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e1=r("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z8=r("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W8=r("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _8=r("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G8=r("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X8=r("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K8=r("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $8=r("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q8=r("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y8=r("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J8=r("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eg=r("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t1=r("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tg=r("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ag=r("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ng=r("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rg=r("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const og=r("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ig=r("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cg=r("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lg=r("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sg=r("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dg=r("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hg=r("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ug=r("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yg=r("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pg=r("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kg=r("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mg=r("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fg=r("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gg=r("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vg=r("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mg=r("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xg=r("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wg=r("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lg=r("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bg=r("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cg=r("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a1=r("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sg=r("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lr=r("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ig=r("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pg=r("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ag=r("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qg=r("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zg=r("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jg=r("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hg=r("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tg=r("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vg=r("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fg=r("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dg=r("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rg=r("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bg=r("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Eg=r("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Og=r("ShieldBan",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ug=r("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ng=r("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zg=r("ShieldHalf",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wg=r("ShieldMinus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _g=r("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gg=r("ShieldPlus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xg=r("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n1=r("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kg=r("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $g=r("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qg=r("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yg=r("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jg=r("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ev=r("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tv=r("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const av=r("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nv=r("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rv=r("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ov=r("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iv=r("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cv=r("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lv=r("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sv=r("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dv=r("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hv=r("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uv=r("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yv=r("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pv=r("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kv=r("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mv=r("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fv=r("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gv=r("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vv=r("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mv=r("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r1=r("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xv=r("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wv=r("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lv=r("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bv=r("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Cv=r("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Sv=r("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Iv=r("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Pv=r("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Av=r("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qv=r("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zv=r("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jv=r("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Hv=r("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Tv=r("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Vv=r("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Fv=r("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o1=r("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Dv=r("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Rv=r("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Bv=r("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ev=r("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ov=r("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Uv=r("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Nv=r("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Zv=r("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Wv=r("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _v=r("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Gv=r("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Xv=r("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Ie=r("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Kv=r("SquareRadical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $v=r("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i1=r("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c1=r("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Qv=r("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Yv=r("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Jv=r("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e7=r("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t7=r("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a7=r("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n7=r("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r7=r("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o7=r("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i7=r("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c7=r("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l7=r("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s7=r("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d7=r("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h7=r("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u7=r("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y7=r("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p7=r("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k7=r("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m7=r("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f7=r("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g7=r("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rn=r("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v7=r("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M7=r("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x7=r("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w7=r("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L7=r("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b7=r("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C7=r("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S7=r("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I7=r("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P7=r("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A7=r("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q7=r("TableCellsSplit",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z7=r("TableColumnsSplit",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j7=r("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H7=r("TableRowsSplit",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T7=r("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V7=r("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F7=r("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D7=r("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R7=r("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B7=r("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E7=r("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O7=r("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U7=r("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N7=r("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z7=r("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W7=r("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _7=r("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G7=r("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X7=r("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K7=r("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $7=r("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q7=r("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y7=r("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J7=r("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const eM=r("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tM=r("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const aM=r("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nM=r("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rM=r("TextSearch",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l1=r("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const oM=r("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const iM=r("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cM=r("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lM=r("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sM=r("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dM=r("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hM=r("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uM=r("TicketCheck",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yM=r("TicketMinus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const pM=r("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kM=r("TicketPlus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mM=r("TicketSlash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fM=r("TicketX",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gM=r("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vM=r("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const MM=r("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xM=r("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wM=r("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const LM=r("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const bM=r("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const CM=r("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const SM=r("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const IM=r("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const PM=r("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const AM=r("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const qM=r("Tractor",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const zM=r("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const jM=r("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const HM=r("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const TM=r("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s1=r("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const VM=r("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const FM=r("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const DM=r("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const RM=r("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const BM=r("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const EM=r("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const OM=r("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const UM=r("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const NM=r("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ZM=r("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const WM=r("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _M=r("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const GM=r("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const XM=r("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const KM=r("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $M=r("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const QM=r("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const YM=r("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const JM=r("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const e9=r("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const t9=r("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const a9=r("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const n9=r("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const r9=r("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const o9=r("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const i9=r("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c9=r("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const l9=r("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const s9=r("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d9=r("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h9=r("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u9=r("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y9=r("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p9=r("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k9=r("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m9=r("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const f9=r("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const g9=r("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v9=r("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const d1=r("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const h1=r("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u1=r("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y1=r("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const M9=r("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const p1=r("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const k1=r("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x9=r("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w9=r("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const L9=r("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const m1=r("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const b9=r("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const C9=r("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S9=r("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I9=r("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P9=r("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A9=r("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q9=r("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z9=r("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const j9=r("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H9=r("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T9=r("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V9=r("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F9=r("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const D9=r("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R9=r("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B9=r("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const E9=r("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O9=r("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U9=r("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N9=r("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z9=r("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W9=r("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _9=r("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G9=r("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X9=r("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const K9=r("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $9=r("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Q9=r("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y9=r("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J9=r("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ex=r("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const tx=r("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ax=r("WebhookOff",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const nx=r("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const rx=r("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ox=r("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ix=r("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const cx=r("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const lx=r("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const sx=r("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const dx=r("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const hx=r("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ux=r("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yx=r("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const px=r("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const kx=r("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const mx=r("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const fx=r("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const gx=r("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const on=r("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const vx=r("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Mx=r("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const xx=r("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const wx=r("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Lx=r("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const uB=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Co,AArrowUp:So,ALargeSmall:Io,Accessibility:Po,Activity:qo,ActivitySquare:Ao,AirVent:zo,Airplay:jo,AlarmClock:To,AlarmClockCheck:ta,AlarmClockMinus:aa,AlarmClockOff:Ho,AlarmClockPlus:na,AlarmSmoke:Vo,Album:Fo,AlertCircle:Do,AlertOctagon:Ro,AlertTriangle:Bo,AlignCenter:Uo,AlignCenterHorizontal:Eo,AlignCenterVertical:Oo,AlignEndHorizontal:No,AlignEndVertical:Zo,AlignHorizontalDistributeCenter:Wo,AlignHorizontalDistributeEnd:_o,AlignHorizontalDistributeStart:Go,AlignHorizontalJustifyCenter:Xo,AlignHorizontalJustifyEnd:Ko,AlignHorizontalJustifyStart:$o,AlignHorizontalSpaceAround:Qo,AlignHorizontalSpaceBetween:Yo,AlignJustify:Jo,AlignLeft:ei,AlignRight:ti,AlignStartHorizontal:ai,AlignStartVertical:ni,AlignVerticalDistributeCenter:ri,AlignVerticalDistributeEnd:oi,AlignVerticalDistributeStart:ii,AlignVerticalJustifyCenter:ci,AlignVerticalJustifyEnd:li,AlignVerticalJustifyStart:si,AlignVerticalSpaceAround:di,AlignVerticalSpaceBetween:hi,Ambulance:ui,Ampersand:yi,Ampersands:pi,Anchor:ki,Angry:mi,Annoyed:fi,Antenna:gi,Anvil:vi,Aperture:Mi,AppWindow:xi,Apple:wi,Archive:Ci,ArchiveRestore:Li,ArchiveX:bi,AreaChart:Si,Armchair:Ii,ArrowBigDown:Ai,ArrowBigDownDash:Pi,ArrowBigLeft:zi,ArrowBigLeftDash:qi,ArrowBigRight:Hi,ArrowBigRightDash:ji,ArrowBigUp:Vi,ArrowBigUpDash:Ti,ArrowDown:Ji,ArrowDown01:Fi,ArrowDown10:Di,ArrowDownAZ:ra,ArrowDownCircle:Ri,ArrowDownFromLine:Bi,ArrowDownLeft:Ni,ArrowDownLeftFromCircle:Ei,ArrowDownLeftFromSquare:Oi,ArrowDownLeftSquare:Ui,ArrowDownNarrowWide:Zi,ArrowDownRight:Xi,ArrowDownRightFromCircle:Wi,ArrowDownRightFromSquare:_i,ArrowDownRightSquare:Gi,ArrowDownSquare:Ki,ArrowDownToDot:$i,ArrowDownToLine:Qi,ArrowDownUp:Yi,ArrowDownWideNarrow:oa,ArrowDownZA:ia,ArrowLeft:o2,ArrowLeftCircle:e2,ArrowLeftFromLine:t2,ArrowLeftRight:a2,ArrowLeftSquare:n2,ArrowLeftToLine:r2,ArrowRight:h2,ArrowRightCircle:i2,ArrowRightFromLine:c2,ArrowRightLeft:l2,ArrowRightSquare:s2,ArrowRightToLine:d2,ArrowUp:A2,ArrowUp01:u2,ArrowUp10:y2,ArrowUpAZ:ca,ArrowUpCircle:p2,ArrowUpDown:k2,ArrowUpFromDot:m2,ArrowUpFromLine:f2,ArrowUpLeft:x2,ArrowUpLeftFromCircle:g2,ArrowUpLeftFromSquare:v2,ArrowUpLeftSquare:M2,ArrowUpNarrowWide:la,ArrowUpRight:C2,ArrowUpRightFromCircle:w2,ArrowUpRightFromSquare:L2,ArrowUpRightSquare:b2,ArrowUpSquare:S2,ArrowUpToLine:I2,ArrowUpWideNarrow:P2,ArrowUpZA:sa,ArrowsUpFromLine:q2,Asterisk:z2,AsteriskSquare:da,AtSign:j2,Atom:H2,AudioLines:T2,AudioWaveform:V2,Award:F2,Axe:D2,Axis3d:ha,Baby:R2,Backpack:B2,Badge:tc,BadgeAlert:E2,BadgeCent:O2,BadgeCheck:ua,BadgeDollarSign:U2,BadgeEuro:N2,BadgeHelp:Z2,BadgeIndianRupee:W2,BadgeInfo:_2,BadgeJapaneseYen:G2,BadgeMinus:X2,BadgePercent:K2,BadgePlus:$2,BadgePoundSterling:Q2,BadgeRussianRuble:Y2,BadgeSwissFranc:J2,BadgeX:ec,BaggageClaim:ac,Ban:nc,Banana:rc,Banknote:oc,BarChart:uc,BarChart2:ic,BarChart3:cc,BarChart4:lc,BarChartBig:sc,BarChartHorizontal:hc,BarChartHorizontalBig:dc,Barcode:yc,Baseline:pc,Bath:kc,Battery:xc,BatteryCharging:mc,BatteryFull:fc,BatteryLow:gc,BatteryMedium:vc,BatteryWarning:Mc,Beaker:wc,Bean:bc,BeanOff:Lc,Bed:Ic,BedDouble:Cc,BedSingle:Sc,Beef:Pc,Beer:Ac,Bell:Fc,BellDot:qc,BellElectric:zc,BellMinus:jc,BellOff:Hc,BellPlus:Tc,BellRing:Vc,BetweenHorizontalEnd:ya,BetweenHorizontalStart:pa,BetweenVerticalEnd:Dc,BetweenVerticalStart:Rc,Bike:Bc,Binary:Ec,Biohazard:Oc,Bird:Uc,Bitcoin:Nc,Blend:Zc,Blinds:Wc,Blocks:_c,Bluetooth:$c,BluetoothConnected:Gc,BluetoothOff:Xc,BluetoothSearching:Kc,Bold:Qc,Bolt:Yc,Bomb:Jc,Bone:el,Book:Ll,BookA:tl,BookAudio:al,BookCheck:nl,BookCopy:rl,BookDashed:ka,BookDown:ol,BookHeadphones:il,BookHeart:cl,BookImage:ll,BookKey:sl,BookLock:dl,BookMarked:hl,BookMinus:ul,BookOpen:kl,BookOpenCheck:yl,BookOpenText:pl,BookPlus:ml,BookText:fl,BookType:gl,BookUp:Ml,BookUp2:vl,BookUser:xl,BookX:wl,Bookmark:Pl,BookmarkCheck:bl,BookmarkMinus:Cl,BookmarkPlus:Sl,BookmarkX:Il,BoomBox:Al,Bot:zl,BotMessageSquare:ql,Box:Hl,BoxSelect:jl,Boxes:Tl,Braces:ma,Brackets:Vl,Brain:Rl,BrainCircuit:Fl,BrainCog:Dl,BrickWall:Bl,Briefcase:El,BringToFront:Ol,Brush:Ul,Bug:Wl,BugOff:Nl,BugPlay:Zl,Building:Gl,Building2:_l,Bus:Kl,BusFront:Xl,Cable:Ql,CableCar:$l,Cake:Jl,CakeSlice:Yl,Calculator:es,Calendar:ms,CalendarCheck:as,CalendarCheck2:ts,CalendarClock:ns,CalendarDays:rs,CalendarFold:os,CalendarHeart:is,CalendarMinus:ls,CalendarMinus2:cs,CalendarOff:ss,CalendarPlus:hs,CalendarPlus2:ds,CalendarRange:us,CalendarSearch:ys,CalendarX:ks,CalendarX2:ps,Camera:gs,CameraOff:fs,CandlestickChart:vs,Candy:ws,CandyCane:Ms,CandyOff:xs,Captions:fa,CaptionsOff:Ls,Car:Ss,CarFront:bs,CarTaxiFront:Cs,Caravan:Is,Carrot:Ps,CaseLower:As,CaseSensitive:qs,CaseUpper:zs,CassetteTape:js,Cast:Hs,Castle:Ts,Cat:Vs,Cctv:Fs,Check:Os,CheckCheck:Ds,CheckCircle:an,CheckCircle2:Rs,CheckSquare:Es,CheckSquare2:Bs,ChefHat:Us,Cherry:Ns,ChevronDown:Jn,ChevronDownCircle:Zs,ChevronDownSquare:Ws,ChevronFirst:_s,ChevronLast:Gs,ChevronLeft:$s,ChevronLeftCircle:Xs,ChevronLeftSquare:Ks,ChevronRight:Js,ChevronRightCircle:Qs,ChevronRightSquare:Ys,ChevronUp:er,ChevronUpCircle:e0,ChevronUpSquare:t0,ChevronsDown:n0,ChevronsDownUp:a0,ChevronsLeft:o0,ChevronsLeftRight:r0,ChevronsRight:c0,ChevronsRightLeft:i0,ChevronsUp:s0,ChevronsUpDown:l0,Chrome:d0,Church:h0,Cigarette:y0,CigaretteOff:u0,Circle:w0,CircleDashed:p0,CircleDollarSign:k0,CircleDot:f0,CircleDotDashed:m0,CircleEllipsis:g0,CircleEqual:v0,CircleFadingPlus:M0,CircleOff:x0,CircleSlash:tr,CircleSlash2:ga,CircleUser:Ma,CircleUserRound:va,CircuitBoard:L0,Citrus:b0,Clapperboard:C0,Clipboard:T0,ClipboardCheck:S0,ClipboardCopy:I0,ClipboardList:P0,ClipboardMinus:A0,ClipboardPaste:q0,ClipboardPen:wa,ClipboardPenLine:xa,ClipboardPlus:z0,ClipboardType:j0,ClipboardX:H0,Clock:G0,Clock1:V0,Clock10:F0,Clock11:D0,Clock12:R0,Clock2:B0,Clock3:E0,Clock4:O0,Clock5:U0,Clock6:N0,Clock7:Z0,Clock8:W0,Clock9:_0,Cloud:cd,CloudCog:X0,CloudDrizzle:K0,CloudFog:$0,CloudHail:Q0,CloudLightning:Y0,CloudMoon:ed,CloudMoonRain:J0,CloudOff:td,CloudRain:nd,CloudRainWind:ad,CloudSnow:rd,CloudSun:id,CloudSunRain:od,Cloudy:ld,Clover:sd,Club:dd,Code:ar,Code2:hd,CodeSquare:La,Codepen:ud,Codesandbox:yd,Coffee:pd,Cog:kd,Coins:md,Columns2:ba,Columns3:Ca,Columns4:fd,Combine:gd,Command:vd,Compass:Md,Component:xd,Computer:wd,ConciergeBell:Ld,Cone:bd,Construction:Cd,Contact:Id,Contact2:Sd,Container:Pd,Contrast:Ad,Cookie:qd,CookingPot:zd,Copy:Dd,CopyCheck:jd,CopyMinus:Hd,CopyPlus:Td,CopySlash:Vd,CopyX:Fd,Copyleft:Rd,Copyright:Bd,CornerDownLeft:Ed,CornerDownRight:Od,CornerLeftDown:Ud,CornerLeftUp:Nd,CornerRightDown:Zd,CornerRightUp:Wd,CornerUpLeft:_d,CornerUpRight:Gd,Cpu:Xd,CreativeCommons:Kd,CreditCard:$d,Croissant:Qd,Crop:Yd,Cross:Jd,Crosshair:eh,Crown:th,Cuboid:ah,CupSoda:nh,Currency:rh,Cylinder:oh,Database:lh,DatabaseBackup:ih,DatabaseZap:ch,Delete:sh,Dessert:dh,Diameter:hh,Diamond:uh,Dice1:yh,Dice2:ph,Dice3:kh,Dice4:mh,Dice5:fh,Dice6:gh,Dices:vh,Diff:Mh,Disc:bh,Disc2:xh,Disc3:wh,DiscAlbum:Lh,Divide:Ih,DivideCircle:Ch,DivideSquare:Sh,Dna:Ah,DnaOff:Ph,Dog:qh,DollarSign:zh,Donut:jh,DoorClosed:Hh,DoorOpen:Th,Dot:Vh,DotSquare:Sa,Download:Dh,DownloadCloud:Fh,DraftingCompass:Rh,Drama:Bh,Dribbble:Eh,Drill:Oh,Droplet:Uh,Droplets:Nh,Drum:Zh,Drumstick:Wh,Dumbbell:_h,Ear:Xh,EarOff:Gh,Earth:Ia,EarthLock:Kh,Eclipse:$h,Egg:Jh,EggFried:Qh,EggOff:Yh,Equal:tu,EqualNot:eu,EqualSquare:Pa,Eraser:au,Euro:nu,Expand:ru,ExternalLink:nr,Eye:iu,EyeOff:ou,Facebook:cu,Factory:lu,Fan:su,FastForward:du,Feather:hu,Fence:uu,FerrisWheel:yu,Figma:pu,File:py,FileArchive:ku,FileAudio:fu,FileAudio2:mu,FileAxis3d:Aa,FileBadge:vu,FileBadge2:gu,FileBarChart:xu,FileBarChart2:Mu,FileBox:wu,FileCheck:bu,FileCheck2:Lu,FileClock:Cu,FileCode:Iu,FileCode2:Su,FileCog:qa,FileDiff:Pu,FileDigit:Au,FileDown:qu,FileHeart:zu,FileImage:ju,FileInput:Hu,FileJson:Vu,FileJson2:Tu,FileKey:Du,FileKey2:Fu,FileLineChart:Ru,FileLock:Eu,FileLock2:Bu,FileMinus:Uu,FileMinus2:Ou,FileMusic:Nu,FileOutput:Zu,FilePen:ja,FilePenLine:za,FilePieChart:Wu,FilePlus:Gu,FilePlus2:_u,FileQuestion:Xu,FileScan:Ku,FileSearch:Qu,FileSearch2:$u,FileSliders:Yu,FileSpreadsheet:Ju,FileStack:ey,FileSymlink:ty,FileTerminal:ay,FileText:ny,FileType:oy,FileType2:ry,FileUp:iy,FileVideo:ly,FileVideo2:cy,FileVolume:dy,FileVolume2:sy,FileWarning:hy,FileX:yy,FileX2:uy,Files:ky,Film:my,Filter:gy,FilterX:fy,Fingerprint:vy,FireExtinguisher:My,Fish:Ly,FishOff:xy,FishSymbol:wy,Flag:Iy,FlagOff:by,FlagTriangleLeft:Cy,FlagTriangleRight:Sy,Flame:Ay,FlameKindling:Py,Flashlight:zy,FlashlightOff:qy,FlaskConical:Hy,FlaskConicalOff:jy,FlaskRound:Ty,FlipHorizontal:Fy,FlipHorizontal2:Vy,FlipVertical:Ry,FlipVertical2:Dy,Flower:Ey,Flower2:By,Focus:Oy,FoldHorizontal:Uy,FoldVertical:Ny,Folder:mp,FolderArchive:Zy,FolderCheck:Wy,FolderClock:_y,FolderClosed:Gy,FolderCog:Ha,FolderDot:Xy,FolderDown:Ky,FolderGit:Qy,FolderGit2:$y,FolderHeart:Yy,FolderInput:Jy,FolderKanban:ep,FolderKey:tp,FolderLock:ap,FolderMinus:np,FolderOpen:op,FolderOpenDot:rp,FolderOutput:ip,FolderPen:Ta,FolderPlus:cp,FolderRoot:lp,FolderSearch:dp,FolderSearch2:sp,FolderSymlink:hp,FolderSync:up,FolderTree:yp,FolderUp:pp,FolderX:kp,Folders:fp,Footprints:gp,Forklift:vp,FormInput:Mp,Forward:xp,Frame:wp,Framer:Lp,Frown:bp,Fuel:Cp,Fullscreen:Sp,FunctionSquare:Ip,GalleryHorizontal:Ap,GalleryHorizontalEnd:Pp,GalleryThumbnails:qp,GalleryVertical:jp,GalleryVerticalEnd:zp,Gamepad:Tp,Gamepad2:Hp,GanttChart:Vp,GanttChartSquare:et,Gauge:Dp,GaugeCircle:Fp,Gavel:Rp,Gem:Bp,Ghost:Ep,Gift:Op,GitBranch:Np,GitBranchPlus:Up,GitCommitHorizontal:Va,GitCommitVertical:Zp,GitCompare:_p,GitCompareArrows:Wp,GitFork:Gp,GitGraph:Xp,GitMerge:Kp,GitPullRequest:tk,GitPullRequestArrow:$p,GitPullRequestClosed:Qp,GitPullRequestCreate:Jp,GitPullRequestCreateArrow:Yp,GitPullRequestDraft:ek,Github:rr,Gitlab:ak,GlassWater:nk,Glasses:rk,Globe:ik,GlobeLock:ok,Goal:ck,Grab:lk,GraduationCap:sk,Grape:dk,Grid2x2:Fa,Grid3x3:tt,Grip:yk,GripHorizontal:hk,GripVertical:uk,Group:pk,Guitar:kk,Hammer:mk,Hand:xk,HandCoins:fk,HandHeart:gk,HandHelping:Da,HandMetal:vk,HandPlatter:Mk,Handshake:wk,HardDrive:Ck,HardDriveDownload:Lk,HardDriveUpload:bk,HardHat:Sk,Hash:Ik,Haze:Pk,HdmiPort:Ak,Heading:Fk,Heading1:qk,Heading2:zk,Heading3:jk,Heading4:Hk,Heading5:Tk,Heading6:Vk,Headphones:Dk,Headset:Rk,Heart:Nk,HeartCrack:Bk,HeartHandshake:Ek,HeartOff:Ok,HeartPulse:Uk,Heater:Zk,HelpCircle:Wk,Hexagon:_k,Highlighter:Gk,History:Xk,Home:Kk,Hop:Qk,HopOff:$k,Hotel:Yk,Hourglass:Jk,IceCream:t4,IceCream2:e4,Image:c4,ImageDown:a4,ImageMinus:n4,ImageOff:r4,ImagePlus:o4,ImageUp:i4,Images:l4,Import:s4,Inbox:d4,Indent:h4,IndianRupee:u4,Infinity:y4,Info:p4,InspectionPanel:k4,Instagram:m4,Italic:f4,IterationCcw:g4,IterationCw:v4,JapaneseYen:M4,Joystick:x4,Kanban:w4,KanbanSquare:Ba,KanbanSquareDashed:Ra,Key:C4,KeyRound:L4,KeySquare:b4,Keyboard:I4,KeyboardMusic:S4,Lamp:H4,LampCeiling:P4,LampDesk:A4,LampFloor:q4,LampWallDown:z4,LampWallUp:j4,LandPlot:T4,Landmark:V4,Languages:F4,Laptop:R4,Laptop2:D4,Lasso:E4,LassoSelect:B4,Laugh:O4,Layers:Z4,Layers2:U4,Layers3:N4,LayoutDashboard:W4,LayoutGrid:_4,LayoutList:G4,LayoutPanelLeft:X4,LayoutPanelTop:K4,LayoutTemplate:$4,Leaf:Q4,LeafyGreen:Y4,Library:t5,LibraryBig:J4,LibrarySquare:e5,LifeBuoy:a5,Ligature:n5,Lightbulb:o5,LightbulbOff:r5,LineChart:i5,Link:s5,Link2:l5,Link2Off:c5,Linkedin:d5,List:C5,ListChecks:h5,ListCollapse:u5,ListEnd:y5,ListFilter:p5,ListMinus:k5,ListMusic:m5,ListOrdered:f5,ListPlus:g5,ListRestart:v5,ListStart:M5,ListTodo:x5,ListTree:w5,ListVideo:L5,ListX:b5,Loader:I5,Loader2:S5,Locate:q5,LocateFixed:P5,LocateOff:A5,Lock:j5,LockKeyhole:z5,LogIn:H5,LogOut:T5,Lollipop:V5,Luggage:F5,MSquare:D5,Magnet:R5,Mail:or,MailCheck:B5,MailMinus:E5,MailOpen:O5,MailPlus:U5,MailQuestion:N5,MailSearch:Z5,MailWarning:W5,MailX:_5,Mailbox:G5,Mails:X5,Map:Y5,MapPin:$5,MapPinOff:K5,MapPinned:Q5,Martini:J5,Maximize:t3,Maximize2:e3,Medal:a3,Megaphone:r3,MegaphoneOff:n3,Meh:o3,MemoryStick:i3,Menu:ir,MenuSquare:c3,Merge:l3,MessageCircle:v3,MessageCircleCode:s3,MessageCircleDashed:d3,MessageCircleHeart:h3,MessageCircleMore:u3,MessageCircleOff:y3,MessageCirclePlus:p3,MessageCircleQuestion:k3,MessageCircleReply:m3,MessageCircleWarning:f3,MessageCircleX:g3,MessageSquare:T3,MessageSquareCode:M3,MessageSquareDashed:x3,MessageSquareDiff:w3,MessageSquareDot:L3,MessageSquareHeart:b3,MessageSquareMore:C3,MessageSquareOff:S3,MessageSquarePlus:I3,MessageSquareQuote:P3,MessageSquareReply:A3,MessageSquareShare:q3,MessageSquareText:z3,MessageSquareWarning:j3,MessageSquareX:H3,MessagesSquare:V3,Mic:R3,Mic2:F3,MicOff:D3,Microscope:B3,Microwave:E3,Milestone:O3,Milk:N3,MilkOff:U3,Minimize:W3,Minimize2:Z3,Minus:X3,MinusCircle:_3,MinusSquare:G3,Monitor:im,MonitorCheck:K3,MonitorDot:$3,MonitorDown:Q3,MonitorOff:Y3,MonitorPause:J3,MonitorPlay:em,MonitorSmartphone:tm,MonitorSpeaker:am,MonitorStop:nm,MonitorUp:rm,MonitorX:om,Moon:nn,MoonStar:cm,MoreHorizontal:lm,MoreVertical:sm,Mountain:hm,MountainSnow:dm,Mouse:mm,MousePointer:km,MousePointer2:um,MousePointerClick:ym,MousePointerSquare:Ea,MousePointerSquareDashed:pm,Move:Am,Move3d:Oa,MoveDiagonal:gm,MoveDiagonal2:fm,MoveDown:xm,MoveDownLeft:vm,MoveDownRight:Mm,MoveHorizontal:wm,MoveLeft:Lm,MoveRight:bm,MoveUp:Im,MoveUpLeft:Cm,MoveUpRight:Sm,MoveVertical:Pm,Music:Hm,Music2:qm,Music3:zm,Music4:jm,Navigation:Dm,Navigation2:Vm,Navigation2Off:Tm,NavigationOff:Fm,Network:Rm,Newspaper:Bm,Nfc:Em,Notebook:Zm,NotebookPen:Om,NotebookTabs:Um,NotebookText:Nm,NotepadText:_m,NotepadTextDashed:Wm,Nut:Xm,NutOff:Gm,Octagon:Km,Option:$m,Orbit:Qm,Outdent:Ym,Package:cf,Package2:Jm,PackageCheck:ef,PackageMinus:tf,PackageOpen:af,PackagePlus:nf,PackageSearch:rf,PackageX:of,PaintBucket:lf,PaintRoller:sf,Paintbrush:hf,Paintbrush2:df,Palette:uf,Palmtree:yf,PanelBottom:mf,PanelBottomClose:pf,PanelBottomDashed:Ua,PanelBottomOpen:kf,PanelLeft:_a,PanelLeftClose:Na,PanelLeftDashed:Za,PanelLeftOpen:Wa,PanelRight:vf,PanelRightClose:ff,PanelRightDashed:Ga,PanelRightOpen:gf,PanelTop:wf,PanelTopClose:Mf,PanelTopDashed:Xa,PanelTopOpen:xf,PanelsLeftBottom:Lf,PanelsRightBottom:bf,PanelsTopLeft:Ka,Paperclip:Cf,Parentheses:Sf,ParkingCircle:Pf,ParkingCircleOff:If,ParkingMeter:Af,ParkingSquare:zf,ParkingSquareOff:qf,PartyPopper:jf,Pause:Vf,PauseCircle:Hf,PauseOctagon:Tf,PawPrint:Ff,PcCase:Df,Pen:Qa,PenLine:$a,PenTool:Rf,Pencil:Of,PencilLine:Bf,PencilRuler:Ef,Pentagon:Uf,Percent:_f,PercentCircle:Nf,PercentDiamond:Zf,PercentSquare:Wf,PersonStanding:Gf,Phone:cr,PhoneCall:Xf,PhoneForwarded:Kf,PhoneIncoming:$f,PhoneMissed:Qf,PhoneOff:Yf,PhoneOutgoing:Jf,Pi:t6,PiSquare:e6,Piano:a6,Pickaxe:n6,PictureInPicture:o6,PictureInPicture2:r6,PieChart:i6,PiggyBank:c6,Pilcrow:s6,PilcrowSquare:l6,Pill:d6,Pin:u6,PinOff:h6,Pipette:y6,Pizza:p6,Plane:f6,PlaneLanding:k6,PlaneTakeoff:m6,Play:M6,PlayCircle:g6,PlaySquare:v6,Plug:b6,Plug2:x6,PlugZap:L6,PlugZap2:w6,Plus:I6,PlusCircle:C6,PlusSquare:S6,Pocket:A6,PocketKnife:P6,Podcast:q6,Pointer:j6,PointerOff:z6,Popcorn:H6,Popsicle:T6,PoundSterling:V6,Power:B6,PowerCircle:F6,PowerOff:D6,PowerSquare:R6,Presentation:E6,Printer:O6,Projector:U6,Puzzle:N6,Pyramid:Z6,QrCode:W6,Quote:_6,Rabbit:G6,Radar:X6,Radiation:K6,Radical:$6,Radio:J6,RadioReceiver:Q6,RadioTower:Y6,Radius:e8,RailSymbol:t8,Rainbow:a8,Rat:n8,Ratio:r8,Receipt:y8,ReceiptCent:o8,ReceiptEuro:i8,ReceiptIndianRupee:c8,ReceiptJapaneseYen:l8,ReceiptPoundSterling:s8,ReceiptRussianRuble:d8,ReceiptSwissFranc:h8,ReceiptText:u8,RectangleHorizontal:p8,RectangleVertical:k8,Recycle:m8,Redo:v8,Redo2:f8,RedoDot:g8,RefreshCcw:x8,RefreshCcwDot:M8,RefreshCw:L8,RefreshCwOff:w8,Refrigerator:b8,Regex:C8,RemoveFormatting:S8,Repeat:A8,Repeat1:I8,Repeat2:P8,Replace:z8,ReplaceAll:q8,Reply:H8,ReplyAll:j8,Rewind:T8,Ribbon:V8,Rocket:F8,RockingChair:D8,RollerCoaster:R8,Rotate3d:Ya,RotateCcw:B8,RotateCw:E8,Route:U8,RouteOff:O8,Router:N8,Rows2:Ja,Rows3:e1,Rows4:Z8,Rss:W8,Ruler:_8,RussianRuble:G8,Sailboat:X8,Salad:K8,Sandwich:$8,Satellite:Y8,SatelliteDish:Q8,Save:eg,SaveAll:J8,Scale:tg,Scale3d:t1,Scaling:ag,Scan:sg,ScanBarcode:ng,ScanEye:rg,ScanFace:og,ScanLine:ig,ScanSearch:cg,ScanText:lg,ScatterChart:dg,School:ug,School2:hg,Scissors:mg,ScissorsLineDashed:yg,ScissorsSquare:kg,ScissorsSquareDashedBottom:pg,ScreenShare:gg,ScreenShareOff:fg,Scroll:Mg,ScrollText:vg,Search:Cg,SearchCheck:xg,SearchCode:wg,SearchSlash:Lg,SearchX:bg,Send:lr,SendHorizontal:a1,SendToBack:Sg,SeparatorHorizontal:Ig,SeparatorVertical:Pg,Server:jg,ServerCog:Ag,ServerCrash:qg,ServerOff:zg,Settings:Tg,Settings2:Hg,Shapes:Vg,Share:Dg,Share2:Fg,Sheet:Rg,Shell:Bg,Shield:Kg,ShieldAlert:Eg,ShieldBan:Og,ShieldCheck:Ug,ShieldEllipsis:Ng,ShieldHalf:Zg,ShieldMinus:Wg,ShieldOff:_g,ShieldPlus:Gg,ShieldQuestion:Xg,ShieldX:n1,Ship:Qg,ShipWheel:$g,Shirt:Yg,ShoppingBag:Jg,ShoppingBasket:ev,ShoppingCart:tv,Shovel:av,ShowerHead:nv,Shrink:rv,Shrub:ov,Shuffle:iv,Sigma:lv,SigmaSquare:cv,Signal:yv,SignalHigh:sv,SignalLow:dv,SignalMedium:hv,SignalZero:uv,Signpost:kv,SignpostBig:pv,Siren:mv,SkipBack:fv,SkipForward:gv,Skull:vv,Slack:Mv,Slash:xv,SlashSquare:r1,Slice:wv,Sliders:bv,SlidersHorizontal:Lv,Smartphone:Iv,SmartphoneCharging:Cv,SmartphoneNfc:Sv,Smile:Av,SmilePlus:Pv,Snail:qv,Snowflake:zv,Sofa:jv,Soup:Hv,Space:Tv,Spade:Vv,Sparkle:Fv,Sparkles:o1,Speaker:Dv,Speech:Rv,SpellCheck:Ev,SpellCheck2:Bv,Spline:Ov,Split:Zv,SplitSquareHorizontal:Uv,SplitSquareVertical:Nv,SprayCan:Wv,Sprout:_v,Square:Qv,SquareDashedBottom:Xv,SquareDashedBottomCode:Gv,SquarePen:Ie,SquareRadical:Kv,SquareStack:$v,SquareUser:c1,SquareUserRound:i1,Squircle:Yv,Squirrel:Jv,Stamp:e7,Star:n7,StarHalf:t7,StarOff:a7,StepBack:r7,StepForward:o7,Stethoscope:i7,Sticker:c7,StickyNote:l7,StopCircle:s7,Store:d7,StretchHorizontal:h7,StretchVertical:u7,Strikethrough:y7,Subscript:p7,Sun:rn,SunDim:k7,SunMedium:m7,SunMoon:f7,SunSnow:g7,Sunrise:v7,Sunset:M7,Superscript:x7,SwatchBook:w7,SwissFranc:L7,SwitchCamera:b7,Sword:C7,Swords:S7,Syringe:I7,Table:T7,Table2:P7,TableCellsMerge:A7,TableCellsSplit:q7,TableColumnsSplit:z7,TableProperties:j7,TableRowsSplit:H7,Tablet:F7,TabletSmartphone:V7,Tablets:D7,Tag:R7,Tags:B7,Tally1:E7,Tally2:O7,Tally3:U7,Tally4:N7,Tally5:Z7,Tangent:W7,Target:_7,Telescope:G7,Tent:K7,TentTree:X7,Terminal:Q7,TerminalSquare:$7,TestTube:J7,TestTube2:Y7,TestTubes:eM,Text:oM,TextCursor:aM,TextCursorInput:tM,TextQuote:nM,TextSearch:rM,TextSelect:l1,Theater:iM,Thermometer:sM,ThermometerSnowflake:cM,ThermometerSun:lM,ThumbsDown:dM,ThumbsUp:hM,Ticket:gM,TicketCheck:uM,TicketMinus:yM,TicketPercent:pM,TicketPlus:kM,TicketSlash:mM,TicketX:fM,Timer:xM,TimerOff:vM,TimerReset:MM,ToggleLeft:wM,ToggleRight:LM,Tornado:bM,Torus:CM,Touchpad:IM,TouchpadOff:SM,TowerControl:PM,ToyBrick:AM,Tractor:qM,TrafficCone:zM,TrainFront:HM,TrainFrontTunnel:jM,TrainTrack:TM,TramFront:s1,Trash:FM,Trash2:VM,TreeDeciduous:DM,TreePine:RM,Trees:BM,Trello:EM,TrendingDown:OM,TrendingUp:UM,Triangle:ZM,TriangleRight:NM,Trophy:WM,Truck:_M,Turtle:GM,Tv:KM,Tv2:XM,Twitch:$M,Twitter:QM,Type:YM,Umbrella:e9,UmbrellaOff:JM,Underline:t9,Undo:r9,Undo2:a9,UndoDot:n9,UnfoldHorizontal:o9,UnfoldVertical:i9,Ungroup:c9,Unlink:s9,Unlink2:l9,Unlock:h9,UnlockKeyhole:d9,Unplug:u9,Upload:p9,UploadCloud:y9,Usb:k9,User:L9,UserCheck:m9,UserCog:f9,UserMinus:g9,UserPlus:v9,UserRound:k1,UserRoundCheck:d1,UserRoundCog:h1,UserRoundMinus:u1,UserRoundPlus:y1,UserRoundSearch:M9,UserRoundX:p1,UserSearch:x9,UserX:w9,Users:b9,UsersRound:m1,Utensils:S9,UtensilsCrossed:C9,UtilityPole:I9,Variable:P9,Vault:A9,Vegan:q9,VenetianMask:z9,Vibrate:H9,VibrateOff:j9,Video:V9,VideoOff:T9,Videotape:F9,View:D9,Voicemail:R9,Volume:U9,Volume1:B9,Volume2:E9,VolumeX:O9,Vote:N9,Wallet:_9,Wallet2:Z9,WalletCards:W9,Wallpaper:G9,Wand:K9,Wand2:X9,Warehouse:$9,WashingMachine:Q9,Watch:Y9,Waves:J9,Waypoints:ex,Webcam:tx,Webhook:nx,WebhookOff:ax,Weight:rx,Wheat:ix,WheatOff:ox,WholeWord:cx,Wifi:sx,WifiOff:lx,Wind:dx,Wine:ux,WineOff:hx,Workflow:yx,WrapText:px,Wrench:kx,X:on,XCircle:mx,XOctagon:fx,XSquare:gx,Youtube:vx,Zap:xx,ZapOff:Mx,ZoomIn:wx,ZoomOut:Lx},Symbol.toStringTag,{value:"Module"}));/**
* @license lucide-react v0.344.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const yB=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:Co,AArrowDownIcon:Co,AArrowUp:So,AArrowUpIcon:So,ALargeSmall:Io,ALargeSmallIcon:Io,Accessibility:Po,AccessibilityIcon:Po,Activity:qo,ActivityIcon:qo,ActivitySquare:Ao,ActivitySquareIcon:Ao,AirVent:zo,AirVentIcon:zo,Airplay:jo,AirplayIcon:jo,AlarmCheck:ta,AlarmCheckIcon:ta,AlarmClock:To,AlarmClockCheck:ta,AlarmClockCheckIcon:ta,AlarmClockIcon:To,AlarmClockMinus:aa,AlarmClockMinusIcon:aa,AlarmClockOff:Ho,AlarmClockOffIcon:Ho,AlarmClockPlus:na,AlarmClockPlusIcon:na,AlarmMinus:aa,AlarmMinusIcon:aa,AlarmPlus:na,AlarmPlusIcon:na,AlarmSmoke:Vo,AlarmSmokeIcon:Vo,Album:Fo,AlbumIcon:Fo,AlertCircle:Do,AlertCircleIcon:Do,AlertOctagon:Ro,AlertOctagonIcon:Ro,AlertTriangle:Bo,AlertTriangleIcon:Bo,AlignCenter:Uo,AlignCenterHorizontal:Eo,AlignCenterHorizontalIcon:Eo,AlignCenterIcon:Uo,AlignCenterVertical:Oo,AlignCenterVerticalIcon:Oo,AlignEndHorizontal:No,AlignEndHorizontalIcon:No,AlignEndVertical:Zo,AlignEndVerticalIcon:Zo,AlignHorizontalDistributeCenter:Wo,AlignHorizontalDistributeCenterIcon:Wo,AlignHorizontalDistributeEnd:_o,AlignHorizontalDistributeEndIcon:_o,AlignHorizontalDistributeStart:Go,AlignHorizontalDistributeStartIcon:Go,AlignHorizontalJustifyCenter:Xo,AlignHorizontalJustifyCenterIcon:Xo,AlignHorizontalJustifyEnd:Ko,AlignHorizontalJustifyEndIcon:Ko,AlignHorizontalJustifyStart:$o,AlignHorizontalJustifyStartIcon:$o,AlignHorizontalSpaceAround:Qo,AlignHorizontalSpaceAroundIcon:Qo,AlignHorizontalSpaceBetween:Yo,AlignHorizontalSpaceBetweenIcon:Yo,AlignJustify:Jo,AlignJustifyIcon:Jo,AlignLeft:ei,AlignLeftIcon:ei,AlignRight:ti,AlignRightIcon:ti,AlignStartHorizontal:ai,AlignStartHorizontalIcon:ai,AlignStartVertical:ni,AlignStartVerticalIcon:ni,AlignVerticalDistributeCenter:ri,AlignVerticalDistributeCenterIcon:ri,AlignVerticalDistributeEnd:oi,AlignVerticalDistributeEndIcon:oi,AlignVerticalDistributeStart:ii,AlignVerticalDistributeStartIcon:ii,AlignVerticalJustifyCenter:ci,AlignVerticalJustifyCenterIcon:ci,AlignVerticalJustifyEnd:li,AlignVerticalJustifyEndIcon:li,AlignVerticalJustifyStart:si,AlignVerticalJustifyStartIcon:si,AlignVerticalSpaceAround:di,AlignVerticalSpaceAroundIcon:di,AlignVerticalSpaceBetween:hi,AlignVerticalSpaceBetweenIcon:hi,Ambulance:ui,AmbulanceIcon:ui,Ampersand:yi,AmpersandIcon:yi,Ampersands:pi,AmpersandsIcon:pi,Anchor:ki,AnchorIcon:ki,Angry:mi,AngryIcon:mi,Annoyed:fi,AnnoyedIcon:fi,Antenna:gi,AntennaIcon:gi,Anvil:vi,AnvilIcon:vi,Aperture:Mi,ApertureIcon:Mi,AppWindow:xi,AppWindowIcon:xi,Apple:wi,AppleIcon:wi,Archive:Ci,ArchiveIcon:Ci,ArchiveRestore:Li,ArchiveRestoreIcon:Li,ArchiveX:bi,ArchiveXIcon:bi,AreaChart:Si,AreaChartIcon:Si,Armchair:Ii,ArmchairIcon:Ii,ArrowBigDown:Ai,ArrowBigDownDash:Pi,ArrowBigDownDashIcon:Pi,ArrowBigDownIcon:Ai,ArrowBigLeft:zi,ArrowBigLeftDash:qi,ArrowBigLeftDashIcon:qi,ArrowBigLeftIcon:zi,ArrowBigRight:Hi,ArrowBigRightDash:ji,ArrowBigRightDashIcon:ji,ArrowBigRightIcon:Hi,ArrowBigUp:Vi,ArrowBigUpDash:Ti,ArrowBigUpDashIcon:Ti,ArrowBigUpIcon:Vi,ArrowDown:Ji,ArrowDown01:Fi,ArrowDown01Icon:Fi,ArrowDown10:Di,ArrowDown10Icon:Di,ArrowDownAZ:ra,ArrowDownAZIcon:ra,ArrowDownAz:ra,ArrowDownAzIcon:ra,ArrowDownCircle:Ri,ArrowDownCircleIcon:Ri,ArrowDownFromLine:Bi,ArrowDownFromLineIcon:Bi,ArrowDownIcon:Ji,ArrowDownLeft:Ni,ArrowDownLeftFromCircle:Ei,ArrowDownLeftFromCircleIcon:Ei,ArrowDownLeftFromSquare:Oi,ArrowDownLeftFromSquareIcon:Oi,ArrowDownLeftIcon:Ni,ArrowDownLeftSquare:Ui,ArrowDownLeftSquareIcon:Ui,ArrowDownNarrowWide:Zi,ArrowDownNarrowWideIcon:Zi,ArrowDownRight:Xi,ArrowDownRightFromCircle:Wi,ArrowDownRightFromCircleIcon:Wi,ArrowDownRightFromSquare:_i,ArrowDownRightFromSquareIcon:_i,ArrowDownRightIcon:Xi,ArrowDownRightSquare:Gi,ArrowDownRightSquareIcon:Gi,ArrowDownSquare:Ki,ArrowDownSquareIcon:Ki,ArrowDownToDot:$i,ArrowDownToDotIcon:$i,ArrowDownToLine:Qi,ArrowDownToLineIcon:Qi,ArrowDownUp:Yi,ArrowDownUpIcon:Yi,ArrowDownWideNarrow:oa,ArrowDownWideNarrowIcon:oa,ArrowDownZA:ia,ArrowDownZAIcon:ia,ArrowDownZa:ia,ArrowDownZaIcon:ia,ArrowLeft:o2,ArrowLeftCircle:e2,ArrowLeftCircleIcon:e2,ArrowLeftFromLine:t2,ArrowLeftFromLineIcon:t2,ArrowLeftIcon:o2,ArrowLeftRight:a2,ArrowLeftRightIcon:a2,ArrowLeftSquare:n2,ArrowLeftSquareIcon:n2,ArrowLeftToLine:r2,ArrowLeftToLineIcon:r2,ArrowRight:h2,ArrowRightCircle:i2,ArrowRightCircleIcon:i2,ArrowRightFromLine:c2,ArrowRightFromLineIcon:c2,ArrowRightIcon:h2,ArrowRightLeft:l2,ArrowRightLeftIcon:l2,ArrowRightSquare:s2,ArrowRightSquareIcon:s2,ArrowRightToLine:d2,ArrowRightToLineIcon:d2,ArrowUp:A2,ArrowUp01:u2,ArrowUp01Icon:u2,ArrowUp10:y2,ArrowUp10Icon:y2,ArrowUpAZ:ca,ArrowUpAZIcon:ca,ArrowUpAz:ca,ArrowUpAzIcon:ca,ArrowUpCircle:p2,ArrowUpCircleIcon:p2,ArrowUpDown:k2,ArrowUpDownIcon:k2,ArrowUpFromDot:m2,ArrowUpFromDotIcon:m2,ArrowUpFromLine:f2,ArrowUpFromLineIcon:f2,ArrowUpIcon:A2,ArrowUpLeft:x2,ArrowUpLeftFromCircle:g2,ArrowUpLeftFromCircleIcon:g2,ArrowUpLeftFromSquare:v2,ArrowUpLeftFromSquareIcon:v2,ArrowUpLeftIcon:x2,ArrowUpLeftSquare:M2,ArrowUpLeftSquareIcon:M2,ArrowUpNarrowWide:la,ArrowUpNarrowWideIcon:la,ArrowUpRight:C2,ArrowUpRightFromCircle:w2,ArrowUpRightFromCircleIcon:w2,ArrowUpRightFromSquare:L2,ArrowUpRightFromSquareIcon:L2,ArrowUpRightIcon:C2,ArrowUpRightSquare:b2,ArrowUpRightSquareIcon:b2,ArrowUpSquare:S2,ArrowUpSquareIcon:S2,ArrowUpToLine:I2,ArrowUpToLineIcon:I2,ArrowUpWideNarrow:P2,ArrowUpWideNarrowIcon:P2,ArrowUpZA:sa,ArrowUpZAIcon:sa,ArrowUpZa:sa,ArrowUpZaIcon:sa,ArrowsUpFromLine:q2,ArrowsUpFromLineIcon:q2,Asterisk:z2,AsteriskIcon:z2,AsteriskSquare:da,AsteriskSquareIcon:da,AtSign:j2,AtSignIcon:j2,Atom:H2,AtomIcon:H2,AudioLines:T2,AudioLinesIcon:T2,AudioWaveform:V2,AudioWaveformIcon:V2,Award:F2,AwardIcon:F2,Axe:D2,AxeIcon:D2,Axis3D:ha,Axis3DIcon:ha,Axis3d:ha,Axis3dIcon:ha,Baby:R2,BabyIcon:R2,Backpack:B2,BackpackIcon:B2,Badge:tc,BadgeAlert:E2,BadgeAlertIcon:E2,BadgeCent:O2,BadgeCentIcon:O2,BadgeCheck:ua,BadgeCheckIcon:ua,BadgeDollarSign:U2,BadgeDollarSignIcon:U2,BadgeEuro:N2,BadgeEuroIcon:N2,BadgeHelp:Z2,BadgeHelpIcon:Z2,BadgeIcon:tc,BadgeIndianRupee:W2,BadgeIndianRupeeIcon:W2,BadgeInfo:_2,BadgeInfoIcon:_2,BadgeJapaneseYen:G2,BadgeJapaneseYenIcon:G2,BadgeMinus:X2,BadgeMinusIcon:X2,BadgePercent:K2,BadgePercentIcon:K2,BadgePlus:$2,BadgePlusIcon:$2,BadgePoundSterling:Q2,BadgePoundSterlingIcon:Q2,BadgeRussianRuble:Y2,BadgeRussianRubleIcon:Y2,BadgeSwissFranc:J2,BadgeSwissFrancIcon:J2,BadgeX:ec,BadgeXIcon:ec,BaggageClaim:ac,BaggageClaimIcon:ac,Ban:nc,BanIcon:nc,Banana:rc,BananaIcon:rc,Banknote:oc,BanknoteIcon:oc,BarChart:uc,BarChart2:ic,BarChart2Icon:ic,BarChart3:cc,BarChart3Icon:cc,BarChart4:lc,BarChart4Icon:lc,BarChartBig:sc,BarChartBigIcon:sc,BarChartHorizontal:hc,BarChartHorizontalBig:dc,BarChartHorizontalBigIcon:dc,BarChartHorizontalIcon:hc,BarChartIcon:uc,Barcode:yc,BarcodeIcon:yc,Baseline:pc,BaselineIcon:pc,Bath:kc,BathIcon:kc,Battery:xc,BatteryCharging:mc,BatteryChargingIcon:mc,BatteryFull:fc,BatteryFullIcon:fc,BatteryIcon:xc,BatteryLow:gc,BatteryLowIcon:gc,BatteryMedium:vc,BatteryMediumIcon:vc,BatteryWarning:Mc,BatteryWarningIcon:Mc,Beaker:wc,BeakerIcon:wc,Bean:bc,BeanIcon:bc,BeanOff:Lc,BeanOffIcon:Lc,Bed:Ic,BedDouble:Cc,BedDoubleIcon:Cc,BedIcon:Ic,BedSingle:Sc,BedSingleIcon:Sc,Beef:Pc,BeefIcon:Pc,Beer:Ac,BeerIcon:Ac,Bell:Fc,BellDot:qc,BellDotIcon:qc,BellElectric:zc,BellElectricIcon:zc,BellIcon:Fc,BellMinus:jc,BellMinusIcon:jc,BellOff:Hc,BellOffIcon:Hc,BellPlus:Tc,BellPlusIcon:Tc,BellRing:Vc,BellRingIcon:Vc,BetweenHorizonalEnd:ya,BetweenHorizonalEndIcon:ya,BetweenHorizonalStart:pa,BetweenHorizonalStartIcon:pa,BetweenHorizontalEnd:ya,BetweenHorizontalEndIcon:ya,BetweenHorizontalStart:pa,BetweenHorizontalStartIcon:pa,BetweenVerticalEnd:Dc,BetweenVerticalEndIcon:Dc,BetweenVerticalStart:Rc,BetweenVerticalStartIcon:Rc,Bike:Bc,BikeIcon:Bc,Binary:Ec,BinaryIcon:Ec,Biohazard:Oc,BiohazardIcon:Oc,Bird:Uc,BirdIcon:Uc,Bitcoin:Nc,BitcoinIcon:Nc,Blend:Zc,BlendIcon:Zc,Blinds:Wc,BlindsIcon:Wc,Blocks:_c,BlocksIcon:_c,Bluetooth:$c,BluetoothConnected:Gc,BluetoothConnectedIcon:Gc,BluetoothIcon:$c,BluetoothOff:Xc,BluetoothOffIcon:Xc,BluetoothSearching:Kc,BluetoothSearchingIcon:Kc,Bold:Qc,BoldIcon:Qc,Bolt:Yc,BoltIcon:Yc,Bomb:Jc,BombIcon:Jc,Bone:el,BoneIcon:el,Book:Ll,BookA:tl,BookAIcon:tl,BookAudio:al,BookAudioIcon:al,BookCheck:nl,BookCheckIcon:nl,BookCopy:rl,BookCopyIcon:rl,BookDashed:ka,BookDashedIcon:ka,BookDown:ol,BookDownIcon:ol,BookHeadphones:il,BookHeadphonesIcon:il,BookHeart:cl,BookHeartIcon:cl,BookIcon:Ll,BookImage:ll,BookImageIcon:ll,BookKey:sl,BookKeyIcon:sl,BookLock:dl,BookLockIcon:dl,BookMarked:hl,BookMarkedIcon:hl,BookMinus:ul,BookMinusIcon:ul,BookOpen:kl,BookOpenCheck:yl,BookOpenCheckIcon:yl,BookOpenIcon:kl,BookOpenText:pl,BookOpenTextIcon:pl,BookPlus:ml,BookPlusIcon:ml,BookTemplate:ka,BookTemplateIcon:ka,BookText:fl,BookTextIcon:fl,BookType:gl,BookTypeIcon:gl,BookUp:Ml,BookUp2:vl,BookUp2Icon:vl,BookUpIcon:Ml,BookUser:xl,BookUserIcon:xl,BookX:wl,BookXIcon:wl,Bookmark:Pl,BookmarkCheck:bl,BookmarkCheckIcon:bl,BookmarkIcon:Pl,BookmarkMinus:Cl,BookmarkMinusIcon:Cl,BookmarkPlus:Sl,BookmarkPlusIcon:Sl,BookmarkX:Il,BookmarkXIcon:Il,BoomBox:Al,BoomBoxIcon:Al,Bot:zl,BotIcon:zl,BotMessageSquare:ql,BotMessageSquareIcon:ql,Box:Hl,BoxIcon:Hl,BoxSelect:jl,BoxSelectIcon:jl,Boxes:Tl,BoxesIcon:Tl,Braces:ma,BracesIcon:ma,Brackets:Vl,BracketsIcon:Vl,Brain:Rl,BrainCircuit:Fl,BrainCircuitIcon:Fl,BrainCog:Dl,BrainCogIcon:Dl,BrainIcon:Rl,BrickWall:Bl,BrickWallIcon:Bl,Briefcase:El,BriefcaseIcon:El,BringToFront:Ol,BringToFrontIcon:Ol,Brush:Ul,BrushIcon:Ul,Bug:Wl,BugIcon:Wl,BugOff:Nl,BugOffIcon:Nl,BugPlay:Zl,BugPlayIcon:Zl,Building:Gl,Building2:_l,Building2Icon:_l,BuildingIcon:Gl,Bus:Kl,BusFront:Xl,BusFrontIcon:Xl,BusIcon:Kl,Cable:Ql,CableCar:$l,CableCarIcon:$l,CableIcon:Ql,Cake:Jl,CakeIcon:Jl,CakeSlice:Yl,CakeSliceIcon:Yl,Calculator:es,CalculatorIcon:es,Calendar:ms,CalendarCheck:as,CalendarCheck2:ts,CalendarCheck2Icon:ts,CalendarCheckIcon:as,CalendarClock:ns,CalendarClockIcon:ns,CalendarDays:rs,CalendarDaysIcon:rs,CalendarFold:os,CalendarFoldIcon:os,CalendarHeart:is,CalendarHeartIcon:is,CalendarIcon:ms,CalendarMinus:ls,CalendarMinus2:cs,CalendarMinus2Icon:cs,CalendarMinusIcon:ls,CalendarOff:ss,CalendarOffIcon:ss,CalendarPlus:hs,CalendarPlus2:ds,CalendarPlus2Icon:ds,CalendarPlusIcon:hs,CalendarRange:us,CalendarRangeIcon:us,CalendarSearch:ys,CalendarSearchIcon:ys,CalendarX:ks,CalendarX2:ps,CalendarX2Icon:ps,CalendarXIcon:ks,Camera:gs,CameraIcon:gs,CameraOff:fs,CameraOffIcon:fs,CandlestickChart:vs,CandlestickChartIcon:vs,Candy:ws,CandyCane:Ms,CandyCaneIcon:Ms,CandyIcon:ws,CandyOff:xs,CandyOffIcon:xs,Captions:fa,CaptionsIcon:fa,CaptionsOff:Ls,CaptionsOffIcon:Ls,Car:Ss,CarFront:bs,CarFrontIcon:bs,CarIcon:Ss,CarTaxiFront:Cs,CarTaxiFrontIcon:Cs,Caravan:Is,CaravanIcon:Is,Carrot:Ps,CarrotIcon:Ps,CaseLower:As,CaseLowerIcon:As,CaseSensitive:qs,CaseSensitiveIcon:qs,CaseUpper:zs,CaseUpperIcon:zs,CassetteTape:js,CassetteTapeIcon:js,Cast:Hs,CastIcon:Hs,Castle:Ts,CastleIcon:Ts,Cat:Vs,CatIcon:Vs,Cctv:Fs,CctvIcon:Fs,Check:Os,CheckCheck:Ds,CheckCheckIcon:Ds,CheckCircle:an,CheckCircle2:Rs,CheckCircle2Icon:Rs,CheckCircleIcon:an,CheckIcon:Os,CheckSquare:Es,CheckSquare2:Bs,CheckSquare2Icon:Bs,CheckSquareIcon:Es,ChefHat:Us,ChefHatIcon:Us,Cherry:Ns,CherryIcon:Ns,ChevronDown:Jn,ChevronDownCircle:Zs,ChevronDownCircleIcon:Zs,ChevronDownIcon:Jn,ChevronDownSquare:Ws,ChevronDownSquareIcon:Ws,ChevronFirst:_s,ChevronFirstIcon:_s,ChevronLast:Gs,ChevronLastIcon:Gs,ChevronLeft:$s,ChevronLeftCircle:Xs,ChevronLeftCircleIcon:Xs,ChevronLeftIcon:$s,ChevronLeftSquare:Ks,ChevronLeftSquareIcon:Ks,ChevronRight:Js,ChevronRightCircle:Qs,ChevronRightCircleIcon:Qs,ChevronRightIcon:Js,ChevronRightSquare:Ys,ChevronRightSquareIcon:Ys,ChevronUp:er,ChevronUpCircle:e0,ChevronUpCircleIcon:e0,ChevronUpIcon:er,ChevronUpSquare:t0,ChevronUpSquareIcon:t0,ChevronsDown:n0,ChevronsDownIcon:n0,ChevronsDownUp:a0,ChevronsDownUpIcon:a0,ChevronsLeft:o0,ChevronsLeftIcon:o0,ChevronsLeftRight:r0,ChevronsLeftRightIcon:r0,ChevronsRight:c0,ChevronsRightIcon:c0,ChevronsRightLeft:i0,ChevronsRightLeftIcon:i0,ChevronsUp:s0,ChevronsUpDown:l0,ChevronsUpDownIcon:l0,ChevronsUpIcon:s0,Chrome:d0,ChromeIcon:d0,Church:h0,ChurchIcon:h0,Cigarette:y0,CigaretteIcon:y0,CigaretteOff:u0,CigaretteOffIcon:u0,Circle:w0,CircleDashed:p0,CircleDashedIcon:p0,CircleDollarSign:k0,CircleDollarSignIcon:k0,CircleDot:f0,CircleDotDashed:m0,CircleDotDashedIcon:m0,CircleDotIcon:f0,CircleEllipsis:g0,CircleEllipsisIcon:g0,CircleEqual:v0,CircleEqualIcon:v0,CircleFadingPlus:M0,CircleFadingPlusIcon:M0,CircleIcon:w0,CircleOff:x0,CircleOffIcon:x0,CircleSlash:tr,CircleSlash2:ga,CircleSlash2Icon:ga,CircleSlashIcon:tr,CircleSlashed:ga,CircleSlashedIcon:ga,CircleUser:Ma,CircleUserIcon:Ma,CircleUserRound:va,CircleUserRoundIcon:va,CircuitBoard:L0,CircuitBoardIcon:L0,Citrus:b0,CitrusIcon:b0,Clapperboard:C0,ClapperboardIcon:C0,Clipboard:T0,ClipboardCheck:S0,ClipboardCheckIcon:S0,ClipboardCopy:I0,ClipboardCopyIcon:I0,ClipboardEdit:wa,ClipboardEditIcon:wa,ClipboardIcon:T0,ClipboardList:P0,ClipboardListIcon:P0,ClipboardMinus:A0,ClipboardMinusIcon:A0,ClipboardPaste:q0,ClipboardPasteIcon:q0,ClipboardPen:wa,ClipboardPenIcon:wa,ClipboardPenLine:xa,ClipboardPenLineIcon:xa,ClipboardPlus:z0,ClipboardPlusIcon:z0,ClipboardSignature:xa,ClipboardSignatureIcon:xa,ClipboardType:j0,ClipboardTypeIcon:j0,ClipboardX:H0,ClipboardXIcon:H0,Clock:G0,Clock1:V0,Clock10:F0,Clock10Icon:F0,Clock11:D0,Clock11Icon:D0,Clock12:R0,Clock12Icon:R0,Clock1Icon:V0,Clock2:B0,Clock2Icon:B0,Clock3:E0,Clock3Icon:E0,Clock4:O0,Clock4Icon:O0,Clock5:U0,Clock5Icon:U0,Clock6:N0,Clock6Icon:N0,Clock7:Z0,Clock7Icon:Z0,Clock8:W0,Clock8Icon:W0,Clock9:_0,Clock9Icon:_0,ClockIcon:G0,Cloud:cd,CloudCog:X0,CloudCogIcon:X0,CloudDrizzle:K0,CloudDrizzleIcon:K0,CloudFog:$0,CloudFogIcon:$0,CloudHail:Q0,CloudHailIcon:Q0,CloudIcon:cd,CloudLightning:Y0,CloudLightningIcon:Y0,CloudMoon:ed,CloudMoonIcon:ed,CloudMoonRain:J0,CloudMoonRainIcon:J0,CloudOff:td,CloudOffIcon:td,CloudRain:nd,CloudRainIcon:nd,CloudRainWind:ad,CloudRainWindIcon:ad,CloudSnow:rd,CloudSnowIcon:rd,CloudSun:id,CloudSunIcon:id,CloudSunRain:od,CloudSunRainIcon:od,Cloudy:ld,CloudyIcon:ld,Clover:sd,CloverIcon:sd,Club:dd,ClubIcon:dd,Code:ar,Code2:hd,Code2Icon:hd,CodeIcon:ar,CodeSquare:La,CodeSquareIcon:La,Codepen:ud,CodepenIcon:ud,Codesandbox:yd,CodesandboxIcon:yd,Coffee:pd,CoffeeIcon:pd,Cog:kd,CogIcon:kd,Coins:md,CoinsIcon:md,Columns:ba,Columns2:ba,Columns2Icon:ba,Columns3:Ca,Columns3Icon:Ca,Columns4:fd,Columns4Icon:fd,ColumnsIcon:ba,Combine:gd,CombineIcon:gd,Command:vd,CommandIcon:vd,Compass:Md,CompassIcon:Md,Component:xd,ComponentIcon:xd,Computer:wd,ComputerIcon:wd,ConciergeBell:Ld,ConciergeBellIcon:Ld,Cone:bd,ConeIcon:bd,Construction:Cd,ConstructionIcon:Cd,Contact:Id,Contact2:Sd,Contact2Icon:Sd,ContactIcon:Id,Container:Pd,ContainerIcon:Pd,Contrast:Ad,ContrastIcon:Ad,Cookie:qd,CookieIcon:qd,CookingPot:zd,CookingPotIcon:zd,Copy:Dd,CopyCheck:jd,CopyCheckIcon:jd,CopyIcon:Dd,CopyMinus:Hd,CopyMinusIcon:Hd,CopyPlus:Td,CopyPlusIcon:Td,CopySlash:Vd,CopySlashIcon:Vd,CopyX:Fd,CopyXIcon:Fd,Copyleft:Rd,CopyleftIcon:Rd,Copyright:Bd,CopyrightIcon:Bd,CornerDownLeft:Ed,CornerDownLeftIcon:Ed,CornerDownRight:Od,CornerDownRightIcon:Od,CornerLeftDown:Ud,CornerLeftDownIcon:Ud,CornerLeftUp:Nd,CornerLeftUpIcon:Nd,CornerRightDown:Zd,CornerRightDownIcon:Zd,CornerRightUp:Wd,CornerRightUpIcon:Wd,CornerUpLeft:_d,CornerUpLeftIcon:_d,CornerUpRight:Gd,CornerUpRightIcon:Gd,Cpu:Xd,CpuIcon:Xd,CreativeCommons:Kd,CreativeCommonsIcon:Kd,CreditCard:$d,CreditCardIcon:$d,Croissant:Qd,CroissantIcon:Qd,Crop:Yd,CropIcon:Yd,Cross:Jd,CrossIcon:Jd,Crosshair:eh,CrosshairIcon:eh,Crown:th,CrownIcon:th,Cuboid:ah,CuboidIcon:ah,CupSoda:nh,CupSodaIcon:nh,CurlyBraces:ma,CurlyBracesIcon:ma,Currency:rh,CurrencyIcon:rh,Cylinder:oh,CylinderIcon:oh,Database:lh,DatabaseBackup:ih,DatabaseBackupIcon:ih,DatabaseIcon:lh,DatabaseZap:ch,DatabaseZapIcon:ch,Delete:sh,DeleteIcon:sh,Dessert:dh,DessertIcon:dh,Diameter:hh,DiameterIcon:hh,Diamond:uh,DiamondIcon:uh,Dice1:yh,Dice1Icon:yh,Dice2:ph,Dice2Icon:ph,Dice3:kh,Dice3Icon:kh,Dice4:mh,Dice4Icon:mh,Dice5:fh,Dice5Icon:fh,Dice6:gh,Dice6Icon:gh,Dices:vh,DicesIcon:vh,Diff:Mh,DiffIcon:Mh,Disc:bh,Disc2:xh,Disc2Icon:xh,Disc3:wh,Disc3Icon:wh,DiscAlbum:Lh,DiscAlbumIcon:Lh,DiscIcon:bh,Divide:Ih,DivideCircle:Ch,DivideCircleIcon:Ch,DivideIcon:Ih,DivideSquare:Sh,DivideSquareIcon:Sh,Dna:Ah,DnaIcon:Ah,DnaOff:Ph,DnaOffIcon:Ph,Dog:qh,DogIcon:qh,DollarSign:zh,DollarSignIcon:zh,Donut:jh,DonutIcon:jh,DoorClosed:Hh,DoorClosedIcon:Hh,DoorOpen:Th,DoorOpenIcon:Th,Dot:Vh,DotIcon:Vh,DotSquare:Sa,DotSquareIcon:Sa,Download:Dh,DownloadCloud:Fh,DownloadCloudIcon:Fh,DownloadIcon:Dh,DraftingCompass:Rh,DraftingCompassIcon:Rh,Drama:Bh,DramaIcon:Bh,Dribbble:Eh,DribbbleIcon:Eh,Drill:Oh,DrillIcon:Oh,Droplet:Uh,DropletIcon:Uh,Droplets:Nh,DropletsIcon:Nh,Drum:Zh,DrumIcon:Zh,Drumstick:Wh,DrumstickIcon:Wh,Dumbbell:_h,DumbbellIcon:_h,Ear:Xh,EarIcon:Xh,EarOff:Gh,EarOffIcon:Gh,Earth:Ia,EarthIcon:Ia,EarthLock:Kh,EarthLockIcon:Kh,Eclipse:$h,EclipseIcon:$h,Edit:Ie,Edit2:Qa,Edit2Icon:Qa,Edit3:$a,Edit3Icon:$a,EditIcon:Ie,Egg:Jh,EggFried:Qh,EggFriedIcon:Qh,EggIcon:Jh,EggOff:Yh,EggOffIcon:Yh,Equal:tu,EqualIcon:tu,EqualNot:eu,EqualNotIcon:eu,EqualSquare:Pa,EqualSquareIcon:Pa,Eraser:au,EraserIcon:au,Euro:nu,EuroIcon:nu,Expand:ru,ExpandIcon:ru,ExternalLink:nr,ExternalLinkIcon:nr,Eye:iu,EyeIcon:iu,EyeOff:ou,EyeOffIcon:ou,Facebook:cu,FacebookIcon:cu,Factory:lu,FactoryIcon:lu,Fan:su,FanIcon:su,FastForward:du,FastForwardIcon:du,Feather:hu,FeatherIcon:hu,Fence:uu,FenceIcon:uu,FerrisWheel:yu,FerrisWheelIcon:yu,Figma:pu,FigmaIcon:pu,File:py,FileArchive:ku,FileArchiveIcon:ku,FileAudio:fu,FileAudio2:mu,FileAudio2Icon:mu,FileAudioIcon:fu,FileAxis3D:Aa,FileAxis3DIcon:Aa,FileAxis3d:Aa,FileAxis3dIcon:Aa,FileBadge:vu,FileBadge2:gu,FileBadge2Icon:gu,FileBadgeIcon:vu,FileBarChart:xu,FileBarChart2:Mu,FileBarChart2Icon:Mu,FileBarChartIcon:xu,FileBox:wu,FileBoxIcon:wu,FileCheck:bu,FileCheck2:Lu,FileCheck2Icon:Lu,FileCheckIcon:bu,FileClock:Cu,FileClockIcon:Cu,FileCode:Iu,FileCode2:Su,FileCode2Icon:Su,FileCodeIcon:Iu,FileCog:qa,FileCog2:qa,FileCog2Icon:qa,FileCogIcon:qa,FileDiff:Pu,FileDiffIcon:Pu,FileDigit:Au,FileDigitIcon:Au,FileDown:qu,FileDownIcon:qu,FileEdit:ja,FileEditIcon:ja,FileHeart:zu,FileHeartIcon:zu,FileIcon:py,FileImage:ju,FileImageIcon:ju,FileInput:Hu,FileInputIcon:Hu,FileJson:Vu,FileJson2:Tu,FileJson2Icon:Tu,FileJsonIcon:Vu,FileKey:Du,FileKey2:Fu,FileKey2Icon:Fu,FileKeyIcon:Du,FileLineChart:Ru,FileLineChartIcon:Ru,FileLock:Eu,FileLock2:Bu,FileLock2Icon:Bu,FileLockIcon:Eu,FileMinus:Uu,FileMinus2:Ou,FileMinus2Icon:Ou,FileMinusIcon:Uu,FileMusic:Nu,FileMusicIcon:Nu,FileOutput:Zu,FileOutputIcon:Zu,FilePen:ja,FilePenIcon:ja,FilePenLine:za,FilePenLineIcon:za,FilePieChart:Wu,FilePieChartIcon:Wu,FilePlus:Gu,FilePlus2:_u,FilePlus2Icon:_u,FilePlusIcon:Gu,FileQuestion:Xu,FileQuestionIcon:Xu,FileScan:Ku,FileScanIcon:Ku,FileSearch:Qu,FileSearch2:$u,FileSearch2Icon:$u,FileSearchIcon:Qu,FileSignature:za,FileSignatureIcon:za,FileSliders:Yu,FileSlidersIcon:Yu,FileSpreadsheet:Ju,FileSpreadsheetIcon:Ju,FileStack:ey,FileStackIcon:ey,FileSymlink:ty,FileSymlinkIcon:ty,FileTerminal:ay,FileTerminalIcon:ay,FileText:ny,FileTextIcon:ny,FileType:oy,FileType2:ry,FileType2Icon:ry,FileTypeIcon:oy,FileUp:iy,FileUpIcon:iy,FileVideo:ly,FileVideo2:cy,FileVideo2Icon:cy,FileVideoIcon:ly,FileVolume:dy,FileVolume2:sy,FileVolume2Icon:sy,FileVolumeIcon:dy,FileWarning:hy,FileWarningIcon:hy,FileX:yy,FileX2:uy,FileX2Icon:uy,FileXIcon:yy,Files:ky,FilesIcon:ky,Film:my,FilmIcon:my,Filter:gy,FilterIcon:gy,FilterX:fy,FilterXIcon:fy,Fingerprint:vy,FingerprintIcon:vy,FireExtinguisher:My,FireExtinguisherIcon:My,Fish:Ly,FishIcon:Ly,FishOff:xy,FishOffIcon:xy,FishSymbol:wy,FishSymbolIcon:wy,Flag:Iy,FlagIcon:Iy,FlagOff:by,FlagOffIcon:by,FlagTriangleLeft:Cy,FlagTriangleLeftIcon:Cy,FlagTriangleRight:Sy,FlagTriangleRightIcon:Sy,Flame:Ay,FlameIcon:Ay,FlameKindling:Py,FlameKindlingIcon:Py,Flashlight:zy,FlashlightIcon:zy,FlashlightOff:qy,FlashlightOffIcon:qy,FlaskConical:Hy,FlaskConicalIcon:Hy,FlaskConicalOff:jy,FlaskConicalOffIcon:jy,FlaskRound:Ty,FlaskRoundIcon:Ty,FlipHorizontal:Fy,FlipHorizontal2:Vy,FlipHorizontal2Icon:Vy,FlipHorizontalIcon:Fy,FlipVertical:Ry,FlipVertical2:Dy,FlipVertical2Icon:Dy,FlipVerticalIcon:Ry,Flower:Ey,Flower2:By,Flower2Icon:By,FlowerIcon:Ey,Focus:Oy,FocusIcon:Oy,FoldHorizontal:Uy,FoldHorizontalIcon:Uy,FoldVertical:Ny,FoldVerticalIcon:Ny,Folder:mp,FolderArchive:Zy,FolderArchiveIcon:Zy,FolderCheck:Wy,FolderCheckIcon:Wy,FolderClock:_y,FolderClockIcon:_y,FolderClosed:Gy,FolderClosedIcon:Gy,FolderCog:Ha,FolderCog2:Ha,FolderCog2Icon:Ha,FolderCogIcon:Ha,FolderDot:Xy,FolderDotIcon:Xy,FolderDown:Ky,FolderDownIcon:Ky,FolderEdit:Ta,FolderEditIcon:Ta,FolderGit:Qy,FolderGit2:$y,FolderGit2Icon:$y,FolderGitIcon:Qy,FolderHeart:Yy,FolderHeartIcon:Yy,FolderIcon:mp,FolderInput:Jy,FolderInputIcon:Jy,FolderKanban:ep,FolderKanbanIcon:ep,FolderKey:tp,FolderKeyIcon:tp,FolderLock:ap,FolderLockIcon:ap,FolderMinus:np,FolderMinusIcon:np,FolderOpen:op,FolderOpenDot:rp,FolderOpenDotIcon:rp,FolderOpenIcon:op,FolderOutput:ip,FolderOutputIcon:ip,FolderPen:Ta,FolderPenIcon:Ta,FolderPlus:cp,FolderPlusIcon:cp,FolderRoot:lp,FolderRootIcon:lp,FolderSearch:dp,FolderSearch2:sp,FolderSearch2Icon:sp,FolderSearchIcon:dp,FolderSymlink:hp,FolderSymlinkIcon:hp,FolderSync:up,FolderSyncIcon:up,FolderTree:yp,FolderTreeIcon:yp,FolderUp:pp,FolderUpIcon:pp,FolderX:kp,FolderXIcon:kp,Folders:fp,FoldersIcon:fp,Footprints:gp,FootprintsIcon:gp,Forklift:vp,ForkliftIcon:vp,FormInput:Mp,FormInputIcon:Mp,Forward:xp,ForwardIcon:xp,Frame:wp,FrameIcon:wp,Framer:Lp,FramerIcon:Lp,Frown:bp,FrownIcon:bp,Fuel:Cp,FuelIcon:Cp,Fullscreen:Sp,FullscreenIcon:Sp,FunctionSquare:Ip,FunctionSquareIcon:Ip,GalleryHorizontal:Ap,GalleryHorizontalEnd:Pp,GalleryHorizontalEndIcon:Pp,GalleryHorizontalIcon:Ap,GalleryThumbnails:qp,GalleryThumbnailsIcon:qp,GalleryVertical:jp,GalleryVerticalEnd:zp,GalleryVerticalEndIcon:zp,GalleryVerticalIcon:jp,Gamepad:Tp,Gamepad2:Hp,Gamepad2Icon:Hp,GamepadIcon:Tp,GanttChart:Vp,GanttChartIcon:Vp,GanttChartSquare:et,GanttChartSquareIcon:et,GanttSquare:et,GanttSquareIcon:et,Gauge:Dp,GaugeCircle:Fp,GaugeCircleIcon:Fp,GaugeIcon:Dp,Gavel:Rp,GavelIcon:Rp,Gem:Bp,GemIcon:Bp,Ghost:Ep,GhostIcon:Ep,Gift:Op,GiftIcon:Op,GitBranch:Np,GitBranchIcon:Np,GitBranchPlus:Up,GitBranchPlusIcon:Up,GitCommit:Va,GitCommitHorizontal:Va,GitCommitHorizontalIcon:Va,GitCommitIcon:Va,GitCommitVertical:Zp,GitCommitVerticalIcon:Zp,GitCompare:_p,GitCompareArrows:Wp,GitCompareArrowsIcon:Wp,GitCompareIcon:_p,GitFork:Gp,GitForkIcon:Gp,GitGraph:Xp,GitGraphIcon:Xp,GitMerge:Kp,GitMergeIcon:Kp,GitPullRequest:tk,GitPullRequestArrow:$p,GitPullRequestArrowIcon:$p,GitPullRequestClosed:Qp,GitPullRequestClosedIcon:Qp,GitPullRequestCreate:Jp,GitPullRequestCreateArrow:Yp,GitPullRequestCreateArrowIcon:Yp,GitPullRequestCreateIcon:Jp,GitPullRequestDraft:ek,GitPullRequestDraftIcon:ek,GitPullRequestIcon:tk,Github:rr,GithubIcon:rr,Gitlab:ak,GitlabIcon:ak,GlassWater:nk,GlassWaterIcon:nk,Glasses:rk,GlassesIcon:rk,Globe:ik,Globe2:Ia,Globe2Icon:Ia,GlobeIcon:ik,GlobeLock:ok,GlobeLockIcon:ok,Goal:ck,GoalIcon:ck,Grab:lk,GrabIcon:lk,GraduationCap:sk,GraduationCapIcon:sk,Grape:dk,GrapeIcon:dk,Grid:tt,Grid2X2:Fa,Grid2X2Icon:Fa,Grid2x2:Fa,Grid2x2Icon:Fa,Grid3X3:tt,Grid3X3Icon:tt,Grid3x3:tt,Grid3x3Icon:tt,GridIcon:tt,Grip:yk,GripHorizontal:hk,GripHorizontalIcon:hk,GripIcon:yk,GripVertical:uk,GripVerticalIcon:uk,Group:pk,GroupIcon:pk,Guitar:kk,GuitarIcon:kk,Hammer:mk,HammerIcon:mk,Hand:xk,HandCoins:fk,HandCoinsIcon:fk,HandHeart:gk,HandHeartIcon:gk,HandHelping:Da,HandHelpingIcon:Da,HandIcon:xk,HandMetal:vk,HandMetalIcon:vk,HandPlatter:Mk,HandPlatterIcon:Mk,Handshake:wk,HandshakeIcon:wk,HardDrive:Ck,HardDriveDownload:Lk,HardDriveDownloadIcon:Lk,HardDriveIcon:Ck,HardDriveUpload:bk,HardDriveUploadIcon:bk,HardHat:Sk,HardHatIcon:Sk,Hash:Ik,HashIcon:Ik,Haze:Pk,HazeIcon:Pk,HdmiPort:Ak,HdmiPortIcon:Ak,Heading:Fk,Heading1:qk,Heading1Icon:qk,Heading2:zk,Heading2Icon:zk,Heading3:jk,Heading3Icon:jk,Heading4:Hk,Heading4Icon:Hk,Heading5:Tk,Heading5Icon:Tk,Heading6:Vk,Heading6Icon:Vk,HeadingIcon:Fk,Headphones:Dk,HeadphonesIcon:Dk,Headset:Rk,HeadsetIcon:Rk,Heart:Nk,HeartCrack:Bk,HeartCrackIcon:Bk,HeartHandshake:Ek,HeartHandshakeIcon:Ek,HeartIcon:Nk,HeartOff:Ok,HeartOffIcon:Ok,HeartPulse:Uk,HeartPulseIcon:Uk,Heater:Zk,HeaterIcon:Zk,HelpCircle:Wk,HelpCircleIcon:Wk,HelpingHand:Da,HelpingHandIcon:Da,Hexagon:_k,HexagonIcon:_k,Highlighter:Gk,HighlighterIcon:Gk,History:Xk,HistoryIcon:Xk,Home:Kk,HomeIcon:Kk,Hop:Qk,HopIcon:Qk,HopOff:$k,HopOffIcon:$k,Hotel:Yk,HotelIcon:Yk,Hourglass:Jk,HourglassIcon:Jk,IceCream:t4,IceCream2:e4,IceCream2Icon:e4,IceCreamIcon:t4,Image:c4,ImageDown:a4,ImageDownIcon:a4,ImageIcon:c4,ImageMinus:n4,ImageMinusIcon:n4,ImageOff:r4,ImageOffIcon:r4,ImagePlus:o4,ImagePlusIcon:o4,ImageUp:i4,ImageUpIcon:i4,Images:l4,ImagesIcon:l4,Import:s4,ImportIcon:s4,Inbox:d4,InboxIcon:d4,Indent:h4,IndentIcon:h4,IndianRupee:u4,IndianRupeeIcon:u4,Infinity:y4,InfinityIcon:y4,Info:p4,InfoIcon:p4,Inspect:Ea,InspectIcon:Ea,InspectionPanel:k4,InspectionPanelIcon:k4,Instagram:m4,InstagramIcon:m4,Italic:f4,ItalicIcon:f4,IterationCcw:g4,IterationCcwIcon:g4,IterationCw:v4,IterationCwIcon:v4,JapaneseYen:M4,JapaneseYenIcon:M4,Joystick:x4,JoystickIcon:x4,Kanban:w4,KanbanIcon:w4,KanbanSquare:Ba,KanbanSquareDashed:Ra,KanbanSquareDashedIcon:Ra,KanbanSquareIcon:Ba,Key:C4,KeyIcon:C4,KeyRound:L4,KeyRoundIcon:L4,KeySquare:b4,KeySquareIcon:b4,Keyboard:I4,KeyboardIcon:I4,KeyboardMusic:S4,KeyboardMusicIcon:S4,Lamp:H4,LampCeiling:P4,LampCeilingIcon:P4,LampDesk:A4,LampDeskIcon:A4,LampFloor:q4,LampFloorIcon:q4,LampIcon:H4,LampWallDown:z4,LampWallDownIcon:z4,LampWallUp:j4,LampWallUpIcon:j4,LandPlot:T4,LandPlotIcon:T4,Landmark:V4,LandmarkIcon:V4,Languages:F4,LanguagesIcon:F4,Laptop:R4,Laptop2:D4,Laptop2Icon:D4,LaptopIcon:R4,Lasso:E4,LassoIcon:E4,LassoSelect:B4,LassoSelectIcon:B4,Laugh:O4,LaughIcon:O4,Layers:Z4,Layers2:U4,Layers2Icon:U4,Layers3:N4,Layers3Icon:N4,LayersIcon:Z4,Layout:Ka,LayoutDashboard:W4,LayoutDashboardIcon:W4,LayoutGrid:_4,LayoutGridIcon:_4,LayoutIcon:Ka,LayoutList:G4,LayoutListIcon:G4,LayoutPanelLeft:X4,LayoutPanelLeftIcon:X4,LayoutPanelTop:K4,LayoutPanelTopIcon:K4,LayoutTemplate:$4,LayoutTemplateIcon:$4,Leaf:Q4,LeafIcon:Q4,LeafyGreen:Y4,LeafyGreenIcon:Y4,Library:t5,LibraryBig:J4,LibraryBigIcon:J4,LibraryIcon:t5,LibrarySquare:e5,LibrarySquareIcon:e5,LifeBuoy:a5,LifeBuoyIcon:a5,Ligature:n5,LigatureIcon:n5,Lightbulb:o5,LightbulbIcon:o5,LightbulbOff:r5,LightbulbOffIcon:r5,LineChart:i5,LineChartIcon:i5,Link:s5,Link2:l5,Link2Icon:l5,Link2Off:c5,Link2OffIcon:c5,LinkIcon:s5,Linkedin:d5,LinkedinIcon:d5,List:C5,ListChecks:h5,ListChecksIcon:h5,ListCollapse:u5,ListCollapseIcon:u5,ListEnd:y5,ListEndIcon:y5,ListFilter:p5,ListFilterIcon:p5,ListIcon:C5,ListMinus:k5,ListMinusIcon:k5,ListMusic:m5,ListMusicIcon:m5,ListOrdered:f5,ListOrderedIcon:f5,ListPlus:g5,ListPlusIcon:g5,ListRestart:v5,ListRestartIcon:v5,ListStart:M5,ListStartIcon:M5,ListTodo:x5,ListTodoIcon:x5,ListTree:w5,ListTreeIcon:w5,ListVideo:L5,ListVideoIcon:L5,ListX:b5,ListXIcon:b5,Loader:I5,Loader2:S5,Loader2Icon:S5,LoaderIcon:I5,Locate:q5,LocateFixed:P5,LocateFixedIcon:P5,LocateIcon:q5,LocateOff:A5,LocateOffIcon:A5,Lock:j5,LockIcon:j5,LockKeyhole:z5,LockKeyholeIcon:z5,LogIn:H5,LogInIcon:H5,LogOut:T5,LogOutIcon:T5,Lollipop:V5,LollipopIcon:V5,LucideAArrowDown:Co,LucideAArrowUp:So,LucideALargeSmall:Io,LucideAccessibility:Po,LucideActivity:qo,LucideActivitySquare:Ao,LucideAirVent:zo,LucideAirplay:jo,LucideAlarmCheck:ta,LucideAlarmClock:To,LucideAlarmClockCheck:ta,LucideAlarmClockMinus:aa,LucideAlarmClockOff:Ho,LucideAlarmClockPlus:na,LucideAlarmMinus:aa,LucideAlarmPlus:na,LucideAlarmSmoke:Vo,LucideAlbum:Fo,LucideAlertCircle:Do,LucideAlertOctagon:Ro,LucideAlertTriangle:Bo,LucideAlignCenter:Uo,LucideAlignCenterHorizontal:Eo,LucideAlignCenterVertical:Oo,LucideAlignEndHorizontal:No,LucideAlignEndVertical:Zo,LucideAlignHorizontalDistributeCenter:Wo,LucideAlignHorizontalDistributeEnd:_o,LucideAlignHorizontalDistributeStart:Go,LucideAlignHorizontalJustifyCenter:Xo,LucideAlignHorizontalJustifyEnd:Ko,LucideAlignHorizontalJustifyStart:$o,LucideAlignHorizontalSpaceAround:Qo,LucideAlignHorizontalSpaceBetween:Yo,LucideAlignJustify:Jo,LucideAlignLeft:ei,LucideAlignRight:ti,LucideAlignStartHorizontal:ai,LucideAlignStartVertical:ni,LucideAlignVerticalDistributeCenter:ri,LucideAlignVerticalDistributeEnd:oi,LucideAlignVerticalDistributeStart:ii,LucideAlignVerticalJustifyCenter:ci,LucideAlignVerticalJustifyEnd:li,LucideAlignVerticalJustifyStart:si,LucideAlignVerticalSpaceAround:di,LucideAlignVerticalSpaceBetween:hi,LucideAmbulance:ui,LucideAmpersand:yi,LucideAmpersands:pi,LucideAnchor:ki,LucideAngry:mi,LucideAnnoyed:fi,LucideAntenna:gi,LucideAnvil:vi,LucideAperture:Mi,LucideAppWindow:xi,LucideApple:wi,LucideArchive:Ci,LucideArchiveRestore:Li,LucideArchiveX:bi,LucideAreaChart:Si,LucideArmchair:Ii,LucideArrowBigDown:Ai,LucideArrowBigDownDash:Pi,LucideArrowBigLeft:zi,LucideArrowBigLeftDash:qi,LucideArrowBigRight:Hi,LucideArrowBigRightDash:ji,LucideArrowBigUp:Vi,LucideArrowBigUpDash:Ti,LucideArrowDown:Ji,LucideArrowDown01:Fi,LucideArrowDown10:Di,LucideArrowDownAZ:ra,LucideArrowDownAz:ra,LucideArrowDownCircle:Ri,LucideArrowDownFromLine:Bi,LucideArrowDownLeft:Ni,LucideArrowDownLeftFromCircle:Ei,LucideArrowDownLeftFromSquare:Oi,LucideArrowDownLeftSquare:Ui,LucideArrowDownNarrowWide:Zi,LucideArrowDownRight:Xi,LucideArrowDownRightFromCircle:Wi,LucideArrowDownRightFromSquare:_i,LucideArrowDownRightSquare:Gi,LucideArrowDownSquare:Ki,LucideArrowDownToDot:$i,LucideArrowDownToLine:Qi,LucideArrowDownUp:Yi,LucideArrowDownWideNarrow:oa,LucideArrowDownZA:ia,LucideArrowDownZa:ia,LucideArrowLeft:o2,LucideArrowLeftCircle:e2,LucideArrowLeftFromLine:t2,LucideArrowLeftRight:a2,LucideArrowLeftSquare:n2,LucideArrowLeftToLine:r2,LucideArrowRight:h2,LucideArrowRightCircle:i2,LucideArrowRightFromLine:c2,LucideArrowRightLeft:l2,LucideArrowRightSquare:s2,LucideArrowRightToLine:d2,LucideArrowUp:A2,LucideArrowUp01:u2,LucideArrowUp10:y2,LucideArrowUpAZ:ca,LucideArrowUpAz:ca,LucideArrowUpCircle:p2,LucideArrowUpDown:k2,LucideArrowUpFromDot:m2,LucideArrowUpFromLine:f2,LucideArrowUpLeft:x2,LucideArrowUpLeftFromCircle:g2,LucideArrowUpLeftFromSquare:v2,LucideArrowUpLeftSquare:M2,LucideArrowUpNarrowWide:la,LucideArrowUpRight:C2,LucideArrowUpRightFromCircle:w2,LucideArrowUpRightFromSquare:L2,LucideArrowUpRightSquare:b2,LucideArrowUpSquare:S2,LucideArrowUpToLine:I2,LucideArrowUpWideNarrow:P2,LucideArrowUpZA:sa,LucideArrowUpZa:sa,LucideArrowsUpFromLine:q2,LucideAsterisk:z2,LucideAsteriskSquare:da,LucideAtSign:j2,LucideAtom:H2,LucideAudioLines:T2,LucideAudioWaveform:V2,LucideAward:F2,LucideAxe:D2,LucideAxis3D:ha,LucideAxis3d:ha,LucideBaby:R2,LucideBackpack:B2,LucideBadge:tc,LucideBadgeAlert:E2,LucideBadgeCent:O2,LucideBadgeCheck:ua,LucideBadgeDollarSign:U2,LucideBadgeEuro:N2,LucideBadgeHelp:Z2,LucideBadgeIndianRupee:W2,LucideBadgeInfo:_2,LucideBadgeJapaneseYen:G2,LucideBadgeMinus:X2,LucideBadgePercent:K2,LucideBadgePlus:$2,LucideBadgePoundSterling:Q2,LucideBadgeRussianRuble:Y2,LucideBadgeSwissFranc:J2,LucideBadgeX:ec,LucideBaggageClaim:ac,LucideBan:nc,LucideBanana:rc,LucideBanknote:oc,LucideBarChart:uc,LucideBarChart2:ic,LucideBarChart3:cc,LucideBarChart4:lc,LucideBarChartBig:sc,LucideBarChartHorizontal:hc,LucideBarChartHorizontalBig:dc,LucideBarcode:yc,LucideBaseline:pc,LucideBath:kc,LucideBattery:xc,LucideBatteryCharging:mc,LucideBatteryFull:fc,LucideBatteryLow:gc,LucideBatteryMedium:vc,LucideBatteryWarning:Mc,LucideBeaker:wc,LucideBean:bc,LucideBeanOff:Lc,LucideBed:Ic,LucideBedDouble:Cc,LucideBedSingle:Sc,LucideBeef:Pc,LucideBeer:Ac,LucideBell:Fc,LucideBellDot:qc,LucideBellElectric:zc,LucideBellMinus:jc,LucideBellOff:Hc,LucideBellPlus:Tc,LucideBellRing:Vc,LucideBetweenHorizonalEnd:ya,LucideBetweenHorizonalStart:pa,LucideBetweenHorizontalEnd:ya,LucideBetweenHorizontalStart:pa,LucideBetweenVerticalEnd:Dc,LucideBetweenVerticalStart:Rc,LucideBike:Bc,LucideBinary:Ec,LucideBiohazard:Oc,LucideBird:Uc,LucideBitcoin:Nc,LucideBlend:Zc,LucideBlinds:Wc,LucideBlocks:_c,LucideBluetooth:$c,LucideBluetoothConnected:Gc,LucideBluetoothOff:Xc,LucideBluetoothSearching:Kc,LucideBold:Qc,LucideBolt:Yc,LucideBomb:Jc,LucideBone:el,LucideBook:Ll,LucideBookA:tl,LucideBookAudio:al,LucideBookCheck:nl,LucideBookCopy:rl,LucideBookDashed:ka,LucideBookDown:ol,LucideBookHeadphones:il,LucideBookHeart:cl,LucideBookImage:ll,LucideBookKey:sl,LucideBookLock:dl,LucideBookMarked:hl,LucideBookMinus:ul,LucideBookOpen:kl,LucideBookOpenCheck:yl,LucideBookOpenText:pl,LucideBookPlus:ml,LucideBookTemplate:ka,LucideBookText:fl,LucideBookType:gl,LucideBookUp:Ml,LucideBookUp2:vl,LucideBookUser:xl,LucideBookX:wl,LucideBookmark:Pl,LucideBookmarkCheck:bl,LucideBookmarkMinus:Cl,LucideBookmarkPlus:Sl,LucideBookmarkX:Il,LucideBoomBox:Al,LucideBot:zl,LucideBotMessageSquare:ql,LucideBox:Hl,LucideBoxSelect:jl,LucideBoxes:Tl,LucideBraces:ma,LucideBrackets:Vl,LucideBrain:Rl,LucideBrainCircuit:Fl,LucideBrainCog:Dl,LucideBrickWall:Bl,LucideBriefcase:El,LucideBringToFront:Ol,LucideBrush:Ul,LucideBug:Wl,LucideBugOff:Nl,LucideBugPlay:Zl,LucideBuilding:Gl,LucideBuilding2:_l,LucideBus:Kl,LucideBusFront:Xl,LucideCable:Ql,LucideCableCar:$l,LucideCake:Jl,LucideCakeSlice:Yl,LucideCalculator:es,LucideCalendar:ms,LucideCalendarCheck:as,LucideCalendarCheck2:ts,LucideCalendarClock:ns,LucideCalendarDays:rs,LucideCalendarFold:os,LucideCalendarHeart:is,LucideCalendarMinus:ls,LucideCalendarMinus2:cs,LucideCalendarOff:ss,LucideCalendarPlus:hs,LucideCalendarPlus2:ds,LucideCalendarRange:us,LucideCalendarSearch:ys,LucideCalendarX:ks,LucideCalendarX2:ps,LucideCamera:gs,LucideCameraOff:fs,LucideCandlestickChart:vs,LucideCandy:ws,LucideCandyCane:Ms,LucideCandyOff:xs,LucideCaptions:fa,LucideCaptionsOff:Ls,LucideCar:Ss,LucideCarFront:bs,LucideCarTaxiFront:Cs,LucideCaravan:Is,LucideCarrot:Ps,LucideCaseLower:As,LucideCaseSensitive:qs,LucideCaseUpper:zs,LucideCassetteTape:js,LucideCast:Hs,LucideCastle:Ts,LucideCat:Vs,LucideCctv:Fs,LucideCheck:Os,LucideCheckCheck:Ds,LucideCheckCircle:an,LucideCheckCircle2:Rs,LucideCheckSquare:Es,LucideCheckSquare2:Bs,LucideChefHat:Us,LucideCherry:Ns,LucideChevronDown:Jn,LucideChevronDownCircle:Zs,LucideChevronDownSquare:Ws,LucideChevronFirst:_s,LucideChevronLast:Gs,LucideChevronLeft:$s,LucideChevronLeftCircle:Xs,LucideChevronLeftSquare:Ks,LucideChevronRight:Js,LucideChevronRightCircle:Qs,LucideChevronRightSquare:Ys,LucideChevronUp:er,LucideChevronUpCircle:e0,LucideChevronUpSquare:t0,LucideChevronsDown:n0,LucideChevronsDownUp:a0,LucideChevronsLeft:o0,LucideChevronsLeftRight:r0,LucideChevronsRight:c0,LucideChevronsRightLeft:i0,LucideChevronsUp:s0,LucideChevronsUpDown:l0,LucideChrome:d0,LucideChurch:h0,LucideCigarette:y0,LucideCigaretteOff:u0,LucideCircle:w0,LucideCircleDashed:p0,LucideCircleDollarSign:k0,LucideCircleDot:f0,LucideCircleDotDashed:m0,LucideCircleEllipsis:g0,LucideCircleEqual:v0,LucideCircleFadingPlus:M0,LucideCircleOff:x0,LucideCircleSlash:tr,LucideCircleSlash2:ga,LucideCircleSlashed:ga,LucideCircleUser:Ma,LucideCircleUserRound:va,LucideCircuitBoard:L0,LucideCitrus:b0,LucideClapperboard:C0,LucideClipboard:T0,LucideClipboardCheck:S0,LucideClipboardCopy:I0,LucideClipboardEdit:wa,LucideClipboardList:P0,LucideClipboardMinus:A0,LucideClipboardPaste:q0,LucideClipboardPen:wa,LucideClipboardPenLine:xa,LucideClipboardPlus:z0,LucideClipboardSignature:xa,LucideClipboardType:j0,LucideClipboardX:H0,LucideClock:G0,LucideClock1:V0,LucideClock10:F0,LucideClock11:D0,LucideClock12:R0,LucideClock2:B0,LucideClock3:E0,LucideClock4:O0,LucideClock5:U0,LucideClock6:N0,LucideClock7:Z0,LucideClock8:W0,LucideClock9:_0,LucideCloud:cd,LucideCloudCog:X0,LucideCloudDrizzle:K0,LucideCloudFog:$0,LucideCloudHail:Q0,LucideCloudLightning:Y0,LucideCloudMoon:ed,LucideCloudMoonRain:J0,LucideCloudOff:td,LucideCloudRain:nd,LucideCloudRainWind:ad,LucideCloudSnow:rd,LucideCloudSun:id,LucideCloudSunRain:od,LucideCloudy:ld,LucideClover:sd,LucideClub:dd,LucideCode:ar,LucideCode2:hd,LucideCodeSquare:La,LucideCodepen:ud,LucideCodesandbox:yd,LucideCoffee:pd,LucideCog:kd,LucideCoins:md,LucideColumns:ba,LucideColumns2:ba,LucideColumns3:Ca,LucideColumns4:fd,LucideCombine:gd,LucideCommand:vd,LucideCompass:Md,LucideComponent:xd,LucideComputer:wd,LucideConciergeBell:Ld,LucideCone:bd,LucideConstruction:Cd,LucideContact:Id,LucideContact2:Sd,LucideContainer:Pd,LucideContrast:Ad,LucideCookie:qd,LucideCookingPot:zd,LucideCopy:Dd,LucideCopyCheck:jd,LucideCopyMinus:Hd,LucideCopyPlus:Td,LucideCopySlash:Vd,LucideCopyX:Fd,LucideCopyleft:Rd,LucideCopyright:Bd,LucideCornerDownLeft:Ed,LucideCornerDownRight:Od,LucideCornerLeftDown:Ud,LucideCornerLeftUp:Nd,LucideCornerRightDown:Zd,LucideCornerRightUp:Wd,LucideCornerUpLeft:_d,LucideCornerUpRight:Gd,LucideCpu:Xd,LucideCreativeCommons:Kd,LucideCreditCard:$d,LucideCroissant:Qd,LucideCrop:Yd,LucideCross:Jd,LucideCrosshair:eh,LucideCrown:th,LucideCuboid:ah,LucideCupSoda:nh,LucideCurlyBraces:ma,LucideCurrency:rh,LucideCylinder:oh,LucideDatabase:lh,LucideDatabaseBackup:ih,LucideDatabaseZap:ch,LucideDelete:sh,LucideDessert:dh,LucideDiameter:hh,LucideDiamond:uh,LucideDice1:yh,LucideDice2:ph,LucideDice3:kh,LucideDice4:mh,LucideDice5:fh,LucideDice6:gh,LucideDices:vh,LucideDiff:Mh,LucideDisc:bh,LucideDisc2:xh,LucideDisc3:wh,LucideDiscAlbum:Lh,LucideDivide:Ih,LucideDivideCircle:Ch,LucideDivideSquare:Sh,LucideDna:Ah,LucideDnaOff:Ph,LucideDog:qh,LucideDollarSign:zh,LucideDonut:jh,LucideDoorClosed:Hh,LucideDoorOpen:Th,LucideDot:Vh,LucideDotSquare:Sa,LucideDownload:Dh,LucideDownloadCloud:Fh,LucideDraftingCompass:Rh,LucideDrama:Bh,LucideDribbble:Eh,LucideDrill:Oh,LucideDroplet:Uh,LucideDroplets:Nh,LucideDrum:Zh,LucideDrumstick:Wh,LucideDumbbell:_h,LucideEar:Xh,LucideEarOff:Gh,LucideEarth:Ia,LucideEarthLock:Kh,LucideEclipse:$h,LucideEdit:Ie,LucideEdit2:Qa,LucideEdit3:$a,LucideEgg:Jh,LucideEggFried:Qh,LucideEggOff:Yh,LucideEqual:tu,LucideEqualNot:eu,LucideEqualSquare:Pa,LucideEraser:au,LucideEuro:nu,LucideExpand:ru,LucideExternalLink:nr,LucideEye:iu,LucideEyeOff:ou,LucideFacebook:cu,LucideFactory:lu,LucideFan:su,LucideFastForward:du,LucideFeather:hu,LucideFence:uu,LucideFerrisWheel:yu,LucideFigma:pu,LucideFile:py,LucideFileArchive:ku,LucideFileAudio:fu,LucideFileAudio2:mu,LucideFileAxis3D:Aa,LucideFileAxis3d:Aa,LucideFileBadge:vu,LucideFileBadge2:gu,LucideFileBarChart:xu,LucideFileBarChart2:Mu,LucideFileBox:wu,LucideFileCheck:bu,LucideFileCheck2:Lu,LucideFileClock:Cu,LucideFileCode:Iu,LucideFileCode2:Su,LucideFileCog:qa,LucideFileCog2:qa,LucideFileDiff:Pu,LucideFileDigit:Au,LucideFileDown:qu,LucideFileEdit:ja,LucideFileHeart:zu,LucideFileImage:ju,LucideFileInput:Hu,LucideFileJson:Vu,LucideFileJson2:Tu,LucideFileKey:Du,LucideFileKey2:Fu,LucideFileLineChart:Ru,LucideFileLock:Eu,LucideFileLock2:Bu,LucideFileMinus:Uu,LucideFileMinus2:Ou,LucideFileMusic:Nu,LucideFileOutput:Zu,LucideFilePen:ja,LucideFilePenLine:za,LucideFilePieChart:Wu,LucideFilePlus:Gu,LucideFilePlus2:_u,LucideFileQuestion:Xu,LucideFileScan:Ku,LucideFileSearch:Qu,LucideFileSearch2:$u,LucideFileSignature:za,LucideFileSliders:Yu,LucideFileSpreadsheet:Ju,LucideFileStack:ey,LucideFileSymlink:ty,LucideFileTerminal:ay,LucideFileText:ny,LucideFileType:oy,LucideFileType2:ry,LucideFileUp:iy,LucideFileVideo:ly,LucideFileVideo2:cy,LucideFileVolume:dy,LucideFileVolume2:sy,LucideFileWarning:hy,LucideFileX:yy,LucideFileX2:uy,LucideFiles:ky,LucideFilm:my,LucideFilter:gy,LucideFilterX:fy,LucideFingerprint:vy,LucideFireExtinguisher:My,LucideFish:Ly,LucideFishOff:xy,LucideFishSymbol:wy,LucideFlag:Iy,LucideFlagOff:by,LucideFlagTriangleLeft:Cy,LucideFlagTriangleRight:Sy,LucideFlame:Ay,LucideFlameKindling:Py,LucideFlashlight:zy,LucideFlashlightOff:qy,LucideFlaskConical:Hy,LucideFlaskConicalOff:jy,LucideFlaskRound:Ty,LucideFlipHorizontal:Fy,LucideFlipHorizontal2:Vy,LucideFlipVertical:Ry,LucideFlipVertical2:Dy,LucideFlower:Ey,LucideFlower2:By,LucideFocus:Oy,LucideFoldHorizontal:Uy,LucideFoldVertical:Ny,LucideFolder:mp,LucideFolderArchive:Zy,LucideFolderCheck:Wy,LucideFolderClock:_y,LucideFolderClosed:Gy,LucideFolderCog:Ha,LucideFolderCog2:Ha,LucideFolderDot:Xy,LucideFolderDown:Ky,LucideFolderEdit:Ta,LucideFolderGit:Qy,LucideFolderGit2:$y,LucideFolderHeart:Yy,LucideFolderInput:Jy,LucideFolderKanban:ep,LucideFolderKey:tp,LucideFolderLock:ap,LucideFolderMinus:np,LucideFolderOpen:op,LucideFolderOpenDot:rp,LucideFolderOutput:ip,LucideFolderPen:Ta,LucideFolderPlus:cp,LucideFolderRoot:lp,LucideFolderSearch:dp,LucideFolderSearch2:sp,LucideFolderSymlink:hp,LucideFolderSync:up,LucideFolderTree:yp,LucideFolderUp:pp,LucideFolderX:kp,LucideFolders:fp,LucideFootprints:gp,LucideForklift:vp,LucideFormInput:Mp,LucideForward:xp,LucideFrame:wp,LucideFramer:Lp,LucideFrown:bp,LucideFuel:Cp,LucideFullscreen:Sp,LucideFunctionSquare:Ip,LucideGalleryHorizontal:Ap,LucideGalleryHorizontalEnd:Pp,LucideGalleryThumbnails:qp,LucideGalleryVertical:jp,LucideGalleryVerticalEnd:zp,LucideGamepad:Tp,LucideGamepad2:Hp,LucideGanttChart:Vp,LucideGanttChartSquare:et,LucideGanttSquare:et,LucideGauge:Dp,LucideGaugeCircle:Fp,LucideGavel:Rp,LucideGem:Bp,LucideGhost:Ep,LucideGift:Op,LucideGitBranch:Np,LucideGitBranchPlus:Up,LucideGitCommit:Va,LucideGitCommitHorizontal:Va,LucideGitCommitVertical:Zp,LucideGitCompare:_p,LucideGitCompareArrows:Wp,LucideGitFork:Gp,LucideGitGraph:Xp,LucideGitMerge:Kp,LucideGitPullRequest:tk,LucideGitPullRequestArrow:$p,LucideGitPullRequestClosed:Qp,LucideGitPullRequestCreate:Jp,LucideGitPullRequestCreateArrow:Yp,LucideGitPullRequestDraft:ek,LucideGithub:rr,LucideGitlab:ak,LucideGlassWater:nk,LucideGlasses:rk,LucideGlobe:ik,LucideGlobe2:Ia,LucideGlobeLock:ok,LucideGoal:ck,LucideGrab:lk,LucideGraduationCap:sk,LucideGrape:dk,LucideGrid:tt,LucideGrid2X2:Fa,LucideGrid2x2:Fa,LucideGrid3X3:tt,LucideGrid3x3:tt,LucideGrip:yk,LucideGripHorizontal:hk,LucideGripVertical:uk,LucideGroup:pk,LucideGuitar:kk,LucideHammer:mk,LucideHand:xk,LucideHandCoins:fk,LucideHandHeart:gk,LucideHandHelping:Da,LucideHandMetal:vk,LucideHandPlatter:Mk,LucideHandshake:wk,LucideHardDrive:Ck,LucideHardDriveDownload:Lk,LucideHardDriveUpload:bk,LucideHardHat:Sk,LucideHash:Ik,LucideHaze:Pk,LucideHdmiPort:Ak,LucideHeading:Fk,LucideHeading1:qk,LucideHeading2:zk,LucideHeading3:jk,LucideHeading4:Hk,LucideHeading5:Tk,LucideHeading6:Vk,LucideHeadphones:Dk,LucideHeadset:Rk,LucideHeart:Nk,LucideHeartCrack:Bk,LucideHeartHandshake:Ek,LucideHeartOff:Ok,LucideHeartPulse:Uk,LucideHeater:Zk,LucideHelpCircle:Wk,LucideHelpingHand:Da,LucideHexagon:_k,LucideHighlighter:Gk,LucideHistory:Xk,LucideHome:Kk,LucideHop:Qk,LucideHopOff:$k,LucideHotel:Yk,LucideHourglass:Jk,LucideIceCream:t4,LucideIceCream2:e4,LucideImage:c4,LucideImageDown:a4,LucideImageMinus:n4,LucideImageOff:r4,LucideImagePlus:o4,LucideImageUp:i4,LucideImages:l4,LucideImport:s4,LucideInbox:d4,LucideIndent:h4,LucideIndianRupee:u4,LucideInfinity:y4,LucideInfo:p4,LucideInspect:Ea,LucideInspectionPanel:k4,LucideInstagram:m4,LucideItalic:f4,LucideIterationCcw:g4,LucideIterationCw:v4,LucideJapaneseYen:M4,LucideJoystick:x4,LucideKanban:w4,LucideKanbanSquare:Ba,LucideKanbanSquareDashed:Ra,LucideKey:C4,LucideKeyRound:L4,LucideKeySquare:b4,LucideKeyboard:I4,LucideKeyboardMusic:S4,LucideLamp:H4,LucideLampCeiling:P4,LucideLampDesk:A4,LucideLampFloor:q4,LucideLampWallDown:z4,LucideLampWallUp:j4,LucideLandPlot:T4,LucideLandmark:V4,LucideLanguages:F4,LucideLaptop:R4,LucideLaptop2:D4,LucideLasso:E4,LucideLassoSelect:B4,LucideLaugh:O4,LucideLayers:Z4,LucideLayers2:U4,LucideLayers3:N4,LucideLayout:Ka,LucideLayoutDashboard:W4,LucideLayoutGrid:_4,LucideLayoutList:G4,LucideLayoutPanelLeft:X4,LucideLayoutPanelTop:K4,LucideLayoutTemplate:$4,LucideLeaf:Q4,LucideLeafyGreen:Y4,LucideLibrary:t5,LucideLibraryBig:J4,LucideLibrarySquare:e5,LucideLifeBuoy:a5,LucideLigature:n5,LucideLightbulb:o5,LucideLightbulbOff:r5,LucideLineChart:i5,LucideLink:s5,LucideLink2:l5,LucideLink2Off:c5,LucideLinkedin:d5,LucideList:C5,LucideListChecks:h5,LucideListCollapse:u5,LucideListEnd:y5,LucideListFilter:p5,LucideListMinus:k5,LucideListMusic:m5,LucideListOrdered:f5,LucideListPlus:g5,LucideListRestart:v5,LucideListStart:M5,LucideListTodo:x5,LucideListTree:w5,LucideListVideo:L5,LucideListX:b5,LucideLoader:I5,LucideLoader2:S5,LucideLocate:q5,LucideLocateFixed:P5,LucideLocateOff:A5,LucideLock:j5,LucideLockKeyhole:z5,LucideLogIn:H5,LucideLogOut:T5,LucideLollipop:V5,LucideLuggage:F5,LucideMSquare:D5,LucideMagnet:R5,LucideMail:or,LucideMailCheck:B5,LucideMailMinus:E5,LucideMailOpen:O5,LucideMailPlus:U5,LucideMailQuestion:N5,LucideMailSearch:Z5,LucideMailWarning:W5,LucideMailX:_5,LucideMailbox:G5,LucideMails:X5,LucideMap:Y5,LucideMapPin:$5,LucideMapPinOff:K5,LucideMapPinned:Q5,LucideMartini:J5,LucideMaximize:t3,LucideMaximize2:e3,LucideMedal:a3,LucideMegaphone:r3,LucideMegaphoneOff:n3,LucideMeh:o3,LucideMemoryStick:i3,LucideMenu:ir,LucideMenuSquare:c3,LucideMerge:l3,LucideMessageCircle:v3,LucideMessageCircleCode:s3,LucideMessageCircleDashed:d3,LucideMessageCircleHeart:h3,LucideMessageCircleMore:u3,LucideMessageCircleOff:y3,LucideMessageCirclePlus:p3,LucideMessageCircleQuestion:k3,LucideMessageCircleReply:m3,LucideMessageCircleWarning:f3,LucideMessageCircleX:g3,LucideMessageSquare:T3,LucideMessageSquareCode:M3,LucideMessageSquareDashed:x3,LucideMessageSquareDiff:w3,LucideMessageSquareDot:L3,LucideMessageSquareHeart:b3,LucideMessageSquareMore:C3,LucideMessageSquareOff:S3,LucideMessageSquarePlus:I3,LucideMessageSquareQuote:P3,LucideMessageSquareReply:A3,LucideMessageSquareShare:q3,LucideMessageSquareText:z3,LucideMessageSquareWarning:j3,LucideMessageSquareX:H3,LucideMessagesSquare:V3,LucideMic:R3,LucideMic2:F3,LucideMicOff:D3,LucideMicroscope:B3,LucideMicrowave:E3,LucideMilestone:O3,LucideMilk:N3,LucideMilkOff:U3,LucideMinimize:W3,LucideMinimize2:Z3,LucideMinus:X3,LucideMinusCircle:_3,LucideMinusSquare:G3,LucideMonitor:im,LucideMonitorCheck:K3,LucideMonitorDot:$3,LucideMonitorDown:Q3,LucideMonitorOff:Y3,LucideMonitorPause:J3,LucideMonitorPlay:em,LucideMonitorSmartphone:tm,LucideMonitorSpeaker:am,LucideMonitorStop:nm,LucideMonitorUp:rm,LucideMonitorX:om,LucideMoon:nn,LucideMoonStar:cm,LucideMoreHorizontal:lm,LucideMoreVertical:sm,LucideMountain:hm,LucideMountainSnow:dm,LucideMouse:mm,LucideMousePointer:km,LucideMousePointer2:um,LucideMousePointerClick:ym,LucideMousePointerSquare:Ea,LucideMousePointerSquareDashed:pm,LucideMove:Am,LucideMove3D:Oa,LucideMove3d:Oa,LucideMoveDiagonal:gm,LucideMoveDiagonal2:fm,LucideMoveDown:xm,LucideMoveDownLeft:vm,LucideMoveDownRight:Mm,LucideMoveHorizontal:wm,LucideMoveLeft:Lm,LucideMoveRight:bm,LucideMoveUp:Im,LucideMoveUpLeft:Cm,LucideMoveUpRight:Sm,LucideMoveVertical:Pm,LucideMusic:Hm,LucideMusic2:qm,LucideMusic3:zm,LucideMusic4:jm,LucideNavigation:Dm,LucideNavigation2:Vm,LucideNavigation2Off:Tm,LucideNavigationOff:Fm,LucideNetwork:Rm,LucideNewspaper:Bm,LucideNfc:Em,LucideNotebook:Zm,LucideNotebookPen:Om,LucideNotebookTabs:Um,LucideNotebookText:Nm,LucideNotepadText:_m,LucideNotepadTextDashed:Wm,LucideNut:Xm,LucideNutOff:Gm,LucideOctagon:Km,LucideOption:$m,LucideOrbit:Qm,LucideOutdent:Ym,LucidePackage:cf,LucidePackage2:Jm,LucidePackageCheck:ef,LucidePackageMinus:tf,LucidePackageOpen:af,LucidePackagePlus:nf,LucidePackageSearch:rf,LucidePackageX:of,LucidePaintBucket:lf,LucidePaintRoller:sf,LucidePaintbrush:hf,LucidePaintbrush2:df,LucidePalette:uf,LucidePalmtree:yf,LucidePanelBottom:mf,LucidePanelBottomClose:pf,LucidePanelBottomDashed:Ua,LucidePanelBottomInactive:Ua,LucidePanelBottomOpen:kf,LucidePanelLeft:_a,LucidePanelLeftClose:Na,LucidePanelLeftDashed:Za,LucidePanelLeftInactive:Za,LucidePanelLeftOpen:Wa,LucidePanelRight:vf,LucidePanelRightClose:ff,LucidePanelRightDashed:Ga,LucidePanelRightInactive:Ga,LucidePanelRightOpen:gf,LucidePanelTop:wf,LucidePanelTopClose:Mf,LucidePanelTopDashed:Xa,LucidePanelTopInactive:Xa,LucidePanelTopOpen:xf,LucidePanelsLeftBottom:Lf,LucidePanelsLeftRight:Ca,LucidePanelsRightBottom:bf,LucidePanelsTopBottom:e1,LucidePanelsTopLeft:Ka,LucidePaperclip:Cf,LucideParentheses:Sf,LucideParkingCircle:Pf,LucideParkingCircleOff:If,LucideParkingMeter:Af,LucideParkingSquare:zf,LucideParkingSquareOff:qf,LucidePartyPopper:jf,LucidePause:Vf,LucidePauseCircle:Hf,LucidePauseOctagon:Tf,LucidePawPrint:Ff,LucidePcCase:Df,LucidePen:Qa,LucidePenBox:Ie,LucidePenLine:$a,LucidePenSquare:Ie,LucidePenTool:Rf,LucidePencil:Of,LucidePencilLine:Bf,LucidePencilRuler:Ef,LucidePentagon:Uf,LucidePercent:_f,LucidePercentCircle:Nf,LucidePercentDiamond:Zf,LucidePercentSquare:Wf,LucidePersonStanding:Gf,LucidePhone:cr,LucidePhoneCall:Xf,LucidePhoneForwarded:Kf,LucidePhoneIncoming:$f,LucidePhoneMissed:Qf,LucidePhoneOff:Yf,LucidePhoneOutgoing:Jf,LucidePi:t6,LucidePiSquare:e6,LucidePiano:a6,LucidePickaxe:n6,LucidePictureInPicture:o6,LucidePictureInPicture2:r6,LucidePieChart:i6,LucidePiggyBank:c6,LucidePilcrow:s6,LucidePilcrowSquare:l6,LucidePill:d6,LucidePin:u6,LucidePinOff:h6,LucidePipette:y6,LucidePizza:p6,LucidePlane:f6,LucidePlaneLanding:k6,LucidePlaneTakeoff:m6,LucidePlay:M6,LucidePlayCircle:g6,LucidePlaySquare:v6,LucidePlug:b6,LucidePlug2:x6,LucidePlugZap:L6,LucidePlugZap2:w6,LucidePlus:I6,LucidePlusCircle:C6,LucidePlusSquare:S6,LucidePocket:A6,LucidePocketKnife:P6,LucidePodcast:q6,LucidePointer:j6,LucidePointerOff:z6,LucidePopcorn:H6,LucidePopsicle:T6,LucidePoundSterling:V6,LucidePower:B6,LucidePowerCircle:F6,LucidePowerOff:D6,LucidePowerSquare:R6,LucidePresentation:E6,LucidePrinter:O6,LucideProjector:U6,LucidePuzzle:N6,LucidePyramid:Z6,LucideQrCode:W6,LucideQuote:_6,LucideRabbit:G6,LucideRadar:X6,LucideRadiation:K6,LucideRadical:$6,LucideRadio:J6,LucideRadioReceiver:Q6,LucideRadioTower:Y6,LucideRadius:e8,LucideRailSymbol:t8,LucideRainbow:a8,LucideRat:n8,LucideRatio:r8,LucideReceipt:y8,LucideReceiptCent:o8,LucideReceiptEuro:i8,LucideReceiptIndianRupee:c8,LucideReceiptJapaneseYen:l8,LucideReceiptPoundSterling:s8,LucideReceiptRussianRuble:d8,LucideReceiptSwissFranc:h8,LucideReceiptText:u8,LucideRectangleHorizontal:p8,LucideRectangleVertical:k8,LucideRecycle:m8,LucideRedo:v8,LucideRedo2:f8,LucideRedoDot:g8,LucideRefreshCcw:x8,LucideRefreshCcwDot:M8,LucideRefreshCw:L8,LucideRefreshCwOff:w8,LucideRefrigerator:b8,LucideRegex:C8,LucideRemoveFormatting:S8,LucideRepeat:A8,LucideRepeat1:I8,LucideRepeat2:P8,LucideReplace:z8,LucideReplaceAll:q8,LucideReply:H8,LucideReplyAll:j8,LucideRewind:T8,LucideRibbon:V8,LucideRocket:F8,LucideRockingChair:D8,LucideRollerCoaster:R8,LucideRotate3D:Ya,LucideRotate3d:Ya,LucideRotateCcw:B8,LucideRotateCw:E8,LucideRoute:U8,LucideRouteOff:O8,LucideRouter:N8,LucideRows:Ja,LucideRows2:Ja,LucideRows3:e1,LucideRows4:Z8,LucideRss:W8,LucideRuler:_8,LucideRussianRuble:G8,LucideSailboat:X8,LucideSalad:K8,LucideSandwich:$8,LucideSatellite:Y8,LucideSatelliteDish:Q8,LucideSave:eg,LucideSaveAll:J8,LucideScale:tg,LucideScale3D:t1,LucideScale3d:t1,LucideScaling:ag,LucideScan:sg,LucideScanBarcode:ng,LucideScanEye:rg,LucideScanFace:og,LucideScanLine:ig,LucideScanSearch:cg,LucideScanText:lg,LucideScatterChart:dg,LucideSchool:ug,LucideSchool2:hg,LucideScissors:mg,LucideScissorsLineDashed:yg,LucideScissorsSquare:kg,LucideScissorsSquareDashedBottom:pg,LucideScreenShare:gg,LucideScreenShareOff:fg,LucideScroll:Mg,LucideScrollText:vg,LucideSearch:Cg,LucideSearchCheck:xg,LucideSearchCode:wg,LucideSearchSlash:Lg,LucideSearchX:bg,LucideSend:lr,LucideSendHorizonal:a1,LucideSendHorizontal:a1,LucideSendToBack:Sg,LucideSeparatorHorizontal:Ig,LucideSeparatorVertical:Pg,LucideServer:jg,LucideServerCog:Ag,LucideServerCrash:qg,LucideServerOff:zg,LucideSettings:Tg,LucideSettings2:Hg,LucideShapes:Vg,LucideShare:Dg,LucideShare2:Fg,LucideSheet:Rg,LucideShell:Bg,LucideShield:Kg,LucideShieldAlert:Eg,LucideShieldBan:Og,LucideShieldCheck:Ug,LucideShieldClose:n1,LucideShieldEllipsis:Ng,LucideShieldHalf:Zg,LucideShieldMinus:Wg,LucideShieldOff:_g,LucideShieldPlus:Gg,LucideShieldQuestion:Xg,LucideShieldX:n1,LucideShip:Qg,LucideShipWheel:$g,LucideShirt:Yg,LucideShoppingBag:Jg,LucideShoppingBasket:ev,LucideShoppingCart:tv,LucideShovel:av,LucideShowerHead:nv,LucideShrink:rv,LucideShrub:ov,LucideShuffle:iv,LucideSidebar:_a,LucideSidebarClose:Na,LucideSidebarOpen:Wa,LucideSigma:lv,LucideSigmaSquare:cv,LucideSignal:yv,LucideSignalHigh:sv,LucideSignalLow:dv,LucideSignalMedium:hv,LucideSignalZero:uv,LucideSignpost:kv,LucideSignpostBig:pv,LucideSiren:mv,LucideSkipBack:fv,LucideSkipForward:gv,LucideSkull:vv,LucideSlack:Mv,LucideSlash:xv,LucideSlashSquare:r1,LucideSlice:wv,LucideSliders:bv,LucideSlidersHorizontal:Lv,LucideSmartphone:Iv,LucideSmartphoneCharging:Cv,LucideSmartphoneNfc:Sv,LucideSmile:Av,LucideSmilePlus:Pv,LucideSnail:qv,LucideSnowflake:zv,LucideSofa:jv,LucideSortAsc:la,LucideSortDesc:oa,LucideSoup:Hv,LucideSpace:Tv,LucideSpade:Vv,LucideSparkle:Fv,LucideSparkles:o1,LucideSpeaker:Dv,LucideSpeech:Rv,LucideSpellCheck:Ev,LucideSpellCheck2:Bv,LucideSpline:Ov,LucideSplit:Zv,LucideSplitSquareHorizontal:Uv,LucideSplitSquareVertical:Nv,LucideSprayCan:Wv,LucideSprout:_v,LucideSquare:Qv,LucideSquareAsterisk:da,LucideSquareCode:La,LucideSquareDashedBottom:Xv,LucideSquareDashedBottomCode:Gv,LucideSquareDot:Sa,LucideSquareEqual:Pa,LucideSquareGantt:et,LucideSquareKanban:Ba,LucideSquareKanbanDashed:Ra,LucideSquarePen:Ie,LucideSquareRadical:Kv,LucideSquareSlash:r1,LucideSquareStack:$v,LucideSquareUser:c1,LucideSquareUserRound:i1,LucideSquircle:Yv,LucideSquirrel:Jv,LucideStamp:e7,LucideStar:n7,LucideStarHalf:t7,LucideStarOff:a7,LucideStars:o1,LucideStepBack:r7,LucideStepForward:o7,LucideStethoscope:i7,LucideSticker:c7,LucideStickyNote:l7,LucideStopCircle:s7,LucideStore:d7,LucideStretchHorizontal:h7,LucideStretchVertical:u7,LucideStrikethrough:y7,LucideSubscript:p7,LucideSubtitles:fa,LucideSun:rn,LucideSunDim:k7,LucideSunMedium:m7,LucideSunMoon:f7,LucideSunSnow:g7,LucideSunrise:v7,LucideSunset:M7,LucideSuperscript:x7,LucideSwatchBook:w7,LucideSwissFranc:L7,LucideSwitchCamera:b7,LucideSword:C7,LucideSwords:S7,LucideSyringe:I7,LucideTable:T7,LucideTable2:P7,LucideTableCellsMerge:A7,LucideTableCellsSplit:q7,LucideTableColumnsSplit:z7,LucideTableProperties:j7,LucideTableRowsSplit:H7,LucideTablet:F7,LucideTabletSmartphone:V7,LucideTablets:D7,LucideTag:R7,LucideTags:B7,LucideTally1:E7,LucideTally2:O7,LucideTally3:U7,LucideTally4:N7,LucideTally5:Z7,LucideTangent:W7,LucideTarget:_7,LucideTelescope:G7,LucideTent:K7,LucideTentTree:X7,LucideTerminal:Q7,LucideTerminalSquare:$7,LucideTestTube:J7,LucideTestTube2:Y7,LucideTestTubes:eM,LucideText:oM,LucideTextCursor:aM,LucideTextCursorInput:tM,LucideTextQuote:nM,LucideTextSearch:rM,LucideTextSelect:l1,LucideTextSelection:l1,LucideTheater:iM,LucideThermometer:sM,LucideThermometerSnowflake:cM,LucideThermometerSun:lM,LucideThumbsDown:dM,LucideThumbsUp:hM,LucideTicket:gM,LucideTicketCheck:uM,LucideTicketMinus:yM,LucideTicketPercent:pM,LucideTicketPlus:kM,LucideTicketSlash:mM,LucideTicketX:fM,LucideTimer:xM,LucideTimerOff:vM,LucideTimerReset:MM,LucideToggleLeft:wM,LucideToggleRight:LM,LucideTornado:bM,LucideTorus:CM,LucideTouchpad:IM,LucideTouchpadOff:SM,LucideTowerControl:PM,LucideToyBrick:AM,LucideTractor:qM,LucideTrafficCone:zM,LucideTrain:s1,LucideTrainFront:HM,LucideTrainFrontTunnel:jM,LucideTrainTrack:TM,LucideTramFront:s1,LucideTrash:FM,LucideTrash2:VM,LucideTreeDeciduous:DM,LucideTreePine:RM,LucideTrees:BM,LucideTrello:EM,LucideTrendingDown:OM,LucideTrendingUp:UM,LucideTriangle:ZM,LucideTriangleRight:NM,LucideTrophy:WM,LucideTruck:_M,LucideTurtle:GM,LucideTv:KM,LucideTv2:XM,LucideTwitch:$M,LucideTwitter:QM,LucideType:YM,LucideUmbrella:e9,LucideUmbrellaOff:JM,LucideUnderline:t9,LucideUndo:r9,LucideUndo2:a9,LucideUndoDot:n9,LucideUnfoldHorizontal:o9,LucideUnfoldVertical:i9,LucideUngroup:c9,LucideUnlink:s9,LucideUnlink2:l9,LucideUnlock:h9,LucideUnlockKeyhole:d9,LucideUnplug:u9,LucideUpload:p9,LucideUploadCloud:y9,LucideUsb:k9,LucideUser:L9,LucideUser2:k1,LucideUserCheck:m9,LucideUserCheck2:d1,LucideUserCircle:Ma,LucideUserCircle2:va,LucideUserCog:f9,LucideUserCog2:h1,LucideUserMinus:g9,LucideUserMinus2:u1,LucideUserPlus:v9,LucideUserPlus2:y1,LucideUserRound:k1,LucideUserRoundCheck:d1,LucideUserRoundCog:h1,LucideUserRoundMinus:u1,LucideUserRoundPlus:y1,LucideUserRoundSearch:M9,LucideUserRoundX:p1,LucideUserSearch:x9,LucideUserSquare:c1,LucideUserSquare2:i1,LucideUserX:w9,LucideUserX2:p1,LucideUsers:b9,LucideUsers2:m1,LucideUsersRound:m1,LucideUtensils:S9,LucideUtensilsCrossed:C9,LucideUtilityPole:I9,LucideVariable:P9,LucideVault:A9,LucideVegan:q9,LucideVenetianMask:z9,LucideVerified:ua,LucideVibrate:H9,LucideVibrateOff:j9,LucideVideo:V9,LucideVideoOff:T9,LucideVideotape:F9,LucideView:D9,LucideVoicemail:R9,LucideVolume:U9,LucideVolume1:B9,LucideVolume2:E9,LucideVolumeX:O9,LucideVote:N9,LucideWallet:_9,LucideWallet2:Z9,LucideWalletCards:W9,LucideWallpaper:G9,LucideWand:K9,LucideWand2:X9,LucideWarehouse:$9,LucideWashingMachine:Q9,LucideWatch:Y9,LucideWaves:J9,LucideWaypoints:ex,LucideWebcam:tx,LucideWebhook:nx,LucideWebhookOff:ax,LucideWeight:rx,LucideWheat:ix,LucideWheatOff:ox,LucideWholeWord:cx,LucideWifi:sx,LucideWifiOff:lx,LucideWind:dx,LucideWine:ux,LucideWineOff:hx,LucideWorkflow:yx,LucideWrapText:px,LucideWrench:kx,LucideX:on,LucideXCircle:mx,LucideXOctagon:fx,LucideXSquare:gx,LucideYoutube:vx,LucideZap:xx,LucideZapOff:Mx,LucideZoomIn:wx,LucideZoomOut:Lx,Luggage:F5,LuggageIcon:F5,MSquare:D5,MSquareIcon:D5,Magnet:R5,MagnetIcon:R5,Mail:or,MailCheck:B5,MailCheckIcon:B5,MailIcon:or,MailMinus:E5,MailMinusIcon:E5,MailOpen:O5,MailOpenIcon:O5,MailPlus:U5,MailPlusIcon:U5,MailQuestion:N5,MailQuestionIcon:N5,MailSearch:Z5,MailSearchIcon:Z5,MailWarning:W5,MailWarningIcon:W5,MailX:_5,MailXIcon:_5,Mailbox:G5,MailboxIcon:G5,Mails:X5,MailsIcon:X5,Map:Y5,MapIcon:Y5,MapPin:$5,MapPinIcon:$5,MapPinOff:K5,MapPinOffIcon:K5,MapPinned:Q5,MapPinnedIcon:Q5,Martini:J5,MartiniIcon:J5,Maximize:t3,Maximize2:e3,Maximize2Icon:e3,MaximizeIcon:t3,Medal:a3,MedalIcon:a3,Megaphone:r3,MegaphoneIcon:r3,MegaphoneOff:n3,MegaphoneOffIcon:n3,Meh:o3,MehIcon:o3,MemoryStick:i3,MemoryStickIcon:i3,Menu:ir,MenuIcon:ir,MenuSquare:c3,MenuSquareIcon:c3,Merge:l3,MergeIcon:l3,MessageCircle:v3,MessageCircleCode:s3,MessageCircleCodeIcon:s3,MessageCircleDashed:d3,MessageCircleDashedIcon:d3,MessageCircleHeart:h3,MessageCircleHeartIcon:h3,MessageCircleIcon:v3,MessageCircleMore:u3,MessageCircleMoreIcon:u3,MessageCircleOff:y3,MessageCircleOffIcon:y3,MessageCirclePlus:p3,MessageCirclePlusIcon:p3,MessageCircleQuestion:k3,MessageCircleQuestionIcon:k3,MessageCircleReply:m3,MessageCircleReplyIcon:m3,MessageCircleWarning:f3,MessageCircleWarningIcon:f3,MessageCircleX:g3,MessageCircleXIcon:g3,MessageSquare:T3,MessageSquareCode:M3,MessageSquareCodeIcon:M3,MessageSquareDashed:x3,MessageSquareDashedIcon:x3,MessageSquareDiff:w3,MessageSquareDiffIcon:w3,MessageSquareDot:L3,MessageSquareDotIcon:L3,MessageSquareHeart:b3,MessageSquareHeartIcon:b3,MessageSquareIcon:T3,MessageSquareMore:C3,MessageSquareMoreIcon:C3,MessageSquareOff:S3,MessageSquareOffIcon:S3,MessageSquarePlus:I3,MessageSquarePlusIcon:I3,MessageSquareQuote:P3,MessageSquareQuoteIcon:P3,MessageSquareReply:A3,MessageSquareReplyIcon:A3,MessageSquareShare:q3,MessageSquareShareIcon:q3,MessageSquareText:z3,MessageSquareTextIcon:z3,MessageSquareWarning:j3,MessageSquareWarningIcon:j3,MessageSquareX:H3,MessageSquareXIcon:H3,MessagesSquare:V3,MessagesSquareIcon:V3,Mic:R3,Mic2:F3,Mic2Icon:F3,MicIcon:R3,MicOff:D3,MicOffIcon:D3,Microscope:B3,MicroscopeIcon:B3,Microwave:E3,MicrowaveIcon:E3,Milestone:O3,MilestoneIcon:O3,Milk:N3,MilkIcon:N3,MilkOff:U3,MilkOffIcon:U3,Minimize:W3,Minimize2:Z3,Minimize2Icon:Z3,MinimizeIcon:W3,Minus:X3,MinusCircle:_3,MinusCircleIcon:_3,MinusIcon:X3,MinusSquare:G3,MinusSquareIcon:G3,Monitor:im,MonitorCheck:K3,MonitorCheckIcon:K3,MonitorDot:$3,MonitorDotIcon:$3,MonitorDown:Q3,MonitorDownIcon:Q3,MonitorIcon:im,MonitorOff:Y3,MonitorOffIcon:Y3,MonitorPause:J3,MonitorPauseIcon:J3,MonitorPlay:em,MonitorPlayIcon:em,MonitorSmartphone:tm,MonitorSmartphoneIcon:tm,MonitorSpeaker:am,MonitorSpeakerIcon:am,MonitorStop:nm,MonitorStopIcon:nm,MonitorUp:rm,MonitorUpIcon:rm,MonitorX:om,MonitorXIcon:om,Moon:nn,MoonIcon:nn,MoonStar:cm,MoonStarIcon:cm,MoreHorizontal:lm,MoreHorizontalIcon:lm,MoreVertical:sm,MoreVerticalIcon:sm,Mountain:hm,MountainIcon:hm,MountainSnow:dm,MountainSnowIcon:dm,Mouse:mm,MouseIcon:mm,MousePointer:km,MousePointer2:um,MousePointer2Icon:um,MousePointerClick:ym,MousePointerClickIcon:ym,MousePointerIcon:km,MousePointerSquare:Ea,MousePointerSquareDashed:pm,MousePointerSquareDashedIcon:pm,MousePointerSquareIcon:Ea,Move:Am,Move3D:Oa,Move3DIcon:Oa,Move3d:Oa,Move3dIcon:Oa,MoveDiagonal:gm,MoveDiagonal2:fm,MoveDiagonal2Icon:fm,MoveDiagonalIcon:gm,MoveDown:xm,MoveDownIcon:xm,MoveDownLeft:vm,MoveDownLeftIcon:vm,MoveDownRight:Mm,MoveDownRightIcon:Mm,MoveHorizontal:wm,MoveHorizontalIcon:wm,MoveIcon:Am,MoveLeft:Lm,MoveLeftIcon:Lm,MoveRight:bm,MoveRightIcon:bm,MoveUp:Im,MoveUpIcon:Im,MoveUpLeft:Cm,MoveUpLeftIcon:Cm,MoveUpRight:Sm,MoveUpRightIcon:Sm,MoveVertical:Pm,MoveVerticalIcon:Pm,Music:Hm,Music2:qm,Music2Icon:qm,Music3:zm,Music3Icon:zm,Music4:jm,Music4Icon:jm,MusicIcon:Hm,Navigation:Dm,Navigation2:Vm,Navigation2Icon:Vm,Navigation2Off:Tm,Navigation2OffIcon:Tm,NavigationIcon:Dm,NavigationOff:Fm,NavigationOffIcon:Fm,Network:Rm,NetworkIcon:Rm,Newspaper:Bm,NewspaperIcon:Bm,Nfc:Em,NfcIcon:Em,Notebook:Zm,NotebookIcon:Zm,NotebookPen:Om,NotebookPenIcon:Om,NotebookTabs:Um,NotebookTabsIcon:Um,NotebookText:Nm,NotebookTextIcon:Nm,NotepadText:_m,NotepadTextDashed:Wm,NotepadTextDashedIcon:Wm,NotepadTextIcon:_m,Nut:Xm,NutIcon:Xm,NutOff:Gm,NutOffIcon:Gm,Octagon:Km,OctagonIcon:Km,Option:$m,OptionIcon:$m,Orbit:Qm,OrbitIcon:Qm,Outdent:Ym,OutdentIcon:Ym,Package:cf,Package2:Jm,Package2Icon:Jm,PackageCheck:ef,PackageCheckIcon:ef,PackageIcon:cf,PackageMinus:tf,PackageMinusIcon:tf,PackageOpen:af,PackageOpenIcon:af,PackagePlus:nf,PackagePlusIcon:nf,PackageSearch:rf,PackageSearchIcon:rf,PackageX:of,PackageXIcon:of,PaintBucket:lf,PaintBucketIcon:lf,PaintRoller:sf,PaintRollerIcon:sf,Paintbrush:hf,Paintbrush2:df,Paintbrush2Icon:df,PaintbrushIcon:hf,Palette:uf,PaletteIcon:uf,Palmtree:yf,PalmtreeIcon:yf,PanelBottom:mf,PanelBottomClose:pf,PanelBottomCloseIcon:pf,PanelBottomDashed:Ua,PanelBottomDashedIcon:Ua,PanelBottomIcon:mf,PanelBottomInactive:Ua,PanelBottomInactiveIcon:Ua,PanelBottomOpen:kf,PanelBottomOpenIcon:kf,PanelLeft:_a,PanelLeftClose:Na,PanelLeftCloseIcon:Na,PanelLeftDashed:Za,PanelLeftDashedIcon:Za,PanelLeftIcon:_a,PanelLeftInactive:Za,PanelLeftInactiveIcon:Za,PanelLeftOpen:Wa,PanelLeftOpenIcon:Wa,PanelRight:vf,PanelRightClose:ff,PanelRightCloseIcon:ff,PanelRightDashed:Ga,PanelRightDashedIcon:Ga,PanelRightIcon:vf,PanelRightInactive:Ga,PanelRightInactiveIcon:Ga,PanelRightOpen:gf,PanelRightOpenIcon:gf,PanelTop:wf,PanelTopClose:Mf,PanelTopCloseIcon:Mf,PanelTopDashed:Xa,PanelTopDashedIcon:Xa,PanelTopIcon:wf,PanelTopInactive:Xa,PanelTopInactiveIcon:Xa,PanelTopOpen:xf,PanelTopOpenIcon:xf,PanelsLeftBottom:Lf,PanelsLeftBottomIcon:Lf,PanelsLeftRight:Ca,PanelsLeftRightIcon:Ca,PanelsRightBottom:bf,PanelsRightBottomIcon:bf,PanelsTopBottom:e1,PanelsTopBottomIcon:e1,PanelsTopLeft:Ka,PanelsTopLeftIcon:Ka,Paperclip:Cf,PaperclipIcon:Cf,Parentheses:Sf,ParenthesesIcon:Sf,ParkingCircle:Pf,ParkingCircleIcon:Pf,ParkingCircleOff:If,ParkingCircleOffIcon:If,ParkingMeter:Af,ParkingMeterIcon:Af,ParkingSquare:zf,ParkingSquareIcon:zf,ParkingSquareOff:qf,ParkingSquareOffIcon:qf,PartyPopper:jf,PartyPopperIcon:jf,Pause:Vf,PauseCircle:Hf,PauseCircleIcon:Hf,PauseIcon:Vf,PauseOctagon:Tf,PauseOctagonIcon:Tf,PawPrint:Ff,PawPrintIcon:Ff,PcCase:Df,PcCaseIcon:Df,Pen:Qa,PenBox:Ie,PenBoxIcon:Ie,PenIcon:Qa,PenLine:$a,PenLineIcon:$a,PenSquare:Ie,PenSquareIcon:Ie,PenTool:Rf,PenToolIcon:Rf,Pencil:Of,PencilIcon:Of,PencilLine:Bf,PencilLineIcon:Bf,PencilRuler:Ef,PencilRulerIcon:Ef,Pentagon:Uf,PentagonIcon:Uf,Percent:_f,PercentCircle:Nf,PercentCircleIcon:Nf,PercentDiamond:Zf,PercentDiamondIcon:Zf,PercentIcon:_f,PercentSquare:Wf,PercentSquareIcon:Wf,PersonStanding:Gf,PersonStandingIcon:Gf,Phone:cr,PhoneCall:Xf,PhoneCallIcon:Xf,PhoneForwarded:Kf,PhoneForwardedIcon:Kf,PhoneIcon:cr,PhoneIncoming:$f,PhoneIncomingIcon:$f,PhoneMissed:Qf,PhoneMissedIcon:Qf,PhoneOff:Yf,PhoneOffIcon:Yf,PhoneOutgoing:Jf,PhoneOutgoingIcon:Jf,Pi:t6,PiIcon:t6,PiSquare:e6,PiSquareIcon:e6,Piano:a6,PianoIcon:a6,Pickaxe:n6,PickaxeIcon:n6,PictureInPicture:o6,PictureInPicture2:r6,PictureInPicture2Icon:r6,PictureInPictureIcon:o6,PieChart:i6,PieChartIcon:i6,PiggyBank:c6,PiggyBankIcon:c6,Pilcrow:s6,PilcrowIcon:s6,PilcrowSquare:l6,PilcrowSquareIcon:l6,Pill:d6,PillIcon:d6,Pin:u6,PinIcon:u6,PinOff:h6,PinOffIcon:h6,Pipette:y6,PipetteIcon:y6,Pizza:p6,PizzaIcon:p6,Plane:f6,PlaneIcon:f6,PlaneLanding:k6,PlaneLandingIcon:k6,PlaneTakeoff:m6,PlaneTakeoffIcon:m6,Play:M6,PlayCircle:g6,PlayCircleIcon:g6,PlayIcon:M6,PlaySquare:v6,PlaySquareIcon:v6,Plug:b6,Plug2:x6,Plug2Icon:x6,PlugIcon:b6,PlugZap:L6,PlugZap2:w6,PlugZap2Icon:w6,PlugZapIcon:L6,Plus:I6,PlusCircle:C6,PlusCircleIcon:C6,PlusIcon:I6,PlusSquare:S6,PlusSquareIcon:S6,Pocket:A6,PocketIcon:A6,PocketKnife:P6,PocketKnifeIcon:P6,Podcast:q6,PodcastIcon:q6,Pointer:j6,PointerIcon:j6,PointerOff:z6,PointerOffIcon:z6,Popcorn:H6,PopcornIcon:H6,Popsicle:T6,PopsicleIcon:T6,PoundSterling:V6,PoundSterlingIcon:V6,Power:B6,PowerCircle:F6,PowerCircleIcon:F6,PowerIcon:B6,PowerOff:D6,PowerOffIcon:D6,PowerSquare:R6,PowerSquareIcon:R6,Presentation:E6,PresentationIcon:E6,Printer:O6,PrinterIcon:O6,Projector:U6,ProjectorIcon:U6,Puzzle:N6,PuzzleIcon:N6,Pyramid:Z6,PyramidIcon:Z6,QrCode:W6,QrCodeIcon:W6,Quote:_6,QuoteIcon:_6,Rabbit:G6,RabbitIcon:G6,Radar:X6,RadarIcon:X6,Radiation:K6,RadiationIcon:K6,Radical:$6,RadicalIcon:$6,Radio:J6,RadioIcon:J6,RadioReceiver:Q6,RadioReceiverIcon:Q6,RadioTower:Y6,RadioTowerIcon:Y6,Radius:e8,RadiusIcon:e8,RailSymbol:t8,RailSymbolIcon:t8,Rainbow:a8,RainbowIcon:a8,Rat:n8,RatIcon:n8,Ratio:r8,RatioIcon:r8,Receipt:y8,ReceiptCent:o8,ReceiptCentIcon:o8,ReceiptEuro:i8,ReceiptEuroIcon:i8,ReceiptIcon:y8,ReceiptIndianRupee:c8,ReceiptIndianRupeeIcon:c8,ReceiptJapaneseYen:l8,ReceiptJapaneseYenIcon:l8,ReceiptPoundSterling:s8,ReceiptPoundSterlingIcon:s8,ReceiptRussianRuble:d8,ReceiptRussianRubleIcon:d8,ReceiptSwissFranc:h8,ReceiptSwissFrancIcon:h8,ReceiptText:u8,ReceiptTextIcon:u8,RectangleHorizontal:p8,RectangleHorizontalIcon:p8,RectangleVertical:k8,RectangleVerticalIcon:k8,Recycle:m8,RecycleIcon:m8,Redo:v8,Redo2:f8,Redo2Icon:f8,RedoDot:g8,RedoDotIcon:g8,RedoIcon:v8,RefreshCcw:x8,RefreshCcwDot:M8,RefreshCcwDotIcon:M8,RefreshCcwIcon:x8,RefreshCw:L8,RefreshCwIcon:L8,RefreshCwOff:w8,RefreshCwOffIcon:w8,Refrigerator:b8,RefrigeratorIcon:b8,Regex:C8,RegexIcon:C8,RemoveFormatting:S8,RemoveFormattingIcon:S8,Repeat:A8,Repeat1:I8,Repeat1Icon:I8,Repeat2:P8,Repeat2Icon:P8,RepeatIcon:A8,Replace:z8,ReplaceAll:q8,ReplaceAllIcon:q8,ReplaceIcon:z8,Reply:H8,ReplyAll:j8,ReplyAllIcon:j8,ReplyIcon:H8,Rewind:T8,RewindIcon:T8,Ribbon:V8,RibbonIcon:V8,Rocket:F8,RocketIcon:F8,RockingChair:D8,RockingChairIcon:D8,RollerCoaster:R8,RollerCoasterIcon:R8,Rotate3D:Ya,Rotate3DIcon:Ya,Rotate3d:Ya,Rotate3dIcon:Ya,RotateCcw:B8,RotateCcwIcon:B8,RotateCw:E8,RotateCwIcon:E8,Route:U8,RouteIcon:U8,RouteOff:O8,RouteOffIcon:O8,Router:N8,RouterIcon:N8,Rows:Ja,Rows2:Ja,Rows2Icon:Ja,Rows3:e1,Rows3Icon:e1,Rows4:Z8,Rows4Icon:Z8,RowsIcon:Ja,Rss:W8,RssIcon:W8,Ruler:_8,RulerIcon:_8,RussianRuble:G8,RussianRubleIcon:G8,Sailboat:X8,SailboatIcon:X8,Salad:K8,SaladIcon:K8,Sandwich:$8,SandwichIcon:$8,Satellite:Y8,SatelliteDish:Q8,SatelliteDishIcon:Q8,SatelliteIcon:Y8,Save:eg,SaveAll:J8,SaveAllIcon:J8,SaveIcon:eg,Scale:tg,Scale3D:t1,Scale3DIcon:t1,Scale3d:t1,Scale3dIcon:t1,ScaleIcon:tg,Scaling:ag,ScalingIcon:ag,Scan:sg,ScanBarcode:ng,ScanBarcodeIcon:ng,ScanEye:rg,ScanEyeIcon:rg,ScanFace:og,ScanFaceIcon:og,ScanIcon:sg,ScanLine:ig,ScanLineIcon:ig,ScanSearch:cg,ScanSearchIcon:cg,ScanText:lg,ScanTextIcon:lg,ScatterChart:dg,ScatterChartIcon:dg,School:ug,School2:hg,School2Icon:hg,SchoolIcon:ug,Scissors:mg,ScissorsIcon:mg,ScissorsLineDashed:yg,ScissorsLineDashedIcon:yg,ScissorsSquare:kg,ScissorsSquareDashedBottom:pg,ScissorsSquareDashedBottomIcon:pg,ScissorsSquareIcon:kg,ScreenShare:gg,ScreenShareIcon:gg,ScreenShareOff:fg,ScreenShareOffIcon:fg,Scroll:Mg,ScrollIcon:Mg,ScrollText:vg,ScrollTextIcon:vg,Search:Cg,SearchCheck:xg,SearchCheckIcon:xg,SearchCode:wg,SearchCodeIcon:wg,SearchIcon:Cg,SearchSlash:Lg,SearchSlashIcon:Lg,SearchX:bg,SearchXIcon:bg,Send:lr,SendHorizonal:a1,SendHorizonalIcon:a1,SendHorizontal:a1,SendHorizontalIcon:a1,SendIcon:lr,SendToBack:Sg,SendToBackIcon:Sg,SeparatorHorizontal:Ig,SeparatorHorizontalIcon:Ig,SeparatorVertical:Pg,SeparatorVerticalIcon:Pg,Server:jg,ServerCog:Ag,ServerCogIcon:Ag,ServerCrash:qg,ServerCrashIcon:qg,ServerIcon:jg,ServerOff:zg,ServerOffIcon:zg,Settings:Tg,Settings2:Hg,Settings2Icon:Hg,SettingsIcon:Tg,Shapes:Vg,ShapesIcon:Vg,Share:Dg,Share2:Fg,Share2Icon:Fg,ShareIcon:Dg,Sheet:Rg,SheetIcon:Rg,Shell:Bg,ShellIcon:Bg,Shield:Kg,ShieldAlert:Eg,ShieldAlertIcon:Eg,ShieldBan:Og,ShieldBanIcon:Og,ShieldCheck:Ug,ShieldCheckIcon:Ug,ShieldClose:n1,ShieldCloseIcon:n1,ShieldEllipsis:Ng,ShieldEllipsisIcon:Ng,ShieldHalf:Zg,ShieldHalfIcon:Zg,ShieldIcon:Kg,ShieldMinus:Wg,ShieldMinusIcon:Wg,ShieldOff:_g,ShieldOffIcon:_g,ShieldPlus:Gg,ShieldPlusIcon:Gg,ShieldQuestion:Xg,ShieldQuestionIcon:Xg,ShieldX:n1,ShieldXIcon:n1,Ship:Qg,ShipIcon:Qg,ShipWheel:$g,ShipWheelIcon:$g,Shirt:Yg,ShirtIcon:Yg,ShoppingBag:Jg,ShoppingBagIcon:Jg,ShoppingBasket:ev,ShoppingBasketIcon:ev,ShoppingCart:tv,ShoppingCartIcon:tv,Shovel:av,ShovelIcon:av,ShowerHead:nv,ShowerHeadIcon:nv,Shrink:rv,ShrinkIcon:rv,Shrub:ov,ShrubIcon:ov,Shuffle:iv,ShuffleIcon:iv,Sidebar:_a,SidebarClose:Na,SidebarCloseIcon:Na,SidebarIcon:_a,SidebarOpen:Wa,SidebarOpenIcon:Wa,Sigma:lv,SigmaIcon:lv,SigmaSquare:cv,SigmaSquareIcon:cv,Signal:yv,SignalHigh:sv,SignalHighIcon:sv,SignalIcon:yv,SignalLow:dv,SignalLowIcon:dv,SignalMedium:hv,SignalMediumIcon:hv,SignalZero:uv,SignalZeroIcon:uv,Signpost:kv,SignpostBig:pv,SignpostBigIcon:pv,SignpostIcon:kv,Siren:mv,SirenIcon:mv,SkipBack:fv,SkipBackIcon:fv,SkipForward:gv,SkipForwardIcon:gv,Skull:vv,SkullIcon:vv,Slack:Mv,SlackIcon:Mv,Slash:xv,SlashIcon:xv,SlashSquare:r1,SlashSquareIcon:r1,Slice:wv,SliceIcon:wv,Sliders:bv,SlidersHorizontal:Lv,SlidersHorizontalIcon:Lv,SlidersIcon:bv,Smartphone:Iv,SmartphoneCharging:Cv,SmartphoneChargingIcon:Cv,SmartphoneIcon:Iv,SmartphoneNfc:Sv,SmartphoneNfcIcon:Sv,Smile:Av,SmileIcon:Av,SmilePlus:Pv,SmilePlusIcon:Pv,Snail:qv,SnailIcon:qv,Snowflake:zv,SnowflakeIcon:zv,Sofa:jv,SofaIcon:jv,SortAsc:la,SortAscIcon:la,SortDesc:oa,SortDescIcon:oa,Soup:Hv,SoupIcon:Hv,Space:Tv,SpaceIcon:Tv,Spade:Vv,SpadeIcon:Vv,Sparkle:Fv,SparkleIcon:Fv,Sparkles:o1,SparklesIcon:o1,Speaker:Dv,SpeakerIcon:Dv,Speech:Rv,SpeechIcon:Rv,SpellCheck:Ev,SpellCheck2:Bv,SpellCheck2Icon:Bv,SpellCheckIcon:Ev,Spline:Ov,SplineIcon:Ov,Split:Zv,SplitIcon:Zv,SplitSquareHorizontal:Uv,SplitSquareHorizontalIcon:Uv,SplitSquareVertical:Nv,SplitSquareVerticalIcon:Nv,SprayCan:Wv,SprayCanIcon:Wv,Sprout:_v,SproutIcon:_v,Square:Qv,SquareAsterisk:da,SquareAsteriskIcon:da,SquareCode:La,SquareCodeIcon:La,SquareDashedBottom:Xv,SquareDashedBottomCode:Gv,SquareDashedBottomCodeIcon:Gv,SquareDashedBottomIcon:Xv,SquareDot:Sa,SquareDotIcon:Sa,SquareEqual:Pa,SquareEqualIcon:Pa,SquareGantt:et,SquareGanttIcon:et,SquareIcon:Qv,SquareKanban:Ba,SquareKanbanDashed:Ra,SquareKanbanDashedIcon:Ra,SquareKanbanIcon:Ba,SquarePen:Ie,SquarePenIcon:Ie,SquareRadical:Kv,SquareRadicalIcon:Kv,SquareSlash:r1,SquareSlashIcon:r1,SquareStack:$v,SquareStackIcon:$v,SquareUser:c1,SquareUserIcon:c1,SquareUserRound:i1,SquareUserRoundIcon:i1,Squircle:Yv,SquircleIcon:Yv,Squirrel:Jv,SquirrelIcon:Jv,Stamp:e7,StampIcon:e7,Star:n7,StarHalf:t7,StarHalfIcon:t7,StarIcon:n7,StarOff:a7,StarOffIcon:a7,Stars:o1,StarsIcon:o1,StepBack:r7,StepBackIcon:r7,StepForward:o7,StepForwardIcon:o7,Stethoscope:i7,StethoscopeIcon:i7,Sticker:c7,StickerIcon:c7,StickyNote:l7,StickyNoteIcon:l7,StopCircle:s7,StopCircleIcon:s7,Store:d7,StoreIcon:d7,StretchHorizontal:h7,StretchHorizontalIcon:h7,StretchVertical:u7,StretchVerticalIcon:u7,Strikethrough:y7,StrikethroughIcon:y7,Subscript:p7,SubscriptIcon:p7,Subtitles:fa,SubtitlesIcon:fa,Sun:rn,SunDim:k7,SunDimIcon:k7,SunIcon:rn,SunMedium:m7,SunMediumIcon:m7,SunMoon:f7,SunMoonIcon:f7,SunSnow:g7,SunSnowIcon:g7,Sunrise:v7,SunriseIcon:v7,Sunset:M7,SunsetIcon:M7,Superscript:x7,SuperscriptIcon:x7,SwatchBook:w7,SwatchBookIcon:w7,SwissFranc:L7,SwissFrancIcon:L7,SwitchCamera:b7,SwitchCameraIcon:b7,Sword:C7,SwordIcon:C7,Swords:S7,SwordsIcon:S7,Syringe:I7,SyringeIcon:I7,Table:T7,Table2:P7,Table2Icon:P7,TableCellsMerge:A7,TableCellsMergeIcon:A7,TableCellsSplit:q7,TableCellsSplitIcon:q7,TableColumnsSplit:z7,TableColumnsSplitIcon:z7,TableIcon:T7,TableProperties:j7,TablePropertiesIcon:j7,TableRowsSplit:H7,TableRowsSplitIcon:H7,Tablet:F7,TabletIcon:F7,TabletSmartphone:V7,TabletSmartphoneIcon:V7,Tablets:D7,TabletsIcon:D7,Tag:R7,TagIcon:R7,Tags:B7,TagsIcon:B7,Tally1:E7,Tally1Icon:E7,Tally2:O7,Tally2Icon:O7,Tally3:U7,Tally3Icon:U7,Tally4:N7,Tally4Icon:N7,Tally5:Z7,Tally5Icon:Z7,Tangent:W7,TangentIcon:W7,Target:_7,TargetIcon:_7,Telescope:G7,TelescopeIcon:G7,Tent:K7,TentIcon:K7,TentTree:X7,TentTreeIcon:X7,Terminal:Q7,TerminalIcon:Q7,TerminalSquare:$7,TerminalSquareIcon:$7,TestTube:J7,TestTube2:Y7,TestTube2Icon:Y7,TestTubeIcon:J7,TestTubes:eM,TestTubesIcon:eM,Text:oM,TextCursor:aM,TextCursorIcon:aM,TextCursorInput:tM,TextCursorInputIcon:tM,TextIcon:oM,TextQuote:nM,TextQuoteIcon:nM,TextSearch:rM,TextSearchIcon:rM,TextSelect:l1,TextSelectIcon:l1,TextSelection:l1,TextSelectionIcon:l1,Theater:iM,TheaterIcon:iM,Thermometer:sM,ThermometerIcon:sM,ThermometerSnowflake:cM,ThermometerSnowflakeIcon:cM,ThermometerSun:lM,ThermometerSunIcon:lM,ThumbsDown:dM,ThumbsDownIcon:dM,ThumbsUp:hM,ThumbsUpIcon:hM,Ticket:gM,TicketCheck:uM,TicketCheckIcon:uM,TicketIcon:gM,TicketMinus:yM,TicketMinusIcon:yM,TicketPercent:pM,TicketPercentIcon:pM,TicketPlus:kM,TicketPlusIcon:kM,TicketSlash:mM,TicketSlashIcon:mM,TicketX:fM,TicketXIcon:fM,Timer:xM,TimerIcon:xM,TimerOff:vM,TimerOffIcon:vM,TimerReset:MM,TimerResetIcon:MM,ToggleLeft:wM,ToggleLeftIcon:wM,ToggleRight:LM,ToggleRightIcon:LM,Tornado:bM,TornadoIcon:bM,Torus:CM,TorusIcon:CM,Touchpad:IM,TouchpadIcon:IM,TouchpadOff:SM,TouchpadOffIcon:SM,TowerControl:PM,TowerControlIcon:PM,ToyBrick:AM,ToyBrickIcon:AM,Tractor:qM,TractorIcon:qM,TrafficCone:zM,TrafficConeIcon:zM,Train:s1,TrainFront:HM,TrainFrontIcon:HM,TrainFrontTunnel:jM,TrainFrontTunnelIcon:jM,TrainIcon:s1,TrainTrack:TM,TrainTrackIcon:TM,TramFront:s1,TramFrontIcon:s1,Trash:FM,Trash2:VM,Trash2Icon:VM,TrashIcon:FM,TreeDeciduous:DM,TreeDeciduousIcon:DM,TreePine:RM,TreePineIcon:RM,Trees:BM,TreesIcon:BM,Trello:EM,TrelloIcon:EM,TrendingDown:OM,TrendingDownIcon:OM,TrendingUp:UM,TrendingUpIcon:UM,Triangle:ZM,TriangleIcon:ZM,TriangleRight:NM,TriangleRightIcon:NM,Trophy:WM,TrophyIcon:WM,Truck:_M,TruckIcon:_M,Turtle:GM,TurtleIcon:GM,Tv:KM,Tv2:XM,Tv2Icon:XM,TvIcon:KM,Twitch:$M,TwitchIcon:$M,Twitter:QM,TwitterIcon:QM,Type:YM,TypeIcon:YM,Umbrella:e9,UmbrellaIcon:e9,UmbrellaOff:JM,UmbrellaOffIcon:JM,Underline:t9,UnderlineIcon:t9,Undo:r9,Undo2:a9,Undo2Icon:a9,UndoDot:n9,UndoDotIcon:n9,UndoIcon:r9,UnfoldHorizontal:o9,UnfoldHorizontalIcon:o9,UnfoldVertical:i9,UnfoldVerticalIcon:i9,Ungroup:c9,UngroupIcon:c9,Unlink:s9,Unlink2:l9,Unlink2Icon:l9,UnlinkIcon:s9,Unlock:h9,UnlockIcon:h9,UnlockKeyhole:d9,UnlockKeyholeIcon:d9,Unplug:u9,UnplugIcon:u9,Upload:p9,UploadCloud:y9,UploadCloudIcon:y9,UploadIcon:p9,Usb:k9,UsbIcon:k9,User:L9,User2:k1,User2Icon:k1,UserCheck:m9,UserCheck2:d1,UserCheck2Icon:d1,UserCheckIcon:m9,UserCircle:Ma,UserCircle2:va,UserCircle2Icon:va,UserCircleIcon:Ma,UserCog:f9,UserCog2:h1,UserCog2Icon:h1,UserCogIcon:f9,UserIcon:L9,UserMinus:g9,UserMinus2:u1,UserMinus2Icon:u1,UserMinusIcon:g9,UserPlus:v9,UserPlus2:y1,UserPlus2Icon:y1,UserPlusIcon:v9,UserRound:k1,UserRoundCheck:d1,UserRoundCheckIcon:d1,UserRoundCog:h1,UserRoundCogIcon:h1,UserRoundIcon:k1,UserRoundMinus:u1,UserRoundMinusIcon:u1,UserRoundPlus:y1,UserRoundPlusIcon:y1,UserRoundSearch:M9,UserRoundSearchIcon:M9,UserRoundX:p1,UserRoundXIcon:p1,UserSearch:x9,UserSearchIcon:x9,UserSquare:c1,UserSquare2:i1,UserSquare2Icon:i1,UserSquareIcon:c1,UserX:w9,UserX2:p1,UserX2Icon:p1,UserXIcon:w9,Users:b9,Users2:m1,Users2Icon:m1,UsersIcon:b9,UsersRound:m1,UsersRoundIcon:m1,Utensils:S9,UtensilsCrossed:C9,UtensilsCrossedIcon:C9,UtensilsIcon:S9,UtilityPole:I9,UtilityPoleIcon:I9,Variable:P9,VariableIcon:P9,Vault:A9,VaultIcon:A9,Vegan:q9,VeganIcon:q9,VenetianMask:z9,VenetianMaskIcon:z9,Verified:ua,VerifiedIcon:ua,Vibrate:H9,VibrateIcon:H9,VibrateOff:j9,VibrateOffIcon:j9,Video:V9,VideoIcon:V9,VideoOff:T9,VideoOffIcon:T9,Videotape:F9,VideotapeIcon:F9,View:D9,ViewIcon:D9,Voicemail:R9,VoicemailIcon:R9,Volume:U9,Volume1:B9,Volume1Icon:B9,Volume2:E9,Volume2Icon:E9,VolumeIcon:U9,VolumeX:O9,VolumeXIcon:O9,Vote:N9,VoteIcon:N9,Wallet:_9,Wallet2:Z9,Wallet2Icon:Z9,WalletCards:W9,WalletCardsIcon:W9,WalletIcon:_9,Wallpaper:G9,WallpaperIcon:G9,Wand:K9,Wand2:X9,Wand2Icon:X9,WandIcon:K9,Warehouse:$9,WarehouseIcon:$9,WashingMachine:Q9,WashingMachineIcon:Q9,Watch:Y9,WatchIcon:Y9,Waves:J9,WavesIcon:J9,Waypoints:ex,WaypointsIcon:ex,Webcam:tx,WebcamIcon:tx,Webhook:nx,WebhookIcon:nx,WebhookOff:ax,WebhookOffIcon:ax,Weight:rx,WeightIcon:rx,Wheat:ix,WheatIcon:ix,WheatOff:ox,WheatOffIcon:ox,WholeWord:cx,WholeWordIcon:cx,Wifi:sx,WifiIcon:sx,WifiOff:lx,WifiOffIcon:lx,Wind:dx,WindIcon:dx,Wine:ux,WineIcon:ux,WineOff:hx,WineOffIcon:hx,Workflow:yx,WorkflowIcon:yx,WrapText:px,WrapTextIcon:px,Wrench:kx,WrenchIcon:kx,X:on,XCircle:mx,XCircleIcon:mx,XIcon:on,XOctagon:fx,XOctagonIcon:fx,XSquare:gx,XSquareIcon:gx,Youtube:vx,YoutubeIcon:vx,Zap:xx,ZapIcon:xx,ZapOff:Mx,ZapOffIcon:Mx,ZoomIn:wx,ZoomInIcon:wx,ZoomOut:Lx,ZoomOutIcon:Lx,createLucideIcon:r,icons:uB},Symbol.toStringTag,{value:"Module"})),fn=({children:e,onClick:t,type:a="button",variant:n="primary",className:o="",icon:i,disabled:c=!1})=>{const l="inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2",s={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",outline:"border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"},d=c?"opacity-50 cursor-not-allowed":"";return f.jsxs("button",{type:a,onClick:t,disabled:c,className:`${l} ${s[n]} ${d} ${o}`,children:[i&&f.jsx("span",{className:"mr-2",children:i}),e]})},xP=[{name:"Início",href:"#home"},{name:"Sobre",href:"#about"},{name:"Habilidades",href:"#skills"},{name:"Projetos",href:"#projects"},{name:"Contato",href:"#contact"}],pB=()=>{const[e,t]=S.useState(!1),[a,n]=S.useState("home"),[o,i]=S.useState(!1),[c,l]=S.useState(!1);S.useEffect(()=>{const d=()=>{const h=document.querySelectorAll("section[id]"),u=window.scrollY+100;h.forEach(y=>{const g=y.offsetTop,v=y.offsetHeight,M=y.getAttribute("id")||"";u>=g&&u<g+v&&n(M)}),i(window.scrollY>10)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),S.useEffect(()=>{c?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[c]);const s=()=>{l(!c)};return f.jsxs("header",{className:`fixed w-full z-50 transition-all duration-300 ${o?"bg-white dark:bg-gray-900 shadow-md py-2":"bg-transparent py-4"}`,children:[f.jsx("nav",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("div",{className:"flex items-center",children:f.jsxs("a",{href:"#home",className:"text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400",children:["Meu ",f.jsx("span",{className:"text-gray-800 dark:text-white",children:"Portfólio"})]})}),f.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[f.jsx("div",{className:"flex space-x-6",children:xP.map(d=>f.jsxs("a",{href:d.href,className:`text-sm font-medium transition-colors duration-200 relative ${a===d.href.substring(1)?"text-blue-600 dark:text-blue-400":"text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"}`,children:[d.name,a===d.href.substring(1)&&f.jsx(O.span,{layoutId:"underline",className:"absolute left-0 top-full w-full h-0.5 bg-blue-600 dark:bg-blue-400"})]},d.name))}),f.jsx("button",{onClick:s,className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Alternar modo escuro",children:c?f.jsx(rn,{size:20}):f.jsx(nn,{size:20})}),f.jsx(fn,{variant:"primary",children:"Currículo"})]}),f.jsxs("div",{className:"flex items-center md:hidden",children:[f.jsx("button",{onClick:s,className:"p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors","aria-label":"Alternar modo escuro",children:c?f.jsx(rn,{size:20}):f.jsx(nn,{size:20})}),f.jsxs("button",{onClick:()=>t(!e),className:"p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700",children:[f.jsx("span",{className:"sr-only",children:"Abrir menu"}),e?f.jsx(on,{size:24}):f.jsx(ir,{size:24})]})]})]})}),f.jsx(Xx,{children:e&&f.jsx(O.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"md:hidden bg-white dark:bg-gray-900 shadow-lg",children:f.jsxs("div",{className:"px-4 pt-2 pb-6 space-y-1",children:[xP.map(d=>f.jsx("a",{href:d.href,onClick:()=>t(!1),className:`block py-3 px-2 text-base font-medium rounded-md ${a===d.href.substring(1)?"text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800":"text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"}`,children:d.name},d.name)),f.jsx("div",{className:"pt-2",children:f.jsx(fn,{variant:"primary",className:"w-full",children:"Currículo"})})]})})})]})},kB=()=>{const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.jsx("footer",{className:"bg-gray-900 text-white py-12",children:f.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8",children:[f.jsxs("div",{className:"mb-6 md:mb-0",children:[f.jsxs("a",{href:"#home",className:"text-2xl font-bold text-white",children:["Henrique Saviczki ",f.jsx("span",{className:"text-blue-400",children:"Portfolio"})]}),f.jsx("p",{className:"mt-2 text-gray-400 max-w-md",children:"Especializado em construir experiências digitais excepcionais com tecnologias web modernas."})]}),f.jsx("div",{className:"flex flex-col items-center md:items-end",children:f.jsx("button",{onClick:e,className:"inline-flex items-center justify-center p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors","aria-label":"Voltar ao topo",children:f.jsx(er,{size:20})})})]}),f.jsxs("div",{className:"border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center",children:[f.jsxs("p",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:["© ",new Date().getFullYear()," Henrique Saviczki. Todos os direitos reservados."]}),f.jsxs("div",{className:"flex space-x-6",children:[f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Política de Privacidade"}),f.jsx("a",{href:"#",className:"text-gray-400 hover:text-white text-sm transition-colors",children:"Termos de Serviço"})]})]})]})})},mB=({children:e})=>f.jsxs("div",{className:"min-h-screen flex flex-col dark:bg-gray-900 dark:text-white",children:[f.jsx(pB,{}),f.jsx("main",{className:"flex-grow",children:e}),f.jsx(kB,{})]}),fB=()=>{const[e,t]=S.useState(""),a="Desenvolvedor Full Stack",n=["Desenvolvedor React","Desenvolvedor Python","Especialista TypeScript","Engenheiro Backend"],[o,i]=S.useState(0),[c,l]=S.useState(n[0]),[s,d]=S.useState(!1),[h,u]=S.useState(150);S.useEffect(()=>{const v=setTimeout(()=>{!s&&e===c?(u(2e3),d(!0)):s&&e===""?(d(!1),i((o+1)%n.length),l(n[(o+1)%n.length]),u(150)):(t(c.substring(0,s?e.length-1:e.length+1)),u(s?100:150))},h);return()=>clearTimeout(v)},[e,s,c,o,h,n]);const y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},g={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return f.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16",children:[f.jsx("div",{className:"absolute inset-0 z-0",children:f.jsx("div",{className:"absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"})}),f.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:f.jsxs(O.div,{className:"max-w-4xl mx-auto text-center",variants:y,initial:"hidden",animate:"visible",children:[f.jsxs(O.h1,{className:"text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4",variants:g,children:["Olá, sou ",f.jsx("span",{className:"text-blue-600 dark:text-blue-400",children:"Henrique Saviczki"})]}),f.jsxs(O.div,{className:"text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12 flex justify-center items-center",variants:g,children:[f.jsx("span",{children:a}),f.jsxs("span",{className:"text-blue-600 dark:text-blue-400 ml-2 inline-block min-w-[12rem] text-left",children:[e,f.jsx("span",{className:"animate-blink",children:"|"})]})]}),f.jsx(O.p,{className:"text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto",variants:g,children:"Especializado em criar experiências digitais excepcionais com tecnologias web modernas. Apaixonado por desenvolver aplicações robustas e escaláveis que resolvem problemas reais."}),f.jsxs(O.div,{className:"flex flex-col sm:flex-row justify-center gap-4 mb-16",variants:g,children:[f.jsx(fn,{variant:"primary",className:"px-8 py-3 text-lg",children:"Ver Projetos"}),f.jsx(fn,{variant:"outline",className:"px-8 py-3 text-lg",children:"Contato"})]})]})}),f.jsx(O.div,{className:"absolute bottom-8 left-0 right-0 flex justify-center",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{delay:1,duration:.6},children:f.jsx("a",{href:"#about",className:"text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 animate-bounce","aria-label":"Rolar para seção Sobre",children:f.jsx(Jn,{size:32})})})]})};var xb=new Map,hL=new WeakMap,wP=0,gB=void 0;function vB(e){return e?(hL.has(e)||(wP+=1,hL.set(e,wP.toString())),hL.get(e)):"0"}function MB(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?vB(e.root):e[t]}`).toString()}function xB(e){const t=MB(e);let a=xb.get(t);if(!a){const n=new Map;let o;const i=new IntersectionObserver(c=>{c.forEach(l=>{var s;const d=l.isIntersecting&&o.some(h=>l.intersectionRatio>=h);e.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=d),(s=n.get(l.target))==null||s.forEach(h=>{h(d,l)})})},e);o=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:t,observer:i,elements:n},xb.set(t,a)}return a}function wB(e,t,a={},n=gB){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const s=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}const{id:o,observer:i,elements:c}=xB(a),l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),l.length===0&&(c.delete(e),i.unobserve(e)),c.size===0&&(i.disconnect(),xb.delete(o))}}function uj({threshold:e,delay:t,trackVisibility:a,rootMargin:n,root:o,triggerOnce:i,skip:c,initialInView:l,fallbackInView:s,onChange:d}={}){var h;const[u,y]=S.useState(null),g=S.useRef(d),[v,M]=S.useState({inView:!!l,entry:void 0});g.current=d,S.useEffect(()=>{if(c||!u)return;let m;return m=wB(u,(x,w)=>{M({inView:x,entry:w}),g.current&&g.current(x,w),w.isIntersecting&&i&&m&&(m(),m=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:a,delay:t},s),()=>{m&&m()}},[Array.isArray(e)?e.toString():e,u,o,n,i,c,a,s,t]);const L=(h=v.entry)==null?void 0:h.target,k=S.useRef(void 0);!u&&L&&!i&&!c&&k.current!==L&&(k.current=L,M({inView:!!l,entry:void 0}));const p=[y,v.inView,v.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const bw=({id:e,title:t,children:a,className:n=""})=>{const[o,i]=uj({threshold:.1,triggerOnce:!1}),c={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return f.jsx("section",{id:e,ref:o,className:`py-20 ${n}`,children:f.jsxs(O.div,{initial:"hidden",animate:i?"visible":"hidden",variants:c,className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-12 relative inline-block",children:[t,f.jsx("span",{className:"absolute bottom-0 left-0 w-1/2 h-1 bg-blue-600"})]}),a]})})},LB=()=>{const[e,t]=uj({threshold:.1,triggerOnce:!1}),a={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},n={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return f.jsx(bw,{id:"about",title:"Sobre Mim",className:"bg-white dark:bg-gray-900",children:f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[f.jsxs(O.div,{ref:e,variants:a,initial:"hidden",animate:t?"visible":"hidden",className:"order-2 lg:order-1",children:[f.jsx(O.h3,{variants:n,className:"text-2xl font-bold text-gray-800 dark:text-white mb-4",children:"Henrique Saviczki - Desenvolvedor Full Stack"}),f.jsx(O.p,{variants:n,className:"text-gray-600 dark:text-gray-300 mb-4",children:"Sou um desenvolvedor full-stack com experiência em construir aplicações web robustas usando tecnologias modernas. Minha jornada no desenvolvimento de software me equipou com um conjunto versátil de habilidades que abrange tanto desenvolvimento frontend quanto backend."}),f.jsx(O.p,{variants:n,className:"text-gray-600 dark:text-gray-300 mb-4",children:"No frontend, me especializo em React e TypeScript, criando interfaces de usuário responsivas e intuitivas. Para desenvolvimento backend, trabalho com Node.js, Python, Django e FastAPI para construir aplicações escaláveis."}),f.jsx(O.p,{variants:n,className:"text-gray-600 dark:text-gray-300 mb-6",children:"Tenho experiência sólida com bancos de dados PostgreSQL e MySQL, além de proficiência com Docker para containerização e GitHub para controle de versão e colaboração."})]}),f.jsx(O.div,{className:"order-1 lg:order-2 flex justify-center",initial:{opacity:0,scale:.8},animate:t?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:{duration:.6},children:f.jsxs("div",{className:"relative w-72 h-72 md:w-80 md:h-80",children:[f.jsx("div",{className:"absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse"}),f.jsx("div",{className:"absolute inset-2 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full opacity-20"}),f.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:f.jsx("div",{className:"w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg",children:f.jsx("img",{src:"/assets/images/profile.jpg",alt:"Foto do Desenvolvedor",className:"w-full h-full object-cover"})})})]})})]})})},LP=[{name:"React",icon:"react",level:4,category:"frontend",color:"#61DAFB"},{name:"TypeScript",icon:"file-type",level:4,category:"frontend",color:"#3178C6"},{name:"JavaScript",icon:"file-json",level:4,category:"frontend",color:"#F7DF1E"},{name:"Python",icon:"file-code",level:4,category:"backend",color:"#3776AB"},{name:"Node.js",icon:"server",level:3,category:"backend",color:"#339933"},{name:"Django",icon:"box",level:4,category:"backend",color:"#092E20"},{name:"FastAPI",icon:"zap",level:4,category:"backend",color:"#009688"},{name:"PostgreSQL",icon:"database",level:3,category:"database",color:"#336791"},{name:"MySQL",icon:"database",level:3,category:"database",color:"#4479A1"},{name:"Docker",icon:"container",level:3,category:"devops",color:"#2496ED"},{name:"GitHub",icon:"github",level:4,category:"devops",color:"#181717"}],bB=[{id:"all",name:"Todas as Habilidades"},{id:"frontend",name:"Frontend"},{id:"backend",name:"Backend"},{id:"database",name:"Banco de Dados"},{id:"devops",name:"DevOps"}],CB=()=>{const[e,t]=S.useState("all"),[a,n]=S.useState(null),o=e==="all"?LP:LP.filter(l=>l.category===e),i=l=>{const s=yB[l.charAt(0).toUpperCase()+l.slice(1)]||ar;return f.jsx(s,{size:24})},c=l=>{switch(l){case 5:return"Especialista";case 4:return"Avançado";case 3:return"Intermediário";case 2:return"Básico";default:return"Iniciante"}};return f.jsxs(bw,{id:"skills",title:"Minhas Habilidades",className:"bg-gray-50 dark:bg-gray-800",children:[f.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:bB.map(l=>f.jsx("button",{onClick:()=>t(l.id),className:`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${e===l.id?"bg-blue-600 text-white shadow-md":"bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"}`,children:l.name},l.id))}),f.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",children:f.jsx(Xx,{children:o.map(l=>f.jsxs(O.div,{layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileHover:{scale:1.05},transition:{duration:.3},onClick:()=>n(l),className:"bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition-shadow",children:[f.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mb-4",style:{backgroundColor:`${l.color}20`},children:f.jsx("span",{style:{color:l.color},children:i(l.icon)})}),f.jsx("h3",{className:"font-medium text-gray-800 dark:text-white text-center",children:l.name}),f.jsx("div",{className:"mt-4 w-full",children:f.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden",children:f.jsx(O.div,{initial:{width:0},animate:{width:`${l.level*20}%`},transition:{duration:1,delay:.3},className:"h-full rounded-full",style:{backgroundColor:l.color}})})})]},l.name))})}),f.jsx(Xx,{children:a&&f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:f.jsxs(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full",children:[f.jsxs("div",{className:"flex justify-between items-start mb-6",children:[f.jsxs("div",{className:"flex items-center",children:[f.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center mr-4",style:{backgroundColor:`${a.color}20`},children:f.jsx("span",{style:{color:a.color},children:i(a.icon)})}),f.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white",children:a.name})]}),f.jsx("button",{onClick:()=>n(null),className:"text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",children:f.jsx(tr,{size:24})})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:["Nível de Proficiência: ",f.jsx("span",{className:"font-semibold",children:c(a.level)})]}),f.jsx("div",{className:"h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mb-6",children:f.jsx(O.div,{initial:{width:0},animate:{width:`${a.level*20}%`},transition:{duration:1},className:"h-full rounded-full",style:{backgroundColor:a.color}})}),f.jsx("h4",{className:"font-medium text-gray-800 dark:text-white mb-3",children:"Principais Capacidades:"}),f.jsx("ul",{className:"space-y-2",children:[...Array(3)].map((l,s)=>f.jsxs("li",{className:"flex items-start",children:[f.jsx(an,{size:18,className:"text-green-500 mr-2 mt-0.5"}),f.jsxs("span",{className:"text-gray-600 dark:text-gray-300",children:[a.name==="React"&&s===0&&"Construção de interfaces complexas e interativas",a.name==="React"&&s===1&&"Gerenciamento de estado com hooks e context",a.name==="React"&&s===2&&"Técnicas de otimização de performance",a.name==="TypeScript"&&s===0&&"Desenvolvimento de aplicações type-safe",a.name==="TypeScript"&&s===1&&"Recursos avançados do sistema de tipos",a.name==="TypeScript"&&s===2&&"Integração com React e Node.js",a.name==="JavaScript"&&s===0&&"Recursos e padrões ES6+",a.name==="JavaScript"&&s===1&&"Programação assíncrona com Promises",a.name==="JavaScript"&&s===2&&"Manipulação do DOM e tratamento de eventos",a.name==="Python"&&s===0&&"Análise e processamento de dados",a.name==="Python"&&s===1&&"Desenvolvimento de APIs com frameworks Python",a.name==="Python"&&s===2&&"Automação e scripts",a.name==="Node.js"&&s===0&&"Desenvolvimento de APIs RESTful",a.name==="Node.js"&&s===1&&"Autenticação e autorização",a.name==="Node.js"&&s===2&&"Otimização de performance",a.name==="Django"&&s===0&&"Desenvolvimento de aplicações web full-stack",a.name==="Django"&&s===1&&"Interfaces administrativas e autenticação",a.name==="Django"&&s===2&&"ORM e integração com banco de dados",a.name==="FastAPI"&&s===0&&"Desenvolvimento de APIs de alta performance",a.name==="FastAPI"&&s===1&&"Geração automática de documentação",a.name==="FastAPI"&&s===2&&"Validação de tipos com Pydantic",a.name==="PostgreSQL"&&s===0&&"Otimização de queries complexas",a.name==="PostgreSQL"&&s===1&&"Design de esquema de banco de dados",a.name==="PostgreSQL"&&s===2&&"Ajuste de performance e indexação",a.name==="MySQL"&&s===0&&"Design de banco de dados relacional",a.name==="MySQL"&&s===1&&"Otimização de queries",a.name==="MySQL"&&s===2&&"Integridade e segurança dos dados",a.name==="Docker"&&s===0&&"Containerização de aplicações",a.name==="Docker"&&s===1&&"Docker Compose para apps multi-container",a.name==="Docker"&&s===2&&"Integração com pipeline CI/CD",a.name==="GitHub"&&s===0&&"Fluxos de trabalho colaborativos",a.name==="GitHub"&&s===1&&"CI/CD com GitHub Actions",a.name==="GitHub"&&s===2&&"Code reviews e pull requests"]})]},s))})]}),f.jsx("button",{onClick:()=>n(null),className:"w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors",children:"Fechar"})]})})})]})},SB=({children:e,className:t="",onClick:a,hover:n=!0})=>{const o=n?{hover:{y:-10,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",transition:{type:"spring",stiffness:300}}}:{};return f.jsx(O.div,{className:`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${t}`,onClick:a,whileHover:n?"hover":void 0,variants:o,children:e})},uL=[{id:"project1",title:"Sistema de Precificação Imobiliária",description:"Sistema inovador que revolucionou o processo de precificação imobiliária, reduzindo o tempo de definição de preços de 15 dias para apenas 4 horas. Implementação de algoritmos avançados e automação de processos para análise de mercado em tempo real.",technologies:["TypeScript","JavaScript","React","Python","Django","Docker","PostgreSQL","Google Cloud"],imageUrl:"/assets/images/pricing_2.png",featured:!0},{id:"project2",title:"Aplicativo de Delivery para Condomínio",description:"Desenvolvimento de uma solução completa de delivery que resultou em um aumento de 15% na receita de um restaurante em condomínio privado. O aplicativo oferece uma experiência personalizada para pedidos e entregas.",technologies:["React Native","FastAPI","Python","Docker","PostgreSQL","Google Cloud"],imageUrl:"/assets/images/delivery.png",featured:!0}],IB=()=>{const[e,t]=S.useState(uL.filter(d=>d.featured)),[a,n]=S.useState(!1),[o,i]=S.useState(null),c=()=>{t(uL),n(!0)},l={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},s={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.6,ease:"easeOut"}}};return f.jsxs(bw,{id:"projects",title:"Meus Projetos",className:"bg-white dark:bg-gray-900",children:[f.jsx(O.div,{variants:l,initial:"hidden",animate:"visible",className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:e.map(d=>f.jsx(O.div,{variants:s,children:f.jsxs(SB,{hover:!0,className:"h-full flex flex-col",onClick:()=>i(d),children:[f.jsx("div",{className:"h-48 overflow-hidden",children:f.jsx("img",{src:d.imageUrl,alt:d.title,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-500"})}),f.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[f.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:d.title}),f.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4 flex-grow",children:d.description}),f.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:d.technologies.map(h=>f.jsx("span",{className:"px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded",children:h},h))})]})]})},d.id))}),!a&&uL.length>e.length&&f.jsx(O.div,{className:"mt-12 text-center",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:f.jsx(fn,{onClick:c,children:"Ver Todos os Projetos"})}),f.jsx(Xx,{children:o&&f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",children:f.jsxs(O.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},className:"bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",children:[f.jsxs("div",{className:"relative",children:[f.jsx("div",{className:"h-64 sm:h-72 md:h-80 overflow-hidden",children:f.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover"})}),f.jsx("button",{onClick:()=>i(null),className:"absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-colors",children:f.jsx(on,{size:20})})]}),f.jsxs("div",{className:"p-6 md:p-8",children:[f.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-3",children:o.title}),f.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:o.technologies.map(d=>f.jsx("span",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full",children:d},d))}),f.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-8",children:o.description}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[o.link&&f.jsxs("a",{href:o.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors",children:[f.jsx(nr,{size:18,className:"mr-2"}),"Ver Demonstração"]}),o.githubLink&&f.jsxs("a",{href:o.githubLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:[f.jsx(rr,{size:18,className:"mr-2"}),"Ver Código"]})]})]})]})})})]})},PB=()=>{const[e,t]=S.useState({name:"",email:"",subject:"",message:""}),[a,n]=S.useState(!1),o=c=>{t({...e,[c.target.name]:c.target.value})},i=c=>{c.preventDefault(),console.log("Form submitted:",e),n(!0),t({name:"",email:"",subject:"",message:""}),setTimeout(()=>{n(!1)},5e3)};return f.jsx(bw,{id:"contact",title:"Contato",className:"bg-gray-50 dark:bg-gray-800",children:f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-white mb-6",children:"Vamos Conversar"}),f.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-8",children:"Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de trabalho. Entre em contato através do formulário ou usando minhas informações de contato."}),f.jsxs("div",{className:"space-y-4 mb-8",children:[f.jsxs("div",{className:"flex items-start",children:[f.jsx("div",{className:"flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4",children:f.jsx(or,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-lg font-medium text-gray-800 dark:text-white",children:"Email"}),f.jsx("a",{href:"mailto:SEU_EMAIL@exemplo.com",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"henrique.saviczki@gmail.com"})]})]}),f.jsxs("div",{className:"flex items-start",children:[f.jsx("div",{className:"flex-shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4",children:f.jsx(cr,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-lg font-medium text-gray-800 dark:text-white",children:"Telefone"}),f.jsx("a",{href:"tel:SEU_TELEFONE",className:"text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors",children:"+55 (66) 99901-2564"})]})]})]})]}),f.jsx("div",{children:f.jsx("div",{className:"bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 md:p-8",children:a?f.jsxs(O.div,{initial:{opacity:0},animate:{opacity:1},className:"text-center py-8",children:[f.jsx("div",{className:"flex justify-center mb-4",children:f.jsx(an,{size:48,className:"text-green-500"})}),f.jsx("h3",{className:"text-xl font-bold text-gray-800 dark:text-white mb-2",children:"Obrigado pelo contato!"}),f.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Recebi sua mensagem e responderei o mais breve possível."})]}):f.jsxs("form",{onSubmit:i,children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Nome"}),f.jsx("input",{id:"name",name:"name",type:"text",value:e.name,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Email"}),f.jsx("input",{id:"email",name:"email",type:"email",value:e.email,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"})]})]}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Assunto"}),f.jsx("input",{id:"subject",name:"subject",type:"text",value:e.subject,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"})]}),f.jsxs("div",{className:"mb-6",children:[f.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",children:"Mensagem"}),f.jsx("textarea",{id:"message",name:"message",rows:5,value:e.message,onChange:o,required:!0,className:"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"})]}),f.jsx(fn,{type:"submit",variant:"primary",className:"w-full py-3",icon:f.jsx(lr,{size:18}),children:"Enviar Mensagem"})]})})})]})})};function AB(){return S.useEffect(()=>{document.title="Developer Portfolio";const e=document.createElement("style");return e.textContent=`
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: 
          linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      }
      
      .dark .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
      }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      .animate-blink {
        animation: blink 1s infinite;
      }
    `,document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),f.jsxs(mB,{children:[f.jsx(fB,{}),f.jsx(LB,{}),f.jsx(CB,{}),f.jsx(IB,{}),f.jsx(PB,{})]})}Dq(document.getElementById("root")).render(f.jsx(S.StrictMode,{children:f.jsx(AB,{})}));
