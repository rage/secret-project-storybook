import{a as e,n as t,r as n,t as r}from"./rolldown-runtime-DkW27tQK.js";import{t as i}from"./react-BZJXY1be.js";import{a,o}from"./emotion-utils.browser.esm-De5qzrBr.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{a as c,i as l,n as u,o as d,r as f,s as p,t as m}from"./emotion-styled.browser.esm-Da19Zo8Q.js";import{n as h,t as g}from"./styles-CJhTCqa4.js";var _=r((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),v=r(((e,t)=>{t.exports=_()})),y=r(((e,t)=>{var n=v(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h}));function b(){return o([...arguments])}function x(){var e=b.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var S,C;function w(){return(w=t((()=>{d(),S=e(i()),p(),a(),y(),C=function(e,t){var n=arguments;if(t==null||!c.call(t,`css`))return S.createElement.apply(void 0,n);var r=n.length,i=Array(r);i[0]=f,i[1]=l(e,t);for(var a=2;a<r;a++)i[a]=n[a];return S.createElement.apply(null,i)},(function(e){var t;t||=e.JSX||={}})(C||={})})))()}var T;function E(){return(E=t((()=>{T=`loading-spinner-component`})))()}var D,O,k,A,j,M;function N(){return(N=t((()=>{w(),m(),g(),E(),D=s(),O=x`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`,k=x`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`,A={small:{width:`16px`,height:`16px`},medium:{width:`30px`,height:`30px`},large:{width:`42px`,height:`42px`},placeholder:{width:`30px`,height:`30px`}},j=u.div`
  margin: ${e=>e.disableMargin?`0`:`1rem`};
  width: ${e=>A[e.variant||`medium`].width};
  height: ${e=>A[e.variant||`medium`].height};
  border: ${e=>e.variant===`placeholder`?`4px dashed`:`5px solid`} #f1f1f1;
  border-bottom-color: ${e=>e.variant===`placeholder`?h.colors.blue[500]:h.colors.green[500]};
  border-top-color: ${e=>e.variant===`placeholder`?h.colors.blue[300]:`transparent`};
  border-radius: 50%;
  display: inline-block;
  /** Showing the spinner is delayed because showing a spinner for a moment on fast transitions makes the application to feel like more slow than it is **/
  opacity: 0;
  animation-name: ${O}, ${k};
  animation-duration: ${e=>e.variant===`placeholder`?`0.8s`:`1s`}, 600ms;
  animation-timing-function: linear, ease;
  animation-iteration-count: infinite, 1;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
`,M=e=>(0,D.jsx)(j,{"data-testid":T,...e})})))()}var P=n({Large:()=>R,Medium:()=>I,Small:()=>L,__namedExportsOrder:()=>z,default:()=>F}),F,I,L,R,z;function B(){return(B=t((()=>{N(),F={component:M,parameters:{docs:{description:{component:`Used to display a loading animation.`}}}},I={args:{variant:`medium`,disableMargin:!1}},L={args:{variant:`small`}},R={args:{variant:`large`}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "medium",
    disableMargin: false
  }
} satisfies StoryType`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "small"
  }
} satisfies StoryType`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "large"
  }
} satisfies StoryType`,...R.parameters?.docs?.source}}},z=[`Medium`,`Small`,`Large`]})))()}export{B as n,w as r,P as t};