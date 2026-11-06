import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./useTranslation-BnXjhgRp.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-D2eg9Mn3.js";import{$ as l,At as u,D as d,Dt as f,E as p,L as m,N as h,Ot as g,Q as _,R as v,St as y,Y as b,Z as x,_ as S,_t as C,a as ee,b as w,c as T,ct as te,d as E,dt as D,et as O,f as ne,jt as re,l as ie,lt as ae,m as k,n as A,nt as j,o as M,ot as N,p as P,rt as oe,s as F,st as se,t as ce,u as le,ut as ue,x as de,xt as I,y as fe}from"./VisuallyHidden-CgoBJi3y.js";import{t as pe}from"./react-dom-B2lTHb2f.js";import{t as L}from"./jsx-runtime-MKhVqBIO.js";import{m as me,o as he,p as ge,s as _e}from"./atlas-icons-react-IMxafroS.js";function ve(e){let t=(0,ye.useRef)(null),n=(0,ye.useRef)(void 0),r=(0,ye.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,ye.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var ye;function be(){return(be=t((()=>{ye=n()})))()}function xe(e){if(N()&&j()){if(R==="default"){let t=f(e);Ce=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}R=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;we.set(e,e.style[t]),e.style[t]=`none`}}function Se(e){if(N()&&j()){if(R!==`disabled`)return;R=`restoring`,setTimeout(()=>{m(()=>{if(R===`restoring`){let t=f(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=Ce||``),Ce=``,R=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&we.has(e)){let t=we.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),we.delete(e)}}var R,Ce,we;function Te(){return(Te=t((()=>{u(),se(),v(),R=`default`,Ce=``,we=new WeakMap})))()}function Ee(e){let t=(0,B.useContext)(F);if(t){let{register:n,ref:r,...i}=t;e=p(i,e),n()}return w(t,e.ref),e}function De(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:u,shouldCancelOnPointerExit:d,allowTextSelectionOnPress:m,ref:g,...v}=Ee(e),[y,x]=(0,B.useState)(!1),S=(0,B.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:w,removeAllGlobalListeners:T}=ee(),E=(0,B.useCallback)((e,t)=>{let i=S.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new V(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,x(!0),a},[s,r,n]),D=(0,B.useCallback)((e,r,a=!0)=>{let o=S.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new V(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),x(!1),t&&a&&!s){let n=new V(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),O=P(D),ne=(0,B.useCallback)((e,t)=>{let n=S.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new V(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),k=P(ne),A=(0,B.useCallback)(e=>{let t=S.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&D(z(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,T(),m||Se(t.target);for(let e of t.disposables)e();t.disposables=[]}},[m,T,D]),j=P(A);(0,B.useEffect)(()=>{s&&S.current.isPressed&&j({currentTarget:S.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let M=(0,B.useCallback)(e=>{d&&A(e)},[d,A]),N=(0,B.useCallback)(e=>{s||o?.(e)},[s,o]),F=(0,B.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);ae(n,t),o(te(n))}},[s,o]),se=(0,B.useMemo)(()=>{let e=S.current,t={onKeyDown(t){if(ke(t.nativeEvent,t.currentTarget)&&C(t.currentTarget,I(t))){je(I(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=E(t,`keyboard`));let i=t.currentTarget;w(f(t.currentTarget),`keyup`,h(t=>{ke(t,i)&&!t.repeat&&C(i,I(t))&&e.target&&k(z(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&oe()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||C(t.currentTarget,I(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!b.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||l(t.nativeEvent))){let e=E(t,`virtual`),r=k(t,`virtual`),i=O(t,`virtual`);N(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=k(z(t.currentTarget,t),r),a=O(z(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,N(t),j(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&ke(t,e.target)){je(I(t),t.key)&&t.preventDefault();let n=I(t),r=C(e.target,n);O(z(e.target,t),`keyboard`,r),r&&F(t,e.target),T(),t.key!==`Enter`&&Oe(e.target)&&C(e.target,n)&&!t[Ne]&&(t[Ne]=!0,b(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!C(t.currentTarget,I(t)))return;if(_(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,m||xe(e.target),i=E(t,e.pointerType);let a=I(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),w(f(t.currentTarget),`pointerup`,n,!1),w(f(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(C(t.currentTarget,I(t))&&t.button===0){if(u){let n=ue(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{C(t.currentTarget,I(t))&&e.pointerType!==`virtual`&&t.button===0&&!e.isPressed&&k(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,E(z(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,O(z(e.target,t),e.pointerType,!1),M(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(C(e.target,I(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?j(t):(re(e.target),e.target.click()))},80);w(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else j(t);e.isOverTarget=!1}},r=e=>{j(e)};t.onDragStart=e=>{C(e.currentTarget,I(e))&&j(e)}}return t},[w,s,u,T,m,M,E,N,F]);return(0,B.useEffect)(()=>{if(!g)return;let e=f(g.current);if(!e||!e.head||e.getElementById(Pe))return;let t=e.createElement(`style`);t.id=Pe;let n=ie(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Fe}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[g]),(0,B.useEffect)(()=>{let e=S.current;return()=>{m||Se(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[m]),{isPressed:c||y,pressProps:p(v,se,{[Fe]:!0})}}function Oe(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function ke(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof g(i).HTMLInputElement&&!Me(i,n)||i instanceof g(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&Oe(i))&&n!==`Enter`)}function z(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function Ae(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!Oe(e)}function je(e,t){return oe()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Me(e,t):Ae(e)}function Me(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Ie.has(e.type)}var B,V,Ne,Pe,Fe,Ie;function Le(){return(Le=t((()=>{D(),Te(),y(),le(),u(),se(),O(),d(),x(),T(),k(),M(),de(),pe(),B=n(),V=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Ne=Symbol(`linkClicked`),Pe=`react-aria-pressable-style`,Fe=`data-react-aria-pressable`,Ie=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Re(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:m,rel:h,type:g=`button`}=e,_;_=n===`button`?{type:g,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?m:void 0,type:n===`input`?g:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?h:void 0};let{pressProps:v,isPressed:y}=De({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:b}=S(e,t);u&&(b.tabIndex=r?-1:b.tabIndex);let x=p(b,v,E(e,{labelable:!0}));return{isPressed:y,buttonProps:p(_,x,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function H(){return(H=t((()=>{ne(),d(),fe(),Le()})))()}function ze(){Ue=!0,setTimeout(()=>{Ue=!1},500)}function Be(e){e.pointerType===`touch`&&ze()}function Ve(){let e=f(null);if(e!==void 0)return W===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,Be),W++,()=>{W--,!(W>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,Be)}}function He(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,U.useState)(!1),s=(0,U.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,U.useEffect)(Ve,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=ee(),{hoverProps:u,triggerHoverEnd:d}=(0,U.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!C(e.currentTarget,I(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(f(I(e)),`pointerover`,e=>{s.isHovered&&s.target&&!C(s.target,I(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,t!==`touch`&&s.isHovered&&i&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{Ue&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&C(e.currentTarget,I(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,U.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var U,Ue,W;function We(){return(We=t((()=>{y(),u(),M(),U=n(),Ue=!1,W=0})))()}function Ge(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Ke(){return(Ke=t((()=>{})))()}function qe(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Je(e,t){return e?t:{}}function Ye(){return(Ye=t((()=>{})))()}function Xe(e){return vt[e]}function Ze(e){return o(et,_t[e.size],Xe(e.variant),e.variant===`icon`?yt[e.size]:void 0)}var Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,G,dt,ft,pt,mt,ht,gt,_t,vt,yt;function bt(){return(bt=t((()=>{s(),c`
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
`,G=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return c`
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
  `},dt=G(`primary`,`var(--btn-primary-bg)`),ft=G(`secondary`,`var(--btn-secondary-bg)`),pt=G(`tertiary`,`var(--btn-tertiary-bg-hover)`),mt=c`
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
`,ht=G(`primary`,`var(--btn-primary-bg)`,`resting`),gt=c`
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
`,_t={small:at,medium:ot,large:st},vt={primary:dt,secondary:ft,tertiary:pt,icon:gt,danger:mt,selected:ht},yt={small:ct,medium:lt,large:ut}})))()}function xt(e,t){let n=St[e],r=Ct[e],i=wt[t];return c`
    display: inline-block;
    width: ${n}px;
    height: ${n}px;
    border-radius: var(--radius-full);
    border: ${r}px solid ${i};
    border-right-color: transparent;
    animation: ${Tt} var(--duration-spin) var(--ease-linear) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: ${Et} var(--duration-slow) steps(2, jump-none) infinite;
    }

    @media (forced-colors: active) {
      border-color: CanvasText;
      border-right-color: transparent;
    }
  `}var St,Ct,wt,Tt,Et;function Dt(){return(Dt=t((()=>{s(),St={sm:16,md:20,lg:24},Ct={sm:2,md:2,lg:3},wt={accent:`var(--color-green-600)`,current:`currentColor`,inverse:`var(--color-clear-50)`},Tt=a`
  to {
    transform: rotate(360deg);
  }
`,Et=a`
  0%, 49.99% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.45;
  }
`})))()}var Ot,K,kt;function At(){return(At=t((()=>{s(),Ot=e(n()),d(),H(),be(),A(),i(),bt(),Dt(),K=L(),kt=Ot.forwardRef(function(e,t){let{variant:n=`primary`,size:i=`medium`,icon:a,iconPosition:s=`start`,isLoading:c=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-describedby":v,"aria-labelledby":y,"aria-label":b,formAction:x,onClick:S,onPointerDown:C,onPointerUp:ee,onPointerCancel:w,onKeyDown:T,onKeyUp:te,onFocus:E,onBlur:D,className:O,domProps:ne,name:re,"data-testid":ie}=e,{t:ae}=r(`shared-module`),k=l??ae(`button.loading`),A=u||c,j=Ot.useId(),M=Ot.useId(),N=Ge(v,c?j:void 0),P=b,oe=P?void 0:y??M,F=ve(t),{buttonProps:se,isPressed:le}=Re({isDisabled:A,...qe({onPress:f,onClick:S,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-label":P,"aria-describedby":N,"aria-labelledby":oe})},F),ue=o(Ze({size:i,variant:n}),O),de=p(se,ne??{},{onPointerDown:C,onPointerUp:ee,onPointerCancel:w,onKeyDown:T,onKeyUp:te,onFocus:E,onBlur:D});return(0,K.jsxs)(`button`,{...de,ref:F,className:ue,"data-pressed":le?`true`:`false`,"data-disabled-reason":c?`loading`:A?`disabled`:void 0,"data-testid":ie,"aria-busy":c?`true`:void 0,formAction:x,disabled:A,type:e.type??`button`,name:re,children:[(0,K.jsxs)(`span`,{className:o(tt,c?nt:void 0),children:[a&&s===`start`?(0,K.jsx)(`span`,{className:rt,children:a}):null,(0,K.jsx)(`span`,{id:oe===M?M:void 0,children:d}),a&&s===`end`?(0,K.jsx)(`span`,{className:rt,children:a}):null]}),c?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{className:it,"aria-hidden":`true`,children:(0,K.jsx)(`span`,{className:xt(`sm`,`current`)})}),(0,K.jsx)(ce,{id:j,children:k})]}):null]})})})))()}function jt({direction:e,className:t}){return(0,Mt.jsx)(`svg`,{"aria-hidden":`true`,className:o(Nt,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,Mt.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var Mt,Nt;function Pt(){return(Pt=t((()=>{s(),Mt=L(),Nt=c`
  width: 1em;
  height: 1em;
`})))()}async function Ft(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=zt,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Bt);if(t.remove(),!n)throw Error(Vt)}var q,J,It,Lt,Rt,zt,Bt,Vt,Ht,Y,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=t((()=>{s(),q=e(n()),d(),H(),We(),A(),i(),J=L(),It=`⧉`,Lt=`✓`,Rt=`✕`,zt=`fixed`,Bt=`copy`,Vt=`Copy command was unsuccessful`,Ht=2e3,Y={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},Ut=a`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,Wt=c`
  position: relative;
  display: inline-flex;
`,Gt=c`
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
`,Kt=c`
  display: inline-flex;
  animation: ${Ut} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qt=c`
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
`,Jt=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,className:s,"data-testid":c})=>{let{t:l}=r(`shared-module`),u=q.useRef(null),[d,f]=q.useState(Y.IDLE),[m,h]=q.useState(!1),g=q.useRef(null);q.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);let{buttonProps:_,isPressed:v}=Re({"aria-label":t,onPress:async()=>{if(i)return;let t=Y.COPIED;try{await Ft(e)}catch{t=Y.ERROR}f(t),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>f(Y.IDLE),Ht)}},u),{hoverProps:y,isHovered:b}=He({}),x=i?a??t:d===Y.COPIED?l(`copy-button.copied`):d===Y.ERROR?l(`copy-button.failed`):``,S=d===Y.COPIED?Lt:d===Y.ERROR?Rt:It;return(0,J.jsxs)(`span`,{className:Wt,children:[(0,J.jsx)(`button`,{...p(_,y),ref:u,className:o(Gt,s),type:`button`,"aria-disabled":i||void 0,"data-pressed":v,"data-testid":c,onFocus:()=>h(!0),onBlur:()=>h(!1),children:n??(0,J.jsx)(`span`,{"aria-hidden":`true`,className:Kt,"data-status":d,children:S},d)}),(0,J.jsx)(`span`,{className:qt,"data-show":b||m||d!==Y.IDLE,"aria-hidden":`true`,children:x||t}),(0,J.jsx)(ce,{children:(0,J.jsx)(`span`,{"aria-live":`polite`,children:x})})]})}})))()}var Xt,Zt,Qt,$t,en,tn,nn,rn;function an(){return(an=t((()=>{s(),n(),Xt=L(),Zt=`30rem`,Qt=c`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${Zt}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,$t=c`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,en=c`
  display: contents;

  @media (max-width: ${Zt}) {
    display: grid;
    gap: var(--space-1);
  }
`,tn=c`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,nn=c`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,rn=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,Xt.jsx)(`dl`,{className:o(t===`inline`?Qt:$t,n),"data-testid":r,children:e.map((e,n)=>(0,Xt.jsxs)(`div`,{className:t===`inline`?en:void 0,children:[(0,Xt.jsx)(`dt`,{className:tn,children:e.label}),(0,Xt.jsx)(`dd`,{className:nn,children:e.value})]},n))})})))()}var on,X,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn;function yn(){return(yn=t((()=>{s(),on=e(n()),H(),Pt(),X=L(),sn=`right`,cn=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,ln=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,un=c`
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
`,dn=c`
  padding: var(--space-2) 0;
`,fn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,pn=c`
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
`,mn=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,hn=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,gn=c`
  padding: 0 var(--space-4) var(--space-4);
`,_n=c`
  padding: 0 0 var(--space-3);
`,vn=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=on.useState(n),m=r!==void 0,h=m?r:f,g=on.useRef(null),_=on.useId(),v=on.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Re(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(cn,d&&ln,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(un,d&&dn),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:fn,children:[(0,X.jsx)(`span`,{className:pn,"data-expanded":h,children:(0,X.jsx)(jt,{direction:sn})}),(0,X.jsx)(`span`,{className:mn,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:hn,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(gn,d&&_n),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function bn(e){return e instanceof Error&&e.name===`AppApiError`}function xn(e){return e instanceof Error&&e.name===In&&Array.isArray(e.issues)}function Sn(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function Cn(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function wn(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function Tn(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function En(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function Dn(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function On(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function kn(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:On(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function An(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function jn(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Mn(e){return Z(e)&&e.name===Rn&&Array.isArray(e.errors)}function Nn(e,t){let n=Sn(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:wn(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:kn(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function Pn(e,t){let n=Sn(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:Cn(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:wn(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function Fn(e,t){if(bn(e))return Pn(e,t);if(jn(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=Cn(n);return{category:r,severity:wn(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(En(e))return Dn(e,t);if(Tn(e))return Nn(e,t);if(Z(e)&&e.error===`too_many_requests`)return Nn({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return Nn({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Mn(e)){let n=e.errors?.[0],r=n?Fn(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(xn(e)){let n=e.issues.map(e=>({message:An(e,t),path:On(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===Ln?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(zn)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var In,Ln,Rn,zn;function Bn(){return(Bn=t((()=>{In=`ZodError`,Ln=`AbortError`,Rn=`AggregateError`,zn=`timeout`})))()}function Vn(e){return typeof e==`object`&&!!e}function Hn(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Un(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Hn(e,t);if(r)return{title:n,message:r};let i=Vn(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function Wn(e){return c`
    max-height: ${e};
  `}function Gn(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function Kn(e){return e.path?`${e.path}: ${e.message}`:e.message}function qn(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${Kn(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${$n}`));return t.join(`
`)}var Q,$,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br;function xr(){return(xr=t((()=>{s(),me(),Q=e(n()),i(),Bn(),At(),Yt(),an(),yn(),$=L(),Jn=`comfortable`,Yn=`compact`,Xn={assertive:`alert`,polite:`status`,off:void 0},Zn={error:ge,warning:he,info:_e},Qn=20,$n=`  `,er=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,tr=c`
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
  animation: ${er} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nr={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    padding: var(--space-4);
    font-size: var(--font-size-1);
  `},rr={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},ir={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},ar=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,or=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,sr=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,cr=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,lr=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,ur=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,dr=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,fr=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,pr=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,mr=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,hr=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,gr=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,_r=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,vr=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,yr=c`
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
`,br=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:l,detailsMaxHeight:u,className:d,retry:f,"data-testid":p})=>{let{t:m}=r(`errors`),h=(0,Q.useMemo)(()=>Fn(e,m),[e,m]),g=(0,Q.useMemo)(()=>Un(h,m),[h,m]),_=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return h.status!==null&&t.push({label:m(`errorNotice.status`),value:String(h.status)}),h.retryAfterSeconds!==null&&t.push({label:m(`errorNotice.retryAfter`),value:m(`errorNotice.seconds`,{seconds:h.retryAfterSeconds})}),h.type&&t.push({label:m(`errorNotice.type`),value:h.type}),h.messageKey&&t.push({label:m(`errorNotice.messageKey`),value:h.messageKey}),h.code&&h.code!==h.type&&t.push({label:m(`errorNotice.code`),value:h.code}),e?.method&&t.push({label:m(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:m(`errorNotice.url`),value:e.url}),t},[h,m]),v=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return e?.detail&&t.push({label:m(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:m(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:m(`errorNotice.rawResponse`),text:Gn(e.raw)}),t},[h,m]),y=(0,Q.useMemo)(()=>qn({title:g.title,message:g.message,view:h,requestIdLabel:m(`errorNotice.requestId`),details:_,blocks:v,pageLabel:m(`errorNotice.page`),timeLabel:m(`errorNotice.time`)}),[g,h,_,v,m]),b=n??h.severity,x=Zn[b],S=`h${a}`,C=g.message===g.title?null:g.message;return(0,$.jsxs)(`div`,{className:o(tr,nr[s],rr[b],l===void 0?void 0:Wn(l),d),role:Xn[i],"data-testid":p,children:[(0,$.jsxs)(`div`,{className:ar,children:[(0,$.jsx)(`span`,{className:o(or,ir[b]),"aria-hidden":`true`,children:(0,$.jsx)(x,{size:Qn})}),(0,$.jsx)(S,{className:sr,children:g.title})]}),t?(0,$.jsx)(`div`,{className:cr,children:t}):null,C?(0,$.jsx)(`p`,{className:cr,children:C}):null,h.issues.length>0?(0,$.jsx)(`ul`,{className:lr,children:h.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:ur,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,h.requestId?(0,$.jsx)(`div`,{className:dr,children:(0,$.jsxs)(`dl`,{className:fr,children:[(0,$.jsx)(`dt`,{className:pr,children:m(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:mr,"data-mask-over-this-in-system-tests":`true`,children:h.requestId})]})}):null,f&&(0,$.jsx)(kt,{className:c`
            justify-self: start;
          `,type:`button`,variant:`secondary`,size:`small`,onPress:f,children:m(`errorNotice.retry`)}),(0,$.jsxs)(`div`,{className:hr,children:[(0,$.jsx)(Jt,{value:y,label:m(`errorNotice.copyReport`),children:m(`errorNotice.copyReport`)}),h.blockId?(0,$.jsx)(`a`,{className:gr,href:`#${h.blockId}`,children:m(`go-to-error`)}):null]}),_.length>0||v.length>0?(0,$.jsx)(vn,{title:m(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(_r,u===void 0?void 0:Wn(u)),children:[_.length>0?(0,$.jsx)(rn,{items:_}):null,v.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:vr,children:e.label}),(0,$.jsx)(`pre`,{className:yr,children:e.text})]},e.label))]})}):null]})}})))()}export{We as A,it as C,Ke as D,qe as E,ve as F,be as I,H as M,De as N,Ge as O,Le as P,Ze as S,Ye as T,tt as _,vn as a,rt as b,an as c,jt as d,Pt as f,xt as g,Dt as h,xr as i,Re as j,He as k,Jt as l,At as m,Yn as n,yn as o,kt as p,br as r,rn as s,Jn as t,Yt as u,nt as v,Je as w,bt as x,$e as y};