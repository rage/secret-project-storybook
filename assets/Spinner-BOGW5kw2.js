import{s as C,j as E}from"./emotion-serialize.browser.esm-Xr4f5Ts3.js";import"./index-CDs2tPxN.js";import{n as T}from"./emotion-styled.browser.esm-OyKATk7d.js";import{b as I}from"./theme-QoxxbpC5.js";var v={exports:{}},r={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=typeof Symbol=="function"&&Symbol.for,S=t?Symbol.for("react.element"):60103,b=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,c=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,l=t?Symbol.for("react.context"):60110,$=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,u=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,P=t?Symbol.for("react.suspense_list"):60120,y=t?Symbol.for("react.memo"):60115,d=t?Symbol.for("react.lazy"):60116,A=t?Symbol.for("react.block"):60121,R=t?Symbol.for("react.fundamental"):60117,F=t?Symbol.for("react.responder"):60118,N=t?Symbol.for("react.scope"):60119;function o(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case S:switch(e=e.type,e){case $:case m:case a:case c:case s:case p:return e;default:switch(e=e&&e.$$typeof,e){case l:case u:case d:case y:case f:return e;default:return n}}case b:return n}}}function x(e){return o(e)===m}r.AsyncMode=$;r.ConcurrentMode=m;r.ContextConsumer=l;r.ContextProvider=f;r.Element=S;r.ForwardRef=u;r.Fragment=a;r.Lazy=d;r.Memo=y;r.Portal=b;r.Profiler=c;r.StrictMode=s;r.Suspense=p;r.isAsyncMode=function(e){return x(e)||o(e)===$};r.isConcurrentMode=x;r.isContextConsumer=function(e){return o(e)===l};r.isContextProvider=function(e){return o(e)===f};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===S};r.isForwardRef=function(e){return o(e)===u};r.isFragment=function(e){return o(e)===a};r.isLazy=function(e){return o(e)===d};r.isMemo=function(e){return o(e)===y};r.isPortal=function(e){return o(e)===b};r.isProfiler=function(e){return o(e)===c};r.isStrictMode=function(e){return o(e)===s};r.isSuspense=function(e){return o(e)===p};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===a||e===m||e===c||e===s||e===p||e===P||typeof e=="object"&&e!==null&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===f||e.$$typeof===l||e.$$typeof===u||e.$$typeof===R||e.$$typeof===F||e.$$typeof===N||e.$$typeof===A)};r.typeOf=o;v.exports=r;var j=v.exports,_=j,z={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},k={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},w={};w[_.ForwardRef]=z;w[_.Memo]=k;function O(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return C(n)}var M=function(){var n=O.apply(void 0,arguments),i="animation-"+n.name;return{name:i,styles:"@keyframes "+i+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};const q="loading-spinner-component",L=M`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,V=M`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,g={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"}},D=T.div`
  margin: ${e=>e.disableMargin?"0":"1rem"};
  width: ${e=>g[e.variant].width};
  height: ${e=>g[e.variant].height};
  border: 5px solid #f1f1f1;
  border-bottom-color: ${I.colors.green[500]};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${L}, ${V};
  animation-duration: 1s, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,h=e=>E.jsx(D,{className:q,...e});try{h.displayName="Spinner",h.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}}}catch{}export{h as S};
