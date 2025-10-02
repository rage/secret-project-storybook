import{j as q}from"./jsx-runtime-D_zvdyIk.js";import{h as F,E as z,c as C,s as D}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as O}from"./index-0yr9KlQE.js";import{s as J}from"./emotion-utils.browser.esm-YKnV_D65.js";import{b as L}from"./theme-cNlTTPbF.js";var w={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R;function X(){if(R)return t;R=1;var r=typeof Symbol=="function"&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,b=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,S=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,x=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,c=r?Symbol.for("react.lazy"):60116,p=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,$=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var l=e.$$typeof;switch(l){case o:switch(e=e.type,e){case b:case m:case u:case i:case f:case v:return e;default:switch(e=e&&e.$$typeof,e){case d:case S:case c:case y:case s:return e;default:return l}}case n:return l}}}function _(e){return a(e)===m}return t.AsyncMode=b,t.ConcurrentMode=m,t.ContextConsumer=d,t.ContextProvider=s,t.Element=o,t.ForwardRef=S,t.Fragment=u,t.Lazy=c,t.Memo=y,t.Portal=n,t.Profiler=i,t.StrictMode=f,t.Suspense=v,t.isAsyncMode=function(e){return _(e)||a(e)===b},t.isConcurrentMode=_,t.isContextConsumer=function(e){return a(e)===d},t.isContextProvider=function(e){return a(e)===s},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o},t.isForwardRef=function(e){return a(e)===S},t.isFragment=function(e){return a(e)===u},t.isLazy=function(e){return a(e)===c},t.isMemo=function(e){return a(e)===y},t.isPortal=function(e){return a(e)===n},t.isProfiler=function(e){return a(e)===i},t.isStrictMode=function(e){return a(e)===f},t.isSuspense=function(e){return a(e)===v},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===u||e===m||e===i||e===f||e===v||e===x||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===y||e.$$typeof===s||e.$$typeof===d||e.$$typeof===S||e.$$typeof===h||e.$$typeof===$||e.$$typeof===g||e.$$typeof===p)},t.typeOf=a,t}var T;function V(){return T||(T=1,w.exports=X()),w.exports}var P,E;function H(){if(E)return P;E=1;var r=V(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[r.ForwardRef]=u,i[r.Memo]=f;function s(c){return r.isMemo(c)?f:i[c.$$typeof]||o}var d=Object.defineProperty,b=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,x=Object.prototype;function y(c,p,h){if(typeof p!="string"){if(x){var $=v(p);$&&$!==x&&y(c,$,h)}var g=b(p);m&&(g=g.concat(m(p)));for(var a=s(c),_=s(p),e=0;e<g.length;++e){var l=g[e];if(!n[l]&&!(h&&h[l])&&!(_&&_[l])&&!(a&&a[l])){var I=S(p,l);try{d(c,l,I)}catch{}}}}return c}return P=y,P}H();var j=function(o,n){var u=arguments;if(n==null||!F.call(n,"css"))return O.createElement.apply(void 0,u);var f=u.length,i=new Array(f);i[0]=z,i[1]=C(o,n);for(var s=2;s<f;s++)i[s]=u[s];return O.createElement.apply(null,i)};(function(r){var o;o||(o=r.JSX||(r.JSX={}))})(j||(j={}));function W(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return J(o)}function A(){var r=W.apply(void 0,arguments),o="animation-"+r.name;return{name:o,styles:"@keyframes "+o+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const K="loading-spinner-component",Y=A`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,B=A`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,M={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},G=D.div`
  margin: ${r=>r.disableMargin?"0":"1rem"};
  width: ${r=>M[r.variant||"medium"].width};
  height: ${r=>M[r.variant||"medium"].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${L.colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${Y}, ${B};
  animation-duration: 1s, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,N=r=>q.jsx(G,{className:K,...r});try{N.displayName="Spinner",N.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{N as S};
