import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./useTranslation-BnXjhgRp.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-D2eg9Mn3.js";import{$ as l,At as u,D as d,Dt as f,E as p,L as m,N as h,Ot as g,Q as _,R as v,St as y,Y as b,Z as x,_ as S,_t as C,a as ee,b as w,c as T,ct as te,d as E,dt as D,et as O,f as k,jt as ne,l as re,lt as ie,m as A,n as j,nt as M,o as ae,ot as N,p as P,rt as oe,s as se,st as F,t as ce,u as le,ut as ue,x as de,xt as I,y as fe}from"./VisuallyHidden-CgoBJi3y.js";import{t as pe}from"./react-dom-B2lTHb2f.js";import{t as L}from"./jsx-runtime-MKhVqBIO.js";import{m as me,o as he,p as ge,s as _e}from"./atlas-icons-react-IMxafroS.js";function ve(e){let t=(0,ye.useRef)(null),n=(0,ye.useRef)(void 0),r=(0,ye.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,ye.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var ye;function be(){return(be=t((()=>{ye=n()})))()}function xe(e){if(N()&&M()){if(R==="default"){let t=f(e);Ce=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}R=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;z.set(e,e.style[t]),e.style[t]=`none`}}function Se(e){if(N()&&M()){if(R!==`disabled`)return;R=`restoring`,setTimeout(()=>{m(()=>{if(R===`restoring`){let t=f(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=Ce||``),Ce=``,R=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&z.has(e)){let t=z.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),z.delete(e)}}var R,Ce,z;function we(){return(we=t((()=>{u(),F(),v(),R=`default`,Ce=``,z=new WeakMap})))()}function Te(e){let t=(0,V.useContext)(se);if(t){let{register:n,ref:r,...i}=t;e=p(i,e),n()}return w(t,e.ref),e}function Ee(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:u,shouldCancelOnPointerExit:d,allowTextSelectionOnPress:m,ref:g,...v}=Te(e),[y,x]=(0,V.useState)(!1),S=(0,V.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:w,removeAllGlobalListeners:T}=ee(),E=(0,V.useCallback)((e,t)=>{let i=S.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new H(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,x(!0),a},[s,r,n]),D=(0,V.useCallback)((e,r,a=!0)=>{let o=S.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new H(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),x(!1),t&&a&&!s){let n=new H(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),O=P(D),k=(0,V.useCallback)((e,t)=>{let n=S.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new H(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),A=P(k),j=(0,V.useCallback)(e=>{let t=S.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&D(B(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,T(),m||Se(t.target);for(let e of t.disposables)e();t.disposables=[]}},[m,T,D]),M=P(j);(0,V.useEffect)(()=>{s&&S.current.isPressed&&M({currentTarget:S.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let ae=(0,V.useCallback)(e=>{d&&j(e)},[d,j]),N=(0,V.useCallback)(e=>{s||o?.(e)},[s,o]),se=(0,V.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);ie(n,t),o(te(n))}},[s,o]),F=(0,V.useMemo)(()=>{let e=S.current,t={onKeyDown(t){if(Oe(t.nativeEvent,t.currentTarget)&&C(t.currentTarget,I(t))){Ae(I(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=E(t,`keyboard`));let i=t.currentTarget;w(f(t.currentTarget),`keyup`,h(t=>{Oe(t,i)&&!t.repeat&&C(i,I(t))&&e.target&&A(B(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&oe()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||C(t.currentTarget,I(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!b.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||l(t.nativeEvent))){let e=E(t,`virtual`),r=A(t,`virtual`),i=O(t,`virtual`);N(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=A(B(t.currentTarget,t),r),a=O(B(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,N(t),M(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&Oe(t,e.target)){Ae(I(t),t.key)&&t.preventDefault();let n=I(t),r=C(e.target,n);O(B(e.target,t),`keyboard`,r),r&&se(t,e.target),T(),t.key!==`Enter`&&De(e.target)&&C(e.target,n)&&!t[Me]&&(t[Me]=!0,b(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!C(t.currentTarget,I(t)))return;if(_(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,m||xe(e.target),i=E(t,e.pointerType);let a=I(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),w(f(t.currentTarget),`pointerup`,n,!1),w(f(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(C(t.currentTarget,I(t))&&t.button===0){if(u){let n=ue(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{C(t.currentTarget,I(t))&&e.pointerType!==`virtual`&&t.button===0&&!e.isPressed&&A(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,E(B(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,O(B(e.target,t),e.pointerType,!1),ae(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(C(e.target,I(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?M(t):(ne(e.target),e.target.click()))},80);w(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else M(t);e.isOverTarget=!1}},r=e=>{M(e)};t.onDragStart=e=>{C(e.currentTarget,I(e))&&M(e)}}return t},[w,s,u,T,m,ae,E,N,se]);return(0,V.useEffect)(()=>{if(!g)return;let e=f(g.current);if(!e||!e.head||e.getElementById(Ne))return;let t=e.createElement(`style`);t.id=Ne;let n=re(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Pe}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[g]),(0,V.useEffect)(()=>{let e=S.current;return()=>{m||Se(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[m]),{isPressed:c||y,pressProps:p(v,F,{[Pe]:!0})}}function De(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function Oe(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof g(i).HTMLInputElement&&!je(i,n)||i instanceof g(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&De(i))&&n!==`Enter`)}function B(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function ke(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!De(e)}function Ae(e,t){return oe()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!je(e,t):ke(e)}function je(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Fe.has(e.type)}var V,H,Me,Ne,Pe,Fe;function Ie(){return(Ie=t((()=>{D(),we(),y(),le(),u(),F(),O(),d(),x(),T(),A(),ae(),de(),pe(),V=n(),H=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Me=Symbol(`linkClicked`),Ne=`react-aria-pressable-style`,Pe=`data-react-aria-pressable`,Fe=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Le(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:m,rel:h,type:g=`button`}=e,_;_=n===`button`?{type:g,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?m:void 0,type:n===`input`?g:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?h:void 0};let{pressProps:v,isPressed:y}=Ee({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:b}=S(e,t);u&&(b.tabIndex=r?-1:b.tabIndex);let x=p(b,v,E(e,{labelable:!0}));return{isPressed:y,buttonProps:p(_,x,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function U(){return(U=t((()=>{k(),d(),fe(),Ie()})))()}function Re(){He=!0,setTimeout(()=>{He=!1},500)}function ze(e){e.pointerType===`touch`&&Re()}function Be(){let e=f(null);if(e!==void 0)return Ue===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,ze),Ue++,()=>{Ue--,!(Ue>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,ze)}}function Ve(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,W.useState)(!1),s=(0,W.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,W.useEffect)(Be,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=ee(),{hoverProps:u,triggerHoverEnd:d}=(0,W.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!C(e.currentTarget,I(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(f(I(e)),`pointerover`,e=>{s.isHovered&&s.target&&!C(s.target,I(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,t!==`touch`&&s.isHovered&&i&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{He&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&C(e.currentTarget,I(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,W.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var W,He,Ue;function We(){return(We=t((()=>{y(),u(),ae(),W=n(),He=!1,Ue=0})))()}function Ge(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}var Ke;function qe(){return(qe=t((()=>{Ke=`aria`})))()}function Je(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Ye(e,t){return e?t:{}}function Xe(){return(Xe=t((()=>{})))()}function Ze(e){return St[e]}function Qe(e){return o(tt,e.variant===`link`?void 0:xt[e.size],Ze(e.variant),e.variant===`icon`?Ct[e.size]:void 0,e.isFullWidth&&e.variant!==`link`?lt:void 0)}var $e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct;function wt(){return(wt=t((()=>{s(),c`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,$e=`
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
`,et=c`
  ${$e}

  &[aria-disabled="true"] {
    text-decoration: none;
  }
`,tt=c`
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

  ${$e}

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,nt=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,rt=c`
  opacity: 0;
`,it=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,at=c`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,ot=c`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,st=c`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,ct=c`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,lt=c`
  width: 100%;
`,ut=c`
  padding-inline: var(--btn-icon-padding-x-sm);
`,dt=c`
  padding-inline: var(--btn-icon-padding-x-md);
`,ft=c`
  padding-inline: var(--btn-icon-padding-x-lg);
`,pt=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return c`
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
  `},mt=pt(`primary`,`var(--btn-primary-bg)`),ht=pt(`secondary`,`var(--btn-secondary-bg)`),gt=pt(`tertiary`,`var(--btn-tertiary-bg-hover)`),_t=c`
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
`,vt=pt(`primary`,`var(--btn-primary-bg)`,`resting`),yt=c`
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
`,bt=c`
  display: inline;
  height: auto;
  padding: 0;
  border: 0;
  color: var(--link-fg);
  font: inherit;
  line-height: inherit;
  text-align: start;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  white-space: normal;

  /* An inline-flex child would not carry the underline. */
  > span {
    display: inline;
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    color: var(--link-fg-hover);
  }

  &[data-pressed="true"] {
    transform: none;
  }
`,xt={small:ot,medium:st,large:ct},St={primary:mt,secondary:ht,tertiary:gt,icon:yt,danger:_t,selected:vt,link:bt},Ct={small:ut,medium:dt,large:ft}})))()}function Tt(e,t){let n=Et[e],r=Dt[e],i=Ot[t];return c`
    display: inline-block;
    width: ${n}px;
    height: ${n}px;
    border-radius: var(--radius-full);
    border: ${r}px solid ${i};
    border-right-color: transparent;
    animation: ${kt} var(--duration-spin) var(--ease-linear) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: ${At} var(--duration-slow) steps(2, jump-none) infinite;
    }

    @media (forced-colors: active) {
      border-color: CanvasText;
      border-right-color: transparent;
    }
  `}var Et,Dt,Ot,kt,At;function jt(){return(jt=t((()=>{s(),Et={sm:16,md:20,lg:24},Dt={sm:2,md:2,lg:3},Ot={accent:`var(--color-green-600)`,current:`currentColor`,inverse:`var(--color-clear-50)`},kt=a`
  to {
    transform: rotate(360deg);
  }
`,At=a`
  0%, 49.99% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.45;
  }
`})))()}var Mt,G,Nt;function Pt(){return(Pt=t((()=>{s(),Mt=e(n()),d(),U(),be(),j(),i(),qe(),wt(),jt(),G=L(),Nt=Mt.forwardRef(function(e,t){let{variant:n=`primary`,size:i=`medium`,icon:a,iconPosition:s=`start`,isLoading:c=!1,loadingLabel:l,isFullWidth:u=!1,disabled:d=!1,disabledReason:f,children:m,onPress:h,onPressStart:g,onPressEnd:_,onPressChange:v,onPressUp:y,"aria-describedby":b,"aria-labelledby":x,"aria-label":S,formAction:C,autoFocus:ee,onClick:w,onPointerDown:T,onPointerUp:te,onPointerCancel:E,onKeyDown:D,onKeyUp:O,onFocus:k,onBlur:ne,className:re,domProps:ie,name:A,"data-testid":j}=e,{t:M}=r(`shared-module`),ae=l??M(`button.loading`),N=d||c,P=!N&&!!f,oe=Mt.useId(),se=Mt.useId(),F=Mt.useId(),le=Ge(b,c?oe:void 0,P?se:void 0),ue=S,de=ue?void 0:x??F,I=ve(t),{buttonProps:fe,isPressed:pe}=Le({isDisabled:N,...Je({...P?{}:{onPress:h,onClick:w,onPressStart:g,onPressEnd:_,onPressChange:v,onPressUp:y},"aria-label":ue,"aria-describedby":le,"aria-labelledby":de,autoFocus:ee})},I),L=o(Qe({size:i,variant:n,isFullWidth:u}),re),me=p(fe,ie??{},{onPointerDown:T,onPointerUp:te,onPointerCancel:E,onKeyDown:D,onKeyUp:O,onFocus:k,onBlur:ne},P?{"aria-disabled":!0,onClick:e=>e.preventDefault()}:{});return(0,G.jsxs)(`button`,{...me,ref:I,className:L,"data-pressed":pe?`true`:`false`,"data-disabled-reason":c?`loading`:N||P?`disabled`:void 0,"data-testid":j,"aria-busy":c?`true`:void 0,formAction:C,disabled:N,type:e.type??`button`,name:A,children:[(0,G.jsxs)(`span`,{className:o(nt,c?rt:void 0),children:[a&&s===`start`?(0,G.jsx)(`span`,{className:it,children:a}):null,(0,G.jsx)(`span`,{id:de===F?F:void 0,children:m}),a&&s===`end`?(0,G.jsx)(`span`,{className:it,children:a}):null]}),c?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{className:at,"aria-hidden":`true`,children:(0,G.jsx)(`span`,{className:Tt(`sm`,`current`)})}),(0,G.jsx)(ce,{id:oe,children:ae})]}):null,P?(0,G.jsx)(ce,{id:se,children:f}):null]})})})))()}function Ft(e){return`@media (min-width: ${Lt[e]}px)`}function It(e){return`@media (max-width: ${Lt[e]-.02}px)`}var Lt;function Rt(){return(Rt=t((()=>{Lt={xs:480,sm:576,md:768,lg:992,xl:1200}})))()}function zt({direction:e,className:t}){return(0,Bt.jsx)(`svg`,{"aria-hidden":`true`,className:o(Vt,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,Bt.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var Bt,Vt;function Ht(){return(Ht=t((()=>{s(),Bt=L(),Vt=c`
  width: 1em;
  height: 1em;
`})))()}async function Ut(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=qt,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Jt);if(t.remove(),!n)throw Error(Yt)}var K,q,Wt,Gt,Kt,qt,Jt,Yt,Xt,J,Zt,Qt,$t,en,tn,nn,rn;function an(){return(an=t((()=>{s(),K=e(n()),d(),U(),We(),j(),i(),q=L(),Wt=`⧉`,Gt=`✓`,Kt=`✕`,qt=`fixed`,Jt=`copy`,Yt=`Copy command was unsuccessful`,Xt=2e3,J={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},Zt=a`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,Qt=c`
  position: relative;
  display: inline-flex;
`,$t=c`
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
`,en=c`
  padding: 0;
  border: 0;
  background: none;
  font-size: var(--font-size-0);
  line-height: 1.4;
  text-decoration: underline;
  text-underline-offset: 2px;

  &[data-pressed="true"] {
    background: none;
  }
`,tn=c`
  display: inline-flex;
  animation: ${Zt} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nn=c`
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
`,rn=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,appearance:s=`button`,className:c,"data-testid":l})=>{let{t:u}=r(`shared-module`),d=K.useRef(null),[f,m]=K.useState(J.IDLE),[h,g]=K.useState(!1),_=K.useRef(null);K.useEffect(()=>()=>{_.current&&clearTimeout(_.current)},[]);let{buttonProps:v,isPressed:y}=Le({"aria-label":t,onPress:async()=>{if(i)return;let t=J.COPIED;try{await Ut(e)}catch{t=J.ERROR}m(t),_.current&&clearTimeout(_.current),_.current=setTimeout(()=>m(J.IDLE),Xt)}},d),{hoverProps:b,isHovered:x}=Ve({}),S=i?a??t:f===J.COPIED?u(`copy-button.copied`):f===J.ERROR?u(`copy-button.failed`):``,C=f===J.COPIED?Gt:f===J.ERROR?Kt:Wt;return(0,q.jsxs)(`span`,{className:Qt,children:[(0,q.jsx)(`button`,{...p(v,b),ref:d,className:o($t,s===`link`&&en,c),type:`button`,"aria-disabled":i||void 0,"data-pressed":y,"data-testid":l,onFocus:()=>g(!0),onBlur:()=>g(!1),children:n??(0,q.jsx)(`span`,{"aria-hidden":`true`,className:tn,"data-status":f,children:C},f)}),(0,q.jsx)(`span`,{className:nn,"data-show":x||h||f!==J.IDLE,"aria-hidden":`true`,children:S||t}),(0,q.jsx)(ce,{children:(0,q.jsx)(`span`,{"aria-live":`polite`,children:S})})]})}})))()}var Y,on,sn,cn,ln,un,dn,fn,pn;function mn(){return(mn=t((()=>{s(),n(),Y=L(),on=`30rem`,sn=c`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${on}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,cn=c`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,ln=c`
  display: contents;

  @media (max-width: ${on}) {
    display: grid;
    gap: var(--space-1);
  }
`,un=c`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,dn=c`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,fn=c`
  display: block;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
`,pn=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,Y.jsx)(`dl`,{className:o(t===`inline`?sn:cn,n),"data-testid":r,children:e.map((e,n)=>(0,Y.jsxs)(`div`,{className:t===`inline`?ln:void 0,children:[(0,Y.jsx)(`dt`,{className:un,children:e.label}),(0,Y.jsxs)(`dd`,{className:dn,children:[e.value,e.secondary?(0,Y.jsx)(`span`,{className:fn,children:e.secondary}):null]})]},n))})})))()}var hn,X,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn;function On(){return(On=t((()=>{s(),hn=e(n()),U(),Ht(),X=L(),gn=`right`,_n=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,vn=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,yn=c`
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
`,bn=c`
  padding: var(--space-2) 0;
`,xn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,Sn=c`
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
`,Cn=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,wn=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,Tn=c`
  padding: 0 var(--space-4) var(--space-4);
`,En=c`
  padding: 0 0 var(--space-3);
`,Dn=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=hn.useState(n),m=r!==void 0,h=m?r:f,g=hn.useRef(null),_=hn.useId(),v=hn.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Le(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(_n,d&&vn,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(yn,d&&bn),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:xn,children:[(0,X.jsx)(`span`,{className:Sn,"data-expanded":h,children:(0,X.jsx)(zt,{direction:gn})}),(0,X.jsx)(`span`,{className:Cn,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:wn,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(Tn,d&&En),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function kn(e){return e instanceof Error&&e.name===`AppApiError`}function An(e){return e instanceof Error&&e.name===Gn&&Array.isArray(e.issues)}function jn(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`||e===`form_verification_failed`}function Mn(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function Nn(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function Pn(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function Fn(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function In(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function Ln(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function Rn(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:Ln(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function zn(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function Bn(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Vn(e){return Z(e)&&e.name===qn&&Array.isArray(e.errors)}function Hn(e,t){let n=jn(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:Nn(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:Rn(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function Un(e,t){let n=jn(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:Mn(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:Nn(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function Wn(e,t){if(kn(e))return Un(e,t);if(Bn(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=Mn(n);return{category:r,severity:Nn(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(Fn(e))return In(e,t);if(Pn(e))return Hn(e,t);if(Z(e)&&e.error===`too_many_requests`)return Hn({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return Hn({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Vn(e)){let n=e.errors?.[0],r=n?Wn(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(An(e)){let n=e.issues.map(e=>({message:zn(e,t),path:Ln(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===Kn?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(Jn)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var Gn,Kn,qn,Jn;function Yn(){return(Yn=t((()=>{Gn=`ZodError`,Kn=`AbortError`,qn=`AggregateError`,Jn=`timeout`})))()}function Xn(e){return typeof e==`object`&&!!e}function Zn(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Qn(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Zn(e,t);if(r)return{title:n,message:r};let i=Xn(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function $n(e){return e!==null&&e>=400&&e<500&&e!==408&&e!==429}function er(e){return c`
    max-height: ${e};
  `}function tr(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function nr(e){return e.path?`${e.path}: ${e.message}`:e.message}function rr(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${nr(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${fr}`));return t.join(`
`)}var Q,$,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr;function Jr(){return(Jr=t((()=>{s(),me(),Q=e(n()),i(),Yn(),Rt(),Pt(),an(),mn(),On(),$=L(),ir=(0,Q.createContext)(null),ar=`comfortable`,or=`compact`,sr={assertive:`alert`,polite:`status`,off:void 0},cr={error:ge,warning:he,info:_e},lr={comfortable:20,compact:16},ur={comfortable:`button`,compact:`link`},dr=`calc(${lr.compact}px + var(--space-3))`,fr=`  `,pr=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,mr=c`
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
  animation: ${pr} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hr={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    gap: var(--space-2);
    padding: var(--space-3-5) var(--space-4);
    border-left-width: 3px;
    font-size: var(--font-size-1);
  `},gr={error:c`
    border-color: var(--color-crimson-100);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    border-color: var(--color-red-100);
    border-left-color: var(--color-red-700);
  `,info:c`
    border-color: var(--color-blue-100);
    border-left-color: var(--color-blue-600);
  `},_r={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},vr={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},yr=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,br=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,xr=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,Sr=c`
  align-items: center;
`,Cr=c`
  padding-top: 0;
`,wr=c`
  font-size: var(--font-size-2);
  color: var(--color-gray-800);
`,Tr=c`
  display: flex;
  align-items: center;
  gap: var(--space-2) var(--space-4);

  ${It(`xs`)} {
    flex-direction: column;
    align-items: flex-start;
  }
`,Er=c`
  display: grid;
  flex: 1 1 auto;
  min-width: 0;
  gap: var(--space-1);
`,Dr=c`
  display: grid;
  margin-left: ${dr};

  &:empty {
    display: none;
  }
`,Or=c`
  gap: var(--space-1);
`,kr=c`
  gap: var(--space-2);
`,Ar=c`
  flex: none;

  ${It(`xs`)} {
    padding-left: ${dr};
  }
`,jr=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,Mr=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,Nr=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,Pr=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,Fr=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,Ir=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,Lr=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,Rr=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,zr=c`
  display: grid;
  justify-items: start;
  gap: var(--space-3);
`,Br=c`
  display: contents;
`,Vr={comfortable:zr,compact:Rr},Hr={comfortable:Rr,compact:Br},Ur=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,Wr=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,Gr=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,Kr=c`
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
`,qr=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:c,detailsMaxHeight:l,className:u,retry:d,"data-testid":f})=>{let{t:p}=r(`errors`),m=(0,Q.useMemo)(()=>Wn(e,p),[e,p]),h=(0,Q.useMemo)(()=>Qn(m,p),[m,p]),g=(0,Q.useMemo)(()=>{let e=m.technicalDetails,t=[];return m.status!==null&&t.push({label:p(`errorNotice.status`),value:String(m.status)}),m.retryAfterSeconds!==null&&t.push({label:p(`errorNotice.retryAfter`),value:p(`errorNotice.seconds`,{seconds:m.retryAfterSeconds})}),m.type&&t.push({label:p(`errorNotice.type`),value:m.type}),m.messageKey&&t.push({label:p(`errorNotice.messageKey`),value:m.messageKey}),m.code&&m.code!==m.type&&t.push({label:p(`errorNotice.code`),value:m.code}),e?.method&&t.push({label:p(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:p(`errorNotice.url`),value:e.url}),t},[m,p]),_=(0,Q.useMemo)(()=>{let e=m.technicalDetails,t=[];return e?.detail&&t.push({label:p(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:p(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:p(`errorNotice.rawResponse`),text:tr(e.raw)}),t},[m,p]),v=(0,Q.useMemo)(()=>rr({title:h.title,message:h.message,view:m,requestIdLabel:p(`errorNotice.requestId`),details:g,blocks:_,pageLabel:p(`errorNotice.page`),timeLabel:p(`errorNotice.time`)}),[h,m,g,_,p]),y=(0,Q.useContext)(ir),b=a===1?h.title:null;(0,Q.useLayoutEffect)(()=>{if(y!==null&&b!==null)return y(b),()=>y(null)},[y,b]);let x=d!==void 0&&!$n(m.status),S=n??m.severity,C=cr[S],ee=`h${a}`,w=h.message===h.title?null:h.message,T=s===or,te=T&&!x&&!m.blockId,E=(0,$.jsxs)(`div`,{className:o(yr,T&&Sr),children:[(0,$.jsx)(`span`,{className:o(br,vr[S],T&&Cr),"aria-hidden":`true`,children:(0,$.jsx)(C,{size:lr[s]})}),(0,$.jsx)(ee,{className:o(xr,T&&wr),children:h.title})]}),D=(0,$.jsxs)($.Fragment,{children:[t?(0,$.jsx)(`div`,{className:jr,children:t}):null,w?(0,$.jsx)(`p`,{className:jr,children:w}):null]}),O=(0,$.jsxs)(`div`,{className:o(Vr[s],te&&Ar),children:[x&&(0,$.jsx)(Nt,{type:`button`,variant:`secondary`,size:`small`,onPress:d,children:p(`errorNotice.retry`)}),(0,$.jsxs)(`div`,{className:Hr[s],children:[(0,$.jsx)(rn,{value:v,label:p(`errorNotice.copyReport`),appearance:ur[s],children:p(`errorNotice.copyReport`)}),m.blockId?(0,$.jsx)(`a`,{className:Ur,href:`#${m.blockId}`,children:p(`go-to-error`)}):null]})]}),k=(0,$.jsxs)($.Fragment,{children:[m.issues.length>0?(0,$.jsx)(`ul`,{className:Mr,children:m.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:Nr,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,m.requestId?(0,$.jsx)(`div`,{className:Pr,children:(0,$.jsxs)(`dl`,{className:Fr,children:[(0,$.jsx)(`dt`,{className:Ir,children:p(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:Lr,"data-mask-over-this-in-system-tests":`true`,children:m.requestId})]})}):null,!te&&O,g.length>0||_.length>0?(0,$.jsx)(Dn,{title:p(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(Wr,l===void 0?void 0:er(l)),children:[g.length>0?(0,$.jsx)(pn,{items:g}):null,_.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:Gr,children:e.label}),(0,$.jsx)(`pre`,{className:Kr,children:e.text})]},e.label))]})}):null]});return(0,$.jsx)(`div`,{className:o(mr,hr[s],_r[S],T&&gr[S],c===void 0?void 0:er(c),u),role:sr[i],"data-testid":f,children:T?(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{className:Tr,children:[(0,$.jsxs)(`div`,{className:Er,children:[E,(0,$.jsx)(`div`,{className:o(Dr,Or),children:D})]}),te&&O]}),(0,$.jsx)(`div`,{className:o(Dr,kr),children:k})]}):(0,$.jsxs)($.Fragment,{children:[E,D,k]})})}})))()}export{Ke as A,be as B,it as C,Ye as D,at as E,Le as F,U as I,Ee as L,Ge as M,Ve as N,Xe as O,We as P,Ie as R,et as S,Qe as T,Pt as _,Dn as a,nt as b,mn as c,zt as d,Ht as f,Nt as g,Rt as h,Jr as i,qe as j,Je as k,rn as l,It as m,or as n,On as o,Ft as p,qr as r,pn as s,ar as t,an as u,jt as v,wt as w,rt as x,Tt as y,ve as z};