import{s as Y,r as j,j as B}from"./iframe-D0P9lDOs.js";import{h as G,E as Q,c as Z,s as k}from"./emotion-styled.browser.esm-Dn97sZhW.js";import{b as O}from"./theme-DgIg-lup.js";import"./preload-helper-Dp1pzeXC.js";import"./extends-CF3RwP-h.js";var M={exports:{}},t={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function ee(){if(N)return t;N=1;var r=typeof Symbol=="function"&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,y=r?Symbol.for("react.context"):60110,b=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,S=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,x=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,c=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,h=r?Symbol.for("react.fundamental"):60117,$=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function n(e){if(typeof e=="object"&&e!==null){var p=e.$$typeof;switch(p){case a:switch(e=e.type,e){case b:case f:case l:case i:case u:case g:return e;default:switch(e=e&&e.$$typeof,e){case y:case S:case c:case d:case s:return e;default:return p}}case o:return p}}}function _(e){return n(e)===f}return t.AsyncMode=b,t.ConcurrentMode=f,t.ContextConsumer=y,t.ContextProvider=s,t.Element=a,t.ForwardRef=S,t.Fragment=l,t.Lazy=c,t.Memo=d,t.Portal=o,t.Profiler=i,t.StrictMode=u,t.Suspense=g,t.isAsyncMode=function(e){return _(e)||n(e)===b},t.isConcurrentMode=_,t.isContextConsumer=function(e){return n(e)===y},t.isContextProvider=function(e){return n(e)===s},t.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===a},t.isForwardRef=function(e){return n(e)===S},t.isFragment=function(e){return n(e)===l},t.isLazy=function(e){return n(e)===c},t.isMemo=function(e){return n(e)===d},t.isPortal=function(e){return n(e)===o},t.isProfiler=function(e){return n(e)===i},t.isStrictMode=function(e){return n(e)===u},t.isSuspense=function(e){return n(e)===g},t.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===l||e===f||e===i||e===u||e===g||e===x||typeof e=="object"&&e!==null&&(e.$$typeof===c||e.$$typeof===d||e.$$typeof===s||e.$$typeof===y||e.$$typeof===S||e.$$typeof===h||e.$$typeof===$||e.$$typeof===v||e.$$typeof===m)},t.typeOf=n,t}var A;function re(){return A||(A=1,M.exports=ee()),M.exports}var E,I;function te(){if(I)return E;I=1;var r=re(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};i[r.ForwardRef]=l,i[r.Memo]=u;function s(c){return r.isMemo(c)?u:i[c.$$typeof]||a}var y=Object.defineProperty,b=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,S=Object.getOwnPropertyDescriptor,g=Object.getPrototypeOf,x=Object.prototype;function d(c,m,h){if(typeof m!="string"){if(x){var $=g(m);$&&$!==x&&d(c,$,h)}var v=b(m);f&&(v=v.concat(f(m)));for(var n=s(c),_=s(m),e=0;e<v.length;++e){var p=v[e];if(!o[p]&&!(h&&h[p])&&!(_&&_[p])&&!(n&&n[p])){var U=S(m,p);try{y(c,p,U)}catch{}}}}return c}return E=d,E}te();var q=function(a,o){var l=arguments;if(o==null||!G.call(o,"css"))return j.createElement.apply(void 0,l);var u=l.length,i=new Array(u);i[0]=Q,i[1]=Z(a,o);for(var s=2;s<u;s++)i[s]=l[s];return j.createElement.apply(null,i)};(function(r){var a;a||(a=r.JSX||(r.JSX={}))})(q||(q={}));function ae(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return Y(a)}function K(){var r=ae.apply(void 0,arguments),a="animation-"+r.name;return{name:a,styles:"@keyframes "+a+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}const oe="loading-spinner-component",ne=K`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,ie=K`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,F={small:{width:"16px",height:"16px"},medium:{width:"30px",height:"30px"},large:{width:"42px",height:"42px"},placeholder:{width:"30px",height:"30px"}},se=k.div`
  margin: ${r=>r.disableMargin?"0":"1rem"};
  width: ${r=>F[r.variant||"medium"].width};
  height: ${r=>F[r.variant||"medium"].height};
  border: ${r=>r.variant==="placeholder"?"4px dashed":"5px solid"} #f1f1f1;
  border-bottom-color: ${r=>r.variant==="placeholder"?O.colors.blue[500]:O.colors.green[500]};
  border-top-color: ${r=>r.variant==="placeholder"?O.colors.blue[300]:"transparent"};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${ne}, ${ie};
  animation-duration: ${r=>r.variant==="placeholder"?"0.8s":"1s"}, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,R=r=>B.jsx(se,{"data-testid":"spinner",className:oe,...r});try{R.displayName="Spinner",R.__docgenInfo={description:"",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"medium"'},{value:'"small"'},{value:'"placeholder"'}]}},disableMargin:{defaultValue:null,description:"",name:"disableMargin",required:!1,type:{name:"boolean"}}}}}catch{}const de={component:R,parameters:{docs:{description:{component:"Used to display a loading animation."}}}},w={args:{variant:"medium",disableMargin:!1}},P={args:{variant:"small"}},T={args:{variant:"large"}};var z,C,D;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "medium",
    disableMargin: false
  }
} satisfies StoryType`,...(D=(C=w.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,J,X;P.parameters={...P.parameters,docs:{...(L=P.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "small"
  }
} satisfies StoryType`,...(X=(J=P.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var V,H,W;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "large"
  }
} satisfies StoryType`,...(W=(H=T.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const ye=["Medium","Small","Large"];export{T as Large,w as Medium,P as Small,ye as __namedExportsOrder,de as default};
