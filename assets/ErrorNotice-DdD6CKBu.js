import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r,t as i}from"./useTranslation-BnXjhgRp.js";import{a,n as o,r as s,t as c}from"./emotion-css.esm-D2eg9Mn3.js";import{$ as l,At as u,D as d,Dt as f,E as p,L as m,N as h,Ot as g,Q as _,R as v,St as y,Y as b,Z as x,_ as S,_t as C,a as ee,b as w,c as T,ct as te,d as E,dt as D,et as O,f as ne,jt as re,l as ie,lt as ae,m as k,n as A,nt as j,o as M,ot as N,p as oe,rt as se,s as P,st as ce,t as le,u as ue,ut as de,x as fe,xt as F,y as pe}from"./VisuallyHidden-CgoBJi3y.js";import{t as me}from"./react-dom-B2lTHb2f.js";import{t as I}from"./jsx-runtime-MKhVqBIO.js";import{m as he,o as ge,p as _e,s as ve}from"./atlas-icons-react-IMxafroS.js";function ye(e){let t=(0,be.useRef)(null),n=(0,be.useRef)(void 0),r=(0,be.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,be.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var be;function xe(){return(xe=t((()=>{be=n()})))()}function Se(e){if(N()&&j()){if(L==="default"){let t=f(e);we=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}L=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;Te.set(e,e.style[t]),e.style[t]=`none`}}function Ce(e){if(N()&&j()){if(L!==`disabled`)return;L=`restoring`,setTimeout(()=>{m(()=>{if(L===`restoring`){let t=f(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=we||``),we=``,L=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&Te.has(e)){let t=Te.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),Te.delete(e)}}var L,we,Te;function Ee(){return(Ee=t((()=>{u(),ce(),v(),L=`default`,we=``,Te=new WeakMap})))()}function De(e){let t=(0,z.useContext)(P);if(t){let{register:n,ref:r,...i}=t;e=p(i,e),n()}return w(t,e.ref),e}function Oe(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:u,shouldCancelOnPointerExit:d,allowTextSelectionOnPress:m,ref:g,...v}=De(e),[y,x]=(0,z.useState)(!1),S=(0,z.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:w,removeAllGlobalListeners:T}=ee(),E=(0,z.useCallback)((e,t)=>{let i=S.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new Pe(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,x(!0),a},[s,r,n]),D=(0,z.useCallback)((e,r,a=!0)=>{let o=S.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new Pe(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),x(!1),t&&a&&!s){let n=new Pe(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),O=oe(D),ne=(0,z.useCallback)((e,t)=>{let n=S.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new Pe(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),k=oe(ne),A=(0,z.useCallback)(e=>{let t=S.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&D(R(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,T(),m||Ce(t.target);for(let e of t.disposables)e();t.disposables=[]}},[m,T,D]),j=oe(A);(0,z.useEffect)(()=>{s&&S.current.isPressed&&j({currentTarget:S.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let M=(0,z.useCallback)(e=>{d&&A(e)},[d,A]),N=(0,z.useCallback)(e=>{s||o?.(e)},[s,o]),P=(0,z.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);ae(n,t),o(te(n))}},[s,o]),ce=(0,z.useMemo)(()=>{let e=S.current,t={onKeyDown(t){if(Ae(t.nativeEvent,t.currentTarget)&&C(t.currentTarget,F(t))){Me(F(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=E(t,`keyboard`));let i=t.currentTarget;w(f(t.currentTarget),`keyup`,h(t=>{Ae(t,i)&&!t.repeat&&C(i,F(t))&&e.target&&k(R(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&se()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if((!t||C(t.currentTarget,F(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!b.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||l(t.nativeEvent))){let e=E(t,`virtual`),r=k(t,`virtual`),i=O(t,`virtual`);N(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=k(R(t.currentTarget,t),r),a=O(R(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,N(t),j(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&Ae(t,e.target)){Me(F(t),t.key)&&t.preventDefault();let n=F(t),r=C(e.target,n);O(R(e.target,t),`keyboard`,r),r&&P(t,e.target),T(),t.key!==`Enter`&&ke(e.target)&&C(e.target,n)&&!t[Fe]&&(t[Fe]=!0,b(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!C(t.currentTarget,F(t)))return;if(_(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,m||Se(e.target),i=E(t,e.pointerType);let a=F(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),w(f(t.currentTarget),`pointerup`,n,!1),w(f(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(C(t.currentTarget,F(t))&&t.button===0){if(u){let n=de(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{C(t.currentTarget,F(t))&&e.pointerType!==`virtual`&&t.button===0&&!e.isPressed&&k(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,E(R(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,O(R(e.target,t),e.pointerType,!1),M(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(C(e.target,F(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?j(t):(re(e.target),e.target.click()))},80);w(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else j(t);e.isOverTarget=!1}},r=e=>{j(e)};t.onDragStart=e=>{C(e.currentTarget,F(e))&&j(e)}}return t},[w,s,u,T,m,M,E,N,P]);return(0,z.useEffect)(()=>{if(!g)return;let e=f(g.current);if(!e||!e.head||e.getElementById(Ie))return;let t=e.createElement(`style`);t.id=Ie;let n=ie(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Le}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[g]),(0,z.useEffect)(()=>{let e=S.current;return()=>{m||Ce(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[m]),{isPressed:c||y,pressProps:p(v,ce,{[Le]:!0})}}function ke(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function Ae(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof g(i).HTMLInputElement&&!Ne(i,n)||i instanceof g(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&ke(i))&&n!==`Enter`)}function R(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function je(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!ke(e)}function Me(e,t){return se()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Ne(e,t):je(e)}function Ne(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Re.has(e.type)}var z,Pe,Fe,Ie,Le,Re;function ze(){return(ze=t((()=>{D(),Ee(),y(),ue(),u(),ce(),O(),d(),x(),T(),k(),M(),fe(),me(),z=n(),Pe=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Fe=Symbol(`linkClicked`),Ie=`react-aria-pressable-style`,Le=`data-react-aria-pressable`,Re=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Be(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:m,rel:h,type:g=`button`}=e,_;_=n===`button`?{type:g,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?m:void 0,type:n===`input`?g:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?h:void 0};let{pressProps:v,isPressed:y}=Oe({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:b}=S(e,t);u&&(b.tabIndex=r?-1:b.tabIndex);let x=p(b,v,E(e,{labelable:!0}));return{isPressed:y,buttonProps:p(_,x,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function B(){return(B=t((()=>{ne(),d(),pe(),ze()})))()}function Ve(){Ge=!0,setTimeout(()=>{Ge=!1},500)}function He(e){e.pointerType===`touch`&&Ve()}function Ue(){let e=f(null);if(e!==void 0)return H===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,He),H++,()=>{H--,!(H>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,He)}}function We(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,V.useState)(!1),s=(0,V.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,V.useEffect)(Ue,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=ee(),{hoverProps:u,triggerHoverEnd:d}=(0,V.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!C(e.currentTarget,F(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(f(F(e)),`pointerover`,e=>{s.isHovered&&s.target&&!C(s.target,F(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,t!==`touch`&&s.isHovered&&i&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{Ge&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&C(e.currentTarget,F(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,V.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var V,Ge,H;function Ke(){return(Ke=t((()=>{y(),u(),M(),V=n(),Ge=!1,H=0})))()}function qe(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}var Je;function Ye(){return(Ye=t((()=>{Je=`aria`})))()}function Xe(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function Ze(e,t){return e?t:{}}function Qe(){return(Qe=t((()=>{})))()}function $e(e){return St[e]}function et(e){return o(rt,e.variant===`link`?void 0:xt[e.size],$e(e.variant),e.variant===`icon`?Ct[e.size]:void 0)}var tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,U,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct;function wt(){return(wt=t((()=>{s(),c`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,tt=`
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
`,nt=c`
  ${tt}

  &[aria-disabled="true"] {
    text-decoration: none;
  }
`,rt=c`
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

  ${tt}

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,it=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,at=c`
  opacity: 0;
`,ot=c`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,st=c`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,ct=c`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,lt=c`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,ut=c`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,dt=c`
  padding-inline: var(--btn-icon-padding-x-sm);
`,ft=c`
  padding-inline: var(--btn-icon-padding-x-md);
`,pt=c`
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
  `},mt=U(`primary`,`var(--btn-primary-bg)`),ht=U(`secondary`,`var(--btn-secondary-bg)`),gt=U(`tertiary`,`var(--btn-tertiary-bg-hover)`),_t=c`
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
`,vt=U(`primary`,`var(--btn-primary-bg)`,`resting`),yt=c`
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
`,xt={small:ct,medium:lt,large:ut},St={primary:mt,secondary:ht,tertiary:gt,icon:yt,danger:_t,selected:vt,link:bt},Ct={small:dt,medium:ft,large:pt}})))()}function Tt(e,t){let n=Et[e],r=Dt[e],i=Ot[t];return c`
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
`})))()}var W,G,Mt;function Nt(){return(Nt=t((()=>{s(),W=e(n()),d(),B(),xe(),A(),i(),Ye(),wt(),jt(),G=I(),Mt=W.forwardRef(function(e,t){let{variant:n=`primary`,size:i=`medium`,icon:a,iconPosition:s=`start`,isLoading:c=!1,loadingLabel:l,disabled:u=!1,disabledReason:d,children:f,onPress:m,onPressStart:h,onPressEnd:g,onPressChange:_,onPressUp:v,"aria-describedby":y,"aria-labelledby":b,"aria-label":x,formAction:S,autoFocus:C,onClick:ee,onPointerDown:w,onPointerUp:T,onPointerCancel:te,onKeyDown:E,onKeyUp:D,onFocus:O,onBlur:ne,className:re,domProps:ie,name:ae,"data-testid":k}=e,{t:A}=r(`shared-module`),j=l??A(`button.loading`),M=u||c,N=!M&&!!d,oe=W.useId(),se=W.useId(),P=W.useId(),ce=qe(y,c?oe:void 0,N?se:void 0),ue=x,de=ue?void 0:b??P,fe=ye(t),{buttonProps:F,isPressed:pe}=Be({isDisabled:M,...Xe({...N?{}:{onPress:m,onClick:ee,onPressStart:h,onPressEnd:g,onPressChange:_,onPressUp:v},"aria-label":ue,"aria-describedby":ce,"aria-labelledby":de,autoFocus:C})},fe),me=o(et({size:i,variant:n}),re),I=p(F,ie??{},{onPointerDown:w,onPointerUp:T,onPointerCancel:te,onKeyDown:E,onKeyUp:D,onFocus:O,onBlur:ne},N?{"aria-disabled":!0,onClick:e=>e.preventDefault()}:{});return(0,G.jsxs)(`button`,{...I,ref:fe,className:me,"data-pressed":pe?`true`:`false`,"data-disabled-reason":c?`loading`:M||N?`disabled`:void 0,"data-testid":k,"aria-busy":c?`true`:void 0,formAction:S,disabled:M,type:e.type??`button`,name:ae,children:[(0,G.jsxs)(`span`,{className:o(it,c?at:void 0),children:[a&&s===`start`?(0,G.jsx)(`span`,{className:ot,children:a}):null,(0,G.jsx)(`span`,{id:de===P?P:void 0,children:f}),a&&s===`end`?(0,G.jsx)(`span`,{className:ot,children:a}):null]}),c?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{className:st,"aria-hidden":`true`,children:(0,G.jsx)(`span`,{className:Tt(`sm`,`current`)})}),(0,G.jsx)(le,{id:oe,children:j})]}):null,N?(0,G.jsx)(le,{id:se,children:d}):null]})})})))()}function Pt({direction:e,className:t}){return(0,Ft.jsx)(`svg`,{"aria-hidden":`true`,className:o(It,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,Ft.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var Ft,It;function Lt(){return(Lt=t((()=>{s(),Ft=I(),It=c`
  width: 1em;
  height: 1em;
`})))()}async function Rt(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=Ht,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(Ut);if(t.remove(),!n)throw Error(Wt)}var K,q,zt,Bt,Vt,Ht,Ut,Wt,Gt,J,Kt,qt,Jt,Yt,Xt,Zt;function Qt(){return(Qt=t((()=>{s(),K=e(n()),d(),B(),Ke(),A(),i(),q=I(),zt=`⧉`,Bt=`✓`,Vt=`✕`,Ht=`fixed`,Ut=`copy`,Wt=`Copy command was unsuccessful`,Gt=2e3,J={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},Kt=a`
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
`,Zt=({value:e,label:t,children:n,disabled:i=!1,disabledReason:a,className:s,"data-testid":c})=>{let{t:l}=r(`shared-module`),u=K.useRef(null),[d,f]=K.useState(J.IDLE),[m,h]=K.useState(!1),g=K.useRef(null);K.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]);let{buttonProps:_,isPressed:v}=Be({"aria-label":t,onPress:async()=>{if(i)return;let t=J.COPIED;try{await Rt(e)}catch{t=J.ERROR}f(t),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>f(J.IDLE),Gt)}},u),{hoverProps:y,isHovered:b}=We({}),x=i?a??t:d===J.COPIED?l(`copy-button.copied`):d===J.ERROR?l(`copy-button.failed`):``,S=d===J.COPIED?Bt:d===J.ERROR?Vt:zt;return(0,q.jsxs)(`span`,{className:qt,children:[(0,q.jsx)(`button`,{...p(_,y),ref:u,className:o(Jt,s),type:`button`,"aria-disabled":i||void 0,"data-pressed":v,"data-testid":c,onFocus:()=>h(!0),onBlur:()=>h(!1),children:n??(0,q.jsx)(`span`,{"aria-hidden":`true`,className:Yt,"data-status":d,children:S},d)}),(0,q.jsx)(`span`,{className:Xt,"data-show":b||m||d!==J.IDLE,"aria-hidden":`true`,children:x||t}),(0,q.jsx)(le,{children:(0,q.jsx)(`span`,{"aria-live":`polite`,children:x})})]})}})))()}var Y,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=t((()=>{s(),n(),Y=I(),$t=`30rem`,en=c`
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
`,sn=({items:e,layout:t=`inline`,className:n,"data-testid":r})=>(0,Y.jsx)(`dl`,{className:o(t===`inline`?en:tn,n),"data-testid":r,children:e.map((e,n)=>(0,Y.jsxs)(`div`,{className:t===`inline`?nn:void 0,children:[(0,Y.jsx)(`dt`,{className:rn,children:e.label}),(0,Y.jsxs)(`dd`,{className:an,children:[e.value,e.secondary?(0,Y.jsx)(`span`,{className:on,children:e.secondary}):null]})]},n))})})))()}var ln,X,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn;function Sn(){return(Sn=t((()=>{s(),ln=e(n()),B(),Lt(),X=I(),un=`right`,dn=c`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,fn=c`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,pn=c`
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
`,mn=c`
  padding: var(--space-2) 0;
`,hn=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,gn=c`
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
`,_n=c`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,vn=c`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,yn=c`
  padding: 0 var(--space-4) var(--space-4);
`,bn=c`
  padding: 0 0 var(--space-3);
`,xn=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:s=`card`,"aria-label":c,className:l,"data-testid":u})=>{let d=s===`plain`,[f,p]=ln.useState(n),m=r!==void 0,h=m?r:f,g=ln.useRef(null),_=ln.useId(),v=ln.useId(),y=()=>{let e=!h;m||p(e),i?.(e)},{buttonProps:b}=Be(c===void 0?{onPress:y}:{onPress:y,"aria-label":c},g);return(0,X.jsxs)(`div`,{className:o(dn,d&&fn,l),children:[(0,X.jsxs)(`button`,{...b,ref:g,id:v,type:`button`,className:o(pn,d&&mn),"aria-expanded":h,"aria-controls":_,"data-testid":u,children:[(0,X.jsxs)(`span`,{className:hn,children:[(0,X.jsx)(`span`,{className:gn,"data-expanded":h,children:(0,X.jsx)(Pt,{direction:un})}),(0,X.jsx)(`span`,{className:_n,children:e})]}),t===void 0?null:(0,X.jsx)(`span`,{className:vn,children:t})]}),(0,X.jsx)(`section`,{id:_,"aria-labelledby":v,hidden:!h,className:o(yn,d&&bn),children:h?a:null})]})}})))()}function Z(e){return typeof e==`object`&&!!e}function Cn(e){return e instanceof Error&&e.name===`AppApiError`}function wn(e){return e instanceof Error&&e.name===zn&&Array.isArray(e.issues)}function Tn(e){return e===`internal_error`||e===`validation_error`||e===`response_validation_error`||e===`validation_error_with_metadata`||e===`course_slug_already_taken`||e===`not_found`||e===`unauthorized`||e===`chapter_not_open_yet`||e===`authentication_required_for_exam_exercise`||e===`forbidden`||e===`rate_limited`||e===`oauth_error`||e===`invalid_course_code`||e===`generic_sisu_error`||e===`sisu_resource_not_found`||e===`foreign_key_violation`}function En(e){return e===null?`unknown`:e===401||e===403?`auth`:e===404?`not_found`:e===422?`validation`:e===429?`rate_limit`:e>=500?`server`:e>=400?`client`:`unknown`}function Dn(e){return e===`rate_limit`||e===`unknown`?`warning`:`error`}function On(e){return!Z(e)||e instanceof Error?!1:typeof e.type==`string`||typeof e.message_key==`string`||typeof e.message==`string`||Array.isArray(e.errors)||Z(e.metadata)}function kn(e){return Z(e)&&!(e instanceof Error)&&typeof e.message==`string`&&(e.stack===void 0||typeof e.stack==`string`)&&e.type===void 0&&e.message_key===void 0&&e.errors===void 0&&e.metadata===void 0}function An(e,t){return{category:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:e.stack===void 0?null:{stack:e.stack,detail:e.message},raw:e}}function jn(e){if(typeof e==`string`)return e;if(Array.isArray(e))return e.filter(e=>typeof e==`string`||typeof e==`number`).join(`.`)}function Mn(e){return Array.isArray(e)?e.flatMap(e=>!Z(e)||typeof e.message!=`string`?[]:[{message:e.message,path:jn(e.path),code:typeof e.code==`string`?e.code:void 0}]):[]}function Nn(e,t){if(e.code===`invalid_type`&&`expected`in e&&`received`in e)return t(`error-zod-issue.invalid_type`,{expected:String(e.expected),received:String(e.received)});if(e.code===`invalid_format`){if(`format`in e&&e.format)return t(`error-zod-issue.invalid_format`,{format:String(e.format)});if(`pattern`in e&&e.pattern)return t(`error-zod-issue.invalid_format_pattern`,{pattern:String(e.pattern)})}return e.code===`too_big`&&`maximum`in e&&`inclusive`in e?t(`error-zod-issue.too_big`,{comparator:e.inclusive?`<=`:`<`,maximum:String(e.maximum)}):e.code===`too_small`&&`minimum`in e&&`inclusive`in e?t(`error-zod-issue.too_small`,{comparator:e.inclusive?`>=`:`>`,minimum:String(e.minimum)}):e.code===`unrecognized_keys`&&`keys`in e&&Array.isArray(e.keys)?t(`error-zod-issue.unrecognized_keys`,{keys:e.keys.join(`, `)}):e.message}function Pn(e){return Z(e)&&typeof e.title==`string`&&typeof e.message==`string`&&(e.source===void 0||typeof e.source==`string`)}function Fn(e){return Z(e)&&e.name===Vn&&Array.isArray(e.errors)}function In(e,t){let n=Tn(e.message_key)?e.message_key:null,r=typeof e.type==`string`?e.type:null,i=typeof e.message==`string`?e.message:null,a=Z(e.metadata)?e.metadata:null,o=a&&typeof a.block_id==`string`?a.block_id:null,s=n===`rate_limited`?`rate_limit`:n===`validation_error`||n===`validation_error_with_metadata`||n===`course_slug_already_taken`||n===`response_validation_error`?`validation`:n===`unauthorized`||n===`chapter_not_open_yet`||n===`authentication_required_for_exam_exercise`||n===`forbidden`?`auth`:n===`not_found`?`not_found`:`client`;return{category:s,severity:Dn(s),title:i??r??t(`error-request-failed`),message:i,requestId:null,status:null,messageKey:n,type:r,code:null,retryable:s===`rate_limit`,retryAfterSeconds:null,issues:Mn(e.errors),blockId:o,metadata:a,technicalDetails:null,raw:e}}function Ln(e,t){let n=Tn(e.messageKey)?e.messageKey:null,r=e.status??null,i=e.kind===`abort`?`abort`:e.kind===`network`?`network`:e.kind===`parse`?`client`:En(r),a=e.metadata&&typeof e.metadata.block_id==`string`?e.metadata.block_id:null;return{category:i,severity:Dn(i),title:e.message||t(`error-request-failed`),message:e.userMessage??e.detail??null,requestId:e.requestId??null,status:r,messageKey:n,type:e.type??null,code:e.code??null,retryable:r===null||r>=500||r===429,retryAfterSeconds:e.retryAfterSeconds??null,issues:e.issues??[],blockId:a,metadata:e.metadata??null,technicalDetails:{detail:e.detail??null,method:e.method??null,url:e.url??null,raw:{type:e.type??null,messageKey:e.messageKey??null,code:e.code??null,message:e.userMessage??null,status:r,issues:e.issues??[],metadata:e.metadata??null,extra:e.extra??null,body:e.body,rawText:e.rawText??null}},raw:e}}function Rn(e,t){if(Cn(e))return Ln(e,t);if(Pn(e)){let t=Z(e.data)?e.data:null,n=typeof e.status==`number`?e.status:null,r=En(n);return{category:r,severity:Dn(r),title:String(e.title),message:String(e.message),requestId:null,status:n,messageKey:null,type:null,code:null,retryable:n===null||n>=500||n===429,retryAfterSeconds:null,issues:[],blockId:t&&typeof t.block_id==`string`?t.block_id:null,metadata:null,technicalDetails:{detail:typeof e.source==`string`?e.source:null},raw:e}}if(kn(e))return An(e,t);if(On(e))return In(e,t);if(Z(e)&&e.error===`too_many_requests`)return In({type:`rate_limit`,message_key:`rate_limited`,message:t(`error-too-many-requests`),errors:[]},t);if(Z(e)&&typeof e.error==`string`)return In({type:`oauth_error`,message_key:`oauth_error`,message:typeof e.error_description==`string`?e.error_description:e.error,errors:[]},t);if(Fn(e)){let n=e.errors?.[0],r=n?Rn(n,t):null;return{category:r?.category??`client`,severity:r?.severity??`error`,title:(typeof e.message==`string`?e.message:null)||t(`error-multiple-errors-occurred`),message:r?.message??null,requestId:r?.requestId??null,status:r?.status??null,messageKey:r?.messageKey??null,type:r?.type??null,code:r?.code??null,retryable:!0,retryAfterSeconds:r?.retryAfterSeconds??null,issues:r?.issues??[],blockId:r?.blockId??null,metadata:null,technicalDetails:{detail:`AggregateError(${String(e.errors?.length??0)})`},raw:e}}if(wn(e)){let n=e.issues.map(e=>({message:Nn(e,t),path:jn(e.path),code:typeof e.code==`string`?e.code:void 0}));return{category:`validation`,severity:`error`,title:t(`error-message-key.response_validation_error.title`),message:null,requestId:null,status:422,messageKey:`response_validation_error`,type:`response_validation_error`,code:null,retryable:!1,retryAfterSeconds:null,issues:n,blockId:null,metadata:null,technicalDetails:{raw:e.issues},raw:e}}return e instanceof Error&&e.name===Bn?{category:`abort`,severity:`info`,title:t(`error-request-cancelled`),message:e.message||null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}:e instanceof Error?{category:e.message.toLowerCase().includes(Hn)?`timeout`:`client`,severity:`error`,title:e.message||t(`error-unexpected-error`),message:null,requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:{stack:e.stack??null,detail:e.message},raw:e}:{category:`unknown`,severity:`warning`,title:t(`error-unexpected-error`),message:typeof e==`string`?e:(()=>{try{return JSON.stringify(e)}catch{return String(e)}})(),requestId:null,status:null,messageKey:null,type:null,code:null,retryable:!0,retryAfterSeconds:null,issues:[],blockId:null,metadata:null,technicalDetails:null,raw:e}}var zn,Bn,Vn,Hn;function Un(){return(Un=t((()=>{zn=`ZodError`,Bn=`AbortError`,Vn=`AggregateError`,Hn=`timeout`})))()}function Wn(e){return typeof e==`object`&&!!e}function Gn(e,t){let n=e.issues.find(e=>typeof e.code==`string`)?.code;if(!n)return null;let r=t(`error-issue-code.${n}.message`,{defaultValue:``});return r.trim()===``?null:r}function Kn(e,t){let n=e.messageKey?t(`error-message-key.${e.messageKey}.title`,{defaultValue:e.title}):e.title,r=Gn(e,t);if(r)return{title:n,message:r};let i=Wn(e.metadata)?e.metadata:null;if(e.messageKey){let r=t(`error-message-key.${e.messageKey}.message`,{defaultValue:``,...i});if(r.trim()!==``)return{title:n,message:r}}return{title:n,message:e.message}}function qn(e){return e!==null&&e>=400&&e<500&&e!==408&&e!==429}function Jn(e){return c`
    max-height: ${e};
  `}function Yn(e){if(typeof e==`string`)return e;try{return JSON.stringify(e,void 0,2)??String(e)}catch{return String(e)}}function Xn(e){return e.path?`${e.path}: ${e.message}`:e.message}function Zn(e){let t=[e.title];e.message&&t.push(e.message);for(let n of e.view.issues)t.push(`- ${Xn(n)}`);e.view.requestId&&t.push(`${e.requestIdLabel}: ${e.view.requestId}`);for(let n of e.details)t.push(`${n.label}: ${n.value}`);typeof window<`u`&&t.push(`${e.pageLabel}: ${window.location.href}`),t.push(`${e.timeLabel}: ${new Date().toISOString()}`);for(let n of e.blocks)t.push(``,`${n.label}:`,n.text.replaceAll(`
`,`\n${ir}`));return t.join(`
`)}var Q,$,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=t((()=>{s(),he(),Q=e(n()),i(),Un(),Nt(),Qt(),cn(),Sn(),$=I(),Qn=(0,Q.createContext)(null),$n=`comfortable`,er=`compact`,tr={assertive:`alert`,polite:`status`,off:void 0},nr={error:_e,warning:ge,info:ve},rr=20,ir=`  `,ar=a`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
`,or=c`
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
  animation: ${ar} var(--duration-base) var(--ease-entrance);

  /* Tints and the accent edge are flattened in high contrast mode, leaving the notice unbounded. */
  @media (forced-colors: active) {
    border-color: CanvasText;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sr={comfortable:c`
    padding: var(--space-5);
  `,compact:c`
    padding: var(--space-4);
    font-size: var(--font-size-1);
  `},cr={error:c`
    background: var(--color-crimson-50);
    border-left-color: var(--color-crimson-700);
  `,warning:c`
    background: var(--color-red-50);
    border-left-color: var(--color-red-700);
  `,info:c`
    background: var(--color-blue-50);
    border-left-color: var(--color-blue-600);
  `},lr={error:c`
    color: var(--color-crimson-700);
  `,warning:c`
    color: var(--color-red-700);
  `,info:c`
    color: var(--color-blue-600);
  `},ur=c`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,dr=c`
  display: inline-flex;
  flex: none;
  padding-top: 2px;
`,fr=c`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
  overflow-wrap: anywhere;
`,pr=c`
  margin: 0;
  color: var(--color-gray-600);
  overflow-wrap: anywhere;
`,mr=c`
  margin: 0;
  padding-left: var(--space-4);
  display: grid;
  gap: var(--space-2);
  color: var(--color-gray-600);
`,hr=c`
  margin-right: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
`,gr=c`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: var(--radius-2);
  background: var(--color-clear-50);
`,_r=c`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  align-items: baseline;
  gap: var(--space-3);
  margin: 0;
`,vr=c`
  flex: none;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 600;
`,yr=c`
  min-width: 0;
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  overflow-wrap: anywhere;
  /* One click grabs the whole id: it is always copied or read out whole. */
  user-select: all;
`,br=c`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
`,xr=c`
  color: var(--color-blue-700);

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,Sr=c`
  display: grid;
  gap: var(--space-4);
  overflow: auto;
`,Cr=c`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,wr=c`
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
`,Tr=({error:e,context:t,severity:n,announce:i=`assertive`,headingLevel:a=2,density:s=`comfortable`,maxHeight:l,detailsMaxHeight:u,className:d,retry:f,"data-testid":p})=>{let{t:m}=r(`errors`),h=(0,Q.useMemo)(()=>Rn(e,m),[e,m]),g=(0,Q.useMemo)(()=>Kn(h,m),[h,m]),_=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return h.status!==null&&t.push({label:m(`errorNotice.status`),value:String(h.status)}),h.retryAfterSeconds!==null&&t.push({label:m(`errorNotice.retryAfter`),value:m(`errorNotice.seconds`,{seconds:h.retryAfterSeconds})}),h.type&&t.push({label:m(`errorNotice.type`),value:h.type}),h.messageKey&&t.push({label:m(`errorNotice.messageKey`),value:h.messageKey}),h.code&&h.code!==h.type&&t.push({label:m(`errorNotice.code`),value:h.code}),e?.method&&t.push({label:m(`errorNotice.method`),value:e.method}),e?.url&&t.push({label:m(`errorNotice.url`),value:e.url}),t},[h,m]),v=(0,Q.useMemo)(()=>{let e=h.technicalDetails,t=[];return e?.detail&&t.push({label:m(`errorNotice.detail`),text:e.detail}),e?.stack&&t.push({label:m(`errorNotice.stackTrace`),text:e.stack}),e?.raw!==void 0&&t.push({label:m(`errorNotice.rawResponse`),text:Yn(e.raw)}),t},[h,m]),y=(0,Q.useMemo)(()=>Zn({title:g.title,message:g.message,view:h,requestIdLabel:m(`errorNotice.requestId`),details:_,blocks:v,pageLabel:m(`errorNotice.page`),timeLabel:m(`errorNotice.time`)}),[g,h,_,v,m]),b=(0,Q.useContext)(Qn),x=a===1?g.title:null;(0,Q.useLayoutEffect)(()=>{if(b!==null&&x!==null)return b(x),()=>b(null)},[b,x]);let S=f!==void 0&&!qn(h.status),C=n??h.severity,ee=nr[C],w=`h${a}`,T=g.message===g.title?null:g.message;return(0,$.jsxs)(`div`,{className:o(or,sr[s],cr[C],l===void 0?void 0:Jn(l),d),role:tr[i],"data-testid":p,children:[(0,$.jsxs)(`div`,{className:ur,children:[(0,$.jsx)(`span`,{className:o(dr,lr[C]),"aria-hidden":`true`,children:(0,$.jsx)(ee,{size:rr})}),(0,$.jsx)(w,{className:fr,children:g.title})]}),t?(0,$.jsx)(`div`,{className:pr,children:t}):null,T?(0,$.jsx)(`p`,{className:pr,children:T}):null,h.issues.length>0?(0,$.jsx)(`ul`,{className:mr,children:h.issues.map((e,t)=>(0,$.jsxs)(`li`,{children:[e.path?(0,$.jsx)(`code`,{className:hr,children:e.path}):null,e.message]},`${e.path??e.code??``}-${t}`))}):null,h.requestId?(0,$.jsx)(`div`,{className:gr,children:(0,$.jsxs)(`dl`,{className:_r,children:[(0,$.jsx)(`dt`,{className:vr,children:m(`errorNotice.requestId`)}),(0,$.jsx)(`dd`,{className:yr,"data-mask-over-this-in-system-tests":`true`,children:h.requestId})]})}):null,S&&(0,$.jsx)(Mt,{className:c`
            justify-self: start;
          `,type:`button`,variant:`secondary`,size:`small`,onPress:f,children:m(`errorNotice.retry`)}),(0,$.jsxs)(`div`,{className:br,children:[(0,$.jsx)(Zt,{value:y,label:m(`errorNotice.copyReport`),children:m(`errorNotice.copyReport`)}),h.blockId?(0,$.jsx)(`a`,{className:xr,href:`#${h.blockId}`,children:m(`go-to-error`)}):null]}),_.length>0||v.length>0?(0,$.jsx)(xn,{title:m(`errorNotice.technicalDetails`),children:(0,$.jsxs)(`div`,{className:o(Sr,u===void 0?void 0:Jn(u)),children:[_.length>0?(0,$.jsx)(sn,{items:_}):null,v.map(e=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{className:Cr,children:e.label}),(0,$.jsx)(`pre`,{className:wr,children:e.text})]},e.label))]})}):null]})}})))()}export{We as A,st as C,Je as D,Xe as E,ze as F,ye as I,xe as L,Be as M,B as N,Ye as O,Oe as P,et as S,Qe as T,it as _,xn as a,ot as b,cn as c,Pt as d,Lt as f,Tt as g,jt as h,Er as i,Ke as j,qe as k,Zt as l,Nt as m,er as n,Sn as o,Mt as p,Tr as r,sn as s,$n as t,Qt as u,at as v,Ze as w,wt as x,nt as y};