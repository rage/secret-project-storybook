import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./useTranslation-B0Jg814S.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-DsoSFdsS.js";import{Dt as l,F as u,I as d,Ot as f,Q as p,T as m,Tt as h,X as g,Y as _,Z as v,_ as y,a as b,at as x,bt as S,c as C,ct as ee,d as w,et as T,f as te,h as E,ht as D,it as O,j as ne,kt as k,l as re,lt as ie,m as A,n as ae,o as oe,ot as se,p as ce,q as le,s as ue,st as de,t as fe,tt as pe,u as me,v as he,w as j,wt as M,y as ge,yt as N}from"./VisuallyHidden-qGzbw7Kb.js";import{t as _e}from"./react-dom-BzEl8usk.js";import{t as P}from"./jsx-runtime-DeHZSEgm.js";import{m as ve,o as ye,p as be,s as xe}from"./atlas-icons-react-CQxarVg9.js";function Se(e){if(O()&&T()){if(F==="default"){let t=M(e);I=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}F=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;L.set(e,e.style[t]),e.style[t]=`none`}}function Ce(e){if(O()&&T()){if(F!==`disabled`)return;F=`restoring`,setTimeout(()=>{u(()=>{if(F===`restoring`){let t=M(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=I||``),I=``,F=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&L.has(e)){let t=L.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),L.delete(e)}}var F,I,L;function we(){return(we=t((()=>{l(),x(),d(),F=`default`,I=``,L=new WeakMap})))()}function Te(e){let t=(0,z.useContext)(ue);if(t){let{register:n,ref:r,...i}=t;e=j(i,e),n()}return he(t,e.ref),e}function Ee(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:l,shouldCancelOnPointerExit:u,allowTextSelectionOnPress:d,ref:p,...m}=Te(e),[h,_]=(0,z.useState)(!1),y=(0,z.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:x,removeAllGlobalListeners:S}=b(),C=(0,z.useCallback)((e,t)=>{let i=y.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new B(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,_(!0),a},[s,r,n]),w=(0,z.useCallback)((e,r,a=!0)=>{let o=y.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new B(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),_(!1),t&&a&&!s){let n=new B(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),T=ce(w),te=(0,z.useCallback)((e,t)=>{let n=y.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new B(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),E=ce(te),O=(0,z.useCallback)(e=>{let t=y.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&w(R(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,S(),d||Ce(t.target);for(let e of t.disposables)e();t.disposables=[]}},[d,S,w]),k=ce(O);(0,z.useEffect)(()=>{s&&y.current.isPressed&&k({currentTarget:y.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let ie=(0,z.useCallback)(e=>{u&&O(e)},[u,O]),A=(0,z.useCallback)(e=>{s||o?.(e)},[s,o]),ae=(0,z.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);de(n,t),o(se(n))}},[s,o]),oe=(0,z.useMemo)(()=>{let e=y.current,t={onKeyDown(t){if(Oe(t.nativeEvent,t.currentTarget)&&D(t.currentTarget,N(t))){Ae(N(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=C(t,`keyboard`));let i=t.currentTarget;x(M(t.currentTarget),`keyup`,ne(t=>{Oe(t,i)&&!t.repeat&&D(i,N(t))&&e.target&&E(R(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&pe()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if(!(t&&!D(t.currentTarget,N(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!le.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||v(t.nativeEvent))){let e=C(t,`virtual`),r=E(t,`virtual`),i=T(t,`virtual`);A(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=E(R(t.currentTarget,t),r),a=T(R(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,A(t),k(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&Oe(t,e.target)){Ae(N(t),t.key)&&t.preventDefault();let n=N(t),r=D(e.target,n);T(R(e.target,t),`keyboard`,r),r&&ae(t,e.target),S(),t.key!==`Enter`&&De(e.target)&&D(e.target,n)&&!t[Me]&&(t[Me]=!0,le(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!D(t.currentTarget,N(t)))return;if(g(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||Se(e.target),i=C(t,e.pointerType);let a=N(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),x(M(t.currentTarget),`pointerup`,n,!1),x(M(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(D(t.currentTarget,N(t))&&t.button===0){if(l){let n=ee(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{!D(t.currentTarget,N(t))||e.pointerType===`virtual`||t.button===0&&!e.isPressed&&E(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,C(R(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,T(R(e.target,t),e.pointerType,!1),ie(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(D(e.target,N(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?k(t):(f(e.target),e.target.click()))},80);x(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else k(t);e.isOverTarget=!1}},r=e=>{k(e)};t.onDragStart=e=>{D(e.currentTarget,N(e))&&k(e)}}return t},[x,s,l,S,d,ie,C,A,ae]);return(0,z.useEffect)(()=>{if(!p)return;let e=M(p.current);if(!e||!e.head||e.getElementById(Ne))return;let t=e.createElement(`style`);t.id=Ne;let n=re(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Pe}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[p]),(0,z.useEffect)(()=>{let e=y.current;return()=>{d||Ce(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[d]),{isPressed:c||h,pressProps:j(m,oe,{[Pe]:!0})}}function De(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function Oe(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof h(i).HTMLInputElement&&!je(i,n)||i instanceof h(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&De(i))&&n!==`Enter`)}function R(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function ke(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!De(e)}function Ae(e,t){return pe()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!je(e,t):ke(e)}function je(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Fe.has(e.type)}var z,B,Me,Ne,Pe,Fe;function Ie(){return(Ie=t((()=>{ie(),we(),k(),S(),me(),l(),x(),p(),m(),_(),C(),A(),oe(),ge(),_e(),z=n(),B=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Me=Symbol(`linkClicked`),Ne=`react-aria-pressable-style`,Pe=`data-react-aria-pressable`,Fe=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Le(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:p,rel:m,type:h=`button`}=e,g;g=n===`button`?{type:h,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?p:void 0,type:n===`input`?h:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?m:void 0};let{pressProps:_,isPressed:v}=Ee({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:y}=E(e,t);u&&(y.tabIndex=r?-1:y.tabIndex);let b=j(y,_,w(e,{labelable:!0}));return{isPressed:v,buttonProps:j(g,b,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function V(){return(V=t((()=>{te(),m(),y(),Ie()})))()}function Re(){U=!0,setTimeout(()=>{U=!1},500)}function ze(e){e.pointerType===`touch`&&Re()}function Be(){let e=M(null);if(e!==void 0)return W===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,ze),W++,()=>{W--,!(W>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,ze)}}function Ve(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,H.useState)(!1),s=(0,H.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,H.useEffect)(Be,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=b(),{hoverProps:u,triggerHoverEnd:d}=(0,H.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!D(e.currentTarget,N(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(M(N(e)),`pointerover`,e=>{s.isHovered&&s.target&&!D(s.target,N(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,!(t===`touch`||!s.isHovered||!i)&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{U&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&D(e.currentTarget,N(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,H.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var H,U,W;function He(){return(He=t((()=>{S(),l(),oe(),H=n(),U=!1,W=0})))()}function Ue({direction:e,className:t}){return(0,We.jsx)(`svg`,{"aria-hidden":`true`,className:o(Ge,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,We.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var We,Ge;function Ke(){return(Ke=t((()=>{s(),We=P(),Ge=c`
  width: 1em;
  height: 1em;
`})))()}async function qe(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=Ze,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Qe);if(t.remove(),!n)throw Error($e)}var G,K,Je,Ye,Xe,Ze,Qe,$e,et,q,tt,nt,rt,it,at,ot;function st(){return(st=t((()=>{s(),G=e(n()),m(),V(),He(),ae(),i(),K=P(),Je=`⧉`,Ye=`✓`,Xe=`✕`,Ze=`fixed`,Qe=`copy`,$e=`Copy command was unsuccessful`,et=2e3,q={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},tt=a`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,nt=c`
  position: relative;
  display: inline-flex;
`,rt=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1) var(--space-2);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--control-radius);
  background: var(--color-clear-50);
  color: var(--color-gray-500);
  cursor: pointer;
  font-size: var(--font-size-1);
  line-height: 1;
  transition:
    color 0.15s,
    border-color 0.15s;

  &[data-pressed="true"] {
    background: var(--color-clear-200);
  }
  &:hover {
    color: var(--color-gray-700);
    border-color: var(--color-gray-300);
  }
  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
  &[aria-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &[aria-disabled="true"]:hover {
    color: var(--color-gray-500);
    border-color: var(--color-clear-400);
  }
`,it=c`
  display: inline-flex;
  animation: ${tt} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,at=c`
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--color-gray-700);
  color: var(--color-gray-100);
  font-size: var(--font-size-1);
  line-height: 1.4;
  pointer-events: none;

  /* display: none, not visibility: hidden -- an absolutely positioned nowrap label still
     contributes scrollable overflow when merely invisible, pushing a page with a bare copy button
     past its right edge and into horizontal panning on a 390px viewport. */
  display: none;

  &[data-show="true"] {
    display: block;
  }
`,ot=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,className:s,"data-testid":c})=>{let{t:l}=r(`shared-module`),u=G.useRef(null),[d,f]=G.useState(q.IDLE),[p,m]=G.useState(!1),h=G.useRef(null);G.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]);let{buttonProps:g,isPressed:_}=Le({"aria-label":t,onPress:async()=>{if(i)return;let t=q.COPIED;try{await qe(e)}catch{t=q.ERROR}f(t),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>f(q.IDLE),et)}},u),{hoverProps:v,isHovered:y}=Ve({}),b=i?a??t:d===q.COPIED?l(`copy-button.copied`):d===q.ERROR?l(`copy-button.failed`):``,x=d===q.COPIED?Ye:d===q.ERROR?Xe:Je;return(0,K.jsxs)(`span`,{className:nt,children:[(0,K.jsx)(`button`,{...j(g,v),ref:u,className:o(rt,s),type:`button`,"aria-disabled":i||void 0,"data-pressed":_,"data-testid":c,onFocus:()=>m(!0),onBlur:()=>m(!1),children:n??(0,K.jsx)(`span`,{"aria-hidden":`true`,className:it,"data-status":d,children:x},d)}),(0,K.jsx)(`span`,{className:at,"data-show":y||p||d!==q.IDLE,"aria-hidden":`true`,children:b||t}),(0,K.jsx)(fe,{children:(0,K.jsx)(`span`,{"aria-live":`polite`,children:b})})]})}})))()}var J,ct,lt,ut,dt,ft,pt,mt;function ht(){return(ht=t((()=>{s(),n(),J=P(),ct=`30rem`,lt=c`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${ct}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,ut=c`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,dt=c`
  display: contents;

  @media (max-width: ${ct}) {
    display: grid;
    gap: var(--space-1);
  }
`,ft=c`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,pt=c`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,mt=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,J.jsx)(`dl`,{className:o(t===`inline`?lt:ut,n),"data-testid":r,children:e.map((e,n)=>(0,J.jsxs)(`div`,{className:t===`inline`?dt:void 0,children:[(0,J.jsx)(`dt`,{className:ft,children:e.label}),(0,J.jsx)(`dd`,{className:pt,children:e.value})]},n))})})))()}var Y,X,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=t((()=>{s(),Y=e(n()),V(),Ke(),X=P(),gt=`right`,_t=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,vt=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,yt=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-4);
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  color: var(--color-gray-700);
  font: inherit;

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: calc(var(--focus-ring-offset) * -1);
  }
`,bt=c`
  padding: var(--space-2) 0;
`,xt=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,St=c`
  display: inline-flex;
  flex: none;
  transition: transform 0.2s ease;
  color: var(--color-gray-600);

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ct=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,wt=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,Tt=c`
  padding: 0 var(--space-4) var(--space-4);
`,Et=c`
  padding: 0 0 var(--space-3);
`,Dt=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=Y.useState(n),m=r!==void 0,h=m?r:f,g=Y.useRef(null),_=Y.useId(),v=Y.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Le(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(_t,d&&vt,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(yt,d&&bt),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:xt,children:[(0,X.jsx)(`span`,{className:St,"data-expanded":h,children:(0,X.jsx)(Ue,{direction:gt})}),(0,X.jsx)(`span`,{className:Ct,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:wt,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(Tt,d&&Et),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function kt(e){return e instanceof Error&&e.name===`AppApiError`}function At(e){return e instanceof Error&&e.name===Gt&&Array.isArray(e.issues)}function jt(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function Mt(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function Nt(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function Pt(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function Ft(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function It(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function Lt(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function Rt(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:Lt(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function zt(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function Bt(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Vt(e){return Z(e)&&e.name===qt&&Array.isArray(e.errors)}function Ht(e,t){let n=jt(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:Nt(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:Rt(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function Ut(e,t){let n=jt(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:Mt(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:Nt(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function Wt(e,t){if(kt(e))return Ut(e,t);if(Bt(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=Mt(n);return{category:r,severity:Nt(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(Ft(e))return It(e,t);if(Pt(e))return Ht(e,t);if(Z(e)&&e.error===`too_many_requests`)return Ht({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return Ht({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Vt(e)){let n=e.errors?.[0],r=n?Wt(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(At(e)){let n=e.issues.map(e=>({message:zt(e,t),path:Lt(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===Kt?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(Jt)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var Gt,Kt,qt,Jt;function Yt(){return(Yt=t((()=>{Gt=`ZodError`,Kt=`AbortError`,qt=`AggregateError`,Jt=`timeout`})))()}function Xt(e){return typeof e==`object`&&!!e}function Zt(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Qt(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Zt(e,t);if(r)return{title:n,message:r};let i=Xt(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function $t(e){return c`
    max-height: ${e};
  `}function en(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function tn(e){return e.path?`${e.path}: ${e.message}`:e.message}function nn(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${tn(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${ln}`));return t.join(`
`)}var Q,$,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An;function jn(){return(jn=t((()=>{s(),ve(),Q=e(n()),i(),Yt(),st(),ht(),Ot(),$=P(),rn=`comfortable`,an=`compact`,on={assertive:`alert`,polite:`status`,off:void 0},sn={error:be,warning:ye,info:xe},cn=20,ln=`  `,un=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,dn=c`
  display: grid;
  gap: var(--space-3);
  width: 100%;
  border: 1px solid transparent;
  border-left-width: 4px;
  border-radius: var(--radius-3);
  color: var(--color-gray-700);
  font-family: var(--font-sans);
  font-size: var(--font-size-2);
  line-height: 1.5;
  overflow: auto;
  animation: ${un} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fn={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    padding: var(--space-4);
    font-size: var(--font-size-1);
  `},pn={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},mn={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},hn=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,gn=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,_n=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,vn=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,yn=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,bn=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,xn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,Sn=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,Cn=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,wn=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,Tn=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,En=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,Dn=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,On=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,kn=c`
  margin: 0;
  padding: var(--space-3);
  border-radius: var(--radius-2);
  background: var(--color-gray-50);
  color: var(--color-gray-700);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`,An=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:c,detailsMaxHeight:l,className:u,"data-testid":d})=>{let{t:f}=r(`errors`),p=(0,Q.useMemo)(()=>Wt(e,f),[e,f]),m=(0,Q.useMemo)(()=>Qt(p,f),[p,f]),h=(0,Q.useMemo)(()=>{let e=p.technicalDetails,t=[];return p.status!==null&&t.push({label:f(`errorNotice.status`),value:String(p.status)}),p.retryAfterSeconds!==null&&t.push({label:f(`errorNotice.retryAfter`),value:f(`errorNotice.seconds`,{seconds:p.retryAfterSeconds})}),p.type&&t.push({label:f(`errorNotice.type`),value:p.type}),p.messageKey&&t.push({label:f(`errorNotice.messageKey`),value:p.messageKey}),p.code&&p.code!==p.type&&t.push({label:f(`errorNotice.code`),value:p.code}),e?.method&&t.push({label:f(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:f(`errorNotice.url`),value:e.url}),t},[p,f]),g=(0,Q.useMemo)(()=>{let e=p.technicalDetails,t=[];return e?.detail&&t.push({label:f(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:f(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:f(`errorNotice.rawResponse`),text:en(e.raw)}),t},[p,f]),_=(0,Q.useMemo)(()=>nn({title:m.title,message:m.message,view:p,requestIdLabel:f(`errorNotice.requestId`),details:h,blocks:g,pageLabel:f(`errorNotice.page`),timeLabel:f(`errorNotice.time`)}),[m,p,h,g,f]),v=n??p.severity,y=sn[v],b=`h${a}`,x=m.message===m.title?null:m.message;return(0,$.jsxs)(`div`,{className:o(dn,fn[s],pn[v],c===void 0?void 0:$t(c),u),role:on[i],"data-testid":d,children:[(0,$.jsxs)(`div`,{className:hn,children:[(0,$.jsx)(`span`,{className:o(gn,mn[v]),"aria-hidden":`true`,children:(0,$.jsx)(y,{size:cn})}),(0,$.jsx)(b,{className:_n,children:m.title})]}),t?(0,$.jsx)(`div`,{className:vn,children:t}):null,x?(0,$.jsx)(`p`,{className:vn,children:x}):null,p.issues.length>0?(0,$.jsx)(`ul`,{className:yn,children:p.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:bn,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,p.requestId?(0,$.jsx)(`div`,{className:xn,children:(0,$.jsxs)(`dl`,{className:Sn,children:[(0,$.jsx)(`dt`,{className:Cn,children:f(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:wn,"data-mask-over-this-in-system-tests":`true`,children:p.requestId})]})}):null,(0,$.jsxs)(`div`,{className:Tn,children:[(0,$.jsx)(ot,{value:_,label:f(`errorNotice.copyReport`),children:f(`errorNotice.copyReport`)}),p.blockId?(0,$.jsx)(`a`,{className:En,href:`#${p.blockId}`,children:f(`go-to-error`)}):null]}),h.length>0||g.length>0?(0,$.jsx)(Dt,{title:f(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(Dn,l===void 0?void 0:$t(l)),children:[h.length>0?(0,$.jsx)(mt,{items:h}):null,g.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:On,children:e.label}),(0,$.jsx)(`pre`,{className:kn,children:e.text})]},e.label))]})}):null]})}})))()}export{Ee as _,Dt as a,ht as c,Ue as d,Ke as f,V as g,Le as h,jn as i,ot as l,He as m,an as n,Ot as o,Ve as p,An as r,mt as s,rn as t,st as u,Ie as v};