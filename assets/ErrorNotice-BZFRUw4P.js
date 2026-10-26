import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r,t as i}from"./useTranslation-B0Jg814S.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-DsoSFdsS.js";import{Dt as l,F as u,I as d,Ot as f,Q as p,T as m,Tt as h,X as g,Y as _,Z as v,_ as y,a as b,at as x,bt as S,c as C,ct as ee,d as w,et as T,f as te,h as E,ht as D,it as O,j as ne,kt as k,l as re,lt as ie,m as A,n as j,o as M,ot as ae,p as oe,q as se,s as ce,st as le,t as ue,tt as de,u as fe,v as pe,w as N,wt as P,y as me,yt as F}from"./VisuallyHidden-qGzbw7Kb.js";import{t as he}from"./react-dom-BzEl8usk.js";import{t as I}from"./jsx-runtime-DeHZSEgm.js";import{m as ge,o as _e,p as ve,s as ye}from"./atlas-icons-react-CQxarVg9.js";function be(e){let t=(0,L.useRef)(null),n=(0,L.useRef)(void 0),r=(0,L.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,L.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var L;function xe(){return(xe=t((()=>{L=n()})))()}function Se(e){if(O()&&T()){if(R==="default"){let t=P(e);we=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}R=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;z.set(e,e.style[t]),e.style[t]=`none`}}function Ce(e){if(O()&&T()){if(R!==`disabled`)return;R=`restoring`,setTimeout(()=>{u(()=>{if(R===`restoring`){let t=P(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=we||``),we=``,R=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&z.has(e)){let t=z.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),z.delete(e)}}var R,we,z;function Te(){return(Te=t((()=>{l(),x(),d(),R=`default`,we=``,z=new WeakMap})))()}function Ee(e){let t=(0,V.useContext)(ce);if(t){let{register:n,ref:r,...i}=t;e=N(i,e),n()}return pe(t,e.ref),e}function De(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:l,shouldCancelOnPointerExit:u,allowTextSelectionOnPress:d,ref:p,...m}=Ee(e),[h,_]=(0,V.useState)(!1),y=(0,V.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:x,removeAllGlobalListeners:S}=b(),C=(0,V.useCallback)((e,t)=>{let i=y.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new H(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,_(!0),a},[s,r,n]),w=(0,V.useCallback)((e,r,a=!0)=>{let o=y.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new H(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),_(!1),t&&a&&!s){let n=new H(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),T=oe(w),te=(0,V.useCallback)((e,t)=>{let n=y.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new H(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),E=oe(te),O=(0,V.useCallback)(e=>{let t=y.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&w(B(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,S(),d||Ce(t.target);for(let e of t.disposables)e();t.disposables=[]}},[d,S,w]),k=oe(O);(0,V.useEffect)(()=>{s&&y.current.isPressed&&k({currentTarget:y.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let ie=(0,V.useCallback)(e=>{u&&O(e)},[u,O]),A=(0,V.useCallback)(e=>{s||o?.(e)},[s,o]),j=(0,V.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);le(n,t),o(ae(n))}},[s,o]),M=(0,V.useMemo)(()=>{let e=y.current,t={onKeyDown(t){if(ke(t.nativeEvent,t.currentTarget)&&D(t.currentTarget,F(t))){je(F(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=C(t,`keyboard`));let i=t.currentTarget;x(P(t.currentTarget),`keyup`,ne(t=>{ke(t,i)&&!t.repeat&&D(i,F(t))&&e.target&&E(B(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&de()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if(!(t&&!D(t.currentTarget,F(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!se.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||v(t.nativeEvent))){let e=C(t,`virtual`),r=E(t,`virtual`),i=T(t,`virtual`);A(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=E(B(t.currentTarget,t),r),a=T(B(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,A(t),k(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&ke(t,e.target)){je(F(t),t.key)&&t.preventDefault();let n=F(t),r=D(e.target,n);T(B(e.target,t),`keyboard`,r),r&&j(t,e.target),S(),t.key!==`Enter`&&Oe(e.target)&&D(e.target,n)&&!t[Ne]&&(t[Ne]=!0,se(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!D(t.currentTarget,F(t)))return;if(g(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||Se(e.target),i=C(t,e.pointerType);let a=F(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),x(P(t.currentTarget),`pointerup`,n,!1),x(P(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(D(t.currentTarget,F(t))&&t.button===0){if(l){let n=ee(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{!D(t.currentTarget,F(t))||e.pointerType===`virtual`||t.button===0&&!e.isPressed&&E(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,C(B(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,T(B(e.target,t),e.pointerType,!1),ie(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(D(e.target,F(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?k(t):(f(e.target),e.target.click()))},80);x(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else k(t);e.isOverTarget=!1}},r=e=>{k(e)};t.onDragStart=e=>{D(e.currentTarget,F(e))&&k(e)}}return t},[x,s,l,S,d,ie,C,A,j]);return(0,V.useEffect)(()=>{if(!p)return;let e=P(p.current);if(!e||!e.head||e.getElementById(Pe))return;let t=e.createElement(`style`);t.id=Pe;let n=re(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Fe}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[p]),(0,V.useEffect)(()=>{let e=y.current;return()=>{d||Ce(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[d]),{isPressed:c||h,pressProps:N(m,M,{[Fe]:!0})}}function Oe(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function ke(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof h(i).HTMLInputElement&&!Me(i,n)||i instanceof h(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&Oe(i))&&n!==`Enter`)}function B(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function Ae(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!Oe(e)}function je(e,t){return de()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Me(e,t):Ae(e)}function Me(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Ie.has(e.type)}var V,H,Ne,Pe,Fe,Ie;function Le(){return(Le=t((()=>{ie(),Te(),k(),S(),fe(),l(),x(),p(),m(),_(),C(),A(),M(),me(),he(),V=n(),H=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Ne=Symbol(`linkClicked`),Pe=`react-aria-pressable-style`,Fe=`data-react-aria-pressable`,Ie=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Re(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:p,rel:m,type:h=`button`}=e,g;g=n===`button`?{type:h,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?p:void 0,type:n===`input`?h:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?m:void 0};let{pressProps:_,isPressed:v}=De({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:y}=E(e,t);u&&(y.tabIndex=r?-1:y.tabIndex);let b=N(y,_,w(e,{labelable:!0}));return{isPressed:v,buttonProps:N(g,b,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function U(){return(U=t((()=>{te(),m(),y(),Le()})))()}function ze(){Ue=!0,setTimeout(()=>{Ue=!1},500)}function Be(e){e.pointerType===`touch`&&ze()}function Ve(){let e=P(null);if(e!==void 0)return G===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,Be),G++,()=>{G--,!(G>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,Be)}}function He(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,W.useState)(!1),s=(0,W.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,W.useEffect)(Ve,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=b(),{hoverProps:u,triggerHoverEnd:d}=(0,W.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!D(e.currentTarget,F(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(P(F(e)),`pointerover`,e=>{s.isHovered&&s.target&&!D(s.target,F(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,!(t===`touch`||!s.isHovered||!i)&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{Ue&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&D(e.currentTarget,F(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,W.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var W,Ue,G;function We(){return(We=t((()=>{S(),l(),M(),W=n(),Ue=!1,G=0})))()}function Ge(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Ke(){return(Ke=t((()=>{})))()}function qe(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Je(e,t){return e?t:{}}function Ye(){return(Ye=t((()=>{})))()}function Xe(e){return yt[e]}function Ze(e){return o(et,vt[e.size],Xe(e.variant),e.variant===`icon`?bt[e.size]:void 0)}var Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt;function xt(){return(xt=t((()=>{s(),c`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,Qe=`
  &[aria-disabled="true"],
  &:disabled {
    opacity: var(--btn-disabled-opacity);
    cursor: default;
    transition: none;
  }

  /* An aria-disabled anchor stays tabbable and would otherwise still navigate when clicked. */
  &[aria-disabled="true"] {
    pointer-events: none;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`,$e=c`
  ${Qe}

  &[aria-disabled="true"] {
    text-decoration: none;
  }
`,et=c`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: var(--control-gap);

  border-radius: var(--control-radius);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  /* A button that wraps to two lines has already lost its shape. A label too long to fit wants
     shortening; a caller that cannot shorten it overrides this through its own className. */
  white-space: nowrap;

  border: 1px solid transparent;
  background: transparent;
  color: inherit;

  cursor: pointer;
  user-select: none;

  transition: var(--btn-transition);

  outline: none;
  &:focus-visible {
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }

  ${Qe}

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,tt=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,nt=c`
  opacity: 0;
`,rt=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,it=c`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,at=c`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,ot=c`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,st=c`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,ct=c`
  padding-inline: var(--btn-icon-padding-x-sm);
`,lt=c`
  padding-inline: var(--btn-icon-padding-x-md);
`,ut=c`
  padding-inline: var(--btn-icon-padding-x-lg);
`,dt=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return c`
    background: var(--btn-${e}-bg);
    color: var(--btn-${e}-fg);
    border-color: var(--btn-${e}-border);

    &:hover:not(:disabled):not([aria-disabled="true"]),
    &:focus-visible:not(:disabled):not([aria-disabled="true"]) {
      background: var(--btn-${e}-bg${r});
      color: var(--btn-${e}-fg${r});
      border-color: var(--btn-${e}-border${r});

      box-shadow:
        var(--btn-${e}-shadow-hover),
        inset 0 0 0 var(--btn-${e}-outline-width) ${t};
    }

    &[data-pressed="true"] {
      background: var(--btn-${e}-bg-pressed);
      box-shadow: var(--btn-pressed-shadow);
    }
  `},ft=dt(`primary`,`var(--btn-primary-bg)`),pt=dt(`secondary`,`var(--btn-secondary-bg)`),mt=dt(`tertiary`,`var(--btn-tertiary-bg-hover)`),ht=c`
  background: var(--btn-danger-bg);
  color: var(--btn-danger-fg);
  border-color: var(--btn-danger-border);

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    background: var(--btn-danger-bg-hover);
    border-color: var(--btn-danger-bg-hover);
  }

  /* Danger communicates pressed state by fill weight alone: cancels rootBaseCss's press translate. */
  &[data-pressed="true"] {
    background: var(--btn-danger-bg-pressed);
    border-color: var(--btn-danger-bg-pressed);
    box-shadow: var(--btn-pressed-shadow);
    transform: none;
  }
`,gt=dt(`primary`,`var(--btn-primary-bg)`,`resting`),_t=c`
  background: var(--btn-icon-bg);
  color: var(--btn-icon-fg);
  border-color: var(--btn-icon-border);
  box-shadow: none;

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    background: var(--btn-icon-bg-hover);
    color: var(--btn-icon-fg-hover);
    border-color: var(--btn-icon-border-hover);
    box-shadow: var(--btn-icon-shadow-hover);
  }

  &:focus-visible:not(:disabled):not([aria-disabled="true"]) {
    background: var(--btn-icon-bg-hover);
    color: var(--btn-icon-fg-hover);
    border-color: var(--btn-icon-border-hover);
  }

  &[data-pressed="true"] {
    background: var(--btn-icon-bg-pressed);
    color: var(--btn-icon-fg-pressed);
    box-shadow: none;
  }
`,vt={small:at,medium:ot,large:st},yt={primary:ft,secondary:pt,tertiary:mt,icon:_t,danger:ht,selected:gt},bt={small:ct,medium:lt,large:ut}})))()}function St(e,t){let n=Ct[e],r=wt[e],i=Tt[t];return c`
    display: inline-block;
    width: ${n}px;
    height: ${n}px;
    border-radius: var(--radius-full);
    border: ${r}px solid ${i};
    border-right-color: transparent;
    animation: ${Et} var(--duration-spin) var(--ease-linear) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: ${Dt} var(--duration-slow) steps(2, jump-none) infinite;
    }

    @media (forced-colors: active) {
      border-color: CanvasText;
      border-right-color: transparent;
    }
  `}var Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=t((()=>{s(),Ct={sm:16,md:20,lg:24},wt={sm:2,md:2,lg:3},Tt={accent:`var(--color-green-600)`,current:`currentColor`,inverse:`var(--color-clear-50)`},Et=a`
  to {
    transform: rotate(360deg);
  }
`,Dt=a`
  0%, 49.99% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.45;
  }
`})))()}var kt,K,At;function jt(){return(jt=t((()=>{s(),kt=e(n()),m(),U(),xe(),j(),i(),xt(),Ot(),K=I(),At=kt.forwardRef(function(e,t){let{variant:n=`primary`,size:i=`medium`,icon:a,iconPosition:s=`start`,isLoading:c=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-describedby":_,"aria-labelledby":v,"aria-label":y,formAction:b,onClick:x,onPointerDown:S,onPointerUp:C,onPointerCancel:ee,onKeyDown:w,onKeyUp:T,onFocus:te,onBlur:E,className:D,domProps:O,name:ne,"data-testid":k}=e,{t:re}=r(`shared-module`),ie=l??re(`button.loading`),A=u||c,j=kt.useId(),M=kt.useId(),ae=Ge(_,c?j:void 0),oe=y,se=oe?void 0:v??M,ce=be(t),{buttonProps:le,isPressed:de}=Re({isDisabled:A,...qe({onPress:f,onClick:x,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-label":oe,"aria-describedby":ae,"aria-labelledby":se})},ce),fe=o(Ze({size:i,variant:n}),D),pe=N(le,O??{},{onPointerDown:S,onPointerUp:C,onPointerCancel:ee,onKeyDown:w,onKeyUp:T,onFocus:te,onBlur:E});return(0,K.jsxs)(`button`,{...pe,ref:ce,className:fe,"data-pressed":de?`true`:`false`,"data-disabled-reason":c?`loading`:A?`disabled`:void 0,"data-testid":k,"aria-busy":c?`true`:void 0,formAction:b,disabled:A,type:e.type??`button`,name:ne,children:[(0,K.jsxs)(`span`,{className:o(tt,c?nt:void 0),children:[a&&s===`start`?(0,K.jsx)(`span`,{className:rt,children:a}):null,(0,K.jsx)(`span`,{id:se===M?M:void 0,children:d}),a&&s===`end`?(0,K.jsx)(`span`,{className:rt,children:a}):null]}),c?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:it,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:St(`sm`,`current`)})}),(0,K.jsx)(ue,{id:j,children:ie})]}):null]})})})))()}function Mt({direction:e,className:t}){return(0,Nt.jsx)(`svg`,{"aria-hidden":`true`,className:o(Pt,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,Nt.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var Nt,Pt;function Ft(){return(Ft=t((()=>{s(),Nt=I(),Pt=c`
  width: 1em;
  height: 1em;
`})))()}async function It(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=Bt,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Vt);if(t.remove(),!n)throw Error(Ht)}var q,J,Lt,Rt,zt,Bt,Vt,Ht,Ut,Y,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=t((()=>{s(),q=e(n()),m(),U(),We(),j(),i(),J=I(),Lt=`⧉`,Rt=`✓`,zt=`✕`,Bt=`fixed`,Vt=`copy`,Ht=`Copy command was unsuccessful`,Ut=2e3,Y={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},Wt=a`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,Gt=c`
  position: relative;
  display: inline-flex;
`,Kt=c`
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
`,qt=c`
  display: inline-flex;
  animation: ${Wt} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Jt=c`
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
`,Yt=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,className:s,"data-testid":c})=>{let{t:l}=r(`shared-module`),u=q.useRef(null),[d,f]=q.useState(Y.IDLE),[p,m]=q.useState(!1),h=q.useRef(null);q.useEffect(()=>()=>{h.current&&clearTimeout(h.current)},[]);let{buttonProps:g,isPressed:_}=Re({"aria-label":t,onPress:async()=>{if(i)return;let t=Y.COPIED;try{await It(e)}catch{t=Y.ERROR}f(t),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>f(Y.IDLE),Ut)}},u),{hoverProps:v,isHovered:y}=He({}),b=i?a??t:d===Y.COPIED?l(`copy-button.copied`):d===Y.ERROR?l(`copy-button.failed`):``,x=d===Y.COPIED?Rt:d===Y.ERROR?zt:Lt;return(0,J.jsxs)(`span`,{className:Gt,children:[(0,J.jsx)(`button`,{...N(g,v),ref:u,className:o(Kt,s),type:`button`,"aria-disabled":i||void 0,"data-pressed":_,"data-testid":c,onFocus:()=>m(!0),onBlur:()=>m(!1),children:n??(0,J.jsx)(`span`,{"aria-hidden":`true`,className:qt,"data-status":d,children:x},d)}),(0,J.jsx)(`span`,{className:Jt,"data-show":y||p||d!==Y.IDLE,"aria-hidden":`true`,children:b||t}),(0,J.jsx)(ue,{children:(0,J.jsx)(`span`,{"aria-live":`polite`,children:b})})]})}})))()}var Zt,Qt,$t,en,tn,nn,rn,an;function on(){return(on=t((()=>{s(),n(),Zt=I(),Qt=`30rem`,$t=c`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${Qt}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,en=c`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,tn=c`
  display: contents;

  @media (max-width: ${Qt}) {
    display: grid;
    gap: var(--space-1);
  }
`,nn=c`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,rn=c`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,an=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,Zt.jsx)(`dl`,{className:o(t===`inline`?$t:en,n),"data-testid":r,children:e.map((e,n)=>(0,Zt.jsxs)(`div`,{className:t===`inline`?tn:void 0,children:[(0,Zt.jsx)(`dt`,{className:nn,children:e.label}),(0,Zt.jsx)(`dd`,{className:rn,children:e.value})]},n))})})))()}var sn,X,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn;function bn(){return(bn=t((()=>{s(),sn=e(n()),U(),Ft(),X=I(),cn=`right`,ln=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,un=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,dn=c`
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
`,fn=c`
  padding: var(--space-2) 0;
`,pn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,mn=c`
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
`,hn=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,gn=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,_n=c`
  padding: 0 var(--space-4) var(--space-4);
`,vn=c`
  padding: 0 0 var(--space-3);
`,yn=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=sn.useState(n),m=r!==void 0,h=m?r:f,g=sn.useRef(null),_=sn.useId(),v=sn.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Re(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(ln,d&&un,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(dn,d&&fn),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:pn,children:[(0,X.jsx)(`span`,{className:mn,"data-expanded":h,children:(0,X.jsx)(Mt,{direction:cn})}),(0,X.jsx)(`span`,{className:hn,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:gn,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(_n,d&&vn),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function xn(e){return e instanceof Error&&e.name===`AppApiError`}function Sn(e){return e instanceof Error&&e.name===Ln&&Array.isArray(e.issues)}function Cn(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function wn(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function Tn(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function En(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function Dn(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function On(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function kn(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function An(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:kn(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function jn(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function Mn(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Nn(e){return Z(e)&&e.name===zn&&Array.isArray(e.errors)}function Pn(e,t){let n=Cn(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:Tn(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:An(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function Fn(e,t){let n=Cn(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:wn(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:Tn(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function In(e,t){if(xn(e))return Fn(e,t);if(Mn(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=wn(n);return{category:r,severity:Tn(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(Dn(e))return On(e,t);if(En(e))return Pn(e,t);if(Z(e)&&e.error===`too_many_requests`)return Pn({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return Pn({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Nn(e)){let n=e.errors?.[0],r=n?In(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(Sn(e)){let n=e.issues.map(e=>({message:jn(e,t),path:kn(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===Rn?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(Bn)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var Ln,Rn,zn,Bn;function Vn(){return(Vn=t((()=>{Ln=`ZodError`,Rn=`AbortError`,zn=`AggregateError`,Bn=`timeout`})))()}function Hn(e){return typeof e==`object`&&!!e}function Un(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Wn(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Un(e,t);if(r)return{title:n,message:r};let i=Hn(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function Gn(e){return c`
    max-height: ${e};
  `}function Kn(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function qn(e){return e.path?`${e.path}: ${e.message}`:e.message}function Jn(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${qn(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${er}`));return t.join(`
`)}var Q,$,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr;function Sr(){return(Sr=t((()=>{s(),ge(),Q=e(n()),i(),Vn(),jt(),Xt(),on(),bn(),$=I(),Yn=`comfortable`,Xn=`compact`,Zn={assertive:`alert`,polite:`status`,off:void 0},Qn={error:ve,warning:_e,info:ye},$n=20,er=`  `,tr=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,nr=c`
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
  animation: ${tr} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rr={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    padding: var(--space-4);
    font-size: var(--font-size-1);
  `},ir={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},ar={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},or=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,sr=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,cr=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,lr=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,ur=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,dr=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,fr=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,pr=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,mr=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,hr=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,gr=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,_r=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,vr=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,yr=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,br=c`
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
`,xr=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:l,detailsMaxHeight:u,className:d,retry:f,"data-testid":p})=>{let{t:m}=r(`errors`),h=(0,Q.useMemo)(()=>In(e,m),[e,m]),g=(0,Q.useMemo)(()=>Wn(h,m),[h,m]),_=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return h.status!==null&&t.push({label:m(`errorNotice.status`),value:String(h.status)}),h.retryAfterSeconds!==null&&t.push({label:m(`errorNotice.retryAfter`),value:m(`errorNotice.seconds`,{seconds:h.retryAfterSeconds})}),h.type&&t.push({label:m(`errorNotice.type`),value:h.type}),h.messageKey&&t.push({label:m(`errorNotice.messageKey`),value:h.messageKey}),h.code&&h.code!==h.type&&t.push({label:m(`errorNotice.code`),value:h.code}),e?.method&&t.push({label:m(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:m(`errorNotice.url`),value:e.url}),t},[h,m]),v=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return e?.detail&&t.push({label:m(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:m(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:m(`errorNotice.rawResponse`),text:Kn(e.raw)}),t},[h,m]),y=(0,Q.useMemo)(()=>Jn({title:g.title,message:g.message,view:h,requestIdLabel:m(`errorNotice.requestId`),details:_,blocks:v,pageLabel:m(`errorNotice.page`),timeLabel:m(`errorNotice.time`)}),[g,h,_,v,m]),b=n??h.severity,x=Qn[b],S=`h${a}`,C=g.message===g.title?null:g.message;return(0,$.jsxs)(`div`,{className:o(nr,rr[s],ir[b],l===void 0?void 0:Gn(l),d),role:Zn[i],"data-testid":p,children:[(0,$.jsxs)(`div`,{className:or,children:[(0,$.jsx)(`span`,{className:o(sr,ar[b]),"aria-hidden":`true`,children:(0,$.jsx)(x,{size:$n})}),(0,$.jsx)(S,{className:cr,children:g.title})]}),t?(0,$.jsx)(`div`,{className:lr,children:t}):null,C?(0,$.jsx)(`p`,{className:lr,children:C}):null,h.issues.length>0?(0,$.jsx)(`ul`,{className:ur,children:h.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:dr,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,h.requestId?(0,$.jsx)(`div`,{className:fr,children:(0,$.jsxs)(`dl`,{className:pr,children:[(0,$.jsx)(`dt`,{className:mr,children:m(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:hr,"data-mask-over-this-in-system-tests":`true`,children:h.requestId})]})}):null,f&&(0,$.jsx)(At,{className:c`
            justify-self: start;
          `,type:`button`,variant:`secondary`,size:`small`,onPress:f,children:m(`errorNotice.retry`)}),(0,$.jsxs)(`div`,{className:gr,children:[(0,$.jsx)(Yt,{value:y,label:m(`errorNotice.copyReport`),children:m(`errorNotice.copyReport`)}),h.blockId?(0,$.jsx)(`a`,{className:_r,href:`#${h.blockId}`,children:m(`go-to-error`)}):null]}),_.length>0||v.length>0?(0,$.jsx)(yn,{title:m(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(vr,u===void 0?void 0:Gn(u)),children:[_.length>0?(0,$.jsx)(an,{items:_}):null,v.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:yr,children:e.label}),(0,$.jsx)(`pre`,{className:br,children:e.text})]},e.label))]})}):null]})}})))()}export{We as A,it as C,Ke as D,qe as E,be as F,xe as I,U as M,De as N,Ge as O,Le as P,Ze as S,Ye as T,tt as _,yn as a,rt as b,on as c,Mt as d,Ft as f,St as g,Ot as h,Sr as i,Re as j,He as k,Yt as l,jt as m,Xn as n,bn as o,At as p,xr as r,an as s,Yn as t,Xt as u,nt as v,Je as w,xt as x,$e as y};