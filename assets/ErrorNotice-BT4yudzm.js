import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./useTranslation-BnXjhgRp.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-D2eg9Mn3.js";import{$ as l,At as u,D as d,Dt as f,E as p,L as m,N as h,Ot as g,Q as _,R as v,St as y,Y as b,Z as x,_ as S,_t as C,a as ee,b as w,c as T,ct as te,d as E,dt as ne,et as D,f as re,jt as ie,l as ae,lt as oe,m as O,n as k,nt as A,o as j,ot as M,p as se,rt as ce,s as N,st as le,t as ue,u as de,ut as fe,x as pe,xt as P,y as me}from"./VisuallyHidden-CgoBJi3y.js";import{t as he}from"./react-dom-B2lTHb2f.js";import{t as F}from"./jsx-runtime-MKhVqBIO.js";import{m as ge,o as _e,p as ve,s as ye}from"./atlas-icons-react-IMxafroS.js";function be(e){let t=(0,xe.useRef)(null),n=(0,xe.useRef)(void 0),r=(0,xe.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,xe.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var xe;function Se(){return(Se=t((()=>{xe=n()})))()}function Ce(e){if(M()&&A()){if(I==="default"){let t=f(e);Te=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}I=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;Ee.set(e,e.style[t]),e.style[t]=`none`}}function we(e){if(M()&&A()){if(I!==`disabled`)return;I=`restoring`,setTimeout(()=>{m(()=>{if(I===`restoring`){let t=f(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=Te||``),Te=``,I=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Ee.has(e)){let t=Ee.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),Ee.delete(e)}}var I,Te,Ee;function De(){return(De=t((()=>{u(),le(),v(),I=`default`,Te=``,Ee=new WeakMap})))()}function Oe(e){let t=(0,R.useContext)(N);if(t){let{register:n,ref:r,...i}=t;e=p(i,e),n()}return w(t,e.ref),e}function ke(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:u,shouldCancelOnPointerExit:d,allowTextSelectionOnPress:m,ref:g,...v}=Oe(e),[y,x]=(0,R.useState)(!1),S=(0,R.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:w,removeAllGlobalListeners:T}=ee(),E=(0,R.useCallback)((e,t)=>{let i=S.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new z(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,x(!0),a},[s,r,n]),ne=(0,R.useCallback)((e,r,a=!0)=>{let o=S.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new z(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),x(!1),t&&a&&!s){let n=new z(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),D=se(ne),re=(0,R.useCallback)((e,t)=>{let n=S.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new z(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),O=se(re),k=(0,R.useCallback)(e=>{let t=S.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&ne(L(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,T(),m||we(t.target);for(let e of t.disposables)e();t.disposables=[]}},[m,T,ne]),A=se(k);(0,R.useEffect)(()=>{s&&S.current.isPressed&&A({currentTarget:S.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let j=(0,R.useCallback)(e=>{d&&k(e)},[d,k]),M=(0,R.useCallback)(e=>{s||o?.(e)},[s,o]),N=(0,R.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);oe(n,t),o(te(n))}},[s,o]),le=(0,R.useMemo)(()=>{let e=S.current,t={onKeyDown(t){if(je(t.nativeEvent,t.currentTarget)&&C(t.currentTarget,P(t))){Ne(P(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=E(t,`keyboard`));let i=t.currentTarget;w(f(t.currentTarget),`keyup`,h(t=>{je(t,i)&&!t.repeat&&C(i,P(t))&&e.target&&O(L(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&ce()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||C(t.currentTarget,P(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!b.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||l(t.nativeEvent))){let e=E(t,`virtual`),r=O(t,`virtual`),i=D(t,`virtual`);M(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=O(L(t.currentTarget,t),r),a=D(L(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,M(t),A(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&je(t,e.target)){Ne(P(t),t.key)&&t.preventDefault();let n=P(t),r=C(e.target,n);D(L(e.target,t),`keyboard`,r),r&&N(t,e.target),T(),t.key!==`Enter`&&Ae(e.target)&&C(e.target,n)&&!t[Fe]&&(t[Fe]=!0,b(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!C(t.currentTarget,P(t)))return;if(_(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,m||Ce(e.target),i=E(t,e.pointerType);let a=P(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),w(f(t.currentTarget),`pointerup`,n,!1),w(f(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(C(t.currentTarget,P(t))&&t.button===0){if(u){let n=fe(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{C(t.currentTarget,P(t))&&e.pointerType!==`virtual`&&t.button===0&&!e.isPressed&&O(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,E(L(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,D(L(e.target,t),e.pointerType,!1),j(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(C(e.target,P(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?A(t):(ie(e.target),e.target.click()))},80);w(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else A(t);e.isOverTarget=!1}},r=e=>{A(e)};t.onDragStart=e=>{C(e.currentTarget,P(e))&&A(e)}}return t},[w,s,u,T,m,j,E,M,N]);return(0,R.useEffect)(()=>{if(!g)return;let e=f(g.current);if(!e||!e.head||e.getElementById(Ie))return;let t=e.createElement(`style`);t.id=Ie;let n=ae(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Le}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[g]),(0,R.useEffect)(()=>{let e=S.current;return()=>{m||we(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[m]),{isPressed:c||y,pressProps:p(v,le,{[Le]:!0})}}function Ae(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function je(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof g(i).HTMLInputElement&&!Pe(i,n)||i instanceof g(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&Ae(i))&&n!==`Enter`)}function L(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function Me(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!Ae(e)}function Ne(e,t){return ce()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Pe(e,t):Me(e)}function Pe(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Re.has(e.type)}var R,z,Fe,Ie,Le,Re;function ze(){return(ze=t((()=>{ne(),De(),y(),de(),u(),le(),D(),d(),x(),T(),O(),j(),pe(),he(),R=n(),z=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Fe=Symbol(`linkClicked`),Ie=`react-aria-pressable-style`,Le=`data-react-aria-pressable`,Re=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Be(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:m,rel:h,type:g=`button`}=e,_;_=n===`button`?{type:g,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?m:void 0,type:n===`input`?g:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?h:void 0};let{pressProps:v,isPressed:y}=ke({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:b}=S(e,t);u&&(b.tabIndex=r?-1:b.tabIndex);let x=p(b,v,E(e,{labelable:!0}));return{isPressed:y,buttonProps:p(_,x,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function B(){return(B=t((()=>{re(),d(),me(),ze()})))()}function Ve(){Ge=!0,setTimeout(()=>{Ge=!1},500)}function He(e){e.pointerType===`touch`&&Ve()}function Ue(){let e=f(null);if(e!==void 0)return H===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,He),H++,()=>{H--,!(H>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,He)}}function We(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,V.useState)(!1),s=(0,V.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,V.useEffect)(Ue,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=ee(),{hoverProps:u,triggerHoverEnd:d}=(0,V.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!C(e.currentTarget,P(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(f(P(e)),`pointerover`,e=>{s.isHovered&&s.target&&!C(s.target,P(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,t!==`touch`&&s.isHovered&&i&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{Ge&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&C(e.currentTarget,P(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,V.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var V,Ge,H;function Ke(){return(Ke=t((()=>{y(),u(),j(),V=n(),Ge=!1,H=0})))()}function qe(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Je(){return(Je=t((()=>{})))()}function Ye(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Xe(e,t){return e?t:{}}function Ze(){return(Ze=t((()=>{})))()}function Qe(e){return xt[e]}function $e(e){return o(nt,e.variant===`link`?void 0:bt[e.size],Qe(e.variant),e.variant===`icon`?St[e.size]:void 0)}var et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,U,pt,mt,ht,gt,_t,vt,yt,bt,xt,St;function Ct(){return(Ct=t((()=>{s(),c`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,et=`
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
`,tt=c`
  ${et}

  &[aria-disabled="true"] {
    text-decoration: none;
  }
`,nt=c`
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

  ${et}

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,rt=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,it=c`
  opacity: 0;
`,at=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,ot=c`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,st=c`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,ct=c`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,lt=c`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,ut=c`
  padding-inline: var(--btn-icon-padding-x-sm);
`,dt=c`
  padding-inline: var(--btn-icon-padding-x-md);
`,ft=c`
  padding-inline: var(--btn-icon-padding-x-lg);
`,U=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return c`
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
  `},pt=U(`primary`,`var(--btn-primary-bg)`),mt=U(`secondary`,`var(--btn-secondary-bg)`),ht=U(`tertiary`,`var(--btn-tertiary-bg-hover)`),gt=c`
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
`,_t=U(`primary`,`var(--btn-primary-bg)`,`resting`),vt=c`
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
`,yt=c`
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
`,bt={small:st,medium:ct,large:lt},xt={primary:pt,secondary:mt,tertiary:ht,icon:vt,danger:gt,selected:_t,link:yt},St={small:ut,medium:dt,large:ft}})))()}function wt(e,t){let n=Tt[e],r=Et[e],i=Dt[t];return c`
    display: inline-block;
    width: ${n}px;
    height: ${n}px;
    border-radius: var(--radius-full);
    border: ${r}px solid ${i};
    border-right-color: transparent;
    animation: ${Ot} var(--duration-spin) var(--ease-linear) infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: ${kt} var(--duration-slow) steps(2, jump-none) infinite;
    }

    @media (forced-colors: active) {
      border-color: CanvasText;
      border-right-color: transparent;
    }
  `}var Tt,Et,Dt,Ot,kt;function At(){return(At=t((()=>{s(),Tt={sm:16,md:20,lg:24},Et={sm:2,md:2,lg:3},Dt={accent:`var(--color-green-600)`,current:`currentColor`,inverse:`var(--color-clear-50)`},Ot=a`
  to {
    transform: rotate(360deg);
  }
`,kt=a`
  0%, 49.99% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.45;
  }
`})))()}var jt,W,Mt;function Nt(){return(Nt=t((()=>{s(),jt=e(n()),d(),B(),Se(),k(),i(),Ct(),At(),W=F(),Mt=jt.forwardRef(function(e,t){let{variant:n=`primary`,size:i=`medium`,icon:a,iconPosition:s=`start`,isLoading:c=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-describedby":v,"aria-labelledby":y,"aria-label":b,formAction:x,onClick:S,onPointerDown:C,onPointerUp:ee,onPointerCancel:w,onKeyDown:T,onKeyUp:te,onFocus:E,onBlur:ne,className:D,domProps:re,name:ie,"data-testid":ae}=e,{t:oe}=r(`shared-module`),O=l??oe(`button.loading`),k=u||c,A=jt.useId(),j=jt.useId(),M=qe(v,c?A:void 0),se=b,ce=se?void 0:y??j,N=be(t),{buttonProps:le,isPressed:de}=Be({isDisabled:k,...Ye({onPress:f,onClick:S,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-label":se,"aria-describedby":M,"aria-labelledby":ce})},N),fe=o($e({size:i,variant:n}),D),pe=p(le,re??{},{onPointerDown:C,onPointerUp:ee,onPointerCancel:w,onKeyDown:T,onKeyUp:te,onFocus:E,onBlur:ne});return(0,W.jsxs)(`button`,{...pe,ref:N,className:fe,"data-pressed":de?`true`:`false`,"data-disabled-reason":c?`loading`:k?`disabled`:void 0,"data-testid":ae,"aria-busy":c?`true`:void 0,formAction:x,disabled:k,type:e.type??`button`,name:ie,children:[(0,W.jsxs)(`span`,{className:o(rt,c?it:void 0),children:[a&&s===`start`?(0,W.jsx)(`span`,{className:at,children:a}):null,(0,W.jsx)(`span`,{id:ce===j?j:void 0,children:d}),a&&s===`end`?(0,W.jsx)(`span`,{className:at,children:a}):null]}),c?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{className:ot,"aria-hidden":`true`,children:(0,W.jsx)(`span`,{className:wt(`sm`,`current`)})}),(0,W.jsx)(ue,{id:A,children:O})]}):null]})})})))()}function Pt({direction:e,className:t}){return(0,Ft.jsx)(`svg`,{"aria-hidden":`true`,className:o(It,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,Ft.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var Ft,It;function Lt(){return(Lt=t((()=>{s(),Ft=F(),It=c`
  width: 1em;
  height: 1em;
`})))()}async function Rt(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=Ht,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Ut);if(t.remove(),!n)throw Error(Wt)}var G,K,zt,Bt,Vt,Ht,Ut,Wt,Gt,q,Kt,qt,Jt,Yt,Xt,Zt;function Qt(){return(Qt=t((()=>{s(),G=e(n()),d(),B(),Ke(),k(),i(),K=F(),zt=`⧉`,Bt=`✓`,Vt=`✕`,Ht=`fixed`,Ut=`copy`,Wt=`Copy command was unsuccessful`,Gt=2e3,q={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},Kt=a`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,qt=c`
  position: relative;
  display: inline-flex;
`,Jt=c`
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
`,Yt=c`
  display: inline-flex;
  animation: ${Kt} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Xt=c`
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
`,Zt=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,className:s,"data-testid":c})=>{let{t:l}=r(`shared-module`),u=G.useRef(null),[d,f]=G.useState(q.IDLE),[m,h]=G.useState(!1),g=G.useRef(null);G.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);let{buttonProps:_,isPressed:v}=Be({"aria-label":t,onPress:async()=>{if(i)return;let t=q.COPIED;try{await Rt(e)}catch{t=q.ERROR}f(t),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>f(q.IDLE),Gt)}},u),{hoverProps:y,isHovered:b}=We({}),x=i?a??t:d===q.COPIED?l(`copy-button.copied`):d===q.ERROR?l(`copy-button.failed`):``,S=d===q.COPIED?Bt:d===q.ERROR?Vt:zt;return(0,K.jsxs)(`span`,{className:qt,children:[(0,K.jsx)(`button`,{...p(_,y),ref:u,className:o(Jt,s),type:`button`,"aria-disabled":i||void 0,"data-pressed":v,"data-testid":c,onFocus:()=>h(!0),onBlur:()=>h(!1),children:n??(0,K.jsx)(`span`,{"aria-hidden":`true`,className:Yt,"data-status":d,children:S},d)}),(0,K.jsx)(`span`,{className:Xt,"data-show":b||m||d!==q.IDLE,"aria-hidden":`true`,children:x||t}),(0,K.jsx)(ue,{children:(0,K.jsx)(`span`,{"aria-live":`polite`,children:x})})]})}})))()}var J,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=t((()=>{s(),n(),J=F(),$t=`30rem`,en=c`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${$t}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,tn=c`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,nn=c`
  display: contents;

  @media (max-width: ${$t}) {
    display: grid;
    gap: var(--space-1);
  }
`,rn=c`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,an=c`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,on=c`
  display: block;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
`,sn=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,J.jsx)(`dl`,{className:o(t===`inline`?en:tn,n),"data-testid":r,children:e.map((e,n)=>(0,J.jsxs)(`div`,{className:t===`inline`?nn:void 0,children:[(0,J.jsx)(`dt`,{className:rn,children:e.label}),(0,J.jsxs)(`dd`,{className:an,children:[e.value,e.secondary?(0,J.jsx)(`span`,{className:on,children:e.secondary}):null]})]},n))})})))()}var Y,X,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn;function xn(){return(xn=t((()=>{s(),Y=e(n()),B(),Lt(),X=F(),ln=`right`,un=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,dn=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,fn=c`
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
`,pn=c`
  padding: var(--space-2) 0;
`,mn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,hn=c`
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
`,gn=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,_n=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,vn=c`
  padding: 0 var(--space-4) var(--space-4);
`,yn=c`
  padding: 0 0 var(--space-3);
`,bn=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=Y.useState(n),m=r!==void 0,h=m?r:f,g=Y.useRef(null),_=Y.useId(),v=Y.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Be(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(un,d&&dn,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(fn,d&&pn),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:mn,children:[(0,X.jsx)(`span`,{className:hn,"data-expanded":h,children:(0,X.jsx)(Pt,{direction:ln})}),(0,X.jsx)(`span`,{className:gn,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:_n,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(vn,d&&yn),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function Sn(e){return e instanceof Error&&e.name===`AppApiError`}function Cn(e){return e instanceof Error&&e.name===Rn&&Array.isArray(e.issues)}function wn(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function Tn(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function En(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function Dn(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function On(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function kn(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function An(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function jn(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:An(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function Mn(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function Nn(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Pn(e){return Z(e)&&e.name===Bn&&Array.isArray(e.errors)}function Fn(e,t){let n=wn(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:En(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:jn(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function In(e,t){let n=wn(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:Tn(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:En(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function Ln(e,t){if(Sn(e))return In(e,t);if(Nn(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=Tn(n);return{category:r,severity:En(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(On(e))return kn(e,t);if(Dn(e))return Fn(e,t);if(Z(e)&&e.error===`too_many_requests`)return Fn({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return Fn({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Pn(e)){let n=e.errors?.[0],r=n?Ln(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(Cn(e)){let n=e.issues.map(e=>({message:Mn(e,t),path:An(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===zn?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(Vn)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var Rn,zn,Bn,Vn;function Hn(){return(Hn=t((()=>{Rn=`ZodError`,zn=`AbortError`,Bn=`AggregateError`,Vn=`timeout`})))()}function Un(e){return typeof e==`object`&&!!e}function Wn(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Gn(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Wn(e,t);if(r)return{title:n,message:r};let i=Un(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function Kn(e){return c`
    max-height: ${e};
  `}function qn(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function Jn(e){return e.path?`${e.path}: ${e.message}`:e.message}function Yn(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${Jn(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${tr}`));return t.join(`
`)}var Q,$,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr;function Cr(){return(Cr=t((()=>{s(),ge(),Q=e(n()),i(),Hn(),Nt(),Qt(),cn(),xn(),$=F(),Xn=`comfortable`,Zn=`compact`,Qn={assertive:`alert`,polite:`status`,off:void 0},$n={error:ve,warning:_e,info:ye},er=20,tr=`  `,nr=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,rr=c`
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
  animation: ${nr} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ir={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    padding: var(--space-4);
    font-size: var(--font-size-1);
  `},ar={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},or={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},sr=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,cr=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,lr=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,ur=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,dr=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,fr=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,pr=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,mr=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,hr=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,gr=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,_r=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,vr=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,yr=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,br=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,xr=c`
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
`,Sr=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:l,detailsMaxHeight:u,className:d,retry:f,"data-testid":p})=>{let{t:m}=r(`errors`),h=(0,Q.useMemo)(()=>Ln(e,m),[e,m]),g=(0,Q.useMemo)(()=>Gn(h,m),[h,m]),_=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return h.status!==null&&t.push({label:m(`errorNotice.status`),value:String(h.status)}),h.retryAfterSeconds!==null&&t.push({label:m(`errorNotice.retryAfter`),value:m(`errorNotice.seconds`,{seconds:h.retryAfterSeconds})}),h.type&&t.push({label:m(`errorNotice.type`),value:h.type}),h.messageKey&&t.push({label:m(`errorNotice.messageKey`),value:h.messageKey}),h.code&&h.code!==h.type&&t.push({label:m(`errorNotice.code`),value:h.code}),e?.method&&t.push({label:m(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:m(`errorNotice.url`),value:e.url}),t},[h,m]),v=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return e?.detail&&t.push({label:m(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:m(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:m(`errorNotice.rawResponse`),text:qn(e.raw)}),t},[h,m]),y=(0,Q.useMemo)(()=>Yn({title:g.title,message:g.message,view:h,requestIdLabel:m(`errorNotice.requestId`),details:_,blocks:v,pageLabel:m(`errorNotice.page`),timeLabel:m(`errorNotice.time`)}),[g,h,_,v,m]),b=n??h.severity,x=$n[b],S=`h${a}`,C=g.message===g.title?null:g.message;return(0,$.jsxs)(`div`,{className:o(rr,ir[s],ar[b],l===void 0?void 0:Kn(l),d),role:Qn[i],"data-testid":p,children:[(0,$.jsxs)(`div`,{className:sr,children:[(0,$.jsx)(`span`,{className:o(cr,or[b]),"aria-hidden":`true`,children:(0,$.jsx)(x,{size:er})}),(0,$.jsx)(S,{className:lr,children:g.title})]}),t?(0,$.jsx)(`div`,{className:ur,children:t}):null,C?(0,$.jsx)(`p`,{className:ur,children:C}):null,h.issues.length>0?(0,$.jsx)(`ul`,{className:dr,children:h.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:fr,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,h.requestId?(0,$.jsx)(`div`,{className:pr,children:(0,$.jsxs)(`dl`,{className:mr,children:[(0,$.jsx)(`dt`,{className:hr,children:m(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:gr,"data-mask-over-this-in-system-tests":`true`,children:h.requestId})]})}):null,f&&(0,$.jsx)(Mt,{className:c`
            justify-self: start;
          `,type:`button`,variant:`secondary`,size:`small`,onPress:f,children:m(`errorNotice.retry`)}),(0,$.jsxs)(`div`,{className:_r,children:[(0,$.jsx)(Zt,{value:y,label:m(`errorNotice.copyReport`),children:m(`errorNotice.copyReport`)}),h.blockId?(0,$.jsx)(`a`,{className:vr,href:`#${h.blockId}`,children:m(`go-to-error`)}):null]}),_.length>0||v.length>0?(0,$.jsx)(bn,{title:m(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(yr,u===void 0?void 0:Kn(u)),children:[_.length>0?(0,$.jsx)(sn,{items:_}):null,v.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:br,children:e.label}),(0,$.jsx)(`pre`,{className:xr,children:e.text})]},e.label))]})}):null]})}})))()}export{Ke as A,ot as C,Je as D,Ye as E,be as F,Se as I,B as M,ke as N,qe as O,ze as P,$e as S,Ze as T,rt as _,bn as a,at as b,cn as c,Pt as d,Lt as f,wt as g,At as h,Cr as i,Be as j,We as k,Zt as l,Nt as m,Zn as n,xn as o,Mt as p,Sr as r,sn as s,Xn as t,Qt as u,it as v,Xe as w,Ct as x,tt as y};