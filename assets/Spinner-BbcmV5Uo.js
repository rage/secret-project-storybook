import{j as F}from"./jsx-runtime-D_zvdyIk.js";import{h as z,E as C,c as D,s as J}from"./emotion-styled.browser.esm-uiAl99qX.js";import{r as R}from"./index-0yr9KlQE.js";import{s as L}from"./emotion-utils.browser.esm-YKnV_D65.js";import{b as w}from"./theme-DgIg-lup.js";var P={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function X(){if(T)return t;T=1;var r=typeof Symbol=="function"&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,l=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,y=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.async_mode"):60111,m=r?Symbol.for("react.concurrent_mode"):60111,S=r?Symbol.for("react.forward_ref"):60112,v=r?Symbol.for("react.suspense"):60113,_=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,c=r?Symbol.for("react.lazy"):60116,p=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,$=r?Symbol.for("react.responder"):60118,h=r?Symbol.for("react.scope"):60119;function a(e){if(typeof e=="object"&&e!==null){var f=e.$$typeof;switch(f){case o:switch(e=e.type,e){case g:case m:case u:case i:case l:case v:return e;default:switch(e=e&&e.$$typeof,e){case y:case S:case c:case d:case s:return e;default:return f}}case n:return f}}}function x(e){return a(e)===m}return t.AsyncMode=g,t.ConcurrentMode=m,t.ContextConsumer=y,t.ContextProvider=s,t.Element=o,t.ForwardRef=S,t.Fragment=u,t.Lazy=c,t.Memo=d,t.Portal=n,t.Profiler=i,t.StrictMode=l,t.Suspense=v,t.isAsyncMode=function(e){return x(e)||a(e)===g},t.isConcurrentMode=x,t.isContextConsumer=function(e){return a(e)===y},t.isContextProvider=function(e){return a(e)===s},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===o},t.isForwardRef=function(e){return a(e)===S},t.isFragment=function(e){return a(e)===u},t.isLazy=function(e){return a(e)===c},t.isMemo=function(e){return a(e)===d},t.isPortal=function(e){return a(e)===n},t.isProfiler=function(e){return a(e)===i},t.isStrictMode=function(e){return a(e)===l},t.isSuspense=function(e){return a(e)===v},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===u||e===m||e===i||e===l||e===v||e===_||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===d||e.$$typeof===s||e.$$typeof===y||e.$$typeof===S||e.$$typeof===b||e.$$typeof===$||e.$$typeof===h||e.$$typeof===p)},t.typeOf=a,t}var E;function V(){return E||(E=1,P.exports=X()),P.exports}var O,j;function H(){if(j)return O;j=1;var r=V(),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[r.ForwardRef]=u,i[r.Memo]=l;function s(c){return r.isMemo(c)?l:i[c.$$typeof]||o}var y=Object.defineProperty,g=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function d(c,p,b){if(typeof p!="string"){if(_){var $=v(p);$&&$!==_&&d(c,$,b)}var h=g(p);m&&(h=h.concat(m(p)));for(var a=s(c),x=s(p),e=0;e<h.length;++e){var f=h[e];if(!n[f]&&!(b&&b[f])&&!(x&&x[f])&&!(a&&a[f])){var q=S(p,f);try{y(c,f,q)}catch{}}}}return c}return O=d,O}H();var M=function(o,n){var u=arguments;if(n==null||!z.call(n,"css"))return R.createElement.apply(void 0,u);var l=u.length,i=new Array(l);i[0]=C,i[1]=D(o,n);for(var s=2;s<l;s++)i[s]=u[s];return R.createElement.apply(null,i)};(function(r){var o;o||(o=r.JSX||(r.JSX={}))})(M||(M={}));function W(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return L(o)}function I(){var r=W.apply(void 0,arguments),o="animation-"+r.name;return{name:o,styles:"@keyframes "+o+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const K="loading-spinner-component",Y=I`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,B=I`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,N={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"},placeholder:{width:"30px",height:"30px"}},G=J.div`
  margin: ${r=>r.disableMargin?"0":"1rem"};
  width: ${r=>N[r.variant||"medium"].width};
  height: ${r=>N[r.variant||"medium"].height};
  border: ${r=>r.variant==="placeholder"?"4px dashed":"5px solid"} #f1f1f1;
  border-bottom-color: ${r=>r.variant==="placeholder"?w.colors.blue[500]:w.colors.green[500]};
  border-top-color: ${r=>r.variant==="placeholder"?w.colors.blue[300]:"transparent"};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${Y}, ${B};
  animation-duration: ${r=>r.variant==="placeholder"?"0.8s":"1s"}, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,A=r=>F.jsx(G,{"data-testid":"spinner",className:K,...r});try{A.displayName="Spinner",A.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'},{value:'"placeholder"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{A as S};
