import{a as e,n as t,t as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-BZJXY1be.js";import{n as i,t as a}from"./useTranslation-B0Jg814S.js";import{a as o,i as s,n as c,r as l,t as u}from"./emotion-css.esm-DsoSFdsS.js";import{$ as d,$t as f,A as p,B as m,Bt as h,C as g,Ct as _,D as v,Dt as y,E as b,Et as x,F as S,Ft as C,G as w,Gt as T,H as E,Ht as D,I as O,It as k,J as A,Jt as j,K as M,Kt as N,L as P,Lt as F,M as I,Mt as L,N as R,Nt as z,Ot as B,P as ee,Pt as te,Q as V,Qt as ne,R as re,Rt as ie,S as ae,St as oe,T as se,Tt as ce,U as le,Ut as ue,V as de,Vt as fe,W as pe,Wt as me,X as he,Xt as ge,Y as _e,Yt as ve,Z as ye,Zt as be,_ as xe,_t as Se,a as Ce,an as we,at as Te,b as Ee,bt as De,c as Oe,cn as ke,ct as Ae,dt as H,en as je,et as Me,f as Ne,ft as Pe,g as Fe,gt as Ie,ht as Le,i as Re,in as ze,it as Be,j as Ve,jt as He,k as Ue,l as We,ln as Ge,lt as Ke,mt as qe,n as Je,nn as Ye,nt as Xe,o as Ze,on as Qe,ot as $e,p as et,q as tt,qt as nt,r as rt,rn as U,rt as it,s as at,sn as ot,st,t as ct,tn as lt,tt as ut,u as dt,un as ft,ut as W,v as pt,w as mt,wt as ht,x as gt,xt as _t,y as vt,yt,z as bt,zt as xt}from"./useOverlayTriggerState--ZTAXzSt.js";import{t as St}from"./react-dom-BzEl8usk.js";import{t as G}from"./jsx-runtime-DeHZSEgm.js";import{a as Ct,c as wt,i as Tt,m as Et,n as Dt,o as Ot,p as kt,r as At,s as jt,u as Mt}from"./atlas-icons-react-CQxarVg9.js";function Nt(e){let t=(0,Pt.useRef)(null),n=(0,Pt.useRef)(void 0),r=(0,Pt.useCallback)(t=>{if(typeof e==`function`){let n=e,r=n(t);return()=>{typeof r==`function`?r():n(null)}}if(e)return e.current=t,()=>{e.current=null}},[e]);return(0,Pt.useMemo)(()=>({get current(){return t.current},set current(e){t.current=e,n.current&&=(n.current(),void 0),e!=null&&(n.current=r(e))}}),[r])}var Pt;function Ft(){return(Ft=t((()=>{Pt=r()})))()}var It,Lt;function Rt(){return(Rt=t((()=>{It=`react-aria-clear-focus`,Lt=`react-aria-focus`})))()}function zt(e){let t=Ht(we(e));t!==e&&(t&&Bt(t,e),e&&Vt(e,t))}function Bt(e,t){e.dispatchEvent(new FocusEvent(`blur`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusout`,{bubbles:!0,relatedTarget:t}))}function Vt(e,t){e.dispatchEvent(new FocusEvent(`focus`,{relatedTarget:t})),e.dispatchEvent(new FocusEvent(`focusin`,{bubbles:!0,relatedTarget:t}))}function Ht(e){let t=lt(e),n=t?.getAttribute(`aria-activedescendant`);return n&&e.getElementById(n)||t}function Ut(){return(Ut=t((()=>{ze(),ke()})))()}var Wt;function Gt(){return(Gt=t((()=>{Wt={},Wt={collectionLabel:`مقترحات`}})))()}var Kt;function qt(){return(qt=t((()=>{Kt={},Kt={collectionLabel:`Предложения`}})))()}var Jt;function Yt(){return(Yt=t((()=>{Jt={},Jt={collectionLabel:`Návrhy`}})))()}var Xt;function Zt(){return(Zt=t((()=>{Xt={},Xt={collectionLabel:`Forslag`}})))()}var Qt;function $t(){return($t=t((()=>{Qt={},Qt={collectionLabel:`Empfehlungen`}})))()}var en;function tn(){return(tn=t((()=>{en={},en={collectionLabel:`Προτάσεις`}})))()}var nn;function rn(){return(rn=t((()=>{nn={},nn={collectionLabel:`Suggestions`}})))()}var an;function on(){return(on=t((()=>{an={},an={collectionLabel:`Sugerencias`}})))()}var sn;function cn(){return(cn=t((()=>{sn={},sn={collectionLabel:`Soovitused`}})))()}var ln;function un(){return(un=t((()=>{ln={},ln={collectionLabel:`Ehdotukset`}})))()}var dn;function fn(){return(fn=t((()=>{dn={},dn={collectionLabel:`Suggestions`}})))()}var pn;function mn(){return(mn=t((()=>{pn={},pn={collectionLabel:`הצעות`}})))()}var hn;function gn(){return(gn=t((()=>{hn={},hn={collectionLabel:`Prijedlozi`}})))()}var _n;function vn(){return(vn=t((()=>{_n={},_n={collectionLabel:`Javaslatok`}})))()}var yn;function bn(){return(bn=t((()=>{yn={},yn={collectionLabel:`Suggerimenti`}})))()}var xn;function Sn(){return(Sn=t((()=>{xn={},xn={collectionLabel:`候補`}})))()}var Cn;function wn(){return(wn=t((()=>{Cn={},Cn={collectionLabel:`제안`}})))()}var Tn;function En(){return(En=t((()=>{Tn={},Tn={collectionLabel:`Pasiūlymai`}})))()}var Dn;function On(){return(On=t((()=>{Dn={},Dn={collectionLabel:`Ieteikumi`}})))()}var kn;function An(){return(An=t((()=>{kn={},kn={collectionLabel:`Forslag`}})))()}var jn;function Mn(){return(Mn=t((()=>{jn={},jn={collectionLabel:`Suggesties`}})))()}var Nn;function Pn(){return(Pn=t((()=>{Nn={},Nn={collectionLabel:`Sugestie`}})))()}var Fn;function In(){return(In=t((()=>{Fn={},Fn={collectionLabel:`Sugestões`}})))()}var Ln;function Rn(){return(Rn=t((()=>{Ln={},Ln={collectionLabel:`Sugestões`}})))()}var zn;function Bn(){return(Bn=t((()=>{zn={},zn={collectionLabel:`Sugestii`}})))()}var Vn;function Hn(){return(Hn=t((()=>{Vn={},Vn={collectionLabel:`Предложения`}})))()}var Un;function Wn(){return(Wn=t((()=>{Un={},Un={collectionLabel:`Návrhy`}})))()}var Gn;function Kn(){return(Kn=t((()=>{Gn={},Gn={collectionLabel:`Predlogi`}})))()}var qn;function Jn(){return(Jn=t((()=>{qn={},qn={collectionLabel:`Predlozi`}})))()}var Yn;function Xn(){return(Xn=t((()=>{Yn={},Yn={collectionLabel:`Förslag`}})))()}var Zn;function Qn(){return(Qn=t((()=>{Zn={},Zn={collectionLabel:`Öneriler`}})))()}var $n;function er(){return(er=t((()=>{$n={},$n={collectionLabel:`Пропозиції`}})))()}var tr;function nr(){return(nr=t((()=>{tr={},tr={collectionLabel:`建议`}})))()}var rr;function ir(){return(ir=t((()=>{rr={},rr={collectionLabel:`建議`}})))()}var ar;function or(){return(or=t((()=>{Gt(),qt(),Yt(),Zt(),$t(),tn(),rn(),on(),cn(),un(),fn(),mn(),gn(),vn(),bn(),Sn(),wn(),En(),On(),An(),Mn(),Pn(),In(),Rn(),Bn(),Hn(),Wn(),Kn(),Jn(),Xn(),Qn(),er(),nr(),ir(),ar={},ar={"ar-AE":Wt,"bg-BG":Kt,"cs-CZ":Jt,"da-DK":Xt,"de-DE":Qt,"el-GR":en,"en-US":nn,"es-ES":an,"et-EE":sn,"fi-FI":ln,"fr-FR":dn,"he-IL":pn,"hr-HR":hn,"hu-HU":_n,"it-IT":yn,"ja-JP":xn,"ko-KR":Cn,"lt-LT":Tn,"lv-LV":Dn,"nb-NO":kn,"nl-NL":jn,"pl-PL":Nn,"pt-BR":Fn,"pt-PT":Ln,"ro-RO":zn,"ru-RU":Vn,"sk-SK":Un,"sl-SI":Gn,"sr-SP":qn,"sv-SE":Yn,"tr-TR":Zn,"uk-UA":$n,"zh-CN":tr,"zh-TW":rr}})))()}function sr(e,t,n,r){let i=V(n),a=n==null;(0,cr.useEffect)(()=>{if(a||!e.current)return;let n=e.current;return n.addEventListener(t,i,r),()=>{n.removeEventListener(t,i,r)}},[e,t,r,a])}var cr;function lr(){return(lr=t((()=>{d(),cr=r()})))()}function ur(e){return e&&e.__esModule?e.default:e}function dr(e,t){let{inputRef:n,collectionRef:r,filter:i,disableAutoFocusFirst:a=!1,disableVirtualFocus:o=!1}=e,s=Le(),c=(0,fr.useRef)(void 0),l=(0,fr.useRef)(!1),u=(0,fr.useRef)(null),d=_()===`virtual`&&(ue()||fe()),[f,p]=(0,fr.useState)(!d&&!o),[m,h]=(0,fr.useState)(!1),[g,v]=(0,fr.useState)(!1);(0,fr.useEffect)(()=>()=>clearTimeout(c.current),[]);let y=V(e=>{!e.isTrusted&&f&&n.current&&lt(we(n.current))!==n.current&&ce()!==`touch`&&n.current.focus();let i=U(e);e.isTrusted||!i||u.current===i.id||(clearTimeout(c.current),i===r.current?u.current&&!document.getElementById(u.current)&&(u.current=null,t.setFocusedNodeId(null)):l.current?(u.current=i.id,c.current=setTimeout(()=>{t.setFocusedNodeId(i.id)},500)):(u.current=i.id,t.setFocusedNodeId(i.id)),l.current=!1)}),[b,x]=(0,fr.useState)(null),S=(0,fr.useCallback)(e=>{x(e),e==null?h(!1):(e.getAttribute(`tabindex`)!=null&&p(!1),h(!0))},[]);ve(()=>(b?.addEventListener(`focusin`,y),()=>{b?.removeEventListener(`focusin`,y)}),[b]);let C=Nt((0,fr.useMemo)(()=>Pe(r,S),[r,S])),w=(0,fr.useCallback)(()=>{if(!r.current){v(!0);return}l.current=!0,r.current?.dispatchEvent(new CustomEvent(Lt,{cancelable:!0,bubbles:!0,detail:{focusStrategy:`first`}}))},[r]),T=(0,fr.useCallback)(e=>{v(!1),zt(lt()),u.current=null,t.setFocusedNodeId(null);let n=new CustomEvent(It,{cancelable:!0,bubbles:!0,detail:{clearFocusKey:e}});clearTimeout(c.current),l.current=!1,r.current?.dispatchEvent(n)},[r,t]),D=(0,fr.useRef)(``);sr(n,`beforeinput`,e=>{let{inputType:t}=e;D.current=t});let O=e=>{(D.current===`insertText`||D.current===`insertCompositionText`||D.current===`insertFromComposition`)&&!a?w():D.current&&(D.current.includes(`insert`)||D.current.includes(`delete`)||D.current.includes(`history`))&&(T(!0),Ht(document)===n.current&&Vt(n.current,null)),t.setInputValue(e)},k=(0,fr.useRef)(null),A=e=>{if(k.current=U(e),e.nativeEvent.isComposing)return;let t=u.current;switch(t!==null&&we(n.current).getElementById(t)==null&&(u.current=null,t=null),e.key){case`a`:if(Me(e))return;break;case`Escape`:if(e.isDefaultPrevented())return;break;case` `:return;case`Tab`:`continuePropagation`in e&&e.continuePropagation();return;case`Home`:case`End`:case`PageDown`:case`PageUp`:case`ArrowUp`:case`ArrowDown`:case`ArrowRight`:case`ArrowLeft`:{if((e.key===`Home`||e.key===`End`)&&t==null&&e.shiftKey)return;if(e.key===`ArrowRight`||e.key===`ArrowLeft`){if(t==null){e.isPropagationStopped()||e.stopPropagation();return}break}e.preventDefault();let n=new CustomEvent(Lt,{cancelable:!0,bubbles:!0});r.current?.dispatchEvent(n);break}}e.isPropagationStopped()||e.stopPropagation();let i=!0;if(r.current!==null){if(t==null)i=r.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1;else{let n=document.getElementById(t);n&&(i=n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1)}}if(i)switch(e.key){case`ArrowLeft`:case`ArrowRight`:T();break;case`Enter`:t!=null&&document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`,e.nativeEvent));break}else e.preventDefault()},j=V(e=>{if(U(e)===k.current){e.stopImmediatePropagation();let t=u.current;t==null?r.current?.dispatchEvent(new KeyboardEvent(e.type,e)):document.getElementById(t)?.dispatchEvent(new KeyboardEvent(e.type,e))}});(0,fr.useEffect)(()=>(document.addEventListener(`keyup`,j,!0),()=>{document.removeEventListener(`keyup`,j,!0)}),[]);let M=E(ur(ar),`@react-aria/autocomplete`),N=he({id:s,"aria-label":M.format(`collectionLabel`)}),P=(0,fr.useCallback)((e,n)=>!i||i(e,t.inputValue,n),[t.inputValue,i]),F=e=>{if(!e.isTrusted)return;let t=u.current?document.getElementById(u.current):null;t&&Bt(t,e.relatedTarget)},I=e=>{if(e.isTrusted&&u.current&&document.getElementById(u.current)){let t=U(e);queueMicrotask(()=>{Bt(t,r.current),Vt(r.current,t)})}},L=e=>{e.button===0&&e.pointerType!==`touch`&&u.current!=null&&n.current!=null&&U(e)===n.current&&T()},R={value:t.inputValue,onChange:O},z={onKeyDown:A,"aria-activedescendant":t.focusedNodeId??void 0,onBlur:F,onFocus:I,onPointerDown:L};return R={...R,...f&&m&&z,enterKeyHint:`go`,"aria-controls":m?s:void 0,"aria-autocomplete":`list`,autoCorrect:`off`,spellCheck:`false`,autoComplete:`off`},{inputProps:R,collectionProps:W(N,{shouldUseVirtualFocus:f,disallowTypeAhead:f,autoFocus:g?`first`:!1}),collectionRef:C,filter:i==null?void 0:P}}var fr;function K(){return(K=t((()=>{Rt(),Ut(),ze(),B(),ke(),or(),me(),ut(),H(),d(),lr(),Ie(),ye(),ge(),le(),Ft(),fr=r()})))()}function pr(e){if(ue()&&xt()){if(hr==="default"){let t=we(e);gr=t.documentElement.style.webkitUserSelect,t.documentElement.style.webkitUserSelect=`none`}hr=`disabled`}else if(e instanceof HTMLElement||e instanceof SVGElement){let t=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;_r.set(e,e.style[t]),e.style[t]=`none`}}function mr(e){if(ue()&&xt()){if(hr!==`disabled`)return;hr=`restoring`,setTimeout(()=>{_t(()=>{if(hr===`restoring`){let t=we(e);t.documentElement.style.webkitUserSelect===`none`&&(t.documentElement.style.webkitUserSelect=gr||``),gr=``,hr=`default`}})},300)}else if((e instanceof HTMLElement||e instanceof SVGElement)&&e&&_r.has(e)){let t=_r.get(e),n=`userSelect`in e.style?`userSelect`:`webkitUserSelect`;e.style[n]===`none`&&(e.style[n]=t),e.getAttribute(`style`)===``&&e.removeAttribute(`style`),_r.delete(e)}}var hr,gr,_r;function vr(){return(vr=t((()=>{ke(),me(),oe(),hr=`default`,gr=``,_r=new WeakMap})))()}function yr(e){let t=(0,Dr.useContext)(S);if(t){let{register:n,ref:r,...i}=t;e=W(i,e),n()}return Be(t,e.ref),e}function br(e){let{onPress:t,onPressChange:n,onPressStart:r,onPressEnd:i,onPressUp:a,onClick:o,isDisabled:s,isPressed:c,preventFocusOnPress:l,shouldCancelOnPointerExit:u,allowTextSelectionOnPress:d,ref:p,...m}=yr(e),[g,_]=(0,Dr.useState)(!1),v=(0,Dr.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,didFirePressStart:!1,isTriggeringEvent:!1,activePointerId:null,target:null,isOverTarget:!1,pointerType:null,disposables:[]}),{addGlobalListener:y,removeAllGlobalListeners:b}=R(),x=(0,Dr.useCallback)((e,t)=>{let i=v.current;if(s||i.didFirePressStart)return!1;let a=!0;if(i.isTriggeringEvent=!0,r){let n=new Or(`pressstart`,t,e);r(n),a=n.shouldStopPropagation}return n&&n(!0),i.isTriggeringEvent=!1,i.didFirePressStart=!0,_(!0),a},[s,r,n]),S=(0,Dr.useCallback)((e,r,a=!0)=>{let o=v.current;if(!o.didFirePressStart)return!1;o.didFirePressStart=!1,o.isTriggeringEvent=!0;let c=!0;if(i){let t=new Or(`pressend`,r,e);i(t),c=t.shouldStopPropagation}if(n&&n(!1),_(!1),t&&a&&!s){let n=new Or(`press`,r,e);t(n),c&&=n.shouldStopPropagation}return o.isTriggeringEvent=!1,c},[s,i,n,t]),C=V(S),w=(0,Dr.useCallback)((e,t)=>{let n=v.current;if(s)return!1;if(a){n.isTriggeringEvent=!0;let r=new Or(`pressup`,t,e);return a(r),n.isTriggeringEvent=!1,r.shouldStopPropagation}return!0},[s,a]),E=V(w),D=(0,Dr.useCallback)(e=>{let t=v.current;if(t.isPressed&&t.target){t.didFirePressStart&&t.pointerType!=null&&S(Cr(t.target,e),t.pointerType,!1),t.isPressed=!1,t.isOverTarget=!1,t.activePointerId=null,t.pointerType=null,b(),d||mr(t.target);for(let e of t.disposables)e();t.disposables=[]}},[d,b,S]),O=V(D);(0,Dr.useEffect)(()=>{s&&v.current.isPressed&&O({currentTarget:v.current.target,shiftKey:!1,ctrlKey:!1,metaKey:!1,altKey:!1})},[s]);let A=(0,Dr.useCallback)(e=>{u&&D(e)},[u,D]),j=(0,Dr.useCallback)(e=>{s||o?.(e)},[s,o]),M=(0,Dr.useCallback)((e,t)=>{if(!s&&o){let n=new MouseEvent(`click`,e);N(n,t),o(T(n))}},[s,o]),I=(0,Dr.useMemo)(()=>{let e=v.current,t={onKeyDown(t){if(Sr(t.nativeEvent,t.currentTarget)&&f(t.currentTarget,U(t))){Tr(U(t),t.key)&&t.preventDefault();let r=!0;!e.isPressed&&!t.repeat&&(e.target=t.currentTarget,e.isPressed=!0,e.pointerType=`keyboard`,r=x(t,`keyboard`));let i=t.currentTarget;y(we(t.currentTarget),`keyup`,Se(t=>{Sr(t,i)&&!t.repeat&&f(i,U(t))&&e.target&&E(Cr(e.target,t),`keyboard`)},n),!0),r&&t.stopPropagation(),t.metaKey&&h()&&e.metaKeyEvents?.set(t.key,t.nativeEvent)}else t.key===`Meta`&&(e.metaKeyEvents=new Map)},onClick(t){if(!(t&&!f(t.currentTarget,U(t)))&&t&&t.button===0&&!e.isTriggeringEvent&&!z.isOpening){let n=!0;if(s&&t.preventDefault(),!e.ignoreEmulatedMouseEvents&&!e.isPressed&&(e.pointerType===`virtual`||F(t.nativeEvent))){let e=x(t,`virtual`),r=E(t,`virtual`),i=C(t,`virtual`);j(t),n=e&&r&&i}else if(e.isPressed&&e.pointerType!==`keyboard`){let r=e.pointerType||t.nativeEvent.pointerType||`virtual`,i=E(Cr(t.currentTarget,t),r),a=C(Cr(t.currentTarget,t),r,!0);n=i&&a,e.isOverTarget=!1,j(t),O(t)}e.ignoreEmulatedMouseEvents=!1,n&&t.stopPropagation()}}},n=t=>{if(e.isPressed&&e.target&&Sr(t,e.target)){Tr(U(t),t.key)&&t.preventDefault();let n=U(t),r=f(e.target,n);C(Cr(e.target,t),`keyboard`,r),r&&M(t,e.target),b(),t.key!==`Enter`&&xr(e.target)&&f(e.target,n)&&!t[kr]&&(t[kr]=!0,z(e.target,t,!1)),e.isPressed=!1,e.metaKeyEvents?.delete(t.key)}else if(t.key===`Meta`&&e.metaKeyEvents?.size){let t=e.metaKeyEvents;e.metaKeyEvents=void 0;for(let n of t.values())e.target?.dispatchEvent(new KeyboardEvent(`keyup`,n))}};if(typeof PointerEvent<`u`){t.onPointerDown=t=>{if(t.button!==0||!f(t.currentTarget,U(t)))return;if(k(t.nativeEvent)){e.pointerType=`virtual`;return}e.pointerType=t.pointerType;let i=!0;if(!e.isPressed){e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=t.pointerId,e.target=t.currentTarget,d||pr(e.target),i=x(t,e.pointerType);let a=U(t);`releasePointerCapture`in a&&(`hasPointerCapture`in a?a.hasPointerCapture(t.pointerId)&&a.releasePointerCapture(t.pointerId):a.releasePointerCapture(t.pointerId)),y(we(t.currentTarget),`pointerup`,n,!1),y(we(t.currentTarget),`pointercancel`,r,!1)}i&&t.stopPropagation()},t.onMouseDown=t=>{if(f(t.currentTarget,U(t))&&t.button===0){if(l){let n=nt(t.target);n&&e.disposables.push(n)}t.stopPropagation()}},t.onPointerUp=t=>{!f(t.currentTarget,U(t))||e.pointerType===`virtual`||t.button===0&&!e.isPressed&&E(t,e.pointerType||t.pointerType)},t.onPointerEnter=t=>{t.pointerId===e.activePointerId&&e.target&&!e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!0,x(Cr(e.target,t),e.pointerType))},t.onPointerLeave=t=>{t.pointerId===e.activePointerId&&e.target&&e.isOverTarget&&e.pointerType!=null&&(e.isOverTarget=!1,C(Cr(e.target,t),e.pointerType,!1),A(t))};let n=t=>{if(t.pointerId===e.activePointerId&&e.isPressed&&t.button===0&&e.target){if(f(e.target,U(t))&&e.pointerType!=null){let n=!1,r=setTimeout(()=>{e.isPressed&&e.target instanceof HTMLElement&&(n?O(t):(Ge(e.target),e.target.click()))},80);y(t.currentTarget,`click`,()=>n=!0,!0),e.disposables.push(()=>clearTimeout(r))}else O(t);e.isOverTarget=!1}},r=e=>{O(e)};t.onDragStart=e=>{f(e.currentTarget,U(e))&&O(e)}}return t},[y,s,l,b,d,A,x,j,M]);return(0,Dr.useEffect)(()=>{if(!p)return;let e=we(p.current);if(!e||!e.head||e.getElementById(Ar))return;let t=e.createElement(`style`);t.id=Ar;let n=P(e);n&&(t.nonce=n),t.textContent=`
@layer {
  [${jr}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(),e.head.prepend(t)},[p]),(0,Dr.useEffect)(()=>{let e=v.current;return()=>{d||mr(e.target??void 0);for(let t of e.disposables)t();e.disposables=[]}},[d]),{isPressed:c||g,pressProps:W(m,I,{[jr]:!0})}}function xr(e){return e.tagName===`A`&&e.hasAttribute(`href`)}function Sr(e,t){let{key:n,code:r}=e,i=t,a=i.getAttribute(`role`);return(n===`Enter`||n===` `||n===`Spacebar`||r===`Space`)&&!(i instanceof Qe(i).HTMLInputElement&&!Er(i,n)||i instanceof Qe(i).HTMLTextAreaElement||i.isContentEditable)&&!((a===`link`||!a&&xr(i))&&n!==`Enter`)}function Cr(e,t){let n=t.clientX,r=t.clientY;return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,altKey:t.altKey,clientX:n,clientY:r,key:t.key}}function wr(e){return e instanceof HTMLInputElement?!1:e instanceof HTMLButtonElement?e.type!==`submit`&&e.type!==`reset`:!xr(e)}function Tr(e,t){return h()&&t===`Enter`?!1:e instanceof HTMLInputElement?t===`Enter`&&(e.type===`checkbox`||e.type===`radio`)?!1:!Er(e,t):wr(e)}function Er(e,t){return e.type===`checkbox`||e.type===`radio`?t===` `:Mr.has(e.type)}var Dr,Or,kr,Ar,jr,Mr;function Nr(){return(Nr=t((()=>{j(),vr(),ft(),ze(),re(),ke(),me(),ie(),H(),C(),O(),d(),ee(),Te(),St(),Dr=r(),Or=class{#e;constructor(e,t,n,r){this.#e=!0;let i=(r?.target??n.currentTarget)?.getBoundingClientRect(),a,o=0,s,c=null;n.clientX!=null&&n.clientY!=null&&(s=n.clientX,c=n.clientY),i&&(s!=null&&c!=null?(a=s-i.left,o=c-i.top):(a=i.width/2,o=i.height/2)),this.type=e,this.pointerType=t,this.target=n.currentTarget,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.x=a,this.y=o,this.key=n.key}continuePropagation(){this.#e=!1}get shouldStopPropagation(){return this.#e}},kr=Symbol(`linkClicked`),Ar=`react-aria-pressable-style`,jr=`data-react-aria-pressable`,Mr=new Set([`checkbox`,`radio`,`range`,`color`,`file`,`image`,`button`,`submit`,`reset`])})))()}function Pr(e,t){let{elementType:n=`a`,onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,...l}=e,u={};n!==`a`&&(u={role:`link`,tabIndex:c?void 0:0});let{focusableProps:d}=Xe(e,t),{pressProps:f,isPressed:p}=br({onPress:r,onPressStart:i,onPressEnd:a,onPressChange:o,onClick:s,isDisabled:c,ref:t}),m=bt(l,{labelable:!0}),h=W(d,f),g=te(),_=L(e);return{isPressed:p,linkProps:W(m,_,{...h,...u,"aria-disabled":c||void 0,"aria-current":e[`aria-current`],onClick:t=>{f.onClick?.(t),He(t,g,e.href,e.routerOptions)}})}}function Fr(){return(Fr=t((()=>{m(),C(),H(),it(),Nr()})))()}function Ir(e,t){let{elementType:n=`button`,isDisabled:r,onPress:i,onPressStart:a,onPressEnd:o,onPressUp:s,onPressChange:c,preventFocusOnPress:l,allowFocusWhenDisabled:u,onClick:d,href:f,target:p,rel:m,type:h=`button`}=e,g;g=n===`button`?{type:h,disabled:r,form:e.form,formAction:e.formAction,formEncType:e.formEncType,formMethod:e.formMethod,formNoValidate:e.formNoValidate,formTarget:e.formTarget,name:e.name,value:e.value}:{role:`button`,href:n===`a`&&!r?f:void 0,target:n===`a`?p:void 0,type:n===`input`?h:void 0,disabled:n===`input`?r:void 0,"aria-disabled":!r||n===`input`?void 0:r,rel:n===`a`?m:void 0};let{pressProps:_,isPressed:v}=br({onPressStart:a,onPressEnd:o,onPressChange:c,onPress:i,onPressUp:s,onClick:d,isDisabled:r,preventFocusOnPress:l,ref:t}),{focusableProps:y}=Xe(e,t);u&&(y.tabIndex=r?-1:y.tabIndex);let b=W(y,_,bt(e,{labelable:!0}));return{isPressed:v,buttonProps:W(g,b,{"aria-haspopup":e[`aria-haspopup`],"aria-expanded":e[`aria-expanded`],"aria-controls":e[`aria-controls`],"aria-pressed":e[`aria-pressed`],"aria-current":e[`aria-current`],"aria-disabled":e[`aria-disabled`]})}}function Lr(){return(Lr=t((()=>{m(),H(),it(),Nr()})))()}function Rr(e,t=`assertive`,n=Br){Vr?Vr.announce(e,t,n):(Vr=new Hr,(typeof IS_REACT_ACT_ENVIRONMENT==`boolean`?IS_REACT_ACT_ENVIRONMENT:typeof jest<`u`)?Vr.announce(e,t,n):setTimeout(()=>{Vr?.isAttached()&&Vr?.announce(e,t,n)},100))}function zr(e){Vr&&Vr.clear(e)}var Br,Vr,Hr;function Ur(){return(Ur=t((()=>{Br=7e3,Vr=null,Hr=class{constructor(){this.node=null,this.assertiveLog=null,this.politeLog=null,typeof document<`u`&&(this.node=document.createElement(`div`),this.node.dataset.liveAnnouncer=`true`,Object.assign(this.node.style,{border:0,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,height:`1px`,margin:`-1px`,overflow:`hidden`,padding:0,position:`absolute`,width:`1px`,whiteSpace:`nowrap`}),this.assertiveLog=this.createLog(`assertive`),this.node.appendChild(this.assertiveLog),this.politeLog=this.createLog(`polite`),this.node.appendChild(this.politeLog),document.body.prepend(this.node))}isAttached(){return this.node?.isConnected}createLog(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),t}destroy(){this.node&&=(document.body.removeChild(this.node),null)}announce(e,t=`assertive`,n=Br){if(!this.node)return;let r=document.createElement(`div`);typeof e==`object`?(r.setAttribute(`role`,`img`),r.setAttribute(`aria-labelledby`,e[`aria-labelledby`])):r.textContent=e,t===`assertive`?this.assertiveLog?.appendChild(r):this.politeLog?.appendChild(r),e!==``&&setTimeout(()=>{r.remove()},n)}clear(e){this.node&&((!e||e===`assertive`)&&this.assertiveLog&&(this.assertiveLog.innerHTML=``),(!e||e===`polite`)&&this.politeLog&&(this.politeLog.innerHTML=``))}}})))()}var Wr;function Gr(){return(Gr=t((()=>{Wr={},Wr={dateRange:e=>`${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,dateSelected:e=>`${e.date} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}`,finishRangeSelectionPrompt:`انقر لإنهاء عملية تحديد نطاق التاريخ`,maximumDate:`آخر تاريخ متاح`,minimumDate:`أول تاريخ متاح`,next:`التالي`,previous:`السابق`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.dateRange}`,startRangeSelectionPrompt:`انقر لبدء عملية تحديد نطاق التاريخ`,todayDate:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date}`,todayDateSelected:e=>`\u{627}\u{644}\u{64A}\u{648}\u{645}\u{60C} ${e.date} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var Kr;function qr(){return(qr=t((()=>{Kr={},Kr={dateRange:e=>`${e.startDate} \u{434}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,finishRangeSelectionPrompt:`Натиснете, за да довършите избора на времеви интервал`,maximumDate:`Последна налична дата`,minimumDate:`Първа налична дата`,next:`Напред`,previous:`Назад`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натиснете, за да пристъпите към избора на времеви интервал`,todayDate:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,todayDateSelected:e=>`\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var Jr;function Yr(){return(Yr=t((()=>{Jr={},Jr={dateRange:e=>`${e.startDate} a\u{17E} ${e.endDate}`,dateSelected:e=>`Vybr\xe1no ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výběr rozsahu dat`,maximumDate:`Poslední dostupné datum`,minimumDate:`První dostupné datum`,next:`Další`,previous:`Předchozí`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím zahájíte výběr rozsahu dat`,todayDate:e=>`Dnes, ${e.date}`,todayDateSelected:e=>`Dnes, vybr\xe1no ${e.date}`}})))()}var Xr;function Zr(){return(Zr=t((()=>{Xr={},Xr={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klik for at fuldføre valg af datoområde`,maximumDate:`Sidste ledige dato`,minimumDate:`Første ledige dato`,next:`Næste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.dateRange}`,startRangeSelectionPrompt:`Klik for at starte valg af datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var Qr;function $r(){return($r=t((()=>{Qr={},Qr={dateRange:e=>`${e.startDate} bis ${e.endDate}`,dateSelected:e=>`${e.date} ausgew\xe4hlt`,finishRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beenden`,maximumDate:`Letztes verfügbares Datum`,minimumDate:`Erstes verfügbares Datum`,next:`Weiter`,previous:`Zurück`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.dateRange}`,startRangeSelectionPrompt:`Klicken, um die Auswahl des Datumsbereichs zu beginnen`,todayDate:e=>`Heute, ${e.date}`,todayDateSelected:e=>`Heute, ${e.date} ausgew\xe4hlt`}})))()}var ei;function ti(){return(ti=t((()=>{ei={},ei={dateRange:e=>`${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,dateSelected:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5} ${e.date}`,finishRangeSelectionPrompt:`Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών`,maximumDate:`Τελευταία διαθέσιμη ημερομηνία`,minimumDate:`Πρώτη διαθέσιμη ημερομηνία`,next:`Επόμενο`,previous:`Προηγούμενο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.dateRange}`,startRangeSelectionPrompt:`Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών`,todayDate:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, ${e.date}`,todayDateSelected:e=>`\u{3A3}\u{3AE}\u{3BC}\u{3B5}\u{3C1}\u{3B1}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3C4}\u{3B7}\u{3BA}\u{3B5} ${e.date}`}})))()}var ni;function ri(){return(ri=t((()=>{ni={},ni={previous:`Previous`,next:`Next`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.dateRange}`,todayDate:e=>`Today, ${e.date}`,todayDateSelected:e=>`Today, ${e.date} selected`,dateSelected:e=>`${e.date} selected`,startRangeSelectionPrompt:`Click to start selecting date range`,finishRangeSelectionPrompt:`Click to finish selecting date range`,minimumDate:`First available date`,maximumDate:`Last available date`,dateRange:e=>`${e.startDate} to ${e.endDate}`}})))()}var ii;function ai(){return(ai=t((()=>{ii={},ii={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} seleccionado`,finishRangeSelectionPrompt:`Haga clic para terminar de seleccionar rango de fechas`,maximumDate:`Última fecha disponible`,minimumDate:`Primera fecha disponible`,next:`Siguiente`,previous:`Anterior`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo seleccionado: ${e.dateRange}`,startRangeSelectionPrompt:`Haga clic para comenzar a seleccionar un rango de fechas`,todayDate:e=>`Hoy, ${e.date}`,todayDateSelected:e=>`Hoy, ${e.date} seleccionado`}})))()}var oi;function si(){return(si=t((()=>{oi={},oi={dateRange:e=>`${e.startDate} kuni ${e.endDate}`,dateSelected:e=>`${e.date} valitud`,finishRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimise lõpetamiseks`,maximumDate:`Viimane saadaolev kuupäev`,minimumDate:`Esimene saadaolev kuupäev`,next:`Järgmine`,previous:`Eelmine`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.dateRange}`,startRangeSelectionPrompt:`Klõpsake kuupäevavahemiku valimiseks`,todayDate:e=>`T\xe4na, ${e.date}`,todayDateSelected:e=>`T\xe4na, ${e.date} valitud`}})))()}var ci;function li(){return(li=t((()=>{ci={},ci={dateRange:e=>`${e.startDate} \u{2013} ${e.endDate}`,dateSelected:e=>`${e.date} valittu`,finishRangeSelectionPrompt:`Lopeta päivämääräalueen valinta napsauttamalla tätä.`,maximumDate:`Viimeinen varattavissa oleva päivämäärä`,minimumDate:`Ensimmäinen varattavissa oleva päivämäärä`,next:`Seuraava`,previous:`Edellinen`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.dateRange}`,startRangeSelectionPrompt:`Aloita päivämääräalueen valinta napsauttamalla tätä.`,todayDate:e=>`T\xe4n\xe4\xe4n, ${e.date}`,todayDateSelected:e=>`T\xe4n\xe4\xe4n, ${e.date} valittu`}})))()}var ui;function di(){return(di=t((()=>{ui={},ui={dateRange:e=>`${e.startDate} \xe0 ${e.endDate}`,dateSelected:e=>`${e.date} s\xe9lectionn\xe9`,finishRangeSelectionPrompt:`Cliquer pour finir de sélectionner la plage de dates`,maximumDate:`Dernière date disponible`,minimumDate:`Première date disponible`,next:`Suivant`,previous:`Précédent`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.dateRange}`,startRangeSelectionPrompt:`Cliquer pour commencer à sélectionner la plage de dates`,todayDate:e=>`Aujourd'hui, ${e.date}`,todayDateSelected:e=>`Aujourd\u{2019}hui, ${e.date} s\xe9lectionn\xe9`}})))()}var fi;function pi(){return(pi=t((()=>{fi={},fi={dateRange:e=>`${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,dateSelected:e=>`${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`,finishRangeSelectionPrompt:`חץ כדי לסיים את בחירת טווח התאריכים`,maximumDate:`תאריך פנוי אחרון`,minimumDate:`תאריך פנוי ראשון`,next:`הבא`,previous:`הקודם`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.dateRange}`,startRangeSelectionPrompt:`לחץ כדי להתחיל בבחירת טווח התאריכים`,todayDate:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date}`,todayDateSelected:e=>`\u{5D4}\u{5D9}\u{5D5}\u{5DD}, ${e.date} \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var mi;function hi(){return(hi=t((()=>{mi={},mi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} odabran`,finishRangeSelectionPrompt:`Kliknite da dovršite raspon odabranih datuma`,maximumDate:`Posljednji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sljedeći`,previous:`Prethodni`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete raspon odabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, odabran ${e.date}`}})))()}var gi;function _i(){return(_i=t((()=>{gi={},gi={dateRange:e=>`${e.startDate}\u{2013}${e.endDate}`,dateSelected:e=>`${e.date} kiv\xe1lasztva`,finishRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének befejezéséhez`,maximumDate:`Utolsó elérhető dátum`,minimumDate:`Az első elérhető dátum`,next:`Következő`,previous:`Előző`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.dateRange}`,startRangeSelectionPrompt:`Kattintson a dátumtartomány kijelölésének indításához`,todayDate:e=>`Ma, ${e.date}`,todayDateSelected:e=>`Ma, ${e.date} kijel\xf6lve`}})))()}var vi;function yi(){return(yi=t((()=>{vi={},vi={dateRange:e=>`Da ${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selezionata`,finishRangeSelectionPrompt:`Fai clic per completare la selezione dell’intervallo di date`,maximumDate:`Ultima data disponibile`,minimumDate:`Prima data disponibile`,next:`Successivo`,previous:`Precedente`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: ${e.dateRange}`,startRangeSelectionPrompt:`Fai clic per selezionare l’intervallo di date`,todayDate:e=>`Oggi, ${e.date}`,todayDateSelected:e=>`Oggi, ${e.date} selezionata`}})))()}var bi;function xi(){return(xi=t((()=>{bi={},bi={dateRange:e=>`${e.startDate} \u{304B}\u{3089} ${e.endDate}`,dateSelected:e=>`${e.date} \u{3092}\u{9078}\u{629E}`,finishRangeSelectionPrompt:`クリックして日付範囲の選択を終了`,maximumDate:`最終利用可能日`,minimumDate:`最初の利用可能日`,next:`次へ`,previous:`前へ`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.dateRange}`,startRangeSelectionPrompt:`クリックして日付範囲の選択を開始`,todayDate:e=>`\u{672C}\u{65E5}\u{3001}${e.date}`,todayDateSelected:e=>`\u{672C}\u{65E5}\u{3001}${e.date} \u{3092}\u{9078}\u{629E}`}})))()}var Si;function Ci(){return(Ci=t((()=>{Si={},Si={dateRange:e=>`${e.startDate} ~ ${e.endDate}`,dateSelected:e=>`${e.date} \u{C120}\u{D0DD}\u{B428}`,finishRangeSelectionPrompt:`날짜 범위 선택을 완료하려면 클릭하십시오.`,maximumDate:`마지막으로 사용 가능한 일자`,minimumDate:`처음으로 사용 가능한 일자`,next:`다음`,previous:`이전`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.dateRange}`,startRangeSelectionPrompt:`날짜 범위 선택을 시작하려면 클릭하십시오.`,todayDate:e=>`\u{C624}\u{B298}, ${e.date}`,todayDateSelected:e=>`\u{C624}\u{B298}, ${e.date} \u{C120}\u{D0DD}\u{B428}`}})))()}var wi;function Ti(){return(Ti=t((()=>{wi={},wi={dateRange:e=>`Nuo ${e.startDate} iki ${e.endDate}`,dateSelected:e=>`Pasirinkta ${e.date}`,finishRangeSelectionPrompt:`Spustelėkite, kad baigtumėte pasirinkti datų intervalą`,maximumDate:`Paskutinė galima data`,minimumDate:`Pirmoji galima data`,next:`Paskesnis`,previous:`Ankstesnis`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: ${e.dateRange}`,startRangeSelectionPrompt:`Spustelėkite, kad pradėtumėte pasirinkti datų intervalą`,todayDate:e=>`\u{160}iandien, ${e.date}`,todayDateSelected:e=>`\u{160}iandien, pasirinkta ${e.date}`}})))()}var Ei;function Di(){return(Di=t((()=>{Ei={},Ei={dateRange:e=>`No ${e.startDate} l\u{12B}dz ${e.endDate}`,dateSelected:e=>`Atlas\u{12B}ts: ${e.date}`,finishRangeSelectionPrompt:`Noklikšķiniet, lai pabeigtu datumu diapazona atlasi`,maximumDate:`Pēdējais pieejamais datums`,minimumDate:`Pirmais pieejamais datums`,next:`Tālāk`,previous:`Atpakaļ`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: ${e.dateRange}`,startRangeSelectionPrompt:`Noklikšķiniet, lai sāktu datumu diapazona atlasi`,todayDate:e=>`\u{160}odien, ${e.date}`,todayDateSelected:e=>`Atlas\u{12B}ta \u{161}odiena, ${e.date}`}})))()}var Oi;function ki(){return(ki=t((()=>{Oi={},Oi={dateRange:e=>`${e.startDate} til ${e.endDate}`,dateSelected:e=>`${e.date} valgt`,finishRangeSelectionPrompt:`Klikk for å fullføre valg av datoområde`,maximumDate:`Siste tilgjengelige dato`,minimumDate:`Første tilgjengelige dato`,next:`Neste`,previous:`Forrige`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.dateRange}`,startRangeSelectionPrompt:`Klikk for å starte valg av datoområde`,todayDate:e=>`I dag, ${e.date}`,todayDateSelected:e=>`I dag, ${e.date} valgt`}})))()}var Ai;function ji(){return(ji=t((()=>{Ai={},Ai={dateRange:e=>`${e.startDate} tot ${e.endDate}`,dateSelected:e=>`${e.date} geselecteerd`,finishRangeSelectionPrompt:`Klik om de selectie van het datumbereik te voltooien`,maximumDate:`Laatste beschikbare datum`,minimumDate:`Eerste beschikbare datum`,next:`Volgende`,previous:`Vorige`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.dateRange}`,startRangeSelectionPrompt:`Klik om het datumbereik te selecteren`,todayDate:e=>`Vandaag, ${e.date}`,todayDateSelected:e=>`Vandaag, ${e.date} geselecteerd`}})))()}var Mi;function Ni(){return(Ni=t((()=>{Mi={},Mi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`Wybrano ${e.date}`,finishRangeSelectionPrompt:`Kliknij, aby zakończyć wybór zakresu dat`,maximumDate:`Ostatnia dostępna data`,minimumDate:`Pierwsza dostępna data`,next:`Dalej`,previous:`Wstecz`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknij, aby rozpocząć wybór zakresu dat`,todayDate:e=>`Dzisiaj, ${e.date}`,todayDateSelected:e=>`Dzisiaj wybrano ${e.date}`}})))()}var Pi;function Fi(){return(Fi=t((()=>{Pi={},Pi={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para concluir a seleção do intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para iniciar a seleção do intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var Ii;function Li(){return(Li=t((()=>{Ii={},Ii={dateRange:e=>`${e.startDate} a ${e.endDate}`,dateSelected:e=>`${e.date} selecionado`,finishRangeSelectionPrompt:`Clique para terminar de selecionar o intervalo de datas`,maximumDate:`Última data disponível`,minimumDate:`Primeira data disponível`,next:`Próximo`,previous:`Anterior`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.dateRange}`,startRangeSelectionPrompt:`Clique para começar a selecionar o intervalo de datas`,todayDate:e=>`Hoje, ${e.date}`,todayDateSelected:e=>`Hoje, ${e.date} selecionado`}})))()}var Ri;function zi(){return(zi=t((()=>{Ri={},Ri={dateRange:e=>`De la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,dateSelected:e=>`${e.date} selectat\u{103}`,finishRangeSelectionPrompt:`Apăsaţi pentru a finaliza selecţia razei pentru dată`,maximumDate:`Ultima dată disponibilă`,minimumDate:`Prima dată disponibilă`,next:`Următorul`,previous:`Înainte`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: ${e.dateRange}`,startRangeSelectionPrompt:`Apăsaţi pentru a începe selecţia razei pentru dată`,todayDate:e=>`Ast\u{103}zi, ${e.date}`,todayDateSelected:e=>`Azi, ${e.date} selectat\u{103}`}})))()}var Bi;function Vi(){return(Vi=t((()=>{Bi={},Bi={dateRange:e=>`\u{421} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,dateSelected:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Щелкните, чтобы завершить выбор диапазона дат`,maximumDate:`Последняя доступная дата`,minimumDate:`Первая доступная дата`,next:`Далее`,previous:`Назад`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Щелкните, чтобы начать выбор диапазона дат`,todayDate:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{435}\u{433}\u{43E}\u{434}\u{43D}\u{44F}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var Hi;function Ui(){return(Ui=t((()=>{Hi={},Hi={dateRange:e=>`Od ${e.startDate} do ${e.endDate}`,dateSelected:e=>`Vybrat\xfd d\xe1tum ${e.date}`,finishRangeSelectionPrompt:`Kliknutím dokončíte výber rozsahu dátumov`,maximumDate:`Posledný dostupný dátum`,minimumDate:`Prvý dostupný dátum`,next:`Nasledujúce`,previous:`Predchádzajúce`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknutím spustíte výber rozsahu dátumov`,todayDate:e=>`Dnes ${e.date}`,todayDateSelected:e=>`Vybrat\xfd dne\u{161}n\xfd d\xe1tum ${e.date}`}})))()}var Wi;function Gi(){return(Gi=t((()=>{Wi={},Wi={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izbrano`,finishRangeSelectionPrompt:`Kliknite za dokončanje izbire datumskega obsega`,maximumDate:`Zadnji razpoložljivi datum`,minimumDate:`Prvi razpoložljivi datum`,next:`Naprej`,previous:`Nazaj`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite za začetek izbire datumskega obsega`,todayDate:e=>`Danes, ${e.date}`,todayDateSelected:e=>`Danes, ${e.date} izbrano`}})))()}var Ki;function qi(){return(qi=t((()=>{Ki={},Ki={dateRange:e=>`${e.startDate} do ${e.endDate}`,dateSelected:e=>`${e.date} izabran`,finishRangeSelectionPrompt:`Kliknite da dovršite opseg izabranih datuma`,maximumDate:`Zadnji raspoloživi datum`,minimumDate:`Prvi raspoloživi datum`,next:`Sledeći`,previous:`Prethodni`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani period: ${e.dateRange}`,startRangeSelectionPrompt:`Kliknite da započnete opseg izabranih datuma`,todayDate:e=>`Danas, ${e.date}`,todayDateSelected:e=>`Danas, izabran ${e.date}`}})))()}var Ji;function Yi(){return(Yi=t((()=>{Ji={},Ji={dateRange:e=>`${e.startDate} till ${e.endDate}`,dateSelected:e=>`${e.date} har valts`,finishRangeSelectionPrompt:`Klicka för att avsluta val av datumintervall`,maximumDate:`Sista tillgängliga datum`,minimumDate:`Första tillgängliga datum`,next:`Nästa`,previous:`Föregående`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.dateRange}`,startRangeSelectionPrompt:`Klicka för att välja datumintervall`,todayDate:e=>`Idag, ${e.date}`,todayDateSelected:e=>`Idag, ${e.date} har valts`}})))()}var Xi;function Zi(){return(Zi=t((()=>{Xi={},Xi={dateRange:e=>`${e.startDate} - ${e.endDate}`,dateSelected:e=>`${e.date} se\xe7ildi`,finishRangeSelectionPrompt:`Tarih aralığı seçimini tamamlamak için tıklayın`,maximumDate:`Son müsait tarih`,minimumDate:`İlk müsait tarih`,next:`Sonraki`,previous:`Önceki`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.dateRange}`,startRangeSelectionPrompt:`Tarih aralığı seçimini başlatmak için tıklayın`,todayDate:e=>`Bug\xfcn, ${e.date}`,todayDateSelected:e=>`Bug\xfcn, ${e.date} se\xe7ildi`}})))()}var Qi;function $i(){return($i=t((()=>{Qi={},Qi={dateRange:e=>`${e.startDate} \u{2014} ${e.endDate}`,dateSelected:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`,finishRangeSelectionPrompt:`Натисніть, щоб завершити вибір діапазону дат`,maximumDate:`Остання доступна дата`,minimumDate:`Перша доступна дата`,next:`Наступний`,previous:`Попередній`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,startRangeSelectionPrompt:`Натисніть, щоб почати вибір діапазону дат`,todayDate:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, ${e.date}`,todayDateSelected:e=>`\u{421}\u{44C}\u{43E}\u{433}\u{43E}\u{434}\u{43D}\u{456}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E} ${e.date}`}})))()}var ea;function ta(){return(ta=t((()=>{ea={},ea={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9009}\u{62E9} ${e.date}`,finishRangeSelectionPrompt:`单击以完成选择日期范围`,maximumDate:`最后一个可用日期`,minimumDate:`第一个可用日期`,next:`下一页`,previous:`上一页`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`单击以开始选择日期范围`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9009}\u{62E9}\u{4ECA}\u{5929}\u{FF0C}\u{5373} ${e.date}`}})))()}var na;function ra(){return(ra=t((()=>{na={},na={dateRange:e=>`${e.startDate} \u{81F3} ${e.endDate}`,dateSelected:e=>`\u{5DF2}\u{9078}\u{53D6} ${e.date}`,finishRangeSelectionPrompt:`按一下以完成選取日期範圍`,maximumDate:`最後一個可用日期`,minimumDate:`第一個可用日期`,next:`下一頁`,previous:`上一頁`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.dateRange}`,startRangeSelectionPrompt:`按一下以開始選取日期範圍`,todayDate:e=>`\u{4ECA}\u{5929}\u{FF0C}${e.date}`,todayDateSelected:e=>`\u{5DF2}\u{9078}\u{53D6}\u{4ECA}\u{5929}\u{FF0C}${e.date}`}})))()}var ia;function aa(){return(aa=t((()=>{Gr(),qr(),Yr(),Zr(),$r(),ti(),ri(),ai(),si(),li(),di(),pi(),hi(),_i(),yi(),xi(),Ci(),Ti(),Di(),ki(),ji(),Ni(),Fi(),Li(),zi(),Vi(),Ui(),Gi(),qi(),Yi(),Zi(),$i(),ta(),ra(),ia={},ia={"ar-AE":Wr,"bg-BG":Kr,"cs-CZ":Jr,"da-DK":Xr,"de-DE":Qr,"el-GR":ei,"en-US":ni,"es-ES":ii,"et-EE":oi,"fi-FI":ci,"fr-FR":ui,"he-IL":fi,"hr-HR":mi,"hu-HU":gi,"it-IT":vi,"ja-JP":bi,"ko-KR":Si,"lt-LT":wi,"lv-LV":Ei,"nb-NO":Oi,"nl-NL":Ai,"pl-PL":Mi,"pt-BR":Pi,"pt-PT":Ii,"ro-RO":Ri,"ru-RU":Bi,"sk-SK":Hi,"sl-SI":Wi,"sr-SP":Ki,"sv-SE":Ji,"tr-TR":Xi,"uk-UA":Qi,"zh-CN":ea,"zh-TW":na}})))()}function oa(e,t){let n=(0,sa.useRef)(null);return e&&n.current&&t(e,n.current)&&(e=n.current),n.current=e,e}var sa;function ca(){return(ca=t((()=>{sa=r()})))()}function la(e,t){return e-t*Math.floor(e/t)}function ua(e,t,n,r){t=fa(e,t);let i=t-1,a=-2;return n<=2?a=0:da(t)&&(a=-1),1721425+365*i+Math.floor(i/4)-Math.floor(i/100)+Math.floor(i/400)+Math.floor((367*n-362)/12+a+r)}function da(e){return e%4==0&&(e%100!=0||e%400==0)}function fa(e,t){return e===`BC`?1-t:t}function pa(e){let t=`AD`;return e<=0&&(t=`BC`,e=1-e),[t,e]}var ma,ha,ga;function _a(){return(_a=t((()=>{as(),ma=1721426,ha={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]},ga=class{fromJulianDay(e){let t=e,n=t-ma,r=Math.floor(n/146097),i=la(n,146097),a=Math.floor(i/36524),o=la(i,36524),s=Math.floor(o/1461),c=la(o,1461),l=Math.floor(c/365),[u,d]=pa(r*400+a*100+s*4+l+ +(a!==4&&l!==4)),f=t-ua(u,d,1,1),p=2;t<ua(u,d,3,1)?p=0:da(d)&&(p=1);let m=Math.floor(((f+p)*12+373)/367),h=t-ua(u,d,m,1)+1;return new ts(u,d,m,h)}toJulianDay(e){return ua(e.era,e.year,e.month,e.day)}getDaysInMonth(e){return ha[da(e.year)?`leapyear`:`standard`][e.month-1]}getMonthsInYear(e){return 12}getDaysInYear(e){return da(e.year)?366:365}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getYearsInEra(e){return 9999}getEras(){return[`BC`,`AD`]}isInverseEra(e){return e.era===`BC`}balanceDate(e){e.year<=0&&(e.era=e.era===`BC`?`AD`:`BC`,e.year=1-e.year)}constructor(){this.identifier=`gregory`}}})))()}var va;function ya(){return(ya=t((()=>{va={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1}})))()}function ba(e,t){return t=so(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function xa(e,t){return t=so(t,e.calendar),e=Na(e),t=Na(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function Sa(e,t){return Ca(e.calendar,t.calendar)&&ba(e,t)}function Ca(e,t){return e.isEqual?.(t)??t.isEqual?.(e)??e.identifier===t.identifier}function wa(e,t){return ba(e,Da(t))}function Ta(e,t,n){let r=e.calendar.toJulianDay(e),i=n?Ua[n]:za(t),a=Math.ceil(r+1-i)%7;return a<0&&(a+=7),a}function Ea(e){return ro(Date.now(),e)}function Da(e){return io(Ea(e))}function Oa(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function ka(e,t){return Aa(e)-Aa(t)}function Aa(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}function ja(){return Wa??=new Intl.DateTimeFormat().resolvedOptions().timeZone,Wa}function Ma(){return Ga}function Na(e){return e.subtract({days:e.day-1})}function Pa(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}function Fa(e){return Na(e.subtract({months:e.month-1}))}function Ia(e,t,n){let r=Ta(e,t,n);return e.subtract({days:r})}function La(e,t,n){return Ia(e,t,n).add({days:6})}function Ra(e){if(Intl.Locale){let t=Ka.get(e);return t||(t=new Intl.Locale(e).maximize().region,t&&Ka.set(e,t)),t}let t=e.split(`-`)[1];return t===`u`?void 0:t}function za(e){let t=qa.get(e);if(!t){if(Intl.Locale){let n=new Intl.Locale(e);if(`getWeekInfo`in n&&(t=n.getWeekInfo(),t))return qa.set(e,t),t.firstDay}let n=Ra(e);if(e.includes(`-fw-`)){let n=e.split(`-fw-`)[1].split(`-`)[0];t=n===`mon`?{firstDay:1}:n===`tue`?{firstDay:2}:n===`wed`?{firstDay:3}:n===`thu`?{firstDay:4}:n===`fri`?{firstDay:5}:n===`sat`?{firstDay:6}:{firstDay:0}}else t=e.includes(`-ca-iso8601`)?{firstDay:1}:{firstDay:n&&va[n]||0};qa.set(e,t)}return t.firstDay}function Ba(e,t,n){let r=e.calendar.getDaysInMonth(e);return Math.ceil((Ta(Na(e),t,n)+r)/7)}function Va(e,t){return e&&t?e.compare(t)<=0?e:t:e||t}function Ha(e,t){return e&&t?e.compare(t)>=0?e:t:e||t}var Ua,Wa,Ga,Ka,qa;function Ja(){return(Ja=t((()=>{mo(),ya(),Ua={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},Wa=null,Ga=!1,Ka=new Map,qa=new Map})))()}function Ya(e){return e=so(e,new ga),Xa(fa(e.era,e.year),e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function Xa(e,t,n,r,i,a,o){let s=new Date;return s.setUTCHours(r,i,a,o),s.setUTCFullYear(e,t-1,n),s.getTime()}function Za(e,t){if(t===`UTC`)return 0;if(e>0&&t===ja()&&!Ma())return new Date(e).getTimezoneOffset()*-6e4;let{year:n,month:r,day:i,hour:a,minute:o,second:s}=Qa(e,t);return Xa(n,r,i,a,o,s,0)-Math.floor(e/1e3)*1e3}function Qa(e,t){let n=fo.get(t);n||(n=new Intl.DateTimeFormat(`en-US`,{timeZone:t,hour12:!1,era:`short`,year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`numeric`,second:`numeric`}),fo.set(t,n));let r=n.formatToParts(new Date(e)),i={};for(let e of r)e.type!==`literal`&&(i[e.type]=e.value);return{year:i.era===`BC`||i.era===`B`?-i.year+1:+i.year,month:+i.month,day:+i.day,hour:i.hour===`24`?0:+i.hour,minute:+i.minute,second:+i.second}}function $a(e,t,n,r){return(n===r?[n]:[n,r]).filter(n=>eo(e,t,n))}function eo(e,t,n){let r=Qa(n,t);return e.year===r.year&&e.month===r.month&&e.day===r.day&&e.hour===r.hour&&e.minute===r.minute&&e.second===r.second}function to(e,t,n=`compatible`){let r=ao(e);if(t===`UTC`)return Ya(r);if(t===ja()&&n===`compatible`&&!Ma()){r=so(r,new ga);let e=new Date,t=fa(r.era,r.year);return e.setFullYear(t,r.month-1,r.day),e.setHours(r.hour,r.minute,r.second,r.millisecond),e.getTime()}let i=Ya(r),a=Za(i-po,t),o=Za(i+po,t),s=$a(r,t,i-a,i-o);if(s.length===1)return s[0];if(s.length>1)switch(n){case`compatible`:case`earlier`:return s[0];case`later`:return s[s.length-1];case`reject`:throw RangeError(`Multiple possible absolute times found`)}switch(n){case`earlier`:return Math.min(i-a,i-o);case`compatible`:case`later`:return Math.max(i-a,i-o);case`reject`:throw RangeError(`No such absolute time found`)}}function no(e,t,n=`compatible`){return new Date(to(e,t,n))}function ro(e,t){let n=Za(e,t),r=new Date(e+n),i=r.getUTCFullYear(),a=r.getUTCMonth()+1,o=r.getUTCDate(),s=r.getUTCHours(),c=r.getUTCMinutes(),l=r.getUTCSeconds(),u=r.getUTCMilliseconds();return new is(i<1?`BC`:`AD`,i<1?-i+1:i,a,o,t,n,s,c,l,u)}function io(e){return new ts(e.calendar,e.era,e.year,e.month,e.day)}function ao(e,t){let n=0,r=0,i=0,a=0;if(`timeZone`in e)({hour:n,minute:r,second:i,millisecond:a}=e);else if(`hour`in e&&!t)return e;return t&&({hour:n,minute:r,second:i,millisecond:a}=t),new rs(e.calendar,e.era,e.year,e.month,e.day,n,r,i,a)}function oo(e){return new ns(e.hour,e.minute,e.second,e.millisecond)}function so(e,t){if(Ca(e.calendar,t))return e;let n=t.fromJulianDay(e.calendar.toJulianDay(e)),r=e.copy();return r.calendar=t,r.era=n.era,r.year=n.year,r.month=n.month,r.day=n.day,bo(r),r}function co(e,t,n){return e instanceof is?e.timeZone===t?e:uo(e,t):ro(to(e,t,n),t)}function lo(e){let t=Ya(e)-e.offset;return new Date(t)}function uo(e,t){return so(ro(Ya(e)-e.offset,t),e.calendar)}var fo,po;function mo(){return(mo=t((()=>{as(),Ro(),_a(),Ja(),fo=new Map,po=864e5})))()}function ho(e,t){let n=e.copy(),r=`hour`in n?Oo(n,t):0;go(n,t.years||0),n.calendar.balanceYearMonth&&n.calendar.balanceYearMonth(n,e),n.month+=t.months||0,_o(n),yo(n),n.day+=(t.weeks||0)*7,n.day+=t.days||0,n.day+=r,vo(n),n.calendar.balanceDate&&n.calendar.balanceDate(n),n.year<1&&(n.year=1,n.month=1,n.day=1);let i=n.calendar.getYearsInEra(n);if(n.year>i){let e=n.calendar.isInverseEra?.(n);n.year=i,n.month=e?1:n.calendar.getMonthsInYear(n),n.day=e?1:n.calendar.getDaysInMonth(n)}n.month<1&&(n.month=1,n.day=1);let a=n.calendar.getMonthsInYear(n);return n.month>a&&(n.month=a,n.day=n.calendar.getDaysInMonth(n)),n.day=Math.max(1,Math.min(n.calendar.getDaysInMonth(n),n.day)),n}function go(e,t){e.calendar.isInverseEra?.(e)&&(t=-t),e.year+=t}function _o(e){for(;e.month<1;)go(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,go(e,1)}function vo(e){for(;e.day<1;)e.month--,_o(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,_o(e)}function yo(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function bo(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),yo(e)}function xo(e){let t={};for(let n in e)typeof e[n]==`number`&&(t[n]=-e[n]);return t}function So(e,t){return ho(e,xo(t))}function Co(e,t){let n=e.copy();return t.era!=null&&(n.era=t.era),t.year!=null&&(n.year=t.year),t.month!=null&&(n.month=t.month),t.day!=null&&(n.day=t.day),bo(n),n}function wo(e,t){let n=e.copy();return t.hour!=null&&(n.hour=t.hour),t.minute!=null&&(n.minute=t.minute),t.second!=null&&(n.second=t.second),t.millisecond!=null&&(n.millisecond=t.millisecond),Eo(n),n}function To(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=Do(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=Do(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=Do(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=Do(e.hour,24),t}function Eo(e){e.millisecond=Math.max(0,Math.min(e.millisecond,999)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function Do(e,t){let n=e%t;return n<0&&(n+=t),n}function Oo(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,To(e)}function ko(e,t){let n=e.copy();return Oo(n,t),n}function Ao(e,t){return ko(e,xo(t))}function jo(e,t,n,r){let i=e.copy();switch(t){case`era`:{let t=e.calendar.getEras(),a=t.indexOf(e.era);if(a<0)throw Error(`Invalid era: `+e.era);a=q(a,n,0,t.length-1,r?.round),i.era=t[a],bo(i);break}case`year`:i.calendar.isInverseEra?.(i)&&(n=-n),i.year=q(e.year,n,-1/0,9999,r?.round),i.year===-1/0&&(i.year=1),i.calendar.balanceYearMonth&&i.calendar.balanceYearMonth(i,e);break;case`month`:i.month=q(e.month,n,1,e.calendar.getMonthsInYear(e),r?.round);break;case`day`:i.day=q(e.day,n,1,e.calendar.getDaysInMonth(e),r?.round);break;default:throw Error(`Unsupported field `+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(i),bo(i),i}function Mo(e,t,n,r){let i=e.copy();switch(t){case`hour`:{let t=e.hour,a=0,o=23;if(r?.hourCycle===12){let e=t>=12;a=e?12:0,o=e?23:11}i.hour=q(t,n,a,o,r?.round);break}case`minute`:i.minute=q(e.minute,n,0,59,r?.round);break;case`second`:i.second=q(e.second,n,0,59,r?.round);break;case`millisecond`:i.millisecond=q(e.millisecond,n,0,999,r?.round);break;default:throw Error(`Unsupported field `+t)}return i}function q(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function No(e,t){let n;return n=t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0?to(ho(ao(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days}),e.timeZone):Ya(e)-e.offset,n+=t.milliseconds||0,n+=(t.seconds||0)*1e3,n+=(t.minutes||0)*6e4,n+=(t.hours||0)*36e5,so(ro(n,e.timeZone),e.calendar)}function Po(e,t){return No(e,xo(t))}function Fo(e,t,n,r){switch(t){case`hour`:{let t=0,i=23;if(r?.hourCycle===12){let n=e.hour>=12;t=n?12:0,i=n?23:11}let a=ao(e),o=so(wo(a,{hour:t}),new ga),s=[to(o,e.timeZone,`earlier`),to(o,e.timeZone,`later`)].filter(t=>ro(t,e.timeZone).day===o.day)[0],c=so(wo(a,{hour:i}),new ga),l=[to(c,e.timeZone,`earlier`),to(c,e.timeZone,`later`)].filter(t=>ro(t,e.timeZone).day===c.day).pop(),u=Ya(e)-e.offset,d=Math.floor(u/Lo),f=u%Lo;return u=q(d,n,Math.floor(s/Lo),Math.floor(l/Lo),r?.round)*Lo+f,so(ro(u,e.timeZone),e.calendar)}case`minute`:case`second`:case`millisecond`:return Mo(e,t,n,r);case`era`:case`year`:case`month`:case`day`:return so(ro(to(jo(ao(e),t,n,r),e.timeZone),e.timeZone),e.calendar);default:throw Error(`Unsupported field `+t)}}function Io(e,t,n){let r=ao(e),i=wo(Co(r,t),t);return i.compare(r)===0?e:so(ro(to(i,e.timeZone,n),e.timeZone),e.calendar)}var Lo;function Ro(){return(Ro=t((()=>{mo(),_a(),Lo=36e5})))()}function zo(e){let t=e.match(Jo);if(!t)throw Error(`Invalid ISO 8601 time string: `+e);return new ns(Ho(t[1],0,23),t[2]?Ho(t[2],0,59):0,t[3]?Ho(t[3],0,59):0,t[4]?Ho(t[4],0,1/0)*1e3:0)}function Bo(e){let t=e.match(Yo);if(!t)throw Zo.test(e)?Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date string: `+e);let n=new ts(Ho(t[1],0,9999),Ho(t[2],1,12),1);return n.day=Ho(t[3],1,n.calendar.getDaysInMonth(n)),n}function Vo(e){let t=e.match(Xo);if(!t)throw Zo.test(e)?Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`):Error(`Invalid ISO 8601 date time string: `+e);let n=Ho(t[1],-9999,9999),r=new rs(n<1?`BC`:`AD`,n<1?-n+1:n,Ho(t[2],1,12),1,t[4]?Ho(t[4],0,23):0,t[5]?Ho(t[5],0,59):0,t[6]?Ho(t[6],0,59):0,t[7]?Ho(t[7],0,1/0)*1e3:0);return r.day=Ho(t[3],0,r.calendar.getDaysInMonth(r)),r}function Ho(e,t,n){let r=Number(e);if(r<t||r>n)throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);return r}function Uo(e){return`${String(e.hour).padStart(2,`0`)}:${String(e.minute).padStart(2,`0`)}:${String(e.second).padStart(2,`0`)}${e.millisecond?String(e.millisecond/1e3).slice(1):``}`}function Wo(e){let t=so(e,new ga),n;return n=t.era===`BC`?t.year===1?`0000`:`-`+String(Math.abs(1-t.year)).padStart(6,`00`):String(t.year).padStart(4,`0`),`${n}-${String(t.month).padStart(2,`0`)}-${String(t.day).padStart(2,`0`)}`}function Go(e){return`${Wo(e)}T${Uo(e)}`}function Ko(e){let t=Math.sign(e)<0?`-`:`+`;e=Math.abs(e);let n=Math.floor(e/36e5),r=Math.floor(e%36e5/6e4),i=Math.floor(e%36e5%6e4/1e3),a=`${t}${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`;return i!==0&&(a+=`:${String(i).padStart(2,`0`)}`),a}function qo(e){return`${Go(e)}${Ko(e.offset)}[${e.timeZone}]`}var Jo,Yo,Xo,Zo,Qo;function $o(){return($o=t((()=>{as(),mo(),_a(),Jo=/^(\d{2})(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Yo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,Xo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Zo=/^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/,Qo=[`hours`,`minutes`,`seconds`],[...Qo]})))()}function es(e){let t=typeof e[0]==`object`?e.shift():new ga,n;if(typeof e[0]==`string`)n=e.shift();else{let e=t.getEras();n=e[e.length-1]}let r=e.shift(),i=e.shift(),a=e.shift();return[t,n,r,i,a]}var ts,ns,rs,is;function as(){return(as=t((()=>{Ro(),Ja(),$o(),_a(),mo(),ts=class e{constructor(...e){let[t,n,r,i,a]=es(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day):new e(this.calendar,this.year,this.month,this.day)}add(e){return ho(this,e)}subtract(e){return So(this,e)}set(e){return Co(this,e)}cycle(e,t,n){return jo(this,e,t,n)}toDate(e){return no(this,e)}toString(){return Wo(this)}compare(e){return Oa(this,e)}},ns=class e{constructor(e=0,t=0,n=0,r=0){this.hour=e,this.minute=t,this.second=n,this.millisecond=r,Eo(this)}copy(){return new e(this.hour,this.minute,this.second,this.millisecond)}add(e){return ko(this,e)}subtract(e){return Ao(this,e)}set(e){return wo(this,e)}cycle(e,t,n){return Mo(this,e,t,n)}toString(){return Uo(this)}compare(e){return ka(this,e)}},rs=class e{constructor(...e){let[t,n,r,i,a]=es(e);this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(e){return ho(this,e)}subtract(e){return So(this,e)}set(e){return Co(wo(this,e),e)}cycle(e,t,n){switch(e){case`era`:case`year`:case`month`:case`day`:return jo(this,e,t,n);default:return Mo(this,e,t,n)}}toDate(e,t){return no(this,e,t)}toString(){return Go(this)}compare(e){let t=Oa(this,e);return t===0?ka(this,ao(e)):t}},is=class e{constructor(...e){let[t,n,r,i,a]=es(e),o=e.shift(),s=e.shift();this.calendar=t,this.era=n,this.year=r,this.month=i,this.day=a,this.timeZone=o,this.offset=s,this.hour=e.shift()||0,this.minute=e.shift()||0,this.second=e.shift()||0,this.millisecond=e.shift()||0,bo(this)}copy(){return this.era?new e(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new e(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(e){return No(this,e)}subtract(e){return Po(this,e)}set(e,t){return Io(this,e,t)}cycle(e,t,n){return Fo(this,e,t,n)}toDate(){return lo(this)}toString(){return qo(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(e){return this.toDate().getTime()-co(e,this.timeZone).toDate().getTime()}}})))()}function os(e){let t=ls.findIndex(([t,n,r])=>e.year<t||e.year===t&&e.month<n||e.year===t&&e.month===n&&e.day<r);return t===-1?ls.length-1:t===0?0:t-1}function ss(e){let t=ds[fs.indexOf(e.era)];if(!t)throw Error(`Unknown era: `+e.era);return new ts(e.year+t,e.month,e.day)}function cs(e){if(e.year===1){let t=fs.indexOf(e.era);return ls[t]}}var ls,us,ds,fs,ps;function ms(){return(ms=t((()=>{as(),_a(),ls=[[1868,9,8],[1912,7,30],[1926,12,25],[1989,1,8],[2019,5,1]],us=[[1912,7,29],[1926,12,24],[1989,1,7],[2019,4,30]],ds=[1867,1911,1925,1988,2018],fs=[`meiji`,`taisho`,`showa`,`heisei`,`reiwa`],ps=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=os(t);return new ts(this,fs[n],t.year-ds[n],t.month,t.day)}toJulianDay(e){return super.toJulianDay(ss(e))}balanceDate(e){let t=ss(e),n=os(t);fs[n]!==e.era&&(e.era=fs[n],e.year=t.year-ds[n]),this.constrainDate(e)}constrainDate(e){let t=fs.indexOf(e.era),n=us[t];if(n!=null){let[r,i,a]=n,o=r-ds[t];e.year=Math.max(1,Math.min(o,e.year)),e.year===o&&(e.month=Math.min(i,e.month),e.month===i&&(e.day=Math.min(a,e.day)))}if(e.year===1&&t>=0){let[,n,r]=ls[t];e.month=Math.max(n,e.month),e.month===n&&(e.day=Math.max(r,e.day))}}getEras(){return fs}getYearsInEra(e){let t=fs.indexOf(e.era),n=ls[t],r=ls[t+1];if(r==null)return 9999-n[0]+1;let i=r[0]-n[0];return(e.month<r[1]||e.month===r[1]&&e.day<r[2])&&i++,i}getDaysInMonth(e){return super.getDaysInMonth(ss(e))}getMinimumMonthInYear(e){let t=cs(e);return t?t[1]:1}getMinimumDayInMonth(e){let t=cs(e);return t&&e.month===t[1]?t[2]:1}constructor(...e){super(...e),this.identifier=`japanese`}}})))()}function hs(e){let[t,n]=pa(e.year+gs);return new ts(t,n,e.month,e.day)}var gs,_s;function vs(){return(vs=t((()=>{as(),_a(),gs=-543,_s=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=fa(t.era,t.year);return new ts(this,n-gs,t.month,t.day)}toJulianDay(e){return super.toJulianDay(hs(e))}getEras(){return[`BE`]}getDaysInMonth(e){return super.getDaysInMonth(hs(e))}balanceDate(){}constructor(...e){super(...e),this.identifier=`buddhist`}}})))()}function ys(e){return e.era===`minguo`?e.year+Ss:1-e.year+Ss}function bs(e){let t=e-Ss;return t>0?[`minguo`,t]:[`before_minguo`,1-t]}function xs(e){let[t,n]=pa(ys(e));return new ts(t,n,e.month,e.day)}var Ss,Cs;function ws(){return(ws=t((()=>{as(),_a(),Ss=1911,Cs=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),[n,r]=bs(fa(t.era,t.year));return new ts(this,n,r,t.month,t.day)}toJulianDay(e){return super.toJulianDay(xs(e))}getEras(){return[`before_minguo`,`minguo`]}balanceDate(e){let[t,n]=bs(ys(e));e.era=t,e.year=n}isInverseEra(e){return e.era===`before_minguo`}getDaysInMonth(e){return super.getDaysInMonth(xs(e))}getYearsInEra(e){return e.era===`before_minguo`?9999:8088}constructor(...e){super(...e),this.identifier=`roc`}}})))()}var Ts,Es,Ds;function Os(){return(Os=t((()=>{as(),Ts=1948320,Es=[0,31,62,93,124,155,186,216,246,276,306,336],Ds=class{fromJulianDay(e){let t=e-Ts,n=1+Math.floor((33*t+3)/12053),r=t-(365*(n-1)+Math.floor((8*n+21)/33)),i=Math.floor(r<216?r/31:(r-6)/30),a=r-Es[i]+1;return new ts(this,n,i+1,a)}toJulianDay(e){let t=1948319+365*(e.year-1)+Math.floor((8*e.year+21)/33);return t+=Es[e.month-1],t+=e.day,t}getMonthsInYear(){return 12}getDaysInMonth(e){return e.month<=6?31:e.month<=11||la(25*e.year+11,33)<8?30:29}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 31}getEras(){return[`AP`]}getYearsInEra(){return 9377}constructor(){this.identifier=`persian`}}})))()}var ks,As,js;function Ms(){return(Ms=t((()=>{as(),_a(),ks=78,As=80,js=class extends ga{fromJulianDay(e){let t=super.fromJulianDay(e),n=t.year-ks,r=e-ua(t.era,t.year,1,1),i;r<As?(n--,i=da(t.year-1)?31:30,r+=i+155+90+10):(i=da(t.year)?31:30,r-=As);let a,o;if(r<i)a=1,o=r+1;else{let e=r-i;e<155?(a=Math.floor(e/31)+2,o=e%31+1):(e-=155,a=Math.floor(e/30)+7,o=e%30+1)}return new ts(this,n,a,o)}toJulianDay(e){let[t,n]=pa(e.year+ks),r,i;return da(n)?(r=31,i=ua(t,n,3,21)):(r=30,i=ua(t,n,3,22)),e.month===1?i+e.day-1:(i+=r+Math.min(e.month-2,5)*31,e.month>=8&&(i+=(e.month-7)*30),i+=e.day-1,i)}getDaysInMonth(e){return e.month===1&&da(e.year+ks)||e.month>=2&&e.month<=6?31:30}getYearsInEra(){return 9919}getEras(){return[`saka`]}balanceDate(){}constructor(...e){super(...e),this.identifier=`indian`}}})))()}function Ns(e,t,n,r){return r+Math.ceil(29.5*(n-1))+(t-1)*354+Math.floor((3+11*t)/30)+e-1}function Ps(e,t,n){let r=Math.floor((30*(n-t)+10646)/10631),i=Math.min(12,Math.ceil((n-(29+Ns(t,r,1,1)))/29.5)+1),a=n-Ns(t,r,i,1)+1;return new ts(e,r,i,a)}function Fs(e){return(14+11*e)%30<11}function Is(e){return Ws+Ys[e-Hs]}function Ls(e,t){let n=e-Hs,r=1<<11-(t-1);return(Js[n]&r)===0?29:30}function Rs(e,t){let n=Is(e);for(let r=1;r<t;r++)n+=Ls(e,r);return n}function zs(e){return Ys[e+1-Hs]-Ys[e-Hs]}var Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs;function Zs(){return(Zs=t((()=>{as(),Bs=1948440,Vs=1948439,Hs=1300,Us=1600,Ws=460322,Gs=class{fromJulianDay(e){return Ps(this,Bs,e)}toJulianDay(e){return Ns(Bs,e.year,e.month,e.day)}getDaysInMonth(e){let t=29+e.month%2;return e.month===12&&Fs(e.year)&&t++,t}getMonthsInYear(){return 12}getDaysInYear(e){return Fs(e.year)?355:354}getMaximumMonthsInYear(){return 12}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9665}getEras(){return[`AH`]}constructor(){this.identifier=`islamic-civil`}},Ks=class extends Gs{fromJulianDay(e){return Ps(this,Vs,e)}toJulianDay(e){return Ns(Vs,e.year,e.month,e.day)}constructor(...e){super(...e),this.identifier=`islamic-tbla`}},qs=`qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=`,Xs=class extends Gs{constructor(){if(super(),this.identifier=`islamic-umalqura`,Js||=new Uint16Array(Uint8Array.from(atob(qs),e=>e.charCodeAt(0)).buffer),!Ys){Ys=new Uint32Array(301);let e=0;for(let t=Hs;t<=Us;t++){Ys[t-Hs]=e;for(let n=1;n<=12;n++)e+=Ls(t,n)}}}fromJulianDay(e){let t=e-Bs,n=Is(Hs),r=Is(Us);if(t<n||t>r)return super.fromJulianDay(e);{let e=1299,n=1,r=1;for(;r>0;){e++,r=t-Is(e)+1;let i=zs(e);if(r===i){n=12;break}if(r<i){let t=Ls(e,n);for(n=1;r>t;)r-=t,n++,t=Ls(e,n);break}}return new ts(this,e,n,t-Rs(e,n)+1)}}toJulianDay(e){return e.year<Hs||e.year>Us?super.toJulianDay(e):Bs+Rs(e.year,e.month)+(e.day-1)}getDaysInMonth(e){return e.year<Hs||e.year>Us?super.getDaysInMonth(e):Ls(e.year,e.month)}getDaysInYear(e){return e.year<Hs||e.year>Us?super.getDaysInYear(e):zs(e.year)}}})))()}function Qs(e){return la(e*7+1,19)<7}function $s(e){let t=Math.floor((235*e-234)/19),n=12084+13753*t,r=t*29+Math.floor(n/25920);return la(3*(r+1),7)<3&&(r+=1),r}function ec(e){let t=$s(e-1),n=$s(e);return $s(e+1)-n===356?2:+(n-t===382)}function tc(e){return $s(e)+ec(e)}function nc(e){return tc(e+1)-tc(e)}function rc(e){let t=nc(e);switch(t>380&&(t-=30),t){case 353:return 0;case 354:return 1;case 355:return 2}}function ic(e,t){if(t>=6&&!Qs(e)&&t++,t===4||t===7||t===9||t===11||t===13)return 29;let n=rc(e);return t===2?n===2?30:29:t===3?n===0?29:30:t===6?Qs(e)?30:0:30}var ac,oc,sc,cc;function lc(){return(lc=t((()=>{as(),ac=347997,oc=25920,sc=765433,cc=class{fromJulianDay(e){let t=e-ac,n=t*oc/sc,r=Math.floor((19*n+234)/235)+1,i=tc(r),a=Math.floor(t-i);for(;a<1;)r--,i=tc(r),a=Math.floor(t-i);let o=1,s=0;for(;s<a;)s+=ic(r,o),o++;o--,s-=ic(r,o);let c=a-s;return new ts(this,r,o,c)}toJulianDay(e){let t=tc(e.year);for(let n=1;n<e.month;n++)t+=ic(e.year,n);return t+e.day+ac}getDaysInMonth(e){return ic(e.year,e.month)}getMonthsInYear(e){return Qs(e.year)?13:12}getDaysInYear(e){return nc(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(){return 9999}getEras(){return[`AM`]}balanceYearMonth(e,t){t.year!==e.year&&(Qs(t.year)&&!Qs(e.year)&&t.month>6?e.month--:!Qs(t.year)&&Qs(e.year)&&t.month>6&&e.month++)}constructor(){this.identifier=`hebrew`}}})))()}function uc(e,t,n,r){return e+365*t+Math.floor(t/4)+30*(n-1)+r-1}function dc(e,t){let n=Math.floor(4*(t-e)/1461),r=1+Math.floor((t-uc(e,n,1,1))/30);return[n,r,t+1-uc(e,n,r,1)]}function fc(e){return Math.floor(e%4/3)}function pc(e,t){return t%13==0?fc(e)+5:30}var mc,hc,gc,_c,vc,yc;function bc(){return(bc=t((()=>{as(),mc=1723856,hc=1824665,gc=5500,_c=class{fromJulianDay(e){let[t,n,r]=dc(mc,e),i=`AM`;return t<=0&&(i=`AA`,t+=gc),new ts(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`AA`&&(t-=gc),uc(mc,t,e.month,e.day)}getDaysInMonth(e){return pc(e.year,e.month)}getMonthsInYear(){return 13}getDaysInYear(e){return 365+fc(e.year)}getMaximumMonthsInYear(){return 13}getMaximumDaysInMonth(){return 30}getYearsInEra(e){return e.era===`AA`?9999:9991}getEras(){return[`AA`,`AM`]}constructor(){this.identifier=`ethiopic`}},vc=class extends _c{fromJulianDay(e){let[t,n,r]=dc(mc,e);return t+=gc,new ts(this,`AA`,t,n,r)}getEras(){return[`AA`]}getYearsInEra(){return 9999}constructor(...e){super(...e),this.identifier=`ethioaa`}},yc=class extends _c{fromJulianDay(e){let[t,n,r]=dc(hc,e),i=`CE`;return t<=0&&(i=`BCE`,t=1-t),new ts(this,i,t,n,r)}toJulianDay(e){let t=e.year;return e.era===`BCE`&&(t=1-t),uc(hc,t,e.month,e.day)}getDaysInMonth(e){let t=e.year;return e.era===`BCE`&&(t=1-t),pc(t,e.month)}isInverseEra(e){return e.era===`BCE`}balanceDate(e){e.year<=0&&(e.era=e.era===`BCE`?`CE`:`BCE`,e.year=1-e.year)}getEras(){return[`BCE`,`CE`]}getYearsInEra(e){return e.era===`BCE`?9999:9715}constructor(...e){super(...e),this.identifier=`coptic`}}})))()}function xc(e){switch(e){case`buddhist`:return new _s;case`ethiopic`:return new _c;case`ethioaa`:return new vc;case`coptic`:return new yc;case`hebrew`:return new cc;case`indian`:return new js;case`islamic-civil`:return new Gs;case`islamic-tbla`:return new Ks;case`islamic-umalqura`:return new Xs;case`japanese`:return new ps;case`persian`:return new Ds;case`roc`:return new Cs;default:return new ga}}function Sc(){return(Sc=t((()=>{vs(),bc(),_a(),lc(),Ms(),Zs(),ms(),Os(),ws()})))()}function Cc(e,t={}){if(typeof t.hour12==`boolean`&&wc()){t={...t};let n=kc[String(t.hour12)][e.split(`-`)[0]],r=t.hour12?`h12`:`h23`;t.hourCycle=n??r,delete t.hour12}let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(Dc.has(n))return Dc.get(n);let r=new Intl.DateTimeFormat(e,t);return Dc.set(n,r),r}function wc(){return Ac??=new Intl.DateTimeFormat(`en-US`,{hour:`numeric`,hour12:!1}).format(new Date(2020,2,3,0))===`24`,Ac}function Tc(){return jc??=new Intl.DateTimeFormat(`fr`,{hour:`numeric`,hour12:!1}).resolvedOptions().hourCycle===`h12`,jc}function Ec(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,``),e+=(e.includes(`-u-`)?``:`-u`)+`-nu-latn`;let n=Cc(e,{...t,timeZone:void 0}),r=parseInt(n.formatToParts(new Date(2020,2,3,0)).find(e=>e.type===`hour`).value,10),i=parseInt(n.formatToParts(new Date(2020,2,3,23)).find(e=>e.type===`hour`).value,10);if(r===0&&i===23)return`h23`;if(r===24&&i===23)return`h24`;if(r===0&&i===11)return`h11`;if(r===12&&i===11)return`h12`;throw Error(`Unexpected hour cycle result`)}var Dc,Oc,kc,Ac,jc;function Mc(){return(Mc=t((()=>{Dc=new Map,Oc=class{constructor(e,t={}){this.formatter=Cc(e,t),this.options=t}format(e){return this.formatter.format(e)}formatToParts(e){return this.formatter.formatToParts(e)}formatRange(e,t){if(typeof this.formatter.formatRange==`function`)return this.formatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`}formatRangeToParts(e,t){if(typeof this.formatter.formatRangeToParts==`function`)return this.formatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.formatter.formatToParts(e),r=this.formatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.formatter.resolvedOptions();return Tc()&&(this.resolvedHourCycle||=Ec(e.locale,this.options),e.hourCycle=this.resolvedHourCycle,e.hour12=this.resolvedHourCycle===`h11`||this.resolvedHourCycle===`h12`),e.calendar===`ethiopic-amete-alem`&&(e.calendar=`ethioaa`),e}},kc={true:{ja:`h11`},false:{}},Ac=null,jc=null})))()}function Nc(e){e=oa(e??{},Pc);let{locale:t}=A();return(0,Fc.useMemo)(()=>new Oc(t,e),[t,e])}function Pc(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(let r of n)if(t[r]!==e[r])return!1;return!0}var Fc;function Ic(){return(Ic=t((()=>{ca(),_e(),Mc(),Fc=r()})))()}function Lc(e){return e&&e.__esModule?e.default:e}function Rc(e){return e?.calendar.identifier===`gregory`&&e.era===`BC`?`short`:void 0}function zc(e){let t=E(Lc(ia),`@react-aria/calendar`),n,r;`highlightedRange`in e?{start:n,end:r}=e.highlightedRange||{}:(n=Array.isArray(e.value)?e.value[0]:e.value??void 0,r=Array.isArray(e.value)?e.value.at(-1):e.value??void 0);let i=Nc({weekday:`long`,month:`long`,year:`numeric`,day:`numeric`,era:Rc(n)||Rc(r),timeZone:e.timeZone}),{locale:a}=A(),o=(0,Hc.useMemo)(()=>new Intl.ListFormat(a),[a]),s=`anchorDate`in e?e.anchorDate:null;return(0,Hc.useMemo)(()=>{if(!s&&n&&r){if(ba(n,r)){let r=i.format(n.toDate(e.timeZone));return t.format(`selectedDateDescription`,{date:r})}if(`highlightedRange`in e){let a=Vc(i,t,n,r,e.timeZone);return t.format(`selectedRangeDescription`,{dateRange:a})}if(Array.isArray(e.value)){let n=e.value.map(t=>i.format(t.toDate(e.timeZone))),r=o.format(n);return t.format(`selectedDateDescription`,{date:r})}}return``},[n,r,s,e,t,i,o])}function Bc(e,t,n,r){let i=E(Lc(ia),`@react-aria/calendar`),a=Rc(e)||Rc(t),o=Nc({month:`long`,year:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n}),s=Nc({month:`long`,year:`numeric`,day:`numeric`,era:a,calendar:e.calendar.identifier,timeZone:n});return(0,Hc.useMemo)(()=>{if(ba(e,Na(e))){let a=e,s=t;if(e.calendar.getFormattableMonth&&(a=e.calendar.getFormattableMonth(e)),t.calendar.getFormattableMonth&&(s=t.calendar.getFormattableMonth(t)),ba(t,Pa(e)))return o.format(a.toDate(n));if(ba(t,Pa(t)))return r?Vc(o,i,a,s,n):o.formatRange(a.toDate(n),s.toDate(n))}return r?Vc(s,i,e,t,n):s.formatRange(e.toDate(n),t.toDate(n))},[e,t,o,s,i,n,r])}function Vc(e,t,n,r,i){let a=e.formatRangeToParts(n.toDate(i),r.toDate(i)),o=-1;for(let e=0;e<a.length;e++){let t=a[e];if(t.source===`shared`&&t.type===`literal`)o=e;else if(t.source===`endRange`)break}let s=``,c=``;for(let e=0;e<a.length;e++)e<o?s+=a[e].value:e>o&&(c+=a[e].value);return t.format(`dateRange`,{startDate:s,endDate:c})}var Hc,Uc;function Wc(){return(Wc=t((()=>{aa(),Ic(),_e(),le(),Ja(),Hc=r(),Uc=new WeakMap})))()}function Gc(e,t){let n=(0,Kc.useRef)(!0),r=(0,Kc.useRef)(null),i=V(e);(0,Kc.useEffect)(()=>(n.current=!0,()=>{n.current=!1}),[]),(0,Kc.useEffect)(()=>{let e=r.current;n.current?n.current=!1:(!e||t.some((t,n)=>!Object.is(t,e[n])))&&i(),r.current=t},t)}var Kc;function qc(){return(qc=t((()=>{d(),Kc=r()})))()}function Jc(e){return e&&e.__esModule?e.default:e}function Yc(e,t){let n=E(Jc(ia),`@react-aria/calendar`),r=bt(e),i=Bc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!1),a=Bc(t.visibleRange.start,t.visibleRange.end,t.timeZone,!0);Gc(()=>{t.isFocused||Rr(a)},[a]);let o=zc(t);Gc(()=>{o&&Rr(o,`polite`,4e3)},[o]);let s=qe([!!e.errorMessage,e.isInvalid,e.validationState]);Uc.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:e[`aria-labelledby`],errorMessageId:s,selectedDateDescription:o});let[c,l]=(0,Xc.useState)(!1),u=e.isDisabled||t.isNextVisibleRangeInvalid();u&&c&&(l(!1),t.setFocused(!0));let[d,f]=(0,Xc.useState)(!1),p=e.isDisabled||t.isPreviousVisibleRangeInvalid();p&&d&&(f(!1),t.setFocused(!0));let m=he({id:e.id,"aria-label":[e[`aria-label`],a].filter(Boolean).join(`, `),"aria-labelledby":e[`aria-labelledby`]});return{calendarProps:W(r,m,{role:`application`,"aria-details":e[`aria-details`]||void 0,"aria-describedby":e[`aria-describedby`]||void 0}),nextButtonProps:{onPress:()=>t.focusNextPage(),"aria-label":n.format(`next`),isDisabled:u,onFocusChange:l},prevButtonProps:{onPress:()=>t.focusPreviousPage(),"aria-label":n.format(`previous`),isDisabled:p,onFocusChange:f},errorMessageProps:{id:s},title:i}}var Xc;function Zc(){return(Zc=t((()=>{Ur(),m(),Wc(),aa(),H(),ye(),le(),Ie(),qc(),Xc=r()})))()}function Qc(e,t){return Yc(e,t)}function $c(){return($c=t((()=>{Zc()})))()}function el(e,t){let n=[],r=document.scrollingElement||document.documentElement;for(;e&&(v(e,t)&&n.push(e),e!==r);)e=e.parentElement;return n}function tl(){return(tl=t((()=>{})))()}function nl(e,t,n={}){let{block:r=`nearest`,inline:i=`nearest`}=n;if(e===t)return;let a=e.scrollTop,o=e.scrollLeft,s=t.getBoundingClientRect(),c=e.getBoundingClientRect(),l=window.getComputedStyle(t),u=window.getComputedStyle(e),d=document.scrollingElement||document.documentElement,f=e===d,p=e===d?0:c.top,m=e===d?e.clientHeight:c.bottom,h=e===d?0:c.left,g=e===d?e.clientWidth:c.right,_=parseFloat(l.scrollMarginTop)||0,v=parseFloat(l.scrollMarginBottom)||0,y=parseFloat(l.scrollMarginLeft)||0,b=parseFloat(l.scrollMarginRight)||0,x=parseFloat(u.scrollPaddingTop)||0,S=parseFloat(u.scrollPaddingBottom)||0,C=parseFloat(u.scrollPaddingLeft)||0,w=parseFloat(u.scrollPaddingRight)||0,T=parseFloat(u.borderTopWidth)||0,E=parseFloat(u.borderBottomWidth)||0,D=parseFloat(u.borderLeftWidth)||0,O=parseFloat(u.borderRightWidth)||0,k=s.top-_,A=s.bottom+v,j=s.left-y,M=s.right+b,N=e===d?0:D+O,P=e===d?0:T+E,F=e===d?0:e.offsetWidth-e.clientWidth-N,I=e===d?0:e.offsetHeight-e.clientHeight-P,L=p+(f?0:T)+x,R=m-(f?0:E)-S-I,z=h+(f?0:D)+C,B=g-(f?0:O)-w;ue()&&xt()||u.direction===`ltr`?B-=F:u.direction===`rtl`&&(z+=F);let ee=k<L||A>R,te=j<z||M>B;if(ee&&r===`start`)a+=k-L;else if(ee&&r===`center`)a+=(k+A)/2-(L+R)/2;else if(ee&&r===`end`)a+=A-R;else if(ee&&r===`nearest`){let e=k-L,t=A-R;a+=Math.abs(e)<=Math.abs(t)?e:t}if(te&&i===`start`)o+=j-z;else if(te&&i===`center`)o+=(j+M)/2-(z+B)/2;else if(te&&i===`end`)o+=M-B;else if(te&&i===`nearest`){let e=j-z,t=M-B;o+=Math.abs(e)<=Math.abs(t)?e:t}e.scrollTo({left:o,top:a})}function rl(e,t={}){let{containingElement:n}=t;if(e&&e.isConnected){let t=document.scrollingElement||document.documentElement;if(window.getComputedStyle(t).overflow!==`hidden`){let{left:t,top:r}=e.getBoundingClientRect();e?.scrollIntoView?.({block:`nearest`});let{left:i,top:a}=e.getBoundingClientRect();(Math.abs(t-i)>1||Math.abs(r-a)>1)&&(n?.scrollIntoView?.({block:`center`,inline:`center`}),e.scrollIntoView?.({block:`nearest`}))}else{let{left:t,top:r}=e.getBoundingClientRect(),i=el(e,!0);for(let t of i)nl(t,e);let{left:a,top:o}=e.getBoundingClientRect();if(Math.abs(t-a)>1||Math.abs(r-o)>1){i=n?el(n,!0):[];for(let e of i)nl(e,n,{block:`center`,inline:`center`});for(let t of el(e,!0))nl(t,e)}}}}function il(){return(il=t((()=>{tl(),me()})))()}function al(e){let[t,n]=(0,ol.useState)();return ve(()=>{if(!e)return;let t=cl.get(e);if(t)n(t.element.id);else{let r=`react-aria-description-${sl++}`;n(r);let i=document.createElement(`div`);i.id=r,i.style.display=`none`,i.textContent=e,document.body.appendChild(i),t={refCount:0,element:i},cl.set(e,t)}return t.refCount++,()=>{t&&--t.refCount===0&&(t.element.remove(),cl.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}var ol,sl,cl;function ll(){return(ll=t((()=>{ge(),ol=r(),sl=0,cl=new Map})))()}function ul(e){return e&&e.__esModule?e.default:e}function dl(e,t,n){let{date:r,isDisabled:i}=e,{errorMessageId:a,selectedDateDescription:o}=Uc.get(t),s=E(ul(ia),`@react-aria/calendar`),c=Nc({weekday:`long`,day:`numeric`,month:`long`,year:`numeric`,era:Rc(r),timeZone:t.timeZone}),l=t.isCellFocused(r)&&!e.isOutsideMonth;i=i||t.isCellDisabled(r)||!!e.isOutsideMonth;let u=t.isCellUnavailable(r),d=!i&&!u,f=t.isSelected(r)&&d,p=!1;t.isValueInvalid&&(`highlightedRange`in t?p=!t.anchorDate&&t.highlightedRange!=null&&r.compare(t.highlightedRange.start)>=0&&r.compare(t.highlightedRange.end)<=0:Array.isArray(t.value)?p=t.value.some(e=>ba(e,r)):t.value&&(p=ba(t.value,r))),p&&!i&&(f=!0),r=oa(r,Sa);let m=(0,fl.useMemo)(()=>r.toDate(t.timeZone),[r,t.timeZone]),h=wa(r,t.timeZone),g=(0,fl.useMemo)(()=>{let e=``;return`highlightedRange`in t&&t.value&&!t.anchorDate&&(ba(r,t.value.start)||ba(r,t.value.end))&&(e=o+`, `),e+=c.format(m),h?e=s.format(f?`todayDateSelected`:`todayDate`,{date:e}):f&&(e=s.format(`dateSelected`,{date:e})),t.minValue&&ba(r,t.minValue)?e+=`, `+s.format(`minimumDate`):t.maxValue&&ba(r,t.maxValue)&&(e+=`, `+s.format(`maximumDate`)),e},[c,m,s,f,h,r,t,o]),v=``;`anchorDate`in t&&l&&!t.isReadOnly&&d&&(v=t.anchorDate?s.format(`finishRangeSelectionPrompt`):s.format(`startRangeSelectionPrompt`));let y=al(v),b=(0,fl.useRef)(!1),x=(0,fl.useRef)(!1),S=(0,fl.useRef)(void 0),{pressProps:C,isPressed:w}=br({shouldCancelOnPointerExit:`anchorDate`in t&&!!t.anchorDate,preventFocusOnPress:!0,isDisabled:!d||t.isReadOnly,onPressStart(e){if(t.isReadOnly){t.setFocusedDate(r),t.setFocused(!0);return}if(`highlightedRange`in t&&!t.anchorDate&&(e.pointerType===`mouse`||e.pointerType===`touch`)){if(t.highlightedRange&&!p){if(ba(r,t.highlightedRange.start)){t.setAnchorDate(t.highlightedRange.end),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}if(ba(r,t.highlightedRange.end)){t.setAnchorDate(t.highlightedRange.start),t.setFocusedDate(r),t.setFocused(!0),t.setDragging(!0),x.current=!0;return}}let n=()=>{t.setDragging(!0),S.current=void 0,t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0),b.current=!0};e.pointerType===`touch`?S.current=setTimeout(n,200):n()}},onPressEnd(){x.current=!1,b.current=!1,clearTimeout(S.current),S.current=void 0},onPress(){!(`anchorDate`in t)&&!t.isReadOnly&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))},onPressUp(e){t.isReadOnly||(`anchorDate`in t&&S.current&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)),`anchorDate`in t&&(x.current?t.setAnchorDate(r):t.anchorDate&&!b.current?(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0)):e.pointerType===`keyboard`&&!t.anchorDate?(t.selectDate(r),t.focusNearestAvailableDate(r)):e.pointerType===`virtual`&&(t.selectDate(r),t.setFocusedDate(r),t.setFocused(!0))))}}),T;i||(T=ba(r,t.focusedDate)?0:-1),(0,fl.useEffect)(()=>{l&&n.current&&(Ge(n.current),_()!==`pointer`&&lt()===n.current&&rl(n.current,{containingElement:se(n.current)}))},[l,n]);let D=Nc({day:`numeric`,timeZone:t.timeZone,calendar:r.calendar.identifier}),O=(0,fl.useMemo)(()=>D.formatToParts(m).find(e=>e.type===`day`).value,[D,m]);return{cellProps:{role:`gridcell`,"aria-disabled":!d||void 0,"aria-selected":f||void 0,"aria-invalid":p||void 0},buttonProps:W(C,{onFocus(){i||(t.setFocusedDate(r),t.setFocused(!0))},tabIndex:T,role:`button`,"aria-disabled":!d||void 0,"aria-label":g,"aria-invalid":p||void 0,"aria-describedby":[p?a:void 0,y[`aria-describedby`]].filter(Boolean).join(` `)||void 0,onPointerEnter(e){`highlightDate`in t&&(e.pointerType!==`touch`||t.isDragging)&&d&&t.highlightDate(r)},onPointerDown(e){let t=U(e);t instanceof HTMLElement&&`releasePointerCapture`in t&&(`hasPointerCapture`in t?t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId):t.releasePointerCapture(e.pointerId))},onContextMenu(e){e.preventDefault()}}),isPressed:w,isFocused:l,isSelected:f,isDisabled:i,isUnavailable:u,isOutsideVisibleRange:r.compare(t.visibleRange.start)<0||r.compare(t.visibleRange.end)>0,isInvalid:p,formattedDate:O}}var fl;function pl(){return(pl=t((()=>{ft(),ze(),Wc(),B(),b(),aa(),H(),il(),Ic(),ca(),ll(),le(),Nr(),Ja(),fl=r()})))()}function ml(e,t){let{startDate:n=t.visibleRange.start,endDate:r=t.visibleRange.end,firstDayOfWeek:i}=e,{direction:a}=A(),{keyboardProps:o}=$e({shortcuts:{End:()=>{t.focusSectionEnd()},Home:()=>{t.focusSectionStart()},Escape:()=>(`setAnchorDate`in t&&t.setAnchorDate(null),!1)}}),{keyboardProps:s}=$e({shortcuts:{Enter:()=>{t.selectFocusedDate()}," ":()=>{t.selectFocusedDate()},PageUp:()=>{t.focusPreviousSection()},"Shift+PageUp":()=>{t.focusPreviousSection(!0)},PageDown:()=>{t.focusNextSection()},"Shift+PageDown":()=>{t.focusNextSection(!0)},ArrowLeft:()=>{a===`rtl`?t.focusNextDay():t.focusPreviousDay()},ArrowUp:()=>{t.focusPreviousRow()},ArrowRight:()=>{a===`rtl`?t.focusPreviousDay():t.focusNextDay()},ArrowDown:()=>{t.focusNextRow()}},allowRepeats:!0}),c=Bc(n,r,t.timeZone,!0),{ariaLabel:l,ariaLabelledBy:u}=Uc.get(t),d=he({"aria-label":[l,c].filter(Boolean).join(`, `),"aria-labelledby":u}),f=Nc({weekday:e.weekdayStyle||`narrow`,timeZone:t.timeZone}),{locale:p}=A(),m=(0,hl.useMemo)(()=>{let e=t.visibleDuration.days&&t.visibleDuration.days<7,r=e?n:Ia(Da(t.timeZone),p,i),a=e?t.visibleDuration.days:7;return[...Array(a).keys()].map(e=>{let n=r.add({days:e}).toDate(t.timeZone);return f.format(n)})},[p,t.timeZone,f,i,n,t.visibleDuration.days]),h=t.getWeeksInMonth(n);return{gridProps:W(d,{role:`grid`,"aria-readonly":t.isReadOnly||void 0,"aria-disabled":t.isDisabled||void 0,"aria-multiselectable":`highlightedRange`in t||t.selectionMode===`multiple`||void 0,onFocus:()=>t.setFocused(!0),onBlur:()=>t.setFocused(!1)},o,s),headerProps:{"aria-hidden":!0},weekDays:m,weeksInMonth:h}}var hl;function gl(){return(gl=t((()=>{Wc(),H(),Ic(),st(),ye(),_e(),Ja(),hl=r()})))()}function _l(e,t,n){let r=V(e=>{n&&!e.defaultPrevented&&n(t)});(0,vl.useEffect)(()=>{let t=e?.current?.form;return t?.addEventListener(`reset`,r),()=>{t?.removeEventListener(`reset`,r)}},[e])}var vl;function yl(){return(yl=t((()=>{d(),vl=r()})))()}function bl(e,t,n){let{validationBehavior:r,focus:i}=e;ve(()=>{if(r===`native`&&n?.current&&`setCustomValidity`in n.current&&!n.current.disabled){let e=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(` `)||`Invalid value.`:``;n.current.setCustomValidity(e),n.current.hasAttribute(`title`)||(n.current.title=``),t.realtimeValidation.isInvalid||t.updateValidation(Sl(n.current))}});let a=(0,wl.useRef)(!1),o=V(()=>{a.current||t.resetValidation()}),s=V(e=>{t.displayValidation.isInvalid||t.commitValidation();let r=n?.current?.form;!e.defaultPrevented&&n&&r&&Cl(r)===n.current&&(i?i():n.current?.focus(),ht(`keyboard`)),e.preventDefault()}),c=V(()=>{t.commitValidation()});(0,wl.useEffect)(()=>{let e=n?.current;if(!e)return;let t=e.form,r=t?.reset;return t&&(t.reset=()=>{a.current=!window.event||window.event.type===`message`&&U(window.event)instanceof MessagePort,r?.call(t),a.current=!1}),e.addEventListener(`invalid`,s),e.addEventListener(`change`,c),t?.addEventListener(`reset`,o),()=>{e.removeEventListener(`invalid`,s),e.removeEventListener(`change`,c),t?.removeEventListener(`reset`,o),t&&(t.reset=r)}},[n,r])}function xl(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function Sl(e){return{isInvalid:!e.validity.valid,validationDetails:xl(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function Cl(e){for(let t=0;t<e.elements.length;t++){let n=e.elements[t];if(n.validity?.valid===!1)return n}return null}var wl;function Tl(){return(Tl=t((()=>{ze(),B(),d(),ge(),wl=r()})))()}function El(e=!0){let[t,n]=(0,Ol.useState)(e),r=(0,Ol.useRef)(!1),i=(0,Ol.useCallback)(e=>{r.current=!0,n(!!e)},[]);return ve(()=>{r.current||n(!1)},[]),[i,t]}function Dl(e=!0){let t=Le(),[n,r]=El(e);return{id:r?t:void 0,ref:n}}var Ol;function kl(){return(kl=t((()=>{Ie(),ge(),Ol=r()})))()}function Al(e){if(e.__reactAriaFormValidationState){let{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}=e[Vl];return{realtimeValidation:t,displayValidation:n,updateValidation:r,resetValidation:i,commitValidation:a}}return jl(e)}function jl(e){let{isInvalid:t,validationState:n,name:r,value:i,builtinValidation:a,validate:o,validationBehavior:s=`aria`}=e;n&&(t||=n===`invalid`);let c=t===void 0?null:{isInvalid:t,validationErrors:[],validationDetails:Rl},l=(0,Il.useMemo)(()=>!o||i==null?null:Pl(Nl(o,i)),[o,i]);a?.validationDetails.valid&&(a=void 0);let u=(0,Il.useContext)(Bl),d=(0,Il.useMemo)(()=>r?Array.isArray(r)?r.flatMap(e=>Ml(u[e])):Ml(u[r]):[],[u,r]),[f,p]=(0,Il.useState)(u),[m,h]=(0,Il.useState)(!1);u!==f&&(p(u),h(!1));let g=(0,Il.useMemo)(()=>Pl(m?[]:d),[m,d]),_=(0,Il.useRef)(zl),[v,y]=(0,Il.useState)(zl),b=(0,Il.useRef)(zl),x=()=>{if(!S)return;C(!1);let e=l||a||_.current;Fl(e,b.current)||(b.current=e,y(e))},[S,C]=(0,Il.useState)(!1);return(0,Il.useEffect)(x),{realtimeValidation:c||g||l||a||zl,displayValidation:s===`native`?c||g||v:c||g||l||a||v,updateValidation(e){s===`aria`&&!Fl(v,e)?y(e):_.current=e},resetValidation(){let e=zl;Fl(e,b.current)||(b.current=e,y(e)),s===`native`&&C(!1),h(!0)},commitValidation(){s===`native`&&C(!0),h(!0)}}}function Ml(e){return e?Array.isArray(e)?e:[e]:[]}function Nl(e,t){if(typeof e==`function`){let n=e(t);if(n&&typeof n!=`boolean`)return Ml(n)}return[]}function Pl(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:Rl}:null}function Fl(e,t){return e===t||!!e&&!!t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((e,n)=>e===t.validationErrors[n])&&Object.entries(e.validationDetails).every(([e,n])=>t.validationDetails[e]===n)}var Il,Ll,Rl,zl,Bl,Vl;function Hl(){return(Hl=t((()=>{Il=r(),Ll={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},Rl={...Ll,customError:!0,valid:!1},zl={isInvalid:!1,validationDetails:Ll,validationErrors:[]},Bl=(0,Il.createContext)({}),Vl=`__reactAriaFormValidationState`})))()}function Ul(e,t,n){let{isDisabled:r=!1,isReadOnly:i=!1,value:a,name:o,form:s,children:c,isRequired:l,validationBehavior:u=`aria`,"aria-label":d,"aria-labelledby":f,"aria-describedby":p,onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y}=e,b=Al({...e,value:t.isSelected}),{isInvalid:x,validationErrors:S,validationDetails:C}=b.displayValidation;bl(e,b,n);let w=e=>{e.stopPropagation(),t.setSelected(U(e).checked)},{pressProps:T,isPressed:E}=br({onPressStart:m,onPressEnd:h,onPressChange:g,onPress:_,onPressUp:v,onClick:y,isDisabled:r}),[D,O]=(0,Wl.useState)(!1),{pressProps:k}=br({onPressStart(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}m?.(e),g?.(!0),O(!0)},onPressEnd(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}h?.(e),g?.(!1),O(!1)},onPressUp(e){if(e.pointerType===`keyboard`||e.pointerType===`virtual`){e.continuePropagation();return}v?.(e)},onClick:y,onPress(r){if(r.pointerType===`keyboard`||r.pointerType===`virtual`){r.continuePropagation();return}_?.(r),t.toggle(),n.current?.focus();let{[Vl]:i}=e,{commitValidation:a}=i||b;a()},isDisabled:r||i}),{focusableProps:A}=Xe(e,n),j=W(T,A),M=bt(e,{labelable:!0});_l(n,t.defaultSelected,t.setSelected);let N=Dl(),P=Dl();return{labelProps:W(k,{onClick:e=>e.preventDefault()}),inputProps:W(M,{checked:t.isSelected,"aria-required":l&&u===`aria`||void 0,required:l&&u===`native`,"aria-invalid":x||e.validationState===`invalid`||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-controls":e[`aria-controls`],"aria-readonly":i||void 0,"aria-describedby":[N.id,P.id,p].filter(Boolean).join(` `)||void 0,onChange:w,disabled:r,...a==null?{}:{value:a},name:o,form:s,type:`checkbox`,...j}),descriptionProps:N,errorMessageProps:P,isSelected:t.isSelected,isPressed:E||D,isDisabled:r,isReadOnly:i,isInvalid:x||e.validationState===`invalid`,validationErrors:S,validationDetails:C}}var Wl;function Gl(){return(Gl=t((()=>{m(),ze(),H(),it(),yl(),Tl(),Nr(),kl(),Wl=r(),Hl()})))()}function Kl(e,t,n){let{labelProps:r,inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}=Ul(e,t,n),{isIndeterminate:m}=e;return(0,ql.useEffect)(()=>{n.current&&(n.current.indeterminate=!!m)}),{labelProps:W(r,(0,ql.useMemo)(()=>({onMouseDown:e=>e.preventDefault()}),[])),inputProps:i,descriptionProps:a,errorMessageProps:o,isSelected:s,isPressed:c,isDisabled:l,isReadOnly:u,isInvalid:d,validationErrors:f,validationDetails:p}}var ql;function Jl(){return(Jl=t((()=>{Gl(),H(),ql=r()})))()}function Yl(e){let{id:t,label:n,"aria-labelledby":r,"aria-label":i,labelElementType:a=`label`}=e;t=Le(t);let o=Le(),s={};n&&(r=r?`${o} ${r}`:o,s={id:o,htmlFor:a===`label`?t:void 0});let c=he({id:t,"aria-label":i,"aria-labelledby":r});return{labelProps:s,fieldProps:c}}function J(){return(J=t((()=>{Ie(),ye()})))()}function Xl(e){let{description:t,errorMessage:n,isInvalid:r,validationState:i}=e,{labelProps:a,fieldProps:o}=Yl(e),s=qe([!!t,!!n,r,i]),c=qe([!!t,!!n,r,i]);return o=W(o,{"aria-describedby":[s,c,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0}),{labelProps:a,fieldProps:o,descriptionProps:{id:s},errorMessageProps:{id:c}}}function Zl(){return(Zl=t((()=>{J(),H(),Ie()})))()}function Ql(e={}){let{isReadOnly:t}=e,[n,r]=gt(e.isSelected,e.defaultSelected||!1,e.onChange),[i]=(0,$l.useState)(n);function a(e){t||r(e)}function o(){t||r(!n)}return{isSelected:n,defaultSelected:e.defaultSelected??i,setSelected:a,toggle:o}}var $l;function eu(){return(eu=t((()=>{ae(),$l=r()})))()}function tu(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}function nu(e,t={}){let{numberingSystem:n}=t;if(n&&e.includes(`-nu-`)&&(e.includes(`-u-`)||(e+=`-u-`),e+=`-nu-${n}`),t.style===`unit`&&!ou){let{unit:e,unitDisplay:n=`short`}=t;if(!e)throw Error(`unit option must be provided with style: "unit"`);if(!su[e]?.[n])throw Error(`Unsupported unit ${e} with unitDisplay = ${n}`);t={...t,style:`decimal`}}let r=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(iu.has(r))return iu.get(r);let i=new Intl.NumberFormat(e,t);return iu.set(r,i),i}function ru(e,t,n){if(t===`auto`)return e.format(n);if(t===`never`)return e.format(Math.abs(n));{let r=!1;if(t===`always`?r=n>0||Object.is(n,0):t===`exceptZero`&&(Object.is(n,-0)||Object.is(n,0)?n=Math.abs(n):r=n>0),r){let t=e.format(-n),r=e.format(n),i=t.replace(r,``).replace(/\u200e|\u061C/,``);return[...i].length!==1&&console.warn(`@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case`),t.replace(r,`!!!`).replace(i,`+`).replace(`!!!`,r)}return e.format(n)}}var iu,au,ou,su,cu;function lu(){return(lu=t((()=>{iu=new Map,au=!1;try{au=new Intl.NumberFormat(`de-DE`,{signDisplay:`exceptZero`}).resolvedOptions().signDisplay===`exceptZero`}catch{}ou=!1;try{ou=new Intl.NumberFormat(`de-DE`,{style:`unit`,unit:`degree`}).resolvedOptions().style===`unit`}catch{}su={degree:{narrow:{default:`°`,"ja-JP":` 度`,"zh-TW":`度`,"sl-SI":` °`}}},cu=class{constructor(e,t={}){this.numberFormatter=nu(e,t),this.options=t}format(e){let t=``;if(t=!au&&this.options.signDisplay!=null?ru(this.numberFormatter,this.options.signDisplay,e):this.numberFormatter.format(e),this.options.style===`unit`&&!ou){let{unit:e,unitDisplay:n=`short`,locale:r}=this.resolvedOptions();if(!e)return t;let i=su[e]?.[n];t+=i[r]||i.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if(typeof this.numberFormatter.formatRange==`function`)return this.numberFormatter.formatRange(e,t);if(t<e)throw RangeError(`End date must be >= start date`);return`${this.format(e)} \u{2013} ${this.format(t)}`}formatRangeToParts(e,t){if(typeof this.numberFormatter.formatRangeToParts==`function`)return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw RangeError(`End date must be >= start date`);let n=this.numberFormatter.formatToParts(e),r=this.numberFormatter.formatToParts(t);return[...n.map(e=>({...e,source:`startRange`})),{type:`literal`,value:` – `,source:`shared`},...r.map(e=>({...e,source:`endRange`}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!au&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!ou&&this.options.style===`unit`&&(e={...e,style:`unit`,unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}}})))()}function uu(e,t,n){let r=du(e,t);if(!e.includes(`-nu-`)&&!r.isValidPartialNumber(n)){for(let i of gu)if(i!==r.options.numberingSystem){let r=du(e+(e.includes(`-u-`)?`-nu-`:`-u-nu-`)+i,t);if(r.isValidPartialNumber(n))return r}}return r}function du(e,t){let n=e+(t?Object.entries(t).sort((e,t)=>e[0]<t[0]?-1:1).join():``),r=vu.get(n);return r||(r=new yu(e,t),vu.set(n,r)),r}function fu(e,t,n,r){let i=new Intl.NumberFormat(e,{...n,minimumSignificantDigits:1,maximumSignificantDigits:21,roundingIncrement:1,roundingPriority:`auto`,roundingMode:`halfExpand`,useGrouping:!0}),a=i.formatToParts(-10000.111),o=i.formatToParts(10000.111),s=xu.map(e=>i.formatToParts(e)),c=s.map((e,t)=>{let n=e.find(e=>e.type===`unit`);return n&&!e.some(e=>e.type===`integer`||e.type===`fraction`)?{unit:n.value,value:xu[t]}:null}).filter(e=>!!e),l=a.find(e=>e.type===`minusSign`)?.value??`-`,u=o.find(e=>e.type===`plusSign`)?.value;!u&&(r?.signDisplay===`exceptZero`||r?.signDisplay===`always`)&&(u=`+`);let d=new Intl.NumberFormat(e,{...n,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(e=>e.type===`decimal`)?.value,f=a.find(e=>e.type===`group`)?.value,p=a.filter(e=>!bu.has(e.type)).map(e=>mu(e.value)),m=s.flatMap(e=>e.filter(e=>!bu.has(e.type)).map(e=>mu(e.value))),h=[...new Set([...p,...m])].sort((e,t)=>t.length-e.length),g=h.length===0?RegExp(`\\p{White_Space}|\\p{Cf}`,`gu`):RegExp(`${h.join(`|`)}|\\p{White_Space}|\\p{Cf}`,`gu`),_=[...new Intl.NumberFormat(n.locale,{useGrouping:!1}).format(9876543210)].reverse(),v=new Map(_.map((e,t)=>[e,t])),y=RegExp(`[${_.join(``)}]`,`g`);return{minusSign:l,plusSign:u,decimal:d,group:f,literals:g,numeral:y,numerals:_,index:e=>String(v.get(e)),noNumeralUnits:c}}function pu(e,t,n){return e.replaceAll?e.replaceAll(t,n):e.split(t).join(n)}function mu(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}var hu,gu,_u,vu,yu,bu,xu;function Su(){return(Su=t((()=>{lu(),hu=RegExp(`^.*\\(.*\\).*$`),gu=[`latn`,`arab`,`hanidec`,`deva`,`beng`,`fullwide`],_u=class{constructor(e,t={}){this.locale=e,this.options=t}parse(e){return uu(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,n){return uu(this.locale,this.options,e).isValidPartialNumber(e,t,n)}getNumberingSystem(e){return uu(this.locale,this.options,e).options.numberingSystem}},vu=new Map,yu=class{constructor(e,t={}){this.locale=e,t.roundingIncrement!==1&&t.roundingIncrement!=null&&(t.maximumFractionDigits==null&&t.minimumFractionDigits==null?(t.maximumFractionDigits=0,t.minimumFractionDigits=0):t.maximumFractionDigits==null?t.maximumFractionDigits=t.minimumFractionDigits:t.minimumFractionDigits??=t.maximumFractionDigits),this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=fu(e,this.formatter,this.options,t),this.options.style===`percent`&&((this.options.minimumFractionDigits??0)>18||(this.options.maximumFractionDigits??0)>18)&&console.warn(`NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.`)}parse(e){let t=this.formatter.resolvedOptions().useGrouping,n=this.sanitize(e);if(!t&&this.symbols.group&&n.includes(this.symbols.group))return NaN;if(this.symbols.group&&(n=n.replaceAll(this.symbols.group,``)),this.symbols.decimal&&(n=n.replace(this.symbols.decimal,`.`)),this.symbols.minusSign&&(n=n.replace(this.symbols.minusSign,`-`)),n=n.replace(this.symbols.numeral,this.symbols.index),this.options.style===`percent`){let e=n.indexOf(`-`);n=n.replace(`-`,``),n=n.replace(`+`,``);let t=n.indexOf(`.`);t===-1&&(t=n.length),n=n.replace(`.`,``),n=t-2==0?`0.${n}`:t-2==-1?`0.0${n}`:t-2==-2?`0.00`:`${n.slice(0,t-2)}.${n.slice(t-2)}`,e>-1&&(n=`-${n}`)}let r=n?+n:NaN;if(isNaN(r))return NaN;if(this.options.style===`percent`){let e={...this.options,style:`decimal`,minimumFractionDigits:Math.min((this.options.minimumFractionDigits??0)+2,20),maximumFractionDigits:Math.min((this.options.maximumFractionDigits??0)+2,20)};return new _u(this.locale,e).parse(new cu(this.locale,e).format(r))}return this.options.currencySign===`accounting`&&hu.test(e)&&(r=-1*r),r}sanitize(e){let t=this.formatter.resolvedOptions().useGrouping;return this.symbols.noNumeralUnits.length>0&&this.symbols.noNumeralUnits.find(t=>t.unit===e)?this.symbols.noNumeralUnits.find(t=>t.unit===e).value.toString():(e=e.replace(this.symbols.literals,``),this.symbols.minusSign&&(e=e.replace(`-`,this.symbols.minusSign)),this.options.numberingSystem===`arab`&&(this.symbols.decimal&&(e=pu(e,`,`,this.symbols.decimal),e=pu(e,`،`,this.symbols.decimal)),this.symbols.group&&t&&(e=pu(e,`.`,this.symbols.group))),this.symbols.group===`’`&&e.includes(`'`)&&t&&(e=pu(e,`'`,this.symbols.group)),this.symbols.group===`'`&&e.includes(`’`)&&t&&(e=pu(e,`’`,this.symbols.group)),this.options.locale===`fr-FR`&&this.symbols.group&&t&&(e=pu(e,` `,this.symbols.group),e=pu(e,/\u00A0/g,this.symbols.group)),e)}isValidPartialNumber(e,t=-1/0,n=1/0){let r=this.formatter.resolvedOptions().useGrouping;return e=this.sanitize(e),this.symbols.minusSign&&e.startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&n>0&&(e=e.slice(this.symbols.plusSign.length)),this.symbols.decimal&&e.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&r&&(e=pu(e,this.symbols.group,``)),e=e.replace(this.symbols.numeral,``),this.symbols.decimal&&(e=e.replace(this.symbols.decimal,``)),e.length===0)}},bu=new Set([`decimal`,`fraction`,`integer`,`minusSign`,`plusSign`,`group`]),xu=[0,4,2,1,11,20,3,7,100,21,.1,1.1]})))()}function Cu(e,t){let{inputElementType:n=`input`,isDisabled:r=!1,isRequired:i=!1,isReadOnly:a=!1,type:o=`text`,validationBehavior:s=`aria`}=e,[c,l]=gt(e.value,e.defaultValue||``,e.onChange),{focusableProps:u}=Xe(e,t),d=Al({...e,value:c}),{isInvalid:f,validationErrors:p,validationDetails:m}=d.displayValidation,{labelProps:h,fieldProps:g,descriptionProps:_,errorMessageProps:v}=Xl({...e,isInvalid:f,errorMessage:e.errorMessage||p}),y=bt(e,{labelable:!0}),b={type:o,pattern:e.pattern},[x]=(0,wu.useState)(c);return _l(t,e.defaultValue??x,l),bl(e,d,t),{labelProps:h,inputProps:W(y,n===`input`?b:void 0,{disabled:r,readOnly:a,required:i&&s===`native`,"aria-required":i&&s===`aria`||void 0,"aria-invalid":f||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-activedescendant":e[`aria-activedescendant`],"aria-autocomplete":e[`aria-autocomplete`],"aria-haspopup":e[`aria-haspopup`],"aria-controls":e[`aria-controls`],value:c,onChange:e=>l(U(e).value),autoComplete:e.autoComplete,autoCapitalize:e.autoCapitalize,maxLength:e.maxLength,minLength:e.minLength,name:e.name,form:e.form,placeholder:e.placeholder,inputMode:e.inputMode,autoCorrect:e.autoCorrect,spellCheck:e.spellCheck,enterKeyHint:e.enterKeyHint,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...u,...g}),descriptionProps:_,errorMessageProps:v,isInvalid:f,validationErrors:p,validationDetails:m}}var wu;function Tu(){return(Tu=t((()=>{m(),ze(),H(),Zl(),it(),yl(),Tl(),wu=e(r(),1),ae(),Hl()})))()}function Eu(e={}){let{locale:t}=A();return(0,Du.useMemo)(()=>new cu(t,e),[t,e])}var Du;function Ou(){return(Ou=t((()=>{_e(),lu(),Du=r()})))()}var ku;function Au(){return(Au=t((()=>{ku={},ku={Empty:`فارغ`}})))()}var ju;function Mu(){return(Mu=t((()=>{ju={},ju={Empty:`Изпразни`}})))()}var Nu;function Pu(){return(Pu=t((()=>{Nu={},Nu={Empty:`Prázdné`}})))()}var Fu;function Iu(){return(Iu=t((()=>{Fu={},Fu={Empty:`Tom`}})))()}var Lu;function Ru(){return(Ru=t((()=>{Lu={},Lu={Empty:`Leer`}})))()}var zu;function Bu(){return(Bu=t((()=>{zu={},zu={Empty:`Άδειο`}})))()}var Vu;function Hu(){return(Hu=t((()=>{Vu={},Vu={Empty:`Empty`}})))()}var Uu;function Wu(){return(Wu=t((()=>{Uu={},Uu={Empty:`Vacío`}})))()}var Gu;function Ku(){return(Ku=t((()=>{Gu={},Gu={Empty:`Tühjenda`}})))()}var qu;function Ju(){return(Ju=t((()=>{qu={},qu={Empty:`Tyhjä`}})))()}var Yu;function Xu(){return(Xu=t((()=>{Yu={},Yu={Empty:`Vide`}})))()}var Zu;function Qu(){return(Qu=t((()=>{Zu={},Zu={Empty:`ריק`}})))()}var $u;function ed(){return(ed=t((()=>{$u={},$u={Empty:`Prazno`}})))()}var td;function nd(){return(nd=t((()=>{td={},td={Empty:`Üres`}})))()}var rd;function id(){return(id=t((()=>{rd={},rd={Empty:`Vuoto`}})))()}var ad;function od(){return(od=t((()=>{ad={},ad={Empty:`空`}})))()}var sd;function cd(){return(cd=t((()=>{sd={},sd={Empty:`비어 있음`}})))()}var ld;function ud(){return(ud=t((()=>{ld={},ld={Empty:`Tuščias`}})))()}var dd;function fd(){return(fd=t((()=>{dd={},dd={Empty:`Tukšs`}})))()}var pd;function md(){return(md=t((()=>{pd={},pd={Empty:`Tom`}})))()}var hd;function gd(){return(gd=t((()=>{hd={},hd={Empty:`Leeg`}})))()}var _d;function vd(){return(vd=t((()=>{_d={},_d={Empty:`Pusty`}})))()}var yd;function bd(){return(bd=t((()=>{yd={},yd={Empty:`Vazio`}})))()}var xd;function Sd(){return(Sd=t((()=>{xd={},xd={Empty:`Vazio`}})))()}var Cd;function wd(){return(wd=t((()=>{Cd={},Cd={Empty:`Gol`}})))()}var Td;function Ed(){return(Ed=t((()=>{Td={},Td={Empty:`Не заполнено`}})))()}var Dd;function Od(){return(Od=t((()=>{Dd={},Dd={Empty:`Prázdne`}})))()}var kd;function Ad(){return(Ad=t((()=>{kd={},kd={Empty:`Prazen`}})))()}var jd;function Md(){return(Md=t((()=>{jd={},jd={Empty:`Prazno`}})))()}var Nd;function Pd(){return(Pd=t((()=>{Nd={},Nd={Empty:`Tomt`}})))()}var Fd;function Id(){return(Id=t((()=>{Fd={},Fd={Empty:`Boş`}})))()}var Ld;function Rd(){return(Rd=t((()=>{Ld={},Ld={Empty:`Пусто`}})))()}var zd;function Bd(){return(Bd=t((()=>{zd={},zd={Empty:`空`}})))()}var Vd;function Hd(){return(Hd=t((()=>{Vd={},Vd={Empty:`空白`}})))()}var Ud;function Wd(){return(Wd=t((()=>{Au(),Mu(),Pu(),Iu(),Ru(),Bu(),Hu(),Wu(),Ku(),Ju(),Xu(),Qu(),ed(),nd(),id(),od(),cd(),ud(),fd(),md(),gd(),vd(),bd(),Sd(),wd(),Ed(),Od(),Ad(),Md(),Pd(),Id(),Rd(),Bd(),Hd(),Ud={},Ud={"ar-AE":ku,"bg-BG":ju,"cs-CZ":Nu,"da-DK":Fu,"de-DE":Lu,"el-GR":zu,"en-US":Vu,"es-ES":Uu,"et-EE":Gu,"fi-FI":qu,"fr-FR":Yu,"he-IL":Zu,"hr-HR":$u,"hu-HU":td,"it-IT":rd,"ja-JP":ad,"ko-KR":sd,"lt-LT":ld,"lv-LV":dd,"nb-NO":pd,"nl-NL":hd,"pl-PL":_d,"pt-BR":yd,"pt-PT":xd,"ro-RO":Cd,"ru-RU":Td,"sk-SK":Dd,"sl-SI":kd,"sr-SP":jd,"sv-SE":Nd,"tr-TR":Fd,"uk-UA":Ld,"zh-CN":zd,"zh-TW":Vd}})))()}function Gd(e){return e&&e.__esModule?e.default:e}function Kd(e){let t=(0,qd.useRef)(void 0),{value:n,textValue:r,minValue:i,maxValue:a,isDisabled:o,isReadOnly:s,isRequired:c,onIncrement:l,onIncrementPage:u,onDecrement:d,onDecrementPage:f,onDecrementToMin:p,onIncrementToMax:m}=e,h=E(Gd(Ud),`@react-aria/spinbutton`),g=(0,qd.useRef)(!1),_=(0,qd.useCallback)(()=>{clearTimeout(t.current),g.current=!1},[]),v=V(()=>{_()});(0,qd.useEffect)(()=>()=>v(),[]);let{keyboardProps:y}=$e({isDisabled:o||s,shortcuts:{PageUp:()=>{if(u){u();return}if(l){l();return}return!1},ArrowUp:()=>{if(l){l();return}return!1},PageDown:()=>{if(f){f();return}if(d){d();return}return!1},ArrowDown:()=>{if(d){d();return}return!1},Home:()=>{if(p){p();return}return!1},End:()=>{if(m){m();return}return!1}},allowRepeats:!0}),b=(0,qd.useRef)(!1),x=()=>{b.current=!0},S=()=>{b.current=!1},C=r===``?h.format(`Empty`):(r||`${n}`).replace(`-`,`−`);(0,qd.useEffect)(()=>{b.current&&(zr(`assertive`),Rr(C,`assertive`))},[C]);let w=(0,qd.useCallback)(()=>{_()},[_]),T=V(l??Jd),D=V(d??Jd),O=V(()=>{(a===void 0||isNaN(a)||n===void 0||isNaN(n)||n<a)&&(T(),k(60))}),k=V(e=>{v(),g.current=!0,t.current=window.setTimeout(O,e)}),A=V(()=>{(i===void 0||isNaN(i)||n===void 0||isNaN(n)||n>i)&&(D(),j(60))}),j=V(e=>{v(),g.current=!0,t.current=window.setTimeout(A,e)}),M=e=>{e.preventDefault()},{addGlobalListener:N,removeAllGlobalListeners:P}=R(),F=(0,qd.useRef)(!1),[I,L]=(0,qd.useState)(null);(0,qd.useEffect)(()=>{I===`touch`?k(600):I?k(400):I||v()},[I]);let[z,B]=(0,qd.useState)(null);return(0,qd.useEffect)(()=>{z===`touch`?j(600):z?j(400):z||v()},[z]),{spinButtonProps:{role:`spinbutton`,"aria-valuenow":n!==void 0&&!isNaN(n)?n:void 0,"aria-valuetext":C,"aria-valuemin":i,"aria-valuemax":a,"aria-disabled":o||void 0,"aria-readonly":s||void 0,"aria-required":c||void 0,...y,onFocus:x,onBlur:S},incrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(N(window,`pointercancel`,w,{capture:!0}),F.current=!1,L(`touch`)):(l?.(),L(`mouse`)),N(window,`contextmenu`,M)},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),P(),L(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&l?.(),F.current=!1,L(null)},onFocus:x,onBlur:S},decrementButtonProps:{onPressStart:e=>{_(),e.pointerType===`touch`?(N(window,`pointercancel`,w,{capture:!0}),F.current=!1,B(`touch`)):(d?.(),B(`mouse`))},onPressUp:e=>{_(),e.pointerType===`touch`&&(F.current=!0),P(),B(null)},onPressEnd:e=>{_(),e.pointerType===`touch`&&!g.current&&F.current&&d?.(),F.current=!1,B(null)},onFocus:x,onBlur:S}}}var qd,Jd;function Yd(){return(Yd=t((()=>{Ur(),Wd(),d(),ee(),st(),le(),qd=r(),Jd=()=>{}})))()}function Xd(e){return typeof e==`string`?e.replace(/\s*/g,``):``+e}function Zd(e,t){let n=Qd.get(e);if(!n)throw Error(`Unknown list`);return`${n.id}-option-${Xd(t)}`}var Qd;function $d(){return($d=t((()=>{Qd=new WeakMap})))()}var ef;function tf(){return(tf=t((()=>{ef={},ef={buttonLabel:`عرض المقترحات`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.optionCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})} \u{645}\u{62A}\u{627}\u{62D}\u{629}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{627}\u{644}\u{645}\u{62C}\u{645}\u{648}\u{639}\u{629} \u{627}\u{644}\u{645}\u{62F}\u{62E}\u{644}\u{629} ${e.groupTitle}, \u{645}\u{639} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}`,other:()=>`${t.number(e.groupCount)} \u{62E}\u{64A}\u{627}\u{631}\u{627}\u{62A}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, محدد`,other:``},e.isSelected)}`,listboxLabel:`مقترحات`,selectedAnnouncement:e=>`${e.optionText}\u{60C} \u{645}\u{62D}\u{62F}\u{62F}`}})))()}var nf;function rf(){return(rf=t((()=>{nf={},nf={buttonLabel:`Покажи предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.optionCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})} \u{43D}\u{430} \u{440}\u{430}\u{437}\u{43F}\u{43E}\u{43B}\u{43E}\u{436}\u{435}\u{43D}\u{438}\u{435}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{44F}`,other:()=>`${t.number(e.groupCount)} \u{43E}\u{43F}\u{446}\u{438}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, избрани`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`}})))()}var af;function of(){return(of=t((()=>{af={},af={buttonLabel:`Zobrazit doporučení`,countAnnouncement:(e,t)=>`K dispozici ${t.plural(e.optionCount,{one:()=>`je ${t.number(e.optionCount)} mo\u{17E}nost`,other:()=>`jsou/je ${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina \u{201E}${e.groupTitle}\u{201C} ${t.plural(e.groupCount,{one:()=>`s ${t.number(e.groupCount)} mo\u{17E}nost\xed`,other:()=>`se ${t.number(e.groupCount)} mo\u{17E}nostmi`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:` (vybráno)`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybr\xe1no`}})))()}var sf;function cf(){return(cf=t((()=>{sf={},sf={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mulighed tilg\xe6ngelig`,other:()=>`${t.number(e.optionCount)} muligheder tilg\xe6ngelige`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angivet gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mulighed`,other:()=>`${t.number(e.groupCount)} muligheder`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var lf;function uf(){return(uf=t((()=>{lf={},lf={buttonLabel:`Empfehlungen anzeigen`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} Option`,other:()=>`${t.number(e.optionCount)} Optionen`})} verf\xfcgbar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Eingetretene Gruppe ${e.groupTitle}, mit ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} Option`,other:()=>`${t.number(e.groupCount)} Optionen`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, ausgewählt`,other:``},e.isSelected)}`,listboxLabel:`Empfehlungen`,selectedAnnouncement:e=>`${e.optionText}, ausgew\xe4hlt`}})))()}var df;function ff(){return(ff=t((()=>{df={},df={buttonLabel:`Προβολή προτάσεων`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.optionCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2} `})} \u{3B4}\u{3B9}\u{3B1}\u{3B8}\u{3AD}\u{3C3}\u{3B9}\u{3BC}\u{3B5}\u{3C2}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{395}\u{3B9}\u{3C3}\u{3B1}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3BF}\u{3BC}\u{3AC}\u{3B4}\u{3B1} ${e.groupTitle}, \u{3BC}\u{3B5} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AE}`,other:()=>`${t.number(e.groupCount)} \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3BF}\u{3B3}\u{3AD}\u{3C2}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, επιλεγμένο`,other:``},e.isSelected)}`,listboxLabel:`Προτάσεις`,selectedAnnouncement:e=>`${e.optionText}, \u{3B5}\u{3C0}\u{3B9}\u{3BB}\u{3AD}\u{3C7}\u{3B8}\u{3B7}\u{3BA}\u{3B5}`}})))()}var pf;function mf(){return(mf=t((()=>{pf={},pf={focusAnnouncement:(e,t)=>`${t.select({true:()=>`Entered group ${e.groupTitle}, with ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selected`,other:``},e.isSelected)}`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} available.`,selectedAnnouncement:e=>`${e.optionText}, selected`,buttonLabel:`Show suggestions`,listboxLabel:`Suggestions`}})))()}var hf;function gf(){return(gf=t((()=>{hf={},hf={buttonLabel:`Mostrar sugerencias`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opci\xf3n`,other:()=>`${t.number(e.optionCount)} opciones`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Se ha unido al grupo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opci\xf3n`,other:()=>`${t.number(e.groupCount)} opciones`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seleccionado`,other:``},e.isSelected)}`,listboxLabel:`Sugerencias`,selectedAnnouncement:e=>`${e.optionText}, seleccionado`}})))()}var _f;function vf(){return(vf=t((()=>{_f={},_f={buttonLabel:`Kuva soovitused`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} valik`,other:()=>`${t.number(e.optionCount)} valikud`})} saadaval.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Sisestatud r\xfchm ${e.groupTitle}, valikuga ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} valik`,other:()=>`${t.number(e.groupCount)} valikud`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valitud`,other:``},e.isSelected)}`,listboxLabel:`Soovitused`,selectedAnnouncement:e=>`${e.optionText}, valitud`}})))()}var yf;function bf(){return(bf=t((()=>{yf={},yf={buttonLabel:`Näytä ehdotukset`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} vaihtoehto`,other:()=>`${t.number(e.optionCount)} vaihtoehtoa`})} saatavilla.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Siirtyi ryhm\xe4\xe4n ${e.groupTitle}, jossa ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} vaihtoehto`,other:()=>`${t.number(e.groupCount)} vaihtoehtoa`})}.`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valittu`,other:``},e.isSelected)}`,listboxLabel:`Ehdotukset`,selectedAnnouncement:e=>`${e.optionText}, valittu`}})))()}var xf;function Sf(){return(Sf=t((()=>{xf={},xf={buttonLabel:`Afficher les suggestions`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} option`,other:()=>`${t.number(e.optionCount)} options`})} disponible(s).`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groupe ${e.groupTitle} rejoint, avec ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} option`,other:()=>`${t.number(e.groupCount)} options`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, sélectionné(s)`,other:``},e.isSelected)}`,listboxLabel:`Suggestions`,selectedAnnouncement:e=>`${e.optionText}, s\xe9lectionn\xe9`}})))()}var Cf;function wf(){return(wf=t((()=>{Cf={},Cf={buttonLabel:`הצג הצעות`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.optionCount)}`,other:()=>`${t.number(e.optionCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})} \u{5D1}\u{5DE}\u{5E6}\u{5D1} \u{5D6}\u{5DE}\u{5D9}\u{5DF}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5E0}\u{5DB}\u{5E0}\u{5E1} \u{5DC}\u{5E7}\u{5D1}\u{5D5}\u{5E6}\u{5D4} ${e.groupTitle}, \u{5E2}\u{5DD} ${t.plural(e.groupCount,{one:()=>`\u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5EA} ${t.number(e.groupCount)}`,other:()=>`${t.number(e.groupCount)} \u{5D0}\u{5E4}\u{5E9}\u{5E8}\u{5D5}\u{5D9}\u{5D5}\u{5EA}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, נבחר`,other:``},e.isSelected)}`,listboxLabel:`הצעות`,selectedAnnouncement:e=>`${e.optionText}, \u{5E0}\u{5D1}\u{5D7}\u{5E8}`}})))()}var Tf;function Ef(){return(Ef=t((()=>{Tf={},Tf={buttonLabel:`Prikaži prijedloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} opcije/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, odabranih`,other:``},e.isSelected)}`,listboxLabel:`Prijedlozi`,selectedAnnouncement:e=>`${e.optionText}, odabrano`}})))()}var Df;function Of(){return(Of=t((()=>{Df={},Df={buttonLabel:`Javaslatok megjelenítése`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`,other:()=>`${t.number(e.optionCount)} lehet\u{151}s\xe9g`})} \xe1ll rendelkez\xe9sre.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Bel\xe9pett a(z) ${e.groupTitle} csoportba, amely ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`,other:()=>`${t.number(e.groupCount)} lehet\u{151}s\xe9get`})} tartalmaz. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, kijelölve`,other:``},e.isSelected)}`,listboxLabel:`Javaslatok`,selectedAnnouncement:e=>`${e.optionText}, kijel\xf6lve`}})))()}var kf;function Af(){return(Af=t((()=>{kf={},kf={buttonLabel:`Mostra suggerimenti`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opzione disponibile`,other:()=>`${t.number(e.optionCount)} opzioni disponibili`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingresso nel gruppo ${e.groupTitle}, con ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opzione`,other:()=>`${t.number(e.groupCount)} opzioni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selezionato`,other:``},e.isSelected)}`,listboxLabel:`Suggerimenti`,selectedAnnouncement:e=>`${e.optionText}, selezionato`}})))()}var jf;function Mf(){return(Mf=t((()=>{jf={},jf={buttonLabel:`候補を表示`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.optionCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{5229}\u{7528}\u{3067}\u{304D}\u{307E}\u{3059}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{5165}\u{529B}\u{3055}\u{308C}\u{305F}\u{30B0}\u{30EB}\u{30FC}\u{30D7} ${e.groupTitle}\u{3001}${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`,other:()=>`${t.number(e.groupCount)} \u{500B}\u{306E}\u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}`})}\u{3092}\u{542B}\u{3080}\u{3002}`,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`、選択済み`,other:``},e.isSelected)}`,listboxLabel:`候補`,selectedAnnouncement:e=>`${e.optionText}\u{3001}\u{9078}\u{629E}\u{6E08}\u{307F}`}})))()}var Nf;function Pf(){return(Pf=t((()=>{Nf={},Nf={buttonLabel:`제안 사항 표시`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.optionCount)}\u{AC1C} \u{C635}\u{C158}`})}\u{C744} \u{C0AC}\u{C6A9}\u{D560} \u{C218} \u{C788}\u{C2B5}\u{B2C8}\u{B2E4}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{C785}\u{B825}\u{D55C} \u{ADF8}\u{B8F9} ${e.groupTitle}, ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`,other:()=>`${t.number(e.groupCount)}\u{AC1C} \u{C635}\u{C158}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 선택됨`,other:``},e.isSelected)}`,listboxLabel:`제안`,selectedAnnouncement:e=>`${e.optionText}, \u{C120}\u{D0DD}\u{B428}`}})))()}var Ff;function If(){return(If=t((()=>{Ff={},Ff={buttonLabel:`Rodyti pasiūlymus`,countAnnouncement:(e,t)=>`Yra ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} parinktis`,other:()=>`${t.number(e.optionCount)} parinktys (-i\u{173})`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{12E}vesta grup\u{117} ${e.groupTitle}, su ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} parinktimi`,other:()=>`${t.number(e.groupCount)} parinktimis (-i\u{173})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, pasirinkta`,other:``},e.isSelected)}`,listboxLabel:`Pasiūlymai`,selectedAnnouncement:e=>`${e.optionText}, pasirinkta`}})))()}var Lf;function Rf(){return(Rf=t((()=>{Lf={},Lf={buttonLabel:`Rādīt ieteikumus`,countAnnouncement:(e,t)=>`Pieejamo opciju skaits: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcijas`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ievad\u{12B}ta grupa ${e.groupTitle}, ar ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opciju`,other:()=>`${t.number(e.groupCount)} opcij\u{101}m`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, atlasīta`,other:``},e.isSelected)}`,listboxLabel:`Ieteikumi`,selectedAnnouncement:e=>`${e.optionText}, atlas\u{12B}ta`}})))()}var zf;function Bf(){return(Bf=t((()=>{zf={},zf={buttonLabel:`Vis forslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativer`})} finnes.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Angitt gruppe ${e.groupTitle}, med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativer`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valgt`,other:``},e.isSelected)}`,listboxLabel:`Forslag`,selectedAnnouncement:e=>`${e.optionText}, valgt`}})))()}var Vf;function Hf(){return(Hf=t((()=>{Vf={},Vf={buttonLabel:`Suggesties weergeven`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} optie`,other:()=>`${t.number(e.optionCount)} opties`})} beschikbaar.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Groep ${e.groupTitle} ingevoerd met ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} optie`,other:()=>`${t.number(e.groupCount)} opties`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, geselecteerd`,other:``},e.isSelected)}`,listboxLabel:`Suggesties`,selectedAnnouncement:e=>`${e.optionText}, geselecteerd`}})))()}var Uf;function Wf(){return(Wf=t((()=>{Uf={},Uf={buttonLabel:`Wyświetlaj sugestie`,countAnnouncement:(e,t)=>`dost\u{119}pna/dost\u{119}pne(-nych) ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcja`,other:()=>`${t.number(e.optionCount)} opcje(-i)`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Do\u{142}\u{105}czono do grupy ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcj\u{105}`,other:()=>`${t.number(e.groupCount)} opcjami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, wybrano`,other:``},e.isSelected)}`,listboxLabel:`Sugestie`,selectedAnnouncement:e=>`${e.optionText}, wybrano`}})))()}var Gf;function Kf(){return(Kf=t((()=>{Gf={},Gf={buttonLabel:`Mostrar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo inserido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var qf;function Jf(){return(Jf=t((()=>{qf={},qf={buttonLabel:`Apresentar sugestões`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\xe7\xe3o`,other:()=>`${t.number(e.optionCount)} op\xe7\xf5es`})} dispon\xedvel.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grupo introduzido ${e.groupTitle}, com ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\xe7\xe3o`,other:()=>`${t.number(e.groupCount)} op\xe7\xf5es`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selecionado`,other:``},e.isSelected)}`,listboxLabel:`Sugestões`,selectedAnnouncement:e=>`${e.optionText}, selecionado`}})))()}var Yf;function Xf(){return(Xf=t((()=>{Yf={},Yf={buttonLabel:`Afișare sugestii`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} op\u{21B}iune`,other:()=>`${t.number(e.optionCount)} op\u{21B}iuni`})} disponibile.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Grup ${e.groupTitle} introdus, cu ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} op\u{21B}iune`,other:()=>`${t.number(e.groupCount)} op\u{21B}iuni`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, selectat`,other:``},e.isSelected)}`,listboxLabel:`Sugestii`,selectedAnnouncement:e=>`${e.optionText}, selectat`}})))()}var Zf;function Qf(){return(Qf=t((()=>{Zf={},Zf={buttonLabel:`Показать предложения`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{432}`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{43D}\u{430}\u{44F} \u{433}\u{440}\u{443}\u{43F}\u{43F}\u{430} ${e.groupTitle}, \u{441} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{43E}\u{43C}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{430}\u{43C}\u{438}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, выбранными`,other:``},e.isSelected)}`,listboxLabel:`Предложения`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var $f;function ep(){return(ep=t((()=>{$f={},$f={buttonLabel:`Zobraziť návrhy`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} mo\u{17E}nos\u{165}`,other:()=>`${t.number(e.optionCount)} mo\u{17E}nosti/-\xed`})} k dispoz\xedcii.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Zadan\xe1 skupina ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ou`,other:()=>`${t.number(e.groupCount)} mo\u{17E}nos\u{165}ami`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, vybraté`,other:``},e.isSelected)}`,listboxLabel:`Návrhy`,selectedAnnouncement:e=>`${e.optionText}, vybrat\xe9`}})))()}var tp;function np(){return(np=t((()=>{tp={},tp={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Na voljo je ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Vnesena skupina ${e.groupTitle}, z ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcija`,other:()=>`${t.number(e.groupCount)} opcije`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izbrano`,other:``},e.isSelected)}`,listboxLabel:`Predlogi`,selectedAnnouncement:e=>`${e.optionText}, izbrano`}})))()}var rp;function ip(){return(ip=t((()=>{rp={},rp={buttonLabel:`Prikaži predloge`,countAnnouncement:(e,t)=>`Dostupno jo\u{161}: ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} opcija`,other:()=>`${t.number(e.optionCount)} opcije/a`})}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Unesena grupa ${e.groupTitle}, s ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} opcijom`,other:()=>`${t.number(e.groupCount)} optione/a`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, izabranih`,other:``},e.isSelected)}`,listboxLabel:`Predlozi`,selectedAnnouncement:e=>`${e.optionText}, izabrano`}})))()}var ap;function op(){return(op=t((()=>{ap={},ap={buttonLabel:`Visa förslag`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} alternativ`,other:()=>`${t.number(e.optionCount)} alternativ`})} tillg\xe4ngliga.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Ingick i gruppen ${e.groupTitle} med ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} alternativ`,other:()=>`${t.number(e.groupCount)} alternativ`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, valda`,other:``},e.isSelected)}`,listboxLabel:`Förslag`,selectedAnnouncement:e=>`${e.optionText}, valda`}})))()}var sp;function cp(){return(cp=t((()=>{sp={},sp={buttonLabel:`Önerileri göster`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} se\xe7enek`,other:()=>`${t.number(e.optionCount)} se\xe7enekler`})} kullan\u{131}labilir.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`Girilen grup ${e.groupTitle}, ile ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} se\xe7enek`,other:()=>`${t.number(e.groupCount)} se\xe7enekler`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, seçildi`,other:``},e.isSelected)}`,listboxLabel:`Öneriler`,selectedAnnouncement:e=>`${e.optionText}, se\xe7ildi`}})))()}var lp;function up(){return(up=t((()=>{lp={},lp={buttonLabel:`Показати пропозиції`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.optionCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})} \u{434}\u{43E}\u{441}\u{442}\u{443}\u{43F}\u{43D}\u{43E}.`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{412}\u{432}\u{435}\u{434}\u{435}\u{43D}\u{430} \u{433}\u{440}\u{443}\u{43F}\u{430} ${e.groupTitle}, \u{437} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}`,other:()=>`${t.number(e.groupCount)} \u{43F}\u{430}\u{440}\u{430}\u{43C}\u{435}\u{442}\u{440}\u{438}(-\u{456}\u{432})`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, вибрано`,other:``},e.isSelected)}`,listboxLabel:`Пропозиції`,selectedAnnouncement:e=>`${e.optionText}, \u{432}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{43E}`}})))()}var dp;function fp(){return(fp=t((()=>{dp={},dp={buttonLabel:`显示建议`,countAnnouncement:(e,t)=>`\u{6709} ${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.optionCount)} \u{4E2A}\u{9009}\u{9879}`})}\u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8FDB}\u{5165}\u{4E86} ${e.groupTitle} \u{7EC4}\u{FF0C}\u{5176}\u{4E2D}\u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`,other:()=>`${t.number(e.groupCount)} \u{4E2A}\u{9009}\u{9879}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已选择`,other:``},e.isSelected)}`,listboxLabel:`建议`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9009}\u{62E9}`}})))()}var pp;function mp(){return(mp=t((()=>{pp={},pp={buttonLabel:`顯示建議`,countAnnouncement:(e,t)=>`${t.plural(e.optionCount,{one:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.optionCount)} \u{9078}\u{9805}`})} \u{53EF}\u{7528}\u{3002}`,focusAnnouncement:(e,t)=>`${t.select({true:()=>`\u{8F38}\u{5165}\u{7684}\u{7FA4}\u{7D44} ${e.groupTitle}, \u{6709} ${t.plural(e.groupCount,{one:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`,other:()=>`${t.number(e.groupCount)} \u{9078}\u{9805}`})}. `,other:``},e.isGroupChange)}${e.optionText}${t.select({true:`, 已選取`,other:``},e.isSelected)}`,listboxLabel:`建議`,selectedAnnouncement:e=>`${e.optionText}, \u{5DF2}\u{9078}\u{53D6}`}})))()}var hp;function gp(){return(gp=t((()=>{tf(),rf(),of(),cf(),uf(),ff(),mf(),gf(),vf(),bf(),Sf(),wf(),Ef(),Of(),Af(),Mf(),Pf(),If(),Rf(),Bf(),Hf(),Wf(),Kf(),Jf(),Xf(),Qf(),ep(),np(),ip(),op(),cp(),up(),fp(),mp(),hp={},hp={"ar-AE":ef,"bg-BG":nf,"cs-CZ":af,"da-DK":sf,"de-DE":lf,"el-GR":df,"en-US":pf,"es-ES":hf,"et-EE":_f,"fi-FI":yf,"fr-FR":xf,"he-IL":Cf,"hr-HR":Tf,"hu-HU":Df,"it-IT":kf,"ja-JP":jf,"ko-KR":Nf,"lt-LT":Ff,"lv-LV":Lf,"nb-NO":zf,"nl-NL":Vf,"pl-PL":Uf,"pt-BR":Gf,"pt-PT":qf,"ro-RO":Yf,"ru-RU":Zf,"sk-SK":$f,"sl-SI":tp,"sr-SP":rp,"sv-SE":ap,"tr-TR":sp,"uk-UA":lp,"zh-CN":dp,"zh-TW":pp}})))()}function _p(e){return D()?e.altKey:e.ctrlKey}function vp(e,t){let n=`[data-key="${CSS.escape(String(t))}"]`,r=e.current?.dataset.collection;return r&&(n=`[data-collection="${CSS.escape(r)}"]${n}`),e.current?.querySelector(n)}function yp(e){let t=Le();return xp.set(e,t),t}function bp(e){return xp.get(e)}var xp;function Sp(){return(Sp=t((()=>{me(),Ie(),xp=new WeakMap})))()}var Cp;function wp(){return(wp=t((()=>{Sp(),Cp=class{constructor(e){this.ref=e}getItemRect(e){let t=this.ref.current;if(!t)return null;let n=e==null?null:vp(this.ref,e);if(!n)return null;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect();return{x:i.left-r.left-t.clientLeft+t.scrollLeft,y:i.top-r.top-t.clientTop+t.scrollTop,width:i.width,height:i.height}}getContentSize(){let e=this.ref.current;return{width:e?.scrollWidth??0,height:e?.scrollHeight??0}}getVisibleRect(){let e=this.ref.current;return{x:e?.scrollLeft??0,y:e?.scrollTop??0,width:e?.clientWidth??0,height:e?.clientHeight??0}}}})))()}var Tp;function Ep(){return(Ep=t((()=>{wp(),Sp(),Tp=class{constructor(...e){if(e.length===1){let t=e[0];this.collection=t.collection,this.ref=t.ref,this.collator=t.collator,this.disabledKeys=t.disabledKeys||new Set,this.disabledBehavior=t.disabledBehavior||`all`,this.orientation=t.orientation||`vertical`,this.direction=t.direction,this.layout=t.layout||`stack`,this.layoutDelegate=t.layoutDelegate||new Cp(t.ref)}else this.collection=e[0],this.disabledKeys=e[1],this.ref=e[2],this.collator=e[3],this.layout=`stack`,this.orientation=`vertical`,this.disabledBehavior=`all`,this.layoutDelegate=new Cp(this.ref);this.layout===`stack`&&this.orientation===`vertical`&&(this.getKeyLeftOf=void 0,this.getKeyRightOf=void 0)}isDisabled(e){return this.disabledBehavior===`all`&&(e.props?.isDisabled||this.disabledKeys.has(e.key))&&e.props?.disabledBehavior!==`selection`}findNextNonDisabled(e,t,n=!1){let r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e?.type===`item`&&(n||!this.isDisabled(e)))return r;r=t(r)}return null}getNextKey(e,t){let n=e;return n=this.collection.getKeyAfter(n),this.findNextNonDisabled(n,e=>this.collection.getKeyAfter(e),t?.includeDisabled)}getPreviousKey(e,t){let n=e;return n=this.collection.getKeyBefore(n),this.findNextNonDisabled(n,e=>this.collection.getKeyBefore(e),t?.includeDisabled)}findKey(e,t,n){let r=e,i=this.layoutDelegate.getItemRect(r);if(!i||r==null)return null;let a=i;do{if(r=t(r),r==null)break;i=this.layoutDelegate.getItemRect(r)}while(i&&n(a,i)&&r!=null);return r}isSameRow(e,t){return e.y===t.y||e.x!==t.x}isSameColumn(e,t){return e.x===t.x||e.y!==t.y}isReversed(e){let t=this.getNextKey(e),n=vp(this.ref,e);if(t!=null){let e=vp(this.ref,t);return!n||!e?!1:n.getBoundingClientRect().top>e.getBoundingClientRect().top}let r=this.getPreviousKey(e);if(r!=null){let e=vp(this.ref,r);return!n||!e?!1:e.getBoundingClientRect().top>n.getBoundingClientRect().top}return!1}getKeyBelow(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getNextKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getPreviousKey(e,t):this.getNextKey(e,t)}getKeyAbove(e,t){return this.layout===`grid`&&this.orientation===`vertical`?this.findKey(e,e=>this.getPreviousKey(e,t),this.isSameRow):this.orientation===`vertical`&&this.isReversed(e)?this.getNextKey(e,t):this.getPreviousKey(e,t)}getNextColumn(e,t,n){return t?this.getPreviousKey(e,n):this.getNextKey(e,n)}getKeyRightOf(e,t){let n=this.direction===`ltr`?`getKeyRightOf`:`getKeyLeftOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`rtl`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`rtl`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`rtl`,t):null}getKeyLeftOf(e,t){let n=this.direction===`ltr`?`getKeyLeftOf`:`getKeyRightOf`;return this.layoutDelegate[n]?(e=this.layoutDelegate[n](e),this.findNextNonDisabled(e,e=>this.layoutDelegate[n](e),t?.includeDisabled)):this.layout===`grid`?this.orientation===`vertical`?this.getNextColumn(e,this.direction===`ltr`,t):this.findKey(e,e=>this.getNextColumn(e,this.direction===`ltr`,t),this.isSameColumn):this.orientation===`horizontal`?this.getNextColumn(e,this.direction===`ltr`,t):null}getFirstKey(){let e=this.collection.getFirstKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyAfter(e))}getLastKey(){let e=this.collection.getLastKey();return this.findNextNonDisabled(e,e=>this.collection.getKeyBefore(e))}getKeyPageAbove(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!v(t))return this.getFirstKey();let i=e;if(this.orientation===`horizontal`){let e=Math.max(0,n.x+n.width-this.layoutDelegate.getVisibleRect().width);for(;n&&n.x>e&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=this.layoutDelegate.getVisibleRect(),t=r?n.y-e.height:Math.max(0,n.y+n.height-e.height);for(;n&&n.y>t&&i!=null;)i=this.getKeyAbove(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getLastKey():this.getFirstKey())}getKeyPageBelow(e){let t=this.ref.current,n=this.layoutDelegate.getItemRect(e);if(!n)return null;let r=this.isReversed(e);if(t&&!v(t))return this.getLastKey();let i=e;if(this.orientation===`horizontal`){let e=Math.min(this.layoutDelegate.getContentSize().width,n.x-n.width+this.layoutDelegate.getVisibleRect().width);for(;n&&n.x<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}else{let e=Math.min(this.layoutDelegate.getContentSize().height,n.y-n.height+this.layoutDelegate.getVisibleRect().height);for(;n&&n.y<e&&i!=null;)i=this.getKeyBelow(i),n=i==null?null:this.layoutDelegate.getItemRect(i)}return i??(r?this.getFirstKey():this.getLastKey())}getKeyForSearch(e,t){if(!this.collator)return null;let n=this.collection,r=t||this.getFirstKey();for(;r!=null;){let t=n.getItem(r);if(!t)return null;let i=t.textValue.slice(0,e.length);if(t.textValue&&this.collator.compare(i,e)===0)return r;r=this.getNextKey(r)}return null}}})))()}var Dp;function Op(){return(Op=t((()=>{Dp={},Dp={longPressMessage:`اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`}})))()}var kp;function Ap(){return(Ap=t((()=>{kp={},kp={longPressMessage:`Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`}})))()}var jp;function Mp(){return(Mp=t((()=>{jp={},jp={longPressMessage:`Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`}})))()}var Np;function Pp(){return(Pp=t((()=>{Np={},Np={longPressMessage:`Langt tryk eller tryk på Alt + pil ned for at åbne menuen`}})))()}var Fp;function Ip(){return(Ip=t((()=>{Fp={},Fp={longPressMessage:`Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`}})))()}var Lp;function Rp(){return(Rp=t((()=>{Lp={},Lp={longPressMessage:`Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`}})))()}var zp;function Bp(){return(Bp=t((()=>{zp={},zp={longPressMessage:`Long press or press Alt + ArrowDown to open menu`}})))()}var Vp;function Hp(){return(Hp=t((()=>{Vp={},Vp={longPressMessage:`Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`}})))()}var Up;function Wp(){return(Wp=t((()=>{Up={},Up={longPressMessage:`Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`}})))()}var Gp;function Kp(){return(Kp=t((()=>{Gp={},Gp={longPressMessage:`Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`}})))()}var qp;function Jp(){return(Jp=t((()=>{qp={},qp={longPressMessage:`Appuyez de manière prolongée ou appuyez sur Alt\xA0+\xA0Flèche vers le bas pour ouvrir le menu.`}})))()}var Yp;function Xp(){return(Xp=t((()=>{Yp={},Yp={longPressMessage:`לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`}})))()}var Zp;function Qp(){return(Qp=t((()=>{Zp={},Zp={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`}})))()}var $p;function em(){return(em=t((()=>{$p={},$p={longPressMessage:`Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`}})))()}var tm;function nm(){return(nm=t((()=>{tm={},tm={longPressMessage:`Premi a lungo o premi Alt + Freccia giù per aprire il menu`}})))()}var rm;function im(){return(im=t((()=>{rm={},rm={longPressMessage:`長押しまたは Alt+下矢印キーでメニューを開く`}})))()}var am;function om(){return(om=t((()=>{am={},am={longPressMessage:`길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`}})))()}var sm;function cm(){return(cm=t((()=>{sm={},sm={longPressMessage:`Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`}})))()}var lm;function um(){return(um=t((()=>{lm={},lm={longPressMessage:`Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`}})))()}var dm;function fm(){return(fm=t((()=>{dm={},dm={longPressMessage:`Langt trykk eller trykk Alt + PilNed for å åpne menyen`}})))()}var pm;function mm(){return(mm=t((()=>{pm={},pm={longPressMessage:`Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`}})))()}var hm;function gm(){return(gm=t((()=>{hm={},hm={longPressMessage:`Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`}})))()}var _m;function vm(){return(vm=t((()=>{_m={},_m={longPressMessage:`Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`}})))()}var ym;function bm(){return(bm=t((()=>{ym={},ym={longPressMessage:`Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`}})))()}var xm;function Sm(){return(Sm=t((()=>{xm={},xm={longPressMessage:`Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`}})))()}var Cm;function wm(){return(wm=t((()=>{Cm={},Cm={longPressMessage:`Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`}})))()}var Tm;function Em(){return(Em=t((()=>{Tm={},Tm={longPressMessage:`Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`}})))()}var Dm;function Om(){return(Om=t((()=>{Dm={},Dm={longPressMessage:`Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`}})))()}var km;function Am(){return(Am=t((()=>{km={},km={longPressMessage:`Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`}})))()}var jm;function Mm(){return(Mm=t((()=>{jm={},jm={longPressMessage:`Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`}})))()}var Nm;function Pm(){return(Pm=t((()=>{Nm={},Nm={longPressMessage:`Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`}})))()}var Fm;function Im(){return(Im=t((()=>{Fm={},Fm={longPressMessage:`Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`}})))()}var Lm;function Rm(){return(Rm=t((()=>{Lm={},Lm={longPressMessage:`长按或按 Alt + 向下方向键以打开菜单`}})))()}var zm;function Bm(){return(Bm=t((()=>{zm={},zm={longPressMessage:`長按或按 Alt+向下鍵以開啟功能表`}})))()}var Vm;function Hm(){return(Hm=t((()=>{Op(),Ap(),Mp(),Pp(),Ip(),Rp(),Bp(),Hp(),Wp(),Kp(),Jp(),Xp(),Qp(),em(),nm(),im(),om(),cm(),um(),fm(),mm(),gm(),vm(),bm(),Sm(),wm(),Em(),Om(),Am(),Mm(),Pm(),Im(),Rm(),Bm(),Vm={},Vm={"ar-AE":Dp,"bg-BG":kp,"cs-CZ":jp,"da-DK":Np,"de-DE":Fp,"el-GR":Lp,"en-US":zp,"es-ES":Vp,"et-EE":Up,"fi-FI":Gp,"fr-FR":qp,"he-IL":Yp,"hr-HR":Zp,"hu-HU":$p,"it-IT":tm,"ja-JP":rm,"ko-KR":am,"lt-LT":sm,"lv-LV":lm,"nb-NO":dm,"nl-NL":pm,"pl-PL":hm,"pt-BR":_m,"pt-PT":ym,"ro-RO":xm,"ru-RU":Cm,"sk-SK":Tm,"sl-SI":Dm,"sr-SP":km,"sv-SE":jm,"tr-TR":Nm,"uk-UA":Fm,"zh-CN":Lm,"zh-TW":zm}})))()}function Um(e){let{isDisabled:t,pointerType:n,onLongPressStart:r,onLongPressEnd:i,onLongPress:a,threshold:o=Gm,accessibilityDescription:s}=e,c=(0,Wm.useRef)(void 0),{addGlobalListener:l,removeAllGlobalListeners:u}=R(),d=e=>n?e.pointerType===n:e.pointerType===`mouse`||e.pointerType===`touch`,{pressProps:f}=br({isDisabled:t,onPressStart(e){if(e.continuePropagation(),d(e)){r&&r({...e,type:`longpressstart`}),c.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent(`pointercancel`,{bubbles:!0})),l(e.target,`click`,e=>e.preventDefault(),{once:!0}),we(e.target).activeElement!==e.target&&Ge(e.target),a&&a({...e,type:`longpress`}),c.current=void 0},o),e.pointerType===`touch`&&l(e.target,`contextmenu`,e=>e.preventDefault(),{once:!0});let t=Qe(e.target);l(t,`pointerup`,()=>{setTimeout(()=>{u()},100)},{once:!0})}},onPressEnd(e){c.current&&clearTimeout(c.current),i&&d(e)&&i({...e,type:`longpressend`})}}),p=al(a&&!t?s:void 0);return{longPressProps:W(f,p)}}var Wm,Gm;function Km(){return(Km=t((()=>{ft(),ke(),H(),ll(),ee(),Nr(),Wm=r(),Gm=500})))()}function qm(e){let{onContextMenu:t}=e,n=(0,Jm.useRef)(!1),{longPressProps:r}=Um({onLongPressStart(){n.current=!1},onLongPress(e){n.current?n.current=!1:t?.({target:e.target,x:e.x,y:e.y})}});return t?{contextMenuProps:W(ue()?r:{},{onContextMenu(e){e.stopPropagation(),e.preventDefault(),n.current=!0;let r=e.currentTarget.getBoundingClientRect();t({target:e.currentTarget,x:e.clientX-r.x,y:e.clientY-r.y})},onKeyDown(e){if(h()&&e.ctrlKey&&e.key===`Enter`){n.current=!1;let r=e.currentTarget;e.stopPropagation(),setTimeout(()=>{if(n.current)n.current=!1;else{let e=r.getBoundingClientRect();t({target:r,x:e.width/2,y:e.height/2})}},10)}}})}:{contextMenuProps:{}}}var Jm;function Ym(){return(Ym=t((()=>{me(),H(),Km(),Jm=r()})))()}function Xm(e){let{triggerRef:t,isOpen:n,onClose:r}=e;(0,Zm.useEffect)(()=>!n||r===null?void 0:ot(Ye(t.current),`scroll`,e=>{let n=U(e);if(!t.current||n instanceof Node&&!f(n,t.current)||n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)return;let i=r||Qm.get(t.current);i&&i()},!0),[n,r,t])}var Zm,Qm;function $m(){return($m=t((()=>{ke(),ze(),Zm=r(),Qm=new WeakMap})))()}function eh(e,t,n){let{type:r}=e,{isOpen:i}=t;(0,th.useEffect)(()=>{n&&n.current&&Qm.set(n.current,t.close)});let a;r===`menu`?a=!0:r===`listbox`&&(a=`listbox`);let o=Le();return{triggerProps:{"aria-haspopup":a,"aria-expanded":i,"aria-controls":i?o:void 0,onPress:t.toggle},overlayProps:{id:o}}}var th;function nh(){return(nh=t((()=>{$m(),Ie(),th=r()})))()}function rh(e){return e&&e.__esModule?e.default:e}function ih(e,t,n){let{type:r=`menu`,isDisabled:i,trigger:a=`press`}=e,o=Le(),{triggerProps:s,overlayProps:c}=eh({type:r},t,n),l=(e,n,r=`first`)=>{if(!e||n.isDefaultPrevented())return!1;t.toggle(r)},{keyboardProps:u}=$e({isDisabled:i,shortcuts:{Enter:e=>l(a!==`longPress`,e,`first`)," ":e=>l(a!==`longPress`,e,`first`),ArrowDown:e=>l(a!==`longPress`,e,`first`),ArrowUp:e=>l(a!==`longPress`,e,`last`),"Alt+Enter":e=>l(a===`longPress`,e,`first`),"Alt+ ":e=>l(a===`longPress`,e,`first`),"Alt+ArrowDown":e=>l(!0,e,`first`),"Alt+ArrowUp":e=>l(!0,e,`last`)}}),d=E(rh(Vm),`@react-aria/menu`),{longPressProps:f}=Um({isDisabled:i||a!==`longPress`,accessibilityDescription:d.format(`longPressMessage`),onLongPressStart(){t.close()},onLongPress(){t.open(`first`)}}),p={preventFocusOnPress:!0,onPressStart(e){e.pointerType!==`touch`&&e.pointerType!==`keyboard`&&!i&&(Ge(e.target),t.open(e.pointerType===`virtual`?`first`:null))},onPress(e){e.pointerType===`touch`&&!i&&(Ge(e.target),t.toggle())}};delete s.onPress;let{contextMenuProps:m}=qm({onContextMenu(e){let n=e.target.getBoundingClientRect();t.setPoint({x:n.x+e.x,y:n.y+e.y}),t.open()}});(0,ah.useEffect)(()=>{if(t.isOpen&&a===`contextMenu`){let e=e=>{(e.button===2||e.button===0&&e.ctrlKey===!0)&&U(e)===document.body&&t.close()};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)}},[t,a]);let h;if(a===`press`)h={...p,...u};else if(a===`longPress`)h={...f,...u};else if(a===`contextMenu`){h=m;let{"aria-haspopup":e,"aria-expanded":t,"aria-controls":n,...r}=s;s=r}return{menuTriggerProps:{...s,...h,id:o},menuProps:{...c,"aria-labelledby":o,autoFocus:t.focusStrategy||!0,onClose:t.close}}}var ah;function oh(){return(oh=t((()=>{ft(),ze(),Hm(),Ym(),Ie(),st(),le(),Km(),nh(),ah=r()})))()}function sh(e){let{keyboardDelegate:t,selectionManager:n,onTypeSelect:r}=e,i=(0,lh.useRef)({search:``,timeout:void 0});return(0,lh.useEffect)(()=>{let e=i.current.timeout;return()=>{clearTimeout(e)}},[i]),{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{if(i.current.search.length>0&&e.key===` `){if(e.preventDefault(),(!(`continuePropagation`in e)||`continuePropagation`in e&&!e.isPropagationStopped())&&e.stopPropagation(),i.current.search+=` `,t.getKeyForSearch!=null){let e=t.getKeyForSearch(i.current.search,n.focusedKey);e??=t.getKeyForSearch(i.current.search),e!=null&&(n.setFocusedKey(e),r&&r(e))}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},uh)}}:void 0,onKeyDown:t.getKeyForSearch?e=>{let a=ch(e.key);if(!(!a||e.ctrlKey||e.metaKey||e.altKey||!f(e.currentTarget,U(e))||i.current.search.length===0&&a===` `)){if(i.current.search+=a,t.getKeyForSearch!=null){let a=t.getKeyForSearch(i.current.search,n.focusedKey);if(a??=t.getKeyForSearch(i.current.search),a!=null)n.setFocusedKey(a),r&&r(a),e.preventDefault(),`continuePropagation`in e||e.stopPropagation();else{i.current.search=``,clearTimeout(i.current.timeout),i.current.timeout=void 0;return}}clearTimeout(i.current.timeout),i.current.timeout=setTimeout(()=>{i.current.search=``},uh)}}:void 0}}}function ch(e){return e.length===1||!/^[A-Z]/i.test(e)?e:``}var lh,uh;function dh(){return(dh=t((()=>{ze(),lh=r(),uh=1e3})))()}function fh(e,t){let n=(0,ph.useRef)(!0),r=(0,ph.useRef)(null);ve(()=>(n.current=!0,()=>{n.current=!1}),[]),ve(()=>{n.current?n.current=!1:(!r.current||t.some((e,t)=>!Object.is(e,r[t])))&&e(),r.current=t},t)}var ph;function mh(){return(mh=t((()=>{ge(),ph=r()})))()}function hh(e){let{selectionManager:t,keyboardDelegate:n,ref:r,autoFocus:i=!1,shouldFocusWrap:a=!1,disallowEmptySelection:o=!1,disallowSelectAll:s=!1,escapeKeyBehavior:c=`clearSelection`,selectOnFocus:l=t.selectionBehavior===`replace`,disallowTypeAhead:u=!1,shouldUseVirtualFocus:d,allowsTabNavigation:m=!1,scrollRef:g=r,linkBehavior:v=`action`,UNSTABLE_focusOnEntry:y}=e,{direction:b}=A(),x=te(),S=(e,n,i)=>{if(n!=null){if(t.isLink(n)&&v===`selection`&&l&&!_p(e)){(0,gh.flushSync)(()=>{t.setFocusedKey(n,i)});let a=vp(r,n),o=t.getItemProps(n);if(a){x.open(a,e,o.href,o.routerOptions);return}return!1}if(t.setFocusedKey(n,i),t.isLink(n)&&v===`override`)return!1;if(e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(n);return}if(l&&!_p(e)){t.replaceSelection(n);return}}return!1},C=e=>{if(n.getKeyBelow){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyBelow?.(t.focusedKey);if(r==null&&a&&(r=n.getFirstKey?.(t.focusedKey)),r!=null){S(e,r);return}}return!1},w=e=>{if(n.getKeyAbove){let r=t.focusedKey==null?n.getLastKey?.():n.getKeyAbove?.(t.focusedKey);if(r==null&&a&&(r=n.getLastKey?.(t.focusedKey)),r!=null){S(e,r);return}}return!1},T=e=>{if(n.getFirstKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getFirstKey(t.focusedKey,Me(e));if(t.setFocusedKey(r),r!=null){if(Me(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},E=e=>{if(n.getKeyLeftOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyLeftOf?.(t.focusedKey);if(r==null&&a&&(r=b===`rtl`?n.getFirstKey?.(t.focusedKey):n.getLastKey?.(t.focusedKey)),r!=null){S(e,r,b===`rtl`?`first`:`last`);return}}return!1},D=e=>{if(n.getKeyRightOf){let r=t.focusedKey==null?n.getFirstKey?.():n.getKeyRightOf?.(t.focusedKey);if(r==null&&a&&(r=b===`rtl`?n.getLastKey?.(t.focusedKey):n.getFirstKey?.(t.focusedKey)),r!=null){S(e,r,b===`rtl`?`last`:`first`);return}}return!1},O=e=>{if(n.getLastKey){if(t.focusedKey===null&&e.shiftKey)return!1;let r=n.getLastKey(t.focusedKey,Me(e));if(t.setFocusedKey(r),r!=null){if(Me(e)&&e.shiftKey&&t.selectionMode===`multiple`){t.extendSelection(r);return}if(l){t.replaceSelection(r);return}}}return!1},k=e=>{if(n.getKeyPageBelow&&t.focusedKey!=null){let r=n.getKeyPageBelow(t.focusedKey);if(r!=null)return S(e,r)}return!1},j=e=>{if(n.getKeyPageAbove&&t.focusedKey!=null){let r=n.getKeyPageAbove(t.focusedKey);if(r!=null)return S(e,r)}return!1},M=()=>{if(t.selectionMode===`multiple`&&s!==!0){t.selectAll();return}return!1},N=()=>{if(c===`clearSelection`&&!o&&t.selectedKeys.size!==0){t.clearSelection();return}return!1},P=()=>{if(!m&&r.current){let e=p(r.current,{tabbable:!0}),t,n;do n=e.lastChild(),n&&(t=n);while(n);let i=lt();t&&(!je(t)||i&&!be(i))&&Ge(t)}return{shouldContinuePropagation:!0,shouldPreventDefault:!1}},F=()=>(!m&&r.current&&r.current.focus(),{shouldContinuePropagation:!0,shouldPreventDefault:!1}),I=(e,t)=>({[h()?e+`+Shift+Alt`:e+`+Shift+Control`]:t,[e+`+Shift`]:t,[h()?e+`+Alt`:e+`+Control`]:t,[e]:t}),{keyboardProps:L}=$e({shortcuts:{...I(`ArrowDown`,C),...I(`ArrowUp`,w),...I(`ArrowLeft`,E),...I(`ArrowRight`,D),...I(`PageDown`,k),...I(`PageUp`,j)},allowRepeats:!0}),{keyboardProps:R}=$e({shortcuts:{...I(`Home`,T),...I(`End`,O),"Mod+A":M,Escape:N,Tab:P,"Tab+Shift":F}}),z=(0,_h.useRef)({top:0,left:0});sr(g,`scroll`,()=>{z.current={top:g.current?.scrollTop??0,left:g.current?.scrollLeft??0}});let B=e=>{if(t.isFocused){f(e.currentTarget,U(e))||t.setFocused(!1);return}if(!f(e.currentTarget,U(e)))return;let i=_();t.setFocused(!0);let a=e=>{e!=null&&(t.setFocusedKey(e),l&&!t.isSelected(e)&&t.replaceSelection(e))};if(y&&(i===`keyboard`||i===`virtual`))a(y===`first`?n.getFirstKey?.():n.getLastKey?.());else if(t.focusedKey==null){let r=e.relatedTarget;r&&e.currentTarget.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING?a(t.lastSelectedKey??n.getLastKey?.()):a(t.firstSelectedKey??n.getFirstKey?.())}else g.current&&(g.current.scrollTop=z.current.top,g.current.scrollLeft=z.current.left);if(t.focusedKey!=null&&g.current){let e=vp(r,t.focusedKey);e instanceof HTMLElement&&(!je(e)&&!d&&Ge(e),(i===`keyboard`||y&&i===`virtual`)&&rl(e,{containingElement:r.current}))}},ee=e=>{f(e.currentTarget,e.relatedTarget)||t.setFocused(!1)},V=(0,_h.useRef)(!1);sr(r,Lt,d?e=>{let{detail:n}=e;e.stopPropagation(),t.setFocused(!0),n?.focusStrategy===`first`&&(V.current=!0)}:void 0);let ne=n.getFirstKey?.()??null;fh(()=>{if(V.current){if(ne==null){let e=lt();zt(r.current),Vt(e,null),t.collection.size>0&&(V.current=!1)}else t.setFocusedKey(ne),V.current=!1}},[ne,t.collection.size]),fh(()=>{t.collection.size>0&&(V.current=!1)},[t.focusedKey]),sr(r,It,d?e=>{e.stopPropagation(),t.setFocused(!1),e.detail?.clearFocusKey&&t.setFocusedKey(null)}:void 0);let re=(0,_h.useRef)(i),ie=(0,_h.useRef)(!1);(0,_h.useEffect)(()=>{if(re.current){let e=null;i===`first`&&(e=n.getFirstKey?.()??null),i===`last`&&(e=n.getLastKey?.()??null);let a=t.selectedKeys;if(a.size){for(let n of a)if(t.canSelectItem(n)){e=n;break}}t.setFocused(!0),t.setFocusedKey(e),e==null&&!d&&r.current&&yt(r.current),t.collection.size>0&&(re.current=!1,ie.current=!0)}});let ae=(0,_h.useRef)(t.focusedKey),oe=(0,_h.useRef)(null);(0,_h.useEffect)(()=>{if(t.isFocused&&t.focusedKey!=null&&(t.focusedKey!==ae.current||ie.current)&&g.current&&r.current){let e=_(),n=vp(r,t.focusedKey);if(!(n instanceof HTMLElement))return;(e===`keyboard`||ie.current)&&(oe.current&&cancelAnimationFrame(oe.current),oe.current=requestAnimationFrame(()=>{g.current&&(nl(g.current,n),e!==`virtual`&&rl(n,{containingElement:r.current}))}))}!d&&t.isFocused&&t.focusedKey==null&&ae.current!=null&&r.current&&yt(r.current),ae.current=t.focusedKey,ie.current=!1}),(0,_h.useEffect)(()=>()=>{oe.current&&cancelAnimationFrame(oe.current)},[]),sr(r,`react-aria-focus-scope-restore`,e=>{e.preventDefault(),t.setFocused(!0)});let se={...W(R,L),onFocus:B,onBlur:ee,onMouseDown(e){g.current===U(e)&&e.preventDefault()}},{typeSelectProps:ce}=sh({keyboardDelegate:n,selectionManager:t});u||(se=W(ce,se));let le;d||(le=t.focusedKey==null?0:-1);let ue=yp(t.collection);return{collectionProps:W(se,{tabIndex:le,"data-collection":ue})}}var gh,_h;function vh(){return(vh=t((()=>{Rt(),Ut(),De(),ft(),ze(),I(),B(),Sp(),ut(),me(),ne(),H(),il(),lr(),st(),_e(),C(),dh(),mh(),gh=St(),_h=r()})))()}function yh(e,t){return typeof t.getChildren==`function`?t.getChildren(e.key):e.childNodes}function bh(e){return xh(e,0)}function xh(e,t){if(t<0)return;let n=0;for(let r of e){if(n===t)return r;n++}}function Sh(e,t,n){if(t.parentKey===n.parentKey)return t.index-n.index;let r=[...Ch(e,t),t],i=[...Ch(e,n),n],a=r.slice(0,i.length).findIndex((e,t)=>e!==i[t]);return a===-1?r.findIndex(e=>e===n)>=0?1:(i.findIndex(e=>e===t),-1):(t=r[a],n=i[a],t.index-n.index)}function Ch(e,t){let n=[],r=t;for(;r?.parentKey!=null;)r=e.getItem(r.parentKey),r&&n.unshift(r);return n}function wh(e){let t=Th.get(e);if(t!=null)return t;let n=0,r=t=>{for(let i of t)i.type===`section`?r(yh(i,e)):i.type===`item`&&n++};return r(e),Th.set(e,n),n}var Th;function Eh(){return(Eh=t((()=>{Th=new WeakMap})))()}function Dh(e){return e&&e.__esModule?e.default:e}function Oh(e,t){let{buttonRef:n,popoverRef:r,inputRef:i,listBoxRef:a,keyboardDelegate:o,layoutDelegate:s,shouldFocusWrap:c,isReadOnly:l,isDisabled:u}=e,d=(0,Ah.useRef)(null);n??=d;let p=E(Dh(hp),`@react-aria/combobox`),{menuTriggerProps:m,menuProps:h}=ih({type:`listbox`,isDisabled:u||l},t,n);Qd.set(t,{id:h.id});let{collection:g}=t,{disabledKeys:_}=t.selectionManager,v=(0,Ah.useMemo)(()=>o||new Tp({collection:g,disabledKeys:_,ref:a,layoutDelegate:s}),[o,s,g,_,a]),{collectionProps:y}=hh({selectionManager:t.selectionManager,keyboardDelegate:v,disallowTypeAhead:!0,disallowEmptySelection:!0,shouldFocusWrap:c,ref:i,isVirtualized:!0}),b=te(),{keyboardProps:x}=$e({shortcuts:{Enter:e=>{let n=t.isOpen;if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let r=t.collection.getItem(t.selectionManager.focusedKey);if(r?.props.href){let i=a.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);return i instanceof HTMLAnchorElement&&b.open(i,e,r.props.href,r.props.routerOptions),t.close(),{shouldPreventDefault:n}}if(r?.props.onAction)return r.props.onAction(),t.close(),{shouldPreventDefault:n}}return t.commit(),{shouldPreventDefault:n}},Tab:()=>{if(t.isOpen&&a.current&&t.selectionManager.focusedKey!=null){let e=t.collection.getItem(t.selectionManager.focusedKey);if(e?.props.href)return t.close(),{shouldPreventDefault:!1};if(e?.props.onAction)return e.props.onAction(),t.close(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}}return t.isOpen&&t.commit(),{shouldPreventDefault:!1,shouldContinuePropagation:!0}},Escape:()=>{let n=!1;return(!t.selectionManager.isEmpty||t.inputValue===``||e.allowsCustomValue)&&(n=!0),t.revert(),{shouldContinuePropagation:n}}}}),{keyboardProps:S}=$e({shortcuts:{ArrowDown:()=>(t.open(`first`,`manual`),{shouldPreventDefault:!1}),ArrowUp:()=>(t.open(`last`,`manual`),{shouldPreventDefault:!1}),ArrowLeft:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1}),ArrowRight:()=>(t.selectionManager.setFocusedKey(null),{shouldPreventDefault:!1})},allowRepeats:!0}),C=i=>{let a=n?.current&&n.current===i.relatedTarget,o=f(r.current,i.relatedTarget);a||o||(e.onBlur&&e.onBlur(i),t.setFocused(!1))},w=n=>{t.isFocused||(e.onFocus&&e.onFocus(n),t.setFocused(!0))},T=kh([t.selectionManager.selectedKeys,t.selectionManager.selectionMode]),{isInvalid:O,validationErrors:k,validationDetails:A}=t.displayValidation,{labelProps:j,inputProps:M,descriptionProps:N,errorMessageProps:P}=Cu({...e,isRequired:e.selectionMode===`multiple`?e.isRequired&&t.selectionManager.isEmpty:e.isRequired,onChange:t.setInputValue,onKeyDown:l?e.onKeyDown:Se(t.isOpen&&y.onKeyDown,x.onKeyDown,S.onKeyDown,e.onKeyDown),onBlur:C,value:t.inputValue,defaultValue:t.defaultInputValue,onFocus:w,autoComplete:`off`,validate:void 0,[Vl]:t,"aria-describedby":[T,e[`aria-describedby`]].filter(Boolean).join(` `)||void 0},i);_l(i,t.defaultValue,t.setValue);let F=e=>{e.pointerType===`touch`&&(i.current?.focus(),t.toggle(null,`manual`))},I=e=>{e.pointerType!==`touch`&&(i.current?.focus(),t.toggle(e.pointerType===`keyboard`||e.pointerType===`virtual`?`first`:null,`manual`))},L=he({id:m.id,"aria-label":p.format(`buttonLabel`),"aria-labelledby":e[`aria-labelledby`]||j.id}),R=he({id:h.id,"aria-label":p.format(`listboxLabel`),"aria-labelledby":e[`aria-labelledby`]||j.id}),z=(0,Ah.useRef)(0),B=e=>{if(u||l)return;if(e.timeStamp-z.current<500){e.preventDefault(),i.current?.focus();return}let n=U(e).getBoundingClientRect(),r=e.changedTouches[0],a=Math.ceil(n.left+.5*n.width),o=Math.ceil(n.top+.5*n.height);r.clientX===a&&r.clientY===o&&(e.preventDefault(),i.current?.focus(),t.toggle(null,`manual`),z.current=e.timeStamp)},ee=t.selectionManager.focusedKey!=null&&t.isOpen?t.collection.getItem(t.selectionManager.focusedKey):void 0,V=ee?.parentKey??null,ne=t.selectionManager.focusedKey??null,re=(0,Ah.useRef)(V),ie=(0,Ah.useRef)(ne);(0,Ah.useEffect)(()=>{if(D()&&ee!=null&&ne!=null&&ne!==ie.current){let e=t.selectionManager.isSelected(ne),n=V==null?null:t.collection.getItem(V),r=n?.[`aria-label`]||(typeof n?.rendered==`string`?n.rendered:``)||``;Rr(p.format(`focusAnnouncement`,{isGroupChange:(n&&V!==re.current)??!1,groupTitle:r,groupCount:n?[...yh(n,t.collection)].length:0,optionText:ee[`aria-label`]||ee.textValue||``,isSelected:e}))}re.current=V,ie.current=ne});let ae=wh(t.collection),oe=(0,Ah.useRef)(ae),se=(0,Ah.useRef)(t.isOpen);(0,Ah.useEffect)(()=>{let e=t.isOpen!==se.current&&(t.selectionManager.focusedKey==null||D());t.isOpen&&(e||ae!==oe.current)&&Rr(p.format(`countAnnouncement`,{optionCount:ae})),oe.current=ae,se.current=t.isOpen});let ce=(0,Ah.useRef)(t.selectedKey);return(0,Ah.useEffect)(()=>{if(D()&&t.isFocused&&t.selectedItem&&t.selectedKey!==ce.current){let e=t.selectedItem[`aria-label`]||t.selectedItem.textValue||``;Rr(p.format(`selectedAnnouncement`,{optionText:e}))}ce.current=t.selectedKey}),(0,Ah.useEffect)(()=>{if(t.isOpen)return xe([i.current,r.current].filter(e=>e!=null))},[t.isOpen,i,r]),Gc(()=>{!ee&&i.current&&lt(we(i.current))===i.current&&Vt(i.current,null)},[ee]),sr(a,`react-aria-item-action`,t.isOpen?()=>{t.close()}:void 0),{labelProps:{...j,onClick:`htmlFor`in j&&j.htmlFor||e.isDisabled?void 0:()=>{i.current?.focus(),ht(`keyboard`)}},buttonProps:{...m,...L,excludeFromTabOrder:!0,preventFocusOnPress:!0,onPress:F,onPressStart:I,isDisabled:u||l},inputProps:W(M,{role:`combobox`,"aria-expanded":m[`aria-expanded`],"aria-controls":t.isOpen?h.id:void 0,"aria-autocomplete":`list`,"aria-activedescendant":ee?Zd(t,ee.key):void 0,onTouchEnd:B,autoCorrect:`off`,spellCheck:`false`}),listBoxProps:W(h,R,{onAction:void 0,autoFocus:t.focusStrategy||!0,shouldUseVirtualFocus:!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,linkBehavior:`selection`,UNSTABLE_itemBehavior:`action`}),valueProps:{id:T},descriptionProps:N,errorMessageProps:P,isInvalid:O,validationErrors:k,validationDetails:A}}function kh(e=[]){let t=Le(),[n,r]=(0,Ah.useState)(!0),[i,a]=(0,Ah.useState)(e);return i.some((t,n)=>!Object.is(t,e[n]))&&(r(!0),a(e)),(0,Ah.useEffect)(()=>{n&&!document.getElementById(t)&&r(!1)},[t,n,i]),n?t:void 0}var Ah;function jh(){return(jh=t((()=>{Ur(),pt(),Ut(),ze(),$d(),ke(),gp(),me(),Ep(),H(),B(),lr(),yl(),Ie(),st(),ye(),le(),oh(),C(),vh(),Tu(),qc(),Ah=r(),Eh(),Hl()})))()}var Mh;function Nh(){return(Nh=t((()=>{Mh={},Mh={calendar:`التقويم`,day:`يوم`,dayPeriod:`ص/م`,endDate:`تاريخ الانتهاء`,era:`العصر`,hour:`الساعات`,minute:`الدقائق`,month:`الشهر`,second:`الثواني`,selectedDateDescription:e=>`\u{62A}\u{627}\u{631}\u{64A}\u{62E} \u{645}\u{62D}\u{62F}\u{62F}: ${e.date}`,selectedRangeDescription:e=>`\u{627}\u{644}\u{645}\u{62F}\u{649} \u{627}\u{644}\u{632}\u{645}\u{646}\u{64A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.startDate} \u{625}\u{644}\u{649} ${e.endDate}`,selectedTimeDescription:e=>`\u{627}\u{644}\u{648}\u{642}\u{62A} \u{627}\u{644}\u{645}\u{62D}\u{62F}\u{62F}: ${e.time}`,startDate:`تاريخ البدء`,timeZoneName:`التوقيت`,weekday:`اليوم`,year:`السنة`}})))()}var Ph;function Fh(){return(Fh=t((()=>{Ph={},Ph={calendar:`Календар`,day:`ден`,dayPeriod:`пр.об./сл.об.`,endDate:`Крайна дата`,era:`ера`,hour:`час`,minute:`минута`,month:`месец`,second:`секунда`,selectedDateDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{434}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{432}\u{440}\u{435}\u{43C}\u{435}: ${e.time}`,startDate:`Начална дата`,timeZoneName:`часова зона`,weekday:`ден от седмицата`,year:`година`}})))()}var Ih;function Lh(){return(Lh=t((()=>{Ih={},Ih={calendar:`Kalendář`,day:`den`,dayPeriod:`část dne`,endDate:`Konečné datum`,era:`letopočet`,hour:`hodina`,minute:`minuta`,month:`měsíc`,second:`sekunda`,selectedDateDescription:e=>`Vybran\xe9 datum: ${e.date}`,selectedRangeDescription:e=>`Vybran\xe9 obdob\xed: ${e.startDate} a\u{17E} ${e.endDate}`,selectedTimeDescription:e=>`Vybran\xfd \u{10D}as: ${e.time}`,startDate:`Počáteční datum`,timeZoneName:`časové pásmo`,weekday:`den v týdnu`,year:`rok`}})))()}var Rh;function zh(){return(zh=t((()=>{Rh={},Rh={calendar:`Kalender`,day:`dag`,dayPeriod:`AM/PM`,endDate:`Slutdato`,era:`æra`,hour:`time`,minute:`minut`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt interval: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tidspunkt: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidszone`,weekday:`ugedag`,year:`år`}})))()}var Bh;function Vh(){return(Vh=t((()=>{Bh={},Bh={calendar:`Kalender`,day:`Tag`,dayPeriod:`Tageshälfte`,endDate:`Enddatum`,era:`Epoche`,hour:`Stunde`,minute:`Minute`,month:`Monat`,second:`Sekunde`,selectedDateDescription:e=>`Ausgew\xe4hltes Datum: ${e.date}`,selectedRangeDescription:e=>`Ausgew\xe4hlter Bereich: ${e.startDate} bis ${e.endDate}`,selectedTimeDescription:e=>`Ausgew\xe4hlte Zeit: ${e.time}`,startDate:`Startdatum`,timeZoneName:`Zeitzone`,weekday:`Wochentag`,year:`Jahr`}})))()}var Hh;function Uh(){return(Uh=t((()=>{Hh={},Hh={calendar:`Ημερολόγιο`,day:`ημέρα`,dayPeriod:`π.μ./μ.μ.`,endDate:`Ημερομηνία λήξης`,era:`περίοδος`,hour:`ώρα`,minute:`λεπτό`,month:`μήνας`,second:`δευτερόλεπτο`,selectedDateDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3B7}\u{3BC}\u{3B5}\u{3C1}\u{3BF}\u{3BC}\u{3B7}\u{3BD}\u{3AF}\u{3B1}: ${e.date}`,selectedRangeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3BF} \u{3B5}\u{3CD}\u{3C1}\u{3BF}\u{3C2}: ${e.startDate} \u{3AD}\u{3C9}\u{3C2} ${e.endDate}`,selectedTimeDescription:e=>`\u{395}\u{3C0}\u{3B9}\u{3BB}\u{3B5}\u{3B3}\u{3BC}\u{3AD}\u{3BD}\u{3B7} \u{3CE}\u{3C1}\u{3B1}: ${e.time}`,startDate:`Ημερομηνία έναρξης`,timeZoneName:`ζώνη ώρας`,weekday:`καθημερινή`,year:`έτος`}})))()}var Wh;function Gh(){return(Gh=t((()=>{Wh={},Wh={era:`era`,year:`year`,month:`month`,day:`day`,hour:`hour`,minute:`minute`,second:`second`,dayPeriod:`AM/PM`,calendar:`Calendar`,startDate:`Start Date`,endDate:`End Date`,weekday:`day of the week`,timeZoneName:`time zone`,selectedDateDescription:e=>`Selected Date: ${e.date}`,selectedRangeDescription:e=>`Selected Range: ${e.startDate} to ${e.endDate}`,selectedTimeDescription:e=>`Selected Time: ${e.time}`}})))()}var Kh;function qh(){return(qh=t((()=>{Kh={},Kh={calendar:`Calendario`,day:`día`,dayPeriod:`a.\xA0m./p.\xA0m.`,endDate:`Fecha final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mes`,second:`segundo`,selectedDateDescription:e=>`Fecha seleccionada: ${e.date}`,selectedRangeDescription:e=>`Rango seleccionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora seleccionada: ${e.time}`,startDate:`Fecha de inicio`,timeZoneName:`zona horaria`,weekday:`día de la semana`,year:`año`}})))()}var Jh;function Yh(){return(Yh=t((()=>{Jh={},Jh={calendar:`Kalender`,day:`päev`,dayPeriod:`enne/pärast lõunat`,endDate:`Lõppkuupäev`,era:`ajastu`,hour:`tund`,minute:`minut`,month:`kuu`,second:`sekund`,selectedDateDescription:e=>`Valitud kuup\xe4ev: ${e.date}`,selectedRangeDescription:e=>`Valitud vahemik: ${e.startDate} kuni ${e.endDate}`,selectedTimeDescription:e=>`Valitud aeg: ${e.time}`,startDate:`Alguskuupäev`,timeZoneName:`ajavöönd`,weekday:`nädalapäev`,year:`aasta`}})))()}var Xh;function Zh(){return(Zh=t((()=>{Xh={},Xh={calendar:`Kalenteri`,day:`päivä`,dayPeriod:`vuorokaudenaika`,endDate:`Päättymispäivä`,era:`aikakausi`,hour:`tunti`,minute:`minuutti`,month:`kuukausi`,second:`sekunti`,selectedDateDescription:e=>`Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,selectedRangeDescription:e=>`Valittu aikav\xe4li: ${e.startDate} \u{2013} ${e.endDate}`,selectedTimeDescription:e=>`Valittu aika: ${e.time}`,startDate:`Alkamispäivä`,timeZoneName:`aikavyöhyke`,weekday:`viikonpäivä`,year:`vuosi`}})))()}var Qh;function $h(){return($h=t((()=>{Qh={},Qh={calendar:`Calendrier`,day:`jour`,dayPeriod:`cadran`,endDate:`Date de fin`,era:`ère`,hour:`heure`,minute:`minute`,month:`mois`,second:`seconde`,selectedDateDescription:e=>`Date s\xe9lectionn\xe9e\xa0: ${e.date}`,selectedRangeDescription:e=>`Plage s\xe9lectionn\xe9e\xa0: ${e.startDate} au ${e.endDate}`,selectedTimeDescription:e=>`Heure choisie\xa0: ${e.time}`,startDate:`Date de début`,timeZoneName:`fuseau horaire`,weekday:`jour de la semaine`,year:`année`}})))()}var eg;function tg(){return(tg=t((()=>{eg={},eg={calendar:`לוח שנה`,day:`יום`,dayPeriod:`לפנה״צ/אחה״צ`,endDate:`תאריך סיום`,era:`תקופה`,hour:`שעה`,minute:`דקה`,month:`חודש`,second:`שנייה`,selectedDateDescription:e=>`\u{5EA}\u{5D0}\u{5E8}\u{5D9}\u{5DA} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.date}`,selectedRangeDescription:e=>`\u{5D8}\u{5D5}\u{5D5}\u{5D7} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.startDate} \u{5E2}\u{5D3} ${e.endDate}`,selectedTimeDescription:e=>`\u{5D6}\u{5DE}\u{5DF} \u{5E0}\u{5D1}\u{5D7}\u{5E8}: ${e.time}`,startDate:`תאריך התחלה`,timeZoneName:`אזור זמן`,weekday:`יום בשבוע`,year:`שנה`}})))()}var ng;function rg(){return(rg=t((()=>{ng={},ng={calendar:`Kalendar`,day:`dan`,dayPeriod:`AM/PM`,endDate:`Datum završetka`,era:`era`,hour:`sat`,minute:`minuta`,month:`mjesec`,second:`sekunda`,selectedDateDescription:e=>`Odabrani datum: ${e.date}`,selectedRangeDescription:e=>`Odabrani raspon: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Odabrano vrijeme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`vremenska zona`,weekday:`dan u tjednu`,year:`godina`}})))()}var ig;function ag(){return(ag=t((()=>{ig={},ig={calendar:`Naptár`,day:`nap`,dayPeriod:`napszak`,endDate:`Befejező dátum`,era:`éra`,hour:`óra`,minute:`perc`,month:`hónap`,second:`másodperc`,selectedDateDescription:e=>`Kijel\xf6lt d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Kijel\xf6lt tartom\xe1ny: ${e.startDate}\u{2013}${e.endDate}`,selectedTimeDescription:e=>`Kijel\xf6lt id\u{151}: ${e.time}`,startDate:`Kezdő dátum`,timeZoneName:`időzóna`,weekday:`hét napja`,year:`év`}})))()}var og;function sg(){return(sg=t((()=>{og={},og={calendar:`Calendario`,day:`giorno`,dayPeriod:`AM/PM`,endDate:`Data finale`,era:`era`,hour:`ora`,minute:`minuto`,month:`mese`,second:`secondo`,selectedDateDescription:e=>`Data selezionata: ${e.date}`,selectedRangeDescription:e=>`Intervallo selezionato: da ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Ora selezionata: ${e.time}`,startDate:`Data iniziale`,timeZoneName:`fuso orario`,weekday:`giorno della settimana`,year:`anno`}})))()}var cg;function lg(){return(lg=t((()=>{cg={},cg={calendar:`カレンダー`,day:`日`,dayPeriod:`午前/午後`,endDate:`終了日`,era:`時代`,hour:`時`,minute:`分`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{65E5}\u{4ED8} : ${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{629E}\u{7BC4}\u{56F2} : ${e.startDate} \u{304B}\u{3089} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{629E}\u{3057}\u{305F}\u{6642}\u{9593} : ${e.time}`,startDate:`開始日`,timeZoneName:`タイムゾーン`,weekday:`曜日`,year:`年`}})))()}var ug;function dg(){return(dg=t((()=>{ug={},ug={calendar:`달력`,day:`일`,dayPeriod:`오전/오후`,endDate:`종료일`,era:`연호`,hour:`시`,minute:`분`,month:`월`,second:`초`,selectedDateDescription:e=>`\u{C120}\u{D0DD} \u{C77C}\u{C790}: ${e.date}`,selectedRangeDescription:e=>`\u{C120}\u{D0DD} \u{BC94}\u{C704}: ${e.startDate} ~ ${e.endDate}`,selectedTimeDescription:e=>`\u{C120}\u{D0DD} \u{C2DC}\u{AC04}: ${e.time}`,startDate:`시작일`,timeZoneName:`시간대`,weekday:`요일`,year:`년`}})))()}var fg;function pg(){return(pg=t((()=>{fg={},fg={calendar:`Kalendorius`,day:`diena`,dayPeriod:`iki pietų / po pietų`,endDate:`Pabaigos data`,era:`era`,hour:`valanda`,minute:`minutė`,month:`mėnuo`,second:`sekundė`,selectedDateDescription:e=>`Pasirinkta data: ${e.date}`,selectedRangeDescription:e=>`Pasirinktas intervalas: nuo ${e.startDate} iki ${e.endDate}`,selectedTimeDescription:e=>`Pasirinktas laikas: ${e.time}`,startDate:`Pradžios data`,timeZoneName:`laiko juosta`,weekday:`savaitės diena`,year:`metai`}})))()}var mg;function hg(){return(hg=t((()=>{mg={},mg={calendar:`Kalendārs`,day:`diena`,dayPeriod:`priekšpusdienā/pēcpusdienā`,endDate:`Beigu datums`,era:`ēra`,hour:`stundas`,minute:`minūtes`,month:`mēnesis`,second:`sekundes`,selectedDateDescription:e=>`Atlas\u{12B}tais datums: ${e.date}`,selectedRangeDescription:e=>`Atlas\u{12B}tais diapazons: no ${e.startDate} l\u{12B}dz ${e.endDate}`,selectedTimeDescription:e=>`Atlas\u{12B}tais laiks: ${e.time}`,startDate:`Sākuma datums`,timeZoneName:`laika josla`,weekday:`nedēļas diena`,year:`gads`}})))()}var gg;function _g(){return(_g=t((()=>{gg={},gg={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Sluttdato`,era:`tidsalder`,hour:`time`,minute:`minutt`,month:`måned`,second:`sekund`,selectedDateDescription:e=>`Valgt dato: ${e.date}`,selectedRangeDescription:e=>`Valgt omr\xe5de: ${e.startDate} til ${e.endDate}`,selectedTimeDescription:e=>`Valgt tid: ${e.time}`,startDate:`Startdato`,timeZoneName:`tidssone`,weekday:`ukedag`,year:`år`}})))()}var vg;function yg(){return(yg=t((()=>{vg={},vg={calendar:`Kalender`,day:`dag`,dayPeriod:`a.m./p.m.`,endDate:`Einddatum`,era:`tijdperk`,hour:`uur`,minute:`minuut`,month:`maand`,second:`seconde`,selectedDateDescription:e=>`Geselecteerde datum: ${e.date}`,selectedRangeDescription:e=>`Geselecteerd bereik: ${e.startDate} tot ${e.endDate}`,selectedTimeDescription:e=>`Geselecteerde tijd: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tijdzone`,weekday:`dag van de week`,year:`jaar`}})))()}var bg;function xg(){return(xg=t((()=>{bg={},bg={calendar:`Kalendarz`,day:`dzień`,dayPeriod:`rano / po południu / wieczorem`,endDate:`Data końcowa`,era:`era`,hour:`godzina`,minute:`minuta`,month:`miesiąc`,second:`sekunda`,selectedDateDescription:e=>`Wybrana data: ${e.date}`,selectedRangeDescription:e=>`Wybrany zakres: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Wybrany czas: ${e.time}`,startDate:`Data początkowa`,timeZoneName:`strefa czasowa`,weekday:`dzień tygodnia`,year:`rok`}})))()}var Sg;function Cg(){return(Cg=t((()=>{Sg={},Sg={calendar:`Calendário`,day:`dia`,dayPeriod:`AM/PM`,endDate:`Data final`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data inicial`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var wg;function Tg(){return(Tg=t((()=>{wg={},wg={calendar:`Calendário`,day:`dia`,dayPeriod:`am/pm`,endDate:`Data de Término`,era:`era`,hour:`hora`,minute:`minuto`,month:`mês`,second:`segundo`,selectedDateDescription:e=>`Data selecionada: ${e.date}`,selectedRangeDescription:e=>`Intervalo selecionado: ${e.startDate} a ${e.endDate}`,selectedTimeDescription:e=>`Hora selecionada: ${e.time}`,startDate:`Data de Início`,timeZoneName:`fuso horário`,weekday:`dia da semana`,year:`ano`}})))()}var Eg;function Dg(){return(Dg=t((()=>{Eg={},Eg={calendar:`Calendar`,day:`zi`,dayPeriod:`a.m/p.m.`,endDate:`Dată final`,era:`eră`,hour:`oră`,minute:`minut`,month:`lună`,second:`secundă`,selectedDateDescription:e=>`Dat\u{103} selectat\u{103}: ${e.date}`,selectedRangeDescription:e=>`Interval selectat: de la ${e.startDate} p\xe2n\u{103} la ${e.endDate}`,selectedTimeDescription:e=>`Ora selectat\u{103}: ${e.time}`,startDate:`Dată început`,timeZoneName:`fus orar`,weekday:`ziua din săptămână`,year:`an`}})))()}var Og;function kg(){return(kg=t((()=>{Og={},Og={calendar:`Календарь`,day:`день`,dayPeriod:`AM/PM`,endDate:`Дата окончания`,era:`эра`,hour:`час`,minute:`минута`,month:`месяц`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{430}\u{44F} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{44B}\u{439} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: \u{441} ${e.startDate} \u{43F}\u{43E} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{44B}\u{431}\u{440}\u{430}\u{43D}\u{43D}\u{43E}\u{435} \u{432}\u{440}\u{435}\u{43C}\u{44F}: ${e.time}`,startDate:`Дата начала`,timeZoneName:`часовой пояс`,weekday:`день недели`,year:`год`}})))()}var Ag;function jg(){return(jg=t((()=>{Ag={},Ag={calendar:`Kalendár`,day:`deň`,dayPeriod:`AM/PM`,endDate:`Dátum ukončenia`,era:`letopočet`,hour:`hodina`,minute:`minúta`,month:`mesiac`,second:`sekunda`,selectedDateDescription:e=>`Vybrat\xfd d\xe1tum: ${e.date}`,selectedRangeDescription:e=>`Vybrat\xfd rozsah: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Vybrat\xfd \u{10D}as: ${e.time}`,startDate:`Dátum začatia`,timeZoneName:`časové pásmo`,weekday:`deň týždňa`,year:`rok`}})))()}var Mg;function Ng(){return(Ng=t((()=>{Mg={},Mg={calendar:`Koledar`,day:`dan`,dayPeriod:`dop/pop`,endDate:`Datum konca`,era:`doba`,hour:`ura`,minute:`minuta`,month:`mesec`,second:`sekunda`,selectedDateDescription:e=>`Izbrani datum: ${e.date}`,selectedRangeDescription:e=>`Izbrano obmo\u{10D}je: ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izbrani \u{10D}as: ${e.time}`,startDate:`Datum začetka`,timeZoneName:`časovni pas`,weekday:`dan v tednu`,year:`leto`}})))()}var Pg;function Fg(){return(Fg=t((()=>{Pg={},Pg={calendar:`Kalendar`,day:`дан`,dayPeriod:`пре подне/по подне`,endDate:`Datum završetka`,era:`ера`,hour:`сат`,minute:`минут`,month:`месец`,second:`секунд`,selectedDateDescription:e=>`Izabrani datum: ${e.date}`,selectedRangeDescription:e=>`Izabrani opseg: od ${e.startDate} do ${e.endDate}`,selectedTimeDescription:e=>`Izabrano vreme: ${e.time}`,startDate:`Datum početka`,timeZoneName:`временска зона`,weekday:`дан у недељи`,year:`година`}})))()}var Ig;function Lg(){return(Lg=t((()=>{Ig={},Ig={calendar:`Kalender`,day:`dag`,dayPeriod:`fm/em`,endDate:`Slutdatum`,era:`era`,hour:`timme`,minute:`minut`,month:`månad`,second:`sekund`,selectedDateDescription:e=>`Valt datum: ${e.date}`,selectedRangeDescription:e=>`Valt intervall: ${e.startDate} till ${e.endDate}`,selectedTimeDescription:e=>`Vald tid: ${e.time}`,startDate:`Startdatum`,timeZoneName:`tidszon`,weekday:`veckodag`,year:`år`}})))()}var Rg;function zg(){return(zg=t((()=>{Rg={},Rg={calendar:`Takvim`,day:`gün`,dayPeriod:`ÖÖ/ÖS`,endDate:`Bitiş Tarihi`,era:`çağ`,hour:`saat`,minute:`dakika`,month:`ay`,second:`saniye`,selectedDateDescription:e=>`Se\xe7ilen Tarih: ${e.date}`,selectedRangeDescription:e=>`Se\xe7ilen Aral\u{131}k: ${e.startDate} - ${e.endDate}`,selectedTimeDescription:e=>`Se\xe7ilen Zaman: ${e.time}`,startDate:`Başlangıç Tarihi`,timeZoneName:`saat dilimi`,weekday:`haftanın günü`,year:`yıl`}})))()}var Bg;function Vg(){return(Vg=t((()=>{Bg={},Bg={calendar:`Календар`,day:`день`,dayPeriod:`дп/пп`,endDate:`Дата завершення`,era:`ера`,hour:`година`,minute:`хвилина`,month:`місяць`,second:`секунда`,selectedDateDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,selectedRangeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,selectedTimeDescription:e=>`\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,startDate:`Дата початку`,timeZoneName:`часовий пояс`,weekday:`день тижня`,year:`рік`}})))()}var Hg;function Ug(){return(Ug=t((()=>{Hg={},Hg={calendar:`日历`,day:`日`,dayPeriod:`上午/下午`,endDate:`结束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{8303}\u{56F4}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9009}\u{5B9A}\u{7684}\u{65F6}\u{95F4}\u{FF1A}${e.time}`,startDate:`开始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var Wg;function Gg(){return(Gg=t((()=>{Wg={},Wg={calendar:`日曆`,day:`日`,dayPeriod:`上午/下午`,endDate:`結束日期`,era:`纪元`,hour:`小时`,minute:`分钟`,month:`月`,second:`秒`,selectedDateDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{65E5}\u{671F}\u{FF1A}${e.date}`,selectedRangeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{7BC4}\u{570D}\u{FF1A}${e.startDate} \u{81F3} ${e.endDate}`,selectedTimeDescription:e=>`\u{9078}\u{5B9A}\u{7684}\u{6642}\u{9593}\u{FF1A}${e.time}`,startDate:`開始日期`,timeZoneName:`时区`,weekday:`工作日`,year:`年`}})))()}var Kg;function qg(){return(qg=t((()=>{Nh(),Fh(),Lh(),zh(),Vh(),Uh(),Gh(),qh(),Yh(),Zh(),$h(),tg(),rg(),ag(),sg(),lg(),dg(),pg(),hg(),_g(),yg(),xg(),Cg(),Tg(),Dg(),kg(),jg(),Ng(),Fg(),Lg(),zg(),Vg(),Ug(),Gg(),Kg={},Kg={"ar-AE":Mh,"bg-BG":Ph,"cs-CZ":Ih,"da-DK":Rh,"de-DE":Bh,"el-GR":Hh,"en-US":Wh,"es-ES":Kh,"et-EE":Jh,"fi-FI":Xh,"fr-FR":Qh,"he-IL":eg,"hr-HR":ng,"hu-HU":ig,"it-IT":og,"ja-JP":cg,"ko-KR":ug,"lt-LT":fg,"lv-LV":mg,"nb-NO":gg,"nl-NL":vg,"pl-PL":bg,"pt-BR":Sg,"pt-PT":wg,"ro-RO":Eg,"ru-RU":Og,"sk-SK":Ag,"sl-SI":Mg,"sr-SP":Pg,"sv-SE":Ig,"tr-TR":Rg,"uk-UA":Bg,"zh-CN":Hg,"zh-TW":Wg}})))()}function Jg(e,t,n){let{direction:r}=A(),i=(0,Xg.useMemo)(()=>Ve(t),[t]),{keyboardProps:a}=$e({shortcuts:{"Alt+ArrowDown":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},"Alt+ArrowUp":()=>{if(`setOpen`in e){e.setOpen(!0);return}return!1},ArrowLeft:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=U(e),r=Yg(t.current,n.getBoundingClientRect().left,-1);if(r){r.focus();return}}}else{i.focusPrevious();return}return!1},ArrowRight:e=>{if(n)return!1;if(r===`rtl`){if(t.current){let n=U(e),r=Yg(t.current,n.getBoundingClientRect().left,1);if(r){r.focus();return}}}else{i.focusNext();return}return!1}},allowRepeats:!0}),o=()=>{if(!t.current)return;let e=window.event?U(window.event):null,n=p(t.current,{tabbable:!0});if(e&&=(n.currentNode=e,n.previousNode()),!e){let t;do t=n.lastChild(),t&&(e=t);while(t)}for(;e?.hasAttribute(`data-placeholder`);){let t=n.previousNode();if(t&&t.hasAttribute(`data-placeholder`))e=t;else break}e&&e.focus()},{pressProps:s}=br({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(e){e.pointerType===`mouse`&&o()},onPress(e){(e.pointerType===`touch`||e.pointerType===`pen`)&&o()}});return W(s,a)}function Yg(e,t,n){let r=p(e,{tabbable:!0}),i=r.nextNode(),a=null,o=1/0;for(;i;){let e=i.getBoundingClientRect().left-t,s=Math.abs(e);Math.sign(e)===n&&s<o&&(a=i,o=s),i=r.nextNode()}return a}var Xg;function Zg(){return(Zg=t((()=>{I(),ze(),H(),st(),_e(),Nr(),Xg=r()})))()}function Qg(e){return e&&e.__esModule?e.default:e}function $g(e,t,n){let{isInvalid:r,validationErrors:i,validationDetails:a}=t.displayValidation,{labelProps:o,fieldProps:s,descriptionProps:c,errorMessageProps:l}=Xl({...e,labelElementType:`span`,isInvalid:r,errorMessage:e.errorMessage||i}),u=(0,t_.useRef)(null),{focusWithinProps:d}=g({...e,onFocusWithin(n){u.current=t.value,e.onFocus?.(n)},onBlurWithin:n=>{t.confirmPlaceholder(),t.value!==u.current&&t.commitValidation(),e.onBlur?.(n)},onFocusWithinChange:e.onFocusChange}),f=E(Qg(Kg),`@react-aria/datepicker`),p=t.maxGranularity===`hour`?`selectedTimeDescription`:`selectedDateDescription`,m=t.maxGranularity===`hour`?`time`:`date`,h=al(t.value?f.format(p,{[m]:t.formatValue({month:`long`})}):``),_=e.__reactAriaDateFieldRole===`presentation`?s[`aria-describedby`]:[h[`aria-describedby`],s[`aria-describedby`]].filter(Boolean).join(` `)||void 0,v=e[i_],y=(0,t_.useMemo)(()=>v||Ve(n),[v,n]),b=Jg(t,n,e[r_]===`presentation`);n_.set(t,{ariaLabel:e[`aria-label`],ariaLabelledBy:[o.id,e[`aria-labelledby`]].filter(Boolean).join(` `)||void 0,ariaDescribedBy:_,focusManager:y});let x=(0,t_.useRef)(e.autoFocus),S;S=e.__reactAriaDateFieldRole===`presentation`?{role:`presentation`}:W(s,{role:`group`,"aria-disabled":e.isDisabled||void 0,"aria-describedby":_}),(0,t_.useEffect)(()=>{x.current&&y.focusFirst(),x.current=!1},[y]),_l(e.inputRef,t.defaultValue,t.setValue),bl({...e,focus(){y.focusFirst()}},t,e.inputRef);let C={type:`hidden`,name:e.name,form:e.form,value:t.value?.toString()||``,disabled:e.isDisabled};e.validationBehavior===`native`&&(C.type=`text`,C.hidden=!0,C.required=e.isRequired,C.onChange=()=>{});let w=bt(e);return{labelProps:{...o,onClick:()=>{y.focusFirst()}},fieldProps:W(w,S,b,d,{onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,style:{unicodeBidi:`isolate`}}),inputProps:C,descriptionProps:c,errorMessageProps:l,isInvalid:r,validationErrors:i,validationDetails:a}}function e_(e,t,n){let r=$g(e,t,n);return r.inputProps.value=t.timeValue?.toString()||``,r}var t_,n_,r_,i_;function a_(){return(a_=t((()=>{I(),m(),qg(),H(),Zg(),ll(),Zl(),mt(),yl(),Tl(),le(),t_=r(),n_=new WeakMap,r_=`__reactAriaDateFieldRole`,i_=`__reactAriaDateFieldFocusManager`})))()}function o_(e){return e&&e.__esModule?e.default:e}function s_(e,t,n){let r=Le(),i=Le(),a=Le(),o=E(o_(Kg),`@react-aria/datepicker`),{isInvalid:s,validationErrors:c,validationDetails:l}=t.displayValidation,{labelProps:u,fieldProps:d,descriptionProps:p,errorMessageProps:m}=Xl({...e,labelElementType:`span`,isInvalid:s,errorMessage:e.errorMessage||c}),h=Jg(t,n),_=d[`aria-labelledby`]||d.id,{locale:v}=A(),y=t.formatValue(v,{month:`long`}),b=al(y?o.format(`selectedDateDescription`,{date:y}):``),x=[b[`aria-describedby`],d[`aria-describedby`]].filter(Boolean).join(` `)||void 0,S=bt(e),C=(0,c_.useMemo)(()=>Ve(n),[n]),w=(0,c_.useRef)(!1),{focusWithinProps:T}=g({...e,isDisabled:t.isOpen,onBlurWithin:t=>{let n=document.getElementById(i);f(n,t.relatedTarget)||(w.current=!1,e.onBlur?.(t),e.onFocusChange?.(!1))},onFocusWithin:t=>{w.current||(w.current=!0,e.onFocus?.(t),e.onFocusChange?.(!0))}});return{groupProps:W(S,h,d,b,T,{role:`group`,"aria-disabled":e.isDisabled||null,"aria-labelledby":_,"aria-describedby":x,onKeyDown(n){t.isOpen||e.onKeyDown&&e.onKeyDown(n)},onKeyUp(n){t.isOpen||e.onKeyUp&&e.onKeyUp(n)}}),labelProps:{...u,onClick:()=>{C.focusFirst()}},fieldProps:{...d,id:a,[r_]:`presentation`,"aria-describedby":x,value:t.value,defaultValue:t.defaultValue,onChange:t.setValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationBehavior:e.validationBehavior,[Vl]:t,autoFocus:e.autoFocus,name:e.name,form:e.form},descriptionProps:p,errorMessageProps:m,buttonProps:{...b,id:r,"aria-haspopup":`dialog`,"aria-label":o.format(`calendar`),"aria-labelledby":`${r} ${_}`,"aria-describedby":x,"aria-expanded":t.isOpen,isDisabled:e.isDisabled||e.isReadOnly,onPress:()=>t.setOpen(!0)},dialogProps:{id:i,"aria-labelledby":`${r} ${_}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,isInvalid:t.isInvalid,errorMessage:typeof e.errorMessage==`function`?e.errorMessage(t.displayValidation):e.errorMessage||t.displayValidation.validationErrors.join(` `),firstDayOfWeek:e.firstDayOfWeek,pageBehavior:e.pageBehavior},isInvalid:s,validationErrors:c,validationDetails:l}}var c_;function l_(){return(l_=t((()=>{I(),m(),qg(),H(),ze(),a_(),Zg(),ll(),Zl(),mt(),Ie(),_e(),le(),Hl(),c_=r()})))()}function u_(e){return e&&e.__esModule?e.default:e}function d_(){let{locale:e}=A(),t=de(u_(Kg),`@react-aria/datepicker`);return(0,f_.useMemo)(()=>{try{return new Intl.DisplayNames(e,{type:`dateTimeField`})}catch{return new p_(e,t)}},[e,t])}var f_,p_;function m_(){return(m_=t((()=>{qg(),_e(),le(),f_=r(),p_=class{constructor(e,t){this.locale=e,this.dictionary=t}of(e){return this.dictionary.getStringForLocale(e,this.locale)}}})))()}function h_(e){let{locale:t}=A(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():``);if(g_.has(n))return g_.get(n);let r=new Intl.Collator(t,e);return g_.set(n,r),r}var g_;function __(){return(__=t((()=>{_e(),g_=new Map})))()}function v_(e){let t=h_({usage:`search`,...e}),n=(0,y_.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(0,n.length),n)===0),[t]),r=(0,y_.useCallback)((e,n)=>n.length===0||(e=e.normalize(`NFC`),n=n.normalize(`NFC`),t.compare(e.slice(-n.length),n)===0),[t]),i=(0,y_.useCallback)((e,n)=>{if(n.length===0)return!0;e=e.normalize(`NFC`),n=n.normalize(`NFC`);let r=0,i=n.length;for(;r+i<=e.length;r++){let a=e.slice(r,r+i);if(t.compare(n,a)===0)return!0}return!1},[t]);return(0,y_.useMemo)(()=>({startsWith:n,endsWith:r,contains:i}),[n,r,i])}var y_;function b_(){return(b_=t((()=>{__(),y_=r()})))()}function x_(e,t,n){let r=(0,C_.useRef)(``),{locale:i,direction:a}=A(),o=d_(),{ariaLabel:s,ariaLabelledBy:c,ariaDescribedBy:l,focusManager:u}=n_.get(t),d=e.isPlaceholder?``:e.text,p=(0,C_.useMemo)(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),m=Nc({month:`long`,timeZone:p.timeZone}),h=Nc({hour:`numeric`,hour12:p.hour12,timeZone:p.timeZone});if(e.type===`month`&&!e.isPlaceholder){let e=m.format(t.dateValue);d=e===d?e:`${d} \u{2013} ${e}`}else e.type===`hour`&&!e.isPlaceholder&&(d=h.format(t.dateValue));let{spinButtonProps:g}=Kd({value:e.value??void 0,textValue:d,minValue:e.minValue,maxValue:e.maxValue,isDisabled:t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:t.isRequired,onIncrement:()=>{r.current=``,t.increment(e.type)},onDecrement:()=>{r.current=``,t.decrement(e.type)},onIncrementPage:()=>{r.current=``,t.incrementPage(e.type)},onDecrementPage:()=>{r.current=``,t.decrementPage(e.type)},onIncrementToMax:()=>{r.current=``,t.incrementToMax(e.type)},onDecrementToMin:()=>{r.current=``,t.decrementToMin(e.type)}}),_=(0,C_.useMemo)(()=>new _u(i,{maximumFractionDigits:0}),[i]),v=()=>{if(e.text===e.placeholder&&u.focusPrevious(),_.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){let n=e.text.slice(0,-1),i=_.parse(n);n=i===0?``:n,n.length===0||i===0?t.clearSegment(e.type):t.setSegment(e.type,i),r.current=n}else(e.type===`dayPeriod`||e.type===`era`)&&t.clearSegment(e.type)},{keyboardProps:y}=$e({shortcuts:{Backspace:()=>{v()},Delete:()=>{v()},"Mod+a":()=>{}},allowRepeats:!0}),{startsWith:b}=v_({sensitivity:`base`}),x=Nc({hour:`numeric`,hour12:!0}),S=(0,C_.useMemo)(()=>{let e=new Date;return e.setHours(0),x.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[x]),C=(0,C_.useMemo)(()=>{let e=new Date;return e.setHours(12),x.formatToParts(e).find(e=>e.type===`dayPeriod`).value},[x]),w=Nc({year:`numeric`,era:`narrow`,timeZone:`UTC`}),T=(0,C_.useMemo)(()=>{if(e.type!==`era`)return[];let n=so(new ts(1,1,1),t.calendar),r=t.calendar.getEras().map(e=>{let t=n.set({year:1,month:1,day:1,era:e}).toDate(`UTC`);return{era:e,formatted:w.formatToParts(t).find(e=>e.type===`era`).value}}),i=S_(r.map(e=>e.formatted));if(i)for(let e of r)e.formatted=e.formatted.slice(i);return r},[w,t.calendar,e.type]),E=n=>{if(t.isDisabled||t.isReadOnly)return;let i=r.current+n;switch(e.type){case`dayPeriod`:if(b(S,n))t.setSegment(`dayPeriod`,0);else if(b(C,n))t.setSegment(`dayPeriod`,1);else break;u.focusNext();break;case`era`:{let e=T.find(e=>b(e.formatted,n));e&&(t.setSegment(`era`,e.era),u.focusNext());break}case`day`:case`hour`:case`minute`:case`second`:case`month`:case`year`:{if(!_.isValidPartialNumber(i))return;let a=_.parse(i),o=a;if(e.maxValue!==void 0&&a>e.maxValue&&(o=_.parse(n)),isNaN(a))return;t.setSegment(e.type,o),e.maxValue!==void 0&&(Number(a+`0`)>e.maxValue||i.length>=String(e.maxValue).length)?(r.current=``,u.focusNext()):r.current=i;break}}},D=()=>{r.current=``,n.current&&rl(n.current,{containingElement:se(n.current)}),window.getSelection()?.collapse(n.current)};sr((0,C_.useRef)(typeof document<`u`?document:null),`selectionchange`,()=>{let e=window.getSelection();e?.anchorNode&&f(n.current,e?.anchorNode)&&lt()===n.current&&e.collapse(n.current)});let O=(0,C_.useRef)(``);sr(n,`beforeinput`,r=>{if(n.current)switch(r.preventDefault(),r.inputType){case`deleteContentBackward`:case`deleteContentForward`:_.isValidPartialNumber(e.text)&&!t.isReadOnly&&v();break;case`insertCompositionText`:O.current=n.current.textContent,n.current.textContent=n.current.textContent;break;default:r.data!=null&&E(r.data)}}),sr(n,`input`,e=>{let{inputType:t,data:r}=e;t===`insertCompositionText`&&(n.current&&(n.current.textContent=O.current),r!=null&&(b(S,r)||b(C,r))&&E(r))}),ve(()=>{let e=n.current;return()=>{lt()===e&&(u.focusPrevious()||u.focusNext())}},[n,u]);let k=ue()||e.type===`timeZoneName`?{role:`textbox`,"aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{};e!==(0,C_.useMemo)(()=>t.segments.find(e=>e.isEditable),[t.segments])&&!t.isInvalid&&(l=void 0);let j=Le(),M=!t.isDisabled&&!t.isReadOnly&&e.isEditable,N=e.type===`literal`?``:o.of(e.type),P=he({"aria-label":`${N}${s?`, ${s}`:``}${c?`, `:``}`,"aria-labelledby":c});if(e.type===`literal`)return{segmentProps:{"aria-hidden":!0}};let F={caretColor:`transparent`};if(a===`rtl`){F.unicodeBidi=`embed`;let t=p[e.type];(t===`numeric`||t===`2-digit`)&&(F.direction=`ltr`)}return{segmentProps:W(g,P,{id:j,...k,...y,"aria-invalid":t.isInvalid?`true`:void 0,"aria-describedby":l,"aria-readonly":t.isReadOnly||!e.isEditable?`true`:void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:M,suppressContentEditableWarning:M,spellCheck:M?`false`:void 0,autoCorrect:M?`off`:void 0,enterKeyHint:M?`next`:void 0,inputMode:t.isDisabled||e.type===`dayPeriod`||e.type===`era`||!M?void 0:`numeric`,tabIndex:t.isDisabled?void 0:0,onFocus:D,style:F,onPointerDown(e){e.stopPropagation()},onMouseDown(e){e.stopPropagation()}})}}function S_(e){e.sort();let t=e[0],n=e[e.length-1];for(let e=0;e<t.length;e++)if(t[e]!==n[e])return e;return 0}var C_;function w_(){return(w_=t((()=>{ze(),b(),a_(),me(),H(),il(),Ic(),m_(),lr(),b_(),Ie(),st(),ye(),ge(),_e(),Yd(),mo(),as(),Su(),C_=e(r(),1)})))()}function T_(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,i=(0,E_.useRef)({isFocused:!1,isFocusVisible:t||x()}),[a,o]=(0,E_.useState)(!1),[s,c]=(0,E_.useState)(()=>i.current.isFocused&&i.current.isFocusVisible),l=(0,E_.useCallback)(()=>c(i.current.isFocused&&i.current.isFocusVisible),[]),u=(0,E_.useCallback)(e=>{i.current.isFocused=e,i.current.isFocusVisible=x(),o(e),l()},[l]);y(e=>{i.current.isFocusVisible=e,l()},[n,a],{enabled:a,isTextInput:n});let{focusProps:d}=Ae({isDisabled:r,onFocusChange:u}),{focusWithinProps:f}=g({isDisabled:!r,onFocusWithinChange:u});return{isFocused:a,isFocusVisible:s,focusProps:r?f:d}}var E_;function D_(){return(D_=t((()=>{B(),Ke(),mt(),E_=r()})))()}function O_(){N_=!0,setTimeout(()=>{N_=!1},500)}function k_(e){e.pointerType===`touch`&&O_()}function A_(){let e=we(null);if(e!==void 0)return P_===0&&typeof PointerEvent<`u`&&e.addEventListener(`pointerup`,k_),P_++,()=>{P_--,!(P_>0)&&typeof PointerEvent<`u`&&e.removeEventListener(`pointerup`,k_)}}function j_(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[a,o]=(0,M_.useState)(!1),s=(0,M_.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:``,target:null}).current;(0,M_.useEffect)(A_,[]);let{addGlobalListener:c,removeAllGlobalListeners:l}=R(),{hoverProps:u,triggerHoverEnd:d}=(0,M_.useMemo)(()=>{let e=(e,r)=>{if(s.pointerType=r,i||r===`touch`||s.isHovered||!f(e.currentTarget,U(e)))return;s.isHovered=!0;let l=e.currentTarget;s.target=l,c(we(U(e)),`pointerover`,e=>{s.isHovered&&s.target&&!f(s.target,U(e))&&a(e,e.pointerType)},{capture:!0}),t&&t({type:`hoverstart`,target:l,pointerType:r}),n&&n(!0),o(!0)},a=(e,t)=>{let i=s.target;s.pointerType=``,s.target=null,!(t===`touch`||!s.isHovered||!i)&&(s.isHovered=!1,l(),r&&r({type:`hoverend`,target:i,pointerType:t}),n&&n(!1),o(!1))},u={};return typeof PointerEvent<`u`&&(u.onPointerEnter=t=>{N_&&t.pointerType===`mouse`||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&f(e.currentTarget,U(e))&&a(e,e.pointerType)}),{hoverProps:u,triggerHoverEnd:a}},[t,n,r,i,s,c,l]);return(0,M_.useEffect)(()=>{i&&d({currentTarget:s.target},s.pointerType)},[i]),{hoverProps:u,isHovered:a}}var M_,N_,P_;function F_(){return(F_=t((()=>{ze(),ke(),ee(),M_=r(),N_=!1,P_=0})))()}function I_(e){let{selectionManager:t,collection:n,disabledKeys:r,ref:i,keyboardDelegate:a,layoutDelegate:o,orientation:s}=e,c=h_({usage:`search`,sensitivity:`base`}),l=t.disabledBehavior,u=(0,L_.useMemo)(()=>a||new Tp({collection:n,disabledKeys:r,disabledBehavior:l,ref:i,collator:c,layoutDelegate:o,orientation:s}),[a,o,n,r,i,c,l,s]),{collectionProps:d}=hh({...e,ref:i,selectionManager:t,keyboardDelegate:u});return{listProps:d}}var L_;function R_(){return(R_=t((()=>{vh(),Ep(),__(),L_=r()})))()}function z_(e){let{id:t,selectionManager:n,key:r,ref:i,shouldSelectOnPressUp:a,shouldUseVirtualFocus:o,focus:s,isDisabled:c,onAction:l,allowsDifferentPressOrigin:u,linkBehavior:d=`action`}=e,f=te();t=Le(t);let p=e=>{if(e.pointerType===`keyboard`&&_p(e))n.toggleSelection(r);else{if(n.selectionMode===`none`)return;if(n.isLink(r)){if(d===`selection`&&i.current){let t=n.getItemProps(r);f.open(i.current,e,t.href,t.routerOptions),n.setSelectedKeys(n.selectedKeys);return}if(d===`override`||d===`none`)return}n.selectionMode===`single`?n.isSelected(r)&&!n.disallowEmptySelection?n.toggleSelection(r):n.replaceSelection(r):e&&e.shiftKey?n.extendSelection(r):n.selectionBehavior===`toggle`||e&&(Me(e)||e.pointerType===`touch`||e.pointerType===`virtual`)?n.toggleSelection(r):n.replaceSelection(r)}};(0,H_.useEffect)(()=>{r===n.focusedKey&&n.isFocused&&(o?zt(i.current):s?s():lt()!==i.current&&i.current&&yt(i.current))},[i,r,n.focusedKey,n.childFocusStrategy,n.isFocused,o]),c||=n.isDisabled(r);let m={};!o&&!c?m={tabIndex:r===n.focusedKey?0:-1,onFocus(e){U(e)===i.current&&n.setFocusedKey(r)}}:c&&(m.onMouseDown=e=>{e.preventDefault()}),(0,H_.useEffect)(()=>{c&&n.focusedKey===r&&n.setFocusedKey(null)},[n,c,r]);let h=n.isLink(r)&&d===`override`,g=l&&e.UNSTABLE_itemBehavior===`action`,_=n.isLink(r)&&d!==`selection`&&d!==`none`,v=!c&&n.canSelectItem(r)&&!h&&!g,y=(l||_)&&!c,b=y&&(n.selectionBehavior===`replace`?!v:!v||n.isEmpty),x=y&&v&&n.selectionBehavior===`replace`,S=b||x,C=(0,H_.useRef)(null),w=S&&v,T=(0,H_.useRef)(!1),E=(0,H_.useRef)(!1),D=n.getItemProps(r),O=e=>{l&&(l(),i.current?.dispatchEvent(new CustomEvent(`react-aria-item-action`,{bubbles:!0}))),_&&i.current&&f.open(i.current,e,D.href,D.routerOptions)},k={ref:i};a?(k.onPressStart=e=>{C.current=e.pointerType,T.current=w,e.pointerType===`keyboard`&&(!S||V_(e.key))&&p(e)},u?(k.onPressUp=b?void 0:e=>{e.pointerType===`mouse`&&v&&p(e)},k.onPress=b?O:e=>{e.pointerType!==`keyboard`&&e.pointerType!==`mouse`&&v&&p(e)}):k.onPress=e=>{if(b||x&&e.pointerType!==`mouse`){if(e.pointerType===`keyboard`&&!B_(e.key))return;O(e)}else e.pointerType!==`keyboard`&&v&&p(e)}):(k.onPressStart=e=>{C.current=e.pointerType,T.current=w,E.current=b,v&&(e.pointerType===`mouse`&&!b||e.pointerType===`keyboard`&&(!y||V_(e.key)))&&p(e)},k.onPress=e=>{(e.pointerType===`touch`||e.pointerType===`pen`||e.pointerType===`virtual`||e.pointerType===`keyboard`&&S&&B_(e.key)||e.pointerType===`mouse`&&E.current)&&(S?O(e):v&&p(e))});let A=bp(n.collection);if(m[`data-collection`]=A,m[`data-key`]=r,k.preventFocusOnPress=o,o&&(k=W(k,{onPressStart(e){e.pointerType!==`touch`&&(n.setFocused(!0),n.setFocusedKey(r))},onPress(e){e.pointerType===`touch`&&(n.setFocused(!0),n.setFocusedKey(r))}})),D)for(let e of[`onPressStart`,`onPressEnd`,`onPressChange`,`onPress`,`onPressUp`,`onClick`])D[e]&&(k[e]=Se(k[e],D[e]));let{pressProps:j,isPressed:M}=br(k),N=x?e=>{C.current===`mouse`&&(e.stopPropagation(),e.preventDefault(),O(e))}:void 0,{longPressProps:P}=Um({isDisabled:!w,onLongPress(e){e.pointerType===`touch`&&(p(e),n.setSelectionBehavior(`toggle`))}}),F=e=>{C.current===`touch`&&T.current&&e.preventDefault()},I=d!==`none`&&n.isLink(r)?e=>{z.isOpening||e.preventDefault()}:void 0,L=W(m,v||b||o&&!c?j:{},w?P:{},{onDoubleClick:N,onDragStartCapture:F,onClick:I,id:t},o?{onMouseDown:e=>e.preventDefault()}:void 0),R=e=>{let t=e;for(;t&&t!==i.current;){let e=t.getAttribute(`data-collection`);if(e!=null)return e!==A;t=t.parentElement}return be(e)},B=L.onPointerDown;L.onPointerDown=e=>{let t=U(e);if(t&&t!==i.current&&R(t)){e.stopPropagation();return}B?.(e)};let ee=L.onMouseDown;return L.onMouseDown=e=>{let t=U(e);if(t&&t!==i.current&&R(t)){e.stopPropagation();return}ee?.(e)},{itemProps:L,isPressed:M,isSelected:n.isSelected(r),isFocused:n.isFocused&&n.focusedKey===r,isDisabled:c,allowsSelection:v,hasAction:S}}function B_(e){return e===`Enter`}function V_(e){return e===` `}var H_;function U_(){return(U_=t((()=>{De(),ze(),Sp(),ut(),ne(),H(),Ut(),C(),Nr(),Ie(),Km(),H_=r()})))()}function W_(e,t,n){let r=bt(e,{labelable:!0}),i=e.selectionBehavior||`toggle`,a=e.orientation||`vertical`,o=e.linkBehavior||(i===`replace`?`action`:`override`);i===`toggle`&&o===`action`&&(o=`override`);let{listProps:s}=I_({...e,ref:n,selectionManager:t.selectionManager,collection:t.collection,disabledKeys:t.disabledKeys,linkBehavior:o}),{focusWithinProps:c}=g({onFocusWithin:e.onFocus,onBlurWithin:e.onBlur,onFocusWithinChange:e.onFocusChange}),l=Le(e.id);Qd.set(t,{id:l,shouldUseVirtualFocus:e.shouldUseVirtualFocus,shouldSelectOnPressUp:e.shouldSelectOnPressUp,shouldFocusOnHover:e.shouldFocusOnHover,isVirtualized:e.isVirtualized,onAction:e.onAction,linkBehavior:o,UNSTABLE_itemBehavior:e.UNSTABLE_itemBehavior});let{labelProps:u,fieldProps:d}=Yl({...e,id:l,labelElementType:`span`});return{labelProps:u,listBoxProps:W(r,c,t.selectionManager.selectionMode===`multiple`?{"aria-multiselectable":`true`}:{},{role:`listbox`,"aria-orientation":a,...W(d,s)})}}function G_(){return(G_=t((()=>{m(),$d(),H(),mt(),Ie(),J(),R_()})))()}function K_(e){let{heading:t,"aria-label":n}=e,r=Le();return{itemProps:{role:`presentation`},headingProps:t?{id:r,role:`presentation`,onMouseDown:e=>{e.preventDefault()}}:{},groupProps:{role:`group`,"aria-label":n,"aria-labelledby":t?r:void 0}}}function q_(){return(q_=t((()=>{Ie()})))()}function J_(e,t,n){let{key:r}=e,i=Qd.get(t),a=e.isDisabled??t.selectionManager.isDisabled(r),o=e.isSelected??t.selectionManager.isSelected(r),s=e.shouldSelectOnPressUp??i?.shouldSelectOnPressUp,c=e.shouldFocusOnHover??i?.shouldFocusOnHover,l=e.shouldUseVirtualFocus??i?.shouldUseVirtualFocus,u=e.isVirtualized??i?.isVirtualized,d=qe(),f=qe(),p={role:`option`,"aria-disabled":a||void 0,"aria-selected":t.selectionManager.selectionMode===`none`?void 0:o,"aria-label":e[`aria-label`],"aria-labelledby":d,"aria-describedby":f},m=t.collection.getItem(r);if(u){let e=Number(m?.index);p[`aria-posinset`]=Number.isNaN(e)?void 0:e+1,p[`aria-setsize`]=wh(t.collection)}let h=i?.onAction?()=>i?.onAction?.(r):void 0,g=Zd(t,r),{itemProps:_,isPressed:v,isFocused:y,hasAction:b,allowsSelection:S}=z_({selectionManager:t.selectionManager,key:r,ref:n,shouldSelectOnPressUp:s,allowsDifferentPressOrigin:s&&c,isVirtualized:u,shouldUseVirtualFocus:l,isDisabled:a,onAction:h||m?.props?.onAction?Se(m?.props?.onAction,h):void 0,linkBehavior:i?.linkBehavior,UNSTABLE_itemBehavior:i?.UNSTABLE_itemBehavior,id:g}),{hoverProps:C}=j_({isDisabled:a||!c,onHoverStart(){x()||(t.selectionManager.setFocused(!0),t.selectionManager.setFocusedKey(r))}}),w=bt(m?.props);delete w.id;let T=L(m?.props);return{optionProps:{...p,...W(w,_,C,T),id:g},labelProps:{id:d},descriptionProps:{id:f},isFocused:y,isFocusVisible:y&&t.selectionManager.isFocused&&x(),isSelected:o,isDisabled:a,isPressed:v,allowsSelection:S,hasAction:b}}function Y_(){return(Y_=t((()=>{m(),$d(),B(),H(),U_(),F_(),C(),Ie(),Eh()})))()}function X_(){return window.ResizeObserver!==void 0}function Z_(e){let{ref:t,box:n,onResize:r}=e,i=V(r);(0,Q_.useEffect)(()=>{let e=t?.current;if(e){if(X_()){let t=new window.ResizeObserver(e=>{e.length&&i()});return t.observe(e,{box:n}),()=>{e&&t.unobserve(e)}}return window.addEventListener(`resize`,i,!1),()=>{window.removeEventListener(`resize`,i,!1)}}},[t,n])}var Q_;function $_(){return($_=t((()=>{d(),Q_=r()})))()}function ev(e){let{value:t=0,minValue:n=0,maxValue:r=100,valueLabel:i,isIndeterminate:a,formatOptions:o={style:`percent`}}=e,s=bt(e,{labelable:!0}),{labelProps:c,fieldProps:l}=Yl({...e,labelElementType:`span`});t=tu(t,n,r);let u=r-n,d=u===0?0:(t-n)/u,f=Eu(o);if(!a&&!i){let e=o.style===`percent`?d:t;i=f.format(e)}return{progressBarProps:W(s,{...l,"aria-valuenow":a?void 0:t,"aria-valuemin":n,"aria-valuemax":r,"aria-valuetext":a?void 0:i,role:`progressbar`}),labelProps:c}}function tv(){return(tv=t((()=>{m(),H(),J(),Ou()})))()}function nv(e,t){let n=0,r=0,i=0,a=0,o=0,s=0,c={},l=(t?.scale??1)>1;if(e.tagName===`BODY`||e.tagName===`HTML`){let l=document.documentElement;i=l.clientWidth,a=l.clientHeight,n=t?.width??i,r=t?.height??a,c.top=l.scrollTop||e.scrollTop,c.left=l.scrollLeft||e.scrollLeft,t&&(o=t.offsetTop,s=t.offsetLeft)}else({width:n,height:r,top:o,left:s}=pv(e,!1)),c.top=e.scrollTop,c.left=e.scrollLeft,i=n,a=r;return xt()&&(e.tagName===`BODY`||e.tagName===`HTML`)&&l&&(c.top=0,c.left=0,o=t?.pageTop??0,s=t?.pageLeft??0),{width:n,height:r,totalWidth:i,totalHeight:a,scroll:c,top:o,left:s}}function rv(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function iv(e,t,n,r,i,a,o){let s=i.scroll[e]??0,c=r[bv[e]],l=o[e]+r.scroll[_v[e]]+a,u=o[e]+r.scroll[_v[e]]+c-a,d=t-s+r.scroll[_v[e]]+o[e]-r[_v[e]],f=t-s+n+r.scroll[_v[e]]+o[e]-r[_v[e]];return d<l?l-d:f>u?Math.max(u-f,l-d):0}function av(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function ov(e){if(Sv[e])return Sv[e];let[t,n]=e.split(` `),r=_v[t]||`right`,i=yv[r];_v[n]||(n=`center`);let a=bv[r],o=bv[i];return Sv[e]={placement:t,crossPlacement:n,axis:r,crossAxis:i,size:a,crossSize:o},Sv[e]}function sv(e,t,n,r,i,a,o,s,c,l,u){let{placement:d,crossPlacement:f,axis:p,crossAxis:m,size:h,crossSize:g}=r,_={};_[m]=e[m]??0,f===`center`?_[m]+=((e[g]??0)-(n[g]??0))/2:f!==m&&(_[m]+=(e[g]??0)-(n[g]??0)),_[m]+=a;let v=e[m]-n[g]+c+l,y=e[m]+e[g]-c-l;if(_[m]=tu(_[m],v,y),d===p){let t=s?u[h]:u[xv[h]];_[vv[p]]=Math.floor(t-e[p]+i)}else _[p]=Math.floor(e[p]+e[h]+i);return _}function cv(e,t,n,r,i,a,o,s,c,l,u){let d=(e.top==null?c[xv.height]-(e.bottom??0)-o:e.top)-(c.scroll.top??0),f=l?n.top:0,p={top:Math.max(t.top+f,(u?.offsetTop??t.top)+f),bottom:Math.min(t.top+t.height+f,(u?.offsetTop??0)+(u?.height??0))};return s===`top`?Math.max(0,d+o-p.top-((i.top??0)+(i.bottom??0)+a)):Math.max(0,p.bottom-d-((i.top??0)+(i.bottom??0)+a))}function lv(e,t,n,r,i,a,o,s){let{placement:c,axis:l,size:u}=a;return c===l?Math.max(0,n[l]-(o.scroll[l]??0)-(e[l]+(s?t[l]:0))-(r[l]??0)-r[vv[l]]-i):Math.max(0,e[u]+e[l]+(s?t[l]:0)-n[l]-n[u]+(o.scroll[l]??0)-(r[l]??0)-r[vv[l]]-i)}function uv(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=ov(e),{size:y,crossAxis:b,crossSize:x,placement:S,crossPlacement:C}=v,w=sv(t,s,n,v,u,d,l,f,m,h,c),T=u,E=lv(s,l,t,i,a+u,v,c,g);if(o&&n[y]>E){let e=ov(`${vv[S]} ${C}`),r=sv(t,s,n,e,u,d,l,f,m,h,c);lv(s,l,t,i,a+u,e,c,g)>E&&(v=e,w=r,T=u)}let D=`bottom`;v.axis===`top`?v.placement===`top`?D=`top`:v.placement===`bottom`&&(D=`bottom`):v.crossAxis===`top`&&(v.crossPlacement===`top`?D=`bottom`:v.crossPlacement===`bottom`&&(D=`top`));let O=iv(b,w[b],n[x],s,c,a,l);w[b]+=O;let k=cv(w,s,l,f,i,a,n.height,D,c,g,_);p&&p<k&&(k=p),n.height=Math.min(n.height,k),w=sv(t,s,n,v,T,d,l,f,m,h,c),O=iv(b,w[b],n[x],s,c,a,l),w[b]+=O;let A={},j=t[b]-w[b]-i[_v[b]],M=j+.5*t[x],N=m/2+h,P=_v[b]===`left`?(i.left??0)+(i.right??0):(i.top??0)+(i.bottom??0),F=n[x]-P-m/2-h;A[b]=tu(tu(M,t[b]+m/2-(w[b]+i[_v[b]]),t[b]+t[x]-m/2-(w[b]+i[_v[b]])),N,F),{placement:S,crossPlacement:C}=v,m?j=A[b]:C===`right`?j+=t[x]:C===`center`&&(j+=t[x]/2);let I=S===`left`||S===`top`?n[y]:0,L={x:S===`top`||S===`bottom`?j:I,y:S===`left`||S===`right`?j:I};return{position:w,maxHeight:k,arrowOffsetLeft:A.left,arrowOffsetTop:A.top,placement:S,triggerAnchorPoint:L}}function dv(e){let{placement:t,targetNode:n,overlayNode:r,scrollNode:i,padding:a,shouldFlip:o,boundaryElement:s,offset:c,crossOffset:l,maxHeight:u,arrowSize:d=0,arrowBoundaryOffset:p=0,targetRect:m}=e,h=Cv(),g=r instanceof HTMLElement?hv(r):document.documentElement,_=g===document.documentElement,v=window.getComputedStyle(g).position,y=!!v&&v!==`static`,b=_?pv(n,!1,m):mv(n,g,!1,m);if(!_){let{marginTop:e,marginLeft:t}=window.getComputedStyle(n);b.top+=parseInt(e,10)||0,b.left+=parseInt(t,10)||0}let x=pv(r,!0),S=av(r);x.width+=(S.left??0)+(S.right??0),x.height+=(S.top??0)+(S.bottom??0);let C=rv(i),w=nv(s,h),T=nv(g,h),E;if((s.tagName===`BODY`||s.tagName===`HTML`)&&!_){let e=fv(g,!1);E={top:-(e.top-w.top),left:-(e.left-w.left),width:0,height:0}}else E=(s.tagName===`BODY`||s.tagName===`HTML`)&&_?{top:0,left:0,width:0,height:0}:mv(s,g,!1);let D=f(s,g);return uv(t,b,x,C,S,a,o,w,T,E,c,l,y,u,d,p,D,h)}function fv(e,t){let{top:n,left:r,width:i,height:a}=e.getBoundingClientRect();return t&&e instanceof e.ownerDocument.defaultView.HTMLElement&&(i=e.offsetWidth,a=e.offsetHeight),{top:n,left:r,width:i,height:a}}function pv(e,t,n){let{top:r,left:i,width:a,height:o}=n||fv(e,t),{scrollTop:s,scrollLeft:c,clientTop:l,clientLeft:u}=document.documentElement;return{top:r+s-l,left:i+c-u,width:a,height:o}}function mv(e,t,n,r){let i=window.getComputedStyle(e),a;if(i.position===`fixed`)a=r||fv(e,n);else{a=pv(e,n,r);let i=pv(t,n),o=window.getComputedStyle(t);i.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,i.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,a.top-=i.top,a.left-=i.left}return a.top-=parseInt(i.marginTop,10)||0,a.left-=parseInt(i.marginLeft,10)||0,a}function hv(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position===`static`&&!gv(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!gv(t);)t=t.parentElement;return t||document.documentElement}function gv(e){let t=window.getComputedStyle(e);return t.transform!==`none`||/transform|perspective/.test(t.willChange)||t.filter!==`none`||t.contain===`paint`||`backdropFilter`in t&&t.backdropFilter!==`none`||`WebkitBackdropFilter`in t&&t.WebkitBackdropFilter!==`none`}var _v,vv,yv,bv,xv,Sv,Cv;function wv(){return(wv=t((()=>{me(),ze(),_v={top:`top`,bottom:`top`,left:`left`,right:`left`},vv={top:`bottom`,bottom:`top`,left:`right`,right:`left`},yv={top:`left`,left:`top`},bv={top:`height`,left:`width`},xv={width:`totalWidth`,height:`totalHeight`},Sv={},Cv=()=>typeof document<`u`?window.visualViewport:null})))()}function Tv(e){let{direction:t}=A(),{arrowSize:n,targetRef:r,overlayRef:i,arrowRef:a,scrollRef:o=i,placement:s=`bottom`,containerPadding:c=12,shouldFlip:l=!0,boundaryElement:u=typeof document<`u`?document.body:null,offset:d=0,crossOffset:f=0,shouldUpdatePosition:p=!0,isOpen:m=!0,onClose:h,maxHeight:g,arrowBoundaryOffset:_=0,getTargetRect:v}=e,[y,b]=(0,Ov.useState)(null),x=[p,s,i.current,r.current,a?.current,o.current,c,l,u,d,f,m,t,g,_,n],S=(0,Ov.useRef)(kv?.scale);(0,Ov.useEffect)(()=>{m&&(S.current=kv?.scale)},[m]);let C=(0,Ov.useCallback)(()=>{if(p===!1||!m||!i.current||!r.current||!u||kv?.scale!==S.current)return;let e=null;if(o.current&&je(o.current)){let t=lt()?.getBoundingClientRect(),n=o.current.getBoundingClientRect();e={type:`top`,offset:(t?.top??0)-n.top},e.offset>n.height/2&&(e.type=`bottom`,e.offset=(t?.bottom??0)-n.bottom)}let h=i.current;!g&&i.current&&(h.style.top=`0px`,h.style.bottom=``,h.style.maxHeight=(window.visualViewport?.height??window.innerHeight)+`px`);let y=dv({placement:Dv(s,t),overlayNode:i.current,targetNode:r.current,scrollNode:o.current||i.current,padding:c,shouldFlip:l,boundaryElement:u,offset:d,crossOffset:f,maxHeight:g,arrowSize:n??(a?.current?fv(a.current,!0).width:0),arrowBoundaryOffset:_,targetRect:v?.(r.current)});if(!y.position)return;h.style.top=``,h.style.bottom=``,h.style.left=``,h.style.right=``,Object.keys(y.position).forEach(e=>h.style[e]=y.position[e]+`px`),h.style.maxHeight=y.maxHeight==null?``:y.maxHeight+`px`;let x=lt();if(e&&x&&o.current){let t=x.getBoundingClientRect(),n=o.current.getBoundingClientRect(),r=t[e.type]-n[e.type];o.current.scrollTop+=r-e.offset}b(y)},x);ve(C,x),Ev(C),Z_({ref:i,onResize:C}),Z_({ref:r,onResize:C});let w=(0,Ov.useRef)(!1);ve(()=>{let e,t=()=>{w.current=!0,clearTimeout(e),e=setTimeout(()=>{w.current=!1},500),C()},n=()=>{w.current&&t()};return kv?.addEventListener(`resize`,t),kv?.addEventListener(`scroll`,n),()=>{kv?.removeEventListener(`resize`,t),kv?.removeEventListener(`scroll`,n)}},[C]);let T=(0,Ov.useCallback)(()=>{w.current||h?.()},[h,w]);return Xm({triggerRef:r,isOpen:m,onClose:h&&T}),{overlayProps:{style:{position:y?`absolute`:`fixed`,top:y?void 0:0,left:y?void 0:0,zIndex:1e5,...y?.position,maxHeight:y?.maxHeight??`100vh`}},placement:y?.placement??null,triggerAnchorPoint:y?.triggerAnchorPoint??null,arrowProps:{"aria-hidden":`true`,role:`presentation`,style:{left:y?.arrowOffsetLeft,top:y?.arrowOffsetTop}},updatePosition:C}}function Ev(e){ve(()=>(window.addEventListener(`resize`,e,!1),()=>{window.removeEventListener(`resize`,e,!1)}),[e])}function Dv(e,t){return t===`rtl`?e.replace(`start`,`right`).replace(`end`,`left`):e.replace(`start`,`left`).replace(`end`,`right`)}var Ov,kv;function Av(){return(Av=t((()=>{wv(),ze(),$m(),ge(),_e(),$_(),Ov=r(),kv=typeof document<`u`?window.visualViewport:null})))()}function jv(e,t){let{triggerRef:n,popoverRef:r,groupRef:i,isNonModal:a,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s,...c}=e,l=c.trigger===`SubmenuTrigger`,{overlayProps:u,underlayProps:d}=Ce({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!a||l,isKeyboardDismissDisabled:o,shouldCloseOnInteractOutside:s},i??r),{overlayProps:f,arrowProps:p,placement:m,triggerAnchorPoint:h}=Tv({...c,targetRef:n,overlayRef:r,isOpen:t.isOpen,onClose:a&&!l?t.close:null,getTargetRect:c.getTargetRect??(t.point?()=>new DOMRect(t.point.x,t.point.y,0,0):void 0)});rt({isDisabled:a||!t.isOpen}),(0,Mv.useEffect)(()=>{if(t.isOpen&&r.current)return a?Fe(i?.current??r.current):xe([i?.current??r.current],{shouldUseInert:!0})},[a,t.isOpen,r,i]);let{focusWithinProps:_}=g(e);return{popoverProps:W(u,f,_),arrowProps:p,underlayProps:d,placement:m,triggerAnchorPoint:h}}var Mv;function Nv(){return(Nv=t((()=>{pt(),Av(),mt(),H(),Ze(),Re(),Mv=r()})))()}var Pv;function Fv(){return(Fv=t((()=>{Pv=new WeakMap})))()}function Iv(e,t,n){let{value:r,children:i,"aria-label":a,"aria-labelledby":o,onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f}=e,p=e.isDisabled||t.isDisabled,m=t.selectedValue===r,h=e=>{e.stopPropagation(),t.setSelectedValue(r)},{pressProps:g,isPressed:_}=br({onPressStart:s,onPressEnd:c,onPressChange:l,onPress:u,onPressUp:d,onClick:f,isDisabled:p}),{pressProps:v,isPressed:y}=br({onPressStart:s,onPressEnd:c,onPressChange:l,onPressUp:d,onClick:f,isDisabled:p,onPress(e){u?.(e),t.setSelectedValue(r),n.current?.focus()}}),{focusableProps:b}=Xe(W(e,{onFocus:()=>t.setLastFocusedValue(r)}),n),x=W(g,b),S=bt(e,{labelable:!0}),C=-1;t.selectedValue==null?(t.lastFocusedValue===r||t.lastFocusedValue==null)&&(C=0):t.selectedValue===r&&(C=0),p&&(C=void 0);let{name:w,form:T,descriptionId:E,errorMessageId:D,validationBehavior:O}=Pv.get(t);_l(n,t.defaultSelectedValue,t.setSelectedValue),bl({validationBehavior:O},t,n);let k=Dl();return{labelProps:W(v,(0,Lv.useMemo)(()=>({onClick:e=>e.preventDefault(),onMouseDown:e=>e.preventDefault()}),[])),inputProps:W(S,{...x,type:`radio`,name:w,form:T,tabIndex:C,disabled:p,required:t.isRequired&&O===`native`,checked:m,value:r,onChange:h,"aria-describedby":[e[`aria-describedby`],k.id,t.isInvalid?D:null,E].filter(Boolean).join(` `)||void 0}),descriptionProps:k,isDisabled:p,isSelected:m,isPressed:_||y}}var Lv;function Rv(){return(Rv=t((()=>{m(),H(),Fv(),it(),yl(),Tl(),Nr(),kl(),Lv=r()})))()}function zv(e,t){let{name:n,form:r,isReadOnly:i,isRequired:a,isDisabled:o,orientation:s=`vertical`,validationBehavior:c=`aria`}=e,{direction:l}=A(),{isInvalid:u,validationErrors:d,validationDetails:f}=t.displayValidation,{labelProps:m,fieldProps:h,descriptionProps:_,errorMessageProps:v}=Xl({...e,labelElementType:`span`,isInvalid:t.isInvalid,errorMessage:e.errorMessage||d}),y=bt(e,{labelable:!0}),{focusWithinProps:b}=g({onBlurWithin(n){e.onBlur?.(n),t.selectedValue||t.setLastFocusedValue(null)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});function x(e,n){let r=p(n.currentTarget,{from:U(n),accept:e=>e instanceof Qe(e).HTMLInputElement&&e.type===`radio`}),i;return e===`next`?(i=r.nextNode(),i||=(r.currentNode=n.currentTarget,r.firstChild())):(i=r.previousNode(),i||=(r.currentNode=n.currentTarget,r.lastChild())),i?(i.focus(),t.setSelectedValue(i.value),!0):!1}let{keyboardProps:S}=$e({shortcuts:{ArrowRight:e=>x(l===`rtl`&&s!==`vertical`?`prev`:`next`,e),ArrowLeft:e=>x(l===`rtl`&&s!==`vertical`?`next`:`prev`,e),ArrowDown:e=>x(`next`,e),ArrowUp:e=>x(`prev`,e)},allowRepeats:!0}),C=Le(n);return Pv.set(t,{name:C,form:r,descriptionId:_.id,errorMessageId:v.id,validationBehavior:c}),{radioGroupProps:W(y,{role:`radiogroup`,...S,"aria-invalid":t.isInvalid||void 0,"aria-errormessage":e[`aria-errormessage`],"aria-readonly":i||void 0,"aria-required":a||void 0,"aria-disabled":o||void 0,"aria-orientation":s,...h,...b}),labelProps:m,descriptionProps:_,errorMessageProps:v,isInvalid:u,validationErrors:d,validationDetails:f}}function Bv(){return(Bv=t((()=>{m(),ze(),I(),ke(),H(),Fv(),Zl(),mt(),Ie(),st(),_e()})))()}var Vv;function Hv(){return(Hv=t((()=>{Vv={},Vv={"Clear search":`مسح البحث`}})))()}var Uv;function Wv(){return(Wv=t((()=>{Uv={},Uv={"Clear search":`Изчистване на търсене`}})))()}var Gv;function Kv(){return(Kv=t((()=>{Gv={},Gv={"Clear search":`Vymazat hledání`}})))()}var qv;function Jv(){return(Jv=t((()=>{qv={},qv={"Clear search":`Ryd søgning`}})))()}var Yv;function Xv(){return(Xv=t((()=>{Yv={},Yv={"Clear search":`Suche zurücksetzen`}})))()}var Zv;function Qv(){return(Qv=t((()=>{Zv={},Zv={"Clear search":`Απαλοιφή αναζήτησης`}})))()}var $v;function ey(){return(ey=t((()=>{$v={},$v={"Clear search":`Clear search`}})))()}var ty;function ny(){return(ny=t((()=>{ty={},ty={"Clear search":`Borrar búsqueda`}})))()}var ry;function iy(){return(iy=t((()=>{ry={},ry={"Clear search":`Tühjenda otsing`}})))()}var ay;function oy(){return(oy=t((()=>{ay={},ay={"Clear search":`Tyhjennä haku`}})))()}var sy;function cy(){return(cy=t((()=>{sy={},sy={"Clear search":`Effacer la recherche`}})))()}var ly;function uy(){return(uy=t((()=>{ly={},ly={"Clear search":`נקה חיפוש`}})))()}var dy;function fy(){return(fy=t((()=>{dy={},dy={"Clear search":`Obriši pretragu`}})))()}var py;function my(){return(my=t((()=>{py={},py={"Clear search":`Keresés törlése`}})))()}var hy;function gy(){return(gy=t((()=>{hy={},hy={"Clear search":`Cancella ricerca`}})))()}var _y;function vy(){return(vy=t((()=>{_y={},_y={"Clear search":`検索をクリア`}})))()}var yy;function by(){return(by=t((()=>{yy={},yy={"Clear search":`검색 지우기`}})))()}var xy;function Sy(){return(Sy=t((()=>{xy={},xy={"Clear search":`Išvalyti iešką`}})))()}var Cy;function wy(){return(wy=t((()=>{Cy={},Cy={"Clear search":`Notīrīt meklēšanu`}})))()}var Ty;function Ey(){return(Ey=t((()=>{Ty={},Ty={"Clear search":`Tøm søk`}})))()}var Dy;function Oy(){return(Oy=t((()=>{Dy={},Dy={"Clear search":`Zoekactie wissen`}})))()}var ky;function Ay(){return(Ay=t((()=>{ky={},ky={"Clear search":`Wyczyść zawartość wyszukiwania`}})))()}var jy;function My(){return(My=t((()=>{jy={},jy={"Clear search":`Limpar pesquisa`}})))()}var Ny;function Py(){return(Py=t((()=>{Ny={},Ny={"Clear search":`Limpar pesquisa`}})))()}var Fy;function Iy(){return(Iy=t((()=>{Fy={},Fy={"Clear search":`Ştergeţi căutarea`}})))()}var Ly;function Ry(){return(Ry=t((()=>{Ly={},Ly={"Clear search":`Очистить поиск`}})))()}var zy;function By(){return(By=t((()=>{zy={},zy={"Clear search":`Vymazať vyhľadávanie`}})))()}var Vy;function Hy(){return(Hy=t((()=>{Vy={},Vy={"Clear search":`Počisti iskanje`}})))()}var Uy;function Wy(){return(Wy=t((()=>{Uy={},Uy={"Clear search":`Obriši pretragu`}})))()}var Gy;function Ky(){return(Ky=t((()=>{Gy={},Gy={"Clear search":`Rensa sökning`}})))()}var qy;function Jy(){return(Jy=t((()=>{qy={},qy={"Clear search":`Aramayı temizle`}})))()}var Yy;function Xy(){return(Xy=t((()=>{Yy={},Yy={"Clear search":`Очистити пошук`}})))()}var Zy;function Qy(){return(Qy=t((()=>{Zy={},Zy={"Clear search":`清除搜索`}})))()}var $y;function eb(){return(eb=t((()=>{$y={},$y={"Clear search":`清除搜尋條件`}})))()}var tb;function nb(){return(nb=t((()=>{Hv(),Wv(),Kv(),Jv(),Xv(),Qv(),ey(),ny(),iy(),oy(),cy(),uy(),fy(),my(),gy(),vy(),by(),Sy(),wy(),Ey(),Oy(),Ay(),My(),Py(),Iy(),Ry(),By(),Hy(),Wy(),Ky(),Jy(),Xy(),Qy(),eb(),tb={},tb={"ar-AE":Vv,"bg-BG":Uv,"cs-CZ":Gv,"da-DK":qv,"de-DE":Yv,"el-GR":Zv,"en-US":$v,"es-ES":ty,"et-EE":ry,"fi-FI":ay,"fr-FR":sy,"he-IL":ly,"hr-HR":dy,"hu-HU":py,"it-IT":hy,"ja-JP":_y,"ko-KR":yy,"lt-LT":xy,"lv-LV":Cy,"nb-NO":Ty,"nl-NL":Dy,"pl-PL":ky,"pt-BR":jy,"pt-PT":Ny,"ro-RO":Fy,"ru-RU":Ly,"sk-SK":zy,"sl-SI":Vy,"sr-SP":Uy,"sv-SE":Gy,"tr-TR":qy,"uk-UA":Yy,"zh-CN":Zy,"zh-TW":$y}})))()}function rb(e){return e&&e.__esModule?e.default:e}function ib(e,t,n){let r=E(rb(tb),`@react-aria/searchfield`),{isDisabled:i,isReadOnly:a,onSubmit:o,onClear:s,type:c=`search`}=e,{keyboardProps:l}=$e({isDisabled:i||a,shortcuts:{Enter:()=>{if(o){o(t.value);return}return!1},Escape:()=>{if(t.value===``&&(!n.current||n.current.value===``))return!1;t.setValue(``),s?.()}}}),u=()=>{t.setValue(``),s&&s()},d=()=>{n.current?.focus()},{labelProps:f,inputProps:p,descriptionProps:m,errorMessageProps:h,...g}=Cu({...e,value:t.value,onChange:t.setValue,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp,type:c},n);return{labelProps:f,inputProps:W(l,{...p,defaultValue:void 0}),clearButtonProps:{"aria-label":r.format(`Clear search`),excludeFromTabOrder:!0,preventFocusOnPress:!0,isDisabled:i||a,onPress:u,onPressStart:d},descriptionProps:m,errorMessageProps:h,...g}}function ab(){return(ab=t((()=>{Tu(),nb(),H(),st(),le()})))()}function ob(e,t,n){let{keyboardDelegate:r,isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c=`aria`}=e,l=h_({usage:`search`,sensitivity:`base`}),u=(0,sb.useMemo)(()=>r||new Tp(t.collection,t.disabledKeys,n,l),[r,t.collection,t.disabledKeys,l,n]),{menuTriggerProps:d,menuProps:p}=ih({isDisabled:i,type:`listbox`},t,n),{keyboardProps:m}=$e({shortcuts:{ArrowLeft:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyAbove?.(t.selectedKey);e!=null&&t.setSelectedKey(e)},ArrowRight:()=>{if(t.selectionManager.selectionMode===`multiple`)return!1;let e=t.selectedKey==null?u.getFirstKey?.():u.getKeyBelow?.(t.selectedKey);e!=null&&t.setSelectedKey(e)}},allowRepeats:!0,onKeyDown:e.onKeyDown,onKeyUp:e.onKeyUp}),{typeSelectProps:h}=sh({keyboardDelegate:u,selectionManager:t.selectionManager,onTypeSelect(e){t.setSelectedKey(e)}}),{isInvalid:g,validationErrors:_,validationDetails:v}=t.displayValidation,{labelProps:y,fieldProps:b,descriptionProps:x,errorMessageProps:S}=Xl({...e,labelElementType:`span`,isInvalid:g,errorMessage:e.errorMessage||_});t.selectionManager.selectionMode===`multiple`&&(h={});let C=bt(e,{labelable:!0}),w=W(h,d,b),T=Le();return cb.set(t,{isDisabled:i,isRequired:a,name:o,form:s,validationBehavior:c}),{labelProps:{...y,onClick:()=>{e.isDisabled||(n.current?.focus(),ht(`keyboard`))}},triggerProps:W(C,{...w,isDisabled:i,onKeyDown:Se(w.onKeyDown,m.onKeyDown),onKeyUp:m.onKeyUp,"aria-labelledby":[T,w[`aria-labelledby`],w[`aria-label`]&&!w[`aria-labelledby`]?w.id:null].filter(Boolean).join(` `),onFocus(n){t.isFocused||(e.onFocus&&e.onFocus(n),e.onFocusChange&&e.onFocusChange(!0),t.setFocused(!0))},onBlur(n){t.isOpen||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))}}),valueProps:{id:T},menuProps:{...p,onAction:void 0,autoFocus:t.focusStrategy||!0,shouldSelectOnPressUp:!0,shouldFocusOnHover:!0,disallowEmptySelection:!0,linkBehavior:`selection`,onBlur:n=>{f(n.currentTarget,n.relatedTarget)||(e.onBlur&&e.onBlur(n),e.onFocusChange&&e.onFocusChange(!1),t.setFocused(!1))},"aria-labelledby":[b[`aria-labelledby`],w[`aria-label`]&&!b[`aria-labelledby`]?w.id:null].filter(Boolean).join(` `)},descriptionProps:x,errorMessageProps:S,isInvalid:g,validationErrors:_,validationDetails:v,hiddenSelectProps:{isDisabled:i,name:o,label:e.label,state:t,triggerRef:n,form:s}}}var sb,cb;function lb(){return(lb=t((()=>{m(),Ep(),H(),ze(),B(),__(),Zl(),Ie(),st(),oh(),dh(),sb=r(),cb=new WeakMap})))()}function ub(e,t,n){let{labelProps:r,inputProps:i,isSelected:a,...o}=Ul(e,t,n);return{labelProps:r,inputProps:{...i,role:`switch`,checked:a},isSelected:a,...o}}function db(){return(db=t((()=>{Gl()})))()}function fb(...e){let t=e.filter(e=>typeof e==`string`&&e.length>0).join(` `);return t.length>0?t:void 0}function Y(e){let t={};for(let[n,r]of Object.entries(e))r!==void 0&&(t[n]=r);return t}function pb(e,t){return e?t:{}}function mb(e){return Lb[e]}function hb(e){return c(_b,Ib[e.size],mb(e.variant),e.variant===`icon`?Rb[e.size]:void 0)}var gb,_b,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb;function zb(){return(zb=t((()=>{l(),gb=o`
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
`,_b=u`
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
`,vb=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--control-gap);
`,yb=u`
  opacity: 0;
`,bb=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;

  & > svg {
    width: 1em;
    height: 1em;
  }
`,xb=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,Sb=u`
  width: 1em;
  height: 1em;
  border-radius: 9999px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  animation: ${gb} 0.8s linear infinite;
`,Cb=u`
  height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,wb=u`
  height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,Tb=u`
  height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,Eb=u`
  padding-inline: var(--btn-icon-padding-x-sm);
`,Db=u`
  padding-inline: var(--btn-icon-padding-x-md);
`,Ob=u`
  padding-inline: var(--btn-icon-padding-x-lg);
`,kb=(e,t,n=`hover`)=>{let r=n===`hover`?`-hover`:``;return u`
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
  `},Ab=kb(`primary`,`var(--btn-primary-bg)`),jb=kb(`secondary`,`var(--btn-secondary-bg)`),Mb=kb(`tertiary`,`var(--btn-tertiary-bg-hover)`),Nb=kb(`destructive`,`var(--btn-destructive-bg)`),Pb=kb(`primary`,`var(--btn-primary-bg)`,`resting`),Fb=u`
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
`,Ib={small:Cb,medium:wb,large:Tb},Lb={primary:Ab,secondary:jb,tertiary:Mb,icon:Fb,destructive:Nb,selected:Pb},Rb={small:Eb,medium:Db,large:Ob}})))()}var Bb,Vb,Hb;function Ub(){return(Ub=t((()=>{l(),Bb=e(r()),H(),Lr(),Ft(),Ee(),a(),zb(),Vb=G(),Hb=Bb.forwardRef(function(e,t){let{variant:n=`primary`,size:r=`medium`,icon:a,iconPosition:o=`start`,isLoading:s=!1,loadingLabel:l,disabled:u=!1,children:d,onPress:f,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-describedby":_,"aria-labelledby":v,"aria-label":y,formAction:b,onClick:x,onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O,className:k,domProps:A,name:j,"data-testid":M}=e,{t:N}=i(`shared-module`),P=l??N(`button.loading`),F=u||s,I=Bb.useId(),L=Bb.useId(),R=fb(_,s?I:void 0),z=y,B=z?void 0:v??L,ee=Nt(t),{buttonProps:te,isPressed:V}=Ir({isDisabled:F,...Y({onPress:f,onClick:x,onPressStart:p,onPressEnd:m,onPressChange:h,onPressUp:g,"aria-label":z,"aria-describedby":R,"aria-labelledby":B})},ee),ne=c(hb({size:r,variant:n}),k),re=W(te,A??{},{onPointerDown:S,onPointerUp:C,onPointerCancel:w,onKeyDown:T,onKeyUp:E,onFocus:D,onBlur:O});return(0,Vb.jsxs)(`button`,{...re,ref:ee,className:ne,"data-pressed":V?`true`:`false`,"data-disabled-reason":s?`loading`:F?`disabled`:void 0,"data-testid":M,"aria-busy":s?`true`:void 0,formAction:b,disabled:F,type:e.type??`button`,name:j,children:[(0,Vb.jsxs)(`span`,{className:c(vb,s?yb:void 0),children:[a&&o===`start`?(0,Vb.jsx)(`span`,{className:bb,children:a}):null,(0,Vb.jsx)(`span`,{id:B===L?L:void 0,children:d}),a&&o===`end`?(0,Vb.jsx)(`span`,{className:bb,children:a}):null]}),s?(0,Vb.jsxs)(Vb.Fragment,{children:[(0,Vb.jsx)(`span`,{className:xb,"aria-hidden":`true`,children:(0,Vb.jsx)(`span`,{className:Sb})}),(0,Vb.jsx)(vt,{id:I,children:P})]}):null]})})})))()}function Wb(e){if(typeof e!=`object`||!e)return e;if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(xx&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&e.constructor!==Object)return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=Wb(e[t]));return r}function Gb(e,t,n=new WeakMap){if(e===t)return!0;if(Bx(e)||Bx(t))return Object.is(e,t);if(hx(e)&&hx(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(Vx(e,r)||Vx(t,i))return Object.is(e,t);if(!r.length&&Array.isArray(e)!==Array.isArray(t))return!1;let a=n.get(e);if(a&&a.has(t))return!0;if(a)a.add(t);else{let r=new WeakSet;r.add(t),n.set(e,r)}for(let i of r){let r=e[i];if(!(i in t))return!1;if(i!==`ref`){let e=t[i];if(hx(r)&&hx(e)||(vx(r)||Array.isArray(r))&&(vx(e)||Array.isArray(e))?!Gb(r,e,n):!Object.is(r,e))return!1}}return!0}function Kb(){let e=X.useRef(!1),t=X.useRef(void 0);return{resyncIfNeeded:X.useCallback((n,r,i)=>{if(n&&e.current){let e=r();Gb(t.current,e)||i(e)}e.current=!0},[]),snapshot:X.useCallback((e,n)=>{e&&(t.current=Wb(n()))},[])}}function qb(e){let t=Ix(),{control:n=t,disabled:r,name:i,exact:a}=e||{},[o,s]=X.useState(()=>({...n._formState,defaultValues:n._defaultValues})),c=X.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),{resyncIfNeeded:l,snapshot:u}=Kb();return Rx(()=>{let e=()=>({...n._formState,defaultValues:n._defaultValues});l(!r,e,s);let t=n._subscribe({name:i,formState:c.current,exact:a,callback:e=>{!r&&s({...n._formState,...e,defaultValues:n._defaultValues})}});return()=>{t(),u(!r,e)}},[i,r,a,l,u]),X.useEffect(()=>{c.current.isValid&&n._setValid(!0)},[n]),X.useMemo(()=>Lx(o,n,c.current,!1),[o,n])}function Jb(e){let t=Ix(),{control:n=t,name:r,defaultValue:i,disabled:a,exact:o,compute:s}=e||{},c=X.useRef(i),l=X.useRef(s),u=X.useRef(void 0),d=X.useRef(n),f=X.useRef(r);l.current=s;let[p,m]=X.useState(()=>{let e=n._getWatch(r,c.current);return l.current?l.current(e):e}),h=X.useCallback(e=>{let t=Ux(r,n._names,e||n._formValues,!1,c.current);return l.current?l.current(t):t},[n._formValues,n._names,r]),g=X.useCallback(e=>{if(!a){let t=Ux(r,n._names,e||n._formValues,!1,c.current);if(l.current){let e=l.current(t);Gb(e,u.current)||(m(e),u.current=e)}else m(t)}},[n._formValues,n._names,a,r]),{resyncIfNeeded:_,snapshot:v}=Kb(),y=X.useRef(g);y.current=g;let b=X.useRef(h);b.current=h,Rx(()=>{d.current!==n||!Gb(f.current,r)?(d.current=n,f.current=r,y.current()):_(!a,()=>b.current(),e=>{m(e),u.current=e});let e=n._subscribe({name:r,formState:{values:!0},exact:o,callback:e=>{y.current(e.values)}});return()=>{e(),v(!a,()=>b.current())}},[n,o,r,a,_,v]),X.useEffect(()=>n._removeUnmounted());let x=d.current!==n,S=f.current;return X.useMemo(()=>{if(a)return!1;let e=!x&&!Gb(S,r);return x||e},[a,x,r,S])?h():p}function Yb(e){let t=Ix(),{name:n,disabled:r,control:i=t,shouldUnregister:a,defaultValue:o,exact:s=!0}=e,c=bx(i._names.array,n),l=Jb({control:i,name:n,defaultValue:X.useMemo(()=>Z(i._formValues,n,Z(i._defaultValues,n,o)),[i,n,o]),exact:s}),u=qb({control:i,name:n,exact:s}),d=X.useRef(e),f=X.useRef(null),p=X.useRef(i.register(n,{...e.rules,value:l,...Mx(e.disabled)?{disabled:e.disabled}:{}}));d.current=e;let m=X.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!Z(u.errors,n)},isDirty:{enumerable:!0,get:()=>!!Z(u.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!Z(u.touchedFields,n)},isValidating:{enumerable:!0,get:()=>!!Z(u.validatingFields,n)},error:{enumerable:!0,get:()=>Z(u.errors,n)}}),[u,n]),h=X.useCallback(e=>{let t=yx(e);return Z(i._fields,n)||(p.current=i.register(n,{...d.current.rules,value:t})),p.current.onChange({target:{value:yx(e),name:n},type:Sx.CHANGE})},[n,i]),g=X.useCallback(()=>p.current.onBlur({target:{value:Z(i._formValues,n),name:n},type:Sx.BLUR}),[n,i._formValues]),_=X.useCallback(e=>{e&&(f.current={focus:()=>Nx(e.focus)&&e.focus(),select:()=>Nx(e.select)&&e.select(),setCustomValidity:t=>Nx(e.setCustomValidity)&&e.setCustomValidity(t),reportValidity:()=>Nx(e.reportValidity)&&e.reportValidity()});let t=Z(i._fields,n);t&&t._f&&e&&(t._f.ref=f.current)},[i._fields,n]),v=X.useMemo(()=>({name:n,value:l,...Mx(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:h,onBlur:g,ref:_}),[n,r,u.disabled,h,g,_,l]);return X.useEffect(()=>{let e=i._options.shouldUnregister||a;p.current=i.register(n,{...d.current.rules,...Mx(d.current.disabled)?{disabled:d.current.disabled}:{}});let t=(e,t)=>{let n=Z(i._fields,e);n&&n._f&&(n._f.mount=t)};if(t(n,!0),e){let e=Wb(Z(a?i._defaultValues:i._options.values||i._defaultValues,n,Z(i._options.defaultValues,n,d.current.defaultValue)));Px(i._defaultValues,n,e),kx(Z(i._formValues,n))&&Px(i._formValues,n,e)}if(!c&&i.register(n),f.current){let e=Z(i._fields,n);e&&e._f&&(e._f.ref=f.current)}return()=>{(c?e&&!i._state.action:e)?i.unregister(n):t(n,!1)}},[n,i,c,a]),X.useEffect(()=>{i._setDisabledField({disabled:r,name:n})},[r,n,i]),X.useMemo(()=>({field:v,formState:u,fieldState:m}),[v,u,m])}function Xb(e,t,n=`validate`){if(Hx(e)||Array.isArray(e)&&e.every(Hx)||Mx(e)&&!e)return{type:n,message:Hx(e)?e:``,ref:t}}function Zb(e,t){let n=t.length-1,r=0;for(;r<n;){if(gx(e)){e=void 0;break}e=e[t[r]],r++}return e}function Qb(e){for(let t in e)if(e.hasOwnProperty(t)&&!kx(e[t]))return!1;return!0}function $b(e,t){if(Hx(t)&&Object.prototype.hasOwnProperty.call(e,t))return delete e[t],e;let n=Array.isArray(t)?t:Ox(t)?[t]:jx(t);if(n.some(e=>Ex.includes(String(e))))return e;let r=n.length===1?e:Zb(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(vx(r)&&Jx(r)||Array.isArray(r)&&Qb(r))&&$b(e,n.slice(0,-1)),e}function ex(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&vx(i)&&a){let e=ex(i,a);vx(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}function tx(e){return Array.isArray(e)||vx(e)}function nx(e,t,n=``,r=[]){for(let i in e){let a=n?`${n}.${i}`:i,o=e[i];tx(o)&&tx(Z(t,a))?nx(o,t,a,r):r.push(a)}return r}function rx(e){return Array.isArray(e)||vx(e)&&!hS(e)}function ix(e){return!!(e&&`_f`in e)}function ax(e){return Array.isArray(e)?!e.some(e=>!kx(e)):!Object.keys(e).length}function ox(e,t){Array.isArray(e)?e[t]=void 0:delete e[t]}function sx(e,t={},n){for(let r in e){let i=e[r],a=n&&n[r];rx(i)&&(!Array.isArray(i)||!ix(a))?(t[r]=Array.isArray(i)?[]:{},sx(i,t[r],a),ax(t[r])&&ox(t,r)):kx(i)||(t[r]=!0)}return t}function cx(e,t,n,r){n||=sx(t,{},r);for(let i in e){let a=e[i],o=r&&r[i];rx(a)&&(!Array.isArray(a)||!ix(o))?(kx(t)||Bx(n[i])?n[i]=sx(a,Array.isArray(a)?[]:{},o):cx(a,gx(t)?{}:t[i],n[i],o),ax(n[i])&&ox(n,i)):Gb(a,t[i])?ox(n,i):n[i]=!0}return n}function lx(e){let t=e.ref;return mx(t)?t.files:Xx(t)?rS(e.refs).value:fS(t)?[...t.selectedOptions].map(({value:e})=>e):px(t)?tS(e.refs).value:_S(t.value,e)}function ux(e,t,n){let r=Z(e,n);if(r||Ox(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=Z(t,r),o=Z(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}function dx(e={}){let t={...DS,...e},n={...Wb(AS),isLoading:Nx(t.defaultValues),errors:t.errors||{},disabled:t.disabled||!1},r={},i=(vx(t.defaultValues)||vx(t.values))&&Wb(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:Wb(i),o={action:!1,actionArrayLengths:new Map,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},c={},l={},u=0,d=Wx(t.mode),f=Wx(t.reValidateMode),p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},m={...p},h={...m},g={array:lS(),state:lS()},_=0,v=t.criteriaMode===Cx.all,y=(e,t)=>n=>{clearTimeout(l[e]),l[e]=setTimeout(t,n)},b=async e=>{if(!o.keepIsValid&&!t.disabled&&(m.isValid||h.isValid||e)){let e=++_,i;t.resolver?(i=Jx((await j()).errors),e===_&&x()):i=await P({fields:r,onlyCheckValid:!0,eventType:Sx.VALID}),e===_&&i!==n.isValid&&g.state.next({isValid:i})}},x=(e,r)=>{!t.disabled&&(m.isValidating||m.validatingFields||h.isValidating||h.validatingFields)&&((e||s.mount).forEach(e=>{e&&(r?Px(n.validatingFields,e,r):$b(n.validatingFields,e))}),g.state.next({validatingFields:n.validatingFields,isValidating:!Jx(n.validatingFields)}))},S=()=>{n.dirtyFields=cx(i,a,void 0,r)},C=(e,i=[],s,c,l=!0,u=!0)=>{if(c&&s&&!t.disabled){o.action=!0;let t=Z(r,e);if(o.actionArrayLengths.has(e)||o.actionArrayLengths.set(e,Array.isArray(t)?t.length:0),u&&Array.isArray(t)){let n=s(t,c.argA,c.argB);l&&Px(r,e,n)}let a=Z(n.errors,e);if(u&&Array.isArray(a)){let t=a.root,r=s(a,c.argA,c.argB)||a;t&&(r.root=t),l&&Px(n.errors,e,r),ES(n.errors,e)}let d=Z(n.touchedFields,e);if((m.touchedFields||h.touchedFields)&&u&&Array.isArray(d)){let t=s(d,c.argA,c.argB);l&&Px(n.touchedFields,e,t)}(m.dirtyFields||h.dirtyFields)&&S(),g.state.next({name:e,isDirty:I(e,i),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Px(a,e,i)},w=(e,t)=>{Px(n.errors,e,t),n.errors={...n.errors},g.state.next({errors:n.errors})},T=e=>{n.errors=e,g.state.next({errors:n.errors,isValid:!1})},E=e=>{let t=Ox(e)?[e]:jx(e),n=a,r=i;for(let e=0;e<t.length-1;e++){let i=t[e];if(n=gx(n)?n:n[i],r=gx(r)?r:r[i],n===null&&r!==null)return!0}return!1},D=e=>{if(!o.actionArrayLengths.size)return!1;let t=Ox(e)?[e]:jx(e),n=a,r=``,i=-1,s=0;for(let e=0;e<t.length;e++){if(gx(n))return!1;let a=t[e];if(r=r?`${r}.${a}`:a,Array.isArray(n)&&+a>=n.length)return i===-1?!1:e!==i||+a<s;o.actionArrayLengths.has(r)&&(i=e+1,s=o.actionArrayLengths.get(r)),n=n[a]}return!1},O=(t,c,l,u)=>{let d=Z(r,t);if(d){if(E(t)||D(t))return;let r=kx(Z(a,t)),f=Z(a,t,kx(l)?Z(i,t):l);kx(f)||u&&u.defaultChecked||c?Px(a,t,c?f:lx(d._f)):z(t,f),o.mount&&!o.action&&(b(),r&&n.isDirty&&(m.isDirty||h.isDirty)&&(I()||(n.isDirty=!1,g.state.next({...n}))),e.shouldUnregister&&r&&!kx(Z(a,t))&&Gx(t,s)&&(o.watch=!0))}},k=(e,o,s,c,l)=>{let u=!1,d=!1,f={name:e};if(!t.disabled||c===!0){if(!s||c){let t=Gb(Z(i,e),o);(m.isDirty||h.isDirty)&&(d=n.isDirty,n.isDirty=f.isDirty=!t||I(),u=d!==f.isDirty),d=!!Z(n.dirtyFields,e),t===n.isDirty?t?$b(n.dirtyFields,e):Px(n.dirtyFields,e,!0):kS(n.dirtyFields,cx(i,a,void 0,r)),f.dirtyFields=n.dirtyFields,u||=(m.dirtyFields||h.dirtyFields)&&d!==!t}if(s){let t=Z(n.touchedFields,e);t||(Px(n.touchedFields,e,s),f.touchedFields=n.touchedFields,u||=(m.touchedFields||h.touchedFields)&&t!==s)}u&&l&&g.state.next(f)}return u?f:{}},A=(e,r,i,a)=>{let o=Z(n.errors,e),s=(m.isValid||h.isValid)&&Mx(r)&&n.isValid!==r;if(t.delayError&&i?(c[e]=y(e,()=>w(e,i)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e],i?Px(n.errors,e,i):$b(n.errors,e),n.errors={...n.errors}),(i?!Gb(o,i):o)||!Jx(a)||s){let t={...a,...s&&Mx(r)?{isValid:r}:{},errors:n.errors,name:e};g.state.next(t)}},j=async e=>(x(e,!0),await t.resolver(a,t.context,vS(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),M=async e=>{let{errors:t}=await j(e);if(x(e),e){for(let r of e){let e=Z(t,r);e?s.array.has(r)&&vx(e)&&!Object.keys(e).some(e=>!Number.isNaN(Number(e)))?qx(n.errors,{[r]:e},r):Px(n.errors,r,e):$b(n.errors,r)}n.errors={...n.errors}}else n.errors=t;return t},N=async({name:t,eventType:r})=>{if(e.validate){let i=await e.validate({formValues:a,formState:n,name:t,eventType:r});if(vx(i))for(let e in i){let t=i[e];t&&le(`${OS}.${e}`,{message:Hx(t.message)?t.message:``,type:t.type||wx.validate})}else Hx(i)||!i?le(OS,{message:i||``,type:wx.validate}):ce(OS);return i}return!0},P=async({fields:r,onlyCheckValid:i,name:o,eventType:c,context:l={valid:!0,runRootValidation:!1}})=>{if(e.validate&&(l.runRootValidation=!0,!await N({name:o,eventType:c})&&(l.valid=!1,i)))return l.valid;for(let o in r){let u=r[o];if(u){let{_f:r,...d}=u;if(r){let o=s.array.has(r.name),c=u._f&&xS(u._f),d=m.validatingFields||m.isValidating||h.validatingFields||h.isValidating;c&&d&&x([r.name],!0);let f=await aS(u,s.disabled,a,v,t.shouldUseNativeValidation&&!i,o);if(c&&d&&x([r.name]),f[r.name]&&(l.valid=!1,i)||(!i&&(Z(f,r.name)?o?qx(n.errors,f,r.name):Px(n.errors,r.name,f[r.name]):$b(n.errors,r.name)),e.shouldUseNativeValidation&&f[r.name]))break}!Jx(d)&&await P({context:l,onlyCheckValid:i,fields:d,name:o,eventType:c})}}return l.valid},F=()=>{for(let e of s.unMount){let t=Z(r,e);t&&(t._f.refs?t._f.refs.every(e=>!mS(e)):!mS(t._f.ref))&&pe(e)}s.unMount=new Set},I=(e,t)=>(e&&t&&Px(a,e,t),!Gb(o.mount?a:i,i)),L=(e,t,n)=>Ux(e,s,{...o.mount?a:kx(t)||Hx(e)?i:t},n,t),R=e=>sS(Z(o.mount?a:i,e,t.shouldUnregister?Z(i,e,[]):[])),z=(e,t,n={},i=!1,o=!1,s=!1)=>{let c=Z(r,e),l=t;if(c){let n=c._f;n&&(!n.disabled&&Px(a,e,_S(t,n)),l=Yx(n.ref)&&gx(t)?``:t,fS(n.ref)?[...n.ref.options].forEach(e=>e.selected=l.includes(e.value)):n.refs?px(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(l)?!!l.find(t=>t===e.value):l===e.value||!!l)}):n.refs.forEach(e=>e.checked=e.value===l):mx(n.ref)?n.ref.value=``:(n.ref.value=l,!n.ref.type&&!o&&!s&&g.state.next({name:e,values:i?a:Wb(a)})))}(n.shouldDirty||n.shouldTouch)&&k(e,l,n.shouldTouch,n.shouldDirty,!o),n.shouldValidate&&ie(e,{delayError:n.delayError})},B=(e,t,n,i=!1,o=!1,c=!1)=>{s.array.has(e)&&g.array.next({name:e,values:i?a:Wb(a)});for(let a in t){if(!t.hasOwnProperty(a))return;let l=t[a],u=e+`.`+a,d=Z(r,u);(s.array.has(e)||vx(l)||d&&!d._f)&&!hx(l)?B(u,l,n,i,o,c):z(u,l,n,i,o,c)}},ee=(e,t,i,c,l=!1)=>{let u=Z(r,e),d=s.array.has(e),f=c?t:Wb(t),p=Gb(Z(a,e),f);if(p||Px(a,e,f),d)g.array.next({name:e,values:c?a:Wb(a)}),(m.isDirty||m.dirtyFields||h.isDirty||h.dirtyFields)&&i.shouldDirty&&(S(),l||g.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:I(e,f)}));else{let t=Array.isArray(f)&&!f.length||Jx(f),n=!p&&!l;!u||u._f||gx(f)||t?z(e,f,i,c,l,n):B(e,f,i,c,l,n)}if(!p&&!l){let t=Gx(e,s),r=c?a:Wb(a);if(g.state.next({...t&&n,name:o.mount||t?e:void 0,values:r}),!d)for(let t of gS(s.array,e))g.state.next({name:t,values:r})}},te=(e,t,n={})=>ee(e,t,n,!1),V=(e,t={})=>{let r=Nx(e)?e(a):e;if(!Gb(a,r)){a={...a,...r};for(let e of s.mount)dS(r,e)&&ee(e,Z(r,e),t,!0,!0);g.state.next({...n,name:void 0,type:void 0,...u?{values:a}:{}}),t.shouldValidate&&b()}},ne=async i=>{o.mount=!0;let l=i.target,p=l.name,_=!0,y=Z(r,p),S=e=>{_=Number.isNaN(e)||hx(e)&&isNaN(e.getTime())||Gb(e,Z(a,p,e))};if(y){let o,C,w=l.type?lx(y._f):yx(i),T=i.type===Sx.BLUR||i.type===Sx.FOCUS_OUT,E=!SS(y._f)&&!e.validate&&!t.resolver&&!Z(n.errors,p)&&!y._f.deps,D=E||TS(T,Z(n.touchedFields,p),n.isSubmitted,f,d),O=Gx(p,s,T);if(Px(a,p,w),T){if(!l||!l.readOnly){y._f.onBlur&&y._f.onBlur(i);let e=c[p];e&&e(0)}}else y._f.onChange&&y._f.onChange(i);let M=k(p,w,T),F=!Jx(M)||O;if(!T&&g.state.next({name:p,type:i.type,...u?{values:Wb(a)}:{}}),D)return(!E||!n.isValid)&&(m.isValid||h.isValid)&&(t.mode===`onBlur`?T&&b():T||b()),F&&g.state.next({name:p,...O?{}:M});if(!t.resolver&&e.validate&&await N({name:p,eventType:i.type}),!T&&O&&g.state.next({...n}),t.resolver){let{errors:e}=await j([p]);if(x([p]),S(w),!_){!Jx(M)&&g.state.next(M);return}let t=ux(n.errors,r,p),i=ux(e,r,t.name||p);o=i.error,p=i.name,C=Jx(e)}else x([p],!0),o=(await aS(y,s.disabled,a,v,t.shouldUseNativeValidation))[p],x([p]),S(w),_&&(o?C=!1:(m.isValid||h.isValid)&&(C=await P({fields:r,onlyCheckValid:!0,name:p,eventType:i.type})));_&&(y._f.deps&&(!Array.isArray(y._f.deps)||y._f.deps.length>0)&&ie(y._f.deps),A(p,C,o,M))}},re=(e,t)=>{if(Z(n.errors,t)&&e.focus)return e.focus(),1},ie=async(e,i={})=>{let a,o,u=oS(e);if(t.resolver){let t=await M(kx(e)?e:u);a=Jx(t),o=e?!u.some(e=>Z(t,e)):a}else e?(o=(await Promise.all(u.map(async e=>{let t=Z(r,e);return await P({fields:t&&t._f?{[e]:t}:t,eventType:Sx.TRIGGER})}))).every(Boolean),!(!o&&!n.isValid)&&b()):o=a=await P({fields:r,name:e,eventType:Sx.TRIGGER});if(i.delayError&&t.delayError&&Hx(e)){let r=Z(n.errors,e);r?($b(n.errors,e),c[e]=y(e,()=>w(e,r)),c[e](t.delayError)):(clearTimeout(l[e]),delete c[e])}return g.state.next({...!Hx(e)||(m.isValid||h.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&Kx(r,re,e?u:s.mount),o},ae=(e,t)=>{let r={...o.mount?a:i};return t&&(r=ex(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),kx(e)?r:Hx(e)?Z(r,e):e.map(e=>Z(r,e))},oe=e=>kx(e)?{...n.errors}:Hx(e)?Z(n.errors,e):e.map(e=>Z(n.errors,e)),se=(e,t)=>{let r=t||n,i=Z(r.errors,e);return{invalid:!!i,isDirty:!!Z(r.dirtyFields,e),error:i,isValidating:!!Z(n.validatingFields,e),isTouched:!!Z(r.touchedFields,e)}},ce=e=>{let t=e?oS(e):void 0;t?.forEach(e=>$b(n.errors,e)),t?t.forEach(e=>{g.state.next({name:e,errors:n.errors})}):(n.errors={},g.state.next({errors:n.errors}))},le=(e,t,i)=>{let a=(Z(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=Z(n.errors,e)||{};Px(n.errors,e,{...l,...t,ref:a}),g.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},ue=(e,t)=>{if(Nx(e)){u++;let{unsubscribe:n}=g.state.subscribe({next:n=>`values`in n&&e(n.values||L(void 0,t),n)}),r=!1;return{unsubscribe:()=>{r||(r=!0,u--,n())}}}return L(e,t,!0)},de=e=>{let t=!!e.formState?.values;t&&u++;let{unsubscribe:r}=g.state.subscribe({next:t=>{if(wS(e.name,t.name,e.exact)&&CS(t,e.formState||m,Ce,e.reRenderRoot)){let r={...a};e.callback({values:r,...n,...t,defaultValues:i})}}});if(!t)return r;let o=!1;return()=>{o||(o=!0,u--,r())}},fe=e=>(o.mount=!0,h={...h,...e.formState},de({...e,formState:{...p,...e.formState}})),pe=(e,o={})=>{for(let c of e?oS(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||($b(r,c),$b(a,c)),!o.keepError&&$b(n.errors,c),!o.keepDirty&&$b(n.dirtyFields,c),!o.keepTouched&&$b(n.touchedFields,c),!o.keepIsValidating&&$b(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&$b(i,c);u&&g.state.next({values:Wb(a)}),g.state.next({...n,...o.keepDirty?{}:{isDirty:I()}}),!o.keepIsValid&&b()},me=({disabled:e,name:t})=>{if(Mx(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&b()}},he=(e,n={})=>{let a=Z(r,e),c=Mx(n.disabled)||Mx(t.disabled),l=!s.registerName.has(e)&&a&&a._f&&!a._f.mount;return Px(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a&&!l?me({disabled:Mx(n.disabled)?n.disabled:t.disabled,name:e}):O(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:yS(n.min),max:yS(n.max),minLength:yS(n.minLength),maxLength:yS(n.maxLength),pattern:yS(n.pattern)}:{},name:e,onChange:ne,onBlur:ne,ref:c=>{if(c){s.registerName.add(e),he(e,n),s.registerName.delete(e),a=Z(r,e);let t=kx(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=pS(t),l=a._f.refs||[];if(o?l.find(e=>e===t):t===a._f.ref)return;let u={...a._f};o?(u.refs=[...l.filter(mS),t,...Array.isArray(Z(i,e))?[{}]:[]],u.ref={type:t.type,name:e}):(u.ref=t,delete u.refs),Px(r,e,{_f:u}),O(e,!1,void 0,t)}else a=Z(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(bx(s.array,e)&&o.action)&&s.unMount.add(e)}}},ge=()=>t.shouldFocusError&&!t.shouldUseNativeValidation&&Kx(r,re,s.mount),_e=e=>{Mx(e)&&(g.state.next({disabled:e}),Kx(r,(t,n)=>{let i=Z(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},ve=(e,i)=>async o=>{let c,l;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let u=Wb(a);if(g.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await j();x(),n.errors=e,u=Wb(t)}else await P({fields:r,eventType:Sx.SUBMIT});if(s.disabled.size)for(let e of s.disabled)$b(u,e);if($b(n.errors,Tx),Jx(n.errors)){g.state.next({errors:{}});try{c=await e(u,o)}catch(e){l=e}}else i&&await i({...n.errors},o),ge(),setTimeout(ge);if(g.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Jx(n.errors)&&!l,submitCount:n.submitCount+1,errors:n.errors}),l)throw l;return c},ye=(e,t={})=>{Z(r,e)&&(kx(t.defaultValue)?te(e,Wb(Z(i,e))):(te(e,t.defaultValue),Px(i,e,Wb(t.defaultValue))),t.keepTouched||$b(n.touchedFields,e),t.keepDirty||($b(n.dirtyFields,e),n.isDirty=t.defaultValue?I(e,Wb(Z(i,e))):I()),t.keepError||($b(n.errors,e),m.isValid&&b()),g.state.next({...n}))},be=(e,c={})=>{let l=e?Wb(e):i,u=Wb(l),d=Jx(e),f=u,p=r;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...nx(cx(i,a,void 0,p),n.dirtyFields)]);for(let t of e){let e=Z(n.dirtyFields,t),r=Z(a,t),i=Z(f,t);e&&!kx(r)?Px(f,t,r):!e&&!kx(i)&&te(t,i)}}else{if(xx&&kx(e))for(let e of s.mount){let t=Z(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Yx(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)te(e,Z(f,e));else r={}}if(t.shouldUnregister){if(a=c.keepDefaultValues?Wb(i):{},c.keepFieldsRef)for(let e of s.mount)Px(a,e,Z(f,e))}else a=Wb(f);g.array.next({values:{...f}}),g.state.next({name:void 0,type:void 0,values:{...f}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!m.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!Jx(f),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,o.actionArrayLengths.clear(),c.keepErrors||(n.errors={}),g.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:d?!1:c.keepDirty?n.isDirty:c.keepValues?I():!!(c.keepDefaultValues&&!Gb(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:d?{}:c.keepDirtyValues?c.keepDefaultValues&&a?cx(i,a,void 0,p):n.dirtyFields:c.keepDefaultValues&&e?cx(i,e,void 0,p):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},xe=(e,n)=>be(Nx(e)?e(a):e,{...t.resetOptions,...n}),Se=(e,t={})=>{let n=Z(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&Nx(e.select)&&e.select()})}},Ce=e=>{let{name:t,type:r,values:i,...a}=e;n={...n,...a}};g.state.subscribe({next:Ce});let we={control:{register:he,unregister:pe,getFieldState:se,handleSubmit:ve,setError:le,_subscribe:de,_runSchema:j,_updateIsValidating:x,_focusError:ge,_getWatch:L,_getDirty:I,_setValid:b,_setFieldArray:C,_setDisabledField:me,_setErrors:T,_getFieldArray:R,_reset:be,_resetDefaultValues:()=>Nx(t.defaultValues)&&t.defaultValues().then(e=>{xe(e,t.resetOptions),g.state.next({isLoading:!1})}),_removeUnmounted:F,_disableForm:_e,_subjects:g,_proxyFormState:m,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e},d=Wx(t.mode),f=Wx(t.reValidateMode)}},subscribe:fe,trigger:ie,register:he,handleSubmit:ve,watch:ue,setValue:te,setValues:V,getValues:ae,getErrors:oe,reset:xe,resetField:ye,resetDefaultValues:(e,t={})=>{if(i=Wb(e),!t.keepDirty){let e=cx(i,a,void 0,r);n.dirtyFields=e,n.isDirty=!Jx(e)}t.keepIsValid||b(),g.state.next({...n,defaultValues:i})},clearErrors:ce,unregister:pe,setError:le,setFocus:Se,getFieldState:se};return{...we,formControl:we}}function fx(e={}){let t=X.useRef(void 0),n=X.useRef(void 0),r=X.useRef(e.formControl),[i,a]=X.useState(()=>({...Wb(AS),isLoading:Nx(e.defaultValues),errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Nx(e.defaultValues)?void 0:e.defaultValues}));if(!t.current||e.formControl&&r.current!==e.formControl){if(r.current=e.formControl,e.formControl)t.current={...e.formControl,formState:i},e.defaultValues&&!Nx(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...r}=dx(e);t.current={...r,formState:i}}}let o=t.current.control;o._options=e;let{resyncIfNeeded:s,snapshot:c}=Kb();return Rx(()=>{let e=()=>({...o._formState,defaultValues:o._defaultValues});s(!0,e,a);let t=o._subscribe({formState:o._proxyFormState,callback:()=>a({...o._formState,defaultValues:o._defaultValues}),reRenderRoot:!0});return a(e=>({...e,isReady:!0})),o._formState.isReady=!0,()=>{t(),c(!0,e)}},[o,s,c]),X.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),X.useEffect(()=>{e.mode&&(o._options.mode=e.mode),e.reValidateMode&&(o._options.reValidateMode=e.reValidateMode)},[o,e.mode,e.reValidateMode]),X.useEffect(()=>{e.errors&&(o._setErrors(e.errors),o._focusError())},[o,e.errors]),X.useEffect(()=>{e.shouldUnregister&&o._subjects.state.next({values:o._getWatch()})},[o,e.shouldUnregister]),X.useEffect(()=>{if(o._proxyFormState.isDirty){let e=o._getDirty();e!==i.isDirty&&o._subjects.state.next({isDirty:e})}},[o,i.isDirty]),X.useEffect(()=>{e.values&&!Gb(e.values,n.current)?(o._reset(e.values,{keepFieldsRef:!0,...o._options.resetOptions}),o._options.resetOptions?.keepIsValid||o._setValid(),n.current=e.values,a(e=>({...e}))):o._resetDefaultValues()},[o,e.values]),X.useEffect(()=>{o._state.mount||(o._setValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),t.current.formState=X.useMemo(()=>Lx(i,o),[o,i]),t.current}var X,px,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Z,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS;function jS(){return(jS=t((()=>{X=e(r(),1),px=e=>e.type===`checkbox`,mx=e=>e.type===`file`,hx=e=>e instanceof Date,gx=e=>e==null,_x=e=>typeof e==`object`,vx=e=>!gx(e)&&!Array.isArray(e)&&_x(e)&&!hx(e),yx=e=>vx(e)&&e.target?px(e.target)?e.target.checked:mx(e.target)?e.target.files:e.target.value:e,bx=(e,t)=>t.split(`.`).some((t,n,r)=>!isNaN(Number(t))&&e.has(r.slice(0,n).join(`.`))),xx=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`,Sx={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`,SUBMIT:`submit`,TRIGGER:`trigger`,VALID:`valid`},Cx={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},wx={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},Tx=`root`,Ex=[`__proto__`,`constructor`,`prototype`],Dx=/^\w*$/,Ox=e=>Dx.test(e),kx=e=>e===void 0,Ax=/[.[\]'"]/,jx=e=>e.split(Ax).filter(Boolean),Z=(e,t,n)=>{if(!t||!vx(e))return n;let r=Ox(t)?[t]:jx(t);if(r.some(e=>Ex.includes(e)))return n;let i=r.reduce((e,t)=>gx(e)?void 0:e[t],e);return kx(i)||i===e?kx(e[t])?n:e[t]:i},Mx=e=>typeof e==`boolean`,Nx=e=>typeof e==`function`,Px=(e,t,n)=>{let r=-1,i=Ox(t)?[t]:jx(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=vx(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if(Ex.includes(t))return;e[t]=a,e=e[t]}},Fx=X.createContext(null),Fx.displayName=`HookFormControlContext`,Ix=()=>X.useContext(Fx),Lx=(e,t,n,r=!0)=>{let i={};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==Cx.all&&(t._proxyFormState[i]=!r||Cx.all),n&&(n[i]=!0),e[i]}});return i},Rx=xx?X.useLayoutEffect:X.useEffect,zx=e=>{let t=e.constructor&&e.constructor.prototype;return vx(t)&&t.hasOwnProperty(`isPrototypeOf`)},Bx=e=>gx(e)||!_x(e),Vx=(e,t)=>t.length===0&&!Array.isArray(e)&&!zx(e),Hx=e=>typeof e==`string`,Ux=(e,t,n,r,i)=>Hx(e)?(r&&t.watch.add(e),Z(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),Z(n,e))):(r&&(t.watchAll=!0),n),Wx=e=>({isOnSubmit:!e||e===Cx.onSubmit,isOnBlur:e===Cx.onBlur,isOnChange:e===Cx.onChange,isOnAll:e===Cx.all,isOnTouch:e===Cx.onTouched}),Gx=(e,t,n)=>{if(n)return!1;if(t.watchAll||t.watch.has(e))return!0;for(let n of t.watch)if(e.startsWith(n)&&e.charAt(n.length)===`.`)return!0;return!1},Kx=(e,t,n,r)=>{for(let i of n||Object.keys(e)){if(i===`_f`)continue;let a=n?Z(e,i):e[i];if(a){let{_f:e}=a;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(Kx(a,t))break}else if((vx(a)||Array.isArray(a))&&Kx(a,t))break}}},qx=(e,t,n)=>{let r=Z(e,n),i=Array.isArray(r)?r:[];return Px(i,Tx,t[n]),Px(e,n,i),e},Jx=e=>vx(e)&&!Object.keys(e).length,Yx=e=>{if(!xx)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Xx=e=>e.type===`radio`,Zx=e=>e instanceof RegExp,Qx=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},$x={value:!1,isValid:!1},eS={value:!0,isValid:!0},tS=e=>{if(!Array.isArray(e))return $x;if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}let t=e[0];return!t||!t.checked||t.disabled?$x:!t.attributes||!(`value`in t.attributes)||kx(t.value)||t.value===``?eS:{value:t.value,isValid:!0}},nS={isValid:!1,value:null},rS=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,nS):nS,iS=e=>vx(e)&&!Zx(e)?e:{value:e,message:``},aS=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=Z(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{if(i&&y.reportValidity){let t=Mx(e)?``:e||``;s?s.forEach(e=>e.setCustomValidity(t)):y.setCustomValidity(t),y.reportValidity()}},x={},S=Xx(o),C=px(o),w=S||C,T=(g||mx(o))&&kx(o.value)&&kx(v)||Yx(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,E=Qx.bind(null,h,r,x),D=(e,t,n,r=wx.maxLength,i=wx.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...E(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!w&&(T||gx(v))||Mx(v)&&!v||C&&!tS(s).isValid||S&&!rS(s).isValid)){let{value:e,message:t}=Hx(c)?{value:!!c,message:c}:iS(c);if(e&&(x[h]={type:wx.required,message:t,ref:y,...E(wx.required,t)},!r))return b(t),x}if(!T&&(!gx(d)||!gx(f))){let e,t,n=iS(f),i=iS(d);if(!gx(v)&&!hx(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;gx(n.value)||(e=r>n.value),gx(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;Hx(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),Hx(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(D(!!e,n.message,i.message,wx.max,wx.min),!r))return b(x[h].message),x}if((l||u)&&!T&&(Hx(v)||a&&Array.isArray(v))){let e=iS(l),t=iS(u),n=!gx(e.value)&&v.length>+e.value,i=!gx(t.value)&&v.length<+t.value;if((n||i)&&(D(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!T&&Hx(v)){let{value:e,message:t}=iS(p);if(Zx(e)&&!v.match(e)&&(x[h]={type:wx.pattern,message:t,ref:o,...E(wx.pattern,t)},!r))return b(t),x}if(m){if(Nx(m)){let e=Xb(await m(v,n),y);if(e&&(x[h]={...e,...E(wx.validate,e.message)},!r))return b(e.message),x}else if(vx(m)){let e={};for(let t in m){if(!Jx(e)&&!r)break;let i=Xb(await m[t](v,n),y,t);i&&(e={...i,...E(t,i.message)},b(i.message),r&&(x[h]=e))}if(!Jx(e)&&(x[h]={ref:y,...e},!r))return x}}let O=x[h];return b(!O||O.message),x},oS=e=>Array.isArray(e)?e:[e],sS=e=>Array.isArray(e)?e.filter(Boolean):[],cS=X.createContext(null),cS.displayName=`HookFormContext`,lS=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},uS=(e,t)=>e!==null&&_x(e)&&Object.prototype.hasOwnProperty.call(e,t),dS=(e,t)=>{if(!t)return!1;let n=e;for(let r of Ox(t)?[t]:jx(t)){if(!uS(n,r))return uS(e,t);n=n[r]}return!0},fS=e=>e.type===`select-multiple`,pS=e=>Xx(e)||px(e),mS=e=>Yx(e)&&e.isConnected,hS=e=>{for(let t in e)if(Nx(e[t]))return!0;return!1},gS=(e,t)=>{let n=t.split(`.`),r=[],i=n[0];for(let t=1;t<n.length;i+=`.`+n[t++])!isNaN(+n[t])&&e.has(i)&&r.push(`${i}.${n[t]}`);return r},_S=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>kx(e)?e:t?e===``?NaN:e&&+e:n&&Hx(e)?new Date(e):r?r(e):e,vS=(e,t,n,r)=>{let i={};for(let n of e){let e=Z(t,n);e&&Px(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},yS=e=>kx(e)?e:Zx(e)?e.source:vx(e)?Zx(e.value)?e.value.source:e.value:e,bS=`AsyncFunction`,xS=e=>{if(!e||!e.validate)return!1;if(Nx(e.validate))return e.validate.constructor.name===bS;if(vx(e.validate)){for(let t in e.validate)if(e.validate[t].constructor.name===bS)return!0}return!1},SS=e=>e.mount&&(e.required||!kx(e.required)&&e.required!==!1||!kx(e.min)||!kx(e.max)||!kx(e.maxLength)||!kx(e.minLength)||e.pattern||e.validate),CS=(e,t,n,r)=>{n(e);let i=Object.keys(e).filter(e=>e!==`name`);return!i.length||r&&i.length>=Object.keys(t).length||i.find(e=>t[e]===(!r||Cx.all))},wS=(e,t,n)=>!e||!t||e===t||oS(e).some(e=>e&&(n?e===t||e.startsWith(t+`.`):e.startsWith(t)||t.startsWith(e))),TS=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:!(n?r.isOnChange:i.isOnChange)||e,ES=(e,t)=>{let n=Z(e,t);!sS(n).length&&!(n!=null&&n.root)&&$b(e,t)},DS={mode:Cx.onSubmit,reValidateMode:Cx.onChange,shouldFocusError:!0},OS=`form`,kS=(e,t)=>{for(let n in e)n in t||delete e[n];Object.assign(e,t)},AS={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}}})))()}function MS(e){let{name:t,control:n,rules:r,errorMessage:i}=e,{field:a,fieldState:o}=Yb({name:t,control:n,...Y({rules:r})}),s=i??o.error?.message;return{field:a,fieldState:o,resolvedError:s,isInvalid:o.invalid||!!s}}function NS(){return(NS=t((()=>{jS()})))()}function PS(e,t){if(e){if(typeof e==`function`){e(t);return}e.current=t}}function FS(...e){return t=>{e.forEach(e=>{PS(e,t)})}}function IS(e,t){return e?e.querySelector(t):null}function LS({disabled:e,readOnly:t,required:n,isDisabled:r,isReadOnly:i,isRequired:a,isInvalid:o,ariaInvalid:s,errorMessage:c}){return{isDisabled:r??e??!1,isReadOnly:i??t??!1,isRequired:a??n??!1,isInvalid:o??(s===void 0?void 0:s===!0||s===`true`||s===`grammar`||s===`spelling`)??!!c}}function RS({ariaDescribedBy:e,descriptionId:t,noticeId:n,errorMessageId:r,hasDescription:i,hasNotice:a,hasErrorMessage:o}){return fb(e,i?t:void 0,a?n:void 0,o?r:void 0)}function zS(e){return e==null?``:typeof e==`string`?e:String(e)}function BS(){return(BS=t((()=>{})))()}function VS(e){switch(e){case`sm`:return u`
        font-size: var(--font-size-sm);
      `;case`lg`:return u`
        font-size: var(--font-size-lg);
      `;default:return u`
        font-size: var(--font-size-md);
      `}}function HS(e,t){return c(QS,t===`radio`?eC:$S,VS(e))}var US,WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,eC,tC,nC,rC,iC,aC,oC;function sC(){return(sC=t((()=>{l(),US=u`
  display: grid;
  gap: var(--space-2);
`,WS=u`
  display: inline-grid;
  width: auto;
`,GS=u`
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
`,KS=u`
  align-items: center;
`,qS=u`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: inherit;
`,JS=u`
  display: grid;
  gap: var(--space-1);
`,YS=u`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
  min-width: 0;
  overflow-wrap: anywhere;
`,XS=u`
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
`,ZS=u`
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
`,QS=u`
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
`,$S=u`
  border-radius: 6px;
`,eC=u`
  border-radius: 999px;
`,tC=u`
  input:checked + & {
    background: var(--switch-track-on);
    border-color: var(--switch-track-on);
  }

  input:checked + & > span {
    opacity: 1;
  }
`,nC=u`
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
  transition: opacity 0.18s ease;
`,rC=u`
  opacity: 1;
`,iC=u`
  width: 11px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: translate(-50%, -70%) rotate(-45deg);
`,aC=u`
  width: 10px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`,oC=u`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: currentColor;
  transform: translate(-50%, -50%);
`})))()}var cC,lC,uC,dC,fC,pC,mC,hC,gC;function _C(){return(_C=t((()=>{l(),cC=u`
  display: grid;
  gap: var(--space-2);
  width: 100%;
  min-width: 0;
`,lC=u`
  color: var(--field-label);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.35;
`,uC=u`
  color: var(--field-error);
  margin-left: var(--space-1);
`,dC=u`
  position: relative;
`,fC=u`
  position: relative;
`,pC=u`
  display: grid;
  gap: var(--space-1);
  min-width: 0;
`,mC=u`
  color: var(--field-description);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,hC=u`
  color: var(--field-notice);
  font-size: 0.875rem;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`,gC=u`
  color: var(--field-error);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.45;
  max-width: 100%;
  overflow-wrap: anywhere;
`})))()}function vC(e){return u`
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
  `}function yC(e){return`${zC} ${BC[e]}`}function bC(e){return u`
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
  `}function xC(e){return`${zC} ${VC[e]}`}function SC(e){return u`
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
  `}function CC(e){return`${UC} ${WC[e]}`}function wC(e){return u`
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
  `}function TC(e){return`${GC} ${KC[e]}`}function EC(e){return`${GC} ${KC[e]} ${qC}`}function DC(e){return u`
    font-size: ${e.messageFontSize};
  `}function OC(e,t){return`${tw} ${iw[e]} ${t?rw:nw}`}function kC(e){return u`
    min-height: ${e.controlHeight};
    padding-top: ${e.inputPaddingYRest};
    padding-bottom: ${e.inputPaddingYRest};
    transition:
      padding-top ${PC} ${FC},
      padding-bottom ${PC} ${FC};

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }

    [data-field-control][data-floated="true"] & {
      padding-top: ${e.inputPaddingTopFloated};
      padding-bottom: ${e.inputPaddingBottomFloated};
    }
  `}function AC(e){let t=IC[e],n=e===`md`?`1.55rem`:t.inputPaddingTopFloated,r=e===`md`?`0.45rem`:t.inputPaddingBottomFloated;return c(zC,u`
      min-height: ${t.controlHeight};
      border-radius: ${t.borderRadius};
      padding: ${t.inputPaddingYRest} calc(${t.inputPaddingX} + ${`2.5rem`})
        ${t.inputPaddingYRest} ${t.inputPaddingX};

      [data-field-control][data-floated="true"] & {
        padding-top: ${n};
        padding-bottom: ${r};
      }
    `)}function jC(e){return kC(IC[e])}function MC(e,t){return u`
    min-height: var(--control-height-${e});
    padding: ${t} var(--control-padding-x-${e});
    font-size: var(--font-size-${e});
  `}function NC(e,t=!1,n=!0){return c(aw,n?lw[e]:uw[e],t?ow:void 0)}var PC,FC,IC,LC,RC,zC,BC,VC,HC,UC,WC,GC,KC,qC,JC,YC,XC,ZC,QC,$C,ew,tw,nw,rw,iw,aw,ow,sw,cw,lw,uw;function dw(){return(dw=t((()=>{l(),PC=`200ms`,FC=`cubic-bezier(0.2, 0, 0, 1)`,IC={sm:{inputPaddingYRest:`0.875rem`,inputPaddingTopFloated:`1.25rem`,inputPaddingBottomFloated:`0.5rem`,inputPaddingX:`0.75rem`,controlHeight:`var(--control-height-sm)`,labelLeft:`0.625rem`,labelFloatTop:`0.45rem`,labelRestFontSize:`1rem`,labelFloatFontSize:`0.6875rem`,messageFontSize:`0.8125rem`,borderRadius:`0.375rem`},md:{inputPaddingYRest:`1rem`,inputPaddingTopFloated:`1.45rem`,inputPaddingBottomFloated:`0.55rem`,inputPaddingX:`0.875rem`,controlHeight:`var(--control-height-md)`,labelLeft:`0.75rem`,labelFloatTop:`0.5rem`,labelRestFontSize:`1.0625rem`,labelFloatFontSize:`0.75rem`,messageFontSize:`0.875rem`,borderRadius:`0.4375rem`},lg:{inputPaddingYRest:`1.125rem`,inputPaddingTopFloated:`1.55rem`,inputPaddingBottomFloated:`0.7rem`,inputPaddingX:`1rem`,controlHeight:`var(--control-height-lg)`,labelLeft:`0.875rem`,labelFloatTop:`0.55rem`,labelRestFontSize:`1.125rem`,labelFloatFontSize:`0.8125rem`,messageFontSize:`0.9375rem`,borderRadius:`0.5rem`}},LC=u`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,RC=u`
  position: relative;
  width: 100%;
`,zC=u`
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
    padding-top ${PC} ${FC},
    padding-bottom ${PC} ${FC},
    box-shadow ${PC} ${FC},
    background-color ${PC} ${FC};

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
`,BC={sm:vC(IC.sm),md:vC(IC.md),lg:vC(IC.lg)},VC={sm:bC(IC.sm),md:bC(IC.md),lg:bC(IC.lg)},HC=u`
  color: var(--field-placeholder);
`,UC=u`
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
    padding-top ${PC} ${FC},
    padding-bottom ${PC} ${FC},
    box-shadow ${PC} ${FC};

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
`,WC={sm:SC(IC.sm),md:SC(IC.md),lg:SC(IC.lg)},GC=u`
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
    transform ${PC} ${FC},
    top ${PC} ${FC},
    left ${PC} ${FC},
    font-size ${PC} ${FC},
    color ${PC} ${FC},
    opacity ${PC} ${FC};

  /* The flat 1rem margin eats a much bigger share of the label box on narrow
     phones, where long labels already truncate hard; claw some of it back. */
  @media (max-width: 480px) {
    max-width: calc(100% - 0.25rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,KC={sm:wC(IC.sm),md:wC(IC.md),lg:wC(IC.lg)},qC=u`
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
`,JC=u`
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
`,YC=c(JC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),XC=c(JC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),ZC=c(JC,u`
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `),QC={sm:ZC,md:ZC,lg:ZC},$C=c(JC,u`
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  `),ew={sm:$C,md:$C,lg:$C},tw=u`
  margin: 0.375rem 0 0;
  max-width: 100%;
  min-width: 0;
  overflow-wrap: anywhere;
`,nw=u`
  color: var(--field-message-color);
`,rw=u`
  color: var(--field-message-color-invalid);
`,iw={sm:DC(IC.sm),md:DC(IC.md),lg:DC(IC.lg)},aw=u`
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
    box-shadow ${PC} ${FC},
    padding-top ${PC} ${FC},
    padding-bottom ${PC} ${FC},
    background-color ${PC} ${FC},
    color ${PC} ${FC};

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
`,ow=u`
  &[data-floated="true"] {
    align-items: stretch;
  }
`,sw=u`
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
  ${sw}
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
`,cw=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  color: var(--field-chrome);

  & > svg {
    width: 1em;
    height: 1em;
  }
`,lw={sm:MC(`sm`,`calc(var(--control-padding-x-sm) - 2px)`),md:MC(`md`,`calc(var(--control-padding-x-md) - 2px)`),lg:MC(`lg`,`calc(var(--control-padding-x-lg) - 2px)`)},uw={sm:MC(`sm`,`0`),md:MC(`md`,`0`),lg:MC(`lg`,`0`)}})))()}function fw({children:e,className:t,controlClassName:n,controlProps:r,label:i,labelProps:a,inputId:o,description:s,descriptionId:l,descriptionProps:u,errorMessage:d,errorMessageId:f,errorMessageProps:p,notice:m,noticeId:h,isDisabled:g=!1,isRequired:_=!1,layout:v=`stacked`,isFloatingRaised:y=!1,isFloatingFocused:b=!1,isInvalid:x=!1,fieldSize:S=`md`}){let C=c(dC,v===`floating`?fC:void 0,v===`floating`?RC:void 0,n,r?.className),w=()=>i?a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,pw.jsxs)(`label`,{...a,className:c(lC,a.className),children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]}):a?(0,pw.jsxs)(`span`,{...a,className:c(lC,a.className),children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]}):(0,pw.jsxs)(`label`,{className:lC,htmlFor:o,children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]}):null,T=()=>{if(!i)return null;let e=c(TC(S),a?.className);return a&&`htmlFor`in a&&typeof a.htmlFor==`string`?(0,pw.jsxs)(`label`,{...a,className:e,children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]}):a?(0,pw.jsxs)(`span`,{...a,className:e,children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]}):(0,pw.jsxs)(`label`,{className:e,htmlFor:o,children:[i,_?(0,pw.jsx)(`span`,{className:uC,children:`*`}):null]})};return(0,pw.jsxs)(`div`,{className:c(cC,t),children:[v===`stacked`?w():null,(0,pw.jsxs)(`div`,{...r,className:C,"data-field-control":v===`floating`?`true`:void 0,"data-floated":v===`floating`?y?`true`:`false`:void 0,"data-focused":v===`floating`?b?`true`:`false`:void 0,"data-invalid":v===`floating`?x?`true`:`false`:void 0,"data-disabled":v===`floating`?g?`true`:`false`:void 0,children:[v===`floating`?T():null,e]}),s||m||d?(0,pw.jsxs)(`div`,{className:pC,children:[s?(0,pw.jsx)(`div`,{...u,className:c(mC,u?.className),id:l??u?.id,children:s}):null,m?(0,pw.jsx)(`div`,{className:hC,id:h,children:m}):null,d?(0,pw.jsx)(`div`,{...p,className:c(gC,p?.className),id:f??p?.id,role:p?.role??`alert`,children:d}):null]}):null]})}var pw;function mw(){return(mw=t((()=>{l(),r(),_C(),dw(),pw=G()})))()}function hw(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,isIndeterminate:p=!1,isInline:m=!1,className:h,checkboxValue:g,onKeyDown:_,onKeyUp:v,"aria-label":y}=e,{field:b,resolvedError:x,isInvalid:S}=MS({name:t,control:n,...Y({rules:r}),errorMessage:s}),C=!!b.value,w=(0,gw.useId)(),T=i??w,E=(0,gw.useId)(),D=(0,gw.useId)(),O=RS({descriptionId:E,errorMessageId:D,hasDescription:!!o,hasErrorMessage:!!x}),k=(0,gw.useRef)(null),A=Ql({isDisabled:u,isReadOnly:d,isSelected:C,onChange:b.onChange}),j=g===void 0?void 0:Array.isArray(g)?g.join(`,`):String(g),{inputProps:M,isSelected:N,labelProps:P}=Kl({children:a,id:T,name:b.name,isDisabled:u,isReadOnly:d,isRequired:f,isInvalid:S,isIndeterminate:p,...Y({value:j,"aria-label":y,"aria-describedby":O})},A,k),{focusProps:F,isFocusVisible:I}=T_();(0,gw.useEffect)(()=>{k.current&&(k.current.indeterminate=p)},[p]);let L=W(M,F,{onKeyDown:_,onKeyUp:v,onBlur:e=>{M.onBlur?.(e),b.onBlur()}});return(0,_w.jsx)(fw,{className:c(US,m&&WS,h),description:o,...pb(o,{descriptionId:E}),errorMessage:x,...pb(x,{errorMessageId:D}),layout:vw,children:(0,_w.jsxs)(`label`,{...P,className:c(GS,VS(l)),"data-disabled":u?`true`:`false`,children:[(0,_w.jsx)(`input`,{...L,ref:FS(k,b.ref),className:qS,type:`checkbox`}),(0,_w.jsxs)(`span`,{className:HS(l,`checkbox`),"aria-hidden":`true`,"data-disabled":u?`true`:`false`,"data-focus-visible":I?`true`:`false`,"data-indeterminate":p?`true`:`false`,"data-invalid":S?`true`:`false`,"data-selected":N?`true`:`false`,children:[(0,_w.jsx)(`span`,{className:c(nC,iC,N&&!p&&rC)}),(0,_w.jsx)(`span`,{className:c(nC,aC,p&&rC)})]}),(0,_w.jsx)(`span`,{className:JS,children:(0,_w.jsx)(`span`,{className:YS,children:a})})]})})}var gw,_w,vw;function yw(){return(yw=t((()=>{l(),eu(),gw=e(r()),H(),Jl(),D_(),NS(),BS(),sC(),mw(),_w=G(),vw=`stacked`})))()}function bw(e){return null}function xw(e){return e.hasChildItems==null?!!(e.childItems||e.title&&Sw.Children.count(e.children)>0):e.hasChildItems}var Sw,Cw;function ww(){return(ww=t((()=>{Sw=e(r(),1),bw.getCollectionNode=function*(e,t){let{childItems:n,title:r,children:i}=e,a=e.title||e.children,o=e.textValue||(typeof a==`string`?a:``)||e[`aria-label`]||``;!o&&t?.suppressTextValueWarning,yield{type:`item`,props:e,rendered:a,textValue:o,"aria-label":e[`aria-label`],hasChildNodes:xw(e),*childNodes(){if(n)for(let e of n)yield{type:`item`,value:e};else if(r){let e=[];Sw.Children.forEach(i,t=>{e.push({type:`item`,element:t})}),yield*e}}}},Cw=bw})))()}function Tw(e){return null}var Ew,Dw;function Ow(){return(Ow=t((()=>{Ew=e(r(),1),Tw.getCollectionNode=function*(e){let{children:t,title:n,items:r}=e;yield{type:`section`,props:e,hasChildNodes:!0,rendered:n,"aria-label":e[`aria-label`],*childNodes(){if(typeof t==`function`){if(!r)throw Error(`props.children was a function but props.items is missing`);for(let e of r)yield{type:`item`,value:e,renderer:t}}else{let e=[];Ew.Children.forEach(t,t=>{e.push({type:`item`,element:t})}),yield*e}}}},Dw=Tw})))()}function kw(e){let t=[],n=null;return{*[Symbol.iterator](){for(let e of t)yield e;n||=e();for(let e of n)t.push(e),yield e}}}function Aw(e,t){if(e&&t)return n=>e(t(n));if(e)return e;if(t)return t}function jw(e){return e[0].toUpperCase()+e.slice(1)}var Mw,Nw;function Pw(){return(Pw=t((()=>{Mw=e(r(),1),Nw=class{build(e,t){return this.context=t,kw(()=>this.iterateCollection(e))}*iterateCollection(e){let{children:t,items:n}=e;if(Mw.isValidElement(t)&&t.type===Mw.Fragment)yield*this.iterateCollection({children:t.props.children,items:n});else if(typeof t==`function`){if(!n)throw Error(`props.children was a function but props.items is missing`);let e=0;for(let r of n)yield*this.getFullNode({value:r,index:e},{renderer:t}),e++}else{let e=[];Mw.Children.forEach(t,t=>{t&&e.push(t)});let n=0;for(let t of e){let e=this.getFullNode({element:t,index:n},{});for(let t of e)n++,yield t}}}getKey(e,t,n,r){if(e.key!=null)return e.key;if(t.type===`cell`&&t.key!=null)return`${r}${t.key}`;let i=t.value;if(i!=null){let e=i.key??i.id;if(e==null)throw Error(`No key found for item`);return e}return r?`${r}.${t.index}`:`$.${t.index}`}getChildState(e,t){return{renderer:t.renderer||e.renderer}}*getFullNode(e,t,n,r){if(Mw.isValidElement(e.element)&&e.element.type===Mw.Fragment){let i=[];Mw.Children.forEach(e.element.props.children,e=>{i.push(e)});let a=e.index??0;for(let e of i)yield*this.getFullNode({element:e,index:a++},t,n,r);return}let i=e.element;if(!i&&e.value&&t&&t.renderer){let n=this.cache.get(e.value);if(n&&(!n.shouldInvalidate||!n.shouldInvalidate(this.context))){n.index=e.index,n.parentKey=r?r.key:null,yield n;return}i=t.renderer(e.value)}if(Mw.isValidElement(i)){let a=i.type;if(typeof a!=`function`&&typeof a.getCollectionNode!=`function`){let e=i.type;throw Error(`Unknown element <${e}> in collection.`)}let o=a.getCollectionNode(i.props,this.context),s=e.index??0,c=o.next();for(;!c.done&&c.value;){let a=c.value;e.index=s;let l=a.key??null;l??=a.element?null:this.getKey(i,e,t,n);let u=[...this.getFullNode({...a,key:l,index:s,wrapper:Aw(e.wrapper,a.wrapper)},this.getChildState(t,a),n?`${n}${i.key}`:i.key,r)];for(let t of u){if(t.value=a.value??e.value??null,t.value&&this.cache.set(t.value,t),e.type&&t.type!==e.type)throw Error(`Unsupported type <${jw(t.type)}> in <${jw(r?.type??`unknown parent type`)}>. Only <${jw(e.type)}> is supported.`);s++,yield t}c=o.next(u)}return}if(e.key==null||e.type==null)return;let a=this,o={type:e.type,props:e.props,key:e.key,parentKey:r?r.key:null,value:e.value??null,level:(r?.level??0)+ +(r?.type===`item`),index:e.index,rendered:e.rendered,textValue:e.textValue??``,"aria-label":e[`aria-label`],wrapper:e.wrapper,shouldInvalidate:e.shouldInvalidate,hasChildNodes:e.hasChildNodes||!1,childNodes:kw(function*(){if(!e.hasChildNodes||!e.childNodes)return;let n=0;for(let r of e.childNodes()){r.key!=null&&(r.key=`${o.key}${r.key}`);let e=a.getFullNode({...r,index:n},a.getChildState(t,r),o.key,o);for(let t of e)n++,yield t}})};yield o}constructor(){this.cache=new WeakMap}}})))()}function Fw(e,t,n){let r=(0,Iw.useMemo)(()=>new Nw,[]),{children:i,items:a,collection:o}=e;return(0,Iw.useMemo)(()=>o||t(r.build({children:i,items:a},n)),[r,i,a,o,n,t])}var Iw;function Lw(){return(Lw=t((()=>{Pw(),Iw=r()})))()}var Rw;function zw(){return(zw=t((()=>{Rw=class{constructor(e){this.keyMap=new Map,this.firstKey=null,this.lastKey=null,this.iterable=e;let t=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&e.type===`section`)for(let n of e.childNodes)t(n)};for(let n of e)t(n);let n=null,r=0,i=0;for(let[e,t]of this.keyMap)n?(n.nextKey=e,t.prevKey=n.key):(this.firstKey=e,t.prevKey=void 0),t.type===`item`&&(t.index=r++),(t.type===`section`||t.type===`item`)&&i++,n=t,n.nextKey=void 0;this._size=i,this.lastKey=n?.key??null}*[Symbol.iterator](){yield*this.iterable}get size(){return this._size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey??null:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey??null:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)??null}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){return this.keyMap.get(e)?.childNodes||[]}}})))()}var Bw;function Vw(){return(Vw=t((()=>{Bw=class e extends Set{constructor(t,n,r){super(t),t instanceof e?(this.anchorKey=n??t.anchorKey,this.currentKey=r??t.currentKey):(this.anchorKey=n??null,this.currentKey=r??null)}}})))()}function Hw(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Uw(e){let{selectionMode:t=`none`,disallowEmptySelection:n=!1,allowDuplicateSelectionEvents:r,selectionBehavior:i=`toggle`,disabledBehavior:a=`all`}=e,o=(0,Gw.useRef)(!1),[,s]=(0,Gw.useState)(!1),c=(0,Gw.useRef)(null),l=(0,Gw.useRef)(null),[,u]=(0,Gw.useState)(null),d=(0,Gw.useMemo)(()=>Ww(e.selectedKeys),[e.selectedKeys]),f=(0,Gw.useMemo)(()=>Ww(e.defaultSelectedKeys,new Bw),[e.defaultSelectedKeys]),[p,m]=gt(d,f,e.onSelectionChange),h=(0,Gw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),[g,_]=(0,Gw.useState)(i);i===`replace`&&g===`toggle`&&typeof p==`object`&&p.size===0&&_(`replace`);let v=(0,Gw.useRef)(i);return(0,Gw.useEffect)(()=>{i!==v.current&&(_(i),v.current=i)},[i]),{selectionMode:t,disallowEmptySelection:n,selectionBehavior:g,setSelectionBehavior:_,get isFocused(){return o.current},setFocused(e){o.current=e,s(e)},get focusedKey(){return c.current},get childFocusStrategy(){return l.current},setFocusedKey(e,t=`first`){c.current=e,l.current=t,u(e)},selectedKeys:p,setSelectedKeys(e){(r||!Hw(e,p))&&m(e)},disabledKeys:h,disabledBehavior:a}}function Ww(e,t){return e?e===`all`?`all`:new Bw(e):t}var Gw;function Kw(){return(Kw=t((()=>{Vw(),ae(),Gw=r()})))()}var qw;function Jw(){return(Jw=t((()=>{Vw(),qw=class e{constructor(e,t,n){this.collection=e,this.state=t,this.allowsCellSelection=n?.allowsCellSelection??!1,this._isSelectAll=null,this.layoutDelegate=n?.layoutDelegate||null,this.fullCollection=n?.fullCollection||null}get selectionMode(){return this.state.selectionMode}get disallowEmptySelection(){return this.state.disallowEmptySelection}get selectionBehavior(){return this.state.selectionBehavior}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}get isFocused(){return this.state.isFocused}setFocused(e){this.state.setFocused(e)}get focusedKey(){return this.state.focusedKey}get childFocusStrategy(){return this.state.childFocusStrategy}setFocusedKey(e,t){(e==null||this.collection.getItem(e))&&this.state.setFocusedKey(e,t)}get selectedKeys(){return this.state.selectedKeys===`all`?new Set(this.getSelectAllKeys()):this.state.selectedKeys}get rawSelection(){return this.state.selectedKeys}isSelected(e){if(this.state.selectionMode===`none`)return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys===`all`?this.canSelectItem(t):this.state.selectedKeys.has(t)}get isEmpty(){return this.state.selectedKeys!==`all`&&this.state.selectedKeys.size===0}get isSelectAll(){if(this.isEmpty)return!1;if(this.state.selectedKeys===`all`)return!0;if(this._isSelectAll!=null)return this._isSelectAll;let e=this.getSelectAllKeys(),t=this.state.selectedKeys;return this._isSelectAll=e.every(e=>t.has(e)),this._isSelectAll}get firstSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Sh(this.collection,n,e)<0)&&(e=n)}return e?.key??null}get lastSelectedKey(){let e=null;for(let t of this.state.selectedKeys){let n=this.collection.getItem(t);(!e||n&&Sh(this.collection,n,e)>0)&&(e=n)}return e?.key??null}get disabledKeys(){return this.state.disabledKeys}get disabledBehavior(){return this.state.disabledBehavior}extendSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n;if(this.state.selectedKeys===`all`)n=new Bw([t],t,t);else{let e=this.state.selectedKeys,r=e.anchorKey??t;n=new Bw(e,r,t);for(let i of this.getKeyRange(r,e.currentKey??t))n.delete(i);for(let e of this.getKeyRange(t,r))this.canSelectItem(e)&&n.add(e)}this.state.setSelectedKeys(n)}getKeyRange(e,t){let n=this.collection.getItem(e),r=this.collection.getItem(t);return n&&r?Sh(this.collection,n,r)<=0?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){if(this.layoutDelegate?.getKeyRange)return this.layoutDelegate.getKeyRange(e,t);let n=[],r=e;for(;r!=null;){let e=this.collection.getItem(r);if(e&&(e.type===`item`||e.type===`cell`&&this.allowsCellSelection)&&n.push(r),r===t)return n;r=this.collection.getKeyAfter(r)}return[]}getKey(e){let t=this.collection.getItem(e);if(!t||t.type===`cell`&&this.allowsCellSelection)return e;for(;t&&t.type!==`item`&&t.parentKey!=null;)t=this.collection.getItem(t.parentKey);return!t||t.type!==`item`?null:t.key}toggleSelection(e){if(this.selectionMode===`none`)return;if(this.selectionMode===`single`&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new Bw(this.state.selectedKeys===`all`?this.getSelectAllKeys():this.state.selectedKeys);n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode===`none`)return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new Bw([t],t,t):new Bw;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode===`none`)return;let t=new Bw;for(let n of e){let e=this.getKey(n);if(e!=null&&(t.add(e),this.selectionMode===`single`))break}this.state.setSelectedKeys(t)}getSelectAllKeys(){let e=this.fullCollection??this.collection,t=[],n=r=>{for(;r!=null;){if(this.canSelectItemIn(r,e)){let i=e.getItem(r);i?.type===`item`&&t.push(r),i?.hasChildNodes&&(this.allowsCellSelection||i.type!==`item`)&&n(bh(yh(i,e))?.key??null)}r=e.getKeyAfter(r)}};return n(e.getFirstKey()),t}selectAll(){!this.isSelectAll&&this.selectionMode===`multiple`&&this.state.setSelectedKeys(`all`)}clearSelection(){!this.disallowEmptySelection&&(this.state.selectedKeys===`all`||this.state.selectedKeys.size>0)&&this.state.setSelectedKeys(new Bw)}toggleSelectAll(){this.isSelectAll?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode!==`none`&&(this.selectionMode===`single`?this.isSelected(e)&&!this.disallowEmptySelection?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior===`toggle`||t&&(t.pointerType===`touch`||t.pointerType===`virtual`)?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys)return!0;let t=this.selectedKeys;if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){return this.canSelectItemIn(e,this.collection)}canSelectItemIn(e,t){if(this.state.selectionMode===`none`||this.state.disabledKeys.has(e))return!1;let n=t.getItem(e);return!(!n||n?.props?.isDisabled||n.type===`cell`&&!this.allowsCellSelection)}isDisabled(e){let t=this.collection.getItem(e);return this.state.disabledBehavior===`all`&&(this.state.disabledKeys.has(e)||!!t?.props?.isDisabled)&&t?.props?.disabledBehavior!==`selection`}isLink(e){return!!this.collection.getItem(e)?.props?.href}getItemProps(e){return this.collection.getItem(e)?.props}withCollection(t){return new e(t,this.state,{allowsCellSelection:this.allowsCellSelection,layoutDelegate:this.layoutDelegate||void 0,fullCollection:this.fullCollection??this.collection})}}})))()}function Yw(e){let{filter:t,layoutDelegate:n}=e,r=Uw(e),i=(0,Zw.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),a=Fw(e,(0,Zw.useCallback)(e=>t?new Rw(t(e)):new Rw(e),[t]),(0,Zw.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning])),o=(0,Zw.useMemo)(()=>new qw(a,r,{layoutDelegate:n}),[a,r,n]);return Xw(a,o),{collection:a,disabledKeys:i,selectionManager:o}}function Xw(e,t){let n=(0,Zw.useRef)(null);(0,Zw.useEffect)(()=>{if(t.focusedKey!=null&&!e.getItem(t.focusedKey)&&n.current){let r=n.current.getKeyAfter(t.focusedKey),i=null;for(;r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyAfter(r)}if(i==null)for(r=n.current.getKeyBefore(t.focusedKey);r!=null;){let a=e.getItem(r);if(a&&a.type===`item`&&!t.isDisabled(r)){i=r;break}r=n.current.getKeyBefore(r)}t.setFocusedKey(i)}n.current=e},[e,t])}var Zw;function Qw(){return(Qw=t((()=>{zw(),Kw(),Jw(),Lw(),Zw=r()})))()}function $w(e){let{defaultFilter:t,menuTrigger:n=`input`,allowsEmptyCollection:r=!1,allowsCustomValue:i,shouldCloseOnBlur:a=!0,selectionMode:o=`single`}=e,[s,c]=(0,iT.useState)(!1),[l,u]=(0,iT.useState)(!1),[d,f]=(0,iT.useState)(null),p=(0,iT.useMemo)(()=>e.defaultValue===void 0?o===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,o]),m=(0,iT.useMemo)(()=>e.value===void 0?o===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,o]),[h,g]=gt(m,p,e.onChange),_=o===`single`&&Array.isArray(h)?h[0]:h,v=t=>{if(o===`single`){let n=Array.isArray(t)?t[0]??null:t;g(n),n!==_&&e.onSelectionChange?.(n)}else{let e=[];Array.isArray(t)?e=t:t!=null&&(e=[t]),g(e)}},{collection:y,selectionManager:b,disabledKeys:x}=Yw({...e,items:e.items??e.defaultItems,selectionMode:o,disallowEmptySelection:o===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,iT.useMemo)(()=>rT(_),[_]),onSelectionChange:t=>{if(t!==`all`){if(o===`single`){let n=t.values().next().value??null;n===_?(e.onSelectionChange?.(n),te(),z()):v(n)}else v([...t])}}}),S=o===`single`?b.firstSelectedKey:null,C=(0,iT.useMemo)(()=>[...b.selectedKeys].map(e=>y.getItem(e)).filter(e=>e!=null),[b.selectedKeys,y]),[w,T]=gt(e.inputValue,nT(e.defaultInputValue,S,y)||``,e.onInputChange),[E]=(0,iT.useState)(_),[D]=(0,iT.useState)(w),O=y,k=(0,iT.useMemo)(()=>e.items!=null||!t?y:eT(y,w,t),[y,w,t,e.items]),[A,j]=(0,iT.useState)(k),M=(0,iT.useRef)(`focus`),N=t=>{e.onOpenChange&&e.onOpenChange(t,t?M.current:void 0),b.setFocused(t),t||b.setFocusedKey(null)},P=ct({...e,onOpenChange:N,isOpen:void 0,defaultOpen:void 0}),F=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;(r||k.size>0||a&&O.size>0||e.items)&&(a&&!P.isOpen&&e.items===void 0&&c(!0),M.current=i,f(t),P.open())},I=(t=null,i)=>{let a=i===`manual`||i===`focus`&&n===`focus`;!(r||k.size>0||a&&O.size>0||e.items)&&!P.isOpen||(a&&!P.isOpen&&e.items===void 0&&c(!0),P.isOpen||(M.current=i),R(t))},L=(0,iT.useCallback)(()=>{j(s?O:k)},[s,O,k]),R=(0,iT.useCallback)((e=null)=>{P.isOpen&&L(),f(e),P.toggle()},[P,L]),z=(0,iT.useCallback)(()=>{P.isOpen&&(L(),P.close())},[P,L]),[B,ee]=(0,iT.useState)(w),te=()=>{let e=S==null?``:y.getItem(S)?.textValue??``;ee(e),T(e)},V=(0,iT.useRef)(_),ne=(0,iT.useRef)(S==null?``:y.getItem(S)?.textValue??``);(0,iT.useEffect)(()=>{l&&(k.size>0||r)&&!P.isOpen&&w!==B&&n!==`manual`&&F(null,`input`),!s&&!r&&P.isOpen&&k.size===0&&z(),_!=null&&_!==V.current&&o===`single`&&z(),w!==B&&(b.setFocusedKey(null),c(!1),o===`single`&&w===``&&(e.inputValue===void 0||m===void 0)&&v(null)),_!==V.current&&(e.inputValue===void 0||m===void 0)?te():B!==w&&ee(w);let t=S==null?``:y.getItem(S)?.textValue??``;!l&&S!=null&&e.inputValue===void 0&&S===V.current&&ne.current!==t&&(ee(t),T(t)),V.current=_,ne.current=t});let re=Al({...e,value:(0,iT.useMemo)(()=>Array.isArray(_)&&_.length===0?null:{inputValue:w,value:_,selectedKey:S},[w,S,_])}),ie=()=>{i&&S==null?ae():oe()},ae=()=>{if(o===`multiple`){ee(w),z();return}V.current=null,v(null),z()},oe=(t=!1)=>{if(m!==void 0&&e.inputValue!==void 0){let n=S==null?``:y.getItem(S)?.textValue??``;(t||o===`multiple`||w!==n)&&(e.onSelectionChange?.(S),e.onChange?.(_)),ee(n),z()}else te(),z()},se=()=>{if(i){let e=S==null?``:y.getItem(S)?.textValue??``;w===e?oe():ae()}else oe()},ce=()=>{P.isOpen&&b.focusedKey!=null?b.isSelected(b.focusedKey)&&o===`single`?oe(!0):b.select(b.focusedKey):se()},le=(0,iT.useRef)([w,_]),ue=t=>{t?(le.current=[w,_],n===`focus`&&!e.isReadOnly&&F(null,`focus`)):(a&&se(),(w!==le.current[0]||_!==le.current[1])&&re.commitValidation()),u(t)},de=(0,iT.useMemo)(()=>P.isOpen?s?O:k:A,[P.isOpen,O,k,s,A]),fe=e.defaultSelectedKey??(o===`single`?E:null);return{...re,...P,focusStrategy:d,toggle:I,open:F,close:se,selectionManager:b,value:_,defaultValue:p??E,setValue:v,selectedKey:S,selectedItems:C,defaultSelectedKey:fe,setSelectedKey:v,disabledKeys:x,isFocused:l,setFocused:ue,selectedItem:C[0]??null,collection:de,inputValue:w,defaultInputValue:nT(e.defaultInputValue,fe,y)??D,setInputValue:T,commit:ce,revert:ie}}function eT(e,t,n){return new Rw(tT(e,e,t,n))}function tT(e,t,n,r){let i=[];for(let a of t)if(a.type===`section`&&a.hasChildNodes){let t=tT(e,yh(a,e),n,r);[...t].some(e=>e.type===`item`)&&i.push({...a,childNodes:t})}else(a.type===`item`&&r(a.textValue,n)||a.type!==`item`)&&i.push({...a});return i}function nT(e,t,n){return e==null&&t!=null?n.getItem(t)?.textValue??``:e}function rT(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var iT;function aT(){return(aT=t((()=>{Hl(),zw(),Qw(),Je(),ae(),iT=r()})))()}function oT(e,t){if(e==null)return t;if(typeof e==`string`||typeof e==`number`)return e;if(typeof e==`object`){if(`key`in e&&e.key!==null&&e.key!==void 0)return e.key;if(`id`in e&&e.id!==null&&e.id!==void 0)return e.id;if(`value`in e&&e.value!==null&&e.value!==void 0)return e.value}return t}function sT(e){if(e==null)return``;if(typeof e==`string`||typeof e==`number`)return String(e);if(typeof e==`object`){if(`textValue`in e&&typeof e.textValue==`string`)return e.textValue;if(`label`in e&&typeof e.label==`string`)return e.label;if(`name`in e&&typeof e.name==`string`)return e.name;if(`title`in e&&typeof e.title==`string`)return e.title;if(`value`in e&&e.value!==null&&e.value!==void 0)return String(e.value)}return String(e)}function cT(e,t={}){return Array.from(e).map((e,n)=>{let r=t.getItemTextValue?.(e)??sT(e);return{item:e,key:t.getItemKey?.(e)??oT(e,n),rendered:t.renderItem?t.renderItem(e):r,textValue:r,isDisabled:t.getItemDisabled?.(e)??(typeof e==`object`&&e&&e!==void 0&&`disabled`in e?!!e.disabled:!1)}})}function lT({selectedItem:e,inputValue:t}){return e!=null||typeof t==`string`&&t.trim().length>0}var uT,dT,fT,pT,mT,hT,gT,_T,vT;function yT(){return(yT=t((()=>{l(),u`
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
`,uT=u`
  position: absolute;
  z-index: var(--z-popover);
  min-width: var(--popover-trigger-width, 0);
  max-width: min(100vw - 24px, 560px);
  box-sizing: border-box;
  border: 1px solid var(--field-border);
  border-radius: calc(var(--control-radius) + 4px);
  background: var(--field-bg);
  box-shadow: 0 14px 32px rgba(10, 15, 23, 0.18);
`,dT=u`
  margin: 0;
  padding: var(--space-2);
  list-style: none;
  max-height: 240px;
  overflow: auto;
  display: grid;
  gap: var(--space-2);
`,fT=u`
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
`,pT=u`
  padding: var(--space-3);
  color: var(--field-description);
  font-size: 0.9375rem;
`,mT=u`
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
`,hT=u`
  width: 10px;
  height: 10px;
  border-right: 1.8px solid currentColor;
  border-bottom: 1.8px solid currentColor;
  transform: rotate(45deg);
`,gT=u`
  width: 10px;
  height: 6px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg) translateY(-1px);
`,_T=u`
  display: grid;
  gap: var(--space-2);
`,vT=u`
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
`})))()}function bT({item:e,state:t}){let n=xT.useRef(null),{optionProps:r,isDisabled:i,isFocused:a,isFocusVisible:o,isSelected:s}=J_({key:e.key},t,n);return(0,ST.jsxs)(`li`,{...r,ref:n,className:fT,"data-disabled":i?`true`:`false`,"data-focus-visible":o?`true`:`false`,"data-highlighted":a?`true`:`false`,"data-key":String(e.key),"data-selected":s?`true`:`false`,children:[(0,ST.jsx)(`span`,{children:e.rendered}),s?(0,ST.jsx)(`span`,{className:gT,"aria-hidden":`true`}):null]})}var xT,ST;function CT(){return(CT=t((()=>{xT=e(r()),Y_(),yT(),ST=G()})))()}function wT({section:e,state:t}){let n=e[`aria-label`],{itemProps:r,headingProps:i,groupProps:a}=K_({heading:e.rendered,...Y({"aria-label":n})});return(0,TT.jsxs)(`li`,{...r,className:ET,children:[e.rendered?(0,TT.jsx)(`span`,{...i,className:DT,children:e.rendered}):null,(0,TT.jsx)(`ul`,{...a,className:OT,children:Array.from(t.collection.getChildren?.(e.key)??[]).map(e=>(0,TT.jsx)(bT,{item:e,state:t},e.key))})]})}var TT,ET,DT,OT;function kT(){return(kT=t((()=>{l(),q_(),CT(),TT=G(),ET=u`
  display: grid;
  gap: var(--space-1);
`,DT=u`
  padding: var(--space-2) var(--space-3) 0;
  color: var(--field-label-color);
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.35;
`,OT=u`
  margin: 0;
  padding: 0;
  list-style: none;
`})))()}function AT({state:e,listBoxRef:t,className:n,emptyState:r,...a}){let{t:o}=i(`shared-module`),s=jT.useRef(null),l=t??s,{listBoxProps:u}=W_(a,e,l),d=Array.from(e.collection);return d.length===0?(0,MT.jsx)(`div`,{className:pT,role:`presentation`,children:r??o(`listBox.noResults`)}):(0,MT.jsx)(`ul`,{...u,ref:l,className:c(dT,n),children:d.map(t=>t.type===`section`?(0,MT.jsx)(wT,{section:t,state:e},t.key):(0,MT.jsx)(bT,{item:t,state:e},t.key))})}var jT,MT;function NT(){return(NT=t((()=>{l(),jT=e(r()),G_(),a(),yT(),CT(),kT(),MT=G()})))()}function PT({children:e,className:t,state:n,triggerRef:r,popoverRef:i,surfaceProps:a,placement:o=`bottom start`,offset:s=8,isNonModal:l=!1}){let d=FT.useRef(null),f=i??d,{popoverProps:p,underlayProps:m,placement:h}=jv({popoverRef:f,triggerRef:r,placement:o,offset:s,isNonModal:l},n),g=h!==null,_=r.current instanceof HTMLElement?r.current.offsetWidth:void 0,v=_===void 0?void 0:u`
          --popover-trigger-width: ${_}px;
        `;return(0,IT.jsx)(Ne,{disableFocusManagement:l,children:(0,IT.jsx)(`div`,{...m,className:LT,children:(0,IT.jsxs)(`div`,{...W(p,a),style:{...p.style,...a?.style,...g?null:{pointerEvents:`none`}},ref:f,className:c(uT,RT,v,t,a?.className),children:[(0,IT.jsx)(at,{onDismiss:n.close}),e,(0,IT.jsx)(at,{onDismiss:n.close})]})})})}var FT,IT,LT,RT;function zT(){return(zT=t((()=>{l(),FT=e(r()),Oe(),H(),et(),Nv(),yT(),IT=G(),LT=u`
  position: fixed;
  inset: 0;
  z-index: var(--z-popover);
  pointer-events: none;
`,RT=u`
  pointer-events: auto;
`})))()}function BT(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,items:d,children:f,getItemKey:p,getItemTextValue:m,getItemDisabled:h,inputValue:g,onInputChange:_,allowsCustomValue:v=!1,isEditable:y=!0,emptyState:b,className:x,isDisabled:S=!1,isReadOnly:C=!1,isRequired:w=!1,onFocus:T,onBlur:E,onKeyDown:D,onKeyUp:O,placeholder:k,"aria-label":A}=e,{field:j,resolvedError:M,isInvalid:N}=MS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:P}=i(`shared-module`),F=P(`comboBox.toggleOptions`),I=(0,VT.useRef)(null),L=(0,VT.useRef)(null),R=(0,VT.useRef)(null),z=(0,VT.useRef)(null),B=VT.useId(),ee=a??B,te=(0,VT.useMemo)(()=>({getItemKey:p,getItemTextValue:m,...Y({getItemDisabled:h,renderItem:f})}),[f,h,p,m]),V=(0,VT.useMemo)(()=>cT(d,te),[te,d]),ne=(0,VT.useMemo)(()=>V.filter(e=>e.isDisabled).map(e=>e.key),[V]),{contains:re}=v_({sensitivity:GT}),ie=j.value===null||j.value===void 0?null:j.value,ae=$w({items:V,children:e=>(0,HT.jsx)(Cw,{textValue:e.textValue,children:e.rendered},e.key),disabledKeys:ne,defaultFilter:re,selectedKey:ie,onSelectionChange:e=>{j.onChange(e)},allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:N,label:o,description:s,errorMessage:M,placeholder:k??` `,...Y({inputValue:g,onInputChange:_})}),{buttonProps:oe,inputProps:se,listBoxProps:ce,labelProps:le,descriptionProps:ue,errorMessageProps:de,isInvalid:fe,validationErrors:pe}=Oh({id:ee,items:V,disabledKeys:ne,inputRef:I,buttonRef:L,listBoxRef:R,popoverRef:z,selectedKey:ie,allowsCustomValue:v,isDisabled:S,isReadOnly:C,isRequired:w,isInvalid:N,label:o,description:s,errorMessage:M,placeholder:k??` `,name:j.name,...Y({inputValue:g,onInputChange:_,"aria-label":A})},ae),{buttonProps:me}=Ir(oe,L),[he,ge]=(0,VT.useState)(!1),_e=lT({inputValue:ae.inputValue,selectedItem:ae.selectedItem}),ve=he||_e,ye=W(se,{onMouseDown:e=>{!ae.isOpen&&!S&&!C&&(e.preventDefault(),I.current?.focus(),ae.open()),se.onMouseDown?.(e)},onBeforeInput:e=>{y||e.preventDefault()},onFocus:e=>{ge(!0),se.onFocus?.(e),T?.(e)},onBlur:e=>{ge(!1),se.onBlur?.(e),E?.(e),j.onBlur()},onKeyDown:e=>{let t=e.key.length===1||e.key===`Backspace`||e.key===`Delete`;if(!y&&t){e.preventDefault();return}D?.(e)},onKeyUp:O}),be=M??(fe&&pe.length>0?pe.join(` `):null);return(0,HT.jsxs)(`div`,{className:c(LC,x),children:[(0,HT.jsxs)(`div`,{className:c(RC,UT),"data-field-control":`true`,"data-open":ae.isOpen?`true`:`false`,"data-disabled":S?`true`:`false`,"data-invalid":fe?`true`:`false`,"data-readonly":C?`true`:`false`,"data-focused":he?`true`:`false`,"data-floated":ve?`true`:`false`,"data-filled":_e?`true`:`false`,children:[(0,HT.jsx)(`input`,{...ye,ref:FS(I,j.ref),className:c(AC(u),!y&&WT)}),(0,HT.jsx)(`label`,{...le,className:TC(u),children:o}),(0,HT.jsx)(`button`,{...me,ref:L,className:mT,"aria-label":F,type:`button`,children:(0,HT.jsx)(`span`,{className:hT,"aria-hidden":`true`})}),ae.isOpen?(0,HT.jsx)(PT,{isNonModal:!0,popoverRef:z,state:ae,triggerRef:I,children:(0,HT.jsx)(AT,{...ce,emptyState:b,listBoxRef:R,state:ae})}):null]}),be?(0,HT.jsx)(`p`,{...de,role:`alert`,className:OC(u,!0),children:be}):s?(0,HT.jsx)(`p`,{...ue,className:OC(u,!1),children:s}):null]})}var VT,HT,UT,WT,GT;function KT(){return(KT=t((()=>{l(),ww(),aT(),VT=e(r()),H(),Lr(),jh(),b_(),a(),NS(),dw(),NT(),zT(),yT(),HT=G(),UT=u`
  position: relative;

  &[data-open="false"] {
    cursor: pointer;
  }

  &[data-open="false"] input,
  &[data-open="false"] button {
    cursor: pointer;
  }
`,WT=u`
  caret-color: transparent;
  user-select: none;
  cursor: pointer;
`,GT=`base`})))()}var qT;function JT(){return(JT=t((()=>{qT={},qT={rangeOverflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.maxValue} \u{623}\u{648} \u{642}\u{628}\u{644} \u{630}\u{644}\u{643}.`,rangeReversed:`تاريخ البدء يجب أن يكون قبل تاريخ الانتهاء.`,rangeUnderflow:e=>`\u{64A}\u{62C}\u{628} \u{623}\u{646} \u{62A}\u{643}\u{648}\u{646} \u{627}\u{644}\u{642}\u{64A}\u{645}\u{629} ${e.minValue} \u{623}\u{648} \u{628}\u{639}\u{62F} \u{630}\u{644}\u{643}.`,unavailableDate:`البيانات المحددة غير متاحة.`}})))()}var YT;function XT(){return(XT=t((()=>{YT={},YT={rangeOverflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.maxValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{440}\u{430}\u{43D}\u{43D}\u{430}.`,rangeReversed:`Началната дата трябва да е преди крайната.`,rangeUnderflow:e=>`\u{421}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442}\u{442}\u{430} \u{442}\u{440}\u{44F}\u{431}\u{432}\u{430} \u{434}\u{430} \u{435} ${e.minValue} \u{438}\u{43B}\u{438} \u{43F}\u{43E}-\u{43A}\u{44A}\u{441}\u{43D}\u{43E}.`,unavailableDate:`Избраната дата не е налична.`}})))()}var ZT;function QT(){return(QT=t((()=>{ZT={},ZT={rangeOverflow:e=>`Hodnota mus\xed b\xfdt ${e.maxValue} nebo d\u{159}\xedv\u{11B}j\u{161}\xed.`,rangeReversed:`Datum zahájení musí předcházet datu ukončení.`,rangeUnderflow:e=>`Hodnota mus\xed b\xfdt ${e.minValue} nebo pozd\u{11B}j\u{161}\xed.`,unavailableDate:`Vybrané datum není k dispozici.`}})))()}var $T;function eE(){return(eE=t((()=>{$T={},$T={rangeOverflow:e=>`V\xe6rdien skal v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen skal være før slutdatoen.`,rangeUnderflow:e=>`V\xe6rdien skal v\xe6re ${e.minValue} eller nyere.`,unavailableDate:`Den valgte dato er ikke tilgængelig.`}})))()}var tE;function nE(){return(nE=t((()=>{tE={},tE={rangeOverflow:e=>`Der Wert muss ${e.maxValue} oder fr\xfcher sein.`,rangeReversed:`Das Startdatum muss vor dem Enddatum liegen.`,rangeUnderflow:e=>`Der Wert muss ${e.minValue} oder sp\xe4ter sein.`,unavailableDate:`Das ausgewählte Datum ist nicht verfügbar.`}})))()}var rE;function iE(){return(iE=t((()=>{rE={},rE={rangeOverflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.maxValue} \u{3AE} \u{3C0}\u{3B1}\u{3BB}\u{3B1}\u{3B9}\u{3CC}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,rangeReversed:`Η ημερομηνία έναρξης πρέπει να είναι πριν από την ημερομηνία λήξης.`,rangeUnderflow:e=>`\u{397} \u{3C4}\u{3B9}\u{3BC}\u{3AE} \u{3C0}\u{3C1}\u{3AD}\u{3C0}\u{3B5}\u{3B9} \u{3BD}\u{3B1} \u{3B5}\u{3AF}\u{3BD}\u{3B1}\u{3B9} ${e.minValue} \u{3AE} \u{3BC}\u{3B5}\u{3C4}\u{3B1}\u{3B3}\u{3B5}\u{3BD}\u{3AD}\u{3C3}\u{3C4}\u{3B5}\u{3C1}\u{3B7}.`,unavailableDate:`Η επιλεγμένη ημερομηνία δεν είναι διαθέσιμη.`}})))()}var aE;function oE(){return(oE=t((()=>{aE={},aE={rangeUnderflow:e=>`Value must be ${e.minValue} or later.`,rangeOverflow:e=>`Value must be ${e.maxValue} or earlier.`,rangeReversed:`Start date must be before end date.`,unavailableDate:`Selected date unavailable.`}})))()}var sE;function cE(){return(cE=t((()=>{sE={},sE={rangeOverflow:e=>`El valor debe ser ${e.maxValue} o anterior.`,rangeReversed:`La fecha de inicio debe ser anterior a la fecha de finalización.`,rangeUnderflow:e=>`El valor debe ser ${e.minValue} o posterior.`,unavailableDate:`Fecha seleccionada no disponible.`}})))()}var lE;function uE(){return(uE=t((()=>{lE={},lE={rangeOverflow:e=>`V\xe4\xe4rtus peab olema ${e.maxValue} v\xf5i varasem.`,rangeReversed:`Alguskuupäev peab olema enne lõppkuupäeva.`,rangeUnderflow:e=>`V\xe4\xe4rtus peab olema ${e.minValue} v\xf5i hilisem.`,unavailableDate:`Valitud kuupäev pole saadaval.`}})))()}var dE;function fE(){return(fE=t((()=>{dE={},dE={rangeOverflow:e=>`Arvon on oltava ${e.maxValue} tai sit\xe4 aikaisempi.`,rangeReversed:`Aloituspäivän on oltava ennen lopetuspäivää.`,rangeUnderflow:e=>`Arvon on oltava ${e.minValue} tai sit\xe4 my\xf6h\xe4isempi.`,unavailableDate:`Valittu päivämäärä ei ole käytettävissä.`}})))()}var pE;function mE(){return(mE=t((()=>{pE={},pE={rangeOverflow:e=>`La valeur doit \xeatre ${e.maxValue} ou ant\xe9rieure.`,rangeReversed:`La date de début doit être antérieure à la date de fin.`,rangeUnderflow:e=>`La valeur doit \xeatre ${e.minValue} ou ult\xe9rieure.`,unavailableDate:`La date sélectionnée n’est pas disponible.`}})))()}var hE;function gE(){return(gE=t((()=>{hE={},hE={rangeOverflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.maxValue} \u{5D0}\u{5D5} \u{5DE}\u{5D5}\u{5E7}\u{5D3}\u{5DD} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,rangeReversed:`תאריך ההתחלה חייב להיות לפני תאריך הסיום.`,rangeUnderflow:e=>`\u{5D4}\u{5E2}\u{5E8}\u{5DA} \u{5D7}\u{5D9}\u{5D9}\u{5D1} \u{5DC}\u{5D4}\u{5D9}\u{5D5}\u{5EA} ${e.minValue} \u{5D0}\u{5D5} \u{5DE}\u{5D0}\u{5D5}\u{5D7}\u{5E8} \u{5D9}\u{5D5}\u{5EA}\u{5E8}.`,unavailableDate:`התאריך הנבחר אינו זמין.`}})))()}var _E;function vE(){return(vE=t((()=>{_E={},_E={rangeOverflow:e=>`Vrijednost mora biti ${e.maxValue} ili ranije.`,rangeReversed:`Datum početka mora biti prije datuma završetka.`,rangeUnderflow:e=>`Vrijednost mora biti ${e.minValue} ili kasnije.`,unavailableDate:`Odabrani datum nije dostupan.`}})))()}var yE;function bE(){return(bE=t((()=>{yE={},yE={rangeOverflow:e=>`Az \xe9rt\xe9knek ${e.maxValue} vagy kor\xe1bbinak kell lennie.`,rangeReversed:`A kezdő dátumnak a befejező dátumnál korábbinak kell lennie.`,rangeUnderflow:e=>`Az \xe9rt\xe9knek ${e.minValue} vagy k\xe9s\u{151}bbinek kell lennie.`,unavailableDate:`A kiválasztott dátum nem érhető el.`}})))()}var xE;function SE(){return(SE=t((()=>{xE={},xE={rangeOverflow:e=>`Il valore deve essere ${e.maxValue} o precedente.`,rangeReversed:`La data di inizio deve essere antecedente alla data di fine.`,rangeUnderflow:e=>`Il valore deve essere ${e.minValue} o successivo.`,unavailableDate:`Data selezionata non disponibile.`}})))()}var CE;function wE(){return(wE=t((()=>{CE={},CE={rangeOverflow:e=>`\u{5024}\u{306F} ${e.maxValue} \u{4EE5}\u{4E0B}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,rangeReversed:`開始日は終了日より前にする必要があります。`,rangeUnderflow:e=>`\u{5024}\u{306F} ${e.minValue} \u{4EE5}\u{4E0A}\u{306B}\u{3059}\u{308B}\u{5FC5}\u{8981}\u{304C}\u{3042}\u{308A}\u{307E}\u{3059}\u{3002}`,unavailableDate:`選択した日付は使用できません。`}})))()}var TE;function EE(){return(EE=t((()=>{TE={},TE={rangeOverflow:e=>`\u{AC12}\u{C740} ${e.maxValue} \u{C774}\u{C804}\u{C774}\u{C5B4}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,rangeReversed:`시작일은 종료일 이전이어야 합니다.`,rangeUnderflow:e=>`\u{AC12}\u{C740} ${e.minValue} \u{C774}\u{D6C4}\u{C5EC}\u{C57C} \u{D569}\u{B2C8}\u{B2E4}.`,unavailableDate:`선택한 날짜를 사용할 수 없습니다.`}})))()}var DE;function OE(){return(OE=t((()=>{DE={},DE={rangeOverflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.maxValue} arba ankstesn\u{117}.`,rangeReversed:`Pradžios data turi būti ankstesnė nei pabaigos data.`,rangeUnderflow:e=>`Reik\u{161}m\u{117} turi b\u{16B}ti ${e.minValue} arba naujesn\u{117}.`,unavailableDate:`Pasirinkta data nepasiekiama.`}})))()}var kE;function AE(){return(AE=t((()=>{kE={},kE={rangeOverflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.maxValue} vai agr\u{101}kai.`,rangeReversed:`Sākuma datumam ir jābūt pirms beigu datuma.`,rangeUnderflow:e=>`V\u{113}rt\u{12B}bai ir j\u{101}b\u{16B}t ${e.minValue} vai v\u{113}l\u{101}kai.`,unavailableDate:`Atlasītais datums nav pieejams.`}})))()}var jE;function ME(){return(ME=t((()=>{jE={},jE={rangeOverflow:e=>`Verdien m\xe5 v\xe6re ${e.maxValue} eller tidligere.`,rangeReversed:`Startdatoen må være før sluttdatoen.`,rangeUnderflow:e=>`Verdien m\xe5 v\xe6re ${e.minValue} eller senere.`,unavailableDate:`Valgt dato utilgjengelig.`}})))()}var NE;function PE(){return(PE=t((()=>{NE={},NE={rangeOverflow:e=>`Waarde moet ${e.maxValue} of eerder zijn.`,rangeReversed:`De startdatum moet voor de einddatum liggen.`,rangeUnderflow:e=>`Waarde moet ${e.minValue} of later zijn.`,unavailableDate:`Geselecteerde datum niet beschikbaar.`}})))()}var FE;function IE(){return(IE=t((()=>{FE={},FE={rangeOverflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.maxValue} lub wcze\u{15B}niejsz\u{105}.`,rangeReversed:`Data rozpoczęcia musi być wcześniejsza niż data zakończenia.`,rangeUnderflow:e=>`Warto\u{15B}\u{107} musi mie\u{107} warto\u{15B}\u{107} ${e.minValue} lub p\xf3\u{17A}niejsz\u{105}.`,unavailableDate:`Wybrana data jest niedostępna.`}})))()}var LE;function RE(){return(RE=t((()=>{LE={},LE={rangeOverflow:e=>`O valor deve ser ${e.maxValue} ou anterior.`,rangeReversed:`A data inicial deve ser anterior à data final.`,rangeUnderflow:e=>`O valor deve ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var zE;function BE(){return(BE=t((()=>{zE={},zE={rangeOverflow:e=>`O valor tem de ser ${e.maxValue} ou anterior.`,rangeReversed:`A data de início deve ser anterior à data de fim.`,rangeUnderflow:e=>`O valor tem de ser ${e.minValue} ou posterior.`,unavailableDate:`Data selecionada indisponível.`}})))()}var VE;function HE(){return(HE=t((()=>{VE={},VE={rangeOverflow:e=>`Valoarea trebuie s\u{103} fie ${e.maxValue} sau anterioar\u{103}.`,rangeReversed:`Data de început trebuie să fie anterioară datei de sfârșit.`,rangeUnderflow:e=>`Valoarea trebuie s\u{103} fie ${e.minValue} sau ulterioar\u{103}.`,unavailableDate:`Data selectată nu este disponibilă.`}})))()}var UE;function WE(){return(WE=t((()=>{UE={},UE={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{43F}\u{43E}\u{437}\u{436}\u{435} ${e.maxValue}.`,rangeReversed:`Дата начала должна предшествовать дате окончания.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{438}\u{435} \u{434}\u{43E}\u{43B}\u{436}\u{43D}\u{43E} \u{431}\u{44B}\u{442}\u{44C} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{44C}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Выбранная дата недоступна.`}})))()}var GE;function KE(){return(KE=t((()=>{GE={},GE={rangeOverflow:e=>`Hodnota mus\xed by\u{165} ${e.maxValue} alebo skor\u{161}ia.`,rangeReversed:`Dátum začiatku musí byť skorší ako dátum konca.`,rangeUnderflow:e=>`Hodnota mus\xed by\u{165} ${e.minValue} alebo neskor\u{161}ia.`,unavailableDate:`Vybratý dátum je nedostupný.`}})))()}var qE;function JE(){return(JE=t((()=>{qE={},qE={rangeOverflow:e=>`Vrednost mora biti ${e.maxValue} ali starej\u{161}a.`,rangeReversed:`Začetni datum mora biti pred končnim datumom.`,rangeUnderflow:e=>`Vrednost mora biti ${e.minValue} ali novej\u{161}a.`,unavailableDate:`Izbrani datum ni na voljo.`}})))()}var YE;function XE(){return(XE=t((()=>{YE={},YE={rangeOverflow:e=>`Vrednost mora da bude ${e.maxValue} ili starija.`,rangeReversed:`Datum početka mora biti pre datuma završetka.`,rangeUnderflow:e=>`Vrednost mora da bude ${e.minValue} ili novija.`,unavailableDate:`Izabrani datum nije dostupan.`}})))()}var ZE;function QE(){return(QE=t((()=>{ZE={},ZE={rangeOverflow:e=>`V\xe4rdet m\xe5ste vara ${e.maxValue} eller tidigare.`,rangeReversed:`Startdatumet måste vara före slutdatumet.`,rangeUnderflow:e=>`V\xe4rdet m\xe5ste vara ${e.minValue} eller senare.`,unavailableDate:`Det valda datumet är inte tillgängligt.`}})))()}var $E;function eD(){return(eD=t((()=>{$E={},$E={rangeOverflow:e=>`De\u{11F}er, ${e.maxValue} veya \xf6ncesi olmal\u{131}d\u{131}r.`,rangeReversed:`Başlangıç tarihi bitiş tarihinden önce olmalıdır.`,rangeUnderflow:e=>`De\u{11F}er, ${e.minValue} veya sonras\u{131} olmal\u{131}d\u{131}r.`,unavailableDate:`Seçilen tarih kullanılamıyor.`}})))()}var tD;function nD(){return(nD=t((()=>{tD={},tD={rangeOverflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{43F}\u{456}\u{437}\u{43D}\u{456}\u{448}\u{435} ${e.maxValue}.`,rangeReversed:`Дата початку має передувати даті завершення.`,rangeUnderflow:e=>`\u{417}\u{43D}\u{430}\u{447}\u{435}\u{43D}\u{43D}\u{44F} \u{43C}\u{430}\u{454} \u{431}\u{443}\u{442}\u{438} \u{43D}\u{435} \u{440}\u{430}\u{43D}\u{456}\u{448}\u{435} ${e.minValue}.`,unavailableDate:`Вибрана дата недоступна.`}})))()}var rD;function iD(){return(iD=t((()=>{rD={},rD={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{65E5}\u{671F}\u{3002}`,rangeReversed:`开始日期必须早于结束日期。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{987B}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{65E5}\u{671F}\u{3002}`,unavailableDate:`所选日期不可用。`}})))()}var aD;function oD(){return(oD=t((()=>{aD={},aD={rangeOverflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.maxValue} \u{6216}\u{66F4}\u{65E9}\u{3002}`,rangeReversed:`開始日期必須在結束日期之前。`,rangeUnderflow:e=>`\u{503C}\u{5FC5}\u{9808}\u{662F} ${e.minValue} \u{6216}\u{66F4}\u{665A}\u{3002}`,unavailableDate:`所選日期無法使用。`}})))()}var sD;function cD(){return(cD=t((()=>{JT(),XT(),QT(),eE(),nE(),iE(),oE(),cE(),uE(),fE(),mE(),gE(),vE(),bE(),SE(),wE(),EE(),OE(),AE(),ME(),PE(),IE(),RE(),BE(),HE(),WE(),KE(),JE(),XE(),QE(),eD(),nD(),iD(),oD(),sD={},sD={"ar-AE":qT,"bg-BG":YT,"cs-CZ":ZT,"da-DK":$T,"de-DE":tE,"el-GR":rE,"en-US":aE,"es-ES":sE,"et-EE":lE,"fi-FI":dE,"fr-FR":pE,"he-IL":hE,"hr-HR":_E,"hu-HU":yE,"it-IT":xE,"ja-JP":CE,"ko-KR":TE,"lt-LT":DE,"lv-LV":kE,"nb-NO":jE,"nl-NL":NE,"pl-PL":FE,"pt-BR":LE,"pt-PT":zE,"ro-RO":VE,"ru-RU":UE,"sk-SK":GE,"sl-SI":qE,"sr-SP":YE,"sv-SE":ZE,"tr-TR":$E,"uk-UA":tD,"zh-CN":rD,"zh-TW":aD}})))()}function lD(e){return e&&e.__esModule?e.default:e}function uD(){let e=typeof navigator<`u`&&(navigator.language||navigator.userLanguage)||`en-US`;try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e=`en-US`}return e}function dD(e,t,n,r,i){let a=e!=null&&n!=null&&e.compare(n)>0,o=e!=null&&t!=null&&e.compare(t)<0,s=e!=null&&r?.(e)||!1,c=a||o||s,l=[];if(c){let e=uD(),r=M.getGlobalDictionaryForPackage(`@react-stately/datepicker`)||vD,c=new pe(e,r),u=new Oc(e,fD({},i)),d=u.resolvedOptions().timeZone;o&&t!=null&&l.push(c.format(`rangeUnderflow`,{minValue:u.format(t.toDate(d))})),a&&n!=null&&l.push(c.format(`rangeOverflow`,{maxValue:u.format(n.toDate(d))})),s&&l.push(c.format(`unavailableDate`))}return{isInvalid:c,validationErrors:l,validationDetails:{badInput:s,customError:!1,patternMismatch:!1,rangeOverflow:a,rangeUnderflow:o,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!c}}}function fD(e,t){e={...t.shouldForceLeadingZeros?bD:yD,...e};let n=t.granularity||`minute`,r=Object.keys(e),i=r.indexOf(t.maxGranularity??`year`);i<0&&(i=0);let a=r.indexOf(n);if(a<0&&(a=2),i>a)throw Error(`maxGranularity must be greater than granularity`);let o=r.slice(i,a+1).reduce((t,n)=>(t[n]=e[n],t),{});return t.hourCycle!=null&&(o.hour12=t.hourCycle===12),o.timeZone=t.timeZone||`UTC`,(n===`hour`||n===`minute`||n===`second`)&&t.timeZone&&!t.hideTimeZone&&(o.timeZoneName=`short`),t.showEra&&i===0&&(o.era=`short`),o}function pD(e){return e&&`hour`in e?e:new ns}function mD(e,t){if(e===null)return null;if(e)return so(e,t)}function hD(e,t,n,r){if(e)return mD(e,n);let i=so(Ea(r??ja()).set({hour:0,minute:0,second:0,millisecond:0}),n);return t===`year`||t===`month`||t===`day`?io(i):r?i:ao(i)}function gD(e,t){let n=e&&`timeZone`in e?e.timeZone:void 0,r=e&&`minute`in e?`minute`:`day`;if(e&&t&&!(t in e))throw Error(`Invalid granularity `+t+` for value `+e.toString());let[i,a]=(0,_D.useState)([r,n]);e&&(i[0]!==r||i[1]!==n)&&a([r,n]),t||=e?r:i[0];let o=e?n:i[1];return[t,o]}var _D,vD,yD,bD;function xD(){return(xD=t((()=>{cD(),Mc(),as(),mo(),Ja(),tt(),w(),_D=r(),vD=new M(lD(sD)),yD={year:`numeric`,month:`numeric`,day:`numeric`,hour:`numeric`,minute:`2-digit`,second:`2-digit`},bD={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}})))()}function SD(e){let t=ct(e),[n,r]=gt(e.value,e.defaultValue||null,e.onChange),[i]=(0,CD.useState)(n),a=n||e.placeholderValue||null,[o,s]=gD(a,e.granularity),c=n==null?null:n.toDate(s??`UTC`),l=o===`hour`||o===`minute`||o===`second`,u=e.shouldCloseOnSelect??!0,[d,f]=(0,CD.useState)(null),[p,m]=(0,CD.useState)(null);if(n&&(d=n,`hour`in n&&(p=n)),a&&!(o in a))throw Error(`Invalid granularity `+o+` for value `+a.toString());let h=n?.calendar.identifier===`gregory`&&n.era===`BC`,g=(0,CD.useMemo)(()=>({granularity:o,timeZone:s,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,shouldForceLeadingZeros:e.shouldForceLeadingZeros,showEra:h}),[o,e.hourCycle,e.shouldForceLeadingZeros,s,e.hideTimeZone,h]),{minValue:_,maxValue:v,isDateUnavailable:y}=e,b=(0,CD.useMemo)(()=>dD(n,_,v,y,g),[n,_,v,y,g]),x=Al({...e,value:n,builtinValidation:b}),S=x.displayValidation.isInvalid,C=e.validationState||(S?`invalid`:null),w=(e,t)=>{r(`timeZone`in t?t.set(io(e)):ao(e,t)),f(null),m(null),x.commitValidation()},T=n=>{let i=typeof u==`function`?u():u;l?p||i?w(n,p||pD(e.defaultValue||e.placeholderValue)):f(n):(r(n),x.commitValidation()),i&&t.setOpen(!1)},E=e=>{d&&e?w(d,e):m(e)};return{...x,value:n,defaultValue:e.defaultValue??i,setValue:r,dateValue:d,timeValue:p,setDateValue:T,setTimeValue:E,granularity:o,hasTime:l,...t,setOpen(r){!r&&!n&&d&&l&&w(d,p||pD(e.defaultValue||e.placeholderValue)),t.setOpen(r)},validationState:C,isInvalid:S,formatValue(e,t){if(!c)return``;let n=fD(t,g);return new Oc(e,n).format(c)},getDateFormatter(e,t){let n=fD({},{...g,...t});return new Oc(e,n)}}}var CD;function wD(){return(wD=t((()=>{xD(),Hl(),Je(),ae(),mo(),Mc(),CD=r()})))()}function TD(e,t,n){return e===`era`||e===`dayPeriod`?t:e===`year`||e===`month`||e===`day`?ED.getStringForLocale(e,n):`––`}var ED;function DD(){return(DD=t((()=>{tt(),ED=new M({ach:{year:`mwaka`,month:`dwe`,day:`nino`},af:{year:`jjjj`,month:`mm`,day:`dd`},am:{year:`ዓዓዓዓ`,month:`ሚሜ`,day:`ቀቀ`},an:{year:`aaaa`,month:`mm`,day:`dd`},ar:{year:`سنة`,month:`شهر`,day:`يوم`},ast:{year:`aaaa`,month:`mm`,day:`dd`},az:{year:`iiii`,month:`aa`,day:`gg`},be:{year:`гггг`,month:`мм`,day:`дд`},bg:{year:`гггг`,month:`мм`,day:`дд`},bn:{year:`yyyy`,month:`মিমি`,day:`dd`},br:{year:`bbbb`,month:`mm`,day:`dd`},bs:{year:`gggg`,month:`mm`,day:`dd`},ca:{year:`aaaa`,month:`mm`,day:`dd`},cak:{year:`jjjj`,month:`ii`,day:`q'q'`},ckb:{year:`ساڵ`,month:`مانگ`,day:`ڕۆژ`},cs:{year:`rrrr`,month:`mm`,day:`dd`},cy:{year:`bbbb`,month:`mm`,day:`dd`},da:{year:`åååå`,month:`mm`,day:`dd`},de:{year:`jjjj`,month:`mm`,day:`tt`},dsb:{year:`llll`,month:`mm`,day:`źź`},el:{year:`εεεε`,month:`μμ`,day:`ηη`},en:{year:`yyyy`,month:`mm`,day:`dd`},eo:{year:`jjjj`,month:`mm`,day:`tt`},es:{year:`aaaa`,month:`mm`,day:`dd`},et:{year:`aaaa`,month:`kk`,day:`pp`},eu:{year:`uuuu`,month:`hh`,day:`ee`},fa:{year:`سال`,month:`ماه`,day:`روز`},ff:{year:`hhhh`,month:`ll`,day:`ññ`},fi:{year:`vvvv`,month:`kk`,day:`pp`},fr:{year:`aaaa`,month:`mm`,day:`jj`},fy:{year:`jjjj`,month:`mm`,day:`dd`},ga:{year:`bbbb`,month:`mm`,day:`ll`},gd:{year:`bbbb`,month:`mm`,day:`ll`},gl:{year:`aaaa`,month:`mm`,day:`dd`},he:{year:`שנה`,month:`חודש`,day:`יום`},hr:{year:`gggg`,month:`mm`,day:`dd`},hsb:{year:`llll`,month:`mm`,day:`dd`},hu:{year:`éééé`,month:`hh`,day:`nn`},ia:{year:`aaaa`,month:`mm`,day:`dd`},id:{year:`tttt`,month:`bb`,day:`hh`},is:{year:`áááá`,month:`mm`,day:`dd`},it:{year:`aaaa`,month:`mm`,day:`gg`},ja:{year:`年`,month:`月`,day:`日`},ka:{year:`წწწწ`,month:`თთ`,day:`რრ`},kk:{year:`жжжж`,month:`аа`,day:`кк`},kn:{year:`ವವವವ`,month:`ಮಿಮೀ`,day:`ದಿದಿ`},ko:{year:`연도`,month:`월`,day:`일`},lb:{year:`jjjj`,month:`mm`,day:`dd`},lo:{year:`ປປປປ`,month:`ດດ`,day:`ວວ`},lt:{year:`mmmm`,month:`mm`,day:`dd`},lv:{year:`gggg`,month:`mm`,day:`dd`},meh:{year:`aaaa`,month:`mm`,day:`dd`},ml:{year:`വർഷം`,month:`മാസം`,day:`തീയതി`},ms:{year:`tttt`,month:`mm`,day:`hh`},nb:{year:`åååå`,month:`mm`,day:`dd`},nl:{year:`jjjj`,month:`mm`,day:`dd`},nn:{year:`åååå`,month:`mm`,day:`dd`},no:{year:`åååå`,month:`mm`,day:`dd`},oc:{year:`aaaa`,month:`mm`,day:`jj`},pl:{year:`rrrr`,month:`mm`,day:`dd`},pt:{year:`aaaa`,month:`mm`,day:`dd`},rm:{year:`oooo`,month:`mm`,day:`dd`},ro:{year:`aaaa`,month:`ll`,day:`zz`},ru:{year:`гггг`,month:`мм`,day:`дд`},sc:{year:`aaaa`,month:`mm`,day:`dd`},scn:{year:`aaaa`,month:`mm`,day:`jj`},sk:{year:`rrrr`,month:`mm`,day:`dd`},sl:{year:`llll`,month:`mm`,day:`dd`},sr:{year:`гггг`,month:`мм`,day:`дд`},"sr-Latn":{year:`gggg`,month:`mm`,day:`dd`},sv:{year:`åååå`,month:`mm`,day:`dd`},szl:{year:`rrrr`,month:`mm`,day:`dd`},tg:{year:`сссс`,month:`мм`,day:`рр`},th:{year:`ปปปป`,month:`ดด`,day:`วว`},tr:{year:`yyyy`,month:`aa`,day:`gg`},uk:{year:`рррр`,month:`мм`,day:`дд`},"zh-CN":{year:`年`,month:`月`,day:`日`},"zh-TW":{year:`年`,month:`月`,day:`日`}},`en`)})))()}function OD(e,t,n,r,i=!1){if(i){e+=Math.sign(t),e<n&&(e=r);let i=Math.abs(t);e=t>0?Math.ceil(e/i)*i:Math.floor(e/i)*i,e>r&&(e=n)}else e+=t,e<n?e=r-(n-e-1):e>r&&(e=n+(e-r-1));return e}function kD(e,t){let n=+(e>=12);switch(t){case`h11`:e>=12&&(e-=12);break;case`h12`:e===0?e=12:e>12&&(e-=12);break;case`h23`:n=null;break;case`h24`:e+=1,n=null}return[n,e]}function AD(e,t,n){switch(n){case`h11`:t===1&&(e+=12);break;case`h12`:e===12&&(e=0),t===1&&(e+=12);break;case`h24`:--e}return e}var jD;function MD(){return(MD=t((()=>{as(),jD=class e{constructor(e,t,n){if(this.era=n?.era??null,this.calendar=e,this.year=n?.year??null,this.month=n?.month??null,this.day=n?.day??null,this.hour=n?.hour??null,this.hourCycle=t,this.dayPeriod=null,this.minute=n?.minute??null,this.second=n?.second??null,this.millisecond=n?.millisecond??null,this.offset=`offset`in(n??{})?n.offset:null,this.hour!=null){let[e,n]=kD(this.hour,t);this.dayPeriod=e,this.hour=n}}copy(){let t=new e(this.calendar,this.hourCycle);return t.era=this.era,t.year=this.year,t.month=this.month,t.day=this.day,t.hour=this.hour,t.dayPeriod=this.dayPeriod,t.minute=this.minute,t.second=this.second,t.millisecond=this.millisecond,t.offset=this.offset,t}isComplete(e){return e.every(e=>this[e]!=null)}validate(e,t){return t.every(t=>{if((t===`hour`||t===`dayPeriod`)&&`hour`in e){let[t,n]=kD(e.hour,this.hourCycle);return this.dayPeriod===t&&this.hour===n}return this[t]===e[t]})}isCleared(e){return e.every(e=>this[e]===null)}set(e,t,n){let r=this.copy();return r[e]=t,e===`hour`&&r.dayPeriod==null&&`hour`in n&&(r.dayPeriod=kD(n.hour,this.hourCycle)[0]),e===`year`&&r.era==null&&(r.era=n.era),e!==`second`&&e!==`literal`&&e!==`timeZoneName`&&(r.offset=null),r}clear(e){let t=this.copy();return t[e]=null,e===`year`&&(t.era=null),t.offset=null,t}cycle(e,t,n,r){let i=this.copy();if(i[e]==null&&e!==`dayPeriod`&&e!==`era`){if(e===`hour`&&`hour`in n){let[e,t]=kD(n.hour,this.hourCycle);i.dayPeriod=e,i.hour=t}else i[e]=n[e];return e===`year`&&i.era==null&&(i.era=n.era),i}switch(e){case`era`:{let e=this.calendar.getEras(),n=e.indexOf(i.era);n=OD(n,t,0,e.length-1),i.era=e[n];break}case`year`:{let r=new ts(this.calendar,this.era??n.era,this.year??n.year,this.month??1,this.day??1);r=r.cycle(e,t,{round:e===`year`}),i.era=r.era,i.year=r.year;break}case`month`:i.month=OD(i.month??1,t,1,this.calendar.getMaximumMonthsInYear());break;case`day`:i.day=OD(i.day??1,t,1,this.calendar.getMaximumDaysInMonth());break;case`hour`:{let e=r.some(e=>[`year`,`month`,`day`].includes(e));if(`timeZone`in n&&(!e||i.year!=null&&i.month!=null&&i.day!=null)){let e=this.toValue(n);e=e.cycle(`hour`,t,{hourCycle:this.hourCycle===`h12`?12:24,round:!1});let[r,a]=kD(e.hour,this.hourCycle);i.hour=a,i.dayPeriod=r,i.offset=e.offset}else{let e=i.hour??0,r=this.getSegmentLimits(`hour`);i.hour=OD(e,t,r.minValue,r.maxValue),i.dayPeriod==null&&`hour`in n&&(i.dayPeriod=kD(n.hour,this.hourCycle)[0])}break}case`dayPeriod`:i.dayPeriod=OD(i.dayPeriod??0,t,0,1);break;case`minute`:i.minute=OD(i.minute??0,t,0,59,!0);break;case`second`:i.second=OD(i.second??0,t,0,59,!0)}return i}toValue(e){if(`hour`in e){let t=this.hour;t==null?(this.hourCycle===`h12`||this.hourCycle===`h11`)&&(t=this.dayPeriod===1?12:0):t=AD(t,this.dayPeriod??0,this.hourCycle);let n=e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day,hour:t??e.hour,minute:this.minute??e.minute,second:this.second??e.second,millisecond:this.millisecond??e.millisecond});return`offset`in n&&this.offset!=null&&n.offset!==this.offset&&(n=n.add({milliseconds:n.offset-this.offset})),n}return e.set({era:this.era??e.era,year:this.year??e.year,month:this.month??e.month,day:this.day??e.day})}getSegmentLimits(e){switch(e){case`era`:{let e=this.calendar.getEras();return{value:this.era==null?e.length-1:e.indexOf(this.era),minValue:0,maxValue:e.length-1}}case`year`:return{value:this.year,minValue:1,maxValue:9999};case`month`:return{value:this.month,minValue:1,maxValue:this.calendar.getMaximumMonthsInYear()};case`day`:return{value:this.day,minValue:1,maxValue:this.calendar.getMaximumDaysInMonth()};case`dayPeriod`:return{value:this.dayPeriod,minValue:0,maxValue:1};case`hour`:{let e=0,t=23;return this.hourCycle===`h12`?(e=1,t=12):this.hourCycle===`h11`&&(e=0,t=11),{value:this.hour,minValue:e,maxValue:t}}case`minute`:return{value:this.minute,minValue:0,maxValue:59};case`second`:return{value:this.second,minValue:0,maxValue:59}}}}})))()}function ND(e){let{locale:t,createCalendar:n,hideTimeZone:r,isDisabled:i=!1,isReadOnly:a=!1,isRequired:o=!1,minValue:s,maxValue:c,isDateUnavailable:l}=e,u=e.value||e.defaultValue||e.placeholderValue||null,[d,f]=gD(u,e.granularity),p=f||`UTC`;if(u&&!(d in u))throw Error(`Invalid granularity `+d+` for value `+u.toString());let[m,h]=(0,FD.useMemo)(()=>{let r=new Oc(t,{dateStyle:`short`,timeStyle:`short`,hour12:e.hourCycle==null?void 0:e.hourCycle===12}).resolvedOptions();return[n(r.calendar),r.hourCycle]},[t,e.hourCycle,n]),[g,_]=gt(e.value,e.defaultValue??null,e.onChange),[v]=(0,FD.useState)(g),y=(0,FD.useMemo)(()=>mD(g,m)??null,[g,m]),[b,x]=(0,FD.useState)(()=>new jD(m,h,y)),S=m.identifier===`gregory`&&b.era===`BC`,C=(0,FD.useMemo)(()=>({granularity:d,maxGranularity:e.maxGranularity??`year`,timeZone:f,hideTimeZone:r,hourCycle:e.hourCycle,showEra:S,shouldForceLeadingZeros:e.shouldForceLeadingZeros}),[e.maxGranularity,d,e.hourCycle,e.shouldForceLeadingZeros,f,r,S]),w=(0,FD.useMemo)(()=>fD({},C),[C]),T=(0,FD.useMemo)(()=>new Oc(t,w),[t,w]),E=(0,FD.useMemo)(()=>T.resolvedOptions(),[T]),D=(0,FD.useMemo)(()=>hD(e.placeholderValue,d,m,f),[e.placeholderValue,d,m,f]),O=(0,FD.useMemo)(()=>{let t=h===`h11`||h===`h12`,n=[`era`,`year`,`month`,`day`,`hour`,...t?[`dayPeriod`]:[],`minute`,`second`],r=n.indexOf(e.maxGranularity||`era`),i=n.indexOf(d===`hour`&&t?`dayPeriod`:d);return n.slice(r,i+1)},[e.maxGranularity,d,h]),[k,A]=(0,FD.useState)(y),[j,M]=(0,FD.useState)(m),[N,P]=(0,FD.useState)(h);(y!==k||h!==N||!Ca(m,j))&&(b=new jD(m,h,y),A(y),M(m),P(h),x(b));let F=t=>{if(!(e.isDisabled||e.isReadOnly)){if(t==null||t instanceof jD&&t.isCleared(O))x(new jD(m,h,y)),_(null);else if(!(t instanceof jD))t=so(t,u?.calendar||new ga),x(new jD(m,h,y)),_(t);else{if(t.isComplete(O)){let e=t.toValue(y??D);if(t.validate(e,O)){let t=so(e,u?.calendar||new ga);if(!g||t.compare(g)!==0){x(new jD(m,h,y)),_(t);return}}}x(t)}}},I=(0,FD.useMemo)(()=>b.toValue(y??D).toDate(p),[b,p,y,D]),L=(0,FD.useMemo)(()=>PD(I,b,T,E,m,t,d),[I,T,E,b,m,t,d]),R=(e,t)=>{F(b.cycle(e,t,D,O))},z=(0,FD.useMemo)(()=>dD(g,s,c,l,C),[g,s,c,l,C]),B=Al({...e,value:g,builtinValidation:z}),ee=B.displayValidation.isInvalid,te=e.validationState||(ee?`invalid`:null);return{...B,value:y,defaultValue:e.defaultValue??v,dateValue:I,calendar:m,setValue:F,segments:L,dateFormatter:T,validationState:te,isInvalid:ee,granularity:d,maxGranularity:e.maxGranularity??`year`,isDisabled:i,isReadOnly:a,isRequired:o,increment(e){R(e,1)},decrement(e){R(e,-1)},incrementPage(e){R(e,LD[e]||1)},decrementPage(e){R(e,-(LD[e]||1))},incrementToMax(e){let t=e===`hour`&&h===`h12`?11:b.getSegmentLimits(e).maxValue;F(b.set(e,t,D))},decrementToMin(e){let t=e===`hour`&&h===`h12`?12:b.getSegmentLimits(e).minValue;F(b.set(e,t,D))},setSegment(e,t){F(b.set(e,t,D))},confirmPlaceholder(){if(!(e.isDisabled||e.isReadOnly)&&b.isComplete(O)){let e=so(b.toValue(y??D),u?.calendar||new ga);(!g||e.compare(g)!==0)&&_(e),x(new jD(m,h,y))}},clearSegment(e){let t=b;e!==`timeZoneName`&&e!==`literal`&&(t=b.clear(e)),F(t)},formatValue(e){if(!y)return``;let n=fD(e,C);return new Oc(t,n).format(I)},getDateFormatter(e,t){let n=fD({},{...C,...t});return new Oc(e,n)}}}function PD(e,t,n,r,i,a,o){let s=[`hour`,`minute`,`second`],c=n.formatToParts(e),l=new cu(a,{useGrouping:!1}),u=new cu(a,{useGrouping:!1,minimumIntegerDigits:2});for(let e of c)if(e.type===`year`||e.type===`month`||e.type===`day`||e.type===`hour`){let n=t[e.type]??0;e.value=r[e.type]===`2-digit`?u.format(n):l.format(n)}let d=[];for(let e of c){let n=RD[e.type]||e.type,r=ID[n];n===`era`&&i.getEras().length===1&&(r=!1);let c=ID[n]&&t[e.type]==null,l=ID[n]?TD(n,e.value,a):null,u={type:n,text:c?l:e.value,...t.getSegmentLimits(n),isPlaceholder:c,placeholder:l,isEditable:r};n===`hour`?(d.push({type:`literal`,text:`⁦`,isPlaceholder:!1,placeholder:``,isEditable:!1}),d.push(u),n===o&&d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):s.includes(n)&&n===o?(d.push(u),d.push({type:`literal`,text:`⁩`,isPlaceholder:!1,placeholder:``,isEditable:!1})):d.push(u)}return d}var FD,ID,LD,RD;function zD(){return(zD=t((()=>{xD(),Hl(),DD(),MD(),ae(),Mc(),Ja(),mo(),_a(),lu(),FD=r(),ID={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},LD={year:5,month:2,day:7,hour:2,minute:15,second:15},RD={dayperiod:`dayPeriod`,relatedYear:`year`,yearName:`literal`,unknown:`literal`}})))()}function BD(e){let{placeholderValue:t=new ns,minValue:n,maxValue:r,defaultValue:i,granularity:a,validate:o}=e,[s,c]=gt(e.value,i??null,e.onChange),l=s||t,u=l&&`day`in l?l:void 0,d=i&&`timeZone`in i?i.timeZone:void 0,f=(0,HD.useMemo)(()=>{let e=l&&`timeZone`in l?l.timeZone:void 0;return(e||d)&&t?co(VD(t),e||d):VD(t)},[t,l,d]),p=(0,HD.useMemo)(()=>VD(n,u),[n,u]),m=(0,HD.useMemo)(()=>VD(r,u),[r,u]),h=(0,HD.useMemo)(()=>s&&`day`in s?oo(s):s,[s]),g=(0,HD.useMemo)(()=>s==null?null:VD(s),[s]),_=(0,HD.useMemo)(()=>i==null?null:VD(i),[i]),v=e=>{c(u||d?e:e&&oo(e))};return{...ND({...e,value:g,defaultValue:_,minValue:p,maxValue:m,onChange:v,granularity:a||`minute`,maxGranularity:`hour`,placeholderValue:f??void 0,createCalendar:()=>new ga,validate:(0,HD.useCallback)(()=>o?.(s),[o,s])}),timeValue:h}}function VD(e,t=Da(ja())){return e?`day`in e?e:ao(t,e):null}var HD;function UD(){return(UD=t((()=>{zD(),ae(),as(),mo(),_a(),Ja(),HD=r()})))()}function WD(e,t,n){return t!=null&&e.compare(t)<0||n!=null&&e.compare(n)>0}function GD(e,t,n,r,i){let a={};for(let e in t)a[e]=Math.floor(t[e]/2),a[e]>0&&t[e]%2==0&&a[e]--;return JD(e,KD(e,t,n).subtract(a),t,n,r,i)}function KD(e,t,n,r,i){let a=e;return t.years?a=Fa(e):t.months?a=Na(e):(t.weeks||t.days&&t.days>7)&&(a=Ia(e,n)),JD(e,a,t,n,r,i)}function qD(e,t,n,r,i){let a={...t};return a.days?a.days--:a.weeks?a.weeks--:a.months?a.months--:a.years&&a.years--,JD(e,KD(e,t,n).subtract(a),t,n,r,i)}function JD(e,t,n,r,i,a){if(i&&e.compare(i)>=0){let e=Ha(t,KD(io(i),n,r));e&&(t=e)}if(a&&e.compare(a)<=0){let e=Va(t,qD(io(a),n,r));e&&(t=e)}return t}function YD(e,t,n){if(t){let n=Ha(e,io(t));n&&(e=n)}if(n){let t=Va(e,io(n));t&&(e=t)}return e}function XD(e,t,n){if(!n)return e;for(;e.compare(t)>=0&&n(e);)e=e.subtract({days:1});return e.compare(t)>=0?e:null}function ZD(e,t){return e===t||e.days===t.days&&e.weeks===t.weeks&&e.months===t.months&&e.years===t.years}function QD(){return(QD=t((()=>{Ja(),mo()})))()}function $D(e){let t=(0,tO.useMemo)(()=>new Oc(e.locale),[e.locale]),n=(0,tO.useMemo)(()=>t.resolvedOptions(),[t]),{locale:r,createCalendar:i,visibleDuration:a={months:1},minValue:o,maxValue:s,selectionAlignment:c,isDateUnavailable:l,pageBehavior:u=`visible`,selectionMode:d=`single`,firstDayOfWeek:f,weeksInMonth:p}=e,m=(0,tO.useMemo)(()=>i(n.calendar),[i,n.calendar]),[h,g]=gt(e.value,e.defaultValue??null,e.onChange),_=(0,tO.useMemo)(()=>Array.isArray(h)?h.map(e=>so(io(e),m)):h?so(io(h),m):null,[h,m]),v=(0,tO.useMemo)(()=>{let e=Array.isArray(h)?h[0]:h;return e&&`timeZone`in e?e.timeZone:n.timeZone},[h,n.timeZone]),y=(0,tO.useMemo)(()=>e.focusedValue?YD(so(io(e.focusedValue),m),o,s):void 0,[e.focusedValue,m,o,s]),b=(0,tO.useMemo)(()=>e.defaultFocusedValue?YD(so(io(e.defaultFocusedValue),m),o,s):YD(_?Array.isArray(_)?_[0]:_:so(Da(v),m),o,s),[e.defaultFocusedValue,_,v,m,o,s]),[x,S]=gt(y,b,e.onFocusChange),C=()=>{switch(c){case`start`:return KD(x,a,r,o,s);case`end`:return qD(x,a,r,o,s);default:return GD(x,a,r,o,s)}},[w,T]=(0,tO.useState)(C),[E,D]=(0,tO.useState)(e.autoFocus||!1),[O,k]=(0,tO.useState)(a);ZD(a,O)||(k(a),T(C()));let A=(0,tO.useMemo)(()=>{let e={...a};return e.days?e.days--:e.days=-1,w.add(e)},[w,a]),[j,M]=(0,tO.useState)(m);if(!Ca(m,j)){let e=so(x,m);T(GD(e,a,r,o,s)),S(e),M(m)}WD(x,o,s)?S(YD(x,o,s)):x.compare(w)<0?T(qD(x,a,r,o,s)):x.compare(A)>0&&T(KD(x,a,r,o,s));function N(e){e=YD(e,o,s),S(e)}function P(e){let t=XD(YD(e,o,s),w,l);if(!t)return null;let n=Array.isArray(h)?h[0]:h,r=so(t,n?.calendar||new ga);return n&&`hour`in n?n.set(r):r}function F(t){if(!e.isDisabled&&!e.isReadOnly){if(t===null){g(d===`multiple`?[]:null);return}if(Array.isArray(t))g(t.map(P).filter(Boolean));else{let e=P(t);e&&g(e)}}}let I=(0,tO.useMemo)(()=>_?Array.isArray(_)?_.some(e=>l?.(e)||WD(e,o,s)):l?.(_)||WD(_,o,s):!1,[_,l,o,s]),L=e.isInvalid||e.validationState===`invalid`||I,R=L?`invalid`:null,z=(0,tO.useMemo)(()=>u===`visible`?a:eO(a),[u,a]);return{isDisabled:e.isDisabled??!1,isReadOnly:e.isReadOnly??!1,value:_,setValue:F,selectionMode:d,visibleDuration:a,visibleRange:{start:w,end:A},minValue:o,maxValue:s,focusedDate:x,timeZone:v,validationState:R,isValueInvalid:L,setFocusedDate(e){N(e)},focusNextDay(){N(x.add({days:1}))},focusPreviousDay(){N(x.subtract({days:1}))},focusNextRow(){a.days?this.focusNextPage():(a.weeks||a.months||a.years)&&N(x.add({weeks:1}))},focusPreviousRow(){a.days?this.focusPreviousPage():(a.weeks||a.months||a.years)&&N(x.subtract({weeks:1}))},focusNextPage(){let e=w.add(z);S(YD(x.add(z),o,s)),T(KD(JD(x,e,z,r,o,s),z,r))},focusPreviousPage(){let e=w.subtract(z);S(YD(x.subtract(z),o,s)),T(KD(JD(x,e,z,r,o,s),z,r))},focusSectionStart(){a.days?N(w):a.weeks?N(Ia(x,r)):(a.months||a.years)&&N(Na(x))},focusSectionEnd(){a.days?N(A):a.weeks?N(La(x,r)):(a.months||a.years)&&N(Pa(x))},focusNextSection(e){if(!e&&!a.days){N(x.add(eO(a)));return}a.days?this.focusNextPage():a.weeks?N(x.add({months:1})):(a.months||a.years)&&N(x.add({years:1}))},focusPreviousSection(e){if(!e&&!a.days){N(x.subtract(eO(a)));return}a.days?this.focusPreviousPage():a.weeks?N(x.subtract({months:1})):(a.months||a.years)&&N(x.subtract({years:1}))},selectFocusedDate(){l&&l(x)||this.selectDate(x)},selectDate(t){if(!(e.isDisabled||e.isReadOnly)){if(d===`multiple`&&t!=null){let e=P(t);if(!e)return;let n=[];Array.isArray(h)?n=h:h!=null&&(n=[h]);let r=n.findIndex(t=>ba(t,e)),i=r>=0?n.slice(0,r).concat(n.slice(r+1)):[...n,e];g(i)}else F(t)}},isFocused:E,setFocused:D,isInvalid(e){return WD(e,o,s)},isSelected(e){return!_||this.isCellDisabled(e)||this.isCellUnavailable(e)?!1:Array.isArray(_)?_.some(t=>ba(t,e)):ba(e,_)},isCellFocused(e){return E&&x&&ba(e,x)},isCellDisabled(t){return e.isDisabled||t.compare(w)<0||t.compare(A)>0||this.isInvalid(t)},isCellUnavailable(t){return e.isDateUnavailable?e.isDateUnavailable(t):!1},isPreviousVisibleRangeInvalid(){let e=w.subtract({days:1});return ba(e,w)||this.isInvalid(e)},isNextVisibleRangeInvalid(){let e=A.add({days:1});return ba(e,A)||this.isInvalid(e)},getDatesInWeek(e,t=w){let n=t.add({weeks:e}),i=[],o=a.days&&a.days<7?a.days:7;if(o===7){n=Ia(n,r,f);let e=Ta(n,r,f);for(let t=0;t<e;t++)i.push(null)}for(;i.length<o;){i.push(n);let e=n.add({days:1});if(ba(n,e))break;n=e}for(;i.length<o;)i.push(null);return i},getWeeksInMonth(e=w){let t=p||Ba(e,r,f);return(a.weeks||a.days)&&(t=a.weeks??0,a.days&&(t+=Math.ceil(a.days/7))),t}}}function eO(e){let t={...e};for(let n in e)t[n]=1;return t}var tO;function nO(){return(nO=t((()=>{QD(),ae(),Mc(),mo(),Ja(),_a(),tO=r()})))()}function rO({direction:e,className:t}){return(0,iO.jsx)(`svg`,{"aria-hidden":`true`,className:c(aO,t),fill:`none`,viewBox:`0 0 12 12`,xmlns:`http://www.w3.org/2000/svg`,children:(0,iO.jsx)(`path`,{d:e===`left`?`M7.5 2.25L3.75 6l3.75 3.75`:`M4.5 2.25L8.25 6 4.5 9.75`,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.5`})})}var iO,aO;function oO(){return(oO=t((()=>{l(),iO=G(),aO=u`
  width: 1em;
  height: 1em;
`})))()}var sO,cO,lO,uO,dO,fO,pO,mO,hO,gO,_O,vO,yO,bO,xO,SO,CO,wO,TO,EO,DO,OO,kO,AO,jO,MO,NO,PO,FO,IO,LO,RO,zO,BO,VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO,QO,$O,ek,tk;function nk(){return(nk=t((()=>{l(),sO=u`
  outline: none;
`,cO=u`
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
`,lO=u`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  gap: var(--space-3);
  padding: var(--space-3);
`,uO=u`
  grid-template-columns: minmax(0, 1fr) minmax(200px, 240px);
  align-items: stretch;
  column-gap: var(--space-3);

  /* On narrow (mobile) viewports the calendar + time panel can't fit side by side, so stack them. */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    row-gap: var(--space-3);
  }
`,dO=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,fO=u`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  align-items: center;
  column-gap: var(--space-1);
  width: 100%;
`,pO=u`
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-self: center;
`,mO=u`
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
`,hO=u`
  color: var(--field-description);
  font-weight: 500;
  font-size: 0.875rem;
  user-select: none;
`,gO=u`
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
`,_O=u`
  width: 12px;
  height: 12px;
`,vO=u`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,yO=u`
  padding: 0 0 var(--space-1);
  color: var(--field-description);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`,bO=u`
  padding: var(--space-1);
  text-align: center;
`,xO=u`
  height: 42px;
`,SO=u`
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
`,CO=u`
  box-shadow: inset 0 0 0 1px var(--color-green-500);
`,wO=u`
  box-shadow: 0 0 0 2px var(--picker-focus-ring-strong);
`,TO=u`
  box-shadow:
    inset 0 0 0 1px var(--color-green-500),
    0 0 0 2px var(--picker-focus-ring-strong);
`,EO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--picker-accent-bg);
    color: var(--picker-accent-fg);
  }
`,DO=u`
  box-shadow:
    0 0 0 2px var(--field-bg),
    0 0 0 4px var(--picker-focus-ring-strong);
`,OO=u`
  color: var(--field-placeholder);
`,kO=u`
  color: var(--field-description);
  text-decoration: line-through;
`,AO=u`
  color: var(--field-disabled-fg);
`,jO=u`
  box-shadow: inset 0 0 0 1px var(--field-error-border);
`,MO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-2);
  margin-top: var(--space-1);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`,NO=u`
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
`,PO=u`
  display: grid;
  gap: var(--space-3);
  min-width: 0;
  width: 100%;
`,FO=u`
  color: var(--color-gray-400);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  letter-spacing: 0.02em;
`,IO=u`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
`,LO=u`
  display: grid;
  gap: var(--space-2);
  min-width: 0;
`,RO=u`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--space-1);
`,zO=u`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
`,BO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.25;
`,VO=u`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-3);
`,HO=u`
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
`,UO=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  border-color: var(--color-green-700);
  font-weight: 600;

  &:hover:not(:disabled) {
    background: var(--color-green-700);
    border-color: var(--color-green-800);
    color: var(--picker-accent-fg);
  }
`,WO=u`
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
`,GO=u`
  color: var(--color-gray-400);
  font-size: 0.625rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.02em;
`,KO=u`
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
`,qO=u`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: var(--space-1);
`,JO=u`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
`,YO=u`
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
`,XO=u`
  min-width: 2.25rem;
  padding: 0 4px;
  text-align: center;
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  color: var(--field-fg);
`,ZO=u`
  display: inline-flex;
  border-radius: var(--control-radius);
  background: var(--picker-accent-soft);
  padding: 2px;
  gap: 2px;
`,QO=u`
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
`,$O=u`
  background: var(--picker-accent-bg);
  color: var(--picker-accent-fg);
  font-weight: 600;
`,ek=u`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-1);
  margin-top: 2px;
`,tk=u`
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
`})))()}function rk({direction:e,isDisabled:t,label:n,onPress:r}){let i=ik.useRef(null),{buttonProps:a}=Ir({"aria-label":n,isDisabled:t,onPress:r},i);return(0,ak.jsx)(`button`,{...a,ref:i,className:gO,type:`button`,children:(0,ak.jsx)(rO,{className:_O,direction:e})})}var ik,ak;function ok(){return(ok=t((()=>{ik=e(r()),Lr(),oO(),nk(),ak=G()})))()}function sk({isDisabled:e,label:t,options:n,pager:r}){let i=(0,ck.useId)(),a=n.findIndex(e=>!e.isDisabled),o=n.findIndex(e=>e.isSelected&&!e.isDisabled),s=o>=0?o:Math.max(0,a);return(0,lk.jsxs)(`div`,{className:LO,children:[t||r?(0,lk.jsxs)(`div`,{className:RO,children:[t?(0,lk.jsx)(`span`,{id:i,className:BO,children:t}):null,r]}):null,(0,lk.jsx)(`div`,{"aria-labelledby":t?i:void 0,className:VO,role:`group`,children:n.map((t,n)=>(0,lk.jsx)(`button`,{"aria-pressed":t.isSelected,className:c(HO,t.isSelected?UO:void 0),"data-selected":t.isSelected?`true`:`false`,disabled:e||t.isDisabled,tabIndex:n===s?0:-1,type:`button`,onClick:t.onSelect,children:t.label},t.id))})]})}var ck,lk;function uk(){return(uk=t((()=>{l(),ck=e(r()),nk(),lk=G()})))()}var dk,fk,pk,mk,hk,gk,_k,vk,yk,bk,xk,Sk;function Ck(){return(Ck=t((()=>{dk=`left`,fk=`right`,pk=`numeric`,mk=`2-digit`,hk=`long`,gk=`year-`,_k=`month-`,vk=`period-am`,yk=`period-pm`,bk=`calendar`,xk=`month`,Sk=`year`})))()}function wk(){let{t:e}=i(`shared-module`);return{previousMonth:e(`datePicker.previousMonth`),nextMonth:e(`datePicker.nextMonth`),previousYears:e(`datePicker.previousYears`),nextYears:e(`datePicker.nextYears`),previousYear:e(`datePicker.previousYear`),nextYear:e(`datePicker.nextYear`),clear:e(`datePicker.clear`),today:e(`datePicker.today`),now:e(`datePicker.now`),tomorrow:e(`datePicker.tomorrow`),nextWeek:e(`datePicker.nextWeek`),time:e(`datePicker.time`),plus30Minutes:e(`datePicker.plus30Minutes`),endOfDay:e(`datePicker.endOfDay`),chooseMonth:e(`datePicker.chooseMonth`),chooseYear:e(`datePicker.chooseYear`),chooseMonthAndYear:t=>e(`datePicker.chooseMonthAndYear`,{value:t}),decreaseHour:e(`datePicker.decreaseHour`),increaseHour:e(`datePicker.increaseHour`),decreaseMinute:e(`datePicker.decreaseMinute`),increaseMinute:e(`datePicker.increaseMinute`),dayPeriodGroup:e(`datePicker.dayPeriod`)}}function Tk(){return(Tk=t((()=>{a()})))()}function Ek(e,t){let n=new Intl.DateTimeFormat(e,{hour:pk,...t?{hour12:t===12}:void 0}).resolvedOptions().hourCycle;return n===`h11`||n===`h12`||n===`h23`||n===`h24`?n:t===12?`h12`:`h23`}function Dk(e){let t=new Intl.DateTimeFormat(e,{hour:pk,hour12:!0,timeZone:`UTC`}),n=(e,n)=>t.formatToParts(new Date(Date.UTC(2024,0,1,e))).find(e=>e.type===`dayPeriod`)?.value??n;return{am:n(9,`AM`),pm:n(21,`PM`)}}function Ok(e){return e?e.hour>=12?`pm`:`am`:null}function kk(e,t){switch(t){case`h11`:return e%12;case`h12`:return e%12==0?12:e%12;case`h24`:return e===0?24:e;default:return e}}function Ak(e){return e?new ns(e.hour,e.minute,e.second,`millisecond`in e?e.millisecond:0):new ns(0,0)}function jk(e,t){let n=e%12;return t===`pm`?n+12:n}function Mk(e){return String(e).padStart(2,`0`)}function Nk(e){return Math.floor((e-1)/12)*12+1}function Pk(e,t){let n=new Intl.NumberFormat(t,{useGrouping:!1}),r=e;for(let e=0;e<=9;e+=1){let t=n.format(e);t!==String(e)&&(r=r.split(t).join(String(e)))}return r}function Fk(e,t){return Pk(e.normalize(`NFKC`),t).replaceAll(/[\u200E\u200F\u061C]/g,``).trim()}function Ik(e,t){let n=Fk(e,t).toLocaleLowerCase(t);return Array.from(n).filter(e=>{let n=e.toLocaleUpperCase(t),r=e.toLocaleLowerCase(t);return/\d/.test(e)||n!==r}).join(``)}function Lk(e,t,n){let r=Ik(e,t);return n.some(e=>{let n=Ik(e,t);return n.length>0&&r.includes(n)})}function Rk(e,{hour12:t,locale:n,dayPeriodLabels:r}){let i=e.trim();if(!i)return null;let a=Fk(i,n),o=a.startsWith(`T`)||a.startsWith(`t`)?a.slice(1):a,s;try{s=zo(o)}catch{s=null}if(s)return s;let c=a.match(/\d+/g);if(!c||c.length<2||c.length>3)return null;let[l,u,d]=c;if(!l||!u||u.length!==2||d&&d.length!==2)return null;let f=Number(l),p=Number(u),m=d?Number(d):0,h=Lk(i,n,[r.pm,`PM`]),g=Lk(i,n,[r.am,`AM`]);return t&&(h&&f<12&&(f+=12),g&&f===12&&(f=0)),f<0||f>23||p<0||p>59||m<0||m>59?null:new ns(f,p,m)}function zk(e,t){let n=e.hour*60+e.minute+t;return n=(n%1440+1440)%1440,new ns(Math.floor(n/60),n%60,e.second,e.millisecond)}function Bk(){return(Bk=t((()=>{$o(),as(),Ck()})))()}function Vk({initialView:e=Kk,selectedYear:t,selectedMonth:n,minYear:r,minMonth:i,maxYear:a,maxMonth:o,isDisabled:s=!1,isReadOnly:l=!1,locale:u,onSelect:d,onCancel:f,className:p}){let{locale:m}=A(),h=u??m,g=wk(),_=new Date().getFullYear(),[v,y]=(0,Hk.useState)(e),[b,x]=(0,Hk.useState)(t??_),[S,C]=(0,Hk.useState)(Nk(t??_));(0,Hk.useEffect)(()=>{y(e)},[e]),(0,Hk.useEffect)(()=>{let e=t??_;x(e),C(Nk(e))},[_,t]);let w=(0,Hk.useMemo)(()=>new Intl.DateTimeFormat(h,{month:`long`,timeZone:`UTC`}),[h]),T=r??-1/0,E=a??1/0,D=!(s||l),O=(0,Hk.useCallback)((e,t)=>e<T||e>E||r!==void 0&&i!==void 0&&e===r&&t<i||a!==void 0&&o!==void 0&&e===a&&t>o,[o,a,i,r,E,T]),k=(0,Hk.useMemo)(()=>Array.from({length:Wk},(e,r)=>{let i=r+1,a=new Date(Date.UTC(b,r,1));return{id:`${_k}${b}-${i}`,isSelected:t===b&&n===i,label:w.format(a),isDisabled:O(b,i),onSelect:()=>{!D||O(b,i)||d(b,i)}}}),[b,D,O,w,d,n,t]),j=(0,Hk.useMemo)(()=>Array.from({length:Gk},(e,n)=>{let r=S+n;return{id:`${gk}${r}`,isSelected:r===t,label:String(r),isDisabled:r<T||r>E,onSelect:()=>{!D||r<T||r>E||(x(r),C(Nk(r)),y(Kk))}}}),[D,E,T,t,S]);return v===`year`?(0,Uk.jsxs)(`div`,{className:c(cO,PO,p),children:[(0,Uk.jsxs)(`div`,{className:IO,children:[(0,Uk.jsx)(`button`,{"aria-label":g.chooseMonth,className:gO,disabled:!D,type:`button`,onClick:()=>{if(D){if(f){f();return}y(Kk)}},children:(0,Uk.jsx)(rO,{className:_O,direction:dk})}),(0,Uk.jsx)(`div`,{className:FO,children:g.chooseYear}),(0,Uk.jsxs)(`div`,{className:zO,children:[(0,Uk.jsx)(rk,{direction:dk,isDisabled:!D,label:g.previousYears,onPress:()=>C(e=>e-Gk)}),(0,Uk.jsx)(rk,{direction:fk,isDisabled:!D,label:g.nextYears,onPress:()=>C(e=>e+Gk)})]})]}),(0,Uk.jsx)(sk,{isDisabled:!D,options:j})]}):(0,Uk.jsxs)(`div`,{className:c(cO,PO,p),children:[(0,Uk.jsxs)(`div`,{className:IO,children:[(0,Uk.jsx)(rk,{direction:dk,isDisabled:!D,label:g.previousYear,onPress:()=>x(e=>e-1)}),(0,Uk.jsx)(`button`,{"aria-label":g.chooseYear,className:mO,disabled:!D,type:`button`,onClick:()=>y(qk),children:b}),(0,Uk.jsx)(rk,{direction:fk,isDisabled:!D,label:g.nextYear,onPress:()=>x(e=>e+1)})]}),(0,Uk.jsx)(`div`,{className:FO,children:g.chooseMonth}),(0,Uk.jsx)(sk,{isDisabled:!D,options:k})]})}var Hk,Uk,Wk,Gk,Kk,qk;function Jk(){return(Jk=t((()=>{l(),Hk=r(),_e(),oO(),ok(),uk(),Ck(),Tk(),nk(),Bk(),Uk=G(),Wk=12,Gk=12,Kk=`month`,qk=`year`})))()}function Yk({date:e,monthStart:t,state:n}){let r=Xk.useRef(null),i=!xa(e,t),{cellProps:a,buttonProps:o,formattedDate:s,isDisabled:l,isFocused:u,isInvalid:d,isSelected:f,isUnavailable:p}=dl({date:e,isOutsideMonth:i},n,r),m=wa(e,n.timeZone);return(0,Zk.jsx)(`td`,{...a,className:bO,children:(0,Zk.jsx)(`button`,{...o,ref:r,className:c(SO,f?EO:void 0,f&&u?DO:void 0,!f&&u&&m?TO:void 0,!f&&u&&!m?wO:void 0,!f&&!u&&m?CO:void 0,i?OO:void 0,p?kO:void 0,l?AO:void 0,d?jO:void 0),type:`button`,children:s})})}var Xk,Zk;function Qk(){return(Qk=t((()=>{l(),Ja(),Xk=e(r()),pl(),nk(),Zk=G()})))()}function $k({firstDayOfWeek:e,state:t}){let{gridProps:n,headerProps:r,weekDays:i,weeksInMonth:a}=ml(e===void 0?{}:{firstDayOfWeek:e},t),o=t.visibleRange.start;return(0,eA.jsxs)(`table`,{...n,className:vO,children:[(0,eA.jsx)(`thead`,{...r,children:(0,eA.jsx)(`tr`,{children:i.map((e,t)=>(0,eA.jsx)(`th`,{className:yO,children:e},`${e}-${t}`))})}),(0,eA.jsx)(`tbody`,{children:Array.from({length:a},(e,n)=>(0,eA.jsx)(`tr`,{children:t.getDatesInWeek(n).map((e,r)=>e?(0,eA.jsx)(Yk,{date:e,monthStart:o,state:t},e.toString()):(0,eA.jsx)(`td`,{className:xO},`empty-${n}-${r}`))},n))})]})}var eA;function tA(){return(tA=t((()=>{gl(),Qk(),nk(),eA=G()})))()}function nA({timeSelectorProps:e}){let{locale:t}=A(),n=wk(),r=(0,rA.useId)(),i=(0,rA.useId)(),a=Ek(t,e.hourCycle),o=a===`h11`||a===`h12`,s=Dk(t),l=Ak(e.value),u=!!(e.isDisabled||e.isReadOnly),d=rA.useMemo(()=>{let e=new Date(2e3,0,1,l.hour,l.minute,l.second);return new Intl.DateTimeFormat(t,{hour:pk,minute:mk,hour12:o}).format(e)},[l.hour,l.minute,l.second,t,o]),[f,p]=rA.useState(d);rA.useEffect(()=>{p(d)},[d]);let m=Ok(e.value),h=Mk(kk(l.hour,a)),g=Mk(l.minute),_=t=>{e.onChange(t)};return(0,iA.jsxs)(`div`,{className:WO,role:`group`,"aria-labelledby":r,children:[(0,iA.jsx)(`span`,{id:r,className:GO,children:n.time}),(0,iA.jsx)(`input`,{"aria-labelledby":r,className:KO,disabled:u,id:i,inputMode:`numeric`,type:`text`,value:f,onBlur:()=>{if(e.granularity===`hour`){p(d);return}let n=Rk(f,{hour12:o,locale:t,dayPeriodLabels:s});n?_(n):p(d)},onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()}}),(0,iA.jsxs)(`div`,{className:qO,children:[(0,iA.jsxs)(`div`,{className:JO,children:[(0,iA.jsx)(`button`,{"aria-label":n.decreaseHour,className:YO,disabled:u,type:`button`,onClick:()=>{_(zk(l,-60))},children:`−`}),(0,iA.jsx)(`span`,{className:XO,children:h}),(0,iA.jsx)(`button`,{"aria-label":n.increaseHour,className:YO,disabled:u,type:`button`,onClick:()=>{_(zk(l,60))},children:`+`})]}),e.granularity===`minute`?(0,iA.jsxs)(`div`,{className:JO,children:[(0,iA.jsx)(`button`,{"aria-label":n.decreaseMinute,className:YO,disabled:u,type:`button`,onClick:()=>{_(zk(l,-e.minuteStep))},children:`−`}),(0,iA.jsx)(`span`,{className:XO,children:g}),(0,iA.jsx)(`button`,{"aria-label":n.increaseMinute,className:YO,disabled:u,type:`button`,onClick:()=>{_(zk(l,e.minuteStep))},children:`+`})]}):null,o?(0,iA.jsxs)(`div`,{"aria-label":n.dayPeriodGroup,className:ZO,role:`group`,children:[(0,iA.jsx)(`button`,{className:c(QO,m===`am`?$O:void 0),disabled:u,id:vk,type:`button`,onClick:()=>{_(l.set({hour:jk(l.hour,`am`)}))},children:s.am}),(0,iA.jsx)(`button`,{className:c(QO,m===`pm`?$O:void 0),disabled:u,id:yk,type:`button`,onClick:()=>{_(l.set({hour:jk(l.hour,`pm`)}))},children:s.pm})]}):null]}),e.granularity===`minute`?(0,iA.jsxs)(`div`,{className:ek,children:[(0,iA.jsx)(`button`,{className:tk,disabled:u,type:`button`,onClick:()=>{_(l.add({minutes:30}))},children:n.plus30Minutes}),(0,iA.jsx)(`button`,{className:tk,disabled:u,type:`button`,onClick:()=>{_(new ns(23,59,0))},children:n.endOfDay})]}):null]})}var rA,iA;function aA(){return(aA=t((()=>{l(),as(),rA=e(r()),_e(),Ck(),Tk(),nk(),Bk(),iA=G()})))()}function oA({calendarProps:e,canClear:t,dialogProps:n,onClear:r,onSelectNextWeek:i,onSelectNow:a,onSelectToday:o,onSelectTomorrow:s,timeSelectorProps:l}){let u=sA.useRef(null),{dialogProps:d}=We(n,u),{locale:f}=A(),p=wk(),[m,h]=sA.useState(bk),g=$D({...e,createCalendar:xc,locale:f}),{calendarProps:_}=Qc(e,g),v=Nc({calendar:g.visibleRange.start.calendar.identifier,month:hk,timeZone:g.timeZone}),y=Nc({calendar:g.visibleRange.start.calendar.identifier,timeZone:g.timeZone,year:pk}),b=!(e.isDisabled||e.isReadOnly),x=v.format(g.visibleRange.start.toDate(g.timeZone)),S=y.format(g.visibleRange.start.toDate(g.timeZone)),C=()=>{h(Sk)};return(0,cA.jsx)(`div`,{...d,ref:u,className:c(sO,cO),children:(0,cA.jsxs)(`div`,{..._,className:c(lO,l&&m===`calendar`?uO:void 0),children:[m===`calendar`?(0,cA.jsxs)(cA.Fragment,{children:[(0,cA.jsxs)(`div`,{className:dO,children:[(0,cA.jsxs)(`div`,{className:fO,children:[(0,cA.jsx)(rk,{direction:dk,isDisabled:g.isPreviousVisibleRangeInvalid(),label:p.previousMonth,onPress:()=>g.focusPreviousPage()}),(0,cA.jsxs)(`div`,{className:pO,children:[(0,cA.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(x),className:mO,disabled:!b,type:`button`,onClick:()=>h(xk),children:x}),(0,cA.jsx)(`span`,{"aria-hidden":`true`,className:hO,children:` `}),(0,cA.jsx)(`button`,{"aria-label":p.chooseMonthAndYear(S),className:mO,disabled:!b,type:`button`,onClick:C,children:S})]}),(0,cA.jsx)(rk,{direction:fk,isDisabled:g.isNextVisibleRangeInvalid(),label:p.nextMonth,onPress:()=>g.focusNextPage()})]}),(0,cA.jsx)($k,{firstDayOfWeek:e.firstDayOfWeek,state:g}),(0,cA.jsxs)(`div`,{className:MO,children:[(0,cA.jsx)(`button`,{className:NO,disabled:!t||!b,type:`button`,onClick:r,children:p.clear}),l?(0,cA.jsx)(`button`,{className:NO,disabled:!b||!a,type:`button`,onClick:()=>a?.(),children:p.now}):(0,cA.jsx)(`button`,{className:NO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar);g.setFocusedDate(e),o(e)},children:p.today}),s?(0,cA.jsx)(`button`,{className:NO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar).add({days:1});g.setFocusedDate(e),s(e)},children:p.tomorrow}):null,i?(0,cA.jsx)(`button`,{className:NO,disabled:!b,type:`button`,onClick:()=>{let e=so(Da(g.timeZone),g.visibleRange.start.calendar).add({weeks:1});g.setFocusedDate(e),i(e)},children:p.nextWeek}):null]})]}),l?(0,cA.jsx)(nA,{timeSelectorProps:l}):null]}):null,m===`calendar`?null:(0,cA.jsx)(Vk,{initialView:m===`year`?`year`:`month`,selectedYear:g.visibleRange.start.year,selectedMonth:g.visibleRange.start.month,...pb(e.minValue,{minYear:e.minValue?.year,minMonth:e.minValue?.month}),...pb(e.maxValue,{maxYear:e.maxValue?.year,maxMonth:e.maxValue?.month}),...Y({isDisabled:e.isDisabled}),...Y({isReadOnly:e.isReadOnly}),locale:f,onSelect:(e,t)=>{let n=g.focusedDate.set({year:e,month:t,day:1});g.setFocusedDate(n),h(bk)},onCancel:()=>h(bk)})]})})}var sA,cA;function lA(){return(lA=t((()=>{l(),Sc(),mo(),Ja(),nO(),sA=e(r()),$c(),Ic(),dt(),_e(),Jk(),tA(),ok(),Ck(),Tk(),nk(),aA(),cA=G()})))()}var uA,dA,fA,pA,mA,hA,gA,_A,vA,yA,bA,xA,SA,CA,wA,TA;function EA(){return(EA=t((()=>{l(),uA=u`
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
  color: inherit;
  outline: none;
`,dA=u`
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
`,fA=u`
  cursor: not-allowed;
`,pA=u`
  cursor: default;
`,mA=u`
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,hA=u`
  flex: 0 1 auto;
  min-width: 0;
`,gA=u`
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
`,_A=u`
  color: var(--field-placeholder);
`,vA=u`
  color: var(--field-chrome);
  user-select: none;
`,yA=u`
  visibility: hidden;
`,bA=u`
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
`,xA=u`
  width: 18px;
  height: 18px;
`,SA=u`
  margin-inline-start: auto;
`,CA=u`
  visibility: hidden;
  pointer-events: none;
`,wA=u`
  && {
    width: min(360px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`,TA=u`
  && {
    width: min(720px, calc(100vw - 32px));
    min-width: min(320px, calc(100vw - 32px));
  }
`})))()}function DA(){return(0,OA.jsxs)(`svg`,{"aria-hidden":`true`,className:xA,fill:`none`,viewBox:`0 0 20 20`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,OA.jsx)(`rect`,{height:`13`,rx:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`,width:`15`,x:`2.5`,y:`4`}),(0,OA.jsx)(`path`,{d:`M6 2.5v3M14 2.5v3M2.5 8h15`,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`})]})}var OA;function kA(){return(kA=t((()=>{EA(),OA=G()})))()}function AA({buttonProps:e}){let t=(0,jA.useRef)(null),{buttonProps:n}=Ir(e,t);return(0,MA.jsx)(`button`,{...n,ref:t,className:c(bA,SA),type:`button`,children:(0,MA.jsx)(DA,{})})}var jA,MA;function NA(){return(NA=t((()=>{l(),jA=r(),Lr(),kA(),EA(),MA=G()})))()}function PA({segment:e,state:t}){let n=(0,FA.useRef)(null),{segmentProps:r}=x_(e,t,n),{focusProps:i,isFocusVisible:a}=T_();return(0,IA.jsx)(`div`,{...W(r,i),ref:n,className:c(gA,e.isPlaceholder?_A:void 0,e.type===`literal`?vA:void 0,e.type===`literal`?vA:void 0,e.text.trim()===`klo`?yA:void 0),"data-focus-visible":a?`true`:`false`,children:e.text})}var FA,IA;function LA(){return(LA=t((()=>{l(),FA=r(),H(),w_(),D_(),EA(),IA=G()})))()}var RA,zA,BA;function VA(){return(VA=t((()=>{RA=`false`,zA=`true`,BA=`minute`})))()}function HA(e,t,n,r){return!(e!==`floating`||t||n||r===!0)}function UA(e,t=2){return String(e).padStart(t,`0`)}function WA(e){return`year`in e&&`month`in e&&`day`in e}function GA(e){return`hour`in e&&`minute`in e&&`second`in e}function KA(e){return`${UA(e.year,4)}-${UA(e.month)}-${UA(e.day)}`}function qA(e,t){let n=UA(e.hour);if(t===`hour`)return n;let r=UA(e.minute);return t===`minute`?`${n}:${r}`:`${n}:${r}:${UA(e.second)}`}function JA(e,t){if(typeof t==`string`&&t.length!==0)try{return e===`date`?Bo(t):Vo(t)}catch{return}}function YA(e){if(typeof e==`string`&&e.length!==0)try{return zo(e)}catch{return}}function XA(e){return e&&WA(e)?KA(e):``}function ZA(e,t){return e&&GA(e)?qA(e,t):``}function QA(e,t){return!e||!WA(e)||!GA(e)?``:`${KA(e)}T${qA(e,t)}`}function $A(e,t,n){return e===`date`?XA(t):QA(t,n)}function ej(e){if(e===void 0||e===`any`)return 5;let t=typeof e==`number`?e:Number(e);if(!Number.isFinite(t)||t<=0)return 1;let n=t/60;return!Number.isInteger(n)||n<1||n>59?1:n}function tj(){return(tj=t((()=>{$o()})))()}function nj(e,t){e&&(e.value=t)}function rj(e,t){let n=e.cloneNode(!0);return nj(n,t),n}function ij(e,t,n){if(!e||(nj(e,n),!t))return;let r=rj(e,n);t({currentTarget:r,target:r,type:`change`})}function aj(e,t){!e||!t||t({currentTarget:e,target:e,type:`blur`,relatedTarget:null})}function oj(e,t){!e||!t||t({currentTarget:e,target:e,type:`focus`,relatedTarget:null})}function sj(e,t){let{id:n,label:r,description:i,errorMessage:a,notice:o,fieldSize:s=`md`,isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d,iconStart:f,iconEnd:p,layout:m=`stacked`,className:h,value:g,onChange:_,onValueChange:v,onBlur:y,onFocus:b,inputRef:x,min:S,max:C,step:w,hourCycle:T}=e,{locale:E}=A(),D=(0,cj.useId)(),O=(0,cj.useId)(),k=(0,cj.useRef)(null),j=(0,cj.useRef)(null),M=(0,cj.useRef)(null),[N,P]=(0,cj.useState)(!1);return(0,cj.useImperativeHandle)(t,()=>IS(M.current,`[role="spinbutton"]`)??IS(j.current,`[role="spinbutton"]`)??M.current??j.current),{className:h,description:i,errorMessage:a,fieldRef:M,fieldSize:s,groupRef:j,hiddenInputRef:k,hourCycle:T,iconEnd:p,iconStart:f,id:n??D,inputRef:x,isFocused:N,label:r,layout:m,locale:E===`en`?`en-CA`:E,max:C,min:S,notice:o,noticeId:O,onChange:_,onValueChange:v,externalOnBlur:y,externalOnFocus:b,resolvedState:LS({errorMessage:a,...Y({isDisabled:c,isReadOnly:l,isRequired:u,isInvalid:d})}),setIsFocused:P,step:w,value:g}}var cj;function lj(){return(lj=t((()=>{cj=r(),_e(),BS(),tj()})))()}function uj({canClear:e,className:t,dateFieldAria:n,description:r,errorMessage:i,externalOnBlur:a,externalOnFocus:o,fieldRef:s,fieldSize:l,groupRef:u,hiddenInputRef:d,hiddenInputValue:f,inputRef:p,iconEnd:m,iconStart:h,isFocused:_,label:v,layout:y,notice:b,noticeId:x,onClear:S,onSelectNextWeek:C,onSelectNow:w,onSelectToday:T,onSelectTomorrow:E,pickerAria:D,pickerState:O,popoverClassName:k,resolvedState:A,setIsFocused:j,state:M,timeSelectorProps:N}){let P=fb(typeof D.groupProps[`aria-describedby`]==`string`?D.groupProps[`aria-describedby`]:void 0,b?x:void 0),F=y===`floating`,I=HA(y,_,M.value!==null,O.isOpen),L=(0,dj.useRef)(O.isOpen);L.current=O.isOpen;let{focusWithinProps:R}=g({onFocusWithin:()=>{oj(d.current,o),j(!0)},onBlurWithin:()=>{j(!1),L.current||aj(d.current,a)}});return(0,fj.jsxs)(fw,{controlClassName:c(NC(l,F,!F)),controlProps:{"data-disabled":A.isDisabled?zA:RA,"data-invalid":O.isInvalid?zA:RA,"data-readonly":A.isReadOnly?zA:RA,"data-has-icon-start":h?zA:void 0},label:v,description:r,descriptionProps:D.descriptionProps,errorMessage:i,errorMessageProps:D.errorMessageProps,notice:b,...Y({className:t}),...pb(v,{labelProps:D.labelProps}),...pb(b,{noticeId:x}),isDisabled:A.isDisabled,isRequired:A.isRequired,layout:y,fieldSize:l,isFloatingRaised:y!==`floating`||_||M.value!==null||O.isOpen,isFloatingFocused:y===`floating`?_||O.isOpen:!1,isInvalid:O.isInvalid,children:[(0,fj.jsxs)(`div`,{...W(D.groupProps,R),ref:u,className:mA,"aria-describedby":P,"aria-disabled":A.isDisabled?zA:void 0,"aria-invalid":O.isInvalid?zA:void 0,"aria-readonly":A.isReadOnly?zA:void 0,"aria-required":A.isRequired?zA:void 0,children:[h?(0,fj.jsx)(`span`,{className:cw,children:h}):null,(0,fj.jsx)(`div`,{className:hA,children:(0,fj.jsx)(`div`,{...n.fieldProps,ref:s,className:c(uA,F?jC(l):void 0,A.isDisabled?fA:void 0,A.isReadOnly?pA:void 0),"aria-describedby":P,children:(0,fj.jsx)(`div`,{className:c(dA,I&&CA),children:M.segments.map((e,t)=>(0,fj.jsx)(PA,{segment:e,state:M},`${e.type}-${t}`))})})}),m?(0,fj.jsx)(`span`,{className:cw,children:m}):null,(0,fj.jsx)(AA,{buttonProps:D.buttonProps})]}),(0,fj.jsx)(`input`,{...n.inputProps,ref:FS(d,p),type:`hidden`,"aria-describedby":P,value:f,onChange:()=>{}}),O.isOpen?(0,fj.jsx)(PT,{className:k,state:O,triggerRef:u,placement:`bottom start`,children:(0,fj.jsx)(oA,{calendarProps:D.calendarProps,canClear:e,dialogProps:D.dialogProps,onClear:S,onSelectToday:T,...Y({onSelectNextWeek:C}),...Y({onSelectNow:w}),...Y({onSelectTomorrow:E}),...Y({timeSelectorProps:N})})}):null]})}var dj,fj;function pj(){return(pj=t((()=>{l(),dj=r(),H(),mt(),BS(),lA(),mw(),dw(),zT(),NA(),LA(),VA(),EA(),lj(),fj=G()})))()}function mj({base:e,currentValue:t,granularity:n,kind:r,onClear:i,onCommitValue:a}){let o=JA(r,e.min),s=JA(r,e.max),c={id:e.id,label:e.label,description:e.description,errorMessage:e.errorMessage,granularity:n,value:t,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,isRequired:e.resolvedState.isRequired,isInvalid:e.resolvedState.isInvalid,shouldCloseOnSelect:r===`date`,onChange:a,...Y({hourCycle:e.hourCycle,minValue:o,maxValue:s})},l=SD(c),u=s_(c,l,e.groupRef),d={...u.fieldProps,createCalendar:xc,locale:e.locale},f=ND(d),p=$g(d,f,e.fieldRef),m=t!==null||l.dateValue!==null||l.timeValue!==null;return(0,hj.jsx)(uj,{canClear:m,className:e.className,dateFieldAria:p,description:e.description,errorMessage:e.errorMessage,fieldRef:e.fieldRef,fieldSize:e.fieldSize,groupRef:e.groupRef,hiddenInputRef:e.hiddenInputRef,hiddenInputValue:$A(r,f.value,BA),inputRef:e.inputRef,iconEnd:e.iconEnd,iconStart:e.iconStart,isFocused:e.isFocused,label:e.label,layout:e.layout,notice:e.notice,noticeId:e.noticeId,externalOnBlur:e.externalOnBlur,externalOnFocus:e.externalOnFocus,onClear:()=>{l.setOpen(!1),i()},onSelectNextWeek:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectNow:r===`datetime`?()=>{let e=Ea(ja()),n=t?.calendar??new ga,r=so(io(e),n),i=oo(e);l.setValue(ao(r,i))}:void 0,onSelectToday:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},onSelectTomorrow:e=>{if(r===`date`){l.setValue(e),l.setOpen(!1);return}l.setDateValue(e)},pickerAria:u,pickerState:l,popoverClassName:r===`date`?wA:TA,resolvedState:e.resolvedState,setIsFocused:e.setIsFocused,state:f,timeSelectorProps:r===`datetime`?{granularity:BA,isDisabled:e.resolvedState.isDisabled,isReadOnly:e.resolvedState.isReadOnly,minuteStep:ej(e.step),value:l.timeValue,onChange:e=>{l.setTimeValue(e)},...Y({hourCycle:e.hourCycle})}:void 0})}var hj;function gj(){return(gj=t((()=>{Sc(),Ja(),_a(),mo(),zD(),wD(),a_(),l_(),pj(),VA(),EA(),lj(),hj=G()})))()}function _j(e,t){let n=sj(e,t),r=e.kind===`date`?`day`:BA,i=JA(e.kind,n.value),[a,o]=(0,vj.useState)(0),s=(0,vj.useRef)(``),c=typeof n.value==`string`?n.value:``;return(0,vj.useEffect)(()=>{s.current.length>0&&c.length===0&&o(e=>e+1),s.current=c},[c]),(0,yj.jsx)(mj,{base:n,currentValue:i??null,granularity:r,kind:e.kind,onClear:()=>{n.onValueChange?.(``),ij(n.hiddenInputRef.current,n.onChange,``)},onCommitValue:t=>{let r=$A(e.kind,t,BA);n.onValueChange?.(r),ij(n.hiddenInputRef.current,n.onChange,r)}},a)}var vj,yj;function bj(){return(bj=t((()=>{vj=e(r()),gj(),VA(),lj(),yj=G()})))()}function xj({aria:e,className:t,description:n,errorMessage:r,externalOnBlur:i,externalOnFocus:a,fieldRef:o,fieldSize:s,hiddenInputRef:l,hiddenInputValue:u,inputRef:d,iconEnd:f,iconStart:p,isFocused:m,label:h,layout:_,notice:v,noticeId:y,resolvedState:b,setIsFocused:x,state:S}){let C=fb(typeof e.fieldProps[`aria-describedby`]==`string`?e.fieldProps[`aria-describedby`]:void 0,v?y:void 0),w=_===`floating`,T=HA(_,m,S.value!==null),{focusWithinProps:E}=g({onFocusWithin:()=>{oj(l.current,a),x(!0)},onBlurWithin:()=>{x(!1),aj(l.current,i)}});return(0,Sj.jsxs)(fw,{controlClassName:c(NC(s,w,!w)),controlProps:{"data-disabled":b.isDisabled?zA:RA,"data-invalid":S.isInvalid?zA:RA,"data-readonly":b.isReadOnly?zA:RA,"data-has-icon-start":p?zA:void 0},label:h,description:n,descriptionProps:e.descriptionProps,errorMessage:r,errorMessageProps:e.errorMessageProps,notice:v,...Y({className:t}),...pb(h,{labelProps:e.labelProps}),...pb(v,{noticeId:y}),isDisabled:b.isDisabled,isRequired:b.isRequired,layout:_,fieldSize:s,isFloatingRaised:_!==`floating`||m||S.value!==null,isFloatingFocused:_===`floating`&&m,isInvalid:S.isInvalid,children:[p?(0,Sj.jsx)(`span`,{className:cw,children:p}):null,(0,Sj.jsx)(`div`,{...W(e.fieldProps,E),ref:o,className:c(uA,w?jC(s):void 0,b.isDisabled?fA:void 0,b.isReadOnly?pA:void 0),"aria-disabled":b.isDisabled?zA:void 0,"aria-describedby":C,"aria-invalid":S.isInvalid?zA:void 0,"aria-readonly":b.isReadOnly?zA:void 0,"aria-required":b.isRequired?zA:void 0,children:(0,Sj.jsx)(`div`,{className:c(dA,T&&CA),children:S.segments.map((e,t)=>(0,Sj.jsx)(PA,{segment:e,state:S},`${e.type}-${t}`))})}),(0,Sj.jsx)(`input`,{...e.inputProps,ref:FS(l,d),type:`hidden`,"aria-describedby":C,value:u,onChange:()=>{}}),f?(0,Sj.jsx)(`span`,{className:cw,children:f}):null]})}var Sj;function Cj(){return(Cj=t((()=>{l(),H(),mt(),BS(),mw(),dw(),LA(),VA(),EA(),lj(),Sj=G()})))()}function wj(e,t){let n=sj(e,t),r=BA,i=Tj.useMemo(()=>YA(n.value),[n.value]),a=Tj.useMemo(()=>YA(n.min),[n.min]),o=Tj.useMemo(()=>YA(n.max),[n.max]),s={id:n.id,inputRef:n.hiddenInputRef,label:n.label,description:n.description,errorMessage:n.errorMessage,locale:n.locale,granularity:r,value:i??null,isDisabled:n.resolvedState.isDisabled,isReadOnly:n.resolvedState.isReadOnly,isRequired:n.resolvedState.isRequired,isInvalid:n.resolvedState.isInvalid,...Y({hourCycle:n.hourCycle,minValue:a,maxValue:o}),onChange:e=>{let t=ZA(e,r);n.onValueChange?.(t),ij(n.hiddenInputRef.current,n.onChange,t)}},c=BD(s),l=e_(s,c,n.fieldRef);return(0,Ej.jsx)(xj,{aria:l,className:n.className,description:n.description,errorMessage:n.errorMessage,fieldRef:n.fieldRef,fieldSize:n.fieldSize,hiddenInputRef:n.hiddenInputRef,hiddenInputValue:ZA(c.value,r),inputRef:n.inputRef,iconEnd:n.iconEnd,iconStart:n.iconStart,isFocused:n.isFocused,label:n.label,layout:n.layout,notice:n.notice,noticeId:n.noticeId,externalOnBlur:n.externalOnBlur,externalOnFocus:n.externalOnFocus,resolvedState:n.resolvedState,setIsFocused:n.setIsFocused,state:c})}var Tj,Ej;function Dj(){return(Dj=t((()=>{UD(),Tj=e(r()),a_(),Cj(),VA(),lj(),Ej=G()})))()}var Oj,kj,Aj,jj,Mj;function Nj(){return(Nj=t((()=>{Oj=e(r()),bj(),Dj(),kj=G(),Aj=Oj.forwardRef(_j),jj=Oj.forwardRef(wj),Mj=Oj.forwardRef(function(e,t){return e.kind===`time`?(0,kj.jsx)(jj,{...e,ref:t}):(0,kj.jsx)(Aj,{...e,ref:t})})})))()}function Pj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,inputRef:v}=e,{field:y,resolvedError:b,isInvalid:x}=MS({name:t,control:n,...Y({rules:r}),errorMessage:o}),S=y.value??``;return(0,Fj.jsx)(Mj,{ref:y.ref,kind:Lj,layout:Ij,label:i,description:a,errorMessage:b,notice:s,iconStart:l,iconEnd:u,isInvalid:x,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({inputRef:v}),value:S,onChange:e=>{y.onChange(e.target.value)},onBlur:y.onBlur})}var Fj,Ij,Lj;function Rj(){return(Rj=t((()=>{r(),NS(),Nj(),Fj=G(),Ij=`floating`,Lj=`date`})))()}function zj(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b}=e,{field:x,resolvedError:S,isInvalid:C}=MS({name:t,control:n,...Y({rules:r}),errorMessage:o}),w=x.value??``;return(0,Bj.jsx)(Mj,{ref:x.ref,kind:Hj,layout:Vj,label:i,description:a,errorMessage:S,notice:s,iconStart:l,iconEnd:u,isInvalid:C,...Y({fieldSize:c}),...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),value:w,onChange:e=>{x.onChange(e.target.value)},onBlur:x.onBlur})}var Bj,Vj,Hj;function Uj(){return(Uj=t((()=>{r(),NS(),Nj(),Bj=G(),Vj=`floating`,Hj=`datetime`})))()}function Wj(e){return e?Array.isArray(e)?e:Array.from(e):[]}function Gj(e){return e.trim()}function Kj(e,t){let n=Wj(e);if(n.length===0)return t.empty;let r=e=>{let n=Gj(e);return n.length>0?n:t.unnamedFile};return n.length===1?r(n[0]?.name??``):n.length<=3?n.map(e=>r(e.name)).join(`, `):`${n.slice(0,2).map(e=>r(e.name)).join(`, `)} ${t.formatMoreFiles(n.length-2)}`}function qj(e){return e?Array.from(e):[]}function Jj(){return(Jj=t((()=>{})))()}function Yj(e){switch(e){case`sm`:return eM;case`lg`:return nM;default:return tM}}function Xj(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,buttonLabel:d,isDisabled:f=!1,isRequired:p=!1,summaryFormatter:m,className:h,multiple:g}=e,{field:_,resolvedError:v,isInvalid:y}=MS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:b}=i(`shared-module`),x=(0,Zj.useMemo)(()=>({empty:b(`fileField.empty`),unnamedFile:b(`fileField.unnamed`),formatMoreFiles:e=>b(`fileField.moreFiles`,{count:e})}),[b]),S=d??b(`fileField.chooseFile`),C=(0,Zj.useId)(),w=a??C,T=(0,Zj.useId)(),E=(0,Zj.useId)(),D=(0,Zj.useId)(),{labelProps:O,fieldProps:k,descriptionProps:A,errorMessageProps:j}=Xl({label:o,description:s,errorMessage:v,id:w,isInvalid:y}),M=fb(typeof k[`aria-describedby`]==`string`?k[`aria-describedby`]:void 0,p?E:void 0,y&&!v?D:void 0),N=(0,Zj.useRef)(null),[P,F]=(0,Zj.useState)(x.empty);return(0,Qj.jsx)(fw,{...Y({className:h}),label:o,labelProps:O,description:s,descriptionProps:A,errorMessage:v,errorMessageProps:j,isDisabled:f,isRequired:p,layout:rM,children:(0,Qj.jsxs)(`div`,{className:_T,children:[(0,Qj.jsx)(vt,{children:(0,Qj.jsx)(`input`,{ref:FS(N,_.ref),type:`file`,name:_.name,multiple:g,disabled:f,required:p,"aria-hidden":`true`,tabIndex:-1,onChange:e=>{let t=qj(e.currentTarget.files);F(m?.(t)??Kj(t,x)),_.onChange(t)}})}),(0,Qj.jsx)(`button`,{...k,className:c(vT,Yj(u)),type:`button`,disabled:f,"data-invalid":y?`true`:void 0,"aria-describedby":M,"aria-labelledby":typeof k[`aria-labelledby`]==`string`?`${k[`aria-labelledby`]} ${T}`:T,onClick:()=>{N.current?.click()},children:(0,Qj.jsx)(`span`,{id:T,children:S})}),p||y&&!v?(0,Qj.jsx)(vt,{children:(0,Qj.jsxs)(Qj.Fragment,{children:[p?(0,Qj.jsx)(`span`,{id:E,children:b(`required`)}):null,y&&!v?(0,Qj.jsx)(`span`,{id:D,children:b(`error-title`)}):null]})}):null,(0,Qj.jsx)(`div`,{"aria-live":`polite`,className:$j,role:`status`,children:P})]})})}var Zj,Qj,$j,eM,tM,nM,rM;function iM(){return(iM=t((()=>{l(),Zj=e(r()),Zl(),Ee(),a(),NS(),BS(),Jj(),mw(),yT(),Qj=G(),$j=u`
  color: var(--field-description);
  font-size: 0.9375rem;
  line-height: 1.45;
`,eM=u`
  min-height: var(--control-height-sm);
  padding: 0 var(--control-padding-x-sm);
  font-size: var(--font-size-sm);
`,tM=u`
  min-height: var(--control-height-md);
  padding: 0 var(--control-padding-x-md);
  font-size: var(--font-size-md);
`,nM=u`
  min-height: var(--control-height-lg);
  padding: 0 var(--control-padding-x-lg);
  font-size: var(--font-size-lg);
`,rM=`stacked`})))()}function aM(e){return typeof e==`string`?e:e.toString()}var oM,sM,cM;function lM(){return(lM=t((()=>{oM=e(r()),sM=G(),cM=oM.forwardRef(function({href:e,children:t,...n},r){return(0,sM.jsx)(`a`,{ref:r,href:aM(e),...n,children:t})})})))()}function uM(){return(uM=t((()=>{lM()})))()}var dM,fM,pM,mM,hM,gM,_M;function vM(){return(vM=t((()=>{l(),uM(),dM=e(r()),H(),Fr(),Ft(),Ee(),a(),zb(),fM=G(),pM=u`
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
`,mM={text:c(pM,u`
      text-decoration: underline;
    `),quiet:c(pM,u`
      text-decoration: none;

      &:hover,
      &:focus-visible {
        text-decoration: underline;
      }
    `),inherit:void 0},hM=`text`,gM=`span`,_M=dM.forwardRef(function(e,t){let{styledAsButton:n,appearance:r,variant:a,size:o,icon:s,iconPosition:l,isLoading:u,isDisabled:d,loadingLabel:f,onPress:p,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-describedby":v,"aria-labelledby":y,"aria-label":b,onClick:x,onKeyDown:S,onKeyUp:C,onFocus:w,onBlur:T,onPointerDown:E,onPointerUp:D,onPointerCancel:O,className:k,children:A,tabIndex:j,...M}=e,N=n===!0,{t:P}=i(`shared-module`),F=!!u,I=F||!!d,L=f??P(`link.loading`),R=dM.useId(),z=dM.useId(),B=dM.useId(),ee=M.target===`_blank`,te=P(`link.opensInNewTab`),V=fb(v,F&&N?R:void 0,ee&&y&&!b?B:void 0),ne=ee&&b?`${b} ${te}`:b,re=ne?void 0:y??(N?z:void 0),ie=Nt(t),{linkProps:ae,isPressed:oe}=Pr({isDisabled:I,...Y({onPress:p,onPressStart:m,onPressEnd:h,onPressChange:g,onPressUp:_,"aria-label":ne,"aria-describedby":V,"aria-labelledby":re})},ie),se=j,ce=typeof se==`number`?se:I?0:ae.tabIndex,le=c(N?hb({size:(N?o:void 0)??`medium`,variant:(N?a:void 0)??`primary`}):mM[r??hM],k)||void 0,ue=N?s:void 0,de=(N?l:void 0)??`start`,fe=W(ae,{onClick:I?void 0:x,onPointerDown:E,onPointerUp:D,onPointerCancel:O,onKeyDown:S,onKeyUp:C,onFocus:w,onBlur:T});return(0,fM.jsx)(cM,{...fe,...M,ref:ie,className:le,"data-pressed":oe?`true`:`false`,"data-disabled-reason":F?`loading`:I?`disabled`:void 0,"aria-busy":F?`true`:void 0,tabIndex:ce,children:N?(0,fM.jsxs)(fM.Fragment,{children:[(0,fM.jsxs)(`span`,{className:c(vb,F?yb:void 0),children:[ue&&de===`start`?(0,fM.jsx)(`span`,{className:bb,children:ue}):null,(0,fM.jsxs)(`span`,{id:re===z?z:void 0,children:[A,ee&&!b?(0,fM.jsxs)(vt,{elementType:gM,id:B,children:[` `,te]}):null]}),ue&&de===`end`?(0,fM.jsx)(`span`,{className:bb,children:ue}):null]}),F?(0,fM.jsxs)(fM.Fragment,{children:[(0,fM.jsx)(`span`,{className:xb,"aria-hidden":`true`,children:(0,fM.jsx)(`span`,{className:Sb})}),(0,fM.jsx)(vt,{id:R,children:L})]}):null]}):(0,fM.jsxs)(fM.Fragment,{children:[A,ee&&!b?(0,fM.jsxs)(vt,{elementType:gM,id:B,children:[` `,te]}):null]})})})})))()}function yM(e){return e!=null&&String(e).length>0}function bM(e,t){return e||t}function xM(e){return e??` `}function SM(e,t,n){return e===void 0?!t||n.length===0?null:n.join(` `):e}function CM({defaultValue:e,elementRef:t,value:n}){let[r,i]=wM.useState(!1),[a,o]=wM.useState(()=>yM(n)||yM(e));return wM.useEffect(()=>{if(n!==void 0){o(yM(n));return}if(t.current){o(t.current.value.length>0);return}o(yM(e))},[e,t,n]),{hasValue:a,isFocused:r,isFloated:bM(r,a),setHasValue:o,setIsFocused:i}}var wM;function TM(){return(TM=t((()=>{wM=e(r())})))()}function EM(){return(EM=t((()=>{l(),r(),dw(),TM(),G(),u`
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
`})))()}function DM(e){if(!e.startsWith(`[`))return!1;let t=1;e[t]===`^`&&(t+=1);let n=!1,r=!0;for(;t<e.length;){let i=e[t];if(i===`\\`){t+=2,n=!0,r=!1;continue}if(i===`]`){if(r){t+=1,n=!0,r=!1;continue}return n&&t===e.length-1}t+=1,n=!0,r=!1}return!1}function OM(e){if(!DM(e.source))throw Error(`toCharacterMatcher expects a simple character-class RegExp (e.g. /[0-9]/)`);let t=e.flags.replaceAll(`g`,``);return new RegExp(e.source,t)}function kM(e,t){return typeof t==`function`?t(e):OM(t).test(e)}function AM(e,t=RM){return Array.from(e).filter(e=>kM(e,t)).join(``)}function jM(e,t){return Array.from({length:t},(t,n)=>e[n]??``)}function MM(e){return e.join(``)}function NM(e,t){return Math.max(0,Math.min(t-1,e))}function PM(e,t,n,r){let i=[...e],a=AM(n,r).slice(-1);return i[t]=a,{slots:i,nextIndex:a?NM(t+1,e.length):t}}function FM(e,t,n,r){let i=[...e],a=AM(n,r).slice(0,i.length-t).split(``);for(let e=0;e<a.length;e+=1)i[t+e]=a[e]??``;return{slots:i,nextIndex:a.length>0?NM(t+a.length,i.length):t}}function IM(e,t){let n=[...e];if(n[t])return n[t]=``,{slots:n,nextIndex:t};let r=NM(t-1,n.length);return n[r]=``,{slots:n,nextIndex:r}}function LM(e,t,n,r){return n?.(e,t)??r?.(e,t)??`Character ${e+1} of ${t}`}var RM;function zM(){return(zM=t((()=>{RM=/[0-9]/})))()}function BM(e){switch(e){case`sm`:return KM;case`lg`:return JM;default:return qM}}function VM(e){let{name:t,control:n,rules:r,id:a,label:o,description:s,errorMessage:l,fieldSize:u=`md`,length:d=6,onComplete:f,allowedCharacters:p=/[0-9]/,getSlotAriaLabel:m,isDisabled:h=!1,isReadOnly:g=!1,isRequired:_=!1,className:v,autoComplete:y}=e,{field:b,resolvedError:x,isInvalid:S}=MS({name:t,control:n,...Y({rules:r}),errorMessage:l}),{t:C}=i(`shared-module`),w=(0,HM.useId)(),T=a??w,E=(0,HM.useRef)(null),D=(0,HM.useRef)(null),O=(0,HM.useRef)([]),k=(0,HM.useRef)(!1);(0,HM.useImperativeHandle)(b.ref,()=>O.current[0]??IS(D.current,XM));let A=(0,HM.useId)(),j=(0,HM.useId)(),{labelProps:M,fieldProps:N,descriptionProps:P,errorMessageProps:F}=Xl({label:o,description:s,errorMessage:x,id:T,isInvalid:S}),{id:I=T,"aria-labelledby":L,...R}=N,z=Array.from(new Set([L,M.id].flatMap(e=>typeof e==`string`?e.split(` `):[]).filter(e=>e.length>0))).join(` `),B=W(M,{onClick:()=>{h||O.current[0]?.focus()}}),ee=typeof b.value==`string`?b.value:``;(0,HM.useEffect)(()=>{E.current&&(E.current.value=ee)},[ee]);let te=RS({descriptionId:A,errorMessageId:j,hasDescription:!!s,hasErrorMessage:!!x}),V=jM(ee,d),ne=e=>{b.onChange(e),E.current&&(E.current.value=e),e.length===d&&f?.(e)};return(0,UM.jsxs)(fw,{...Y({className:v}),label:o,labelProps:B,description:s,descriptionProps:P,errorMessage:x,errorMessageProps:F,isDisabled:h,isRequired:_,layout:YM,children:[(0,UM.jsx)(vt,{children:(0,UM.jsx)(`input`,{ref:E,type:`text`,name:b.name,value:ee,disabled:h,readOnly:g,required:_,"aria-hidden":`true`,tabIndex:-1,autoComplete:y??`one-time-code`,"aria-describedby":te,onChange:()=>{}})}),(0,UM.jsx)(`div`,{...R,ref:D,className:WM,role:`group`,"aria-labelledby":z||void 0,"aria-disabled":h?`true`:void 0,onBlur:e=>{D.current?.contains(e.relatedTarget)||(k.current=!1,b.onBlur())},onFocus:()=>{k.current||=!0},children:V.map((e,t)=>(0,UM.jsx)(`input`,{id:t===0?I:void 0,ref:e=>{O.current[t]=e},className:c(GM,BM(u)),type:`text`,inputMode:`numeric`,maxLength:1,autoComplete:t===0?y??`one-time-code`:`off`,value:e,disabled:h,readOnly:g,"data-invalid":S?`true`:`false`,"aria-invalid":S?`true`:void 0,"aria-required":t===0&&_?`true`:void 0,"aria-label":LM(t,d,m,e=>C(`otp.slotLabel`,{index:e+1})),onChange:e=>{if(g)return;let n=PM(V,t,e.currentTarget.value,p),r=MM(n.slots);ne(r),O.current[n.nextIndex]?.focus()},onKeyDown:e=>{if(e.key===`ArrowLeft`)e.preventDefault(),O.current[NM(t-1,d)]?.focus();else if(e.key===`ArrowRight`)e.preventDefault(),O.current[NM(t+1,d)]?.focus();else if(e.key===`Backspace`){if(g)return;e.preventDefault();let n=IM(V,t);ne(MM(n.slots)),O.current[n.nextIndex]?.focus()}},onPaste:e=>{if(g)return;e.preventDefault();let n=e.clipboardData.getData(`text`),r=FM(V,t,n,p);ne(MM(r.slots)),O.current[r.nextIndex]?.focus()}},`${T}-${t}`))})]})}var HM,UM,WM,GM,KM,qM,JM,YM,XM;function ZM(){return(ZM=t((()=>{l(),HM=e(r()),H(),Zl(),Ee(),a(),NS(),BS(),zM(),mw(),UM=G(),WM=u`
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
`,YM=`stacked`,XM=`input`})))()}function QM(e){let t=(0,$M.useMemo)(()=>e.name||`radio-group-${eN}-${++tN}`,[e.name]),[n,r]=gt(e.value,e.defaultValue??null,e.onChange),[i]=(0,$M.useState)(n),[a,o]=(0,$M.useState)(null),s=Al({...e,value:n}),c=t=>{!e.isReadOnly&&!e.isDisabled&&(r(t),s.commitValidation())},l=s.displayValidation.isInvalid;return{...s,name:t,selectedValue:n,defaultSelectedValue:e.value===void 0?e.defaultValue??null:i,setSelectedValue:c,lastFocusedValue:a,setLastFocusedValue:o,isDisabled:e.isDisabled||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,validationState:e.validationState||(l?`invalid`:null),isInvalid:l}}var $M,eN,tN;function nN(){return(nN=t((()=>{Hl(),ae(),$M=r(),eN=Math.round(Math.random()*1e10),tN=0})))()}function rN(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,isDisabled:l=!1,isReadOnly:u=!1,isRequired:d=!1,orientation:f=`vertical`,variant:p=`list`,fillWidth:m=!1,proseDescription:h=!1,className:g,children:_,"aria-label":v}=e,{field:y,resolvedError:b,isInvalid:x}=MS({name:t,control:n,rules:r,errorMessage:o}),S=(0,iN.useRef)(null);(0,iN.useImperativeHandle)(y.ref,()=>({focus(){S.current?.querySelector(yN)?.focus()}}));let C=QM({...y.value===null||y.value===void 0?{}:{value:String(y.value)},onChange:e=>{y.onChange(e)},name:y.name,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:x}),{radioGroupProps:w,labelProps:T,descriptionProps:E,errorMessageProps:D,isInvalid:O,validationErrors:k}=zv({label:i,description:a,errorMessage:b,name:y.name,orientation:f,isDisabled:l,isReadOnly:u,isRequired:d,isInvalid:x,...Y({"aria-label":v})},C),A=p===`segmented`,j=a?(0,aN.jsx)(`div`,{...E,className:h?pN:mC,children:a}):null,M=b??(O&&k.length>0?k.join(` `):null),N=W(w,{onBlur:e=>{S.current?.contains(e.relatedTarget)||y.onBlur()}});return(0,aN.jsxs)(`fieldset`,{...N,ref:S,className:c(cC,sN,g),disabled:C.isDisabled,children:[(0,aN.jsx)(`legend`,{...T,className:A?dN:lC,children:i}),A&&j?(0,aN.jsx)(`div`,{className:h?mN:fN,children:j}):null,(0,aN.jsx)(oN.Provider,{value:{fieldSize:s,state:C,variant:p,fillWidth:m},children:(0,aN.jsx)(`div`,{className:c(vN(p,f),A&&!j?hN:void 0),children:_})}),!A&&j||M?(0,aN.jsxs)(`div`,{className:c(pC,!A&&j&&h?_N:gN),children:[A?null:j,M?(0,aN.jsx)(`div`,{...D,className:gC,role:`alert`,children:M}):null]}):null]})}var iN,aN,oN,sN,cN,lN,uN,dN,fN,pN,mN,hN,gN,_N,vN,yN;function bN(){return(bN=t((()=>{l(),nN(),iN=e(r()),H(),Bv(),NS(),_C(),aN=G(),oN=iN.createContext(null),sN=u`
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
`,pN=u`
  max-width: 100%;
  overflow-wrap: anywhere;
`,mN=u`
  margin-top: var(--space-4-5);
  margin-bottom: var(--space-4-5);
`,hN=u`
  margin-top: var(--space-3-5);
`,gN=u`
  margin-top: var(--space-3-5);
`,_N=u`
  margin-top: var(--space-4-5);
`,vN=(e,t)=>e===`segmented`?uN:t===`horizontal`?lN:cN,yN=`input[type="radio"]`})))()}function xN({forwardedRef:e,group:t,...n}){let{label:r,description:i,errorMessage:a,fieldSize:o,isDisabled:s,className:l,value:u,disabled:d,checked:f,defaultChecked:p,"aria-describedby":m,onChange:h,required:g,..._}=n,v=Nt(e),{focusProps:y,isFocusVisible:b}=T_(),x=(0,SN.useId)(),S=(0,SN.useId)(),C=o??t.fieldSize??wN,{inputProps:w,isDisabled:T,isSelected:E,labelProps:D}=Iv({children:r,value:u===void 0?void 0:String(u),isDisabled:!!(s||d)},t.state,v),O=fb(typeof w[`aria-describedby`]==`string`?w[`aria-describedby`]:void 0,m,i?x:void 0,a?S:void 0),{type:k,...A}=_,j=W(w,y,{...A,onChange:h,type:`radio`});return t.variant===`segmented`?(0,CN.jsxs)(`label`,{...D,className:c(hb({size:`medium`,variant:E?`primary`:`secondary`}),TN,t.fillWidth&&DN,l),"data-disabled":String(T),"data-focus-visible":String(b),"data-selected":String(E),children:[(0,CN.jsx)(`input`,{...j,ref:v,className:qS,"aria-describedby":O}),(0,CN.jsxs)(`span`,{className:EN,children:[(0,CN.jsx)(`span`,{children:r}),(0,CN.jsx)(ON,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]}):(0,CN.jsxs)(`label`,{...D,className:c(GS,VS(C),l),"data-disabled":String(T),children:[(0,CN.jsx)(`input`,{...j,ref:v,className:qS,"aria-describedby":O}),(0,CN.jsx)(`span`,{className:HS(C,`radio`),"aria-hidden":`true`,"data-disabled":String(T),"data-focus-visible":String(b),"data-invalid":String(t.state.isInvalid),"data-selected":String(E),children:E?(0,CN.jsx)(`span`,{className:c(nC,rC,oC)}):null}),(0,CN.jsxs)(`span`,{className:JS,children:[(0,CN.jsx)(`span`,{className:YS,children:r}),(0,CN.jsx)(ON,{description:i,descriptionId:x,errorMessage:a,errorMessageId:S})]})]})}var SN,CN,wN,TN,EN,DN,ON;function kN(){return(kN=t((()=>{l(),SN=e(r()),H(),D_(),Ft(),Rv(),BS(),zb(),sC(),_C(),CN=G(),wN=`md`,TN=u`
  /* The button sizes fix a height, which a description under the label would overflow. */
  height: auto;
  min-height: var(--control-height-md);
  padding-block: var(--space-2);

  &[data-focus-visible="true"] {
    box-shadow:
      0 0 0 var(--focus-ring-offset) var(--focus-ring-offset-color),
      0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--focus-ring-color);
  }
`,EN=u`
  display: grid;
  gap: var(--space-1);
  white-space: normal;
`,DN=u`
  flex: 1 1 0;
`,ON=({description:e,descriptionId:t,errorMessage:n,errorMessageId:r})=>(0,CN.jsxs)(CN.Fragment,{children:[e?(0,CN.jsx)(`span`,{className:mC,id:t,children:e}):null,n?(0,CN.jsx)(`span`,{className:gC,id:r,role:`alert`,children:n}):null]})})))()}function AN({forwardedRef:e,...t}){let{label:n,description:r,errorMessage:i,fieldSize:a,isDisabled:o,className:s,value:l,disabled:u,checked:d,defaultChecked:f,"aria-describedby":p,onChange:m,required:h,...g}=t,_=Nt(e),{focusProps:v,isFocusVisible:y}=T_(),b=(0,jN.useId)(),x=(0,jN.useId)(),S=a??NN,C=l===void 0?void 0:String(l),w=d!==void 0,T=LS({isDisabled:!!(o||u),isRequired:!!h,isInvalid:!!i}),E=fb(p,r?b:void 0,i?x:void 0),{type:D,...O}=g,k=W(O,v,{className:qS,type:`radio`,disabled:T.isDisabled,required:T.isRequired,...Y({value:C}),"aria-describedby":E,...w?{checked:d,onChange:m}:{defaultChecked:f,onChange:m}});return(0,MN.jsxs)(`label`,{className:c(GS,VS(S),s),"data-disabled":String(T.isDisabled),children:[(0,MN.jsx)(`input`,{...k,ref:_}),(0,MN.jsx)(`span`,{className:c(HS(S,`radio`),w?void 0:tC),"aria-hidden":`true`,"data-disabled":String(T.isDisabled),"data-focus-visible":String(y),"data-invalid":String(T.isInvalid),...pb(w,{"data-selected":String(d)}),children:w?d?(0,MN.jsx)(`span`,{className:c(nC,rC,oC)}):null:(0,MN.jsx)(`span`,{className:c(nC,oC)})}),(0,MN.jsxs)(`span`,{className:JS,children:[(0,MN.jsx)(`span`,{className:YS,children:n}),r?(0,MN.jsx)(`span`,{className:mC,id:b,children:r}):null,i?(0,MN.jsx)(`span`,{className:gC,id:x,role:`alert`,children:i}):null]})]})}var jN,MN,NN;function PN(){return(PN=t((()=>{l(),jN=r(),H(),D_(),Ft(),BS(),sC(),_C(),MN=G(),NN=`md`})))()}var FN,IN,LN;function RN(){return(RN=t((()=>{FN=e(r()),bN(),kN(),PN(),IN=G(),LN=FN.forwardRef(function(e,t){let n=(0,FN.useContext)(oN);return n?(0,IN.jsx)(xN,{...e,forwardedRef:t,group:n}):(0,IN.jsx)(AN,{...e,forwardedRef:t})})})))()}function zN(){return(zN=t((()=>{l(),r(),s`
  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: none;
  }
`})))()}function BN(e){let{onInputChange:t,inputValue:n,defaultInputValue:r=``}=e,i=e=>{t&&t(e)},[a,o]=(0,VN.useState)(null),[s,c]=gt(n,r,i);return{inputValue:s,setInputValue:c,focusedNodeId:a,setFocusedNodeId:o}}var VN;function HN(){return(HN=t((()=>{ae(),VN=r()})))()}function UN(e){let[t,n]=gt(WN(e.value),WN(e.defaultValue)||``,e.onChange);return{value:t,setValue:n}}function WN(e){if(e!=null)return e.toString()}function GN(){return(GN=t((()=>{ae()})))()}function KN(e){let{selectionMode:t=`single`,shouldCloseOnSelect:n=t===`single`}=e,r=ct(e),[i,a]=(0,JN.useState)(null),o=(0,JN.useMemo)(()=>e.defaultValue===void 0?t===`single`?e.defaultSelectedKey??null:[]:e.defaultValue,[e.defaultValue,e.defaultSelectedKey,t]),s=(0,JN.useMemo)(()=>e.value===void 0?t===`single`?e.selectedKey:void 0:e.value,[e.value,e.selectedKey,t]),[c,l]=gt(s,o,e.onChange),u=t===`single`&&Array.isArray(c)?c[0]:c,d=n=>{if(t===`single`){let t=Array.isArray(n)?n[0]??null:n;l(t),t!==u&&e.onSelectionChange?.(t)}else{let e=[];Array.isArray(n)?e=n:n!=null&&(e=[n]),l(e)}},f=Yw({...e,selectionMode:t,disallowEmptySelection:t===`single`,allowDuplicateSelectionEvents:!0,selectedKeys:(0,JN.useMemo)(()=>qN(u),[u]),onSelectionChange:e=>{if(e!==`all`){if(t===`single`){let t=e.values().next().value??null;d(t)}else d([...e]);n&&r.close(),h.commitValidation()}}}),p=f.selectionManager.firstSelectedKey,m=(0,JN.useMemo)(()=>[...f.selectionManager.selectedKeys].map(e=>f.collection.getItem(e)).filter(e=>e!=null),[f.selectionManager.selectedKeys,f.collection]),h=Al({...e,value:Array.isArray(u)&&u.length===0?null:u}),[g,_]=(0,JN.useState)(!1),[v]=(0,JN.useState)(u);return{...h,...f,...r,value:u,defaultValue:o??v,setValue:d,selectedKey:p,setSelectedKey:d,selectedItem:m[0]??null,selectedItems:m,defaultSelectedKey:e.defaultSelectedKey??(e.selectionMode===`single`?v:null),focusStrategy:i,open(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.open())},toggle(t=null){(f.collection.size!==0||e.allowsEmptyCollection)&&(a(t),r.toggle())},isFocused:g,setFocused:_}}function qN(e){if(e!==void 0)return e===null?[]:Array.isArray(e)?e:[e]}var JN;function YN(){return(YN=t((()=>{Hl(),Qw(),Je(),ae(),JN=r()})))()}var XN=n(((e,t)=>{(function(){var n,r=`Expected a function`,i=`__lodash_hash_undefined__`,a=`__lodash_placeholder__`,o=1,s=2,c=8,l=16,u=32,d=64,f=128,p=256,m=512,h=1/0,g=9007199254740991,_=17976931348623157e292,v=NaN,y=4294967295,b=y-1,x=y>>>1,S=[[`ary`,f],[`bind`,o],[`bindKey`,s],[`curry`,c],[`curryRight`,l],[`flip`,m],[`partial`,u],[`partialRight`,d],[`rearg`,p]],C=`[object Arguments]`,w=`[object Array]`,T=`[object AsyncFunction]`,E=`[object Boolean]`,D=`[object Date]`,O=`[object DOMException]`,k=`[object Error]`,A=`[object Function]`,j=`[object GeneratorFunction]`,M=`[object Map]`,N=`[object Number]`,P=`[object Null]`,F=`[object Object]`,I=`[object Promise]`,L=`[object Proxy]`,R=`[object RegExp]`,z=`[object Set]`,B=`[object String]`,ee=`[object Symbol]`,te=`[object Undefined]`,V=`[object WeakMap]`,ne=`[object WeakSet]`,re=`[object ArrayBuffer]`,ie=`[object DataView]`,ae=`[object Float32Array]`,oe=`[object Float64Array]`,se=`[object Int8Array]`,ce=`[object Int16Array]`,le=`[object Int32Array]`,ue=`[object Uint8Array]`,de=`[object Uint8ClampedArray]`,fe=`[object Uint16Array]`,pe=`[object Uint32Array]`,me=/\b__p \+= '';/g,he=/\b(__p \+=) '' \+/g,ge=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_e=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,ye=RegExp(_e.source),be=RegExp(ve.source),xe=/<%-([\s\S]+?)%>/g,Se=/<%([\s\S]+?)%>/g,Ce=/<%=([\s\S]+?)%>/g,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/,Ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,De=/[\\^$.*+?()[\]{}|]/g,Oe=RegExp(De.source),ke=/^\s+/,Ae=/\s/,H=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,je=/\{\n\/\* \[wrapped with (.+)\] \*/,Me=/,? & /,Ne=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Pe=/[()=,{}\[\]\/\s]/,Fe=/\\(\\)?/g,Ie=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Le=/\w*$/,Re=/^[-+]0x[0-9a-f]+$/i,ze=/^0b[01]+$/i,Be=/^\[object .+?Constructor\]$/,Ve=/^0o[0-7]+$/i,He=/^(?:0|[1-9]\d*)$/,Ue=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,We=/($^)/,Ge=/['\n\r\u2028\u2029\\]/g,Ke=`\\ud800-\\udfff`,qe=`\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff`,Je=`\\u2700-\\u27bf`,Ye=`a-z\\xdf-\\xf6\\xf8-\\xff`,Xe=`\\xac\\xb1\\xd7\\xf7`,Ze=`\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf`,Qe=`\\u2000-\\u206f`,$e=` \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000`,et=`A-Z\\xc0-\\xd6\\xd8-\\xde`,tt=`\\ufe0e\\ufe0f`,nt=Xe+Ze+Qe+$e,rt=`['’]`,U=`[`+Ke+`]`,it=`[`+nt+`]`,at=`[`+qe+`]`,ot=`\\d+`,st=`[`+Je+`]`,ct=`[`+Ye+`]`,lt=`[^`+Ke+nt+ot+Je+Ye+et+`]`,ut=`\\ud83c[\\udffb-\\udfff]`,dt=`(?:`+at+`|`+ut+`)`,ft=`[^`+Ke+`]`,W=`(?:\\ud83c[\\udde6-\\uddff]){2}`,pt=`[\\ud800-\\udbff][\\udc00-\\udfff]`,mt=`[`+et+`]`,ht=`\\u200d`,gt=`(?:`+ct+`|`+lt+`)`,_t=`(?:`+mt+`|`+lt+`)`,vt=`(?:`+rt+`(?:d|ll|m|re|s|t|ve))?`,yt=`(?:`+rt+`(?:D|LL|M|RE|S|T|VE))?`,bt=dt+`?`,xt=`[`+tt+`]?`,St=`(?:`+ht+`(?:`+[ft,W,pt].join(`|`)+`)`+xt+bt+`)*`,G=`\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])`,Ct=`\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])`,wt=xt+bt+St,Tt=`(?:`+[st,W,pt].join(`|`)+`)`+wt,Et=`(?:`+[ft+at+`?`,at,W,pt,U].join(`|`)+`)`,Dt=RegExp(rt,`g`),Ot=RegExp(at,`g`),kt=RegExp(ut+`(?=`+ut+`)|`+Et+wt,`g`),At=RegExp([mt+`?`+ct+`+`+vt+`(?=`+[it,mt,`$`].join(`|`)+`)`,_t+`+`+yt+`(?=`+[it,mt+gt,`$`].join(`|`)+`)`,mt+`?`+gt+`+`+vt,mt+`+`+yt,Ct,G,ot,Tt].join(`|`),`g`),jt=RegExp(`[`+ht+Ke+qe+tt+`]`),Mt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Nt=`Array.Buffer.DataView.Date.Error.Float32Array.Float64Array.Function.Int8Array.Int16Array.Int32Array.Map.Math.Object.Promise.RegExp.Set.String.Symbol.TypeError.Uint8Array.Uint8ClampedArray.Uint16Array.Uint32Array.WeakMap._.clearTimeout.isFinite.parseInt.setTimeout`.split(`.`),Pt=-1,Ft={};Ft[ae]=Ft[oe]=Ft[se]=Ft[ce]=Ft[le]=Ft[ue]=Ft[de]=Ft[fe]=Ft[pe]=!0,Ft[C]=Ft[w]=Ft[re]=Ft[E]=Ft[ie]=Ft[D]=Ft[k]=Ft[A]=Ft[M]=Ft[N]=Ft[F]=Ft[R]=Ft[z]=Ft[B]=Ft[V]=!1;var It={};It[C]=It[w]=It[re]=It[ie]=It[E]=It[D]=It[ae]=It[oe]=It[se]=It[ce]=It[le]=It[M]=It[N]=It[F]=It[R]=It[z]=It[B]=It[ee]=It[ue]=It[de]=It[fe]=It[pe]=!0,It[k]=It[A]=It[V]=!1;var Lt={À:`A`,Á:`A`,Â:`A`,Ã:`A`,Ä:`A`,Å:`A`,à:`a`,á:`a`,â:`a`,ã:`a`,ä:`a`,å:`a`,Ç:`C`,ç:`c`,Ð:`D`,ð:`d`,È:`E`,É:`E`,Ê:`E`,Ë:`E`,è:`e`,é:`e`,ê:`e`,ë:`e`,Ì:`I`,Í:`I`,Î:`I`,Ï:`I`,ì:`i`,í:`i`,î:`i`,ï:`i`,Ñ:`N`,ñ:`n`,Ò:`O`,Ó:`O`,Ô:`O`,Õ:`O`,Ö:`O`,Ø:`O`,ò:`o`,ó:`o`,ô:`o`,õ:`o`,ö:`o`,ø:`o`,Ù:`U`,Ú:`U`,Û:`U`,Ü:`U`,ù:`u`,ú:`u`,û:`u`,ü:`u`,Ý:`Y`,ý:`y`,ÿ:`y`,Æ:`Ae`,æ:`ae`,Þ:`Th`,þ:`th`,ß:`ss`,Ā:`A`,Ă:`A`,Ą:`A`,ā:`a`,ă:`a`,ą:`a`,Ć:`C`,Ĉ:`C`,Ċ:`C`,Č:`C`,ć:`c`,ĉ:`c`,ċ:`c`,č:`c`,Ď:`D`,Đ:`D`,ď:`d`,đ:`d`,Ē:`E`,Ĕ:`E`,Ė:`E`,Ę:`E`,Ě:`E`,ē:`e`,ĕ:`e`,ė:`e`,ę:`e`,ě:`e`,Ĝ:`G`,Ğ:`G`,Ġ:`G`,Ģ:`G`,ĝ:`g`,ğ:`g`,ġ:`g`,ģ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ī:`I`,Ĭ:`I`,Į:`I`,İ:`I`,ĩ:`i`,ī:`i`,ĭ:`i`,į:`i`,ı:`i`,Ĵ:`J`,ĵ:`j`,Ķ:`K`,ķ:`k`,ĸ:`k`,Ĺ:`L`,Ļ:`L`,Ľ:`L`,Ŀ:`L`,Ł:`L`,ĺ:`l`,ļ:`l`,ľ:`l`,ŀ:`l`,ł:`l`,Ń:`N`,Ņ:`N`,Ň:`N`,Ŋ:`N`,ń:`n`,ņ:`n`,ň:`n`,ŋ:`n`,Ō:`O`,Ŏ:`O`,Ő:`O`,ō:`o`,ŏ:`o`,ő:`o`,Ŕ:`R`,Ŗ:`R`,Ř:`R`,ŕ:`r`,ŗ:`r`,ř:`r`,Ś:`S`,Ŝ:`S`,Ş:`S`,Š:`S`,ś:`s`,ŝ:`s`,ş:`s`,š:`s`,Ţ:`T`,Ť:`T`,Ŧ:`T`,ţ:`t`,ť:`t`,ŧ:`t`,Ũ:`U`,Ū:`U`,Ŭ:`U`,Ů:`U`,Ű:`U`,Ų:`U`,ũ:`u`,ū:`u`,ŭ:`u`,ů:`u`,ű:`u`,ų:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ŷ:`y`,Ÿ:`Y`,Ź:`Z`,Ż:`Z`,Ž:`Z`,ź:`z`,ż:`z`,ž:`z`,Ĳ:`IJ`,ĳ:`ij`,Œ:`Oe`,œ:`oe`,ŉ:`'n`,ſ:`s`},Rt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},zt={"&amp;":`&`,"&lt;":`<`,"&gt;":`>`,"&quot;":`"`,"&#39;":`'`},Bt={"\\":`\\`,"'":`'`,"\n":`n`,"\r":`r`,"\u2028":`u2028`,"\u2029":`u2029`},Vt=parseFloat,Ht=parseInt,Ut=typeof global==`object`&&global&&global.Object===Object&&global,Wt=typeof self==`object`&&self&&self.Object===Object&&self,Gt=Ut||Wt||Function(`return this`)(),Kt=typeof e==`object`&&e&&!e.nodeType&&e,qt=Kt&&typeof t==`object`&&t&&!t.nodeType&&t,Jt=qt&&qt.exports===Kt,Yt=Jt&&Ut.process,Xt=function(){try{return qt&&qt.require&&qt.require(`util`).types||Yt&&Yt.binding&&Yt.binding(`util`)}catch{}}(),Zt=Xt&&Xt.isArrayBuffer,Qt=Xt&&Xt.isDate,$t=Xt&&Xt.isMap,en=Xt&&Xt.isRegExp,tn=Xt&&Xt.isSet,nn=Xt&&Xt.isTypedArray;function rn(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function an(e,t,n,r){for(var i=-1,a=e==null?0:e.length;++i<a;){var o=e[i];t(r,o,n(o),e)}return r}function on(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function sn(e,t){for(var n=e==null?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function cn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function ln(e,t){for(var n=-1,r=e==null?0:e.length,i=0,a=[];++n<r;){var o=e[n];t(o,n,e)&&(a[i++]=o)}return a}function un(e,t){return!!(e!=null&&e.length)&&Sn(e,t,0)>-1}function dn(e,t,n){for(var r=-1,i=e==null?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}function fn(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}function pn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function mn(e,t,n,r){var i=-1,a=e==null?0:e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function hn(e,t,n,r){var i=e==null?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}function gn(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var _n=En(`length`);function vn(e){return e.split(``)}function yn(e){return e.match(Ne)||[]}function bn(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}function xn(e,t,n,r){for(var i=e.length,a=n+(r?1:-1);r?a--:++a<i;)if(t(e[a],a,e))return a;return-1}function Sn(e,t,n){return t===t?Qn(e,t,n):xn(e,wn,n)}function Cn(e,t,n,r){for(var i=n-1,a=e.length;++i<a;)if(r(e[i],t))return i;return-1}function wn(e){return e!==e}function Tn(e,t){var n=e==null?0:e.length;return n?An(e,t)/n:v}function En(e){return function(t){return t==null?n:t[e]}}function Dn(e){return function(t){return e==null?n:e[t]}}function On(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function kn(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function An(e,t){for(var r,i=-1,a=e.length;++i<a;){var o=t(e[i]);o!==n&&(r=r===n?o:r+o)}return r}function jn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function Mn(e,t){return fn(t,function(t){return[t,e[t]]})}function Nn(e){return e&&e.slice(0,nr(e)+1).replace(ke,``)}function Pn(e){return function(t){return e(t)}}function Fn(e,t){return fn(t,function(t){return e[t]})}function In(e,t){return e.has(t)}function Ln(e,t){for(var n=-1,r=e.length;++n<r&&Sn(t,e[n],0)>-1;);return n}function Rn(e,t){for(var n=e.length;n--&&Sn(t,e[n],0)>-1;);return n}function zn(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}var Bn=Dn(Lt),Vn=Dn(Rt);function Hn(e){return`\\`+Bt[e]}function Un(e,t){return e==null?n:e[t]}function Wn(e){return jt.test(e)}function Gn(e){return Mt.test(e)}function Kn(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function qn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Jn(e,t){return function(n){return e(t(n))}}function Yn(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n];(s===t||s===a)&&(e[n]=a,o[i++]=n)}return o}function Xn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function Zn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function Qn(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function $n(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function er(e){return Wn(e)?ir(e):_n(e)}function tr(e){return Wn(e)?ar(e):vn(e)}function nr(e){for(var t=e.length;t--&&Ae.test(e.charAt(t)););return t}var rr=Dn(zt);function ir(e){for(var t=kt.lastIndex=0;kt.test(e);)++t;return t}function ar(e){return e.match(kt)||[]}function or(e){return e.match(At)||[]}var sr=(function e(t){t=t==null?Gt:sr.defaults(Gt.Object(),t,sr.pick(Gt,Nt));var Ae=t.Array,Ne=t.Date,Ke=t.Error,qe=t.Function,Je=t.Math,Ye=t.Object,Xe=t.RegExp,Ze=t.String,Qe=t.TypeError,$e=Ae.prototype,et=qe.prototype,tt=Ye.prototype,nt=t[`__core-js_shared__`],rt=et.toString,U=tt.hasOwnProperty,it=0,at=function(){var e=/[^.]+$/.exec(nt&&nt.keys&&nt.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}(),ot=tt.toString,st=rt.call(Ye),ct=Gt._,lt=Xe(`^`+rt.call(U).replace(De,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`),ut=Jt?t.Buffer:n,dt=t.Symbol,ft=t.Uint8Array,W=ut?ut.allocUnsafe:n,pt=Jn(Ye.getPrototypeOf,Ye),mt=Ye.create,ht=tt.propertyIsEnumerable,gt=$e.splice,_t=dt?dt.isConcatSpreadable:n,vt=dt?dt.iterator:n,yt=dt?dt.toStringTag:n,bt=function(){try{var e=Fo(Ye,`defineProperty`);return e({},``,{}),e}catch{}}(),xt=t.clearTimeout!==Gt.clearTimeout&&t.clearTimeout,St=Ne&&Ne.now!==Gt.Date.now&&Ne.now,G=t.setTimeout!==Gt.setTimeout&&t.setTimeout,Ct=Je.ceil,wt=Je.floor,Tt=Ye.getOwnPropertySymbols,Et=ut?ut.isBuffer:n,kt=t.isFinite,At=$e.join,jt=Jn(Ye.keys,Ye),Mt=Je.max,Lt=Je.min,Rt=Ne.now,zt=t.parseInt,Bt=Je.random,Ut=$e.reverse,Wt=Fo(t,`DataView`),Kt=Fo(t,`Map`),qt=Fo(t,`Promise`),Yt=Fo(t,`Set`),Xt=Fo(t,`WeakMap`),_n=Fo(Ye,`create`),vn=Xt&&new Xt,Dn={},Qn=bs(Wt),ir=bs(Kt),ar=bs(qt),cr=bs(Yt),lr=bs(Xt),ur=dt?dt.prototype:n,dr=ur?ur.valueOf:n,fr=ur?ur.toString:n;function K(e){if(fu(e)&&!J(e)&&!(e instanceof gr)){if(e instanceof hr)return e;if(U.call(e,`__wrapped__`))return Ss(e)}return new hr(e)}var pr=function(){function e(){}return function(t){if(!du(t))return{};if(mt)return mt(t);e.prototype=t;var r=new e;return e.prototype=n,r}}();function mr(){}function hr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=n}K.templateSettings={escape:xe,evaluate:Se,interpolate:Ce,variable:``,imports:{_:K}},K.prototype=mr.prototype,K.prototype.constructor=K,hr.prototype=pr(mr.prototype),hr.prototype.constructor=hr;function gr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=y,this.__views__=[]}function _r(){var e=new gr(this.__wrapped__);return e.__actions__=Ka(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ka(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ka(this.__views__),e}function vr(){if(this.__filtered__){var e=new gr(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function yr(){var e=this.__wrapped__.value(),t=this.__dir__,n=J(e),r=t<0,i=n?e.length:0,a=Bo(0,i,this.__views__),o=a.start,s=a.end,c=s-o,l=r?s:o-1,u=this.__iteratees__,d=u.length,f=0,p=Lt(c,this.__takeCount__);if(!n||!r&&i==c&&p==c)return Da(e,this.__actions__);var m=[];outer:for(;c--&&f<p;){l+=t;for(var h=-1,g=e[l];++h<d;){var _=u[h],v=_.iteratee,y=_.type,b=v(g);if(y==2)g=b;else if(!b){if(y==1)continue outer;break outer}}m[f++]=g}return m}gr.prototype=pr(mr.prototype),gr.prototype.constructor=gr;function br(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function xr(){this.__data__=_n?_n(null):{},this.size=0}function Sr(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}function Cr(e){var t=this.__data__;if(_n){var r=t[e];return r===i?n:r}return U.call(t,e)?t[e]:n}function wr(e){var t=this.__data__;return _n?t[e]!==n:U.call(t,e)}function Tr(e,t){var r=this.__data__;return this.size+=+!this.has(e),r[e]=_n&&t===n?i:t,this}br.prototype.clear=xr,br.prototype.delete=Sr,br.prototype.get=Cr,br.prototype.has=wr,br.prototype.set=Tr;function Er(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Dr(){this.__data__=[],this.size=0}function Or(e){var t=this.__data__,n=$r(t,e);return n<0?!1:(n==t.length-1?t.pop():gt.call(t,n,1),--this.size,!0)}function kr(e){var t=this.__data__,r=$r(t,e);return r<0?n:t[r][1]}function Ar(e){return $r(this.__data__,e)>-1}function jr(e,t){var n=this.__data__,r=$r(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}Er.prototype.clear=Dr,Er.prototype.delete=Or,Er.prototype.get=kr,Er.prototype.has=Ar,Er.prototype.set=jr;function Mr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Nr(){this.size=0,this.__data__={hash:new br,map:new(Kt||Er),string:new br}}function Pr(e){var t=No(this,e).delete(e);return this.size-=+!!t,t}function Fr(e){return No(this,e).get(e)}function Ir(e){return No(this,e).has(e)}function Lr(e,t){var n=No(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}Mr.prototype.clear=Nr,Mr.prototype.delete=Pr,Mr.prototype.get=Fr,Mr.prototype.has=Ir,Mr.prototype.set=Lr;function Rr(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Mr;++t<n;)this.add(e[t])}function zr(e){return this.__data__.set(e,i),this}function Br(e){return this.__data__.has(e)}Rr.prototype.add=Rr.prototype.push=zr,Rr.prototype.has=Br;function Vr(e){var t=this.__data__=new Er(e);this.size=t.size}function Hr(){this.__data__=new Er,this.size=0}function Ur(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Wr(e){return this.__data__.get(e)}function Gr(e){return this.__data__.has(e)}function Kr(e,t){var n=this.__data__;if(n instanceof Er){var r=n.__data__;if(!Kt||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this}Vr.prototype.clear=Hr,Vr.prototype.delete=Ur,Vr.prototype.get=Wr,Vr.prototype.has=Gr,Vr.prototype.set=Kr;function qr(e,t){var n=J(e),r=!n&&Yl(e),i=!n&&!r&&eu(e),a=!n&&!r&&!i&&Du(e),o=n||r||i||a,s=o?jn(e.length,Ze):[],c=s.length;for(var l in e)(t||U.call(e,l))&&!(o&&(l==`length`||i&&(l==`offset`||l==`parent`)||a&&(l==`buffer`||l==`byteLength`||l==`byteOffset`)||Jo(l,c)))&&s.push(l);return s}function Jr(e){var t=e.length;return t?e[oa(0,t-1)]:n}function Yr(e,t){return _s(Ka(e),ai(t,0,e.length))}function Xr(e){return _s(Ka(e))}function Zr(e,t,r){(r!==n&&!Kl(e[t],r)||r===n&&!(t in e))&&ri(e,t,r)}function Qr(e,t,r){var i=e[t];(!(U.call(e,t)&&Kl(i,r))||r===n&&!(t in e))&&ri(e,t,r)}function $r(e,t){for(var n=e.length;n--;)if(Kl(e[n][0],t))return n;return-1}function ei(e,t,n,r){return di(e,function(e,i,a){t(r,e,n(e),a)}),r}function ti(e,t){return e&&qa(t,ld(t),e)}function ni(e,t){return e&&qa(t,ud(t),e)}function ri(e,t,n){t==`__proto__`&&bt?bt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function ii(e,t){for(var r=-1,i=t.length,a=Ae(i),o=e==null;++r<i;)a[r]=o?n:rd(e,t[r]);return a}function ai(e,t,r){return e===e&&(r!==n&&(e=e<=r?e:r),t!==n&&(e=e>=t?e:t)),e}function oi(e,t,r,i,a,o){var s,c=t&1,l=t&2,u=t&4;if(r&&(s=a?r(e,i,a,o):r(e)),s!==n)return s;if(!du(e))return e;var d=J(e);if(d){if(s=Uo(e),!c)return Ka(e,s)}else{var f=zo(e),p=f==A||f==j;if(eu(e))return Ia(e,c);if(f==F||f==C||p&&!a){if(s=l||p?{}:Wo(e),!c)return l?Ya(e,ni(s,e)):Ja(e,ti(s,e))}else{if(!It[f])return a?e:{};s=Go(e,f,c)}}o||=new Vr;var m=o.get(e);if(m)return m;o.set(e,s),wu(e)?e.forEach(function(n){s.add(oi(n,t,r,n,e,o))}):pu(e)&&e.forEach(function(n,i){s.set(i,oi(n,t,r,i,e,o))});var h=d?n:(u?l?ko:Oo:l?ud:ld)(e);return on(h||e,function(n,i){h&&(i=n,n=e[i]),Qr(s,i,oi(n,t,r,i,e,o))}),s}function si(e){var t=ld(e);return function(n){return ci(n,e,t)}}function ci(e,t,r){var i=r.length;if(e==null)return!i;for(e=Ye(e);i--;){var a=r[i],o=t[a],s=e[a];if(s===n&&!(a in e)||!o(s))return!1}return!0}function li(e,t,i){if(typeof e!=`function`)throw new Qe(r);return ps(function(){e.apply(n,i)},t)}function ui(e,t,n,r){var i=-1,a=un,o=!0,s=e.length,c=[],l=t.length;if(!s)return c;n&&(t=fn(t,Pn(n))),r?(a=dn,o=!1):t.length>=200&&(a=In,o=!1,t=new Rr(t));outer:for(;++i<s;){var u=e[i],d=n==null?u:n(u);if(u=r||u!==0?u:0,o&&d===d){for(var f=l;f--;)if(t[f]===d)continue outer;c.push(u)}else a(t,d,r)||c.push(u)}return c}var di=Qa(bi),fi=Qa(xi,!0);function pi(e,t){var n=!0;return di(e,function(e,r,i){return n=!!t(e,r,i),n}),n}function mi(e,t,r){for(var i=-1,a=e.length;++i<a;){var o=e[i],s=t(o);if(s!=null&&(c===n?s===s&&!Eu(s):r(s,c)))var c=s,l=o}return l}function hi(e,t,r,i){var a=e.length;for(r=Fu(r),r<0&&(r=-r>a?0:a+r),i=i===n||i>a?a:Fu(i),i<0&&(i+=a),i=r>i?0:Iu(i);r<i;)e[r++]=t;return e}function gi(e,t){var n=[];return di(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}function _i(e,t,n,r,i){var a=-1,o=e.length;for(n||=qo,i||=[];++a<o;){var s=e[a];t>0&&n(s)?t>1?_i(s,t-1,n,r,i):pn(i,s):r||(i[i.length]=s)}return i}var vi=$a(),yi=$a(!0);function bi(e,t){return e&&vi(e,t,ld)}function xi(e,t){return e&&yi(e,t,ld)}function Si(e,t){return ln(t,function(t){return cu(e[t])})}function Ci(e,t){t=Ma(t,e);for(var r=0,i=t.length;e!=null&&r<i;)e=e[ys(t[r++])];return r&&r==i?e:n}function wi(e,t,n){var r=t(e);return J(e)?r:pn(r,n(e))}function Ti(e){return e==null?e===n?te:P:yt&&yt in Ye(e)?Io(e):ss(e)}function Ei(e,t){return e>t}function Di(e,t){return e!=null&&U.call(e,t)}function Oi(e,t){return e!=null&&t in Ye(e)}function ki(e,t,n){return e>=Lt(t,n)&&e<Mt(t,n)}function Ai(e,t,r){for(var i=r?dn:un,a=e[0].length,o=e.length,s=o,c=Ae(o),l=1/0,u=[];s--;){var d=e[s];s&&t&&(d=fn(d,Pn(t))),l=Lt(d.length,l),c[s]=!r&&(t||a>=120&&d.length>=120)?new Rr(s&&d):n}d=e[0];var f=-1,p=c[0];outer:for(;++f<a&&u.length<l;){var m=d[f],h=t?t(m):m;if(m=r||m!==0?m:0,!(p?In(p,h):i(u,h,r))){for(s=o;--s;){var g=c[s];if(!(g?In(g,h):i(e[s],h,r)))continue outer}p&&p.push(h),u.push(m)}}return u}function ji(e,t,n,r){return bi(e,function(e,i,a){t(r,n(e),i,a)}),r}function Mi(e,t,r){t=Ma(t,e),e=ls(e,t);var i=e==null?e:e[ys(qs(t))];return i==null?n:rn(i,e,r)}function Ni(e){return fu(e)&&Ti(e)==C}function Pi(e){return fu(e)&&Ti(e)==re}function Fi(e){return fu(e)&&Ti(e)==D}function Ii(e,t,n,r,i){return e===t?!0:e==null||t==null||!fu(e)&&!fu(t)?e!==e&&t!==t:Li(e,t,n,r,Ii,i)}function Li(e,t,n,r,i,a){var o=J(e),s=J(t),c=o?w:zo(e),l=s?w:zo(t);c=c==C?F:c,l=l==C?F:l;var u=c==F,d=l==F,f=c==l;if(f&&eu(e)){if(!eu(t))return!1;o=!0,u=!1}if(f&&!u)return a||=new Vr,o||Du(e)?wo(e,t,n,r,i,a):To(e,t,c,n,r,i,a);if(!(n&1)){var p=u&&U.call(e,`__wrapped__`),m=d&&U.call(t,`__wrapped__`);if(p||m){var h=p?e.value():e,g=m?t.value():t;return a||=new Vr,i(h,g,n,r,a)}}return f?(a||=new Vr,Eo(e,t,n,r,i,a)):!1}function Ri(e){return fu(e)&&zo(e)==M}function zi(e,t,r,i){var a=r.length,o=a,s=!i;if(e==null)return!o;for(e=Ye(e);a--;){var c=r[a];if(s&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){c=r[a];var l=c[0],u=e[l],d=c[1];if(s&&c[2]){if(u===n&&!(l in e))return!1}else{var f=new Vr;if(i)var p=i(u,d,l,e,t,f);if(!(p===n?Ii(d,u,3,i,f):p))return!1}}return!0}function Bi(e){return!du(e)||$o(e)?!1:(cu(e)?lt:Be).test(bs(e))}function Vi(e){return fu(e)&&Ti(e)==R}function Hi(e){return fu(e)&&zo(e)==z}function Ui(e){return fu(e)&&uu(e.length)&&!!Ft[Ti(e)]}function Wi(e){return typeof e==`function`?e:e==null?vf:typeof e==`object`?J(e)?Xi(e[0],e[1]):Yi(e):jf(e)}function Gi(e){if(!ts(e))return jt(e);var t=[];for(var n in Ye(e))U.call(e,n)&&n!=`constructor`&&t.push(n);return t}function Ki(e){if(!du(e))return os(e);var t=ts(e),n=[];for(var r in e)r==`constructor`&&(t||!U.call(e,r))||n.push(r);return n}function qi(e,t){return e<t}function Ji(e,t){var n=-1,r=Zl(e)?Ae(e.length):[];return di(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Yi(e){var t=Po(e);return t.length==1&&t[0][2]?rs(t[0][0],t[0][1]):function(n){return n===e||zi(n,e,t)}}function Xi(e,t){return Xo(e)&&ns(t)?rs(ys(e),t):function(r){var i=rd(r,e);return i===n&&i===t?ad(r,e):Ii(t,i,3)}}function Zi(e,t,r,i,a){e!==t&&vi(t,function(o,s){if(a||=new Vr,du(o))Qi(e,t,s,r,Zi,i,a);else{var c=i?i(ds(e,s),o,s+``,e,t,a):n;c===n&&(c=o),Zr(e,s,c)}},ud)}function Qi(e,t,r,i,a,o,s){var c=ds(e,r),l=ds(t,r),u=s.get(l);if(u){Zr(e,r,u);return}var d=o?o(c,l,r+``,e,t,s):n,f=d===n;if(f){var p=J(l),m=!p&&eu(l),h=!p&&!m&&Du(l);d=l,p||m||h?J(c)?d=c:Ql(c)?d=Ka(c):m?(f=!1,d=Ia(l,!0)):h?(f=!1,d=Va(l,!0)):d=[]:xu(l)||Yl(l)?(d=c,Yl(c)?d=Ru(c):(!du(c)||cu(c))&&(d=Wo(l))):f=!1}f&&(s.set(l,d),a(d,l,i,o,s),s.delete(l)),Zr(e,r,d)}function $i(e,t){var r=e.length;if(r)return t+=t<0?r:0,Jo(t,r)?e[t]:n}function ea(e,t,n){t=t.length?fn(t,function(e){return J(e)?function(t){return Ci(t,e.length===1?e[0]:e)}:e}):[vf];var r=-1;return t=fn(t,Pn(q())),kn(Ji(e,function(e,n,i){return{criteria:fn(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return Ua(e,t,n)})}function ta(e,t){return na(e,t,function(t,n){return ad(e,n)})}function na(e,t,n){for(var r=-1,i=t.length,a={};++r<i;){var o=t[r],s=Ci(e,o);n(s,o)&&fa(a,Ma(o,e),s)}return a}function ra(e){return function(t){return Ci(t,e)}}function ia(e,t,n,r){var i=r?Cn:Sn,a=-1,o=t.length,s=e;for(e===t&&(t=Ka(t)),n&&(s=fn(e,Pn(n)));++a<o;)for(var c=0,l=t[a],u=n?n(l):l;(c=i(s,u,c,r))>-1;)s!==e&&gt.call(s,c,1),gt.call(e,c,1);return e}function aa(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==a){var a=i;Jo(i)?gt.call(e,i,1):wa(e,i)}}return e}function oa(e,t){return e+wt(Bt()*(t-e+1))}function sa(e,t,n,r){for(var i=-1,a=Mt(Ct((t-e)/(n||1)),0),o=Ae(a);a--;)o[r?a:++i]=e,e+=n;return o}function ca(e,t){var n=``;if(!e||t<1||t>g)return n;do t%2&&(n+=e),t=wt(t/2),t&&(e+=e);while(t);return n}function la(e,t){return ms(cs(e,t,vf),e+``)}function ua(e){return Jr(Od(e))}function da(e,t){var n=Od(e);return _s(n,ai(t,0,n.length))}function fa(e,t,r,i){if(!du(e))return e;t=Ma(t,e);for(var a=-1,o=t.length,s=o-1,c=e;c!=null&&++a<o;){var l=ys(t[a]),u=r;if(l===`__proto__`||l===`constructor`||l===`prototype`)return e;if(a!=s){var d=c[l];u=i?i(d,l,c):n,u===n&&(u=du(d)?d:Jo(t[a+1])?[]:{})}Qr(c,l,u),c=c[l]}return e}var pa=vn?function(e,t){return vn.set(e,t),e}:vf,ma=bt?function(e,t){return bt(e,`toString`,{configurable:!0,enumerable:!1,value:mf(t),writable:!0})}:vf;function ha(e){return _s(Od(e))}function ga(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Ae(i);++r<i;)a[r]=e[r+t];return a}function _a(e,t){var n;return di(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function va(e,t,n){var r=0,i=e==null?r:e.length;if(typeof t==`number`&&t===t&&i<=x){for(;r<i;){var a=r+i>>>1,o=e[a];o!==null&&!Eu(o)&&(n?o<=t:o<t)?r=a+1:i=a}return i}return ya(e,t,vf,n)}function ya(e,t,r,i){var a=0,o=e==null?0:e.length;if(o===0)return 0;t=r(t);for(var s=t!==t,c=t===null,l=Eu(t),u=t===n;a<o;){var d=wt((a+o)/2),f=r(e[d]),p=f!==n,m=f===null,h=f===f,g=Eu(f);if(s)var _=i||h;else _=u?h&&(i||p):c?h&&p&&(i||!m):l?h&&p&&!m&&(i||!g):m||g?!1:i?f<=t:f<t;_?a=d+1:o=d}return Lt(o,b)}function ba(e,t){for(var n=-1,r=e.length,i=0,a=[];++n<r;){var o=e[n],s=t?t(o):o;if(!n||!Kl(s,c)){var c=s;a[i++]=o===0?0:o}}return a}function xa(e){return typeof e==`number`?e:Eu(e)?v:+e}function Sa(e){if(typeof e==`string`)return e;if(J(e))return fn(e,Sa)+``;if(Eu(e))return fr?fr.call(e):``;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function Ca(e,t,n){var r=-1,i=un,a=e.length,o=!0,s=[],c=s;if(n)o=!1,i=dn;else if(a>=200){var l=t?null:vo(e);if(l)return Xn(l);o=!1,i=In,c=new Rr}else c=t?[]:s;outer:for(;++r<a;){var u=e[r],d=t?t(u):u;if(u=n||u!==0?u:0,o&&d===d){for(var f=c.length;f--;)if(c[f]===d)continue outer;t&&c.push(d),s.push(u)}else i(c,d,n)||(c!==s&&c.push(d),s.push(u))}return s}function wa(e,t){t=Ma(t,e);var n=-1,r=t.length;if(!r)return!0;for(;++n<r;){var i=ys(t[n]);if(i===`__proto__`&&!U.call(e,`__proto__`)||(i===`constructor`||i===`prototype`)&&n<r-1)return!1}var a=ls(e,t);return a==null||delete a[ys(qs(t))]}function Ta(e,t,n,r){return fa(e,t,n(Ci(e,t)),r)}function Ea(e,t,n,r){for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?ga(e,r?0:a,r?a+1:i):ga(e,r?a+1:0,r?i:a)}function Da(e,t){var n=e;return n instanceof gr&&(n=n.value()),mn(t,function(e,t){return t.func.apply(t.thisArg,pn([e],t.args))},n)}function Oa(e,t,n){var r=e.length;if(r<2)return r?Ca(e[0]):[];for(var i=-1,a=Ae(r);++i<r;)for(var o=e[i],s=-1;++s<r;)s!=i&&(a[i]=ui(a[i]||o,e[s],t,n));return Ca(_i(a,1),t,n)}function ka(e,t,r){for(var i=-1,a=e.length,o=t.length,s={};++i<a;){var c=i<o?t[i]:n;r(s,e[i],c)}return s}function Aa(e){return Ql(e)?e:[]}function ja(e){return typeof e==`function`?e:vf}function Ma(e,t){return J(e)?e:Xo(e,t)?[e]:vs(Bu(e))}var Na=la;function Pa(e,t,r){var i=e.length;return r=r===n?i:r,!t&&r>=i?e:ga(e,t,r)}var Fa=xt||function(e){return Gt.clearTimeout(e)};function Ia(e,t){if(t)return e.slice();var n=e.length,r=W?W(n):new e.constructor(n);return e.copy(r),r}function La(e){var t=new e.constructor(e.byteLength);return new ft(t).set(new ft(e)),t}function Ra(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function za(e){var t=new e.constructor(e.source,Le.exec(e));return t.lastIndex=e.lastIndex,t}function Ba(e){return dr?Ye(dr.call(e)):{}}function Va(e,t){var n=t?La(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Ha(e,t){if(e!==t){var r=e!==n,i=e===null,a=e===e,o=Eu(e),s=t!==n,c=t===null,l=t===t,u=Eu(t);if(!c&&!u&&!o&&e>t||o&&s&&l&&!c&&!u||i&&s&&l||!r&&l||!a)return 1;if(!i&&!o&&!u&&e<t||u&&r&&a&&!i&&!o||c&&r&&a||!s&&a||!l)return-1}return 0}function Ua(e,t,n){for(var r=-1,i=e.criteria,a=t.criteria,o=i.length,s=n.length;++r<o;){var c=Ha(i[r],a[r]);if(c)return r>=s?c:c*(n[r]==`desc`?-1:1)}return e.index-t.index}function Wa(e,t,n,r){for(var i=-1,a=e.length,o=n.length,s=-1,c=t.length,l=Mt(a-o,0),u=Ae(c+l),d=!r;++s<c;)u[s]=t[s];for(;++i<o;)(d||i<a)&&(u[n[i]]=e[i]);for(;l--;)u[s++]=e[i++];return u}function Ga(e,t,n,r){for(var i=-1,a=e.length,o=-1,s=n.length,c=-1,l=t.length,u=Mt(a-s,0),d=Ae(u+l),f=!r;++i<u;)d[i]=e[i];for(var p=i;++c<l;)d[p+c]=t[c];for(;++o<s;)(f||i<a)&&(d[p+n[o]]=e[i++]);return d}function Ka(e,t){var n=-1,r=e.length;for(t||=Ae(r);++n<r;)t[n]=e[n];return t}function qa(e,t,r,i){var a=!r;r||={};for(var o=-1,s=t.length;++o<s;){var c=t[o],l=i?i(r[c],e[c],c,r,e):n;l===n&&(l=e[c]),a?ri(r,c,l):Qr(r,c,l)}return r}function Ja(e,t){return qa(e,Lo(e),t)}function Ya(e,t){return qa(e,Ro(e),t)}function Xa(e,t){return function(n,r){var i=J(n)?an:ei,a=t?t():{};return i(n,e,q(r,2),a)}}function Za(e){return la(function(t,r){var i=-1,a=r.length,o=a>1?r[a-1]:n,s=a>2?r[2]:n;for(o=e.length>3&&typeof o==`function`?(a--,o):n,s&&Yo(r[0],r[1],s)&&(o=a<3?n:o,a=1),t=Ye(t);++i<a;){var c=r[i];c&&e(t,c,i,o)}return t})}function Qa(e,t){return function(n,r){if(n==null)return n;if(!Zl(n))return e(n,r);for(var i=n.length,a=t?i:-1,o=Ye(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function $a(e){return function(t,n,r){for(var i=-1,a=Ye(t),o=r(t),s=o.length;s--;){var c=o[e?s:++i];if(n(a[c],c,a)===!1)break}return t}}function eo(e,t,n){var r=t&o,i=ro(e);function a(){return(this&&this!==Gt&&this instanceof a?i:e).apply(r?n:this,arguments)}return a}function to(e){return function(t){t=Bu(t);var r=Wn(t)?tr(t):n,i=r?r[0]:t.charAt(0),a=r?Pa(r,1).join(``):t.slice(1);return i[e]()+a}}function no(e){return function(t){return mn(lf(Fd(t).replace(Dt,``)),e,``)}}function ro(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=pr(e.prototype),r=e.apply(n,t);return du(r)?r:n}}function io(e,t,r){var i=ro(e);function a(){for(var o=arguments.length,s=Ae(o),c=o,l=Mo(a);c--;)s[c]=arguments[c];var u=o<3&&s[0]!==l&&s[o-1]!==l?[]:Yn(s,l);return o-=u.length,o<r?go(e,t,so,a.placeholder,n,s,u,n,n,r-o):rn(this&&this!==Gt&&this instanceof a?i:e,this,s)}return a}function ao(e){return function(t,r,i){var a=Ye(t);if(!Zl(t)){var o=q(r,3);t=ld(t),r=function(e){return o(a[e],e,a)}}var s=e(t,r,i);return s>-1?a[o?t[s]:s]:n}}function oo(e){return Do(function(t){var i=t.length,a=i,o=hr.prototype.thru;for(e&&t.reverse();a--;){var s=t[a];if(typeof s!=`function`)throw new Qe(r);if(o&&!l&&jo(s)==`wrapper`)var l=new hr([],!0)}for(a=l?a:i;++a<i;){s=t[a];var d=jo(s),m=d==`wrapper`?Ao(s):n;l=m&&Qo(m[0])&&m[1]==(f|c|u|p)&&!m[4].length&&m[9]==1?l[jo(m[0])].apply(l,m[3]):s.length==1&&Qo(s)?l[d]():l.thru(s)}return function(){var e=arguments,n=e[0];if(l&&e.length==1&&J(n))return l.plant(n).value();for(var r=0,a=i?t[r].apply(this,e):n;++r<i;)a=t[r].call(this,a);return a}})}function so(e,t,r,i,a,u,d,p,h,g){var _=t&f,v=t&o,y=t&s,b=t&(c|l),x=t&m,S=y?n:ro(e);function C(){for(var n=arguments.length,o=Ae(n),s=n;s--;)o[s]=arguments[s];if(b)var c=Mo(C),l=zn(o,c);if(i&&(o=Wa(o,i,a,b)),u&&(o=Ga(o,u,d,b)),n-=l,b&&n<g){var f=Yn(o,c);return go(e,t,so,C.placeholder,r,o,f,p,h,g-n)}var m=v?r:this,w=y?m[e]:e;return n=o.length,p?o=us(o,p):x&&n>1&&o.reverse(),_&&h<n&&(o.length=h),this&&this!==Gt&&this instanceof C&&(w=S||ro(w)),w.apply(m,o)}return C}function co(e,t){return function(n,r){return ji(n,e,t(r),{})}}function lo(e,t){return function(r,i){var a;if(r===n&&i===n)return t;if(r!==n&&(a=r),i!==n){if(a===n)return i;typeof r==`string`||typeof i==`string`?(r=Sa(r),i=Sa(i)):(r=xa(r),i=xa(i)),a=e(r,i)}return a}}function uo(e){return Do(function(t){return t=fn(t,Pn(q())),la(function(n){var r=this;return e(t,function(e){return rn(e,r,n)})})})}function fo(e,t){t=t===n?` `:Sa(t);var r=t.length;if(r<2)return r?ca(t,e):t;var i=ca(t,Ct(e/er(t)));return Wn(t)?Pa(tr(i),0,e).join(``):i.slice(0,e)}function po(e,t,n,r){var i=t&o,a=ro(e);function s(){for(var t=-1,o=arguments.length,c=-1,l=r.length,u=Ae(l+o),d=this&&this!==Gt&&this instanceof s?a:e;++c<l;)u[c]=r[c];for(;o--;)u[c++]=arguments[++t];return rn(d,i?n:this,u)}return s}function mo(e){return function(t,r,i){return i&&typeof i!=`number`&&Yo(t,r,i)&&(r=i=n),t=Pu(t),r===n?(r=t,t=0):r=Pu(r),i=i===n?t<r?1:-1:Pu(i),sa(t,r,i,e)}}function ho(e){return function(t,n){return(typeof t!=`string`||typeof n!=`string`)&&(t=Lu(t),n=Lu(n)),e(t,n)}}function go(e,t,r,i,a,l,f,p,m,h){var g=t&c,_=g?f:n,v=g?n:f,y=g?l:n,b=g?n:l;t|=g?u:d,t&=~(g?d:u),t&4||(t&=~(o|s));var x=[e,t,a,y,_,b,v,p,m,h],S=r.apply(n,x);return Qo(e)&&fs(S,x),S.placeholder=i,hs(S,e,t)}function _o(e){var t=Je[e];return function(e,n){if(e=Lu(e),n=n==null?0:Lt(Fu(n),292),n&&kt(e)){var r=(Bu(e)+`e`).split(`e`);return r=(Bu(t(r[0]+`e`+(+r[1]+n)))+`e`).split(`e`),+(r[0]+`e`+(+r[1]-n))}return t(e)}}var vo=Yt&&1/Xn(new Yt([,-0]))[1]==h?function(e){return new Yt(e)}:Ef;function yo(e){return function(t){var n=zo(t);return n==M?qn(t):n==z?Zn(t):Mn(t,e(t))}}function bo(e,t,i,a,f,p,m,h){var g=t&s;if(!g&&typeof e!=`function`)throw new Qe(r);var _=a?a.length:0;if(_||(t&=~(u|d),a=f=n),m=m===n?m:Mt(Fu(m),0),h=h===n?h:Fu(h),_-=f?f.length:0,t&d){var v=a,y=f;a=f=n}var b=g?n:Ao(e),x=[e,t,i,a,f,v,y,p,m,h];if(b&&as(x,b),e=x[0],t=x[1],i=x[2],a=x[3],f=x[4],h=x[9]=x[9]===n?g?0:e.length:Mt(x[9]-_,0),!h&&t&(c|l)&&(t&=~(c|l)),!t||t==o)var S=eo(e,t,i);else S=t==c||t==l?io(e,t,h):(t==u||t==(o|u))&&!f.length?po(e,t,i,a):so.apply(n,x);return hs((b?pa:fs)(S,x),e,t)}function xo(e,t,r,i){return e===n||Kl(e,tt[r])&&!U.call(i,r)?t:e}function So(e,t,r,i,a,o){return du(e)&&du(t)&&(o.set(t,e),Zi(e,t,n,So,o),o.delete(t)),e}function Co(e){return xu(e)?n:e}function wo(e,t,r,i,a,o){var s=r&1,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,m=r&2?new Rr:n;for(o.set(e,t),o.set(t,e);++f<c;){var h=e[f],g=t[f];if(i)var _=s?i(g,h,f,t,e,o):i(h,g,f,e,t,o);if(_!==n){if(_)continue;p=!1;break}if(m){if(!gn(t,function(e,t){if(!In(m,t)&&(h===e||a(h,e,r,i,o)))return m.push(t)})){p=!1;break}}else if(!(h===g||a(h,g,r,i,o))){p=!1;break}}return o.delete(e),o.delete(t),p}function To(e,t,n,r,i,a,o){switch(n){case ie:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case re:return!(e.byteLength!=t.byteLength||!a(new ft(e),new ft(t)));case E:case D:case N:return Kl(+e,+t);case k:return e.name==t.name&&e.message==t.message;case R:case B:return e==t+``;case M:var s=qn;case z:var c=r&1;if(s||=Xn,e.size!=t.size&&!c)return!1;var l=o.get(e);if(l)return l==t;r|=2,o.set(e,t);var u=wo(s(e),s(t),r,i,a,o);return o.delete(e),u;case ee:if(dr)return dr.call(e)==dr.call(t)}return!1}function Eo(e,t,r,i,a,o){var s=r&1,c=Oo(e),l=c.length;if(l!=Oo(t).length&&!s)return!1;for(var u=l;u--;){var d=c[u];if(!(s?d in t:U.call(t,d)))return!1}var f=o.get(e),p=o.get(t);if(f&&p)return f==t&&p==e;var m=!0;o.set(e,t),o.set(t,e);for(var h=s;++u<l;){d=c[u];var g=e[d],_=t[d];if(i)var v=s?i(_,g,d,t,e,o):i(g,_,d,e,t,o);if(!(v===n?g===_||a(g,_,r,i,o):v)){m=!1;break}h||=d==`constructor`}if(m&&!h){var y=e.constructor,b=t.constructor;y!=b&&`constructor`in e&&`constructor`in t&&!(typeof y==`function`&&y instanceof y&&typeof b==`function`&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}function Do(e){return ms(cs(e,n,Is),e+``)}function Oo(e){return wi(e,ld,Lo)}function ko(e){return wi(e,ud,Ro)}var Ao=vn?function(e){return vn.get(e)}:Ef;function jo(e){for(var t=e.name+``,n=Dn[t],r=U.call(Dn,t)?n.length:0;r--;){var i=n[r],a=i.func;if(a==null||a==e)return i.name}return t}function Mo(e){return(U.call(K,`placeholder`)?K:e).placeholder}function q(){var e=K.iteratee||yf;return e=e===yf?Wi:e,arguments.length?e(arguments[0],arguments[1]):e}function No(e,t){var n=e.__data__;return Zo(t)?n[typeof t==`string`?`string`:`hash`]:n.map}function Po(e){for(var t=ld(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,ns(i)]}return t}function Fo(e,t){var r=Un(e,t);return Bi(r)?r:n}function Io(e){var t=U.call(e,yt),r=e[yt];try{e[yt]=n;var i=!0}catch{}var a=ot.call(e);return i&&(t?e[yt]=r:delete e[yt]),a}var Lo=Tt?function(e){return e==null?[]:(e=Ye(e),ln(Tt(e),function(t){return ht.call(e,t)}))}:Ff,Ro=Tt?function(e){for(var t=[];e;)pn(t,Lo(e)),e=pt(e);return t}:Ff,zo=Ti;(Wt&&zo(new Wt(new ArrayBuffer(1)))!=ie||Kt&&zo(new Kt)!=M||qt&&zo(qt.resolve())!=I||Yt&&zo(new Yt)!=z||Xt&&zo(new Xt)!=V)&&(zo=function(e){var t=Ti(e),r=t==F?e.constructor:n,i=r?bs(r):``;if(i)switch(i){case Qn:return ie;case ir:return M;case ar:return I;case cr:return z;case lr:return V}return t});function Bo(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case`drop`:e+=o;break;case`dropRight`:t-=o;break;case`take`:t=Lt(t,e+o);break;case`takeRight`:e=Mt(e,t-o)}}return{start:e,end:t}}function Vo(e){var t=e.match(je);return t?t[1].split(Me):[]}function Ho(e,t,n){t=Ma(t,e);for(var r=-1,i=t.length,a=!1;++r<i;){var o=ys(t[r]);if(!(a=e!=null&&n(e,o)))break;e=e[o]}return a||++r!=i?a:(i=e==null?0:e.length,!!i&&uu(i)&&Jo(o,i)&&(J(e)||Yl(e)))}function Uo(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]==`string`&&U.call(e,`index`)&&(n.index=e.index,n.input=e.input),n}function Wo(e){return typeof e.constructor==`function`&&!ts(e)?pr(pt(e)):{}}function Go(e,t,n){var r=e.constructor;switch(t){case re:return La(e);case E:case D:return new r(+e);case ie:return Ra(e,n);case ae:case oe:case se:case ce:case le:case ue:case de:case fe:case pe:return Va(e,n);case M:return new r;case N:case B:return new r(e);case R:return za(e);case z:return new r;case ee:return Ba(e)}}function Ko(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?`& `:``)+t[r],t=t.join(n>2?`, `:` `),e.replace(H,`{
/* [wrapped with `+t+`] */
`)}function qo(e){return J(e)||Yl(e)||!!(_t&&e&&e[_t])}function Jo(e,t){var n=typeof e;return t??=g,!!t&&(n==`number`||n!=`symbol`&&He.test(e))&&e>-1&&e%1==0&&e<t}function Yo(e,t,n){if(!du(n))return!1;var r=typeof t;return(r==`number`?Zl(n)&&Jo(t,n.length):r==`string`&&t in n)?Kl(n[t],e):!1}function Xo(e,t){if(J(e))return!1;var n=typeof e;return n==`number`||n==`symbol`||n==`boolean`||e==null||Eu(e)?!0:Te.test(e)||!we.test(e)||t!=null&&e in Ye(t)}function Zo(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}function Qo(e){var t=jo(e),n=K[t];if(typeof n!=`function`||!(t in gr.prototype))return!1;if(e===n)return!0;var r=Ao(n);return!!r&&e===r[0]}function $o(e){return!!at&&at in e}var es=nt?cu:If;function ts(e){var t=e&&e.constructor;return e===(typeof t==`function`&&t.prototype||tt)}function ns(e){return e===e&&!du(e)}function rs(e,t){return function(r){return r!=null&&r[e]===t&&(t!==n||e in Ye(r))}}function is(e){var t=Ol(e,function(e){return n.size===500&&n.clear(),e}),n=t.cache;return t}function as(e,t){var n=e[1],r=t[1],i=n|r,l=i<(o|s|f),u=r==f&&n==c||r==f&&n==p&&e[7].length<=t[8]||r==(f|p)&&t[7].length<=t[8]&&n==c;if(!(l||u))return e;r&o&&(e[2]=t[2],i|=n&o?0:4);var d=t[3];if(d){var m=e[3];e[3]=m?Wa(m,d,t[4]):d,e[4]=m?Yn(e[3],a):t[4]}return d=t[5],d&&(m=e[5],e[5]=m?Ga(m,d,t[6]):d,e[6]=m?Yn(e[5],a):t[6]),d=t[7],d&&(e[7]=d),r&f&&(e[8]=e[8]==null?t[8]:Lt(e[8],t[8])),e[9]??=t[9],e[0]=t[0],e[1]=i,e}function os(e){var t=[];if(e!=null)for(var n in Ye(e))t.push(n);return t}function ss(e){return ot.call(e)}function cs(e,t,r){return t=Mt(t===n?e.length-1:t,0),function(){for(var n=arguments,i=-1,a=Mt(n.length-t,0),o=Ae(a);++i<a;)o[i]=n[t+i];i=-1;for(var s=Ae(t+1);++i<t;)s[i]=n[i];return s[t]=r(o),rn(e,this,s)}}function ls(e,t){return t.length<2?e:Ci(e,ga(t,0,-1))}function us(e,t){for(var r=e.length,i=Lt(t.length,r),a=Ka(e);i--;){var o=t[i];e[i]=Jo(o,r)?a[o]:n}return e}function ds(e,t){if((t!==`constructor`||typeof e[t]!=`function`)&&t!=`__proto__`)return e[t]}var fs=gs(pa),ps=G||function(e,t){return Gt.setTimeout(e,t)},ms=gs(ma);function hs(e,t,n){var r=t+``;return ms(e,Ko(r,xs(Vo(r),n)))}function gs(e){var t=0,r=0;return function(){var i=Rt(),a=16-(i-r);if(r=i,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(n,arguments)}}function _s(e,t){var r=-1,i=e.length,a=i-1;for(t=t===n?i:t;++r<t;){var o=oa(r,a),s=e[o];e[o]=e[r],e[r]=s}return e.length=t,e}var vs=is(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(Ee,function(e,n,r,i){t.push(r?i.replace(Fe,`$1`):n||e)}),t});function ys(e){if(typeof e==`string`||Eu(e))return e;var t=e+``;return t==`0`&&1/e==-1/0?`-0`:t}function bs(e){if(e!=null){try{return rt.call(e)}catch{}try{return e+``}catch{}}return``}function xs(e,t){return on(S,function(n){var r=`_.`+n[0];t&n[1]&&!un(e,r)&&e.push(r)}),e.sort()}function Ss(e){if(e instanceof gr)return e.clone();var t=new hr(e.__wrapped__,e.__chain__);return t.__actions__=Ka(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function Cs(e,t,r){t=(r?Yo(e,t,r):t===n)?1:Mt(Fu(t),0);var i=e==null?0:e.length;if(!i||t<1)return[];for(var a=0,o=0,s=Ae(Ct(i/t));a<i;)s[o++]=ga(e,a,a+=t);return s}function ws(e){for(var t=-1,n=e==null?0:e.length,r=0,i=[];++t<n;){var a=e[t];a&&(i[r++]=a)}return i}function Ts(){var e=arguments.length;if(!e)return[];for(var t=Ae(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return pn(J(n)?Ka(n):[n],_i(t,1))}var Es=la(function(e,t){return Ql(e)?ui(e,_i(t,1,Ql,!0)):[]}),Ds=la(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?ui(e,_i(t,1,Ql,!0),q(r,2)):[]}),Os=la(function(e,t){var r=qs(t);return Ql(r)&&(r=n),Ql(e)?ui(e,_i(t,1,Ql,!0),n,r):[]});function ks(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),ga(e,t<0?0:t,i)):[]}function As(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,0,t<0?0:t)):[]}function js(e,t){return e&&e.length?Ea(e,q(t,3),!0,!0):[]}function Ms(e,t){return e&&e.length?Ea(e,q(t,3),!0):[]}function Ns(e,t,n,r){var i=e==null?0:e.length;return i?(n&&typeof n!=`number`&&Yo(e,t,n)&&(n=0,r=i),hi(e,t,n,r)):[]}function Ps(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Mt(r+i,0)),xn(e,q(t,3),i)}function Fs(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i-1;return r!==n&&(a=Fu(r),a=r<0?Mt(i+a,0):Lt(a,i-1)),xn(e,q(t,3),a,!0)}function Is(e){return e!=null&&e.length?_i(e,1):[]}function Ls(e){return e!=null&&e.length?_i(e,h):[]}function Rs(e,t){return e!=null&&e.length?(t=t===n?1:Fu(t),_i(e,t)):[]}function zs(e){for(var t=-1,n=e==null?0:e.length,r={};++t<n;){var i=e[t];ri(r,i[0],i[1])}return r}function Bs(e){return e&&e.length?e[0]:n}function Vs(e,t,n){var r=e==null?0:e.length;if(!r)return-1;var i=n==null?0:Fu(n);return i<0&&(i=Mt(r+i,0)),Sn(e,t,i)}function Hs(e){return e!=null&&e.length?ga(e,0,-1):[]}var Us=la(function(e){var t=fn(e,Aa);return t.length&&t[0]===e[0]?Ai(t):[]}),Ws=la(function(e){var t=qs(e),r=fn(e,Aa);return t===qs(r)?t=n:r.pop(),r.length&&r[0]===e[0]?Ai(r,q(t,2)):[]}),Gs=la(function(e){var t=qs(e),r=fn(e,Aa);return t=typeof t==`function`?t:n,t&&r.pop(),r.length&&r[0]===e[0]?Ai(r,n,t):[]});function Ks(e,t){return e==null?``:At.call(e,t)}function qs(e){var t=e==null?0:e.length;return t?e[t-1]:n}function Js(e,t,r){var i=e==null?0:e.length;if(!i)return-1;var a=i;return r!==n&&(a=Fu(r),a=a<0?Mt(i+a,0):Lt(a,i-1)),t===t?$n(e,t,a):xn(e,wn,a,!0)}function Ys(e,t){return e&&e.length?$i(e,Fu(t)):n}var Xs=la(Zs);function Zs(e,t){return e&&e.length&&t&&t.length?ia(e,t):e}function Qs(e,t,n){return e&&e.length&&t&&t.length?ia(e,t,q(n,2)):e}function $s(e,t,r){return e&&e.length&&t&&t.length?ia(e,t,n,r):e}var ec=Do(function(e,t){var n=e==null?0:e.length,r=ii(e,t);return aa(e,fn(t,function(e){return Jo(e,n)?+e:e}).sort(Ha)),r});function tc(e,t){var n=[];if(!(e&&e.length))return n;var r=-1,i=[],a=e.length;for(t=q(t,3);++r<a;){var o=e[r];t(o,r,e)&&(n.push(o),i.push(r))}return aa(e,i),n}function nc(e){return e==null?e:Ut.call(e)}function rc(e,t,r){var i=e==null?0:e.length;return i?(r&&typeof r!=`number`&&Yo(e,t,r)?(t=0,r=i):(t=t==null?0:Fu(t),r=r===n?i:Fu(r)),ga(e,t,r)):[]}function ic(e,t){return va(e,t)}function ac(e,t,n){return ya(e,t,q(n,2))}function oc(e,t){var n=e==null?0:e.length;if(n){var r=va(e,t);if(r<n&&Kl(e[r],t))return r}return-1}function sc(e,t){return va(e,t,!0)}function cc(e,t,n){return ya(e,t,q(n,2),!0)}function lc(e,t){if(e!=null&&e.length){var n=va(e,t,!0)-1;if(Kl(e[n],t))return n}return-1}function uc(e){return e&&e.length?ba(e):[]}function dc(e,t){return e&&e.length?ba(e,q(t,2)):[]}function fc(e){var t=e==null?0:e.length;return t?ga(e,1,t):[]}function pc(e,t,r){return e&&e.length?(t=r||t===n?1:Fu(t),ga(e,0,t<0?0:t)):[]}function mc(e,t,r){var i=e==null?0:e.length;return i?(t=r||t===n?1:Fu(t),t=i-t,ga(e,t<0?0:t,i)):[]}function hc(e,t){return e&&e.length?Ea(e,q(t,3),!1,!0):[]}function gc(e,t){return e&&e.length?Ea(e,q(t,3)):[]}var _c=la(function(e){return Ca(_i(e,1,Ql,!0))}),vc=la(function(e){var t=qs(e);return Ql(t)&&(t=n),Ca(_i(e,1,Ql,!0),q(t,2))}),yc=la(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Ca(_i(e,1,Ql,!0),n,t)});function bc(e){return e&&e.length?Ca(e):[]}function xc(e,t){return e&&e.length?Ca(e,q(t,2)):[]}function Sc(e,t){return t=typeof t==`function`?t:n,e&&e.length?Ca(e,n,t):[]}function Cc(e){if(!(e&&e.length))return[];var t=0;return e=ln(e,function(e){if(Ql(e))return t=Mt(e.length,t),!0}),jn(t,function(t){return fn(e,En(t))})}function wc(e,t){if(!(e&&e.length))return[];var r=Cc(e);return t==null?r:fn(r,function(e){return rn(t,n,e)})}var Tc=la(function(e,t){return Ql(e)?ui(e,t):[]}),Ec=la(function(e){return Oa(ln(e,Ql))}),Dc=la(function(e){var t=qs(e);return Ql(t)&&(t=n),Oa(ln(e,Ql),q(t,2))}),Oc=la(function(e){var t=qs(e);return t=typeof t==`function`?t:n,Oa(ln(e,Ql),n,t)}),kc=la(Cc);function Ac(e,t){return ka(e||[],t||[],Qr)}function jc(e,t){return ka(e||[],t||[],fa)}var Mc=la(function(e){var t=e.length,r=t>1?e[t-1]:n;return r=typeof r==`function`?(e.pop(),r):n,wc(e,r)});function Nc(e){var t=K(e);return t.__chain__=!0,t}function Pc(e,t){return t(e),e}function Fc(e,t){return t(e)}var Ic=Do(function(e){var t=e.length,r=t?e[0]:0,i=this.__wrapped__,a=function(t){return ii(t,e)};return t>1||this.__actions__.length||!(i instanceof gr)||!Jo(r)?this.thru(a):(i=i.slice(r,+r+ +!!t),i.__actions__.push({func:Fc,args:[a],thisArg:n}),new hr(i,this.__chain__).thru(function(e){return t&&!e.length&&e.push(n),e}))});function Lc(){return Nc(this)}function Rc(){return new hr(this.value(),this.__chain__)}function zc(){this.__values__===n&&(this.__values__=Nu(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?n:this.__values__[this.__index__++]}}function Bc(){return this}function Vc(e){for(var t,r=this;r instanceof mr;){var i=Ss(r);i.__index__=0,i.__values__=n,t?a.__wrapped__=i:t=i;var a=i;r=r.__wrapped__}return a.__wrapped__=e,t}function Hc(){var e=this.__wrapped__;if(e instanceof gr){var t=e;return this.__actions__.length&&(t=new gr(this)),t=t.reverse(),t.__actions__.push({func:Fc,args:[nc],thisArg:n}),new hr(t,this.__chain__)}return this.thru(nc)}function Uc(){return Da(this.__wrapped__,this.__actions__)}var Wc=Xa(function(e,t,n){U.call(e,n)?++e[n]:ri(e,n,1)});function Gc(e,t,r){var i=J(e)?cn:pi;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}function Kc(e,t){return(J(e)?ln:gi)(e,q(t,3))}var qc=ao(Ps),Jc=ao(Fs);function Yc(e,t){return _i(il(e,t),1)}function Xc(e,t){return _i(il(e,t),h)}function Zc(e,t,r){return r=r===n?1:Fu(r),_i(il(e,t),r)}function Qc(e,t){return(J(e)?on:di)(e,q(t,3))}function $c(e,t){return(J(e)?sn:fi)(e,q(t,3))}var el=Xa(function(e,t,n){U.call(e,n)?e[n].push(t):ri(e,n,[t])});function tl(e,t,n,r){e=Zl(e)?e:Od(e),n=n&&!r?Fu(n):0;var i=e.length;return n<0&&(n=Mt(i+n,0)),Tu(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Sn(e,t,n)>-1}var nl=la(function(e,t,n){var r=-1,i=typeof t==`function`,a=Zl(e)?Ae(e.length):[];return di(e,function(e){a[++r]=i?rn(t,e,n):Mi(e,t,n)}),a}),rl=Xa(function(e,t,n){ri(e,n,t)});function il(e,t){return(J(e)?fn:Ji)(e,q(t,3))}function al(e,t,r,i){return e==null?[]:(J(t)||(t=t==null?[]:[t]),r=i?n:r,J(r)||(r=r==null?[]:[r]),ea(e,t,r))}var ol=Xa(function(e,t,n){e[+!n].push(t)},function(){return[[],[]]});function sl(e,t,n){var r=J(e)?mn:On,i=arguments.length<3;return r(e,q(t,4),n,i,di)}function cl(e,t,n){var r=J(e)?hn:On,i=arguments.length<3;return r(e,q(t,4),n,i,fi)}function ll(e,t){return(J(e)?ln:gi)(e,kl(q(t,3)))}function ul(e){return(J(e)?Jr:ua)(e)}function dl(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),(J(e)?Yr:da)(e,t)}function fl(e){return(J(e)?Xr:ha)(e)}function pl(e){if(e==null)return 0;if(Zl(e))return Tu(e)?er(e):e.length;var t=zo(e);return t==M||t==z?e.size:Gi(e).length}function ml(e,t,r){var i=J(e)?gn:_a;return r&&Yo(e,t,r)&&(t=n),i(e,q(t,3))}var hl=la(function(e,t){if(e==null)return[];var n=t.length;return n>1&&Yo(e,t[0],t[1])?t=[]:n>2&&Yo(t[0],t[1],t[2])&&(t=[t[0]]),ea(e,_i(t,1),[])}),gl=St||function(){return Gt.Date.now()};function _l(e,t){if(typeof t!=`function`)throw new Qe(r);return e=Fu(e),function(){if(--e<1)return t.apply(this,arguments)}}function vl(e,t,r){return t=r?n:t,t=e&&t==null?e.length:t,bo(e,f,n,n,n,n,t)}function yl(e,t){var i;if(typeof t!=`function`)throw new Qe(r);return e=Fu(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=n),i}}var bl=la(function(e,t,n){var r=o;if(n.length){var i=Yn(n,Mo(bl));r|=u}return bo(e,r,t,n,i)}),xl=la(function(e,t,n){var r=o|s;if(n.length){var i=Yn(n,Mo(xl));r|=u}return bo(t,r,e,n,i)});function Sl(e,t,r){t=r?n:t;var i=bo(e,c,n,n,n,n,n,t);return i.placeholder=Sl.placeholder,i}function Cl(e,t,r){t=r?n:t;var i=bo(e,l,n,n,n,n,n,t);return i.placeholder=Cl.placeholder,i}function wl(e,t,i){var a,o,s,c,l,u,d=0,f=!1,p=!1,m=!0;if(typeof e!=`function`)throw new Qe(r);t=Lu(t)||0,du(i)&&(f=!!i.leading,p=`maxWait`in i,s=p?Mt(Lu(i.maxWait)||0,t):s,m=`trailing`in i?!!i.trailing:m);function h(t){var r=a,i=o;return a=o=n,d=t,c=e.apply(i,r),c}function g(e){return d=e,l=ps(y,t),f?h(e):c}function _(e){var n=e-u,r=e-d,i=t-n;return p?Lt(i,s-r):i}function v(e){var r=e-u,i=e-d;return u===n||r>=t||r<0||p&&i>=s}function y(){var e=gl();if(v(e))return b(e);l=ps(y,_(e))}function b(e){return l=n,m&&a?h(e):(a=o=n,c)}function x(){l!==n&&Fa(l),d=0,a=u=o=l=n}function S(){return l===n?c:b(gl())}function C(){var e=gl(),r=v(e);if(a=arguments,o=this,u=e,r){if(l===n)return g(u);if(p)return Fa(l),l=ps(y,t),h(u)}return l===n&&(l=ps(y,t)),c}return C.cancel=x,C.flush=S,C}var Tl=la(function(e,t){return li(e,1,t)}),El=la(function(e,t,n){return li(e,Lu(t)||0,n)});function Dl(e){return bo(e,m)}function Ol(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw new Qe(r);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(Ol.Cache||Mr),n}Ol.Cache=Mr;function kl(e){if(typeof e!=`function`)throw new Qe(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Al(e){return yl(2,e)}var jl=Na(function(e,t){t=t.length==1&&J(t[0])?fn(t[0],Pn(q())):fn(_i(t,1),Pn(q()));var n=t.length;return la(function(r){for(var i=-1,a=Lt(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return rn(e,this,r)})}),Ml=la(function(e,t){return bo(e,u,n,t,Yn(t,Mo(Ml)))}),Nl=la(function(e,t){return bo(e,d,n,t,Yn(t,Mo(Nl)))}),Pl=Do(function(e,t){return bo(e,p,n,n,n,t)});function Fl(e,t){if(typeof e!=`function`)throw new Qe(r);return t=t===n?t:Fu(t),la(e,t)}function Il(e,t){if(typeof e!=`function`)throw new Qe(r);return t=t==null?0:Mt(Fu(t),0),la(function(n){var r=n[t],i=Pa(n,0,t);return r&&pn(i,r),rn(e,this,i)})}function Ll(e,t,n){var i=!0,a=!0;if(typeof e!=`function`)throw new Qe(r);return du(n)&&(i=`leading`in n?!!n.leading:i,a=`trailing`in n?!!n.trailing:a),wl(e,t,{leading:i,maxWait:t,trailing:a})}function Rl(e){return vl(e,1)}function zl(e,t){return Ml(ja(t),e)}function Bl(){if(!arguments.length)return[];var e=arguments[0];return J(e)?e:[e]}function Vl(e){return oi(e,4)}function Hl(e,t){return t=typeof t==`function`?t:n,oi(e,4,t)}function Ul(e){return oi(e,5)}function Wl(e,t){return t=typeof t==`function`?t:n,oi(e,5,t)}function Gl(e,t){return t==null||ci(e,t,ld(t))}function Kl(e,t){return e===t||e!==e&&t!==t}var ql=ho(Ei),Jl=ho(function(e,t){return e>=t}),Yl=Ni(function(){return arguments}())?Ni:function(e){return fu(e)&&U.call(e,`callee`)&&!ht.call(e,`callee`)},J=Ae.isArray,Xl=Zt?Pn(Zt):Pi;function Zl(e){return e!=null&&uu(e.length)&&!cu(e)}function Ql(e){return fu(e)&&Zl(e)}function $l(e){return e===!0||e===!1||fu(e)&&Ti(e)==E}var eu=Et||If,tu=Qt?Pn(Qt):Fi;function nu(e){return fu(e)&&e.nodeType===1&&!xu(e)}function ru(e){if(e==null)return!0;if(Zl(e)&&(J(e)||typeof e==`string`||typeof e.splice==`function`||eu(e)||Du(e)||Yl(e)))return!e.length;var t=zo(e);if(t==M||t==z)return!e.size;if(ts(e))return!Gi(e).length;for(var n in e)if(U.call(e,n))return!1;return!0}function iu(e,t){return Ii(e,t)}function au(e,t,r){r=typeof r==`function`?r:n;var i=r?r(e,t):n;return i===n?Ii(e,t,n,r):!!i}function ou(e){if(!fu(e))return!1;var t=Ti(e);return t==k||t==O||typeof e.message==`string`&&typeof e.name==`string`&&!xu(e)}function su(e){return typeof e==`number`&&kt(e)}function cu(e){if(!du(e))return!1;var t=Ti(e);return t==A||t==j||t==T||t==L}function lu(e){return typeof e==`number`&&e==Fu(e)}function uu(e){return typeof e==`number`&&e>-1&&e%1==0&&e<=g}function du(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}function fu(e){return typeof e==`object`&&!!e}var pu=$t?Pn($t):Ri;function mu(e,t){return e===t||zi(e,t,Po(t))}function hu(e,t,r){return r=typeof r==`function`?r:n,zi(e,t,Po(t),r)}function gu(e){return bu(e)&&e!=+e}function _u(e){if(es(e))throw new Ke(`Unsupported core-js use. Try https://npms.io/search?q=ponyfill.`);return Bi(e)}function vu(e){return e===null}function yu(e){return e==null}function bu(e){return typeof e==`number`||fu(e)&&Ti(e)==N}function xu(e){if(!fu(e)||Ti(e)!=F)return!1;var t=pt(e);if(t===null)return!0;var n=U.call(t,`constructor`)&&t.constructor;return typeof n==`function`&&n instanceof n&&rt.call(n)==st}var Su=en?Pn(en):Vi;function Cu(e){return lu(e)&&e>=-g&&e<=g}var wu=tn?Pn(tn):Hi;function Tu(e){return typeof e==`string`||!J(e)&&fu(e)&&Ti(e)==B}function Eu(e){return typeof e==`symbol`||fu(e)&&Ti(e)==ee}var Du=nn?Pn(nn):Ui;function Ou(e){return e===n}function ku(e){return fu(e)&&zo(e)==V}function Au(e){return fu(e)&&Ti(e)==ne}var ju=ho(qi),Mu=ho(function(e,t){return e<=t});function Nu(e){if(!e)return[];if(Zl(e))return Tu(e)?tr(e):Ka(e);if(vt&&e[vt])return Kn(e[vt]());var t=zo(e);return(t==M?qn:t==z?Xn:Od)(e)}function Pu(e){return e?(e=Lu(e),e===h||e===-1/0?(e<0?-1:1)*_:e===e?e:0):e===0?e:0}function Fu(e){var t=Pu(e),n=t%1;return t===t?n?t-n:t:0}function Iu(e){return e?ai(Fu(e),0,y):0}function Lu(e){if(typeof e==`number`)return e;if(Eu(e))return v;if(du(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=du(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Nn(e);var n=ze.test(e);return n||Ve.test(e)?Ht(e.slice(2),n?2:8):Re.test(e)?v:+e}function Ru(e){return qa(e,ud(e))}function zu(e){return e?ai(Fu(e),-g,g):e===0?e:0}function Bu(e){return e==null?``:Sa(e)}var Vu=Za(function(e,t){if(ts(t)||Zl(t)){qa(t,ld(t),e);return}for(var n in t)U.call(t,n)&&Qr(e,n,t[n])}),Hu=Za(function(e,t){qa(t,ud(t),e)}),Uu=Za(function(e,t,n,r){qa(t,ud(t),e,r)}),Wu=Za(function(e,t,n,r){qa(t,ld(t),e,r)}),Gu=Do(ii);function Ku(e,t){var n=pr(e);return t==null?n:ti(n,t)}var qu=la(function(e,t){e=Ye(e);var r=-1,i=t.length,a=i>2?t[2]:n;for(a&&Yo(t[0],t[1],a)&&(i=1);++r<i;)for(var o=t[r],s=ud(o),c=-1,l=s.length;++c<l;){var u=s[c],d=e[u];(d===n||Kl(d,tt[u])&&!U.call(e,u))&&(e[u]=o[u])}return e}),Ju=la(function(e){return e.push(n,So),rn(md,n,e)});function Yu(e,t){return bn(e,q(t,3),bi)}function Xu(e,t){return bn(e,q(t,3),xi)}function Zu(e,t){return e==null?e:vi(e,q(t,3),ud)}function Qu(e,t){return e==null?e:yi(e,q(t,3),ud)}function $u(e,t){return e&&bi(e,q(t,3))}function ed(e,t){return e&&xi(e,q(t,3))}function td(e){return e==null?[]:Si(e,ld(e))}function nd(e){return e==null?[]:Si(e,ud(e))}function rd(e,t,r){var i=e==null?n:Ci(e,t);return i===n?r:i}function id(e,t){return e!=null&&Ho(e,t,Di)}function ad(e,t){return e!=null&&Ho(e,t,Oi)}var od=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=ot.call(t)),e[t]=n},mf(vf)),sd=co(function(e,t,n){t!=null&&typeof t.toString!=`function`&&(t=ot.call(t)),U.call(e,t)?e[t].push(n):e[t]=[n]},q),cd=la(Mi);function ld(e){return Zl(e)?qr(e):Gi(e)}function ud(e){return Zl(e)?qr(e,!0):Ki(e)}function dd(e,t){var n={};return t=q(t,3),bi(e,function(e,r,i){ri(n,t(e,r,i),e)}),n}function fd(e,t){var n={};return t=q(t,3),bi(e,function(e,r,i){ri(n,r,t(e,r,i))}),n}var pd=Za(function(e,t,n){Zi(e,t,n)}),md=Za(function(e,t,n,r){Zi(e,t,n,r)}),hd=Do(function(e,t){var n={};if(e==null)return n;var r=!1;t=fn(t,function(t){return t=Ma(t,e),r||=t.length>1,t}),qa(e,ko(e),n),r&&(n=oi(n,7,Co));for(var i=t.length;i--;)wa(n,t[i]);return n});function gd(e,t){return vd(e,kl(q(t)))}var _d=Do(function(e,t){return e==null?{}:ta(e,t)});function vd(e,t){if(e==null)return{};var n=fn(ko(e),function(e){return[e]});return t=q(t),na(e,n,function(e,n){return t(e,n[0])})}function yd(e,t,r){t=Ma(t,e);var i=-1,a=t.length;for(a||(a=1,e=n);++i<a;){var o=e==null?n:e[ys(t[i])];o===n&&(i=a,o=r),e=cu(o)?o.call(e):o}return e}function bd(e,t,n){return e==null?e:fa(e,t,n)}function xd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:fa(e,t,r,i)}var Sd=yo(ld),Cd=yo(ud);function wd(e,t,n){var r=J(e),i=r||eu(e)||Du(e);if(t=q(t,4),n==null){var a=e&&e.constructor;n=i?r?new a:[]:du(e)&&cu(a)?pr(pt(e)):{}}return(i?on:bi)(e,function(e,r,i){return t(n,e,r,i)}),n}function Td(e,t){return e==null||wa(e,t)}function Ed(e,t,n){return e==null?e:Ta(e,t,ja(n))}function Dd(e,t,r,i){return i=typeof i==`function`?i:n,e==null?e:Ta(e,t,ja(r),i)}function Od(e){return e==null?[]:Fn(e,ld(e))}function kd(e){return e==null?[]:Fn(e,ud(e))}function Ad(e,t,r){return r===n&&(r=t,t=n),r!==n&&(r=Lu(r),r=r===r?r:0),t!==n&&(t=Lu(t),t=t===t?t:0),ai(Lu(e),t,r)}function jd(e,t,r){return t=Pu(t),r===n?(r=t,t=0):r=Pu(r),e=Lu(e),ki(e,t,r)}function Md(e,t,r){if(r&&typeof r!=`boolean`&&Yo(e,t,r)&&(t=r=n),r===n&&(typeof t==`boolean`?(r=t,t=n):typeof e==`boolean`&&(r=e,e=n)),e===n&&t===n?(e=0,t=1):(e=Pu(e),t===n?(t=e,e=0):t=Pu(t)),e>t){var i=e;e=t,t=i}if(r||e%1||t%1){var a=Bt();return Lt(e+a*(t-e+Vt(`1e-`+((a+``).length-1))),t)}return oa(e,t)}var Nd=no(function(e,t,n){return t=t.toLowerCase(),e+(n?Pd(t):t)});function Pd(e){return cf(Bu(e).toLowerCase())}function Fd(e){return e=Bu(e),e&&e.replace(Ue,Bn).replace(Ot,``)}function Id(e,t,r){e=Bu(e),t=Sa(t);var i=e.length;r=r===n?i:ai(Fu(r),0,i);var a=r;return r-=t.length,r>=0&&e.slice(r,a)==t}function Ld(e){return e=Bu(e),e&&be.test(e)?e.replace(ve,Vn):e}function Rd(e){return e=Bu(e),e&&Oe.test(e)?e.replace(De,`\\$&`):e}var zd=no(function(e,t,n){return e+(n?`-`:``)+t.toLowerCase()}),Bd=no(function(e,t,n){return e+(n?` `:``)+t.toLowerCase()}),Vd=to(`toLowerCase`);function Hd(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return fo(wt(i),n)+e+fo(Ct(i),n)}function Ud(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;return t&&r<t?e+fo(t-r,n):e}function Wd(e,t,n){e=Bu(e),t=Fu(t);var r=t?er(e):0;return t&&r<t?fo(t-r,n)+e:e}function Gd(e,t,n){return n||t==null?t=0:t&&=+t,zt(Bu(e).replace(ke,``),t||0)}function Kd(e,t,r){return t=(r?Yo(e,t,r):t===n)?1:Fu(t),ca(Bu(e),t)}function qd(){var e=arguments,t=Bu(e[0]);return e.length<3?t:t.replace(e[1],e[2])}var Jd=no(function(e,t,n){return e+(n?`_`:``)+t.toLowerCase()});function Yd(e,t,r){return r&&typeof r!=`number`&&Yo(e,t,r)&&(t=r=n),r=r===n?y:r>>>0,r?(e=Bu(e),e&&(typeof t==`string`||t!=null&&!Su(t))&&(t=Sa(t),!t&&Wn(e))?Pa(tr(e),0,r):e.split(t,r)):[]}var Xd=no(function(e,t,n){return e+(n?` `:``)+cf(t)});function Zd(e,t,n){return e=Bu(e),n=n==null?0:ai(Fu(n),0,e.length),t=Sa(t),e.slice(n,n+t.length)==t}function Qd(e,t,r){var i=K.templateSettings;r&&Yo(e,t,r)&&(t=n),e=Bu(e),t=Wu({},t,i,xo);var a=Wu({},t.imports,i.imports,xo),o=ld(a),s=Fn(a,o);on(o,function(e){if(Pe.test(e))throw new Ke("Invalid `imports` option passed into `_.template`")});var c,l,u=0,d=t.interpolate||We,f=`__p += '`,p=Xe((t.escape||We).source+`|`+d.source+`|`+(d===Ce?Ie:We).source+`|`+(t.evaluate||We).source+`|$`,`g`),m=`//# sourceURL=`+(U.call(t,`sourceURL`)?(t.sourceURL+``).replace(/\s/g,` `):`lodash.templateSources[`+ ++Pt+`]`)+`
`;e.replace(p,function(t,n,r,i,a,o){return r||=i,f+=e.slice(u,o).replace(Ge,Hn),n&&(c=!0,f+=`' +
__e(`+n+`) +
'`),a&&(l=!0,f+=`';
`+a+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),u=o+t.length,t}),f+=`';
`;var h=U.call(t,`variable`)&&t.variable;if(!h)f=`with (obj) {
`+f+`
}
`;else if(Pe.test(h))throw new Ke("Invalid `variable` option passed into `_.template`");f=(l?f.replace(me,``):f).replace(he,`$1`).replace(ge,`$1;`),f=`function(`+(h||`obj`)+`) {
`+(h?``:`obj || (obj = {});
`)+`var __t, __p = ''`+(c?`, __e = _.escape`:``)+(l?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var g=uf(function(){return qe(o,m+`return `+f).apply(n,s)});if(g.source=f,ou(g))throw g;return g}function $d(e){return Bu(e).toLowerCase()}function ef(e){return Bu(e).toUpperCase()}function tf(e,t,r){if(e=Bu(e),e&&(r||t===n))return Nn(e);if(!e||!(t=Sa(t)))return e;var i=tr(e),a=tr(t);return Pa(i,Ln(i,a),Rn(i,a)+1).join(``)}function nf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.slice(0,nr(e)+1);if(!e||!(t=Sa(t)))return e;var i=tr(e);return Pa(i,0,Rn(i,tr(t))+1).join(``)}function rf(e,t,r){if(e=Bu(e),e&&(r||t===n))return e.replace(ke,``);if(!e||!(t=Sa(t)))return e;var i=tr(e);return Pa(i,Ln(i,tr(t))).join(``)}function af(e,t){var r=30,i=`...`;if(du(t)){var a=`separator`in t?t.separator:a;r=`length`in t?Fu(t.length):r,i=`omission`in t?Sa(t.omission):i}e=Bu(e);var o=e.length;if(Wn(e)){var s=tr(e);o=s.length}if(r>=o)return e;var c=r-er(i);if(c<1)return i;var l=s?Pa(s,0,c).join(``):e.slice(0,c);if(a===n)return l+i;if(s&&(c+=l.length-c),Su(a)){if(e.slice(c).search(a)){var u,d=l;for(a.global||(a=Xe(a.source,Bu(Le.exec(a))+`g`)),a.lastIndex=0;u=a.exec(d);)var f=u.index;l=l.slice(0,f===n?c:f)}}else if(e.indexOf(Sa(a),c)!=c){var p=l.lastIndexOf(a);p>-1&&(l=l.slice(0,p))}return l+i}function of(e){return e=Bu(e),e&&ye.test(e)?e.replace(_e,rr):e}var sf=no(function(e,t,n){return e+(n?` `:``)+t.toUpperCase()}),cf=to(`toUpperCase`);function lf(e,t,r){return e=Bu(e),t=r?n:t,t===n?Gn(e)?or(e):yn(e):e.match(t)||[]}var uf=la(function(e,t){try{return rn(e,n,t)}catch(e){return ou(e)?e:new Ke(e)}}),df=Do(function(e,t){return on(t,function(t){t=ys(t),ri(e,t,bl(e[t],e))}),e});function ff(e){var t=e==null?0:e.length,n=q();return e=t?fn(e,function(e){if(typeof e[1]!=`function`)throw new Qe(r);return[n(e[0]),e[1]]}):[],la(function(n){for(var r=-1;++r<t;){var i=e[r];if(rn(i[0],this,n))return rn(i[1],this,n)}})}function pf(e){return si(oi(e,1))}function mf(e){return function(){return e}}function hf(e,t){return e==null||e!==e?t:e}var gf=oo(),_f=oo(!0);function vf(e){return e}function yf(e){return Wi(typeof e==`function`?e:oi(e,1))}function bf(e){return Yi(oi(e,1))}function xf(e,t){return Xi(e,oi(t,1))}var Sf=la(function(e,t){return function(n){return Mi(n,e,t)}}),Cf=la(function(e,t){return function(n){return Mi(e,n,t)}});function wf(e,t,n){var r=ld(t),i=Si(t,r);n==null&&!(du(t)&&(i.length||!r.length))&&(n=t,t=e,e=this,i=Si(t,ld(t)));var a=!(du(n)&&`chain`in n)||!!n.chain,o=cu(e);return on(i,function(n){var r=t[n];e[n]=r,o&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__);return(n.__actions__=Ka(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,pn([this.value()],arguments))})}),e}function Tf(){return Gt._===this&&(Gt._=ct),this}function Ef(){}function Df(e){return e=Fu(e),la(function(t){return $i(t,e)})}var Of=uo(fn),kf=uo(cn),Af=uo(gn);function jf(e){return Xo(e)?En(ys(e)):ra(e)}function Mf(e){return function(t){return e==null?n:Ci(e,t)}}var Nf=mo(),Pf=mo(!0);function Ff(){return[]}function If(){return!1}function Lf(){return{}}function Rf(){return``}function zf(){return!0}function Bf(e,t){if(e=Fu(e),e<1||e>g)return[];var n=y,r=Lt(e,y);t=q(t),e-=y;for(var i=jn(r,t);++n<e;)t(n);return i}function Vf(e){return J(e)?fn(e,ys):Eu(e)?[e]:Ka(vs(Bu(e)))}function Hf(e){var t=++it;return Bu(e)+t}var Uf=lo(function(e,t){return e+t},0),Wf=_o(`ceil`),Gf=lo(function(e,t){return e/t},1),Kf=_o(`floor`);function qf(e){return e&&e.length?mi(e,vf,Ei):n}function Jf(e,t){return e&&e.length?mi(e,q(t,2),Ei):n}function Yf(e){return Tn(e,vf)}function Xf(e,t){return Tn(e,q(t,2))}function Zf(e){return e&&e.length?mi(e,vf,qi):n}function Qf(e,t){return e&&e.length?mi(e,q(t,2),qi):n}var $f=lo(function(e,t){return e*t},1),ep=_o(`round`),tp=lo(function(e,t){return e-t},0);function np(e){return e&&e.length?An(e,vf):0}function rp(e,t){return e&&e.length?An(e,q(t,2)):0}return K.after=_l,K.ary=vl,K.assign=Vu,K.assignIn=Hu,K.assignInWith=Uu,K.assignWith=Wu,K.at=Gu,K.before=yl,K.bind=bl,K.bindAll=df,K.bindKey=xl,K.castArray=Bl,K.chain=Nc,K.chunk=Cs,K.compact=ws,K.concat=Ts,K.cond=ff,K.conforms=pf,K.constant=mf,K.countBy=Wc,K.create=Ku,K.curry=Sl,K.curryRight=Cl,K.debounce=wl,K.defaults=qu,K.defaultsDeep=Ju,K.defer=Tl,K.delay=El,K.difference=Es,K.differenceBy=Ds,K.differenceWith=Os,K.drop=ks,K.dropRight=As,K.dropRightWhile=js,K.dropWhile=Ms,K.fill=Ns,K.filter=Kc,K.flatMap=Yc,K.flatMapDeep=Xc,K.flatMapDepth=Zc,K.flatten=Is,K.flattenDeep=Ls,K.flattenDepth=Rs,K.flip=Dl,K.flow=gf,K.flowRight=_f,K.fromPairs=zs,K.functions=td,K.functionsIn=nd,K.groupBy=el,K.initial=Hs,K.intersection=Us,K.intersectionBy=Ws,K.intersectionWith=Gs,K.invert=od,K.invertBy=sd,K.invokeMap=nl,K.iteratee=yf,K.keyBy=rl,K.keys=ld,K.keysIn=ud,K.map=il,K.mapKeys=dd,K.mapValues=fd,K.matches=bf,K.matchesProperty=xf,K.memoize=Ol,K.merge=pd,K.mergeWith=md,K.method=Sf,K.methodOf=Cf,K.mixin=wf,K.negate=kl,K.nthArg=Df,K.omit=hd,K.omitBy=gd,K.once=Al,K.orderBy=al,K.over=Of,K.overArgs=jl,K.overEvery=kf,K.overSome=Af,K.partial=Ml,K.partialRight=Nl,K.partition=ol,K.pick=_d,K.pickBy=vd,K.property=jf,K.propertyOf=Mf,K.pull=Xs,K.pullAll=Zs,K.pullAllBy=Qs,K.pullAllWith=$s,K.pullAt=ec,K.range=Nf,K.rangeRight=Pf,K.rearg=Pl,K.reject=ll,K.remove=tc,K.rest=Fl,K.reverse=nc,K.sampleSize=dl,K.set=bd,K.setWith=xd,K.shuffle=fl,K.slice=rc,K.sortBy=hl,K.sortedUniq=uc,K.sortedUniqBy=dc,K.split=Yd,K.spread=Il,K.tail=fc,K.take=pc,K.takeRight=mc,K.takeRightWhile=hc,K.takeWhile=gc,K.tap=Pc,K.throttle=Ll,K.thru=Fc,K.toArray=Nu,K.toPairs=Sd,K.toPairsIn=Cd,K.toPath=Vf,K.toPlainObject=Ru,K.transform=wd,K.unary=Rl,K.union=_c,K.unionBy=vc,K.unionWith=yc,K.uniq=bc,K.uniqBy=xc,K.uniqWith=Sc,K.unset=Td,K.unzip=Cc,K.unzipWith=wc,K.update=Ed,K.updateWith=Dd,K.values=Od,K.valuesIn=kd,K.without=Tc,K.words=lf,K.wrap=zl,K.xor=Ec,K.xorBy=Dc,K.xorWith=Oc,K.zip=kc,K.zipObject=Ac,K.zipObjectDeep=jc,K.zipWith=Mc,K.entries=Sd,K.entriesIn=Cd,K.extend=Hu,K.extendWith=Uu,wf(K,K),K.add=Uf,K.attempt=uf,K.camelCase=Nd,K.capitalize=Pd,K.ceil=Wf,K.clamp=Ad,K.clone=Vl,K.cloneDeep=Ul,K.cloneDeepWith=Wl,K.cloneWith=Hl,K.conformsTo=Gl,K.deburr=Fd,K.defaultTo=hf,K.divide=Gf,K.endsWith=Id,K.eq=Kl,K.escape=Ld,K.escapeRegExp=Rd,K.every=Gc,K.find=qc,K.findIndex=Ps,K.findKey=Yu,K.findLast=Jc,K.findLastIndex=Fs,K.findLastKey=Xu,K.floor=Kf,K.forEach=Qc,K.forEachRight=$c,K.forIn=Zu,K.forInRight=Qu,K.forOwn=$u,K.forOwnRight=ed,K.get=rd,K.gt=ql,K.gte=Jl,K.has=id,K.hasIn=ad,K.head=Bs,K.identity=vf,K.includes=tl,K.indexOf=Vs,K.inRange=jd,K.invoke=cd,K.isArguments=Yl,K.isArray=J,K.isArrayBuffer=Xl,K.isArrayLike=Zl,K.isArrayLikeObject=Ql,K.isBoolean=$l,K.isBuffer=eu,K.isDate=tu,K.isElement=nu,K.isEmpty=ru,K.isEqual=iu,K.isEqualWith=au,K.isError=ou,K.isFinite=su,K.isFunction=cu,K.isInteger=lu,K.isLength=uu,K.isMap=pu,K.isMatch=mu,K.isMatchWith=hu,K.isNaN=gu,K.isNative=_u,K.isNil=yu,K.isNull=vu,K.isNumber=bu,K.isObject=du,K.isObjectLike=fu,K.isPlainObject=xu,K.isRegExp=Su,K.isSafeInteger=Cu,K.isSet=wu,K.isString=Tu,K.isSymbol=Eu,K.isTypedArray=Du,K.isUndefined=Ou,K.isWeakMap=ku,K.isWeakSet=Au,K.join=Ks,K.kebabCase=zd,K.last=qs,K.lastIndexOf=Js,K.lowerCase=Bd,K.lowerFirst=Vd,K.lt=ju,K.lte=Mu,K.max=qf,K.maxBy=Jf,K.mean=Yf,K.meanBy=Xf,K.min=Zf,K.minBy=Qf,K.stubArray=Ff,K.stubFalse=If,K.stubObject=Lf,K.stubString=Rf,K.stubTrue=zf,K.multiply=$f,K.nth=Ys,K.noConflict=Tf,K.noop=Ef,K.now=gl,K.pad=Hd,K.padEnd=Ud,K.padStart=Wd,K.parseInt=Gd,K.random=Md,K.reduce=sl,K.reduceRight=cl,K.repeat=Kd,K.replace=qd,K.result=yd,K.round=ep,K.runInContext=e,K.sample=ul,K.size=pl,K.snakeCase=Jd,K.some=ml,K.sortedIndex=ic,K.sortedIndexBy=ac,K.sortedIndexOf=oc,K.sortedLastIndex=sc,K.sortedLastIndexBy=cc,K.sortedLastIndexOf=lc,K.startCase=Xd,K.startsWith=Zd,K.subtract=tp,K.sum=np,K.sumBy=rp,K.template=Qd,K.times=Bf,K.toFinite=Pu,K.toInteger=Fu,K.toLength=Iu,K.toLower=$d,K.toNumber=Lu,K.toSafeInteger=zu,K.toString=Bu,K.toUpper=ef,K.trim=tf,K.trimEnd=nf,K.trimStart=rf,K.truncate=af,K.unescape=of,K.uniqueId=Hf,K.upperCase=sf,K.upperFirst=cf,K.each=Qc,K.eachRight=$c,K.first=Bs,wf(K,function(){var e={};return bi(K,function(t,n){U.call(K.prototype,n)||(e[n]=t)}),e}(),{chain:!1}),K.VERSION=`4.18.1`,on([`bind`,`bindKey`,`curry`,`curryRight`,`partial`,`partialRight`],function(e){K[e].placeholder=K}),on([`drop`,`take`],function(e,t){gr.prototype[e]=function(r){r=r===n?1:Mt(Fu(r),0);var i=this.__filtered__&&!t?new gr(this):this.clone();return i.__filtered__?i.__takeCount__=Lt(r,i.__takeCount__):i.__views__.push({size:Lt(r,y),type:e+(i.__dir__<0?`Right`:``)}),i},gr.prototype[e+`Right`]=function(t){return this.reverse()[e](t).reverse()}}),on([`filter`,`map`,`takeWhile`],function(e,t){var n=t+1,r=n==1||n==3;gr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:q(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),on([`head`,`last`],function(e,t){var n=`take`+(t?`Right`:``);gr.prototype[e]=function(){return this[n](1).value()[0]}}),on([`initial`,`tail`],function(e,t){var n=`drop`+(t?``:`Right`);gr.prototype[e]=function(){return this.__filtered__?new gr(this):this[n](1)}}),gr.prototype.compact=function(){return this.filter(vf)},gr.prototype.find=function(e){return this.filter(e).head()},gr.prototype.findLast=function(e){return this.reverse().find(e)},gr.prototype.invokeMap=la(function(e,t){return typeof e==`function`?new gr(this):this.map(function(n){return Mi(n,e,t)})}),gr.prototype.reject=function(e){return this.filter(kl(q(e)))},gr.prototype.slice=function(e,t){e=Fu(e);var r=this;return r.__filtered__&&(e>0||t<0)?new gr(r):(e<0?r=r.takeRight(-e):e&&(r=r.drop(e)),t!==n&&(t=Fu(t),r=t<0?r.dropRight(-t):r.take(t-e)),r)},gr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},gr.prototype.toArray=function(){return this.take(y)},bi(gr.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),i=/^(?:head|last)$/.test(t),a=K[i?`take`+(t==`last`?`Right`:``):t],o=i||/^find/.test(t);a&&(K.prototype[t]=function(){var t=this.__wrapped__,s=i?[1]:arguments,c=t instanceof gr,l=s[0],u=c||J(t),d=function(e){var t=a.apply(K,pn([e],s));return i&&f?t[0]:t};u&&r&&typeof l==`function`&&l.length!=1&&(c=u=!1);var f=this.__chain__,p=!!this.__actions__.length,m=o&&!f,h=c&&!p;if(!o&&u){t=h?t:new gr(this);var g=e.apply(t,s);return g.__actions__.push({func:Fc,args:[d],thisArg:n}),new hr(g,f)}return m&&h?e.apply(this,s):(g=this.thru(d),m?i?g.value()[0]:g.value():g)})}),on([`pop`,`push`,`shift`,`sort`,`splice`,`unshift`],function(e){var t=$e[e],n=/^(?:push|sort|unshift)$/.test(e)?`tap`:`thru`,r=/^(?:pop|shift)$/.test(e);K.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var i=this.value();return t.apply(J(i)?i:[],e)}return this[n](function(n){return t.apply(J(n)?n:[],e)})}}),bi(gr.prototype,function(e,t){var n=K[t];if(n){var r=n.name+``;U.call(Dn,r)||(Dn[r]=[]),Dn[r].push({name:t,func:n})}}),Dn[so(n,s).name]=[{name:`wrapper`,func:n}],gr.prototype.clone=_r,gr.prototype.reverse=vr,gr.prototype.value=yr,K.prototype.at=Ic,K.prototype.chain=Lc,K.prototype.commit=Rc,K.prototype.next=zc,K.prototype.plant=Vc,K.prototype.reverse=Hc,K.prototype.toJSON=K.prototype.valueOf=K.prototype.value=Uc,K.prototype.first=K.prototype.head,vt&&(K.prototype[vt]=Bc),K})();typeof define==`function`&&typeof define.amd==`object`&&define.amd?(Gt._=sr,define(function(){return sr})):qt?((qt.exports=sr)._=sr,Kt._=sr):Gt._=sr}).call(e)}));function ZN(e){return e==null||typeof e==`boolean`?``:typeof e==`string`||typeof e==`number`?String(e):Array.isArray(e)?e.map(e=>ZN(e)).join(``):nP.isValidElement(e)?ZN(e.props.children):``}function QN(e){return`options`in e}function $N(e){let t=[],n=[],r=new Map,i=(e,{groupKey:i,groupLabel:a}={})=>{if(r.has(e.value))throw Error(`Select options must have unique values. Duplicate value "${e.value}" found.`);let o={key:e.value,value:e.value,label:e.label,textValue:e.textValue??ZN(e.label),isDisabled:!!e.isDisabled,...Y({groupKey:i,groupLabel:a})};r.set(o.value,o.key),o.isDisabled&&n.push(o.key),t.push(o)};return e.forEach((e,t)=>{if(QN(e)){let n=`group-${t}`;e.options.forEach(t=>{i(t,{groupKey:n,groupLabel:e.label})});return}i(e)}),{options:t,disabledKeys:n,valueToKey:r}}function eP(e){return(0,rP.jsx)(Cw,{textValue:e.textValue,children:e.label},e.key)}function tP(e){let t=[],n=new Map;return e.options.forEach(e=>{if(!e.groupKey){t.push(eP(e));return}let r=n.get(e.groupKey)??{label:e.groupLabel??``,items:[]};n.has(e.groupKey)||t.push({groupKey:e.groupKey}),r.items.push(eP(e)),n.set(e.groupKey,r)}),t.map(e=>{if(e==null||!(`groupKey`in e))return e;let t=n.get(e.groupKey);return t?(0,rP.jsx)(Dw,{"aria-label":ZN(t.label),title:t.label,children:t.items},e.groupKey):null}).filter(e=>e!==null)}var nP,rP;function iP(){return(iP=t((()=>{ww(),Ow(),nP=e(r()),rP=G()})))()}function aP(e){return e.current===null||e.current instanceof HTMLUListElement}function oP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:d=!1,isRequired:f=!1,className:p,options:m,placeholder:h,autoComplete:g,onKeyDown:_,onKeyUp:v,searchEnabled:y=!1,searchPlaceholder:b=`search`}=e,[x,S]=(0,cP.useState)(``),{contains:C}=v_({sensitivity:`base`}),{field:w,resolvedError:T,isInvalid:E}=MS({name:t,control:n,rules:r,errorMessage:s}),D=(0,cP.useId)(),O=i??D,k=(0,cP.useRef)(null),A=(0,cP.useRef)(null),j=(0,cP.useRef)(null),M=(0,cP.useRef)(null),N=(0,cP.useRef)(!1),P=(0,cP.useMemo)(()=>$N(m),[m]),F=tP({...P,options:A.current===document.activeElement?P.options.filter(e=>C(e.textValue,x)):P.options}),I=(0,cP.useMemo)(()=>new Map(P.options.map(e=>[e.key,e])),[P.options]),L=P.valueToKey.get(zS(w.value))??null,R=KN({children:F,disabledKeys:P.disabledKeys,value:L,onSelectionChange:e=>{let t=(e===null?void 0:I.get(String(e)))?.value??``;w.onChange(t)},isDisabled:d,isRequired:f,isInvalid:E,label:a,description:o,errorMessage:T}),z=UN({value:x,onChange:S}),B=BN({}),{inputProps:ee,collectionProps:te,collectionRef:V}=dr({inputRef:A,collectionRef:M},B),ne=(0,sP.omit)(te,[`aria-label`]),{triggerProps:re,valueProps:ie,labelProps:ae,menuProps:oe,descriptionProps:se,errorMessageProps:ce,isInvalid:le,validationErrors:ue}=ob({id:O,disabledKeys:P.disabledKeys,value:L,isDisabled:d,isRequired:f,isInvalid:E,label:a,description:o,errorMessage:T,name:w.name,...ne,...Y({autoComplete:g})},R,k),{buttonProps:de}=Ir(re,k),{labelProps:fe,inputProps:pe}=ib({...ee,placeholder:b,"aria-label":b},z,A),me=W(ae,fe),he=e=>{let t=e;k.current?.contains(t)||j.current?.contains(t)||N.current&&(N.current=!1,w.onBlur())},ge=()=>{N.current||=!0},_e=W(de,{onBlur:e=>{he(e.relatedTarget)},onFocus:()=>{ge()},onKeyDown:_,onKeyUp:v}),ve=SM(T,le,ue),ye=I.get(String(R.value)),be=ye===void 0,xe=R.isOpen||ye!==void 0||h!==void 0;return(0,lP.jsxs)(`div`,{className:c(LC,p),children:[(0,lP.jsxs)(`div`,{className:c(RC,uP),"data-field-control":`true`,"data-focused":R.isFocused?`true`:`false`,"data-floated":xe?`true`:`false`,"data-invalid":le?`true`:`false`,"data-placeholder":be?`true`:`false`,children:[(0,lP.jsxs)(`button`,{..._e,id:O,ref:FS(k,w.ref),className:CC(l),type:`button`,children:[(0,lP.jsx)(`span`,{...ie,"data-select-placeholder":be?`true`:void 0,className:c(dP,be?HC:void 0),children:ye?.label??h??null}),(0,lP.jsx)(`span`,{className:fP,"aria-hidden":`true`,children:(0,lP.jsx)(`span`,{className:hT})})]}),(0,lP.jsx)(`span`,{...me,className:EC(l),children:a}),R.isOpen?(0,lP.jsx)(PT,{popoverRef:j,state:R,triggerRef:k,surfaceProps:{onBlur:e=>{he(e.relatedTarget)},onFocus:()=>{ge()}},children:(0,lP.jsxs)(Ue,{autoFocus:!0,children:[y&&(0,lP.jsxs)(`div`,{className:u`
                    position: relative;
                    padding: 0 6px;
                  `,children:[(0,lP.jsx)(`span`,{className:u`
                      display: inline-block;
                      position: absolute;
                      left: 1rem;
                      top: 1.125rem;
                    `,children:(0,lP.jsx)(wt,{size:16,weight:`bold`})}),(0,lP.jsx)(`input`,{className:pP,...pe,ref:A})]}),aP(V)&&(0,lP.jsx)(AT,{...W(oe,ne),shouldSelectOnPressUp:!1,state:R,listBoxRef:V})]})}):null]}),ve?(0,lP.jsx)(`p`,{...ce,role:`alert`,className:OC(l,!0),children:ve}):o?(0,lP.jsx)(`p`,{...se,className:OC(l,!1),children:o}):null]})}var sP,cP,lP,uP,dP,fP,pP;function mP(){return(mP=t((()=>{l(),HN(),GN(),YN(),Et(),sP=XN(),cP=e(r()),H(),Lr(),lb(),ab(),b_(),K(),I(),NS(),BS(),iP(),dw(),NT(),zT(),yT(),lP=G(),uP=u`
  position: relative;
`,dP=u`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`,fP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  margin-left: var(--space-3);
  color: var(--field-chrome);
`,pP=u`
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
`})))()}function hP(){return(hP=t((()=>{l(),r(),mw(),G(),u`
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
`})))()}function gP(e){let{name:t,control:n,rules:r,id:i,label:a,description:o,errorMessage:s,fieldSize:l=`md`,isDisabled:u=!1,isReadOnly:d=!1,isRequired:f=!1,className:p,switchValue:m,onKeyDown:h,onKeyUp:g,"aria-label":_}=e,{field:v,resolvedError:y,isInvalid:b}=MS({name:t,control:n,rules:r,errorMessage:s}),x=!!v.value,S=(0,_P.useId)(),C=i??S,w=(0,_P.useId)(),T=(0,_P.useId)(),E=RS({descriptionId:w,errorMessageId:T,hasDescription:!!o,hasErrorMessage:!!y}),D=(0,_P.useRef)(null),O=Ql({isDisabled:u,isReadOnly:d,isSelected:x,onChange:e=>{v.onChange(e)}}),k=m===void 0?void 0:Array.isArray(m)?m.join(`,`):String(m),{inputProps:A,isDisabled:j,isPressed:M,isSelected:N,labelProps:P}=ub({children:a,id:C,name:v.name,isDisabled:u,isReadOnly:d,...Y({value:k,"aria-label":_,"aria-describedby":E})},O,D),{focusProps:F,isFocusVisible:I}=T_(),L=W(A,F,{onKeyDown:h,onKeyUp:g,onBlur:e=>{A.onBlur?.(e),v.onBlur()},"aria-invalid":b?bP:void 0,required:f,type:`checkbox`});return(0,vP.jsx)(fw,{className:c(US,p),description:o,...pb(o,{descriptionId:w}),errorMessage:y,...pb(y,{errorMessageId:T}),layout:yP,children:(0,vP.jsxs)(`label`,{...P,className:c(GS,KS,VS(l)),"data-disabled":j?`true`:`false`,children:[(0,vP.jsx)(`input`,{...L,ref:FS(D,v.ref),className:qS}),(0,vP.jsx)(`span`,{className:XS,"aria-hidden":`true`,"data-disabled":j?`true`:`false`,"data-focus-visible":I?`true`:`false`,"data-invalid":b?`true`:`false`,"data-pressed":M?`true`:`false`,"data-selected":N?`true`:`false`,children:(0,vP.jsx)(`span`,{className:ZS,"data-selected":N?`true`:`false`})}),(0,vP.jsx)(`span`,{className:JS,children:(0,vP.jsx)(`span`,{className:YS,children:a})})]})})}var _P,vP,yP,bP;function xP(){return(xP=t((()=>{l(),eu(),_P=e(r()),H(),D_(),db(),NS(),BS(),sC(),mw(),vP=G(),yP=`stacked`,bP=`true`})))()}function SP(e,t){let n=e.style.height;e.style.height=`auto`;let r=e.scrollHeight,i=t?Math.min(r,t):r;return e.style.height=`${i}px`,e.style.overflowY=t&&r>t?`auto`:`hidden`,n===e.style.height?null:i}function CP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,autoResize:m=!1,autoResizeMaxHeightPx:h,onAutoResized:g,id:_,autoComplete:v,maxLength:y,minLength:b,rows:x,className:S}=e,{field:C,resolvedError:w,isInvalid:T}=MS({name:t,control:n,rules:r,errorMessage:o}),E=(0,wP.useId)(),D=_??E,O=(0,wP.useRef)(null),k=C.value===null||C.value===void 0?``:String(C.value),A=CM({defaultValue:void 0,elementRef:O,value:k}),{labelProps:j,inputProps:M,descriptionProps:N,errorMessageProps:P,isInvalid:F,validationErrors:I}=Cu({label:i,description:a,errorMessage:w,id:D,value:k,name:C.name,isInvalid:T,inputElementType:EP,...Y({autoComplete:v,maxLength:y,minLength:b,isDisabled:d,isReadOnly:f,isRequired:p})},O);(0,wP.useEffect)(()=>{if(!m||!O.current)return;let e=SP(O.current,h);e!==null&&g?.(e)},[k,m,h,g]);let L=W(M,{onChange:e=>{if(C.onChange(e.target.value),m&&O.current){let e=SP(O.current,h);e!==null&&g?.(e)}},onFocus:()=>{A.setIsFocused(!0)},onBlur:()=>{A.setIsFocused(!1),C.onBlur()},placeholder:xM(),rows:x}),R=SM(w,F,I),z=fb(void 0,L[`aria-describedby`]),B=L[`aria-invalid`];return(0,TP.jsxs)(`div`,{className:c(LC,S),children:[(0,TP.jsxs)(`div`,{className:RC,"data-field-control":`true`,"data-multiline":`true`,"data-has-icon-start":l?`true`:void 0,"data-has-icon-end":u?`true`:void 0,"data-focused":A.isFocused?`true`:`false`,"data-filled":A.hasValue?`true`:`false`,"data-floated":A.isFloated?`true`:`false`,"data-invalid":F?`true`:`false`,children:[(0,TP.jsx)(`textarea`,{...L,ref:FS(O,C.ref),className:xC(s),"aria-describedby":z,"aria-invalid":B}),(0,TP.jsx)(`label`,{...j,className:TC(s),children:i}),l?(0,TP.jsx)(`span`,{className:QC[s],"aria-hidden":`true`,children:l}):null,u?(0,TP.jsx)(`span`,{className:ew[s],"aria-hidden":`true`,children:u}):null]}),R?(0,TP.jsx)(`p`,{...P,role:`alert`,className:OC(s,!0),children:R}):a?(0,TP.jsx)(`p`,{...N,className:OC(s,!1),children:a}):null]})}var wP,TP,EP;function DP(){return(DP=t((()=>{l(),wP=e(r()),H(),Tu(),NS(),dw(),TM(),TP=G(),EP=`textarea`})))()}function OP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,fieldSize:s=`md`,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,type:h=`text`,autoComplete:g,maxLength:_,minLength:v,pattern:y,inputMode:b,placeholder:x,className:S,min:C,max:w,step:T}=e,{field:E,resolvedError:D,isInvalid:O}=MS({name:t,control:n,rules:r,errorMessage:o}),k=(0,kP.useRef)(null),A=E.value===null||E.value===void 0?``:String(E.value),j=CM({defaultValue:void 0,elementRef:k,value:A}),{labelProps:M,inputProps:N,descriptionProps:P,errorMessageProps:F,isInvalid:I,validationErrors:L}=Cu({label:i,description:a,errorMessage:D,name:E.name,type:h,value:A,isInvalid:O,...Y({id:m,autoComplete:g,maxLength:_,minLength:v,pattern:y,inputMode:b,placeholder:x,isDisabled:d,isReadOnly:f,isRequired:p})},k),R=W(N,{onChange:e=>{h===`number`&&!Number.isNaN(e.target.valueAsNumber)?E.onChange(e.target.valueAsNumber):h===`number`&&e.target.value===``?E.onChange(null):E.onChange(e.target.value)},onFocus:()=>{j.setIsFocused(!0)},onBlur:()=>{j.setIsFocused(!1),E.onBlur()},placeholder:xM(),min:C,max:w,step:T}),z=SM(D,I,L),B=fb(void 0,R[`aria-describedby`]);return(0,AP.jsxs)(`div`,{className:c(LC,S),children:[(0,AP.jsxs)(`div`,{className:RC,"data-field-control":`true`,"data-has-icon-start":l?`true`:void 0,"data-has-icon-end":u?`true`:void 0,"data-focused":j.isFocused?`true`:`false`,"data-filled":j.hasValue?`true`:`false`,"data-floated":j.isFloated?`true`:`false`,"data-invalid":I?`true`:`false`,children:[(0,AP.jsx)(`input`,{...R,ref:FS(k,E.ref),className:yC(s),"aria-describedby":B}),(0,AP.jsx)(`label`,{...M,className:TC(s),children:i}),l?(0,AP.jsx)(`span`,{className:YC,"aria-hidden":`true`,children:l}):null,u?(0,AP.jsx)(`span`,{className:XC,"aria-hidden":`true`,children:u}):null]}),z?(0,AP.jsx)(`p`,{...F,role:`alert`,className:OC(s,!0),children:z}):a?(0,AP.jsx)(`p`,{...P,className:OC(s,!1),children:a}):null]})}var kP,AP;function jP(){return(jP=t((()=>{l(),kP=e(r()),H(),Tu(),NS(),dw(),TM(),AP=G()})))()}function MP(e){let{name:t,control:n,rules:r,label:i,description:a,errorMessage:o,notice:s,fieldSize:c,iconStart:l,iconEnd:u,isDisabled:d,isReadOnly:f,isRequired:p,id:m,className:h,min:g,max:_,step:v,hourCycle:y,inputRef:b}=e,{field:x,resolvedError:S,isInvalid:C}=MS({name:t,control:n,rules:r,errorMessage:o}),w=x.value??``;return(0,NP.jsx)(Mj,{ref:x.ref,kind:FP,layout:PP,label:i,description:a,errorMessage:S,notice:s,...Y({fieldSize:c}),iconStart:l,iconEnd:u,...Y({isDisabled:d}),...Y({isReadOnly:f}),...Y({isRequired:p}),isInvalid:C,...Y({id:m}),...Y({className:h}),...Y({min:g}),...Y({max:_}),...Y({step:v}),...Y({hourCycle:y}),...Y({inputRef:b}),value:w,onChange:e=>{x.onChange(e.target.value)},onBlur:x.onBlur})}var NP,PP,FP;function IP(){return(IP=t((()=>{r(),NS(),Nj(),NP=G(),PP=`floating`,FP=`time`})))()}var LP;function RP(){return(RP=t((()=>{l(),LP=r(),G(),(0,LP.createContext)(null),u`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.35;
  min-width: 0;
  overflow-wrap: anywhere;
`,u`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  align-items: center;
`,u`
  display: flex;
  flex-wrap: wrap;
`})))()}function zP(){return(zP=t((()=>{l(),u`
  border-color: rgba(10, 15, 23, 0.12) transparent rgba(10, 15, 23, 0.12) transparent;
  &:first-child {
    border-radius: var(--control-radius) 0 0 var(--control-radius);
    margin-inline-start: 0;

    border-color: rgba(10, 15, 23, 0.12) transparent rgba(10, 15, 23, 0.12) rgba(10, 15, 23, 0.12);
  }

  &:last-child {
    border-radius: 0 var(--control-radius) var(--control-radius) 0;
    border-color: rgba(10, 15, 23, 0.12) rgba(10, 15, 23, 0.12) rgba(10, 15, 23, 0.12) transparent;
  }
`})))()}function BP(){return(BP=t((()=>{l(),r(),zb(),RP(),zP(),G()})))()}function VP(){return(VP=t((()=>{Et(),RP(),BP(),G()})))()}function HP(){return(HP=t((()=>{l(),r(),mw(),dw(),zT(),yT(),Jk(),G(),u`
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
`})))()}function UP(e){let t=e.trim().split(/\s+/).filter(Boolean),n=t[0];if(!n)return`?`;if(t.length===1)return n.slice(0,2).toUpperCase();let r=t[t.length-1]??n;return(n.charAt(0)+r.charAt(0)).toUpperCase()}function WP(e){let t=0;for(let n=0;n<e.length;n++)t=(t*31+(e.codePointAt(n)??0))%2147483647;return t}var GP,KP,qP,JP;function YP(){return(YP=t((()=>{l(),r(),GP=G(),KP=[`var(--color-blue-600)`,`var(--color-green-600)`,`var(--color-purple-600)`,`var(--color-crimson-600)`,`var(--color-gray-600)`],qP=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  border-radius: 50%;
  color: var(--color-primary-100);
  font-weight: 700;
  text-transform: uppercase;
  user-select: none;
`,JP=({name:e,size:t=48,className:n})=>{let r=u`
    width: ${t}px;
    height: ${t}px;
    background: ${KP[WP(e)%KP.length]};
    font-size: ${Math.round(t*.38)}px;
  `;return(0,GP.jsx)(`span`,{className:c(qP,r,n),"aria-hidden":`true`,children:UP(e)})}})))()}var XP,ZP,QP,$P,eF,tF,nF,rF,iF;function aF(){return(aF=t((()=>{l(),XP=e(r()),ZP=G(),QP={neutral:u`
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
  `},$P=u`
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
`,eF=u`
  gap: var(--space-1);
  padding: 0 var(--space-2);
`,tF=u`
  display: inline-flex;
  align-items: center;
  font-size: 0.9em;
`,nF=u`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-self: start;
  gap: var(--space-1);
`,rF=u`
  font-size: var(--font-size-1);
  font-weight: 400;
  color: var(--color-gray-500);
`,iF=({tone:e=`neutral`,size:t=`default`,icon:n,children:r,className:i,title:a,description:o})=>{let s=XP.useId(),l=(0,ZP.jsxs)(`span`,{className:c($P,QP[e],t===`compact`&&eF,!o&&i),title:a,...pb(o,{"aria-describedby":s}),children:[n?(0,ZP.jsx)(`span`,{className:tF,"aria-hidden":`true`,children:n}):null,r]});return o?(0,ZP.jsxs)(`span`,{className:c(nF,i),children:[l,(0,ZP.jsx)(`span`,{id:s,className:rF,children:o})]}):l}})))()}function oF(){return(oF=t((()=>{l(),r(),G(),u`
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
`})))()}async function sF(e){if(navigator.clipboard?.writeText)try{await navigator.clipboard.writeText(e);return}catch{}let t=document.createElement(`textarea`);t.value=e,t.style.position=pF,t.style.opacity=`0`,document.body.append(t),t.select();let n=document.execCommand(mF);if(t.remove(),!n)throw Error(hF)}var cF,lF,uF,dF,fF,pF,mF,hF,gF,_F,vF,yF,bF,xF,SF,CF;function wF(){return(wF=t((()=>{l(),cF=e(r()),H(),Lr(),F_(),Ee(),a(),lF=G(),uF=`⧉`,dF=`✓`,fF=`✕`,pF=`fixed`,mF=`copy`,hF=`Copy command was unsuccessful`,gF=2e3,_F={IDLE:`idle`,COPIED:`copied`,ERROR:`error`},vF=o`
  from {
    transform: scale(0.6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`,yF=u`
  position: relative;
  display: inline-flex;
`,bF=u`
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
`,xF=u`
  display: inline-flex;
  animation: ${vF} 0.18s ease;

  &[data-status="copied"] {
    color: var(--color-green-600);
  }
  &[data-status="error"] {
    color: var(--color-red-500);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,SF=u`
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
`,CF=({value:e,label:t,children:n,className:r})=>{let{t:a}=i(`shared-module`),o=cF.useRef(null),[s,l]=cF.useState(_F.IDLE),[u,d]=cF.useState(!1),f=cF.useRef(null);cF.useEffect(()=>()=>{f.current&&clearTimeout(f.current)},[]);let{buttonProps:p,isPressed:m}=Ir({"aria-label":t,onPress:async()=>{let t=_F.COPIED;try{await sF(e)}catch{t=_F.ERROR}l(t),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>l(_F.IDLE),gF)}},o),{hoverProps:h,isHovered:g}=j_({}),_=s===_F.COPIED?a(`copy-button.copied`):s===_F.ERROR?a(`copy-button.failed`):``,v=s===_F.COPIED?dF:s===_F.ERROR?fF:uF;return(0,lF.jsxs)(`span`,{className:yF,children:[(0,lF.jsx)(`button`,{...W(p,h),ref:o,className:c(bF,r),type:`button`,"data-pressed":m,onFocus:()=>d(!0),onBlur:()=>d(!1),children:n??(0,lF.jsx)(`span`,{"aria-hidden":`true`,className:xF,"data-status":s,children:v},s)}),(0,lF.jsx)(`span`,{className:SF,"data-show":g||u||s!==_F.IDLE,"aria-hidden":`true`,children:_||t}),(0,lF.jsx)(vt,{children:(0,lF.jsx)(`span`,{"aria-live":`polite`,children:_})})]})}})))()}var TF,EF,DF,OF,kF,AF,jF,MF;function NF(){return(NF=t((()=>{l(),r(),TF=G(),EF=`30rem`,DF=u`
  display: grid;
  /* minmax(0, …) on both: without it the longest unwrapped label sets the label column and a long
     unbroken value (a masked address, an id) overflows the value column. */
  grid-template-columns: minmax(0, max-content) minmax(0, 1fr);
  gap: var(--space-2) var(--space-4);
  /* The label is smaller than its value; top-aligned, it would sit above the value's line. */
  align-items: baseline;
  margin: 0;

  @media (max-width: ${EF}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--space-3);
  }
`,OF=u`
  display: grid;
  gap: var(--space-3);
  margin: 0;
`,kF=u`
  display: contents;

  @media (max-width: ${EF}) {
    display: grid;
    gap: var(--space-1);
  }
`,AF=u`
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 500;
`,jF=u`
  margin: 0;
  min-width: 0;
  color: var(--color-gray-700);
  font-size: var(--font-size-2);
  overflow-wrap: anywhere;
`,MF=({items:e,layout:t=`inline`,className:n})=>(0,TF.jsx)(`dl`,{className:c(t===`inline`?DF:OF,n),children:e.map((e,n)=>(0,TF.jsxs)(`div`,{className:t===`inline`?kF:void 0,children:[(0,TF.jsx)(`dt`,{className:AF,children:e.label}),(0,TF.jsx)(`dd`,{className:jF,children:e.value})]},n))})})))()}function PF(){return(PF=t((()=>{l(),r(),zb(),G(),u`
  display: inline-block;
  &::first-letter {
    text-transform: uppercase;
  }
`})))()}function FF(){return(FF=t((()=>{l(),r(),PF(),G(),u`
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
`,u`
  display: flex;
  flex-flow: column wrap;
  gap: 0.5rem;
`})))()}var IF;function LF(){return(LF=t((()=>{l(),r(),Ub(),G(),u`
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

  /* Forced colours paint the surface and the page behind it the same Canvas; this is the edge. */
  @media (forced-colors: active) {
    border: 1px solid CanvasText;
  }
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
  line-height: 1.3;
  overflow-wrap: break-word;
`,u`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--space-6);
  height: var(--space-6);
  margin-block-start: calc(var(--space-3) * -1);
  margin-inline-end: calc(var(--space-3) * -1);
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
`,IF=480,u`
  flex: none;
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: 0 clamp(1rem, 5vw, 2rem) clamp(1rem, 5vw, 2rem);

  @media (max-width: ${IF}px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`,u`
  flex: 1 1 0;

  /* On a column main axis that zero basis becomes a zero height and overrides the button's own,
     leaving an action the height of its text. */
  @media (max-width: ${IF}px) {
    flex: 0 0 auto;
  }
`})))()}function RF(){return(RF=t((()=>{l(),r(),LF(),DP(),G(),u`
  margin-bottom: calc(var(--space-4) + var(--space-2));
`})))()}var zF,BF,VF,HF,UF,WF,GF,KF,qF,JF,YF,XF,ZF,QF;function $F(){return($F=t((()=>{l(),zF=e(r()),Lr(),oO(),BF=G(),VF=`right`,HF=u`
  border: 1px solid var(--color-clear-300);
  border-radius: var(--surface-radius);
  overflow: hidden;
  background: var(--color-clear-50);
`,UF=u`
  border: none;
  border-radius: 0;
  overflow: visible;
  background: none;
`,WF=u`
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
`,GF=u`
  padding: var(--space-2) 0;
`,KF=u`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1 1 auto;
  min-width: 0;
`,qF=u`
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
`,JF=u`
  flex: 1 1 auto;
  min-width: 0;
  font-weight: 600;
`,YF=u`
  /* Shrinkable, so a summary too long for the row drops under the title instead of crushing it
     to nothing and painting over it. */
  flex: 0 1 auto;
  min-width: 0;
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
  font-weight: 400;
`,XF=u`
  padding: 0 var(--space-4) var(--space-4);
`,ZF=u`
  padding: 0 0 var(--space-3);
`,QF=({title:e,summary:t,defaultExpanded:n=!1,expanded:r,onExpandedChange:i,children:a,variant:o=`card`,"aria-label":s,className:l})=>{let u=o===`plain`,[d,f]=zF.useState(n),p=r!==void 0,m=p?r:d,h=zF.useRef(null),g=zF.useId(),_=zF.useId(),v=()=>{let e=!m;p||f(e),i?.(e)},{buttonProps:y}=Ir(s===void 0?{onPress:v}:{onPress:v,"aria-label":s},h);return(0,BF.jsxs)(`div`,{className:c(HF,u&&UF,l),children:[(0,BF.jsxs)(`button`,{...y,ref:h,id:_,type:`button`,className:c(WF,u&&GF),"aria-expanded":m,"aria-controls":g,children:[(0,BF.jsxs)(`span`,{className:KF,children:[(0,BF.jsx)(`span`,{className:qF,"data-expanded":m,children:(0,BF.jsx)(rO,{direction:VF})}),(0,BF.jsx)(`span`,{className:JF,children:e})]}),t===void 0?null:(0,BF.jsx)(`span`,{className:YF,children:t})]}),(0,BF.jsx)(`section`,{id:g,"aria-labelledby":_,hidden:!m,className:c(XF,u&&ZF),children:m?a:null})]})}})))()}function eI(){return(eI=t((()=>{l(),r(),G(),u`
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
`})))()}var tI,nI,rI,iI,aI,oI,sI;function cI(){return(cI=t((()=>{l(),Et(),r(),tI=G(),nI=u`
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
`,rI={neutral:{icon:Mt,css:u`
      border-color: var(--color-gray-400);
      background: var(--color-gray-50);
      --infobox-icon: var(--color-gray-500);
    `},info:{icon:jt,css:u`
      border-color: var(--color-blue-500);
      background: var(--color-blue-25);
      --infobox-icon: var(--color-blue-500);
    `},success:{icon:Tt,css:u`
      border-color: var(--color-green-600);
      background: var(--color-green-50);
      --infobox-icon: var(--color-green-600);
    `},warning:{icon:Ot,css:u`
      border-color: var(--color-yellow-700);
      background: var(--color-yellow-100);
      /* The yellow ramp is not contrast-safe as ink, so the icon stays grey. */
      --infobox-icon: var(--color-gray-700);
    `},danger:{icon:Ot,css:u`
      border-color: var(--color-crimson-600);
      background: var(--color-crimson-75);
      --infobox-icon: var(--color-crimson-600);
    `}},iI=u`
  display: inline-flex;
  align-items: center;
  flex: none;
  color: var(--infobox-icon);

  @media (max-width: ${479.98}px) {
    float: left;
    margin-right: var(--space-3);
  }
`,aI=u`
  flex: 1;
`,oI=u`
  display: block;
  margin-bottom: var(--space-2);
  color: var(--color-gray-700);
  font-weight: 600;
`,sI=({tone:e=`info`,heading:t,children:n,announce:r=!1,className:i})=>{let{icon:a,css:o}=rI[e];return(0,tI.jsxs)(`div`,{className:c(nI,o,i),role:r?e===`warning`||e===`danger`?`alert`:`status`:void 0,children:[(0,tI.jsx)(`span`,{className:iI,"aria-hidden":`true`,children:(0,tI.jsx)(a,{})}),(0,tI.jsxs)(`div`,{className:aI,children:[t?(0,tI.jsx)(`strong`,{className:oI,children:t}):null,n]})]})}})))()}function lI(){return(lI=t((()=>{l(),uM(),r(),Ub(),zT(),yT(),G(),u`
  transform: translateY(-25%) rotate(45deg);
`,u`
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
  text-decoration: none;
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
`})))()}function uI(e,t,n){return n<=t?0:Math.min(100,Math.max(0,(e-t)/(n-t)*100))}var dI,fI,pI,mI,hI,gI,_I,vI,yI,bI,xI,SI;function CI(){return(CI=t((()=>{l(),r(),tv(),dI=G(),fI={neutral:u`
    background: var(--color-gray-400);
  `,success:u`
    background: var(--color-green-600);
  `,warning:u`
    background: var(--color-yellow-700);
  `,danger:u`
    background: var(--color-crimson-700);
  `},pI=u`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,mI=u`
  display: flex;
  justify-content: space-between;
  gap: var(--space-3);
  font-size: var(--font-size-1);
  color: var(--color-gray-600);
`,hI=u`
  color: var(--color-gray-700);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,gI=u`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: var(--color-gray-100);
  overflow: hidden;
`,_I=`div`,vI=u`
  position: absolute;
  inset: 0 auto 0 0;
  border-radius: 999px;
  transition: width 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,yI=u`
  overflow: visible;
`,bI=u`
  position: absolute;
  top: -2px;
  bottom: -2px;
  width: 2px;
  background: var(--color-gray-600);
`,xI=({as:e,className:t,fillPct:n,thresholdPct:r,tickClassName:i,tone:a})=>(0,dI.jsxs)(e,{className:t,"aria-hidden":`true`,children:[(0,dI.jsx)(`span`,{className:c(vI,fI[a],u`
          width: ${n}%;
        `)}),r===null?null:(0,dI.jsx)(`span`,{className:c(i,u`
            left: ${r}%;
          `)})]}),SI=({value:e,minValue:t=0,maxValue:n,label:r,valueLabel:i,threshold:a,tone:o=`neutral`,kind:s=`measure`,showLabel:l=!0,className:u})=>{let{progressBarProps:d,labelProps:f}=ev({label:r,value:e,minValue:t,maxValue:n,...Y({valueLabel:i}),...l?{}:{"aria-label":r}}),p=uI(e,t,n),m=typeof a==`number`?uI(a,t,n):null;return(0,dI.jsxs)(`div`,{...d,role:s===`progress`?`progressbar`:`meter`,className:c(pI,u),children:[l?(0,dI.jsxs)(`div`,{className:mI,children:[(0,dI.jsx)(`span`,{...f,children:r}),i?(0,dI.jsx)(`span`,{className:hI,children:i}):null]}):null,(0,dI.jsx)(xI,{as:_I,className:c(gI,m!==null&&yI),fillPct:p,thresholdPct:m,tickClassName:bI,tone:o})]})},u`
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
`})))()}function wI(){return(wI=t((()=>{l(),Et(),r(),oF(),dw(),NT(),zT(),yT(),G(),u`
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
`})))()}function TI(){return(TI=t((()=>{l(),Et(),r(),lI(),oO(),G(),u`
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
`})))()}function EI(){return(EI=t((()=>{l(),r(),Ub(),zT(),G(),u`
  font-weight: 700;
`,u`
  padding: var(--space-3) var(--space-4);
  max-width: 320px;
  font-size: var(--font-size-1);
  color: var(--color-gray-700);
  line-height: 1.4;
`})))()}var DI,OI;function kI(){return(kI=t((()=>{Et(),DI={done:`success`,current:`info`,"action-needed":`warning`,failed:`danger`,superseded:`neutral`,upcoming:`neutral`},OI={done:Tt,current:Ct,"action-needed":Ot,failed:kt,superseded:At,upcoming:null}})))()}var AI,jI,MI;function NI(){return(NI=t((()=>{r(),aF(),kI(),AI=G(),jI={default:14,compact:12},MI=({state:e,children:t,size:n=`default`,className:r})=>{let i=OI[e],a=i?(0,AI.jsx)(i,{size:jI[n]}):void 0;return(0,AI.jsx)(iF,{tone:DI[e],size:n,...pb(i,{icon:a}),...pb(r,{className:r}),children:t})}})))()}var PI,FI,II,LI,RI,zI;function BI(){return(BI=t((()=>{l(),r(),kI(),PI=G(),FI=24,II=u`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin: 0;
  font-size: var(--font-size-4);
  font-weight: 600;
  line-height: 1.2;
`,LI={done:u`
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
  `},RI=u`
  display: inline-flex;
  align-items: center;
  flex: none;
`,zI=({state:e,children:t,className:n})=>{let r=OI[e];return(0,PI.jsxs)(`p`,{className:c(II,LI[e],n),children:[r?(0,PI.jsx)(`span`,{className:RI,"aria-hidden":`true`,children:(0,PI.jsx)(r,{size:FI})}):null,(0,PI.jsx)(`span`,{children:t})]})}})))()}function VI(){return(VI=t((()=>{l(),r(),G(),u`
  white-space: nowrap;
`,u`
  white-space: nowrap;
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`})))()}function HI(e){let t=Math.min(...e),n=Math.max(...e)-t||1,r=nL/(e.length-1);return e.map((e,i)=>`${i*r},${rL-(e-t)/n*rL}`).join(` `)}var UI,WI,GI,KI,qI,JI,YI,XI,ZI,QI,$I,eL,tL,nL,rL,iL;function aL(){return(aL=t((()=>{l(),Et(),r(),UI=G(),WI=u`
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
`,GI={neutral:void 0,success:u`
    border-color: var(--color-green-100);
    background: var(--color-green-75);
  `},KI={neutral:void 0,success:u`
    color: var(--color-green-700);
  `},qI=u`
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
`,JI=u`
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  display: inline-flex;
  color: var(--color-gray-400);
`,YI=u`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  /* Room for the corner arrow so it never overlaps a wide value. */
  padding-right: var(--space-5);
`,XI=u`
  font-size: var(--font-size-5);
  font-weight: 700;
  line-height: 1;
  color: var(--color-gray-700);
  font-variant-numeric: tabular-nums;
`,ZI=u`
  color: var(--color-crimson-700);
`,QI=u`
  font-size: var(--font-size-1);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
`,$I={positive:u`
    color: var(--color-green-700);
  `,negative:u`
    color: var(--color-crimson-700);
  `,neutral:u`
    color: var(--color-gray-500);
  `},eL=u`
  flex: none;
  width: 4rem;
  height: 1.25rem;
  color: var(--color-gray-400);
`,tL=u`
  font-size: var(--font-size-1);
  color: var(--color-gray-500);
`,nL=64,rL=20,iL=({label:e,value:t,alertWhenNonZero:n=!1,tone:r=`neutral`,href:i,ariaLabel:a,delta:o,deltaTone:s=`neutral`,trend:l})=>{let u=n&&typeof t==`number`&&t>0,d=(0,UI.jsxs)(UI.Fragment,{children:[(0,UI.jsxs)(`span`,{className:YI,children:[(0,UI.jsx)(`span`,{className:c(XI,KI[r],u&&ZI),children:t}),o===void 0?null:(0,UI.jsx)(`span`,{className:c(QI,$I[s]),children:o}),l&&l.length>1?(0,UI.jsx)(`svg`,{className:eL,viewBox:`0 0 ${nL} ${rL}`,"aria-hidden":`true`,children:(0,UI.jsx)(`polyline`,{points:HI(l),fill:`none`,stroke:`currentColor`,strokeWidth:1.5,strokeLinecap:`round`,strokeLinejoin:`round`})}):null]}),(0,UI.jsx)(`span`,{className:tL,children:e})]});return i?(0,UI.jsxs)(`a`,{className:c(WI,GI[r],qI),href:i,"aria-label":a,children:[d,(0,UI.jsx)(`span`,{className:JI,"aria-hidden":`true`,children:(0,UI.jsx)(Dt,{size:16})})]}):(0,UI.jsx)(`div`,{className:c(WI,GI[r]),"aria-label":a,role:a?`group`:void 0,children:d})}})))()}function oL(e,t){let{min:n,max:r,gap:i}=uL[t],a=`(100% - ${e-1} * ${i}) / ${e}`;return u`
    gap: ${i};
    /* The percentage floor and the tiles' min-width keep the column count out of the list's
       intrinsic width, which grid and flex ancestors pass on rather than shrink below. */
    grid-template-columns: repeat(auto-fill, minmax(max(${n}, ${a}), 1fr));
    max-width: calc(${e} * ${r} + (${e} - 1) * ${i});

    > li {
      min-width: 0;
    }
  `}var sL,cL,lL,uL,dL,fL;function pL(){return(pL=t((()=>{l(),sL=e(r()),cL=G(),lL=4,uL={default:{min:`10rem`,max:`18rem`,gap:`var(--space-4)`},compact:{min:`9rem`,max:`13rem`,gap:`var(--space-3)`}},dL=u`
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
`,fL=({children:e,ariaLabel:t,maxColumns:n=lL,size:r=`default`})=>(0,cL.jsx)(`ul`,{className:c(dL,oL(n,r)),role:`list`,"aria-label":t,children:sL.Children.map(e,(e,t)=>(0,cL.jsx)(`li`,{children:e},t))})})))()}function mL(e){return u`
    left: ${e};
  `}var hL,gL,_L,vL,yL,bL,xL,SL,CL,wL,TL,EL,DL,OL,kL,AL,jL,ML,NL,PL,FL,IL,LL,RL,zL,BL,VL,HL,UL,WL,GL,KL,qL,JL,YL,XL;function ZL(){return(ZL=t((()=>{l(),hL=`3rem`,gL=u`
  position: relative;
`,_L=u`
  overflow-x: auto;
`,vL=u`
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-2);
`,yL=u`
  table-layout: fixed;
`,bL=u`
  font-size: var(--font-size-1);
`,xL=u`
  text-align: start;
  padding-bottom: var(--space-3);
  color: var(--color-gray-500);
  font-size: var(--font-size-1);
`,SL=u`
  text-align: start;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  vertical-align: top;
`,CL=u`
  padding: var(--space-2) var(--space-3);
`,wL=u`
  color: var(--color-gray-500);
  font-weight: 600;
  white-space: nowrap;
`,TL=u`
  color: var(--color-gray-700);
`,EL=u`
  white-space: nowrap;
`,DL=u`
  white-space: normal;
`,OL=u`
  color: var(--color-gray-500);
`,kL=u`
  width: auto;
`,AL={start:u`
    text-align: start;
  `,center:u`
    text-align: center;
  `,end:u`
    text-align: end;
    font-variant-numeric: tabular-nums;
  `},jL=u`
  & tbody tr:hover > * {
    background: var(--color-clear-100);
  }
`,ML=u`
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
`,NL=u`
  left: 0;
  background: linear-gradient(
    to right,
    var(--table-fade-color, var(--color-clear-50)),
    transparent
  );
`,PL=u`
  right: 0;
  background: linear-gradient(to left, var(--table-fade-color, var(--color-clear-50)), transparent);
`,FL=u`
  opacity: 1;
`,IL=u`
  position: sticky;
  z-index: 1;
  background: var(--table-sticky-bg, var(--color-clear-50));
`,LL=u`
  box-shadow: 6px 0 6px -6px rgba(10, 15, 23, 0.25);
`,RL=u`
  /* An auto table layout treats a width as a preference and shrinks the column to its content
     when the row is tight, which slides the pinned column off its sticky offset and over the
     neighbouring column. A min-width is the floor that offset needs. */
  width: ${hL};
  min-width: ${hL};
  padding-right: 0;
`,zL=u`
  width: ${hL};
`,BL=u`
  position: relative;
  display: inline-flex;
  cursor: pointer;

  &[data-disabled="true"] {
    cursor: not-allowed;
  }

  & input:focus-visible + span {
    box-shadow: 0 0 0 var(--focus-ring-width) rgba(8, 69, 122, 0.18);
  }
`,VL=u`
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
`,HL=u`
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
`,UL=u`
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
`,WL=u`
  display: inline-flex;
  transition: transform 0.15s ease;

  &[data-expanded="true"] {
    transform: rotate(90deg);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,GL=u`
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-clear-300);
  background: var(--color-clear-100);
  color: var(--color-gray-700);
`,KL=u`
  padding: var(--space-4) var(--space-4) var(--space-2);
  border-bottom: 1px solid var(--color-clear-300);
  color: var(--color-gray-700);
  font-size: var(--font-size-1);
  font-weight: 600;
  text-align: start;
`,qL=u`
  display: none;
`,JL=u`
  display: none;
`,YL=u`
  display: contents;
`,XL=u`
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

    & tr[data-table-group="true"] {
      padding: var(--space-3) 0 0;
      border: 0;
    }

    & th[data-table-group="true"] {
      display: block;
      padding: 0;
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
`})))()}function QL(e){return typeof e==`number`?`${e}px`:e}function $L(e){return u`
    width: ${e};
  `}function eR(e){return u`
    min-width: ${QL(e)};
  `}function tR(e){return e.width!==void 0||e.grow===void 0||e.grow===!1?0:e.grow===!0?1:Math.max(e.grow,0)}function nR(e){return e.align===void 0?void 0:AL[e.align]}function rR(e){if(e.nowrap!==void 0)return e.nowrap?EL:DL}function iR(e){let{onSort:t,sortDirection:n}=e;return(0,Q.jsxs)(`button`,{className:VL,onClick:()=>t(n===`ascending`?`descending`:`ascending`),type:`button`,children:[(0,Q.jsx)(`span`,{children:e.header}),(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:HL,"data-direction":n??void 0})]})}function aR(e){return e===0?`0`:`calc(${hL} * ${e})`}function oR({isChecked:e,isDisabled:t=!1,isIndeterminate:n=!1,label:r,onChange:i}){let a=(0,cR.useRef)(null);return(0,cR.useEffect)(()=>{a.current!==null&&(a.current.indeterminate=n)},[n]),(0,Q.jsxs)(`label`,{className:BL,"data-disabled":t?`true`:`false`,children:[(0,Q.jsx)(`input`,{"aria-label":r,checked:e,className:qS,disabled:t,onChange:e=>i(e.target.checked),ref:a,type:`checkbox`}),(0,Q.jsxs)(`span`,{"aria-hidden":`true`,className:HS(lR,uR),"data-disabled":t?`true`:`false`,"data-indeterminate":n?`true`:`false`,"data-selected":e?`true`:`false`,children:[(0,Q.jsx)(`span`,{className:c(nC,iC,e&&!n&&rC)}),(0,Q.jsx)(`span`,{className:c(nC,aC,n&&rC)})]})]})}function sR({columns:e,rows:t,rowKey:n,caption:r,showCaption:a=!1,labelledBy:o,rowGroup:s,density:l=`comfortable`,emptyState:u,overflowCue:d=!0,stickyFirstColumn:f=!1,responsive:p,rowHover:m=!1,expandableRow:h,selection:g,className:_}){let{t:v}=i(`shared-module`),y=(0,cR.useRef)(null),b=(0,cR.useId)(),[x,S]=(0,cR.useState)(()=>new Set),[C,w]=(0,cR.useState)({start:!1,end:!1}),T=p===`stack`,E=g!==void 0,D=h!==void 0,O=+!!E+ +!!D,k=e.length+O,A=l===`compact`,j=d||f;(0,cR.useEffect)(()=>{let e=y.current;if(!j||e===null)return;let t=()=>{let t=Math.abs(e.scrollLeft),n=e.scrollWidth-e.clientWidth;w(e=>{let r=t>1,i=n-t>1;return e.start===r&&e.end===i?e:{start:r,end:i}})};t(),e.addEventListener(`scroll`,t,{passive:!0});let n=typeof ResizeObserver>`u`?null:new ResizeObserver(t);n?.observe(e);let r=e.firstElementChild;return r!==null&&n?.observe(r),()=>{e.removeEventListener(`scroll`,t),n?.disconnect()}},[j]);let M=e.some(e=>e.width!==void 0),N=e.map(e=>tR(e)),P=N.reduce((e,t)=>e+t,0),F=new Set(N.filter(e=>e>0)).size>1,I=e.flatMap(e=>e.width===void 0?[]:[QL(e.width)]),L=M||P>0||O>0,R=(e,t)=>{if(e.width!==void 0)return $L(QL(e.width));let n=N[t]??0;if(n!==0)return M?F?$L(`calc((100% - (${I.join(` + `)})) * ${n} / ${P})`):kL:$L(`${Number((n/P*100).toFixed(4))}%`)},z=e.map((e,t)=>({col:R(e,t),cell:c(M||e.minWidth===void 0?void 0:eR(e.minWidth),rR(e),nR(e))})),B=e=>f?c(IL,mL(aR(e)),C.start&&LL):void 0,ee=B(0),te=B(+!!E),V=B(O),ne=c(SL,A&&CL),re=u===void 0?v(`table.noRows`):u,ie=T?XL:void 0,ae=new Set(g?.selectedKeys??[]),oe=t.flatMap((e,t)=>g?.isRowSelectable?.(e)??!0?[String(n(e,t))]:[]),se=oe.filter(e=>ae.has(e)).length,ce=oe.length>0&&se===oe.length,le=e=>{let t=new Set(ae);for(let n of oe)e?t.add(n):t.delete(n);g?.onChange(t)},ue=(e,t)=>{let n=new Set(ae);t?n.add(e):n.delete(e),g?.onChange(n)},de=e=>{S(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},fe=(e,t)=>T?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:qL,"data-table-stack-label":`true`,children:e.header}),(0,Q.jsx)(`span`,{className:YL,"data-table-stack-value":`true`,children:e.cell(t)})]}):e.cell(t);return(0,Q.jsxs)(`div`,{className:c(gL,ie,_),children:[(0,Q.jsx)(`div`,{className:_L,ref:y,children:(0,Q.jsxs)(`table`,{className:c(vL,M&&yL,A&&bL,m&&jL),role:T?`table`:void 0,"aria-labelledby":o,children:[o===void 0?a?(0,Q.jsx)(`caption`,{className:xL,children:r}):(0,Q.jsx)(vt,{elementType:`caption`,children:r}):null,L?(0,Q.jsxs)(`colgroup`,{children:[E?(0,Q.jsx)(`col`,{className:zL}):null,D?(0,Q.jsx)(`col`,{className:zL}):null,z.map((e,t)=>(0,Q.jsx)(`col`,{className:e.col},t))]}):null,(0,Q.jsx)(`thead`,{role:T?`rowgroup`:void 0,children:(0,Q.jsxs)(`tr`,{role:T?`row`:void 0,children:[E?(0,Q.jsx)(`th`,{className:c(ne,wL,RL,ee),role:T?`columnheader`:void 0,scope:`col`,children:(0,Q.jsx)(oR,{isChecked:ce,isDisabled:oe.length===0,isIndeterminate:se>0&&!ce,label:g.selectAllLabel??v(`table.selectAllRows`),onChange:le})}):null,D?(0,Q.jsx)(`th`,{className:c(ne,wL,RL,te),role:T?`columnheader`:void 0,scope:`col`,children:(0,Q.jsx)(vt,{elementType:fR,children:v(`table.detailsColumn`)})}):null,e.map((e,t)=>(0,Q.jsx)(`th`,{"aria-sort":e.onSort===void 0?void 0:e.sortDirection??`none`,className:c(ne,wL,z[t]?.cell,t===0?V:void 0),role:T?`columnheader`:void 0,scope:`col`,children:e.onSort===void 0?e.header:iR({...e,onSort:e.onSort})},t))]})}),(0,Q.jsx)(`tbody`,{role:T?`rowgroup`:void 0,children:t.length===0?re===null?null:(0,Q.jsx)(`tr`,{role:T?`row`:void 0,children:(0,Q.jsx)(`td`,{className:c(ne,TL,OL),colSpan:k,"data-table-detail":`true`,role:T?`cell`:void 0,children:re})}):t.map((r,i)=>{let a=n(r,i),o=h?.(r)??null,l=x.has(String(a)),u=`${b}-${i}`,d=s?.(r),f=i>0?t[i-1]:void 0,p=d!==void 0&&(f===void 0||s?.(f).key!==d.key);return(0,Q.jsxs)(cR.Fragment,{children:[p?(0,Q.jsx)(`tr`,{"data-table-group":`true`,role:T?`row`:void 0,children:(0,Q.jsx)(`th`,{className:KL,colSpan:k,"data-table-group":`true`,role:T?`rowheader`:void 0,scope:`colgroup`,children:d.label})}):null,(0,Q.jsxs)(`tr`,{role:T?`row`:void 0,children:[E?(0,Q.jsx)(`td`,{className:c(ne,TL,RL,ee),"data-table-control":`true`,role:T?`cell`:void 0,children:(0,Q.jsx)(oR,{isChecked:ae.has(String(a)),isDisabled:!(g.isRowSelectable?.(r)??!0),label:g.rowLabel?.(r)??v(`table.selectRow`),onChange:e=>ue(String(a),e)})}):null,D?(0,Q.jsx)(`td`,{className:c(ne,TL,RL,te),"data-table-control":`true`,role:T?`cell`:void 0,children:o===null?null:(0,Q.jsxs)(`button`,{"aria-controls":l?u:void 0,"aria-expanded":l,"aria-label":v(l?`table.collapseRow`:`table.expandRow`),className:UL,"data-table-expand":`true`,onClick:()=>de(String(a)),type:`button`,children:[(0,Q.jsx)(`span`,{className:WL,"data-expanded":l?`true`:`false`,children:(0,Q.jsx)(rO,{direction:dR})}),T?(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:JL,"data-table-expand-label":`true`,children:v(l?`table.collapseRow`:`table.expandRow`)}):null]})}):null,e.map((e,t)=>(0,Q.jsx)(`td`,{className:c(ne,TL,z[t]?.cell,t===0?V:void 0),role:T?`cell`:void 0,children:fe(e,r)},t))]}),o!==null&&l?(0,Q.jsx)(`tr`,{role:T?`row`:void 0,children:(0,Q.jsx)(`td`,{className:c(GL,A&&CL),colSpan:k,"data-table-detail":`true`,id:u,role:T?`cell`:void 0,children:o})}):null]},a)})})]})}),d?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:c(ML,NL,C.start&&FL)}),(0,Q.jsx)(`span`,{"aria-hidden":`true`,className:c(ML,PL,C.end&&FL)})]}):null]})}var cR,Q,lR,uR,dR,fR;function pR(){return(pR=t((()=>{l(),cR=e(r()),Ee(),a(),sC(),oO(),ZL(),Q=G(),lR=`md`,uR=`checkbox`,dR=`right`,fR=`span`})))()}function mR(){return(mR=t((()=>{l(),s`
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
`})))()}var hR,gR;function _R(){return(_R=t((()=>{hR=r(),gR=(0,hR.createContext)({})})))()}function vR(e){let t=(0,yR.useRef)(null);return t.current===null&&(t.current=e()),t.current}var yR;function bR(){return(bR=t((()=>{yR=r()})))()}var xR;function SR(){return(SR=t((()=>{xR=typeof window<`u`})))()}var CR,wR;function TR(){return(TR=t((()=>{CR=r(),SR(),wR=xR?CR.useLayoutEffect:CR.useEffect})))()}var ER,DR;function OR(){return(OR=t((()=>{ER=r(),DR=(0,ER.createContext)(null)})))()}function kR(e,t){e.indexOf(t)===-1&&e.push(t)}function AR(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var jR;function MR(){return(MR=t((()=>{jR=(e,t,n)=>n>t?t:n<e?e:n})))()}var NR,PR;function FR(){return(FR=t((()=>{NR=()=>{},PR=()=>{}})))()}var IR;function LR(){return(LR=t((()=>{IR={}})))()}var RR;function zR(){return(zR=t((()=>{RR=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)})))()}var BR;function VR(){return(VR=t((()=>{BR=e=>typeof e==`object`&&!!e})))()}var HR;function UR(){return(UR=t((()=>{HR=e=>/^0[^.\s]+$/u.test(e)})))()}function WR(e){let t;return()=>(t===void 0&&(t=e()),t)}var GR;function KR(){return(KR=t((()=>{GR=e=>e})))()}var qR;function JR(){return(JR=t((()=>{qR=(...e)=>e.reduce((e,t)=>n=>t(e(n)))})))()}var YR;function XR(){return(XR=t((()=>{YR=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1}})))()}var ZR;function QR(){return(QR=t((()=>{ZR=class{constructor(){this.subscriptions=[]}add(e){return kR(this.subscriptions,e),()=>AR(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}})))()}var $R,ez;function tz(){return(tz=t((()=>{$R=e=>e*1e3,ez=e=>e/1e3})))()}var nz;function rz(){return(rz=t((()=>{nz=(e,t)=>t?1e3/t*e:0})))()}function iz(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=oz(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>sz&&++s<cz);return o}function az(e,t,n,r){if(e===t&&n===r)return GR;let i=t=>iz(t,0,1,e,n);return e=>e===0||e===1?e:oz(i(e),t,r)}var oz,sz,cz;function lz(){return(lz=t((()=>{KR(),oz=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,sz=1e-7,cz=12})))()}var uz;function dz(){return(dz=t((()=>{uz=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2})))()}var fz;function pz(){return(pz=t((()=>{fz=e=>t=>1-e(1-t)})))()}var mz,hz,gz;function _z(){return(_z=t((()=>{lz(),dz(),pz(),mz=az(.33,1.53,.69,.99),hz=fz(mz),gz=uz(hz)})))()}var vz;function yz(){return(yz=t((()=>{_z(),vz=e=>e>=1?1:(e*=2)<1?.5*hz(e):.5*(2-2**(-10*(e-1)))})))()}var bz,xz,Sz;function Cz(){return(Cz=t((()=>{dz(),pz(),bz=e=>1-Math.sin(Math.acos(e)),xz=fz(bz),Sz=uz(bz)})))()}var wz,Tz,Ez;function Dz(){return(Dz=t((()=>{lz(),wz=az(.42,0,1,1),Tz=az(0,0,.58,1),Ez=az(.42,0,.58,1)})))()}var Oz;function kz(){return(kz=t((()=>{Oz=e=>Array.isArray(e)&&typeof e[0]!=`number`})))()}var Az;function jz(){return(jz=t((()=>{Az=e=>Array.isArray(e)&&typeof e[0]==`number`})))()}var Mz,Nz,Pz;function Fz(){return(Fz=t((()=>{FR(),KR(),yz(),_z(),Cz(),lz(),Dz(),jz(),Mz={linear:GR,easeIn:wz,easeInOut:Ez,easeOut:Tz,circIn:bz,circInOut:Sz,circOut:xz,backIn:hz,backInOut:gz,backOut:mz,anticipate:vz},Nz=e=>typeof e==`string`,Pz=e=>{if(Az(e)){PR(e.length===4,`Cubic bezier arrays must contain four numerical values.`,`cubic-bezier-length`);let[t,n,r,i]=e;return az(t,n,r,i)}return Nz(e)?(PR(Mz[e]!==void 0,`Invalid easing type '${e}'`,`invalid-easing-type`),Mz[e]):e}})))()}var Iz;function Lz(){return(Lz=t((()=>{Iz=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`]})))()}function Rz(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}function zz(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Iz.reduce((e,t)=>(e[t]=Rz(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=IR.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Bz),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Iz.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Iz.length;t++)o[Iz[t]].cancel(e)},state:i,steps:o}}var Bz;function Vz(){return(Vz=t((()=>{LR(),Lz(),Bz=40})))()}var Hz,Uz,Wz,Gz;function Kz(){return(Kz=t((()=>{KR(),Vz(),{schedule:Hz,cancel:Uz,state:Wz,steps:Gz}=zz(typeof requestAnimationFrame<`u`?requestAnimationFrame:GR,!0)})))()}function qz(){Jz=void 0}var Jz,Yz;function Xz(){return(Xz=t((()=>{LR(),Kz(),Yz={now:()=>(Jz===void 0&&Yz.set(Wz.isProcessing||IR.useManualTiming?Wz.timestamp:performance.now()),Jz),set:e=>{Jz=e,queueMicrotask(qz)}}})))()}function Zz(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var Qz,$z,eB,tB,nB;function rB(){return(rB=t((()=>{Qz=e=>t=>typeof t==`string`&&t.startsWith(e),$z=Qz(`--`),eB=Qz(`var(--`),tB=e=>eB(e)?nB.test(e.split(`/*`)[0].trim()):!1,nB=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu})))()}var iB,aB,oB;function sB(){return(sB=t((()=>{MR(),iB={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},aB={...iB,transform:e=>jR(0,1,e)},oB={...iB,default:1}})))()}var cB;function lB(){return(lB=t((()=>{cB=e=>Math.round(e*1e5)/1e5})))()}var uB;function dB(){return(dB=t((()=>{uB=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu})))()}function fB(e){return e==null}var pB;function mB(){return(mB=t((()=>{pB=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu})))()}var hB,gB;function _B(){return(_B=t((()=>{dB(),mB(),hB=(e,t)=>n=>!!(typeof n==`string`&&pB.test(n)&&n.startsWith(e)||t&&!fB(n)&&Object.prototype.hasOwnProperty.call(n,t)),gB=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(uB);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}}})))()}var vB,yB,bB;function xB(){return(xB=t((()=>{MR(),sB(),lB(),_B(),vB=e=>jR(0,255,e),yB={...iB,transform:e=>Math.round(vB(e))},bB={test:hB(`rgb`,`red`),parse:gB(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+yB.transform(e)+`, `+yB.transform(t)+`, `+yB.transform(n)+`, `+cB(aB.transform(r))+`)`}})))()}function SB(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var CB;function wB(){return(wB=t((()=>{xB(),_B(),CB={test:hB(`#`),parse:SB,transform:bB.transform}})))()}var TB,EB,DB,$,OB,kB,AB;function jB(){return(jB=t((()=>{TB=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),EB=TB(`deg`),DB=TB(`%`),$=TB(`px`),OB=TB(`vh`),kB=TB(`vw`),AB={...DB,parse:e=>DB.parse(e)/100,transform:e=>DB.transform(e*100)}})))()}var MB;function NB(){return(NB=t((()=>{sB(),jB(),lB(),_B(),MB={test:hB(`hsl`,`hue`),parse:gB(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+DB.transform(cB(t))+`, `+DB.transform(cB(n))+`, `+cB(aB.transform(r))+`)`}})))()}var PB;function FB(){return(FB=t((()=>{wB(),NB(),xB(),PB={test:e=>bB.test(e)||CB.test(e)||MB.test(e),parse:e=>bB.test(e)?bB.parse(e):MB.test(e)?MB.parse(e):CB.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?bB.transform(e):MB.transform(e),getAnimatableNone:e=>{let t=PB.parse(e);return t.alpha=0,PB.transform(t)}}})))()}var IB;function LB(){return(LB=t((()=>{IB=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu})))()}function RB(e){return isNaN(e)&&typeof e==`string`&&(e.match(uB)?.length||0)+(e.match(IB)?.length||0)>0}function zB(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(YB,e=>(PB.test(e)?(r.color.push(a),i.push(GB),n.push(PB.parse(e))):e.startsWith(qB)?(r.var.push(a),i.push(KB),n.push(e)):(r.number.push(a),i.push(WB),n.push(parseFloat(e))),++a,JB)).split(JB),indexes:r,types:i}}function BB(e){return zB(e).values}function VB({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===WB?cB(r[a]):e===GB?PB.transform(r[a]):r[a]}return i}}function HB(e){return VB(zB(e))}function UB(e){let t=zB(e);return VB(t)(t.values.map((e,n)=>ZB(e,t.split[n])))}var WB,GB,KB,qB,JB,YB,XB,ZB,QB;function $B(){return($B=t((()=>{FB(),LB(),dB(),lB(),WB=`number`,GB=`color`,KB=`var`,qB=`var(`,JB="${}",YB=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu,XB=e=>typeof e==`number`?0:PB.test(e)?PB.getAnimatableNone(e):e,ZB=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:XB(e),QB={test:RB,parse:BB,createTransformer:HB,getAnimatableNone:UB}})))()}function eV(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function tV({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=eV(s,r,e+1/3),a=eV(s,r,e),o=eV(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function nV(e,t){return n=>n>0?t:e}var rV;function iV(){return(iV=t((()=>{rV=(e,t,n)=>e+(t-e)*n})))()}function aV(e){let t=cV(e);if(NR(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,`color-not-animatable`),!t)return!1;let n=t.parse(e);return t===MB&&(n=tV(n)),n}var oV,sV,cV,lV;function uV(){return(uV=t((()=>{FR(),wB(),NB(),xB(),iV(),oV=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},sV=[CB,bB,MB],cV=e=>sV.find(t=>t.test(e)),lV=(e,t)=>{let n=aV(e),r=aV(t);if(!n||!r)return nV(e,t);let i={...n};return e=>(i.red=oV(n.red,r.red,e),i.green=oV(n.green,r.green,e),i.blue=oV(n.blue,r.blue,e),i.alpha=rV(n.alpha,r.alpha,e),bB.transform(i))}})))()}function dV(e,t){return fV.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}var fV;function pV(){return(pV=t((()=>{fV=new Set([`none`,`hidden`])})))()}function mV(e,t){return n=>rV(e,t,n)}function hV(e){return typeof e==`number`?mV:typeof e==`string`?tB(e)?nV:PB.test(e)?lV:yV:Array.isArray(e)?gV:typeof e==`object`?PB.test(e)?lV:_V:nV}function gV(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>hV(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function _V(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hV(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function vV(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var yV;function bV(){return(bV=t((()=>{JR(),FR(),rB(),FB(),$B(),uV(),iV(),pV(),yV=(e,t)=>{let n=QB.createTransformer(t),r=zB(e),i=zB(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?fV.has(e)&&!i.values.length||fV.has(t)&&!r.values.length?dV(e,t):qR(gV(vV(r,i),i.values),n):(NR(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,`complex-values-different`),nV(e,t))}})))()}function xV(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?rV(e,t,n):hV(e)(e,t)}function SV(){return(SV=t((()=>{bV(),iV()})))()}var CV;function wV(){return(wV=t((()=>{Xz(),Kz(),CV=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>Hz.update(t,e),stop:()=>Uz(t),now:()=>Wz.isProcessing?Wz.timestamp:Yz.now()}}})))()}var TV;function EV(){return(EV=t((()=>{TV=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`}})))()}function DV(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}var OV;function kV(){return(kV=t((()=>{OV=2e4})))()}function AV(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(DV(r),OV);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:ez(i)}}function jV(){return(jV=t((()=>{tz(),kV()})))()}function MV(e,t){return e*Math.sqrt(1-t*t)}function NV(e,t,n){let r=n;for(let n=1;n<zV;n++)r-=e(r)/t(r);return r}function PV({duration:e=RV.duration,bounce:t=RV.bounce,velocity:n=RV.velocity,mass:r=RV.mass}){let i,a;NR(e<=$R(RV.maxDuration),`Spring duration must be 10 seconds or less`,`spring-duration-limit`);let o=1-t;o=jR(RV.minDamping,RV.maxDamping,o),e=jR(RV.minDuration,RV.maxDuration,ez(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=MV(t,o),c=Math.exp(-i);return BV-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=MV(t**2,o);return(-i(t)+BV>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=NV(i,a,s);if(e=$R(e),isNaN(c))return{stiffness:RV.stiffness,damping:RV.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}function FV(e,t){return t.some(t=>e[t]!==void 0)}function IV(e){let t={velocity:RV.velocity,stiffness:RV.stiffness,damping:RV.damping,mass:RV.mass,isResolvedFromDuration:!1,...e};if(!FV(e,HV)&&FV(e,VV)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*jR(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:RV.mass,stiffness:i,damping:a}}else{let n=PV({...e,velocity:0});t={...t,...n,mass:RV.mass},t.isResolvedFromDuration=!0}}return t}function LV(e=RV.visualDuration,t=RV.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=IV({...n,velocity:-ez(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=ez(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?RV.restSpeed.granular:RV.restSpeed.default,i||=v?RV.restDelta.granular:RV.restDelta.default;let y,b,x,S,C,w;if(h<1)x=MV(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},C=h*_*S+g*x,w=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+w*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let T={calculatedDuration:p&&d||null,velocity:e=>$R(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=$R(t*(C*n+w*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=$R(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(DV(T),OV),t=TV(t=>T.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return T}var RV,zV,BV,VV,HV;function UV(){return(UV=t((()=>{tz(),MR(),FR(),EV(),kV(),jV(),RV={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zV=12,BV=.001,VV=[`duration`,`bounce`],HV=[`stiffness`,`damping`,`mass`],LV.applyToOptions=e=>{let t=AV(e,100,LV);return e.ease=t.ease,e.duration=$R(t.duration),e.type=`keyframes`,e}})))()}function WV(e,t,n){let r=Math.max(t-GV,0);return nz(n-e(r),t-r)}var GV;function KV(){return(KV=t((()=>{rz(),GV=5})))()}function qV({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=LV({keyframes:[f.value,m(f.value)],velocity:WV(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function JV(){return(JV=t((()=>{UV(),KV()})))()}function YV(e,t,n){let r=[],i=n||IR.mix||xV,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);if(t){let e=Array.isArray(t)?t[n]||GR:t;a=qR(e,a)}r.push(a)}return r}function XV(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(PR(a===t.length,`Both input and output ranges must be the same length`,`range-length`),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=YV(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=YR(e[r],e[r+1],n);return s[r](i)};return n?t=>l(jR(e[0],e[a-1],t)):l}function ZV(){return(ZV=t((()=>{FR(),MR(),LR(),KR(),JR(),XR(),SV()})))()}function QV(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=YR(0,t,r);e.push(rV(n,1,i))}}function $V(){return($V=t((()=>{XR(),iV()})))()}function eH(e){let t=[0];return QV(t,e.length-1),t}function tH(){return(tH=t((()=>{$V()})))()}function nH(e,t){return e.map(e=>e*t)}function rH(e,t){return e.map(()=>t||Ez).splice(0,e.length-1)}function iH({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Oz(r)?r.map(Pz):Pz(r),a={done:!1,value:t[0]},o=XV(nH(n&&n.length===t.length?n:eH(t),e),t,{ease:Array.isArray(i)?i:rH(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}function aH(){return(aH=t((()=>{Dz(),kz(),Fz(),ZV(),tH()})))()}function oH(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(sH),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var sH;function cH(){return(cH=t((()=>{sH=e=>e!==null})))()}function lH(e){typeof e.type==`string`&&(e.type=uH[e.type])}var uH;function dH(){return(dH=t((()=>{JV(),aH(),UV(),uH={decay:qV,inertia:qV,tween:iH,keyframes:iH,spring:LV}})))()}var fH;function pH(){return(pH=t((()=>{fH=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}})))()}var mH,hH;function gH(){return(gH=t((()=>{JR(),MR(),tz(),Xz(),SV(),wV(),JV(),aH(),kV(),KV(),cH(),dH(),pH(),mH=e=>e/100,hH=class extends fH{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==Yz.now()&&this.tick(Yz.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;lH(e);let{type:t=iH,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||iH;s!==iH&&typeof o[0]!=`number`&&(this.mixKeyframes=qR(mH,xV(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=DV(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=jR(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==qV&&(b.value=oH(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return ez(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ez(e)}get time(){return ez(this.currentTime)}set time(e){e=$R(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return WV(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Yz.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=ez(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=CV,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(Yz.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}}})))()}function _H(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}function vH(e){return+!!e.includes(`scale`)}function yH(e,t){if(!e||e===`none`)return vH(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=OH,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=CH,i=t}if(!i)return vH(t);let a=r[t],o=i[1].split(`,`).map(bH);return typeof a==`function`?a(o):o[a]}function bH(e){return parseFloat(e.trim())}var xH,SH,CH,wH,TH,EH,DH,OH,kH;function AH(){return(AH=t((()=>{xH=e=>e*180/Math.PI,SH=e=>{let t=xH(Math.atan2(e[1],e[0]));return wH(t)},CH={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:SH,rotateZ:SH,skewX:e=>xH(Math.atan(e[1])),skewY:e=>xH(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},wH=e=>(e%=360,e<0&&(e+=360),e),TH=SH,EH=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),DH=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),OH={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:EH,scaleY:DH,scale:e=>(EH(e)+DH(e))/2,rotateX:e=>wH(xH(Math.atan2(e[6],e[5]))),rotateY:e=>wH(xH(Math.atan2(-e[2],e[0]))),rotateZ:TH,rotate:TH,skewX:e=>xH(Math.atan(e[4])),skewY:e=>xH(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2},kH=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return yH(n,t)}})))()}var jH,MH;function NH(){return(NH=t((()=>{jH=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],MH=new Set([...jH,`pathRotation`])})))()}function PH(e){let t=[];return LH.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var FH,IH,LH,RH;function zH(){return(zH=t((()=>{AH(),NH(),sB(),jB(),FH=e=>e===iB||e===$,IH=new Set([`x`,`y`,`z`]),LH=jH.filter(e=>!IH.has(e)),RH={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>yH(t,`x`),y:(e,{transform:t})=>yH(t,`y`)},RH.translateX=RH.x,RH.translateY=RH.y})))()}function BH(){if(GH){let e=Array.from(UH).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=PH(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}GH=!1,WH=!1,UH.forEach(e=>e.complete(KH)),UH.clear()}function VH(){UH.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(GH=!0)})}function HH(){KH=!0,VH(),BH(),KH=!1}var UH,WH,GH,KH,qH;function JH(){return(JH=t((()=>{zH(),Kz(),UH=new Set,WH=!1,GH=!1,KH=!1,qH=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(UH.add(this),WH||(WH=!0,Hz.read(VH),Hz.resolveKeyframes(BH))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}_H(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),UH.delete(this)}cancel(){this.state===`scheduled`&&(UH.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}}})))()}var YH;function XH(){return(XH=t((()=>{YH=e=>e.startsWith(`--`)})))()}function ZH(e,t,n){YH(t)?e.style.setProperty(t,n):e.style[t]=n}function QH(){return(QH=t((()=>{XH()})))()}var $H;function eU(){return(eU=t((()=>{$H={}})))()}function tU(e,t){let n=WR(e);return()=>$H[t]??n()}function nU(){return(nU=t((()=>{eU()})))()}var rU;function iU(){return(iU=t((()=>{nU(),rU=tU(()=>window.ScrollTimeline!==void 0,`scrollTimeline`)})))()}var aU;function oU(){return(oU=t((()=>{nU(),aU=tU(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`)})))()}var sU;function cU(){return(cU=t((()=>{sU=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`})))()}var lU;function uU(){return(uU=t((()=>{cU(),lU={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:sU([0,.65,.55,1]),circOut:sU([.55,0,1,.45]),backIn:sU([.31,.01,.66,-.59]),backOut:sU([.33,1.53,.69,.99])}})))()}function dU(e,t){if(e)return typeof e==`function`?aU()?TV(e,t):`ease-out`:Az(e)?sU(e):Array.isArray(e)?e.map(e=>dU(e,t)||lU.easeOut):lU[e]}function fU(){return(fU=t((()=>{jz(),oU(),EV(),cU(),uU()})))()}function pU(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=dU(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function mU(){return(mU=t((()=>{fU()})))()}function hU(e){return typeof e==`function`&&`applyToOptions`in e}function gU({type:e,...t}){return hU(e)&&aU()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}function _U(){return(_U=t((()=>{oU()})))()}var vU;function yU(){return(yU=t((()=>{FR(),tz(),KR(),QH(),iU(),cH(),pH(),mU(),_U(),vU=class extends fH{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,PR(typeof e.type!=`string`,`Mini animate() doesn't support "type" as a string.`,`mini-spring`);let c=gU(e);this.animation=pU(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=oH(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),ZH(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return ez(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+ez(e)}get time(){return ez(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=$R(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&rU()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),GR):r(this)}}})))()}function bU(e){return e in SU}function xU(e){typeof e.ease==`string`&&bU(e.ease)&&(e.ease=SU[e.ease])}var SU;function CU(){return(CU=t((()=>{Cz(),_z(),yz(),SU={anticipate:vz,backInOut:gz,circInOut:Sz}})))()}var wU,TU;function EU(){return(EU=t((()=>{MR(),Xz(),QH(),gH(),yU(),dH(),CU(),wU=10,TU=class extends vU{constructor(e){xU(e),lH(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new hH({...a,autoplay:!1}),s=Math.max(wU,Yz.now()-this.startTime),c=jR(0,wU,s-wU),l=o.sample(s).value,{name:u}=this.options;i&&u&&ZH(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}}})))()}var DU;function OU(){return(OU=t((()=>{$B(),DU=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(QB.test(e)||e===`0`)&&!e.startsWith(`url(`))})))()}function kU(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function AU(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=DU(i,t),s=DU(a,t);return NR(o===s,`You are trying to animate ${t} from "${i}" to "${a}". "${o?a:i}" is not an animatable value.`,`value-not-animatable`),!o||!s?!1:kU(e)||(n===`spring`||hU(n))&&r}function jU(){return(jU=t((()=>{FR(),OU()})))()}function MU(e){e.duration=0,e.type=`keyframes`}var NU;function PU(){return(PU=t((()=>{NU=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`])})))()}function FU(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&IU.test(e[t]))return!0;return!1}var IU;function LU(){return(LU=t((()=>{IU=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/})))()}function RU(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return BU()&&n&&(NU.has(n)||zU.has(n)&&FU(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var zU,BU;function VU(){return(VU=t((()=>{PU(),LU(),zU=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),BU=WR(()=>Object.hasOwnProperty.call(Element.prototype,`animate`))})))()}var HU,UU;function WU(){return(WU=t((()=>{LR(),KR(),Xz(),gH(),cH(),JH(),EU(),jU(),pH(),VU(),HU=40,UU=class extends fH{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Yz.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||qH;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=Yz.now();let u=!0;AU(e,i,a,o)||(u=!1,(IR.instantAnimations||!s)&&l?.(oH(e,n,t)),e[0]=e[e.length-1],MU(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>HU?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&RU(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new TU({...d,element:p})}catch{m=new hH(d)}else m=new hH(d);m.finished.then(()=>{this.notifyFinished()}).catch(GR),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),HH()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}})))()}function GU(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}function KU(e,t){return new XU(e,t)}var qU,JU,YU,XU;function ZU(){return(ZU=t((()=>{QR(),rz(),Xz(),Kz(),qU=30,JU=e=>!isNaN(parseFloat(e)),YU={current:void 0},XU=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=Yz.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Yz.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=JU(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new ZR);let n=this.events[e].add(t);return e===`change`?()=>{n(),Hz.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return YU.current&&YU.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=Yz.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qU)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,qU);return nz(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}})))()}function QU(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function $U(e,t){let n=e?.[t]??e?.default??e;return n===e?n:QU(n,e)}function eW(){return(eW=t((()=>{})))()}var tW,nW,rW,iW,aW;function oW(){return(oW=t((()=>{NH(),tW={type:`spring`,stiffness:500,damping:25,restSpeed:10},nW=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),rW={type:`keyframes`,duration:.8},iW={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},aW=(e,{keyframes:t})=>t.length>2?rW:MH.has(e)?e.startsWith(`scale`)?nW(t[1]):tW:iW})))()}function sW(e){for(let t in e)if(!cW.has(t))return!0;return!1}var cW;function lW(){return(lW=t((()=>{cW=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`])})))()}var uW;function dW(){return(dW=t((()=>{tz(),LR(),WU(),gH(),eW(),oW(),cH(),lW(),Kz(),uW=(e,t,n,r={},i,a)=>o=>{let s=$U(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=$R(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};sW(s)||Object.assign(u,aW(e,u)),u.duration&&=$R(u.duration),u.repeatDelay&&=$R(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(MU(u),u.delay===0&&(d=!0)),(IR.instantAnimations||IR.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,MU(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=oH(u.keyframes,s);if(e!==void 0){Hz.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new hH(u):new UU(u)}})))()}function fW(e){let t=mW.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function pW(e,t,n=1){PR(n<=hW,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,`max-css-var-depth`);let[r,i]=fW(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return RR(e)?parseFloat(e):e}return tB(i)?pW(i,t,n+1):i}var mW,hW;function gW(){return(gW=t((()=>{FR(),zR(),rB(),mW=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,hW=4})))()}function _W(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function vW(e,t,n,r){if(typeof t==`function`){let[i,a]=_W(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=_W(r);t=t(n===void 0?e.custom:n,i,a)}return t}function yW(e,t,n){let r=e.getProps();return vW(r,t,n===void 0?r.custom:n,e)}function bW(){return(bW=t((()=>{})))()}var xW;function SW(){return(SW=t((()=>{NH(),xW=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...jH])})))()}var CW;function wW(){return(wW=t((()=>{CW=e=>Array.isArray(e)})))()}function TW(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,KU(n))}function EW(e){return CW(e)?e[e.length-1]||0:e}function DW(e,t){let{transitionEnd:n={},transition:r={},...i}=yW(e,t)||{};i={...i,...n};for(let t in i)TW(e,t,EW(i[t]))}function OW(){return(OW=t((()=>{ZU(),bW(),wW()})))()}var kW;function AW(){return(AW=t((()=>{kW=e=>!!(e&&e.getVelocity)})))()}function jW(e){return!!(kW(e)&&e.add)}function MW(){return(MW=t((()=>{AW()})))()}function NW(e,t){let n=e.getValue(`willChange`);if(jW(n))return n.add(t);if(!n&&IR.WillChange){let n=new IR.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function PW(){return(PW=t((()=>{LR(),MW()})))()}function FW(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var IW,LW;function RW(){return(RW=t((()=>{IW=`framerAppearId`,LW=`data-`+FW(IW)})))()}function zW(e){return e.props[LW]}function BW(){return(BW=t((()=>{RW()})))()}function VW({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function HW(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?QU(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&VW(f,t))continue;let o={delay:n,...$U(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){Hz.update(()=>r.set(i));continue}let p=!1;if(UW&&window.MotionHandoffAnimation){let n=zW(e);if(n){let e=window.MotionHandoffAnimation(n,t,Hz);e!==null&&(o.startTime=e,p=!0)}}NW(e,t);let m=l??e.shouldReduceMotion;r.start(uW(t,r,i,m&&xW.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>Hz.update(()=>{o&&DW(e,o)});d.length?Promise.all(d).then(t):t()}return d}var UW;function WW(){return(WW=t((()=>{eW(),SW(),OW(),PW(),BW(),dW(),Kz(),UW=typeof window<`u`})))()}function GW(e,t,n={}){let r=yW(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(HW(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return KW(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function KW(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(GW(c,t,{...o,delay:n+(typeof r==`function`?0:r)+GU(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function qW(){return(qW=t((()=>{bW(),WW()})))()}function JW(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>GW(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=GW(e,t,n);else{let i=typeof t==`function`?yW(e,t,n.custom):t;r=Promise.all(HW(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}function YW(){return(YW=t((()=>{bW(),WW(),qW()})))()}var XW;function ZW(){return(ZW=t((()=>{XW={test:e=>e===`auto`,parse:e=>e}})))()}var QW;function $W(){return($W=t((()=>{QW=e=>t=>t.test(e)})))()}var eG,tG;function nG(){return(nG=t((()=>{ZW(),sB(),jB(),$W(),eG=[iB,$,DB,EB,kB,OB,XW],tG=e=>eG.find(QW(e))})))()}function rG(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||HR(e)}function iG(){return(iG=t((()=>{UR()})))()}function aG(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(uB)||[];if(!r)return e;let i=n.replace(r,``),a=+!!oG.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var oG,sG,cG;function lG(){return(lG=t((()=>{$B(),dB(),oG=new Set([`brightness`,`contrast`,`saturate`,`opacity`]),sG=/\b([a-z-]*)\(.*?\)/gu,cG={...QB,getAnimatableNone:e=>{let t=e.match(sG);return t?t.map(aG).join(` `):e}}})))()}var uG;function dG(){return(dG=t((()=>{$B(),uG={...QB,getAnimatableNone:e=>{let t=QB.parse(e);return QB.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}}})))()}var fG;function pG(){return(pG=t((()=>{sB(),fG={...iB,transform:Math.round}})))()}var mG;function hG(){return(hG=t((()=>{sB(),jB(),mG={rotate:EB,pathRotation:EB,rotateX:EB,rotateY:EB,rotateZ:EB,scale:oB,scaleX:oB,scaleY:oB,scaleZ:oB,skew:EB,skewX:EB,skewY:EB,distance:$,translateX:$,translateY:$,translateZ:$,x:$,y:$,z:$,perspective:$,transformPerspective:$,opacity:aB,originX:AB,originY:AB,originZ:$}})))()}var gG;function _G(){return(_G=t((()=>{pG(),sB(),jB(),hG(),gG={borderWidth:$,borderTopWidth:$,borderRightWidth:$,borderBottomWidth:$,borderLeftWidth:$,borderRadius:$,borderTopLeftRadius:$,borderTopRightRadius:$,borderBottomRightRadius:$,borderBottomLeftRadius:$,width:$,maxWidth:$,height:$,maxHeight:$,top:$,right:$,bottom:$,left:$,inset:$,insetBlock:$,insetBlockStart:$,insetBlockEnd:$,insetInline:$,insetInlineStart:$,insetInlineEnd:$,padding:$,paddingTop:$,paddingRight:$,paddingBottom:$,paddingLeft:$,paddingBlock:$,paddingBlockStart:$,paddingBlockEnd:$,paddingInline:$,paddingInlineStart:$,paddingInlineEnd:$,margin:$,marginTop:$,marginRight:$,marginBottom:$,marginLeft:$,marginBlock:$,marginBlockStart:$,marginBlockEnd:$,marginInline:$,marginInlineStart:$,marginInlineEnd:$,fontSize:$,backgroundPositionX:$,backgroundPositionY:$,...mG,zIndex:fG,fillOpacity:aB,strokeOpacity:aB,numOctaves:fG}})))()}var vG,yG;function bG(){return(bG=t((()=>{FB(),lG(),dG(),_G(),vG={...gG,color:PB,backgroundColor:PB,outlineColor:PB,fill:PB,stroke:PB,borderColor:PB,borderTopColor:PB,borderRightColor:PB,borderBottomColor:PB,borderLeftColor:PB,filter:cG,WebkitFilter:cG,mask:uG,WebkitMask:uG},yG=e=>vG[e]})))()}function xG(e,t){let n=yG(e);return SG.has(n)||(n=QB),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var SG;function CG(){return(CG=t((()=>{$B(),lG(),dG(),bG(),SG=new Set([cG,uG])})))()}function wG(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!TG.has(t)&&zB(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=xG(n,i)}var TG;function EG(){return(EG=t((()=>{$B(),CG(),TG=new Set([`auto`,`none`,`0`])})))()}var DG;function OG(){return(OG=t((()=>{SW(),nG(),gW(),rB(),JH(),iG(),EG(),zH(),DG=class extends qH{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),tB(r))){let i=pW(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!xW.has(n)||e.length!==2)return;let[r,i]=e,a=tG(r),o=tG(i);if(Zz(r)!==Zz(i)&&RH[n]){this.needsMeasurement=!0;return}if(a!==o){if(FH(a)&&FH(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else RH[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||rG(e[t]))&&n.push(t);n.length&&wG(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=RH[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=RH[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}})))()}var kG;function AG(){return(AG=t((()=>{kG=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`]})))()}function jG(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var MG;function NG(){return(NG=t((()=>{MG=(e,t)=>t&&typeof e==`number`?t.transform(e):e})))()}function PG(e){return BR(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}function FG(){return(FG=t((()=>{VR()})))()}var IG,LG;function RG(){return(RG=t((()=>{Vz(),{schedule:IG,cancel:LG}=zz(queueMicrotask,!1)})))()}function zG(){return BG.x||BG.y}var BG;function VG(){return(VG=t((()=>{BG={x:!1,y:!1}})))()}function HG(e){return e===`x`||e===`y`?BG[e]?null:(BG[e]=!0,()=>{BG[e]=!1}):BG.x||BG.y?null:(BG.x=BG.y=!0,()=>{BG.x=BG.y=!1})}function UG(){return(UG=t((()=>{VG()})))()}function WG(e,t){let n=jG(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function GG(){return(GG=t((()=>{})))()}function KG(e){return!(e.pointerType===`touch`||zG())}function qG(e,t,n={}){let[r,i,a]=WG(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!KG(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}function JG(){return(JG=t((()=>{VG(),GG()})))()}var YG;function XG(){return(XG=t((()=>{YG=(e,t)=>t?e===t||YG(e,t.parentElement):!1})))()}var ZG;function QG(){return(QG=t((()=>{ZG=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1})))()}function $G(e){return tK.has(e.tagName)||e.isContentEditable===!0}function eK(e){return nK.has(e.tagName)||e.isContentEditable===!0}var tK,nK;function rK(){return(rK=t((()=>{tK=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]),nK=new Set([`INPUT`,`SELECT`,`TEXTAREA`])})))()}var iK;function aK(){return(aK=t((()=>{iK=new WeakSet})))()}function oK(e){return t=>{t.key===`Enter`&&e(t)}}function sK(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var cK;function lK(){return(lK=t((()=>{aK(),cK=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=oK(()=>{if(iK.has(n))return;sK(n,`down`);let e=oK(()=>{sK(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>sK(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)}})))()}function uK(e){return ZG(e)&&!zG()}function dK(e,t,n={}){let[r,i,a]=WG(e,n),o=e=>{let r=e.currentTarget;if(!uK(e)||fK.has(e))return;iK.add(r),n.stopPropagation&&fK.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),iK.has(r)&&iK.delete(r),uK(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||YG(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),PG(e)&&(e.addEventListener(`focus`,e=>cK(e,i)),!$G(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}var fK;function pK(){return(pK=t((()=>{FG(),VG(),XG(),QG(),GG(),rK(),lK(),aK(),fK=new WeakSet})))()}function mK(e){return BR(e)&&`ownerSVGElement`in e}function hK(){return(hK=t((()=>{VR()})))()}function gK({target:e,borderBoxSize:t}){bK.get(e)?.forEach(n=>{n(e,{get width(){return CK(e,t)},get height(){return wK(e,t)}})})}function _K(e){e.forEach(gK)}function vK(){typeof ResizeObserver>`u`||(xK=new ResizeObserver(_K))}function yK(e,t){xK||vK();let n=jG(e);return n.forEach(e=>{let n=bK.get(e);n||(n=new Set,bK.set(e,n)),n.add(t),xK?.observe(e)}),()=>{n.forEach(e=>{let n=bK.get(e);n?.delete(t),n?.size||xK?.unobserve(e)})}}var bK,xK,SK,CK,wK;function TK(){return(TK=t((()=>{hK(),bK=new WeakMap,SK=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:mK(r)&&`getBBox`in r?r.getBBox()[t]:r[n],CK=SK(`inline`,`width`,`offsetWidth`),wK=SK(`block`,`height`,`offsetHeight`)})))()}function EK(){kK=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};OK.forEach(t=>t(e))},window.addEventListener(`resize`,kK)}function DK(e){return OK.add(e),kK||EK(),()=>{OK.delete(e),!OK.size&&typeof kK==`function`&&(window.removeEventListener(`resize`,kK),kK=void 0)}}var OK,kK;function AK(){return(AK=t((()=>{OK=new Set})))()}function jK(e,t){return typeof e==`function`?DK(e):yK(e,t)}function MK(){return(MK=t((()=>{TK(),AK()})))()}var NK;function PK(){return(PK=t((()=>{NK={value:null,addProjectionMetrics:null}})))()}function FK(e){return mK(e)&&e.tagName===`svg`}function IK(){return(IK=t((()=>{hK()})))()}var LK,RK;function zK(){return(zK=t((()=>{FB(),$B(),nG(),$W(),LK=[...eG,PB,QB],RK=e=>LK.find(QW(e))})))()}var BK,VK,HK,UK;function WK(){return(WK=t((()=>{BK=()=>({translate:0,scale:1,origin:0,originPoint:0}),VK=()=>({x:BK(),y:BK()}),HK=()=>({min:0,max:0}),UK=()=>({x:HK(),y:HK()})})))()}var GK;function KK(){return(KK=t((()=>{GK=new WeakMap})))()}function qK(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function JK(e){return typeof e==`string`||Array.isArray(e)}var YK,XK;function ZK(){return(ZK=t((()=>{YK=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],XK=[`initial`,...YK]})))()}function QK(e){return qK(e.animate)||XK.some(t=>JK(e[t]))}function $K(e){return!!(QK(e)||e.variants)}function eq(){return(eq=t((()=>{ZK()})))()}function tq(e,t,n){for(let r in t){let i=t[r],a=n[r];if(kW(i))e.addValue(r,i);else if(kW(a))e.addValue(r,KU(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,KU(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}function nq(){return(nq=t((()=>{ZU(),AW()})))()}var rq,iq;function aq(){return(aq=t((()=>{rq={current:null},iq={current:!1}})))()}function oq(){if(iq.current=!0,sq){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>rq.current=e.matches;e.addEventListener(`change`,t),t()}else rq.current=!1}}var sq;function cq(){return(cq=t((()=>{aq(),sq=typeof window<`u`})))()}function lq(e){fq=e}function uq(){return fq}var dq,fq,pq;function mq(){return(mq=t((()=>{tz(),zR(),UR(),QR(),JH(),yU(),PU(),RG(),Xz(),WK(),ZU(),$B(),CG(),zK(),AW(),KK(),eq(),NH(),nq(),cq(),aq(),Kz(),dq=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],fq={},pq=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=qH,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=Yz.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,Hz.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=QK(t),this.isVariantNode=$K(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&kW(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,GK.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(iq.current||oq(),this.shouldReduceMotion=rq.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Uz(this.notifyUpdate),Uz(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&NU.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new vU({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:$R(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=MH.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&Hz.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in fq){let t=fq[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):UK()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<dq.length;t++){let n=dq[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=tq(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=KU(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(RR(n)||HR(n))?n=parseFloat(n):!RK(n)&&QB.test(t)&&(n=xG(e,t)),this.setBaseTarget(e,kW(n)?n.get():n)),kW(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=vW(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!kW(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new ZR),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){IG.render(this.render)}}})))()}var hq;function gq(){return(gq=t((()=>{AW(),OG(),mq(),hq=class extends pq{constructor(){super(...arguments),this.KeyframeResolver=DG}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;kW(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}}})))()}var _q;function vq(){return(vq=t((()=>{_q=class{constructor(e){this.isMounted=!1,this.node=e}update(){}}})))()}function yq({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bq({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function xq(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Sq(e){return e===void 0||e===1}function Cq({scale:e,scaleX:t,scaleY:n}){return!Sq(e)||!Sq(t)||!Sq(n)}function wq(e){return Cq(e)||Tq(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Tq(e){return Eq(e.x)||Eq(e.y)}function Eq(e){return e&&e!==`0%`}function Dq(e,t,n){return n+t*(e-n)}function Oq(e,t,n,r,i){return i!==void 0&&(e=Dq(e,i,r)),Dq(e,n,r)+t}function kq(e,t=0,n=1,r,i){e.min=Oq(e.min,t,n,r,i),e.max=Oq(e.max,t,n,r,i)}function Aq(e,{x:t,y:n}){kq(e.x,t.translate,t.scale,t.originPoint),kq(e.y,n.translate,n.scale,n.originPoint)}function jq(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Mq(e.x,-a.scroll.offset.x),Mq(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Aq(e,o)),r&&wq(a.latestValues)&&Fq(e,a.latestValues,a.layout?.layoutBox))}t.x<Lq&&t.x>Iq&&(t.x=1),t.y<Lq&&t.y>Iq&&(t.y=1)}function Mq(e,t){e.min+=t,e.max+=t}function Nq(e,t,n,r,i=.5){kq(e,t,n,rV(e.min,e.max,i),r)}function Pq(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Fq(e,t,n){let r=n??e;Nq(e.x,Pq(t.x,r.x),t.scaleX,t.scale,t.originX),Nq(e.y,Pq(t.y,r.y),t.scaleY,t.scale,t.originY)}var Iq,Lq;function Rq(){return(Rq=t((()=>{iV(),Iq=.999999999999,Lq=1.0000000000001})))()}function zq(e,t){return yq(xq(e.getBoundingClientRect(),t))}function Bq(e,t,n){let r=zq(e,n),{scroll:i}=t;return i&&(Mq(r.x,i.offset.x),Mq(r.y,i.offset.y)),r}function Vq(){return(Vq=t((()=>{Rq()})))()}function Hq(e,t,n){let r=``,i=!0;for(let a=0;a<Wq;a++){let o=jH[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=MG(s,gG[o]);if(!c){i=!1;let t=Uq[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${MG(a,gG.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}var Uq,Wq;function Gq(){return(Gq=t((()=>{NG(),_G(),NH(),Uq={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Wq=jH.length})))()}function Kq(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(MH.has(e)){o=!0;continue}if($z(e)){i[e]=n;continue}{let t=MG(n,gG[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Hq(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function qq(){return(qq=t((()=>{NG(),_G(),NH(),rB(),Gq()})))()}function Jq(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Yq(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Xq;function Zq(){return(Zq=t((()=>{jB(),Xq={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if($.test(e))e=parseFloat(e);else return e}return`${Yq(e,t.target.x)}% ${Yq(e,t.target.y)}%`}}})))()}var Qq;function $q(){return($q=t((()=>{$B(),iV(),Qq={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=QB.parse(e);if(i.length>5)return r;let a=QB.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=rV(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}}})))()}var eJ;function tJ(){return(tJ=t((()=>{AG(),Zq(),$q(),eJ={borderRadius:{...Xq,applyTo:[...kG]},borderTopLeftRadius:Xq,borderTopRightRadius:Xq,borderBottomLeftRadius:Xq,borderBottomRightRadius:Xq,boxShadow:Qq}})))()}function nJ(e,{layout:t,layoutId:n}){return MH.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!eJ[e]||e===`opacity`)}function rJ(){return(rJ=t((()=>{NH(),tJ()})))()}function iJ(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(kW(r[t])||i&&kW(i[t])||nJ(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function aJ(){return(aJ=t((()=>{AW(),rJ()})))()}function oJ(e){return window.getComputedStyle(e)}var sJ;function cJ(){return(cJ=t((()=>{FR(),rB(),NH(),AH(),Vq(),gq(),qq(),aJ(),sJ=class extends hq{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Jq}mount(e){PR(!!e.style,`motion.create() components must forward their ref to a HTML or SVG element`,`custom-component-ref`),super.mount(e)}readValueFromInstance(e,t){if(MH.has(t))return this.projection?.isProjecting?vH(t):kH(e,t);{let n=oJ(e),r=($z(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return zq(e,t)}build(e,t,n){Kq(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return iJ(e,t,n)}}})))()}function lJ(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?uJ:dJ;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var uJ,dJ;function fJ(){return(fJ=t((()=>{uJ={offset:`stroke-dashoffset`,array:`stroke-dasharray`},dJ={offset:`strokeDashoffset`,array:`strokeDasharray`}})))()}function pJ(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Kq(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;for(let e of mJ)d[e]!==void 0&&(f[e]=d[e],delete d[e]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&lJ(d,i,a,o,!1)}var mJ;function hJ(){return(hJ=t((()=>{qq(),fJ(),mJ=[`transform`,`opacity`,`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`]})))()}var gJ;function _J(){return(_J=t((()=>{gJ=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`])})))()}var vJ;function yJ(){return(yJ=t((()=>{vJ=e=>typeof e==`string`&&e.toLowerCase()===`svg`})))()}function bJ(e,t,n,r){Jq(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(gJ.has(n)?n:FW(n),t.attrs[n])}function xJ(){return(xJ=t((()=>{_J()})))()}function SJ(e,t,n){let r=iJ(e,t,n);for(let n in e)if(kW(e[n])||kW(t[n])){let t=jH.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}function CJ(){return(CJ=t((()=>{AW(),NH(),aJ()})))()}var wJ;function TJ(){return(TJ=t((()=>{NH(),bG(),WK(),gq(),hJ(),_J(),yJ(),xJ(),CJ(),wJ=class extends hq{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=UK}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(MH.has(t)){let e=yG(t);return e&&e.default||0}if(mJ.includes(t)){let n=getComputedStyle(e)[t];if(typeof n==`string`&&n)return n.trim()}return t=gJ.has(t)?t:FW(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return SJ(e,t,n)}build(e,t,n){pJ(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){bJ(e,t,n,r)}mount(e){this.isSVGTag=vJ(e.tagName),super.mount(e)}}})))()}function EJ(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&EJ(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<DJ;n++){let r=XK[n],i=e.props[r];(JK(i)||i===!1)&&(t[r]=i)}return t}var DJ;function OJ(){return(OJ=t((()=>{ZK(),DJ=XK.length})))()}function kJ(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function AJ(e){return t=>Promise.all(t.map(({animation:t,options:n})=>JW(e,t,n)))}function jJ(e){let t=AJ(e),n=PJ(),r=!0,i=!1,a=t=>(n,r)=>{let i=yW(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=EJ(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<IJ;t++){let p=FJ[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=JK(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||qK(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=MJ(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:w={}}=m,T={...w,...C},E=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in T){let t=C[e],n=w[e];if(d.hasOwnProperty(e))continue;let r=!1;r=CW(t)&&CW(n)?!kJ(t,n)||y:t!==n,r?t==null?u.add(e):E(e):t!==void 0&&u.has(e)?E(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let D=v&&y;b&&(!D||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!D&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=yW(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=GU(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=yW(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=PJ(),i=!0}}}function MJ(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!kJ(t,e):!1}function NJ(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function PJ(){return{animate:NJ(!0),whileInView:NJ(),whileHover:NJ(),whileTap:NJ(),whileDrag:NJ(),whileFocus:NJ(),exit:NJ()}}var FJ,IJ;function LJ(){return(LJ=t((()=>{YW(),OJ(),wW(),bW(),ZK(),FJ=[...YK].reverse(),IJ=YK.length})))()}function RJ(e,t){e.min=t.min,e.max=t.max}function zJ(e,t){RJ(e.x,t.x),RJ(e.y,t.y)}function BJ(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function VJ(e){return e.max-e.min}function HJ(e,t,n){return Math.abs(e-t)<=n}function UJ(e,t,n,r=.5){e.origin=r,e.originPoint=rV(t.min,t.max,e.origin),e.scale=VJ(n)/VJ(t),e.translate=rV(n.min,n.max,e.origin)-e.originPoint,(e.scale>=YJ&&e.scale<=XJ||isNaN(e.scale))&&(e.scale=1),(e.translate>=ZJ&&e.translate<=QJ||isNaN(e.translate))&&(e.translate=0)}function WJ(e,t,n,r){UJ(e.x,t.x,n.x,r?r.originX:void 0),UJ(e.y,t.y,n.y,r?r.originY:void 0)}function GJ(e,t,n,r=0){e.min=(r?rV(n.min,n.max,r):n.min)+t.min,e.max=e.min+VJ(t)}function KJ(e,t,n,r){GJ(e.x,t.x,n.x,r?.x),GJ(e.y,t.y,n.y,r?.y)}function qJ(e,t,n,r=0){let i=r?rV(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+VJ(t)}function JJ(e,t,n,r){qJ(e.x,t.x,n.x,r?.x),qJ(e.y,t.y,n.y,r?.y)}var YJ,XJ,ZJ,QJ;function $J(){return($J=t((()=>{iV(),YJ=.9999,XJ=1.0001,ZJ=-.01,QJ=.01})))()}function eY(e,t,n,r,i){return e-=t,e=Dq(e,1/n,r),i!==void 0&&(e=Dq(e,1/i,r)),e}function tY(e,t=0,n=1,r=.5,i,a=e,o=e){if(DB.test(t)&&(t=parseFloat(t),t=rV(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=rV(a.min,a.max,r);e===a&&(s-=t),e.min=eY(e.min,t,n,s,i),e.max=eY(e.max,t,n,s,i)}function nY(e,t,[n,r,i],a,o){tY(e,t[n],t[r],t[i],t.scale,a,o)}function rY(e,t,n,r){nY(e.x,t,iY,n?n.x:void 0,r?r.x:void 0),nY(e.y,t,aY,n?n.y:void 0,r?r.y:void 0)}var iY,aY;function oY(){return(oY=t((()=>{iV(),jB(),Rq(),iY=[`x`,`scaleX`,`originX`],aY=[`y`,`scaleY`,`originY`]})))()}function sY(e){return e.translate===0&&e.scale===1}function cY(e){return sY(e.x)&&sY(e.y)}function lY(e,t){return e.min===t.min&&e.max===t.max}function uY(e,t){return lY(e.x,t.x)&&lY(e.y,t.y)}function dY(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function fY(e,t){return dY(e.x,t.x)&&dY(e.y,t.y)}function pY(e){return VJ(e.x)/VJ(e.y)}function mY(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function hY(){return(hY=t((()=>{$J()})))()}function gY(e){return[e(`x`),e(`y`)]}function _Y(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}function vY(e,t,n,r,i,a){i?(e.opacity=rV(0,n.opacity??1,wY(r)),e.opacityExit=rV(t.opacity??1,0,TY(r))):a&&(e.opacity=rV(t.opacity??1,n.opacity??1,r));for(let i=0;i<xY;i++){let a=kG[i],o=yY(t,a),s=yY(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||CY(o)===CY(s)?(e[a]=Math.max(rV(SY(o),SY(s),r),0),(DB.test(s)||DB.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=rV(t.rotate||0,n.rotate||0,r))}function yY(e,t){return e[t]===void 0?e.borderRadius:e[t]}function bY(e,t,n){return r=>r<e?0:r>t?1:n(YR(e,t,r))}var xY,SY,CY,wY,TY;function EY(){return(EY=t((()=>{iV(),jB(),XR(),Cz(),KR(),AG(),xY=kG.length,SY=e=>typeof e==`string`?parseFloat(e):e,CY=e=>typeof e==`number`||$.test(e),wY=bY(0,.5,xz),TY=bY(.5,.95,GR)})))()}function DY(e,t,n){let r=kW(e)?e:KU(e);return r.start(uW(``,r,t,n)),r.animation}function OY(){return(OY=t((()=>{dW(),ZU(),AW()})))()}function kY(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var AY;function jY(){return(jY=t((()=>{AY=(e,t)=>e.depth-t.depth})))()}var MY;function NY(){return(NY=t((()=>{jY(),MY=class{constructor(){this.children=[],this.isDirty=!1}add(e){kR(this.children,e),this.isDirty=!0}remove(e){AR(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(AY),this.isDirty=!1,this.children.forEach(e)}}})))()}function PY(e,t){let n=Yz.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Uz(r),e(a-t))};return Hz.setup(r,!0),()=>Uz(r)}function FY(){return(FY=t((()=>{Xz(),Kz()})))()}function IY(e){return kW(e)?e.get():e}function LY(){return(LY=t((()=>{AW()})))()}var RY;function zY(){return(zY=t((()=>{RY=class{constructor(){this.members=[]}add(e){kR(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(AR(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(AR(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}})))()}var BY;function VY(){return(VY=t((()=>{BY={hasAnimatedSinceResize:!0,hasEverUpdated:!1}})))()}function HY(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function UY(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=zW(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,Hz,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&UY(r)}function WY({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=_X++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,NK.value&&(mX.nodes=mX.calculatedTargetDeltas=mX.calculatedProjections=0),this.nodes.forEach(qY),this.nodes.forEach(nX),this.nodes.forEach(rX),this.nodes.forEach(JY),NK.addProjectionMetrics&&NK.addProjectionMetrics(mX)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new MY)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new ZR),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=mK(t)&&!FK(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;Hz.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=PY(i,250),BY.hasAnimatedSinceResize&&(BY.hasAnimatedSinceResize=!1,this.nodes.forEach(tX)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||vX,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!fY(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...$U(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||tX(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Uz(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(iX),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&UY(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(ZY),this.nodes.forEach(XY);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(QY);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($Y),this.nodes.forEach(eX),this.nodes.forEach(GY),this.nodes.forEach(KY)):this.nodes.forEach(QY),this.clearAllSnapshots();let e=Yz.now();Wz.delta=jR(0,1e3/60,e-Wz.timestamp),Wz.timestamp=e,Wz.isProcessing=!0,Gz.update.process(Wz),Gz.preRender.process(Wz),Gz.render.process(Wz),Wz.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,IG.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YY),this.sharedNodes.forEach(aX)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Hz.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Hz.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!VJ(this.snapshot.measuredBox.x)&&!VJ(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=UK(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!cY(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||wq(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),dX(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return UK();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(pX))){let{scroll:e}=this.root;e&&(Mq(t.x,e.offset.x),Mq(t.y,e.offset.y))}return t}removeElementScroll(e){let t=UK();if(zJ(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&zJ(t,e),Mq(t.x,i.offset.x),Mq(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||UK();zJ(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Mq(r.x,-n.scroll.offset.x),Mq(r.y,-n.scroll.offset.y)),wq(n.latestValues)&&Fq(r,n.latestValues,n.layout?.layoutBox)}return wq(this.latestValues)&&Fq(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=UK();zJ(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!wq(n.latestValues))continue;let r;n.instance&&(Cq(n.latestValues)&&n.updateSnapshot(),r=UK(),zJ(r,n.measurePageBox())),rY(t,n.latestValues,n.snapshot?.layoutBox,r)}return wq(this.latestValues)&&rY(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wz.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=Wz.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=UK(),this.targetWithTransforms=UK()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),KJ(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):zJ(this.target,this.layout.layoutBox),Aq(this.target,this.targetDelta)):zJ(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),NK.value&&mX.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Cq(this.parent.latestValues)||Tq(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=UK(),this.relativeTargetOrigin=UK(),JJ(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),zJ(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===Wz.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;zJ(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;jq(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=UK());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(BJ(this.prevProjectionDelta.x,this.projectionDelta.x),BJ(this.prevProjectionDelta.y,this.projectionDelta.y)),WJ(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!mY(this.projectionDelta.x,this.prevProjectionDelta.x)||!mY(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),NK.value&&mX.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=VK(),this.projectionDelta=VK(),this.projectionDeltaWithTransform=VK()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=VK();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=UK(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!!(c&&!u&&this.options.crossfade===!0&&!this.path.some(lX));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=rV(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=rV(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(oX(o.x,e.x,n),oX(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(JJ(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),cX(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&uY(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=UK(),zJ(f,this.relativeTarget)),c&&(this.animationValues=a,vY(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Uz(this.pendingAnimation),void 0),this.pendingAnimation=Hz.update(()=>{BY.hasAnimatedSinceResize=!0,this.motionValue||=KU(0),this.motionValue.jump(0,!1),this.currentAnimation=DY(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gX),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&fX(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||UK();let t=VJ(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=VJ(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}zJ(t,n),Fq(t,i),WJ(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new RY),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&HY(`z`,e,r,this.animationValues);for(let t=0;t<hX.length;t++)HY(`rotate${hX[t]}`,e,r,this.animationValues),HY(`skew${hX[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=IY(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=IY(t?.pointerEvents)||``),this.hasProjected&&!wq(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=_Y(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in eJ){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=eJ[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?IY(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(XY),this.root.sharedNodes.clear()}}}function GY(e){e.updateLayout()}function KY(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)gY(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=VJ(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;RJ(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else fX(i,t.layoutBox,n)&&gY(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=VJ(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=VK();WJ(o,n,t.layoutBox);let s=VK();a?WJ(s,e.applyTransform(r,!0),t.measuredBox):WJ(s,n,t.layoutBox);let c=!cY(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=UK();JJ(s,t.layoutBox,i.layoutBox,o);let c=UK();JJ(c,n,a.layoutBox,o),fY(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function qY(e){NK.value&&mX.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function JY(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function YY(e){e.clearSnapshot()}function XY(e){e.clearMeasurements()}function ZY(e){e.isLayoutDirty=!0,e.updateLayout()}function QY(e){e.isLayoutDirty=!1}function $Y(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function eX(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function tX(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function nX(e){e.resolveTargetDelta()}function rX(e){e.calcProjection()}function iX(e){e.resetSkewAndRotation()}function aX(e){e.removeLeadSnapshot()}function oX(e,t,n){e.translate=rV(t.translate,0,n),e.scale=rV(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function sX(e,t,n,r){e.min=rV(t.min,n.min,r),e.max=rV(t.max,n.max,r)}function cX(e,t,n,r){sX(e.x,t.x,n.x,r),sX(e.y,t.y,n.y,r)}function lX(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}function uX(e){e.min=bX(e.min),e.max=bX(e.max)}function dX(e){uX(e.x),uX(e.y)}function fX(e,t,n){return e===`position`||e===`preserve-aspect`&&!HJ(pY(t),pY(n),.2)}function pX(e){return e!==e.root&&e.scroll?.wasRoot}var mX,hX,gX,_X,vX,yX,bX;function xX(){return(xX=t((()=>{QR(),MR(),KR(),OY(),BW(),eW(),RG(),Xz(),tJ(),PK(),FY(),hK(),IK(),iV(),ZU(),LY(),EY(),Rq(),$J(),oY(),WK(),hY(),zY(),NY(),VY(),Kz(),mX={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},hX=[``,`X`,`Y`,`Z`],gX=1e3,_X=0,vX={duration:.45,ease:[.4,0,.1,1]},yX=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),bX=yX(`applewebkit/`)&&!yX(`chrome/`)?Math.round:GR})))()}var SX;function CX(){return(CX=t((()=>{xX(),SX=WY({attachResizeListener:(e,t)=>kY(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0})})))()}var wX,TX;function EX(){return(EX=t((()=>{xX(),CX(),wX={current:void 0},TX=WY({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wX.current){let e=new SX({});e.mount(window),e.setOptions({layoutScroll:!0}),wX.current=e}return wX.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`})})))()}var DX,OX;function kX(){return(kX=t((()=>{DX=r(),OX=(0,DX.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`})})))()}function AX(e=!0){let t=(0,jX.useContext)(DR);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,jX.useId)();(0,jX.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,jX.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var jX;function MX(){return(MX=t((()=>{jX=r(),OR()})))()}var NX,PX;function FX(){return(FX=t((()=>{NX=r(),PX=(0,NX.createContext)({strict:!1})})))()}function IX(){if(zX)return;let e={};for(let t in RX)e[t]={isEnabled:e=>RX[t].some(t=>!!e[t])};lq(e),zX=!0}function LX(){return IX(),uq()}var RX,zX;function BX(){return(BX=t((()=>{mq(),RX={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},zX=!1})))()}function VX(e){let t=LX();for(let n in e)t[n]={...t[n],...e[n]};lq(t)}function HX(){return(HX=t((()=>{mq(),BX()})))()}var UX,WX;function GX(){return(GX=t((()=>{UX=r(),WX=(0,UX.createContext)({})})))()}function KX(e,t){if(QK(e)){let{initial:t,animate:n}=e;return{initial:t===!1||JK(t)?t:void 0,animate:JK(n)?n:void 0}}return e.inherit===!1?{}:t}function qX(){return(qX=t((()=>{eq()})))()}function JX(e){let{initial:t,animate:n}=KX(e,(0,XX.useContext)(WX));return(0,XX.useMemo)(()=>({initial:t,animate:n}),[YX(t),YX(n)])}function YX(e){return Array.isArray(e)?e.join(` `):e}var XX;function ZX(){return(ZX=t((()=>{XX=r(),GX(),qX()})))()}var QX;function $X(){return($X=t((()=>{QX=()=>({style:{},transform:{},transformOrigin:{},vars:{}})})))()}function eZ(e,t,n){for(let r in t)!kW(t[r])&&!nJ(r,n)&&(e[r]=t[r])}function tZ({transformTemplate:e},t){return(0,iZ.useMemo)(()=>{let n=QX();return Kq(n,t,e),Object.assign({},n.vars,n.style)},[t])}function nZ(e,t){let n=e.style||{},r={};return eZ(r,n,e),Object.assign(r,tZ(e,t)),r}function rZ(e,t){let n={},r=nZ(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var iZ;function aZ(){return(aZ=t((()=>{AW(),rJ(),qq(),iZ=r(),$X()})))()}var oZ;function sZ(){return(sZ=t((()=>{$X(),oZ=()=>({...QX(),attrs:{}})})))()}function cZ(e,t,n,r){let i=(0,lZ.useMemo)(()=>{let n=oZ();return pJ(n,t,vJ(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};eZ(t,e.style,e),i.style={...t,...i.style}}return i}var lZ;function uZ(){return(uZ=t((()=>{hJ(),yJ(),lZ=r(),aZ(),sZ()})))()}function dZ(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||fZ.has(e)}var fZ;function pZ(){return(pZ=t((()=>{fZ=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`))})))()}function mZ(e,t){return e.startsWith(`on`)?!dZ(e):t?.(e)??!dZ(e)}function hZ(e,t,n,r){let i={};for(let a in e)(a!==`values`||typeof e.values!=`object`)&&(kW(e[a])||(mZ(a,r)||n===!0&&dZ(a)||!t&&!dZ(a)||e.draggable&&a.startsWith(`onDrag`))&&(i[a]=e[a]));return i}function gZ(){return(gZ=t((()=>{AW(),pZ()})))()}var _Z;function vZ(){return(vZ=t((()=>{_Z=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`]})))()}function yZ(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(_Z.indexOf(e)>-1||/[A-Z]/u.test(e))}function bZ(){return(bZ=t((()=>{vZ()})))()}function xZ(e,t,n,{latestValues:r},i,a=!1,o,s){let c=(o??yZ(e)?cZ:rZ)(t,r,i,e),l=hZ(t,typeof e==`string`,a,s),u=e===SZ.Fragment?{}:{...l,...c,ref:n},{children:d}=t,f=(0,SZ.useMemo)(()=>kW(d)?d.get():d,[d]);return(0,SZ.createElement)(e,{...u,children:f})}var SZ;function CZ(){return(CZ=t((()=>{AW(),SZ=r(),aZ(),uZ(),gZ(),bZ()})))()}function wZ({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:TZ(n,r,i,e),renderState:t()}}function TZ(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=IY(a[e]);let{initial:o,animate:s}=e,c=QK(e),l=$K(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!qK(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=vW(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var EZ,DZ;function OZ(){return(OZ=t((()=>{LY(),eq(),EZ=r(),GX(),OR(),bR(),DZ=e=>(t,n)=>{let r=(0,EZ.useContext)(WX),i=(0,EZ.useContext)(DR),a=()=>wZ(e,t,r,i);return n?a():vR(a)}})))()}var kZ;function AZ(){return(AZ=t((()=>{aJ(),OZ(),$X(),kZ=DZ({scrapeMotionValuesFromProps:iJ,createRenderState:QX})})))()}var jZ;function MZ(){return(MZ=t((()=>{CJ(),OZ(),sZ(),jZ=DZ({scrapeMotionValuesFromProps:SJ,createRenderState:oZ})})))()}var NZ;function PZ(){return(PZ=t((()=>{NZ=Symbol.for(`motionComponentSymbol`)})))()}function FZ(e,t,n){let r=(0,IZ.useRef)(n);(0,IZ.useInsertionEffect)(()=>{r.current=n});let i=(0,IZ.useRef)(null);return(0,IZ.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var IZ;function LZ(){return(LZ=t((()=>{IZ=r()})))()}var RZ,zZ;function BZ(){return(BZ=t((()=>{RZ=r(),zZ=(0,RZ.createContext)({})})))()}function VZ(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function HZ(e,t,n,r,i,a){let{visualElement:o}=(0,GZ.useContext)(WX),s=(0,GZ.useContext)(PX),c=(0,GZ.useContext)(DR),l=(0,GZ.useContext)(OX),u=l.reducedMotion,d=l.skipAnimations,f=(0,GZ.useRef)(null),p=(0,GZ.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,GZ.useContext)(zZ);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&UZ(f.current,n,i,h);let g=(0,GZ.useRef)(!1);(0,GZ.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[LW],v=(0,GZ.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return wR(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,GZ.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function UZ(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:WZ(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&VZ(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function WZ(e){if(e)return e.options.allowProjection===!1?WZ(e.parent):e.projection}var GZ;function KZ(){return(KZ=t((()=>{RW(),GZ=r(),FX(),kX(),GX(),OR(),BZ(),TR()})))()}function qZ(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&VX(r);let a=n?n===`svg`:yZ(e),o=a?jZ:kZ;function s(n,s){let c,l={...(0,QZ.useContext)(OX),...n,layoutId:JZ(n)},{isStatic:u,isValidProp:d}=l,f=JX(n),p=o(n,u);if(!u&&typeof window<`u`){YZ(l,r);let t=XZ(l);c=t.MeasureLayout,f.visualElement=HZ(e,p,l,i,t.ProjectionNode,a)}return(0,ZZ.jsxs)(WX.Provider,{value:f,children:[c&&f.visualElement?(0,ZZ.jsx)(c,{visualElement:f.visualElement,...l}):null,xZ(e,n,FZ(p,f.visualElement,s),p,u,t,a,d)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,QZ.forwardRef)(s);return c[NZ]=e,c}function JZ({layoutId:e}){let t=(0,QZ.useContext)(gR).id;return t&&e!==void 0?t+`-`+e:e}function YZ(e,t){(0,QZ.useContext)(PX).strict}function XZ(e){let{drag:t,layout:n}=LX();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}var ZZ,QZ;function $Z(){return($Z=t((()=>{ZZ=G(),QZ=r(),_R(),FX(),kX(),GX(),ZX(),CZ(),bZ(),AZ(),MZ(),BX(),HX(),PZ(),LZ(),KZ()})))()}function eQ(e,t){if(typeof Proxy>`u`)return qZ;let n=new Map,r=(n,r)=>qZ(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,qZ(a,void 0,e,t)),n.get(a))})}function tQ(){return(tQ=t((()=>{$Z()})))()}var nQ,rQ;function iQ(){return(iQ=t((()=>{TJ(),cJ(),nQ=r(),bZ(),rQ=(e,t)=>t.isSVG??yZ(e)?new wJ(t):new sJ(t,{allowProjection:e!==nQ.Fragment})})))()}var aQ;function oQ(){return(oQ=t((()=>{vq(),LJ(),aQ=class extends _q{constructor(e){super(e),e.animationState||=jJ(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();qK(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}})))()}var sQ,cQ;function lQ(){return(lQ=t((()=>{vq(),bW(),sQ=0,cQ=class extends _q{constructor(){super(...arguments),this.id=sQ++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=yW(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}})))()}var uQ;function dQ(){return(dQ=t((()=>{oQ(),lQ(),uQ={animation:{Feature:aQ},exit:{Feature:cQ}}})))()}function fQ(e){return{point:{x:e.pageX,y:e.pageY}}}var pQ;function mQ(){return(mQ=t((()=>{QG(),pQ=e=>t=>ZG(t)&&e(t,fQ(t))})))()}function hQ(e,t,n,r){return kY(e,t,pQ(n),r)}function gQ(){return(gQ=t((()=>{mQ()})))()}var _Q;function vQ(){return(vQ=t((()=>{_Q=({current:e})=>e?e.ownerDocument.defaultView:null})))()}function yQ(e,t){let n=bQ(e.x,t.x),r=bQ(e.y,t.y);return Math.sqrt(n**2+r**2)}var bQ;function xQ(){return(xQ=t((()=>{bQ=(e,t)=>Math.abs(e-t)})))()}function SQ(e,t){return t?{point:t(e.point)}:e}function CQ(e,t){return{x:e.x-t.x,y:e.y-t.y}}function wQ({point:e},t){return{point:e,delta:CQ(e,EQ(t)),offset:CQ(e,TQ(t)),velocity:DQ(t,.1)}}function TQ(e){return e[0]}function EQ(e){return e[e.length-1]}function DQ(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=EQ(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>$R(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>$R(t)*2&&(r=e[1]);let a=ez(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}var OQ,kQ;function AQ(){return(AQ=t((()=>{Kz(),QG(),JR(),tz(),gQ(),mQ(),xQ(),OQ=new Set([`auto`,`scroll`]),kQ=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=SQ(this.lastRawMoveEventInfo,this.transformPagePoint));let e=wQ(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=yQ(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=Wz;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=SQ(t,this.transformPagePoint),Hz.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=wQ(e.type===`pointercancel`?this.lastMoveEventInfo:SQ(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ZG(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=SQ(fQ(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=Wz;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,wQ(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=qR(hQ(this.contextWindow,`pointermove`,this.handlePointerMove,d),hQ(this.contextWindow,`pointerup`,this.handlePointerUp,d),hQ(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(OQ.has(e.overflowX)||OQ.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),Hz.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Uz(this.updatePoint)}}})))()}function jQ(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?rV(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?rV(n,e,r.max):Math.min(e,n)),e}function MQ(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function NQ(e,{top:t,left:n,bottom:r,right:i}){return{x:MQ(e.x,n,i),y:MQ(e.y,t,r)}}function PQ(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function FQ(e,t){return{x:PQ(e.x,t.x),y:PQ(e.y,t.y)}}function IQ(e,t){let n=.5,r=VJ(e),i=VJ(t);return i>r?n=YR(t.min,t.max-r,e.min):r>i&&(n=YR(e.min,e.max-i,t.min)),jR(0,1,n)}function LQ(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}function RQ(e=VQ){return e===!1?e=0:e===!0&&(e=VQ),{x:zQ(e,`left`,`right`),y:zQ(e,`top`,`bottom`)}}function zQ(e,t,n){return{min:BQ(e,t),max:BQ(e,n)}}function BQ(e,t){return typeof e==`number`?e:e[t]||0}var VQ;function HQ(){return(HQ=t((()=>{iV(),$J(),XR(),MR(),VQ=.35})))()}function UQ(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function WQ(e,t,n){let r=jK(e,UQ(n)),i=jK(t,UQ(n));return()=>{r(),i()}}function GQ(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function KQ(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var qQ,JQ;function YQ(){return(YQ=t((()=>{WK(),Kz(),Vq(),PW(),dW(),iV(),UG(),jB(),$J(),MK(),rK(),FR(),gQ(),mQ(),vQ(),AQ(),HQ(),qQ=new WeakMap,JQ=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=UK(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(fQ(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=HG(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),gY(e=>{let t=this.getAxisMotionValue(e).get()||0;if(DB.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=VJ(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&Hz.update(()=>i(e,t),!1,!0),NW(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=KQ(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&Hz.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new kQ(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:_Q(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&Hz.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!GQ(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=jQ(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&VZ(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?NQ(n.layoutBox,e):!1,this.elastic=RQ(t),r!==this.constraints&&!VZ(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&gY(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=LQ(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!VZ(e))return!1;let n=e.current;PR(n!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",`drag-constraints-ref`);let{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=Bq(n,r.root,this.visualElement.getTransformPagePoint()),a=FQ(r.layout.layoutBox,i);if(t){let e=t(bq(a));this.hasMutatedConstraints=!!e,e&&(a=yq(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=gY(o=>{if(!GQ(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return NW(this.visualElement,e),n.start(uW(e,n,0,t,this.visualElement,!1))}stopAnimation(){gY(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){gY(t=>{let{drag:n}=this.getProps();if(!GQ(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-rV(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!VZ(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};gY(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=IQ({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),gY(t=>{if(!GQ(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(rV(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;qQ.set(this.visualElement,this);let e=this.visualElement.current,t=hQ(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&eK(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();VZ(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=WQ(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Hz.read(r);let o=kY(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(gY(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=VQ,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}})))()}var XQ;function ZQ(){return(ZQ=t((()=>{vq(),KR(),YQ(),XQ=class extends _q{constructor(e){super(e),this.removeGroupControls=GR,this.removeListeners=GR,this.controls=new JQ(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||GR}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}})))()}var QQ,$Q;function e$(){return(e$=t((()=>{vq(),Kz(),KR(),gQ(),vQ(),AQ(),QQ=e=>(t,n)=>{e&&Hz.update(()=>e(t,n),!1,!0)},$Q=class extends _q{constructor(){super(...arguments),this.removePointerDownListener=GR}onPointerDown(e){this.session=new kQ(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:_Q(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:QQ(e),onStart:QQ(t),onMove:QQ(n),onEnd:(e,t)=>{delete this.session,r&&Hz.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=hQ(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}})))()}function t$(e){let[t,n]=AX(),r=(0,r$.useContext)(gR);return(0,n$.jsx)(a$,{...e,layoutGroup:r,switchLayoutGroup:(0,r$.useContext)(zZ),isPresent:t,safeToRemove:n})}var n$,r$,i$,a$;function o$(){return(o$=t((()=>{n$=G(),VY(),Kz(),RG(),r$=r(),MX(),_R(),BZ(),i$=!1,a$=class extends r$.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i$&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),BY.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),i$=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||Hz.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),IG.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;i$=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}})))()}var s$;function c$(){return(c$=t((()=>{ZQ(),e$(),o$(),EX(),s$={pan:{Feature:$Q},drag:{Feature:XQ,ProjectionNode:TX,MeasureLayout:t$}}})))()}function l$(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&Hz.postRender(()=>i(t,fQ(t)))}var u$;function d$(){return(d$=t((()=>{vq(),JG(),Kz(),mQ(),u$=class extends _q{mount(){let{current:e}=this.node;e&&(this.unmount=qG(e,(e,t)=>(l$(this.node,t,`Start`),e=>l$(this.node,e,`End`))))}unmount(){}}})))()}var f$;function p$(){return(p$=t((()=>{vq(),JR(),f$=class extends _q{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=qR(kY(this.node.current,`focus`,()=>this.onFocus()),kY(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}}})))()}function m$(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&Hz.postRender(()=>i(t,fQ(t)))}var h$;function g$(){return(g$=t((()=>{vq(),pK(),Kz(),mQ(),h$=class extends _q{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=dK(e,(e,t)=>(m$(this.node,t,`Start`),(e,{success:t})=>m$(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}}})))()}function _$({root:e,...t}){let n=e||document;b$.has(n)||b$.set(n,{});let r=b$.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(S$,{root:e,...t})),r[i]}function v$(e,t,n){let r=_$(t);return y$.set(e,n),r.observe(e),()=>{y$.delete(e),r.unobserve(e)}}var y$,b$,x$,S$;function C$(){return(C$=t((()=>{y$=new WeakMap,b$=new WeakMap,x$=e=>{let t=y$.get(e.target);t&&t(e)},S$=e=>{e.forEach(x$)}})))()}function w$({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var T$,E$;function D$(){return(D$=t((()=>{vq(),C$(),T$={some:0,all:1},E$=class extends _q{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:T$[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=v$(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(w$(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}}})))()}var O$;function k$(){return(k$=t((()=>{d$(),p$(),g$(),D$(),O$={inView:{Feature:E$},tap:{Feature:h$},focus:{Feature:f$},hover:{Feature:u$}}})))()}var A$;function j$(){return(j$=t((()=>{EX(),o$(),A$={layout:{ProjectionNode:TX,MeasureLayout:t$}}})))()}var M$;function N$(){return(N$=t((()=>{dQ(),c$(),k$(),j$(),M$={...uQ,...O$,...s$,...A$}})))()}var P$;function F$(){return(F$=t((()=>{iQ(),tQ(),N$(),P$=eQ(M$,rQ)})))()}function I$(){!iq.current&&oq();let[e]=(0,L$.useState)(rq.current);return e}var L$;function R$(){return(R$=t((()=>{aq(),cq(),L$=r()})))()}var z$;function B$(){return(B$=t((()=>{F$(),R$(),z$=P$})))()}function V$(e){if(typeof e==`object`&&e){let t=e,n=typeof t.status==`number`&&Number.isFinite(t.status)?t.status:null,r=typeof t.retryAfterSeconds==`number`&&Number.isFinite(t.retryAfterSeconds)?t.retryAfterSeconds:null,i=Array.isArray(t.issues)&&t.issues.length>0&&typeof t.issues[0]==`object`&&t.issues[0]!==null&&`message`in t.issues[0]&&typeof t.issues[0].message==`string`?t.issues[0].message:null;if(typeof t.userMessage==`string`&&t.userMessage.trim()!==``)return n===null?t.userMessage:`${t.userMessage} (HTTP ${n})`;if(typeof t.detail==`string`&&t.detail.trim()!==``)return n===429&&r!==null?`${t.detail} (retry in ${r}s)`:n===null?t.detail:`${t.detail} (HTTP ${n})`;if(typeof t.message==`string`&&t.message.trim()!==``)return n===null?t.message:`${t.message} (HTTP ${n})`;if(typeof t.title==`string`&&t.title.trim()!==``)return i?`${t.title}: ${i}`:n===null?t.title:`${t.title} (HTTP ${n})`}return e instanceof Error?e.message:String(e)}function H$(e,t){return e===void 0||t&&e===null?!0:Array.isArray(e)?e.length===0:!1}function U$(e,t){return e.some(e=>H$(e,t))}function W$(e){return e.data!==void 0}function G$(e){let t=W$(e);return{hasData:t,data:t?e.data:void 0,initialLoading:e.isFetching&&!t,refreshing:t&&e.isFetching,blockingError:e.isError&&!t,staleError:e.isError&&t,error:e.error??void 0}}function K$(e){return e.map(e=>e.data)}function q$(e){let t=e,n=t.length>0&&t.every(e=>e.data!==void 0),r=t.find(e=>e.data===void 0&&e.isError),i=n?t.find(e=>e.data!==void 0&&e.isError):void 0,a=r?.error??i?.error;return{allHaveData:n,dataTuple:n?K$(e):void 0,initialLoading:!n&&t.some(e=>e.data===void 0&&e.isFetching),refreshing:n&&t.some(e=>e.isFetching),blockingError:r!==void 0,staleError:n&&i!==void 0,error:a}}function J$(e){return u`
    min-height: ${e}px;
  `}function Y$(e,t){return u`
    width: ${e};
    height: ${t}px;
  `}var X$,Z$,Q$,$$,e1,t1,n1,r1,i1,a1,o1,s1,c1,l1,u1,d1,f1,p1,m1,h1,g1,_1,v1,y1,b1,x1;function S1(){return(S1=t((()=>{l(),X$=o`
  0% { transform: translateX(-130%); }
  100% { transform: translateX(130%); }
`,Z$=o`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(420%); }
`,Q$=u`
  position: relative;
  width: 100%;
  min-width: 0;
`,$$=u`
  isolation: isolate;
`,e1=u`
  background: var(--query-skeleton-surface-light);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-light);
`,t1=u`
  background: var(--query-skeleton-surface-dark);
  border: var(--query-border-width) solid var(--query-skeleton-surface-border-dark);
`,n1=u`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: calc(var(--space-4) + var(--space-1));
`,r1=u`
  position: absolute;
  inset: 0;
  padding: calc(var(--space-4) + var(--space-1));
  display: grid;
  gap: calc(var(--space-3) + var(--space-2));
  align-content: start;
`,i1=`
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--query-shimmer-edge) 35%,
    var(--query-shimmer-mid) 50%,
    var(--query-shimmer-edge) 65%,
    transparent 100%
  );
`,a1=u`
  background: var(--query-skeleton-block-light);

  &::after {
    ${i1}
  }
`,o1=u`
  background: var(--query-skeleton-block-dark);

  &::after {
    ${i1}
  }
`,s1=u`
  border-radius: calc(var(--space-3) + var(--space-2));
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    animation: ${X$} var(--query-shimmer-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,c1=u`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
`,l1=u`
  background: var(--query-progress-track-light);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-light), transparent);
  }
`,u1=u`
  background: var(--query-progress-track-dark);

  &::after {
    background: linear-gradient(90deg, transparent, var(--query-progress-beam-dark), transparent);
  }
`,d1=u`
  position: absolute;
  inset: 0 0 auto 0;
  height: var(--space-1);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 28%;
    animation: ${Z$} var(--query-progress-beam-duration) linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`,f1=u`
  margin-bottom: calc(var(--space-3) + var(--space-2));
`,p1=u`
  transition: var(--query-content-transition);
`,m1=u`
  filter: blur(var(--query-refresh-blur));
  opacity: var(--query-refresh-content-opacity);
  transform: scale(var(--query-refresh-content-scale));
`,h1=u`
  pointer-events: none;
`,g1=u`
  margin: 0 0 var(--space-3);
`,_1=u`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
`,v1=u`
  padding: var(--space-4);
  border-radius: calc(var(--space-3) + var(--space-2));
  border: var(--query-border-width) solid var(--field-border-color-invalid);
  background: var(--color-crimson-25);
`,y1=u`
  font-size: var(--font-size-1);
  color: var(--field-message-color-invalid);
`,b1=o`
  to { transform: rotate(360deg); }
`,x1=u`
  width: var(--space-5);
  height: var(--space-5);
  border-radius: 50%;
  border: var(--space-1) solid var(--color-green-600);
  border-right-color: transparent;
  animation: ${b1} var(--query-spinner-duration) linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`})))()}function C1(e,t){let[n,r]=(0,k1.useState)(!1);return(0,k1.useEffect)(()=>{if(!e){r(!1);return}let n=setTimeout(()=>r(!0),t);return()=>clearTimeout(n)},[e,t]),n}function w1(e){let[t,n]=(0,k1.useState)(!1),r=(0,k1.useRef)(!1);return(0,k1.useEffect)(()=>{if(e){r.current=!0,n(!1);return}if(!r.current)return;r.current=!1,n(!0);let t=setTimeout(()=>n(!1),P1);return()=>clearTimeout(t)},[e]),{settling:t,onContentTransitionEnd:e=>{e.target===e.currentTarget&&e.propertyName===`filter`&&n(!1)}}}function T1({error:e,retry:t}){let{t:n}=i();return(0,A1.jsx)(`div`,{className:v1,role:`alert`,children:(0,A1.jsxs)(`div`,{className:_1,children:[(0,A1.jsx)(`p`,{className:g1,children:V$(e)}),(0,A1.jsx)(Hb,{type:`button`,variant:`secondary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})})}function E1({error:e,retry:t}){let{t:n}=i();return(0,A1.jsxs)(`div`,{className:_1,children:[(0,A1.jsx)(`div`,{className:y1,role:`status`,children:V$(e)}),(0,A1.jsx)(Hb,{type:`button`,variant:`tertiary`,size:`small`,onPress:t,children:n(`queryResult.retry`)})]})}function D1(e){return e==null||e===!1}function O1({themeMode:e,minHeight:t=N1,loadingDelayMs:n=200,refreshIndicator:r=`blur`,initialLoading:a,refreshing:o,blockingError:s,staleError:l,error:u,retry:d,children:f,contentClassName:p,renderBlockingError:m,renderStaleError:h}){let{t:g}=i(),_=!!I$(),v=C1(a,n),y=r!==`quiet`&&o,{settling:b,onContentTransitionEnd:x}=w1(y),S=e===`dark`?t1:e1,C=e===`dark`?o1:a1,w=e===`dark`?u1:l1;if(s&&u!==void 0){let e={error:u,retry:d};return m?m(e):(0,A1.jsx)(T1,{...e})}if(a){let e=g(`queryResult.loading`);return(0,A1.jsx)(`section`,{className:c(Q$,$$),role:`status`,"aria-live":`polite`,"aria-busy":`true`,"aria-label":e,"data-testid":`query-initial-loading`,children:(0,A1.jsxs)(`div`,{className:c(n1,S,J$(t)),children:[(0,A1.jsx)(`div`,{className:r1,"data-testid":`query-skeleton-blocks`,children:j1.map((e,t)=>(0,A1.jsx)(`div`,{className:c(s1,C,Y$(e.width,e.height))},t))}),v?(0,A1.jsx)(z$.div,{className:c1,initial:!_&&{opacity:0},animate:{opacity:1},transition:{duration:.2},children:(0,A1.jsx)(`div`,{className:x1,"data-testid":`query-loading-spinner`,"aria-hidden":!0})}):null]})})}let T=l&&u!==void 0?{error:u,retry:d}:void 0;return T===void 0&&!o&&!b&&D1(f)?null:(0,A1.jsxs)(`section`,{className:c(Q$,o?$$:void 0),"aria-busy":o||b?`true`:void 0,...(o||b)&&{"data-testid":`query-refreshing`},children:[o?(0,A1.jsx)(`div`,{role:`status`,"aria-live":`polite`,"aria-label":g(`queryResult.refreshing`),"data-testid":`query-refreshing-status`}):null,o?(0,A1.jsx)(`div`,{className:c(d1,w),"aria-hidden":!0}):null,(0,A1.jsxs)(z$.div,{initial:!_&&{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.18,ease:M1},children:[T?(0,A1.jsx)(z$.div,{className:f1,initial:!_&&{opacity:0},animate:{opacity:1},children:h?h(T):(0,A1.jsx)(E1,{...T})}):null,(0,A1.jsx)(`div`,{className:c(p1,y?m1:void 0,y||b?h1:void 0,p),onTransitionEnd:x,children:f})]})]})}var k1,A1,j1,M1,N1,P1;function F1(){return(F1=t((()=>{l(),B$(),k1=e(r()),a(),Ub(),S1(),A1=G(),j1=[{width:`55%`,height:14},{width:`100%`,height:22},{width:`72%`,height:14}],M1=[.2,0,0,1],N1=120,P1=600})))()}function I1({query:e,themeMode:t=`light`,children:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){let f=G$(e),p=()=>{e.refetch()},m=f.hasData&&f.data!==void 0?!a&&H$(f.data,i)?r:n(f.data):null;return(0,L1.jsx)(O1,{themeMode:t,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,...Y({error:f.error}),retry:p,...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:m})}var L1;function R1(){return(R1=t((()=>{r(),F1(),L1=G()})))()}function z1({queries:e,themeMode:t=`light`,renderData:n,emptyFallback:r=null,treatNullAsEmpty:i=!1,treatEmptyAsData:a=!1,minHeight:o,loadingDelayMs:s,refreshIndicator:c,contentClassName:l,renderBlockingError:u,renderStaleError:d}){if(e.length===0)return null;let f=q$(e),p=()=>{let t=e.filter(e=>e.isError),n=t.length>0?t:e;Promise.all(n.map(e=>e.refetch()))},m=f.dataTuple,h=m?Array.isArray(m)?[...m]:Object.values(m):[],g=f.allHaveData&&m?!a&&U$(h,i)?r:n(m,e):null;return(0,B1.jsx)(O1,{themeMode:t,initialLoading:f.initialLoading,refreshing:f.refreshing,blockingError:f.blockingError,staleError:f.staleError,retry:p,...Y({minHeight:o}),...Y({loadingDelayMs:s}),...Y({refreshIndicator:c}),...Y({contentClassName:l}),...Y({error:f.error}),...Y({renderBlockingError:u}),...Y({renderStaleError:d}),children:g})}var B1;function V1(){return(V1=t((()=>{r(),F1(),B1=G()})))()}function H1(){return(H1=t((()=>{Ub(),yw(),KT(),Rj(),Uj(),iM(),vM(),EM(),ZM(),RN(),bN(),zN(),mP(),hP(),xP(),DP(),jP(),IP(),RP(),BP(),VP(),HP(),YP(),aF(),oF(),wF(),NF(),FF(),RF(),LF(),$F(),eI(),cI(),lI(),CI(),wI(),TI(),EI(),NI(),BI(),kI(),VI(),aL(),pL(),pR(),mR(),F1(),R1(),V1()})))()}export{Rj as $,MP as A,LN as B,NF as C,aF as D,iF as E,DP as F,ZM as G,rN as H,gP as I,Xj as J,_M as K,xP as L,OP as M,jP as N,JP as O,CP as P,Pj as Q,oP as R,MF as S,wF as T,bN as U,RN as V,VM as W,zj as X,iM as Y,Uj as Z,CI as _,R1 as a,fx as at,QF as b,fL as c,Ub as ct,aL as d,BT as et,zI as f,SI as g,NI as h,I1 as i,jS as it,IP as j,YP as k,pL as l,MI as m,z1 as n,hw as nt,sR as o,Jb as ot,BI as p,vM as q,V1 as r,yw as rt,pR as s,Hb as st,H1 as t,KT as tt,iL as u,sI as v,CF as w,$F as x,cI as y,mP as z};