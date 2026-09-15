import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{n as i,t as a}from"./useTranslation-B0Jg814S.js";import{a as o,i as s,n as c,r as l,t as u}from"./emotion-css.esm-DsoSFdsS.js";import{$ as d,$t as f,A as p,B as m,Bt as h,C as g,Ct as _,D as v,Dt as y,E as b,Et as x,F as S,Ft as C,G as w,Gt as T,H as E,Ht as D,I as O,It as k,J as A,Jt as j,K as M,Kt as N,L as P,Lt as F,M as I,Mt as L,N as R,Nt as z,Ot as ee,P as te,Pt as ne,Q as B,Qt as re,R as ie,Rt as ae,S as oe,St as se,T as ce,Tt as le,U as ue,Ut as de,V as fe,Vt as pe,W as me,Wt as he,X as ge,Xt as _e,Y as ve,Yt as ye,Z as be,Zt as xe,_ as Se,_t as Ce,a as we,an as Te,at as Ee,b as De,bt as Oe,c as ke,cn as Ae,ct as je,dt as V,en as Me,et as Ne,f as Pe,ft as Fe,g as Ie,gt as Le,ht as Re,i as ze,in as Be,it as Ve,j as He,jt as Ue,k as We,l as Ge,ln as Ke,lt as qe,mt as Je,n as Ye,nn as Xe,nt as Ze,o as Qe,on as $e,ot as et,p as tt,q as nt,qt as rt,r as it,rn as H,rt as at,s as ot,sn as st,st as ct,t as lt,tn as ut,tt as dt,u as ft,un as pt,ut as U,v as mt,w as ht,wt as gt,x as _t,xt as vt,y as yt,yt as bt,z as xt,zt as St}from"./useOverlayTriggerState--ZTAXzSt.js";import{t as Ct}from"./react-dom-BzEl8usk.js";import{t as W}from"./jsx-runtime-DeHZSEgm.js";import{a as wt,c as Tt,i as Et,m as Dt,n as Ot,o as kt,p as At,r as jt,s as Mt,u as Nt}from"./atlas-icons-react-CQxarVg9.js";function Pt(e){let t=(0,Ft.useRef)(null),n=(0,Ft.useRef)(void 0),r=(0,Ft.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,Ft.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var Ft;function It(){return(It=t((()=>{Ft=r()})))()}var Lt,Rt;function zt(){return(zt=t((()=>{Lt=`react-aria-clear-focus`,Rt=`react-aria-focus`})))()}function Bt(e){let t=Ut(Te(e));t!==e&&(t&&Vt(t,e),e&&Ht(e,t))}function Vt(e,t){e.dispatchEvent(new FocusEvent(`blur`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0,relatedTarget:t}))}function Ht(e,t){e.dispatchEvent(new FocusEvent(`focus`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0,relatedTarget:t}))}function Ut(e){let t=ut(e),n=t?.getAttribute(`aria-activedescendant`);return n&&e.getElementById(n)||t}function Wt(){return(Wt=t((()=>{Be(),Ae()})))()}var Gt;function Kt(){return(Kt=t((()=>{Gt={},Gt={collectionLabel:`مقترحات`}})))()}var qt;function Jt(){return(Jt=t((()=>{qt={},qt={collectionLabel:`Предложения`}})))()}var Yt;function Xt(){return(Xt=t((()=>{Yt={},Yt={collectionLabel:`Návrhy`}})))()}var Zt;function Qt(){return(Qt=t((()=>{Zt={},Zt={collectionLabel:`Forslag`}})))()}var $t;function en(){return(en=t((()=>{$t={},$t={collectionLabel:`Empfehlungen`}})))()}var tn;function nn(){return(nn=t((()=>{tn={},tn={collectionLabel:`Προτάσεις`}})))()}var rn;function an(){return(an=t((()=>{rn={},rn={collectionLabel:`Suggestions`}})))()}var on;function sn(){return(sn=t((()=>{on={},on={collectionLabel:`Sugerencias`}})))()}var cn;function ln(){return(ln=t((()=>{cn={},cn={collectionLabel:`Soovitused`}})))()}var un;function dn(){return(dn=t((()=>{un={},un={collectionLabel:`Ehdotukset`}})))()}var fn;function pn(){return(pn=t((()=>{fn={},fn={collectionLabel:`Suggestions`}})))()}var mn;function hn(){return(hn=t((()=>{mn={},mn={collectionLabel:`הצעות`}})))()}var gn;function _n(){return(_n=t((()=>{gn={},gn={collectionLabel:`Prijedlozi`}})))()}var vn;function yn(){return(yn=t((()=>{vn={},vn={collectionLabel:`Javaslatok`}})))()}var bn;function xn(){return(xn=t((()=>{bn={},bn={collectionLabel:`Suggerimenti`}})))()}var Sn;function Cn(){return(Cn=t((()=>{Sn={},Sn={collectionLabel:`候補`}})))()}var wn;function Tn(){return(Tn=t((()=>{wn={},wn={collectionLabel:`제안`}})))()}var En;function Dn(){return(Dn=t((()=>{En={},En={collectionLabel:`Pasiūlymai`}})))()}var On;function kn(){return(kn=t((()=>{On={},On={collectionLabel:`Ieteikumi`}})))()}var An;function jn(){return(jn=t((()=>{An={},An={collectionLabel:`Forslag`}})))()}var Mn;function Nn(){return(Nn=t((()=>{Mn={},Mn={collectionLabel:`Suggesties`}})))()}var Pn;function Fn(){return(Fn=t((()=>{Pn={},Pn={collectionLabel:`Sugestie`}})))()}var In;function Ln(){return(Ln=t((()=>{In={},In={collectionLabel:`Sugestões`}})))()}var Rn;function zn(){return(zn=t((()=>{Rn={},Rn={collectionLabel:`Sugestões`}})))()}var Bn;function Vn(){return(Vn=t((()=>{Bn={},Bn={collectionLabel:`Sugestii`}})))()}var Hn;function Un(){return(Un=t((()=>{Hn={},Hn={collectionLabel:`Предложения`}})))()}var Wn;function Gn(){return(Gn=t((()=>{Wn={},Wn={collectionLabel:`Návrhy`}})))()}var Kn;function qn(){return(qn=t((()=>{Kn={},Kn={collectionLabel:`Predlogi`}})))()}var Jn;function Yn(){return(Yn=t((()=>{Jn={},Jn={collectionLabel:`Predlozi`}})))()}var Xn;function Zn(){return(Zn=t((()=>{Xn={},Xn={collectionLabel:`Förslag`}})))()}var Qn;function $n(){return($n=t((()=>{Qn={},Qn={collectionLabel:`Öneriler`}})))()}var er;function tr(){return(tr=t((()=>{er={},er={collectionLabel:`Пропозиції`}})))()}var nr;function rr(){return(rr=t((()=>{nr={},nr={collectionLabel:`建议`}})))()}var ir;function ar(){return(ar=t((()=>{ir={},ir={collectionLabel:`建議`}})))()}var or;function sr(){return(sr=t((()=>{Kt(),Jt(),Xt(),Qt(),en(),nn(),an(),sn(),ln(),dn(),pn(),hn(),_n(),yn(),xn(),Cn(),Tn(),Dn(),kn(),jn(),Nn(),Fn(),Ln(),zn(),Vn(),Un(),Gn(),qn(),Yn(),Zn(),$n(),tr(),rr(),ar(),or={},or={"ar-AE":Gt,"bg-BG":qt,"cs-CZ":Yt,"da-DK":Zt,"de-DE":$t,"el-GR":tn,"en-US":rn,"es-ES":on,"et-EE":cn,"fi-FI":un,"fr-FR":fn,"he-IL":mn,"hr-HR":gn,"hu-HU":vn,"it-IT":bn,"ja-JP":Sn,"ko-KR":wn,"lt-LT":En,"lv-LV":On,"nb-NO":An,"nl-NL":Mn,"pl-PL":Pn,"pt-BR":In,"pt-PT":Rn,"ro-RO":Bn,"ru-RU":Hn,"sk-SK":Wn,"sl-SI":Kn,"sr-SP":Jn,"sv-SE":Xn,"tr-TR":Qn,"uk-UA":er,"zh-CN":nr,"zh-TW":ir}})))()}function cr(e,t,n,r){let i=B(n),a=n==null;(0,lr.useEffect)(()=>{if(a||!e.current)return;let n=e.current;return n.addEventListener(t,i,r),()=>{n.removeEventListener(t,i,r)}},[e,t,r,a])}var lr;function ur(){return(ur=t((()=>{d(),lr=r()})))()}function dr(e){return e&&e.__esModule?e.default:e}function fr(e,t){let{inputRef:n,collectionRef:r,filter:i,disableAutoFocusFirst:a=!1,disableVirtualFocus:o=!1}=e,s=Re(),c=(0,pr.useRef)(void 0),l=(0,pr.useRef)(!1),u=(0,pr.useRef)(null),d=_()===`virtual`&&(de()||pe()),[f,p]=(0,pr.useState)(!d&&!o),[m,h]=(0,pr.useState)(!1),[g,v]=(0,pr.useState)(!1);(0,pr.useEffect)(()=>()=>clearTimeout(c.current),[]);let y=B(e=>{!e.isTrusted&&f&&n.current&&ut(Te(n.current))!==n.current&&le()!==`touch`&&n.current.focus();let i=H(e);e.isTrusted||!i||u.current===i.id||(clearTimeout(c.current),i===r.current?u.current&&!document.getElementById(u.current)&&(u.current=null,t.setFocusedNodeId(null)):l.current?(u.current=i.id,c.current=setTimeout(()=>{t.setFocusedNodeId(i.id)},500)):(u.current=i.id,t.setFocusedNodeId(i.id)),l.current=!1)}),[b,x]=(0,pr.useState)(null),S=(0,pr.useCallback)(e=>{x(e),e==null?h(!1):(e.getAttribute(`tabindex`)!=null&&p(!1),h(!0))},[]);ye(()=>(b?.addEventListener(`focusin`,y),()=>{b?.removeEventListener(`focusin`,y)}),[b]);let C=Pt((0,pr.useMemo)(()=>Fe(r,S),[r,S])),w=(0,pr.useCallback)(()=>{if(!r.current){v(!0);return}l.current=!0,r.current?.dispatchEvent(new CustomEvent(Rt,{cancelable:!0,bubbles:!0,detail:{focusStrategy:`first`}}))},[r]),T=(0,pr.useCallback)(e=>{v(!1),Bt(ut()),u.current=null,t.setFocusedNodeId(null);let n=new CustomEvent(Lt,{cancelable:!0,bubbles:!0,detail:{clearFocusKey:e}});clearTimeout(c.current),l.current=!1,r.current?.dispatchEvent(n)},[r,t]),D=(0,pr.useRef)(``);cr(n,`beforeinput`,e=>{let{inputType:t}=e;D.current=t});let O=e=>{(D.current===`insertText`||D.current===`insertCompositionText`||D.current===`insertFromComposition`)&&!a?w():D.current&&(D.current.includes(`insert`)||D.current.includes(`delete`)||D.current.includes(`history`))&&(T(!0),Ut(document)===n.current&&Ht(n.current,null)),t.setInputValue(e)},k=(0,pr.useRef)(null),A=e=>{if(k.current=H(e),e.nativeEvent.isComposing)return;let t=u.current;switch(t!==null&&Te(n.current).getElementById(t)==null&&(u.current=null,t=null),e.key){case`a`:if(Ne(e))return;break;case`Escape`:if(e.isDefaultPrevented())return;break;case` `:return;case`Tab`:`continuePropagation`in e&&e.continuePropagation();return;case`Home`:case`End`:case`PageDown`:case`PageUp`:case`ArrowUp`:case`ArrowDown`:case`ArrowRight`:case`ArrowLeft`:{if((e.key===`Home`||e.key===`End`)&&t==null&&e.shiftKey)return;if(e.key===`ArrowRight`||e.key===`ArrowLeft`){if(t==null){e.isPropagationStopped()||e.stopPropagation();return}break}e.preventDefault();let n=new CustomEvent(Rt,{cancelable:!0,bubbles:!0});r.current?.dispatchEvent(n);break}}e.isPropagationStopped()||e.stopPropagation();let i=!0;if(r.current!==null){if(t==null)i=r.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1;else{let n=document.getElementById(t);n&&(i=n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1)}}if(i)switch(e.key){case`ArrowLeft`:case`ArrowRight`:T();break;case`Enter`:t!=null&&document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`,e.nativeEvent));break}else e.preventDefault()},j=B(e=>{if(H(e)===k.current){e.stopImmediatePropagation();let t=u.current;t==null?r.current?.dispatchEvent(new KeyboardEvent(e.type,e)):document.getElementById(t)?.dispatchEvent(new KeyboardEvent(e.type,e))}});(0,pr.useEffect)(()=>(document.addEventListener(`keyup`,j,!0),()=>{document.removeEventListener(`keyup`,j,!0)}),[]);let M=E(dr(or),`@react-aria/autocomplete`),N=ge({id:s,"aria-label":M.format(`collectionLabel`)}),P=(0,pr.useCallback)((e,n)=>!i||i(e,t.inputValue,n),[t.inputValue,i]),F=e=>{if(!e.isTrusted)return;let t=u.current?document.getElementById(u.current):null;t&&Vt(t,e.relatedTarget)},I=e=>{if(e.isTrusted&&u.current&&document.getElementById(u.current)){let t=H(e);queueMicrotask(()=>{Vt(t,r.current),Ht(r.current,t)})}},L=e=>{e.button===0&&e.pointerType!==`touch`&&u.current!=null&&n.current!=null&&H(e)===n.current&&T()},R={value:t.inputValue,onChange:O},z={onKeyDown:A,"aria-activedescendant":t.focusedNodeId??void 0,onBlur:F,onFocus:I,onPointerDown:L};return R={...R,...f&&m&&z,enterKeyHint:`go`,"aria-controls":m?s:void 0,"aria-autocomplete":`list`,autoCorrect:`off`,spellCheck:`false`,autoComplete:`off`},{inputProps:R,collectionProps:U(N,{shouldUseVirtualFocus:f,disallowTypeAhead:f,autoFocus:g?`first`:!1}),collectionRef:C,filter:i==null?void 0:P}}var pr;function G(){return(G=t((()=>{zt(),Wt(),Be(),ee(),Ae(),sr(),he(),dt(),V(),d(),ur(),Le(),be(),_e(),ue(),It(),pr=r()})))()}function mr(e){if(de()&&St()){if(gr==="default"){let t=Te(e);_r=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}gr=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;vr.set(e,e.style[t]),e.style[t]=`none`}}function hr(e){if(de()&&St()){if(gr!==`disabled`)return;gr=`restoring`,setTimeout(()=>{vt(()=>{if(gr===`restoring`){let t=Te(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=_r||``),_r=``,gr=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&vr.has(e)){let t=vr.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),vr.delete(e)}}var gr,_r,vr;function yr(){return(yr=t((()=>{Ae(),he(),se(),gr=`default`,_r=``,vr=new WeakMap})))()}function br(e){let t=(0,Or.useContext)(S);if(t){let{register:n,ref:r,...i}=t;e=U(i,e),n()}return Ve(t,e.ref),e}function xr(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:l,shouldCancelOnPointerExit:u,allowTextSelectionOnPress:d,ref:p,...m}=br(e),[g,_]=(0,Or.useState)(!1),v=(0,Or.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:y,removeAllGlobalListeners:b}=R(),x=(0,Or.useCallback)((e,t)=>{let i=v.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new kr(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,_(!0),a},[s,r,n]),S=(0,Or.useCallback)((e,r,a=!0)=>{let o=v.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new kr(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),_(!1),t&&a&&!s){let n=new kr(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),C=B(S),w=(0,Or.useCallback)((e,t)=>{let n=v.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new kr(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),E=B(w),D=(0,Or.useCallback)(e=>{let t=v.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&S(wr(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,b(),d||hr(t.target);for(let e of t.disposables)e();t.disposables=[]}},[d,b,S]),O=B(D);(0,Or.useEffect)(()=>{s&&v.current.isPressed&&O({currentTarget:v.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let A=(0,Or.useCallback)(e=>{u&&D(e)},[u,D]),j=(0,Or.useCallback)(e=>{s||o?.(e)},[s,o]),M=(0,Or.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);N(n,t),o(T(n))}},[s,o]),I=(0,Or.useMemo)(()=>{let e=v.current,t={onKeyDown(t){if(Cr(t.nativeEvent,t.currentTarget)&&f(t.currentTarget,H(t))){Er(H(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=x(t,`keyboard`));let i=t.currentTarget;y(Te(t.currentTarget),`keyup`,Ce(t=>{Cr(t,i)&&!t.repeat&&f(i,H(t))&&e.target&&E(wr(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&h()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if(!(t&&!f(t.currentTarget,H(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!z.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||F(t.nativeEvent))){let e=x(t,`virtual`),r=E(t,`virtual`),i=C(t,`virtual`);j(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=E(wr(t.currentTarget,t),r),a=C(wr(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,j(t),O(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&Cr(t,e.target)){Er(H(t),t.key)&&t.preventDefault();let n=H(t),r=f(e.target,n);C(wr(e.target,t),`keyboard`,r),r&&M(t,e.target),b(),t.key!==`Enter`&&Sr(e.target)&&f(e.target,n)&&!t[Ar]&&(t[Ar]=!0,z(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!f(t.currentTarget,H(t)))return;if(k(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||mr(e.target),i=x(t,e.pointerType);let a=H(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),y(Te(t.currentTarget),`pointerup`,n,!1),y(Te(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(f(t.currentTarget,H(t))&&t.button===0){if(l){let n=rt(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{!f(t.currentTarget,H(t))||e.pointerType===`virtual`||t.button===0&&!e.isPressed&&E(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,x(wr(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,C(wr(e.target,t),e.pointerType,!1),A(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(f(e.target,H(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?O(t):(Ke(e.target),e.target.click()))},80);y(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else O(t);e.isOverTarget=!1}},r=e=>{O(e)};t.onDragStart=e=>{f(e.currentTarget,H(e))&&O(e)}}return t},[y,s,l,b,d,A,x,j,M]);return(0,Or.useEffect)(()=>{if(!p)return;let e=Te(p.current);if(!e||!e.head||e.getElementById(jr))return;let t=e.createElement(`style`);t.id=jr;let n=P(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${Mr}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[p]),(0,Or.useEffect)(()=>{let e=v.current;return()=>{d||hr(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[d]),{isPressed:c||g,pressProps:U(m,I,{[Mr]:!0})}}function Sr(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function Cr(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof $e(i).HTMLInputElement&&!Dr(i,n)||i instanceof $e(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&Sr(i))&&n!==`Enter`)}function wr(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function Tr(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!Sr(e)}function Er(e,t){return h()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Dr(e,t):Tr(e)}function Dr(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Nr.has(e.type)}var Or,kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=t((()=>{j(),yr(),pt(),Be(),ie(),Ae(),he(),ae(),V(),C(),O(),d(),te(),Ee(),Ct(),Or=r(),kr=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},Ar=Symbol(`linkClicked`),jr=`react-aria-pressable-style`,Mr=`data-react-aria-pressable`,Nr=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Fr(e,t){let{elementType:n=`a`,onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,...l}=e,u={};n!==`a`&&(u={role:`link`,tabIndex:c?void 0:0});let{focusableProps:d}=Ze(e,t),{pressProps:f,isPressed:p}=xr({onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,ref:t}),m=xt(l,{labelable:!0}),h=U(d,f),g=ne(),_=L(e);return{isPressed:p,linkProps:U(m,_,{...h,...u,"aria-disabled":c||void 0,"aria-current":e[`aria-current`],onClick:t=>{f.onClick?.(t),Ue(t,g,e.href,e.routerOptions)}})}}function Ir(){return(Ir=t((()=>{m(),C(),V(),at(),Pr()})))()}function Lr(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:p,rel:m,type:h=`button`}=e,g;g=n===`button`?{type:h,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?p:void 0,type:n===`input`?h:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?m:void 0};let{pressProps:_,isPressed:v}=xr({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:y}=Ze(e,t);u&&(y.tabIndex=r?-1:y.tabIndex);let b=U(y,_,xt(e,{labelable:!0}));return{isPressed:v,buttonProps:U(g,b,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function Rr(){return(Rr=t((()=>{m(),V(),at(),Pr()})))()}function zr(e,t=`assertive`,n=Vr){Hr?Hr.announce(e,t,n):(Hr=new Ur,(typeof IS_REACT_ACT_ENVIRONMENT==`boolean`?IS_REACT_ACT_ENVIRONMENT:typeof jest<`u`)?Hr.announce(e,t,n):setTimeout(()=>{Hr?.isAttached()&&Hr?.announce(e,t,n)},100))}function Br(e){Hr&&Hr.clear(e)}var Vr,Hr,Ur;function Wr(){return(Wr=t((()=>{Vr=7e3,Hr=null,Ur=class{constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<`u`&&(this.node=document.createElement(`div`),this.node.dataset.liveAnnouncer=`true`,Object.assign(this.node.style,{border:0,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,width:`1px`,whiteSpace:`nowrap`}),this.assertiveLog=this.createLog(`assertive`),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog(`polite`),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}isAttached(){return this.node?.isConnected}createLog(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),t}destroy(){this.node&&=(document.body.removeChild(this.node),null)}announce(e,t=`assertive`,n=Vr){if(!this.node)return;let r=document.createElement(`div`);typeof e==`object`?(r.setAttribute(`role`,`img`),r.setAttribute(`aria-labelledby`,e[`aria-labelledby`])):r.textContent=e,t===`assertive`?this.assertiveLog?.appendChild(r):this.politeLog?.appendChild(r),e!==``&&setTimeout(()=>{r.remove()},n)}clear(e){this.node&&((!e||e===`assertive`)&&this.assertiveLog&&(this.assertiveLog.innerHTML=``),(!e||e===`polite`)&&this.politeLog&&(this.politeLog.innerHTML=``))}}})))()}var Gr;function Kr(){return(Kr=t((()=>{Gr={},Gr={dateRange:e=>`${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,dateSelected:e=>`${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,finishRangeSelectionPrompt:`انقر لإنهاء عملية تحديد نطاق التاريخ`,maximumDate:`آخر تاريخ متاح`,minimumDate:`أول تاريخ متاح`,next:`التالي`,previous:`السابق`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,startRangeSelectionPrompt:`انقر لبدء عملية تحديد نطاق التاريخ`,todayDate:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,todayDateSelected:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var qr;function Jr(){return(Jr=t((()=>{qr={},qr={dateRange:e=>`${e.startDate} \u{434}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,finishRangeSelectionPrompt:`Натиснете, за да довършите избора на времеви интервал`,maximumDate:`Последна налична дата`,minimumDate:`Първа налична дата`,next:`Напред`,previous:`Назад`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натиснете, за да пристъпите към избора на времеви интервал`,todayDate:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,todayDateSelected:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var Yr;function Xr(){return(Xr=t((()=>{Yr={},Yr={dateRange:e=>`${e.startDate} a\u{17E} ${e.endDate}`,dateSelected:e=>`Vybr\xe1no ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výběr rozsahu dat`,maximumDate:`Poslední dostupné datum`,minimumDate:`První dostupné datum`,next:`Další`,previous:`Předchozí`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím zahájíte výběr rozsahu dat`,todayDate:e=>`Dnes, ${e.date}`,todayDateSelected:e=>`Dnes, vybr\xe1no ${e.date}`}})))()}var Zr;function Qr(){return(Qr=t((()=>{Zr={},Zr={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klik for at fuldføre valg af datoområde`,maximumDate:`Sidste ledige dato`,minimumDate:`Første ledige dato`,next:`Næste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.dateRange}`,startRangeSelectionPrompt:`Klik for at starte valg af datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var $r;function ei(){return(ei=t((()=>{$r={},$r={dateRange:e=>`${e.startDate} bis ${e.endDate}`,dateSelected:e=>`${e.date} ausgew\xe4hlt`,finishRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beenden`,maximumDate:`Letztes verfügbares Datum`,minimumDate:`Erstes verfügbares Datum`,next:`Weiter`,previous:`Zurück`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.dateRange}`,startRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beginnen`,todayDate:e=>`Heute, ${e.date}`,todayDateSelected:e=>`Heute, ${e.date} ausgew\xe4hlt`}})))()}var ti;function ni(){return(ni=t((()=>{ti={},ti={dateRange:e=>`${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,dateSelected:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,finishRangeSelectionPrompt:`Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,maximumDate:`Τελευταία διαθέσιμη ημερομηνία`,minimumDate:`Πρώτη διαθέσιμη ημερομηνία`,next:`Επόμενο`,previous:`Προηγούμενο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,startRangeSelectionPrompt:`Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,todayDate:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,todayDateSelected:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`}})))()}var ri;function ii(){return(ii=t((()=>{ri={},ri={previous:`Previous`,next:`Next`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.dateRange}`,todayDate:e=>`Today, ${e.date}`,todayDateSelected:e=>`Today, ${e.date} selected`,dateSelected:e=>`${e.date} selected`,startRangeSelectionPrompt:`Click to start selecting date range`,finishRangeSelectionPrompt:`Click to finish selecting date range`,minimumDate:`First available date`,maximumDate:`Last available date`,dateRange:e=>`${e.startDate} to ${e.endDate}`}})))()}var ai;function oi(){return(oi=t((()=>{ai={},ai={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} seleccionado`,finishRangeSelectionPrompt:`Haga clic para terminar de seleccionar rango de fechas`,maximumDate:`Última fecha disponible`,minimumDate:`Primera fecha disponible`,next:`Siguiente`,previous:`Anterior`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo seleccionado: ${e.dateRange}`,startRangeSelectionPrompt:`Haga clic para comenzar a seleccionar un rango de fechas`,todayDate:e=>`Hoy, ${e.date}`,todayDateSelected:e=>`Hoy, ${e.date} seleccionado`}})))()}var si;function ci(){return(ci=t((()=>{si={},si={dateRange:e=>`${e.startDate} kuni ${e.endDate}`,dateSelected:e=>`${e.date} valitud`,finishRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimise lõpetamiseks`,maximumDate:`Viimane saadaolev kuupäev`,minimumDate:`Esimene saadaolev kuupäev`,next:`Järgmine`,previous:`Eelmine`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.dateRange}`,startRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimiseks`,todayDate:e=>`T\xe4na, ${e.date}`,todayDateSelected:e=>`T\xe4na, ${e.date} valitud`}})))()}var li;function ui(){return(ui=t((()=>{li={},li={dateRange:e=>`${e.startDate} \u{2013} ${e.endDate}`,dateSelected:e=>`${e.date} valittu`,finishRangeSelectionPrompt:`Lopeta päivämääräalueen valinta napsauttamalla tätä.`,maximumDate:`Viimeinen varattavissa oleva päivämäärä`,minimumDate:`Ensimmäinen varattavissa oleva päivämäärä`,next:`Seuraava`,previous:`Edellinen`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.dateRange}`,startRangeSelectionPrompt:`Aloita päivämääräalueen valinta napsauttamalla tätä.`,todayDate:e=>`T\xe4n\xe4\xe4n, ${e.date}`,todayDateSelected:e=>`T\xe4n\xe4\xe4n, ${e.date} valittu`}})))()}var di;function fi(){return(fi=t((()=>{di={},di={dateRange:e=>`${e.startDate} \xe0 ${e.endDate}`,dateSelected:e=>`${e.date} s\xe9lectionn\xe9`,finishRangeSelectionPrompt:`Cliquer pour finir de sélectionner la plage de dates`,maximumDate:`Dernière date disponible`,minimumDate:`Première date disponible`,next:`Suivant`,previous:`Précédent`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,startRangeSelectionPrompt:`Cliquer pour commencer à sélectionner la plage de dates`,todayDate:e=>`Aujourd'hui, ${e.date}`,todayDateSelected:e=>`Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`}})))()}var pi;function mi(){return(mi=t((()=>{pi={},pi={dateRange:e=>`${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,dateSelected:e=>`${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,finishRangeSelectionPrompt:`חץ כדי לסיים את בחירת טווח התאריכים`,maximumDate:`תאריך פנוי אחרון`,minimumDate:`תאריך פנוי ראשון`,next:`הבא`,previous:`הקודם`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,startRangeSelectionPrompt:`לחץ כדי להתחיל בבחירת טווח התאריכים`,todayDate:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,todayDateSelected:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var hi;function gi(){return(gi=t((()=>{hi={},hi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} odabran`,finishRangeSelectionPrompt:`Kliknite da dovršite raspon odabranih datuma`,maximumDate:`Posljednji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sljedeći`,previous:`Prethodni`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete raspon odabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, odabran ${e.date}`}})))()}var _i;function vi(){return(vi=t((()=>{_i={},_i={dateRange:e=>`${e.startDate}\u{2013}${e.endDate}`,dateSelected:e=>`${e.date} kiv\xe1lasztva`,finishRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének befejezéséhez`,maximumDate:`Utolsó elérhető dátum`,minimumDate:`Az első elérhető dátum`,next:`Következő`,previous:`Előző`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,startRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének indításához`,todayDate:e=>`Ma, ${e.date}`,todayDateSelected:e=>`Ma, ${e.date} kijel\xf6lve`}})))()}var yi;function bi(){return(bi=t((()=>{yi={},yi={dateRange:e=>`Da ${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selezionata`,finishRangeSelectionPrompt:`Fai clic per completare la selezione dell’intervallo di date`,maximumDate:`Ultima data disponibile`,minimumDate:`Prima data disponibile`,next:`Successivo`,previous:`Precedente`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: ${e.dateRange}`,startRangeSelectionPrompt:`Fai clic per selezionare l’intervallo di date`,todayDate:e=>`Oggi, ${e.date}`,todayDateSelected:e=>`Oggi, ${e.date} selezionata`}})))()}var xi;function Si(){return(Si=t((()=>{xi={},xi={dateRange:e=>`${e.startDate} \u{304B}\u{3089} ${e.endDate}`,dateSelected:e=>`${e.date} \u{3092}\u{9078}\u{629E}`,finishRangeSelectionPrompt:`クリックして日付範囲の選択を終了`,maximumDate:`最終利用可能日`,minimumDate:`最初の利用可能日`,next:`次へ`,previous:`前へ`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,startRangeSelectionPrompt:`クリックして日付範囲の選択を開始`,todayDate:e=>`\u{672C}\u{65E5}\u{3001}${e.date}`,todayDateSelected:e=>`\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`}})))()}var Ci;function wi(){return(wi=t((()=>{Ci={},Ci={dateRange:e=>`${e.startDate} ~ ${e.endDate}`,dateSelected:e=>`${e.date} \u{C120}\u{D0DD}\u{B428}`,finishRangeSelectionPrompt:`날짜 범위 선택을 완료하려면 클릭하십시오.`,maximumDate:`마지막으로 사용 가능한 일자`,minimumDate:`처음으로 사용 가능한 일자`,next:`다음`,previous:`이전`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,startRangeSelectionPrompt:`날짜 범위 선택을 시작하려면 클릭하십시오.`,todayDate:e=>`\u{C624}\u{B298}, ${e.date}`,todayDateSelected:e=>`\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`}})))()}var Ti;function Ei(){return(Ei=t((()=>{Ti={},Ti={dateRange:e=>`Nuo ${e.startDate} iki ${e.endDate}`,dateSelected:e=>`Pasirinkta ${e.date}`,finishRangeSelectionPrompt:`Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,maximumDate:`Paskutinė galima data`,minimumDate:`Pirmoji galima data`,next:`Paskesnis`,previous:`Ankstesnis`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: ${e.dateRange}`,startRangeSelectionPrompt:`Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,todayDate:e=>`\u{160}iandien, ${e.date}`,todayDateSelected:e=>`\u{160}iandien, pasirinkta ${e.date}`}})))()}var Di;function Oi(){return(Oi=t((()=>{Di={},Di={dateRange:e=>`No ${e.startDate} l\u{12B}dz ${e.endDate}`,dateSelected:e=>`Atlas\u{12B}ts: ${e.date}`,finishRangeSelectionPrompt:`Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,maximumDate:`Pēdējais pieejamais datums`,minimumDate:`Pirmais pieejamais datums`,next:`Tālāk`,previous:`Atpakaļ`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: ${e.dateRange}`,startRangeSelectionPrompt:`Noklikšķiniet, lai sāktu datumu diapazona atlasi`,todayDate:e=>`\u{160}odien, ${e.date}`,todayDateSelected:e=>`Atlas\u{12B}ta \u{161}odiena, ${e.date}`}})))()}var ki;function Ai(){return(Ai=t((()=>{ki={},ki={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klikk for å fullføre valg av datoområde`,maximumDate:`Siste tilgjengelige dato`,minimumDate:`Første tilgjengelige dato`,next:`Neste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.dateRange}`,startRangeSelectionPrompt:`Klikk for å starte valg av datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var ji;function Mi(){return(Mi=t((()=>{ji={},ji={dateRange:e=>`${e.startDate} tot ${e.endDate}`,dateSelected:e=>`${e.date} geselecteerd`,finishRangeSelectionPrompt:`Klik om de selectie van het datumbereik te voltooien`,maximumDate:`Laatste beschikbare datum`,minimumDate:`Eerste beschikbare datum`,next:`Volgende`,previous:`Vorige`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.dateRange}`,startRangeSelectionPrompt:`Klik om het datumbereik te selecteren`,todayDate:e=>`Vandaag, ${e.date}`,todayDateSelected:e=>`Vandaag, ${e.date} geselecteerd`}})))()}var Ni;function Pi(){return(Pi=t((()=>{Ni={},Ni={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`Wybrano ${e.date}`,finishRangeSelectionPrompt:`Kliknij, aby zakończyć wybór zakresu dat`,maximumDate:`Ostatnia dostępna data`,minimumDate:`Pierwsza dostępna data`,next:`Dalej`,previous:`Wstecz`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknij, aby rozpocząć wybór zakresu dat`,todayDate:e=>`Dzisiaj, ${e.date}`,todayDateSelected:e=>`Dzisiaj wybrano ${e.date}`}})))()}var Fi;function Ii(){return(Ii=t((()=>{Fi={},Fi={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para concluir a seleção do intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para iniciar a seleção do intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var Li;function Ri(){return(Ri=t((()=>{Li={},Li={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para terminar de selecionar o intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para começar a selecionar o intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var zi;function Bi(){return(Bi=t((()=>{zi={},zi={dateRange:e=>`De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,dateSelected:e=>`${e.date} selectat\u{103}`,finishRangeSelectionPrompt:`Apăsaţi pentru a finaliza selecţia razei pentru dată`,maximumDate:`Ultima dată disponibilă`,minimumDate:`Prima dată disponibilă`,next:`Următorul`,previous:`Înainte`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: ${e.dateRange}`,startRangeSelectionPrompt:`Apăsaţi pentru a începe selecţia razei pentru dată`,todayDate:e=>`Ast\u{103}zi, ${e.date}`,todayDateSelected:e=>`Azi, ${e.date} selectat\u{103}`}})))()}var Vi;function Hi(){return(Hi=t((()=>{Vi={},Vi={dateRange:e=>`\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Щелкните, чтобы завершить выбор диапазона дат`,maximumDate:`Последняя доступная дата`,minimumDate:`Первая доступная дата`,next:`Далее`,previous:`Назад`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Щелкните, чтобы начать выбор диапазона дат`,todayDate:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var Ui;function Wi(){return(Wi=t((()=>{Ui={},Ui={dateRange:e=>`Od ${e.startDate} do ${e.endDate}`,dateSelected:e=>`Vybrat\xfd d\xe1tum ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výber rozsahu dátumov`,maximumDate:`Posledný dostupný dátum`,minimumDate:`Prvý dostupný dátum`,next:`Nasledujúce`,previous:`Predchádzajúce`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím spustíte výber rozsahu dátumov`,todayDate:e=>`Dnes ${e.date}`,todayDateSelected:e=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`}})))()}var Gi;function Ki(){return(Ki=t((()=>{Gi={},Gi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izbrano`,finishRangeSelectionPrompt:`Kliknite za dokončanje izbire datumskega obsega`,maximumDate:`Zadnji razpoložljivi datum`,minimumDate:`Prvi razpoložljivi datum`,next:`Naprej`,previous:`Nazaj`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite za začetek izbire datumskega obsega`,todayDate:e=>`Danes, ${e.date}`,todayDateSelected:e=>`Danes, ${e.date} izbrano`}})))()}var qi;function Ji(){return(Ji=t((()=>{qi={},qi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izabran`,finishRangeSelectionPrompt:`Kliknite da dovršite opseg izabranih datuma`,maximumDate:`Zadnji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sledeći`,previous:`Prethodni`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani period: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete opseg izabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, izabran ${e.date}`}})))()}var Yi;function Xi(){return(Xi=t((()=>{Yi={},Yi={dateRange:e=>`${e.startDate} till ${e.endDate}`,dateSelected:e=>`${e.date} har valts`,finishRangeSelectionPrompt:`Klicka för att avsluta val av datumintervall`,maximumDate:`Sista tillgängliga datum`,minimumDate:`Första tillgängliga datum`,next:`Nästa`,previous:`Föregående`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.dateRange}`,startRangeSelectionPrompt:`Klicka för att välja datumintervall`,todayDate:e=>`Idag, ${e.date}`,todayDateSelected:e=>`Idag, ${e.date} har valts`}})))()}var Zi;function Qi(){return(Qi=t((()=>{Zi={},Zi={dateRange:e=>`${e.startDate} - ${e.endDate}`,dateSelected:e=>`${e.date} se\xe7ildi`,finishRangeSelectionPrompt:`Tarih aralığı seçimini tamamlamak için tıklayın`,maximumDate:`Son müsait tarih`,minimumDate:`İlk müsait tarih`,next:`Sonraki`,previous:`Önceki`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,startRangeSelectionPrompt:`Tarih aralığı seçimini başlatmak için tıklayın`,todayDate:e=>`Bug\xfcn, ${e.date}`,todayDateSelected:e=>`Bug\xfcn, ${e.date} se\xe7ildi`}})))()}var $i;function ea(){return(ea=t((()=>{$i={},$i={dateRange:e=>`${e.startDate} \u{2014} ${e.endDate}`,dateSelected:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Натисніть, щоб завершити вибір діапазону дат`,maximumDate:`Остання доступна дата`,minimumDate:`Перша доступна дата`,next:`Наступний`,previous:`Попередній`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натисніть, щоб почати вибір діапазону дат`,todayDate:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var ta;function na(){return(na=t((()=>{ta={},ta={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9009}\u{62E9} ${e.date}`,finishRangeSelectionPrompt:`单击以完成选择日期范围`,maximumDate:`最后一个可用日期`,minimumDate:`第一个可用日期`,next:`下一页`,previous:`上一页`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`单击以开始选择日期范围`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`}})))()}var ra;function ia(){return(ia=t((()=>{ra={},ra={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9078}\u{53D6} ${e.date}`,finishRangeSelectionPrompt:`按一下以完成選取日期範圍`,maximumDate:`最後一個可用日期`,minimumDate:`第一個可用日期`,next:`下一頁`,previous:`上一頁`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`按一下以開始選取日期範圍`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`}})))()}var aa;function oa(){return(oa=t((()=>{Kr(),Jr(),Xr(),Qr(),ei(),ni(),ii(),oi(),ci(),ui(),fi(),mi(),gi(),vi(),bi(),Si(),wi(),Ei(),Oi(),Ai(),Mi(),Pi(),Ii(),Ri(),Bi(),Hi(),Wi(),Ki(),Ji(),Xi(),Qi(),ea(),na(),ia(),aa={},aa={"ar-AE":Gr,"bg-BG":qr,"cs-CZ":Yr,"da-DK":Zr,"de-DE":$r,"el-GR":ti,"en-US":ri,"es-ES":ai,"et-EE":si,"fi-FI":li,"fr-FR":di,"he-IL":pi,"hr-HR":hi,"hu-HU":_i,"it-IT":yi,"ja-JP":xi,"ko-KR":Ci,"lt-LT":Ti,"lv-LV":Di,"nb-NO":ki,"nl-NL":ji,"pl-PL":Ni,"pt-BR":Fi,"pt-PT":Li,"ro-RO":zi,"ru-RU":Vi,"sk-SK":Ui,"sl-SI":Gi,"sr-SP":qi,"sv-SE":Yi,"tr-TR":Zi,"uk-UA":$i,"zh-CN":ta,"zh-TW":ra}})))()}function sa(e,t){let n=(0,ca.useRef)(null);return e&&n.current&&t(e,n.current)&&(e=n.current),n.current=e,e}var ca;function la(){return(la=t((()=>{ca=r()})))()}function K(e,t){return e-t*Math.floor(e/t)}function ua(e,t,n,r){t=fa(e,t);let i=t-1,a=-2;return n<=2?a=0:da(t)&&(a=-1),1721425+365*i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400)+Math.floor((367*n-362)/12+a+r)}function da(e){return e%4==0&&(e%100!=0||e%400==0)}function fa(e,t){return e===`BC`?1-t:t}function pa(e){let t=`AD`;return e<=0&&(t=`BC`,e=1-e),[t,e]}var ma,ha,ga;function _a(){return(_a=t((()=>{as(),ma=1721426,ha={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]},ga=class{fromJulianDay(e){let t=e,n=t-ma,r=Math.floor(n/146097),i=K(n,146097),a=Math.floor(i/36524),o=K(i,36524),s=Math.floor(o/1461),c=K(o,1461),l=Math.floor(c/365),[u,d]=pa(r*400+a*100+s*4+l+ +(a!==4&&l!==4)),f=t-ua(u,d,1,1),p=2;t<ua(u,d,3,1)?p=0:da(d)&&(p=1);let m=Math.floor(((f+p)*12+373)/367),h=t-ua(u,d,m,1)+1;return new ts(u,d,m,h)}toJulianDay(e){return ua(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return ha[da(e.year)?`leapyear`:`standard`][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return da(e.year)?366:365}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getYearsInEra(e){return 9999}getEras(){return[`BC`,`AD`]}isInverseEra(e){return e.era===`BC`}balanceDate(e){e.year<=0&&(e.era=e.era===`BC`?`AD`:`BC`,e.year=1-e.year)}constructor(){this.identifier=`gregory`}}})))()}var va;function ya(){return(ya=t((()=>{va={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1}})))()}function ba(e,t){return t=so(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function xa(e,t){return t=so(t,e.calendar),e=Na(e),t=Na(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function Sa(e,t){return Ca(e.calendar,t.calendar)&&ba(e,t)}function Ca(e,t){return e.isEqual?.(t)??t.isEqual?.(e)??e.identifier===t.identifier}function wa(e,t){return ba(e,Da(t))}function Ta(e,t,n){let r=e.calendar.toJulianDay(e),i=n?Ua[n]:za(t),a=Math.ceil(r+1-i)%7;return a<0&&(a+=7),a}function Ea(e){return ro(Date.now(),e)}function Da(e){return io(Ea(e))}function Oa(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function ka(e,t){return Aa(e)-Aa(t)}function Aa(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}function ja(){return Wa??=new Intl.DateTimeFormat().resolvedOptions().timeZone,Wa}function Ma(){return Ga}function Na(e){return e.subtract({days:e.day-1})}function Pa(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}function Fa(e){return Na(e.subtract({months:e.month-1}))}function Ia(e,t,n){let r=Ta(e,t,n);return e.subtract({days:r})}function La(e,t,n){return Ia(e,t,n).add({days:6})}function Ra(e){if(Intl.Locale){let t=Ka.get(e);return t||(t=new Intl.Locale(e).maximize().region,t&&Ka.set(e,t)),t}let t=e.split(`-`)[1];return t===`u`?void 0:t}function za(e){let t=qa.get(e);if(!t){if(Intl.Locale){let n=new Intl.Locale(e);if(`getWeekInfo`in n&&(t=n.getWeekInfo(),t))return qa.set(e,t),t.firstDay}let n=Ra(e);if(e.includes(`-fw-`)){let n=e.split(`-fw-`)[1].split(`-`)[0];t=n===`mon`?{firstDay:1}:n===`tue`?{firstDay:2}:n===`wed`?{firstDay:3}:n===`thu`?{firstDay:4}:n===`fri`?{firstDay:5}:n===`sat`?{firstDay:6}:{firstDay:0}}else t=e.includes(`-ca-iso8601`)?{firstDay:1}:{firstDay:n&&va[n]||0};qa.set(e,t)}return t.firstDay}function Ba(e,t,n){let r=e.calendar.getDaysInMonth(e);return Math.ceil((Ta(Na(e),t,n)+r)/7)}function Va(e,t){return e&&t?e.compare(t)<=0?e:t:e||t}function Ha(e,t){return e&&t?e.compare(t)>=0?e:t:e||t}var Ua,Wa,Ga,Ka,qa;function Ja(){return(Ja=t((()=>{mo(),ya(),Ua={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},Wa=null,Ga=!1,Ka=new Map,qa=new Map})))()}function Ya(e){return e=so(e,new ga),Xa(fa(e.era,e.year),e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function Xa(e,t,n,r,i,a,o){let s=new Date;return s.setUTCHours(r,i,a,o),s.setUTCFullYear(e,t-1,n),s.getTime()}function Za(e,t){if(t===`UTC`)return 0;if(e>0&&t===ja()&&!Ma())return new Date(e).getTimezoneOffset()*-6e4;let{year:n,month:r,day:i,hour:a,minute:o,second:s}=Qa(e,t);return Xa(n,r,i,a,o,s,0)-Math.floor(e/1e3)*1e3}function Qa(e,t){let n=fo.get(t);n||(n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour12:!1,era:`short`,year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`}),fo.set(t,n));let r=n.formatToParts(new Date(e)),i={};for(let e of r)e.type!==`literal`&&(i[e.type]=e.value);return{year:i.era===`BC`||i.era===`B`?-i.year+1:+i.year,month:+i.month,day:+i.day,hour:i.hour===`24`?0:+i.hour,minute:+i.minute,second:+i.second}}function $a(e,t,n,r){return(n===r?[n]:[n,r]).filter(n=>eo(e,t,n))}function eo(e,t,n){let r=Qa(n,t);return e.year===r.year&&e.month===r.month&&e.day===r.day&&e.hour===r.hour&&e.minute===r.minute&&e.second===r.second}function to(e,t,n=`compatible`){let r=ao(e);if(t===`UTC`)return Ya(r);if(t===ja()&&n===`compatible`&&!Ma()){r=so(r,new ga);let e=new Date,t=fa(r.era,r.year);return e.setFullYear(t,r.month-1,r.day),e.setHours(r.hour,r.minute,r.second,r.millisecond),e.getTime()}let i=Ya(r),a=Za(i-po,t),o=Za(i+po,t),s=$a(r,t,i-a,i-o);if(s.length===1)return s[0];if(s.length>1)switch(n){case`compatible`:case`earlier`:return s[0];case`later`:return s[s.length-1];case`reject`:throw RangeError(`Multiple possible absolute times found`)}switch(n){case`earlier`:return Math.min(i-a,i-o);case`compatible`:case`later`:return Math.max(i-a,i-o);case`reject`:throw RangeError(`No such absolute time found`)}}function no(e,t,n=`compatible`){return new Date(to(e,t,n))}function ro(e,t){let n=Za(e,t),r=new Date(e+n),i=r.getUTCFullYear(),a=r.getUTCMonth()+1,o=r.getUTCDate(),s=r.getUTCHours(),c=r.getUTCMinutes(),l=r.getUTCSeconds(),u=r.getUTCMilliseconds();return new is(i<1?`BC`:`AD`,i<1?-i+1:i,a,o,t,n,s,c,l,u)}function io(e){return new ts(e.calendar,e.era,e.year,e.month,e.day)}function ao(e,t){let n=0,r=0,i=0,a=0;if(`timeZone`in e)({hour:n,minute:r,second:i,millisecond:a}=e);else if(`hour`in e&&!t)return e;return t&&({hour:n,minute:r,second:i,millisecond:a}=t),new rs(e.calendar,e.era,e.year,e.month,e.day,n,r,i,a)}function oo(e){return new ns(e.hour,e.minute,e.second,e.millisecond)}function so(e,t){if(Ca(e.calendar,t))return e;let n=t.fromJulianDay(e.calendar.toJulianDay(e)),r=e.copy();return r.calendar=t,r.era=n.era,r.year=n.year,r.month=n.month,r.day=n.day,bo(r),r}function co(e,t,n){return e instanceof is?e.timeZone===t?e:uo(e,t):ro(to(e,t,n),t)}function lo(e){let t=Ya(e)-e.offset;return new Date(t)}function uo(e,t){return so(ro(Ya(e)-e.offset,t),e.calendar)}var fo,po;function mo(){return(mo=t((()=>{as(),Ro(),_a(),Ja(),fo=new Map,po=864e5})))()}function ho(e,t){let n=e.copy(),r=`hour`in n?Oo(n,t):0;go(n,t.years||0),n.calendar.balanceYearMonth&&n.calendar.balanceYearMonth(n,e),n.month+=t.months||0,_o(n),yo(n),n.day+=(t.weeks||0)*7,n.day+=t.days||0,n.day+=r,vo(n),n.calendar.balanceDate&&n.calendar.balanceDate(n),n.year<1&&(n.year=1,n.month=1,n.day=1);let i=n.calendar.getYearsInEra(n);if(n.year>i){let e=n.calendar.isInverseEra?.(n);n.year=i,n.month=e?1:n.calendar.getMonthsInYear(n),n.day=e?1:n.calendar.getDaysInMonth(n)}n.month<1&&(n.month=1,n.day=1);let a=n.calendar.getMonthsInYear(n);return n.month>a&&(n.month=a,n.day=n.calendar.getDaysInMonth(n)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day)),n}function go(e,t){e.calendar.isInverseEra?.(e)&&(t=-t),e.year+=t}function _o(e){for(;e.month<1;)go(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,go(e,1)}function vo(e){for(;e.day<1;)e.month--,_o(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,_o(e)}function yo(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function bo(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),yo(e)}function xo(e){let t={};for(let n in e)typeof e[n]==`number`&&(t[n]=-e[n]);return t}function So(e,t){return ho(e,xo(t))}function Co(e,t){let n=e.copy();return t.era!=null&&(n.era=t.era),t.year!=null&&(n.year=t.year),t.month!=null&&(n.month=t.month),t.day!=null&&(n.day=t.day),bo(n),n}function wo(e,t){let n=e.copy();return t.hour!=null&&(n.hour=t.hour),t.minute!=null&&(n.minute=t.minute),t.second!=null&&(n.second=t.second),t.millisecond!=null&&(n.millisecond=t.millisecond),Eo(n),n}function To(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=Do(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=Do(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=Do(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=Do(e.hour,24),t}function Eo(e){e.millisecond=Math.max(0,Math.min(e.millisecond,999)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function Do(e,t){let n=e%t;return n<0&&(n+=t),n}function Oo(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,To(e)}function ko(e,t){let n=e.copy();return Oo(n,t),n}function Ao(e,t){return ko(e,xo(t))}function jo(e,t,n,r){let i=e.copy();switch(t){case`era`:{let t=e.calendar.getEras(),a=t.indexOf(e.era);if(a<0)throw Error(`Invalid era: `+e.era);a=q(a,n,0,t.length-1,r?.round),i.era=t[a],bo(i);break}case`year`:i.calendar.isInverseEra?.(i)&&(n=-n),i.year=q(e.year,n,-1/0,9999,r?.round),i.year===-1/0&&(i.year=1),i.calendar.balanceYearMonth&&i.calendar.balanceYearMonth(i,e);break;case`month`:i.month=q(e.month,n,1,e.calendar.getMonthsInYear(e),r?.round);break;case`day`:i.day=q(e.day,n,1,e.calendar.getDaysInMonth(e),r?.round);break;default:throw Error(`Unsupported field `+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(i),bo(i),i}function Mo(e,t,n,r){let i=e.copy();switch(t){case`hour`:{let t=e.hour,a=0,o=23;if(r?.hourCycle===12){let e=t>=12;a=e?12:0,o=e?23:11}i.hour=q(t,n,a,o,r?.round);break}case`minute`:i.minute=q(e.minute,n,0,59,r?.round);break;case`second`:i.second=q(e.second,n,0,59,r?.round);break;case`millisecond`:i.millisecond=q(e.millisecond,n,0,999,r?.round);break;default:throw Error(`Unsupported field `+t)}return i}function q(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function No(e,t){let n;return n=t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0?to(ho(ao(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days}),e.timeZone):Ya(e)-e.offset,n+=t.milliseconds||0,n+=(t.seconds||0)*1e3,n+=(t.minutes||0)*6e4,n+=(t.hours||0)*36e5,so(ro(n,e.timeZone),e.calendar)}function Po(e,t){return No(e,xo(t))}function Fo(e,t,n,r){switch(t){case`hour`:{let t=0,i=23;if(r?.hourCycle===12){let n=e.hour>=12;t=n?12:0,i=n?23:11}let a=ao(e),o=so(wo(a,{hour:t}),new ga),s=[to(o,e.timeZone,`earlier`),to(o,e.timeZone,`later`)].filter(t=>ro(t,e.timeZone).day===o.day)[0],c=so(wo(a,{hour:i}),new ga),l=[to(c,e.timeZone,`earlier`),to(c,e.timeZone,`later`)].filter(t=>ro(t,e.timeZone).day===c.day).pop(),u=Ya(e)-e.offset,d=Math.floor(u/Lo),f=u%Lo;return u=q(d,n,Math.floor(s/Lo),Math.floor(l/Lo),r?.round)*Lo+f,so(ro(u,e.timeZone),e.calendar)}case`minute`:case`second`:case`millisecond`:return Mo(e,t,n,r);case`era`:case`year`:case`month`:case`day`:return so(ro(to(jo(ao(e),t,n,r),e.timeZone),e.timeZone),e.calendar);default:throw Error(`Unsupported field `+t)}}function Io(e,t,n){let r=ao(e),i=wo(Co(r,t),t);return i.compare(r)===0?e:so(ro(to(i,e.timeZone,n),e.timeZone),e.calendar)}var Lo;function Ro(){return(Ro=t((()=>{mo(),_a(),Lo=36e5})))()}function zo(e){let t=e.match(Jo);if(!t)throw Error(`Invalid ISO 8601 time string: `+e);return new ns(Ho(t[1],0,23),t[2]?Ho(t[2],0,59):0,t[3]?Ho(t[3],0,59):0,t[4]?Ho(t[4],0,1/0)*1e3:0)}function Bo(e){let t=e.match(Yo);if(!t)throw Zo.test(e)?Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date string: `+e);let n=new ts(Ho(t[1],0,9999),Ho(t[2],1,12),1);return n.day=Ho(t[3],1,n.calendar.getDaysInMonth(n)),n}function Vo(e){let t=e.match(Xo);if(!t)throw Zo.test(e)?Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date time string: `+e);let n=Ho(t[1],-9999,9999),r=new rs(n<1?`BC`:`AD`,n<1?-n+1:n,Ho(t[2],1,12),1,t[4]?Ho(t[4],0,23):0,t[5]?Ho(t[5],0,59):0,t[6]?Ho(t[6],0,59):0,t[7]?Ho(t[7],0,1/0)*1e3:0);return r.day=Ho(t[3],0,r.calendar.getDaysInMonth(r)),r}function Ho(e,t,n){let r=Number(e);if(r<t||r>n)throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);return r}function Uo(e){return`${String(e.hour).padStart(2,`0`)}:${String(e.minute).padStart(2,`0`)}:${String(e.second).padStart(2,`0`)}${e.millisecond?String(e.millisecond/1e3).slice(1):``}`}function Wo(e){let t=so(e,new ga),n;return n=t.era===`BC`?t.year===1?`0000`:`-`+String(Math.abs(1-t.year)).padStart(6,`00`):String(t.year).padStart(4,`0`),`${n}-${String(t.month).padStart(2,`0`)}-${String(t.day).padStart(2,`0`)}`}function Go(e){return`${Wo(e)}T${Uo(e)}`}function Ko(e){let t=Math.sign(e)<0?`-`:`+`;e=Math.abs(e);let n=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%36e5%6e4/1e3),a=`${t}${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`;return i!==0&&(a+=`:${String(i).padStart(2,`0`)}`),a}function qo(e){return`${Go(e)}${Ko(e.offset)}[${e.timeZone}]`}var Jo,Yo,Xo,Zo,Qo;function $o(){return($o=t((()=>{as(),mo(),_a(),Jo=/^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Yo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,Xo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Zo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,Qo=[`hours`,`minutes`,`seconds`],[...Qo]})))()}function es(e){let t=typeof e[0]==`object`?e.shift():new ga,n;if(typeof e[0]==`string`)n=e.shift();else{let e=t.getEras();n=e[e.length-1]}let r=e.shift(),i=e.shift(),a=e.shift();return[t,n,r,i,a]}var ts,ns,rs,is;function as(){return(as=t((()=>{Ro(),Ja(),$o(),_a(),mo(),ts=class e{constructor(...e){let[t,n,r,i,a]=es(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day):new e(this.calendar,this.year,this.month,this.day)}add(e){return ho(this,e)}subtract(e){return So(this,e)}set(e){return Co(this,e)}cycle(e,t,n){return jo(this,e,t,n)}toDate(e){return no(this,e)}toString(){return Wo(this)}compare(e){return Oa(this,e)}},ns=class e{constructor(e=0,t=0,n=0,r=0){this.hour=e,this.minute=t,this.second=n,this.millisecond=r,Eo(this)}copy(){return new e(this.hour,this.minute,this.second,this.millisecond)}add(e){return ko(this,e)}subtract(e){return Ao(this,e)}set(e){return wo(this,e)}cycle(e,t,n){return Mo(this,e,t,n)}toString(){return Uo(this)}compare(e){return ka(this,e)}},rs=class e{constructor(...e){let[t,n,r,i,a]=es(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return ho(this,e)}subtract(e){return So(this,e)}set(e){return Co(wo(this,e),e)}cycle(e,t,n){switch(e){case`era`:case`year`:case`month`:case`day`:return jo(this,e,t,n);default:return Mo(this,e,t,n)}}toDate(e,t){return no(this,e,t)}toString(){return Go(this)}compare(e){let t=Oa(this,e);return t===0?ka(this,ao(e)):t}},is=class e{constructor(...e){let[t,n,r,i,a]=es(e),o=e.shift(),s=e.shift();this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.timeZone=o,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return No(this,e)}subtract(e){return Po(this,e)}set(e,t){return Io(this,e,t)}cycle(e,t,n){return Fo(this,e,t,n)}toDate(){return lo(this)}toString(){return qo(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-co(e,this.timeZone).toDate().getTime()}}})))()}function os(e){let t=ls.findIndex(([t,n,r])=>e.year<t||e.year===t&&e.month<n||e.year===t&&e.month===n&&e.day<r);return t===-1?ls.length-1:t===0?0:t-1}function ss(e){let t=ds[fs.indexOf(e.era)];if(!t)throw Error(`Unknown era: `+e.era);return new ts(e.year+t,e.month,e.day)}function cs(e){if(e.year===1){let t=fs.indexOf(e.era);return ls[t]}}var ls,us,ds,fs,ps;function ms(){return(ms=t((()=>{as(),_a(),ls=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],us=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],ds=[1867,1911,1925,1988,2018],fs=[`meiji`,`taisho`,`showa`,`heisei`,`reiwa`],ps=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=os(t);return new ts(this,fs[n],t.year-ds[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(ss(e))}balanceDate(e){let t=ss(e),n=os(t);fs[n]!==e.era&&(e.era=fs[n],e.year=t.year-ds[n]),this.constrainDate(e)}constrainDate(e){let t=fs.indexOf(e.era),n=us[t];if(n!=null){let[r,i,a]=n,o=r-ds[t];e.year=Math.max(1,Math.min(o,e.year)),e.year===o&&(e.month=Math.min(i,e.month),e.month===i&&(e.day=Math.min(a,e.day)))}if(e.year===1&&t>=0){let[,n,r]=ls[t];e.month=Math.max(n,e.month),e.month===n&&(e.day=Math.max(r,e.day))}}getEras(){return fs}getYearsInEra(e){let t=fs.indexOf(e.era),n=ls[t],r=ls[t+1];if(r==null)return 9999-n[0]+1;let i=r[0]-n[0];return(e.month<r[1]||e.month===r[1]&&e.day<r[2])&&i++,i}getDaysInMonth(e){return super.getDaysInMonth(ss(e))}getMinimumMonthInYear(e){let t=cs(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=cs(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier=`japanese`}}})))()}function hs(e){let[t,n]=pa(e.year+gs);return new ts(t,n,e.month,e.day)}var gs,_s;function vs(){return(vs=t((()=>{as(),_a(),gs=-543,_s=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=fa(t.era,t.year);return new ts(this,n-gs,t.month,t.day)}toJulianDay(e){return super.toJulianDay(hs(e))}getEras(){return[`BE`]}getDaysInMonth(e){return super.getDaysInMonth(hs(e))}balanceDate(){}constructor(...e){super(...e),this.identifier=`buddhist`}}})))()}function ys(e){return e.era===`minguo`?e.year+Ss:1-e.year+Ss}function bs(e){let t=e-Ss;return t>0?[`minguo`,t]:[`before_minguo`,1-t]}function xs(e){let[t,n]=pa(ys(e));return new ts(t,n,e.month,e.day)}var Ss,Cs;function ws(){return(ws=t((()=>{as(),_a(),Ss=1911,Cs=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),[n,r]=bs(fa(t.era,t.year));return new ts(this,n,r,t.month,t.day)}toJulianDay(e){return super.toJulianDay(xs(e))}getEras(){return[`before_minguo`,`minguo`]}balanceDate(e){let[t,n]=bs(ys(e));e.era=t,e.year=n}isInverseEra(e){return e.era===`before_minguo`}getDaysInMonth(e){return super.getDaysInMonth(xs(e))}getYearsInEra(e){return e.era===`before_minguo`?9999:8088}constructor(...e){super(...e),this.identifier=`roc`}}})))()}var Ts,Es,Ds;function Os(){return(Os=t((()=>{as(),Ts=1948320,Es=[0,31,62,93,124,155,186,216,246,276,306,336],Ds=class{fromJulianDay(e){let t=e-Ts,n=1+Math.floor((33*t+3)/12053),r=t-(365*(n-1)+Math.floor((8*n+21)/33)),i=Math.floor(r<216?r/31:(r-6)/30),a=r-Es[i]+1;return new ts(this,n,i+1,a)}toJulianDay(e){let t=1948319+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=Es[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||K(25*e.year+11,33)<8?30:29}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getEras(){return[`AP`]}getYearsInEra(){return 9377}constructor(){this.identifier=`persian`}}})))()}var ks,As,js;function Ms(){return(Ms=t((()=>{as(),_a(),ks=78,As=80,js=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-ks,r=e-ua(t.era,t.year,1,1),i;r<As?(n--,i=da(t.year-1)?31:30,r+=i+155+90+10):(i=da(t.year)?31:30,r-=As);let a,o;if(r<i)a=1,o=r+1;else{let e=r-i;e<155?(a=Math.floor(e/31)+2,o=e%31+1):(e-=155,a=Math.floor(e/30)+7,o=e%30+1)}return new ts(this,n,a,o)}toJulianDay(e){let[t,n]=pa(e.year+ks),r,i;return da(n)?(r=31,i=ua(t,n,3,21)):(r=30,i=ua(t,n,3,22)),e.month===1?i+e.day-1:(i+=r+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&da(e.year+ks)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return[`saka`]}balanceDate(){}constructor(...e){super(...e),this.identifier=`indian`}}})))()}function Ns(e,t,n,r){return r+Math.ceil(29.5*(n-1))+(t-1)*354+Math.floor((3+11*t)/30)+e-1}function Ps(e,t,n){let r=Math.floor((30*(n-t)+10646)/10631),i=Math.min(12,Math.ceil((n-(29+Ns(t,r,1,1)))/29.5)+1),a=n-Ns(t,r,i,1)+1;return new ts(e,r,i,a)}function Fs(e){return(14+11*e)%30<11}function Is(e){return Ws+Ys[e-Hs]}function Ls(e,t){let n=e-Hs,r=1<<11-(t-1);return(Js[n]&r)===0?29:30}function Rs(e,t){let n=Is(e);for(let r=1;r<t;r++)n+=Ls(e,r);return n}function zs(e){return Ys[e+1-Hs]-Ys[e-Hs]}var Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs;function Zs(){return(Zs=t((()=>{as(),Bs=1948440,Vs=1948439,Hs=1300,Us=1600,Ws=460322,Gs=class{fromJulianDay(e){return Ps(this,Bs,e)}toJulianDay(e){return Ns(Bs,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Fs(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Fs(e.year)?355:354}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9665}getEras(){return[`AH`]}constructor(){this.identifier=`islamic-civil`}},Ks=class extends Gs{fromJulianDay(e){return Ps(this,Vs,e)}toJulianDay(e){return Ns(Vs,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier=`islamic-tbla`}},qs=`qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=`,Xs=class extends Gs{constructor(){if(super(),this.identifier=`islamic-umalqura`,Js||=new Uint16Array(Uint8Array.from(atob(qs),e=>e.charCodeAt(0)).buffer),!Ys){Ys=new Uint32Array(301);let e=0;for(let t=Hs;t<=Us;t++){Ys[t-Hs]=e;for(let n=1;n<=12;n++)e+=Ls(t,n)}}}fromJulianDay(e){let t=e-Bs,n=Is(Hs),r=Is(Us);if(t<n||t>r)return super.fromJulianDay(e);{let e=1299,n=1,r=1;for(;r>0;){e++,r=t-Is(e)+1;let i=zs(e);if(r===i){n=12;break}if(r<i){let t=Ls(e,n);for(n=1;r>t;)r-=t,n++,t=Ls(e,n);break}}return new ts(this,e,n,t-Rs(e,n)+1)}}toJulianDay(e){return e.year<Hs||e.year>Us?super.toJulianDay(e):Bs+Rs(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<Hs||e.year>Us?super.getDaysInMonth(e):Ls(e.year,e.month)}getDaysInYear(e){return e.year<Hs||e.year>Us?super.getDaysInYear(e):zs(e.year)}}})))()}function Qs(e){return K(e*7+1,19)<7}function $s(e){let t=Math.floor((235*e-234)/19),n=12084+13753*t,r=t*29+Math.floor(n/25920);return K(3*(r+1),7)<3&&(r+=1),r}function ec(e){let t=$s(e-1),n=$s(e);return $s(e+1)-n===356?2:+(n-t===382)}function tc(e){return $s(e)+ec(e)}function nc(e){return tc(e+1)-tc(e)}function rc(e){let t=nc(e);switch(t>380&&(t-=30),t){case 353:return 0;case 354:return 1;case 355:return 2}}function ic(e,t){if(t>=6&&!Qs(e)&&t++,t===4||t===7||t===9||t===11||t===13)return 29;let n=rc(e);return t===2?n===2?30:29:t===3?n===0?29:30:t===6?Qs(e)?30:0:30}var ac,oc,sc,cc;function lc(){return(lc=t((()=>{as(),ac=347997,oc=25920,sc=765433,cc=class{fromJulianDay(e){let t=e-ac,n=t*oc/sc,r=Math.floor((19*n+234)/235)+1,i=tc(r),a=Math.floor(t-i);for(;a<1;)r--,i=tc(r),a=Math.floor(t-i);let o=1,s=0;for(;s<a;)s+=ic(r,o),o++;o--,s-=ic(r,o);let c=a-s;return new ts(this,r,o,c)}toJulianDay(e){let t=tc(e.year);for(let n=1;n<e.month;n++)t+=ic(e.year,n);return t+e.day+ac}getDaysInMonth(e){return ic(e.year,e.month)}getMonthsInYear(e){return Qs(e.year)?13:12}getDaysInYear(e){return nc(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9999}getEras(){return[`AM`]}balanceYearMonth(e,t){t.year!==e.year&&(Qs(t.year)&&!Qs(e.year)&&t.month>6?e.month--:!Qs(t.year)&&Qs(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier=`hebrew`}}})))()}function uc(e,t,n,r){return e+365*t+Math.floor(t/4)+30*(n-1)+r-1}function dc(e,t){let n=Math.floor(4*(t-e)/1461),r=1+Math.floor((t-uc(e,n,1,1))/30);return[n,r,t+1-uc(e,n,r,1)]}function fc(e){return Math.floor(e%4/3)}function pc(e,t){return t%13==0?fc(e)+5:30}var mc,hc,gc,_c,vc,yc;function bc(){return(bc=t((()=>{as(),mc=1723856,hc=1824665,gc=5500,_c=class{fromJulianDay(e){let[t,n,r]=dc(mc,e),i=`AM`;return t<=0&&(i=`AA`,t+=gc),new ts(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`AA`&&(t-=gc),uc(mc,t,e.month,e.day)}getDaysInMonth(e){return pc(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+fc(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(e){return e.era===`AA`?9999:9991}getEras(){return[`AA`,`AM`]}constructor(){this.identifier=`ethiopic`}},vc=class extends _c{fromJulianDay(e){let[t,n,r]=dc(mc,e);return t+=gc,new ts(this,`AA`,t,n,r)}getEras(){return[`AA`]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier=`ethioaa`}},yc=class extends _c{fromJulianDay(e){let[t,n,r]=dc(hc,e),i=`CE`;return t<=0&&(i=`BCE`,t=1-t),new ts(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`BCE`&&(t=1-t),uc(hc,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era===`BCE`&&(t=1-t),pc(t,e.month)}isInverseEra(e){return e.era===`BCE`}balanceDate(e){e.year<=0&&(e.era=e.era===`BCE`?`CE`:`BCE`,e.year=1-e.year)}getEras(){return[`BCE`,`CE`]}getYearsInEra(e){return e.era===`BCE`?9999:9715}constructor(...e){super(...e),this.identifier=`coptic`}}})))()}function xc(e){switch(e){case`buddhist`:return new _s;case`ethiopic`:return new _c;case`ethioaa`:return new vc;case`coptic`:return new yc;case`hebrew`:return new cc;case`indian`:return new js;case`islamic-civil`:return new Gs;case`islamic-tbla`:return new Ks;case`islamic-umalqura`:return new Xs;case`japanese`:return new ps;case`persian`:return new Ds;case`roc`:return new Cs;default:return new ga}}function Sc(){return(Sc=t((()=>{vs(),bc(),_a(),lc(),Ms(),Zs(),ms(),Os(),ws()})))()}function Cc(e,t={}){if(typeof t.hour12==`boolean`&&wc()){t={...t};let n=kc[String(t.hour12)][e.split(`-`)[0]],r=t.hour12?`h12`:`h23`;t.hourCycle=n??r,delete t.hour12}let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(Dc.has(n))return Dc.get(n);let r=new Intl.DateTimeFormat(e,t);return Dc.set(n,r),r}function wc(){return Ac??=new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,hour12:!1}).format(new Date(2020,2,3,0))===`24`,Ac}function Tc(){return jc??=new Intl.DateTimeFormat(`fr`,{hour:`numeric`,hour12:!1}).resolvedOptions().hourCycle===`h12`,jc}function Ec(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,``),e+=(e.includes(`-u-`)?``:`-u`)+`-nu-latn`;let n=Cc(e,{...t,timeZone:void 0}),r=parseInt(n.formatToParts(new Date(2020,2,3,0)).find(e=>e.type===`hour`).value,10),i=parseInt(n.formatToParts(new Date(2020,2,3,23)).find(e=>e.type===`hour`).value,10);if(r===0&&i===23)return`h23`;if(r===24&&i===23)return`h24`;if(r===0&&i===11)return`h11`;if(r===12&&i===11)return`h12`;throw Error(`Unexpected hour cycle result`)}var Dc,Oc,kc,Ac,jc;function Mc(){return(Mc=t((()=>{Dc=new Map,Oc=class{constructor(e,t={}){this.formatter=Cc(e,t),this.options=t}format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange==`function`)return this.formatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts==`function`)return this.formatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.formatter.formatToParts(e),r=this.formatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return Tc()&&(this.resolvedHourCycle||=Ec(e.locale,this.options),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle===`h11`||this.resolvedHourCycle===`h12`),e.calendar===`ethiopic-amete-alem`&&(e.calendar=`ethioaa`),e}},kc={true:{ja:`h11`},false:{}},Ac=null,jc=null})))()}function Nc(e){e=sa(e??{},Pc);let{locale:t}=A();return(0,Fc.useMemo)(()=>new Oc(t,e),[t,e])}function Pc(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(t[r]!==e[r])return!1;return!0}var Fc;function Ic(){return(Ic=t((()=>{la(),ve(),Mc(),Fc=r()})))()}function Lc(e){return e&&e.__esModule?e.default:e}function Rc(e){return e?.calendar.identifier===`gregory`&&e.era===`BC`?`short`:void 0}function zc(e){let t=E(Lc(aa),`@react-aria/calendar`),n,r;`highlightedRange`in e?{start:n,end:r}=e.highlightedRange||{}:(n=Array.isArray(e.value)?e.value[0]:e.value??void 0,r=Array.isArray(e.value)?e.value.at(-1):e.value??void 0);let i=Nc({weekday:`long`,month:`long`,year:`numeric`,day:`numeric`,era:Rc(n)||Rc(r),timeZone:e.timeZone}),{locale:a}=A(),o=(0,Hc.useMemo)(()=>new Intl.ListFormat(a),[a]),s=`anchorDate`in e?e.anchorDate:null;return(0,Hc.useMemo)(()=>{if(!s&&n&&r){if(ba(n,r)){let r=i.format(n.toDate(e.timeZone));return t.format(`selectedDateDescription`,{date:r})}if(`highlightedRange`in e){let a=Vc(i,t,n,r,e.timeZone);return t.format(`selectedRangeDescription`,{dateRange:a})}if(Array.isArray(e.value)){let n=e.value.map(t=>i.format(t.toDate(e.timeZone))),r=o.format(n);return t.format(`selectedDateDescription`,{date:r})}}return``},[n,r,s,e,t,i,o])}function Bc(e,t,n,r){let i=E(Lc(aa),`@react-aria/calendar`),a=Rc(e)||Rc(t),o=Nc({month:`long`,year:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n}),s=Nc({month:`long`,year:`numeric`,day:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n});return(0,Hc.useMemo)(()=>{if(ba(e,Na(e))){let a=e,s=t;if(e.calendar.getFormattableMonth&&(a=e.calendar.getFormattableMonth(e)),t.calendar.getFormattableMonth&&(s=t.calendar.getFormattableMonth(t)),ba(t,Pa(e)))return o.format(a.toDate(n));if(ba(t,Pa(t)))return r?Vc(o,i,a,s,n):o.formatRange(a.toDate(n),s.toDate(n))}return r?Vc(s,i,e,t,n):s.formatRange(e.toDate(n),t.toDate(n))},[e,t,o,s,i,n,r])}function Vc(e,t,n,r,i){let a=e.formatRangeToParts(n.toDate(i),r.toDate(i)),o=-1;for(let e=0;e<a.length;e++){let t=a[e];if(t.source===`shared`&&t.type===`literal`)o=e;else if(t.source===`endRange`)break}let s=``,c=``;for(let e=0;e<a.length;e++)e<o?s+=a[e].value:e>o&&(c+=a[e].value);return t.format(`dateRange`,{startDate:s,endDate:c})}var Hc,Uc;function Wc(){return(Wc=t((()=>{oa(),Ic(),ve(),ue(),Ja(),Hc=r(),Uc=new WeakMap})))()}function Gc(e,t){let n=(0,Kc.useRef)(!0),r=(0,Kc.useRef)(null),i=B(e);(0,Kc.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[]),(0,Kc.useEffect)(()=>{let e=r.current;n.current?n.current=!1:(!e||t.some((t,n)=>!Object.is(t,e[n])))&&i(),r.current=t},t)}var Kc;function qc(){return(qc=t((()=>{d(),Kc=r()})))()}function Jc(e){return e&&e.__esModule?e.default:e}function Yc(e,t){let n=E(Jc(aa),`@react-aria/calendar`),r=xt(e),i=Bc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!1),a=Bc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!0);Gc(()=>{t.isFocused||zr(a)},[a]);let o=zc(t);Gc(()=>{o&&zr(o,`polite`,4e3)},[o]);let s=Je([!!e.errorMessage,e.isInvalid,e.validationState]);Uc.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:e[`aria-labelledby`],errorMessageId:s,selectedDateDescription:o});let[c,l]=(0,Xc.useState)(!1),u=e.isDisabled||t.isNextVisibleRangeInvalid();u&&c&&(l(!1),t.setFocused(!0));let[d,f]=(0,Xc.useState)(!1),p=e.isDisabled||t.isPreviousVisibleRangeInvalid();p&&d&&(f(!1),t.setFocused(!0));let m=ge({id:e.id,"aria-label":[e[`aria-label`],a].filter(Boolean).join(`, `),"aria-labelledby":e[`aria-labelledby`]});return{calendarProps:U(r,m,{role:`application`,"aria-details":e[`aria-details`]||void 0,"aria-describedby":e[`aria-describedby`]||void 0}),nextButtonProps:{onPress:()=>t.focusNextPage(),"aria-label":n.format(`next`),isDisabled:u,onFocusChange:l},prevButtonProps:{onPress:()=>t.focusPreviousPage(),"aria-label":n.format(`previous`),isDisabled:p,onFocusChange:f},errorMessageProps:{id:s},title:i}}var Xc;function Zc(){return(Zc=t((()=>{Wr(),m(),Wc(),oa(),V(),be(),ue(),Le(),qc(),Xc=r()})))()}function Qc(e,t){return Yc(e,t)}function $c(){return($c=t((()=>{Zc()})))()}function el(e,t){let n=[],r=document.scrollingElement||document.documentElement;for(;e&&(v(e,t)&&n.push(e),e!==r);)e=e.parentElement;return n}function tl(){return(tl=t((()=>{})))()}function nl(e,t,n={}){let{block:r=`nearest`,inline:i=`nearest`}=n;if(e===t)return;let a=e.scrollTop,o=e.scrollLeft,s=t.getBoundingClientRect(),c=e.getBoundingClientRect(),l=window.getComputedStyle(t),u=window.getComputedStyle(e),d=document.scrollingElement||document.documentElement,f=e===d,p=e===d?0:c.top,m=e===d?e.clientHeight:c.bottom,h=e===d?0:c.left,g=e===d?e.clientWidth:c.right,_=parseFloat(l.scrollMarginTop)||0,v=parseFloat(l.scrollMarginBottom)||0,y=parseFloat(l.scrollMarginLeft)||0,b=parseFloat(l.scrollMarginRight)||0,x=parseFloat(u.scrollPaddingTop)||0,S=parseFloat(u.scrollPaddingBottom)||0,C=parseFloat(u.scrollPaddingLeft)||0,w=parseFloat(u.scrollPaddingRight)||0,T=parseFloat(u.borderTopWidth)||0,E=parseFloat(u.borderBottomWidth)||0,D=parseFloat(u.borderLeftWidth)||0,O=parseFloat(u.borderRightWidth)||0,k=s.top-_,A=s.bottom+v,j=s.left-y,M=s.right+b,N=e===d?0:D+O,P=e===d?0:T+E,F=e===d?0:e.offsetWidth-e.clientWidth-N,I=e===d?0:e.offsetHeight-e.clientHeight-P,L=p+(f?0:T)+x,R=m-(f?0:E)-S-I,z=h+(f?0:D)+C,ee=g-(f?0:O)-w;de()&&St()||u.direction===`ltr`?ee-=F:u.direction===`rtl`&&(z+=F);let te=k<L||A>R,ne=j<z||M>ee;if(te&&r===`start`)a+=k-L;else if(te&&r===`center`)a+=(k+A)/2-(L+R)/2;else if(te&&r===`end`)a+=A-R;else if(te&&r===`nearest`){let e=k-L,t=A-R;a+=Math.abs(e)<=Math.abs(t)?e:t}if(ne&&i===`start`)o+=j-z;else if(ne&&i===`center`)o+=(j+M)/2-(z+ee)/2;else if(ne&&i===`end`)o+=M-ee;else if(ne&&i===`nearest`){let e=j-z,t=M-ee;o+=Math.abs(e)<=Math.abs(t)?e:t}e.scrollTo({left:o,top:a})}function rl(e,t={}){let{containingElement:n}=t;if(e&&e.isConnected){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:r}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:i,top:a}=e.getBoundingClientRect();(Math.abs(t-i)>1||Math.abs(r-a)>1)&&(n?.scrollIntoView?.({block:`center`,inline:`center`}),e.scrollIntoView?.({block:`nearest`}))}else{let{left:t,top:r}=e.getBoundingClientRect(),i=el(e,!0);for(let t of i)nl(t,e);let{left:a,top:o}=e.getBoundingClientRect();if(Math.abs(t-a)>1||Math.abs(r-o)>1){i=n?el(n,!0):[];for(let e of i)nl(e,n,{block:`center`,inline:`center`});for(let t of el(e,!0))nl(t,e)}}}}function il(){return(il=t((()=>{tl(),he()})))()}function al(e){let[t,n]=(0,ol.useState)();return ye(()=>{if(!e)return;let t=cl.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${sl++}`;n(r);let i=document.createElement(`div`);i.id=r,i.style.display=`none`,i.textContent=e,document.body.appendChild(i),t={refCount:0,element:i},cl.set(e,t)}return t.refCount++,()=>{t&&--t.refCount===0&&(t.element.remove(),cl.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}var ol,sl,cl;function ll(){return(ll=t((()=>{_e(),ol=r(),sl=0,cl=new Map})))()}function ul(e){return e&&e.__esModule?e.default:e}function dl(e,t,n){let{date:r,isDisabled:i}=e,{errorMessageId:a,selectedDateDescription:o}=Uc.get(t),s=E(ul(aa),`@react-aria/calendar`),c=Nc({weekday:`long`,day:`numeric`,month:`long`,year:`numeric`,era:Rc(r),timeZone:t.timeZone}),l=t.isCellFocused(r)&&!e.isOutsideMonth;i=i||t.isCellDisabled(r)||!!e.isOutsideMonth;let u=t.isCellUnavailable(r),d=!i&&!u,f=t.isSelected(r)&&d,p=!1;t.isValueInvalid&&(`highlightedRange`in t?p=!t.anchorDate&&t.highlightedRange!=null&&r.compare(t.highlightedRange.start)>=0&&r.compare(t.highlightedRange.end)<=0:Array.isArray(t.value)?p=t.value.some(e=>ba(e,r)):t.value&&(p=ba(t.value,r))),p&&!i&&(f=!0),r=sa(r,Sa);let m=(0,fl.useMemo)(()=>r.toDate(t.timeZone),[r,t.timeZone]),h=wa(r,t.timeZone),g=(0,fl.useMemo)(()=>{let e=``;return`highlightedRange`in t&&t.value&&!t.anchorDate&&(ba(r,t.value.start)||ba(r,t.value.end))&&(e=o+`, `),e+=c.format(m),h?e=s.format(f?`todayDateSelected`:`todayDate`,{date:e}):f&&(e=s.format(`dateSelected`,{date:e})),t.minValue&&ba(r,t.minValue)?e+=`, `+s.format(`minimumDate`):t.maxValue&&ba(r,t.maxValue)&&(e+=`, `+s.format(`maximumDate`)),e},[c,m,s,f,h,r,t,o]),v=``;`anchorDate`in t&&l&&!t.isReadOnly&&d&&(v=t.anchorDate?s.format(`finishRangeSelectionPrompt`):s.format(`startRangeSelectionPrompt`));let y=al(v),b=(0,fl.useRef)(!1),x=(0,fl.useRef)(!1),S=(0,fl.useRef)(void 0),{pressProps:C,isPressed:w}=xr({shouldCancelOnPointerExit:`anchorDate`in t&&!!t.anchorDate,preventFocusOnPress:!0,isDisabled:!d||t.isReadOnly,onPressStart(e){if(t.isReadOnly){t.setFocusedDate(r),t.setFocused(!0);return}if(`highlightedRange`in t&&!t.anchorDate&&(e.pointerType===`mouse`||e.pointerType===`touch`)){if(t.highlightedRange&&!p){if(ba(r,t.highlightedRange.start)){t.setAnchorDate(t.highlightedRange.end),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}if(ba(r,t.highlightedRange.end)){t.setAnchorDate(t.highlightedRange.start),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}}let n=()=>{t.setDragging(!0),S.current=void 0,t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0),b.current=!0};e.pointerType===`touch`?S.current=setTimeout(n,200):n()}},onPressEnd(){x.current=!1,b.current=!1,clearTimeout(S.current),S.current=void 0},onPress(){!(`anchorDate`in t)&&!t.isReadOnly&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))},onPressUp(e){t.isReadOnly||(`anchorDate`in t&&S.current&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)),`anchorDate`in t&&(x.current?t.setAnchorDate(r):t.anchorDate&&!b.current?(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)):e.pointerType===`keyboard`&&!t.anchorDate?(t.selectDate(r),t.focusNearestAvailableDate(r)):e.pointerType===`virtual`&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))))}}),T;i||(T=ba(r,t.focusedDate)?0:-1),(0,fl.useEffect)(()=>{l&&n.current&&(Ke(n.current),_()!==`pointer`&&ut()===n.current&&rl(n.current,{containingElement:ce(n.current)}))},[l,n]);let D=Nc({day:`numeric`,timeZone:t.timeZone,calendar:r.calendar.identifier}),O=(0,fl.useMemo)(()=>D.formatToParts(m).find(e=>e.type===`day`).value,[D,m]);return{cellProps:{role:`gridcell`,"aria-disabled":!d||void 0,"aria-selected":f||void 0,"aria-invalid":p||void 0},buttonProps:U(C,{onFocus(){i||(t.setFocusedDate(r),t.setFocused(!0))},tabIndex:T,role:`button`,"aria-disabled":!d||void 0,"aria-label":g,"aria-invalid":p||void 0,"aria-describedby":[p?a:void 0,y[`aria-describedby`]].filter(Boolean).join(` `)||void 0,onPointerEnter(e){`highlightDate`in t&&(e.pointerType!==`touch`||t.isDragging)&&d&&t.highlightDate(r)},onPointerDown(e){let t=H(e);t instanceof HTMLElement&&`releasePointerCapture`in t&&(`hasPointerCapture`in t?t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId):t.releasePointerCapture(e.pointerId))},onContextMenu(e){e.preventDefault()}}),isPressed:w,isFocused:l,isSelected:f,isDisabled:i,isUnavailable:u,isOutsideVisibleRange:r.compare(t.visibleRange.start)<0||r.compare(t.visibleRange.end)>0,isInvalid:p,formattedDate:O}}var fl;function pl(){return(pl=t((()=>{pt(),Be(),Wc(),ee(),b(),oa(),V(),il(),Ic(),la(),ll(),ue(),Pr(),Ja(),fl=r()})))()}function ml(e,t){let{startDate:n=t.visibleRange.start,endDate:r=t.visibleRange.end,firstDayOfWeek:i}=e,{direction:a}=A(),{keyboardProps:o}=et({shortcuts:{End:()=>{t.focusSectionEnd()},Home:()=>{t.focusSectionStart()},Escape:()=>(`setAnchorDate`in t&&t.setAnchorDate(null),!1)}}),{keyboardProps:s}=et({shortcuts:{Enter:()=>{t.selectFocusedDate()}," ":()=>{t.selectFocusedDate()},PageUp:()=>{t.focusPreviousSection()},"Shift+PageUp":()=>{t.focusPreviousSection(!0)},PageDown:()=>{t.focusNextSection()},"Shift+PageDown":()=>{t.focusNextSection(!0)},ArrowLeft:()=>{a===`rtl`?t.focusNextDay():t.focusPreviousDay()},ArrowUp:()=>{t.focusPreviousRow()},ArrowRight:()=>{a===`rtl`?t.focusPreviousDay():t.focusNextDay()},ArrowDown:()=>{t.focusNextRow()}},allowRepeats:!0}),c=Bc(n,r,t.timeZone,!0),{ariaLabel:l,ariaLabelledBy:u}=Uc.get(t),d=ge({"aria-label":[l,c].filter(Boolean).join(`, `),"aria-labelledby":u}),f=Nc({weekday:e.weekdayStyle||`narrow`,timeZone:t.timeZone}),{locale:p}=A(),m=(0,hl.useMemo)(()=>{let e=t.visibleDuration.days&&t.visibleDuration.days<7,r=e?n:Ia(Da(t.timeZone),p,i),a=e?t.visibleDuration.days:7;return[...Array(a).keys()].map(e=>{let n=r.add({days:e}).toDate(t.timeZone);return f.format(n)})},[p,t.timeZone,f,i,n,t.visibleDuration.days]),h=t.getWeeksInMonth(n);return{gridProps:U(d,{role:`grid`,"aria-readonly":t.isReadOnly||void 0,"aria-disabled":t.isDisabled||void 0,"aria-multiselectable":`highlightedRange`in t||t.selectionMode===`multiple`||void 0,onFocus:()=>t.setFocused(!0),onBlur:()=>t.setFocused(!1)},o,s),headerProps:{"aria-hidden":!0},weekDays:m,weeksInMonth:h}}var hl;function gl(){return(gl=t((()=>{Wc(),V(),Ic(),ct(),be(),ve(),Ja(),hl=r()})))()}function _l(e,t,n){let r=B(e=>{n&&!e.defaultPrevented&&n(t)});(0,vl.useEffect)(()=>{let t=e?.current?.form;return t?.addEventListener(`reset`,r),()=>{t?.removeEventListener(`reset`,r)}},[e])}var vl;function yl(){return(yl=t((()=>{d(),vl=r()})))()}function bl(e,t,n){let{validationBehavior:r,focus:i}=e;ye(()=>{if(r===`native`&&n?.current&&`setCustomValidity`in n.current&&!n.current.disabled){let e=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(` `)||`Invalid value.`:``;n.current.setCustomValidity(e),n.current.hasAttribute(`title`)||(n.current.title=``),t.realtimeValidation.isInvalid||t.updateValidation(Sl(n.current))}});let a=(0,wl.useRef)(!1),o=B(()=>{a.current||t.resetValidation()}),s=B(e=>{t.displayValidation.isInvalid||t.commitValidation();let r=n?.current?.form;!e.defaultPrevented&&n&&r&&Cl(r)===n.current&&(i?i():n.current?.focus(),gt(`keyboard`)),e.preventDefault()}),c=B(()=>{t.commitValidation()});(0,wl.useEffect)(()=>{let e=n?.current;if(!e)return;let t=e.form,r=t?.reset;return t&&(t.reset=()=>{a.current=!window.event||window.event.type===`message`&&H(window.event)instanceof MessagePort,r?.call(t),a.current=!1}),e.addEventListener(`invalid`,s),e.addEventListener(`change`,c),t?.addEventListener(`reset`,o),()=>{e.removeEventListener(`invalid`,s),e.removeEventListener(`change`,c),t?.removeEventListener(`reset`,o),t&&(t.reset=r)}},[n,r])}function xl(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function Sl(e){return{isInvalid:!e.validity.valid,validationDetails:xl(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function Cl(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(n.validity?.valid===!1)return n}return null}var wl;function Tl(){return(Tl=t((()=>{Be(),ee(),d(),_e(),wl=r()})))()}function El(e=!0){let[t,n]=(0,Ol.useState)(e),r=(0,Ol.useRef)(!1),i=(0,Ol.useCallback)(e=>{r.current=!0,n(!!e)},[]);return ye(()=>{r.current||n(!1)},[]),[i,t]}function Dl(e=!0){let t=Re(),[n,r]=El(e);return{id:r?t:void 0,ref:n}}var Ol;function kl(){return(kl=t((()=>{Le(),_e(),Ol=r()})))()}function Al(e){if(e.__reactAriaFormValidationState){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}=e[Vl];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}}return jl(e)}function jl(e){let{isInvalid:t,validationState:n,name:r,value:i,builtinValidation:a,validate:o,validationBehavior:s=`aria`}=e;n&&(t||=n===`invalid`);let c=t===void 0?null:{isInvalid:t,validationErrors:[],validationDetails:Rl},l=(0,Il.useMemo)(()=>!o||i==null?null:Pl(Nl(o,i)),[o,i]);a?.validationDetails.valid&&(a=void 0);let u=(0,Il.useContext)(Bl),d=(0,Il.useMemo)(()=>r?Array.isArray(r)?r.flatMap(e=>Ml(u[e])):Ml(u[r]):[],[u,r]),[f,p]=(0,Il.useState)(u),[m,h]=(0,Il.useState)(!1);u!==f&&(p(u),h(!1));let g=(0,Il.useMemo)(()=>Pl(m?[]:d),[m,d]),_=(0,Il.useRef)(zl),[v,y]=(0,Il.useState)(zl),b=(0,Il.useRef)(zl),x=()=>{if(!S)return;C(!1);let e=l||a||_.current;Fl(e,b.current)||(b.current=e,y(e))},[S,C]=(0,Il.useState)(!1);return(0,Il.useEffect)(x),{realtimeValidation:c||g||l||a||zl,displayValidation:s===`native`?c||g||v:c||g||l||a||v,updateValidation(e){s===`aria`&&!Fl(v,e)?y(e):_.current=e},resetValidation(){let e=zl;Fl(e,b.current)||(b.current=e,y(e)),s===`native`&&C(!1),h(!0)},commitValidation(){s===`native`&&C(!0),h(!0)}}}function Ml(e){return e?Array.isArray(e)?e:[e]:[]}function Nl(e,t){if(typeof e==`function`){let n=e(t);if(n&&typeof n!=`boolean`)return Ml(n)}return[]}function Pl(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:Rl}:null}function Fl(e,t){return e===t||!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((e,n)=>e===t.validationErrors[n])&&Object.entries(e.validationDetails).every(([e,n])=>t.validationDetails[e]===n)}var Il,Ll,Rl,zl,Bl,Vl;function Hl(){return(Hl=t((()=>{Il=r(),Ll={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Rl={...Ll,customError:!0,valid:!1},zl={isInvalid:!1,validationDetails:Ll,validationErrors:[]},Bl=(0,Il.createContext)({}),Vl=`__reactAriaFormValidationState`})))()}function Ul(e,t,n){let{isDisabled:r=!1,isReadOnly:i=!1,value:a,name:o,form:s,children:c,isRequired:l,validationBehavior:u=`aria`,"aria-label":d,"aria-labelledby":f,"aria-describedby":p,onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y}=e,b=Al({...e,value:t.isSelected}),{isInvalid:x,validationErrors:S,validationDetails:C}=b.displayValidation;bl(e,b,n);let w=e=>{e.stopPropagation(),t.setSelected(H(e).checked)},{pressProps:T,isPressed:E}=xr({onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y,isDisabled:r}),[D,O]=(0,Wl.useState)(!1),{pressProps:k}=xr({onPressStart(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}m?.(e),g?.(!0),O(!0)},onPressEnd(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}h?.(e),g?.(!1),O(!1)},onPressUp(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}v?.(e)},onClick:y,onPress(r){if(r.pointerType===`keyboard`||r.pointerType===`virtual`){r.continuePropagation();return}_?.(r),t.toggle(),n.current?.focus();let{[Vl]:i}=e,{commitValidation:a}=i||b;a()},isDisabled:r||i}),{focusableProps:A}=Ze(e,n),j=U(T,A),M=xt(e,{labelable:!0});_l(n,t.defaultSelected,t.setSelected);let N=Dl(),P=Dl();return{labelProps:U(k,{onClick:e=>e.preventDefault()}),inputProps:U(M,{checked:t.isSelected,"aria-required":l&&u===`aria`||void 0,required:l&&u===`native`,"aria-invalid":x||e.validationState===`invalid`||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-controls":e[`aria-controls`],"aria-readonly":i||void 0,"aria-describedby":[N.id,P.id,p].filter(Boolean).join(` `)||void 0,onChange:w,disabled:r,...a==null?{}:{value:a},name:o,form:s,type:`checkbox`,...j}),descriptionProps:N,errorMessageProps:P,isSelected:t.isSelected,isPressed:E||D,isDisabled:r,isReadOnly:i,isInvalid:x||e.validationState===`invalid`,validationErrors:S,validationDetails:C}}var Wl;function Gl(){return(Gl=t((()=>{m(),Be(),V(),at(),yl(),Tl(),Pr(),kl(),Wl=r(),Hl()})))()}function Kl(e,t,n){let{labelProps:r,inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}=Ul(e,t,n),{isIndeterminate:m}=e;return(0,ql.useEffect)(()=>{n.current&&(n.current.indeterminate=!!m)}),{labelProps:U(r,(0,ql.useMemo)(()=>({onMouseDown:e=>e.preventDefault()}),[])),inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}}var ql;function Jl(){return(Jl=t((()=>{Gl(),V(),ql=r()})))()}function Yl(e){let{id:t,label:n,"aria-labelledby":r,"aria-label":i,labelElementType:a=`label`}=e;t=Re(t);let o=Re(),s={};n&&(r=r?`${o} ${r}`:o,s={id:o,htmlFor:a===`label`?t:void 0});let c=ge({id:t,"aria-label":i,"aria-labelledby":r});return{labelProps:s,fieldProps:c}}function J(){return(J=t((()=>{Le(),be()})))()}function Xl(e){let{description:t,errorMessage:n,isInvalid:r,validationState:i}=e,{labelProps:a,fieldProps:o}=Yl(e),s=Je([!!t,!!n,r,i]),c=Je([!!t,!!n,r,i]);return o=U(o,{"aria-describedby":[s,c,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0}),{labelProps:a,fieldProps:o,descriptionProps:{id:s},errorMessageProps:{id:c}}}function Zl(){return(Zl=t((()=>{J(),V(),Le()})))()}function Ql(e={}){let{isReadOnly:t}=e,[n,r]=_t(e.isSelected,e.defaultSelected||!1,e.onChange),[i]=(0,$l.useState)(n);function a(e){t||r(e)}function o(){t||r(!n)}return{isSelected:n,defaultSelected:e.defaultSelected??i,setSelected:a,toggle:o}}var $l;function eu(){return(eu=t((()=>{oe(),$l=r()})))()}function tu(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}function nu(e,t={}){let{numberingSystem:n}=t;if(n&&e.includes(`-nu-`)&&(e.includes(`-u-`)||(e+=`-u-`),e+=`-nu-${n}`),t.style===`unit`&&!ou){let{unit:e,unitDisplay:n=`short`}=t;if(!e)throw Error(`unit option must be provided with style: "unit"`);if(!su[e]?.[n])throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);t={...t,style:`decimal`}}let r=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(iu.has(r))return iu.get(r);let i=new Intl.NumberFormat(e,t);return iu.set(r,i),i}function ru(e,t,n){if(t===`auto`)return e.format(n);if(t===`never`)return e.format(Math.abs(n));{let r=!1;if(t===`always`?r=n>0||Object.is(n,0):t===`exceptZero`&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):r=n>0),r){let t=e.format(-n),r=e.format(n),i=t.replace(r,``).replace(/\u200e|\u061C/,``);return[...i].length!==1&&console.warn(`@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case`),t.replace(r,`!!!`).replace(i,`+`).replace(`!!!`,r)}return e.format(n)}}var iu,au,ou,su,cu;function lu(){return(lu=t((()=>{iu=new Map,au=!1;try{au=new Intl.NumberFormat(`de-DE`,{signDisplay:`exceptZero`}).resolvedOptions().signDisplay===`exceptZero`}catch{}ou=!1;try{ou=new Intl.NumberFormat(`de-DE`,{style:`unit`,unit:`degree`}).resolvedOptions().style===`unit`}catch{}su={degree:{narrow:{default:`°`,"ja-JP":` 度`,"zh-TW":`度`,"sl-SI":` °`}}},cu=class{constructor(e,t={}){this.numberFormatter=nu(e,t),this.options=t}format(e){let t=``;if(t=!au&&this.options.signDisplay!=null?ru(this.numberFormatter,this.options.signDisplay,e):this.numberFormatter.format(e),this.options.style===`unit`&&!ou){let{unit:e,unitDisplay:n=`short`,locale:r}=this.resolvedOptions();if(!e)return t;let i=su[e]?.[n];t+=i[r]||i.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if(typeof this.numberFormatter.formatRange==`function`)return this.numberFormatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.format(e)} \u{2013} ${this.format(t)}`}formatRangeToParts(e,t){if(typeof this.numberFormatter.formatRangeToParts==`function`)return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.numberFormatter.formatToParts(e),r=this.numberFormatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!au&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!ou&&this.options.style===`unit`&&(e={...e,style:`unit`,unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}}})))()}function uu(e,t,n){let r=du(e,t);if(!e.includes(`-nu-`)&&!r.isValidPartialNumber(n)){for(let i of gu)if(i!==r.options.numberingSystem){let r=du(e+(e.includes(`-u-`)?`-nu-`:`-u-nu-`)+i,t);if(r.isValidPartialNumber(n))return r}}return r}function du(e,t){let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``),r=vu.get(n);return r||(r=new yu(e,t),vu.set(n,r)),r}function fu(e,t,n,r){let i=new Intl.NumberFormat(e,{...n,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:`auto`,roundingMode:`halfExpand`,useGrouping:!0}),a=i.formatToParts(-10000.111),o=i.formatToParts(10000.111),s=xu.map(e=>i.formatToParts(e)),c=s.map((e,t)=>{let n=e.find(e=>e.type===`unit`);return n&&!e.some(e=>e.type===`integer`||e.type===`fraction`)?{unit:n.value,value:xu[t]}:null}).filter(e=>!!e),l=a.find(e=>e.type===`minusSign`)?.value??`-`,u=o.find(e=>e.type===`plusSign`)?.value;!u&&(r?.signDisplay===`exceptZero`||r?.signDisplay===`always`)&&(u=`+`);let d=new Intl.NumberFormat(e,{...n,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(e=>e.type===`decimal`)?.value,f=a.find(e=>e.type===`group`)?.value,p=a.filter(e=>!bu.has(e.type)).map(e=>mu(e.value)),m=s.flatMap(e=>e.filter(e=>!bu.has(e.type)).map(e=>mu(e.value))),h=[...new Set([...p,...m])].sort((e,t)=>t.length-e.length),g=h.length===0?RegExp(`\\p{White_Space}|\\p{Cf}`,`gu`):RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`,`gu`),_=[...new Intl.NumberFormat(n.locale,{useGrouping:!1}).format(9876543210)].reverse(),v=new Map(_.map((e,t)=>[e,t])),y=RegExp(`[${_.join(``)}]`,`g`);return{minusSign:l,plusSign:u,decimal:d,group:f,literals:g,numeral:y,numerals:_,index:e=>String(v.get(e)),noNumeralUnits:c}}function pu(e,t,n){return e.replaceAll?e.replaceAll(t,n):e.split(t).join(n)}function mu(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}var hu,gu,_u,vu,yu,bu,xu;function Su(){return(Su=t((()=>{lu(),hu=RegExp(`^.*\\(.*\\).*$`),gu=[`latn`,`arab`,`hanidec`,`deva`,`beng`,`fullwide`],_u=class{constructor(e,t={}){this.locale=e,this.options=t}parse(e){return uu(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,n){return uu(this.locale,this.options,e).isValidPartialNumber(e,t,n)}getNumberingSystem(e){return uu(this.locale,this.options,e).options.numberingSystem}},vu=new Map,yu=class{constructor(e,t={}){this.locale=e,t.roundingIncrement!==1&&t.roundingIncrement!=null&&(t.maximumFractionDigits==null&&t.minimumFractionDigits==null?(t.maximumFractionDigits=0,t.minimumFractionDigits=0):t.maximumFractionDigits==null?t.maximumFractionDigits=t.minimumFractionDigits:t.minimumFractionDigits??=t.maximumFractionDigits),this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=fu(e,this.formatter,this.options,t),this.options.style===`percent`&&((this.options.minimumFractionDigits??0)>18||(this.options.maximumFractionDigits??0)>18)&&console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`)}parse(e){let t=this.formatter.resolvedOptions().useGrouping,n=this.sanitize(e);if(!t&&this.symbols.group&&n.includes(this.symbols.group))return NaN;if(this.symbols.group&&(n=n.replaceAll(this.symbols.group,``)),this.symbols.decimal&&(n=n.replace(this.symbols.decimal,`.`)),this.symbols.minusSign&&(n=n.replace(this.symbols.minusSign,`-`)),n=n.replace(this.symbols.numeral,this.symbols.index),this.options.style===`percent`){let e=n.indexOf(`-`);n=n.replace(`-`,``),n=n.replace(`+`,``);let t=n.indexOf(`.`);t===-1&&(t=n.length),n=n.replace(`.`,``),n=t-2==0?`0.${n}`:t-2==-1?`0.0${n}`:t-2==-2?`0.00`:`${n.slice(0,t-2)}.${n.slice(t-2)}`,e>-1&&(n=`-${n}`)}let r=n?+n:NaN;if(isNaN(r))return NaN;if(this.options.style===`percent`){let e={...this.options,style:`decimal`,minimumFractionDigits:Math.min((this.options.minimumFractionDigits??0)+2,20),maximumFractionDigits:Math.min((this.options.maximumFractionDigits??0)+2,20)};return new _u(this.locale,e).parse(new cu(this.locale,e).format(r))}return this.options.currencySign===`accounting`&&hu.test(e)&&(r=-1*r),r}sanitize(e){let t=this.formatter.resolvedOptions().useGrouping;return this.symbols.noNumeralUnits.length>0&&this.symbols.noNumeralUnits.find(t=>t.unit===e)?this.symbols.noNumeralUnits.find(t=>t.unit===e).value.toString():(e=e.replace(this.symbols.literals,``),this.symbols.minusSign&&(e=e.replace(`-`,this.symbols.minusSign)),this.options.numberingSystem===`arab`&&(this.symbols.decimal&&(e=pu(e,`,`,this.symbols.decimal),e=pu(e,`،`,this.symbols.decimal)),this.symbols.group&&t&&(e=pu(e,`.`,this.symbols.group))),this.symbols.group===`’`&&e.includes(`'`)&&t&&(e=pu(e,`'`,this.symbols.group)),this.symbols.group===`'`&&e.includes(`’`)&&t&&(e=pu(e,`’`,this.symbols.group)),this.options.locale===`fr-FR`&&this.symbols.group&&t&&(e=pu(e,` `,this.symbols.group),e=pu(e,/\u00A0/g,this.symbols.group)),e)}isValidPartialNumber(e,t=-1/0,n=1/0){let r=this.formatter.resolvedOptions().useGrouping;return e=this.sanitize(e),this.symbols.minusSign&&e.startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&n>0&&(e=e.slice(this.symbols.plusSign.length)),this.symbols.decimal&&e.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&r&&(e=pu(e,this.symbols.group,``)),e=e.replace(this.symbols.numeral,``),this.symbols.decimal&&(e=e.replace(this.symbols.decimal,``)),e.length===0)}},bu=new Set([`decimal`,`fraction`,`integer`,`minusSign`,`plusSign`,`group`]),xu=[0,4,2,1,11,20,3,7,100,21,.1,1.1]})))()}function Cu(e,t){let{inputElementType:n=`input`,isDisabled:r=!1,isRequired:i=!1,isReadOnly:a=!1,type:o=`text`,validationBehavior:s=`aria`}=e,[c,l]=_t(e.value,e.defaultValue||``,e.onChange),{focusableProps:u}=Ze(e,t),d=Al({...e,value:c}),{isInvalid:f,validationErrors:p,validationDetails:m}=d.displayValidation,{labelProps:h,fieldProps:g,descriptionProps:_,errorMessageProps:v}=Xl({...e,isInvalid:f,errorMessage:e.errorMessage||p}),y=xt(e,{labelable:!0}),b={type:o,pattern:e.pattern},[x]=(0,wu.useState)(c);return _l(t,e.defaultValue??x,l),bl(e,d,t),{labelProps:h,inputProps:U(y,n===`input`?b:void 0,{disabled:r,readOnly:a,required:i&&s===`native`,"aria-required":i&&s===`aria`||void 0,"aria-invalid":f||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-activedescendant":e[`aria-activedescendant`],"aria-autocomplete":e[`aria-autocomplete`],"aria-haspopup":e[`aria-haspopup`],"aria-controls":e[`aria-controls`],value:c,onChange:e=>l(H(e).value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,form:e.form,placeholder:e.placeholder,inputMode:e.inputMode,autoCorrect:e.autoCorrect,spellCheck:e.spellCheck,enterKeyHint:e.enterKeyHint,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...u,...g}),descriptionProps:_,errorMessageProps:v,isInvalid:f,validationErrors:p,validationDetails:m}}var wu;function Tu(){return(Tu=t((()=>{m(),Be(),V(),Zl(),at(),yl(),Tl(),wu=e(r(),1),oe(),Hl()})))()}function Eu(e={}){let{locale:t}=A();return(0,Du.useMemo)(()=>new cu(t,e),[t,e])}var Du;function Ou(){return(Ou=t((()=>{ve(),lu(),Du=r()})))()}var ku;function Au(){return(Au=t((()=>{ku={},ku={Empty:`فارغ`}})))()}var ju;function Mu(){return(Mu=t((()=>{ju={},ju={Empty:`Изпразни`}})))()}var Nu;function Pu(){return(Pu=t((()=>{Nu={},Nu={Empty:`Prázdné`}})))()}var Fu;function Iu(){return(Iu=t((()=>{Fu={},Fu={Empty:`Tom`}})))()}var Lu;function Ru(){return(Ru=t((()=>{Lu={},Lu={Empty:`Leer`}})))()}var zu;function Bu(){return(Bu=t((()=>{zu={},zu={Empty:`Άδειο`}})))()}var Vu;function Hu(){return(Hu=t((()=>{Vu={},Vu={Empty:`Empty`}})))()}var Uu;function Wu(){return(Wu=t((()=>{Uu={},Uu={Empty:`Vacío`}})))()}var Gu;function Ku(){return(Ku=t((()=>{Gu={},Gu={Empty:`Tühjenda`}})))()}var qu;function Ju(){return(Ju=t((()=>{qu={},qu={Empty:`Tyhjä`}})))()}var Yu;function Xu(){return(Xu=t((()=>{Yu={},Yu={Empty:`Vide`}})))()}var Zu;function Qu(){return(Qu=t((()=>{Zu={},Zu={Empty:`ריק`}})))()}var $u;function ed(){return(ed=t((()=>{$u={},$u={Empty:`Prazno`}})))()}var td;function nd(){return(nd=t((()=>{td={},td={Empty:`Üres`}})))()}var rd;function id(){return(id=t((()=>{rd={},rd={Empty:`Vuoto`}})))()}var ad;function od(){return(od=t((()=>{ad={},ad={Empty:`空`}})))()}var sd;function cd(){return(cd=t((()=>{sd={},sd={Empty:`비어 있음`}})))()}var ld;function ud(){return(ud=t((()=>{ld={},ld={Empty:`Tuščias`}})))()}var dd;function fd(){return(fd=t((()=>{dd={},dd={Empty:`Tukšs`}})))()}var pd;function md(){return(md=t((()=>{pd={},pd={Empty:`Tom`}})))()}var hd;function gd(){return(gd=t((()=>{hd={},hd={Empty:`Leeg`}})))()}var _d;function vd(){return(vd=t((()=>{_d={},_d={Empty:`Pusty`}})))()}var yd;function bd(){return(bd=t((()=>{yd={},yd={Empty:`Vazio`}})))()}var xd;function Sd(){return(Sd=t((()=>{xd={},xd={Empty:`Vazio`}})))()}var Cd;function wd(){return(wd=t((()=>{Cd={},Cd={Empty:`Gol`}})))()}var Td;function Ed(){return(Ed=t((()=>{Td={},Td={Empty:`Не заполнено`}})))()}var Dd;function Od(){return(Od=t((()=>{Dd={},Dd={Empty:`Prázdne`}})))()}var kd;function Ad(){return(Ad=t((()=>{kd={},kd={Empty:`Prazen`}})))()}var jd;function Md(){return(Md=t((()=>{jd={},jd={Empty:`Prazno`}})))()}var Nd;function Pd(){return(Pd=t((()=>{Nd={},Nd={Empty:`Tomt`}})))()}var Fd;function Id(){return(Id=t((()=>{Fd={},Fd={Empty:`Boş`}})))()}var Ld;function Rd(){return(Rd=t((()=>{Ld={},Ld={Empty:`Пусто`}})))()}var zd;function Bd(){return(Bd=t((()=>{zd={},zd={Empty:`空`}})))()}var Vd;function Hd(){return(Hd=t((()=>{Vd={},Vd={Empty:`空白`}})))()}var Ud;function Wd(){return(Wd=t((()=>{Au(),Mu(),Pu(),Iu(),Ru(),Bu(),Hu(),Wu(),Ku(),Ju(),Xu(),Qu(),ed(),nd(),id(),od(),cd(),ud(),fd(),md(),gd(),vd(),bd(),Sd(),wd(),Ed(),Od(),Ad(),Md(),Pd(),Id(),Rd(),Bd(),Hd(),Ud={},Ud={"ar-AE":ku,"bg-BG":ju,"cs-CZ":Nu,"da-DK":Fu,"de-DE":Lu,"el-GR":zu,"en-US":Vu,"es-ES":Uu,"et-EE":Gu,"fi-FI":qu,"fr-FR":Yu,"he-IL":Zu,"hr-HR":$u,"hu-HU":td,"it-IT":rd,"ja-JP":ad,"ko-KR":sd,"lt-LT":ld,"lv-LV":dd,"nb-NO":pd,"nl-NL":hd,"pl-PL":_d,"pt-BR":yd,"pt-PT":xd,"ro-RO":Cd,"ru-RU":Td,"sk-SK":Dd,"sl-SI":kd,"sr-SP":jd,"sv-SE":Nd,"tr-TR":Fd,"uk-UA":Ld,"zh-CN":zd,"zh-TW":Vd}})))()}function Gd(e){return e&&e.__esModule?e.default:e}function Kd(e){let t=(0,qd.useRef)(void 0),{value:n,textValue:r,minValue:i,maxValue:a,isDisabled:o,isReadOnly:s,isRequired:c,onIncrement:l,onIncrementPage:u,onDecrement:d,onDecrementPage:f,onDecrementToMin:p,onIncrementToMax:m}=e,h=E(Gd(Ud),`@react-aria/spinbutton`),g=(0,qd.useRef)(!1),_=(0,qd.useCallback)(()=>{clearTimeout(t.current),g.current=!1},[]),v=B(()=>{_()});(0,qd.useEffect)(()=>()=>v(),[]);let{keyboardProps:y}=et({isDisabled:o||s,shortcuts:{PageUp:()=>{if(u){u();return}if(l){l();return}return!1},ArrowUp:()=>{if(l){l();return}return!1},PageDown:()=>{if(f){f();return}if(d){d();return}return!1},ArrowDown:()=>{if(d){d();return}return!1},Home:()=>{if(p){p();return}return!1},End:()=>{if(m){m();return}return!1}},allowRepeats:!0}),b=(0,qd.useRef)(!1),x=()=>{b.current=!0},S=()=>{b.current=!1},C=r===``?h.format(`Empty`):(r||`${n}`).replace(`-`,`−`);(0,qd.useEffect)(()=>{b.current&&(Br(`assertive`),zr(C,`assertive`))},[C]);let w=(0,qd.useCallback)(()=>{_()},[_]),T=B(l??Jd),D=B(d??Jd),O=B(()=>{(a===void 0||isNaN(a)||n===void 0||isNaN(n)||n<a)&&(T(),k(60))}),k=B(e=>{v(),g.current=!0,t.current=window.setTimeout(O,e)}),A=B(()=>{(i===void 0||isNaN(i)||n===void 0||isNaN(n)||n>i)&&(D(),j(60))}),j=B(e=>{v(),g.current=!0,t.current=window.setTimeout(A,e)}),M=e=>{e.preventDefault()},{addGlobalListener:N,removeAllGlobalListeners:P}=R(),F=(0,qd.useRef)(!1),[I,L]=(0,qd.useState)(null);(0,qd.useEffect)(()=>{I===`touch`?k(600):I?k(400):I||v()},[I]);let[z,ee]=(0,qd.useState)(null);return(0,qd.useEffect)(()=>{z===`touch`?j(600):z?j(400):z||v()},[z]),{spinButtonProps:{role:`spinbutton`,"aria-valuenow":n!==void 0&&!isNaN(n)?n:void 0,"aria-valuetext":C,"aria-valuemin":i,"aria-valuemax":a,"aria-disabled":o||void 0,"aria-readonly":s||void 0,"aria-required":c||void 0,...y,onFocus:x,onBlur:S},incrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(N(window,`pointercancel`,w,{capture:!0}),F.current=!1,L(`touch`)):(l?.(),L(`mouse`)),N(window,`contextmenu`,M)},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),P(),L(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&l?.(),F.current=!1,L(null)},onFocus:x,onBlur:S},decrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(N(window,`pointercancel`,w,{capture:!0}),F.current=!1,ee(`touch`)):(d?.(),ee(`mouse`))},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),P(),ee(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&d?.(),F.current=!1,ee(null)},onFocus:x,onBlur:S}}}var qd,Jd;function Yd(){return(Yd=t((()=>{Wr(),Wd(),d(),te(),ct(),ue(),qd=r(),Jd=()=>{}})))()}function Xd(e){return typeof e==`string`?e.replace(/\s*/g,``):``+e}function Zd(e,t){let n=Qd.get(e);if(!n)throw Error(`Unknown list`);return`${n.id}-option-${Xd(t)}`}var Qd;function $d(){return($d=t((()=>{Qd=new WeakMap})))()}var ef;function tf(){return(tf=t((()=>{ef={},ef={buttonLabel:`عرض المقترحات`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, محدد`,other:``},e.isSelected)}`,listboxLabel:`مقترحات`,selectedAnnouncement:e=>`${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var nf;function rf(){return(rf=t((()=>{nf={},nf={buttonLabel:`Покажи предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, избрани`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var af;function of(){return(of=t((()=>{af={},af={buttonLabel:`Zobrazit doporučení`,countAnnouncement:(e,t)=>`K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:` (vybráno)`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybr\xe1no`}})))()}var sf;function cf(){return(cf=t((()=>{sf={},sf={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,other:()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mulighed`,other:()=>`${t.number(e.groupCount)} muligheder`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var lf;function uf(){return(uf=t((()=>{lf={},lf={buttonLabel:`Empfehlungen anzeigen`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} Option`,other:()=>`${t.number(e.optionCount)} Optionen`})} verf\xfcgbar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, ausgewählt`,other:``},e.isSelected)}`,listboxLabel:`Empfehlungen`,selectedAnnouncement:e=>`${e.optionText}, ausgew\xe4hlt`}})))()}var df;function ff(){return(ff=t((()=>{df={},df={buttonLabel:`Προβολή προτάσεων`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, επιλεγμένο`,other:``},e.isSelected)}`,listboxLabel:`Προτάσεις`,selectedAnnouncement:e=>`${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`}})))()}var pf;function mf(){return(mf=t((()=>{pf={},pf={focusAnnouncement:(e,t)=>`${t.select({true:()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selected`,other:``},e.isSelected)}`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} available.`,selectedAnnouncement:e=>`${e.optionText}, selected`,buttonLabel:`Show suggestions`,listboxLabel:`Suggestions`}})))()}var hf;function gf(){return(gf=t((()=>{hf={},hf={buttonLabel:`Mostrar sugerencias`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opci\xf3n`,other:()=>`${t.number(e.optionCount)} opciones`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opci\xf3n`,other:()=>`${t.number(e.groupCount)} opciones`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seleccionado`,other:``},e.isSelected)}`,listboxLabel:`Sugerencias`,selectedAnnouncement:e=>`${e.optionText}, seleccionado`}})))()}var _f;function vf(){return(vf=t((()=>{_f={},_f={buttonLabel:`Kuva soovitused`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} valik`,other:()=>`${t.number(e.optionCount)} valikud`})} saadaval.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} valik`,other:()=>`${t.number(e.groupCount)} valikud`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valitud`,other:``},e.isSelected)}`,listboxLabel:`Soovitused`,selectedAnnouncement:e=>`${e.optionText}, valitud`}})))()}var yf;function bf(){return(bf=t((()=>{yf={},yf={buttonLabel:`Näytä ehdotukset`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehtoa`})} saatavilla.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Siirtyi ryhm\xe4\xe4n ${e.groupTitle}, jossa ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehto`,other:()=>`${t.number(e.groupCount)} vaihtoehtoa`})}.`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valittu`,other:``},e.isSelected)}`,listboxLabel:`Ehdotukset`,selectedAnnouncement:e=>`${e.optionText}, valittu`}})))()}var xf;function Sf(){return(Sf=t((()=>{xf={},xf={buttonLabel:`Afficher les suggestions`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, sélectionné(s)`,other:``},e.isSelected)}`,listboxLabel:`Suggestions`,selectedAnnouncement:e=>`${e.optionText}, s\xe9lectionn\xe9`}})))()}var Cf;function wf(){return(wf=t((()=>{Cf={},Cf={buttonLabel:`הצג הצעות`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, נבחר`,other:``},e.isSelected)}`,listboxLabel:`הצעות`,selectedAnnouncement:e=>`${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var Tf;function Ef(){return(Ef=t((()=>{Tf={},Tf={buttonLabel:`Prikaži prijedloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, odabranih`,other:``},e.isSelected)}`,listboxLabel:`Prijedlozi`,selectedAnnouncement:e=>`${e.optionText}, odabrano`}})))()}var Df;function Of(){return(Of=t((()=>{Df={},Df={buttonLabel:`Javaslatok megjelenítése`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, kijelölve`,other:``},e.isSelected)}`,listboxLabel:`Javaslatok`,selectedAnnouncement:e=>`${e.optionText}, kijel\xf6lve`}})))()}var kf;function Af(){return(Af=t((()=>{kf={},kf={buttonLabel:`Mostra suggerimenti`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opzione disponibile`,other:()=>`${t.number(e.optionCount)} opzioni disponibili`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opzione`,other:()=>`${t.number(e.groupCount)} opzioni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selezionato`,other:``},e.isSelected)}`,listboxLabel:`Suggerimenti`,selectedAnnouncement:e=>`${e.optionText}, selezionato`}})))()}var jf;function Mf(){return(Mf=t((()=>{jf={},jf={buttonLabel:`候補を表示`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`、選択済み`,other:``},e.isSelected)}`,listboxLabel:`候補`,selectedAnnouncement:e=>`${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`}})))()}var Nf;function Pf(){return(Pf=t((()=>{Nf={},Nf={buttonLabel:`제안 사항 표시`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 선택됨`,other:``},e.isSelected)}`,listboxLabel:`제안`,selectedAnnouncement:e=>`${e.optionText}, \u{C120}\u{D0DD}\u{B428}`}})))()}var Ff;function If(){return(If=t((()=>{Ff={},Ff={buttonLabel:`Rodyti pasiūlymus`,countAnnouncement:(e,t)=>`Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, pasirinkta`,other:``},e.isSelected)}`,listboxLabel:`Pasiūlymai`,selectedAnnouncement:e=>`${e.optionText}, pasirinkta`}})))()}var Lf;function Rf(){return(Rf=t((()=>{Lf={},Lf={buttonLabel:`Rādīt ieteikumus`,countAnnouncement:(e,t)=>`Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, atlasīta`,other:``},e.isSelected)}`,listboxLabel:`Ieteikumi`,selectedAnnouncement:e=>`${e.optionText}, atlas\u{12B}ta`}})))()}var zf;function Bf(){return(Bf=t((()=>{zf={},zf={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativer`})} finnes.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativer`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var Vf;function Hf(){return(Hf=t((()=>{Vf={},Vf={buttonLabel:`Suggesties weergeven`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} optie`,other:()=>`${t.number(e.optionCount)} opties`})} beschikbaar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} optie`,other:()=>`${t.number(e.groupCount)} opties`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, geselecteerd`,other:``},e.isSelected)}`,listboxLabel:`Suggesties`,selectedAnnouncement:e=>`${e.optionText}, geselecteerd`}})))()}var Uf;function Wf(){return(Wf=t((()=>{Uf={},Uf={buttonLabel:`Wyświetlaj sugestie`,countAnnouncement:(e,t)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, wybrano`,other:``},e.isSelected)}`,listboxLabel:`Sugestie`,selectedAnnouncement:e=>`${e.optionText}, wybrano`}})))()}var Gf;function Kf(){return(Kf=t((()=>{Gf={},Gf={buttonLabel:`Mostrar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var qf;function Jf(){return(Jf=t((()=>{qf={},qf={buttonLabel:`Apresentar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var Yf;function Xf(){return(Xf=t((()=>{Yf={},Yf={buttonLabel:`Afișare sugestii`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selectat`,other:``},e.isSelected)}`,listboxLabel:`Sugestii`,selectedAnnouncement:e=>`${e.optionText}, selectat`}})))()}var Zf;function Qf(){return(Qf=t((()=>{Zf={},Zf={buttonLabel:`Показать предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, выбранными`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var $f;function ep(){return(ep=t((()=>{$f={},$f={buttonLabel:`Zobraziť návrhy`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, vybraté`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybrat\xe9`}})))()}var tp;function np(){return(np=t((()=>{tp={},tp={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izbrano`,other:``},e.isSelected)}`,listboxLabel:`Predlogi`,selectedAnnouncement:e=>`${e.optionText}, izbrano`}})))()}var rp;function ip(){return(ip=t((()=>{rp={},rp={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izabranih`,other:``},e.isSelected)}`,listboxLabel:`Predlozi`,selectedAnnouncement:e=>`${e.optionText}, izabrano`}})))()}var ap;function op(){return(op=t((()=>{ap={},ap={buttonLabel:`Visa förslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valda`,other:``},e.isSelected)}`,listboxLabel:`Förslag`,selectedAnnouncement:e=>`${e.optionText}, valda`}})))()}var sp;function cp(){return(cp=t((()=>{sp={},sp={buttonLabel:`Önerileri göster`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seçildi`,other:``},e.isSelected)}`,listboxLabel:`Öneriler`,selectedAnnouncement:e=>`${e.optionText}, se\xe7ildi`}})))()}var lp;function up(){return(up=t((()=>{lp={},lp={buttonLabel:`Показати пропозиції`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, вибрано`,other:``},e.isSelected)}`,listboxLabel:`Пропозиції`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var dp;function fp(){return(fp=t((()=>{dp={},dp={buttonLabel:`显示建议`,countAnnouncement:(e,t)=>`\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已选择`,other:``},e.isSelected)}`,listboxLabel:`建议`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`}})))()}var pp;function mp(){return(mp=t((()=>{pp={},pp={buttonLabel:`顯示建議`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已選取`,other:``},e.isSelected)}`,listboxLabel:`建議`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`}})))()}var hp;function gp(){return(gp=t((()=>{tf(),rf(),of(),cf(),uf(),ff(),mf(),gf(),vf(),bf(),Sf(),wf(),Ef(),Of(),Af(),Mf(),Pf(),If(),Rf(),Bf(),Hf(),Wf(),Kf(),Jf(),Xf(),Qf(),ep(),np(),ip(),op(),cp(),up(),fp(),mp(),hp={},hp={"ar-AE":ef,"bg-BG":nf,"cs-CZ":af,"da-DK":sf,"de-DE":lf,"el-GR":df,"en-US":pf,"es-ES":hf,"et-EE":_f,"fi-FI":yf,"fr-FR":xf,"he-IL":Cf,"hr-HR":Tf,"hu-HU":Df,"it-IT":kf,"ja-JP":jf,"ko-KR":Nf,"lt-LT":Ff,"lv-LV":Lf,"nb-NO":zf,"nl-NL":Vf,"pl-PL":Uf,"pt-BR":Gf,"pt-PT":qf,"ro-RO":Yf,"ru-RU":Zf,"sk-SK":$f,"sl-SI":tp,"sr-SP":rp,"sv-SE":ap,"tr-TR":sp,"uk-UA":lp,"zh-CN":dp,"zh-TW":pp}})))()}function _p(e){return D()?e.altKey:e.ctrlKey}function vp(e,t){let n=`[data-key="${CSS.escape(String(t))}"]`,r=e.current?.dataset.collection;return r&&(n=`[data-collection="${CSS.escape(r)}"]${n}`),e.current?.querySelector(n)}function yp(e){let t=Re();return xp.set(e,t),t}function bp(e){return xp.get(e)}var xp;function Sp(){return(Sp=t((()=>{he(),Le(),xp=new WeakMap})))()}var Cp;function wp(){return(wp=t((()=>{Sp(),Cp=class{constructor(e){this.ref=e}getItemRect(e){let t=this.ref.current;if(!t)return null;let n=e==null?null:vp(this.ref,e);if(!n)return null;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();return{x:i.left-r.left-t.clientLeft+t.scrollLeft,y:i.top-r.top-t.clientTop+t.scrollTop,width:i.width,height:i.height}}getContentSize(){let e=this.ref.current;return{width:e?.scrollWidth??0,height:e?.scrollHeight??0}}getVisibleRect(){let e=this.ref.current;return{x:e?.scrollLeft??0,y:e?.scrollTop??0,width:e?.clientWidth??0,height:e?.clientHeight??0}}}})))()}var Tp;function Ep(){return(Ep=t((()=>{wp(),Sp(),Tp=class{constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||`all`,this.orientation=t.orientation||`vertical`,this.direction=t.direction,this.layout=t.layout||`stack`,this.layoutDelegate=t.layoutDelegate||new Cp(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout=`stack`,this.orientation=`vertical`,this.disabledBehavior=`all`,this.layoutDelegate=new Cp(this.ref);this.layout===`stack`&&this.orientation===`vertical`&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}isDisabled(e){return this.disabledBehavior===`all`&&(e.props?.isDisabled||this.disabledKeys.has(e.key))&&e.props?.disabledBehavior!==`selection`}findNextNonDisabled(e,t,n=!1){let r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e?.type===`item`&&(n||!this.isDisabled(e)))return r;r=t(r)}return null}getNextKey(e,t){let n=e;return n=this.collection.getKeyAfter(n),this.findNextNonDisabled(n,e=>this.collection.getKeyAfter(e),t?.includeDisabled)}getPreviousKey(e,t){let n=e;return n=this.collection.getKeyBefore(n),this.findNextNonDisabled(n,e=>this.collection.getKeyBefore(e),t?.includeDisabled)}findKey(e,t,n){let r=e,i=this.layoutDelegate.getItemRect(r);if(!i||r==null)return null;let a=i;do{if(r=t(r),r==null)break;i=this.layoutDelegate.getItemRect(r)}while(i&&n(a,i)&&r!=null);return r}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}isReversed(e){let t=this.getNextKey(e),n=vp(this.ref,e);if(t!=null){let e=vp(this.ref,t);return!n||!e?!1:n.getBoundingClientRect().top>e.getBoundingClientRect().top}let r=this.getPreviousKey(e);if(r!=null){let e=vp(this.ref,r);return!n||!e?!1:e.getBoundingClientRect().top>n.getBoundingClientRect().top}return!1}getKeyBelow(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getNextKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getPreviousKey(e,t):this.getNextKey(e,t)}getKeyAbove(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getPreviousKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getNextKey(e,t):this.getPreviousKey(e,t)}getNextColumn(e,t,n){return t?this.getPreviousKey(e,n):this.getNextKey(e,n)}getKeyRightOf(e,t){let n=this.direction===`ltr`?`getKeyRightOf`:`getKeyLeftOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`rtl`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`rtl`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`rtl`,t):null}getKeyLeftOf(e,t){let n=this.direction===`ltr`?`getKeyLeftOf`:`getKeyRightOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`ltr`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`ltr`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`ltr`,t):null}getFirstKey(){let e=this.collection.getFirstKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyAfter(e))}getLastKey(){let e=this.collection.getLastKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyBefore(e))}getKeyPageAbove(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!v(t))return this.getFirstKey();let i=e;if(this.orientation===`horizontal`){let e=Math.max(0,n.x+n.width-this.layoutDelegate.getVisibleRect().width);for(;n&&n.x>e&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=this.layoutDelegate.getVisibleRect(),t=r?n.y-e.height:Math.max(0,n.y+n.height-e.height);for(;n&&n.y>t&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getLastKey():this.getFirstKey())}getKeyPageBelow(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!v(t))return this.getLastKey();let i=e;if(this.orientation===`horizontal`){let e=Math.min(this.layoutDelegate.getContentSize().width,n.x-n.width+this.layoutDelegate.getVisibleRect().width);for(;n&&n.x<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=Math.min(this.layoutDelegate.getContentSize().height,n.y-n.height+this.layoutDelegate.getVisibleRect().height);for(;n&&n.y<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getFirstKey():this.getLastKey())}getKeyForSearch(e,t){if(!this.collator)return null;let n=this.collection,r=t||this.getFirstKey();for(;r!=null;){let t=n.getItem(r);if(!t)return null;let i=t.textValue.slice(0,e.length);if(t.textValue&&this.collator.compare(i,e)===0)return r;r=this.getNextKey(r)}return null}}})))()}var Dp;function Op(){return(Op=t((()=>{Dp={},Dp={longPressMessage:`اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`}})))()}var kp;function Ap(){return(Ap=t((()=>{kp={},kp={longPressMessage:`Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`}})))()}var jp;function Mp(){return(Mp=t((()=>{jp={},jp={longPressMessage:`Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`}})))()}var Np;function Pp(){return(Pp=t((()=>{Np={},Np={longPressMessage:`Langt tryk eller tryk på Alt + pil ned for at åbne menuen`}})))()}var Fp;function Ip(){return(Ip=t((()=>{Fp={},Fp={longPressMessage:`Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`}})))()}var Lp;function Rp(){return(Rp=t((()=>{Lp={},Lp={longPressMessage:`Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`}})))()}var zp;function Bp(){return(Bp=t((()=>{zp={},zp={longPressMessage:`Long press or press Alt + ArrowDown to open menu`}})))()}var Vp;function Hp(){return(Hp=t((()=>{Vp={},Vp={longPressMessage:`Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`}})))()}var Up;function Wp(){return(Wp=t((()=>{Up={},Up={longPressMessage:`Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`}})))()}var Gp;function Kp(){return(Kp=t((()=>{Gp={},Gp={longPressMessage:`Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`}})))()}var qp;function Jp(){return(Jp=t((()=>{qp={},qp={longPressMessage:`Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu.`}})))()}var Yp;function Xp(){return(Xp=t((()=>{Yp={},Yp={longPressMessage:`לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`}})))()}var Zp;function Qp(){return(Qp=t((()=>{Zp={},Zp={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`}})))()}var $p;function em(){return(em=t((()=>{$p={},$p={longPressMessage:`Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`}})))()}var tm;function nm(){return(nm=t((()=>{tm={},tm={longPressMessage:`Premi a lungo o premi Alt + Freccia giù per aprire il menu`}})))()}var rm;function im(){return(im=t((()=>{rm={},rm={longPressMessage:`長押しまたは Alt+下矢印キーでメニューを開く`}})))()}var am;function om(){return(om=t((()=>{am={},am={longPressMessage:`길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`}})))()}var sm;function cm(){return(cm=t((()=>{sm={},sm={longPressMessage:`Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`}})))()}var lm;function um(){return(um=t((()=>{lm={},lm={longPressMessage:`Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`}})))()}var dm;function fm(){return(fm=t((()=>{dm={},dm={longPressMessage:`Langt trykk eller trykk Alt + PilNed for å åpne menyen`}})))()}var pm;function mm(){return(mm=t((()=>{pm={},pm={longPressMessage:`Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`}})))()}var hm;function gm(){return(gm=t((()=>{hm={},hm={longPressMessage:`Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`}})))()}var _m;function vm(){return(vm=t((()=>{_m={},_m={longPressMessage:`Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`}})))()}var ym;function bm(){return(bm=t((()=>{ym={},ym={longPressMessage:`Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`}})))()}var xm;function Sm(){return(Sm=t((()=>{xm={},xm={longPressMessage:`Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`}})))()}var Cm;function wm(){return(wm=t((()=>{Cm={},Cm={longPressMessage:`Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`}})))()}var Tm;function Em(){return(Em=t((()=>{Tm={},Tm={longPressMessage:`Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`}})))()}var Dm;function Om(){return(Om=t((()=>{Dm={},Dm={longPressMessage:`Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`}})))()}var km;function Am(){return(Am=t((()=>{km={},km={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`}})))()}var jm;function Mm(){return(Mm=t((()=>{jm={},jm={longPressMessage:`Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`}})))()}var Nm;function Pm(){return(Pm=t((()=>{Nm={},Nm={longPressMessage:`Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`}})))()}var Fm;function Im(){return(Im=t((()=>{Fm={},Fm={longPressMessage:`Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`}})))()}var Lm;function Rm(){return(Rm=t((()=>{Lm={},Lm={longPressMessage:`长按或按 Alt + 向下方向键以打开菜单`}})))()}var zm;function Bm(){return(Bm=t((()=>{zm={},zm={longPressMessage:`長按或按 Alt+向下鍵以開啟功能表`}})))()}var Vm;function Hm(){return(Hm=t((()=>{Op(),Ap(),Mp(),Pp(),Ip(),Rp(),Bp(),Hp(),Wp(),Kp(),Jp(),Xp(),Qp(),em(),nm(),im(),om(),cm(),um(),fm(),mm(),gm(),vm(),bm(),Sm(),wm(),Em(),Om(),Am(),Mm(),Pm(),Im(),Rm(),Bm(),Vm={},Vm={"ar-AE":Dp,"bg-BG":kp,"cs-CZ":jp,"da-DK":Np,"de-DE":Fp,"el-GR":Lp,"en-US":zp,"es-ES":Vp,"et-EE":Up,"fi-FI":Gp,"fr-FR":qp,"he-IL":Yp,"hr-HR":Zp,"hu-HU":$p,"it-IT":tm,"ja-JP":rm,"ko-KR":am,"lt-LT":sm,"lv-LV":lm,"nb-NO":dm,"nl-NL":pm,"pl-PL":hm,"pt-BR":_m,"pt-PT":ym,"ro-RO":xm,"ru-RU":Cm,"sk-SK":Tm,"sl-SI":Dm,"sr-SP":km,"sv-SE":jm,"tr-TR":Nm,"uk-UA":Fm,"zh-CN":Lm,"zh-TW":zm}})))()}function Um(e){let{isDisabled:t,pointerType:n,onLongPressStart:r,onLongPressEnd:i,onLongPress:a,threshold:o=Gm,accessibilityDescription:s}=e,c=(0,Wm.useRef)(void 0),{addGlobalListener:l,removeAllGlobalListeners:u}=R(),d=e=>n?e.pointerType===n:e.pointerType===`mouse`||e.pointerType===`touch`,{pressProps:f}=xr({isDisabled:t,onPressStart(e){if(e.continuePropagation(),d(e)){r&&r({...e,type:`longpressstart`}),c.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent(`pointercancel`,{bubbles:!0})),l(e.target,`click`,e=>e.preventDefault(),{once:!0}),Te(e.target).activeElement!==e.target&&Ke(e.target),a&&a({...e,type:`longpress`}),c.current=void 0},o),e.pointerType===`touch`&&l(e.target,`contextmenu`,e=>e.preventDefault(),{once:!0});let t=$e(e.target);l(t,`pointerup`,()=>{setTimeout(()=>{u()},100)},{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),i&&d(e)&&i({...e,type:`longpressend`})}}),p=al(a&&!t?s:void 0);return{longPressProps:U(f,p)}}var Wm,Gm;function Km(){return(Km=t((()=>{pt(),Ae(),V(),ll(),te(),Pr(),Wm=r(),Gm=500})))()}function qm(e){let{onContextMenu:t}=e,n=(0,Jm.useRef)(!1),{longPressProps:r}=Um({onLongPressStart(){n.current=!1},onLongPress(e){n.current?n.current=!1:t?.({target:e.target,x:e.x,y:e.y})}});return t?{contextMenuProps:U(de()?r:{},{onContextMenu(e){e.stopPropagation(),e.preventDefault(),n.current=!0;let r=e.currentTarget.getBoundingClientRect();t({target:e.currentTarget,x:e.clientX-r.x,y:e.clientY-r.y})},onKeyDown(e){if(h()&&e.ctrlKey&&e.key===`Enter`){n.current=!1;let r=e.currentTarget;e.stopPropagation(),setTimeout(()=>{if(n.current)n.current=!1;else{let e=r.getBoundingClientRect();t({target:r,x:e.width/2,y:e.height/2})}},10)}}})}:{contextMenuProps:{}}}var Jm;function Ym(){return(Ym=t((()=>{he(),V(),Km(),Jm=r()})))()}function Xm(e){let{triggerRef:t,isOpen:n,onClose:r}=e;(0,Zm.useEffect)(()=>!n||r===null?void 0:st(Xe(t.current),`scroll`,e=>{let n=H(e);if(!t.current||n instanceof Node&&!f(n,t.current)||n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)return;let i=r||Qm.get(t.current);i&&i()},!0),[n,r,t])}var Zm,Qm;function $m(){return($m=t((()=>{Ae(),Be(),Zm=r(),Qm=new WeakMap})))()}function eh(e,t,n){let{type:r}=e,{isOpen:i}=t;(0,th.useEffect)(()=>{n&&n.current&&Qm.set(n.current,t.close)});let a;r===`menu`?a=!0:r===`listbox`&&(a=`listbox`);let o=Re();return{triggerProps:{"aria-haspopup":a,"aria-expanded":i,"aria-controls":i?o:void 0,onPress:t.toggle},overlayProps:{id:o}}}var th;function nh(){return(nh=t((()=>{$m(),Le(),th=r()})))()}function rh(e){return e&&e.__esModule?e.default:e}function ih(e,t,n){let{type:r=`menu`,isDisabled:i,trigger:a=`press`}=e,o=Re(),{triggerProps:s,overlayProps:c}=eh({type:r},t,n),l=(e,n,r=`first`)=>{if(!e||n.isDefaultPrevented())return!1;t.toggle(r)},{keyboardProps:u}=et({isDisabled:i,shortcuts:{Enter:e=>l(a!==`longPress`,e,`first`)," ":e=>l(a!==`longPress`,e,`first`),ArrowDown:e=>l(a!==`longPress`,e,`first`),ArrowUp:e=>l(a!==`longPress`,e,`last`),"Alt+Enter":e=>l(a===`longPress`,e,`first`),"Alt+ ":e=>l(a===`longPress`,e,`first`),"Alt+ArrowDown":e=>l(!0,e,`first`),"Alt+ArrowUp":e=>l(!0,e,`last`)}}),d=E(rh(Vm),`@react-aria/menu`),{longPressProps:f}=Um({isDisabled:i||a!==`longPress`,accessibilityDescription:d.format(`longPressMessage`),onLongPressStart(){t.close()},onLongPress(){t.open(`first`)}}),p={preventFocusOnPress:!0,onPressStart(e){e.pointerType!==`touch`&&e.pointerType!==`keyboard`&&!i&&(Ke(e.target),t.open(e.pointerType===`virtual`?`first`:null))},onPress(e){e.pointerType===`touch`&&!i&&(Ke(e.target),t.toggle())}};delete s.onPress;let{contextMenuProps:m}=qm({onContextMenu(e){let n=e.target.getBoundingClientRect();t.setPoint({x:n.x+e.x,y:n.y+e.y}),t.open()}});(0,ah.useEffect)(()=>{if(t.isOpen&&a===`contextMenu`){let e=e=>{(e.button===2||e.button===0&&e.ctrlKey===!0)&&H(e)===document.body&&t.close()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)}},[t,a]);let h;if(a===`press`)h={...p,...u};else if(a===`longPress`)h={...f,...u};else if(a===`contextMenu`){h=m;let{"aria-haspopup":e,"aria-expanded":t,"aria-controls":n,...r}=s;s=r}return{menuTriggerProps:{...s,...h,id:o},menuProps:{...c,"aria-labelledby":o,autoFocus:t.focusStrategy||!0,onClose:t.close}}}var ah;function oh(){return(oh=t((()=>{pt(),Be(),Hm(),Ym(),Le(),ct(),ue(),Km(),nh(),ah=r()})))()}function sh(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:r}=e,i=(0,lh.useRef)({search:``,timeout:void 0});return(0,lh.useEffect)(()=>{let e=i.current.timeout;return()=>{clearTimeout(e)}},[i]),{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{if(i.current.search.length>0&&e.key===` `){if(e.preventDefault(),(!(`continuePropagation`in e)||`continuePropagation`in e&&!e.isPropagationStopped())&&e.stopPropagation(),i.current.search+=` `,t.getKeyForSearch!=null){let e=t.getKeyForSearch(i.current.search,n.focusedKey);e??=t.getKeyForSearch(i.current.search),e!=null&&(n.setFocusedKey(e),r&&r(e))}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},uh)}}:void 0,onKeyDown:t.getKeyForSearch?e=>{let a=ch(e.key);if(!(!a||e.ctrlKey||e.metaKey||e.altKey||!f(e.currentTarget,H(e))||i.current.search.length===0&&a===` `)){if(i.current.search+=a,t.getKeyForSearch!=null){let a=t.getKeyForSearch(i.current.search,n.focusedKey);if(a??=t.getKeyForSearch(i.current.search),a!=null)n.setFocusedKey(a),r&&r(a),e.preventDefault(),`continuePropagation`in e||e.stopPropagation();else{i.current.search=``,clearTimeout(i.current.timeout),i.current.timeout=void 0;return}}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},uh)}}:void 0}}}function ch(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}var lh,uh;function dh(){return(dh=t((()=>{Be(),lh=r(),uh=1e3})))()}function fh(e,t){let n=(0,ph.useRef)(!0),r=(0,ph.useRef)(null);ye(()=>(n.current=!0,()=>{n.current=!1}),[]),ye(()=>{n.current?n.current=!1:(!r.current||t.some((e,t)=>!Object.is(e,r[t])))&&e(),r.current=t},t)}var ph;function mh(){return(mh=t((()=>{_e(),ph=r()})))()}function hh(e){let{selectionManager:t,keyboardDelegate:n,ref:r,autoFocus:i=!1,shouldFocusWrap:a=!1,disallowEmptySelection:o=!1,disallowSelectAll:s=!1,escapeKeyBehavior:c=`clearSelection`,selectOnFocus:l=t.selectionBehavior===`replace`,disallowTypeAhead:u=!1,shouldUseVirtualFocus:d,allowsTabNavigation:m=!1,scrollRef:g=r,linkBehavior:v=`action`,UNSTABLE_focusOnEntry:y}=e,{direction:b}=A(),x=ne(),S=(e,n,i)=>{if(n!=null){if(t.isLink(n)&&v===`selection`&&l&&!_p(e)){(0,gh.flushSync)(()=>{t.setFocusedKey(n,i)});let a=vp(r,n),o=t.getItemProps(n);if(a){x.open(a,e,o.href,o.routerOptions);return}return!1}if(t.setFocusedKey(n,i),t.isLink(n)&&v===`override`)return!1;if(e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(n);return}if(l&&!_p(e)){t.replaceSelection(n);return}}return!1},C=e=>{if(n.getKeyBelow){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyBelow?.(t.focusedKey);if(r==null&&a&&(r=n.getFirstKey?.(t.focusedKey)),r!=null){S(e,r);return}}return!1},w=e=>{if(n.getKeyAbove){let r=t.focusedKey==null?n.getLastKey?.():n.getKeyAbove?.(t.focusedKey);if(r==null&&a&&(r=n.getLastKey?.(t.focusedKey)),r!=null){S(e,r);return}}return!1},T=e=>{if(n.getFirstKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getFirstKey(t.focusedKey,Ne(e));if(t.setFocusedKey(r),r!=null){if(Ne(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},E=e=>{if(n.getKeyLeftOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyLeftOf?.(t.focusedKey);if(r==null&&a&&(r=b===`rtl`?n.getFirstKey?.(t.focusedKey):n.getLastKey?.(t.focusedKey)),r!=null){S(e,r,b===`rtl`?`first`:`last`);return}}return!1},D=e=>{if(n.getKeyRightOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyRightOf?.(t.focusedKey);if(r==null&&a&&(r=b===`rtl`?n.getLastKey?.(t.focusedKey):n.getFirstKey?.(t.focusedKey)),r!=null){S(e,r,b===`rtl`?`last`:`first`);return}}return!1},O=e=>{if(n.getLastKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getLastKey(t.focusedKey,Ne(e));if(t.setFocusedKey(r),r!=null){if(Ne(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},k=e=>{if(n.getKeyPageBelow&&t.focusedKey!=null){let r=n.getKeyPageBelow(t.focusedKey);if(r!=null)return S(e,r)}return!1},j=e=>{if(n.getKeyPageAbove&&t.focusedKey!=null){let r=n.getKeyPageAbove(t.focusedKey);if(r!=null)return S(e,r)}return!1},M=()=>{if(t.selectionMode===`multiple`&&s!==!0){t.selectAll();return}return!1},N=()=>{if(c===`clearSelection`&&!o&&t.selectedKeys.size!==0){t.clearSelection();return}return!1},P=()=>{if(!m&&r.current){let e=p(r.current,{tabbable:!0}),t,n;do n=e.lastChild(),n&&(t=n);while(n);let i=ut();t&&(!Me(t)||i&&!xe(i))&&Ke(t)}return{shouldContinuePropagation:!0,shouldPreventDefault:!1}},F=()=>(!m&&r.current&&r.current.focus(),{shouldContinuePropagation:!0,shouldPreventDefault:!1}),I=(e,t)=>({[h()?e+`+Shift+Alt`:e+`+Shift+Control`]:t,[e+`+Shift`]:t,[h()?e+`+Alt`:e+`+Control`]:t,[e]:t}),{keyboardProps:L}=et({shortcuts:{...I(`ArrowDown`,C),...I(`ArrowUp`,w),...I(`ArrowLeft`,E),...I(`ArrowRight`,D),...I(`PageDown`,k),...I(`PageUp`,j)},allowRepeats:!0}),{keyboardProps:R}=et({shortcuts:{...I(`Home`,T),...I(`End`,O),"Mod+A":M,Escape:N,Tab:P,"Tab+Shift":F}}),z=(0,_h.useRef)({top:0,left:0});cr(g,`scroll`,()=>{z.current={top:g.current?.scrollTop??0,left:g.current?.scrollLeft??0}});let ee=e=>{if(t.isFocused){f(e.currentTarget,H(e))||t.setFocused(!1);return}if(!f(e.currentTarget,H(e)))return;let i=_();t.setFocused(!0);let a=e=>{e!=null&&(t.setFocusedKey(e),l&&!t.isSelected(e)&&t.replaceSelection(e))};if(y&&(i===`keyboard`||i===`virtual`))a(y===`first`?n.getFirstKey?.():n.getLastKey?.());else if(t.focusedKey==null){let r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?a(t.lastSelectedKey??n.getLastKey?.()):a(t.firstSelectedKey??n.getFirstKey?.())}else g.current&&(g.current.scrollTop=z.current.top,g.current.scrollLeft=z.current.left);if(t.focusedKey!=null&&g.current){let e=vp(r,t.focusedKey);e instanceof HTMLElement&&(!Me(e)&&!d&&Ke(e),(i===`keyboard`||y&&i===`virtual`)&&rl(e,{containingElement:r.current}))}},te=e=>{f(e.currentTarget,e.relatedTarget)||t.setFocused(!1)},B=(0,_h.useRef)(!1);cr(r,Rt,d?e=>{let{detail:n}=e;e.stopPropagation(),t.setFocused(!0),n?.focusStrategy===`first`&&(B.current=!0)}:void 0);let re=n.getFirstKey?.()??null;fh(()=>{if(B.current){if(re==null){let e=ut();Bt(r.current),Ht(e,null),t.collection.size>0&&(B.current=!1)}else t.setFocusedKey(re),B.current=!1}},[re,t.collection.size]),fh(()=>{t.collection.size>0&&(B.current=!1)},[t.focusedKey]),cr(r,Lt,d?e=>{e.stopPropagation(),t.setFocused(!1),e.detail?.clearFocusKey&&t.setFocusedKey(null)}:void 0);let ie=(0,_h.useRef)(i),ae=(0,_h.useRef)(!1);(0,_h.useEffect)(()=>{if(ie.current){let e=null;i===`first`&&(e=n.getFirstKey?.()??null),i===`last`&&(e=n.getLastKey?.()??null);let a=t.selectedKeys;if(a.size){for(let n of a)if(t.canSelectItem(n)){e=n;break}}t.setFocused(!0),t.setFocusedKey(e),e==null&&!d&&r.current&&bt(r.current),t.collection.size>0&&(ie.current=!1,ae.current=!0)}});let oe=(0,_h.useRef)(t.focusedKey),se=(0,_h.useRef)(null);(0,_h.useEffect)(()=>{if(t.isFocused&&t.focusedKey!=null&&(t.focusedKey!==oe.current||ae.current)&&g.current&&r.current){let e=_(),n=vp(r,t.focusedKey);if(!(n instanceof HTMLElement))return;(e===`keyboard`||ae.current)&&(se.current&&cancelAnimationFrame(se.current),se.current=requestAnimationFrame(()=>{g.current&&(nl(g.current,n),e!==`virtual`&&rl(n,{containingElement:r.current}))}))}!d&&t.isFocused&&t.focusedKey==null&&oe.current!=null&&r.current&&bt(r.current),oe.current=t.focusedKey,ae.current=!1}),(0,_h.useEffect)(()=>()=>{se.current&&cancelAnimationFrame(se.current)},[]),cr(r,`react-aria-focus-scope-restore`,e=>{e.preventDefault(),t.setFocused(!0)});let ce={...U(R,L),onFocus:ee,onBlur:te,onMouseDown(e){g.current===H(e)&&e.preventDefault()}},{typeSelectProps:le}=sh({keyboardDelegate:n,selectionManager:t});u||(ce=U(le,ce));let ue;d||(ue=t.focusedKey==null?0:-1);let de=yp(t.collection);return{collectionProps:U(ce,{tabIndex:ue,"data-collection":de})}}var gh,_h;function vh(){return(vh=t((()=>{zt(),Wt(),Oe(),pt(),Be(),I(),ee(),Sp(),dt(),he(),re(),V(),il(),ur(),ct(),ve(),C(),dh(),mh(),gh=Ct(),_h=r()})))()}function yh(e,t){return typeof t.getChildren==`function`?t.getChildren(e.key):e.childNodes}function bh(e){return xh(e,0)}function xh(e,t){if(t<0)return;let n=0;for(let r of e){if(n===t)return r;n++}}function Sh(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let r=[...Ch(e,t),t],i=[...Ch(e,n),n],a=r.slice(0,i.length).findIndex((e,t)=>e!==i[t]);return a===-1?r.findIndex(e=>e===n)>=0?1:(i.findIndex(e=>e===t),-1):(t=r[a],n=i[a],t.index-n.index)}function Ch(e,t){let n=[],r=t;for(;r?.parentKey!=null;)r=e.getItem(r.parentKey),r&&n.unshift(r);return n}function wh(e){let t=Th.get(e);if(t!=null)return t;let n=0,r=t=>{for(let i of t)i.type===`section`?r(yh(i,e)):i.type===`item`&&n++};return r(e),Th.set(e,n),n}var Th;function Eh(){return(Eh=t((()=>{Th=new WeakMap})))()}function Dh(e){return e&&e.__esModule?e.default:e}function Oh(e,t){let{buttonRef:n,popoverRef:r,inputRef:i,listBoxRef:a,keyboardDelegate:o,layoutDelegate:s,shouldFocusWrap:c,isReadOnly:l,isDisabled:u}=e,d=(0,Ah.useRef)(null);n??=d;let p=E(Dh(hp),`@react-aria/combobox`),{menuTriggerProps:m,menuProps:h}=ih({type:`listbox`,isDisabled:u||l},t,n);Qd.set(t,{id:h.id});let{collection:g}=t,{disabledKeys:_}=t.selectionManager,v=(0,Ah.useMemo)(()=>o||new Tp({collection:g,disabledKeys:_,ref:a,layoutDelegate:s}),[o,s,g,_,a]),{collectionProps:y}=hh({selectionManager:t.selectionManager,keyboardDelegate:v,disallowTypeAhead:!0,disallowEmptySelection:!0,shouldFocusWrap:c,ref:i,isVirtualized:!0}),b=ne(),{keyboardProps:x}=et({shortcuts:{Enter:e=>{let n=t.isOpen;if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let r=t.collection.getItem(t.selectionManager.focusedKey);if(r?.props.href){let i=a.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);return i instanceof HTMLAnchorElement&&b.open(i,e,r.props.href,r.props.routerOptions),t.close(),{shouldPreventDefault:n}}if(r?.props.onAction)return r.props.onAction(),t.close(),{shouldPreventDefault:n}}return t.commit(),{shouldPreventDefault:n}},Tab:()=>{if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let e=t.collection.getItem(t.selectionManager.focusedKey);if(e?.props.href)return t.close(),{shouldPreventDefault:!1};if(e?.props.onAction)return e.props.onAction(),t.close(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}}return t.isOpen&&t.commit(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}},Escape:()=>{let n=!1;return(!t.selectionManager.isEmpty||t.inputValue===``||e.allowsCustomValue)&&(n=!0),t.revert(),{shouldContinuePropagation:n}}}}),{keyboardProps:S}=et({shortcuts:{ArrowDown:()=>(t.open(`first`,`manual`),{shouldPreventDefault:!1}),ArrowUp:()=>(t.open(`last`,`manual`),{shouldPreventDefault:!1}),ArrowLeft:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1}),ArrowRight:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1})},allowRepeats:!0}),C=i=>{let a=n?.current&&n.current===i.relatedTarget,o=f(r.current,i.relatedTarget);a||o||(e.onBlur&&e.onBlur(i),t.setFocused(!1))},w=n=>{t.isFocused||(e.onFocus&&e.onFocus(n),t.setFocused(!0))},T=kh([t.selectionManager.selectedKeys,t.selectionManager.selectionMode]),{isInvalid:O,validationErrors:k,validationDetails:A}=t.displayValidation,{labelProps:j,inputProps:M,descriptionProps:N,errorMessageProps:P}=Cu({...e,isRequired:e.selectionMode===`multiple`?e.isRequired&&t.selectionManager.isEmpty:e.isRequired,onChange:t.setInputValue,onKeyDown:l?e.onKeyDown:Ce(t.isOpen&&y.onKeyDown,x.onKeyDown,S.onKeyDown,e.onKeyDown),onBlur:C,value:t.inputValue,defaultValue:t.defaultInputValue,onFocus:w,autoComplete:`off`,validate:void 0,[Vl]:t,"aria-describedby":[T,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0},i);_l(i,t.defaultValue,t.setValue);let F=e=>{e.pointerType===`touch`&&(i.current?.focus(),t.toggle(null,`manual`))},I=e=>{e.pointerType!==`touch`&&(i.current?.focus(),t.toggle(e.pointerType===`keyboard`||e.pointerType===`virtual`?`first`:null,`manual`))},L=ge({id:m.id,"aria-label":p.format(`buttonLabel`),"aria-labelledby":e[`aria-labelledby`]||j.id}),R=ge({id:h.id,"aria-label":p.format(`listboxLabel`),"aria-labelledby":e[`aria-labelledby`]||j.id}),z=(0,Ah.useRef)(0),ee=e=>{if(u||l)return;if(e.timeStamp-z.current<500){e.preventDefault(),i.current?.focus();return}let n=H(e).getBoundingClientRect(),r=e.changedTouches[0],a=Math.ceil(n.left+.5*n.width),o=Math.ceil(n.top+.5*n.height);r.clientX===a&&r.clientY===o&&(e.preventDefault(),i.current?.focus(),t.toggle(null,`manual`),z.current=e.timeStamp)},te=t.selectionManager.focusedKey!=null&&t.isOpen?t.collection.getItem(t.selectionManager.focusedKey):void 0,B=te?.parentKey??null,re=t.selectionManager.focusedKey??null,ie=(0,Ah.useRef)(B),ae=(0,Ah.useRef)(re);(0,Ah.useEffect)(()=>{if(D()&&te!=null&&re!=null&&re!==ae.current){let e=t.selectionManager.isSelected(re),n=B==null?null:t.collection.getItem(B),r=n?.[`aria-label`]||(typeof n?.rendered==`string`?n.rendered:``)||``;zr(p.format(`focusAnnouncement`,{isGroupChange:(n&&B!==ie.current)??!1,groupTitle:r,groupCount:n?[...yh(n,t.collection)].length:0,optionText:te[`aria-label`]||te.textValue||``,isSelected:e}))}ie.current=B,ae.current=re});let oe=wh(t.collection),se=(0,Ah.useRef)(oe),ce=(0,Ah.useRef)(t.isOpen);(0,Ah.useEffect)(()=>{let e=t.isOpen!==ce.current&&(t.selectionManager.focusedKey==null||D());t.isOpen&&(e||oe!==se.current)&&zr(p.format(`countAnnouncement`,{optionCount:oe})),se.current=oe,ce.current=t.isOpen});let le=(0,Ah.useRef)(t.selectedKey);return(0,Ah.useEffect)(()=>{if(D()&&t.isFocused&&t.selectedItem&&t.selectedKey!==le.current){let e=t.selectedItem[`aria-label`]||t.selectedItem.textValue||``;zr(p.format(`selectedAnnouncement`,{optionText:e}))}le.current=t.selectedKey}),(0,Ah.useEffect)(()=>{if(t.isOpen)return Se([i.current,r.current].filter(e=>e!=null))},[t.isOpen,i,r]),Gc(()=>{!te&&i.current&&ut(Te(i.current))===i.current&&Ht(i.current,null)},[te]),cr(a,`react-aria-item-action`,t.isOpen?()=>{t.close()}:void 0),{labelProps:{...j,onClick:`htmlFor`in j&&j.htmlFor||e.isDisabled?void 0:()=>{i.current?.focus(),gt(`keyboard`)}},buttonProps:{...m,...L,excludeFromTabOrder:!0,preventFocusOnPress:!0,onPress:F,onPressStart:I,isDisabled:u||l},inputProps:U(M,{role:`combobox`,"aria-expanded":m[`aria-expanded`],"aria-controls":t.isOpen?h.id:void 0,"aria-autocomplete":`list`,"aria-activedescendant":te?Zd(t,te.key):void 0,onTouchEnd:ee,autoCorrect:`off`,spellCheck:`false`}),listBoxProps:U(h,R,{onAction:void 0,autoFocus:t.focusStrategy||!0,shouldUseVirtualFocus:!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,linkBehavior:`selection`,UNSTABLE_itemBehavior:`action`}),valueProps:{id:T},descriptionProps:N,errorMessageProps:P,isInvalid:O,validationErrors:k,validationDetails:A}}function kh(e=[]){let t=Re(),[n,r]=(0,Ah.useState)(!0),[i,a]=(0,Ah.useState)(e);return i.some((t,n)=>!Object.is(t,e[n]))&&(r(!0),a(e)),(0,Ah.useEffect)(()=>{n&&!document.getElementById(t)&&r(!1)},[t,n,i]),n?t:void 0}var Ah;function jh(){return(jh=t((()=>{Wr(),mt(),Wt(),Be(),$d(),Ae(),gp(),he(),Ep(),V(),ee(),ur(),yl(),Le(),ct(),be(),ue(),oh(),C(),vh(),Tu(),qc(),Ah=r(),Eh(),Hl()})))()}var Mh;function Nh(){return(Nh=t((()=>{Mh={},Mh={calendar:`التقويم`,day:`يوم`,dayPeriod:`ص/م`,endDate:`تاريخ الانتهاء`,era:`العصر`,hour:`الساعات`,minute:`الدقائق`,month:`الشهر`,second:`الثواني`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,selectedTimeDescription:e=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,startDate:`تاريخ البدء`,timeZoneName:`التوقيت`,weekday:`اليوم`,year:`السنة`}})))()}var Ph;function Fh(){return(Fh=t((()=>{Ph={},Ph={calendar:`Календар`,day:`ден`,dayPeriod:`пр.об./сл.об.`,endDate:`Крайна дата`,era:`ера`,hour:`час`,minute:`минута`,month:`месец`,second:`секунда`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,startDate:`Начална дата`,timeZoneName:`часова зона`,weekday:`ден от седмицата`,year:`година`}})))()}var Ih;function Lh(){return(Lh=t((()=>{Ih={},Ih={calendar:`Kalendář`,day:`den`,dayPeriod:`část dne`,endDate:`Konečné datum`,era:`letopočet`,hour:`hodina`,minute:`minuta`,month:`měsíc`,second:`sekunda`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,selectedTimeDescription:e=>`Vybran\xfd \u{10D}as: ${e.time}`,startDate:`Počáteční datum`,timeZoneName:`časové pásmo`,weekday:`den v týdnu`,year:`rok`}})))()}var Rh;function zh(){return(zh=t((()=>{Rh={},Rh={calendar:`Kalender`,day:`dag`,dayPeriod:`AM/PM`,endDate:`Slutdato`,era:`æra`,hour:`time`,minute:`minut`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tidspunkt: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidszone`,weekday:`ugedag`,year:`år`}})))()}var Bh;function Vh(){return(Vh=t((()=>{Bh={},Bh={calendar:`Kalender`,day:`Tag`,dayPeriod:`Tageshälfte`,endDate:`Enddatum`,era:`Epoche`,hour:`Stunde`,minute:`Minute`,month:`Monat`,second:`Sekunde`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,selectedTimeDescription:e=>`Ausgew\xe4hlte Zeit: ${e.time}`,startDate:`Startdatum`,timeZoneName:`Zeitzone`,weekday:`Wochentag`,year:`Jahr`}})))()}var Hh;function Uh(){return(Uh=t((()=>{Hh={},Hh={calendar:`Ημερολόγιο`,day:`ημέρα`,dayPeriod:`π.μ./μ.μ.`,endDate:`Ημερομηνία λήξης`,era:`περίοδος`,hour:`ώρα`,minute:`λεπτό`,month:`μήνας`,second:`δευτερόλεπτο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,selectedTimeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,startDate:`Ημερομηνία έναρξης`,timeZoneName:`ζώνη ώρας`,weekday:`καθημερινή`,year:`έτος`}})))()}var Wh;function Gh(){return(Gh=t((()=>{Wh={},Wh={era:`era`,year:`year`,month:`month`,day:`day`,hour:`hour`,minute:`minute`,second:`second`,dayPeriod:`AM/PM`,calendar:`Calendar`,startDate:`Start Date`,endDate:`End Date`,weekday:`day of the week`,timeZoneName:`time zone`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.startDate} to ${e.endDate}`,selectedTimeDescription:e=>`Selected Time: ${e.time}`}})))()}var Kh;function qh(){return(qh=t((()=>{Kh={},Kh={calendar:`Calendario`,day:`día`,dayPeriod:`a.\xA0m./p.\xA0m.`,endDate:`Fecha final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mes`,second:`segundo`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Rango seleccionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora seleccionada: ${e.time}`,startDate:`Fecha de inicio`,timeZoneName:`zona horaria`,weekday:`día de la semana`,year:`año`}})))()}var Jh;function Yh(){return(Yh=t((()=>{Jh={},Jh={calendar:`Kalender`,day:`päev`,dayPeriod:`enne/pärast lõunat`,endDate:`Lõppkuupäev`,era:`ajastu`,hour:`tund`,minute:`minut`,month:`kuu`,second:`sekund`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,selectedTimeDescription:e=>`Valitud aeg: ${e.time}`,startDate:`Alguskuupäev`,timeZoneName:`ajavöönd`,weekday:`nädalapäev`,year:`aasta`}})))()}var Xh;function Zh(){return(Zh=t((()=>{Xh={},Xh={calendar:`Kalenteri`,day:`päivä`,dayPeriod:`vuorokaudenaika`,endDate:`Päättymispäivä`,era:`aikakausi`,hour:`tunti`,minute:`minuutti`,month:`kuukausi`,second:`sekunti`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,selectedTimeDescription:e=>`Valittu aika: ${e.time}`,startDate:`Alkamispäivä`,timeZoneName:`aikavyöhyke`,weekday:`viikonpäivä`,year:`vuosi`}})))()}var Qh;function $h(){return($h=t((()=>{Qh={},Qh={calendar:`Calendrier`,day:`jour`,dayPeriod:`cadran`,endDate:`Date de fin`,era:`ère`,hour:`heure`,minute:`minute`,month:`mois`,second:`seconde`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,selectedTimeDescription:e=>`Heure choisie\xa0: ${e.time}`,startDate:`Date de début`,timeZoneName:`fuseau horaire`,weekday:`jour de la semaine`,year:`année`}})))()}var eg;function tg(){return(tg=t((()=>{eg={},eg={calendar:`לוח שנה`,day:`יום`,dayPeriod:`לפנה״צ/אחה״צ`,endDate:`תאריך סיום`,era:`תקופה`,hour:`שעה`,minute:`דקה`,month:`חודש`,second:`שנייה`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,selectedTimeDescription:e=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,startDate:`תאריך התחלה`,timeZoneName:`אזור זמן`,weekday:`יום בשבוע`,year:`שנה`}})))()}var ng;function rg(){return(rg=t((()=>{ng={},ng={calendar:`Kalendar`,day:`dan`,dayPeriod:`AM/PM`,endDate:`Datum završetka`,era:`era`,hour:`sat`,minute:`minuta`,month:`mjesec`,second:`sekunda`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Odabrano vrijeme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`vremenska zona`,weekday:`dan u tjednu`,year:`godina`}})))()}var ig;function ag(){return(ag=t((()=>{ig={},ig={calendar:`Naptár`,day:`nap`,dayPeriod:`napszak`,endDate:`Befejező dátum`,era:`éra`,hour:`óra`,minute:`perc`,month:`hónap`,second:`másodperc`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,selectedTimeDescription:e=>`Kijel\xf6lt id\u{151}: ${e.time}`,startDate:`Kezdő dátum`,timeZoneName:`időzóna`,weekday:`hét napja`,year:`év`}})))()}var og;function sg(){return(sg=t((()=>{og={},og={calendar:`Calendario`,day:`giorno`,dayPeriod:`AM/PM`,endDate:`Data finale`,era:`era`,hour:`ora`,minute:`minuto`,month:`mese`,second:`secondo`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Ora selezionata: ${e.time}`,startDate:`Data iniziale`,timeZoneName:`fuso orario`,weekday:`giorno della settimana`,year:`anno`}})))()}var cg;function lg(){return(lg=t((()=>{cg={},cg={calendar:`カレンダー`,day:`日`,dayPeriod:`午前/午後`,endDate:`終了日`,era:`時代`,hour:`時`,minute:`分`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,startDate:`開始日`,timeZoneName:`タイムゾーン`,weekday:`曜日`,year:`年`}})))()}var ug;function dg(){return(dg=t((()=>{ug={},ug={calendar:`달력`,day:`일`,dayPeriod:`오전/오후`,endDate:`종료일`,era:`연호`,hour:`시`,minute:`분`,month:`월`,second:`초`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,selectedTimeDescription:e=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,startDate:`시작일`,timeZoneName:`시간대`,weekday:`요일`,year:`년`}})))()}var fg;function pg(){return(pg=t((()=>{fg={},fg={calendar:`Kalendorius`,day:`diena`,dayPeriod:`iki pietų / po pietų`,endDate:`Pabaigos data`,era:`era`,hour:`valanda`,minute:`minutė`,month:`mėnuo`,second:`sekundė`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,selectedTimeDescription:e=>`Pasirinktas laikas: ${e.time}`,startDate:`Pradžios data`,timeZoneName:`laiko juosta`,weekday:`savaitės diena`,year:`metai`}})))()}var mg;function hg(){return(hg=t((()=>{mg={},mg={calendar:`Kalendārs`,day:`diena`,dayPeriod:`priekšpusdienā/pēcpusdienā`,endDate:`Beigu datums`,era:`ēra`,hour:`stundas`,minute:`minūtes`,month:`mēnesis`,second:`sekundes`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,selectedTimeDescription:e=>`Atlas\u{12B}tais laiks: ${e.time}`,startDate:`Sākuma datums`,timeZoneName:`laika josla`,weekday:`nedēļas diena`,year:`gads`}})))()}var gg;function _g(){return(_g=t((()=>{gg={},gg={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Sluttdato`,era:`tidsalder`,hour:`time`,minute:`minutt`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tid: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidssone`,weekday:`ukedag`,year:`år`}})))()}var vg;function yg(){return(yg=t((()=>{vg={},vg={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Einddatum`,era:`tijdperk`,hour:`uur`,minute:`minuut`,month:`maand`,second:`seconde`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,selectedTimeDescription:e=>`Geselecteerde tijd: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tijdzone`,weekday:`dag van de week`,year:`jaar`}})))()}var bg;function xg(){return(xg=t((()=>{bg={},bg={calendar:`Kalendarz`,day:`dzień`,dayPeriod:`rano / po południu / wieczorem`,endDate:`Data końcowa`,era:`era`,hour:`godzina`,minute:`minuta`,month:`miesiąc`,second:`sekunda`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Wybrany czas: ${e.time}`,startDate:`Data początkowa`,timeZoneName:`strefa czasowa`,weekday:`dzień tygodnia`,year:`rok`}})))()}var Sg;function Cg(){return(Cg=t((()=>{Sg={},Sg={calendar:`Calendário`,day:`dia`,dayPeriod:`AM/PM`,endDate:`Data final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data inicial`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var wg;function Tg(){return(Tg=t((()=>{wg={},wg={calendar:`Calendário`,day:`dia`,dayPeriod:`am/pm`,endDate:`Data de Término`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data de Início`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var Eg;function Dg(){return(Dg=t((()=>{Eg={},Eg={calendar:`Calendar`,day:`zi`,dayPeriod:`a.m/p.m.`,endDate:`Dată final`,era:`eră`,hour:`oră`,minute:`minut`,month:`lună`,second:`secundă`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,selectedTimeDescription:e=>`Ora selectat\u{103}: ${e.time}`,startDate:`Dată început`,timeZoneName:`fus orar`,weekday:`ziua din săptămână`,year:`an`}})))()}var Og;function kg(){return(kg=t((()=>{Og={},Og={calendar:`Календарь`,day:`день`,dayPeriod:`AM/PM`,endDate:`Дата окончания`,era:`эра`,hour:`час`,minute:`минута`,month:`месяц`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,startDate:`Дата начала`,timeZoneName:`часовой пояс`,weekday:`день недели`,year:`год`}})))()}var Ag;function jg(){return(jg=t((()=>{Ag={},Ag={calendar:`Kalendár`,day:`deň`,dayPeriod:`AM/PM`,endDate:`Dátum ukončenia`,era:`letopočet`,hour:`hodina`,minute:`minúta`,month:`mesiac`,second:`sekunda`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Vybrat\xfd \u{10D}as: ${e.time}`,startDate:`Dátum začatia`,timeZoneName:`časové pásmo`,weekday:`deň týždňa`,year:`rok`}})))()}var Mg;function Ng(){return(Ng=t((()=>{Mg={},Mg={calendar:`Koledar`,day:`dan`,dayPeriod:`dop/pop`,endDate:`Datum konca`,era:`doba`,hour:`ura`,minute:`minuta`,month:`mesec`,second:`sekunda`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izbrani \u{10D}as: ${e.time}`,startDate:`Datum začetka`,timeZoneName:`časovni pas`,weekday:`dan v tednu`,year:`leto`}})))()}var Pg;function Fg(){return(Fg=t((()=>{Pg={},Pg={calendar:`Kalendar`,day:`дан`,dayPeriod:`пре подне/по подне`,endDate:`Datum završetka`,era:`ера`,hour:`сат`,minute:`минут`,month:`месец`,second:`секунд`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izabrano vreme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`временска зона`,weekday:`дан у недељи`,year:`година`}})))()}var Ig;function Lg(){return(Lg=t((()=>{Ig={},Ig={calendar:`Kalender`,day:`dag`,dayPeriod:`fm/em`,endDate:`Slutdatum`,era:`era`,hour:`timme`,minute:`minut`,month:`månad`,second:`sekund`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.startDate} till ${e.endDate}`,selectedTimeDescription:e=>`Vald tid: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tidszon`,weekday:`veckodag`,year:`år`}})))()}var Rg;function zg(){return(zg=t((()=>{Rg={},Rg={calendar:`Takvim`,day:`gün`,dayPeriod:`ÖÖ/ÖS`,endDate:`Bitiş Tarihi`,era:`çağ`,hour:`saat`,minute:`dakika`,month:`ay`,second:`saniye`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,selectedTimeDescription:e=>`Se\xe7ilen Zaman: ${e.time}`,startDate:`Başlangıç Tarihi`,timeZoneName:`saat dilimi`,weekday:`haftanın günü`,year:`yıl`}})))()}var Bg;function Vg(){return(Vg=t((()=>{Bg={},Bg={calendar:`Календар`,day:`день`,dayPeriod:`дп/пп`,endDate:`Дата завершення`,era:`ера`,hour:`година`,minute:`хвилина`,month:`місяць`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,startDate:`Дата початку`,timeZoneName:`часовий пояс`,weekday:`день тижня`,year:`рік`}})))()}var Hg;function Ug(){return(Ug=t((()=>{Hg={},Hg={calendar:`日历`,day:`日`,dayPeriod:`上午/下午`,endDate:`结束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,startDate:`开始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var Wg;function Gg(){return(Gg=t((()=>{Wg={},Wg={calendar:`日曆`,day:`日`,dayPeriod:`上午/下午`,endDate:`結束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,startDate:`開始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var Kg;function qg(){return(qg=t((()=>{Nh(),Fh(),Lh(),zh(),Vh(),Uh(),Gh(),qh(),Yh(),Zh(),$h(),tg(),rg(),ag(),sg(),lg(),dg(),pg(),hg(),_g(),yg(),xg(),Cg(),Tg(),Dg(),kg(),jg(),Ng(),Fg(),Lg(),zg(),Vg(),Ug(),Gg(),Kg={},Kg={"ar-AE":Mh,"bg-BG":Ph,"cs-CZ":Ih,"da-DK":Rh,"de-DE":Bh,"el-GR":Hh,"en-US":Wh,"es-ES":Kh,"et-EE":Jh,"fi-FI":Xh,"fr-FR":Qh,"he-IL":eg,"hr-HR":ng,"hu-HU":ig,"it-IT":og,"ja-JP":cg,"ko-KR":ug,"lt-LT":fg,"lv-LV":mg,"nb-NO":gg,"nl-NL":vg,"pl-PL":bg,"pt-BR":Sg,"pt-PT":wg,"ro-RO":Eg,"ru-RU":Og,"sk-SK":Ag,"sl-SI":Mg,"sr-SP":Pg,"sv-SE":Ig,"tr-TR":Rg,"uk-UA":Bg,"zh-CN":Hg,"zh-TW":Wg}})))()}function Jg(e,t,n){let{direction:r}=A(),i=(0,Xg.useMemo)(()=>He(t),[t]),{keyboardProps:a}=et({shortcuts:{"Alt+ArrowDown":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},"Alt+ArrowUp":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},ArrowLeft:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=H(e),r=Yg(t.current,n.getBoundingClientRect().left,-1);if(r){r.focus();return}}}else{i.focusPrevious();return}return!1},ArrowRight:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=H(e),r=Yg(t.current,n.getBoundingClientRect().left,1);if(r){r.focus();return}}}else{i.focusNext();return}return!1}},allowRepeats:!0}),o=()=>{if(!t.current)return;let e=window.event?H(window.event):null,n=p(t.current,{tabbable:!0});if(e&&=(n.currentNode=e,n.previousNode()),!e){let t;do t=n.lastChild(),t&&(e=t);while(t)}for(;e?.hasAttribute(`data-placeholder`);){let t=n.previousNode();if(t&&t.hasAttribute(`data-placeholder`))e=t;else break}e&&e.focus()},{pressProps:s}=xr({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(e){e.pointerType===`mouse`&&o()},onPress(e){(e.pointerType===`touch`||e.pointerType===`pen`)&&o()}});return U(s,a)}function Yg(e,t,n){let r=p(e,{tabbable:!0}),i=r.nextNode(),a=null,o=1/0;for(;i;){let e=i.getBoundingClientRect().left-t,s=Math.abs(e);Math.sign(e)===n&&s<o&&(a=i,o=s),i=r.nextNode()}return a}var Xg;function Zg(){return(Zg=t((()=>{I(),Be(),V(),ct(),ve(),Pr(),Xg=r()})))()}function Qg(e){return e&&e.__esModule?e.default:e}function $g(e,t,n){let{isInvalid:r,validationErrors:i,validationDetails:a}=t.displayValidation,{labelProps:o,fieldProps:s,descriptionProps:c,errorMessageProps:l}=Xl({...e,labelElementType:`span`,isInvalid:r,errorMessage:e.errorMessage||i}),u=(0,t_.useRef)(null),{focusWithinProps:d}=g({...e,onFocusWithin(n){u.current=t.value,e.onFocus?.(n)},onBlurWithin:n=>{t.confirmPlaceholder(),t.value!==u.current&&t.commitValidation(),e.onBlur?.(n)},onFocusWithinChange:e.onFocusChange}),f=E(Qg(Kg),`@react-aria/datepicker`),p=t.maxGranularity===`hour`?`selectedTimeDescription`:`selectedDateDescription`,m=t.maxGranularity===`hour`?`time`:`date`,h=al(t.value?f.format(p,{[m]:t.formatValue({month:`long`})}):``),_=e.__reactAriaDateFieldRole===`presentation`?s[`aria-describedby`]:[h[`aria-describedby`],s[`aria-describedby`]].filter(Boolean).join(` `)||void 0,v=e[i_],y=(0,t_.useMemo)(()=>v||He(n),[v,n]),b=Jg(t,n,e[r_]===`presentation`);n_.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:[o.id,e[`aria-labelledby`]].filter(Boolean).join(` `)||void 0,ariaDescribedBy:_,focusManager:y});let x=(0,t_.useRef)(e.autoFocus),S;S=e.__reactAriaDateFieldRole===`presentation`?{role:`presentation`}:U(s,{role:`group`,"aria-disabled":e.isDisabled||void 0,"aria-describedby":_}),(0,t_.useEffect)(()=>{x.current&&y.focusFirst(),x.current=!1},[y]),_l(e.inputRef,t.defaultValue,t.setValue),bl({...e,focus(){y.focusFirst()}},t,e.inputRef);let C={type:`hidden`,name:e.name,form:e.form,value:t.value?.toString()||``,disabled:e.isDisabled};e.validationBehavior===`native`&&(C.type=`text`,C.hidden=!0,C.required=e.isRequired,C.onChange=()=>{});let w=xt(e);return{labelProps:{...o,onClick:()=>{y.focusFirst()}},fieldProps:U(w,S,b,d,{onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,style:{unicodeBidi:`isolate`}}),inputProps:C,descriptionProps:c,errorMessageProps:l,isInvalid:r,validationErrors:i,validationDetails:a}}function e_(e,t,n){let r=$g(e,t,n);return r.inputProps.value=t.timeValue?.toString()||``,r}var t_,n_,r_,i_;function a_(){return(a_=t((()=>{I(),m(),qg(),V(),Zg(),ll(),Zl(),ht(),yl(),Tl(),ue(),t_=r(),n_=new WeakMap,r_=`__reactAriaDateFieldRole`,i_=`__reactAriaDateFieldFocusManager`})))()}function o_(e){return e&&e.__esModule?e.default:e}function s_(e,t,n){let r=Re(),i=Re(),a=Re(),o=E(o_(Kg),`@react-aria/datepicker`),{isInvalid:s,validationErrors:c,validationDetails:l}=t.displayValidation,{labelProps:u,fieldProps:d,descriptionProps:p,errorMessageProps:m}=Xl({...e,labelElementType:`span`,isInvalid:s,errorMessage:e.errorMessage||c}),h=Jg(t,n),_=d[`aria-labelledby`]||d.id,{locale:v}=A(),y=t.formatValue(v,{month:`long`}),b=al(y?o.format(`selectedDateDescription`,{date:y}):``),x=[b[`aria-describedby`],d[`aria-describedby`]].filter(Boolean).join(` `)||void 0,S=xt(e),C=(0,c_.useMemo)(()=>He(n),[n]),w=(0,c_.useRef)(!1),{focusWithinProps:T}=g({...e,isDisabled:t.isOpen,onBlurWithin:t=>{let n=document.getElementById(i);f(n,t.relatedTarget)||(w.current=!1,e.onBlur?.(t),e.onFocusChange?.(!1))},onFocusWithin:t=>{w.current||(w.current=!0,e.onFocus?.(t),e.onFocusChange?.(!0))}});return{groupProps:U(S,h,d,b,T,{role:`group`,"aria-disabled":e.isDisabled||null,"aria-labelledby":_,"aria-describedby":x,onKeyDown(n){t.isOpen||e.onKeyDown&&e.onKeyDown(n)},onKeyUp(n){t.isOpen||e.onKeyUp&&e.onKeyUp(n)}}),labelProps:{...u,onClick:()=>{C.focusFirst()}},fieldProps:{...d,id:a,[r_]:`presentation`,"aria-describedby":x,value:t.value,defaultValue:t.defaultValue,onChange:t.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[Vl]:t,autoFocus:e.autoFocus,name:e.name,form:e.form},descriptionProps:p,errorMessageProps:m,buttonProps:{...b,id:r,"aria-haspopup":`dialog`,"aria-label":o.format(`calendar`),"aria-labelledby":`${r} ${_}`,"aria-describedby":x,"aria-expanded":t.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>t.setOpen(!0)},dialogProps:{id:i,"aria-labelledby":`${r} ${_}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,isInvalid:t.isInvalid,errorMessage:typeof e.errorMessage==`function`?e.errorMessage(t.displayValidation):e.errorMessage||t.displayValidation.validationErrors.join(` `),firstDayOfWeek:e.firstDayOfWeek,pageBehavior:e.pageBehavior},isInvalid:s,validationErrors:c,validationDetails:l}}var c_;function l_(){return(l_=t((()=>{I(),m(),qg(),V(),Be(),a_(),Zg(),ll(),Zl(),ht(),Le(),ve(),ue(),Hl(),c_=r()})))()}function u_(e){return e&&e.__esModule?e.default:e}function d_(){let{locale:e}=A(),t=fe(u_(Kg),`@react-aria/datepicker`);return(0,f_.useMemo)(()=>{try{return new Intl.DisplayNames(e,{type:`dateTimeField`})}catch{return new p_(e,t)}},[e,t])}var f_,p_;function m_(){return(m_=t((()=>{qg(),ve(),ue(),f_=r(),p_=class{constructor(e,t){this.locale=e,this.dictionary=t}of(e){return this.dictionary.getStringForLocale(e,this.locale)}}})))()}function h_(e){let{locale:t}=A(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(g_.has(n))return g_.get(n);let r=new Intl.Collator(t,e);return g_.set(n,r),r}var g_;function __(){return(__=t((()=>{ve(),g_=new Map})))()}function v_(e){let t=h_({usage:`search`,...e}),n=(0,y_.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(0,n.length),n)===0),[t]),r=(0,y_.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(-n.length),n)===0),[t]),i=(0,y_.useCallback)((e,n)=>{if(n.length===0)return!0;e=e.normalize(`NFC`),n=n.normalize(`NFC`);let r=0,i=n.length;for(;r+i<=e.length;r++){let a=e.slice(r,r+i);if(t.compare(n,a)===0)return!0}return!1},[t]);return(0,y_.useMemo)(()=>({startsWith:n,endsWith:r,contains:i}),[n,r,i])}var y_;function b_(){return(b_=t((()=>{__(),y_=r()})))()}function x_(e,t,n){let r=(0,C_.useRef)(``),{locale:i,direction:a}=A(),o=d_(),{ariaLabel:s,ariaLabelledBy:c,ariaDescribedBy:l,focusManager:u}=n_.get(t),d=e.isPlaceholder?``:e.text,p=(0,C_.useMemo)(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),m=Nc({month:`long`,timeZone:p.timeZone}),h=Nc({hour:`numeric`,hour12:p.hour12,timeZone:p.timeZone});if(e.type===`month`&&!e.isPlaceholder){let e=m.format(t.dateValue);d=e===d?e:`${d} \u{2013} ${e}`}else e.type===`hour`&&!e.isPlaceholder&&(d=h.format(t.dateValue));let{spinButtonProps:g}=Kd({value:e.value??void 0,textValue:d,minValue:e.minValue,maxValue:e.maxValue,isDisabled:t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:t.isRequired,onIncrement:()=>{r.current=``,t.increment(e.type)},onDecrement:()=>{r.current=``,t.decrement(e.type)},onIncrementPage:()=>{r.current=``,t.incrementPage(e.type)},onDecrementPage:()=>{r.current=``,t.decrementPage(e.type)},onIncrementToMax:()=>{r.current=``,t.incrementToMax(e.type)},onDecrementToMin:()=>{r.current=``,t.decrementToMin(e.type)}}),_=(0,C_.useMemo)(()=>new _u(i,{maximumFractionDigits:0}),[i]),v=()=>{if(e.text===e.placeholder&&u.focusPrevious(),_.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){let n=e.text.slice(0,-1),i=_.parse(n);n=i===0?``:n,n.length===0||i===0?t.clearSegment(e.type):t.setSegment(e.type,i),r.current=n}else(e.type===`dayPeriod`||e.type===`era`)&&t.clearSegment(e.type)},{keyboardProps:y}=et({shortcuts:{Backspace:()=>{v()},Delete:()=>{v()},"Mod+a":()=>{}},allowRepeats:!0}),{startsWith:b}=v_({sensitivity:`base`}),x=Nc({hour:`numeric`,hour12:!0}),S=(0,C_.useMemo)(()=>{let e=new Date;return e.setHours(0),x.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[x]),C=(0,C_.useMemo)(()=>{let e=new Date;return e.setHours(12),x.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[x]),w=Nc({year:`numeric`,era:`narrow`,timeZone:`UTC`}),T=(0,C_.useMemo)(()=>{if(e.type!==`era`)return[];let n=so(new ts(1,1,1),t.calendar),r=t.calendar.getEras().map(e=>{let t=n.set({year:1,month:1,day:1,era:e}).toDate(`UTC`);return{era:e,formatted:w.formatToParts(t).find(e=>e.type===`era`).value}}),i=S_(r.map(e=>e.formatted));if(i)for(let e of r)e.formatted=e.formatted.slice(i);return r},[w,t.calendar,e.type]),E=n=>{if(t.isDisabled||t.isReadOnly)return;let i=r.current+n;switch(e.type){case`dayPeriod`:if(b(S,n))t.setSegment(`dayPeriod`,0);else if(b(C,n))t.setSegment(`dayPeriod`,1);else break;u.focusNext();break;case`era`:{let e=T.find(e=>b(e.formatted,n));e&&(t.setSegment(`era`,e.era),u.focusNext());break}case`day`:case`hour`:case`minute`:case`second`:case`month`:case`year`:{if(!_.isValidPartialNumber(i))return;let a=_.parse(i),o=a;if(e.maxValue!==void 0&&a>e.maxValue&&(o=_.parse(n)),isNaN(a))return;t.setSegment(e.type,o),e.maxValue!==void 0&&(Number(a+`0`)>e.maxValue||i.length>=String(e.maxValue).length)?(r.current=``,u.focusNext()):r.current=i;break}}},D=()=>{r.current=``,n.current&&rl(n.current,{containingElement:ce(n.current)}),window.getSelection()?.collapse(n.current)};cr((0,C_.useRef)(typeof document<`u`?document:null),`selectionchange`,()=>{let e=window.getSelection();e?.anchorNode&&f(n.current,e?.anchorNode)&&ut()===n.current&&e.collapse(n.current)});let O=(0,C_.useRef)(``);cr(n,`beforeinput`,r=>{if(n.current)switch(r.preventDefault(),r.inputType){case`deleteContentBackward`:case`deleteContentForward`:_.isValidPartialNumber(e.text)&&!t.isReadOnly&&v();break;case`insertCompositionText`:O.current=n.current.textContent,n.current.textContent=n.current.textContent;break;default:r.data!=null&&E(r.data)}}),cr(n,`input`,e=>{let{inputType:t,data:r}=e;t===`insertCompositionText`&&(n.current&&(n.current.textContent=O.current),r!=null&&(b(S,r)||b(C,r))&&E(r))}),ye(()=>{let e=n.current;return()=>{ut()===e&&(u.focusPrevious()||u.focusNext())}},[n,u]);let k=de()||e.type===`timeZoneName`?{role:`textbox`,"aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{};e!==(0,C_.useMemo)(()=>t.segments.find(e=>e.isEditable),[t.segments])&&!t.isInvalid&&(l=void 0);let j=Re(),M=!t.isDisabled&&!t.isReadOnly&&e.isEditable,N=e.type===`literal`?``:o.of(e.type),P=ge({"aria-label":`${N}${s?`, ${s}`:``}${c?`, `:``}`,"aria-labelledby":c});if(e.type===`literal`)return{segmentProps:{"aria-hidden":!0}};let F={caretColor:`transparent`};if(a===`rtl`){F.unicodeBidi=`embed`;let t=p[e.type];(t===`numeric`||t===`2-digit`)&&(F.direction=`ltr`)}return{segmentProps:U(g,P,{id:j,...k,...y,"aria-invalid":t.isInvalid?`true`:void 0,"aria-describedby":l,"aria-readonly":t.isReadOnly||!e.isEditable?`true`:void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:M,suppressContentEditableWarning:M,spellCheck:M?`false`:void 0,autoCorrect:M?`off`:void 0,enterKeyHint:M?`next`:void 0,inputMode:t.isDisabled||e.type===`dayPeriod`||e.type===`era`||!M?void 0:`numeric`,tabIndex:t.isDisabled?void 0:0,onFocus:D,style:F,onPointerDown(e){e.stopPropagation()},onMouseDown(e){e.stopPropagation()}})}}function S_(e){e.sort();let t=e[0],n=e[e.length-1];for(let e=0;e<t.length;e++)if(t[e]!==n[e])return e;return 0}var C_;function w_(){return(w_=t((()=>{Be(),b(),a_(),he(),V(),il(),Ic(),m_(),ur(),b_(),Le(),ct(),be(),_e(),ve(),Yd(),mo(),as(),Su(),C_=e(r(),1)})))()}function T_(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,i=(0,E_.useRef)({isFocused:!1,isFocusVisible:t||x()}),[a,o]=(0,E_.useState)(!1),[s,c]=(0,E_.useState)(()=>i.current.isFocused&&i.current.isFocusVisible),l=(0,E_.useCallback)(()=>c(i.current.isFocused&&i.current.isFocusVisible),[]),u=(0,E_.useCallback)(e=>{i.current.isFocused=e,i.current.isFocusVisible=x(),o(e),l()},[l]);y(e=>{i.current.isFocusVisible=e,l()},[n,a],{enabled:a,isTextInput:n});let{focusProps:d}=je({isDisabled:r,onFocusChange:u}),{focusWithinProps:f}=g({isDisabled:!r,onFocusWithinChange:u});return{isFocused:a,isFocusVisible:s,focusProps:r?f:d}}var E_;function D_(){return(D_=t((()=>{ee(),qe(),ht(),E_=r()})))()}function O_(){N_=!0,setTimeout(()=>{N_=!1},500)}function k_(e){e.pointerType===`touch`&&O_()}function A_(){let e=Te(null);if(e!==void 0)return P_===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,k_),P_++,()=>{P_--,!(P_>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,k_)}}function j_(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,M_.useState)(!1),s=(0,M_.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,M_.useEffect)(A_,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=R(),{hoverProps:u,triggerHoverEnd:d}=(0,M_.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!f(e.currentTarget,H(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(Te(H(e)),`pointerover`,e=>{s.isHovered&&s.target&&!f(s.target,H(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,!(t===`touch`||!s.isHovered||!i)&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{N_&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&f(e.currentTarget,H(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,M_.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var M_,N_,P_;function F_(){return(F_=t((()=>{Be(),Ae(),te(),M_=r(),N_=!1,P_=0})))()}function I_(e){let{selectionManager:t,collection:n,disabledKeys:r,ref:i,keyboardDelegate:a,layoutDelegate:o,orientation:s}=e,c=h_({usage:`search`,sensitivity:`base`}),l=t.disabledBehavior,u=(0,L_.useMemo)(()=>a||new Tp({collection:n,disabledKeys:r,disabledBehavior:l,ref:i,collator:c,layoutDelegate:o,orientation:s}),[a,o,n,r,i,c,l,s]),{collectionProps:d}=hh({...e,ref:i,selectionManager:t,keyboardDelegate:u});return{listProps:d}}var L_;function R_(){return(R_=t((()=>{vh(),Ep(),__(),L_=r()})))()}function z_(e){let{id:t,selectionManager:n,key:r,ref:i,shouldSelectOnPressUp:a,shouldUseVirtualFocus:o,focus:s,isDisabled:c,onAction:l,allowsDifferentPressOrigin:u,linkBehavior:d=`action`}=e,f=ne();t=Re(t);let p=e=>{if(e.pointerType===`keyboard`&&_p(e))n.toggleSelection(r);else{if(n.selectionMode===`none`)return;if(n.isLink(r)){if(d===`selection`&&i.current){let t=n.getItemProps(r);f.open(i.current,e,t.href,t.routerOptions),n.setSelectedKeys(n.selectedKeys);return}if(d===`override`||d===`none`)return}n.selectionMode===`single`?n.isSelected(r)&&!n.disallowEmptySelection?n.toggleSelection(r):n.replaceSelection(r):e&&e.shiftKey?n.extendSelection(r):n.selectionBehavior===`toggle`||e&&(Ne(e)||e.pointerType===`touch`||e.pointerType===`virtual`)?n.toggleSelection(r):n.replaceSelection(r)}};(0,H_.useEffect)(()=>{r===n.focusedKey&&n.isFocused&&(o?Bt(i.current):s?s():ut()!==i.current&&i.current&&bt(i.current))},[i,r,n.focusedKey,n.childFocusStrategy,n.isFocused,o]),c||=n.isDisabled(r);let m={};!o&&!c?m={tabIndex:r===n.focusedKey?0:-1,onFocus(e){H(e)===i.current&&n.setFocusedKey(r)}}:c&&(m.onMouseDown=e=>{e.preventDefault()}),(0,H_.useEffect)(()=>{c&&n.focusedKey===r&&n.setFocusedKey(null)},[n,c,r]);let h=n.isLink(r)&&d===`override`,g=l&&e.UNSTABLE_itemBehavior===`action`,_=n.isLink(r)&&d!==`selection`&&d!==`none`,v=!c&&n.canSelectItem(r)&&!h&&!g,y=(l||_)&&!c,b=y&&(n.selectionBehavior===`replace`?!v:!v||n.isEmpty),x=y&&v&&n.selectionBehavior===`replace`,S=b||x,C=(0,H_.useRef)(null),w=S&&v,T=(0,H_.useRef)(!1),E=(0,H_.useRef)(!1),D=n.getItemProps(r),O=e=>{l&&(l(),i.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`,{bubbles:!0}))),_&&i.current&&f.open(i.current,e,D.href,D.routerOptions)},k={ref:i};a?(k.onPressStart=e=>{C.current=e.pointerType,T.current=w,e.pointerType===`keyboard`&&(!S||V_(e.key))&&p(e)},u?(k.onPressUp=b?void 0:e=>{e.pointerType===`mouse`&&v&&p(e)},k.onPress=b?O:e=>{e.pointerType!==`keyboard`&&e.pointerType!==`mouse`&&v&&p(e)}):k.onPress=e=>{if(b||x&&e.pointerType!==`mouse`){if(e.pointerType===`keyboard`&&!B_(e.key))return;O(e)}else e.pointerType!==`keyboard`&&v&&p(e)}):(k.onPressStart=e=>{C.current=e.pointerType,T.current=w,E.current=b,v&&(e.pointerType===`mouse`&&!b||e.pointerType===`keyboard`&&(!y||V_(e.key)))&&p(e)},k.onPress=e=>{(e.pointerType===`touch`||e.pointerType===`pen`||e.pointerType===`virtual`||e.pointerType===`keyboard`&&S&&B_(e.key)||e.pointerType===`mouse`&&E.current)&&(S?O(e):v&&p(e))});let A=bp(n.collection);if(m[`data-collection`]=A,m[`data-key`]=r,k.preventFocusOnPress=o,o&&(k=U(k,{onPressStart(e){e.pointerType!==`touch`&&(n.setFocused(!0),n.setFocusedKey(r))},onPress(e){e.pointerType===`touch`&&(n.setFocused(!0),n.setFocusedKey(r))}})),D)for(let e of[`onPressStart`,`onPressEnd`,`onPressChange`,`onPress`,`onPressUp`,`onClick`])D[e]&&(k[e]=Ce(k[e],D[e]));let{pressProps:j,isPressed:M}=xr(k),N=x?e=>{C.current===`mouse`&&(e.stopPropagation(),e.preventDefault(),O(e))}:void 0,{longPressProps:P}=Um({isDisabled:!w,onLongPress(e){e.pointerType===`touch`&&(p(e),n.setSelectionBehavior(`toggle`))}}),F=e=>{C.current===`touch`&&T.current&&e.preventDefault()},I=d!==`none`&&n.isLink(r)?e=>{z.isOpening||e.preventDefault()}:void 0,L=U(m,v||b||o&&!c?j:{},w?P:{},{onDoubleClick:N,onDragStartCapture:F,onClick:I,id:t},o?{onMouseDown:e=>e.preventDefault()}:void 0),R=e=>{let t=e;for(;t&&t!==i.current;){let e=t.getAttribute(`data-collection`);if(e!=null)return e!==A;t=t.parentElement}return xe(e)},ee=L.onPointerDown;L.onPointerDown=e=>{let t=H(e);if(t&&t!==i.current&&R(t)){e.stopPropagation();return}ee?.(e)};let te=L.onMouseDown;return L.onMouseDown=e=>{let t=H(e);if(t&&t!==i.current&&R(t)){e.stopPropagation();return}te?.(e)},{itemProps:L,isPressed:M,isSelected:n.isSelected(r),isFocused:n.isFocused&&n.focusedKey===r,isDisabled:c,allowsSelection:v,hasAction:S}}function B_(e){return e===`Enter`}function V_(e){return e===` `}var H_;function U_(){return(U_=t((()=>{Oe(),Be(),Sp(),dt(),re(),V(),Wt(),C(),Pr(),Le(),Km(),H_=r()})))()}function W_(e,t,n){let r=xt(e,{labelable:!0}),i=e.selectionBehavior||`toggle`,a=e.orientation||`vertical`,o=e.linkBehavior||(i===`replace`?`action`:`override`);i===`toggle`&&o===`action`&&(o=`override`);let{listProps:s}=I_({...e,ref:n,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,linkBehavior:o}),{focusWithinProps:c}=g({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),l=Re(e.id);Qd.set(t,{id:l,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:o,UNSTABLE_itemBehavior:e.UNSTABLE_itemBehavior});let{labelProps:u,fieldProps:d}=Yl({...e,id:l,labelElementType:`span`});return{labelProps:u,listBoxProps:U(r,c,t.selectionManager.selectionMode===`multiple`?{"aria-multiselectable":`true`}:{},{role:`listbox`,"aria-orientation":a,...U(d,s)})}}function G_(){return(G_=t((()=>{m(),$d(),V(),ht(),Le(),J(),R_()})))()}function K_(e){let{heading:t,"aria-label":n}=e,r=Re();return{itemProps:{role:`presentation`},headingProps:t?{id:r,role:`presentation`,onMouseDown:e=>{e.preventDefault()}}:{},groupProps:{role:`group`,"aria-label":n,"aria-labelledby":t?r:void 0}}}function q_(){return(q_=t((()=>{Le()})))()}function J_(e,t,n){let{key:r}=e,i=Qd.get(t),a=e.isDisabled??t.selectionManager.isDisabled(r),o=e.isSelected??t.selectionManager.isSelected(r),s=e.shouldSelectOnPressUp??i?.shouldSelectOnPressUp,c=e.shouldFocusOnHover??i?.shouldFocusOnHover,l=e.shouldUseVirtualFocus??i?.shouldUseVirtualFocus,u=e.isVirtualized??i?.isVirtualized,d=Je(),f=Je(),p={role:`option`,"aria-disabled":a||void 0,"aria-selected":t.selectionManager.selectionMode===`none`?void 0:o,"aria-label":e[`aria-label`],"aria-labelledby":d,"aria-describedby":f},m=t.collection.getItem(r);if(u){let e=Number(m?.index);p[`aria-posinset`]=Number.isNaN(e)?void 0:e+1,p[`aria-setsize`]=wh(t.collection)}let h=i?.onAction?()=>i?.onAction?.(r):void 0,g=Zd(t,r),{itemProps:_,isPressed:v,isFocused:y,hasAction:b,allowsSelection:S}=z_({selectionManager:t.selectionManager,key:r,ref:n,shouldSelectOnPressUp:s,allowsDifferentPressOrigin:s&&c,isVirtualized:u,shouldUseVirtualFocus:l,isDisabled:a,onAction:h||m?.props?.onAction?Ce(m?.props?.onAction,h):void 0,linkBehavior:i?.linkBehavior,UNSTABLE_itemBehavior:i?.UNSTABLE_itemBehavior,id:g}),{hoverProps:C}=j_({isDisabled:a||!c,onHoverStart(){x()||(t.selectionManager.setFocused(!0),t.selectionManager.setFocusedKey(r))}}),w=xt(m?.props);delete w.id;let T=L(m?.props);return{optionProps:{...p,...U(w,_,C,T),id:g},labelProps:{id:d},descriptionProps:{id:f},isFocused:y,isFocusVisible:y&&t.selectionManager.isFocused&&x(),isSelected:o,isDisabled:a,isPressed:v,allowsSelection:S,hasAction:b}}function Y_(){return(Y_=t((()=>{m(),$d(),ee(),V(),U_(),F_(),C(),Le(),Eh()})))()}function X_(){return window.ResizeObserver!==void 0}function Z_(e){let{ref:t,box:n,onResize:r}=e,i=B(r);(0,Q_.useEffect)(()=>{let e=t?.current;if(e){if(X_()){let t=new window.ResizeObserver(e=>{e.length&&i()});return t.observe(e,{box:n}),()=>{e&&t.unobserve(e)}}return window.addEventListener(`resize`,i,!1),()=>{window.removeEventListener(`resize`,i,!1)}}},[t,n])}var Q_;function $_(){return($_=t((()=>{d(),Q_=r()})))()}function ev(e){let{value:t=0,minValue:n=0,maxValue:r=100,valueLabel:i,isIndeterminate:a,formatOptions:o={style:`percent`}}=e,s=xt(e,{labelable:!0}),{labelProps:c,fieldProps:l}=Yl({...e,labelElementType:`span`});t=tu(t,n,r);let u=r-n,d=u===0?0:(t-n)/u,f=Eu(o);if(!a&&!i){let e=o.style===`percent`?d:t;i=f.format(e)}return{progressBarProps:U(s,{...l,"aria-valuenow":a?void 0:t,"aria-valuemin":n,"aria-valuemax":r,"aria-valuetext":a?void 0:i,role:`progressbar`}),labelProps:c}}function tv(){return(tv=t((()=>{m(),V(),J(),Ou()})))()}function nv(e){let{progressBarProps:t,labelProps:n}=ev(e);return{meterProps:{...t,role:`meter progressbar`},labelProps:n}}function rv(){return(rv=t((()=>{tv()})))()}function iv(e,t){let n=0,r=0,i=0,a=0,o=0,s=0,c={},l=(t?.scale??1)>1;if(e.tagName===`BODY`||e.tagName===`HTML`){let l=document.documentElement;i=l.clientWidth,a=l.clientHeight,n=t?.width??i,r=t?.height??a,c.top=l.scrollTop||e.scrollTop,c.left=l.scrollLeft||e.scrollLeft,t&&(o=t.offsetTop,s=t.offsetLeft)}else({width:n,height:r,top:o,left:s}=hv(e,!1)),c.top=e.scrollTop,c.left=e.scrollLeft,i=n,a=r;return St()&&(e.tagName===`BODY`||e.tagName===`HTML`)&&l&&(c.top=0,c.left=0,o=t?.pageTop??0,s=t?.pageLeft??0),{width:n,height:r,totalWidth:i,totalHeight:a,scroll:c,top:o,left:s}}function av(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function ov(e,t,n,r,i,a,o){let s=i.scroll[e]??0,c=r[Sv[e]],l=o[e]+r.scroll[yv[e]]+a,u=o[e]+r.scroll[yv[e]]+c-a,d=t-s+r.scroll[yv[e]]+o[e]-r[yv[e]],f=t-s+n+r.scroll[yv[e]]+o[e]-r[yv[e]];return d<l?l-d:f>u?Math.max(u-f,l-d):0}function sv(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function cv(e){if(wv[e])return wv[e];let[t,n]=e.split(` `),r=yv[t]||`right`,i=xv[r];yv[n]||(n=`center`);let a=Sv[r],o=Sv[i];return wv[e]={placement:t,crossPlacement:n,axis:r,crossAxis:i,size:a,crossSize:o},wv[e]}function lv(e,t,n,r,i,a,o,s,c,l,u){let{placement:d,crossPlacement:f,axis:p,crossAxis:m,size:h,crossSize:g}=r,_={};_[m]=e[m]??0,f===`center`?_[m]+=((e[g]??0)-(n[g]??0))/2:f!==m&&(_[m]+=(e[g]??0)-(n[g]??0)),_[m]+=a;let v=e[m]-n[g]+c+l,y=e[m]+e[g]-c-l;if(_[m]=tu(_[m],v,y),d===p){let t=s?u[h]:u[Cv[h]];_[bv[p]]=Math.floor(t-e[p]+i)}else _[p]=Math.floor(e[p]+e[h]+i);return _}function uv(e,t,n,r,i,a,o,s,c,l,u){let d=(e.top==null?c[Cv.height]-(e.bottom??0)-o:e.top)-(c.scroll.top??0),f=l?n.top:0,p={top:Math.max(t.top+f,(u?.offsetTop??t.top)+f),bottom:Math.min(t.top+t.height+f,(u?.offsetTop??0)+(u?.height??0))};return s===`top`?Math.max(0,d+o-p.top-((i.top??0)+(i.bottom??0)+a)):Math.max(0,p.bottom-d-((i.top??0)+(i.bottom??0)+a))}function dv(e,t,n,r,i,a,o,s){let{placement:c,axis:l,size:u}=a;return c===l?Math.max(0,n[l]-(o.scroll[l]??0)-(e[l]+(s?t[l]:0))-(r[l]??0)-r[bv[l]]-i):Math.max(0,e[u]+e[l]+(s?t[l]:0)-n[l]-n[u]+(o.scroll[l]??0)-(r[l]??0)-r[bv[l]]-i)}function fv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=cv(e),{size:y,crossAxis:b,crossSize:x,placement:S,crossPlacement:C}=v,w=lv(t,s,n,v,u,d,l,f,m,h,c),T=u,E=dv(s,l,t,i,a+u,v,c,g);if(o&&n[y]>E){let e=cv(`${bv[S]} ${C}`),r=lv(t,s,n,e,u,d,l,f,m,h,c);dv(s,l,t,i,a+u,e,c,g)>E&&(v=e,w=r,T=u)}let D=`bottom`;v.axis===`top`?v.placement===`top`?D=`top`:v.placement===`bottom`&&(D=`bottom`):v.crossAxis===`top`&&(v.crossPlacement===`top`?D=`bottom`:v.crossPlacement===`bottom`&&(D=`top`));let O=ov(b,w[b],n[x],s,c,a,l);w[b]+=O;let k=uv(w,s,l,f,i,a,n.height,D,c,g,_);p&&p<k&&(k=p),n.height=Math.min(n.height,k),w=lv(t,s,n,v,T,d,l,f,m,h,c),O=ov(b,w[b],n[x],s,c,a,l),w[b]+=O;let A={},j=t[b]-w[b]-i[yv[b]],M=j+.5*t[x],N=m/2+h,P=yv[b]===`left`?(i.left??0)+(i.right??0):(i.top??0)+(i.bottom??0),F=n[x]-P-m/2-h;A[b]=tu(tu(M,t[b]+m/2-(w[b]+i[yv[b]]),t[b]+t[x]-m/2-(w[b]+i[yv[b]])),N,F),{placement:S,crossPlacement:C}=v,m?j=A[b]:C===`right`?j+=t[x]:C===`center`&&(j+=t[x]/2);let I=S===`left`||S===`top`?n[y]:0,L={x:S===`top`||S===`bottom`?j:I,y:S===`left`||S===`right`?j:I};return{position:w,maxHeight:k,arrowOffsetLeft:A.left,arrowOffsetTop:A.top,placement:S,triggerAnchorPoint:L}}function pv(e){let{placement:t,targetNode:n,overlayNode:r,scrollNode:i,padding:a,shouldFlip:o,boundaryElement:s,offset:c,crossOffset:l,maxHeight:u,arrowSize:d=0,arrowBoundaryOffset:p=0,targetRect:m}=e,h=Tv(),g=r instanceof HTMLElement?_v(r):document.documentElement,_=g===document.documentElement,v=window.getComputedStyle(g).position,y=!!v&&v!==`static`,b=_?hv(n,!1,m):gv(n,g,!1,m);if(!_){let{marginTop:e,marginLeft:t}=window.getComputedStyle(n);b.top+=parseInt(e,10)||0,b.left+=parseInt(t,10)||0}let x=hv(r,!0),S=sv(r);x.width+=(S.left??0)+(S.right??0),x.height+=(S.top??0)+(S.bottom??0);let C=av(i),w=iv(s,h),T=iv(g,h),E;if((s.tagName===`BODY`||s.tagName===`HTML`)&&!_){let e=mv(g,!1);E={top:-(e.top-w.top),left:-(e.left-w.left),width:0,height:0}}else E=(s.tagName===`BODY`||s.tagName===`HTML`)&&_?{top:0,left:0,width:0,height:0}:gv(s,g,!1);let D=f(s,g);return fv(t,b,x,C,S,a,o,w,T,E,c,l,y,u,d,p,D,h)}function mv(e,t){let{top:n,left:r,width:i,height:a}=e.getBoundingClientRect();return t&&e instanceof e.ownerDocument.defaultView.HTMLElement&&(i=e.offsetWidth,a=e.offsetHeight),{top:n,left:r,width:i,height:a}}function hv(e,t,n){let{top:r,left:i,width:a,height:o}=n||mv(e,t),{scrollTop:s,scrollLeft:c,clientTop:l,clientLeft:u}=document.documentElement;return{top:r+s-l,left:i+c-u,width:a,height:o}}function gv(e,t,n,r){let i=window.getComputedStyle(e),a;if(i.position===`fixed`)a=r||mv(e,n);else{a=hv(e,n,r);let i=hv(t,n),o=window.getComputedStyle(t);i.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,i.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,a.top-=i.top,a.left-=i.left}return a.top-=parseInt(i.marginTop,10)||0,a.left-=parseInt(i.marginLeft,10)||0,a}function _v(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position===`static`&&!vv(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!vv(t);)t=t.parentElement;return t||document.documentElement}function vv(e){let t=window.getComputedStyle(e);return t.transform!==`none`||/transform|perspective/.test(t.willChange)||t.filter!==`none`||t.contain===`paint`||`backdropFilter`in t&&t.backdropFilter!==`none`||`WebkitBackdropFilter`in t&&t.WebkitBackdropFilter!==`none`}var yv,bv,xv,Sv,Cv,wv,Tv;function Ev(){return(Ev=t((()=>{he(),Be(),yv={top:`top`,bottom:`top`,left:`left`,right:`left`},bv={top:`bottom`,bottom:`top`,left:`right`,right:`left`},xv={top:`left`,left:`top`},Sv={top:`height`,left:`width`},Cv={width:`totalWidth`,height:`totalHeight`},wv={},Tv=()=>typeof document<`u`?window.visualViewport:null})))()}function Dv(e){let{direction:t}=A(),{arrowSize:n,targetRef:r,overlayRef:i,arrowRef:a,scrollRef:o=i,placement:s=`bottom`,containerPadding:c=12,shouldFlip:l=!0,boundaryElement:u=typeof document<`u`?document.body:null,offset:d=0,crossOffset:f=0,shouldUpdatePosition:p=!0,isOpen:m=!0,onClose:h,maxHeight:g,arrowBoundaryOffset:_=0,getTargetRect:v}=e,[y,b]=(0,Av.useState)(null),x=[p,s,i.current,r.current,a?.current,o.current,c,l,u,d,f,m,t,g,_,n],S=(0,Av.useRef)(jv?.scale);(0,Av.useEffect)(()=>{m&&(S.current=jv?.scale)},[m]);let C=(0,Av.useCallback)(()=>{if(p===!1||!m||!i.current||!r.current||!u||jv?.scale!==S.current)return;let e=null;if(o.current&&Me(o.current)){let t=ut()?.getBoundingClientRect(),n=o.current.getBoundingClientRect();e={type:`top`,offset:(t?.top??0)-n.top},e.offset>n.height/2&&(e.type=`bottom`,e.offset=(t?.bottom??0)-n.bottom)}let h=i.current;!g&&i.current&&(h.style.top=`0px`,h.style.bottom=``,h.style.maxHeight=(window.visualViewport?.height??window.innerHeight)+`px`);let y=pv({placement:kv(s,t),overlayNode:i.current,targetNode:r.current,scrollNode:o.current||i.current,padding:c,shouldFlip:l,boundaryElement:u,offset:d,crossOffset:f,maxHeight:g,arrowSize:n??(a?.current?mv(a.current,!0).width:0),arrowBoundaryOffset:_,targetRect:v?.(r.current)});if(!y.position)return;h.style.top=``,h.style.bottom=``,h.style.left=``,h.style.right=``,Object.keys(y.position).forEach(e=>h.style[e]=y.position[e]+`px`),h.style.maxHeight=y.maxHeight==null?``:y.maxHeight+`px`;let x=ut();if(e&&x&&o.current){let t=x.getBoundingClientRect(),n=o.current.getBoundingClientRect(),r=t[e.type]-n[e.type];o.current.scrollTop+=r-e.offset}b(y)},x);ye(C,x),Ov(C),Z_({ref:i,onResize:C}),Z_({ref:r,onResize:C});let w=(0,Av.useRef)(!1);ye(()=>{let e,t=()=>{w.current=!0,clearTimeout(e),e=setTimeout(()=>{w.current=!1},500),C()},n=()=>{w.current&&t()};return jv?.addEventListener(`resize`,t),jv?.addEventListener(`scroll`,n),()=>{jv?.removeEventListener(`resize`,t),jv?.removeEventListener(`scroll`,n)}},[C]);let T=(0,Av.useCallback)(()=>{w.current||h?.()},[h,w]);return Xm({triggerRef:r,isOpen:m,onClose:h&&T}),{overlayProps:{style:{position:y?`absolute`:`fixed`,top:y?void 0:0,left:y?void 0:0,zIndex:1e5,...y?.position,maxHeight:y?.maxHeight??`100vh`}},placement:y?.placement??null,triggerAnchorPoint:y?.triggerAnchorPoint??null,arrowProps:{"aria-hidden":`true`,role:`presentation`,style:{left:y?.arrowOffsetLeft,top:y?.arrowOffsetTop}},updatePosition:C}}function Ov(e){ye(()=>(window.addEventListener(`resize`,e,!1),()=>{window.removeEventListener(`resize`,e,!1)}),[e])}function kv(e,t){return t===`rtl`?e.replace(`start`,`right`).replace(`end`,`left`):e.replace(`start`,`left`).replace(`end`,`right`)}var Av,jv;function Mv(){return(Mv=t((()=>{Ev(),Be(),$m(),_e(),ve(),$_(),Av=r(),jv=typeof document<`u`?window.visualViewport:null})))()}function Nv(e,t){let{triggerRef:n,popoverRef:r,groupRef:i,isNonModal:a,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s,...c}=e,l=c.trigger===`SubmenuTrigger`,{overlayProps:u,underlayProps:d}=we({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!a||l,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s},i??r),{overlayProps:f,arrowProps:p,placement:m,triggerAnchorPoint:h}=Dv({...c,targetRef:n,overlayRef:r,isOpen:t.isOpen,onClose:a&&!l?t.close:null,getTargetRect:c.getTargetRect??(t.point?()=>new DOMRect(t.point.x,t.point.y,0,0):void 0)});it({isDisabled:a||!t.isOpen}),(0,Pv.useEffect)(()=>{if(t.isOpen&&r.current)return a?Ie(i?.current??r.current):Se([i?.current??r.current],{shouldUseInert:!0})},[a,t.isOpen,r,i]);let{focusWithinProps:_}=g(e);return{popoverProps:U(u,f,_),arrowProps:p,underlayProps:d,placement:m,triggerAnchorPoint:h}}var Pv;function Fv(){return(Fv=t((()=>{mt(),Mv(),ht(),V(),Qe(),ze(),Pv=r()})))()}var Iv;function Lv(){return(Lv=t((()=>{Iv=new WeakMap})))()}function Rv(e,t,n){let{value:r,children:i,"aria-label":a,"aria-labelledby":o,onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f}=e,p=e.isDisabled||t.isDisabled,m=t.selectedValue===r,h=e=>{e.stopPropagation(),t.setSelectedValue(r)},{pressProps:g,isPressed:_}=xr({onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f,isDisabled:p}),{pressProps:v,isPressed:y}=xr({onPressStart:s,onPressEnd:c,onPressChange:l,onPressUp:d,onClick:f,isDisabled:p,onPress(e){u?.(e),t.setSelectedValue(r),n.current?.focus()}}),{focusableProps:b}=Ze(U(e,{onFocus:()=>t.setLastFocusedValue(r)}),n),x=U(g,b),S=xt(e,{labelable:!0}),C=-1;t.selectedValue==null?(t.lastFocusedValue===r||t.lastFocusedValue==null)&&(C=0):t.selectedValue===r&&(C=0),p&&(C=void 0);let{name:w,form:T,descriptionId:E,errorMessageId:D,validationBehavior:O}=Iv.get(t);_l(n,t.defaultSelectedValue,t.setSelectedValue),bl({validationBehavior:O},t,n);let k=Dl();return{labelProps:U(v,(0,zv.useMemo)(()=>({onClick:e=>e.preventDefault(),onMouseDown:e=>e.preventDefault()}),[])),inputProps:U(S,{...x,type:`radio`,name:w,form:T,tabIndex:C,disabled:p,required:t.isRequired&&O===`native`,checked:m,value:r,onChange:h,"aria-describedby":[e[`aria-describedby`],k.id,t.isInvalid?D:null,E].filter(Boolean).join(` `)||void 0}),descriptionProps:k,isDisabled:p,isSelected:m,isPressed:_||y}}var zv;function Bv(){return(Bv=t((()=>{m(),V(),Lv(),at(),yl(),Tl(),Pr(),kl(),zv=r()})))()}function Vv(e,t){let{name:n,form:r,isReadOnly:i,isRequired:a,isDisabled:o,orientation:s=`vertical`,validationBehavior:c=`aria`}=e,{direction:l}=A(),{isInvalid:u,validationErrors:d,validationDetails:f}=t.displayValidation,{labelProps:m,fieldProps:h,descriptionProps:_,errorMessageProps:v}=Xl({...e,labelElementType:`span`,isInvalid:t.isInvalid,errorMessage:e.errorMessage||d}),y=xt(e,{labelable:!0}),{focusWithinProps:b}=g({onBlurWithin(n){e.onBlur?.(n),t.selectedValue||t.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});function x(e,n){let r=p(n.currentTarget,{from:H(n),accept:e=>e instanceof $e(e).HTMLInputElement&&e.type===`radio`}),i;return e===`next`?(i=r.nextNode(),i||=(r.currentNode=n.currentTarget,r.firstChild())):(i=r.previousNode(),i||=(r.currentNode=n.currentTarget,r.lastChild())),i?(i.focus(),t.setSelectedValue(i.value),!0):!1}let{keyboardProps:S}=et({shortcuts:{ArrowRight:e=>x(l===`rtl`&&s!==`vertical`?`prev`:`next`,e),ArrowLeft:e=>x(l===`rtl`&&s!==`vertical`?`next`:`prev`,e),ArrowDown:e=>x(`next`,e),ArrowUp:e=>x(`prev`,e)},allowRepeats:!0}),C=Re(n);return Iv.set(t,{name:C,form:r,descriptionId:_.id,errorMessageId:v.id,validationBehavior:c}),{radioGroupProps:U(y,{role:`radiogroup`,...S,"aria-invalid":t.isInvalid||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-readonly":i||void 0,"aria-required":a||void 0,"aria-disabled":o||void 0,"aria-orientation":s,...h,...b}),labelProps:m,descriptionProps:_,errorMessageProps:v,isInvalid:u,validationErrors:d,validationDetails:f}}function Hv(){return(Hv=t((()=>{m(),Be(),I(),Ae(),V(),Lv(),Zl(),ht(),Le(),ct(),ve()})))()}var Uv;function Wv(){return(Wv=t((()=>{Uv={},Uv={"Clear search":`مسح البحث`}})))()}var Gv;function Kv(){return(Kv=t((()=>{Gv={},Gv={"Clear search":`Изчистване на търсене`}})))()}var qv;function Jv(){return(Jv=t((()=>{qv={},qv={"Clear search":`Vymazat hledání`}})))()}var Yv;function Xv(){return(Xv=t((()=>{Yv={},Yv={"Clear search":`Ryd søgning`}})))()}var Zv;function Qv(){return(Qv=t((()=>{Zv={},Zv={"Clear search":`Suche zurücksetzen`}})))()}var $v;function ey(){return(ey=t((()=>{$v={},$v={"Clear search":`Απαλοιφή αναζήτησης`}})))()}var ty;function ny(){return(ny=t((()=>{ty={},ty={"Clear search":`Clear search`}})))()}var ry;function iy(){return(iy=t((()=>{ry={},ry={"Clear search":`Borrar búsqueda`}})))()}var ay;function oy(){return(oy=t((()=>{ay={},ay={"Clear search":`Tühjenda otsing`}})))()}var sy;function cy(){return(cy=t((()=>{sy={},sy={"Clear search":`Tyhjennä haku`}})))()}var ly;function uy(){return(uy=t((()=>{ly={},ly={"Clear search":`Effacer la recherche`}})))()}var dy;function fy(){return(fy=t((()=>{dy={},dy={"Clear search":`נקה חיפוש`}})))()}var py;function my(){return(my=t((()=>{py={},py={"Clear search":`Obriši pretragu`}})))()}var hy;function gy(){return(gy=t((()=>{hy={},hy={"Clear search":`Keresés törlése`}})))()}var _y;function vy(){return(vy=t((()=>{_y={},_y={"Clear search":`Cancella ricerca`}})))()}var yy;function by(){return(by=t((()=>{yy={},yy={"Clear search":`検索をクリア`}})))()}var xy;function Sy(){return(Sy=t((()=>{xy={},xy={"Clear search":`검색 지우기`}})))()}var Cy;function wy(){return(wy=t((()=>{Cy={},Cy={"Clear search":`Išvalyti iešką`}})))()}var Ty;function Ey(){return(Ey=t((()=>{Ty={},Ty={"Clear search":`Notīrīt meklēšanu`}})))()}var Dy;function Oy(){return(Oy=t((()=>{Dy={},Dy={"Clear search":`Tøm søk`}})))()}var ky;function Ay(){return(Ay=t((()=>{ky={},ky={"Clear search":`Zoekactie wissen`}})))()}var jy;function My(){return(My=t((()=>{jy={},jy={"Clear search":`Wyczyść zawartość wyszukiwania`}})))()}var Ny;function Py(){return(Py=t((()=>{Ny={},Ny={"Clear search":`Limpar pesquisa`}})))()}var Fy;function Iy(){return(Iy=t((()=>{Fy={},Fy={"Clear search":`Limpar pesquisa`}})))()}var Ly;function Ry(){return(Ry=t((()=>{Ly={},Ly={"Clear search":`Ştergeţi căutarea`}})))()}var zy;function By(){return(By=t((()=>{zy={},zy={"Clear search":`Очистить поиск`}})))()}var Vy;function Hy(){return(Hy=t((()=>{Vy={},Vy={"Clear search":`Vymazať vyhľadávanie`}})))()}var Uy;function Wy(){return(Wy=t((()=>{Uy={},Uy={"Clear search":`Počisti iskanje`}})))()}var Gy;function Ky(){return(Ky=t((()=>{Gy={},Gy={"Clear search":`Obriši pretragu`}})))()}var qy;function Jy(){return(Jy=t((()=>{qy={},qy={"Clear search":`Rensa sökning`}})))()}var Yy;function Xy(){return(Xy=t((()=>{Yy={},Yy={"Clear search":`Aramayı temizle`}})))()}var Zy;function Qy(){return(Qy=t((()=>{Zy={},Zy={"Clear search":`Очистити пошук`}})))()}var $y;function eb(){return(eb=t((()=>{$y={},$y={"Clear search":`清除搜索`}})))()}var tb;function nb(){return(nb=t((()=>{tb={},tb={"Clear search":`清除搜尋條件`}})))()}var rb;function ib(){return(ib=t((()=>{Wv(),Kv(),Jv(),Xv(),Qv(),ey(),ny(),iy(),oy(),cy(),uy(),fy(),my(),gy(),vy(),by(),Sy(),wy(),Ey(),Oy(),Ay(),My(),Py(),Iy(),Ry(),By(),Hy(),Wy(),Ky(),Jy(),Xy(),Qy(),eb(),nb(),rb={},rb={"ar-AE":Uv,"bg-BG":Gv,"cs-CZ":qv,"da-DK":Yv,"de-DE":Zv,"el-GR":$v,"en-US":ty,"es-ES":ry,"et-EE":ay,"fi-FI":sy,"fr-FR":ly,"he-IL":dy,"hr-HR":py,"hu-HU":hy,"it-IT":_y,"ja-JP":yy,"ko-KR":xy,"lt-LT":Cy,"lv-LV":Ty,"nb-NO":Dy,"nl-NL":ky,"pl-PL":jy,"pt-BR":Ny,"pt-PT":Fy,"ro-RO":Ly,"ru-RU":zy,"sk-SK":Vy,"sl-SI":Uy,"sr-SP":Gy,"sv-SE":qy,"tr-TR":Yy,"uk-UA":Zy,"zh-CN":$y,"zh-TW":tb}})))()}function ab(e){return e&&e.__esModule?e.default:e}function ob(e,t,n){let r=E(ab(rb),`@react-aria/searchfield`),{isDisabled:i,isReadOnly:a,onSubmit:o,onClear:s,type:c=`search`}=e,{keyboardProps:l}=et({isDisabled:i||a,shortcuts:{Enter:()=>{if(o){o(t.value);return}return!1},Escape:()=>{if(t.value===``&&(!n.current||n.current.value===``))return!1;t.setValue(``),s?.()}}}),u=()=>{t.setValue(``),s&&s()},d=()=>{n.current?.focus()},{labelProps:f,inputProps:p,descriptionProps:m,errorMessageProps:h,...g}=Cu({...e,value:t.value,onChange:t.setValue,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,type:c},n);return{labelProps:f,inputProps:U(l,{...p,defaultValue:void 0}),clearButtonProps:{"aria-label":r.format(`Clear search`),excludeFromTabOrder:!0,preventFocusOnPress:!0,isDisabled:i||a,onPress:u,onPressStart:d},descriptionProps:m,errorMessageProps:h,...g}}function sb(){return(sb=t((()=>{Tu(),ib(),V(),ct(),ue()})))()}function cb(e,t,n){let{keyboardDelegate:r,isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c=`aria`}=e,l=h_({usage:`search`,sensitivity:`base`}),u=(0,lb.useMemo)(()=>r||new Tp(t.collection,t.disabledKeys,n,l),[r,t.collection,t.disabledKeys,l,n]),{menuTriggerProps:d,menuProps:p}=ih({isDisabled:i,type:`listbox`},t,n),{keyboardProps:m}=et({shortcuts:{ArrowLeft:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyAbove?.(t.selectedKey);e!=null&&t.setSelectedKey(e)},ArrowRight:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyBelow?.(t.selectedKey);e!=null&&t.setSelectedKey(e)}},allowRepeats:!0,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp}),{typeSelectProps:h}=sh({keyboardDelegate:u,selectionManager:t.selectionManager,onTypeSelect(e){t.setSelectedKey(e)}}),{isInvalid:g,validationErrors:_,validationDetails:v}=t.displayValidation,{labelProps:y,fieldProps:b,descriptionProps:x,errorMessageProps:S}=Xl({...e,labelElementType:`span`,isInvalid:g,errorMessage:e.errorMessage||_});t.selectionManager.selectionMode===`multiple`&&(h={});let C=xt(e,{labelable:!0}),w=U(h,d,b),T=Re();return ub.set(t,{isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c}),{labelProps:{...y,onClick:()=>{e.isDisabled||(n.current?.focus(),gt(`keyboard`))}},triggerProps:U(C,{...w,isDisabled:i,onKeyDown:Ce(w.onKeyDown,m.onKeyDown),onKeyUp:m.onKeyUp,"aria-labelledby":[T,w[`aria-labelledby`],w[`aria-label`]&&!w[`aria-labelledby`]?w.id:null].filter(Boolean).join(` `),onFocus(n){t.isFocused||(e.onFocus&&e.onFocus(n),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(n){t.isOpen||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:T},menuProps:{...p,onAction:void 0,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:`selection`,onBlur:n=>{f(n.currentTarget,n.relatedTarget)||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[b[`aria-labelledby`],w[`aria-label`]&&!b[`aria-labelledby`]?w.id:null].filter(Boolean).join(` `)},descriptionProps:x,errorMessageProps:S,isInvalid:g,validationErrors:_,validationDetails:v,hiddenSelectProps:{isDisabled:i,name:o,label:e.label,state:t,triggerRef:n,form:s}}}var lb,ub;function db(){return(db=t((()=>{m(),Ep(),V(),Be(),ee(),__(),Zl(),Le(),ct(),oh(),dh(),lb=r(),ub=new WeakMap})))()}function fb(e,t,n){let{labelProps:r,inputProps:i,isSelected:a,...o}=Ul(e,t,n);return{labelProps:r,inputProps:{...i,role:`switch`,checked:a},isSelected:a,...o}}function pb(){return(pb=t((()=>{Gl()})))()}function mb(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Y(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function hb(e,t){return e?t:{}}function gb(e){return Rb[e]}function _b(e){return c(yb,Lb[e.size],gb(e.variant),e.variant===`icon`?zb[e.size]:void 0)}var vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb;function Bb(){return(Bb=t((()=>{l(),vb=o`
  to { transform: rotate(360deg); }
`,u`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`,yb=u`
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

  /* Disabled styles:
     - keep pointer cursor default (better UX for some a11y tooling)
     - show not-allowed only on hover
     - for links, also block pointer interactions (while still tabbable) */
  &[aria-disabled="true"],
  &:disabled {
    opacity: var(--btn-disabled-opacity);
    cursor: default;
    transition: none;
  }

  /* Prevent pointer activation for disabled links (still keyboard-focusable via tabIndex). */
  &[aria-disabled="true"] {
    pointer-events: none;
  }

  &[aria-disabled="true"]:hover,
  &:disabled:hover {
    cursor: not-allowed;
  }

  /* Pressed state (hook-driven) */
  &[data-pressed="true"] {
    transform: translateY(var(--btn-pressed-offset)) scale(0.98);
    transition: var(--btn-press-transition);
  }

  /* Subtle loading hint */
  &[aria-busy="true"] {
    opacity: var(--btn-loading-opacity);
  }
`,bb=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,xb=u`
  opacity: 0;
`,Sb=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,Cb=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,wb=u`
  width: 1em;
  height: 1em;
  border-radius: 9999px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: ${vb} 0.8s linear infinite;
`,Tb=u`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,Eb=u`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,Db=u`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,Ob=u`
  padding-inline: var(--btn-icon-padding-x-sm);
`,kb=u`
  padding-inline: var(--btn-icon-padding-x-md);
`,Ab=u`
  padding-inline: var(--btn-icon-padding-x-lg);
`,jb=(e,t)=>u`
  background: var(--btn-${e}-bg);
  color: var(--btn-${e}-fg);
  border-color: var(--btn-${e}-border);

  &:hover:not(:disabled):not([aria-disabled="true"]),
  &:focus-visible:not(:disabled):not([aria-disabled="true"]) {
    background: var(--btn-${e}-bg-hover);
    color: var(--btn-${e}-fg-hover);
    border-color: var(--btn-${e}-border-hover);
    box-shadow:
      var(--btn-${e}-shadow-hover),
      inset 0 0 0 var(--btn-${e}-outline-width) ${t};
  }

  &[data-pressed="true"] {
    background: var(--btn-${e}-bg-pressed);
    box-shadow: var(--btn-pressed-shadow);
  }
`,Mb=jb(`primary`,`var(--btn-primary-bg)`),Nb=jb(`secondary`,`var(--btn-secondary-bg)`),Pb=jb(`tertiary`,`var(--btn-tertiary-bg-hover)`),Fb=jb(`destructive`,`var(--btn-destructive-bg)`),Ib=u`
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
`,Lb={small:Tb,medium:Eb,large:Db},Rb={primary:Mb,secondary:Nb,tertiary:Pb,icon:Ib,destructive:Fb},zb={small:Ob,medium:kb,large:Ab}})))()}var Vb,Hb,Ub;function Wb(){return(Wb=t((()=>{l(),Vb=e(r()),V(),Rr(),It(),De(),a(),Bb(),Hb=W(),Ub=Vb.forwardRef(function(e,t){let{variant:n=`primary`,size:r=`medium`,icon:a,iconPosition:o=`start`,isLoading:s=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-describedby":_,"aria-labelledby":v,"aria-label":y,formAction:b,onClick:x,onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O,className:k,domProps:A,name:j,"data-testid":M}=e,{t:N}=i(`shared-module`),P=l??N(`button.loading`),F=u||s,I=Vb.useId(),L=Vb.useId(),R=mb(_,s?I:void 0),z=y,ee=z?void 0:v??L,te=Pt(t),{buttonProps:ne,isPressed:B}=Lr({isDisabled:F,...Y({onPress:f,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-label":z,"aria-describedby":R,"aria-labelledby":ee})},te),re=c(_b({size:r,variant:n}),k),ie=U(ne,A??{},{onClick:x,onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O});return(0,Hb.jsxs)(`button`,{...ie,ref:te,className:re,"data-pressed":B?`true`:`false`,"data-disabled-reason":s?`loading`:F?`disabled`:void 0,"data-testid":M,"aria-busy":s?`true`:void 0,formAction:b,disabled:F,type:e.type??`button`,name:j,children:[(0,Hb.jsxs)(`span`,{className:c(bb,s?xb:void 0),children:[a&&o===`start`?(0,Hb.jsx)(`span`,{className:Sb,children:a}):null,(0,Hb.jsx)(`span`,{id:ee===L?L:void 0,children:d}),a&&o===`end`?(0,Hb.jsx)(`span`,{className:Sb,children:a}):null]}),s?(0,Hb.jsxs)(Hb.Fragment,{children:[(0,Hb.jsx)(`span`,{className:Cb,"aria-hidden":`true`,children:(0,Hb.jsx)(`span`,{className:wb})}),(0,Hb.jsx)(yt,{id:I,children:P})]}):null]})})})))()}function Gb(e){if(typeof e!=`object`||!e)return e;if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(Sx&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&e.constructor!==Object)return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=Gb(e[t]));return r}function Kb(e,t,n=new WeakMap){if(e===t)return!0;if(Vx(e)||Vx(t))return Object.is(e,t);if(gx(e)&&gx(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(Hx(e,r)||Hx(t,i))return Object.is(e,t);if(!r.length&&Array.isArray(e)!==Array.isArray(t))return!1;let a=n.get(e);if(a&&a.has(t))return!0;if(a)a.add(t);else{let r=new WeakSet;r.add(t),n.set(e,r)}for(let i of r){let r=e[i];if(!(i in t))return!1;if(i!==`ref`){let e=t[i];if(gx(r)&&gx(e)||(yx(r)||Array.isArray(r))&&(yx(e)||Array.isArray(e))?!Kb(r,e,n):!Object.is(r,e))return!1}}return!0}function qb(){let e=X.useRef(!1),t=X.useRef(void 0);return{resyncIfNeeded:X.useCallback((n,r,i)=>{if(n&&e.current){let e=r();Kb(t.current,e)||i(e)}e.current=!0},[]),snapshot:X.useCallback((e,n)=>{e&&(t.current=Gb(n()))},[])}}function Jb(e){let t=Lx(),{control:n=t,disabled:r,name:i,exact:a}=e||{},[o,s]=X.useState(()=>({...n._formState,defaultValues:n._defaultValues})),c=X.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),{resyncIfNeeded:l,snapshot:u}=qb();return zx(()=>{let e=()=>({...n._formState,defaultValues:n._defaultValues});l(!r,e,s);let t=n._subscribe({name:i,formState:c.current,exact:a,callback:e=>{!r&&s({...n._formState,...e,defaultValues:n._defaultValues})}});return()=>{t(),u(!r,e)}},[i,r,a,l,u]),X.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),X.useMemo(()=>Rx(o,n,c.current,!1),[o,n])}function Yb(e){let t=Lx(),{control:n=t,name:r,defaultValue:i,disabled:a,exact:o,compute:s}=e||{},c=X.useRef(i),l=X.useRef(s),u=X.useRef(void 0),d=X.useRef(n),f=X.useRef(r);l.current=s;let[p,m]=X.useState(()=>{let e=n._getWatch(r,c.current);return l.current?l.current(e):e}),h=X.useCallback(e=>{let t=Wx(r,n._names,e||n._formValues,!1,c.current);return l.current?l.current(t):t},[n._formValues,n._names,r]),g=X.useCallback(e=>{if(!a){let t=Wx(r,n._names,e||n._formValues,!1,c.current);if(l.current){let e=l.current(t);Kb(e,u.current)||(m(e),u.current=e)}else m(t)}},[n._formValues,n._names,a,r]),{resyncIfNeeded:_,snapshot:v}=qb(),y=X.useRef(g);y.current=g;let b=X.useRef(h);b.current=h,zx(()=>{d.current!==n||!Kb(f.current,r)?(d.current=n,f.current=r,y.current()):_(!a,()=>b.current(),e=>{m(e),u.current=e});let e=n._subscribe({name:r,formState:{values:!0},exact:o,callback:e=>{y.current(e.values)}});return()=>{e(),v(!a,()=>b.current())}},[n,o,r,a,_,v]),X.useEffect(()=>n._removeUnmounted());let x=d.current!==n,S=f.current;return X.useMemo(()=>{if(a)return!1;let e=!x&&!Kb(S,r);return x||e},[a,x,r,S])?h():p}function Xb(e){let t=Lx(),{name:n,disabled:r,control:i=t,shouldUnregister:a,defaultValue:o,exact:s=!0}=e,c=xx(i._names.array,n),l=Yb({control:i,name:n,defaultValue:X.useMemo(()=>Z(i._formValues,n,Z(i._defaultValues,n,o)),[i,n,o]),exact:s}),u=Jb({control:i,name:n,exact:s}),d=X.useRef(e),f=X.useRef(null),p=X.useRef(i.register(n,{...e.rules,value:l,...Nx(e.disabled)?{disabled:e.disabled}:{}}));d.current=e;let m=X.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!Z(u.errors,n)},isDirty:{enumerable:!0,get:()=>!!Z(u.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!Z(u.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!Z(u.validatingFields,n)},error:{enumerable:!0,get:()=>Z(u.errors,n)}}),[u,n]),h=X.useCallback(e=>{let t=bx(e);return Z(i._fields,n)||(p.current=i.register(n,{...d.current.rules,value:t})),p.current.onChange({target:{value:bx(e),name:n},type:Cx.CHANGE})},[n,i]),g=X.useCallback(()=>p.current.onBlur({target:{value:Z(i._formValues,n),name:n},type:Cx.BLUR}),[n,i._formValues]),_=X.useCallback(e=>{e&&(f.current={focus:()=>Px(e.focus)&&e.focus(),select:()=>Px(e.select)&&e.select(),setCustomValidity:t=>Px(e.setCustomValidity)&&e.setCustomValidity(t),reportValidity:()=>Px(e.reportValidity)&&e.reportValidity()});let t=Z(i._fields,n);t&&t._f&&e&&(t._f.ref=f.current)},[i._fields,n]),v=X.useMemo(()=>({name:n,value:l,...Nx(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:h,onBlur:g,ref:_}),[n,r,u.disabled,h,g,_,l]);return X.useEffect(()=>{let e=i._options.shouldUnregister||a;p.current=i.register(n,{...d.current.rules,...Nx(d.current.disabled)?{disabled:d.current.disabled}:{}});let t=(e,t)=>{let n=Z(i._fields,e);n&&n._f&&(n._f.mount=t)};if(t(n,!0),e){let e=Gb(Z(a?i._defaultValues:i._options.values||i._defaultValues,n,Z(i._options.defaultValues,n,d.current.defaultValue)));Fx(i._defaultValues,n,e),Ax(Z(i._formValues,n))&&Fx(i._formValues,n,e)}if(!c&&i.register(n),f.current){let e=Z(i._fields,n);e&&e._f&&(e._f.ref=f.current)}return()=>{(c?e&&!i._state.action:e)?i.unregister(n):t(n,!1)}},[n,i,c,a]),X.useEffect(()=>{i._setDisabledField({disabled:r,name:n})},[r,n,i]),X.useMemo(()=>({field:v,formState:u,fieldState:m}),[v,u,m])}function Zb(e,t,n=`validate`){if(Ux(e)||Array.isArray(e)&&e.every(Ux)||Nx(e)&&!e)return{type:n,message:Ux(e)?e:``,ref:t}}function Qb(e,t){let n=t.length-1,r=0;for(;r<n;){if(_x(e)){e=void 0;break}e=e[t[r]],r++}return e}function $b(e){for(let t in e)if(e.hasOwnProperty(t)&&!Ax(e[t]))return!1;return!0}function ex(e,t){if(Ux(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;let n=Array.isArray(t)?t:kx(t)?[t]:Mx(t);if(n.some(e=>Dx.includes(String(e))))return e;let r=n.length===1?e:Qb(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(yx(r)&&Yx(r)||Array.isArray(r)&&$b(r))&&ex(e,n.slice(0,-1)),e}function tx(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&yx(i)&&a){let e=tx(i,a);yx(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}function nx(e){return Array.isArray(e)||yx(e)}function rx(e,t,n=``,r=[]){for(let i in e){let a=n?`${n}.${i}`:i,o=e[i];nx(o)&&nx(Z(t,a))?rx(o,t,a,r):r.push(a)}return r}function ix(e){return Array.isArray(e)||yx(e)&&!gS(e)}function ax(e){return!!(e&&`_f`in e)}function ox(e){return Array.isArray(e)?!e.some(e=>!Ax(e)):!Object.keys(e).length}function sx(e,t){Array.isArray(e)?e[t]=void 0:delete e[t]}function cx(e,t={},n){for(let r in e){let i=e[r],a=n&&n[r];ix(i)&&(!Array.isArray(i)||!ax(a))?(t[r]=Array.isArray(i)?[]:{},cx(i,t[r],a),ox(t[r])&&sx(t,r)):Ax(i)||(t[r]=!0)}return t}function lx(e,t,n,r){n||=cx(t,{},r);for(let i in e){let a=e[i],o=r&&r[i];ix(a)&&(!Array.isArray(a)||!ax(o))?(Ax(t)||Vx(n[i])?n[i]=cx(a,Array.isArray(a)?[]:{},o):lx(a,_x(t)?{}:t[i],n[i],o),ox(n[i])&&sx(n,i)):Kb(a,t[i])?sx(n,i):n[i]=!0}return n}function ux(e){let t=e.ref;return hx(t)?t.files:Zx(t)?iS(e.refs).value:pS(t)?[...t.selectedOptions].map(({value:e})=>e):mx(t)?nS(e.refs).value:vS(t.value,e)}function dx(e,t,n){let r=Z(e,n);if(r||kx(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=Z(t,r),o=Z(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}function fx(e={}){let t={...OS,...e},n={...Gb(jS),isLoading:Px(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},r={},i=(yx(t.defaultValues)||yx(t.values))&&Gb(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:Gb(i),o={action:!1,actionArrayLengths:new Map,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},c={},l={},u=0,d=Gx(t.mode),f=Gx(t.reValidateMode),p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={...p},h={...m},g={array:uS(),state:uS()},_=0,v=t.criteriaMode===wx.all,y=(e,t)=>n=>{clearTimeout(l[e]),l[e]=setTimeout(t,n)},b=async e=>{if(!o.keepIsValid&&!t.disabled&&(m.isValid||h.isValid||e)){let e=++_,i;t.resolver?(i=Yx((await j()).errors),e===_&&x()):i=await P({fields:r,onlyCheckValid:!0,eventType:Cx.VALID}),e===_&&i!==n.isValid&&g.state.next({isValid:i})}},x=(e,r)=>{!t.disabled&&(m.isValidating||m.validatingFields||h.isValidating||h.validatingFields)&&((e||s.mount).forEach(e=>{e&&(r?Fx(n.validatingFields,e,r):ex(n.validatingFields,e))}),g.state.next({validatingFields:n.validatingFields,isValidating:!Yx(n.validatingFields)}))},S=()=>{n.dirtyFields=lx(i,a,void 0,r)},C=(e,i=[],s,c,l=!0,u=!0)=>{if(c&&s&&!t.disabled){o.action=!0;let t=Z(r,e);if(o.actionArrayLengths.has(e)||o.actionArrayLengths.set(e,Array.isArray(t)?t.length:0),u&&Array.isArray(t)){let n=s(t,c.argA,c.argB);l&&Fx(r,e,n)}let a=Z(n.errors,e);if(u&&Array.isArray(a)){let t=a.root,r=s(a,c.argA,c.argB)||a;t&&(r.root=t),l&&Fx(n.errors,e,r),DS(n.errors,e)}let d=Z(n.touchedFields,e);if((m.touchedFields||h.touchedFields)&&u&&Array.isArray(d)){let t=s(d,c.argA,c.argB);l&&Fx(n.touchedFields,e,t)}(m.dirtyFields||h.dirtyFields)&&S(),g.state.next({name:e,isDirty:I(e,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Fx(a,e,i)},w=(e,t)=>{Fx(n.errors,e,t),n.errors={...n.errors},g.state.next({errors:n.errors})},T=e=>{n.errors=e,g.state.next({errors:n.errors,isValid:!1})},E=e=>{let t=kx(e)?[e]:Mx(e),n=a,r=i;for(let e=0;e<t.length-1;e++){let i=t[e];if(n=_x(n)?n:n[i],r=_x(r)?r:r[i],n===null&&r!==null)return!0}return!1},D=e=>{if(!o.actionArrayLengths.size)return!1;let t=kx(e)?[e]:Mx(e),n=a,r=``,i=-1,s=0;for(let e=0;e<t.length;e++){if(_x(n))return!1;let a=t[e];if(r=r?`${r}.${a}`:a,Array.isArray(n)&&+a>=n.length)return i===-1?!1:e!==i||+a<s;o.actionArrayLengths.has(r)&&(i=e+1,s=o.actionArrayLengths.get(r)),n=n[a]}return!1},O=(t,c,l,u)=>{let d=Z(r,t);if(d){if(E(t)||D(t))return;let r=Ax(Z(a,t)),f=Z(a,t,Ax(l)?Z(i,t):l);Ax(f)||u&&u.defaultChecked||c?Fx(a,t,c?f:ux(d._f)):z(t,f),o.mount&&!o.action&&(b(),r&&n.isDirty&&(m.isDirty||h.isDirty)&&(I()||(n.isDirty=!1,g.state.next({...n}))),e.shouldUnregister&&r&&!Ax(Z(a,t))&&Kx(t,s)&&(o.watch=!0))}},k=(e,o,s,c,l)=>{let u=!1,d=!1,f={name:e};if(!t.disabled||c===!0){if(!s||c){let t=Kb(Z(i,e),o);(m.isDirty||h.isDirty)&&(d=n.isDirty,n.isDirty=f.isDirty=!t||I(),u=d!==f.isDirty),d=!!Z(n.dirtyFields,e),t===n.isDirty?t?ex(n.dirtyFields,e):Fx(n.dirtyFields,e,!0):AS(n.dirtyFields,lx(i,a,void 0,r)),f.dirtyFields=n.dirtyFields,u||=(m.dirtyFields||h.dirtyFields)&&d!==!t}if(s){let t=Z(n.touchedFields,e);t||(Fx(n.touchedFields,e,s),f.touchedFields=n.touchedFields,u||=(m.touchedFields||h.touchedFields)&&t!==s)}u&&l&&g.state.next(f)}return u?f:{}},A=(e,r,i,a)=>{let o=Z(n.errors,e),s=(m.isValid||h.isValid)&&Nx(r)&&n.isValid!==r;if(t.delayError&&i?(c[e]=y(e,()=>w(e,i)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e],i?Fx(n.errors,e,i):ex(n.errors,e),n.errors={...n.errors}),(i?!Kb(o,i):o)||!Yx(a)||s){let t={...a,...s&&Nx(r)?{isValid:r}:{},errors:n.errors,name:e};g.state.next(t)}},j=async e=>(x(e,!0),await t.resolver(a,t.context,yS(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),M=async e=>{let{errors:t}=await j(e);if(x(e),e){for(let r of e){let e=Z(t,r);e?s.array.has(r)&&yx(e)&&!Object.keys(e).some(e=>!Number.isNaN(Number(e)))?Jx(n.errors,{[r]:e},r):Fx(n.errors,r,e):ex(n.errors,r)}n.errors={...n.errors}}else n.errors=t;return t},N=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:a,formState:n,name:t,eventType:r});if(yx(i))for(let e in i){let t=i[e];t&&ue(`${kS}.${e}`,{message:Ux(t.message)?t.message:``,type:t.type||Tx.validate})}else Ux(i)||!i?ue(kS,{message:i||``,type:Tx.validate}):le(kS);return i}return!0},P=async({fields:r,onlyCheckValid:i,name:o,eventType:c,context:l={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(l.runRootValidation=!0,!await N({name:o,eventType:c})&&(l.valid=!1,i)))return l.valid;for(let o in r){let u=r[o];if(u){let{_f:r,...d}=u;if(r){let o=s.array.has(r.name),c=u._f&&SS(u._f),d=m.validatingFields||m.isValidating||h.validatingFields||h.isValidating;c&&d&&x([r.name],!0);let f=await oS(u,s.disabled,a,v,t.shouldUseNativeValidation&&!i,o);if(c&&d&&x([r.name]),f[r.name]&&(l.valid=!1,i)||(!i&&(Z(f,r.name)?o?Jx(n.errors,f,r.name):Fx(n.errors,r.name,f[r.name]):ex(n.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}!Yx(d)&&await P({context:l,onlyCheckValid:i,fields:d,name:o,eventType:c})}}return l.valid},F=()=>{for(let e of s.unMount){let t=Z(r,e);t&&(t._f.refs?t._f.refs.every(e=>!hS(e)):!hS(t._f.ref))&&me(e)}s.unMount=new Set},I=(e,t)=>(e&&t&&Fx(a,e,t),!Kb(o.mount?a:i,i)),L=(e,t,n)=>Wx(e,s,{...o.mount?a:Ax(t)||Ux(e)?i:t},n,t),R=e=>cS(Z(o.mount?a:i,e,t.shouldUnregister?Z(i,e,[]):[])),z=(e,t,n={},i=!1,o=!1,s=!1)=>{let c=Z(r,e),l=t;if(c){let n=c._f;n&&(!n.disabled&&Fx(a,e,vS(t,n)),l=Xx(n.ref)&&_x(t)?``:t,pS(n.ref)?[...n.ref.options].forEach(e=>e.selected=l.includes(e.value)):n.refs?mx(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(l)?!!l.find(t=>t===e.value):l===e.value||!!l)}):n.refs.forEach(e=>e.checked=e.value===l):hx(n.ref)?n.ref.value=``:(n.ref.value=l,!n.ref.type&&!o&&!s&&g.state.next({name:e,values:i?a:Gb(a)})))}(n.shouldDirty||n.shouldTouch)&&k(e,l,n.shouldTouch,n.shouldDirty,!o),n.shouldValidate&&ae(e,{delayError:n.delayError})},ee=(e,t,n,i=!1,o=!1,c=!1)=>{s.array.has(e)&&g.array.next({name:e,values:i?a:Gb(a)});for(let a in t){if(!t.hasOwnProperty(a))return;let l=t[a],u=e+`.`+a,d=Z(r,u);(s.array.has(e)||yx(l)||d&&!d._f)&&!gx(l)?ee(u,l,n,i,o,c):z(u,l,n,i,o,c)}},te=(e,t,i,c,l=!1)=>{let u=Z(r,e),d=s.array.has(e),f=c?t:Gb(t),p=Kb(Z(a,e),f);if(p||Fx(a,e,f),d)g.array.next({name:e,values:c?a:Gb(a)}),(m.isDirty||m.dirtyFields||h.isDirty||h.dirtyFields)&&i.shouldDirty&&(S(),l||g.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:I(e,f)}));else{let t=Array.isArray(f)&&!f.length||Yx(f),n=!p&&!l;!u||u._f||_x(f)||t?z(e,f,i,c,l,n):ee(e,f,i,c,l,n)}if(!p&&!l){let t=Kx(e,s),r=c?a:Gb(a);if(g.state.next({...t&&n,name:o.mount||t?e:void 0,values:r}),!d)for(let t of _S(s.array,e))g.state.next({name:t,values:r})}},ne=(e,t,n={})=>te(e,t,n,!1),B=(e,t={})=>{let r=Px(e)?e(a):e;if(!Kb(a,r)){a={...a,...r};for(let e of s.mount)fS(r,e)&&te(e,Z(r,e),t,!0,!0);g.state.next({...n,name:void 0,type:void 0,...u?{values:a}:{}}),t.shouldValidate&&b()}},re=async i=>{o.mount=!0;let l=i.target,p=l.name,_=!0,y=Z(r,p),S=e=>{_=Number.isNaN(e)||gx(e)&&isNaN(e.getTime())||Kb(e,Z(a,p,e))};if(y){let o,C,w=l.type?ux(y._f):bx(i),T=i.type===Cx.BLUR||i.type===Cx.FOCUS_OUT,E=!CS(y._f)&&!e.validate&&!t.resolver&&!Z(n.errors,p)&&!y._f.deps,D=E||ES(T,Z(n.touchedFields,p),n.isSubmitted,f,d),O=Kx(p,s,T);if(Fx(a,p,w),T){if(!l||!l.readOnly){y._f.onBlur&&y._f.onBlur(i);let e=c[p];e&&e(0)}}else y._f.onChange&&y._f.onChange(i);let M=k(p,w,T),F=!Yx(M)||O;if(!T&&g.state.next({name:p,type:i.type,...u?{values:Gb(a)}:{}}),D)return(!E||!n.isValid)&&(m.isValid||h.isValid)&&(t.mode===`onBlur`?T&&b():T||b()),F&&g.state.next({name:p,...O?{}:M});if(!t.resolver&&e.validate&&await N({name:p,eventType:i.type}),!T&&O&&g.state.next({...n}),t.resolver){let{errors:e}=await j([p]);if(x([p]),S(w),!_){!Yx(M)&&g.state.next(M);return}let t=dx(n.errors,r,p),i=dx(e,r,t.name||p);o=i.error,p=i.name,C=Yx(e)}else x([p],!0),o=(await oS(y,s.disabled,a,v,t.shouldUseNativeValidation))[p],x([p]),S(w),_&&(o?C=!1:(m.isValid||h.isValid)&&(C=await P({fields:r,onlyCheckValid:!0,name:p,eventType:i.type})));_&&(y._f.deps&&(!Array.isArray(y._f.deps)||y._f.deps.length>0)&&ae(y._f.deps),A(p,C,o,M))}},ie=(e,t)=>{if(Z(n.errors,t)&&e.focus)return e.focus(),1},ae=async(e,i={})=>{let a,o,u=sS(e);if(t.resolver){let t=await M(Ax(e)?e:u);a=Yx(t),o=e?!u.some(e=>Z(t,e)):a}else e?(o=(await Promise.all(u.map(async e=>{let t=Z(r,e);return await P({fields:t&&t._f?{[e]:t}:t,eventType:Cx.TRIGGER})}))).every(Boolean),!(!o&&!n.isValid)&&b()):o=a=await P({fields:r,name:e,eventType:Cx.TRIGGER});if(i.delayError&&t.delayError&&Ux(e)){let r=Z(n.errors,e);r?(ex(n.errors,e),c[e]=y(e,()=>w(e,r)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e])}return g.state.next({...!Ux(e)||(m.isValid||h.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&qx(r,ie,e?u:s.mount),o},oe=(e,t)=>{let r={...o.mount?a:i};return t&&(r=tx(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),Ax(e)?r:Ux(e)?Z(r,e):e.map(e=>Z(r,e))},se=e=>Ax(e)?{...n.errors}:Ux(e)?Z(n.errors,e):e.map(e=>Z(n.errors,e)),ce=(e,t)=>{let r=t||n,i=Z(r.errors,e);return{invalid:!!i,isDirty:!!Z(r.dirtyFields,e),error:i,isValidating:!!Z(n.validatingFields,e),isTouched:!!Z(r.touchedFields,e)}},le=e=>{let t=e?sS(e):void 0;t?.forEach(e=>ex(n.errors,e)),t?t.forEach(e=>{g.state.next({name:e,errors:n.errors})}):(n.errors={},g.state.next({errors:n.errors}))},ue=(e,t,i)=>{let a=(Z(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=Z(n.errors,e)||{};Fx(n.errors,e,{...l,...t,ref:a}),g.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},de=(e,t)=>{if(Px(e)){u++;let{unsubscribe:n}=g.state.subscribe({next:n=>`values`in n&&e(n.values||L(void 0,t),n)}),r=!1;return{unsubscribe:()=>{r||(r=!0,u--,n())}}}return L(e,t,!0)},fe=e=>{let t=!!e.formState?.values;t&&u++;let{unsubscribe:r}=g.state.subscribe({next:t=>{if(TS(e.name,t.name,e.exact)&&wS(t,e.formState||m,we,e.reRenderRoot)){let r={...a};e.callback({values:r,...n,...t,defaultValues:i})}}});if(!t)return r;let o=!1;return()=>{o||(o=!0,u--,r())}},pe=e=>(o.mount=!0,h={...h,...e.formState},fe({...e,formState:{...p,...e.formState}})),me=(e,o={})=>{for(let c of e?sS(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||(ex(r,c),ex(a,c)),!o.keepError&&ex(n.errors,c),!o.keepDirty&&ex(n.dirtyFields,c),!o.keepTouched&&ex(n.touchedFields,c),!o.keepIsValidating&&ex(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&ex(i,c);u&&g.state.next({values:Gb(a)}),g.state.next({...n,...o.keepDirty?{}:{isDirty:I()}}),!o.keepIsValid&&b()},he=({disabled:e,name:t})=>{if(Nx(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&b()}},ge=(e,n={})=>{let a=Z(r,e),c=Nx(n.disabled)||Nx(t.disabled),l=!s.registerName.has(e)&&a&&a._f&&!a._f.mount;return Fx(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a&&!l?he({disabled:Nx(n.disabled)?n.disabled:t.disabled,name:e}):O(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:bS(n.min),max:bS(n.max),minLength:bS(n.minLength),maxLength:bS(n.maxLength),pattern:bS(n.pattern)}:{},name:e,onChange:re,onBlur:re,ref:c=>{if(c){s.registerName.add(e),ge(e,n),s.registerName.delete(e),a=Z(r,e);let t=Ax(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=mS(t),l=a._f.refs||[];if(o?l.find(e=>e===t):t===a._f.ref)return;let u={...a._f};o?(u.refs=[...l.filter(hS),t,...Array.isArray(Z(i,e))?[{}]:[]],u.ref={type:t.type,name:e}):(u.ref=t,delete u.refs),Fx(r,e,{_f:u}),O(e,!1,void 0,t)}else a=Z(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(xx(s.array,e)&&o.action)&&s.unMount.add(e)}}},_e=()=>t.shouldFocusError&&!t.shouldUseNativeValidation&&qx(r,ie,s.mount),ve=e=>{Nx(e)&&(g.state.next({disabled:e}),qx(r,(t,n)=>{let i=Z(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},ye=(e,i)=>async o=>{let c,l;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=Gb(a);if(g.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await j();x(),n.errors=e,u=Gb(t)}else await P({fields:r,eventType:Cx.SUBMIT});if(s.disabled.size)for(let e of s.disabled)ex(u,e);if(ex(n.errors,Ex),Yx(n.errors)){g.state.next({errors:{}});try{c=await e(u,o)}catch(e){l=e}}else i&&await i({...n.errors},o),_e(),setTimeout(_e);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Yx(n.errors)&&!l,submitCount:n.submitCount+1,errors:n.errors}),l)throw l;return c},be=(e,t={})=>{Z(r,e)&&(Ax(t.defaultValue)?ne(e,Gb(Z(i,e))):(ne(e,t.defaultValue),Fx(i,e,Gb(t.defaultValue))),t.keepTouched||ex(n.touchedFields,e),t.keepDirty||(ex(n.dirtyFields,e),n.isDirty=t.defaultValue?I(e,Gb(Z(i,e))):I()),t.keepError||(ex(n.errors,e),m.isValid&&b()),g.state.next({...n}))},xe=(e,c={})=>{let l=e?Gb(e):i,u=Gb(l),d=Yx(e),f=u,p=r;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...rx(lx(i,a,void 0,p),n.dirtyFields)]);for(let t of e){let e=Z(n.dirtyFields,t),r=Z(a,t),i=Z(f,t);e&&!Ax(r)?Fx(f,t,r):!e&&!Ax(i)&&ne(t,i)}}else{if(Sx&&Ax(e))for(let e of s.mount){let t=Z(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Xx(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)ne(e,Z(f,e));else r={}}if(t.shouldUnregister){if(a=c.keepDefaultValues?Gb(i):{},c.keepFieldsRef)for(let e of s.mount)Fx(a,e,Z(f,e))}else a=Gb(f);g.array.next({values:{...f}}),g.state.next({name:void 0,type:void 0,values:{...f}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!m.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!Yx(f),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,o.actionArrayLengths.clear(),c.keepErrors||(n.errors={}),g.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:d?!1:c.keepDirty?n.isDirty:c.keepValues?I():!!(c.keepDefaultValues&&!Kb(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d?{}:c.keepDirtyValues?c.keepDefaultValues&&a?lx(i,a,void 0,p):n.dirtyFields:c.keepDefaultValues&&e?lx(i,e,void 0,p):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},Se=(e,n)=>xe(Px(e)?e(a):e,{...t.resetOptions,...n}),Ce=(e,t={})=>{let n=Z(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&Px(e.select)&&e.select()})}},we=e=>{let{name:t,type:r,values:i,...a}=e;n={...n,...a}};g.state.subscribe({next:we});let Te={control:{register:ge,unregister:me,getFieldState:ce,handleSubmit:ye,setError:ue,_subscribe:fe,_runSchema:j,_updateIsValidating:x,_focusError:_e,_getWatch:L,_getDirty:I,_setValid:b,_setFieldArray:C,_setDisabledField:he,_setErrors:T,_getFieldArray:R,_reset:xe,_resetDefaultValues:()=>Px(t.defaultValues)&&t.defaultValues().then(e=>{Se(e,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:F,_disableForm:ve,_subjects:g,_proxyFormState:m,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e},d=Gx(t.mode),f=Gx(t.reValidateMode)}},subscribe:pe,trigger:ae,register:ge,handleSubmit:ye,watch:de,setValue:ne,setValues:B,getValues:oe,getErrors:se,reset:Se,resetField:be,resetDefaultValues:(e,t={})=>{if(i=Gb(e),!t.keepDirty){let e=lx(i,a,void 0,r);n.dirtyFields=e,n.isDirty=!Yx(e)}t.keepIsValid||b(),g.state.next({...n,defaultValues:i})},clearErrors:le,unregister:me,setError:ue,setFocus:Ce,getFieldState:ce};return{...Te,formControl:Te}}function px(e={}){let t=X.useRef(void 0),n=X.useRef(void 0),r=X.useRef(e.formControl),[i,a]=X.useState(()=>({...Gb(jS),isLoading:Px(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Px(e.defaultValues)?void 0:e.defaultValues}));if(!t.current||e.formControl&&r.current!==e.formControl){if(r.current=e.formControl,e.formControl)t.current={...e.formControl,formState:i},e.defaultValues&&!Px(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...r}=fx(e);t.current={...r,formState:i}}}let o=t.current.control;o._options=e;let{resyncIfNeeded:s,snapshot:c}=qb();return zx(()=>{let e=()=>({...o._formState,defaultValues:o._defaultValues});s(!0,e,a);let t=o._subscribe({formState:o._proxyFormState,callback:()=>a({...o._formState,defaultValues:o._defaultValues}),reRenderRoot:!0});return a(e=>({...e,isReady:!0})),o._formState.isReady=!0,()=>{t(),c(!0,e)}},[o,s,c]),X.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),X.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),X.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),X.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),X.useEffect(()=>{if(o._proxyFormState.isDirty){let e=o._getDirty();e!==i.isDirty&&o._subjects.state.next({isDirty:e})}},[o,i.isDirty]),X.useEffect(()=>{e.values&&!Kb(e.values,n.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),o._options.resetOptions?.keepIsValid||o._setValid(),n.current=e.values,a(e=>({...e}))):o._resetDefaultValues()},[o,e.values]),X.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=X.useMemo(()=>Rx(i,o),[o,i]),t.current}var X,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Z,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS,jS;function MS(){return(MS=t((()=>{X=e(r(),1),mx=e=>e.type===`checkbox`,hx=e=>e.type===`file`,gx=e=>e instanceof Date,_x=e=>e==null,vx=e=>typeof e==`object`,yx=e=>!_x(e)&&!Array.isArray(e)&&vx(e)&&!gx(e),bx=e=>yx(e)&&e.target?mx(e.target)?e.target.checked:hx(e.target)?e.target.files:e.target.value:e,xx=(e,t)=>t.split(`.`).some((t,n,r)=>!isNaN(Number(t))&&e.has(r.slice(0,n).join(`.`))),Sx=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`,Cx={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`,SUBMIT:`submit`,TRIGGER:`trigger`,VALID:`valid`},wx={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},Tx={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},Ex=`root`,Dx=[`__proto__`,`constructor`,`prototype`],Ox=/^\w*$/,kx=e=>Ox.test(e),Ax=e=>e===void 0,jx=/[.[\]'"]/,Mx=e=>e.split(jx).filter(Boolean),Z=(e,t,n)=>{if(!t||!yx(e))return n;let r=kx(t)?[t]:Mx(t);if(r.some(e=>Dx.includes(e)))return n;let i=r.reduce((e,t)=>_x(e)?void 0:e[t],e);return Ax(i)||i===e?Ax(e[t])?n:e[t]:i},Nx=e=>typeof e==`boolean`,Px=e=>typeof e==`function`,Fx=(e,t,n)=>{let r=-1,i=kx(t)?[t]:Mx(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=yx(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if(Dx.includes(t))return;e[t]=a,e=e[t]}},Ix=X.createContext(null),Ix.displayName=`HookFormControlContext`,Lx=()=>X.useContext(Ix),Rx=(e,t,n,r=!0)=>{let i={};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==wx.all&&(t._proxyFormState[i]=!r||wx.all),n&&(n[i]=!0),e[i]}});return i},zx=Sx?X.useLayoutEffect:X.useEffect,Bx=e=>{let t=e.constructor&&e.constructor.prototype;return yx(t)&&t.hasOwnProperty(`isPrototypeOf`)},Vx=e=>_x(e)||!vx(e),Hx=(e,t)=>t.length===0&&!Array.isArray(e)&&!Bx(e),Ux=e=>typeof e==`string`,Wx=(e,t,n,r,i)=>Ux(e)?(r&&t.watch.add(e),Z(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),Z(n,e))):(r&&(t.watchAll=!0),n),Gx=e=>({isOnSubmit:!e||e===wx.onSubmit,isOnBlur:e===wx.onBlur,isOnChange:e===wx.onChange,isOnAll:e===wx.all,isOnTouch:e===wx.onTouched}),Kx=(e,t,n)=>{if(n)return!1;if(t.watchAll||t.watch.has(e))return!0;for(let n of t.watch)if(e.startsWith(n)&&e.charAt(n.length)===`.`)return!0;return!1},qx=(e,t,n,r)=>{for(let i of n||Object.keys(e)){if(i===`_f`)continue;let a=n?Z(e,i):e[i];if(a){let{_f:e}=a;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(qx(a,t))break}else if((yx(a)||Array.isArray(a))&&qx(a,t))break}}},Jx=(e,t,n)=>{let r=Z(e,n),i=Array.isArray(r)?r:[];return Fx(i,Ex,t[n]),Fx(e,n,i),e},Yx=e=>yx(e)&&!Object.keys(e).length,Xx=e=>{if(!Sx)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Zx=e=>e.type===`radio`,Qx=e=>e instanceof RegExp,$x=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},eS={value:!1,isValid:!1},tS={value:!0,isValid:!0},nS=e=>{if(!Array.isArray(e))return eS;if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}let t=e[0];return!t||!t.checked||t.disabled?eS:!t.attributes||!(`value`in t.attributes)||Ax(t.value)||t.value===``?tS:{value:t.value,isValid:!0}},rS={isValid:!1,value:null},iS=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,rS):rS,aS=e=>yx(e)&&!Qx(e)?e:{value:e,message:``},oS=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=Z(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{if(i&&y.reportValidity){let t=Nx(e)?``:e||``;s?s.forEach(e=>e.setCustomValidity(t)):y.setCustomValidity(t),y.reportValidity()}},x={},S=Zx(o),C=mx(o),w=S||C,T=(g||hx(o))&&Ax(o.value)&&Ax(v)||Xx(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,E=$x.bind(null,h,r,x),D=(e,t,n,r=Tx.maxLength,i=Tx.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...E(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!w&&(T||_x(v))||Nx(v)&&!v||C&&!nS(s).isValid||S&&!iS(s).isValid)){let{value:e,message:t}=Ux(c)?{value:!!c,message:c}:aS(c);if(e&&(x[h]={type:Tx.required,message:t,ref:y,...E(Tx.required,t)},!r))return b(t),x}if(!T&&(!_x(d)||!_x(f))){let e,t,n=aS(f),i=aS(d);if(!_x(v)&&!gx(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;_x(n.value)||(e=r>n.value),_x(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;Ux(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),Ux(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(D(!!e,n.message,i.message,Tx.max,Tx.min),!r))return b(x[h].message),x}if((l||u)&&!T&&(Ux(v)||a&&Array.isArray(v))){let e=aS(l),t=aS(u),n=!_x(e.value)&&v.length>+e.value,i=!_x(t.value)&&v.length<+t.value;if((n||i)&&(D(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!T&&Ux(v)){let{value:e,message:t}=aS(p);if(Qx(e)&&!v.match(e)&&(x[h]={type:Tx.pattern,message:t,ref:o,...E(Tx.pattern,t)},!r))return b(t),x}if(m){if(Px(m)){let e=Zb(await m(v,n),y);if(e&&(x[h]={...e,...E(Tx.validate,e.message)},!r))return b(e.message),x}else if(yx(m)){let e={};for(let t in m){if(!Yx(e)&&!r)break;let i=Zb(await m[t](v,n),y,t);i&&(e={...i,...E(t,i.message)},b(i.message),r&&(x[h]=e))}if(!Yx(e)&&(x[h]={ref:y,...e},!r))return x}}let O=x[h];return b(!O||O.message),x},sS=e=>Array.isArray(e)?e:[e],cS=e=>Array.isArray(e)?e.filter(Boolean):[],lS=X.createContext(null),lS.displayName=`HookFormContext`,uS=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},dS=(e,t)=>e!==null&&vx(e)&&Object.prototype.hasOwnProperty.call(e,t),fS=(e,t)=>{if(!t)return!1;let n=e;for(let r of kx(t)?[t]:Mx(t)){if(!dS(n,r))return dS(e,t);n=n[r]}return!0},pS=e=>e.type===`select-multiple`,mS=e=>Zx(e)||mx(e),hS=e=>Xx(e)&&e.isConnected,gS=e=>{for(let t in e)if(Px(e[t]))return!0;return!1},_S=(e,t)=>{let n=t.split(`.`),r=[],i=n[0];for(let t=1;t<n.length;i+=`.`+n[t++])!isNaN(+n[t])&&e.has(i)&&r.push(`${i}.${n[t]}`);return r},vS=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>Ax(e)?e:t?e===``?NaN:e&&+e:n&&Ux(e)?new Date(e):r?r(e):e,yS=(e,t,n,r)=>{let i={};for(let n of e){let e=Z(t,n);e&&Fx(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},bS=e=>Ax(e)?e:Qx(e)?e.source:yx(e)?Qx(e.value)?e.value.source:e.value:e,xS=`AsyncFunction`,SS=e=>{if(!e||!e.validate)return!1;if(Px(e.validate))return e.validate.constructor.name===xS;if(yx(e.validate)){for(let t in e.validate)if(e.validate[t].constructor.name===xS)return!0}return!1},CS=e=>e.mount&&(e.required||!Ax(e.required)&&e.required!==!1||!Ax(e.min)||!Ax(e.max)||!Ax(e.maxLength)||!Ax(e.minLength)||e.pattern||e.validate),wS=(e,t,n,r)=>{n(e);let i=Object.keys(e).filter(e=>e!==`name`);return!i.length||r&&i.length>=Object.keys(t).length||i.find(e=>t[e]===(!r||wx.all))},TS=(e,t,n)=>!e||!t||e===t||sS(e).some(e=>e&&(n?e===t||e.startsWith(t+`.`):e.startsWith(t)||t.startsWith(e))),ES=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:!(n?r.isOnChange:i.isOnChange)||e,DS=(e,t)=>{let n=Z(e,t);!cS(n).length&&!(n!=null&&n.root)&&ex(e,t)},OS={mode:wx.onSubmit,reValidateMode:wx.onChange,shouldFocusError:!0},kS=`form`,AS=(e,t)=>{for(let n in e)n in t||delete e[n];Object.assign(e,t)},jS={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}}})))()}function NS(e){let{name:t,control:n,rules:r,errorMessage:i}=e,{field:a,fieldState:o}=Xb({name:t,control:n,...Y({rules:r})}),s=i??o.error?.message;return{field:a,fieldState:o,resolvedError:s,isInvalid:o.invalid||!!s}}function PS(){return(PS=t((()=>{MS()})))()}function FS(e,t){if(e){if(typeof e==`function`){e(t);return}e.current=t}}function IS(...e){return t=>{e.forEach(e=>{FS(e,t)})}}function LS(e,t){return e?e.querySelector(t):null}function RS({disabled:e,readOnly:t,required:n,isDisabled:r,isReadOnly:i,isRequired:a,isInvalid:o,ariaInvalid:s,errorMessage:c}){return{isDisabled:r??e??!1,isReadOnly:i??t??!1,isRequired:a??n??!1,isInvalid:o??(s===void 0?void 0:s===!0||s===`true`||s===`grammar`||s===`spelling`)??!!c}}function zS({ariaDescribedBy:e,descriptionId:t,noticeId:n,errorMessageId:r,hasDescription:i,hasNotice:a,hasErrorMessage:o}){return mb(e,i?t:void 0,a?n:void 0,o?r:void 0)}function BS(e){return e==null?``:typeof e==`string`?e:String(e)}function VS(){return(VS=t((()=>{})))()}function HS(e){switch(e){case`sm`:return u`
        font-size: var(--font-size-sm);
      `;case`lg`:return u`
        font-size: var(--font-size-lg);
      `;default:return u`
        font-size: var(--font-size-md);
      `}}function US(e,t){return c($S,t===`radio`?tC:eC,HS(e))}var WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,eC,tC,nC,rC,iC,aC,oC,sC;function cC(){return(cC=t((()=>{l(),WS=u`
  display: grid;
  gap: var(--space-2);
`,GS=u`
  display: inline-grid;
  width: auto;
`,KS=u`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  gap: var(--space-3);
  color: var(--field-fg);
  cursor: pointer;

  &[data-disabled="true"] {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }
`,qS=u`
  align-items: center;
`,JS=u`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
`,YS=u`
  display: grid;
  gap: var(--space-1);
`,XS=u`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
  min-width: 0;
  overflow-wrap: anywhere;
`,ZS=u`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
  width: 53px;
  height: 35px;
  padding: 3px;
  border-radius: 999px;
  background: var(--switch-track-off);
  box-shadow: inset 0 0 0 1px rgba(10, 15, 23, 0.12);
  transition:
    background-color 0.18s ease,
    box-shadow 0.18s ease;

  &[data-selected="true"] {
    background: var(--switch-track-on);
  }

  &[data-pressed="true"] {
    box-shadow: inset 0 0 0 1px rgba(10, 15, 23, 0.18);
  }

  &[data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-width) var(--switch-focus-ring),
      inset 0 0 0 1px rgba(10, 15, 23, 0.12);
  }

  &[data-invalid="true"] {
    box-shadow: inset 0 0 0 1px var(--field-error-border);
  }

  &[data-invalid="true"][data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-width) var(--switch-focus-ring),
      inset 0 0 0 1px var(--field-error-border);
  }

  &[data-disabled="true"] {
    opacity: 0.72;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,QS=u`
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--switch-thumb);
  box-shadow: 0 1px 4px rgba(10, 15, 23, 0.18);
  transform: translateX(0);
  transition: transform 0.18s ease;

  &[data-selected="true"] {
    transform: translateX(23px);
  }

  &[data-pressed="true"] {
    box-shadow: 0 1px 3px rgba(10, 15, 23, 0.14);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,$S=u`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  line-height: 0;
  width: 20px;
  height: 20px;
  border: 1px solid var(--field-border);
  background: var(--field-bg);
  color: var(--color-primary-100);
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease;

  &[data-selected="true"] {
    background: var(--switch-track-on);
    border-color: var(--switch-track-on);
  }

  &[data-focus-visible="true"] {
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18);
  }

  &[data-invalid="true"] {
    border-color: var(--field-error-border);
  }

  &[data-invalid="true"][data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18),
      inset 0 0 0 1px var(--field-error-border);
    border-color: var(--field-error-border);
  }

  &[data-disabled="true"] {
    background: var(--field-disabled-bg);
    border-color: var(--field-disabled-border);
  }
`,eC=u`
  border-radius: 6px;
`,tC=u`
  border-radius: 999px;
`,nC=u`
  input:checked + & {
    background: var(--switch-track-on);
    border-color: var(--switch-track-on);
  }

  input:checked + & > span {
    opacity: 1;
  }
`,rC=u`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: opacity 0.18s ease;
`,iC=u`
  opacity: 1;
`,aC=u`
  width: 11px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translate(-50%, -70%) rotate(-45deg);
`,oC=u`
  width: 10px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`,sC=u`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`})))()}var lC,uC,dC,fC,pC,mC,hC,gC,_C;function vC(){return(vC=t((()=>{l(),lC=u`
  display: grid;
  gap: var(--space-2);
  width: 100%;
  min-width: 0;
`,uC=u`
  color: var(--field-label);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.35;
`,dC=u`
  color: var(--field-error);
  margin-left: var(--space-1);
`,fC=u`
  position: relative;
`,pC=u`
  position: relative;
`,mC=u`
  display: grid;
  gap: var(--space-1);
  min-width: 0;
`,hC=u`
  color: var(--field-description);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,gC=u`
  color: var(--field-notice);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,_C=u`
  color: var(--field-error);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`})))()}function yC(e){return u`
    min-height: ${e.controlHeight};
    padding: ${e.inputPaddingYRest} ${e.inputPaddingX} ${e.inputPaddingYRest};
    border-radius: ${e.borderRadius};

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }

    [data-field-control][data-has-icon-start="true"] & {
      padding-left: calc(${e.inputPaddingX} + var(--field-icon-slot-width));
    }
    [data-field-control][data-has-icon-end="true"] & {
      padding-right: calc(${e.inputPaddingX} + var(--field-icon-slot-width));
    }
  `}function bC(e){return`${BC} ${VC[e]}`}function xC(e){return u`
    min-height: 96px;
    padding: ${e.inputPaddingYRest} ${e.inputPaddingX} ${e.inputPaddingYRest};
    border-radius: ${e.borderRadius};
    resize: vertical;

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }

    [data-field-control][data-has-icon-start="true"] & {
      padding-left: calc(${e.inputPaddingX} + var(--field-icon-slot-width));
    }
    [data-field-control][data-has-icon-end="true"] & {
      padding-right: calc(${e.inputPaddingX} + var(--field-icon-slot-width));
    }
  `}function SC(e){return`${BC} ${HC[e]}`}function CC(e){return u`
    min-height: ${e.controlHeight};
    padding: 0 ${e.inputPaddingX};
    border-radius: ${e.borderRadius};

    [data-field-control][data-floated="false"] & {
      padding-top: ${e.inputPaddingYRest};
      padding-bottom: ${e.inputPaddingYRest};
      align-items: center;
    }

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }
  `}function wC(e){return`${WC} ${GC[e]}`}function TC(e){return u`
    [data-field-control][data-floated="false"] & {
      top: 50%;
      left: ${e.labelLeft};
      font-size: ${e.labelRestFontSize};
      transform: translateY(-50%) scale(1);
      transform-origin: left center;
      opacity: 0.85;
      color: var(--field-label-color);
    }

    [data-field-control][data-floated="true"] & {
      top: ${e.labelFloatTop};
      left: ${e.labelLeft};
      font-size: ${e.labelFloatFontSize};
      transform: translateY(0) scale(1);
      transform-origin: left top;
      opacity: 1;
    }

    [data-field-control][data-invalid="true"] & {
      color: var(--field-label-color-invalid);
    }

    [data-field-control][data-disabled="true"] & {
      color: var(--field-disabled-fg);
      opacity: 0.85;
    }

    [data-field-control][data-has-icon-start="true"][data-floated="false"] & {
      left: calc(${e.labelLeft} + var(--field-icon-slot-width));
    }

    [data-field-control][data-multiline="true"][data-floated="false"] & {
      top: ${e.inputPaddingYRest};
      transform: translateY(0) scale(1);
      transform-origin: left top;
    }

    [data-field-control][data-has-icon-start="true"][data-floated="true"] & {
      left: calc(${e.labelLeft} + var(--field-icon-slot-width));
    }

    [data-field-control][data-floated="true"][data-focused="true"] & {
      color: var(--field-label-color-focus);
    }

    [data-field-control][data-floated="true"]:not([data-focused="true"]) & {
      color: var(--field-label-color);
    }

    [data-field-control][data-has-icon-start="true"][data-multiline="true"][data-floated="false"]
      & {
      left: calc(${e.labelLeft} + var(--field-icon-slot-width));
    }
  `}function EC(e){return`${KC} ${qC[e]}`}function DC(e){return`${KC} ${qC[e]} ${JC}`}function OC(e){return u`
    font-size: ${e.messageFontSize};
  `}function kC(e,t){return`${nw} ${aw[e]} ${t?iw:rw}`}function AC(e){return u`
    min-height: ${e.controlHeight};
    padding-top: ${e.inputPaddingYRest};
    padding-bottom: ${e.inputPaddingYRest};
    transition:
      padding-top ${FC} ${IC},
      padding-bottom ${FC} ${IC};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }
  `}function jC(e){let t=LC[e],n=e===`md`?`1.55rem`:t.inputPaddingTopFloated,r=e===`md`?`0.45rem`:t.inputPaddingBottomFloated;return c(BC,u`
      min-height: ${t.controlHeight};
      border-radius: ${t.borderRadius};
      padding: ${t.inputPaddingYRest} calc(${t.inputPaddingX} + ${`2.5rem`})
        ${t.inputPaddingYRest} ${t.inputPaddingX};

      [data-field-control][data-floated="true"] & {
        padding-top: ${n};
        padding-bottom: ${r};
      }
    `)}function MC(e){return AC(LC[e])}function NC(e,t){return u`
    min-height: var(--control-height-${e});
    padding: ${t} var(--control-padding-x-${e});
    font-size: var(--font-size-${e});
  `}function PC(e,t=!1,n=!0){return c(ow,n?uw[e]:dw[e],t?sw:void 0)}var FC,IC,LC,RC,zC,BC,VC,HC,UC,WC,GC,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw,iw,aw,ow,sw,cw,lw,uw,dw;function fw(){return(fw=t((()=>{l(),FC=`200ms`,IC=`cubic-bezier(0.2, 0, 0, 1)`,LC={sm:{inputPaddingYRest:`0.875rem`,inputPaddingTopFloated:`1.25rem`,inputPaddingBottomFloated:`0.5rem`,inputPaddingX:`0.75rem`,controlHeight:`var(--control-height-sm)`,labelLeft:`0.625rem`,labelFloatTop:`0.45rem`,labelRestFontSize:`1rem`,labelFloatFontSize:`0.6875rem`,messageFontSize:`0.8125rem`,borderRadius:`0.375rem`},md:{inputPaddingYRest:`1rem`,inputPaddingTopFloated:`1.45rem`,inputPaddingBottomFloated:`0.55rem`,inputPaddingX:`0.875rem`,controlHeight:`var(--control-height-md)`,labelLeft:`0.75rem`,labelFloatTop:`0.5rem`,labelRestFontSize:`1.0625rem`,labelFloatFontSize:`0.75rem`,messageFontSize:`0.875rem`,borderRadius:`0.4375rem`},lg:{inputPaddingYRest:`1.125rem`,inputPaddingTopFloated:`1.55rem`,inputPaddingBottomFloated:`0.7rem`,inputPaddingX:`1rem`,controlHeight:`var(--control-height-lg)`,labelLeft:`0.875rem`,labelFloatTop:`0.55rem`,labelRestFontSize:`1.125rem`,labelFloatFontSize:`0.8125rem`,messageFontSize:`0.9375rem`,borderRadius:`0.5rem`}},RC=u`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,zC=u`
  position: relative;
  width: 100%;
`,BC=u`
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  line-height: 1.5;
  display: block;
  background: var(--field-bg);
  color: var(--field-text-color);
  border: 0;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--field-border);
  transition:
    padding-top ${FC} ${IC},
    padding-bottom ${FC} ${IC},
    box-shadow ${FC} ${IC},
    background-color ${FC} ${IC};

  &::placeholder {
    color: transparent;
    user-select: none;
  }

  &:focus {
    box-shadow:
      inset 0 0 0 1px var(--field-border-focus),
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }

  &[aria-invalid="true"] {
    box-shadow:
      inset 0 0 0 1px var(--field-border-color-invalid),
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color);
  }

  &[aria-invalid="true"]:focus {
    box-shadow:
      inset 0 0 0 1px var(--field-border-color-invalid),
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) rgba(130, 38, 48, 0.4);
  }

  &:disabled {
    background: var(--field-bg-disabled);
    color: var(--field-text-color-disabled);
    cursor: not-allowed;
    box-shadow: inset 0 0 0 1px var(--field-disabled-border);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,VC={sm:yC(LC.sm),md:yC(LC.md),lg:yC(LC.lg)},HC={sm:xC(LC.sm),md:xC(LC.md),lg:xC(LC.lg)},UC=u`
  color: var(--field-placeholder);
`,WC=u`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--field-bg);
  color: var(--field-text-color);
  border: 0;
  border-radius: var(--control-radius);
  font: inherit;
  line-height: 1.5;
  cursor: pointer;
  outline: none;
  box-shadow: inset 0 0 0 1px var(--field-border);
  transition:
    padding-top ${FC} ${IC},
    padding-bottom ${FC} ${IC},
    box-shadow ${FC} ${IC};

  [data-field-control][data-focused="true"] & {
    box-shadow:
      inset 0 0 0 1px var(--field-border-focus),
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }

  [data-field-control][data-invalid="true"] & {
    box-shadow:
      inset 0 0 0 1px var(--field-border-color-invalid),
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color);
  }

  &:disabled [data-select-placeholder="true"] {
    color: var(--field-disabled-fg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,GC={sm:CC(LC.sm),md:CC(LC.md),lg:CC(LC.lg)},KC=u`
  position: absolute;
  background: transparent;
  color: var(--field-label-color);
  padding: 0;
  pointer-events: none;
  line-height: 1.2;
  max-width: calc(100% - 1rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    transform ${FC} ${IC},
    top ${FC} ${IC},
    left ${FC} ${IC},
    font-size ${FC} ${IC},
    color ${FC} ${IC},
    opacity ${FC} ${IC};

  /* The flat 1rem margin eats a much bigger share of the label box on narrow
     phones, where long labels already truncate hard; claw some of it back. */
  @media (max-width: 480px) {
    max-width: calc(100% - 0.25rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,qC={sm:TC(LC.sm),md:TC(LC.md),lg:TC(LC.lg)},JC=u`
  [data-field-control][data-floated="false"] & {
    max-width: calc(100% - 2.75rem);
  }

  [data-field-control][data-floated="true"] & {
    max-width: calc(100% - 2.5rem);
  }

  @media (max-width: 480px) {
    [data-field-control][data-floated="false"] & {
      max-width: calc(100% - 2.25rem);
    }

    [data-field-control][data-floated="true"] & {
      max-width: calc(100% - 2rem);
    }
  }
`,YC=u`
  position: absolute;
  width: var(--field-icon-slot-width);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--field-icon-color);
  pointer-events: none;
  line-height: 0;

  & > svg {
    width: 1.25em;
    height: 1.25em;
  }
`,XC=c(YC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),ZC=c(YC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),QC=c(YC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),$C={sm:QC,md:QC,lg:QC},ew=c(YC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),tw={sm:ew,md:ew,lg:ew},nw=u`
  margin: 0.375rem 0 0;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
`,rw=u`
  color: var(--field-message-color);
`,iw=u`
  color: var(--field-message-color-invalid);
`,aw={sm:OC(LC.sm),md:OC(LC.md),lg:OC(LC.lg)},ow=u`
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  border: 0;
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  color: var(--field-fg);
  box-shadow:
    inset 0 0 0 1px var(--field-border),
    var(--field-shadow);
  transition:
    box-shadow ${FC} ${IC},
    padding-top ${FC} ${IC},
    padding-bottom ${FC} ${IC},
    background-color ${FC} ${IC},
    color ${FC} ${IC};

  &:focus-within {
    box-shadow:
      inset 0 0 0 1px var(--field-border-focus),
      0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.14),
      var(--field-shadow);
  }

  &[data-invalid="true"] {
    box-shadow:
      inset 0 0 0 1px var(--field-error-border),
      var(--field-shadow);
  }

  &[data-invalid="true"]:focus-within {
    box-shadow:
      inset 0 0 0 1px var(--field-error-border),
      0 0 0 var(--focus-ring-width) rgba(158, 52, 31, 0.14),
      var(--field-shadow);
  }

  &[data-disabled="true"] {
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
    box-shadow: inset 0 0 0 1px var(--field-disabled-border);
  }

  &[data-readonly="true"] {
    background: var(--field-readonly-bg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,sw=u`
  &[data-floated="true"] {
    align-items: stretch;
  }
`,cw=u`
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1.4;
  outline: none;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
    border-radius: inherit;
  }

  &::placeholder {
    color: var(--field-placeholder);
  }

  &:disabled {
    cursor: not-allowed;
    -webkit-text-fill-color: currentColor;
  }
`,u`
  padding-top: 2px;
`,u`
  ${cw}
  resize: vertical;
  min-height: 96px;
  padding-bottom: 2px;
`,u`
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;

  &:focus-within {
    border-color: transparent;
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }
`,u`
  min-height: 0;
`,lw=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--field-chrome);

  & > svg {
    width: 1em;
    height: 1em;
  }
`,uw={sm:NC(`sm`,`calc(var(--control-padding-x-sm) - 2px)`),md:NC(`md`,`calc(var(--control-padding-x-md) - 2px)`),lg:NC(`lg`,`calc(var(--control-padding-x-lg) - 2px)`)},dw={sm:NC(`sm`,`0`),md:NC(`md`,`0`),lg:NC(`lg`,`0`)}})))()}function pw({children:e,className:t,controlClassName:n,controlProps:r,label:i,labelProps:a,inputId:o,description:s,descriptionId:l,descriptionProps:u,errorMessage:d,errorMessageId:f,errorMessageProps:p,notice:m,noticeId:h,isDisabled:g=!1,isRequired:_=!1,layout:v=`stacked`,isFloatingRaised:y=!1,isFloatingFocused:b=!1,isInvalid:x=!1,fieldSize:S=`md`}){let C=c(fC,v===`floating`?pC:void 0,v===`floating`?zC:void 0,n,r?.className),w=()=>i?a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,mw.jsxs)(`label`,{...a,className:c(uC,a.className),children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]}):a?(0,mw.jsxs)(`span`,{...a,className:c(uC,a.className),children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]}):(0,mw.jsxs)(`label`,{className:uC,htmlFor:o,children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]}):null,T=()=>{if(!i)return null;let e=c(EC(S),a?.className);return a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,mw.jsxs)(`label`,{...a,className:e,children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]}):a?(0,mw.jsxs)(`span`,{...a,className:e,children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]}):(0,mw.jsxs)(`label`,{className:e,htmlFor:o,children:[i,_?(0,mw.jsx)(`span`,{className:dC,children:`*`}):null]})};return(0,mw.jsxs)(`div`,{className:c(lC,t),children:[v===`stacked`?w():null,(0,mw.jsxs)(`div`,{...r,className:C,"data-field-control":v===`floating`?`true`:void 0,"data-floated":v===`floating`?y?`true`:`false`:void 0,"data-focused":v===`floating`?b?`true`:`false`:void 0,"data-invalid":v===`floating`?x?`true`:`false`:void 0,"data-disabled":v===`floating`?g?`true`:`false`:void 0,children:[v===`floating`?T():null,e]}),s||m||d?(0,mw.jsxs)(`div`,{className:mC,children:[s?(0,mw.jsx)(`div`,{...u,className:c(hC,u?.className),id:l??u?.id,children:s}):null,m?(0,mw.jsx)(`div`,{className:gC,id:h,children:m}):null,d?(0,mw.jsx)(`div`,{...p,className:c(_C,p?.className),id:f??p?.id,role:p?.role??`alert`,children:d}):null]}):null]})}var mw;function hw(){return(hw=t((()=>{l(),r(),vC(),fw(),mw=W()})))()}function gw(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,isIndeterminate:p=!1,isInline:m=!1,className:h,checkboxValue:g,onKeyDown:_,onKeyUp:v,"aria-label":y}=e,{field:b,resolvedError:x,isInvalid:S}=NS({name:t,control:n,...Y({rules:r}),errorMessage:s}),C=!!b.value,w=(0,_w.useId)(),T=i??w,E=(0,_w.useId)(),D=(0,_w.useId)(),O=zS({descriptionId:E,errorMessageId:D,hasDescription:!!o,hasErrorMessage:!!x}),k=(0,_w.useRef)(null),A=Ql({isDisabled:u,isReadOnly:d,isSelected:C,onChange:b.onChange}),j=g===void 0?void 0:Array.isArray(g)?g.join(`,`):String(g),{inputProps:M,isSelected:N,labelProps:P}=Kl({children:a,id:T,name:b.name,isDisabled:u,isReadOnly:d,isRequired:f,isInvalid:S,isIndeterminate:p,...Y({value:j,"aria-label":y,"aria-describedby":O})},A,k),{focusProps:F,isFocusVisible:I}=T_();(0,_w.useEffect)(()=>{k.current&&(k.current.indeterminate=p)},[p]);let L=U(M,F,{onKeyDown:_,onKeyUp:v,onBlur:e=>{M.onBlur?.(e),b.onBlur()}});return(0,vw.jsx)(pw,{className:c(WS,m&&GS,h),description:o,...hb(o,{descriptionId:E}),errorMessage:x,...hb(x,{errorMessageId:D}),layout:yw,children:(0,vw.jsxs)(`label`,{...P,className:c(KS,HS(l)),"data-disabled":u?`true`:`false`,children:[(0,vw.jsx)(`input`,{...L,ref:IS(k,b.ref),className:JS,type:`checkbox`}),(0,vw.jsxs)(`span`,{className:US(l,`checkbox`),"aria-hidden":`true`,"data-disabled":u?`true`:`false`,"data-focus-visible":I?`true`:`false`,"data-indeterminate":p?`true`:`false`,"data-invalid":S?`true`:`false`,"data-selected":N?`true`:`false`,children:[(0,vw.jsx)(`span`,{className:c(rC,aC,N&&!p&&iC)}),(0,vw.jsx)(`span`,{className:c(rC,oC,p&&iC)})]}),(0,vw.jsx)(`span`,{className:YS,children:(0,vw.jsx)(`span`,{className:XS,children:a})})]})})}var _w,vw,yw;function bw(){return(bw=t((()=>{l(),eu(),_w=e(r()),V(),Jl(),D_(),PS(),VS(),cC(),hw(),vw=W(),yw=`stacked`})))()}function xw(e){return null}function Sw(e){return e.hasChildItems==null?!!(e.childItems||e.title&&Cw.Children.count(e.children)>0):e.hasChildItems}var Cw,ww;function Tw(){return(Tw=t((()=>{Cw=e(r(),1),xw.getCollectionNode=function*(e,t){let{childItems:n,title:r,children:i}=e,a=e.title||e.children,o=e.textValue||(typeof a==`string`?a:``)||e[`aria-label`]||``;!o&&t?.suppressTextValueWarning,yield{type:`item`,props:e,rendered:a,textValue:o,"aria-label":e[`aria-label`],hasChildNodes:Sw(e),*childNodes(){if(n)for(let e of n)yield{type:`item`,value:e};else if(r){let e=[];Cw.Children.forEach(i,t=>{e.push({type:`item`,element:t})}),yield*e}}}},ww=xw})))()}function Ew(e){return null}var Dw,Ow;function kw(){return(kw=t((()=>{Dw=e(r(),1),Ew.getCollectionNode=function*(e){let{children:t,title:n,items:r}=e;yield{type:`section`,props:e,hasChildNodes:!0,rendered:n,"aria-label":e[`aria-label`],*childNodes(){if(typeof t==`function`){if(!r)throw Error(`props.children was a function but props.items is missing`);for(let e of r)yield{type:`item`,value:e,renderer:t}}else{let e=[];Dw.Children.forEach(t,t=>{e.push({type:`item`,element:t})}),yield*e}}}},Ow=Ew})))()}function Aw(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;n||=e();for(let e of n)t.push(e),yield e}}}function jw(e,t){if(e&&t)return n=>e(t(n));if(e)return e;if(t)return t}function Mw(e){return e[0].toUpperCase()+e.slice(1)}var Nw,Pw;function Fw(){return(Fw=t((()=>{Nw=e(r(),1),Pw=class{build(e,t){return this.context=t,Aw(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if(Nw.isValidElement(t)&&t.type===Nw.Fragment)yield*this.iterateCollection({children:t.props.children,items:n});else if(typeof t==`function`){if(!n)throw Error(`props.children was a function but props.items is missing`);let e=0;for(let r of n)yield*this.getFullNode({value:r,index:e},{renderer:t}),e++}else{let e=[];Nw.Children.forEach(t,t=>{t&&e.push(t)});let n=0;for(let t of e){let e=this.getFullNode({element:t,index:n},{});for(let t of e)n++,yield t}}}getKey(e,t,n,r){if(e.key!=null)return e.key;if(t.type===`cell`&&t.key!=null)return`${r}${t.key}`;let i=t.value;if(i!=null){let e=i.key??i.id;if(e==null)throw Error(`No key found for item`);return e}return r?`${r}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,r){if(Nw.isValidElement(e.element)&&e.element.type===Nw.Fragment){let i=[];Nw.Children.forEach(e.element.props.children,e=>{i.push(e)});let a=e.index??0;for(let e of i)yield*this.getFullNode({element:e,index:a++},t,n,r);return}let i=e.element;if(!i&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=r?r.key:null,yield n;return}i=t.renderer(e.value)}if(Nw.isValidElement(i)){let a=i.type;if(typeof a!=`function`&&typeof a.getCollectionNode!=`function`){let e=i.type;throw Error(`Unknown element <${e}> in collection.`)}let o=a.getCollectionNode(i.props,this.context),s=e.index??0,c=o.next();for(;!c.done&&c.value;){let a=c.value;e.index=s;let l=a.key??null;l??=a.element?null:this.getKey(i,e,t,n);let u=[...this.getFullNode({...a,key:l,index:s,wrapper:jw(e.wrapper,a.wrapper)},this.getChildState(t,a),n?`${n}${i.key}`:i.key,r)];for(let t of u){if(t.value=a.value??e.value??null,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${Mw(t.type)}> in <${Mw(r?.type??`unknown parent type`)}>. Only <${Mw(e.type)}> is supported.`);s++,yield t}c=o.next(u)}return}if(e.key==null||e.type==null)return;let a=this,o={type:e.type,props:e.props,key:e.key,parentKey:r?r.key:null,value:e.value??null,level:(r?.level??0)+ +(r?.type===`item`),index:e.index,rendered:e.rendered,textValue:e.textValue??``,"aria-label":e[`aria-label`],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:Aw(function*(){if(!e.hasChildNodes||!e.childNodes)return;let n=0;for(let r of e.childNodes()){r.key!=null&&(r.key=`${o.key}${r.key}`);let e=a.getFullNode({...r,index:n},a.getChildState(t,r),o.key,o);for(let t of e)n++,yield t}})};yield o}constructor(){this.cache=new WeakMap}}})))()}function Iw(e,t,n){let r=(0,Lw.useMemo)(()=>new Pw,[]),{children:i,items:a,collection:o}=e;return(0,Lw.useMemo)(()=>o||t(r.build({children:i,items:a},n)),[r,i,a,o,n,t])}var Lw;function Rw(){return(Rw=t((()=>{Fw(),Lw=r()})))()}var zw;function Bw(){return(Bw=t((()=>{zw=class{constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&e.type===`section`)for(let n of e.childNodes)t(n)};for(let n of e)t(n);let n=null,r=0,i=0;for(let[e,t]of this.keyMap)n?(n.nextKey=e,t.prevKey=n.key):(this.firstKey=e,t.prevKey=void 0),t.type===`item`&&(t.index=r++),(t.type===`section`||t.type===`item`)&&i++,n=t,n.nextKey=void 0;this._size=i,this.lastKey=n?.key??null}*[Symbol.iterator](){yield*this.iterable}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey??null:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey??null:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)??null}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){return this.keyMap.get(e)?.childNodes||[]}}})))()}var Vw;function Hw(){return(Hw=t((()=>{Vw=class e extends Set{constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n??t.anchorKey,this.currentKey=r??t.currentKey):(this.anchorKey=n??null,this.currentKey=r??null)}}})))()}function Uw(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Ww(e){let{selectionMode:t=`none`,disallowEmptySelection:n=!1,allowDuplicateSelectionEvents:r,selectionBehavior:i=`toggle`,disabledBehavior:a=`all`}=e,o=(0,Kw.useRef)(!1),[,s]=(0,Kw.useState)(!1),c=(0,Kw.useRef)(null),l=(0,Kw.useRef)(null),[,u]=(0,Kw.useState)(null),d=(0,Kw.useMemo)(()=>Gw(e.selectedKeys),[e.selectedKeys]),f=(0,Kw.useMemo)(()=>Gw(e.defaultSelectedKeys,new Vw),[e.defaultSelectedKeys]),[p,m]=_t(d,f,e.onSelectionChange),h=(0,Kw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[g,_]=(0,Kw.useState)(i);i===`replace`&&g===`toggle`&&typeof p==`object`&&p.size===0&&_(`replace`);let v=(0,Kw.useRef)(i);return(0,Kw.useEffect)(()=>{i!==v.current&&(_(i),v.current=i)},[i]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:g,setSelectionBehavior:_,get isFocused(){return o.current},setFocused(e){o.current=e,s(e)},get focusedKey(){return c.current},get childFocusStrategy(){return l.current},setFocusedKey(e,t=`first`){c.current=e,l.current=t,u(e)},selectedKeys:p,setSelectedKeys(e){(r||!Uw(e,p))&&m(e)},disabledKeys:h,disabledBehavior:a}}function Gw(e,t){return e?e===`all`?`all`:new Vw(e):t}var Kw;function qw(){return(qw=t((()=>{Hw(),oe(),Kw=r()})))()}var Jw;function Yw(){return(Yw=t((()=>{Hw(),Jw=class e{constructor(e,t,n){this.collection=e,this.state=t,this.allowsCellSelection=n?.allowsCellSelection??!1,this._isSelectAll=null,this.layoutDelegate=n?.layoutDelegate||null,this.fullCollection=n?.fullCollection||null}get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys===`all`?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys===`all`?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!==`all`&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys===`all`)return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Sh(this.collection,n,e)<0)&&(e=n)}return e?.key??null}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Sh(this.collection,n,e)>0)&&(e=n)}return e?.key??null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n;if(this.state.selectedKeys===`all`)n=new Vw([t],t,t);else{let e=this.state.selectedKeys,r=e.anchorKey??t;n=new Vw(e,r,t);for(let i of this.getKeyRange(r,e.currentKey??t))n.delete(i);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&n.add(e)}this.state.setSelectedKeys(n)}getKeyRange(e,t){let n=this.collection.getItem(e),r=this.collection.getItem(t);return n&&r?Sh(this.collection,n,r)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){if(this.layoutDelegate?.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let n=[],r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e&&(e.type===`item`||e.type===`cell`&&this.allowsCellSelection)&&n.push(r),r===t)return n;r=this.collection.getKeyAfter(r)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type===`cell`&&this.allowsCellSelection)return e;for(;t&&t.type!==`item`&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!==`item`?null:t.key}toggleSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new Vw(this.state.selectedKeys===`all`?this.getSelectAllKeys():this.state.selectedKeys);n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new Vw([t],t,t):new Vw;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode===`none`)return;let t=new Vw;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode===`single`))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=this.fullCollection??this.collection,t=[],n=r=>{for(;r!=null;){if(this.canSelectItemIn(r,e)){let i=e.getItem(r);i?.type===`item`&&t.push(r),i?.hasChildNodes&&(this.allowsCellSelection||i.type!==`item`)&&n(bh(yh(i,e))?.key??null)}r=e.getKeyAfter(r)}};return n(e.getFirstKey()),t}selectAll(){!this.isSelectAll&&this.selectionMode===`multiple`&&this.state.setSelectedKeys(`all`)}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys===`all`||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new Vw)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!==`none`&&(this.selectionMode===`single`?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior===`toggle`||t&&(t.pointerType===`touch`||t.pointerType===`virtual`)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){return this.canSelectItemIn(e,this.collection)}canSelectItemIn(e,t){if(this.state.selectionMode===`none`||this.state.disabledKeys.has(e))return!1;let n=t.getItem(e);return!(!n||n?.props?.isDisabled||n.type===`cell`&&!this.allowsCellSelection)}isDisabled(e){let t=this.collection.getItem(e);return this.state.disabledBehavior===`all`&&(this.state.disabledKeys.has(e)||!!t?.props?.isDisabled)&&t?.props?.disabledBehavior!==`selection`}isLink(e){return!!this.collection.getItem(e)?.props?.href}getItemProps(e){return this.collection.getItem(e)?.props}withCollection(t){return new e(t,this.state,{allowsCellSelection:this.allowsCellSelection,layoutDelegate:this.layoutDelegate||void 0,fullCollection:this.fullCollection??this.collection})}}})))()}function Xw(e){let{filter:t,layoutDelegate:n}=e,r=Ww(e),i=(0,Qw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=Iw(e,(0,Qw.useCallback)(e=>t?new zw(t(e)):new zw(e),[t]),(0,Qw.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning])),o=(0,Qw.useMemo)(()=>new Jw(a,r,{layoutDelegate:n}),[a,r,n]);return Zw(a,o),{collection:a,disabledKeys:i,selectionManager:o}}function Zw(e,t){let n=(0,Qw.useRef)(null);(0,Qw.useEffect)(()=>{if(t.focusedKey!=null&&!e.getItem(t.focusedKey)&&n.current){let r=n.current.getKeyAfter(t.focusedKey),i=null;for(;r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyAfter(r)}if(i==null)for(r=n.current.getKeyBefore(t.focusedKey);r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyBefore(r)}t.setFocusedKey(i)}n.current=e},[e,t])}var Qw;function $w(){return($w=t((()=>{Bw(),qw(),Yw(),Rw(),Qw=r()})))()}function eT(e){let{defaultFilter:t,menuTrigger:n=`input`,allowsEmptyCollection:r=!1,allowsCustomValue:i,shouldCloseOnBlur:a=!0,selectionMode:o=`single`}=e,[s,c]=(0,aT.useState)(!1),[l,u]=(0,aT.useState)(!1),[d,f]=(0,aT.useState)(null),p=(0,aT.useMemo)(()=>e.defaultValue===void 0?o===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,o]),m=(0,aT.useMemo)(()=>e.value===void 0?o===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,o]),[h,g]=_t(m,p,e.onChange),_=o===`single`&&Array.isArray(h)?h[0]:h,v=t=>{if(o===`single`){let n=Array.isArray(t)?t[0]??null:t;g(n),n!==_&&e.onSelectionChange?.(n)}else{let e=[];Array.isArray(t)?e=t:t!=null&&(e=[t]),g(e)}},{collection:y,selectionManager:b,disabledKeys:x}=Xw({...e,items:e.items??e.defaultItems,selectionMode:o,disallowEmptySelection:o===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,aT.useMemo)(()=>iT(_),[_]),onSelectionChange:t=>{if(t!==`all`){if(o===`single`){let n=t.values().next().value??null;n===_?(e.onSelectionChange?.(n),ne(),z()):v(n)}else v([...t])}}}),S=o===`single`?b.firstSelectedKey:null,C=(0,aT.useMemo)(()=>[...b.selectedKeys].map(e=>y.getItem(e)).filter(e=>e!=null),[b.selectedKeys,y]),[w,T]=_t(e.inputValue,rT(e.defaultInputValue,S,y)||``,e.onInputChange),[E]=(0,aT.useState)(_),[D]=(0,aT.useState)(w),O=y,k=(0,aT.useMemo)(()=>e.items!=null||!t?y:tT(y,w,t),[y,w,t,e.items]),[A,j]=(0,aT.useState)(k),M=(0,aT.useRef)(`focus`),N=t=>{e.onOpenChange&&e.onOpenChange(t,t?M.current:void 0),b.setFocused(t),t||b.setFocusedKey(null)},P=lt({...e,onOpenChange:N,isOpen:void 0,defaultOpen:void 0}),F=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;(r||k.size>0||a&&O.size>0||e.items)&&(a&&!P.isOpen&&e.items===void 0&&c(!0),M.current=i,f(t),P.open())},I=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;!(r||k.size>0||a&&O.size>0||e.items)&&!P.isOpen||(a&&!P.isOpen&&e.items===void 0&&c(!0),P.isOpen||(M.current=i),R(t))},L=(0,aT.useCallback)(()=>{j(s?O:k)},[s,O,k]),R=(0,aT.useCallback)((e=null)=>{P.isOpen&&L(),f(e),P.toggle()},[P,L]),z=(0,aT.useCallback)(()=>{P.isOpen&&(L(),P.close())},[P,L]),[ee,te]=(0,aT.useState)(w),ne=()=>{let e=S==null?``:y.getItem(S)?.textValue??``;te(e),T(e)},B=(0,aT.useRef)(_),re=(0,aT.useRef)(S==null?``:y.getItem(S)?.textValue??``);(0,aT.useEffect)(()=>{l&&(k.size>0||r)&&!P.isOpen&&w!==ee&&n!==`manual`&&F(null,`input`),!s&&!r&&P.isOpen&&k.size===0&&z(),_!=null&&_!==B.current&&o===`single`&&z(),w!==ee&&(b.setFocusedKey(null),c(!1),o===`single`&&w===``&&(e.inputValue===void 0||m===void 0)&&v(null)),_!==B.current&&(e.inputValue===void 0||m===void 0)?ne():ee!==w&&te(w);let t=S==null?``:y.getItem(S)?.textValue??``;!l&&S!=null&&e.inputValue===void 0&&S===B.current&&re.current!==t&&(te(t),T(t)),B.current=_,re.current=t});let ie=Al({...e,value:(0,aT.useMemo)(()=>Array.isArray(_)&&_.length===0?null:{inputValue:w,value:_,selectedKey:S},[w,S,_])}),ae=()=>{i&&S==null?oe():se()},oe=()=>{if(o===`multiple`){te(w),z();return}B.current=null,v(null),z()},se=(t=!1)=>{if(m!==void 0&&e.inputValue!==void 0){let n=S==null?``:y.getItem(S)?.textValue??``;(t||o===`multiple`||w!==n)&&(e.onSelectionChange?.(S),e.onChange?.(_)),te(n),z()}else ne(),z()},ce=()=>{if(i){let e=S==null?``:y.getItem(S)?.textValue??``;w===e?se():oe()}else se()},le=()=>{P.isOpen&&b.focusedKey!=null?b.isSelected(b.focusedKey)&&o===`single`?se(!0):b.select(b.focusedKey):ce()},ue=(0,aT.useRef)([w,_]),de=t=>{t?(ue.current=[w,_],n===`focus`&&!e.isReadOnly&&F(null,`focus`)):(a&&ce(),(w!==ue.current[0]||_!==ue.current[1])&&ie.commitValidation()),u(t)},fe=(0,aT.useMemo)(()=>P.isOpen?s?O:k:A,[P.isOpen,O,k,s,A]),pe=e.defaultSelectedKey??(o===`single`?E:null);return{...ie,...P,focusStrategy:d,toggle:I,open:F,close:ce,selectionManager:b,value:_,defaultValue:p??E,setValue:v,selectedKey:S,selectedItems:C,defaultSelectedKey:pe,setSelectedKey:v,disabledKeys:x,isFocused:l,setFocused:de,selectedItem:C[0]??null,collection:fe,inputValue:w,defaultInputValue:rT(e.defaultInputValue,pe,y)??D,setInputValue:T,commit:le,revert:ae}}function tT(e,t,n){return new zw(nT(e,e,t,n))}function nT(e,t,n,r){let i=[];for(let a of t)if(a.type===`section`&&a.hasChildNodes){let t=nT(e,yh(a,e),n,r);[...t].some(e=>e.type===`item`)&&i.push({...a,childNodes:t})}else(a.type===`item`&&r(a.textValue,n)||a.type!==`item`)&&i.push({...a});return i}function rT(e,t,n){return e==null&&t!=null?n.getItem(t)?.textValue??``:e}function iT(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var aT;function oT(){return(oT=t((()=>{Hl(),Bw(),$w(),Ye(),oe(),aT=r()})))()}function sT(e,t){if(e==null)return t;if(typeof e==`string`||typeof e==`number`)return e;if(typeof e==`object`){if(`key`in e&&e.key!==null&&e.key!==void 0)return e.key;if(`id`in e&&e.id!==null&&e.id!==void 0)return e.id;if(`value`in e&&e.value!==null&&e.value!==void 0)return e.value}return t}function cT(e){if(e==null)return``;if(typeof e==`string`||typeof e==`number`)return String(e);if(typeof e==`object`){if(`textValue`in e&&typeof e.textValue==`string`)return e.textValue;if(`label`in e&&typeof e.label==`string`)return e.label;if(`name`in e&&typeof e.name==`string`)return e.name;if(`title`in e&&typeof e.title==`string`)return e.title;if(`value`in e&&e.value!==null&&e.value!==void 0)return String(e.value)}return String(e)}function lT(e,t={}){return Array.from(e).map((e,n)=>{let r=t.getItemTextValue?.(e)??cT(e);return{item:e,key:t.getItemKey?.(e)??sT(e,n),rendered:t.renderItem?t.renderItem(e):r,textValue:r,isDisabled:t.getItemDisabled?.(e)??(typeof e==`object`&&e&&e!==void 0&&`disabled`in e?!!e.disabled:!1)}})}function uT({selectedItem:e,inputValue:t}){return e!=null||typeof t==`string`&&t.trim().length>0}var dT,fT,pT,mT,hT,gT,_T,vT,yT;function bT(){return(bT=t((()=>{l(),u`
  appearance: none;
  cursor: pointer;
  padding-right: 28px;

  &:disabled {
    cursor: not-allowed;
  }
`,u`
  position: absolute;
  right: 14px;
  top: 50%;
  width: 10px;
  height: 10px;
  border-right: 1.8px solid var(--field-chrome);
  border-bottom: 1.8px solid var(--field-chrome);
  pointer-events: none;
  transform: translateY(-65%) rotate(45deg);
`,dT=u`
  position: absolute;
  z-index: var(--z-popover);
  min-width: var(--popover-trigger-width, 0);
  max-width: min(100vw - 24px, 560px);
  box-sizing: border-box;
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  box-shadow: 0 14px 32px rgba(10, 15, 23, 0.18);
`,fT=u`
  margin: 0;
  padding: var(--space-2);
  list-style: none;
  max-height: 240px;
  overflow: auto;
  display: grid;
  gap: var(--space-2);
`,pT=u`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  min-height: 44px;
  padding: var(--space-2) var(--space-4);
  border: 1px solid transparent;
  border-radius: calc(var(--control-radius) + 1px);
  color: var(--field-fg);
  cursor: pointer;
  line-height: 1.35;

  & > span:first-of-type {
    flex: 1 1 auto;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  &[data-selected="true"] {
    background: var(--color-green-600);
    border-color: var(--color-green-700);
    color: var(--color-primary-100);
    font-weight: 600;
  }

  &[data-highlighted="true"]:not([data-selected="true"]) {
    background: var(--color-green-75);
    border-color: var(--color-green-300);
    color: var(--color-green-900);
  }

  &[data-selected="true"][data-highlighted="true"] {
    background: var(--color-green-700);
    border-color: var(--color-green-800);
    color: var(--color-primary-100);
  }

  &[data-focus-visible="true"] {
    outline: none;
    box-shadow:
      0 0 0 1px var(--color-green-300),
      0 0 0 calc(var(--focus-ring-width) + 1px) rgba(31, 105, 100, 0.4);
  }

  &[data-disabled="true"] {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }
`,mT=u`
  padding: var(--space-3);
  color: var(--field-description);
  font-size: 0.9375rem;
`,hT=u`
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--field-chrome);
  cursor: pointer;
`,gT=u`
  width: 10px;
  height: 10px;
  border-right: 1.8px solid currentColor;
  border-bottom: 1.8px solid currentColor;
  transform: rotate(45deg);
`,_T=u`
  width: 10px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg) translateY(-1px);
`,vT=u`
  display: grid;
  gap: var(--space-2);
`,yT=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--color-clear-50);
  color: var(--field-fg);
  cursor: pointer;
  font-size: var(--font-size-md);
  font-weight: 500;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    box-shadow 0.18s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18);
  }

  &:disabled {
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
    border-color: var(--field-disabled-border);
    cursor: not-allowed;
  }
`})))()}function xT({item:e,state:t}){let n=ST.useRef(null),{optionProps:r,isDisabled:i,isFocused:a,isFocusVisible:o,isSelected:s}=J_({key:e.key},t,n);return(0,CT.jsxs)(`li`,{...r,ref:n,className:pT,"data-disabled":i?`true`:`false`,"data-focus-visible":o?`true`:`false`,"data-highlighted":a?`true`:`false`,"data-key":String(e.key),"data-selected":s?`true`:`false`,children:[(0,CT.jsx)(`span`,{children:e.rendered}),s?(0,CT.jsx)(`span`,{className:_T,"aria-hidden":`true`}):null]})}var ST,CT;function wT(){return(wT=t((()=>{ST=e(r()),Y_(),bT(),CT=W()})))()}function TT({section:e,state:t}){let n=e[`aria-label`],{itemProps:r,headingProps:i,groupProps:a}=K_({heading:e.rendered,...Y({"aria-label":n})});return(0,ET.jsxs)(`li`,{...r,className:DT,children:[e.rendered?(0,ET.jsx)(`span`,{...i,className:OT,children:e.rendered}):null,(0,ET.jsx)(`ul`,{...a,className:kT,children:Array.from(t.collection.getChildren?.(e.key)??[]).map(e=>(0,ET.jsx)(xT,{item:e,state:t},e.key))})]})}var ET,DT,OT,kT;function AT(){return(AT=t((()=>{l(),q_(),wT(),ET=W(),DT=u`
  display: grid;
  gap: var(--space-1);
`,OT=u`
  padding: var(--space-2) var(--space-3) 0;
  color: var(--field-label-color);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.35;
`,kT=u`
  margin: 0;
  padding: 0;
  list-style: none;
`})))()}function jT({state:e,listBoxRef:t,className:n,emptyState:r,...a}){let{t:o}=i(`shared-module`),s=MT.useRef(null),l=t??s,{listBoxProps:u}=W_(a,e,l),d=Array.from(e.collection);return d.length===0?(0,NT.jsx)(`div`,{className:mT,role:`presentation`,children:r??o(`listBox.noResults`)}):(0,NT.jsx)(`ul`,{...u,ref:l,className:c(fT,n),children:d.map(t=>t.type===`section`?(0,NT.jsx)(TT,{section:t,state:e},t.key):(0,NT.jsx)(xT,{item:t,state:e},t.key))})}var MT,NT;function PT(){return(PT=t((()=>{l(),MT=e(r()),G_(),a(),bT(),wT(),AT(),NT=W()})))()}function FT({children:e,className:t,state:n,triggerRef:r,popoverRef:i,surfaceProps:a,placement:o=`bottom start`,offset:s=8,isNonModal:l=!1}){let d=IT.useRef(null),f=i??d,{popoverProps:p,underlayProps:m,placement:h}=Nv({popoverRef:f,triggerRef:r,placement:o,offset:s,isNonModal:l},n),g=h!==null,_=r.current instanceof HTMLElement?r.current.offsetWidth:void 0,v=_===void 0?void 0:u`
          --popover-trigger-width: ${_}px;
        `;return(0,LT.jsx)(Pe,{disableFocusManagement:l,children:(0,LT.jsx)(`div`,{...m,className:RT,children:(0,LT.jsxs)(`div`,{...U(p,a),style:{...p.style,...a?.style,...g?null:{pointerEvents:`none`}},ref:f,className:c(dT,zT,v,t,a?.className),children:[(0,LT.jsx)(ot,{onDismiss:n.close}),e,(0,LT.jsx)(ot,{onDismiss:n.close})]})})})}var IT,LT,RT,zT;function BT(){return(BT=t((()=>{l(),IT=e(r()),ke(),V(),tt(),Fv(),bT(),LT=W(),RT=u`
  position: fixed;
  inset: 0;
  z-index: var(--z-popover);
  pointer-events: none;
`,zT=u`
  pointer-events: auto;
`})))()}function VT(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,items:d,children:f,getItemKey:p,getItemTextValue:m,getItemDisabled:h,inputValue:g,onInputChange:_,allowsCustomValue:v=!1,isEditable:y=!0,emptyState:b,className:x,isDisabled:S=!1,isReadOnly:C=!1,isRequired:w=!1,onFocus:T,onBlur:E,onKeyDown:D,onKeyUp:O,placeholder:k,"aria-label":A}=e,{field:j,resolvedError:M,isInvalid:N}=NS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:P}=i(`shared-module`),F=P(`comboBox.toggleOptions`),I=(0,HT.useRef)(null),L=(0,HT.useRef)(null),R=(0,HT.useRef)(null),z=(0,HT.useRef)(null),ee=HT.useId(),te=a??ee,ne=(0,HT.useMemo)(()=>({getItemKey:p,getItemTextValue:m,...Y({getItemDisabled:h,renderItem:f})}),[f,h,p,m]),B=(0,HT.useMemo)(()=>lT(d,ne),[ne,d]),re=(0,HT.useMemo)(()=>B.filter(e=>e.isDisabled).map(e=>e.key),[B]),{contains:ie}=v_({sensitivity:KT}),ae=j.value===null||j.value===void 0?null:j.value,oe=eT({items:B,children:e=>(0,UT.jsx)(ww,{textValue:e.textValue,children:e.rendered},e.key),disabledKeys:re,defaultFilter:ie,selectedKey:ae,onSelectionChange:e=>{j.onChange(e)},allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:N,label:o,description:s,errorMessage:M,placeholder:k??` `,...Y({inputValue:g,onInputChange:_})}),{buttonProps:se,inputProps:ce,listBoxProps:le,labelProps:ue,descriptionProps:de,errorMessageProps:fe,isInvalid:pe,validationErrors:me}=Oh({id:te,items:B,disabledKeys:re,inputRef:I,buttonRef:L,listBoxRef:R,popoverRef:z,selectedKey:ae,allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:N,label:o,description:s,errorMessage:M,placeholder:k??` `,name:j.name,...Y({inputValue:g,onInputChange:_,"aria-label":A})},oe),{buttonProps:he}=Lr(se,L),[ge,_e]=(0,HT.useState)(!1),ve=uT({inputValue:oe.inputValue,selectedItem:oe.selectedItem}),ye=ge||ve,be=U(ce,{onMouseDown:e=>{!oe.isOpen&&!S&&!C&&(e.preventDefault(),I.current?.focus(),oe.open()),ce.onMouseDown?.(e)},onBeforeInput:e=>{y||e.preventDefault()},onFocus:e=>{_e(!0),ce.onFocus?.(e),T?.(e)},onBlur:e=>{_e(!1),ce.onBlur?.(e),E?.(e),j.onBlur()},onKeyDown:e=>{let t=e.key.length===1||e.key===`Backspace`||e.key===`Delete`;if(!y&&t){e.preventDefault();return}D?.(e)},onKeyUp:O}),xe=M??(pe&&me.length>0?me.join(` `):null);return(0,UT.jsxs)(`div`,{className:c(RC,x),children:[(0,UT.jsxs)(`div`,{className:c(zC,WT),"data-field-control":`true`,"data-open":oe.isOpen?`true`:`false`,"data-disabled":S?`true`:`false`,"data-invalid":pe?`true`:`false`,"data-readonly":C?`true`:`false`,"data-focused":ge?`true`:`false`,"data-floated":ye?`true`:`false`,"data-filled":ve?`true`:`false`,children:[(0,UT.jsx)(`input`,{...be,ref:IS(I,j.ref),className:c(jC(u),!y&&GT)}),(0,UT.jsx)(`label`,{...ue,className:EC(u),children:o}),(0,UT.jsx)(`button`,{...he,ref:L,className:hT,"aria-label":F,type:`button`,children:(0,UT.jsx)(`span`,{className:gT,"aria-hidden":`true`})}),oe.isOpen?(0,UT.jsx)(FT,{isNonModal:!0,popoverRef:z,state:oe,triggerRef:I,children:(0,UT.jsx)(jT,{...le,emptyState:b,listBoxRef:R,state:oe})}):null]}),xe?(0,UT.jsx)(`p`,{...fe,role:`alert`,className:kC(u,!0),children:xe}):s?(0,UT.jsx)(`p`,{...de,className:kC(u,!1),children:s}):null]})}var HT,UT,WT,GT,KT;function qT(){return(qT=t((()=>{l(),Tw(),oT(),HT=e(r()),V(),Rr(),jh(),b_(),a(),PS(),fw(),PT(),BT(),bT(),UT=W(),WT=u`
  position: relative;

  &[data-open="false"] {
    cursor: pointer;
  }

  &[data-open="false"] input,
  &[data-open="false"] button {
    cursor: pointer;
  }
`,GT=u`
  caret-color: transparent;
  user-select: none;
  cursor: pointer;
`,KT=`base`})))()}var JT;function YT(){return(YT=t((()=>{JT={},JT={rangeOverflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,rangeReversed:`تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.`,rangeUnderflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,unavailableDate:`البيانات المحددة غير متاحة.`}})))()}var XT;function ZT(){return(ZT=t((()=>{XT={},XT={rangeOverflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,rangeReversed:`Началната дата трябва да е преди крайната.`,rangeUnderflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,unavailableDate:`Избраната дата не е налична.`}})))()}var QT;function $T(){return($T=t((()=>{QT={},QT={rangeOverflow:e=>`Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,rangeReversed:`Datum zahájení musí předcházet datu ukončení.`,rangeUnderflow:e=>`Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,unavailableDate:`Vybrané datum není k dispozici.`}})))()}var eE;function tE(){return(tE=t((()=>{eE={},eE={rangeOverflow:e=>`V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen skal være før slutdatoen.`,rangeUnderflow:e=>`V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,unavailableDate:`Den valgte dato er ikke tilgængelig.`}})))()}var nE;function rE(){return(rE=t((()=>{nE={},nE={rangeOverflow:e=>`Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,rangeReversed:`Das Startdatum muss vor dem Enddatum liegen.`,rangeUnderflow:e=>`Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,unavailableDate:`Das ausgewählte Datum ist nicht verfügbar.`}})))()}var iE;function aE(){return(aE=t((()=>{iE={},iE={rangeOverflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,rangeReversed:`Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.`,rangeUnderflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,unavailableDate:`Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.`}})))()}var oE;function sE(){return(sE=t((()=>{oE={},oE={rangeUnderflow:e=>`Value must be ${e.minValue} or later.`,rangeOverflow:e=>`Value must be ${e.maxValue} or earlier.`,rangeReversed:`Start date must be before end date.`,unavailableDate:`Selected date unavailable.`}})))()}var cE;function lE(){return(lE=t((()=>{cE={},cE={rangeOverflow:e=>`El valor debe ser ${e.maxValue} o anterior.`,rangeReversed:`La fecha de inicio debe ser anterior a la fecha de finalización.`,rangeUnderflow:e=>`El valor debe ser ${e.minValue} o posterior.`,unavailableDate:`Fecha seleccionada no disponible.`}})))()}var uE;function dE(){return(dE=t((()=>{uE={},uE={rangeOverflow:e=>`V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,rangeReversed:`Alguskuupäev peab olema enne lõppkuupäeva.`,rangeUnderflow:e=>`V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,unavailableDate:`Valitud kuupäev pole saadaval.`}})))()}var fE;function pE(){return(pE=t((()=>{fE={},fE={rangeOverflow:e=>`Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,rangeReversed:`Aloituspäivän on oltava ennen lopetuspäivää.`,rangeUnderflow:e=>`Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,unavailableDate:`Valittu päivämäärä ei ole käytettävissä.`}})))()}var mE;function hE(){return(hE=t((()=>{mE={},mE={rangeOverflow:e=>`La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,rangeReversed:`La date de début doit être antérieure à la date de fin.`,rangeUnderflow:e=>`La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,unavailableDate:`La date sélectionnée n’est pas disponible.`}})))()}var gE;function _E(){return(_E=t((()=>{gE={},gE={rangeOverflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,rangeReversed:`תאריך ההתחלה חייב להיות לפני תאריך הסיום.`,rangeUnderflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,unavailableDate:`התאריך הנבחר אינו זמין.`}})))()}var vE;function yE(){return(yE=t((()=>{vE={},vE={rangeOverflow:e=>`Vrijednost mora biti ${e.maxValue} ili ranije.`,rangeReversed:`Datum početka mora biti prije datuma završetka.`,rangeUnderflow:e=>`Vrijednost mora biti ${e.minValue} ili kasnije.`,unavailableDate:`Odabrani datum nije dostupan.`}})))()}var bE;function xE(){return(xE=t((()=>{bE={},bE={rangeOverflow:e=>`Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,rangeReversed:`A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.`,rangeUnderflow:e=>`Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,unavailableDate:`A kiválasztott dátum nem érhető el.`}})))()}var SE;function CE(){return(CE=t((()=>{SE={},SE={rangeOverflow:e=>`Il valore deve essere ${e.maxValue} o precedente.`,rangeReversed:`La data di inizio deve essere antecedente alla data di fine.`,rangeUnderflow:e=>`Il valore deve essere ${e.minValue} o successivo.`,unavailableDate:`Data selezionata non disponibile.`}})))()}var wE;function TE(){return(TE=t((()=>{wE={},wE={rangeOverflow:e=>`\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,rangeReversed:`開始日は終了日より前にする必要があります。`,rangeUnderflow:e=>`\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,unavailableDate:`選択した日付は使用できません。`}})))()}var EE;function DE(){return(DE=t((()=>{EE={},EE={rangeOverflow:e=>`\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,rangeReversed:`시작일은 종료일 이전이어야 합니다.`,rangeUnderflow:e=>`\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,unavailableDate:`선택한 날짜를 사용할 수 없습니다.`}})))()}var OE;function kE(){return(kE=t((()=>{OE={},OE={rangeOverflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,rangeReversed:`Pradžios data turi būti ankstesnė nei pabaigos data.`,rangeUnderflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,unavailableDate:`Pasirinkta data nepasiekiama.`}})))()}var AE;function jE(){return(jE=t((()=>{AE={},AE={rangeOverflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,rangeReversed:`Sākuma datumam ir jābūt pirms beigu datuma.`,rangeUnderflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,unavailableDate:`Atlasītais datums nav pieejams.`}})))()}var ME;function NE(){return(NE=t((()=>{ME={},ME={rangeOverflow:e=>`Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen må være før sluttdatoen.`,rangeUnderflow:e=>`Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,unavailableDate:`Valgt dato utilgjengelig.`}})))()}var PE;function FE(){return(FE=t((()=>{PE={},PE={rangeOverflow:e=>`Waarde moet ${e.maxValue} of eerder zijn.`,rangeReversed:`De startdatum moet voor de einddatum liggen.`,rangeUnderflow:e=>`Waarde moet ${e.minValue} of later zijn.`,unavailableDate:`Geselecteerde datum niet beschikbaar.`}})))()}var IE;function LE(){return(LE=t((()=>{IE={},IE={rangeOverflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,rangeReversed:`Data rozpoczęcia musi być wcześniejsza niż data zakończenia.`,rangeUnderflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,unavailableDate:`Wybrana data jest niedostępna.`}})))()}var RE;function zE(){return(zE=t((()=>{RE={},RE={rangeOverflow:e=>`O valor deve ser ${e.maxValue} ou anterior.`,rangeReversed:`A data inicial deve ser anterior à data final.`,rangeUnderflow:e=>`O valor deve ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var BE;function VE(){return(VE=t((()=>{BE={},BE={rangeOverflow:e=>`O valor tem de ser ${e.maxValue} ou anterior.`,rangeReversed:`A data de início deve ser anterior à data de fim.`,rangeUnderflow:e=>`O valor tem de ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var HE;function UE(){return(UE=t((()=>{HE={},HE={rangeOverflow:e=>`Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,rangeReversed:`Data de început trebuie să fie anterioară datei de sfârșit.`,rangeUnderflow:e=>`Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,unavailableDate:`Data selectată nu este disponibilă.`}})))()}var WE;function GE(){return(GE=t((()=>{WE={},WE={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,rangeReversed:`Дата начала должна предшествовать дате окончания.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Выбранная дата недоступна.`}})))()}var KE;function qE(){return(qE=t((()=>{KE={},KE={rangeOverflow:e=>`Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,rangeReversed:`Dátum začiatku musí byť skorší ako dátum konca.`,rangeUnderflow:e=>`Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,unavailableDate:`Vybratý dátum je nedostupný.`}})))()}var JE;function YE(){return(YE=t((()=>{JE={},JE={rangeOverflow:e=>`Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,rangeReversed:`Začetni datum mora biti pred končnim datumom.`,rangeUnderflow:e=>`Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,unavailableDate:`Izbrani datum ni na voljo.`}})))()}var XE;function ZE(){return(ZE=t((()=>{XE={},XE={rangeOverflow:e=>`Vrednost mora da bude ${e.maxValue} ili starija.`,rangeReversed:`Datum početka mora biti pre datuma završetka.`,rangeUnderflow:e=>`Vrednost mora da bude ${e.minValue} ili novija.`,unavailableDate:`Izabrani datum nije dostupan.`}})))()}var QE;function $E(){return($E=t((()=>{QE={},QE={rangeOverflow:e=>`V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,rangeReversed:`Startdatumet måste vara före slutdatumet.`,rangeUnderflow:e=>`V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,unavailableDate:`Det valda datumet är inte tillgängligt.`}})))()}var eD;function tD(){return(tD=t((()=>{eD={},eD={rangeOverflow:e=>`De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,rangeReversed:`Başlangıç tarihi bitiş tarihinden önce olmalıdır.`,rangeUnderflow:e=>`De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,unavailableDate:`Seçilen tarih kullanılamıyor.`}})))()}var nD;function rD(){return(rD=t((()=>{nD={},nD={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,rangeReversed:`Дата початку має передувати даті завершення.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Вибрана дата недоступна.`}})))()}var iD;function aD(){return(aD=t((()=>{iD={},iD={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,rangeReversed:`开始日期必须早于结束日期。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,unavailableDate:`所选日期不可用。`}})))()}var oD;function sD(){return(sD=t((()=>{oD={},oD={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,rangeReversed:`開始日期必須在結束日期之前。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,unavailableDate:`所選日期無法使用。`}})))()}var cD;function lD(){return(lD=t((()=>{YT(),ZT(),$T(),tE(),rE(),aE(),sE(),lE(),dE(),pE(),hE(),_E(),yE(),xE(),CE(),TE(),DE(),kE(),jE(),NE(),FE(),LE(),zE(),VE(),UE(),GE(),qE(),YE(),ZE(),$E(),tD(),rD(),aD(),sD(),cD={},cD={"ar-AE":JT,"bg-BG":XT,"cs-CZ":QT,"da-DK":eE,"de-DE":nE,"el-GR":iE,"en-US":oE,"es-ES":cE,"et-EE":uE,"fi-FI":fE,"fr-FR":mE,"he-IL":gE,"hr-HR":vE,"hu-HU":bE,"it-IT":SE,"ja-JP":wE,"ko-KR":EE,"lt-LT":OE,"lv-LV":AE,"nb-NO":ME,"nl-NL":PE,"pl-PL":IE,"pt-BR":RE,"pt-PT":BE,"ro-RO":HE,"ru-RU":WE,"sk-SK":KE,"sl-SI":JE,"sr-SP":XE,"sv-SE":QE,"tr-TR":eD,"uk-UA":nD,"zh-CN":iD,"zh-TW":oD}})))()}function uD(e){return e&&e.__esModule?e.default:e}function dD(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e=`en-US`}return e}function fD(e,t,n,r,i){let a=e!=null&&n!=null&&e.compare(n)>0,o=e!=null&&t!=null&&e.compare(t)<0,s=e!=null&&r?.(e)||!1,c=a||o||s,l=[];if(c){let e=dD(),r=M.getGlobalDictionaryForPackage(`@react-stately/datepicker`)||yD,c=new me(e,r),u=new Oc(e,pD({},i)),d=u.resolvedOptions().timeZone;o&&t!=null&&l.push(c.format(`rangeUnderflow`,{minValue:u.format(t.toDate(d))})),a&&n!=null&&l.push(c.format(`rangeOverflow`,{maxValue:u.format(n.toDate(d))})),s&&l.push(c.format(`unavailableDate`))}return{isInvalid:c,validationErrors:l,validationDetails:{badInput:s,customError:!1,patternMismatch:!1,rangeOverflow:a,rangeUnderflow:o,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!c}}}function pD(e,t){e={...t.shouldForceLeadingZeros?xD:bD,...e};let n=t.granularity||`minute`,r=Object.keys(e),i=r.indexOf(t.maxGranularity??`year`);i<0&&(i=0);let a=r.indexOf(n);if(a<0&&(a=2),i>a)throw Error(`maxGranularity must be greater than granularity`);let o=r.slice(i,a+1).reduce((t,n)=>(t[n]=e[n],t),{});return t.hourCycle!=null&&(o.hour12=t.hourCycle===12),o.timeZone=t.timeZone||`UTC`,(n===`hour`||n===`minute`||n===`second`)&&t.timeZone&&!t.hideTimeZone&&(o.timeZoneName=`short`),t.showEra&&i===0&&(o.era=`short`),o}function mD(e){return e&&`hour`in e?e:new ns}function hD(e,t){if(e===null)return null;if(e)return so(e,t)}function gD(e,t,n,r){if(e)return hD(e,n);let i=so(Ea(r??ja()).set({hour:0,minute:0,second:0,millisecond:0}),n);return t===`year`||t===`month`||t===`day`?io(i):r?i:ao(i)}function _D(e,t){let n=e&&`timeZone`in e?e.timeZone:void 0,r=e&&`minute`in e?`minute`:`day`;if(e&&t&&!(t in e))throw Error(`Invalid granularity `+t+` for value `+e.toString());let[i,a]=(0,vD.useState)([r,n]);e&&(i[0]!==r||i[1]!==n)&&a([r,n]),t||=e?r:i[0];let o=e?n:i[1];return[t,o]}var vD,yD,bD,xD;function SD(){return(SD=t((()=>{lD(),Mc(),as(),mo(),Ja(),nt(),w(),vD=r(),yD=new M(uD(cD)),bD={year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`2-digit`,second:`2-digit`},xD={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}})))()}function CD(e){let t=lt(e),[n,r]=_t(e.value,e.defaultValue||null,e.onChange),[i]=(0,wD.useState)(n),a=n||e.placeholderValue||null,[o,s]=_D(a,e.granularity),c=n==null?null:n.toDate(s??`UTC`),l=o===`hour`||o===`minute`||o===`second`,u=e.shouldCloseOnSelect??!0,[d,f]=(0,wD.useState)(null),[p,m]=(0,wD.useState)(null);if(n&&(d=n,`hour`in n&&(p=n)),a&&!(o in a))throw Error(`Invalid granularity `+o+` for value `+a.toString());let h=n?.calendar.identifier===`gregory`&&n.era===`BC`,g=(0,wD.useMemo)(()=>({granularity:o,timeZone:s,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:h}),[o,e.hourCycle,e.shouldForceLeadingZeros,s,e.hideTimeZone,h]),{minValue:_,maxValue:v,isDateUnavailable:y}=e,b=(0,wD.useMemo)(()=>fD(n,_,v,y,g),[n,_,v,y,g]),x=Al({...e,value:n,builtinValidation:b}),S=x.displayValidation.isInvalid,C=e.validationState||(S?`invalid`:null),w=(e,t)=>{r(`timeZone`in t?t.set(io(e)):ao(e,t)),f(null),m(null),x.commitValidation()},T=n=>{let i=typeof u==`function`?u():u;l?p||i?w(n,p||mD(e.defaultValue||e.placeholderValue)):f(n):(r(n),x.commitValidation()),i&&t.setOpen(!1)},E=e=>{d&&e?w(d,e):m(e)};return{...x,value:n,defaultValue:e.defaultValue??i,setValue:r,dateValue:d,timeValue:p,setDateValue:T,setTimeValue:E,granularity:o,hasTime:l,...t,setOpen(r){!r&&!n&&d&&l&&w(d,p||mD(e.defaultValue||e.placeholderValue)),t.setOpen(r)},validationState:C,isInvalid:S,formatValue(e,t){if(!c)return``;let n=pD(t,g);return new Oc(e,n).format(c)},getDateFormatter(e,t){let n=pD({},{...g,...t});return new Oc(e,n)}}}var wD;function TD(){return(TD=t((()=>{SD(),Hl(),Ye(),oe(),mo(),Mc(),wD=r()})))()}function ED(e,t,n){return e===`era`||e===`dayPeriod`?t:e===`year`||e===`month`||e===`day`?DD.getStringForLocale(e,n):`––`}var DD;function OD(){return(OD=t((()=>{nt(),DD=new M({ach:{year:`mwaka`,month:`dwe`,day:`nino`},af:{year:`jjjj`,month:`mm`,day:`dd`},am:{year:`ዓዓዓዓ`,month:`ሚሜ`,day:`ቀቀ`},an:{year:`aaaa`,month:`mm`,day:`dd`},ar:{year:`سنة`,month:`شهر`,day:`يوم`},ast:{year:`aaaa`,month:`mm`,day:`dd`},az:{year:`iiii`,month:`aa`,day:`gg`},be:{year:`гггг`,month:`мм`,day:`дд`},bg:{year:`гггг`,month:`мм`,day:`дд`},bn:{year:`yyyy`,month:`মিমি`,day:`dd`},br:{year:`bbbb`,month:`mm`,day:`dd`},bs:{year:`gggg`,month:`mm`,day:`dd`},ca:{year:`aaaa`,month:`mm`,day:`dd`},cak:{year:`jjjj`,month:`ii`,day:`q'q'`},ckb:{year:`ساڵ`,month:`مانگ`,day:`ڕۆژ`},cs:{year:`rrrr`,month:`mm`,day:`dd`},cy:{year:`bbbb`,month:`mm`,day:`dd`},da:{year:`åååå`,month:`mm`,day:`dd`},de:{year:`jjjj`,month:`mm`,day:`tt`},dsb:{year:`llll`,month:`mm`,day:`źź`},el:{year:`εεεε`,month:`μμ`,day:`ηη`},en:{year:`yyyy`,month:`mm`,day:`dd`},eo:{year:`jjjj`,month:`mm`,day:`tt`},es:{year:`aaaa`,month:`mm`,day:`dd`},et:{year:`aaaa`,month:`kk`,day:`pp`},eu:{year:`uuuu`,month:`hh`,day:`ee`},fa:{year:`سال`,month:`ماه`,day:`روز`},ff:{year:`hhhh`,month:`ll`,day:`ññ`},fi:{year:`vvvv`,month:`kk`,day:`pp`},fr:{year:`aaaa`,month:`mm`,day:`jj`},fy:{year:`jjjj`,month:`mm`,day:`dd`},ga:{year:`bbbb`,month:`mm`,day:`ll`},gd:{year:`bbbb`,month:`mm`,day:`ll`},gl:{year:`aaaa`,month:`mm`,day:`dd`},he:{year:`שנה`,month:`חודש`,day:`יום`},hr:{year:`gggg`,month:`mm`,day:`dd`},hsb:{year:`llll`,month:`mm`,day:`dd`},hu:{year:`éééé`,month:`hh`,day:`nn`},ia:{year:`aaaa`,month:`mm`,day:`dd`},id:{year:`tttt`,month:`bb`,day:`hh`},is:{year:`áááá`,month:`mm`,day:`dd`},it:{year:`aaaa`,month:`mm`,day:`gg`},ja:{year:`年`,month:`月`,day:`日`},ka:{year:`წწწწ`,month:`თთ`,day:`რრ`},kk:{year:`жжжж`,month:`аа`,day:`кк`},kn:{year:`ವವವವ`,month:`ಮಿಮೀ`,day:`ದಿದಿ`},ko:{year:`연도`,month:`월`,day:`일`},lb:{year:`jjjj`,month:`mm`,day:`dd`},lo:{year:`ປປປປ`,month:`ດດ`,day:`ວວ`},lt:{year:`mmmm`,month:`mm`,day:`dd`},lv:{year:`gggg`,month:`mm`,day:`dd`},meh:{year:`aaaa`,month:`mm`,day:`dd`},ml:{year:`വർഷം`,month:`മാസം`,day:`തീയതി`},ms:{year:`tttt`,month:`mm`,day:`hh`},nb:{year:`åååå`,month:`mm`,day:`dd`},nl:{year:`jjjj`,month:`mm`,day:`dd`},nn:{year:`åååå`,month:`mm`,day:`dd`},no:{year:`åååå`,month:`mm`,day:`dd`},oc:{year:`aaaa`,month:`mm`,day:`jj`},pl:{year:`rrrr`,month:`mm`,day:`dd`},pt:{year:`aaaa`,month:`mm`,day:`dd`},rm:{year:`oooo`,month:`mm`,day:`dd`},ro:{year:`aaaa`,month:`ll`,day:`zz`},ru:{year:`гггг`,month:`мм`,day:`дд`},sc:{year:`aaaa`,month:`mm`,day:`dd`},scn:{year:`aaaa`,month:`mm`,day:`jj`},sk:{year:`rrrr`,month:`mm`,day:`dd`},sl:{year:`llll`,month:`mm`,day:`dd`},sr:{year:`гггг`,month:`мм`,day:`дд`},"sr-Latn":{year:`gggg`,month:`mm`,day:`dd`},sv:{year:`åååå`,month:`mm`,day:`dd`},szl:{year:`rrrr`,month:`mm`,day:`dd`},tg:{year:`сссс`,month:`мм`,day:`рр`},th:{year:`ปปปป`,month:`ดด`,day:`วว`},tr:{year:`yyyy`,month:`aa`,day:`gg`},uk:{year:`рррр`,month:`мм`,day:`дд`},"zh-CN":{year:`年`,month:`月`,day:`日`},"zh-TW":{year:`年`,month:`月`,day:`日`}},`en`)})))()}function kD(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function AD(e,t){let n=+(e>=12);switch(t){case`h11`:e>=12&&(e-=12);break;case`h12`:e===0?e=12:e>12&&(e-=12);break;case`h23`:n=null;break;case`h24`:e+=1,n=null}return[n,e]}function jD(e,t,n){switch(n){case`h11`:t===1&&(e+=12);break;case`h12`:e===12&&(e=0),t===1&&(e+=12);break;case`h24`:--e}return e}var MD;function ND(){return(ND=t((()=>{as(),MD=class e{constructor(e,t,n){if(this.era=n?.era??null,this.calendar=e,this.year=n?.year??null,this.month=n?.month??null,this.day=n?.day??null,this.hour=n?.hour??null,this.hourCycle=t,this.dayPeriod=null,this.minute=n?.minute??null,this.second=n?.second??null,this.millisecond=n?.millisecond??null,this.offset=`offset`in(n??{})?n.offset:null,this.hour!=null){let[e,n]=AD(this.hour,t);this.dayPeriod=e,this.hour=n}}copy(){let t=new e(this.calendar,this.hourCycle);return t.era=this.era,t.year=this.year,t.month=this.month,t.day=this.day,t.hour=this.hour,t.dayPeriod=this.dayPeriod,t.minute=this.minute,t.second=this.second,t.millisecond=this.millisecond,t.offset=this.offset,t}isComplete(e){return e.every(e=>this[e]!=null)}validate(e,t){return t.every(t=>{if((t===`hour`||t===`dayPeriod`)&&`hour`in e){let[t,n]=AD(e.hour,this.hourCycle);return this.dayPeriod===t&&this.hour===n}return this[t]===e[t]})}isCleared(e){return e.every(e=>this[e]===null)}set(e,t,n){let r=this.copy();return r[e]=t,e===`hour`&&r.dayPeriod==null&&`hour`in n&&(r.dayPeriod=AD(n.hour,this.hourCycle)[0]),e===`year`&&r.era==null&&(r.era=n.era),e!==`second`&&e!==`literal`&&e!==`timeZoneName`&&(r.offset=null),r}clear(e){let t=this.copy();return t[e]=null,e===`year`&&(t.era=null),t.offset=null,t}cycle(e,t,n,r){let i=this.copy();if(i[e]==null&&e!==`dayPeriod`&&e!==`era`){if(e===`hour`&&`hour`in n){let[e,t]=AD(n.hour,this.hourCycle);i.dayPeriod=e,i.hour=t}else i[e]=n[e];return e===`year`&&i.era==null&&(i.era=n.era),i}switch(e){case`era`:{let e=this.calendar.getEras(),n=e.indexOf(i.era);n=kD(n,t,0,e.length-1),i.era=e[n];break}case`year`:{let r=new ts(this.calendar,this.era??n.era,this.year??n.year,this.month??1,this.day??1);r=r.cycle(e,t,{round:e===`year`}),i.era=r.era,i.year=r.year;break}case`month`:i.month=kD(i.month??1,t,1,this.calendar.getMaximumMonthsInYear());break;case`day`:i.day=kD(i.day??1,t,1,this.calendar.getMaximumDaysInMonth());break;case`hour`:{let e=r.some(e=>[`year`,`month`,`day`].includes(e));if(`timeZone`in n&&(!e||i.year!=null&&i.month!=null&&i.day!=null)){let e=this.toValue(n);e=e.cycle(`hour`,t,{hourCycle:this.hourCycle===`h12`?12:24,round:!1});let[r,a]=AD(e.hour,this.hourCycle);i.hour=a,i.dayPeriod=r,i.offset=e.offset}else{let e=i.hour??0,r=this.getSegmentLimits(`hour`);i.hour=kD(e,t,r.minValue,r.maxValue),i.dayPeriod==null&&`hour`in n&&(i.dayPeriod=AD(n.hour,this.hourCycle)[0])}break}case`dayPeriod`:i.dayPeriod=kD(i.dayPeriod??0,t,0,1);break;case`minute`:i.minute=kD(i.minute??0,t,0,59,!0);break;case`second`:i.second=kD(i.second??0,t,0,59,!0)}return i}toValue(e){if(`hour`in e){let t=this.hour;t==null?(this.hourCycle===`h12`||this.hourCycle===`h11`)&&(t=this.dayPeriod===1?12:0):t=jD(t,this.dayPeriod??0,this.hourCycle);let n=e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day,hour:t??e.hour,minute:this.minute??e.minute,second:this.second??e.second,millisecond:this.millisecond??e.millisecond});return`offset`in n&&this.offset!=null&&n.offset!==this.offset&&(n=n.add({milliseconds:n.offset-this.offset})),n}return e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day})}getSegmentLimits(e){switch(e){case`era`:{let e=this.calendar.getEras();return{value:this.era==null?e.length-1:e.indexOf(this.era),minValue:0,maxValue:e.length-1}}case`year`:return{value:this.year,minValue:1,maxValue:9999};case`month`:return{value:this.month,minValue:1,maxValue:this.calendar.getMaximumMonthsInYear()};case`day`:return{value:this.day,minValue:1,maxValue:this.calendar.getMaximumDaysInMonth()};case`dayPeriod`:return{value:this.dayPeriod,minValue:0,maxValue:1};case`hour`:{let e=0,t=23;return this.hourCycle===`h12`?(e=1,t=12):this.hourCycle===`h11`&&(e=0,t=11),{value:this.hour,minValue:e,maxValue:t}}case`minute`:return{value:this.minute,minValue:0,maxValue:59};case`second`:return{value:this.second,minValue:0,maxValue:59}}}}})))()}function PD(e){let{locale:t,createCalendar:n,hideTimeZone:r,isDisabled:i=!1,isReadOnly:a=!1,isRequired:o=!1,minValue:s,maxValue:c,isDateUnavailable:l}=e,u=e.value||e.defaultValue||e.placeholderValue||null,[d,f]=_D(u,e.granularity),p=f||`UTC`;if(u&&!(d in u))throw Error(`Invalid granularity `+d+` for value `+u.toString());let[m,h]=(0,ID.useMemo)(()=>{let r=new Oc(t,{dateStyle:`short`,timeStyle:`short`,hour12:e.hourCycle==null?void 0:e.hourCycle===12}).resolvedOptions();return[n(r.calendar),r.hourCycle]},[t,e.hourCycle,n]),[g,_]=_t(e.value,e.defaultValue??null,e.onChange),[v]=(0,ID.useState)(g),y=(0,ID.useMemo)(()=>hD(g,m)??null,[g,m]),[b,x]=(0,ID.useState)(()=>new MD(m,h,y)),S=m.identifier===`gregory`&&b.era===`BC`,C=(0,ID.useMemo)(()=>({granularity:d,maxGranularity:e.maxGranularity??`year`,timeZone:f,hideTimeZone:r,hourCycle:e.hourCycle,showEra:S,shouldForceLeadingZeros:e.shouldForceLeadingZeros}),[e.maxGranularity,d,e.hourCycle,e.shouldForceLeadingZeros,f,r,S]),w=(0,ID.useMemo)(()=>pD({},C),[C]),T=(0,ID.useMemo)(()=>new Oc(t,w),[t,w]),E=(0,ID.useMemo)(()=>T.resolvedOptions(),[T]),D=(0,ID.useMemo)(()=>gD(e.placeholderValue,d,m,f),[e.placeholderValue,d,m,f]),O=(0,ID.useMemo)(()=>{let t=h===`h11`||h===`h12`,n=[`era`,`year`,`month`,`day`,`hour`,...t?[`dayPeriod`]:[],`minute`,`second`],r=n.indexOf(e.maxGranularity||`era`),i=n.indexOf(d===`hour`&&t?`dayPeriod`:d);return n.slice(r,i+1)},[e.maxGranularity,d,h]),[k,A]=(0,ID.useState)(y),[j,M]=(0,ID.useState)(m),[N,P]=(0,ID.useState)(h);(y!==k||h!==N||!Ca(m,j))&&(b=new MD(m,h,y),A(y),M(m),P(h),x(b));let F=t=>{if(!(e.isDisabled||e.isReadOnly)){if(t==null||t instanceof MD&&t.isCleared(O))x(new MD(m,h,y)),_(null);else if(!(t instanceof MD))t=so(t,u?.calendar||new ga),x(new MD(m,h,y)),_(t);else{if(t.isComplete(O)){let e=t.toValue(y??D);if(t.validate(e,O)){let t=so(e,u?.calendar||new ga);if(!g||t.compare(g)!==0){x(new MD(m,h,y)),_(t);return}}}x(t)}}},I=(0,ID.useMemo)(()=>b.toValue(y??D).toDate(p),[b,p,y,D]),L=(0,ID.useMemo)(()=>FD(I,b,T,E,m,t,d),[I,T,E,b,m,t,d]),R=(e,t)=>{F(b.cycle(e,t,D,O))},z=(0,ID.useMemo)(()=>fD(g,s,c,l,C),[g,s,c,l,C]),ee=Al({...e,value:g,builtinValidation:z}),te=ee.displayValidation.isInvalid,ne=e.validationState||(te?`invalid`:null);return{...ee,value:y,defaultValue:e.defaultValue??v,dateValue:I,calendar:m,setValue:F,segments:L,dateFormatter:T,validationState:ne,isInvalid:te,granularity:d,maxGranularity:e.maxGranularity??`year`,isDisabled:i,isReadOnly:a,isRequired:o,increment(e){R(e,1)},decrement(e){R(e,-1)},incrementPage(e){R(e,RD[e]||1)},decrementPage(e){R(e,-(RD[e]||1))},incrementToMax(e){let t=e===`hour`&&h===`h12`?11:b.getSegmentLimits(e).maxValue;F(b.set(e,t,D))},decrementToMin(e){let t=e===`hour`&&h===`h12`?12:b.getSegmentLimits(e).minValue;F(b.set(e,t,D))},setSegment(e,t){F(b.set(e,t,D))},confirmPlaceholder(){if(!(e.isDisabled||e.isReadOnly)&&b.isComplete(O)){let e=so(b.toValue(y??D),u?.calendar||new ga);(!g||e.compare(g)!==0)&&_(e),x(new MD(m,h,y))}},clearSegment(e){let t=b;e!==`timeZoneName`&&e!==`literal`&&(t=b.clear(e)),F(t)},formatValue(e){if(!y)return``;let n=pD(e,C);return new Oc(t,n).format(I)},getDateFormatter(e,t){let n=pD({},{...C,...t});return new Oc(e,n)}}}function FD(e,t,n,r,i,a,o){let s=[`hour`,`minute`,`second`],c=n.formatToParts(e),l=new cu(a,{useGrouping:!1}),u=new cu(a,{useGrouping:!1,minimumIntegerDigits:2});for(let e of c)if(e.type===`year`||e.type===`month`||e.type===`day`||e.type===`hour`){let n=t[e.type]??0;e.value=r[e.type]===`2-digit`?u.format(n):l.format(n)}let d=[];for(let e of c){let n=zD[e.type]||e.type,r=LD[n];n===`era`&&i.getEras().length===1&&(r=!1);let c=LD[n]&&t[e.type]==null,l=LD[n]?ED(n,e.value,a):null,u={type:n,text:c?l:e.value,...t.getSegmentLimits(n),isPlaceholder:c,placeholder:l,isEditable:r};n===`hour`?(d.push({type:`literal`,text:`⁦`,isPlaceholder:!1,placeholder:``,isEditable:!1}),d.push(u),n===o&&d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):s.includes(n)&&n===o?(d.push(u),d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):d.push(u)}return d}var ID,LD,RD,zD;function BD(){return(BD=t((()=>{SD(),Hl(),OD(),ND(),oe(),Mc(),Ja(),mo(),_a(),lu(),ID=r(),LD={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},RD={year:5,month:2,day:7,hour:2,minute:15,second:15},zD={dayperiod:`dayPeriod`,relatedYear:`year`,yearName:`literal`,unknown:`literal`}})))()}function VD(e){let{placeholderValue:t=new ns,minValue:n,maxValue:r,defaultValue:i,granularity:a,validate:o}=e,[s,c]=_t(e.value,i??null,e.onChange),l=s||t,u=l&&`day`in l?l:void 0,d=i&&`timeZone`in i?i.timeZone:void 0,f=(0,UD.useMemo)(()=>{let e=l&&`timeZone`in l?l.timeZone:void 0;return(e||d)&&t?co(HD(t),e||d):HD(t)},[t,l,d]),p=(0,UD.useMemo)(()=>HD(n,u),[n,u]),m=(0,UD.useMemo)(()=>HD(r,u),[r,u]),h=(0,UD.useMemo)(()=>s&&`day`in s?oo(s):s,[s]),g=(0,UD.useMemo)(()=>s==null?null:HD(s),[s]),_=(0,UD.useMemo)(()=>i==null?null:HD(i),[i]),v=e=>{c(u||d?e:e&&oo(e))};return{...PD({...e,value:g,defaultValue:_,minValue:p,maxValue:m,onChange:v,granularity:a||`minute`,maxGranularity:`hour`,placeholderValue:f??void 0,createCalendar:()=>new ga,validate:(0,UD.useCallback)(()=>o?.(s),[o,s])}),timeValue:h}}function HD(e,t=Da(ja())){return e?`day`in e?e:ao(t,e):null}var UD;function WD(){return(WD=t((()=>{BD(),oe(),as(),mo(),_a(),Ja(),UD=r()})))()}function GD(e,t,n){return t!=null&&e.compare(t)<0||n!=null&&e.compare(n)>0}function KD(e,t,n,r,i){let a={};for(let e in t)a[e]=Math.floor(t[e]/2),a[e]>0&&t[e]%2==0&&a[e]--;return YD(e,qD(e,t,n).subtract(a),t,n,r,i)}function qD(e,t,n,r,i){let a=e;return t.years?a=Fa(e):t.months?a=Na(e):(t.weeks||t.days&&t.days>7)&&(a=Ia(e,n)),YD(e,a,t,n,r,i)}function JD(e,t,n,r,i){let a={...t};return a.days?a.days--:a.weeks?a.weeks--:a.months?a.months--:a.years&&a.years--,YD(e,qD(e,t,n).subtract(a),t,n,r,i)}function YD(e,t,n,r,i,a){if(i&&e.compare(i)>=0){let e=Ha(t,qD(io(i),n,r));e&&(t=e)}if(a&&e.compare(a)<=0){let e=Va(t,JD(io(a),n,r));e&&(t=e)}return t}function XD(e,t,n){if(t){let n=Ha(e,io(t));n&&(e=n)}if(n){let t=Va(e,io(n));t&&(e=t)}return e}function ZD(e,t,n){if(!n)return e;for(;e.compare(t)>=0&&n(e);)e=e.subtract({days:1});return e.compare(t)>=0?e:null}function QD(e,t){return e===t||e.days===t.days&&e.weeks===t.weeks&&e.months===t.months&&e.years===t.years}function $D(){return($D=t((()=>{Ja(),mo()})))()}function eO(e){let t=(0,nO.useMemo)(()=>new Oc(e.locale),[e.locale]),n=(0,nO.useMemo)(()=>t.resolvedOptions(),[t]),{locale:r,createCalendar:i,visibleDuration:a={months:1},minValue:o,maxValue:s,selectionAlignment:c,isDateUnavailable:l,pageBehavior:u=`visible`,selectionMode:d=`single`,firstDayOfWeek:f,weeksInMonth:p}=e,m=(0,nO.useMemo)(()=>i(n.calendar),[i,n.calendar]),[h,g]=_t(e.value,e.defaultValue??null,e.onChange),_=(0,nO.useMemo)(()=>Array.isArray(h)?h.map(e=>so(io(e),m)):h?so(io(h),m):null,[h,m]),v=(0,nO.useMemo)(()=>{let e=Array.isArray(h)?h[0]:h;return e&&`timeZone`in e?e.timeZone:n.timeZone},[h,n.timeZone]),y=(0,nO.useMemo)(()=>e.focusedValue?XD(so(io(e.focusedValue),m),o,s):void 0,[e.focusedValue,m,o,s]),b=(0,nO.useMemo)(()=>e.defaultFocusedValue?XD(so(io(e.defaultFocusedValue),m),o,s):XD(_?Array.isArray(_)?_[0]:_:so(Da(v),m),o,s),[e.defaultFocusedValue,_,v,m,o,s]),[x,S]=_t(y,b,e.onFocusChange),C=()=>{switch(c){case`start`:return qD(x,a,r,o,s);case`end`:return JD(x,a,r,o,s);default:return KD(x,a,r,o,s)}},[w,T]=(0,nO.useState)(C),[E,D]=(0,nO.useState)(e.autoFocus||!1),[O,k]=(0,nO.useState)(a);QD(a,O)||(k(a),T(C()));let A=(0,nO.useMemo)(()=>{let e={...a};return e.days?e.days--:e.days=-1,w.add(e)},[w,a]),[j,M]=(0,nO.useState)(m);if(!Ca(m,j)){let e=so(x,m);T(KD(e,a,r,o,s)),S(e),M(m)}GD(x,o,s)?S(XD(x,o,s)):x.compare(w)<0?T(JD(x,a,r,o,s)):x.compare(A)>0&&T(qD(x,a,r,o,s));function N(e){e=XD(e,o,s),S(e)}function P(e){let t=ZD(XD(e,o,s),w,l);if(!t)return null;let n=Array.isArray(h)?h[0]:h,r=so(t,n?.calendar||new ga);return n&&`hour`in n?n.set(r):r}function F(t){if(!e.isDisabled&&!e.isReadOnly){if(t===null){g(d===`multiple`?[]:null);return}if(Array.isArray(t))g(t.map(P).filter(Boolean));else{let e=P(t);e&&g(e)}}}let I=(0,nO.useMemo)(()=>_?Array.isArray(_)?_.some(e=>l?.(e)||GD(e,o,s)):l?.(_)||GD(_,o,s):!1,[_,l,o,s]),L=e.isInvalid||e.validationState===`invalid`||I,R=L?`invalid`:null,z=(0,nO.useMemo)(()=>u===`visible`?a:tO(a),[u,a]);return{isDisabled:e.isDisabled??!1,isReadOnly:e.isReadOnly??!1,value:_,setValue:F,selectionMode:d,visibleDuration:a,visibleRange:{start:w,end:A},minValue:o,maxValue:s,focusedDate:x,timeZone:v,validationState:R,isValueInvalid:L,setFocusedDate(e){N(e)},focusNextDay(){N(x.add({days:1}))},focusPreviousDay(){N(x.subtract({days:1}))},focusNextRow(){a.days?this.focusNextPage():(a.weeks||a.months||a.years)&&N(x.add({weeks:1}))},focusPreviousRow(){a.days?this.focusPreviousPage():(a.weeks||a.months||a.years)&&N(x.subtract({weeks:1}))},focusNextPage(){let e=w.add(z);S(XD(x.add(z),o,s)),T(qD(YD(x,e,z,r,o,s),z,r))},focusPreviousPage(){let e=w.subtract(z);S(XD(x.subtract(z),o,s)),T(qD(YD(x,e,z,r,o,s),z,r))},focusSectionStart(){a.days?N(w):a.weeks?N(Ia(x,r)):(a.months||a.years)&&N(Na(x))},focusSectionEnd(){a.days?N(A):a.weeks?N(La(x,r)):(a.months||a.years)&&N(Pa(x))},focusNextSection(e){if(!e&&!a.days){N(x.add(tO(a)));return}a.days?this.focusNextPage():a.weeks?N(x.add({months:1})):(a.months||a.years)&&N(x.add({years:1}))},focusPreviousSection(e){if(!e&&!a.days){N(x.subtract(tO(a)));return}a.days?this.focusPreviousPage():a.weeks?N(x.subtract({months:1})):(a.months||a.years)&&N(x.subtract({years:1}))},selectFocusedDate(){l&&l(x)||this.selectDate(x)},selectDate(t){if(!(e.isDisabled||e.isReadOnly)){if(d===`multiple`&&t!=null){let e=P(t);if(!e)return;let n=[];Array.isArray(h)?n=h:h!=null&&(n=[h]);let r=n.findIndex(t=>ba(t,e)),i=r>=0?n.slice(0,r).concat(n.slice(r+1)):[...n,e];g(i)}else F(t)}},isFocused:E,setFocused:D,isInvalid(e){return GD(e,o,s)},isSelected(e){return!_||this.isCellDisabled(e)||this.isCellUnavailable(e)?!1:Array.isArray(_)?_.some(t=>ba(t,e)):ba(e,_)},isCellFocused(e){return E&&x&&ba(e,x)},isCellDisabled(t){return e.isDisabled||t.compare(w)<0||t.compare(A)>0||this.isInvalid(t)},isCellUnavailable(t){return e.isDateUnavailable?e.isDateUnavailable(t):!1},isPreviousVisibleRangeInvalid(){let e=w.subtract({days:1});return ba(e,w)||this.isInvalid(e)},isNextVisibleRangeInvalid(){let e=A.add({days:1});return ba(e,A)||this.isInvalid(e)},getDatesInWeek(e,t=w){let n=t.add({weeks:e}),i=[],o=a.days&&a.days<7?a.days:7;if(o===7){n=Ia(n,r,f);let e=Ta(n,r,f);for(let t=0;t<e;t++)i.push(null)}for(;i.length<o;){i.push(n);let e=n.add({days:1});if(ba(n,e))break;n=e}for(;i.length<o;)i.push(null);return i},getWeeksInMonth(e=w){let t=p||Ba(e,r,f);return(a.weeks||a.days)&&(t=a.weeks??0,a.days&&(t+=Math.ceil(a.days/7))),t}}}function tO(e){let t={...e};for(let n in e)t[n]=1;return t}var nO;function rO(){return(rO=t((()=>{$D(),oe(),Mc(),mo(),Ja(),_a(),nO=r()})))()}function iO({direction:e,className:t}){return(0,aO.jsx)(`svg`,{"aria-hidden":`true`,className:c(oO,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,aO.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var aO,oO;function sO(){return(sO=t((()=>{l(),aO=W(),oO=u`
  width: 1em;
  height: 1em;
`})))()}var cO,lO,uO,dO,fO,pO,mO,hO,gO,_O,vO,yO,bO,xO,SO,CO,wO,TO,EO,DO,OO,kO,AO,jO,MO,NO,PO,FO,IO,LO,RO,zO,BO,VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO,QO,$O,ek,tk,nk;function rk(){return(rk=t((()=>{l(),cO=u`
  outline: none;
`,lO=u`
  --picker-accent-bg: var(--color-green-600);
  --picker-accent-fg: var(--color-primary-100);
  --picker-accent-soft: var(--color-green-75);
  --picker-accent-hover: var(--color-green-50);
  --picker-focus-ring: rgba(31, 105, 100, 0.4);
  --picker-focus-ring-strong: rgba(31, 105, 100, 0.55);
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    sans-serif;
`,uO=u`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  gap: var(--space-3);
  padding: var(--space-3);
`,dO=u`
  grid-template-columns: minmax(0, 1fr) minmax(200px, 240px);
  align-items: stretch;
  column-gap: var(--space-3);

  /* On narrow (mobile) viewports the calendar + time panel can't fit side by side, so stack them. */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: var(--space-3);
  }
`,fO=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,pO=u`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  align-items: center;
  column-gap: var(--space-1);
  width: 100%;
`,mO=u`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-self: center;
`,hO=u`
  padding: 6px 8px;
  margin: 0;
  border: 0;
  border-radius: var(--control-radius);
  background: transparent;
  color: var(--field-fg);
  cursor: pointer;
  font: inherit;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.2;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-hover);
  }
`,gO=u`
  color: var(--field-description);
  font-weight: 500;
  font-size: 0.875rem;
  user-select: none;
`,_O=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--field-chrome);
  cursor: pointer;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;

  &:focus-visible {
    outline: none;
    background: var(--picker-accent-soft);
    color: var(--color-green-800);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-soft);
    color: var(--color-green-800);
  }
`,vO=u`
  width: 12px;
  height: 12px;
`,yO=u`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,bO=u`
  padding: 0 0 var(--space-1);
  color: var(--field-description);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`,xO=u`
  padding: var(--space-1);
  text-align: center;
`,SO=u`
  height: 42px;
`,CO=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  /* Let the seven fixed-width day cells shrink to fit a very narrow (mobile) calendar column. */
  max-width: 100%;
  padding: 0;
  border: 0;
  border-radius: var(--control-radius);
  background: transparent;
  color: var(--field-fg);
  cursor: pointer;
  font: inherit;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-hover);
  }
`,wO=u`
  box-shadow: inset 0 0 0 1px var(--color-green-500);
`,TO=u`
  box-shadow: 0 0 0 2px var(--picker-focus-ring-strong);
`,EO=u`
  box-shadow:
    inset 0 0 0 1px var(--color-green-500),
    0 0 0 2px var(--picker-focus-ring-strong);
`,DO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--picker-accent-bg);
    color: var(--picker-accent-fg);
  }
`,OO=u`
  box-shadow:
    0 0 0 2px var(--field-bg),
    0 0 0 4px var(--picker-focus-ring-strong);
`,kO=u`
  color: var(--field-placeholder);
`,AO=u`
  color: var(--field-description);
  text-decoration: line-through;
`,jO=u`
  color: var(--field-disabled-fg);
`,MO=u`
  box-shadow: inset 0 0 0 1px var(--field-error-border);
`,NO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-2);
  margin-top: var(--space-1);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`,PO=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 4px 10px;
  border: 1px solid var(--color-green-200);
  border-radius: 999px;
  background: var(--picker-accent-hover);
  color: var(--color-green-800);
  cursor: pointer;
  font: inherit;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.2;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    border-color: var(--field-disabled-border);
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-soft);
    border-color: var(--color-green-300);
    color: var(--color-green-900);
  }
`,FO=u`
  display: grid;
  gap: var(--space-3);
  min-width: 0;
  width: 100%;
`,IO=u`
  color: var(--color-gray-400);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  letter-spacing: 0.02em;
`,LO=u`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`,RO=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,zO=u`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-1);
`,BO=u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`,VO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.25;
`,HO=u`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
`,UO=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--control-radius);
  background: var(--picker-accent-hover);
  color: var(--field-fg);
  cursor: pointer;
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.2;
  text-align: center;
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    box-shadow 0.18s ease;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 1px var(--color-green-300),
      0 0 0 calc(var(--focus-ring-width) + 1px) var(--picker-focus-ring);
  }

  &:disabled {
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-soft);
    border-color: var(--color-green-300);
    color: var(--color-green-900);
  }
`,WO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  border-color: var(--color-green-700);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--color-green-700);
    border-color: var(--color-green-800);
    color: var(--picker-accent-fg);
  }
`,GO=u`
  display: grid;
  min-width: 0;
  gap: var(--space-1);
  align-self: stretch;
  align-content: start;
  padding: 0 0 0 var(--space-3);
  border-left: 1px solid rgba(31, 105, 100, 0.12);
  background: transparent;

  /* When stacked below the calendar on mobile, the divider becomes a top border. */
  @media (max-width: 480px) {
    padding: var(--space-3) 0 0 0;
    border-left: 0;
    border-top: 1px solid rgba(31, 105, 100, 0.12);
  }
`,KO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.02em;
`,qO=u`
  width: 100%;
  box-sizing: border-box;
  min-height: 32px;
  padding: 5px 8px;
  border: 0;
  border-radius: var(--control-radius);
  background: var(--picker-accent-hover);
  color: var(--field-fg);
  font: inherit;
  font-size: 0.875rem;
  font-variant-numeric: tabular-nums;
  line-height: 1.25;

  &::placeholder {
    color: var(--field-placeholder);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
  }
`,JO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: var(--space-1);
`,YO=u`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
`,XO=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: calc(var(--control-radius) - 1px);
  background: transparent;
  color: var(--color-green-800);
  cursor: pointer;
  font: inherit;
  font-size: 1rem;
  line-height: 1;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-hover);
  }
`,ZO=u`
  min-width: 2.25rem;
  padding: 0 4px;
  text-align: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--field-fg);
`,QO=u`
  display: inline-flex;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
  gap: 2px;
`,$O=u`
  min-width: 2.5rem;
  padding: 6px 8px;
  border: 0;
  border-radius: calc(var(--control-radius) - 1px);
  background: transparent;
  color: var(--field-description);
  cursor: pointer;
  font: inherit;
  font-size: 0.8125rem;
  font-weight: 500;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,ek=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;
`,tk=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-1);
  margin-top: 2px;
`,nk=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 26px;
  padding: 4px 8px;
  border: 1px solid var(--color-green-200);
  border-radius: 999px;
  background: var(--picker-accent-hover);
  color: var(--color-green-800);
  cursor: pointer;
  font: inherit;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.2;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--picker-focus-ring);
  }

  &:disabled {
    border-color: var(--field-disabled-border);
    background: var(--field-disabled-bg);
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--picker-accent-soft);
    border-color: var(--color-green-300);
    color: var(--color-green-900);
  }
`})))()}function ik({direction:e,isDisabled:t,label:n,onPress:r}){let i=ak.useRef(null),{buttonProps:a}=Lr({"aria-label":n,isDisabled:t,onPress:r},i);return(0,ok.jsx)(`button`,{...a,ref:i,className:_O,type:`button`,children:(0,ok.jsx)(iO,{className:vO,direction:e})})}var ak,ok;function sk(){return(sk=t((()=>{ak=e(r()),Rr(),sO(),rk(),ok=W()})))()}function ck({isDisabled:e,label:t,options:n,pager:r}){let i=(0,lk.useId)(),a=n.findIndex(e=>!e.isDisabled),o=n.findIndex(e=>e.isSelected&&!e.isDisabled),s=o>=0?o:Math.max(0,a);return(0,uk.jsxs)(`div`,{className:RO,children:[t||r?(0,uk.jsxs)(`div`,{className:zO,children:[t?(0,uk.jsx)(`span`,{id:i,className:VO,children:t}):null,r]}):null,(0,uk.jsx)(`div`,{"aria-labelledby":t?i:void 0,className:HO,role:`group`,children:n.map((t,n)=>(0,uk.jsx)(`button`,{"aria-pressed":t.isSelected,className:c(UO,t.isSelected?WO:void 0),"data-selected":t.isSelected?`true`:`false`,disabled:e||t.isDisabled,tabIndex:n===s?0:-1,type:`button`,onClick:t.onSelect,children:t.label},t.id))})]})}var lk,uk;function dk(){return(dk=t((()=>{l(),lk=e(r()),rk(),uk=W()})))()}var fk,pk,mk,hk,gk,_k,vk,yk,bk,xk,Sk,Ck;function wk(){return(wk=t((()=>{fk=`left`,pk=`right`,mk=`numeric`,hk=`2-digit`,gk=`long`,_k=`year-`,vk=`month-`,yk=`period-am`,bk=`period-pm`,xk=`calendar`,Sk=`month`,Ck=`year`})))()}function Tk(){let{t:e}=i(`shared-module`);return{previousMonth:e(`datePicker.previousMonth`),nextMonth:e(`datePicker.nextMonth`),previousYears:e(`datePicker.previousYears`),nextYears:e(`datePicker.nextYears`),previousYear:e(`datePicker.previousYear`),nextYear:e(`datePicker.nextYear`),clear:e(`datePicker.clear`),today:e(`datePicker.today`),now:e(`datePicker.now`),tomorrow:e(`datePicker.tomorrow`),nextWeek:e(`datePicker.nextWeek`),time:e(`datePicker.time`),plus30Minutes:e(`datePicker.plus30Minutes`),endOfDay:e(`datePicker.endOfDay`),chooseMonth:e(`datePicker.chooseMonth`),chooseYear:e(`datePicker.chooseYear`),chooseMonthAndYear:t=>e(`datePicker.chooseMonthAndYear`,{value:t}),decreaseHour:e(`datePicker.decreaseHour`),increaseHour:e(`datePicker.increaseHour`),decreaseMinute:e(`datePicker.decreaseMinute`),increaseMinute:e(`datePicker.increaseMinute`),dayPeriodGroup:e(`datePicker.dayPeriod`)}}function Ek(){return(Ek=t((()=>{a()})))()}function Dk(e,t){let n=new Intl.DateTimeFormat(e,{hour:mk,...t?{hour12:t===12}:void 0}).resolvedOptions().hourCycle;return n===`h11`||n===`h12`||n===`h23`||n===`h24`?n:t===12?`h12`:`h23`}function Ok(e){let t=new Intl.DateTimeFormat(e,{hour:mk,hour12:!0,timeZone:`UTC`}),n=(e,n)=>t.formatToParts(new Date(Date.UTC(2024,0,1,e))).find(e=>e.type===`dayPeriod`)?.value??n;return{am:n(9,`AM`),pm:n(21,`PM`)}}function kk(e){return e?e.hour>=12?`pm`:`am`:null}function Ak(e,t){switch(t){case`h11`:return e%12;case`h12`:return e%12==0?12:e%12;case`h24`:return e===0?24:e;default:return e}}function jk(e){return e?new ns(e.hour,e.minute,e.second,`millisecond`in e?e.millisecond:0):new ns(0,0)}function Mk(e,t){let n=e%12;return t===`pm`?n+12:n}function Nk(e){return String(e).padStart(2,`0`)}function Pk(e){return Math.floor((e-1)/12)*12+1}function Fk(e,t){let n=new Intl.NumberFormat(t,{useGrouping:!1}),r=e;for(let e=0;e<=9;e+=1){let t=n.format(e);t!==String(e)&&(r=r.split(t).join(String(e)))}return r}function Ik(e,t){return Fk(e.normalize(`NFKC`),t).replaceAll(/[\u200E\u200F\u061C]/g,``).trim()}function Lk(e,t){let n=Ik(e,t).toLocaleLowerCase(t);return Array.from(n).filter(e=>{let n=e.toLocaleUpperCase(t),r=e.toLocaleLowerCase(t);return/\d/.test(e)||n!==r}).join(``)}function Rk(e,t,n){let r=Lk(e,t);return n.some(e=>{let n=Lk(e,t);return n.length>0&&r.includes(n)})}function zk(e,{hour12:t,locale:n,dayPeriodLabels:r}){let i=e.trim();if(!i)return null;let a=Ik(i,n),o=a.startsWith(`T`)||a.startsWith(`t`)?a.slice(1):a,s;try{s=zo(o)}catch{s=null}if(s)return s;let c=a.match(/\d+/g);if(!c||c.length<2||c.length>3)return null;let[l,u,d]=c;if(!l||!u||u.length!==2||d&&d.length!==2)return null;let f=Number(l),p=Number(u),m=d?Number(d):0,h=Rk(i,n,[r.pm,`PM`]),g=Rk(i,n,[r.am,`AM`]);return t&&(h&&f<12&&(f+=12),g&&f===12&&(f=0)),f<0||f>23||p<0||p>59||m<0||m>59?null:new ns(f,p,m)}function Bk(e,t){let n=e.hour*60+e.minute+t;return n=(n%1440+1440)%1440,new ns(Math.floor(n/60),n%60,e.second,e.millisecond)}function Vk(){return(Vk=t((()=>{$o(),as(),wk()})))()}function Hk({initialView:e=qk,selectedYear:t,selectedMonth:n,minYear:r,minMonth:i,maxYear:a,maxMonth:o,isDisabled:s=!1,isReadOnly:l=!1,locale:u,onSelect:d,onCancel:f,className:p}){let{locale:m}=A(),h=u??m,g=Tk(),_=new Date().getFullYear(),[v,y]=(0,Uk.useState)(e),[b,x]=(0,Uk.useState)(t??_),[S,C]=(0,Uk.useState)(Pk(t??_));(0,Uk.useEffect)(()=>{y(e)},[e]),(0,Uk.useEffect)(()=>{let e=t??_;x(e),C(Pk(e))},[_,t]);let w=(0,Uk.useMemo)(()=>new Intl.DateTimeFormat(h,{month:`long`,timeZone:`UTC`}),[h]),T=r??-1/0,E=a??1/0,D=!(s||l),O=(0,Uk.useCallback)((e,t)=>e<T||e>E||r!==void 0&&i!==void 0&&e===r&&t<i||a!==void 0&&o!==void 0&&e===a&&t>o,[o,a,i,r,E,T]),k=(0,Uk.useMemo)(()=>Array.from({length:Gk},(e,r)=>{let i=r+1,a=new Date(Date.UTC(b,r,1));return{id:`${vk}${b}-${i}`,isSelected:t===b&&n===i,label:w.format(a),isDisabled:O(b,i),onSelect:()=>{!D||O(b,i)||d(b,i)}}}),[b,D,O,w,d,n,t]),j=(0,Uk.useMemo)(()=>Array.from({length:Kk},(e,n)=>{let r=S+n;return{id:`${_k}${r}`,isSelected:r===t,label:String(r),isDisabled:r<T||r>E,onSelect:()=>{!D||r<T||r>E||(x(r),C(Pk(r)),y(qk))}}}),[D,E,T,t,S]);return v===`year`?(0,Wk.jsxs)(`div`,{className:c(lO,FO,p),children:[(0,Wk.jsxs)(`div`,{className:LO,children:[(0,Wk.jsx)(`button`,{"aria-label":g.chooseMonth,className:_O,disabled:!D,type:`button`,onClick:()=>{if(D){if(f){f();return}y(qk)}},children:(0,Wk.jsx)(iO,{className:vO,direction:fk})}),(0,Wk.jsx)(`div`,{className:IO,children:g.chooseYear}),(0,Wk.jsxs)(`div`,{className:BO,children:[(0,Wk.jsx)(ik,{direction:fk,isDisabled:!D,label:g.previousYears,onPress:()=>C(e=>e-Kk)}),(0,Wk.jsx)(ik,{direction:pk,isDisabled:!D,label:g.nextYears,onPress:()=>C(e=>e+Kk)})]})]}),(0,Wk.jsx)(ck,{isDisabled:!D,options:j})]}):(0,Wk.jsxs)(`div`,{className:c(lO,FO,p),children:[(0,Wk.jsxs)(`div`,{className:LO,children:[(0,Wk.jsx)(ik,{direction:fk,isDisabled:!D,label:g.previousYear,onPress:()=>x(e=>e-1)}),(0,Wk.jsx)(`button`,{"aria-label":g.chooseYear,className:hO,disabled:!D,type:`button`,onClick:()=>y(Jk),children:b}),(0,Wk.jsx)(ik,{direction:pk,isDisabled:!D,label:g.nextYear,onPress:()=>x(e=>e+1)})]}),(0,Wk.jsx)(`div`,{className:IO,children:g.chooseMonth}),(0,Wk.jsx)(ck,{isDisabled:!D,options:k})]})}var Uk,Wk,Gk,Kk,qk,Jk;function Yk(){return(Yk=t((()=>{l(),Uk=r(),ve(),sO(),sk(),dk(),wk(),Ek(),rk(),Vk(),Wk=W(),Gk=12,Kk=12,qk=`month`,Jk=`year`})))()}function Xk({date:e,monthStart:t,state:n}){let r=Zk.useRef(null),i=!xa(e,t),{cellProps:a,buttonProps:o,formattedDate:s,isDisabled:l,isFocused:u,isInvalid:d,isSelected:f,isUnavailable:p}=dl({date:e,isOutsideMonth:i},n,r),m=wa(e,n.timeZone);return(0,Qk.jsx)(`td`,{...a,className:xO,children:(0,Qk.jsx)(`button`,{...o,ref:r,className:c(CO,f?DO:void 0,f&&u?OO:void 0,!f&&u&&m?EO:void 0,!f&&u&&!m?TO:void 0,!f&&!u&&m?wO:void 0,i?kO:void 0,p?AO:void 0,l?jO:void 0,d?MO:void 0),type:`button`,children:s})})}var Zk,Qk;function $k(){return($k=t((()=>{l(),Ja(),Zk=e(r()),pl(),rk(),Qk=W()})))()}function eA({firstDayOfWeek:e,state:t}){let{gridProps:n,headerProps:r,weekDays:i,weeksInMonth:a}=ml(e===void 0?{}:{firstDayOfWeek:e},t),o=t.visibleRange.start;return(0,tA.jsxs)(`table`,{...n,className:yO,children:[(0,tA.jsx)(`thead`,{...r,children:(0,tA.jsx)(`tr`,{children:i.map((e,t)=>(0,tA.jsx)(`th`,{className:bO,children:e},`${e}-${t}`))})}),(0,tA.jsx)(`tbody`,{children:Array.from({length:a},(e,n)=>(0,tA.jsx)(`tr`,{children:t.getDatesInWeek(n).map((e,r)=>e?(0,tA.jsx)(Xk,{date:e,monthStart:o,state:t},e.toString()):(0,tA.jsx)(`td`,{className:SO},`empty-${n}-${r}`))},n))})]})}var tA;function nA(){return(nA=t((()=>{gl(),$k(),rk(),tA=W()})))()}function rA({timeSelectorProps:e}){let{locale:t}=A(),n=Tk(),r=(0,iA.useId)(),i=(0,iA.useId)(),a=Dk(t,e.hourCycle),o=a===`h11`||a===`h12`,s=Ok(t),l=jk(e.value),u=!!(e.isDisabled||e.isReadOnly),d=iA.useMemo(()=>{let e=new Date(2e3,0,1,l.hour,l.minute,l.second);return new Intl.DateTimeFormat(t,{hour:mk,minute:hk,hour12:o}).format(e)},[l.hour,l.minute,l.second,t,o]),[f,p]=iA.useState(d);iA.useEffect(()=>{p(d)},[d]);let m=kk(e.value),h=Nk(Ak(l.hour,a)),g=Nk(l.minute),_=t=>{e.onChange(t)};return(0,aA.jsxs)(`div`,{className:GO,role:`group`,"aria-labelledby":r,children:[(0,aA.jsx)(`span`,{id:r,className:KO,children:n.time}),(0,aA.jsx)(`input`,{"aria-labelledby":r,className:qO,disabled:u,id:i,inputMode:`numeric`,type:`text`,value:f,onBlur:()=>{if(e.granularity===`hour`){p(d);return}let n=zk(f,{hour12:o,locale:t,dayPeriodLabels:s});n?_(n):p(d)},onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}}),(0,aA.jsxs)(`div`,{className:JO,children:[(0,aA.jsxs)(`div`,{className:YO,children:[(0,aA.jsx)(`button`,{"aria-label":n.decreaseHour,className:XO,disabled:u,type:`button`,onClick:()=>{_(Bk(l,-60))},children:`−`}),(0,aA.jsx)(`span`,{className:ZO,children:h}),(0,aA.jsx)(`button`,{"aria-label":n.increaseHour,className:XO,disabled:u,type:`button`,onClick:()=>{_(Bk(l,60))},children:`+`})]}),e.granularity===`minute`?(0,aA.jsxs)(`div`,{className:YO,children:[(0,aA.jsx)(`button`,{"aria-label":n.decreaseMinute,className:XO,disabled:u,type:`button`,onClick:()=>{_(Bk(l,-e.minuteStep))},children:`−`}),(0,aA.jsx)(`span`,{className:ZO,children:g}),(0,aA.jsx)(`button`,{"aria-label":n.increaseMinute,className:XO,disabled:u,type:`button`,onClick:()=>{_(Bk(l,e.minuteStep))},children:`+`})]}):null,o?(0,aA.jsxs)(`div`,{"aria-label":n.dayPeriodGroup,className:QO,role:`group`,children:[(0,aA.jsx)(`button`,{className:c($O,m===`am`?ek:void 0),disabled:u,id:yk,type:`button`,onClick:()=>{_(l.set({hour:Mk(l.hour,`am`)}))},children:s.am}),(0,aA.jsx)(`button`,{className:c($O,m===`pm`?ek:void 0),disabled:u,id:bk,type:`button`,onClick:()=>{_(l.set({hour:Mk(l.hour,`pm`)}))},children:s.pm})]}):null]}),e.granularity===`minute`?(0,aA.jsxs)(`div`,{className:tk,children:[(0,aA.jsx)(`button`,{className:nk,disabled:u,type:`button`,onClick:()=>{_(l.add({minutes:30}))},children:n.plus30Minutes}),(0,aA.jsx)(`button`,{className:nk,disabled:u,type:`button`,onClick:()=>{_(new ns(23,59,0))},children:n.endOfDay})]}):null]})}var iA,aA;function oA(){return(oA=t((()=>{l(),as(),iA=e(r()),ve(),wk(),Ek(),rk(),Vk(),aA=W()})))()}function sA({calendarProps:e,canClear:t,dialogProps:n,onClear:r,onSelectNextWeek:i,onSelectNow:a,onSelectToday:o,onSelectTomorrow:s,timeSelectorProps:l}){let u=cA.useRef(null),{dialogProps:d}=Ge(n,u),{locale:f}=A(),p=Tk(),[m,h]=cA.useState(xk),g=eO({...e,createCalendar:xc,locale:f}),{calendarProps:_}=Qc(e,g),v=Nc({calendar:g.visibleRange.start.calendar.identifier,month:gk,timeZone:g.timeZone}),y=Nc({calendar:g.visibleRange.start.calendar.identifier,timeZone:g.timeZone,year:mk}),b=!(e.isDisabled||e.isReadOnly),x=v.format(g.visibleRange.start.toDate(g.timeZone)),S=y.format(g.visibleRange.start.toDate(g.timeZone)),C=()=>{h(Ck)};return(0,lA.jsx)(`div`,{...d,ref:u,className:c(cO,lO),children:(0,lA.jsxs)(`div`,{..._,className:c(uO,l&&m===`calendar`?dO:void 0),children:[m===`calendar`?(0,lA.jsxs)(lA.Fragment,{children:[(0,lA.jsxs)(`div`,{className:fO,children:[(0,lA.jsxs)(`div`,{className:pO,children:[(0,lA.jsx)(ik,{direction:fk,isDisabled:g.isPreviousVisibleRangeInvalid(),label:p.previousMonth,onPress:()=>g.focusPreviousPage()}),(0,lA.jsxs)(`div`,{className:mO,children:[(0,lA.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(x),className:hO,disabled:!b,type:`button`,onClick:()=>h(Sk),children:x}),(0,lA.jsx)(`span`,{"aria-hidden":`true`,className:gO,children:` `}),(0,lA.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(S),className:hO,disabled:!b,type:`button`,onClick:C,children:S})]}),(0,lA.jsx)(ik,{direction:pk,isDisabled:g.isNextVisibleRangeInvalid(),label:p.nextMonth,onPress:()=>g.focusNextPage()})]}),(0,lA.jsx)(eA,{firstDayOfWeek:e.firstDayOfWeek,state:g}),(0,lA.jsxs)(`div`,{className:NO,children:[(0,lA.jsx)(`button`,{className:PO,disabled:!t||!b,type:`button`,onClick:r,children:p.clear}),l?(0,lA.jsx)(`button`,{className:PO,disabled:!b||!a,type:`button`,onClick:()=>a?.(),children:p.now}):(0,lA.jsx)(`button`,{className:PO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar);g.setFocusedDate(e),o(e)},children:p.today}),s?(0,lA.jsx)(`button`,{className:PO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar).add({days:1});g.setFocusedDate(e),s(e)},children:p.tomorrow}):null,i?(0,lA.jsx)(`button`,{className:PO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar).add({weeks:1});g.setFocusedDate(e),i(e)},children:p.nextWeek}):null]})]}),l?(0,lA.jsx)(rA,{timeSelectorProps:l}):null]}):null,m===`calendar`?null:(0,lA.jsx)(Hk,{initialView:m===`year`?`year`:`month`,selectedYear:g.visibleRange.start.year,selectedMonth:g.visibleRange.start.month,...hb(e.minValue,{minYear:e.minValue?.year,minMonth:e.minValue?.month}),...hb(e.maxValue,{maxYear:e.maxValue?.year,maxMonth:e.maxValue?.month}),...Y({isDisabled:e.isDisabled}),...Y({isReadOnly:e.isReadOnly}),locale:f,onSelect:(e,t)=>{let n=g.focusedDate.set({year:e,month:t,day:1});g.setFocusedDate(n),h(xk)},onCancel:()=>h(xk)})]})})}var cA,lA;function uA(){return(uA=t((()=>{l(),Sc(),mo(),Ja(),rO(),cA=e(r()),$c(),Ic(),ft(),ve(),Yk(),nA(),sk(),wk(),Ek(),rk(),oA(),lA=W()})))()}var dA,fA,pA,mA,hA,gA,_A,vA,yA,bA,xA,SA,CA,wA,TA,EA;function DA(){return(DA=t((()=>{l(),dA=u`
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  color: inherit;
  outline: none;
`,fA=u`
  display: inline-flex;
  max-width: 100%;
  min-width: 0;
  flex-wrap: nowrap;
  /* Centred, not baseline-aligned: baseline alignment sizes the row from the tallest item's line
     box, which made the field a pixel or two taller than an input showing the same text. */
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`,pA=u`
  cursor: not-allowed;
`,mA=u`
  cursor: default;
`,hA=u`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,gA=u`
  flex: 0 1 auto;
  min-width: 0;
`,_A=u`
  position: relative;
  flex: 0 0 auto;
  min-width: 1ch;
  border-radius: 4px;
  color: inherit;
  outline: none;
  font-variant-numeric: tabular-nums;

  &[data-focus-visible="true"] {
    background: var(--color-blue-50);
  }
`,vA=u`
  color: var(--field-placeholder);
`,yA=u`
  color: var(--field-chrome);
  user-select: none;
`,bA=u`
  visibility: hidden;
`,xA=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--field-chrome);
  cursor: pointer;
  transition:
    background-color 0.18s ease,
    color 0.18s ease;

  &:focus-visible {
    outline: none;
    background: var(--color-blue-50);
    color: var(--color-blue-700);
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.14);
  }

  &:disabled {
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--color-blue-50);
    color: var(--color-blue-700);
  }
`,SA=u`
  width: 18px;
  height: 18px;
`,CA=u`
  margin-inline-start: auto;
`,wA=u`
  visibility: hidden;
  pointer-events: none;
`,TA=u`
  && {
    width: min(360px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`,EA=u`
  && {
    width: min(720px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`})))()}function OA(){return(0,kA.jsxs)(`svg`,{"aria-hidden":`true`,className:SA,fill:`none`,viewBox:`0 0 20 20`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,kA.jsx)(`rect`,{height:`13`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`,width:`15`,x:`2.5`,y:`4`}),(0,kA.jsx)(`path`,{d:`M6 2.5v3M14 2.5v3M2.5 8h15`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`})]})}var kA;function AA(){return(AA=t((()=>{DA(),kA=W()})))()}function jA({buttonProps:e}){let t=(0,MA.useRef)(null),{buttonProps:n}=Lr(e,t);return(0,NA.jsx)(`button`,{...n,ref:t,className:c(xA,CA),type:`button`,children:(0,NA.jsx)(OA,{})})}var MA,NA;function PA(){return(PA=t((()=>{l(),MA=r(),Rr(),AA(),DA(),NA=W()})))()}function FA({segment:e,state:t}){let n=(0,IA.useRef)(null),{segmentProps:r}=x_(e,t,n),{focusProps:i,isFocusVisible:a}=T_();return(0,LA.jsx)(`div`,{...U(r,i),ref:n,className:c(_A,e.isPlaceholder?vA:void 0,e.type===`literal`?yA:void 0,e.type===`literal`?yA:void 0,e.text.trim()===`klo`?bA:void 0),"data-focus-visible":a?`true`:`false`,children:e.text})}var IA,LA;function RA(){return(RA=t((()=>{l(),IA=r(),V(),w_(),D_(),DA(),LA=W()})))()}var zA,BA,VA;function HA(){return(HA=t((()=>{zA=`false`,BA=`true`,VA=`minute`})))()}function UA(e,t,n,r){return!(e!==`floating`||t||n||r===!0)}function WA(e,t=2){return String(e).padStart(t,`0`)}function GA(e){return`year`in e&&`month`in e&&`day`in e}function KA(e){return`hour`in e&&`minute`in e&&`second`in e}function qA(e){return`${WA(e.year,4)}-${WA(e.month)}-${WA(e.day)}`}function JA(e,t){let n=WA(e.hour);if(t===`hour`)return n;let r=WA(e.minute);return t===`minute`?`${n}:${r}`:`${n}:${r}:${WA(e.second)}`}function YA(e,t){if(typeof t==`string`&&t.length!==0)try{return e===`date`?Bo(t):Vo(t)}catch{return}}function XA(e){if(typeof e==`string`&&e.length!==0)try{return zo(e)}catch{return}}function ZA(e){return e&&GA(e)?qA(e):``}function QA(e,t){return e&&KA(e)?JA(e,t):``}function $A(e,t){return!e||!GA(e)||!KA(e)?``:`${qA(e)}T${JA(e,t)}`}function ej(e,t,n){return e===`date`?ZA(t):$A(t,n)}function tj(e){if(e===void 0||e===`any`)return 5;let t=typeof e==`number`?e:Number(e);if(!Number.isFinite(t)||t<=0)return 1;let n=t/60;return!Number.isInteger(n)||n<1||n>59?1:n}function nj(){return(nj=t((()=>{$o()})))()}function rj(e,t){e&&(e.value=t)}function ij(e,t){let n=e.cloneNode(!0);return rj(n,t),n}function aj(e,t,n){if(!e||(rj(e,n),!t))return;let r=ij(e,n);t({currentTarget:r,target:r,type:`change`})}function oj(e,t){!e||!t||t({currentTarget:e,target:e,type:`blur`,relatedTarget:null})}function sj(e,t){!e||!t||t({currentTarget:e,target:e,type:`focus`,relatedTarget:null})}function cj(e,t){let{id:n,label:r,description:i,errorMessage:a,notice:o,fieldSize:s=`md`,isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d,iconStart:f,iconEnd:p,layout:m=`stacked`,className:h,value:g,onChange:_,onValueChange:v,onBlur:y,onFocus:b,inputRef:x,min:S,max:C,step:w,hourCycle:T}=e,{locale:E}=A(),D=(0,lj.useId)(),O=(0,lj.useId)(),k=(0,lj.useRef)(null),j=(0,lj.useRef)(null),M=(0,lj.useRef)(null),[N,P]=(0,lj.useState)(!1);return(0,lj.useImperativeHandle)(t,()=>LS(M.current,`[role="spinbutton"]`)??LS(j.current,`[role="spinbutton"]`)??M.current??j.current),{className:h,description:i,errorMessage:a,fieldRef:M,fieldSize:s,groupRef:j,hiddenInputRef:k,hourCycle:T,iconEnd:p,iconStart:f,id:n??D,inputRef:x,isFocused:N,label:r,layout:m,locale:E===`en`?`en-CA`:E,max:C,min:S,notice:o,noticeId:O,onChange:_,onValueChange:v,externalOnBlur:y,externalOnFocus:b,resolvedState:RS({errorMessage:a,...Y({isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d})}),setIsFocused:P,step:w,value:g}}var lj;function uj(){return(uj=t((()=>{lj=r(),ve(),VS(),nj()})))()}function dj({canClear:e,className:t,dateFieldAria:n,description:r,errorMessage:i,externalOnBlur:a,externalOnFocus:o,fieldRef:s,fieldSize:l,groupRef:u,hiddenInputRef:d,hiddenInputValue:f,inputRef:p,iconEnd:m,iconStart:h,isFocused:_,label:v,layout:y,notice:b,noticeId:x,onClear:S,onSelectNextWeek:C,onSelectNow:w,onSelectToday:T,onSelectTomorrow:E,pickerAria:D,pickerState:O,popoverClassName:k,resolvedState:A,setIsFocused:j,state:M,timeSelectorProps:N}){let P=mb(typeof D.groupProps[`aria-describedby`]==`string`?D.groupProps[`aria-describedby`]:void 0,b?x:void 0),F=y===`floating`,I=UA(y,_,M.value!==null,O.isOpen),L=(0,fj.useRef)(O.isOpen);L.current=O.isOpen;let{focusWithinProps:R}=g({onFocusWithin:()=>{sj(d.current,o),j(!0)},onBlurWithin:()=>{j(!1),L.current||oj(d.current,a)}});return(0,pj.jsxs)(pw,{controlClassName:c(PC(l,F,!F)),controlProps:{"data-disabled":A.isDisabled?BA:zA,"data-invalid":O.isInvalid?BA:zA,"data-readonly":A.isReadOnly?BA:zA,"data-has-icon-start":h?BA:void 0},label:v,description:r,descriptionProps:D.descriptionProps,errorMessage:i,errorMessageProps:D.errorMessageProps,notice:b,...Y({className:t}),...hb(v,{labelProps:D.labelProps}),...hb(b,{noticeId:x}),isDisabled:A.isDisabled,isRequired:A.isRequired,layout:y,fieldSize:l,isFloatingRaised:y!==`floating`||_||M.value!==null||O.isOpen,isFloatingFocused:y===`floating`?_||O.isOpen:!1,isInvalid:O.isInvalid,children:[(0,pj.jsxs)(`div`,{...U(D.groupProps,R),ref:u,className:hA,"aria-describedby":P,"aria-disabled":A.isDisabled?BA:void 0,"aria-invalid":O.isInvalid?BA:void 0,"aria-readonly":A.isReadOnly?BA:void 0,"aria-required":A.isRequired?BA:void 0,children:[h?(0,pj.jsx)(`span`,{className:lw,children:h}):null,(0,pj.jsx)(`div`,{className:gA,children:(0,pj.jsx)(`div`,{...n.fieldProps,ref:s,className:c(dA,F?MC(l):void 0,A.isDisabled?pA:void 0,A.isReadOnly?mA:void 0),"aria-describedby":P,children:(0,pj.jsx)(`div`,{className:c(fA,I&&wA),children:M.segments.map((e,t)=>(0,pj.jsx)(FA,{segment:e,state:M},`${e.type}-${t}`))})})}),m?(0,pj.jsx)(`span`,{className:lw,children:m}):null,(0,pj.jsx)(jA,{buttonProps:D.buttonProps})]}),(0,pj.jsx)(`input`,{...n.inputProps,ref:IS(d,p),type:`hidden`,"aria-describedby":P,value:f,onChange:()=>{}}),O.isOpen?(0,pj.jsx)(FT,{className:k,state:O,triggerRef:u,placement:`bottom start`,children:(0,pj.jsx)(sA,{calendarProps:D.calendarProps,canClear:e,dialogProps:D.dialogProps,onClear:S,onSelectToday:T,...Y({onSelectNextWeek:C}),...Y({onSelectNow:w}),...Y({onSelectTomorrow:E}),...Y({timeSelectorProps:N})})}):null]})}var fj,pj;function mj(){return(mj=t((()=>{l(),fj=r(),V(),ht(),VS(),uA(),hw(),fw(),BT(),PA(),RA(),HA(),DA(),uj(),pj=W()})))()}function hj({base:e,currentValue:t,granularity:n,kind:r,onClear:i,onCommitValue:a}){let o=YA(r,e.min),s=YA(r,e.max),c={id:e.id,label:e.label,description:e.description,errorMessage:e.errorMessage,granularity:n,value:t,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,isRequired:e.resolvedState.isRequired,isInvalid:e.resolvedState.isInvalid,shouldCloseOnSelect:r===`date`,onChange:a,...Y({hourCycle:e.hourCycle,minValue:o,maxValue:s})},l=CD(c),u=s_(c,l,e.groupRef),d={...u.fieldProps,createCalendar:xc,locale:e.locale},f=PD(d),p=$g(d,f,e.fieldRef),m=t!==null||l.dateValue!==null||l.timeValue!==null;return(0,gj.jsx)(dj,{canClear:m,className:e.className,dateFieldAria:p,description:e.description,errorMessage:e.errorMessage,fieldRef:e.fieldRef,fieldSize:e.fieldSize,groupRef:e.groupRef,hiddenInputRef:e.hiddenInputRef,hiddenInputValue:ej(r,f.value,VA),inputRef:e.inputRef,iconEnd:e.iconEnd,iconStart:e.iconStart,isFocused:e.isFocused,label:e.label,layout:e.layout,notice:e.notice,noticeId:e.noticeId,externalOnBlur:e.externalOnBlur,externalOnFocus:e.externalOnFocus,onClear:()=>{l.setOpen(!1),i()},onSelectNextWeek:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectNow:r===`datetime`?()=>{let e=Ea(ja()),n=t?.calendar??new ga,r=so(io(e),n),i=oo(e);l.setValue(ao(r,i))}:void 0,onSelectToday:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectTomorrow:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},pickerAria:u,pickerState:l,popoverClassName:r===`date`?TA:EA,resolvedState:e.resolvedState,setIsFocused:e.setIsFocused,state:f,timeSelectorProps:r===`datetime`?{granularity:VA,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,minuteStep:tj(e.step),value:l.timeValue,onChange:e=>{l.setTimeValue(e)},...Y({hourCycle:e.hourCycle})}:void 0})}var gj;function _j(){return(_j=t((()=>{Sc(),Ja(),_a(),mo(),BD(),TD(),a_(),l_(),mj(),HA(),DA(),uj(),gj=W()})))()}function vj(e,t){let n=cj(e,t),r=e.kind===`date`?`day`:VA,i=YA(e.kind,n.value),[a,o]=(0,yj.useState)(0),s=(0,yj.useRef)(``),c=typeof n.value==`string`?n.value:``;return(0,yj.useEffect)(()=>{s.current.length>0&&c.length===0&&o(e=>e+1),s.current=c},[c]),(0,bj.jsx)(hj,{base:n,currentValue:i??null,granularity:r,kind:e.kind,onClear:()=>{n.onValueChange?.(``),aj(n.hiddenInputRef.current,n.onChange,``)},onCommitValue:t=>{let r=ej(e.kind,t,VA);n.onValueChange?.(r),aj(n.hiddenInputRef.current,n.onChange,r)}},a)}var yj,bj;function xj(){return(xj=t((()=>{yj=e(r()),_j(),HA(),uj(),bj=W()})))()}function Sj({aria:e,className:t,description:n,errorMessage:r,externalOnBlur:i,externalOnFocus:a,fieldRef:o,fieldSize:s,hiddenInputRef:l,hiddenInputValue:u,inputRef:d,iconEnd:f,iconStart:p,isFocused:m,label:h,layout:_,notice:v,noticeId:y,resolvedState:b,setIsFocused:x,state:S}){let C=mb(typeof e.fieldProps[`aria-describedby`]==`string`?e.fieldProps[`aria-describedby`]:void 0,v?y:void 0),w=_===`floating`,T=UA(_,m,S.value!==null),{focusWithinProps:E}=g({onFocusWithin:()=>{sj(l.current,a),x(!0)},onBlurWithin:()=>{x(!1),oj(l.current,i)}});return(0,Cj.jsxs)(pw,{controlClassName:c(PC(s,w,!w)),controlProps:{"data-disabled":b.isDisabled?BA:zA,"data-invalid":S.isInvalid?BA:zA,"data-readonly":b.isReadOnly?BA:zA,"data-has-icon-start":p?BA:void 0},label:h,description:n,descriptionProps:e.descriptionProps,errorMessage:r,errorMessageProps:e.errorMessageProps,notice:v,...Y({className:t}),...hb(h,{labelProps:e.labelProps}),...hb(v,{noticeId:y}),isDisabled:b.isDisabled,isRequired:b.isRequired,layout:_,fieldSize:s,isFloatingRaised:_!==`floating`||m||S.value!==null,isFloatingFocused:_===`floating`&&m,isInvalid:S.isInvalid,children:[p?(0,Cj.jsx)(`span`,{className:lw,children:p}):null,(0,Cj.jsx)(`div`,{...U(e.fieldProps,E),ref:o,className:c(dA,w?MC(s):void 0,b.isDisabled?pA:void 0,b.isReadOnly?mA:void 0),"aria-disabled":b.isDisabled?BA:void 0,"aria-describedby":C,"aria-invalid":S.isInvalid?BA:void 0,"aria-readonly":b.isReadOnly?BA:void 0,"aria-required":b.isRequired?BA:void 0,children:(0,Cj.jsx)(`div`,{className:c(fA,T&&wA),children:S.segments.map((e,t)=>(0,Cj.jsx)(FA,{segment:e,state:S},`${e.type}-${t}`))})}),(0,Cj.jsx)(`input`,{...e.inputProps,ref:IS(l,d),type:`hidden`,"aria-describedby":C,value:u,onChange:()=>{}}),f?(0,Cj.jsx)(`span`,{className:lw,children:f}):null]})}var Cj;function wj(){return(wj=t((()=>{l(),V(),ht(),VS(),hw(),fw(),RA(),HA(),DA(),uj(),Cj=W()})))()}function Tj(e,t){let n=cj(e,t),r=VA,i=Ej.useMemo(()=>XA(n.value),[n.value]),a=Ej.useMemo(()=>XA(n.min),[n.min]),o=Ej.useMemo(()=>XA(n.max),[n.max]),s={id:n.id,inputRef:n.hiddenInputRef,label:n.label,description:n.description,errorMessage:n.errorMessage,locale:n.locale,granularity:r,value:i??null,isDisabled:n.resolvedState.isDisabled,isReadOnly:n.resolvedState.isReadOnly,isRequired:n.resolvedState.isRequired,isInvalid:n.resolvedState.isInvalid,...Y({hourCycle:n.hourCycle,minValue:a,maxValue:o}),onChange:e=>{let t=QA(e,r);n.onValueChange?.(t),aj(n.hiddenInputRef.current,n.onChange,t)}},c=VD(s),l=e_(s,c,n.fieldRef);return(0,Dj.jsx)(Sj,{aria:l,className:n.className,description:n.description,errorMessage:n.errorMessage,fieldRef:n.fieldRef,fieldSize:n.fieldSize,hiddenInputRef:n.hiddenInputRef,hiddenInputValue:QA(c.value,r),inputRef:n.inputRef,iconEnd:n.iconEnd,iconStart:n.iconStart,isFocused:n.isFocused,label:n.label,layout:n.layout,notice:n.notice,noticeId:n.noticeId,externalOnBlur:n.externalOnBlur,externalOnFocus:n.externalOnFocus,resolvedState:n.resolvedState,setIsFocused:n.setIsFocused,state:c})}var Ej,Dj;function Oj(){return(Oj=t((()=>{WD(),Ej=e(r()),a_(),wj(),HA(),uj(),Dj=W()})))()}var kj,Aj,jj,Mj,Nj;function Pj(){return(Pj=t((()=>{kj=e(r()),xj(),Oj(),Aj=W(),jj=kj.forwardRef(vj),Mj=kj.forwardRef(Tj),Nj=kj.forwardRef(function(e,t){return e.kind===`time`?(0,Aj.jsx)(Mj,{...e,ref:t}):(0,Aj.jsx)(jj,{...e,ref:t})})})))()}function Fj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,inputRef:v}=e,{field:y,resolvedError:b,isInvalid:x}=NS({name:t,control:n,...Y({rules:r}),errorMessage:o}),S=y.value??``;return(0,Ij.jsx)(Nj,{ref:y.ref,kind:Rj,layout:Lj,label:i,description:a,errorMessage:b,notice:s,iconStart:l,iconEnd:u,isInvalid:x,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({inputRef:v}),value:S,onChange:e=>{y.onChange(e.target.value)},onBlur:y.onBlur})}var Ij,Lj,Rj;function zj(){return(zj=t((()=>{r(),PS(),Pj(),Ij=W(),Lj=`floating`,Rj=`date`})))()}function Bj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b}=e,{field:x,resolvedError:S,isInvalid:C}=NS({name:t,control:n,...Y({rules:r}),errorMessage:o}),w=x.value??``;return(0,Vj.jsx)(Nj,{ref:x.ref,kind:Uj,layout:Hj,label:i,description:a,errorMessage:S,notice:s,iconStart:l,iconEnd:u,isInvalid:C,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),value:w,onChange:e=>{x.onChange(e.target.value)},onBlur:x.onBlur})}var Vj,Hj,Uj;function Wj(){return(Wj=t((()=>{r(),PS(),Pj(),Vj=W(),Hj=`floating`,Uj=`datetime`})))()}function Gj(e){return e?Array.isArray(e)?e:Array.from(e):[]}function Kj(e){return e.trim()}function qj(e,t){let n=Gj(e);if(n.length===0)return t.empty;let r=e=>{let n=Kj(e);return n.length>0?n:t.unnamedFile};return n.length===1?r(n[0]?.name??``):n.length<=3?n.map(e=>r(e.name)).join(`, `):`${n.slice(0,2).map(e=>r(e.name)).join(`, `)} ${t.formatMoreFiles(n.length-2)}`}function Jj(e){return e?Array.from(e):[]}function Yj(){return(Yj=t((()=>{})))()}function Xj(e){switch(e){case`sm`:return tM;case`lg`:return rM;default:return nM}}function Zj(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,buttonLabel:d,isDisabled:f=!1,isRequired:p=!1,summaryFormatter:m,className:h,multiple:g}=e,{field:_,resolvedError:v,isInvalid:y}=NS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:b}=i(`shared-module`),x=(0,Qj.useMemo)(()=>({empty:b(`fileField.empty`),unnamedFile:b(`fileField.unnamed`),formatMoreFiles:e=>b(`fileField.moreFiles`,{count:e})}),[b]),S=d??b(`fileField.chooseFile`),C=(0,Qj.useId)(),w=a??C,T=(0,Qj.useId)(),E=(0,Qj.useId)(),D=(0,Qj.useId)(),{labelProps:O,fieldProps:k,descriptionProps:A,errorMessageProps:j}=Xl({label:o,description:s,errorMessage:v,id:w,isInvalid:y}),M=mb(typeof k[`aria-describedby`]==`string`?k[`aria-describedby`]:void 0,p?E:void 0,y&&!v?D:void 0),N=(0,Qj.useRef)(null),[P,F]=(0,Qj.useState)(x.empty);return(0,$j.jsx)(pw,{...Y({className:h}),label:o,labelProps:O,description:s,descriptionProps:A,errorMessage:v,errorMessageProps:j,isDisabled:f,isRequired:p,layout:iM,children:(0,$j.jsxs)(`div`,{className:vT,children:[(0,$j.jsx)(yt,{children:(0,$j.jsx)(`input`,{ref:IS(N,_.ref),type:`file`,name:_.name,multiple:g,disabled:f,required:p,"aria-hidden":`true`,tabIndex:-1,onChange:e=>{let t=Jj(e.currentTarget.files);F(m?.(t)??qj(t,x)),_.onChange(t)}})}),(0,$j.jsx)(`button`,{...k,className:c(yT,Xj(u)),type:`button`,disabled:f,"data-invalid":y?`true`:void 0,"aria-describedby":M,"aria-labelledby":typeof k[`aria-labelledby`]==`string`?`${k[`aria-labelledby`]} ${T}`:T,onClick:()=>{N.current?.click()},children:(0,$j.jsx)(`span`,{id:T,children:S})}),p||y&&!v?(0,$j.jsx)(yt,{children:(0,$j.jsxs)($j.Fragment,{children:[p?(0,$j.jsx)(`span`,{id:E,children:b(`required`)}):null,y&&!v?(0,$j.jsx)(`span`,{id:D,children:b(`error-title`)}):null]})}):null,(0,$j.jsx)(`div`,{"aria-live":`polite`,className:eM,role:`status`,children:P})]})})}var Qj,$j,eM,tM,nM,rM,iM;function aM(){return(aM=t((()=>{l(),Qj=e(r()),Zl(),De(),a(),PS(),VS(),Yj(),hw(),bT(),$j=W(),eM=u`
  color: var(--field-description);
  font-size: 0.9375rem;
  line-height: 1.45;
`,tM=u`
  min-height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,nM=u`
  min-height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,rM=u`
  min-height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,iM=`stacked`})))()}function oM(e){return typeof e==`string`?e:e.toString()}var sM,cM,lM;function uM(){return(uM=t((()=>{sM=e(r()),cM=W(),lM=sM.forwardRef(function({href:e,children:t,...n},r){return(0,cM.jsx)(`a`,{ref:r,href:oM(e),...n,children:t})})})))()}function dM(){return(dM=t((()=>{uM()})))()}var fM,pM,mM,hM,gM,_M;function vM(){return(vM=t((()=>{l(),dM(),fM=e(r()),V(),Ir(),It(),De(),a(),Bb(),pM=W(),mM=u`
  color: var(--link-fg);
  text-underline-offset: 0.15em;

  &:hover {
    color: var(--link-fg-hover);
  }

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
    border-radius: var(--space-1);
  }
`,hM={text:c(mM,u`
      text-decoration: underline;
    `),quiet:c(mM,u`
      text-decoration: none;

      &:hover,
      &:focus-visible {
        text-decoration: underline;
      }
    `),inherit:void 0},gM=`text`,_M=fM.forwardRef(function(e,t){let{styledAsButton:n,appearance:r,variant:a,size:o,icon:s,iconPosition:l,isLoading:u,isDisabled:d,loadingLabel:f,onPress:p,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-describedby":v,"aria-labelledby":y,"aria-label":b,onClick:x,onKeyDown:S,onKeyUp:C,onFocus:w,onBlur:T,onPointerDown:E,onPointerUp:D,onPointerCancel:O,className:k,children:A,tabIndex:j,...M}=e,N=n===!0,{t:P}=i(`shared-module`),F=!!u,I=F||!!d,L=f??P(`link.loading`),R=fM.useId(),z=fM.useId(),ee=mb(v,F&&N?R:void 0),te=b,ne=te?void 0:y??(N?z:void 0),B=Pt(t),{linkProps:re,isPressed:ie}=Fr({isDisabled:I,...Y({onPress:p,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-label":te,"aria-describedby":ee,"aria-labelledby":ne})},B),ae=j,oe=typeof ae==`number`?ae:I?0:re.tabIndex,se=c(N?_b({size:(N?o:void 0)??`medium`,variant:(N?a:void 0)??`primary`}):hM[r??gM],k)||void 0,ce=N?s:void 0,le=(N?l:void 0)??`start`,ue=U(re,{onClick:I?void 0:x,onPointerDown:E,onPointerUp:D,onPointerCancel:O,onKeyDown:S,onKeyUp:C,onFocus:w,onBlur:T});return(0,pM.jsx)(lM,{...ue,...M,ref:B,className:se,"data-pressed":ie?`true`:`false`,"data-disabled-reason":F?`loading`:I?`disabled`:void 0,"aria-busy":F?`true`:void 0,tabIndex:oe,children:N?(0,pM.jsxs)(pM.Fragment,{children:[(0,pM.jsxs)(`span`,{className:c(bb,F?xb:void 0),children:[ce&&le===`start`?(0,pM.jsx)(`span`,{className:Sb,children:ce}):null,(0,pM.jsx)(`span`,{id:ne===z?z:void 0,children:A}),ce&&le===`end`?(0,pM.jsx)(`span`,{className:Sb,children:ce}):null]}),F?(0,pM.jsxs)(pM.Fragment,{children:[(0,pM.jsx)(`span`,{className:Cb,"aria-hidden":`true`,children:(0,pM.jsx)(`span`,{className:wb})}),(0,pM.jsx)(yt,{id:R,children:L})]}):null]}):A})})})))()}function yM(e){return e!=null&&String(e).length>0}function bM(e,t){return e||t}function xM(e){return e??` `}function SM(e,t,n){return e===void 0?!t||n.length===0?null:n.join(` `):e}function CM({defaultValue:e,elementRef:t,value:n}){let[r,i]=wM.useState(!1),[a,o]=wM.useState(()=>yM(n)||yM(e));return wM.useEffect(()=>{if(n!==void 0){o(yM(n));return}if(t.current){o(t.current.value.length>0);return}o(yM(e))},[e,t,n]),{hasValue:a,isFocused:r,isFloated:bM(r,a),setHasValue:o,setIsFocused:i}}var wM;function TM(){return(TM=t((()=>{wM=e(r())})))()}function EM(){return(EM=t((()=>{l(),r(),fw(),TM(),W(),u`
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  width: 1.75rem;
`,u`
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--field-chrome);
  cursor: pointer;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  &[data-focus-visible="true"] {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
    border-radius: 3px;
  }
`,u`
  border-top: 1px solid var(--field-border);
`,u`
  width: 8px;
  height: 8px;
  border-right: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
`,u`
  transform: rotate(-135deg);
`,u`
  transform: rotate(45deg);
`})))()}function DM(e){if(!e.startsWith(`[`))return!1;let t=1;e[t]===`^`&&(t+=1);let n=!1,r=!0;for(;t<e.length;){let i=e[t];if(i===`\\`){t+=2,n=!0,r=!1;continue}if(i===`]`){if(r){t+=1,n=!0,r=!1;continue}return n&&t===e.length-1}t+=1,n=!0,r=!1}return!1}function OM(e){if(!DM(e.source))throw Error(`toCharacterMatcher expects a simple character-class RegExp (e.g. /[0-9]/)`);let t=e.flags.replaceAll(`g`,``);return new RegExp(e.source,t)}function kM(e,t){return typeof t==`function`?t(e):OM(t).test(e)}function AM(e,t=RM){return Array.from(e).filter(e=>kM(e,t)).join(``)}function jM(e,t){return Array.from({length:t},(t,n)=>e[n]??``)}function MM(e){return e.join(``)}function NM(e,t){return Math.max(0,Math.min(t-1,e))}function PM(e,t,n,r){let i=[...e],a=AM(n,r).slice(-1);return i[t]=a,{slots:i,nextIndex:a?NM(t+1,e.length):t}}function FM(e,t,n,r){let i=[...e],a=AM(n,r).slice(0,i.length-t).split(``);for(let e=0;e<a.length;e+=1)i[t+e]=a[e]??``;return{slots:i,nextIndex:a.length>0?NM(t+a.length,i.length):t}}function IM(e,t){let n=[...e];if(n[t])return n[t]=``,{slots:n,nextIndex:t};let r=NM(t-1,n.length);return n[r]=``,{slots:n,nextIndex:r}}function LM(e,t,n,r){return n?.(e,t)??r?.(e,t)??`Character ${e+1} of ${t}`}var RM;function zM(){return(zM=t((()=>{RM=/[0-9]/})))()}function BM(e){switch(e){case`sm`:return KM;case`lg`:return JM;default:return qM}}function VM(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,length:d=6,onComplete:f,allowedCharacters:p=/[0-9]/,getSlotAriaLabel:m,isDisabled:h=!1,isReadOnly:g=!1,isRequired:_=!1,className:v,autoComplete:y}=e,{field:b,resolvedError:x,isInvalid:S}=NS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:C}=i(`shared-module`),w=(0,HM.useId)(),T=a??w,E=(0,HM.useRef)(null),D=(0,HM.useRef)(null),O=(0,HM.useRef)([]),k=(0,HM.useRef)(!1);(0,HM.useImperativeHandle)(b.ref,()=>O.current[0]??LS(D.current,XM));let A=(0,HM.useId)(),j=(0,HM.useId)(),{labelProps:M,fieldProps:N,descriptionProps:P,errorMessageProps:F}=Xl({label:o,description:s,errorMessage:x,id:T,isInvalid:S}),{id:I=T,"aria-labelledby":L,...R}=N,z=Array.from(new Set([L,M.id].flatMap(e=>typeof e==`string`?e.split(` `):[]).filter(e=>e.length>0))).join(` `),ee=U(M,{onClick:()=>{h||O.current[0]?.focus()}}),te=typeof b.value==`string`?b.value:``;(0,HM.useEffect)(()=>{E.current&&(E.current.value=te)},[te]);let ne=zS({descriptionId:A,errorMessageId:j,hasDescription:!!s,hasErrorMessage:!!x}),B=jM(te,d),re=e=>{b.onChange(e),E.current&&(E.current.value=e),e.length===d&&f?.(e)};return(0,UM.jsxs)(pw,{...Y({className:v}),label:o,labelProps:ee,description:s,descriptionProps:P,errorMessage:x,errorMessageProps:F,isDisabled:h,isRequired:_,layout:YM,children:[(0,UM.jsx)(yt,{children:(0,UM.jsx)(`input`,{ref:E,type:`text`,name:b.name,value:te,disabled:h,readOnly:g,required:_,"aria-hidden":`true`,tabIndex:-1,autoComplete:y??`one-time-code`,"aria-describedby":ne,onChange:()=>{}})}),(0,UM.jsx)(`div`,{...R,ref:D,className:WM,role:`group`,"aria-labelledby":z||void 0,"aria-disabled":h?`true`:void 0,onBlur:e=>{D.current?.contains(e.relatedTarget)||(k.current=!1,b.onBlur())},onFocus:()=>{k.current||=!0},children:B.map((e,t)=>(0,UM.jsx)(`input`,{id:t===0?I:void 0,ref:e=>{O.current[t]=e},className:c(GM,BM(u)),type:`text`,inputMode:`numeric`,maxLength:1,autoComplete:t===0?y??`one-time-code`:`off`,value:e,disabled:h,readOnly:g,"data-invalid":S?`true`:`false`,"aria-invalid":S?`true`:void 0,"aria-required":t===0&&_?`true`:void 0,"aria-label":LM(t,d,m,e=>C(`otp.slotLabel`,{index:e+1})),onChange:e=>{if(g)return;let n=PM(B,t,e.currentTarget.value,p),r=MM(n.slots);re(r),O.current[n.nextIndex]?.focus()},onKeyDown:e=>{if(e.key===`ArrowLeft`)e.preventDefault(),O.current[NM(t-1,d)]?.focus();else if(e.key===`ArrowRight`)e.preventDefault(),O.current[NM(t+1,d)]?.focus();else if(e.key===`Backspace`){if(g)return;e.preventDefault();let n=IM(B,t);re(MM(n.slots)),O.current[n.nextIndex]?.focus()}},onPaste:e=>{if(g)return;e.preventDefault();let n=e.clipboardData.getData(`text`),r=FM(B,t,n,p);re(MM(r.slots)),O.current[r.nextIndex]?.focus()}},`${T}-${t}`))})]})}var HM,UM,WM,GM,KM,qM,JM,YM,XM;function ZM(){return(ZM=t((()=>{l(),HM=e(r()),V(),Zl(),De(),a(),PS(),VS(),zM(),hw(),UM=W(),WM=u`
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
`,GM=u`
  width: 44px;
  height: 52px;
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  color: var(--field-fg);
  font-size: 1.25rem;
  text-align: center;
  outline: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;

  &:focus {
    border-color: var(--field-border-focus);
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  &[data-invalid="true"] {
    border-color: var(--field-error-border);
  }

  &:disabled {
    background: var(--field-disabled-bg);
    border-color: var(--field-disabled-border);
    color: var(--field-disabled-fg);
    cursor: not-allowed;
  }
`,KM=u`
  width: 36px;
  height: 44px;
  font-size: 1rem;
`,qM=u`
  width: 44px;
  height: 52px;
  font-size: 1.25rem;
`,JM=u`
  width: 52px;
  height: 60px;
  font-size: 1.4rem;
`,YM=`stacked`,XM=`input`})))()}function QM(e){let t=(0,$M.useMemo)(()=>e.name||`radio-group-${eN}-${++tN}`,[e.name]),[n,r]=_t(e.value,e.defaultValue??null,e.onChange),[i]=(0,$M.useState)(n),[a,o]=(0,$M.useState)(null),s=Al({...e,value:n}),c=t=>{!e.isReadOnly&&!e.isDisabled&&(r(t),s.commitValidation())},l=s.displayValidation.isInvalid;return{...s,name:t,selectedValue:n,defaultSelectedValue:e.value===void 0?e.defaultValue??null:i,setSelectedValue:c,lastFocusedValue:a,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(l?`invalid`:null),isInvalid:l}}var $M,eN,tN;function nN(){return(nN=t((()=>{Hl(),oe(),$M=r(),eN=Math.round(Math.random()*1e10),tN=0})))()}function rN(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,isDisabled:l=!1,isReadOnly:u=!1,isRequired:d=!1,orientation:f=`vertical`,variant:p=`list`,className:m,children:h,"aria-label":g}=e,{field:_,resolvedError:v,isInvalid:y}=NS({name:t,control:n,rules:r,errorMessage:o}),b=(0,iN.useRef)(null);(0,iN.useImperativeHandle)(_.ref,()=>({focus(){b.current?.querySelector(mN)?.focus()}}));let x=QM({..._.value===null||_.value===void 0?{}:{value:String(_.value)},onChange:e=>{_.onChange(e)},name:_.name,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:y}),{radioGroupProps:S,labelProps:C,descriptionProps:w,errorMessageProps:T,isInvalid:E,validationErrors:D}=Vv({label:i,description:a,errorMessage:v,name:_.name,orientation:f,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:y,...Y({"aria-label":g})},x),O=p===`segmented`,k=a?(0,aN.jsx)(`div`,{...w,className:hC,children:a}):null,A=v??(E&&D.length>0?D.join(` `):null),j=U(S,{onBlur:e=>{b.current?.contains(e.relatedTarget)||_.onBlur()}});return(0,aN.jsxs)(`fieldset`,{...j,ref:b,className:c(lC,sN,m),disabled:x.isDisabled,children:[(0,aN.jsx)(`legend`,{...C,className:O?dN:uC,children:i}),O&&k?(0,aN.jsx)(`div`,{className:fN,children:k}):null,(0,aN.jsx)(oN.Provider,{value:{fieldSize:s,state:x,variant:p},children:(0,aN.jsx)(`div`,{className:pN(p,f),children:h})}),!O&&a||A?(0,aN.jsxs)(`div`,{className:mC,children:[O?null:k,A?(0,aN.jsx)(`div`,{...T,className:_C,role:`alert`,children:A}):null]}):null]})}var iN,aN,oN,sN,cN,lN,uN,dN,fN,pN,mN;function hN(){return(hN=t((()=>{l(),nN(),iN=e(r()),V(),Hv(),PS(),vC(),aN=W(),oN=iN.createContext(null),sN=u`
  margin: 0;
  padding: 0;
  border: 0;
`,cN=u`
  display: grid;
  gap: var(--space-2);
`,lN=u`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
`,uN=u`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
`,dN=u`
  color: var(--color-gray-700);
  font-size: var(--font-size-3);
  font-weight: 600;
  line-height: 1.3;
`,fN=u`
  margin-top: var(--space-1);
  margin-bottom: var(--space-3-5);
`,pN=(e,t)=>e===`segmented`?uN:t===`horizontal`?lN:cN,mN=`input[type="radio"]`})))()}function gN({forwardedRef:e,group:t,...n}){let{label:r,description:i,errorMessage:a,fieldSize:o,isDisabled:s,className:l,value:u,disabled:d,checked:f,defaultChecked:p,"aria-describedby":m,onChange:h,required:g,..._}=n,v=Pt(e),{focusProps:y,isFocusVisible:b}=T_(),x=(0,_N.useId)(),S=(0,_N.useId)(),C=o??t.fieldSize??yN,{inputProps:w,isDisabled:T,isSelected:E,labelProps:D}=Rv({children:r,value:u===void 0?void 0:String(u),isDisabled:!!(s||d)},t.state,v),O=mb(typeof w[`aria-describedby`]==`string`?w[`aria-describedby`]:void 0,m,i?x:void 0,a?S:void 0),{type:k,...A}=_,j=U(w,y,{...A,onChange:h,type:`radio`});return t.variant===`segmented`?(0,vN.jsxs)(`label`,{...D,className:c(_b({size:`medium`,variant:E?`primary`:`secondary`}),bN,l),"data-disabled":String(T),"data-focus-visible":String(b),"data-selected":String(E),children:[(0,vN.jsx)(`input`,{...j,ref:v,className:JS,"aria-describedby":O}),(0,vN.jsxs)(`span`,{className:xN,children:[(0,vN.jsx)(`span`,{children:r}),(0,vN.jsx)(SN,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]}):(0,vN.jsxs)(`label`,{...D,className:c(KS,HS(C),l),"data-disabled":String(T),children:[(0,vN.jsx)(`input`,{...j,ref:v,className:JS,"aria-describedby":O}),(0,vN.jsx)(`span`,{className:US(C,`radio`),"aria-hidden":`true`,"data-disabled":String(T),"data-focus-visible":String(b),"data-invalid":String(t.state.isInvalid),"data-selected":String(E),children:E?(0,vN.jsx)(`span`,{className:c(rC,iC,sC)}):null}),(0,vN.jsxs)(`span`,{className:YS,children:[(0,vN.jsx)(`span`,{className:XS,children:r}),(0,vN.jsx)(SN,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]})}var _N,vN,yN,bN,xN,SN;function CN(){return(CN=t((()=>{l(),_N=e(r()),V(),D_(),It(),Bv(),VS(),Bb(),cC(),vC(),vN=W(),yN=`md`,bN=u`
  /* The button sizes fix a height, which a description under the label would overflow. */
  height: auto;
  min-height: var(--control-height-md);
  padding-block: var(--space-2);

  &[data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }
`,xN=u`
  display: grid;
  gap: var(--space-1);
  white-space: normal;
`,SN=({description:e,descriptionId:t,errorMessage:n,errorMessageId:r})=>(0,vN.jsxs)(vN.Fragment,{children:[e?(0,vN.jsx)(`span`,{className:hC,id:t,children:e}):null,n?(0,vN.jsx)(`span`,{className:_C,id:r,role:`alert`,children:n}):null]})})))()}function wN({forwardedRef:e,...t}){let{label:n,description:r,errorMessage:i,fieldSize:a,isDisabled:o,className:s,value:l,disabled:u,checked:d,defaultChecked:f,"aria-describedby":p,onChange:m,required:h,...g}=t,_=Pt(e),{focusProps:v,isFocusVisible:y}=T_(),b=(0,TN.useId)(),x=(0,TN.useId)(),S=a??DN,C=l===void 0?void 0:String(l),w=d!==void 0,T=RS({isDisabled:!!(o||u),isRequired:!!h,isInvalid:!!i}),E=mb(p,r?b:void 0,i?x:void 0),{type:D,...O}=g,k=U(O,v,{className:JS,type:`radio`,disabled:T.isDisabled,required:T.isRequired,...Y({value:C}),"aria-describedby":E,...w?{checked:d,onChange:m}:{defaultChecked:f,onChange:m}});return(0,EN.jsxs)(`label`,{className:c(KS,HS(S),s),"data-disabled":String(T.isDisabled),children:[(0,EN.jsx)(`input`,{...k,ref:_}),(0,EN.jsx)(`span`,{className:c(US(S,`radio`),w?void 0:nC),"aria-hidden":`true`,"data-disabled":String(T.isDisabled),"data-focus-visible":String(y),"data-invalid":String(T.isInvalid),...hb(w,{"data-selected":String(d)}),children:w?d?(0,EN.jsx)(`span`,{className:c(rC,iC,sC)}):null:(0,EN.jsx)(`span`,{className:c(rC,sC)})}),(0,EN.jsxs)(`span`,{className:YS,children:[(0,EN.jsx)(`span`,{className:XS,children:n}),r?(0,EN.jsx)(`span`,{className:hC,id:b,children:r}):null,i?(0,EN.jsx)(`span`,{className:_C,id:x,role:`alert`,children:i}):null]})]})}var TN,EN,DN;function ON(){return(ON=t((()=>{l(),TN=r(),V(),D_(),It(),VS(),cC(),vC(),EN=W(),DN=`md`})))()}var kN,AN,jN;function MN(){return(MN=t((()=>{kN=e(r()),hN(),CN(),ON(),AN=W(),jN=kN.forwardRef(function(e,t){let n=(0,kN.useContext)(oN);return n?(0,AN.jsx)(gN,{...e,forwardedRef:t,group:n}):(0,AN.jsx)(wN,{...e,forwardedRef:t})})})))()}function NN(){return(NN=t((()=>{l(),r(),s`
  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: none;
  }
`})))()}function PN(e){let{onInputChange:t,inputValue:n,defaultInputValue:r=``}=e,i=e=>{t&&t(e)},[a,o]=(0,FN.useState)(null),[s,c]=_t(n,r,i);return{inputValue:s,setInputValue:c,focusedNodeId:a,setFocusedNodeId:o}}var FN;function IN(){return(IN=t((()=>{oe(),FN=r()})))()}function LN(e){let[t,n]=_t(RN(e.value),RN(e.defaultValue)||``,e.onChange);return{value:t,setValue:n}}function RN(e){if(e!=null)return e.toString()}function zN(){return(zN=t((()=>{oe()})))()}function BN(e){let{selectionMode:t=`single`,shouldCloseOnSelect:n=t===`single`}=e,r=lt(e),[i,a]=(0,HN.useState)(null),o=(0,HN.useMemo)(()=>e.defaultValue===void 0?t===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,t]),s=(0,HN.useMemo)(()=>e.value===void 0?t===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,t]),[c,l]=_t(s,o,e.onChange),u=t===`single`&&Array.isArray(c)?c[0]:c,d=n=>{if(t===`single`){let t=Array.isArray(n)?n[0]??null:n;l(t),t!==u&&e.onSelectionChange?.(t)}else{let e=[];Array.isArray(n)?e=n:n!=null&&(e=[n]),l(e)}},f=Xw({...e,selectionMode:t,disallowEmptySelection:t===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,HN.useMemo)(()=>VN(u),[u]),onSelectionChange:e=>{if(e!==`all`){if(t===`single`){let t=e.values().next().value??null;d(t)}else d([...e]);n&&r.close(),h.commitValidation()}}}),p=f.selectionManager.firstSelectedKey,m=(0,HN.useMemo)(()=>[...f.selectionManager.selectedKeys].map(e=>f.collection.getItem(e)).filter(e=>e!=null),[f.selectionManager.selectedKeys,f.collection]),h=Al({...e,value:Array.isArray(u)&&u.length===0?null:u}),[g,_]=(0,HN.useState)(!1),[v]=(0,HN.useState)(u);return{...h,...f,...r,value:u,defaultValue:o??v,setValue:d,selectedKey:p,setSelectedKey:d,selectedItem:m[0]??null,selectedItems:m,defaultSelectedKey:e.defaultSelectedKey??(e.selectionMode===`single`?v:null),focusStrategy:i,open(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.open())},toggle(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.toggle())},isFocused:g,setFocused:_}}function VN(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var HN;function UN(){return(UN=t((()=>{Hl(),$w(),Ye(),oe(),HN=r()})))()}var WN=n(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],C=`[object Arguments]`,w=`[object Array]`,T=`[object AsyncFunction]`,E=`[object Boolean]`,D=`[object Date]`,O=`[object DOMException]`,k=`[object Error]`,A=`[object Function]`,j=`[object GeneratorFunction]`,M=`[object Map]`,N=`[object Number]`,P=`[object Null]`,F=`[object Object]`,I=`[object Promise]`,L=`[object Proxy]`,R=`[object RegExp]`,z=`[object Set]`,ee=`[object String]`,te=`[object Symbol]`,ne=`[object Undefined]`,B=`[object WeakMap]`,re=`[object WeakSet]`,ie=`[object ArrayBuffer]`,ae=`[object DataView]`,oe=`[object Float32Array]`,se=`[object Float64Array]`,ce=`[object Int8Array]`,le=`[object Int16Array]`,ue=`[object Int32Array]`,de=`[object Uint8Array]`,fe=`[object Uint8ClampedArray]`,pe=`[object Uint16Array]`,me=`[object Uint32Array]`,he=/\b__p \+= '';/g,ge=/\b(__p \+=) '' \+/g,_e=/(__e\(.*?\)|\b__t\)) \+\n'';/g,ve=/&(?:amp|lt|gt|quot|#39);/g,ye=/[&<>"']/g,be=RegExp(ve.source),xe=RegExp(ye.source),Se=/<%-([\s\S]+?)%>/g,Ce=/<%([\s\S]+?)%>/g,we=/<%=([\s\S]+?)%>/g,Te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ee=/^\w*$/,De=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oe=/[\\^$.*+?()[\]{}|]/g,ke=RegExp(Oe.source),Ae=/^\s+/,je=/\s/,V=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Me=/\{\n\/\* \[wrapped with (.+)\] \*/,Ne=/,? & /,Pe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fe=/[()=,{}\[\]\/\s]/,Ie=/\\(\\)?/g,Le=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Re=/\w*$/,ze=/^[-+]0x[0-9a-f]+$/i,Be=/^0b[01]+$/i,Ve=/^\[object .+?Constructor\]$/,He=/^0o[0-7]+$/i,Ue=/^(?:0|[1-9]\d*)$/,We=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ge=/($^)/,Ke=/['\n\r\u2028\u2029\\]/g,qe=`\\ud800-\\udfff`,Je=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,Ye=`\\u2700-\\u27bf`,Xe=`a-z\\xdf-\\xf6\\xf8-\\xff`,Ze=`\\xac\\xb1\\xd7\\xf7`,Qe=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,$e=`\\u2000-\\u206f`,et=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,tt=`A-Z\\xc0-\\xd6\\xd8-\\xde`,nt=`\\ufe0e\\ufe0f`,rt=Ze+Qe+$e+et,it=`['’]`,H=`[`+qe+`]`,at=`[`+rt+`]`,ot=`[`+Je+`]`,st=`\\d+`,ct=`[`+Ye+`]`,lt=`[`+Xe+`]`,ut=`[^`+qe+rt+st+Ye+Xe+tt+`]`,dt=`\\ud83c[\\udffb-\\udfff]`,ft=`(?:`+ot+`|`+dt+`)`,pt=`[^`+qe+`]`,U=`(?:\\ud83c[\\udde6-\\uddff]){2}`,mt=`[\\ud800-\\udbff][\\udc00-\\udfff]`,ht=`[`+tt+`]`,gt=`\\u200d`,_t=`(?:`+lt+`|`+ut+`)`,vt=`(?:`+ht+`|`+ut+`)`,yt=`(?:`+it+`(?:d|ll|m|re|s|t|ve))?`,bt=`(?:`+it+`(?:D|LL|M|RE|S|T|VE))?`,xt=ft+`?`,St=`[`+nt+`]?`,Ct=`(?:`+gt+`(?:`+[pt,U,mt].join(`|`)+`)`+St+xt+`)*`,W=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,wt=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,Tt=St+xt+Ct,Et=`(?:`+[ct,U,mt].join(`|`)+`)`+Tt,Dt=`(?:`+[pt+ot+`?`,ot,U,mt,H].join(`|`)+`)`,Ot=RegExp(it,`g`),kt=RegExp(ot,`g`),At=RegExp(dt+`(?=`+dt+`)|`+Dt+Tt,`g`),jt=RegExp([ht+`?`+lt+`+`+yt+`(?=`+[at,ht,`$`].join(`|`)+`)`,vt+`+`+bt+`(?=`+[at,ht+_t,`$`].join(`|`)+`)`,ht+`?`+_t+`+`+yt,ht+`+`+bt,wt,W,st,Et].join(`|`),`g`),Mt=RegExp(`[`+gt+qe+Je+nt+`]`),Nt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Pt=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),Ft=-1,It={};It[oe]=It[se]=It[ce]=It[le]=It[ue]=It[de]=It[fe]=It[pe]=It[me]=!0,It[C]=It[w]=It[ie]=It[E]=It[ae]=It[D]=It[k]=It[A]=It[M]=It[N]=It[F]=It[R]=It[z]=It[ee]=It[B]=!1;var Lt={};Lt[C]=Lt[w]=Lt[ie]=Lt[ae]=Lt[E]=Lt[D]=Lt[oe]=Lt[se]=Lt[ce]=Lt[le]=Lt[ue]=Lt[M]=Lt[N]=Lt[F]=Lt[R]=Lt[z]=Lt[ee]=Lt[te]=Lt[de]=Lt[fe]=Lt[pe]=Lt[me]=!0,Lt[k]=Lt[A]=Lt[B]=!1;var Rt={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},zt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Bt={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},Vt={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},Ht=parseFloat,Ut=parseInt,Wt=typeof global==`object`&&global&&global.Object===Object&&global,Gt=typeof self==`object`&&self&&self.Object===Object&&self,Kt=Wt||Gt||Function(`return this`)(),qt=typeof e==`object`&&e&&!e.nodeType&&e,Jt=qt&&typeof t==`object`&&t&&!t.nodeType&&t,Yt=Jt&&Jt.exports===qt,Xt=Yt&&Wt.process,Zt=function(){try{return Jt&&Jt.require&&Jt.require(`util`).types||Xt&&Xt.binding&&Xt.binding(`util`)}catch{}}(),Qt=Zt&&Zt.isArrayBuffer,$t=Zt&&Zt.isDate,en=Zt&&Zt.isMap,tn=Zt&&Zt.isRegExp,nn=Zt&&Zt.isSet,rn=Zt&&Zt.isTypedArray;function an(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function on(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function sn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function cn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function ln(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function un(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function dn(e,t){return!!(e!=null&&e.length)&&Cn(e,t,0)>-1}function fn(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function pn(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function mn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function hn(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function gn(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function _n(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var vn=Dn(`length`);function yn(e){return e.split(``)}function bn(e){return e.match(Pe)||[]}function xn(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function Sn(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Cn(e,t,n){return t===t?$n(e,t,n):Sn(e,Tn,n)}function wn(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function Tn(e){return e!==e}function En(e,t){var n=e==null?0:e.length;return n?jn(e,t)/n:v}function Dn(e){return function(t){return t==null?n:t[e]}}function On(e){return function(t){return e==null?n:e[t]}}function kn(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function An(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function jn(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function Mn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Nn(e,t){return pn(t,function(t){return[t,e[t]]})}function Pn(e){return e&&e.slice(0,rr(e)+1).replace(Ae,``)}function Fn(e){return function(t){return e(t)}}function In(e,t){return pn(t,function(t){return e[t]})}function Ln(e,t){return e.has(t)}function Rn(e,t){for(var n=-1,r=e.length;++n<r&&Cn(t,e[n],0)>-1;);return n}function zn(e,t){for(var n=e.length;n--&&Cn(t,e[n],0)>-1;);return n}function Bn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Vn=On(Rt),Hn=On(zt);function Un(e){return`\\`+Vt[e]}function Wn(e,t){return e==null?n:e[t]}function Gn(e){return Mt.test(e)}function Kn(e){return Nt.test(e)}function qn(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function Jn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Yn(e,t){return function(n){return e(t(n))}}function Xn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function Zn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function Qn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function $n(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function er(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function tr(e){return Gn(e)?ar(e):vn(e)}function nr(e){return Gn(e)?or(e):yn(e)}function rr(e){for(var t=e.length;t--&&je.test(e.charAt(t)););return t}var ir=On(Bt);function ar(e){for(var t=At.lastIndex=0;At.test(e);)++t;return t}function or(e){return e.match(At)||[]}function sr(e){return e.match(jt)||[]}var cr=(function e(t){t=t==null?Kt:cr.defaults(Kt.Object(),t,cr.pick(Kt,Pt));var je=t.Array,Pe=t.Date,qe=t.Error,Je=t.Function,Ye=t.Math,Xe=t.Object,Ze=t.RegExp,Qe=t.String,$e=t.TypeError,et=je.prototype,tt=Je.prototype,nt=Xe.prototype,rt=t[`__core-js_shared__`],it=tt.toString,H=nt.hasOwnProperty,at=0,ot=function(){var e=/[^.]+$/.exec(rt&&rt.keys&&rt.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),st=nt.toString,ct=it.call(Xe),lt=Kt._,ut=Ze(`^`+it.call(H).replace(Oe,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),dt=Yt?t.Buffer:n,ft=t.Symbol,pt=t.Uint8Array,U=dt?dt.allocUnsafe:n,mt=Yn(Xe.getPrototypeOf,Xe),ht=Xe.create,gt=nt.propertyIsEnumerable,_t=et.splice,vt=ft?ft.isConcatSpreadable:n,yt=ft?ft.iterator:n,bt=ft?ft.toStringTag:n,xt=function(){try{var e=Fo(Xe,`defineProperty`);return e({},``,{}),e}catch{}}(),St=t.clearTimeout!==Kt.clearTimeout&&t.clearTimeout,Ct=Pe&&Pe.now!==Kt.Date.now&&Pe.now,W=t.setTimeout!==Kt.setTimeout&&t.setTimeout,wt=Ye.ceil,Tt=Ye.floor,Et=Xe.getOwnPropertySymbols,Dt=dt?dt.isBuffer:n,At=t.isFinite,jt=et.join,Mt=Yn(Xe.keys,Xe),Nt=Ye.max,Rt=Ye.min,zt=Pe.now,Bt=t.parseInt,Vt=Ye.random,Wt=et.reverse,Gt=Fo(t,`DataView`),qt=Fo(t,`Map`),Jt=Fo(t,`Promise`),Xt=Fo(t,`Set`),Zt=Fo(t,`WeakMap`),vn=Fo(Xe,`create`),yn=Zt&&new Zt,On={},$n=bs(Gt),ar=bs(qt),or=bs(Jt),lr=bs(Xt),ur=bs(Zt),dr=ft?ft.prototype:n,fr=dr?dr.valueOf:n,pr=dr?dr.toString:n;function G(e){if(fu(e)&&!J(e)&&!(e instanceof _r)){if(e instanceof gr)return e;if(H.call(e,`__wrapped__`))return Ss(e)}return new gr(e)}var mr=function(){function e(){}return function(t){if(!du(t))return{};if(ht)return ht(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function hr(){}function gr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}G.templateSettings={escape:Se,evaluate:Ce,interpolate:we,variable:``,imports:{_:G}},G.prototype=hr.prototype,G.prototype.constructor=G,gr.prototype=mr(hr.prototype),gr.prototype.constructor=gr;function _r(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function vr(){var e=new _r(this.__wrapped__);return e.__actions__=Ka(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ka(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ka(this.__views__),e}function yr(){if(this.__filtered__){var e=new _r(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function br(){var e=this.__wrapped__.value(),t=this.__dir__,n=J(e),r=t<0,i=n?e.length:0,a=Bo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=Rt(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return Da(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}_r.prototype=mr(hr.prototype),_r.prototype.constructor=_r;function xr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Sr(){this.__data__=vn?vn(null):{},this.size=0}function Cr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function wr(e){var t=this.__data__;if(vn){var r=t[e];return r===i?n:r}return H.call(t,e)?t[e]:n}function Tr(e){var t=this.__data__;return vn?t[e]!==n:H.call(t,e)}function Er(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=vn&&t===n?i:t,this}xr.prototype.clear=Sr,xr.prototype.delete=Cr,xr.prototype.get=wr,xr.prototype.has=Tr,xr.prototype.set=Er;function Dr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Or(){this.__data__=[],this.size=0}function kr(e){var t=this.__data__,n=ei(t,e);return n<0?!1:(n==t.length-1?t.pop():_t.call(t,n,1),--this.size,!0)}function Ar(e){var t=this.__data__,r=ei(t,e);return r<0?n:t[r][1]}function jr(e){return ei(this.__data__,e)>-1}function Mr(e,t){var n=this.__data__,r=ei(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Dr.prototype.clear=Or,Dr.prototype.delete=kr,Dr.prototype.get=Ar,Dr.prototype.has=jr,Dr.prototype.set=Mr;function Nr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Pr(){this.size=0,this.__data__={hash:new xr,map:new(qt||Dr),string:new xr}}function Fr(e){var t=No(this,e).delete(e);return this.size-=+!!t,t}function Ir(e){return No(this,e).get(e)}function Lr(e){return No(this,e).has(e)}function Rr(e,t){var n=No(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Nr.prototype.clear=Pr,Nr.prototype.delete=Fr,Nr.prototype.get=Ir,Nr.prototype.has=Lr,Nr.prototype.set=Rr;function zr(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Nr;++t<n;)this.add(e[t])}function Br(e){return this.__data__.set(e,i),this}function Vr(e){return this.__data__.has(e)}zr.prototype.add=zr.prototype.push=Br,zr.prototype.has=Vr;function Hr(e){var t=this.__data__=new Dr(e);this.size=t.size}function Ur(){this.__data__=new Dr,this.size=0}function Wr(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Gr(e){return this.__data__.get(e)}function Kr(e){return this.__data__.has(e)}function qr(e,t){var n=this.__data__;if(n instanceof Dr){var r=n.__data__;if(!qt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Nr(r)}return n.set(e,t),this.size=n.size,this}Hr.prototype.clear=Ur,Hr.prototype.delete=Wr,Hr.prototype.get=Gr,Hr.prototype.has=Kr,Hr.prototype.set=qr;function Jr(e,t){var n=J(e),r=!n&&Yl(e),i=!n&&!r&&eu(e),a=!n&&!r&&!i&&Du(e),o=n||r||i||a,s=o?Mn(e.length,Qe):[],c=s.length;for(var l in e)(t||H.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Jo(l,c)))&&s.push(l);return s}function Yr(e){var t=e.length;return t?e[sa(0,t-1)]:n}function Xr(e,t){return _s(Ka(e),oi(t,0,e.length))}function Zr(e){return _s(Ka(e))}function Qr(e,t,r){(r!==n&&!Kl(e[t],r)||r===n&&!(t in e))&&ii(e,t,r)}function $r(e,t,r){var i=e[t];(!(H.call(e,t)&&Kl(i,r))||r===n&&!(t in e))&&ii(e,t,r)}function ei(e,t){for(var n=e.length;n--;)if(Kl(e[n][0],t))return n;return-1}function ti(e,t,n,r){return fi(e,function(e,i,a){t(r,e,n(e),a)}),r}function ni(e,t){return e&&qa(t,ld(t),e)}function ri(e,t){return e&&qa(t,ud(t),e)}function ii(e,t,n){t==`__proto__`&&xt?xt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ai(e,t){for(var r=-1,i=t.length,a=je(i),o=e==null;++r<i;)a[r]=o?n:rd(e,t[r]);return a}function oi(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function si(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!du(e))return e;var d=J(e);if(d){if(s=Uo(e),!c)return Ka(e,s)}else{var f=zo(e),p=f==A||f==j;if(eu(e))return Ia(e,c);if(f==F||f==C||p&&!a){if(s=l||p?{}:Wo(e),!c)return l?Ya(e,ri(s,e)):Ja(e,ni(s,e))}else{if(!Lt[f])return a?e:{};s=Go(e,f,c)}}o||=new Hr;var m=o.get(e);if(m)return m;o.set(e,s),wu(e)?e.forEach(function(n){s.add(si(n,t,r,n,e,o))}):pu(e)&&e.forEach(function(n,i){s.set(i,si(n,t,r,i,e,o))});var h=d?n:(u?l?ko:Oo:l?ud:ld)(e);return sn(h||e,function(n,i){h&&(i=n,n=e[i]),$r(s,i,si(n,t,r,i,e,o))}),s}function ci(e){var t=ld(e);return function(n){return li(n,e,t)}}function li(e,t,r){var i=r.length;if(e==null)return!i;for(e=Xe(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function ui(e,t,i){if(typeof e!=`function`)throw new $e(r);return ps(function(){e.apply(n,i)},t)}function di(e,t,n,r){var i=-1,a=dn,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=pn(t,Fn(n))),r?(a=fn,o=!1):t.length>=200&&(a=Ln,o=!1,t=new zr(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var fi=Qa(xi),pi=Qa(Si,!0);function mi(e,t){var n=!0;return fi(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function hi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Eu(s):r(s,c)))var c=s,l=o}return l}function gi(e,t,r,i){var a=e.length;for(r=Fu(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:Fu(i),i<0&&(i+=a),i=r>i?0:Iu(i);r<i;)e[r++]=t;return e}function _i(e,t){var n=[];return fi(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function vi(e,t,n,r,i){var a=-1,o=e.length;for(n||=qo,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?vi(s,t-1,n,r,i):mn(i,s):r||(i[i.length]=s)}return i}var yi=$a(),bi=$a(!0);function xi(e,t){return e&&yi(e,t,ld)}function Si(e,t){return e&&bi(e,t,ld)}function Ci(e,t){return un(t,function(t){return cu(e[t])})}function wi(e,t){t=Ma(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[ys(t[r++])];return r&&r==i?e:n}function Ti(e,t,n){var r=t(e);return J(e)?r:mn(r,n(e))}function Ei(e){return e==null?e===n?ne:P:bt&&bt in Xe(e)?Io(e):ss(e)}function Di(e,t){return e>t}function Oi(e,t){return e!=null&&H.call(e,t)}function ki(e,t){return e!=null&&t in Xe(e)}function Ai(e,t,n){return e>=Rt(t,n)&&e<Nt(t,n)}function ji(e,t,r){for(var i=r?fn:dn,a=e[0].length,o=e.length,s=o,c=je(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=pn(d,Fn(t))),l=Rt(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new zr(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?Ln(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?Ln(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function Mi(e,t,n,r){return xi(e,function(e,i,a){t(r,n(e),i,a)}),r}function Ni(e,t,r){t=Ma(t,e),e=ls(e,t);var i=e==null?e:e[ys(qs(t))];return i==null?n:an(i,e,r)}function Pi(e){return fu(e)&&Ei(e)==C}function Fi(e){return fu(e)&&Ei(e)==ie}function Ii(e){return fu(e)&&Ei(e)==D}function Li(e,t,n,r,i){return e===t?!0:e==null||t==null||!fu(e)&&!fu(t)?e!==e&&t!==t:Ri(e,t,n,r,Li,i)}function Ri(e,t,n,r,i,a){var o=J(e),s=J(t),c=o?w:zo(e),l=s?w:zo(t);c=c==C?F:c,l=l==C?F:l;var u=c==F,d=l==F,f=c==l;if(f&&eu(e)){if(!eu(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new Hr,o||Du(e)?wo(e,t,n,r,i,a):To(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&H.call(e,`__wrapped__`),m=d&&H.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new Hr,i(h,g,n,r,a)}}return f?(a||=new Hr,Eo(e,t,n,r,i,a)):!1}function zi(e){return fu(e)&&zo(e)==M}function Bi(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=Xe(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new Hr;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Li(d,u,3,i,f):p))return!1}}return!0}function Vi(e){return!du(e)||$o(e)?!1:(cu(e)?ut:Ve).test(bs(e))}function Hi(e){return fu(e)&&Ei(e)==R}function Ui(e){return fu(e)&&zo(e)==z}function Wi(e){return fu(e)&&uu(e.length)&&!!It[Ei(e)]}function Gi(e){return typeof e==`function`?e:e==null?vf:typeof e==`object`?J(e)?Zi(e[0],e[1]):Xi(e):jf(e)}function Ki(e){if(!ts(e))return Mt(e);var t=[];for(var n in Xe(e))H.call(e,n)&&n!=`constructor`&&t.push(n);return t}function qi(e){if(!du(e))return os(e);var t=ts(e),n=[];for(var r in e)r==`constructor`&&(t||!H.call(e,r))||n.push(r);return n}function Ji(e,t){return e<t}function Yi(e,t){var n=-1,r=Zl(e)?je(e.length):[];return fi(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Xi(e){var t=Po(e);return t.length==1&&t[0][2]?rs(t[0][0],t[0][1]):function(n){return n===e||Bi(n,e,t)}}function Zi(e,t){return Xo(e)&&ns(t)?rs(ys(e),t):function(r){var i=rd(r,e);return i===n&&i===t?ad(r,e):Li(t,i,3)}}function Qi(e,t,r,i,a){e!==t&&yi(t,function(o,s){if(a||=new Hr,du(o))$i(e,t,s,r,Qi,i,a);else{var c=i?i(ds(e,s),o,s+``,e,t,a):n;c===n&&(c=o),Qr(e,s,c)}},ud)}function $i(e,t,r,i,a,o,s){var c=ds(e,r),l=ds(t,r),u=s.get(l);if(u){Qr(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=J(l),m=!p&&eu(l),h=!p&&!m&&Du(l);d=l,p||m||h?J(c)?d=c:Ql(c)?d=Ka(c):m?(f=!1,d=Ia(l,!0)):h?(f=!1,d=Va(l,!0)):d=[]:xu(l)||Yl(l)?(d=c,Yl(c)?d=Ru(c):(!du(c)||cu(c))&&(d=Wo(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),Qr(e,r,d)}function ea(e,t){var r=e.length;if(r)return t+=t<0?r:0,Jo(t,r)?e[t]:n}function ta(e,t,n){t=t.length?pn(t,function(e){return J(e)?function(t){return wi(t,e.length===1?e[0]:e)}:e}):[vf];var r=-1;return t=pn(t,Fn(q())),An(Yi(e,function(e,n,i){return{criteria:pn(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Ua(e,t,n)})}function na(e,t){return ra(e,t,function(t,n){return ad(e,n)})}function ra(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=wi(e,o);n(s,o)&&fa(a,Ma(o,e),s)}return a}function ia(e){return function(t){return wi(t,e)}}function aa(e,t,n,r){var i=r?wn:Cn,a=-1,o=t.length,s=e;for(e===t&&(t=Ka(t)),n&&(s=pn(e,Fn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&_t.call(s,c,1),_t.call(e,c,1);return e}function oa(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;Jo(i)?_t.call(e,i,1):wa(e,i)}}return e}function sa(e,t){return e+Tt(Vt()*(t-e+1))}function ca(e,t,n,r){for(var i=-1,a=Nt(wt((t-e)/(n||1)),0),o=je(a);a--;)o[r?a:++i]=e,e+=n;return o}function la(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=Tt(t/2),t&&(e+=e);while(t);return n}function K(e,t){return ms(cs(e,t,vf),e+``)}function ua(e){return Yr(Od(e))}function da(e,t){var n=Od(e);return _s(n,oi(t,0,n.length))}function fa(e,t,r,i){if(!du(e))return e;t=Ma(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=ys(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=du(d)?d:Jo(t[a+1])?[]:{})}$r(c,l,u),c=c[l]}return e}var pa=yn?function(e,t){return yn.set(e,t),e}:vf,ma=xt?function(e,t){return xt(e,`toString`,{configurable:!0,enumerable:!1,value:mf(t),writable:!0})}:vf;function ha(e){return _s(Od(e))}function ga(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=je(i);++r<i;)a[r]=e[r+t];return a}function _a(e,t){var n;return fi(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function va(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Eu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return ya(e,t,vf,n)}function ya(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Eu(t),u=t===n;a<o;){var d=Tt((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Eu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return Rt(o,b)}function ba(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Kl(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function xa(e){return typeof e==`number`?e:Eu(e)?v:+e}function Sa(e){if(typeof e==`string`)return e;if(J(e))return pn(e,Sa)+``;if(Eu(e))return pr?pr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ca(e,t,n){var r=-1,i=dn,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=fn;else if(a>=200){var l=t?null:vo(e);if(l)return Zn(l);o=!1,i=Ln,c=new zr}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function wa(e,t){t=Ma(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=ys(t[n]);if(i===`__proto__`&&!H.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=ls(e,t);return a==null||delete a[ys(qs(t))]}function Ta(e,t,n,r){return fa(e,t,n(wi(e,t)),r)}function Ea(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ga(e,r?0:a,r?a+1:i):ga(e,r?a+1:0,r?i:a)}function Da(e,t){var n=e;return n instanceof _r&&(n=n.value()),hn(t,function(e,t){return t.func.apply(t.thisArg,mn([e],t.args))},n)}function Oa(e,t,n){var r=e.length;if(r<2)return r?Ca(e[0]):[];for(var i=-1,a=je(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=di(a[i]||o,e[s],t,n));return Ca(vi(a,1),t,n)}function ka(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Aa(e){return Ql(e)?e:[]}function ja(e){return typeof e==`function`?e:vf}function Ma(e,t){return J(e)?e:Xo(e,t)?[e]:vs(Bu(e))}var Na=K;function Pa(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ga(e,t,r)}var Fa=St||function(e){return Kt.clearTimeout(e)};function Ia(e,t){if(t)return e.slice();var n=e.length,r=U?U(n):new e.constructor(n);return e.copy(r),r}function La(e){var t=new e.constructor(e.byteLength);return new pt(t).set(new pt(e)),t}function Ra(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function za(e){var t=new e.constructor(e.source,Re.exec(e));return t.lastIndex=e.lastIndex,t}function Ba(e){return fr?Xe(fr.call(e)):{}}function Va(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ha(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Eu(e),s=t!==n,c=t===null,l=t===t,u=Eu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Ua(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Ha(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Wa(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Nt(a-o,0),u=je(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ga(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Nt(a-s,0),d=je(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function Ka(e,t){var n=-1,r=e.length;for(t||=je(r);++n<r;)t[n]=e[n];return t}function qa(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?ii(r,c,l):$r(r,c,l)}return r}function Ja(e,t){return qa(e,Lo(e),t)}function Ya(e,t){return qa(e,Ro(e),t)}function Xa(e,t){return function(n,r){var i=J(n)?on:ti,a=t?t():{};return i(n,e,q(r,2),a)}}function Za(e){return K(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&Yo(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=Xe(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function Qa(e,t){return function(n,r){if(n==null)return n;if(!Zl(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Xe(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function $a(e){return function(t,n,r){for(var i=-1,a=Xe(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function eo(e,t,n){var r=t&o,i=ro(e);function a(){return(this&&this!==Kt&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function to(e){return function(t){t=Bu(t);var r=Gn(t)?nr(t):n,i=r?r[0]:t.charAt(0),a=r?Pa(r,1).join(``):t.slice(1);return i[e]()+a}}function no(e){return function(t){return hn(lf(Fd(t).replace(Ot,``)),e,``)}}function ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=mr(e.prototype),r=e.apply(n,t);return du(r)?r:n}}function io(e,t,r){var i=ro(e);function a(){for(var o=arguments.length,s=je(o),c=o,l=Mo(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:Xn(s,l);return o-=u.length,o<r?go(e,t,so,a.placeholder,n,s,u,n,n,r-o):an(this&&this!==Kt&&this instanceof a?i:e,this,s)}return a}function ao(e){return function(t,r,i){var a=Xe(t);if(!Zl(t)){var o=q(r,3);t=ld(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function oo(e){return Do(function(t){var i=t.length,a=i,o=gr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new $e(r);if(o&&!l&&jo(s)==`wrapper`)var l=new gr([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=jo(s),m=d==`wrapper`?Ao(s):n;l=m&&Qo(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[jo(m[0])].apply(l,m[3]):s.length==1&&Qo(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&J(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function so(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:ro(e);function C(){for(var n=arguments.length,o=je(n),s=n;s--;)o[s]=arguments[s];if(b)var c=Mo(C),l=Bn(o,c);if(i&&(o=Wa(o,i,a,b)),u&&(o=Ga(o,u,d,b)),n-=l,b&&n<g){var f=Xn(o,c);return go(e,t,so,C.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,w=y?m[e]:e;return n=o.length,p?o=us(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==Kt&&this instanceof C&&(w=S||ro(w)),w.apply(m,o)}return C}function co(e,t){return function(n,r){return Mi(n,e,t(r),{})}}function lo(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=Sa(r),i=Sa(i)):(r=xa(r),i=xa(i)),a=e(r,i)}return a}}function uo(e){return Do(function(t){return t=pn(t,Fn(q())),K(function(n){var r=this;return e(t,function(e){return an(e,r,n)})})})}function fo(e,t){t=t===n?` `:Sa(t);var r=t.length;if(r<2)return r?la(t,e):t;var i=la(t,wt(e/tr(t)));return Gn(t)?Pa(nr(i),0,e).join(``):i.slice(0,e)}function po(e,t,n,r){var i=t&o,a=ro(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=je(l+o),d=this&&this!==Kt&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return an(d,i?n:this,u)}return s}function mo(e){return function(t,r,i){return i&&typeof i!=`number`&&Yo(t,r,i)&&(r=i=n),t=Pu(t),r===n?(r=t,t=0):r=Pu(r),i=i===n?t<r?1:-1:Pu(i),ca(t,r,i,e)}}function ho(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Lu(t),n=Lu(n)),e(t,n)}}function go(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return Qo(e)&&fs(S,x),S.placeholder=i,hs(S,e,t)}function _o(e){var t=Ye[e];return function(e,n){if(e=Lu(e),n=n==null?0:Rt(Fu(n),292),n&&At(e)){var r=(Bu(e)+`e`).split(`e`);return r=(Bu(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var vo=Xt&&1/Zn(new Xt([,-0]))[1]==h?function(e){return new Xt(e)}:Ef;function yo(e){return function(t){var n=zo(t);return n==M?Jn(t):n==z?Qn(t):Nn(t,e(t))}}function bo(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new $e(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Nt(Fu(m),0),h=h===n?h:Fu(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Ao(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&as(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Nt(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=eo(e,t,i);else S=t==c||t==l?io(e,t,h):(t==u||t==(o|u))&&!f.length?po(e,t,i,a):so.apply(n,x);return hs((b?pa:fs)(S,x),e,t)}function xo(e,t,r,i){return e===n||Kl(e,nt[r])&&!H.call(i,r)?t:e}function So(e,t,r,i,a,o){return du(e)&&du(t)&&(o.set(t,e),Qi(e,t,n,So,o),o.delete(t)),e}function Co(e){return xu(e)?n:e}function wo(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new zr:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!_n(t,function(e,t){if(!Ln(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function To(e,t,n,r,i,a,o){switch(n){case ae:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ie:return!(e.byteLength!=t.byteLength||!a(new pt(e),new pt(t)));case E:case D:case N:return Kl(+e,+t);case k:return e.name==t.name&&e.message==t.message;case R:case ee:return e==t+``;case M:var s=Jn;case z:var c=r&1;if(s||=Zn,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=wo(s(e),s(t),r,i,a,o);return o.delete(e),u;case te:if(fr)return fr.call(e)==fr.call(t)}return!1}function Eo(e,t,r,i,a,o){var s=r&1,c=Oo(e),l=c.length;if(l!=Oo(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:H.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function Do(e){return ms(cs(e,n,Is),e+``)}function Oo(e){return Ti(e,ld,Lo)}function ko(e){return Ti(e,ud,Ro)}var Ao=yn?function(e){return yn.get(e)}:Ef;function jo(e){for(var t=e.name+``,n=On[t],r=H.call(On,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function Mo(e){return(H.call(G,`placeholder`)?G:e).placeholder}function q(){var e=G.iteratee||yf;return e=e===yf?Gi:e,arguments.length?e(arguments[0],arguments[1]):e}function No(e,t){var n=e.__data__;return Zo(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Po(e){for(var t=ld(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ns(i)]}return t}function Fo(e,t){var r=Wn(e,t);return Vi(r)?r:n}function Io(e){var t=H.call(e,bt),r=e[bt];try{e[bt]=n;var i=!0}catch{}var a=st.call(e);return i&&(t?e[bt]=r:delete e[bt]),a}var Lo=Et?function(e){return e==null?[]:(e=Xe(e),un(Et(e),function(t){return gt.call(e,t)}))}:Ff,Ro=Et?function(e){for(var t=[];e;)mn(t,Lo(e)),e=mt(e);return t}:Ff,zo=Ei;(Gt&&zo(new Gt(new ArrayBuffer(1)))!=ae||qt&&zo(new qt)!=M||Jt&&zo(Jt.resolve())!=I||Xt&&zo(new Xt)!=z||Zt&&zo(new Zt)!=B)&&(zo=function(e){var t=Ei(e),r=t==F?e.constructor:n,i=r?bs(r):``;if(i)switch(i){case $n:return ae;case ar:return M;case or:return I;case lr:return z;case ur:return B}return t});function Bo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=Rt(t,e+o);break;case`takeRight`:e=Nt(e,t-o)}}return{start:e,end:t}}function Vo(e){var t=e.match(Me);return t?t[1].split(Ne):[]}function Ho(e,t,n){t=Ma(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=ys(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&uu(i)&&Jo(o,i)&&(J(e)||Yl(e)))}function Uo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&H.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function Wo(e){return typeof e.constructor==`function`&&!ts(e)?mr(mt(e)):{}}function Go(e,t,n){var r=e.constructor;switch(t){case ie:return La(e);case E:case D:return new r(+e);case ae:return Ra(e,n);case oe:case se:case ce:case le:case ue:case de:case fe:case pe:case me:return Va(e,n);case M:return new r;case N:case ee:return new r(e);case R:return za(e);case z:return new r;case te:return Ba(e)}}function Ko(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(V,`{
/* [wrapped with `+t+`] */
`)}function qo(e){return J(e)||Yl(e)||!!(vt&&e&&e[vt])}function Jo(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&Ue.test(e))&&e>-1&&e%1==0&&e<t}function Yo(e,t,n){if(!du(n))return!1;var r=typeof t;return(r==`number`?Zl(n)&&Jo(t,n.length):r==`string`&&t in n)?Kl(n[t],e):!1}function Xo(e,t){if(J(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Eu(e)?!0:Ee.test(e)||!Te.test(e)||t!=null&&e in Xe(t)}function Zo(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Qo(e){var t=jo(e),n=G[t];if(typeof n!=`function`||!(t in _r.prototype))return!1;if(e===n)return!0;var r=Ao(n);return!!r&&e===r[0]}function $o(e){return!!ot&&ot in e}var es=rt?cu:If;function ts(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||nt)}function ns(e){return e===e&&!du(e)}function rs(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in Xe(r))}}function is(e){var t=Ol(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function as(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?Wa(m,d,t[4]):d,e[4]=m?Xn(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?Ga(m,d,t[6]):d,e[6]=m?Xn(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:Rt(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function os(e){var t=[];if(e!=null)for(var n in Xe(e))t.push(n);return t}function ss(e){return st.call(e)}function cs(e,t,r){return t=Nt(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Nt(n.length-t,0),o=je(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=je(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),an(e,this,s)}}function ls(e,t){return t.length<2?e:wi(e,ga(t,0,-1))}function us(e,t){for(var r=e.length,i=Rt(t.length,r),a=Ka(e);i--;){var o=t[i];e[i]=Jo(o,r)?a[o]:n}return e}function ds(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var fs=gs(pa),ps=W||function(e,t){return Kt.setTimeout(e,t)},ms=gs(ma);function hs(e,t,n){var r=t+``;return ms(e,Ko(r,xs(Vo(r),n)))}function gs(e){var t=0,r=0;return function(){var i=zt(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function _s(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=sa(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var vs=is(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(De,function(e,n,r,i){t.push(r?i.replace(Ie,`$1`):n||e)}),t});function ys(e){if(typeof e==`string`||Eu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function bs(e){if(e!=null){try{return it.call(e)}catch{}try{return e+``}catch{}}return``}function xs(e,t){return sn(S,function(n){var r=`_.`+n[0];t&n[1]&&!dn(e,r)&&e.push(r)}),e.sort()}function Ss(e){if(e instanceof _r)return e.clone();var t=new gr(e.__wrapped__,e.__chain__);return t.__actions__=Ka(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Cs(e,t,r){t=(r?Yo(e,t,r):t===n)?1:Nt(Fu(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=je(wt(i/t));a<i;)s[o++]=ga(e,a,a+=t);return s}function ws(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ts(){var e=arguments.length;if(!e)return[];for(var t=je(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return mn(J(n)?Ka(n):[n],vi(t,1))}var Es=K(function(e,t){return Ql(e)?di(e,vi(t,1,Ql,!0)):[]}),Ds=K(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?di(e,vi(t,1,Ql,!0),q(r,2)):[]}),Os=K(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?di(e,vi(t,1,Ql,!0),n,r):[]});function ks(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),ga(e,t<0?0:t,i)):[]}function As(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,0,t<0?0:t)):[]}function js(e,t){return e&&e.length?Ea(e,q(t,3),!0,!0):[]}function Ms(e,t){return e&&e.length?Ea(e,q(t,3),!0):[]}function Ns(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&Yo(e,t,n)&&(n=0,r=i),gi(e,t,n,r)):[]}function Ps(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Nt(r+i,0)),Sn(e,q(t,3),i)}function Fs(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=Fu(r),a=r<0?Nt(i+a,0):Rt(a,i-1)),Sn(e,q(t,3),a,!0)}function Is(e){return e!=null&&e.length?vi(e,1):[]}function Ls(e){return e!=null&&e.length?vi(e,h):[]}function Rs(e,t){return e!=null&&e.length?(t=t===n?1:Fu(t),vi(e,t)):[]}function zs(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];ii(r,i[0],i[1])}return r}function Bs(e){return e&&e.length?e[0]:n}function Vs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Nt(r+i,0)),Cn(e,t,i)}function Hs(e){return e!=null&&e.length?ga(e,0,-1):[]}var Us=K(function(e){var t=pn(e,Aa);return t.length&&t[0]===e[0]?ji(t):[]}),Ws=K(function(e){var t=qs(e),r=pn(e,Aa);return t===qs(r)?t=n:r.pop(),r.length&&r[0]===e[0]?ji(r,q(t,2)):[]}),Gs=K(function(e){var t=qs(e),r=pn(e,Aa);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?ji(r,n,t):[]});function Ks(e,t){return e==null?``:jt.call(e,t)}function qs(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Js(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=Fu(r),a=a<0?Nt(i+a,0):Rt(a,i-1)),t===t?er(e,t,a):Sn(e,Tn,a,!0)}function Ys(e,t){return e&&e.length?ea(e,Fu(t)):n}var Xs=K(Zs);function Zs(e,t){return e&&e.length&&t&&t.length?aa(e,t):e}function Qs(e,t,n){return e&&e.length&&t&&t.length?aa(e,t,q(n,2)):e}function $s(e,t,r){return e&&e.length&&t&&t.length?aa(e,t,n,r):e}var ec=Do(function(e,t){var n=e==null?0:e.length,r=ai(e,t);return oa(e,pn(t,function(e){return Jo(e,n)?+e:e}).sort(Ha)),r});function tc(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=q(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return oa(e,i),n}function nc(e){return e==null?e:Wt.call(e)}function rc(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&Yo(e,t,r)?(t=0,r=i):(t=t==null?0:Fu(t),r=r===n?i:Fu(r)),ga(e,t,r)):[]}function ic(e,t){return va(e,t)}function ac(e,t,n){return ya(e,t,q(n,2))}function oc(e,t){var n=e==null?0:e.length;if(n){var r=va(e,t);if(r<n&&Kl(e[r],t))return r}return-1}function sc(e,t){return va(e,t,!0)}function cc(e,t,n){return ya(e,t,q(n,2),!0)}function lc(e,t){if(e!=null&&e.length){var n=va(e,t,!0)-1;if(Kl(e[n],t))return n}return-1}function uc(e){return e&&e.length?ba(e):[]}function dc(e,t){return e&&e.length?ba(e,q(t,2)):[]}function fc(e){var t=e==null?0:e.length;return t?ga(e,1,t):[]}function pc(e,t,r){return e&&e.length?(t=r||t===n?1:Fu(t),ga(e,0,t<0?0:t)):[]}function mc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,t<0?0:t,i)):[]}function hc(e,t){return e&&e.length?Ea(e,q(t,3),!1,!0):[]}function gc(e,t){return e&&e.length?Ea(e,q(t,3)):[]}var _c=K(function(e){return Ca(vi(e,1,Ql,!0))}),vc=K(function(e){var t=qs(e);return Ql(t)&&(t=n),Ca(vi(e,1,Ql,!0),q(t,2))}),yc=K(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Ca(vi(e,1,Ql,!0),n,t)});function bc(e){return e&&e.length?Ca(e):[]}function xc(e,t){return e&&e.length?Ca(e,q(t,2)):[]}function Sc(e,t){return t=typeof t==`function`?t:n,e&&e.length?Ca(e,n,t):[]}function Cc(e){if(!(e&&e.length))return[];var t=0;return e=un(e,function(e){if(Ql(e))return t=Nt(e.length,t),!0}),Mn(t,function(t){return pn(e,Dn(t))})}function wc(e,t){if(!(e&&e.length))return[];var r=Cc(e);return t==null?r:pn(r,function(e){return an(t,n,e)})}var Tc=K(function(e,t){return Ql(e)?di(e,t):[]}),Ec=K(function(e){return Oa(un(e,Ql))}),Dc=K(function(e){var t=qs(e);return Ql(t)&&(t=n),Oa(un(e,Ql),q(t,2))}),Oc=K(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Oa(un(e,Ql),n,t)}),kc=K(Cc);function Ac(e,t){return ka(e||[],t||[],$r)}function jc(e,t){return ka(e||[],t||[],fa)}var Mc=K(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,wc(e,r)});function Nc(e){var t=G(e);return t.__chain__=!0,t}function Pc(e,t){return t(e),e}function Fc(e,t){return t(e)}var Ic=Do(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return ai(t,e)};return t>1||this.__actions__.length||!(i instanceof _r)||!Jo(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Fc,args:[a],thisArg:n}),new gr(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Lc(){return Nc(this)}function Rc(){return new gr(this.value(),this.__chain__)}function zc(){this.__values__===n&&(this.__values__=Nu(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function Bc(){return this}function Vc(e){for(var t,r=this;r instanceof hr;){var i=Ss(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function Hc(){var e=this.__wrapped__;if(e instanceof _r){var t=e;return this.__actions__.length&&(t=new _r(this)),t=t.reverse(),t.__actions__.push({func:Fc,args:[nc],thisArg:n}),new gr(t,this.__chain__)}return this.thru(nc)}function Uc(){return Da(this.__wrapped__,this.__actions__)}var Wc=Xa(function(e,t,n){H.call(e,n)?++e[n]:ii(e,n,1)});function Gc(e,t,r){var i=J(e)?ln:mi;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}function Kc(e,t){return(J(e)?un:_i)(e,q(t,3))}var qc=ao(Ps),Jc=ao(Fs);function Yc(e,t){return vi(il(e,t),1)}function Xc(e,t){return vi(il(e,t),h)}function Zc(e,t,r){return r=r===n?1:Fu(r),vi(il(e,t),r)}function Qc(e,t){return(J(e)?sn:fi)(e,q(t,3))}function $c(e,t){return(J(e)?cn:pi)(e,q(t,3))}var el=Xa(function(e,t,n){H.call(e,n)?e[n].push(t):ii(e,n,[t])});function tl(e,t,n,r){e=Zl(e)?e:Od(e),n=n&&!r?Fu(n):0;var i=e.length;return n<0&&(n=Nt(i+n,0)),Tu(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Cn(e,t,n)>-1}var nl=K(function(e,t,n){var r=-1,i=typeof t==`function`,a=Zl(e)?je(e.length):[];return fi(e,function(e){a[++r]=i?an(t,e,n):Ni(e,t,n)}),a}),rl=Xa(function(e,t,n){ii(e,n,t)});function il(e,t){return(J(e)?pn:Yi)(e,q(t,3))}function al(e,t,r,i){return e==null?[]:(J(t)||(t=t==null?[]:[t]),r=i?n:r,J(r)||(r=r==null?[]:[r]),ta(e,t,r))}var ol=Xa(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function sl(e,t,n){var r=J(e)?hn:kn,i=arguments.length<3;return r(e,q(t,4),n,i,fi)}function cl(e,t,n){var r=J(e)?gn:kn,i=arguments.length<3;return r(e,q(t,4),n,i,pi)}function ll(e,t){return(J(e)?un:_i)(e,kl(q(t,3)))}function ul(e){return(J(e)?Yr:ua)(e)}function dl(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),(J(e)?Xr:da)(e,t)}function fl(e){return(J(e)?Zr:ha)(e)}function pl(e){if(e==null)return 0;if(Zl(e))return Tu(e)?tr(e):e.length;var t=zo(e);return t==M||t==z?e.size:Ki(e).length}function ml(e,t,r){var i=J(e)?_n:_a;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}var hl=K(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Yo(e,t[0],t[1])?t=[]:n>2&&Yo(t[0],t[1],t[2])&&(t=[t[0]]),ta(e,vi(t,1),[])}),gl=Ct||function(){return Kt.Date.now()};function _l(e,t){if(typeof t!=`function`)throw new $e(r);return e=Fu(e),function(){if(--e<1)return t.apply(this,arguments)}}function vl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,bo(e,f,n,n,n,n,t)}function yl(e,t){var i;if(typeof t!=`function`)throw new $e(r);return e=Fu(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var bl=K(function(e,t,n){var r=o;if(n.length){var i=Xn(n,Mo(bl));r|=u}return bo(e,r,t,n,i)}),xl=K(function(e,t,n){var r=o|s;if(n.length){var i=Xn(n,Mo(xl));r|=u}return bo(t,r,e,n,i)});function Sl(e,t,r){t=r?n:t;var i=bo(e,c,n,n,n,n,n,t);return i.placeholder=Sl.placeholder,i}function Cl(e,t,r){t=r?n:t;var i=bo(e,l,n,n,n,n,n,t);return i.placeholder=Cl.placeholder,i}function wl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new $e(r);t=Lu(t)||0,du(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Nt(Lu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=ps(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?Rt(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=gl();if(v(e))return b(e);l=ps(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&Fa(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(gl())}function C(){var e=gl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return Fa(l),l=ps(y,t),h(u)}return l===n&&(l=ps(y,t)),c}return C.cancel=x,C.flush=S,C}var Tl=K(function(e,t){return ui(e,1,t)}),El=K(function(e,t,n){return ui(e,Lu(t)||0,n)});function Dl(e){return bo(e,m)}function Ol(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new $e(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ol.Cache||Nr),n}Ol.Cache=Nr;function kl(e){if(typeof e!=`function`)throw new $e(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Al(e){return yl(2,e)}var jl=Na(function(e,t){t=t.length==1&&J(t[0])?pn(t[0],Fn(q())):pn(vi(t,1),Fn(q()));var n=t.length;return K(function(r){for(var i=-1,a=Rt(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return an(e,this,r)})}),Ml=K(function(e,t){return bo(e,u,n,t,Xn(t,Mo(Ml)))}),Nl=K(function(e,t){return bo(e,d,n,t,Xn(t,Mo(Nl)))}),Pl=Do(function(e,t){return bo(e,p,n,n,n,t)});function Fl(e,t){if(typeof e!=`function`)throw new $e(r);return t=t===n?t:Fu(t),K(e,t)}function Il(e,t){if(typeof e!=`function`)throw new $e(r);return t=t==null?0:Nt(Fu(t),0),K(function(n){var r=n[t],i=Pa(n,0,t);return r&&mn(i,r),an(e,this,i)})}function Ll(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new $e(r);return du(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),wl(e,t,{leading:i,maxWait:t,trailing:a})}function Rl(e){return vl(e,1)}function zl(e,t){return Ml(ja(t),e)}function Bl(){if(!arguments.length)return[];var e=arguments[0];return J(e)?e:[e]}function Vl(e){return si(e,4)}function Hl(e,t){return t=typeof t==`function`?t:n,si(e,4,t)}function Ul(e){return si(e,5)}function Wl(e,t){return t=typeof t==`function`?t:n,si(e,5,t)}function Gl(e,t){return t==null||li(e,t,ld(t))}function Kl(e,t){return e===t||e!==e&&t!==t}var ql=ho(Di),Jl=ho(function(e,t){return e>=t}),Yl=Pi(function(){return arguments}())?Pi:function(e){return fu(e)&&H.call(e,`callee`)&&!gt.call(e,`callee`)},J=je.isArray,Xl=Qt?Fn(Qt):Fi;function Zl(e){return e!=null&&uu(e.length)&&!cu(e)}function Ql(e){return fu(e)&&Zl(e)}function $l(e){return e===!0||e===!1||fu(e)&&Ei(e)==E}var eu=Dt||If,tu=$t?Fn($t):Ii;function nu(e){return fu(e)&&e.nodeType===1&&!xu(e)}function ru(e){if(e==null)return!0;if(Zl(e)&&(J(e)||typeof e==`string`||typeof e.splice==`function`||eu(e)||Du(e)||Yl(e)))return!e.length;var t=zo(e);if(t==M||t==z)return!e.size;if(ts(e))return!Ki(e).length;for(var n in e)if(H.call(e,n))return!1;return!0}function iu(e,t){return Li(e,t)}function au(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Li(e,t,n,r):!!i}function ou(e){if(!fu(e))return!1;var t=Ei(e);return t==k||t==O||typeof e.message==`string`&&typeof e.name==`string`&&!xu(e)}function su(e){return typeof e==`number`&&At(e)}function cu(e){if(!du(e))return!1;var t=Ei(e);return t==A||t==j||t==T||t==L}function lu(e){return typeof e==`number`&&e==Fu(e)}function uu(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function du(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function fu(e){return typeof e==`object`&&!!e}var pu=en?Fn(en):zi;function mu(e,t){return e===t||Bi(e,t,Po(t))}function hu(e,t,r){return r=typeof r==`function`?r:n,Bi(e,t,Po(t),r)}function gu(e){return bu(e)&&e!=+e}function _u(e){if(es(e))throw new qe(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return Vi(e)}function vu(e){return e===null}function yu(e){return e==null}function bu(e){return typeof e==`number`||fu(e)&&Ei(e)==N}function xu(e){if(!fu(e)||Ei(e)!=F)return!1;var t=mt(e);if(t===null)return!0;var n=H.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&it.call(n)==ct}var Su=tn?Fn(tn):Hi;function Cu(e){return lu(e)&&e>=-g&&e<=g}var wu=nn?Fn(nn):Ui;function Tu(e){return typeof e==`string`||!J(e)&&fu(e)&&Ei(e)==ee}function Eu(e){return typeof e==`symbol`||fu(e)&&Ei(e)==te}var Du=rn?Fn(rn):Wi;function Ou(e){return e===n}function ku(e){return fu(e)&&zo(e)==B}function Au(e){return fu(e)&&Ei(e)==re}var ju=ho(Ji),Mu=ho(function(e,t){return e<=t});function Nu(e){if(!e)return[];if(Zl(e))return Tu(e)?nr(e):Ka(e);if(yt&&e[yt])return qn(e[yt]());var t=zo(e);return(t==M?Jn:t==z?Zn:Od)(e)}function Pu(e){return e?(e=Lu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function Fu(e){var t=Pu(e),n=t%1;return t===t?n?t-n:t:0}function Iu(e){return e?oi(Fu(e),0,y):0}function Lu(e){if(typeof e==`number`)return e;if(Eu(e))return v;if(du(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=du(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Pn(e);var n=Be.test(e);return n||He.test(e)?Ut(e.slice(2),n?2:8):ze.test(e)?v:+e}function Ru(e){return qa(e,ud(e))}function zu(e){return e?oi(Fu(e),-g,g):e===0?e:0}function Bu(e){return e==null?``:Sa(e)}var Vu=Za(function(e,t){if(ts(t)||Zl(t)){qa(t,ld(t),e);return}for(var n in t)H.call(t,n)&&$r(e,n,t[n])}),Hu=Za(function(e,t){qa(t,ud(t),e)}),Uu=Za(function(e,t,n,r){qa(t,ud(t),e,r)}),Wu=Za(function(e,t,n,r){qa(t,ld(t),e,r)}),Gu=Do(ai);function Ku(e,t){var n=mr(e);return t==null?n:ni(n,t)}var qu=K(function(e,t){e=Xe(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&Yo(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=ud(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Kl(d,nt[u])&&!H.call(e,u))&&(e[u]=o[u])}return e}),Ju=K(function(e){return e.push(n,So),an(md,n,e)});function Yu(e,t){return xn(e,q(t,3),xi)}function Xu(e,t){return xn(e,q(t,3),Si)}function Zu(e,t){return e==null?e:yi(e,q(t,3),ud)}function Qu(e,t){return e==null?e:bi(e,q(t,3),ud)}function $u(e,t){return e&&xi(e,q(t,3))}function ed(e,t){return e&&Si(e,q(t,3))}function td(e){return e==null?[]:Ci(e,ld(e))}function nd(e){return e==null?[]:Ci(e,ud(e))}function rd(e,t,r){var i=e==null?n:wi(e,t);return i===n?r:i}function id(e,t){return e!=null&&Ho(e,t,Oi)}function ad(e,t){return e!=null&&Ho(e,t,ki)}var od=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=st.call(t)),e[t]=n},mf(vf)),sd=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=st.call(t)),H.call(e,t)?e[t].push(n):e[t]=[n]},q),cd=K(Ni);function ld(e){return Zl(e)?Jr(e):Ki(e)}function ud(e){return Zl(e)?Jr(e,!0):qi(e)}function dd(e,t){var n={};return t=q(t,3),xi(e,function(e,r,i){ii(n,t(e,r,i),e)}),n}function fd(e,t){var n={};return t=q(t,3),xi(e,function(e,r,i){ii(n,r,t(e,r,i))}),n}var pd=Za(function(e,t,n){Qi(e,t,n)}),md=Za(function(e,t,n,r){Qi(e,t,n,r)}),hd=Do(function(e,t){var n={};if(e==null)return n;var r=!1;t=pn(t,function(t){return t=Ma(t,e),r||=t.length>1,t}),qa(e,ko(e),n),r&&(n=si(n,7,Co));for(var i=t.length;i--;)wa(n,t[i]);return n});function gd(e,t){return vd(e,kl(q(t)))}var _d=Do(function(e,t){return e==null?{}:na(e,t)});function vd(e,t){if(e==null)return{};var n=pn(ko(e),function(e){return[e]});return t=q(t),ra(e,n,function(e,n){return t(e,n[0])})}function yd(e,t,r){t=Ma(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[ys(t[i])];o===n&&(i=a,o=r),e=cu(o)?o.call(e):o}return e}function bd(e,t,n){return e==null?e:fa(e,t,n)}function xd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:fa(e,t,r,i)}var Sd=yo(ld),Cd=yo(ud);function wd(e,t,n){var r=J(e),i=r||eu(e)||Du(e);if(t=q(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:du(e)&&cu(a)?mr(mt(e)):{}}return(i?sn:xi)(e,function(e,r,i){return t(n,e,r,i)}),n}function Td(e,t){return e==null||wa(e,t)}function Ed(e,t,n){return e==null?e:Ta(e,t,ja(n))}function Dd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:Ta(e,t,ja(r),i)}function Od(e){return e==null?[]:In(e,ld(e))}function kd(e){return e==null?[]:In(e,ud(e))}function Ad(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Lu(r),r=r===r?r:0),t!==n&&(t=Lu(t),t=t===t?t:0),oi(Lu(e),t,r)}function jd(e,t,r){return t=Pu(t),r===n?(r=t,t=0):r=Pu(r),e=Lu(e),Ai(e,t,r)}function Md(e,t,r){if(r&&typeof r!=`boolean`&&Yo(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=Pu(e),t===n?(t=e,e=0):t=Pu(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=Vt();return Rt(e+a*(t-e+Ht(`1e-`+((a+``).length-1))),t)}return sa(e,t)}var Nd=no(function(e,t,n){return t=t.toLowerCase(),e+(n?Pd(t):t)});function Pd(e){return cf(Bu(e).toLowerCase())}function Fd(e){return e=Bu(e),e&&e.replace(We,Vn).replace(kt,``)}function Id(e,t,r){e=Bu(e),t=Sa(t);var i=e.length;r=r===n?i:oi(Fu(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Ld(e){return e=Bu(e),e&&xe.test(e)?e.replace(ye,Hn):e}function Rd(e){return e=Bu(e),e&&ke.test(e)?e.replace(Oe,`\\$&`):e}var zd=no(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Bd=no(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Vd=to(`toLowerCase`);function Hd(e,t,n){e=Bu(e),t=Fu(t);var r=t?tr(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return fo(Tt(i),n)+e+fo(wt(i),n)}function Ud(e,t,n){e=Bu(e),t=Fu(t);var r=t?tr(e):0;return t&&r<t?e+fo(t-r,n):e}function Wd(e,t,n){e=Bu(e),t=Fu(t);var r=t?tr(e):0;return t&&r<t?fo(t-r,n)+e:e}function Gd(e,t,n){return n||t==null?t=0:t&&=+t,Bt(Bu(e).replace(Ae,``),t||0)}function Kd(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),la(Bu(e),t)}function qd(){var e=arguments,t=Bu(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Jd=no(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Yd(e,t,r){return r&&typeof r!=`number`&&Yo(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=Bu(e),e&&(typeof t==`string`||t!=null&&!Su(t))&&(t=Sa(t),!t&&Gn(e))?Pa(nr(e),0,r):e.split(t,r)):[]}var Xd=no(function(e,t,n){return e+(n?` `:``)+cf(t)});function Zd(e,t,n){return e=Bu(e),n=n==null?0:oi(Fu(n),0,e.length),t=Sa(t),e.slice(n,n+t.length)==t}function Qd(e,t,r){var i=G.templateSettings;r&&Yo(e,t,r)&&(t=n),e=Bu(e),t=Wu({},t,i,xo);var a=Wu({},t.imports,i.imports,xo),o=ld(a),s=In(a,o);sn(o,function(e){if(Fe.test(e))throw new qe("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||Ge,f=`__p += '`,p=Ze((t.escape||Ge).source+`|`+d.source+`|`+(d===we?Le:Ge).source+`|`+(t.evaluate||Ge).source+`|$`,`g`),m=`//# sourceURL=`+(H.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++Ft+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(Ke,Un),n&&(c=!0,f+=`' +
__e(`+n+`) +
'`),a&&(l=!0,f+=`';
`+a+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),u=o+t.length,t}),f+=`';
`;var h=H.call(t,`variable`)&&t.variable;if(!h)f=`with (obj) {
`+f+`
}
`;else if(Fe.test(h))throw new qe("Invalid `variable` option passed into `_.template`");f=(l?f.replace(he,``):f).replace(ge,`$1`).replace(_e,`$1;`),f=`function(`+(h||`obj`)+`) {
`+(h?``:`obj || (obj = {});
`)+`var __t, __p = ''`+(c?`, __e = _.escape`:``)+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=uf(function(){return Je(o,m+`return `+f).apply(n,s)});if(g.source=f,ou(g))throw g;return g}function $d(e){return Bu(e).toLowerCase()}function ef(e){return Bu(e).toUpperCase()}function tf(e,t,r){if(e=Bu(e),e&&(r||t===n))return Pn(e);if(!e||!(t=Sa(t)))return e;var i=nr(e),a=nr(t);return Pa(i,Rn(i,a),zn(i,a)+1).join(``)}function nf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.slice(0,rr(e)+1);if(!e||!(t=Sa(t)))return e;var i=nr(e);return Pa(i,0,zn(i,nr(t))+1).join(``)}function rf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.replace(Ae,``);if(!e||!(t=Sa(t)))return e;var i=nr(e);return Pa(i,Rn(i,nr(t))).join(``)}function af(e,t){var r=30,i=`...`;if(du(t)){var a=`separator`in t?t.separator:a;r=`length`in t?Fu(t.length):r,i=`omission`in t?Sa(t.omission):i}e=Bu(e);var o=e.length;if(Gn(e)){var s=nr(e);o=s.length}if(r>=o)return e;var c=r-tr(i);if(c<1)return i;var l=s?Pa(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),Su(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=Ze(a.source,Bu(Re.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(Sa(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function of(e){return e=Bu(e),e&&be.test(e)?e.replace(ve,ir):e}var sf=no(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),cf=to(`toUpperCase`);function lf(e,t,r){return e=Bu(e),t=r?n:t,t===n?Kn(e)?sr(e):bn(e):e.match(t)||[]}var uf=K(function(e,t){try{return an(e,n,t)}catch(e){return ou(e)?e:new qe(e)}}),df=Do(function(e,t){return sn(t,function(t){t=ys(t),ii(e,t,bl(e[t],e))}),e});function ff(e){var t=e==null?0:e.length,n=q();return e=t?pn(e,function(e){if(typeof e[1]!=`function`)throw new $e(r);return[n(e[0]),e[1]]}):[],K(function(n){for(var r=-1;++r<t;){var i=e[r];if(an(i[0],this,n))return an(i[1],this,n)}})}function pf(e){return ci(si(e,1))}function mf(e){return function(){return e}}function hf(e,t){return e==null||e!==e?t:e}var gf=oo(),_f=oo(!0);function vf(e){return e}function yf(e){return Gi(typeof e==`function`?e:si(e,1))}function bf(e){return Xi(si(e,1))}function xf(e,t){return Zi(e,si(t,1))}var Sf=K(function(e,t){return function(n){return Ni(n,e,t)}}),Cf=K(function(e,t){return function(n){return Ni(e,n,t)}});function wf(e,t,n){var r=ld(t),i=Ci(t,r);n==null&&!(du(t)&&(i.length||!r.length))&&(n=t,t=e,e=this,i=Ci(t,ld(t)));var a=!(du(n)&&`chain`in n)||!!n.chain,o=cu(e);return sn(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ka(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,mn([this.value()],arguments))})}),e}function Tf(){return Kt._===this&&(Kt._=lt),this}function Ef(){}function Df(e){return e=Fu(e),K(function(t){return ea(t,e)})}var Of=uo(pn),kf=uo(ln),Af=uo(_n);function jf(e){return Xo(e)?Dn(ys(e)):ia(e)}function Mf(e){return function(t){return e==null?n:wi(e,t)}}var Nf=mo(),Pf=mo(!0);function Ff(){return[]}function If(){return!1}function Lf(){return{}}function Rf(){return``}function zf(){return!0}function Bf(e,t){if(e=Fu(e),e<1||e>g)return[];var n=y,r=Rt(e,y);t=q(t),e-=y;for(var i=Mn(r,t);++n<e;)t(n);return i}function Vf(e){return J(e)?pn(e,ys):Eu(e)?[e]:Ka(vs(Bu(e)))}function Hf(e){var t=++at;return Bu(e)+t}var Uf=lo(function(e,t){return e+t},0),Wf=_o(`ceil`),Gf=lo(function(e,t){return e/t},1),Kf=_o(`floor`);function qf(e){return e&&e.length?hi(e,vf,Di):n}function Jf(e,t){return e&&e.length?hi(e,q(t,2),Di):n}function Yf(e){return En(e,vf)}function Xf(e,t){return En(e,q(t,2))}function Zf(e){return e&&e.length?hi(e,vf,Ji):n}function Qf(e,t){return e&&e.length?hi(e,q(t,2),Ji):n}var $f=lo(function(e,t){return e*t},1),ep=_o(`round`),tp=lo(function(e,t){return e-t},0);function np(e){return e&&e.length?jn(e,vf):0}function rp(e,t){return e&&e.length?jn(e,q(t,2)):0}return G.after=_l,G.ary=vl,G.assign=Vu,G.assignIn=Hu,G.assignInWith=Uu,G.assignWith=Wu,G.at=Gu,G.before=yl,G.bind=bl,G.bindAll=df,G.bindKey=xl,G.castArray=Bl,G.chain=Nc,G.chunk=Cs,G.compact=ws,G.concat=Ts,G.cond=ff,G.conforms=pf,G.constant=mf,G.countBy=Wc,G.create=Ku,G.curry=Sl,G.curryRight=Cl,G.debounce=wl,G.defaults=qu,G.defaultsDeep=Ju,G.defer=Tl,G.delay=El,G.difference=Es,G.differenceBy=Ds,G.differenceWith=Os,G.drop=ks,G.dropRight=As,G.dropRightWhile=js,G.dropWhile=Ms,G.fill=Ns,G.filter=Kc,G.flatMap=Yc,G.flatMapDeep=Xc,G.flatMapDepth=Zc,G.flatten=Is,G.flattenDeep=Ls,G.flattenDepth=Rs,G.flip=Dl,G.flow=gf,G.flowRight=_f,G.fromPairs=zs,G.functions=td,G.functionsIn=nd,G.groupBy=el,G.initial=Hs,G.intersection=Us,G.intersectionBy=Ws,G.intersectionWith=Gs,G.invert=od,G.invertBy=sd,G.invokeMap=nl,G.iteratee=yf,G.keyBy=rl,G.keys=ld,G.keysIn=ud,G.map=il,G.mapKeys=dd,G.mapValues=fd,G.matches=bf,G.matchesProperty=xf,G.memoize=Ol,G.merge=pd,G.mergeWith=md,G.method=Sf,G.methodOf=Cf,G.mixin=wf,G.negate=kl,G.nthArg=Df,G.omit=hd,G.omitBy=gd,G.once=Al,G.orderBy=al,G.over=Of,G.overArgs=jl,G.overEvery=kf,G.overSome=Af,G.partial=Ml,G.partialRight=Nl,G.partition=ol,G.pick=_d,G.pickBy=vd,G.property=jf,G.propertyOf=Mf,G.pull=Xs,G.pullAll=Zs,G.pullAllBy=Qs,G.pullAllWith=$s,G.pullAt=ec,G.range=Nf,G.rangeRight=Pf,G.rearg=Pl,G.reject=ll,G.remove=tc,G.rest=Fl,G.reverse=nc,G.sampleSize=dl,G.set=bd,G.setWith=xd,G.shuffle=fl,G.slice=rc,G.sortBy=hl,G.sortedUniq=uc,G.sortedUniqBy=dc,G.split=Yd,G.spread=Il,G.tail=fc,G.take=pc,G.takeRight=mc,G.takeRightWhile=hc,G.takeWhile=gc,G.tap=Pc,G.throttle=Ll,G.thru=Fc,G.toArray=Nu,G.toPairs=Sd,G.toPairsIn=Cd,G.toPath=Vf,G.toPlainObject=Ru,G.transform=wd,G.unary=Rl,G.union=_c,G.unionBy=vc,G.unionWith=yc,G.uniq=bc,G.uniqBy=xc,G.uniqWith=Sc,G.unset=Td,G.unzip=Cc,G.unzipWith=wc,G.update=Ed,G.updateWith=Dd,G.values=Od,G.valuesIn=kd,G.without=Tc,G.words=lf,G.wrap=zl,G.xor=Ec,G.xorBy=Dc,G.xorWith=Oc,G.zip=kc,G.zipObject=Ac,G.zipObjectDeep=jc,G.zipWith=Mc,G.entries=Sd,G.entriesIn=Cd,G.extend=Hu,G.extendWith=Uu,wf(G,G),G.add=Uf,G.attempt=uf,G.camelCase=Nd,G.capitalize=Pd,G.ceil=Wf,G.clamp=Ad,G.clone=Vl,G.cloneDeep=Ul,G.cloneDeepWith=Wl,G.cloneWith=Hl,G.conformsTo=Gl,G.deburr=Fd,G.defaultTo=hf,G.divide=Gf,G.endsWith=Id,G.eq=Kl,G.escape=Ld,G.escapeRegExp=Rd,G.every=Gc,G.find=qc,G.findIndex=Ps,G.findKey=Yu,G.findLast=Jc,G.findLastIndex=Fs,G.findLastKey=Xu,G.floor=Kf,G.forEach=Qc,G.forEachRight=$c,G.forIn=Zu,G.forInRight=Qu,G.forOwn=$u,G.forOwnRight=ed,G.get=rd,G.gt=ql,G.gte=Jl,G.has=id,G.hasIn=ad,G.head=Bs,G.identity=vf,G.includes=tl,G.indexOf=Vs,G.inRange=jd,G.invoke=cd,G.isArguments=Yl,G.isArray=J,G.isArrayBuffer=Xl,G.isArrayLike=Zl,G.isArrayLikeObject=Ql,G.isBoolean=$l,G.isBuffer=eu,G.isDate=tu,G.isElement=nu,G.isEmpty=ru,G.isEqual=iu,G.isEqualWith=au,G.isError=ou,G.isFinite=su,G.isFunction=cu,G.isInteger=lu,G.isLength=uu,G.isMap=pu,G.isMatch=mu,G.isMatchWith=hu,G.isNaN=gu,G.isNative=_u,G.isNil=yu,G.isNull=vu,G.isNumber=bu,G.isObject=du,G.isObjectLike=fu,G.isPlainObject=xu,G.isRegExp=Su,G.isSafeInteger=Cu,G.isSet=wu,G.isString=Tu,G.isSymbol=Eu,G.isTypedArray=Du,G.isUndefined=Ou,G.isWeakMap=ku,G.isWeakSet=Au,G.join=Ks,G.kebabCase=zd,G.last=qs,G.lastIndexOf=Js,G.lowerCase=Bd,G.lowerFirst=Vd,G.lt=ju,G.lte=Mu,G.max=qf,G.maxBy=Jf,G.mean=Yf,G.meanBy=Xf,G.min=Zf,G.minBy=Qf,G.stubArray=Ff,G.stubFalse=If,G.stubObject=Lf,G.stubString=Rf,G.stubTrue=zf,G.multiply=$f,G.nth=Ys,G.noConflict=Tf,G.noop=Ef,G.now=gl,G.pad=Hd,G.padEnd=Ud,G.padStart=Wd,G.parseInt=Gd,G.random=Md,G.reduce=sl,G.reduceRight=cl,G.repeat=Kd,G.replace=qd,G.result=yd,G.round=ep,G.runInContext=e,G.sample=ul,G.size=pl,G.snakeCase=Jd,G.some=ml,G.sortedIndex=ic,G.sortedIndexBy=ac,G.sortedIndexOf=oc,G.sortedLastIndex=sc,G.sortedLastIndexBy=cc,G.sortedLastIndexOf=lc,G.startCase=Xd,G.startsWith=Zd,G.subtract=tp,G.sum=np,G.sumBy=rp,G.template=Qd,G.times=Bf,G.toFinite=Pu,G.toInteger=Fu,G.toLength=Iu,G.toLower=$d,G.toNumber=Lu,G.toSafeInteger=zu,G.toString=Bu,G.toUpper=ef,G.trim=tf,G.trimEnd=nf,G.trimStart=rf,G.truncate=af,G.unescape=of,G.uniqueId=Hf,G.upperCase=sf,G.upperFirst=cf,G.each=Qc,G.eachRight=$c,G.first=Bs,wf(G,function(){var e={};return xi(G,function(t,n){H.call(G.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),G.VERSION=`4.18.1`,sn([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){G[e].placeholder=G}),sn([`drop`,`take`],function(e,t){_r.prototype[e]=function(r){r=r===n?1:Nt(Fu(r),0);var i=this.__filtered__&&!t?new _r(this):this.clone();return i.__filtered__?i.__takeCount__=Rt(r,i.__takeCount__):i.__views__.push({size:Rt(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},_r.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),sn([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;_r.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:q(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),sn([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);_r.prototype[e]=function(){return this[n](1).value()[0]}}),sn([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);_r.prototype[e]=function(){return this.__filtered__?new _r(this):this[n](1)}}),_r.prototype.compact=function(){return this.filter(vf)},_r.prototype.find=function(e){return this.filter(e).head()},_r.prototype.findLast=function(e){return this.reverse().find(e)},_r.prototype.invokeMap=K(function(e,t){return typeof e==`function`?new _r(this):this.map(function(n){return Ni(n,e,t)})}),_r.prototype.reject=function(e){return this.filter(kl(q(e)))},_r.prototype.slice=function(e,t){e=Fu(e);var r=this;return r.__filtered__&&(e>0||t<0)?new _r(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=Fu(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},_r.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},_r.prototype.toArray=function(){return this.take(y)},xi(_r.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=G[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(G.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof _r,l=s[0],u=c||J(t),d=function(e){var t=a.apply(G,mn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new _r(this);var g=e.apply(t,s);return g.__actions__.push({func:Fc,args:[d],thisArg:n}),new gr(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),sn([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=et[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);G.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(J(i)?i:[],e)}return this[n](function(n){return t.apply(J(n)?n:[],e)})}}),xi(_r.prototype,function(e,t){var n=G[t];if(n){var r=n.name+``;H.call(On,r)||(On[r]=[]),On[r].push({name:t,func:n})}}),On[so(n,s).name]=[{name:`wrapper`,func:n}],_r.prototype.clone=vr,_r.prototype.reverse=yr,_r.prototype.value=br,G.prototype.at=Ic,G.prototype.chain=Lc,G.prototype.commit=Rc,G.prototype.next=zc,G.prototype.plant=Vc,G.prototype.reverse=Hc,G.prototype.toJSON=G.prototype.valueOf=G.prototype.value=Uc,G.prototype.first=G.prototype.head,yt&&(G.prototype[yt]=Bc),G})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?(Kt._=cr,define(function(){return cr})):Jt?((Jt.exports=cr)._=cr,qt._=cr):Kt._=cr}).call(e)}));function GN(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>GN(e)).join(``):XN.isValidElement(e)?GN(e.props.children):``}function KN(e){return`options`in e}function qN(e){let t=[],n=[],r=new Map,i=(e,{groupKey:i,groupLabel:a}={})=>{if(r.has(e.value))throw Error(`Select options must have unique values. Duplicate value "${e.value}" found.`);let o={key:e.value,value:e.value,label:e.label,textValue:e.textValue??GN(e.label),isDisabled:!!e.isDisabled,...Y({groupKey:i,groupLabel:a})};r.set(o.value,o.key),o.isDisabled&&n.push(o.key),t.push(o)};return e.forEach((e,t)=>{if(KN(e)){let n=`group-${t}`;e.options.forEach(t=>{i(t,{groupKey:n,groupLabel:e.label})});return}i(e)}),{options:t,disabledKeys:n,valueToKey:r}}function JN(e){return(0,ZN.jsx)(ww,{textValue:e.textValue,children:e.label},e.key)}function YN(e){let t=[],n=new Map;return e.options.forEach(e=>{if(!e.groupKey){t.push(JN(e));return}let r=n.get(e.groupKey)??{label:e.groupLabel??``,items:[]};n.has(e.groupKey)||t.push({groupKey:e.groupKey}),r.items.push(JN(e)),n.set(e.groupKey,r)}),t.map(e=>{if(e==null||!(`groupKey`in e))return e;let t=n.get(e.groupKey);return t?(0,ZN.jsx)(Ow,{"aria-label":GN(t.label),title:t.label,children:t.items},e.groupKey):null}).filter(e=>e!==null)}var XN,ZN;function QN(){return(QN=t((()=>{Tw(),kw(),XN=e(r()),ZN=W()})))()}function $N(e){return e.current===null||e.current instanceof HTMLUListElement}function eP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:d=!1,isRequired:f=!1,className:p,options:m,placeholder:h,autoComplete:g,onKeyDown:_,onKeyUp:v,searchEnabled:y=!1,searchPlaceholder:b=`search`}=e,[x,S]=(0,nP.useState)(``),{contains:C}=v_({sensitivity:`base`}),{field:w,resolvedError:T,isInvalid:E}=NS({name:t,control:n,rules:r,errorMessage:s}),D=(0,nP.useId)(),O=i??D,k=(0,nP.useRef)(null),A=(0,nP.useRef)(null),j=(0,nP.useRef)(null),M=(0,nP.useRef)(null),N=(0,nP.useRef)(!1),P=(0,nP.useMemo)(()=>qN(m),[m]),F=YN({...P,options:A.current===document.activeElement?P.options.filter(e=>C(e.textValue,x)):P.options}),I=(0,nP.useMemo)(()=>new Map(P.options.map(e=>[e.key,e])),[P.options]),L=P.valueToKey.get(BS(w.value))??null,R=BN({children:F,disabledKeys:P.disabledKeys,value:L,onSelectionChange:e=>{let t=(e===null?void 0:I.get(String(e)))?.value??``;w.onChange(t)},isDisabled:d,isRequired:f,isInvalid:E,label:a,description:o,errorMessage:T}),z=LN({value:x,onChange:S}),ee=PN({}),{inputProps:te,collectionProps:ne,collectionRef:B}=fr({inputRef:A,collectionRef:M},ee),re=(0,tP.omit)(ne,[`aria-label`]),{triggerProps:ie,valueProps:ae,labelProps:oe,menuProps:se,descriptionProps:ce,errorMessageProps:le,isInvalid:ue,validationErrors:de}=cb({id:O,disabledKeys:P.disabledKeys,value:L,isDisabled:d,isRequired:f,isInvalid:E,label:a,description:o,errorMessage:T,name:w.name,...re,...Y({autoComplete:g})},R,k),{buttonProps:fe}=Lr(ie,k),{labelProps:pe,inputProps:me}=ob({...te,placeholder:b,"aria-label":b},z,A),he=U(oe,pe),ge=e=>{let t=e;k.current?.contains(t)||j.current?.contains(t)||N.current&&(N.current=!1,w.onBlur())},_e=()=>{N.current||=!0},ve=U(fe,{onBlur:e=>{ge(e.relatedTarget)},onFocus:()=>{_e()},onKeyDown:_,onKeyUp:v}),ye=SM(T,ue,de),be=I.get(String(R.value)),xe=be===void 0,Se=R.isOpen||be!==void 0||h!==void 0;return(0,rP.jsxs)(`div`,{className:c(RC,p),children:[(0,rP.jsxs)(`div`,{className:c(zC,iP),"data-field-control":`true`,"data-focused":R.isFocused?`true`:`false`,"data-floated":Se?`true`:`false`,"data-invalid":ue?`true`:`false`,"data-placeholder":xe?`true`:`false`,children:[(0,rP.jsxs)(`button`,{...ve,id:O,ref:IS(k,w.ref),className:wC(l),type:`button`,children:[(0,rP.jsx)(`span`,{...ae,"data-select-placeholder":xe?`true`:void 0,className:c(aP,xe?UC:void 0),children:be?.label??h??null}),(0,rP.jsx)(`span`,{className:oP,"aria-hidden":`true`,children:(0,rP.jsx)(`span`,{className:gT})})]}),(0,rP.jsx)(`span`,{...he,className:DC(l),children:a}),R.isOpen?(0,rP.jsx)(FT,{popoverRef:j,state:R,triggerRef:k,surfaceProps:{onBlur:e=>{ge(e.relatedTarget)},onFocus:()=>{_e()}},children:(0,rP.jsxs)(We,{autoFocus:!0,children:[y&&(0,rP.jsxs)(`div`,{className:u`
                    position: relative;
                    padding: 0 6px;
                  `,children:[(0,rP.jsx)(`span`,{className:u`
                      display: inline-block;
                      position: absolute;
                      left: 1rem;
                      top: 1.125rem;
                    `,children:(0,rP.jsx)(Tt,{size:16,weight:`bold`})}),(0,rP.jsx)(`input`,{className:sP,...me,ref:A})]}),$N(B)&&(0,rP.jsx)(jT,{...U(se,re),shouldSelectOnPressUp:!1,state:R,listBoxRef:B})]})}):null]}),ye?(0,rP.jsx)(`p`,{...le,role:`alert`,className:kC(l,!0),children:ye}):o?(0,rP.jsx)(`p`,{...ce,className:kC(l,!1),children:o}):null]})}var tP,nP,rP,iP,aP,oP,sP;function cP(){return(cP=t((()=>{l(),IN(),zN(),UN(),Dt(),tP=WN(),nP=e(r()),V(),Rr(),db(),sb(),b_(),G(),I(),PS(),VS(),QN(),fw(),PT(),BT(),bT(),rP=W(),iP=u`
  position: relative;
`,aP=u`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`,oP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  margin-left: var(--space-3);
  color: var(--field-chrome);
`,sP=u`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 999px;
  padding: 0 2rem;
  width: 100%;
  outline: none;
  border: none;
  box-shadow: inset 0 0 0 1px var(--field-border);
  min-height: 2.5rem;
  &:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--field-border-color-focus);
  }
`})))()}function lP(){return(lP=t((()=>{l(),r(),hw(),W(),u`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,u`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-3);
  width: 100%;
`,u`
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: var(--color-gray-700);
`,u`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 1.5rem;
  padding: 0 0.625rem;
`,u`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 999px;
  background: var(--color-gray-100);
`,u`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  background: var(--color-blue-500);
`,u`
  position: absolute;
  top: -2px;
  bottom: -2px;
  width: 2px;
  background: var(--color-gray-300);
  transform: translateX(-1px);
`,u`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  background: var(--color-clear-50);
  box-shadow:
    0 0 0 1px var(--color-gray-400),
    0 1px 2px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  cursor: grab;
  touch-action: none;

  &[data-dragging="true"] {
    cursor: grabbing;
  }

  &[data-focus-visible="true"] {
    outline: none;
    box-shadow:
      0 0 0 1px var(--color-blue-500),
      0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  &[data-disabled="true"] {
    background: var(--field-bg-disabled);
    box-shadow: 0 0 0 1px var(--field-disabled-border);
    cursor: not-allowed;
  }
`})))()}function uP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,className:p,switchValue:m,onKeyDown:h,onKeyUp:g,"aria-label":_}=e,{field:v,resolvedError:y,isInvalid:b}=NS({name:t,control:n,rules:r,errorMessage:s}),x=!!v.value,S=(0,dP.useId)(),C=i??S,w=(0,dP.useId)(),T=(0,dP.useId)(),E=zS({descriptionId:w,errorMessageId:T,hasDescription:!!o,hasErrorMessage:!!y}),D=(0,dP.useRef)(null),O=Ql({isDisabled:u,isReadOnly:d,isSelected:x,onChange:e=>{v.onChange(e)}}),k=m===void 0?void 0:Array.isArray(m)?m.join(`,`):String(m),{inputProps:A,isDisabled:j,isPressed:M,isSelected:N,labelProps:P}=fb({children:a,id:C,name:v.name,isDisabled:u,isReadOnly:d,...Y({value:k,"aria-label":_,"aria-describedby":E})},O,D),{focusProps:F,isFocusVisible:I}=T_(),L=U(A,F,{onKeyDown:h,onKeyUp:g,onBlur:e=>{A.onBlur?.(e),v.onBlur()},"aria-invalid":b?mP:void 0,required:f,type:`checkbox`});return(0,fP.jsx)(pw,{className:c(WS,p),description:o,...hb(o,{descriptionId:w}),errorMessage:y,...hb(y,{errorMessageId:T}),layout:pP,children:(0,fP.jsxs)(`label`,{...P,className:c(KS,qS,HS(l)),"data-disabled":j?`true`:`false`,children:[(0,fP.jsx)(`input`,{...L,ref:IS(D,v.ref),className:JS}),(0,fP.jsx)(`span`,{className:ZS,"aria-hidden":`true`,"data-disabled":j?`true`:`false`,"data-focus-visible":I?`true`:`false`,"data-invalid":b?`true`:`false`,"data-pressed":M?`true`:`false`,"data-selected":N?`true`:`false`,children:(0,fP.jsx)(`span`,{className:QS,"data-selected":N?`true`:`false`})}),(0,fP.jsx)(`span`,{className:YS,children:(0,fP.jsx)(`span`,{className:XS,children:a})})]})})}var dP,fP,pP,mP;function hP(){return(hP=t((()=>{l(),eu(),dP=e(r()),V(),D_(),pb(),PS(),VS(),cC(),hw(),fP=W(),pP=`stacked`,mP=`true`})))()}function gP(e,t){let n=e.style.height;e.style.height=`auto`;let r=e.scrollHeight,i=t?Math.min(r,t):r;return e.style.height=`${i}px`,e.style.overflowY=t&&r>t?`auto`:`hidden`,n===e.style.height?null:i}function _P(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,autoResize:m=!1,autoResizeMaxHeightPx:h,onAutoResized:g,id:_,autoComplete:v,maxLength:y,minLength:b,rows:x,className:S}=e,{field:C,resolvedError:w,isInvalid:T}=NS({name:t,control:n,rules:r,errorMessage:o}),E=(0,vP.useId)(),D=_??E,O=(0,vP.useRef)(null),k=C.value===null||C.value===void 0?``:String(C.value),A=CM({defaultValue:void 0,elementRef:O,value:k}),{labelProps:j,inputProps:M,descriptionProps:N,errorMessageProps:P,isInvalid:F,validationErrors:I}=Cu({label:i,description:a,errorMessage:w,id:D,value:k,name:C.name,isInvalid:T,inputElementType:bP,...Y({autoComplete:v,maxLength:y,minLength:b,isDisabled:d,isReadOnly:f,isRequired:p})},O);(0,vP.useEffect)(()=>{if(!m||!O.current)return;let e=gP(O.current,h);e!==null&&g?.(e)},[k,m,h,g]);let L=U(M,{onChange:e=>{if(C.onChange(e.target.value),m&&O.current){let e=gP(O.current,h);e!==null&&g?.(e)}},onFocus:()=>{A.setIsFocused(!0)},onBlur:()=>{A.setIsFocused(!1),C.onBlur()},placeholder:xM(),rows:x}),R=SM(w,F,I),z=mb(void 0,L[`aria-describedby`]),ee=L[`aria-invalid`];return(0,yP.jsxs)(`div`,{className:c(RC,S),children:[(0,yP.jsxs)(`div`,{className:zC,"data-field-control":`true`,"data-multiline":`true`,"data-has-icon-start":l?`true`:void 0,"data-has-icon-end":u?`true`:void 0,"data-focused":A.isFocused?`true`:`false`,"data-filled":A.hasValue?`true`:`false`,"data-floated":A.isFloated?`true`:`false`,"data-invalid":F?`true`:`false`,children:[(0,yP.jsx)(`textarea`,{...L,ref:IS(O,C.ref),className:SC(s),"aria-describedby":z,"aria-invalid":ee}),(0,yP.jsx)(`label`,{...j,className:EC(s),children:i}),l?(0,yP.jsx)(`span`,{className:$C[s],"aria-hidden":`true`,children:l}):null,u?(0,yP.jsx)(`span`,{className:tw[s],"aria-hidden":`true`,children:u}):null]}),R?(0,yP.jsx)(`p`,{...P,role:`alert`,className:kC(s,!0),children:R}):a?(0,yP.jsx)(`p`,{...N,className:kC(s,!1),children:a}):null]})}var vP,yP,bP;function xP(){return(xP=t((()=>{l(),vP=e(r()),V(),Tu(),PS(),fw(),TM(),yP=W(),bP=`textarea`})))()}function SP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,type:h=`text`,autoComplete:g,maxLength:_,minLength:v,pattern:y,inputMode:b,placeholder:x,className:S,min:C,max:w,step:T}=e,{field:E,resolvedError:D,isInvalid:O}=NS({name:t,control:n,rules:r,errorMessage:o}),k=(0,CP.useRef)(null),A=E.value===null||E.value===void 0?``:String(E.value),j=CM({defaultValue:void 0,elementRef:k,value:A}),{labelProps:M,inputProps:N,descriptionProps:P,errorMessageProps:F,isInvalid:I,validationErrors:L}=Cu({label:i,description:a,errorMessage:D,name:E.name,type:h,value:A,isInvalid:O,...Y({id:m,autoComplete:g,maxLength:_,minLength:v,pattern:y,inputMode:b,placeholder:x,isDisabled:d,isReadOnly:f,isRequired:p})},k),R=U(N,{onChange:e=>{h===`number`&&!Number.isNaN(e.target.valueAsNumber)?E.onChange(e.target.valueAsNumber):h===`number`&&e.target.value===``?E.onChange(null):E.onChange(e.target.value)},onFocus:()=>{j.setIsFocused(!0)},onBlur:()=>{j.setIsFocused(!1),E.onBlur()},placeholder:xM(),min:C,max:w,step:T}),z=SM(D,I,L),ee=mb(void 0,R[`aria-describedby`]);return(0,wP.jsxs)(`div`,{className:c(RC,S),children:[(0,wP.jsxs)(`div`,{className:zC,"data-field-control":`true`,"data-has-icon-start":l?`true`:void 0,"data-has-icon-end":u?`true`:void 0,"data-focused":j.isFocused?`true`:`false`,"data-filled":j.hasValue?`true`:`false`,"data-floated":j.isFloated?`true`:`false`,"data-invalid":I?`true`:`false`,children:[(0,wP.jsx)(`input`,{...R,ref:IS(k,E.ref),className:bC(s),"aria-describedby":ee}),(0,wP.jsx)(`label`,{...M,className:EC(s),children:i}),l?(0,wP.jsx)(`span`,{className:XC,"aria-hidden":`true`,children:l}):null,u?(0,wP.jsx)(`span`,{className:ZC,"aria-hidden":`true`,children:u}):null]}),z?(0,wP.jsx)(`p`,{...F,role:`alert`,className:kC(s,!0),children:z}):a?(0,wP.jsx)(`p`,{...P,className:kC(s,!1),children:a}):null]})}var CP,wP;function TP(){return(TP=t((()=>{l(),CP=e(r()),V(),Tu(),PS(),fw(),TM(),wP=W()})))()}function EP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b}=e,{field:x,resolvedError:S,isInvalid:C}=NS({name:t,control:n,rules:r,errorMessage:o}),w=x.value??``;return(0,DP.jsx)(Nj,{ref:x.ref,kind:kP,layout:OP,label:i,description:a,errorMessage:S,notice:s,...Y({fieldSize:c}),iconStart:l,iconEnd:u,...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),isInvalid:C,...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),value:w,onChange:e=>{x.onChange(e.target.value)},onBlur:x.onBlur})}var DP,OP,kP;function AP(){return(AP=t((()=>{r(),PS(),Pj(),DP=W(),OP=`floating`,kP=`time`})))()}function jP(){return(jP=t((()=>{l(),r(),hw(),fw(),BT(),bT(),Yk(),W(),u`
  position: relative;
  width: 100%;
`,u`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`,u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  margin-left: var(--space-3);
  color: var(--field-chrome);
`,u`
  width: min(360px, calc(100vw - 32px));
  min-width: min(320px, calc(100vw - 32px));
  padding: var(--space-3);
`})))()}function MP(e){let t=e.trim().split(/\s+/).filter(Boolean),n=t[0];if(!n)return`?`;if(t.length===1)return n.slice(0,2).toUpperCase();let r=t[t.length-1]??n;return(n.charAt(0)+r.charAt(0)).toUpperCase()}function NP(e){let t=0;for(let n=0;n<e.length;n++)t=(t*31+(e.codePointAt(n)??0))%2147483647;return t}var PP,FP,IP,LP;function RP(){return(RP=t((()=>{l(),r(),PP=W(),FP=[`var(--color-blue-600)`,`var(--color-green-600)`,`var(--color-purple-600)`,`var(--color-crimson-600)`,`var(--color-gray-600)`],IP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: 50%;
  color: var(--color-primary-100);
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`,LP=({name:e,size:t=48,className:n})=>{let r=u`
    width: ${t}px;
    height: ${t}px;
    background: ${FP[NP(e)%FP.length]};
    font-size: ${Math.round(t*.38)}px;
  `;return(0,PP.jsx)(`span`,{className:c(IP,r,n),"aria-hidden":`true`,children:MP(e)})}})))()}var zP,BP,VP,HP,UP,WP,GP,KP,qP;function JP(){return(JP=t((()=>{l(),zP=e(r()),BP=W(),VP={neutral:u`
    background: var(--color-gray-50);
    border-color: var(--color-gray-200);
    color: var(--color-gray-700);
  `,info:u`
    background: var(--color-blue-50);
    border-color: var(--color-blue-200);
    color: var(--color-blue-700);
  `,success:u`
    background: var(--color-green-100);
    border-color: var(--color-green-300);
    color: var(--color-green-700);
  `,warning:u`
    background: var(--color-yellow-100);
    border-color: var(--color-yellow-700);
    color: var(--color-gray-800);
  `,danger:u`
    background: var(--color-crimson-100);
    border-color: var(--color-crimson-300);
    color: var(--color-crimson-800);
  `},HP=u`
  display: inline-flex;
  align-items: flex-start;
  /* Grid defaults an item to justify-self: stretch, pulling a pill out to the whole column. */
  justify-self: start;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3);
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: var(--font-size-1);
  font-weight: 600;
  line-height: 1.2;
  /* A pill that wraps inside its own outline reads as broken; let the row it sits in wrap instead. */
  white-space: nowrap;
`,UP=u`
  gap: var(--space-1);
  padding: 0 var(--space-2);
`,WP=u`
  display: inline-flex;
  align-items: center;
  font-size: 0.9em;
`,GP=u`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: start;
  gap: var(--space-1);
`,KP=u`
  font-size: var(--font-size-1);
  font-weight: 400;
  color: var(--color-gray-500);
`,qP=({tone:e=`neutral`,size:t=`default`,icon:n,children:r,className:i,title:a,description:o})=>{let s=zP.useId(),l=(0,BP.jsxs)(`span`,{className:c(HP,VP[e],t===`compact`&&UP,!o&&i),title:a,...hb(o,{"aria-describedby":s}),children:[n?(0,BP.jsx)(`span`,{className:WP,"aria-hidden":`true`,children:n}):null,r]});return o?(0,BP.jsxs)(`span`,{className:c(GP,i),children:[l,(0,BP.jsx)(`span`,{id:s,className:KP,children:o})]}):l}})))()}function YP(){return(YP=t((()=>{l(),r(),W(),u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2) var(--space-1) var(--space-3);
  border: 1px solid var(--color-clear-400);
  border-radius: 999px;
  background: var(--color-clear-100);
  color: var(--color-gray-700);
  font-size: var(--font-size-1);
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
`,u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-4);
  height: var(--space-4);
  flex: none;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: var(--font-size-2);
  line-height: 1;

  &:hover {
    background: var(--color-clear-300);
  }

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`})))()}async function XP(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=nF,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(rF);if(t.remove(),!n)throw Error(iF)}var ZP,QP,$P,eF,tF,nF,rF,iF,aF,oF,sF,cF,lF,uF,dF,fF;function pF(){return(pF=t((()=>{l(),ZP=e(r()),V(),Rr(),F_(),De(),a(),QP=W(),$P=`⧉`,eF=`✓`,tF=`✕`,nF=`fixed`,rF=`copy`,iF=`Copy command was unsuccessful`,aF=2e3,oF={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},sF=o`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,cF=u`
  position: relative;
  display: inline-flex;
`,lF=u`
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
`,uF=u`
  display: inline-flex;
  animation: ${sF} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dF=u`
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
`,fF=({value:e,label:t,children:n,className:r})=>{let{t:a}=i(`shared-module`),o=ZP.useRef(null),[s,l]=ZP.useState(oF.IDLE),[u,d]=ZP.useState(!1),f=ZP.useRef(null);ZP.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);let{buttonProps:p,isPressed:m}=Lr({"aria-label":t,onPress:async()=>{let t=oF.COPIED;try{await XP(e)}catch{t=oF.ERROR}l(t),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>l(oF.IDLE),aF)}},o),{hoverProps:h,isHovered:g}=j_({}),_=s===oF.COPIED?a(`copy-button.copied`):s===oF.ERROR?a(`copy-button.failed`):``,v=s===oF.COPIED?eF:s===oF.ERROR?tF:$P;return(0,QP.jsxs)(`span`,{className:cF,children:[(0,QP.jsx)(`button`,{...U(p,h),ref:o,className:c(lF,r),type:`button`,"data-pressed":m,onFocus:()=>d(!0),onBlur:()=>d(!1),children:n??(0,QP.jsx)(`span`,{"aria-hidden":`true`,className:uF,"data-status":s,children:v},s)}),(0,QP.jsx)(`span`,{className:dF,"data-show":g||u||s!==oF.IDLE,"aria-hidden":`true`,children:_||t}),(0,QP.jsx)(yt,{children:(0,QP.jsx)(`span`,{"aria-live":`polite`,children:_})})]})}})))()}var mF,hF,gF,_F,vF,yF,bF,xF;function SF(){return(SF=t((()=>{l(),r(),mF=W(),hF=`30rem`,gF=u`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  margin: 0;

  @media (max-width: ${hF}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,_F=u`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,vF=u`
  display: contents;

  @media (max-width: ${hF}) {
    display: grid;
    gap: var(--space-1);
  }
`,yF=u`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,bF=u`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,xF=({items:e,layout:t=`inline`,className:n})=>(0,mF.jsx)(`dl`,{className:c(t===`inline`?gF:_F,n),children:e.map((e,n)=>(0,mF.jsxs)(`div`,{className:t===`inline`?vF:void 0,children:[(0,mF.jsx)(`dt`,{className:yF,children:e.label}),(0,mF.jsx)(`dd`,{className:bF,children:e.value})]},n))})})))()}var CF;function wF(){return(wF=t((()=>{l(),r(),Wb(),W(),u`
  position: fixed;
  inset: 0;
  z-index: var(--z-dialog);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`,u`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(95vw, var(--dialog-width-cap));
  max-height: 90vh;
  overflow: hidden;
  background: var(--color-clear-50);
  color: var(--color-gray-700);
  border-radius: var(--surface-radius);
  outline: none;
`,u`
    --dialog-width-cap: 700px;
  `,u`
    --dialog-width-cap: 1200px;
  `,u`
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: clamp(1rem, 5vw, 2rem);
  padding-bottom: var(--space-4);

  &[data-has-title="true"] {
    border-bottom: 1px solid var(--color-clear-300);
  }

  &[data-has-title="false"] {
    justify-content: flex-end;
    padding-bottom: 0;
  }
`,u`
  flex: 1 1 auto;
  min-width: 0;
  margin: 0;
  font-size: var(--font-size-4);
  font-weight: 600;
  overflow-wrap: break-word;
`,u`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-6);
  height: var(--space-6);
  margin: calc(var(--space-3) * -1) calc(var(--space-3) * -1) 0 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  font-size: var(--font-size-4);
  line-height: 1;
  color: var(--color-gray-700);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-clear-200);
  }

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,u`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  padding: clamp(1rem, 5vw, 2rem);

  &[data-below-header="true"] {
    padding-top: var(--space-4);
  }
`,CF=480,u`
  flex: none;
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: 0 clamp(1rem, 5vw, 2rem) clamp(1rem, 5vw, 2rem);

  @media (max-width: ${CF}px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`,u`
  flex: 1 1 0;

  /* On a column main axis that zero basis becomes a zero height and overrides the button's own,
     leaving an action the height of its text. */
  @media (max-width: ${CF}px) {
    flex: 0 0 auto;
  }
`})))()}function TF(){return(TF=t((()=>{l(),r(),wF(),xP(),W(),u`
  margin-bottom: calc(var(--space-4) + var(--space-2));
`})))()}var EF,DF,OF,kF,AF,jF,MF,NF,PF,FF,IF,LF,RF;function zF(){return(zF=t((()=>{l(),EF=e(r()),Rr(),sO(),DF=W(),OF=`right`,kF=u`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,AF=u`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,jF=u`
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
`,MF=u`
  padding: var(--space-2) 0;
`,NF=u`
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
`,PF=u`
  flex: 1 1 auto;
  min-width: 0;
`,FF=u`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,IF=u`
  padding: 0 var(--space-4) var(--space-4);
`,LF=u`
  padding: 0 0 var(--space-3);
`,RF=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:o=`card`,"aria-label":s,className:l})=>{let u=o===`plain`,[d,f]=EF.useState(n),p=r!==void 0,m=p?r:d,h=EF.useRef(null),g=EF.useId(),_=EF.useId(),v=()=>{let e=!m;p||f(e),i?.(e)},{buttonProps:y}=Lr(s===void 0?{onPress:v}:{onPress:v,"aria-label":s},h);return(0,DF.jsxs)(`div`,{className:c(kF,u&&AF,l),children:[(0,DF.jsxs)(`button`,{...y,ref:h,id:_,type:`button`,className:c(jF,u&&MF),"aria-expanded":m,"aria-controls":g,children:[(0,DF.jsx)(`span`,{className:NF,"data-expanded":m,children:(0,DF.jsx)(iO,{direction:OF})}),(0,DF.jsx)(`span`,{className:PF,children:e}),t===void 0?null:(0,DF.jsx)(`span`,{className:FF,children:t})]}),(0,DF.jsx)(`section`,{id:g,"aria-labelledby":_,hidden:!m,className:c(IF,u&&LF),children:m?a:null})]})}})))()}function BF(){return(BF=t((()=>{l(),r(),W(),u`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  color: var(--color-gray-600);
`,u`
  font-size: var(--font-size-5);
  color: var(--color-gray-400);
  line-height: 1;
`,u`
  margin: 0;
  font-size: var(--font-size-3);
  font-weight: 600;
  color: var(--color-gray-700);
`,u`
  margin: 0;
  max-width: 48ch;
`})))()}var VF,HF,UF,WF,GF,KF,qF;function JF(){return(JF=t((()=>{l(),Dt(),r(),VF=W(),HF=u`
  display: flex;
  /* Anchors the icon to the first line; centring strands it beside the middle of a long body. */
  align-items: flex-start;
  gap: var(--space-3);
  padding: 0.875rem 1rem;
  /* An accented edge rather than a full outline: these often sit inside a card or dialog that
     already has one, and a second rounded box inside the first reads as stray chrome. Width is
     per-side but the colour stays a single value, so a tone is still one border-color. */
  border-style: solid;
  border-width: 0 0 0 3px;
  border-color: transparent;
  border-radius: 0 var(--surface-radius) var(--surface-radius) 0;
  overflow-x: auto;

  /* A column of its own for the icon costs the body part of every line, which on a phone adds two
     wrapped lines to a two-sentence body. Blocking lets the floated icon take the heading's line. */
  @media (max-width: ${479.98}px) {
    display: block;
  }
`,UF={neutral:{icon:Nt,css:u`
      border-color: var(--color-gray-400);
      background: var(--color-gray-50);
      --infobox-icon: var(--color-gray-500);
    `},info:{icon:Mt,css:u`
      border-color: var(--color-blue-500);
      background: var(--color-blue-25);
      --infobox-icon: var(--color-blue-500);
    `},success:{icon:Et,css:u`
      border-color: var(--color-green-600);
      background: var(--color-green-50);
      --infobox-icon: var(--color-green-600);
    `},warning:{icon:kt,css:u`
      border-color: var(--color-yellow-700);
      background: var(--color-yellow-100);
      /* The yellow ramp is not contrast-safe as ink, so the icon stays grey. */
      --infobox-icon: var(--color-gray-700);
    `},danger:{icon:kt,css:u`
      border-color: var(--color-crimson-600);
      background: var(--color-crimson-75);
      --infobox-icon: var(--color-crimson-600);
    `}},WF=u`
  display: inline-flex;
  align-items: center;
  flex: none;
  color: var(--infobox-icon);

  @media (max-width: ${479.98}px) {
    float: left;
    margin-right: var(--space-3);
  }
`,GF=u`
  flex: 1;
`,KF=u`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-700);
  font-weight: 600;
`,qF=({tone:e=`info`,heading:t,children:n,announce:r=!1,className:i})=>{let{icon:a,css:o}=UF[e];return(0,VF.jsxs)(`div`,{className:c(HF,o,i),role:r?e===`warning`||e===`danger`?`alert`:`status`:void 0,children:[(0,VF.jsx)(`span`,{className:WF,"aria-hidden":`true`,children:(0,VF.jsx)(a,{})}),(0,VF.jsxs)(`div`,{className:GF,children:[t?(0,VF.jsx)(`strong`,{className:KF,children:t}):null,n]})]})}})))()}function YF(){return(YF=t((()=>{l(),r(),Wb(),BT(),bT(),W(),u`
  display: grid;
  gap: var(--space-1);
  padding: var(--space-2);
  min-width: 180px;
`,u`
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--control-radius);
  background: transparent;
  color: var(--color-gray-700);
  font: inherit;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: calc(var(--focus-ring-offset) * -1);
  }

  &:disabled {
    opacity: var(--btn-disabled-opacity);
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: var(--color-clear-200);
  }

  &[data-tone="destructive"] {
    color: var(--color-crimson-700);
  }
`})))()}function XF(e,t,n){return n<=t?0:Math.min(100,Math.max(0,(e-t)/(n-t)*100))}var ZF,QF,$F,eI,tI,nI,rI,iI,aI,oI,sI,cI;function lI(){return(lI=t((()=>{l(),r(),rv(),ZF=W(),QF={neutral:u`
    background: var(--color-gray-400);
  `,success:u`
    background: var(--color-green-600);
  `,warning:u`
    background: var(--color-yellow-700);
  `,danger:u`
    background: var(--color-crimson-700);
  `},$F=u`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,eI=u`
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: var(--font-size-1);
  color: var(--color-gray-600);
`,tI=u`
  color: var(--color-gray-700);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,nI=u`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--color-gray-100);
  overflow: hidden;
`,rI=`div`,iI=u`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  transition: width 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,aI=u`
  overflow: visible;
`,oI=u`
  position: absolute;
  top: -2px;
  bottom: -2px;
  width: 2px;
  background: var(--color-gray-600);
`,sI=({as:e,className:t,fillPct:n,thresholdPct:r,tickClassName:i,tone:a})=>(0,ZF.jsxs)(e,{className:t,"aria-hidden":`true`,children:[(0,ZF.jsx)(`span`,{className:c(iI,QF[a],u`
          width: ${n}%;
        `)}),r===null?null:(0,ZF.jsx)(`span`,{className:c(i,u`
            left: ${r}%;
          `)})]}),cI=({value:e,minValue:t=0,maxValue:n,label:r,valueLabel:i,threshold:a,tone:o=`neutral`,showLabel:s=!0,className:l})=>{let{meterProps:u,labelProps:d}=nv({label:r,value:e,minValue:t,maxValue:n,...Y({valueLabel:i}),...s?{}:{"aria-label":r}}),f=XF(e,t,n),p=typeof a==`number`?XF(a,t,n):null;return(0,ZF.jsxs)(`div`,{...u,role:`meter`,className:c($F,l),children:[s?(0,ZF.jsxs)(`div`,{className:eI,children:[(0,ZF.jsx)(`span`,{...d,children:r}),i?(0,ZF.jsx)(`span`,{className:tI,children:i}):null]}):null,(0,ZF.jsx)(sI,{as:rI,className:c(nI,p!==null&&aI),fillPct:f,thresholdPct:p,tickClassName:oI,tone:o})]})},u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  max-width: 100%;
`,u`
  display: flex;
  width: 100%;
`,u`
  color: var(--color-gray-700);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  /* Reserves the width of the longest short value and right-aligns inside it, so a column of
     these starts every track at the same x rather than stepping with the digit count. A value
     longer than the reservation still takes the room it needs. */
  min-width: 4ch;
  text-align: right;
`,u`
  color: var(--color-gray-500);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`,u`
  position: relative;
  /* Narrower than this and the fill reads as either empty or full and a threshold tick has
     nowhere to sit; it may still give way when the row is tight. */
  flex: 0 1 auto;
  width: 6rem;
  min-width: 3rem;
  height: 6px;
  border-radius: 999px;
  background: var(--color-gray-100);
  overflow: hidden;
`,u`
  flex: 1 1 6rem;
  width: auto;
`,u`
  position: absolute;
  top: -1px;
  bottom: -1px;
  width: 2px;
  background: var(--color-gray-600);
`})))()}function uI(){return(uI=t((()=>{l(),Dt(),r(),YP(),fw(),PT(),BT(),bT(),W(),u`
  position: relative;
`,u`
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--space-2);
  cursor: default;
`,u`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex: 1 1 6rem;
  min-width: 4rem;
  align-self: stretch;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--control-radius);
  background: none;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }
`,u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--field-chrome);
`,u`
  position: relative;
  padding: var(--space-2) var(--space-3) 0;
`,u`
  position: absolute;
  left: calc(var(--space-3) + var(--space-3));
  top: 50%;
  display: inline-flex;
  transform: translateY(-25%);
  color: var(--field-chrome);
  pointer-events: none;
`,u`
  width: 100%;
  min-height: 2.5rem;
  padding: 0 var(--space-4) 0 2.5rem;
  border: none;
  border-radius: 999px;
  background: var(--field-bg);
  box-shadow: inset 0 0 0 1px var(--field-border);
  color: var(--field-text-color);
  font: inherit;
  outline: none;

  &:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--field-border-color-focus);
  }
`})))()}function dI(){return(dI=t((()=>{l(),Dt(),r(),YF(),sO(),W(),u`
  --pagination-item-size: 36px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3) var(--space-4);
  margin: var(--space-4) 0;

  @media (min-width: 600px) {
    --pagination-item-size: 44px;
  }
`,u`
  margin: 0;
  flex: 1 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-variant-numeric: tabular-nums;
`,u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  margin: 0;
  padding: 0;
  list-style: none;
`,u`
  display: inline-flex;
  flex: none;
`,u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--pagination-item-size);
  height: var(--pagination-item-size);
`,u`
  padding: 0;
  border: 1px solid transparent;
  border-radius: 999px;
  background: transparent;
  color: var(--color-gray-600);
  font: inherit;
  font-size: var(--font-size-2);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }

  &:disabled {
    color: var(--color-gray-300);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--color-clear-200);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,u`
  background: var(--color-gray-700);
  border-color: var(--color-gray-700);
  color: var(--color-primary-100);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--color-gray-700);
  }
`,u`
  color: var(--color-gray-400);
`,u`
  flex: none;
  height: var(--pagination-item-size);
`})))()}function fI(){return(fI=t((()=>{l(),r(),Wb(),BT(),W(),u`
  font-weight: 700;
`,u`
  padding: var(--space-3) var(--space-4);
  max-width: 320px;
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  line-height: 1.4;
`})))()}var pI,mI;function hI(){return(hI=t((()=>{Dt(),pI={done:`success`,current:`info`,"action-needed":`warning`,failed:`danger`,superseded:`neutral`,upcoming:`neutral`},mI={done:Et,current:wt,"action-needed":kt,failed:At,superseded:jt,upcoming:null}})))()}var gI,_I,vI;function yI(){return(yI=t((()=>{r(),JP(),hI(),gI=W(),_I={default:14,compact:12},vI=({state:e,children:t,size:n=`default`,className:r})=>{let i=mI[e],a=i?(0,gI.jsx)(i,{size:_I[n]}):void 0;return(0,gI.jsx)(qP,{tone:pI[e],size:n,...hb(i,{icon:a}),...hb(r,{className:r}),children:t})}})))()}var bI,xI,SI,CI,wI,TI;function EI(){return(EI=t((()=>{l(),r(),hI(),bI=W(),xI=24,SI=u`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
  font-size: var(--font-size-4);
  font-weight: 600;
  line-height: 1.2;
`,CI={done:u`
    color: var(--color-green-700);
  `,current:u`
    color: var(--color-blue-700);
  `,"action-needed":u`
    color: var(--color-gray-800);
  `,failed:u`
    color: var(--color-crimson-700);
  `,superseded:u`
    color: var(--color-gray-600);
  `,upcoming:u`
    color: var(--color-gray-600);
  `},wI=u`
  display: inline-flex;
  align-items: center;
  flex: none;
`,TI=({state:e,children:t,className:n})=>{let r=mI[e];return(0,bI.jsxs)(`p`,{className:c(SI,CI[e],n),children:[r?(0,bI.jsx)(`span`,{className:wI,"aria-hidden":`true`,children:(0,bI.jsx)(r,{size:xI})}):null,(0,bI.jsx)(`span`,{children:t})]})}})))()}function DI(){return(DI=t((()=>{l(),r(),W(),u`
  white-space: nowrap;
`,u`
  white-space: nowrap;
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`})))()}function OI(e){let t=Math.min(...e),n=Math.max(...e)-t||1,r=HI/(e.length-1);return e.map((e,i)=>`${i*r},${UI-(e-t)/n*UI}`).join(` `)}var kI,AI,jI,MI,NI,PI,FI,II,LI,RI,zI,BI,VI,HI,UI,WI;function GI(){return(GI=t((()=>{l(),Dt(),r(),kI=W(),AI=u`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  /* Fills the row's tallest cell, so a two-line label does not make one tile shorter than its
     neighbours. */
  height: 100%;
  padding: var(--space-4);
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  background: var(--color-clear-50);
  text-decoration: none;
`,jI={neutral:void 0,success:u`
    border-color: var(--color-green-100);
    background: var(--color-green-75);
  `},MI={neutral:void 0,success:u`
    color: var(--color-green-700);
  `},NI=u`
  transition:
    border-color 0.15s,
    background 0.15s;

  &:hover {
    border-color: var(--color-gray-300);
    background: var(--color-clear-100);
  }

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--focus-ring-color);
    outline-offset: var(--focus-ring-offset);
  }
`,PI=u`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  color: var(--color-gray-400);
`,FI=u`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Room for the corner arrow so it never overlaps a wide value. */
  padding-right: var(--space-5);
`,II=u`
  font-size: var(--font-size-5);
  font-weight: 700;
  line-height: 1;
  color: var(--color-gray-700);
  font-variant-numeric: tabular-nums;
`,LI=u`
  color: var(--color-crimson-700);
`,RI=u`
  font-size: var(--font-size-1);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,zI={positive:u`
    color: var(--color-green-700);
  `,negative:u`
    color: var(--color-crimson-700);
  `,neutral:u`
    color: var(--color-gray-500);
  `},BI=u`
  flex: none;
  width: 4rem;
  height: 1.25rem;
  color: var(--color-gray-400);
`,VI=u`
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`,HI=64,UI=20,WI=({label:e,value:t,alertWhenNonZero:n=!1,tone:r=`neutral`,href:i,ariaLabel:a,delta:o,deltaTone:s=`neutral`,trend:l})=>{let u=n&&typeof t==`number`&&t>0,d=(0,kI.jsxs)(kI.Fragment,{children:[(0,kI.jsxs)(`span`,{className:FI,children:[(0,kI.jsx)(`span`,{className:c(II,MI[r],u&&LI),children:t}),o===void 0?null:(0,kI.jsx)(`span`,{className:c(RI,zI[s]),children:o}),l&&l.length>1?(0,kI.jsx)(`svg`,{className:BI,viewBox:`0 0 ${HI} ${UI}`,"aria-hidden":`true`,children:(0,kI.jsx)(`polyline`,{points:OI(l),fill:`none`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}):null]}),(0,kI.jsx)(`span`,{className:VI,children:e})]});return i?(0,kI.jsxs)(`a`,{className:c(AI,jI[r],NI),href:i,"aria-label":a,children:[d,(0,kI.jsx)(`span`,{className:PI,"aria-hidden":`true`,children:(0,kI.jsx)(Ot,{size:16})})]}):(0,kI.jsx)(`div`,{className:c(AI,jI[r]),"aria-label":a,role:a?`group`:void 0,children:d})}})))()}function KI(e,t){let{min:n,max:r,gap:i}=XI[t],a=`(100% - ${e-1} * ${i}) / ${e}`;return u`
    gap: ${i};
    /* The percentage floor and the tiles' min-width keep the column count out of the list's
       intrinsic width, which grid and flex ancestors pass on rather than shrink below. */
    grid-template-columns: repeat(auto-fill, minmax(max(${n}, ${a}), 1fr));
    max-width: calc(${e} * ${r} + (${e} - 1) * ${i});

    > li {
      min-width: 0;
    }
  `}var qI,JI,YI,XI,ZI,QI;function $I(){return($I=t((()=>{l(),qI=e(r()),JI=W(),YI=4,XI={default:{min:`10rem`,max:`18rem`,gap:`var(--space-4)`},compact:{min:`9rem`,max:`13rem`,gap:`var(--space-3)`}},ZI=u`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
`,QI=({children:e,ariaLabel:t,maxColumns:n=YI,size:r=`default`})=>(0,JI.jsx)(`ul`,{className:c(ZI,KI(n,r)),role:`list`,"aria-label":t,children:qI.Children.map(e,(e,t)=>(0,JI.jsx)(`li`,{children:e},t))})})))()}function eL(e){return u`
    left: ${e};
  `}var tL,nL,rL,iL,aL,oL,sL,cL,lL,uL,dL,fL,pL,mL,hL,gL,_L,vL,yL,bL,xL,SL,CL,wL,TL,EL,DL,OL,kL,AL,jL,ML,NL,PL,FL;function IL(){return(IL=t((()=>{l(),tL=`3rem`,nL=u`
  position: relative;
`,rL=u`
  overflow-x: auto;
`,iL=u`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-2);
`,aL=u`
  table-layout: fixed;
`,oL=u`
  font-size: var(--font-size-1);
`,sL=u`
  text-align: start;
  padding-bottom: var(--space-3);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
`,cL=u`
  text-align: start;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  vertical-align: top;
`,lL=u`
  padding: var(--space-2) var(--space-3);
`,uL=u`
  color: var(--color-gray-500);
  font-weight: 600;
  white-space: nowrap;
`,dL=u`
  color: var(--color-gray-700);
  font-variant-numeric: tabular-nums;
`,fL=u`
  white-space: nowrap;
`,pL=u`
  white-space: normal;
`,mL=u`
  color: var(--color-gray-500);
`,hL=u`
  width: auto;
`,gL={start:u`
    text-align: start;
  `,center:u`
    text-align: center;
  `,end:u`
    text-align: end;
  `},_L=u`
  & tbody tr:hover > * {
    background: var(--color-clear-100);
  }
`,vL=u`
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--space-5);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,yL=u`
  left: 0;
  background: linear-gradient(
    to right,
    var(--table-fade-color, var(--color-clear-50)),
    transparent
  );
`,bL=u`
  right: 0;
  background: linear-gradient(to left, var(--table-fade-color, var(--color-clear-50)), transparent);
`,xL=u`
  opacity: 1;
`,SL=u`
  position: sticky;
  z-index: 1;
  background: var(--table-sticky-bg, var(--color-clear-50));
`,CL=u`
  box-shadow: 6px 0 6px -6px rgba(10, 15, 23, 0.25);
`,wL=u`
  /* An auto table layout treats a width as a preference and shrinks the column to its content
     when the row is tight, which slides the pinned column off its sticky offset and over the
     neighbouring column. A min-width is the floor that offset needs. */
  width: ${tL};
  min-width: ${tL};
  padding-right: 0;
`,TL=u`
  width: ${tL};
`,EL=u`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  &[data-disabled="true"] {
    cursor: not-allowed;
  }

  & input:focus-visible + span {
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18);
  }
`,DL=u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: var(--space-1);
  background: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  &:hover {
    color: var(--color-gray-700);
  }
`,OL=u`
  width: 8px;
  height: 6px;
  flex: none;
  background: currentColor;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  opacity: 0.3;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &[data-direction="ascending"] {
    opacity: 1;
  }

  &[data-direction="descending"] {
    opacity: 1;
    transform: rotate(180deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,kL=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-5);
  height: var(--space-5);
  padding: 0;
  border: 0;
  border-radius: var(--space-2);
  background: none;
  color: var(--color-gray-500);
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 var(--focus-ring-width) var(--focus-ring-color);
  }

  &:hover {
    background: var(--color-clear-200);
    color: var(--color-gray-700);
  }
`,AL=u`
  display: inline-flex;
  transition: transform 0.15s ease;

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,jL=u`
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  background: var(--color-clear-100);
  color: var(--color-gray-700);
`,ML=u`
  display: none;
`,NL=u`
  display: none;
`,PL=u`
  display: contents;
`,FL=u`
  @media (max-width: ${639.98}px) {
    & table {
      display: block;
      width: 100%;
    }

    & colgroup {
      display: none;
    }

    & tbody {
      display: block;
    }

    & tr {
      display: block;
      padding: var(--space-3);
      border: 1px solid var(--color-clear-300);
      border-radius: var(--surface-radius);
    }

    & tr + tr {
      margin-top: var(--space-3);
    }

    & th,
    & td {
      position: static;
      box-shadow: none;
    }

    /* Blocks rather than table parts: table layout sizes a header row from its columns and
       ignores the 1px clip, which pushed the header cells right off the viewport. The stacking
       table spells its ARIA roles out, so dropping the table display does not cost semantics. */
    & thead {
      position: absolute;
      display: block;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    }

    & thead tr {
      display: block;
    }

    & thead th {
      display: block;
      width: 1px;
      padding: 0;
      overflow: hidden;
    }

    & td:not([data-table-control="true"], [data-table-detail="true"]) {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-1) var(--space-3);
      align-items: baseline;
      min-width: 0;
      padding: var(--space-2) 0;
      border-bottom: 0;
      white-space: normal;
    }

    & td[data-table-control="true"] {
      display: inline-flex;
      width: auto;
      padding: 0 var(--space-3) var(--space-2) 0;
      border-bottom: 0;
    }

    & [data-table-expand="true"] {
      width: auto;
      gap: var(--space-2);
      padding: 0 var(--space-2);
    }

    & [data-table-expand-label="true"] {
      display: inline;
    }

    & td[data-table-detail="true"] {
      display: block;
      margin-top: var(--space-2);
      border-bottom: 0;
    }

    & [data-table-stack-label="true"] {
      display: block;
      flex: 0 0 40%;
      color: var(--color-gray-500);
      font-size: var(--font-size-0);
      font-weight: 600;
      /* A numeric column's end alignment lands on the label too, sending it to the opposite
         edge from the labels beside it. */
      text-align: start;
      overflow-wrap: anywhere;
    }

    /* Keeping the flex default min-width wraps a value too wide to sit beside its label — a
       status pill, a badge and an arrow — onto a line of its own instead of past the card's
       edge; breaking anywhere stops ordinary text doing that for want of a break point. */
    & [data-table-stack-value="true"] {
      display: block;
      flex: 1 1 0;
      overflow-wrap: anywhere;
    }
  }
`})))()}function LL(e){return typeof e==`number`?`${e}px`:e}function RL(e){return u`
    width: ${e};
  `}function zL(e){return u`
    min-width: ${LL(e)};
  `}function BL(e){return e.width!==void 0||e.grow===void 0||e.grow===!1?0:e.grow===!0?1:Math.max(e.grow,0)}function VL(e){return e.align===void 0?void 0:gL[e.align]}function HL(e){if(e.nowrap!==void 0)return e.nowrap?fL:pL}function UL(e){let{onSort:t,sortDirection:n}=e;return(0,Q.jsxs)(`button`,{className:DL,onClick:()=>t(n===`ascending`?`descending`:`ascending`),type:`button`,children:[(0,Q.jsx)(`span`,{children:e.header}),(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:OL,"data-direction":n??void 0})]})}function WL(e){return e===0?`0`:`calc(${tL} * ${e})`}function GL({isChecked:e,isDisabled:t=!1,isIndeterminate:n=!1,label:r,onChange:i}){let a=(0,qL.useRef)(null);return(0,qL.useEffect)(()=>{a.current!==null&&(a.current.indeterminate=n)},[n]),(0,Q.jsxs)(`label`,{className:EL,"data-disabled":t?`true`:`false`,children:[(0,Q.jsx)(`input`,{"aria-label":r,checked:e,className:JS,disabled:t,onChange:e=>i(e.target.checked),ref:a,type:`checkbox`}),(0,Q.jsxs)(`span`,{"aria-hidden":`true`,className:US(JL,YL),"data-disabled":t?`true`:`false`,"data-indeterminate":n?`true`:`false`,"data-selected":e?`true`:`false`,children:[(0,Q.jsx)(`span`,{className:c(rC,aC,e&&!n&&iC)}),(0,Q.jsx)(`span`,{className:c(rC,oC,n&&iC)})]})]})}function KL({columns:e,rows:t,rowKey:n,caption:r,showCaption:a=!1,density:o=`comfortable`,emptyState:s,overflowCue:l=!0,stickyFirstColumn:u=!1,responsive:d,rowHover:f=!1,expandableRow:p,selection:m,className:h}){let{t:g}=i(`shared-module`),_=(0,qL.useRef)(null),v=(0,qL.useId)(),[y,b]=(0,qL.useState)(()=>new Set),[x,S]=(0,qL.useState)({start:!1,end:!1}),C=d===`stack`,w=m!==void 0,T=p!==void 0,E=+!!w+ +!!T,D=e.length+E,O=o===`compact`,k=l||u;(0,qL.useEffect)(()=>{let e=_.current;if(!k||e===null)return;let t=()=>{let t=Math.abs(e.scrollLeft),n=e.scrollWidth-e.clientWidth;S(e=>{let r=t>1,i=n-t>1;return e.start===r&&e.end===i?e:{start:r,end:i}})};t(),e.addEventListener(`scroll`,t,{passive:!0});let n=typeof ResizeObserver>`u`?null:new ResizeObserver(t);n?.observe(e);let r=e.firstElementChild;return r!==null&&n?.observe(r),()=>{e.removeEventListener(`scroll`,t),n?.disconnect()}},[k]);let A=e.some(e=>e.width!==void 0),j=e.map(e=>BL(e)),M=j.reduce((e,t)=>e+t,0),N=new Set(j.filter(e=>e>0)).size>1,P=e.flatMap(e=>e.width===void 0?[]:[LL(e.width)]),F=A||M>0||E>0,I=(e,t)=>{if(e.width!==void 0)return RL(LL(e.width));let n=j[t]??0;if(n!==0)return A?N?RL(`calc((100% - (${P.join(` + `)})) * ${n} / ${M})`):hL:RL(`${Number((n/M*100).toFixed(4))}%`)},L=e.map((e,t)=>({col:I(e,t),cell:c(A||e.minWidth===void 0?void 0:zL(e.minWidth),HL(e),VL(e))})),R=e=>u?c(SL,eL(WL(e)),x.start&&CL):void 0,z=R(0),ee=R(+!!w),te=R(E),ne=c(cL,O&&lL),B=s===void 0?g(`table.noRows`):s,re=C?FL:void 0,ie=new Set(m?.selectedKeys??[]),ae=t.flatMap((e,t)=>m?.isRowSelectable?.(e)??!0?[String(n(e,t))]:[]),oe=ae.filter(e=>ie.has(e)).length,se=ae.length>0&&oe===ae.length,ce=e=>{let t=new Set(ie);for(let n of ae)e?t.add(n):t.delete(n);m?.onChange(t)},le=(e,t)=>{let n=new Set(ie);t?n.add(e):n.delete(e),m?.onChange(n)},ue=e=>{b(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},de=(e,t)=>C?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:ML,"data-table-stack-label":`true`,children:e.header}),(0,Q.jsx)(`span`,{className:PL,"data-table-stack-value":`true`,children:e.cell(t)})]}):e.cell(t);return(0,Q.jsxs)(`div`,{className:c(nL,re,h),children:[(0,Q.jsx)(`div`,{className:rL,ref:_,children:(0,Q.jsxs)(`table`,{className:c(iL,A&&aL,O&&oL,f&&_L),role:C?`table`:void 0,children:[a?(0,Q.jsx)(`caption`,{className:sL,children:r}):(0,Q.jsx)(yt,{elementType:`caption`,children:r}),F?(0,Q.jsxs)(`colgroup`,{children:[w?(0,Q.jsx)(`col`,{className:TL}):null,T?(0,Q.jsx)(`col`,{className:TL}):null,L.map((e,t)=>(0,Q.jsx)(`col`,{className:e.col},t))]}):null,(0,Q.jsx)(`thead`,{role:C?`rowgroup`:void 0,children:(0,Q.jsxs)(`tr`,{role:C?`row`:void 0,children:[w?(0,Q.jsx)(`th`,{className:c(ne,uL,wL,z),role:C?`columnheader`:void 0,scope:`col`,children:(0,Q.jsx)(GL,{isChecked:se,isDisabled:ae.length===0,isIndeterminate:oe>0&&!se,label:m.selectAllLabel??g(`table.selectAllRows`),onChange:ce})}):null,T?(0,Q.jsx)(`th`,{className:c(ne,uL,wL,ee),role:C?`columnheader`:void 0,scope:`col`,children:(0,Q.jsx)(yt,{elementType:ZL,children:g(`table.detailsColumn`)})}):null,e.map((e,t)=>(0,Q.jsx)(`th`,{"aria-sort":e.onSort===void 0?void 0:e.sortDirection??`none`,className:c(ne,uL,L[t]?.cell,t===0?te:void 0),role:C?`columnheader`:void 0,scope:`col`,children:e.onSort===void 0?e.header:UL({...e,onSort:e.onSort})},t))]})}),(0,Q.jsx)(`tbody`,{role:C?`rowgroup`:void 0,children:t.length===0?B===null?null:(0,Q.jsx)(`tr`,{role:C?`row`:void 0,children:(0,Q.jsx)(`td`,{className:c(ne,dL,mL),colSpan:D,"data-table-detail":`true`,role:C?`cell`:void 0,children:B})}):t.map((t,r)=>{let i=n(t,r),a=p?.(t)??null,o=y.has(String(i)),s=`${v}-${r}`;return(0,Q.jsxs)(qL.Fragment,{children:[(0,Q.jsxs)(`tr`,{role:C?`row`:void 0,children:[w?(0,Q.jsx)(`td`,{className:c(ne,dL,wL,z),"data-table-control":`true`,role:C?`cell`:void 0,children:(0,Q.jsx)(GL,{isChecked:ie.has(String(i)),isDisabled:!(m.isRowSelectable?.(t)??!0),label:m.rowLabel?.(t)??g(`table.selectRow`),onChange:e=>le(String(i),e)})}):null,T?(0,Q.jsx)(`td`,{className:c(ne,dL,wL,ee),"data-table-control":`true`,role:C?`cell`:void 0,children:a===null?null:(0,Q.jsxs)(`button`,{"aria-controls":o?s:void 0,"aria-expanded":o,"aria-label":g(o?`table.collapseRow`:`table.expandRow`),className:kL,"data-table-expand":`true`,onClick:()=>ue(String(i)),type:`button`,children:[(0,Q.jsx)(`span`,{className:AL,"data-expanded":o?`true`:`false`,children:(0,Q.jsx)(iO,{direction:XL})}),C?(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:NL,"data-table-expand-label":`true`,children:g(o?`table.collapseRow`:`table.expandRow`)}):null]})}):null,e.map((e,n)=>(0,Q.jsx)(`td`,{className:c(ne,dL,L[n]?.cell,n===0?te:void 0),role:C?`cell`:void 0,children:de(e,t)},n))]}),a!==null&&o?(0,Q.jsx)(`tr`,{role:C?`row`:void 0,children:(0,Q.jsx)(`td`,{className:c(jL,O&&lL),colSpan:D,"data-table-detail":`true`,id:s,role:C?`cell`:void 0,children:a})}):null]},i)})})]})}),l?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:c(vL,yL,x.start&&xL)}),(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:c(vL,bL,x.end&&xL)})]}):null]})}var qL,Q,JL,YL,XL,ZL;function QL(){return(QL=t((()=>{l(),qL=e(r()),De(),a(),cC(),sO(),IL(),Q=W(),JL=`md`,YL=`checkbox`,XL=`right`,ZL=`span`})))()}function $L(){return($L=t((()=>{l(),s`
  :root {
    /* sizing */
    --control-gap: var(--space-3);
    --control-radius: var(--space-2);
    --surface-radius: 8px;

    --control-height-sm: var(--space-5);
    --control-height-md: var(--space-6);
    --control-height-lg: var(--space-7);

    --control-padding-x-sm: var(--space-3);
    --control-padding-x-md: var(--space-4);
    --control-padding-x-lg: var(--space-5);

    --font-size-sm: var(--font-size-2);
    --font-size-md: var(--font-size-2);
    --font-size-lg: var(--font-size-3);

    /* stacking order. A dropdown or tooltip portals to the body as a sibling of the dialog it
       was opened from, not a descendant, so its layer has to clear the dialog's own. */
    --z-dialog: 1000;
    --z-popover: 1500;

    /* spacing scale. A new step is inserted as a half step; renumbering would move every caller. */
    --space-0: 0px;
    --space-1: 2px;
    --space-2: 4px;
    --space-3: 8px;
    --space-3-5: 12px;
    --space-4: 16px;
    --space-4-5: 24px;
    --space-5: 32px;
    --space-6: 40px;
    --space-7: 48px;

    /* type scale */
    --font-size-0: 12px;
    --font-size-1: 14px;
    --font-size-2: 16px;
    --font-size-3: 18px;
    --font-size-3-5: 20px;
    --font-size-4: 24px;
    --font-size-5: 32px;

    /* focus ring */
    --focus-ring-width: 2px;
    --focus-ring-offset: 2px;
    --focus-ring-offset-color: transparent;
    --focus-ring-color: rgba(31, 105, 100, 0.6);

    /* disabled */
    --btn-disabled-opacity: 0.55;

    /* loading */
    --btn-loading-opacity: 0.8;

    /* pressed */
    --btn-pressed-offset: 2px;
    --btn-pressed-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

    /* transitions */
    --btn-transition: all 0.2s;
    --btn-press-transition: all 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);

    /* palette */
    --color-blue-25: #fbfcfd;
    --color-blue-50: #f2f5f7;
    --color-blue-75: #edf1f5;
    --color-blue-100: #dae3eb;
    --color-blue-200: #b5c7d7;
    --color-blue-300: #90abc3;
    --color-blue-400: #6b8faf;
    --color-blue-500: #46749b;
    --color-blue-600: #215887;
    --color-blue-700: #08457a;
    --color-blue-800: #0e3657;
    --color-blue-900: #0f263b;
    --color-blue-1000: #0a1722;

    --color-green-25: #fbfcfc;
    --color-green-50: #f2f5f5;
    --color-green-75: #edf3f2;
    --color-green-100: #dae6e5;
    --color-green-200: #b4cdcb;
    --color-green-300: #8fb4b2;
    --color-green-400: #6a9b98;
    --color-green-500: #44827e;
    --color-green-600: #1f6964;
    --color-green-700: #065853;
    --color-green-800: #154541;
    --color-green-900: #163331;
    --color-green-1000: #122221;

    --color-crimson-25: #fdfbfb;
    --color-crimson-50: #f7f3f4;
    --color-crimson-75: #f4edee;
    --color-crimson-100: #eadbdd;
    --color-crimson-200: #d5b7ba;
    --color-crimson-300: #c09397;
    --color-crimson-400: #ac6e75;
    --color-crimson-500: #974a53;
    --color-crimson-600: #822630;
    --color-crimson-700: #740e19;
    --color-crimson-800: #57141c;
    --color-crimson-900: #3d1316;
    --color-crimson-1000: #260e0f;

    --color-red-25: #fdfbfb;
    --color-red-50: #f9f4f3;
    --color-red-75: #f7f0ef;
    --color-red-100: #f0e1dd;
    --color-red-200: #e2c2bc;
    --color-red-300: #d3a49a;
    --color-red-400: #c58579;
    --color-red-500: #b66757;
    --color-red-600: #a84835;
    --color-red-700: #9e341f;
    --color-red-800: #823425;
    --color-red-900: #693126;
    --color-red-1000: #512c24;

    --color-yellow-25: #fdfcf6;
    --color-yellow-50: #fcf9e8;
    --color-yellow-75: #faf6e0;
    --color-yellow-100: #faf6e3;
    --color-yellow-200: #f6edc6;
    --color-yellow-300: #f1e4a9;
    --color-yellow-400: #ecdb8d;
    --color-yellow-500: #e8d270;
    --color-yellow-600: #e3c954;
    --color-yellow-700: #e0c341;
    --color-yellow-800: #d5bf5b;
    --color-yellow-900: #cbba6e;
    --color-yellow-1000: #c2b57c;

    --color-purple-25: #fcfbfd;
    --color-purple-50: #f5f3f9;
    --color-purple-75: #f2f0f8;
    --color-purple-100: #e5e0f1;
    --color-purple-200: #cbc1e2;
    --color-purple-300: #b1a2d4;
    --color-purple-400: #9783c5;
    --color-purple-500: #7c64b7;
    --color-purple-600: #6245a9;
    --color-purple-700: #51309f;
    --color-purple-800: #422b77;
    --color-purple-900: #312455;
    --color-purple-1000: #221b38;

    --color-gray-25: #fcfcfc;
    --color-gray-50: #f4f4f5;
    --color-gray-75: #eeeff0;
    --color-gray-100: #dddfe0;
    --color-gray-200: #babdc2;
    --color-gray-300: #989ca3;
    --color-gray-400: #767b85;
    --color-gray-500: #535a66;
    --color-gray-600: #313947;
    --color-gray-700: #1a2333;
    --color-gray-800: #0a0f17;
    --color-gray-900: #010203;
    --color-gray-1000: #000000;

    --color-clear-25: #fbfcfc;
    --color-clear-50: #ffffff;
    --color-clear-75: #fbfcfc;
    --color-clear-100: #f5f6f7;
    --color-clear-200: #ebedee;
    --color-clear-300: #e2e4e6;
    --color-clear-400: #d8dbdd;
    --color-clear-500: #ced2d5;
    --color-clear-600: #c4c9cd;
    --color-clear-700: #bec3c7;
    --color-clear-800: #b8bdc1;
    --color-clear-900: #b3b7ba;
    --color-clear-1000: #adb1b4;

    --color-primary-100: #ffffff;
    --color-primary-200: #000000;

    --gradient-green: linear-gradient(to bottom right, #075854, #4de2c5);
    --gradient-blue: linear-gradient(-70deg, #020344 0%, #28b8d5 100%);

    /* link. Blue, not the brand green: a green link is read as a status in a table of statuses,
       and every other link in the app is blue. */
    --link-fg: var(--color-blue-700);
    --link-fg-hover: var(--color-blue-800);

    /* primary */
    --btn-primary-bg: var(--color-green-600);
    --btn-primary-fg: var(--color-primary-100);
    --btn-primary-border: var(--color-green-600);
    --btn-primary-bg-hover: var(--color-primary-100);
    --btn-primary-fg-hover: var(--color-green-700);
    --btn-primary-border-hover: var(--color-primary-100);
    --btn-primary-bg-pressed: var(--color-green-800);
    --btn-primary-shadow-hover: 0 4px 12px rgba(31, 105, 100, 0.15);
    --btn-primary-outline-width: 3px;

    /* secondary */
    --btn-secondary-bg: var(--color-clear-200);
    --btn-secondary-fg: var(--color-gray-700);
    --btn-secondary-border: var(--color-clear-200);
    --btn-secondary-bg-hover: var(--color-gray-700);
    --btn-secondary-fg-hover: var(--color-clear-50);
    --btn-secondary-border-hover: var(--color-gray-700);
    --btn-secondary-bg-pressed: var(--color-clear-400);
    --btn-secondary-shadow-hover: 0 4px 12px rgba(26, 35, 51, 0.15);
    --btn-secondary-outline-width: 3px;

    /* tertiary */
    --btn-tertiary-bg: transparent;
    --btn-tertiary-fg: var(--color-gray-700);
    --btn-tertiary-border: var(--color-clear-400);
    --btn-tertiary-bg-hover: var(--color-gray-700);
    --btn-tertiary-fg-hover: var(--color-primary-100);
    --btn-tertiary-border-hover: var(--color-gray-700);
    --btn-tertiary-bg-pressed: var(--color-clear-300);
    --btn-tertiary-shadow-hover: 0 4px 12px rgba(26, 35, 51, 0.15);
    --btn-tertiary-outline-width: 3px;

    /* destructive */
    --btn-destructive-bg: var(--color-crimson-700);
    --btn-destructive-fg: var(--color-primary-100);
    --btn-destructive-border: var(--color-crimson-700);
    --btn-destructive-bg-hover: var(--color-primary-100);
    --btn-destructive-fg-hover: var(--color-crimson-800);
    --btn-destructive-border-hover: var(--color-primary-100);
    --btn-destructive-bg-pressed: var(--color-crimson-900);
    --btn-destructive-shadow-hover: 0 4px 12px rgba(116, 14, 25, 0.15);
    --btn-destructive-outline-width: 3px;

    /* icon */
    --btn-icon-bg: transparent;
    --btn-icon-fg: var(--color-gray-700);
    --btn-icon-border: transparent;
    --btn-icon-bg-hover: transparent;
    --btn-icon-fg-hover: var(--color-gray-800);
    --btn-icon-border-hover: transparent;
    --btn-icon-bg-pressed: transparent;
    --btn-icon-fg-pressed: var(--color-gray-900);
    --btn-icon-shadow-hover: none;
    --btn-icon-padding-x-sm: var(--space-3);
    --btn-icon-padding-x-md: calc(var(--space-4) - (var(--space-1) * 2));
    --btn-icon-padding-x-lg: var(--space-4);

    /* field */
    --field-bg: #ffffff;
    --field-bg-disabled: var(--color-gray-50);
    --field-border-color: var(--color-gray-400);
    --field-border-color-focus: var(--color-green-500);
    --field-border-color-invalid: var(--color-crimson-600);
    --field-text-color: var(--color-gray-800);
    --field-text-color-disabled: var(--color-gray-400);
    --field-label-color: var(--color-gray-500);
    --field-label-color-focus: var(--color-green-600);
    --field-label-color-invalid: var(--color-crimson-700);
    --field-message-color: var(--color-gray-500);
    --field-message-color-invalid: var(--color-crimson-700);
    --field-icon-color: var(--color-gray-400);
    --field-icon-slot-width: 2.5rem;
    --field-transition:
      border-color 160ms ease,
      box-shadow 200ms cubic-bezier(0.2, 0, 0, 1),
      padding-top 200ms cubic-bezier(0.2, 0, 0, 1),
      padding-bottom 200ms cubic-bezier(0.2, 0, 0, 1);

    /* compatibility aliases for the broader form component set */
    --field-fg: var(--field-text-color);
    --field-label: var(--field-label-color);
    --field-description: var(--field-message-color);
    --field-placeholder: var(--color-gray-400);
    --field-chrome: var(--field-icon-color);
    --field-border: var(--field-border-color);
    --field-border-focus: var(--field-border-color-focus);
    --field-error: var(--field-message-color-invalid);
    --field-error-border: var(--field-border-color-invalid);
    --field-disabled-bg: var(--field-bg-disabled);
    --field-disabled-fg: var(--field-text-color-disabled);
    --field-disabled-border: var(--field-border-color);
    --field-readonly-bg: var(--color-blue-25);
    --field-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);
    --field-notice: var(--color-yellow-900);
    --field-option-highlight: var(--color-blue-50);
    --field-option-selected: var(--color-green-50);

    --switch-track-off: var(--color-clear-800);
    --switch-track-on: var(--color-green-600);

    /* switch-specific */
    --switch-thumb: var(--color-primary-100);
    --switch-focus-ring: rgba(31, 105, 100, 0.18);

    /* query result */
    --query-skeleton-surface-light:
      linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.65)),
      rgba(0, 0, 0, 0.03);
    --query-skeleton-surface-border-light: rgba(0, 0, 0, 0.06);
    --query-skeleton-block-light: rgba(0, 0, 0, 0.05);

    --query-skeleton-surface-dark:
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
      rgba(255, 255, 255, 0.03);
    --query-skeleton-surface-border-dark: rgba(255, 255, 255, 0.07);
    --query-skeleton-block-dark: rgba(255, 255, 255, 0.06);

    --query-shimmer-mid: rgba(255, 255, 255, 0.18);
    --query-shimmer-edge: rgba(255, 255, 255, 0.05);

    --query-progress-track-light: rgba(0, 0, 0, 0.05);
    --query-progress-beam-light: rgba(255, 255, 255, 0.6);
    --query-progress-track-dark: rgba(255, 255, 255, 0.06);
    --query-progress-beam-dark: rgba(255, 255, 255, 0.45);

    --query-refresh-content-opacity: 0.6;
    --query-refresh-blur: 6px;
    --query-refresh-content-scale: 0.992;
    --query-content-transition: 180ms ease;
    --query-border-width: 1px;
    --query-shimmer-duration: 1.6s;
    --query-progress-beam-duration: 1.1s;
    --query-spinner-duration: 0.8s;
  }
`})))()}var eR,tR;function nR(){return(nR=t((()=>{eR=r(),tR=(0,eR.createContext)({})})))()}function rR(e){let t=(0,iR.useRef)(null);return t.current===null&&(t.current=e()),t.current}var iR;function aR(){return(aR=t((()=>{iR=r()})))()}var oR;function sR(){return(sR=t((()=>{oR=typeof window<`u`})))()}var cR,lR;function uR(){return(uR=t((()=>{cR=r(),sR(),lR=oR?cR.useLayoutEffect:cR.useEffect})))()}var dR,fR;function pR(){return(pR=t((()=>{dR=r(),fR=(0,dR.createContext)(null)})))()}function mR(e,t){e.indexOf(t)===-1&&e.push(t)}function hR(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var gR;function _R(){return(_R=t((()=>{gR=(e,t,n)=>n>t?t:n<e?e:n})))()}var vR,yR;function bR(){return(bR=t((()=>{vR=()=>{},yR=()=>{}})))()}var xR;function SR(){return(SR=t((()=>{xR={}})))()}var CR;function wR(){return(wR=t((()=>{CR=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)})))()}var TR;function ER(){return(ER=t((()=>{TR=e=>typeof e==`object`&&!!e})))()}var DR;function OR(){return(OR=t((()=>{DR=e=>/^0[^.\s]+$/u.test(e)})))()}function kR(e){let t;return()=>(t===void 0&&(t=e()),t)}var AR;function jR(){return(jR=t((()=>{AR=e=>e})))()}var MR;function NR(){return(NR=t((()=>{MR=(...e)=>e.reduce((e,t)=>n=>t(e(n)))})))()}var PR;function FR(){return(FR=t((()=>{PR=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1}})))()}var IR;function LR(){return(LR=t((()=>{IR=class{constructor(){this.subscriptions=[]}add(e){return mR(this.subscriptions,e),()=>hR(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}})))()}var RR,zR;function BR(){return(BR=t((()=>{RR=e=>e*1e3,zR=e=>e/1e3})))()}var VR;function HR(){return(HR=t((()=>{VR=(e,t)=>t?1e3/t*e:0})))()}function UR(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=GR(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>KR&&++s<qR);return o}function WR(e,t,n,r){if(e===t&&n===r)return AR;let i=t=>UR(t,0,1,e,n);return e=>e===0||e===1?e:GR(i(e),t,r)}var GR,KR,qR;function JR(){return(JR=t((()=>{jR(),GR=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,KR=1e-7,qR=12})))()}var YR;function XR(){return(XR=t((()=>{YR=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2})))()}var ZR;function QR(){return(QR=t((()=>{ZR=e=>t=>1-e(1-t)})))()}var $R,ez,tz;function nz(){return(nz=t((()=>{JR(),XR(),QR(),$R=WR(.33,1.53,.69,.99),ez=ZR($R),tz=YR(ez)})))()}var rz;function iz(){return(iz=t((()=>{nz(),rz=e=>e>=1?1:(e*=2)<1?.5*ez(e):.5*(2-2**(-10*(e-1)))})))()}var az,oz,sz;function cz(){return(cz=t((()=>{XR(),QR(),az=e=>1-Math.sin(Math.acos(e)),oz=ZR(az),sz=YR(az)})))()}var lz,uz,dz;function fz(){return(fz=t((()=>{JR(),lz=WR(.42,0,1,1),uz=WR(0,0,.58,1),dz=WR(.42,0,.58,1)})))()}var pz;function mz(){return(mz=t((()=>{pz=e=>Array.isArray(e)&&typeof e[0]!=`number`})))()}var hz;function gz(){return(gz=t((()=>{hz=e=>Array.isArray(e)&&typeof e[0]==`number`})))()}var _z,vz,yz;function bz(){return(bz=t((()=>{bR(),jR(),iz(),nz(),cz(),JR(),fz(),gz(),_z={linear:AR,easeIn:lz,easeInOut:dz,easeOut:uz,circIn:az,circInOut:sz,circOut:oz,backIn:ez,backInOut:tz,backOut:$R,anticipate:rz},vz=e=>typeof e==`string`,yz=e=>{if(hz(e)){yR(e.length===4,`Cubic bezier arrays must contain four numerical values.`,`cubic-bezier-length`);let[t,n,r,i]=e;return WR(t,n,r,i)}return vz(e)?(yR(_z[e]!==void 0,`Invalid easing type '${e}'`,`invalid-easing-type`),_z[e]):e}})))()}var xz;function Sz(){return(Sz=t((()=>{xz=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`]})))()}function Cz(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}function wz(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=xz.reduce((e,t)=>(e[t]=Cz(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=xR.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Tz),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:xz.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<xz.length;t++)o[xz[t]].cancel(e)},state:i,steps:o}}var Tz;function Ez(){return(Ez=t((()=>{SR(),Sz(),Tz=40})))()}var Dz,Oz,kz,Az;function jz(){return(jz=t((()=>{jR(),Ez(),{schedule:Dz,cancel:Oz,state:kz,steps:Az}=wz(typeof requestAnimationFrame<`u`?requestAnimationFrame:AR,!0)})))()}function Mz(){Nz=void 0}var Nz,Pz;function Fz(){return(Fz=t((()=>{SR(),jz(),Pz={now:()=>(Nz===void 0&&Pz.set(kz.isProcessing||xR.useManualTiming?kz.timestamp:performance.now()),Nz),set:e=>{Nz=e,queueMicrotask(Mz)}}})))()}function Iz(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Lz,Rz,zz,Bz,Vz;function Hz(){return(Hz=t((()=>{Lz=e=>t=>typeof t==`string`&&t.startsWith(e),Rz=Lz(`--`),zz=Lz(`var(--`),Bz=e=>zz(e)?Vz.test(e.split(`/*`)[0].trim()):!1,Vz=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu})))()}var Uz,Wz,Gz;function Kz(){return(Kz=t((()=>{_R(),Uz={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Wz={...Uz,transform:e=>gR(0,1,e)},Gz={...Uz,default:1}})))()}var qz;function Jz(){return(Jz=t((()=>{qz=e=>Math.round(e*1e5)/1e5})))()}var Yz;function Xz(){return(Xz=t((()=>{Yz=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu})))()}function Zz(e){return e==null}var Qz;function $z(){return($z=t((()=>{Qz=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu})))()}var eB,tB;function nB(){return(nB=t((()=>{Xz(),$z(),eB=(e,t)=>n=>!!(typeof n==`string`&&Qz.test(n)&&n.startsWith(e)||t&&!Zz(n)&&Object.prototype.hasOwnProperty.call(n,t)),tB=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(Yz);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}}})))()}var rB,iB,aB;function oB(){return(oB=t((()=>{_R(),Kz(),Jz(),nB(),rB=e=>gR(0,255,e),iB={...Uz,transform:e=>Math.round(rB(e))},aB={test:eB(`rgb`,`red`),parse:tB(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+iB.transform(e)+`, `+iB.transform(t)+`, `+iB.transform(n)+`, `+qz(Wz.transform(r))+`)`}})))()}function sB(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var cB;function lB(){return(lB=t((()=>{oB(),nB(),cB={test:eB(`#`),parse:sB,transform:aB.transform}})))()}var uB,dB,fB,$,pB,mB,hB;function gB(){return(gB=t((()=>{uB=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),dB=uB(`deg`),fB=uB(`%`),$=uB(`px`),pB=uB(`vh`),mB=uB(`vw`),hB={...fB,parse:e=>fB.parse(e)/100,transform:e=>fB.transform(e*100)}})))()}var _B;function vB(){return(vB=t((()=>{Kz(),gB(),Jz(),nB(),_B={test:eB(`hsl`,`hue`),parse:tB(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+fB.transform(qz(t))+`, `+fB.transform(qz(n))+`, `+qz(Wz.transform(r))+`)`}})))()}var yB;function bB(){return(bB=t((()=>{lB(),vB(),oB(),yB={test:e=>aB.test(e)||cB.test(e)||_B.test(e),parse:e=>aB.test(e)?aB.parse(e):_B.test(e)?_B.parse(e):cB.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?aB.transform(e):_B.transform(e),getAnimatableNone:e=>{let t=yB.parse(e);return t.alpha=0,yB.transform(t)}}})))()}var xB;function SB(){return(SB=t((()=>{xB=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu})))()}function CB(e){return isNaN(e)&&typeof e==`string`&&(e.match(Yz)?.length||0)+(e.match(xB)?.length||0)>0}function wB(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(PB,e=>(yB.test(e)?(r.color.push(a),i.push(AB),n.push(yB.parse(e))):e.startsWith(MB)?(r.var.push(a),i.push(jB),n.push(e)):(r.number.push(a),i.push(kB),n.push(parseFloat(e))),++a,NB)).split(NB),indexes:r,types:i}}function TB(e){return wB(e).values}function EB({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===kB?qz(r[a]):e===AB?yB.transform(r[a]):r[a]}return i}}function DB(e){return EB(wB(e))}function OB(e){let t=wB(e);return EB(t)(t.values.map((e,n)=>IB(e,t.split[n])))}var kB,AB,jB,MB,NB,PB,FB,IB,LB;function RB(){return(RB=t((()=>{bB(),SB(),Xz(),Jz(),kB=`number`,AB=`color`,jB=`var`,MB=`var(`,NB="${}",PB=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,FB=e=>typeof e==`number`?0:yB.test(e)?yB.getAnimatableNone(e):e,IB=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:FB(e),LB={test:CB,parse:TB,createTransformer:DB,getAnimatableNone:OB}})))()}function zB(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function BB({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=zB(s,r,e+1/3),a=zB(s,r,e),o=zB(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function VB(e,t){return n=>n>0?t:e}var HB;function UB(){return(UB=t((()=>{HB=(e,t,n)=>e+(t-e)*n})))()}function WB(e){let t=qB(e);if(vR(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,`color-not-animatable`),!t)return!1;let n=t.parse(e);return t===_B&&(n=BB(n)),n}var GB,KB,qB,JB;function YB(){return(YB=t((()=>{bR(),lB(),vB(),oB(),UB(),GB=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},KB=[cB,aB,_B],qB=e=>KB.find(t=>t.test(e)),JB=(e,t)=>{let n=WB(e),r=WB(t);if(!n||!r)return VB(e,t);let i={...n};return e=>(i.red=GB(n.red,r.red,e),i.green=GB(n.green,r.green,e),i.blue=GB(n.blue,r.blue,e),i.alpha=HB(n.alpha,r.alpha,e),aB.transform(i))}})))()}function XB(e,t){return ZB.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}var ZB;function QB(){return(QB=t((()=>{ZB=new Set([`none`,`hidden`])})))()}function $B(e,t){return n=>HB(e,t,n)}function eV(e){return typeof e==`number`?$B:typeof e==`string`?Bz(e)?VB:yB.test(e)?JB:iV:Array.isArray(e)?tV:typeof e==`object`?yB.test(e)?JB:nV:VB}function tV(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>eV(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function nV(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=eV(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function rV(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var iV;function aV(){return(aV=t((()=>{NR(),bR(),Hz(),bB(),RB(),YB(),UB(),QB(),iV=(e,t)=>{let n=LB.createTransformer(t),r=wB(e),i=wB(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?ZB.has(e)&&!i.values.length||ZB.has(t)&&!r.values.length?XB(e,t):MR(tV(rV(r,i),i.values),n):(vR(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,`complex-values-different`),VB(e,t))}})))()}function oV(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?HB(e,t,n):eV(e)(e,t)}function sV(){return(sV=t((()=>{aV(),UB()})))()}var cV;function lV(){return(lV=t((()=>{Fz(),jz(),cV=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>Dz.update(t,e),stop:()=>Oz(t),now:()=>kz.isProcessing?kz.timestamp:Pz.now()}}})))()}var uV;function dV(){return(dV=t((()=>{uV=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`}})))()}function fV(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}var pV;function mV(){return(mV=t((()=>{pV=2e4})))()}function hV(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(fV(r),pV);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:zR(i)}}function gV(){return(gV=t((()=>{BR(),mV()})))()}function _V(e,t){return e*Math.sqrt(1-t*t)}function vV(e,t,n){let r=n;for(let n=1;n<wV;n++)r-=e(r)/t(r);return r}function yV({duration:e=CV.duration,bounce:t=CV.bounce,velocity:n=CV.velocity,mass:r=CV.mass}){let i,a;vR(e<=RR(CV.maxDuration),`Spring duration must be 10 seconds or less`,`spring-duration-limit`);let o=1-t;o=gR(CV.minDamping,CV.maxDamping,o),e=gR(CV.minDuration,CV.maxDuration,zR(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=_V(t,o),c=Math.exp(-i);return TV-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=_V(t**2,o);return(-i(t)+TV>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=vV(i,a,s);if(e=RR(e),isNaN(c))return{stiffness:CV.stiffness,damping:CV.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}function bV(e,t){return t.some(t=>e[t]!==void 0)}function xV(e){let t={velocity:CV.velocity,stiffness:CV.stiffness,damping:CV.damping,mass:CV.mass,isResolvedFromDuration:!1,...e};if(!bV(e,DV)&&bV(e,EV)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*gR(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:CV.mass,stiffness:i,damping:a}}else{let n=yV({...e,velocity:0});t={...t,...n,mass:CV.mass},t.isResolvedFromDuration=!0}}return t}function SV(e=CV.visualDuration,t=CV.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=xV({...n,velocity:-zR(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=zR(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?CV.restSpeed.granular:CV.restSpeed.default,i||=v?CV.restDelta.granular:CV.restDelta.default;let y,b,x,S,C,w;if(h<1)x=_V(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>RR(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=RR(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=RR(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(fV(T),pV),t=uV(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}var CV,wV,TV,EV,DV;function OV(){return(OV=t((()=>{BR(),_R(),bR(),dV(),mV(),gV(),CV={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},wV=12,TV=.001,EV=[`duration`,`bounce`],DV=[`stiffness`,`damping`,`mass`],SV.applyToOptions=e=>{let t=hV(e,100,SV);return e.ease=t.ease,e.duration=RR(t.duration),e.type=`keyframes`,e}})))()}function kV(e,t,n){let r=Math.max(t-AV,0);return VR(n-e(r),t-r)}var AV;function jV(){return(jV=t((()=>{HR(),AV=5})))()}function MV({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=SV({keyframes:[f.value,m(f.value)],velocity:kV(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function NV(){return(NV=t((()=>{OV(),jV()})))()}function PV(e,t,n){let r=[],i=n||xR.mix||oV,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||AR:t;a=MR(e,a)}r.push(a)}return r}function FV(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(yR(a===t.length,`Both input and output ranges must be the same length`,`range-length`),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=PV(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=PR(e[r],e[r+1],n);return s[r](i)};return n?t=>l(gR(e[0],e[a-1],t)):l}function IV(){return(IV=t((()=>{bR(),_R(),SR(),jR(),NR(),FR(),sV()})))()}function LV(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=PR(0,t,r);e.push(HB(n,1,i))}}function RV(){return(RV=t((()=>{FR(),UB()})))()}function zV(e){let t=[0];return LV(t,e.length-1),t}function BV(){return(BV=t((()=>{RV()})))()}function VV(e,t){return e.map(e=>e*t)}function HV(e,t){return e.map(()=>t||dz).splice(0,e.length-1)}function UV({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=pz(r)?r.map(yz):yz(r),a={done:!1,value:t[0]},o=FV(VV(n&&n.length===t.length?n:zV(t),e),t,{ease:Array.isArray(i)?i:HV(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}function WV(){return(WV=t((()=>{fz(),mz(),bz(),IV(),BV()})))()}function GV(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(KV),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var KV;function qV(){return(qV=t((()=>{KV=e=>e!==null})))()}function JV(e){typeof e.type==`string`&&(e.type=YV[e.type])}var YV;function XV(){return(XV=t((()=>{NV(),WV(),OV(),YV={decay:MV,inertia:MV,tween:UV,keyframes:UV,spring:SV}})))()}var ZV;function QV(){return(QV=t((()=>{ZV=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}})))()}var $V,eH;function tH(){return(tH=t((()=>{NR(),_R(),BR(),Fz(),sV(),lV(),NV(),WV(),mV(),jV(),qV(),XV(),QV(),$V=e=>e/100,eH=class extends ZV{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Pz.now()&&this.tick(Pz.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;JV(e);let{type:t=UV,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||UV;s!==UV&&typeof o[0]!=`number`&&(this.mixKeyframes=MR($V,oV(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=fV(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=gR(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==MV&&(b.value=GV(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return zR(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+zR(e)}get time(){return zR(this.currentTime)}set time(e){e=RR(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return kV(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Pz.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=zR(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=cV,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Pz.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}}})))()}function nH(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}function rH(e){return+!!e.includes(`scale`)}function iH(e,t){if(!e||e===`none`)return rH(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=pH,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=cH,i=t}if(!i)return rH(t);let a=r[t],o=i[1].split(`,`).map(aH);return typeof a==`function`?a(o):o[a]}function aH(e){return parseFloat(e.trim())}var oH,sH,cH,lH,uH,dH,fH,pH,mH;function hH(){return(hH=t((()=>{oH=e=>e*180/Math.PI,sH=e=>{let t=oH(Math.atan2(e[1],e[0]));return lH(t)},cH={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:sH,rotateZ:sH,skewX:e=>oH(Math.atan(e[1])),skewY:e=>oH(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},lH=e=>(e%=360,e<0&&(e+=360),e),uH=sH,dH=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),fH=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),pH={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:dH,scaleY:fH,scale:e=>(dH(e)+fH(e))/2,rotateX:e=>lH(oH(Math.atan2(e[6],e[5]))),rotateY:e=>lH(oH(Math.atan2(-e[2],e[0]))),rotateZ:uH,rotate:uH,skewX:e=>oH(Math.atan(e[4])),skewY:e=>oH(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2},mH=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return iH(n,t)}})))()}var gH,_H;function vH(){return(vH=t((()=>{gH=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],_H=new Set([...gH,`pathRotation`])})))()}function yH(e){let t=[];return SH.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var bH,xH,SH,CH;function wH(){return(wH=t((()=>{hH(),vH(),Kz(),gB(),bH=e=>e===Uz||e===$,xH=new Set([`x`,`y`,`z`]),SH=gH.filter(e=>!xH.has(e)),CH={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>iH(t,`x`),y:(e,{transform:t})=>iH(t,`y`)},CH.translateX=CH.x,CH.translateY=CH.y})))()}function TH(){if(AH){let e=Array.from(OH).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=yH(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}AH=!1,kH=!1,OH.forEach(e=>e.complete(jH)),OH.clear()}function EH(){OH.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(AH=!0)})}function DH(){jH=!0,EH(),TH(),jH=!1}var OH,kH,AH,jH,MH;function NH(){return(NH=t((()=>{wH(),jz(),OH=new Set,kH=!1,AH=!1,jH=!1,MH=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(OH.add(this),kH||(kH=!0,Dz.read(EH),Dz.resolveKeyframes(TH))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}nH(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),OH.delete(this)}cancel(){this.state===`scheduled`&&(OH.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}}})))()}var PH;function FH(){return(FH=t((()=>{PH=e=>e.startsWith(`--`)})))()}function IH(e,t,n){PH(t)?e.style.setProperty(t,n):e.style[t]=n}function LH(){return(LH=t((()=>{FH()})))()}var RH;function zH(){return(zH=t((()=>{RH={}})))()}function BH(e,t){let n=kR(e);return()=>RH[t]??n()}function VH(){return(VH=t((()=>{zH()})))()}var HH;function UH(){return(UH=t((()=>{VH(),HH=BH(()=>window.ScrollTimeline!==void 0,`scrollTimeline`)})))()}var WH;function GH(){return(GH=t((()=>{VH(),WH=BH(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`)})))()}var KH;function qH(){return(qH=t((()=>{KH=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`})))()}var JH;function YH(){return(YH=t((()=>{qH(),JH={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:KH([0,.65,.55,1]),circOut:KH([.55,0,1,.45]),backIn:KH([.31,.01,.66,-.59]),backOut:KH([.33,1.53,.69,.99])}})))()}function XH(e,t){if(e)return typeof e==`function`?WH()?uV(e,t):`ease-out`:hz(e)?KH(e):Array.isArray(e)?e.map(e=>XH(e,t)||JH.easeOut):JH[e]}function ZH(){return(ZH=t((()=>{gz(),GH(),dV(),qH(),YH()})))()}function QH(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=XH(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function $H(){return($H=t((()=>{ZH()})))()}function eU(e){return typeof e==`function`&&`applyToOptions`in e}function tU({type:e,...t}){return eU(e)&&WH()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}function nU(){return(nU=t((()=>{GH()})))()}var rU;function iU(){return(iU=t((()=>{bR(),BR(),jR(),LH(),UH(),qV(),QV(),$H(),nU(),rU=class extends ZV{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,yR(typeof e.type!=`string`,`Mini animate() doesn't support "type" as a string.`,`mini-spring`);let c=tU(e);this.animation=QH(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=GV(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),IH(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return zR(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+zR(e)}get time(){return zR(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=RR(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&HH()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),AR):r(this)}}})))()}function aU(e){return e in sU}function oU(e){typeof e.ease==`string`&&aU(e.ease)&&(e.ease=sU[e.ease])}var sU;function cU(){return(cU=t((()=>{cz(),nz(),iz(),sU={anticipate:rz,backInOut:tz,circInOut:sz}})))()}var lU,uU;function dU(){return(dU=t((()=>{_R(),Fz(),LH(),tH(),iU(),XV(),cU(),lU=10,uU=class extends rU{constructor(e){oU(e),JV(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new eH({...a,autoplay:!1}),s=Math.max(lU,Pz.now()-this.startTime),c=gR(0,lU,s-lU),l=o.sample(s).value,{name:u}=this.options;i&&u&&IH(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}}})))()}var fU;function pU(){return(pU=t((()=>{RB(),fU=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(LB.test(e)||e===`0`)&&!e.startsWith(`url(`))})))()}function mU(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function hU(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=fU(i,t),s=fU(a,t);return vR(o===s,`You are trying to animate ${t} from "${i}" to "${a}". "${o?a:i}" is not an animatable value.`,`value-not-animatable`),!o||!s?!1:mU(e)||(n===`spring`||eU(n))&&r}function gU(){return(gU=t((()=>{bR(),pU()})))()}function _U(e){e.duration=0,e.type=`keyframes`}var vU;function yU(){return(yU=t((()=>{vU=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`])})))()}function bU(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&xU.test(e[t]))return!0;return!1}var xU;function SU(){return(SU=t((()=>{xU=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/})))()}function CU(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return TU()&&n&&(vU.has(n)||wU.has(n)&&bU(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var wU,TU;function EU(){return(EU=t((()=>{yU(),SU(),wU=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),TU=kR(()=>Object.hasOwnProperty.call(Element.prototype,`animate`))})))()}var DU,OU;function kU(){return(kU=t((()=>{SR(),jR(),Fz(),tH(),qV(),NH(),dU(),gU(),QV(),EU(),DU=40,OU=class extends ZV{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Pz.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||MH;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Pz.now();let u=!0;hU(e,i,a,o)||(u=!1,(xR.instantAnimations||!s)&&l?.(GV(e,n,t)),e[0]=e[e.length-1],_U(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>DU?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&CU(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new uU({...d,element:p})}catch{m=new eH(d)}else m=new eH(d);m.finished.then(()=>{this.notifyFinished()}).catch(AR),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),DH()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}})))()}function AU(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}function jU(e,t){return new FU(e,t)}var MU,NU,PU,FU;function IU(){return(IU=t((()=>{LR(),HR(),Fz(),jz(),MU=30,NU=e=>!isNaN(parseFloat(e)),PU={current:void 0},FU=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Pz.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Pz.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=NU(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new IR);let n=this.events[e].add(t);return e===`change`?()=>{n(),Dz.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return PU.current&&PU.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Pz.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>MU)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,MU);return VR(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}})))()}function LU(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function RU(e,t){let n=e?.[t]??e?.default??e;return n===e?n:LU(n,e)}function zU(){return(zU=t((()=>{})))()}var BU,VU,HU,UU,WU;function GU(){return(GU=t((()=>{vH(),BU={type:`spring`,stiffness:500,damping:25,restSpeed:10},VU=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),HU={type:`keyframes`,duration:.8},UU={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},WU=(e,{keyframes:t})=>t.length>2?HU:_H.has(e)?e.startsWith(`scale`)?VU(t[1]):BU:UU})))()}function KU(e){for(let t in e)if(!qU.has(t))return!0;return!1}var qU;function JU(){return(JU=t((()=>{qU=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`])})))()}var YU;function XU(){return(XU=t((()=>{BR(),SR(),kU(),tH(),zU(),GU(),qV(),JU(),jz(),YU=(e,t,n,r={},i,a)=>o=>{let s=RU(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=RR(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};KU(s)||Object.assign(u,WU(e,u)),u.duration&&=RR(u.duration),u.repeatDelay&&=RR(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(_U(u),u.delay===0&&(d=!0)),(xR.instantAnimations||xR.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,_U(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=GV(u.keyframes,s);if(e!==void 0){Dz.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new eH(u):new OU(u)}})))()}function ZU(e){let t=$U.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function QU(e,t,n=1){yR(n<=eW,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,`max-css-var-depth`);let[r,i]=ZU(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return CR(e)?parseFloat(e):e}return Bz(i)?QU(i,t,n+1):i}var $U,eW;function tW(){return(tW=t((()=>{bR(),wR(),Hz(),$U=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,eW=4})))()}function nW(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function rW(e,t,n,r){if(typeof t==`function`){let[i,a]=nW(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=nW(r);t=t(n===void 0?e.custom:n,i,a)}return t}function iW(e,t,n){let r=e.getProps();return rW(r,t,n===void 0?r.custom:n,e)}function aW(){return(aW=t((()=>{})))()}var oW;function sW(){return(sW=t((()=>{vH(),oW=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...gH])})))()}var cW;function lW(){return(lW=t((()=>{cW=e=>Array.isArray(e)})))()}function uW(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,jU(n))}function dW(e){return cW(e)?e[e.length-1]||0:e}function fW(e,t){let{transitionEnd:n={},transition:r={},...i}=iW(e,t)||{};i={...i,...n};for(let t in i)uW(e,t,dW(i[t]))}function pW(){return(pW=t((()=>{IU(),aW(),lW()})))()}var mW;function hW(){return(hW=t((()=>{mW=e=>!!(e&&e.getVelocity)})))()}function gW(e){return!!(mW(e)&&e.add)}function _W(){return(_W=t((()=>{hW()})))()}function vW(e,t){let n=e.getValue(`willChange`);if(gW(n))return n.add(t);if(!n&&xR.WillChange){let n=new xR.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function yW(){return(yW=t((()=>{SR(),_W()})))()}function bW(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var xW,SW;function CW(){return(CW=t((()=>{xW=`framerAppearId`,SW=`data-`+bW(xW)})))()}function wW(e){return e.props[SW]}function TW(){return(TW=t((()=>{CW()})))()}function EW({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function DW(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?LU(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&EW(f,t))continue;let o={delay:n,...RU(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){Dz.update(()=>r.set(i));continue}let p=!1;if(OW&&window.MotionHandoffAnimation){let n=wW(e);if(n){let e=window.MotionHandoffAnimation(n,t,Dz);e!==null&&(o.startTime=e,p=!0)}}vW(e,t);let m=l??e.shouldReduceMotion;r.start(YU(t,r,i,m&&oW.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>Dz.update(()=>{o&&fW(e,o)});d.length?Promise.all(d).then(t):t()}return d}var OW;function kW(){return(kW=t((()=>{zU(),sW(),pW(),yW(),TW(),XU(),jz(),OW=typeof window<`u`})))()}function AW(e,t,n={}){let r=iW(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(DW(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return jW(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function jW(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(AW(c,t,{...o,delay:n+(typeof r==`function`?0:r)+AU(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function MW(){return(MW=t((()=>{aW(),kW()})))()}function NW(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>AW(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=AW(e,t,n);else{let i=typeof t==`function`?iW(e,t,n.custom):t;r=Promise.all(DW(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}function PW(){return(PW=t((()=>{aW(),kW(),MW()})))()}var FW;function IW(){return(IW=t((()=>{FW={test:e=>e===`auto`,parse:e=>e}})))()}var LW;function RW(){return(RW=t((()=>{LW=e=>t=>t.test(e)})))()}var zW,BW;function VW(){return(VW=t((()=>{IW(),Kz(),gB(),RW(),zW=[Uz,$,fB,dB,mB,pB,FW],BW=e=>zW.find(LW(e))})))()}function HW(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||DR(e)}function UW(){return(UW=t((()=>{OR()})))()}function WW(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(Yz)||[];if(!r)return e;let i=n.replace(r,``),a=+!!GW.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var GW,KW,qW;function JW(){return(JW=t((()=>{RB(),Xz(),GW=new Set([`brightness`,`contrast`,`saturate`,`opacity`]),KW=/\b([a-z-]*)\(.*?\)/gu,qW={...LB,getAnimatableNone:e=>{let t=e.match(KW);return t?t.map(WW).join(` `):e}}})))()}var YW;function XW(){return(XW=t((()=>{RB(),YW={...LB,getAnimatableNone:e=>{let t=LB.parse(e);return LB.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}}})))()}var ZW;function QW(){return(QW=t((()=>{Kz(),ZW={...Uz,transform:Math.round}})))()}var $W;function eG(){return(eG=t((()=>{Kz(),gB(),$W={rotate:dB,pathRotation:dB,rotateX:dB,rotateY:dB,rotateZ:dB,scale:Gz,scaleX:Gz,scaleY:Gz,scaleZ:Gz,skew:dB,skewX:dB,skewY:dB,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:Wz,originX:hB,originY:hB,originZ:$}})))()}var tG;function nG(){return(nG=t((()=>{QW(),Kz(),gB(),eG(),tG={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,fontSize:$,backgroundPositionX:$,backgroundPositionY:$,...$W,zIndex:ZW,fillOpacity:Wz,strokeOpacity:Wz,numOctaves:ZW}})))()}var rG,iG;function aG(){return(aG=t((()=>{bB(),JW(),XW(),nG(),rG={...tG,color:yB,backgroundColor:yB,outlineColor:yB,fill:yB,stroke:yB,borderColor:yB,borderTopColor:yB,borderRightColor:yB,borderBottomColor:yB,borderLeftColor:yB,filter:qW,WebkitFilter:qW,mask:YW,WebkitMask:YW},iG=e=>rG[e]})))()}function oG(e,t){let n=iG(e);return sG.has(n)||(n=LB),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var sG;function cG(){return(cG=t((()=>{RB(),JW(),XW(),aG(),sG=new Set([qW,YW])})))()}function lG(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!uG.has(t)&&wB(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=oG(n,i)}var uG;function dG(){return(dG=t((()=>{RB(),cG(),uG=new Set([`auto`,`none`,`0`])})))()}var fG;function pG(){return(pG=t((()=>{sW(),VW(),tW(),Hz(),NH(),UW(),dG(),wH(),fG=class extends MH{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Bz(r))){let i=QU(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!oW.has(n)||e.length!==2)return;let[r,i]=e,a=BW(r),o=BW(i);if(Iz(r)!==Iz(i)&&CH[n]){this.needsMeasurement=!0;return}if(a!==o){if(bH(a)&&bH(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else CH[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||HW(e[t]))&&n.push(t);n.length&&lG(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=CH[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=CH[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}})))()}var mG;function hG(){return(hG=t((()=>{mG=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`]})))()}function gG(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var _G;function vG(){return(vG=t((()=>{_G=(e,t)=>t&&typeof e==`number`?t.transform(e):e})))()}function yG(e){return TR(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function bG(){return(bG=t((()=>{ER()})))()}var xG,SG;function CG(){return(CG=t((()=>{Ez(),{schedule:xG,cancel:SG}=wz(queueMicrotask,!1)})))()}function wG(){return TG.x||TG.y}var TG;function EG(){return(EG=t((()=>{TG={x:!1,y:!1}})))()}function DG(e){return e===`x`||e===`y`?TG[e]?null:(TG[e]=!0,()=>{TG[e]=!1}):TG.x||TG.y?null:(TG.x=TG.y=!0,()=>{TG.x=TG.y=!1})}function OG(){return(OG=t((()=>{EG()})))()}function kG(e,t){let n=gG(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function AG(){return(AG=t((()=>{})))()}function jG(e){return!(e.pointerType===`touch`||wG())}function MG(e,t,n={}){let[r,i,a]=kG(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!jG(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}function NG(){return(NG=t((()=>{EG(),AG()})))()}var PG;function FG(){return(FG=t((()=>{PG=(e,t)=>t?e===t||PG(e,t.parentElement):!1})))()}var IG;function LG(){return(LG=t((()=>{IG=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1})))()}function RG(e){return BG.has(e.tagName)||e.isContentEditable===!0}function zG(e){return VG.has(e.tagName)||e.isContentEditable===!0}var BG,VG;function HG(){return(HG=t((()=>{BG=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]),VG=new Set([`INPUT`,`SELECT`,`TEXTAREA`])})))()}var UG;function WG(){return(WG=t((()=>{UG=new WeakSet})))()}function GG(e){return t=>{t.key===`Enter`&&e(t)}}function KG(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var qG;function JG(){return(JG=t((()=>{WG(),qG=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=GG(()=>{if(UG.has(n))return;KG(n,`down`);let e=GG(()=>{KG(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>KG(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)}})))()}function YG(e){return IG(e)&&!wG()}function XG(e,t,n={}){let[r,i,a]=kG(e,n),o=e=>{let r=e.currentTarget;if(!YG(e)||ZG.has(e))return;UG.add(r),n.stopPropagation&&ZG.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),UG.has(r)&&UG.delete(r),YG(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||PG(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),yG(e)&&(e.addEventListener(`focus`,e=>qG(e,i)),!RG(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var ZG;function QG(){return(QG=t((()=>{bG(),EG(),FG(),LG(),AG(),HG(),JG(),WG(),ZG=new WeakSet})))()}function $G(e){return TR(e)&&`ownerSVGElement`in e}function eK(){return(eK=t((()=>{ER()})))()}function tK({target:e,borderBoxSize:t}){aK.get(e)?.forEach(n=>{n(e,{get width(){return cK(e,t)},get height(){return lK(e,t)}})})}function nK(e){e.forEach(tK)}function rK(){typeof ResizeObserver>`u`||(oK=new ResizeObserver(nK))}function iK(e,t){oK||rK();let n=gG(e);return n.forEach(e=>{let n=aK.get(e);n||(n=new Set,aK.set(e,n)),n.add(t),oK?.observe(e)}),()=>{n.forEach(e=>{let n=aK.get(e);n?.delete(t),n?.size||oK?.unobserve(e)})}}var aK,oK,sK,cK,lK;function uK(){return(uK=t((()=>{eK(),aK=new WeakMap,sK=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:$G(r)&&`getBBox`in r?r.getBBox()[t]:r[n],cK=sK(`inline`,`width`,`offsetWidth`),lK=sK(`block`,`height`,`offsetHeight`)})))()}function dK(){mK=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};pK.forEach(t=>t(e))},window.addEventListener(`resize`,mK)}function fK(e){return pK.add(e),mK||dK(),()=>{pK.delete(e),!pK.size&&typeof mK==`function`&&(window.removeEventListener(`resize`,mK),mK=void 0)}}var pK,mK;function hK(){return(hK=t((()=>{pK=new Set})))()}function gK(e,t){return typeof e==`function`?fK(e):iK(e,t)}function _K(){return(_K=t((()=>{uK(),hK()})))()}var vK;function yK(){return(yK=t((()=>{vK={value:null,addProjectionMetrics:null}})))()}function bK(e){return $G(e)&&e.tagName===`svg`}function xK(){return(xK=t((()=>{eK()})))()}var SK,CK;function wK(){return(wK=t((()=>{bB(),RB(),VW(),RW(),SK=[...zW,yB,LB],CK=e=>SK.find(LW(e))})))()}var TK,EK,DK,OK;function kK(){return(kK=t((()=>{TK=()=>({translate:0,scale:1,origin:0,originPoint:0}),EK=()=>({x:TK(),y:TK()}),DK=()=>({min:0,max:0}),OK=()=>({x:DK(),y:DK()})})))()}var AK;function jK(){return(jK=t((()=>{AK=new WeakMap})))()}function MK(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function NK(e){return typeof e==`string`||Array.isArray(e)}var PK,FK;function IK(){return(IK=t((()=>{PK=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],FK=[`initial`,...PK]})))()}function LK(e){return MK(e.animate)||FK.some(t=>NK(e[t]))}function RK(e){return!!(LK(e)||e.variants)}function zK(){return(zK=t((()=>{IK()})))()}function BK(e,t,n){for(let r in t){let i=t[r],a=n[r];if(mW(i))e.addValue(r,i);else if(mW(a))e.addValue(r,jU(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,jU(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}function VK(){return(VK=t((()=>{IU(),hW()})))()}var HK,UK;function WK(){return(WK=t((()=>{HK={current:null},UK={current:!1}})))()}function GK(){if(UK.current=!0,KK){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>HK.current=e.matches;e.addEventListener(`change`,t),t()}else HK.current=!1}}var KK;function qK(){return(qK=t((()=>{WK(),KK=typeof window<`u`})))()}function JK(e){ZK=e}function YK(){return ZK}var XK,ZK,QK;function $K(){return($K=t((()=>{BR(),wR(),OR(),LR(),NH(),iU(),yU(),CG(),Fz(),kK(),IU(),RB(),cG(),wK(),hW(),jK(),zK(),vH(),VK(),qK(),WK(),jz(),XK=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],ZK={},QK=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=MH,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Pz.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Dz.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=LK(t),this.isVariantNode=RK(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&mW(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,AK.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(UK.current||GK(),this.shouldReduceMotion=HK.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Oz(this.notifyUpdate),Oz(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&vU.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new rU({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:RR(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=_H.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&Dz.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in ZK){let t=ZK[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):OK()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<XK.length;t++){let n=XK[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=BK(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=jU(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(CR(n)||DR(n))?n=parseFloat(n):!CK(n)&&LB.test(t)&&(n=oG(e,t)),this.setBaseTarget(e,mW(n)?n.get():n)),mW(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=rW(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!mW(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new IR),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){xG.render(this.render)}}})))()}var eq;function tq(){return(tq=t((()=>{hW(),pG(),$K(),eq=class extends QK{constructor(){super(...arguments),this.KeyframeResolver=fG}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;mW(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}}})))()}var nq;function rq(){return(rq=t((()=>{nq=class{constructor(e){this.isMounted=!1,this.node=e}update(){}}})))()}function iq({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function aq({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function oq(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function sq(e){return e===void 0||e===1}function cq({scale:e,scaleX:t,scaleY:n}){return!sq(e)||!sq(t)||!sq(n)}function lq(e){return cq(e)||uq(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function uq(e){return dq(e.x)||dq(e.y)}function dq(e){return e&&e!==`0%`}function fq(e,t,n){return n+t*(e-n)}function pq(e,t,n,r,i){return i!==void 0&&(e=fq(e,i,r)),fq(e,n,r)+t}function mq(e,t=0,n=1,r,i){e.min=pq(e.min,t,n,r,i),e.max=pq(e.max,t,n,r,i)}function hq(e,{x:t,y:n}){mq(e.x,t.translate,t.scale,t.originPoint),mq(e.y,n.translate,n.scale,n.originPoint)}function gq(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(_q(e.x,-a.scroll.offset.x),_q(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,hq(e,o)),r&&lq(a.latestValues)&&bq(e,a.latestValues,a.layout?.layoutBox))}t.x<Sq&&t.x>xq&&(t.x=1),t.y<Sq&&t.y>xq&&(t.y=1)}function _q(e,t){e.min+=t,e.max+=t}function vq(e,t,n,r,i=.5){mq(e,t,n,HB(e.min,e.max,i),r)}function yq(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function bq(e,t,n){let r=n??e;vq(e.x,yq(t.x,r.x),t.scaleX,t.scale,t.originX),vq(e.y,yq(t.y,r.y),t.scaleY,t.scale,t.originY)}var xq,Sq;function Cq(){return(Cq=t((()=>{UB(),xq=.999999999999,Sq=1.0000000000001})))()}function wq(e,t){return iq(oq(e.getBoundingClientRect(),t))}function Tq(e,t,n){let r=wq(e,n),{scroll:i}=t;return i&&(_q(r.x,i.offset.x),_q(r.y,i.offset.y)),r}function Eq(){return(Eq=t((()=>{Cq()})))()}function Dq(e,t,n){let r=``,i=!0;for(let a=0;a<kq;a++){let o=gH[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=_G(s,tG[o]);if(!c){i=!1;let t=Oq[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${_G(a,tG.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}var Oq,kq;function Aq(){return(Aq=t((()=>{vG(),nG(),vH(),Oq={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},kq=gH.length})))()}function jq(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(_H.has(e)){o=!0;continue}if(Rz(e)){i[e]=n;continue}{let t=_G(n,tG[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Dq(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Mq(){return(Mq=t((()=>{vG(),nG(),vH(),Hz(),Aq()})))()}function Nq(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Pq(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Fq;function Iq(){return(Iq=t((()=>{gB(),Fq={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if($.test(e))e=parseFloat(e);else return e}return`${Pq(e,t.target.x)}% ${Pq(e,t.target.y)}%`}}})))()}var Lq;function Rq(){return(Rq=t((()=>{RB(),UB(),Lq={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=LB.parse(e);if(i.length>5)return r;let a=LB.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=HB(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}}})))()}var zq;function Bq(){return(Bq=t((()=>{hG(),Iq(),Rq(),zq={borderRadius:{...Fq,applyTo:[...mG]},borderTopLeftRadius:Fq,borderTopRightRadius:Fq,borderBottomLeftRadius:Fq,borderBottomRightRadius:Fq,boxShadow:Lq}})))()}function Vq(e,{layout:t,layoutId:n}){return _H.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!zq[e]||e===`opacity`)}function Hq(){return(Hq=t((()=>{vH(),Bq()})))()}function Uq(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(mW(r[t])||i&&mW(i[t])||Vq(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Wq(){return(Wq=t((()=>{hW(),Hq()})))()}function Gq(e){return window.getComputedStyle(e)}var Kq;function qq(){return(qq=t((()=>{bR(),Hz(),vH(),hH(),Eq(),tq(),Mq(),Wq(),Kq=class extends eq{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Nq}mount(e){yR(!!e.style,`motion.create() components must forward their ref to a HTML or SVG element`,`custom-component-ref`),super.mount(e)}readValueFromInstance(e,t){if(_H.has(t))return this.projection?.isProjecting?rH(t):mH(e,t);{let n=Gq(e),r=(Rz(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return wq(e,t)}build(e,t,n){jq(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Uq(e,t,n)}}})))()}function Jq(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Yq:Xq;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Yq,Xq;function Zq(){return(Zq=t((()=>{Yq={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Xq={offset:`strokeDashoffset`,array:`strokeDasharray`}})))()}function Qq(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(jq(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of $q)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Jq(d,i,a,o,!1)}var $q;function eJ(){return(eJ=t((()=>{Mq(),Zq(),$q=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`]})))()}var tJ;function nJ(){return(nJ=t((()=>{tJ=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`])})))()}var rJ;function iJ(){return(iJ=t((()=>{rJ=e=>typeof e==`string`&&e.toLowerCase()===`svg`})))()}function aJ(e,t,n,r){Nq(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(tJ.has(n)?n:bW(n),t.attrs[n])}function oJ(){return(oJ=t((()=>{nJ()})))()}function sJ(e,t,n){let r=Uq(e,t,n);for(let n in e)if(mW(e[n])||mW(t[n])){let t=gH.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}function cJ(){return(cJ=t((()=>{hW(),vH(),Wq()})))()}var lJ;function uJ(){return(uJ=t((()=>{vH(),aG(),kK(),tq(),eJ(),nJ(),iJ(),oJ(),cJ(),lJ=class extends eq{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=OK}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(_H.has(t)){let e=iG(t);return e&&e.default||0}if($q.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=tJ.has(t)?t:bW(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return sJ(e,t,n)}build(e,t,n){Qq(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){aJ(e,t,n,r)}mount(e){this.isSVGTag=rJ(e.tagName),super.mount(e)}}})))()}function dJ(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&dJ(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<fJ;n++){let r=FK[n],i=e.props[r];(NK(i)||i===!1)&&(t[r]=i)}return t}var fJ;function pJ(){return(pJ=t((()=>{IK(),fJ=FK.length})))()}function mJ(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function hJ(e){return t=>Promise.all(t.map(({animation:t,options:n})=>NW(e,t,n)))}function gJ(e){let t=hJ(e),n=yJ(),r=!0,i=!1,a=t=>(n,r)=>{let i=iW(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=dJ(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<xJ;t++){let p=bJ[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=NK(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||MK(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=_J(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=cW(t)&&cW(n)?!mJ(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=iW(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=AU(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=iW(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=yJ(),i=!0}}}function _J(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!mJ(t,e):!1}function vJ(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yJ(){return{animate:vJ(!0),whileInView:vJ(),whileHover:vJ(),whileTap:vJ(),whileDrag:vJ(),whileFocus:vJ(),exit:vJ()}}var bJ,xJ;function SJ(){return(SJ=t((()=>{PW(),pJ(),lW(),aW(),IK(),bJ=[...PK].reverse(),xJ=PK.length})))()}function CJ(e,t){e.min=t.min,e.max=t.max}function wJ(e,t){CJ(e.x,t.x),CJ(e.y,t.y)}function TJ(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function EJ(e){return e.max-e.min}function DJ(e,t,n){return Math.abs(e-t)<=n}function OJ(e,t,n,r=.5){e.origin=r,e.originPoint=HB(t.min,t.max,e.origin),e.scale=EJ(n)/EJ(t),e.translate=HB(n.min,n.max,e.origin)-e.originPoint,(e.scale>=PJ&&e.scale<=FJ||isNaN(e.scale))&&(e.scale=1),(e.translate>=IJ&&e.translate<=LJ||isNaN(e.translate))&&(e.translate=0)}function kJ(e,t,n,r){OJ(e.x,t.x,n.x,r?r.originX:void 0),OJ(e.y,t.y,n.y,r?r.originY:void 0)}function AJ(e,t,n,r=0){e.min=(r?HB(n.min,n.max,r):n.min)+t.min,e.max=e.min+EJ(t)}function jJ(e,t,n,r){AJ(e.x,t.x,n.x,r?.x),AJ(e.y,t.y,n.y,r?.y)}function MJ(e,t,n,r=0){let i=r?HB(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+EJ(t)}function NJ(e,t,n,r){MJ(e.x,t.x,n.x,r?.x),MJ(e.y,t.y,n.y,r?.y)}var PJ,FJ,IJ,LJ;function RJ(){return(RJ=t((()=>{UB(),PJ=.9999,FJ=1.0001,IJ=-.01,LJ=.01})))()}function zJ(e,t,n,r,i){return e-=t,e=fq(e,1/n,r),i!==void 0&&(e=fq(e,1/i,r)),e}function BJ(e,t=0,n=1,r=.5,i,a=e,o=e){if(fB.test(t)&&(t=parseFloat(t),t=HB(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=HB(a.min,a.max,r);e===a&&(s-=t),e.min=zJ(e.min,t,n,s,i),e.max=zJ(e.max,t,n,s,i)}function VJ(e,t,[n,r,i],a,o){BJ(e,t[n],t[r],t[i],t.scale,a,o)}function HJ(e,t,n,r){VJ(e.x,t,UJ,n?n.x:void 0,r?r.x:void 0),VJ(e.y,t,WJ,n?n.y:void 0,r?r.y:void 0)}var UJ,WJ;function GJ(){return(GJ=t((()=>{UB(),gB(),Cq(),UJ=[`x`,`scaleX`,`originX`],WJ=[`y`,`scaleY`,`originY`]})))()}function KJ(e){return e.translate===0&&e.scale===1}function qJ(e){return KJ(e.x)&&KJ(e.y)}function JJ(e,t){return e.min===t.min&&e.max===t.max}function YJ(e,t){return JJ(e.x,t.x)&&JJ(e.y,t.y)}function XJ(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ZJ(e,t){return XJ(e.x,t.x)&&XJ(e.y,t.y)}function QJ(e){return EJ(e.x)/EJ(e.y)}function $J(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function eY(){return(eY=t((()=>{RJ()})))()}function tY(e){return[e(`x`),e(`y`)]}function nY(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}function rY(e,t,n,r,i,a){i?(e.opacity=HB(0,n.opacity??1,lY(r)),e.opacityExit=HB(t.opacity??1,0,uY(r))):a&&(e.opacity=HB(t.opacity??1,n.opacity??1,r));for(let i=0;i<oY;i++){let a=mG[i],o=iY(t,a),s=iY(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||cY(o)===cY(s)?(e[a]=Math.max(HB(sY(o),sY(s),r),0),(fB.test(s)||fB.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=HB(t.rotate||0,n.rotate||0,r))}function iY(e,t){return e[t]===void 0?e.borderRadius:e[t]}function aY(e,t,n){return r=>r<e?0:r>t?1:n(PR(e,t,r))}var oY,sY,cY,lY,uY;function dY(){return(dY=t((()=>{UB(),gB(),FR(),cz(),jR(),hG(),oY=mG.length,sY=e=>typeof e==`string`?parseFloat(e):e,cY=e=>typeof e==`number`||$.test(e),lY=aY(0,.5,oz),uY=aY(.5,.95,AR)})))()}function fY(e,t,n){let r=mW(e)?e:jU(e);return r.start(YU(``,r,t,n)),r.animation}function pY(){return(pY=t((()=>{XU(),IU(),hW()})))()}function mY(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var hY;function gY(){return(gY=t((()=>{hY=(e,t)=>e.depth-t.depth})))()}var _Y;function vY(){return(vY=t((()=>{gY(),_Y=class{constructor(){this.children=[],this.isDirty=!1}add(e){mR(this.children,e),this.isDirty=!0}remove(e){hR(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hY),this.isDirty=!1,this.children.forEach(e)}}})))()}function yY(e,t){let n=Pz.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Oz(r),e(a-t))};return Dz.setup(r,!0),()=>Oz(r)}function bY(){return(bY=t((()=>{Fz(),jz()})))()}function xY(e){return mW(e)?e.get():e}function SY(){return(SY=t((()=>{hW()})))()}var CY;function wY(){return(wY=t((()=>{CY=class{constructor(){this.members=[]}add(e){mR(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(hR(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(hR(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}})))()}var TY;function EY(){return(EY=t((()=>{TY={hasAnimatedSinceResize:!0,hasEverUpdated:!1}})))()}function DY(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function OY(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=wW(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,Dz,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&OY(r)}function kY({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=nX++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,vK.value&&($Y.nodes=$Y.calculatedTargetDeltas=$Y.calculatedProjections=0),this.nodes.forEach(MY),this.nodes.forEach(VY),this.nodes.forEach(HY),this.nodes.forEach(NY),vK.addProjectionMetrics&&vK.addProjectionMetrics($Y)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new _Y)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new IR),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=$G(t)&&!bK(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;Dz.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=yY(i,250),TY.hasAnimatedSinceResize&&(TY.hasAnimatedSinceResize=!1,this.nodes.forEach(BY)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||rX,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!ZJ(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...RU(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||BY(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Oz(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(UY),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&OY(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(IY),this.nodes.forEach(FY);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(LY);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(RY),this.nodes.forEach(zY),this.nodes.forEach(AY),this.nodes.forEach(jY)):this.nodes.forEach(LY),this.clearAllSnapshots();let e=Pz.now();kz.delta=gR(0,1e3/60,e-kz.timestamp),kz.timestamp=e,kz.isProcessing=!0,Az.update.process(kz),Az.preRender.process(kz),Az.render.process(kz),kz.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,xG.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(PY),this.sharedNodes.forEach(WY)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Dz.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Dz.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!EJ(this.snapshot.measuredBox.x)&&!EJ(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=OK(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!qJ(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||lq(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),XY(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return OK();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(QY))){let{scroll:e}=this.root;e&&(_q(t.x,e.offset.x),_q(t.y,e.offset.y))}return t}removeElementScroll(e){let t=OK();if(wJ(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&wJ(t,e),_q(t.x,i.offset.x),_q(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||OK();wJ(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(_q(r.x,-n.scroll.offset.x),_q(r.y,-n.scroll.offset.y)),lq(n.latestValues)&&bq(r,n.latestValues,n.layout?.layoutBox)}return lq(this.latestValues)&&bq(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=OK();wJ(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!lq(n.latestValues))continue;let r;n.instance&&(cq(n.latestValues)&&n.updateSnapshot(),r=OK(),wJ(r,n.measurePageBox())),HJ(t,n.latestValues,n.snapshot?.layoutBox,r)}return lq(this.latestValues)&&HJ(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kz.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=kz.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=OK(),this.targetWithTransforms=OK()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jJ(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):wJ(this.target,this.layout.layoutBox),hq(this.target,this.targetDelta)):wJ(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),vK.value&&$Y.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||cq(this.parent.latestValues)||uq(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=OK(),this.relativeTargetOrigin=OK(),NJ(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),wJ(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===kz.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;wJ(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;gq(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=OK());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(TJ(this.prevProjectionDelta.x,this.projectionDelta.x),TJ(this.prevProjectionDelta.y,this.projectionDelta.y)),kJ(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!$J(this.projectionDelta.x,this.prevProjectionDelta.x)||!$J(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),vK.value&&$Y.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=EK(),this.projectionDelta=EK(),this.projectionDeltaWithTransform=EK()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=EK();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=OK(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(JY));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=HB(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=HB(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(GY(o.x,e.x,n),GY(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(NJ(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),qY(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&YJ(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=OK(),wJ(f,this.relativeTarget)),c&&(this.animationValues=a,rY(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Oz(this.pendingAnimation),void 0),this.pendingAnimation=Dz.update(()=>{TY.hasAnimatedSinceResize=!0,this.motionValue||=jU(0),this.motionValue.jump(0,!1),this.currentAnimation=fY(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(tX),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&ZY(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||OK();let t=EJ(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=EJ(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}wJ(t,n),bq(t,i),kJ(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new CY),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&DY(`z`,e,r,this.animationValues);for(let t=0;t<eX.length;t++)DY(`rotate${eX[t]}`,e,r,this.animationValues),DY(`skew${eX[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=xY(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=xY(t?.pointerEvents)||``),this.hasProjected&&!lq(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=nY(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in zq){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=zq[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?xY(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(FY),this.root.sharedNodes.clear()}}}function AY(e){e.updateLayout()}function jY(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)tY(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=EJ(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;CJ(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else ZY(i,t.layoutBox,n)&&tY(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=EJ(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=EK();kJ(o,n,t.layoutBox);let s=EK();a?kJ(s,e.applyTransform(r,!0),t.measuredBox):kJ(s,n,t.layoutBox);let c=!qJ(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=OK();NJ(s,t.layoutBox,i.layoutBox,o);let c=OK();NJ(c,n,a.layoutBox,o),ZJ(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function MY(e){vK.value&&$Y.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function NY(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function PY(e){e.clearSnapshot()}function FY(e){e.clearMeasurements()}function IY(e){e.isLayoutDirty=!0,e.updateLayout()}function LY(e){e.isLayoutDirty=!1}function RY(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function zY(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function BY(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function VY(e){e.resolveTargetDelta()}function HY(e){e.calcProjection()}function UY(e){e.resetSkewAndRotation()}function WY(e){e.removeLeadSnapshot()}function GY(e,t,n){e.translate=HB(t.translate,0,n),e.scale=HB(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function KY(e,t,n,r){e.min=HB(t.min,n.min,r),e.max=HB(t.max,n.max,r)}function qY(e,t,n,r){KY(e.x,t.x,n.x,r),KY(e.y,t.y,n.y,r)}function JY(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}function YY(e){e.min=aX(e.min),e.max=aX(e.max)}function XY(e){YY(e.x),YY(e.y)}function ZY(e,t,n){return e===`position`||e===`preserve-aspect`&&!DJ(QJ(t),QJ(n),.2)}function QY(e){return e!==e.root&&e.scroll?.wasRoot}var $Y,eX,tX,nX,rX,iX,aX;function oX(){return(oX=t((()=>{LR(),_R(),jR(),pY(),TW(),zU(),CG(),Fz(),Bq(),yK(),bY(),eK(),xK(),UB(),IU(),SY(),dY(),Cq(),RJ(),GJ(),kK(),eY(),wY(),vY(),EY(),jz(),$Y={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},eX=[``,`X`,`Y`,`Z`],tX=1e3,nX=0,rX={duration:.45,ease:[.4,0,.1,1]},iX=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),aX=iX(`applewebkit/`)&&!iX(`chrome/`)?Math.round:AR})))()}var sX;function cX(){return(cX=t((()=>{oX(),sX=kY({attachResizeListener:(e,t)=>mY(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0})})))()}var lX,uX;function dX(){return(dX=t((()=>{oX(),cX(),lX={current:void 0},uX=kY({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!lX.current){let e=new sX({});e.mount(window),e.setOptions({layoutScroll:!0}),lX.current=e}return lX.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`})})))()}var fX,pX;function mX(){return(mX=t((()=>{fX=r(),pX=(0,fX.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`})})))()}function hX(e=!0){let t=(0,gX.useContext)(fR);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,gX.useId)();(0,gX.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,gX.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var gX;function _X(){return(_X=t((()=>{gX=r(),pR()})))()}var vX,yX;function bX(){return(bX=t((()=>{vX=r(),yX=(0,vX.createContext)({strict:!1})})))()}function xX(){if(wX)return;let e={};for(let t in CX)e[t]={isEnabled:e=>CX[t].some(t=>!!e[t])};JK(e),wX=!0}function SX(){return xX(),YK()}var CX,wX;function TX(){return(TX=t((()=>{$K(),CX={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},wX=!1})))()}function EX(e){let t=SX();for(let n in e)t[n]={...t[n],...e[n]};JK(t)}function DX(){return(DX=t((()=>{$K(),TX()})))()}var OX,kX;function AX(){return(AX=t((()=>{OX=r(),kX=(0,OX.createContext)({})})))()}function jX(e,t){if(LK(e)){let{initial:t,animate:n}=e;return{initial:t===!1||NK(t)?t:void 0,animate:NK(n)?n:void 0}}return e.inherit===!1?{}:t}function MX(){return(MX=t((()=>{zK()})))()}function NX(e){let{initial:t,animate:n}=jX(e,(0,FX.useContext)(kX));return(0,FX.useMemo)(()=>({initial:t,animate:n}),[PX(t),PX(n)])}function PX(e){return Array.isArray(e)?e.join(` `):e}var FX;function IX(){return(IX=t((()=>{FX=r(),AX(),MX()})))()}var LX;function RX(){return(RX=t((()=>{LX=()=>({style:{},transform:{},transformOrigin:{},vars:{}})})))()}function zX(e,t,n){for(let r in t)!mW(t[r])&&!Vq(r,n)&&(e[r]=t[r])}function BX({transformTemplate:e},t){return(0,UX.useMemo)(()=>{let n=LX();return jq(n,t,e),Object.assign({},n.vars,n.style)},[t])}function VX(e,t){let n=e.style||{},r={};return zX(r,n,e),Object.assign(r,BX(e,t)),r}function HX(e,t){let n={},r=VX(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var UX;function WX(){return(WX=t((()=>{hW(),Hq(),Mq(),UX=r(),RX()})))()}var GX;function KX(){return(KX=t((()=>{RX(),GX=()=>({...LX(),attrs:{}})})))()}function qX(e,t,n,r){let i=(0,JX.useMemo)(()=>{let n=GX();return Qq(n,t,rJ(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};zX(t,e.style,e),i.style={...t,...i.style}}return i}var JX;function YX(){return(YX=t((()=>{eJ(),iJ(),JX=r(),WX(),KX()})))()}function XX(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||ZX.has(e)}var ZX;function QX(){return(QX=t((()=>{ZX=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`))})))()}function $X(e,t){return e.startsWith(`on`)?!XX(e):t?.(e)??!XX(e)}function eZ(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(mW(e[a])||($X(a,r)||n===!0&&XX(a)||!t&&!XX(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}function tZ(){return(tZ=t((()=>{hW(),QX()})))()}var nZ;function rZ(){return(rZ=t((()=>{nZ=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`]})))()}function iZ(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(nZ.indexOf(e)>-1||/[A-Z]/u.test(e))}function aZ(){return(aZ=t((()=>{rZ()})))()}function oZ(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??iZ(e)?qX:HX)(t,r,i,e),l=eZ(t,typeof e==`string`,a,s),u=e===sZ.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,sZ.useMemo)(()=>mW(d)?d.get():d,[d]);return(0,sZ.createElement)(e,{...u,children:f})}var sZ;function cZ(){return(cZ=t((()=>{hW(),sZ=r(),WX(),YX(),tZ(),aZ()})))()}function lZ({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:uZ(n,r,i,e),renderState:t()}}function uZ(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=xY(a[e]);let{initial:o,animate:s}=e,c=LK(e),l=RK(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!MK(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=rW(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var dZ,fZ;function pZ(){return(pZ=t((()=>{SY(),zK(),dZ=r(),AX(),pR(),aR(),fZ=e=>(t,n)=>{let r=(0,dZ.useContext)(kX),i=(0,dZ.useContext)(fR),a=()=>lZ(e,t,r,i);return n?a():rR(a)}})))()}var mZ;function hZ(){return(hZ=t((()=>{Wq(),pZ(),RX(),mZ=fZ({scrapeMotionValuesFromProps:Uq,createRenderState:LX})})))()}var gZ;function _Z(){return(_Z=t((()=>{cJ(),pZ(),KX(),gZ=fZ({scrapeMotionValuesFromProps:sJ,createRenderState:GX})})))()}var vZ;function yZ(){return(yZ=t((()=>{vZ=Symbol.for(`motionComponentSymbol`)})))()}function bZ(e,t,n){let r=(0,xZ.useRef)(n);(0,xZ.useInsertionEffect)(()=>{r.current=n});let i=(0,xZ.useRef)(null);return(0,xZ.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var xZ;function SZ(){return(SZ=t((()=>{xZ=r()})))()}var CZ,wZ;function TZ(){return(TZ=t((()=>{CZ=r(),wZ=(0,CZ.createContext)({})})))()}function EZ(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function DZ(e,t,n,r,i,a){let{visualElement:o}=(0,AZ.useContext)(kX),s=(0,AZ.useContext)(yX),c=(0,AZ.useContext)(fR),l=(0,AZ.useContext)(pX),u=l.reducedMotion,d=l.skipAnimations,f=(0,AZ.useRef)(null),p=(0,AZ.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,AZ.useContext)(wZ);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&OZ(f.current,n,i,h);let g=(0,AZ.useRef)(!1);(0,AZ.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[SW],v=(0,AZ.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return lR(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,AZ.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function OZ(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:kZ(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&EZ(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function kZ(e){if(e)return e.options.allowProjection===!1?kZ(e.parent):e.projection}var AZ;function jZ(){return(jZ=t((()=>{CW(),AZ=r(),bX(),mX(),AX(),pR(),TZ(),uR()})))()}function MZ(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&EX(r);let a=n?n===`svg`:iZ(e),o=a?gZ:mZ;function s(n,s){let c,l={...(0,LZ.useContext)(pX),...n,layoutId:NZ(n)},{isStatic:u,isValidProp:d}=l,f=NX(n),p=o(n,u);if(!u&&typeof window<`u`){PZ(l,r);let t=FZ(l);c=t.MeasureLayout,f.visualElement=DZ(e,p,l,i,t.ProjectionNode,a)}return(0,IZ.jsxs)(kX.Provider,{value:f,children:[c&&f.visualElement?(0,IZ.jsx)(c,{visualElement:f.visualElement,...l}):null,oZ(e,n,bZ(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,LZ.forwardRef)(s);return c[vZ]=e,c}function NZ({layoutId:e}){let t=(0,LZ.useContext)(tR).id;return t&&e!==void 0?t+`-`+e:e}function PZ(e,t){(0,LZ.useContext)(yX).strict}function FZ(e){let{drag:t,layout:n}=SX();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}var IZ,LZ;function RZ(){return(RZ=t((()=>{IZ=W(),LZ=r(),nR(),bX(),mX(),AX(),IX(),cZ(),aZ(),hZ(),_Z(),TX(),DX(),yZ(),SZ(),jZ()})))()}function zZ(e,t){if(typeof Proxy>`u`)return MZ;let n=new Map,r=(n,r)=>MZ(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,MZ(a,void 0,e,t)),n.get(a))})}function BZ(){return(BZ=t((()=>{RZ()})))()}var VZ,HZ;function UZ(){return(UZ=t((()=>{uJ(),qq(),VZ=r(),aZ(),HZ=(e,t)=>t.isSVG??iZ(e)?new lJ(t):new Kq(t,{allowProjection:e!==VZ.Fragment})})))()}var WZ;function GZ(){return(GZ=t((()=>{rq(),SJ(),WZ=class extends nq{constructor(e){super(e),e.animationState||=gJ(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();MK(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}})))()}var KZ,qZ;function JZ(){return(JZ=t((()=>{rq(),aW(),KZ=0,qZ=class extends nq{constructor(){super(...arguments),this.id=KZ++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=iW(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}})))()}var YZ;function XZ(){return(XZ=t((()=>{GZ(),JZ(),YZ={animation:{Feature:WZ},exit:{Feature:qZ}}})))()}function ZZ(e){return{point:{x:e.pageX,y:e.pageY}}}var QZ;function $Z(){return($Z=t((()=>{LG(),QZ=e=>t=>IG(t)&&e(t,ZZ(t))})))()}function eQ(e,t,n,r){return mY(e,t,QZ(n),r)}function tQ(){return(tQ=t((()=>{$Z()})))()}var nQ;function rQ(){return(rQ=t((()=>{nQ=({current:e})=>e?e.ownerDocument.defaultView:null})))()}function iQ(e,t){let n=aQ(e.x,t.x),r=aQ(e.y,t.y);return Math.sqrt(n**2+r**2)}var aQ;function oQ(){return(oQ=t((()=>{aQ=(e,t)=>Math.abs(e-t)})))()}function sQ(e,t){return t?{point:t(e.point)}:e}function cQ(e,t){return{x:e.x-t.x,y:e.y-t.y}}function lQ({point:e},t){return{point:e,delta:cQ(e,dQ(t)),offset:cQ(e,uQ(t)),velocity:fQ(t,.1)}}function uQ(e){return e[0]}function dQ(e){return e[e.length-1]}function fQ(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=dQ(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>RR(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>RR(t)*2&&(r=e[1]);let a=zR(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var pQ,mQ;function hQ(){return(hQ=t((()=>{jz(),LG(),NR(),BR(),tQ(),$Z(),oQ(),pQ=new Set([`auto`,`scroll`]),mQ=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=sQ(this.lastRawMoveEventInfo,this.transformPagePoint));let e=lQ(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=iQ(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=kz;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=sQ(t,this.transformPagePoint),Dz.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=lQ(e.type===`pointercancel`?this.lastMoveEventInfo:sQ(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!IG(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=sQ(ZZ(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=kz;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,lQ(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=MR(eQ(this.contextWindow,`pointermove`,this.handlePointerMove,d),eQ(this.contextWindow,`pointerup`,this.handlePointerUp,d),eQ(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(pQ.has(e.overflowX)||pQ.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),Dz.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Oz(this.updatePoint)}}})))()}function gQ(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?HB(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?HB(n,e,r.max):Math.min(e,n)),e}function _Q(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function vQ(e,{top:t,left:n,bottom:r,right:i}){return{x:_Q(e.x,n,i),y:_Q(e.y,t,r)}}function yQ(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function bQ(e,t){return{x:yQ(e.x,t.x),y:yQ(e.y,t.y)}}function xQ(e,t){let n=.5,r=EJ(e),i=EJ(t);return i>r?n=PR(t.min,t.max-r,e.min):r>i&&(n=PR(e.min,e.max-i,t.min)),gR(0,1,n)}function SQ(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}function CQ(e=EQ){return e===!1?e=0:e===!0&&(e=EQ),{x:wQ(e,`left`,`right`),y:wQ(e,`top`,`bottom`)}}function wQ(e,t,n){return{min:TQ(e,t),max:TQ(e,n)}}function TQ(e,t){return typeof e==`number`?e:e[t]||0}var EQ;function DQ(){return(DQ=t((()=>{UB(),RJ(),FR(),_R(),EQ=.35})))()}function OQ(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function kQ(e,t,n){let r=gK(e,OQ(n)),i=gK(t,OQ(n));return()=>{r(),i()}}function AQ(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function jQ(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var MQ,NQ;function PQ(){return(PQ=t((()=>{kK(),jz(),Eq(),yW(),XU(),UB(),OG(),gB(),RJ(),_K(),HG(),bR(),tQ(),$Z(),rQ(),hQ(),DQ(),MQ=new WeakMap,NQ=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=OK(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(ZZ(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=DG(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tY(e=>{let t=this.getAxisMotionValue(e).get()||0;if(fB.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=EJ(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&Dz.update(()=>i(e,t),!1,!0),vW(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=jQ(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&Dz.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new mQ(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:nQ(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&Dz.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!AQ(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=gQ(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&EZ(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?vQ(n.layoutBox,e):!1,this.elastic=CQ(t),r!==this.constraints&&!EZ(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&tY(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=SQ(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!EZ(e))return!1;let n=e.current;yR(n!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",`drag-constraints-ref`);let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Tq(n,r.root,this.visualElement.getTransformPagePoint()),a=bQ(r.layout.layoutBox,i);if(t){let e=t(aq(a));this.hasMutatedConstraints=!!e,e&&(a=iq(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=tY(o=>{if(!AQ(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return vW(this.visualElement,e),n.start(YU(e,n,0,t,this.visualElement,!1))}stopAnimation(){tY(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){tY(t=>{let{drag:n}=this.getProps();if(!AQ(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-HB(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!EZ(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};tY(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=xQ({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),tY(t=>{if(!AQ(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(HB(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;MQ.set(this.visualElement,this);let e=this.visualElement.current,t=eQ(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&zG(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();EZ(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=kQ(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Dz.read(r);let o=mY(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(tY(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=EQ,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}})))()}var FQ;function IQ(){return(IQ=t((()=>{rq(),jR(),PQ(),FQ=class extends nq{constructor(e){super(e),this.removeGroupControls=AR,this.removeListeners=AR,this.controls=new NQ(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||AR}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}})))()}var LQ,RQ;function zQ(){return(zQ=t((()=>{rq(),jz(),jR(),tQ(),rQ(),hQ(),LQ=e=>(t,n)=>{e&&Dz.update(()=>e(t,n),!1,!0)},RQ=class extends nq{constructor(){super(...arguments),this.removePointerDownListener=AR}onPointerDown(e){this.session=new mQ(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nQ(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:LQ(e),onStart:LQ(t),onMove:LQ(n),onEnd:(e,t)=>{delete this.session,r&&Dz.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=eQ(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}})))()}function BQ(e){let[t,n]=hX(),r=(0,HQ.useContext)(tR);return(0,VQ.jsx)(WQ,{...e,layoutGroup:r,switchLayoutGroup:(0,HQ.useContext)(wZ),isPresent:t,safeToRemove:n})}var VQ,HQ,UQ,WQ;function GQ(){return(GQ=t((()=>{VQ=W(),EY(),jz(),CG(),HQ=r(),_X(),nR(),TZ(),UQ=!1,WQ=class extends HQ.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),UQ&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),TY.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),UQ=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Dz.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),xG.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;UQ=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}})))()}var KQ;function qQ(){return(qQ=t((()=>{IQ(),zQ(),GQ(),dX(),KQ={pan:{Feature:RQ},drag:{Feature:FQ,ProjectionNode:uX,MeasureLayout:BQ}}})))()}function JQ(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&Dz.postRender(()=>i(t,ZZ(t)))}var YQ;function XQ(){return(XQ=t((()=>{rq(),NG(),jz(),$Z(),YQ=class extends nq{mount(){let{current:e}=this.node;e&&(this.unmount=MG(e,(e,t)=>(JQ(this.node,t,`Start`),e=>JQ(this.node,e,`End`))))}unmount(){}}})))()}var ZQ;function QQ(){return(QQ=t((()=>{rq(),NR(),ZQ=class extends nq{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=MR(mY(this.node.current,`focus`,()=>this.onFocus()),mY(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}}})))()}function $Q(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&Dz.postRender(()=>i(t,ZZ(t)))}var e$;function t$(){return(t$=t((()=>{rq(),QG(),jz(),$Z(),e$=class extends nq{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=XG(e,(e,t)=>($Q(this.node,t,`Start`),(e,{success:t})=>$Q(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}}})))()}function n$({root:e,...t}){let n=e||document;a$.has(n)||a$.set(n,{});let r=a$.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(s$,{root:e,...t})),r[i]}function r$(e,t,n){let r=n$(t);return i$.set(e,n),r.observe(e),()=>{i$.delete(e),r.unobserve(e)}}var i$,a$,o$,s$;function c$(){return(c$=t((()=>{i$=new WeakMap,a$=new WeakMap,o$=e=>{let t=i$.get(e.target);t&&t(e)},s$=e=>{e.forEach(o$)}})))()}function l$({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var u$,d$;function f$(){return(f$=t((()=>{rq(),c$(),u$={some:0,all:1},d$=class extends nq{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:u$[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=r$(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(l$(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}})))()}var p$;function m$(){return(m$=t((()=>{XQ(),QQ(),t$(),f$(),p$={inView:{Feature:d$},tap:{Feature:e$},focus:{Feature:ZQ},hover:{Feature:YQ}}})))()}var h$;function g$(){return(g$=t((()=>{dX(),GQ(),h$={layout:{ProjectionNode:uX,MeasureLayout:BQ}}})))()}var _$;function v$(){return(v$=t((()=>{XZ(),qQ(),m$(),g$(),_$={...YZ,...p$,...KQ,...h$}})))()}var y$;function b$(){return(b$=t((()=>{UZ(),BZ(),v$(),y$=zZ(_$,HZ)})))()}function x$(){!UK.current&&GK();let[e]=(0,S$.useState)(HK.current);return e}var S$;function C$(){return(C$=t((()=>{WK(),qK(),S$=r()})))()}var w$;function T$(){return(T$=t((()=>{b$(),C$(),w$=y$})))()}function E$(e){if(typeof e==`object`&&e){let t=e,n=typeof t.status==`number`&&Number.isFinite(t.status)?t.status:null,r=typeof t.retryAfterSeconds==`number`&&Number.isFinite(t.retryAfterSeconds)?t.retryAfterSeconds:null,i=Array.isArray(t.issues)&&t.issues.length>0&&typeof t.issues[0]==`object`&&t.issues[0]!==null&&`message`in t.issues[0]&&typeof t.issues[0].message==`string`?t.issues[0].message:null;if(typeof t.userMessage==`string`&&t.userMessage.trim()!==``)return n===null?t.userMessage:`${t.userMessage} (HTTP ${n})`;if(typeof t.detail==`string`&&t.detail.trim()!==``)return n===429&&r!==null?`${t.detail} (retry in ${r}s)`:n===null?t.detail:`${t.detail} (HTTP ${n})`;if(typeof t.message==`string`&&t.message.trim()!==``)return n===null?t.message:`${t.message} (HTTP ${n})`;if(typeof t.title==`string`&&t.title.trim()!==``)return i?`${t.title}: ${i}`:n===null?t.title:`${t.title} (HTTP ${n})`}return e instanceof Error?e.message:String(e)}function D$(e,t){return e===void 0||t&&e===null?!0:Array.isArray(e)?e.length===0:!1}function O$(e,t){return e.some(e=>D$(e,t))}function k$(e){return e.data!==void 0}function A$(e){let t=k$(e);return{hasData:t,data:t?e.data:void 0,initialLoading:e.isFetching&&!t,refreshing:t&&e.isFetching,blockingError:e.isError&&!t,staleError:e.isError&&t,error:e.error??void 0}}function j$(e){return e.map(e=>e.data)}function M$(e){let t=e,n=t.length>0&&t.every(e=>e.data!==void 0),r=t.find(e=>e.data===void 0&&e.isError),i=n?t.find(e=>e.data!==void 0&&e.isError):void 0,a=r?.error??i?.error;return{allHaveData:n,dataTuple:n?j$(e):void 0,initialLoading:!n&&t.some(e=>e.data===void 0&&e.isFetching),refreshing:n&&t.some(e=>e.isFetching),blockingError:r!==void 0,staleError:n&&i!==void 0,error:a}}function N$(e){return u`
    min-height: ${e}px;
  `}function P$(e,t){return u`
    width: ${e};
    height: ${t}px;
  `}var F$,I$,L$,R$,z$,B$,V$,H$,U$,W$,G$,K$,q$,J$,Y$,X$,Z$,Q$,$$,e1,t1,n1,r1,i1,a1,o1;function s1(){return(s1=t((()=>{l(),F$=o`
  0% { transform: translateX(-130%); }
  100% { transform: translateX(130%); }
`,I$=o`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(420%); }
`,L$=u`
  position: relative;
  width: 100%;
  min-width: 0;
`,R$=u`
  isolation: isolate;
`,z$=u`
  background: var(--query-skeleton-surface-light);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-light);
`,B$=u`
  background: var(--query-skeleton-surface-dark);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-dark);
`,V$=u`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(var(--space-4) + var(--space-1));
`,H$=u`
  position: absolute;
  inset: 0;
  padding: calc(var(--space-4) + var(--space-1));
  display: grid;
  gap: calc(var(--space-3) + var(--space-2));
  align-content: start;
`,U$=`
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--query-shimmer-edge) 35%,
    var(--query-shimmer-mid) 50%,
    var(--query-shimmer-edge) 65%,
    transparent 100%
  );
`,W$=u`
  background: var(--query-skeleton-block-light);

  &::after {
    ${U$}
  }
`,G$=u`
  background: var(--query-skeleton-block-dark);

  &::after {
    ${U$}
  }
`,K$=u`
  border-radius: calc(var(--space-3) + var(--space-2));
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    animation: ${F$} var(--query-shimmer-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,q$=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,J$=u`
  background: var(--query-progress-track-light);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-light), transparent);
  }
`,Y$=u`
  background: var(--query-progress-track-dark);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-dark), transparent);
  }
`,X$=u`
  position: absolute;
  inset: 0 0 auto 0;
  height: var(--space-1);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 28%;
    animation: ${I$} var(--query-progress-beam-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,Z$=u`
  margin-bottom: calc(var(--space-3) + var(--space-2));
`,Q$=u`
  transition: var(--query-content-transition);
`,$$=u`
  filter: blur(var(--query-refresh-blur));
  opacity: var(--query-refresh-content-opacity);
  transform: scale(var(--query-refresh-content-scale));
`,e1=u`
  pointer-events: none;
`,t1=u`
  margin: 0 0 var(--space-3);
`,n1=u`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
`,r1=u`
  padding: var(--space-4);
  border-radius: calc(var(--space-3) + var(--space-2));
  border: var(--query-border-width) solid var(--field-border-color-invalid);
  background: var(--color-crimson-25);
`,i1=u`
  font-size: var(--font-size-1);
  color: var(--field-message-color-invalid);
`,a1=o`
  to { transform: rotate(360deg); }
`,o1=u`
  width: var(--space-5);
  height: var(--space-5);
  border-radius: 50%;
  border: var(--space-1) solid var(--color-green-600);
  border-right-color: transparent;
  animation: ${a1} var(--query-spinner-duration) linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`})))()}function c1(e,t){let[n,r]=(0,m1.useState)(!1);return(0,m1.useEffect)(()=>{if(!e){r(!1);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}function l1(e){let[t,n]=(0,m1.useState)(!1),r=(0,m1.useRef)(!1);return(0,m1.useEffect)(()=>{if(e){r.current=!0,n(!1);return}if(!r.current)return;r.current=!1,n(!0);let t=setTimeout(()=>n(!1),y1);return()=>clearTimeout(t)},[e]),{settling:t,onContentTransitionEnd:e=>{e.target===e.currentTarget&&e.propertyName===`filter`&&n(!1)}}}function u1({error:e,retry:t}){let{t:n}=i();return(0,h1.jsx)(`div`,{className:r1,role:`alert`,children:(0,h1.jsxs)(`div`,{className:n1,children:[(0,h1.jsx)(`p`,{className:t1,children:E$(e)}),(0,h1.jsx)(Ub,{type:`button`,variant:`secondary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})})}function d1({error:e,retry:t}){let{t:n}=i();return(0,h1.jsxs)(`div`,{className:n1,children:[(0,h1.jsx)(`div`,{className:i1,role:`status`,children:E$(e)}),(0,h1.jsx)(Ub,{type:`button`,variant:`tertiary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})}function f1(e){return e==null||e===!1}function p1({themeMode:e,minHeight:t=v1,loadingDelayMs:n=200,refreshIndicator:r=`blur`,initialLoading:a,refreshing:o,blockingError:s,staleError:l,error:u,retry:d,children:f,contentClassName:p,renderBlockingError:m,renderStaleError:h}){let{t:g}=i(),_=!!x$(),v=c1(a,n),y=r!==`quiet`&&o,{settling:b,onContentTransitionEnd:x}=l1(y),S=e===`dark`?B$:z$,C=e===`dark`?G$:W$,w=e===`dark`?Y$:J$;if(s&&u!==void 0){let e={error:u,retry:d};return m?m(e):(0,h1.jsx)(u1,{...e})}if(a){let e=g(`queryResult.loading`);return(0,h1.jsx)(`section`,{className:c(L$,R$),role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":e,"data-testid":`query-initial-loading`,children:(0,h1.jsxs)(`div`,{className:c(V$,S,N$(t)),children:[(0,h1.jsx)(`div`,{className:H$,"data-testid":`query-skeleton-blocks`,children:g1.map((e,t)=>(0,h1.jsx)(`div`,{className:c(K$,C,P$(e.width,e.height))},t))}),v?(0,h1.jsx)(w$.div,{className:q$,initial:!_&&{opacity:0},animate:{opacity:1},transition:{duration:.2},children:(0,h1.jsx)(`div`,{className:o1,"data-testid":`query-loading-spinner`,"aria-hidden":!0})}):null]})})}let T=l&&u!==void 0?{error:u,retry:d}:void 0;return T===void 0&&!o&&!b&&f1(f)?null:(0,h1.jsxs)(`section`,{className:c(L$,o?R$:void 0),"aria-busy":o||b?`true`:void 0,...(o||b)&&{"data-testid":`query-refreshing`},children:[o?(0,h1.jsx)(`div`,{role:`status`,"aria-live":`polite`,"aria-label":g(`queryResult.refreshing`),"data-testid":`query-refreshing-status`}):null,o?(0,h1.jsx)(`div`,{className:c(X$,w),"aria-hidden":!0}):null,(0,h1.jsxs)(w$.div,{initial:!_&&{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.18,ease:_1},children:[T?(0,h1.jsx)(w$.div,{className:Z$,initial:!_&&{opacity:0},animate:{opacity:1},children:h?h(T):(0,h1.jsx)(d1,{...T})}):null,(0,h1.jsx)(`div`,{className:c(Q$,y?$$:void 0,y||b?e1:void 0,p),onTransitionEnd:x,children:f})]})]})}var m1,h1,g1,_1,v1,y1;function b1(){return(b1=t((()=>{l(),T$(),m1=e(r()),a(),Wb(),s1(),h1=W(),g1=[{width:`55%`,height:14},{width:`100%`,height:22},{width:`72%`,height:14}],_1=[.2,0,0,1],v1=120,y1=600})))()}function x1({query:e,themeMode:t=`light`,children:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){let f=A$(e),p=()=>{e.refetch()},m=f.hasData&&f.data!==void 0?!a&&D$(f.data,i)?r:n(f.data):null;return(0,S1.jsx)(p1,{themeMode:t,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,...Y({error:f.error}),retry:p,...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:m})}var S1;function C1(){return(C1=t((()=>{r(),b1(),S1=W()})))()}function w1({queries:e,themeMode:t=`light`,renderData:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){if(e.length===0)return null;let f=M$(e),p=()=>{let t=e.filter(e=>e.isError),n=t.length>0?t:e;Promise.all(n.map(e=>e.refetch()))},m=f.dataTuple,h=m?Array.isArray(m)?[...m]:Object.values(m):[],g=f.allHaveData&&m?!a&&O$(h,i)?r:n(m,e):null;return(0,T1.jsx)(p1,{themeMode:t,initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,retry:p,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),...Y({error:f.error}),...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:g})}var T1;function E1(){return(E1=t((()=>{r(),b1(),T1=W()})))()}function D1(){return(D1=t((()=>{Wb(),bw(),qT(),zj(),Wj(),aM(),vM(),EM(),ZM(),MN(),hN(),NN(),cP(),lP(),hP(),xP(),TP(),AP(),jP(),RP(),JP(),YP(),pF(),SF(),TF(),wF(),zF(),BF(),JF(),YF(),lI(),uI(),dI(),fI(),yI(),EI(),hI(),DI(),GI(),$I(),QL(),$L(),b1(),C1(),E1()})))()}export{zj as $,EP as A,jN as B,SF as C,JP as D,qP as E,xP as F,ZM as G,rN as H,uP as I,Zj as J,_M as K,hP as L,SP as M,TP as N,LP as O,_P as P,Fj as Q,eP as R,xF as S,pF as T,hN as U,MN as V,VM as W,Bj as X,aM as Y,Wj as Z,lI as _,C1 as a,px as at,RF as b,QI as c,Wb as ct,GI as d,VT as et,TI as f,cI as g,yI as h,x1 as i,MS as it,AP as j,RP as k,$I as l,vI as m,w1 as n,gw as nt,KL as o,Yb as ot,EI as p,vM as q,E1 as r,bw as rt,QL as s,Ub as st,D1 as t,qT as tt,WI as u,qF as v,fF as w,zF as x,JF as y,cP as z};