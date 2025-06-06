import{j as A}from"./jsx-runtime-CLpGMVip.js";import"./index-CZMpeKRu.js";import{s as E}from"./emotion-utils.browser.esm-D8RxJ_4a.js";import{n as q}from"./emotion-styled.browser.esm-yr_-r2v3.js";import{b as F}from"./theme-QoxxbpC5.js";var x={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function z(){if(O)return t;O=1;var r=typeof Symbol=="function"&&Symbol.for,a=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,f=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,S=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,w=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,i=r?Symbol.for("react.lazy"):60116,u=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,$=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var s=e.$$typeof;switch(s){case a:switch(e=e.type,e){case g:case m:case f:case c:case p:case v:return e;default:switch(e=e&&e.$$typeof,e){case d:case S:case i:case y:case l:return e;default:return s}}case n:return s}}}function _(e){return o(e)===m}return t.AsyncMode=g,t.ConcurrentMode=m,t.ContextConsumer=d,t.ContextProvider=l,t.Element=a,t.ForwardRef=S,t.Fragment=f,t.Lazy=i,t.Memo=y,t.Portal=n,t.Profiler=c,t.StrictMode=p,t.Suspense=v,t.isAsyncMode=function(e){return _(e)||o(e)===g},t.isConcurrentMode=_,t.isContextConsumer=function(e){return o(e)===d},t.isContextProvider=function(e){return o(e)===l},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a},t.isForwardRef=function(e){return o(e)===S},t.isFragment=function(e){return o(e)===f},t.isLazy=function(e){return o(e)===i},t.isMemo=function(e){return o(e)===y},t.isPortal=function(e){return o(e)===n},t.isProfiler=function(e){return o(e)===c},t.isStrictMode=function(e){return o(e)===p},t.isSuspense=function(e){return o(e)===v},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===f||e===m||e===c||e===p||e===v||e===w||typeof e=="object"&&e!==null&&(e.$$typeof===i||e.$$typeof===y||e.$$typeof===l||e.$$typeof===d||e.$$typeof===S||e.$$typeof===h||e.$$typeof===$||e.$$typeof===b||e.$$typeof===u)},t.typeOf=o,t}var R;function C(){return R||(R=1,x.exports=z()),x.exports}var P,T;function D(){if(T)return P;T=1;var r=C(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};c[r.ForwardRef]=f,c[r.Memo]=p;function l(i){return r.isMemo(i)?p:c[i.$$typeof]||a}var d=Object.defineProperty,g=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,w=Object.prototype;function y(i,u,h){if(typeof u!="string"){if(w){var $=v(u);$&&$!==w&&y(i,$,h)}var b=g(u);m&&(b=b.concat(m(u)));for(var o=l(i),_=l(u),e=0;e<b.length;++e){var s=b[e];if(!n[s]&&!(h&&h[s])&&!(_&&_[s])&&!(o&&o[s])){var I=S(u,s);try{d(i,s,I)}catch{}}}}return i}return P=y,P}D();function L(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return E(a)}var N=function(){var a=L.apply(void 0,arguments),n="animation-"+a.name;return{name:n,styles:"@keyframes "+n+"{"+a.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const V="loading-spinner-component",H=N`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,W=N`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,M={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},K=q.div`
  margin: ${r=>r.disableMargin?"0":"1rem"};
  width: ${r=>M[r.variant||"medium"].width};
  height: ${r=>M[r.variant||"medium"].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${F.colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${H}, ${W};
  animation-duration: 1s, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,j=r=>A.jsx(K,{className:V,...r});try{j.displayName="Spinner",j.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{j as S};
